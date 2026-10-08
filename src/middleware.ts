import { NextResponse, type NextRequest } from "next/server";
import { isLocale, type Locale } from "@/i18n/config";
import { countryOf, localeFor } from "@/i18n/geo";
import {
  ROUTES,
  internalPath,
  legacyRedirect,
  publicPath,
  routeKeyOf,
} from "@/i18n/routes";

/**
 * Mete todo el tráfico dentro de un idioma y traduce los slugs.
 *
 * Cada página vive bajo `/[lang]/…` con la carpeta en castellano, pero lo que
 * ve el visitante es el slug de SU idioma. Este middleware es la bisagra entre
 * las dos cosas y hace tres trabajos:
 *
 * 1. **Prefijar.** Una URL sin idioma —`/precios`, o los enlaces del sitio
 *    viejo, o el `/preview/plans` que embebe el panel interno— se redirige al
 *    idioma que corresponda: el que el visitante eligió en el selector (cookie)
 *    o, si nunca eligió, el del país de su IP; un país cuyo idioma no tenemos
 *    va a inglés. Las URLs que ya traen idioma se respetan: son enlaces
 *    compartidos o resultados del buscador en ese idioma.
 *
 * 2. **Traducir.** `/en/platform/ai` se reescribe a `/en/producto/ia`, que es
 *    la carpeta real. La barra de direcciones no cambia: el visitante y el
 *    buscador ven el slug en inglés, Next sirve la página estática de siempre.
 *
 * 3. **Corregir.** `/en/producto/ia` es la página correcta escrita en el
 *    idioma equivocado; se redirige a `/en/platform/ai`. Sin esto la misma
 *    página quedaría viva en dos URLs y compitiendo consigo misma en el
 *    índice, que es justo lo que las URLs traducidas vienen a evitar.
 */

export const LOCALE_COOKIE = "roombir_lang";

/** Rutas que sirve el filesystem y no pasan por el idioma. */
const PASSTHROUGH = new Set([
  "/favicon.ico",
  "/icon.svg",
  "/llms.txt",
  "/robots.txt",
  "/sitemap.xml",
  // Lo genera `src/app/manifest.ts`; Next lo publica con esta extensión.
  "/manifest.webmanifest",
]);

/**
 * 308 a la página que reemplazó a una que ya no existe. `target` trae el slug
 * y, si corresponde, el ancla (`/es/producto/marketing#agentes`): el ancla va
 * en `hash`, no pegada al pathname, o se codifica como `%23`.
 */
function legacyResponse(request: NextRequest, target: string) {
  const url = request.nextUrl.clone();
  const i = target.indexOf("#");
  url.pathname = i === -1 ? target : target.slice(0, i);
  url.hash = i === -1 ? "" : target.slice(i);
  return NextResponse.redirect(url, 308);
}

function chooseLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return localeFor(countryOf(request.headers), request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PASSTHROUGH.has(pathname)) return NextResponse.next();

  const segments = pathname.split("/");
  const first = segments[1] ?? "";

  // ------------------------------------------------------------- 1. prefijar
  if (!isLocale(first)) {
    const locale = chooseLocale(request);
    const legacy = legacyRedirect(locale, pathname);
    if (legacy) return legacyResponse(request, legacy);
    const key = routeKeyOf(pathname);
    const url = request.nextUrl.clone();
    // Si la ruta sin prefijo es una página conocida, se manda directo a su
    // slug traducido: un enlace viejo a `/precios` no debería aterrizar en
    // `/en/precios` para después rebotar otra vez.
    url.pathname = key ? publicPath(locale, key) : `/${locale}${pathname === "/" ? "" : pathname}`;
    // Depende de la IP y la cookie de cada visitante: que nadie en el camino
    // la guarde y le sirva a uno el idioma de otro.
    const res = NextResponse.redirect(url);
    res.headers.set("Cache-Control", "private, no-store");
    return res;
  }

  const locale = first;
  const rest = "/" + segments.slice(2).join("/");
  const key = routeKeyOf(rest);

  // Una página que ya no existe (las seis de producto de antes del
  // 22-09-2026): 308 a la que la reemplazó, en el mismo idioma.
  if (!key) {
    const legacy = legacyRedirect(locale, rest);
    if (legacy) return legacyResponse(request, legacy);
  }

  // Ruta desconocida: que siga y caiga en el 404 del idioma, con su chrome.
  if (!key) return NextResponse.next();

  // --------------------------------------------------------- 3. corregir
  const own = ROUTES[key].slugs[locale];
  if (rest.replace(/\/$/, "") !== own.replace(/\/$/, "") && rest !== "/") {
    const url = request.nextUrl.clone();
    url.pathname = publicPath(locale, key);
    // 308 (permanente) y no 307: `/en/producto/ia` es SIEMPRE la URL
    // equivocada de `/en/platform/ai` — que el buscador consolide la señal en
    // la buena y deje de pedir la otra. La detección de idioma de arriba sí
    // queda en 307: depende de cookie y Accept-Language, no es permanente.
    return NextResponse.redirect(url, 308);
  }

  // --------------------------------------------------------- 2. traducir
  const target = internalPath(locale, key);
  if (target === pathname.replace(/\/$/, "") || target === pathname) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.rewrite(url);
}

export const config = {
  /**
   * Todo menos los internos de Next y cualquier cosa con extensión. El negado
   * de la extensión es lo que deja pasar los archivos de `public/` sin
   * enumerarlos uno por uno.
   */
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
