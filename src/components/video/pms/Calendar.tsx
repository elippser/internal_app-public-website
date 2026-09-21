import type { CSSProperties, ReactNode } from "react";
import { PmsMark } from "./PmsShell";
import s from "./Calendar.module.css";

/**
 * El calendario de reservas de booking-app, reciclado
 * (`components/Calendario/`): la barra de herramientas en píldoras, la
 * columna fija de habitaciones, el encabezado de días con el día de hoy en
 * el color de acento, la fila de ocupación, la fila de categoría con
 * disponibles y tarifa por día, y las barras-paralelogramo de mediodía a
 * mediodía con su cola de íconos (pago, huéspedes, noches, canal).
 *
 * Geometría: N noches = N columnas exactas, arrancando en el mediodía del
 * día de llegada (`(startIdx + 0.5) * colW`), como `barGeometry`.
 */

export type CalStatus = "pending" | "confirmed" | "checked-in" | "checked-out" | "cancelled" | "no-show";
export const CAL_STATUS_COLORS: Record<CalStatus, string> = {
  pending: "#eab308",
  confirmed: "#22c55e",
  "checked-in": "#47c5ff",
  "checked-out": "#6b7280",
  cancelled: "#ef4444",
  "no-show": "#f97316",
};

export type CalBar = {
  start: number;
  nights: number;
  status: CalStatus;
  name: string;
  pax?: number;
  paid?: boolean;
  /** Recién creada: entra con su animación. */
  fresh?: boolean;
};
export type CalRow = { unit: string; bars: CalBar[] };
export type CalCategory = { name: string; color: string; count: number; avail: number; rate: string; rows: CalRow[] };
export type CalDay = { dow: string; num: number; month?: string; today?: boolean; weekend?: boolean };

export type CalendarLabels = {
  hab: string;
  occupancy: string;
  today: string;
  month: string;
  ranges: string[];
  search: string;
  categories: string;
  states: string;
  refresh: string;
  create: string;
  legend: Record<CalStatus, string>;
  hint: string;
};

function DollarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1-1.3-1.7-3-1.7s-3 .7-3 1.7 1.3 1.6 3 1.8 3 .8 3 1.9-1.3 1.8-3 1.8-3-.8-3-1.8" />
    </svg>
  );
}
function PaxIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  );
}

export function CalendarToolbar({ l }: { l: CalendarLabels }) {
  return (
    <div className={s.toolbar}>
      <span className={s.navCluster}>
        <span className={s.navBtn}>‹</span>
        <span className={s.monthPickerBtn}>
          {l.month}
          <i className={s.chev} />
        </span>
        <span className={`${s.navBtn} ${s.navBtnEnd}`}>›</span>
      </span>
      <span className={s.toolbarGroup}>
        {l.ranges.map((r, i) => (
          <span key={r} className={[s.rangeBtn, i === 1 ? s.rangeBtnActive : ""].join(" ")}>
            {r}
          </span>
        ))}
      </span>
      <span className={s.toolbarGroup}>
        <span className={s.todayChip}>{l.today}</span>
        <span className={s.monthLabel}>{l.month}</span>
      </span>
      <span className={s.spacer} />
      <span className={s.search}>{l.search}</span>
      <span className={s.select}>
        {l.categories}
        <i className={s.chev} />
      </span>
      <span className={s.select}>
        {l.states}
        <i className={s.chev} />
      </span>
      <span className={s.ghostBtn}>{l.refresh}</span>
      <span className={s.primaryBtn}>{l.create}</span>
    </div>
  );
}

