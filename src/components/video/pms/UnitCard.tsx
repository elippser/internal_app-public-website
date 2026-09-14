import styles from "./UnitCard.module.css";

/**
 * La tarjeta de unidad del estado de habitaciones, reciclada.
 *
 * Es `UnitCard` de `packages/roombir-ui` (la misma que usa rooms-app y el chat
 * de Roombir IA), en modo solo lectura: sin click ni arrastre. La única
 * diferencia es que las etiquetas cortas del estado vienen por prop, porque el
 * paquete las tiene fijas en castellano y el video se reproduce en cinco
 * idiomas.
 */

export type UnitStatus =
  | "available"
  | "occupied"
  | "cleaning"
  | "maintenance"
  | "blocked"
  | "checkout-pending";

export interface Unit {
  code: string;
  floor?: string;
  size?: number;
  capacity: { adults: number; children: number };
  status: UnitStatus;
  category: string;
}

export type UnitLabels = Record<UnitStatus, string>;

function StatusIcon({ status }: { status: UnitStatus }) {
  const common = {
    width: 10,
    height: 10,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: styles.badgeIcon,
    "aria-hidden": true,
  };
  switch (status) {
    case "available":
      return (
        <svg {...common}>
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "occupied":
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="M10.85 12.15L19 4" />
          <path d="M18 5l2 2" />
          <path d="M15 8l2 2" />
        </svg>
      );
    case "cleaning":
      return (
        <svg {...common}>
          <path d="M19.5 4.5l-2 2" />
          <path d="M14 9l-9.5 9.5a1.5 1.5 0 0 0 0 2.1l.9.9a1.5 1.5 0 0 0 2.1 0L17 12" />
          <path d="M13 6l5 5" />
          <path d="M16 3l5 5" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "blocked":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
        </svg>
      );
    case "checkout-pending":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 14" />
        </svg>
      );
  }
}

export default function UnitCard({
  unit,
  labels,
  selected = false,
}: {
  unit: Unit;
  labels: UnitLabels;
  selected?: boolean;
}) {
  return (
    <div
      className={`${styles.card} ${styles[`s_${unit.status}`]} ${selected ? styles.selected : ""}`}
      data-status={unit.status}
    >
      <div className={styles.cardTop}>
        <span className={styles.roomNumber}>
          {unit.code}
          {unit.floor && <span className={styles.floorTag}> · P{unit.floor}</span>}
        </span>
        <span className={styles.cardBadge}>
          <StatusIcon status={unit.status} />
          {labels[unit.status]}
        </span>
      </div>

      <div className={styles.roomType}>{unit.category}</div>

      <div className={styles.cardMeta}>
        <span className={styles.metaItem}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          {unit.capacity.adults}
          {unit.capacity.children > 0 && ` · ${unit.capacity.children}`}
        </span>
        {unit.size != null && (
          <span className={styles.metaItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 3v18" opacity="0.5" />
            </svg>
            {unit.size} m²
          </span>
        )}
      </div>
    </div>
  );
}
