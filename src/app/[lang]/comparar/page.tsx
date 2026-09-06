import type { Metadata } from "next";
import {
  CheckList,
  CompareTeaser,
  CtaBand,
  HeroActions,
  PageHero,
  SplitHead,
} from "@/components/site/Sections";
import { RIVAL_HREFS, RIVAL_KEYS } from "@/components/site/nav";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * El índice de comparativas.
 *
 * Existe porque el 42% de las citas de un modelo de IA ocurren en la fase de
 * evaluación ("X vs Y"), y porque los grandes casi no comparan hacia abajo:
 * Cloudbeds tiene doce páginas de comparativa y ninguna nombra a un sistema
 * más chico. Amenitiz tiene casi sesenta y es la que más se cita. El término
 * "Cloudbeds vs [chico]" está libre para que lo ocupe el chico.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/comparar", dict.comparar.meta.title, dict.comparar.meta.description);
}

export default async function CompararPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.comparar;

  const cards = RIVAL_KEYS.map((key) => ({
    href: RIVAL_HREFS[key],
    vs: t.vsPrefix,
    name: t.rivals[key].name,
    text: t.rivals[key].oneLiner,
  }));

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
        notes={t.hero.notes}
      />

      <CompareTeaser locale={lang} cards={cards} link={{ href: "/comparar", label: t.read }} />

      {/* ------------------------------------------------------- el método */}
      <section className="section section-ink">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.method.eyebrow}
            title={t.method.title}
            lead={t.method.lead}
          />
          <div data-reveal style={{ maxWidth: 760 }}>
            <CheckList items={t.method.items} locale={lang} tone="ink" />
          </div>
        </div>
      </section>

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
      />

      <BreadcrumbsLd lang={lang} trail={[{ name: t.meta.title, href: "/comparar" }]} />
    </>
  );
}
