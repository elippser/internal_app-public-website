import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
} from "@/components/site/Sections";
import {
  AgentSurface,
  EngineCalendar,
  LinkHubPhone,
} from "@/components/site/Vignettes";
import { PRODUCT_HREFS } from "@/components/site/nav";
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
    title: dict.sitios.meta.title,
    description: dict.sitios.meta.description,
    alternates: alternatesFor(lang, "/producto/sitios"),
  };
}

export default async function SitiosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.sitios;
  const v = dict.vignettes;

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <HeroActions
            locale={lang}
            dict={dict}
            secondaryLabel={dict.common.seePricing}
            secondaryHref="/precios"
          />
        }
        aside={<LinkHubPhone v={v} />}
      />

      <Split
        locale={lang}
        tone="paper2"
        eyebrow={t.builder.eyebrow}
        title={t.builder.title}
        lead={t.builder.lead}
        items={t.builder.items}
        media={<EngineCalendar v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.published.eyebrow}
        title={t.published.title}
        items={t.published.items}
      />

      <Split
        locale={lang}
        flip
        tone="ink"
        eyebrow={t.seo.eyebrow}
        title={t.seo.title}
        lead={t.seo.lead}
        items={t.seo.items}
        link={{ href: PRODUCT_HREFS.agentes, label: t.seo.link }}
        media={<AgentSurface v={v} />}
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.linkhub.eyebrow}
        title={t.linkhub.title}
        lead={t.linkhub.lead}
        items={t.linkhub.items}
        media={<LinkHubPhone v={v} />}
      />

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.around.eyebrow}
        title={t.around.title}
        items={t.around.items}
      />

      <Faq items={t.faq} title={dict.common.faqTitle} locale={lang} />

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
      />
    </>
  );
}
