"use client";

import type { CSSProperties, ReactNode, RefObject } from "react";
import { clamp01, easeIn, easeInOut, easeOutExpo, easeOutQuint, easeInExpo, lerp, seg } from "../video/timeline";
import { Gradient, LockupStill, Mark } from "../video/fx";
import { GLine, Pointer, StepCaptions, away, lift, smooth } from "./kit";
import sc from "../video/scenes.module.css";
import k from "./kit.module.css";
import c from "./common.module.css";
import { useKitPortrait } from "../video/orientation";

/**
 * Las escenas que comparten los videos de producto (Habitaciones, Motor,
 * Informes, Revenue, Marketing): la portada con el titular de la página, la
 * ventana del PMS con cámara/puntero/rótulos para el recorrido, los chips en
 * órbita y el cierre. Cada video aporta sólo su contenido.
 */

/** La ventana del PMS dentro del escenario: centrada y grande. */
export const APP = { w: 980, h: 620, x: 150, y: 50 };

/* ------------------------------------------------------------ portada ---- */

/**
 * La portada: el titular de la página arriba (el remate en degradado) y una
 * pieza del producto que entra desde abajo. Sale hacia atrás.
 */
export function HeroTitle({ lt, title, dur, top = 80, children, visualAt = 1300, pScale = 0.72 }: { lt: number; title: string; dur: number; top?: number; children?: ReactNode; visualAt?: number; /** Escala de la pieza en vertical: < 1 para las filas anchas de tarjetas, > 1 para un teléfono o una tarjeta sola. */ pScale?: number }) {
  // Vertical (`?view=mobile`): el titular en un ancho que entre y la pieza de abajo achicada para que no se corte.
  const portrait = useKitPortrait();
  const q = smooth(seg(lt, dur - 450, dur));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / dur));
  const vis = easeOutExpo(seg(lt, visualAt, visualAt + 900));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} style={{ opacity: seg(lt, 0, 900).toFixed(3) }} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={portrait ? { top: top + 80, left: 190, right: 190, padding: 0 } : { top }}>
          <h1 className={k.displayLg} style={portrait ? { whiteSpace: "normal" } : undefined}>
            <GLine text={title} lt={lt} at={150} emAt={850} lag={90} />
          </h1>
        </div>
        {children && (
          <div className={c.heroVisual} style={{ opacity: clamp01(vis * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - vis) * 60).toFixed(1)}px, 0)${portrait ? ` scale(${pScale})` : ""}`, ...(portrait ? { transformOrigin: "50% 0", top: top + 390 } : null), filter: vis < 0.98 ? `blur(${((1 - vis) * 10).toFixed(1)}px)` : undefined }}>
            {children}
          </div>
        )}
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ----------------------------------------------------------- recorrido --- */

/**
 * El escenario del recorrido: fondo claro, la ventana entra subiendo y se va
 * hacia atrás, la capa con la cámara (`camStyle`), el puntero en pantalla y
 * los rótulos de los pasos.
 */
export function TourStage({
  lt,
  dur,
  camStyle,
  appRef,
  app,
  overlays,
  pointer,
  captions,
  capAt,
  appBox = APP,
  appClass,
}: {
  lt: number;
  dur: number;
  camStyle: CSSProperties;
  appRef?: RefObject<HTMLDivElement | null>;
  /** La ventana (normalmente un `PmsShell`). */
  app: ReactNode;
  /** Lo que va sobre la ventana y dentro de la cámara (menús, modales). */
  overlays?: ReactNode;
  pointer?: { x: number; y: number; pressed: boolean; ripples: number[]; opacity: number } | null;
  captions: string[];
  capAt: number[];
  appBox?: { w: number; h: number; x: number; y: number };
  appClass?: string;
}) {
  const inP = smooth(seg(lt, 0, 800));
  const q = smooth(seg(lt, dur - 450, dur));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light />
      <div className={sc.layer} style={{ opacity: (clamp01(inP * 1.4) * (1 - q * q)).toFixed(3), transform: `translate3d(0, ${((1 - inP) * 50).toFixed(1)}px, 0) scale(${lerp(1, 0.9, q).toFixed(4)})`, filter: q > 0 ? `blur(${(q * 12).toFixed(2)}px)` : inP < 0.999 ? `blur(${((1 - inP) * 10).toFixed(2)}px)` : undefined }}>
        <div className={sc.layer} style={camStyle}>
          <div ref={appRef} className={[c.appWrap, appClass ?? ""].join(" ")} style={{ left: appBox.x, top: appBox.y, width: appBox.w, height: appBox.h }}>
            {app}
            {overlays}
          </div>
        </div>
        {pointer && <Pointer {...pointer} />}
      </div>
      <StepCaptions lt={lt} captions={captions} at={capAt} end={dur - 450} />
      <Mark tone="ink" />
    </div>
  );
}

/** Un contenido de página que se cruza con otro: aparece en `a`, se va en `b`. */
export function Fade({ lt, a, b, children, className }: { lt: number; a: number; b?: number; children: ReactNode; className?: string }) {
  const i = seg(lt, a - 100, a + 350);
  const o = b === undefined ? 0 : seg(lt, b - 250, b + 150);
  if (lt < a - 100 || (b !== undefined && lt > b + 150)) return null;
  return (
    <div className={[c.pageLayer, className ?? ""].join(" ")} style={{ opacity: (i * (1 - o)).toFixed(3) }}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------- órbita ------- */

/**
 * Titular arriba y chips que salen del centro en espiral, levitan en órbita
 * (el anillo gira y cada chip flota) y, si `gather` está, vuelven al centro.
 * La coreografía que el usuario aprobó en el video de Roombir IA.
 */
export function OrbitScene({
  lt,
  dur,
  title,
  sub,
  chips,
  dark = true,
  center,
  gather,
  ring = { cx: 640, cy: 420, rx: 460, ry: 180 },
}: {
  lt: number;
  dur: number;
  title: string;
  sub?: string;
  chips: string[];
  dark?: boolean;
  /** Lo que aparece en el centro (después de juntar, o desde el principio). */
  center?: { at: number; node: ReactNode };
  gather?: number;
  ring?: { cx: number; cy: number; rx: number; ry: number };
}) {
  const q = smooth(seg(lt, dur - 450, dur));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / dur));
  const spin = (lt / 1000) * 7;
  // Vertical: el anillo pasa a ser alto y angosto, así los chips no se salen por los costados.
  if (useKitPortrait()) ring = { cx: ring.cx, cy: ring.cy + 40, rx: Math.min(ring.rx, 330), ry: Math.max(ring.ry, 330) };
  const cen = center ? easeOutExpo(seg(lt, center.at, center.at + 900)) : 0;
  return (
    <div className={`${sc.scene} ${dark ? sc.inkBg : sc.lavender}`}>
      {dark ? <Gradient lt={lt + 5000} deep /> : <div className={sc.pastelTop} aria-hidden />}
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 50 }}>
          <h2 className={k.displaySm}>
            <GLine text={title} lt={lt} at={100} emAt={650} tone={dark ? "paper" : "ink"} />
          </h2>
          {sub && (
            <p className={dark ? k.subPaper : k.sub} style={lift(lt, 900, 14, 6)}>
              {sub}
            </p>
          )}
        </div>
        {chips.map((t, i) => {
          const at = 650 + i * 70;
          if (lt < at) return null;
          const out = easeOutExpo(seg(lt, at, at + 1150));
          const back = gather === undefined ? 0 : easeInExpo(seg(lt, gather + i * 30, gather + i * 30 + 700));
          if (back >= 1) return null;
          const r = out * (1 - back);
          const ang = ((-90 + (i / chips.length) * 360 + spin - (1 - out) * 70 + back * 70) * Math.PI) / 180;
          const bob = Math.sin(lt / 620 + i * 1.7) * 6 * out * (1 - back);
          const x = ring.cx + Math.cos(ang) * ring.rx * r;
          const y = ring.cy + Math.sin(ang) * ring.ry * r + bob;
          const rot = (1 - out) * -38 + back * 32;
          const blur = (1 - out) * 12 + back * 12;
          return (
            <div key={t} className={[c.chip, dark ? c.chipDark : c.chipLight].join(" ")} style={{ left: x, top: y, opacity: (clamp01(out * 2) * (1 - back * back)).toFixed(3), transform: `translate(-50%, -50%) rotate(${rot.toFixed(2)}deg) scale(${(lerp(0.35, 1, out) * lerp(1, 0.3, back)).toFixed(3)})`, filter: blur > 0.2 ? `blur(${blur.toFixed(2)}px)` : undefined }}>
              <span className={c.chipDot} />
              {t}
            </div>
          );
        })}
        {center && cen > 0 && (
          <div className={c.center} style={{ left: ring.cx, top: ring.cy, opacity: clamp01(cen * 1.6).toFixed(3), transform: `translate(-50%, -50%) scale(${lerp(0.55, 1, cen).toFixed(4)})`, filter: cen < 0.98 ? `blur(${((1 - cen) * 14).toFixed(1)}px)` : undefined }}>
            {center.node}
          </div>
        )}
      </div>
      <Mark tone={dark ? "paper" : "ink"} />
    </div>
  );
}

/* ------------------------------------------------------------- cierre ---- */

/** El CTA de la página que se va y el logo con el titular del hero. */
export function EndCard({ lt, cta, tagline }: { lt: number; cta: string; tagline: string }) {
  const EN = { line: 150, em: 900, out: 2700, logo: 3050, tag: 3350 };
  const logo = easeOutQuint(seg(lt, EN.logo, EN.logo + 620));
  const drift = 1 + 0.035 * easeInOut(seg(lt, EN.logo, 5600));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light style={{ opacity: 0.8 }} />
      {lt < EN.out + 500 && (
        <div className={k.headTop} style={{ top: 250 }}>
          <h2 className={k.displayLg}>
            <GLine text={cta} lt={lt} at={EN.line} emAt={EN.em} out={EN.out} lag={90} />
          </h2>
        </div>
      )}
      {lt >= EN.logo && (
        <div className={sc.typeBlock} style={{ transform: `scale(${drift.toFixed(4)})` }}>
          <div className={c.endStack}>
            <div style={{ opacity: logo.toFixed(3), transform: `translate3d(0, ${((1 - logo) * 24).toFixed(1)}px, 0)`, filter: logo < 0.99 ? `blur(${((1 - logo) * 12).toFixed(1)}px)` : undefined }}>
              <LockupStill size={96} />
            </div>
            <p className={c.endTag}>
              <GLine text={tagline} lt={lt} at={EN.tag} lag={60} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/** Centrado en (x, y); el `style` de adentro puede traer su propio transform. */
export function At({ x, y, style, children }: { x: number; y: number; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className={c.at} style={{ left: x, top: y }}>
      <div style={style}>{children}</div>
    </div>
  );
}

/**
 * La nota didáctica: una tarjeta (título + una línea, con número o foto
 * opcional) en `box` y una línea guía punteada hasta `to`, con un punto en la
 * punta. Entra en `at` (la línea crece desde la tarjeta) y se va en `out`.
 * Todo en las coordenadas de la capa donde se monta.
 */
export function Note({ lt, at, out, box, to, title, text, width = 250, num, photo, big = false, ring }: { lt: number; at: number; out?: number; box: { x: number; y: number }; to?: { x: number; y: number }; title: string; text?: string; width?: number; num?: number; photo?: string; /** Para escenas sin zoom: letra más grande. */ big?: boolean; /** En vez del punto, un recuadro de este tamaño alrededor de `to`: la línea termina en su borde y el contenido se sigue viendo. */ ring?: { w: number; h: number } }) {
  if (lt < at - 50 || (out !== undefined && lt > out + 300)) return null;
  const p = easeOutExpo(seg(lt, at, at + 600));
  const o = out === undefined ? 0 : seg(lt, out, out + 300);
  const op = (clamp01(p * 1.6) * (1 - o)).toFixed(3);
  const line = easeInOut(seg(lt, at + 250, at + 750));
  // La línea sale del borde de la tarjeta más cercano al punto.
  let l: { x1: number; y1: number; len: number; ang: number } | null = null;
  if (to) {
    const h = big ? 84 : 64;
    const x1 = to.x < box.x ? box.x : to.x > box.x + width ? box.x + width : to.x;
    const y1 = to.y < box.y ? box.y : to.y > box.y + h ? box.y + h : box.y + h / 2;
    // Con recuadro, la línea llega a su borde (el más cercano a la tarjeta), no al centro.
    const tx = ring ? (x1 < to.x - ring.w / 2 ? to.x - ring.w / 2 - 3 : x1 > to.x + ring.w / 2 ? to.x + ring.w / 2 + 3 : to.x) : to.x;
    const dx = tx - x1;
    const dy = to.y - y1;
    l = { x1, y1, len: Math.hypot(dx, dy), ang: (Math.atan2(dy, dx) * 180) / Math.PI };
  }
  return (
    <>
      {l && line > 0 && <div className={c.leader} style={{ left: l.x1, top: l.y1, width: l.len, opacity: op, transform: `rotate(${l.ang.toFixed(2)}deg) scaleX(${line.toFixed(4)})` }} />}
      {to && !ring && line > 0.95 && <span className={c.leaderDot} style={{ left: to.x, top: to.y, opacity: op }} />}
      {to && ring && line > 0.6 && <span className={c.noteRing} style={{ left: to.x - ring.w / 2 - 3, top: to.y - ring.h / 2 - 3, width: ring.w + 6, height: ring.h + 6, opacity: (Number(op) * seg(line, 0.6, 1)).toFixed(3) }} />}
      <div className={[c.note, big ? c.noteBig : ""].join(" ")} style={{ left: box.x, top: box.y, width, opacity: op, transform: `translate3d(0, ${((1 - p) * 12).toFixed(1)}px, 0)`, filter: p < 0.98 ? `blur(${((1 - p) * 6).toFixed(1)}px)` : undefined }}>
        {num !== undefined && <span className={c.noteNum}>{num}</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {photo && <img className={c.notePhoto} src={photo} alt="" />}
        <span>
          <span className={c.noteTitle}>{title}</span>
          {text && <span className={c.noteText}>{text}</span>}
        </span>
      </div>
    </>
  );
}

/** Teclas del tutorial ("Ctrl" + "K"), que se hunden al apretarlas. */
export function Keys({ keys, p, pressed, x, y }: { keys: string[]; p: number; pressed: boolean; x: number; y: number }) {
  if (p <= 0) return null;
  return (
    <div className={c.keys} style={{ left: x, top: y, opacity: p.toFixed(3), transform: `translate(-50%, -50%) translate3d(0, ${((1 - p) * 10).toFixed(1)}px, 0)` }}>
      {keys.map((kk, i) => (
        <span key={kk}>
          {i > 0 && <b>+</b>}
          <kbd style={pressed ? { transform: "translateY(2px)", boxShadow: "0 1px 0 #cbd5e1" } : undefined}>{kk}</kbd>
        </span>
      ))}
    </div>
  );
}

// Curvas usadas por las escenas de cada video.
export { easeIn };
