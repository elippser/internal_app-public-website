"use client";

import { Fragment, memo, useRef, type CSSProperties } from "react";
import type { SceneProps } from "../scenes";
import type { VideoDict } from "../timeline";
import { clamp01, easeIn, easeInExpo, easeInOut, easeOut, easeOutExpo, lerp, noise, seg } from "../timeline";
import { Blurred, Camera, Cursor, Gradient, HBlur, IsotypeStill, LockupStill, Mark, Words, defocus, tokenize, useOffsets, type CursorKey, type Rect } from "../fx";
import Calendar from "../pms/Calendar";
import PmsShell from "../pms/PmsShell";
import { APP_H, APP_W, CardContent, MODULES, MODULE_COLOR, MODULE_H, MODULE_W, ModuleCard, OCCUPANCY, PHONE_H, PHONE_W, ProductShot, calCategories, calDays, calLabels, shellLabels, type CardKey } from "./data";
import s from "../scenes.module.css";

/**
 * Acto 3 — los módulos. Calca 25.0 → 37.75 de la referencia: tarjetas que
 * entran desde abajo con estela y salen hacia arriba, la cámara que se aleja
 * hasta una grilla y se zambulle, la pila vista en 3/4 con los cantos de color,
 * la tarjeta del logo que despliega la UI bajo "Un solo sistema", y "Diseñado
 * con precisión" con la UI inclinada, el rótulo con halo y la guía punteada.
 */

/* 1 · Las tarjetas, una por una -------------------------------------------- */

// FUERA DEL VIDEO desde el 19-09-2026 (el usuario la sacó): ya no está en
// `timeline.ts` ni en `SCENES`. Se deja el código —y las seis tarjetas de
// `data.tsx`— porque `acts/` no está versionada y borrarlo sería definitivo.

type Slot = { key: CardKey; at: number; end: number; phone?: boolean; push?: boolean };
/** Cada tarjeta dura lo que dura su interacción; la última hace el push-in del "Brain". */
const SLOTS: Slot[] = [
  { key: "reservas", at: 0, end: 1500 },
  { key: "linkhub", at: 1500, end: 3900, phone: true },
  { key: "revenue", at: 3900, end: 5300 },
  { key: "tourism", at: 5300, end: 7000 },
  { key: "ia", at: 7000, end: 8300 },
  { key: "staypass", at: 8300, end: 9600, phone: true, push: true },
];
const FLY = 190;

export function CardsScene({ lt, v }: SceneProps) {
  const a = lt / 1000;
  return (
    <div className={`${s.scene} ${s.inkBg}`}>
      <Gradient lt={lt} bright />
      {SLOTS.map((c) => {
        if (lt < c.at || lt >= c.end + FLY) return null;
        const cl = lt - c.at;
        const inP = easeOutExpo(seg(lt, c.at, c.at + FLY));
        const outP = easeInExpo(seg(lt, c.end - 40, c.end + FLY - 40));
        const w = c.phone ? PHONE_W : APP_W;
        const h = c.phone ? PHONE_H : APP_H;
        const push = c.push ? 1 + 0.16 * easeInOut(seg(cl, 200, c.end - c.at)) : 1;
        const sc = (c.phone ? 0.98 : 0.86) * push;
        const y = lerp(560, 0, inP) - outP * 620;
        const blur = (1 - inP) * 20 + outP * 22;
        const rotY = Math.sin(a * 0.9 + c.at) * 4 + (1 - inP) * -6;
        const rotZ = Math.sin(a * 0.6 + c.at) * 1.8 + (1 - inP) * -3;
        const exit = outP > 0.999;
        if (exit) return null;
        return (
          <div key={c.key} className={s.flyCard} style={{ width: w, height: h, left: (1280 - w) / 2, top: (720 - h) / 2, transform: `perspective(1400px) translate3d(0, ${y.toFixed(1)}px, 0) rotateX(6deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) scale(${sc.toFixed(4)})`, opacity: Math.min(1, inP * 1.6) * (1 - easeIn(outP)) }}>
            <Blurred y={blur} className={[s.card, c.phone ? s.cardPhone : ""].join(" ")} style={{ position: "relative", width: w, height: h }}>
              <CardContent spec={c.key} cl={cl} v={v} />
            </Blurred>
          </div>
        );
      })}
      <Mark tone="paper" />
    </div>
  );
}

/* 1b · La rueda ------------------------------------------------------------ */

/**
 * Las tarjetas pasan como en una RUEDA (calco de la referencia 25,0 → 28,7):
 * van pegadas a un tambor de radio `R` cuyo eje está detrás de la pantalla, a
 * `step` grados una de otra. El tambor avanza a golpes (`move` ms cada
 * `period`): la del frente se va por arriba con el borde de abajo hacia atrás y
 * la siguiente sube desde abajo con el de arriba hacia atrás y se asienta. Con
 * `easeOut` la que se va sale rápido y la que llega frena largo, como en la
 * referencia (~130 ms de salida, ~300 de llegada). Entre golpes el tambor sigue
 * deslizándose apenas (`drift`) para que nada quede quieto, y la estela vertical
 * sale de la velocidad del tambor. La última es Roombir IA: no deriva, y la
 * cámara se le acerca suave hacia la cabecera; `grid` arranca en ese mismo
 * encuadre (`WHEEL_END`) y se aleja hasta la grilla.
 */
const WHEEL: CardKey[] = ["reservas", "linkhub", "revenue", "tourism", "staypass", "ia"];
// `step` 70°: con 58 la cabecera de la siguiente asomaba abajo durante la pausa
// (quedaba a ~8 px del borde); en la referencia se ve una sola tarjeta.
const WH = { period: 830, move: 380, step: 70, R: 700, scale: 1.5, drift: 0.05, zoom: 4140, zoomEnd: 5350, end: 5450 };
/**
 * El encuadre final de la rueda, que `grid` retoma: acercamiento `Z` alrededor
 * de (`px`, `py`). El foco deja la cabecera arriba a la izquierda con aire
 * (~200, 124), como "Brain" en la referencia; con (505, 190) se salía por arriba.
 */
const WHEEL_END = { Z: 2.25, px: 640, py: 90 };

const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

/** La posición del tambor, en tarjetas: 0 = la primera al frente, 1 = la segunda… */
function drum(t: number): number {
  const n = WHEEL.length;
  for (let k = n - 1; k >= 0; k--) {
    const t0 = k * WH.period;
    if (t < t0) continue;
    const from = k === 0 ? -1 : k - 1 + WH.drift;
    const arrived = lerp(from, k, easeOut(seg(t, t0, t0 + WH.move)));
    return k < n - 1 ? arrived + WH.drift * seg(t, t0 + WH.move, t0 + WH.period) : arrived;
  }
  return -1;
}

