import type { Metadata } from "next";
import Link from "next/link";
import HomeScripts from "@/components/HomeScripts";
import PlansMkt from "@/components/plans/PlansMkt";
import Faq from "@/components/site/Faq";
import { Headline } from "@/components/site/RichText";
import Ticker from "@/components/site/Ticker";
import {
  ArrowRight,
  Check,
  CtaBand,
  HeroActions,
  Split,
  SplitHead,
  StatBand,
  SwapTable,
} from "@/components/site/Sections";
import {
  AgentSurface,
  AgentTurn,
  EngineCalendar,
  LinkHubPhone,
  RateDecision,
  SignalAgent,
  SignalRate,
  SpaceSwitcher,
  TapeChart,
} from "@/components/site/Vignettes";
import { PRODUCT_HREFS } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { alternatesFor } from "@/i18n/routes";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteUrl } from "@/lib/siteConfig";
import styles from "./home.module.css";
import "./monax.css";

/**
 * La home. El hero es el del template original (el headline animado con GSAP:
 * palabras enmascaradas, el chip naranja y la píldora verde), con la
 * tipografía del sistema nuevo — ver `monax.css` y `home.animation.js`. Todo
 * lo que sigue son las secciones del sistema del sitio.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    title: dict.site.title,
    description: dict.site.description,
    alternates: alternatesFor(lang, "/"),
  };
}

/* Los seis módulos, con su icono y el tinte que le toca. */
const MODULE_ICONS = {
  reservas: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  habitaciones: (
    <>
      <path d="M3 20h18M5 20v-9l7-5 7 5v9" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  motor: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  revenue: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  sitios: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  ia: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 13h.01M15 13h.01M9.5 16.5h5" />
    </>
  ),
} as const;

