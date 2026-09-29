"use client";

import { useMemo, useRef } from "react";
import { clamp01, easeIn, easeInOut, easeOut, easeOutExpo, seg } from "../video/timeline";
import { Gradient, Mark, useOffsets, type CursorKey, type Rect } from "../video/fx";
import PmsShell from "../video/pms/PmsShell";
import { RecCard, RevenuePage } from "../video/pms/Revenue";
import TourismCard from "../video/pms/TourismCard";
import { recs, tourismMetrics } from "../video/acts/data";
import { Check, GLine, away, cameraStyle, lift, pointerAt, smooth, type Move, type Pose } from "../video-kit/kit";
import { layKitBeats } from "../video-kit/KitPlayer";
import { APP, EndCard, Fade, HeroTitle, TourStage } from "../video-kit/common";
import type { TourProps } from "./types";
import { useKitPortrait } from "../video/orientation";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import t from "./tours.module.css";

/**
 * El video de Revenue (`/video/revenue`). Sigue a la página
 * `/producto/revenue`: el precio y su porqué; un recorrido por las
 * recomendaciones reales (cada una con su motivo, aceptar la aplica al motor,
 * el destino con sus fuentes); las trece variables con el ensayo en seco; y el
 * CTA.
 */

type P = TourProps<"revenue">;

const WIDE: Pose = { x: 640, y: 360, z: 1 };
const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };

/* ========================================================= 1 · hero ===== */

function Hero({ lt, v }: P) {
  return (
    <HeroTitle lt={lt} title={v.page.hero.title} dur={5000} visualAt={1200} pScale={0.85}>
      <div className={t.pmsTokens} style={{ width: 900, transform: "scale(1.12)", transformOrigin: "50% 0" }}>
        <RecCard recs={recs(v.base, false)} labels={v.base.ui.revenue} block={false} />
      </div>
    </HeroTitle>
  );
}

/* ===================================================== 2 · recorrido ==== */

/**
 * 1. Cada precio con su motivo: la cámara lee las tres recomendaciones.
 * 2. Aceptar la aplica al motor: el puntero acepta la del sábado.
 * 3. Lo que mueve la demanda, con la fuente: el estado turístico del destino.
 */
function plan() {
  const read = 1300;
  const end1 = read + 5200;
  const click = end1 + 1300;
  const end2 = click + 2600;
  const tourIn = end2;
  const end = tourIn + 5600;
  return { cap: [400, end1, end2], read, end1, click, end2, tourIn, end, duration: end + 450 };
}

function Tour({ lt, v }: P) {
  const x = v.x;
  const b = v.base;
  const Pl = useMemo(() => plan(), []);
  const appRef = useRef<HTMLDivElement>(null);
  const screen: "rev" | "dest" = lt < Pl.tourIn ? "rev" : "dest";
  const R = useOffsets(appRef, ['[data-rec="0"]', '[data-rec="2"]', '[data-accept="0"]'], [screen]);
  const r = (sel: string, fb: Partial<Rect>) => R[sel] ?? { ...R0, ...fb };
  const r0 = r('[data-rec="0"]', { x: 90, y: 130, w: 860, h: 110 });
  const r2 = r('[data-rec="2"]', { x: 90, y: 380, w: 860, h: 110 });
  const acc = r('[data-accept="0"]', { x: 800, y: 150, w: 90, h: 34 });
  const accPt = { x: APP.x + acc.x + acc.w / 2, y: APP.y + acc.y + acc.h / 2 };
  const cx = APP.x + r0.x + r0.w * 0.5;

  const moves: Move[] = [
    { t: 600, d: 900, to: { x: cx, y: APP.y + r0.y + r0.h / 2, z: 1.35 } },
    { t: Pl.read + 1400, d: 3000, to: { x: cx, y: APP.y + r2.y + r2.h / 2, z: 1.35 } },
    { t: Pl.end1 - 300, d: 900, to: { x: APP.x + r0.x + r0.w * 0.62, y: APP.y + r0.y + r0.h / 2 + 10, z: 1.45 } },
    { t: Pl.end2 - 600, d: 700, to: WIDE },
    { t: Pl.tourIn + 700, d: 900, to: { x: 640, y: 330, z: 1.25 } },
  ];
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  const keys: CursorKey[] = [
    { at: Pl.click - 900, x: accPt.x - 150, y: accPt.y + 150 },
    { at: Pl.click - 130, x: accPt.x, y: accPt.y },
    { at: Pl.click, x: accPt.x, y: accPt.y, click: true, down: true },
    { at: Pl.click + 160, x: accPt.x, y: accPt.y, up: true },
    { at: Pl.click + 900, x: accPt.x + 40, y: accPt.y + 140 },
  ];
  const ptr = pointerAt(keys, lt);
  const ps = toScreen(ptr.x, ptr.y);
  const ptrOn = easeOut(seg(lt, Pl.click - 1100, Pl.click - 850)) * (1 - easeIn(seg(lt, Pl.click + 700, Pl.click + 1000)));
  const applied = lt >= Pl.click + 120;
  const toast = easeOutExpo(seg(lt, Pl.click + 300, Pl.click + 700)) * (1 - seg(lt, Pl.end2 - 500, Pl.end2 - 200));
  const tAt = Pl.tourIn + 900;
  const tour = b.tourism;

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
        <PmsShell active={screen === "rev" ? "revenue" : "ia"} labels={b.ui.shell} tabs={screen === "rev" ? b.ui.rmsTabs : undefined} activeTab={6} width={APP.w} height={APP.h} round>
          <div style={{ position: "absolute", inset: 0 }}>
            <Fade lt={lt} a={0} b={Pl.tourIn}>
              <RevenuePage recs={recs(b, applied)} labels={b.ui.revenue} pressing={lt >= Pl.click && lt < Pl.click + 200 ? 0 : null} />
            </Fade>
            <Fade lt={lt} a={Pl.tourIn}>
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
                <div style={{ width: 640 }}>
                  <TourismCard
                    title={tour.title}
                    updated={tour.updated}
                    metrics={tourismMetrics(b, lt, tAt, 160)}
                    reveal={tour.metrics.filter((_, i) => lt >= tAt + i * 160).length}
                    alert={tour.alert}
                    alertOn={lt >= tAt + 900}
                    more={tour.more}
                  />
                </div>
              </div>
            </Fade>
          </div>
        </PmsShell>
      }
      overlays={
        screen === "rev" && toast > 0 ? (
          <div className={[t.toast, t.toastOk].join(" ")} style={{ left: acc.x - 170, top: acc.y + acc.h + 70, opacity: toast.toFixed(3), transform: `translate3d(0, ${((1 - toast) * 10).toFixed(1)}px, 0)` }}>
            <span className={t.toastIcon}>
              <Check />
            </span>
            <span>
              <b>{x.applied}</b>
              <small>
                {b.ui.revenue.recs[0].date} · {b.ui.revenue.recs[0].to}
              </small>
            </span>
          </div>
        ) : null
      }
    />
  );
}

