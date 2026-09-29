"use client";

import { Fragment, useId, useRef, type CSSProperties, type ReactNode } from "react";
import type { SceneProps } from "../scenes";
import { clamp01, easeBack, easeIn, easeInExpo, easeInOut, easeOut, easeOutQuint, lerp, noise, seg } from "../timeline";
import { Camera, H, HBlur, Mark, OnPath, Stroke, Tumble, W, Words, defocus, rise, rotateIn, tokenize, useOffsets } from "../fx";
import s from "../scenes.module.css";
import { usePortrait } from "../orientation";

/**
 * Acto 1 — el problema. Calca los primeros 16 s de la referencia:
 * mapa mental con zoom → línea con punto → demasiadas apps → cuña a oscuro →
 * demasiados proveedores → laberinto (y la cadena "Tenés vos") → el punto que
 * abre a blanco → los dos zoom-through por el ojo de una letra → cielo y las
 * letras que se rompen.
 */

/* 1 · Mapa mental --------------------------------------------------------- */

/**
 * El mapa del caos: las cajas viven en coordenadas del escenario (1280×720) con
 * su ancho y su alto DECLARADOS, y las flechas se enganchan calculando el punto
 * exacto donde la recta centro-a-centro corta el borde de cada rectángulo. Por
 * eso quedan siempre pegadas a la cajita, midan lo que midan los textos de cada
 * idioma. El SVG va primero en el DOM: las flechas pasan POR DETRÁS del título,
 * que se recorta del fondo con su propio halo (`.sprawlTitle`).
 */

type Pt = { x: number; y: number };
type SprawlBox = { id: string; x: number; y: number; w: number; h: number; at: number };

const SPR_BOX: SprawlBox[] = [
  { id: "ask", x: 262, y: 40, w: 274, h: 172, at: 500 },
  { id: "in0", x: 40, y: 88, w: 146, h: 46, at: 780 },
  { id: "in1", x: 36, y: 190, w: 156, h: 64, at: 890 },
  { id: "in2", x: 44, y: 330, w: 148, h: 46, at: 1000 },
  { id: "in3", x: 52, y: 448, w: 162, h: 46, at: 1110 },
  { id: "ch0", x: 570, y: 24, w: 176, h: 64, at: 1260 },
  { id: "ch1", x: 700, y: 170, w: 164, h: 64, at: 1370 },
  { id: "ch2", x: 830, y: 26, w: 180, h: 98, at: 1480 },
  { id: "ch3", x: 1072, y: 34, w: 176, h: 98, at: 1590 },
  { id: "ch4", x: 1040, y: 176, w: 196, h: 98, at: 1700 },
  { id: "ft0", x: 190, y: 556, w: 178, h: 66, at: 1850 },
  { id: "apps", x: 436, y: 492, w: 424, h: 106, at: 1960 },
  { id: "ft1", x: 926, y: 548, w: 216, h: 86, at: 2070 },
];
const BOX_OF: Record<string, SprawlBox> = Object.fromEntries(SPR_BOX.map((b) => [b.id, b]));

/**
 * El mismo mapa en VERTICAL (720×1280, `?view=mobile`): las entradas y la
 * pregunta arriba, la cadena de consecuencias a la derecha, el titular al medio
 * y las apps con los dos remates abajo. Mismos tiempos (`at`) que el horizontal.
 */
const SPR_BOX_P: SprawlBox[] = [
  { id: "ask", x: 222, y: 70, w: 274, h: 172, at: 500 },
  { id: "in0", x: 22, y: 50, w: 146, h: 46, at: 780 },
  { id: "in1", x: 18, y: 140, w: 156, h: 64, at: 890 },
  { id: "in2", x: 22, y: 250, w: 148, h: 46, at: 1000 },
  { id: "in3", x: 18, y: 336, w: 162, h: 46, at: 1110 },
  { id: "ch0", x: 526, y: 44, w: 176, h: 64, at: 1260 },
  { id: "ch1", x: 540, y: 176, w: 164, h: 64, at: 1370 },
  { id: "ch2", x: 510, y: 300, w: 180, h: 98, at: 1480 },
  { id: "ch3", x: 500, y: 438, w: 176, h: 98, at: 1590 },
  { id: "ch4", x: 238, y: 400, w: 196, h: 98, at: 1700 },
  { id: "ft0", x: 36, y: 820, w: 178, h: 66, at: 1850 },
  { id: "apps", x: 148, y: 990, w: 424, h: 106, at: 1960 },
  { id: "ft1", x: 470, y: 812, w: 216, h: 86, at: 2070 },
];
const BOX_OF_P: Record<string, SprawlBox> = Object.fromEntries(SPR_BOX_P.map((b) => [b.id, b]));



/** `bow` curva la flecha (fracción del largo); `fade` la apaga en la cola, para cruzar el título. */
type SprawlLink = { a: string; b: string; bow: number; fade?: boolean; both?: boolean };

const SPR_LINK: SprawlLink[] = [
  { a: "in0", b: "ask", bow: -0.06 },
  { a: "in1", b: "ask", bow: -0.04 },
  { a: "in2", b: "ask", bow: 0.07, fade: true },
  { a: "in3", b: "ask", bow: 0.09, fade: true },
  { a: "ask", b: "ch0", bow: -0.1 },
  { a: "ch0", b: "ch1", bow: 0.1 },
  { a: "ch1", b: "ch2", bow: -0.1 },
  { a: "ch2", b: "ch3", bow: -0.16 },
  { a: "ch2", b: "ch4", bow: 0.1 },
  { a: "ch3", b: "ft1", bow: 0.06 },
  { a: "ch4", b: "ft1", bow: -0.08 },
  { a: "ask", b: "apps", bow: -0.05, fade: true },
  { a: "ask", b: "ft0", bow: 0.07, fade: true },
  { a: "ch0", b: "apps", bow: 0.05, fade: true },
  { a: "ch1", b: "apps", bow: -0.04, fade: true },
  { a: "ch2", b: "apps", bow: 0.06, fade: true },
  { a: "ft0", b: "apps", bow: -0.16, both: true },
  { a: "ft0", b: "ft1", bow: 0.05 },
  { a: "ft1", b: "apps", bow: 0.18 },
];

const SPR = { l1: 0, l2: 400, arrowsDur: 420, drift: 3900, zoom: 3900, zoomEnd: 5500 };
/**
 * El pase entre la escena 1 y la 2 es el trazo mismo. El punto del título se
 * suelta por una CURVA (cae un poco y se endereza hacia la derecha: control
 * `CV` y destino `DV`, relativos al punto) mientras en pantalla va de donde
 * estaba a `HAND`; la escena 2 lo toma en `HAND` con radio `HAND_R` y sigue el
 * mismo trazo (grosor `STROKE_W`), que es la misma curva ya dibujada. `DV.x`
 * tiene que alcanzar para que TODO el mapa (hasta la caja de "8 HORAS", a la
 * derecha del punto) salga de cuadro por la izquierda: nada se apaga.
 */
const INK = "#14150f";
const HAND = { x: 900, y: 480 };
/** El centro, en el MUNDO, del garabato con sus apps (x de 590 a 1210): lo que la franja centra mientras se dibuja. */
const CURL_CX = 893;
const HAND_R = 30;
const CV = { x: 380, y: 60 };
const DV = { x: 1150, y: -40 };
const ZOOM_END = 1.5;
const STROKE_W = 12;
/** El grosor con el que termina el garabato y con el que sigue TODO el resto de la línea: un solo valor, sin escalones. */
const THIN = 3.6;
/** Cuánto viene corrida la cámara de la escena 2 al arrancar: frena en `SETTLE` ms partiendo a la velocidad con la que venía el paneo de la escena 1 (≈2,2 px/ms = CAM0·3/SETTLE), así el corte no tiene tirón. */
const CAM0 = 200;
const SETTLE = 400;

/** Sale de quieto y enseguida va a velocidad constante: `a` es la parte que dura la aceleración. */
/** Rampa suave 0→1: coseno alzado. Su pico es 1,57× la media; el `easeInOut` cúbico llega a 3×, y por eso un zoom largo con él se siente tosco. */
const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

function launch(u: number, a = 0.3): number {
  const v = 1 / (1 - a / 2);
  return u < a ? (v * u * u) / (2 * a) : v * (u - a / 2);
}
const ARROW_INK = "#a75432";

/** Dónde corta el borde del rectángulo la recta que va de su centro hacia `t`. */
function edgeOf(b: SprawlBox, t: Pt, gap = 9): Pt {
  const cx = b.x + b.w / 2;
  const cy = b.y + b.h / 2;
  const dx = t.x - cx;
  const dy = t.y - cy;
  const kx = dx === 0 ? Infinity : (b.w / 2 + gap) / Math.abs(dx);
  const ky = dy === 0 ? Infinity : (b.h / 2 + gap) / Math.abs(dy);
  const k = Math.min(kx, ky);
  return { x: cx + dx * k, y: cy + dy * k };
}

const centerOf = (b: SprawlBox): Pt => ({ x: b.x + b.w / 2, y: b.y + b.h / 2 });

/**
 * El tramo dibujado de una cuadrática, cortado POR LARGO DE ARCO (no por el
 * parámetro): así la punta cae siempre justo sobre el final de la línea.
 */
function quadSlice(p0: Pt, c: Pt, p1: Pt, p: number) {
  const N = 28;
  const pts: Pt[] = [];
  for (let i = 0; i <= N; i += 1) {
    const t = i / N;
    const u = 1 - t;
    pts.push({ x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x, y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y });
  }
  const acc: number[] = [0];
  for (let i = 1; i <= N; i += 1) acc.push(acc[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const want = acc[N] * p;
  let i = 1;
  while (i < N && acc[i] < want) i += 1;
  const span = acc[i] - acc[i - 1];
  const f = span > 0 ? clamp01((want - acc[i - 1]) / span) : 0;
  const hx = lerp(pts[i - 1].x, pts[i].x, f);
  const hy = lerp(pts[i - 1].y, pts[i].y, f);
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let k = 1; k < i; k += 1) d += ` L ${pts[k].x.toFixed(1)} ${pts[k].y.toFixed(1)}`;
  d += ` L ${hx.toFixed(1)} ${hy.toFixed(1)}`;
  const ang = (Math.atan2(pts[i].y - pts[i - 1].y, pts[i].x - pts[i - 1].x) * 180) / Math.PI;
  const tail = (Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x) * 180) / Math.PI;
  return { d, head: { x: hx, y: hy }, ang, tail, start: pts[0] };
}

function Head({ at, ang, opacity = 1 }: { at: Pt; ang: number; opacity?: number }) {
  return (
    <path
      d="M -10 -6.5 L 1.5 0 L -10 6.5"
      fill="none"
      stroke={ARROW_INK}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
      transform={`translate(${at.x.toFixed(1)} ${at.y.toFixed(1)}) rotate(${ang.toFixed(1)})`}
    />
  );
}

function SprawlArrow({ link, p, gid, boxes = BOX_OF }: { link: SprawlLink; p: number; gid: string; boxes?: Record<string, SprawlBox> }) {
  if (p <= 0.002) return null;
  const A = boxes[link.a];
  const B = boxes[link.b];
  const p0 = edgeOf(A, centerOf(B));
  const p1 = edgeOf(B, centerOf(A));
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  const c = { x: (p0.x + p1.x) / 2 - dy * link.bow, y: (p0.y + p1.y) / 2 + dx * link.bow };
  const { d, head, ang, tail, start } = quadSlice(p0, c, p1, p);
  return (
    <g>
      {link.fade && (
        <defs>
          <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y}>
            <stop offset="0" stopColor={ARROW_INK} stopOpacity="0" />
            <stop offset="0.42" stopColor={ARROW_INK} stopOpacity="0.3" />
            <stop offset="1" stopColor={ARROW_INK} stopOpacity="0.9" />
          </linearGradient>
        </defs>
      )}
      <path d={d} fill="none" stroke={link.fade ? `url(#${gid})` : ARROW_INK} strokeWidth={2.2} strokeLinecap="round" opacity={link.fade ? 1 : 0.88} />
      {p > 0.06 && <Head at={head} ang={ang} opacity={link.fade ? 0.9 : 0.88} />}
      {link.both && p > 0.55 && <Head at={start} ang={tail + 180} opacity={0.88} />}
    </g>
  );
}

/** Los textos de las cajas admiten la negrita `*así*` del guion. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {tokenize(text).map((tk, i) =>
        tk.em ? (
          <b key={i} className={s.sprawlEm}>
            {tk.text}
          </b>
        ) : (
          <Fragment key={i}>{tk.text}</Fragment>
        ),
      )}
    </>
  );
}

/* Las apps que se pagan aparte y se usan a medias --------------------------- */

type AppId = "wa" | "booking" | "abnb" | "xls" | "gmail" | "chm" | "web";

/** `use` es cuánto de la app se aprovecha de verdad: lo que dibuja el medidor. */
const SPRAWL_APPS: { id: AppId; use: number; paid?: boolean }[] = [
  { id: "wa", use: 0.85 },
  { id: "booking", use: 0.42, paid: true },
  { id: "abnb", use: 0.38, paid: true },
  { id: "xls", use: 0.58, paid: true },
  { id: "gmail", use: 0.5 },
  { id: "chm", use: 0.3, paid: true },
  { id: "web", use: 0.18, paid: true },
];

/**
 * Los iconos reales de la tira: los MISMOS archivos que la escena 2. Lo que no
 * esta aca (el Excel y la web propia) sigue con el glifo dibujado de abajo.
 */
const APP_ART: Partial<Record<AppId, string>> = {
  wa: "/video/apps/whatsapp.png",
  booking: "/video/apps/excel.png",
  abnb: "/video/apps/abnb.png",
  xls: "/video/apps/drive.png",
  gmail: "/video/apps/mail.png",
  chm: "/video/apps/chatgpt.png",
};

