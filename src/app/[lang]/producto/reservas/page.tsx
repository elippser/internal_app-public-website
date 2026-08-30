import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
} from "@/components/site/Sections";
import { SpaceSwitcher, TapeChart } from "@/components/site/Vignettes";
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
    title: dict.reservas.meta.title,
    description: dict.reservas.meta.description,
    alternates: alternatesFor(lang, "/producto/reservas"),
  };
}

export default async function ReservasPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.reservas;
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
        aside={<TapeChart v={v} />}
      />

      {/* ------------------------------------------------------- calendario */}
      <Split
        locale={lang}
        tone="paper2"
        eyebrow={t.calendar.eyebrow}
        title={t.calendar.title}
        lead={t.calendar.lead}
        items={t.calendar.items}
        media={<TapeChart v={v} />}
      />

      {/* ------------------------------------------------------- las vistas */}
      <FeatureGrid
        locale={lang}
        eyebrow={t.views.eyebrow}
        title={t.views.title}
        items={t.views.items}
        cols={4}
      />

      {/* ------------------------------------------------- cadena de precios */}
      <section className="section section-ink">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.chain.eyebrow}
            title={t.chain.title}
            lead={t.chain.lead}
          />

          <div className="grid grid-4" data-reveal>
            {t.chain.steps.map((step, i) => (
              <article key={step.title} className="card">
                <p
                  className="mono"
                  style={{ color: "var(--brand-bright)", marginBottom: 10 }}
                >
                  {t.chain.stepLabel.replace("{n}", String(i + 1))}
                </p>
                <h3 className="h3" style={{ marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p className="muted" style={{ fontSize: 14 }}>
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ habitaciones */}
      <Split
        locale={lang}
        flip
        id="habitaciones"
        eyebrow={t.rooms.eyebrow}
        title={t.rooms.title}
        lead={t.rooms.lead}
        items={t.rooms.items}
        media={<SpaceSwitcher v={v} />}
      />

      {/* -------------------------------------------------- detalle reserva */}
      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.detail.eyebrow}
        title={t.detail.title}
        items={t.detail.items}
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