export default function Calendar({
  days,
  occupancy,
  categories,
  labels,
  colW = 58,
  labelW = 120,
  toolbar = true,
  legend = true,
  overlay,
  rootRef,
  className,
  style,
}: {
  days: CalDay[];
  occupancy: string[];
  categories: CalCategory[];
  labels: CalendarLabels;
  colW?: number;
  labelW?: number;
  toolbar?: boolean;
  legend?: boolean;
  /** Capas del video sobre la grilla (selección de arrastre, cursor). */
  overlay?: ReactNode;
  rootRef?: React.Ref<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
}) {
  const vars = { ["--col-w" as string]: `${colW}px`, ["--label-w" as string]: `${labelW}px` };
  return (
    <div className={[s.root, className ?? ""].join(" ")} style={{ ...vars, ...style }}>
      {toolbar && <CalendarToolbar l={labels} />}
      <div ref={rootRef} className={s.scroller} data-cal-scroller="">
        <div className={s.grid}>
          <div className={`${s.row} ${s.headerRow}`}>
            <div className={s.labelCell}>
              <span className={s.miniLabel}>{labels.hab}</span>
            </div>
            <div className={s.daysArea}>
              {days.map((d, i) => (
                <div
                  key={i}
                  data-cal-head={i}
                  className={[s.dayHead, d.today ? `${s.todayCol} ${s.dayHeadToday}` : "", d.weekend ? s.weekendCol : ""].join(" ")}
                >
                  <span className={s.dow}>{d.dow}</span>
                  <span className={s.dayNum}>{d.num}</span>
                  {d.month && <span className={s.monthTick}>{d.month}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className={`${s.row} ${s.occupancyRow}`}>
            <div className={s.labelCell}>
              <span className={s.miniLabel}>{labels.occupancy}</span>
            </div>
            <div className={s.daysArea}>
              {occupancy.map((o, i) => (
                <div key={i} className={[s.occupancyCell, days[i]?.today ? s.todayCol : ""].join(" ")}>
                  {o}
                </div>
              ))}
            </div>
          </div>
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className={`${s.row} ${s.categoryRow}`}>
                <div className={s.labelCell}>
                  <i className={s.chevDown} />
                  <i className={s.categoryDot} style={{ background: cat.color }} />
                  <span className={s.categoryName}>{cat.name}</span>
                  <span className={s.categoryCount}>{cat.count}</span>
                </div>
                <div className={s.daysArea}>
                  {days.map((d, i) => (
                    <div key={i} className={[s.categoryStatCell, d.today ? s.todayCol : ""].join(" ")}>
                      <span className={s.statAvail}>
                        <svg viewBox="0 0 24 24" aria-hidden>
                          <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 21h18" />
                        </svg>
                        {cat.avail}
                      </span>
                      <span className={s.statRate}>{cat.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
              {cat.rows.map((row) => (
                <div key={row.unit} className={`${s.row} ${s.roomRow}`} data-cal-row={row.unit}>
                  <div className={s.labelCell}>
                    <span className={s.roomLabel}>{row.unit}</span>
                  </div>
                  <div className={s.daysArea}>
                    {days.map((d, i) => (
                      <div key={i} className={[s.dayCell, d.today ? s.todayCol : "", d.weekend ? s.weekendCol : ""].join(" ")}>
                        <span className={s.dayHalf} />
                        <span className={`${s.dayHalf} ${s.dayHalfPm}`} />
                      </div>
                    ))}
                    <div className={s.barsLayer}>
                      {row.bars.map((b, k) => {
                        const left = (b.start + 0.5) * colW;
                        const width = b.nights * colW;
                        const compact = b.nights < 2;
                        return (
                          <div
                            key={k}
                            className={[s.barWrap, b.fresh ? s.barFresh : ""].join(" ")}
                            style={{ left, width, ["--bar-color" as string]: CAL_STATUS_COLORS[b.status] }}
                          >
                            <div className={s.bar}>
                              <span className={s.barName}>{b.name}</span>
                              {!compact && (
                                <span className={s.barTail}>
                                  <span className={[s.tailStat, b.paid === false ? s.tailUnpaid : ""].join(" ")}>
                                    <DollarIcon />
                                  </span>
                                  <span className={s.tailStat}>
                                    <PaxIcon />
                                    {b.pax ?? 2}
                                  </span>
                                  <span className={s.tailStat}>
                                    <MoonIcon />
                                    {b.nights}
                                  </span>
                                  <span className={s.tailStat}>
                                    <PmsMark size={11} color="#fff" dot="#fff" />
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {overlay}
      </div>
      {legend && (
        <div className={s.legend}>
          {(Object.keys(CAL_STATUS_COLORS) as CalStatus[])
            .filter((k) => k !== "cancelled")
            .map((k) => (
              <span key={k} className={s.legendItem}>
                <i className={s.legendSwatch} style={{ background: CAL_STATUS_COLORS[k] }} />
                {labels.legend[k]}
              </span>
            ))}
          <span className={s.legendHint}>{labels.hint}</span>
        </div>
      )}
    </div>
  );
}