/* ===================================================== 3 · variables ==== */

/**
 * Las trece variables en una grilla y un barrido que las va tildando de a una
 * (el motor las lee todas); cuando termina, entra el ensayo en seco por la
 * derecha: una regla y lo que habría hecho.
 */
const RU = { title: 100, em: 650, chips: 700, chipLag: 60, scan: 1900, scanStep: 150, dry: 4000, out: 7150, end: 7600 };

function Rules({ lt, v }: P) {
  // Vertical: la grilla de variables arriba y el ensayo en seco debajo.
  const portrait = useKitPortrait();
  const d = v.x.dryRun;
  const vars = v.x.vars;
  const q = smooth(seg(lt, RU.out, RU.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / RU.end));
  const scan = lt < RU.scan ? -1 : Math.floor((lt - RU.scan) / RU.scanStep);
  const dry = easeOutExpo(seg(lt, RU.dry, RU.dry + 900));
  return (
    <div className={`${sc.scene} ${sc.inkBg}`}>
      <Gradient lt={lt + 7000} deep />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 56 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.page.rules.title} lt={lt} at={RU.title} emAt={RU.em} tone="paper" />
          </h2>
        </div>
        <div className={t.varGrid} style={portrait ? { left: 290, top: 180, width: 700, justifyContent: "center" } : { left: 90, top: 200, width: 700 }}>
          {vars.map((name, i) => {
            const on = i <= scan;
            return (
              <span key={name} className={[t.varChip, on ? t.varOn : "", i === scan ? t.varScan : ""].join(" ")} style={lift(lt, RU.chips + i * RU.chipLag, 14, 6)}>
                <i>✓</i>
                {name}
              </span>
            );
          })}
        </div>
        <div style={{ position: "absolute", left: portrait ? 450 : 830, top: portrait ? 560 : 230, opacity: clamp01(dry * 1.4).toFixed(3), transform: `translate3d(${((1 - dry) * 60).toFixed(1)}px, 0, 0)`, filter: dry < 0.98 ? `blur(${((1 - dry) * 10).toFixed(1)}px)` : undefined }}>
          <div className={t.dry}>
            <div className={t.dryTitle}>{d.title}</div>
            <div className={t.dryRule}>{d.rule}</div>
            <div className={t.dryResult} style={lift(lt, RU.dry + 700, 8, 4)}>
              {d.result}
            </div>
            <div className={t.dryAvg} style={lift(lt, RU.dry + 900, 8, 4)}>
              {d.avg}
            </div>
          </div>
        </div>
      </div>
      <Mark tone="paper" />
    </div>
  );
}

function End({ lt, v }: P) {
  return <EndCard lt={lt} cta={v.page.cta.title} tagline={v.page.hero.title} />;
}

export const REVENUE = {
  beats: () =>
    layKitBeats([
      { id: "hero", dur: 5000, enter: "fade", enterDur: 400 },
      { id: "tour", dur: plan().duration },
      { id: "rules", dur: 7600 },
      { id: "end", dur: 5600 },
    ]),
  scenes: { hero: Hero, tour: Tour, rules: Rules, end: End },
  posterAt: ["tour", 3000] as [string, number],
  /** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/ (ver KitEmbed). */
  /** Zoom de cada escena en el corte vertical (`?view=mobile`, ver video-kit/portrait.tsx); sin dato, 1,3. */
  pzoom: {tour: 1.1,rules: 1.3},
  anchors: (v: P["v"]): Record<string, number[]> => ({ hero: [150], tour: [...plan().cap], rules: [100], end: [150, 3350] }),
};
