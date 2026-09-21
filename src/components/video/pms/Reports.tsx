import type { ReactNode } from "react";
import s from "./Reports.module.css";

/**
 * "Informes" del PMS (`ReportsView`), reciclado: título con la hora de
 * actualización, la barra de rangos en píldoras, las tarjetas de métrica con
 * su valor grande y su nota, y la curva de demanda de los próximos 30 días.
 */

export type ReportsLabels = {
  title: string;
  updated: string;
  refresh: string;
  ranges: string[];
  rangeNote: string;
  section: string;
  sectionSub: string;
  kpis: { label: string; value: ReactNode; hint: string; badge?: string }[];
  chart: string;
  chartSub: string;
};

export default function Reports({ l }: { l: ReportsLabels }) {
  return (
    <div className={s.root}>
      <div className={s.head}>
        <div>
          <h2 className={s.pageTitle}>{l.title}</h2>
          <p className={s.pageSub}>{l.updated}</p>
        </div>
        <span className={s.refreshBtn}>{l.refresh}</span>
      </div>
      <div className={s.rangeBar}>
        <span className={s.rangeTabs}>
          {l.ranges.map((r, i) => (
            <span key={r} className={[s.rangeTab, i === 1 ? s.rangeTabActive : ""].join(" ")}>
              {r}
            </span>
          ))}
        </span>
        <span className={s.rangeNote}>{l.rangeNote}</span>
      </div>
      <div>
        <div className={s.sectionTitle}>{l.section}</div>
        <div className={s.sectionSub}>{l.sectionSub}</div>
      </div>
      <div className={s.metricsRow}>
        {l.kpis.map((k) => (
          <div key={k.label} className={s.metricCard}>
            <div className={s.metricLabel}>{k.label}</div>
            <div className={s.metricVal}>
              <span>{k.value}</span>
              {k.badge && <span className={`${s.metricBadge} ${s.badgeUp}`}>{k.badge}</span>}
            </div>
            <div className={s.metricSub}>{k.hint}</div>
          </div>
        ))}
      </div>
      <div className={s.chartCard}>
        <div className={s.chartTitle}>{l.chart}</div>
        <div className={s.chartSub}>{l.chartSub}</div>
        <svg className={s.chart} viewBox="0 0 640 150" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="repArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--accent-color)" stopOpacity="0.32" />
              <stop offset="1" stopColor="var(--accent-color)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 60, 90, 120].map((y) => (
            <line key={y} x1="0" x2="640" y1={y} y2={y} stroke="#e5e7eb" strokeDasharray="3 3" />
          ))}
          <path
            d="M0 140 C 30 138 40 50 80 46 S 140 44 170 48 S 220 130 260 132 S 330 128 360 120 S 420 60 460 56 S 540 50 580 70 S 620 118 640 130 V150 H0 Z"
            fill="url(#repArea)"
          />
          <path
            d="M0 140 C 30 138 40 50 80 46 S 140 44 170 48 S 220 130 260 132 S 330 128 360 120 S 420 60 460 56 S 540 50 580 70 S 620 118 640 130"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