/** Progreso de un único salto de la rueda. En reposo es exactamente cero: el
 * blur sólo debe existir mientras se cambia de tarjeta, nunca al leerla. */
function drumMove(t: number): number {
  const index = Math.min(WHEEL.length - 1, Math.max(0, Math.floor(t / WH.period)));
  const start = index * WH.period;
  return seg(t, start, start + WH.move);
}

/**
 * La tarjeta de módulo memorizada: el reloj redibuja la escena a cada cuadro y
 * la UI de adentro no cambia. En la grilla hay ~50; sin esto se rearmaban todas.
 */
const StillCard = memo(function StillCard({ k, v, className }: { k: CardKey; v: VideoDict; className?: string }) {
  return <ModuleCard k={k} v={v} className={className} />;
});

export function WheelScene({ lt, v }: SceneProps) {
  const d = drum(lt);
  const speed = (drum(lt + 8) - drum(lt - 8)) / 16;
  const move = drumMove(lt);
  const zoomP = smooth(seg(lt, WH.zoom, WH.zoomEnd));
  // El acercamiento a Roombir IA ocupa un plano entero: crece de forma
  // progresiva, desacelera antes del corte y deja que `grid` haga el zoom-out.
  const zc = lerp(1, WHEEL_END.Z, zoomP);
  // Estela: lo que recorre la tarjeta en pantalla en ~12 ms, con tope.
  const blur = move > 0 && move < 0.94 ? Math.min(16, Math.abs(speed) * ((WH.step * Math.PI) / 180) * WH.R * 7) : 0;
  const rz = move > 0 && move < 0.94 ? Math.max(-3.5, Math.min(3.5, speed * 900)) : 0;
  return (
    <div className={`${s.scene} ${s.inkBg}`}>
      {/* Mismo reloj que el cierre de `built` (`lt − end`): al corte, el mismo cuadro. */}
      <Gradient lt={lt} deep />
      <Camera scale={zc} origin={`${WHEEL_END.px}px ${WHEEL_END.py}px`}>
        <div className={s.wheelStage}>
          {WHEEL.map((k, i) => {
            const a = WH.step * (i - d);
            // 150° y no 78°: con 78 la tarjeta se montaba a mitad del giro que
            // la traía al frente —montar una UI real cuesta un cuadro largo— y
            // se la veía "demorar en aparecer". A 150° nace unos dos períodos
            // antes, fuera de cuadro y durante una pausa, y llega ya dibujada.
            // Como mucho hay tres montadas a la vez.
            if (a > 150 || a < -78) return null;
            // El tambor conserva la profundidad, pero la card no se pone de
            // canto: el lenguaje de la referencia es una perspectiva suave,
            // casi frontal, con el movimiento y la sombra haciendo el trabajo.
            const visualA = a * 0.58;
            const r = (visualA * Math.PI) / 180;
            return (
              <div
                key={k}
                className={s.wheelCard}
                style={{
                  transform: `translate3d(-50%, -50%, 0) translate3d(0, ${(WH.R * Math.sin(r)).toFixed(1)}px, ${(WH.R * (Math.cos(r) - 1)).toFixed(1)}px) rotateX(${(visualA * 0.82).toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${WH.scale})`,
                }}
              >
                <Blurred y={blur}>
                  <StillCard k={k} v={v} />
                </Blurred>
              </div>
            );
          })}
        </div>
      </Camera>
      <Mark tone="paper" />
    </div>
  );
}

/* 2 · La cámara se aleja de Roombir IA hasta la grilla ---------------------- */

/**
 * Calco de la referencia 28,73 → 31,0: la cámara se aleja de la última tarjeta
 * de la rueda —que es la celda del centro— hasta ver la grilla; las columnas se
 * deslizan en sentidos alternos (las pares suben, las impares bajan) todo el
 * rato, y la grilla queda quieta para que `merge` la junte en una sola
 * tarjeta (hasta el 19-09-2026 terminaba zambulléndose en el degradado). La cámara son dos
 * escalas anidadas para empalmar con la rueda: la de afuera es el acercamiento
 * de la rueda (`WHEEL_END`) y la de adentro lleva el tamaño de la tarjeta de la
 * rueda al de la celda (`WH.scale / CELL`); las dos terminan en 1. El alejamiento
 * arranca suave y enseguida va rápido, como la referencia (28,73 → 29,0).
 */
// Medidas de la referencia: tarjetas de ~198 px con ~58 px entre ellas (se ven 5 columnas).
const CELL = 0.66;
const CW = MODULE_W * CELL;
const CH = MODULE_H * CELL;
const GAP = 50;
// Roombir IA va sólo en el centro; el resto sale de los otros siete módulos, con
// saltos de 3 por columna y 2 por fila (módulo 7): ninguna queda al lado de una igual.
const GRID_POOL = MODULES.filter((k) => k !== "ia");
// 5×5 y no 7×7: la fila y la columna ±3 nunca entran en cuadro (ni con la
// deriva de las columnas) y montar las 49 tarjetas congelaba el corte ~300 ms.
const GRID_SPAN = [-2, -1, 0, 1, 2];
/**
 * La grilla se premonta debajo de la rueda (`preroll` en timeline.ts) y va
 * montando sus tarjetas de a una, del centro hacia afuera, para repartir el
 * costo en ~50 cuadros en vez de pagarlo todo en el cuadro del corte. `GRID_RANK`
 * es el turno de cada celda; todas están montadas `GRID_PRE.slack` ms antes del corte.
 */
export const GRID_PRE = { ms: 1000, slack: 200 };
const GRID_RANK = new Map(
  GRID_SPAN.flatMap((c) => GRID_SPAN.map((r) => ({ c, r })))
    .sort((a, b) => a.c * a.c + a.r * a.r - (b.c * b.c + b.r * b.r))
    .map(({ c, r }, i) => [`${c},${r}`, i]),
);
const GR = { pull: 850, end: 1900, colSpeed: 42 };
const gridKey = (c: number, r: number): CardKey => (c === 0 && r === 0 ? "ia" : GRID_POOL[(((c * 3 + r * 2) % 7) + 7) % 7]);
/** Cuánto se corrió la columna `c` en el instante `t` de la grilla: las pares suben, las impares bajan. */
function colOff(c: number, t: number): number {
  const odd = Math.abs(c) % 2 === 1;
  return (odd ? (CH + GAP) / 2 : 0) + (odd ? 1 : -1) * GR.colSpeed * (t / 1000);
}

