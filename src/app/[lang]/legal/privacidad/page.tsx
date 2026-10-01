import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/legal/LegalPages";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/legal/privacidad", dict.legal.privacy.meta.title, dict.legal.privacy.meta.description);
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);

  return (
    <LegalPolicyPage
      locale={lang}
      t={dict.legalCenter}
      kicker={dict.legalCenter.docs.privacy.kicker}
      policy={dict.legal.privacy}
      updated={{ label: dict.legal.updated, date: dict.legal.updatedDate }}
    />
  );
}
