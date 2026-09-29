/**
 * Contrato del bloque "booking" y del disparador cerrado del motor embebido.
 *
 * CLON DE PARIDAD de pms-core/app .../linkhub/components/preview/booking.ts:
 * editor y renderer dibujan el mismo disparador con estos helpers.
 *
 *  - `mode: "embed"` abre el motor de reservas de la propiedad adentro de la
 *    página — el MISMO del web-renderer (ver src/motor/). `"deeplink"` (default
 *    de los bloques viejos) es un botón a `url`.
 *  - `display` decide cómo se ve cerrado: barra de búsqueda o botón de la pila.
 *  - `accent`: color del motor; `null` = el color de marca del tema
 *    (`motorThemeAccent`).
 *
 * El motor abre siempre en claro, como el de los sitios: el `mode` del tema del
 * LinkHub es de la plantilla y no dice cómo se ve la página (una plantilla
 * "dark" con fondo degradé claro es un caso real).
 */

export type BookingMode = "embed" | "deeplink";
export type BookingDisplay = "searchbar" | "button";

const HEX_RE = /^#[0-9a-fA-F]{6}$/;
/** Accent de fábrica del motor (bookingEnginePredefinedProps). */
const MOTOR_DEFAULT_ACCENT = "#0f766e";

export const bookingMode = (content: Record<string, any> | null | undefined): BookingMode =>
  content?.mode === "embed" ? "embed" : "deeplink";

export const bookingDisplay = (content: Record<string, any> | null | undefined): BookingDisplay =>
  content?.display === "button" ? "button" : "searchbar";

/** Luminancia relativa WCAG de un #rrggbb. */
const luminance = (hex: string): number => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * El acento pinta botones y fechas del motor sobre fondo blanco (con texto
 * blanco encima): tiene que distinguirse del blanco. 3:1 = mínimo AA para
 * componentes y texto grande en negrita.
 */
const MIN_ACCENT_CONTRAST = 3;
const readsOnWhite = (hex: string) => HEX_RE.test(hex) && 1.05 / (luminance(hex) + 0.05) >= MIN_ACCENT_CONTRAST;

/**
 * Color de marca del tema para el motor. Casi todas las plantillas traen el
 * primario en BLANCO (botones blancos) y la marca en el texto de los botones:
 * tomar el primario a ciegas dejaba el motor blanco sobre blanco. Se usa el
 * primario si se lee sobre blanco; si no, el texto de los botones; si ninguno,
 * el de fábrica del motor.
 */
export const motorThemeAccent = (colors: { primary?: string; buttonText?: string } | null | undefined): string => {
  if (colors?.primary && readsOnWhite(colors.primary)) return colors.primary;
  if (colors?.buttonText && readsOnWhite(colors.buttonText)) return colors.buttonText;
  return MOTOR_DEFAULT_ACCENT;
};

/** Color del motor para un bloque: el suyo si es un #rrggbb; si no, el del tema. */
export const motorAccent = (content: Record<string, any> | null | undefined, themeAccent: string): string =>
  typeof content?.accent === "string" && HEX_RE.test(content.accent) ? content.accent : themeAccent;

/**
 * Textos de la barra cerrada: los de fábrica del motor (ENGINE_TEXT_FALLBACKS y
 * los huéspedes iniciales del Estudio). La página pública va en español, igual
 * que el motor que abre.
 */
export const MOTOR_TRIGGER_TEXT = {
  checkin: "Check-in",
  checkout: "Check-out",
  guests: "Huéspedes",
  search: "Buscar",
  adults: 2,
} as const;

/**
 * "Hoy" en la zona del motor. Mismo cálculo que `serverTodayISO` del
 * web-renderer: el motor recibe este valor como `initialToday` y lo corrige
 * recién después de montar si el día local del huésped es otro.
 */
export function motorTodayISO(timeZone = "America/Argentina/Buenos_Aires"): string {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

/** YYYY-MM-DD + n días (calendario civil, sin horas). */
export function addDaysISO(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

/** "13 sept" — mismo formato que la barra del motor. */
export function motorShortDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-AR", { day: "numeric", month: "short" });
}

/** Lupa del botón Buscar del motor (SEARCH_BTN_SVG_HTML). */
export const MOTOR_SEARCH_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