/**
 * La luz de la grilla: un punto FIJO de la pantalla, arriba a la izquierda,
 * donde el degradado es más claro. El borde de cada tarjeta es un anillo con
 * degradado, como el canto de los íconos de iOS: blanco del lado que mira a la
 * luz, se funde en el color del módulo hacia los costados y deja un reflejo más
 * débil del lado opuesto. Como la luz está quieta y la tarjeta se mueve —con la
 * cámara mientras se aleja y con su columna después—, el brillo gira por el
 * borde; y cuanto más cerca pasa de la luz, más se enciende. Nada sale del
 * anillo. La luz arranca apagada y se enciende con el alejamiento: al corte la
 * celda del centro es la tarjeta de la rueda, que no la tiene.
 */
const LIGHT = { x: 470, y: 150, reach: 1100, on: 120, onEnd: 700 };
/**
 * El anillo de color, en unidades de tarjeta. Al corte es el de `.moduleCard`
 * (4, el de la rueda); con 4 la grilla lo achica a 2,6 px de pantalla y se lee
 * más fino que en la rueda (6), así que se ensancha con el alejamiento hasta ~5 px.
 */
const RING = { from: 4, to: 7.5 };
const WHITE = (a: number) => `rgba(255, 255, 255, ${clamp01(a).toFixed(3)})`;
// El brillo del borde alrededor de la dirección de la luz (0°): pico ancho y suave, y un reflejo débil enfrente.
const RIM_STOPS: [number, number][] = [[0, 1], [22, 0.62], [70, 0], [125, 0], [180, 0.5], [235, 0], [290, 0], [338, 0.62], [360, 1]];

type Light = { sx: number; sy: number; half: { w: number; h: number }; on: number; ring: number; color: string };

/**
 * El borde de una tarjeta cuyo centro cae en (`sx`, `sy`) de la pantalla; nada
 * si está fuera de cuadro. Va DETRÁS de la tarjeta: es una placa redondeada
 * `ring` más grande por lado y la cara opaca de la tarjeta tapa el centro, así
 * que sólo se ve el canto y no hace falta máscara (con máscara la grilla perdía
 * ~27 % de cuadros). La placa lleva, de abajo hacia arriba, el color del módulo,
 * la línea blanca pegada a la cara (`padding-box`, 1,5) y el brillo.
 */
function CardLight({ sx, sy, half, on, ring, color }: Light) {
  if (sx + half.w < -20 || sx - half.w > 1300 || sy + half.h < -20 || sy - half.h > 740) return null;
  const layers = [`linear-gradient(${WHITE(0.8)}, ${WHITE(0.8)}) padding-box`, `linear-gradient(color-mix(in srgb, ${color} 50%, transparent), color-mix(in srgb, ${color} 50%, transparent)) border-box`];
  if (on >= 0.002) {
    const dx = LIGHT.x - sx;
    const dy = LIGHT.y - sy;
    // Hacia dónde queda la luz, con la convención de los gradientes de CSS (0° arriba, sentido horario).
    // Ángulo al grado e intensidad al 2 %: con la grilla quieta el brillo gira ~8°/s, y así cada canto
    // se repinta sólo cuando cambia algo (unas pocas veces por segundo) en vez de a cada cuadro.
    const toward = Math.round((Math.atan2(dx, -dy) * 180) / Math.PI);
    const lit = Math.round(50 * on * (0.45 + 0.55 * Math.pow(clamp01(1 - Math.hypot(dx, dy) / LIGHT.reach), 1.3))) / 50;
    layers.unshift(`conic-gradient(from ${toward}deg, ${RIM_STOPS.map(([deg, al]) => `${WHITE(al * lit)} ${deg}deg`).join(", ")}) border-box`);
  }
  return (
    <>
      <i className={s.cardDrop} />
      <i className={s.cardRim} style={{ inset: -ring, borderWidth: ring - 1.5, borderRadius: 22 + ring, background: layers.join(", ") }} />
    </>
  );
}

function pullCurve(lt: number): number {
  const u = seg(lt, 0, GR.pull);
  return (1 - Math.pow(1 - u, 4)) * smooth(Math.min(1, u / 0.2));
}

/** Cuántas celdas hay montadas mientras la escena está premontada (`lt` < 0). */
const mountedAt = (lt: number) => (lt >= 0 ? GRID_RANK.size : Math.ceil(GRID_RANK.size * clamp01((lt + GRID_PRE.ms) / (GRID_PRE.ms - GRID_PRE.slack))));

export function GridScene({ lt, v }: SceneProps) {
  const p = pullCurve(lt);
  const outer = lerp(WHEEL_END.Z, 1, p);
  const inner = lerp(WH.scale / CELL, 1, p);
  const on = smooth(seg(lt, LIGHT.on, LIGHT.onEnd));
  const k = CELL * inner * outer;
  const half = { w: (MODULE_W / 2) * k, h: (MODULE_H / 2) * k };
  // Al centésimo: pasado el alejamiento queda quieto y el canto no se repinta.
  const ring = Math.round(100 * lerp(RING.from, RING.to, p)) / 100;
  const mounted = mountedAt(lt);
  return (
    // Premontada va encima de la rueda (el reproductor apila en orden): invisible hasta el corte.
    <div className={`${s.scene} ${s.inkBg}`} style={lt < 0 ? { opacity: 0 } : undefined}>
      <Gradient lt={lt + WH.end} deep />
      <Camera scale={outer} origin={`${WHEEL_END.px}px ${WHEEL_END.py}px`}>
        <Camera scale={inner}>
          {GRID_SPAN.map((c) => {
            const off = colOff(c, lt);
            return GRID_SPAN.map((r) => {
              if ((GRID_RANK.get(`${c},${r}`) ?? 0) >= mounted) return null;
              const key = gridKey(c, r);
              // Dónde cae el centro de la tarjeta en pantalla: las dos cámaras, de adentro hacia afuera.
              const x1 = 640 + c * (CW + GAP) * inner;
              const y1 = 360 + (r * (CH + GAP) + off) * inner;
              const sx = WHEEL_END.px + (x1 - WHEEL_END.px) * outer;
              const sy = WHEEL_END.py + (y1 - WHEEL_END.py) * outer;
              return (
                <div
                  key={`${c},${r}`}
                  className={s.gridCell}
                  style={{ left: 640 + c * (CW + GAP) - CW / 2, top: 360 + r * (CH + GAP) - CH / 2, width: CW, height: CH, transform: `translate3d(0, ${off.toFixed(1)}px, 0)` }}
                >
                  <div style={{ position: "relative", width: MODULE_W, height: MODULE_H, transform: `scale(${CELL})`, transformOrigin: "0 0" }}>
                    <CardLight sx={sx} sy={sy} half={half} on={on} ring={ring} color={MODULE_COLOR[key]} />
                    <StillCard k={key} v={v} />
                  </div>
                </div>
              );
            });
          })}
        </Camera>
      </Camera>
      <Mark tone="paper" />
    </div>
  );
}

