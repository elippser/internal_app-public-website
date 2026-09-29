import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/site/Faq";
import {
  ArrowRight,
  CtaBand,
  HeroActions,
  PageHero,
  SplitHead,
} from "@/components/site/Sections";
import { SpaceSwitcher } from "@/components/site/Vignettes";
import { SOLUTION_HREFS, SOLUTION_ROLES, SOLUTION_TYPES, type SolutionKey } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./soluciones.module.css";

/**
 * El índice de soluciones (28-09-2026): por tipo de alojamiento —las dos
 * formas de vender que soporta el sistema— y por cargo —los espacios de
 * trabajo modelo—. Cada tarjeta lleva a su página
 * (`soluciones/[solucion]`). El detalle que antes vivía acá, sección por
 * sección, se mudó a esas páginas.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/soluciones", dict.soluciones.meta.title, dict.soluciones.meta.description);
}

export default async function SolucionesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.soluciones;
  const ix = dict.solucionesIndex;
  const items = dict.nav.menus.solutionItems;
  const path = (href: string) => localePath(lang, href);

  const card = (key: SolutionKey, wide = false) => (
    <Link
      key={key}
      href={path(SOLUTION_HREFS[key])}
      className={["card", "card-hover", styles.card, wide ? styles.cardWide : ""].join(" ")}
    >
      <span className={styles.cardTitle}>{items[key].title}</span>
      <span className={styles.cardDesc}>{dict.solucionesPaginas[key].meta.description}</span>
      <span className="link-arrow">
        {ix.open}
        <ArrowRight />
      </span>
    </Link>
  );

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
        aside={<SpaceSwitcher v={dict.vignettes} />}
      />

      <section className="section section-tight section-paper2" id="por-tipo">
        <div className="container container-wide">
          <SplitHead locale={lang} eyebrow={ix.byType.eyebrow} title={ix.byType.title} lead={ix.byType.lead} />
          <div className={styles.types} data-reveal>
            {SOLUTION_TYPES.map((key) => card(key, true))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="por-cargo">
        <div className="container container-wide">
          <SplitHead locale={lang} eyebrow={ix.byRole.eyebrow} title={ix.byRole.title} lead={ix.byRole.lead} />
          <div className={styles.roles} data-reveal>
            {SOLUTION_ROLES.map((key) => card(key))}
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
    </>
  );
}
