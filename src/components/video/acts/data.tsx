"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import type { VideoDict } from "../timeline";
import { STREAM_MS, easeOut, easeOutExpo, easeOutQuint, seg } from "../timeline";
import { Cursor, Scramble, Tap, rise, useOffsets, type CursorKey, type Rect } from "../fx";
import Calendar, { type CalCategory, type CalDay, type CalendarLabels } from "../pms/Calendar";
import { AssistantTurn, ChatShell, Composer, ReservationList, UserBubble, type BookingRowData } from "../pms/ChatUi";
import Dashboard from "../pms/Dashboard";
import { LinkhubPage, MotorResults, MotorSearch } from "../pms/Linkhub";
import PmsShell, { type PmsShellLabels } from "../pms/PmsShell";
import Reports from "../pms/Reports";
import { RecCard, RevenuePage, type Rec } from "../pms/Revenue";
import RoomsBoard from "../pms/RoomsBoard";
import StayCard from "../pms/StayCard";
import StayShell from "../pms/StayShell";
import TourismCard, { type TourismMetricData } from "../pms/TourismCard";
import OrbLoader from "../pms/OrbLoader";
import TourismMap from "../pms/TourismMap";
import type { Unit, UnitLabels } from "../pms/UnitCard";
import s from "../scenes.module.css";

/**
 * Los datos del hotel de prueba y las pantallas reales armadas con ellos: el
 * calendario, las habitaciones, las recomendaciones, el tablero, el LinkHub, el
 * portal del huésped, el chat. Todo lo que se ve en el video sale de acá.
 */

export const APP_W = 980;
export const APP_H = 620;
export const PHONE_W = 300;
export const PHONE_H = 620;

export function unitLabels(v: VideoDict): UnitLabels {
  const sh = v.rooms.short;
  return { available: sh.available, occupied: sh.occupied, cleaning: sh.cleaning, maintenance: sh.maintenance, blocked: sh.blocked, "checkout-pending": sh.checkoutPending };
}

export function hotelUnits(v: VideoDict, status103: Unit["status"]): Unit[] {
  const cap = { adults: 2, children: 0 };
  const dbl = v.rooms.double;
  const sup = v.rooms.superior;
  return [
    { code: "101", floor: "1", size: 18, capacity: cap, status: "occupied", category: dbl },
    { code: "102", floor: "1", size: 18, capacity: cap, status: "cleaning", category: dbl },
    { code: "103", floor: "1", size: 24, capacity: cap, status: status103, category: sup },
    { code: "104", floor: "1", size: 24, capacity: cap, status: "occupied", category: sup },
    { code: "201", floor: "2", size: 18, capacity: cap, status: "available", category: dbl },
    { code: "202", floor: "2", size: 18, capacity: cap, status: "available", category: dbl },
    { code: "203", floor: "2", size: 24, capacity: cap, status: "maintenance", category: sup },
    { code: "204", floor: "2", size: 24, capacity: cap, status: "checkout-pending", category: sup },
  ];
}

export const shellLabels = (v: VideoDict): PmsShellLabels => v.ui.shell;

/** Los días del calendario: hoy es el tercero (índice 2). */
/**
 * Las unidades para la TARJETA de Habitaciones: las del hotel más una bloqueada,
 * para que ninguna columna del tablero quede con el cartel de vacía.
 */
export function cardUnits(v: VideoDict): Unit[] {
  const cap = { adults: 2, children: 0 };
  const dbl = v.rooms.double;
  const sup = v.rooms.superior;
  // La tarjeta muestra tres columnas (libre, ocupada, limpieza): con las seis del
  // tablero real las unidades se aplastan. Van más unidades para que las columnas
  // lleguen abajo; las que no entran en esas tres columnas no se dibujan.
  return [
    ...hotelUnits(v, "available"),
    { code: "205", floor: "2", size: 18, capacity: cap, status: "available", category: dbl },
    { code: "206", floor: "2", size: 24, capacity: cap, status: "available", category: sup },
    { code: "301", floor: "3", size: 24, capacity: cap, status: "occupied", category: sup },
    { code: "302", floor: "3", size: 18, capacity: cap, status: "occupied", category: dbl },
    { code: "303", floor: "3", size: 18, capacity: cap, status: "cleaning", category: dbl },
    { code: "304", floor: "3", size: 24, capacity: cap, status: "cleaning", category: sup },
  ];
}

