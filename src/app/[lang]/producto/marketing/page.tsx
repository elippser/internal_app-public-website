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
  BrandKit,
  BuilderAi,
  LinkHubPhone,
  ReviewsList,
} from "@/components/site/Vignettes";
import SiteVideo from "@/components/site/SiteVideo";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Marketing: el editor web, la marca, los archivos, las galerías, las reseñas,
 * el LinkHub y la capa agéntica. Reemplaza a "Sitio web y marca" y a
 * "Alojamiento agéntico" (sus URLs redirigen acá; la segunda, a `#agentes`).
 *
 * Las anclas (`#web`, `#marca`, `#archivos`, `#resenas`, `#linkhub`,
 * `#agentes`) son parte del contrato: las usan otras páginas y el 308 de
 * `/producto/agentes`. No se renombran.
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
    "/producto/marketing",
    dict.marketing.meta.title,
    dict.marketing.meta.description,
  );
}

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.marketing;
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
        aside={<SiteVideo piece="marketing" locale={lang} t={dict.common.video} priority />}
      />

      <Split
        locale={lang}
        tone="ink"
        id="web"
        eyebrow={t.ai.eyebrow}
        title={t.ai.title}
        lead={t.ai.lead}
        items={t.ai.items}
        media={<BuilderAi v={v} />}
      />

      <FeatureGrid
        locale={lang}
        eyebrow={t.connected.eyebrow}
        title={t.connected.title}
        lead={t.connected.lead}
        items={t.connected.items}
        cols={4}
      />

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.quality.eyebrow}
        title={t.quality.title}
        lead={t.quality.lead}
        items={t.quality.items}
        cols={4}
      />


      <Split
        locale={lang}
        tone="paper2"
        id="marca"
        eyebrow={t.brand.eyebrow}
        title={t.brand.title}
        lead={t.brand.lead}
        items={t.brand.items}
        media={<BrandKit v={v} />}
      />

      <FeatureGrid
        locale={lang}
        id="archivos"
        eyebrow={t.files.eyebrow}
        title={t.files.title}
        items={t.files.items}
        cols={4}
      />

      <Split
        locale={lang}
        flip
        tone="paper2"
        id="resenas"
        eyebrow={t.reviews.eyebrow}
        title={t.reviews.title}
        lead={t.reviews.lead}
        items={t.reviews.items}
        media={<ReviewsList v={v} />}
      />

      <Split
        locale={lang}
        tone="ink"
        id="linkhub"
        eyebrow={t.linkhub.eyebrow}
        title={t.linkhub.title}
        lead={t.linkhub.lead}
        items={t.linkhub.items}
        media={<LinkHubPhone v={v} />}
      />

      <Split
        locale={lang}
        flip
        id="agentes"
        eyebrow={t.agentes.eyebrow}
        title={t.agentes.title}
        lead={t.agentes.lead}
        items={t.agentes.items}
        media={<AgentSurface v={v} />}
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
          { name: t.meta.title, href: "/producto/marketing" },
        ]}
      />
    </>
  );
}
