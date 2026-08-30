import type { Dictionary } from "./es";

/**
 * Deutsch. Dieselben Schlüssel wie in `es.ts` — TypeScript lässt es nicht
 * anders zu.
 *
 * Der Ton ist der des spanischen Originals: direkt, konkret und bereit zu
 * sagen, was das Produkt noch nicht kann.
 */
const de: Dictionary = {
  site: {
    title: "Bookfer · Das Betriebssystem Ihrer Unterkunft",
    description:
      "PMS, Buchungsmaschine, Website, Revenue Management und ein KI-Assistent, der das System bedient. Alles auf einer einzigen Datenbank, für Hotels, Hütten, Hostels und Ferienwohnungen.",
    tagline: "Hotellerie-Betriebssystem",
  },

  nav: {
    product: "Plattform",
    platform: "Die Plattform",
    contact: "Kontakt",
    login: "Anmelden",
    signup: "Kostenlos starten",
    home: "bookfer, Startseite",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    more: "Mehr",
    skip: "Zum Inhalt springen",
    primary: "Hauptnavigation",
    megaFoot: "Sieben Produkte auf einer einzigen Datenbank.",
    megaLink: "Die ganze Plattform ansehen",
    language: "Sprache",
    links: {
      solutions: "Lösungen",
      pricing: "Preise",
      about: "Über uns",
    },
    groups: {
      operation: "Der Betrieb",
      growth: "Das Wachstum",
      newLayer: "Die neue Ebene",
    },
    products: {
      reservas: {
        title: "Buchungen und Zimmer",
        desc: "Tagesübersicht, Kalender, Raten, Verfügbarkeit und physisches Inventar.",
      },
      motor: {
        title: "Buchungsmaschine",
        desc: "Die Suche und der Checkout, die der Gast sieht, mit informativem Kalender.",
      },
      revenue: {
        title: "Revenue · RMS",
        desc: "Pace, Mitbewerber, Events und Ratenempfehlungen im geschlossenen Kreislauf.",
      },
      sitios: {
        title: "Website und Marke",
        desc: "Builder mit eigener Domain, LinkHub, Galerien und Bewertungen.",
      },
      ia: {
        title: "Bookfer KI",
        desc: "Ein Assistent mit 272 Werkzeugen, der das System mit Ihnen bedient.",
      },
      agentes: {
        title: "Agentische Unterkunft",
        desc: "llms.txt, availability.json und JSON-LD: buchbar durch eine KI.",
      },
    },
  },

  footer: {
    claim:
      "Das Betriebssystem Ihrer Unterkunft. Buchungen, Zimmer, Buchungsmaschine, Website, Revenue und ein Assistent, der all das bedient — auf einer einzigen Datenbank.",
    nav: "Fußzeile",
    columns: {
      product: "Plattform",
      solutions: "Lösungen",
      company: "Unternehmen",
      legal: "Rechtliches",
    },
    company: {
      about: "Wer wir sind",
      status: "Produktstand",
      pricing: "Preise",
      contact: "Kontakt",
    },
    legal: {
      privacy: "Datenschutz",
      terms: "AGB",
      cookies: "Cookies",
    },
    solutions: {
      hoteles: "Hotels und Aparthotels",
      cabanas: "Hütten und Wohnungen",
      hostels: "Hostels",
      glamping: "Glamping und Villen",
      grupos: "Gruppen und kleine Ketten",
    },
    madeIn: "Gemacht in Argentinien",
    agentNote: "auch diese Seite hat ihre llms.txt",
    social: {
      instagram: "bookfer auf Instagram",
      linkedin: "bookfer auf LinkedIn",
      email: "Schreiben Sie uns eine E-Mail",
    },
  },

  common: {
    startFree: "Kostenlos starten",
    seePlatform: "Plattform ansehen",
    seePricing: "Preise ansehen",
    talkToUs: "Mit uns sprechen",
    bookDemo: "Demo anfragen",
    writeUs: "Schreiben Sie uns",
    seeMore: "Mehr sehen",
    faqTitle: "Häufige Fragen",
    noCard: "Ohne Karte",
    noInstall: "Nichts zu installieren",
    guidedSignup: "Geführte Einrichtung in neun Schritten",
    inSpanish: "Fünf Sprachen, gemacht in Argentinien",
  },

  ticker: [
    "Eigene Buchungsmaschine, 0 % Provision",
    "Tape Chart mit Vorschau",
    "Revenue im geschlossenen Kreislauf",
    "llms.txt · buchbar durch eine KI",
    "272 Werkzeuge des Assistenten",
    "Echte Mehrwährungsfähigkeit",
    "Gast-E-Mails ohne SMTP",
    "LinkHub mit QR",
    "In einem Nachmittag startklar",
  ],

  vignettes: {
    tape: {
      label: "Buchungen · Kalender",
      tag: "14 Nächte",
      units: {
        r101: "101 Doppel",
        r102: "102 Doppel",
        r103: "103 Superior",
        cabin: "Hütte Alerce",
        suite: "Nord-Suite",
      },
      bars: {
        garcia: "García",
        perez: "Pérez",
        sosa: "Sosa · 4 Pers.",
        paint: "Anstrich",
        ruiz: "Ruiz",
        fresh: "Neu · nicht zugewiesen",
        bianchi: "Bianchi",
        engine: "Maschine",
      },
      legend: {
        confirmed: "Bestätigt",
        pending: "Ausstehend",
        block: "Sperre",
        live: "Gerade eingegangen",
      },
    },
    calendar: {
      label: "Maschine · Informativer Kalender",
      tag: "März",
      dows: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      left3: "noch 3",
      left2: "noch 2",
      left1: "noch 1",
      hint: "Mindestens 2 Nächte für Anreise am 14.",
    },
    decision: {
      label: "Revenue · Entscheidung",
      tag: "Sa 21.03.",
      subject: "Doppel Superior · Ratenvorschlag",
      keys: {
        occupancy: "Belegung",
        pace: "Pace",
        event: "Event",
        comp: "Mitbewerber",
        rule: "Regel",
        cap: "Grenze",
      },
      values: {
        occupancy: "**78 %** · Schwelle der Regel 70 %",
        pace: "**+18 %** ggü. Ihrer eigenen Historie (Sa · März · 15-30 Tage)",
        event: "Weinlesefest · in 3 Tagen · Wirkung **72**",
        comp: "Median des Comp-Sets **101.400 $** · 4 von 5 erfasst",
        rule: "**Hohe Belegung + Event** → Anpassung +15 %",
        cap: "Maximum 120.000 $ · nicht angewendet",
      },
      accept: "Annehmen und auf die Maschine anwenden",
      reject: "Ablehnen",
    },
    agent: {
      label: "Bookfer KI",
      tag: "Rezeption",
      ask: "Verlege García ab Donnerstag auf die 203 und informiere ihn per E-Mail",
      trace: [
        { tool: "buchung_suchen", arg: "Gast: García", ok: "1 Treffer" },
        { tool: "buchung_verschieben", arg: "Vorschau", ok: "keine Konflikte" },
        { tool: "einheit_zuweisen", arg: "203", ok: "ok" },
        { tool: "gast_email_senden", arg: "Zimmerwechsel", ok: "gesendet" },
      ],
      answer:
        "Erledigt. Vom 19. bis 22. auf die 203 verlegt und die Nachricht ist raus. Die 101 ist diese drei Nächte frei.",
      card: {
        guest: "Martina García",
        meta: ["203 · Doppel Superior", "19. → 22. März", "2 Pers.", "Bestätigt"],
        see: "Buchung ansehen",
        undo: "Rückgängig",
      },
    },
    spaces: {
      label: "Arbeitsbereich",
      tag: "Hotel del Parque",
      tabs: ["Rezeption", "Housekeeping", "Marketing", "Verwaltung"],
      other: "anderer Bereich",
      menu: [
        "Tagesübersicht",
        "Alle Buchungen",
        "Neue Buchung",
        "Zimmerstatus",
        "Raten und Verfügbarkeit",
        "Revenue · RMS",
        "Builder und Websites",
        "LinkHub",
      ],
    },
    surface: {
      host: "cabanasdelalerce.com",
      intro: "Sechs Berghütten in Villa La Angostura, Neuquén.",
      unitsTitle: "## Einheiten",
      units: [
        "- Alerce · 4 Pers. · 1 Schlafzimmer · ab 78 USD",
        "- Coihue · 6 Pers. · 2 Schlafzimmer · ab 112 USD",
      ],
      bookTitle: "## Buchen",
      book: [
        "Lesbare Verfügbarkeit: /availability.json",
        "Was die Maschine akzeptiert: /engine-capabilities.json",
        "Checkout: /buchen?in=&out=&pax=",
      ],
      policyTitle: "## Bedingungen",
      policy: "Check-in 15:00 · Check-out 10:00 · mindestens 2 Nächte am Wochenende",
    },
    rules: {
      label: "Revenue · Szenarien",
      tag: "4 Regeln",
      rows: [
        { cond: "**Belegung** ≥ 70 % · Fenster 0-14 Tage", action: "+8 %" },
        { cond: "**Event-Wirkung** ≥ 60 · Fenster 0-7 Tage", action: "+15 %" },
        { cond: "**Pickup 7T** ≤ 2 · Fenster 0-21 Tage", action: "−10 %" },
        { cond: "**Rate Mitbewerber 1** ≤ Basis · Fenster 0-30 Tage", action: "Plan B" },
      ],
      note:
        "Sie werden der Reihe nach ausgewertet, die letzte passende gewinnt. Der Trockenlauf zeigt, was jede tun würde, bevor Sie sie aktivieren.",
    },
    comp: {
      label: "Revenue · Mitbewerber",
      tag: "Sa 21.03.",
      mine: "Hotel del Parque · Sie",
      sources: { own: "eigen", bookfer: "bookfer", manual: "manuell", none: "keine Daten" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Automatische Entdeckung nach Nähe und Ähnlichkeit. Externe Raten werden von Hand erfasst: wir erfinden keine Zahl, die wir nicht haben.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Online buchen", "WhatsApp", "Fotos der Hütten", "Anfahrt", "Bewertungen · 4,8"],
    },
    signals: {
      revenue: "revenue · sa 21.03.",
      applied: "auf die Maschine angewendet",
      agent: "bookfer ki",
      agentText: "García auf die 203 verlegt und die Nachricht per E-Mail geschickt.",
      agentFoot: "4 Werkzeuge · mit Ihren Berechtigungen",
    },
  },

  plans: {
    cta: "Jetzt starten",
    ribbon: "Am häufigsten gewählt",
    free: "Kostenlos",
    freeFor: "für {n} Tage",
    perMonth: "pro Monat",
    perYear: "pro Jahr",
    oneTime: "einmalig",
    trial: "{n} Tage kostenlos testen",
    upToProperty: "Bis zu {n} Objekt",
    upToProperties: "Bis zu {n} Objekte",
    upToUser: "Bis zu {n} Nutzer",
    upToUsers: "Bis zu {n} Nutzer",
    noPropertyLimit: "Unbegrenzte Objekte",
    noUserLimit: "Unbegrenzte Nutzer",
    homeTitle: "Ein System, ein Preis",
    homeSubtitle:
      "Alles, was eine Unterkunft zum Betreiben und Verkaufen braucht — ohne fünf Anbieter und ohne Provision pro Buchung.",
    matrix: {
      caption: "Was jeder bookfer-Tarif enthält",
      product: "Produkt",
      limits: "Grenzen",
      properties: "Objekte",
      users: "Nutzer",
      trialRow: "Testphase",
      included: "Enthalten",
      notIncluded: "Nicht enthalten",
      freeDays: "{n} Tage kostenlos",
      days: "{n} Tage",
      note:
        "Preise und Tarifinhalte stammen aus demselben Katalog, mit dem das System abrechnet. Was Sie hier sehen, gilt für Ihr Konto.",
    },
  },

  leadForm: {
    name: "Name",
    namePlaceholder: "Wie dürfen wir Sie nennen",
    email: "E-Mail",
    emailPlaceholder: "sie@ihreunterkunft.com",
    phone: "Telefon oder WhatsApp",
    phonePlaceholder: "+49 151 …",
    company: "Unterkunft",
    companyPlaceholder: "Name des Hotels, der Hütten oder des Aparthotels",
    message: "Erzählen Sie uns, wie Sie heute Buchungen entgegennehmen",
    messagePlaceholder:
      "Wie viele Einheiten Sie haben, ob Sie über OTAs verkaufen, und was Sie nicht mehr von Hand machen möchten.",
    optional: "optional",
    submit: "Senden",
    sending: "Wird gesendet…",
    honeypot: "Nicht ausfüllen",
    errorTail: "Wenn es weiterhin fehlschlägt, schreiben Sie uns an hola@bookfer.com.",
    legal:
      "Wir verwenden Ihre Daten nur, um Sie zu bookfer zu kontaktieren. Sie können jederzeit ihre Löschung verlangen. Mehr in der [Datenschutzerklärung](/legal/privacidad).",
    doneTitle: "Angekommen.",
    doneText:
      "Wir melden uns in den nächsten Stunden. Wenn Sie nicht warten möchten, können Sie die Einrichtung sofort starten: kostenlos und ohne Karte.",
  },

  home: {
    hero: {
      l1a: "Ihre ganze",
      l1b: "Unterkunft",
      l2: "in einem",
      pill: "Hinter jedem\nguten Aufenthalt",
      l3a: "einzigen",
      l3b: "System.",
    },
    swap: {
      eyebrow: "Warum es das gibt",
      title: "Sieben Produkte, die Sie heute *einzeln kaufen*.",
      lead:
        "Eine kleine oder mittlere Unterkunft sollte nicht fünf Anbieter und einen Berater brauchen, um digital zu arbeiten. Das ist die These von bookfer, und sie entscheidet jede Produktfrage darin.",
      headOld: "Was Sie heute einzeln kaufen",
      headNew: "In bookfer",
      rows: [
        { old: "PMS für Buchungen und Zimmer", now: "Hubs Buchungen + Zimmer" },
        { old: "Buchungsmaschine", now: "Öffentliche Maschine + Engine Studio" },
        { old: "Website-Baukasten", now: "Builder + Renderer mit eigener Domain" },
        { old: "RMS für Revenue Management", now: "Hub Revenue" },
        { old: "Link-in-Bio und digitale Präsenz", now: "LinkHub + Online-Präsenz" },
        { old: "Gästeportal", now: "StayPass" },
        { old: "Assistent / Automatisierungen", now: "Bookfer KI" },
      ],
    },
    modules: {
      eyebrow: "Die Plattform",
      title: "Sechs Oberflächen, *keine Brücke* dazwischen.",
      lead:
        "Das sind keine Integrationen, die nachts synchronisieren: das sind verschiedene Sichten auf dieselben Daten. Den Preis einer Kategorie zu ändern ist sofort in der Buchungsmaschine sichtbar, ohne etwas zu veröffentlichen.",
      items: {
        reservas: {
          title: "Buchungen",
          desc: "Tagesübersicht, Tape-Chart-Kalender mit Ziehen und Größenänderung, manuelle Erfassung, Raten, Verfügbarkeit und Aktionen.",
        },
        habitaciones: {
          title: "Zimmer",
          desc: "Das physische Inventar: Betriebsstatus jeder Einheit, Belegungsplan und Kategorieverwaltung.",
        },
        motor: {
          title: "Buchungsmaschine",
          desc: "Ihre Suche und Ihr Checkout, mit einem Kalender, der Preis und verbleibende Einheiten Tag für Tag zeigt.",
        },
        revenue: {
          title: "Revenue · RMS",
          desc: "Pace gegen Ihre eigene Historie, Comp-Set, Nachfrage-Events, Preisregeln und erklärte Empfehlungen.",
        },
        sitios: {
          title: "Website und LinkHub",
          desc: "Visueller Baukasten mit eigener Domain und Mehrsprachigkeit, Galerien, Bewertungen, Markenidentität und Link-in-Bio.",
        },
        ia: {
          title: "Bookfer KI",
          desc: "Ein Assistent mit 272 Werkzeugen, der das System abfragt und bedient — immer mit Ihren Berechtigungen und nie mit eigenen.",
        },
      },
    },
    spaces: {
      eyebrow: "Was sonst niemand hat",
      title: "Jeder Arbeitsplatz sieht *sein* System, nicht Ihres.",
      lead:
        "Rezeption, Housekeeping, Marketing und Verwaltung arbeiten auf denselben Daten, aber jeder Arbeitsbereich hat sein eigenes Menü, seinen eigenen Startbildschirm und seine eigenen Berechtigungen. Niemand lernt, die Hälfte einer Anwendung zu ignorieren.",
      items: [
        "Das Menü baut sich selbst: ein Marketing-Bereich **zeigt** den Buchungs-Hub **nicht**.",
        "Der Startbildschirm setzt sich neu zusammen: die Rezeption sieht Anreisen, das Housekeeping Einheiten in Reinigung.",
        "Berechtigungen gelten pro App und pro Stufe: **bedienen**, **konfigurieren** oder nichts.",
        "Die Einarbeitung einer neuen Person wird aus dem gebaut, was dieser Bereich hat — und aus nichts sonst.",
      ],
    },
    sale: {
      eyebrow: "Verkaufsmodell",
      title: "Ein Hotel und eine Hütte *verkaufen sich nicht gleich*.",
      lead:
        "Fast alle Systeme entscheiden sich für eine Seite: entweder Stadthotel oder Ferienvermietung. Hier wird der Modus pro Kategorie festgelegt, und es gibt einen Assistenten für die Migration von einem zum anderen, auch wenn schon Buchungen drin sind.",
      poolTitle: "Kategorie-Pool",
      poolText:
        "Die Kategorie bündelt N austauschbare Zimmer. Der Gast kauft „ein Doppelzimmer Superior“, nicht die 203, und die Maschine wählt die Einheit bei der Bestätigung — Lücken minimierend oder Abnutzung ausgleichend, wie Sie möchten. Sie können sie auch offen lassen, damit die Rezeption entscheidet.",
      poolTag: "Stadthotel · Hostel · Aparthotel",
      unitTitle: "Einzelne Einheit 1:1",
      unitText:
        "Die Kategorie umfasst genau eine Einheit und wird mit eigenem Namen verkauft. Der Gast bucht die Hütte Alerce, mit ihren Fotos, ihrer Beschreibung und ihrem Preis — ohne jede Unklarheit darüber, was er bekommen hat.",
      unitTag: "Hütten · Wohnungen · Glamping · Villen",
      unitNames: ["Alerce", "Coihue", "Ñire"],
    },
    engine: {
      eyebrow: "Buchungsmaschine",
      title: "Ein Kalender, der *verkauft*, nicht einer, der nach Daten fragt.",
      lead:
        "Der Datepicker der Maschine zeigt Tag für Tag — und nach dem, was Sie freigeben — den Preis ab, wie viele Einheiten übrig sind und welche Tage geschlossen sind. Wenn Sie möchten, schaltet ein Regler alles ab und er wird wieder ein gewöhnlicher Datepicker.",
      items: [
        "Preis ab und verbleibende Einheiten an jedem Tag des Monats.",
        "Anreise gesperrt, Abreise gesperrt und Mindestaufenthalt, markiert dort, wo man hinsieht.",
        "Sieben konfigurierbare Checkout-Blöcke, ohne Code und ohne die Website neu zu veröffentlichen.",
        "Der Gast bestätigt per E-Mail oder Sie bestätigen: ausstehende Buchungen verfallen von selbst.",
      ],
      link: "Die ganze Buchungsmaschine ansehen",
    },
    agentic: {
      eyebrow: "Die Wette",
      title: "Ihre Unterkunft, *buchbar durch eine KI*.",
      lead:
        "Die Leute suchen nicht mehr nur bei Google: sie fragen ein Modell. Eine Unterkunft, die ein Agent nicht lesen kann, taucht in dieser Antwort nicht auf. Die Maschine veröffentlicht ihr Inventar in maschinengerechten Formaten, und der GEO-Editor lässt Sie erklären, was Ihr Objekt ist, für wen, und was es vertrauenswürdig macht.",
      items: [
        "**llms.txt** — wer Sie sind, was Sie verkaufen und wie man bucht, in reinem Text.",
        "**availability.json** — die echte Verfügbarkeit, maschinenlesbar.",
        "**engine-capabilities.json** — welche Vorgänge Ihre Maschine akzeptiert.",
        "**JSON-LD** in den Seiten und ein GEO-Editor pro Seite: Intention, Entitäten und Vertrauenssignale.",
      ],
      link: "Wie die agentische Ebene funktioniert",
    },
    revenue: {
      eyebrow: "Revenue · RMS",
      title: "Es nennt den Preis *und das Warum*.",
      lead:
        "Das RMS ist keine Blackbox, die eine Zahl ausspuckt. Jedes Objekt und jedes Datum hat ein Entscheidungsdokument: welche Daten es gesehen hat, welche Regeln zutrafen, ob eine Grenze griff und was herauskam — Zeile für Zeile.",
      items: [
        "Pace gegen **Ihre eigene Historie**, getrennt nach Wochentag, Monat und Vorlaufzeit.",
        "Wenn wenig Historie da ist, sagt es der Bildschirm: er **verkauft Ihnen keine** Sicherheit, die es nicht gibt.",
        "Nachfrage-Events werden selbst eingelesen — Feiertage, Messen, Konzerte — und von Ihnen kuratiert.",
        "Nehmen Sie eine Empfehlung an, **wandert die Rate in die Maschine**. Der Kreislauf schließt sich ohne Copy-Paste.",
      ],
      link: "Revenue ansehen",
    },
    ia: {
      eyebrow: "Bookfer KI",
      title: "Ein Assistent, der *handelt*, nicht einer, der vorschlägt.",
      lead:
        "Es ist kein Chat, der erklärt, wo man klickt. Er prüft Verfügbarkeit, legt Buchungen an, verschiebt einen Aufenthalt mit Vorschau, passt Raten an, genehmigt RMS-Events oder veröffentlicht eine Website. Und all das mit Ihren Berechtigungen, nicht mit eigenen.",
      items: [
        "272 Werkzeuge, die praktisch die gesamte Oberfläche des Produkts abdecken.",
        "Man sieht das Protokoll des Zuges: welches Werkzeug er benutzt hat und was zurückkam.",
        "Er antwortet mit ausführbaren Karten, nicht nur mit Text.",
        "Drei Berechtigungsebenen: Filter vor dem Zug, Kontext im Prompt und Prüfung bei jedem Aufruf.",
      ],
      link: "Bookfer KI ansehen",
    },
    guarantees: {
      eyebrow: "Drei Dinge, über die Sie nicht nachdenken müssen",
      title: "Die *strukturellen* Garantien.",
      items: [
        {
          key: "Einheit + Datum",
          title: "Eine Nacht kann nicht zweimal verkauft werden",
          text: "Jede Nacht jedes Zimmers ist eine eindeutige Sperre in der Datenbank, keine Prüfung, die zwei gleichzeitig buchende Personen umgehen könnten. Wartungssperren nutzen dieselbe Sperre, nehmen also echtes Inventar heraus und verschwinden aus der Maschine.",
        },
        {
          key: "Basis · Abrechnung · Anzeige",
          title: "Der abgerechnete Betrag verschiebt sich nachträglich nicht",
          text: "Die Preise leben in einer Basiswährung, Sie kassieren in einer anderen, und der Gast kann in einer dritten schauen. Die Umrechnung bleibt bis zum Check-in lebendig und friert dort ein. Für argentinische Peso wählen Sie den Kurs: blue, MEP, CCL oder offiziell.",
        },
        {
          key: "reservations@bookfer.com",
          title: "Sie richten keinen Mailserver ein",
          text: "Alle Gast-E-Mails — Bestätigung, Token, Änderungshinweis — gehen von der bookfer-Domain aus, mit Ihrem Postfach als Antwortadresse. Das ist eine der klassischen Reibungen beim Einrichten eines PMS und wurde bewusst abgeschafft.",
        },
      ],
    },
    stats: {
      eyebrow: "Die echte Größe",
      title: "Keine Versprechen: *es ist schon gebaut*.",
      lead:
        "bookfer ist im Marktpiloten, deshalb zeigen wir Ihnen noch keinen aufgeblasenen Hotelzähler. Was wir zeigen können, ist, was heute im Produkt steckt.",
      items: [
        { value: "23", label: "Apps, aktivierbar pro Arbeitsbereich" },
        { value: "272", label: "Werkzeuge, die der Assistent beherrscht" },
        { value: "37", label: "geführte Touren über dem echten Bildschirm" },
        { value: "10", label: "Währungen, mit blue, MEP, CCL oder offiziell für ARS" },
        { value: "5", label: "Sprachen der Plattform" },
        { value: "1", label: "einzige Datenbank für das ganze System" },
      ],
    },
    marketing: {
      eyebrow: "Marketing",
      title: "Ihre Website, Ihre Marke und Ihr Link, *vom selben System bedient*.",
      lead:
        "Der visuelle Baukasten setzt die Website aus Komponenten zusammen, die sich selbst mit Ihren Daten verbinden: die eingebettete Buchungsmaschine, die Zimmerkarten, die Galerien, die Aktionen und die Bewertungen. Und LinkHub ist die Seite für die Instagram-Bio, mit QR und eigener Auswertung.",
      items: [
        "Eigene Domain und Mehrsprachigkeit, mit eigener URL, eigenem Titelbild und eigener Social-Vorschau pro Sprache.",
        "Eine einzige Markenidentität — Logo, aus dem Logo extrahierte Palette, Tonalität, Erzählung —, die Website, Maschine und LinkHub speist.",
        "Zehn Blocktypen im LinkHub, mit Terminplanung und Auswertung von Aufrufen und Klicks.",
        "Bewertungen per CSV importierbar, mit Hotelantwort und Widerspiegelung auf der Website.",
      ],
      link: "Website und Marke ansehen",
    },
    onboarding: {
      eyebrow: "Geführte Einrichtung",
      title: "Sie richten es *allein* ein, an einem Nachmittag.",
      lead:
        "Neun Schritte in drei Phasen, der Fortschritt wird auf dem Server gespeichert: Sie können auf halbem Weg aufhören und auf einem anderen Gerät weitermachen. Auf dem Desktop bleibt eine Karte, die Sie dorthin zurückbringt, wo Sie waren.",
      steps: [
        {
          num: "Phase 1 · Schritte 0–4",
          title: "Konfiguration",
          text: "Ihr Unternehmen, Ihr Objekt mit Adresse auf der Karte, Zeitzone und Währung, Ihre Markenidentität — die Palette wird aus Ihrem Logo gezogen — und wie Sie arbeiten. Aus diesem letzten Schritt entstehen die Arbeitsbereiche und die ersten Apps.",
        },
        {
          num: "Phase 2 · Schritte 5–7",
          title: "Datenerfassung",
          text: "Zimmertypen und Einheiten, mit Massenanlage, damit Sie nicht zwanzigmal dasselbe eingeben. Danach die ersten Aktionen und ein Durchgang durch die Maschine. Am Ende der Phase initialisiert sich die Verfügbarkeit von selbst.",
        },
        {
          num: "Phase 3 · Schritt 8",
          title: "Touren",
          text: "Jede App, die Ihnen zugeteilt wurde, hat eine geführte Tour, die über den echten Bildschirm gezeichnet wird und das Element hervorhebt, von dem sie spricht. Von da an bekommt jede neue Person im Team ihre Einarbeitung je nach Bereich.",
        },
      ],
    },
    honest: {
      eyebrow: "Produktstand",
      title: "Was wir *noch nicht* können.",
      lead:
        "Wir sind im Marktpiloten und Ihnen ist lieber, Sie wissen es vor dem Start als in der zweiten Woche. Das sind die vier Dinge, die ein großer Wettbewerber hat und bookfer heute nicht.",
      link: "Den vollständigen Stand ansehen, Bereich für Bereich",
      states: { none: "gibt es nicht", partial: "teilweise" },
      items: [
        {
          tag: "Channel Manager",
          state: "none",
          text: "Es gibt keine Synchronisierung von Inventar oder Raten mit OTAs. Es gibt ein Ereignisprotokoll, das jede Buchungsänderung für den Tag der Anbindung festhält, aber heute ist das eine Datei, keine Integration.",
        },
        {
          tag: "Zahlungs-Gateway",
          state: "none",
          text: "Es wird nicht online abgerechnet. Bezahlt wird beim Check-in, vor Ort, mit der zu diesem Zeitpunkt eingefrorenen Währungsumrechnung.",
        },
        {
          tag: "Mitbewerber-Raten",
          state: "partial",
          text: "Das Comp-Set entdeckt sich selbst über Nähe und Ähnlichkeit, aber die Raten externer Mitbewerber werden von Hand erfasst. Die Anbindung an automatische Anbieter ist vorbereitet und nicht verbunden.",
        },
        {
          tag: "Online-Präsenz",
          state: "partial",
          text: "Google-Business- und OTA-Einträge werden im System bearbeitet und bewertet, aber nicht per API veröffentlicht: heute werden sie von Hand ans Ziel kopiert. Die Verbindungen zu sozialen Netzwerken sind erklärt, nicht angebunden.",
        },
      ],
    },
    faq: [
      {
        q: "Taugt es für Hütten und Wohnungen oder nur für Hotels?",
        a: "Für beides, und nicht mit demselben Trick. Eine Kategorie lässt sich als **Pool** verkaufen — zehn austauschbare Doppelzimmer, der Gast kauft „ein Doppelzimmer“ — oder als **einzelne Einheit 1:1**, bei der die Kategorie eine einzige Einheit mit eigenem Namen umfasst. Die Wahl trifft man pro Kategorie, nicht pro System: eine Anlage mit sechs Hütten und zwei Standardzimmern funktioniert ohne Verrenkungen.",
      },
      {
        q: "Brauche ich einen Channel Manager, um bookfer zu nutzen?",
        a: "Nicht für den Betrieb, aber sagen wir es klar: **bookfer hat noch keinen Channel Manager**. Wenn Sie über Booking oder Expedia verkaufen, wird diese Verfügbarkeit heute von Hand abgeglichen. Das System ist darauf ausgelegt, dass die Direktbuchung — Ihre Website, Ihr LinkHub, Ihre Maschine — nicht mehr in einem Chat verloren geht, und von dort kommt der größte Teil des Umsatzes, den Sie heute nicht kontrollieren.",
      },
      {
        q: "Wie kassiere ich die Buchungen?",
        a: "Beim Check-in, vor Ort. **Ein integriertes Zahlungs-Gateway gibt es noch nicht.** Was es gibt, ist echte Mehrwährungsfähigkeit: Sie führen die Preise in einer Basiswährung, kassieren in einer anderen, und die Umrechnung bleibt bis zum Check-in lebendig und friert dort ein, damit sich der abgerechnete Betrag nachträglich nicht ändert.",
      },
      {
        q: "Muss ich etwas installieren oder konfigurieren?",
        a: "Man kommt über den Browser hinein. Die Einrichtung sind neun geführte Schritte, die auf dem Server gespeichert werden — Sie können auf halbem Weg aufhören und am Telefon weitermachen — und es gibt keinen Mailserver zu konfigurieren: **alle Gast-E-Mails gehen von der bookfer-Domain aus**, mit Ihrem Postfach als Antwortadresse.",
      },
      {
        q: "Kann ich meine eigene Domain verwenden?",
        a: "Ja. Jede veröffentlichte Website nimmt einen eigenen Hostnamen an, und jede Sprachvariante kann ihren eigenen haben. Auch der LinkHub hat seine öffentliche Adresse, mit QR-Code zum Ausdrucken.",
      },
      {
        q: "Kann die KI in meinem System alles tun?",
        a: "Nein, und das ist Absicht. Der Assistent handelt, indem er **Ihre echte Identität annimmt**, mit einer kurzlebigen Berechtigung, die bei jedem Aufruf neu ausgestellt wird. Vor dem Zug werden ihm die Werkzeuge weggenommen, die Ihr Benutzer nicht verwenden darf, und jeder Vorgang wird erneut gegen die Richtlinie des Dienstes geprüft. Wird Ihnen mitten im Gespräch ein Zugang entzogen, scheitert die nächste Aktion und der Assistent erklärt warum.",
      },
    ],
    cta: {
      title: "Bringen Sie es *diese Woche* zum Laufen.",
      lead:
        "Die Einrichtung ist geführt und verlangt keine Karte. Wenn Sie möchten, dass wir Sie beim Erfassen der Zimmer begleiten — dem aufwendigsten Schritt —, machen wir das in einem kurzen Gespräch.",
      steps: [
        "Sie melden sich an und legen das Objekt an.",
        "Wir erfassen die Zimmer gemeinsam, wenn Sie möchten.",
        "Sie veröffentlichen Ihre Website und Ihren Buchungslink.",
      ],
    },
  },

  producto: {
    meta: {
      title: "Die Plattform",
      description:
        "Sieben Produkte auf einer einzigen Datenbank: Buchungen, Zimmer, Buchungsmaschine, Revenue, Websites, Gästeportal und ein KI-Assistent. Was jedes tut und wie sie zusammenhängen.",
    },
    hero: {
      eyebrow: "Die Plattform",
      title: "Sieben Produkte, *eine einzige Datenbank*.",
      lead:
        "Das ganze Team kommt über denselben Desktop herein. Zimmer, Buchungen und Revenue erscheinen darin eingebettet, mit geerbtem Kontext und Design — für die Arbeitenden ist es eine Anwendung, und für die Daten ein Ort.",
    },
    desk: {
      eyebrow: "Der Desktop",
      title: "Eine Tür, *und drinnen jedem das Seine*.",
      lead:
        "Das PMS ist das Chrome: die Navigation, die Auswahl von Unternehmen, Objekt und Arbeitsbereich, die globale Suche und das Benachrichtigungszentrum. Die Apps für Zimmer, Buchungen und Revenue leben darin.",
      items: [
        "**Globale Suche** mit Strg/Cmd + K: Buchungen nach Code oder Gast, Objekte, Kategorien, Einheiten und Systemansichten. Sie ist algorithmisch, nicht generativ — sie findet oder sie findet nicht.",
        "**Adaptives Dashboard**: 30 Widgets konkurrieren um drei Plätze je nach aktivem Bereich, und nur die Daten der tatsächlich angezeigten werden angefordert.",
        "**Echtzeit-Benachrichtigungen**, die zum richtigen Detail führen; gehört die Buchung zu einem anderen Objekt, wechselt das System vorher das Objekt.",
        "**Helles, dunkles oder Systemdesign**, mit Akzentfarbe, an die eingebetteten Apps weitergereicht.",
      ],
    },
    catalog: {
      eyebrow: "Der Katalog",
      title: "23 Apps, die sich *ein- und ausschalten*.",
      lead:
        "Eine App wird pro Arbeitsbereich aktiviert, mit einer Stufe: bedienen (Tagesgeschäft), konfigurieren (ändert auch die Einstellungen) oder nichts. Der Verwaltungsbereich sieht den ganzen Katalog, einschließlich später hinzugefügter Apps.",
      hubs: [
        {
          hub: "Buchungen",
          apps: [
            "Tagesübersicht",
            "Alle Buchungen",
            "Manuelle Erfassung",
            "Raten",
            "Verfügbarkeit",
            "Aktionen",
            "Einstellungen der Maschine",
          ],
        },
        {
          hub: "Zimmer",
          apps: ["Zimmerstatus", "Belegungsplan", "Kategorieverwaltung"],
        },
        {
          hub: "Marketing",
          apps: ["Builder", "Websites", "Galerien", "Bewertungen", "Marke", "LinkHub", "Online-Präsenz"],
        },
        { hub: "Analyse", apps: ["Berichte"] },
        { hub: "Revenue", apps: ["Revenue · RMS"] },
        { hub: "Assets", apps: ["Dateibibliothek"] },
        { hub: "Admin", apps: ["Objekte"] },
      ],
    },
    modules: {
      eyebrow: "Modul für Modul",
      title: "Was *jeder Teil* tut.",
      lead:
        "Jedes hat seine Seite mit allen Details. Alle lesen und schreiben dieselben Daten: keine nächtliche Synchronisierung und nichts zu importieren.",
      items: [
        {
          title: "Buchungen und Zimmer",
          desc: "Tagesübersicht, Liste mit Schnellpanel, Tape Chart mit Verschieben und Größenänderung, manuelle Erfassung, Raten mit Preiskette, Verfügbarkeit mit Restriktionen und Aktionen. Auf der anderen Seite das physische Inventar mit sechs Betriebszuständen und Übergangsmatrix.",
        },
        {
          title: "Buchungsmaschine",
          desc: "Suche, Ergebnisse, Detail, Leistungen, Gastdaten und Bestätigung. Mit informativem Kalender, sieben visuellen Konfigurationsblöcken und zwei Bestätigungsmodi. Sie wird in Ihre Website eingebettet oder als eigene Seite genutzt.",
        },
        {
          title: "Revenue · RMS",
          desc: "Analyse mit doppelter Achse — wann gebucht und wann geschlafen wird —, Pace gegen die eigene Historie, Comp-Set mit automatischer Entdeckung, Nachfrage-Events, Regelmaschine mit Trockenlauf und Empfehlungen, die die Rate in die Maschine schieben.",
        },
        {
          title: "Websites und Marke",
          desc: "Visueller Baukasten mit Komponentenbibliothek, an Daten angebundene Fachkomponenten, Mehrsprachigkeit, eigene Domain, Popups, WhatsApp-Button und SEO- und GEO-Editor. Dazu Galerien, Bewertungen, Markenidentität und LinkHub.",
        },
        {
          title: "StayPass",
          desc: "Das Gästeportal: eigenes Konto, meine Buchungen, Detail, Stornierung, Profil mit Ausweis und Nationalität, und Bestätigung per E-Mail-Token. Ein Gast sammelt die Unterkünfte, bei denen er sich registriert hat; jedes Hotel sieht nur die eigene Basis.",
        },
        {
          title: "Berichte",
          desc: "Belegung und Volumen mit Prognose, ADR und RevPAR, Lead Time, durchschnittlicher Aufenthalt, Stornierungen und Last Minute, Produktion nach Kanal, und zwei Abschnitte zur Betriebshygiene, die markieren, was schlecht verwaltet ist — nicht nur, was passiert ist.",
        },
      ],
    },
    ia: {
      eyebrow: "Die verbindende Ebene",
      title: "Der Assistent sieht *das ganze System*, nicht ein Modul.",
      lead:
        "Weil die Daten eine Einheit sind, schafft der Agent in einem Satz, was in einem anderen Stack drei Tabs und zwei Exporte sind: Pace ansehen, eine Rate anpassen und die Aktion auf der Website veröffentlichen.",
      items: [
        "272 Werkzeuge, verteilt auf Buchungen, Raten, Verfügbarkeit, Zimmer, Objekte, Revenue, Marketing, Dateien, Unternehmen und System.",
        "Reiche Antwortblöcke: Buchungs- und Revenue-Karten mit Buttons, die ausführen, unter derselben Berechtigungsprüfung.",
        "Sitzungsverlauf, gefiltert nach dem aktiven Arbeitsbereich.",
      ],
      link: "Bookfer KI ansehen",
    },
    stats: [
      { value: "23", label: "aktivierbare Apps" },
      { value: "30", label: "Widgets des adaptiven Dashboards" },
      { value: "37", label: "geführte Touren" },
      { value: "272", label: "Werkzeuge des Agenten" },
    ],
    ask: "Sie suchten etwas Bestimmtes?",
    askLink: "Fragen Sie uns",
    cta: {
      title: "Schauen Sie *hinein*.",
      lead:
        "Die Einrichtung ist kostenlos und geführt. Wenn Sie es lieber vorher gezeigt bekommen: fragen Sie eine Demo an und wir gehen es mit Ihren Daten durch.",
      steps: [
        "Sie legen Unternehmen und Objekt an.",
        "Sie erfassen Zimmer und Einheiten.",
        "Maschine und Website sind bereit zur Veröffentlichung.",
      ],
    },
  },

  reservas: {
    meta: {
      title: "Buchungen und Zimmer",
      description:
        "Das operative Herz: Tagesübersicht, Tape-Chart-Kalender mit Verschieben und Größenänderung, manuelle Erfassung, Raten, Verfügbarkeit, Aktionen und das physische Inventar mit seinen sechs Zuständen.",
    },
    hero: {
      eyebrow: "Buchungen und Zimmer",
      title: "Das Tagesgeschäft, *in einem Raster*.",
      lead:
        "Acht Ansichten für den kommerziellen Betrieb und drei für das physische Inventar. Alle auf denselben Daten: eine Buchung im Kalender zu verschieben ändert den Zimmerstatus, gibt die Nacht in der Maschine frei und erscheint im Bericht.",
    },
    calendar: {
      eyebrow: "Kalender",
      title: "Sie ziehen die Buchung und *sehen, was passieren wird*, bevor Sie loslassen.",
      lead:
        "Das Raster ist Zimmer mal Tag, nach Kategorie gruppiert. Eine Buchung wird per Ziehen auf ein anderes Zimmer oder andere Daten verschoben, und bevor die Änderung greift, zeigt das System die Vorschau: ob es einen Konflikt gibt und was mit dem Preis passiert.",
      items: [
        "Sperrbalken für Wartung oder interne Nutzung, direkt im Kalender anlegbar und mit derselben Sperre wie eine Buchung.",
        "Detail-Popover per Klick, ohne die Ansicht zu verlassen.",
        "Werkzeugleiste mit Monats- oder Bereichsnavigation, Heute, Suche nach Gast oder Code, Filter nach Kategorie und Status.",
        "Statistiken nach Kategorie und Tag über dem Raster.",
      ],
    },
    views: {
      eyebrow: "Die acht Ansichten",
      title: "Jeder Moment der Schicht, *sein Bildschirm*.",
      items: [
        {
          title: "Tagesübersicht",
          desc: "An- und Abreisen des Tages, mit zwei sichtbaren Tagen und Navigation. Das ist der Bildschirm, mit dem die Rezeption die Schicht öffnet, mit ausführbaren Karten.",
        },
        {
          title: "Alle Buchungen",
          desc: "Liste mit Filtern und einem Seitenpanel, das sich öffnet, ohne die Liste zu verlassen: Zusammenfassung, Aktivität und Notizen. Von dort weist man eine Einheit zu, ändert den Status und bearbeitet interne Notizen.",
        },
        {
          title: "Kalender",
          desc: "Das Tape Chart: Zimmer mal Tag, Verschieben und Größenänderung mit Vorschau, Sperren, Filter und Statistiken.",
        },
        {
          title: "Neue Buchung",
          desc: "Manuelle Erfassung oder Walk-in mit Gastsuche, Kategorie, Daten, Belegung nach Alter, Herkunftskanal, Aktionen und Notizen.",
        },
        {
          title: "Raten",
          desc: "Basispreis pro Kategorie plus Ratenpläne mit Gültigkeit, Preis pro Nacht, Währung, Mindestaufenthalt und Aktivierung.",
        },
        {
          title: "Verfügbarkeit",
          desc: "Raster mit Ampel — frei, teilweise, voll, geschlossen — und Restriktionen pro Tag: geschlossen, Anreise gesperrt, Abreise gesperrt, Mindest- und Höchstaufenthalt.",
        },
        {
          title: "Aktionen",
          desc: "Assistent in drei Schritten, automatisch oder mit Code, nach Prozentsatz, Festbetrag oder Festpreis pro Nacht, mit Restriktionen und ihrer Darstellung auf der öffentlichen Website.",
        },
        {
          title: "Einstellungen der Maschine",
          desc: "Währung, Bestätigung, Aufenthaltsregeln, informativer Kalender, agentische Ebene und Zeiten. Dazu das Buchungsmodell: Verkaufsmodus und Zuweisungsstrategie.",
        },
      ],
    },
    chain: {
      eyebrow: "Preiskette",
      title: "Vier Schritte, *immer in derselben Reihenfolge*.",
      lead:
        "Wenn die Maschine sagen muss, was eine Nacht kostet, löst sie diese Kette auf. Zu wissen, auf welcher Stufe jeder Preis steht, ist der Unterschied zwischen dem System vertrauen und es jeden Morgen von Hand prüfen.",
      stepLabel: "Schritt {n}",
      steps: [
        {
          title: "RMS-Override",
          desc: "Gibt es für dieses Datum eine angenommene Revenue-Empfehlung, hat sie Vorrang.",
        },
        {
          title: "Ratenplan",
          desc: "Der für diese Kategorie und dieses Datum gültige Plan, mit seiner Währung und seinem Mindestaufenthalt.",
        },
        {
          title: "Basispreis",
          desc: "Der der Kategorie. Das berechnet die Maschine, solange Sie keine Raten hinterlegt haben.",
        },
        {
          title: "Aktionen",
          desc: "Sie werden auf den Preis angewendet, der aus den drei vorigen Schritten entstand.",
        },
      ],
    },
    rooms: {
      eyebrow: "Zimmer",
      title: "Das physische Inventar, *mit Zuständen, die nicht lügen*.",
      lead:
        "Sechs Betriebszustände — verfügbar, belegt, Reinigung, Wartung, gesperrt und Abreise ausstehend — und eine Matrix, die festlegt, welcher Übergang gültig ist. Von „belegt“ kommt man nur zu „Abreise ausstehend“: das Board lässt unmögliche Zustände nicht zu.",
      items: [
        "**Zimmerstatus**: Live-Board mit Filtern nach Etage und Kategorie, und ein Detailpanel mit der vollständigen Änderungshistorie — wer, wann und mit welcher Notiz.",
        "**Belegungsplan**: räumliche Ansicht nach Etage mit Datumsnavigation, um das Haus auf einen Blick zu lesen.",
        "**Verwaltung**: Kategorien mit Kapazität, Basispreis, Fotos, Ausstattung und geprüftem Verkaufsmodus; Einheiten mit eindeutigem Code, Etage, eigener Kapazität und **Massenanlage mit Vorschau**.",
      ],
    },
    detail: {
      eyebrow: "Buchungsdetail",
      title: "Alles, was mit dieser Buchung passiert ist, *auf einem Blatt*.",
      items: [
        {
          title: "Statusverlauf",
          desc: "Ausstehend, bestätigt, Check-in, Check-out, dazu storniert und No-Show. Mit den je nach Punkt verfügbaren Aktionen.",
        },
        {
          title: "Gebuchte Leistungen",
          desc: "Spa, Frühstück, später Check-out, mit Menge, Datum und Status. Preis und Bezeichnung frieren beim Buchen ein: eine alte Buchung zeigt weiterhin, was damals berechnet wurde.",
        },
        {
          title: "Beträge in zwei Währungen",
          desc: "Der Betrag in Basiswährung und in Abrechnungswährung, mit lebendiger Umrechnung bis zum Check-in und eingefroren ab da.",
        },
        {
          title: "Feiner Herkunftskanal",
          desc: "Direkt, Telefon oder OTA, mit genauem Bezeichner — booking.com, airbnb, direct-web, phone-front-desk —, damit der Kanalbericht etwas taugt.",
        },
        {
          title: "Notizen und Sonderwünsche",
          desc: "Interne Teamnotizen getrennt von den Wünschen des Gastes, damit niemand das eine mit dem anderen verwechselt.",
        },
        {
          title: "Audit-Protokoll",
          desc: "Jede relevante Änderung wird festgehalten, einschließlich jeder manuellen Betragsanpassung. Da schaut man hin, wenn die Rechnung nicht aufgeht.",
        },
      ],
    },
    faq: [
      {
        q: "Was passiert, wenn zwei Personen gleichzeitig dieselbe Nacht buchen?",
        a: "Eine der beiden scheitert. Jede Nacht jedes Zimmers ist eine **eindeutige Sperre in der Datenbank** — der Schlüssel ist Einheit plus Datum —, deshalb kommt der zweite Schreibvorgang nicht durch. Das ist keine Prüfung im Code, die Nebenläufigkeit umgehen könnte: die Datenbank selbst verhindert es.",
      },
      {
        q: "Kann ich Buchungen erfassen, die per Telefon oder WhatsApp kamen?",
        a: "Ja, und das lohnt sich. Die manuelle Erfassung hat Gastsuche per E-Mail, Auswahl von Kategorie und Daten, Belegung getrennt nach Erwachsenen, Kindern und Babys — Babys zählen weder für Kapazität noch für Preis —, Aktionen und **Herkunftskanal**. Genau dieses letzte Feld sagt Ihnen später, welcher Teil Ihrer Buchungen noch über den Chat hereinkommt.",
      },
      {
        q: "Wie wird entschieden, welches Zimmer jede Buchung bekommt?",
        a: "Das hängt von zwei Achsen ab. Ist die Kategorie eine **einzelne Einheit**, gibt es nur eine Option. Ist es ein Pool, wählt das Objekt zwischen **manueller** Zuweisung — die Buchung bleibt „nicht zugewiesen“ und die Rezeption entscheidet — oder **automatischer**, bei der die Maschine bewertet und wählt, mit optionalen Präferenzen zum Minimieren von Lücken oder Ausgleichen der Abnutzung. Jede Buchung friert den Modus ein, mit dem sie entstand: die Einstellung später zu ändern schreibt die Geschichte nicht um.",
      },
    ],
    cta: {
      title: "Fangen Sie beim *Kalender* an.",
      lead:
        "Sie erfassen die Zimmer einmal und haben schon das Raster, die Maschine und die initialisierte Verfügbarkeit. Der Rest kann kommen, wann Sie wollen.",
      steps: [
        "Sie erfassen Kategorien und Einheiten.",
        "Die Verfügbarkeit initialisiert sich von selbst.",
        "Kalender und Maschine sind einsatzbereit.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Buchungsmaschine",
      description:
        "Die Suche und der Checkout, die Ihr Gast sieht: Kalender mit Preis und verbleibenden Einheiten, sieben konfigurierbare Blöcke ohne Code, zwei Bestätigungsmodi und E-Mails ohne SMTP-Konfiguration.",
    },
    hero: {
      eyebrow: "Buchungsmaschine",
      title: "Der Link, der *das Gespräch ersetzt*.",
      lead:
        "Suche, Ergebnisse, Detail, Leistungen, Gastdaten und Bestätigung. Es ist Ihre Maschine, mit Ihrer Marke, ohne Provision pro Buchung und mit einem Kalender, der dem Gast sagt, was er zum Entscheiden braucht.",
    },
    calendar: {
      eyebrow: "Informativer Kalender",
      title: "Ein Datepicker, der *Fragen beantwortet*.",
      lead:
        "Der übliche Kalender fragt zwei Daten ab und das war's. Der der Maschine zeigt Tag für Tag — und nach dem, was Sie freigeben — alles, was die Person vor dem Buchen per WhatsApp gefragt hätte.",
      items: [
        "**Preis ab** an jedem Tag, aufgelöst über die echte Preiskette: RMS-Override, Ratenplan, Basispreis und Aktionen.",
        "**Verbleibende Einheiten** — das ehrlichste Knappheitssignal, das es gibt: es ist Ihr Inventar, kein erfundener Zähler.",
        "**Kennzeichen** für geschlossene Tage, Anreise gesperrt und Abreise gesperrt, markiert dort, wo man hinsieht.",
        "**Hinweis auf den Mindestaufenthalt** bei der Wahl der Anreise, damit niemand erst am Ende des Checkouts davon erfährt.",
        "Ein Hauptschalter schaltet alles ab und es wird wieder ein gewöhnlicher Datepicker. Er gehört Ihnen, nicht uns.",
      ],
    },
    studio: {
      eyebrow: "Engine Studio",
      title: "Sieben Blöcke, *ohne Code*.",
      lead:
        "Jeder Bildschirm des Ablaufs hat seinen Konfigurationsblock, mit Texten, Beschriftungen und Stilen. Die Änderungen greifen in der Maschine, ohne die Website neu zu veröffentlichen.",
      items: [
        { title: "Suche", desc: "Die Einstiegssuche: Felder, Beschriftungen und was zuerst abgefragt wird." },
        {
          title: "Kalender",
          desc: "Der Hauptschalter und was der Gast pro Tag sieht: Preise, Einheiten, Kennzeichen und Hinweise.",
        },
        {
          title: "Gäste",
          desc: "Wie Erwachsene, Kinder und Babys abgefragt werden. Babys zählen weder für Kapazität noch für Preis.",
        },
        {
          title: "Liste",
          desc: "Wie die verfügbaren Kategorien präsentiert werden und welche Information jede begleitet.",
        },
        {
          title: "Detail",
          desc: "Das Datenblatt der Kategorie oder Einheit, mit Fotos, Ausstattung und Beschreibung.",
        },
        {
          title: "Leistungen",
          desc: "Die Extras, die vor dem Bezahlen angeboten werden, mit Zeitfenster und Mindestvorlauf.",
        },
        { title: "Checkout", desc: "Das Abschlussformular: welche Daten abgefragt werden und mit welchen Rechtstexten." },
        {
          title: "Erfolgsbildschirm",
          desc: "Was der Gast am Ende sieht — dort entscheidet sich, ob er Ihnen wieder schreibt oder nicht.",
        },
      ],
    },
    agentic: {
      eyebrow: "Agentische Ebene",
      title: "Und *eine Maschine kann es auch lesen*.",
      lead:
        "Mit aktivierter agentischer Ebene veröffentlicht die Buchungsmaschine ihr Inventar in Formaten, die für Sprachmodelle gedacht sind, nicht nur für Browser. Das ist eine ausdrückliche Produktwette auf die generative Suche.",
      items: [
        "`llms.txt` — die Beschreibung der Unterkunft in reinem Text.",
        "`availability.json` — die maschinenlesbare Verfügbarkeit.",
        "`engine-capabilities.json` — welche Vorgänge die Maschine akzeptiert.",
        "Strukturiertes JSON-LD in den Seiten der Website.",
      ],
      link: "Die ganze agentische Ebene ansehen",
    },
    after: {
      eyebrow: "Nach dem Checkout",
      title: "Die Buchung kommt herein *und das System macht allein weiter*.",
      items: [
        {
          title: "Die Einheit wird zugewiesen",
          desc: "Je nach Modell des Objekts: die einzig mögliche Einheit bei 1:1, die von der Maschine gewählte bei automatischem Pool, oder keine, wenn die Rezeption entscheiden soll.",
        },
        {
          title: "Die E-Mail geht raus",
          desc: "Von der bookfer-Domain, mit Ihrem Postfach als Antwortadresse. Ohne SMTP-Konfiguration, ohne verifizierte Domain, ohne einen weiteren Mailanbieter auf der Liste.",
        },
        {
          title: "Die Suche wird protokolliert",
          desc: "Einschließlich der Suchen **ohne Verfügbarkeit**, der wertvollsten: sie speisen den Nachfrageindex des RMS und den Conversion-Funnel.",
        },
      ],
      stats: [
        { value: "0 %", label: "Provision auf Buchungen der Maschine" },
        { value: "10", label: "Währungen, mit blue, MEP, CCL oder offiziell für ARS" },
        { value: "2", label: "Bestätigungsmodi, mit automatischem Ablauf" },
      ],
    },
    distribute: {
      eyebrow: "Wohin der Link gehört",
      title: "Auf Ihre Website, in Ihre Bio und *in den Chat*.",
      lead:
        "Die Maschine ist eine Oberfläche, keine Seite. Sie geht eingebettet in die Website, die Sie mit dem Builder bauen, als eigene Seite, oder als Hauptbutton Ihres LinkHub: die Link-in-Bio-Seite, die Sie auf Instagram setzen, mit herunterladbarem QR.",
      items: [
        "Builder-Komponente, die sich selbst mit Ihrem Inventar verbindet.",
        "Eigene Seite mit der URL Ihrer Unterkunft.",
        "„Buchen“-Block im LinkHub, mit Auswertung von Aufrufen und Klicks.",
        "Schwebender WhatsApp-Button auf der Website, mit vorbereiteter Nachricht, für alle, die trotzdem lieber schreiben.",
      ],
    },
    faq: [
      {
        q: "Kommt die Maschine in meine Website oder ist sie eine eigene Seite?",
        a: "Beides. Sie wird als Komponente in die Website eingebettet, die Sie mit dem Builder bauen, und existiert zusätzlich als eigene Seite unter `/ihre-unterkunft`. Wenn Sie noch keine Website haben, ist der Link der Maschine bereits etwas, das Sie per WhatsApp schicken oder in die Instagram-Bio setzen können.",
      },
      {
        q: "Kann ich Texte und Farben des Checkouts ändern?",
        a: "Ja, im Engine Studio und **ohne Code und ohne die Website neu zu veröffentlichen**. Es sind sieben konfigurierbare Blöcke: Suche, Kalender, Gäste, Liste, Detail, Leistungen, Checkout und Erfolgsbildschirm, jeder mit seinen Texten, Beschriftungen und Stilen.",
      },
      {
        q: "Wer bestätigt die Buchung?",
        a: "Das wählen Sie. In einem Modus entsteht die Buchung als ausstehend und **der Gast bestätigt** sie über einen Token-Link, der per E-Mail kommt. Im anderen bleibt sie ausstehend, bis **die Rezeption sie annimmt**. In beiden Fällen laufen ausstehende Buchungen nach der von Ihnen eingestellten Zeit von selbst ab: so bleiben keine Nächte blockiert von jemandem, der nie zurückkam.",
      },
      {
        q: "Muss ich einen Mailserver einrichten?",
        a: "Nein. Alle Gast-E-Mails gehen von der bookfer-Domain aus, mit dem Postfach der Unterkunft als **Antwortadresse**. Das ist eine bewusste Entscheidung: SMTP pro Hotel einzurichten ist eine der klassischen Reibungen beim Einrichten eines PMS, und hier gibt es sie schlicht nicht.",
      },
    ],
    cta: {
      title: "Setzen Sie Ihren Buchungslink *in die Bio*.",
      lead:
        "Sie erfassen die Zimmer und die Maschine ist mit initialisierter Verfügbarkeit einsatzbereit. Website und LinkHub kommen später, wann Sie wollen.",
      steps: [
        "Sie erfassen Kategorien, Einheiten und Preise.",
        "Sie konfigurieren die Maschine im Studio.",
        "Sie teilen den Link und verlieren keine Anfragen mehr im Chat.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue · RMS",
      description:
        "Revenue Management inklusive: Pace gegen die eigene Historie, Comp-Set mit automatischer Entdeckung, Nachfrage-Events, Regelmaschine mit Trockenlauf und Empfehlungen, die die Rate in die Maschine schieben.",
    },
    hero: {
      eyebrow: "Revenue · RMS",
      title: "Ein Preisvorschlag, *den man prüfen kann*.",
      lead:
        "Acht Revenue-Management-Reiter, eingebettet im Desktop: Analyse mit doppelter Achse, Pace gegen die eigene Historie, Comp-Set, Nachfrage-Events, eine Regelmaschine mit Trockenlauf, und ein Entscheidungsdokument pro Datum, das jede Zahl erklärt.",
    },
    decision: {
      eyebrow: "Entscheidungen",
      title: "Die Antwort auf *„warum schlägst du mir das vor?“*",
      lead:
        "Es gibt ein Dokument pro Objekt und pro Datum mit der vollständigen Spur: welche Eingaben die Maschine gesehen hat, wie die Basisrate war, welche sie vorschlug, welche Regeln zutrafen, ob eine Grenze griff, und ein lesbares Protokoll Zeile für Zeile.",
      items: [
        "Belegung, Nachfrageindex, Verfügbarkeit, Mitbewerberraten, Pickup und Events: alles, was in die Rechnung einging, mit seinem Wert.",
        "Welche Regel zutraf und in welcher Reihenfolge, denn die letzte gewinnt.",
        "Ob die Mindest- oder Höchstgrenze griff, und welche das war.",
        "Der Lebenszyklus der Empfehlung: vorgeschlagen, angenommen oder abgelehnt, angewendet, von wem und wann.",
      ],
    },
    rules: {
      eyebrow: "Szenarien",
      title: "Dreizehn Variablen, *und ein Trockenlauf*.",
      lead:
        "Jede Regel bewertet eine Variable gegen einen Referenzwert, innerhalb eines Vorlauffensters, und wendet eine Aktion an. Sie werden der Reihe nach ausgewertet, die letzte passende gewinnt. Vor dem Aktivieren zeigt der Trockenlauf, was sie getan hätte.",
      items: [
        "**Variablen**: Belegung, Nachfrageindex, Verfügbarkeit, Rate Mitbewerber 1 bis 5, Pickup 7T, Pickup 30T, Event-Wirkung, Tage bis zum nächsten Event und Pace-Index.",
        "**Operatoren**: größer, größer oder gleich, gleich, kleiner oder gleich, kleiner.",
        "**Aktionen**: prozentuale Anpassung auf die Basis, oder Wechsel des Ratenplans.",
        "**Grenzen** für Mindest- und Höchstrate, die nach allem anderen greifen.",
      ],
    },
    comp: {
      eyebrow: "Mitbewerber",
      title: "Ein *gemischtes und ehrliches* Comp-Set.",
      lead:
        "Mitbewerber, die ebenfalls bookfer nutzen, liefern eine echte Rate. Externe werden über Nähe und Ähnlichkeitswert selbst entdeckt, und ihre Rate erfassen Sie — als feste Referenz oder pro Datum, was Vorrang hat.",
      items: [
        "Ähnlichkeitswert nach Typ, Kategorie, Größe, Segment und Gebiet.",
        "Profil Ihres eigenen Hotels, aus dem PMS synchronisiert, sofern Sie es nicht manuell überschreiben.",
        "Raster der Mitbewerberraten pro Datum.",
        "Vorbereitet für Lighthouse, RateGain, PriceLabs und KeyData; heute nicht angebunden.",
      ],
    },
    rest: {
      eyebrow: "Die anderen Reiter",
      title: "Alles, was es *neben dem Preis* gibt.",
      items: [
        {
          title: "Analyse mit doppelter Achse",
          desc: "Erstellungsachse — wann gebucht wurde — mit direktem und OTA-Umsatz, Stornierungen, Vorlaufzeit, Suchen und Pickup. Aufenthaltsachse — wann geschlafen wird — mit Belegung, ADR, RevPAR und Umsatz. Viele Systeme mischen beide und stiften Verwirrung.",
        },
        {
          title: "Pace",
          desc: "Verkaufstempo gegen das historische Verhalten Ihres eigenen Objekts, getrennt nach Wochentag, Monat und Vorlauf-Bucket. Mit Kurve, Pickup und Warnungen bei schnellem oder langsamem Verkauf mit einstellbaren Schwellen.",
        },
        {
          title: "Events",
          desc: "Feiertage, Messen, Konzerte und Sport, automatisch eingelesen und von Ihnen kuratiert: vorgeschlagen, genehmigt oder verworfen. Ein genehmigtes Event wird durch erneutes Einlesen nicht überschrieben. Mit Relevanzwert und erwarteter Wirkung.",
        },
        {
          title: "Empfehlungen",
          desc: "Aktuelle Rate, Vorschlag, Delta und Begründung. Vollständiger Lebenszyklus: vorgeschlagen, angenommen oder abgelehnt, angewendet, abgelaufen oder ersetzt, mit Verantwortlichem und Datum.",
        },
        {
          title: "Nachfragesignale",
          desc: "Neben den Buchungen nimmt der Nachfrageindex die Suchen der Maschine auf, auch die ohne Verfügbarkeit — das am meisten unterschätzte Signal einer kleinen Unterkunft.",
        },
        {
          title: "Einstellungen",
          desc: "Comp-Set, aus dem PMS synchronisierter Standort mit manueller Überschreibung, Hotelprofil, Pace-Schwellen, Radius und Horizont der Events, und Ratengrenzen.",
        },
      ],
    },
    faq: [
      {
        q: "Ich habe wenig Historie. Nützt mir das RMS trotzdem?",
        a: "Ja, aber es sagt es Ihnen. Der Pace-Benchmark wird aus **Ihrer eigenen Historie** gebaut, gruppiert nach Wochentag, Monat und Vorlauf-Bucket, und die Oberfläche **zeigt die Stichprobengröße**. Wurde eine Zelle aus drei Buchungen berechnet, sehen Sie das. Das ist uns lieber, als Ihnen eine selbstsichere Kurve auf Basis von nichts zu zeigen.",
      },
      {
        q: "Woher kommen die Raten der Mitbewerber?",
        a: "Aus zwei Quellen. Nutzt der Mitbewerber ebenfalls bookfer, ist die Rate echt. Ist er extern, **entdeckt ihn das System selbst** über Geolokalisierung und Ähnlichkeitswert — Typ, Kategorie, Größe, Segment, Gebiet —, aber **die Rate erfassen Sie**, als feste Referenz oder pro Datum. Die Anbindung an automatische Anbieter ist vorbereitet und noch nicht verbunden; wir behaupten nichts anderes, bevor sie es ist.",
      },
      {
        q: "Wenn ich eine Empfehlung annehme, muss ich den Preis woanders eintragen?",
        a: "Nein. Beim Annehmen **schiebt die Empfehlung einen Raten-Override in die Buchungsmaschine**, der zu Schritt 0 der Preiskette wird. Der Kreislauf schließt sich im System. In den meisten Stacks ist dieser Schritt eine Person, die eine Zahl von einem Bildschirm in einen anderen überträgt.",
      },
      {
        q: "Ist es enthalten oder kostet es extra?",
        a: "Das hängt vom Tarif ab. In den großen Systemen ist das RMS fast immer ein separat berechnetes Zusatzmodul; hier ist es ein Produkt im Katalog wie jedes andere. [Sehen Sie sich die Tarife an](/precios), um zu erfahren, in welchem es enthalten ist.",
      },
    ],
    cta: {
      title: "Der Preis *hört auf, ein Bauchgefühl zu sein*.",
      lead:
        "Das RMS nützt, sobald Sie eigene Historie haben — und solange nicht, sagt es Ihnen das ins Gesicht, statt eine Kurve zu erfinden.",
      steps: [
        "Sie erfassen Inventar und Basisraten.",
        "Sie bauen das Comp-Set und genehmigen die Events Ihrer Region.",
        "Sie schreiben zwei, drei Regeln und testen sie trocken.",
      ],
    },
  },

  sitios: {
    meta: {
      title: "Website und Marke",
      description:
        "Visueller Baukasten mit eigener Domain und Mehrsprachigkeit, an Ihre Daten angebundene Komponenten, LinkHub für die Instagram-Bio, Markenidentität, Galerien und Bewertungen.",
    },
    hero: {
      eyebrow: "Website, Marke und LinkHub",
      title: "Ihre digitale Präsenz, *vom selben System bedient*.",
      lead:
        "Der Baukasten setzt die Website aus Komponenten zusammen, die sich selbst mit Ihrem Inventar verbinden, und der Renderer veröffentlicht sie auf Ihrer Domain. Daneben leben Markenidentität, Galerien, Bewertungen und der LinkHub für die Instagram-Bio.",
    },
    builder: {
      eyebrow: "Builder",
      title: "Ein visueller Editor mit *Komponenten, die Hotellerie kennen*.",
      lead:
        "Arbeitsfläche mit Ziehen und Ablegen, direktes Bearbeiten im Text, Kontextmenüs und eine nach Familien geordnete Komponentenbibliothek. Was ihn von einem generischen Baukasten unterscheidet, ist die andere Hälfte: die Fachkomponenten.",
      items: [
        "**Eingebettete Buchungsmaschine**, Zimmerkarten, Kategorien, Galerien, Aktionen, Bewertungen und Leistungen: alle an lebende Daten angebunden.",
        "**Stil-Editor** seitlich mit Typografie, Farbe, Abständen und Effekten, dazu ein CSS-Editor für Fortgeschrittene.",
        "**Integrierter Bildeditor** — Zuschnitt, Filter, Anpassungen — und ein Rich-Text-Editor.",
        "**KI-Assistent des Builders** mit Streaming, um Abschnitte zu erzeugen und zu bearbeiten.",
        "**Einfacher oder erweiterter Modus** pro Subsite, Entwürfe und ausdrückliches Veröffentlichen, Vorschau in mehreren Größen.",
      ],
    },
    published: {
      eyebrow: "Die veröffentlichte Website",
      title: "Was *der Gast* sieht.",
      items: [
        {
          title: "Eigene Domain",
          desc: "Eigene Hostnamen pro Subsite, mit Registrierung und Auflösung. Jede Sprachvariante kann ihren eigenen haben.",
        },
        {
          title: "Echte Mehrsprachigkeit",
          desc: "Routen pro Sprache mit eigenem Titel, eigener Beschreibung, eigenem Titelbild, Favicon und Social-Vorschau. Seiten, keine maschinelle Übersetzung.",
        },
        {
          title: "Popups",
          desc: "Fünf Formate — Modal, Slide-in, Toast, Banner und Vollbild — mit Vorlagen, Auslösern, Seitenregeln, Priorität und Frequenzsteuerung pro Besucher.",
        },
        {
          title: "WhatsApp-Button",
          desc: "Schwebend, mit visuellem Preset, Ecke, Größe, Farben und vorbereiteter Nachricht. Die Nummer kommt aus dem Objekt.",
        },
        {
          title: "Auswertung",
          desc: "Google Analytics und Google Tag Manager pro Subsite, mit Erhalt der UTMs von der Kampagne bis zur Buchung.",
        },
        {
          title: "Gästekonto",
          desc: "Login, Registrierung und Wiederherstellung, an StayPass angebunden, damit der Gast seine Buchungen auf Ihrer Website sieht und storniert.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO und GEO",
      title: "Für Suchmaschinen *und für Modelle*.",
      lead:
        "Der Editor deckt klassisches SEO ab — Titel, Beschreibung, Titelbild, Favicon, Social-Vorschau, Apple-Icon — und ergänzt eine Ebene, damit ein Sprachmodell Ihre Unterkunft versteht, ohne dass jemand die Website besucht.",
      items: [
        "Entitätstyp, Name und Beschreibung, Kategorien, Anwendungsfälle und Problemfelder.",
        "Zielgruppen und geografische Reichweite.",
        "Vertrauenssignale: Jahre aktiv, Anzahl Kunden, Zertifizierungen und Referenzkunden.",
        "Pro Seite: Intention, Thema, semantischer Kontext und verwandte Entitäten.",
      ],
      link: "Die agentische Ebene ansehen",
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "Die Seite, die *in die Bio* gehört.",
      lead:
        "Ein Link-in-Bio für Unterkünfte, kein generisches mit einem „Buchen“-Button, der zu einem Formular führt. Zehn Blocktypen, eigenes Design und eigene Auswertung.",
      items: [
        "**Blöcke**: Link, WhatsApp, Buchen, Bewertungen, Text, Galerie, Video, Karte, Kontakt und Trenner. Jeder mit Titel, Untertitel, Icon, Vorschaubild, Reihenfolge, Hervorhebung und **Terminplanung**.",
        "**Design**: Themenvorlagen, hell und dunkel, einfarbiger Hintergrund, Verlauf, Bild oder Muster, sieben Buttonstile, Ecken und Typografie — einschließlich jeder Google Font.",
        "**Teilen**: Link und **herunterladbarer QR-Code** zum Ausdrucken an der Rezeption oder auf der Karte.",
        "**Auswertung**: Aufrufe und Klicks nach Tag, Land, Verweis und Gerät, ohne IP und ohne User-Agent. Die Bezeichnungen werden getrennt gespeichert, damit das Umbenennen eines Blocks die Historie nicht zerstört.",
      ],
    },
    around: {
      eyebrow: "Drumherum",
      title: "Was all das *speist*.",
      items: [
        {
          title: "Markenidentität",
          desc: "Logo, dunkles Logo, Hero, Hintergrund und vier Fotos; Palette mit automatischer Extraktion aus dem Logo; Tonalität, Typografie, Claim, Geschichte, Zielgruppen, Standortkontext und öffentlicher Kontakt. Ein einziges Datenblatt, das Website, Maschine, LinkHub und die OTA-Einträge speist.",
        },
        {
          title: "Galerien",
          desc: "Mediengalerien des Objekts und der Zimmer, mit Titelbild, Reihenfolge, Beschreibung, Bildern und Videos. Genutzt von Website, LinkHub und den Einträgen.",
        },
        {
          title: "Bewertungen",
          desc: "Eigene und externe, mit Autor, Note, Text, Datum, Sprache und Link. Hotelantwort, Massenimport per CSV mit Deduplizierung, und Statistiken, die die Widgets und die Website-Komponenten speisen.",
        },
        {
          title: "Dateibibliothek",
          desc: "Ablage für Bilder, Videos, Audios und Dokumente des Unternehmens, mit verschachtelten Ordnern und Tags. Eingebettete Apps können sie öffnen und die gewählte Datei erhalten.",
        },
        {
          title: "Vorlagen mit Autoausfüllung",
          desc: "Aus einer Subsite wird eine Vorlage erstellt, die füllbaren Stellen werden extrahiert, und „Erzeugen“ baut eine neue Website mit den echten Daten der Unterkunft.",
        },
        {
          title: "Online-Präsenz",
          desc: "Prüfbarer Sichtbarkeitswert, erklärte Verbindungen zu sozialen Netzwerken, Google-Business-Eintrag und OTA-Einträge. Heute aus dem Menü ausgeblendet und ohne API-Veröffentlichung: bearbeiten und ans Ziel kopieren.",
        },
      ],
    },
    faq: [
      {
        q: "Muss ich meine Zimmer zweimal erfassen, einmal für die Website?",
        a: "Nein, und genau darum geht es. Die Fachkomponenten des Builders — eingebettete Maschine, Zimmerkarten, Kategorien, Galerien, Aktionen, Bewertungen und Leistungen — **verbinden sich selbst mit den bereits erfassten Daten**. Laden Sie ein neues Foto in eine Kategorie, erscheint es auf der Website, ohne dass jemand etwas anfasst.",
      },
      {
        q: "Kann ich die Website in mehreren Sprachen haben?",
        a: "Ja. Jede Website hat Sprachvarianten, und jede Variante hat eigene URL, eigenen Titel, eigene Beschreibung, eigene Domain, eigenes Titelbild, Favicon und Social-Vorschau. Das ist kein maschineller Übersetzer über einer Seite: das sind Seiten.",
      },
      {
        q: "Ich kann nicht gestalten. Wird es trotzdem ansehnlich?",
        a: "Dafür gibt es die Vorlagen mit Autoausfüllung: eine Website dient als Modell, die füllbaren Stellen werden extrahiert, und „Erzeugen“ baut eine neue mit **Ihren echten Daten** — Marke, Fotos, Zimmer und Leistungen. Außerdem starten neue Websites im einfachen Modus, mit ausgeblendeten Fortgeschrittenen-Reglern, bis Sie sie suchen.",
      },
    ],
    cta: {
      title: "Ihre Website und Ihr Link, *am selben Nachmittag*.",
      lead:
        "Wenn Sie Marke und Zimmer bereits erfasst haben, ist die Website aus einer Vorlage eine Sache von Minuten, und der LinkHub füllt sich mit den Daten des Objekts.",
      steps: [
        "Sie erfassen Markenidentität und Fotos.",
        "Sie erzeugen die Website aus einer Vorlage.",
        "Sie veröffentlichen auf Ihrer Domain und bauen den LinkHub.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Bookfer KI",
      description:
        "Ein Assistent mit 272 Werkzeugen, der das PMS mit den echten Berechtigungen des Nutzers abfragt und bedient: Filter vor dem Zug, Kontext im Prompt und Prüfung bei jedem Aufruf.",
    },
    hero: {
      eyebrow: "Bookfer KI",
      title: "Ein Assistent, der *macht*, nicht einer, der erklärt, wo man klickt.",
      lead:
        "Er ist im Desktop eingebettet, hat dauerhafte Sitzungen und 272 Werkzeuge, die praktisch die gesamte Oberfläche des Produkts abdecken. Er prüft Verfügbarkeit, legt Buchungen an, verschiebt einen Aufenthalt mit Vorschau, passt Raten an, genehmigt Events oder veröffentlicht eine Website.",
    },
    perms: {
      eyebrow: "Berechtigungen",
      title: "Er handelt mit *Ihren* Berechtigungen, nicht mit eigenen.",
      lead:
        "Das ist der heikle Punkt jedes Agenten in einem Verwaltungssystem, und er ist in drei Ebenen gelöst, die zu verschiedenen Zeitpunkten greifen.",
      items: [
        "**Vor dem Zug** — die Werkzeuge werden nach Ihrem echten Umfang gefiltert. Was Sie nicht nutzen dürfen, wird dem Modell gar nicht erst angeboten.",
        "**Im Prompt** — ihm wird erklärt, welche Rolle Sie haben, auf welche Apps Sie Zugriff haben und auf welche nicht, welche Fähigkeiten, welche Objekte, und wie zu antworten ist, wenn etwas gesperrt ist.",
        "**Bei jedem Aufruf** — der konkrete Vorgang wird gegen eine Richtlinientabelle je Dienst geprüft, die spiegelt, was die echten Dienste verlangen, und **die Lücken schließt**, wo das Backend laxer ist als die Oberfläche.",
        "**Mit Ihrer Identität** — die Ausführung nutzt eine kurzlebige Berechtigung, die auf Ihren Namen ausgestellt und bei jedem Aufruf erneuert wird.",
      ],
    },
    tools: {
      eyebrow: "272 Werkzeuge",
      title: "Praktisch *die ganze* Oberfläche des Produkts.",
      lead:
        "Das ist kein Chatbot mit drei Demo-Aktionen. Sie sind nach Domäne gruppiert, und es gibt zusätzlich rohe Lese- und Schreibwerkzeuge für Endpunkte ohne eigenes Werkzeug.",
      items: [
        {
          title: "Buchungen",
          desc: "Verfügbarkeit prüfen, Buchung anlegen, Status ändern, Einheit zuweisen, entziehen und automatisch zuweisen, mit Vorschau verschieben, Notizen, Betragsanpassung, Zusatzleistungen, Gastsuche und Stammgäste.",
        },
        {
          title: "Raten und Aktionen",
          desc: "Ratenpläne und Aktionen auflisten, anlegen, aktualisieren und löschen sowie aktivieren oder deaktivieren.",
        },
        {
          title: "Verfügbarkeit",
          desc: "Initialisieren, synchronisieren, Restriktionen pro Tag und Zimmersperren.",
        },
        {
          title: "Zimmer",
          desc: "Zimmerstatus, vollständige Einheiten und Kategorien, Historie, Massenanlage, Prüfung des Verkaufsmodells und Autokorrektur.",
        },
        {
          title: "Revenue",
          desc: "Dashboard, Tagesreihen, Buchungsfenster, Pace, Nachfragesignale, Regeln mit Trockenlauf, Entscheidungen, Empfehlungen, Events und Mitbewerber.",
        },
        {
          title: "Marketing",
          desc: "Websites — anlegen, veröffentlichen, duplizieren, Seiten, Sprachen, SEO und GEO, Popups, Engine Studio —, Galerien, Bewertungen, LinkHub und Online-Präsenz.",
        },
        {
          title: "Unternehmen und Nutzer",
          desc: "Profil, Nutzer, Einladungen, Rollen, Status, Zugriffe und Suche per E-Mail.",
        },
        {
          title: "System",
          desc: "Globale Suche, Benachrichtigungen und Dashboard-Design. Dazu die gesamte Dateibibliothek mit Ordnern und Dateien.",
        },
      ],
    },
    experience: {
      eyebrow: "Die Erfahrung",
      title: "Sie sehen, *was er tut*, während er es tut.",
      lead:
        "Die Antwort kommt im Streaming, mit dem Protokoll des Zuges im Blick. Kein Spinner und dann ein Absatz: es ist die Liste der Vorgänge mit ihrem Ergebnis, während sie passieren.",
      items: [
        "Reiche Antwortblöcke: Buchungs- und Revenue-Karten und ausführbare Listen, nicht nur Text.",
        "Buttons in den Karten, die Vorgänge ausführen, mit derselben Berechtigungsprüfung.",
        "Feedback-Erfassung im Gespräch, damit das, was nicht funktioniert hat, den erreicht, der es behebt.",
        "Sitzungsverlauf, gefiltert nach aktivem Arbeitsbereich: die Rezeption sieht die Gespräche des Marketings nicht.",
      ],
    },
    stats: [
      { value: "272", label: "verfügbare Werkzeuge" },
      { value: "3", label: "Ebenen der Berechtigungsprüfung" },
      { value: "10", label: "ausdrückliche Ablehnungscodes" },
      { value: "1", label: "Identität: Ihre, mit kurzlebiger Berechtigung" },
    ],
    why: {
      eyebrow: "Warum er hier mehr kann",
      title: "Weil er *das ganze System* sieht, nicht ein Modul.",
      lead:
        "Ein Assistent, der an ein einziges Produkt gebunden ist, kann über dieses Produkt Auskunft geben. Da die Daten hier eine Einheit sind, kreuzt ein Satz Dinge, die in einem anderen Stack drei Tabs und zwei Exporte wären.",
      items: [
        "„Wie läuft das lange Wochenende im Vergleich zum Vorjahr?“ — er schaut auf den **Pace** gegen Ihre eigene Historie.",
        "„Erhöhe die Doppelzimmer am Samstag um 10 % und sag mir, ob das über dem Comp-Set liegt“ — er ändert **Raten** und fragt **Mitbewerber** ab.",
        "„Veröffentliche die Last-Minute-Aktion auf der Website“ — er legt die **Aktion** an und veröffentlicht die **Website**.",
        "„Wer reist heute an und hat kein Zimmer zugewiesen?“ — er kreuzt **Buchungen** und **Einheiten**.",
      ],
    },
    faq: [
      {
        q: "Was passiert, wenn ich etwas verlange, das mein Benutzer nicht darf?",
        a: "Er erklärt die fehlende Berechtigung, er sagt nicht, die Funktion gebe es nicht. Es gibt ausdrückliche Ablehnungscodes — Rolle unzureichend, Fähigkeit fehlt, kein aktiver Bereich, App-Zugriff unzureichend, Objekt außerhalb des Umfangs, Passwortwechsel erforderlich, unter anderem — und der Assistent übersetzt, welcher es war. Der Unterschied zählt: „Sie haben keine Berechtigung“ klärt man mit dem Admin, „gibt es nicht“ schickt Sie zu einem anderen System.",
      },
      {
        q: "Hat der Assistent vollen Zugriff auf das System?",
        a: "Er hat überhaupt keinen eigenen Zugriff. Wenn er etwas ausführt, tut er es, indem er **Ihre echte Identität annimmt**, mit einer kurzlebigen Berechtigung, die bei jedem Aufruf neu ausgestellt wird. Wird Ihre Mitgliedschaft mitten im Gespräch entzogen, scheitert der nächste Vorgang und der Assistent erklärt es. Dahinter steht kein Servicekonto mit Superkräften.",
      },
      {
        q: "Sieht man, was er getan hat, oder muss man vertrauen?",
        a: "Man sieht es. Jeder Zug zeigt das Protokoll: welches Werkzeug er benutzt hat, mit welchen Parametern und was zurückkam. Und die Antworten sind nicht nur Text: sie kommen als Buchungs- oder Revenue-Karten mit Buttons, die ausführen — unter derselben Berechtigungsprüfung wie alles andere.",
      },
    ],
    cta: {
      title: "Testen Sie ihn mit *Ihren eigenen Daten*.",
      lead:
        "Der Assistent nützt wirklich, wenn ein befülltes System darunterliegt. Beginnen Sie mit der Einrichtung, erfassen Sie ein Objekt und fragen Sie ihn etwas, das Sie heute mit vier offenen Tabs lösen würden.",
      steps: [
        "Sie melden sich an und erfassen das Objekt.",
        "Sie öffnen Bookfer KI vom Desktop aus.",
        "Sie fragen etwas Echtes und sehen sich das Protokoll an.",
      ],
    },
  },

  agentes: {
    meta: {
      title: "Agentische Unterkunft",
      description:
        "llms.txt, availability.json, engine-capabilities.json, JSON-LD und ein GEO-Editor: was es braucht, damit ein Sprachmodell Ihre Unterkunft versteht und buchen kann.",
    },
    hero: {
      eyebrow: "Agentische Unterkunft",
      title: "Damit eine Maschine Sie *verstehen und buchen* kann.",
      lead:
        "Immer mehr Leute fragen erst ein Modell, bevor sie suchen. Dieses Modell sieht Ihr Fotokarussell nicht: es sieht Text, strukturierte Daten und Routen. Die Maschine von bookfer veröffentlicht alle drei, und der GEO-Editor lässt Sie mit Ihren Worten erklären, was Sie sind.",
      secondary: "Buchungsmaschine ansehen",
    },
    shift: {
      eyebrow: "Der Wandel",
      title: "Die Anfrage *beginnt nicht mehr in einer Suchmaschine*.",
      lead:
        "Früher hieß die Frage „Hütten in Villa La Angostura“ und die Antwort waren zehn blaue Links. Heute heißt sie „wo übernachte ich vier Nächte mit zwei Kindern und einem Hund, keine dreißig Minuten vom Zentrum?“ und die Antwort ist ein Absatz mit zwei, drei Namen. In diesem Absatz zu stehen hängt davon ab, dass es etwas von Ihnen gibt, das sich lesen lässt.",
      headOld: "Was klassisches SEO optimiert",
      headNew: "Was die agentische Ebene ergänzt",
      rows: [
        { old: "Titel und Beschreibung für das Ergebnis", now: "Beschreibung der Entität, in reinem Text" },
        { old: "Titelbild für den Klick", now: "Echte maschinenlesbare Verfügbarkeit" },
        { old: "Schlüsselwörter auf der Seite", now: "Anwendungsfälle, Zielgruppen und geografische Reichweite" },
        { old: "Eingehende Links", now: "Erklärte und überprüfbare Vertrauenssignale" },
        { old: "Ein Kontaktformular", now: "Eine Buchungsroute, der ein Agent folgen kann" },
      ],
    },
    surfaces: {
      eyebrow: "Die vier Oberflächen",
      title: "Was *Ihre Maschine* veröffentlicht.",
      lead:
        "Es wird mit einem Schalter in den Einstellungen der Maschine aktiviert. Ab da hat Ihre Unterkunft neben dem Gesicht für Menschen auch eines für Maschinen.",
      items: [
        {
          title: "llms.txt",
          desc: "Wer Sie sind, was Sie verkaufen und wie man bucht, in reinem Text ohne Markup. Es ist die Datei, die ein Modell ganz lesen kann, ohne Tokens für HTML zu verbrauchen.",
        },
        {
          title: "availability.json",
          desc: "Ihre echte Verfügbarkeit, in einem Format, das eine Maschine abfragen kann. Kein Formular zum Ausfüllen: die Daten selbst.",
        },
        {
          title: "engine-capabilities.json",
          desc: "Welche Vorgänge Ihre Maschine akzeptiert und mit welchen Parametern. Das ist der Unterschied, ob ein Agent weiß, dass es Sie gibt, oder weiß, wie er Sie bucht.",
        },
        {
          title: "JSON-LD in den Seiten",
          desc: "Strukturierte Daten auf der veröffentlichten Website — das lesen klassische Suchmaschinen bereits, und Modelle ebenfalls, wenn sie die Seite besuchen.",
        },
      ],
    },
    editor: {
      eyebrow: "GEO-Editor",
      title: "Sie erklären, was Sie sind, *mit Ihren Worten*, nicht mit denen eines Roboters.",
      lead:
        "Der Editor geht deutlich über klassisches SEO hinaus. Es ist ein Datenblatt dafür, dass ein Modell Sie genau beschreiben kann, auch wenn niemand Ihre Website besucht.",
      items: [
        "**Entitätstyp**: Hotel, Resort, B&B, Ferienwohnung, Apartment, Hostel, Motel, Campingplatz oder generische Unterkunft.",
        "**Kategorien, Anwendungsfälle und Problemfelder**: wofür Ihre Unterkunft da ist, so gesagt, wie Leute danach suchen.",
        "**Zielgruppen und geografische Reichweite**: wen Sie bedienen und bis wohin.",
        "**Vertrauenssignale**: Jahre aktiv, Anzahl Kunden, Zertifizierungen und Referenzkunden.",
        "**Steuerung der KI-Indexierung** und Priorität: die Ebene lässt sich abschalten, wenn Sie sie nicht wollen.",
        "**Pro Seite**: Intention (informativ, kommerziell, transaktional, vergleichend oder Support), Thema, semantischer Kontext und verwandte Entitäten.",
      ],
    },
    consistency: {
      eyebrow: "Warum es hier funktioniert",
      title: "Weil die Daten *nicht kopiert werden*.",
      lead:
        "Der Grund, warum sich eine Verfügbarkeitsdatei ohne Sorge veröffentlichen lässt, ist derselbe, aus dem der Kalender der Maschine echte verbleibende Einheiten zeigt: es ist dasselbe Inventar, das der Kalender des Hotels nutzt. Es gibt keinen nächtlichen Export, der auseinanderlaufen könnte.",
      items: [
        "Ein Zimmer wird einmal erfasst und erscheint in der Maschine, auf der Website, im Verfügbarkeits-JSON und im RMS.",
        "Eine Wartungssperre nimmt echtes Inventar heraus und verschwindet gleichzeitig von allen Oberflächen.",
        "Die Markenbeschreibung, die Sie erfasst haben, speist Website, LinkHub, OTA-Einträge und die llms.txt.",
      ],
    },
    dogfood: {
      eyebrow: "Predigen und praktizieren",
      title: "Auch diese Seite hat ihre *llms.txt*.",
      lead:
        "Es wäre merkwürdig zu verlangen, dass Ihre Unterkunft maschinenlesbar ist, und die Seite, auf der wir das verlangen, wäre es nicht.",
      button: "/llms.txt ansehen",
    },
    faq: [
      {
        q: "Garantiert mir das, dass ich auftauche, wenn jemand ChatGPT fragt?",
        a: "Nein, und wer Ihnen etwas anderes sagt, lügt. Niemand kontrolliert, was ein Modell empfiehlt, so wie niemand das Ranking von Google kontrolliert. **Was von Ihnen abhängt, ist, dass ein Agent, wenn er nachsieht, etwas findet, das er verstehen kann** — einen Text, der beschreibt, was Sie sind, eine lesbare Verfügbarkeit und eine klare Route zum Buchen. Eine Unterkunft, deren einzige öffentliche Information ein Fotokarussell auf Instagram ist, hat nichts, was ein Modell zitieren könnte.",
      },
      {
        q: "Was ist GEO und worin unterscheidet es sich von SEO?",
        a: "Klassisches SEO optimiert darauf, dass eine Person auf ein Ergebnis klickt: Titel, Beschreibung, Titelbild. **GEO — Generative Engine Optimization —** optimiert darauf, dass ein Modell Sie genau beschreiben kann, ohne dass jemand Ihre Website besucht: welcher Entitätstyp Sie sind, für welche Zielgruppen, in welchem Gebiet, mit welchen Vertrauenssignalen. Sie ergänzen einander; der Editor des Systems hat beides.",
      },
      {
        q: "Kann ich entscheiden, dass die KI mich nicht indexiert?",
        a: "Ja. Die agentische Ebene der Maschine lässt sich in den Einstellungen ein- und ausschalten, und der GEO-Editor hat eine Steuerung der KI-Indexierung samt Priorität. Das ist Ihre Entscheidung, keine Voreinstellung, die wir Ihnen aufdrücken.",
      },
    ],
    cta: {
      title: "Aktivieren Sie es *mit einem Schalter*.",
      lead:
        "Die agentische Ebene ist ein Abschnitt mehr in den Einstellungen der Maschine. Wenn Ihr Inventar bereits erfasst ist, kostet das Veröffentlichen der Routen nichts.",
      steps: [
        "Sie erfassen Inventar und Markenidentität.",
        "Sie aktivieren die agentische Ebene in der Maschine.",
        "Sie füllen den GEO-Editor mit Ihren Worten.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Lösungen",
      description:
        "Hotels, Hütten und Wohnungen, Hostels, Glamping und Villen, und kleine Gruppen: wie bookfer für jeden Unterkunftstyp und jeden Arbeitsplatz konfiguriert wird.",
    },
    hero: {
      eyebrow: "Lösungen",
      title: "Dasselbe System, *anders konfiguriert*.",
      lead:
        "Ein Stadthotel, eine Hüttenanlage und ein Hostel arbeiten nicht gleich, und trotzdem wählen fast alle Systeme am Markt eines der drei aus und lassen die anderen beiden sich anpassen. Hier ändert sich die Konfiguration: Verkaufsmodell, Arbeitsbereiche und aktive Apps.",
    },
    hoteles: {
      eyebrow: "Hotels und Aparthotels",
      title: "Austauschbare Zimmer, *von selbst zugewiesen*.",
      lead:
        "Die klassische Konfiguration: Kategorien, die mehrere gleichwertige Einheiten bündeln, der Gast kauft einen Zimmertyp und das System entscheidet, welches er bekommt. Mit der automatischen Zuweisung können Sie verlangen, Lücken zu minimieren oder die Abnutzung zwischen Einheiten auszugleichen.",
      items: [
        "Verkaufsmodell: Kategorie-Pool, mit automatischer oder manueller Zuweisung, wie Sie möchten.",
        "Typische Arbeitsbereiche: Rezeption, Housekeeping und Verwaltung, jeder mit eigenem Menü.",
        "Belegungsplan nach Etage und Zimmerstatus mit Übergangsmatrix.",
        "Neuverdichtung der Zuweisungen, um Lücken zu befreien, wenn die Belegung eng wird.",
      ],
    },
    cabanas: {
      eyebrow: "Hütten, Wohnungen und Vermietungen",
      title: "Jede Einheit mit *eigenem Namen*.",
      lead:
        "Hier kauft der Gast keine „Zweizimmerhütte“: er kauft die Alerce, mit ihren Fotos und ihrer Beschreibung. Das Modell der einzelnen Einheit sorgt dafür, dass die Kategorie genau eine Einheit umfasst — ohne jede Unklarheit darüber, was er gebucht hat.",
      items: [
        "Verkaufsmodell: einzelne Einheit 1:1, pro Kategorie wählbar und nicht für das ganze Objekt.",
        "Eigenes Datenblatt pro Einheit in der Maschine: Fotos, Beschreibung, Kapazität und Preis.",
        "Wartungssperren, die echtes Inventar herausnehmen und aus der Maschine verschwinden.",
        "Wenn Sie zusätzlich zwei Standardzimmer haben, koexistieren sie: der Modus wird pro Kategorie festgelegt.",
      ],
    },
    hostels: {
      eyebrow: "Hostels",
      title: "Betten, Schichten und *viel Wechsel*.",
      lead:
        "Hohes Volumen kurzer Buchungen, wechselndes Team und ein Betrieb, in dem An- und Abreisen des Tages der meistbeachtete Bildschirm sind. Die Tagesübersicht eröffnet die Schicht und der Zimmerstatus schließt sie.",
      items: [
        "Tagesübersicht mit An- und Abreisen, und zwei gleichzeitig sichtbaren Tagen.",
        "Housekeeping-Bereich mit eigener Arbeitsliste und sonst nichts im Menü.",
        "Geführte Touren pro App: eine neue Person arbeitet sich in der ersten Schicht selbst ein.",
        "Nutzeranlage mit temporärem Passwort, das die Oberfläche sperrt, bis es geändert wird.",
      ],
    },
    glamping: {
      eyebrow: "Glamping, Villen und Landgüter",
      title: "Wenige Einheiten, *viel Marke*.",
      lead:
        "Wenn Sie sechs Domes haben, ist der Betrieb einfach und das Schwierige ist, sie gut zu verkaufen. Markenidentität, Galerien, die Website mit eigener Domain und der LinkHub wiegen schwerer als das Tape Chart.",
      items: [
        "Markenidentität mit aus dem Logo extrahierter Palette, Tonalität, Erzählung und Zielgruppen.",
        "Website aus einer Vorlage, automatisch mit Ihren echten Daten gefüllt, auf Ihrer Domain.",
        "LinkHub mit QR zum Ausdrucken, und die Maschine als Hauptbutton.",
        "Agentische Ebene: die Unterkunft wird für ein Sprachmodell lesbar, nicht nur für Google.",
      ],
    },
    grupos: {
      eyebrow: "Gruppen und kleine Ketten",
      title: "Mehrere Objekte, *ein Ort*.",
      lead:
        "Ein Unternehmen kann mehrere Objekte haben, und eine Person kann zu mehreren Unternehmen gehören. Außerdem lässt sich eine Mitgliedschaft auf bestimmte Objekte begrenzen: der Leiter eines Hotels sieht sein Hotel und sonst nichts.",
      items: [
        "Auswahl von Unternehmen, Objekt und Arbeitsbereich auf dem Desktop.",
        "Mitgliedschaften, begrenzt auf eine Liste von Objekten oder auf alle.",
        "Zehn administrative Fähigkeiten, pro Mitgliedschaft vergebbar, zusätzlich zur Rolle.",
        "Objektvorlagen: ein neues Objekt startet mit bereits konfigurierten Bereichen und Apps.",
      ],
    },
    roles: {
      eyebrow: "Nach Arbeitsplatz",
      title: "Und drinnen sieht *jeder das Seine*.",
      lead:
        "Der aktive Arbeitsbereich bestimmt Menü, Startbildschirm, effektive Berechtigungen und sogar die Einarbeitungstour. Das ist keine Berechtigung, die Buttons versteckt: es ist eine andere Zusammensetzung desselben Systems.",
      items: [
        {
          title: "Rezeption",
          desc: "Tagesübersicht, Buchungen, Kalender, manuelle Erfassung und Zimmerstatus. Die Startseite zeigt An- und Abreisen und aktuelle Buchungen.",
        },
        {
          title: "Housekeeping",
          desc: "Zimmerstatus und Belegungsplan. Die Startseite zeigt Einheiten in Reinigung und ausstehende Abreisen, und im Menü gibt es weder Raten noch Revenue.",
        },
        {
          title: "Marketing",
          desc: "Builder, Websites, Galerien, Bewertungen, Marke und LinkHub. Die Startseite zeigt Bewertungsnote, Sichtbarkeit und LinkHub-Status. Der Buchungs-Hub taucht gar nicht auf.",
        },
        {
          title: "Revenue und Eigentümer",
          desc: "Vollständige Berichte und RMS: Pace, Comp-Set, Events, Regeln und Empfehlungen, dazu ADR, RevPAR und Produktion nach Kanal.",
        },
        {
          title: "Verwaltung",
          desc: "Sieht automatisch den ganzen Katalog, einschließlich künftig hinzugefügter Apps. Das ist der Bereich, der Nutzer, Objekte und Abrechnung verwaltet.",
        },
        {
          title: "Der Gast",
          desc: "StayPass: sein Konto, seine Buchungen, das Detail, die Stornierung und sein Profil. Er registriert sich einmal und sammelt die Unterkünfte, bei denen er gebucht hat.",
        },
      ],
    },
    cta: {
      title: "Erzählen Sie uns, wie *Sie arbeiten*.",
      lead:
        "In der Einrichtung gibt es einen Schritt, in dem Sie Ihren Betriebs-Archetyp wählen, und daraus entstehen die Arbeitsbereiche und die ersten Apps. Passt keiner, schreiben Sie uns und wir sehen es uns an.",
      steps: [
        "Sie wählen Unterkunftstyp und Verkaufsmodell.",
        "Die Einrichtung baut Ihre Arbeitsbereiche.",
        "Sie justieren Apps und Berechtigungen pro Arbeitsplatz.",
      ],
    },
  },

  precios: {
    meta: {
      title: "Preise",
      description:
        "Ein Tarif pro Unterkunft, ohne Provision pro Buchung und ohne Einrichtungskosten. Sehen Sie, was jeder Tarif enthält und was wir noch nicht können.",
    },
    hero: {
      eyebrow: "Preise",
      title: "Ein Tarif pro Unterkunft, *ohne Provision pro Buchung*.",
      lead:
        "Was über Ihre Maschine gebucht wird, gehört ganz Ihnen. Kein Prozentsatz pro Buchung, keine Einrichtungskosten und kein verstecktes Modul, das auf der zweiten Rechnung auftaucht.",
      notes: ["Ohne Karte zum Start", "Ohne Mindestlaufzeit", "Ohne Einrichtungsgebühr"],
    },
    matrix: {
      eyebrow: "Vergleich",
      title: "Was *in jedem Tarif* steckt.",
      lead:
        "Diese Tabelle stammt aus demselben Katalog, mit dem das System Ihr Konto auflöst. Das ist keine Marketingfassung der Tarife: das sind die Tarife.",
    },
    noCharge: {
      eyebrow: "Was nicht extra berechnet wird",
      title: "Die Posten, die Sie *nicht* auf der Rechnung sehen.",
      items: [
        {
          title: "Provision pro Buchung",
          desc: "Null. Die Maschine gehört Ihnen und wir behalten keinen Prozentsatz von dem, was Sie darüber verkaufen.",
        },
        {
          title: "E-Mail-Versand",
          desc: "Die Gast-E-Mails gehen von der bookfer-Domain aus, ohne separaten Maildienst und ohne SMTP-Konfiguration pro Hotel.",
        },
        {
          title: "Einrichtung",
          desc: "Die Einrichtung ist selbstverwaltet. Für die ersten Kohorten begleiten wir die Zimmererfassung kostenlos.",
        },
        {
          title: "Website und Domain",
          desc: "Baukasten und Renderer sind im Tarif. Die Domain registrieren Sie, wo Sie wollen, und zeigen damit hierher.",
        },
        {
          title: "Zusätzliche Nutzer",
          desc: "Innerhalb der Tarifgrenze fügen Sie hinzu, wen Sie brauchen. Es wird nicht pro Platz abgerechnet.",
        },
        {
          title: "Transaktionsgebühr",
          desc: "Gibt es nicht, weil es noch kein Zahlungs-Gateway gibt: der Gast zahlt beim Check-in.",
        },
      ],
    },
    honest: {
      eyebrow: "Bevor Sie entscheiden",
      title: "Was ein bookfer-Tarif noch nicht enthält",
      text: "Es ist in keinem Tarif enthalten, weil es noch nicht existiert, nicht weil es ein Extra wäre: **Channel Manager** — keine Synchronisierung von Inventar oder Raten mit OTAs — und **Zahlungs-Gateway** — es wird nicht online abgerechnet. Die Raten externer Mitbewerber werden von Hand erfasst, und Google-Business- und OTA-Einträge werden intern bearbeitet, aber von Hand ans Ziel kopiert.",
      link: "Den vollständigen Produktstand ansehen",
    },
    faqTitle: "Fragen zu den Preisen",
    faq: [
      {
        q: "Berechnen Sie eine Provision pro Buchung?",
        a: "Nein. Die Maschine gehört Ihnen und was darüber hereinkommt, gehört ganz Ihnen. Der Tarif ist ein Abonnement pro Unterkunft, ohne Prozentsatz pro Buchung und ohne Transaktionsgebühr — unter anderem, weil **es auch noch kein Zahlungs-Gateway gibt**: bezahlt wird beim Check-in.",
      },
      {
        q: "Gibt es Einrichtungskosten?",
        a: "Nein. Die Einrichtung ist selbstverwaltet: neun geführte Schritte, die Sie selbst machen, mit auf dem Server gespeichertem Fortschritt. Für die ersten Kohorten bieten wir Live-Begleitung beim Schritt der Zimmererfassung — dem aufwendigsten — und auch das wird nicht berechnet.",
      },
      {
        q: "Was passiert, wenn die kostenlose Phase endet?",
        a: "Sie wählen einen kostenpflichtigen Tarif oder hören auf. Keine Mindestlaufzeit, keine Strafe. Wir sind im Marktpiloten: was wir aus dieser Phase wollen, ist echter Nutzungsnachweis, kein Umsatz.",
      },
      {
        q: "Wird pro Nutzer abgerechnet?",
        a: "Nein: jeder Tarif hat eine Obergrenze für Nutzer und Objekte, und innerhalb dieser Grenze fügen Sie hinzu, wen Sie wollen, ohne Kosten pro Person. Die Grenzen stehen im Vergleich oben.",
      },
      {
        q: "Wird Revenue Management extra berechnet?",
        a: "In den großen Systemen fast immer: das RMS ist ein separat berechnetes Zusatzmodul. Hier ist es ein Produkt im Katalog wie jedes andere und je nach Tarif enthalten oder nicht — der Vergleich oben sagt es Ihnen Zeile für Zeile.",
      },
    ],
    cta: {
      title: "Starten Sie kostenlos und *sehen Sie dann weiter*.",
      lead:
        "Wir verlangen für die Anmeldung keine Karte. Wenn das System Ihnen in zwei Wochen nichts geändert hat, gibt es nichts zu kündigen.",
      steps: [
        "Sie melden sich ohne Karte an.",
        "Sie erfassen Objekt und Zimmer.",
        "Sie wählen einen Tarif, wenn die kostenlose Phase endet.",
      ],
    },
  },

  nosotros: {
    meta: {
      title: "Über uns",
      description:
        "Warum es bookfer gibt, wie wir arbeiten und in welchem Zustand jeder Teil des Produkts ist — einschließlich dessen, was es noch nicht kann.",
    },
    hero: {
      eyebrow: "Über uns",
      title: "Software für die Unterkunft, die *keine IT-Abteilung hat*.",
      lead:
        "bookfer entstand aus einer einfachen Beobachtung: ein Hotel mit zwanzig Zimmern oder eine Anlage mit sechs Hütten braucht genau dieselben sieben Bausteine wie eine Kette, und keine Option am Markt liefert sie zusammen zu einem Preis, der in dieser Größenordnung Sinn ergibt.",
      secondary: "Produkt ansehen",
    },
    thesis: {
      eyebrow: "Die These",
      title: "Eine kleine Unterkunft sollte nicht *fünf Anbieter und einen Berater* brauchen.",
      p1: "Heute ist der übliche Ausweg ein PMS auf der einen Seite, eine Buchungsmaschine auf der anderen, eine Website von jemandem, der nicht mehr antwortet, eine Ratentabelle und Anfragen, die in einem WhatsApp landen, das niemand ordnet. Jedes Teil funktioniert; das Ganze nicht. Und die Arbeit, das Ganze in Übereinstimmung zu halten, macht am Ende die Person an der Rezeption — von Hand.",
      p2: "Die Wette von bookfer ist, dass dieses Ganze ein System mit einer Datenbank wird, dass man sich ohne Hilfe einrichten kann, und dass jeder Arbeitsplatz nur das Seine sieht. Alles andere — das RMS, die Agentenebene, der Assistent — folgt daraus: das sind Dinge, die man erst gut machen kann, wenn die Daten bereits eine Einheit sind.",
    },
    principles: {
      eyebrow: "Wie wir arbeiten",
      title: "Vier Entscheidungen, über die *nicht verhandelt wird*.",
      items: [
        {
          title: "Ein Datum, ein Ort",
          desc: "Ein Zimmer wird einmal erfasst. Wenn es in der Maschine, auf der Website, im RMS und im LinkHub erscheint, dann weil es dieselbe Zeile ist, nicht weil eine Synchronisierung dazwischenliegt. Die meisten Probleme eines Hotellerie-Stacks sind zwei Systeme, die Unterschiedliches über dasselbe Zimmer sagen.",
        },
        {
          title: "Der Stand wird gesagt",
          desc: "Wenn etwas fehlt, sagen wir es auf der Website und nicht im dritten Telefonat. Ein Pilot, der mit aufgeblasener Erwartung startet, endet nach vier Wochen in einer stillen Abwanderung, und die lehrt uns nichts. Uns sind weniger Anmeldungen lieber und dafür zu wissen, warum die bleiben, die bleiben.",
        },
        {
          title: "Berechtigungen sind echt",
          desc: "Einen Button zu verstecken ist keine Berechtigung. Jeder Vorgang wird gegen die Richtlinie des Dienstes geprüft, und der KI-Assistent handelt, indem er die echte Identität des Fragenden annimmt, mit einer kurzlebigen Berechtigung, die bei jedem Aufruf erneuert wird. Dahinter steht kein Servicekonto mit Superkräften.",
        },
        {
          title: "Reibung bei der Einrichtung ist ein Bug",
          desc: "Einen Mailserver einrichten, auf ein Onboarding-Gespräch warten, eine Einrichtung bezahlen: jede dieser Sachen sind Leute, die draußen bleiben. Die Einrichtung sind neun Schritte, die Sie allein machen, und die Gast-E-Mails gehen raus, ohne dass Sie etwas konfigurieren.",
        },
      ],
    },
    status: {
      eyebrow: "Produktstand",
      title: "Was läuft, was halb läuft und *was es nicht gibt*.",
      lead:
        "Diese Tabelle ist dieselbe, die wir intern nutzen, um zu entscheiden, was gebaut wird. Wir veröffentlichen sie, weil die Alternative — dass Sie es in der dritten Woche entdecken — niemandem hilft, uns am wenigsten.",
      groups: [
        {
          label: "Solide und im Einsatz",
          tone: "ok",
          rows: [
            {
              name: "Duales Verkaufsmodell",
              desc: "Kategorie-Pool und einzelne Einheit 1:1, pro Kategorie wählbar, mit Erkennung gemischter Zustände, Autokorrektur und Migrationsassistent mit Entwurf, Vorschau und Abbruch.",
            },
            {
              name: "Anti-Überbuchung",
              desc: "Eindeutige Sperre pro Einheit und Datum in der Datenbank. Wartungssperren nutzen dieselbe Sperre.",
            },
            {
              name: "Buchungsmaschine",
              desc: "Vollständiger Ablauf mit informativem Kalender, Engine Studio mit sieben Blöcken, zwei Bestätigungsmodi und automatischem Ablauf ausstehender Buchungen.",
            },
            {
              name: "Mehrwährungsfähigkeit",
              desc: "Basis-, Abrechnungs- und Vergleichswährung, mit Einfrieren beim Check-in, zehn Währungen und wählbarem Kurs für ARS — blue, MEP, CCL oder offiziell.",
            },
            {
              name: "Tape-Chart-Kalender",
              desc: "Verschieben und Größenändern mit Vorschau auf Ergebnis und Konflikte vor dem Anwenden.",
            },
            {
              name: "Revenue Management",
              desc: "Analyse mit doppelter Achse, Pace mit eigenem Benchmark, Comp-Set, Events, Regeln mit Trockenlauf und geschlossener Kreislauf zur Preismaschine.",
            },
            {
              name: "Builder und Renderer",
              desc: "Visueller Baukasten mit Fachkomponenten, Mehrsprachigkeit, eigenen Domains, Popups und SEO- und GEO-Editor.",
            },
            {
              name: "LinkHub",
              desc: "Zehn Blocktypen, Designs, Terminplanung, QR und Auswertung von Aufrufen und Klicks.",
            },
            {
              name: "Bookfer KI",
              desc: "272 Werkzeuge und eine Berechtigungsrichtlinie in drei Ebenen, mit Identitätsübernahme und kurzlebiger Berechtigung.",
            },
            {
              name: "Support und Einrichtung",
              desc: "37 geführte Touren, Einarbeitung pro Arbeitsbereich und Einrichtung in neun Schritten, die auf einem anderen Gerät fortgesetzt wird.",
            },
          ],
        },
        {
          label: "Teilweise: vorhanden, aber nicht vollständig",
          tone: "partial",
          rows: [
            {
              name: "Online-Präsenz",
              desc: "Funktioniert, ist aber per Produktentscheidung aus dem Menü ausgeblendet. Die Verbindungen zu sozialen Netzwerken sind erklärt — manuelle Erfassung, ohne echtes OAuth — und die OTA-Synchronisierung setzt einen Status, veröffentlicht aber nicht.",
            },
            {
              name: "Google Business",
              desc: "Der Eintrag lässt sich bearbeiten und im Modell als veröffentlicht markieren, aber es ist keine Google-API angebunden: heute wird er von Hand ans Ziel kopiert.",
            },
            {
              name: "Mitbewerber-Raten",
              desc: "Die Entdeckung von Mitbewerbern ist automatisch; die externen Raten werden von Hand erfasst. Vorbereitet für Lighthouse, RateGain, PriceLabs und KeyData, nicht angebunden.",
            },
            {
              name: "Verträge und KI-Guthaben",
              desc: "Der Tarif legt fest, welche Produkte jedes Unternehmen hat, und das KI-Guthaben wird gemessen und ausgewiesen, aber es sperrt den Zugriff noch nicht und erzwingt keine Quote.",
            },
            {
              name: "Abrechnung",
              desc: "Die Fähigkeit, Abrechnung zu verwalten, existiert und der Tarif lebt am Unternehmen, aber es ist kein Abrechnungssystem angebunden.",
            },
          ],
        },
        {
          label: "Gibt es noch nicht",
          tone: "none",
          rows: [
            {
              name: "Channel Manager",
              desc: "Es gibt keine Integration von Inventar oder Raten mit OTAs. Alles, was es gibt, ist ein Ereignisprotokoll, das jede relevante Buchungsänderung festhält — angelegt, bestätigt, zugewiesen, verschoben, Check-in, Check-out, storniert, No-Show — gedacht, um diese Integration zu speisen, wenn es sie gibt. Heute ist es eine Datei für Replay und Diagnose, keine Verbindung.",
            },
            {
              name: "Zahlungs-Gateway",
              desc: "Es wird nicht online abgerechnet. Das Unternehmensmodell hat das Zahlungskennzeichen, aber es gibt kein Gateway: bezahlt wird beim Check-in, vor Ort, mit dem zu diesem Zeitpunkt eingefrorenen Wechselkurs.",
            },
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Wo wir stehen",
      title: "Im Marktpiloten, *mit Absicht*.",
      lead:
        "Wir versuchen in dieser Phase nicht, Umsatz zu machen. Wir versuchen, vier Fragen mit Daten zu beantworten, und alle vier hängen davon ab, dass Unterkünfte das System ernsthaft nutzen, mit echten Buchungen darin.",
      questions: [
        "Wird die Einrichtung von allein fertig, oder gibt es einen bestimmten Schritt, an dem die Leute abbrechen?",
        "Buchen Gäste über die Maschine, oder kehrt die Gewohnheit in den Chat zurück, obwohl es den Link gibt?",
        "Was fragen die, die es ernsthaft nutzen, und worin unterscheidet sich das von dem, was jemand fragte, der es probierte und nicht zurückkam?",
        "Wofür wird der Assistent benutzt, wenn niemand zusieht?",
      ],
      stats: [
        { value: "2026", label: "Jahr des Marktpiloten" },
        { value: "AR", label: "gemacht in Argentinien, in fünf Sprachen" },
        { value: "5", label: "Sprachen der Plattform" },
        { value: "0", label: "Provision auf Buchungen der Maschine" },
      ],
    },
    cta: {
      title: "Wenn Ihnen davon etwas *nach Ihrem Problem klingt*.",
      lead:
        "Schreiben Sie uns und wir besprechen es ohne Umschweife. Wenn bookfer für Ihren Fall noch nichts taugt, sagen wir Ihnen das im selben Gespräch.",
      steps: [
        "Sie erzählen uns, wie Sie heute arbeiten.",
        "Wir sagen Ihnen, was es löst und was nicht.",
        "Wenn es passt, starten wir die Einrichtung gemeinsam.",
      ],
    },
  },

  contacto: {
    meta: {
      title: "Kontakt",
      description:
        "Schreiben Sie uns und wir besprechen es ohne Umschweife: was bookfer für Ihre Unterkunft löst und was noch nicht. Sie können die kostenlose Einrichtung auch selbst starten.",
    },
    eyebrow: "Kontakt",
    title: "Erzählen Sie uns, wie *Sie heute Buchungen entgegennehmen*.",
    lead:
      "Sie müssen nicht wissen, welches Modul Sie brauchen. Zu wissen, wie viele Einheiten Sie haben, ob Sie über OTAs verkaufen und wie viel Tag dafür draufgeht, Verfügbarkeitsfragen zu beantworten, reicht schon, um Ihnen zu sagen, ob bookfer Ihnen nützt — oder ob noch nicht.",
    checks: [
      "Wir antworten innerhalb des Werktags.",
      "Wenn etwas, das Sie brauchen, noch nicht existiert, sagen wir es Ihnen sofort.",
      "Wenn Sie möchten, erfassen wir die Zimmer gemeinsam in einem kurzen Gespräch.",
    ],
    directLabel: "Oder schreiben Sie direkt",
    shortcutTitle: "Möchten Sie nicht auf eine Antwort warten?",
    shortcutText:
      "Die Einrichtung ist selbstverwaltet, kostenlos und verlangt keine Karte. Sie können die Maschine am Laufen haben, bevor wir dieses Formular beantworten.",
    whatsappMessage: "Hallo, ich möchte bookfer für meine Unterkunft kennenlernen.",
  },

  legal: {
    updated: "Zuletzt aktualisiert",
    updatedDate: "30. August 2026",
    privacy: {
      meta: {
        title: "Datenschutzerklärung",
        description:
          "Welche Daten bookfer auf dieser Website und in der Plattform erhebt, mit welchen Dienstleistern sie verarbeitet werden und wie man ihre Löschung verlangt.",
      },
      title: "Datenschutzerklärung",
      lead: "Welche Daten wir erheben, wofür, mit wem wir sie verarbeiten und wie Sie ihre Löschung verlangen.",
      blocks: [
        { h: "1. Wer wir sind" },
        {
          p: "bookfer ist eine Verwaltungsplattform für Unterkünfte, betrieben aus Argentinien. Für alle Fragen zu Ihren personenbezogenen Daten schreiben Sie uns an [hola@bookfer.com](mailto:hola@bookfer.com).",
        },
        { h: "2. Zwei verschiedene Rollen" },
        { p: "Es lohnt, sie zu trennen, denn die Pflichten sind nicht dieselben:" },
        {
          ul: [
            "**Diese Website und die geschäftliche Beziehung zu Ihnen.** Hier sind wir für die Daten verantwortlich: wir erheben sie, um Sie zu kontaktieren und zu verstehen, woher Anfragen kommen.",
            "**Die Plattform.** Wenn eine Unterkunft die Daten ihrer Gäste in bookfer erfasst, ist die Unterkunft für diese Daten verantwortlich; wir verarbeiten sie in ihrem Auftrag und nach ihren Weisungen.",
          ],
        },
        { h: "3. Welche Daten wir auf dieser Website erheben" },
        {
          ul: [
            "**Die, die Sie im Formular angeben:** Name, E-Mail, Telefon, Name der Unterkunft und die Nachricht, die Sie schreiben. Verpflichtend ist nur die E-Mail.",
            "**Kampagnenparameter (UTM)** in der URL zum Zeitpunkt des Absendens, damit wir wissen, über welchen Weg Sie kamen.",
            "**Technische Daten des Besuchs**, die der Server protokolliert, der die Website ausliefert — wie jeder Webserver.",
            "**Navigationsmetriken**, nur wenn Messwerkzeuge konfiguriert sind. Siehe die [Cookie-Richtlinie](/legal/cookies).",
          ],
        },
        {
          p: "Wir nutzen die Formulardaten für nichts anderes, als Sie zu bookfer zu kontaktieren, und wir verkaufen sie nicht und geben sie nicht zu Werbezwecken an Dritte weiter.",
        },
        { h: "4. Welche Daten die Plattform erhebt" },
        {
          p: "Wenn Sie sich anmelden, erheben wir zusätzlich, was das System zum Funktionieren braucht: die Daten Ihres Kontos und Ihres Unternehmens, die Ihrer Objekte und Einheiten, und die der Buchungen, die Sie erfassen oder die über Ihre Maschine hereinkommen — einschließlich der für den Aufenthalt nötigen Gastdaten. All das gehört Ihnen.",
        },
        { h: "5. Mit wem wir sie verarbeiten" },
        { p: "Wir arbeiten mit Dienstleistern, die in unserem Auftrag und nur zur Leistungserbringung tätig werden:" },
        {
          ul: [
            "**Versand transaktionaler E-Mails**, für die Bestätigungen und Hinweise an den Gast.",
            "**Speicherung von Bildern und Dateien** der Galerien, der Marke und der Unternehmensbibliothek.",
            "**Authentifizierung**, einschließlich der Anmeldung mit einem sozialen Konto, wenn die Unterkunft das freischaltet.",
            "**Infrastruktur und Datenbank**, auf der die Plattform läuft.",
            "**Messung und Werbung**, sofern zutreffend und wie in der Cookie-Richtlinie erklärt.",
          ],
        },
        { h: "6. Wie lange wir sie aufbewahren" },
        {
          p: "Geschäftliche Kontaktdaten werden aufbewahrt, solange eine Beziehung oder ein Interesse besteht, und gelöscht, wenn Sie es verlangen. Betriebsdaten eines Kontos werden aufbewahrt, solange das Konto besteht, und für den Zeitraum, den die geltenden gesetzlichen und buchhalterischen Pflichten verlangen.",
        },
        { h: "7. Ihre Rechte" },
        {
          p: "Sie können Auskunft über Ihre Daten, deren Berichtigung, Aktualisierung oder Löschung verlangen, indem Sie an [hola@bookfer.com](mailto:hola@bookfer.com) schreiben. In Argentinien ist die Agentur für Zugang zu öffentlichen Informationen die Aufsichtsbehörde für den Schutz personenbezogener Daten und bearbeitet Beschwerden derjenigen, die ihre Rechte verletzt sehen.",
        },
        { h: "8. Sicherheit" },
        {
          p: "Der Zugang zur Plattform ist durch Authentifizierung und ein Berechtigungssystem mit Rollen, Fähigkeiten und objektbezogenem Umfang geschützt. Sensible Vorgänge werden in Audit-Protokollen festgehalten. Kein System ist unfehlbar; sollten wir einen Vorfall entdecken, der Ihre Daten betrifft, würden wir es Ihnen mitteilen.",
        },
        { h: "9. Änderungen" },
        {
          p: "Wenn wir diese Erklärung aktualisieren, ändern wir das Datum im Kopf. Wesentliche Änderungen teilen wir aktiven Konten zusätzlich per E-Mail mit.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Allgemeine Geschäftsbedingungen",
        description:
          "Nutzungsbedingungen der Plattform bookfer: was der Dienst umfasst, was im Piloten ist, die Verantwortlichkeiten beider Seiten und wie ein Konto beendet wird.",
      },
      title: "Allgemeine Geschäftsbedingungen",
      lead: "Die Regeln für die Nutzung der Plattform, so geschrieben, dass man sie versteht.",
      blocks: [
        { h: "1. Was der Dienst ist" },
        {
          p: "bookfer ist eine Cloud-Plattform zur Führung einer Unterkunft: Buchungen, Zimmer, öffentliche Buchungsmaschine, Websites, Revenue Management, Gästeportal und ein Assistent mit künstlicher Intelligenz. Der Zugang erfolgt über den Browser; es wird keine Software zur Installation ausgeliefert.",
        },
        { h: "2. Produktstand" },
        {
          p: "Die Plattform ist im **Marktpiloten**. Es gibt Funktionen, die als teilweise gekennzeichnet sind, und andere, die es nicht gibt — darunter **Channel Manager** und **Zahlungs-Gateway**. Der aktuelle Stand ist unter [Produktstand](/nosotros#estado) veröffentlicht und ist Teil dessen, was Sie beim Abschluss akzeptieren: wir versprechen keine Funktionen, die dort als nicht vorhanden geführt werden.",
        },
        { h: "3. Ihr Konto" },
        {
          p: "Sie sind für die Zugangsdaten Ihres Kontos und die der von Ihnen angelegten Personen verantwortlich. Das System legt Nutzer mit einem temporären Passwort an, das die Person beim ersten Login ändern muss; bis dahin bleibt die Oberfläche für sie gesperrt.",
        },
        {
          p: "Sie können Rollen, administrative Fähigkeiten und objektbezogenen Umfang vergeben. Die Konfiguration dieser Berechtigungen liegt bei Ihnen: wir stellen den Mechanismus, wir entscheiden nicht, wer in Ihrem Betrieb was sieht.",
        },
        { h: "4. Ihre Daten" },
        {
          p: "Die Daten, die Sie erfassen — Objekte, Einheiten, Raten, Buchungen, Gäste, Inhalte Ihrer Websites — gehören Ihnen. Wir verarbeiten sie zur Leistungserbringung, gemäß der [Datenschutzerklärung](/legal/privacidad). Wenn Sie es sind, der Gastdaten erfasst, sind Sie diesen Gästen und dem geltenden Recht gegenüber dafür verantwortlich.",
        },
        { h: "5. Tarife und Abrechnung" },
        {
          p: "Jeder Tarif legt fest, welche Produkte er enthält und welche Obergrenzen für Objekte und Nutzer gelten; was unter [Preise](/precios) veröffentlicht ist, stammt aus demselben Katalog, mit dem Ihr Konto aufgelöst wird. Kostenlose Zeiträume und Testphasen dauern so lange, wie dort angegeben. Es gibt keine Mindestlaufzeit und keine Strafe für die Kündigung.",
        },
        {
          p: "Die Buchungsmaschine erhebt keine Provision pro Buchung. Die Zahlung des Gastes läuft nicht über bookfer: sie erfolgt heute beim Check-in, zwischen Unterkunft und Gast.",
        },
        { h: "6. Zulässige Nutzung" },
        { p: "Die Plattform darf nicht genutzt werden, um:" },
        {
          ul: [
            "Rechtswidrige oder irreführende Inhalte zu veröffentlichen oder solche, zu deren Nutzung Sie nicht berechtigt sind.",
            "Falsche Bewertungen zu erfassen oder Ihrer Unterkunft Vertrauenssignale zuzuschreiben, die nicht zutreffen.",
            "Auf Daten eines anderen Unternehmens zuzugreifen oder die Berechtigungskontrollen des Systems zu umgehen.",
            "Automatisiert außerhalb der vorgesehenen Oberflächen zu erfassen, bis hin zur Beeinträchtigung des Dienstes für andere.",
          ],
        },
        { h: "7. Verfügbarkeit" },
        {
          p: "Wir tun das Zumutbare, damit der Dienst verfügbar ist, bieten in dieser Phase aber keine Service-Level-Vereinbarung mit Entschädigung. Wartungen, die den Dienst unterbrechen können, werden angekündigt, wenn sie absehbar sind.",
        },
        { h: "8. Der KI-Assistent" },
        {
          p: "Der Assistent führt Vorgänge mit den echten Berechtigungen dessen aus, der ihn nutzt, und hinterlässt eine Spur dessen, was er getan hat. Dennoch ist er ein probabilistisches System: **prüfen Sie, was er ausführt**, bevor Sie einen sensiblen Vorgang als erledigt betrachten — so, wie Sie die Arbeit von jemandem prüfen würden, der gerade angefangen hat. Die Ratenvorschläge des Revenue-Moduls sind genau das, Vorschläge: die Entscheidung, sie anzuwenden, liegt bei Ihnen.",
        },
        { h: "9. Geistiges Eigentum" },
        {
          p: "Software, Marke und Dokumentation von bookfer gehören uns. Die Inhalte, die Sie erfassen — Texte, Fotos, Logo, Design Ihrer Website — gehören Ihnen, und Sie gestatten uns, sie ausschließlich zur Leistungserbringung zu hosten und anzuzeigen.",
        },
        { h: "10. Kündigung" },
        {
          p: "Sie können Ihr Konto jederzeit kündigen, indem Sie an [hola@bookfer.com](mailto:hola@bookfer.com) schreiben. Vor der Schließung räumen wir Ihnen eine angemessene Frist ein, um herunterzuladen, was Sie behalten möchten.",
        },
        { h: "11. Haftung" },
        {
          p: "Der Dienst wird bereitgestellt, wie er ist. Soweit gesetzlich zulässig, ist unsere Haftung auf die Beträge begrenzt, die Sie uns in den zwölf Monaten vor dem auslösenden Ereignis gezahlt haben. Nichts davon begrenzt Haftungen, die von Gesetzes wegen nicht begrenzt werden dürfen.",
        },
        { h: "12. Änderungen und Gerichtsstand" },
        {
          p: "Wir können diese Bedingungen aktualisieren; wesentliche Änderungen werden aktiven Konten per E-Mail mitgeteilt und das Datum im Kopf wird angepasst. Es gilt das Recht der Republik Argentinien und die Zuständigkeit ihrer Gerichte.",
        },
      ],
    },
    cookies: {
      meta: {
        title: "Cookie-Richtlinie",
        description:
          "Welche Cookies und Messtechnologien die bookfer-Website nutzt, welche notwendig sind und wie man den Rest deaktiviert.",
      },
      title: "Cookie-Richtlinie",
      lead: "Was diese Website in Ihrem Browser speichert und was Sie deaktivieren können.",
      blocks: [
        { h: "1. Die öffentliche Website" },
        {
          p: "Die Seiten von `bookfer.com` sind statisch und brauchen keine Cookies, um zu funktionieren. Wir verwenden keine eigenen Cookies, um Sie zu profilieren oder uns zwischen Besuchen zu merken, wer Sie sind. Das einzige, das auftauchen kann, ist das mit der **gewählten Sprache** aus dem Sprachumschalter, damit wir Sie beim nächsten Besuch nicht in eine andere zurückschicken.",
        },
        { h: "2. Messung und Werbung" },
        {
          p: "Die Website kann Messwerkzeuge Dritter laden — Navigationsanalyse, Messung von Kampagnen-Conversions und Pixel von Werbeplattformen —, wenn sie konfiguriert sind. Diese Werkzeuge können Cookies oder Kennungen in Ihrem Browser hinterlassen, um Besuche zu zählen und Conversions zuzuordnen.",
        },
        {
          p: "**Sie laden nur auf der veröffentlichten Website, nie in internen Vorschauen.** Das ist eine bewusste technische Entscheidung: während jemand eine Seite im Panel bearbeitet, würden diese Besuche die Messwerte verfälschen.",
        },
        {
          p: "Wir können außerdem Conversion-Ereignisse von unserem Server an die entsprechende Werbeplattform senden. Dieser Versand nutzt keine Cookies und enthält nicht den Inhalt Ihrer Nachricht.",
        },
        { h: "3. Die Plattform" },
        {
          p: "Die Anwendung unter `app.bookfer.com` nutzt sehr wohl **notwendige** Cookies: die, die Ihre Sitzung aufrechterhalten. Ohne sie lässt sich das System nicht nutzen, und sie lassen sich nicht deaktivieren, ohne die Sitzung zu beenden.",
        },
        {
          p: "Die Plattform speichert außerdem einige Einstellungen im lokalen Speicher Ihres Browsers — das visuelle Design, den Zustand der Seitenleiste, den Fortschritt der geführten Touren. Das bleibt auf Ihrem Gerät und geht nirgendwohin.",
        },
        { h: "4. Wie man sie deaktiviert" },
        {
          p: "Sie können Cookies in den Einstellungen Ihres Browsers blockieren oder löschen und die Widerspruchsmöglichkeiten der Analyse- und Werbeplattformen selbst nutzen. Wenn Sie alle Cookies blockieren, funktioniert die öffentliche Website weiterhin gleich; die Anwendung nicht — weil sie Ihre Sitzung nicht halten kann.",
        },
        { h: "5. Fragen" },
        {
          p: "Bei Fragen dazu schreiben Sie uns an [hola@bookfer.com](mailto:hola@bookfer.com). Siehe auch die [Datenschutzerklärung](/legal/privacidad).",
        },
      ],
    },
  },

  notFound: {
    eyebrow: "Fehler 404",
    title: "Diese Seite *gibt es nicht*.",
    lead:
      "Vielleicht haben wir sie verschoben, oder der Link ist falsch geschrieben. Das sind die Stellen, zu denen die meisten wollen.",
    home: "Zurück zur Startseite",
  },
};

export default de;
