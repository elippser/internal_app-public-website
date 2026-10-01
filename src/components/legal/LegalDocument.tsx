import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref } from "@/i18n/routes";
import { PENDING_CLOSE, PENDING_OPEN, type LegalBlock, type LegalSection } from "@/lib/legal/doc";
import LegalToc from "./LegalToc";
import styles from "./legal.module.css";

/**
 * Un documento legal, de la portada a la última cláusula.
 *
 * Dibuja lo mismo venga de donde venga el texto: los Términos salen de
 * `content/legal/*.md` y traen ficha completa, aviso y resumen; privacidad y
 * cookies salen del diccionario y traen sólo el texto.
 *
 * Cada sección tiene un ancla fija `#s{N}`, igual en los cinco idiomas: las
 * cláusulas se citan entre sí y desde afuera (`/es/legal/terminos#s13`).
 */

export interface ControlRow {
  label: string;
  value: string;
  /** Ocupa la fila entera. Para la huella, que no entra en una celda. */
  wide?: boolean;
}

export interface LegalSummary {
  title: string;
  note: string;
  head: { subject: string; result: string; ref: string };
  rows: readonly { subject: string; result: string; ref: string }[];
}

const TOKEN = new RegExp(
  `(\\*\\*[^*]+\\*\\*|\`[^\`]+\`|\\[[^\\]]+\\]\\([^)]+\\)|${PENDING_OPEN}[^${PENDING_CLOSE}]+${PENDING_CLOSE})`,
  "g",
);

export default function LegalDocument({
  locale,
  labels,
  kicker,
  title,
  lead,
  control,
  courtesy,
  notice,
  summary,
  sections,
  essential = [],
  docLine,
}: {
  locale: Locale;
  labels: { toc: string; control: string; essential: string; pending: string };
  kicker: string;
  title: string;
  lead?: string;
  control: ControlRow[];
  /** El aviso de que el texto sólo existe en español. */
  courtesy?: string;
  notice?: { label: string; body: string };
  summary?: LegalSummary;
  sections: LegalSection[];
  essential?: number[];
  docLine: string;
}) {
  /** Negrita, código, enlaces y datos pendientes dentro de un texto. */
  const rich = (text: string): ReactNode[] =>
    text.split(TOKEN).map((chunk, i) => {
      if (!chunk) return null;
      if (chunk.startsWith("**")) return <strong key={i}>{rich(chunk.slice(2, -2))}</strong>;
      if (chunk.startsWith("`")) {
        return (
          <span key={i} className={styles.code}>
            {chunk.slice(1, -1)}
          </span>
        );
      }
      if (chunk.startsWith(PENDING_OPEN)) {
        return (
          <span key={i} className={styles.pending}>
            {chunk.slice(1, -1)} · {labels.pending}
          </span>
        );
      }
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(chunk);
      if (!link) return <span key={i}>{chunk}</span>;
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={i} href={localizedHref(locale, href)}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href}>
          {label}
        </a>
      );
    });

  const block = (b: LegalBlock, i: number) => {
    if (b.kind === "list") {
      return (
        <ol key={i} className={styles.items}>
          {b.items.map((item, j) => (
            <li key={j}>
              <span className={styles.itemMark}>{item.mark ? `${item.mark})` : "—"}</span>
              <span>{rich(item.text)}</span>
            </li>
          ))}
        </ol>
      );
    }
    if (b.kind === "table") {
      return (
        <div key={i} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {b.head.map((cell, j) => (
                  <th key={j} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k} data-label={b.head[k]}>
                      {rich(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <p key={i} className={styles.clause}>
        {b.num && <span className={styles.clauseNum}>{b.num}</span>}
        {rich(b.text)}
      </p>
    );
  };

  return (
    <article>
      <div className={styles.wrap}>
        <header className={styles.hero}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
        </header>

        <dl className={styles.control} aria-label={labels.control}>
          {control.map((row) => (
            <div
              key={row.label}
              className={[styles.controlCell, row.wide ? styles.controlWide : ""].join(" ")}
            >
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        {courtesy && <p className={styles.courtesy}>{courtesy}</p>}

        {notice && (
          <aside className={styles.notice}>
            <p className={styles.noticeLabel}>{notice.label}</p>
            <p className={styles.noticeBody}>{rich(notice.body)}</p>
          </aside>
        )}

        {summary && (
          <section className={styles.summary} aria-labelledby="resumen">
            <div className={styles.summaryHead}>
              <h2 id="resumen" className={styles.summaryTitle}>
                {summary.title}
              </h2>
              <p className={styles.summaryNote}>{summary.note}</p>
            </div>
            <table className={styles.summaryTable}>
              <thead>
                <tr>
                  <th scope="col">{summary.head.subject}</th>
                  <th scope="col">{summary.head.result}</th>
                  <th scope="col">{summary.head.ref}</th>
                </tr>
              </thead>
              <tbody>
                {summary.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.subject}</td>
                    <td className={styles.summaryResult}>{rich(row.result)}</td>
                    <td>
                      <a
                        className={styles.ref}
                        href={`#s${row.ref.split(".")[0]}`}
                        aria-label={`${summary.head.ref} ${row.ref}`}
                      >
                        § {row.ref}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <div className={styles.body}>
          <LegalToc
            title={labels.toc}
            items={sections.map(({ id, n, title: t }) => ({ id, n, title: t }))}
          />

          <div className={styles.doc}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <div className={styles.sectionHead}>
                  <span className={styles.sectionNum} aria-hidden>
                    {String(section.n).padStart(2, "0")}
                  </span>
                  <h2 className={styles.sectionTitle}>
                    <span className="sr-only">{section.n}. </span>
                    {section.title}
                  </h2>
                  {essential.includes(section.n) && (
                    <span className={styles.tag}>{labels.essential}</span>
                  )}
                </div>
                <div className={styles.blocks}>{section.blocks.map(block)}</div>
              </section>
            ))}

            <p className={styles.docLine}>{docLine}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
