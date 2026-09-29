"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import type { Locale } from "@/i18n/config";
import { useStageFit } from "../video/VideoStage";
import { clamp01, easeOut, seg } from "../video/timeline";
import type { LangLink } from "../video/HeroVideo";
import { IA_SCENES } from "./scenes";
import { buildIaBeats, type IaBeat, type IaVideoDict } from "./timeline";
import KitEmbed, { scaleBeats } from "../video-kit/KitEmbed";
import { useVoAudio } from "../video/editor/useVoAudio";
import type { Voiceover } from "@/lib/videoVo";
import { PORTRAIT_ZOOM_DEFAULT, PortraitBox, portraitZoomStyle } from "../video-kit/portrait";

/** Zoom de cada escena de IA en vertical (`?view=mobile`): el tutorial va a 1,25 (su cámara ya encuadra). */
const IA_PZOOM: Record<string, number> = { hinge: 1.15, chat: 1.1, demo: 1.1, dossier: 0.95, stats: 1.0 };
import { useViewParam, type Orient } from "../video/orientation";
import { iaVoiceAnchors } from "./scenes";
import s from "../video/HeroVideo.module.css";

/**
 * El reproductor del video de Roombir IA.
 *
 * Es el mismo reproductor que el de portada (`video/HeroVideo.tsx`) —póster,
 * play/pausa, barra arrastrable con capítulos, idioma, pantalla completa,
 * teclado y la sonda `window.__heroVideo` para verificar con Playwright— pero
 * sin la voz ni la música: este video va mudo. Se copió en vez de generalizar
 * el otro para no tocar una línea del video de portada.
 *
 * Parámetros: `?t=12.5` arranca en ese segundo, `?autoplay=1`, `?loop=1`.
 */

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

function sceneStyle(b: IaBeat, t: number): CSSProperties {
  if (b.enter === "fade" && t < b.start + b.enterDur) {
    const p = easeOut(seg(t, b.start, b.start + b.enterDur));
    return { opacity: p, filter: `blur(${((1 - p) * 10).toFixed(2)}px)` };
  }
  return {};
}

/** El escenario: 1280×720, escalado entero, con las escenas premontadas. */
function Stage({ beats, t, epoch, paused, v, locale, fit, orient = "landscape" }: { beats: IaBeat[]; t: number; epoch: number; paused: boolean; v: IaVideoDict; locale: Locale; fit: { scale: number; x: number; y: number }; orient?: Orient }) {
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
        const Scene = IA_SCENES[b.id];
        return (
          <div key={`${b.id}-${epoch}`} className={s.sceneWrap} style={{ zIndex: i * 2, ...sceneStyle(b, t), ...(orient === "portrait" ? portraitZoomStyle(IA_PZOOM[b.id] ?? PORTRAIT_ZOOM_DEFAULT) : null) }}>
            <Scene lt={(t - b.start) / (b.escala ?? 1)} v={v} locale={locale} paused={paused} />
          </div>
        );
      })}
      </PortraitBox>
    </div>
  );
}

export default function IaPlayer({ locale, v, langs, vo }: { locale: Locale; v: IaVideoDict; langs: LangLink[]; /** El montaje de voz y música (Marketing › Videos del panel), leído en el servidor. */ vo?: Voiceover | null }) {
  const natural = useMemo(() => buildIaBeats(v), [v]);
  // Como los videos de producto: las escenas se estiran como en el montaje y las pistas suenan con el reloj.
  const beats = useMemo(() => (vo?.scenes && Object.keys(vo.scenes).length ? scaleBeats(natural, vo.scenes) : natural), [natural, vo]);
  const tracks = useMemo(() => vo?.tracks ?? [], [vo]);
  const versiones = useMemo(() => new Map<string, number | null>(), []);
  const { sync, stopAll, unlock } = useVoAudio(tracks, versiones);
  const embedRef = useRef(false);
  const anchors = useMemo(() => iaVoiceAnchors(v), [v]);
  // `?embed=1`: la superficie que maneja la mesa de montaje del panel (ver KitEmbed).
  const [embed, setEmbed] = useState(false);
  useEffect(() => setEmbed(new URLSearchParams(window.location.search).get("embed") === "1"), []);
  embedRef.current = embed;
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
  const tRef = useRef(0);
  const playingRef = useRef(false);
  const loopRef = useRef(false);
  const resumeAfterScrub = useRef(false);
  const startedRef = useRef(false);

  const markStarted = useCallback(() => {
    startedRef.current = true;
    setStarted(true);
  }, []);

  // El póster: la demostración con el primer pedido ya resuelto.
  const posterT = useMemo(() => {
    const b = beats.find((x) => x.id === "demo");
    return b ? b.start + 5200 : 0;
  }, [beats]);

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
      // El audio sigue al reloj; antes del primer play (y en el embed, donde suena el panel) no suena.
      sync(tRef.current, playingRef.current && !embedRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total, sync]);

  // `?view=mobile`: el corte vertical (9:16), con los mismos tiempos (ver video-kit/portrait.tsx).
  const orient: Orient = useViewParam() ?? "landscape";
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

  if (embed) return <KitEmbed beats={natural} anchors={anchors} render={(p) => <Stage beats={p.beats} t={p.t} epoch={p.epoch} paused={p.paused} v={v} locale={locale} fit={p.fit} />} />;

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
        <Stage beats={beats} t={shown} epoch={epoch} paused={started && !playing} v={v} locale={locale} fit={fit} orient={orient} />

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
