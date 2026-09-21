"use client";

import { Fragment, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import type { SceneProps } from "../scenes";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, easeOutQuint, lerp, seg } from "../timeline";
import { Camera, Gradient, LockupStill, Mark, Words, brokenPts, defocus, rise, tokenize } from "../fx";
import { ProductShot } from "./data";
import s from "../scenes.module.css";

/**
 * Acto 2 — Conocé. Calca 16.25 → 25.0 de la referencia: "Meet" y el logo que
 * entra por desenfoque; tres textos que se reemplazan; el frente de llamas que
 * descubre el PMS de frente con el titular arriba; "Built to kill ~~Sprawl~~" con rotate-in,
 * salida por blur horizontal y el tachado dentado.
 */

/* 1 · Meet ---------------------------------------------------------------- */

// El logo entra en dos tiempos: el isotipo en `logo` y las letras `wordLag` ms
// después, cada pieza subiendo desde abajo mientras se enfoca y aparece.
const ME = { meet: 0, focus: 150, meetOut: 720, logo: 860, wordLag: 140, logoIn: 520, logoRise: 680 };

/**
 * Enfoque y subida con curvas separadas: con una sola `easeOutQuint` la pieza
 * hacía 20 de sus 28 px en los primeros 120 ms, todavía desenfocada y a medio
 * aparecer, y la subida no se leía. El desenfoque se va rápido y la subida
 * sigue un rato más, ya nítida. Con `blur` en 0 es la misma entrada sin
 * desenfoque (las frases de `first`).
 */
function lift(lt: number, at: number, blur = 14): CSSProperties {
  const f = easeOutQuint(seg(lt, at, at + ME.logoIn));
  const y = easeOut(seg(lt, at, at + ME.logoRise));
  return {
    opacity: f,
    transform: `translate3d(0, ${((1 - y) * 30).toFixed(2)}px, 0)`,
    filter: blur > 0 && f < 0.999 ? `blur(${((1 - f) * blur).toFixed(2)}px)` : undefined,
  };
}

export function MeetScene({ lt, v }: SceneProps) {
  const drift = 1 + 0.035 * easeInOut(seg(lt, ME.logo, 3000));
  // La palabra no se escribe: aparece ENORME y desenfocada —de un cuadro al
  // otro— y se enfoca en 150 ms. Desde ahí se va yendo para atrás sin parar,
  // hasta poco más de la mitad de su tamaño, y recién entonces se desenfoca y
  // deja el lugar al logo. Es el movimiento de 16,25→17,0 de la referencia:
  // palabra por palabra en gris→negro no era lo que hacía.
  const focus = easeOut(seg(lt, ME.meet, ME.meet + ME.focus));
  const away = easeOut(seg(lt, ME.meet, ME.meetOut + 120));
  const meetBlur = (1 - focus) * 26;
  // El pastel de arriba no estaba desde el principio: entra con la palabra.
  const sky = easeOut(seg(lt, 120, 820));
  return (
    <div className={`${s.scene} ${s.paper}`}>
      <div className={s.pastelTop} aria-hidden style={{ opacity: sky }} />
      {lt < ME.meetOut + 300 && (
        <div className={s.typeBlock} style={defocus(easeIn(seg(lt, ME.meetOut, ME.meetOut + 220)), 12)}>
          <h2
            className={s.displayXl}
            style={{
              transform: `scale(${lerp(1.26, 0.58, away).toFixed(3)})`,
              filter: meetBlur > 0.05 ? `blur(${meetBlur.toFixed(1)}px)` : undefined,
              opacity: Math.min(1, focus * 2.5),
            }}
          >
            {v.meet}
          </h2>
        </div>
      )}
      {lt >= ME.logo && (
        <div className={s.typeBlock} style={{ transform: `scale(${drift.toFixed(4)})` }}>
          <LockupStill size={112} iso={lift(lt, ME.logo)} word={lift(lt, ME.logo + ME.wordLag)} />
        </div>
      )}
      <Mark tone="ink" />
    </div>
  );
}

/* 2 · Tu alojamiento / entero / Un solo sistema ---------------------------- */

