import { NextResponse } from "next/server";
import { internalApiUrl } from "@/lib/siteConfig";
import { isLocale } from "@/i18n/config";

/**
 * El formulario de leads, reenviado desde el servidor.
 *
 * `LeadForm` postea acá y este handler llama al API interno. El rodeo no es
 * decorativo: posteando derecho desde el navegador el pedido no llega nunca.
 *
 * 1. **CORS.** El API interno sólo autoriza el origen del panel (`WEB_URL`).
 *    Desde `bookfer.com` el preflight devuelve
 *    `Access-Control-Allow-Origin: https://internal.bookfer.com`, el browser
 *    corta el POST y el visitante ve "Error de red" con el lead perdido. Del
 *    lado del servidor no hay origen que validar: es la misma llamada que ya
 *    hace `plansApi` para traer los precios, y por eso ésa sí funciona.
 * 2. **El idioma.** El schema del endpoint no acepta claves desconocidas, así
 *    que un `locale` suelto arriba lo rechaza con 400. Viaja dentro de `utm`,
 *    que sí acepta cualquier clave de texto y termina entero en el payload de
 *    `lead.captured` — que es donde alguien lo va a leer para contestar en el
 *    idioma en el que preguntaron.
 *
 * Lo que NO arregla: el rate-limit del API cuenta por IP, y desde acá todos
 * los envíos comparten la del servidor. Por eso el límite propio de abajo es
 * el que hace el trabajo real, contra la IP de verdad del visitante.
 */

const API_ENDPOINT = `${internalApiUrl}/public/mkt/leads`;

/** Cinco envíos por IP cada diez minutos. Un formulario, no una API. */
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  // La limpieza va acá y no en un intervalo: sin proceso de fondo el mapa no
  // puede crecer sin techo en una instancia de vida larga.
  for (const [key, entry] of hits) if (entry.resetAt < now) hits.delete(key);

  const entry = hits.get(ip);
  if (!entry) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_WINDOW;
}

/** La IP del visitante, no la del proxy que tenemos delante. */
function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

const str = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = str(body.email, 320);
  if (!email.includes("@")) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  // El campo trampa: el cliente ya finge éxito al detectarlo, pero un bot que
  // postea acá directo se saltea ese chequeo. Devolvemos 201 sin escribir
  // nada, porque un error le diría al script que reintente distinto.
  if (str(body.website, 200).length > 0) {
    return NextResponse.json({ received: true }, { status: 201 });
  }

  const utm: Record<string, string> = {};
  const rawUtm = body.utm;
  if (rawUtm && typeof rawUtm === "object") {
    for (const [key, value] of Object.entries(rawUtm as Record<string, unknown>)) {
      const clean = str(value, 200);
      if (clean && key.startsWith("utm_")) utm[key] = clean;
    }
  }
  const locale = str(body.locale, 5);
  if (isLocale(locale)) utm.lang = locale;

  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: str(body.name, 160),
        email,
        phone: str(body.phone, 40),
        company: str(body.company, 200),
        message: str(body.message, 4000),
        siteId: str(body.siteId, 120),
        utm,
      }),
      // Un lead no se cachea ni se reintenta solo.
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    if (!res.ok) {
      const detail = await res.json().catch(() => ({}));
      // El detalle del API interno no sale al navegador: dice cosas de su
      // propio dominio. Queda en el log del servidor, que es donde se mira.
      console.error("[lead] el API interno respondió", res.status, detail);
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }

    return NextResponse.json({ received: true }, { status: 201 });
  } catch (err) {
    console.error("[lead] no se pudo llegar al API interno", err);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
