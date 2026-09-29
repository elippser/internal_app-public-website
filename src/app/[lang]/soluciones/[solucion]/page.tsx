import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Faq from "@/components/site/Faq";
import {
  CtaBand,
  DayCompare,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
} from "@/components/site/Sections";
import SiteVideo from "@/components/site/SiteVideo";
import {
  AgentTurn,
  EngineCalendar,
  OrgTree,
  RateDecision,
  ReportsBoard,
  RulesList,
  SpaceSwitcher,
  TapeChart,
  UnitStates,
} from "@/components/site/Vignettes";
import {
  SOLUTION_HREFS,
  SOLUTION_KEYS,
  SOLUTION_SEGMENTS,
  solutionFromSegment,
  type SolutionKey,
} from "@/components/site/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Las páginas de soluciones (28-09-2026): dos por tipo de alojamiento —los
 * que venden por categoría y los que venden cada unidad con nombre propio— y
 * una por cargo —el espacio de trabajo modelo de cada puesto—. Todas tienen
 * la misma anatomía: portada, cómo se vende o qué ve en su espacio, un día
 * con y sin roombir, lo que resuelve, preguntas y cierre. El texto vive en
 * `dict.solucionesPaginas` (sol/<idioma>.ts); acá sólo se elige qué viñeta o
 * qué video acompaña a cada una.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTION_KEYS.map((key) => ({ solucion: SOLUTION_SEGMENTS[key] }));
}

type V = Dictionary["vignettes"];

/** La portada (video o viñeta) y la imagen de la sección del espacio. */
function media(key: SolutionKey, v: V, lang: Locale, tv: Dictionary["common"]["video"]) {
  const byKey: Record<SolutionKey, { hero: ReactNode; space: ReactNode }> = {
    hoteles: {
      hero: <SiteVideo piece="habitaciones" locale={lang} t={tv} priority />,
      space: <TapeChart v={v} />,
    },
    alojamientos: {
      hero: <SiteVideo piece="motor" locale={lang} t={tv} priority />,
      space: <EngineCalendar v={v} />,
    },
    propietarios: { hero: <ReportsBoard v={v} />, space: <OrgTree v={v} /> },
    direccion: { hero: <SpaceSwitcher v={v} />, space: <UnitStates v={v} /> },
    revenue: { hero: <RateDecision v={v} locale={lang} />, space: <RulesList v={v} locale={lang} /> },
    recepcion: { hero: <AgentTurn v={v} />, space: <TapeChart v={v} /> },
    housekeeping: { hero: <UnitStates v={v} />, space: <SpaceSwitcher v={v} /> },
  };
  return byKey[key];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; solucion: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const { solucion } = await params;
  const key = solutionFromSegment(solucion);
  if (!key) return {};
  const dict = await getDictionary(lang);
  const p = dict.solucionesPaginas[key];
  return pageMetadata(lang, SOLUTION_HREFS[key], p.meta.title, p.meta.description);
}

export default async function SolucionPage({
  params,
}: {
  params: Promise<{ lang: string; solucion: string }>;
}) {
  const lang = await readLocale(params);
  const { solucion } = await params;
  const key = solutionFromSegment(solucion);
  if (!key) notFound();

  const dict = await getDictionary(lang);
  const p = dict.solucionesPaginas[key];
  const md = media(key, dict.vignettes, lang, dict.common.video);

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        lead={p.hero.lead}
        actions={
          <HeroActions
            locale={lang}
            dict={dict}
            secondaryLabel={dict.common.seePlatform}
            secondaryHref="/producto"
          />
        }
        aside={md.hero}
      />

      <Split
        locale={lang}
        tone="ink"
        eyebrow={p.space.eyebrow}
        title={p.space.title}
        lead={p.space.lead}
        items={p.space.items}
        media={md.space}
      />

      <section className="section section-tight">
        <div className="container container-wide">
          <SplitHead locale={lang} eyebrow={p.day.eyebrow} title={p.day.title} lead={p.day.lead} />
          <div data-reveal>
            <DayCompare locale={lang} headOld={p.day.headOld} headNew={p.day.headNew} rows={p.day.rows} />
          </div>
        </div>
      </section>

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={p.benefits.eyebrow}
        title={p.benefits.title}
        items={p.benefits.items}
        cols={4}
      />

      <Faq items={p.faq} title={dict.common.faqTitle} locale={lang} />

      <CtaBand locale={lang} dict={dict} title={p.cta.title} lead={p.cta.lead} steps={p.cta.steps} />

      <BreadcrumbsLd
        lang={lang}
        trail={[
          { name: dict.soluciones.meta.title, href: "/soluciones" },
          { name: p.meta.title, href: SOLUTION_HREFS[key] },
        ]}
      />
    </>
  );
}
