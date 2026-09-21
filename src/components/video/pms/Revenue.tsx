import type { ReactNode } from "react";
import s from "./Revenue.module.css";

/**
 * Revenue · RMS, reciclado en sus dos formas reales:
 *
 * - `RevenuePage`: la página "Recomendaciones" de rms-app (`app/recomendaciones/
 *   page.tsx`): pestañas Pendientes / Historial y una tarjeta por
 *   recomendación con fecha, estado, tarifa actual → sugerida (+delta), motivo
 *   y los botones Aceptar / Rechazar. Aceptar la aplica al motor de reservas.
 * - `RecCard`: la misma recomendación como bloque del chat de Roombir IA
 *   (`RecommendationsBlock` de RoombirRevenueBlocks.tsx).
 *
 * Los tokens (`--rms-*`, `--rev-*`) son los de rms-app/web/globals.css y del
 * bloque, tema claro.
 */

export type RecStatus = "suggested" | "accepted" | "applied" | "rejected";
export type Rec = { date: string; from: string; to: string; delta: string; reason: string; status: RecStatus };

export type RevenueLabels = {
  title: string;
  sub: string;
  tabs: string[];
  status: Record<RecStatus, string>;
  accept: string;
  reject: string;
  blockTitle: string;
  blockMeta: string;
  footnote: string;
};

const STATUS_COLOR: Record<RecStatus, string> = {
  suggested: "#f59e0b",
  accepted: "#10b981",
  applied: "#3b82f6",
  rejected: "#ef4444",
};

export function RevenuePage({
  recs,
  labels,
  pressing,
  children,
}: {
  recs: Rec[];
  labels: RevenueLabels;
  /** Índice de la recomendación cuyo "Aceptar" está apretado. */
  pressing?: number | null;
  children?: ReactNode;
}) {
  return (
    <div className={s.page}>
      <div className={s.head}>
        <h2 className={s.title}>{labels.title}</h2>
        <p className={s.sub}>{labels.sub}</p>
      </div>
      <div className={s.tabs}>
        {labels.tabs.map((t, i) => (
          <span key={t} className={[s.tab, i === 0 ? s.tabActive : ""].join(" ")}>
            {t}
          </span>
        ))}
      </div>
      <div className={s.list}>
        {recs.map((r, i) => (
          <div key={r.date} className={s.card} data-rec={i}>
            <div className={s.cardMain}>
              <div className={s.cardTop}>
                <span className={s.date}>{r.date}</span>
                <span className={s.pill} style={{ background: STATUS_COLOR[r.status] }}>
                  {labels.status[r.status]}
                </span>
              </div>
              <div className={s.rates}>
                {r.from} → <strong>{r.to}</strong>{" "}
                <span style={{ color: r.delta.startsWith("-") ? "#ef4444" : "#10b981" }}>({r.delta})</span>
              </div>
              <p className={s.reason}>{r.reason}</p>
            </div>
            {r.status === "suggested" && (
              <div className={s.actions}>
                <span className={s.accept} data-accept={i} style={pressing === i ? { transform: "scale(0.95)", filter: "brightness(1.08)" } : undefined}>
                  {labels.accept}
                </span>
                <span className={s.reject}>{labels.reject}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

/** El bloque de recomendaciones del chat: una tarjeta compacta por fecha. */
export function RecCard({ recs, labels, block = true }: { recs: Rec[]; labels: RevenueLabels; block?: boolean }) {
  const tone: Record<RecStatus, string> = {
    suggested: s.toneWarn,
    accepted: s.tonePositive,
    applied: s.tonePositive,
    rejected: s.toneMuted,
  };
  return (
    <div className={[s.block, block ? s.blockIn : ""].join(" ")}>
      <div className={s.blockHead}>
        <span className={s.blockTitle}>{labels.blockTitle}</span>
        <span className={s.blockMeta}>{labels.blockMeta}</span>
      </div>
      <div className={s.recGrid}>
        {recs.map((r) => (
          <div key={r.date} className={s.recCard}>
            <div className={s.recHead}>
              <span className={s.recDate}>{r.date}</span>
              <span className={`${s.chip} ${tone[r.status]}`}>{labels.status[r.status]}</span>
            </div>
            <div className={s.recRates}>
              <span className={s.recFrom}>{r.from}</span>
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <span className={s.recTo}>{r.to}</span>
              <span className={r.delta.startsWith("-") ? s.recDeltaDown : s.recDeltaUp}>{r.delta}</span>
            </div>
            <p className={s.recReason}>{r.reason}</p>
            {r.status === "suggested" && (
              <div className={s.recActions}>
                <span className={s.btnPrimary}>{labels.accept}</span>
                <span className={s.btnGhost}>{labels.reject}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className={s.footnote}>{labels.footnote}</p>
    </div>
  );
}
