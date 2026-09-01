import type { Metadata } from "next";
import { OG_LOCALES, type Locale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/routes";
import { siteConfig } from "@/lib/siteConfig";

/**
 * La metadata de una página, entera y de una sola vez.
 *
 * Existe por una trampa del merge de Next: `openGraph` no se combina campo a
 * campo entre layout y página — si la página no lo declara, hereda el del
 * layout COMPLETO. Así, cada página tenía su `<title>` correcto pero el
 * og:title/og:description de la portada: un share de `/de/plattform` en
 * LinkedIn mostraba el texto de la home. Y los motores generativos leen OG
 * igual que los buscadores.
 *
 * Por eso acá se declara todo junto: title, description, canonical + hreflang
 * (con el slug traducido de cada idioma) y las tarjetas OG/Twitter con el
 * texto DE ESTA página. `og:url` sale del mismo canonical y se resuelve
 * absoluto contra `metadataBase`.
 */
export function pageMetadata(
  lang: Locale,
  href: string,
  title: string,
  description: string,
): Metadata {
  const alternates = alternatesFor(lang, href);

  return {
    title,
    description,
    alternates,
    openGraph: {
      siteName: siteConfig.name,
      locale: OG_LOCALES[lang],
      type: "website",
      url: alternates.canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
