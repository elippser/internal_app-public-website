/**
 * Baja la base IP → ciudad/provincia de DB-IP ("IP to City Lite", CC BY 4.0)
 * a `data/geoip/dbip-city-lite.mmdb`. La usa `/api/track` para saber la
 * provincia o el estado de una visita (`src/lib/geoRegion.ts`).
 *
 * No va al repo: pesa ~130 MB y GitHub corta en 100. Corre como `prebuild`, así
 * que cada build de Coolify trae la del mes. Si el archivo ya está y tiene menos
 * de 35 días, no hace nada (los builds locales no la vuelven a bajar).
 *
 * NUNCA rompe el build: si DB-IP no responde, el sitio sale igual y las visitas
 * llegan con país (la tabla de `i18n/geo`) y sin provincia.
 *
 * Atribución que pide la licencia: "IP Geolocation by DB-IP" (https://db-ip.com),
 * visible en el tablero de Tráfico del panel interno.
 */
import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { createGunzip } from "node:zlib";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DST = path.resolve(HERE, "../data/geoip/dbip-city-lite.mmdb");
const MAX_AGE_DAYS = 35;

function month(offset) {
  const d = new Date();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() - offset);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function main() {
  if (process.env.SKIP_GEOIP_CITY === "1") return console.log("[geoip-city] SKIP_GEOIP_CITY=1");
  try {
    const age = (Date.now() - fs.statSync(DST).mtimeMs) / 86_400_000;
    if (age < MAX_AGE_DAYS) return console.log(`[geoip-city] al día (${age.toFixed(0)} días)`);
  } catch {
    // No existe: hay que bajarla.
  }
  fs.mkdirSync(path.dirname(DST), { recursive: true });
  // El archivo del mes sale el día 1; los primeros días puede no estar todavía.
  for (const m of [month(0), month(1)]) {
    const url = `https://download.db-ip.com/free/dbip-city-lite-${m}.mmdb.gz`;
    const tmp = `${DST}.part`;
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(180_000) });
      if (!res.ok || !res.body) {
        console.warn(`[geoip-city] ${m}: HTTP ${res.status}`);
        continue;
      }
      await pipeline(Readable.fromWeb(res.body), createGunzip(), fs.createWriteStream(tmp));
      fs.renameSync(tmp, DST);
      const mb = (fs.statSync(DST).size / 1_048_576).toFixed(0);
      return console.log(`[geoip-city] ${m} lista (${mb} MB)`);
    } catch (err) {
      fs.rmSync(tmp, { force: true });
      console.warn(`[geoip-city] ${m}: ${err instanceof Error ? err.message : err}`);
    }
  }
  console.warn("[geoip-city] sin base de provincias: las visitas llegan sólo con país");
}

main().catch((err) => console.warn("[geoip-city]", err));
