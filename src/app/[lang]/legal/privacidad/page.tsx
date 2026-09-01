import type { Metadata } from "next";
import { LegalBody, TextHero } from "@/components/site/Sections";
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
  const t = dict.legal.privacy;

  return (
    <>
      <TextHero
        title={t.title}
        lead={t.lead}
        updated={`${dict.legal.updated}: ${dict.legal.updatedDate}`}
      />
      <LegalBody blocks={t.blocks} locale={lang} />
    </>
  );
}
