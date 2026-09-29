"use client";

import { Fragment, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { clamp01, easeIn, easeInExpo, easeInOut, easeOut, easeOutExpo, easeOutQuint, lerp, noise, planChat, seg, STREAM_MS, typedCount, typingOffsets } from "../video/timeline";
import { Blurred, Cursor, Gradient, Mark, Scramble, Struck, tokenize, useOffsets, type CursorKey } from "../video/fx";
import { AssistantTurn, ChatShell, Composer, RevenueCard, UserBubble } from "../video/pms/ChatUi";
import PmsShell from "../video/pms/PmsShell";
import TourismCard from "../video/pms/TourismCard";
import { tourismMetrics } from "../video/acts/data";
import { ChatScene as BaseChatScene, HingeScene as BaseHingeScene } from "../video/acts/chat";
import { planTutorial, type IaBeatId, type IaVideoDict } from "./timeline";
import { AttCard, OrbSpin, TourismPanel, TutorialComposer } from "./ui";
import u from "./ui.module.css";
import sc from "../video/scenes.module.css";
import s from "./ia.module.css";

/**
 * Las doce escenas del video de Roombir IA.
 *
 * El arco sigue a la página `/producto/ia` sección por sección: el gancho de
 * las cuatro pestañas y el titular del hero; los pedidos literales y la
 * demostración en el chat real; el expediente del destino; la diferencia con
 * un chat genérico; el turno estratégico; los permisos; cómo se le habla; las
 * cifras y el cierre con el CTA de la página.
 *
 * Mismo lenguaje que el video de portada: Outfit con degradado entrando palabra
 * por palabra, salidas hacia atrás con desenfoque, motion blur en lo que viaja
 * y la UI REAL del producto (`video/pms/*`), nunca ilustraciones. Cada escena
 * tiene arriba un objeto con todos sus tiempos: retimear es tocar un número.
 */

export type IaSceneProps = {
  /** Tiempo local del beat en ms. */
  lt: number;
  v: IaVideoDict;
  locale: Locale;
  paused: boolean;
};

/* ============================================================ piezas ==== */

const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

/** Entrada que sube: el enfoque y la opacidad rápidos, la subida más larga. */
function lift(lt: number, at: number, dist = 30, blur = 0): CSSProperties {
  const f = easeOutQuint(seg(lt, at, at + 520));
  const y = easeOut(seg(lt, at, at + 680));
  return {
    opacity: f,
    transform: `translate3d(0, ${((1 - y) * dist).toFixed(2)}px, 0)`,
    filter: blur > 0 && f < 0.999 ? `blur(${((1 - f) * blur).toFixed(2)}px)` : undefined,
  };
}

/** Salida hacia atrás: se achica, se desenfoca y se apaga. */
function away(q: number, scale = 0.86, blur = 12): CSSProperties {
  if (q <= 0) return {};
  return { opacity: 1 - q * q, transform: `scale(${lerp(1, scale, q).toFixed(4)})`, filter: `blur(${(q * blur).toFixed(2)}px)` };
}

/**
 * Un titular que entra palabra por palabra, TODO en Outfit: el texto en tinta
 * (en papel sobre los fondos oscuros) y las palabras marcadas con `*así*` —el
 * remate de los titulares del sitio— con el degradado de la casa. Con `emAt`
 * el remate entra después ("…*y queda hecho*").
 *
 * El degradado cruza el remate ENTERO: se mide dónde cae cada palabra marcada
 * y cada una pinta su tramo, si no volvería a empezar en cada palabra. (El
 * 23-09-2026 el usuario pidió sacar la serif itálica y el degradado del texto
 * común: "texto negro y donde iría esa tipografía, en gradiente, todo en Outfit".)
 */
function GLine({
  text,
  lt,
  at,
  lag = 80,
  emAt,
  out,
  tone = "grad",
  blur = 6,
  className,
}: {
  text: string;
  lt: number;
  at: number;
  lag?: number;
  emAt?: number;
  out?: number;
  tone?: "grad" | "paper" | "ink";
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
  // Las piezas se cortan por ESPACIOS: `*sistema*.` son dos tokens pegados y
  // el punto no puede entrar después que su palabra.
  const words: { text: string; em: boolean; space: boolean }[] = [];
  for (const tk of tokenize(text)) {
    const last = words[words.length - 1];
    if (!tk.space && last && !last.space) {
      last.text += tk.text;
      last.em = last.em || tk.em;
    } else words.push({ ...tk });
  }
  let k = -1;
  let e = -1;
  return (
    <span ref={ref} className={[s.gl, className ?? ""].join(" ")}>
      {words.map((w, i) => {
        if (w.space) return <Fragment key={i}> </Fragment>;
        k += 1;
        if (w.em) e += 1;
        const start = w.em && emAt !== undefined ? emAt + e * lag : at + k * lag;
        const st = lift(lt, start, 28, blur);
        const u = out === undefined ? 0 : easeIn(seg(lt, out + k * 30, out + k * 30 + 240));
        // El remate lleva SÓLO la clase del degradado: con `.glInk` al lado, su
        // `color: inherit` le pisaría el transparente y el degradado no se vería.
        const tint = w.em ? (tone === "paper" ? s.glGradLight : s.glGrad) : tone === "paper" ? s.glPaper : s.glInk;
        const cls = [s.glWord, tint].join(" ");
        return (
          <span
            key={i}
            data-w
            data-em={w.em ? "" : undefined}
            className={cls}
            style={{
              opacity: (st.opacity as number) * (1 - u),
              transform: u > 0 ? `${st.transform} translate3d(0, ${(-20 * u).toFixed(2)}px, 0)` : st.transform,
              filter: u > 0 ? `blur(${(u * 8).toFixed(2)}px)` : st.filter,
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

/** El orbe de Roombir IA, girando con el reloj del video (no con CSS). */
/** El isotipo de Roombir IA. `rot` en grados: siempre termina derecho (0), nunca gira suelto con el tiempo. */
function Orb({ size, rot = 0 }: { size: number; rot?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={s.orb} src="/video/roombrain.png" alt="" width={size} height={size} style={rot ? { transform: `rotate(${rot.toFixed(2)}deg)` } : undefined} />
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

/* ======================================================= 1 · tabs ====== */

/** El compositor centrado del arranque: dónde queda y cuánto mide. */
const PILL = { cx: 640, cy: 470, w: 640 };

const TB = { line: 150, em: 760, tabs: 700, tabLag: 150, merge: 2250, mergeEnd: 3050, pill: 2550, pillEnd: 3350, lineOut: 2350 };
const TAB = { w: 214, gap: 16, y: 420 };

const TAB_ICONS: ReactNode[] = [
  <path key="a" d="M4 6h16v14H4zM4 10h16M9 3v4M15 3v4" />,
  <path key="b" d="M20 12l-8 8-9-9V3h8zM7.5 7.5h.01" />,
  <path key="c" d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6M3 14h18M3 18v2M21 18v2M6 9V6h5v3" />,
  <path key="d" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9s1.2-6.4 3.7-9z" />,
];

/** El compositor real (vidrio) a un ancho dado, con recorte horizontal desde el centro. */
function GlassPill({ text, placeholder, caret, pressed, open = 1, style }: { text: string; placeholder: string; caret: boolean; pressed?: boolean; open?: number; style?: CSSProperties }) {
  const inset = ((1 - open) * 50).toFixed(2);
  return (
    <div className={sc.demoGlass} style={{ left: PILL.cx - PILL.w / 2 - 20, top: PILL.cy - 32, width: PILL.w + 40, clipPath: open < 1 ? `inset(0 ${inset}% 0 ${inset}% round 30px)` : undefined, ...style }}>
      <ChatShell className={sc.demoGlassShell}>
        <Composer text={text} placeholder={placeholder} caret={caret} pressed={pressed} sendLabel={placeholder} />
      </ChatShell>
    </div>
  );
}

export function TabsScene({ lt, v }: IaSceneProps) {
  const merge = smooth(seg(lt, TB.merge, TB.mergeEnd));
  const lineOut = easeIn(seg(lt, TB.lineOut, TB.lineOut + 420));
  const pill = easeOutExpo(seg(lt, TB.pill, TB.pillEnd));
  const rowW = 4 * TAB.w + 3 * TAB.gap;
  const areas = v.ia.ask.items.slice(0, 4).map((it) => it.area);
  // Todo el bloque se acerca apenas durante la escena: nada queda quieto.
  const push = 1 + 0.03 * easeInOut(clamp01(lt / 3400));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} style={{ opacity: seg(lt, 0, 900) }} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${push.toFixed(4)})` }}>
        <div className={s.headTop} style={{ top: 200, ...away(lineOut, 0.9, 10) }}>
          <h2 className={s.display}>
            <GLine text={v.x.tabsLine} lt={lt} at={TB.line} emAt={TB.em} />
          </h2>
        </div>
        {areas.map((a, i) => {
          const at = TB.tabs + i * TB.tabLag;
          const p = easeOutExpo(seg(lt, at, at + 560));
          const x0 = PILL.cx - rowW / 2 + i * (TAB.w + TAB.gap);
          // Entran desde la derecha con estela; al juntarse van al centro y se apagan.
          const x = lerp(x0 + 90 * (1 - p), PILL.cx - TAB.w / 2, merge);
          const y = lerp(TAB.y - 26, PILL.cy - 26, merge);
          const bx = (1 - p) * 16 + Math.sin(merge * Math.PI) * 10;
          return (
            <Blurred key={a} x={bx} className={s.tab} style={{ left: x, top: y, width: TAB.w, opacity: clamp01(p * 1.6) * (1 - easeIn(seg(lt, TB.merge + 300, TB.mergeEnd))), transform: `scale(${lerp(1, 0.86, merge).toFixed(4)})` }}>
              <span className={s.tabIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {TAB_ICONS[i]}
                </svg>
              </span>
              <span className={s.tabLabel}>{a}</span>
              <span className={s.tabClose} aria-hidden>
                ×
              </span>
            </Blurred>
          );
        })}
        {pill > 0 && <GlassPill text="" placeholder={v.x.placeholder} caret={lt > TB.pillEnd - 200} open={pill} style={{ opacity: clamp01(pill * 1.5) }} />}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= 2 · hero ====== */

const HE = { line: 40, em: 780, out: 2560, end: 3000 };

export function HeroScene({ lt, v }: IaSceneProps) {
  const q = smooth(seg(lt, HE.out, HE.end));
  const push = 1.03 + 0.03 * easeInOut(clamp01(lt / HE.end));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${push.toFixed(4)})`, ...(q > 0 ? { filter: `blur(${(q * 12).toFixed(2)}px)`, opacity: 1 - q } : {}) }}>
        <div className={s.headTop} style={{ top: 170 }}>
          <h1 className={s.displayLg}>
            <GLine text={v.ia.hero.title} lt={lt} at={HE.line} emAt={HE.em} lag={90} />
          </h1>
        </div>
        <GlassPill text="" placeholder={v.x.placeholder} caret />
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= 3 · meet ====== */

/**
 * Fondo blanco, texto negro y el orbe con la animación del producto
 * (`OrbSpin`): entra, gira dos vueltas volviéndose un momento esfera de
 * gradiente, frena y queda quieto antes de la salida.
 */
const ME = { orb: 0, spin: 150, cycle: 2200, name: 380, out: 2850, end: 3200 };

export function MeetScene({ lt, v }: IaSceneProps) {
  const drift = 1 + 0.035 * easeInOut(clamp01(lt / ME.end));
  const q = easeIn(seg(lt, ME.out, ME.end));
  const orbIn = easeOutQuint(seg(lt, ME.orb, ME.orb + 520));
  return (
    <div className={sc.scene} style={{ background: "#ffffff" }}>
      <div className={sc.typeBlock} style={{ transform: `scale(${drift.toFixed(4)})`, ...away(q, 0.9, 14) }}>
        <div className={s.meetRow}>
          <div style={{ opacity: orbIn.toFixed(3), transform: `scale(${lerp(1.25, 1, orbIn).toFixed(4)})` }}>
            <OrbSpin p={seg(lt, ME.spin, ME.spin + ME.cycle)} size={136} />
          </div>
          <h2 className={s.meetName} style={{ color: "#0f0f0f" }}>
            <GLine text={v.x.name} lt={lt} at={ME.name} lag={120} blur={14} tone="ink" />
          </h2>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= 4 · asks ====== */

/**
 * Los seis pedidos de la página, como burbujas reales del chat que entran por
 * abajo y empujan a las anteriores (el empujón con la curva medida del roller
 * del video de portada). Después cada una recibe su tilde: "y queda hecho".
 */
const AS = { head: 100, first: 700, lag: 520, settle: 480, em: 4250, checks: 4450, checkLag: 110, out: 5750, end: 6200 };
const ASK_ROW = 52;
const ASK_SCALE = 1.4;

export function AsksScene({ lt, v }: IaSceneProps) {
  const items = v.ia.ask.items;
  const times = items.map((_, i) => AS.first + i * AS.lag);
  const push = (t0: number) => 1 - Math.pow(1 - seg(lt, t0, t0 + AS.settle), 2.5);
  // Cuántas filas subió cada una: una por cada pedido que entró después.
  const pos = (k: number) => times.slice(k + 1).reduce((a, t0) => a + push(t0), 0);
  const q = smooth(seg(lt, AS.out, AS.end));
  const cam = 1 + 0.035 * easeInOut(clamp01(lt / AS.end));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.92, 12) }}>
        <div className={s.headTop} style={{ top: 60 }}>
          <h2 className={s.displaySm}>
            <GLine text={v.ia.ask.title} lt={lt} at={AS.head} emAt={AS.em} />
          </h2>
        </div>
        <ChatShell className={s.askShell}>
          <div className={s.askColumn} style={{ transform: `scale(${ASK_SCALE})` }}>
            {items.map((it, k) => {
              if (lt < times[k]) return null;
              const arrive = push(times[k]);
              const y = -pos(k) * ASK_ROW;
              const vel = Math.abs(pos(k) - times.slice(k + 1).reduce((a, t0) => a + (1 - Math.pow(1 - seg(lt - 17, t0, t0 + AS.settle), 2.5)), 0));
              const ck = easeOutExpo(seg(lt, AS.checks + k * AS.checkLag, AS.checks + k * AS.checkLag + 380));
              const fade = 1 - seg(pos(k), 5.4, 6);
              return (
                <Blurred key={k} y={Math.min(10, vel * ASK_ROW * 0.5)} className={s.askRow} style={{ transform: `translate3d(0, ${(y + (1 - arrive) * 40).toFixed(1)}px, 0)`, opacity: clamp01(arrive * 1.8) * fade }}>
                  <span className={s.askArea}>{it.area}</span>
                  <UserBubble text={it.ask} />
                  <span className={s.askCheck} style={{ opacity: ck, transform: `scale(${lerp(0.4, 1, ck).toFixed(3)})` }}>
                    <Check />
                  </span>
                </Blurred>
              );
            })}
          </div>
        </ChatShell>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= 5 · demo ====== */

/**
 * Tutorial cinematográfico: cuatro funciones del chat operadas por un puntero
 * negro con borde blanco, con la cámara que se acerca a cada botón que toca y
 * se aleja para mostrar la respuesta. Arriba a la izquierda, el rótulo del paso.
 *
 * Todo sale de `planTutorial` (timeline.ts). Los lugares donde el puntero hace
 * clic se MIDEN en la UI (`data-*` de `ui.tsx`), así la cámara y el puntero
 * caen en el botón real en los cinco idiomas.
 */
const APP = { w: 980, h: 620, x: 150, y: 50 };
const PANEL_W = 420;

type Pose = { x: number; y: number; z: number };
/** Un movimiento de cámara: desde la pose anterior hasta `to`, entre `t` y `t + d`. */
type Move = { t: number; d: number; to: Pose };

function camera(moves: Move[], lt: number, from: Pose): Pose {
  let cur = from;
  for (const m of moves) {
    if (lt <= m.t) break;
    const p = smooth(seg(lt, m.t, m.t + m.d));
    cur = {
      x: lerp(cur.x, m.to.x, p),
      y: lerp(cur.y, m.to.y, p),
      // El zoom se interpola en escala logarítmica: si no, alejarse parece más lento que acercarse.
      z: Math.exp(lerp(Math.log(cur.z), Math.log(m.to.z), p)),
    };
    if (p < 1) break;
  }
  return cur;
}

/** El puntero del tutorial: posición en el MUNDO, frenando entre llaves; clics con onda. */
function pointerAt(keys: CursorKey[], lt: number) {
  let x = keys[0].x;
  let y = keys[0].y;
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
    if (k.click && lt - k.at < 700) ripples.push(seg(lt, k.at, k.at + 700));
  }
  return { x, y, pressed, ripples };
}

type R = { x: number; y: number; w: number; h: number };
const mid = (r: R) => ({ x: APP.x + r.x + r.w / 2, y: APP.y + r.y + r.h / 2 });

export function DemoScene({ lt, v }: IaSceneProps) {
  const d = v.x.demo;
  const plan = useMemo(() => planTutorial(d), [d]);
  const { A, R: Rp, V, T } = plan;
  const appRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const lastHeight = useRef<number | null>(null);

  // El hilo crece desde abajo: lo de arriba sube deslizando.
  useLayoutEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    const h = el.offsetHeight;
    const prev = lastHeight.current;
    lastHeight.current = h;
    if (prev === null) return;
    const dh = h - prev;
    if (dh > 0.5 && dh < 480) el.animate([{ transform: `translateY(${dh}px)` }, { transform: "translateY(0)" }], { duration: 380, easing: "cubic-bezier(0.22, 0.9, 0.3, 1)", composite: "add" });
  });

  /* -------------------------------------------------- estado de la UI --- */
  const menu = lt < plan.pdfClick + 60 ? easeOut(seg(lt, plan.attachClick + 40, plan.attachClick + 200)) : 1 - seg(lt, plan.pdfClick + 60, plan.pdfClick + 200);
  const listenIn = seg(lt, plan.micClick + 60, plan.micClick + 280) * (1 - seg(lt, plan.stopClick + 60, plan.stopClick + 260));
  const panelOpen = smooth(seg(lt, plan.panelAt, plan.panelAt + 650));
  // Dos bajadas con pausa: a la mitad y al pie.
  const panelScroll = 0.5 * smooth(seg(lt, plan.scrollFrom, plan.scrollFrom + plan.SCROLL)) + 0.5 * smooth(seg(lt, plan.scrollMid, plan.scrollTo));

  let text = "";
  let caret = false;
  const typing = (tp: { start: number; offsets: number[]; end: number }, ask: string, send: number) => {
    if (lt >= tp.start && lt < send) {
      text = ask.slice(0, typedCount(tp.offsets, lt - tp.start));
      caret = true;
    }
  };
  typing(plan.tA, d.attach.ask, plan.sendA);
  typing(plan.tR, d.report.ask, plan.sendR);
  typing(plan.tT, d.tourism.ask, plan.sendT);
  if (lt >= plan.micClick && lt < plan.sendV) {
    const n = plan.words.filter((_, i) => lt >= plan.wordAt(i)).length;
    text = plan.words.slice(0, n).join(" ");
    caret = lt >= plan.stopClick;
  }
  if (lt > plan.attachClick && lt < plan.tA.start) caret = true;
  const sends = [plan.sendA, plan.sendR, plan.sendV, plan.sendT];
  const pressed = sends.some((t0) => lt >= t0 - 60 && lt < t0 + 160);
  const attachment =
    lt >= plan.attAt && lt < plan.sendA
      ? { name: d.attach.file, pending: lt < plan.attReady, pendingLabel: "", p: seg(lt, plan.attAt, plan.attAt + 260) }
      : null;

  /* ------------------------------------------------------- medición ----- */
  const rects = useOffsets(appRef, ["[data-pill]", "[data-att-btn]", "[data-send]", "[data-mic]", '[data-opt="pdf"]', "[data-stop]", "[data-band]", "section footer span", "section[aria-label]"], [menu > 0.5, listenIn > 0.5, lt >= plan.cardAt - 150, lt >= plan.moreClick - 1300, panelOpen > 0]);
  const pill = rects["[data-pill]"] ?? { x: 110, y: 546, w: 840, h: 48 };
  const att = rects["[data-att-btn]"] ?? { x: pill.x + 5, y: pill.y + 7, w: 34, h: 34 };
  const send = rects["[data-send]"] ?? { x: pill.x + pill.w - 41, y: pill.y + 6, w: 36, h: 36 };
  const mic = rects["[data-mic]"] ?? { x: send.x - 42, y: send.y, w: 36, h: 36 };
  const pdf = rects['[data-opt="pdf"]'] ?? { x: att.x + 10, y: att.y - 80, w: 124, h: 56 };
  const stop = rects["[data-stop]"] ?? { x: pill.x + pill.w * 0.75, y: pill.y - 50, w: 36, h: 36 };
  // La banda de dictado: la fila con la onda, el stop y la cruz.
  const band = rects["[data-band]"] ?? { x: pill.x + pill.w * 0.125, y: pill.y - 55, w: pill.w * 0.75, h: 36 };
  const card = rects["section[aria-label]"] ?? { x: 100, y: 250, w: 780, h: 290 };
  const more = rects["section footer span"] ?? { x: 700, y: pill.y - 60, w: 80, h: 30 };
  const P = mid(pill);
  const aM = mid(att);
  const sM = mid(send);
  const mM = mid(mic);

  /* ------------------------------------------------------- cámara ------- */
  const WIDE: Pose = { x: 640, y: 360, z: 1 };
  // Encuadre de la respuesta: la última línea del hilo cae a ~570 px de pantalla,
  // lejos de la barra del reproductor (con y 330 quedaba pegada abajo).
  const thread: Pose = { x: 640, y: 420, z: 1.12 };
  const atText: Pose = { x: APP.x + pill.x + 330, y: P.y - 70, z: 1.7 };
  // Después de leer la frase, la cámara se abre a la píldora ENTERA: el texto
  // sigue a la vista mientras el puntero va a enviar.
  const atPill: Pose = { x: P.x + 40, y: P.y - 60, z: 1.3 };
  const moves: Move[] = [
    // 1 · adjuntar: al clip y al menú
    { t: plan.cap[0], d: 900, to: { x: aM.x + 150, y: P.y - 95, z: 1.85 } },
    { t: plan.tA.end + 600, d: 800, to: atPill },
    { t: plan.sendA + 350, d: 900, to: thread },
    // 2 · informe
    { t: plan.tR.start - 700, d: 800, to: atText },
    { t: plan.tR.end + 600, d: 800, to: atPill },
    { t: plan.sendR + 350, d: 900, to: { x: 600, y: P.y - 150, z: 1.3 } },
    // 3 · voz
    // Primero al micrófono, para que se vea el clic; en cuanto aparece la banda,
    // la cámara se CENTRA en ella (onda + stop, con la transcripción debajo),
    // no en el botón. Después del stop se abre a la píldora para enviar.
    { t: plan.micClick - 1000, d: 800, to: { x: mM.x - 130, y: P.y - 40, z: 1.7 } },
    { t: plan.micClick + 250, d: 750, to: { x: mid(band).x, y: mid(band).y + 28, z: 1.55 } },
    { t: plan.stopClick + 250, d: 700, to: atPill },
    { t: plan.sendV + 350, d: 900, to: thread },
    // 4 · estado turístico
    { t: plan.tT.start - 700, d: 800, to: atText },
    { t: plan.tT.end + 600, d: 800, to: atPill },
    { t: plan.sendT + 350, d: 900, to: { x: 640, y: 320, z: 1.08 } },
    // La tarjeta de cerca, para leer sus cuatro cifras y la alerta.
    { t: plan.cardAt, d: 900, to: { x: mid(card).x, y: mid(card).y, z: Math.min(1.45, 1180 / card.w) } },
    { t: plan.moreClick - 900, d: 750, to: { x: mid(more).x - 110, y: mid(more).y - 90, z: 1.6 } },
    // El panel se presenta en plano general y quieto (pedido del usuario: sin
    // zoom al final); lo único que se mueve es su scroll.
    { t: plan.panelAt, d: 900, to: WIDE },
  ];
  const cam = camera(moves, lt, { x: 640, y: 360, z: 0.97 });
  const prev = camera(moves, lt - 16, { x: 640, y: 360, z: 0.97 });
  // Barrido de cámara: sólo cuando corre de verdad, así los planos quietos quedan
  // nítidos. Tope bajo (más de ~1,5 px empasta la UI) y dividido por el zoom,
  // porque el filtro va ANTES de la escala de la capa.
  const speed = Math.hypot(cam.x - prev.x, cam.y - prev.y) * cam.z + Math.abs(cam.z - prev.z) * 400;
  const camBlur = Math.max(0, Math.min(1.4, (speed - 8) * 0.07)) / cam.z;
  const tx = 640 - cam.x * cam.z;
  const ty = 360 - cam.y * cam.z;
  const toScreen = (x: number, y: number) => ({ x: x * cam.z + tx, y: y * cam.z + ty });

  /* ------------------------------------------------------- puntero ------ */
  const pdfM = mid(pdf);
  const stM = mid(stop);
  const moM = mid(more);
  const keys: CursorKey[] = [
    { at: plan.cap[0] + 300, x: aM.x + 140, y: aM.y + 150 },
    { at: plan.attachClick - 130, x: aM.x, y: aM.y },
    { at: plan.attachClick, x: aM.x, y: aM.y, click: true, down: true },
    { at: plan.attachClick + 160, x: aM.x, y: aM.y, up: true },
    { at: plan.pdfClick - 130, x: pdfM.x, y: pdfM.y },
    { at: plan.pdfClick, x: pdfM.x, y: pdfM.y, click: true, down: true },
    { at: plan.pdfClick + 160, x: pdfM.x, y: pdfM.y, up: true },
    { at: plan.tA.start + 300, x: aM.x + 220, y: P.y + 70 },
    // Quieto mientras se escribe y se lee; recién después va a enviar.
    { at: plan.tA.end + 800, x: aM.x + 220, y: P.y + 70 },
    { at: plan.sendA - 150, x: sM.x, y: sM.y },
    { at: plan.sendA, x: sM.x, y: sM.y, click: true, down: true },
    { at: plan.sendA + 160, x: sM.x, y: sM.y, up: true },
    { at: plan.sendA + 700, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.sendR - 650, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.sendR - 150, x: sM.x, y: sM.y },
    { at: plan.sendR, x: sM.x, y: sM.y, click: true, down: true },
    { at: plan.sendR + 160, x: sM.x, y: sM.y, up: true },
    { at: plan.sendR + 700, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.micClick - 700, x: mM.x + 30, y: mM.y + 90 },
    { at: plan.micClick - 130, x: mM.x, y: mM.y },
    { at: plan.micClick, x: mM.x, y: mM.y, click: true, down: true },
    { at: plan.micClick + 160, x: mM.x, y: mM.y, up: true },
    { at: plan.micClick + 600, x: mM.x - 30, y: mM.y + 80 },
    { at: plan.stopClick - 600, x: mM.x - 30, y: mM.y + 80 },
    { at: plan.stopClick - 130, x: stM.x, y: stM.y },
    { at: plan.stopClick, x: stM.x, y: stM.y, click: true, down: true },
    { at: plan.stopClick + 160, x: stM.x, y: stM.y, up: true },
    { at: plan.sendV - 150, x: sM.x, y: sM.y },
    { at: plan.sendV, x: sM.x, y: sM.y, click: true, down: true },
    { at: plan.sendV + 160, x: sM.x, y: sM.y, up: true },
    { at: plan.sendV + 700, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.sendT - 650, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.sendT - 150, x: sM.x, y: sM.y },
    { at: plan.sendT, x: sM.x, y: sM.y, click: true, down: true },
    { at: plan.sendT + 160, x: sM.x, y: sM.y, up: true },
    { at: plan.cardAt, x: sM.x + 40, y: sM.y + 90 },
    { at: plan.moreClick - 900, x: moM.x + 120, y: moM.y + 140 },
    { at: plan.moreClick - 130, x: moM.x, y: moM.y },
    { at: plan.moreClick, x: moM.x, y: moM.y, click: true, down: true },
    { at: plan.moreClick + 160, x: moM.x, y: moM.y, up: true },
    { at: plan.panelAt + 900, x: APP.x + APP.w - 60, y: 330 },
  ];
  const ptr = pointerAt(keys, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, plan.cap[0] + 40, plan.cap[0] + 300)) * (1 - easeIn(seg(lt, plan.scrollFrom + 400, plan.scrollFrom + 700)));

  /* ------------------------------------------------------- rótulos ------ */
  const caps = d.captions.map((c, i) => {
    const a0 = plan.cap[i];
    const a1 = i + 1 < plan.cap.length ? plan.cap[i + 1] : plan.duration - 450;
    const inP = easeOutQuint(seg(lt, a0, a0 + 520));
    const outP = easeIn(seg(lt, a1 - 260, a1));
    return { c, i, on: lt >= a0 && lt < a1, inP, outP };
  });

  /* ------------------------------------------------------- hilo --------- */
  const turns = [
    { ask: d.attach.ask, p: A, steps: d.attach.steps, answer: d.attach.answer, file: d.attach.file, block: null as ReactNode },
    { ask: d.report.ask, p: Rp, steps: d.report.steps, answer: d.report.answer, file: "", block: <RevenueCard block title={d.report.title} meta={d.report.meta} kpis={d.report.kpis} /> },
    { ask: d.voice.heard, p: V, steps: d.voice.steps, answer: d.voice.answer, file: "", block: null },
    {
      ask: d.tourism.ask,
      p: T,
      steps: d.tourism.steps,
      answer: d.tourism.answer,
      file: "",
      block: (
        <TourismCard
          block
          title={v.base.tourism.title}
          updated={v.base.tourism.updated}
          metrics={tourismMetrics(v.base, lt, T.blockAt + 80, 140)}
          reveal={v.base.tourism.metrics.filter((_, k) => lt >= T.blockAt + 80 + k * 140).length}
          alert={v.base.tourism.alert}
          alertOn={lt >= T.blockAt + 620}
          more={v.base.tourism.more}
        />
      ),
    },
  ];
  const lastVisible = turns.reduce((acc, tn, i) => (lt >= tn.p.send + 60 ? i : acc), -1);

  const inP = smooth(seg(lt, 0, 800));
  const q = smooth(seg(lt, plan.duration - 450, plan.duration));

  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light />
      <div className={sc.layer} style={{ opacity: (clamp01(inP * 1.4) * (1 - q * q)).toFixed(3), filter: q > 0 ? `blur(${(q * 12).toFixed(2)}px)` : inP < 0.999 ? `blur(${((1 - inP) * 10).toFixed(2)}px)` : undefined, transform: `translate3d(0, ${((1 - inP) * 50).toFixed(1)}px, 0) scale(${lerp(1, 0.9, q).toFixed(4)})` }}>
        <div className={sc.layer} style={{ transformOrigin: "0 0", transform: `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${cam.z.toFixed(4)})`, filter: camBlur > 0.15 ? `blur(${camBlur.toFixed(2)}px)` : undefined }}>
          <div ref={appRef} className={s.appWrap} style={{ left: APP.x, top: APP.y, width: APP.w, height: APP.h }}>
            <PmsShell active="ia" labels={v.base.ui.shell} width={APP.w} height={APP.h} round>
              <div className={s.split}>
                <div className={s.splitChat}>
                  <ChatShell className={sc.chatPage}>
                    <div className={sc.viewport}>
                      <div ref={threadRef} className={sc.thread}>
                        {turns.map((tn, i) => {
                          if (lt < tn.p.send) return null;
                          const steps = tn.p.steps
                            .map((sp, j) => ({ sp, j }))
                            .filter(({ sp }) => lt >= sp.at)
                            .map(({ sp, j }) => ({ label: tn.steps[j].label, tool: tn.steps[j].tool, running: lt < sp.done }));
                          const answer = lt >= tn.p.answerAt ? tn.answer.slice(0, Math.ceil((lt - tn.p.answerAt) / STREAM_MS)) : "";
                          return (
                            <Fragment key={i}>
                              <div>
                                <UserBubble text={tn.ask} />
                                {tn.file && (
                                  <div className={u.msgAttachRow}>
                                    <AttCard name={tn.file} small />
                                  </div>
                                )}
                              </div>
                              {lt >= tn.p.send + 60 && <AssistantTurn steps={steps} answer={answer} streaming={lt < tn.p.streamEnd} block={lt >= tn.p.blockAt ? tn.block : null} thinking={lt < tn.p.answerAt} thinkingLabel={d.thinking} waitHint={d.wait} foot={i === lastVisible} />}
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <TutorialComposer
                      text={text}
                      placeholder={listenIn > 0.5 && !text ? d.voice.listening : v.x.placeholder}
                      caret={caret}
                      pressed={pressed}
                      attachment={attachment}
                      menu={menu}
                      menuHot={lt >= plan.pdfClick - 260 && lt < plan.pdfClick + 100 ? "pdf" : null}
                      labels={d.attach}
                      listening={listenIn}
                      listenMs={lt - plan.micClick}
                      stopPressed={lt >= plan.stopClick - 60 && lt < plan.stopClick + 160}
                    />
                  </ChatShell>
                </div>
                {panelOpen > 0 && (
                  <ChatShell className={s.panelSlot}>
                    <div style={{ width: PANEL_W * panelOpen, height: "100%", overflow: "hidden", position: "relative" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, height: "100%", transform: `translate3d(${((1 - panelOpen) * 40).toFixed(1)}px, 0, 0)`, opacity: clamp01(panelOpen * 2).toFixed(3) }}>
                        <TourismPanel p={d.tourism.panel} alert={v.base.tourism.alert} property={v.base.ui.shell.property} place={v.x.dossier.placeMeta} lt={lt} at={plan.panelAt + 200} progress={panelScroll} />
                      </div>
                    </div>
                  </ChatShell>
                )}
              </div>
            </PmsShell>
          </div>
        </div>

        {/* El puntero va en PANTALLA, fuera de la cámara: mismo tamaño en cualquier plano. */}
        {ptrOn > 0.01 && (
          <div className={sc.cursor} style={{ transform: `translate3d(${ps.x.toFixed(1)}px, ${ps.y.toFixed(1)}px, 0) scale(1.75)`, opacity: ptrOn.toFixed(3), zIndex: 60 }}>
            {ptr.ripples.map((p, i) => (
              <i key={i} className={sc.ripple} style={{ transform: `scale(${(0.35 + p * 1.4).toFixed(3)})`, opacity: ((1 - p) * 0.6).toFixed(3) }} />
            ))}
            <svg viewBox="0 0 24 24" className={sc.pointer} style={{ transform: `scale(${ptr.pressed ? 0.86 : 1})` }} aria-hidden>
              <path d="M5 3l14 9-6.6 1.3L15 20l-3 1.4-2.6-6.6L5 19z" fill="#14150f" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {/* El rótulo del paso, como en un tutorial: número, total y qué se muestra. */}
      {caps.map(
        ({ c, i, on, inP: a, outP: b }) =>
          on && (
            <div key={i} className={s.stepCap} style={{ opacity: (a * (1 - b)).toFixed(3), transform: `translate3d(0, ${((1 - a) * 14 - b * 8).toFixed(1)}px, 0)`, filter: a < 0.999 || b > 0 ? `blur(${((1 - a) * 8 + b * 8).toFixed(1)}px)` : undefined }}>
              <span className={s.stepNum}>
                {i + 1}
                <small>/{d.captions.length}</small>
              </span>
              <span className={s.stepText}>{c}</span>
            </div>
          ),
      )}
      <Mark tone="ink" />
    </div>
  );
}

/* ==================================================== 6 · dossier ====== */

/**
 * El expediente del destino, en tres movimientos:
 *
 * 1. Los quince temas SALEN DEL CENTRO en espiral: cada chip arranca chico en
 *    el medio, girado y desenfocado, y viaja a su lugar del anillo mientras
 *    endereza el giro y se enfoca.
 * 2. LEVITAN: el anillo entero gira despacio y cada chip flota un poco arriba
 *    y abajo, ya nítido.
 * 3. VUELVEN AL CENTRO en espiral, girando y desenfocándose, y de ahí nace la
 *    tarjeta del estado turístico.
 */
const DO = {
  head: 100, em: 650, count: 900,
  out0: 650, outLag: 60, outDur: 1150,
  gather: 3450, gatherLag: 30, gatherDur: 700,
  // La tarjeta nace cuando los chips ya están llegando al centro, y sus cifras
  // entran con la tarjeta ya formada (si no, se ve un instante blanca y vacía).
  card: 4350, metrics: 4600, alert: 5400,
  out: 7150, end: 7600,
};
const RING = { cx: 640, cy: 430, rx: 470, ry: 190 };
/** Cuánto gira el anillo mientras levita (grados por segundo) y cuánto de espiral hace cada viaje. */
const ORBIT = { spin: 7, spiral: 70 };

/** Los íconos de las cuatro cifras, en el orden de `video.tourism.metrics`. */
const METRIC_ICON: ReactNode[] = [
  <path key="e" d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM12 14l1 2h2l-1.6 1.2.6 2-2-1.3-2 1.3.6-2L9 16h2z" />,
  <path key="c" d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 14h2M14 14h2M8 18h2" />,
  <path key="s" d="M12 4V2M12 22v-2M4.9 4.9 3.5 3.5M20.5 20.5l-1.4-1.4M4 12H2M22 12h-2M4.9 19.1l-1.4 1.4M20.5 3.5l-1.4 1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />,
  <path key="t" d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
];

/**
 * La tarjeta del expediente: la misma información que `TourismStatusCard` del
 * producto (título con el pin, "actualizado hace…", cuatro cifras con su
 * tendencia y su pista, la alerta), armada a la escala de un titular de video:
 * cifras grandes, íconos por tema y un solo borde. La versión anterior
 * apilaba el mapa, la tarjeta del chat con su propio borde y un "Ver más" que
 * acá no lleva a ningún lado.
 */
function DossierCard({ v, lt, at }: { v: IaVideoDict; lt: number; at: number }) {
  const t = v.base.tourism;
  return (
    <div className={s.dcard}>
      <div className={s.dcardHead}>
        <span className={s.dcardPin}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <span className={s.dcardTitle}>{t.title}</span>
        <span className={s.dcardUpdated}>
          <i />
          {t.updated}
        </span>
      </div>
      <div className={s.dcardGrid}>
        {t.metrics.map((m, i) => {
          const a = at + i * 150;
          const p = easeOutExpo(seg(lt, a, a + 600));
          return (
            <div key={m.label} className={s.dcardMetric} style={{ opacity: clamp01(p * 1.6).toFixed(3), transform: `translate3d(0, ${((1 - p) * 14).toFixed(1)}px, 0)` }}>
              <span className={s.dcardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {METRIC_ICON[i]}
                </svg>
              </span>
              <span className={s.dcardValue}>
                <Scramble text={m.value} lt={lt} at={a} dur={520} />
                {m.trend === "up" && (
                  <svg className={s.dcardTrend} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                )}
              </span>
              <span className={s.dcardLabel}>{m.label}</span>
              <span className={s.dcardHint}>{m.hint}</span>
            </div>
          );
        })}
      </div>
      <div className={s.dcardAlert} style={{ opacity: easeOut(seg(lt, at + 800, at + 1200)).toFixed(3), transform: `translate3d(0, ${((1 - easeOut(seg(lt, at + 800, at + 1200))) * 10).toFixed(1)}px, 0)` }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        {t.alert}
      </div>
    </div>
  );
}

export function DossierScene({ lt, v }: IaSceneProps) {
  const topics = v.x.dossier.topics;
  const q = smooth(seg(lt, DO.out, DO.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / DO.end));
  const card = easeOutExpo(seg(lt, DO.card, DO.card + 900));
  // El anillo gira todo el tiempo (también mientras salen y vuelven), así el
  // viaje empalma con la órbita sin frenar.
  const spin = (lt / 1000) * ORBIT.spin;
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 14) }}>
        <div className={s.headTop} style={{ top: 44 }}>
          <h2 className={s.displaySm}>
            <GLine text={v.ia.dossier.title} lt={lt} at={DO.head} emAt={DO.em} tone="paper" />
          </h2>
          <p className={s.subPaper} style={lift(lt, DO.count, 14, 6)}>
            {v.x.dossier.count}
          </p>
        </div>

        {topics.map((tp, i) => {
          const at = DO.out0 + i * DO.outLag;
          if (lt < at) return null;
          const g0 = DO.gather + i * DO.gatherLag;
          const outP = easeOutExpo(seg(lt, at, at + DO.outDur));
          const back = easeInExpo(seg(lt, g0, g0 + DO.gatherDur));
          if (back >= 1) return null;
          // Radio: 0 → 1 al salir, 1 → 0 al volver. El ángulo suma la espiral.
          const r = outP * (1 - back);
          const ang = ((-90 + (i / topics.length) * 360 + spin - (1 - outP) * ORBIT.spiral + back * ORBIT.spiral) * Math.PI) / 180;
          // Levitan: un vaivén chico, con fase propia, sólo cuando ya llegaron.
          const bob = Math.sin(lt / 620 + i * 1.7) * 6 * outP * (1 - back);
          const x = RING.cx + Math.cos(ang) * RING.rx * r;
          const y = RING.cy + Math.sin(ang) * RING.ry * r + bob;
          const rot = (1 - outP) * -38 + back * 32 + Math.sin(lt / 900 + i) * 1.5;
          const blur = (1 - outP) * 12 + back * 12;
          const sc0 = lerp(0.35, 1, outP) * lerp(1, 0.3, back);
          return (
            <div
              key={tp}
              className={s.topic}
              style={{
                left: x,
                top: y,
                opacity: (clamp01(outP * 2) * (1 - back * back)).toFixed(3),
                transform: `translate(-50%, -50%) rotate(${rot.toFixed(2)}deg) scale(${sc0.toFixed(3)})`,
                filter: blur > 0.2 ? `blur(${blur.toFixed(2)}px)` : undefined,
              }}
            >
              <span className={s.topicDot} />
              <span>{tp}</span>
              <span className={s.topicDate}>{v.x.dossier.dates[i % v.x.dossier.dates.length]}</span>
            </div>
          );
        })}

        {card > 0 && (
          <div
            className={s.dossierCard}
            style={{
              opacity: clamp01(card * 1.6).toFixed(3),
              transform: `translate(-50%, -50%) scale(${lerp(0.55, 1, card).toFixed(4)}) rotate(${((1 - card) * -6).toFixed(2)}deg)`,
              filter: card < 0.98 ? `blur(${((1 - card) * 16).toFixed(1)}px)` : undefined,
            }}
          >
            <DossierCard v={v} lt={lt} at={DO.metrics} />
          </div>
        )}
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* ===================================================== 7 · versus ====== */

const VS = { pre: 150, lag: 90, strike: 1250, up: 1950, upEnd: 2500, us: 2250, em: 2700, out: 4350, end: 4800 };

export function VersusScene({ lt, v }: IaSceneProps) {
  const vs = v.x.versus;
  const preWords = vs.pre.split(" ");
  const up = smooth(seg(lt, VS.up, VS.upEnd));
  const q = smooth(seg(lt, VS.out, VS.end));
  const cam = 1 + 0.035 * easeInOut(clamp01(lt / VS.end));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} style={{ opacity: 0.7 }} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={s.versusA} style={{ transform: `translate3d(0, ${(-150 * up).toFixed(1)}px, 0) scale(${lerp(1, 0.72, up).toFixed(4)})`, opacity: lerp(1, 0.42, up) }}>
          <h2 className={s.display}>
            {preWords.map((w, i) => (
              <Fragment key={i}>
                <span className={s.glWord} style={lift(lt, VS.pre + i * VS.lag, 28, 6)}>
                  {w}
                </span>{" "}
              </Fragment>
            ))}
            <span className={s.glWord} style={lift(lt, VS.pre + preWords.length * VS.lag, 28, 6)}>
              <Struck text={vs.struck} lt={lt} at={VS.strike} />
              {vs.post}
            </span>
          </h2>
        </div>
        <div className={s.headTop} style={{ top: 330 }}>
          <h2 className={s.displayLg}>
            <GLine text={vs.us} lt={lt} at={VS.us} emAt={VS.em} lag={90} />
          </h2>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= 8 · goal ====== */

/**
 * "Quiero más reservas": el pedido se escribe en el compositor, el sistema lee
 * las 18 fuentes de la operación en ~1 s (los chips se prenden en cascada) y
 * aparece el plan con tres pasos; cada paso pide su confirmación, y el cursor
 * confirma el primero.
 */
const GO = { head: 100, em: 800, type: 700, read: 0, readLag: 55, plan: 0, click: 0, out: 8150, end: 8600 };

export function GoalScene({ lt, v }: IaSceneProps) {
  const g = v.x.goal;
  const rootRef = useRef<HTMLDivElement>(null);
  const offsets = useMemo(() => typingOffsets(g.ask), [g.ask]);
  const typeEnd = GO.type + offsets[offsets.length - 1];
  const send = typeEnd + 220;
  const read = send + 250;
  const readEnd = read + g.sources.length * GO.readLag + 300;
  const plan = readEnd + 500;
  const click = plan + 2100;
  const typed = lt < send ? g.ask.slice(0, typedCount(offsets, lt - GO.type)) : "";
  const rects = useOffsets(rootRef, ["[data-confirm]"], [lt >= plan]);
  const btn = rects["[data-confirm]"];

  const gridOut = easeIn(seg(lt, plan - 300, plan + 150));
  const planIn = easeOutExpo(seg(lt, plan, plan + 700));
  const done = lt >= click + 120;
  const count = Math.round(g.sources.length * clamp01((lt - read) / (g.sources.length * GO.readLag)));
  const q = smooth(seg(lt, GO.out, GO.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / GO.end));

  const bx = btn ? btn.x + btn.w / 2 : 900;
  const by = btn ? btn.y + btn.h / 2 : 330;
  const keys: CursorKey[] = [
    { at: click - 900, x: bx + 160, y: by + 260 },
    { at: click - 320, x: bx + 14, y: by + 40 },
    { at: click - 100, x: bx, y: by },
    { at: click, x: bx, y: by, click: true, down: true },
    { at: click + 200, x: bx, y: by, up: true },
  ];

  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt + 4000} light />
      <div ref={rootRef} className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={s.headTop} style={{ top: 56 }}>
          <h2 className={s.displaySm}>
            <GLine text={v.ia.strategic.title} lt={lt} at={GO.head} emAt={GO.em} />
          </h2>
        </div>

        {lt >= read - 100 && gridOut < 1 && (
          <div className={s.readBlock} style={away(gridOut, 0.9, 10)}>
            <div className={s.readHead} style={lift(lt, read - 100, 12)}>
              <span className={s.readCount}>{count}</span>
              <span>{g.reads}</span>
              <span className={s.readTime}>{lt >= readEnd - 200 ? g.time : "…"}</span>
            </div>
            <div className={s.readGrid}>
              {g.sources.map((src, i) => {
                const at = read + i * GO.readLag;
                const p = easeOutExpo(seg(lt, at, at + 380));
                const ok = lt >= at + 260;
                return (
                  <span key={src} className={[s.readChip, ok ? s.readChipOk : ""].join(" ")} style={{ opacity: 0.25 + 0.75 * p, transform: `translate3d(0, ${((1 - p) * 10).toFixed(1)}px, 0)` }}>
                    <span className={s.readTick}>{ok ? <Check /> : null}</span>
                    {src}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {lt >= plan && (
          <ChatShell className={s.planShell}>
            <div className={s.planCard} style={{ opacity: clamp01(planIn * 1.5), transform: `translate3d(0, ${((1 - planIn) * 34).toFixed(1)}px, 0)`, filter: planIn < 0.999 ? `blur(${((1 - planIn) * 8).toFixed(1)}px)` : undefined }}>
              <div className={s.planHead}>
                <span className={s.planTitle}>{g.plan.title}</span>
                <span className={s.planMeta}>{g.plan.meta}</span>
              </div>
              <p className={s.planDiag}>{g.plan.diagnosis}</p>
              {g.plan.steps.map((st, i) => {
                const at = plan + 300 + i * 160;
                const first = i === 0;
                return (
                  <div key={i} className={s.planStep} style={lift(lt, at, 14)}>
                    <span className={s.planNum}>{i + 1}</span>
                    <span className={s.planText}>{st}</span>
                    {first && done ? (
                      <span className={s.planDone}>
                        <Check />
                        {g.plan.done}
                      </span>
                    ) : (
                      <span className={s.planBtn} data-confirm={first ? "" : undefined} style={first && lt >= click - 60 && lt < click + 160 ? { transform: "scale(0.92)" } : undefined}>
                        {g.plan.confirm}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </ChatShell>
        )}

        <GlassPill text={typed} placeholder={v.x.placeholder} caret={lt < send} pressed={lt >= send - 90 && lt < send + 180} style={{ top: 575, ...lift(lt, 250, 20) }} />
        {btn && <Cursor lt={lt} keys={keys} hideAt={click + 700} scale={1.4} />}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ====================================================== 9 · perms ====== */

/**
 * Los permisos: el mismo asistente ve 115 herramientas en recepción y 358 en
 * administración; y lo que no se puede deshacer pide que se escriba a mano lo
 * que se va a borrar antes de habilitar el botón.
 */
const PE = { head: 100, em: 500, sw: 700, n1: 900, flip: 2600, n2: 2750, modal: 4100, type: 4850, click: 0, out: 7550, end: 8000 };

export function PermsScene({ lt, v }: IaSceneProps) {
  const p = v.x.perms;
  const rootRef = useRef<HTMLDivElement>(null);
  const word = p.modal.word;
  const offsets = useMemo(() => typingOffsets(word), [word]);
  const typeEnd = PE.type + offsets[offsets.length - 1];
  const click = typeEnd + 900;
  const typed = word.slice(0, typedCount(offsets, lt - PE.type));
  const ready = typed.length === word.length;
  const rects = useOffsets(rootRef, ["[data-danger]"], [lt >= PE.modal]);
  const btn = rects["[data-danger]"];

  const flip = smooth(seg(lt, PE.flip, PE.flip + 420));
  const swOut = easeIn(seg(lt, PE.modal - 250, PE.modal + 200));
  const modal = easeOutExpo(seg(lt, PE.modal, PE.modal + 650));
  const gone = easeIn(seg(lt, click + 350, click + 700));
  const q = smooth(seg(lt, PE.out, PE.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / PE.end));

  const bx = btn ? btn.x + btn.w / 2 : 760;
  const by = btn ? btn.y + btn.h / 2 : 470;
  const keys: CursorKey[] = [
    { at: click - 800, x: bx + 200, y: by + 180 },
    { at: click - 300, x: bx + 12, y: by + 30 },
    { at: click - 90, x: bx, y: by },
    { at: click, x: bx, y: by, click: true, down: true },
    { at: click + 180, x: bx, y: by, up: true },
  ];

  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 9000} deep />
      <div ref={rootRef} className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={s.headTop} style={{ top: 60 }}>
          <h2 className={s.displaySm}>
            <GLine text={v.ia.perms.title} lt={lt} at={PE.head} emAt={PE.em} tone="paper" />
          </h2>
        </div>

        {swOut < 1 && (
          <div className={s.permsBlock} style={{ ...lift(lt, PE.sw, 24, 8), ...(swOut > 0 ? away(swOut, 0.88, 10) : {}) }}>
            <div className={s.switch}>
              <span className={s.switchThumb} style={{ transform: `translateX(${(flip * 100).toFixed(2)}%)` }} />
              {p.spaces.map((sp, i) => (
                <span key={sp} className={s.switchSeg} style={{ color: (i === 0 ? 1 - flip : flip) > 0.5 ? "#14150f" : "rgba(242, 239, 232, 0.72)" }}>
                  {sp}
                </span>
              ))}
            </div>
            <div className={s.bigNum}>
              <Blurred y={lt > PE.flip - 60 && lt < PE.n2 + 300 ? 6 * (1 - seg(lt, PE.n2, PE.n2 + 300)) : 0}>{lt < PE.flip + 100 ? <Scramble text="115" lt={lt} at={PE.n1} dur={600} /> : <Scramble text="358" lt={lt} at={PE.n2} dur={650} />}</Blurred>
            </div>
            <div className={s.bigNumLabel}>{p.tools}</div>
          </div>
        )}

        {modal > 0 && gone < 1 && (
          <ChatShell className={s.modalShell}>
            <div className={s.modal} style={{ opacity: clamp01(modal * 1.5) * (1 - gone), transform: `translate3d(0, ${((1 - modal) * 30).toFixed(1)}px, 0) scale(${(lerp(0.94, 1, modal) * lerp(1, 0.96, gone)).toFixed(4)})` }}>
              <div className={s.modalIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
                </svg>
              </div>
              <div className={s.modalTitle}>{p.modal.title}</div>
              <div className={s.modalBody}>{p.modal.body}</div>
              <label className={s.modalLabel}>{p.modal.prompt}</label>
              <div className={[s.modalInput, lt >= PE.type - 200 && !ready ? s.modalInputFocus : ""].join(" ")}>
                {typed ? typed : <span className={s.modalPh}>{word}</span>}
                {lt >= PE.type - 200 && lt < click && <span className={s.modalCaret} />}
              </div>
              <div className={s.modalActions}>
                <span className={s.modalGhost}>{p.modal.cancel}</span>
                <span className={[s.modalDanger, ready ? s.modalDangerOn : ""].join(" ")} data-danger style={lt >= click - 60 && lt < click + 160 ? { transform: "scale(0.94)" } : undefined}>
                  {p.modal.confirm}
                </span>
              </div>
            </div>
          </ChatShell>
        )}
        {btn && lt >= PE.modal && <Cursor lt={lt} keys={keys} hideAt={click + 500} scale={1.4} />}
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* ======================================================= 10 · talk ===== */

/**
 * Cómo se le habla, en tres golpes sobre el mismo compositor real: se le
 * escribe, se le dicta (la onda y la transcripción entrando) y se le muestra
 * (un PDF y una captura caen adentro como adjuntos).
 */
const TK = { a: 0, aOut: 1900, b: 2050, bOut: 4050, c: 4200, typeA: 450, wave: 2350, heard: 2650, drop: 4500, dropLag: 220, typeC: 5250, out: 6150, end: 6600 };

export function TalkScene({ lt, v }: IaSceneProps) {
  const t = v.x.talk;
  const offA = useMemo(() => typingOffsets(t.typed), [t.typed]);
  const offC = useMemo(() => typingOffsets(t.withFile), [t.withFile]);
  const heardWords = t.heard.split(" ");
  const phase = lt < TK.b ? 0 : lt < TK.c ? 1 : 2;
  let text = "";
  if (phase === 0) text = t.typed.slice(0, typedCount(offA, lt - TK.typeA));
  if (phase === 1) text = heardWords.slice(0, Math.max(0, Math.floor((lt - TK.heard) / 150) + 1) * (lt >= TK.heard ? 1 : 0)).join(" ");
  if (phase === 2) text = t.withFile.slice(0, typedCount(offC, lt - TK.typeC));
  const listening = phase === 1;
  const q = smooth(seg(lt, TK.out, TK.end));
  const cam = 1 + 0.035 * easeInOut(clamp01(lt / TK.end));
  const lines = [
    { at: TK.a, out: TK.aOut },
    { at: TK.b, out: TK.bOut },
    { at: TK.c, out: undefined as number | undefined },
  ];
  const drops = [
    { key: "pdf", at: TK.drop },
    { key: "shot", at: TK.drop + TK.dropLag },
  ];
  return (
    <div className={`${sc.scene} ${sc.paper}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        {lines.map((ln, i) => {
          if (lt < ln.at || (ln.out !== undefined && lt > ln.out + 400)) return null;
          return (
            <div key={i} className={s.headTop} style={{ top: 190 }}>
              <h2 className={s.displayXl}>
                <GLine text={i === 2 ? `*${t.lines[i]}*` : t.lines[i]} lt={lt} at={ln.at} out={ln.out} lag={110} blur={10} />
              </h2>
            </div>
          );
        })}

        {/* La onda del dictado: barras que laten con el reloj. */}
        {listening && (
          <div className={s.wave} style={lift(lt, TK.wave, 14)}>
            <span className={s.waveDot} />
            <span className={s.waveBars}>
              {Array.from({ length: 22 }, (_, i) => {
                const h = 0.25 + 0.75 * Math.abs(Math.sin(lt / 120 + i * 0.9) * Math.sin(lt / 310 + i * 0.37)) * (0.5 + noise(i, 3));
                return <i key={i} style={{ transform: `scaleY(${clamp01(h).toFixed(3)})` }} />;
              })}
            </span>
            <span className={s.waveLabel}>{t.listening}</span>
          </div>
        )}

        {/* Los adjuntos caen adentro del compositor. */}
        {phase === 2 && (
          <div className={s.attachRow}>
            {drops.map((dp) => {
              const p = seg(lt, dp.at, dp.at + 520);
              const y = lerp(-220, 0, easeOutExpo(p));
              const rot = lerp(dp.key === "pdf" ? -9 : 7, 0, easeOutExpo(p));
              return (
                <Blurred key={dp.key} y={(1 - easeOut(p)) * 12} className={s.attach} style={{ opacity: clamp01(p * 3), transform: `translate3d(0, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg)` }}>
                  {dp.key === "pdf" ? (
                    <>
                      <span className={s.attachPdf}>PDF</span>
                      <span className={s.attachText}>
                        <span className={s.attachName}>{t.file}</span>
                        <span className={s.attachMeta}>{t.fileMeta}</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={s.attachThumb}>
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className={s.attachText}>
                        <span className={s.attachName}>{t.shot}</span>
                      </span>
                    </>
                  )}
                </Blurred>
              );
            })}
          </div>
        )}

        <div className={s.talkComposer} style={lift(lt, 200, 20)}>
          <ChatShell className={s.talkShell}>
            <div className={listening ? s.micOn : undefined}>
              <Composer text={text} placeholder={v.x.placeholder} caret={!listening} pressed={false} sendLabel={v.x.placeholder} />
            </div>
          </ChatShell>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ====================================================== 11 · stats ===== */

const ST = { name: 100, first: 350, lag: 260, out: 3950, end: 4400 };

export function StatsScene({ lt, v }: IaSceneProps) {
  const q = smooth(seg(lt, ST.out, ST.end));
  const cam = 1 + 0.04 * easeInOut(clamp01(lt / ST.end));
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 20000} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={s.statsName} style={lift(lt, ST.name, 16, 8)}>
          <Orb size={40} />
          <span>{v.x.name}</span>
        </div>
        <div className={s.statsRow}>
          {v.ia.stats.map((st, i) => {
            const at = ST.first + i * ST.lag;
            return (
              <div key={st.label} className={s.stat} style={lift(lt, at, 30, 10)}>
                <span className={s.statValue}>
                  <Scramble text={st.value} lt={lt} at={at} dur={700} />
                </span>
                <span className={s.statLabel}>{st.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* ======================================================== 12 · end ===== */

const EN = { line: 150, em: 900, out: 2700, logo: 3050, tag: 3350, end: 5600 };

export function EndScene({ lt, v }: IaSceneProps) {
  const orbIn = easeOutQuint(seg(lt, EN.logo, EN.logo + 620));
  const drift = 1 + 0.035 * easeInOut(seg(lt, EN.logo, EN.end));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light style={{ opacity: 0.8 }} />
      {lt < EN.out + 500 && (
        <div className={s.headTop} style={{ top: 250 }}>
          <h2 className={s.displayLg}>
            <GLine text={v.ia.cta.title} lt={lt} at={EN.line} emAt={EN.em} out={EN.out} lag={90} />
          </h2>
        </div>
      )}
      {lt >= EN.logo && (
        <div className={sc.typeBlock} style={{ transform: `scale(${drift.toFixed(4)})` }}>
          <div className={s.endStack}>
            <div className={s.meetRow}>
              <div style={{ opacity: orbIn, transform: `scale(${lerp(1.5, 1, orbIn).toFixed(4)})`, filter: orbIn < 0.999 ? `blur(${((1 - orbIn) * 16).toFixed(1)}px)` : undefined }}>
                <Orb size={112} rot={lerp(-120, 0, orbIn)} />
              </div>
              <h2 className={s.meetName} style={{ fontSize: 84 }}>
                <GLine text={v.x.name} lt={lt} at={EN.logo + 180} lag={110} blur={12} />
              </h2>
            </div>
            <p className={s.endTag}>
              <GLine text={v.ia.hero.title} lt={lt} at={EN.tag} lag={60} tone="ink" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================ intro: escenas 17 y 18 === */

// La bisagra y el chat del video de portada, sin cambios: reciben su propio
// diccionario (`base`), el mismo que usan en `/video`.
export function HingeIntro({ lt, v, locale, paused }: IaSceneProps) {
  return <BaseHingeScene lt={lt} v={v.base} locale={locale} paused={paused} />;
}

/**
 * En `/video` al chat le sigue otra escena lavanda y el corte no se nota; acá
 * le sigue el orbe sobre papel, así que se va para atrás como las demás
 * escenas de este video en sus últimos 450 ms.
 */
export function ChatIntro({ lt, v, locale, paused }: IaSceneProps) {
  const dur = useMemo(() => planChat(v.base.chat).duration, [v.base.chat]);
  const q = smooth(seg(lt, dur - 450, dur));
  return (
    // Debajo, el blanco de la escena siguiente: sin él, al apagarse asomaría el
    // fondo oscuro del escenario.
    <div className={sc.scene} style={{ background: "#ffffff" }}>
      <div className={sc.layer} style={away(q, 0.88, 14)}>
        <BaseChatScene lt={lt} v={v.base} locale={locale} paused={paused} />
      </div>
    </div>
  );
}

/* ================================================================ mapa === */

export const IA_SCENES: Record<IaBeatId, (p: IaSceneProps) => ReactNode> = {
  hinge: HingeIntro,
  chat: ChatIntro,
  tabs: TabsScene,
  hero: HeroScene,
  meet: MeetScene,
  asks: AsksScene,
  demo: DemoScene,
  dossier: DossierScene,
  versus: VersusScene,
  goal: GoalScene,
  perms: PermsScene,
  talk: TalkScene,
  stats: StatsScene,
  end: EndScene,
};


/* ============================================== anclajes de la voz ====== */

/**
 * Cuándo aparece, dentro de cada escena (sin estirar), el texto o el paso que dice cada bloque de
 * `locuciones/ia/`, en su orden. La mesa de montaje pone ahí el subtítulo y la voz (ver KitEmbed).
 * Si se retimea una escena, se retoca acá.
 */
export function iaVoiceAnchors(v: IaVideoDict): Record<string, number[]> {
  const cap = planTutorial(v.x.demo).cap;
  return {
    hinge: [180], // "¿Por qué no solo pedirlo?" entra a los 180 ms (HI.line del video de portada)
    chat: [400],
    meet: [ME.name],
    asks: [AS.head],
    demo: [...cap], // los cuatro pasos del tutorial
    dossier: [DO.head, DO.count],
    versus: [VS.pre, VS.us],
    goal: [GO.head, 1700], // el titular, y la lectura de fuentes cuando el titular ya se escribió
    perms: [PE.head, PE.modal], // el titular, y la confirmación de lo irreversible cuando abre el diálogo
    talk: [TK.a + 100],
    stats: [ST.first],
    end: [EN.line, EN.tag],
  };
}
