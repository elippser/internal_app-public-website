"use client";

import { useMemo, useRef, type ReactNode } from "react";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, easeOutQuint, lerp, seg, typedCount } from "../video/timeline";
import { Gradient, LockupStill, Mark, useOffsets, type CursorKey, type Rect } from "../video/fx";
import PmsShell from "../video/pms/PmsShell";
import { GLine, Check, Pointer, StepCaptions, away, cameraStyle, lift, pointerAt, smooth, type Move, type Pose } from "../video-kit/kit";
import type { KitSceneProps } from "../video-kit/KitPlayer";
import { PropertyCard, PropsStructure, ScopeMenu, SearchModal } from "./ui";
import Calendar, { type CalBar, type CalCategory } from "../video/pms/Calendar";
import { OCCUPANCY, calDays } from "../video/acts/data";
import { planTutorial, type PropsBeatId, type PropsVideoDict } from "./timeline";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import s from "./props.module.css";

/**
 * Las cinco escenas del video de Propiedades. El arco sigue a la página
 * `/producto/propiedades`: el titular del hero con las dos propiedades bajo un
 * mismo usuario; un recorrido de cuatro pasos sobre la UI real que muestra la
 * ORGANIZACIÓN (cada propiedad con su tipo y su estructura, sus reservas en su
 * moneda, el cambio de propiedad y el buscador), no el alta; "cada persona, sólo lo suyo"; "todo
 * cuelga de la propiedad"; y el CTA de la página.
 */

type Props = KitSceneProps<PropsVideoDict>;

const typedText = (tp: { start: number; offsets: number[] }, text: string, lt: number) => (lt < tp.start ? "" : text.slice(0, typedCount(tp.offsets, lt - tp.start)));

/* ========================================================= 1 · hero ===== */

const HE = { title: 150, em: 850, owner: 1300, cards: 1750, cardLag: 160, lines: 2300, linesDur: 700, chips: 2900, chipLag: 160, out: 4350, end: 4800 };
// Las tarjetas y sus etiquetas tienen que terminar arriba de la barra del
// reproductor (~656 px): con cy 520 las etiquetas quedaban debajo.
const HERO_CARDS = [
  { cx: 395, cy: 462 },
  { cx: 885, cy: 462 },
];

