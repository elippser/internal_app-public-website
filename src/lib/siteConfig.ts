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
 * El sitio enlaza al PMS en UN solo lugar: "Ingresar".
 *
 * Antes no enlazaba en ninguno. `appUrl`, `registerUrl` y `loginUrl` se habían
 * quitado y todos los CTA los dibujaba `SamePageLink`, que apunta a la página
 * actual. Para "empezar gratis" eso sigue siendo correcto —al alta se entra por
 * el formulario de `/crear-cuenta` y el enlace del correo, no por el PMS—, pero
 * para "ingresar" era un botón que no hacía nada: quien YA es cliente no tiene
 * por dónde entrar, y desde `/crear-cuenta` el clic ni siquiera cambiaba de
 * página, así que parecía que "Ingresar" llevaba al alta.
 *
 * Sigue sin haber una `NEXT_PUBLIC_APP_URL` genérica, y esa parte de la
 * decisión original se mantiene: esta variable nombra UN destino concreto y no
 * una base sobre la que se puedan colgar rutas nuevas del PMS.
 */
export const loginUrl =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? "https://app.roombir.com/login";

/**
 * Datos de contacto públicos. Están acá y no repartidos por las páginas para
 * que cambiar un teléfono sea un archivo y no una búsqueda por todo el repo.
 */
export const contact = {
  email: "hola@roombir.com",
  /** E.164 sin espacios, como pide la convención de teléfonos de la plataforma. */
  whatsapp: "+5492611234567",
  instagram: "https://www.instagram.com/roombir.app/",
  linkedin: "https://www.linkedin.com/company/roombir/",
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
