import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { Headline } from "@/components/site/RichText";
import { ArrowRight, CheckList } from "@/components/site/Sections";
import { readLocale } from "@/i18n/params";
import { alternatesFor } from "@/i18n/routes";
import { getDictionary } from "@/i18n/get-dictionary";
import { contact, registerUrl, whatsappUrlFor } from "@/lib/siteConfig";
import styles from "./contacto.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    title: dict.contacto.meta.title,
    description: dict.contacto.meta.description,
    alternates: alternatesFor(lang, "/contacto"),
  };
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
                <a
                  className={styles.directLink}
                  href={whatsappUrlFor(t.whatsappMessage)}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.85 9.85 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.05c-.25.7-1.44 1.33-2 1.42-.53.08-1.2.11-1.94-.12-.45-.14-1.02-.33-1.76-.65-3.1-1.34-5.12-4.46-5.28-4.67-.15-.2-1.26-1.67-1.26-3.19 0-1.52.8-2.27 1.08-2.58.28-.31.61-.39.82-.39l.59.01c.19 0 .44-.07.69.53.25.6.86 2.12.94 2.27.08.16.13.34.02.54-.1.2-.16.32-.31.5-.16.18-.33.4-.47.54-.16.15-.32.32-.14.63.19.31.83 1.36 1.77 2.2 1.22 1.08 2.24 1.42 2.55 1.58.31.15.5.13.68-.08.19-.2.79-.92 1-1.24.2-.31.41-.26.68-.16.28.1 1.77.84 2.08.99.3.16.5.23.58.36.07.12.07.72-.18 1.42Z" />
                  </svg>
                  WhatsApp
                </a>
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
              <LeadForm locale={lang} dict={dict} />
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
            <a className="btn btn-primary btn-lg" href={registerUrl}>
              {dict.common.startFree}
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
