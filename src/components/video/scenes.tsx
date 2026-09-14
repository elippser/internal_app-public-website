"use client";

import {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import Logo from "@/components/site/Logo";
import {
  Frame,
  RateDecision,
  SignalAgent,
  SignalRate,
  TapeChart,
  type TapeRowSpec,
} from "@/components/site/Vignettes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import IsotypeLoader from "./pms/IsotypeLoader";
import OrbLoader from "./pms/OrbLoader";
import StayCard from "./pms/StayCard";
import {
  AssistantTurn,
  ChatShell,
  Composer,
  ReservationList,
  RevenueCard,
  UnitsPlan,
  UserBubble,
  type BookingRowData,
} from "./pms/ChatUi";
import type { Unit, UnitLabels } from "./pms/UnitCard";
import {
  STREAM_MS,
  clamp01,
  easeBack,
  easeIn,
  easeInOut,
  easeOut,
  easeOutQuint,
  lerp,
  noise,
  planChat,
  seg,
  typedCount,
  type BeatId,
  type VideoDict,
} from "./timeline";
import s from "./scenes.module.css";

/**
 * Las escenas del video, una por beat del guion (`video-spec.md`).
 *
 * Todas reciben `lt`, su tiempo local en ms, y lo convierten en estilo. Lo que
 * se ve son las pantallas recicladas (viñetas del sitio y piezas del PMS en
 * `./pms`) operadas por un cursor simulado, con tipografía cinética alrededor.
 */

type VignetteDict = Dictionary["vignettes"];

export type SceneProps = {
  lt: number;
  v: VideoDict;
  vg: VignetteDict;
  locale: Locale;
  paused: boolean;
};

const STAGE_W = 1280;

/* ============================================================== piezas ==== */

/** Entrada delicada: sube unos px, se enfoca, aparece y endereza su inclinación. */
function rise(p: number, dist = 18, blur = 8, tilt = 0): CSSProperties {
  return {
    opacity: p,
    transform: `translate3d(0, ${((1 - p) * dist).toFixed(2)}px, 0)${tilt ? ` rotateX(${((1 - p) * tilt).toFixed(2)}deg)` : ""}`,
    filter: p < 0.999 ? `blur(${((1 - p) * blur).toFixed(2)}px)` : undefined,
  };
}

/**
 * Las viñetas del sitio se "dibujan" cuando tienen `data-fx-in` (lo pone el
 * FxObserver al entrar en viewport). Acá no hay scroll: el atributo se pone
 * antes del primer pintado, así las barras crecen justo cuando la escena entra.
 */
function FxIn({
  children,
  className,
  style,
  innerRef,
  attrs,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  innerRef?: RefObject<HTMLDivElement | null>;
  attrs?: Record<string, string>;
}) {
  const own = useRef<HTMLDivElement>(null);
  const ref = innerRef ?? own;
  useLayoutEffect(() => {
    ref.current
      ?.querySelectorAll("[data-fx]:not([data-fx-in])")
      .forEach((el) => el.setAttribute("data-fx-in", ""));
  });
  return (
    <div ref={ref} className={className} style={style} {...attrs}>
      {children}
    </div>
  );
}

type Rect = { x: number; y: number; w: number; h: number };

/**
 * Mide dónde cayeron piezas de la UI reciclada, en píxeles del escenario y
 * relativas a `root`. Con eso el cursor sabe a qué celda ir y la selección de
 * arrastre se dibuja exactamente sobre las celdas reales. La escala se saca
 * del propio root (rect / offset), así descuenta todo transform de arriba.
 */
function useRects(root: RefObject<HTMLElement | null>, selectors: string[]): Record<string, Rect> {
  const [rects, setRects] = useState<Record<string, Rect>>({});
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const base = el.getBoundingClientRect();
    const scale = el.offsetWidth ? base.width / el.offsetWidth : 1;
    const out: Record<string, Rect> = {};
    for (const sel of selectors) {
      const node = el.querySelector(sel);
      if (!node) continue;
      const r = node.getBoundingClientRect();
      out[sel] = {
        x: (r.left - base.left) / scale,
        y: (r.top - base.top) / scale,
        w: r.width / scale,
        h: r.height / scale,
      };
    }
    setRects(out);
    // Una vez por montaje: las escenas se remontan en cada salto.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return rects;
}

type Token = { text: string; em: boolean; space: boolean };

/** Parte un titular en palabras, respetando la itálica `*así*` del sitio. */
function tokenize(text: string): Token[] {
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
 * Un titular cinético: cada palabra entra desde abajo, inclinada y desenfocada,
 * 60-70 ms después de la anterior; la palabra en itálica dibuja su subrayado
 * al llegar. Con `exit`, las palabras se van hacia arriba en el mismo orden.
 */
function Words({
  text,
  lt,
  at,
  stagger = 70,
  dur = 650,
  dist = 26,
  blur = 10,
  tilt = 34,
  exit,
}: {
  text: string;
  lt: number;
  at: number;
  stagger?: number;
  dur?: number;
  dist?: number;
  blur?: number;
  tilt?: number;
  exit?: number;
}) {
  let i = 0;
  return (
    <>
      {tokenize(text).map((tk, k) => {
        if (tk.space) return <span key={k}> </span>;
        const start = at + i * stagger;
        const idx = i;
        i += 1;
        let style: CSSProperties;
        if (exit !== undefined && lt >= exit) {
          const q = easeIn(seg(lt, exit + idx * 22, exit + idx * 22 + 360));
          style = {
            opacity: 1 - q,
            transform: `translate3d(0, ${(-30 * q).toFixed(2)}px, 0)`,
            filter: q > 0 ? `blur(${(8 * q).toFixed(2)}px)` : undefined,
          };
        } else {
          style = rise(easeOutQuint(seg(lt, start, start + dur)), dist, blur, tilt);
        }
        if (tk.em) {
          const u = easeInOut(seg(lt, start + dur * 0.7, start + dur * 0.7 + 520));
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

/** Dos manchas lentas, pistacho y ámbar: la aurora de las bandas de tinta. */
function Aurora({ lt }: { lt: number }) {
  const a = lt / 1000;
  return (
    <div className={s.aurora} aria-hidden>
      <i
        className={s.blobA}
        style={{ transform: `translate3d(${Math.sin(a * 0.9) * 60}px, ${Math.cos(a * 0.7) * 40}px, 0)` }}
      />
      <i
        className={s.blobB}
        style={{ transform: `translate3d(${Math.cos(a * 0.8) * 70}px, ${Math.sin(a * 0.6) * 50}px, 0)` }}
      />
    </div>
  );
}

/** El cursor: un puntero que viaja entre puntos con freno, hace click y arrastra. */
type CursorKey = { at: number; x: number; y: number; click?: boolean; down?: boolean; up?: boolean };

function Cursor({ lt, keys, hideAt }: { lt: number; keys: CursorKey[]; hideAt?: number }) {
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
    if (k.click && lt - k.at < 560) ripples.push(seg(lt, k.at, k.at + 560));
  }
  const gone = hideAt !== undefined ? easeIn(seg(lt, hideAt, hideAt + 300)) : 0;
  const opacity = appear * (1 - gone);
  if (opacity <= 0) return null;
  return (
    <div className={s.cursor} style={{ transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`, opacity }}>
      {ripples.map((p, i) => (
        <i
          key={i}
          className={s.ripple}
          style={{ transform: `scale(${(0.35 + p * 1.25).toFixed(3)})`, opacity: (1 - p) * 0.55 }}
        />
      ))}
      <svg viewBox="0 0 24 24" className={s.pointer} style={{ transform: `scale(${pressed ? 0.86 : 1})` }} aria-hidden>
        <path
          d="M5 3l14 9-6.6 1.3L15 20l-3 1.4-2.6-6.6L5 19z"
          fill="#14150f"
          stroke="#f2efe8"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Una etiqueta con línea guía: el punto en lo señalado, la línea se dibuja, la píldora cae. */
function Callout({
  lt,
  at,
  until,
  x,
  y,
  dx,
  dy,
  text,
}: {
  lt: number;
  at: number;
  /** Cuándo se va (se desvanece en 400 ms). */
  until?: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  text: string;
}) {
  if (lt < at) return null;
  const gone = until !== undefined ? easeIn(seg(lt, until, until + 400)) : 0;
  if (gone >= 1) return null;
  const dot = easeBack(seg(lt, at, at + 220));
  const line = easeOut(seg(lt, at + 90, at + 420));
  const pill = easeBack(seg(lt, at + 330, at + 720));
  const len = Math.hypot(dx, dy);
  const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
  const anchorX = dx > 4 ? "0%" : dx < -4 ? "-100%" : "-50%";
  const anchorY = Math.abs(dx) > 4 ? "-50%" : dy < 0 ? "-100%" : "0%";
  return (
    <div className={s.callout} style={{ transform: `translate3d(${x}px, ${y}px, 0)`, opacity: 1 - gone }}>
      <i className={s.calloutDot} style={{ transform: `translate(-50%, -50%) scale(${dot.toFixed(3)})` }} />
      <i
        className={s.calloutLine}
        style={{ width: len, transform: `rotate(${ang.toFixed(2)}deg) scaleX(${line.toFixed(3)})` }}
      />
      <span
        className={s.calloutPill}
        style={{
          left: dx,
          top: dy,
          opacity: clamp01(pill * 1.4),
          transform: `translate(${anchorX}, ${anchorY}) scale(${(0.8 + 0.2 * pill).toFixed(3)})`,
        }}
      >
        {text}
      </span>
    </div>
  );
}

/**
 * Una cifra que "cuenta": los dígitos giran al azar y se asientan de izquierda
 * a derecha. Vale para cualquier formato ($ 96.600, 78 %, 4,1 M) porque sólo
 * toca los dígitos.
 */
function Scramble({ text, lt, at, dur = 900 }: { text: string; lt: number; at: number; dur?: number }) {
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

/* --------------------------------------------------- las cinco ventanas --- */

type WinKind = "chat" | "sheet" | "notes" | "mail" | "agenda";
const WINS: { kind: WinKind; x: number; y: number; w: number; h: number; rot: number }[] = [
  { kind: "chat", x: 96, y: 112, w: 232, h: 156, rot: -5 },
  { kind: "sheet", x: 936, y: 78, w: 262, h: 166, rot: 4 },
  { kind: "notes", x: 128, y: 470, w: 206, h: 142, rot: 6 },
  { kind: "mail", x: 972, y: 440, w: 244, h: 150, rot: -3 },
  { kind: "agenda", x: 540, y: 578, w: 220, h: 118, rot: 2 },
];

function winDir(w: (typeof WINS)[number]): { x: number; y: number } {
  const cx = w.x + w.w / 2 - STAGE_W / 2;
  const cy = w.y + w.h / 2 - 360;
  const len = Math.hypot(cx, cy) || 1;
  return { x: cx / len, y: cy / len };
}

function WinBody({ kind }: { kind: WinKind }) {
  switch (kind) {
    case "chat":
      return (
        <div className={s.winChat}>
          <i style={{ width: "58%" }} />
          <i style={{ width: "44%" }} data-me="" />
          <i style={{ width: "70%" }} />
          <i style={{ width: "36%" }} data-me="" />
        </div>
      );
    case "sheet":
      return (
        <div className={s.winSheet}>
          {Array.from({ length: 20 }, (_, i) => (
            <i key={i} data-on={i % 5 === 0 || i % 7 === 3 ? "" : undefined} />
          ))}
        </div>
      );
    case "notes":
      return (
        <div className={s.winNotes}>
          <i style={{ width: "72%" }} />
          <i style={{ width: "88%" }} />
          <i style={{ width: "54%" }} />
        </div>
      );
    case "mail":
      return (
        <div className={s.winMail}>
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <b />
              <i style={{ width: `${62 - i * 9}%` }} />
            </div>
          ))}
        </div>
      );
    case "agenda":
      return (
        <div className={s.winAgenda}>
          {Array.from({ length: 7 }, (_, i) => (
            <i key={i} style={{ height: `${28 + noise(i, 3) * 52}%` }} />
          ))}
        </div>
      );
  }
}

/**
 * Las cinco herramientas sueltas del hotel: chat, planilla, notas, mail y
 * agenda. Flotan a la deriva alrededor del texto (`hook`), se dispersan hacia
 * afuera cuando el tachado las descarta (`scatterAt`), y en la escena de marca
 * vuelven desde fuera de cuadro para colapsar en el logo (`converge`).
 */
function MiniWindows({
  lt,
  v,
  mode,
  enterAt = 0,
  scatterAt,
}: {
  lt: number;
  v: VideoDict;
  mode: "hook" | "converge";
  enterAt?: number;
  scatterAt?: number;
}) {
  const labels: Record<WinKind, string> = v.chaos;
  const a = lt / 1000;
  return (
    <div className={s.wins} aria-hidden>
      {WINS.map((w, i) => {
        const dir = winDir(w);
        const drift = { x: Math.sin(a * (0.5 + i * 0.07) + i) * 9, y: Math.cos(a * (0.42 + i * 0.05) + i * 2) * 7 };
        let x = w.x + drift.x;
        let y = w.y + drift.y;
        let rot = w.rot + Math.sin(a * 0.35 + i) * 1.2;
        let scale = 1;
        let opacity = 0.92;
        let blur = 0;
        if (mode === "hook") {
          const p = easeBack(seg(lt, enterAt + i * 140, enterAt + i * 140 + 620));
          scale = 0.84 + 0.16 * p;
          opacity = Math.min(0.92, p * 1.2);
          y += (1 - p) * 26;
          if (scatterAt !== undefined && lt >= scatterAt) {
            const q = easeIn(seg(lt, scatterAt + i * 40, scatterAt + i * 40 + 900));
            x += dir.x * 760 * q;
            y += dir.y * 620 * q;
            rot += (i % 2 ? 1 : -1) * 26 * q;
            blur = 12 * q;
            opacity *= 1 - q * 0.9;
          }
        } else {
          // Vienen de donde quedaron dispersas y se hunden en el centro,
          // achicándose recién al final: se las ve llegar y desaparecer en el logo.
          const p = easeInOut(seg(lt, i * 40, 1000 + i * 40));
          const sx = w.x + dir.x * 700;
          const sy = w.y + dir.y * 560;
          x = lerp(sx, STAGE_W / 2 - w.w / 2, p);
          y = lerp(sy, 300 - w.h / 2, p);
          rot = lerp(w.rot * 2.5, 0, p);
          scale = lerp(0.9, 0.1, easeIn(p));
          opacity = 0.8 * (1 - easeIn(p));
          blur = 5 * easeIn(p);
        }
        return (
          <div
            key={w.kind}
            className={s.win}
            style={{
              width: w.w,
              height: w.h,
              opacity,
              transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
              filter: blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : undefined,
            }}
          >
            <div className={s.winBar}>
              <span className={s.winDots}>
                <i />
                <i />
                <i />
              </span>
              <span className={s.winLabel}>{labels[w.kind]}</span>
            </div>
            <WinBody kind={w.kind} />
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------------------------------------- datos UI ---- */

function unitLabels(v: VideoDict): UnitLabels {
  const sh = v.rooms.short;
  return {
    available: sh.available,
    occupied: sh.occupied,
    cleaning: sh.cleaning,
    maintenance: sh.maintenance,
    blocked: sh.blocked,
    "checkout-pending": sh.checkoutPending,
  };
}

function floorUnits(v: VideoDict, status103: Unit["status"]): Unit[] {
  const cap = { adults: 2, children: 0 };
  return [
    { code: "101", floor: "1", size: 18, capacity: cap, status: "occupied", category: v.rooms.double },
    { code: "102", floor: "1", size: 18, capacity: cap, status: "cleaning", category: v.rooms.double },
    { code: "103", floor: "1", size: 24, capacity: cap, status: status103, category: v.rooms.superior },
    { code: "104", floor: "1", size: 24, capacity: cap, status: "available", category: v.rooms.superior },
  ];
}

/** El calendario del hub Reservas con las filas del video. `newBar` es la reserva que entra. */
function tapeRows(vg: VignetteDict, v: VideoDict, newBar: { start: number; span: number } | null): TapeRowSpec[] {
  const t = vg.tape;
  return [
    {
      unit: t.units.r101,
      segs: [
        { start: 1, span: 4, kind: "confirmed", label: t.bars.ruiz },
        { start: 7, span: 4, kind: "pending", label: t.bars.perez },
      ],
    },
    { unit: t.units.r102, segs: [{ start: 2, span: 6, kind: "confirmed", label: t.bars.sosa }] },
    {
      unit: t.units.r103,
      segs: newBar ? [{ ...newBar, kind: "live", label: v.booking.guest, delay: 0 }] : [],
    },
    {
      unit: t.units.suite,
      segs: [
        { start: 4, span: 5, kind: "confirmed", label: t.bars.bianchi },
        { start: 11, span: 4, kind: "pending", label: t.bars.engine },
      ],
    },
  ];
}

const bookingRow = (v: VideoDict, status: BookingRowData["status"], label: string): BookingRowData => ({
  guest: v.booking.guest,
  detail: v.booking.detail,
  amount: v.booking.amount,
  status,
  statusLabel: label,
});

/* ============================================================= escenas ==== */

/* 1 · Hook + punchline ------------------------------------------------------ */

const HOOK = { lines: 260, exit: 4150, punch: 4550, strike: 5500, fall: 6100, scatter: 6000 };

function HookScene({ lt, v }: SceneProps) {
  const pre = tokenize(v.punchline.pre).filter((t) => !t.space).length;
  const struckWords = tokenize(v.punchline.struck).filter((t) => !t.space).length;
  const strike = easeInOut(seg(lt, HOOK.strike, HOOK.strike + 380));
  const fall = easeIn(seg(lt, HOOK.fall, HOOK.fall + 720));
  const zoom = 1 + seg(lt, 0, 7500) * 0.05;
  return (
    <div className={`${s.scene} ${s.ink}`}>
      <Aurora lt={lt} />
      <MiniWindows lt={lt} v={v} mode="hook" enterAt={350} scatterAt={HOOK.scatter} />
      <div className={s.typeBlock} style={{ transform: `scale(${zoom.toFixed(4)})` }}>
        {lt < HOOK.punch && (
          <h2 className={s.display}>
            <Words text={v.hook[0]} lt={lt} at={HOOK.lines} exit={HOOK.exit} />
            <br />
            <span className={s.dimInk}>
              <Words text={v.hook[1]} lt={lt} at={HOOK.lines + 520} exit={HOOK.exit + 120} />
            </span>
          </h2>
        )}
        {lt >= HOOK.punch && (
          <h2 className={s.display}>
            <Words text={v.punchline.pre} lt={lt} at={HOOK.punch} stagger={60} exit={HOOK.fall + 380} />
            <span
              className={s.struck}
              style={{
                ["--strike" as string]: strike,
                display: "inline-block",
                opacity: 1 - fall,
                transform: `translate3d(0, ${(fall * 70).toFixed(1)}px, 0) rotate(${(fall * 5).toFixed(2)}deg)`,
                filter: fall > 0 ? `blur(${(fall * 6).toFixed(1)}px)` : undefined,
              }}
            >
              <Words text={v.punchline.struck} lt={lt} at={HOOK.punch + pre * 60} stagger={60} />
            </span>
            <Words
              text={v.punchline.post}
              lt={lt}
              at={HOOK.punch + (pre + struckWords) * 60}
              stagger={60}
              exit={HOOK.fall + 380}
            />
          </h2>
        )}
      </div>
    </div>
  );
}

/* 2 · Reveal de marca + primera pantalla ------------------------------------- */

const BRAND = { words: 1300, lift: 3300, shot: 3400 };

function BrandScene({ lt, v, vg, paused }: SceneProps) {
  const move = easeInOut(seg(lt, BRAND.lift, BRAND.lift + 800));
  const shot = easeOutQuint(seg(lt, BRAND.shot, BRAND.shot + 900));
  const zoom = 1 + seg(lt, BRAND.shot + 900, 6200) * 0.035;
  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.paperGrid} style={{ opacity: seg(lt, BRAND.lift, BRAND.lift + 900) * 0.7 }} aria-hidden />
      {lt < 1300 && <MiniWindows lt={lt} v={v} mode="converge" />}
      <div
        className={s.brandGroup}
        style={{ transform: `translate3d(0, ${(-238 * move).toFixed(2)}px, 0) scale(${(1 - 0.5 * move).toFixed(4)})` }}
      >
        <div style={{ opacity: easeOut(seg(lt, 120, 520)) }}>
          <IsotypeLoader size={190} tone="paper" paused={paused} />
        </div>
        <h2 className={s.displaySm}>
          <Words text={v.brand} lt={lt} at={BRAND.words} />
        </h2>
      </div>

      {lt >= BRAND.shot && (
        <FxIn
          className={s.homeShot}
          style={{
            opacity: Math.min(1, shot * 1.6),
            transform: `perspective(1400px) translate3d(0, ${((1 - shot) * 420).toFixed(1)}px, 0) rotateX(${((1 - shot) * 16).toFixed(2)}deg) scale(${zoom.toFixed(4)})`,
          }}
        >
          <TapeChart v={vg} />
          <div className={s.homeFloatRight} style={rise(easeOutQuint(seg(lt, BRAND.shot + 450, BRAND.shot + 1000)), 28, 6)}>
            <SignalRate v={vg} />
          </div>
          <div className={s.homeFloatLeft} style={rise(easeOutQuint(seg(lt, BRAND.shot + 650, BRAND.shot + 1200)), 28, 6)}>
            <SignalAgent v={vg} />
          </div>
        </FxIn>
      )}
    </div>
  );
}

/* 3 · Reserva → check-in → estadía, con el cursor --------------------------- */

const A_LEFT = 190;
const TOP = 150;
const PAN1 = 960;
const PAN2 = 1290;
const B_LEFT = A_LEFT + PAN1;
const C_LEFT = 500 + PAN2;

const F = {
  cursorIn: 600,
  toCell: 1150,
  press: 1300,
  dragEnd: 2200,
  chip: 2400,
  toChip: 3000,
  clickChip: 3100,
  bar: 3150,
  row: 3500,
  callA: 3900,
  pan1: 6200,
  arriveB: 6900,
  toUnit: 7400,
  clickUnit: 7500,
  pop: 7560,
  toPop: 8100,
  clickPop: 8200,
  checkin: 8260,
  callB: 8700,
  pan2: 10500,
  cursorOut: 10350,
  phone: 11000,
  card: 11500,
  callC: 12050,
  end: 14200,
};

const SEL = {
  head8: '[data-tape-head="8"]',
  head10: '[data-tape-head="10"]',
  row: '[data-tape-row="2"]',
  unit: '[data-unit="103"]',
};

function FlowScene({ lt, v, vg }: SceneProps) {
  const labels = unitLabels(v);
  const trackRef = useRef<HTMLDivElement>(null);
  const rects = useRects(trackRef, [SEL.head8, SEL.head10, SEL.row, SEL.unit]);
  const c8 = rects[SEL.head8];
  const c10 = rects[SEL.head10];
  const row = rects[SEL.row];
  const unit = rects[SEL.unit];

  const pan =
    lerp(0, PAN1, easeInOut(seg(lt, F.pan1, F.pan1 + 700))) +
    lerp(0, PAN2 - PAN1, easeInOut(seg(lt, F.pan2, F.pan2 + 700)));
  const dimA = easeInOut(seg(lt, F.pan1, F.pan1 + 700));
  const dimB = easeInOut(seg(lt, F.pan2, F.pan2 + 700));
  const activeStep = lt >= F.pan2 + 350 ? 2 : lt >= F.pan1 + 350 ? 1 : 0;

  // ----------------------------------------------------- pantalla A
  const newBar = lt >= F.bar;
  const dragging = lt >= F.press && lt < F.bar;
  const held = lt >= F.dragEnd && lt < F.bar;
  const days = lt < F.dragEnd ? 1 + Math.min(2, Math.floor(3 * seg(lt, F.press, F.dragEnd))) : 3;
  let selection: Rect | null = null;
  let cellC8 = { x: 0, y: 0 };
  let cellC10 = { x: 0, y: 0 };
  if (c8 && c10 && row) {
    const gap = (c10.x - c8.x - 2 * c8.w) / 2;
    selection = {
      x: c8.x,
      y: row.y,
      w: days * c8.w + (days - 1) * gap,
      h: row.h,
    };
    cellC8 = { x: c8.x + c8.w / 2, y: row.y + row.h / 2 };
    cellC10 = { x: c10.x + c10.w / 2, y: row.y + row.h / 2 };
  }
  const chipPos = { x: cellC10.x + 16, y: cellC10.y + 26 };
  const chipCenter = { x: chipPos.x + 96, y: chipPos.y + 16 };
  const chipOn = lt >= F.chip && lt < F.bar;
  const chipIn = easeBack(seg(lt, F.chip, F.chip + 320));

  // ----------------------------------------------------- pantalla B
  const unitC = unit ? { x: unit.x + unit.w / 2, y: unit.y + unit.h / 2 } : { x: 0, y: 0 };
  const popPos = unit ? { x: unit.x + unit.w - 6, y: unit.y + unit.h + 8 } : { x: 0, y: 0 };
  const popCenter = { x: popPos.x - 46, y: popPos.y + 14 };
  const popOn = lt >= F.pop && lt < F.checkin;
  const popIn = easeBack(seg(lt, F.pop, F.pop + 300));
  const status103: Unit["status"] = lt >= F.checkin ? "occupied" : "available";
  const ring = lt >= F.checkin ? seg(lt, F.checkin, F.checkin + 720) : 0;

  const keys: CursorKey[] = c8
    ? [
        { at: F.cursorIn, x: 470, y: 430 },
        { at: F.toCell, ...cellC8 },
        { at: F.press, ...cellC8, down: true },
        { at: F.dragEnd, ...cellC10, up: true },
        { at: F.dragEnd + 250, ...cellC10 },
        { at: F.toChip, ...chipCenter },
        { at: F.clickChip, ...chipCenter, click: true },
        { at: F.clickChip + 500, x: chipCenter.x + 46, y: chipCenter.y + 74 },
        { at: F.pan1, x: chipCenter.x + 46, y: chipCenter.y + 74 },
        ...(unit
          ? [
              { at: F.toUnit, ...unitC },
              { at: F.clickUnit, ...unitC, click: true },
              { at: F.clickUnit + 120, ...unitC },
              { at: F.toPop, ...popCenter },
              { at: F.clickPop, ...popCenter, click: true },
              { at: F.clickPop + 500, ...popCenter },
              { at: F.clickPop + 1100, x: popCenter.x + 70, y: popCenter.y + 96 },
            ]
          : []),
      ]
    : [];

  const phone = easeOutQuint(seg(lt, F.phone, F.phone + 850));
  const rail = seg(lt, 0, F.end);
  const heads = [v.scenes.booking, v.scenes.rooms, v.scenes.stay];

  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.paperGrid} style={{ opacity: 0.7 }} aria-hidden />

      {/* Los tres pasos, fijos arriba; la barra avanza con la escena. */}
      <div className={s.flowRail} aria-hidden>
        <i style={{ transform: `scaleX(${rail.toFixed(4)})` }} />
      </div>
      {heads.map((label, k) => {
        const on = k === activeStep;
        return (
          <div
            key={label}
            className={s.stepHead}
            style={{ left: [26, 520, 924][k], ...rise(easeOutQuint(seg(lt, 200 + k * 140, 800 + k * 140)), 10, 4) }}
          >
            <span className={s.stepDot} style={{ transform: `scale(${on ? 1.5 : 1})`, opacity: on ? 1 : 0.45 }} />
            <span className={s.stepNum}>0{k + 1}</span>
            <span className={s.stepText} style={{ color: on ? "var(--text)" : "var(--text-3)" }}>
              {label}
            </span>
          </div>
        );
      })}

      {/* La pista: las tres pantallas una al lado de la otra; la cámara panea. */}
      <div ref={trackRef} className={s.track} style={{ transform: `translate3d(${(-pan).toFixed(1)}px, 0, 0)` }}>
        {/* ---------------------------------------------- A · calendario */}
        <FxIn
          className={s.screen}
          style={{
            left: A_LEFT,
            top: TOP,
            width: 900,
            opacity: 1 - 0.6 * dimA,
            transform: `scale(${(1 - 0.05 * dimA).toFixed(4)})`,
            filter: dimA > 0 ? `blur(${(dimA * 1.5).toFixed(2)}px)` : undefined,
          }}
        >
          <div className={s.tapeWrap}>
            <TapeChart v={vg} rows={tapeRows(vg, v, newBar ? { start: 8, span: 3 } : null)} />
          </div>
          {lt >= F.row && (
            <ChatShell className={s.tokens}>
              <div className={s.rowCard} style={rise(easeOutQuint(seg(lt, F.row, F.row + 520)), 16, 6)}>
                <ReservationList rows={[bookingRow(v, "confirmed", v.status.confirmed)]} />
              </div>
            </ChatShell>
          )}
        </FxIn>

        {/* La selección de arrastre, sobre las celdas reales del calendario. */}
        {selection && dragging && (
          <i
            className={[s.selection, held ? s.selectionHeld : ""].join(" ")}
            style={{ left: selection.x, top: selection.y + 1, width: selection.w, height: selection.h - 2 }}
          />
        )}
        {chipOn && (
          <span
            className={s.createChip}
            style={{
              left: chipPos.x,
              top: chipPos.y,
              opacity: clamp01(chipIn * 1.5),
              transform: `scale(${(0.85 + 0.15 * chipIn).toFixed(3)})`,
            }}
          >
            <b>+</b>
            {v.actions.create}
          </span>
        )}
        {c10 && row && (
          <Callout
            lt={lt}
            at={F.callA}
            until={F.pan1}
            x={c10.x + c10.w}
            y={row.y + row.h / 2}
            dx={118}
            dy={-64}
            text={v.callouts.booking}
          />
        )}

        {/* ---------------------------------------------- B · habitaciones */}
        {/* Asoma recién cuando la cámara va hacia ella: antes se veía un
            borde de tarjeta en el margen derecho, sin explicación. */}
        <FxIn
          className={s.screen}
          style={{
            left: B_LEFT,
            top: TOP,
            width: 560,
            opacity: easeOut(seg(lt, F.pan1 - 100, F.pan1 + 500)) * (1 - 0.6 * dimB),
            transform: `scale(${(1 - 0.05 * dimB).toFixed(4)})`,
            filter: dimB > 0 ? `blur(${(dimB * 1.5).toFixed(2)}px)` : undefined,
          }}
        >
          <Frame label={v.scenes.rooms} tag={v.rooms.tag}>
            <ChatShell className={s.tokens}>
              <UnitsPlan
                floor={v.rooms.floor}
                units={floorUnits(v, status103)}
                labels={labels}
                legend={[v.rooms.legend.available, v.rooms.legend.occupied, v.rooms.legend.cleaning]}
                highlight={lt >= F.clickUnit ? "103" : null}
              />
            </ChatShell>
          </Frame>
        </FxIn>
        {popOn && (
          <span
            className={s.popover}
            style={{
              left: popPos.x,
              top: popPos.y,
              opacity: clamp01(popIn * 1.5),
              transform: `translateX(-100%) scale(${(0.85 + 0.15 * popIn).toFixed(3)})`,
            }}
          >
            {v.actions.checkin}
          </span>
        )}
        {ring > 0 && ring < 1 && (
          <i
            className={s.ring}
            style={{
              left: unitC.x,
              top: unitC.y,
              opacity: 1 - ring,
              transform: `translate(-50%, -50%) scale(${(0.5 + ring * 1.6).toFixed(3)})`,
            }}
          />
        )}
        {unit && (
          <Callout
            lt={lt}
            at={F.callB}
            until={F.pan2}
            x={unit.x + unit.w}
            y={unitC.y}
            dx={112}
            dy={-48}
            text={v.callouts.checkin}
          />
        )}

        {/* ---------------------------------------------- C · StayPass */}
        {lt >= F.phone && (
          <div
            className={s.phone}
            style={{
              left: C_LEFT,
              top: TOP,
              opacity: phone,
              transform: `perspective(1200px) translate3d(${((1 - phone) * 90).toFixed(1)}px, ${((1 - phone) * 30).toFixed(1)}px, 0) rotateY(${(-(1 - phone) * 24).toFixed(2)}deg)`,
            }}
          >
            <div className={s.phoneNotch} />
            <div className={s.phoneScreen}>
              <div style={rise(easeOutQuint(seg(lt, F.card, F.card + 560)), 18, 6)}>
                <StayCard
                  greeting={v.stay.greeting}
                  sub={v.stay.sub}
                  badge={v.stay.badge}
                  codeLabel={v.stay.codeLabel}
                  code="BK-4790"
                  copy={v.stay.copy}
                  stayLabel={v.stay.stayLabel}
                  hotel={v.stay.hotel}
                  dates={v.stay.dates}
                />
              </div>
            </div>
          </div>
        )}
        <Callout lt={lt} at={F.callC} x={C_LEFT + 284} y={TOP + 232} dx={96} dy={-46} text={v.callouts.stay} />

        <Cursor lt={lt} keys={keys} hideAt={F.cursorOut} />
      </div>
    </div>
  );
}

/* 4 · Checkout / informes ---------------------------------------------------- */

const CK = { out: 900, kpis: 1150, call: 2100 };

function CheckoutScene({ lt, v }: SceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useRects(rootRef, ["[data-status]"]);
  const badge = rects["[data-status]"];
  const out = lt >= CK.out;
  const row = bookingRow(v, out ? "checked-out" : "checked-in", out ? v.status.checkedOut : v.status.checkedIn);
  const p = easeOutQuint(seg(lt, 0, 700));
  const kpis = v.reports.kpis.map((k) => ({
    ...k,
    value: <Scramble text={k.value} lt={lt} at={CK.kpis + 150} dur={950} />,
  }));
  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.paperGrid} style={{ opacity: 0.7 }} aria-hidden />
      <div ref={rootRef} className={s.layer}>
        <FxIn
          className={[s.reportShot, out ? s.stampWrap : ""].join(" ")}
          style={{
            opacity: p,
            transform: `perspective(1400px) translate3d(0, ${((1 - p) * 40).toFixed(1)}px, 0) scale(${(1.04 + seg(lt, 0, 4600) * 0.04).toFixed(4)})`,
          }}
        >
          <Frame label={v.scenes.reports} tag={v.reports.tag}>
            <ChatShell className={s.tokens}>
              <ReservationList key={row.status} rows={[row]} block={out} />
              {lt >= CK.kpis && <RevenueCard block title={v.reports.closed} kpis={kpis} />}
            </ChatShell>
          </Frame>
        </FxIn>
        {badge && (
          <Callout
            lt={lt}
            at={CK.call}
            x={badge.x + badge.w / 2}
            y={badge.y - 4}
            dx={-60}
            dy={-70}
            text={v.callouts.closed}
          />
        )}
      </div>
    </div>
  );
}

/* 5 · Bisagra ---------------------------------------------------------------- */

function HingeScene({ lt, v }: SceneProps) {
  return (
    <div className={`${s.scene} ${s.ink}`}>
      <Aurora lt={lt + 5000} />
      <div className={s.typeBlock}>
        <div className={s.hingeStack}>
          <div style={rise(easeOutQuint(seg(lt, 40, 620)), 22, 8)}>
            <OrbLoader size={72} spinning />
          </div>
          <h2 className={s.display}>
            <Words text={v.hinge} lt={lt} at={260} stagger={62} />
          </h2>
        </div>
      </div>
    </div>
  );
}

/* 6 · El mismo flujo, pedido en el chat ------------------------------------- */

function ChatScene({ lt, v, vg, locale }: SceneProps) {
  const plan = useMemo(() => planChat(v.chat), [v.chat]);
  const { turns } = plan;
  const labels = unitLabels(v);
  const threadRef = useRef<HTMLDivElement>(null);
  const lastHeight = useRef<number | null>(null);

  // El hilo crece desde abajo: cuando entra algo, lo de arriba sube deslizando.
  useLayoutEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    const h = el.offsetHeight;
    const prev = lastHeight.current;
    lastHeight.current = h;
    if (prev === null) return;
    const d = h - prev;
    if (d > 0.5 && d < 480) {
      el.animate([{ transform: `translateY(${d}px)` }, { transform: "translateY(0)" }], {
        duration: 380,
        easing: "cubic-bezier(0.22, 0.9, 0.3, 1)",
        composite: "add",
      });
    }
  });

  // ------------------------------------------------ compositor
  let typed = "";
  let caret = lt < turns[0].typeStart;
  let pressed = false;
  turns.forEach((tp, i) => {
    const ask = v.chat.turns[i].ask;
    if (lt >= tp.typeStart && lt < tp.send) {
      typed = ask.slice(0, typedCount(tp.offsets, lt - tp.typeStart));
      caret = true;
    }
    if (lt >= tp.send - 70 && lt < tp.send + 110) pressed = true;
    if (lt >= tp.send - 70 && lt < tp.send) typed = ask;
  });

  // ------------------------------------------------ la pantalla de atrás
  const [t1, t2, t3, t4] = turns;
  const lastDone = (tp?: (typeof turns)[number]) => (tp ? tp.steps[tp.steps.length - 1].done : Infinity);
  const stages = [
    { key: "tape", from: 0 },
    { key: "rooms", from: t2 ? t2.send : Infinity },
    { key: "rate", from: t3 ? t3.send : Infinity },
    { key: "rate2", from: lastDone(t4) },
  ];
  const events = [
    lastDone(t1),
    t2?.steps[0]?.done,
    lastDone(t2),
    t3 ? t3.send + 250 : undefined,
    lastDone(t4),
  ].filter((e): e is number => typeof e === "number" && Number.isFinite(e));
  const glow = events.reduce((m, e) => (lt >= e ? Math.max(m, 1 - seg(lt, e, e + 900)) : m), 0);

  const lastVisible = turns.reduce((acc, tp, i) => (lt >= tp.send + 60 ? i : acc), -1);
  const winIn = easeOutQuint(seg(lt, 0, 700));
  const behindIn = easeOutQuint(seg(lt, 140, 900));

  const chatBlock = (v: VideoDict, status: BookingRowData["status"], label: string): BookingRowData => ({
    guest: v.chat.bookingBlock.guest,
    detail: v.chat.bookingBlock.detail,
    amount: v.chat.bookingBlock.amount,
    status,
    statusLabel: label,
  });

  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.paperGrid} style={{ opacity: 0.7 }} aria-hidden />

      {/* ---------------------------------------------------- UI detrás */}
      <div
        className={s.behindWin}
        style={{
          opacity: behindIn,
          transform: `perspective(1600px) translate3d(${((1 - behindIn) * 40).toFixed(1)}px, ${((1 - behindIn) * 24).toFixed(1)}px, 0) rotateY(-7deg) scale(0.97)`,
          boxShadow: `0 0 0 ${(glow * 7).toFixed(2)}px rgba(200, 226, 147, ${(glow * 0.6).toFixed(3)}), 0 30px 70px rgba(20, 21, 15, 0.16)`,
        }}
      >
        {stages.map((st, i) => {
          const next = stages[i + 1];
          if (lt < st.from) return null;
          if (next && lt >= next.from + 480) return null;
          const p = i === 0 ? 1 : easeOutQuint(seg(lt, st.from, st.from + 480));
          return (
            <FxIn key={st.key} className={s.behindLayer} style={i === 0 ? undefined : rise(p, 18, 8)}>
              {st.key === "tape" && (
                <TapeChart
                  v={vg}
                  rows={tapeRows(vg, v, t1 && lt >= lastDone(t1) ? { start: 3, span: 2 } : null)}
                />
              )}
              {st.key === "rooms" && t2 && (
                <Frame label={v.scenes.rooms} tag={v.rooms.tag}>
                  <ChatShell className={s.tokens}>
                    <UnitsPlan
                      floor={v.rooms.floor}
                      units={floorUnits(v, lt >= lastDone(t2) ? "occupied" : "available")}
                      labels={labels}
                      legend={[v.rooms.legend.available, v.rooms.legend.occupied, v.rooms.legend.cleaning]}
                      highlight={lt >= t2.steps[0].done ? "103" : null}
                    />
                  </ChatShell>
                </Frame>
              )}
              {st.key === "rate" && <RateDecision v={vg} locale={locale} />}
              {st.key === "rate2" && (
                <RateDecision v={vg} locale={locale} rates={v.chat.rates} applied={vg.signals.applied} />
              )}
            </FxIn>
          );
        })}
      </div>

      {/* ---------------------------------------------------- el chat */}
      <div
        className={s.chatWin}
        style={{
          opacity: winIn,
          transform: `translate3d(0, ${((1 - winIn) * 30).toFixed(1)}px, 0)`,
        }}
      >
        <Frame label={v.scenes.chat} tag={vg.agent.tag}>
          <ChatShell>
            <div className={s.viewport}>
              <div
                className={s.emptyOrb}
                style={{ opacity: 1 - seg(lt, turns[0].send - 100, turns[0].send + 250) }}
              >
                <OrbLoader size={58} spinning={false} />
              </div>
              <div ref={threadRef} className={s.thread}>
                {turns.map((tp, i) => {
                  if (lt < tp.send) return null;
                  const turn = v.chat.turns[i];
                  const steps = tp.steps
                    .map((sp, j) => ({ sp, j }))
                    .filter(({ sp }) => lt >= sp.at)
                    .map(({ sp, j }) => ({ label: turn.steps[j].label, tool: turn.steps[j].tool, running: lt < sp.done }));
                  const answer =
                    lt >= tp.answerAt ? turn.answer.slice(0, Math.ceil((lt - tp.answerAt) / STREAM_MS)) : "";
                  const thinking = lt < tp.answerAt;
                  let block: ReactNode = null;
                  if (lt >= tp.blockAt) {
                    if (i === 0) block = <ReservationList block rows={[chatBlock(v, "confirmed", v.status.confirmed)]} />;
                    if (i === 1) block = <ReservationList block rows={[chatBlock(v, "checked-in", v.status.checkedIn)]} />;
                    if (i === 2)
                      block = (
                        <RevenueCard
                          block
                          title={v.chat.revenueBlock.title}
                          meta={v.chat.revenueBlock.meta}
                          kpis={v.chat.revenueBlock.kpis}
                        />
                      );
                    if (i === 3)
                      block = (
                        <RevenueCard block title={v.chat.ruleBlock.title} meta={v.chat.ruleBlock.meta} kpis={v.chat.ruleBlock.kpis} />
                      );
                  }
                  return (
                    <Fragment key={i}>
                      <UserBubble text={turn.ask} />
                      {lt >= tp.send + 60 && (
                        <AssistantTurn
                          steps={steps}
                          answer={answer}
                          streaming={lt < tp.streamEnd}
                          block={block}
                          thinking={thinking}
                          thinkingLabel={v.chat.thinking}
                          waitHint={v.chat.wait}
                          foot={i === lastVisible}
                        />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <Composer
              text={typed}
              placeholder={v.chat.placeholder}
              caret={caret}
              pressed={pressed}
              sendLabel={v.chat.placeholder}
            />
          </ChatShell>
        </Frame>
      </div>
    </div>
  );
}

/* 7 · Logo + tagline --------------------------------------------------------- */

function OutroScene({ lt, v }: SceneProps) {
  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.paperGrid} style={{ opacity: 0.5 }} aria-hidden />
      <div className={s.typeBlock}>
        <div className={s.outroStack}>
          <div style={rise(easeOutQuint(seg(lt, 60, 700)), 24, 8)}>
            <OrbLoader size={104} spinning={lt < 1150} />
          </div>
          <div className={s.outroLogo} style={rise(easeOutQuint(seg(lt, 1000, 1600)), 14, 10)}>
            <Logo tone="ink" />
          </div>
          <p className={s.tagline}>
            <Words text={v.outro} lt={lt} at={1250} stagger={55} dist={16} blur={8} tilt={22} />
          </p>
          <p className={s.url} style={rise(easeOutQuint(seg(lt, 2100, 2700)), 8, 4)}>
            {v.url}
          </p>
        </div>
      </div>
    </div>
  );
}

export const SCENES: Record<BeatId, (p: SceneProps) => ReactNode> = {
  hook: HookScene,
  brand: BrandScene,
  flow: FlowScene,
  checkout: CheckoutScene,
  hinge: HingeScene,
  chat: ChatScene,
  outro: OutroScene,
};