// Las tres frases entran como el logo pero sin desenfoque: palabra por palabra,
// `ME.wordLag` ms entre una y otra, subiendo desde abajo. Se van hacia arriba
// apagándose, con un escalón más corto (`outLag`). La siguiente entra cuando la
// anterior ya se fue (`gone` − 20): si se pisan, la que sube se mete entre las
// letras de la que se va.
const FI = { a: 0, aOut: 780, b: 1030, bOut: 1600, c: 1800, outLag: 50, outDur: 220, outRise: 18 };

/**
 * Una frase en Outfit con UN degradado que la cruza entera. Cada pieza se
 * mueve sola, así que cada una pinta su tramo del degradado: se mide el ancho
 * de la frase y dónde cae cada pieza (`offsetLeft`, que no ve los transforms)
 * y eso va en `background-size` / `background-position`. Sin medir, el
 * degradado volvería a empezar en cada pieza. Con `tone="ink"` va en tinta,
 * sin degradado.
 * `by="letter"` corta en letras (la ola de "Hecho para").
 * `strike` es el tachado QUEBRADO EN NEGATIVO de `built` (tramos rectos a
 * distinta altura, `brokenPts`): la banda es tinta y,
 * donde cruza las letras, las letras se ven del color del papel. No es un
 * `mix-blend-mode: difference`: el bloque de texto tiene `perspective` y en la
 * salida se escala y desenfoca, y cualquiera de las dos lo aísla del fondo (la
 * banda saldría blanca sobre el papel). Se arma a mano: la banda negra va
 * PRIMERO en el DOM (debajo de las palabras) y cada palabra tachada lleva una
 * copia de su texto en color papel recortada con la forma de la banda —la
 * misma, llevada a las coordenadas de la palabra y cortada en el avance—; al
 * ser hija de la palabra se mueve con ella. Se mide sobre la tinta, sin el
 * padding de la pieza y sin la puntuación final (`data-tail`).
 */
