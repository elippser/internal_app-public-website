import { IBM_Plex_Mono } from "next/font/google";
import LegalFooter from "@/components/legal/LegalFooter";
import LegalHeader from "@/components/legal/LegalHeader";
import styles from "@/components/legal/legal.module.css";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";

/**
 * El centro legal tiene su propio chrome, de la cabecera al pie.
 *
 * El layout raíz monta la cabecera y el pie del sitio en todas las rutas; acá
 * se apagan (`body:has([data-page="legal"])` en globals.css, el mismo recurso
 * que usa el video) y en su lugar van los de la marca corporativa. No es una
 * variante del sitio: es otra voz, y tiene que notarse antes de leer una
 * sola cláusula.
 *
 * La monoespaciada es sólo de estas páginas: versión, vigencia, huella y
 * números de cláusula. Va por `next/font`, servida desde el propio dominio.
 */
const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-legal-mono",
});

export default async function LegalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const { legalCenter: t } = await getDictionary(lang);

  return (
    <div data-page="legal" className={`${styles.root} ${mono.variable}`}>
      <LegalHeader
        locale={lang}
        t={{ area: t.area, home: t.home, language: t.language, nav: t.nav }}
      />
      <div className={styles.page}>{children}</div>
      <LegalFooter locale={lang} t={t} />
    </div>
  );
}
