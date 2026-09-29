import React from "react";
import { roombirMarkGeometry } from "./logoPaths";
// Tipos laxos: el renderer tolera claves desconocidas (fallback "external").
type LinkhubBlockType = string;
type LinkhubSocialPlatform = string;

/**
 * Set de iconografía de la página LinkHub. Un solo estilo: outline, stroke 2px,
 * SVG inline con `currentColor`. Autocontenido (regla de paridad editor↔renderer):
 * sin dependencias del PMS, sólo props. Las claves las usa `LinkhubBlock.icon`
 * (íconos de hotel/utilidad) y la fila social.
 */

type Paths = React.ReactNode;

export const ICON_PATHS: Record<string, Paths> = {
  // ── Utilidad / bloque ──────────────────────────────────────────────────────
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  star: (
    <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z" />
  ),
  notes: (
    <>
      <path d="M4 6h16M4 12h16M4 18h10" />
    </>
  ),
  gallery: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M10 8l6 4-6 4z" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  call: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  divider: <path d="M4 12h16" />,
  share: (
    <>
      <path d="M12 3v13" />
      <path d="M8 7l4-4 4 4" />
      <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  download: (
    <>
      <path d="M12 3v12" />
      <path d="M7 12l5 5 5-5" />
      <path d="M4 21h16" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2v0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z" />
      <path d="M13 6v12" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
      <path d="M12 8v13" />
      <path d="M12 8S9 8 8 6a2 2 0 0 1 4-1 2 2 0 0 1 4 1c-1 2-4 2-4 2z" />
    </>
  ),

  // ── Hotel ────────────────────────────────────────────────────────────────
  bed: (
    <>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 20h18" />
      <path d="M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  "room-service": (
    <>
      <path d="M4 18h16" />
      <path d="M5 18a7 7 0 0 1 14 0" />
      <path d="M12 8V6" />
      <circle cx="12" cy="5" r="1" />
    </>
  ),
  spa: (
    <>
      <path d="M12 21c-4-2-7-5-7-9 3 0 5 1 7 4 2-3 4-4 7-4 0 4-3 7-7 9z" />
      <path d="M12 21v-6" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 3v8a2 2 0 0 0 4 0V3" />
      <path d="M8 11v10" />
      <path d="M16 3c-1.5 0-2 2-2 4s.5 4 2 4v10" />
    </>
  ),
  pool: (
    <>
      <path d="M3 18c1.5 1 3 1 4.5 0S10.5 17 12 18s3 1 4.5 0S19.5 17 21 18" />
      <path d="M6 16V6a2 2 0 0 1 4 0v10" />
      <path d="M6 10h4" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12a10 10 0 0 1 14 0" />
      <path d="M8.5 15.5a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 16V8h3a2.5 2.5 0 0 1 0 5H9" />
    </>
  ),
  pet: (
    <>
      <circle cx="6.5" cy="10.5" r="1.5" />
      <circle cx="10.5" cy="7.5" r="1.5" />
      <circle cx="13.5" cy="7.5" r="1.5" />
      <circle cx="17.5" cy="10.5" r="1.5" />
      <path d="M8 15c1-2 3-3 4-3s3 1 4 3 0 4-4 4-5-2-4-4z" />
    </>
  ),
  gym: (
    <>
      <path d="M4 9v6M20 9v6M7 7v10M17 7v10" />
      <path d="M7 12h10" />
    </>
  ),
  concierge: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l9 9" />
      <path d="M17 17l2-2M15 15l2-2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),

  // ── Sociales ────────────────────────────────────────────────────────────────
  // Los de marca van RELLENOS (fill="currentColor", stroke none) para que se
  // reconozcan como en las referencias; Instagram queda outline (es su glifo).
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.4 21.9v-7.2h2.4l.5-3h-2.9V9.8c0-.9.3-1.6 1.7-1.6h1.4V5.5c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.4-4 4v2.4H7.7v3h2.5v7.2c.6.1 1.2.1 1.8.1s1.2 0 1.4-.1z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      stroke="none"
      d="M19.9 7.1a5 5 0 0 1-3-2.6 5 5 0 0 1-.4-1.5h-3.1v12.8a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V10a6 6 0 0 0-.8-.1 5.9 5.9 0 1 0 5.9 5.9V9.6a8 8 0 0 0 4.2 1.2V7.7a5 5 0 0 1-.9-.6z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.8 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.2L5.6 21h-3l7.1-8.1L2.3 3h6.3l4.3 5.7L17.8 3zm-1.1 16.2h1.7L7.6 4.7H5.8l10.9 14.5z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      stroke="none"
      fillRule="evenodd"
      d="M22.5 12c0-1.8-.2-3.6-.5-4.8a2.6 2.6 0 0 0-1.8-1.8C18.4 5 12 5 12 5s-6.4 0-8.2.4A2.6 2.6 0 0 0 2 7.2C1.7 8.4 1.5 10.2 1.5 12s.2 3.6.5 4.8c.2.9.9 1.6 1.8 1.8C5.6 19 12 19 12 19s6.4 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.2.5-3 .5-4.8zM9.8 15.6V8.4L16 12l-6.2 3.6z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.3-1.8 2.5V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.6 2 3.6 4.6V19z"
    />
  ),
  pinterest: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 1.5a10.5 10.5 0 0 0-3.8 20.3c-.1-.8-.2-2.1 0-3l1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.3 3.8-5.5 0-2.9-2.1-4.9-5-4.9a5.2 5.2 0 0 0-5.4 5.2c0 1 .4 2.1.9 2.7a.4.4 0 0 1 .1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.8-2.4-4.6 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.3-1.5 3.1A10.5 10.5 0 1 0 12 1.5z"
    />
  ),
  snapchat: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.8c3.2 0 4.4 2.3 4.4 5.2 0 .6 0 1.2.1 1.7l1.2-.2c.4 0 .8.3.8.7 0 .5-.5.8-1 1-.3.1-.8.3-.8.7 0 .3.2.6.5 1 .6.8 1.6 1.6 2.8 1.9.3.1.5.3.5.6 0 .6-1 1-2.3 1.2-.1.3-.2.8-.4 1-.9 0-1.6-.3-2.6 0-.9.2-1.5 1.5-3.2 1.5s-2.3-1.3-3.2-1.5c-1-.3-1.7 0-2.6 0-.2-.2-.3-.7-.4-1-1.3-.2-2.3-.6-2.3-1.2 0-.3.2-.5.5-.6 1.2-.3 2.2-1.1 2.8-1.9.3-.4.5-.7.5-1 0-.4-.5-.6-.8-.7-.5-.2-1-.5-1-1 0-.4.4-.7.8-.7l1.2.2c.1-.5.1-1.1.1-1.7 0-2.9 1.2-5.2 4.4-5.2z"
    />
  ),
  spotify: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zm4.8 15.2c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-.9 7.6-.5 10.4 1.2.3.2.4.6.2.9zm1.3-2.9c-.2.4-.7.5-1.1.3-2.9-1.8-7.3-2.3-10.7-1.3-.4.1-.9-.1-1-.5-.1-.4.1-.9.6-1 3.9-1.2 8.7-.6 12 1.4.3.2.5.7.2 1.1zm.1-3.1c-3.5-2.1-9.2-2.3-12.5-1.3-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.8-1.2 10.1-.9 14.1 1.5.5.3.6.9.4 1.3-.3.5-.9.6-1.4.3z"
    />
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.2a9.8 9.8 0 0 0-8.5 14.7L2.2 21.8l5-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.9c-1.5 0-3-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8.1 8.1 0 1 1 6.9 3.7zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.4.1-.1 0-.3 0-.4L9.5 8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      stroke="none"
      d="M21.7 4.5 18.8 18.8c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2l-10.4 6.5-4.5-1.4c-1-.3-1-1 .2-1.4l17.5-6.7c.8-.3 1.5.2 1.2 1.1z"
    />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
};

