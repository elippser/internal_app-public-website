/** Rechtliches (DE): Übersetzung von es.ts. Gleiche Schlüssel und Struktur. */
import type { LegalCenterDict } from "./es";

export const legalCenterDe: LegalCenterDict = {
  area: "Rechtliches",
  home: "Zur Startseite von roombir.com",
  back: "Zurück zur Website",
  language: "Sprache",
  nav: {
    label: "Rechtsdokumente",
    terms: "Software",
    siteTerms: "Website",
    privacy: "Datenschutz",
    cookies: "Cookies",
  },
  toc: "Inhalt",
  essential: "Wesentliche Klausel",
  control: {
    label: "Dokumentenblatt",
    document: "Dokument",
    version: "Version",
    effective: "Gültig ab",
    updated: "Zuletzt aktualisiert",
    prevailing: "Maßgebliche Sprache",
    sections: "Abschnitte",
    hash: "SHA-256-Prüfsumme",
  },
  spanish: "Spanisch",
  courtesy:
    "Dieses Dokument wird auf Spanisch veröffentlicht. Maßgeblich ist ausschließlich der spanische Text.",
  translation: "Übersetzung. Bei Abweichungen ist der spanische Text maßgeblich.",
  pending: "ausstehend",
  footer: {
    legend:
      "Vertraulich und urheberrechtlich geschützt. © {year} Roombir. Alle Rechte vorbehalten. Vervielfältigung, Kopie oder Weitergabe ohne Genehmigung ist untersagt.",
    documents: "Dokumente",
    contact: "Rechtlicher Kontakt",
    docLine: "Roombir · {doc} · Version {version} · Gültig ab {date}",
  },
  docs: {
    terms: {
      meta: {
        title: "Allgemeine Nutzungsbedingungen",
        description:
          "Bedingungen für Zugang und Nutzung der Roombir-Plattform: Lizenz, verbotene Handlungen, Sanktionen bei Missbrauch, Beweis, Prüfung und Gerichtsstand.",
      },
      kicker: "Rechtsdokument · Software",
      title: "Allgemeine Nutzungsbedingungen",
      lead: "Dieses Dokument regelt jeden Zugang zur Roombir-Plattform. Es wird vollständig, ausdrücklich und vor Erstellung des Kontos angenommen. Ohne Annahme kein Zugang.",
      notice: {
        label: "Hinweis",
        body: "Die Aktivität auf der Plattform wird aufgezeichnet und gilt als Beweis. Kopieren, Klonen, automatisiertes Auslesen von Daten, Reverse Engineering, die Registrierung mit falschen Angaben oder die Nutzung der Plattform zur Entwicklung eines Konkurrenzprodukts ist **Missbrauch**. Missbrauch wird streng geahndet. Bei der Vollstreckung einer Sanktion nimmt Roombir Kontakt mit der verantwortlichen Partei auf, und die Angelegenheit wird auf dem Rechtsweg verfolgt.",
      },
      summary: {
        title: "Übersicht der Folgen",
        note: "Informative Zusammenfassung. Maßgeblich ist der vollständige Text des jeweiligen Abschnitts.",
        head: { subject: "Fall", result: "Folge", ref: "Abschnitt" },
        rows: [
          {
            subject: "Registrierung mit falschen oder ungenauen Angaben",
            result: "Die Lizenz ist von Anfang an nichtig. Jeder Zugang ist ein Zugang ohne Lizenz",
            ref: "8.2",
          },
          {
            subject: "Missbrauch",
            result: "Strenge Sanktionen, bemessen nach der Schwere des Verstoßes",
            ref: "13.1",
          },
          {
            subject: "Vollstreckung einer Sanktion",
            result: "Roombir nimmt Kontakt mit der verantwortlichen Partei auf. Die Angelegenheit geht auf den Rechtsweg",
            ref: "13.2",
          },
          {
            subject: "Konto des Verletzers und verbundene Konten",
            result: "Sofortige Kündigung, ohne Vorankündigung und ohne Erstattung",
            ref: "13.3",
          },
          {
            subject: "Kopien, Nachbildungen und abgeleitete Werke",
            result: "Sofortige Unterlassung und schriftlich bestätigte Vernichtung",
            ref: "13.4",
          },
          {
            subject: "Aufdeckung, Gutachten, Honorare und Gerichtskosten",
            result: "Vollständig zu Lasten des Verletzers",
            ref: "13.6",
          },
          {
            subject: "Verweigerung der Prüfung",
            result: "Gilt als Anerkenntnis des Verstoßes",
            ref: "14.2",
          },
        ],
      },
    },
    siteTerms: {
      meta: {
        title: "Nutzungsbedingungen der Website",
        description:
          "Bedingungen für den Zugang zur Website von Roombir: geistiges Eigentum, verbotene Nutzungen und Maßnahmen bei Verstößen.",
      },
      kicker: "Rechtsdokument · Website",
      title: "Nutzungsbedingungen der Website",
      lead: "Wer diese Website nutzt, nimmt diese Bedingungen an. Wer sie nicht annimmt, hat die Website zu verlassen.",
      notice: {
        label: "Hinweis",
        body: "Sämtliche Inhalte dieser Website sind Eigentum von Roombir oder seiner Lizenzgeber. Es ist untersagt, sie zu kopieren, zu klonen, automatisiert auszulesen, einem Reverse Engineering zu unterziehen oder zum Training von Modellen künstlicher Intelligenz zu verwenden. Die Folgen eines Verstoßes sind schwerwiegend: Roombir sperrt den Zugang ohne Vorankündigung, bewahrt die technischen Protokolle auf, nimmt Kontakt mit der verantwortlichen Partei auf und verfolgt die Angelegenheit auf dem Rechtsweg.",
      },
      summary: {
        title: "Maßnahmen bei Verstößen",
        note: "Informative Zusammenfassung. Maßgeblich ist der vollständige Text des jeweiligen Abschnitts.",
        head: { subject: "Maßnahme", result: "Umfang", ref: "Abschnitt" },
        rows: [
          { subject: "Sperrung des Zugangs", result: "Nach IP, Bereichen oder Agenten. Ohne Vorankündigung", ref: "7" },
          {
            subject: "Technische Protokolle",
            result: "Werden als Nachweis des Verstoßes aufbewahrt",
            ref: "7",
          },
          {
            subject: "Kontaktaufnahme",
            result: "Roombir nimmt Kontakt mit der verantwortlichen Partei auf",
            ref: "7",
          },
          {
            subject: "Rechtsweg",
            result: "Die Angelegenheit wird ausschließlich auf dem Rechtsweg verfolgt",
            ref: "7",
          },
        ],
      },
    },
    privacy: { kicker: "Rechtsdokument · Personenbezogene Daten" },
    cookies: { kicker: "Rechtsdokument · Cookies" },
  },
};
