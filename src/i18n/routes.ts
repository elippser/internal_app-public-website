import { LOCALES, type Locale } from "./config";

/**
 * El mapa de rutas del sitio, con el slug traducido de cada página.
 *
 * Hay DOS formas de nombrar la misma página y conviene tenerlas claras:
 *
 * - La **ruta interna**: la carpeta real en `src/app/[lang]/…`, siempre en
 *   castellano (`/producto/ia`). Es lo que ve Next, lo que ve el panel interno
 *   en su árbol de archivos y lo que se escribe en el código.
 * - El **slug público**: lo que ve el visitante y lo que indexa el buscador
 *   (`/en/platform/ai`). Uno por idioma.
 *
 * El `middleware` traduce de público a interno con un `rewrite`, así que la
 * barra de direcciones muestra el slug del idioma pero Next sigue sirviendo la
 * misma página estática. Y si alguien entra con el slug de OTRO idioma
 * —`/en/producto/ia`— lo redirige al que corresponde, para no tener la misma
 * página viva en dos URLs.
 *
 * Regla al agregar una página: la carpeta va en castellano, la fila va acá, y
 * los cinco slugs se escriben a mano. No hay traducción automática de rutas: un
 * slug es contenido de SEO, no una cadena más.
 */

export interface RouteDef {
  /** La carpeta real bajo `src/app/[lang]`. */
  path: string;
  /** El slug público por idioma. */
  slugs: Record<Locale, string>;
}

export const ROUTES = {
  home: {
    path: "/",
    slugs: { es: "/", en: "/", pt: "/", fr: "/", de: "/" },
  },
  producto: {
    path: "/producto",
    slugs: {
      es: "/producto",
      en: "/platform",
      pt: "/plataforma",
      fr: "/plateforme",
      de: "/plattform",
    },
  },
  reservas: {
    path: "/producto/reservas",
    slugs: {
      es: "/producto/reservas",
      en: "/platform/bookings",
      pt: "/plataforma/reservas",
      fr: "/plateforme/reservations",
      de: "/plattform/buchungen",
    },
  },
  motor: {
    path: "/producto/motor",
    slugs: {
      es: "/producto/motor",
      en: "/platform/booking-engine",
      pt: "/plataforma/motor-de-reservas",
      fr: "/plateforme/moteur-de-reservation",
      de: "/plattform/buchungsmaschine",
    },
  },
  revenue: {
    path: "/producto/revenue",
    slugs: {
      es: "/producto/revenue",
      en: "/platform/revenue-management",
      pt: "/plataforma/revenue-management",
      fr: "/plateforme/revenue-management",
      de: "/plattform/revenue-management",
    },
  },
  sitios: {
    path: "/producto/sitios",
    slugs: {
      es: "/producto/sitios",
      en: "/platform/website",
      pt: "/plataforma/site",
      fr: "/plateforme/site-web",
      de: "/plattform/website",
    },
  },
  ia: {
    path: "/producto/ia",
    slugs: {
      es: "/producto/ia",
      en: "/platform/ai",
      pt: "/plataforma/ia",
      fr: "/plateforme/ia",
      de: "/plattform/ki",
    },
  },
  agentes: {
    path: "/producto/agentes",
    slugs: {
      es: "/producto/agentes",
      en: "/platform/agentic",
      pt: "/plataforma/agentes",
      fr: "/plateforme/agentique",
      de: "/plattform/agenten",
    },
  },
  soluciones: {
    path: "/soluciones",
    slugs: {
      es: "/soluciones",
      en: "/solutions",
      pt: "/solucoes",
      fr: "/solutions",
      de: "/loesungen",
    },
  },
  precios: {
    path: "/precios",
    slugs: {
      es: "/precios",
      en: "/pricing",
      pt: "/precos",
      fr: "/tarifs",
      de: "/preise",
    },
  },
  nosotros: {
    path: "/nosotros",
    slugs: {
      es: "/nosotros",
      en: "/about",
      pt: "/sobre-nos",
      fr: "/a-propos",
      de: "/ueber-uns",
    },
  },
  contacto: {
    path: "/contacto",
    slugs: {
      es: "/contacto",
      en: "/contact",
      pt: "/contato",
      fr: "/contact",
      de: "/kontakt",
    },
  },
  privacidad: {
    path: "/legal/privacidad",
    slugs: {
      es: "/legal/privacidad",
      en: "/legal/privacy",
      pt: "/legal/privacidade",
      fr: "/legal/confidentialite",
      de: "/legal/datenschutz",
    },
  },
  terminos: {
    path: "/legal/terminos",
    slugs: {
      es: "/legal/terminos",
      en: "/legal/terms",
      pt: "/legal/termos",
      fr: "/legal/conditions",
      de: "/legal/agb",
    },
  },
  cookies: {
    path: "/legal/cookies",
    slugs: {
      es: "/legal/cookies",
      en: "/legal/cookies",
      pt: "/legal/cookies",
      fr: "/legal/cookies",
      de: "/legal/cookies",
    },
  },
  /* La vista previa del módulo de precios que embebe el panel interno. No se
     traduce: no es una página del sitio y su URL está escrita en
     `planscode.service.ts` del API. */
  previewPlans: {
    path: "/preview/plans",
    slugs: {
      es: "/preview/plans",
      en: "/preview/plans",
      pt: "/preview/plans",
      fr: "/preview/plans",
      de: "/preview/plans",
    },
  },
} as const satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

