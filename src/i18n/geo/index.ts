import { isLocale, type Locale } from "../config";
import { IPV4_TABLE_B64 } from "./ipv4Table";

/**
 * Idioma por país del visitante.
 *
 * El sitio corre en el VPS sin CDN adelante, así que no llega ninguna cabecera
 * de país: se resuelve con la tabla IPv4 de IP2Location LITE embebida
 * (`npm run sync:geoip`). Si algún día se pone Cloudflare o Vercel adelante,
 * sus cabeceras ganan y la tabla queda de respaldo.
 *
 * El dominio sólo publica registro A, así que todo visitante llega por IPv4.
 */

// ------------------------------------------------------------- IP → país

let ranges: Uint32Array | null = null;
let codes: string[] = [];

/**
 * Decodifica la tabla la primera vez que se usa. Formato de `ip3country`:
 * códigos de país de dos letras hasta `**`, después pares (cantidad de /24,
 * índice de país) con la cantidad en 1, 3 o 4 bytes.
 */
function table() {
  if (ranges) return ranges;
  const bin = atob(IPV4_TABLE_B64);
  const countries: string[] = [];
  let i = 0;
  while (i < bin.length) {
    const cc = bin[i] + bin[i + 1];
    i += 2;
    countries.push(cc);
    if (cc[0] === "*") break;
  }
  const ends: number[] = [];
  let end = 0;
  while (i < bin.length) {
    const n1 = bin.charCodeAt(i++);
    let count = 0;
    if (n1 < 240) count = n1;
    else if (n1 === 242) {
      count = bin.charCodeAt(i) | (bin.charCodeAt(i + 1) << 8);
      i += 2;
    } else if (n1 === 243) {
      count = bin.charCodeAt(i) | (bin.charCodeAt(i + 1) << 8) | (bin.charCodeAt(i + 2) << 16);
      i += 3;
    }
    end += count * 256;
    ends.push(end);
    codes.push(countries[bin.charCodeAt(i++)]);
  }
  ranges = Uint32Array.from(ends);
  return ranges;
}

/** País (ISO-3166 alfa-2) de una IPv4, o null si es privada, reservada o no es IPv4. */
export function countryOfIp(ip: string): string | null {
  const v4 = ip.startsWith("::ffff:") ? ip.slice(7) : ip;
  const parts = v4.split(".");
  if (parts.length !== 4) return null;
  let n = 0;
  for (const p of parts) {
    const b = Number(p);
    if (!/^\d{1,3}$/.test(p) || b > 255) return null;
    n = n * 256 + b;
  }
  const r = table();
  let lo = 0;
  let hi = r.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (r[mid] <= n) lo = mid + 1;
    else hi = mid;
  }
  const cc = codes[lo];
  return !cc || cc === "--" ? null : cc;
}

/**
 * País del visitante. Primero las cabeceras de un CDN si hubiera; después la
 * IP que deja Traefik (`X-Real-IP` es la conexión real; `X-Forwarded-For`
 * de respaldo, su primera entrada es el cliente).
 */
export function countryOf(headers: Headers): string | null {
  const edge = headers.get("cf-ipcountry") ?? headers.get("x-vercel-ip-country");
  if (edge && /^[A-Z]{2}$/i.test(edge) && edge.toUpperCase() !== "XX") return edge.toUpperCase();
  const ip =
    headers.get("x-real-ip")?.trim() ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";
  return ip ? countryOfIp(ip) : null;
}

// ------------------------------------------------------------- país → idioma

/**
 * Idiomas candidatos por país, el primero es el que gana por defecto. Los
 * países con más de uno desempatan con el `Accept-Language` del navegador
 * (un suizo con el navegador en francés ve francés). Un país que no está en
 * la tabla va a inglés.
 */
const BY_COUNTRY: Record<string, readonly Locale[]> = {};
const add = (locales: readonly Locale[], countries: string) => {
  for (const cc of countries.split(" ")) BY_COUNTRY[cc] = locales;
};

add(["es"], "ES MX AR CO CL PE VE EC GT CU BO DO HN PY SV NI CR PA UY PR GQ AD");
add(["pt"], "BR PT AO MZ CV GW ST TL");
add(["fr"], "FR MC SN CI ML BF NE GN BJ TG MG CD CG GA TD CF DJ KM HT RE GP MQ GF YT PF NC PM WF BL MF MA DZ TN BI");
add(["de"], "DE AT LI");
add(["de", "fr"], "CH");
add(["fr", "de"], "LU");
add(["fr", "en"], "CM");
add(["en", "fr", "de"], "BE");
add(["en", "fr"], "CA");
add(["en", "es"], "US");

/** Idiomas base del `Accept-Language`, en orden de preferencia. */
function browserLocales(acceptLanguage: string | null): Locale[] {
  if (!acceptLanguage) return [];
  const out: Locale[] = [];
  for (const part of acceptLanguage.split(",")) {
    const base = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (isLocale(base) && !out.includes(base)) out.push(base);
  }
  return out;
}

/**
 * El idioma para un visitante sin preferencia guardada. Con país: el de su
 * país (inglés si no hablamos el suyo). Sin país —IP local o privada—: el del
 * navegador, y si tampoco, inglés.
 */
export function localeFor(country: string | null, acceptLanguage: string | null): Locale {
  const browser = browserLocales(acceptLanguage);
  if (!country) return browser[0] ?? "en";
  const candidates = BY_COUNTRY[country];
  if (!candidates) return "en";
  return browser.find((l) => candidates.includes(l)) ?? candidates[0];
}
