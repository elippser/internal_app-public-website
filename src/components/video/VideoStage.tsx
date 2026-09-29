"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import type { Locale } from "@/i18n/config";
import { SCENES } from "./scenes";
import { easeOut, seg, type Beat } from "./timeline";
import type { VideoDict } from "./timeline";
import s from "./HeroVideo.module.css";
import { OrientProvider, STAGE_DIMS, type Orient } from "./orientation";

/**
 * El escenario del video: el reparto de beats sobre 1280×720, escalado entero
 * al tamaño de su contenedor.
 *
 * Está separado de `HeroVideo` porque hay dos cosas que lo usan con relojes
 * distintos: el reproductor de la página pública y el editor de la voz en off
 * (`editor/VideoEditor.tsx`). El escenario no tiene reloj propio a propósito —
 * recibe el instante ya calculado— así que el que lo monta decide si el tiempo
 * corre solo, lo arrastra una barra o lo manda el audio.
 */

export const STAGE_W = 1280;
export const STAGE_H = 720;

export type StageFit = { scale: number; x: number; y: number };

/**
 * Cuánto hay que escalar y correr el escenario para que entre centrado en el
 * elemento que lo contiene. Un video no reacomoda su contenido: se agranda o se
 * achica entero.
 */
export function useStageFit(ref: RefObject<HTMLElement | null>, orient: Orient = "landscape"): StageFit {
  const [fit, setFit] = useState<StageFit>({ scale: 1, x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const { w, h } = STAGE_DIMS[orient];
      const scale = Math.min(width / w, height / h);
      setFit({
        scale,
        x: (width - w * scale) / 2,
        y: (height - h * scale) / 2,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, orient]);

  return fit;
}

/**
 * Cómo entra cada escena. Casi todas entran por corte y se ocupan de su propia
 * entrada (blur, cuña, círculo); sólo la primera y las que lo piden se funden.
 */
function sceneStyle(b: Beat, t: number): CSSProperties {
  if (b.enter === "fade" && t < b.start + b.enterDur) {
    const p = easeOut(seg(t, b.start, b.start + b.enterDur));
    return { opacity: p, filter: `blur(${((1 - p) * 10).toFixed(2)}px)` };
  }
  return {};
}

export default function VideoStage({
  beats,
  t,
  epoch,
  paused,
  v,
  locale,
  fit,
  label,
  orient = "landscape",
}: {
  beats: Beat[];
  /** El instante que se dibuja, en ms desde el principio del video. */
  t: number;
  /** Cambia para remontar las escenas: un salto no puede dejarlas a mitad. */
  epoch: number;
  paused: boolean;
  v: VideoDict;
  locale: Locale;
  fit: StageFit;
  label: string;
  /** Horizontal (1280×720) o vertical (720×1280, `?view=mobile`). */
  orient?: Orient;
}) {
  const stageRef = useRef<HTMLDivElement>(null);

  // Después de un salto, las animaciones CSS finitas de lo que quedó a la vista
  // terminan en su estado final: arrancan al montar, así que en pausa quedaban
  // congeladas en su primer cuadro (el chat se veía vacío). Las infinitas (el
  // giro del orbe, los pulsos) siguen su curso.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    for (const a of stage.getAnimations({ subtree: true })) {
      if (a.effect?.getComputedTiming().endTime === Infinity) continue;
      try {
        a.finish();
      } catch {
        /* una animación sin fin declarado: se deja */
      }
    }
  }, [epoch]);

  return (
    <div
      ref={stageRef}
      className={s.stage}
      style={{ transform: `translate(${fit.x}px, ${fit.y}px) scale(${fit.scale})` }}
      aria-label={label}
      role="img"
      data-stage=""
      data-orient={orient}
    >
      <OrientProvider orient={orient}>
      {beats.map((b, i) => {
        // Una escena puede premontarse (para verse por el agujero de la
        // anterior) y quedarse por encima de la que sigue mientras conviven.
        if (t < b.start - b.preroll || t >= b.until) return null;
        const Scene = SCENES[b.id];
        // Dividido por la escala: la escena dibuja a partir de su tiempo local,
        // así que entregándoselo comprimido corre TODA su animación en
        // proporción y no se queda congelada al final. Ninguna de las 24 sabe
        // que esto existe.
        const lt = (t - b.start) / b.escala;
        const z = b.over ? 100 + (beats.length - i) : i * 2;
        return (
          <div
            key={`${b.id}-${epoch}`}
            className={s.sceneWrap}
            style={{ zIndex: z, ...sceneStyle(b, t) }}
          >
            <Scene lt={lt} v={v} locale={locale} paused={paused} />
          </div>
        );
      })}
      </OrientProvider>
    </div>
  );
}
