"use client";

import { Fragment, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import Logo from "@/components/site/Logo";
import { ISOTYPE_DOT, ISOTYPE_PATH, ISOTYPE_VIEWBOX, WORDMARK_PATH, WORDMARK_VIEWBOX } from "@/components/site/logoPaths";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, easeOutQuint, lerp, noise, seg } from "./timeline";
import s from "./scenes.module.css";

/**
 * Las piezas con las que se arman todas las escenas: la tipografía cinética,
 * el motion blur direccional, las letras que se rompen, el tachado dentado, el
 * roller, el caret que sobreescribe, el cursor, la marca y el degradado.
 *
 * Cada efecto calca uno del video de referencia (VIDEO-REFERENCIA-ANALISIS.md,
 * sección 1). Todo se calcula a partir del tiempo local `lt`: nada depende de
 * cuándo se montó el elemento.
 */

export const W = 1280;
export const H = 720;

/* ------------------------------------------------------------ estilos ---- */

/** Entrada con desenfoque: sube unos px, se enfoca, aparece y endereza su inclinación. */
export function rise(p: number, dist = 18, blur = 8, tilt = 0): CSSProperties {
  return {
    opacity: p,
    transform: `translate3d(0, ${((1 - p) * dist).toFixed(2)}px, 0)${tilt ? ` rotateX(${((1 - p) * tilt).toFixed(2)}deg)` : ""}`,
    filter: p < 0.999 ? `blur(${((1 - p) * blur).toFixed(2)}px)` : undefined,
  };
}

/** Salida por desenfoque: se va sin moverse, como al perder el foco. */
export function defocus(q: number, blur = 14): CSSProperties {
  return { opacity: 1 - q, filter: q > 0.001 ? `blur(${(q * blur).toFixed(2)}px)` : undefined };
}

/** Salida rápida: se achica apenas y se va. */
export function fadeOut(q: number, scale = 0.96): CSSProperties {
  return { opacity: 1 - q, transform: `scale(${(1 - (1 - scale) * q).toFixed(4)})` };
}

/**
 * Rotate-in de la referencia: el bloque entra chiquito y torcido, crece y se
 * endereza hasta quedar inclinado `rest` grados (−8° en el original).
 */
export function rotateIn(p: number, rest = -8, from = -26): CSSProperties {
  const e = easeOutExpo(p);
  return {
    opacity: clamp01(p * 2.5),
    transform: `scale(${lerp(0.22, 1, e).toFixed(4)}) rotate(${lerp(from, rest, e).toFixed(2)}deg)`,
    filter: p < 0.999 ? `blur(${((1 - e) * 6).toFixed(2)}px)` : undefined,
  };
}

/** Un zoom brusco con desenfoque hacia un punto (`ox`,`oy` en %). */
export function zoomInto(z: number, max = 14, ox = 50, oy = 50, blur = 18): CSSProperties {
  return {
    transform: `scale(${(1 + z * max).toFixed(3)})`,
    transformOrigin: `${ox}% ${oy}%`,
    filter: z > 0.001 ? `blur(${(z * blur).toFixed(2)}px)` : undefined,
  };
}

/* --------------------------------------------------------- medición ------ */

export type Rect = { x: number; y: number; w: number; h: number };

/**
 * Mide dónde cayeron piezas, relativas a `root`, sumando `offsetLeft/Top` por
 * la cadena de offsetParent. A diferencia de getBoundingClientRect, no lo
 * afecta ningún transform de arriba: sirve dentro de una tarjeta inclinada.
 */
