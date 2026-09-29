"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, seg } from "../video/timeline";
import { Mark, useOffsets, type CursorKey, type Rect } from "../video/fx";
import PmsShell from "../video/pms/PmsShell";
import Dashboard from "../video/pms/Dashboard";
import Calendar from "../video/pms/Calendar";
import { RevenuePage } from "../video/pms/Revenue";
import StatusBadge, { type ReservationStatus } from "../video/pms/StatusBadge";
import { OCCUPANCY, calCategories, calDays, recs } from "../video/acts/data";
import { GLine, away, cameraStyle, lift, pointerAt, smooth, type Move, type Pose } from "../video-kit/kit";
import { layKitBeats } from "../video-kit/KitPlayer";
import { MOTOR_FLOW, MOTOR_W, MotorPhone, phoneScale } from "../video-kit/mobile";
import { PROMO_CODE } from "../video-kit/motor-real";
import { APP, EndCard, Fade, HeroTitle, Note, TourStage } from "../video-kit/common";
import type { TourProps } from "./types";
import { useKitPortrait } from "../video/orientation";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import t from "./tours.module.css";

/**
 * El video del Motor de reservas (`/video/motor`). Sigue a la página
 * `/producto/motor`: la reserva de punta a punta (sus estados), lo que ve el
 * huésped en el LinkHub con el motor adentro, un recorrido por lo que ves vos
 * —entra al panel del día, ocupa su noche en el calendario, el precio de esa
 * noche sale de Revenue—, las promociones (con código o automáticas, a la
 * vista en cada habitación), las diez monedas con el importe congelado y el CTA.
 */

type P = TourProps<"motor">;

const WIDE: Pose = { x: 640, y: 360, z: 1 };
/** La escala del tablero del panel del día dentro de la ventana de 980 px. */
const DASH_K = 0.86;
const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };

/* ========================================================= 1 · hero ===== */

const FLOW: ReservationStatus[] = ["pending", "confirmed", "checked-in", "checked-out"];

function Hero({ lt, v }: P) {
  const st = v.base.status;
  const labels: Record<string, string> = { pending: st.pending, confirmed: st.confirmed, "checked-in": st.checkedIn, "checked-out": st.checkedOut };
  const row = v.base.ui.dashboard.rows[0];
  const step = Math.max(0, Math.min(3, Math.floor((lt - 1900) / 620)));
  return (
    <HeroTitle lt={lt} title={v.page.hero.title} dur={5200} visualAt={1200} pScale={1.1}>
      <div className={t.pmsTokens} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
        <div className={t.catCard} style={{ width: 500, display: "flex", alignItems: "center", gap: 14, padding: "10px 18px 10px 10px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={t.bookPhoto} src="/video/tours/superior.jpg" alt="" />
          <div style={{ flex: 1 }}>
            <h3>{row.guest}</h3>
            <div className={t.catMeta}>
              {row.inDate} → {row.outDate} · {row.nights} · {row.cat}
            </div>
          </div>
          <div style={{ fontSize: 22, fontWeight: 650 }}>{row.total}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, transform: "scale(1.45)" }}>
          {FLOW.map((s, i) => {
            const on = i <= step && lt >= 1900;
            return (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 14, opacity: on ? 1 : 0.35, filter: on ? undefined : "grayscale(1)" }}>
                {i > 0 && <span style={{ color: "#94a3b8", fontSize: 14 }}>→</span>}
                <StatusBadge status={s} label={labels[s]} />
              </div>
            );
          })}
        </div>
      </div>
    </HeroTitle>
  );
}

/* ================================================ 2 · lo que ve el huésped */

// El flujo del teléfono va al 75 %: cada nota tiene que leerse antes de que la pantalla cambie.
const GU = { title: 150, em: 800, phone: 700, flow: 1300, speed: 0.75, price: 2700, units: 3700, notesOut: 5200, photos: 7700, out: 11050, end: 11500 };
// Título a la izquierda, teléfono al centro y notas a la derecha: las líneas entran al
// teléfono por su borde derecho y señalan días de la última columna, sin cruzar el calendario.
const PHONE = { x: 500, y: 26, w: 320 };
const NOTE_X = 880;

