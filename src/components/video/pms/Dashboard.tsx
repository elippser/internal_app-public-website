import type { CSSProperties, ReactNode } from "react";
import { easeInOut, easeOut, seg } from "../timeline";
import s from "./Dashboard.module.css";

/**
 * El inicio del PMS (`DashboardView`), reciclado: la fila de métricas
 * (check-in y check-out como acciones, reservas activas, ocupación de hoy,
 * curva de demanda), la tabla de reservas recientes y la columna lateral con
 * el gráfico de reservas por mes, las categorías más ocupadas y los accesos
 * rápidos. Tokens y medidas de `DashboardView.module.css`.
 */

export type DashRow = { code: string; cat: string; guest: string; mail: string; inDate: string; outDate: string; nights: string; total: string; status: "confirmed" | "checked-in" | "pending" };

export type DashboardLabels = {
  checkin: string;
  checkout: string;
  active: string;
  activeSub: string;
  occupancy: string;
  occupancySub: string;
  demand: string;
  demandSub: string;
  recent: string;
  recentSub: string;
  newBooking: string;
  cols: string[];
  status: Record<DashRow["status"], string>;
  more: string;
  bookings: string;
  bookingsSub: string;
  months: string[];
  topCats: string;
  topCatsSub: string;
  quick: string;
  quickSub: string;
  quickItems: string[];
};

/**
 * Cuándo entra cada dato con `t` (ms desde que arrancan): suave y chico —las
 * filas suben 6 px, las barras crecen desde la base, la curva se dibuja, las
 * categorías se llenan—. Las tarjetas no se mueven: ya están cuando se ven.
 */
