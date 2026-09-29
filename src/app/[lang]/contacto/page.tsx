import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Headline } from "@/components/site/RichText";
import { ArrowRight, CheckList } from "@/components/site/Sections";
import SamePageLink from "@/components/site/SamePageLink";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import { contact } from "@/lib/siteConfig";
import styles from "./contacto.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/contacto", dict.contacto.meta.title, dict.contacto.meta.description);
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.contacto;

  return (
    <>
      <section className={styles.wrap}>
        <div className="container container-wide">
          <div className={styles.grid}>
            {/* ------------------------------------------------------ copia */}
            <div className={styles.aside}>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1 className="h1" style={{ margin: "16px 0 18px" }}>
                <Headline text={t.title} />
              </h1>
              <p className="lead" style={{ marginBottom: 26 }}>
                {t.lead}
              </p>

              <CheckList items={t.checks} locale={lang} />

              <div className={styles.direct}>
                <p className={styles.directLabel}>{t.directLabel}</p>
                <a className={styles.directLink} href={`mailto:${contact.email}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m3.5 7.5 8.5 6 8.5-6" />
                  </svg>
                  {contact.email}
                </a>
              </div>
            </div>

            {/* ---------------------------------------------------- el form */}
            <div className={styles.card}>
              <LeadForm locale={lang} t={dict.leadForm} />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- atajo --- */}
      <section className="section section-tight">
        <div className="container container-narrow">
          <div className={styles.shortcut} data-reveal>
            <div>
              <h2 className="h3" style={{ marginBottom: 8 }}>
                {t.shortcutTitle}
              </h2>
              <p className="muted" style={{ fontSize: 14.5 }}>
                {t.shortcutText}
              </p>
            </div>
            <SamePageLink className="btn btn-primary btn-lg">
              {dict.common.startFree}
              <ArrowRight />
            </SamePageLink>
          </div>
        </div>
      </section>
    </>
  );
}
