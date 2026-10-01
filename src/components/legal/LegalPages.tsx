import { LOCALE_TAGS, type Locale } from "@/i18n/config";
import type { LegalCenterDict } from "@/i18n/dict/legal/es";
import { sectionsFromBlocks, type LegalDocKey } from "@/lib/legal/doc";
import { loadLegalDoc } from "@/lib/legal/load";
import LegalDocument from "./LegalDocument";

/**
 * Las dos formas de página del centro legal.
 *
 * `LegalContractPage` dibuja un documento de `content/legal/` —los Términos
 * del software y los del sitio— con su ficha, su aviso y su resumen.
 * `LegalPolicyPage` dibuja una política que sigue en el diccionario
 * (privacidad, cookies), con el mismo chrome y sin tocarle el texto.
 */

const labelsOf = (t: LegalCenterDict) => ({
  toc: t.toc,
  control: t.control.label,
  essential: t.essential,
  pending: t.pending,
});

export function LegalContractPage({
  doc,
  locale,
  t,
  copy,
}: {
  doc: LegalDocKey;
  locale: Locale;
  t: LegalCenterDict;
  copy: LegalCenterDict["docs"]["terms"];
}) {
  const legal = loadLegalDoc(doc, locale);
  const { meta } = legal;

  // La fecha es un día civil: se lee en UTC para que no retroceda un día según
  // el huso de la máquina que hace el build.
  const date = new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${meta.effectiveDate}T00:00:00Z`));

  return (
    <LegalDocument
      locale={locale}
      labels={labelsOf(t)}
      kicker={copy.kicker}
      title={copy.title}
      lead={copy.lead}
      control={[
        { label: t.control.version, value: meta.version },
        { label: t.control.effective, value: date },
        { label: t.control.prevailing, value: t.spanish },
        { label: t.control.sections, value: String(legal.sections.length) },
        { label: t.control.hash, value: legal.sha256, wide: true },
      ]}
      courtesy={legal.fallback ? t.courtesy : locale !== "es" ? t.translation : undefined}
      notice={copy.notice}
      summary={copy.summary}
      sections={legal.sections}
      essential={meta.essential}
      docLine={t.footer.docLine
        .replace("{doc}", copy.title)
        .replace("{version}", meta.version)
        .replace("{date}", date)}
    />
  );
}

export function LegalPolicyPage({
  locale,
  t,
  kicker,
  policy,
  updated,
}: {
  locale: Locale;
  t: LegalCenterDict;
  kicker: string;
  policy: {
    title: string;
    lead: string;
    blocks: readonly { h?: string; p?: string; ul?: readonly string[] }[];
  };
  /** "Última actualización" y su fecha, ya en el idioma de la página. */
  updated: { label: string; date: string };
}) {
  const sections = sectionsFromBlocks(policy.blocks);

  return (
    <LegalDocument
      locale={locale}
      labels={labelsOf(t)}
      kicker={kicker}
      title={policy.title}
      lead={policy.lead}
      control={[
        { label: t.control.document, value: policy.title },
        { label: updated.label, value: updated.date },
        { label: t.control.sections, value: String(sections.length) },
      ]}
      sections={sections}
      docLine={`Roombir · ${policy.title} · ${updated.label}: ${updated.date}`}
    />
  );
}
