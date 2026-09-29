"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import VideoStage, { useStageFit } from "./VideoStage";
import { buildBeats, planChat, totalMs, type Escalas, type VideoDict } from "./timeline";
import s from "./HeroVideo.module.css";

/**
 * El video como superficie embebible: `/{lang}/video?embed=1`.
 *
 * Es lo que ve el editor de videos del panel interno dentro de un iframe. No
 * tiene reloj, ni controles, ni audio: **sólo dibuja el instante que le
 * mandan**. El reloj y el sonido los lleva el panel, que es el que tiene las
 * pistas; así hay UNA sola cabeza de reproducción y no dos relojes que se
 * separan solos.
 *
 * El diálogo es por `postMessage` porque el panel vive en otro origen. Arranca
 * con un saludo (`vo:hello`) en cuanto hay quién escuche, y el panel contesta
 * con el estado; hacia adentro entran después `t`, el remonte y las escalas de
 * escena; hacia afuera sale un aviso cada vez que cambian los beats de ese idioma
 * —que el panel necesita para dibujar la regla y no puede calcular solo, porque
 * dependen del largo del tipeo del chat—.
 *
 * Por qué el panel manda `t` en cada cuadro en vez de dejar que esto corra solo:
 * un `postMessage` local cuesta menos que un cuadro de video, y a cambio el
 * audio queda clavado al reloj del panel sin ningún mecanismo de resincronizado
 * entre las dos mitades.
 */

type Mensaje =
  | { type: "vo:frame"; t: number; epoch: number; paused: boolean }
  | { type: "vo:scenes"; scenes: Escalas };

export default function VideoEmbed({ locale, v }: { locale: Locale; v: VideoDict }) {
  const [t, setT] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [paused, setPaused] = useState(true);
  const [scenes, setScenes] = useState<Escalas>({});

  const hostRef = useRef<HTMLDivElement>(null);
  const fit = useStageFit(hostRef);

  const chatDuration = useMemo(() => planChat(v.chat).duration, [v.chat]);
  const beats = useMemo(() => buildBeats(chatDuration, scenes), [chatDuration, scenes]);
  const total = totalMs(beats);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const m = e.data as Mensaje | null;
      if (!m || typeof m !== "object") return;
      if (m.type === "vo:frame") {
        setT(m.t);
        setPaused(m.paused);
        setEpoch(m.epoch);
      } else if (m.type === "vo:scenes") {
        setScenes(m.scenes ?? {});
      }
    };
    window.addEventListener("message", onMsg);
    // Recién ahora hay alguien escuchando: se avisa, y el panel contesta con el
    // estado. Sin este saludo, todo lo que el panel mande UNA sola vez —las
    // escalas de escena— se pierde: este iframe es una página entera y tarda en
    // montar mucho más de lo que el panel tarda en leer el montaje.
    window.parent?.postMessage({ type: "vo:hello" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // "Este instante ya está en el DOM." Lo usa la exportación a MP4 del API
  // interno, que lleva el video cuadro por cuadro y no puede sacar la foto
  // antes de que React haya aplicado el cambio. Es un layout effect para que
  // salga con el DOM ya cambiado; el editor lo ignora.
  useLayoutEffect(() => {
    window.parent?.postMessage({ type: "vo:drawn", t }, "*");
  }, [t]);

  // El panel no puede calcular los beats por su cuenta: el del chat se mide del
  // tipeo real del idioma. Se los mandamos cada vez que cambian.
  useEffect(() => {
    window.parent?.postMessage(
      {
        type: "vo:ready",
        total,
        beats: beats.map((b) => ({ id: b.id, start: b.start, end: b.end, escala: b.escala })),
      },
      "*",
    );
  }, [beats, total]);

  return (
    <div ref={hostRef} className={[s.embed, paused ? s.paused : ""].join(" ")}>
      <VideoStage
        beats={beats}
        t={Math.min(t, total - 1)}
        epoch={epoch}
        paused={paused}
        v={v}
        locale={locale}
        fit={fit}
        label={v.meta.description}
      />
    </div>
  );
}