export function calDays(v: VideoDict, count = 14, firstNum = 12, todayIdx = 2): CalDay[] {
  const dows = v.ui.calendar.dows;
  return Array.from({ length: count }, (_, i) => {
    const dow = dows[(i + 3) % 7];
    return { dow, num: firstNum + i, month: i === 0 ? v.ui.calendar.monthTick : undefined, today: i === todayIdx, weekend: (i + 3) % 7 >= 5 };
  });
}

export const OCCUPANCY = ["71%", "78%", "78%", "83%", "83%", "88%", "92%", "96%", "88%", "75%", "71%", "67%", "71%", "75%"];

/** Las filas del calendario. `bar103` es la reserva que entra en la 103. */
export function calCategories(v: VideoDict, bar103: { start: number; nights: number } | null): CalCategory[] {
  const g = v.ui.calendar.guests;
  const c = v.ui.calendar.cats;
  const guest = v.booking.guest;
  return [
    {
      name: c[0].name,
      color: "#eab308",
      count: 2,
      avail: 1,
      rate: c[0].rate,
      rows: [
        { unit: "101", bars: [{ start: 1, nights: 4, status: "confirmed", name: g[0], pax: 2 }, { start: 7, nights: 4, status: "pending", name: g[1], pax: 2, paid: false }] },
        { unit: "102", bars: [{ start: 2, nights: 6, status: "confirmed", name: g[2], pax: 4 }] },
      ],
    },
    {
      name: c[1].name,
      color: "#22c55e",
      count: 3,
      avail: 2,
      rate: c[1].rate,
      rows: [
        { unit: "103", bars: bar103 ? [{ start: bar103.start, nights: bar103.nights, status: "confirmed", name: guest, pax: 2, fresh: true }] : [] },
        { unit: "104", bars: [{ start: 0, nights: 5, status: "checked-in", name: g[3], pax: 2 }] },
        { unit: "Suite", bars: [{ start: 11, nights: 3, status: "pending", name: g[4], pax: 2, paid: false }] },
      ],
    },
  ];
}

/**
 * Las filas del calendario para la TARJETA del módulo: seis días y seis
 * unidades, con las reservas cortas y dentro de la ventana. El juego grande
 * (`calCategories`) tiene barras que arrancan en el día 7 y 11 y duran hasta
 * seis noches: en la tarjeta se salían por la derecha y quedaban cortadas.
 */
export function calCardCategories(v: VideoDict): CalCategory[] {
  const g = v.ui.calendar.guests;
  const c = v.ui.calendar.cats;
  return [
    {
      name: c[0].name,
      color: "#eab308",
      count: 5,
      avail: 1,
      rate: c[0].rate,
      // Las reservas salen al mediodía, así que la barra ocupa media columna más:
      // con `CAL_CARD.days` 5, `start` + `nights` no puede pasar de 4 o se sale del cuadro.
      rows: [
        { unit: "101", bars: [{ start: 0, nights: 3, status: "confirmed", name: g[0], pax: 2 }] },
        { unit: "102", bars: [{ start: 1, nights: 3, status: "pending", name: g[1], pax: 2, paid: false }] },
        { unit: "201", bars: [{ start: 1, nights: 3, status: "checked-in", name: g[2], pax: 4 }] },
        { unit: "202", bars: [{ start: 0, nights: 4, status: "confirmed", name: g[3], pax: 2 }] },
        { unit: "204", bars: [{ start: 1, nights: 3, status: "confirmed", name: g[4], pax: 2 }] },
      ],
    },
    {
      name: c[1].name,
      color: "#22c55e",
      count: 5,
      avail: 2,
      rate: c[1].rate,
      rows: [
        { unit: "103", bars: [{ start: 1, nights: 3, status: "confirmed", name: g[4], pax: 2 }] },
        { unit: "104", bars: [{ start: 0, nights: 4, status: "checked-in", name: g[2], pax: 2 }] },
        { unit: "203", bars: [{ start: 0, nights: 4, status: "confirmed", name: g[0], pax: 4 }] },
        { unit: "302", bars: [{ start: 1, nights: 3, status: "checked-in", name: g[3], pax: 2 }] },
        { unit: "Suite", bars: [{ start: 0, nights: 3, status: "pending", name: g[1], pax: 2, paid: false }] },
      ],
    },
  ];
}

