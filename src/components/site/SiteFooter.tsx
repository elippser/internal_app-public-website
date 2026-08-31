import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/dict/es";
import { contact } from "@/lib/siteConfig";
import LangSwitcher from "./LangSwitcher";
import Logo from "./Logo";
import {
  COMPANY_LINKS,
  LEGAL_LINKS,
  PRODUCT_HREFS,
  PRODUCT_KEYS,
  SOLUTION_KEYS,
} from "./nav";
import styles from "./SiteFooter.module.css";

/**
 * Pie del sitio. Es un componente de servidor salvo por el selector de idioma,
 * que se hidrata solo: no hay motivo para mandar el resto al navegador.
 */
export default function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const path = (href: string) => localePath(locale, href);

  return (
    <footer className={styles.footer}>
      <div className="container container-wide">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo tone="paper" />
            <p className={styles.claim}>{dict.footer.claim}</p>
            <div className={styles.social}>
              <a
                className={styles.socialLink}
                href={contact.instagram}
                aria-label={dict.footer.social.instagram}
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href={contact.linkedin}
                aria-label={dict.footer.social.linkedin}
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.6 4.76 5.98V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4z" />
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href={`mailto:${contact.email}`}
                aria-label={dict.footer.social.email}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m3.5 7.5 8.5 6 8.5-6" />
                </svg>
              </a>
            </div>
          </div>

          <nav className={styles.cols} aria-label={dict.footer.nav}>
            <div>
              <p className={styles.colLabel}>{dict.footer.columns.product}</p>
              <div className={styles.colList}>
                <Link href={path("/producto")} className={styles.colLink}>
                  {dict.nav.platform}
                </Link>
                {PRODUCT_KEYS.map((key) => (
                  <Link key={key} href={path(PRODUCT_HREFS[key])} className={styles.colLink}>
                    {dict.nav.products[key].title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.colLabel}>{dict.footer.columns.solutions}</p>
              <div className={styles.colList}>
                {SOLUTION_KEYS.map((key) => (
                  <Link
                    key={key}
                    href={path(`/soluciones#${key}`)}
                    className={styles.colLink}
                  >
                    {dict.footer.solutions[key]}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.colLabel}>{dict.footer.columns.company}</p>
              <div className={styles.colList}>
                {COMPANY_LINKS.map((item) => (
                  <Link key={item.href} href={path(item.href)} className={styles.colLink}>
                    {dict.footer.company[item.key]}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.colLabel}>{dict.footer.columns.legal}</p>
              <div className={styles.colList}>
                {LEGAL_LINKS.map((item) => (
                  <Link key={item.href} href={path(item.href)} className={styles.colLink}>
                    {dict.footer.legal[item.key]}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} bookfer · {dict.footer.madeIn}
          </span>
          <div className={styles.bottomRight}>
            <a className={styles.agentNote} href="/llms.txt">
              <span aria-hidden />
              {dict.footer.agentNote}
            </a>
            <LangSwitcher locale={locale} label={dict.nav.language} tone="ink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
