"use client";

import { useMemo, useRef } from "react";
import { STREAM_MS, clamp01, easeIn, easeInOut, easeOut, easeOutExpo, lerp, seg, typedCount, typingOffsets } from "../video/timeline";
import { Gradient, Mark, useOffsets, type CursorKey, type Rect } from "../video/fx";
import { Check, GLine, away, cameraStyle, lift, pointerAt, smooth, type Move, type Pose } from "../video-kit/kit";
import { layKitBeats } from "../video-kit/KitPlayer";
import { MotorPhone } from "../video-kit/mobile";
import { EndCard, HeroTitle, Keys, Note, OrbitScene, TourStage } from "../video-kit/common";
import WebEditor, { type EdMsg, type EditorState } from "./ui/WebEditor";
import type { TourProps } from "./types";
import { useKitPortrait } from "../video/orientation";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import t from "./tours.module.css";

/**
 * El video de Marketing (`/video/marketing`). Sigue a la página
 * `/producto/marketing`: una web que ya sabe qué tenés libre (el LinkHub real
 * con el motor adentro), el editor web con su asistente (recorrido por la UI
 * real del constructor), el LinkHub que convierte seguidores en huéspedes, la marca cargada una
 * vez y usada en todos lados, el resto del hub y el CTA.
 *
 * Sin precios: ningún video dice cuánto cuesta nada (pedido del 23-09-2026;
 * la escena de los cinco proveedores con su precio se sacó).
 */

const WIDE: Pose = { x: 640, y: 360, z: 1 };
const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };

type P = TourProps<"marketing">;

/**
 * El logo de Hotel del Parque en el avatar del LinkHub (en vez de las iniciales
 * "HO"): un árbol —el parque— en crema sobre bordó. Como imagen, porque el
 * avatar del LinkHub real recibe una URL.
 */
const HOTEL_LOGO_URL = `data:image/svg+xml,${encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 84 84\"><defs><linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"0.4\" y2=\"1\"><stop offset=\"0\" stop-color=\"#8a2626\"/><stop offset=\"1\" stop-color=\"#4a0d0d\"/></linearGradient></defs><rect width=\"84\" height=\"84\" fill=\"url(#g)\"/><circle cx=\"42\" cy=\"42\" r=\"33\" fill=\"none\" stroke=\"#f6e7d3\" stroke-opacity=\"0.28\" stroke-width=\"1\"/><g fill=\"#f6e7d3\"><circle cx=\"42\" cy=\"31\" r=\"11\"/><circle cx=\"32.5\" cy=\"38\" r=\"8.5\"/><circle cx=\"51.5\" cy=\"38\" r=\"8.5\"/><circle cx=\"42\" cy=\"41\" r=\"9\"/><rect x=\"40.4\" y=\"44\" width=\"3.2\" height=\"14\" rx=\"1.6\"/></g><path d=\"M25 59.5 Q42 54 59 59.5\" fill=\"none\" stroke=\"#f6e7d3\" stroke-width=\"2.2\" stroke-linecap=\"round\"/></svg>")}`;

/**
 * El teléfono con el LinkHub REAL (plantilla Brasas, con su entrada y su arte animado) y el motor adentro.
 * `cl` es el reloj del flujo de reserva; `hubLt`, el de las animaciones del LinkHub (0 = cuando aparece).
 */
function Phone({ cl, hubLt, v, width }: { cl: number; hubLt: number; v: P["v"]; width: number }) {
  return <MotorPhone cl={Math.max(0, cl)} base={v.base} ui={v.mui} width={width} realHub={{ lt: hubLt, avatar: HOTEL_LOGO_URL }} />;
}

/* ========================================================= 1 · hero ===== */

function Hero({ lt, v }: P) {
  // En vertical el teléfono es alto: el titular sube para que el grupo quede centrado y no toque la barra.
  const portrait = useKitPortrait();
  const portraitTop = portrait ? -420 : 80;
  return (
    <HeroTitle lt={lt} title={v.page.hero.title} dur={5400} visualAt={1100} pScale={1} top={portraitTop}>
      {/* En vertical el teléfono es LA pieza: va grande (ancho real, no escalado, para que se vea nítido). */}
      <Phone cl={lt - 1900} hubLt={lt - 1100} v={v} width={portrait ? 480 : 172} />
    </HeroTitle>
  );
}

