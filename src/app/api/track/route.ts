import type { NextRequest } from "next/server";
import { countryOf } from "@/i18n/geo";
import { regionOf } from "@/lib/geoRegion";
import { internalApiUrl } from "@/lib/siteConfig";

/**
 * Recolector de la telemetría del sitio (`lib/track.ts`). Mismo origen, como
 * el `/api/track` del LinkHub y del web-renderer, por tres razones:
 *
 * 1. el secret del API interno vive acá y nunca baja al navegador;
 * 2. acá se ve la IP real (Traefik la deja en `X-Real-IP`) y con ella el país,
 *    y la provincia (base de DB-IP, `lib/geoRegion.ts`; sin ella, la tabla del
 *    idioma da sólo el país). La IP no se reenvía ni se guarda;
 * 3. los bloqueadores de anuncios no cortan un endpoint propio, así que el
 *    número se parece más a la realidad que el de un script de terceros.
 *
 * Devuelve 204 pase lo que pase: es telemetría, no le puede romper nada a nadie.
 */

const ENDPOINT = `${internalApiUrl}/public/mkt/events`;
const SECRET = process.env.INTERNAL_API_SECRET ?? "";

/**
 * Lo que no es una persona. Sin JS no llega acá, pero los navegadores
 * automatizados sí ejecutan JS (los previews de enlaces, Lighthouse, nuestras
 * propias pruebas con Playwright).
 */
const BOT =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|prerender|phantom|puppeteer|playwright|facebookexternalhit|embedly|monitor|uptime|curl|wget|python|axios|node-fetch/i;

/** Un techo por IP: un sitio de marketing no genera más de esto por persona. */
const WINDOW_MS = 60_000;
const MAX_EVENTS = 400;
const hits = new Map<string, { count: number; resetAt: number }>();

function overLimit(ip: string, n: number): boolean {
  const now = Date.now();
  for (const [key, entry] of hits) if (entry.resetAt < now) hits.delete(key);
  const entry = hits.get(ip) ?? { count: 0, resetAt: now + WINDOW_MS };
  entry.count += n;
  hits.set(ip, entry);
  return entry.count > MAX_EVENTS;
}

function browserOf(ua: string): string {
  if (/edg\//i.test(ua)) return "Edge";
  if (/opr\/|opera/i.test(ua)) return "Opera";
  if (/samsungbrowser/i.test(ua)) return "Samsung";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  if (/chrome|crios/i.test(ua)) return "Chrome";
  if (/safari/i.test(ua)) return "Safari";
  return "Otro";
}

function osOf(ua: string): string {
  if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
  if (/android/i.test(ua)) return "Android";
  if (/windows/i.test(ua)) return "Windows";
  if (/mac os x|macintosh/i.test(ua)) return "macOS";
  if (/cros/i.test(ua)) return "ChromeOS";
  if (/linux/i.test(ua)) return "Linux";
  return "Otro";
}

const NO_CONTENT = () => new Response(null, { status: 204 });

export async function POST(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua || BOT.test(ua)) return NO_CONTENT();

  let body: { events?: unknown };
  try {
    body = await req.json();
  } catch {
    return NO_CONTENT();
  }
  const events = Array.isArray(body?.events) ? body.events.slice(0, 50) : [];
  if (!events.length) return NO_CONTENT();

  const ip =
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (overLimit(ip, events.length)) return NO_CONTENT();

  if (!SECRET) {
    console.warn("[track] INTERNAL_API_SECRET vacío: eventos del sitio descartados");
    return NO_CONTENT();
  }

  const geo = regionOf(ip);
  const country = geo?.country ?? countryOf(req.headers);
  const region = geo?.region ?? null;
  const browser = browserOf(ua);
  const os = osOf(ua);
  const enriched = events
    .filter((e): e is Record<string, unknown> => Boolean(e) && typeof e === "object")
    .map((e) => ({ ...e, country, region, browser, os }));

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Internal-Secret": SECRET },
      body: JSON.stringify({ events: enriched }),
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) console.warn("[track] el API interno respondió", res.status);
  } catch (err) {
    console.warn("[track] no se pudo llegar al API interno:", err instanceof Error ? err.message : err);
  }
  return NO_CONTENT();
}
