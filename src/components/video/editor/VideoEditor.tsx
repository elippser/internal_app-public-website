"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type DragEvent as ReactDragEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Locale } from "@/i18n/config";
import VideoStage, { useStageFit } from "../VideoStage";
import {
  buildBeats,
  ESCALA_MAX,
  ESCALA_MIN,
  planChat,
  totalMs,
  type BeatId,
  type Escalas,
  type VideoDict,
} from "../timeline";
import { buildCues, cueAt, enCastellano } from "../voiceover";
import hero from "../HeroVideo.module.css";
import s from "./VideoEditor.module.css";
import {
  addEnvPoint,
  canSplit,
  clipAt,
  clockMs,
  cropClip,
  duplicateClip,
  emptyTrack,
  ENV_MAX,
  envAt,
  insertGap,
  insertAudio,
  moveClipToTrack,
  moveEnvPoint,
  moveTrack,
  removeEnvPoint,
  newId,
  placed,
  removeClip,
  retuneClips,
  rateOf,
  setClipDur,
  setClipStart,
  stretchClipDur,
  splitClip,
  timelineEnd,
  trackEnd,
  type Clip,
  type Track,
} from "./model";
import { readDuration, readDurationFrom, urlDe, useVoAudio } from "./useVoAudio";

/**
 * La mesa de montaje de la voz en off del video de portada.
 *
 * Vive en la misma página que el reproductor (`/{lang}/video?edit=1`) y comparte
 * con él el escenario y el reloj: `VideoStage` dibuja el instante que se le
 * pase, así que acá el tiempo lo manda la cabeza de reproducción del editor y
 * el audio la sigue cuadro a cuadro (`useVoAudio`).
 *
 * De arriba abajo: el transporte, el video a 40 vh, el subtítulo con lo que la
 * voz tiene que decir en ese instante (`voiceover.ts`) y las pistas. El montaje
 * se guarda solo contra la base, a través de `/api/video/vo`.
 *
 * Los dos gestos que valen la pena conocer: **ctrl + rueda** amplía la línea de
 * tiempo alrededor del puntero, y **arrastrar un clip** no lo teletransporta,
 * estira el silencio que tiene delante (ver `model.ts`).
 */

/** El ancho de la columna de nombres. Los clips arrancan después. */
const LABEL_W = 156;
const MIN_ZOOM = 6;
const MAX_ZOOM = 900;
/** Silencio que mete el botón, en ms. */
const GAP_STEP = 1000;
/** Cuánto se pega un clip a una marca cercana, en píxeles. */
const SNAP_PX = 7;

/**
 * Un color por pista, por POSICIÓN y no por identidad: así una pista nueva
 * estrena color sola y no hay nada que guardar en la base ni migrar. Se reparte
 * por el tono, no por el brillo, para que se distingan de un vistazo sin que
 * ninguna pese más que las otras; si hay más pistas que colores, se repite.
 */
const PALETA = [
  { a: "#5f7f32", b: "#47622a", linea: "rgba(200, 226, 147, 0.45)" }, // verde de marca
  { a: "#8f5b20", b: "#6f4415", linea: "rgba(230, 201, 138, 0.45)" }, // ámbar
  { a: "#3a5a7a", b: "#2b4358", linea: "rgba(160, 200, 232, 0.42)" }, // azul
  { a: "#a75432", b: "#823f25", linea: "rgba(240, 180, 150, 0.42)" }, // arcilla
  { a: "#63497e", b: "#4b375f", linea: "rgba(206, 180, 232, 0.42)" }, // violeta
  { a: "#2f6b63", b: "#22514b", linea: "rgba(150, 214, 203, 0.42)" }, // verde azulado
];
const colorDe = (i: number) => PALETA[i % PALETA.length];

type Status = "loading" | "idle" | "saving" | "saved" | "error" | "stale";

type DragState =
  | {
      mode: "clip" | "resize";
      trackId: string;
      clipId: string;
      x0: number;
      base: number;
      tracks: Track[];
      /**
       * Un arrastre no empieza hasta que el puntero se movió de verdad. Sin
       * esto, apretar sobre un clip para poner la línea del corte lo movía unos
       * milisegundos, y además no había forma de distinguir un click de un
       * arrastre de cero píxeles.
       */
      movido: boolean;
      /** Con shift, el borde derecho estira en vez de recortar. */
      estira?: boolean;
    }
  | { mode: "head"; x0: number }
  | { mode: "track"; trackId: string; desde: number }
  | { mode: "escena"; id: BeatId; x0: number; dur0: number; escala0: number }
  /** Un punto de la curva de volumen. `top`/`h` son la caja del carril. */
  | { mode: "env"; trackId: string; index: number; top: number; h: number }
  /** Un borde de la ventana de recorte. */
  | { mode: "crop"; lado: "a" | "b" }
  | null;

/** Menú del botón derecho: sobre un clip, o sobre el fondo de una pista. */
type Menu = { x: number; y: number; trackId: string; clipId: string | null };

/**
 * La ventana de recorte de un clip, mientras se está eligiendo.
 *
 * Es un estado aparte y no un cambio en la pista a propósito: recortar es una
 * decisión que se toma mirando, moviendo los dos bordes, y recién al confirmar
 * se toca el montaje. Así no quedan veinte pasos de deshacer por un ajuste.
 * `min`/`max` son los bordes del clip, que es hasta donde se puede abrir.
 */
type Recorte = {
  trackId: string;
  clipId: string;
  desde: number;
  hasta: number;
  min: number;
  max: number;
};

/** Cuánto hay que mover el puntero para que sea un arrastre y no un click. */
const DRAG_PX = 3;

/**
 * El alto del carril de una pista, en px. **Tiene que coincidir con `.track` del
 * CSS**: la curva de volumen se dibuja en un SVG de este alto, y si no coinciden
 * los puntos quedan corridos de donde se los ve.
 */
const TRACK_H = 62;

/**
 * Cuánta quietud hace falta para cerrar un paso del historial.
 *
 * Es lo que agrupa un gesto entero en UN solo deshacer: arrastrar un clip
 * dispara `setTracks` en cada cuadro y barrer el volumen en cada pixel, así que
 * anotar cada estado dejaría cincuenta pasos por gesto y `ctrl+z` no serviría
 * para nada. Al agrupar por quietud no hay que acordarse de envolver cada
 * operación nueva: alcanza con que toque `tracks`.
 */
const HIST_MS = 400;
/** Techo de pasos guardados. Son fotos del montaje entero. */
const HIST_MAX = 60;

/**
 * El trazo de la curva de volumen de una pista.
 *
 * Fuera del primer y del último punto la curva se mantiene plana —no vuelve a
 * 1—, que es lo que uno espera: si se baja el final, el final se queda bajo.
 */