/* ===================================================== 2 · el editor ==== */

/**
 * El editor web con su asistente, en tres pasos:
 * 1. Se pega la captura de otra web (Ctrl + V) y se pide la portada: el chat
 *    muestra sus pasos y las secciones aparecen en el lienzo, en borrador.
 * 2. Se señala la sección Habitaciones (queda citada en el chat) y se piden
 *    dos tarjetas más: cambia esa pieza y nada más.
 * 3. Calidad del sitio: los cinco medidores, "Arreglar todo" los sube y se
 *    publica.
 */
function editorPlan(c: P["v"]["x"]["editor"]["chat"]) {
  const paste = 1500;
  const t1 = paste + 550;
  const o1 = typingOffsets(c.ask1);
  const send1 = t1 + o1[o1.length - 1] + 260;
  const step0 = send1 + 380;
  const STEP = 560;
  /** Cada paso corre `STEP` ms; la sección i entra cuando termina el paso i + 1. */
  const sec = [step0 + 2 * STEP, step0 + 3 * STEP, step0 + 4 * STEP];
  const ans1 = step0 + 4 * STEP + 200;
  const ans1End = ans1 + c.answer1.length * STREAM_MS;
  const note = ans1End + 250;
  const end1 = note + 2700;
  const click = end1 + 1200;
  const t2 = click + 750;
  const o2 = typingOffsets(c.ask2);
  const send2 = t2 + o2[o2.length - 1] + 260;
  const step2 = send2 + 380;
  const extra = step2 + 800;
  const ans2 = extra + 350;
  const ans2End = ans2 + c.answer2.length * STREAM_MS;
  const end2 = ans2End + 1900;
  const qClick = end2 + 1100;
  const fixClick = qClick + 2900;
  const fixEnd = fixClick + 1500;
  const qClose = fixEnd + 900;
  const pubClick = qClose + 900;
  const end = pubClick + 2300;
  return { cap: [400, end1, end2], paste, t1, o1, send1, step0, STEP, sec, ans1, ans1End, note, end1, click, t2, o2, send2, step2, extra, ans2, ans2End, end2, qClick, fixClick, fixEnd, qClose, pubClick, end, duration: end + 450 };
}

const Q_BEFORE = [74, 82, 88, 69, 58];
/** La ventana del editor: más ancha que la del PMS, para que entren sus dos barras en cualquier idioma. */
const EBOX = { w: 1100, h: 640, x: 90, y: 40 };
const Q_AFTER = [98, 100, 100, 100, 100];