const DA = { rows: 0, rowLag: 70, rowDur: 520, bars: 120, barLag: 110, barDur: 820, spark: 160, sparkDur: 950, cats: 320, catLag: 100, catDur: 820, delta: 760, badge: 820 };

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Dashboard({
  rows,
  labels,
  activeCount = "5",
  occupancy = "78%",
  values,
  t,
}: {
  rows: DashRow[];
  labels: DashboardLabels;
  activeCount?: ReactNode;
  occupancy?: ReactNode;
  /** Las cifras que el video hace contar. */
  values?: { active?: ReactNode; occupancy?: ReactNode };
  /** Ms desde que los datos empiezan a entrar. Sin `t`, todo quieto en su lugar. */
  t?: number;
}) {
  const on = t !== undefined;
  const now = t ?? 0;
  const p = (a: number, dur: number) => (on ? easeOut(seg(now, a, a + dur)) : 1);
  const up = (q: number, dy = 6): CSSProperties | undefined => (on ? { opacity: q, transform: q < 1 ? `translate3d(0, ${((1 - q) * dy).toFixed(2)}px, 0)` : undefined } : undefined);
  const spark = on ? easeInOut(seg(now, DA.spark, DA.spark + DA.sparkDur)) : 1;
  const bars = [0.42, 0.55, 1];
  const cats = [
    { name: "Doble Superior", pct: 0.9 },
    { name: "Doble", pct: 0.66 },
    { name: "Suite", pct: 0.5 },
  ];
  return (
    <div className={s.root}>
      <div className={s.left}>
        <div className={s.statRow}>
          <div className={`${s.actionCard} ${s.cardCheckin}`}>
            <span className={s.actionCount}>2</span>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            {labels.checkin}
          </div>
          <div className={`${s.actionCard} ${s.cardCheckout}`}>
            <span className={s.actionCount}>1</span>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M6 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1M3 12h11M11 8l4 4-4 4" />
            </svg>
            {labels.checkout}
          </div>
          <div className={s.metricCard}>
            <div className={s.metricLabel}>{labels.active}</div>
            <div className={s.metricSub}>{labels.activeSub}</div>
            <div className={s.metricVal}>
              {values?.active ?? activeCount}
              <span className={s.badgeUp} style={up(p(DA.badge, 420), 4)}>
                +12%
              </span>
            </div>
          </div>
          <div className={s.metricCard}>
            <div className={s.metricLabel}>{labels.occupancy}</div>
            <div className={s.metricSub}>{labels.occupancySub}</div>
            <div className={s.metricVal}>{values?.occupancy ?? occupancy}</div>
          </div>
          <div className={s.metricCard}>
            <div className={s.metricLabel}>{labels.demand}</div>
            <div className={s.metricSub}>{labels.demandSub}</div>
            <svg className={s.spark} viewBox="0 0 220 60" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="dashSpark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="var(--accent-color)" stopOpacity="0.28" />
                  <stop offset="1" stopColor="var(--accent-color)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 52 C 20 50 28 14 48 12 S 80 10 96 14 S 120 44 140 46 S 175 40 190 24 S 210 22 220 30 V60 H0 Z" fill="url(#dashSpark)" opacity={on ? spark * spark : undefined} />
              <path
                d="M0 52 C 20 50 28 14 48 12 S 80 10 96 14 S 120 44 140 46 S 175 40 190 24 S 210 22 220 30"
                fill="none"
                stroke="var(--accent-color)"
                strokeWidth="2"
                {...(on ? { pathLength: 1, strokeDasharray: "1 1", strokeDashoffset: (1 - spark).toFixed(4) } : {})}
              />
            </svg>
          </div>
        </div>

        <div className={s.tableCard}>
          <div className={s.tableHeader}>
            <div>
              <div className={s.tableTitle}>{labels.recent}</div>
              <div className={s.tableSubtitle}>{labels.recentSub}</div>
            </div>
            <span className={s.filterBtn}>
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
              {labels.newBooking}
            </span>
          </div>
          <table className={s.table}>
            <thead>
              <tr>
                {labels.cols.map((c, i) => (
                  <th key={c} className={i === 4 ? s.amountCell : undefined}>
                    {c}
                  </th>
                ))}
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.code} className={s.row} style={up(p(DA.rows + i * DA.rowLag, DA.rowDur))}>
                  <td>
                    <span className={s.resCode}>{r.code}</span>
                    <span className={s.cellSub}>{r.cat}</span>
                  </td>
                  <td>
                    <div className={s.guestCell}>
                      <span className={s.avatarMini}>{initials(r.guest)}</span>
                      <div className={s.guestText}>
                        <span className={s.guestName}>{r.guest}</span>
                        <span className={s.cellSub}>{r.mail}</span>
                      </div>
                    </div>
                  </td>
                  <td>{r.inDate}</td>
                  <td>
                    {r.outDate}
                    <span className={s.cellSub}>{r.nights}</span>
                  </td>
                  <td className={s.amountCell}>
                    <b>{r.total}</b>
                  </td>
                  <td>
                    <span className={[s.statusPill, r.status === "confirmed" ? s.sConfirmed : r.status === "checked-in" ? s.sCheckedIn : s.sPending].join(" ")}>
                      <i className={s.statusDot} />
                      {labels.status[r.status]}
                    </span>
                  </td>
                  <td className={s.arrowCell}>
                    <span className={s.arrowBtn}>›</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={s.tableFooter}>
            <span className={s.seeMore}>{labels.more} ›</span>
          </div>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.chartCard}>
          <div className={s.cardTop}>
            <div>
              <div className={s.cardTopTitle}>{labels.bookings}</div>
              <div className={s.cardTopSub}>{labels.bookingsSub}</div>
            </div>
            <span className={`${s.deltaChip} ${s.deltaUp}`} style={up(p(DA.delta, 420), 4)}>
              ▲ +38%
            </span>
          </div>
          <div className={s.barsWrap}>
            {bars.map((b, i) => (
              <div key={i} className={s.barCol}>
                <span className={s.barVal} style={on ? { opacity: p(DA.bars + i * DA.barLag + 380, 420) } : undefined}>
                  {[8, 11, 19][i]}
                </span>
                {/* Con `t` la barra la crece el reloj: la animación CSS se apaga o pisaría la escala. */}
                <i className={s.barFill} style={{ height: `${b * 100}%`, ...(on ? { animation: "none", transform: `scaleY(${p(DA.bars + i * DA.barLag, DA.barDur).toFixed(4)})` } : {}) }} />
                <span className={s.barMonth}>{labels.months[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={s.catCard}>
          <div className={s.cardTop}>
            <div>
              <div className={s.cardTopTitle}>{labels.topCats}</div>
              <div className={s.cardTopSub}>{labels.topCatsSub}</div>
            </div>
            <span className={s.topBtn}>3 cat.</span>
          </div>
          <div className={s.catList}>
            {cats.map((c, i) => (
              <div key={c.name} className={s.catRow}>
                <div className={s.catRowHead}>
                  <span className={s.catName}>{c.name}</span>
                  <span className={s.catNums} style={on ? { opacity: p(DA.cats + i * DA.catLag + 340, 420) } : undefined}>
                    {Math.round(c.pct * 100)}%
                  </span>
                </div>
                <div className={s.catTrack}>
                  <i className={s.catFill} style={{ width: `${c.pct * 100}%`, ...(on ? { transformOrigin: "left center", transform: `scaleX(${p(DA.cats + i * DA.catLag, DA.catDur).toFixed(4)})` } : {}) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.quickCard}>
          <div className={s.cardTop}>
            <div>
              <div className={s.cardTopTitle}>{labels.quick}</div>
              <div className={s.cardTopSub}>{labels.quickSub}</div>
            </div>
            <span className={s.topBtn}>21 apps</span>
          </div>
          <div className={s.quickGrid}>
            {labels.quickItems.map((q, i) => (
              <span key={q} className={s.quickItem}>
                <i className={s.quickIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden>
                    {i === 0 && <path d="M3 4h18v16H3zM3 10h18M8 2v4M16 2v4" />}
                    {i === 1 && <path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5" />}
                    {i === 2 && <path d="M12 5v14M5 12h14" />}
                    {i === 3 && <path d="M3 7h18v10H3zM7 12h.01M17 12h.01M12 10v4" />}
                  </svg>
                </i>
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
