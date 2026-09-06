import { NextResponse } from "next/server";

import { internalApiUrl } from "@/lib/siteConfig";

/**
 * El alta, reenviada desde el servidor.
 *
 * El formulario de `/crear-cuenta` postea acá y este handler llama al API
 * interno. El rodeo no es decorativo y son tres razones, no una:
 *
 * 1. **CORS.** El API interno autoriza por origen. Aunque `roombir.com` está en
 *    la lista, un POST directo desde el navegador ata el alta a que esa lista
 *    esté bien en cada entorno nuevo; desde el servidor no hay origen que
 *    validar (es la misma llamada que ya hace `plansApi` para los precios).
 * 2. **La IP de verdad.** El API cuenta sus techos por IP. Si el POST saliera
 *    del navegador la vería directo, pero al pasar por acá hay que reenviarla a
 *    mano en `x-forwarded-for` — si no, TODO el tráfico del sitio comparte la
 *    IP del servidor y el primer visitante del día consume la cuota de todos.
 * 3. **Un segundo techo, delante.** El de acá corta el burst antes de gastar
 *    una conexión al API interno. El que hace el trabajo serio sigue siendo el
 *    del API, que es el único que un atacante no puede saltear.
 *
 * Lo que este handler NO hace: decidir. No valida el formulario campo a campo,
 * no consulta si el email ya existe y no arma el correo. Todo eso vive del otro
 * lado, donde el cliente no llega.
 */

const ENDPOINT = `${internalApiUrl}/public/leads`;

/** Tres altas por IP cada diez minutos. Nadie abre tres hoteles en diez minutos. */
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 3;
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
  return req.headers.get("x-real-ip") ?? "";
}

const str = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const int = (value: unknown): number | null => {
  const n = Number(value);
  return Number.isInteger(n) ? n : null;
};

export async function POST(req: Request) {
  const ip = clientIp(req);

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // El campo trampa: el cliente ya finge éxito al detectarlo, pero un bot que
  // postea acá directo se saltea ese chequeo. Se responde 202 sin escribir
  // nada, porque un error le diría al script que reintente distinto.
  if (str(body.website, 200).length > 0) {
    return NextResponse.json({ status: "accepted" }, { status: 202 });
  }

  if (rateLimited(ip || "unknown")) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const email = str(body.email, 254).toLowerCase();
  if (!email.includes("@")) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const utm =
    body.utm && typeof body.utm === "object" && !Array.isArray(body.utm)
      ? Object.fromEntries(
          Object.entries(body.utm as Record<string, unknown>)
            .filter(([key]) => key.startsWith("utm_"))
            .slice(0, 10)
            .map(([key, value]) => [key, str(value, 200)]),
        )
      : {};

  const payload = {
    hotelName: str(body.hotelName, 160),
    lodgingType: str(body.lodgingType, 40),
    units: int(body.units),
    countryCode: str(body.countryCode, 2).toUpperCase(),
    city: str(body.city, 120),
    contactName: str(body.contactName, 120),
    email,
    phone: str(body.phone, 32),
    locale: str(body.locale, 5) || "es",
    utm,
    referer: (req.headers.get("referer") ?? "").slice(0, 500),
    website: "",
    elapsedMs: int(body.elapsedMs),
    interacted: body.interacted === true,
    captchaToken: str(body.captchaToken, 4000),
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Sin esto el API interno ve la IP del servidor de Next en todos los
        // envíos y sus techos por IP dejan de significar algo.
        ...(ip ? { "x-forwarded-for": ip } : {}),
        "user-agent": req.headers.get("user-agent") ?? "",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = (await res.json().catch(() => ({}))) as { code?: string; error?: string };
      // Los códigos que la persona PUEDE resolver viajan tal cual; el resto se
      // aplana a uno genérico. "upstream 500" no es información para nadie.
      const known = new Set(["disposable_email", "mail_failed", "rate_limited"]);
      const code = detail?.code ?? detail?.error ?? "";
      return NextResponse.json(
        { error: known.has(code) ? code : "upstream" },
        { status: res.status === 429 ? 429 : res.status >= 500 ? 502 : 400 },
      );
    }

    return NextResponse.json({ status: "accepted" }, { status: 202 });
  } catch (err) {
    console.error("[signup] el API interno no respondió:", err);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
}
