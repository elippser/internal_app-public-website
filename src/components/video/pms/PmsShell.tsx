import type { ReactNode } from "react";
import { ISOTYPE_DOT, ISOTYPE_SMALL_PATH, ISOTYPE_VIEWBOX } from "@/components/site/logoPaths";
import s from "./PmsShell.module.css";

/**
 * El cascarón del PMS, reciclado: el riel izquierdo oscuro con sus íconos
 * (`DashboardSideBar`), la barra de alcance de arriba (`topAccessory`: compañía,
 * hotel, espacio; buscar, avisos, perfil) y el `contentShell` translúcido donde
 * vive cada página. Las medidas y colores son los de
 * `pms-core/app/src/components/layout/DashboardSideBar.module.css` y
 * `(appLayout)/styles.css`, con el riel colapsado (50 px) y el tema claro.
 *
 * `tabs` es la barra de pestañas que dibujan las apps embebidas (booking-app,
 * rms-app: `NavTabs`): fondo gris, pestaña activa blanca fundida con la página.
 */

export type PmsNav = "ia" | "home" | "properties" | "rooms" | "bookings" | "reports" | "revenue" | "marketing" | "settings";

export type PmsShellLabels = {
  company: string;
  property: string;
  space: string;
  initials: string;
};

const ICONS: Record<Exclude<PmsNav, "ia">, ReactNode> = {
  home: (
    <>
      <path d="M3 11l9-9 9 9" />
      <path d="M5 10v10a1 1 0 0 0 1 1h4m4 0h4a1 1 0 0 0 1-1V10" />
    </>
  ),
  properties: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V8l6-3 6 3v13" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  rooms: (
    <>
      <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
      <path d="M3 21h18" />
      <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
    </>
  ),
  bookings: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  reports: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 3 5-6" />
    </>
  ),
  revenue: (
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  marketing: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
};
const NAV_ORDER: Exclude<PmsNav, "ia">[] = ["home", "properties", "rooms", "bookings", "reports", "revenue", "marketing", "settings"];

function AiIcon() {
  // El pictograma de Roombir IA del riel: cuatro pétalos con la estrella.
  return (
    <svg viewBox="0 0 24 24" className={s.aiIcon} aria-hidden>
      <path
        d="M12 2.5c2.3 0 4.2 1.5 4.9 3.6 2.1.7 3.6 2.6 3.6 4.9s-1.5 4.2-3.6 4.9c-.7 2.1-2.6 3.6-4.9 3.6s-4.2-1.5-4.9-3.6C5 15.2 3.5 13.3 3.5 11s1.5-4.2 3.6-4.9C7.8 4 9.7 2.5 12 2.5z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 7.2l1.1 2.7 2.7 1.1-2.7 1.1L12 14.8l-1.1-2.7L8.2 11l2.7-1.1z" fill="#14150f" />
    </svg>
  );
}

export function PmsMark({ size = 22, color = "#f2efe8", dot = "#c8e293" }: { size?: number; color?: string; dot?: string }) {
  return (
    <svg viewBox={ISOTYPE_VIEWBOX} width={size} height={size} aria-hidden style={{ display: "block", maxWidth: "none" }}>
      <path d={ISOTYPE_SMALL_PATH} fill={color} fillRule="evenodd" />
      <circle cx={ISOTYPE_DOT.cx} cy={ISOTYPE_DOT.cy} r={ISOTYPE_DOT.r} fill={dot} />
    </svg>
  );
}

export default function PmsShell({
  active,
  labels,
  tabs,
  activeTab,
  children,
  width = 1120,
  height = 700,
  className,
  round = false,
}: {
  active: PmsNav;
  labels: PmsShellLabels;
  /** Pestañas de la app embebida (Panel del día, Reservas, Calendario…). */
  tabs?: string[];
  activeTab?: number;
  children: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  /** Esquinas más redondas (26 px en vez de 12): las ventanas grandes de las escenas 10, 16 y 18. */
  round?: boolean;
}) {
  return (
    <div className={[s.app, round ? s.round : "", className ?? ""].join(" ")} style={{ width, height }} aria-hidden>
      <aside className={s.rail}>
        <div className={s.railTop}>
          <span className={`${s.iconBtn} ${s.logoBtn}`}>
            <PmsMark size={20} color="#14150f" dot="#4e6b28" />
          </span>
        </div>
        <nav className={s.railNav}>
          <span className={[s.iconBtn, s.navBtn, s.aiHub, active === "ia" ? s.navActive : ""].join(" ")}>
            <AiIcon />
          </span>
          {NAV_ORDER.map((k) => (
            <span key={k} className={[s.iconBtn, s.navBtn, active === k ? s.navActive : ""].join(" ")}>
              <svg viewBox="0 0 24 24" aria-hidden>
                {ICONS[k]}
              </svg>
            </span>
          ))}
        </nav>
        <div className={s.railBottom}>
          <span className={`${s.iconBtn} ${s.navBtn}`}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
          </span>
          <span className={`${s.iconBtn} ${s.navBtn}`}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </span>
        </div>
      </aside>

      <header className={s.top}>
        <div className={s.topLeft}>
          <span className={s.scopeChip}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M3 21h18M6 21V8l6-3 6 3v13M9 21v-6h6v6" />
            </svg>
            {labels.company}
            <i className={s.chev} />
          </span>
          <span className={s.scopeChip}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M3 11l9-9 9 9M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
            </svg>
            {labels.property}
            <i className={s.chev} />
          </span>
          <span className={s.scopeChip}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2l10 10-10 10L2 12z" />
            </svg>
            {labels.space}
            <i className={s.chev} />
          </span>
        </div>
        <div className={s.topRight}>
          <span className={s.navIconBtn}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </span>
          <span className={`${s.navIconBtn} ${s.bell}`}>
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            <b>9+</b>
          </span>
          <span className={s.profile}>{labels.initials}</span>
        </div>
      </header>

      <main className={s.shell}>
        {tabs && (
          <div className={s.tabs}>
            {tabs.map((t, i) => (
              <span key={t} className={[s.tab, i === activeTab ? s.tabActive : ""].join(" ")}>
                {t}
              </span>
            ))}
          </div>
        )}
        <div className={s.page}>{children}</div>
      </main>
    </div>
  );
}
