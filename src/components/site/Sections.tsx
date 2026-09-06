import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/dict/es";
import SamePageLink from "./SamePageLink";
import { Headline, renderRich } from "./RichText";
import CountUp from "./CountUp";
import styles from "./Sections.module.css";

/**
 * Piezas compartidas por todas las páginas: portada, banda de números, banda de
 * cierre, listas con tilde, la tabla de "lo que reemplaza" y el bloque partido.
 *
 * Ninguna tiene texto adentro: todas reciben strings del diccionario del idioma
 * activo. Los títulos vienen con `*palabra*` para la bastardilla y los párrafos
 * con `**negrita**` y `[enlace](/ruta)`, que resuelven `Headline` y `RichText`.
 */

/** Retardo para la cascada de entrada (`.rise` de globals.css). */
function rise(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * Enlace que no le hace pensar a quien escribe la página si el destino es
 * interno o externo. `/precios` navega con el router y con el idioma puesto;
 * `https://algo.externo` sale del sitio y `<Link>` ahí sólo agregaría prefetch
 * de algo que no controlamos.
 *
 * Sin `href` el botón se dibuja igual pero no lleva a ningún lado: es el caso
 * de los CTA que antes iban al PMS (ver `SamePageLink`).
 */
export function SmartLink({
  href,
  locale,
  className,
  children,
}: {
  href?: string;
  locale: Locale;
  className?: string;
  children: ReactNode;
}) {
  if (!href) {
    return <SamePageLink className={className}>{children}</SamePageLink>;
  }
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={localePath(locale, href)}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------- portada ---- */

export function PageHero({
  locale,
  eyebrow,
  title,
  lead,
  actions,
  notes,
  aside,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  actions?: ReactNode;
  /** Las cosas chicas bajo los botones: sin tarjeta, sin instalar, etc. */
  notes?: string[];
  aside?: ReactNode;
}) {
  return (
    <section className={[styles.hero, "section"].join(" ")}>
      <div className="container container-wide">
        <div className={[styles.heroGrid, aside ? "" : styles.heroSolo].join(" ")}>
          <div className={styles.heroCopy}>
            {/* La cascada de entrada: cada pieza llega 60ms después de la
                anterior. Es de tiempo, no de scroll — al segundo ya terminó. */}
            <p className="eyebrow rise" style={rise(0)}>
              {eyebrow}
            </p>
            <h1 className="h1 rise" style={rise(0.06)}>
              <Headline text={title} />
            </h1>
            <p className="lead rise" style={rise(0.12)}>
              {renderRich(lead, locale)}
            </p>
            {actions && (
              <div className="rise" style={rise(0.18)}>
                {actions}
              </div>
            )}
            {notes && notes.length > 0 && (
              <p className={[styles.heroNote, "rise"].join(" ")} style={rise(0.24)}>
                {notes.map((note) => (
                  <span key={note}>
                    <Check />
                    {note}
                  </span>
                ))}
              </p>
            )}
          </div>
          {aside && (
            <div className="rise" style={rise(0.22)}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Los dos botones que van en toda portada.
 *
 * El primario apunta al alta (`/crear-cuenta`) por defecto, y ese default es
 * el que hace que "empezar gratis" lleve al mismo lugar en las quince paginas
 * sin que ninguna lo declare. El sitio sigue sin enlazar al PMS: la pagina de
 * destino es del sitio, y el dominio de la app solo aparece en el correo.
 */
export function HeroActions({
  locale,
  dict,
  primaryLabel,
  primaryHref = "/crear-cuenta",
  secondaryLabel,
  secondaryHref = "/contacto",
}: {
  locale: Locale;
  dict: Dictionary;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="btn-row">
      <SmartLink locale={locale} className="btn btn-primary btn-lg" href={primaryHref}>
        {primaryLabel ?? dict.common.startFree}
        <ArrowRight />
      </SmartLink>
      <SmartLink locale={locale} className="btn btn-ghost btn-lg" href={secondaryHref}>
        {secondaryLabel ?? dict.common.talkToUs}
      </SmartLink>
    </div>
  );
}

/* -------------------------------------------------------------- números --- */

export function StatBand({
  stats,
  tone = "paper",
}: {
  stats: readonly { value: string; label: string }[];
  tone?: "paper" | "ink";
}) {
  return (
    // `data-fx`: las celdas entran en cascada y los números cuentan hasta su
    // valor. El servidor renderiza el valor final, así que sin JS se ve igual.
    <div
      className={[styles.stats, tone === "ink" ? styles.statsInk : ""].join(" ")}
      data-fx=""
    >
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <span className={styles.statValue}>
            <CountUp value={stat.value} />
          </span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------ lista con tilde --- */

export function CheckList({
  items,
  locale,
  tone = "paper",
  muted = false,
}: {
  items: readonly string[];
  locale: Locale;
  tone?: "paper" | "ink";
  /** Tilde gris en vez de musgo: la lista que habla del otro, no de nosotros. */
  muted?: boolean;
}) {
  return (
    <ul
      className={[
        styles.checks,
        tone === "ink" ? styles.checksInk : "",
        muted ? styles.checksMuted : "",
      ].join(" ")}
    >
      {items.map((item, i) => (
        <li key={i} className={styles.check}>
          <Check />
          <span>{renderRich(item, locale)}</span>
        </li>
      ))}
    </ul>
  );
}

/* --------------------------------------------------------------- cierre --- */

export function CtaBand({
  locale,
  dict,
  title,
  lead,
  steps,
  primaryLabel,
  primaryHref = "/crear-cuenta",
  secondaryLabel,
  secondaryHref = "/contacto",
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  lead: string;
  steps?: readonly string[];
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section">
      <div className="container container-wide">
        <div className={[styles.cta, "section-ink"].join(" ")} data-reveal data-fx="">
          <div className={styles.ctaCopy}>
            <h2 className="h2">
              <Headline text={title} />
            </h2>
            <p className="lead">{renderRich(lead, locale)}</p>
            <div className="btn-row" style={{ marginTop: 8 }}>
              <SmartLink locale={locale} className="btn btn-primary btn-lg" href={primaryHref}>
                {primaryLabel ?? dict.common.startFree}
                <ArrowRight />
              </SmartLink>
              <SmartLink locale={locale} className="btn btn-ghost btn-lg" href={secondaryHref}>
                {secondaryLabel ?? dict.common.bookDemo}
              </SmartLink>
            </div>
          </div>
          {steps && steps.length > 0 && (
            <div className={styles.ctaSide}>
              <div className={styles.ctaSteps}>
                {steps.map((step, i) => (
                  <p key={step} className={styles.ctaStep}>
                    <b>0{i + 1}</b>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- bloque partido -- */

/**
 * Una capacidad grande contada en una sección: copia de un lado, viñeta del
 * otro. `flip` alterna el lado para que tres bloques seguidos no se lean como
 * una lista.
 */
export function Split({
  locale,
  eyebrow,
  title,
  lead,
  items,
  link,
  media,
  flip = false,
  tone = "paper",
  id,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  items?: readonly string[];
  link?: { href: string; label: string };
  media: ReactNode;
  flip?: boolean;
  tone?: "paper" | "ink" | "paper2";
  id?: string;
}) {
  const toneClass =
    tone === "ink" ? "section-ink" : tone === "paper2" ? "section-paper2" : "";
  return (
    <section className={["section", toneClass].join(" ")} id={id}>
      <div className="container container-wide">
        <div className={[styles.split, flip ? styles.splitFlip : ""].join(" ")}>
          <div className={styles.splitCopy} data-reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h2">
              <Headline text={title} />
            </h2>
            <p className="lead">{renderRich(lead, locale)}</p>
            {items && items.length > 0 && (
              <CheckList
                items={items}
                locale={locale}
                tone={tone === "ink" ? "ink" : "paper"}
              />
            )}
            {link && (
              <SmartLink locale={locale} className="link-arrow" href={link.href}>
                {link.label}
                <ArrowRight />
              </SmartLink>
            )}
          </div>
          <div className={styles.splitMedia} data-reveal>
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- reemplazo - */

export function SwapTable({
  rows,
  headOld,
  headNew,
}: {
  rows: readonly { old: string; now: string }[];
  headOld: string;
  headNew: string;
}) {
  return (
    <div className={styles.swap}>
      <div className={[styles.swapRow, styles.swapHead].join(" ")}>
        <span className={styles.swapOld}>{headOld}</span>
        <span className={styles.swapArrow} />
        <span className={styles.swapNew}>{headNew}</span>
      </div>
      {rows.map((row) => (
        <div key={row.old} className={styles.swapRow}>
          <span className={styles.swapOld}>{row.old}</span>
          <span className={styles.swapArrow}>
            <ArrowRight />
          </span>
          <span className={styles.swapNew}>{row.now}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------- grilla simple --- */

/**
 * Grilla de capacidades. Es la sección de relleno honesta de cada página de
 * producto: lo que no da para un bloque partido pero sí hay que enumerar.
 */
export function FeatureGrid({
  locale,
  eyebrow,
  title,
  lead,
  items,
  cols = 3,
  tone = "paper",
  id,
}: {
  locale: Locale;
  eyebrow?: string;
  title?: string;
  lead?: string;
  items: readonly { title: string; desc: string }[];
  cols?: 2 | 3 | 4;
  tone?: "paper" | "ink" | "paper2";
  id?: string;
}) {
  const toneClass =
    tone === "ink" ? "section-ink" : tone === "paper2" ? "section-paper2" : "";
  return (
    <section className={["section", toneClass].join(" ")} id={id}>
      <div className="container container-wide">
        {(eyebrow || title || lead) && (
          <div className="section-head" data-reveal>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="h2">
                <Headline text={title} />
              </h2>
            )}
            {lead && <p className="lead">{renderRich(lead, locale)}</p>}
          </div>
        )}
        <div className={["grid", `grid-${cols}`].join(" ")} data-reveal>
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3 className="h3" style={{ marginBottom: 8 }}>
                {item.title}
              </h3>
              <p className="muted" style={{ fontSize: 14.2, lineHeight: 1.58 }}>
                {renderRich(item.desc, locale)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- encabezado de sección -- */

/** Título a la izquierda, bajada a la derecha. */
export function SplitHead({
  locale,
  eyebrow,
  title,
  lead,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="section-head section-head-split" data-reveal>
      <div className="stack">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">
          <Headline text={title} />
        </h2>
      </div>
      <p className="lead">{renderRich(lead, locale)}</p>
    </div>
  );
}

/* ------------------------------------------------------- compromisos ---- */

function RingCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="19 7 10 17 5 12" />
    </svg>
  );
}

/**
 * Los sellos propios. El sector tapiza la home con badges de terceros
 * (HotelTechReport, Booking.com Partner); nosotros no las tenemos y no las
 * inventamos. En su lugar, seis afirmaciones que se pueden ir a comprobar,
 * cada una con el enlace al lugar donde se comprueba. Es la sección que
 * responde a la queja #1 de las reseñas de la categoría: precio opaco,
 * permanencia escondida, módulos que aparecen en la segunda factura.
 */
export function Commitments({
  locale,
  eyebrow,
  title,
  lead,
  verify,
  items,
  id,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lead: string;
  verify: string;
  items: readonly { key: string; title: string; text: string; href: string }[];
  id?: string;
}) {
  return (
    <section className="section section-ink" id={id}>
      <div className="container container-wide">
        <SplitHead locale={locale} eyebrow={eyebrow} title={title} lead={lead} />
        <div className={styles.seals} data-reveal data-fx="">
          {items.map((item, i) => (
            <article key={item.key} className={styles.seal} style={rise(i * 0.08)}>
              <span className={styles.sealRing} aria-hidden>
                <RingCheck />
              </span>
              <h3 className={styles.sealTitle}>{item.title}</h3>
              <p className={styles.sealText}>{renderRich(item.text, locale)}</p>
              {/* `/llms.txt` vive en `public/` y no tiene idioma: no pasa por
                  el router ni por el prefijo. */}
              {item.href.endsWith(".txt") ? (
                <a className="link-arrow" href={item.href}>
                  {verify}
                  <ArrowRight />
                </a>
              ) : (
                <SmartLink locale={locale} className="link-arrow" href={item.href}>
                  {verify}
                  <ArrowRight />
                </SmartLink>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ un día con/sin -- */

/**
 * Un martes de recepción en seis horas, a la izquierda como es hoy y a la
 * derecha con el sistema. Es el "con / sin" que usa Amenitiz, pero contado
 * como jornada y no como lista de features: cada fila de la derecha nombra un
 * mecanismo real (el calendario del motor, el candado, la conversión
 * congelada), no un beneficio.
 */
export function DayCompare({
  locale,
  headOld,
  headNew,
  rows,
}: {
  locale: Locale;
  headOld: string;
  headNew: string;
  rows: readonly { time: string; old: string; now: string }[];
}) {
  return (
    <div className={styles.day} data-fx="">
      <div className={[styles.dayRow, styles.dayHead].join(" ")}>
        <span className={styles.dayTime} aria-hidden />
        <span className={styles.dayOld}>{headOld}</span>
        <span className={styles.dayNew}>{headNew}</span>
      </div>
      {rows.map((row, i) => (
        <div key={row.time} className={styles.dayRow} style={rise(i * 0.09)}>
          <span className={styles.dayTime}>{row.time}</span>
          <span className={styles.dayOld}>
            <i aria-hidden />
            <span>{renderRich(row.old, locale)}</span>
          </span>
          <span className={styles.dayNew}>
            <i aria-hidden />
            <span>{renderRich(row.now, locale)}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------- comparativa -- */

/**
 * La tríada de estado del sitio: musgo = sí, ámbar = parcial o con
 * condiciones, barro = no o no declarado, gris = un dato sin valoración. Es
 * la misma que usa el estado del producto en /nosotros, a propósito: la fila
 * de Roombir que dice "no existe todavía" se pinta con el mismo punto que la
 * del competidor.
 */
export type Tone = "ok" | "mid" | "no" | "info";

const TONES: readonly Tone[] = ["ok", "mid", "no", "info"];

/** Los diccionarios guardan el tono como string; acá se estrecha una vez. */
export function toneOf(value: string): Tone {
  return (TONES as readonly string[]).includes(value) ? (value as Tone) : "info";
}

const TONE_CLASS: Record<Tone, string> = {
  ok: styles.toneOk,
  mid: styles.toneMid,
  no: styles.toneNo,
  info: styles.toneInfo,
};

export function ToneDot({ tone }: { tone: Tone }) {
  return <i className={[styles.tone, TONE_CLASS[tone]].join(" ")} aria-hidden />;
}

/**
 * Criterio · Roombir · competidor. Es una `<table>` de verdad, con `scope`,
 * porque es la sección con más chance de que la cite un modelo y las tablas
 * HTML son lo que mejor extraen. El punto de color acompaña al texto, nunca
 * lo reemplaza: cada celda dice con palabras lo que el punto dice con color.
 */
export function CompareTable({
  headCriterion,
  headUs,
  headThem,
  rows,
  legend,
}: {
  headCriterion: string;
  headUs: string;
  headThem: string;
  rows: readonly {
    label: string;
    us: string;
    usTone: Tone;
    them: string;
    themTone: Tone;
  }[];
  legend: { ok: string; mid: string; no: string; info: string };
}) {
  return (
    <div>
      <div className={styles.cmpWrap}>
        <table className={styles.cmp}>
          <thead>
            <tr>
              <th scope="col">{headCriterion}</th>
              <th scope="col" className={styles.cmpUs}>
                {headUs}
              </th>
              <th scope="col">{headThem}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td className={styles.cmpUs}>
                  <span className={styles.cmpCell}>
                    <ToneDot tone={row.usTone} />
                    <span>{row.us}</span>
                  </span>
                </td>
                <td>
                  <span className={styles.cmpCell}>
                    <ToneDot tone={row.themTone} />
                    <span>{row.them}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.legend}>
        <span>
          <ToneDot tone="ok" />
          {legend.ok}
        </span>
        <span>
          <ToneDot tone="mid" />
          {legend.mid}
        </span>
        <span>
          <ToneDot tone="no" />
          {legend.no}
        </span>
        <span>
          <ToneDot tone="info" />
          {legend.info}
        </span>
      </p>
    </div>
  );
}

/**
 * "Elegí a X si…" / "Elegí Roombir si…". La tarjeta del otro va primero y
 * con la misma generosidad: una comparativa que siempre gana no la cita nadie
 * y no la cree nadie.
 */
export function ChoiceCards({
  locale,
  them,
  us,
}: {
  locale: Locale;
  them: { title: string; items: readonly string[] };
  us: { title: string; items: readonly string[] };
}) {
  return (
    <div className={styles.choice} data-reveal>
      <article className="card">
        <h3 className="h3" style={{ marginBottom: 14 }}>
          {them.title}
        </h3>
        <CheckList items={them.items} locale={locale} muted />
      </article>
      <article className={["card", styles.choiceUs].join(" ")}>
        <h3 className="h3" style={{ marginBottom: 14 }}>
          {us.title}
        </h3>
        <CheckList items={us.items} locale={locale} />
      </article>
    </div>
  );
}

/**
 * Las tarjetas que llevan a cada comparativa. Sirven solas (en el índice) o
 * con encabezado y enlace (en la home y en precios).
 */
export function CompareTeaser({
  locale,
  eyebrow,
  title,
  lead,
  link,
  cards,
  tone = "paper",
}: {
  locale: Locale;
  eyebrow?: string;
  title?: string;
  lead?: string;
  link?: { href: string; label: string };
  cards: readonly { href: string; vs: string; name: string; text: string }[];
  tone?: "paper" | "paper2";
}) {
  return (
    <section className={["section", tone === "paper2" ? "section-paper2" : ""].join(" ")}>
      <div className="container container-wide">
        {eyebrow && title && lead && (
          <SplitHead locale={locale} eyebrow={eyebrow} title={title} lead={lead} />
        )}
        <div className={styles.teaser} data-reveal>
          {cards.map((card) => (
            <Link
              key={card.href}
              href={localePath(locale, card.href)}
              className={["card", "card-hover", styles.teaserCard].join(" ")}
            >
              <span className={styles.teaserVs}>{card.vs}</span>
              <span className={styles.teaserName}>
                <em>{card.name}</em>
              </span>
              <span className={styles.teaserText}>{card.text}</span>
              <span className="link-arrow">
                {link?.label ?? ""}
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
        {link && (
          <p style={{ marginTop: 22 }}>
            <SmartLink locale={locale} className="link-arrow" href={link.href}>
              {link.label}
              <ArrowRight />
            </SmartLink>
          </p>
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------------- texto corrido -- */

/** Portada corta de las páginas de texto (legales, notas). */
export function TextHero({
  title,
  lead,
  updated,
}: {
  title: string;
  lead?: string;
  updated?: string;
}) {
  return (
    <section
      className="section"
      style={{ paddingTop: "clamp(112px, 13vw, 168px)", paddingBottom: 0 }}
    >
      <div className="container container-narrow">
        <h1 className="h1" style={{ marginBottom: 16 }}>
          {title}
        </h1>
        {lead && <p className="lead">{lead}</p>}
        {updated && (
          <p className="small" style={{ marginTop: 14 }}>
            {updated}
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * El cuerpo de una página legal: bloques de encabezado, párrafo y lista que
 * vienen del diccionario. Se modela así y no como un texto largo porque un
 * párrafo se traduce y una estructura de HTML no.
 */
export function LegalBody({
  blocks,
  locale,
}: {
  blocks: readonly { h?: string; p?: string; ul?: readonly string[] }[];
  locale: Locale;
}) {
  return (
    <section className="section">
      <div className="container container-narrow">
        <div className="prose">
          {blocks.map((block, i) => {
            if (block.h) return <h2 key={i}>{block.h}</h2>;
            if (block.ul) {
              return (
                <ul key={i}>
                  {block.ul.map((li, j) => (
                    <li key={j}>{renderRich(li, locale)}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{renderRich(block.p ?? "", locale)}</p>;
          })}
        </div>
      </div>
    </section>
  );
}
