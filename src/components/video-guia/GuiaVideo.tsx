"use client";

import { useMemo, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { LangLink } from "../video/HeroVideo";
import { clamp01, easeInOut, lerp, seg } from "../video/timeline";
import type { CursorKey } from "../video/fx";
import { Gradient, Mark } from "../video/fx";
import KitPlayer, { layKitBeats, type KitDict, type KitSceneProps } from "../video-kit/KitPlayer";
import { GLine, Pointer, StepCaptions, away, cameraStyle, lift, pointerAt, smooth, type Move } from "../video-kit/kit";
import { EndCard, Keys, Note } from "../video-kit/common";
import { ALL_SHOTS, CHAPTERS, INTRO, INTRO_DUR, OUTRO, OUTRO_DUR, VOZ, WIDE, guiaBeatsRaw, natDur, shotChain, stepCameraReal, stepDur, stepScale, titleDur, vozStarts, type GuiaChapter, type GuiaStep } from "./data";
import type { Clip, Track } from "../video/editor/model";
import type { Voiceover } from "@/lib/videoVo";
import sc from "../video/scenes.module.css";
import k from "../video-kit/kit.module.css";
import g from "./guia.module.css";

/**
 * La guía de Roombir (`/es/video/guia`): todas las herramientas, paso a paso,
 * sobre capturas reales de la cuenta demo. Cada capítulo es una portada y un
 * recorrido; el recorrido monta la captura en una ventana (el "mundo", en px de
 * la captura: 1920×1080) y la cámara, el puntero y las notas salen de `data.ts`.
 */

type D = KitDict;
type P = KitSceneProps<D>;

const SRC = (id: string) => `/video/guia/${id}.webp`;
const FADE = 520;

type Laid = { step: GuiaStep; start: number; dur: number };

function layChapter(ch: GuiaChapter) {
  let t = 0;
  const steps: Laid[] = ch.steps.map((s) => {
    const d = stepDur(s);
    const l = { step: s, start: t, dur: d };
    t += d;
    return l;
  });
  // La cámara del capítulo: la de cada paso (planos del guion + un plano por clic), corrida a su inicio.
  const moves: Move[] = steps.flatMap((l) => stepCameraReal(l.step).map((m) => ({ ...m, t: m.t + l.start })));
  return { steps, moves, dur: t };
}

const LAID = CHAPTERS.map((c) => ({ ch: c, ...layChapter(c) }));

/* ======================================================== portadas ====== */

function TitleCard({ lt, dur, eyebrow, title, sub, big = false }: { lt: number; dur: number; eyebrow: string; title: string; sub: string; big?: boolean }) {
  const q = smooth(seg(lt, dur - 450, dur));
  const drift = 1 + 0.03 * easeInOut(clamp01(lt / dur));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light />
      <div className={sc.layer} style={{ transform: `scale(${drift.toFixed(4)})`, ...away(q, 0.9, 12) }}>
        <div className={g.titleWrap}>
          <div className={g.eyebrow} style={lift(lt, 80, 16, 6)}>
            {eyebrow}
          </div>
          <h1 className={big ? k.displayXl : k.displayLg}>
            <GLine text={title} lt={lt} at={260} emAt={big ? 900 : 560} lag={90} />
          </h1>
          <p className={g.sub} style={lift(lt, big ? 1500 : 1050, 18, 8)}>
            {sub}
          </p>
        </div>
      </div>
      <Mark tone="ink" />
    </div>
  );
}

/* ======================================================= recorrido ====== */

/** Una captura dentro de la ventana; entra en fundido. */
function Shot({ id, op }: { id: string; op: number }) {
  if (op <= 0.001) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={g.shot} src={SRC(id)} alt="" draggable={false} style={{ opacity: op.toFixed(3) }} />;
}

