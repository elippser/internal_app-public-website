/** Intelligence: deutsche Fassung (siehe es.ts). */
import type { IntelDict } from "./es";

export const intelDe: IntelDict = {
  card: {
    label: "Intelligence",
    title: "Alles, was Ihre Nachfrage bewegt, *an einem Ort*.",
    body: "Events, Feiertage, Flüge und mehr, aus verlässlichen Quellen.",
    more: "Intelligence entdecken",
  },
  page: {
    meta: {
      title: "Intelligence: die Daten, die Ihre Nachfrage bewegen, an einem Ort",
      description:
        "Der Intelligence-Dienst hinter Roombir KI: Events, Feiertage, Flüge, Wetter, Wechselkurse, Sicherheit und mehr, aus offiziellen Quellen, damit Sie Preise und Kampagnen mit dem vollen Kontext festlegen.",
    },
    hero: {
      eyebrow: "Intelligence",
      title: "Wofür ein Revenue-Team Stunden braucht, *ist hier schon da*.",
      lead: "Intelligence bündelt an einem Ort, was die Nachfrage an Ihrem Reiseziel bewegt: Events, Feiertage der Länder, aus denen Ihre Gäste kommen, Flüge, Wetter, Wechselkurse, Sicherheit und vieles mehr. Aus verlässlichen Quellen, aktuell und mit sichtbarer Quellenangabe. Roombir KI nutzt diese Daten, damit jede Preis- und Vertriebsentscheidung mit dem vollen Kontext getroffen wird.",
      imageAlt: "Die Erde bei Nacht mit den Routen, die sie verbinden",
    },
    problem: {
      eyebrow: "Das Problem",
      title: "Die Informationen gibt es. *Sie sind nur verstreut.*",
      lead: "Alles, was erklärt, warum ein Datum ausgebucht ist oder einbricht, steht irgendwo im Netz: im Kalender eines anderen Landes, im Programm eines Messegeländes, in einer Warnung eines Außenministeriums. Das von Hand zusammenzutragen dauert Stunden, passiert einmal und ist schnell veraltet. So wird im Blindflug entschieden.",
      headOld: "Von Hand recherchiert",
      headNew: "Mit Intelligence",
      rows: [
        {
          time: "Events",
          old: "Die Programme von Stadien, Theatern, Messegeländen und Ticketanbietern durchsehen, Stadt für Stadt.",
          now: "Events, Kongresse und Messen in der Nähe Ihrer Unterkunft, mit Datum und Gewichtung, **in einer Liste**.",
        },
        {
          time: "Feiertage",
          old: "Die Feiertage und Schulferien jedes Landes, aus dem Ihre Gäste kommen, einzeln heraussuchen.",
          now: "Die langen Wochenenden **Ihrer Quellmärkte**, mit bereits berechneten Brückentagen.",
        },
        {
          time: "Reisende",
          old: "Raten, ob sich die Reise für ausländische Gäste beim heutigen Wechselkurs lohnt.",
          now: "Ob Sie für Ihre Gäste **teurer oder günstiger werden**, mit dem realen und nicht dem nominalen Wechselkurs.",
        },
        {
          time: "Risiken",
          old: "Von einer Reisewarnung oder einer Flughafenschließung erst erfahren, wenn die Stornierungen schon da sind.",
          now: "Die Warnungen der Außenministerien und die Gefahren, die **Ihren Flughafen** betreffen, frühzeitig.",
        },
      ],
    },
    areas: {
      eyebrow: "Was es bündelt",
      title: "Alles, was Ihre Nachfrage erklärt, *Bereich für Bereich*.",
      lead: "Jeder Bereich beantwortet eine konkrete Frage zu Ihrem Reiseziel und zeigt, woher die Daten stammen.",
      items: [
        {
          title: "Events und Veranstaltungen",
          desc: "Konzerte, Theaterstücke, Festivals und Spiele in Ihrer Nähe sowie die großen Termine, die schon Jahre im Voraus feststehen.",
        },
        {
          title: "Kongresse und Messen",
          desc: "Die Geschäftsnachfrage: unter der Woche, mit längeren Aufenthalten und weniger preissensibel.",
        },
        {
          title: "Kalender und Feiertage",
          desc: "Feiertage, lange Wochenenden, Schulferien und Handelstermine, bei Ihnen und in den Ländern, aus denen Ihre Gäste kommen.",
        },
        {
          title: "Wetter und Saisons",
          desc: "Wie das Jahr an Ihrem Reiseziel verläuft: Saisons, beste Monate, saisonale Risiken und die Vorhersage für die nächsten Tage.",
        },
        {
          title: "Flugverkehr",
          desc: "Welche Flughäfen Ihnen Gäste bringen, welche Airlines und Routen ankommen und wie man auf dem Landweg anreist.",
        },
        {
          title: "Wechselkurs und Wirtschaft",
          desc: "Ob Ihr Reiseziel für jeden Quellmarkt günstiger oder teurer wird, mit Inflation und realem Wechselkurs.",
        },
        {
          title: "Einreisebestimmungen",
          desc: "Wer ohne vorherigen Antrag einreisen kann. Günstig, mit Flugverbindung und ohne Visum: die Kombination, die von selbst konvertiert.",
        },
        {
          title: "Sicherheit",
          desc: "Die Reisewarnungen der Regierungen Ihrer Märkte und gemeldete Krankheitsausbrüche, wobei Wahrgenommenes von Gemessenem getrennt wird.",
        },
        {
          title: "Naturgefahren",
          desc: "Erdbeben, Stürme, Vulkane und Hitzewellen in Ihrer Nähe oder solche, die den Flughafen schließen, über den Ihre Gäste anreisen.",
        },
        {
          title: "Ihr Wettbewerb",
          desc: "Wie viele Unterkünfte es in Ihrer Umgebung gibt, welcher Art, und wie die Kurzzeitvermietung in Ihrer Stadt geregelt ist.",
        },
        {
          title: "Interesse an Ihrem Reiseziel",
          desc: "Wie viel Aufmerksamkeit Ihr Reiseziel in jeder Sprache bekommt. Die Aufmerksamkeit kommt Wochen vor der Buchung.",
        },
        {
          title: "Nachfrage jenseits des Tourismus",
          desc: "Universitäten, Krankenhäuser, Industrie, Ernten und Schichtwechsel im Bergbau: das, was außerhalb der Saison füllt.",
        },
      ],
    },
    trust: {
      eyebrow: "Verlässlich",
      title: "Daten ohne Quelle *sind keine Daten*.",
      lead: "Intelligence stützt sich auf offizielle Stellen und anerkannte öffentliche Quellen und füllt niemals auf, was es nicht weiß.",
      items: [
        "Jede Angabe kommt **mit Quelle und Datum**, damit Sie wissen, woher sie stammt und wie aktuell sie ist.",
        "Offizielle Stellen und anerkannte Quellen: Wetterdienste, Außenministerien, Zentralbanken, der IWF und die Weltbank.",
        "Wenn eine Quelle nicht antwortet, wird das angezeigt. **Wo nichts bekannt ist, steht nie eine Null.**",
        "Es unterscheidet zwischen dem, was sicher bekannt ist, und dem, was nur beobachtet wurde: Ein Flug, der nicht gesehen wurde, ist kein Flug, der nicht existiert.",
      ],
    },
    ia: {
      eyebrow: "Mit Roombir KI",
      title: "Sie fragen, und die Antwort *kommt gleich mit Kontext*.",
      lead: "Roombir KI greift auf Intelligence zurück, wenn Sie nach Ihrem Reiseziel fragen oder mehr Buchungen wünschen, verknüpft die Daten mit Ihrer Auslastung und Ihren Raten und schlägt Ihnen vor, was zu tun ist.",
      items: [
        "Sie fragen, was im März an Ihrem Reiseziel los ist, und erhalten den Überblick, mit der Quelle zu jedem Punkt.",
        "Sie wünschen sich mehr Buchungen, und der vorgeschlagene Plan berücksichtigt bereits Events, Feiertage und Märkte.",
        "Was vorgeschlagen wird, wird direkt im System umgesetzt: eine Rate, eine Promotion, eine Kampagne.",
      ],
      link: "Roombir KI ansehen",
    },
    decisions: {
      eyebrow: "Bessere Entscheidungen",
      title: "Jede Nacht, verkauft *zum richtigen Preis*.",
      lead: "Geld geht an den Tagen verloren, die zu billig verkauft werden, weil niemand gesehen hat, was kommt, und an den Tagen, die leer bleiben, weil niemand aktiv danach gesucht hat. Intelligence sorgt dafür, dass Ihnen beides nicht passiert.",
      items: [
        {
          title: "Rechtzeitig erhöhen",
          desc: "Sie sehen den Kongress, das Konzert oder das lange Wochenende Ihres wichtigsten Quellmarkts, bevor die Zimmer ausgebucht sind, nicht danach.",
        },
        {
          title: "Keine Nächte verschenken",
          desc: "Sie wissen, wann die Nachfrage von allein kommt, und senken den Preis nicht an Tagen, die sich ohnehin gefüllt hätten.",
        },
        {
          title: "Den richtigen Markt ansprechen",
          desc: "Sie richten Ihre Kampagnen auf das Land aus, für das Sie günstiger geworden sind, das eine Flugverbindung hat und dessen Bürger ohne Visum einreisen können.",
        },
        {
          title: "Vorausschauend handeln",
          desc: "Eine Reisewarnung, ein geschlossener Flughafen oder eine Hitzewelle werden sichtbar, bevor die Stornierungen eintreffen.",
        },
      ],
    },
    faq: [
      {
        q: "Was ist Intelligence?",
        a: "Intelligence ist der Daten- und Analysedienst von Roombir. Er bündelt aus verlässlichen Quellen, was die Nachfrage an einem Reiseziel bewegt – Events, Feiertage, Flüge, Wetter, Wechselkurse, Sicherheit und mehr – und stellt alles an einem Ort bereit. Roombir KI nutzt ihn, um Ihnen zu antworten und Ihnen Vorschläge zu machen.",
      },
      {
        q: "Woher stammen die Daten?",
        a: "Von offiziellen Stellen und anerkannten öffentlichen Quellen: Wetterdiensten, offiziellen Kalendern, Außenministerien, Zentralbanken, dem IWF, der Weltbank, Ticketanbietern und Veranstaltungskalendern von Spielstätten, unter anderem. Jede Angabe wird mit Quelle und Datum angezeigt.",
      },
      {
        q: "Muss ich etwas eingeben?",
        a: "Nein. Intelligence geht vom Standort Ihrer Unterkunft aus. Was jedoch hilft: Ihre Buchungen und Raten in Roombir zu haben, denn so kann Roombir KI das, was draußen passiert, mit dem verknüpfen, was in Ihrem Haus passiert.",
      },
      {
        q: "Was passiert, wenn eine Quelle die Angabe nicht hat?",
        a: "Das wird Ihnen angezeigt. Intelligence erfindet nichts und füllt nichts auf: Wenn eine Quelle nicht geantwortet hat oder diese Angabe für Ihr Reiseziel nicht veröffentlicht, erscheint sie als unbekannt, nie als Null.",
      },
    ],
    cta: {
      title: "Entscheiden Sie mit *dem vollen Kontext*.",
      lead: "Sie legen Ihre Unterkunft an, und Roombir KI nutzt Intelligence vom ersten Tag an.",
      steps: [
        "Sie legen Ihre Unterkunft mit ihrem Standort an.",
        "Sie fragen Roombir KI nach Ihrem Reiseziel.",
        "Sie legen Preise und Kampagnen mit den Daten vor Augen fest.",
      ],
    },
  },
};