function GradLine({
  text,
  lt,
  at,
  out,
  lag = ME.wordLag,
  outLag = FI.outLag,
  by = "word",
  tone = "grad",
  strike,
  className = s.stacked,
}: {
  text: string;
  lt: number;
  at: number;
  out?: number;
  lag?: number;
  outLag?: number;
  by?: "word" | "letter";
  tone?: "grad" | "ink";
  strike?: { at: number; dur: number; ink: string; paper: string; thick: number; mid: number };
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [span, setSpan] = useState<{ w: number; xs: number[]; pos: { x: number; y: number }[]; band: { x: number; y: number; w: number; h: number } | null } | null>(null);
  useLayoutEffect(() => {
    const words = ref.current ? [...ref.current.querySelectorAll<HTMLElement>("[data-w]")] : [];
    if (!words.length) return;
    const x0 = Math.min(...words.map((n) => n.offsetLeft));
    const x1 = Math.max(...words.map((n) => n.offsetLeft + n.offsetWidth));
    let band = null;
    if (strike) {
      const cs = getComputedStyle(words[0]);
      const pl = parseFloat(cs.paddingLeft);
      const pt = parseFloat(cs.paddingTop);
      const last = words[words.length - 1];
      const tail = last.querySelector<HTMLElement>("[data-tail]")?.offsetWidth ?? 0;
      const bx = words[0].offsetLeft + pl;
      band = { x: bx, y: words[0].offsetTop + pt, w: last.offsetLeft + last.offsetWidth - pl - tail - bx, h: words[0].offsetHeight - 2 * pt };
    }
    setSpan({ w: x1 - x0, xs: words.map((n) => n.offsetLeft - x0), pos: words.map((n) => ({ x: n.offsetLeft, y: n.offsetTop })), band });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  // Las piezas se cortan por ESPACIOS, no por token: `*sistema*.` son dos
  // tokens pegados y el punto entraba 140 ms después que su palabra.
  const words: { text: string; space: boolean }[] = [];
  for (const tk of tokenize(text)) {
    const last = words[words.length - 1];
    if (!tk.space && last && !last.space) last.text += tk.text;
    else words.push({ text: tk.text, space: tk.space });
  }
  const pieces = by === "letter" ? words.flatMap((w) => (w.space ? [w] : [...w.text].map((ch) => ({ text: ch, space: false })))) : words;
  const lastWord = pieces.reduce((acc, p, i) => (p.space ? acc : i), -1);
  // El tachado avanza de izquierda a derecha: los puntos que pasan el frente se
  // aplastan contra él, así la banda y sus recortes terminan en el mismo borde.
  // Mientras avanza (y 150 ms después), los tramos cerca del frente cambian de
  // altura cada 70 ms: el parpadeo del glitch de la referencia.
  const sp = strike ? smooth(seg(lt, strike.at, strike.at + strike.dur)) : 0;
  const band = strike && span?.band && sp > 0 ? span.band : null;
  const flick = !!strike && lt < strike.at + strike.dur + 150;
  const pts =
    band && strike
      ? brokenPts(band.w, band.h, 3, strike.thick, strike.mid, flick ? { from: sp * band.w - band.h * 0.9, salt: Math.floor(lt / 70) } : undefined).map(([x, y]): [number, number] => [Math.min(x, sp * band.w), y])
      : null;
  const pathAt = (dx: number, dy: number) => (pts ? pts.map(([x, y], k) => `${k === 0 ? "M" : "L"} ${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`).join(" ") + " Z" : "");
  let k = -1;
  return (
    <span ref={ref} className={className}>
      {band && strike && (
        <svg className={s.strike} viewBox={`0 0 ${band.w.toFixed(1)} ${band.h.toFixed(1)}`} width={band.w} height={band.h} style={{ left: band.x, top: band.y }} aria-hidden>
          <path d={pathAt(0, 0)} fill={strike.ink} />
        </svg>
      )}
      {pieces.map((tk, i) => {
        // El espacio queda como texto suelto: adentro de un inline-block se colapsa.
        if (tk.space) return <Fragment key={i}>{tk.text}</Fragment>;
        k += 1;
        const inStyle = lift(lt, at + k * lag, 0);
        // Salida: se apaga parejo y sube acelerando.
        const u = out === undefined ? 0 : seg(lt, out + k * outLag, out + k * outLag + FI.outDur);
        // Con tachado, la puntuación final va aparte para medirla y dejarla afuera.
        const tail = strike && i === lastWord ? (/[.,;:!?…]+$/.exec(tk.text)?.[0] ?? "") : "";
        const content = (
          <>
            {tail ? tk.text.slice(0, -tail.length) : tk.text}
            {tail && <span data-tail="">{tail}</span>}
          </>
        );
        const at0 = span?.pos[k];
        return (
          <span
            key={i}
            data-w
            className={tone === "ink" ? s.inkWord : s.gradWord}
            style={{
              opacity: (inStyle.opacity as number) * (1 - u),
              transform: u > 0 ? `${inStyle.transform} translate3d(0, ${(-FI.outRise * easeIn(u)).toFixed(2)}px, 0)` : inStyle.transform,
              ...(tone === "grad"
                ? {
                    backgroundSize: span ? `${span.w.toFixed(1)}px 100%` : undefined,
                    backgroundPosition: span ? `${(-span.xs[k]).toFixed(1)}px 0` : undefined,
                  }
                : {}),
            }}
          >
            {content}
            {band && strike && at0 && (
              <span className={s.negCopy} style={{ color: strike.paper, clipPath: `path("${pathAt(band.x - at0.x, band.y - at0.y)}")` }} aria-hidden>
                {content}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

const wordCount = (text: string) => text.trim().split(/ +/).length;

export function FirstScene({ lt, v }: SceneProps) {
  const gone = (out: number, text: string) => out + (wordCount(text) - 1) * FI.outLag + FI.outDur;
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div className={s.typeBlock}>
        <h2 className={`${s.display} ${s.swapStage} ${s.gradTeal}`}>
          {lt < gone(FI.aOut, v.promise[0]) && <GradLine text={v.promise[0]} lt={lt} at={FI.a} out={FI.aOut} />}
          {lt >= FI.b && lt < gone(FI.bOut, v.promise[1]) && <GradLine text={v.promise[1]} lt={lt} at={FI.b} out={FI.bOut} />}
          {lt >= FI.c && <GradLine text={v.promise[2]} lt={lt} at={FI.c} />}
        </h2>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* 3 · El flameado y el producto de frente ---------------------------------- */

// "Un solo sistema." se va para atrás desenfocándose mientras un frente de
// llamas —manchas de la paleta, desenfocadas, con el borde en lenguas— cruza la
// pantalla EN DIAGONAL y la tapa entera un instante. Atrás del frente queda el
// PMS de frente, plano, con el titular arriba; las cifras, barras y filas entran
// después.
const SH = { away: 0, awayEnd: 480, head: 700, headLag: 100, ui: 350, uiEnd: 1300, data: 550, drift: 2800 };

/**
 * El fuego, con el arco de la referencia (21,29 → 21,72): entra por la esquina
 * de abajo a la izquierda, cruza en diagonal y se va por la de arriba a la
 * derecha FRENANDO —tapa rápido, descubre más lento y la cola queda en esa
 * esquina—. Por eso es UNA sola `easeOut` sobre todo el recorrido.
 * Todo se mide desde la esquina de abajo a la izquierda en dos ejes: `q` sobre la
 * normal `n` (hacia arriba a la derecha, hacia donde avanza) y `r` sobre el
 * borde. Un borde inclinado `tilt` grados que sube toca primero esa esquina y
 * suelta último la opuesta.
 * `thick` NO tapa el cuadro entero (el usuario lo prefirió al 75 %): el cuadro
 * mide ~1236 px en q y su área se reparte en triángulo (casi toda en el medio),
 * así que una banda de ancho T centrada tapa como mucho 1 − (1 − T/1236)²: 620
 * da 75 % en la cuenta; con lóbulos y lenguas hace falta 640 (75,3 % medido
 * muestreando el cuadro cuadro a cuadro).
 * `lobe`/`lobeBack`: la ola grande de cada borde (en q), debajo de las lenguas;
 * su suma tiene que quedar bien por debajo de `thick` o la banda se estrangula.
 * `blur` amplio (44) y `pad` que lo cubra: si la capa midiera justo el cuadro,
 * el desenfoque aclararía los bordes.
 */
const FIRE = { tilt: 28, thick: 640, lead: 150, trail: 60, lobe: 170, lobeBack: 120, from: 200, dur: 1300, N: 120, pad: 160, blur: 44 };

const smooth = (u: number) => (1 - Math.cos(Math.PI * clamp01(u))) / 2;

export function ShotScene({ lt, v }: SceneProps) {
  // Se va desde el primer cuadro: con `smooth` sola arrancaba con velocidad
  // cero y la frase quedaba ~0,8 s quieta sumando el final de `first`. El
  // término lineal le da velocidad inicial sin salto en el corte (vale 0 en 0).
  // El fuego la alcanza a los ~350 ms, cuando ya se fue bastante para atrás.
  const u = seg(lt, SH.away, SH.awayEnd);
  const away = 0.35 * u + 0.65 * smooth(u);

  const th = (FIRE.tilt * Math.PI) / 180;
  const n = { x: Math.sin(th), y: -Math.cos(th) };
  const e = { x: Math.cos(th), y: Math.sin(th) };
  const qSpan = 1280 * n.x - 720 * n.y;
  // Arranca con las lenguas y el desenfoque fuera de cuadro (si asomaran en el
  // primer cuadro, el corte se vería) y termina con la cola afuera.
  const q0 = -(FIRE.lobe + FIRE.lead + 60);
  const q1 = qSpan + FIRE.thick + FIRE.lobeBack + FIRE.trail + 60;
  const Q = lerp(q0, q1, easeOut(seg(lt, FIRE.from, FIRE.from + FIRE.dur)));
  const r0 = -720 * e.y - 60;
  const r1 = 1280 * e.x + 60;
  // Lenguas: tres senos con el reloj (flamean mientras avanzan) —unas ocho a lo
  // largo del borde más una ondulación lenta—, elevados a 2,4 para que las puntas
  // sean finas y los valles planos. Con dos jorobas anchas se leía como lomas.
  // Una envolvente lenta las hace desparejas: tramos con llamas altas y tramos
  // casi calmos.
  const tongue = (x: number, k: number) => {
    const a = Math.sin(x * 38 + lt / 70 + k) * 0.45 + Math.sin(x * 61 - lt / 55 + 2.1 * k) * 0.3 + Math.sin(x * 17 + lt / 120 + 0.6 * k) * 0.25;
    const env = (Math.sin(x * 9 - lt / 260 + 1.3 * k) + 1) / 2;
    return ((a + 1) / 2) ** 2.4 * (0.3 + 0.7 * env);
  };
  // Debajo de las lenguas, la ola grande de la referencia (21,355 → 21,388):
  // lóbulos redondos de ~15–30 % del cuadro que se deforman mientras avanza, así
  // unas partes del frente se adelantan a otras. Sin esto el borde era una recta
  // inclinada con flecos ("muy lineal"). Va de −1 a 1.
  const lobe = (x: number, k: number) => Math.sin(x * 7.5 + lt / 260 + k) * 0.55 + Math.sin(x * 13 - lt / 180 + 1.7 * k) * 0.3 + Math.sin(x * 3.1 + lt / 420 + 0.4 * k) * 0.15;
  const rs = Array.from({ length: FIRE.N + 1 }, (_, i) => lerp(r0, r1, i / FIRE.N));
  const rx = (r: number) => (r - r0) / (r1 - r0);
  const px = (r: number, q: number) => ({ x: e.x * r + n.x * q, y: 720 + e.y * r + n.y * q });
  const pt = (r: number, q: number, pad = 0) => {
    const p = px(r, q);
    return `${(p.x + pad).toFixed(1)}px ${(p.y + pad).toFixed(1)}px`;
  };
  // Los dos bordes de la banda en q: el de adelante (lóbulo + lenguas largas) y
  // el de atrás (lóbulo propio + lenguas cortas).
  const qLead = (r: number) => Q + FIRE.lobe * lobe(rx(r), 0) + FIRE.lead * tongue(rx(r), 0);
  const qTrail = (r: number) => Q - FIRE.thick + FIRE.lobeBack * lobe(rx(r), 3.3) + FIRE.trail * tongue(rx(r), 2.1);
  // Lo que queda atrás del frente, recortado JUSTO a mitad de camino entre los
  // dos bordes: con una banda angosta y lóbulos grandes, un corte propio podía
  // salirse de la banda y el borde duro quedaba a la vista.
  const cut = `polygon(${rs.map((r) => pt(r, (qLead(r) + qTrail(r)) / 2)).join(", ")}, ${pt(r1, -3000)}, ${pt(r0, -3000)})`;
  // La banda. El desenfoque va en el padre: `filter` corre ANTES que
  // `clip-path` y en el mismo elemento el borde quedaría duro.
  const band = `polygon(${rs.map((r) => pt(r, qLead(r), FIRE.pad)).join(", ")}, ${rs.map((r) => pt(r, qTrail(r), FIRE.pad)).reverse().join(", ")})`;
  const showFire = Q + FIRE.lobe + FIRE.lead > -60 && Q - FIRE.thick - FIRE.lobeBack < qSpan + 60;
  // El color es UN degradado continuo a lo largo de la normal —pistacho claro en
  // las puntas, ámbar en el medio, arcilla suave atrás— que viaja con la banda,
  // más dos velos enormes y tenues que se corren con el reloj para que no quede
  // lineal. Las ocho manchas chicas de antes se leían como "pedacitos naranjas y
  // verdes". El degradado arranca en la esquina de abajo a la izquierda de la
  // capa (q = `qBox`), así que una parada en q va en `q − qBox` px.
  const qBox = -FIRE.pad * (n.x - n.y);
  const g = (q: number) => `${(q - qBox).toFixed(0)}px`;
  const veil = (rf: number, qBack: number, rgb: string, a: number, sp: number, ph: number) => {
    const p = px(lerp(r0, r1, rf) + Math.sin(lt / sp + ph) * 160, Q - qBack);
    return `radial-gradient(1100px 720px at ${(p.x + FIRE.pad).toFixed(0)}px ${(p.y + FIRE.pad).toFixed(0)}px, rgba(${rgb}, ${a}), rgba(${rgb}, 0) 72%)`;
  };
  const fire = showFire
    ? [
        // Los naranjas van más saturados y un punto más claros que los originales
        // (#e7a07c / #e4ae66 / #ecc987): el usuario los pidió "más intensos pero
        // un poco más claros".
        veil(0.28, 260, "246, 214, 138", 0.5, 420, 0),
        veil(0.78, 380, "243, 183, 104", 0.45, 480, 1.9),
        // El verde del fondo de `wheel` (`.gradientDeep`), del lado CLARO de su
        // campo de luz, arriba de la nube: el frente —que es lo de arriba, porque
        // la banda sube en diagonal— pasa del ámbar a ese salvia, y un velo del
        // mismo tono deriva sobre el borde. Ocupa casi la mitad delantera de la
        // banda ("más verde"); atrás sigue la arcilla.
        veil(0.55, 40, "157, 191, 171", 0.7, 360, 0.8),
        veil(0.2, 160, "180, 208, 189", 0.5, 300, 2.6),
        `linear-gradient(${FIRE.tilt}deg, #f2a578 ${g(Q - FIRE.thick - FIRE.lobeBack)}, #f3b768 ${g(Q - FIRE.thick * 0.74)}, #f5d189 ${g(Q - FIRE.thick * 0.52)}, #b4d0bd ${g(Q - FIRE.thick * 0.32)}, #9dbfab ${g(Q + FIRE.lobe)})`,
      ].join(", ")
    : "";
  // El PMS sube apenas mientras se descubre y después empuja lento hasta el corte.
  const ui = smooth(seg(lt, SH.ui, SH.uiEnd));
  const drift = seg(lt, SH.ui, SH.drift);
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      {lt < SH.awayEnd + 100 && (
        <div
          className={s.typeBlock}
          style={{
            transform: `scale(${lerp(1, 0.6, away).toFixed(4)})`,
            filter: away > 0.001 ? `blur(${(away * 16).toFixed(2)}px)` : undefined,
            opacity: 1 - easeIn(away),
          }}
        >
          {/* La misma frase que cierra `first`, con su mismo degradado: si no, cambia de color en el corte. */}
          <h2 className={`${s.display} ${s.swapStage} ${s.gradTeal}`}>
            <GradLine text={v.promise[2]} lt={lt} at={-10000} />
          </h2>
        </div>
      )}
      <div className={`${s.layer} ${s.paper}`} style={{ clipPath: cut }}>
        <h2 className={s.shotHead}>
          <GradLine text={v.shotHead[0]} lt={lt} at={SH.head} lag={SH.headLag} className={s.shotHeadLine} />
          <GradLine text={v.shotHead[1]} lt={lt} at={SH.head + wordCount(v.shotHead[0]) * SH.headLag} lag={SH.headLag} className={s.shotHeadLine} />
        </h2>
        <div className={s.shotFlat} style={{ transform: `translate3d(0, ${((1 - ui) * 26 - 6 * drift).toFixed(2)}px, 0) scale(${(0.86 * (0.985 + 0.015 * ui) + 0.02 * drift).toFixed(4)})` }}>
          <ProductShot v={v} lt={lt} at={0} data={lt - SH.data} round />
        </div>
      </div>
      {showFire && (
        <div className={s.layer} style={{ filter: `blur(${FIRE.blur}px)` }} aria-hidden>
          <div style={{ position: "absolute", left: -FIRE.pad, top: -FIRE.pad, width: 1280 + 2 * FIRE.pad, height: 720 + 2 * FIRE.pad, clipPath: band, background: fire }} />
        </div>
      )}
      <Mark tone="ink" />
    </div>
  );
}

/* 4 · Hecho para eliminar ~~caos operativo~~ ----------------------------- */

// Calco de la referencia 22,89 → 25,09 en nuestro lenguaje (Outfit en TINTA
// como la referencia, todo del mismo cuerpo, entradas que suben sin desenfoque):
// - "Hecho para" entra LETRA POR LETRA, como la ola de "Built to": cada letra
//   sube `letterLag` ms después de la anterior. Se va subiendo y apagándose.
// - "eliminar" queda solo un rato (como "kill") y después "caos operativo."
//   sube palabra por palabra. La línea se monta ENTERA desde que
//   entra "eliminar" (lo que falta está en opacidad 0): si "caos operativo."
//   se montara al entrar, "eliminar" arrancaría centrado y saltaría a la izquierda.
// - Las dos frases van en la MISMA celda de la grilla: en filas distintas, el
//   cruce empujaba una contra otra.
// - El tachado quebrado, fino y en negativo, cruza "caos operativo" cuando las palabras ya
//   aterrizaron (a 400 ms de la última, la subida está a ~2 px del final).
// - Salida: la frase se va para atrás con desenfoque mientras el degradado de
//   la escena siguiente (`grid`) se CIERRA DESDE LOS BORDES hasta llenar el
//   cuadro; al corte es su primer cuadro (mismo `Gradient`, reloj corrido `end`).
const BU = { lead: 0, letterLag: 24, leadOut: 760, letterOut: 10, kill: 1040, word: 1280, wordLag: 100, strike: 1720, away: 2480, end: 2830 };
// El tachado quebrado en negativo: tramos de tinta finos (`thick`, en fracción
// del alto de la línea) que pasan por el medio de las minúsculas (`mid`), y las
// letras que cruzan en color papel. Cruza en `dur` ms (la referencia tarda
// ~370; con 260 se leía apurado) y queda ~200 ms quieto antes de la salida.
const NEG = { dur: 600, ink: "#14150f", paper: "#f2efe8", thick: 0.085, mid: 0.6 };

export function BuiltScene({ lt, v }: SceneProps) {
  const u = seg(lt, BU.away, BU.end);
  const away = smooth(u);
  const close = smooth(seg(lt, BU.away - 60, BU.end));
  // El hueco del degradado: un radial con borde muy ancho que se achica hasta
  // desaparecer (a 100 % todo transparente, a −55 % todo tapado).
  const hole = lerp(110, -55, close);
  const mask = `radial-gradient(farthest-corner at 50% 50%, transparent ${hole.toFixed(1)}%, #000 ${(hole + 55).toFixed(1)}%)`;
  const big = v.builtTo.struck + v.builtTo.post;
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div
        className={s.typeBlock}
        style={
          away > 0
            ? { transform: `scale(${lerp(1, 0.78, away).toFixed(4)})`, filter: `blur(${(away * 10).toFixed(2)}px)`, opacity: 1 - away * away }
            : undefined
        }
      >
        {lt < BU.leadOut + 12 * BU.letterOut + 240 && (
          <h2 className={s.builtLead} style={{ gridArea: "1 / 1" }}>
            <GradLine text={v.builtTo.lead} lt={lt} at={BU.lead} lag={BU.letterLag} by="letter" tone="ink" out={BU.leadOut} outLag={BU.letterOut} className={s.builtPiece} />
          </h2>
        )}
        {lt >= BU.kill && (
          <h2 className={s.builtLine} style={{ gridArea: "1 / 1" }}>
            <GradLine text={v.builtTo.pre.trim()} lt={lt} at={BU.kill} lag={BU.wordLag} tone="ink" className={s.builtPiece} />
            <GradLine text={big} lt={lt} at={BU.word} lag={BU.wordLag} tone="ink" strike={{ at: BU.strike, ...NEG }} className={s.builtPiece} />
          </h2>
        )}
      </div>
      {close > 0 && (
        <div className={`${s.layer} ${s.inkBg}`} style={{ maskImage: mask, WebkitMaskImage: mask }} aria-hidden>
          <Gradient lt={lt - BU.end} deep />
        </div>
      )}
      <Mark tone={close > 0.6 ? "paper" : "ink"} />
    </div>
  );
}
