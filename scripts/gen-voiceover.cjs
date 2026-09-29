/**
 * Escribe `voiceover.ts` a partir de los cinco locuciones/portada/XX.md.
 *
 * Los documentos son **texto pelado**: bloques separados por una línea en
 * blanco, en orden, sin timecodes ni números de escena. Así que el reparto por
 * beats vive ACÁ, en `ORDEN`, y los documentos aportan sólo las palabras. Los
 * cinco idiomas tienen que traer la misma cantidad de bloques y en el mismo
 * orden: si uno no coincide, esto se planta en vez de desalinear los subtítulos
 * de un idioma en silencio.
 *
 * Correr desde este directorio: `node gen-voiceover.cjs`.
 */
const fs = require("fs");
const path = require("path");

/** La raíz del monorepo, donde vive la carpeta locuciones/. */
const RAIZ = path.resolve(__dirname, "../../..");
const DESTINO = path.join(__dirname, "../src/components/video/voiceover.ts");

/**
 * Opcional, sólo para el control que se imprime al final: los beats reales de
 * cada idioma, leídos de `window.__heroVideo.beats` con el sitio corriendo. El
 * volcado NO lo necesita —los tiempos salen de `ORDEN`—, así que si no está se
 * saltea el control y listo.
 */
const beats = fs.existsSync(path.join(__dirname, "beats.json"))
  ? JSON.parse(fs.readFileSync(path.join(__dirname, "beats.json"), "utf8"))
  : null;

/**
 * Un renglón por bloque del documento, en su orden. `at` va en ms desde que
 * empieza su beat; `escena` es sólo para leer esta tabla contra el video.
 */
const ORDEN = [
  { escena: "1", beat: "sprawl", at: 0 },
  { escena: "2", beat: "thread", at: 0 },
  { escena: "3", beat: "tools", at: 0 },
  { escena: "4", beat: "maze", at: 120 },
  { escena: "6", beat: "kills", at: 0 },
  { escena: "7", beat: "punch", at: 0 },
  { escena: "8", beat: "meet", at: 0 },
  { escena: "9", beat: "first", at: 0 },
  { escena: "10", beat: "shot", at: 0 },
  { escena: "11", beat: "built", at: 0 },
  // Una sola lectura corrida para las cuatro escenas sin texto en pantalla.
  { escena: "12-15", beat: "wheel", at: 0 },
  { escena: "16", beat: "precision", at: 0 },
  { escena: "17", beat: "hinge", at: 180 },
  { escena: "18", beat: "chat", at: 500 },
  { escena: "19", beat: "unlock", at: 0 },
  // "Eficiencia." cae cuando la línea sobreescribe la palabra en pantalla.
  { escena: "19", beat: "unlock", at: 4840 },
  { escena: "20-22", beat: "donut", at: 0 },
  // El remate de la cadena: "roombir" cae mientras el logo reemplaza al texto
  // (el cruce de `RowScene` va de 780 a 1450 ms).
  { escena: "23", beat: "row", at: 0 },
  // El tagline ya está en pantalla desde el cruce de la 23 y se queda toda la 24.
  { escena: "24", beat: "end", at: 200 },
];

const LOCS = ["es", "en", "pt", "fr", "de"];

const bloques = (loc) =>
  fs
    .readFileSync(`${RAIZ}/locuciones/portada/${loc.toUpperCase()}.md`, "utf8")
    .split(/\n\s*\n/)
    .map((x) => x.trim())
    .filter(Boolean);

const texto = {};
for (const loc of LOCS) {
  const b = bloques(loc);
  if (b.length !== ORDEN.length) {
    throw new Error(
      `${loc}: el documento trae ${b.length} bloques y ORDEN tiene ${ORDEN.length}. ` +
        `Si el guion cambió de largo, hay que actualizar ORDEN antes de volcar.`,
    );
  }
  texto[loc] = b;
  console.log(`${loc}: ${b.length} bloques`);
}

/** El `<break>` es una etiqueta de ElevenLabs: en el subtítulo va como pausa. */
const limpiar = (t) => t.replace(/<break[^>]*\/>/g, "…").replace(/\s{2,}/g, " ").trim();
const esc = (t) => t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const bloque = (loc) =>
  `  ${loc}: [\n` +
  ORDEN.map(
    (o, i) => `    { beat: "${o.beat}", at: ${o.at}, text: "${esc(limpiar(texto[loc][i]))}" },`,
  ).join("\n") +
  `\n  ],`;

