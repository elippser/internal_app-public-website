"use client";

import { Fragment, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { clamp01, easeIn, easeInOut, easeOut, easeOutQuint, lerp, seg } from "../video/timeline";
import { tokenize, type CursorKey } from "../video/fx";
import k from "./kit.module.css";

/**
 * Las piezas que comparten los videos de producto (Propiedades y los que
 * sigan). Salen del video de Roombir IA, donde el usuario las fue validando
 * iteración por iteración: titulares en Outfit con el remate en degradado,
 * entradas que suben, salidas hacia atrás, cámara por planos, puntero de
 * tutorial en espacio de pantalla y rótulo del paso. Todo es función del
 * tiempo local `lt`.
 *
 * El video de IA (`video-ia/`) tiene sus propias copias y no se tocó.
 */

/** Coseno alzado: arranca y frena suave, pico 1,57× la media. */
export const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

/** Entrada que sube: el enfoque y la opacidad rápidos, la subida más larga. */
export function lift(lt: number, at: number, dist = 30, blur = 0): CSSProperties {
  const f = easeOutQuint(seg(lt, at, at + 520));
  const y = easeOut(seg(lt, at, at + 680));
  return {
    opacity: f.toFixed(3),
    transform: `translate3d(0, ${((1 - y) * dist).toFixed(2)}px, 0)`,
    filter: blur > 0 && f < 0.999 ? `blur(${((1 - f) * blur).toFixed(2)}px)` : undefined,
  };
}

/** Salida hacia atrás: se achica, se desenfoca y se apaga. */
export function away(q: number, scale = 0.86, blur = 12): CSSProperties {
  if (q <= 0) return {};
  return { opacity: (1 - q * q).toFixed(3), transform: `scale(${lerp(1, scale, q).toFixed(4)})`, filter: `blur(${(q * blur).toFixed(2)}px)` };
}

/**
 * Un titular que entra palabra por palabra, TODO en Outfit: el texto en tinta
 * (en papel sobre fondos oscuros) y SÓLO el remate `*así*` con el degradado de
 * la casa, medido sobre las palabras marcadas para que lo cruce entero. Con
 * `emAt` el remate entra después. (Pedido del usuario en el video de IA.)
 */
export function GLine({
  text,
  lt,
  at,
  lag = 80,
  emAt,
  out,
  tone = "ink",
  blur = 6,
  className,
}: {
  text: string;
  lt: number;
  at: number;
  lag?: number;
  emAt?: number;
  out?: number;
  tone?: "ink" | "paper";
  blur?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [m, setM] = useState<{ w: number; xs: number[] } | null>(null);
  useLayoutEffect(() => {
    const nodes = ref.current ? [...ref.current.querySelectorAll<HTMLElement>("[data-em]")] : [];
    if (!nodes.length) return;
    const x0 = Math.min(...nodes.map((n) => n.offsetLeft));
    const x1 = Math.max(...nodes.map((n) => n.offsetLeft + n.offsetWidth));
    setM({ w: x1 - x0, xs: nodes.map((n) => n.offsetLeft - x0) });
  }, [text]);
  // Las piezas se cortan por ESPACIOS: la puntuación va con su palabra.
  const words: { text: string; em: boolean; space: boolean }[] = [];
  for (const tk of tokenize(text)) {
    const last = words[words.length - 1];
    if (!tk.space && last && !last.space) {
      last.text += tk.text;
      last.em = last.em || tk.em;
    } else words.push({ ...tk });
  }
  let n = -1;
  let e = -1;
  return (
    <span ref={ref} className={[k.gl, className ?? ""].join(" ")}>
      {words.map((w, i) => {
        if (w.space) return <Fragment key={i}> </Fragment>;
        n += 1;
        if (w.em) e += 1;
        const start = w.em && emAt !== undefined ? emAt + e * lag : at + n * lag;
        const f = easeOutQuint(seg(lt, start, start + 520));
        const y = easeOut(seg(lt, start, start + 680));
        const u = out === undefined ? 0 : easeIn(seg(lt, out + n * 30, out + n * 30 + 240));
        // El remate lleva SÓLO la clase del degradado (trampa 100 de la skill).
        const tint = w.em ? (tone === "paper" ? k.glGradLight : k.glGrad) : tone === "paper" ? k.glPaper : k.glInk;
        const blurPx = u > 0 ? u * 8 : f < 0.999 ? (1 - f) * blur : 0;
        return (
          <span
            key={i}
            data-em={w.em ? "" : undefined}
            className={[k.glWord, tint].join(" ")}
            style={{
              opacity: (f * (1 - u)).toFixed(3),
              transform: `translate3d(0, ${((1 - y) * 28 - 20 * u).toFixed(2)}px, 0)`,
              filter: blurPx > 0.05 ? `blur(${blurPx.toFixed(2)}px)` : undefined,
              ...(w.em && m ? { backgroundSize: `${m.w.toFixed(1)}px 100%`, backgroundPosition: `${(-(m.xs[e] ?? 0)).toFixed(1)}px 0` } : {}),
            }}
          >
            {w.text}
          </span>
        );
      })}
    </span>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

/* ------------------------------------------------------------- cámara ---- */

export type Pose = { x: number; y: number; z: number };
/** Un plano: desde la pose anterior hasta `to`, entre `t` y `t + d`. */
export type Move = { t: number; d: number; to: Pose };

/** La cámara por planos: `smooth` en cada movimiento y el zoom en escala logarítmica. */
export function camera(moves: Move[], lt: number, from: Pose): Pose {
  let cur = from;
  for (const m of moves) {
    if (lt <= m.t) break;
    const p = smooth(seg(lt, m.t, m.t + m.d));
    cur = { x: lerp(cur.x, m.to.x, p), y: lerp(cur.y, m.to.y, p), z: Math.exp(lerp(Math.log(cur.z), Math.log(m.to.z), p)) };
    if (p < 1) break;
  }
  return cur;
}

/** La capa que aplica la cámara, con un barrido leve sólo cuando corre. */
export function cameraStyle(moves: Move[], lt: number, from: Pose): { style: CSSProperties; cam: Pose; toScreen: (x: number, y: number) => { x: number; y: number } } {
  const cam = camera(moves, lt, from);
  const prev = camera(moves, lt - 16, from);
  const speed = Math.hypot(cam.x - prev.x, cam.y - prev.y) * cam.z + Math.abs(cam.z - prev.z) * 400;
  // Tope bajo y dividido por el zoom: el filtro corre antes de la escala.
  const blur = Math.max(0, Math.min(1.4, (speed - 8) * 0.07)) / cam.z;
  const tx = 640 - cam.x * cam.z;
  const ty = 360 - cam.y * cam.z;
  return {
    cam,
    toScreen: (x, y) => ({ x: x * cam.z + tx, y: y * cam.z + ty }),
    style: { transformOrigin: "0 0", transform: `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${cam.z.toFixed(4)})`, filter: blur > 0.15 ? `blur(${blur.toFixed(2)}px)` : undefined },
  };
}

/* ------------------------------------------------------------ puntero ---- */

/** Dónde está el puntero (en el MUNDO), si está apretado y sus ondas de clic. */
export function pointerAt(keys: CursorKey[], lt: number) {
  let x = keys[0].x;
  let y = keys[0].y;
  let pressed = false;
  const ripples: number[] = [];
  for (let i = 0; i < keys.length; i++) {
    const kk = keys[i];
    if (lt < kk.at) break;
    const nx = keys[i + 1];
    if (nx && lt < nx.at) {
      const p = easeInOut(seg(lt, kk.at, nx.at));
      x = lerp(kk.x, nx.x, p);
      y = lerp(kk.y, nx.y, p);
    } else {
      x = kk.x;
      y = kk.y;
    }
    if (kk.down) pressed = true;
    if (kk.up) pressed = false;
    if (kk.click && lt - kk.at < 700) ripples.push(seg(lt, kk.at, kk.at + 700));
  }
  return { x, y, pressed, ripples };
}

/** El puntero del tutorial: negro con borde blanco, en PANTALLA (mismo tamaño en cualquier plano). */
export function Pointer({ x, y, pressed, ripples, opacity }: { x: number; y: number; pressed: boolean; ripples: number[]; opacity: number }) {
  if (opacity <= 0.01) return null;
  return (
    <div className={k.cursor} style={{ transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(1.75)`, opacity: opacity.toFixed(3) }}>
      {ripples.map((p, i) => (
        <i key={i} className={k.ripple} style={{ transform: `scale(${(0.35 + p * 1.4).toFixed(3)})`, opacity: ((1 - p) * 0.6).toFixed(3) }} />
      ))}
      <svg viewBox="0 0 24 24" className={k.pointer} style={{ transform: `scale(${pressed ? 0.86 : 1})` }} aria-hidden>
        <path d="M5 3l14 9-6.6 1.3L15 20l-3 1.4-2.6-6.6L5 19z" fill="#14150f" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** El rótulo del paso del tutorial ("1/4 · …"), con su cruce entre pasos. */
export function StepCaptions({ lt, captions, at, end }: { lt: number; captions: string[]; at: number[]; end: number }) {
  return (
    <>
      {captions.map((c, i) => {
        const a0 = at[i];
        const a1 = i + 1 < at.length ? at[i + 1] : end;
        if (lt < a0 || lt >= a1) return null;
        const a = easeOutQuint(seg(lt, a0, a0 + 520));
        const b = easeIn(seg(lt, a1 - 260, a1));
        return (
          <div key={i} className={k.stepCap} style={{ opacity: (a * (1 - b)).toFixed(3), transform: `translate3d(0, ${((1 - a) * 14 - b * 8).toFixed(1)}px, 0)`, filter: a < 0.999 || b > 0 ? `blur(${((1 - a) * 8 + b * 8).toFixed(1)}px)` : undefined }}>
            <span className={k.stepNum}>
              {i + 1}
              <small>/{captions.length}</small>
            </span>
            <span className={k.stepText}>{c}</span>
          </div>
        );
      })}
    </>
  );
}