export function LhIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

/**
 * Isotipo de Roombir (las cuatro formas), el mismo que dibuja el preview del
 * PMS. Va como SILUETA en `currentColor`, círculo incluido, para que tome el
 * color que contrasta con el fondo del tema — igual que el ícono de compartir:
 * un verde fijo chocaría con la mitad de los temas. A 20 px sale la versión
 * reducida (más aire entre formas). Trazados en ./logoPaths.ts, generado por
 * scripts/brand en la raíz.
 */
export function RoombirMark({ size = 20 }: { size?: number }) {
  const g = roombirMarkGeometry(size);
  return (
    <svg width={size} height={size} viewBox={g.viewBox} aria-hidden="true">
      <path fill="currentColor" d={g.d} />
      <circle fill="currentColor" cx={g.dot.cx} cy={g.dot.cy} r={g.dot.r} />
    </svg>
  );
}

/** Ícono de la fila social (la clave coincide con la plataforma). */
export const socialIconName = (p: LinkhubSocialPlatform): string =>
  ICON_PATHS[p] ? p : "external";

/** Ícono por defecto del tipo de bloque (cuando `block.icon` es null). */
export const blockDefaultIcon = (type: LinkhubBlockType): string => {
  const map: Record<string, string> = {
    link: "external",
    whatsapp: "whatsapp",
    booking: "calendar",
    reviews: "star",
    text: "notes",
    gallery: "gallery",
    video: "play",
    map: "map",
    contact: "call",
    divider: "divider",
  };
  return map[type] ?? "link";
};

/** Íconos ofrecidos en el selector de ícono de bloque (hotel + utilidad). */
export const PICKER_ICON_KEYS: string[] = [
  "link",
  "external",
  "calendar",
  "chat",
  "star",
  "ticket",
  "gift",
  "download",
  "play",
  "map",
  "call",
  "bed",
  "room-service",
  "spa",
  "restaurant",
  "pool",
  "wifi",
  "parking",
  "pet",
  "gym",
  "concierge",
  "key",
  "clock",
];
