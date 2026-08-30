import raw from "../../site.config.json";

/**
 * Config del sitio entero. Vive en `site.config.json` (raíz del repo) y no en
 * la DB: el panel interno lo edita como un archivo más del proyecto, igual que
 * las páginas. Así una sola cosa es la fuente de verdad y el editor no tiene
 * dos modelos que sincronizar.
 *
 * El token de la Conversions API de Meta NO está acá a propósito: es un secreto
 * server-side y se queda en `mkt_sites.pixels.metaCapiToken` del API interno.
 */
export interface SiteConfig {
  name: string;
  lang: string;
  /** Id del sitio en el CRM interno. Viaja con cada lead capturado. */
  siteId: string;
  favicon: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
    noindex: boolean;
  };
  /** Solo los que corren en el navegador. */
  pixels: {
    metaPixelId: string;
    ga4MeasurementId: string;
    googleAdsConversionId: string;
    gtmContainerId: string;
  };
  /** Orígenes a los que conviene abrir la conexión antes de pedir la fuente. */
  preconnect: string[];
  /** Hojas de estilo remotas (tipografías). Las locales se importan en el TSX. */
  stylesheets: string[];
}

export const siteConfig = raw as SiteConfig;

/** Base pública del sitio. Se usa para canonical y OG. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:6300";

/** API de internal-laupser: captura de leads y conversiones. */
export const internalApiUrl =
  process.env.NEXT_PUBLIC_INTERNAL_API_URL ?? "http://localhost:8600";

/**
 * El PMS. Todos los CTA de "empezar" e "ingresar" salen del sitio hacia acá:
 * el alta real vive en pms-core, este repo no tiene formulario de registro y
 * no debería tenerlo nunca (dos altas distintas = dos verdades).
 */
export const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bookfer.com";

export const registerUrl = `${appUrl}/register`;
export const loginUrl = `${appUrl}/login`;

/**
 * Datos de contacto públicos. Están acá y no repartidos por las páginas para
 * que cambiar un teléfono sea un archivo y no una búsqueda por todo el repo.
 */
export const contact = {
  email: "hola@bookfer.com",
  /** E.164 sin espacios, como pide la convención de teléfonos de la plataforma. */
  whatsapp: "+5492611234567",
  instagram: "https://www.instagram.com/bookfer.app/",
  linkedin: "https://www.linkedin.com/company/bookfer/",
};

/**
 * El enlace de WhatsApp con el mensaje ya escrito. El texto viene del
 * diccionario del idioma activo: quien escribe desde la versión alemana no
 * tiene por qué mandar un mensaje en castellano.
 */
export function whatsappUrlFor(message: string): string {
  const number = contact.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
