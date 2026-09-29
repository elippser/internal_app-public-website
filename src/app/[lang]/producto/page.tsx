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
import SiteVideo from "@/components/site/SiteVideo";
import { AgentTurn, SpaceSwitcher } from "@/components/site/Vignettes";
import { PMS_PARTS, PRODUCT_HREFS, PRODUCT_KEYS } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./producto.module.css";

/**
 * La vista de conjunto: qué es la plataforma y cómo se conectan sus cinco
 * productos. Abre con el video de portada, lista los cinco con enlace a
 * cada página, cuenta el escritorio por puesto y la capa que los une
 * (Roombir IA), y cierra con los números. Ya no repite la home ni publica el
 * catálogo interno de apps por área (IDENTIDAD-COMUNICACIONAL-2026.md §5).
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
    "/producto",
    dict.producto.meta.title,
    dict.producto.meta.description,
  );
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.producto;
  const v = dict.vignettes;
  const path = (href: string) => localePath(lang, href);

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
          />
        }
        aside={<SiteVideo piece="portada" locale={lang} t={dict.common.video} priority />}
      />

      {/* -------------------------------------------- los cinco productos -- */}
      <section className="section section-paper2" id="productos">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.modules.eyebrow}
            title={t.modules.title}
            lead={t.modules.lead}
          />
          <div className={styles.products} data-reveal>
            {PRODUCT_KEYS.map((key, i) => (
              <Link
                key={key}
                href={path(PRODUCT_HREFS[key])}
                className={[
                  "card",
                  "card-hover",
                  styles.product,
                  key === "ia" || key === "pms" ? styles.productWide : "",
                ].join(" ")}
              >
                <span className={styles.productNum}>0{i + 1}</span>
                <span className={styles.productTitle}>{t.modules.items[key].title}</span>
                <span className={styles.productDesc}>{t.modules.items[key].desc}</span>
                {key === "pms" && (
                  <span className={styles.productParts} aria-hidden>
                    {PMS_PARTS.map((part) => (
                      <span key={part} className="pill">
                        {dict.nav.pmsParts[part]}
                      </span>
                    ))}
                  </span>
                )}
                <span className="link-arrow">
                  {dict.common.seeMore}
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- el escritorio -- */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.desk.eyebrow}
        title={t.desk.title}
        lead={t.desk.lead}
        items={t.desk.items}
        media={<SpaceSwitcher v={v} />}
      />

      {/* ----------------------------------------------- la capa que une -- */}
      <Split
        locale={lang}
        flip
        eyebrow={t.ia.eyebrow}
        title={t.ia.title}
        lead={t.ia.lead}
        items={t.ia.items}
        link={{ href: PRODUCT_HREFS.ia, label: t.ia.link }}
        media={<AgentTurn v={v} />}
      />

      {/* ------------------------------------------------------- números -- */}
      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <StatBand stats={t.stats} />
          </div>
          <p className={styles.ask} data-reveal>
            {t.ask}{" "}
            <Link href={path("/contacto")} className="link-arrow">
              {t.askLink}
              <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

      <Faq items={dict.home.faq.slice(0, 4)} title={dict.common.faqTitle} locale={lang} />

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
      />

      {/* Para el lector de pantalla y el buscador: el título de la página
          repetido como resumen de los cinco. */}
      <p className="sr-only">
        <Headline text={t.hero.title} />
      </p>
    </>
  );
}