export const calLabels = (v: VideoDict): CalendarLabels => v.ui.calendar;

export const chatBooking = (v: VideoDict, status: BookingRowData["status"], label: string): BookingRowData => ({
  guest: v.chat.bookingBlock.guest,
  detail: v.chat.bookingBlock.detail,
  amount: v.chat.bookingBlock.amount,
  status,
  statusLabel: label,
});

/** Las métricas del estado turístico, contando desde `at` una tras otra. */
export function tourismMetrics(v: VideoDict, lt: number, at: number, stagger = 150): TourismMetricData[] {
  return v.tourism.metrics.map((m, i) => ({
    label: m.label,
    hint: m.hint,
    trend: m.trend as TourismMetricData["trend"],
    value: <Scramble text={m.value} lt={lt} at={at + i * stagger} dur={520} />,
  }));
}

/** Las recomendaciones del RMS; la primera puede estar ya aplicada. */
export function recs(v: VideoDict, applied: boolean): Rec[] {
  return v.ui.revenue.recs.map((r, i) => ({ ...r, status: (i === 0 && applied ? "applied" : r.status) as Rec["status"] }));
}

/** El PMS entero con el tablero de inicio: la foto del producto. */
/**
 * El tablero del PMS. Con `data` (ms desde que arrancan los datos) las cifras
 * cuentan desde cero y las barras, la curva y las filas entran suaves; sin
 * `data`, las cifras hacen el scramble de siempre.
 */
export function ProductShot({ v, lt, at, data, round = false }: { v: VideoDict; lt: number; at: number; data?: number; round?: boolean }) {
  const d = v.ui.dashboard;
  const count = (to: number, a: number, suffix = "") => `${Math.round(to * easeOut(seg(data ?? 0, a, a + 850)))}${suffix}`;
  const values =
    data === undefined
      ? { active: <Scramble text="14" lt={lt} at={at + 300} dur={600} />, occupancy: <Scramble text="78%" lt={lt} at={at + 450} dur={600} /> }
      : { active: count(14, 150), occupancy: count(78, 250, "%") };
  return (
    <PmsShell active="home" labels={shellLabels(v)} round={round}>
      <Dashboard rows={d.rows as never} labels={d as never} values={values} t={data} />
    </PmsShell>
  );
}

/** Un turno del chat de Roombir IA dentro del PMS, para las tarjetas de módulo. */
export function ChatPage({
  v,
  ask,
  steps,
  answer,
  streaming,
  thinking,
  block,
  showAsk = true,
}: {
  v: VideoDict;
  ask: string;
  steps: { label: string; tool: string; running: boolean }[];
  answer: string;
  streaming: boolean;
  thinking: boolean;
  block?: ReactNode;
  showAsk?: boolean;
}) {
  return (
    <ChatShell className={s.chatPage}>
      <div className={s.chatPageThread}>
        {showAsk && <UserBubble text={ask} />}
        {showAsk && <AssistantTurn steps={steps} answer={answer} streaming={streaming} block={block} thinking={thinking} thinkingLabel={v.chat.thinking} waitHint={v.chat.wait} />}
      </div>
      <Composer text="" placeholder={v.chat.placeholder} caret={false} pressed={false} sendLabel={v.chat.placeholder} />
    </ChatShell>
  );
}

/* ---------------------------------------------------- las seis tarjetas --- */

export type CardKey = "reservas" | "linkhub" | "revenue" | "tourism" | "ia" | "staypass" | "rooms" | "reports";

/** El LinkHub con el motor de reservas embebido: tocar Buscar, elegir noches, Siguiente, elegir habitación, Reservar. */
const LH = { tap: 300, overlay: 480, day1: 1000, day2: 1250, next: 1500, results: 1720, room: 2000, book: 2100 };

