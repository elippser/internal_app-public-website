"use client";

import { useMemo, useRef } from "react";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, seg } from "../video/timeline";
import { Gradient, Mark, useOffsets, type CursorKey, type Rect } from "../video/fx";
import PmsShell from "../video/pms/PmsShell";
import RoomsBoard, { type RoomsStatus } from "../video/pms/RoomsBoard";
import UnitCard, { type Unit } from "../video/pms/UnitCard";
import Calendar, { type CalCategory } from "../video/pms/Calendar";
import { OCCUPANCY, calDays, hotelUnits, unitLabels } from "../video/acts/data";
import { GLine, away, cameraStyle, lift, pointerAt, smooth, type Move, type Pose } from "../video-kit/kit";
import { layKitBeats } from "../video-kit/KitPlayer";
import { APP, At, EndCard, Fade, HeroTitle, Note, TourStage } from "../video-kit/common";
import type { TourDict, TourProps } from "./types";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import t from "./tours.module.css";

/**
 * El video de Habitaciones (`/video/habitaciones`). Sigue a la página
 * `/producto/habitaciones`: las dos formas de vender (pool de categoría y
 * unidad con nombre propio), un recorrido por la UI real —el estado de la casa
 * con una habitación que pasa de limpieza a disponible, el calendario con las
 * dos formas conviviendo y la noche que no se vende dos veces—, los estados que
 * no admiten imposibles, "lo cargás una vez, lo usan todos" y el CTA.
 */

type D = TourDict<"rooms">;
type P = TourProps<"rooms">;

const WIDE: Pose = { x: 640, y: 360, z: 1 };
const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };
const COL_W = 52;
// Cinco columnas: con las seis del tablero real los títulos se cortan en la ventana del video.
const BOARD_COLS: RoomsStatus[] = ["available", "occupied", "cleaning", "maintenance", "checkout-pending"];
const LABEL_W = 178;

/* ========================================================= 1 · hero ===== */

