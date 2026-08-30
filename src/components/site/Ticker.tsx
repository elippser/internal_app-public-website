/**
 * La cinta que corre entre secciones con lo que el sistema hace.
 *
 * Dos pistas idénticas una al lado de la otra, cada una desplazándose el 100%
 * de su propio ancho: cuando la primera sale, la segunda está exactamente
 * donde arrancó la primera y el loop no se nota. La segunda va `aria-hidden`
 * para que un lector de pantalla no lea todo dos veces.
 */
export default function Ticker({ items }: { items: readonly string[] }) {
  const track = (hidden: boolean) => (
    <div className="ticker-track" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="ticker-item">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="ticker">
      {track(false)}
      {track(true)}
    </div>
  );
}
