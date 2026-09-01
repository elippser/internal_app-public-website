import { NextResponse, type NextRequest } from "next/server";
import { isLocale, pickLocale, type Locale } from "@/i18n/config";
import { ROUTES, internalPath, publicPath, routeKeyOf } from "@/i18n/routes";

/**
 * Mete todo el tráfico dentro de un idioma y traduce los slugs.
 *
 * Cada página vive bajo `/[lang]/…` con la carpeta en castellano, pero lo que
 * ve el visitante es el slug de SU idioma. Este middleware es la bisagra entre
 * las dos cosas y hace tres trabajos:
 *
 * 1. **Prefijar.** Una URL sin idioma —`/precios`, o los enlaces del sitio
 *    viejo, o el `/preview/plans` que embebe el panel interno— se redirige al
 *    idioma que corresponda según la cookie o el `Accept-Language`.
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

export const LOCALE_COOKIE = "bookfer_lang";

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

function chooseLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return pickLocale(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PASSTHROUGH.has(pathname)) return NextResponse.next();

  const segments = pathname.split("/");
  const first = segments[1] ?? "";

  // ------------------------------------------------------------- 1. prefijar
  if (!isLocale(first)) {
    const locale = chooseLocale(request);
    const key = routeKeyOf(pathname);
    const url = request.nextUrl.clone();
    // Si la ruta sin prefijo es una página conocida, se manda directo a su
    // slug traducido: un enlace viejo a `/precios` no debería aterrizar en
    // `/en/precios` para después rebotar otra vez.
    url.pathname = key ? publicPath(locale, key) : `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const locale = first;
  const rest = "/" + segments.slice(2).join("/");
  const key = routeKeyOf(rest);

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
