import styles from "./StatusBadge.module.css";

/**
 * El badge de estado de una reserva, reciclado.
 *
 * Es `ReservaStatusBadge` de `packages/roombir-ui`: píldora con el punto que
 * late. El texto viene por prop porque el paquete lo tiene fijo en castellano.
 */

export type ReservationStatus =
  | "pending"
  | "confirmed"
  | "checked-in"
  | "checked-out"
  | "cancelled"
  | "no-show";

const STATUS_CLASS: Record<ReservationStatus, string> = {
  pending: styles.pending,
  confirmed: styles.confirmed,
  "checked-in": styles.checkedIn,
  "checked-out": styles.checkedOut,
  cancelled: styles.cancelled,
  "no-show": styles.noShow,
};

export default function StatusBadge({
  status,
  label,
}: {
  status: ReservationStatus;
  label: string;
}) {
  return (
    <span className={`${styles.badge} ${STATUS_CLASS[status]}`} data-status={status}>
      <span className={styles.dot} />
      {label}
    </span>
  );
}
