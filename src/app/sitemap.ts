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
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    PUBLIC_ROUTE_KEYS.map((key) => {
      const isLegal = key === "privacidad" || key === "terminos" || key === "cookies";
      return {
        url: new URL(publicPath(locale, key), siteUrl).toString(),
        lastModified: now,
        changeFrequency: (isLegal ? "yearly" : "monthly") as "yearly" | "monthly",
        priority: key === "home" ? 1 : isLegal ? 0.2 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [
              LOCALE_TAGS[l],
              new URL(publicPath(l, key), siteUrl).toString(),
            ]),
          ),
        },
      };
    }),
  );
}
