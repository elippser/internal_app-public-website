/**
 * El mapa del sitio: sólo la estructura, sin una sola palabra traducible.
 *
 * Las rutas se escriben una vez, en castellano y sin prefijo de idioma
 * (`/producto/pms`); `localePath()` les pone el idioma activo al render.
 * Los textos —títulos y descripciones— viven en `src/i18n/dict/*.ts` y se
 * buscan por estas mismas claves.
 *
 * Lo consumen el header (mega menú y cajón móvil), el pie y `sitemap.ts`. Si
 * una página nueva no aparece acá, no la encuentra nadie: crear la carpeta en
 * `src/app/[lang]` es la mitad del trabajo, la otra mitad es esta lista.
 */

/**
 * Los cinco productos, en el orden en que se presentan en todos lados: menú,
 * pie, home y /producto. Roombir IA va primero porque es la capa que usa a
 * todas las demás.
 *
 * El PMS (`PMS_PARTS`): Propiedades, Habitaciones y Reservas viven juntas en
 * `/producto/pms`; el Motor de reservas tiene su página (29-09-2026). Ver
 * IDENTIDAD-COMUNICACIONAL-2026.md en la raíz.
 */
export const PRODUCT_KEYS = ["ia", "pms", "informes", "revenue", "marketing"] as const;

export type ProductKey = (typeof PRODUCT_KEYS)[number];

export const PRODUCT_HREFS: Record<ProductKey, string> = {
  ia: "/producto/ia",
  pms: "/producto/pms",
  informes: "/producto/informes",
  revenue: "/producto/revenue",
  marketing: "/producto/marketing",
};

/**
 * Las cuatro partes del PMS, en el orden del flujo: cargas la propiedad,
 * cargas las habitaciones, las reservas entran y las operas, el huésped
 * reserva solo por el motor. Las tres primeras son secciones de
 * `/producto/pms`; el motor es `PMS_SUBPAGES`. Las etiquetas: `dict.nav.pmsParts`.
 */
export const PMS_PARTS = ["propiedades", "habitaciones", "reservas", "motor"] as const;

export type PmsPart = (typeof PMS_PARTS)[number];

/** Las subpáginas del PMS con URL propia (el resto son secciones de /producto/pms). */
export const PMS_SUBPAGES = [{ key: "motor", href: "/producto/motor" }] as const;

/**
 * El video que presenta a cada producto (`public/video/mp4/<pieza>-<idioma>-h|v`).
 * El PMS abre con el del motor; Propiedades y Habitaciones tienen el suyo en
 * su sección. `portada` es el de la home y de /producto.
 */
export const VIDEO_PIECES = [
  "portada",
  "ia",
  "propiedades",
  "habitaciones",
  "motor",
  "informes",
  "revenue",
  "marketing",
] as const;

export type VideoPiece = (typeof VIDEO_PIECES)[number];

export const PRODUCT_VIDEO: Record<ProductKey, VideoPiece> = {
  ia: "ia",
  pms: "propiedades",
  informes: "informes",
  revenue: "revenue",
  marketing: "marketing",
};

/* ================================================================ menús ===
 * El header tiene tres menús desplegables (28-09-2026): Plataforma, Roombir IA
 * y Soluciones, más "Nosotros" suelto. Cada ítem es una página o un ancla de
 * una página; los textos viven en `dict.nav.menus`.
 */

/** Plataforma: todo el sistema, ordenado por lo que hace el hotel con él. */
export const PLATFORM_MENU = [
  {
    key: "operations",
    items: [
      { key: "pms", href: "/producto/pms" },
      { key: "informes", href: "/producto/informes" },
    ],
  },
  {
    key: "distribution",
    items: [
      { key: "motor", href: "/producto/motor" },
      { key: "revenue", href: "/producto/revenue" },
      { key: "linkhub", href: "/producto/marketing#linkhub" },
      { key: "agentes", href: "/producto/marketing#agentes" },
    ],
  },
  {
    key: "marketing",
    items: [
      { key: "web", href: "/producto/marketing#web" },
      { key: "marca", href: "/producto/marketing#marca" },
      { key: "archivos", href: "/producto/marketing#archivos" },
      { key: "resenas", href: "/producto/marketing#resenas" },
    ],
  },
] as const;

/** La página de la plataforma de un vistazo: la abre la tarjeta comercial del menú. */
export const PLATFORM_OVERVIEW_HREF = "/plataforma-completa";

export type PlatformGroupKey = (typeof PLATFORM_MENU)[number]["key"];
export type PlatformItemKey = (typeof PLATFORM_MENU)[number]["items"][number]["key"];

