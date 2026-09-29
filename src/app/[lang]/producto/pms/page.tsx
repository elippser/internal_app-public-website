import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/site/Faq";
import { Headline } from "@/components/site/RichText";
import {
  ArrowRight,
  CtaBand,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
  StatBand,
} from "@/components/site/Sections";
import { SpaceSwitcher, TapeChart } from "@/components/site/Vignettes";
import SiteVideo from "@/components/site/SiteVideo";
import { readLocale } from "@/i18n/params";
import { localizedHref as localePath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./pms.module.css";

/**
 * El PMS: Propiedades, Habitaciones y Reservas, las tres en esta página y en
 * el orden en que se usan (pedido del 29-09-2026). El Motor de reservas tiene
 * la suya (`/producto/motor`) y desde aquí se enlaza al final de Reservas.
 * Nada de anclas en el menú: cada entrada del menú es una página.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/producto/pms", dict.pms.meta.title, dict.pms.meta.description);
}

export default async function PmsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.pms;
  const v = dict.vignettes;
  const tv = dict.common.video;
  const g = dict.home.guarantees;

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
        aside={<SiteVideo piece="propiedades" locale={lang} t={tv} priority />}
      />

      {/* ------------------------------------------------ 01 propiedades -- */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.propiedades.eyebrow}
        title={t.propiedades.title}
        lead={t.propiedades.lead}
        items={t.propiedades.items}
        media={<SpaceSwitcher v={v} />}
      />

      {/* ----------------------------------------------- 02 habitaciones -- */}
      <Split
        locale={lang}
        flip
        eyebrow={t.habitaciones.eyebrow}
        title={t.habitaciones.title}
        lead={t.habitaciones.lead}
        items={t.habitaciones.items}
        media={<SiteVideo piece="habitaciones" locale={lang} t={tv} />}
      />

      {/* ---------------------------------------------------- 03 reservas -- */}
      <section className="section section-paper2">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.reservas.eyebrow}
            title={t.reservas.title}
            lead={t.reservas.lead}
          />
          <div data-reveal style={{ marginBottom: 28 }}>
            <TapeChart v={v} />
          </div>
          <div className="grid grid-4" data-reveal>
            {t.reservas.items.map((item) => (
              <article key={item.title} className="card">
                <h3 className="h3" style={{ marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="muted" style={{ fontSize: 14.2, lineHeight: 1.58 }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
          {/* El paso siguiente es el motor, que tiene su página. */}
          <p className={styles.next} data-reveal>
            <Link href={localePath(lang, "/producto/motor")} className="link-arrow">
              {dict.nav.pmsParts.motor}
              <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <StatBand stats={t.stats} columns={4} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- garantías -- */}
      {/* Las tres garantías estructurales viven en el diccionario de la home
          desde el principio; acá es donde le tocan al lector. */}
      <section className="section section-ink">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{g.eyebrow}</p>
            <h2 className="h2">
              <Headline text={g.title} />
            </h2>
          </div>
          <div className={styles.guarantees} data-reveal>
            {g.items.map((item) => (
              <article key={item.key} className={styles.guarantee}>
                <p className={styles.guaranteeKey}>{item.key}</p>
                <h3 className={styles.guaranteeTitle}>{item.title}</h3>
                <p className={styles.guaranteeText}>{item.text}</p>
              </article>
            ))}
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
          { name: t.meta.title, href: "/producto/pms" },
        ]}
      />
    </>
  );
}