const MODULE_ORDER = [
  { key: "reservas", href: PRODUCT_HREFS.reservas, tint: "iconGreen" },
  { key: "habitaciones", href: `${PRODUCT_HREFS.reservas}#habitaciones`, tint: "iconClay" },
  { key: "motor", href: PRODUCT_HREFS.motor, tint: "iconAmber" },
  { key: "revenue", href: PRODUCT_HREFS.revenue, tint: "iconGreen" },
  { key: "sitios", href: PRODUCT_HREFS.sitios, tint: "iconClay" },
  { key: "ia", href: PRODUCT_HREFS.ia, tint: "iconAmber" },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.home;
  const v = dict.vignettes;
  const path = (href: string) => localePath(lang, href);

  return (
    <>
      {/* ------------------------------------------- hero (template GSAP) -- */}
      <div className="monax">
        <section className="hero">
          <h1 className="headline" id="headline">
            <div className="line line-1">
              <span className="word">
                <span>{t.hero.l1a}</span>
              </span>
              <span className="word">
                <span>{t.hero.l1b}</span>
              </span>
            </div>
            <div className="line line-2">
              <span className="inline-img" id="inlineImg"></span>
              <span className="word">
                <span>{t.hero.l2}</span>
              </span>
              <span className="idea-pill" id="ideaPill">
                <span className="txt">
                  {t.hero.pill.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
                <span className="leaf"></span>
              </span>
            </div>
            <div className="line line-3">
              <span className="word word-serif">
                <span>{t.hero.l3a}</span>
              </span>
              <span className="word word-serif">
                <span>{t.hero.l3b}</span>
              </span>
            </div>
          </h1>

          <div className="monax-cta">
            <HeroActions
              locale={lang}
              dict={dict}
              secondaryLabel={dict.common.seePlatform}
              secondaryHref="/producto"
            />
            <p className={styles.heroNotes}>
              <span>
                <Check />
                {dict.common.noCard}
              </span>
              <span>
                <Check />
                {dict.common.noInstall}
              </span>
              <span>
                <Check />
                {dict.common.guidedSignup}
              </span>
              <span>
                <Check />
                {dict.common.inSpanish}
              </span>
            </p>
          </div>
        </section>
        <HomeScripts />
      </div>

      {/* ------------------------------------------- captura del producto -- */}
      <div className={[styles.heroShot, "container", "container-wide"].join(" ")}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.heroShotInner}>
          <TapeChart v={v} />
          {/* Las dos señales flotan sobre el margen del calendario, no sobre
              las barras: lo que la persona vino a mirar es la grilla. Cada una
              con su propia fase de flotación para que no suban y bajen juntas. */}
          <div
            className={[styles.heroFloat, styles.heroFloatRight].join(" ")}
            style={{ "--d": "0.4s" } as React.CSSProperties}
            aria-hidden
          >
            <SignalRate v={v} />
          </div>
          <div
            className={[styles.heroFloat, styles.heroFloatLeft].join(" ")}
            style={{ "--d": "1.6s" } as React.CSSProperties}
            aria-hidden
          >
            <SignalAgent v={v} />
          </div>
        </div>
      </div>

      <Ticker items={dict.ticker} />

      {/* ------------------------------------------------------ reemplazo -- */}
      <section className="section section-tight">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.swap.eyebrow}
            title={t.swap.title}
            lead={t.swap.lead}
          />
          <div data-reveal>
            <SwapTable
              rows={t.swap.rows}
              headOld={t.swap.headOld}
              headNew={t.swap.headNew}
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- módulos -- */}
      <section className="section" id="modulos">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.modules.eyebrow}</p>
            <h2 className="h2">
              <Headline text={t.modules.title} />
            </h2>
            <p className="lead">{t.modules.lead}</p>
          </div>

          <div className={styles.modules} data-reveal>
            {MODULE_ORDER.map((mod) => (
              <Link key={mod.key} href={path(mod.href)} className={styles.module}>
                <span
                  className={[styles.moduleIcon, styles[mod.tint]].join(" ")}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {MODULE_ICONS[mod.key]}
                  </svg>
                </span>
                <span className={styles.moduleTitle}>{t.modules.items[mod.key].title}</span>
                <span className={styles.moduleDesc}>{t.modules.items[mod.key].desc}</span>
                <span className={styles.moduleLink}>
                  {dict.common.seeMore}
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- espacios operativos --- */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.spaces.eyebrow}
        title={t.spaces.title}
        lead={t.spaces.lead}
        items={t.spaces.items}
        media={<SpaceSwitcher v={v} />}
      />

      {/* --------------------------------------------------- modelo dual --- */}
      <section className="section">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.sale.eyebrow}
            title={t.sale.title}
            lead={t.sale.lead}
          />

          <div className={styles.sale} data-reveal>
            <article className="card" data-fx="">
              <div className={styles.saleUnits} aria-hidden>
                <span className={[styles.saleUnit, styles.saleUnitOn].join(" ")}>101</span>
                <span className={[styles.saleUnit, styles.saleUnitOn].join(" ")}>102</span>
                <span className={[styles.saleUnit, styles.saleUnitOn].join(" ")}>103</span>
                <span className={styles.saleUnit}>104</span>
              </div>
              <h3 className="h3">{t.sale.poolTitle}</h3>
              <p className="muted" style={{ fontSize: 14.5 }}>
                {t.sale.poolText}
              </p>
              <p className="pill" style={{ marginTop: 4 }}>
                {t.sale.poolTag}
              </p>
            </article>

            <article className="card" data-fx="">
              <div className={styles.saleUnits} aria-hidden>
                {t.sale.unitNames.map((name) => (
                  <span
                    key={name}
                    className={[styles.saleUnit, styles.saleUnitNamed].join(" ")}
                  >
                    {name}
                  </span>
                ))}
              </div>
              <h3 className="h3">{t.sale.unitTitle}</h3>
              <p className="muted" style={{ fontSize: 14.5 }}>
                {t.sale.unitText}
              </p>
              <p className="pill" style={{ marginTop: 4 }}>
                {t.sale.unitTag}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- motor - */}
      <Split
        locale={lang}
        flip
        tone="paper2"
        eyebrow={t.engine.eyebrow}
        title={t.engine.title}
        lead={t.engine.lead}
        items={t.engine.items}
        link={{ href: PRODUCT_HREFS.motor, label: t.engine.link }}
        media={<EngineCalendar v={v} />}
      />

      {/* ------------------------------------------------------- agéntico -- */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.agentic.eyebrow}
        title={t.agentic.title}
        lead={t.agentic.lead}
        items={t.agentic.items}
        link={{ href: PRODUCT_HREFS.agentes, label: t.agentic.link }}
        media={<AgentSurface v={v} />}
      />

      {/* --------------------------------------------------------- revenue - */}
      <Split
        locale={lang}
        flip
        eyebrow={t.revenue.eyebrow}
        title={t.revenue.title}
        lead={t.revenue.lead}
        items={t.revenue.items}
        link={{ href: PRODUCT_HREFS.revenue, label: t.revenue.link }}
        media={<RateDecision v={v} locale={lang} />}
      />

      {/* -------------------------------------------------------------- IA - */}
      <Split
        locale={lang}
        tone="ink"
        eyebrow={t.ia.eyebrow}
        title={t.ia.title}
        lead={t.ia.lead}
        items={t.ia.items}
        link={{ href: PRODUCT_HREFS.ia, label: t.ia.link }}
        media={<AgentTurn v={v} />}
      />

      {/* ------------------------------------------------------ garantías -- */}
      <section className="section section-ink">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.guarantees.eyebrow}</p>
            <h2 className="h2">
              <Headline text={t.guarantees.title} />
            </h2>
          </div>
          <div className={styles.guarantees} data-reveal>
            {t.guarantees.items.map((item) => (
              <article key={item.key} className={styles.guarantee}>
                <p className={styles.guaranteeKey}>{item.key}</p>
                <h3 className={styles.guaranteeTitle}>{item.title}</h3>
                <p className={styles.guaranteeText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- números - */}
      <section className="section section-tight">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.stats.eyebrow}
            title={t.stats.title}
            lead={t.stats.lead}
          />
          <div data-reveal>
            <StatBand stats={t.stats.items} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- sitio y LinkHub - */}
      <Split
        locale={lang}
        flip
        tone="paper2"
        eyebrow={t.marketing.eyebrow}
        title={t.marketing.title}
        lead={t.marketing.lead}
        items={t.marketing.items}
        link={{ href: PRODUCT_HREFS.sitios, label: t.marketing.link }}
        media={<LinkHubPhone v={v} />}
      />

      {/* ------------------------------------------------------------ alta - */}
      <section className="section">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.onboarding.eyebrow}
            title={t.onboarding.title}
            lead={t.onboarding.lead}
          />
          <div className={styles.steps} data-reveal>
            {t.onboarding.steps.map((step) => (
              <article key={step.title} className={styles.step}>
                <p className={styles.stepNum}>{step.num}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- precios -- */}
      <PlansMkt
        dict={dict}
        title={dict.plans.homeTitle}
        subtitle={dict.plans.homeSubtitle}
      />

      {/* ----------------------------------------------------- honestidad -- */}
      <section className="section section-tight" id="estado">
        <div className="container container-wide">
          <div className={styles.honest} data-reveal>
            <div className="stack">
              <p className="eyebrow">{t.honest.eyebrow}</p>
              <h2 className="h2">
                <Headline text={t.honest.title} />
              </h2>
              <p className="lead">{t.honest.lead}</p>
              <Link href={path("/nosotros#estado")} className="link-arrow">
                {t.honest.link}
                <ArrowRight />
              </Link>
            </div>

            <div className={styles.honestList}>
              {t.honest.items.map((item) => (
                <div key={item.tag} className={styles.honestItem}>
                  <div>
                    <p className={styles.honestTag}>{item.tag}</p>
                    <p className={styles.honestState}>
                      <i aria-hidden />
                      {item.state === "none" ? t.honest.states.none : t.honest.states.partial}
                    </p>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
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

      {/* JSON-LD del producto. Lo mismo que le pedimos al hotelero que haga con
          su alojamiento: declarar qué es esto para que un modelo lo entienda. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Bookfer",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Property Management System",
            operatingSystem: "Web",
            url: `${siteUrl}/${lang}`,
            inLanguage: ["es", "en", "pt", "fr", "de"],
            description: dict.site.description,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "0",
              highPrice: "199",
              offerCount: "3",
            },
          }),
        }}
      />
    </>
  );
}
