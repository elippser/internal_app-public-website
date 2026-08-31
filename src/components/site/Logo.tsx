import {
  ISOTYPE_DOT,
  ISOTYPE_RATIO,
  ISOTYPE_TEXT_PATH,
  ISOTYPE_VIEWBOX,
  LOGOTYPE_DOT,
  LOGOTYPE_RATIO,
  LOGOTYPE_TEXT_PATH,
  LOGOTYPE_VIEWBOX,
} from "./logoPaths";

/**
 * El logotipo de bookfer: la palabra "bookfer" con el punto verde
 * (brand/logotype.png), vectorizada en logoPaths.ts. Con `showWordmark`
 * en false se dibuja el isotipo: la "b." sola (brand/isotype.png).
 *
 * El texto sale de `currentColor` para servir sobre papel (tinta) y sobre
 * tinta (papel). El punto es siempre de marca, pero en dos claridades
 * —musgo sobre papel, pistacho sobre tinta— siguiendo la misma regla que
 * el resto del sitio (ver tokens en globals.css).
 *
 * `size` es la altura; el ancho lo da la proporción real del dibujo.
 */
export default function Logo({
  tone = "ink",
  showWordmark = true,
  size = 24,
}: {
  tone?: "ink" | "paper" | "current";
  showWordmark?: boolean;
  size?: number;
}) {
  // Sobre papel el logo va en un gris propio, no en var(--ink): la tinta del
  // sitio es casi negra y sobre el vidrio de la cápsula pesaba demasiado.
  const color =
    tone === "ink" ? "#323232" : tone === "paper" ? "var(--paper)" : undefined;
  const dotFill = tone === "paper" ? "var(--brand-bright)" : "var(--brand)";

  // El tope de ancho manda sobre `size`: con `height: auto` el alto sale de la
  // proporción del dibujo, así el logo se achica entero en vez de quedar
  // centrado dentro de una caja más ancha.
  const style = {
    display: "block",
    flex: "none",
    color,
    maxWidth: 96,
    height: "auto",
  } as const;

  const viewBox = showWordmark ? LOGOTYPE_VIEWBOX : ISOTYPE_VIEWBOX;
  const ratio = showWordmark ? LOGOTYPE_RATIO : ISOTYPE_RATIO;
  const textPath = showWordmark ? LOGOTYPE_TEXT_PATH : ISOTYPE_TEXT_PATH;
  const dot = showWordmark ? LOGOTYPE_DOT : ISOTYPE_DOT;

  return (
    <svg
      width={size * ratio}
      height={size}
      viewBox={viewBox}
      aria-hidden="true"
      style={style}
    >
      <path fill="currentColor" fillRule="evenodd" d={textPath} />
      <circle fill={dotFill} cx={dot.cx} cy={dot.cy} r={dot.r} />
    </svg>
  );
}
