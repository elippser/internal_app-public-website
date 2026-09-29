"use client";

import { useMemo, useRef, useState, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/dict/es";
import { clamp01, easeOutExpo, seg } from "../video/timeline";
import { Tap, useOffsets } from "../video/fx";
import { LinkhubPage } from "../video/pms/Linkhub";
import { MotorReal, type MotorData, type MotorState, type MotorUi } from "./motor-real";
import { LinkhubReal, LINKHUB_REAL_BAR } from "./LinkhubReal";
import m from "./mobile.module.css";

/**
 * El teléfono de los videos de producto: el marco es la imagen que pasó el
 * usuario (`public/video/phone-frame.png`, recortada al teléfono) con la
 * pantalla transparente, y la pantalla va DEBAJO. Las proporciones salen de
 * medir esa imagen (5000 px de alto original):
 *
 * - pantalla: 1921 × 4176 dentro de 2081 × 4337, esquinas de radio 260;
 * - isla dinámica: 59 px debajo del borde de la pantalla y 155 de alto.
 *
 * La barra de estado (hora a la izquierda; señal, wifi y batería a la
 * derecha) ocupa lo mismo que la isla más su aire arriba y abajo: queda
 * centrada en la isla, con el mismo espacio por encima y por debajo. El
 * contenido empieza debajo de esa barra.
 */

const RATIO = 4337 / 2081;
const SCREEN = { l: 82 / 2081, t: 80 / 4337, w: 1921 / 2081, h: 4176 / 4337, r: 260 / 2081 };
const BAR = 273 / 4176;
const ISLAND = { l: 692 / 1921, r: 1239 / 1921 };
/** El ancho en px con el que se diseña lo que va en la pantalla (un teléfono real anda por 390). */
const LOGICAL_W = 300;

/** El alto de la pantalla debajo de la barra de estado, en px lógicos de `logical` de ancho. */
export const screenLogicalH = (logical = LOGICAL_W) => (logical * RATIO * SCREEN.h * (1 - BAR)) / SCREEN.w;

/** La escala del contenido (px lógicos → px del teléfono) para un teléfono de `width`. */
export const phoneScale = (width: number, logical = LOGICAL_W) => (width * SCREEN.w) / logical;

export function PhoneFrame({ width, children, barBg = "#ffffff", barTone = "dark", time = "9:41", logical = LOGICAL_W }: { width: number; children: ReactNode; barBg?: string; barTone?: "dark" | "light"; time?: string; /** Ancho en px con el que se diseña el contenido. */ logical?: number }) {
  const h = width * RATIO;
  const sw = width * SCREEN.w;
  const sh = h * SCREEN.h;
  const bar = sh * BAR;
  return (
    <div className={m.phone} style={{ width, height: h }}>
      <div className={m.screen} style={{ left: width * SCREEN.l, top: h * SCREEN.t, width: sw, height: sh, borderRadius: width * SCREEN.r }}>
        <div className={[m.status, barTone === "light" ? m.statusLight : ""].join(" ")} style={{ height: bar, background: barBg, fontSize: Math.max(10, sw * 0.05) }}>
          <span className={m.zone} style={{ width: `${(ISLAND.l * 100).toFixed(2)}%` }}>
            <b>{time}</b>
          </span>
          <span className={m.zone} style={{ left: `${(ISLAND.r * 100).toFixed(2)}%`, width: `${((1 - ISLAND.r) * 100).toFixed(2)}%` }}>
            <StatusIcons />
          </span>
        </div>
        {/* El contenido se diseña a un ancho lógico fijo y se escala a la pantalla. */}
        <div className={m.content} style={{ top: bar, width: logical, height: (sh - bar) / (sw / logical), transform: `scale(${(sw / logical).toFixed(5)})` }}>
          {children}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={m.frame} src="/video/phone-frame.png" alt="" />
    </div>
  );
}

function StatusIcons() {
  return (
    <span className={m.icons}>
      <svg viewBox="0 0 18 12" aria-hidden>
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
        <rect x="10" y="3" width="3" height="9" rx="1" />
        <rect x="15" y="0" width="3" height="12" rx="1" />
      </svg>
      <svg viewBox="0 0 16 12" aria-hidden>
        <path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0L8 11.5Z" />
        <path d="M3.4 6.8a6.5 6.5 0 0 1 9.2 0l-1.4 1.4a4.5 4.5 0 0 0-6.4 0L3.4 6.8Z" />
        <path d="M1.2 4.6a9.6 9.6 0 0 1 13.6 0l-1.4 1.4a7.6 7.6 0 0 0-10.8 0L1.2 4.6Z" />
      </svg>
      <svg viewBox="0 0 27 13" aria-hidden>
        <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" fill="none" stroke="currentColor" opacity="0.4" />
        <rect x="2" y="2" width="17" height="9" rx="2" />
        <rect x="24.5" y="4.5" width="2" height="4" rx="1" opacity="0.4" />
      </svg>
    </span>
  );
}

/* ------------------------------------------------ el motor en el móvil ---- */

type Base = Dictionary["video"];

/** El ancho lógico del motor real: el viewport en el que se capturó (390, un teléfono de verdad). */
export const MOTOR_W = 390;

/** El reloj del flujo de reserva (ms desde que arranca). */
export const MOTOR_FLOW = { tap: 500, overlay: 750, d1: 1700, d2: 2300, next: 3100, guests: 3300, search: 4100, results: 4400, room: 5200, end: 5800 };

const PHOTOS = ["/video/tours/superior.jpg", "/video/tours/doble.jpg", "/video/tours/suite.jpg"];

/**
 * Lo que ve el huésped, en el teléfono: el LinkHub y, al tocar Buscar, el
 * motor REAL del web-renderer (`MotorReal`): el calendario con precio y
 * unidades por día, los viajeros y los resultados con foto. `onPoints`
 * devuelve, en px lógicos de la pantalla, dónde quedaron los días y la
 * habitación que las notas señalan.
 */
export function MotorPhone({ cl, base, ui, width = 300, onPoints, logo, promo = false, code, realHub }: { cl: number; base: Base; ui: MotorUi; width?: number; onPoints?: (p: Record<string, { x: number; y: number; w: number; h: number }>) => void; /** El logo del avatar del LinkHub (si no, las iniciales). */ logo?: ReactNode; /** El motor con la promo de reserva directa aplicada (video de Motor, escena de promociones). */ promo?: boolean; /** Lo tipeado en el campo del código. */ code?: string; /** El LinkHub REAL (`LinkhubReal`, plantilla Brasas, con sus animaciones atadas a `lt`) en vez de la copia: `avatar` es la URL del logo. */ realHub?: { lt: number; avatar?: string } }) {
  const l = base.ui.linkhub;
  const F = MOTOR_FLOW;
  const rootRef = useRef<HTMLDivElement>(null);
  const R = useOffsets(rootRef, ['[data-tap="search"]'], []);
  const [pts, setPts] = useState<Record<string, { x: number; y: number; w: number; h: number }>>({});
  const got = (p: Record<string, { x: number; y: number; w: number; h: number }>) => {
    setPts((old) => ({ ...old, ...p }));
    onPoints?.(p);
  };
  const data = useMemo<MotorData>(() => ({ ui, bookTitle: l.bookTitle, checkin: l.checkin, checkout: l.checkout, cancel: l.cancel, next: l.next, search: l.search, monthTitle: l.monthTitle, perNight: l.perNight, rooms: l.rooms, photos: PHOTOS }), [ui, l]);
  const state: MotorState = cl >= F.results ? "results" : cl >= F.guests ? "guests" : "search";
  const sel = { a: cl >= F.d1 ? 21 : null, b: cl >= F.d2 ? 23 : null, tab: (cl >= F.d1 + 150 ? 1 : 0) as 0 | 1, chosen: cl >= F.room ? 0 : null, code };
  const open = easeOutExpo(seg(cl, F.overlay, F.overlay + 500));
  const swapIn = state === "guests" ? seg(cl, F.guests, F.guests + 250) : state === "results" ? seg(cl, F.results, F.results + 300) : 1;
  const s0 = R['[data-tap="search"]'];
  const taps: [{ x: number; y: number } | undefined, number][] = [
    [s0 ? { x: s0.x + s0.w / 2, y: s0.y + s0.h / 2 } : undefined, F.tap],
    [pts.d21, F.d1],
    [pts.d23, F.d2],
    [pts.next, F.next],
    [pts.next, F.search],
    [pts.room0, F.room],
  ];
  return (
    <PhoneFrame width={width} logical={MOTOR_W} barBg={open > 0.5 ? "#ffffff" : realHub ? LINKHUB_REAL_BAR : "#d3a6ab"} barTone={realHub && open <= 0.5 ? "light" : "dark"}>
      <div ref={rootRef} className={m.flow} data-flow="">
        {realHub ? (
          <LinkhubReal lt={realHub.lt} l={l} avatar={realHub.avatar} dates={{ in: l.inShort, out: l.outShort }} pressing={cl >= F.tap && cl < F.tap + 220} height={screenLogicalH(MOTOR_W)} />
        ) : (
          <LinkhubPage l={l} logo={logo} dates={{ in: l.inShort, out: l.outShort }} pressing={cl >= F.tap && cl < F.tap + 220} />
        )}
        {open > 0 && (
          <div style={{ position: "absolute", inset: 0, zIndex: 3, opacity: (clamp01(open * 1.5) * clamp01(0.4 + swapIn * 0.6)).toFixed(3), transform: `translate3d(0, ${((1 - open) * 40).toFixed(1)}%, 0)` }}>
            <MotorReal state={state} data={data} sel={sel} onPoints={got} promo={promo} />
          </div>
        )}
        {taps.map(([p, at], i) => (p ? <Tap key={i} lt={cl} at={at} x={p.x} y={p.y} /> : null))}
      </div>
    </PhoneFrame>
  );
}
