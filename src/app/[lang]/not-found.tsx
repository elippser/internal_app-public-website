"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "@/components/site/Sections";
import { PRODUCT_GROUPS, PRODUCT_HREFS, type ProductKey } from "@/components/site/nav";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";

/**
 * El 404.
 *
 * Es lo único del sitio que NO puede leer el diccionario del servidor: un
 * `not-found` de Next no recibe `params`, así que no sabe en qué idioma está.
 * Por eso es un componente cliente que saca el idioma del pathname y trae sus
 * seis strings de acá abajo — copiarlas es más barato que empaquetar los cinco
 * diccionarios enteros para una página que casi nadie ve.
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
    groups: Record<"operation" | "growth" | "newLayer", string>;
  }
> = {
  es: {
    eyebrow: "Error 404",
    title: "Esta página ",
    em: "no existe",
    lead: "Puede que la hayamos movido o que el enlace esté mal escrito. Estos son los lugares a los que suele querer ir la gente.",
    home: "Volver al inicio",
    contact: "Escribinos",
    groups: { operation: "La operación", growth: "El crecimiento", newLayer: "La capa nueva" },
    products: {
      reservas: { title: "Reservas y habitaciones", desc: "Panel del día, calendario, tarifas e inventario." },
      motor: { title: "Motor de reservas", desc: "El buscador y el checkout que ve el huésped." },
      revenue: { title: "Revenue · RMS", desc: "Pace, competencia, eventos y recomendaciones." },
      sitios: { title: "Sitio web y marca", desc: "Builder, LinkHub, galerías y reseñas." },
      ia: { title: "Bookfer IA", desc: "Un asistente que opera el sistema con vos." },
      agentes: { title: "Alojamiento agéntico", desc: "Reservable por un modelo de lenguaje." },
    },
  },
  en: {
    eyebrow: "Error 404",
    title: "This page ",
    em: "does not exist",
    lead: "We may have moved it, or the link may be misspelled. These are the places people usually want to reach.",
    home: "Back to home",
    contact: "Write to us",
    groups: { operation: "Operations", growth: "Growth", newLayer: "The new layer" },
    products: {
      reservas: { title: "Bookings and rooms", desc: "Daily board, calendar, rates and inventory." },
      motor: { title: "Booking engine", desc: "The search and checkout your guest sees." },
      revenue: { title: "Revenue · RMS", desc: "Pace, comp set, events and recommendations." },
      sitios: { title: "Website and brand", desc: "Builder, LinkHub, galleries and reviews." },
      ia: { title: "Bookfer AI", desc: "An assistant that operates the system with you." },
      agentes: { title: "Agentic property", desc: "Bookable by a language model." },
    },
  },
  pt: {
    eyebrow: "Erro 404",
    title: "Esta página ",
    em: "não existe",
    lead: "Pode ser que a tenhamos movido ou que o link esteja errado. Estes são os lugares para onde as pessoas costumam ir.",
    home: "Voltar ao início",
    contact: "Fale com a gente",
    groups: { operation: "A operação", growth: "O crescimento", newLayer: "A camada nova" },
    products: {
      reservas: { title: "Reservas e quartos", desc: "Painel do dia, calendário, tarifas e inventário." },
      motor: { title: "Motor de reservas", desc: "A busca e o checkout que o hóspede vê." },
      revenue: { title: "Revenue · RMS", desc: "Pace, concorrência, eventos e recomendações." },
      sitios: { title: "Site e marca", desc: "Builder, LinkHub, galerias e avaliações." },
      ia: { title: "Bookfer IA", desc: "Um assistente que opera o sistema com você." },
      agentes: { title: "Hospedagem agêntica", desc: "Reservável por um modelo de linguagem." },
    },
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page ",
    em: "n’existe pas",
    lead: "Nous l’avons peut-être déplacée, ou le lien est mal écrit. Voici les endroits où les gens vont le plus souvent.",
    home: "Retour à l’accueil",
    contact: "Écrivez-nous",
    groups: { operation: "L’exploitation", growth: "La croissance", newLayer: "La nouvelle couche" },
    products: {
      reservas: { title: "Réservations et chambres", desc: "Tableau du jour, calendrier, tarifs et inventaire." },
      motor: { title: "Moteur de réservation", desc: "La recherche et le paiement que voit le client." },
      revenue: { title: "Revenue · RMS", desc: "Pace, concurrence, événements et recommandations." },
      sitios: { title: "Site web et marque", desc: "Builder, LinkHub, galeries et avis." },
      ia: { title: "Bookfer IA", desc: "Un assistant qui opère le système avec vous." },
      agentes: { title: "Hébergement agentique", desc: "Réservable par un modèle de langage." },
    },
  },
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite ",
    em: "gibt es nicht",
    lead: "Vielleicht haben wir sie verschoben, oder der Link ist falsch geschrieben. Das sind die Stellen, zu denen die meisten wollen.",
    home: "Zurück zur Startseite",
    contact: "Schreiben Sie uns",
    groups: { operation: "Der Betrieb", growth: "Das Wachstum", newLayer: "Die neue Ebene" },
    products: {
      reservas: { title: "Buchungen und Zimmer", desc: "Tagesübersicht, Kalender, Raten und Inventar." },
      motor: { title: "Buchungsmaschine", desc: "Die Suche und der Checkout, die der Gast sieht." },
      revenue: { title: "Revenue · RMS", desc: "Pace, Mitbewerber, Events und Empfehlungen." },
      sitios: { title: "Website und Marke", desc: "Builder, LinkHub, Galerien und Bewertungen." },
      ia: { title: "Bookfer KI", desc: "Ein Assistent, der das System mit Ihnen bedient." },
      agentes: { title: "Agentische Unterkunft", desc: "Buchbar durch ein Sprachmodell." },
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
          {PRODUCT_GROUPS.flatMap((group) => group.items).map((key) => (
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
