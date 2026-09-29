"use client";

import type { CSSProperties, ReactNode } from "react";
import { clamp01, easeOut, easeOutExpo, seg } from "../video/timeline";
import type { Dictionary } from "@/i18n/dict/es";
import u from "./ui.module.css";

/**
 * Copias de la UI real de Propiedades (pms-core/app), para el video.
 *
 * - `PropsList`: `PropertiesView.tsx` (mainCard + grilla de `propertyCard`).
 * - `CreatePropertyModal`: el `CreatePropertyModal` de `PropertiesView.tsx`, con
 *   los tipos de `onboardingComponents/accommodationTypes.tsx` (mismos SVG).
 * - `EditPropertyModal`: el de `PropertyDetailView.tsx` (dos columnas: contacto
 *   a la izquierda; coordenadas, el tip y el mapa a la derecha).
 * - `UsersList` + `CreateUserModal`: `companyView/UsersSection` con
 *   `PropertySpacesFields` y `UserAccessFields` (las 10 capacidades).
 * - `ScopeMenu`: el menú "Cambiar propiedad" de `DashboardSideBar.tsx`.
 * - `SearchModal`: `globalSearch/GlobalSearch.tsx`.
 *
 * Los textos salen de `dict.videoProps.ui`, copiados de los diccionarios del
 * PMS. Nada guarda estado: todo lo que cambia llega por props calculadas del
 * reloj del video. Los `data-*` son ganchos de medición para cámara y puntero.
 */

export type PropsDict = Dictionary["videoProps"];
type P = PropsDict["hotel"] | PropsDict["cabins"];

/* ------------------------------------------------------------ íconos ---- */