export function LinkhubCard({ cl, v }: { cl: number; v: VideoDict }) {
  const l = v.ui.linkhub;
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useOffsets(rootRef, ['[data-tap="search"]', '[data-day="21"]', '[data-day="23"]', '[data-tap="next"]', '[data-room="0"]']);
  const center = (r?: Rect) => (r ? { x: r.x + r.w / 2, y: r.y + r.h / 2 } : null);
  const tSearch = center(rects['[data-tap="search"]']);
  const t21 = center(rects['[data-day="21"]']);
  const t23 = center(rects['[data-day="23"]']);
  const tNext = center(rects['[data-tap="next"]']);
  const tRoom = center(rects['[data-room="0"]']);
  const done = cl < 0;
  const overlay = done ? 0 : easeOutExpo(seg(cl, LH.overlay, LH.overlay + 380));
  const results = done ? 1 : easeOutExpo(seg(cl, LH.results, LH.results + 480));
  const sel: [number | null, number | null] = [done || cl >= LH.day1 ? 21 : null, done || cl >= LH.day2 ? 23 : null];
  return (
    <div ref={rootRef} className={s.phone}>
      <div className={s.phoneNotch} />
      <div className={s.phoneScreenLh}>
        <LinkhubPage l={l} dates={{ in: v.ui.linkhub.inShort, out: v.ui.linkhub.outShort }} pressing={!done && cl >= LH.tap && cl < LH.tap + 220}>
          {!done && cl >= LH.overlay && cl < LH.results + 480 && (
            <MotorSearch l={l} sel={sel} tab={cl >= LH.day1 + 120 ? 1 : 0} pressingNext={cl >= LH.next && cl < LH.next + 220} style={{ opacity: overlay * (1 - seg(cl, LH.results + 80, LH.results + 420)) }} />
          )}
          {(done || cl >= LH.results) && (
            <MotorResults l={l} chosen={done || cl >= LH.room ? 0 : null} bookIn={done ? 1 : easeOutExpo(seg(cl, LH.book, LH.book + 420))} style={{ transform: `translate3d(0, ${((1 - results) * 100).toFixed(2)}%, 0)` }} />
          )}
        </LinkhubPage>
      </div>
      {tSearch && <Tap lt={cl} at={LH.tap} x={tSearch.x} y={tSearch.y} />}
      {t21 && <Tap lt={cl} at={LH.day1} x={t21.x} y={t21.y} />}
      {t23 && <Tap lt={cl} at={LH.day2} x={t23.x} y={t23.y} />}
      {tNext && <Tap lt={cl} at={LH.next} x={tNext.x} y={tNext.y} />}
      {tRoom && <Tap lt={cl} at={LH.room} x={tRoom.x} y={tRoom.y} />}
    </div>
  );
}

const IA = { ask: 150, s1: 420, s2: 800, answer: 1200 };
const TO = { ask: 100, s1: 350, s2: 700, block: 950, synth: 1650 };
const RV = { cursorIn: 250, toBtn: 600, click: 850, applied: 960 };

/** Revenue con el cursor que acepta la primera recomendación. */
export function RevenueCard({ cl, v }: { cl: number; v: VideoDict }) {
  const done = cl < 0;
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useOffsets(rootRef, ['[data-accept="0"]']);
  const btn = rects['[data-accept="0"]'];
  const bc = btn ? { x: btn.x + btn.w / 2, y: btn.y + btn.h / 2 } : { x: 700, y: 300 };
  const keys: CursorKey[] = btn ? [{ at: RV.cursorIn, x: bc.x - 220, y: bc.y + 160 }, { at: RV.toBtn, ...bc }, { at: RV.click, ...bc, click: true }, { at: RV.click + 400, x: bc.x + 40, y: bc.y + 70 }] : [];
  return (
    <div ref={rootRef} className={s.appRoot}>
      <PmsShell active="revenue" labels={shellLabels(v)} tabs={v.ui.rmsTabs} activeTab={6} width={APP_W} height={APP_H}>
        <RevenuePage recs={recs(v, done || cl >= RV.applied)} labels={v.ui.revenue} pressing={!done && cl >= RV.click && cl < RV.click + 200 ? 0 : null} />
      </PmsShell>
      {!done && <Cursor lt={cl} keys={keys} />}
    </div>
  );
}

