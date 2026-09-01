import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CtaBand,
  FeatureGrid,
  HeroActions,
  PageHero,
  Split,
  SplitHead,
  StatBand,
  SwapTable,
} from "@/components/site/Sections";
import Ticker from "@/components/site/Ticker";
import { AgentTurn, SpaceSwitcher, TapeChart } from "@/components/site/Vignettes";
import { PRODUCT_HREFS } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/producto", dict.producto.meta.title, dict.producto.meta.description);
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
        aside={<TapeChart v={v} />}
      />

      <Ticker items={dict.ticker} />

      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <SwapTable
              rows={dict.home.swap.rows}
              headOld={dict.home.swap.headOld}
              headNew={dict.home.swap.headNew}
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ el escritorio ---- */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.desk.eyebrow}
        title={t.desk.title}
        lead={t.desk.lead}
        items={t.desk.items}
        media={<SpaceSwitcher v={v} />}
      />

      {/* ------------------------------------------------------ el catálogo */}
      <section className="section">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.catalog.eyebrow}
            title={t.catalog.title}
            lead={t.catalog.lead}
          />

          <div className="grid grid-4" data-reveal>
            {t.catalog.hubs.map((hub) => (
              <article key={hub.hub} className="card">
                <h3 className="h3" style={{ marginBottom: 12 }}>
                  {hub.hub}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {hub.apps.map((app) => (
                    <li key={app} style={{ fontSize: 13.6, color: "var(--text-2)" }}>
                      {app}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- módulos */}
      <FeatureGrid
        locale={lang}
        tone="paper2"
        eyebrow={t.modules.eyebrow}
        title={t.modules.title}
        lead={t.modules.lead}
        items={t.modules.items}
      />

      {/* -------------------------------------------------------------- IA - */}
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

      <section className="section section-tight">
        <div className="container container-wide">
          <div data-reveal>
            <StatBand stats={t.stats} />
          </div>
          <p className="small" style={{ marginTop: 18 }}>
            {t.ask}{" "}
            <Link
              href={localePath(lang, "/contacto")}
              className="link-arrow"
              style={{ fontSize: 13.5 }}
            >
              {t.askLink}
              <ArrowRight />
            </Link>
          </p>
        </div>
      </section>

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
