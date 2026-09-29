import type { Metadata } from "next";
import { Headline, renderRich } from "@/components/site/RichText";
import {
  CheckList,
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  SplitHead,
} from "@/components/site/Sections";
import { EngineCalendar } from "@/components/site/Vignettes";
import SiteVideo from "@/components/site/SiteVideo";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "../pms/pms.module.css";

/**
 * Motor de reservas: página propia desde el 29-09-2026 (antes, una sección
 * con ancla de /producto/pms). El calendario que contesta antes de preguntar,
 * la cadena de precios, las diez monedas y dónde va el motor. Abre con su
 * video.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/producto/motor", dict.nav.pmsParts.motor, dict.pms.motor.lead);
}

export default async function MotorPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.pms;
  const v = dict.vignettes;

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={t.motor.eyebrow}
        title={t.motor.title}
        lead={t.motor.lead}
        actions={
          <HeroActions
            locale={lang}
            dict={dict}
            secondaryLabel={dict.nav.products.pms.title}
            secondaryHref="/producto/pms"
          />
        }
        aside={<SiteVideo piece="motor" locale={lang} t={dict.common.video} priority />}
      />

      {/* ------------------------------------ el calendario y los precios -- */}
      <section className="section section-ink">
        <div className="container container-wide">
          <div className={styles.motorGrid} data-reveal>
            <div className={styles.motorList}>
              <CheckList items={t.motor.items} locale={lang} tone="ink" />
              <EngineCalendar v={v} />
            </div>
            <div className={styles.motorSide}>
              <p className="eyebrow">{t.prices.eyebrow}</p>
              <h3 className="h3">
                <Headline text={t.prices.title} />
              </h3>
              <p className="muted" style={{ fontSize: 14.5 }}>
                {renderRich(t.prices.lead, lang)}
              </p>
              <CheckList items={t.prices.items} locale={lang} tone="ink" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- monedas -- */}
      <section className="section">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.currency.eyebrow}
            title={t.currency.title}
            lead={t.currency.lead}
          />
          <div data-reveal>
            <CheckList items={t.currency.items} locale={lang} />
          </div>
        </div>
      </section>

      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.where.eyebrow}
        title={t.where.title}
        items={t.where.items}
        cols={4}
      />

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
          { name: t.meta.title, href: "/producto/pms" },
          { name: dict.nav.pmsParts.motor, href: "/producto/motor" },
        ]}
      />
    </>
  );
}
