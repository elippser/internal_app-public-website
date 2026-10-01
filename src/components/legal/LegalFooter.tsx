import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { LegalCenterDict } from "@/i18n/dict/legal/es";
import { publicPath } from "@/i18n/routes";
import { contact } from "@/lib/siteConfig";
import CorpLogo from "./CorpLogo";
import { LEGAL_DOCS } from "./docs";
import styles from "./legal.module.css";

/**
 * El pie del centro legal: la marca, los cuatro documentos, el contacto y la
 * leyenda de confidencialidad (roombir-legal-spec-software.md, contenido F.2).
 */
export default function LegalFooter({ locale, t }: { locale: Locale; t: LegalCenterDict }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <CorpLogo tone="paper" size={26} />
          </div>

          <nav aria-label={t.nav.label}>
            <p className={styles.footerLabel}>{t.footer.documents}</p>
            <ul className={styles.footerList}>
              {LEGAL_DOCS.map((doc) => (
                <li key={doc.key}>
                  <Link href={publicPath(locale, doc.route)} className={styles.footerLink}>
                    {t.nav[doc.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={styles.footerLabel}>{t.footer.contact}</p>
            <ul className={styles.footerList}>
              <li>
                <a href={`mailto:${contact.email}`} className={styles.footerLink}>
                  {contact.email}
                </a>
              </li>
              <li>
                <Link href={`/${locale}`} className={styles.footerLink}>
                  {t.back}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.legend}>{t.footer.legend.replace("{year}", String(year))}</p>
      </div>
    </footer>
  );
}
