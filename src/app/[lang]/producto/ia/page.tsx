import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  StatBand,
} from "@/components/site/Sections";
import {
  AgentTurn,
  RateDecision,
  SpaceSwitcher,
} from "@/components/site/Vignettes";
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
    title: dict.ia.meta.title,
    description: dict.ia.meta.description,
    alternates: alternatesFor(lang, "/producto/ia"),
  };
}

export default async function IaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.ia;
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
            secondaryLabel={dict.nav.platform}
            secondaryHref="/producto"
          />
        }
        aside={<AgentTurn v={v} />}
      />

      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.perms.eyebrow}
        title={t.perms.title}
        lead={t.perms.lead}
        items={t.perms.items}
        media={<SpaceSwitcher v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.tools.eyebrow}
        title={t.tools.title}
        lead={t.tools.lead}
        items={t.tools.items}
        cols={4}
        tone="paper2"
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        lead={t.experience.lead}
        items={t.experience.items}
        media={<AgentTurn v={v} />}
      />

      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <StatBand stats={t.stats} />
          </div>
        </div>
      </section>

      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        lead={t.why.lead}
        items={t.why.items}
        media={<RateDecision v={v} locale={lang} />}
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
