"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OrbLoader.module.css";

/**
 * El loader de Roombir IA, reciclado.
 *
 * Es `RoombirOrbLoader` de `pms-core/app/src/components/aiComponents`, sin
 * cambios de comportamiento: el pictograma gira con una sola curva, en el
 * tramo rápido se convierte por un momento en una esfera de gradientes con sus
 * mismos colores, vuelve a ser el logo al frenar y descansa. Al apagar
 * `spinning` no se corta a mitad de vuelta: remata hasta la pose de reposo.
 *
 * Lo único distinto es de dónde sale la imagen (`public/video/roombrain.png`,
 * el mismo archivo del PMS reducido) y que el texto accesible viene por prop.
 */

/* Lo que tarda el remate como mucho: 220ms si la marca ya estaba casi en su
   pose, hasta 740ms si le faltaba la vuelta entera. */
const SETTLE_MIN_MS = 220;
const SETTLE_TURN_MS = 520;
const SETTLE_EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";

const ROOMBIR_MARK = "/video/roombrain.png";

/** `getComputedStyle` devuelve "none" para las propiedades sueltas en reposo. */
const numOr = (v: string, fallback: string) => (v === "none" || v === "" ? fallback : v);

export default function OrbLoader({
  size = 30,
  spinning = true,
  cycle,
  label,
  className,
}: {
  /** Alto y ancho en px. Manda también sobre el desenfoque, que va en `em`. */
  size?: number;
  /** En `false` la marca queda quieta y nítida; al apagarla remata el giro. */
  spinning?: boolean;
  /** Lo que tarda el ciclo entero (giro + esfera + reposo). */
  cycle?: string;
  /** Texto accesible mientras gira. */
  label?: string;
  className?: string;
}) {
  const logoRef = useRef<HTMLImageElement>(null);
  const ballRef = useRef<HTMLSpanElement>(null);
  const [running, setRunning] = useState(spinning);
  const runningRef = useRef(running);
  runningRef.current = running;
  const settleRef = useRef<Animation[]>([]);

  useEffect(() => {
    const logo = logoRef.current;
    const ball = ballRef.current;
    const clearSettle = () => {
      settleRef.current.forEach((a) => a.cancel());
      settleRef.current = [];
      if (logo) logo.style.animation = "";
      if (ball) ball.style.animation = "";
    };
    if (spinning) {
      clearSettle();
      setRunning(true);
      return;
    }
    if (!logo || !ball || !runningRef.current) {
      setRunning(false);
      return;
    }
    const lcs = getComputedStyle(logo);
    const bcs = getComputedStyle(ball);
    const rot = parseFloat(lcs.rotate) || 0;
    const target = Math.floor(rot / 360) * 360;
    const remaining = rot - target;
    const timing: KeyframeAnimationOptions = {
      duration: SETTLE_MIN_MS + (remaining / 360) * SETTLE_TURN_MS,
      easing: SETTLE_EASING,
      fill: "forwards",
    };
    logo.style.animation = "none";
    ball.style.animation = "none";
    const anims = [
      logo.animate(
        [
          {
            rotate: `${rot}deg`,
            scale: numOr(lcs.scale, "1"),
            filter: numOr(lcs.filter, "blur(0px)"),
            opacity: lcs.opacity,
          },
          { rotate: `${target}deg`, scale: "1", filter: "blur(0px)", opacity: "1" },
        ],
        timing,
      ),
      ball.animate(
        [
          { opacity: bcs.opacity, scale: numOr(bcs.scale, "1") },
          { opacity: "0", scale: "0.6" },
        ],
        timing,
      ),
    ];
    settleRef.current = anims;
    let done = false;
    const settle = () => {
      if (done) return;
      done = true;
      setRunning(false);
    };
    anims[0].finished.then(settle, () => {});
    const timer = window.setTimeout(settle, 2000);
    return () => window.clearTimeout(timer);
  }, [spinning]);

  useEffect(() => {
    if (running) return;
    settleRef.current.forEach((a) => a.cancel());
    settleRef.current = [];
    if (logoRef.current) logoRef.current.style.animation = "";
    if (ballRef.current) ballRef.current.style.animation = "";
  }, [running]);

  return (
    <span
      className={`${styles.orb}${running ? "" : ` ${styles.still}`}${className ? ` ${className}` : ""}`}
      role={spinning ? "status" : undefined}
      aria-label={spinning ? label : undefined}
      aria-hidden={spinning ? undefined : true}
      style={{ fontSize: `${size}px`, ...(cycle ? { ["--cycle" as string]: cycle } : {}) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={logoRef} className={styles.logo} src={ROOMBIR_MARK} alt="" aria-hidden />
      <span ref={ballRef} className={styles.ball} aria-hidden />
    </span>
  );
}