function Hero({ lt, v }: P) {
  const x = v.x;
  const ul = unitLabels(v.base);
  const all = hotelUnits(v.base, "available");
  // Tres dobles intercambiables: el huésped compra "una doble" y se asigna después.
  const pool = [all[0], all[1], all[4]];
  const cabin: Unit = { code: x.cabins[0], size: 60, capacity: { adults: 4, children: 2 }, status: "available", category: x.cabinCat };
  return (
    <HeroTitle lt={lt} title={v.page.hero.title} dur={4800} visualAt={1300} pScale={0.95}>
      <div className={[t.modes, t.pmsTokens].join(" ")} style={{ transform: "scale(1.02)", transformOrigin: "50% 0" }}>
        <div className={t.modeCard} style={lift(lt, 1400, 20, 8)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={t.modePhoto} src="/video/tours/doble.jpg" alt="" />
          <div className={t.modeHead}>
            {pool[0].category}
            <small>{x.modes[0]}</small>
          </div>
          <div className={t.modeUnits}>
            {pool.map((u) => (
              <UnitCard key={u.code} unit={u} labels={ul} />
            ))}
          </div>
        </div>
        <div className={t.modeCard} style={lift(lt, 1650, 20, 8)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={t.modePhoto} src="/video/tours/cabana.jpg" alt="" />
          <div className={t.modeHead}>
            {x.cabinCat}
            <small>{x.modes[1]}</small>
          </div>
          <div className={t.modeUnits} style={{ gridAutoColumns: "190px" }}>
            <UnitCard unit={cabin} labels={ul} />
          </div>
        </div>
      </div>
    </HeroTitle>
  );
}

/* ===================================================== 2 · recorrido ==== */

/**
 * Tres pasos, en ms desde que entra la escena:
 * 1. El estado de la casa: la 102 termina la limpieza y se arrastra a
 *    Disponible (el gesto real del tablero).
 * 2. El calendario con las dos formas de vender: dobles en pool, cabañas por
 *    nombre. La cámara lo recorre de arriba abajo.
 * 3. Una noche se vende una sola vez: entra una reserva de la web en la cabaña
 *    Alerce y la segunda, de Booking, rebota contra el candado.
 */
function plan() {
  // Cada nota se queda en pantalla lo que tarda en leerse (≈ 2,4 s).
  const grab = 3900;
  const drop = grab + 1100;
  const end1 = drop + 3300;
  const calIn = end1;
  const pan = calIn + 4200;
  const end2 = pan + 4300;
  const web = end2 + 1000;
  const second = web + 2800;
  const toast = second + 1300;
  const end = toast + 3000;
  return { cap: [400, end1, end2], grab, drop, end1, calIn, pan, end2, web, second, toast, end, duration: end + 450 };
}

function roomsCalendar(v: D, fresh: boolean): CalCategory[] {
  const g = v.base.ui.calendar.guests;
  const c = v.base.ui.calendar.cats;
  const x = v.x;
  return [
    {
      name: c[0].name,
      color: "#eab308",
      count: 6,
      avail: 2,
      rate: c[0].rate,
      rows: [
        { unit: "101", bars: [{ start: 1, nights: 4, status: "confirmed", name: g[0], pax: 2 }, { start: 7, nights: 3, status: "pending", name: g[1], pax: 2, paid: false }] },
        { unit: "102", bars: [{ start: 2, nights: 6, status: "confirmed", name: g[2], pax: 2 }] },
        { unit: "201", bars: [{ start: 0, nights: 3, status: "checked-in", name: g[3], pax: 2 }, { start: 9, nights: 3, status: "confirmed", name: g[4], pax: 2 }] },
      ],
    },
    {
      name: c[1].name,
      color: "#22c55e",
      count: 4,
      avail: 1,
      rate: c[1].rate,
      rows: [
        { unit: "103", bars: [{ start: 0, nights: 5, status: "checked-in", name: g[1], pax: 2 }] },
        { unit: "104", bars: [{ start: 4, nights: 4, status: "confirmed", name: g[0], pax: 2 }] },
      ],
    },
    {
      name: x.cabinCat,
      color: "#4e6b28",
      count: 2,
      avail: 1,
      rate: x.cabinRate,
      rows: [
        { unit: x.cabins[0], bars: [{ start: 1, nights: 4, status: "checked-in", name: g[3], pax: 4 }, ...(fresh ? [{ start: 7, nights: 3, status: "confirmed" as const, name: x.guestNew, pax: 3, fresh: true }] : [])] },
        { unit: x.cabins[1], bars: [{ start: 3, nights: 5, status: "confirmed", name: g[2], pax: 4 }] },
      ],
    },
  ];
}

function Tour({ lt, v }: P) {
  const x = v.x;
  const Pl = useMemo(() => plan(), []);
  const appRef = useRef<HTMLDivElement>(null);
  const screen: "board" | "cal" = lt < Pl.calIn ? "board" : "cal";

  /* ------------------------------------------------------ medición ---- */
  const alerce = `[data-cal-row="${x.cabins[0]}"]`;
  const R = useOffsets(appRef, ['[data-unit="101"]', '[data-unit="203"]', '[data-cal-row="101"]', alerce], [screen]);
  const r = (sel: string, fb: Partial<Rect>) => R[sel] ?? { ...R0, ...fb };
  // La 101 (ocupada) y la 203 (mantenimiento) no se mueven nunca: de ellas
  // salen la columna de limpieza y la de disponibles.
  const u101 = r('[data-unit="101"]', { x: 190, y: 140, w: 138, h: 92 });
  const u203 = r('[data-unit="203"]', { x: 490, y: 140, w: 138, h: 92 });
  const pitch = (u203.x - u101.x) / 2;
  const at = (col: number) => ({ x: APP.x + u101.x + col * pitch + u101.w / 2, y: APP.y + u101.y + u101.h / 2 });
  const grabPt = at(1);
  const dropPt = at(-1);
  const row101 = r('[data-cal-row="101"]', { x: 12, y: 150, w: 900, h: 34 });
  const rowA = r(alerce, { x: 12, y: 420, w: 900, h: 34 });
  const slot = { x: APP.x + rowA.x + LABEL_W + 7.5 * COL_W, y: APP.y + rowA.y + 5, w: 3 * COL_W, h: rowA.h - 10 };

  /* -------------------------------------------------------- cámara ---- */
  const moves: Move[] = [
    { t: 900, d: 1000, to: { x: (grabPt.x + dropPt.x) / 2 + 40, y: grabPt.y + 110, z: 1.3 } },
    { t: Pl.end1 - 800, d: 700, to: WIDE },
    { t: Pl.calIn + 500, d: 900, to: { x: APP.x + 360, y: APP.y + row101.y + 40, z: 1.35 } },
    { t: Pl.pan, d: 3000, to: { x: APP.x + 420, y: slot.y + 10, z: 1.35 } },
    { t: Pl.end2 - 200, d: 900, to: { x: slot.x + 60, y: slot.y - 10, z: 1.5 } },
  ];
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  /* ------------------------------------------------------- puntero ---- */
  const keys: CursorKey[] = [
    { at: Pl.grab - 900, x: grabPt.x + 90, y: grabPt.y + 150 },
    { at: Pl.grab - 150, x: grabPt.x, y: grabPt.y },
    { at: Pl.grab, x: grabPt.x, y: grabPt.y, click: true, down: true },
    { at: Pl.drop - 120, x: dropPt.x, y: dropPt.y },
    { at: Pl.drop, x: dropPt.x, y: dropPt.y, up: true },
    { at: Pl.drop + 800, x: dropPt.x + 70, y: dropPt.y + 150 },
  ];
  const ptr = pointerAt(keys, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, Pl.grab - 1100, Pl.grab - 850)) * (1 - easeIn(seg(lt, Pl.drop + 700, Pl.drop + 1000)));

  /* ------------------------------------------------------- pantallas -- */
  const ul = unitLabels(v.base);
  const base = hotelUnits(v.base, "available");
  const u102 = base[1];
  const units = lt < Pl.grab ? base : lt < Pl.drop ? base.filter((u) => u.code !== "102") : base.map((u) => (u.code === "102" ? { ...u, status: "available" as const } : u));
  const ring = seg(lt, Pl.drop, Pl.drop + 250) * (1 - seg(lt, Pl.end1 - 700, Pl.end1 - 400));
  const days = calDays(v.base, 14, 12, 2);
  const cats = useMemo(() => roomsCalendar(v, lt >= Pl.web), [v, lt >= Pl.web]); // eslint-disable-line react-hooks/exhaustive-deps

  const rej = easeOutExpo(seg(lt, Pl.second, Pl.second + 450));
  const shake = lt > Pl.second + 450 && lt < Pl.second + 800 ? Math.sin((lt - Pl.second) / 22) * 6 * (1 - seg(lt, Pl.second + 450, Pl.second + 800)) : 0;
  const rejOut = seg(lt, Pl.toast + 1900, Pl.toast + 2300);
  const toast = easeOutExpo(seg(lt, Pl.toast, Pl.toast + 400));
  const ax = slot.x - APP.x;
  const ay = slot.y - APP.y;

  return (
    <TourStage
      lt={lt}
      dur={Pl.duration}
      camStyle={camStyle}
      appRef={appRef}
      captions={x.captions}
      capAt={Pl.cap}
      pointer={{ x: ps.x, y: ps.y, pressed: ptr.pressed, ripples: ptr.ripples, opacity: ptrOn }}
      app={
        <PmsShell active={screen === "board" ? "rooms" : "bookings"} labels={v.base.ui.shell} width={APP.w} height={APP.h} round>
          <div style={{ position: "absolute", inset: 0 }}>
            <Fade lt={lt} a={0} b={Pl.calIn}>
              <RoomsBoard units={units} labels={v.base.ui.rooms} unitLabels={ul} legend={false} columns={BOARD_COLS} />
            </Fade>
            <Fade lt={lt} a={Pl.calIn}>
              <Calendar days={days} occupancy={OCCUPANCY} categories={cats} labels={v.base.ui.calendar} colW={COL_W} labelW={LABEL_W} legend={false} />
            </Fade>
          </div>
        </PmsShell>
      }
      overlays={
        <>
          {screen === "board" && lt >= Pl.grab && lt < Pl.drop && (
            <div className={[t.ghostCard, t.pmsTokens].join(" ")} style={{ left: ptr.x - APP.x - 69, top: ptr.y - APP.y - 46, transform: "rotate(3deg) scale(1.04)" }}>
              <UnitCard unit={u102} labels={ul} />
            </div>
          )}
          {ring > 0 && <div className={t.ring} style={{ left: dropPt.x - APP.x - u101.w / 2 - 4, top: dropPt.y - APP.y - u101.h / 2 - 4, width: u101.w + 8, height: u101.h + 8, opacity: ring.toFixed(3) }} />}
          {/* Las notas: qué es lo que se ve, atado con su línea al lugar. */}
          <Note lt={lt} at={1300} out={Pl.grab - 500} box={{ x: u101.x - 10, y: u101.y + 2 * u101.h + 60 }} to={{ x: u101.x + u101.w / 2, y: u101.y + u101.h }} title={x.notes.card.t} text={x.notes.card.d} />
          <Note lt={lt} at={Pl.drop + 400} out={Pl.end1 - 500} box={{ x: u101.x + pitch + 10, y: u101.y + 20 }} to={{ x: dropPt.x - APP.x + u101.w / 2, y: dropPt.y - APP.y }} title={x.notes.moved.t} text={x.notes.moved.d} />
          <Note lt={lt} at={Pl.calIn + 1100} out={Pl.pan - 300} box={{ x: row101.x + LABEL_W + 3 * COL_W, y: row101.y - 120 }} to={{ x: row101.x + LABEL_W - 14, y: row101.y - 17 }} title={x.notes.pool.t} text={x.notes.pool.d} photo="/video/tours/doble.jpg" width={300} />
          <Note lt={lt} at={Pl.calIn + 2300} out={Pl.pan - 300} box={{ x: row101.x + LABEL_W + 3.5 * COL_W, y: row101.y + 108 }} to={{ x: row101.x + LABEL_W + 5.5 * COL_W, y: row101.y + rowA.h * 1.5 }} title={x.notes.row.t} text={x.notes.row.d} />
          <Note lt={lt} at={Pl.pan + 1500} out={Pl.end2 - 300} box={{ x: rowA.x + LABEL_W + 4 * COL_W, y: rowA.y - 120 }} to={{ x: rowA.x + LABEL_W - 14, y: rowA.y + rowA.h / 2 }} title={x.notes.unit.t} text={x.notes.unit.d} photo="/video/tours/cabana.jpg" width={300} />
          <Note lt={lt} at={Pl.web + 200} out={Pl.toast - 200} box={{ x: ax - 300, y: ay - 150 }} to={{ x: ax + slot.w / 2 - 20, y: ay + 2 }} title={x.notes.web.t} text={x.notes.web.d} num={1} width={250} />
          <Note lt={lt} at={Pl.second + 500} box={{ x: ax + slot.w + 30, y: ay - 160 }} to={{ x: ax + slot.w - 10, y: ay - slot.h * 0.2 }} title={x.notes.second.t} text={x.notes.second.d} num={2} width={250} />
          {rej > 0 && rejOut < 1 && (
            <>
              <div className={t.rejectBar} // Rebota montada sobre la barra que ya está: las dos se tienen que ver.
                style={{ left: ax + (1 - rej) * 90 + shake, top: ay - slot.h * 0.7, width: slot.w, height: slot.h, opacity: (clamp01(rej * 1.5) * (1 - rejOut)).toFixed(3) }}>
                {x.sources.second}
              </div>
            </>
          )}
          {toast > 0 && (
            <div className={t.toast} style={{ left: ax - 40, top: ay + slot.h + 16, opacity: toast.toFixed(3), transform: `translate3d(0, ${((1 - toast) * 10).toFixed(1)}px, 0)` }}>
              <span className={t.toastIcon}>×</span>
              <span>
                <b>{x.lock.title}</b>
                <small>{x.lock.sub}</small>
              </span>
            </div>
          )}
        </>
      }
    />
  );
}

/* ====================================================== 3 · estados ===== */

const ST = { title: 100, em: 600, pills: 800, pillLag: 110, bad: 1900, badDur: 800, badLabel: 2600, good: 3700, goodLag: 450, goodDur: 380, goodLabel: 3900, rest: 5200, out: 7150, end: 7600 };
const ST_COLOR = { available: "#22c55e", occupied: "#ef4444", cleaning: "#eab308", maintenance: "#f97316", blocked: "#9ca3af", "checkout-pending": "#a855f7" } as const;

function States({ lt, v }: P) {
  const cols = v.base.ui.rooms.columns;
  const q = smooth(seg(lt, ST.out, ST.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / ST.end));
  const Y = 390;
  const flow = [
    { k: "occupied" as const, x: 210 },
    { k: "checkout-pending" as const, x: 500 },
    { k: "cleaning" as const, x: 790 },
    { k: "available" as const, x: 1070 },
  ];
  const rest = [
    { k: "maintenance" as const, x: 500 },
    { k: "blocked" as const, x: 790 },
  ];
  const bad = easeInOut(seg(lt, ST.bad, ST.bad + ST.badDur));
  const badDim = 1 - 0.55 * seg(lt, ST.good - 200, ST.good + 300);
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 3000} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 56 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.page.states.title} lt={lt} at={ST.title} emAt={ST.em} tone="paper" />
          </h2>
        </div>
        <svg className={t.lines} viewBox="0 0 1280 720" aria-hidden>
          <defs>
            <marker id="stGood" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="#c8e293" />
            </marker>
            <marker id="stBad" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="#ef4444" />
            </marker>
          </defs>
          {bad > 0 && (
            <path d={`M 210 ${Y - 34} C 380 ${Y - 210}, 900 ${Y - 210}, 1070 ${Y - 34}`} pathLength={1} fill="none" stroke="#ef4444" strokeWidth="2.5" strokeDasharray={`${bad.toFixed(4)} 1`} markerEnd={bad > 0.98 ? "url(#stBad)" : undefined} opacity={badDim.toFixed(3)} />
          )}
          {flow.slice(0, -1).map((f, i) => {
            const a = ST.good + i * ST.goodLag;
            const p = easeInOut(seg(lt, a, a + ST.goodDur));
            if (p <= 0) return null;
            const x1 = f.x + (i === 0 ? 92 : 112);
            const x2 = flow[i + 1].x - (i === 2 ? 92 : 112);
            return <path key={f.k} d={`M ${x1} ${Y} L ${x2} ${Y}`} pathLength={1} fill="none" stroke="#c8e293" strokeWidth="2.5" strokeDasharray={`${p.toFixed(4)} 1`} markerEnd={p > 0.98 ? "url(#stGood)" : undefined} />;
          })}
        </svg>
        {flow.map((f, i) => (
          <At key={f.k} x={f.x} y={Y} style={lift(lt, ST.pills + i * ST.pillLag, 14, 8)}>
              <span className={t.state}>
                <i style={{ background: ST_COLOR[f.k] }} />
                {cols[f.k]}
              </span>
            </At>
        ))}
        {rest.map((f, i) => {
          const o = seg(lt, ST.rest + i * 140, ST.rest + i * 140 + 400);
          return (
            <At key={f.k} x={f.x} y={Y + 150} style={{ opacity: (o * 0.75).toFixed(3), transform: `translate3d(0, ${((1 - o) * 12).toFixed(1)}px, 0)` }}>
              <span className={t.state}>
                <i style={{ background: ST_COLOR[f.k] }} />
                {cols[f.k]}
              </span>
            </At>
          );
        })}
        <At x={640} y={Y - 160} style={lift(lt, ST.badLabel, 10, 6)}>
          <span className={[t.ruleLabel, t.ruleBad].join(" ")}>✕ {v.x.states.forbidden}</span>
        </At>
        <At x={355} y={Y + 62} style={lift(lt, ST.goodLabel, 10, 6)}>
          <span className={[t.ruleLabel, t.ruleGood].join(" ")}>✓ {v.x.states.allowed}</span>
        </At>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* ====================================================== 4 · la carga ==== */

