"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import { SCENES } from "./scenes";
import { buildBeats, clamp01, easeIn, easeInOut, easeOut, easeOutQuint, planChat, seg, type Beat } from "./timeline";
import s from "./HeroVideo.module.css";

/**
 * El video de portada de roombir: motion graphics sobre la UI real, servido
 * como un reproductor de video en la página.
 *
 * Dos actos (ver `video-spec.md` en la raíz). En el primero se ven las
 * pantallas: reserva, check-in, estadía y cierre, operadas por un cursor. En
 * el segundo, el mismo flujo pedido en el chat de Roombir IA, con la pantalla
 * de atrás cambiando a medida que el agente responde. Dura un minuto justo.
 *
 * Este archivo es el reproductor: el reloj, las transiciones entre escenas y
 * los controles. Las escenas viven en `scenes.tsx`; el reparto del tiempo en
 * `timeline.ts`.
 */

type VideoDict = Dictionary["video"];
type VignetteDict = Dictionary["vignettes"];

export type LangLink = { locale: Locale; short: string; href: string };

const STAGE_W = 1280;
const STAGE_H = 720;

/** 21045 → "0:21". */
function clock(ms: number): string {
  const secs = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;
}

/**
 * Cómo entra y cómo sale cada escena. La que entra se dibuja por encima de
 * la anterior, que sigue montada hasta que la transición termina.
 */