function AppLogo({ id, gid }: { id: AppId; gid: string }) {
  switch (id) {
    case "wa":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#25d366" />
          <path d="M13.6 12.5c1-1 2.2-.2 2.7 1l.8 2c.2.6 0 1.2-.4 1.6l-.9.8c1 2.2 2.7 3.9 4.9 4.9l.8-.9c.4-.4 1-.6 1.6-.4l2 .8c1.3.5 2.1 1.6 1 2.8-1.2 1.4-3.1 1.9-4.9 1.3-4.1-1.4-7.4-4.7-8.8-8.8-.6-1.8-.1-3.7.9-4.6z" fill="#fff" />
        </svg>
      );
    case "booking":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#003580" />
          <text x="20" y="28" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">
            B.
          </text>
        </svg>
      );
    case "abnb":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#ff5a5f" />
          <path d="M20 9.5c-1.7 0-3 1.1-3.7 2.8l-4.5 11c-.9 2.1.4 4.5 2.8 4.7 1.8.2 3.5-1 5.4-3.2 1.9 2.2 3.6 3.4 5.4 3.2 2.4-.2 3.7-2.6 2.8-4.7l-4.5-11c-.7-1.7-2-2.8-3.7-2.8zm0 5.8c1 0 1.7.8 1.7 1.8 0 1.3-1.1 2.8-1.7 3.9-.6-1.1-1.7-2.6-1.7-3.9 0-1 .7-1.8 1.7-1.8z" fill="#fff" />
        </svg>
      );
    case "xls":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#107c41" />
          <path d="M13.5 13.5l13 13M26.5 13.5l-13 13" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "gmail":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#fff" />
          <path d="M7 14.4L20 23.6l13-9.2v12.2a2.4 2.4 0 0 1-2.4 2.4H9.4A2.4 2.4 0 0 1 7 26.6z" fill="#ea4335" />
          <path d="M7 13.4a2.4 2.4 0 0 1 2.4-2.4h21.2a2.4 2.4 0 0 1 2.4 2.4l-13 9.2z" fill="#c5221f" />
        </svg>
      );
    case "chm":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#5b53c7" />
          <path d="M20 20V11M20 20v9M20 20h-9M20 20h9" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".85" />
          <circle cx="20" cy="20" r="3.6" fill="#fff" />
          <circle cx="20" cy="9.6" r="2.4" fill="#fff" />
          <circle cx="20" cy="30.4" r="2.4" fill="#fff" />
          <circle cx="9.6" cy="20" r="2.4" fill="#fff" />
          <circle cx="30.4" cy="20" r="2.4" fill="#fff" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="10" fill="#2f5d8c" />
          <rect x="7" y="10" width="26" height="20" rx="3.4" fill="#fff" />
          <path d="M7 15.2h26" stroke="#c9d4e0" strokeWidth="1.6" />
          <circle cx="10.4" cy="12.6" r="1.1" fill="#c9d4e0" />
          <circle cx="13.8" cy="12.6" r="1.1" fill="#c9d4e0" />
          <circle cx="20" cy="23" r="5.6" fill="none" stroke="#2f5d8c" strokeWidth="1.7" />
          <path d="M14.4 23h11.2M20 17.4c2.8 3.1 2.8 8.1 0 11.2M20 17.4c-2.8 3.1-2.8 8.1 0 11.2" fill="none" stroke="#2f5d8c" strokeWidth="1.3" />
        </svg>
      );
  }
}

/** La chapita de "esto lo estás pagando". */
function PaidBadge() {
  return (
    <b className={s.appPaid} aria-hidden>
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7.2" fill="#a75432" />
        <path d="M8 3.4v9.2M10.2 5.6a2.4 2.4 0 0 0-2.2-1.2c-1.3 0-2.3.8-2.3 1.9 0 2.5 4.6 1.4 4.6 3.9 0 1.1-1 1.9-2.3 1.9a2.5 2.5 0 0 1-2.3-1.3" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </b>
  );
}

/**
 * El cierre del acto: la cámara se mete en el PUNTO de "te está matando." y se
 * lo lleva hasta `HANDOFF`, del tamaño exacto con el que la escena siguiente lo
 * recibe. Primero empuja (easeOut) y recién después es un latigazo
 * (easeInExpo): el cambio de velocidad es lo que hace legible el salto.
 */
/**
 * El cierre del acto NO es un corte: es el punto de "te está matando." que se
 * desprende y se va DESLIZANDO EN LÍNEA RECTA hacia `HANDOFF` mientras la
 * cámara se le acerca despacio (`easeInOut`, sin latigazo) y el mapa se apaga
 * detrás. Cuando termina el beat no queda nada más que el punto, sobre el mismo
 * papel y del mismo tamaño con el que lo toma la escena siguiente: el corte no
 * se ve porque no hay nada que cortar.
 */
/**
 * El cierre del acto es UN punto que se desprende del "." de "te está
 * matando.", sigue de largo hacia la derecha (la dirección de lectura) y va
 * dejando un trazo, mientras la cámara se le acerca despacio y el mapa se
 * apaga detrás. La escena siguiente no "empieza": sigue ese mismo trazo desde
 * donde quedó, con el punto del mismo tamaño y a la misma velocidad.
 */
/**
 * El cierre del acto es un plano-secuencia: el punto de "te está matando." se
 * suelta hacia la derecha dejando trazo y la cámara lo sigue mientras se le
 * acerca despacio. NADA se apaga: el título y las cajas salen de cuadro
 * DESPLAZADOS por el paneo. Cuando la última letra ya salió por la izquierda,
 * en pantalla sólo quedan papel, trazo y punto, y ahí sigue la escena 2 con
 * el punto en `HAND` (mismo lugar, mismo radio, mismo grosor de trazo).
 */
