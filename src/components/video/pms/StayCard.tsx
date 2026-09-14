import styles from "./StayCard.module.css";

/**
 * La tarjeta de reserva del portal del huésped (StayPass), reciclada.
 *
 * Es el `reservaCard` de `HomeDashboard.tsx` + el `CopyField` compacto de
 * `public-side/staypass-app/web`: número, badge, el bloque "código para
 * trámites" con su botón de copiar y el bloque "alojamiento y estadía". Las
 * clases y medidas son las del portal; los tokens de StayPass (`--bg`,
 * `--ink`, `--green`...) van declarados en el módulo porque acá no está su
 * globals.css.
 */
export default function StayCard({
  greeting,
  sub,
  badge,
  codeLabel,
  code,
  copy,
  stayLabel,
  hotel,
  dates,
}: {
  greeting: string;
  sub: string;
  badge: string;
  codeLabel: string;
  code: string;
  copy: string;
  stayLabel: string;
  hotel: string;
  dates: string;
}) {
  return (
    <div className={styles.portal}>
      <div className={styles.homeHeader}>
        <p className={styles.homeGreeting}>{greeting}</p>
        <p className={styles.homeSub}>{sub}</p>
      </div>
      <article className={styles.reservaCard}>
        <div className={styles.reservaCardTop}>
          <span className={styles.reservaNum}>01</span>
          <span className={[styles.badge, styles.badgeOk].join(" ")}>{badge}</span>
        </div>
        <div className={styles.reservaBlock}>
          <div className={styles.copyRoot}>
            <div className={styles.copyLabelRow}>
              <span className={styles.copyLabel}>{codeLabel}</span>
              <span className={styles.copyBtn}>{copy}</span>
            </div>
            <code className={styles.copyValue}>{code}</code>
          </div>
        </div>
        <div className={styles.reservaBlockMuted}>
          <p className={styles.reservaBlockLabel}>{stayLabel}</p>
          <p className={styles.reservaHotel}>{hotel}</p>
          <p className={styles.reservaDates}>{dates}</p>
        </div>
      </article>
    </div>
  );
}
