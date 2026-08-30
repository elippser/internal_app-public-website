import type { Locale } from "./config";
import type { Dictionary } from "./dict/es";

/**
 * Carga el diccionario de un idioma.
 *
 * El mapa es explícito y no un `import()` con una variable adentro: así el
 * bundler ve los cinco archivos, los parte en cinco chunks y cada página
 * estática se queda sólo con el suyo. Con una ruta dinámica tendría que
 * empaquetar los cinco idiomas en todas las páginas.
 */
const LOADERS: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  es: () => import("./dict/es"),
  en: () => import("./dict/en"),
  pt: () => import("./dict/pt"),
  fr: () => import("./dict/fr"),
  de: () => import("./dict/de"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await LOADERS[locale]();
  return mod.default;
}

export type { Dictionary };
