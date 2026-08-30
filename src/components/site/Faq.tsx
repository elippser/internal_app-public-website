import type { Locale } from "@/i18n/config";
import { renderRich } from "./RichText";
import styles from "./Faq.module.css";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Acordeón de preguntas frecuentes.
 *
 * Va con `<details>` nativo: abre, cierra, se imprime bien, funciona sin
 * JavaScript y el buscador del navegador (Ctrl+F) encuentra el texto adentro,
 * cosa que no pasa con un acordeón hecho a mano que desmonta el contenido.
 *
 * Además emite `FAQPage` en JSON-LD. Es la sección que más chances tiene de
 * salir citada en un resultado generativo, así que vale la pena que esté
 * declarada — el mismo argumento que le hacemos al hotelero con el GEO. Para
 * el schema se limpia la micro-sintaxis: un `**` en el JSON-LD sería ruido.
 */
export default function Faq({
  items,
  title,
  locale,
}: {
  items: readonly FaqItem[];
  title: string;
  locale: Locale;
}) {
  const plain = (text: string) =>
    text
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  return (
    <section className="section" id="faq">
      <div className="container container-narrow">
        <h2 className="h2" style={{ marginBottom: 28 }}>
          {title}
        </h2>
        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.summary}>
                <span>{item.q}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="12" y1="5" x2="12" y2="19" className={styles.plusBar} />
                </svg>
              </summary>
              <div className={styles.answer}>
                <p>{renderRich(item.a, locale)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        // El contenido es nuestro y no viene de un input: no hay superficie de
        // inyección. `JSON.stringify` escapa las comillas.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: locale,
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: plain(item.a) },
            })),
          }),
        }}
      />
    </section>
  );
}
