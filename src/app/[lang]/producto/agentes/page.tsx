import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import { Headline } from "@/components/site/RichText";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
  SwapTable,
} from "@/components/site/Sections";
import { AgentSurface, EngineCalendar } from "@/components/site/Vignettes";
import { PRODUCT_HREFS } from "@/components/site/nav";
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
  return pageMetadata(lang, "/producto/agentes", dict.agentes.meta.title, dict.agentes.meta.description);
}

export default async function AgentesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.agentes;
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
            secondaryLabel={t.hero.secondary}
            secondaryHref={PRODUCT_HREFS.motor}
          />
        }
        aside={<AgentSurface v={v} />}
      />

      {/* ------------------------------------------------------ el problema */}
      <section className="section section-tight">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.shift.eyebrow}
            title={t.shift.title}
            lead={t.shift.lead}
          />
          <div data-reveal>
            <SwapTable
              headOld={t.shift.headOld}
              headNew={t.shift.headNew}
              rows={t.shift.rows}
            />
          </div>
        </div>
      </section>

      <FeatureGrid
        locale={lang}
        tone="ink"
        eyebrow={t.surfaces.eyebrow}
        title={t.surfaces.title}
        lead={t.surfaces.lead}
        items={t.surfaces.items}
        cols={4}
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.editor.eyebrow}
        title={t.editor.title}
        lead={t.editor.lead}
        items={t.editor.items}
        media={<AgentSurface v={v} />}
      />

      <Split
        locale={lang}
        tone="paper2"
        eyebrow={t.consistency.eyebrow}
        title={t.consistency.title}
        lead={t.consistency.lead}
        items={t.consistency.items}
        media={<EngineCalendar v={v} />}
      />

      {/* ------------------------------------------------------ dogfooding -- */}
      <section className="section">
        <div className="container container-narrow">
          <div className="card" data-reveal style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              {t.dogfood.eyebrow}
            </p>
            <h2 className="h2" style={{ margin: "14px 0 12px" }}>
              <Headline text={t.dogfood.title} />
            </h2>
            <p className="lead" style={{ marginBottom: 20 }}>
              {t.dogfood.lead}
            </p>
            <a className="btn btn-ghost" href="/llms.txt">
              {t.dogfood.button}
            </a>
          </div>
        </div>
      </section>

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
          { name: dict.agentes.meta.title, href: "/producto/agentes" },
        ]}
      />
    </>
  );
}
