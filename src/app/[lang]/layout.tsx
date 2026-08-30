import type { Metadata } from "next";
import Pixels from "@/components/Pixels";
import FxObserver from "@/components/site/FxObserver";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LOCALES, LOCALE_TAGS, OG_LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { alternatesFor } from "@/i18n/routes";
import { siteConfig, siteUrl } from "@/lib/siteConfig";
import "../globals.css";

/**
 * El layout raíz del sitio. Vive dentro de `[lang]` a propósito: es el único
 * lugar desde donde se puede poner el idioma correcto en `<html lang>`, que es
 * lo primero que mira un lector de pantalla y lo que usa el navegador para
 * decidir la separación silábica y las comillas.
 *
 * Como no hay `app/layout.tsx`, TODA ruta del sitio tiene que colgar de acá;
 * de eso se encarga el `middleware`, que manda cualquier URL sin prefijo de
 * idioma a la que corresponda.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.site.title,
      template: `%s · ${siteConfig.name}`,
    },
    description: dict.site.description,
    robots: siteConfig.seo.noindex ? { index: false, follow: false } : undefined,
    icons: siteConfig.favicon ? { icon: siteConfig.favicon } : undefined,
    /* hreflang de la home. Cada página pone el suyo con su propio slug
       traducido; acá va el del layout, que es la portada. */
    alternates: alternatesFor(lang, "/"),
    openGraph: {
      siteName: siteConfig.name,
      locale: OG_LOCALES[lang],
      title: dict.site.title,
      description: dict.site.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.site.title,
      description: dict.site.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);

  return (
    <html lang={LOCALE_TAGS[lang]}>
      {/* Las tipografías van acá y no en cada página: aplican a todo el sitio.
          Es lo que antes era `site.headHtml` en la DB. */}
      <head>
        {siteConfig.preconnect.map((href) => (
          <link
            key={href}
            rel="preconnect"
            href={href}
            // gstatic sirve los .woff2 y pide CORS; sin esto el preconnect
            // abre una conexión que después no se reusa.
            crossOrigin={href.includes("gstatic") ? "anonymous" : undefined}
          />
        ))}
        {siteConfig.stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      {/* suppressHydrationWarning: extensiones del navegador inyectan atributos
          en <body> antes de hidratar; no es un bug del sitio. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#contenido">
          {dict.nav.skip}
        </a>
        <div className="grain" aria-hidden />
        <SiteHeader locale={lang} dict={dict} />
        <main id="contenido">{children}</main>
        <SiteFooter locale={lang} dict={dict} />
        {/* Dispara las animaciones de viewport (`data-fx` → `data-fx-in`).
            Sin él la página se ve igual, sólo que quieta. */}
        <FxObserver />
        <Pixels />
      </body>
    </html>
  );
}
