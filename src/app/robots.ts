import type { MetadataRoute } from "next";
import { siteConfig, siteUrl } from "@/lib/siteConfig";

/**
 * `robots.txt`.
 *
 * Las vistas previas quedan fuera del índice: se embeben en el panel interno y
 * su contenido ya existe dentro de una página real. El comodín cubre los cinco
 * idiomas, porque ahora viven en `/{idioma}/preview/…`.
 *
 * No se bloquean los rastreadores de modelos de lenguaje: predicamos que un
 * alojamiento tiene que ser legible por un agente, sería incoherente cerrarle
 * la puerta al nuestro. El `llms.txt` está en `public/`.
 */
export default function robots(): MetadataRoute.Robots {
  if (siteConfig.seo.noindex) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/preview/", "/*/preview/"] }],
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl,
  };
}
