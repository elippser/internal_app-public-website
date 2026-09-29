import type { CSSProperties, ReactNode } from "react";
import { PmsMark } from "./PmsShell";
import s from "./Linkhub.module.css";

/**
 * El LinkHub público y el motor de reservas que abre desde su bloque,
 * reciclados de `public-side/linkhub-renderer` y del motor de
 * `public-side/web-renderer` (BookingEngineRenderer + motorCss.ts):
 *
 * - `LinkhubPage`: la tarjeta con el arte de plantilla (degradé), la marca de
 *   Roombir y compartir arriba, avatar, nombre, bio, el bloque de reserva
 *   embebido (`motorBar`: Check-in / Check-out / Huéspedes + Buscar) y los
 *   botones de enlace.
 * - `MotorSearch`: la búsqueda del motor en móvil (`motor-msearch-overlay`):
 *   tarjeta de identidad, pestañas Check-in / Check-out, el calendario con
 *   unidades y precio por día y el pie Cancelar / Siguiente.
 * - `MotorResults`: la hoja de resultados (`motor-modal-sheet`) con la barra
 *   resumen y las tarjetas de habitación con foto y precio por noche, y el
 *   botón Reservar del detalle.
 */

export type LinkhubLabels = {
  name: string;
  bio: string;
  bookTitle: string;
  checkin: string;
  checkout: string;
  guests: string;
  guestsValue: string;
  search: string;
  blocks: string[];
  footer: string;
  /* motor */
  travelers: string;
  monthTitle: string;
  dows: string[];
  cancel: string;
  next: string;
  resultsTitle: string;
  summary: string;
  rooms: { name: string; price: string }[];
  perNight: string;
  book: string;
};

const ICONS = [
  <path key="0" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />,
  <path key="1" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3zM8.5 9.5c.3 2.5 2.5 4.7 5 5l1.5-1.5 2 1-.5 2c-4-.3-7.7-4-8-8l2-.5 1 2z" />,
  <path key="2" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  <path key="3" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z" />,
];