/** El contenido de cada tarjeta grande (la pantalla real de cada app), con su reloj `cl`. */
export function CardContent({ spec, cl, v }: { spec: CardKey; cl: number; v: VideoDict }) {
  const done = cl < 0;
  const sh = shellLabels(v);
  switch (spec) {
    case "reservas": {
      const bar = done || cl >= 520 ? { start: 7, nights: 3 } : null;
      return (
        <PmsShell active="bookings" labels={sh} tabs={v.ui.bookingTabs} activeTab={2} width={APP_W} height={APP_H}>
          <Calendar days={calDays(v)} occupancy={OCCUPANCY} categories={calCategories(v, bar)} labels={calLabels(v)} colW={52} labelW={108} />
        </PmsShell>
      );
    }
    case "linkhub":
      return <LinkhubCard cl={cl} v={v} />;
    case "revenue":
      return <RevenueCard cl={cl} v={v} />;
    case "tourism": {
      const turn = v.chat.turns[1];
      const steps = turn.steps
        .map((st, j) => ({ label: st.label, tool: st.tool, at: j === 0 ? TO.s1 : TO.s2 }))
        .filter((st) => done || cl >= st.at)
        .map((st) => ({ label: st.label, tool: st.tool, running: !done && cl < st.at + 300 }));
      const synth = done ? turn.answer : cl >= TO.synth ? turn.answer.slice(0, Math.ceil((cl - TO.synth) / STREAM_MS)) : "";
      return (
        <PmsShell active="ia" labels={sh} width={APP_W} height={APP_H}>
          <ChatPage
            v={v}
            ask={turn.ask}
            steps={steps}
            answer=""
            streaming={false}
            thinking={!done && cl < TO.block}
            showAsk={done || cl >= TO.ask}
            block={
              (done || cl >= TO.block) && (
                <TourismCard
                  block
                  title={v.tourism.title}
                  updated={v.tourism.updated}
                  metrics={tourismMetrics(v, cl, TO.block + 60, 140)}
                  reveal={done ? 4 : v.tourism.metrics.filter((_, k) => cl >= TO.block + 60 + k * 140).length}
                  alert={v.tourism.alert}
                  alertOn={done || cl >= TO.block + 620}
                  synthesis={synth}
                  streaming={!done && cl < TO.synth + turn.answer.length * STREAM_MS}
                  more={v.tourism.more}
                />
              )
            }
          />
        </PmsShell>
      );
    }
    case "ia": {
      const c = v.iaCard;
      const steps = c.steps
        .map((st, j) => ({ st, at: j === 0 ? IA.s1 : IA.s2 }))
        .filter(({ at }) => done || cl >= at)
        .map(({ st, at }) => ({ label: st.label, tool: st.tool, running: !done && cl < at + 320 }));
      const answer = done ? c.answer : cl >= IA.answer ? c.answer.slice(0, Math.ceil((cl - IA.answer) / STREAM_MS)) : "";
      return (
        <PmsShell active="ia" labels={sh} width={APP_W} height={APP_H}>
          <ChatPage v={v} ask={c.ask} steps={steps} answer={answer} streaming={!done && cl < IA.answer + c.answer.length * STREAM_MS} thinking={!done && cl < IA.answer} showAsk={done || cl >= IA.ask} />
        </PmsShell>
      );
    }
    case "staypass":
      return (
        <div className={s.phone}>
          <div className={s.phoneNotch} />
          <div className={s.phoneScreen}>
            <StayShell labels={v.ui.stay}>
              <div style={rise(done ? 1 : easeOutQuint(seg(cl, 220, 800)), 18, 6)}>
                <StayCard greeting={v.stay.greeting} sub={v.stay.sub} badge={v.stay.badge} codeLabel={v.stay.codeLabel} code="BK-4790" copy={v.stay.copy} stayLabel={v.stay.stayLabel} hotel={v.stay.hotel} dates={v.stay.dates} />
              </div>
            </StayShell>
          </div>
        </div>
      );
    case "rooms":
      return (
        <PmsShell active="rooms" labels={sh} tabs={v.ui.roomsTabs} activeTab={0} width={APP_W} height={APP_H}>
          <RoomsBoard units={hotelUnits(v, "available")} labels={v.ui.rooms} unitLabels={unitLabels(v)} />
        </PmsShell>
      );
    case "reports":
      return (
        <PmsShell active="reports" labels={sh} width={APP_W} height={APP_H}>
          <Reports l={v.ui.reports} />
        </PmsShell>
      );
  }
}