function Editor({ lt, v }: P) {
  const l = v.x.editor;
  const c = l.chat;
  const Pl = useMemo(() => editorPlan(c), [c]);
  const appRef = useRef<HTMLDivElement>(null);

  /* ------------------------------------------------------ el estado --- */
  const typed = (text: string, offs: number[], t0: number, send: number) => (lt >= t0 && lt < send ? text.slice(0, typedCount(offs, lt - t0)) : "");
  const msgs: EdMsg[] = [];
  if (lt >= Pl.send1) {
    msgs.push({ kind: "user", text: c.ask1, shot: true });
    c.steps1.forEach((label, i) => {
      const at = Pl.step0 + i * Pl.STEP;
      if (lt >= at) msgs.push({ kind: "step", label, done: lt >= at + Pl.STEP - 90 });
    });
    if (lt >= Pl.ans1) msgs.push({ kind: "ai", text: c.answer1.slice(0, Math.ceil((lt - Pl.ans1) / STREAM_MS)), streaming: lt < Pl.ans1End });
  }
  if (lt >= Pl.send2) {
    msgs.push({ kind: "user", text: c.ask2, quote: c.quote });
    if (lt >= Pl.step2) msgs.push({ kind: "step", label: c.steps2[0], done: lt >= Pl.extra - 90 });
    if (lt >= Pl.ans2) msgs.push({ kind: "ai", text: c.answer2.slice(0, Math.ceil((lt - Pl.ans2) / STREAM_MS)), streaming: lt < Pl.ans2End });
  }
  const text = typed(c.ask1, Pl.o1, Pl.t1, Pl.send1) || typed(c.ask2, Pl.o2, Pl.t2, Pl.send2);
  const caret = (lt >= Pl.paste && lt < Pl.send1) || (lt >= Pl.click + 200 && lt < Pl.send2);
  const shot = lt < Pl.send1 ? easeOutExpo(seg(lt, Pl.paste, Pl.paste + 300)) : 0;
  const quote = lt < Pl.send2 ? easeOutExpo(seg(lt, Pl.click + 80, Pl.click + 380)) : 0;
  const fixed = easeInOut(seg(lt, Pl.fixClick + 150, Pl.fixEnd));
  const st: EditorState = {
    msgs,
    draft: { text, caret, shot, quote },
    page: {
      hero: easeOutExpo(seg(lt, Pl.sec[0], Pl.sec[0] + 700)),
      rooms: easeOutExpo(seg(lt, Pl.sec[1], Pl.sec[1] + 700)),
      reviews: easeOutExpo(seg(lt, Pl.sec[2], Pl.sec[2] + 700)),
      extra: easeOutExpo(seg(lt, Pl.extra, Pl.extra + 700)),
      selected: lt >= Pl.click && lt < Pl.end2 ? seg(lt, Pl.click, Pl.click + 150) * (1 - seg(lt, Pl.end2 - 400, Pl.end2)) : 0,
      scroll: 150 * smooth(seg(lt, Pl.extra - 200, Pl.extra + 900)),
    },
    quality: {
      open: lt < Pl.qClick ? 0 : easeOutExpo(seg(lt, Pl.qClick + 60, Pl.qClick + 460)) * (1 - easeInOut(seg(lt, Pl.qClose, Pl.qClose + 300))),
      scores: Q_BEFORE.map((b, i) => lerp(b, Q_AFTER[i], fixed)),
      fixed,
    },
    published: lt >= Pl.pubClick + 500,
    draftBadge: lt >= Pl.sec[0] && lt < Pl.pubClick + 500,
  };

  /* ------------------------------------------------------ medición ---- */
  const hasRooms = lt >= Pl.sec[1];
  const qOpen = st.quality.open > 0;
  const R = useOffsets(appRef, ['[data-ed="composer"]', '[data-ed="rooms"]', '[data-ed="quality"]', '[data-ed="fix"]', '[data-ed="publish"]', '[data-ed="draft"]'], [hasRooms, qOpen, st.draftBadge]);
  const r = (sel: string, fb: Partial<Rect>) => R[sel] ?? { ...R0, ...fb };
  const comp = r('[data-ed="composer"]', { x: 8, y: 460, w: 234, h: 140 });
  const rooms = r('[data-ed="rooms"]', { x: 272, y: 345, w: 686, h: 200 });
  const qChip = r('[data-ed="quality"]', { x: 760, y: 7, w: 90, h: 32 });
  const fix = r('[data-ed="fix"]', { x: 640, y: 290, w: 150, h: 34 });
  const pub = r('[data-ed="publish"]', { x: 860, y: 5, w: 110, h: 35 });
  const draft = r('[data-ed="draft"]', { x: 560, y: 10, w: 170, h: 26 });
  const W = (b: Rect, fx = 0.5, fy = 0.5) => ({ x: EBOX.x + b.x + b.w * fx, y: EBOX.y + b.y + b.h * fy });
  const roomsPt = W({ ...rooms, h: 40 }, 0.3, 0.6);
  const qPt = W(qChip, 0.5, 0.55);
  const fixPt = W(fix, 0.45, 0.55);
  const pubPt = W(pub, 0.5, 0.55);

  /* -------------------------------------------------------- cámara ---- */
  const moves: Move[] = [
    { t: 500, d: 1000, to: { x: 380, y: 470, z: 1.55 } },
    { t: Pl.send1 - 100, d: 1000, to: { x: 610, y: 390, z: 1.1 } },
    { t: Pl.note - 300, d: 900, to: { x: 800, y: 260, z: 1.22 } },
    { t: Pl.end1 - 200, d: 1000, to: { x: 560, y: 440, z: 1.28 } },
    { t: Pl.end2 - 500, d: 1000, to: { x: 850, y: 300, z: 1.3 } },
    { t: Pl.qClose - 200, d: 900, to: { x: 860, y: 230, z: 1.35 } },
    { t: Pl.pubClick + 900, d: 1200, to: WIDE },
  ];
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  /* ------------------------------------------------------- puntero ---- */
  const keys: CursorKey[] = [
    { at: Pl.end1 - 100, x: roomsPt.x + 120, y: roomsPt.y + 170 },
    { at: Pl.click - 150, x: roomsPt.x, y: roomsPt.y },
    { at: Pl.click, x: roomsPt.x, y: roomsPt.y, click: true },
    { at: Pl.click + 900, x: roomsPt.x + 60, y: roomsPt.y + 140 },
    { at: Pl.qClick - 900, x: qPt.x - 120, y: qPt.y + 160 },
    { at: Pl.qClick - 120, x: qPt.x, y: qPt.y },
    { at: Pl.qClick, x: qPt.x, y: qPt.y, click: true },
    { at: Pl.fixClick - 900, x: fixPt.x + 40, y: fixPt.y - 60 },
    { at: Pl.fixClick - 120, x: fixPt.x, y: fixPt.y },
    { at: Pl.fixClick, x: fixPt.x, y: fixPt.y, click: true },
    { at: Pl.pubClick - 800, x: pubPt.x - 40, y: pubPt.y + 90 },
    { at: Pl.pubClick - 120, x: pubPt.x, y: pubPt.y },
    { at: Pl.pubClick, x: pubPt.x, y: pubPt.y, click: true },
    { at: Pl.pubClick + 900, x: pubPt.x - 60, y: pubPt.y + 130 },
  ];
  const ptr = pointerAt(keys, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, Pl.end1 - 300, Pl.end1)) * (1 - easeIn(seg(lt, Pl.click + 700, Pl.click + 950))) + easeOut(seg(lt, Pl.qClick - 1100, Pl.qClick - 850)) * (1 - easeIn(seg(lt, Pl.pubClick + 800, Pl.pubClick + 1100)));

  const keysP = easeOutExpo(seg(lt, Pl.paste - 550, Pl.paste - 250)) * (1 - seg(lt, Pl.paste + 700, Pl.paste + 950));

  return (
    <TourStage
      lt={lt}
      dur={Pl.duration}
      camStyle={camStyle}
      appRef={appRef}
      captions={l.captions}
      capAt={Pl.cap}
      pointer={{ x: ps.x, y: ps.y, pressed: ptr.pressed, ripples: ptr.ripples, opacity: clamp01(ptrOn) }}
      appBox={EBOX}
      app={<WebEditor l={l} st={st} width={EBOX.w} height={EBOX.h} />}
      overlays={
        <>
          <Keys keys={["Ctrl", "V"]} p={keysP} pressed={lt >= Pl.paste - 120 && lt < Pl.paste + 80} x={comp.x + comp.w + 150} y={comp.y + 40} />
          <Note lt={lt} at={Pl.note} out={Pl.end1 - 300} box={{ x: draft.x - 110, y: draft.y + 110 }} to={{ x: draft.x + draft.w / 2, y: draft.y + draft.h / 2 }} ring={{ w: draft.w, h: draft.h }} title={l.notes.draft.t} text={l.notes.draft.d} width={280} />
        </>
      }
    />
  );
}

