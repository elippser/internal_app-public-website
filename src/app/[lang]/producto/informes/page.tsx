import type { Metadata } from "next";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
} from "@/components/site/Sections";
import { AgentTurn, TapeChart } from "@/components/site/Vignettes";
import SiteVideo from "@/components/site/SiteVideo";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Informes. El argumento no son las métricas —todos las tienen— sino la
 * sección de "estado y gestión": lo que está mal cargado hoy. Y los dos
 * límites que más se van a buscar (exportar y consolidar) se dicen en la
 * página, no en una FAQ escondida.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(
    lang,
    "/producto/informes",
    dict.informes.meta.title,
    dict.informes.meta.description,
  );
}

export default async function InformesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.informes;
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
        aside={<SiteVideo piece="informes" locale={lang} t={dict.common.video} priority />}
      />

      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.hygiene.eyebrow}
        title={t.hygiene.title}
        lead={t.hygiene.lead}
        items={t.hygiene.items}
        media={<TapeChart v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.metrics.eyebrow}
        title={t.metrics.title}
        lead={t.metrics.lead}
        items={t.metrics.items}
        cols={4}
      />

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.period.eyebrow}
        title={t.period.title}
        lead={t.period.lead}
        items={t.period.items}
        cols={4}
      />

      <Split
        locale={lang}
        flip
        eyebrow={t.ask.eyebrow}
        title={t.ask.title}
        lead={t.ask.lead}
        items={t.ask.items}
        media={<AgentTurn v={v} />}
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
          { name: t.meta.title, href: "/producto/informes" },
        ]}
      />
    </>
  );
}
