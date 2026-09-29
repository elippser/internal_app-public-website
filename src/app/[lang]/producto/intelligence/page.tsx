import type { Metadata } from "next";
import type { CSSProperties } from "react";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import Faq from "@/components/site/Faq";
import { Headline, renderRich } from "@/components/site/RichText";
import {
  CtaBand,
  DayCompare,
  FeatureGrid,
  HeroActions,
  Split,
  SplitHead,
} from "@/components/site/Sections";
import { AgentTurn, TourismDossier } from "@/components/site/Vignettes";
import { INTELLIGENCE_HREF, PRODUCT_HREFS } from "@/components/site/nav";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./intelligence.module.css";

/**
 * Intelligence (28-09-2026): el servicio de inteligencia y datos que consume
 * Roombir IA. La página cuenta el problema (la información existe pero está
 * desparramada y juntarla lleva horas), qué reúne, por qué es confiable, cómo
 * lo usa Roombir IA y qué decisiones mejora. Lo abre la cuarta columna del
 * menú Roombir IA.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.intelligence.page;
  return pageMetadata(lang, INTELLIGENCE_HREF, t.meta.title, t.meta.description);
}

export default async function IntelligencePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.intelligence.page;
  const v = dict.vignettes;

  return (
    <>
      {/* Portada propia (29-09-2026): el texto centrado y, debajo, el planeta a
          todo el ancho de la ventana, fundido arriba y abajo con la página.
          La cascada de entrada es la misma de `PageHero` (`.rise` + `--d`). */}
      <section className={[styles.hero, "section"].join(" ")}>
        <div className="container">
          <div className={styles.heroCopy}>
            <p className="eyebrow rise" style={{ "--d": "0s" } as CSSProperties}>
              {t.hero.eyebrow}
            </p>
            <h1 className="h1 rise" style={{ "--d": "0.06s" } as CSSProperties}>
              <Headline text={t.hero.title} />
            </h1>
            <p className="lead rise" style={{ "--d": "0.12s" } as CSSProperties}>
              {renderRich(t.hero.lead, lang)}
            </p>
            <div className={[styles.heroActions, "rise"].join(" ")} style={{ "--d": "0.18s" } as CSSProperties}>
              <HeroActions locale={lang} dict={dict} />
            </div>
          </div>
        </div>
        <div className={styles.globe}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/global.webp"
            srcSet="/images/global-720.webp 720w, /images/global.webp 1600w"
            sizes="100vw"
            alt={t.hero.imageAlt}
            width={1600}
            height={872}
            fetchPriority="high"
          />
          {/* Las cuatro capas del desenfoque progresivo de la mitad de abajo. */}
          <i className={styles.blur} aria-hidden />
          <i className={styles.blur} aria-hidden />
          <i className={styles.blur} aria-hidden />
          <i className={styles.blur} aria-hidden />
        </div>
      </section>

      {/* ---------------------------------------------------- el problema -- */}
      {/* Empieza sobre la mitad de abajo del planeta (ver .afterGlobe). */}
      <section className={["section", styles.afterGlobe].join(" ")} id="problema">
        <div className="container container-wide">
          <SplitHead locale={lang} eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.lead} />
          <div data-reveal>
            <DayCompare locale={lang} headOld={t.problem.headOld} headNew={t.problem.headNew} rows={t.problem.rows} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ las áreas -- */}
      <FeatureGrid
        locale={lang}
        id="areas"
        eyebrow={t.areas.eyebrow}
        title={t.areas.title}
        lead={t.areas.lead}
        items={t.areas.items}
        cols={4}
      />

      {/* ------------------------------------------------------ confiable -- */}
      <Split
        locale={lang}
        id="fuentes"
        tone="ink"
        eyebrow={t.trust.eyebrow}
        title={t.trust.title}
        lead={t.trust.lead}
        items={t.trust.items}
        media={<TourismDossier v={v} locale={lang} />}
      />

      {/* -------------------------------------------------- con Roombir IA -- */}
      <Split
        locale={lang}
        id="roombir-ia"
        flip
        eyebrow={t.ia.eyebrow}
        title={t.ia.title}
        lead={t.ia.lead}
        items={t.ia.items}
        link={{ href: PRODUCT_HREFS.ia, label: t.ia.link }}
        media={<AgentTurn v={v} />}
      />

      {/* ----------------------------------------------------- decisiones -- */}
      <FeatureGrid
        locale={lang}
        id="decisiones"
        tone="paper2"
        eyebrow={t.decisions.eyebrow}
        title={t.decisions.title}
        lead={t.decisions.lead}
        items={t.decisions.items}
        cols={4}
      />

      <Faq items={t.faq} title={dict.common.faqTitle} locale={lang} />

      <CtaBand locale={lang} dict={dict} title={t.cta.title} lead={t.cta.lead} steps={t.cta.steps} />

      <BreadcrumbsLd
        lang={lang}
        trail={[
          { name: dict.producto.meta.title, href: "/producto" },
          { name: t.meta.title, href: INTELLIGENCE_HREF },
        ]}
      />
    </>
  );
}
