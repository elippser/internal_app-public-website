/**
 * El logotipo de bookfer.
 *
 * La marca es un cúmulo de cuatro círculos con una estrella de cuatro puntas
 * recortada en el medio. Se dibuja con una máscara: los círculos en blanco
 * (lo que se pinta) y la estrella en negro (el hueco), y encima un rectángulo
 * del color actual filtrado por esa máscara.
 *
 * Por eso el color sale de `currentColor` y no de un `fill` fijo: el mismo
 * componente sirve sobre papel (tinta) y sobre tinta (papel), y hereda el
 * color de donde se lo monte.
 *
 * `id` existe porque una máscara SVG se referencia por id, y en una página hay
 * más de un logo (header y pie). Dos elementos con el mismo id es HTML
 * inválido —funcionaría igual porque la máscara es idéntica, pero no hay
 * motivo para dejarlo mal—, así que cada lugar pasa el suyo.
 */
export default function Logo({
  tone = "ink",
  showWordmark = true,
  size = 26,
  id = "bookfer-mark",
}: {
  tone?: "ink" | "paper" | "current";
  showWordmark?: boolean;
  size?: number;
  id?: string;
}) {
  const color =
    tone === "ink" ? "var(--ink)" : tone === "paper" ? "var(--paper)" : undefined;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        lineHeight: 1,
        color,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ flex: "none" }}
      >
        <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="black" />
          <circle cx="9.6" cy="6.4" r="6" fill="white" />
          <circle cx="17.4" cy="9.2" r="5.9" fill="white" />
          <circle cx="6.6" cy="13.9" r="6.2" fill="white" />
          <circle cx="14.4" cy="17.2" r="6.2" fill="white" />
          <path
            d="M12 5.9c.5 3.5 2.6 5.6 6.1 6.1-3.5.5-5.6 2.6-6.1 6.1-.5-3.5-2.6-5.6-6.1-6.1 3.5-.5 5.6-2.6 6.1-6.1Z"
            fill="black"
          />
        </mask>
        <rect width="24" height="24" fill="currentColor" mask={`url(#${id})`} />
      </svg>
      {showWordmark && (
        <span
          style={{
            fontSize: 19.5,
            fontWeight: 600,
            letterSpacing: "-0.035em",
          }}
        >
          bookfer
        </span>
      )}
    </span>
  );
}