function sceneStyle(b: Beat, next: Beat | undefined, t: number): CSSProperties {
  const style: CSSProperties = {};
  if (t < b.start + b.enterDur) {
    if (b.enter === "fade") {
      const p = easeOut(seg(t, b.start, b.start + b.enterDur));
      style.opacity = p;
      style.filter = `blur(${((1 - p) * 10).toFixed(2)}px)`;
      style.transform = `scale(${(1.02 - 0.02 * p).toFixed(4)})`;
    } else if (b.enter === "circle") {
      const p = easeInOut(seg(t, b.start, b.start + b.enterDur));
      style.clipPath = `circle(${(p * 78).toFixed(2)}% at 50% 50%)`;
    } else if (b.enter === "push") {
      // Entra desde abajo con profundidad: sube, se agranda y se enfoca.
      const p = easeOutQuint(seg(t, b.start, b.start + b.enterDur));
      style.opacity = clamp01(p * 1.3);
      style.transform = `translate3d(0, ${((1 - p) * 7).toFixed(3)}%, 0) scale(${(0.955 + 0.045 * p).toFixed(4)})`;
      style.filter = `blur(${((1 - p) * 8).toFixed(2)}px)`;
    }
  }
  if (t > b.end) {
    if (b.exit === "circleOut") {
      const q = easeInOut(seg(t, b.end, b.end + (b.exitDur ?? 0)));
      style.clipPath = `circle(${((1 - q) * 78).toFixed(2)}% at 50% 50%)`;
    } else if (next?.enter === "push") {
      // La que se va cede el lugar: se aleja apenas y se desenfoca.
      const q = easeIn(seg(t, b.end, b.end + next.enterDur));
      style.opacity = 1 - q;
      style.transform = `translate3d(0, ${(-q * 4).toFixed(3)}%, 0) scale(${(1 + 0.03 * q).toFixed(4)})`;
      style.filter = `blur(${(q * 10).toFixed(2)}px)`;
    }
  }
  return style;
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

export default function HeroVideo({
  locale,
  v,
  vg,
  langs,
}: {
  locale: Locale;
  v: VideoDict;
  vg: VignetteDict;
  langs: LangLink[];
}) {
  const chatDuration = useMemo(() => planChat(v.chat).duration, [v.chat]);
  const beats = useMemo(() => buildBeats(chatDuration), [chatDuration]);
  const total = beats[beats.length - 1].end;

  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  // `started`: antes del primer play se muestra el póster con el botón grande.
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [box, setBox] = useState({ scale: 1, x: 0, y: 0 });
  const [awake, setAwake] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const playerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tRef = useRef(0);
  const playingRef = useRef(false);
  const loopRef = useRef(false);
  const resumeAfterScrub = useRef(false);
  const startedRef = useRef(false);
  // Al remontar por un salto, las animaciones CSS de las pantallas terminan de
  // una: si no, en pausa quedaban congeladas en su primer cuadro (el chat se
  // veía vacío) y al reproducir todo lo visible volvía a entrar. Arranca en
  // true para que el póster se vea entero.
  const finishRef = useRef(true);

  const markStarted = useCallback(() => {
    startedRef.current = true;
    setStarted(true);
  }, []);

  // El póster es un cuadro del propio video: el cierre del chat, con las dos
  // pantallas a la vista y el hueco entre ellas justo donde cae el play.
  const posterT = useMemo(() => {
    const chat = beats.find((b) => b.id === "chat");
    return chat ? chat.end - 120 : 0;
  }, [beats]);

  /**
   * Mover la cabeza de reproducción. Con `remount` las escenas vuelven a
   * montarse: sus animaciones CSS arrancan al montar y tienen que salir desde
   * el punto nuevo. Mientras se arrastra la barra no se remonta en cada
   * movimiento, sólo al soltar.
   */
  const jump = useCallback(
    (ms: number, remount = true) => {
      const next = Math.max(0, Math.min(total - 1, ms));
      tRef.current = next;
      setT(next);
      setEnded(false);
      if (remount) {
        finishRef.current = true;
        setEpoch((e) => e + 1);
      }
    },
    [total],
  );

  const setPlay = useCallback(
    (on: boolean) => {
      if (on) {
        const first = !startedRef.current;
        markStarted();
        // Primer play (desde el póster) o play sobre el final: desde el principio.
        if (first || tRef.current >= total - 30) {
          tRef.current = 0;
          setT(0);
          setEpoch((e) => e + 1);
        }
        setEnded(false);
      }
      playingRef.current = on;
      setPlaying(on);
    },
    [total, markStarted],
  );

  // Parámetros: ?t=segundos, ?autoplay=1, ?loop=1.
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

  // El reloj. `dt` va topeado: si la pestaña se atrasa, el video se estira en
  // vez de saltearse escenas.
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
            // Se queda en el último cuadro, en pausa, con "volver a ver".
            next = total - 1;
            playingRef.current = false;
            setPlaying(false);
            setEnded(true);
          }
        }
        tRef.current = next;
        setT(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total]);

  // Después de un salto (o al montar el póster), las animaciones finitas de lo
  // que quedó a la vista terminan en su estado final. Las infinitas (el giro
  // del orbe, los pulsos) siguen su curso.
  useLayoutEffect(() => {
    if (!finishRef.current) return;
    finishRef.current = false;
    const stage = stageRef.current;
    if (!stage) return;
    for (const a of stage.getAnimations({ subtree: true })) {
      if (a.effect?.getComputedTiming().endTime === Infinity) continue;
      try {
        a.finish();
      } catch {
        /* una animación sin fin declarado: se deja */
      }
    }
  }, [epoch]);

  // El escenario es de 1280×720 y se escala entero al tamaño del reproductor:
  // un video no reacomoda, se agranda o se achica.
  useEffect(() => {
    const el = playerRef.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      const scale = Math.min(width / STAGE_W, height / STAGE_H);
      setBox({ scale, x: (width - STAGE_W * scale) / 2, y: (height - STAGE_H * scale) / 2 });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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

  const beatIndexAt = useCallback(
    (ms: number) => Math.max(0, beats.findIndex((b) => ms >= b.start && ms < b.end)),
    [beats],
  );

  // Teclado, con las teclas de cualquier reproductor.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Espacio sobre un botón con foco ya lo activa el navegador.
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

  // Los controles se esconden solos a los 2 s sin mover el mouse (sólo mientras
  // se reproduce; en pausa quedan a la vista).
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

  // Para verificar desde Playwright sin tocar la UI.
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
    };
  }, [beats, total, jump, setPlay, markStarted]);

  // ------------------------------------------------ barra de tiempo
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
  // Antes del primer play se ve el cuadro del póster; después, el reloj.
  const shown = started ? t : posterT;

  return (
    <div className={s.page} data-page="video">
      <div
        ref={playerRef}
        className={[
          s.player,
          started && !playing ? s.paused : "",
          controlsOn ? "" : s.idle,
          fullscreen ? s.isFullscreen : "",
        ].join(" ")}
        onPointerMove={wake}
        onPointerDown={wake}
      >
        {/* ------------------------------------------------ el video */}
        <div
          ref={stageRef}
          className={s.stage}
          style={{ transform: `translate(${box.x}px, ${box.y}px) scale(${box.scale})` }}
          aria-label={v.meta.description}
          role="img"
          data-stage=""
        >
          {beats.map((b, i) => {
            if (shown < b.start || shown >= b.until) return null;
            const Scene = SCENES[b.id];
            // Las escenas piensan en su propio reloj; el chat puede ir apenas apretado.
            const lt = (shown - b.start) / b.factor;
            const z = b.exit && shown > b.end ? 40 : i * 2;
            return (
              <div
                key={`${b.id}-${epoch}`}
                className={s.sceneWrap}
                style={{ zIndex: z, ...sceneStyle(b, beats[i + 1], shown) }}
              >
                <Scene lt={lt} v={v} vg={vg} locale={locale} paused={started && !playing} />
              </div>
            );
          })}
        </div>

        {/* Superficie de click: un click reproduce o pausa, doble click pantalla
            completa. Es un atajo de mouse: fuera del árbol accesible, porque el
            teclado y los lectores ya tienen el botón de play de los controles. */}
        <div
          className={s.surface}
          onClick={() => setPlay(!playingRef.current)}
          onDoubleClick={toggleFullscreen}
          aria-hidden
        />

        {/* ------------------------------------------------ póster */}
        {!started && (
          <div className={s.poster}>
            <button type="button" className={s.bigPlay} onClick={() => setPlay(true)} aria-label={v.hud.play}>
              <PlayIcon />
            </button>
            <span className={s.posterMeta}>
              {v.hud.play} · {clock(total)}
            </span>
          </div>
        )}

        {/* ------------------------------------------------ final */}
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
              {v.hud.replay}
            </button>
          </div>
        )}

        {/* ------------------------------------------------ controles */}
        {started && (
          <div className={[s.controls, controlsOn ? s.controlsOn : ""].join(" ")}>
            <div
              className={[s.track, scrubbing ? s.trackActive : ""].join(" ")}
              role="slider"
              aria-label={v.hud.scene}
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
              <button
                type="button"
                className={s.ctrlBtn}
                onClick={() => setPlay(!playing)}
                aria-label={playing ? v.hud.pause : v.hud.play}
                title={playing ? v.hud.pause : v.hud.play}
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
              <button
                type="button"
                className={[s.ctrlBtn, s.restartBtn].join(" ")}
                onClick={() => {
                  jump(0);
                  setPlay(true);
                }}
                aria-label={v.hud.restart}
                title={v.hud.restart}
              >
                <RestartIcon />
              </button>
              <span className={s.time}>
                {clock(ended ? total : t)} <span className={s.timeTotal}>/ {clock(total)}</span>
              </span>
              <span className={s.chapterName}>
                {v.hud.scene} {active + 1}
              </span>

              <span className={s.spacer} />

              <nav className={s.langs} aria-label={v.hud.language}>
                {langs.map((l) => (
                  <a
                    key={l.locale}
                    href={l.href}
                    className={[s.lang, l.locale === locale ? s.langOn : ""].join(" ")}
                    aria-current={l.locale === locale ? "page" : undefined}
                  >
                    {l.short}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                className={s.ctrlBtn}
                onClick={toggleFullscreen}
                aria-label={fullscreen ? v.hud.exitFullscreen : v.hud.fullscreen}
                title={fullscreen ? v.hud.exitFullscreen : v.hud.fullscreen}
              >
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
