import type { Metadata } from "next";
import { LegalBody, TextHero } from "@/components/site/Sections";
import { readLocale } from "@/i18n/params";
import { alternatesFor } from "@/i18n/routes";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    title: dict.legal.privacy.meta.title,
    description: dict.legal.privacy.meta.description,
    alternates: alternatesFor(lang, "/legal/privacidad"),
  };
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
