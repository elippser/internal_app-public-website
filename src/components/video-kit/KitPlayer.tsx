"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { useStageFit } from "../video/VideoStage";
import { clamp01, easeOut, seg } from "../video/timeline";
import type { LangLink } from "../video/HeroVideo";
import KitEmbed, { scaleBeats, type VoiceAnchors } from "./KitEmbed";
import { PORTRAIT_ZOOM_DEFAULT, PortraitBox, portraitZoomStyle } from "./portrait";
import { useViewParam, type Orient } from "../video/orientation";
import { useVoAudio } from "../video/editor/useVoAudio";
import type { Voiceover } from "@/lib/videoVo";
import s from "../video/HeroVideo.module.css";

/**
 * El reproductor genérico de los videos de producto: el mismo del video de
 * portada (`video/HeroVideo.tsx`) y del de Roombir IA (`video-ia/IaPlayer.tsx`)
 * —póster, play/pausa, barra con capítulos, idioma, pantalla completa,
 * teclado y la sonda `window.__heroVideo` para Playwright—, mudo, y con los
 * beats y las escenas por props. Cada video nuevo arma su lista de beats y su
 * mapa de escenas y monta esto.
 *
 * Parámetros: `?t=12.5` arranca en ese segundo, `?autoplay=1`, `?loop=1`.
 */

export type KitBeat = {
  id: string;
  start: number;
  end: number;
  preroll: number;
  until: number;
  enter: "fade" | "none";
  enterDur: number;
  /** Cuánto se estiró la escena en el montaje (1 = natural). La escena ve su tiempo dividido por esto. */
  escala?: number;
};

export type KitSceneProps<D> = { lt: number; v: D; locale: Locale; paused: boolean };
export type KitDict = { hud: import("@/i18n/dict/es").Dictionary["video"]["hud"]; meta: { description: string } };

/** Reparte una lista de beats uno detrás del otro. */
export function layKitBeats(raw: { id: string; dur: number; enter?: "fade" | "none"; enterDur?: number; preroll?: number; tail?: number }[]): KitBeat[] {
  let cursor = 0;
  const beats = raw.map((b) => {
    const beat: KitBeat = { id: b.id, start: cursor, end: cursor + b.dur, until: cursor + b.dur + (b.tail ?? 0), preroll: b.preroll ?? 0, enter: b.enter ?? "none", enterDur: b.enterDur ?? 0 };
    cursor += b.dur;
    return beat;
  });
  beats.forEach((b, i) => {
    const next = beats[i + 1];
    if (next) b.until = Math.max(b.until, b.end + next.enterDur);
  });
  return beats;
}

function clock(ms: number): string {
  const secs = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="6" y="5" width="4" height="14" rx="1.2" />
      <rect x="14" y="5" width="4" height="14" rx="1.2" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

function sceneStyle(b: KitBeat, t: number): CSSProperties {
  if (b.enter === "fade" && t < b.start + b.enterDur) {
    const p = easeOut(seg(t, b.start, b.start + b.enterDur));
    return { opacity: p, filter: `blur(${((1 - p) * 10).toFixed(2)}px)` };
  }
  return {};
}

/** El escenario: 1280×720, escalado entero, con las escenas premontadas. */
function Stage<D extends KitDict>({ beats, scenes, t, epoch, paused, v, locale, fit, orient = "landscape", pzoom }: { beats: KitBeat[]; scenes: Record<string, (p: KitSceneProps<D>) => ReactNode>; t: number; epoch: number; paused: boolean; v: D; locale: Locale; fit: { scale: number; x: number; y: number }; orient?: Orient; /** Zoom de cada escena en vertical (ver video-kit/portrait.tsx). */ pzoom?: Record<string, number> }) {
  const ref = useRef<HTMLDivElement>(null);
  // Tras un salto, las animaciones CSS finitas de la UI real quedan en su
  // estado final (arrancan al montar y en pausa se congelarían en el primero).
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    for (const a of el.getAnimations({ subtree: true })) {
      if (a.effect?.getComputedTiming().endTime === Infinity) continue;
      try {
        a.finish();
      } catch {
        /* sin fin declarado */
      }
    }
  }, [epoch]);
  return (
    <div ref={ref} className={s.stage} style={{ transform: `translate(${fit.x}px, ${fit.y}px) scale(${fit.scale})` }} aria-label={v.meta.description} role="img" data-stage="" data-orient={orient}>
      <PortraitBox orient={orient}>
      {beats.map((b, i) => {
        if (t < b.start - b.preroll || t >= b.until) return null;
        const Scene = scenes[b.id];
        return (
          <div key={`${b.id}-${epoch}`} className={s.sceneWrap} style={{ zIndex: i * 2, ...sceneStyle(b, t), ...(orient === "portrait" ? portraitZoomStyle(pzoom?.[b.id] ?? PORTRAIT_ZOOM_DEFAULT) : null) }}>
            <Scene lt={(t - b.start) / (b.escala ?? 1)} v={v} locale={locale} paused={paused} />
          </div>
        );
      })}
      </PortraitBox>
    </div>
  );
}

