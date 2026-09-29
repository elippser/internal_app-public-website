"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * La orientación del video. Cada video tiene dos cortes con la MISMA línea de
 * tiempo: el horizontal de siempre (1280×720) y el vertical (720×1280, 9:16)
 * que se pide con `?view=mobile`. Como los tiempos son los mismos, la voz y la
 * música montadas en el panel sirven para los dos.
 *
 * Las escenas leen la orientación con `usePortrait()` y recomponen su layout:
 * no es un recorte del horizontal, cada escena se diseña para el formato.
 */

export type Orient = "landscape" | "portrait";

export const STAGE_DIMS: Record<Orient, { w: number; h: number }> = {
  landscape: { w: 1280, h: 720 },
  portrait: { w: 720, h: 1280 },
};

/** El contexto de la orientación (lo leen también funciones como `cameraStyle`, que corren durante el render). */
export const OrientCtx = createContext<Orient>("landscape");
const Ctx = OrientCtx;

export function OrientProvider({ orient, children }: { orient: Orient; children: ReactNode }) {
  return <Ctx.Provider value={orient}>{children}</Ctx.Provider>;
}

export const useOrient = () => useContext(Ctx);
export const usePortrait = () => useContext(Ctx) === "portrait";
/** Ancho y alto del escenario en la orientación actual. */
export const useStageDims = () => STAGE_DIMS[useContext(Ctx)];

/** `?view=mobile` → vertical. Se lee en el navegador (las páginas de video son estáticas). */
export function useViewParam(): Orient | null {
  const [o, setO] = useState<Orient | null>(null);
  useEffect(() => {
    setO(new URLSearchParams(window.location.search).get("view") === "mobile" ? "portrait" : "landscape");
  }, []);
  return o;
}

/**
 * El vertical de los videos de PRODUCTO e IA (`video-kit/portrait.tsx`): ahí cada escena sigue dibujando en
 * 1280×720 (la franja del medio del cuadro alto), así que `usePortrait()` vale false —las escenas importadas de
 * la portada no se recomponen dos veces— y las piezas de producto que sí se acomodan leen esta otra señal.
 */
export const KitPortraitCtx = createContext(false);
export const useKitPortrait = () => useContext(KitPortraitCtx);