/* ============================== 3 · seguidores que reservan (LinkHub) === */

// Al ritmo de la voz (locuciones/marketing): el titular; con "reservan ahí mismo" entra el primer punto;
// con "Quien llega desde Instagram…", los otros tres. El teléfono reserva a media velocidad para acompañar.
const CN = { title: 150, em: 800, p1: 3300, p2: 10800, pLag: 1500, phone: 600, flow: 1400, speed: 0.5, out: 17550, end: 18000 };
const cnPoint = (i: number) => (i === 0 ? CN.p1 : CN.p2 + (i - 1) * CN.pLag);

function Connected({ lt, v }: P) {
  // Vertical: el titular y los puntos arriba, el teléfono debajo.
  const portrait = useKitPortrait();
  const q = smooth(seg(lt, CN.out, CN.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / CN.end));
  const ph = easeOutExpo(seg(lt, CN.phone, CN.phone + 900));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={t.sideCopy} style={portrait ? { left: 220, top: -440, width: 840 } : { left: 100, top: 130, width: 690 }}>
          <h2 className={k.display} style={{ textAlign: "left" }}>
            <GLine text={v.x.linkhub.title} lt={lt} at={CN.title} emAt={CN.em} />
          </h2>
          <div className={t.readsList}>
            {v.x.linkhub.points.map((r, i) => (
              <span key={r} className={t.read} style={lift(lt, cnPoint(i), 14, 6)}>
                <span className={t.readCheck}>
                  <Check />
                </span>
                {r}
              </span>
            ))}
          </div>
        </div>
        <div className={t.phoneBox} style={{ left: portrait ? 410 : 800, top: portrait ? 10 : 38, opacity: clamp01(ph * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - ph) * 60).toFixed(1)}px, 0)`, filter: ph < 0.98 ? `blur(${((1 - ph) * 10).toFixed(1)}px)` : undefined }}>
          <Phone cl={(lt - CN.flow) * CN.speed} hubLt={lt - CN.phone} v={v} width={portrait ? 460 : 300} />
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ========================================================= 3 · marca ==== */

const SWATCHES = ["#2f4d18", "#4e6b28", "#c8e293", "#e9dcc4", "#14150f"];

function Brand({ lt, v }: P) {
  const b = v.x.brand;
  return (
    <OrbitScene
      lt={lt}
      dur={7200}
      dark={false}
      title={v.page.brand.title}
      chips={b.targets}
      ring={{ cx: 640, cy: 430, rx: 480, ry: 180 }}
      center={{
        at: 500,
        node: (
          <div className={t.brand}>
            <div className={t.brandTop}>
              <span className={t.brandLogo}>HP</span>
              <span>
                <div className={t.brandSub}>{b.title}</div>
                <div className={t.brandName}>{b.name}</div>
              </span>
            </div>
            <div className={t.swatches}>
              {SWATCHES.map((c, i) => (
                <i key={c} style={{ background: c, ...lift(lt, 1200 + i * 90, 8, 3) }} />
              ))}
            </div>
            <div className={t.swatchNote}>{b.palette}</div>
            <div className={t.brandRows}>
              <div className={t.brandRow} style={lift(lt, 1800, 8, 3)}>
                <span>{b.tone}</span>
                <b>{b.toneValue}</b>
              </div>
              <div className={t.brandRow} style={lift(lt, 1950, 8, 3)}>
                <span>{b.font}</span>
                <b>{b.fontValue}</b>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
}

/* ===================================================== 5 · el hub ======= */

/** Los íconos del menú Marketing del PMS (`dashboardChromeShared.tsx:216-239`), en su orden. */
const MENU_ICONS = [
  <path key="web" d="M3 5h18v14H3zM3 9h18" />,
  <path key="brand" d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.6-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.2-9-7.2zM7.5 12.5h.01M9.5 8h.01M14.5 8h.01" />,
  <path key="gal" d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6" />,
  <path key="rev" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  <path key="link" d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
  <path key="files" d="M4 5a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />,
];

/** Un ícono por función del mosaico, en el orden de `hub.chips`. */
const TILE_ICONS = [
  <path key="0" d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15 9h.01" />,
  <path key="1" d="M6 3v12a3 3 0 0 0 3 3h12M3 6h12a3 3 0 0 1 3 3v12" />,
  <path key="2" d="M4 4h16v16H4zM4 9h16M9 9v11" />,
  <path key="3" d="M4 15V5h16v10H9l-5 4zM8 9h8M8 12h5" />,
  <path key="4" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM18 14h2M14 18h2" />,
  <path key="5" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />,
  <path key="6" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />,
  <path key="7" d="M4 5h9M8.5 3v2M6 5c1 4 4 7 7 8M11 5c-1 4-4 7-7 8M13 21l4-9 4 9M14.5 18h5" />,
  <path key="8" d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM21 21l-4.3-4.3" />,
  <path key="9" d="M12 8V4H8M4 12h16v8H4zM9 16h.01M15 16h.01M2 16h2M20 16h2" />,
];

const HB = { dur: 7800, menu: 400, rows: 700, rowLag: 110, walk: 2200, step: 700, tiles: 1000, tileLag: 90, wave: 2600, waveStep: 380 };

/**
 * Todo lo demás del hub, como un mosaico: el menú real de Marketing a la
 * izquierda (el resaltado lo recorre) y las diez funciones en baldosas que se
 * van encendiendo de a una.
 */
function Hub({ lt, v }: P) {
  // Vertical: el menú arriba y el mosaico debajo.
  const portrait = useKitPortrait();
  const h = v.x.hub;
  const q = smooth(seg(lt, HB.dur - 450, HB.dur));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / HB.dur));
  // Los dos recorridos van una sola vez y se quedan en el último (no vuelven al primero).
  const on = lt < HB.walk ? -1 : Math.min(h.menu.length - 1, Math.floor((lt - HB.walk) / HB.step));
  const wave = lt < HB.wave ? -1 : Math.min(h.chips.length - 1, Math.floor((lt - HB.wave) / HB.waveStep));
  const menu = easeOutExpo(seg(lt, HB.menu, HB.menu + 900));
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 5000} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 50 }}>
          <h2 className={k.displaySm}>
            <GLine text={h.title} lt={lt} at={100} emAt={650} tone="paper" />
          </h2>
          <p className={k.subPaper} style={lift(lt, 900, 14, 6)}>
            {v.x.one}
          </p>
        </div>
        <div className={t.hubMenu} style={{ position: "absolute", left: portrait ? 490 : 80, top: portrait ? 190 : 230, opacity: clamp01(menu * 1.4).toFixed(3), transform: `translate3d(${((1 - menu) * -40).toFixed(1)}px, 0, 0)` }}>
          <div className={t.hubMenuHead}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Marketing
          </div>
          {h.menu.map((m, i) => (
            <div key={m} className={[t.hubRow, i === on ? t.hubRowOn : ""].join(" ")} style={lift(lt, HB.rows + i * HB.rowLag, 10, 4)}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {MENU_ICONS[i]}
              </svg>
              {m}
            </div>
          ))}
        </div>
        <div className={t.bento} style={portrait ? { left: 245, top: 540, width: 790 } : { left: 410, top: 230, width: 790 }}>
          {h.chips.map((c, i) => (
            <div key={c} className={[t.tile, i === wave ? t.tileOn : ""].join(" ")} style={lift(lt, HB.tiles + i * HB.tileLag, 18, 8)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {TILE_ICONS[i % TILE_ICONS.length]}
              </svg>
              {c}
            </div>
          ))}
        </div>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

function End({ lt, v }: P) {
  return <EndCard lt={lt} cta={v.page.cta.title} tagline={v.page.hero.title} />;
}

export const MARKETING = {
  beats: (v: P["v"]) =>
    layKitBeats([
      { id: "hero", dur: 5400, enter: "fade", enterDur: 400 },
      { id: "editor", dur: editorPlan(v.x.editor.chat).duration },
      { id: "connected", dur: CN.end },
      { id: "brand", dur: 7200 },
      { id: "hub", dur: HB.dur },
      { id: "end", dur: 5600 },
    ]),
  scenes: { hero: Hero, editor: Editor, connected: Connected, brand: Brand, hub: Hub, end: End },
  posterAt: ["connected", 4200] as [string, number],
  /** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/ (ver KitEmbed). */
  /** Zoom de cada escena en el corte vertical (`?view=mobile`, ver video-kit/portrait.tsx); sin dato, 1,3. */
  pzoom: {editor: 1.1,connected: 1.3,brand: 1.2,hub: 1.3},
  anchors: (v: P["v"]): Record<string, number[]> => ({ hero: [150], editor: [...editorPlan(v.x.editor.chat).cap], connected: [CN.title, CN.p1, CN.p2], brand: [100], hub: [100, 900], end: [150, 3350] }),
};
