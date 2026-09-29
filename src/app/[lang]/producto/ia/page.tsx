import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  AskGrid,
  CompareTable,
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
  StatBand,
  toneOf,
} from "@/components/site/Sections";
import {
  AgentTurn,
  RateDecision,
  SpaceSwitcher,
  TourismDossier,
} from "@/components/site/Vignettes";
import SiteVideo from "@/components/site/SiteVideo";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Roombir IA. Es la página más larga de las siete a propósito: es el producto
 * que más nos separa y el más difícil de explicar a alguien que no es
 * técnico. Por eso arranca con pedidos literales (lo que escribiría la
 * persona) antes que con cómo funciona.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/producto/ia", dict.ia.meta.title, dict.ia.meta.description);
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
        aside={<SiteVideo piece="ia" locale={lang} t={dict.common.video} priority />}
      />

      <AskGrid
        locale={lang}
        id="pedidos"
        eyebrow={t.ask.eyebrow}
        title={t.ask.title}
        lead={t.ask.lead}
        items={t.ask.items}
      />

      <Split
        locale={lang}
        tone="ink"
        id="destino"
        eyebrow={t.dossier.eyebrow}
        title={t.dossier.title}
        lead={t.dossier.lead}
        items={t.dossier.items}
        media={<TourismDossier v={v} locale={lang} />}
      />

      {/* ------------------------------ contra un chat de uso general ---- */}
      <section className="section" id="diferencia">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.compare.eyebrow}
            title={t.compare.title}
            lead={t.compare.lead}
          />
          <div data-reveal>
            <CompareTable
              headCriterion={t.compare.headCriterion}
              headUs={t.compare.headUs}
              headThem={t.compare.headThem}
              rows={t.compare.rows.map((row) => ({
                ...row,
                usTone: toneOf(row.usTone),
                themTone: toneOf(row.themTone),
              }))}
              legend={t.compare.legend}
            />
          </div>
        </div>
      </section>

      <Split
        locale={lang}
        flip
        tone="paper2"
        id="estrategia"
        eyebrow={t.strategic.eyebrow}
        title={t.strategic.title}
        lead={t.strategic.lead}
        items={t.strategic.items}
        media={<RateDecision v={v} locale={lang} />}
      />

      <Split
        locale={lang}
        tone="ink"
        id="permisos"
        eyebrow={t.perms.eyebrow}
        title={t.perms.title}
        lead={t.perms.lead}
        items={t.perms.items}
        media={<SpaceSwitcher v={v} />}
      />

      <FeatureGrid
        locale={lang}
        id="como-se-le-habla"
        eyebrow={t.talk.eyebrow}
        title={t.talk.title}
        lead={t.talk.lead}
        items={t.talk.items}
        cols={4}
      />

      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <StatBand stats={t.stats} />
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
          { name: t.meta.title, href: "/producto/ia" },
        ]}
      />
    </>
  );
}
