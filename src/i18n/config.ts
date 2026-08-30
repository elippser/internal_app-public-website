/**
 * Los cinco idiomas del sitio.
 *
 * Son los mismos cinco que soporta la plataforma (es, en, fr, de, pt), a
 * propósito: si el PMS habla un idioma, el sitio que lo vende también.
 *
 * Todas las rutas van prefijadas —`/es/precios`, `/en/pricing`— sin excepción
 * para el idioma por defecto. Es más largo de escribir pero evita el problema
 * clásico de tener la home en dos URLs (`/` y `/es`) compitiendo entre sí en
 * el índice; el `middleware` manda `/` y cualquier ruta sin prefijo al idioma
 * que corresponda.
 */

export const LOCALES = ["es", "en", "pt", "fr", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/** El nombre de cada idioma EN ese idioma, que es como se listan los selectores. */
export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
};

/** Etiqueta corta para el botón del selector. */
export const LOCALE_SHORT: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
  fr: "FR",
  de: "DE",
};

/** Lo que va en `<html lang>` y en los `hreflang`. */
export const LOCALE_TAGS: Record<Locale, string> = {
  es: "es",
  en: "en",
  pt: "pt",
  fr: "fr",
  de: "de",
};

/** Para `openGraph.locale`. */
export const OG_LOCALES: Record<Locale, string> = {
  es: "es_AR",
  en: "en_US",
  pt: "pt_BR",
  fr: "fr_FR",
  de: "de_DE",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Elige el mejor idioma para un `Accept-Language`.
 *
 * Deliberadamente simple: mira los tags por orden de preferencia y se queda
 * con el primero cuyo idioma base conozcamos. Sin pesos `q` ni negociación
 * fina — para cinco idiomas eso es precisión que nadie va a notar.
 */
export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  for (const part of acceptLanguage.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