export function SprawlScene({ lt, v }: SceneProps) {
  const portrait = usePortrait();
  const boxes = portrait ? SPR_BOX_P : SPR_BOX;
  const boxOf = portrait ? BOX_OF_P : BOX_OF;
  const SW = portrait ? 720 : W;
  const SH = portrait ? 1280 : H;
  // En vertical el punto se entrega donde lo recibe la escena 2 con la franja de ese instante (ver `bandX`).
  const hand = portrait ? bandPt(bandT(actState(0), 0), HAND.x, HAND.y) : HAND;
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useOffsets(rootRef, ["[data-hook-dot]"]);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const r = rects["[data-hook-dot]"];
  const ink = r ? { x: r.x + r.w / 2, y: r.y + r.h / 2, d: Math.max(5, r.w) } : { x: 868, y: 404, d: 11 };

  const drift = 1 + 0.045 * easeInOut(seg(lt, 0, SPR.drift));
  const zoomK = smooth(seg(lt, SPR.zoom, SPR.zoomEnd));
  const scale = lerp(drift, ZOOM_END, zoomK);
  // El foco se pasa al punto en 100 ms; después el punto es invariante al zoom.
  const oz = easeOut(seg(lt, SPR.zoom, SPR.zoom + 200));
  const ox = lerp(50, (ink.x / SW) * 100, oz);
  const oy = lerp(52, (ink.y / SH) * 100, oz);
  // El punto en el MUNDO va por la curva `ink → ink+CV → ink+DV` (por largo de
  // arco). En PANTALLA va de donde estaba a `HAND`; el paneo es la diferencia,
  // y es lo que hace salir todo lo demás por la izquierda.
  const slide = launch(seg(lt, SPR.zoom + 120, SPR.zoomEnd));
  const ds = { x: lerp(ink.x, hand.x, slide), y: lerp(ink.y, hand.y, slide) };
  const c1 = { x: ink.x + CV.x, y: ink.y + CV.y };
  const c2 = { x: ink.x + DV.x, y: ink.y + DV.y };
  const dw = quadSlice(ink, c1, c2, slide).head;
  const panX = ds.x - (ink.x + (dw.x - ink.x) * scale);
  const panY = ds.y - (ink.y + (dw.y - ink.y) * scale);
  // El trazo en pantalla es la misma curva pasada por la cámara (una afín conserva las fracciones de arco).
  const trail = quadSlice({ x: ink.x + panX, y: ink.y + panY }, { x: ink.x + CV.x * scale + panX, y: ink.y + CV.y * scale + panY }, { x: ink.x + DV.x * scale + panX, y: ink.y + DV.y * scale + panY }, slide);
  // El trazo, en pantalla: arranca donde quedó el punto del título (que se va con el paneo).
  const trailW = lerp(5, STROKE_W, slide);
  const dotD = lerp(ink.d * drift, HAND_R * 2, slide);
  const glow = 1 - smooth(seg(lt, SPR.zoom, SPR.zoomEnd));

  // El punto final del titular es un elemento propio, para poder medirlo.
  const tail = v.hook[1];
  const hasDot = tail.endsWith(".");
  const body = hasDot ? tail.slice(0, -1) : tail;
  const lastWord = Math.max(0, tokenize(body).filter((t) => !t.space).length - 1);
  const dotIn = easeOutQuint(seg(lt, SPR.l2 + lastWord * 90, SPR.l2 + lastWord * 90 + 520));

  const text: Record<string, string> = {
    in0: v.sprawlIn[0],
    in1: v.sprawlIn[1],
    in2: v.sprawlIn[2],
    in3: v.sprawlIn[3],
    ch0: v.sprawlChain[0],
    ch1: v.sprawlChain[1],
    ch2: v.sprawlChain[2],
    ch3: v.sprawlChain[3],
    ch4: v.sprawlChain[4],
    ft0: v.sprawlFoot[0],
    ft1: v.sprawlFoot[1],
  };

  return (
    <div ref={rootRef} className={`${s.scene} ${s.paper}`}>
      <Camera scale={scale} origin={`${ox.toFixed(2)}% ${oy.toFixed(2)}%`} x={panX} y={panY}>
        <div className={s.clayGlow} style={{ opacity: glow }} aria-hidden />
        <svg className={s.svgLayer} viewBox={`0 0 ${SW} ${SH}`} aria-hidden>
          {/* Cada flecha entra CON su caja (la más tardía de las dos), no en una segunda pasada: el mapa se arma de una sola pieza. */}
          {SPR_LINK.map((link, i) => {
            const born = Math.max(boxOf[link.a].at, boxOf[link.b].at);
            return <SprawlArrow key={i} link={link} p={easeOut(seg(lt, born, born + SPR.arrowsDur))} gid={`${uid}g${i}`} boxes={boxOf} />;
          })}
        </svg>
        <div className={s.sprawlType} style={portrait ? { top: 588 } : undefined}>
          <h2 className={s.sprawlTitle} style={portrait ? { fontSize: 64 } : undefined}>
            <Words text={v.hook[0]} lt={lt} at={SPR.l1} stagger={110} dur={520} />
            <br />
            <span className={s.subLine}>
              <Words text={body} lt={lt} at={SPR.l2} stagger={90} dur={520} />
              {hasDot && <i data-hook-dot className={s.hookDot} style={rise(dotIn, 26, 10)} />}
            </span>
          </h2>
        </div>
        {boxes.map((b) => {
          const p = easeBack(seg(lt, b.at, b.at + 400));
          if (p <= 0) return null;
          const style: CSSProperties = {
            left: b.x,
            top: b.y,
            width: b.w,
            height: b.h,
            opacity: clamp01(p * 1.6),
            transform: `scale(${(0.72 + 0.28 * p).toFixed(3)})`,
          };
          if (b.id === "ask") {
            return (
              <div key={b.id} className={`${s.sprawlBox} ${s.sprawlAsk}`} style={style}>
                {v.sprawlAsk.map((q, i) => (
                  <span key={i} className={s.askRow}>
                    <i>{i + 1}.</i>
                    <span>
                      <Rich text={q} />
                    </span>
                  </span>
                ))}
              </div>
            );
          }
          if (b.id === "apps") {
            return (
              <div key={b.id} className={`${s.sprawlBox} ${s.sprawlAppsBox}`} style={style}>
                <span className={s.appRow}>
                  {SPRAWL_APPS.map((a, i) => {
                    const ap = easeBack(seg(lt, b.at + 240 + i * 55, b.at + 680 + i * 55));
                    const fill = Math.round(a.use * 100 * seg(lt, b.at + 470 + i * 55, b.at + 890 + i * 55));
                    return (
                      <span key={a.id} className={s.appCell} style={{ opacity: clamp01(ap * 1.6), transform: `translateY(${((1 - ap) * 12).toFixed(1)}px)` }}>
                        <span className={s.appTile} style={{ transform: `rotate(${((noise(i, 9) - 0.5) * 7).toFixed(1)}deg)` }}>
                          {APP_ART[a.id] ? <img src={APP_ART[a.id]} alt="" /> : <AppLogo id={a.id} gid={`${uid}a${i}`} />}
                          {a.paid && <PaidBadge />}
                        </span>
                        <i className={s.appMeter}>
                          <i style={{ width: `${fill}%` }} />
                        </i>
                      </span>
                    );
                  })}
                </span>
                <span className={s.appLabel}>
                  <Rich text={v.sprawlApps} />
                </span>
              </div>
            );
          }
          return (
            <div key={b.id} className={`${s.sprawlBox} ${b.id.startsWith("in") ? s.sprawlIn : s.sprawlOut}`} style={style}>
              <span>
                <Rich text={text[b.id]} />
              </span>
            </div>
          );
        })}
      </Camera>
      {slide > 0.001 && (
        <svg className={s.svgLayer} viewBox={`0 0 ${SW} ${SH}`} aria-hidden>
          <path d={trail.d} fill="none" stroke={INK} strokeWidth={trailW} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {zoomK > 0.001 && <i className={s.handoffDot} style={{ left: ds.x, top: ds.y, width: dotD, height: dotD, marginLeft: -dotD / 2, marginTop: -dotD / 2, opacity: clamp01(zoomK * 14) }} aria-hidden />}
      <Mark tone="ink" />
    </div>
  );
}

/* 2 · El acto de la línea: un mundo, un reloj, una cámara ------------------ */

/**
 * De acá hasta el punto que abre a blanco hay UNA sola línea y UN solo punto,
 * que nunca se detienen ni vuelven atrás. Todo vive en un mismo mundo (la x
 * crece hacia la derecha), con un mismo reloj (`at`: ms desde que arranca el
 * garabato) y una misma cámara (`actCam`: cuánto mundo quedó a la izquierda,
 * que sólo crece). Las tres escenas —apps, proveedores, laberinto— dibujan la
 * MISMA línea entera con `ActLine`, cada una en su color y sobre su fondo:
 * en el mismo instante pintan lo mismo, así que el corte no puede notarse.
 * La cuña de la escena 3 no trae una línea nueva: recorta en blanco la que ya
 * está. Y cuando el punto llega al borde, la que se mueve es la cámara.
 */
const PAPER = "#f2efe8";
const OFF_TOOLS = 2100;
const OFF_MAZE = 4550;
/**
 * Los hitos del acto, en ms desde que arranca el garabato. Las duraciones NO
 * son redondas: salen del largo real de cada tramo y de la velocidad con la que
 * tiene que entrar y salir, para que el punto nunca pegue un tirón.
 */
/** `camEnd`: la cámara termina de acompañar ANTES de que entre el primer titular. De ahí en adelante las líneas quedan quietas y lo único que se mueve es el punto. */
const ACT = { curl: 1500, exit: 2880, loopsEnd: 3100, loops: 4550, camEnd: 6300, coil: 5190, drawn: 7500, park: 8100, maze: 8100, dash: 8350, hole: 8950 };

/** Largo de cada tramo en px (getTotalLength), y la velocidad en px/ms con la que se empalman. */
const LEN = { curl: 2618, exit: 726, drift: 55 };
/** `loops` es la velocidad con la que el punto LLEGA al final de los lazos: casi cero, o sea frena y se queda. Es tambien con la que el laberinto lo vuelve a arrancar, para que no pegue un tiron. */
const V = { curl: 1.68, exit: 1.1, coilOut: 0.4, route: 0.12, park: 0.05 };

/**
 * Progreso 0→1 que ARRANCA a `v0` y TERMINA a `v1` (velocidades normalizadas:
 * 1 = el ritmo medio del tramo). Es la Hermite con velocidades de borde, y es
 * lo que hace que la velocidad sea continua de un tramo al siguiente: sin esto,
 * un `easeInOut` entra y sale en cero y el punto frena en seco en cada empalme.
 */
function glide(u: number, v0: number, v1: number): number {
  const x = clamp01(u);
  return x + (v0 - 1) * (x - 2 * x * x + x * x * x) + (v1 - 1) * (x * x * x - x * x);
}

/** La inversa de `glide`, por bisección: en qué momento el punto pasa por `p`. */
function glideAt(p: number, v0: number, v1: number): number {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 24; i += 1) {
    const m = (lo + hi) / 2;
    if (glide(m, v0, v1) < p) lo = m;
    else hi = m;
  }
  return (lo + hi) / 2;
}

/** Velocidades normalizadas de cada tramo: la de borde dividida por su ritmo medio. */
const nv = (px: number, len: number, ms: number) => (px * ms) / len;
const EXIT_MS = ACT.exit - ACT.curl;
const LOOPS_MS2 = ACT.loops - ACT.exit;
const DRIFT_MS = ACT.park - ACT.drawn;
const EXIT_V = [nv(V.curl, LEN.exit, EXIT_MS), nv(V.exit, LEN.exit, EXIT_MS)] as const;
const DRIFT_V = [nv(V.route, LEN.drift, DRIFT_MS), nv(V.park, LEN.drift, DRIFT_MS)] as const;

/** Corre en x un trazo con M/L/H/V/C/Q absolutos. */
function shiftX(d: string, dx: number): string {
  let cmd = "M";
  let i = 0;
  return d.replace(/[A-Za-z]|-?\d+(\.\d+)?/g, (tok) => {
    if (/[A-Za-z]/.test(tok)) {
      cmd = tok;
      i = 0;
      return tok;
    }
    i += 1;
    // Los relativos (a, h, …) y la V no llevan x absoluta.
    if (cmd !== cmd.toUpperCase() || cmd === "V") return tok;
    if (cmd === "H" || i % 2 === 1) return String(Number(tok) + dx);
    return tok;
  });
}

/** Largo aproximado de un trazo `M … C …` (cúbicas), muestreado. */
function pathLen(d: string): number {
  const n = d.match(/-?\d+(\.\d+)?/g)!.map(Number);
  let x = n[0];
  let y = n[1];
  let len = 0;
  for (let i = 2; i + 5 < n.length; i += 6) {
    const [x1, y1, x2, y2, x3, y3] = n.slice(i, i + 6);
    let px = x;
    let py = y;
    for (let k = 1; k <= 24; k += 1) {
      const t = k / 24;
      const u = 1 - t;
      const qx = u * u * u * x + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3;
      const qy = u * u * u * y + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3;
      len += Math.hypot(qx - px, qy - py);
      px = qx;
      py = qy;
    }
    x = x3;
    y = y3;
  }
  return len;
}

/** Interpolación lineal por tramos sobre una tabla de nudos (x → y). */
function piecewise(knots: [number, number][], x: number): number {
  for (let i = 1; i < knots.length; i += 1) {
    if (x <= knots[i][0]) return lerp(knots[i - 1][1], knots[i][1], seg(x, knots[i - 1][0], knots[i][0]));
  }
  return knots[knots.length - 1][1];
}

/* --- la geometría, de izquierda a derecha ------------------------------- */

/** La entrada: la misma curva con la que llega el punto de la escena 1, en coordenadas de este mundo. */
const ENTRY_Q = [
  { x: HAND.x - DV.x * ZOOM_END - CAM0, y: HAND.y - DV.y * ZOOM_END },
  { x: HAND.x + (CV.x - DV.x) * ZOOM_END - CAM0, y: HAND.y + (CV.y - DV.y) * ZOOM_END },
  { x: HAND.x - CAM0, y: HAND.y },
];
const ENTRY = `M ${ENTRY_Q[0].x.toFixed(1)} ${ENTRY_Q[0].y.toFixed(1)} Q ${ENTRY_Q[1].x.toFixed(1)} ${ENTRY_Q[1].y.toFixed(1)} ${ENTRY_Q[2].x} ${ENTRY_Q[2].y}`;

/**
 * El garabato, calcado de la captura "Too many apps…" y en su orden: subida
 * pegada a "apps…" → detrás de monday → Slack → Miro → arco por arriba con los
 * dos chicos → baja por el costado → Linear → Notion → diagonal a Confluence →
 * lacito → Dropbox → Trello → punto. Cada tramo (los 3 puntos de una cúbica)
 * con su grosor: es una sola línea que adelgaza.
 */
const CURL_SEGS: { c: string }[] = [
  { c: "850 478 1050 430 1114 300" },
  { c: "1160 210 1135 100 1060 80" },
  { c: "1020 66 980 58 940 62" },
  { c: "870 70 780 72 709 97" },
  { c: "680 115 655 135 650 161" },
  { c: "700 230 830 250 922 279" },
  { c: "960 300 995 320 1022 339" },
  { c: "1048 365 1058 390 1060 416" },
  { c: "1080 460 1150 490 1180 520" },
  { c: "1200 560 1130 575 1075 555" },
  { c: "990 525 890 515 800 528" },
  { c: "720 560 706 600 736 628" },
  { c: "790 660 850 662 895 650" },
  { c: "930 645 950 630 979 612" },
  { c: "1040 580 1110 515 1153 461" },
];
const CURL_PATHS = (() => {
  let x = ENTRY_Q[2].x;
  let y = ENTRY_Q[2].y;
  return CURL_SEGS.map((sg) => {
    const d = `M ${x} ${y} C ${sg.c}`;
    const n = sg.c.split(" ").map(Number);
    x = n[4];
    y = n[5];
    return d;
  });
})();
const CURL = `M ${ENTRY_Q[2].x} ${ENTRY_Q[2].y} C ${CURL_SEGS.map((sg) => sg.c).join(" C ")}`;
/**
 * La entrada y el garabato, muestreados como UNA polilínea con su ancho en
 * cada punto. Antes eran quince `Stroke` encadenados de distinto grosor y en
 * cada empalme se veía el escalón ("se nota mucho cuando termina una línea y
 * empieza otra"): ahora se dibuja el CONTORNO de la línea como un solo relleno,
 * con el ancho interpolado, así no hay empalmes que mostrar.
 */
const TAPER = (() => {
  const pts: Pt[] = [];
  const at = (a: Pt, b: Pt, c: Pt, t: number) => ({ x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * b.x + t * t * c.x, y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * b.y + t * t * c.y });
  for (let i = 0; i <= 20; i += 1) pts.push(at(ENTRY_Q[0], ENTRY_Q[1], ENTRY_Q[2], i / 20));
  const entryEnd = pts.length - 1;
  let cur = ENTRY_Q[2];
  for (const sg of CURL_SEGS) {
    const n = sg.c.split(" ").map(Number);
    const c1 = { x: n[0], y: n[1] };
    const c2 = { x: n[2], y: n[3] };
    const p1 = { x: n[4], y: n[5] };
    for (let i = 1; i <= 14; i += 1) {
      const t = i / 14;
      const u = 1 - t;
      pts.push({
        x: u * u * u * cur.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * p1.x,
        y: u * u * u * cur.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * p1.y,
      });
    }
    cur = p1;
  }
  const acc = [0];
  for (let i = 1; i < pts.length; i += 1) acc.push(acc[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const len = acc[acc.length - 1];
  const entryLen = acc[entryEnd];
  // Ancho: constante en la entrada y afinándose a lo largo del garabato.
  const w = pts.map((_, i) => (i <= entryEnd ? STROKE_W : lerp(STROKE_W, THIN, smooth(clamp01((acc[i] - entryLen) / ((len - entryLen) * 0.72))))));
  // Normal en cada punto, para poder offsetear el contorno.
  const nrm = pts.map((_, i) => {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    const d = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    return { x: -(b.y - a.y) / d, y: (b.x - a.x) / d };
  });
  return { pts, acc, len, entryLen, w, nrm };
})();

/** El contorno de la línea hasta la fracción `p` del garabato (la entrada va siempre entera). */
function taperPath(pc: number): string {
  const want = TAPER.entryLen + (TAPER.len - TAPER.entryLen) * clamp01(pc);
  let i = 1;
  while (i < TAPER.pts.length - 1 && TAPER.acc[i] < want) i += 1;
  const span = TAPER.acc[i] - TAPER.acc[i - 1];
  const f = span > 0 ? clamp01((want - TAPER.acc[i - 1]) / span) : 0;
  const tip = { x: lerp(TAPER.pts[i - 1].x, TAPER.pts[i].x, f), y: lerp(TAPER.pts[i - 1].y, TAPER.pts[i].y, f) };
  const tipW = lerp(TAPER.w[i - 1], TAPER.w[i], f);
  const tipN = TAPER.nrm[i];
  const up: string[] = [];
  const dn: string[] = [];
  for (let k = 0; k < i; k += 1) {
    const h = TAPER.w[k] / 2;
    up.push(`${(TAPER.pts[k].x + TAPER.nrm[k].x * h).toFixed(1)} ${(TAPER.pts[k].y + TAPER.nrm[k].y * h).toFixed(1)}`);
    dn.push(`${(TAPER.pts[k].x - TAPER.nrm[k].x * h).toFixed(1)} ${(TAPER.pts[k].y - TAPER.nrm[k].y * h).toFixed(1)}`);
  }
  up.push(`${(tip.x + tipN.x * tipW / 2).toFixed(1)} ${(tip.y + tipN.y * tipW / 2).toFixed(1)}`);
  dn.push(`${(tip.x - tipN.x * tipW / 2).toFixed(1)} ${(tip.y - tipN.y * tipW / 2).toFixed(1)}`);
  return `M ${up.join(" L ")} L ${dn.reverse().join(" L ")} Z`;
}

const CURL_LENS = CURL_PATHS.map(pathLen);
const CURL_LEN = CURL_LENS.reduce((a, b) => a + b, 0);
/** En qué fracción del garabato termina cada tramo. */
const CURL_CUM = CURL_LENS.map((_, i) => CURL_LENS.slice(0, i + 1).reduce((a, b) => a + b, 0) / CURL_LEN);

/** La salida: del final del garabato sube a la horizontal y sigue derecho; la cámara la acompaña y el título se va por la izquierda. */
/** El último punto de control va en y=366 a propósito: así la curva aterriza HORIZONTAL y la recta que sigue no hace codo. */
const EXIT_CURVE = "M 1153 461 C 1178 414 1275 366 1330 366";
const X_E = 1850;
const EXIT_RUN = `M 1330 366 L ${X_E} 366`;
const EXIT_F = pathLen(EXIT_CURVE) / (pathLen(EXIT_CURVE) + (X_E - 1330));

/**
 * Los lazos de los proveedores, calcados de la referencia vuelta por vuelta:
 * tres arriba y tres abajo, con la amplitud, el paso y la inclinacion cayendo
 * hacia la derecha.
 *
 * Cada vuelta es un CABEZAL: un arco de radio `w` que entra con la pata de
 * antes y sale con la de despues. Lo que le da el aire de la referencia es que
 * las patas NO salen verticales: cada una sale con su propia inclinacion
 * (`in` y `out`, en grados desde la vertical, positivo = se abre a la
 * derecha). Con patas verticales las dos salen del mismo lado del vertice, se
 * superponen y la vuelta se lee como una aguja; con la inclinacion, el lazo se
 * abre y se recuesta, que es lo que hace la referencia.
 */
const TURNS: { x: number; y: number; w: number; top: boolean; in: number; out: number }[] = [
  { x: 975, y: 660, w: 20, top: false, in: 6, out: 38 },
  { x: 1107, y: 109, w: 19, top: true, in: 4, out: 36 },
  { x: 1185, y: 622, w: 19, top: false, in: 9, out: 40 },
  { x: 1279, y: 143, w: 18, top: true, in: 4, out: 28 },
  { x: 1360, y: 582, w: 17, top: false, in: 8, out: 31 },
  { x: 1416, y: 177, w: 16, top: true, in: 4, out: 30 },
];
/**
 * Cuanto se empuja a la derecha la panza de cada pata (entrada primero). Los
 * vertices ya caen donde la referencia; esto es lo que abre el lazo en el medio
 * para que la parte ancha quede donde esta en ella.
 */
const PUSH = [41, 43, 72, 22, 18, 0];
/** Donde la linea vuelve a la horizontal y se la deja al laberinto. */
const LOOP_END = 1520;
const Q = 0.5523;
const RAD = Math.PI / 180;

type XY = [number, number];
const LOOPS_SEGS: { d: string; len: number }[] = (() => {
  const out: { d: string; len: number }[] = [];
  const n = (v: number) => v.toFixed(1);
  let cur: XY = [1000, 366];
  const C = (c1: XY, c2: XY, to: XY) => {
    const d = `C ${n(c1[0])} ${n(c1[1])} ${n(c2[0])} ${n(c2[1])} ${n(to[0])} ${n(to[1])}`;
    out.push({ d, len: pathLen(`M ${cur[0]} ${cur[1]} ${d}`) });
    cur = to;
  };
  /**
   * Los dos extremos del cabezal y las direcciones con las que se entra y se
   * sale. El centro de curvatura esta del lado de adentro de la vuelta, y cada
   * extremo se apoya donde la tangente tiene la inclinacion pedida.
   */
  const capOf = (t: (typeof TURNS)[number]) => {
    const sg = t.top ? 1 : -1;                       // hacia donde queda el centro
    const c: XY = [t.x, t.y + sg * t.w];
    const dIn: XY = [Math.sin(t.in * RAD), -sg * Math.cos(t.in * RAD)];   // llega
    const dOut: XY = [Math.sin(t.out * RAD), sg * Math.cos(t.out * RAD)]; // sale
    // El borde esta donde la tangente vale lo pedido. Hay dos puntos asi por
    // direccion, uno a cada lado del centro: se entra por el de la izquierda y
    // se sale por el de la derecha.
    const side = (d: XY, right: boolean): XY => {
      const nx = d[1] * t.w;
      const ny = -d[0] * t.w;
      return (nx > 0) === right ? [c[0] + nx, c[1] + ny] : [c[0] - nx, c[1] - ny];
    };
    const e1 = side(dIn, false);
    const e2 = side(dOut, true);
    return { c, e1, e2, dIn, dOut };
  };
  /** El cabezal, en dos cubicas que pasan por el vertice. */
  /** El asa exacta de un arco de circulo de `deg` grados y radio `r`. */
  const arm = (deg: number, r: number) => (4 / 3) * Math.tan((deg * RAD) / 4) * r;
  const cap = (t: (typeof TURNS)[number]) => {
    const { e1, e2, dIn, dOut } = capOf(t);
    const apex: XY = [t.x, t.y];
    const k1 = arm(90 - t.in, t.w);
    const k2 = arm(90 - t.out, t.w);
    C([e1[0] + k1 * dIn[0], e1[1] + k1 * dIn[1]], [apex[0] - k1, apex[1]], apex);
    C([apex[0] + k2, apex[1]], [e2[0] - k2 * dOut[0], e2[1] - k2 * dOut[1]], e2);
  };
  /** La pata: sale con la inclinacion del cabezal y llega con la del siguiente. */
  const leg = (from: XY, dFrom: XY, to: XY, dTo: XY, up: boolean, push: number) => {
    const dy = Math.abs(to[1] - from[1]);
    const h1 = 0.45 * dy;
    const h2 = 0.45 * dy;
    C([from[0] + h1 * dFrom[0] + push, from[1] + h1 * dFrom[1]], [to[0] - h2 * dTo[0] + push, to[1] - h2 * dTo[1]], to);
  };

  // La entrada: viene por la horizontal, se dobla y baja a la primera vuelta.
  const c0 = capOf(TURNS[0]);
  C([1058 + PUSH[0], 366], [c0.e1[0] - 190 * c0.dIn[0] + PUSH[0], c0.e1[1] - 190 * c0.dIn[1]], c0.e1);
  TURNS.forEach((t, i) => {
    cap(t);
    const next = TURNS[i + 1];
    if (next) {
      const cn = capOf(next);
      leg(capOf(t).e2, capOf(t).dOut, cn.e1, cn.dIn, !t.top, PUSH[i + 1]);
    }
  });
  // La salida: baja del ultimo cabezal y se aplana en la horizontal.
  const last = capOf(TURNS[TURNS.length - 1]);
  C([last.e2[0] + 150 * last.dOut[0], last.e2[1] + 150 * last.dOut[1]], [1440, 366], [1500, 366]);
  C([1507, 366], [LOOP_END - 7, 366], [LOOP_END, 366]);
  return out;
})();

const LOOPS = shiftX(`M 1000 366 ${LOOPS_SEGS.map((sg) => sg.d).join(" ")}`, X_E - 1000);
const LOOPS_LEN = LOOPS_SEGS.reduce((a, sg) => a + sg.len, 0);
const X_L = LOOP_END + X_E - 1000;
/**
 * La velocidad con la que el punto recorre el zigzag y con la que, por lo tanto,
 * lo recibe el laberinto. Sale del largo y del tiempo: no hay tramo lento.
 */
const LOOPS_END_V = LOOPS_LEN / LOOPS_MS2;
/** Entra a la velocidad con la que venia la recta y enseguida va parejo hasta el final. */
const LOOPS_V = [nv(V.exit, LOOPS_LEN, LOOPS_MS2), 1] as const;

/** Donde cuelga cada proveedor: a mitad de pata, nunca sobre una vuelta. */
const VENDOR_AT = (() => {
  const cum = LOOPS_SEGS.reduce<number[]>((acc, sg) => [...acc, acc[acc.length - 1] + sg.len], [0]);
  // La entrada es el indice 0; las patas, 3, 6, 9, 12 y 15 (2 por cabezal + 1 por pata).
  const PINS: [number, number][] = [
    [0, 0.5],
    [3, 0.72],
    [6, 0.78],
    [9, 0.72],
    [12, 0.8],
  ];
  return PINS.map(([k, f]) => (cum[k] + f * LOOPS_SEGS[k].len) / LOOPS_LEN);
})();

/**
 * El laberinto de "El contexto se pierde", calcado de la captura de ClickUp
 * (`scene-3-reference.png`, 1712×961: x' = 130 + (x − 240) × 0,897 para que
 * el rectángulo vaya de 130 a 1090, y' = y × 0,749). En el final de los lazos
 * la línea se DIVIDE: cuatro RAMAS rectilíneas de esquinas redondeadas suben
 * en escalera, rodean el texto por arriba y bajan por la derecha hasta la
 * salida; y el PUNTO va por la RUTA de abajo: baja por la izquierda, recorre
 * el borde inferior haciendo once rulos (el resorte) y sube por la derecha
 * hasta la misma salida. Está todo en coordenadas de pantalla y QUIETO: lo
 * único que se mueve es el punto. Después de dibujar, deriva despacio hacia la
 * derecha (`DRIFT`) y al final arranca (`DASH`) y revienta.
 */
const R4 = 20;

/** Una polilínea rectilínea con las esquinas redondeadas (radio `r`), como trazo SVG absoluto. */
function rounded(pts: [number, number][], r = R4): string {
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i += 1) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    const ux = Math.sign(x1 - x0);
    const uy = Math.sign(y1 - y0);
    const vx = Math.sign(x2 - x1);
    const vy = Math.sign(y2 - y1);
    const rr = Math.min(r, Math.abs(x1 - x0 + y1 - y0) / 2, Math.abs(x2 - x1 + y2 - y1) / 2);
    d += ` L ${x1 - ux * rr} ${y1 - uy * rr} Q ${x1} ${y1} ${x1 + vx * rr} ${y1 + vy * rr}`;
  }
  const [xe, ye] = pts[pts.length - 1];
  return `${d} L ${xe} ${ye}`;
}

/** Largo aproximado de esa polilínea (cada esquina redondeada ahorra ~0,38·r). */
function polyLen(pts: [number, number][], r = R4): number {
  let len = 0;
  for (let i = 1; i < pts.length; i += 1) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]);
  return len - (pts.length - 2) * r * 0.38;
}

