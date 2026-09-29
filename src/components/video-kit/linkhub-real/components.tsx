import React from "react";
import type { PublicLinkhubBlock, PublicLinkhubPage } from "./types";
import { LhIcon, socialIconName, blockDefaultIcon } from "./icons";
import {
  MOTOR_SEARCH_SVG,
  MOTOR_TRIGGER_TEXT,
  addDaysISO,
  bookingDisplay,
  bookingMode,
  motorAccent,
  motorShortDate,
} from "./booking";
import styles from "./linkhub.module.css";

/**
 * CLON DE PARIDAD de pms-core/app .../linkhub/components/preview/components.tsx
 * con una diferencia deliberada: acá los links NAVEGAN (el editor los anula con
 * preventDefault). http(s) abre en pestaña nueva; tel:/mailto: en la misma.
 */

// ─── Helpers de link (autocontenidos) ────────────────────────────────────────

/** Sitio de roombir: destino de la marca del encabezado y del pie. */
export const ROOMBIR_URL = "https://roombir.com";

const digits = (s: string) => (s || "").replace(/[^\d]/g, "");

export const whatsappHref = (phone: string, message?: string) => {
  const base = `https://wa.me/${digits(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const socialHref = (platform: string, url: string) => {
  if (platform === "email") return url.startsWith("mailto:") ? url : `mailto:${url}`;
  if (platform === "phone") return url.startsWith("tel:") ? url : `tel:${digits(url)}`;
  return url;
};

const youtubeId = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/);
  return m ? m[1] : null;
};
const vimeoId = (url: string) => {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
};

export const videoEmbedUrl = (url: string, provider?: string | null): string | null => {
  if (provider === "vimeo" || vimeoId(url)) {
    const id = vimeoId(url);
    return id ? `https://player.vimeo.com/video/${id}` : null;
  }
  const id = youtubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
};

/**
 * Link del bloque mapa: si `mapsUrl` ya es una URL se abre tal cual; si no,
 * cómo llegar en Google Maps hacia la dirección. Sin iframe embebido.
 */
export const mapLinkUrl = (content: Record<string, any>): string => {
  const raw = String(content?.mapsUrl || "").trim();
  if (/^https?:\/\//i.test(raw)) return raw;
  const q = String(content?.address || raw || "");
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
};

/**
 * Marca una URL de ESTA página con de dónde va a llegar la visita que la abra:
 * `qr` la escanea del panel de abajo, `share` la recibe por el botón de
 * compartir. Las dos llegan sin referente, así que sin la marca se cuentan como
 * tráfico directo. El Tracker la lee de `?s=` al entrar.
 *
 * Espejo de `withLinkhubSource` en pms-core/app (ShareModal y QR del editor).
 */
export const withSource = (url: string, source: "qr" | "share"): string => {
  try {
    const u = new URL(url);
    u.searchParams.set("s", source);
    return u.toString();
  } catch {
    return url; // Base mal configurada: mejor el link crudo que ninguno.
  }
};

/** Target del anchor: pestaña nueva sólo para http(s); tel:/mailto: en la misma. */
const anchorTarget = (href: string) =>
  /^https?:\/\//i.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

// ─── Perfil ───────────────────────────────────────────────────────────────

const initials = (name: string) =>
  (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "·";

/**
 * Imagen de la cabecera. `shape` decide el recorte: "circle" (foto, cover),
 * "square" (logo entero sobre placa blanca con las esquinas del tema) o "free"
 * (logo suelto, sin placa ni recorte). Sin imagen siempre van las iniciales en
 * círculo. El CSS lo resuelve por `data-shape`.
 */
export function Avatar({ url, name, shape }: { url: string | null; name: string; shape?: string | null }) {
  const resolved = url ? shape || "circle" : "circle";
  return (
    <div className={styles.avatar} data-shape={resolved}>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.avatarImg} src={url} alt={name} />
      ) : (
        <div className={styles.avatarFallback}>{initials(name)}</div>
      )}
    </div>
  );
}

export function ProfileHeader({ profile }: { profile: PublicLinkhubPage["profile"] }) {
  return (
    <header className={styles.header}>
      <Avatar url={profile.avatarUrl} name={profile.displayName} shape={profile.avatarShape} />
      <div className={styles.nameRow}>
        <span className={styles.displayName}>{profile.displayName}</span>
        {profile.verified && (
          <span className={styles.verified} title="Verificado">
            <LhIcon name="star" size={17} />
          </span>
        )}
      </div>
      {profile.bio ? <div className={styles.bio}>{profile.bio}</div> : null}
    </header>
  );
}

