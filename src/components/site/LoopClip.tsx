"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import styles from "./LoopClip.module.css";

/** Los recortes que genera `scripts/cut-clips.mjs`. */
export type ClipName = "motor" | "pms" | "ia";

/**
 * Un tramo de un video del sitio, mudo y en bucle, que corre solo mientras
 * está en pantalla (la sección "Roombir se adapta a tu alojamiento").
 *
 * No es `SiteVideo`: aquél muestra un póster y reproduce la pieza entera en
 * un modal, con sonido. Esto es un recorte de pocos segundos, sin pista de
 * audio, en `public/video/clips/<clip>-<idioma>-<h|v>.mp4`, con su póster (el
 * primer cuadro) al lado.
 *
 * - **El estado base es el póster**: sin JavaScript, o con "reducir
 *   movimiento", se ve la imagen y nada se mueve solo.
 * - El MP4 no se pide hasta que el clip se acerca al viewport, y se pausa al
 *   salir: nunca hay tres videos decodificando a la vez fuera de la vista.
 * - Horizontal (16:9) desde 768 px y vertical (9:16) por debajo, como el
 *   resto de los videos. El póster lo elige el navegador con `<picture>`, así
 *   que no salta al hidratar.
 * - El botón de pausa no es adorno: todo lo que se mueve solo más de cinco
 *   segundos tiene que poder detenerse (WCAG 2.2.2).
 */
export default function LoopClip({
  clip,
  locale,
  label,
  playLabel,
  pauseLabel,
  className,
}: {
  clip: ClipName;
  locale: Locale;
  /** Qué muestra el clip, para lectores de pantalla. */
  label: string;
  playLabel: string;
  pauseLabel: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  /* Lo que decidió la persona con el botón; `null` = todavía nada, manda el
     viewport (y la preferencia de movimiento). */
  const wishRef = useRef<boolean | null>(null);
  const visibleRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const base = `/video/clips/${clip}-${locale}`;

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const phone = window.matchMedia("(max-width: 767px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let loaded = "";

    const load = () => {
      const src = `${base}-${phone.matches ? "v" : "h"}.mp4`;
      if (loaded === src) return;
      loaded = src;
      video.src = src;
    };

    const sync = () => {
      const want = wishRef.current ?? !still.matches;
      if (visibleRef.current && want) {
        load();
        // React no escribe `muted` en el HTML servido: se fija a mano, o el
        // navegador trata el autoplay como si tuviera sonido y lo bloquea.
        video.muted = true;
        video.play().catch(() => {
          /* Ahorro de datos o de batería: queda el póster. */
        });
      } else {
        video.pause();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visibleRef.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.2 },
    );
    io.observe(wrap);

    const onPlaying = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    // Al cruzar el corte de teléfono cambia el archivo: se vuelve a cargar.
    const onOrient = () => {
      if (!loaded) return;
      load();
      sync();
    };
    const onWish = () => sync();

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    phone.addEventListener("change", onOrient);
    still.addEventListener("change", onWish);
    wrap.addEventListener("loopclip:wish", onWish);

    return () => {
      io.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      phone.removeEventListener("change", onOrient);
      still.removeEventListener("change", onWish);
      wrap.removeEventListener("loopclip:wish", onWish);
      video.pause();
    };
  }, [base]);

  const toggle = () => {
    wishRef.current = !playing;
    wrapRef.current?.dispatchEvent(new Event("loopclip:wish"));
  };

  return (
    <div
      ref={wrapRef}
      className={[styles.clip, className ?? ""].join(" ")}
      data-playing={playing ? "" : undefined}
    >
      <div className={styles.frame} role="img" aria-label={label}>
        <picture>
          <source media="(max-width: 767px)" srcSet={`${base}-v.jpg`} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.poster} src={`${base}-h.jpg`} alt="" loading="lazy" decoding="async" />
        </picture>
        <video
          ref={videoRef}
          className={styles.video}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          aria-hidden
          disablePictureInPicture
        />
      </div>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggle}
        aria-label={`${playing ? pauseLabel : playLabel}: ${label}`}
        aria-pressed={playing}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          {playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5.5v13l11-6.5z" />}
        </svg>
      </button>
    </div>
  );
}
