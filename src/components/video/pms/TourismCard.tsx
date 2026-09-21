import type { ReactNode } from "react";
import s from "./TourismCard.module.css";

/**
 * La tarjeta del estado turístico de Roombir IA, reciclada.
 *
 * Es `TourismStatusCard` de `pms-core/app/src/components/aiComponents`: pin y
 * título, "actualizado hace…", la grilla de hasta cuatro métricas con su
 * tendencia y su pista, la alerta, la síntesis del modelo y "Ver más". Acá no
 * hay datos del dossier: cada cifra viene por prop (el video las hace contar)
 * y `reveal` dice cuántas métricas están ya a la vista.
 */

export type TourismMetricData = {
  label: string;
  value: ReactNode;
  hint?: string;
  trend?: "up" | "down" | "neutral";
};

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconTrend({ up }: { up: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {up ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
    </svg>
  );
}

export default function TourismCard({
  title,
  updated,
  metrics,
  reveal = metrics.length,
  alert,
  alertOn = true,
  synthesis,
  streaming = false,
  more,
  block = false,
}: {
  title: string;
  updated: string;
  metrics: TourismMetricData[];
  /** Cuántas métricas están a la vista (entran una por una). */
  reveal?: number;
  alert?: string;
  alertOn?: boolean;
  /** La síntesis del modelo; `undefined` = la tarjeta va sola. */
  synthesis?: string;
  streaming?: boolean;
  more: string;
  /** Dentro del chat: aire abajo, como cuando acompaña un análisis. */
  block?: boolean;
}) {
  return (
    <section className={[s.card, block ? s.block : ""].join(" ")} aria-label={title}>
      <header className={s.head}>
        <span className={s.titleWrap}>
          <span className={s.icon}>
            <IconPin />
          </span>
          <h3 className={s.title}>{title}</h3>
        </span>
        <span className={s.updated}>{updated}</span>
      </header>

      <div className={s.metrics}>
        {metrics.slice(0, reveal).map((m, i) => (
          <div key={m.label} className={s.metric} data-metric={i}>
            <span className={s.value}>
              {m.value}
              {m.trend && m.trend !== "neutral" && (
                <span className={m.trend === "up" ? s.trendUp : s.trendDown}>
                  <IconTrend up={m.trend === "up"} />
                </span>
              )}
            </span>
            <span className={s.label}>{m.label}</span>
            {m.hint && <span className={s.hint}>{m.hint}</span>}
          </div>
        ))}
      </div>

      {alert && alertOn && (
        <div className={s.alert} role="status">
          <span className={s.alertIcon}>
            <IconAlert />
          </span>
          <span>{alert}</span>
        </div>
      )}

      {synthesis !== undefined && (
        <div className={s.synthesis}>
          {synthesis ? (
            <p className={streaming ? s.streaming : undefined}>{synthesis}</p>
          ) : (
            <span className={s.skeleton} aria-hidden />
          )}
        </div>
      )}

      <footer className={s.foot}>
        <span className={s.more}>
          {more}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </footer>
    </section>
  );
}