export function useOffsets(root: RefObject<HTMLElement | null>, selectors: string[], deps: unknown[] = []): Record<string, Rect> {
  const [rects, setRects] = useState<Record<string, Rect>>({});
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const abs = (n: HTMLElement) => {
      let x = 0;
      let y = 0;
      let cur: HTMLElement | null = n;
      while (cur) {
        x += cur.offsetLeft;
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return { x, y };
    };
    const base = abs(el);
    const out: Record<string, Rect> = {};
    for (const sel of selectors) {
      const node = el.querySelector<HTMLElement>(sel);
      if (!node) continue;
      const p = abs(node);
      out[sel] = { x: p.x - base.x, y: p.y - base.y, w: node.offsetWidth, h: node.offsetHeight };
    }
    setRects(out);
    // Una vez por montaje: las escenas se remontan en cada salto. Con `deps`
    // se vuelve a medir cuando la escena cambia lo que hay adentro.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return rects;
}

/* -------------------------------------------------------- motion blur ---- */

/**
 * Motion blur direccional, como el de la referencia cuando una tarjeta entra o
 * un texto barre: un filtro SVG con desenfoque distinto en x y en y, animado
 * por cuadro. Con `x` e `y` en 0 no filtra nada.
 */
export function Blurred({ x = 0, y = 0, className, style, children }: { x?: number; y?: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const id = "mb" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const on = x > 0.15 || y > 0.15;
  return (
    <>
      {on && (
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <filter id={id} x="-40%" y="-40%" width="180%" height="180%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation={`${x.toFixed(2)} ${y.toFixed(2)}`} />
          </filter>
        </svg>
      )}
      <div className={className} style={{ ...style, filter: on ? `url(#${id})` : style?.filter }}>
        {children}
      </div>
    </>
  );
}

/* ------------------------------------------------------- tipografía ------ */

export type Token = { text: string; em: boolean; space: boolean };

/** Parte un titular en palabras, respetando la itálica `*así*` del sitio. */
export function tokenize(text: string): Token[] {
  const out: Token[] = [];
  for (const chunk of text.split(/(\*[^*]+\*)/g)) {
    if (!chunk) continue;
    const em = chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2;
    const body = em ? chunk.slice(1, -1) : chunk;
    for (const piece of body.split(/( +)/g)) {
      if (!piece) continue;
      out.push({ text: piece, em, space: /^ +$/.test(piece) });
    }
  }
  return out;
}

/**
 * Un titular cinético: cada palabra entra desde abajo, desenfocada, unos ms
 * después de la anterior, y pasa de gris a su color (como "Work Sprawl").
 * Con `exit`, las palabras se van hacia arriba desenfocándose.
 */
export function Words({
  text,
  lt,
  at,
  stagger = 60,
  dur = 650,
  exit,
  exitDur = 320,
  dist = 26,
  blur = 10,
  tilt = 0,
  dimIn = true,
}: {
  text: string;
  lt: number;
  at: number;
  stagger?: number;
  dur?: number;
  exit?: number;
  exitDur?: number;
  dist?: number;
  blur?: number;
  tilt?: number;
  dimIn?: boolean;
}) {
  let i = 0;
  return (
    <>
      {tokenize(text).map((tk, k) => {
        if (tk.space) return <span key={k}> </span>;
        const idx = i;
        i += 1;
        const start = at + idx * stagger;
        let style: CSSProperties;
        let u = 0;
        if (exit !== undefined && lt >= exit) {
          const q = easeIn(seg(lt, exit + idx * 18, exit + idx * 18 + exitDur));
          style = { opacity: 1 - q, transform: `translate3d(0, ${(-30 * q).toFixed(2)}px, 0)`, filter: q > 0 ? `blur(${(8 * q).toFixed(2)}px)` : undefined };
          u = 1;
        } else {
          const p = easeOutQuint(seg(lt, start, start + dur));
          style = rise(p, dist, blur, tilt);
          if (dimIn && p < 0.999) style.opacity = clamp01(p * 1.6);
          if (dimIn && p < 0.999) style.color = `color-mix(in srgb, currentColor ${Math.round(lerp(38, 100, p))}%, #9a9a92)`;
          u = easeInOut(seg(lt, start + dur * 0.6, start + dur * 0.6 + 480));
        }
        if (tk.em) {
          return (
            <em key={k} className={`${s.word} ${s.wordEm}`} style={{ ...style, ["--u" as string]: u }}>
              {tk.text}
            </em>
          );
        }
        return (
          <span key={k} className={s.word} style={style}>
            {tk.text}
          </span>
        );
      })}
    </>
  );
}

/**
 * Texto que entra con desenfoque HORIZONTAL y se descubre de izquierda a
 * derecha, como "Context is lost." y "Convergence unlocks" en la referencia.
 */
export function HBlur({ text, lt, at, dur = 420, exit, exitDur = 260, children }: { text?: string; lt: number; at: number; dur?: number; exit?: number; exitDur?: number; children?: ReactNode }) {
  const p = easeOut(seg(lt, at, at + dur));
  const q = exit !== undefined ? easeIn(seg(lt, exit, exit + exitDur)) : 0;
  const bx = (1 - p) * 22 + q * 26;
  return (
    <Blurred x={bx} style={{ display: "inline-block", opacity: clamp01(p * 1.8) * (1 - q), clipPath: p < 0.999 ? `inset(-20% ${((1 - p) * 100).toFixed(1)}% -20% -4%)` : undefined, transform: `translate3d(${(q * 30).toFixed(1)}px, 0, 0)` }}>
      {children ?? text}
    </Blurred>
  );
}

/**
 * Las letras que se rompen: al tocarlas, cada letra de la palabra gira ~90°,
 * salta hacia arriba y queda desparramada, como *sprawl* en "It's time to kill
 * sprawl". Antes del golpe la palabra se ve normal, en gris.
 *
 * El movimiento es un DISPARO CON FRENADA, no una entrada que termina: cada
 * letra sale a toda velocidad y va perdiéndola sin llegar nunca a cero, así que
 * sigue acomodándose hasta el corte. Con una curva que cierra (`easeBack` en
 * 380 ms) la palabra se planta de golpe y el resto del plano queda congelado.
 */
export function Tumble({ text, lt, at, seed = 1, dim, stagger = 18, dur = 1500 }: { text: string; lt: number; at: number; seed?: number; dim?: boolean; stagger?: number; dur?: number }) {
  return (
    <>
      {Array.from(text).map((c, i) => {
        if (c === " ") return <Fragment key={i}> </Fragment>;
        // Frenada exponencial: la mitad del recorrido en el primer quinto del
        // tiempo y después cada vez más despacio, sin cerrar.
        const p = 1 - Math.exp(-3.4 * seg(lt, at + i * stagger, at + i * stagger + dur));
        const rot = (i % 2 ? 88 : -96) + (noise(i, seed) - 0.5) * 50;
        const dy = -(26 + noise(i, seed + 1) * 42);
        const dx = (noise(i, seed + 2) - 0.5) * 12;
        return (
          <span
            key={i}
            className={s.letter}
            style={{
              color: dim && p < 0.5 ? "#8b8c84" : undefined,
              transform: `translate(${(dx * p).toFixed(1)}px, ${(dy * p).toFixed(1)}px) rotate(${(rot * p).toFixed(1)}deg)`,
            }}
          >
            {c}
          </span>
        );
      })}
    </>
  );
}

/**
 * Los puntos del tachado glitch para una caja `w`×`h`: el borde de arriba de
 * izquierda a derecha y el de abajo de vuelta. `thick` es el espesor y `mid`
 * la altura del centro, en fracciones del alto.
 */
export function jaggedPts(w: number, h: number, seed: number, thick = 0.17, mid = 0.5): [number, number][] {
  const m = h * mid;
  const th = h * thick;
  const step = Math.max(8, h * 0.13);
  const n = Math.max(6, Math.round(w / step));
  const pts: [number, number][] = [];
  for (let k = 0; k <= n; k++) pts.push([(k / n) * w, m - th / 2 + (noise(k, seed) - 0.5) * th * 0.36]);
  for (let k = n; k >= 0; k--) pts.push([(k / n) * w, m + th / 2 + (noise(k, seed + 9) - 0.5) * th * 0.36]);
  return pts;
}

/**
 * El tachado QUEBRADO de la referencia (24,29 → 24,9, "kill ~~Sprawl~~"): no
 * son bordes dentados sino TRAMOS RECTOS a distinta altura, como una onda
 * cuadrada irregular —cada tramo corrido arriba o abajo del anterior y con su
 * propio espesor, solapados apenas para que la línea no se corte—. Devuelve el
 * contorno (borde de arriba de izquierda a derecha, el de abajo de vuelta).
 * Con `jitter`, los tramos que empiezan después de `from` toman otra semilla
 * (`salt`): es el parpadeo del frente mientras avanza.
 */
export function brokenPts(w: number, h: number, seed: number, thick = 0.085, mid = 0.5, jitter?: { from: number; salt: number }): [number, number][] {
  const m = h * mid;
  const th = h * thick;
  const cuts = [0];
  for (let k = 0; cuts[cuts.length - 1] < w; k++) cuts.push(Math.min(w, cuts[cuts.length - 1] + h * (0.3 + 0.45 * noise(k, seed + 17))));
  const blocks = cuts.slice(0, -1).map((x0, i) => {
    const sd = jitter && x0 >= jitter.from ? seed + 31 + jitter.salt : seed;
    const off = (i % 2 === 0 ? -1 : 1) * th * (0.3 + 0.15 * noise(i, sd));
    const t = th * (1 + 0.2 * noise(i, sd + 5));
    return { x0, x1: cuts[i + 1], top: m + off - t / 2, bot: m + off + t / 2 };
  });
  const top = blocks.flatMap((b): [number, number][] => [[b.x0, b.top], [b.x1, b.top]]);
  const bot = [...blocks].reverse().flatMap((b): [number, number][] => [[b.x1, b.bot], [b.x0, b.bot]]);
  return [...top, ...bot];
}

/** El trazado dentado del tachado glitch, para una caja `w`×`h`. */
export function jaggedBand(w: number, h: number, seed: number, thick = 0.17, mid = 0.5): string {
  return jaggedPts(w, h, seed, thick, mid)
    .map(([x, y], k) => `${k === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ") + " Z";
}

/**
 * Una palabra con el tachado glitch de "kill Sprawl": una banda negra gruesa de
 * bordes dentados que cruza la palabra de izquierda a derecha en 250 ms.
 */
export function Struck({ text, lt, at, color = "currentColor" }: { text: string; lt: number; at: number; color?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const rects = useOffsets(ref, ["[data-word]"]);
  const r = rects["[data-word]"];
  const p = easeOut(seg(lt, at, at + 260));
  return (
    <span ref={ref} className={s.struckWrap}>
      <span data-word="">{text}</span>
      {r && p > 0 && (
        <svg className={s.strike} viewBox={`0 0 ${r.w} ${r.h}`} width={r.w} height={r.h} style={{ clipPath: `inset(0 ${((1 - p) * 100).toFixed(1)}% 0 0)` }} aria-hidden>
          <path d={jaggedBand(r.w, r.h, 3)} fill={color} />
        </svg>
      )}
    </span>
  );
}

/**
 * El roller de "Maximum [lista]": cada palabra nueva entra ARRIBA y empuja a las
 * anteriores hacia abajo con opacidad decreciente; después, la cola se apaga.
 */
/**
 * La ranura donde pasan las palabras: ancho fijo, el de la palabra más larga
 * puesta invisible. Se monta desde que entra "Más" y no se desmonta nunca, ni
 * siquiera vacía —si colapsara, "Más" se correría al centro y saltaría de lugar
 * cuando llega la primera palabra—.
 */
export function Slot({ items, children }: { items: string[]; children: ReactNode }) {
  return (
    <span className={s.roller}>
      {/* Van TODAS las palabras, no la más larga en letras: "visibilidad" tiene
          las mismas 11 letras que "rendimiento" pero es mucho más angosta, y la
          ranura le recortaba la última letra a media escena. El ancho lo da la
          que MIDE más, que es algo que sólo sabe el navegador. */}
      <span className={s.rollerSizer} aria-hidden>
        {items.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </span>
      {children}
    </span>
  );
}

/**
 * El roller: la pila de palabras del **0:37 de `video-reference.mp4`**.
 *
 * Medido cuadro a cuadro de la referencia (rastreando las bandas de tinta a
 * 29,97 fps entre 38,8 s y 41,7 s):
 *
 * - Las palabras se **apilan hacia abajo**: la que entra se pone arriba de
 *   todo, a la altura de "Maximum", y empuja a las anteriores una ranura.
 * - La ranura mide **110 px sobre 1080**; el cuerpo, medido sobre la palabra
 *   sola y opaca (banda de 76 px de ascendente a descendente), da ~82 px. O sea
 *   un paso de **1,32 veces el cuerpo**.
 * - La primera palabra entra sola y se queda ~820 ms; después las otras cuatro
 *   entran **de golpe, cada ~150 ms**.
 * - Cada empujón **se frena de a poco durante ~470 ms** (la última palabra va
 *   56 → 70 → 84 → 97 → 107 → 115 → 122 → 128 → 133 → 136 → 139 → 141 → 143).
 *   Ajustando esa serie, la curva es `1 - (1 - x)^2,5`, con menos de 2 % de
 *   error en los 14 cuadros; NO es la `easeOutQuint` de la casa (exponente 5),
 *   que llega al 70 % cuando la referencia va por el 47 %. Como cada empujón
 *   dura mucho más que los 150 ms que tarda en llegar el siguiente, **se
 *   solapan**: la pila no da escalones, fluye.
 * - Mientras se mueven, las palabras van **barridas en vertical**. Eso es lo
 *   que las hace ver líquidas y no saltadas, y acá se calca con un
 *   `feGaussianBlur` de sólo Y, proporcional a la velocidad de cada una.
 * - La opacidad **no** es un degradé parejo: midiendo el alfa medio del trazo,
 *   la de arriba va a 1,00 y las tres siguientes están todas en **0,33**
 *   —la de arriba en casi negro, el resto en el violeta de fondo—. Sólo la
 *   quinta baja (0,16). Un degradé por ranura (0,5 · 0,32 · 0,2 · 0,12) le saca
 *   el contraste que hace que la palabra nueva pegue.
 *
 * La posición sale de UNA suma: cada palabra arranca una ranura arriba y baja
 * una por cada palabra que entró desde ella en adelante (incluida ella misma,
 * que es lo que la trae de arriba a su lugar).
 */
export function Roller({ items, lt, times, fadeAt, settle = 505, pitch = 1.32, pitchPx = 61 }: { items: string[]; lt: number; times: number[]; fadeAt?: number; settle?: number; pitch?: number; pitchPx?: number }) {
  // La curva medida: 1 - (1 - x)^2,5.
  const push = (at: number, t0: number) => 1 - Math.pow(1 - seg(at, t0, t0 + settle), 2.5);
  const pos = (k: number, at: number) => times.slice(k).reduce((a, t0) => a + push(at, t0), -1);
  const OP = [1, 0.33, 0.33, 0.33, 0.16];
  const alfa = (y: number) => {
    const i = Math.max(0, Math.min(OP.length - 1, Math.floor(y)));
    const j = Math.min(OP.length - 1, i + 1);
    return lerp(OP[i], OP[j], Math.max(0, Math.min(1, y - i)));
  };
  const tail = fadeAt !== undefined ? easeIn(seg(lt, fadeAt, fadeAt + 380)) : 0;
  return (
    <>
      {items.map((w, k) => {
        if (lt < times[k]) return null;
        const y = pos(k, lt);
        const arrival = push(lt, times[k]);
        // velocidad en ranuras por cuadro → barrido vertical
        const v = Math.abs(y - pos(k, lt - 17));
        const blur = Math.min(18, v * pitchPx * 0.55);
        let o = arrival * alfa(Math.max(0, y));
        if (y > 0.5) o *= 1 - tail;
        return (
          <Blurred key={w} y={blur} className={s.rollerItem} style={{ transform: `translate3d(0, ${(y * pitch).toFixed(4)}em, 0)`, opacity: o.toFixed(3) }}>
            {w}
          </Blurred>
        );
      })}
    </>
  );
}

/**
 * Perfil de velocidad **en campana**: entra a un ritmo normal, se dispara en el
 * medio y frena hasta volver exactamente al ritmo con el que entró.
 *
 * La velocidad es `a + (1 - a)·sen²(πp)`, con `a` = a qué fracción del pico
 * entra y sale. Nunca baja de `a`, así que **no hay arranque ni llegada al
 * ralentí**: el gesto entra lanzado, cruza el texto a toda velocidad y se
 * planta. Un `easeInOut` clásico hace lo contrario —sale y llega casi parado y
 * desacelera justo arriba de la palabra, que es donde menos se puede permitir
 * aflojar—, y el trapecio que había antes cruzaba todo al mismo ritmo, sin
 * disparada en el medio.
 *
 * Lo que devuelve es la integral normalizada, o sea la posición.
 */
function ramp(p: number, a = 0.35) {
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  const raw = a * p + (1 - a) * (p / 2 - Math.sin(2 * Math.PI * p) / (4 * Math.PI));
  return raw / ((1 + a) / 2);
}

/**
 * La línea que sobreescribe.
 *
 * Hace **un solo viaje, sin escalas**: aparece a la izquierda de "Más",
 * atraviesa el renglón entero a ritmo parejo y termina 60 px después de la
 * palabra. No hay dos movimientos —barrer y después apartarse— porque esa
 * costura se ve como un frenazo en el medio.
 *
 * Lo que sobreescribe sale de **dónde está la línea**, no de un reloj aparte:
 * mientras va por "Más" (x < 0) no toca nada, entre 0 y el ancho de la palabra
 * escribe lo nuevo y se come lo viejo al mismo ritmo relativo —así los dos
 * terminan juntos y no queda un hueco con la cola de la vieja— y después sigue
 * de largo hasta su lugar de descanso.
 *
 * Va adentro de la ranura, así que **el texto no se mueve**: "Más" y el borde
 * izquierdo de la palabra se quedan donde estaban y lo único que cambia es la
 * palabra.
 */
export function Caret({ oldText, newText, lt, at, sweep = 680, hold = 700, entrance = 220, before = 22, after = 60, over = 11, settle = 200 }: { oldText: string; newText: string; lt: number; at: number; sweep?: number; hold?: number; entrance?: number; before?: number; after?: number; over?: number; settle?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const rects = useOffsets(ref, ["[data-old]", "[data-new]"]);
  const wo = rects["[data-old]"]?.w ?? 0;
  const wn = rects["[data-new]"]?.w ?? 0;
  // Cuánto hay a la izquierda de la ranura ("Más" + el espacio). Es la RESTA de
  // los dos `offsetLeft`, no el de la ranura sola: el renglón es de ancho
  // completo y centra por flex, así que el `offsetLeft` de la ranura mide desde
  // el borde del cuadro y la línea arrancaba fuera de pantalla. Va por
  // `offsetLeft` y no por `getBoundingClientRect` porque es layout puro: no lo
  // mueve el acercamiento lento del bloque.
  const [lead, setLead] = useState(0);
  useLayoutEffect(() => {
    const slot = ref.current?.parentElement;
    const head = slot?.previousElementSibling as HTMLElement | null;
    if (!slot || !head) return;
    const v = slot.offsetLeft - head.offsetLeft;
    setLead((prev) => (Math.abs(prev - v) > 0.5 ? v : prev));
  });
  // **Entra ya en movimiento**: el fundido pisa el arranque en vez de ir antes.
  // Quedarse quieta 300 ms y recién ahí salir era medio segundo de robot.
  const t0 = at + 40;
  const appear = easeOut(seg(lt, at, at + entrance));
  // Llega **de más y se acomoda**: pasa `over` px del lugar final y vuelve en
  // `settle`. Frenar en seco desde 200 px/s es lo que se leía como mecánico; el
  // sobrepaso es la misma inercia que ya tiene la pila de palabras.
  const xAt = (t: number) =>
    lerp(-(lead + before), wn + after + over, ramp(seg(t, t0, t0 + sweep))) - over * easeOut(seg(t, t0 + sweep, t0 + sweep + settle));
  const x = xAt(lt);
  // Barrido horizontal por velocidad, igual que el de la pila: a 900 px/s la
  // línea salta 15 px por cuadro y sin esto se ve teletransportada, no rápida.
  const blur = Math.min(14, Math.abs(x - xAt(lt - 17)) * 0.36);
  const q = wn > 0 ? Math.max(0, Math.min(1, x / wn)) : 0;
  const written = q * wn; // cuánto de la palabra nueva ya está escrito
  const eaten = q * wo; // cuánto de la vieja ya se comió la línea
  const bye = easeIn(seg(lt, t0 + sweep + settle + hold, t0 + sweep + settle + hold + 380));
  return (
    <span ref={ref} className={s.caretWrap}>
      <span
        data-old=""
        className={s.caretOld}
        style={{
          clipPath: `inset(-14% -6% -14% ${eaten.toFixed(1)}px)`,
          transform: `translate3d(${(written - eaten).toFixed(1)}px, 0, 0)`,
          opacity: q >= 0.999 ? 0 : 1,
        }}
      >
        {oldText}
      </span>
      <span data-new="" className={s.caretNew} style={{ clipPath: `inset(-14% ${Math.max(0, wn - written).toFixed(1)}px -14% -6%)`, opacity: written > 0.5 ? 1 : 0 }}>
        {newText}
      </span>
      <Blurred
        x={blur}
        className={s.caret}
        style={{
          transform: `translate3d(${(x - 4).toFixed(1)}px, -50%, 0) scaleY(${lerp(0.35, 1, appear).toFixed(3)})`,
          opacity: (appear * (1 - bye)).toFixed(3),
        }}
      >
        {null}
      </Blurred>
    </span>
  );
}

/* ------------------------------------------------------------ trazos ----- */

/**
 * Una línea que se dibuja: se ve el tramo `from`→`p` del recorrido. Con `from`
 * en 0 es el trazo de siempre, dibujándose de punta; subiéndolo, la cola alcanza
 * a la cabeza y la línea se RETRAE —así es como en la referencia termina tragada
 * por el punto final de la frase—.
 */
export function Stroke({ d, p, from = 0, color, width = 3, opacity = 1, style }: { d: string; p: number; from?: number; color: string; width?: number; opacity?: number; style?: CSSProperties }) {
  if (p - from <= 0.001) return null;
  return (
    <svg className={s.svgLayer} viewBox={`0 0 ${W} ${H}`} aria-hidden style={{ opacity, ...style }}>
      <path d={d} pathLength={1} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={`${(p - from).toFixed(4)} 1`} strokeDashoffset={-from} />
    </svg>
  );
}

/** Un elemento que viaja sobre una trayectoria: `at` es la distancia (0-1). */
export function OnPath({ d, at, className, style, children }: { d: string; at: number; className?: string; style?: CSSProperties; children?: ReactNode }) {
  return (
    <div className={className} style={{ ...style, offsetPath: `path("${d}")`, offsetDistance: `${(clamp01(at) * 100).toFixed(3)}%`, offsetRotate: "0deg" }}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------- punteros ----- */

/** El cursor: un puntero que viaja entre puntos con freno, hace click y arrastra. */
export type CursorKey = { at: number; x: number; y: number; click?: boolean; down?: boolean; up?: boolean };

export function Cursor({ lt, keys, hideAt, scale = 1, clickMs = 560 }: { lt: number; keys: CursorKey[]; hideAt?: number; /** Agranda el puntero sin tocar las coordenadas: escala alrededor de su propia punta. */ scale?: number; /** Cuánto dura la onda del click. Más largo = el click se lee más despacio. */ clickMs?: number }) {
  if (keys.length === 0) return null;
  const first = keys[0];
  const appear = easeOut(seg(lt, first.at - 260, first.at));
  let x = first.x;
  let y = first.y;
  let pressed = false;
  const ripples: number[] = [];
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (lt < k.at) break;
    const n = keys[i + 1];
    if (n && lt < n.at) {
      const p = easeInOut(seg(lt, k.at, n.at));
      x = lerp(k.x, n.x, p);
      y = lerp(k.y, n.y, p);
    } else {
      x = k.x;
      y = k.y;
    }
    if (k.down) pressed = true;
    if (k.up) pressed = false;
    if (k.click && lt - k.at < clickMs) ripples.push(seg(lt, k.at, k.at + clickMs));
  }
  const gone = hideAt !== undefined ? easeIn(seg(lt, hideAt, hideAt + 300)) : 0;
  const opacity = appear * (1 - gone);
  if (opacity <= 0) return null;
  return (
    <div className={s.cursor} style={{ transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)${scale === 1 ? "" : ` scale(${scale})`}`, opacity }}>
      {ripples.map((p, i) => (
        <i key={i} className={s.ripple} style={{ transform: `scale(${(0.35 + p * 1.25).toFixed(3)})`, opacity: (1 - p) * 0.55 }} />
      ))}
      <svg viewBox="0 0 24 24" className={s.pointer} style={{ transform: `scale(${pressed ? 0.86 : 1})` }} aria-hidden>
        <path d="M5 3l14 9-6.6 1.3L15 20l-3 1.4-2.6-6.6L5 19z" fill="#14150f" stroke="#f2efe8" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** El toque en una pantalla táctil: un círculo que se hunde y se abre. */
export function Tap({ lt, at, x, y }: { lt: number; at: number; x: number; y: number }) {
  if (lt < at || lt > at + 520) return null;
  const p = seg(lt, at, at + 520);
  return <span className={s.tap} style={{ left: x, top: y, opacity: (1 - p) * 0.85, transform: `translate(-50%, -50%) scale(${(0.5 + easeOut(p) * 1.3).toFixed(3)})` }} />;
}

/** Una cifra que "cuenta": los dígitos giran al azar y se asientan de izquierda a derecha. */
export function Scramble({ text, lt, at, dur = 900 }: { text: string; lt: number; at: number; dur?: number }) {
  const chars = Array.from(text);
  const digits = chars.filter((c) => /\d/.test(c)).length;
  let d = 0;
  return (
    <span className={s.tabular}>
      {chars.map((c, i) => {
        if (!/\d/.test(c)) return <Fragment key={i}>{c}</Fragment>;
        const settleAt = at + (d / Math.max(1, digits - 1)) * dur;
        d += 1;
        if (lt >= settleAt) return <Fragment key={i}>{c}</Fragment>;
        return <Fragment key={i}>{Math.floor(noise(i, Math.floor(lt / 55)) * 10)}</Fragment>;
      })}
    </span>
  );
}

/* -------------------------------------------------------------- marca ---- */

/** La marca de agua: el logo chico abajo a la derecha, como en todo video de producto. */
export function Mark({ tone, opacity = 1 }: { tone: "ink" | "paper"; opacity?: number }) {
  return (
    <div className={s.mark} style={{ opacity }} aria-hidden>
      <Logo tone={tone} size={16} />
    </div>
  );
}

const ISOTYPE_SHAPES = ISOTYPE_PATH.split(/(?=M)/).filter(Boolean);

/** El isotipo entero, quieto. */
export function IsotypeStill({ size, tone }: { size: number; tone: "ink" | "paper" }) {
  const color = tone === "ink" ? "#323232" : "#f2efe8";
  const dot = tone === "ink" ? "#4e6b28" : "#c8e293";
  return (
    <svg viewBox={ISOTYPE_VIEWBOX} width={size} height={size} className={s.isotype} aria-hidden>
      {ISOTYPE_SHAPES.map((d, i) => (
        <path key={i} d={d} fill={color} fillRule="evenodd" />
      ))}
      <circle cx={ISOTYPE_DOT.cx} cy={ISOTYPE_DOT.cy} r={ISOTYPE_DOT.r} fill={dot} />
    </svg>
  );
}

/**
 * El logotipo entero, quieto, para entrar con blur como el de la referencia.
 * `iso` y `word` animan cada pieza por separado (en `meet` entra primero el
 * isotipo y después las letras).
 */
export function LockupStill({ size, tone = "ink", iso, word }: { size: number; tone?: "ink" | "paper"; iso?: CSSProperties; word?: CSSProperties }) {
  const k = size / 581;
  const wW = 2041.5 * k;
  const wH = 426.5 * k;
  const wL = 726.3 * k;
  const wT = 15.1 * k;
  const total = 2767.7 * k;
  return (
    <div className={s.lockup} style={{ width: total, height: size }}>
      <div style={iso}>
        <IsotypeStill size={size} tone={tone} />
      </div>
      <span className={s.wordmarkMask} style={{ left: wL, top: wT, width: wW, height: wH, ...word }}>
        <svg viewBox={WORDMARK_VIEWBOX} width={wW} height={wH} aria-hidden>
          {/* `evenodd` o las contraformas de la "o" y la "b" se rellenan y la
              palabra queda hecha manchones. */}
          <path d={WORDMARK_PATH} fill={tone === "ink" ? "#323232" : "#f2efe8"} fillRule="evenodd" />
        </svg>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------ fondos ----- */

/**
 * El degradado de marca: tinta de fondo con tres manchas lentas (pistacho,
 * ámbar, arcilla).
 *
 * `deep` es la variante del acto de los módulos (`built` al florecer, `wheel`,
 * `grid`, `merge`, `unfold` y `precision`): el verde profundo de
 * `gradient-black-reference.avif` con una pluma de luz que baja desde arriba, y
 * encima el grano.
 *
 * `light` es el reverso, para la demostración de la escena 18: el papel con una
 * masa verde a la izquierda y una amarilla al centro, calcado de
 * `gradient-light-reference.png`. Ahí el grano no lleva la viñeta oscura de las
 * otras variantes —sobre un fondo claro se lee como suciedad—, sino un velo
 * blanco abajo.
 *
 * El grano está calibrado sobre `video-reference.mp4` a 27,2 s: es de ~1 px,
 * **no se re-sortea cuadro a cuadro** (la diferencia entre cuadros consecutivos
 * da 0,00) y su desvío contra el promedio local es de 6,57/255. Acá va bastante
 * más bajo que eso —el avif no tiene grano— pero no puede ser cero: sobre un
 * fondo tan oscuro, sin ruido que haga de dither, el degradado se escalona en
 * bandas. Las texturas van fijas a pantalla; lo único que se mueve son las
 * manchas de abajo y el cruce de los dos mantos de destellos.
 */
export function Gradient({ lt, style, bright = false, deep = false, light = false, children }: { lt: number; style?: CSSProperties; bright?: boolean; deep?: boolean; light?: boolean; children?: ReactNode }) {
  const a = lt / 1000;
  // Los dos mantos se cruzan: mientras uno se apaga el otro prende, así que los
  // puntos que brillan van cambiando sin tener que animar punto por punto.
  const tw = 0.5 + 0.5 * Math.sin(a * 0.55);
  return (
    <div className={`${s.layer} ${s.gradient} ${deep ? s.gradientDeep : light ? s.gradientLight : bright ? s.gradientBright : ""}`} style={style} aria-hidden>
      <i className={s.gA} style={{ transform: `translate3d(${(Math.sin(a * 0.5) * 70).toFixed(1)}px, ${(Math.cos(a * 0.4) * 50).toFixed(1)}px, 0)` }} />
      <i className={s.gB} style={{ transform: `translate3d(${(Math.cos(a * 0.45) * 80).toFixed(1)}px, ${(Math.sin(a * 0.35) * 60).toFixed(1)}px, 0)` }} />
      <i className={s.gC} style={{ transform: `translate3d(${(Math.sin(a * 0.4 + 2) * 60).toFixed(1)}px, ${(Math.cos(a * 0.5 + 1) * 40).toFixed(1)}px, 0)` }} />
      {/* Masas propias de una escena: van DEBAJO del grano y los destellos, como las tres de siempre. */}
      {children}
      <i className={s.gGrain} />
      {(deep || light) && (
        <>
          <i className={s.gFilm} />
          <i className={s.gGlitter} style={{ opacity: ((light ? 0.05 : 0.08) + (light ? 0.09 : 0.2) * tw).toFixed(3) }} />
          <i className={`${s.gGlitter} ${s.gGlitterB}`} style={{ opacity: ((light ? 0.05 : 0.08) + (light ? 0.09 : 0.2) * (1 - tw)).toFixed(3) }} />
        </>
      )}
    </div>
  );
}

/** Movimiento de cámara continuo: escala y traslación lentas de toda la escena. */
export function Camera({ scale = 1, x = 0, y = 0, origin = "50% 50%", blur = 0, children, className }: { scale?: number; x?: number; y?: number; origin?: string; blur?: number; children: ReactNode; className?: string }) {
  return (
    <div className={`${s.layer} ${className ?? ""}`} style={{ transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`, transformOrigin: origin, filter: blur > 0.1 ? `blur(${blur.toFixed(2)}px)` : undefined }}>
      {children}
    </div>
  );
}
