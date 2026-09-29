"use client";

import type { ReactNode } from "react";
import { KitPortraitCtx, OrientProvider, type Orient } from "../video/orientation";
import s from "../video/HeroVideo.module.css";

/**
 * El corte vertical (`?view=mobile`) de los videos de producto e IA.
 *
 * Las escenas están compuestas para 1280×720. En vertical cada una va entera y
 * centrada en el cuadro alto —la misma proporción que en escritorio, como se
 * aprobó en el video de portada—: el escenario de 720×1280 lleva adentro una
 * caja de 1280×2276 escalada ×0,5625 y cada escena ocupa la franja del medio
 * (`[data-pworld]`). Lo que en horizontal quedaría fuera de cuadro acá se ve
 * (la franja no recorta): una cámara que se acerca llena el alto de la pantalla.
 * Los fondos, la marca y el rótulo del paso se estiran al cuadro entero por CSS
 * (`scenes.module.css`, `kit.module.css`), y la cámara de los recorridos se
 * acerca un poco más (`cameraStyle`) para que la ventana ocupe el ancho.
 */
export const PBOX = { w: 1280, h: 1280 / 0.5625, k: 0.5625, top: (1280 / 0.5625 - 720) / 2 };

/** Cuánto se acerca cada escena en vertical (alrededor del centro de la franja). Por defecto 1,3: las escenas
 *  centradas se leen grandes y los bordes que se pierden son margen. Los recorridos van a 1,25 (la cámara ya encuadra). */
export const PORTRAIT_ZOOM_DEFAULT = 1.3;
export const portraitZoomStyle = (z: number) => ({ transform: `scale(${z})`, transformOrigin: "640px 360px" });

export function PortraitBox({ orient, children }: { orient: Orient; children: ReactNode }) {
  if (orient !== "portrait") return <OrientProvider orient={orient}>{children}</OrientProvider>;
  // Las escenas siguen en 1280×720 (orientación "landscape" para las de la portada) y las de producto se enteran por `useKitPortrait`.
  return (
    <OrientProvider orient="landscape">
      <KitPortraitCtx.Provider value>
        <div className={s.pBox} data-pbox="">
          {children}
        </div>
      </KitPortraitCtx.Provider>
    </OrientProvider>
  );
}