export function LinkhubPage({
  l,
  pressing = false,
  dates,
  children,
  style,
  logo,
}: {
  l: LinkhubLabels;
  /** El logo del alojamiento en el avatar. Sin él, las iniciales (lo que muestra el LinkHub real sin logo). */
  logo?: ReactNode;
  /** El bloque de reserva está apretado. */
  pressing?: boolean;
  dates: { in: string; out: string };
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className={s.root} style={style}>
      <div className={s.stage}>
        <div className={s.topBar}>
          <span className={s.chip}>
            <PmsMark size={18} color="#fff" dot="#c8e293" />
          </span>
          <span className={s.chip}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
            </svg>
          </span>
        </div>
        <div className={s.container}>
          <header className={s.header}>
            <div className={s.avatar}>
              {logo ?? <span className={s.avatarFallback}>{l.name.slice(0, 2).toUpperCase()}</span>}
            </div>
            <div className={s.nameRow}>
              <span className={s.displayName}>{l.name}</span>
            </div>
            <div className={s.bio}>{l.bio}</div>
          </header>
          <div className={s.links}>
            <div className={s.motorBar} data-lh-motor="" style={pressing ? { transform: "scale(0.985)", filter: "brightness(0.97)" } : undefined}>
              <span className={s.motorHead}>
                <span className={s.btnIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <span className={s.btnBody}>
                  <span className={s.btnTitle}>{l.bookTitle}</span>
                </span>
                <span className={s.btnTypeIcon} />
              </span>
              <span className={s.motorFields}>
                <span className={s.motorField}>
                  <span className={s.motorLabel}>{l.checkin}</span>
                  <span className={s.motorValue}>{dates.in}</span>
                </span>
                <span className={s.motorField}>
                  <span className={s.motorLabel}>{l.checkout}</span>
                  <span className={s.motorValue}>{dates.out}</span>
                </span>
                <span className={s.motorField}>
                  <span className={s.motorLabel}>{l.guests}</span>
                  <span className={s.motorValue}>{l.guestsValue}</span>
                </span>
              </span>
              <span className={s.motorSearch} data-tap="search">
                <span className={s.motorSearchIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                {l.search}
              </span>
            </div>
            {l.blocks.map((b, i) => (
              <div key={b} className={s.block}>
                <span className={s.button}>
                  <span className={s.btnIcon}>
                    <svg viewBox="0 0 24 24" aria-hidden>
                      {ICONS[i % ICONS.length]}
                    </svg>
                  </span>
                  <span className={s.btnBody}>
                    <span className={s.btnTitle}>{b}</span>
                  </span>
                  <span className={s.btnTypeIcon} />
                </span>
              </div>
            ))}
          </div>
          <div className={s.socialRow}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={s.socialLink}>
                <svg viewBox="0 0 24 24" aria-hidden>
                  {i === 0 && (
                    <>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </>
                  )}
                  {i === 1 && <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                  {i === 2 && <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />}
                  {i === 3 && (
                    <>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </>
                  )}
                </svg>
              </span>
            ))}
          </div>
          <div className={s.footer}>{l.footer}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

const DAYS: { n: number; units: string; price: string; off?: boolean }[] = [
  { n: 15, units: "12u", price: "$96k", off: true },
  { n: 16, units: "12u", price: "$96k" },
  { n: 17, units: "11u", price: "$96k" },
  { n: 18, units: "10u", price: "$96k" },
  { n: 19, units: "9u", price: "$96k" },
  { n: 20, units: "6u", price: "$104k" },
  { n: 21, units: "3u", price: "$106k" },
  { n: 22, units: "8u", price: "$104k" },
  { n: 23, units: "12u", price: "$96k" },
  { n: 24, units: "12u", price: "$96k" },
  { n: 25, units: "12u", price: "$96k" },
  { n: 26, units: "12u", price: "$96k" },
  { n: 27, units: "11u", price: "$96k" },
  { n: 28, units: "9u", price: "$104k" },
];

/** La búsqueda del motor en móvil, con el calendario. `sel` = [entrada, salida] elegidas. */
export function MotorSearch({
  l,
  sel,
  tab = 0,
  pressingNext = false,
  style,
}: {
  l: LinkhubLabels;
  sel: [number | null, number | null];
  tab?: 0 | 1;
  pressingNext?: boolean;
  style?: CSSProperties;
}) {
  const [a, b] = sel;
  return (
    <div className={s.msearch} style={style}>
      <div className={s.msTop}>
        <span className={s.idcard}>
          <span className={s.idIcon}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />
            </svg>
          </span>
          <span className={s.idText}>
            <span className={s.idTitle}>{l.bookTitle}</span>
            <span className={s.idSub}>
              {a ?? "—"} - {b ?? "—"} · {l.travelers}
            </span>
          </span>
        </span>
        <span className={s.msClose}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      </div>
      <div className={s.calModal}>
        <div className={s.calTabs}>
          <span className={s.calThumb} style={{ transform: `translateX(${tab * 100}%)` }} />
          <span className={[s.calTab, tab === 0 ? s.calTabActive : ""].join(" ")}>{l.checkin}</span>
          <span className={[s.calTab, tab === 1 ? s.calTabActive : ""].join(" ")}>{l.checkout}</span>
        </div>
        <div className={s.calHeader}>
          <span className={s.calNav}>‹</span>
          <span className={s.calTitle}>{l.monthTitle}</span>
          <span className={s.calNav}>›</span>
        </div>
        <div className={s.calWeekdays}>
          {l.dows.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className={s.calGrid}>
          <span />
          {DAYS.map((d) => {
            const selected = d.n === a || d.n === b;
            const inRange = a !== null && b !== null && d.n > a && d.n < b;
            return (
              <span
                key={d.n}
                data-day={d.n}
                className={[
                  s.calDay,
                  d.off ? s.calDisabled : "",
                  selected ? s.calSelected : "",
                  d.n === a && b !== null ? s.calStart : "",
                  d.n === b && a !== null ? s.calEnd : "",
                  inRange ? s.calInRange : "",
                ].join(" ")}
              >
                <span className={s.calUnits}>{d.units}</span>
                <span className={s.calNum}>{d.n}</span>
                <span className={s.calPrice}>{d.price}</span>
                <i className={s.calDot} />
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.msActions}>
        <span className={`${s.msBtn} ${s.msBtnGhost}`}>{l.cancel}</span>
        <span className={`${s.msBtn} ${s.msBtnAccent}`} data-tap="next" style={pressingNext ? { transform: "scale(0.97)" } : undefined}>
          {l.next}
        </span>
      </div>
    </div>
  );
}

/** La hoja de resultados del motor: resumen arriba y tarjetas con foto. */
export function MotorResults({
  l,
  chosen,
  bookIn = 0,
  style,
}: {
  l: LinkhubLabels;
  /** Índice de la habitación tocada. */
  chosen?: number | null;
  /** 0→1: el botón Reservar del detalle sube desde abajo. */
  bookIn?: number;
  style?: CSSProperties;
}) {
  return (
    <div className={s.sheet} style={style}>
      <div className={s.dragHandle} />
      <div className={s.msearchBar}>
        <span className={s.summary}>
          <span className={s.summaryText}>
            <span className={s.summaryTitle}>{l.resultsTitle}</span>
            <span className={s.summarySub}>{l.summary}</span>
          </span>
          <span className={s.summaryBtn}>
            {l.search}
            <svg viewBox="0 0 24 24" aria-hidden>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </span>
        <span className={s.msClose}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      </div>
      <div className={s.resultsGrid}>
        {l.rooms.map((r, i) => (
          <div key={r.name} data-room={i} className={[s.resultCard, chosen === i ? s.resultChosen : ""].join(" ")}>
            <div className={s.resultImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/video/rooms/room${(i % 3) + 1}.jpg`} alt="" />
            </div>
            <div className={s.resultBody}>
              <div className={s.resultName}>{r.name}</div>
              <div className={s.resultSub}>{l.summary}</div>
              <div className={s.resultPrice}>
                {r.price}
                <span className={s.resultUnit}> {l.perNight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {bookIn > 0 && (
        <div className={s.bookBar} style={{ transform: `translateY(${((1 - bookIn) * 120).toFixed(1)}%)` }}>
          <span className={s.bookBtn}>{l.book}</span>
        </div>
      )}
    </div>
  );
}
