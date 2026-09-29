"use client";

import { Fragment, memo, type CSSProperties } from "react";
import type { SceneProps } from "../scenes";
import { clamp01, easeIn, easeInExpo, easeInOut, easeOut, easeOutExpo, easeOutQuint, lerp, seg } from "../timeline";
import { Blurred, Caret, Gradient, HBlur, LockupStill, Mark, Roller, Slot, Words, defocus, rise, tokenize } from "../fx";
import { MODULES, ModuleCard, type CardKey } from "./data";
import s from "../scenes.module.css";
import { usePortrait } from "../orientation";

/**
 * La tarjeta de módulo, memoizada.
 *
 * Cada una es una copia de la UI real del producto —decenas de nodos—, y estas
 * escenas dibujan diez a la vez girando. Sin memo, el reloj las volvía a
 * renderizar ENTERAS en cada cuadro aunque lo único que cambia sea el
 * `transform` del envoltorio: medido, la roseta corría a 30 fps con un tranque
 * de 417 ms, contra los 60 estables de una escena liviana. Ese tranque es el
 * que hacía patinar al audio, porque el reloj del reproductor es el mismo
 * `requestAnimationFrame`.
 *
 * Es el mismo arreglo que ya había hecho falta en la grilla de la escena 13.
 * No se importa el de allá a propósito: `modules.tsx` importa de este archivo y
 * traerlo crearía un ciclo.
 */
const StillCard = memo(ModuleCard);

/**
 * Acto 5 — una nueva era. Calca 37.75 → 59.4 de la referencia: el texto que se
 * desbloquea con el roller y el caret que sobreescribe; el anillo que se aleja
 * desde adentro; la estrella sobre las manchas; la rueda de tarjetas que gira
 * y sale de canto; la fila que barre; y el end card que se arma.
 */

/** Cómo se reparten las cuatro palabras de "Una nueva era de" entre las cuatro figuras. */
const ERA_ORDER = { donut: 1, blob: 2, ring: 0, white: 3 } as const;

function Em({ text, u = 1 }: { text: string; u?: number }) {
  return (
    <>
      {tokenize(text).map((tk, k) =>
        tk.em ? (
          <em key={k} className={s.wordEm} style={{ ["--u" as string]: u }}>
            {tk.text}
          </em>
        ) : (
          <Fragment key={k}>{tk.text}</Fragment>
        ),
      )}
    </>
  );
}

/**
 * El fondo de la escena 19 —verde y amarilla subidas y separadas, la naranja
 * en el medio— que reusa el cierre (24). `soft` baja las tres masas a
 * la mitad: el cierre lo pidió "con más transparencia en esos colores". La
 * base clara no cambia.
 */
function EraBg({ lt, soft = false, style }: { lt: number; soft?: boolean; style?: CSSProperties }) {
  return (
    <div className={`${s.unlockBg} ${soft ? s.eraBgSoft : ""}`} style={style}>
      <Gradient lt={lt} light>
        {/* La naranja, entre la verde y la amarilla. Deriva sola y lento,
            como las masas del fondo oscuro, con otro período para que no
            se muevan en bloque. */}
        <i
          className={s.unlockOrange}
          style={{ transform: `translate3d(${(Math.sin((lt / 1000) * 0.6 + 1.2) * 90).toFixed(1)}px, ${(Math.cos((lt / 1000) * 0.45 + 0.4) * 45).toFixed(1)}px, 0)` }}
        />
      </Gradient>
    </div>
  );
}

/* 1 · Desbloquea → Más… → Viví ---------------------------------------------- */

/**
 * Los tiempos. El cascadeo de palabras está calcado del **0:37 de la
 * referencia**: la primera entra sola y se queda 850 ms, y las otras cuatro
 * entran de golpe **cada 150 ms**, cada una frenando durante 470 ms. Los
 * empujones se solapan, que es de donde sale la fluidez; ver `Roller` en
 * `fx.tsx` para las mediciones.
 *
 * Lo que NO se calca es el aire alrededor: la referencia corre 5,75 s y acá el
 * beat dura 7,3, y ese segundo y medio de más va entero a lo que hay que poder
 * leer —la frase de entrada y el renglón final—, no al cascadeo.
 */