function Guest({ lt, v }: P) {
  // Vertical (`?view=mobile`): el titular arriba y centrado, el teléfono al medio y las notas debajo.
  const portrait = useKitPortrait();
  const PHN = portrait ? { x: 420, y: -40, w: 440 } : PHONE;
  const n = v.x.notes;
  const q = smooth(seg(lt, GU.out, GU.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / GU.end));
  const ph = easeOutExpo(seg(lt, GU.phone, GU.phone + 900));
  const cl = Math.max(0, (lt - GU.flow) * GU.speed);
  const phoneRef = useRef<HTMLDivElement>(null);
  const R = useOffsets(phoneRef, ["[data-flow]"], []);
  // Los puntos llegan del motor real en px lógicos de la pantalla: se llevan al escenario.
  type Pt = { x: number; y: number; w: number; h: number };
  const [pts, setPts] = useState<Record<string, Pt>>({});
  const onPoints = useCallback((p: Record<string, Pt>) => setPts((o) => ({ ...o, ...p })), []);
  const ks = phoneScale(PHN.w, MOTOR_W);
  const pt = (key: string, fb: Pt) => {
    const p = pts[key];
    const o = R["[data-flow]"];
    return p && o ? { x: PHN.x + o.x + p.x * ks, y: PHN.y + o.y + p.y * ks, w: p.w * ks, h: p.h * ks } : fb;
  };
  const d28 = pt("d28", { x: 790, y: 360, w: 36, h: 44 });
  const d21 = pt("d21", { x: 790, y: 320, w: 36, h: 44 });
  const room = pt("room1", { x: 740, y: 240, w: 130, h: 180 });
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={t.sideCopy} style={portrait ? { left: 190, top: -430, width: 900, textAlign: "center" } : { left: 80, top: 90, width: 390 }}>
          <h2 className={k.displaySm} style={{ textAlign: portrait ? "center" : "left" }}>
            <GLine text={v.page.guest.title} lt={lt} at={GU.title} emAt={GU.em} />
          </h2>
        </div>
        <div ref={phoneRef} className={t.phoneBox} style={{ left: PHN.x, top: PHN.y, opacity: clamp01(ph * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - ph) * 60).toFixed(1)}px, 0)`, filter: ph < 0.98 ? `blur(${((1 - ph) * 10).toFixed(1)}px)` : undefined }}>
          <MotorPhone cl={cl} base={v.base} ui={v.mui} width={PHN.w} onPoints={onPoints} />
        </div>
        <Note lt={lt} at={GU.price} out={GU.notesOut} box={portrait ? { x: 290, y: 890 } : { x: NOTE_X, y: d28.y + 30 }} to={d28} ring={{ w: d28.w, h: d28.h }} title={n.price.t} text={n.price.d} num={1} width={340} big />
        <Note lt={lt} at={GU.units} out={GU.notesOut} box={portrait ? { x: 650, y: 890 } : { x: NOTE_X, y: d21.y - 150 }} to={d21} ring={{ w: d21.w, h: d21.h }} title={n.units.t} text={n.units.d} num={2} width={340} big />
        <Note lt={lt} at={GU.photos} box={portrait ? { x: 470, y: 890 } : { x: NOTE_X, y: room.y - 40 }} to={room} ring={{ w: room.w, h: room.h }} title={n.photos.t} text={n.photos.d} num={3} width={340} big />
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ================================================== 3 · promociones ==== */

/**
 * Las promociones, en el motor real: en el paso de viajeros se escribe el
 * código de reserva directa y, al buscar, cada habitación trae la etiqueta del
 * descuento, el nombre de la promo y el precio de siempre tachado (captura
 * `PROMO=1 scripts/capture-motor.cjs`). Mismo encuadre que la escena anterior.
 */
// Al ritmo de la voz (locuciones/motor): el titular; con "Automáticas o con código" se tipea el código;
// con "Y aparecen donde el huésped decide" llegan los resultados con la etiqueta y el precio tachado.
const PR = { title: 150, em: 800, phone: 500, type: 2700, typeStep: 120, codeNote: 3000, go: 8300, badgeNote: 9900, out: 17550, end: 18000 };
/** El teléfono se queda en viajeros (`hold`) hasta `go`; después corre hasta los resultados y ahí se queda. */
const PR_HOLD = MOTOR_FLOW.guests + 300;
const PR_STOP = MOTOR_FLOW.results + 500;

function Promos({ lt, v }: P) {
  // Vertical (`?view=mobile`): el titular arriba y centrado, el teléfono al medio y las notas debajo.
  const portrait = useKitPortrait();
  const PHN = portrait ? { x: 420, y: -40, w: 440 } : PHONE;
  const n = v.x.promos.notes;
  const q = smooth(seg(lt, PR.out, PR.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / PR.end));
  const ph = easeOutExpo(seg(lt, PR.phone, PR.phone + 900));
  const cl = lt < PR.go ? PR_HOLD : Math.min(PR_STOP, PR_HOLD + (lt - PR.go));
  const code = PROMO_CODE.slice(0, Math.max(0, Math.floor((lt - PR.type) / PR.typeStep) + 1));
  const phoneRef = useRef<HTMLDivElement>(null);
  const R = useOffsets(phoneRef, ["[data-flow]"], []);
  type Pt = { x: number; y: number; w: number; h: number };
  const [pts, setPts] = useState<Record<string, Pt>>({});
  const onPoints = useCallback((p: Record<string, Pt>) => setPts((o) => ({ ...o, ...p })), []);
  const ks = phoneScale(PHN.w, MOTOR_W);
  const pt = (key: string, fb: Pt) => {
    const p = pts[key];
    const o = R["[data-flow]"];
    return p && o ? { x: PHN.x + o.x + p.x * ks, y: PHN.y + o.y + p.y * ks, w: p.w * ks, h: p.h * ks } : fb;
  };
  const inp = pt("code", { x: 660, y: 470, w: 250, h: 40 });
  const badge = pt("badge0", { x: 560, y: 200, w: 50, h: 24 });
  const price = pt("promo0", { x: 660, y: 330, w: 250, h: 24 });
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={t.sideCopy} style={portrait ? { left: 190, top: -430, width: 900, textAlign: "center" } : { left: 80, top: 90, width: 390 }}>
          <h2 className={k.displaySm} style={{ textAlign: portrait ? "center" : "left" }}>
            <GLine text={v.x.promos.title} lt={lt} at={PR.title} emAt={PR.em} />
          </h2>
        </div>
        <div ref={phoneRef} className={t.phoneBox} style={{ left: PHN.x, top: PHN.y, opacity: clamp01(ph * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - ph) * 60).toFixed(1)}px, 0)`, filter: ph < 0.98 ? `blur(${((1 - ph) * 10).toFixed(1)}px)` : undefined }}>
          <MotorPhone cl={cl} base={v.base} ui={v.mui} width={PHN.w} onPoints={onPoints} promo code={lt >= PR.type ? code : ""} />
        </div>
        <Note lt={lt} at={PR.codeNote} out={PR.go - 300} box={portrait ? { x: 470, y: 890 } : { x: NOTE_X, y: inp.y - 50 }} to={inp} ring={{ w: inp.w, h: inp.h }} title={n.code.t} text={n.code.d} num={1} width={340} big />
        <Note lt={lt} at={PR.badgeNote} box={portrait ? { x: 470, y: 890 } : { x: NOTE_X, y: badge.y - 20 }} to={badge} ring={{ w: badge.w, h: badge.h }} title={n.badge.t} text={n.badge.d} num={2} width={340} big />
        {lt >= PR.badgeNote + 500 && <span className={t.promoRing} style={{ left: price.x - price.w / 2 - 6, top: price.y - price.h / 2 - 4, width: price.w + 12, height: price.h + 8, opacity: seg(lt, PR.badgeNote + 500, PR.badgeNote + 900).toFixed(3) }} />}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ===================================================== 4 · recorrido ==== */

