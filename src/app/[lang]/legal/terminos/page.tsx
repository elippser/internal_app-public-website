import type { Metadata } from "next";
import { LegalContractPage } from "@/components/legal/LegalPages";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";

/**
 * Los Términos y Condiciones del SOFTWARE: el contrato que se acepta antes de
 * crear la cuenta. El texto vive en `content/legal/es/terms.md`.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const { meta } = dict.legalCenter.docs.terms;
  return pageMetadata(lang, "/legal/terminos", meta.title, meta.description);
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const { legalCenter: t } = await getDictionary(lang);

  return <LegalContractPage doc="terms" locale={lang} t={t} copy={t.docs.terms} />;
}
