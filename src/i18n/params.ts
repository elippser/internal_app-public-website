import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

/**
 * Lee el idioma de los `params` de una página.
 *
 * Next tipa el segmento dinámico como `string` —no sabe que sólo puede ser uno
 * de cinco—, así que anotar `Promise<{ lang: Locale }>` en cada página hace que
 * el validador de rutas se queje: el tipo de la página sería más estrecho que
 * el que Next promete pasarle.
 *
 * Acá se lee como `string` y se estrecha una sola vez. El `??` nunca se
 * ejecuta en producción porque `dynamicParams = false` y el middleware sólo
 * deja pasar idiomas conocidos, pero es lo que hace que el estrechamiento sea
 * una comprobación real y no un `as`.
 */
export async function readLocale(
  params: Promise<{ lang: string }>,
): Promise<Locale> {
  const { lang } = await params;
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}
