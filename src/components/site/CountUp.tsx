"use client";

import { useEffect, useRef, useState } from "react";

/**
 * El número de una StatBand que cuenta hasta su valor al entrar en pantalla.
 *
 * El servidor renderiza el valor FINAL, no el cero: un crawler, una captura o
 * un navegador sin JS ven "272", nunca un contador a medio camino. Recién
 * cuando el elemento entra al viewport se rebobina a 0 y cuenta.
 *
 * Sólo anima enteros de hasta tres cifras: contar hasta 2026 queda ridículo, y
 * "AR" no es un número. Lo que no aplica se muestra tal cual.
 */
export default function CountUp({ value }: { value: string }) {
  const match = /^(\d+)(.*)$/.exec(value.trim());
  const target = match ? parseInt(match[1], 10) : NaN;
  const suffix = match ? match[2] : "";
  const animatable = Number.isFinite(target) && target > 0 && target <= 999;

  const [shown, setShown] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!animatable) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const t0 = performance.now();
        const duration = 900;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animatable, target]);

  if (!animatable) return <>{value}</>;
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
