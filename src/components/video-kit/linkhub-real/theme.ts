import type { CSSProperties } from "react";
import type { LinkhubTheme } from "./types";

/**
 * CLON DE PARIDAD de pms-core/app/src/app/(appLayout)/linkhub/components/preview/theme.ts
 * — el "ThemeProvider" puro del LinkHub (variables --lh-*). Si se toca el
 * original, replicar acá (regla de paridad editor↔renderer).
 */

/** #RGB o #RRGGBB → "rgba(r,g,b,a)". Devuelve el hex tal cual si no parsea. */
export function hexToRgba(hex: string, alpha: number): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return hex;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  if ([r, g, b].some((n) => Number.isNaN(n))) return hex;
  return `rgba(${r},${g},${b},${alpha})`;
}

const parseHex = (hex: string): [number, number, number] | null => {
  let h = (hex || "").replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return null;
  const rgb = [h.slice(0, 2), h.slice(2, 4), h.slice(4, 6)].map((c) => parseInt(c, 16));
  return rgb.some((n) => Number.isNaN(n)) ? null : (rgb as [number, number, number]);
};

/** Oscurece un hex mezclándolo con negro (k=0 → igual, k=1 → negro). */
function shadeHex(hex: string, k: number): string {
  const rgb = parseHex(hex);
  if (!rgb) return hex;
  const [r, g, b] = rgb.map((n) => Math.round(n * (1 - k)));
  return `rgb(${r},${g},${b})`;
}

/** Aclara un hex mezclándolo con blanco (k=0 → igual, k=1 → blanco). */
function tintHex(hex: string, k: number): string {
  const rgb = parseHex(hex);
  if (!rgb) return hex;
  const [r, g, b] = rgb.map((n) => Math.round(n + (255 - n) * k));
  return `rgb(${r},${g},${b})`;
}

/** true si el color es claro (luminancia relativa alta). */
function isLightHex(hex: string): boolean {
  const rgb = parseHex(hex);
  if (!rgb) return false;
  const [r, g, b] = rgb;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.7;
}

export const FONT_STACKS: Record<string, string> = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", "Playfair Display", serif',
  display: '"Trebuchet MS", "Segoe UI", Verdana, system-ui, sans-serif',
  mono: '"Cascadia Mono", Consolas, "Courier New", ui-monospace, monospace',
  rounded:
    'ui-rounded, "Arial Rounded MT Bold", "Trebuchet MS", "Segoe UI", system-ui, sans-serif',
  custom: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

export const RADII: Record<string, string> = {
  square: "0px",
  rounded: "14px",
  pill: "999px",
};

/**
 * Radio de los bloques con contenido (galería, video, avisos). NO usa
 * `--lh-radius`: con esquinas "píldora" (999px) una foto cuadrada se
 * convertiría en un círculo. Sigue la esquina elegida, pero acotado.
 */
export const MEDIA_RADII: Record<string, string> = {
  square: "0px",
  rounded: "14px",
  pill: "18px",
};

/**
 * Sistema de radios CONCÉNTRICOS de la tarjeta del motor (y de cualquier
 * tarjeta con cosas adentro): el radio interior = radio exterior − el padding
 * que los separa (12px). Es lo que hace que las esquinas "acompañen" en vez de
 * pelearse — antes la tarjeta iba en 18px, los campos en 10px y el botón en
 * píldora, tres curvas distintas a 12px de distancia.
 *
 *   card  → tarjeta contenedora
 *   field → celdas de adentro (fechas, huéspedes)
 *   chip  → el disco del ícono del botón (círculo en píldora, cuadrado en recto)
 */
export const CARD_RADII: Record<string, string> = {
  square: "0px",
  rounded: "18px",
  pill: "26px",
};
export const FIELD_RADII: Record<string, string> = {
  square: "0px",
  rounded: "10px",
  pill: "14px",
};
export const CHIP_RADII: Record<string, string> = {
  square: "0px",
  rounded: "10px",
  pill: "999px",
};

/** Stack de fuente del tema: la Google Font elegida (con fallback) o el preset. */
export function fontStack(theme: LinkhubTheme): string {
  if (theme.fontPreset === "custom" && theme.customFontFamily) {
    return `'${theme.customFontFamily}', ${FONT_STACKS.sans}`;
  }
  return FONT_STACKS[theme.fontPreset] ?? FONT_STACKS.sans;
}

/** URL del stylesheet de Google Fonts para la fuente custom del tema (o null). */
export function customFontHref(theme: LinkhubTheme): string | null {
  if (theme.fontPreset !== "custom" || !theme.customFontFamily) return null;
  const family = theme.customFontFamily.replace(/ /g, "+");
  return `https://fonts.googleapis.com/css?family=${family}:400,600,700&display=swap`;
}

// ─── Máscaras de borde de botón (torn / wavy) ────────────────────────────────

const TORN_PATH =
  "M0,5L9,3L17,6L26,3L34,5L43,2L55,6L64,4L72,6L83,3L92,5L101,3L112,6L120,4L129,6L140,2L150,5L159,3L168,6L179,4L188,6L198,3L207,5L216,3L228,6L237,4L246,6L256,2L266,5L275,3L284,6L295,4L304,6L312,3L320,5L320,51L311,53L303,50L294,53L286,51L277,54L265,50L256,52L248,50L237,53L228,51L219,53L208,50L200,52L191,50L180,54L170,51L161,53L152,50L141,52L132,50L122,53L113,51L104,53L92,50L83,52L74,50L64,54L54,51L45,53L36,50L25,52L16,50L8,53L0,51Z";

