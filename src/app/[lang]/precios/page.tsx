import type { Metadata } from "next";
import PlansMatrix from "@/components/plans/PlansMatrix";
import PlansMkt from "@/components/plans/PlansMkt";
import Faq from "@/components/site/Faq";
import { renderRich } from "@/components/site/RichText";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  SmartLink,
} from "@/components/site/Sections";
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
    title: dict.precios.meta.title,
    description: dict.precios.meta.description,
    alternates: alternatesFor(lang, "/precios"),
  };
}

export default async function PreciosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.precios;

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <HeroActions locale={lang} dict={dict} secondaryHref="/contacto" />
        }
        notes={t.hero.notes}
      />

      <PlansMkt dict={dict} />

      {/* --------------------------------------------------------- matriz -- */}
      <section className="section section-tight">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.matrix.eyebrow}</p>
            <h2 className="h2">
              {t.matrix.title.split(/(\*[^*]+\*)/g).map((chunk, i) =>
                chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2 ? (
                  <em key={i}>{chunk.slice(1, -1)}</em>
                ) : (
                  <span key={i}>{chunk}</span>
                ),
              )}
            </h2>
            <p className="lead">{t.matrix.lead}</p>
          </div>
          <div data-reveal>
            <PlansMatrix dict={dict} />
          </div>
        </div>
      </section>

      <FeatureGrid
        locale={lang}
        tone="ink"
        eyebrow={t.noCharge.eyebrow}
        title={t.noCharge.title}
        items={t.noCharge.items}
      />

      {/* ----------------------------------------------------- honestidad -- */}
      <section className="section section-tight">
        <div className="container container-narrow">
          <div className="card" data-reveal>
            <p className="eyebrow">{t.honest.eyebrow}</p>
            <h2 className="h3" style={{ margin: "12px 0 12px" }}>
              {t.honest.title}
            </h2>
            <p className="muted" style={{ fontSize: 15, marginBottom: 14 }}>
              {renderRich(t.honest.text, lang)}
            </p>
            <SmartLink locale={lang} className="link-arrow" href="/nosotros#estado">
              {t.honest.link}
            </SmartLink>
          </div>
        </div>
      </section>

      <Faq items={t.faq} title={t.faqTitle} locale={lang} />

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