const FORK = X_L;
/** Corrimiento al mundo: el punto llega al cruce, en la pantalla x = 130. */
const S4 = FORK - 130;
/** Las ramas, en pantalla, en el orden de la captura: la escalera de arriba, la de "Who approved", la de "What was the decision" y la de "How do I do this". */
const MAZE_PTS: [number, number][][] = [
  [[130, 366], [130, 180], [260, 180], [260, 124], [332, 124], [332, 71], [996, 71], [996, 366], [1180, 366]],
  [[130, 366], [130, 180], [363, 180], [363, 127], [646, 127], [646, 214], [879, 214], [879, 139], [996, 139], [996, 366], [1180, 366]],
  [[130, 366], [130, 273], [426, 273], [426, 184], [579, 184], [579, 273], [807, 273], [807, 300], [996, 300], [996, 366], [1180, 366]],
  [[130, 366], [130, 180], [260, 180], [260, 124], [332, 124], [332, 71], [996, 71], [996, 127], [1144, 127], [1144, 366], [1180, 366]],
];
/** Todas las ramas se dibujan a la misma velocidad (px/ms): comparten el arranque y se separan sin que se note. */
const MAZE = MAZE_PTS.map((pts) => ({ d: shiftX(rounded(pts), S4), dur: polyLen(pts) / 2.4 }));
/** El resorte: once rulos tangentes al borde inferior, cada uno corrido un radio (como en la captura). */
const COIL = { r: 78, n: 7, x0: 260 };
const HEAD_PTS: [number, number][] = [[130, 366], [130, 482], [COIL.x0, 482]];
const TAIL_PTS: [number, number][] = [[COIL.x0 + (COIL.n - 1) * COIL.r, 482], [1090, 482], [1090, 366], [1180, 366]];
const ROUTE = (() => {
  const head = rounded(HEAD_PTS);
  const loops = Array.from({ length: COIL.n }, (_, i) => `a ${COIL.r} ${COIL.r} 0 0 1 0 ${2 * COIL.r} a ${COIL.r} ${COIL.r} 0 0 1 0 ${-2 * COIL.r}${i < COIL.n - 1 ? ` h ${COIL.r}` : ""}`).join(" ");
  const tail = rounded(TAIL_PTS).replace(/^M \S+ \S+ /, "");
  return shiftX(`${head} ${loops} ${tail}`, S4);
})();
/**
 * El recorrido del laberinto se dibuja en DOS tiempos: el resorte pasa como un
 * latigazo (≈9 px/ms de pico, más de 3× lo de antes) y después el punto se
 * queda planeando por el tramo final mientras se lee la frase. Por eso los
 * largos van separados.
 */
const COIL_LEN = COIL.n * 2 * Math.PI * COIL.r + (COIL.n - 1) * COIL.r;
const ROUTE_A = polyLen(HEAD_PTS) + COIL_LEN;
const ROUTE_B = polyLen(TAIL_PTS);
/** Qué fracción del recorrido ocupa el resorte. */
const ROUTE_F = ROUTE_A / (ROUTE_A + ROUTE_B);
const COIL_MS = ACT.coil - ACT.loops;
const TAIL_MS = ACT.drawn - ACT.coil;
const COIL_V = [nv(LOOPS_END_V, ROUTE_A, COIL_MS), nv(V.coilOut, ROUTE_A, COIL_MS)] as const;
const TAIL_V = [nv(V.coilOut, ROUTE_B, TAIL_MS), nv(V.route, ROUTE_B, TAIL_MS)] as const;

/** La deriva lenta del punto después de dibujar, y el arranque final. */
const DRIFT = `M ${1180 + S4} 366 L ${1235 + S4} 366`;
const JOIN = { x: 1235 + S4, y: 366 };
const BURST = { x: 1290 + S4, y: 366 };
const DASH = `M ${JOIN.x} ${JOIN.y} L ${BURST.x} ${BURST.y}`;

/* --- el reloj: velocidades por tramo ------------------------------------- */

/** Garabato: arranca al ritmo del paneo que todavía frena y después va parejo. */
const SPEED: [number, number][] = [
  [0, 0],
  [0.12, 0.17],
  [0.5, 0.52],
  [1, 1],
];
const rampC = (t: number) => piecewise(SPEED, t);
const rampTimeC = (sv: number) => piecewise(SPEED.map(([t, s]) => [s, t] as [number, number]), sv);
/** Lazos: entra a la velocidad con la que terminó la salida y frena para que se lean los proveedores. */
const LOOPS_MS = LOOPS_MS2;
const rampL = (t: number) => glide(t, LOOPS_V[0], LOOPS_V[1]);
/** La inversa: en qué instante (0→1) el punto pasa por `sv`. Cada proveedor aparece justo cuando le pasa al lado. */
const rampTimeL = (sv: number) => glideAt(sv, LOOPS_V[0], LOOPS_V[1]);
/* --- la cámara ----------------------------------------------------------- */

/** Los lazos arrancan en la pantalla x = 1000: es lo que deja lugar a los dos lados. */
const PAN2 = X_E - 1000;
/** Menos que el largo del hueco entre el título (termina en ≈734) y el arranque de los lazos (1153): los lazos nunca le pasan por debajo. */
const PAN3 = 300;
/**
 * Interpolación monótona por tabla (Fritsch–Carlson): pasa por todos los nudos
 * con la velocidad continua y sin pasarse de largo. Encadenar easings por tramo
 * frena a cero en cada nudo y por eso se lee robótico.
 */
