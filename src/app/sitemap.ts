import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS } from "@/i18n/config";
import { PUBLIC_ROUTE_KEYS, publicPath } from "@/i18n/routes";
import { siteUrl } from "@/lib/siteConfig";

/**
 * El sitemap sale del mapa de rutas (`i18n/routes.ts`), multiplicado por los
 * cinco idiomas y con el slug traducido de cada uno. Una página que no está
 * ahí tampoco existe para el visitante, así que no hay lista que mantener
 * aparte ni riesgo de que se desincronice.
 *
 * Cada entrada declara sus `alternates`: le dice al buscador que las cinco
 * URLs —distintas entre sí, porque los slugs están traducidos— son la misma
 * página, y no cinco páginas parecidas compitiendo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    PUBLIC_ROUTE_KEYS.map((key) => {
      const isLegal = key === "privacidad" || key === "terminos" || key === "cookies";
      return {
        // Sin `lastModified` a propósito: antes iba `new Date()` y cada deploy
        // "modificaba" las 75 URLs, que es la manera más rápida de que Google
        // deje de creerle al campo. Mejor no declararlo que declararlo falso.
        url: new URL(publicPath(locale, key), siteUrl).toString(),
        changeFrequency: (isLegal ? "yearly" : "monthly") as "yearly" | "monthly",
        priority: key === "home" ? 1 : isLegal ? 0.2 : 0.7,
        alternates: {
          languages: {
            ...Object.fromEntries(
              LOCALES.map((l) => [
                LOCALE_TAGS[l],
                new URL(publicPath(l, key), siteUrl).toString(),
              ]),
            ),
            // El mismo x-default que emiten las páginas: la versión ES. Sin él
            // acá, el sitemap y el <head> contaban historias distintas.
            "x-default": new URL(publicPath("es", key), siteUrl).toString(),
          },
        },
      };
    }),
  );
}
