/**
 * Recorta los clips en bucle de la home ("Roombir se adapta a tu alojamiento").
 *
 *     npm run cut:clips              → genera lo que falte
 *     npm run cut:clips -- --force   → regenera todo
 *     npm run cut:clips -- --posters → rehace sólo los pósteres
 *
 * Salen de los MP4 del sitio (`public/video/mp4/<pieza>-<idioma>-<h|v>.mp4`) y
 * quedan en `public/video/clips/<clip>-<idioma>-<h|v>.mp4`, con su póster
 * `.jpg` al lado. El póster NO es el primer cuadro: los tramos arrancan en
 * medio de una transición (una mancha borrosa), así que cada clip dice en
 * `poster` a cuántos segundos de su inicio está el cuadro que lo representa.
 * Van SIN pista de audio: son bucles mudos, y sin audio el autoplay no
 * depende de ninguna política del navegador.
 *
 * Los tiempos los pidió el usuario sobre los videos en ESPAÑOL (29-09-2026):
 * motor 0:37–0:49, PMS (la pieza `propiedades`) 0:07–0:30 e IA 0:29–1:10.
 * Los otros idiomas NO duran lo mismo —cada escena se estira lo que pide su
 * locución— así que su tramo es el equivalente, no el mismo número: se
 * alineó cada idioma contra el español cuadro por cuadro (DTW sobre cuadros
 * reducidos) y se controló a ojo que empiece y termine en el mismo contenido.
 * Horizontal y vertical comparten tiempos. Si se re-exporta un video, hay que
 * volver a medir su fila.
 *
 * Motor e IA arrancan unas décimas DESPUÉS del segundo pedido: en 0:37 y
 * 0:29 todavía se ve la cola de la escena anterior, que en un bucle aparece
 * como un destello en cada vuelta. El inicio es el cuadro más borroso de la
 * transición (medido por idioma), así el bucle abre fundiendo a la escena.
 *
 * Necesita `ffmpeg` en el PATH (o en la variable FFMPEG).
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, renameSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "public", "video", "mp4");
const OUT = join(ROOT, "public", "video", "clips");
const FFMPEG = process.env.FFMPEG || "ffmpeg";
const FORCE = process.argv.includes("--force");
const POSTERS = process.argv.includes("--posters");

/** clip → pieza de origen, tramo [inicio, fin] en segundos por idioma, y el
    segundo del clip que hace de póster. */
const CLIPS = {
  motor: {
    piece: "motor",
    poster: 4.5,
    ranges: { es: [37.6, 49], en: [37.03, 48.4], pt: [34.87, 46.2], fr: [35.93, 47.4], de: [43.03, 54.4] },
  },
  pms: {
    piece: "propiedades",
    poster: 1,
    ranges: { es: [7, 30], en: [6.8, 27.2], pt: [6.8, 27.2], fr: [6.8, 27.2], de: [7, 30.4] },
  },
  ia: {
    piece: "ia",
    poster: 12,
    ranges: { es: [29.33, 70], en: [29.43, 70], pt: [28.83, 69.6], fr: [30.5, 71], de: [29.97, 71] },
  },
};

function run(args) {
  const r = spawnSync(FFMPEG, ["-v", "error", "-y", ...args], { stdio: ["ignore", "inherit", "inherit"] });
  if (r.status !== 0) throw new Error(`ffmpeg falló: ${args.join(" ")}`);
}

mkdirSync(OUT, { recursive: true });

let made = 0;
let total = 0;
for (const [clip, { piece, ranges, poster: posterAt }] of Object.entries(CLIPS)) {
  for (const [lang, [start, end]] of Object.entries(ranges)) {
    for (const orient of ["h", "v"]) {
      const src = join(SRC, `${piece}-${lang}-${orient}.mp4`);
      const out = join(OUT, `${clip}-${lang}-${orient}.mp4`);
      const poster = join(OUT, `${clip}-${lang}-${orient}.jpg`);
      const tmp = join(OUT, `.${clip}-${lang}-${orient}.partial.mp4`);

      if (!existsSync(src)) throw new Error(`falta el origen: ${src}`);
      const shot = () => run(["-ss", String(posterAt), "-i", out, "-frames:v", "1", "-q:v", "4", poster]);

      if (!FORCE && existsSync(out)) {
        if (POSTERS || !existsSync(poster)) {
          shot();
          console.log(`póster ${clip}-${lang}-${orient}  +${posterAt}s`);
        }
        total += statSync(out).size;
        continue;
      }

      // `-ss` antes del `-i` y re-codificando: ffmpeg decodifica desde el
      // keyframe anterior y descarta hasta el instante exacto.
      run([
        "-ss", String(start), "-t", String(Number((end - start).toFixed(3))), "-i", src,
        "-an",
        "-c:v", "libx264", "-preset", "slow", "-crf", "25",
        "-pix_fmt", "yuv420p", "-profile:v", "high",
        "-g", "60",
        "-movflags", "+faststart",
        tmp,
      ]);
      renameSync(tmp, out);
      shot();

      const size = statSync(out).size;
      total += size;
      made++;
      console.log(`ok ${clip}-${lang}-${orient}  ${start}–${end}s  ${(size / 1024).toFixed(0)} KB`);
    }
  }
}

console.log(`${made} clips generados · ${(total / 1024 / 1024).toFixed(1)} MB en total en public/video/clips`);
