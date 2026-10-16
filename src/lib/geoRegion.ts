import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as WebReadableStream } from "node:stream/web";
import { createGunzip } from "node:zlib";
import { Reader, type CityResponse } from "mmdb-lib";

/**
 * IP → país y provincia/estado con la base "IP to City Lite" de DB-IP
 * (CC BY 4.0). Sólo para `/api/track` (Node, no edge): el idioma por IP del
 * middleware sigue con su tabla embebida.
 *
 * La IP se usa para la consulta y se descarta; no se guarda ni se reenvía.
 *
 * De dónde sale el archivo (~120 MB, no entra en git):
 * - `npm run build` lo baja en el `prebuild` (`scripts/sync-geoip-city.mjs`);
 * - si no está —Coolify buildea con `next build` a secas, sin `prebuild`—, la
 *   primera visita dispara la descarga EN SEGUNDO PLANO y llega sin provincia;
 *   desde que termina (segundos), las demás ya la traen. Cada deploy arranca
 *   con un contenedor limpio, así que la base se renueva con cada publicación.
 */

const FILE = path.join(process.cwd(), "data/geoip/dbip-city-lite.mmdb");

/** Nombres de DB-IP que en el panel se leerían raro. */
const RENAME: Record<string, string> = {
  "Buenos Aires F.D.": "Ciudad de Buenos Aires",
};

let reader: Reader<CityResponse> | null = null;
let downloading: Promise<void> | null = null;
let retryAt = 0;

function month(offset: number): string {
  const d = new Date();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() - offset);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function download(): Promise<void> {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  // El archivo del mes sale el día 1; los primeros días puede no estar todavía.
  for (const m of [month(0), month(1)]) {
    const tmp = `${FILE}.${process.pid}.part`;
    try {
      const res = await fetch(`https://download.db-ip.com/free/dbip-city-lite-${m}.mmdb.gz`, {
        signal: AbortSignal.timeout(180_000),
      });
      if (!res.ok || !res.body) continue;
      await pipeline(
        Readable.fromWeb(res.body as unknown as WebReadableStream),
        createGunzip(),
        fs.createWriteStream(tmp),
      );
      fs.renameSync(tmp, FILE);
      console.log(`[track] base de provincias DB-IP ${m} lista`);
      return;
    } catch (err) {
      fs.rmSync(tmp, { force: true });
      console.warn(`[track] DB-IP ${m}:`, err instanceof Error ? err.message : err);
    }
  }
  throw new Error("sin base de provincias");
}

function getReader(): Reader<CityResponse> | null {
  if (reader) return reader;
  try {
    reader = new Reader<CityResponse>(fs.readFileSync(FILE));
    return reader;
  } catch {
    // No está todavía: se baja una sola vez y, si falla, se reintenta en 1 h.
    if (!downloading && Date.now() >= retryAt) {
      downloading = download()
        .catch(() => {
          retryAt = Date.now() + 3_600_000;
        })
        .finally(() => {
          downloading = null;
        });
    }
    return null;
  }
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
