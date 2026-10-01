import type { RouteKey } from "@/i18n/routes";

/**
 * Los documentos del centro legal, en el orden en que se listan en la cabecera
 * y en el pie. `key` indexa `dict.legalCenter.nav`; `route`, el mapa de rutas.
 */
export const LEGAL_DOCS = [
  { key: "terms", route: "terminos" },
  { key: "siteTerms", route: "terminosSitio" },
  { key: "privacy", route: "privacidad" },
  { key: "cookies", route: "cookies" },
] as const satisfies readonly { key: string; route: RouteKey }[];

export type LegalNavKey = (typeof LEGAL_DOCS)[number]["key"];