function envPath(track: Track, ancho: number, pxPerMs: number): string {
  const y = (v: number) => ((1 - v / ENV_MAX) * TRACK_H).toFixed(1);
  const pts = track.env ?? [];
  if (!pts.length) return `M 0 ${y(1)} L ${ancho.toFixed(1)} ${y(1)}`;
  const tramos = pts.map((p) => `L ${(p.at * pxPerMs).toFixed(1)} ${y(p.v)}`).join(" ");
  return `M 0 ${y(pts[0].v)} ${tramos} L ${ancho.toFixed(1)} ${y(pts[pts.length - 1].v)}`;
}

/** Un paso de regla que deje las marcas a más de 62 px, en ms. */
const STEPS = [100, 250, 500, 1000, 2000, 5000, 10_000, 15_000, 30_000, 60_000];
function rulerStep(pxPerMs: number): number {
  return STEPS.find((ms) => ms * pxPerMs >= 62) ?? STEPS[STEPS.length - 1];
}

function Icon({ d, fill = false }: { d: string; fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

export default function VideoEditor({ locale, v }: { locale: Locale; v: VideoDict }) {
  /** Cuánto se estiró o se achicó cada escena. Va a la base con el montaje. */
  const [escalas, setEscalas] = useState<Escalas>({});

  const chatDuration = useMemo(() => planChat(v.chat).duration, [v.chat]);
  const beats = useMemo(() => buildBeats(chatDuration, escalas), [chatDuration, escalas]);
  const videoMs = totalMs(beats);
  const cues = useMemo(() => buildCues(beats, locale), [beats, locale]);

  const [tracks, setTracks] = useState<Track[]>([]);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [pxPerSec, setPxPerSec] = useState(40);
  const [status, setStatus] = useState<Status>("loading");
  const [selected, setSelected] = useState<string | null>(null);
  const [busy, setBusy] = useState(0);
  const [dropOn, setDropOn] = useState<string | null>(null);
  const [menu, setMenu] = useState<Menu | null>(null);
  const [recorte, setRecorte] = useState<Recorte | null>(null);
  const recorteRef = useRef<Recorte | null>(null);
  recorteRef.current = recorte;
  /** Mientras se reordenan pistas: en qué hueco caería la que se arrastra. */
  const [aDonde, setADonde] = useState<number | null>(null);
  /** Sólo para pintar los botones: lo que manda es `histRef`. */
  const [hist, setHist] = useState({ atras: 0, adelante: 0 });
  /** Marca de tiempo de cada archivo, para pedirlo sin caché cuando cambió. */
  const [versiones, setVersiones] = useState<Map<string, number | null>>(new Map());
  /** Qué archivos cambiaron de largo en esta carga. Se muestra un rato y se va. */
  const [aviso, setAviso] = useState<string | null>(null);

  const hostRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const tRef = useRef(0);
  const playingRef = useRef(false);
  const pxPerMsRef = useRef(pxPerSec / 1000);
  const dragRef = useRef<DragState>(null);
  const zoomAnchor = useRef<{ ms: number; clientX: number } | null>(null);
  const savedRef = useRef<string | null>(null);
  /** Las pistas tal como quedaron en el último paso cerrado del historial. */
  const baseRef = useRef<Track[] | null>(null);
  const histRef = useRef<{ atras: Track[][]; adelante: Track[][] }>({ atras: [], adelante: [] });
  const tracksRef = useRef<Track[]>(tracks);
  tracksRef.current = tracks;
  /**
   * El sello de la última lectura. Viaja en cada guardado y el API lo compara:
   * si la base cambió desde que se abrió esta pestaña, el guardado se rechaza
   * y acá se relee, en vez de pisar. Sin esto una pestaña que quedó abierta
   * desde antes de un cambio lo borra en silencio (pasó: se perdió el montaje
   * entero de un idioma).
   */
  const selloRef = useRef<string | null>(null);

  const fit = useStageFit(hostRef);
  const { sync, stopAll } = useVoAudio(tracks, versiones);

  const escalasRef = useRef<Escalas>(escalas);
  escalasRef.current = escalas;

  const pxPerMs = pxPerSec / 1000;
  pxPerMsRef.current = pxPerMs;

  /** La línea de tiempo llega hasta donde llegue lo más largo de los dos. */
  const total = Math.max(videoMs, timelineEnd(tracks));
  const contentW = total * pxPerMs + 160;

  // ------------------------------------------------------------- el reloj --
  /**
   * Trae la cabeza de reproducción al cuadro si se fue. Sólo cuando se fue: si
   * corriera el scroll en cada cuadro, la línea de tiempo se deslizaría todo el
   * tiempo bajo el mouse y no se podría agarrar nada mientras corre.
   */
  const follow = useCallback((ms: number) => {
    const el = boardRef.current;
    if (!el) return;
    const x = LABEL_W + ms * pxPerMsRef.current;
    const izq = el.scrollLeft + LABEL_W + 40;
    const der = el.scrollLeft + el.clientWidth - 90;
    if (x < izq || x > der) el.scrollLeft = x - LABEL_W - el.clientWidth * 0.2;
  }, []);

  const seek = useCallback(
    (ms: number, remount = true) => {
      const next = Math.max(0, Math.min(total, ms));
      tRef.current = next;
      setT(next);
      // Un salto deliberado (una escena, una línea del guion) trae la vista con
      // él; arrastrar la cabeza no, que ahí manda el mouse.
      if (remount) {
        setEpoch((e) => e + 1);
        follow(next);
      }
    },
    [total, follow],
  );

  const setPlay = useCallback(
    (on: boolean) => {
      if (on && tRef.current >= total - 30) seek(0);
      playingRef.current = on;
      setPlaying(on);
      if (!on) stopAll();
    },
    [total, seek, stopAll],
  );

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      if (playingRef.current) {
        const next = tRef.current + dt;
        if (next >= total) {
          tRef.current = total;
          setT(total);
          playingRef.current = false;
          setPlaying(false);
        } else {
          tRef.current = next;
          setT(next);
          follow(next);
        }
      }
      sync(tRef.current, playingRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total, sync, follow]);

  // ------------------------------------------------------- base de datos --
  /**
   * Le pregunta al servidor la versión de cada archivo del montaje y, con ella,
   * relee el largo REAL de cada uno.
   *
   * Hace falta porque los archivos se reemplazan por otros con el MISMO nombre
   * mientras se prueban locuciones: el `src` guardado no cambia, así que sin la
   * versión el navegador sigue sirviendo el audio viejo de su caché y el clip
   * sigue midiendo lo que medía el archivo anterior.
   */
  const frescas = useCallback(async (lista: Track[]): Promise<Track[]> => {
    const srcs = [
      ...new Set(lista.flatMap((t) => t.clips.filter((c) => c.kind === "audio" && c.src).map((c) => c.src))),
    ];
    if (!srcs.length) return lista;

    let vers = new Map<string, number | null>();
    try {
      const res = await fetch(`/api/video/vo/audio?srcs=${encodeURIComponent(srcs.join(","))}`, {
        cache: "no-store",
      });
      const body = (await res.json()) as { files?: { src: string; v: number | null }[] };
      vers = new Map((body.files ?? []).map((f) => [f.src, f.v]));
    } catch (err) {
      // Sin versiones se sigue igual, con lo que haya en la caché: es una
      // molestia, no un motivo para dejar el editor sin montaje.
      console.warn("[editor] no se pudieron leer las versiones de los audios", err);
      return lista;
    }
    setVersiones(vers);

    const real = new Map<string, number>();
    await Promise.all(
      srcs.map(async (src) => {
        const ms = await readDurationFrom(urlDe(src, vers));
        if (ms > 0) real.set(src, ms);
      }),
    );

    const { tracks: puestas, cambios } = retuneClips(lista, real);
    if (cambios.length) {
      console.info("[editor] archivos que cambiaron de largo:", cambios);
      setAviso(cambios.join(" · "));
      window.setTimeout(() => setAviso(null), 9000);
    }
    return puestas;
  }, []);

  useEffect(() => {
    let vivo = true;
    (async () => {
      try {
        const res = await fetch(`/api/video/vo?locale=${locale}`, { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const body = (await res.json()) as { tracks?: Track[]; scenes?: Escalas; updatedAt?: string | null };
        if (!vivo) return;
        const cargadas = body.tracks?.length ? body.tracks : [emptyTrack("Voz en off")];
        setEscalas(body.scenes ?? {});
        const puestas = await frescas(cargadas);
        if (!vivo) return;

        selloRef.current = body.updatedAt ?? null;
        // El sello del guardado se compara contra lo que vino de la BASE, no
        // contra lo ajustado: si un archivo cambió de largo, eso ES un cambio y
        // tiene que guardarse solo.
        savedRef.current = JSON.stringify({ tracks: cargadas, escalas: body.scenes ?? {} });
        // Al abrir (y al cambiar de idioma) el historial arranca de cero.
        baseRef.current = puestas;
        histRef.current = { atras: [], adelante: [] };
        setHist({ atras: 0, adelante: 0 });
        setTracks(puestas);
        // Recién leído es exactamente lo que hay en la base: "sin guardar" acá
        // era mentira y encima la de peor signo.
        setStatus("saved");
      } catch (err) {
        console.error("[editor] no se pudo leer el montaje", err);
        if (!vivo) return;
        // Sin base no se edita a ciegas: se muestra el error y se deja una
        // pista vacía para poder mirar el guion igual.
        setTracks([emptyTrack("Voz en off")]);
        setStatus("error");
      }
    })();
    return () => {
      vivo = false;
    };
  }, [locale, frescas]);

  const save = useCallback(
    async (json: string, siguientes: Track[]) => {
      setStatus("saving");
      try {
        const res = await fetch(`/api/video/vo?locale=${locale}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tracks: siguientes, scenes: escalasRef.current, videoMs, expectedUpdatedAt: selloRef.current }),
        });

        if (res.status === 409) {
          // La base cambió desde que se abrió esto. No se pisa: se relee y se
          // muestra lo que hay, aunque cueste el cambio que se acababa de hacer.
          console.warn("[editor] el montaje cambió en la base; recargando");
          const fresco = await fetch(`/api/video/vo?locale=${locale}`, { cache: "no-store" });
          const body = (await fresco.json()) as { tracks?: Track[]; scenes?: Escalas; updatedAt?: string | null };
          const cargadas = body.tracks?.length ? body.tracks : [emptyTrack("Voz en off")];
          selloRef.current = body.updatedAt ?? null;
          savedRef.current = JSON.stringify({ tracks: cargadas, escalas: body.scenes ?? {} });
          setEscalas(body.scenes ?? {});
          baseRef.current = cargadas;
          setTracks(cargadas);
          setStatus("stale");
          return;
        }
        if (!res.ok) throw new Error(String(res.status));

        const out = (await res.json()) as { updatedAt?: string | null };
        selloRef.current = out.updatedAt ?? null;
        savedRef.current = json;
        setStatus("saved");
      } catch (err) {
        console.error("[editor] no se pudo guardar", err);
        setStatus("error");
      }
    },
    [locale, videoMs],
  );

  // Se guarda solo: la última quietud de 900 ms después de tocar algo. Sin esto
  // hay que acordarse de apretar un botón después de cada arrastre, que es
  // justo el momento en el que uno está mirando otra cosa.
  useEffect(() => {
    if (savedRef.current === null) return;
    const json = JSON.stringify({ tracks, escalas });
    if (json === savedRef.current) return;
    setStatus("idle");
    const id = window.setTimeout(() => void save(json, tracks), 900);
    return () => window.clearTimeout(id);
  }, [tracks, escalas, save]);

  // ----------------------------------------------------------- historial --
  /**
   * Cierra un paso cuando el montaje se quedó quieto `HIST_MS`. Compara por
   * REFERENCIA contra `baseRef`: deshacer y rehacer ponen ahí el mismo arreglo
   * que mandan a `setTracks`, así que este efecto los ve y no los vuelve a
   * anotar como si fueran cambios nuevos.
   */
  useEffect(() => {
    if (baseRef.current === null || baseRef.current === tracks) return;
    const id = window.setTimeout(() => {
      const h = histRef.current;
      h.atras.push(baseRef.current!);
      if (h.atras.length > HIST_MAX) h.atras.shift();
      // Un cambio nuevo corta la rama de rehacer, como en cualquier editor.
      h.adelante = [];
      baseRef.current = tracks;
      setHist({ atras: h.atras.length, adelante: 0 });
    }, HIST_MS);
    return () => window.clearTimeout(id);
  }, [tracks]);

  const aplicar = useCallback((next: Track[]) => {
    // El orden importa: primero la base, para que el efecto de arriba no tome
    // esto por un cambio del usuario.
    baseRef.current = next;
    setTracks(next);
    setHist({ atras: histRef.current.atras.length, adelante: histRef.current.adelante.length });
  }, []);

  const deshacer = useCallback(() => {
    const h = histRef.current;
    const actual = tracksRef.current;
    // Si hay un cambio todavía sin cerrar (se deshace antes de los 400 ms), eso
    // es lo que se deshace: si no, ctrl+z parecería saltearse el último gesto.
    if (baseRef.current && baseRef.current !== actual) {
      h.adelante.push(actual);
      aplicar(baseRef.current);
      return;
    }
    const previo = h.atras.pop();
    if (!previo) return;
    h.adelante.push(actual);
    aplicar(previo);
  }, [aplicar]);

  const rehacer = useCallback(() => {
    const h = histRef.current;
    const siguiente = h.adelante.pop();
    if (!siguiente) return;
    h.atras.push(tracksRef.current);
    aplicar(siguiente);
  }, [aplicar]);

  // ------------------------------------------------------------- el zoom --
  const fitZoom = useCallback(() => {
    const el = boardRef.current;
    if (!el) return;
    const ancho = el.clientWidth - LABEL_W - 40;
    if (ancho > 80) {
      setPxPerSec(Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, (ancho / total) * 1000)));
      el.scrollLeft = 0;
    }
  }, [total]);

  const ajustado = useRef(false);
  useEffect(() => {
    if (ajustado.current || status === "loading") return;
    ajustado.current = true;
    fitZoom();
  }, [fitZoom, status]);

  /**
   * La rueda sobre las pistas: **ctrl** amplía, **shift** sube y baja, y sola
   * corre la línea de tiempo a lo largo.
   *
   * Que la rueda pelada vaya en HORIZONTAL es la decisión: acá el eje largo es
   * el tiempo —minuto y medio de video contra tres o cuatro pistas—, así que
   * desplazar es casi siempre desplazar en x. Sin esto la única forma era
   * arrastrar la barra, que además ahora está escondida.
   *
   * Va como listener nativo y no como `onWheel`: React los registra en pasivo, y
   * en un listener pasivo el `preventDefault` no corre — sin él el navegador
   * hace SU zoom de página con ctrl, y se lleva el gesto puesto.
   */
  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) {
        // Un trackpad manda el desplazamiento lateral en `deltaX`; un mouse no
        // tiene eje lateral, así que su `deltaY` se usa para lo mismo.
        const vertical = e.shiftKey && el.scrollHeight > el.clientHeight;
        if (vertical) return; // que lo haga el navegador
        e.preventDefault();
        el.scrollLeft += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        setMenu(null);
        return;
      }
      e.preventDefault();
      const r = el.getBoundingClientRect();
      const ms = (e.clientX - r.left + el.scrollLeft - LABEL_W) / pxPerMsRef.current;
      zoomAnchor.current = { ms, clientX: e.clientX };
      setPxPerSec((z) =>
        Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z * Math.pow(1.0016, -e.deltaY))),
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // El scroll se acomoda DESPUÉS de que el ancho nuevo esté en el DOM, o el
  // instante que estaba bajo el puntero se escapa a un costado.
  useLayoutEffect(() => {
    const a = zoomAnchor.current;
    const el = boardRef.current;
    if (!a || !el) return;
    zoomAnchor.current = null;
    const r = el.getBoundingClientRect();
    el.scrollLeft = a.ms * (pxPerSec / 1000) + LABEL_W - (a.clientX - r.left);
  }, [pxPerSec]);

  // ------------------------------------------------------ coordenadas -----
  const msFrom = useCallback((clientX: number) => {
    const el = boardRef.current;
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    return Math.max(0, (clientX - r.left + el.scrollLeft - LABEL_W) / pxPerMsRef.current);
  }, []);

  /**
   * Las marcas a las que se pega un clip al soltarlo: el arranque de cada
   * escena, el de cada línea del guion y los bordes de lo que ya hay en la
   * pista. Alinear una locución a mano con el píxel no es trabajo de nadie.
   */
  const imanes = useMemo(() => {
    const out = [0, ...beats.map((b) => b.start), ...cues.map((c) => c.start)];
    for (const tr of tracks) for (const p of placed(tr)) out.push(p.start, p.end);
    return out.sort((a, b) => a - b);
  }, [beats, cues, tracks]);

  const snap = useCallback(
    (ms: number) => {
      const tol = SNAP_PX / pxPerMsRef.current;
      let mejor = ms;
      let dist = tol;
      for (const m of imanes) {
        const d = Math.abs(m - ms);
        if (d < dist) {
          dist = d;
          mejor = m;
        }
      }
      return mejor;
    },
    [imanes],
  );

  /** La pista sobre la que está el puntero, por su posición vertical. */
  const pistaEn = useCallback((clientY: number): { id: string; i: number } | null => {
    const el = boardRef.current;
    if (!el) return null;
    const filas = [...el.querySelectorAll<HTMLElement>("[data-track]")];
    for (let i = 0; i < filas.length; i++) {
      const r = filas[i].getBoundingClientRect();
      if (clientY >= r.top && clientY < r.bottom) return { id: filas[i].dataset.track ?? "", i };
    }
    return null;
  }, []);

  // ------------------------------------------------------------ arrastre --
  const onPointerDown = (e: ReactPointerEvent, state: NonNullable<DragState>) => {
    // Sólo el botón principal. Sin esto el botón derecho arrastraba clips y,
    // peor, movía la línea del corte a donde se abría el menú: la gracia es
    // justamente que la línea se pone antes, a la vista, y el menú corta ahí.
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = state;
    if (state.mode === "head") {
      playingRef.current = false;
      setPlaying(false);
      stopAll();
      seek(msFrom(e.clientX), false);
    }
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    if (d.mode === "head") {
      seek(msFrom(e.clientX), false);
      return;
    }
    if (d.mode === "track") {
      const sobre = pistaEn(e.clientY);
      setADonde(sobre ? sobre.i : null);
      return;
    }
    if (d.mode === "crop") {
      const ms = msFrom(e.clientX);
      setRecorte((prev) => {
        if (!prev) return prev;
        return d.lado === "a"
          ? { ...prev, desde: Math.max(prev.min, Math.min(ms, prev.hasta - 40)) }
          : { ...prev, hasta: Math.min(prev.max, Math.max(ms, prev.desde + 40)) };
      });
      return;
    }
    if (d.mode === "env") {
      const at = Math.max(0, msFrom(e.clientX));
      // La ganancia sale de la altura dentro del carril: arriba 2, el medio 1
      // (el fader sin tocar) y abajo 0.
      const v = Math.max(0, Math.min(ENV_MAX, (1 - (e.clientY - d.top) / d.h) * ENV_MAX));
      mutate(d.trackId, (tr) => moveEnvPoint(tr, d.index, at, v));
      return;
    }
    if (d.mode === "escena") {
      // La escala sale de la duración que se está dibujando, no de un delta
      // acumulado: el borde tiene que quedar donde está el puntero.
      const dur = Math.max(1, d.dur0 + (e.clientX - d.x0) / pxPerMsRef.current);
      const escala = Math.max(ESCALA_MIN, Math.min(ESCALA_MAX, (d.escala0 * dur) / d.dur0));
      setEscalas((prev) => ({ ...prev, [d.id]: Number(escala.toFixed(4)) }));
      return;
    }
    if (!d.movido) {
      if (Math.abs(e.clientX - d.x0) < DRAG_PX) return;
      d.movido = true;
    }
    const delta = (e.clientX - d.x0) / pxPerMsRef.current;
    // Se calcula siempre contra la foto tomada al empezar: aplicar el gesto
    // sobre el resultado del movimiento anterior acumula error y el clip se
    // escapa del puntero.
    if (d.mode === "resize") {
      // Sin shift el borde RECORTA (lo que necesita la cama de música, un
      // archivo de tres minutos del que se usa minuto y medio); con shift
      // ESTIRA en proporción, que es lo que necesita una locución para entrar
      // justo en su escena.
      const estira = e.shiftKey || d.estira;
      setTracks(
        d.tracks.map((tr) => {
          if (tr.trackId !== d.trackId) return tr;
          const largo = Math.max(40, snap(d.base + delta) - startOf(tr, d.clipId));
          return estira ? stretchClipDur(tr, d.clipId, largo) : setClipDur(tr, d.clipId, largo);
        }),
      );
      return;
    }
    // Un clip no se mueve sólo en x: si el puntero se fue a otra fila, se muda
    // de pista. Se recalcula siempre desde la foto del `pointerdown`, así que
    // entrar y salir de una pista ajena no deja restos.
    const sobre = pistaEn(e.clientY);
    setTracks(
      moveClipToTrack(d.tracks, d.trackId, d.clipId, sobre?.id ?? d.trackId, snap(d.base + delta)),
    );
  };

  const onPointerUp = (e: ReactPointerEvent) => {
    const d = dragRef.current;
    dragRef.current = null;
    if (!d) return;
    if (d.mode === "track") {
      const sobre = pistaEn(e.clientY);
      setADonde(null);
      if (sobre && sobre.i !== d.desde) setTracks((prev) => moveTrack(prev, d.desde, sobre.i));
      return;
    }
    if (d.mode === "head") {
      seek(msFrom(e.clientX), true);
      return;
    }
    // Apretar y soltar sobre un clip sin moverse es un CLICK: lleva la línea de
    // corte a donde se apretó. Es el gesto con el que se elige por dónde partir.
    if (d.mode === "clip" && !d.movido) seek(msFrom(e.clientX), true);
  };

  /** Dónde arranca un clip en su pista. Para medir el borde que se arrastra. */
  function startOf(tr: Track, clipId: string): number {
    return placed(tr).find((p) => p.clip.clipId === clipId)?.start ?? 0;
  }

  // -------------------------------------------------------------- soltar --
  const subir = useCallback(async (file: File): Promise<Clip | null> => {
    const dur = await readDuration(file);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/video/vo/audio", { method: "POST", body: form });
    if (!res.ok) {
      console.error("[editor] no se pudo subir", file.name, res.status);
      return null;
    }
    const { src, name } = (await res.json()) as { src: string; name: string };
    return { clipId: newId("aud"), kind: "audio", src, name, dur, trim: 0, srcDur: dur };
  }, []);

  const onDrop = async (e: ReactDragEvent, trackId: string) => {
    e.preventDefault();
    setDropOn(null);
    const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("audio/"));
    if (!files.length) return;

    let at = snap(msFrom(e.clientX));
    setBusy((n) => n + files.length);
    for (const file of files) {
      const clip = await subir(file);
      setBusy((n) => n - 1);
      if (!clip) continue;
      const donde = at;
      setTracks((prev) =>
        prev.map((tr) => (tr.trackId === trackId ? insertAudio(tr, clip, donde) : tr)),
      );
      // Varios archivos de una vez van uno detrás del otro, no todos encimados.
      at += clip.dur;
    }
  };

  // Sonda para verificar desde Playwright sin tocar la UI. Va aparte de la del
  // reproductor (`__heroVideo`), que en esta página queda colgada del primer
  // cuadro —antes de que se sepa que hay `?edit=1`— y miente.
  useEffect(() => {
    (window as unknown as { __videoEditor?: unknown }).__videoEditor = {
      total,
      videoMs,
      escalas,
      beats: beats.map((b) => ({ id: b.id, start: b.start, end: b.end, escala: b.escala })),
      seek: (ms: number) => seek(ms),
    };
  }, [beats, total, videoMs, escalas, seek]);

  // ------------------------------------------------------------- recorte --
  const cerrarRecorte = useCallback((aplicar: boolean) => {
    const r = recorteRef.current;
    if (!r) return;
    setRecorte(null);
    if (!aplicar) return;
    setTracks((prev) =>
      prev.map((tr) => (tr.trackId === r.trackId ? cropClip(tr, r.clipId, r.desde, r.hasta) : tr)),
    );
  }, []);

  /**
   * Un click fuera de la ventana confirma, igual que `Enter`. Salir sin querer
   * y perder el ajuste sería peor que confirmarlo: si quedó mal, `ctrl+Z` lo
   * deshace de una, y `Escape` cancela antes de aplicar.
   */
  useEffect(() => {
    if (!recorte) return;
    const afuera = () => cerrarRecorte(true);
    window.addEventListener("pointerdown", afuera);
    return () => window.removeEventListener("pointerdown", afuera);
  }, [recorte, cerrarRecorte]);

  // --------------------------------------------------- menú del derecho --
  useEffect(() => {
    if (!menu) return;
    const cerrar = () => setMenu(null);
    const porTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    // El menú corta el pointerdown en su propio contenedor: si no, el gesto que
    // elige una opción lo cerraría antes de que el botón llegue a disparar.
    window.addEventListener("pointerdown", cerrar);
    window.addEventListener("keydown", porTecla);
    boardRef.current?.addEventListener("scroll", cerrar);
    return () => {
      window.removeEventListener("pointerdown", cerrar);
      window.removeEventListener("keydown", porTecla);
      boardRef.current?.removeEventListener("scroll", cerrar);
    };
  }, [menu]);

  // ------------------------------------------------------------- teclado --
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;

      // Deshacer/rehacer van ANTES del resto y con su propio filtro: sólo los
      // ceden a un campo de texto, que tiene su propio historial. El filtro de
      // abajo incluye `button`, y con ese ctrl+z se perdía si el foco había
      // quedado en el último botón que se apretó — que es justo lo normal.
      if (recorteRef.current && (e.key === "Enter" || e.key === "Escape")) {
        e.preventDefault();
        cerrarRecorte(e.key === "Enter");
        return;
      }

      const enCampo = !!el?.closest("input, textarea, [contenteditable]");
      if ((e.ctrlKey || e.metaKey) && !enCampo) {
        const k = e.key.toLowerCase();
        if (k === "z" && !e.shiftKey) {
          e.preventDefault();
          deshacer();
          return;
        }
        if (k === "y" || (k === "z" && e.shiftKey)) {
          e.preventDefault();
          rehacer();
          return;
        }
      }

      if (el?.closest("input, textarea, button, a")) return;
      if (e.key === " " || e.key === "k") {
        e.preventDefault();
        setPlay(!playingRef.current);
      } else if (e.key === "Delete" || e.key === "Backspace") {
        if (!selected) return;
        e.preventDefault();
        setTracks((prev) => prev.map((tr) => removeClip(tr, selected)));
        setSelected(null);
      } else if (e.key === "Home") {
        seek(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setPlay, seek, selected, deshacer, rehacer, cerrarRecorte]);

  /** Lo que hace cada opción del menú. Todas cierran el menú al terminar. */
  const accion = (fn: (tr: Track) => Track) => {
    if (!menu) return;
    mutate(menu.trackId, fn);
    setMenu(null);
  };

  const abrirMenu = (e: ReactMouseEvent, trackId: string, clipId: string | null) => {
    e.preventDefault();
    e.stopPropagation();
    if (clipId) setSelected(clipId);
    setMenu({ x: e.clientX, y: e.clientY, trackId, clipId });
  };

  // -------------------------------------------------------------- pintar --
  const step = rulerStep(pxPerMs);
  const marks: number[] = [];
  for (let ms = 0; ms <= total; ms += step) marks.push(ms);

  const { cue, live } = cueAt(cues, t);
  const escena = Math.max(0, beats.findIndex((b) => t >= b.start && t < b.end));
  const stageT = Math.min(t, videoMs - 1);

  const mutate = (trackId: string, fn: (tr: Track) => Track) =>
    setTracks((prev) => prev.map((tr) => (tr.trackId === trackId ? fn(tr) : tr)));

  const rotulo: Record<Status, string> = {
    loading: "Leyendo…",
    idle: "Sin guardar",
    saving: "Guardando…",
    saved: "Guardado",
    error: "Error al guardar",
    stale: "Cambió en la base · recargado",
  };

  return (
    <div className={s.editor} data-editor="">
      {/* ------------------------------------------------------ transporte */}
      <header className={s.bar}>
        <button
          type="button"
          className={s.play}
          onClick={() => setPlay(!playing)}
          aria-label={playing ? "Pausar" : "Reproducir"}
        >
          {playing ? (
            <Icon fill d="M6 5h4v14H6zM14 5h4v14h-4z" />
          ) : (
            <Icon fill d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
          )}
        </button>
        <button type="button" className={s.ctrl} onClick={() => seek(0)} aria-label="Volver al principio">
          <Icon d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
        </button>
        <button
          type="button"
          className={s.ctrl}
          onClick={deshacer}
          disabled={!hist.atras && baseRef.current === tracks}
          aria-label="Deshacer"
          title="Deshacer · ctrl+Z"
        >
          <Icon d="M9 14 4 9l5-5M4 9h9a7 7 0 0 1 0 14h-3" />
        </button>
        <button
          type="button"
          className={s.ctrl}
          onClick={rehacer}
          disabled={!hist.adelante}
          aria-label="Rehacer"
          title="Rehacer · ctrl+Y"
        >
          <Icon d="m15 14 5-5-5-5M20 9h-9a7 7 0 0 0 0 14h3" />
        </button>

        <span className={s.clock}>
          {clockMs(t)} <span className={s.clockTotal}>/ {clockMs(total)}</span>
        </span>
        <span className={s.scene}>
          Escena {escena + 1} · {beats[escena]?.id}
        </span>

        <span className={s.spacer} />

        {aviso && (
          <span className={s.aviso} title={aviso}>
            Archivo nuevo · {aviso}
          </span>
        )}
        {busy > 0 && <span className={s.busy}>Subiendo {busy}…</span>}
        <span className={[s.status, s[status]].join(" ")}>{rotulo[status]}</span>

        <div className={s.zoom}>
          <button type="button" className={s.ctrl} onClick={fitZoom} title="Ver todo">
            <Icon d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          </button>
          <input
            type="range"
            min={MIN_ZOOM}
            max={MAX_ZOOM}
            step={1}
            value={pxPerSec}
            onChange={(e) => setPxPerSec(Number(e.target.value))}
            aria-label="Ampliación de la línea de tiempo"
          />
          <span className={s.zoomHint} title="Rueda: recorre la línea de tiempo · ctrl+rueda: amplía · shift+rueda: sube y baja">
            rueda · ctrl
          </span>
        </div>

        <button
          type="button"
          className={s.ctrl}
          onClick={() => setTracks((prev) => [...prev, emptyTrack(`Pista ${prev.length + 1}`)])}
          title="Agregar pista"
        >
          <Icon d="M12 5v14M5 12h14" />
        </button>
      </header>

      {/* ----------------------------------------------------------- video */}
      <div ref={hostRef} className={[s.videoHost, playing ? "" : hero.paused].join(" ")}>
        <VideoStage
          beats={beats}
          t={stageT}
          epoch={epoch}
          paused={!playing}
          v={v}
          locale={locale}
          fit={fit}
          label={v.meta.description}
        />
      </div>

      {/* ------------------------------------------------------- subtítulo */}
      <div className={s.subs} data-subs="">
        <span className={s.subsTag}>La voz dice</span>
        <div className={s.subsCol}>
          <p className={[s.subsLine, live ? s.subsLive : s.subsPast].join(" ")} data-sub>
            {cue ? cue.text : "—"}
          </p>
          {/* El castellano de la misma frase. Sin esto no hay forma de montar
              una locución en un idioma que uno no lee. */}
          {cue && locale !== "es" && enCastellano(cue.n) && (
            <p className={s.subsEs} data-sub-es>
              {enCastellano(cue.n)}
            </p>
          )}
        </div>
      </div>

      {/* ---------------------------------------------------------- pistas */}
      <div className={s.board} ref={boardRef} data-board="">
        <div className={s.lanes} style={{ width: LABEL_W + contentW }}>
          {/* regla + escenas */}
          <div className={s.row}>
            <div className={[s.label, s.labelRuler].join(" ")}>Tiempo</div>
            <div
              className={s.ruler}
              style={{ width: contentW }}
              onPointerDown={(e) => onPointerDown(e, { mode: "head", x0: e.clientX })}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {marks.map((ms) => (
                <i key={ms} className={s.tick} style={{ left: ms * pxPerMs }}>
                  <b>{clockMs(ms)}</b>
                </i>
              ))}
              {beats.map((b, i) => (
                <span
                  key={b.id}
                  className={[s.beat, b.escala !== 1 ? s.beatOn : ""].join(" ")}
                  style={{ left: b.start * pxPerMs, width: (b.end - b.start) * pxPerMs }}
                  title={
                    `${i + 1} · ${b.id} · ${clockMs(b.end - b.start)}` +
                    (b.escala !== 1 ? ` · ×${b.escala.toFixed(2)}` : "") +
                    " · arrastrá el borde para estirarla o achicarla"
                  }
                  onDoubleClick={() =>
                    setEscalas((prev) => {
                      const { [b.id]: _, ...resto } = prev;
                      return resto;
                    })
                  }
                >
                  {i + 1} · {b.id}
                  {b.escala !== 1 && <em> ×{b.escala.toFixed(2)}</em>}
                  {/* El borde derecho de una escena es el izquierdo de la
                      siguiente, así que con un tirador por escena quedan todos
                      los límites agarrables. */}
                  <i
                    className={s.beatHandle}
                    onPointerDown={(e) =>
                      onPointerDown(e, {
                        mode: "escena",
                        id: b.id,
                        x0: e.clientX,
                        dur0: b.end - b.start,
                        escala0: b.escala,
                      })
                    }
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* el guion */}
          <div className={s.row}>
            <div className={[s.label, s.labelCue].join(" ")}>Guion</div>
            <div className={s.cueLane} style={{ width: contentW }}>
              {cues.map((c) => (
                <button
                  key={c.n}
                  type="button"
                  className={[s.cue, c === cue && live ? s.cueOn : ""].join(" ")}
                  style={{ left: c.start * pxPerMs, width: Math.max(14, (c.end - c.start) * pxPerMs) }}
                  onClick={() => seek(c.start)}
                  data-cue={c.beat}
                  title={
                    `Toma ${c.n} · ${clockMs(c.start)} · ${c.beat}\n${c.text}` +
                    (locale !== "es" ? `\n[es] ${enCastellano(c.n) ?? ""}` : "")
                  }
                >
                  {c.text}
                </button>
              ))}
            </div>
          </div>

          {/* las pistas */}
          {tracks.map((tr, iTrack) => (
            <div
              key={tr.trackId}
              className={s.row}
              style={
                {
                  "--trk": colorDe(iTrack).a,
                  "--trk2": colorDe(iTrack).b,
                  "--trk-line": colorDe(iTrack).linea,
                } as CSSProperties
              }
            >
              <div
                className={[
                  s.label,
                  s.labelTrack,
                  aDonde === iTrack ? s.labelDrop : "",
                ].join(" ")}
              >
                <span className={s.trackTop}>
                  {/* El asa de reordenar. Va aparte del nombre para que apretar
                      el rótulo no arranque un arrastre sin querer. */}
                  <i
                    className={s.grip}
                    title="Arrastrá para reordenar la pista"
                    onPointerDown={(e) =>
                      onPointerDown(e, { mode: "track", trackId: tr.trackId, desde: iTrack })
                    }
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                  />
                  <span className={s.trackName} title={tr.name}>
                    {tr.name}
                  </span>
                </span>
                <span className={s.labelBtns}>
                  <button
                    type="button"
                    className={[s.mini, tr.muted ? s.miniOn : ""].join(" ")}
                    onClick={() => mutate(tr.trackId, (x) => ({ ...x, muted: !x.muted }))}
                    title={tr.muted ? "Activar el sonido" : "Silenciar la pista"}
                  >
                    {tr.muted ? "M" : "♪"}
                  </button>
                  <button
                    type="button"
                    className={s.mini}
                    onClick={() => mutate(tr.trackId, (x) => insertGap(x, tRef.current, GAP_STEP))}
                    title="Meter un segundo en blanco en la cabeza de reproducción"
                  >
                    ⌷
                  </button>
                  <button
                    type="button"
                    className={s.mini}
                    onClick={() => setTracks((prev) => prev.filter((x) => x.trackId !== tr.trackId))}
                    title="Quitar la pista"
                  >
                    ×
                  </button>
                  {/* Una cama de música debajo de una locución no se mezcla con el
                      botón de silencio: necesita un nivel. */}
                  <input
                    type="range"
                    className={s.vol}
                    min={0}
                    max={100}
                    value={Math.round(tr.volume * 100)}
                    onChange={(e) =>
                      mutate(tr.trackId, (x) => ({ ...x, volume: Number(e.target.value) / 100 }))
                    }
                    title={`Volumen: ${Math.round(tr.volume * 100)} %`}
                    aria-label={`Volumen de ${tr.name}`}
                  />
                </span>
              </div>

              <div
                className={[s.track, dropOn === tr.trackId ? s.trackDrop : ""].join(" ")}
                data-track={tr.trackId}
                style={{ width: contentW }}
                onPointerDown={(e) => onPointerDown(e, { mode: "head", x0: e.clientX })}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDropOn(tr.trackId);
                }}
                onDragLeave={() => setDropOn((d) => (d === tr.trackId ? null : d))}
                onDrop={(e) => void onDrop(e, tr.trackId)}
                onContextMenu={(e) =>
                  // De qué clip es el menú lo decide el TIEMPO, no qué elemento
                  // quedó arriba: la curva de volumen se dibuja sobre el medio
                  // de los clips y se comía el click derecho, así que el menú
                  // salía el de la pista aunque se apretara sobre un clip.
                  abrirMenu(e, tr.trackId, clipAt(tr, msFrom(e.clientX))?.clip.clipId ?? null)
                }
              >
                {placed(tr).map((p) => (
                  <div
                    key={p.clip.clipId}
                    className={[
                      s.clip,
                      p.clip.kind === "gap" ? s.gap : s.audio,
                      selected === p.clip.clipId ? s.clipOn : "",
                    ].join(" ")}
                    style={{ left: p.start * pxPerMs, width: Math.max(3, p.clip.dur * pxPerMs) }}
                    data-clip={p.clip.kind}
                    onPointerDown={(e) => {
                      setSelected(p.clip.clipId);
                      onPointerDown(e, {
                        mode: "clip",
                        trackId: tr.trackId,
                        clipId: p.clip.clipId,
                        x0: e.clientX,
                        base: p.start,
                        tracks,
                        movido: false,
                      });
                    }}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onContextMenu={(e) => abrirMenu(e, tr.trackId, p.clip.clipId)}
                    title={
                      p.clip.kind === "gap"
                        ? `Silencio · ${clockMs(p.clip.dur)}`
                        : `${p.clip.name} · ${clockMs(p.start)} → ${clockMs(p.end)}`
                    }
                  >
                    <span className={s.clipName}>
                      {p.clip.kind === "gap" ? "en blanco" : p.clip.name}
                    </span>
                    <span className={s.clipDur}>
                      {clockMs(p.clip.dur)}
                      {rateOf(p.clip) !== 1 && <em> ×{rateOf(p.clip).toFixed(2)}</em>}
                    </span>
                    <i
                      className={s.handle}
                      onPointerDown={(e) =>
                        onPointerDown(e, {
                          mode: "resize",
                          trackId: tr.trackId,
                          clipId: p.clip.clipId,
                          x0: e.clientX,
                          base: p.end,
                          tracks,
                          movido: false,
                          estira: e.shiftKey,
                        })
                      }
                      onPointerMove={onPointerMove}
                      onPointerUp={onPointerUp}
                    />
                  </div>
                ))}
                {/* La curva de volumen. El SVG no recibe clicks salvo en la
                    línea y en los puntos, así que el resto del carril sigue
                    llevando la cabeza de reproducción como siempre. */}
                <svg
                  className={s.env}
                  width={contentW}
                  height={TRACK_H}
                  viewBox={`0 0 ${contentW} ${TRACK_H}`}
                  aria-hidden
                >
                  <path className={s.envLine} d={envPath(tr, contentW, pxPerMs)} />
                  {/* El mismo trazo, gordo y transparente: es el área que se
                      puede agarrar. Un trazo de 2 px no se acierta con el
                      mouse. */}
                  <path
                    className={s.envHit}
                    d={envPath(tr, contentW, pxPerMs)}
                    onPointerDown={(e) => {
                      if (e.button !== 0) return;
                      const caja = e.currentTarget.getBoundingClientRect();
                      const at = Math.max(0, msFrom(e.clientX));
                      // El punto nace SOBRE la curva, así apretar no mueve nada:
                      // el volumen cambia recién cuando se arrastra.
                      const nueva = addEnvPoint(tr, at, envAt(tr, at));
                      const index = (nueva.env ?? []).findIndex((p) => p.at === Math.round(at));
                      mutate(tr.trackId, () => nueva);
                      onPointerDown(e, {
                        mode: "env",
                        trackId: tr.trackId,
                        index: Math.max(0, index),
                        top: caja.top,
                        h: caja.height,
                      });
                    }}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                  />
                  {(tr.env ?? []).map((pt, i) => (
                    <circle
                      key={i}
                      className={s.envDot}
                      cx={pt.at * pxPerMs}
                      cy={(1 - pt.v / ENV_MAX) * TRACK_H}
                      r={5}
                      onPointerDown={(e) => {
                        if (e.button !== 0) return;
                        const caja = (e.currentTarget.ownerSVGElement ?? e.currentTarget).getBoundingClientRect();
                        onPointerDown(e, {
                          mode: "env",
                          trackId: tr.trackId,
                          index: i,
                          top: caja.top,
                          h: caja.height,
                        });
                      }}
                      onPointerMove={onPointerMove}
                      onPointerUp={onPointerUp}
                      onContextMenu={(e) => {
                        // Botón derecho sobre un punto lo saca. Es el gesto más
                        // corto para deshacer un fundido que quedó mal.
                        e.preventDefault();
                        e.stopPropagation();
                        mutate(tr.trackId, (x) => removeEnvPoint(x, i));
                      }}
                    >
                      <title>{`${clockMs(pt.at)} · ×${pt.v.toFixed(2)} — arrastrá para mover, botón derecho para quitar`}</title>
                    </circle>
                  ))}
                </svg>
                {/* La ventana de recorte: lo que queda se ve, lo que se va se
                    apaga. Va por encima del clip y come los clicks, para que
                    apretar adentro no mueva la cabeza de reproducción. */}
                {recorte?.trackId === tr.trackId &&
                  (() => {
                    const p = placed(tr).find((x) => x.clip.clipId === recorte.clipId);
                    if (!p) return null;
                    const px = (ms: number) => (ms - p.start) * pxPerMs;
                    return (
                      <div
                        className={s.crop}
                        style={{ left: p.start * pxPerMs, width: p.clip.dur * pxPerMs }}
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        <i className={s.cropOut} style={{ left: 0, width: px(recorte.desde) }} />
                        <i
                          className={s.cropIn}
                          style={{ left: px(recorte.desde), width: px(recorte.hasta) - px(recorte.desde) }}
                        />
                        <i
                          className={s.cropOut}
                          style={{ left: px(recorte.hasta), width: px(p.end) - px(recorte.hasta) }}
                        />
                        {(["a", "b"] as const).map((lado) => (
                          <i
                            key={lado}
                            className={s.cropGrip}
                            style={{ left: px(lado === "a" ? recorte.desde : recorte.hasta) }}
                            onPointerDown={(e) => onPointerDown(e, { mode: "crop", lado })}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                          />
                        ))}
                      </div>
                    );
                  })()}
                {/* El rótulo va FUERA de la caja del recorte: adentro lo corta
                    el overflow, y los clips de una locución cortada miden
                    veinte píxeles. */}
                {recorte?.trackId === tr.trackId && (
                  <span
                    className={s.cropInfo}
                    style={{ left: ((recorte.desde + recorte.hasta) / 2) * pxPerMs }}
                  >
                    {clockMs(recorte.hasta - recorte.desde)} · Enter guarda · Esc cancela
                  </span>
                )}
                {trackEnd(tr) === 0 && <span className={s.hint}>Soltá acá un audio</span>}
              </div>
            </div>
          ))}

          {/* la cabeza de reproducción, por encima de todas las filas */}
          <i className={s.head} style={{ left: LABEL_W + t * pxPerMs }} />
        </div>
      </div>

      {/* ------------------------------------------- menú del botón derecho */}
      {menu &&
        (() => {
          const pista = tracks.find((x) => x.trackId === menu.trackId);
          if (!pista) return null;
          const clip = menu.clipId
            ? placed(pista).find((x) => x.clip.clipId === menu.clipId)
            : null;
          // El corte va por la LÍNEA, no por donde se apretó el botón derecho:
          // la línea se puso antes con un click, a la vista y sin apuro.
          const parte = !!menu.clipId && canSplit(pista, menu.clipId, t);

          return (
            <div
              className={s.menu}
              style={{
                left: Math.min(menu.x, window.innerWidth - 232),
                top: Math.min(menu.y, window.innerHeight - 190),
              }}
              onPointerDown={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              role="menu"
            >
              <div className={s.menuHead}>
                {clip ? (clip.clip.kind === "gap" ? "Silencio" : clip.clip.name) : pista.name}
              </div>

              {menu.clipId && (
                <button
                  type="button"
                  className={s.menuItem}
                  disabled={!parte}
                  onClick={() => accion((tr) => splitClip(tr, menu.clipId!, t))}
                  title={
                    parte
                      ? undefined
                      : clip?.clip.kind === "gap"
                        ? "Un silencio no se parte: dos silencios pegados son uno solo"
                        : "Poné la línea adentro del clip con un click, lejos de los bordes"
                  }
                >
                  <span>Cortar acá</span>
                  <em>{clockMs(t)}</em>
                </button>
              )}

              <button
                type="button"
                className={s.menuItem}
                onClick={() => accion((tr) => insertGap(tr, t, GAP_STEP))}
              >
                <span>Insertar silencio</span>
                <em>1 s</em>
              </button>

              {!!pista.env?.length && (
                <button
                  type="button"
                  className={s.menuItem}
                  onClick={() => accion((tr) => ({ ...tr, env: undefined }))}
                >
                  <span>Quitar la curva de volumen</span>
                  <em>{pista.env.length}</em>
                </button>
              )}

              {menu.clipId && clip?.clip.kind === "audio" && (
                <button
                  type="button"
                  className={s.menuItem}
                  onClick={() => {
                    setRecorte({
                      trackId: menu.trackId,
                      clipId: menu.clipId!,
                      desde: clip.start,
                      hasta: clip.end,
                      min: clip.start,
                      max: clip.end,
                    });
                    setMenu(null);
                  }}
                >
                  <span>Recortar</span>
                  <em>Enter</em>
                </button>
              )}

              {menu.clipId && (
                <>
                  <button
                    type="button"
                    className={s.menuItem}
                    onClick={() => accion((tr) => duplicateClip(tr, menu.clipId!))}
                  >
                    <span>Duplicar</span>
                  </button>
                  <button
                    type="button"
                    className={[s.menuItem, s.menuDanger].join(" ")}
                    onClick={() => {
                      setSelected(null);
                      accion((tr) => removeClip(tr, menu.clipId!));
                    }}
                  >
                    <span>Eliminar</span>
                    <em>Supr</em>
                  </button>
                </>
              )}
            </div>
          );
        })()}
    </div>
  );
}