/* ------------------------------------------------ la tarjeta vertical ---- */

export const MODULES: CardKey[] = ["reservas", "rooms", "linkhub", "revenue", "tourism", "ia", "staypass", "reports"];

/** El color de canto de cada módulo (la referencia da a cada tarjeta un halo de su color). */
/**
 * El calendario de la tarjeta de Reservas. `w` = `labelW` + `days` × `colW`, y
 * `k` lo lleva al ancho útil de la tarjeta (300 − 24 de padding); el alto sale
 * de las seis unidades y llena la cara sin dejar el vacío que quedaba antes.
 */
/** La tarjeta de LinkHub: la página entera, escalada para entrar completa en la cara. */
/** La página entra ENTERA (420 × 643 con dos accesos) a 0,54: con más escala se corta, con menos el texto se empasta. */
/** La tarjeta de Estado turístico: el globo arriba y, debajo, la tarjeta del panel. */
/** La tarjeta de Roombir IA: el hilo arriba y el campo de escritura al pie de la cara. */
const IA_CARD = { w: 345, h: 349, k: 0.8 };

const TS_CARD = { globeW: 300, globeH: 132, w: 320, k: 0.68, metrics: 2 };

const LH_CARD = { w: 420, k: 0.543, blocks: 2 };

const CAL_CARD = { days: 5, colW: 64, labelW: 144, w: 496, k: 0.556 };

/**
 * El ícono de cada módulo. Antes los ocho eran el mismo cuadrado de color; cada
 * uno dibuja ahora lo suyo, en el color del módulo (`currentColor` lo hereda de
 * `.moduleHead`) y con el mismo grosor de trazo.
 */
const MODULE_ICON: Record<CardKey, ReactNode> = {
  reservas: (
    <>
      <rect x="3" y="4.8" width="18" height="16.2" rx="3" />
      <path d="M3 10h18M8 2.6v4.4M16 2.6v4.4" />
      <rect x="6.6" y="13" width="4.8" height="4.2" rx="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  rooms: (
    <>
      <path d="M3 19.5V9m0 5.5h18m0 5V13a2.5 2.5 0 0 0-2.5-2.5H11v4" />
      <circle cx="7" cy="10.6" r="2.1" />
    </>
  ),
  linkhub: (
    <>
      <path d="M10.4 13.6a4.2 4.2 0 0 0 5.9 0l2.1-2.1a4.2 4.2 0 0 0-5.9-5.9l-1.1 1.1" />
      <path d="M13.6 10.4a4.2 4.2 0 0 0-5.9 0l-2.1 2.1a4.2 4.2 0 0 0 5.9 5.9l1.1-1.1" />
    </>
  ),
  revenue: (
    <>
      <path d="M3.5 17 9 11.5l3.4 3.4L20.5 7" />
      <path d="M15.4 7h5.1v5.1" />
    </>
  ),
  tourism: (
    <>
      <path d="M12 21.2s6.8-6.2 6.8-10.8a6.8 6.8 0 1 0-13.6 0C5.2 15 12 21.2 12 21.2Z" />
      <circle cx="12" cy="10.2" r="2.5" />
    </>
  ),
  ia: (
    <>
      <path d="M11.4 3.4 13 8.6l5.2 1.6-5.2 1.6-1.6 5.2-1.6-5.2L4.6 10.2 9.8 8.6l1.6-5.2Z" />
      <path d="M18.2 15.4l.8 2.3 2.3.8-2.3.8-.8 2.3-.8-2.3-2.3-.8 2.3-.8.8-2.3Z" />
    </>
  ),
  staypass: (
    <>
      <path d="M3.2 10V7.6a1.6 1.6 0 0 1 1.6-1.6h14.4a1.6 1.6 0 0 1 1.6 1.6V10a2.4 2.4 0 0 0 0 4.8v2.4a1.6 1.6 0 0 1-1.6 1.6H4.8a1.6 1.6 0 0 1-1.6-1.6v-2.4a2.4 2.4 0 0 0 0-4.8Z" />
      <path d="M14.2 6.4v12" strokeDasharray="2 2.6" />
    </>
  ),
  reports: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="3.2" />
      <path d="M8.2 16.4v-3.6M12 16.4V8.6M15.8 16.4v-5.6" />
    </>
  ),
};