export function SocialIconRow({
  links,
  style,
}: {
  links: PublicLinkhubPage["socialLinks"];
  /** `--lh-i` de la entrada en escalera (después del último bloque). */
  style?: React.CSSProperties;
}) {
  if (!links.length) return null;
  return (
    <div className={styles.socialRow} style={style}>
      {links.map((s, i) => {
        const href = socialHref(s.platform, s.url);
        return (
          <a
            key={`${s.platform}-${i}`}
            className={styles.socialLink}
            href={href}
            {...anchorTarget(href)}
            title={s.platform}
            data-lh-kind="social"
            data-lh-block={`social:${s.platform}`}
            data-lh-label={s.platform}
          >
            <LhIcon name={socialIconName(s.platform)} size={23} />
          </a>
        );
      })}
    </div>
  );
}

// ─── Botones ──────────────────────────────────────────────────────────────

interface ButtonProps {
  block: PublicLinkhubBlock;
  href?: string;
  typeIcon?: string;
  label?: string;
}

/**
 * Botón de la pila. Las tres celdas de la grilla se rinden SIEMPRE (aunque
 * queden vacías) para que el título esté centrado en el botón y no respecto
 * del espacio que sobra a los costados.
 */
export function LinkButton({ block, href, typeIcon, label }: ButtonProps) {
  const iconName = block.icon || blockDefaultIcon(block.type);
  const finalHref = href || "#";
  // Un bloque "link" trae el mismo ícono a izquierda y derecha: repetirlo no
  // agrega información y ensucia el botón. Sólo se muestra si aporta algo.
  const showTypeIcon = Boolean(typeIcon) && typeIcon !== iconName;
  return (
    <a
      className={`${styles.button} ${block.featured ? styles.featured : ""}`}
      href={finalHref}
      {...anchorTarget(finalHref)}
      data-lh-kind="block"
      data-lh-block={block.blockId}
      data-lh-type={block.type}
      data-lh-label={label ?? block.title}
    >
      {block.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.btnThumb} src={block.thumbnailUrl} alt="" />
      ) : (
        <span className={styles.btnIcon}>
          <LhIcon name={iconName} size={21} />
        </span>
      )}
      <span className={styles.btnBody}>
        <span className={styles.btnTitle}>{label ?? block.title}</span>
        {block.subtitle ? <span className={styles.btnSubtitle}>{block.subtitle}</span> : null}
      </span>
      <span className={styles.btnTypeIcon}>
        {showTypeIcon ? <LhIcon name={typeIcon!} size={17} /> : null}
      </span>
    </a>
  );
}

// ─── Motor de reservas embebido (disparador cerrado) ─────────────────────────

/**
 * Atributos del disparador. El host del motor (src/motor/LinkhubMotor) lo
 * escucha por delegación — la página sigue siendo server-side — y el Tracker
 * cuenta el clic igual que el de cualquier bloque.
 */
const motorTriggerProps = (block: PublicLinkhubBlock, accent: string) => ({
  type: "button" as const,
  "aria-haspopup": "dialog" as const,
  "data-lh-motor": "",
  "data-lh-motor-accent": accent,
  "data-lh-kind": "block",
  "data-lh-block": block.blockId,
  "data-lh-type": block.type,
  "data-lh-label": block.title,
});

function ButtonLead({ block }: { block: PublicLinkhubBlock }) {
  return block.thumbnailUrl ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.btnThumb} src={block.thumbnailUrl} alt="" />
  ) : (
    <span className={styles.btnIcon}>
      <LhIcon name={block.icon || blockDefaultIcon(block.type)} size={21} />
    </span>
  );
}

function ButtonBody({ block }: { block: PublicLinkhubBlock }) {
  return (
    <span className={styles.btnBody}>
      <span className={styles.btnTitle}>{block.title}</span>
      {block.subtitle ? <span className={styles.btnSubtitle}>{block.subtitle}</span> : null}
    </span>
  );
}

/** Botón de la pila que abre el motor en vez de navegar. */
export function MotorButton({ block, accent }: { block: PublicLinkhubBlock; accent: string }) {
  const showTypeIcon = (block.icon || blockDefaultIcon(block.type)) !== "calendar";
  return (
    <button className={`${styles.button} ${block.featured ? styles.featured : ""}`} {...motorTriggerProps(block, accent)}>
      <ButtonLead block={block} />
      <ButtonBody block={block} />
      <span className={styles.btnTypeIcon}>{showTypeIcon ? <LhIcon name="calendar" size={17} /> : null}</span>
    </button>
  );
}

/**
 * Barra de búsqueda cerrada: los mismos tres campos y la lupa que la barra del
 * motor, con los colores de la pila. Toda la tarjeta es un solo botón.
 */
