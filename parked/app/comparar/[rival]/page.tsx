import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faq from "@/components/site/Faq";
import { renderRich } from "@/components/site/RichText";
import {
  ChoiceCards,
  CompareTable,
  CtaBand,
  HeroActions,
  PageHero,
  SplitHead,
  toneOf,
} from "@/components/site/Sections";
import {
  RIVAL_HREFS,
  RIVAL_KEYS,
  RIVAL_SLUGS,
  rivalFromSlug,
} from "@/components/site/nav";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * "Roombir vs X". Una página por competidor, con una regla de redacción que
 * no se negocia: la tarjeta "elegí a X si…" va primero y se escribe con la
 * misma generosidad que la nuestra. Los datos del competidor salen de su web
 * pública, leída en una fecha concreta que se muestra; los nuestros, del
 * estado del producto de /nosotros. Si el otro no publica un dato, la celda
 * dice "no lo declara", no lo inventamos —ni el precio, que es donde más se
 * inventa en este sector.
 */

export function generateStaticParams() {
  return RIVAL_KEYS.map((key) => ({ rival: RIVAL_SLUGS[key] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; rival: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const { rival } = await params;
  const key = rivalFromSlug(rival);
  if (!key) return {};
  const dict = await getDictionary(lang);
  const r = dict.comparar.rivals[key];
  return pageMetadata(lang, RIVAL_HREFS[key], r.meta.title, r.meta.description);
}

export default async function RivalPage({
  params,
}: {
  params: Promise<{ lang: string; rival: string }>;
}) {
  const lang = await readLocale(params);
  const { rival } = await params;
  const key = rivalFromSlug(rival);
  if (!key) notFound();

  const dict = await getDictionary(lang);
  const t = dict.comparar;
  const r = t.rivals[key];

  const fill = (text: string) =>
    text.replace("{name}", r.name).replace("{date}", t.verifiedDate);

  // El orden de las filas es el orden de `criteria` en el diccionario: los
  // cinco idiomas comparten las claves, así que también comparten el orden.
  const criteriaKeys = Object.keys(t.criteria) as (keyof typeof t.criteria)[];
  const rows = criteriaKeys.map((c) => ({
    label: t.criteria[c].label,
    us: t.criteria[c].us,
    usTone: toneOf(t.criteria[c].tone),
    them: r.rows[c].v,
    themTone: toneOf(r.rows[c].tone),
  }));

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={fill(t.verified)}
        title={r.hero.title}
        lead={r.hero.lead}
        actions={
          <HeroActions
            locale={lang}
            dict={dict}
            secondaryLabel={dict.common.seePricing}
            secondaryHref="/precios"
          />
        }
      />

      {/* ----------------------------------------------- cuándo elegir a quién */}
      <section className="section section-tight">
        <div className="container container-wide">
          <ChoiceCards
            locale={lang}
            them={{ title: fill(t.chooseThem), items: r.them }}
            us={{ title: t.chooseUs, items: r.us }}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------ la tabla */}
      <section className="section section-paper2">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.table.eyebrow}
            title={fill(t.table.title)}
            lead={t.table.lead}
          />
          <div data-reveal>
            <CompareTable
              headCriterion={t.table.headCriterion}
              headUs={t.table.headUs}
              headThem={r.name}
              rows={rows}
              legend={t.legend}
            />
          </div>
          <p className="small" style={{ marginTop: 18, maxWidth: 760 }}>
            {renderRich(fill(t.sourcesNote), lang)}{" "}
            <a href={`https://${r.site}`} rel="noreferrer noopener" target="_blank">
              {r.site}
            </a>
            .
          </p>
        </div>
      </section>

      <Faq items={r.faq} title={dict.common.faqTitle} locale={lang} />

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
          { name: t.meta.title, href: "/comparar" },
          { name: r.meta.title, href: RIVAL_HREFS[key] },
        ]}
      />
    </>
  );
}