export default function KitPlayer<D extends KitDict>({ locale, v, langs, beats: natural, scenes, posterAt, anchors, vo, pzoom }: { locale: Locale; v: D; langs: LangLink[]; beats: KitBeat[]; scenes: Record<string, (p: KitSceneProps<D>) => ReactNode>; /** El cuadro del póster: [id de escena, ms dentro de ella]. */ posterAt: [string, number]; /** Anclajes de la voz (ver KitEmbed). */ anchors?: VoiceAnchors; /** Zoom de cada escena en vertical (`?view=mobile`). */ pzoom?: Record<string, number>; /** El montaje de voz y música de este video e idioma, leído en el servidor (`getVideoVoiceover`). */ vo?: Voiceover | null }) {
  // `?embed=1`: la superficie que maneja la mesa de montaje del panel (ver KitEmbed).
  const [embed, setEmbed] = useState(false);
  // `?view=mobile`: el corte vertical (9:16), con los mismos tiempos (ver video-kit/portrait.tsx).
  const orient: Orient = useViewParam() ?? "landscape";
  useEffect(() => setEmbed(new URLSearchParams(window.location.search).get("embed") === "1"), []);
  // Como en la portada: las escenas se estiran como en el montaje y las pistas suenan siguiendo el reloj.
  // En el embed no: ahí el reloj, el audio y las escalas los lleva el panel.
  const beats = useMemo(() => (vo?.scenes && Object.keys(vo.scenes).length ? scaleBeats(natural, vo.scenes) : natural), [natural, vo]);
  const tracks = useMemo(() => vo?.tracks ?? [], [vo]);
  const versiones = useMemo(() => new Map<string, number | null>(), []);
  const { sync, stopAll, unlock } = useVoAudio(tracks, versiones);
  const total = beats[beats.length - 1].end;

  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [awake, setAwake] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const playerRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef(false);
  embedRef.current = embed;
  const tRef = useRef(0);
  const playingRef = useRef(false);
  const loopRef = useRef(false);
  const resumeAfterScrub = useRef(false);
  const startedRef = useRef(false);

  const markStarted = useCallback(() => {
    startedRef.current = true;
    setStarted(true);
  }, []);

  const posterT = useMemo(() => {
    const b = beats.find((x) => x.id === posterAt[0]);
    return b ? b.start + posterAt[1] : 0;
  }, [beats, posterAt]);

  const jump = useCallback(
    (ms: number, remount = true) => {
      const next = Math.max(0, Math.min(total - 1, ms));
      tRef.current = next;
      setT(next);
      setEnded(false);
      if (remount) setEpoch((e) => e + 1);
    },
    [total],
  );

  const setPlay = useCallback(
    (on: boolean) => {
      // Dentro del gesto de play: autoriza los audios (Safari, Brave y los teléfonos bloquean un play() que sale del reloj).
      if (on) unlock();
      if (on) {
        const first = !startedRef.current;
        markStarted();
        if (first || tRef.current >= total - 30) {
          tRef.current = 0;
          setT(0);
          setEpoch((e) => e + 1);
        }
        setEnded(false);
      }
      if (!on) stopAll();
      playingRef.current = on;
      setPlaying(on);
    },
    [total, markStarted, stopAll, unlock],
  );

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const start = Number(q.get("t"));
    if (Number.isFinite(start) && start > 0) {
      markStarted();
      jump(start * 1000);
    }
    loopRef.current = q.get("loop") === "1";
    if (q.get("autoplay") === "1") setPlay(true);
  }, [jump, setPlay, markStarted]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      if (playingRef.current) {
        let next = tRef.current + dt;
        if (next >= total) {
          if (loopRef.current) {
            next = next % total;
            setEpoch((e) => e + 1);
          } else {
            next = total - 1;
            playingRef.current = false;
            setPlaying(false);
            setEnded(true);
          }
        }
        tRef.current = next;
        setT(next);
      }
      // El audio sigue al reloj del video; antes del primer play (y en el embed) no suena.
      sync(tRef.current, playingRef.current && !embedRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total, sync]);

  const fit = useStageFit(playerRef, orient);

  const toggleFullscreen = useCallback(() => {
    const el = playerRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === playerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const beatIndexAt = useCallback((ms: number) => Math.max(0, beats.findIndex((b) => ms >= b.start && ms < b.end)), [beats]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (e.key === " " && target?.closest("button, a")) return;
      if (e.key === " " || e.key === "k" || e.key === "K") {
        e.preventDefault();
        setPlay(!playingRef.current);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "r" || e.key === "R") {
        jump(0);
        setPlay(true);
      } else if (e.key === "ArrowRight") {
        const i = beatIndexAt(tRef.current);
        markStarted();
        jump(beats[Math.min(beats.length - 1, i + 1)].start);
      } else if (e.key === "ArrowLeft") {
        const i = beatIndexAt(tRef.current);
        const b = beats[i];
        markStarted();
        jump(tRef.current - b.start > 600 ? b.start : beats[Math.max(0, i - 1)].start);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [beats, beatIndexAt, jump, setPlay, toggleFullscreen, markStarted]);

  const wakeTimer = useRef(0);
  const wake = useCallback(() => {
    setAwake(true);
    window.clearTimeout(wakeTimer.current);
    wakeTimer.current = window.setTimeout(() => setAwake(false), 2200);
  }, []);
  useEffect(() => {
    wake();
    window.addEventListener("keydown", wake);
    return () => {
      window.clearTimeout(wakeTimer.current);
      window.removeEventListener("keydown", wake);
    };
  }, [wake]);

  // La sonda para Playwright: el mismo nombre que el de portada, así los
  // scripts de captura sirven para los dos.
  useEffect(() => {
    const w = window as unknown as { __heroVideo?: unknown };
    w.__heroVideo = {
      total,
      beats: beats.map((b) => ({ id: b.id, start: b.start, end: b.end })),
      seek: (ms: number) => {
        markStarted();
        jump(ms);
      },
      play: () => setPlay(true),
      pause: () => setPlay(false),
      now: () => tRef.current,
      // Para exportar a MP4 cuadro por cuadro: mueve el reloj SIN remontar las escenas y resuelve cuando el
      // cuadro ya está en el DOM (dos cuadros de pintado). Con `seek` cada cuadro remontaba todo.
      frame: (ms: number) =>
        new Promise<void>((resolve) => {
          markStarted();
          const next = Math.max(0, Math.min(total - 1, ms));
          tRef.current = next;
          setT(next);
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        }),
    };
  }, [beats, total, jump, setPlay, markStarted]);

  const msFromPointer = (e: ReactPointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return clamp01((e.clientX - r.left) / r.width) * total;
  };
  const onScrubStart = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    resumeAfterScrub.current = playingRef.current;
    playingRef.current = false;
    setPlaying(false);
    setScrubbing(true);
    markStarted();
    jump(msFromPointer(e), false);
  };
  const onScrubMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    jump(msFromPointer(e), false);
  };
  const onScrubEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    setScrubbing(false);
    jump(msFromPointer(e), true);
    if (resumeAfterScrub.current) setPlay(true);
  };

  const active = beatIndexAt(t);
  const progress = t / total;
  const controlsOn = !playing || awake || scrubbing;
  const shown = started ? t : posterT;
  const hud = v.hud;

  if (embed) return <KitEmbed beats={natural} anchors={anchors} render={(p) => <Stage beats={p.beats} scenes={scenes} t={p.t} epoch={p.epoch} paused={p.paused} v={v} locale={locale} fit={p.fit} />} />;

  return (
    <div className={s.page} data-page="video">
      <div
        ref={playerRef}
        className={[s.player, started && !playing ? s.paused : "", controlsOn ? "" : s.idle, fullscreen ? s.isFullscreen : ""].join(" ")}
        data-orient={orient}
        // El rótulo de los pasos se acomoda a la barra: arriba de ella si está, abajo si se ocultó.
        data-controls={controlsOn ? "on" : "off"}
        onPointerMove={wake}
        onPointerDown={wake}
      >
        <Stage beats={beats} scenes={scenes} t={shown} epoch={epoch} paused={started && !playing} v={v} locale={locale} fit={fit} orient={orient} pzoom={pzoom} />

        <div className={s.surface} onClick={() => setPlay(!playingRef.current)} onDoubleClick={toggleFullscreen} aria-hidden />

        {!started && (
          <div className={s.poster}>
            <button type="button" className={s.bigPlay} onClick={() => setPlay(true)} aria-label={hud.play}>
              <PlayIcon />
            </button>
            <span className={s.posterMeta}>
              {hud.play} · {clock(total)}
            </span>
          </div>
        )}

        {ended && (
          <div className={s.endCard}>
            <button
              type="button"
              className={s.replayPill}
              onClick={() => {
                jump(0);
                setPlay(true);
              }}
            >
              <RestartIcon />
              {hud.replay}
            </button>
          </div>
        )}

        {started && (
          <div className={[s.controls, controlsOn ? s.controlsOn : ""].join(" ")}>
            <div
              className={[s.track, scrubbing ? s.trackActive : ""].join(" ")}
              role="slider"
              aria-label={hud.scene}
              aria-valuemin={0}
              aria-valuemax={Math.round(total / 1000)}
              aria-valuenow={Math.round(t / 1000)}
              aria-valuetext={`${clock(t)} / ${clock(total)}`}
              tabIndex={0}
              onPointerDown={onScrubStart}
              onPointerMove={onScrubMove}
              onPointerUp={onScrubEnd}
              onPointerCancel={onScrubEnd}
            >
              <div className={s.trackRail}>
                <i className={s.trackFill} style={{ transform: `scaleX(${progress})` }} />
                {beats.slice(1).map((b) => (
                  <i key={b.id} className={s.chapter} style={{ left: `${(b.start / total) * 100}%` }} />
                ))}
              </div>
              <i className={s.thumb} style={{ left: `${progress * 100}%` }} />
            </div>

            <div className={s.row}>
              <button type="button" className={s.ctrlBtn} onClick={() => setPlay(!playing)} aria-label={playing ? hud.pause : hud.play} title={playing ? hud.pause : hud.play}>
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                type="button"
                className={[s.ctrlBtn, s.restartBtn].join(" ")}
                onClick={() => {
                  jump(0);
                  setPlay(true);
                }}
                aria-label={hud.restart}
                title={hud.restart}
              >
                <RestartIcon />
              </button>
              <span className={s.time}>
                {clock(ended ? total : t)} <span className={s.timeTotal}>/ {clock(total)}</span>
              </span>
              <span className={s.chapterName}>
                {hud.scene} {active + 1}
              </span>
              <span className={s.spacer} />
              <nav className={s.langs} aria-label={hud.language}>
                {langs.map((l) => (
                  <a key={l.locale} href={l.href} className={[s.lang, l.locale === locale ? s.langOn : ""].join(" ")} aria-current={l.locale === locale ? "page" : undefined}>
                    {l.short}
                  </a>
                ))}
              </nav>
              <button type="button" className={s.ctrlBtn} onClick={toggleFullscreen} aria-label={fullscreen ? hud.exitFullscreen : hud.fullscreen} title={fullscreen ? hud.exitFullscreen : hud.fullscreen}>
                {fullscreen ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
