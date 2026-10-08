/**
 * Embebe en el sitio la tabla IPv4 → país de `ip3country` (IP2Location LITE)
 * como un string base64 en `src/i18n/geo/ipv4Table.ts`.
 *
 * Por qué copiarla y no importar el paquete: el middleware corre en el runtime
 * edge, y `ip3country` arma la tabla con `Buffer` y toca `require.cache`, que
 * ahí no existen. El formato binario es el mismo; lo decodifica `geo/index.ts`.
 *
 * La base se actualiza con el paquete: npm i -D ip3country@latest && npm run sync:geoip
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const DST = path.resolve(HERE, "../src/i18n/geo/ipv4Table.ts");

const version = require("ip3country/package.json").version;
const data = require("ip3country/src/ip_supalite.js");
const b64 = Buffer.from(data).toString("base64");

fs.mkdirSync(path.dirname(DST), { recursive: true });
fs.writeFileSync(
  DST,
  `// Generado por scripts/sync-geoip.mjs desde ip3country@${version} — no editar a mano.\n` +
    `// This site or product includes IP2Location LITE data available from https://lite.ip2location.com.\n` +
    `export const IPV4_TABLE_B64 =\n  "${b64}";\n`,
);
console.log(`ipv4Table.ts: ${(b64.length / 1024).toFixed(0)} KB (ip3country@${version})`);