function spline(ks: readonly (readonly [number, number])[], x: number): number {
  const n = ks.length;
  if (x <= ks[0][0]) return ks[0][1];
  if (x >= ks[n - 1][0]) return ks[n - 1][1];
  const d: number[] = [];
  for (let i = 0; i < n - 1; i += 1) d.push((ks[i + 1][1] - ks[i][1]) / (ks[i + 1][0] - ks[i][0]));
  const m: number[] = [d[0]];
  for (let i = 1; i < n - 1; i += 1) m.push(d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2);
  m.push(d[n - 2]);
  for (let i = 0; i < n - 1; i += 1) {
    if (d[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / d[i];
    const b = m[i + 1] / d[i];
    const q = a * a + b * b;
    if (q > 9) {
      const t = 3 / Math.sqrt(q);
      m[i] = t * a * d[i];
      m[i + 1] = t * b * d[i];
    }
  }
  let i = 0;
  while (i < n - 2 && x > ks[i + 1][0]) i += 1;
  const h = ks[i + 1][0] - ks[i][0];
  const t = (x - ks[i][0]) / h;
  const t2 = t * t;
  const t3 = t2 * t;
  return (2 * t3 - 3 * t2 + 1) * ks[i][1] + (t3 - 2 * t2 + t) * h * m[i] + (-2 * t3 + 3 * t2) * ks[i + 1][1] + (t3 - t2) * h * m[i + 1];
}

/** Qué punto del MUNDO está en el centro del cuadro, instante a instante. */
const FOCUS = [
  [SETTLE, 640],
  [ACT.curl, 640],
  [2300, 1500],
  [2850, 1830],
  [ACT.loopsEnd, 1975],
  [ACT.loops, 2160],
  [4900, 2400],
  [ACT.coil, 2700],
  [5800, 2865],
  [ACT.camEnd, 2895],
  [20000, 2895],
] as const;

/**
 * El acercamiento: cerca de los lazos y aflojando de corrido hasta el
 * laberinto. El último tramo es la pulida lenta que hace la referencia
 * mientras el laberinto se sigue dibujando (×0,93): es lo que lo mantiene vivo
 * sin que nada se desplace de costado.
 */
const ZOOMK = [
  [SETTLE, 1],
  [ACT.curl, 1],
  [2300, 1.02],
  [3500, 1.12],
  [ACT.loops, 1.07],
  [ACT.coil, 1.04],
  [ACT.camEnd, 1],
  [ACT.drawn, 0.93],
  [20000, 0.93],
] as const;

/** Dónde vive en el mundo el título de los proveedores: a la izquierda de los lazos, así viaja y se achica con ellos. */
// El título de los proveedores. Vive en el mundo y la cámara lo va corriendo a
// la izquierda antes del latigazo: con 1444 (y con 1474) quedaba cortado por el
// borde del cuadro desde ~1,5 s antes del laberinto hasta que se iba —medido,
// -81 px justo antes del latigazo, igual en los cinco idiomas—. Con 1584 llega
// a ese instante a unos +37 px del borde, entero.
//
// A la derecha tiene la burbuja del channel manager, también en el mundo: del
// borde del título a la burbuja hay 333 px, y en una línea "Demasiados
// proveedores…" mide 414 (fr 332, pt 352). Por eso el ancho va topado en 305
// —alemán (280) e inglés (303) siguen en una línea— y los largos parten en dos
// renglones que crecen hacia ARRIBA (`bottom` fijo): los de una línea no se
// mueven. El `max-content` hace falta: la caja arranca más allá del ancho del
// mundo, y sin él el navegador la encoge al mínimo y parte cada palabra.
const VENDOR_TITLE = { x: 1584, y: 290, w: 305, line: Math.round(36 * 1.08) };
/** Y dónde vive el titular del laberinto: en el mundo, ocupando el hueco que dejan las ramas. */
const MAZE_TITLE = { x: 2370, y: 286, w: 906, h: 196 };

function actFocus(at: number): number {
  // Los primeros ms la cámara todavía viene frenando de la escena 1.
  if (at < SETTLE) return 640 - CAM0 * (1 - easeOut(seg(at, 0, SETTLE)));
  return spline(FOCUS, at);
}
const actZoom = (at: number) => (at < SETTLE ? 1 : spline(ZOOMK, at));
/** Dónde cae en pantalla un punto del mundo. */
const onScreen = (wx: number, st: ActState) => st.at0 + (wx - st.anchor) * st.zoom;

type ActState = { pc: number; pe: number; pL: number; pm: number; pk: number[]; pd: number; dash: number; ride: { d: string; at: number }; r: number; anchor: number; at0: number; zoom: number; rush: number };

/** Dónde está cada cosa en el instante `at`: lo que dibuja cualquier escena. */
function actState(at: number): ActState {
  const pc = rampC(seg(at, 0, ACT.curl));
  const pe = glide(seg(at, ACT.curl, ACT.exit), EXIT_V[0], EXIT_V[1]);
  const pL = at < ACT.exit ? 0 : rampL(seg(at, ACT.exit, ACT.loops));
  // El laberinto: el punto por la ruta de abajo, las ramas solas a velocidad pareja; después la deriva y el arranque.
  const pm =
    at < ACT.loops
      ? 0
      : at < ACT.coil
        ? ROUTE_F * glide(seg(at, ACT.loops, ACT.coil), COIL_V[0], COIL_V[1])
        : ROUTE_F + (1 - ROUTE_F) * glide(seg(at, ACT.coil, ACT.drawn), TAIL_V[0], TAIL_V[1]);
  const pk = MAZE.map((m) => (at < ACT.loops ? 0 : easeOut(seg(at, ACT.loops, ACT.loops + m.dur))));
  const pd = at < ACT.drawn ? 0 : glide(seg(at, ACT.drawn, ACT.park), DRIFT_V[0], DRIFT_V[1]);
  const dash = easeIn(seg(at, ACT.maze, ACT.dash));
  let ride: { d: string; at: number };
  if (dash > 0) ride = { d: DASH, at: dash };
  else if (pd > 0) ride = { d: DRIFT, at: pd };
  else if (pm > 0) ride = { d: ROUTE, at: pm };
  else if (pL > 0) ride = { d: LOOPS, at: pL };
  else if (pe > 0) ride = pe < EXIT_F ? { d: EXIT_CURVE, at: pe / EXIT_F } : { d: EXIT_RUN, at: (pe - EXIT_F) / (1 - EXIT_F) };
  else ride = { d: CURL, at: pc };
  // El punto llega gordo, se afila al garabatear y engorda otra vez para reventar.
  const r = dash > 0 ? lerp(8, 18, dash) : at < ACT.curl ? lerp(HAND_R, 6, smooth(seg(pc, 0.02, 0.45))) : at < ACT.drawn ? lerp(6, 7, seg(at, ACT.curl, ACT.exit)) : 8;
  // El remate: el zoom se abre SOBRE EL PUNTO y el punto se va al centro del cuadro.
  const rush = easeIn(seg(at, ACT.maze, ACT.hole));
  const aim = smooth(seg(at, ACT.maze, ACT.hole));
  const f = actFocus(at);
  const z0 = actZoom(at);
  const dotW = lerp(JOIN.x, BURST.x, dash);
  const anchor = rush > 0 ? dotW : f;
  // Dónde está el punto en la pantalla sin el remate: de ahí arranca, para que el cambio de ancla no se note.
  const at0 = rush > 0 ? lerp(640 + (dotW - f) * z0, 640, aim) : 640;
  return { pc, pe, pL, pm, pk, pd, dash, ride, r, anchor, at0, zoom: z0 * (1 + rush * 5.5), rush };
}

/**
 * Los resplandores cálidos del acto, en coordenadas de MUNDO: uno sobre el
 * garabato, otro sobre los lazos y otro sobre el laberinto. Van DENTRO de la
 * `ActCamera`, así que paneando se pasa por ellos en vez de arrastrarlos.
 */
const GLOWS: { x: number; y: number; r: number; paper: string; night: string }[] = [
  { x: 820, y: 330, r: 620, paper: "rgba(217, 162, 76, 0.22)", night: "rgba(217, 162, 76, 0.16)" },
  { x: 2050, y: 330, r: 700, paper: "rgba(167, 84, 50, 0.18)", night: "rgba(167, 84, 50, 0.34)" },
  { x: 3150, y: 380, r: 820, paper: "rgba(167, 84, 50, 0.14)", night: "rgba(167, 84, 50, 0.3)" },
];

function ActGlow({ tone }: { tone: "paper" | "night" }) {
  return (
    <>
      {GLOWS.map((g, i) => (
        <i
          key={i}
          className={s.actGlow}
          style={{ left: g.x - g.r, top: g.y - g.r, width: g.r * 2, height: g.r * 2, background: `radial-gradient(circle, ${tone === "night" ? g.night : g.paper} 0%, rgba(20, 21, 15, 0) 68%)` }}
          aria-hidden
        />
      ))}
    </>
  );
}

/** La `Camera` del acto: el paneo y el acercamiento, con el origen en `ZOOM.x` para que el punto no se vaya de cuadro al acercarse. */
function ActCamera({ st, children }: { st: ActState; children: ReactNode }) {
  return (
    <Camera x={st.at0 - st.anchor} scale={st.zoom} origin={`${st.anchor.toFixed(1)}px 360px`}>
      {children}
    </Camera>
  );
}

/**
 * Dónde va la franja en x, en vertical. Mientras se dibuja el garabato centra la
 * ILUSTRACIÓN entera (garabato + apps, `CURL_CX`), no el punto: el garabato crece
 * a la derecha del punto y centrando el punto la mitad quedaba fuera de cuadro.
 * Cuando el hilo sale hacia los proveedores pasa suave a seguir al punto (que la
 * cámara del acto deja en x = 640). Es función del tiempo del ACTO: las tres
 * escenas la calculan igual y en los cortes no salta.
 */
function bandT(st: ActState, at: number): { tx: number; ty: number; k: number } {
  const follow = smooth(seg(at, ACT.curl, ACT.exit));
  // El laberinto mide ~1050 px de ancho: se lo centra y se achica la franja para que entre entero.
  const maze = smooth(seg(at, ACT.loops, ACT.loops + 900));
  const cx = lerp(lerp(onScreen(CURL_CX, st), 640, follow), onScreen(MAZE_CX + S4, st), maze);
  // El garabato va un 5 % más grande y un poco más abajo del centro (equilibra el titular de arriba).
  const k = lerp(lerp(1.05, 1, follow), MAZE_K, maze);
  const cy = lerp(690, 640, follow);
  return { tx: 360 - cx * k, ty: cy - 360 * k, k };
}
/** El centro del laberinto en la pantalla horizontal (sus ramas van de 130 a 1180) y la escala que lo hace entrar en 720. */
const MAZE_CX = 655;
const MAZE_K = 0.66;
/** Un punto de la pantalla horizontal, en la vertical. */
const bandPt = (b: { tx: number; ty: number; k: number }, x: number, y: number) => ({ x: b.tx + x * b.k, y: b.ty + y * b.k });

/** En vertical, la franja horizontal del mundo en la pantalla (ver `bandX`); en horizontal no hace nada. */
function PBandLayer({ b, children }: { b: { tx: number; ty: number; k: number }; children: ReactNode }) {
  const portrait = usePortrait();
  if (!portrait) return <>{children}</>;
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: "0 0", transform: `translate3d(${b.tx.toFixed(1)}px, ${b.ty.toFixed(1)}px, 0) scale(${b.k.toFixed(4)})` }}>
      {children}
    </div>
  );
}

/**
 * Un titular del acto en VERTICAL: arriba y en pantalla. Su par horizontal vive
 * en el mundo y la cámara se lo lleva por la izquierda; acá el titular se queda
 * y se apaga cuando el horizontal saldría de
 * cuadro. `wx`/`ww` son la x y el ancho del titular en el mundo; `ref0`, el
 * estado del acto cuando aparece.
 */
function PTitle({ st, wx, ww, ref0, top, children, style }: { st: ActState; wx: number; ww: number; ref0: ActState; top: number; children: ReactNode; style?: CSSProperties }) {
  // Sin paralaje: el paneo del acto es de más de mil píxeles y cualquier fracción lo saca de cuadro.
  void ref0;
  const out = clamp01((onScreen(wx + ww, st) - 80) / 260);
  return (
    <div className={s.corner} style={{ left: 48, right: 48, top, opacity: out.toFixed(3), filter: out < 0.98 ? `blur(${((1 - out) * 10).toFixed(1)}px)` : undefined, ...style }}>
      {children}
    </div>
  );
}

/** La línea entera y su punto, en el instante `at`. Va adentro de una `ActCamera`. */
function ActLine({ st, color }: { st: ActState; color: string }) {
  return (
    <>
      <svg className={s.svgLayer} viewBox={`0 0 ${W} ${H}`} aria-hidden>
        <path d={taperPath(st.pc)} fill={color} />
      </svg>
      <Stroke d={EXIT_CURVE} p={clamp01(st.pe / EXIT_F)} color={color} width={THIN} />
      <Stroke d={EXIT_RUN} p={clamp01((st.pe - EXIT_F) / (1 - EXIT_F))} color={color} width={THIN} />
      <Stroke d={LOOPS} p={st.pL} color={color} width={THIN} />
      {MAZE.map((m, i) => (
        <Stroke key={i} d={m.d} p={st.pk[i]} color={color} width={THIN} />
      ))}
      <Stroke d={ROUTE} p={st.pm} color={color} width={THIN} />
      <Stroke d={DRIFT} p={st.pd} color={color} width={THIN} />
      <Stroke d={DASH} p={st.dash} color={color} width={THIN} />
      <OnPath d={st.ride.d} at={st.ride.at} className={s.rider} style={{ zIndex: 30 }}>
        <i className={s.dot} style={{ width: st.r * 2, height: st.r * 2, margin: -st.r, background: color }} />
      </OnPath>
    </>
  );
}

type TileKind = "wa" | "xl" | "mail" | "notes" | "agenda" | "booking" | "abnb" | "drive" | "calc" | "phone" | "ig" | "chm";

/**
 * Los tiles, uno por uno donde están en la captura (×0,753, con el eje y
 * apretado hacia el centro para que no queden bajo la barra del reproductor):
 * tres grandes (Slack, monday, Confluence en el original), medianos, y dos
 * chicos desenfocados sobre el arco de arriba. `seg` es el tramo del garabato
 * al que aparece cada uno: justo cuando el punto le pasa al lado.
 */
const TILES: { kind: TileKind; x: number; y: number; z: number; blur: number; seg: number; badge?: string; warn?: boolean }[] = [
  { kind: "ig", x: 1048, y: 97, z: 0.95, blur: 1.4, seg: 1 },
  { kind: "xl", x: 987, y: 90, z: 1, blur: 1.2, seg: 2 },
  { kind: "agenda", x: 955, y: 54, z: 0.75, blur: 2, seg: 2 },
  { kind: "notes", x: 709, y: 97, z: 1.15, blur: 0.8, seg: 3 },
  { kind: "wa", x: 650, y: 161, z: 1.6, blur: 0, seg: 4, warn: true },
  { kind: "booking", x: 922, y: 279, z: 1.5, blur: 0, seg: 5, badge: "3" },
  { kind: "abnb", x: 1022, y: 339, z: 1.35, blur: 0, seg: 6 },
  { kind: "calc", x: 1060, y: 416, z: 1.2, blur: 0, seg: 7, badge: "2" },
  { kind: "drive", x: 800, y: 528, z: 1.6, blur: 0, seg: 10, warn: true },
  { kind: "phone", x: 736, y: 628, z: 1.15, blur: 0.5, seg: 11, badge: "2" },
  { kind: "chm", x: 979, y: 612, z: 1.1, blur: 0.5, seg: 13 },
  { kind: "mail", x: 1130, y: 500, z: 0.7, blur: 2, seg: 14 },
];

function TileGlyph({ kind }: { kind: TileKind }) {
  switch (kind) {
    case "wa":
      return (
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="#25d366" />
          <path d="M14 13c1-1 2 0 2.5 1.2l.8 2c.2.6 0 1.1-.4 1.5l-.8.8c1 2.2 2.6 3.8 4.8 4.8l.8-.8c.4-.4 1-.5 1.5-.3l2 .8c1.2.5 2.2 1.5 1.2 2.6-1.2 1.4-3 1.8-4.8 1.2-4-1.4-7.2-4.6-8.6-8.6-.6-1.8-.2-3.6 1-4.2z" fill="#fff" />
        </svg>
      );
    case "xl":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="6" y="7" width="28" height="26" rx="4" fill="#1d7a46" />
          <path d="M12 14h16M12 20h16M12 26h16M17 12v16M24 12v16" stroke="#fff" strokeWidth="1.6" opacity=".9" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="6" y="10" width="28" height="20" rx="4" fill="#f2efe8" stroke="#8fb0c7" strokeWidth="2" />
          <path d="M8 13l12 9 12-9" fill="none" stroke="#a75432" strokeWidth="2.2" />
        </svg>
      );
    case "notes":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="8" y="6" width="24" height="28" rx="3" fill="#ffe27a" />
          <path d="M13 14h14M13 19h14M13 24h9" stroke="#8a6d1c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "agenda":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="7" y="8" width="26" height="26" rx="4" fill="#fff" stroke="#d9d3c6" strokeWidth="1.5" />
          <rect x="7" y="8" width="26" height="8" rx="4" fill="#e5484d" />
          <path d="M12 22h4M18 22h4M24 22h4M12 28h4M18 28h4" stroke="#9a9a92" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "booking":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="6" y="6" width="28" height="28" rx="6" fill="#003580" />
          <text x="20" y="27" textAnchor="middle" fontSize="19" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
            B.
          </text>
        </svg>
      );
    case "abnb":
      return (
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="#ff5a5f" />
          <path d="M20 10c-1.6 0-2.8 1-3.4 2.6l-4.2 10.2c-.8 2 .4 4.2 2.6 4.4 1.7.1 3.3-1 5-3 1.7 2 3.3 3.1 5 3 2.2-.2 3.4-2.4 2.6-4.4L23.4 12.6C22.8 11 21.6 10 20 10zm0 5.4c.9 0 1.6.7 1.6 1.7 0 1.2-1 2.6-1.6 3.6-.6-1-1.6-2.4-1.6-3.6 0-1 .7-1.7 1.6-1.7z" fill="#fff" />
        </svg>
      );
    case "drive":
      return (
        <svg viewBox="0 0 40 40">
          <path d="M14 8h12l9 16h-12z" fill="#fbbc04" />
          <path d="M14 8L5 24h12l9-16z" fill="#0f9d58" />
          <path d="M5 24l4.5 8h21l4.5-8z" fill="#4285f4" />
        </svg>
      );
    case "calc":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="9" y="6" width="22" height="28" rx="4" fill="#3b3d36" />
          <rect x="12" y="9" width="16" height="6" rx="1.5" fill="#c8e293" />
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <circle key={`${r}${c}`} cx={15 + c * 5} cy={20 + r * 4.5} r="1.6" fill="#f2efe8" />))}
        </svg>
      );
    case "ig":
      return (
        <svg viewBox="0 0 40 40">
          <defs>
            <linearGradient id="tileIg" x1="4" y1="36" x2="36" y2="4" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#feda75" />
              <stop offset="0.28" stopColor="#fa7e1e" />
              <stop offset="0.62" stopColor="#d62976" />
              <stop offset="1" stopColor="#4f5bd5" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="32" height="32" rx="9" fill="url(#tileIg)" />
          <rect x="11" y="11" width="18" height="18" rx="5.5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="20" cy="20" r="4.2" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="26" cy="14" r="1.4" fill="#fff" />
        </svg>
      );
    case "chm":
      return (
        <svg viewBox="0 0 40 40">
          <rect x="4" y="4" width="32" height="32" rx="9" fill="#5b53c7" />
          <path d="M20 20V12M20 20v8M20 20h-8M20 20h8" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" opacity=".85" />
          <circle cx="20" cy="20" r="3.2" fill="#fff" />
          <circle cx="20" cy="10.8" r="2.2" fill="#fff" />
          <circle cx="20" cy="29.2" r="2.2" fill="#fff" />
          <circle cx="10.8" cy="20" r="2.2" fill="#fff" />
          <circle cx="29.2" cy="20" r="2.2" fill="#fff" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="#2f5d8c" />
          <path d="M14.5 12.5l2.6-.7 2.2 4.4-1.8 1.6c1.2 2.4 2.9 4.1 5.3 5.3l1.6-1.8 4.4 2.2-.7 2.6c-.3 1.2-1.5 2-2.7 1.7-6.3-1.4-11-6.1-12.4-12.4-.3-1.2.5-2.4 1.5-2.9z" fill="#fff" />
        </svg>
      );
  }
}

