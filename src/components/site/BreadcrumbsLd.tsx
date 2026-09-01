import type { Locale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/routes";
import { siteConfig, siteUrl } from "@/lib/siteConfig";

/**
 * El `BreadcrumbList` de una página interior, sólo como JSON-LD.
 *
 * Las páginas de producto viven dos niveles adentro (`/producto/motor`) y sin
 * esto un motor no tiene forma estructurada de saber que "El motor" cuelga de
 * "La plataforma" que cuelga de la portada. No hay migas visibles en el
 * diseño y no hacen falta: el dato es para las máquinas.
 *
 * El componente antepone la portada solo; cada página pasa el resto del
 * camino con los títulos de SU diccionario y los hrefs internos — acá se
 * traducen al slug del idioma con el mismo `alternatesFor` de la metadata,
 * así el breadcrumb y el canonical no pueden contradecirse.
 */
export default function BreadcrumbsLd({
  lang,
  trail,
}: {
  lang: Locale;
  trail: { name: string; href: string }[];
}) {
  const full = [{ name: siteConfig.name, href: "/" }, ...trail];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: full.map((step, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: step.name,
            item: new URL(alternatesFor(lang, step.href).canonical, siteUrl).toString(),
          })),
        }),
      }}
    />
  );
}