export function MotorSearchBar({
  block,
  accent,
  today,
}: {
  block: PublicLinkhubBlock;
  accent: string;
  today: string;
}) {
  const text = MOTOR_TRIGGER_TEXT;
  const fields = [
    { label: text.checkin, value: motorShortDate(today) },
    { label: text.checkout, value: motorShortDate(addDaysISO(today, 1)) },
    { label: text.guests, value: `${text.adults} adultos` },
  ];
  return (
    <button className={`${styles.motorBar} ${block.featured ? styles.featured : ""}`} {...motorTriggerProps(block, accent)}>
      <span className={styles.motorHead}>
        <ButtonLead block={block} />
        <ButtonBody block={block} />
      </span>
      <span className={styles.motorFields}>
        {fields.map((f) => (
          <span key={f.label} className={styles.motorField}>
            <span className={styles.motorLabel}>{f.label}</span>
            <span className={styles.motorValue}>{f.value}</span>
          </span>
        ))}
      </span>
      <span className={styles.motorSearch}>
        <span className={styles.motorSearchIcon} aria-hidden dangerouslySetInnerHTML={{ __html: MOTOR_SEARCH_SVG }} />
        {text.search}
      </span>
    </button>
  );
}

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className={styles.divider}>
      <span className={styles.dividerLine} />
      {label ? <span className={styles.dividerLabel}>{label}</span> : null}
      <span className={`${styles.dividerLine} ${styles.dividerLineEnd}`} />
    </div>
  );
}

export function LinkhubFooter({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className={styles.footer}>
      <a
        className={styles.footerLink}
        href={ROOMBIR_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-lh-kind="brand"
        data-lh-block="brand:footer"
        data-lh-label="roombir"
      >
        Creado con roombir
      </a>
    </div>
  );
}

// ─── Render por tipo de bloque ──────────────────────────────────────────────

export interface BlockViewContext {
  /** YYYY-MM-DD de la zona del motor (fechas de la barra cerrada). */
  today: string;
  /** La página puede abrir el motor: tiene propiedad y monta LinkhubMotor. */
  motorEnabled: boolean;
  /** Color de marca del tema (motorThemeAccent): el del motor si el bloque no trae uno. */
  themeAccent: string;
}

export function BlockView({ block, ctx }: { block: PublicLinkhubBlock; ctx: BlockViewContext }) {
  const c = block.content || {};
  switch (block.type) {
    case "link":
      return (
        <div className={styles.block}>
          <LinkButton block={block} href={c.url} typeIcon="external" />
        </div>
      );
    case "booking": {
      if (bookingMode(c) === "embed") {
        const accent = motorAccent(c, ctx.themeAccent);
        if (ctx.motorEnabled) {
          return (
            <div className={styles.block}>
              {bookingDisplay(c) === "button" ? (
                <MotorButton block={block} accent={accent} />
              ) : (
                <MotorSearchBar block={block} accent={accent} today={ctx.today} />
              )}
            </div>
          );
        }
        // Sin motor que abrir (API sin propertyId): el link, si lo hay.
        if (!c.url) return null;
      }
      return (
        <div className={styles.block}>
          <LinkButton block={block} href={c.url} typeIcon="calendar" />
        </div>
      );
    }
    case "whatsapp":
      return (
        <div className={styles.block}>
          <LinkButton block={block} href={whatsappHref(c.phone, c.message)} typeIcon="whatsapp" />
        </div>
      );
    case "reviews": {
      const links = Array.isArray(c.links) ? c.links : [];
      return (
        <div className={`${styles.block} ${styles.blockGroup}`}>
          {links.map((l: any, i: number) => (
            <LinkButton
              key={i}
              block={{ ...block, icon: block.icon || "star" }}
              href={l.url}
              label={block.title ? `${block.title} · ${l.provider}` : `Ver en ${l.provider}`}
              typeIcon="external"
            />
          ))}
        </div>
      );
    }
    case "contact": {
      const btns: React.ReactNode[] = [];
      if (c.phone)
        btns.push(
          <LinkButton
            key="p"
            block={{ ...block, icon: block.icon || "call" }}
            href={`tel:${digits(c.phone)}`}
            label={block.title || c.phone}
          />
        );
      if (c.email)
        btns.push(
          <LinkButton
            key="e"
            block={{ ...block, icon: "email", title: "" }}
            href={`mailto:${c.email}`}
            label={c.email}
          />
        );
      return <div className={`${styles.block} ${styles.blockGroup}`}>{btns}</div>;
    }
    case "text":
      return <div className={styles.textBlock}>{c.body}</div>;
    case "gallery": {
      const images = Array.isArray(c.images) ? c.images : [];
      if (!images.length) return null;
      return (
        <div className={styles.galleryStrip}>
          {images.map((img: any, i: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} className={styles.galleryImg} src={img.url} alt="" />
          ))}
        </div>
      );
    }
    case "video": {
      const embed = videoEmbedUrl(c.url || "", c.provider);
      if (!embed) return null;
      return (
        <div className={styles.videoWrap}>
          <iframe src={embed} allowFullScreen title={block.title || "video"} loading="lazy" />
        </div>
      );
    }
    case "map":
      return (
        <div className={styles.block}>
          <LinkButton
            block={{ ...block, icon: block.icon || "map" }}
            href={mapLinkUrl(c)}
            label={block.title || "Cómo llegar"}
            typeIcon="external"
          />
        </div>
      );
    case "divider":
      return <SectionDivider label={c.label || block.title} />;
    default:
      return null;
  }
}
