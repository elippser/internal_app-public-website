import UnitCard, { type Unit, type UnitLabels } from "./UnitCard";
import s from "./RoomsBoard.module.css";

/**
 * "Estado de habitaciones" de rooms-app, reciclado
 * (`components/EstadoHabitaciones/`): la barra de herramientas en píldoras
 * (pisos, orden, conteo, buscar, categorías, refrescar), el tablero de seis
 * columnas por estado con su cabecera de color, las tarjetas de unidad de
 * `@roombir/ui` y la leyenda con conteos.
 */

export type RoomsStatus = Unit["status"];
const COLUMNS: RoomsStatus[] = ["available", "occupied", "cleaning", "maintenance", "blocked", "checkout-pending"];

export type RoomsBoardLabels = {
  floors: string;
  order: string;
  orderOpts: string[];
  countWord: string;
  search: string;
  categories: string;
  refresh: string;
  columns: Record<RoomsStatus, string>;
  empty: string;
  hint: string;
};

function ColIcon({ status }: { status: RoomsStatus }) {
  switch (status) {
    case "available":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 12.5l2.5 2.5 4.5-5" />
        </svg>
      );
    case "occupied":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M3 12h18M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 12v6M21 12v6" />
        </svg>
      );
    case "cleaning":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M14 3l7 7-9 9-7-7zM5 12l7 7" />
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9z" />
        </svg>
      );
    case "blocked":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M5.6 5.6l12.8 12.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

export default function RoomsBoard({
  units,
  labels,
  unitLabels,
  highlight,
  toolbar = true,
  legend = true,
  columns = COLUMNS,
}: {
  units: Unit[];
  labels: RoomsBoardLabels;
  unitLabels: UnitLabels;
  /** Código de la unidad que acaba de cambiar: entra con su pop. */
  highlight?: string | null;
  toolbar?: boolean;
  legend?: boolean;
  /** Qué columnas mostrar. La tarjeta del módulo muestra tres: con las seis, las unidades se aplastan. */
  columns?: RoomsStatus[];
}) {
  const total = units.length;
  return (
    <div className={s.root}>
      {toolbar && (
        <div className={s.toolbar}>
          <span className={s.pickerBtn}>
            {labels.floors}
            <i className={s.chev} />
          </span>
          <span className={s.toolbarGroup}>
            <span className={s.groupLabel}>{labels.order}</span>
            {labels.orderOpts.map((o, i) => (
              <span key={o} className={[s.rangeBtn, i === 0 ? s.rangeBtnActive : ""].join(" ")}>
                {o}
              </span>
            ))}
          </span>
          <span className={s.toolbarGroup}>
            <span className={s.countChip}>{total}</span>
            <span className={s.countLabel}>{labels.countWord}</span>
          </span>
          <span className={s.spacer} />
          <span className={s.search}>{labels.search}</span>
          <span className={s.pickerBtn}>
            {labels.categories}
            <i className={s.chev} />
          </span>
          <span className={s.ghostBtn}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
            </svg>
            {labels.refresh}
          </span>
        </div>
      )}
      <div className={s.board} style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
        {columns.map((col) => {
          const list = units.filter((u) => u.status === col);
          return (
            <div key={col} className={[s.col, s[`col_${col.replace("-", "_")}`]].join(" ")}>
              <div className={s.colHeader}>
                <span className={s.colTitle}>
                  <span className={s.colIcon}>
                    <ColIcon status={col} />
                  </span>
                  {labels.columns[col]}
                </span>
                <span className={s.colCount}>{list.length}</span>
              </div>
              <div className={s.cardsList}>
                {list.map((u) => (
                  <div key={`${u.code}-${u.status}`} className={highlight === u.code ? s.pop : undefined} data-unit={u.code}>
                    <UnitCard unit={u} labels={unitLabels} selected={highlight === u.code} />
                  </div>
                ))}
                {list.length === 0 && (
                  <div className={s.empty}>
                    <span className={s.emptyArt}>
                      <ColIcon status={col} />
                    </span>
                    {labels.empty}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {legend && (
        <div className={s.legend}>
          {columns.map((col) => (
            <span key={col} className={[s.legendItem, s[`s_${col.replace("-", "_")}`]].join(" ")}>
              <i className={s.legendSwatch} />
              <b className={s.legendCount}>{units.filter((u) => u.status === col).length}</b>
              {labels.columns[col]}
            </span>
          ))}
          <span className={s.legendHint}>{labels.hint}</span>
        </div>
      )}
    </div>
  );
}
