"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_NAMES, LOCALE_SHORT, isLocale, type Locale } from "@/i18n/config";
import type { LegalCenterDict } from "@/i18n/dict/legal/es";
import { publicPath, routeKeyOf } from "@/i18n/routes";
import CorpLogo from "./CorpLogo";
import { LEGAL_DOCS } from "./docs";
import styles from "./legal.module.css";

/**
 * La cabecera del centro legal. Reemplaza a la del sitio en `/legal/*`: sin
 * menú de producto, sin botón de alta. La marca, los documentos y el idioma.
 *
 * Es cliente sólo por `usePathname`: de ahí salen el documento activo y el
 * enlace de cada idioma, que lleva al MISMO documento con el slug de ese
 * idioma (`/es/legal/terminos` → `/en/legal/terms`).
 */
export default function LegalHeader({
  locale,
  t,
}: {
  locale: Locale;
  t: Pick<LegalCenterDict, "area" | "home" | "language" | "nav">;
}) {
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/");
  const rest = isLocale(parts[1] ?? "") ? "/" + parts.slice(2).join("/") : pathname;
  const current = routeKeyOf(rest);

  const remember = (next: Locale) => {
    // La misma cookie que escribe el selector del sitio y lee el middleware.
    document.cookie = `roombir_lang=${next}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.wrap} ${styles.headerInner}`}>
        <Link href={`/${locale}`} className={styles.brand} aria-label={t.home}>
          <CorpLogo size={20} />
        </Link>
        <span className={styles.area}>{t.area}</span>

        <nav className={styles.nav} aria-label={t.nav.label}>
          {LEGAL_DOCS.map((doc) => (
            <Link
              key={doc.key}
              href={publicPath(locale, doc.route)}
              className={styles.navLink}
              aria-current={current === doc.route ? "page" : undefined}
            >
              {t.nav[doc.key]}
            </Link>
          ))}
        </nav>

        <div className={styles.langs} role="group" aria-label={t.language}>
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={current ? publicPath(l, current) : `/${l}`}
              hrefLang={l}
              className={styles.lang}
              aria-current={l === locale ? "true" : undefined}
              aria-label={LOCALE_NAMES[l]}
              onClick={() => remember(l)}
            >
              {LOCALE_SHORT[l]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