export function HeroScene({ lt, v }: Props) {
  const x = v.x;
  const q = smooth(seg(lt, HE.out, HE.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / HE.end));
  const lineP = easeInOut(seg(lt, HE.lines, HE.lines + HE.linesDur));
  const ownerY = 300;
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} style={{ opacity: seg(lt, 0, 900).toFixed(3) }} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 70 }}>
          <h1 className={k.displayLg}>
            <GLine text={v.page.hero.title} lt={lt} at={HE.title} emAt={HE.em} lag={90} />
          </h1>
        </div>
        {/* Las líneas del usuario a cada propiedad: una sola cuenta, dos propiedades. */}
        <svg className={s.lines} viewBox="0 0 1280 720" aria-hidden>
          {HERO_CARDS.map((c, i) => {
            const d = `M 640 ${ownerY + 26} C 640 ${ownerY + 80}, ${c.cx} ${c.cy - 140}, ${c.cx} ${c.cy - 78}`;
            return <path key={i} d={d} pathLength={1} fill="none" stroke="#4e6b28" strokeWidth="2" strokeDasharray={`${lineP.toFixed(4)} 1`} strokeLinecap="round" opacity="0.55" />;
          })}
        </svg>
        <div className={s.owner} style={{ top: ownerY, ...lift(lt, HE.owner, 18, 8) }}>
          <span className={s.ownerAvatar}>{x.owner.initials}</span>
          <span className={s.ownerName}>{x.owner.name}</span>
          <span className={s.ownerRole}>{x.owner.role}</span>
        </div>
        {[x.hotel, x.cabins].map((p, i) => {
          const at = HE.cards + i * HE.cardLag;
          const e = easeOutExpo(seg(lt, at, at + 800));
          const c = HERO_CARDS[i];
          const chipAt = HE.chips + i * HE.chipLag;
          return (
            <div key={p.name} className={s.heroCard} style={{ left: c.cx, top: c.cy, opacity: clamp01(e * 1.6).toFixed(3), transform: `translate(-50%, -50%) translate3d(${((1 - e) * (i ? 120 : -120)).toFixed(1)}px, 0, 0) scale(1.3)`, filter: e < 0.98 ? `blur(${((1 - e) * 10).toFixed(1)}px)` : undefined }}>
              <div className={s.heroCardInner}>
                <PropertyCard p={p} v={x} />
              </div>
              <div className={s.heroChips} style={lift(lt, chipAt, 10, 6)}>
                <span className={s.heroChip}>
                  <small>{x.chips.currency}</small>
                  {p.currency}
                </span>
                <span className={s.heroChip}>
                  <small>{x.chips.timezone}</small>
                  {x.chips.tz}
                </span>
                <span className={s.heroChip}>
                  <small>{x.chips.language}</small>
                  {p.language}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ===================================================== 2 · recorrido ==== */

/** La ventana del PMS: centrada y grande, como en el video de Roombir IA. */
const APP = { w: 980, h: 620, x: 150, y: 50 };
const WIDE: Pose = { x: 640, y: 360, z: 1 };

const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };
const mid = (r: Rect) => ({ x: APP.x + r.x + r.w / 2, y: APP.y + r.y + r.h / 2 });

/** Las reservas del hotel: tres categorías con su pool de habitaciones. */
function hotelCalendar(v: PropsVideoDict): CalCategory[] {
  const g = v.base.ui.calendar.guests;
  const c = v.base.ui.calendar.cats;
  return [
    {
      name: c[0].name,
      color: "#eab308",
      count: 6,
      avail: 1,
      rate: c[0].rate,
      rows: [
        { unit: "101", bars: [{ start: 1, nights: 4, status: "confirmed", name: g[0], pax: 2 }, { start: 7, nights: 3, status: "pending", name: g[1], pax: 2, paid: false }] },
        { unit: "102", bars: [{ start: 2, nights: 6, status: "confirmed", name: g[2], pax: 3 }] },
        { unit: "103", bars: [{ start: 0, nights: 3, status: "checked-in", name: g[3], pax: 2 }, { start: 5, nights: 4, status: "confirmed", name: g[4], pax: 2 }] },
      ],
    },
    {
      name: c[1].name,
      color: "#22c55e",
      count: 4,
      avail: 1,
      rate: c[1].rate,
      rows: [
        { unit: "201", bars: [{ start: 0, nights: 5, status: "checked-in", name: g[1], pax: 2 }] },
        { unit: "202", bars: [{ start: 3, nights: 4, status: "confirmed", name: g[0], pax: 2 }, { start: 9, nights: 3, status: "pending", name: g[2], pax: 2, paid: false }] },
      ],
    },
    {
      name: "Suite",
      color: "#8b5cf6",
      count: 2,
      avail: 0,
      rate: v.x.suiteRate,
      rows: [{ unit: "301", bars: [{ start: 4, nights: 5, status: "confirmed", name: g[3], pax: 4 }] }],
    },
  ];
}

/** Las reservas de las cabañas: se venden por unidad, cada cabaña en su fila. */
function cabinCalendar(v: PropsVideoDict): CalCategory[] {
  const r = v.x.cabinRows;
  const u = v.x.cabinUnits;
  const last = (n: string) => n.split(" ").slice(-1)[0];
  const plan: [number, number, number, CalBar["status"]][] = [
    [0, 1, 3, "checked-in"],
    [1, 0, 4, "checked-in"],
    [2, 3, 4, "confirmed"],
    [3, 2, 2, "pending"],
    [4, 5, 3, "confirmed"],
    [5, 8, 4, "confirmed"],
  ];
  return [
    {
      name: v.x.cabins.type,
      color: "#4e6b28",
      count: 6,
      avail: 1,
      rate: v.x.cabinRate,
      rows: u.map((name, i) => {
        const [g, start, nights, status] = plan[i];
        return { unit: name, bars: [{ start, nights, status, name: last(r[g % r.length].guest), pax: 2, paid: status !== "pending" }] };
      }),
    },
  ];
}

export function TutorialScene({ lt, v }: Props) {
  const x = v.x;
  const P = useMemo(() => planTutorial(x), [x]);
  const appRef = useRef<HTMLDivElement>(null);

  /* ------------------------------------------------ estado de la UI --- */
  // Hasta el final queda el calendario de la propiedad elegida: con el panel del
  // día de fondo, "Top categorías" mostraba las del hotel estando en Cabañas.
  const screen: "org" | "cal" = lt < P.calIn ? "org" : "cal";
  const hotelP = Math.max(0, (lt - P.hotelTree) / 450);
  const cabinP = Math.max(0, (lt - P.cabinTree) / 450);
  const orgOut = seg(lt, P.calIn - 250, P.calIn + 150);
  const calIn = seg(lt, P.calIn - 100, P.calIn + 350);

  const menuP = lt < P.cabinClick + 80 ? easeOut(seg(lt, P.chipClick + 40, P.chipClick + 240)) : 1 - seg(lt, P.cabinClick + 80, P.cabinClick + 260);
  const current = lt >= P.cabinClick ? "cabins" : "hotel";
  const hot = lt >= P.cabinClick - 450 && lt < P.cabinClick + 80 ? "cabins" : null;
  const calSwap = smooth(seg(lt, P.cabinClick + 100, P.cabinClick + 600));
  const searchP = easeOut(seg(lt, P.searchIn, P.searchIn + 350));
  const query = typedText(P.tQuery, x.search.query, lt);
  const reveal = Math.max(0, (lt - P.results) / 170);
  const hotResult = lt >= P.results + 1000 ? 0 : -1;

  /* ------------------------------------------------------ medición ---- */
  const R = useOffsets(appRef, ['[data-col="hotel"]', '[data-col="cabins"]', "header > div > span:nth-child(2)", '[data-scope="cabins"]'], [screen, menuP > 0.5]);
  const r = (sel: string, fb: Partial<Rect> = {}) => R[sel] ?? { ...R0, ...fb };
  const colH = mid(r('[data-col="hotel"]', { x: 85, y: 70, w: 440, h: 420 }));
  const colC = mid(r('[data-col="cabins"]', { x: 537, y: 70, w: 440, h: 420 }));
  const chip = mid(r("header > div > span:nth-child(2)", { x: 250, y: 10, w: 150, h: 30 }));
  const cabinItem = mid(r('[data-scope="cabins"]', { x: 250, y: 110, w: 250, h: 46 }));

  /* -------------------------------------------------------- cámara ---- */
  const moves: Move[] = [
    // 1 · cada propiedad con su tipo
    { t: P.hotelTree - 500, d: 800, to: { x: colH.x, y: colH.y + 10, z: 1.3 } },
    { t: P.cabinTree - 300, d: 900, to: { x: colC.x, y: colC.y + 10, z: 1.3 } },
    { t: P.end1 - 1200, d: 800, to: WIDE },
    // 2 · sus reservas: el calendario recorrido de izquierda a derecha
    { t: P.calIn + 500, d: 800, to: { x: 470, y: 400, z: 1.3 } },
    { t: P.calPan, d: 3400, to: { x: 820, y: 400, z: 1.3 } },
    { t: P.end2 - 500, d: 700, to: WIDE },
    // 3 · cambiar de propiedad arriba → las cabañas
    { t: P.chipClick - 900, d: 700, to: { x: chip.x + 130, y: chip.y + 100, z: 1.6 } },
    { t: P.cabinClick + 250, d: 800, to: { x: 500, y: 400, z: 1.3 } },
    { t: P.cabinClick + 1200, d: 2400, to: { x: 780, y: 400, z: 1.3 } },
    // 4 · un solo buscador
    { t: P.kbdAt - 700, d: 700, to: WIDE },
    { t: P.searchIn + 200, d: 700, to: { x: 640, y: 250, z: 1.3 } },
  ];
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  /* ------------------------------------------------------- puntero ---- */
  // El puntero aparece sólo donde hace falta un gesto: cambiar de propiedad.
  const keysP: CursorKey[] = [
    { at: P.chipClick - 700, x: chip.x + 60, y: chip.y + 110 },
    { at: P.chipClick - 130, x: chip.x, y: chip.y },
    { at: P.chipClick, x: chip.x, y: chip.y, click: true, down: true },
    { at: P.chipClick + 160, x: chip.x, y: chip.y, up: true },
    { at: P.cabinClick - 130, x: cabinItem.x, y: cabinItem.y },
    { at: P.cabinClick, x: cabinItem.x, y: cabinItem.y, click: true, down: true },
    { at: P.cabinClick + 160, x: cabinItem.x, y: cabinItem.y, up: true },
    { at: P.cabinClick + 800, x: cabinItem.x + 60, y: cabinItem.y + 150 },
  ];
  const ptr = pointerAt(keysP, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, P.chipClick - 950, P.chipClick - 700)) * (1 - easeIn(seg(lt, P.cabinClick + 900, P.cabinClick + 1200)));
  const kKeys = seg(lt, P.kbdAt - 500, P.kbdAt - 300) * (1 - seg(lt, P.kbdAt + 300, P.kbdAt + 500));

  /* ------------------------------------------------------- pantallas -- */
  const labels = { ...v.base.ui.shell, company: x.company, property: current === "cabins" ? x.cabins.name : x.hotel.name, space: x.invite.spaces[2].name };
  const cal = v.base.ui.calendar;
  const days = calDays(v.base, 14, 12, 2);
  const hotelCats = useMemo(() => hotelCalendar(v), [v]);
  const cabinCats = useMemo(() => cabinCalendar(v), [v]);
  const treeCats = hotelCats.map((c) => ({ name: c.name, count: c.count, color: c.color }));

  const inP = smooth(seg(lt, 0, 800));
  const q = smooth(seg(lt, P.duration - 450, P.duration));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light />
      <div className={sc.layer} style={{ opacity: (clamp01(inP * 1.4) * (1 - q * q)).toFixed(3), transform: `translate3d(0, ${((1 - inP) * 50).toFixed(1)}px, 0) scale(${lerp(1, 0.9, q).toFixed(4)})`, filter: q > 0 ? `blur(${(q * 12).toFixed(2)}px)` : inP < 0.999 ? `blur(${((1 - inP) * 10).toFixed(2)}px)` : undefined }}>
        <div className={sc.layer} style={camStyle}>
          <div ref={appRef} className={s.appWrap} style={{ left: APP.x, top: APP.y, width: APP.w, height: APP.h }}>
            <PmsShell active={screen === "org" ? "properties" : "bookings"} labels={labels} width={APP.w} height={APP.h} round>
              <div className={s.pageBox}>
                {screen === "org" && (
                  <div className={s.pageLayer} style={{ opacity: (1 - orgOut).toFixed(3) }}>
                    <PropsStructure v={x} cats={treeCats} hotelP={hotelP} cabinP={cabinP} />
                  </div>
                )}
                {screen === "cal" && (
                  <>
                    <div className={s.pageLayer} style={{ opacity: (calIn * (1 - calSwap)).toFixed(3) }}>
                      <Calendar days={days} occupancy={OCCUPANCY} categories={hotelCats} labels={cal} colW={52} labelW={178} legend={false} />
                    </div>
                    {calSwap > 0 && (
                      <div className={s.pageLayer} style={{ opacity: calSwap.toFixed(3) }}>
                        <Calendar days={days} occupancy={OCCUPANCY} categories={cabinCats} labels={cal} colW={52} labelW={178} legend={false} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </PmsShell>
            {menuP > 0 && (
              <div style={{ position: "absolute", left: chip.x - APP.x - 75, top: chip.y - APP.y + 22 }}>
                <ScopeMenu v={x} p={menuP} hot={hot} current={current} />
              </div>
            )}
            {searchP > 0 && (
              <div className={s.searchOverlay} style={{ background: `rgba(15, 23, 42, ${(0.35 * searchP).toFixed(3)})` }}>
                <div style={{ opacity: searchP.toFixed(3), transform: `translate3d(0, ${((1 - searchP) * -12).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * searchP).toFixed(4)})` }}>
                  <SearchModal v={x} query={query} reveal={reveal} hot={hotResult} />
                </div>
              </div>
            )}
          </div>
        </div>

        <Pointer x={ps.x} y={ps.y} pressed={ptr.pressed} ripples={ptr.ripples} opacity={ptrOn} />
        {kKeys > 0 && <Keys keys={["Ctrl", "K"]} p={kKeys} pressed={lt >= P.kbdAt - 60 && lt < P.kbdAt + 200} x={640} y={560} big />}
      </div>
      <StepCaptions lt={lt} captions={x.captions} at={P.cap} end={P.duration - 450} />
      <Mark tone="ink" />
    </div>
  );
}

/** Teclas del tutorial ("Ctrl" + "V"), que se hunden al apretarlas. */
function Keys({ keys, p, pressed, x, y, big }: { keys: string[]; p: number; pressed: boolean; x: number; y: number; big?: boolean }) {
  return (
    <div className={[s.keys, big ? s.keysBig : ""].join(" ")} style={{ left: x, top: y, opacity: p.toFixed(3), transform: `translate(-50%, -50%) translate3d(0, ${((1 - p) * 10).toFixed(1)}px, 0)` }}>
      {keys.map((kk, i) => (
        <span key={kk}>
          {i > 0 && <b>+</b>}
          <kbd style={pressed ? { transform: "translateY(2px)", boxShadow: "0 1px 0 #cbd5e1" } : undefined}>{kk}</kbd>
        </span>
      ))}
    </div>
  );
}

/* ======================================================= 3 · access ===== */

const AC = { title: 100, em: 550, rows: 900, rowLag: 330, line: 450, lineDur: 700, caps: 3200, capLag: 90, out: 6150, end: 6600 };

export function AccessScene({ lt, v }: Props) {
  const x = v.x;
  const q = smooth(seg(lt, AC.out, AC.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / AC.end));
  const ys = [262, 368, 474];
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 7000} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 70 }}>
          <h2 className={k.display} style={{ color: "#f2efe8" }}>
            <GLine text={v.page.access.title} lt={lt} at={AC.title} emAt={AC.em} tone="paper" />
          </h2>
        </div>
        <svg className={s.lines} viewBox="0 0 1280 720" aria-hidden>
          {x.access.people.map((pp, i) => {
            const at = AC.rows + i * AC.rowLag + AC.line;
            const p = easeInOut(seg(lt, at, at + AC.lineDur));
            const y = ys[i];
            return (
              <g key={pp.name} opacity="0.6">
                <path d={`M 470 ${y} L 560 ${y}`} pathLength={1} stroke="#c8e293" strokeWidth="2" fill="none" strokeDasharray={`${clamp01(p * 2).toFixed(4)} 1`} />
                <path d={`M 800 ${y} L 880 ${y}`} pathLength={1} stroke="#c8e293" strokeWidth="2" fill="none" strokeDasharray={`${clamp01(p * 2 - 1).toFixed(4)} 1`} />
              </g>
            );
          })}
        </svg>
        {x.access.people.map((pp, i) => {
          const at = AC.rows + i * AC.rowLag;
          const y = ys[i];
          const p2 = AC.rows + i * AC.rowLag + AC.line;
          return (
            <div key={pp.name}>
              <div className={s.person} style={{ top: y, ...lift(lt, at, 16, 8) }}>
                <span className={s.personAvatar}>{pp.initials}</span>
                <span className={s.personName}>{pp.name}</span>
              </div>
              <div className={s.pill} style={{ left: 680, top: y, ...lift(lt, p2 + 200, 10, 6) }}>
                <span className={s.pillDot} />
                {pp.space}
              </div>
              <div className={[s.pill, s.pillProp].join(" ")} style={{ left: 1010, top: y, ...lift(lt, p2 + 550, 10, 6) }}>
                {pp.scope}
              </div>
            </div>
          );
        })}
        <div className={s.caps} style={lift(lt, AC.caps, 12, 6)}>
          <span className={s.capsDots}>
            {Array.from({ length: 10 }, (_, i) => (
              <i key={i} style={{ background: lt >= AC.caps + 300 + i * AC.capLag ? "#c8e293" : "rgba(242, 239, 232, 0.2)" }} />
            ))}
          </span>
          {x.access.caps}
        </div>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* ========================================================= 4 · root ===== */

/**
 * "Todo lo demás cuelga de la propiedad": la tarjeta de la propiedad en el
 * centro y lo que cuelga de ella sale en órbita (la misma coreografía de
 * chips que el usuario aprobó en el video de IA), atado con líneas. Después el
 * teléfono cambia una vez y el cambio viaja por las líneas: cada pieza marca
 * "actualizado".
 */
const RO = { title: 100, em: 650, card: 700, out0: 1300, outLag: 90, outDur: 1100, phone: 3900, phoneSwap: 4500, pulse: 4900, pulseDur: 700, pulseLag: 60, out: 7550, end: 8000 };
const RING = { cx: 640, cy: 410, rx: 470, ry: 170 };

export function RootScene({ lt, v }: Props) {
  const x = v.x;
  const items = x.root.items;
  const q = smooth(seg(lt, RO.out, RO.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / RO.end));
  const spin = (lt / 1000) * 5;
  const card = easeOutExpo(seg(lt, RO.card, RO.card + 800));
  const swap = seg(lt, RO.phoneSwap, RO.phoneSwap + 420);
  const pos = items.map((_, i) => {
    const at = RO.out0 + i * RO.outLag;
    const o = easeOutExpo(seg(lt, at, at + RO.outDur));
    const ang = ((-90 + (i / items.length) * 360 + spin - (1 - o) * 60) * Math.PI) / 180;
    const bob = Math.sin(lt / 640 + i * 1.3) * 5 * o;
    return { o, x: RING.cx + Math.cos(ang) * RING.rx * o, y: RING.cy + Math.sin(ang) * RING.ry * o + bob };
  });
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 50 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.page.root.title} lt={lt} at={RO.title} emAt={RO.em} />
          </h2>
        </div>
        <svg className={s.lines} viewBox="0 0 1280 720" aria-hidden>
          {pos.map((p, i) => {
            const pa = RO.pulse + i * RO.pulseLag;
            const pu = seg(lt, pa, pa + RO.pulseDur);
            return (
              <g key={i}>
                <line x1={RING.cx} y1={RING.cy} x2={p.x} y2={p.y} stroke="#4e6b28" strokeWidth="1.6" opacity={(0.35 * p.o).toFixed(3)} />
                {pu > 0 && pu < 1 && <circle cx={lerp(RING.cx, p.x, easeInOut(pu))} cy={lerp(RING.cy, p.y, easeInOut(pu))} r="6" fill="#4e6b28" opacity={(1 - pu * 0.4).toFixed(3)} />}
              </g>
            );
          })}
        </svg>
        {pos.map((p, i) => {
          const done = lt >= RO.pulse + i * RO.pulseLag + RO.pulseDur;
          return (
            <div key={items[i]} className={[s.sat, done ? s.satDone : ""].join(" ")} style={{ left: p.x, top: p.y, opacity: clamp01(p.o * 2).toFixed(3), transform: `translate(-50%, -50%) scale(${lerp(0.4, 1, p.o).toFixed(3)}) rotate(${((1 - p.o) * -30).toFixed(2)}deg)`, filter: p.o < 0.98 ? `blur(${((1 - p.o) * 10).toFixed(1)}px)` : undefined }}>
              {items[i]}
              {done && (
                <span className={s.satCheck}>
                  <Check />
                </span>
              )}
            </div>
          );
        })}
        <div className={s.rootCard} style={{ opacity: clamp01(card * 1.6).toFixed(3), transform: `translate(-50%, -50%) scale(${lerp(0.7, 1.15, card).toFixed(4)})`, filter: card < 0.98 ? `blur(${((1 - card) * 12).toFixed(1)}px)` : undefined }}>
          <PropertyCard p={x.hotel} v={x} />
          <div className={s.phoneRow} style={lift(lt, RO.phone, 10, 6)}>
            <span className={s.phoneLabel}>{x.root.phoneLabel}</span>
            <span className={s.phoneValue}>
              <span style={{ opacity: (1 - swap).toFixed(3), position: swap > 0 ? "absolute" : undefined }}>{x.root.phoneOld}</span>
              {swap > 0 && <span style={{ opacity: swap.toFixed(3), color: "#2f4d18" }}>{x.root.phoneNew}</span>}
            </span>
          </div>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ========================================================== 5 · end ===== */

const EN = { line: 150, em: 900, out: 2700, logo: 3050, tag: 3350 };

export function EndScene({ lt, v }: Props) {
  const logo = easeOutQuint(seg(lt, EN.logo, EN.logo + 620));
  const drift = 1 + 0.035 * easeInOut(seg(lt, EN.logo, 5600));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light style={{ opacity: 0.8 }} />
      {lt < EN.out + 500 && (
        <div className={k.headTop} style={{ top: 250 }}>
          <h2 className={k.displayLg}>
            <GLine text={v.page.cta.title} lt={lt} at={EN.line} emAt={EN.em} out={EN.out} lag={90} />
          </h2>
        </div>
      )}
      {lt >= EN.logo && (
        <div className={sc.typeBlock} style={{ transform: `scale(${drift.toFixed(4)})` }}>
          <div className={s.endStack}>
            <div style={{ opacity: logo.toFixed(3), transform: `translate3d(0, ${((1 - logo) * 24).toFixed(1)}px, 0)`, filter: logo < 0.99 ? `blur(${((1 - logo) * 12).toFixed(1)}px)` : undefined }}>
              <LockupStill size={96} />
            </div>
            <p className={s.endTag}>
              <GLine text={v.page.hero.title} lt={lt} at={EN.tag} lag={60} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ========================================================= el mapa ====== */

export const PROPS_SCENES: Record<PropsBeatId, (p: Props) => ReactNode> = {
  hero: HeroScene,
  tutorial: TutorialScene,
  access: AccessScene,
  root: RootScene,
  end: EndScene,
};


/** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/propiedades/ (ver KitEmbed). */
export function propsVoiceAnchors(v: PropsVideoDict): Record<string, number[]> {
  return { hero: [HE.title], tutorial: [...planTutorial(v.x).cap], access: [AC.title, AC.caps], root: [RO.title, RO.phone], end: [EN.line, EN.tag] };
}
