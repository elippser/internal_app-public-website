"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";
import run from "./home.animation";

/**
 * Librerías de CDN que usaba la página + el JS heredado que depende de ellas.
 *
 * El JS no puede correr en un `useEffect` pelado: las librerías se cargan
 * async y en ese momento todavía no existen sus globals. Por eso se cuentan los
 * `onLoad` y recién con el último se dispara.
 *
 * Se ejecuta una sola vez por carga completa: `next/script` no reinyecta un
 * script ya cargado, así que si algún día hay navegación cliente entre páginas
 * hay que reinicializar a mano al volver.
 */
const EXTERNAL = [
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
];

export default function HomeScripts() {
  const pending = useRef(EXTERNAL.length);
  const started = useRef(false);

  const onLoad = useCallback(() => {
    pending.current -= 1;
    if (pending.current > 0 || started.current) return;
    started.current = true;
    run();
  }, []);

  return (
    <>
      {EXTERNAL.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" onLoad={onLoad} />
      ))}
    </>
  );
}