function ChapterBody({ lt, laid }: { lt: number; laid: (typeof LAID)[number] }) {
  const { steps, moves, dur } = laid;
  const i = Math.max(0, steps.findIndex((l) => lt < l.start + l.dur));
  const cur = steps[i] ?? steps[steps.length - 1];
  const prev = i > 0 ? steps[i - 1] : null;
  const local = lt - cur.start;
  // Los tiempos del paso están escritos sobre su largo natural; el paso real dura lo que su voz.
  const ev = local / stepScale(cur.step);
  const { style: camStyle, toScreen } = cameraStyle(moves, lt, WIDE);

  // Capas de la ventana: la del paso anterior debajo mientras entra la nueva; la cadena (`swap`/`chain`) dentro del paso.
  const layers: ReactNode[] = [];
  const entering = smooth(seg(local, 0, FADE));
  const prevShot = prev ? prev.step.shot : null;
  if (prevShot && entering < 1) layers.push(<Shot key={`p-${prevShot}`} id={prevShot} op={1} />);
  const s = cur.step;
  const chain = shotChain(s);
  const ids = [...chain.map(([id]) => id), s.shot];
  const ops = ids.map((_, n) => (n === 0 ? (i === 0 ? 1 : entering) : smooth(seg(ev, chain[n - 1][1], chain[n - 1][1] + 380))));
  // Sólo desde la última capa ya opaca hacia arriba (las capturas pesan).
  let base = 0;
  ops.forEach((o, n) => n > 0 && o >= 1 && (base = n));
  for (let n = base; n < ids.length; n++) layers.push(<Shot key={`s${n}-${ids[n]}`} id={ids[n]} op={ops[n]} />);

  // El puntero: aparece antes de su primer punto y se va después del último.
  let pointer: ReactNode = null;
  if (s.ptr?.length) {
    const keys: CursorKey[] = s.ptr.map(([t, x, y, click]) => ({ at: t, x, y, click: !!click, down: !!click, up: false }));
    // Suelta el clic 160 ms después.
    const withUp: CursorKey[] = keys.flatMap((kk) => (kk.click ? [kk, { at: kk.at + 160, x: kk.x, y: kk.y, click: false, down: false, up: true }] : [kk]));
    const p = pointerAt(withUp, ev);
    const first = s.ptr[0][0];
    const last = s.ptr[s.ptr.length - 1][0];
    const op = clamp01(seg(ev, first - 300, first)) * (1 - seg(ev, last + 900, last + 1300));
    const scr = toScreen(p.x, p.y);
    pointer = <Pointer x={scr.x} y={scr.y} pressed={p.pressed} ripples={p.ripples} opacity={op} />;
  }

  // Las notas, en pantalla: la tarjeta del lado con más aire y la línea hasta el punto.
  const notes = (s.notes ?? []).map((n, j) => {
    const to = toScreen(n.to[0], n.to[1]);
    const W = 270;
    const left = to.x > 640 ? to.x - W - 90 : to.x + 90;
    const box = { x: Math.max(24, Math.min(1280 - W - 24, left)), y: Math.max(90, Math.min(560, to.y - 60)) };
    const out = n.out ?? natDur(s) - 350;
    return <Note key={j} lt={ev} at={n.at} out={out} box={box} to={to} title={n.title} text={n.text} width={W} />;
  });

  const keysP = s.keys ? clamp01(seg(ev, s.keys.at, s.keys.at + 300)) * (1 - seg(ev, s.keys.out, s.keys.out + 300)) : 0;
  const keysDown = s.keys ? ev > s.keys.at + 700 && ev < s.keys.at + 1100 : false;

  const inP = smooth(seg(lt, 0, 800));
  const q = smooth(seg(lt, dur - 450, dur));
  return (
    <div className={`${sc.scene} ${sc.lavender}`}>
      <Gradient lt={lt} light />
      <div
        className={sc.layer}
        style={{
          opacity: (clamp01(inP * 1.4) * (1 - q * q)).toFixed(3),
          transform: `translate3d(0, ${((1 - inP) * 50).toFixed(1)}px, 0) scale(${lerp(1, 0.9, q).toFixed(4)})`,
          filter: q > 0 ? `blur(${(q * 12).toFixed(2)}px)` : inP < 0.999 ? `blur(${((1 - inP) * 10).toFixed(2)}px)` : undefined,
        }}
      >
        <div className={sc.layer} style={camStyle}>
          <div className={g.window}>{layers}</div>
        </div>
        <div className={g.notes}>{notes}</div>
        {s.keys && <Keys keys={s.keys.keys} p={keysP} pressed={keysDown} x={640} y={600} />}
        {pointer}
      </div>
      <StepCaptions lt={lt} captions={steps.map((l) => l.step.cap)} at={steps.map((l) => l.start)} end={dur - 450} />
      <Mark tone="ink" />
    </div>
  );
}

/* ========================================================= montaje ====== */

const SCENES: Record<string, (p: P) => ReactNode> = {
  intro: ({ lt }) => <TitleCard lt={lt} dur={INTRO_DUR} eyebrow={INTRO.eyebrow} title={INTRO.title} sub={INTRO.sub} big />,
  outro: ({ lt }) => <EndCard lt={lt} cta={OUTRO.cta} tagline={OUTRO.tagline} />,
};
LAID.forEach((l, n) => {
  SCENES[`t-${l.ch.id}`] = ({ lt }) => <TitleCard lt={lt} dur={titleDur(l.ch)} eyebrow={`Capítulo ${n + 1}`} title={l.ch.title} sub={l.ch.sub} />;
  SCENES[`c-${l.ch.id}`] = ({ lt }) => <ChapterBody lt={lt} laid={l} />;
});


/**
 * La pista de voz: el mismo archivo recortado en sus bloques, cada uno donde
 * arranca su escena (+ `VOZ_LEAD`), con silencios entre medio. Sin música.
 */
function guiaVoiceover(): Voiceover {
  const starts = vozStarts();
  const clips: Clip[] = [];
  let at = 0;
  VOZ.blocks.forEach((b, i) => {
    const start = starts[i];
    if (start > at) clips.push({ clipId: `gap-${i}`, kind: "gap", src: "", name: "", dur: start - at, trim: 0, srcDur: 0 });
    clips.push({ clipId: `voz-${i}`, kind: "audio", src: VOZ.src, name: `Bloque ${i + 1}`, dur: b.dur, trim: b.at, srcDur: VOZ.srcDur });
    at = Math.max(at, start) + b.dur;
  });
  const track: Track = { trackId: "voz", name: "Voz", muted: false, volume: 1, clips };
  return { tracks: [track], scenes: {} };
}

export default function GuiaVideo({ locale, v, langs }: { locale: Locale; v: D; langs: LangLink[] }) {
  const beats = useMemo(() => layKitBeats(guiaBeatsRaw()), []);
  const vo = useMemo(() => guiaVoiceover(), []);
  const chapters = useMemo(() => {
    const m: Record<string, string> = { intro: "Introducción", outro: "Cierre" };
    LAID.forEach((l, n) => (m[`t-${l.ch.id}`] = `${n + 1}. ${l.ch.title.replace(/\*/g, "")}`));
    return m;
  }, []);
  return (
    <>
      <KitPlayer locale={locale} v={v} langs={langs} beats={beats} scenes={SCENES} posterAt={["intro", 3200]} chapters={chapters} vo={vo} />
      {/* Precarga: las capturas pesan; sin esto, la primera vez que aparece cada una llega tarde. */}
      <div className={g.preload} aria-hidden>
        {ALL_SHOTS.map((id) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={id} src={SRC(id)} alt="" decoding="async" />
        ))}
      </div>
    </>
  );
}

