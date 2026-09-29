"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useStageFit } from "../video/VideoStage";
import s from "../video/HeroVideo.module.css";

/**
 * Los videos de producto como superficie embebible (`?embed=1`): lo que ve la
 * mesa de montaje del panel interno en un iframe y lo que la exportación a MP4
 * recorre cuadro por cuadro. El mismo diálogo que el video de portada
 * (`video/VideoEmbed.tsx`):
 *
 * - sale `vo:hello` al montar, `vo:ready` con los beats cada vez que cambian y
 *   `vo:drawn` cuando un instante ya está en el DOM;
 * - entran `vo:frame` (el instante, el remonte y la pausa) y `vo:scenes` (cuánto
 *   se estira o achica cada escena).
 *
 * No tiene reloj propio: el reloj lo lleva el panel, que es el que tiene el audio.
 */

export type Escalas = Record<string, number>;

type BeatLike = { id: string; start: number; end: number; until: number; preroll: number; enterDur: number };

/**
 * Estira o achica cada escena por su factor (1 = natural). La escena recibe su
 * tiempo local dividido por `escala`, así la animación entera se estira con ella.
 */
export function scaleBeats<B extends BeatLike>(beats: B[], esc: Escalas): (B & { escala: number })[] {
  let cursor = 0;
  const out = beats.map((b) => {
    const escala = esc[b.id] ?? 1;
    const dur = (b.end - b.start) * escala;
    const tail = b.until - b.end;
    const nb = { ...b, start: cursor, end: cursor + dur, until: cursor + dur + tail, escala };
    cursor += dur;
    return nb;
  });
  out.forEach((b, i) => {
    const next = out[i + 1];
    if (next) b.until = Math.max(b.until, b.end + next.enterDur);
  });
  return out;
}

type Mensaje = { type: "vo:frame"; t: number; epoch: number; paused: boolean } | { type: "vo:scenes"; scenes: Escalas };

/**
 * Los anclajes de la voz: por escena, en qué ms (de la escena sin estirar) aparece cada texto o arranca
 * cada paso de la demo, en el orden de los bloques del guion (`locuciones/<video>/`). La mesa de montaje
 * los usa para poner cada subtítulo —y la voz— cuando su texto aparece, no al empezar la escena.
 */
export type VoiceAnchors = Record<string, number[]>;

export default function KitEmbed<B extends BeatLike>({
  beats: natural,
  render,
  anchors,
}: {
  beats: B[];
  anchors?: VoiceAnchors;
  /** Dibuja el escenario con los beats ya escalados. */
  render: (p: { beats: (B & { escala: number })[]; t: number; epoch: number; paused: boolean; fit: { scale: number; x: number; y: number } }) => ReactNode;
}) {
  const [t, setT] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [paused, setPaused] = useState(true);
  const [scenes, setScenes] = useState<Escalas>({});
  const hostRef = useRef<HTMLDivElement>(null);
  const fit = useStageFit(hostRef);

  const beats = useMemo(() => scaleBeats(natural, scenes), [natural, scenes]);
  const total = beats[beats.length - 1].end;

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
    window.parent?.postMessage({ type: "vo:hello" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useLayoutEffect(() => {
    window.parent?.postMessage({ type: "vo:drawn", t }, "*");
  }, [t]);

  useEffect(() => {
    window.parent?.postMessage({ type: "vo:ready", total, beats: beats.map((b) => ({ id: b.id, start: b.start, end: b.end, escala: b.escala })), anchors: anchors ?? null }, "*");
  }, [beats, total, anchors]);

  return (
    <div ref={hostRef} className={[s.embed, paused ? s.paused : ""].join(" ")}>
      {render({ beats, t: Math.min(t, total - 1), epoch, paused, fit })}
    </div>
  );
}
