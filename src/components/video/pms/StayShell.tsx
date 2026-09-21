import type { ReactNode } from "react";
import { PmsMark } from "./PmsShell";
import s from "./StayShell.module.css";

/**
 * El portal del huésped (StayPass), reciclado: la barra superior con la marca
 * y "StayPass", las pestañas Inicio / Perfil y la píldora del huésped
 * (`GuestTopbar`), y el cuerpo con el saludo, "Reservas" con sus filtros y la
 * lista donde vive la tarjeta de reserva (`HomeDashboard`). La tarjeta es
 * `StayCard`, que ya lleva los tokens del portal.
 */

export type StayShellLabels = {
  brand: string;
  tabs: string[];
  user: string;
  section: string;
  filters: string[];
};

export default function StayShell({ labels, children }: { labels: StayShellLabels; children: ReactNode }) {
  return (
    <div className={s.portal}>
      <header className={s.topbar}>
        <span className={s.logo}>
          <PmsMark size={18} color="#1a1916" dot="#1d6b52" />
          <span className={s.logoStayPass}>{labels.brand}</span>
        </span>
        <nav className={s.nav}>
          {labels.tabs.map((t, i) => (
            <span key={t} className={[s.navTab, i === 0 ? s.navTabActive : ""].join(" ")}>
              {t}
            </span>
          ))}
        </nav>
        <span className={s.userPill}>
          <span className={s.avatar}>{labels.user.slice(0, 1)}</span>
        </span>
      </header>
      <div className={s.homeWrap}>
        {children}
        <div className={s.sectionHeader}>
          <span className={s.sectionTitle}>{labels.section}</span>
          <span className={s.filterRow}>
            {labels.filters.map((f, i) => (
              <span key={f} className={[s.filterBtn, i === 1 ? s.filterBtnActive : ""].join(" ")}>
                {f}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
