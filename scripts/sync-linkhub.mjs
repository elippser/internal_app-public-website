/**
 * Copia al video las piezas VISUALES del LinkHub real, byte a byte, desde
 * `public-side/linkhub-renderer/src/linkhub/` a `src/components/video-kit/linkhub-real/`.
 *
 * El teléfono de los videos muestra el LinkHub de verdad —su diseño, el arte
 * animado de cada plantilla y la entrada escalonada— y no una copia a mano. Lo
 * que NO se copia es lo que ata la página al sitio: `LinkhubPage.tsx` (monta el
 * motor real, el rastreo y el QR), `Tracker`, `ShareButton` y `QrPanel`. El
 * video arma la página con `LinkhubReal.tsx`, el mismo árbol sin esas piezas.
 *
 * Si el LinkHub cambia, se vuelve a correr: npm run sync:linkhub
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(HERE, "../../linkhub-renderer/src/linkhub");
const DST = path.resolve(HERE, "../src/components/video-kit/linkhub-real");
const FILES = ["theme.ts", "types.ts", "components.tsx", "icons.tsx", "logoPaths.ts", "booking.ts", "linkhub.module.css"];

fs.mkdirSync(DST, { recursive: true });
for (const f of FILES) {
  fs.copyFileSync(path.join(SRC, f), path.join(DST, f));
  console.log("copiado", f);
}
