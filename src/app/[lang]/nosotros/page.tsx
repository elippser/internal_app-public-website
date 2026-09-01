import type { Metadata } from "next";
import { Headline } from "@/components/site/RichText";
import {
  CtaBand,
  HeroActions,
  PageHero,
  SplitHead,
  StatBand,
} from "@/components/site/Sections";
import { SpaceSwitcher } from "@/components/site/Vignettes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./nosotros.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/nosotros", dict.nosotros.meta.title, dict.nosotros.meta.description);
}

const DOT = { ok: styles.dotOk, partial: styles.dotPartial, none: styles.dotNo };

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.nosotros;
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
            secondaryLabel={t.hero.secondary}
            secondaryHref="/producto"
          />
        }
        aside={<SpaceSwitcher v={v} />}
      />

      {/* ---------------------------------------------------------- la tesis */}
      <section className="section section-ink">
        <div className="container container-narrow">
          <div className="stack" data-reveal>
            <p className="eyebrow">{t.thesis.eyebrow}</p>
            <h2 className="h2">
              <Headline text={t.thesis.title} />
            </h2>
            <p className="lead">{t.thesis.p1}</p>
            <p className="lead">{t.thesis.p2}</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- principios */}
      <section className="section">
        <div className="container container-wide">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.principles.eyebrow}</p>
            <h2 className="h2">
              <Headline text={t.principles.title} />
            </h2>
          </div>
          <div className={styles.principles} data-reveal>
            {t.principles.items.map((p, i) => (
              <article key={p.title} className={styles.principle}>
                <p className={styles.principleNum}>0{i + 1}</p>
                <h3 className="h3">{p.title}</h3>
                <p className="muted" style={{ fontSize: 14.5 }}>
                  {p.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- estado */}
      <section className="section section-paper2" id="estado">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.status.eyebrow}
            title={t.status.title}
            lead={t.status.lead}
          />

          <div className={styles.status} data-reveal>
            {t.status.groups.map((group) => (
              <div key={group.label} className={styles.statusGroup}>
                <p className={styles.statusHead}>
                  <span
                    className={[styles.dot, DOT[group.tone as keyof typeof DOT]].join(" ")}
                    aria-hidden
                  />
                  {group.label}
                </p>
                {group.rows.map((row) => (
                  <div key={row.name} className={styles.statusRow}>
                    <span className={styles.statusName}>{row.name}</span>
                    <span>{row.desc}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- piloto */}
      <section className="section">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.pilot.eyebrow}
            title={t.pilot.title}
            lead={t.pilot.lead}
          />

          <div className="grid grid-4" data-reveal>
            {t.pilot.questions.map((q, i) => (
              <article key={q} className="card">
                <p className="mono" style={{ color: "var(--brand)", marginBottom: 10 }}>
                  0{i + 1}
                </p>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-2)" }}>
                  {q}
                </p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 32 }} data-reveal>
            <StatBand stats={t.pilot.stats} />
          </div>
        </div>
      </section>

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
        primaryLabel={dict.common.writeUs}
        primaryHref="/contacto"
        secondaryLabel={dict.common.seePricing}
        secondaryHref="/precios"
      />
    </>
  );
}