/**
 * Las apps que tienen su icono REAL en `public/video/apps`. Ahi la baldosa no
 * es una tarjeta blanca con un glifo adentro: el icono ES la baldosa, a sangre.
 */
const TILE_ART: Partial<Record<TileKind, string>> = {
  wa: "/video/apps/whatsapp.png",
  booking: "/video/apps/excel.png",
  abnb: "/video/apps/abnb.png",
  calc: "/video/apps/calculator.png",
  drive: "/video/apps/drive.png",
  notes: "/video/apps/notes.png",
  agenda: "/video/apps/booking.png",
  ig: "/video/apps/instagram.png",
  xl: "/video/apps/calendar.png",
  mail: "/video/apps/mail.png",
  phone: "/video/apps/phone.png",
  // El slot nacio como "channel manager" generico; hoy es ChatGPT (la clave quedo).
  chm: "/video/apps/chatgpt.png",
};

function AppTile({ tile, style }: { tile: (typeof TILES)[number]; style?: CSSProperties }) {
  const art = TILE_ART[tile.kind];
  return (
    <span className={`${s.tile}${art ? ` ${s.tileArt}` : ""}`} style={style}>
      {art ? <img src={art} alt="" /> : <TileGlyph kind={tile.kind} />}
      {tile.badge && <b className={s.badge}>{tile.badge}</b>}
      {tile.warn && (
        <b className={`${s.badge} ${s.badgeWarn}`}>
          <svg viewBox="0 0 20 20">
            <path d="M10 2.5L18.5 17.5H1.5z" fill="#f5b400" />
            <path d="M10 8v4.6M10 14.6v.4" stroke="#14150f" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </b>
      )}
    </span>
  );
}

/* --- las escenas --------------------------------------------------------- */

export function ThreadScene({ lt, v, locale }: SceneProps) {
  const portrait = usePortrait();
  const st = actState(lt);
  const title = (
    <h2 className={`${s.displayXl} ${s.punchedTitle}`} style={{ fontSize: portrait ? 92 : 102 }}>
      <Words text={v.tooManyApps} lt={lt} at={140} stagger={120} dur={520} />
    </h2>
  );
  return (
    <div className={`${s.scene} ${s.paper}`}>
      {portrait && (
        <PTitle st={st} wx={68} ww={760} ref0={actState(SETTLE)} top={130}>
          {title}
        </PTitle>
      )}
      <PBandLayer b={bandT(st, lt)}>
      <ActCamera st={st}>
        <ActGlow tone="paper" />
        <ActLine st={st} color={INK} />
        {!portrait && (
          <div className={s.corner} style={{ left: 68, top: 282, maxWidth: 900 }}>
            {title}
          </div>
        )}
        {TILES.map((t, i) => {
          const at = CURL_CUM[t.seg] - 0.02;
          if (st.pc < at) return null;
          const born = rampTimeC(at) * ACT.curl;
          const p = easeBack(seg(lt, born, born + 420));
          return (
            <AppTile
              key={i}
              tile={t}
              style={{
                left: t.x,
                top: t.y,
                zIndex: 4 + Math.round(t.z * 10),
                opacity: clamp01(p * 1.5),
                filter: t.blur ? `blur(${t.blur}px)` : undefined,
                transform: `translate(-50%, -50%) rotate(${((noise(i, 5) - 0.5) * 14).toFixed(1)}deg) scale(${(t.z * (0.62 + 0.38 * p)).toFixed(3)})`,
              }}
            />
          );
        })}
      </ActCamera>
      </PBandLayer>
      <Mark tone="ink" />
    </div>
  );
}

/* 3 · La cuña a oscuro y demasiados proveedores ---------------------------- */


/**
 * Los círculos de los proveedores: cuelgan de los lazos, o sea que viven en el
 * MUNDO. Los dibujan la escena de la cuña y la del laberinto por igual (van
 * dentro de la `Camera`): en el corte no desaparecen, se van por la izquierda
 * con el paneo, como en la referencia.
 */
/** El desenfoque del vidrio de los globos. Va inline: ver VendorPins. */
const GLASS_BLUR = "blur(14px) saturate(1.25)";

const VENDOR_ART: { color: string; tint: string; icon: ReactNode }[] = [
  {
    // PMS: el mostrador
    color: "#7DD3FC",
    tint: "rgba(125, 211, 252, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V6.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 14 6.5V20" />
        <path d="M14 11h4.5A1.5 1.5 0 0 1 20 12.5V20" />
        <path d="M2.5 20h19M7 8.5h4M7 12h4M7 15.5h4M17 15.5h0" />
      </svg>
    ),
  },
  {
    // Channel manager: el nodo que reparte
    color: "#C4B5FD",
    tint: "rgba(196, 181, 253, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2.6" />
        <circle cx="12" cy="3.6" r="2" />
        <circle cx="4.6" cy="18" r="2" />
        <circle cx="19.4" cy="18" r="2" />
        <path d="M12 9.4V5.6M10.2 13.6 6.3 16.6M13.8 13.6l3.9 3" />
      </svg>
    ),
  },
  {
    // Motor de reservas: la fecha tomada
    color: "#FDBA74",
    tint: "rgba(253, 186, 116, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.2" y="5" width="17.6" height="15.5" rx="2.4" />
        <path d="M3.2 9.6h17.6M8 3v3.4M16 3v3.4" />
        <path d="m9 14.6 2.2 2.2 4-4" />
      </svg>
    ),
  },
  {
    // RMS: la tarifa que sube
    color: "#86EFAC",
    tint: "rgba(134, 239, 172, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 20.5h17" />
        <path d="M6.5 20.5v-5M11 20.5v-8.5M15.5 20.5v-4" />
        <path d="m13.5 7.5 6-2.5-1.6 5.6" />
        <path d="M19.5 5 12 9.8 8 7.4 4 10" />
      </svg>
    ),
  },
  {
    // Sitio web: la ventana propia
    color: "#F9A8D4",
    tint: "rgba(249, 168, 212, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4.5" width="18" height="15" rx="2.4" />
        <path d="M3 9.2h18" />
        <path d="M6.2 6.9h.01M8.9 6.9h.01M11.6 6.9h.01" />
        <path d="M7.5 13h9M7.5 16h5.5" />
      </svg>
    ),
  },
];

/**
 * El cuerpo del rótulo de un globo.
 *
 * El globo mide 86 px y deja 68 de texto útil. A 11 px en negrita entran unos
 * once caracteres por renglón, así que una palabra larga —"Buchungsmaschine",
 * "réservation"— se sale del círculo. Bajar el cuerpo no alcanza sola (a 9 px
 * esa palabra sigue pidiendo 78 px): lo que la mete adentro es partirla, y esto
 * es lo que le da aire a la partición para que no quede apretada.
 */
function vendorFont(name: string): number {
  const largo = Math.max(...name.split(/[\s-]+/).map((w) => w.length));
  if (largo <= 11) return 11;
  if (largo <= 14) return 10;
  return 9;
}

function VendorPins({
  st,
  at,
  v,
  locale,
}: {
  st: ActState;
  at: number;
  v: SceneProps["v"];
  locale: SceneProps["locale"];
}) {
  return (
    <>
      {v.vendors.map((name, i) => {
        const vat = VENDOR_AT[i];
        if (st.pL < vat) return null;
        const born = ACT.exit + rampTimeL(vat) * LOOPS_MS;
        const pop = easeBack(seg(at, born, born + 420));
        const art = VENDOR_ART[i];
        return (
          <OnPath key={name} d={LOOPS} at={vat} className={s.rider} style={{ zIndex: 4 }}>
            <span
              className={s.vendor}
              style={{ opacity: clamp01(pop * 1.4), transform: `translate(-50%, -50%) scale(${(0.6 + 0.4 * pop).toFixed(3)})`, backdropFilter: GLASS_BLUR, WebkitBackdropFilter: GLASS_BLUR, "--vc": art.color, "--vtint": art.tint } as CSSProperties}
            >
              <i className={s.vendorIcon} aria-hidden>
                {art.icon}
              </i>
              {/* El `lang` no es decorativo: sin él `hyphens: auto` no sabe con
                  qué reglas partir, y "Buchungsmaschine" se corta por donde cae
                  en vez de por donde corresponde en alemán. */}
              <b lang={locale} style={{ fontSize: vendorFont(name) }}>
                {name}
              </b>
            </span>
          </OnPath>
        );
      })}
    </>
  );
}

/** El título de los proveedores: fijo mientras pasan los lazos, y se va por la izquierda cuando la cámara sale detrás del punto. */
/** El título de los proveedores vive en el MUNDO (va dentro de la cámara): se achica y se va con los lazos, como en la referencia. */
function VendorTitle({ at, v }: { at: number; v: SceneProps["v"] }) {
  const portrait = usePortrait();
  if (portrait) {
    // En vertical, arriba y en pantalla, acompañando el paneo desde que aparece.
    return (
      <PTitle st={actState(at)} wx={VENDOR_TITLE.x} ww={VENDOR_TITLE.w} ref0={actState(OFF_TOOLS + 620)} top={150}>
        <h2 className={`${s.toolsTitle} ${s.onInk}`} style={{ fontSize: 64, whiteSpace: "normal", textWrap: "balance" }}>
          <Words text={v.tooManyVendors} lt={at - OFF_TOOLS} at={620} stagger={120} dur={520} dimIn={false} />
        </h2>
      </PTitle>
    );
  }
  return (
    <div className={s.corner} style={{ left: VENDOR_TITLE.x, top: VENDOR_TITLE.y + VENDOR_TITLE.line, transform: "translateY(-100%)" }}>
      <h2 className={`${s.toolsTitle} ${s.onInk}`} style={{ fontSize: 36, whiteSpace: "normal", width: "max-content", maxWidth: VENDOR_TITLE.w, textWrap: "balance" }}>
        <Words text={v.tooManyVendors} lt={at - OFF_TOOLS} at={620} stagger={120} dur={520} dimIn={false} />
      </h2>
    </div>
  );
}

/**
 * La cuña es la propia línea que se engrosa: sale del borde izquierdo por la
 * horizontal, alcanza al punto y tapa la pantalla. Adentro va la MISMA línea
 * del acto en blanco, con los proveedores y su título colgados del mundo, así
 * que la cuña los va descubriendo a medida que barre.
 */
export function ToolsScene({ lt, v, locale }: SceneProps) {
  const portrait = usePortrait();
  const at = lt + OFF_TOOLS;
  const st = actState(at);
  const w = easeIn(seg(lt, 0, 820));
  const tip = lerp(-4, 180, w);
  // Abre en 820 ms: a 470 se leía como un golpe. Con 165 % de media altura tapa también las esquinas antes de llegar a w = 1.
  const half = lerp(1.2, 165, w);
  // El borde no es recto: cada arista va muestreada y ondulada como una llama
  // (tres senos, uno de ellos con el reloj, así flamea mientras se abre), con
  // la ondulación creciendo hacia la base y la punta siempre afilada.
  const N = 20;
  const top: string[] = [];
  const bot: string[] = [];
  for (let i = 0; i <= N; i += 1) {
    const t = i / N;
    const x = lerp(-4, tip, t);
    const amp = half * 0.2 * (1 - t) * clamp01(half / 30);
    const flame = (k: number) => (Math.sin(t * 6.8 + lt / 130 + k) * 0.5 + Math.sin(t * 15.2 - lt / 85 + 2.3 * k) * 0.32 + Math.sin(t * 27 + lt / 60 + 0.7 * k) * 0.18) * amp;
    top.push(`${x.toFixed(2)}% ${(50.8 - half * (1 - t) + flame(0)).toFixed(2)}%`);
    if (i < N) bot.push(`${x.toFixed(2)}% ${(50.8 + half * (1 - t) - flame(1.9)).toFixed(2)}%`);
  }
  const wedge = `polygon(${top.join(", ")}, ${bot.reverse().join(", ")})`;
  return (
    <div className={s.scene} style={{ background: "transparent" }}>
      <div className={`${s.layer} ${s.night}`} style={{ clipPath: wedge }}>
        <PBandLayer b={bandT(st, at)}>
          <ActCamera st={st}>
            <ActGlow tone="night" />
            <ActLine st={st} color={PAPER} />
            <VendorPins st={st} at={at} v={v} locale={locale} />
            {!portrait && <VendorTitle at={at} v={v} />}
          </ActCamera>
        </PBandLayer>
        {portrait && <VendorTitle at={at} v={v} />}
      </div>
      <div className={s.layer} style={{ opacity: w >= 0.999 ? 1 : 0 }}>
        <Mark tone="paper" />
      </div>
    </div>
  );
}

