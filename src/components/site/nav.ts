/**
 * El mapa del sitio: sólo la estructura, sin una sola palabra traducible.
 *
 * Las rutas se escriben una vez, en castellano y sin prefijo de idioma
 * (`/producto/motor`); `localePath()` les pone el idioma activo al render.
 * Los textos —títulos y descripciones— viven en `src/i18n/dict/*.ts` y se
 * buscan por estas mismas claves.
 *
 * Lo consumen el header (mega menú y cajón móvil), el pie y `sitemap.ts`. Si
 * una página nueva no aparece acá, no la encuentra nadie: crear la carpeta en
 * `src/app/[lang]` es la mitad del trabajo, la otra mitad es esta lista.
 */

export const PRODUCT_KEYS = [
  "reservas",
  "motor",
  "revenue",
  "sitios",
  "ia",
  "agentes",
] as const;

export type ProductKey = (typeof PRODUCT_KEYS)[number];

export const PRODUCT_HREFS: Record<ProductKey, string> = {
  reservas: "/producto/reservas",
  motor: "/producto/motor",
  revenue: "/producto/revenue",
  sitios: "/producto/sitios",
  ia: "/producto/ia",
  agentes: "/producto/agentes",
};

/** Las tres columnas del mega menú. */
export const PRODUCT_GROUPS = [
  { key: "operation", items: ["reservas", "motor"] },
  { key: "growth", items: ["revenue", "sitios"] },
  { key: "newLayer", items: ["ia", "agentes"] },
] as const satisfies readonly {
  key: "operation" | "growth" | "newLayer";
  items: readonly ProductKey[];
}[];

/** Los enlaces sueltos del header, a la derecha de "Producto". */
export const MAIN_NAV = [
  { key: "solutions", href: "/soluciones" },
  { key: "pricing", href: "/precios" },
  { key: "about", href: "/nosotros" },
] as const;

export type MainNavKey = (typeof MAIN_NAV)[number]["key"];

/** Anclas de la página de soluciones, que el pie lista como columna. */
export const SOLUTION_KEYS = [
  "hoteles",
  "cabanas",
  "hostels",
  "glamping",
  "grupos",
] as const;

export type SolutionKey = (typeof SOLUTION_KEYS)[number];

export const COMPANY_LINKS = [
  { key: "about", href: "/nosotros" },
  { key: "status", href: "/nosotros#estado" },
  { key: "pricing", href: "/precios" },
  { key: "contact", href: "/contacto" },
] as const;

export type CompanyKey = (typeof COMPANY_LINKS)[number]["key"];

export const LEGAL_LINKS = [
  { key: "privacy", href: "/legal/privacidad" },
  { key: "terms", href: "/legal/terminos" },
  { key: "cookies", href: "/legal/cookies" },
] as const;

export type LegalKey = (typeof LEGAL_LINKS)[number]["key"];
