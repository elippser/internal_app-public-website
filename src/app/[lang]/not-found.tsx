"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "@/components/site/Sections";
import { PRODUCT_HREFS, PRODUCT_KEYS, type ProductKey } from "@/components/site/nav";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";

/**
 * El 404.
 *
 * Es lo único del sitio que NO puede leer el diccionario del servidor: un
 * `not-found` de Next no recibe `params`, así que no sabe en qué idioma está.
 * Por eso es un componente cliente que saca el idioma del pathname y trae sus
 * strings de acá abajo — copiarlas es más barato que empaquetar los cinco
 * diccionarios enteros para una página que casi nadie ve.
 *
 * Se monta desde `[lang]/[...rest]/page.tsx`, que llama a `notFound()` para
 * cualquier URL desconocida; sin esa ruta comodín, Next servía su 404
 * genérico en inglés y sin marca.
 */

const STRINGS: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    em: string;
    lead: string;
    home: string;
    contact: string;
    products: Record<ProductKey, { title: string; desc: string }>;
  }
> = {
  es: {
    eyebrow: "Error 404",
    title: "Esta página ",
    em: "no existe",
    lead: "Puede que la hayamos movido o que el enlace esté mal escrito. Estos son los lugares a los que suele querer ir la gente.",
    home: "Volver al inicio",
    contact: "Escríbenos",
    products: {
      ia: { title: "Roombir IA", desc: "Toda la gestión, en una conversación." },
      pms: { title: "PMS", desc: "Propiedades, habitaciones, reservas y el motor." },
      informes: { title: "Informes", desc: "Ocupación, ingresos, cancelaciones y canales." },
      revenue: { title: "Revenue", desc: "El precio de cada fecha, y por qué." },
      marketing: { title: "Marketing", desc: "Web con asistente, marca, reseñas y LinkHub." },
    },
  },
  en: {
    eyebrow: "Error 404",
    title: "This page ",
    em: "does not exist",
    lead: "We may have moved it, or the link may be misspelled. These are the places people usually want to reach.",
    home: "Back to home",
    contact: "Write to us",
    products: {
      ia: { title: "Roombir AI", desc: "Your whole property, in one conversation." },
      pms: { title: "PMS", desc: "Properties, rooms, bookings and the engine." },
      informes: { title: "Reports", desc: "Occupancy, revenue, cancellations and channels." },
      revenue: { title: "Revenue", desc: "The price for each date, and why." },
      marketing: { title: "Marketing", desc: "Website with an assistant, brand, reviews and LinkHub." },
    },
  },
  pt: {
    eyebrow: "Erro 404",
    title: "Esta página ",
    em: "não existe",
    lead: "Pode ser que a tenhamos movido ou que o link esteja errado. Estes são os lugares para onde as pessoas costumam ir.",
    home: "Voltar ao início",
    contact: "Fale com a gente",
    products: {
      ia: { title: "Roombir IA", desc: "Toda a gestão, em uma conversa." },
      pms: { title: "PMS", desc: "Propriedades, quartos, reservas e o motor." },
      informes: { title: "Relatórios", desc: "Ocupação, receita, cancelamentos e canais." },
      revenue: { title: "Revenue", desc: "O preço de cada data, e por quê." },
      marketing: { title: "Marketing", desc: "Site com assistente, marca, avaliações e LinkHub." },
    },
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page ",
    em: "n’existe pas",
    lead: "Nous l’avons peut-être déplacée, ou le lien est mal écrit. Voici les endroits où les gens vont le plus souvent.",
    home: "Retour à l’accueil",
    contact: "Écrivez-nous",
    products: {
      ia: { title: "Roombir IA", desc: "Toute la gestion, en une conversation." },
      pms: { title: "PMS", desc: "Établissements, chambres, réservations et le moteur." },
      informes: { title: "Rapports", desc: "Occupation, revenus, annulations et canaux." },
      revenue: { title: "Revenue", desc: "Le prix de chaque date, et pourquoi." },
      marketing: { title: "Marketing", desc: "Site avec assistant, marque, avis et LinkHub." },
    },
  },
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite ",
    em: "gibt es nicht",
    lead: "Vielleicht haben wir sie verschoben, oder der Link ist falsch geschrieben. Das sind die Stellen, zu denen die meisten wollen.",
    home: "Zurück zur Startseite",
    contact: "Schreiben Sie uns",
    products: {
      ia: { title: "Roombir KI", desc: "Ihre ganze Unterkunft, in einem Gespräch." },
      pms: { title: "PMS", desc: "Unterkünfte, Zimmer, Buchungen und die Maschine." },
      informes: { title: "Berichte", desc: "Belegung, Umsatz, Stornierungen und Kanäle." },
      revenue: { title: "Revenue", desc: "Der Preis für jedes Datum, und warum." },
      marketing: { title: "Marketing", desc: "Website mit Assistent, Marke, Bewertungen und LinkHub." },
    },
  },
};

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const first = pathname.split("/")[1] ?? "";
  const locale: Locale = isLocale(first) ? first : DEFAULT_LOCALE;
  const t = STRINGS[locale];

  return (
    <section className="section" style={{ paddingTop: "clamp(140px, 16vw, 200px)" }}>
      <div className="container container-narrow">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="h1" style={{ margin: "16px 0 16px" }}>
          {t.title}
          <em>{t.em}</em>.
        </h1>
        <p className="lead" style={{ marginBottom: 30 }}>
          {t.lead}
        </p>

        <div className="grid grid-2">
          {PRODUCT_KEYS.map((key) => (
            <Link
              key={key}
              href={localePath(locale, PRODUCT_HREFS[key])}
              className="card card-hover"
            >
              <p className="h3" style={{ marginBottom: 6 }}>
                {t.products[key].title}
              </p>
              <p className="small">{t.products[key].desc}</p>
            </Link>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 30 }}>
          <Link className="btn btn-primary" href={localePath(locale, "/")}>
            {t.home}
            <ArrowRight />
          </Link>
          <Link className="btn btn-ghost" href={localePath(locale, "/contacto")}>
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
