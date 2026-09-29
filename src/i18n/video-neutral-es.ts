import type { Locale } from "./config";

/**
 * Los videos van en castellano NEUTRO (sin voseo), igual que el de portada
 * (VIDEO-GUION.md, "Voseo", 20-09-2026). Los titulares que los videos toman
 * de `dict.<página>` pasan por acá: sólo las cadenas que cambian, en la
 * misma forma que el diccionario (un arreglo se completa por posición).
 *
 * Desde el 28-09-2026 las páginas del sitio también están en neutro, así que
 * estos reemplazos ya coinciden con ellas; quedan por si un titular de página
 * vuelve a divergir del texto del video.
 *
 * Los otros cuatro idiomas no tienen voseo: no se tocan.
 */
const NEUTRAL_ES: Record<string, unknown> = {
  ia: {
    ask: {
      title: "Lo pides como lo dirías, *y queda hecho*.",
      items: [
        { ask: "Pasa a García de la 203 a la 204 desde el jueves" },
        { ask: "Sube un 10% la doble superior los sábados de octubre" },
        { ask: "Bloquea la cabaña Alerce el martes por la tarde por mantenimiento" },
        { ask: "Cambia el título de la portada y publícalo" },
      ],
    },
    dossier: { title: "Sabe en qué momento está *tu destino*." },
    cta: { title: "Pídele algo *que hoy te lleva cuatro pestañas*." },
  },
  propiedades: {
    cta: { title: "Carga la primera; *la segunda copia su estructura*." },
  },
  habitaciones: {
    hero: { title: "Por categoría o por unidad, *como tú vendas*." },
    load: { title: "Lo cargas una vez, *lo usan todos*." },
    cta: { title: "Empieza por *tus habitaciones*." },
  },
  motor: {
    cta: { title: "Pon tu link de reservas *en la bio*." },
  },
  informes: {
    metrics: {
      items: [{}, { desc: "El ADR es lo que cobras en promedio por noche vendida; el RevPAR, lo que te deja cada habitación que tienes, vendida o no." }],
    },
  },
  marketing: {
    hero: { title: "Una web que *ya sabe* qué tienes libre." },
  },
};

function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base) && Array.isArray(over)) return base.map((b, i) => merge(b, over[i])) as T;
  if (typeof base === "object" && base !== null && typeof over === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over as Record<string, unknown>)) out[k] = merge(out[k], v);
    return out as T;
  }
  return over as T;
}

/** Los textos de una página, como los muestra un video: en `es`, sin voseo. */
export function videoPage<T>(locale: Locale, key: string, page: T): T {
  return locale === "es" ? merge(page, NEUTRAL_ES[key]) : page;
}