const UL = { lead: 0, leadOut: 1800, head: 1950, words: [2000, 2850, 3000, 3150, 3300], fade: 4300, caret: 4800, out: 6420, dur: 6820 };

export function UnlockScene({ lt, v }: SceneProps) {
  const portrait = usePortrait();
  const u = v.unlock;
  const leadUp = easeIn(seg(lt, UL.leadOut, UL.leadOut + 300));
  const out = easeIn(seg(lt, UL.out, UL.out + 180));
  const caretOn = lt >= UL.caret;
  // Acercamiento lento de todo el bloque durante TODO el beat: la escena es casi
  // toda texto y sin esto se queda clavada.
  const push = easeInOut(clamp01(lt / UL.dur));
  const blockStyle: CSSProperties = {
    // En vertical, al medio del cuadro alto y un cuerpo más grande.
    ...(portrait ? { top: 560, fontSize: 52 } : null),
    ...defocus(out, 12),
    transform: `translate3d(0, ${(-10 * push).toFixed(1)}px, 0) scale(${(1 + 0.022 * push).toFixed(4)})`,
  };
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <EraBg lt={lt} />
      <div className={s.unlockBlock} style={blockStyle}>
        {lt < UL.leadOut + 320 && (
          // Entra centrado y se va hacia arriba ACHICÁNDOSE, no sólo
          // desenfocado: la frase se aleja en vez de evaporarse en el lugar.
          <div
            className={s.unlockLead}
            style={{
              opacity: 1 - leadUp,
              transform: `translate3d(0, ${(leadUp * -0.6).toFixed(3)}em, 0) scale(${(1 - leadUp * 0.08).toFixed(4)})`,
              filter: leadUp > 0 ? `blur(${(leadUp * 8).toFixed(1)}px)` : undefined,
            }}
          >
            <HBlur lt={lt} at={UL.lead} dur={480}>
              <span className={s.unlockInk}>{u.lead}</span>
            </HBlur>
          </div>
        )}
        {lt >= UL.head && (
          // "Más" + la ranura entran JUNTOS y de una, ya corridos a la
          // izquierda del centro. Si la ranura no se montara vacía, "Más"
          // aparecería centrado y saltaría de lugar al llegar la primera
          // palabra.
          <div className={s.unlockLine} data-unlock-line style={rise(easeOutQuint(seg(lt, UL.head, UL.head + 320)), 10, 8)}>
            <span className={s.unlockHead}>{u.head}</span>
            <Slot items={u.words}>
              {caretOn ? (
                <Caret oldText={u.words[u.words.length - 1]} newText={u.experience} lt={lt} at={UL.caret} sweep={680} hold={700} />
              ) : (
                <Roller items={u.words} lt={lt} times={UL.words} fadeAt={UL.fade} />
              )}
            </Slot>
          </div>
        )}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* 2 · El anillo ------------------------------------------------------------ */

const DONUT = [
  { pct: 40, color: "#c8e293", ink: "#14150f" },
  { pct: 32, color: "#4e6b28", ink: "#f2efe8" },
  { pct: 18, color: "#8f5b20", ink: "#f2efe8" },
  { pct: 10, color: "#d9d6cf", ink: "#14150f" },
];
const DN = { zoomEnd: 800, word: 900, out: 1820 };
/** El anillo: radio de adentro, de afuera y cuánto se redondean las esquinas. */
const DN_RING = { r0: 165, r1: 299, rc: 18 };

/**
 * Un gajo del anillo, con las CUATRO esquinas redondeadas (20-09-2026).
 *
 * No sale con `stroke-linecap="round"` sobre un `circle` punteado: el remate
 * redondo sobresale media pluma —67 px de arco con la pluma de 134— y el gajo
 * del 10 % mide 125 px de arco, menos que eso, así que se convertiría en una
 * pastilla más grande que su propio sector. Se dibuja el sector entero como
 * `path`: arco de afuera, esquina, canto radial, arco de adentro y las otras
 * dos esquinas. Los cuatro arcos de esquina van con `sweep-flag` 1 porque el
 * recorrido gira siempre a la derecha.
 */
function ringSlice(cx: number, cy: number, r0: number, r1: number, a0: number, a1: number, rc: number): string {
  const P = (r: number, a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  const f = (n: number) => n.toFixed(2);
  // El radio de esquina no puede pasar de la mitad del espesor ni de la mitad
  // del gajo medido sobre su borde de adentro, que es el más corto.
  const k = Math.max(0, Math.min(rc, (r1 - r0) / 2, ((a1 - a0) * r0) / 2));
  const d1 = k / r1;
  const d0 = k / r0;
  const [x1, y1] = P(r1, a0 + d1);
  const [x2, y2] = P(r1, a1 - d1);
  const [x3, y3] = P(r1 - k, a1);
  const [x4, y4] = P(r0 + k, a1);
  const [x5, y5] = P(r0, a1 - d0);
  const [x6, y6] = P(r0, a0 + d0);
  const [x7, y7] = P(r0 + k, a0);
  const [x8, y8] = P(r1 - k, a0);
  const bigOut = a1 - a0 - 2 * d1 > Math.PI ? 1 : 0;
  const bigIn = a1 - a0 - 2 * d0 > Math.PI ? 1 : 0;
  return [
    `M ${f(x1)} ${f(y1)}`,
    `A ${f(r1)} ${f(r1)} 0 ${bigOut} 1 ${f(x2)} ${f(y2)}`,
    `A ${f(k)} ${f(k)} 0 0 1 ${f(x3)} ${f(y3)}`,
    `L ${f(x4)} ${f(y4)}`,
    `A ${f(k)} ${f(k)} 0 0 1 ${f(x5)} ${f(y5)}`,
    `A ${f(r0)} ${f(r0)} 0 ${bigIn} 0 ${f(x6)} ${f(y6)}`,
    `A ${f(k)} ${f(k)} 0 0 1 ${f(x7)} ${f(y7)}`,
    `L ${f(x8)} ${f(y8)}`,
    `A ${f(k)} ${f(k)} 0 0 1 ${f(x1)} ${f(y1)}`,
    "Z",
  ].join(" ");
}

export function DonutScene({ lt, v }: SceneProps) {
  const zoom = easeOut(seg(lt, 0, DN.zoomEnd));
  const out = easeIn(seg(lt, DN.out, 2000));
  const rot = -110 + lt * 0.011;
  /** El radio del medio del anillo: donde van las cifras. */
  const R = (DN_RING.r0 + DN_RING.r1) / 2;
  let acc = 0;
  /** El hueco entre gajos, en puntos porcentuales. */
  const gap = 1.4;
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div className={s.donutWrap} style={{ transform: `scale(${(lerp(5.5, 1, zoom) * (1 - out * 0.12)).toFixed(4)})`, filter: `blur(${((1 - zoom) * 22 + out * 14).toFixed(2)}px)`, opacity: 1 - out * 0.9 }}>
        {/* Sin los dos aros claros (`#fbfaf7`, r 300 y r 165) que marcaban el
            borde de afuera y el de adentro: el anillo se apoya directo en el
            lavanda y cada gajo trae sus propias esquinas redondeadas. */}
        <svg viewBox="0 0 640 640" aria-hidden>
          <g transform={`rotate(${rot.toFixed(2)} 320 320)`}>
            {DONUT.map((d, i) => {
              const start = acc;
              acc += d.pct;
              // El gajo pintado va de (start + gap/2) a (start + pct − gap/2):
              // el hueco queda repartido entre los dos vecinos.
              const a0 = ((start + gap / 2) / 100) * 2 * Math.PI;
              const a1 = ((start + d.pct - gap / 2) / 100) * 2 * Math.PI;
              const mid = ((start + d.pct / 2) / 100) * 360;
              const lx = 320 + Math.cos((mid * Math.PI) / 180) * R;
              const ly = 320 + Math.sin((mid * Math.PI) / 180) * R;
              return (
                <g key={i}>
                  <path d={ringSlice(320, 320, DN_RING.r0, DN_RING.r1, a0, a1, DN_RING.rc)} fill={d.color} />
                  <text x={lx} y={ly} fill={d.ink} fontSize="30" fontWeight="700" textAnchor="middle" dominantBaseline="central" transform={`rotate(${(-rot).toFixed(2)} ${lx.toFixed(1)} ${ly.toFixed(1)})`}>
                    {d.pct}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
        <div className={s.donutText}>
          <div>
            <div className={s.eraLead} style={rise(easeOutQuint(seg(lt, 350, 750)), 6, 6)}>
              {v.era.lead}
            </div>
            <div className={s.eraWord} style={rise(easeOutQuint(seg(lt, DN.word, DN.word + 340)), 8, 12)}>
              <Em text={v.era.words[ERA_ORDER.donut]} />
            </div>
          </div>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* 3 · La estrella sobre las manchas ---------------------------------------- */

const STAR = "M 250 6 C 272 150 350 228 494 250 C 350 272 272 350 250 494 C 228 350 150 272 6 250 C 150 228 228 150 250 6 Z";

/** Cuánto se ve la marca que gira detrás de la frase. */
const BLOB_MARK_ALPHA = 0.72;

export function BlobScene({ lt, v }: SceneProps) {
  const a = lt / 1000;
  const inP = easeOut(seg(lt, 0, 380));
  return (
    <div className={`${s.scene} ${s.blobFlat}`}>
      {/* Detrás del texto gira la marca de Roombir IA (la misma imagen que usa el
          orbe del chat), translúcida para que la frase se lea encima. */}
      <div className={s.star} style={{ transform: `rotate(${(lt * 0.005).toFixed(2)}deg) scale(${lerp(0.82, 1, inP).toFixed(3)})`, opacity: inP * BLOB_MARK_ALPHA, filter: inP < 0.999 ? `blur(${((1 - inP) * 16).toFixed(1)}px)` : undefined }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={s.starMark} src="/video/roombrain-nitid.png" alt="" />
      </div>
      <div className={s.donutText} style={{ opacity: inP }}>
        <div>
          <div className={s.eraLead}>{v.era.lead}</div>
          <div className={s.eraWord}>
            <Em text={v.era.words[ERA_ORDER.blob]} />
          </div>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* 4 · La rueda de tarjetas ------------------------------------------------- */

/**
 * La roseta. Calca el efecto de la referencia en 0:47 (`video-reference.mp4`),
 * y lo que se calcó son DOS números que se midieron cuadro a cuadro:
 *
 * - Las tarjetas TAPAN el 72 % del cuadro; el fondo vivo sólo asoma por el
 *   agujero del centro y por lo que queda entre tarjeta y tarjeta. La versión
 *   anterior tapaba el 28 %: un anillo suelto, con aire entre las ocho.
 * - La roseta GIRA a unos 40 °/s mientras se lee, y acelera hasta unos 120 °/s
 *   cuando las tarjetas se van. La anterior giraba a 6,6 °/s, que de lejos se
 *   lee como quieta.
 *
 * De ahí salen `radius`, `scale` y `lean`: las tarjetas se superponen como un
 * molinete en vez de apoyarse una al lado de la otra.
 */
/**
 * La roseta, calcada del cuadro 0:48.0 de `video-reference.mp4` MEDIDO a la
 * resolución del escenario (1280 × 720). Lo que hay en ese cuadro:
 *
 * - DIEZ tarjetas alrededor, no ocho: cada 36°. Como los módulos son ocho,
 *   dos se repiten en posiciones opuestas (`RING`).
 * - El agujero del centro tiene ~175 px de radio: ahí apoya el pie de cada
 *   tarjeta. Cada tarjeta sale desde ese radio hasta más allá de las esquinas
 *   del cuadro (734 px), o sea unos 560 px de largo radial.
 * - Cada tarjeta está LADEADA sobre su propio eje radial, como un aspa: por
 *   eso se ve el canto de un lado y cada una monta sobre la siguiente. Sin ese
 *   ladeo (`bank`) las tarjetas quedan planas y el solapamiento lo decide el
 *   orden del DOM, con una costura fea donde la última se mete bajo la
 *   primera. Con `preserve-3d` y el ladeo, la profundidad lo resuelve sola.
 * - El pie mira SIEMPRE al centro (`rotateZ(90deg)` tras sacarla al radio).
 *   Una versión con las tarjetas a 45° de la tangente se veía torcida.
 */
const RG = {
  /**
   * Las tarjetas vuelan hacia adentro desde el PRIMER cuadro y desde un radio
   * en el que ya asoman por las esquinas (`flyFrom`). Antes arrancaban a los
   * 120 ms desde 1250 px y con opacidad 0: eso dejaba un cuarto de segundo de
   * pantalla oscura vacía tras el corte, que es lo que se leía como brusco.
   * En la referencia (0:47) las tarjetas ya están en cuadro al cortar.
   */
  fly: 0, flyEnd: 560, flyFrom: 820, swap: 1900, white: 2100, out: 3000, outEnd: 3380,
  /** Radio del agujero (donde apoya el pie) y escala de la tarjeta de 300 × 400. */
  inner: 200, scale: 1.4,
  /**
   * El ladeo de aspa, sobre el eje radial. El signo importa: con el positivo el
   * agujero del centro salía irregular (sd 11) porque las esquinas del pie se
   * metían hacia adentro; con el negativo queda redondo como el de la
   * referencia (sd 6 contra 5). Se eligió midiendo, no a ojo.
   */
  bank: -14,
  /**
   * Cuánto se gira cada tarjeta respecto del radio, en sentido horario. NO es
   * el error de los 45°: medido en el cuadro de referencia tarjeta por tarjeta
   * da entre 3° y 21° (Forms 3, Landing 21, Chat 10, Key Messaging 12): el pie
   * sigue mirando al centro, apenas girado, y eso es lo que arma el remolino.
   */
  lean: 12,
  /** Inclinación sobre el eje tangencial: casi nada, el cuadro no la muestra. */
  tilt: 4,
  /** Fase inicial del giro, para que a los 1.100 ms caiga como el cuadro medido. */
  phase: -3,
  /**
   * Inclinación de TODO el escenario hacia la cámara: abajo más cerca, arriba
   * más lejos. Eran 24° y las tarjetas de abajo salían el doble de grandes que
   * las de arriba; en la referencia la diferencia es de un tercio.
   */
  stage: 14,
  /** Giro en grados por ms, y el envión de más cuando se van. */
  spin: 0.04, spinOut: 70,
};

/** Los diez lugares de la roseta: los ocho módulos y dos repetidos, enfrentados. */
/**
 * El premontaje de la roseta, en ms, y cada cuánto nace una tarjeta.
 *
 * Tiene que coincidir con el `preroll` de `ring` en `timeline.ts`. Premontar sin
 * escalonar no sirve de nada: el costo de montar diez copias de la UI real se
 * paga igual, sólo que un rato antes —medido, un cuadro de 400 ms—. Naciendo de
 * a una cada 80 ms, cada montaje entra en su propio cuadro y no se nota.
 */
const RING_PRE = 900;
const RING_STEP = 80;

const RING: CardKey[] = ["reservas", "rooms", "linkhub", "revenue", "tourism", "reservas", "ia", "rooms", "staypass", "reports"];

export function RingScene({ lt, v }: SceneProps) {
  const fly = easeOutExpo(seg(lt, RG.fly, RG.flyEnd));
  const out = easeInExpo(seg(lt, RG.out, RG.outEnd));
  const white = easeInOut(seg(lt, RG.white, RG.white + 380));
  const swap = easeInOut(seg(lt, RG.swap, RG.swap + 320));
  const R = lerp(RG.flyFrom, RG.inner + 200 * RG.scale, fly) + out * 980;
  const sc = lerp(0.55, RG.scale, fly) * (1 + out * 0.85);
  const spin = lt * RG.spin + out * RG.spinOut;
  return (
    <div className={`${s.scene} ${s.inkBg}`}>
      {/* El mismo fondo oscuro de la escena 15 (`deep`) y, cuando aclara, el
          mismo claro de la 18 (`light`) fundido encima. Antes era una variante
          propia y luego lavanda plana; el usuario pidió que fueran ESTOS. */}
      <Gradient lt={lt + 12000} deep />
      <Gradient lt={lt + 12000} light style={{ opacity: white }} />
      <div className={s.ringStage} style={{ transform: `perspective(1400px) rotateX(${RG.stage}deg) rotateZ(${spin.toFixed(2)}deg)` }}>
        {RING.map((k, i) => {
          // Durante el premontaje (`lt` negativo) nacen de a una. Al saltar con
          // la barra caen todas juntas, que es lo mismo que pasa en cualquier
          // salto: la escena se remonta entera.
          if (lt < -RING_PRE + i * RING_STEP) return null;
          const ang = i * (360 / RING.length) + RG.phase;
          const blur = (1 - fly) * 18 + out * 16;
          return (
            <div key={i} className={s.ringCard} style={{ opacity: 1 - easeIn(out), transform: `rotateZ(${ang.toFixed(1)}deg) translate3d(${R.toFixed(1)}px, 0, 0) rotateZ(${90 + RG.lean}deg) rotateY(${RG.bank}deg) rotateX(${(RG.tilt + out * 60).toFixed(1)}deg) scale(${sc.toFixed(3)})` }}>
              <Blurred y={blur}>
                <StillCard k={k} v={v} />
              </Blurred>
            </div>
          );
        })}
      </div>
      <div className={s.donutText}>
        <div style={{ color: white > 0.5 ? "var(--text)" : "var(--text-ink)" }}>
          <div className={s.eraLead}>{v.era.lead}</div>
          <div className={s.eraWord} style={{ position: "relative", height: "1.1em" }}>
            <span className={s.stacked} style={{ opacity: 1 - swap }}>
              <Em text={v.era.words[ERA_ORDER.ring]} />
            </span>
            {/* "IA": en Outfit como el resto (no `Em`, que la pondría en serif
                itálica con subrayado) y rellena con los colores del orbe de
                Roombir IA, que la recorren. El recorrido sale del reloj, no de
                una animación CSS: pausar congela y saltar cae en el mismo cuadro. */}
            <span className={s.stacked} style={{ opacity: swap }}>
              <span className={s.eraIa} style={{ backgroundPosition: `${((lt * 0.045) % 200).toFixed(2)}% 50%` }}>
                {v.era.words[ERA_ORDER.white]}
              </span>
            </span>
          </div>
        </div>
      </div>
      <Mark tone={white > 0.5 ? "ink" : "paper"} />
    </div>
  );
}

/* 5 · La fila que barre ---------------------------------------------------- */

const ROW_GAP = 150;
/**
 * `card`/`tilt`: las tarjetas van 13 % más grandes que antes (0,8) y algo
 * inclinadas. `swap`: mientras tapan el centro, el texto le deja el lugar al
 * logo, así que cuando terminan de pasar el logo ya está puesto. Los mismos
 * valores los usa `end` para las que siguen saliendo: si no, saltan en el corte.
 */
/** Coseno alzado: el cruce entra y sale suave (el `easeInOut` de la línea de tiempo pega un tirón). */
const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

const ROW_CARD = { scale: 0.904, tilt: -5 };
/** La línea de abajo, más chica que el logo: la proporción del cierre de la referencia. */
const OUTRO_LINE = 38;
/** El lockup del cierre (96 → 106 → 121). El MISMO en `row` y en `end`, o salta en el corte. */
const OUTRO_LOGO = 121;
const RW = { move: 250, moveEnd: 2000, swap: 780, swapEnd: 1450 };

export function RowScene({ lt, v }: SceneProps) {
  // En vertical la fila cruza por DELANTE del logo (a la altura del centro del cuadro alto), no por arriba.
  const portrait = usePortrait();
  const m = easeInOut(seg(lt, RW.move, RW.moveEnd));
  const x = lerp(-1500, 1560, m);
  const pastel = seg(lt, 1200, 2000);
  const swap = smooth(seg(lt, RW.swap, RW.swapEnd));
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div className={s.pastelTop} style={{ opacity: pastel }} aria-hidden />
      <div className={s.donutText}>
        {/* Las dos capas van en la MISMA celda de la grilla y centradas: con `.stacked`
            (que ancla arriba) el logo quedaba unos px más alto que en `end` y saltaba al corte. */}
        <div className={s.outroSwap}>
          <div style={{ gridArea: "1 / 1", opacity: 1 - swap }}>
            <div className={s.eraLead} style={{ fontSize: 52 }}>
              {v.era.lead}
            </div>
          </div>
          {/* El logo ocupa el lugar del texto mientras las tarjetas tapan el centro. */}
          <div style={{ gridArea: "1 / 1", opacity: swap }}>
            <div className={s.outroStack}>
              <LockupStill size={OUTRO_LOGO} />
              <p className={s.tagline} style={{ fontSize: OUTRO_LINE, margin: 0, whiteSpace: "nowrap" }}>
                {v.end.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Las tarjetas pasan POR ENCIMA del texto: `.donutText` va en z 5. */}
      <div className={s.rowStage} style={{ zIndex: 6 }}>
        {MODULES.map((k, i) => (
          <div key={k} className={s.rowCard} style={{ ...(portrait ? { top: 440 } : null), transform: `translate3d(${(x + i * ROW_GAP).toFixed(1)}px, ${(i * 4).toFixed(1)}px, 0) rotateY(-34deg) rotateZ(${ROW_CARD.tilt}deg) scale(${ROW_CARD.scale})` }}>
            <Blurred x={Math.abs(Math.sin(m * Math.PI)) * 10}>
              <StillCard k={k} v={v} />
            </Blurred>
          </div>
        ))}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* 6 · El end card ---------------------------------------------------------- */

const EN = { logo: 0, logoEnd: 480, tag: 460, tagOut: 1700, cta: 1900 };

export function EndScene({ lt, v }: SceneProps) {
  const logo = easeOutExpo(seg(lt, EN.logo, EN.logoEnd));
  const tail = easeInOut(seg(lt, 0, 420));
  const tagOut = easeIn(seg(lt, EN.tagOut, EN.tagOut + 220));
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div className={s.pastelTop} aria-hidden />
      {/* El fondo de la 19, más transparente. Entra fundido mientras se van las
          últimas tarjetas: `row` termina con el lavanda de siempre y un cambio
          seco de fondo en el corte se vería. */}
      <EraBg lt={lt} soft style={{ opacity: easeInOut(seg(lt, 0, 520)) }} />
      {tail < 0.999 && (
        <div className={s.rowStage} style={{ zIndex: 6 }}>
          {MODULES.slice(5).map((k, i) => (
            <div key={k} className={s.rowCard} style={{ transform: `translate3d(${(lerp(1560, 2500, tail) + (i + 5) * ROW_GAP).toFixed(1)}px, ${((i + 5) * 4).toFixed(1)}px, 0) rotateY(-34deg) rotateZ(${ROW_CARD.tilt}deg) scale(${ROW_CARD.scale})` }}>
              <StillCard k={k} v={v} />
            </div>
          ))}
        </div>
      )}
      {/* El logo y su línea YA están puestos: los dejó `row` mientras las tarjetas
          tapaban el centro, así que acá no entran de nuevo ni se reemplazan. */}
      <div className={s.typeBlock}>
        <div className={s.outroStack}>
          <LockupStill size={OUTRO_LOGO} />
          <p className={s.tagline} style={{ fontSize: OUTRO_LINE, margin: 0, whiteSpace: "nowrap" }}>
            {v.end.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
