"use client";

import { useMemo, useRef } from "react";
import { STREAM_MS, clamp01, easeInOut, easeOutExpo, seg } from "../video/timeline";
import { Mark, Scramble, useOffsets, type Rect } from "../video/fx";
import PmsShell from "../video/pms/PmsShell";
import Reports from "../video/pms/Reports";
import { RevenueCard as KpiBlock } from "../video/pms/ChatUi";
import { ChatPage } from "../video/acts/data";
import { GLine, away, cameraStyle, lift, smooth, type Move, type Pose } from "../video-kit/kit";
import { layKitBeats } from "../video-kit/KitPlayer";
import { APP, EndCard, Fade, HeroTitle, TourStage } from "../video-kit/common";
import type { TourProps } from "./types";
import { useKitPortrait } from "../video/orientation";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import t from "./tours.module.css";

/**
 * El video de Informes (`/video/informes`). Sigue a la página
 * `/producto/informes`: los números sin planilla, un recorrido por la pantalla
 * real de Informes (las métricas de hoy, la curva de lo ya reservado) y la
 * pregunta que no está en el informe, hecha a Roombir IA; cada número contra el
 * período anterior; lo que mide, en órbita; y el CTA.
 */

type P = TourProps<"reports">;

const WIDE: Pose = { x: 640, y: 360, z: 1 };
const R0: Rect = { x: 0, y: 0, w: 0, h: 0 };

/* ========================================================= 1 · hero ===== */

function Hero({ lt, v }: P) {
  const portrait = useKitPortrait();
  const kpis = v.base.reports.kpis;
  return (
    <HeroTitle lt={lt} title={v.page.hero.title} dur={5000} visualAt={1200} pScale={1.25}>
      {/* En vertical, 2 × 2 (ver `pScale`). */}
      <div className={t.bigRow} style={portrait ? { flexWrap: "wrap", width: 540, justifyContent: "center" } : { transform: "scale(1.05)", transformOrigin: "50% 0" }}>
        {kpis.map((m, i) => (
          <div key={m.label} className={t.big} style={lift(lt, 1300 + i * 140, 20, 8)}>
            <div className={t.bigLabel}>{m.label}</div>
            <div className={t.bigValue}>
              <Scramble text={m.value} lt={lt} at={1500 + i * 140} dur={700} />
            </div>
            <div className={t.bigHint}>{m.hint || " "}</div>
          </div>
        ))}
      </div>
    </HeroTitle>
  );
}

/* ===================================================== 2 · recorrido ==== */

/**
 * 1. Cómo está corriendo la propiedad: la cámara lee las cuatro métricas.
 * 2. Lo ya reservado noche por noche: la curva de los próximos 30 días.
 * 3. Si no está en el informe, se pregunta: el chat de Roombir IA contesta
 *    qué canal cancela más, con su bloque.
 */
function plan(x: P["v"]["x"]) {
  const pan = 1400;
  const end1 = pan + 4400;
  const chart = end1;
  const end2 = chart + 3200;
  const chatIn = end2;
  const ask = chatIn + 500;
  const s1 = ask + 700;
  const s2 = s1 + 600;
  const answer = s2 + 700;
  const block = answer + x.answer.length * STREAM_MS + 300;
  const end = block + 3600;
  return { cap: [400, end1, end2], pan, end1, chart, end2, chatIn, ask, s1, s2, answer, block, end, duration: end + 450 };
}

