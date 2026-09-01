import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
} from "@/components/site/Sections";
import { CompSet, RateDecision, RulesList } from "@/components/site/Vignettes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/producto/revenue", dict.revenue.meta.title, dict.revenue.meta.description);
}

export default async function RevenuePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.revenue;
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
        aside={<RateDecision v={v} locale={lang} />}
      />

      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.decision.eyebrow}
        title={t.decision.title}
        lead={t.decision.lead}
        items={t.decision.items}
        media={<RateDecision v={v} locale={lang} />}
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.rules.eyebrow}
        title={t.rules.title}
        lead={t.rules.lead}
        items={t.rules.items}
        media={<RulesList v={v} locale={lang} />}
      />

      <Split
        locale={lang}
        tone="paper2"
        eyebrow={t.comp.eyebrow}
        title={t.comp.title}
        lead={t.comp.lead}
        items={t.comp.items}
        media={<CompSet v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.rest.eyebrow}
        title={t.rest.title}
        items={t.rest.items}
      />

      <Faq items={t.faq} title={dict.common.faqTitle} locale={lang} />

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
      />

      <BreadcrumbsLd
        lang={lang}
        trail={[
          { name: dict.producto.meta.title, href: "/producto" },
          { name: dict.revenue.meta.title, href: "/producto/revenue" },
        ]}
      />
    </>
  );
}
