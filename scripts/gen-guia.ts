/**
 * Genera, desde `src/components/video-guia/data.ts`:
 *  - `GUIA-VIDEO-GUION.md` (raíz del workspace): el guion beat por beat con tiempos absolutos.
 *  - `locuciones/guia/ES.md` (raíz): SÓLO el texto a narrar, un bloque por paso, listo para
 *    copiar y pegar en ElevenLabs. El orden es el del video: intro, por capítulo su
 *    presentación y sus pasos, y el cierre.
 *
 *   npx tsx scripts/gen-guia.ts          (escribe los dos archivos)
 *   npx tsx scripts/gen-guia.ts --marks  (imprime instantes para capturas de control)
 */
import fs from "node:fs";
import path from "node:path";
import { CHAPTERS, INTRO, OUTRO, guiaTimeline, shotChain, words } from "../src/components/video-guia/data";

const ROOT = path.resolve(__dirname, "../../..");
const tl = guiaTimeline();
const clock = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
const plain = (s: string) => s.replace(/\*/g, "");

if (process.argv.includes("--marks")) {
  const marks: number[] = [3200];
  for (const c of tl.chapters) {
    marks.push(c.title + 1800);
    for (const s of c.steps) marks.push(s.at + Math.min(s.dur - 600, 4200));
  }
  marks.push(tl.outro + 4000);
  console.log(marks.join(","));
  process.exit(0);
}

const out: string[] = [];
out.push("# Guía de Roombir en video — guion");
out.push("");
out.push(`Video: \`/es/video/guia\` (mkt-renderer). Duración: **${clock(tl.total)}**. Con voz y sin música: el texto está en \`locuciones/guia/ES.md\` y el audio en \`public/video/guia/voz-es.mp3\` (\`voz.json\` dice dónde está cada bloque).`);
out.push("Generado por `npx tsx scripts/gen-guia.ts` desde `src/components/video-guia/data.ts`: **no editar a mano**, cambiar los datos y volver a generar.");
out.push("");
out.push("Las pantallas son capturas reales de la cuenta demo **Altos del Lago Lodge & Spa** (demo@roombir.com) en app.roombir.com, a 3840×2160, en `public/video/guia/`. Cada paso dura lo que su bloque de voz grabado, más 0,45 s antes y 0,9 s después; los tiempos de cámara, puntero y notas se escalan en proporción.");
out.push("");
out.push("## Dónde tocar cada cosa");
out.push("");
out.push("| Quiero cambiar… | Dónde |");
out.push("|---|---|");
out.push("| Un texto de rótulo, nota o locución | `data.ts` → el paso (`cap`, `notes`, `vo`). El largo del paso se recalcula solo. |");
out.push("| Hacia dónde mira la cámara o cuándo | `data.ts` → `cam: [t, d, x, y, zoom]` (px de la captura de 1920×1080; zoom 1 = ventana entera). |");
out.push("| Dónde hace clic el puntero | `data.ts` → `ptr: [t, x, y, clic]`. |");
out.push("| Cómo se llega a un capítulo por el menú lateral | `data.ts` → `NAV` (`navStep`: ícono, submenú y pantalla; capturas `nav-*` y `tip-*`). |");
out.push("| Una pantalla | Recapturar con `capture.js` (scratchpad de la sesión) y convertir a WebP en `public/video/guia/<id>.webp`. |");
out.push("| Duración de portadas, intro o cierre | `data.ts` → `titleDur`, `INTRO_DUR`, `OUTRO_DUR` (salen de la voz). |");
out.push("| Estilo de la ventana o las portadas | `guia.module.css`; escenas en `GuiaVideo.tsx`. |");
out.push("");
out.push("## Línea de tiempo");
out.push("");
out.push(`### 0:00 · Introducción`);
out.push("");
out.push(`- **Pantalla:** ${INTRO.eyebrow} — "${plain(INTRO.title)}". ${INTRO.sub}`);
out.push(`- **Locución:** ${INTRO.vo}`);
out.push("");
tl.chapters.forEach((c, n) => {
  out.push(`### ${clock(c.title)} · Capítulo ${n + 1}: ${plain(c.ch.title)}`);
  out.push("");
  out.push(`- **Portada:** "${plain(c.ch.title)}" — ${c.ch.sub}`);
  out.push(`- **Locución:** ${c.ch.vo}`);
  out.push("");
  out.push("| Tiempo | Paso | Pantalla | Rótulo | Notas en pantalla | Locución |");
  out.push("|---|---|---|---|---|---|");
  c.steps.forEach((s, i) => {
    const st = s.step;
    const notes = (st.notes ?? []).map((x) => `**${x.title}**${x.text ? ` — ${x.text}` : ""}`).join("<br>") || "—";
    const shot = [...shotChain(st).map(([id]) => id), st.shot].map((id) => `\`${id}\``).join(" → ");
    const vo = st.nav ? "— (sin voz: el camino por el menú lateral)" : st.vo;
    out.push(`| ${clock(s.at)}–${clock(s.at + s.dur)} | ${i + 1}/${c.steps.length} | ${shot} | ${st.cap} | ${notes} | ${vo} |`);
  });
  out.push("");
});
out.push(`### ${clock(tl.outro)} · Cierre`);
out.push("");
out.push(`- **Pantalla:** "${plain(OUTRO.cta)}" y el logo de Roombir con ${OUTRO.tagline}.`);
out.push(`- **Locución:** ${OUTRO.vo}`);
out.push("");
const allVo = [INTRO.vo, ...CHAPTERS.flatMap((c) => [c.vo, ...c.steps.filter((s) => !s.nav).map((s) => s.vo)]), OUTRO.vo];
out.push(`Total de locución: ${allVo.reduce((a, v) => a + words(v), 0)} palabras.`);
out.push("");

fs.writeFileSync(path.join(ROOT, "GUIA-VIDEO-GUION.md"), out.join("\n"), "utf8");
fs.mkdirSync(path.join(ROOT, "locuciones/guia"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "locuciones/guia/ES.md"), allVo.join("\n\n") + "\n", "utf8");
console.log(`ok · ${clock(tl.total)} · ${allVo.length} bloques de locución`);