const svg = { viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

/** Los ocho SVG de `accommodationTypes.tsx`, tal cual. */
const TYPE_ICON: Record<string, ReactNode> = {
  cabin: (
    <svg {...svg}>
      <path d="M12 30 32 15 52 30" />
      <path d="M42 22v-7h4v10" />
      <rect x="17" y="30" width="30" height="23" />
      <line x1="17" y1="38" x2="47" y2="38" />
      <line x1="17" y1="46" x2="47" y2="46" />
      <rect x="28" y="42" width="8" height="11" />
      <path d="M10 53h44" />
    </svg>
  ),
  villa: (
    <svg {...svg}>
      <path d="M14 24 32 12 50 24" />
      <path d="M18 24v18M46 24v18" />
      <path d="M25 26v16M32 26v16M39 26v16" />
      <line x1="16" y1="42" x2="48" y2="42" />
      <path d="M8 50c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0 5-2 8 0" />
      <path d="M8 56c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0 5-2 8 0" />
    </svg>
  ),
  vacation: (
    <svg {...svg}>
      <path d="M12 30 32 14 52 30" />
      <path d="M17 28v24h30V28" />
      <rect x="28" y="40" width="8" height="12" />
      <rect x="22" y="33" width="6" height="6" />
      <circle cx="42" cy="18" r="4" />
      <path d="M42 22v9M40 27h4M40 30h4" />
    </svg>
  ),
  glamping: (
    <svg {...svg}>
      <path d="M32 9v4" />
      <path d="M32 13 11 52h42z" />
      <path d="M32 13 24 52M32 13 40 52" />
      <path d="M28 52c1-6 2-10 4-13 2 3 3 7 4 13" />
      <path d="M8 52h48" />
    </svg>
  ),
  hotel: (
    <svg {...svg}>
      <line x1="32" y1="9" x2="32" y2="4" />
      <path d="M32 4h7v4h-7" />
      <rect x="16" y="9" width="32" height="45" rx="1.5" />
      <line x1="9" y1="54" x2="55" y2="54" />
      <rect x="21" y="16" width="6" height="6" />
      <rect x="37" y="16" width="6" height="6" />
      <rect x="21" y="27" width="6" height="6" />
      <rect x="37" y="27" width="6" height="6" />
      <rect x="21" y="38" width="6" height="6" />
      <rect x="37" y="38" width="6" height="6" />
      <path d="M28 54v-8a4 4 0 0 1 8 0v8" />
    </svg>
  ),
  resort: (
    <svg {...svg}>
      <circle cx="17" cy="16" r="6" />
      <path d="M17 4v3M17 25v3M5 16h3M26 16h3M9 8l2 2M25 8l-2 2" />
      <path d="M42 52c-1-12 1-19 5-25" />
      <path d="M47 27c-6-4-13-2-16 2 5-1 9 0 12 3" />
      <path d="M47 27c6-3 13 1 15 6-5-2-9-2-13 0" />
      <path d="M6 50c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0" />
    </svg>
  ),
  aparthotel: (
    <svg {...svg}>
      <rect x="17" y="6" width="30" height="48" rx="1.5" />
      <line x1="10" y1="54" x2="54" y2="54" />
      <line x1="32" y1="6" x2="32" y2="54" />
      <line x1="17" y1="18" x2="47" y2="18" />
      <line x1="17" y1="30" x2="47" y2="30" />
      <line x1="17" y1="42" x2="47" y2="42" />
    </svg>
  ),
  hostel: (
    <svg {...svg}>
      <line x1="12" y1="14" x2="12" y2="52" />
      <line x1="52" y1="14" x2="52" y2="52" />
      <path d="M12 26h40" />
      <path d="M12 44h40" />
      <path d="M12 20h14v6H12" />
      <path d="M12 38h14v6H12" />
      <path d="M32 26v18" />
    </svg>
  ),
};

/** Íconos de trazo propios para lo que en el PMS es Material Symbols (la fuente no se carga en el sitio). */
const I = {
  apartment: <path d="M3 21h18M5 21V5l7-3v19M12 9h7v12M8 7h1M8 11h1M8 15h1M15 13h1M15 17h1" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  space: <path d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" />,
  search: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5" />,
  bed: <path d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6M3 14h18M3 18v2M21 18v2M6 9V6h5v3" />,
  calendar: <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
  home: <path d="M3 11l9-8 9 8M5 10v10h14V10" />,
  check: <path d="M20 6 9 17l-5-5" />,
  help: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />,
  cap: [
    <path key="0" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6" />,
    <path key="1" d="M4 7h16v13H4zM9 7V4h6v3M9 13h6" />,
    <path key="2" d="M3 21h18M5 21V9l7-5 7 5v12M12 11v6M9 14h6" />,
    <path key="3" d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
    <path key="4" d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" />,
    <path key="5" d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" />,
    <path key="6" d="M16 6H8a6 6 0 0 0 0 12h8a6 6 0 0 0 0-12zM16 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
    <path key="7" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 13.6H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10.4 3V3a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 17 4.6l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 10.4h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6.6z" />,
    <path key="8" d="M2 6h20v12H2zM2 10h20M6 15h4" />,
    <path key="9" d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />,
  ],
};

function Ico({ d, className }: { d: ReactNode; className?: string }) {
  return (
    <svg className={className ?? u.ico} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {d}
    </svg>
  );
}

/* ------------------------------------------------------ la tarjeta ------ */

/** `propertyCard` de `PropertiesView`: nombre, ciudad, estado, tipo, inventario y espacios. */
export function PropertyCard({ p, v, style, hot, data }: { p: P; v: PropsDict; style?: CSSProperties; hot?: boolean; data?: string }) {
  return (
    <div className={[u.propertyCard, hot ? u.propertyCardHot : ""].join(" ")} style={style} data-card={data}>
      <div className={u.cardTop}>
        <div>
          <div className={u.cardName}>{p.name}</div>
          <div className={u.cardCity}>{p.city}</div>
        </div>
        <span className={u.statusBadge}>{v.status}</span>
      </div>
      <div className={u.cardTypeRow}>
        <span className={u.typeBadge}>{p.type}</span>
      </div>
      <div className={u.cardStats}>
        <span className={u.stat}>
          <span className={u.statValue}>{p.inventory}</span> {p.inventoryWord}
        </span>
        <span className={u.stat}>
          <span className={u.statValue}>{p.spaces}</span> {v.spacesWord}
        </span>
      </div>
    </div>
  );
}

/** La lista de propiedades: la tarjeta grande con el encabezado y la grilla. */
export function PropsList({ v, count, newCard, pressed }: { v: PropsDict; count: 1 | 2; /** 0 → 1: la tarjeta nueva entrando. */ newCard: number; pressed?: boolean }) {
  const n = count === 2 ? 2 : 1;
  return (
    <div className={u.container}>
      <div className={u.mainCard}>
        <div className={u.header}>
          <div className={u.headerInfo}>
            <span className={u.title}>{v.ui.properties}</span>
            <span className={u.subtitle}>
              {n === 1 ? v.counts.one : v.counts.two}
            </span>
          </div>
          <span className={u.button} data-create style={pressed ? { transform: "scale(0.94)" } : undefined}>
            {v.ui.create}
          </span>
        </div>
        <div className={u.grid}>
          <PropertyCard p={v.hotel} v={v} data="hotel" />
          {count === 2 && (
            <PropertyCard
              p={v.cabins}
              v={v}
              data="cabins"
              hot={newCard < 1}
              style={{ opacity: clamp01(newCard * 1.6).toFixed(3), transform: `translate3d(0, ${((1 - easeOutExpo(newCard)) * 16).toFixed(1)}px, 0) scale(${(0.96 + 0.04 * easeOutExpo(newCard)).toFixed(4)})` }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- los modales -- */

/** El fondo oscuro de los modales del PMS, sobre toda la ventana. */
export function Overlay({ p, children }: { p: number; children: ReactNode }) {
  if (p <= 0) return null;
  return (
    <div className={u.overlay} style={{ background: `rgba(0, 0, 0, ${(0.5 * p).toFixed(3)})` }}>
      <div style={{ opacity: clamp01(p * 1.4).toFixed(3), transform: `translate3d(0, ${((1 - easeOut(p)) * 18).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * easeOut(p)).toFixed(4)})` }}>{children}</div>
    </div>
  );
}

/** Un campo de texto con cursor de escritura. */
function Field({ label, value, placeholder, focus, data }: { label: string; value: string; placeholder?: string; focus?: boolean; data?: string }) {
  return (
    <label className={u.inputField} data-field={data}>
      <span className={u.inputLabel}>{label}</span>
      <span className={[u.input, focus ? u.inputFocus : ""].join(" ")}>
        {value ? value : <span className={u.ph}>{placeholder}</span>}
        {focus && <span className={u.caret} />}
      </span>
    </label>
  );
}

export function CreatePropertyModal({
  v,
  name,
  city,
  focus,
  type,
  hotType,
  templateOpen,
  template,
  scroll,
  pressed,
}: {
  v: PropsDict;
  name: string;
  city: string;
  focus: "name" | "city" | null;
  type: string;
  hotType?: string | null;
  templateOpen: number;
  template: boolean;
  /** Cuánto se lleva scrolleado el cuerpo del modal, en px. */
  scroll: number;
  pressed?: boolean;
}) {
  const ui = v.ui;
  const groups: { title: string; hint: string; items: { key: string; label: string; sub: string }[] }[] = [
    {
      title: ui.unitTitle,
      hint: ui.unitHint,
      items: [
        { key: "cabin", label: ui.tCabin, sub: "Cabin" },
        { key: "villa", label: ui.tVilla, sub: "Villa" },
        { key: "vacation", label: ui.tVacation, sub: "Vacation rental" },
        { key: "glamping", label: ui.tGlamping, sub: "Glamping" },
      ],
    },
    {
      title: ui.catTitle,
      hint: ui.catHint,
      items: [
        { key: "hotel", label: "Hotel", sub: "Hotel" },
        { key: "resort", label: ui.tResort, sub: "Resort" },
        { key: "aparthotel", label: ui.tAparthotel, sub: "Aparthotel" },
        { key: "hostel", label: ui.tHostel, sub: "Hostel" },
      ],
    },
  ];
  return (
    <div className={u.modal} data-modal="create">
      <span className={u.modalTitle}>{ui.newProperty}</span>
      <div className={u.modalBody} data-body>
        <div className={u.formGrid} data-form style={{ transform: `translate3d(0, ${(-scroll).toFixed(1)}px, 0)` }}>
          <Field label={ui.nameLabel} value={name} placeholder="Hotel Patagonia" focus={focus === "name"} data="name" />
          <div className={u.inputField}>
            <span className={u.inputLabel}>{ui.typeLabel}</span>
            <p className={u.acFieldHint}>{ui.typeHint}</p>
            {groups.map((g) => (
              <div key={g.title} className={u.acGroup}>
                <div className={u.acGroupHeader}>
                  <span className={u.acGroupTitle}>{g.title}</span>
                  <span className={u.acGroupHint}>{g.hint}</span>
                </div>
                <div className={u.acGrid}>
                  {g.items.map((it) => (
                    <span key={it.key} className={[u.acCard, type === it.key ? u.acCardActive : "", hotType === it.key ? u.acCardHot : ""].join(" ")} data-type={it.key}>
                      <span className={u.acCardIcon}>{TYPE_ICON[it.key]}</span>
                      <span className={u.acCardLabel}>{it.label}</span>
                      <span className={u.acCardSub}>{it.sub}</span>
                      {type === it.key && (
                        <span className={u.acCardCheck}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <label className={u.inputField}>
            <span className={u.inputLabel}>{ui.template}</span>
            <span className={[u.select, templateOpen > 0.5 ? u.inputFocus : ""].join(" ")} data-select>
              {template ? v.templateName : v.templateNone}
              <Ico d={<path d="m6 9 6 6 6-6" />} className={u.selectChev} />
              {templateOpen > 0 && (
                <span className={u.selectMenu} style={{ opacity: templateOpen.toFixed(3), transform: `translate3d(0, ${((1 - templateOpen) * -6).toFixed(1)}px, 0)` }}>
                  <span className={u.selectOpt}>{v.templateNone}</span>
                  <span className={[u.selectOpt, u.selectOptHot].join(" ")} data-option>
                    {v.templateName}
                  </span>
                </span>
              )}
            </span>
          </label>
          <Field label={ui.city} value={city} placeholder="El Calafate" focus={focus === "city"} data="city" />
          <Field label={ui.country} value={city ? "AR" : ""} placeholder="AR" />
        </div>
      </div>
      <div className={u.modalActions}>
        <span className={u.buttonGhost}>{ui.cancel}</span>
        <span className={u.button} data-submit style={pressed ? { transform: "scale(0.94)" } : undefined}>
          {ui.create}
        </span>
      </div>
    </div>
  );
}

/** El mapa de `MapLocationPicker`, quieto: calles y manzanas, y el pin que cae al pegar. */
function MapPicker({ pin }: { pin: number }) {
  const drop = easeOutExpo(pin);
  return (
    <div className={u.map}>
      <svg viewBox="0 0 380 230" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="380" height="230" fill="#eef2ea" />
        <path d="M-10 150c60-30 120-20 180-50s120-40 220-20v160H-10z" fill="#cfe0ef" />
        <path d="M0 150c60-30 120-20 180-50s120-40 200-20" stroke="#b8cfe4" strokeWidth="3" fill="none" />
        <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
          <path d="M20 40h330M40 90h300M60 20l40 110M170 10l-20 100M260 12l30 90" />
        </g>
        <g fill="#dfe8d6">
          <rect x="70" y="48" width="60" height="30" rx="4" />
          <rect x="180" y="45" width="60" height="32" rx="4" />
          <rect x="280" y="50" width="45" height="28" rx="4" />
        </g>
        <path d="M30 200c40-20 80-10 120-30" stroke="#9fbf8c" strokeWidth="18" strokeLinecap="round" opacity="0.5" />
      </svg>
      {pin > 0 && (
        <span className={u.mapPin} style={{ opacity: clamp01(pin * 3).toFixed(3), transform: `translate(-50%, -100%) translate3d(0, ${((1 - drop) * -40).toFixed(1)}px, 0)` }}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" fill="#4e6b28" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="2.6" fill="#ffffff" />
          </svg>
        </span>
      )}
      {pin > 0.3 && <span className={u.mapPulse} style={{ opacity: ((1 - seg(pin, 0.3, 1)) * 0.6).toFixed(3), transform: `translate(-50%, -50%) scale(${(0.4 + seg(pin, 0.3, 1) * 1.4).toFixed(3)})` }} />}
    </div>
  );
}

export function EditPropertyModal({ v, focusLat, pasted, pin, pressed }: { v: PropsDict; focusLat: boolean; /** 0 → 1: el par pegado. */ pasted: number; pin: number; pressed?: boolean }) {
  const ui = v.ui;
  const flash = pasted > 0 && pasted < 1 ? 1 - pasted : 0;
  return (
    <div className={[u.modal, u.modalWide].join(" ")} data-modal="edit">
      <span className={u.modalTitle}>{ui.editProperty}</span>
      <div className={u.editLayout}>
        <div className={u.editColumn}>
          <Field label={ui.nameLabel} value={v.cabins.name} />
          <span className={u.formSectionLabel}>{ui.publicContact}</span>
          <Field label={ui.publicEmail} value="reservas@cabanasdellago.com" />
          <div className={u.formRow}>
            <Field label={ui.phone} value="+54 294 449-1200" />
            <Field label={ui.whatsapp} value="+54 9 294 449-1200" />
          </div>
          <span className={u.formSectionLabel}>{ui.address}</span>
          <div className={u.formRow}>
            <Field label={ui.city} value={v.cabins.cityOnly} />
            <Field label={ui.country} value="AR" />
          </div>
        </div>
        <div className={u.editColumn}>
          <div className={u.coordHeader}>
            <span className={u.formSectionLabel}>{ui.coords}</span>
            <span className={u.coordGuideBtn}>
              <Ico d={I.help} className={u.icoSm} />
              {ui.howCopy}
            </span>
          </div>
          <div className={u.formRow}>
            <label className={u.inputField} data-field="lat">
              <span className={u.inputLabel}>{ui.lat}</span>
              <span className={[u.input, focusLat ? u.inputFocus : ""].join(" ")} style={flash ? { background: `rgba(200, 226, 147, ${(0.55 * flash).toFixed(3)})` } : undefined}>
                {pasted > 0 ? v.coords.lat : <span className={u.ph}>-26.8083</span>}
                {focusLat && pasted <= 0 && <span className={u.caret} />}
              </span>
            </label>
            <label className={u.inputField}>
              <span className={u.inputLabel}>{ui.lng}</span>
              <span className={u.input} style={flash ? { background: `rgba(200, 226, 147, ${(0.55 * flash).toFixed(3)})` } : undefined}>
                {pasted > 0 ? v.coords.lng : <span className={u.ph}>-65.2176</span>}
              </span>
            </label>
          </div>
          <span className={u.coordHint}>{ui.coordTip}</span>
          <MapPicker pin={pin} />
        </div>
      </div>
      <div className={u.modalActions}>
        <span className={u.buttonGhost}>{ui.cancel}</span>
        <span className={u.button} data-submit style={pressed ? { transform: "scale(0.94)" } : undefined}>
          {ui.save}
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- usuarios --- */

type Row = { name: string; initials: string; mail: string; scope: string; role: string };

/** La lista de Compañía › Usuarios (`UsersSection` + `UserRow`). */
export function UsersList({ v, rows, newRow, pressed }: { v: PropsDict; rows: Row[]; newRow?: Row | null; pressed?: boolean }) {
  return (
    <div className={u.container}>
      <div className={u.mainCard}>
        <div className={u.header}>
          <div className={u.headerInfo}>
            <span className={u.title}>{v.invite.users}</span>
            <span className={u.subtitle}>
              {newRow ? v.counts.users3 : v.counts.users2}
            </span>
          </div>
          <span className={u.button} data-invite style={pressed ? { transform: "scale(0.94)" } : undefined}>
            {v.ui.createUserBtn}
          </span>
        </div>
        <div className={u.userList}>
          {rows.map((r) => (
            <UserRow key={r.name} r={r} />
          ))}
          {newRow && <UserRow r={newRow} hot data="new" />}
        </div>
      </div>
    </div>
  );
}

function UserRow({ r, hot, data }: { r: Row; hot?: boolean; data?: string }) {
  return (
    <div className={[u.userRow, hot ? u.userRowHot : ""].join(" ")} data-user={data}>
      <span className={u.avatar}>{r.initials}</span>
      <span className={u.userText}>
        <span className={u.userName}>{r.name}</span>
        <span className={u.userMail}>{r.mail}</span>
      </span>
      <span className={u.userScope}>{r.scope}</span>
      <span className={u.roleBadge}>{r.role}</span>
      <span className={u.activeBadge}>active</span>
    </div>
  );
}

export function CreateUserModal({
  v,
  name,
  email,
  focus,
  cabinsOn,
  recepOn,
  scroll,
  pressed,
}: {
  v: PropsDict;
  name: string;
  email: string;
  focus: "name" | "email" | null;
  cabinsOn: boolean;
  recepOn: boolean;
  scroll: number;
  pressed?: boolean;
}) {
  const ui = v.ui;
  const caps = ui.caps;
  const groups = [
    { title: ui.gUsers, idx: [0, 1] },
    { title: ui.gProps, idx: [2, 3, 4, 5, 6] },
    { title: ui.gCompany, idx: [7, 8, 9] },
  ];
  return (
    <div className={[u.modal, u.modalUser].join(" ")} data-modal="user">
      <span className={u.modalTitle}>{ui.createUserTitle}</span>
      <div className={u.modalBody} data-body>
        <div className={u.formGrid} data-form style={{ transform: `translate3d(0, ${(-scroll).toFixed(1)}px, 0)` }}>
          <p className={u.acFieldHint}>{ui.createUserIntro}</p>
          <Field label={ui.fullName} value={name} focus={focus === "name"} data="uname" />
          <Field label={ui.email} value={email} focus={focus === "email"} data="email" />
          <Field label={ui.role} value={v.invite.role} />

          <section className={u.section}>
            <h4 className={u.sectionTitle}>{ui.spacesTitle}</h4>
            <p className={u.sectionHint}>{ui.spacesIntro}</p>
            <div className={u.scopeChoice}>
              <span className={u.radio}>
                <i className={u.radioOn} />
                {ui.onlyChosen}
              </span>
              <span className={u.radio}>
                <i />
                {ui.allFuture}
              </span>
            </div>
            <div className={u.propList}>
              {[v.hotel, v.cabins].map((p, i) => {
                const on = i === 1 && cabinsOn;
                return (
                  <div key={p.name} className={[u.prop, on ? u.propOn : ""].join(" ")}>
                    <div className={u.propHeader}>
                      <span className={[u.checkbox, on ? u.checkboxOn : ""].join(" ")} data-prop-check={i}>
                        {on && <Ico d={I.check} className={u.icoCheck} />}
                      </span>
                      <Ico d={I.chevron} className={[u.icoSm, on ? u.chevOpen : ""].join(" ")} />
                      <Ico d={I.apartment} className={u.icoSm} />
                      <span className={u.propName}>{p.name}</span>
                      <span className={u.propSummary}>{on && recepOn ? `1 ${ui.assignedSpaces}` : ui.seeSpaces}</span>
                    </div>
                    {on && (
                      <div className={u.spacesPanel}>
                        {v.invite.spaces.map((sp, j) => {
                          const sOn = j === 0 && recepOn;
                          return (
                            <div key={sp.name} className={[u.space, sOn ? u.spaceOn : ""].join(" ")}>
                              <Ico d={I.space} className={u.icoSm} />
                              <span className={u.spaceText}>
                                <span className={u.spaceName}>
                                  {sp.name}
                                  {j === 0 && <span className={u.defaultTag}>{ui.isDefault}</span>}
                                </span>
                                <span className={u.spaceMeta}>{sp.apps ? `${sp.apps} ${ui.appsEnabled}` : ui.allApps}</span>
                              </span>
                              {sOn && <span className={u.accessSelect}>{ui.operate}</span>}
                              <span className={[u.switch, sOn ? u.switchOn : ""].join(" ")} data-switch={j}>
                                <i />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className={u.section} data-caps>
            <h4 className={u.sectionTitle}>{ui.capsTitle}</h4>
            <p className={u.sectionHint}>{ui.capsHint}</p>
            {groups.map((g) => (
              <div key={g.title} className={u.capGroup}>
                <span className={u.capGroupTitle}>{g.title}</span>
                <div className={u.capGrid}>
                  {g.idx.map((i) => (
                    <span key={i} className={u.capability}>
                      <span className={u.checkbox} />
                      <Ico d={I.cap[i]} className={u.icoSm} />
                      <span className={u.capLabel}>{caps[i]}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className={u.modalActions}>
        <span className={u.buttonGhost}>{ui.cancel}</span>
        <span className={u.button} data-submit style={pressed ? { transform: "scale(0.94)" } : undefined}>
          {ui.createUserBtn}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------ selector y buscador --- */

/** El menú "Cambiar propiedad" que cuelga del chip de la barra de arriba. */
export function ScopeMenu({ v, p, hot, current }: { v: PropsDict; p: number; hot: "hotel" | "cabins" | null; current: "hotel" | "cabins" }) {
  if (p <= 0) return null;
  return (
    <div className={u.scopeMenu} style={{ opacity: clamp01(p * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - easeOut(p)) * -8).toFixed(1)}px, 0)` }}>
      <div className={u.scopeMenuHead}>{v.ui.changeProperty}</div>
      {(["hotel", "cabins"] as const).map((k) => {
        const p2 = v[k];
        return (
          <div key={k} className={[u.scopeItem, current === k ? u.scopeItemOn : "", hot === k ? u.scopeItemHot : ""].join(" ")} data-scope={k}>
            <span className={u.scopeIcon}>
              <Ico d={I.home} className={u.icoSm} />
            </span>
            <span className={u.scopeText}>
              <span className={u.scopeName}>{p2.name}</span>
              <span className={u.scopeMeta}>{p2.type.toLowerCase()}</span>
            </span>
            {current === k && <Ico d={I.check} className={u.icoSm} />}
          </div>
        );
      })}
    </div>
  );
}

/** El buscador global (Ctrl/Cmd + K). */
export function SearchModal({ v, query, reveal, hot }: { v: PropsDict; query: string; reveal: number; hot: number }) {
  const ui = v.ui;
  const kind: Record<string, { label: string; icon: ReactNode }> = {
    room: { label: ui.kRoom, icon: I.bed },
    booking: { label: ui.kBooking, icon: I.calendar },
    property: { label: ui.kProperty, icon: I.home },
  };
  return (
    <div className={u.search}>
      <div className={u.searchBar}>
        <Ico d={I.search} />
        <span className={u.searchInput}>
          {query ? query : <span className={u.ph}>{ui.searchPlaceholder}</span>}
          <span className={u.caret} />
        </span>
        <span className={u.kbd}>esc</span>
      </div>
      <div className={u.results}>
        {v.search.results.map((r, i) => {
          const p = easeOutExpo(clamp01(reveal - i));
          if (p <= 0) return null;
          const k = kind[r.kind];
          return (
            <div key={r.title} className={[u.result, hot === i ? u.resultHot : ""].join(" ")} style={{ opacity: clamp01(p * 1.5).toFixed(3), transform: `translate3d(0, ${((1 - p) * 8).toFixed(1)}px, 0)` }}>
              <span className={u.resultIcon}>
                <Ico d={k.icon} className={u.icoSm} />
              </span>
              <span className={u.resultText}>
                <span className={u.resultTitle}>{r.title}</span>
                <span className={u.resultMeta}>{r.meta}</span>
              </span>
              <span className={u.resultKind}>{k.label}</span>
            </div>
          );
        })}
      </div>
      <div className={u.searchFoot}>
        <span>
          <span className={u.kbd}>↑</span>
          <span className={u.kbd}>↓</span> {ui.navigate}
        </span>
        <span>
          <span className={u.kbd}>↵</span> {ui.open}
        </span>
        <span>
          <span className={u.kbd}>esc</span> {ui.close}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- la estructura -- */

/**
 * La lista de propiedades con la ESTRUCTURA de cada una desplegada debajo de su
 * tarjeta: cómo se vende (`SALES_MODEL_LABELS` de `accommodationTypes.tsx`: por
 * categorías o por unidades) y qué tiene adentro. Es la organización que el
 * PMS arma con el tipo de alojamiento: el hotel vende categorías con un pool de
 * habitaciones; las cabañas, cada unidad con su nombre.
 *
 * `hotelP` y `cabinP` van de 0 a 1+: cada ítem entra a su turno (uno por 0,12).
 */
export function PropsStructure({ v, cats, hotelP, cabinP }: { v: PropsDict; cats: { name: string; count: number; color: string }[]; hotelP: number; cabinP: number }) {
  const ui = v.ui;
  const item = (p: number, i: number): CSSProperties => {
    const q = easeOutExpo(clamp01((p - i * 0.12) / 0.5));
    return { opacity: clamp01(q * 1.6).toFixed(3), transform: `translate3d(0, ${((1 - q) * 10).toFixed(1)}px, 0)` };
  };
  return (
    <div className={u.container}>
      <div className={u.mainCard}>
        <div className={u.header}>
          <div className={u.headerInfo}>
            <span className={u.title}>{ui.properties}</span>
            <span className={u.subtitle}>{v.counts.two}</span>
          </div>
          <span className={u.button}>{ui.create}</span>
        </div>
        <div className={u.orgGrid}>
          <div className={u.orgCol} data-col="hotel">
            <PropertyCard p={v.hotel} v={v} />
            <div className={u.tree} style={item(hotelP, 0)}>
              <div className={u.treeHead}>
                <span className={u.acGroupTitle}>{ui.catTitle}</span>
                <span className={u.acGroupHint}>{ui.catHint}</span>
              </div>
              {cats.map((c, i) => (
                <div key={c.name} className={u.treeRow} style={item(hotelP, i + 1)}>
                  <i className={u.treeDot} style={{ background: c.color }} />
                  <span className={u.treeName}>{c.name}</span>
                  <span className={u.treeCount}>
                    {c.count} <Ico d={I.bed} className={u.icoSm} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={u.orgCol} data-col="cabins">
            <PropertyCard p={v.cabins} v={v} />
            <div className={u.tree} style={item(cabinP, 0)}>
              <div className={u.treeHead}>
                <span className={u.acGroupTitle}>{ui.unitTitle}</span>
                <span className={u.acGroupHint}>{ui.unitHint}</span>
              </div>
              <div className={u.unitGrid}>
                {v.cabinUnits.map((name, i) => (
                  <span key={name} className={u.unitChip} style={item(cabinP, i + 1)}>
                    <span className={u.unitIcon}>{TYPE_ICON.cabin}</span>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