export const MODULE_COLOR: Record<CardKey, string> = {
  reservas: "#4e6b28",
  rooms: "#22c55e",
  linkhub: "#a75432",
  revenue: "#8f5b20",
  tourism: "#3b82f6",
  ia: "#4e6b28",
  staypass: "#c98a91",
  reports: "#6b7280",
};

export const MODULE_W = 300;
export const MODULE_H = 400;

/** Un pedazo de UI real escalado dentro de la tarjeta. */
function Fit({ k, w, children }: { k: number; w: number; children: ReactNode }) {
  return (
    <div className={s.moduleFit} style={{ width: w, transform: `scale(${k})` }}>
      {children}
    </div>
  );
}

/**
 * La tarjeta vertical de módulo, como las de la referencia (Chat, Calendar,
 * Brain…): cabecera con el nombre en su color y, debajo, un fragmento de la
 * pantalla real del módulo. Es la que vuela en la grilla, la pila, la rueda y
 * la fila.
 */
export function ModuleCard({ k, v, style, className }: { k: CardKey; v: VideoDict; style?: CSSProperties; className?: string }) {
  const color = MODULE_COLOR[k];
  let body: ReactNode = null;
  switch (k) {
    case "reservas":
      body = (
        <Fit k={CAL_CARD.k} w={CAL_CARD.w}>
          <Calendar days={calDays(v, CAL_CARD.days)} occupancy={OCCUPANCY.slice(0, CAL_CARD.days)} categories={calCardCategories(v)} labels={calLabels(v)} colW={CAL_CARD.colW} labelW={CAL_CARD.labelW} toolbar={false} legend={false} />
        </Fit>
      );
      break;
    case "rooms":
      body = (
        <Fit k={0.552} w={500}>
          {/* Sin barra ni leyenda: son más anchas que la tarjeta y se cortaban contra el borde. */}
          <RoomsBoard units={cardUnits(v)} labels={v.ui.rooms} unitLabels={unitLabels(v)} toolbar={false} legend={false} columns={["available", "occupied", "cleaning"]} />
        </Fit>
      );
      break;
    case "linkhub":
      // La página ENTERA (330 × 767) escalada para que entre completa y centrada
      // sobre un fondo blanco con degradados: con el recorte del teléfono sólo se
      // veía el encabezado y medio bloque de reserva.
      body = (
        <div className={s.lhStage}>
          {/* La caja mide lo ESCALADO (la escala no cambia el espacio que ocupa el elemento):
              si no, la página de 767 px se sale de la cara y se centra mal. */}
          {/* La caja mide lo que ocupa YA ESCALADO (la escala no cambia el espacio que ocupa
              el elemento) y recorta lo que sobra abajo, con un desvanecido en `.lhStage`. */}
          {/* La caja mide lo que ocupa YA ESCALADO: la escala no cambia el espacio que ocupa el elemento. */}
          <div className={s.lhScreen} style={{ width: Math.round(LH_CARD.w * LH_CARD.k), height: 349 }}>
            <div style={{ width: LH_CARD.w, transform: `scale(${LH_CARD.k})`, transformOrigin: "0 0" }}>
              <div className={s.phoneScreenLh} style={{ height: "auto", borderRadius: 0 }}>
                <LinkhubPage l={{ ...v.ui.linkhub, blocks: v.ui.linkhub.blocks.slice(0, LH_CARD.blocks) }} dates={{ in: v.ui.linkhub.inShort, out: v.ui.linkhub.outShort }} pressing={false} />
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case "revenue":
      // 0,81 y no 0,86: con 0,86 mide 368 px de alto contra los 349 de la cara
      // y, al centrarla, el recorte se comía la cabecera de arriba.
      body = (
        <Fit k={0.81} w={320}>
          <RecCard recs={recs(v, false).slice(0, 2)} labels={v.ui.revenue} />
        </Fit>
      );
      break;
    case "tourism":
      body = (
        <div className={s.tsStage}>
          {/* Arriba, el banner del panel de Roombir IA: la ciudad con el pin y la tarjeta de la propiedad. */}
          <TourismMap color={MODULE_COLOR.tourism} name={v.ui.linkhub.name} meta={v.ui.linkhub.bio} width={TS_CARD.globeW} height={TS_CARD.globeH} />
          <div className={s.tsBody}>
            <Fit k={TS_CARD.k} w={TS_CARD.w}>
              <TourismCard block title={v.tourism.title} updated={v.tourism.updated} metrics={v.tourism.metrics.slice(0, TS_CARD.metrics).map((m) => ({ label: m.label, hint: m.hint, trend: m.trend as TourismMetricData["trend"], value: m.value }))} alert={v.tourism.alert} more={v.tourism.more} />
            </Fit>
          </div>
        </div>
      );
      break;
    case "ia":
      // 20-09-2026: la cara dejó de ser un hilo ya respondido y pasó a ser el
      // ESTADO VACÍO del chat real (`RoombirChatView`, bloque `isEmpty`): orbe,
      // saludo, línea de ayuda, sugerencias y el campo al pie. Vende mejor "le
      // pedís cualquier cosa" que una respuesta suelta, y es lo primero que ve
      // cualquiera que abra Roombir IA.
      //
      // Una diferencia con el producto, a propósito: allá las sugerencias van
      // en una grilla de DOS columnas con la frase entera; en 276 px de cara
      // cada celda daría 128 px y cada frase se partiría en tres renglones. Acá
      // van como pastillas cortas que se acomodan solas.
      body = (
        <div className={s.iaStage}>
          {/* Dos cajas: la de afuera mide lo ESCALADO (si no, el chat queda pegado al borde
              izquierdo y descentrado), y la de adentro le da a `ChatShell` —alto 100 % en
              columna— el alto de la cara dividido por la escala, para empujar el campo al PIE. */}
          <div style={{ width: Math.round(IA_CARD.w * IA_CARD.k), height: IA_CARD.h, overflow: "hidden" }}>
            <div style={{ width: IA_CARD.w, height: Math.round(IA_CARD.h / IA_CARD.k), transform: `scale(${IA_CARD.k})`, transformOrigin: "0 0" }}>
              {/* Con ChatShell: los colores del chat (--ch-*) los define ese contenedor, y sin él los globos salían transparentes. */}
              <ChatShell className={s.chatPageThread}>
                <div className={s.iaEmpty}>
                  <span className={s.iaEmptyGlow} aria-hidden />
                  <h3 className={s.iaEmptyTitle}>{v.iaCard.hello}</h3>
                  <p className={s.iaEmptyText}>{v.iaCard.hint}</p>
                  <div className={s.iaChips}>
                    {v.iaCard.chips.map((c) => (
                      <span key={c} className={s.iaChip}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {/* El campo al pie, con el texto de ayuda CORTO de la tarjeta: el del chat
                    ("Pedile algo a Roombir IA") se parte en dos renglones a este ancho. */}
                <Composer text="" placeholder={v.iaCard.placeholder} sendLabel={v.chat.placeholder} />
              </ChatShell>
            </div>
          </div>
        </div>
      );
      break;
    case "staypass":
      body = (
        <Fit k={1.06} w={260}>
          <StayCard greeting={v.stay.greeting} sub={v.stay.sub} badge={v.stay.badge} codeLabel={v.stay.codeLabel} code="BK-4790" copy={v.stay.copy} stayLabel={v.stay.stayLabel} hotel={v.stay.hotel} dates={v.stay.dates} />
        </Fit>
      );
      break;
    case "reports":
      body = (
        <Fit k={0.552} w={500}>
          <Reports l={v.ui.reports} />
        </Fit>
      );
      break;
  }
  return (
    <div className={[s.moduleCard, className ?? ""].join(" ")} style={{ ["--mc" as string]: color, ...style }}>
      {/* Roombir IA lleva su marca de colores y el nombre en negro; el resto, su ícono en el color del módulo. */}
      <div className={[s.moduleHead, k === "ia" ? s.moduleHeadIa : ""].join(" ")}>
        {k === "ia" ? (
          <span className={s.moduleOrb}>
            <OrbLoader size={20} spinning={false} />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" className={s.moduleIcon} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {MODULE_ICON[k]}
          </svg>
        )}
        {v.modules[k]}
      </div>
      <div className={s.moduleBody}>{body}</div>
    </div>
  );
}
