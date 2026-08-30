import type { Metadata } from "next";
import {
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
} from "@/components/site/Sections";
import {
  EngineCalendar,
  SpaceSwitcher,
  TapeChart,
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
    title: dict.soluciones.meta.title,
    description: dict.soluciones.meta.description,
    alternates: alternatesFor(lang, "/soluciones"),
  };
}

export default async function SolucionesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.soluciones;
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
        aside={<SpaceSwitcher v={v} />}
      />

      <Split
        locale={lang}
        id="hoteles"
        tone="paper2"
        eyebrow={t.hoteles.eyebrow}
        title={t.hoteles.title}
        lead={t.hoteles.lead}
        items={t.hoteles.items}
        media={<TapeChart v={v} />}
      />

      <Split
        locale={lang}
        flip
        id="cabanas"
        eyebrow={t.cabanas.eyebrow}
        title={t.cabanas.title}
        lead={t.cabanas.lead}
        items={t.cabanas.items}
        media={<EngineCalendar v={v} />}
      />

      <Split
        locale={lang}
        id="hostels"
        eyebrow={t.hostels.eyebrow}
        title={t.hostels.title}
        lead={t.hostels.lead}
        items={t.hostels.items}
        media={<SpaceSwitcher v={v} />}
      />

      <Split
        locale={lang}
        flip
        id="glamping"
        tone="ink"
        eyebrow={t.glamping.eyebrow}
        title={t.glamping.title}
        lead={t.glamping.lead}
        items={t.glamping.items}
        media={<EngineCalendar v={v} />}
      />

      <Split
        locale={lang}
        id="grupos"
        eyebrow={t.grupos.eyebrow}
        title={t.grupos.title}
        lead={t.grupos.lead}
        items={t.grupos.items}
        media={<TapeChart v={v} />}
      />

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.roles.eyebrow}
        title={t.roles.title}
        lead={t.roles.lead}
        items={t.roles.items}
      />

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