/**
 * "Lo cargas una vez, lo usan todos", dibujado: la ficha de la categoría a la
 * izquierda y, de su borde, una línea hacia cada lugar que la usa (calendario,
 * motor, web…). Las líneas se trazan de a una y después un punto viaja por
 * cada una, como el dato que sale de la ficha.
 */
const LO = { card: 400, spokes: 1500, spokeLag: 170, draw: 650, dest: 1650, flow: 2600, flowMs: 1500, out: 6550, end: 7000 };
const LO_CARD = { x: 70, y: 215, w: 520, h: 300 };
const LO_DEST = { x: 880, top: 190, step: 66 };

/** Un punto de la curva cúbica de (x0, y0) a (x1, y1) con tangentes horizontales. */
function bez(x0: number, y0: number, x1: number, y1: number, u: number) {
  const cx0 = x0 + (x1 - x0) * 0.45;
  const cx1 = x1 - (x1 - x0) * 0.35;
  const a = (1 - u) ** 3;
  const b = 3 * (1 - u) ** 2 * u;
  const c = 3 * (1 - u) * u * u;
  const d = u ** 3;
  return { x: a * x0 + b * cx0 + c * cx1 + d * x1, y: a * y0 + b * y0 + c * y1 + d * y1 };
}

function Load({ lt, v }: P) {
  const c = v.x.load.card;
  const dests = v.x.load.chips;
  const q = smooth(seg(lt, LO.out, LO.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / LO.end));
  const card = easeOutExpo(seg(lt, LO.card, LO.card + 900));
  const x0 = LO_CARD.x + LO_CARD.w + 4;
  const y0 = LO_CARD.y + LO_CARD.h / 2;
  const x1 = LO_DEST.x - 8;
  const ys = dests.map((_, i) => LO_DEST.top + i * LO_DEST.step + (LO_DEST.step * (7 - dests.length)) / 2);
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 50 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.page.load.title} lt={lt} at={100} emAt={650} />
          </h2>
        </div>
        <svg className={t.spokes} viewBox="0 0 1280 720" aria-hidden>
          {dests.map((d, i) => {
            const at = LO.spokes + i * LO.spokeLag;
            const p = easeInOut(seg(lt, at, at + LO.draw));
            if (p <= 0) return null;
            const y1 = ys[i];
            const cx0 = x0 + (x1 - x0) * 0.45;
            const cx1 = x1 - (x1 - x0) * 0.35;
            const f0 = LO.flow + i * 140;
            const u = lt < f0 ? -1 : ((lt - f0) % LO.flowMs) / LO.flowMs;
            const dot = u >= 0 ? bez(x0, y0, x1, y1, easeInOut(u)) : null;
            return (
              <g key={d}>
                <path d={`M${x0} ${y0} C${cx0} ${y0} ${cx1} ${y1} ${x1} ${y1}`} fill="none" stroke="#9cc25a" strokeWidth="2" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={(1 - p).toFixed(4)} opacity="0.8" />
                {dot && <circle cx={dot.x.toFixed(1)} cy={dot.y.toFixed(1)} r="4.5" fill="#4e6b28" opacity={(Math.sin(u * Math.PI) * 0.9).toFixed(3)} />}
              </g>
            );
          })}
          <circle cx={x0} cy={y0} r="6" fill="#4e6b28" opacity={seg(lt, LO.spokes - 200, LO.spokes).toFixed(3)} />
        </svg>
        {dests.map((d, i) => (
          <span key={d} className={t.spokeDest} style={{ left: LO_DEST.x, top: ys[i], ...lift(lt, LO.dest + i * LO.spokeLag, 10, 6) }}>
            <i />
            {d}
          </span>
        ))}
        <div style={{ position: "absolute", left: LO_CARD.x, top: LO_CARD.y, opacity: clamp01(card * 1.4).toFixed(3), transform: `translate3d(0, ${((1 - card) * 50).toFixed(1)}px, 0)`, filter: card < 0.98 ? `blur(${((1 - card) * 10).toFixed(1)}px)` : undefined }}>
          {/* La ficha de la categoría, como la carga el hotel: fotos, capacidad, tamaño, comodidades y precio base. */}
          <div className={[t.catCard, t.catPhotoCard].join(" ")}>
            <div className={t.catPhotos}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/video/tours/superior.jpg" alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/video/tours/bano.jpg" alt="" style={lift(lt, 1300, 8, 4)} />
            </div>
            <div>
              <h3>{c.name}</h3>
              <div className={t.catMeta}>
                {c.units} · {c.guests} · {c.size}
              </div>
              <span className={t.catPill}>{c.mode}</span>
              <div className={t.amenities}>
                {c.amenities.map((m, i) => (
                  <span key={m} style={lift(lt, 1500 + i * 120, 6, 3)}>
                    {m}
                  </span>
                ))}
              </div>
              <div className={t.catRate}>{c.rate}</div>
            </div>
          </div>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

function End({ lt, v }: P) {
  return <EndCard lt={lt} cta={v.page.cta.title} tagline={v.page.hero.title} />;
}

export const ROOMS = {
  beats: () =>
    layKitBeats([
      { id: "hero", dur: 4800, enter: "fade", enterDur: 400 },
      { id: "tour", dur: plan().duration },
      { id: "states", dur: ST.end },
      { id: "load", dur: 7000 },
      { id: "end", dur: 5600 },
    ]),
  scenes: { hero: Hero, tour: Tour, states: States, load: Load, end: End },
  posterAt: ["tour", 4600] as [string, number],
  /** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/ (ver KitEmbed). */
  /** Zoom de cada escena en el corte vertical (`?view=mobile`, ver video-kit/portrait.tsx); sin dato, 1,3. */
  pzoom: {tour: 1.1,states: 1.25,load: 1.1},
  anchors: (v: P["v"]): Record<string, number[]> => ({ hero: [150], tour: (() => { const p = plan(); return [400, p.drop, p.calIn, p.end2]; })(), states: [ST.title], load: [100], end: [150, 3350] }),
};