function Tour({ lt, v }: P) {
  const x = v.x;
  const b = v.base;
  const Pl = useMemo(() => plan(x), [x]);
  const appRef = useRef<HTMLDivElement>(null);
  const screen: "rep" | "chat" = lt < Pl.chatIn ? "rep" : "chat";
  const R = useOffsets(appRef, ['[class*="metricsRow"]', '[class*="chartCard"]'], [screen]);
  const r = (sel: string, fb: Partial<Rect>) => R[sel] ?? { ...R0, ...fb };
  const row = r('[class*="metricsRow"]', { x: 90, y: 190, w: 860, h: 110 });
  const chart = r('[class*="chartCard"]', { x: 90, y: 320, w: 860, h: 220 });

  const moves: Move[] = [
    { t: 700, d: 900, to: { x: APP.x + row.x + row.w * 0.34, y: APP.y + row.y + row.h / 2, z: 1.45 } },
    { t: Pl.pan + 600, d: 3200, to: { x: APP.x + row.x + row.w * 0.6, y: APP.y + row.y + row.h / 2, z: 1.45 } },
    { t: Pl.chart - 300, d: 1000, to: { x: APP.x + chart.x + chart.w / 2, y: APP.y + chart.y + chart.h / 2, z: 1.3 } },
    { t: Pl.end2 - 600, d: 700, to: WIDE },
    { t: Pl.ask - 100, d: 900, to: { x: 700, y: 470, z: 1.4 } },
    { t: Pl.block - 100, d: 900, to: { x: 700, y: 420, z: 1.3 } },
  ];
  const { style: camStyle } = cameraStyle(moves, lt, { x: 640, y: 360, z: 0.97 });

  const steps = x.steps
    .map((s, i) => ({ ...s, at: i === 0 ? Pl.s1 : Pl.s2 }))
    .filter((s) => lt >= s.at)
    .map((s) => ({ label: s.label, tool: s.tool, running: lt < s.at + 450 }));
  const answer = lt >= Pl.answer ? x.answer.slice(0, Math.ceil((lt - Pl.answer) / STREAM_MS)) : "";
  const streaming = lt >= Pl.answer && answer.length < x.answer.length;
  const blockOn = lt >= Pl.block;
  const kpis = b.ui.reports.kpis.map((m, i) => ({ ...m, value: <Scramble key={m.label} text={m.value} lt={lt} at={600 + i * 160} dur={600} /> }));

  return (
    <TourStage
      lt={lt}
      dur={Pl.duration}
      camStyle={camStyle}
      appRef={appRef}
      captions={x.captions}
      capAt={Pl.cap}
      app={
        <PmsShell active={screen === "rep" ? "reports" : "ia"} labels={b.ui.shell} width={APP.w} height={APP.h} round>
          <div style={{ position: "absolute", inset: 0 }}>
            <Fade lt={lt} a={0} b={Pl.chatIn}>
              <Reports l={{ ...b.ui.reports, kpis }} />
            </Fade>
            <Fade lt={lt} a={Pl.chatIn}>
              <ChatPage
                v={b}
                ask={x.ask}
                showAsk={lt >= Pl.ask}
                steps={steps}
                answer={answer}
                streaming={streaming}
                thinking={lt >= Pl.ask && lt < Pl.answer}
                block={blockOn ? <KpiBlock title={x.block.title} meta={x.block.meta} kpis={x.block.kpis} block /> : undefined}
              />
            </Fade>
          </div>
        </PmsShell>
      }
    />
  );
}

/* ===================================================== 3 · comparar ===== */

const CO = { title: 100, em: 650, cards: 1000, lag: 180, prev: 2200, out: 6550, end: 7000 };

