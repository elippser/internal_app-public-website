import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import Pixels from "@/components/Pixels";
import FxObserver from "@/components/site/FxObserver";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LOCALES, LOCALE_TAGS, OG_LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { alternatesFor } from "@/i18n/routes";
import { contact, siteConfig, siteUrl } from "@/lib/siteConfig";
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

/**
 * Tipografías por `next/font`: los woff2 se auto-hospedan en el build y se
 * sirven desde el propio dominio, sin el stylesheet render-blocking de
 * fonts.googleapis.com ni la cadena de conexiones a gstatic (eran los dos
 * requests críticos de cada carga). `display: swap` pinta el texto con la
 * fallback al instante; `adjustFontFallback` calibra esa fallback para que el
 * intercambio no mueva el layout. Los nombres reales de familia los expone
 * cada variable y `globals.css` los enchufa en `--sans` / `--serif`.
 * Sólo el subset `latin`: cubre los 5 idiomas del sitio salvo rarezas tipo el
 * œ francés, que caen a la fuente de fallback glifo por glifo. La alternativa
 * (`latin-ext`) duplicaba los archivos precargados — 6 woff2 críticos en vez
 * de 3 — y eso pesa directo sobre el LCP.
 */
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
});

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
    /* Dos favicons elegidos por `media`, no por el media query interno del
       SVG: varios renderers de favicons ignoran el <style> del archivo y ahí
       el punto quedaba en musgo sobre pestaña oscura. icon-dark.svg lleva la
       "b" en papel y el punto en pistacho (el verde claro del footer),
       hardcodeados. icon.svg conserva su media query como red de seguridad
       para quien ignore el atributo `media` del link. */
    icons: siteConfig.favicon
      ? {
          icon: [
            { url: siteConfig.favicon, media: "(prefers-color-scheme: light)" },
            { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
          ],
        }
      : undefined,
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
    <html
      lang={LOCALE_TAGS[lang]}
      className={`${outfit.variable} ${instrumentSerif.variable}`}
    >
      {/* Mecanismo heredado de `site.headHtml`: hoy los arrays del config
          están vacíos (las tipografías van por `next/font`, arriba), pero si
          el panel vuelve a inyectar un stylesheet externo, entra por acá. */}
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
        <SiteHeader locale={lang} nav={dict.nav} />
        <main id="contenido">{children}</main>
        <SiteFooter locale={lang} dict={dict} />
        {/* Dispara las animaciones de viewport (`data-fx` → `data-fx-in`).
            Sin él la página se ve igual, sólo que quieta. */}
        <FxObserver />
        <Pixels />
        {/* La entidad "Bookfer" para los grafos de conocimiento: quién es la
            organización detrás del dominio y cuáles son sus otros perfiles
            (`sameAs` es lo que le permite a un motor unir el sitio, el
            Instagram y el LinkedIn en una sola identidad). Va en el layout
            porque es verdad en las 15 páginas y en los 5 idiomas. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteUrl,
              logo: new URL("/icon.svg", siteUrl).toString(),
              email: contact.email,
              sameAs: [contact.instagram, contact.linkedin],
            }),
          }}
        />
      </body>
    </html>
  );
}
