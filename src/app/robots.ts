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
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/preview/", "/*/preview/"] },
      /* Los rastreadores de IA, nombrados uno por uno además del comodín.
         Redundante a propósito: (a) documenta la decisión donde un tercero la
         va a buscar, y (b) si algún día un WAF/CDN interpone su propio manejo
         de bots (Cloudflare los bloquea por defecto desde 2025), el grupo
         explícito deja constancia de la intención del sitio. Cubre las tres
         familias por proveedor: entrenamiento, índice de búsqueda y fetch en
         vivo por pedido del usuario. */
      ...[
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "ClaudeBot",
        "Claude-SearchBot",
        "Claude-User",
        "PerplexityBot",
        "Perplexity-User",
        "Google-Extended",
        "CCBot",
      ].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/preview/", "/*/preview/"],
      })),
    ],
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl,
  };
}
