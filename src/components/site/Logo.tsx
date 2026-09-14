import { roombirMarkGeometry } from "./logoPaths";

/**
 * La marca de roombir en el sitio: el logotipo (isotipo + "roombir") o, con
 * `showWordmark` en false, el isotipo solo (las cuatro formas). Los trazados
 * viven en logoPaths.ts, que genera scripts/brand/sync-roombir-brand.mjs desde
 * brand/ en la raíz.
 *
 * Las formas y la palabra salen de `currentColor` para servir sobre papel
 * (tinta) y sobre tinta (papel). El círculo es siempre de marca, pero en dos
 * claridades —musgo sobre papel, pistacho sobre tinta— siguiendo la misma regla
 * que el resto del sitio (ver tokens en globals.css).
 *
 * `size` es la altura; el ancho lo da la proporción real del dibujo. Por debajo
 * de 32 px se dibuja la versión reducida del isotipo (más aire entre formas),
 * que a ese tamaño se lee mejor que la reducción lineal.
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
  //
  // OJO con la contracara: como el tope es de ANCHO, ensanchar el lockup lo
  // achica de ALTO. Cada vez que se agranda el aire entre el isotipo y la
  // palabra sube el ratio y el logo entero se encoge, aunque nadie haya tocado
  // `size`. Con el isotipo solo el dibujo es cuadrado y el tope no llega a
  // morder, así que sólo aplica al logotipo.
  const style = {
    display: "block",
    flex: "none",
    color,
    maxWidth: showWordmark ? 128 : 96,
    height: "auto",
  } as const;

  const g = roombirMarkGeometry(size, showWordmark);

  return (
    <svg
      width={size * g.ratio}
      height={size}
      viewBox={g.viewBox}
      aria-hidden="true"
      style={style}
    >
      <path fill="currentColor" fillRule="evenodd" d={g.d} />
      {/* Por `style`: var() no vale en el atributo `fill`. */}
      <circle style={{ fill: dotFill }} cx={g.dot.cx} cy={g.dot.cy} r={g.dot.r} />
    </svg>
  );
}