const WAVY_PATH =
  "M0,4Q8,1,16,4T32,4T48,4T64,4T80,4T96,4T112,4T128,4T144,4T160,4T176,4T192,4T208,4T224,4T240,4T256,4T272,4T288,4T304,4T320,4L320,52Q312,55,304,52T288,52T272,52T256,52T240,52T224,52T208,52T192,52T176,52T160,52T144,52T128,52T112,52T96,52T80,52T64,52T48,52T32,52T16,52T0,52Z";

const edgeMask = (path: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 56' preserveAspectRatio='none'%3E%3Cpath d='${path}'/%3E%3C/svg%3E")`;

const TORN_MASK = edgeMask(TORN_PATH);
const WAVY_MASK = edgeMask(WAVY_PATH);

// ─── Gramática del arte de fondo ─────────────────────────────────────────────
/*
  Todas las plantillas se componen con las MISMAS piezas, en este orden (en el
  shorthand `background` la primera capa es la de arriba):

      [motivo]  →  [halos de color]  →  [degradé base]

  El degradé base define el ánimo con pocas paradas; los halos (`bloom`) aportan
  la profundidad. El motivo (hojas, garabatos, estrellas, carriles) es opcional
  y sólo lo usan las plantillas que lo tienen por concepto.

  Desde el rediseño con animación, cada plantilla separa lo que se QUEDA QUIETO
  (`base`: degradé + sombras) de lo que SE MUEVE (`a` y `b`: la luz, el motivo).
  Las capas que se mueven las dibuja `.artMotion` (dos pseudo-elementos con su
  propio `background` y keyframes); la muestra del selector y el fallback con
  `prefers-reduced-motion` usan la composición estática de todas las capas
  (`TEMPLATE_BACKGROUNDS`), que es exactamente el arte de antes.
*/

/** Halo radial suave: una mancha de color que se desvanece hacia afuera. */
const bloom = (x: string, y: string, w: string, h: string, color: string) =>
  `radial-gradient(${w} ${h} at ${x} ${y}, ${color}, rgba(0,0,0,0) 72%)`;

/** Compone las capas en el orden de `background` (la primera queda arriba). */
const layers = (...css: string[]) => css.join(", ");

/**
 * Movimientos disponibles (los implementa `.artMotion` en el CSS):
 *   breathe → respira: escala y opacidad suaves (una luz que late)
 *   drift   → deriva: se desplaza en un bucle lento (halos de color)
 *   flicker → titila irregular (neón)
 *   twinkle → parpadea en alternancia (estrellas)
 *   rise    → sube en bucle continuo (brasas): pide una trama que repita en Y
 *   pan     → se desplaza en línea recta y vuelve a empezar: pide una trama
 *             que repita, y `dx`/`dy` = UN período exacto para que no salte
 *   sway    → se mece (hojas)
 *   sweep   → un haz de luz cruza la tarjeta y desaparece
 */
export type ArtMotionKind =
  | "breathe"
  | "drift"
  | "flicker"
  | "twinkle"
  | "rise"
  | "pan"
  | "sway"
  | "sweep";

export interface ArtLayer {
  /** Valor de `background` de la capa (con posición/tamaño si es trama). */
  bg: string;
  kind: ArtMotionKind;
  /** Duración de un ciclo, en segundos. */
  dur: number;
  /** Desplazamiento por ciclo (sólo pan/rise), en px. */
  dx?: number;
  dy?: number;
}

export interface TemplateArt {
  /** Lo que no se mueve: degradé base + sombras. */
  base: string;
  /** Capa animada principal (la luz o el motivo). */
  a?: ArtLayer;
  /** Capa animada secundaria. */
  b?: ArtLayer;
}

const pan = (bg: string, dur: number, dx: number, dy: number): ArtLayer => ({ bg, kind: "pan", dur, dx, dy });
const rise = (bg: string, dur: number, dy: number): ArtLayer => ({ bg, kind: "rise", dur, dx: 0, dy });
const motion = (kind: Exclude<ArtMotionKind, "pan" | "rise">, bg: string, dur: number): ArtLayer => ({
  bg,
  kind,
  dur,
});

/** Haz de luz diagonal para `sweep`: una banda blanda que cruza la tarjeta. */
const lightBand = (alpha: number) =>
  `linear-gradient(105deg, rgba(255,255,255,0) 30%, rgba(255,255,255,${alpha}) 50%, rgba(255,255,255,0) 70%)`;

/**
 * Abanico de hojas lenticuladas rotadas desde un mismo eje (palmera/helecho).
 * Una sola forma repetida: da una silueta legible en vez de manchas sueltas.
 * `transform` orienta el abanico (identidad o espejo) para anclarlo en una u
 * otra esquina del lienzo.
 */
const frondFan = (fill: string, opacity: number, transform: string) => {
  const leaf = "M0 0C26-16 62-18 96 0 62 18 26 16 0 0Z";
  const leaves = [-80, -58, -36, -14, 8]
    .map((a) => `%3Cpath d='${leaf}' transform='rotate(${a})'/%3E`)
    .join("");
  // El viewBox encuadra el abanico justo: así `background-size` controla su
  // tamaño real y anclarlo a una esquina no lo recorta por accidente.
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-20 -100 125 125'%3E%3Cg fill='%23${fill}' opacity='${opacity}' transform='${transform}'%3E${leaves}%3C/g%3E%3C/svg%3E")`;
};

/** Fronda clara: nace en la esquina inferior izquierda y abre hacia arriba. */
const FROND_LIGHT = frondFan("A8DC4A", 0.9, "rotate(0)");
/** Fronda oscura: la misma en espejo, cayendo desde la esquina superior derecha. */
const FROND_DARK = frondFan("0E4F12", 0.5, "rotate(180 42.5 -37.5)");

/** Garabatos a mano alzada: bucles y nubes de trazo fino, sin relleno. */
const DOODLE_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cg fill='none' stroke='%235B57D6' stroke-width='2' stroke-linecap='round' opacity='0.32'%3E%3Cpath d='M24 78q20-34 40 0t40 0t40 2'/%3E%3Cpath d='M186 40q18-26 36-6t34 4'/%3E%3Cpath d='M40 200q24-30 48-4t48 0'/%3E%3Cpath d='M196 232q22-32 44 0t44-2'/%3E%3Ccircle cx='252' cy='150' r='18'/%3E%3Ccircle cx='96' cy='134' r='10'/%3E%3Cpath d='M140 268q16-20 32 0'/%3E%3C/g%3E%3C/svg%3E")`;

/** Cielo estrellado: puntos de distinto tamaño y opacidad, sin patrón obvio. */
const STAR_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cg fill='white'%3E%3Ccircle cx='16' cy='24' r='1.4' opacity='0.9'/%3E%3Ccircle cx='68' cy='10' r='1' opacity='0.6'/%3E%3Ccircle cx='128' cy='34' r='1.3' opacity='0.8'/%3E%3Ccircle cx='170' cy='12' r='0.9' opacity='0.5'/%3E%3Ccircle cx='40' cy='84' r='1.1' opacity='0.7'/%3E%3Ccircle cx='104' cy='72' r='0.9' opacity='0.55'/%3E%3Ccircle cx='150' cy='104' r='1.4' opacity='0.85'/%3E%3Ccircle cx='22' cy='140' r='1' opacity='0.6'/%3E%3Ccircle cx='84' cy='128' r='1.3' opacity='0.75'/%3E%3Ccircle cx='132' cy='164' r='1' opacity='0.6'/%3E%3Ccircle cx='60' cy='168' r='0.8' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`;

/** Segunda constelación, desfasada de la primera: es la que parpadea. */
const STAR_TILE_B = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cg fill='white'%3E%3Ccircle cx='44' cy='40' r='1.6' opacity='0.95'/%3E%3Ccircle cx='96' cy='22' r='1.1' opacity='0.7'/%3E%3Ccircle cx='156' cy='58' r='1.5' opacity='0.9'/%3E%3Ccircle cx='12' cy='104' r='1.2' opacity='0.8'/%3E%3Ccircle cx='72' cy='96' r='1.8' opacity='0.9'/%3E%3Ccircle cx='120' cy='128' r='1' opacity='0.65'/%3E%3Ccircle cx='166' cy='150' r='1.3' opacity='0.8'/%3E%3Ccircle cx='36' cy='166' r='1.5' opacity='0.85'/%3E%3C/g%3E%3C/svg%3E")`;

/** Brasas: chispas cálidas de distinto tamaño que suben (trama que repite en Y). */
const EMBER_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 240'%3E%3Cg fill='%23FFC87A'%3E%3Ccircle cx='20' cy='30' r='1.6' opacity='0.85'/%3E%3Ccircle cx='72' cy='12' r='1.1' opacity='0.6'/%3E%3Ccircle cx='150' cy='44' r='1.9' opacity='0.9'/%3E%3Ccircle cx='108' cy='84' r='1.2' opacity='0.55'/%3E%3Ccircle cx='38' cy='118' r='1.5' opacity='0.8'/%3E%3Ccircle cx='176' cy='128' r='1' opacity='0.5'/%3E%3Ccircle cx='90' cy='160' r='1.7' opacity='0.85'/%3E%3Ccircle cx='140' cy='196' r='1.3' opacity='0.65'/%3E%3Ccircle cx='56' cy='214' r='1.1' opacity='0.55'/%3E%3Ccircle cx='188' cy='224' r='1.6' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E")`;

/** Cáusticas: manchas blandas de luz como las del fondo de una pileta. */
const CAUSTIC_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 260'%3E%3Cg fill='none' stroke='white' stroke-width='9' stroke-linecap='round' opacity='0.13'%3E%3Cpath d='M18 66q40-38 80 0t80 0t70-6'/%3E%3Cpath d='M-10 150q36-30 72 0t72 0t72-4t60 4'/%3E%3Cpath d='M30 236q38-34 76 0t76 0t68-6'/%3E%3C/g%3E%3C/svg%3E")`;

/** Azúcar: puntitos de crema muy tenues que caen despacio. */
const SUGAR_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cg fill='%23FFF6E6'%3E%3Ccircle cx='14' cy='18' r='1.7' opacity='0.7'/%3E%3Ccircle cx='66' cy='8' r='1.2' opacity='0.5'/%3E%3Ccircle cx='100' cy='36' r='1.5' opacity='0.65'/%3E%3Ccircle cx='40' cy='62' r='1.3' opacity='0.55'/%3E%3Ccircle cx='84' cy='80' r='1.8' opacity='0.7'/%3E%3Ccircle cx='22' cy='104' r='1.1' opacity='0.5'/%3E%3Ccircle cx='58' cy='112' r='1.5' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`;

// ─── Arte de fondo por plantilla (bg.type === "preset") ──────────────────────
// Las 18 plantillas de SPEC-LINKHUB.md §7.2, cada una con su concepto en una
// línea. Los ids NO cambian: una página guardada conserva su plantilla.

export const TEMPLATE_ART: Record<string, TemplateArt> = {
  // 1-izq — papel: luz alta arriba, sombra de arcilla en la esquina baja. Un
  // haz de luz cruza el papel cada tanto, como una ventana.
  "torn-paper": {
    base: layers(
      bloom("50%", "-8%", "120%", "62%", "rgba(255,255,255,0.9)"),
      bloom("88%", "104%", "80%", "56%", "rgba(196,176,148,0.42)"),
      "linear-gradient(180deg,#F7F4ED 0%,#EFEADF 58%,#E3DCCC 100%)"
    ),
    a: motion("sweep", lightBand(0.55), 16),
  },

  // 1-centro — sol de tarde: halo cálido arriba que late, oliva en sombra al
  // pie. El arranque queda a media luz para que el texto blanco lea sobre él.
  "sunlit-crowd": {
    base: layers(
      bloom("16%", "92%", "96%", "52%", "rgba(52,62,40,0.5)"),
      "linear-gradient(180deg,#AC9F82 0%,#8F8B6E 46%,#63684E 76%,#454C3B 100%)"
    ),
    a: motion("breathe", bloom("50%", "2%", "112%", "52%", "rgba(255,220,158,0.5)"), 9),
  },

  // 1-der — atardecer sobre el mar: rosa arriba, turquesa en el agua. El sol
  // late en el horizonte y el reflejo del agua deriva debajo.
  "surf-sunset": {
    base: "linear-gradient(180deg,#4E77B6 0%,#A96F8D 32%,#3B98AC 62%,#0B5169 100%)",
    a: motion("breathe", bloom("50%", "44%", "66%", "30%", "rgba(255,206,158,0.62)"), 7),
    b: motion("drift", bloom("50%", "70%", "130%", "32%", "rgba(122,224,226,0.3)"), 13),
  },

  // 2-izq — estudio en penumbra: foco cenital que respira y madera cálida abajo.
  "studio-dusk": {
    base: layers(
      bloom("72%", "98%", "112%", "52%", "rgba(150,96,52,0.5)"),
      "linear-gradient(180deg,#4B4C43 0%,#35362E 52%,#2A2721 100%)"
    ),
    a: motion("breathe", bloom("50%", "-2%", "92%", "48%", "rgba(255,255,255,0.20)"), 8),
  },

  // 2-centro — azul de cancha: cielo arriba, profundidad al fondo; la luz deriva.
  "court-blue": {
    base: "linear-gradient(180deg,#2E97E8 0%,#1571BE 52%,#0A4C8F 100%)",
    a: motion("drift", bloom("50%", "0%", "104%", "46%", "rgba(255,255,255,0.24)"), 12),
  },

  // 2-der — callejón de neón: carteles magenta y violeta que titilan en la noche.
  "neon-alley": {
    base: "linear-gradient(168deg,#2B0D20 0%,#5E1533 40%,#2E1246 72%,#120E24 100%)",
    a: motion("flicker", bloom("74%", "8%", "82%", "46%", "rgba(255,72,110,0.52)"), 5),
    b: motion("flicker", bloom("16%", "58%", "72%", "44%", "rgba(126,62,255,0.42)"), 7.3),
  },

  // 3-izq — cancha de barrio: dos planos con la línea blanca en diagonal, y el
  // sol que la barre.
  "street-court": {
    base: layers(
      "linear-gradient(158deg, rgba(0,0,0,0) 45.2%, rgba(255,255,255,0.9) 45.2%, rgba(255,255,255,0.9) 48.6%, rgba(0,0,0,0) 48.6%)",
      bloom("24%", "10%", "84%", "46%", "rgba(255,255,255,0.16)"),
      "linear-gradient(158deg,#C8613F 0%,#A94429 45.2%,#2B4A7B 48.6%,#1B3660 100%)"
    ),
    a: motion("sweep", lightBand(0.16), 14),
  },

  // 3-centro — brasas: naranja encendido que se apaga en carbón; chispas que
  // suben y un resplandor que late.
  "ember-fade": {
    base: "linear-gradient(180deg,#E2913A 0%,#BC5F2A 30%,#59372E 68%,#211D24 100%)",
    a: rise(`${EMBER_TILE} 0 0 / 200px 240px repeat`, 14, 240),
    b: motion("breathe", bloom("50%", "4%", "104%", "44%", "rgba(255,196,110,0.52)"), 6),
  },

  // 3-der — cielo nocturno: estrellas fijas y otras que parpadean; rosa del
  // amanecer que late al pie.
  "midnight-arcade": {
    base: layers(
      `${STAR_TILE} 0 0 / 180px 180px repeat`,
      "linear-gradient(180deg,#141026 0%,#241736 46%,#4E2244 76%,#8C3C4E 100%)"
    ),
    a: motion("twinkle", `${STAR_TILE_B} 0 0 / 180px 180px repeat`, 3.2),
    b: motion("breathe", bloom("50%", "98%", "132%", "44%", "rgba(214,110,104,0.5)"), 10),
  },

  // 4-izq — vegetal: fronda clara abajo, hoja oscura arriba, verde pleno. Las
  // hojas se mecen.
  botanical: {
    base: "linear-gradient(180deg,#22872A 0%,#186B1D 100%)",
    a: motion(
      "sway",
      layers(
        `${FROND_LIGHT} left -14px bottom -18px / 300px auto no-repeat`,
        `${FROND_DARK} right -22px top -26px / 240px auto no-repeat`
      ),
      8
    ),
  },

  // 4-centro — cuaderno: garabatos índigo que van a la deriva sobre papel.
  "doodle-ink": {
    base: "linear-gradient(180deg,#FBFBFF 0%,#F1F2FA 100%)",
    a: pan(`${DOODLE_TILE} 0 0 / 300px 300px repeat`, 70, -300, -300),
  },

  // 4-der — holográfico: tres manchas pastel que derivan y un brillo que cruza.
  "holo-haze": {
    base: "linear-gradient(150deg,#DCE3EF 0%,#E9E6EE 52%,#D6D2DC 100%)",
    a: motion(
      "drift",
      layers(
        bloom("18%", "8%", "72%", "50%", "rgba(150,186,236,0.72)"),
        bloom("86%", "26%", "68%", "46%", "rgba(204,230,204,0.68)"),
        bloom("58%", "92%", "94%", "52%", "rgba(244,198,176,0.78)")
      ),
      14
    ),
    b: motion("sweep", lightBand(0.5), 11),
  },

  // 5-izq — pista de atletismo: los carriles corren en su diagonal (112°: un
  // período de 96px = (89, 36) px) y el sol respira arriba.
  "track-lanes": {
    base: "linear-gradient(196deg,#3F7DDA 0%,#2A5CC0 58%,#1E479E 100%)",
    a: pan(
      "repeating-linear-gradient(112deg, rgba(255,255,255,0) 0 92px, rgba(255,255,255,0.26) 92px 96px)",
      9,
      89,
      36
    ),
    b: motion("breathe", bloom("50%", "2%", "104%", "42%", "rgba(255,255,255,0.18)"), 8),
  },

  // 5-centro — concreto: luz rasante que respira arriba, sombra profunda al fondo.
  "skate-mono": {
    base: "linear-gradient(180deg,#7E7E7E 0%,#4C4C4C 48%,#212121 100%)",
    a: motion("breathe", bloom("50%", "-6%", "112%", "50%", "rgba(255,255,255,0.22)"), 9),
  },

  // 5-der — pastelería: crema que late arriba, azúcar que cae, caramelo abajo.
  patisserie: {
    base: "linear-gradient(180deg,#EFD8BC 0%,#DDAF80 46%,#C08B52 100%)",
    a: motion("breathe", bloom("50%", "0%", "104%", "44%", "rgba(255,246,232,0.72)"), 8),
    b: pan(`${SUGAR_TILE} 0 0 / 120px 120px repeat`, 22, 0, 120),
  },

  // 6-izq — oliva retro: luz tibia que respira arriba, verde apagado al pie.
  "retro-juice": {
    base: "linear-gradient(180deg,#6C7452 0%,#575E44 58%,#464C39 100%)",
    a: motion("breathe", bloom("50%", "-2%", "104%", "46%", "rgba(226,224,190,0.3)"), 10),
  },

  // 6-centro — pileta: cáusticas que corren por el agua y el reflejo del fondo.
  poolside: {
    base: layers(
      bloom("50%", "4%", "104%", "44%", "rgba(255,255,255,0.28)"),
      "linear-gradient(180deg,#63C0BF 0%,#4FADAC 52%,#8FCCBE 100%)"
    ),
    a: pan(`${CAUSTIC_TILE} 0 0 / 260px 260px repeat`, 16, 260, -260),
    b: motion("breathe", bloom("50%", "100%", "124%", "40%", "rgba(212,236,222,0.68)"), 7),
  },

  // 6-der — arcilla del desierto: sombra arriba, arena caliente que vibra abajo.
  "desert-clay": {
    base: "linear-gradient(180deg,#6F5C50 0%,#94795F 44%,#BE9A70 100%)",
    a: motion("drift", bloom("50%", "102%", "124%", "50%", "rgba(226,188,140,0.58)"), 12),
    b: motion("sweep", lightBand(0.14), 18),
  },
};

// ─── Patrones genéricos (bg.presetId) ────────────────────────────────────────
// Mismo criterio que las plantillas: trama sobria + un halo que da profundidad.
// La trama es la capa que se mueve (un período exacto por ciclo, sin saltos).

const WAVE_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 24'%3E%3Cpath d='M0,12Q12,2,24,12T48,12' fill='none' stroke='%230C7C8E' stroke-width='1.6' stroke-linecap='round' opacity='0.5'/%3E%3C/svg%3E")`;

const CONFETTI_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cg opacity='0.75'%3E%3Crect x='8' y='10' width='4' height='11' rx='2' fill='%23FF5A5F' transform='rotate(24 10 15)'/%3E%3Crect x='52' y='6' width='4' height='11' rx='2' fill='%234A7DFF' transform='rotate(-38 54 11)'/%3E%3Crect x='30' y='38' width='4' height='11' rx='2' fill='%23FFC53F' transform='rotate(12 32 43)'/%3E%3Crect x='64' y='48' width='4' height='11' rx='2' fill='%232EA56B' transform='rotate(-16 66 53)'/%3E%3Crect x='14' y='60' width='4' height='11' rx='2' fill='%236A5AE0' transform='rotate(42 16 65)'/%3E%3C/g%3E%3C/svg%3E")`;

export const PATTERN_ART: Record<string, TemplateArt> = {
  "pattern-dots": {
    base: layers(
      bloom("50%", "0%", "110%", "50%", "rgba(255,255,255,0.7)"),
      "linear-gradient(180deg,#F6F3EA 0%,#EDE9DE 100%)"
    ),
    a: pan(
      "radial-gradient(circle 2px at 3px 3px, rgba(43,43,43,0.24) 2px, rgba(0,0,0,0) 2.5px) 0 0 / 22px 22px repeat",
      18,
      22,
      22
    ),
  },
  "pattern-stripes": {
    base: layers(
      bloom("50%", "0%", "110%", "48%", "rgba(255,255,255,0.2)"),
      "linear-gradient(180deg,#5081FF 0%,#2F55C8 100%)"
    ),
    // 52°: período 32px → (25.2, 19.7) px.
    a: pan("repeating-linear-gradient(52deg, rgba(255,255,255,0.08) 0 16px, rgba(0,0,0,0) 16px 32px)", 6, 25.2, 19.7),
  },
  "pattern-zigzag": {
    base: layers(
      "repeating-linear-gradient(45deg, rgba(255,168,64,0.5) 0 3px, rgba(0,0,0,0) 3px 18px)",
      "linear-gradient(180deg,#FFF6E9 0%,#FBE7CC 100%)"
    ),
    // 135°: período 18px → (12.7, 12.7) px.
    a: pan("repeating-linear-gradient(135deg, rgba(255,168,64,0.5) 0 3px, rgba(0,0,0,0) 3px 18px)", 8, 12.7, 12.7),
  },
  "pattern-grid": {
    base: layers(
      "linear-gradient(90deg, rgba(74,125,255,0.2) 1px, rgba(0,0,0,0) 1px) 0 0 / 24px 100% repeat",
      "linear-gradient(180deg,#FBFBFF 0%,#F1F3FC 100%)"
    ),
    a: pan("linear-gradient(rgba(74,125,255,0.2) 1px, rgba(0,0,0,0) 1px) 0 0 / 100% 24px repeat", 10, 0, -24),
  },
  "pattern-waves": {
    base: layers(
      bloom("50%", "0%", "110%", "50%", "rgba(255,255,255,0.6)"),
      "linear-gradient(180deg,#E9F4F6 0%,#D5E9ED 100%)"
    ),
    a: pan(`${WAVE_TILE} 0 0 / 48px 24px repeat`, 7, 48, 0),
  },
  "pattern-checker": {
    base: "linear-gradient(180deg,#F6F2E8 0%,#EAE4D6 100%)",
    a: pan(
      "conic-gradient(rgba(43,43,43,0.9) 0 25%, rgba(0,0,0,0) 0 50%, rgba(43,43,43,0.9) 0 75%, rgba(0,0,0,0) 0) 0 0 / 28px 28px repeat",
      12,
      28,
      28
    ),
  },
  "pattern-confetti": {
    base: "linear-gradient(180deg,#FFFDF7 0%,#FBF5E9 100%)",
    a: pan(`${CONFETTI_TILE} 0 0 / 80px 80px repeat`, 16, 0, 80),
  },
};

/** Composición ESTÁTICA de todas las capas (muestras del selector, fallback). */
const composeArt = (art: TemplateArt): string =>
  layers(...[art.a?.bg, art.b?.bg].filter((x): x is string => Boolean(x)), art.base);

/** Arte completo por plantilla como un solo `background` (para las muestras). */
export const TEMPLATE_BACKGROUNDS: Record<string, string> = Object.fromEntries(
  Object.entries(TEMPLATE_ART).map(([id, art]) => [id, composeArt(art)])
);

/** Patrones genéricos como un solo `background` (para las muestras). */
export const EXTRA_PATTERNS: Record<string, string> = Object.fromEntries(
  Object.entries(PATTERN_ART).map(([id, art]) => [id, composeArt(art)])
);

const presetArt = (id: string): TemplateArt | undefined => PATTERN_ART[id] ?? TEMPLATE_ART[id];

/**
 * Vida para los fondos que el usuario arma a mano (sólido/degradé): una luz
 * blanda que deriva arriba y una sombra que deriva abajo. Sobre una foto no va
 * nada — la foto ya es el arte, y en desktop el ambiente desenfocado se mueve.
 */
const CUSTOM_LIGHT: ArtLayer = motion(
  "drift",
  layers(
    bloom("30%", "-4%", "110%", "54%", "rgba(255,255,255,0.22)"),
    bloom("78%", "104%", "96%", "50%", "rgba(0,0,0,0.12)")
  ),
  16
);

/** Arte de la página: qué se queda quieto y qué se mueve. */
export function artOf(theme: LinkhubTheme): TemplateArt {
  const bg = theme.background;
  if (bg.type === "preset") {
    const art = (bg.presetId ? presetArt(bg.presetId) : undefined) ?? TEMPLATE_ART[theme.templateId];
    return art ?? { base: bg.color ?? "#ffffff" };
  }
  if (bg.type === "gradient" && bg.gradient) {
    return {
      base: `linear-gradient(${bg.gradient.angle}deg, ${bg.gradient.from}, ${bg.gradient.to})`,
      a: CUSTOM_LIGHT,
    };
  }
  if (bg.type === "image" && bg.imageUrl) {
    const o = typeof bg.overlayOpacity === "number" ? bg.overlayOpacity : 0.4;
    return {
      base: `linear-gradient(rgba(0,0,0,${o}), rgba(0,0,0,${o})), url("${bg.imageUrl}") center / cover no-repeat`,
    };
  }
  return { base: bg.color || "#ffffff", a: CUSTOM_LIGHT };
}

/** Valor CSS de `background` del arte COMPLETO (estático). */
export function backgroundValue(theme: LinkhubTheme): string {
  return composeArt(artOf(theme));
}

/**
 * Movimiento de cada capa animada, para los `data-a`/`data-b` de `.artMotion`
 * (el CSS elige los keyframes por atributo: los nombres de `@keyframes` de un
 * CSS module se hashean y no se pueden pasar por variable).
 */
export function artMotionOf(theme: LinkhubTheme): { a: ArtMotionKind | null; b: ArtMotionKind | null } {
  const art = artOf(theme);
  return { a: art.a?.kind ?? null, b: art.b?.kind ?? null };
}

/**
 * Fondo del LIENZO que rodea a la tarjeta en tablet/desktop (en mobile la
 * tarjeta ocupa todo y esto no se ve). Con fondo de imagen es la misma foto,
 * que el CSS desenfoca; en el resto, un halo derivado del color base del tema.
 */
export function ambientValue(theme: LinkhubTheme): string {
  const bg = theme.background;
  if (bg.type === "image" && bg.imageUrl) {
    return `url("${bg.imageUrl}") center / cover no-repeat`;
  }
  const base =
    (bg.type === "gradient" && bg.gradient?.from) || bg.color || theme.colors.primary || "#2B2B31";
  return `radial-gradient(120% 92% at 50% 26%, ${tintHex(base, 0.12)}, ${shadeHex(base, 0.26)} 100%)`;
}

/** Piezas visuales de un botón para un estilo dado. */
export interface ButtonVisual {
  bg: string;
  text: string;
  border: string;
  borderWidth: string;
  /** Sombra en reposo. */
  shadow: string;
  /** Sombra al pasar el mouse (el botón se levanta). */
  shadowHover: string;
  /** Sombra al presionar (el botón se hunde). */
  shadowActive: string;
  /**
   * Sombras de la TARJETA del motor (sin máscara): en los estilos de papel
   * (torn/wavy) el botón no lleva box-shadow porque la máscara lo recorta, pero
   * la tarjeta es un rectángulo liso y sin sombra quedaba pegada al fondo.
   */
  cardShadow: string;
  cardShadowHover: string;
  cardShadowActive: string;
  mask: string;
  filter: string;
  filterHover: string;
}

/**
 * Sombra blanda de dos capas (contacto + ambiente), la que da profundidad sin
 * "dibujar" un borde. En temas oscuros va más marcada: sobre arte oscuro una
 * sombra tenue no se ve.
 */
const softShadow = (dark: boolean, lift: 0 | 1 | 2): string => {
  const k = dark ? 1.35 : 1;
  const [y1, b1, a1, y2, b2, a2] = [
    [1, 2, 0.06, 6, 18, 0.16],
    [2, 4, 0.08, 16, 32, 0.24],
    [1, 2, 0.06, 3, 10, 0.12],
  ][lift];
  return `0 ${y1}px ${b1}px rgba(0,0,0,${(a1 * k).toFixed(3)}), 0 ${y2}px ${b2}px -${Math.round(b2 / 3)}px rgba(0,0,0,${(a2 * k).toFixed(3)})`;
};

export function buttonVisual(theme: LinkhubTheme, styleOverride?: string): ButtonVisual {
  const dark = theme.mode !== "light";
  const v: ButtonVisual = {
    bg: theme.colors.primary,
    text: theme.colors.buttonText,
    border: "transparent",
    borderWidth: "0px",
    shadow: softShadow(dark, 0),
    shadowHover: softShadow(dark, 1),
    shadowActive: softShadow(dark, 2),
    cardShadow: softShadow(dark, 0),
    cardShadowHover: softShadow(dark, 1),
    cardShadowActive: softShadow(dark, 2),
    mask: "none",
    filter: "none",
    filterHover: "none",
  };

  switch (styleOverride ?? theme.buttonStyle) {
    case "outline":
      v.bg = "#ffffff";
      v.text = theme.colors.primary;
      v.border = theme.colors.primary;
      v.borderWidth = "2px";
      v.shadow = "none";
      v.shadowHover = softShadow(dark, 1);
      v.shadowActive = "none";
      v.cardShadow = "none";
      v.cardShadowActive = "none";
      break;
    case "shadow":
      v.bg = "#ffffff";
      v.text = "#16161A";
      v.border = "#16161A";
      v.borderWidth = "1.5px";
      // Sombra dura: al pasar el mouse el botón se separa más de su sombra; al
      // presionar se apoya sobre ella.
      v.shadow = "4px 4px 0 #16161A";
      v.shadowHover = "6px 6px 0 #16161A";
      v.shadowActive = "2px 2px 0 #16161A";
      v.cardShadow = v.shadow;
      v.cardShadowHover = v.shadowHover;
      v.cardShadowActive = v.shadowActive;
      break;
    case "soft":
      v.bg = hexToRgba(theme.colors.primary, 0.14);
      v.text = theme.colors.primary;
      v.shadow = "none";
      v.shadowHover = softShadow(dark, 1);
      v.shadowActive = "none";
      v.cardShadow = "none";
      v.cardShadowActive = "none";
      break;
    case "torn":
      // Con máscara el box-shadow se recorta: la sombra sigue la silueta vía filter.
      v.mask = TORN_MASK;
      v.shadow = "none";
      v.shadowHover = "none";
      v.shadowActive = "none";
      v.filter = "drop-shadow(0 2px 3px rgba(0,0,0,0.2))";
      v.filterHover = "drop-shadow(0 8px 12px rgba(0,0,0,0.26))";
      break;
    case "wavy":
      v.mask = WAVY_MASK;
      v.shadow = "none";
      v.shadowHover = "none";
      v.shadowActive = "none";
      v.filter = "drop-shadow(0 2px 3px rgba(0,0,0,0.16))";
      v.filterHover = "drop-shadow(0 8px 12px rgba(0,0,0,0.22))";
      break;
    case "hardshadow": {
      const c = isLightHex(theme.colors.primary) ? "#26262B" : shadeHex(theme.colors.primary, 0.5);
      v.shadow = `4px 4px 0 ${c}`;
      v.shadowHover = `6px 6px 0 ${c}`;
      v.shadowActive = `2px 2px 0 ${c}`;
      v.cardShadow = v.shadow;
      v.cardShadowHover = v.shadowHover;
      v.cardShadowActive = v.shadowActive;
      break;
    }
    case "fill":
    default:
      break;
  }
  return v;
}

/** Traduce el tema a variables CSS (`--lh-*`) que consumen los componentes. */
export function themeToVars(theme: LinkhubTheme): CSSProperties {
  const art = artOf(theme);
  const font = fontStack(theme);
  const radius = RADII[theme.cornerStyle] ?? RADII.rounded;
  const mediaRadius = MEDIA_RADII[theme.cornerStyle] ?? MEDIA_RADII.rounded;
  const cardRadius = CARD_RADII[theme.cornerStyle] ?? CARD_RADII.rounded;
  const fieldRadius = FIELD_RADII[theme.cornerStyle] ?? FIELD_RADII.rounded;
  const chipRadius = CHIP_RADII[theme.cornerStyle] ?? CHIP_RADII.rounded;
  const v = buttonVisual(theme);
  const dark = theme.mode !== "light";

  const vars: Record<string, string> = {
    "--lh-bg": art.base,
    "--lh-ambient": ambientValue(theme),
    // Sólo la foto del usuario se desenfoca: el halo derivado ya es suave.
    "--lh-ambient-blur": theme.background.type === "image" ? "56px" : "0px",
    "--lh-text": theme.colors.text,
    "--lh-text-secondary": hexToRgba(theme.colors.text, 0.82),
    "--lh-primary": theme.colors.primary,
    "--lh-radius": radius,
    "--lh-radius-media": mediaRadius,
    "--lh-radius-card": cardRadius,
    "--lh-radius-field": fieldRadius,
    "--lh-radius-chip": chipRadius,
    "--lh-font": font,
    // Sobre arte oscuro el texto necesita un apoyo mínimo para no "flotar".
    "--lh-text-shadow": dark ? "0 1px 4px rgba(0,0,0,0.38)" : "none",
    "--lh-avatar-ring": dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.08)",
    "--lh-chip-bg": dark ? "rgba(18,18,22,0.5)" : "rgba(255,255,255,0.72)",
    "--lh-chip-text": dark ? "#FFFFFF" : "#1A1A1F",
    // Tinta de lo que se dibuja SOBRE el ambiente (el QR "Ver en mobile"), que
    // no tiene chip detrás: sale del modo del tema, igual que el chip. OPACA a
    // propósito — el QR se pinta con relleno y trazo del mismo color, y con
    // alfa < 1 las zonas donde se superponen componen distinto y dibujan una
    // retícula sobre los bloques macizos.
    "--lh-ambient-text": dark ? "#FFFFFF" : "#141418",
    "--lh-card-shadow": "0 28px 64px rgba(0,0,0,0.28), 0 2px 10px rgba(0,0,0,0.12)",
    // Filo de la tarjeta sobre el ambiente: un hilo de luz en el borde, como
    // el vidrio; más visible sobre arte oscuro.
    "--lh-card-edge": dark ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.7)",
    "--lh-btn-bg": v.bg,
    "--lh-btn-text": v.text,
    "--lh-btn-border": v.border,
    "--lh-btn-border-width": v.borderWidth,
    "--lh-btn-shadow": v.shadow,
    "--lh-btn-shadow-hover": v.shadowHover,
    "--lh-btn-shadow-active": v.shadowActive,
    "--lh-card-elev": v.cardShadow,
    "--lh-card-elev-hover": v.cardShadowHover,
    "--lh-card-elev-active": v.cardShadowActive,
    "--lh-btn-mask": v.mask,
    "--lh-btn-filter": v.filter,
    "--lh-btn-filter-hover": v.filterHover,
    // Botón invertido (la lupa del motor embebido): el texto del botón de fondo
    // y, encima, blanco o negro según su luminancia. No el fondo del botón: hay
    // temas con par texto/fondo de poco contraste (torn: casi negro sobre rojo)
    // que invertido se lee peor, y en "soft" el fondo es translúcido.
    "--lh-btn-invert-bg": v.text,
    "--lh-btn-invert-text": isLightHex(v.text) ? "#16161A" : "#ffffff",
  };

  // Capas animadas del arte. Sin capa, la variable no existe y el pseudo
  // elemento queda sin fondo (var() con fallback `none` en el CSS).
  const layerVars = (key: "a" | "b", layer?: ArtLayer) => {
    if (!layer) return;
    vars[`--lh-art-${key}`] = layer.bg;
    vars[`--lh-art-${key}-dur`] = `${layer.dur}s`;
    vars[`--lh-art-${key}-dx`] = `${layer.dx ?? 0}px`;
    vars[`--lh-art-${key}-dy`] = `${layer.dy ?? 0}px`;
  };
  layerVars("a", art.a);
  layerVars("b", art.b);

  return {
    ...(vars as unknown as CSSProperties),
    color: theme.colors.text,
    fontFamily: font,
  };
}
