import type { Dictionary } from "@/i18n/dict/es";
import { typingOffsets } from "../video/timeline";
import { layKitBeats } from "../video-kit/KitPlayer";

/**
 * El tiempo del video de Propiedades (`/[lang]/video/propiedades`).
 *
 * Mismo contrato que los otros videos: cada escena dibuja a partir de su
 * tiempo local `lt`. El contenido sale de la página `/producto/propiedades`
 * (`dict.propiedades`); lo propio del video (datos de ejemplo, textos de la UI
 * del PMS) vive en `dict.videoProps`. Mudo.
 */

export type PropsVideoDict = {
  hud: Dictionary["video"]["hud"];
  meta: { title: string; description: string };
  x: Dictionary["videoProps"];
  page: Dictionary["propiedades"];
  base: Dictionary["video"];
};

export type PropsBeatId = "hero" | "tutorial" | "access" | "root" | "end";

const typed = (text: string, start: number) => {
  const offsets = typingOffsets(text);
  return { start, offsets, end: start + offsets[offsets.length - 1] };
};

/**
 * El recorrido de cuatro pasos, en ms desde que entra la escena. Muestra cómo
 * queda ORGANIZADO, no cómo se da de alta (pedido del usuario: "no hagas tanto
 * énfasis en el proceso de creación, sino en las reservas, tipos de propiedades
 * y cómo estaría organizado"):
 *
 * 1. Cada propiedad con su tipo: las dos tarjetas despliegan su estructura —el
 *    hotel se vende por categorías (con cuántas habitaciones tiene cada una),
 *    las cabañas por unidades con nombre propio—.
 * 2. Sus reservas en su moneda: el calendario del hotel, categoría por
 *    categoría y habitación por habitación; la cámara lo recorre.
 * 3. Cambiar de propiedad arriba: chip → "Cambiar propiedad" → Cabañas; el
 *    calendario pasa a las seis cabañas, en dólares.
 * 4. Un solo buscador: Ctrl + K → "Alerce" → habitación, reserva y propiedad.
 *
 * Cada tramo tiene su pausa quieta para leer (trampas 94 y 97 de la skill).
 */
export function planTutorial(x: Dictionary["videoProps"]) {
  const cap1 = 400;
  const hotelTree = 1300;
  const cabinTree = 3300;
  const end1 = 6600;

  const calIn = end1;
  const calPan = calIn + 1400;
  const end2 = calPan + 4200;

  const chipClick = end2 + 1200;
  const cabinClick = chipClick + 1300;
  const end3 = cabinClick + 4200;

  const kbdAt = end3 + 800;
  const searchIn = kbdAt + 600;
  const tQuery = typed(x.search.query, searchIn + 500);
  const results = tQuery.end + 250;
  const end4 = results + 2600;

  return {
    cap: [cap1, end1, end2, end3],
    hotelTree, cabinTree, end1,
    calIn, calPan, end2,
    chipClick, cabinClick, end3,
    kbdAt, searchIn, tQuery, results,
    end: end4,
    duration: end4 + 450,
  };
}

export type TutorialPlan = ReturnType<typeof planTutorial>;

export function buildPropsBeats(v: PropsVideoDict) {
  return layKitBeats([
    { id: "hero", dur: 4800, enter: "fade", enterDur: 400 },
    { id: "tutorial", dur: planTutorial(v.x).duration },
    { id: "access", dur: 6600 },
    { id: "root", dur: 8000 },
    { id: "end", dur: 5600 },
  ]);
}
