import fs from "node:fs";
import path from "node:path";
import { Reader, type CityResponse } from "mmdb-lib";

/**
 * IP → país y provincia/estado con la base de DB-IP que baja
 * `scripts/sync-geoip-city.mjs` en el build. Sólo para `/api/track` (Node, no
 * edge): el idioma por IP del middleware sigue con su tabla embebida.
 *
 * La IP se usa para la consulta y se descarta; no se guarda ni se reenvía.
 * Si la base no está (build sin red, dev sin bajarla), devuelve null y la visita
 * llega sólo con el país de `i18n/geo`.
 */

/** Nombres de DB-IP que en el panel se leerían raro. */
const RENAME: Record<string, string> = {
  "Buenos Aires F.D.": "Ciudad de Buenos Aires",
};

const FILE = path.join(process.cwd(), "data/geoip/dbip-city-lite.mmdb");

let reader: Reader<CityResponse> | null | undefined;

function getReader(): Reader<CityResponse> | null {
  if (reader !== undefined) return reader;
  try {
    reader = new Reader<CityResponse>(fs.readFileSync(FILE));
  } catch {
    console.warn("[track] sin data/geoip/dbip-city-lite.mmdb: visitas sin provincia");
    reader = null;
  }
  return reader;
}

export function regionOf(ip: string): { country: string | null; region: string | null } | null {
  if (!ip || ip === "unknown") return null;
  const r = getReader();
  if (!r) return null;
  try {
    const rec = r.get(ip.replace(/^::ffff:/, ""));
    if (!rec) return null;
    const names = rec.subdivisions?.[0]?.names as Record<string, string> | undefined;
    const name = names?.es || names?.en || null;
    return {
      country: rec.country?.iso_code?.toUpperCase() ?? null,
      // DB-IP Lite trae los nombres en inglés (y a veces en otros idiomas).
      region: name ? (RENAME[name] ?? name).slice(0, 80) : null,
    };
  } catch {
    return null;
  }
}