/** Las páginas que van al sitemap: todas menos la vista previa interna. */
export const PUBLIC_ROUTE_KEYS = (Object.keys(ROUTES) as RouteKey[]).filter(
  (key) => key !== "previewPlans",
);

/** Ruta interna → clave. Es como se resuelve un `href` escrito en el código. */
const BY_PATH = new Map<string, RouteKey>(
  (Object.keys(ROUTES) as RouteKey[]).map((key) => [ROUTES[key].path, key]),
);

/**
 * Cualquier slug, de cualquier idioma → clave. Se arma a pedido y se cachea:
 *
 * Que estén TODOS los idiomas en el mismo índice es lo que permite dos cosas:
 * detectar que `/en/producto/ia` es la página `ia` escrita en el idioma
 * equivocado (y redirigir), y que el selector de idioma funcione sin importar
 * si el pathname que recibe es el público o el interno.
 */
let BY_SLUG: Map<string, RouteKey> | null = null;

function slugIndex(): Map<string, RouteKey> {
  if (BY_SLUG) return BY_SLUG;
  const index = new Map<string, RouteKey>();
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    index.set(ROUTES[key].path, key);
    for (const locale of LOCALES) index.set(ROUTES[key].slugs[locale], key);
  }
  BY_SLUG = index;
  return index;
}

/** Separa `/precios#planes` en su ruta y su ancla. */
function splitHash(href: string): [string, string] {
  const i = href.indexOf("#");
  if (i === -1) return [href, ""];
  return [href.slice(0, i), href.slice(i)];
}

function clean(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

/** La clave de una ruta escrita de cualquier forma, o `null` si no existe. */
export function routeKeyOf(pathWithoutLocale: string): RouteKey | null {
  return slugIndex().get(clean(pathWithoutLocale)) ?? null;
}

/** La clave de una ruta interna (la que se escribe en el código). */
export function routeKeyOfInternal(path: string): RouteKey | null {
  return BY_PATH.get(clean(path)) ?? null;
}

/** El slug público de una página en un idioma, con su prefijo. */
export function publicPath(locale: Locale, key: RouteKey): string {
  const slug = ROUTES[key].slugs[locale];
  return slug === "/" ? `/${locale}` : `/${locale}${slug}`;
}

/** La ruta interna con prefijo, que es lo que Next tiene que renderizar. */
export function internalPath(locale: Locale, key: RouteKey): string {
  const path = ROUTES[key].path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Traduce un `href` escrito en el código —siempre con la ruta interna, en
 * castellano— al slug público del idioma activo, conservando el ancla.
 *
 * Si el href no está en el mapa se devuelve prefijado tal cual: es preferible
 * un enlace que va a algún lado a uno que revienta el render.
 */
export function localizedHref(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  const [path, hash] = splitHash(href);
  const key = routeKeyOfInternal(path);
  if (!key) return `/${locale}${path === "/" ? "" : path}${hash}`;
  return `${publicPath(locale, key)}${hash}`;
}

/**
 * Los `hreflang` de una página: la misma página en los cinco idiomas, cada uno
 * con SU slug. Es la mitad del trabajo de tener URLs traducidas — sin esto, el
 * buscador ve cinco páginas distintas en vez de cinco versiones de una.
 */
export function alternatesFor(locale: Locale, href: string) {
  const [path] = splitHash(href);
  const key = routeKeyOfInternal(path);
  if (!key) return { canonical: `/${locale}${path === "/" ? "" : path}` };

  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = publicPath(l, key);
  languages["x-default"] = publicPath("es", key);

  return { canonical: publicPath(locale, key), languages };
}