const salida = `import type { Locale } from "@/i18n/config";
import type { BeatId } from "./timeline";

/**
 * El guion de la voz en off, en los cinco idiomas.
 *
 * **Volcado de \`locuciones/portada/{ES,EN,PT,FR,DE}.md\` (raíz del monorepo), que
 * son la fuente.** Ahí está el texto tal como se pega en ElevenLabs; acá está
 * el mismo texto más el dato que los documentos no traen: en qué beat del video
 * cae cada bloque. Si se toca el texto, se toca allá y se vuelve a volcar con
 * \`gen-voiceover.cjs\`; esto no se edita a mano.
 *
 * **Un bloque no es una escena.** Hay bloques que cubren varias (el de la rueda
 * corre por las escenas 12 a 15, sin texto en pantalla, y el de la nueva era
 * por la 20, 21 y 22) y escenas con dos bloques (la 19: el cascadeo y, aparte,
 * "Eficiencia." cuando la línea sobreescribe la palabra). Las escenas 5 —una
 * transición muda de 0,25 s— y la 24 comparten el criterio de siempre: no se
 * dice nada nuevo si la pantalla no lo pide.
 *
 * **El \`at\` va en ms desde que empieza SU BEAT**, no desde el principio del
 * video. Guardar el instante absoluto lo dejaría viejo al primer retoque de una
 * escena (trampa 45 de este video), y además el video dura distinto en cada
 * idioma porque el tipeo del chat se mide del texto real.
 *
 * El reparto por beats vive en \`ORDEN\`, dentro del generador: los documentos
 * son texto pelado, sin timecodes ni números de escena. Por eso el generador
 * exige que los cinco idiomas traigan la misma cantidad de bloques — si el
 * guion cambia de largo, hay que actualizar \`ORDEN\` antes de volcar.
 */

export type VoTake = {
  beat: BeatId;
  /** Ms desde que empieza su beat. */
  at: number;
  text: string;
};

export const VOICEOVER: Record<Locale, VoTake[]> = {
${LOCS.map(bloque).join("\n")}
};

export type VoCue = VoTake & {
  /** Ms desde el principio del video. */
  start: number;
  end: number;
  /** Número de bloque, 1 a ${ORDEN.length}, para nombrarlo en el editor. */
  n: number;
};

/**
 * Cuánto se queda el subtítulo a la vista.
 *
 * Los documentos no anotan duraciones —un bloque dura lo que dure su audio, y
 * eso recién se sabe cuando el archivo está montado—, así que la ventana llega
 * hasta el bloque siguiente, acotada por lo que lleva leer la frase. Sin ese
 * tope, el bloque del chat dejaría el renglón encendido los diecisiete segundos
 * de la demostración.
 */
function ventana(texto: string): number {
  return Math.max(1400, Math.min(14_000, texto.length * 72));
}

/** El guion en tiempo absoluto, en orden, para el idioma que se esté mirando. */
export function buildCues(beats: { id: BeatId; start: number }[], locale: Locale): VoCue[] {
  const inicio = new Map(beats.map((b) => [b.id, b.start]));
  const cues = VOICEOVER[locale]
    .map((take, i) => {
      const base = inicio.get(take.beat);
      if (base === undefined) return null;
      return { ...take, n: i + 1, start: base + take.at, end: 0 };
    })
    .filter((c): c is VoCue => c !== null)
    .sort((a, b) => a.start - b.start);

  cues.forEach((c, i) => {
    const siguiente = cues[i + 1];
    c.end = Math.min(siguiente ? siguiente.start : Infinity, c.start + ventana(c.text));
  });
  return cues;
}

/** El bloque que va a la vista en un instante, o el último dicho si hay silencio. */
export function cueAt(cues: VoCue[], t: number): { cue: VoCue | null; live: boolean } {
  let ultima: VoCue | null = null;
  for (const c of cues) {
    if (c.start > t) break;
    ultima = c;
  }
  if (!ultima) return { cue: null, live: false };
  return { cue: ultima, live: t < ultima.end };
}
`;

fs.writeFileSync(DESTINO, salida);
console.log(`\nvoiceover.ts escrito: ${salida.split("\n").length} líneas, ${ORDEN.length} bloques por idioma`);

// Control a ojo: el cierre, que es lo que se acaba de tocar.
if (!beats) process.exit(0);
const b = beats.es.beats;
for (const i of [3, ORDEN.length - 3, ORDEN.length - 2, ORDEN.length - 1]) {
  const o = ORDEN[i];
  const start = b.find((x) => x.id === o.beat).start + o.at;
  const cl = (ms) => `${Math.floor(ms / 60000)}:${String(Math.floor((ms % 60000) / 1000)).padStart(2, "0")}.${Math.floor((ms % 1000) / 10).toString().padStart(2, "0")}`;
  console.log(`  bloque ${i + 1} · escena ${o.escena} · ${o.beat}+${o.at} · ${cl(start)}  ${texto.es[i]}`);
}