/** Roombir IA: la tarjeta destacada a la izquierda y las secciones de su página. */
export const IA_MENU = [
  { key: "pedidos", href: "/producto/ia#pedidos" },
  { key: "destino", href: "/producto/ia#destino" },
  { key: "estrategia", href: "/producto/ia#estrategia" },
  { key: "permisos", href: "/producto/ia#permisos" },
  { key: "hablar", href: "/producto/ia#como-se-le-habla" },
  { key: "diferencia", href: "/producto/ia#diferencia" },
] as const;

/** Intelligence: la cuarta columna del menú Roombir IA lleva a su página. */
export const INTELLIGENCE_HREF = "/producto/intelligence";

export type IaItemKey = (typeof IA_MENU)[number]["key"];

/**
 * Soluciones: por tipo de alojamiento (las dos formas de vender que soporta
 * el sistema: por categoría o por unidad con nombre propio) y por cargo (los
 * espacios de trabajo modelo). Cada una es una página de
 * `app/[lang]/soluciones/[solucion]`; la clave indexa `dict.solucionesPaginas`
 * y el segmento es la carpeta interna, en castellano.
 */
export const SOLUTION_TYPES = ["hoteles", "alojamientos"] as const;
export const SOLUTION_ROLES = [
  "propietarios",
  "direccion",
  "revenue",
  "recepcion",
  "housekeeping",
] as const;

export const SOLUTION_KEYS = [...SOLUTION_TYPES, ...SOLUTION_ROLES] as const;
export type SolutionKey = (typeof SOLUTION_KEYS)[number];

export const SOLUTION_SEGMENTS: Record<SolutionKey, string> = {
  hoteles: "hoteles",
  alojamientos: "cabanas-y-alquileres",
  propietarios: "propietarios",
  direccion: "direccion-general",
  revenue: "revenue-managers",
  recepcion: "recepcion",
  housekeeping: "housekeeping",
};

export const SOLUTION_HREFS = Object.fromEntries(
  SOLUTION_KEYS.map((key) => [key, `/soluciones/${SOLUTION_SEGMENTS[key]}`]),
) as Record<SolutionKey, string>;

export function solutionFromSegment(segment: string): SolutionKey | null {
  return SOLUTION_KEYS.find((key) => SOLUTION_SEGMENTS[key] === segment) ?? null;
}

export const SOLUTIONS_MENU = [
  { key: "byType", items: SOLUTION_TYPES },
  { key: "byRole", items: SOLUTION_ROLES },
] as const;

export type SolutionGroupKey = (typeof SOLUTIONS_MENU)[number]["key"];

/** Los enlaces sueltos del header, a la derecha de los tres menús. */
export const MAIN_NAV = [{ key: "about", href: "/nosotros" }] as const;

export type MainNavKey = (typeof MAIN_NAV)[number]["key"];

/**
 * Las comparativas con nombre y apellido. La clave es lo que indexa el
 * diccionario (`comparar.rivals.<clave>`); el slug es lo que va en la URL y
 * en `routes.ts`. Son distintos porque "little-hotelier" no puede ser una
 * clave de objeto sin comillas y "littlehotelier" no es una URL que alguien
 * escriba.
 *
 * APARTADAS desde el 28-09-2026 (`parked/app/comparar`): su argumento central
 * era el precio publicado, la permanencia y la comisión, y el sitio no habla
 * de precios hasta que la política comercial esté decidida. Las constantes
 * quedan para cuando vuelvan.
 */
export const RIVAL_KEYS = ["cloudbeds", "littlehotelier", "amenitiz", "mews"] as const;

export type RivalKey = (typeof RIVAL_KEYS)[number];

export const RIVAL_SLUGS: Record<RivalKey, string> = {
  cloudbeds: "cloudbeds",
  littlehotelier: "little-hotelier",
  amenitiz: "amenitiz",
  mews: "mews",
};

export const RIVAL_HREFS: Record<RivalKey, string> = {
  cloudbeds: "/comparar/cloudbeds",
  littlehotelier: "/comparar/little-hotelier",
  amenitiz: "/comparar/amenitiz",
  mews: "/comparar/mews",
};

export function rivalFromSlug(slug: string): RivalKey | null {
  const hit = RIVAL_KEYS.find((key) => RIVAL_SLUGS[key] === slug);
  return hit ?? null;
}

export const COMPANY_LINKS = [
  { key: "about", href: "/nosotros" },
  { key: "contact", href: "/contacto" },
] as const;

export type CompanyKey = (typeof COMPANY_LINKS)[number]["key"];

export const LEGAL_LINKS = [
  { key: "privacy", href: "/legal/privacidad" },
  { key: "terms", href: "/legal/terminos" },
  { key: "siteTerms", href: "/legal/terminos-del-sitio" },
  { key: "cookies", href: "/legal/cookies" },
] as const;

export type LegalKey = (typeof LEGAL_LINKS)[number]["key"];
