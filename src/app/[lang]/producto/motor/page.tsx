import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import { Headline } from "@/components/site/RichText";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  StatBand,
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
    title: dict.motor.meta.title,
    description: dict.motor.meta.description,
    alternates: alternatesFor(lang, "/producto/motor"),
  };
}

export default async function MotorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.motor;
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
        aside={<EngineCalendar v={v} />}
      />

      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.calendar.eyebrow}
        title={t.calendar.title}
        lead={t.calendar.lead}
        items={t.calendar.items}
        media={<EngineCalendar v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.studio.eyebrow}
        title={t.studio.title}
        lead={t.studio.lead}
        items={t.studio.items}
        cols={4}
        tone="paper2"
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.agentic.eyebrow}
        title={t.agentic.title}
        lead={t.agentic.lead}
        items={t.agentic.items}
        link={{ href: PRODUCT_HREFS.agentes, label: t.agentic.link }}
        media={<AgentSurface v={v} />}
      />

      {/* ----------------------------------------------------- confirmación */}
      <section className="section section-ink">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.after.eyebrow}</p>
            <h2 className="h2">
              <Headline text={t.after.title} />
            </h2>
          </div>
          <div className="grid grid-3" data-reveal>
            {t.after.items.map((item) => (
              <article key={item.title} className="card">
                <h3 className="h3" style={{ marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="muted" style={{ fontSize: 14 }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 34 }} data-reveal>
            <StatBand tone="ink" stats={t.after.stats} />
          </div>
        </div>
      </section>

      <Split
        locale={lang}
        flip
        tone="paper2"
        eyebrow={t.distribute.eyebrow}
        title={t.distribute.title}
        lead={t.distribute.lead}
        items={t.distribute.items}
        media={<LinkHubPhone v={v} />}
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