/* 4 · El laberinto: la línea se divide en tres ----------------------------- */

/** Los chips: viven en el MUNDO (se les suma `S4` al dibujarlos, y van dentro de la cámara), centrados donde están en la captura: sobre la línea de arriba, las dos escaleras, la rama del medio y dentro del resorte. */
const CHIP_POS = [
  { x: 771, y: 71 },
  { x: 507, y: 127 },
  { x: 281, y: 273 },
  { x: 758, y: 214 },
  { x: 377, y: 536 },
  { x: 776, y: 615 },
];
/** Cada frase necesita ~1 s ENTERA en pantalla: entra en 380 ms (HBlur) y sale en 260, así que entre `at` y `out` tiene que haber ~1,4 s, y entre el `out` de una y el `at` de la siguiente, 400 para no encimarse. */
/** En el laberinto queda UNA sola frase: necesita ~1,4 s entre `t1` y `t1Out` (entra en 380 ms con `HBlur` y sale en 260). */
/** La frase se queda hasta el final: no sale sola, se la lleva el acercamiento del remate. */
// `t1` bajó de 1500 a 700 el 21-09-2026: la frase es el titular de la escena y
// se leía tarde. Entra ahora mientras el laberinto todavía se está dibujando —a
// los 700 ms va por la mitad— y se queda 2,85 s en vez de 2,05. Los chips no se
// tocaron: siguen entrando detrás, que es el orden que corresponde (primero el
// titular, después el detalle).
const MZ = { chips: 1700, t1: 700 };
/** Los chips entran de a 200 ms: tienen que estar todos antes del remate. */
const CHIP_GAP = 200;

function LinkIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
      <path d="M6.5 9.5l3-3M5 11a2.5 2.5 0 0 1 0-3.5l1.5-1.5M11 5a2.5 2.5 0 0 1 0 3.5L9.5 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Mientras la cámara alcanza al punto (el `whip`) la escena es transparente:
 * abajo sigue la de proveedores dibujando la misma línea y llevándose su
 * título. Después se vuelve opaca y sigue ella, con la cámara QUIETA. Los
 * titulares van centrados en el hueco que deja el laberinto (entre la rama
 * del medio y el resorte, y entre las dos verticales), no en la pantalla. En
 * la cola (`tail` 510 = el beat "dot" + su cola) el punto arranca hacia la
 * derecha, engorda y se expande: el agujero deja ver la escena siguiente.
 */
export function MazeScene({ lt, v, locale }: SceneProps) {
  const portrait = usePortrait();
  const at = lt + OFF_MAZE;
  const st = actState(at);
  const on = lt >= 0;
  // El remate: la cámara se le va ENCIMA al punto (como en el pase de la
  // escena 1 a la 2) y recién cuando lo tiene encima se abre el blanco. El
  // texto, mientras tanto, se viene hacia la pantalla desenfocándose: es lo que
  // da la sensación de que uno se está acercando rápido.
  const rush = st.rush;
  // La Z del titular sale de la escala que se quiere ver: con perspectiva 900,
  // `z = 900·(1 − 1/T)` da una ampliación T. Se pide T = 1 + 8,8·rush, o sea
  // 1,6× la de la cámara en cada instante: el texto se viene encima MÁS RÁPIDO
  // que las líneas, pero hacia el mismo punto.
  // La cámara ya amplía ×6,5 en el remate; el texto sólo necesita un 60 % más
  // para venirse más rápido que las líneas. Con perspectiva 900, `z = 900·(1 − 1/T)`.
  const tz = 900 * (1 - 1 / (1 + rush * 0.6));
  const hole = at < ACT.dash ? 0 : 18 + easeIn(seg(at, ACT.dash, ACT.hole)) * 1700;
  const hx = onScreen(lerp(JOIN.x, BURST.x, st.dash), st);
  // En vertical el agujero va donde cae el punto en la pantalla (la franja corrida).
  const hP = bandPt(bandT(st, at), hx, BURST.y);
  const hX = portrait ? hP.x : hx;
  const hY = portrait ? hP.y : BURST.y;
  const mask = hole > 0 ? `radial-gradient(circle at ${hX.toFixed(0)}px ${hY}px, transparent ${hole.toFixed(0)}px, #000 ${(hole + 1).toFixed(0)}px)` : undefined;
  // Las dos frases largas van un cuerpo más chico: tienen que entrar en el hueco con margen en los cinco idiomas.
  const lines: { text: string; at: number; out?: number; xl?: boolean; sm?: boolean }[] = [{ text: v.contextLost, at: MZ.t1 }];
  return (
    <div className={`${s.scene} ${s.night}`} style={{ background: on ? undefined : "transparent", maskImage: mask, WebkitMaskImage: mask }}>
      {on && portrait && <VendorTitle at={at} v={v} />}
      {on && (
        <PBandLayer b={bandT(st, at)}>
        <ActCamera st={st}>
          <ActGlow tone="night" />
          <ActLine st={st} color={PAPER} />
          <VendorPins st={st} at={at} v={v} locale={locale} />
          {!portrait && <VendorTitle at={at} v={v} />}
          {v.mazeChips.map((text, i) => {
            const pos = CHIP_POS[i];
            const p = easeBack(seg(lt, MZ.chips + i * CHIP_GAP, MZ.chips + i * CHIP_GAP + 420));
            if (p <= 0) return null;
            return (
              <span key={i} className={s.mazeChip} style={{ left: pos.x + S4, top: pos.y, opacity: clamp01(p * 1.4), transform: `translate(-50%, -50%) scale(${(0.7 + 0.3 * p).toFixed(3)})` }}>
                <LinkIcon />
                {text}
              </span>
            );
          })}
        {lines.map((l) => {
        if (lt < l.at || (l.out !== undefined && lt >= l.out + 400)) return null;
        return (
          <div
            key={l.text}
            className={s.typeBlock}
            style={{
              left: MAZE_TITLE.x,
              top: MAZE_TITLE.y,
              width: MAZE_TITLE.w,
              height: MAZE_TITLE.h,
              padding: 0,
            }}
          >
            <h2
              className={`${l.xl ? s.displayXl : s.displaySm} ${s.onInk}`}
              style={{
                maxWidth: l.sm ? 700 : 800,
                fontSize: l.sm ? 52 : undefined,
                transform: rush > 0.001 ? `translateZ(${tz.toFixed(0)}px)` : undefined,
                filter: rush > 0.001 ? `blur(${(rush * 20).toFixed(1)}px)` : undefined,
                opacity: 1 - rush * 0.5,
              }}
            >
              <HBlur lt={lt} at={l.at} exit={l.out} dur={380}>
                {tokenize(l.text).map((tk, k) =>
                  tk.em ? (
                    <em key={k} className={s.wordEm} style={{ ["--u" as string]: seg(lt, l.at + 500, l.at + 900) }}>
                      {tk.text}
                    </em>
                  ) : (
                    <Fragment key={k}>{tk.text}</Fragment>
                  ),
                )}
              </HBlur>
            </h2>
          </div>
        );
        })}
        </ActCamera>
        </PBandLayer>
      )}
      {on && <Mark tone="paper" />}
    </div>
  );
}

/* 5 · El punto que abre a blanco ------------------------------------------- */

/**
 * El beat existe (250 ms + cola de 260) pero lo dibuja la escena del laberinto
 * en su propia cola: es el MISMO punto que venía frenando, que acelera y se
 * expande. Acá no hay nada que pintar.
 */
export function DotScene() {
  return <div className={s.scene} style={{ background: "transparent" }} />;
}

/* 6 · Los zoom-through ----------------------------------------------------- */

/**
 * El ojo de cada letra: el círculo más grande que entra en su contraforma y el
 * techo de su tinta. Salen de medir el glifo en un canvas (Outfit 600, relleno
 * desde el borde para aislar la contraforma y círculo inscripto por fuerza
 * bruta) y van en fracciones del cuerpo, desde el origen del glifo y desde la
 * base del renglón. A ojo no se pueden poner: el círculo de la "e" es menos de
 * la mitad del de la "o" y un radio de más se ve como un punto claro TAPANDO la
 * letra por la que se supone que entra la cámara.
 */
type Eye = { cx: number; cy: number; r: number; top: number };
const EYES: Record<string, Eye> = {
  o: { cx: 0.2825, cy: 0.2475, r: 0.125, top: 0.495 },
  e: { cx: 0.27, cy: 0.34, r: 0.0475, top: 0.495 },
  a: { cx: 0.2825, cy: 0.2525, r: 0.1225, top: 0.4925 },
  g: { cx: 0.2775, cy: 0.2575, r: 0.12, top: 0.4925 },
  p: { cx: 0.3025, cy: 0.245, r: 0.125, top: 0.4925 },
  q: { cx: 0.2825, cy: 0.2525, r: 0.1225, top: 0.4925 },
  b: { cx: 0.3025, cy: 0.2525, r: 0.1225, top: 0.7225 },
  d: { cx: 0.2825, cy: 0.2525, r: 0.1225, top: 0.7225 },
};
/** Dónde cae la base del renglón sobre el cuerpo, con `line-height: 1`. */
const BASE = 0.87;

/** Qué letra es el ojo por el que se atraviesa. */
function findEye(plain: string): { idx: number; eye: Eye } {
  // De atrás para adelante: el ojo tiene que caer cerca del final del renglón
  // (la "o" de "tiempo", la última "e" de "revenue") y no en el artículo suelto
  // del principio, donde la línea tendría que cruzar la frase entera.
  const pick = (re: RegExp) => {
    let m = -1;
    for (let i = 0; i < plain.length; i++) if (re.test(plain[i])) m = i;
    return m >= 0 ? { idx: m, eye: EYES[plain[m]] } : null;
  };
  return pick(/o/) ?? pick(/e/) ?? pick(/a/) ?? pick(/[gpqbd]/) ?? { idx: 0, eye: EYES.o };
}

/**
 * El texto con la letra-ojo marcada para medirla, y el resto de las letras
 * listas para soltarse. Cada letra va en su propio `span`: después del rebote se
 * desarman de a una, y el ojo se queda quieto porque es por donde entra la
 * cámara.
 */
function EyeText({ text, tag, lt, at }: { text: string; tag: string; lt: number; at: number }) {
  const toks = tokenize(text);
  const plain = toks.map((t) => t.text).join("");
  const eye = findEye(plain);
  let pos = 0;
  return (
    <>
      {toks.map((tk, k) => {
        const start = pos;
        pos += tk.text.length;
        const chars: ReactNode[] = [];
        for (let i = 0; i < tk.text.length; i++) {
          const gi = start + i;
          const c = tk.text[i];
          // El espacio queda como texto suelto: adentro de un inline-block se colapsa.
          if (c === " ") {
            chars.push(<Fragment key={i}> </Fragment>);
            continue;
          }
          chars.push(
            gi === eye.idx ? (
              <span key={i} data-eye={tag} className={s.eye}>
                {c}
              </span>
            ) : (
              <span key={i} className={s.eye} style={undone(gi - eye.idx, lt, at)}>
                {c}
              </span>
            ),
          );
        }
        return tk.em ? (
          // Sin el subrayado del énfasis: acá la palabra se destaca por el cuerpo,
          // y una barra que no se desarma con las letras queda flotando sola.
          <em key={k} className={s.wordEm} style={{ ["--u" as string]: 0 }}>
            {chars}
          </em>
        ) : (
          <Fragment key={k}>{chars}</Fragment>
        );
      })}
    </>
  );
}

/**
 * Cómo se suelta una letra después del golpe: se va para el lado en el que
 * quedó, gira apenas y se apaga. El desfasaje sale de la distancia al ojo —el
 * golpe se propaga— pero topeado en cinco letras: más lejos que eso el zoom ya
 * se las llevó de la pantalla y la espera no se vería.
 */
function undone(rel: number, lt: number, at: number): CSSProperties | undefined {
  const wait = at + Math.min(Math.abs(rel), 5) * 38;
  const p = easeOut(seg(lt, wait, wait + 520));
  if (p <= 0.001) return undefined;
  const dir = rel < 0 ? -1 : 1;
  const n = noise(rel + 9, 4);
  const dx = dir * (16 + Math.abs(rel) * 6) * p;
  const dy = (n - 0.45) * 42 * p;
  return {
    opacity: 1 - p * p,
    transform: `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${(dir * (5 + n * 13) * p).toFixed(1)}deg)`,
  };
}

/**
 * Los dos zoom-through. Las dos mitades son el mismo golpe: la frase se planta,
 * una línea entra por un borde, cae curvándose hasta apoyarse en la letra-ojo y
 * rebota hacia el otro lado; recién en el rebote la palabra se desarma letra por
 * letra. La segunda mitad es la primera espejada —entra por la izquierda y se va
 * por la derecha— y su ojo sí abre a la escena que sigue.
 */
const KL = {
  aIn: 180, aLine: 1240, aHit: 1880, aEnd: 2680,
  bIn: 2740, bLine: 3800, bHit: 4440, bEnd: 5240,
};

/**
 * La cámara no se queda quieta en ningún momento: la escala crece siguiendo
 * `push` en escala logarítmica (una potencia alta más un pelín de lineal), así
 * que antes del golpe es un empuje lento que deja leer la frase entera —×1,29 en
 * 1,7 s, nunca cero— y después acelera parejo hasta el ×55 del corte. Al ser un
 * solo polinomio para toda la mitad no hay empalmes: la velocidad no salta nunca.
 * El exponente es lo que reparte: cuanto más largo el rato de lectura, más alto
 * tiene que ser para que el acercamiento previo siga siendo el mismo.
 */
const ZOOM_TOP = 55;
const push = (u: number) => 0.95 * Math.pow(u, 9) + 0.05 * u;

/** Largo aproximado de una cúbica: se muestrea y se suman las cuerdas. */
function cubicLen(p: number[][]): number {
  let len = 0;
  let px = p[0][0];
  let py = p[0][1];
  for (let i = 1; i <= 24; i++) {
    const t = i / 24;
    const m = 1 - t;
    const x = m * m * m * p[0][0] + 3 * m * m * t * p[1][0] + 3 * m * t * t * p[2][0] + t * t * t * p[3][0];
    const y = m * m * m * p[0][1] + 3 * m * m * t * p[1][1] + 3 * m * t * t * p[2][1] + t * t * t * p[3][1];
    len += Math.hypot(x - px, y - py);
    px = x;
    py = y;
  }
  return len;
}