/* 2b · Se juntan en una sola: la del logo ------------------------------------ */

/**
 * Las tarjetas de la grilla se juntan en una sola. Arranca en el último cuadro
 * de `grid` —mismas posiciones (las columnas siguen derivando con el reloj
 * `GR.end + lt`), mismo canto, misma luz, mismo degradado—. En el centro
 * aparece una tarjeta NUEVA, blanca y con el canto de la marca (la de Roombir IA
 * no es el destino: el usuario pidió "una nueva card" y la sacó), y todas —Roombir
 * IA incluida— viajan hacia ella casi a la vez —el anillo de adentro y 130 ms
 * después el de afuera, como una implosión— y se meten DEBAJO: se achican y se
 * apagan antes de llegar, así no se apilan encima (la pila 3D se sacó por eso; con
 * llegadas escalonadas de a una se amontonaban igual). La nueva va al medio de la
 * pantalla desde el primer cuadro —si seguía con la columna, el grupo quedaba
 * arriba y se cortaba— y crece un poco con cada una que absorbe; después aparece
 * el logo de Roombir y crece hasta `LOGO_CARD`, que es donde la retoma `unfold`.
 */
const MG = { pop: 420, first: 80, ring: 130, jitter: 12, fly: 560, center: 900, reveal: 1000, grow: 950, end: 2000 };
/** La tarjeta del logo al final de `merge` y al principio de `unfold`: centro, escala de la tarjeta y color del canto. */
const LOGO_CARD = { x: 640, y: 360, scale: 0.84, color: "#4e6b28" };

/** La cara blanca de la tarjeta del logo; `t` = ms desde que aparece el isotipo, que sube al entrar. */
function LogoFace({ t }: { t: number }) {
  const iso = easeOut(seg(t, 120, 560));
  return (
    <div className={s.logoFace}>
      {/* Sólo el isotipo: en la tarjeta el logotipo completo queda chico y se lee peor. */}
      <span style={{ display: "block", opacity: iso, transform: `translate3d(0, ${((1 - iso) * 14).toFixed(1)}px, 0)` }}>
        <IsotypeStill size={92} tone="ink" />
      </span>
    </div>
  );
}

/** La tarjeta del logo QUIETA en `LOGO_CARD`: el último cuadro de `merge`, que `unfold` deja fijo debajo de la UI. */
function LogoCard() {
  const k = LOGO_CARD.scale;
  return (
    <div className={s.gridCell} style={{ left: LOGO_CARD.x - CW / 2, top: LOGO_CARD.y - CH / 2, width: CW, height: CH, transform: `scale(${(k / CELL).toFixed(4)})` }}>
      <div style={{ position: "relative", width: MODULE_W, height: MODULE_H, transform: `scale(${CELL})`, transformOrigin: "0 0" }}>
        <CardLight sx={LOGO_CARD.x} sy={LOGO_CARD.y} half={{ w: (MODULE_W / 2) * k, h: (MODULE_H / 2) * k }} on={1} ring={RING.to} color={LOGO_CARD.color} />
        <LogoFace t={1e4} />
      </div>
    </div>
  );
}

