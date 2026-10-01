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
  /* Intelligence (28-09-2026): el servicio de inteligencia y datos que usa
     Roombir IA. "Intelligence" es nombre propio: no se traduce el slug. */
  intelligence: {
    path: "/producto/intelligence",
    slugs: {
      es: "/producto/intelligence",
      en: "/platform/intelligence",
      pt: "/plataforma/intelligence",
      fr: "/plateforme/intelligence",
      de: "/plattform/intelligence",
    },
  },
  /* La plataforma de un vistazo (28-09-2026): el botón de la tarjeta
     comercial del menú Plataforma. No cuelga de `/plataforma` porque ese es
     el slug en pt de `producto`. */
  plataformaCompleta: {
    path: "/plataforma-completa",
    slugs: {
      es: "/plataforma-completa",
      en: "/platform/overview",
      pt: "/plataforma/visao-geral",
      fr: "/plateforme/vue-d-ensemble",
      de: "/plattform/ueberblick",
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
  /* El PMS: la vista de conjunto de Propiedades, Habitaciones, Reservas y
     Motor, que tienen su página cada una. "PMS" es la palabra de la
     categoría en los cinco idiomas, así que el slug no se traduce. */
  pms: {
    path: "/producto/pms",
    slugs: {
      es: "/producto/pms",
      en: "/platform/pms",
      pt: "/plataforma/pms",
      fr: "/plateforme/pms",
      de: "/plattform/pms",
    },
  },
  /* El Motor de reservas tiene página propia (29-09-2026); Propiedades,
     Habitaciones y Reservas son las secciones de /producto/pms y sus slugs
     viejos redirigen ahí (ver LEGACY_ROUTES). */
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
  informes: {
    path: "/producto/informes",
    slugs: {
      es: "/producto/informes",
      en: "/platform/reports",
      pt: "/plataforma/relatorios",
      fr: "/plateforme/rapports",
      de: "/plattform/berichte",
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
  marketing: {
    path: "/producto/marketing",
    slugs: {
      es: "/producto/marketing",
      en: "/platform/marketing",
      pt: "/plataforma/marketing",
      fr: "/plateforme/marketing",
      de: "/plattform/marketing",
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
  /* Las páginas de soluciones (28-09-2026): por tipo de alojamiento —las dos
     formas de vender: por categoría o por unidad— y por cargo. Todas las
     sirve `app/[lang]/soluciones/[solucion]`; la clave y el segmento están en
     `SOLUTION_SEGMENTS` de nav.ts y tienen que coincidir con `path`. */
  solHoteles: {
    path: "/soluciones/hoteles",
    slugs: {
      es: "/soluciones/hoteles",
      en: "/solutions/hotels",
      pt: "/solucoes/hoteis",
      fr: "/solutions/hotels",
      de: "/loesungen/hotels",
    },
  },
  solAlojamientos: {
    path: "/soluciones/cabanas-y-alquileres",
    slugs: {
      es: "/soluciones/cabanas-y-alquileres",
      en: "/solutions/vacation-rentals",
      pt: "/solucoes/chales-e-temporada",
      fr: "/solutions/locations-saisonnieres",
      de: "/loesungen/ferienunterkuenfte",
    },
  },
  solPropietarios: {
    path: "/soluciones/propietarios",
    slugs: {
      es: "/soluciones/propietarios",
      en: "/solutions/owners",
      pt: "/solucoes/proprietarios",
      fr: "/solutions/proprietaires",
      de: "/loesungen/eigentuemer",
    },
  },
  solDireccion: {
    path: "/soluciones/direccion-general",
    slugs: {
      es: "/soluciones/direccion-general",
      en: "/solutions/general-managers",
      pt: "/solucoes/gerencia-geral",
      fr: "/solutions/direction-generale",
      de: "/loesungen/geschaeftsfuehrung",
    },
  },
  solRevenue: {
    path: "/soluciones/revenue-managers",
    slugs: {
      es: "/soluciones/revenue-managers",
      en: "/solutions/revenue-managers",
      pt: "/solucoes/revenue-managers",
      fr: "/solutions/revenue-managers",
      de: "/loesungen/revenue-manager",
    },
  },
  solRecepcion: {
    path: "/soluciones/recepcion",
    slugs: {
      es: "/soluciones/recepcion",
      en: "/solutions/front-desk",
      pt: "/solucoes/recepcao",
      fr: "/solutions/reception",
      de: "/loesungen/rezeption",
    },
  },
  solHousekeeping: {
    path: "/soluciones/housekeeping",
    slugs: {
      es: "/soluciones/housekeeping",
      en: "/solutions/housekeeping",
      pt: "/solucoes/governanca",
      fr: "/solutions/etages",
      de: "/loesungen/housekeeping",
    },
  },
  /* `precios` y las comparativas (`/comparar`, `/comparar/<rival>`) salieron
     del mapa el 28-09-2026: el sitio no habla de precios hasta que la política
     comercial esté decidida. Sus slugs viven en `LEGACY_ROUTES` (308) y sus
     páginas en `parked/app/`. */
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
  /* El alta. Es la unica puerta de entrada a la plataforma: el /register
     del PMS no abre sin el invite que sale de este formulario. Por eso el CTA
     "empezar gratis" de todo el sitio apunta aca y no al dominio del PMS. */
  crearCuenta: {
    path: "/crear-cuenta",
    slugs: {
      es: "/crear-cuenta",
      en: "/create-account",
      pt: "/criar-conta",
      fr: "/creer-compte",
      de: "/konto-erstellen",
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
  /* Los Términos y Condiciones del SOFTWARE: el contrato que se acepta antes
     de crear la cuenta. Los del sitio web son `terminosSitio`. */
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
  /* Los términos de uso del SITIO: rigen para quien navega sin cuenta y sin
     contrato (roombir-legal-spec-sitio.md). */
  terminosSitio: {
    path: "/legal/terminos-del-sitio",
    slugs: {
      es: "/legal/terminos-del-sitio",
      en: "/legal/site-terms",
      pt: "/legal/termos-do-site",
      fr: "/legal/conditions-du-site",
      de: "/legal/nutzungsbedingungen",
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
  /* El video de portada como página: una línea de tiempo en HTML que se
     reproduce sola (y se graba con Playwright). "video" se escribe igual en los
     cinco idiomas; no va al sitemap ni al menú, es una pieza de marketing que
     se enlaza a mano. */
  video: {
    path: "/video",
    slugs: {
      es: "/video",
      en: "/video",
      pt: "/video",
      fr: "/video",
      de: "/video",
    },
  },
  /* El video de Roombir IA: la misma técnica que el de portada, con el
     contenido de `/producto/ia`. Tampoco va al sitemap ni al menú. */
  videoIa: {
    path: "/video/ia",
    slugs: {
      es: "/video/ia",
      en: "/video/ai",
      pt: "/video/ia",
      fr: "/video/ia",
      de: "/video/ki",
    },
  },
  /* El video de Propiedades, con el contenido de `/producto/propiedades`.
     Fuera del sitemap y del menú, como los otros videos. */
  videoPropiedades: {
    path: "/video/propiedades",
    slugs: {
      es: "/video/propiedades",
      en: "/video/properties",
      pt: "/video/propriedades",
      fr: "/video/etablissements",
      de: "/video/unterkuenfte",
    },
  },
  /* Los videos de Habitaciones, Motor, Informes, Revenue y Marketing
     (`components/video-tours/`). Fuera del sitemap y del menú. */
  videoHabitaciones: {
    path: "/video/habitaciones",
    slugs: {
      es: "/video/habitaciones",
      en: "/video/rooms",
      pt: "/video/quartos",
      fr: "/video/chambres",
      de: "/video/zimmer",
    },
  },
  videoMotor: {
    path: "/video/motor",
    slugs: {
      es: "/video/motor",
      en: "/video/booking-engine",
      pt: "/video/motor-de-reservas",
      fr: "/video/moteur-de-reservation",
      de: "/video/buchungsmaschine",
    },
  },
  videoInformes: {
    path: "/video/informes",
    slugs: {
      es: "/video/informes",
      en: "/video/reports",
      pt: "/video/relatorios",
      fr: "/video/rapports",
      de: "/video/berichte",
    },
  },
  videoRevenue: {
    path: "/video/revenue",
    slugs: {
      es: "/video/revenue",
      en: "/video/revenue",
      pt: "/video/revenue",
      fr: "/video/revenue",
      de: "/video/revenue",
    },
  },
  videoMarketing: {
    path: "/video/marketing",
    slugs: {
      es: "/video/marketing",
      en: "/video/marketing",
      pt: "/video/marketing",
      fr: "/video/marketing",
      de: "/video/marketing",
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

/** Las páginas que van al sitemap: todas menos la vista previa interna y los videos. */
export const PUBLIC_ROUTE_KEYS = (Object.keys(ROUTES) as RouteKey[]).filter(
  (key) => key !== "previewPlans" && !key.startsWith("video"),
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

/**
 * Páginas que ya no existen, con la página que las reemplaza.
 *
 * El 22-09-2026 las seis páginas de producto pasaron a siete con otro reparto:
 * "Reservas y habitaciones" se partió entre Habitaciones y Motor de reservas,
 * "Sitio web y marca" pasó a ser Marketing, y "Alojamiento agéntico" quedó
 * como una sección de Marketing. El 28-09-2026 las siete pasaron a cinco:
 * Propiedades, Habitaciones y Motor de reservas se fundieron en el PMS, con
 * un ancla por parte. Sus URLs estaban indexadas y enlazadas desde
 * afuera, así que no se tiran: redirigen con 308 al slug nuevo del MISMO
 * idioma en el que se pidieron.
 *
 * Viven fuera de `ROUTES` a propósito: así no entran al sitemap, ni a los
 * `hreflang`, ni al selector de idioma.
 */
type LegacyRoute = {
  slugs: Record<Locale, string>;
  to: RouteKey;
  hash?: string;
};

const LEGACY_ROUTES: readonly LegacyRoute[] = [
  /* 28-09-2026: precios y comparativas apartadas hasta que la política
     comercial esté decidida. Precios manda a contacto (es donde hoy se
     pregunta); las comparativas, a Nosotros. */
  {
    slugs: { es: "/precios", en: "/pricing", pt: "/precos", fr: "/tarifs", de: "/preise" },
    to: "contacto",
  },
  {
    slugs: { es: "/comparar", en: "/compare", pt: "/comparar", fr: "/comparer", de: "/vergleich" },
    to: "nosotros",
  },
  ...["cloudbeds", "little-hotelier", "amenitiz", "mews"].map(
    (rival): LegacyRoute => ({
      slugs: {
        es: `/comparar/${rival}`,
        en: `/compare/${rival}`,
        pt: `/comparar/${rival}`,
        fr: `/comparer/${rival}`,
        de: `/vergleich/${rival}`,
      },
      to: "nosotros",
    }),
  ),
  /* 29-09-2026: Propiedades, Habitaciones y Reservas viven juntas en
     /producto/pms; sus URLs propias redirigen ahí. */
  {
    slugs: {
      es: "/producto/reservas",
      en: "/platform/bookings",
      pt: "/plataforma/reservas",
      fr: "/plateforme/reservations",
      de: "/plattform/buchungen",
    },
    to: "pms",
  },
  {
    slugs: {
      es: "/producto/propiedades",
      en: "/platform/multi-property",
      pt: "/plataforma/propriedades",
      fr: "/plateforme/etablissements",
      de: "/plattform/unterkuenfte",
    },
    to: "pms",
  },
  {
    slugs: {
      es: "/producto/habitaciones",
      en: "/platform/rooms",
      pt: "/plataforma/quartos",
      fr: "/plateforme/chambres",
      de: "/plattform/zimmer",
    },
    to: "pms",
  },
  {
    slugs: {
      es: "/producto/sitios",
      en: "/platform/website",
      pt: "/plataforma/site",
      fr: "/plateforme/site-web",
      de: "/plattform/website",
    },
    to: "marketing",
  },
  {
    slugs: {
      es: "/producto/agentes",
      en: "/platform/agentic",
      pt: "/plataforma/agentes",
      fr: "/plateforme/agentique",
      de: "/plattform/agenten",
    },
    to: "marketing",
    hash: "#agentes",
  },
];

/**
 * Si `pathWithoutLocale` es una página que ya no existe —escrita en cualquier
 * idioma—, a dónde va. Devuelve el slug público nuevo con su ancla, listo
 * para el `Location` del 308.
 */
export function legacyRedirect(locale: Locale, pathWithoutLocale: string): string | null {
  const path = clean(pathWithoutLocale);
  for (const legacy of LEGACY_ROUTES) {
    if (LOCALES.some((l) => legacy.slugs[l] === path)) {
      return `${publicPath(locale, legacy.to)}${legacy.hash ?? ""}`;
    }
  }
  return null;
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
