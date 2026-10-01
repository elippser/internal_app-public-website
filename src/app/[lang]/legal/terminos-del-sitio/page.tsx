import type { Metadata } from "next";
import { LegalContractPage } from "@/components/legal/LegalPages";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";

/**
 * Los términos de uso del SITIO: rigen para quien navega sin cuenta y sin
 * contrato, así que no tienen penalidades; tienen prohibiciones y medidas.
 * El texto vive en `content/legal/es/site-terms.md`.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const { meta } = dict.legalCenter.docs.siteTerms;
  return pageMetadata(lang, "/legal/terminos-del-sitio", meta.title, meta.description);
}

export default async function SiteTermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const { legalCenter: t } = await getDictionary(lang);

  return <LegalContractPage doc="site-terms" locale={lang} t={t} copy={t.docs.siteTerms} />;
}