export function MergeScene({ lt, v }: SceneProps) {
  const T = GR.end + Math.max(0, lt);
  const mounted = mountedAt(lt);
  const grow = smooth(seg(lt, MG.grow, MG.end));
  const pop = easeOut(seg(lt, 0, MG.pop));
  const cx = LOGO_CARD.x;
  const cy = lerp(360 + colOff(0, T), LOGO_CARD.y, smooth(seg(lt, 0, MG.center)));
  let absorbed = 0;
  const flying = GRID_SPAN.flatMap((c) =>
    GRID_SPAN.map((r) => {
      const rank = GRID_RANK.get(`${c},${r}`) ?? 0;
      if (rank >= mounted) return null;
      // Roombir IA ya está en el centro: se hunde debajo de la nueva desde el primer cuadro.
      const ring = Math.max(Math.abs(c), Math.abs(r));
      const t0 = ring === 0 ? 0 : MG.first + (ring - 1) * MG.ring + (rank % 8) * MG.jitter;
      const u = seg(lt, t0, t0 + MG.fly);
      absorbed += smooth(seg(u, 0.6, 1));
      if (u >= 1) return null;
      const e = smooth(u);
      const bx = 640 + c * (CW + GAP);
      const by = 360 + r * (CH + GAP);
      const x = lerp(bx, cx, e);
      const y = lerp(by + colOff(c, T), cy, e);
      const sc = lerp(1, 0.7, e);
      const key = gridKey(c, r);
      const k = CELL * sc;
      return (
        <div
          key={`${c},${r}`}
          className={s.gridCell}
          style={{ left: bx - CW / 2, top: by - CH / 2, width: CW, height: CH, zIndex: 100 - rank, opacity: 1 - smooth(seg(u, 0.55, 0.95)), transform: `translate3d(${(x - bx).toFixed(1)}px, ${(y - by).toFixed(1)}px, 0) scale(${sc.toFixed(4)})` }}
        >
          <div style={{ position: "relative", width: MODULE_W, height: MODULE_H, transform: `scale(${CELL})`, transformOrigin: "0 0" }}>
            <CardLight sx={x} sy={y} half={{ w: (MODULE_W / 2) * k, h: (MODULE_H / 2) * k }} on={1} ring={RING.to} color={MODULE_COLOR[key]} />
            <StillCard k={key} v={v} />
          </div>
        </div>
      );
    }),
  );
  // Aparece desde 0,75, crece un 7 % a medida que absorbe y después hasta el tamaño de la tarjeta del logo.
  const cs = lerp(lerp(0.75, 1, pop) + 0.07 * (absorbed / GRID_RANK.size), LOGO_CARD.scale / CELL, grow);
  const k = CELL * cs;
  return (
    // Premontada va encima de la grilla: invisible hasta el corte.
    <div className={`${s.scene} ${s.inkBg}`} style={lt < 0 ? { opacity: 0 } : undefined}>
      {/* Mismo reloj que la grilla: al corte, el mismo degradado. */}
      <Gradient lt={lt + WH.end + GR.end} deep />
      {flying}
      <div
        className={s.gridCell}
        style={{ left: 640 - CW / 2, top: 360 - CH / 2, width: CW, height: CH, zIndex: 200, opacity: smooth(seg(lt, 0, 200)), transform: `translate3d(${(cx - 640).toFixed(1)}px, ${(cy - 360).toFixed(1)}px, 0) scale(${cs.toFixed(4)})` }}
      >
        <div style={{ position: "relative", width: MODULE_W, height: MODULE_H, transform: `scale(${CELL})`, transformOrigin: "0 0" }}>
          <CardLight sx={cx} sy={cy} half={{ w: (MODULE_W / 2) * k, h: (MODULE_H / 2) * k }} on={1} ring={RING.to} color={LOGO_CARD.color} />
          <LogoFace t={lt - MG.reveal} />
        </div>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

/* 3 · La pila: caen, se comprimen en la del logo y florece el degradado ----- */

// FUERA DEL VIDEO desde el 19-09-2026 (el usuario la sacó: era la escena 14):
// ya no está en `timeline.ts` ni en `SCENES`. Se deja el código porque `acts/`
// no está versionada. Para volver a ponerla, `grid` tiene que lavarse a papel
// otra vez y `unfold` recuperar la placa (`PileView` en `PS.end`) y el reloj
// del degradado `lt + 3000`.

/**
 * Calco de la referencia 31,0 → 33,3, con su 3D. La pose es la medida sobre el
 * cuadro de 32,5: el texto de la tarjeta sube a la derecha a −32° y su eje largo
 * baja a +26°, lo que da `rotateX(56.5°) rotateZ(−48.5°)` (lados en pantalla
 * 1,43 : 1, medido 1,4). Cada tarjeta es una PLACA con espesor de verdad —la
 * cara, un borde blanco y el canto de su color, en capas `translateZ`—: una
 * sombra en el plano se corría hacia el costado de la tarjeta en vez de caer
 * hacia abajo en pantalla. La pila proyecta una sombra suave en el piso, hacia
 * abajo a la izquierda. Arranca del lavado de la grilla con dos tarjetas, las
 * demás caen de a una desde arriba a la derecha, la pila se comprime hasta ser
 * una sola placa, la cara pasa al logo y detrás florece el degradado hasta
 * llenar el fondo. `unfold` arranca con la misma placa (`PileView` en `PS.end`).
 */
const PILE: CardKey[] = ["rooms", "reports", "reservas", "linkhub", "revenue", "tourism", "rooms", "staypass", "reports", "reports"];
// `lift` y `slide`: cada tarjeta cae desde apenas arriba de la pila y desde arriba a
// la derecha, como en la referencia; con 560 caían desde el borde de la pantalla.
const PS = { first: 80, step: 145, fall: 420, lift: 210, slide: 86, gap: 16, card: 0.78, comp: 1900, compEnd: 2500, logo: 2420, logoEnd: 2600, bloom: 2500, bloomEnd: 2700, end: 2700, x: 640, y: 392 };
const PILE_POSE = "perspective(1800px) rotateX(56.5deg) rotateZ(-48.5deg)";
const SLAB_W = MODULE_W * PS.card;
const SLAB_H = MODULE_H * PS.card;

/** La pila en el instante `lt` (tiempo local de `stack`); `sink` la hunde en z (la usa `unfold`). */
function PileView({ lt, v, sink = 0 }: { lt: number; v: VideoDict; sink?: number }) {
  const comp = smooth(seg(lt, PS.comp, PS.compEnd));
  const gap = lerp(PS.gap, 1.3, comp);
  const logo = smooth(seg(lt, PS.logo, PS.logoEnd));
  const landed = PILE.reduce((n, _, i) => n + (i < 2 || lt >= PS.first + (i - 2) * PS.step + PS.fall ? 1 : 0), 0);
  const sc = lerp(1, 0.92, comp);
  return (
    <div className={s.pileStage} style={{ left: PS.x, top: PS.y, transform: `${PILE_POSE} scale3d(${sc}, ${sc}, ${sc}) translate3d(0, 0, ${(-sink).toFixed(1)}px)` }}>
      {/* La sombra en el piso: crece con la pila y se corre hacia abajo a la izquierda (−x en el plano de la tarjeta). */}
      <i
        className={s.pileShadow}
        style={{ width: SLAB_W * 1.12, height: SLAB_H * 1.06, transform: `translate3d(${(-SLAB_W * 0.56 - 18 - 14 * (1 - comp)).toFixed(1)}px, ${(-SLAB_H * 0.53 + 6).toFixed(1)}px, -14px)`, opacity: 0.55 + 0.45 * (landed / PILE.length) - 0.25 * comp }}
      />
      {PILE.map((k, i) => {
        const t0 = PS.first + (i - 2) * PS.step + (i % 3) * 18;
        if (i >= 2 && lt < t0) return null;
        // Caída larga con aceleración inicial y frenada cerca de la pila; el
        // tramo visible no se resuelve en un solo golpe mecánico.
        const fallP = i < 2 ? 1 : easeInOut(seg(lt, t0, t0 + PS.fall));
        const impact = i < 2 ? 0 : seg(lt, t0 + PS.fall, t0 + PS.fall + 190);
        // Rebote muy corto sobre el eje normal de la pila: da peso sin volver
        // la caída elástica. Cada placa llega con una inclinación propia.
        const settle = Math.sin(impact * Math.PI) * (10 + (i % 3) * 2);
        const z = i * gap + (1 - fallP) * PS.lift + settle;
        const xDrift = (1 - fallP) * (PS.slide + (i % 2 ? 14 : -8));
        // La pila no es una sola textura: cada placa conserva un pequeño
        // desplazamiento vertical propio para que se lean los cantos uno por
        // uno. `gap` baja con `comp`, así que estos niveles se cierran después.
        const stackX = i * 3.2 * (1 - comp);
        const stackY = -i * PS.gap * 0.7 * (1 - comp);
        const zTilt = (1 - fallP) * (i % 2 ? 8 : -6) + Math.sin(impact * Math.PI) * (i % 2 ? -2 : 2);
        const xTilt = (1 - fallP) * (i % 3 === 0 ? -8 : 6);
        const top = i === PILE.length - 1;
        return (
          <div
            key={i}
            className={s.slab}
            style={{
              width: SLAB_W,
              height: SLAB_H,
              opacity: i < 2 ? 1 : clamp01(seg(lt, t0, t0 + 110)),
              transform: `translate3d(${(-SLAB_W / 2 + xDrift + stackX).toFixed(1)}px, ${(-SLAB_H / 2 + stackY + (1 - fallP) * -280).toFixed(1)}px, ${z.toFixed(1)}px) rotateX(${xTilt.toFixed(2)}deg) rotateZ(${zTilt.toFixed(2)}deg)`,
            }}
          >
            <i className={s.slabShadow} style={{ opacity: 0.16 + 0.18 * (1 - fallP) + 0.1 * (1 - comp) }} />
            <i className={s.slabRim} style={{ background: MODULE_COLOR[k], opacity: 1 - comp, transform: "translate3d(0, 7px, -10px)" }} />
            <i className={s.slabEdge} style={{ opacity: 1 - comp * 0.6, transform: "translate3d(0, 3px, -5px)" }} />
            <div className={s.slabFace}>
              <Blurred y={(1 - fallP) * 4}>
                <div style={{ transform: `scale(${PS.card})`, transformOrigin: "0 0" }}>
                  <StillCard k={k} v={v} className={s.moduleFlat} />
                </div>
              </Blurred>
              {top && logo > 0 && (
                <div className={s.slabLogo} style={{ opacity: logo }}>
                  <IsotypeStill size={96} tone="ink" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function StackScene({ lt, v }: SceneProps) {
  const white = 1 - easeOut(seg(lt, 0, 300));
  const bloom = easeOut(seg(lt, PS.bloom, PS.bloomEnd));
  const r = bloom * 1600 - 200;
  const mask = `radial-gradient(circle at ${PS.x}px ${PS.y}px, #000 ${r.toFixed(0)}px, transparent ${(r + 320).toFixed(0)}px)`;
  return (
    <div className={`${s.scene} ${s.stackBg}`}>
      {bloom > 0 && (
        <div className={`${s.layer} ${s.inkBg}`} style={{ maskImage: mask, WebkitMaskImage: mask }} aria-hidden>
          {/* Mismo reloj que `unfold` (`lt + 3000`): al corte, el mismo degradado. */}
          <Gradient lt={lt - PS.end + 3000} bright />
        </div>
      )}
      <PileView lt={lt} v={v} />
      <div className={`${s.layer} ${s.paper}`} style={{ opacity: white }} aria-hidden />
      <Mark tone={bloom > 0.5 ? "paper" : "ink"} />
    </div>
  );
}

/* 4 · El logo despliega la UI ---------------------------------------------- */

// Arranca con la tarjeta del logo en la que terminó `merge` (`LogoCard`) y el
// mismo degradado (`lt + WH.end + GR.end + MG.end`): al corte es el mismo cuadro.
//
// 20-09-2026: la tarjeta NO se mueve más. Se queda EXACTAMENTE donde la dejó
// `merge` —mismo centro, misma escala, sin fundido— y la UI entra entera desde
// abajo de cuadro y sube hasta taparla (antes la tarjeta se achicaba y se
// apagaba mientras la UI se desplegaba con una bisagra en 3D). La UI va DESPUÉS
// en el DOM: el reproductor no reordena, así que sube por encima de la tarjeta.
// El único 3D que queda es la inclinación con la que llega y se acomoda.
const UN = { rise: 300, riseEnd: 1250, shot: 760, title: 520, push: 1250, white: 2090 };
/** Dónde arranca la UI: el borde de arriba (`top` de `.unfoldStage`) fuera de cuadro. */
const UN_FROM = 620;

export function UnfoldScene({ lt, v }: SceneProps) {
  // Sube con aceleración y frenada: la tarjeta se ve entera, se tapa a mitad de
  // camino y la UI termina de sentarse sola.
  const rise = easeInOut(seg(lt, UN.rise, UN.riseEnd));
  const push = easeInOut(seg(lt, UN.push, 2250));
  const white = easeIn(seg(lt, UN.white, 2250));
  return (
    <div className={`${s.scene} ${s.inkBg}`}>
      <Gradient lt={lt + WH.end + GR.end + MG.end} deep />
      <LogoCard />
      {lt >= UN.rise && (
        <div
          className={s.unfoldStage}
          style={{
            transform: `perspective(1500px) translate3d(0, ${lerp(UN_FROM, -12 * push, rise).toFixed(1)}px, 0) rotateX(${lerp(15, 8 - 3 * push, rise).toFixed(2)}deg) scale(${(0.86 + 0.06 * push).toFixed(4)})`,
          }}
        >
          <ProductShot v={v} lt={lt} at={UN.shot} />
        </div>
      )}
      {lt >= UN.title && (
        // `plainEm`: el titular va todo en Outfit y sin el subrayado del
        // argumento (pedido del 20-09-2026).
        <div className={s.corner} style={{ left: 0, right: 0, top: 44, textAlign: "center" }}>
          <h2 className={`${s.displayXl} ${s.onInk} ${s.plainEm} ${s.unfoldTitle}`}>
            <Words text={v.brand} lt={lt} at={UN.title} stagger={90} dur={520} dimIn={false} />
          </h2>
        </div>
      )}
      <div className={`${s.layer} ${s.paper}`} style={{ opacity: white, filter: white > 0 ? `blur(${(white * 6).toFixed(1)}px)` : undefined }} aria-hidden />
      <Mark tone="paper" opacity={1 - white} />
    </div>
  );
}

/* 5 · Diseñado con precisión ----------------------------------------------- */

// 20-09-2026, tercera vuelta, midiendo 36,2 → 37,7 de la referencia cuadro por
// cuadro (30 fps, `track3.cjs`: sigue la barra lateral oscura del PMS). Lo que
// salió de medir y que manda sobre todo lo demás:
//
//  · LA INCLINACIÓN NO CAMBIA NUNCA. El borde vertical de la tarjeta está a
//    7,1° de la vertical y el de arriba a −7,8° de la horizontal, IGUAL en
//    36,73 que en 37,53. Lo único que se mueve es la cámara en x.
//  · En y no se mueve: la barra lateral arranca en y=654 y termina en y=667
//    (13 px en 0,67 s a 1920). Tampoco cambia de tamaño.
//  · El paneo en x es una deriva lenta (−6 px cada 133 ms) que sobre el final
//    SE DISPARA: −11, −23, −42, −73, −143 px por cada 133 ms. Los dos últimos
//    cuadros están barridos en horizontal: la salida es un desplazamiento
//    rápido con motion blur, no un corte seco.
//  · El desenfoque cubre TODA la UI menos una isla nítida arriba a la
//    izquierda ("Mango Tech / Home / Inbox"): medido con un mapa de nitidez
//    (`sharp2.cjs`), cae hacia la derecha y hacia abajo por igual. Por eso la
//    máscara es RADIAL y las capas van POR ENCIMA de todo —cursor, selección y
//    menú incluidos—, que también viven sobre el plano de la tarjeta.
const PR = {
  l1: 100, l1Out: 620,
  ui: 700, uiIn: 340,
  tag: 1080, leader: 1250, leaderDur: 760,
  drift: 1040, push: 3120, end: 3600,
  cursorIn: 1420, toCell: 1760, press: 1860, dragEnd: 2320, menu: 2380, toBtn: 2560, click: 2680, bar: 2740,
};
/**
 * La caja SIN transformar de la UI. Importa porque `transform-origin: 0 0`: su
 * esquina de arriba a la izquierda es el origen del 3D y, al quedar en z=0, cae
 * en pantalla exactamente en `left + x`, `top + y`. Como en y no se mueve, el
 * punto donde termina la guía punteada es una constante.
 */
const PR_BOX = { left: 216, top: 226 };
/** La pose, FIJA. `rz` −8,6° reproduce los dos ángulos medidos en la referencia. */
const PR_POSE = { rx: 29, rz: -6.6, sc: 1.22 };
/** La entrada: llega desde abajo a la derecha creciendo, YA inclinada (la pose no se anima). */
const PR_IN = { x: 250, y: 176, sc: 0.66 };
/** El paneo en x: deriva lenta durante todo el plano + empujón que acelera hacia el corte. */
const PR_PAN = { slow: -84, fast: -205, k: 2.6 };
/**
 * El rótulo: mismo paneo en x que la tarjeta y quieto en y (la cámara no sube).
 * `drop` deja el tramo horizontal de la guía en el MEDIO ÓPTICO de la palabra
 * —entre el alto de mayúscula y la línea base, medido sobre una captura: 74 y
 * 104 px de la caja del h2 a 60 px—, no en la punta de la "p".
 */
const PR_TAG = { x: 300, y: 40, gap: 9, stub: 38, r: 22, drop: 53 };
/**
 * Progressive blur: UNA sola capa de `backdrop-filter` que cruza TODO el ancho
 * de la UI y va DE ABAJO HACIA ARRIBA —nítido arriba, desenfocado abajo—
 * (pedido del 20-09-2026: una máscara radial además ensuciaba la derecha y las
 * esquinas de arriba, que tienen que quedar limpias).
 *
 * `from`/`to` van en px de la caja SIN transformar y no en %: la tarjeta mide
 * 1120×700 y en cuadro entran ~530 px de alto, así que en porcentaje el
 * degradado entero caería fuera de lo que se ve. Al vivir dentro del contenedor
 * 3D, la rampa sigue el eje de la tarjeta y se inclina con ella.
 */
const PR_SOFT = { b: 13, from: 250, to: 600 };
const SELQ = { c7: '[data-cal-head="7"]', c10: '[data-cal-head="10"]', row: '[data-cal-row="103"]' };

/** El paneo de la cámara en x para un instante cualquiera (se deriva para el motion blur). */
function panAt(t: number): number {
  const slow = clamp01(seg(t, PR.drift, PR.end));
  const fast = Math.pow(clamp01(seg(t, PR.push, PR.end)), PR_PAN.k);
  return PR_PAN.slow * slow + PR_PAN.fast * fast;
}

/**
 * La guía punteada: tramo horizontal desde el rótulo, esquina REDONDEADA y
 * bajada hasta el borde de la tarjeta.
 *
 * Se dibuja recortando el RECORRIDO, no con `stroke-dashoffset`: en una línea
 * punteada el dashoffset sólo desliza los guiones —parece que se mueve, no que
 * se dibuja—. Acá el `d` se corta a la longitud `p`, así que los guiones miden
 * siempre lo mismo mientras la línea crece.
 */
function leaderPath(p: number, x0: number, y0: number, stub: number, r: number, endY: number): string {
  const kneeX = x0 - stub;
  const arcLen = (Math.PI / 2) * r;
  const vertLen = Math.max(0, endY - (y0 + r));
  const d = p * (stub + arcLen + vertLen);
  const head = `M ${x0.toFixed(1)} ${y0.toFixed(1)}`;
  if (d <= stub) return `${head} H ${(x0 - d).toFixed(1)}`;
  if (d <= stub + arcLen) {
    const th = (d - stub) / r;
    return `${head} H ${kneeX.toFixed(1)} A ${r} ${r} 0 0 0 ${(kneeX - r * Math.sin(th)).toFixed(1)} ${(y0 + r * (1 - Math.cos(th))).toFixed(1)}`;
  }
  const down = Math.min(vertLen, d - stub - arcLen);
  return `${head} H ${kneeX.toFixed(1)} A ${r} ${r} 0 0 0 ${(kneeX - r).toFixed(1)} ${(y0 + r).toFixed(1)} V ${(y0 + r + down).toFixed(1)}`;
}

export function PrecisionScene({ lt, v }: SceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rects = useOffsets(rootRef, [SELQ.c7, SELQ.c10, SELQ.row]);
  const c7 = rects[SELQ.c7];
  const c10 = rects[SELQ.c10];
  const row = rects[SELQ.row];
  const colW = 58;
  const newBar = lt >= PR.bar;
  const dragging = lt >= PR.press && lt < PR.bar;
  const held = lt >= PR.dragEnd && lt < PR.bar;
  const nights = lt < PR.dragEnd ? 1 + Math.min(2, Math.floor(3 * seg(lt, PR.press, PR.dragEnd))) : 3;
  let selection: Rect | null = null;
  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  if (c7 && c10 && row) {
    selection = { x: c7.x + colW * 0.5, y: row.y + 2, w: nights * colW, h: row.h - 4 };
    start = { x: c7.x + colW * 0.75, y: row.y + row.h / 2 };
    end = { x: c10.x + colW * 0.25, y: row.y + row.h / 2 };
  }
  const menuPos = { x: end.x + 14, y: end.y + 16 };
  const menuOn = lt >= PR.menu && lt < PR.bar;
  const menuIn = easeOut(seg(lt, PR.menu, PR.menu + 260));
  const btn = { x: menuPos.x + 118, y: menuPos.y + 78 };
  const keys: CursorKey[] = c7
    ? [
        { at: PR.cursorIn, x: 120, y: 260 },
        { at: PR.toCell, ...start },
        { at: PR.press, ...start, down: true },
        { at: PR.dragEnd, ...end, up: true },
        { at: PR.dragEnd + 60, ...end },
        { at: PR.toBtn, ...btn },
        { at: PR.click, ...btn, click: true },
        { at: PR.click + 300, x: btn.x + 40, y: btn.y + 60 },
      ]
    : [];
  // Entrada: sólo crece y se acomoda. La inclinación ya es la definitiva.
  const ui = easeOutExpo(seg(lt, PR.ui, PR.ui + PR.uiIn));
  const panX = panAt(lt);
  // Estela de la salida: lo que la cámara recorre en un cuadro. Durante la
  // deriva da menos de 1 px (no ensucia la lectura); en el empujón final barre.
  const vx = (panAt(lt + 8) - panAt(lt - 8)) / 16;
  const sweep = Math.min(16, Math.abs(vx) * 9);
  const push = clamp01(seg(lt, PR.push, PR.end));
  // La profundidad de campo se retira cuando entra el barrido: en la referencia
  // los últimos cuadros son un smear parejo, no un desenfoque por zonas.
  const soft = easeOut(seg(lt, PR.ui + 400, PR.ui + 1000)) * (1 - easeIn(push));
  const bar = newBar ? { start: 7, nights: 3 } : null;
  const leader = easeOutExpo(seg(lt, PR.leader, PR.leader + PR.leaderDur));
  const tagText = tokenize(v.designed[1]).map((t) => t.text).join("");
  // El rótulo y la guía cuelgan del mismo punto y panean con la tarjeta.
  const tagX = PR_TAG.x + panX;
  const leadX = tagX - PR_TAG.gap;
  const leadY = PR_TAG.y + PR_TAG.drop;
  const leadEnd = PR_BOX.top + 4;
  return (
    <div className={`${s.scene} ${s.inkBg}`}>
      <Gradient lt={lt + 12000} deep />
      {lt < PR.l1Out + 260 && (
        <div
          className={s.typeBlock}
          style={{
            // No se queda quieto esperando a la UI: sube despacio toda su vida
            // y recién después se va de foco.
            transform: `translate3d(0, ${(-20 * easeOut(seg(lt, PR.l1, PR.l1Out + 260))).toFixed(1)}px, 0)`,
            ...(lt >= PR.l1Out ? defocus(easeIn(seg(lt, PR.l1Out, PR.l1Out + 220)), 14) : null),
          }}
        >
          <h2 className={`${s.designedLead} ${s.onInk}`}>
            <Words text={v.designed[0]} lt={lt} at={PR.l1} stagger={90} dur={460} dimIn={false} />
          </h2>
        </div>
      )}
      {lt >= PR.ui && (
        <div
          className={s.precisionStage}
          style={{
            left: PR_BOX.left,
            top: PR_BOX.top,
            opacity: Math.min(1, ui * 1.5),
            transform: `perspective(1400px) translate3d(${(panX + (1 - ui) * PR_IN.x).toFixed(1)}px, ${((1 - ui) * PR_IN.y).toFixed(1)}px, 0) rotateX(${PR_POSE.rx}deg) rotateZ(${PR_POSE.rz}deg) scale(${lerp(PR_POSE.sc * PR_IN.sc, PR_POSE.sc, ui).toFixed(4)})`,
          }}
        >
          <Blurred x={(1 - ui) * 12 + sweep} y={(1 - ui) * 18}>
            <PmsShell active="bookings" labels={shellLabels(v)} tabs={v.ui.bookingTabs} activeTab={2} round>
              <Calendar
                rootRef={rootRef}
                days={calDays(v)}
                occupancy={OCCUPANCY}
                categories={calCategories(v, bar)}
                labels={calLabels(v)}
                colW={colW}
                labelW={120}
                overlay={
                  <>
                    {selection && dragging && <i className={[s.createSelection, held ? s.selectionHeld : ""].join(" ")} style={{ left: selection.x, top: selection.y, width: selection.w, height: selection.h }} />}
                    {menuOn && (
                      <div className={s.createMenu} style={{ left: menuPos.x, top: menuPos.y, opacity: clamp01(menuIn * 1.5), transform: `scale(${(0.9 + 0.1 * menuIn).toFixed(3)})` }}>
                        <b>{v.actions.create}</b>
                        <span>{v.booking.detail}</span>
                        <i>{v.ui.calendar.create.replace("+ ", "")}</i>
                      </div>
                    )}
                    <Cursor lt={lt} keys={keys} />
                  </>
                }
              />
            </PmsShell>
          </Blurred>
          {soft > 0.01 && (
            <i
              className={s.precisionSoft}
              style={{
                backdropFilter: `blur(${(PR_SOFT.b * soft).toFixed(2)}px)`,
                WebkitBackdropFilter: `blur(${(PR_SOFT.b * soft).toFixed(2)}px)`,
                maskImage: `linear-gradient(to bottom, transparent ${PR_SOFT.from}px, #000 ${PR_SOFT.to}px)`,
                WebkitMaskImage: `linear-gradient(to bottom, transparent ${PR_SOFT.from}px, #000 ${PR_SOFT.to}px)`,
              }}
              aria-hidden
            />
          )}
        </div>
      )}
      {leader > 0 && (
        <svg className={s.precisionLeader} viewBox="0 0 1280 720" width="1280" height="720" aria-hidden>
          <path
            d={leaderPath(leader, leadX, leadY, PR_TAG.stub, PR_TAG.r, leadEnd)}
            fill="none"
            stroke="#f2efe8"
            strokeOpacity={0.9}
            strokeWidth={1.9}
            strokeDasharray="6 8"
            style={sweep > 0.4 ? { filter: `blur(${(sweep * 0.5).toFixed(1)}px)`, opacity: 1 - push } : undefined}
          />
        </svg>
      )}
      {lt >= PR.tag && (
        <div className={s.corner} style={{ left: tagX, top: PR_TAG.y }}>
          <h2 className={`${s.glowText} ${s.onInk}`}>
            {/* El rótulo se va barrido con la cámara, igual que la UI. */}
            <Blurred x={sweep}>
              <HBlur lt={lt} at={PR.tag} dur={420}>
                {tagText}
              </HBlur>
            </Blurred>
          </h2>
        </div>
      )}
      <Mark tone="paper" />
    </div>
  );
}