/**
 * 1. La reserva entra al panel del día (fila nueva arriba + aviso).
 * 2. Ocupa sus noches en el calendario: la 103, del 21 al 23.
 * 3. El precio de esa noche sale de Revenue: se acepta la recomendación del
 *    sábado y la cadena de precio muestra de qué escalón sale.
 */
function plan() {
  const arrive = 1500;
  const end1 = arrive + 5200;
  const calIn = end1;
  const bar = calIn + 1400;
  const end2 = bar + 4400;
  const revIn = end2;
  const click = revIn + 3600;
  const chain = click + 900;
  const end = chain + 4200;
  return { cap: [400, end1, end2], arrive, end1, calIn, bar, end2, revIn, click, chain, end, duration: end + 450 };
}

function Tour({ lt, v }: P) {
  const x = v.x;
  const b = v.base;
  const Pl = useMemo(() => plan(), []);
  const appRef = useRef<HTMLDivElement>(null);
  const screen: "dash" | "cal" | "rev" = lt < Pl.calIn ? "dash" : lt < Pl.revIn ? "cal" : "rev";

  const R = useOffsets(appRef, ["[data-dash]", "tbody tr", '[class*="tableCard"]', '[data-cal-row="103"]', '[data-accept="0"]', '[data-rec="0"]'], [screen, lt >= Pl.arrive]);
  const r = (sel: string, fb: Partial<Rect>) => R[sel] ?? { ...R0, ...fb };
  // El tablero está hecho para la ventana de 1120 px del video de portada: acá va a escala
  // (DASH_K) para que la tabla entre entera. Lo medido adentro se lleva a esa escala.
  const dash = R["[data-dash]"];
  const sk = (q: Rect) => (dash ? { x: dash.x + (q.x - dash.x) * DASH_K, y: dash.y + (q.y - dash.y) * DASH_K, w: q.w * DASH_K, h: q.h * DASH_K } : q);
  const card = sk(r('[class*="tableCard"]', { x: 80, y: 230, w: 600, h: 300 }));
  // La fila es más ancha que su tarjeta (las celdas desbordan): el aro se corta en la tarjeta.
  const tr0 = sk(r("tbody tr", { x: 90, y: 260, w: 640, h: 48 }));
  const tr = { ...tr0, w: Math.min(tr0.w, card.x + card.w - tr0.x - 10) };
  const row = r('[data-cal-row="103"]', { x: 12, y: 260, w: 900, h: 34 });
  const acc = r('[data-accept="0"]', { x: 800, y: 150, w: 90, h: 34 });
  const rec = r('[data-rec="0"]', { x: 90, y: 130, w: 860, h: 110 });
  const accPt = { x: APP.x + acc.x + acc.w / 2, y: APP.y + acc.y + acc.h / 2 };
  const barX = APP.x + row.x + 150 + 9.5 * 52;

  const moves: Move[] = [
    { t: Pl.arrive - 700, d: 900, to: { x: APP.x + tr.x + 330, y: APP.y + tr.y + 20, z: 1.4 } },
    { t: Pl.end1 - 700, d: 700, to: WIDE },
    { t: Pl.bar - 800, d: 900, to: { x: barX - 120, y: APP.y + row.y + 17, z: 1.45 } },
    { t: Pl.end2 - 700, d: 700, to: WIDE },
    { t: Pl.revIn + 500, d: 900, to: { x: APP.x + rec.x + rec.w / 2, y: APP.y + rec.y + rec.h / 2 + 20, z: 1.35 } },
    { t: Pl.chain - 100, d: 900, to: { x: 820, y: 330, z: 1.2 } },
  ];
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  const keys: CursorKey[] = [
    { at: Pl.click - 900, x: accPt.x - 140, y: accPt.y + 160 },
    { at: Pl.click - 130, x: accPt.x, y: accPt.y },
    { at: Pl.click, x: accPt.x, y: accPt.y, click: true, down: true },
    { at: Pl.click + 160, x: accPt.x, y: accPt.y, up: true },
    { at: Pl.click + 900, x: accPt.x + 40, y: accPt.y + 140 },
  ];
  const ptr = pointerAt(keys, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, Pl.click - 1100, Pl.click - 850)) * (1 - easeIn(seg(lt, Pl.click + 700, Pl.click + 1000)));

  const d = b.ui.dashboard;
  const rows = lt >= Pl.arrive ? d.rows : d.rows.slice(1);
  const ring = seg(lt, Pl.arrive, Pl.arrive + 250) * (1 - seg(lt, Pl.end1 - 600, Pl.end1 - 300));
  const toast = easeOutExpo(seg(lt, Pl.arrive + 200, Pl.arrive + 600)) * (1 - seg(lt, Pl.end1 - 600, Pl.end1 - 300));
  const days = calDays(b, 14, 12, 2);
  const cats = calCategories(b, lt >= Pl.bar ? { start: 9, nights: 2 } : null);
  const applied = lt >= Pl.click + 120;
  const chain = easeOutExpo(seg(lt, Pl.chain, Pl.chain + 500));
  const stepOn = (i: number) => lt >= Pl.chain + 500 + i * 260;
  const first = rows[0];
  const barRing = seg(lt, Pl.bar + 250, Pl.bar + 500) * (1 - seg(lt, Pl.end2 - 700, Pl.end2 - 400));
  const bx = barX - APP.x;

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
        <PmsShell active={screen === "dash" ? "home" : screen === "cal" ? "bookings" : "revenue"} labels={b.ui.shell} tabs={screen === "cal" ? b.ui.bookingTabs : screen === "rev" ? b.ui.rmsTabs : undefined} activeTab={screen === "cal" ? 2 : 6} width={APP.w} height={APP.h} round>
          <div style={{ position: "absolute", inset: 0 }}>
            <Fade lt={lt} a={0} b={Pl.calIn}>
              <div data-dash="" style={{ width: `${(100 / DASH_K).toFixed(3)}%`, height: `${(100 / DASH_K).toFixed(3)}%`, transform: `scale(${DASH_K})`, transformOrigin: "0 0" }}>
                <Dashboard rows={rows as never} labels={d as never} values={{ active: lt >= Pl.arrive ? "15" : "14", occupancy: "78%" }} />
              </div>
            </Fade>
            <Fade lt={lt} a={Pl.calIn} b={Pl.revIn}>
              <Calendar days={days} occupancy={OCCUPANCY} categories={cats} labels={b.ui.calendar} colW={52} labelW={150} legend={false} />
            </Fade>
            <Fade lt={lt} a={Pl.revIn}>
              <RevenuePage recs={recs(b, applied)} labels={b.ui.revenue} pressing={lt >= Pl.click && lt < Pl.click + 200 ? 0 : null} />
            </Fade>
          </div>
        </PmsShell>
      }
      overlays={
        <>
          {screen === "dash" && ring > 0 && <div className={t.ring} style={{ left: tr.x - 4, top: tr.y - 2, width: tr.w + 8, height: tr.h + 4, opacity: ring.toFixed(3), borderColor: "#4e6b28", boxShadow: "0 0 0 6px rgba(78, 107, 40, 0.14)" }} />}
          {screen === "dash" && toast > 0 && (
            <div className={[t.toast, t.toastOk].join(" ")} style={{ left: tr.x + 330, top: tr.y - 78, opacity: toast.toFixed(3), transform: `translate3d(0, ${((1 - toast) * 10).toFixed(1)}px, 0)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={t.toastPhoto} src="/video/tours/superior.jpg" alt="" />
              <span>
                <b>
                  {d.newBooking} · {first.guest}
                </b>
                <small>
                  {x.source} · {first.total}
                </small>
              </span>
            </div>
          )}
          {screen === "cal" && barRing > 0 && (
            <>
              <div className={t.ring} style={{ left: bx - 4, top: row.y, width: 2 * 52 + 8, height: row.h, opacity: barRing.toFixed(3), borderColor: "#4e6b28", boxShadow: "0 0 0 6px rgba(78, 107, 40, 0.14)" }} />
            </>
          )}
          <Note lt={lt} at={Pl.arrive + 1400} out={Pl.end1 - 500} box={{ x: tr.x + 10, y: tr.y - 165 }} to={{ x: tr.x + 200, y: tr.y + 8 }} title={x.notes.row.t} text={x.notes.row.d} width={280} />
          <Note lt={lt} at={Pl.bar + 700} out={Pl.end2 - 400} box={{ x: bx - 360, y: row.y - 130 }} to={{ x: bx + 20, y: row.y + row.h / 2 }} title={x.notes.bar.t} text={x.notes.bar.d} width={270} />
          <Note lt={lt} at={Pl.click - 2300} out={Pl.click + 300} box={{ x: acc.x - 340, y: acc.y - 120 }} to={{ x: acc.x + acc.w / 2, y: acc.y }} title={x.notes.accept.t} text={x.notes.accept.d} width={280} />
          {screen === "rev" && chain > 0 && (
            <div className={t.chain} style={{ position: "absolute", right: 30, top: 150, zIndex: 45, opacity: chain.toFixed(3), transform: `translate3d(${((1 - chain) * 30).toFixed(1)}px, 0, 0)` }}>
              <div className={t.chainTitle}>{x.chain.title}</div>
              {x.chain.steps.map((s, i) => (
                <div key={s} className={[t.chainStep, i === 0 && stepOn(4) ? t.chainWin : ""].join(" ")} style={{ opacity: stepOn(i) ? 1 : 0.25 }}>
                  <b>{i + 1}</b>
                  {s}
                </div>
              ))}
              <div className={t.chainValue} style={lift(lt, Pl.chain + 1700, 8, 4)}>
                {x.chain.winner}
              </div>
            </div>
          )}
        </>
      }
    />
  );
}

/* ======================================================= 5 · monedas ==== */

/**
 * El selector de moneda: las diez monedas en una rueda que gira dos vueltas y
 * frena en el dólar (la que eligió el huésped). Al lado, lo que vio el huésped
 * y lo que cobrás, unidos por el candado de la cotización congelada. Todo
 * sale de `lt`: la rueda es una posición, no un estado.
 */
const CU = { title: 100, em: 650, wheel: 300, spin: 500, stop: 3300, card: 1500, link: 3400, note: 3900, out: 6950, end: 7400 };
const WHEEL = { x: 100, y: 230, w: 420, h: 360 };
const ROW = 58;
const LOCK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

function Currency({ lt, v }: P) {
  // Vertical: la rueda arriba, la tarjeta debajo y el candado entre las dos, en vertical.
  const portrait = useKitPortrait();
  const WH = portrait ? { ...WHEEL, x: 430, y: 150 } : WHEEL;
  const f = v.x.frozen;
  const list = v.x.currencies;
  const N = list.length;
  const q = smooth(seg(lt, CU.out, CU.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / CU.end));
  const wIn = easeOutExpo(seg(lt, CU.wheel, CU.wheel + 800));
  // Dos vueltas enteras y frena en el índice 0 (el dólar).
  const pos = 2 * N * easeOut(seg(lt, CU.spin, CU.stop));
  const landed = seg(lt, CU.stop - 150, CU.stop + 250);
  const card = easeOutExpo(seg(lt, CU.card, CU.card + 900));
  const link = easeInOut(seg(lt, CU.link, CU.link + 500));
  const lock = easeOutExpo(seg(lt, CU.link + 350, CU.link + 800));
  const cy = WH.y + WH.h / 2;
  const x0 = WH.x + WH.w - 6;
  const x1 = 660;
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 60 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.x.currencyTitle} lt={lt} at={CU.title} emAt={CU.em} />
          </h2>
        </div>
        <div className={t.wheel} style={{ left: WH.x, top: WH.y, width: WH.w, height: WH.h, opacity: clamp01(wIn * 1.4).toFixed(3), transform: `translate3d(0, ${((1 - wIn) * 40).toFixed(1)}px, 0)` }}>
          <div className={t.wheelBand} style={{ boxShadow: landed > 0 ? `0 18px 44px rgba(20,21,15,0.14), 0 0 0 ${(2 * landed).toFixed(2)}px #9cc25a` : undefined }} />
          {list.map((c, i) => {
            let rel = (((i - pos) % N) + N) % N;
            if (rel >= N / 2) rel -= N;
            if (Math.abs(rel) > 3.2) return null;
            const [sym, ...rest] = c.split(" · ");
            return (
              <div key={c} className={t.wheelItem} style={{ transform: `translate3d(0, ${(rel * ROW).toFixed(1)}px, 0) rotateX(${(-rel * 17).toFixed(2)}deg) scale(${(1 - Math.abs(rel) * 0.07).toFixed(3)})`, opacity: (1 - Math.abs(rel) * 0.24).toFixed(3) }}>
                <b>{sym}</b>
                {rest.join(" · ")}
              </div>
            );
          })}
        </div>
        {link > 0 && <div className={t.lockLink} style={portrait ? { left: 640, top: WH.y + WH.h - 6, width: 100, transform: `rotate(90deg) scaleX(${link.toFixed(4)})` } : { left: x0, top: cy, width: x1 - x0, transform: `scaleX(${link.toFixed(4)})` }} />}
        {lock > 0 && (
          <div className={t.lockBadge} style={{ left: portrait ? 640 : (x0 + x1) / 2, top: portrait ? WH.y + WH.h + 44 : cy, opacity: lock.toFixed(3), transform: `scale(${(0.6 + 0.4 * lock).toFixed(3)})` }}>
            {LOCK_ICON}
          </div>
        )}
        <div style={{ position: "absolute", left: portrait ? 390 : x1, top: portrait ? WH.y + WH.h + 100 : cy - 105, opacity: clamp01(card * 1.4).toFixed(3), transform: portrait ? `translate3d(0, ${((1 - card) * 60).toFixed(1)}px, 0)` : `translate3d(${((1 - card) * 60).toFixed(1)}px, 0, 0)`, filter: card < 0.98 ? `blur(${((1 - card) * 10).toFixed(1)}px)` : undefined }}>
          <div className={t.frozen} style={{ width: 500, boxShadow: "0 30px 70px rgba(20, 21, 15, 0.16)", border: "1px solid rgba(20, 21, 15, 0.06)" }}>
            <div className={t.frozenRow}>
              <span>{f.guestLabel}</span>
              <b>{f.guestValue}</b>
            </div>
            <div className={t.frozenRow}>
              <span>{f.youLabel}</span>
              <b>{f.youValue}</b>
            </div>
            <div className={t.frozenNote} style={lift(lt, CU.note, 8, 4)}>
              {LOCK_ICON}
              {f.note}
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

export const MOTOR = {
  beats: () =>
    layKitBeats([
      { id: "hero", dur: 5200, enter: "fade", enterDur: 400 },
      { id: "guest", dur: GU.end },
      { id: "promos", dur: PR.end },
      { id: "tour", dur: plan().duration },
      { id: "currency", dur: 7400 },
      { id: "end", dur: 5600 },
    ]),
  scenes: { hero: Hero, guest: Guest, promos: Promos, tour: Tour, currency: Currency, end: End },
  posterAt: ["tour", 3200] as [string, number],
  /** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/ (ver KitEmbed). */
  /** Zoom de cada escena en el corte vertical (`?view=mobile`, ver video-kit/portrait.tsx); sin dato, 1,3. */
  pzoom: {tour: 1.1,guest: 1.3,promos: 1.3,currency: 1.3},
  anchors: (v: P["v"]): Record<string, number[]> => ({ hero: [150], guest: [GU.title, GU.price], promos: [PR.title, PR.codeNote, PR.badgeNote], tour: [...plan().cap], currency: [100, 1500], end: [150, 3350] }),
};
