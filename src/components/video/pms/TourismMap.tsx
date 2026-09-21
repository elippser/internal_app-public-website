import s from "./TourismMap.module.css";

/**
 * El banner del panel "Mi estatus turístico" de Roombir IA: el mapa de la
 * ciudad con el pin y, encima de su borde de abajo, la tarjeta de la propiedad.
 *
 * El del producto (`TourismGlobeMap` + `.propertyCard` de `TourismStatusPanel`,
 * en pms-core/app/src/components/aiComponents) es MapLibre GL con el basemap
 * positron de CARTO: pide tiles por red y vuela con su propio reloj, así que en
 * el video —que tiene que ser una función del tiempo del beat y no depender de
 * la red— va esta copia quieta del encuadre FINAL, que es el que se lee: la
 * ciudad girada y en perspectiva (bearing −20°, pitch 52°, que acá son un giro
 * y un achatado vertical), el marcador tal como lo define
 * `TourismStatusPanel.module.css` (pin de 34 px relleno con el acento, contorno
 * blanco de 1,5 y centro blanco, con la onda del suelo debajo) y la tarjeta
 * blanca de la propiedad pisando el borde inferior, con su ícono de casa.
 */

/** Las manzanas: fila, columna y un tono fijo por posición (nada al azar: el video tiene que ser reproducible). */
const BLOCKS: { x: number; y: number; w: number; h: number; tone: number }[] = [];
for (let i = -6; i <= 6; i += 1) {
  for (let j = -6; j <= 6; j += 1) {
    const long = (i * 7 + j * 13 + 40) % 5 === 0;
    // El módulo de un negativo es negativo en JS: sin normalizar, el tono queda sin definir y la manzana se pinta de NEGRO.
    BLOCKS.push({ x: i * 44, y: j * 32, w: long ? 66 : 34, h: 22, tone: (((i * 5 + j * 3) % 4) + 4) % 4 });
  }
}
const TONES = ["#ffffff", "#f7f9fb", "#eef2f7", "#e7edf4"];

export default function TourismMap({
  color,
  name,
  meta,
  width = 300,
  height = 150,
}: {
  color: string;
  /** La propiedad: nombre y una línea de ubicación, como en la tarjeta del panel. */
  name: string;
  meta: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={s.banner} style={{ width, height }}>
      <svg viewBox="0 0 300 150" width={width} height={height} preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="tmFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(233, 238, 245, 0)" />
            <stop offset="100%" stopColor="rgba(233, 238, 245, 0.85)" />
          </linearGradient>
        </defs>

        {/* El asfalto claro del basemap positron; encima, las manzanas. */}
        <rect width="300" height="150" fill="#e9eef5" />
        <g transform="translate(150 74) scale(1 0.54) rotate(-18)">
          <rect x="-320" y="-320" width="640" height="640" fill="#fbfcfe" />
          {/* El río y el parque, las dos manchas que rompen la grilla. */}
          <path d="M-320 -150c80 40 150 30 230 70s150 60 230 40v78c-90 20-170-10-250-48s-140-30-210-62Z" fill="#dbe6f1" />
          <rect x="-150" y="62" width="120" height="64" rx="8" fill="#dde8d4" />
          {BLOCKS.map((b, i) => (
            <rect key={i} x={b.x - b.w / 2} y={b.y - b.h / 2} width={b.w} height={b.h} rx="3" fill={TONES[b.tone]} stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
          ))}
          {/* Dos avenidas anchas, como las que cruzan el centro. `fill="none"`
              es obligatorio: un trazo sin relleno declarado se rellena de negro. */}
          <path d="M-320 -14h640" fill="none" stroke="#ffffff" strokeWidth="13" />
          <path d="M-9 -320v640" fill="none" stroke="#ffffff" strokeWidth="11" />
        </g>

        {/* Desvanecido hacia el borde de abajo: ahí apoya la tarjeta de la propiedad. */}
        <rect y="86" width="300" height="64" fill="url(#tmFade)" />

        {/* El marcador: la onda apoyada en el suelo y, encima, el pin de frente. */}
        <g transform="translate(150 62)">
          <ellipse cx="0" cy="2" rx="15" ry="5.5" fill={color} opacity="0.16" />
          <ellipse cx="0" cy="2" rx="9" ry="3.2" fill={color} opacity="0.38" stroke={color} strokeWidth="1.1" />
          <g transform="translate(-13 -32) scale(1.1)">
            <path d="M12 22s8-6 8-12a8 8 0 0 0-16 0c0 6 8 12 8 12Z" fill={color} stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="3" fill="#ffffff" />
          </g>
        </g>
      </svg>

      <div className={s.propertyCard}>
        <span className={s.photoFallback} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
            <path d="M9.5 21v-6h5v6" />
          </svg>
        </span>
        <span className={s.propText}>
          <span className={s.propName}>{name}</span>
          <span className={s.propMeta}>{meta}</span>
        </span>
      </div>
    </div>
  );
}