function Compare({ lt, v }: P) {
  // Vertical: las cuatro tarjetas en 2 × 2.
  const portrait = useKitPortrait();
  const c = v.x.compare;
  const q = smooth(seg(lt, CO.out, CO.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / CO.end));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 90 }}>
          <h2 className={k.display}>
            <GLine text={v.page.period.title} lt={lt} at={CO.title} emAt={CO.em} />
          </h2>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, top: portrait ? 250 : 300, display: "flex", justifyContent: "center" }}>
          <div className={t.bigRow} style={portrait ? { gap: 18, flexWrap: "wrap", width: 560, justifyContent: "center" } : { gap: 18 }}>
            {c.items.map((m, i) => {
              const at = CO.cards + i * CO.lag;
              const pv = easeOutExpo(seg(lt, CO.prev + i * CO.lag, CO.prev + i * CO.lag + 500));
              return (
                <div key={m.label} className={t.big} style={{ ...lift(lt, at, 24, 10), width: 262 }}>
                  <div className={t.bigLabel}>{m.label}</div>
                  <div className={t.bigValue}>
                    <Scramble text={m.now} lt={lt} at={at + 200} dur={650} />
                  </div>
                  <div className={t.bigHint} style={{ opacity: pv.toFixed(3) }}>
                    <span className={[t.delta, m.delta.startsWith("−") || m.delta.startsWith("-") ? t.deltaDown : ""].join(" ")}>{m.delta}</span>
                    {c.vs} · {m.prev}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ====================================================== 4 · métricas ==== */

/**
 * Lo que mide, como un tablero: cada métrica en su renglón con una barra que
 * crece, y la que se explica (la de la página) resaltada; al costado, su
 * tarjeta con el número y la explicación en el mismo renglón.
 */
const ME = { rows: 900, rowLag: 110, grow: 700, card: 1400, out: 6350, end: 6800 };
const BARS = [0.78, 0.62, 0.7, 0.55, 0.18, 0.66, 0.84, 0.47, 0.58, 0.72, 0.6, 0.5];

function Metrics({ lt, v }: P) {
  // Vertical: el tablero arriba y la tarjeta de la métrica debajo.
  const portrait = useKitPortrait();
  // La métrica que se explica, con su explicación (la de la página).
  const m = v.page.metrics.items[1];
  const chips = v.x.chips;
  // Se resaltan los renglones que nombra la tarjeta ("ADR y RevPAR" → ADR y RevPAR).
  const named = m.title.toLowerCase().split(/[^\p{L}\p{N}]+/u);
  const hi = (c: string) => named.includes(c.toLowerCase());
  const q = smooth(seg(lt, ME.out, ME.end));
  const cam = 1 + 0.03 * easeInOut(clamp01(lt / ME.end));
  const card = easeOutExpo(seg(lt, ME.card, ME.card + 900));
  const panel = easeOutExpo(seg(lt, ME.rows - 300, ME.rows + 500));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <div className={sc.pastelTop} aria-hidden />
      <div className={sc.layer} style={{ transform: `scale(${cam.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={k.headTop} style={{ top: 50 }}>
          <h2 className={k.displaySm}>
            <GLine text={v.page.metrics.title} lt={lt} at={100} emAt={650} />
          </h2>
          <p className={k.sub} style={lift(lt, 900, 14, 6)}>
            {v.page.metrics.lead}
          </p>
        </div>
        <div className={t.metricRows} style={{ left: portrait ? 320 : 90, top: portrait ? 230 : 250, width: 640, gap: 6, opacity: clamp01(panel * 1.4).toFixed(3), transform: `translate3d(0, ${((1 - panel) * 30).toFixed(1)}px, 0)` }}>
          {chips.map((c, i) => {
            const at = ME.rows + i * ME.rowLag;
            const g = easeOutExpo(seg(lt, at + 150, at + 150 + ME.grow));
            return (
              <div key={c} className={[t.metricRow, hi(c) && lt >= ME.card ? t.metricRowOn : ""].join(" ")} style={{ height: 26, ...lift(lt, at, 8, 4) }}>
                <span>{c}</span>
                <span className={t.metricBar}>
                  <i style={{ width: `${(BARS[i % BARS.length] * g * 100).toFixed(1)}%` }} />
                </span>
              </div>
            );
          })}
        </div>
        <div style={{ position: "absolute", left: portrait ? 450 : 790, top: portrait ? 640 : 300, opacity: clamp01(card * 1.4).toFixed(3), transform: `translate3d(${((1 - card) * 60).toFixed(1)}px, 0, 0)`, filter: card < 0.98 ? `blur(${((1 - card) * 10).toFixed(1)}px)` : undefined }}>
          <div className={t.big} style={{ width: 380 }}>
            <div className={t.bigLabel}>{m.title}</div>
            <div className={t.bigValue}>{v.base.reports.kpis[2].value}</div>
            <div className={t.bigHint} style={{ display: "block", lineHeight: 1.4 }}>
              {m.desc}
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

export const REPORTS = {
  beats: (v: P["v"]) =>
    layKitBeats([
      { id: "hero", dur: 5000, enter: "fade", enterDur: 400 },
      { id: "tour", dur: plan(v.x).duration },
      { id: "compare", dur: CO.end },
      { id: "metrics", dur: 6800 },
      { id: "end", dur: 5600 },
    ]),
  scenes: { hero: Hero, tour: Tour, compare: Compare, metrics: Metrics, end: End },
  posterAt: ["tour", 2600] as [string, number],
  /** Anclajes de la voz: cuándo aparece en cada escena lo que dice cada bloque de locuciones/ (ver KitEmbed). */
  /** Zoom de cada escena en el corte vertical (`?view=mobile`, ver video-kit/portrait.tsx); sin dato, 1,3. */
  pzoom: {tour: 1.1,compare: 1.3,metrics: 1.3},
  anchors: (v: P["v"]): Record<string, number[]> => ({ hero: [150], tour: [...plan(v.x).cap], compare: [CO.title], metrics: [100, 900], end: [150, 3350] }),
};
