"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { Dictionary } from "@/i18n/dict/es";
import styles from "./VideoPlayer.module.css";

type T = Dictionary["common"]["video"];

/**
 * El reproductor del sitio (29-09-2026). Uno solo para todos los videos:
 * `SiteVideo` lo abre en su modal, y cualquier otra superficie puede
 * montarlo directo. Sin controles nativos: play/pausa, tiempo, barra de
 * progreso con arrastre y buffer, volumen con deslizador y mute, y la barra
 * que se esconde sola mientras corre.
 *
 * - Arranca desde el principio y **con sonido**: siempre lo abre un toque,
 *   así que el navegador lo permite. Si igual se niega, corre en mudo y el
 *   botón de sonido lo dice.
 * - Teclado (con el foco adentro): espacio/K play-pausa, ← → cinco segundos,
 *   ↑ ↓ volumen, M mute. Esc lo maneja el `<dialog>` que lo contiene.
 * - Las barras son `role="slider"` con su valor; se arrastran con pointer
 *   capture, así el dedo o el mouse pueden salirse de la barra sin soltar.
 * - En táctil no hay deslizador de volumen (iOS no deja cambiarlo): queda
 *   el mute.
 */
export default function VideoPlayer({
  src,
  poster,
  orient = "h",
  t,
  title,
  autoPlay = true,
  ambient = false,
}: {
  src: string;
  poster?: string;
  orient?: "h" | "v";
  t: T;
  title?: string;
  autoPlay?: boolean;
  /** Detrás del marco, una copia del mismo video más grande y borrosa que
      sigue la reproducción: el halo de continuidad. */
  ambient?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef<number | null>(null);
  const volDrag = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [ui, setUi] = useState(true);
  const [scrubbing, setScrubbing] = useState(false);

  // Arranque: foco adentro (para los atajos) y, si corresponde, a correr.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    rootRef.current?.focus({ preventScroll: true });
    if (!autoPlay) return;
    v.currentTime = 0;
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
  }, [autoPlay, src]);

  // El halo sigue al video: arranca y para con él, y si se separan más de un
  // cuarto de segundo (arrastre, salto) se realinea. Siempre en mudo.
  useEffect(() => {
    const main = videoRef.current;
    const back = ambientRef.current;
    if (!ambient || !main || !back) return;
    const play = () => {
      back.defaultMuted = true;
      back.muted = true;
      back.currentTime = main.currentTime;
      back.play().catch(() => {});
    };
    const pause = () => back.pause();
    const align = () => {
      if (Math.abs(back.currentTime - main.currentTime) > 0.25) back.currentTime = main.currentTime;
    };
    main.addEventListener("play", play);
    main.addEventListener("pause", pause);
    main.addEventListener("seeked", align);
    main.addEventListener("timeupdate", align);
    if (!main.paused) play();
    return () => {
      main.removeEventListener("play", play);
      main.removeEventListener("pause", pause);
      main.removeEventListener("seeked", align);
      main.removeEventListener("timeupdate", align);
    };
  }, [ambient, src]);

  // La barra se esconde a los 2,6 s de quietud mientras el video corre;
  // cualquier movimiento, toque o tecla la trae de vuelta.
  const wake = useCallback(() => {
    setUi(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setUi(false), 2600);
  }, []);

  useEffect(() => {
    if (playing) wake();
    else {
      setUi(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    }
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [playing, wake]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const seekTo = (ratio: number) => {
    const v = videoRef.current;
    const d = duration || v?.duration || 0;
    if (!v || !d) return;
    const r = Math.min(1, Math.max(0, ratio));
    v.currentTime = r * d;
    setTime(r * d);
  };

  const seekBy = (delta: number) => {
    const v = videoRef.current;
    if (!v) return;
    const d = duration || v.duration || 0;
    v.currentTime = Math.min(d, Math.max(0, v.currentTime + delta));
  };

  const setVol = (value: number) => {
    const v = videoRef.current;
    if (!v) return;
    const x = Math.min(1, Math.max(0, value));
    v.volume = x;
    v.muted = x === 0;
    setVolume(x);
    setMuted(v.muted);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.muted || v.volume === 0) {
      v.muted = false;
      if (v.volume === 0) v.volume = 0.6;
    } else {
      v.muted = true;
    }
    setMuted(v.muted);
    setVolume(v.volume);
  };

  // Posición del puntero dentro de una barra, de 0 a 1.
  const ratioFrom = (el: HTMLElement, clientX: number) => {
    const r = el.getBoundingClientRect();
    return r.width ? (clientX - r.left) / r.width : 0;
  };

  const onProgressDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setScrubbing(true);
    seekTo(ratioFrom(e.currentTarget, e.clientX));
  };
  const onProgressMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!scrubbing) return;
    seekTo(ratioFrom(e.currentTarget, e.clientX));
  };
  const onProgressUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    setScrubbing(false);
  };

  const onVolDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    volDrag.current = true;
    setVol(ratioFrom(e.currentTarget, e.clientX));
  };
  const onVolMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!volDrag.current) return;
    setVol(ratioFrom(e.currentTarget, e.clientX));
  };
  const onVolUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    volDrag.current = false;
  };

  const onKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case " ":
      case "k":
      case "K":
        e.preventDefault();
        toggle();
        break;
      case "ArrowRight":
        e.preventDefault();
        seekBy(5);
        break;
      case "ArrowLeft":
        e.preventDefault();
        seekBy(-5);
        break;
      case "ArrowUp":
        e.preventDefault();
        setVol((muted ? 0 : volume) + 0.1);
        break;
      case "ArrowDown":
        e.preventDefault();
        setVol((muted ? 0 : volume) - 0.1);
        break;
      case "m":
      case "M":
        toggleMute();
        break;
      default:
        return;
    }
    wake();
  };

  const pct = duration ? (time / duration) * 100 : 0;
  const bufPct = duration ? Math.min(100, (buffered / duration) * 100) : 0;
  const volPct = muted ? 0 : volume * 100;

  const player = (
    <div
      ref={rootRef}
      className={styles.player}
      data-orient={orient}
      data-ui={ui || !playing ? "" : undefined}
      tabIndex={-1}
      onPointerMove={wake}
      onPointerDown={wake}
      onKeyDown={onKey}
    >
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        playsInline
        preload="auto"
        aria-label={title ?? t.label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          if (!scrubbing) setTime(e.currentTarget.currentTime);
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onProgress={(e) => {
          const v = e.currentTarget;
          if (v.buffered.length) setBuffered(v.buffered.end(v.buffered.length - 1));
        }}
        onVolumeChange={(e) => {
          setMuted(e.currentTarget.muted);
          setVolume(e.currentTarget.volume);
        }}
        onClick={toggle}
      />

      {!playing && (
        <button type="button" className={styles.big} onClick={toggle} aria-label={t.play}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </button>
      )}

      <div className={styles.bar}>
        <button
          type="button"
          className={styles.btn}
          onClick={toggle}
          aria-label={playing ? t.pause : t.play}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          )}
        </button>

        <span className={styles.time}>{fmt(time)}</span>

        <div
          className={styles.progress}
          role="slider"
          tabIndex={0}
          aria-label={t.progress}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(time)}
          aria-valuetext={`${fmt(time)} / ${fmt(duration)}`}
          onPointerDown={onProgressDown}
          onPointerMove={onProgressMove}
          onPointerUp={onProgressUp}
          onPointerCancel={onProgressUp}
        >
          <div className={styles.track}>
            <div className={styles.buffered} style={{ width: `${bufPct}%` }} />
            <div className={styles.fill} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.thumb} style={{ left: `${pct}%` }} />
        </div>

        <div className={styles.vol}>
          <button
            type="button"
            className={styles.btn}
            onClick={toggleMute}
            aria-label={muted ? t.unmute : t.mute}
            aria-pressed={muted}
          >
            {muted || volume === 0 ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11 5 6 9H2v6h4l5 4z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : volume < 0.5 ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11 5 6 9H2v6h4l5 4z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M11 5 6 9H2v6h4l5 4z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 5.5a9 9 0 0 1 0 13" />
              </svg>
            )}
          </button>
          <div
            className={styles.volTrack}
            role="slider"
            tabIndex={0}
            aria-label={t.volume}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(volPct)}
            onPointerDown={onVolDown}
            onPointerMove={onVolMove}
            onPointerUp={onVolUp}
            onPointerCancel={onVolUp}
          >
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${volPct}%` }} />
            </div>
            <div className={styles.thumb} style={{ left: `${volPct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );

  if (!ambient) return player;

  // Con halo: el marco redondeado va encima y la copia borrosa, más grande,
  // debajo; el desenfoque se difumina solo hacia afuera.
  return (
    <div className={styles.stage}>
      <video
        ref={ambientRef}
        className={styles.ambient}
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      />
      <div className={styles.frame}>{player}</div>
    </div>
  );
}

function fmt(seconds: number) {
  const s = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}