/**
 * El vuelo: entra por un borde bien arriba de la frase, curva y baja hasta tocar
 * la letra; el rebote sale con el ángulo espejado —como una pelota contra el
 * lomo de la letra— y se va por arriba del borde de enfrente. `dir` es hacia
 * dónde viaja: -1 de derecha a izquierda, +1 al revés.
 */
function flight(x: number, y: number, dir: 1 | -1, fw = W) {
  const enter = dir < 0 ? fw + 150 : -150;
  const mid = (enter + x) / 2 + dir * 46;
  const into = [[enter, y - 236], [mid, y - 220], [x - dir * 112, y - 180], [x, y]];
  const back = [[x, y], [x + dir * 106, y - 171], [x + dir * 340, y - 318], [x + dir * 640, y - 470]];
  const d = (p: number[][]) => `M ${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)} C ${p[1][0].toFixed(1)} ${p[1][1].toFixed(1)} ${p[2][0].toFixed(1)} ${p[2][1].toFixed(1)} ${p[3][0].toFixed(1)} ${p[3][1].toFixed(1)}`;
  return { into: d(into), back: d(back), lenIn: cubicLen(into), lenBack: cubicLen(back) };
}

/**
 * Las velocidades del vuelo, en múltiplos de su propia media: llega acelerando
 * (0,55 → 1,45) y sale frenando (1,30 → 0,70). Lo que hace que el rebote se lea
 * fluido no es la curva sino que las dos velocidades EMPALMEN en el vértice: el
 * tramo de vuelta dura lo que tenga que durar para salir a la misma velocidad a
 * la que llegó, menos la pérdida del golpe.
 */
const V_IN = 1.45;
const V_OUT = 1.3;
const BOUNCE_LOSS = 0.92;

/**
 * La inclinación del renglón. La frase se planta apenas caída hacia el lado por
 * el que viene la línea y se endereza a velocidad constante durante TODO el
 * medio tiempo: no es un gesto de entrada, es una deriva que se lee mientras se
 * lee la frase. El eje es la letra-ojo —el mismo punto donde rebota la línea y
 * por el que después entra la cámara—, así que el texto no se desplaza: pivota
 * alrededor del golpe. Pasados los ~3° el renglón se lee torcido en vez de
 * vivo, y como el giro se multiplica por el zoom, lo que sobra se nota al
 * final. Cruza el cero antes del vértice y sigue de largo: si frenara justo en
 * el golpe, el movimiento se leería como una animación que termina.
 */
const TILT_FROM = 3.1;
const TILT_TO = -0.5;

export function KillsScene({ lt, v }: SceneProps) {
  // En vertical, los textos al tamaño relativo del horizontal y la línea entrando por el borde del cuadro vertical.
  const portrait = usePortrait();
  const FW = portrait ? 720 : W;
  const rootRef = useRef<HTMLDivElement>(null);
  const phase: "a" | "b" = lt < KL.aEnd ? "a" : "b";
  // La segunda frase entra después: hay que volver a medirla cuando aparece.
  const rects = useOffsets(rootRef, ['[data-block="a"]', '[data-eye="a"]', '[data-block="b"]', '[data-eye="b"]'], [phase]);
  const isA = phase === "a";
  const block = rects[`[data-block="${phase}"]`];
  const eye = rects[`[data-eye="${phase}"]`];
  const T = isA
    ? { at: KL.aIn, enter: 900, line: KL.aLine, hit: KL.aHit, end: KL.aEnd, dir: -1 as const }
    : { at: KL.bIn, enter: 850, line: KL.bLine, hit: KL.bHit, end: KL.bEnd, dir: 1 as const };
  const u = seg(lt, T.at, T.end);
  const scale = Math.pow(ZOOM_TOP, push(u));
  // Cuánto se metió la cámara, 0→1 y lineal en la escala: con esto se gradúan el
  // desenfoque, la marca y el fundido de la línea.
  const z = (scale - 1) / (ZOOM_TOP - 1);
  // La inclinación, lineal en el tiempo del medio tiempo (no en la escala): a
  // velocidad angular constante se lee como una deriva, y no como una entrada
  // que arranca y frena. El signo la tira hacia el borde por el que entra la
  // línea, así que la segunda mitad queda espejada igual que el vuelo.
  const tilt = lerp(TILT_FROM, TILT_TO, u) * -T.dir;
  const fontPx = portrait ? 62 : 100;
  const E = findEye(tokenize(isA ? v.kills.words[0] : v.kills.words[1]).map((t) => t.text).join("")).eye;
  const eyeR = E.r * fontPx;
  const ex = eye ? eye.x + E.cx * fontPx : FW / 2;
  const ey = eye ? eye.y + (BASE - E.cy) * fontPx : 400;
  const origin = block && eye ? `${(ex - block.x).toFixed(1)}px ${(ey - block.y).toFixed(1)}px` : "50% 50%";
  // El agujero es EXACTAMENTE la contraforma de la letra mientras dura el
  // acercamiento —si se pasa, se ve un punto claro tapando la tinta— y sólo en el
  // último tramo se abre y se come la letra: ese es el corte a la escena que sigue.
  const open = 0.92 + 2.2 * Math.pow(seg(u, 0.95, 1), 2);
  const hole = !isA && z > 0.001 ? eyeR * open * scale : 0;
  const mask = hole > 0 ? `radial-gradient(circle at ${ex.toFixed(1)}px ${ey.toFixed(1)}px, transparent ${hole.toFixed(0)}px, #000 ${(hole + 1).toFixed(0)}px)` : undefined;
  // El rebote es contra el lomo de la letra: sobre el techo de su tinta y en el
  // medio del glifo. Cualquier holgura acá se multiplica por la escala y a mitad
  // del zoom la línea se ve flotando por encima.
  const hx = eye ? eye.x + eye.w / 2 : FW / 2;
  const hy = (eye ? eye.y : 344) + (BASE - E.top) * fontPx;
  // Y el lomo se mueve: el renglón está girando sobre el ojo y la capa de la
  // línea no gira con él. El punto de impacto se rota a mano alrededor del mismo
  // eje —positivo = horario, como el rotate de CSS—, que es lo que mantiene la
  // línea apoyada en la letra y no al lado.
  const rad = (tilt * Math.PI) / 180;
  const path = flight(
    ex + (hx - ex) * Math.cos(rad) - (hy - ey) * Math.sin(rad),
    ey + (hx - ex) * Math.sin(rad) + (hy - ey) * Math.cos(rad),
    T.dir,
    FW,
  );
  const durIn = T.hit - T.line;
  // Nunca más allá del corte, aunque la frase de otro idioma corra el vértice.
  const durBack = Math.min((path.lenBack * V_OUT * durIn) / (BOUNCE_LOSS * path.lenIn * V_IN), T.end - T.hit);
  const a = seg(lt, T.line, T.hit);
  const bck = seg(lt, T.hit, T.hit + durBack);
  const inP = a * (2 - V_IN + (V_IN - 1) * a);
  const backP = bck * (V_OUT - (V_OUT - 1) * bck);
  // El trazo es parte de la escena: engrosa con la cámara como todo lo demás.
  // Pero sólo hasta ×4: más allá, 5 px se vuelven una franja negra que tapa el
  // cuadro, así que de ahí en adelante se queda en 20 px de pantalla.
  const thick = Math.min(scale, 4);
  // Y se va antes de que ese tope llegue a notarse.
  const lineOp = 1 - clamp01(seg(z, 0.05, 0.25));
  // El renglón chico no se desarma: se apaga en el golpe.
  const preGone = easeOut(seg(lt, T.hit, T.hit + 360));
  // De `rotateIn` se queda el golpe de escala, el desenfoque y el fundido, pero
  // no su giro de entrada (de -26° a plomo en 900 ms): el único giro de la
  // escena es la inclinación, y las dos cosas juntas se peleaban.
  const base = rotateIn(seg(lt, T.at, T.at + T.enter), 0, 0);
  const blockStyle: CSSProperties = {
    ...base,
    transformOrigin: origin,
    transform: `${base.transform ?? ""} scale(${scale.toFixed(3)}) rotate(${tilt.toFixed(2)}deg)`,
    filter: z > 0.001 ? `blur(${(z * 5).toFixed(2)}px)` : base.filter,
  };
  return (
    <div ref={rootRef} className={`${s.scene} ${s.paper}`} style={{ maskImage: mask, WebkitMaskImage: mask }}>
      {eye && (
        <div className={s.layer} style={{ transform: `scale(${scale.toFixed(3)})`, transformOrigin: `${ex.toFixed(1)}px ${ey.toFixed(1)}px`, opacity: lineOp }}>
          {/* La capa entera se agranda con la cámara, así que el ancho va dividido
              por la escala: lo que queda es el grosor EN PANTALLA, 5 px × `thick`. */}
          <Stroke d={path.into} p={inP} color="#14150f" width={(5 * thick) / scale} />
          <Stroke d={path.back} p={backP} color="#14150f" width={(5 * thick) / scale} />
          {inP > 0.0005 && backP < 0.999 && (
            <OnPath d={backP > 0 ? path.back : path.into} at={backP > 0 ? backP : inP} className={s.rider}>
              <i className={s.dot} style={{ width: 17, height: 17, margin: -8.5, transform: `scale(${(thick / scale).toFixed(4)})` }} />
            </OnPath>
          )}
        </div>
      )}
      <div className={s.typeBlock}>
        <div key={phase} data-block={phase} className={s.killBlock} style={blockStyle}>
          <span
            className={s.displaySm}
            style={{
              ...(portrait ? { fontSize: 38 } : null),
              opacity: 1 - preGone,
              transform: `translateY(${(-preGone * 14).toFixed(1)}px)`,
              filter: preGone > 0.001 ? `blur(${(preGone * 7).toFixed(1)}px)` : undefined,
            }}
          >
            {isA ? v.kills.pre[0] : v.kills.pre[1]}
          </span>
          <span className={s.killWord} style={{ fontSize: fontPx }}>
            <EyeText text={isA ? v.kills.words[0] : v.kills.words[1]} tag={phase} lt={lt} at={T.hit} />
          </span>
        </div>
      </div>
      <Mark tone="ink" opacity={1 - z} />
    </div>
  );
}

/* 7 · El cielo y las letras que se rompen ---------------------------------- */

/**
 * El punto de la frase: el centro de su tinta y su radio, en fracciones del
 * cuerpo, medidos con canvas. La línea tiene que terminar EXACTAMENTE ahí: es el
 * punto en el que se convierte.
 */
const PERIOD = { cx: 0.1462, cy: 0.0735, r: 0.0812 };
/**
 * Dónde cae la base del renglón dentro de la caja de un `span` EN LÍNEA: es el
 * ascenso del font (1 em en Outfit), porque a un inline el navegador le da de
 * alto el área de contenido del font y no la interlínea. Por eso el punto va en
 * un span sin `display`: así se mide sin tocar el renglón.
 */
const INLINE_BASE = 1;
/**
 * Los tiempos salen de medir la referencia cuadro por cuadro (13,78→16,25 s):
 * la cabeza llega al punto a los ~490 ms, se sostiene ~600, la línea se retrae
 * en ~300 y ahí se rompen las letras, que quedan desparramadas casi un segundo
 * hasta el corte.
 */
const PU = { arrive: 490, hold: 1070, suck: 300, crack: 1370, out: 2500, font: 44 };

/**
 * El remate, calcado de la referencia (14,0–16,25). En el cielo celeste, una
 * línea fina entra por la derecha bien abajo, viene hacia la frase y en el final
 * se endereza: sube casi vertical y se planta justo donde va el punto, que hasta
 * ese momento no estaba. Se sostiene; después la COLA alcanza a la cabeza y la
 * línea entera se retrae hasta desaparecer adentro del punto. En cuanto termina
 * de tragarse, las letras de la última palabra se rompen: giran ~90°, saltan
 * apenas y quedan desparramadas EN SU LUGAR, sin irse a ninguna parte. El resto
 * de la frase no se mueve.
 */
export function PunchScene({ lt, v }: SceneProps) {
  const portrait = usePortrait();
  const FW = portrait ? 720 : W;
  // En vertical la frase va más chica, como se ve en el horizontal; el punto mide lo mismo que el de la frase.
  const font = portrait ? 34 : PU.font;
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useOffsets(rootRef, ['[data-dot]']);
  const dot = rects['[data-dot]'];
  const px = dot ? dot.x + PERIOD.cx * font : 872;
  const py = dot ? dot.y + (INLINE_BASE - PERIOD.cy) * font : 371;
  // El gancho de la referencia: entra por el borde derecho, barre por debajo de
  // la frase y en los últimos píxeles se pone vertical para clavar el punto.
  const path = `M ${FW + 60} ${(py + 183).toFixed(1)} C ${(px + 200).toFixed(1)} ${(py + 173).toFixed(1)} ${(px + 24).toFixed(1)} ${(py + 120).toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)}`;
  const head = easeOut(seg(lt, 0, PU.arrive));
  const from = easeOut(seg(lt, PU.hold, PU.hold + PU.suck));
  // El punto es la cabeza de la línea: viaja con ella y se queda cuando la línea
  // ya no está. Mide lo que mide el punto de verdad, que es el que reemplaza.
  const r = PERIOD.r * font;
  const loose = v.punchline.struck;
  const cut = loose.lastIndexOf(" ");
  const last = loose.slice(cut + 1);
  // Y se va todo junto para atrás: en la referencia son TRES cuadros —la frase
  // se achica, se desenfoca y se apaga— y el corte la agarra ya ida.
  const back = easeOut(seg(lt, PU.out, PU.out + 150));
  const going: CSSProperties | undefined =
    back > 0.001
      ? { transform: `scale(${(1 - back * 0.17).toFixed(3)})`, filter: `blur(${(back * 12).toFixed(1)}px)`, opacity: 1 - back }
      : undefined;
  return (
    <div ref={rootRef} className={`${s.scene} ${s.sky}`}>
      <div className={s.layer} style={going}>
      <Stroke d={path} p={head} from={from} color="#14150f" width={3} />
      {head > 0.0005 && (
        <OnPath d={path} at={head} className={s.rider}>
          <i className={s.dot} style={{ width: r * 2, height: r * 2, margin: -r }} />
        </OnPath>
      )}
      <div className={s.typeBlock}>
        <h2 className={s.punchLine} style={portrait ? { fontSize: font } : undefined}>
          {v.punchline.pre}
          {loose.slice(0, cut + 1)}
          {/* La semilla no es decorativa: con la 4 la primera letra se corre a la
              DERECHA y la última a la izquierda, así el garabato no se come el
              espacio de la palabra anterior ni se pega al punto. */}
          <Tumble text={last} lt={lt} at={PU.crack} seed={4} />
          {/* Sólo para medir: el punto que se ve es la cabeza de la línea. */}
          <span data-dot="" style={{ opacity: 0 }}>
            {v.punchline.post}
          </span>
        </h2>
      </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}
