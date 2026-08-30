import type { Metadata } from "next";
import Pixels from "@/components/Pixels";
import { siteConfig, siteUrl } from "@/lib/siteConfig";
import "./globals.css";

/**
 * Los valores de `site.config.json` son el default de todo el sitio. Cada
 * página los pisa exportando su propio `metadata`.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seo.title || siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.seo.description || undefined,
  robots: siteConfig.seo.noindex ? { index: false, follow: false } : undefined,
  icons: siteConfig.favicon ? { icon: siteConfig.favicon } : undefined,
  openGraph: {
    title: siteConfig.seo.title || siteConfig.name,
    description: siteConfig.seo.description || undefined,
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : undefined,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.lang}>
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
        {children}
        <Pixels />
      </body>
    </html>
  );
}
