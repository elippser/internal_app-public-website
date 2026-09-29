import type { Dictionary } from "./es";
import { solDe } from "./sol/de";
import { platDe } from "./plat/de";
import { intelDe } from "./intel/de";

/**
 * Deutsch. Dieselben Schlüssel wie in `es.ts` — TypeScript lässt es nicht
 * anders zu.
 *
 * Der Ton ist der des spanischen Originals: direkt, konkret und bereit zu
 * sagen, was das Produkt noch nicht kann.
 */
const de: Dictionary = {
  site: {
    title: "Roombir · PMS, Booking-Engine, Website und Revenue ohne fünf Anbieter",
    description:
      "Buchungen, eigene Booking-Engine, Website, Revenue Management und ein KI-Assistent, der ausführt — auf einer einzigen Datenbank. Für Hotels, Hütten, Hostels und Ferienwohnungen in Lateinamerika.",
    tagline: "Hotelsoftware ohne fünf Anbieter",
    og: {
      title: "Ihre ganze Unterkunft, ohne fünf Anbieter.",
      lead: "Reservierungen, Zimmer, eigene Booking-Engine, Website, Revenue und ein Assistent, der ausführt. Auf einer einzigen Datenbank, gemacht in Argentinien.",
      chips: ["PMS", "Booking-Engine", "Websites", "Revenue", "LinkHub", "Roombir KI"],
    },
  },

  nav: {
    menus: { ...solDe.menus, platformPromo: platDe.promo, solutionsPromo: platDe.solPromo, intelligence: intelDe.card },
    product: "Plattform",
    platform: "Die Plattform",
    contact: "Kontakt",
    login: "Anmelden",
    signup: "Loslegen",
    home: "roombir, Startseite",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    more: "Mehr",
    skip: "Zum Inhalt springen",
    primary: "Hauptnavigation",
    megaFoot: "Alles auf einer einzigen Datenbank.",
    megaLink: "Die ganze Plattform ansehen",
    language: "Sprache",
    featured: "Der Assistent",
    featuredMore: "Was Sie ihm auftragen können",
    links: {
      solutions: "Lösungen",
      pricing: "Preise",
      about: "Über uns",
    },
    groups: {
      operation: "Der Betrieb",
      growth: "Das Wachstum",
    },
    products: {
      ia: {
        title: "Roombir KI",
        desc: "Die gesamte Verwaltung in einem Gespräch. Sie fragen, sie erledigt es, mit Ihren Berechtigungen.",
      },
      pms: {
        title: "PMS",
        desc: "Unterkünfte, Zimmer, Buchungen und die Buchungsmaschine, auf einem einzigen Inventar.",
      },
      informes: {
        title: "Berichte",
        desc: "Belegung, Einnahmen, Stornierungen, Kanäle und was heute falsch erfasst ist.",
      },
      revenue: {
        title: "Revenue",
        desc: "Der Preis für jedes Datum, mit der Nachvollziehbarkeit des Warum und Ihrer Destination im Blick.",
      },
      marketing: {
        title: "Marketing",
        desc: "Website mit Assistent, Marke, Dateien, Bewertungen und LinkHub, verbunden mit Ihren Buchungen.",
      },
    },
    pmsParts: {
      propiedades: "Unterkünfte",
      habitaciones: "Zimmer",
      reservas: "Buchungen",
      motor: "Buchungsmaschine",
    },
  },

  plataformaCompleta: platDe.page,
  intelligence: intelDe,
  solucionesIndex: solDe.index,
  solucionesPaginas: solDe.pages,

  footer: {
    claim:
      "Reservierungen, Zimmer, eigene Booking-Engine, Website, Revenue und ein Assistent, der ausführt — auf einer einzigen Datenbank.",
    nav: "Fußzeile",
    columns: {
      product: "Plattform",
      solutions: "Lösungen",
      company: "Unternehmen",
      legal: "Rechtliches",
    },
    company: {
      about: "Wer wir sind",
      compare: "Vergleiche",
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
    agentNote: "auch diese Seite hat ihre llms.txt",
    social: {
      instagram: "Roombir auf Instagram",
      linkedin: "Roombir auf LinkedIn",
      email: "Schreiben Sie uns eine E-Mail",
    },
  },

  common: {
    startFree: "Loslegen",
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
    video: {
      label: "Produktvideo",
      play: "Abspielen",
      pause: "Pause",
      unmute: "Ton einschalten",
      mute: "Stumm schalten",
      close: "Video schließen",
      volume: "Lautstärke",
      progress: "Videofortschritt",
    },
  },

  ticker: [
    "Eine einzige Datenbank für alles",
    "Tape Chart mit Vorschau",
    "Revenue mit dem Warum jeder Rate",
    "llms.txt · lesbar für eine KI",
    "Ein Assistent, der ausführt",
    "10 Währungen, Kurs beim Check-in eingefroren",
    "Gast-E-Mails ohne SMTP-Einrichtung",
    "LinkHub mit QR",
    "38 geführte Touren über dem echten Bildschirm",
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
      label: "Roombir KI",
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
      sources: { own: "eigen", roombir: "roombir", manual: "manuell", none: "keine Daten" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Automatische Entdeckung nach Nähe und Ähnlichkeit. Externe Raten werden von Hand erfasst: wir erfinden keine Zahl, die wir nicht haben.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Online buchen", "WhatsApp", "Fotos der Hütten", "Anfahrt", "Bewertungen · 4,8"],
    },
    units: {
      label: "Zimmer · Status",
      tag: "2. Stock",
      states: {
        available: "Verfügbar",
        occupied: "Belegt",
        cleaning: "Reinigung",
        maintenance: "Wartung",
        blocked: "Gesperrt",
        checkout: "Abreise ausstehend",
      },
      tiles: [
        { code: "201", cat: "Doppel", state: "occupied" },
        { code: "202", cat: "Doppel", state: "checkout" },
        { code: "203", cat: "Doppel Superior", state: "cleaning" },
        { code: "204", cat: "Doppel Superior", state: "available" },
        { code: "205", cat: "Dreibett", state: "maintenance" },
        { code: "206", cat: "Suite", state: "blocked" },
      ],
      history: "203 · Abreise ausstehend → Reinigung · Lucía · 11:42",
    },
    reports: {
      label: "Berichte",
      tag: "letzte 30 Tage",
      kpis: [
        { label: "Belegung", value: "72 %", delta: "+8 Pkt." },
        { label: "ADR", value: "$96.600", delta: "+6 %" },
        { label: "RevPAR", value: "$69.500", delta: "+18 %" },
        { label: "Stornierung", value: "6 %", delta: "−2 Pkt." },
      ],
      chart: "Nachfrage · nächste 14 Tage",
      hygieneTitle: "Zustand und Verwaltung",
      hygiene: [
        "2 ausstehende Buchungen seit über 24 Std. unbestätigt",
        "1 heutige Anreise ohne zugewiesenes Zimmer",
        "1 heutige Abreise, die noch eingecheckt ist",
      ],
    },
    tourism: {
      label: "Roombir KI · Tourismuslage",
      tag: "Dossier",
      place: "Mendoza · März",
      updated: "aktualisiert vor 2 Std.",
      rows: [
        { key: "Feiertage", value: "Karneval **3. und 4.** · langes Wochenende", src: "Kalender" },
        { key: "Events", value: "Weinlesefest · **7. März** · 4 km entfernt", src: "Agenda" },
        { key: "Wetter", value: "mittleres Maximum **29°** · 2 Regentage", src: "Wetter" },
        { key: "Flüge", value: "beobachtete Routen nach MDZ: **Santiago, São Paulo, Aeroparque**", src: "ADS-B" },
        { key: "Wechselkurs", value: "für einen Brasilianer ist Mendoza **günstiger** als vor einem Jahr", src: "Realkurs" },
      ],
      missing: { key: "zu Fuß", value: "konnte nicht gelesen werden · wird ausgelassen" },
      note: "Jede Angabe mit ihrer Quelle. Was nicht gelesen werden konnte, wird als fehlend markiert, nie als Null.",
    },
    builder: {
      label: "Editor · Assistent",
      tag: "Entwurf",
      file: "referenz.png",
      ask: "Bauen Sie die Startseite wie in diesem Screenshot, mit meinen Texten",
      trace: [
        { tool: "Screenshot lesen", ok: "Hero + Suche" },
        { tool: "Abschnitt hinzufügen · Startseite", ok: "ok" },
        { tool: "Buchungsmaschine verbinden", ok: "ok" },
      ],
      photo: "Platzhalterfoto · ändern",
      title: "Cabañas del Alerce",
      sub: "Sechs Berghütten in Villa La Angostura",
      bar: ["Anreise", "Abreise", "2 Erwachsene", "Suchen"],
    },
    brand: {
      label: "Marke",
      tag: "Cabañas del Alerce",
      logo: "A",
      palette: "Palette · aus dem Logo",
      rows: [
        { key: "Ton", value: "Warm und nahbar" },
        { key: "Typografie", value: "Klassische Serif · vom Ton vorgeschlagen" },
        { key: "Claim", value: "Sechs Hütten zwischen See und Wald" },
        { key: "Nähe", value: "Nahuel-Huapi-See · 800 m" },
      ],
      used: "Sie speist Website, LinkHub, Maschine und die Daten für Suchmaschinen.",
    },
    reviews: {
      label: "Bewertungen",
      tag: "4,8 · 126 Bewertungen",
      rows: [
        {
          source: "Google",
          stars: "★★★★★",
          author: "Paula R.",
          text: "Die Hütte tadellos und der Seeblick, das Beste der Reise.",
          status: "replied",
        },
        {
          source: "Booking",
          stars: "★★★★☆",
          author: "Marcos T.",
          text: "Alles sehr schön. Das letzte Stück des Wegs ist Schotterpiste.",
          status: "pending",
        },
        {
          source: "Airbnb",
          stars: "★★★★★",
          author: "Julia M.",
          text: "Wir kommen sicher wieder. Die Coihue ist riesig für vier.",
          status: "replied",
        },
      ],
      replied: "beantwortet",
      pending: "unbeantwortet",
    },
    org: {
      label: "Unternehmen",
      tag: "2 Unterkünfte",
      company: "Grupo Andino",
      select: "Hotel del Parque ▾",
      props: [
        {
          name: "Hotel del Parque",
          meta: "Mendoza · ARS · UTC−3",
          spaces: ["Rezeption", "Reinigung", "Revenue"],
        },
        {
          name: "Cabañas del Alerce",
          meta: "Villa La Angostura · ARS · UTC−3",
          spaces: ["Rezeption", "Marketing"],
        },
      ],
      membersTitle: "Wer sieht was",
      members: [
        { name: "Martín Sosa", scope: "alle · Verwaltung" },
        { name: "Lucía Paz", scope: "nur Cabañas del Alerce · Rezeption" },
      ],
    },
    signals: {
      revenue: "revenue · sa 21.03.",
      applied: "auf die Maschine angewendet",
      agent: "Roombir ki",
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
    catalog: {
      plans: {
        "inicial": { tagline: "Um die Unterkunft in Betrieb zu nehmen und Online-Buchungen zu empfangen", description: "Der Kern des PMS: Zimmer, Buchungen und die öffentliche Buchungsmaschine. Für begrenzte Zeit kostenlos, damit Sie die Plattform mit echten Daten testen können." },
        "profesional": { tagline: "Die komplette Unterkunft: Betrieb, Marketing und Webpräsenz", description: "Ergänzt den operativen Kern um Website, Markenidentität, Galerien, Bewertungen, LinkHub und Berichte. Es ist der Plan, der die meisten kleinen und mittleren Unterkünfte abdeckt." },
        "full-system": { tagline: "Ganz roombir, inklusive Revenue Management und KI-Assistent", description: "Alle Produkte der Plattform: der operative Kern, das komplette Marketing, Revenue (RMS), Online-Präsenz und Roombir KI mit monatlichen Credits." },
      },
      products: {
        "habitaciones": { name: "Zimmer", description: "Physisches Inventar: Kategorien, Einheiten, Betriebsstatus und Belegungsplan." },
        "reservas": { name: "Buchungen", description: "Das kommerzielle Tagesgeschäft: Tagesübersicht, Buchungsliste und -kalender, manuelle Erfassung, Raten, Verfügbarkeit und Aktionen." },
        "motor": { name: "Buchungsmaschine", description: "Die Suche und der Checkout, die der Gast sieht, mit ihrem Konfigurationsstudio. Öffentliche Oberfläche: Sie wird nicht aus dem PMS-Menü geöffnet." },
        "informes": { name: "Berichte", description: "Operative Analysen der Unterkunft: Belegung, Umsatz, Produktion nach Kanal und Abschlüsse." },
        "revenue": { name: "Revenue (RMS)", description: "Revenue Management: Pace, Compset, Nachfrageereignisse, Regeln und Ratenempfehlungen." },
        "website": { name: "Websites", description: "Website-Baukasten und der Renderer, der die Seiten veröffentlicht: mehrsprachig, eigene Domain, SEO und GEO." },
        "marca": { name: "Markenidentität", description: "Logo, Farbpalette, Tonalität, Geschichte und öffentliche Kontaktdaten der Unterkunft. Speist die Website, die Buchungsmaschine und den LinkHub." },
        "galerias": { name: "Galerien", description: "Mediengalerien der Unterkunft und ihrer Zimmer." },
        "resenas": { name: "Bewertungen", description: "Gästebewertungen, öffentliche Antworten und ihre Anzeige auf der Website und in der Buchungsmaschine." },
        "linkhub": { name: "LinkHub", description: "Die Link-in-Bio-Seite der Unterkunft für soziale Netzwerke, mit ihrem öffentlichen Renderer." },
        "social-hub": { name: "Online-Präsenz", description: "Soziale Netzwerke, Google Business Profile, OTA-Einträge und SEO/GEO-Kontrolle. Derzeit im PMS-Menü ausgeblendet." },
        "archivos": { name: "Dateibibliothek", description: "Gemeinsamer Speicher für Bilder und Dokumente der Unterkunft." },
        "staypass": { name: "StayPass", description: "Gästeportal: Konto, Buchungen und Profil. Öffentliche Oberfläche, wird nicht aus dem PMS geöffnet." },
      },
    },
    homeTitle: "Ein System, ein Preis",
    homeSubtitle:
      "Alles, was eine Unterkunft zum Betreiben und Verkaufen braucht — ohne fünf Anbieter und ohne Provision pro Buchung.",
    empty:
      "Die Tarife konnten gerade nicht geladen werden. Sie sind monatlich, pro Unterkunft, ohne Provision pro Buchung und ohne Mindestlaufzeit: [Schreiben Sie uns](/contacto), und wir schicken sie Ihnen mit Zahlen.",
    matrix: {
      caption: "Was jeder roombir-Tarif enthält",
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

  createAccount: {
    meta: {
      title: "Konto erstellen · roombir",
      description:
        "Erzählen Sie uns von Ihrer Unterkunft und wir schicken Ihnen den Zugang per E-Mail.",
    },
    eyebrow: "Loslegen",
    title: "Erzählen Sie uns von Ihrer *Unterkunft*.",
    lead: "Vier Angaben und wir schicken den Zugang per E-Mail. Die Einrichtung dauert einen Nachmittag, und Sie machen sie selbst.",
    checks: [
      "Geführte Einrichtung in neun Schritten, **nichts zu installieren**",
      "Wir migrieren Ihre Buchungen und Raten gemeinsam",
      "Eigene Buchungsmaschine, auf Ihrer Website und Ihrem LinkHub",
      "Echte Menschen, die antworten, in Ihrer Sprache",
    ],
    steps: [
      { title: "Sie füllen das Formular aus", text: "Vier Angaben zur Unterkunft und Ihre E-Mail." },
      { title: "Der Zugang kommt an", text: "Ein persönlicher Link, nur einmal gültig, der die Anmeldung öffnet." },
      { title: "Sie legen Ihr Passwort fest", text: "Und starten die geführte Einrichtung in neun Schritten." },
    ],
    form: {
      groupProperty: "Ihre Unterkunft",
      groupContact: "Ihre Daten",
      hotelName: "Name der Unterkunft",
      hotelNamePlaceholder: "Hotel Alpenblick",
      lodgingType: "Art",
      lodgingTypes: {
        hotel: "Hotel",
        apart_hotel: "Aparthotel",
        hostel: "Hostel",
        cabins: "Hütten",
        inn_bnb: "Pension oder B&B",
        apartment: "Ferienwohnungen",
        house: "Haus",
        country_house: "Landhaus",
        resort: "Resort",
        lodge: "Lodge",
        glamping: "Glamping",
        camping: "Campingplatz",
        villas: "Villen",
        other: "Andere",
      },
      units: "Zimmer oder Einheiten",
      unitsPlaceholder: "12",
      unitsHint: "Die, die Sie heute verkaufen können.",
      country: "Land",
      countryCommon: "Am häufigsten",
      countryAll: "Alle Länder",
      city: "Stadt",
      cityPlaceholder: "Garmisch-Partenkirchen",
      contactName: "Ihr Name",
      contactNamePlaceholder: "Vor- und Nachname",
      email: "Ihre E-Mail",
      emailPlaceholder: "sie@ihreunterkunft.com",
      emailHint: "Dorthin geht der Zugang, nehmen Sie also eine, die Sie lesen.",
      phone: "Telefon oder WhatsApp",
      phonePlaceholder: "+49 151 …",
      optional: "optional",
      choose: "Bitte wählen",
      honeypot: "Nicht ausfüllen",
      submit: "Zugang erhalten",
      sending: "Wird gesendet…",
      legal:
        "Wir nutzen Ihre Daten nur, um Ihnen Zugang zu geben und Sie bei der Einrichtung zu begleiten. Sie können die Löschung jederzeit verlangen. Mehr in der [Datenschutzerklärung](/legal/privacidad).",
      errors: {
        hotelName: "Geben Sie den Namen Ihrer Unterkunft ein.",
        lodgingType: "Wählen Sie die Art der Unterkunft.",
        units: "Geben Sie an, wie viele Zimmer oder Einheiten Sie haben.",
        country: "Wählen Sie das Land.",
        city: "Geben Sie die Stadt ein.",
        contactName: "Geben Sie Ihren Namen ein.",
        emailRequired: "Geben Sie Ihre E-Mail ein.",
        emailInvalid: "Diese E-Mail sieht nicht gültig aus.",
        disposable: "Nutzen Sie eine dauerhafte Adresse: dorthin geht der Zugang.",
        rate: "Zu viele Versuche hintereinander. Versuchen Sie es in ein paar Minuten erneut.",
        mail: "Wir konnten die E-Mail nicht senden. Versuchen Sie es in ein paar Minuten erneut.",
        generic: "Wir konnten es nicht senden. Schreiben Sie uns an hola@roombir.com.",
        network: "Keine Verbindung. Prüfen Sie Ihr Netz und versuchen Sie es erneut.",
      },
      done: {
        title: "Sehen Sie in Ihr Postfach",
        text: "Wir haben den Zugang an {email} geschickt. Der Link ist persönlich und nur einmal gültig.",
        textNoEmail: "Wir haben den Zugang per E-Mail geschickt. Der Link ist persönlich und nur einmal gültig.",
        notes: [
          "Wenn er nicht in ein paar Minuten ankommt, schauen Sie in Spam oder Werbung.",
          "Der Link läuft in 7 Tagen ab.",
          "Bei einer falschen Adresse füllen Sie das Formular einfach erneut aus.",
        ],
      },
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
    errorGeneric: "Wir konnten es nicht senden.",
    errorRate: "Zu viele Sendungen hintereinander.",
    errorTail: "Wenn es weiterhin fehlschlägt, schreiben Sie uns an hola@roombir.com.",
    legal:
      "Wir verwenden Ihre Daten nur, um Sie zu Roombir zu kontaktieren. Sie können jederzeit ihre Löschung verlangen. Mehr in der [Datenschutzerklärung](/legal/privacidad).",
    doneTitle: "Angekommen.",
    doneText:
      "Wir melden uns in den nächsten Stunden. Wenn Sie nicht warten möchten, können Sie die Einrichtung sofort starten: geführt, und Sie machen sie selbst.",
  },

  home: {
    hero: {
      l1a: "Holen Sie Ihre",
      l1b: "Unterkunft",
      l2: "aus dem Gestern",
      pill: "nichts zu\ninstallieren",
      l3a: "und lassen Sie sie",
      l3b: "wachsen.",
      kicker: "Hospitality-Management-System",
      lead: "Software für Hotels, Ferienhäuser, Hostels und Ferienwohnungen: Reservierungen, eigene Booking-Engine, Website, Revenue und ein KI-Assistent, auf einer einzigen Datenbank.",
    },

    works: {
      eyebrow: "Was sich ändert",
      title: "Führen Sie Ihre ganze Unterkunft *von einem Ort aus*.",
      cardLabel: "Buchung aktualisiert",
      items: [
        {
          title: "Keine Doppelbuchung mehr",
          text: "Ihre Website, Ihr LinkHub und die Rezeption verkaufen denselben Bestand. Eine Nacht einer Einheit wird nur einmal verkauft, und die Verfügbarkeit ändert sich sofort, ohne etwas zu synchronisieren.",
        },
        {
          title: "Überlassen Sie den Betrieb dem Assistenten",
          text: "Ein Satz genügt: Buchung verschieben, Rate ändern, Gast informieren. Er erledigt es mit Ihren Berechtigungen und zeigt, was er angefasst hat, mit Rückgängig griffbereit.",
        },
        {
          title: "Nehmen Sie den Preis, den jedes Datum verdient",
          text: "Revenue berechnet den Preis jedes Datums mit dem Warum im Blick (Auslastung, Tempo, Events, Wettbewerb) und wendet ihn von selbst auf die Booking-Engine an.",
        },
      ],
    },
    // La habitación en 3D bajo la cinta: la cámara sigue al cursor.
    room: {
      eyebrow: "Gemacht für Unterkünfte",
      title: "Jedes Zimmer *an seinem Platz*.",
      lead: "Buchungen, Reinigung, Preise und Gast jeder Einheit liegen in derselben Datenbank: Was sich auf einem Bildschirm ändert, hat sich schon überall geändert.",
      hint: "Bewegen Sie den Cursor, um sich umzusehen",
      label: "3D-Illustration eines Zimmers",
    },
    swap: {
      eyebrow: "Warum es das gibt",
      title: "Was Sie heute *einzeln kaufen*.",
      lead:
        "Eine kleine oder mittlere Unterkunft sollte nicht fünf Anbieter und einen Berater brauchen, um digital zu arbeiten. Das ist die These von roombir, und sie entscheidet jede Produktfrage darin.",
      headOld: "Was Sie heute einzeln kaufen",
      headNew: "In roombir",
      rows: [
        { old: "PMS für Buchungen und Zimmer", now: "Bereiche Buchungen + Zimmer" },
        { old: "Buchungsmaschine", now: "Öffentliche Maschine + Engine Studio" },
        { old: "Website-Baukasten", now: "Builder + Renderer mit eigener Domain" },
        { old: "RMS für Revenue Management", now: "Bereich Revenue" },
        { old: "Link-in-Bio und digitale Präsenz", now: "LinkHub + Online-Präsenz" },
        { old: "Gästeportal", now: "StayPass" },
        { old: "Assistent / Automatisierungen", now: "Roombir KI" },
      ],
    },
    modules: {
      eyebrow: "Was es ist",
      title: "Ein System, *keine Brücke* zwischen den Teilen.",
      lead:
        "Das sind keine Integrationen, die nachts synchronisieren: das sind verschiedene Sichten auf dieselben Daten. Den Preis einer Kategorie zu ändern ist sofort in der Buchungsmaschine sichtbar, ohne etwas zu veröffentlichen.",
      items: {
        ia: {
          title: "Roombir KI",
          desc: "Die gesamte Verwaltung in einem Gespräch. Sie legt Buchungen an und verschiebt sie, ändert Raten und bearbeitet Ihre Website, und bevor sie sich zu Ihrer Destination äußert, liest sie ein Dossier mit fünfzehn datierten Quellen.",
        },
        pms: {
          title: "PMS",
          desc: "Unterkünfte, Zimmer, Buchungen und die Maschine, die der Gast sieht, auf einem einzigen Inventar. Einmal erfassen, im Kalender bedienen.",
        },
        informes: {
          title: "Berichte",
          desc: "Belegung, Einnahmen, Stornierungen und Kanäle, und was heute falsch erfasst ist.",
        },
        revenue: {
          title: "Revenue",
          desc: "Der Preis für jedes Datum mit der Nachvollziehbarkeit des Warum, und die Rate, die von selbst in die Maschine geht.",
        },
        marketing: {
          title: "Marketing",
          desc: "Website mit Assistent, Marke, Fotos, Bewertungen und LinkHub, alles verbunden mit Ihren Buchungen.",
        },
      },
    },
    how: {
      eyebrow: "So funktioniert es",
      title: "Von der Unterkunft zur Buchung, *in vier Schritten*.",
      lead:
        "Einmal erfassen und in der Reihenfolge nutzen, in der ein Rezeptionstag abläuft. Es gibt kein Modul, das mit einem anderen verbunden werden müsste.",
      steps: [
        {
          title: "Sie erfassen die Unterkunft und die Zimmer",
          text: "Typ, Adresse, Währung und Kontakt; danach die Kategorien und Einheiten, als Pool oder mit eigenem Namen. Die Verfügbarkeit initialisiert sich von selbst.",
          href: "/producto/pms",
          link: "Zum PMS",
        },
        {
          title: "Sie veröffentlichen Website und Link mit der Maschine darin",
          text: "Website und LinkHub entstehen aus derselben Marke und lesen dasselbe Inventar. Der Gast sieht den Preis jedes Tages und bucht allein.",
          href: "/producto/marketing",
          link: "Zum Marketing",
        },
        {
          title: "Die Buchungen kommen an, und Sie bedienen sie",
          text: "Tagesübersicht, Liste und Tape Chart. Eine Nacht einer Einheit wird nur einmal verkauft, und die E-Mail an den Gast geht ohne Einrichtung raus.",
          href: "/producto/pms",
          link: "Zu den Buchungen",
        },
        {
          title: "Zahlen und Preis, ohne Tabelle",
          text: "Berichte auf denselben Buchungen, Revenue mit dem Warum jeder Rate und ein Assistent, den Sie um den Rest in einem Satz bitten.",
          href: "/producto/ia",
          link: "Zu Roombir KI",
        },
      ],
    },
    spaces: {
      eyebrow: "Was sonst niemand hat",
      title: "Jeder Arbeitsplatz sieht *sein* System, nicht Ihres.",
      lead:
        "Rezeption, Housekeeping, Marketing und Verwaltung arbeiten auf denselben Daten, aber jeder Arbeitsbereich hat sein eigenes Menü, seinen eigenen Startbildschirm und seine eigenen Berechtigungen. Niemand lernt, die Hälfte einer Anwendung zu ignorieren.",
      items: [
        "Das Menü baut sich selbst: ein Marketing-Arbeitsbereich **zeigt** den Bereich Buchungen **nicht**.",
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
      eyebrow: "Roombir KI",
      title: "Ein Assistent, der *handelt*, nicht einer, der vorschlägt.",
      lead:
        "Es ist kein Chat, der erklärt, wo man klickt. Er prüft Verfügbarkeit, legt Buchungen an, verschiebt einen Aufenthalt mit Vorschau, passt Raten an, genehmigt RMS-Events oder veröffentlicht eine Website. Und all das mit Ihren Berechtigungen, nicht mit eigenen.",
      items: [
        "Alles, was in der App möglich ist, können Sie ihr in einem Satz auftragen.",
        "Man sieht das Protokoll des Zuges: welches Werkzeug er benutzt hat und was zurückkam.",
        "Er antwortet mit ausführbaren Karten, nicht nur mit Text.",
        "Drei Berechtigungsebenen: Filter vor dem Zug, Kontext im Prompt und Prüfung bei jedem Aufruf.",
      ],
      link: "Roombir KI ansehen",
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
          key: "reservations@roombir.com",
          title: "Sie richten keinen Mailserver ein",
          text: "Alle Gast-E-Mails — Bestätigung, Token, Änderungshinweis — gehen von der roombir-Domain aus, mit Ihrem Postfach als Antwortadresse. Das ist eine der klassischen Reibungen beim Einrichten eines PMS und wurde bewusst abgeschafft.",
        },
      ],
    },
    stats: {
      eyebrow: "Die echte Größe",
      title: "Keine Versprechen: *es ist schon gebaut*.",
      lead:
        "Roombir ist im Marktpiloten, deshalb zeigen wir Ihnen noch keinen aufgeblasenen Hotelzähler. Was wir zeigen können, ist, was heute im Produkt steckt.",
      items: [
        { value: "21", label: "Apps, aktivierbar pro Arbeitsbereich" },
        { value: "38", label: "geführte Touren über dem echten Bildschirm" },
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
    commitments: {
      eyebrow: "Was andere nicht sagen",
      title: "Drei Dinge, die Sie *prüfen können*, bevor Sie mit jemandem sprechen.",
      lead:
        "In dieser Kategorie merkt man erst in der dritten Woche, was fehlt, und die Demo kommt vor dem Produkt. Hier ist es umgekehrt: jede dieser drei Zeilen hat einen Ort, an dem sie sich nachprüfen lässt.",
      verify: "Prüfen",
      items: [
        {
          key: "traza",
          title: "Jede KI-Aktion, sichtbar",
          text: "Der Assistent handelt mit Ihren Berechtigungen und hinterlässt das Protokoll jedes Zugs: welches Werkzeug er nutzte, mit welchen Daten und was sich änderte, **mit Rückgängig griffbereit**.",
          href: "/producto/ia",
        },
        {
          key: "ia",
          title: "Eine KI kann diese Website lesen",
          text: "Sie hat ihre eigene `llms.txt` mit denselben Zahlen wie diese Seite. Wir tun es selbst, bevor wir es von Ihnen verlangen.",
          href: "/llms.txt",
        },
        {
          key: "alta",
          title: "Geführte Einrichtung, nichts zu installieren",
          text: "Sie richten sich selbst ein, in neun Schritten, die auf dem Server gespeichert werden, und steigen über den Browser ein. **Kein Anruf vorab** und keine Inbetriebnahme, auf die Sie warten müssen.",
          href: "/crear-cuenta",
        },
      ],
    },
    day: {
      eyebrow: "Ein ganz normaler Dienstag",
      title: "Derselbe Tag, *mit und ohne* roombir.",
      lead:
        "Kein Versprechen von mehr Buchungen: ein Rezeptionstag in einer Unterkunft mit zwölf Einheiten. Links steht, was man uns beim ersten Anruf erzählt; rechts, was das System in jedem dieser Momente tut.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "08:10",
          old: "Drei WhatsApp-Anfragen nach Verfügbarkeit fürs Wochenende. Sie öffnen die Tabelle und antworten eine nach der anderen.",
          now: "Alle drei haben schon in den Engine-Kalender geschaut: Preis und freie Einheiten, Tag für Tag. Zwei haben von selbst gebucht.",
        },
        {
          time: "09:30",
          old: "Ein Gast hat vor einem Monat in Pesos angezahlt. Sie rechnen von Hand nach, was noch offen ist, zum heutigen Dollarkurs.",
          now: "Die Buchung behält die Umrechnung und friert sie beim Check-in ein. Der Restbetrag hat sich nicht bewegt.",
        },
        {
          time: "11:00",
          old: "García kommt an und Sie wissen nicht, in welches Zimmer. Das Housekeeping auch nicht.",
          now: "Die Rezeption bittet den Assistenten, ihn in die 203 zu verlegen und ihm eine E-Mail zu schicken. Das Housekeeping sieht es auf seinem Board, ohne dass jemand schreibt.",
        },
        {
          time: "14:20",
          old: "Sie stellen fest, dass die Hütte Alerce für Samstag doppelt verkauft wurde.",
          now: "Unmöglich: jede Nacht jeder Einheit ist eine eindeutige Sperre in der Datenbank. Die zweite Buchung ist nie hineingekommen.",
        },
        {
          time: "17:00",
          old: "Wer die Website gebaut hat, antwortet nicht, und der Suitenpreis ist online immer noch veraltet.",
          now: "Sie haben den Preis unter Raten geändert und er steht schon in der Engine, auf der Website und im LinkHub. Sie haben nichts veröffentlicht.",
        },
        {
          time: "19:45",
          old: "Sie fragen sich, ob der Samstag teurer werden sollte. Sie entscheiden aus dem Bauch.",
          now: "Revenue zeigt +15 % mit dem Grund im Klartext: Auslastung, Pace und ein Event in drei Tagen. Sie nehmen an und es geht in die Engine.",
        },
      ],
    },
    compare: {
      eyebrow: "Falls Sie vergleichen",
      title: "Roombir *gegen* die, die Sie schon kennen.",
      lead:
        "Vergleiche, die nützen sollen, auch wenn Sie sich nicht für uns entscheiden: was jeder besser macht, was wir noch nicht tun und in welchem Fall der andere die richtige Wahl ist. Geprüft an ihrer öffentlichen Website, mit Datum.",
      link: "Alle Vergleiche ansehen",
    },
    faq: [
      {
        q: "Taugt es für Hütten und Wohnungen oder nur für Hotels?",
        a: "Für beides, und nicht mit demselben Trick. Eine Kategorie lässt sich als **Pool** verkaufen — zehn austauschbare Doppelzimmer, der Gast kauft „ein Doppelzimmer“ — oder als **einzelne Einheit 1:1**, bei der die Kategorie eine einzige Einheit mit eigenem Namen umfasst. Die Wahl trifft man pro Kategorie, nicht pro System: eine Anlage mit sechs Hütten und zwei Standardzimmern funktioniert ohne Verrenkungen.",
      },
      {
        q: "Brauche ich einen Channel Manager, um Roombir zu nutzen?",
        a: "Nicht für den Betrieb, aber sagen wir es klar: **Roombir hat noch keinen Channel Manager**. Wenn Sie über Booking oder Expedia verkaufen, wird diese Verfügbarkeit heute von Hand abgeglichen. Das System ist darauf ausgelegt, dass die Direktbuchung — Ihre Website, Ihr LinkHub, Ihre Maschine — nicht mehr in einem Chat verloren geht, und von dort kommt der größte Teil des Umsatzes, den Sie heute nicht kontrollieren.",
      },
      {
        q: "Wie kassiere ich die Buchungen?",
        a: "Beim Check-in, vor Ort. **Ein integriertes Zahlungs-Gateway gibt es noch nicht.** Was es gibt, ist echte Mehrwährungsfähigkeit: Sie führen die Preise in einer Basiswährung, kassieren in einer anderen, und die Umrechnung bleibt bis zum Check-in lebendig und friert dort ein, damit sich der abgerechnete Betrag nachträglich nicht ändert.",
      },
      {
        q: "Muss ich etwas installieren oder konfigurieren?",
        a: "Man kommt über den Browser hinein. Die Einrichtung sind neun geführte Schritte, die auf dem Server gespeichert werden — Sie können auf halbem Weg aufhören und am Telefon weitermachen — und es gibt keinen Mailserver zu konfigurieren: **alle Gast-E-Mails gehen von der roombir-Domain aus**, mit Ihrem Postfach als Antwortadresse.",
      },
      {
        q: "Kann ich meine eigene Domain verwenden?",
        a: "Ja. Jede veröffentlichte Website nimmt einen eigenen Hostnamen an, und jede Sprachvariante kann ihren eigenen haben. Auch der LinkHub hat seine öffentliche Adresse, mit QR-Code zum Ausdrucken.",
      },
      {
        q: "Kann die KI in meinem System alles tun?",
        a: "Nein, und das ist Absicht. Der Assistent handelt, indem er **Ihre echte Identität annimmt**, mit einer kurzlebigen Berechtigung, die bei jedem Aufruf neu ausgestellt wird. Vor dem Zug werden ihm die Werkzeuge weggenommen, die Ihr Benutzer nicht verwenden darf, und jeder Vorgang wird erneut gegen die Richtlinie des Dienstes geprüft. Wird Ihnen mitten im Gespräch ein Zugang entzogen, scheitert die nächste Aktion und der Assistent erklärt warum.",
      },
      {
        q: "Was ist der Unterschied zu Cloudbeds oder Little Hotelier?",
        a: "In drei überprüfbaren Punkten: Revenue Management und der KI-Assistent sind Teil des Systems, keine Zusatzmodule; der Assistent führt aus statt vorzuschlagen und hinterlässt das Protokoll jedes Zugs; und alles (Buchungen, Booking-Engine, Website, Revenue) liest dieselbe Datenbank, ohne Synchronisation.",
      },
    ],
    cta: {
      title: "Bringen Sie es *diese Woche* zum Laufen.",
      lead:
        "Die Einrichtung ist geführt, und Sie machen sie selbst. Wenn Sie möchten, dass wir Sie beim Erfassen der Zimmer begleiten — dem aufwendigsten Schritt —, machen wir das in einem kurzen Gespräch.",
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
        "Roombir KI, das PMS (Unterkünfte, Zimmer, Buchungen und Maschine), Berichte, Revenue und Marketing auf einer einzigen Datenbank. Was jeder Teil tut und wie sie zusammenhängen.",
    },
    hero: {
      eyebrow: "Die Plattform",
      title: "Jeder Teil des Systems, *auf denselben Daten*.",
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
      title: "21 Apps, die sich *ein- und ausschalten*.",
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
      items: {
        ia: {
          title: "Roombir KI",
          desc: "Ein Assistent, der das ganze System in einem Gespräch bedient: Buchungen, Raten, Zimmer, die Website, das Revenue. Er geht von einem Dossier Ihrer Destination mit fünfzehn datierten Quellen aus und arbeitet mit Ihren Berechtigungen.",
        },
        pms: {
          title: "PMS",
          desc: "Unterkünfte mit eigener Währung und eigenem Team; Kategorien als Pool oder mit eigenem Namen; Tagesübersicht, Liste und Tape Chart; und die Maschine, in der der Gast den Preis jedes Tages sieht und allein bucht, in zehn Währungen.",
        },
        informes: {
          title: "Berichte",
          desc: "Belegung, durchschnittliche Rate, Einnahmen, Stornierungen und Kanäle auf denselben Buchungen, die Sie bedienen, und ein Abschnitt mit dem, was heute falsch erfasst ist.",
        },
        revenue: {
          title: "Revenue",
          desc: "Ein Entscheidungsdokument pro Datum mit vollständiger Nachvollziehbarkeit, Pace gegen die eigene Historie, Mitbewerber, Events Ihrer Destination und der Rate, die bei Annahme in die Maschine geht.",
        },
        marketing: {
          title: "Marketing",
          desc: "Der Website-Editor mit Assistent, die Marke, die Fotobibliothek, die Galerien, die Bewertungen, der LinkHub und die Ebene, die Ihre Unterkunft für eine KI lesbar macht.",
        },
      },
    },
    ia: {
      eyebrow: "Die verbindende Ebene",
      title: "Der Assistent sieht *das ganze System*, nicht ein Modul.",
      lead:
        "Weil die Daten eine Einheit sind, schafft der Agent in einem Satz, was in einem anderen Stack drei Tabs und zwei Exporte sind: Pace ansehen, eine Rate anpassen und die Aktion auf der Website veröffentlichen.",
      items: [
        "Bedient Buchungen, Raten, Verfügbarkeit, Zimmer, Unterkünfte, Revenue, Marketing, Dateien, Unternehmen und System.",
        "Buchungs- und Revenue-Karten mit Buttons, die ausführen, unter derselben Berechtigungsprüfung.",
        "Sitzungsverlauf, gefiltert nach dem aktiven Arbeitsbereich.",
      ],
      link: "Roombir KI ansehen",
    },
    stats: [
      { value: "21", label: "aktivierbare Apps" },
      { value: "30", label: "Widgets des adaptiven Dashboards" },
      { value: "38", label: "geführte Touren" },
    ],
    ask: "Sie suchten etwas Bestimmtes?",
    askLink: "Fragen Sie uns",
    cta: {
      title: "Schauen Sie *hinein*.",
      lead:
        "Die Einrichtung ist geführt. Wenn Sie es lieber vorher gezeigt bekommen: fragen Sie eine Demo an und wir gehen es mit Ihren Daten durch.",
      steps: [
        "Sie legen Unternehmen und Objekt an.",
        "Sie erfassen Zimmer und Einheiten.",
        "Maschine und Website sind bereit zur Veröffentlichung.",
      ],
    },
  },

  pms: {
    meta: {
      title: "PMS",
      description:
        "Unterkünfte, Zimmer und Buchungen in einem Produkt: Unterkunft und Zimmer einmal anlegen, Buchungen kommen über die Booking-Engine oder von Hand herein, und Sie steuern sie im Tagespanel und im Kalender.",
    },
    hero: {
      eyebrow: "PMS · Unterkünfte, Zimmer und Buchungen",
      title: "Ihre ganze Unterkunft, *an einem Ort*.",
      lead:
        "Sie erfassen die Unterkunft und die Zimmer einmal. Buchungen kommen über Ihre Maschine herein oder Sie tragen sie selbst ein, und Sie bedienen sie in der Tagesübersicht und im Kalender. Es ist eine einzige Datenbank: Was sich auf einem Bildschirm ändert, hat sich schon auf allen geändert.",
    },
    propiedades: {
      eyebrow: "01 · Unterkünfte",
      title: "Mehrere Unterkünfte, *ein einziges Konto*.",
      lead:
        "Ein Hotel in Mendoza und sechs Hütten in Villa La Angostura, mit demselben Benutzer. Jede Unterkunft mit eigener Währung, eigener Zeitzone und eigenem Team; jede Person sieht nur die, die ihr zustehen.",
      items: [
        "**Zugriff pro Unterkunft und pro Funktion**: Wer die Rezeption der Hütten betreut, kommt in die Hütten, mit dem Rezeptionsmenü; wer verwaltet, sieht alles.",
        "**Arbeitsbereiche nach Funktion** — Rezeption, Reinigung, Marketing, Revenue —, jeder mit eigenem Menü und eigenem Startbildschirm.",
        "**Alles andere hängt an der Unterkunft**: Zimmer, Buchungen, Marke, Website, LinkHub und Bewertungen werden einmal erfasst. Sie ändern das Telefon, und es ändert sich überall.",
        "**Die zweite Unterkunft kopiert die Struktur der ersten**, und Sie wechseln mit einem Auswähler oben von einer zur anderen, ohne auszuloggen oder neu einzusteigen.",
      ],
    },
    habitaciones: {
      eyebrow: "02 · Zimmer",
      title: "Nach Kategorie oder Einheit, *wie Sie verkaufen*.",
      lead:
        "Ein Hotel verkauft ein Doppelzimmer Superior und weist die 203 später zu. Eine Anlage verkauft die Hütte Alerce, mit ihren Fotos und ihrem Preis. Roombir macht beides, und beides gleichzeitig in derselben Unterkunft.",
      items: [
        "**Kategorie-Pool**: Der Gast kauft „ein Doppelzimmer Superior“, und das System weist das Zimmer zu, wobei es Lücken minimiert oder die Abnutzung verteilt. Oder es lässt es unzugewiesen, damit die Rezeption entscheidet.",
        "**Benannte Einheit**: Die Kategorie umfasst eine einzige Einheit. Der Gast bucht die Hütte Alerce, mit ihren Fotos und ihrem Preis.",
        "**Sechs Zustände mit Verlauf** — verfügbar, belegt, Reinigung, Wartung, gesperrt und Abreise ausstehend —, Board nach Stockwerk und Belegungsplan.",
        "**Massenerfassung in zwei Schritten** und Sperren nach Tageshälften, die dieselbe Sperre wie eine Buchung nutzen.",
      ],
    },
    reservas: {
      eyebrow: "03 · Buchungen",
      title: "Jeder Moment der Schicht, *sein Bildschirm*.",
      lead:
        "Acht Ansichten auf demselben Datenbestand: Eine Buchung im Kalender zu verschieben ändert das Zimmer, gibt die Nacht in der Maschine frei und erscheint im Bericht.",
      items: [
        {
          title: "Tagesübersicht",
          desc: "An- und Abreisen des Tages, mit ausführbaren Karten. Das ist der Bildschirm, mit dem die Rezeption die Schicht eröffnet.",
        },
        {
          title: "Alle Buchungen",
          desc: "Die Liste mit Filtern und einem Seitenpanel, das sich öffnet, ohne die Ansicht zu verlassen: Zusammenfassung, Aktivität und Notizen. Von dort weist man das Zimmer zu und ändert den Status.",
        },
        {
          title: "Kalender",
          desc: "Zimmer pro Tag. Sie ziehen eine Buchung oder dehnen sie, und bevor Sie loslassen, sehen Sie, ob es einen Konflikt gibt und was mit dem Preis passiert.",
        },
        {
          title: "Neue Buchung",
          desc: "Die, die per Telefon oder WhatsApp hereinkam: Gast, Daten, Belegung nach Alter, Herkunftskanal, Aktionen und Notizen.",
        },
        {
          title: "Raten",
          desc: "Basispreis pro Kategorie und Ratenpläne mit Gültigkeit, Währung und Mindestaufenthalt.",
        },
        {
          title: "Verfügbarkeit",
          desc: "Ampel pro Tag — frei, teilweise, voll, geschlossen — und Restriktionen: geschlossen für Anreise oder Abreise, Mindest- und Höchstaufenthalt.",
        },
        {
          title: "Aktionen",
          desc: "Automatisch oder mit Code, nach Prozentsatz, Festbetrag oder Preis pro Nacht, mit fertiger Darstellung für Ihre Website.",
        },
        {
          title: "Einstellungen",
          desc: "Währung, Bestätigung, Aufenthaltsregeln, Zeiten und wie die Zimmer zugewiesen werden. Dazu das Engine Studio für Texte und Farben.",
        },
      ],
    },
    motor: {
      eyebrow: "PMS · Buchungsmaschine",
      title: "Ein Kalender, der *antwortet, bevor man fragt*.",
      lead:
        "Der übliche Datumswähler fragt zwei Tage ab, und das war's. Der der Maschine zeigt, Tag für Tag und je nachdem, was Sie freigeben, das, was die Person Sie sonst vor der Buchung per WhatsApp gefragt hätte.",
      items: [
        "**Preis ab** an jedem Tag, berechnet mit denselben Raten, die die Maschine berechnet.",
        "**Verbleibende Einheiten**: Ihr echtes Inventar, kein erfundener Zähler.",
        "**Geschlossene Tage**, geschlossen für Anreise oder Abreise, und der **Mindestaufenthalt** bei der Wahl der Anreise.",
        "**Der Gast bestätigt per E-Mail oder Sie bestätigen**: Ausstehende Buchungen laufen von selbst ab, und die E-Mail geht von der roombir-Domain raus, ohne dass Sie etwas einrichten.",
      ],
    },
    prices: {
      eyebrow: "Jede Rate, einzeln",
      title: "Der Preis jeder Nacht, *mit seinem Warum*.",
      lead:
        "Wenn die Maschine sagen muss, was eine Nacht kostet, löst sie eine feste Kette auf, immer in derselben Reihenfolge. Zu wissen, aus welcher Stufe jeder Preis stammt, ist der Unterschied zwischen dem System vertrauen und es jeden Morgen prüfen.",
      items: [
        "**Zuerst, was Sie in Revenue akzeptiert haben**: Gibt es für dieses Datum eine empfohlene und angenommene Rate, gilt sie.",
        "**Danach der Ratenplan**, der für diese Kategorie und dieses Datum gültig ist, mit seinem Mindestaufenthalt.",
        "**Gibt es keinen Plan, der Basispreis** der Kategorie. Jede Hütte kann ihren eigenen haben.",
        "**Ganz oben die Aktionen**: Rabatt oder Aufschlag — eine Aktion kann den Preis in der Hochsaison auch anheben —, automatisch oder mit Code.",
      ],
    },
    currency: {
      eyebrow: "Zehn Währungen",
      title: "Was der Gast sah, *bewegt sich nicht mehr*.",
      lead:
        "Der Gast sieht den Preis in seiner Währung, und Sie kassieren in Ihrer. Die Buchung bleibt immer in Ihrer Basiswährung, und die Umrechnung friert beim Check-in ein: Der Betrag, den Sie kassieren, ändert sich danach nicht mehr.",
      items: [
        "Dollar, argentinischer Peso, Real, chilenischer Peso, kolumbianischer Peso, mexikanischer Peso, Sol, uruguayischer Peso, Euro und Pfund.",
        "Für argentinische Pesos wählen Sie den Kurs: offiziell, blue, MEP oder CCL.",
        "Die Kurse werden alle drei Stunden aktualisiert und als veraltet markiert, wenn die Quelle nicht geantwortet hat.",
        "Die Berichte summieren direkt, weil alles in Ihrer Basiswährung bleibt.",
      ],
    },
    where: {
      eyebrow: "Wo die Maschine erscheint",
      title: "Auf der Website, der Bio *und für die KI*.",
      items: [
        {
          title: "Ihre Website",
          desc: "Ein Bereich des Website-Editors, der sich selbst mit Ihrem Inventar verbindet.",
        },
        {
          title: "Ihr LinkHub",
          desc: "Der Link in der Instagram-Bio öffnet dieselbe Maschine, identisch mit der auf Ihrer Website.",
        },
        {
          title: "Ein direkter Link",
          desc: "Eine eigene Seite mit der Adresse Ihrer Unterkunft, zum Verschicken per WhatsApp, wenn Sie noch keine Website haben.",
        },
        {
          title: "KI-Agenten",
          desc: "Mit eingeschalteter agentischer Ebene kann ein externer Assistent Ihre Verfügbarkeit lesen und eine Buchung abschließen. [Wie das funktioniert](/producto/marketing#agentes).",
        },
      ],
    },
    stats: [
      { value: "8", label: "Ansichten auf denselben Daten, um Buchungen zu bedienen" },
      { value: "10", label: "Währungen, mit blue, MEP, CCL oder offiziell für ARS" },
      { value: "6", label: "Zimmerzustände, mit Verlauf" },
      { value: "1", label: "Sperre pro Einheit und Nacht in der Datenbank" },
    ],
    faq: [
      {
        q: "Wie kassiere ich die Buchungen?",
        a: "Beim Check-in, persönlich. **Ein integriertes Zahlungsgateway gibt es noch nicht.** Was es gibt, ist echte Mehrwährungsfähigkeit: Der Gast sieht in seiner Währung, Sie kassieren in Ihrer, und die Umrechnung friert beim Check-in ein.",
      },
      {
        q: "Ist es mit Booking oder Expedia verbunden?",
        a: "Noch nicht: **Roombir hat keinen Channel Manager**. Wenn Sie über OTAs verkaufen, wird diese Verfügbarkeit heute von Hand abgeglichen. Das System ist so gebaut, dass die Direktbuchung — Ihre Website, Ihr LinkHub, Ihre Maschine — nicht mehr in einem Chat verloren geht.",
      },
      {
        q: "Was passiert, wenn zwei Personen dieselbe Nacht gleichzeitig buchen?",
        a: "Eine der beiden scheitert. Jede Nacht jeder Einheit ist eine **eindeutige Sperre in der Datenbank** — der Schlüssel ist die Einheit plus das Datum —, sodass der zweite Schreibvorgang nicht durchkommt. Das ist keine Prüfung im Code, die sich umgehen lässt: Es ist die Datenbank, die es verhindert.",
      },
      {
        q: "Ich habe Hütten und Zimmer. Kann ich beides haben?",
        a: "Ja, in derselben Unterkunft. Die Hütten laufen als benannte Einheit und die Zimmer als Pool, und sie bestehen im selben Kalender und in derselben Maschine nebeneinander.",
      },
      {
        q: "Wer bestätigt die Buchung?",
        a: "Das entscheiden Sie. In einem Modus entsteht die Buchung ausstehend, und **der Gast bestätigt sie** über einen Link, der per E-Mail kommt. Im anderen bleibt sie ausstehend, bis **die Rezeption sie annimmt**. In beiden Fällen laufen ausstehende Buchungen von selbst ab.",
      },
    ],
    cta: {
      title: "Erfassen Sie Unterkunft und Zimmer; *die Maschine ist bereit*.",
      lead:
        "Die Registrierung ist geführt, und Sie machen sie selbst. Wenn Sie beim Erfassen der Zimmer — dem aufwendigsten Schritt — lieber begleitet werden, machen wir das in einem kurzen Anruf.",
      steps: [
        "Sie legen die Unterkunft an und erfassen Kategorien und Einheiten.",
        "Sie konfigurieren die Maschine im Studio.",
        "Sie teilen den Link und verlieren keine Anfragen mehr im Chat.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Roombir KI",
      description:
        "Ein Assistent, der Ihre Unterkunft in einem Gespräch bedient: Er legt Buchungen an und verschiebt sie, ändert Raten und bearbeitet die Website, mit Ihren Berechtigungen. Bevor er sich zu Ihrer Destination äußert, liest er ein Dossier mit fünfzehn datierten Quellen.",
    },
    hero: {
      eyebrow: "Roombir KI",
      title: "Ihre ganze Unterkunft, *in einem Gespräch*.",
      lead:
        "Roombir KI bedient das ganze System: Sie legt Buchungen an und verschiebt sie, ändert Raten, sperrt Einheiten und bearbeitet Ihre Website. Bevor sie sich zu Ihrer Destination äußert, liest sie ein Dossier aus fünfzehn datierten Quellen. Und sie arbeitet mit Ihren Berechtigungen, nicht mit eigenen.",
    },
    ask: {
      eyebrow: "Was Sie ihm auftragen können",
      title: "Sie sagen es normal, *und es ist erledigt*.",
      lead:
        "Sie müssen keine Befehle lernen oder wissen, auf welchem Bildschirm was liegt. Das sind Bitten aus einem normalen Arbeitstag, und was der Assistent mit jeder davon macht.",
      items: [
        {
          area: "Buchungen",
          ask: "Verlegen Sie García ab Donnerstag von Zimmer 203 auf Zimmer 204",
          does: "Er sucht die Buchung, prüft, ob Zimmer 204 in diesen Nächten frei ist, und verschiebt sie. Sie bekommen die Karte mit der Änderung zurück.",
        },
        {
          area: "Raten",
          ask: "Erhöhen Sie die Doppelzimmer Superior an den Oktober-Samstagen um 10 %",
          does: "Er sagt Ihnen, welche Daten betroffen sind, und wendet es im Ratenplan an, sobald Sie bestätigen.",
        },
        {
          area: "Zimmer",
          ask: "Sperren Sie die Hütte Alerce am Dienstagnachmittag wegen Wartung",
          does: "Er legt die Sperre ab dem Nachmittag an: Die Dienstagnacht ist aus der Maschine draußen, der Vormittag bleibt verkäuflich.",
        },
        {
          area: "Website",
          ask: "Ändern Sie den Titel der Startseite und veröffentlichen Sie ihn",
          does: "Er bearbeitet den Text im Entwurf Ihrer Website und veröffentlicht ihn. Bitten Sie ihn nicht darum, bleibt es im Entwurf.",
        },
        {
          area: "Destination",
          ask: "Was mache ich am besten bei der Vendimia?",
          does: "Er liest das Dossier von Mendoza — Datum, Entfernung, nahe Feiertage, Flugrouten — und Ihren Pace für diese Nächte, und schlägt vor, was mit der Rate und dem Mindestaufenthalt zu tun ist.",
        },
        {
          area: "Berichte",
          ask: "Welcher Kanal storniert mir am meisten?",
          does: "Er liest den Kanalbericht und antwortet mit der Zahl und dem Kanal. Bei weniger als drei Buchungen behauptet er es nicht.",
        },
      ],
    },
    dossier: {
      eyebrow: "Tourismuslage",
      title: "Er weiß, wo *Ihre Destination* steht.",
      lead:
        "Bevor Roombir KI sich zu Ihrer Zone äußert, stellt sie ein Dossier aus fünfzehn öffentlichen Quellen zusammen, jede Angabe mit ihrem Datum: was diesen Monat passiert und was kommt. Das Modell geht nicht selbst suchen: es liest, was das System bereits geprüft hat.",
      items: [
        "**Feiertage, lange Wochenenden und Schulferien**, Ihre eigenen und die der Länder, aus denen Ihre Gäste kommen.",
        "**Events in Ihrem Radius**: Sport, Kultur, Kongresse und Messen, gefiltert nach Entfernung und nicht nach Land.",
        "**Welche Flüge in Ihrer Zone landen und von wo**: die Routen, die an den nahen Flughäfen beobachtet werden.",
        "**Wetter, Wechselkurs Ihrer Märkte und Warnungen** zu Sicherheit oder Naturgefahren.",
      ],
    },
    compare: {
      eyebrow: "Der Unterschied",
      title: "Ein generischer Chat sucht; *dieser hat ein Dossier*.",
      lead:
        "Ein allgemeiner KI-Chat formuliert sehr gut, sieht aber Ihr System nicht: Er sucht im Web, sammelt, was er findet, und fasst es zusammen. Roombir KI geht von Ihren Daten und von festen Quellen aus. Bitten Sie sie zusätzlich um eine Websuche, macht sie das auch.",
      headCriterion: "Was zählt",
      headUs: "Roombir KI",
      headThem: "Ein allgemeiner KI-Chat",
      rows: [
        {
          label: "Sieht Ihre Buchungen, Raten und Zimmer",
          us: "Ja: dieselben, die Sie bedienen",
          usTone: "ok",
          them: "Nein, außer Sie fügen ihm die Daten ein",
          themTone: "no",
        },
        {
          label: "Führt die Änderungen aus",
          us: "Ja, mit Ihren Berechtigungen",
          usTone: "ok",
          them: "Nein: er erklärt Ihnen, wo Sie klicken müssen",
          themTone: "no",
        },
        {
          label: "Woher die Angabe zu Ihrer Destination kommt",
          us: "Ein Dossier mit fünfzehn festen, datierten Quellen",
          usTone: "ok",
          them: "Was er in diesem Moment im Web findet",
          themTone: "mid",
        },
        {
          label: "Wenn eine Angabe fehlt",
          us: "Sagt Ihnen, dass sie fehlt",
          usTone: "ok",
          them: "Unterscheidet das nicht immer",
          themTone: "mid",
        },
        {
          label: "Sucht im Web",
          us: "Wenn Sie darum bitten",
          usTone: "ok",
          them: "Ja",
          themTone: "ok",
        },
        {
          label: "Formuliert, fasst zusammen und übersetzt",
          us: "Ja",
          usTone: "ok",
          them: "Ja",
          themTone: "ok",
        },
      ],
      legend: {
        ok: "ja",
        mid: "kommt darauf an",
        no: "nein",
        info: "ohne Bewertung",
      },
    },
    strategic: {
      eyebrow: "Strategischer Zug",
      title: "„Ich will mehr Buchungen“ *ist auch eine Bitte*.",
      lead:
        "Ein offenes Ziel passt nicht in den üblichen Kreislauf. Roombir KI liest Ihren gesamten Betrieb — die kommende Auslastung, den Pace, die Kanäle, die Konkurrenz, was noch zu konfigurieren ist — und wählt bis zu drei Spielzüge nach festen Regeln, nicht nach Belieben des Modells. Sie schlägt Ihnen einen Plan mit ausführbaren Schritten vor, und jeder Schritt verlangt Ihre Bestätigung.",
      items: [
        "Liest **18 Quellen aus Ihrem eigenen Betrieb** parallel, in rund einer Sekunde.",
        "Die Spielzüge wählt das System nach Regeln; das Modell diagnostiziert und formuliert.",
        "Eine Angabe, die nicht gelesen werden konnte, geht als fehlend ein: Sie wird nie mit Nullen aufgefüllt.",
        "Haben Sie bereits einen Plan laufen, nimmt sie ihn wieder auf, statt Ihnen einen neuen vorzuschlagen.",
      ],
    },
    perms: {
      eyebrow: "Berechtigungen",
      title: "Sie arbeitet mit *Ihren* Berechtigungen, nicht mit eigenen.",
      lead:
        "Das ist der heikle Punkt jedes Assistenten innerhalb eines Verwaltungssystems. Hier ist es in Ebenen gelöst, die zu unterschiedlichen Zeitpunkten greifen, und die letzte liegt dort, wo sie sich nicht umgehen lässt: bei der Ausführung.",
      items: [
        "**Was Ihr Benutzer nicht darf, wird dem Modell gar nicht erst angeboten**: an der Rezeption tut sie, was die Rezeption darf; in der Verwaltung, was die Verwaltung darf.",
        "**Was sich nicht rückgängig machen lässt, verlangt, dass Sie es eintippen**: Zum Bestätigen tippen Sie von Hand, was Sie löschen werden.",
        "**Löschungen verlangen einen Button**, kein „ja“, das im Gespräch untergeht.",
        "**Sie sehen das Protokoll** jedes Zugs: welches Werkzeug verwendet wurde, mit welchen Daten und was zurückkam.",
      ],
    },
    talk: {
      eyebrow: "Wie man mit ihr spricht",
      title: "Sie schreiben ihr, sprechen mit ihr, *zeigen ihr etwas*.",
      lead:
        "Innerhalb des Desktops, in dem Arbeitsbereich, in dem Sie gerade sind, mit dem Verlauf dieses Bereichs: Die Rezeption sieht die Gespräche des Marketings nicht.",
      items: [
        {
          title: "Per Diktat",
          desc: "Sie diktieren, statt zu tippen. Das funktioniert in jedem Browser, weil die Transkription auf unserer Seite passiert.",
        },
        {
          title: "Screenshots und PDF",
          desc: "Sie fügen einen Screenshot ein oder legen ein PDF ab — eine Ratentabelle, eine Liste von einer OTA — und sie arbeitet damit.",
        },
        {
          title: "Audio und Video",
          desc: "Ein Audio oder ein kurzes Video wird vor der Antwort zusammengefasst und fließt als Kontext ein. Bis zu zwei Minuten Audio.",
        },
        {
          title: "Das Web, wenn Sie danach fragen",
          desc: "Wenn Sie sie bitten, extern zu suchen, sucht sie. Sonst arbeitet sie mit Ihrem System und dem Dossier Ihrer Destination.",
        },
      ],
    },
    stats: [
      { value: "15", label: "Quellen im Dossier der Destination" },
      { value: "3", label: "Modellstufen, gewählt pro Zug" },
      { value: "5", label: "Sprachen" },
    ],
    faq: [
      {
        q: "Kann sie alles?",
        a: "Alles, was Ihr Benutzer in der App tun kann, ja: Abgedeckt ist **jeder Bildschirm des Systems**, außer dem, was wir absichtlich ausgelassen haben, wie den Gastablauf oder die Anmeldung. Was Ihr Benutzer nicht darf, wird dem Modell nicht angeboten: An der Rezeption tut sie, was die Rezeption darf, nicht mehr.",
      },
      {
        q: "Was passiert, wenn sie sich irrt?",
        a: "Deshalb gibt es Bremsen. Was Daten schreibt, bestätigt sie mit Ihnen im Gespräch. Was löscht, verlangt einen Button. Was sich nicht rückgängig machen lässt, verlangt, dass Sie von Hand eintippen, was Sie löschen werden. Und auf der Website arbeitet sie im Entwurf: Veröffentlichen ist ein eigener Schritt.",
      },
      {
        q: "Erfindet sie Daten zu meiner Destination?",
        a: "Das Dossier stellt das System zusammen, nicht das Modell: fünfzehn öffentliche Quellen, gelesen nach festen Regeln und mit ihrem Datum gespeichert. Hat eine Quelle nicht geantwortet, erscheint die Angabe als **fehlend**, und der Assistent muss das sagen. Eine erfundene Null ist schlimmer als eine fehlende Angabe, weil sie als Beleg zitiert wird.",
      },
      {
        q: "Sucht sie im Internet?",
        a: "Wenn Sie darum bitten, ja. Standardmäßig arbeitet sie mit Ihrem System und dem Dossier der Destination, das geprüfte Information ist, eine Quelle pro Thema. Die offene Suche bleibt für den Moment, in dem Sie sie wollen.",
      },
      {
        q: "Welches KI-Modell verwendet sie?",
        a: "Sie ist an keinen Anbieter gebunden. Jeder Zug wird klassifiziert und geht an das passende Modell: ein schnelles für Anfragen, ein leistungsfähigeres, wenn Daten geschrieben oder analysiert werden müssen. Erscheint ein besseres Modell, wechseln wir es auf unserer Seite, und Sie müssen nichts tun.",
      },
    ],
    cta: {
      title: "Fragen Sie etwas, *wofür Sie heute vier Tabs brauchen*.",
      lead:
        "Der Assistent nützt wirklich, wenn Ihr System darunter befüllt ist. Beginnen Sie mit der Registrierung, erfassen Sie eine Unterkunft und fragen Sie sie etwas Echtes.",
      steps: [
        "Sie registrieren sich und erfassen die Unterkunft.",
        "Sie öffnen Roombir KI vom Desktop aus.",
        "Sie fragen sie etwas Echtes und sehen sich das Protokoll an.",
      ],
    },
  },

  propiedades: {
    meta: {
      title: "Unterkünfte",
      description:
        "Mehrere Unterkünfte unter einem Unternehmen und einem einzigen Benutzer: jede mit eigener Währung, eigener Zeitzone und eigenem Team, und jede Person mit Zugriff nur auf die Unterkünfte und Bildschirme, die ihr zustehen.",
    },
    hero: {
      eyebrow: "Unterkünfte",
      title: "Mehrere Unterkünfte, *ein einziges Konto*.",
      lead:
        "Ein Hotel in Mendoza und sechs Hütten in Villa La Angostura, mit demselben Benutzer. Jede Unterkunft mit eigener Währung, eigener Zeitzone und eigenem Team; jede Person sieht nur die, die ihr zustehen.",
    },
    access: {
      eyebrow: "Zugriffe",
      title: "Jede Person, *nur ihr eigenes*.",
      lead:
        "Der Zugriff wird pro Unterkunft und pro Funktion vergeben. Wer die Rezeption der Hütten betreut, kommt in die Hütten, mit dem Rezeptionsmenü; wer verwaltet, sieht alles.",
      items: [
        "**Zugriff pro Unterkunft**: Eine Person kann alle oder nur einige haben, und wenn Sie sie von einer Unterkunft aus einladen, bleibt sie auf diese beschränkt.",
        "**Zehn administrative Berechtigungen**, die einzeln vergeben werden: Unterkünfte anlegen, Benutzer verwalten, Bereiche zuweisen, Apps aktivieren, Abrechnung und Websites, unter anderem.",
        "**Arbeitsbereiche nach Funktion** — Rezeption, Reinigung, Marketing, Revenue —, jeder mit eigenem Menü und eigenem Startbildschirm.",
        "**Ein Verwaltungsbereich**, der den vollständigen Katalog sieht, einschließlich später hinzugefügter Apps.",
      ],
    },
    sheet: {
      eyebrow: "Das Datenblatt",
      title: "Was jede Unterkunft *ausmacht*.",
      items: [
        {
          title: "Unterkunftstyp",
          desc: "Hotel, Resort, Aparthotel, Hostel, Hütten, Villa, Ferienvermietung oder Glamping. Der Typ bestimmt, wie der Rest startet.",
        },
        {
          title: "Adresse mit Karte",
          desc: "Sie fügen die Koordinaten von Google Maps ein, und sie ist verortet. Daraus entstehen die Karte Ihrer Website und das Dossier Ihrer Destination.",
        },
        {
          title: "Währung, Zeitzone und Sprache",
          desc: "Die jeder Unterkunft, nicht die des Unternehmens: Eine in Pesos und eine in Dollar bestehen problemlos nebeneinander.",
        },
        {
          title: "Öffentlicher Kontakt und Netzwerke",
          desc: "E-Mail, Telefon, WhatsApp, Instagram, Facebook und TikTok, einmal erfasst für Website, LinkHub und Maschine.",
        },
      ],
    },
    root: {
      eyebrow: "Die Wurzel",
      title: "Alles andere *hängt an der Unterkunft*.",
      lead:
        "Zimmer, Buchungen, Marke, Website, LinkHub, Bewertungen und Galerien werden auf eine Unterkunft geladen. Deshalb erfasst man sie einmal: Sie ändern das Telefon, und es ändert sich überall.",
      items: [
        "**Unterkunftsvorlagen**: Die zweite startet, indem sie die Bereiche und Apps der ersten kopiert.",
        "**Jede Unterkunft hat ihre eigene Maschine, ihre Website und ihren LinkHub**, mit eigener Marke.",
        "**Bereiche, die sich nicht versehentlich auflösen lassen**: Einer mit laufenden Buchungen oder aktiven Benutzern bleibt gesperrt.",
        "**Eine Unterkunft löschen** kann nur, wer Inhaber des Unternehmens ist.",
      ],
    },
    move: {
      eyebrow: "Zwischen Unterkünften",
      title: "Die Unterkunft wechseln *heißt nicht, das System zu wechseln*.",
      items: [
        {
          title: "Ein Auswähler oben",
          desc: "Unternehmen, Unterkunft und Arbeitsbereich wählen Sie an derselben Stelle, ohne auszuloggen oder neu einzusteigen.",
        },
        {
          title: "Eine Suche für alle",
          desc: "Strg oder Cmd + K findet Buchungen, Unterkünfte, Einheiten und Bildschirme. Sie findet oder findet nicht: Sie erfindet nichts.",
        },
        {
          title: "Benachrichtigungen, die wissen, wohin",
          desc: "Gehört die Benachrichtigung zu einer anderen Unterkunft, wechselt das System die Unterkunft, bevor es sie öffnet.",
        },
      ],
    },
    faq: [
      {
        q: "Wie viele Unterkünfte enthält jeder Tarif?",
        a: "Jeder Tarif nennt die Zahl unter [Preisen](/precios), aus demselben Katalog, der Ihr Konto berechnet.",
      },
      {
        q: "Kann ich jemandem Zugriff auf nur eine Unterkunft geben?",
        a: "Ja. Wenn Sie die Person von dieser Unterkunft aus einladen, bleibt sie darauf beschränkt. Und innerhalb der Unterkunft entscheidet der Arbeitsbereich, welche Bildschirme sie sieht.",
      },
      {
        q: "Kann ich ein Hotel und Hütten im selben Unternehmen haben?",
        a: "Ja, auch in derselben Unterkunft: Jede Kategorie wird als Pool oder als benannte Einheit verkauft. Erklärt unter [Zimmer](/producto/pms).",
      },
],
    cta: {
      title: "Erfassen Sie die erste; *die zweite kopiert ihre Struktur*.",
      lead:
        "Die Registrierung legt das Unternehmen und die erste Unterkunft an. Die weiteren starten von einer Vorlage.",
      steps: [
        "Sie legen das Unternehmen und die erste Unterkunft an.",
        "Sie laden Ihr Team mit Zugriff pro Unterkunft ein.",
        "Sie fügen die zweite aus einer Vorlage hinzu.",
      ],
    },
  },

  habitaciones: {
    meta: {
      title: "Zimmer",
      description:
        "Kategorien, die als Pool austauschbarer Zimmer oder als benannte Einheiten verkauft werden, in derselben Unterkunft. Sechs Betriebszustände mit Verlauf, Grundriss nach Stockwerk, Massenerfassung und eine Sperre pro Nacht.",
    },
    hero: {
      eyebrow: "Zimmer",
      title: "Nach Kategorie oder Einheit, *wie Sie verkaufen*.",
      lead:
        "Ein Hotel verkauft ein Doppelzimmer Superior und weist die 203 später zu. Eine Anlage verkauft die Hütte Alerce, mit ihren Fotos und ihrem Preis. Roombir macht beides, und beides gleichzeitig in derselben Unterkunft.",
    },
    dual: {
      eyebrow: "Zwei Arten zu verkaufen",
      title: "Jede Kategorie wählt, *wie sie verkauft wird*.",
      lead:
        "Der Modus wird Kategorie für Kategorie festgelegt, mit einem Standardwert für die Unterkunft. So verkauft eine Anlage mit sechs Hütten und zwei Zimmern die Hütten mit Namen und die Zimmer als Pool, im selben Kalender.",
      items: [
        "**Kategorie-Pool**: Der Gast kauft „ein Doppelzimmer Superior“, und das System weist das Zimmer zu, wobei es Lücken minimiert oder die Abnutzung verteilt. Oder es lässt es unzugewiesen, damit die Rezeption entscheidet.",
        "**Benannte Einheit**: Die Kategorie umfasst eine einzige Einheit. Der Gast bucht die Hütte Alerce, mit ihren Fotos und ihrem Preis.",
        "**Der Moduswechsel wird protokolliert**, mit dem Grund, und es gibt ein Werkzeug, um Kategorien zu migrieren, die bereits Buchungen haben.",
        "**Jede Buchung speichert den Modus, mit dem sie entstand**: Die Einstellung später zu ändern schreibt die Geschichte nicht um.",
      ],
    },
    states: {
      eyebrow: "Zimmerstatus",
      title: "Zustände, die *nichts Unmögliches zulassen*.",
      lead:
        "Sechs Zustände — verfügbar, belegt, Reinigung, Wartung, gesperrt und Abreise ausstehend — und eine Regel für jeden Wechsel. Von belegt geht es nur zu Abreise ausstehend: Niemand gibt ein Zimmer frei, während der Gast noch drin ist.",
      items: [
        "**Verlauf pro Einheit**: wer welchen Zustand geändert hat, wann und mit welcher Notiz.",
        "**Board nach Stockwerk und Kategorie**, mit Filtern, um das Haus auf einen Blick zu lesen.",
        "**Belegungsplan** nach Stockwerk, mit Datumsnavigation.",
        "**Reinigung ändert Zustände**, ohne Raten oder Revenue zu sehen: Ihr Arbeitsbereich hat sie nicht.",
      ],
    },
    load: {
      eyebrow: "Die Erfassung",
      title: "Sie erfassen es einmal, *alle nutzen es*.",
      items: [
        {
          title: "Massenerfassung in zwei Schritten",
          desc: "Eine Vorschau warnt, wenn sich ein Code wiederholt, bevor irgendetwas angelegt wird; danach werden alle zusammen angelegt oder keine.",
        },
        {
          title: "Sperren nach Tageshälften",
          desc: "Wartung am Nachmittag sperrt diese Nacht und lässt den Vormittag verkäuflich. Sie nutzt dieselbe Sperre wie eine Buchung.",
        },
        {
          title: "Das Datenblatt jeder Kategorie",
          desc: "Kapazität für Erwachsene und Kinder, Größe, Basispreis, Fotos und aus einem Katalog gewählte Ausstattung.",
        },
        {
          title: "Ein einziges Inventar",
          desc: "Die Kategorie, die Sie hier erfassen, ist dieselbe, die Maschine, Website, LinkHub und Revenue zeigen.",
        },
      ],
    },
    lock: {
      eyebrow: "Die Garantie",
      title: "Eine Nacht wird *nur einmal* verkauft.",
      lead:
        "Jede Nacht jeder Einheit ist eine eindeutige Sperre in der Datenbank. Buchen zwei Personen gleichzeitig dasselbe, kommt die zweite nicht durch: Das ist keine Prüfung, die sich umgehen lässt, es ist die Datenbank selbst, die es verhindert.",
      items: [
        "Wartungssperren nutzen dieselbe Sperre, sie ziehen also echtes Inventar ab.",
        "Beim Stornieren, Markieren als No-Show oder Check-out wird die Nacht von selbst freigegeben.",
        "Die Abreisenacht wird nicht gesperrt: Wer an diesem Tag ankommt, kann einziehen.",
      ],
    },
    faq: [
      {
        q: "Ich habe Hütten und Zimmer. Kann ich beides haben?",
        a: "Ja, in derselben Unterkunft. Die Hütten laufen als benannte Einheit und die Zimmer als Pool, und sie bestehen im selben Kalender und in derselben Maschine nebeneinander.",
      },
      {
        q: "Kann ich den Modus später ändern?",
        a: "Ja. Die Änderung verlangt einen Grund und wird protokolliert, und wenn die Kategorie bereits Buchungen hat, gibt es ein Werkzeug zum Migrieren. Alte Buchungen behalten den Modus, mit dem sie entstanden sind.",
      },
      {
        q: "Was passiert, wenn zwei Personen dieselbe Nacht gleichzeitig buchen?",
        a: "Eine der beiden scheitert. Jede Nacht jeder Einheit ist eine **eindeutige Sperre in der Datenbank** — der Schlüssel ist die Einheit plus das Datum —, sodass der zweite Schreibvorgang nicht durchkommt. Das ist keine Prüfung im Code, die sich umgehen lässt: Es ist die Datenbank, die es verhindert.",
      },
      {
        q: "Sieht das Reinigungspersonal die Raten?",
        a: "Nein, wenn Sie das nicht wollen. Der Reinigungsbereich hat sein eigenes Menü — Zimmerstatus und Belegungsplan — ohne Raten oder Revenue.",
      },
    ],
    cta: {
      title: "Fangen Sie bei *Ihren Zimmern* an.",
      lead:
        "Sie erfassen Kategorien und Einheiten, und die Verfügbarkeit initialisiert sich von selbst. Kalender und Maschine sind bereit.",
      steps: [
        "Sie erfassen die Kategorien und wählen, wie jede verkauft wird.",
        "Sie legen die Einheiten auf einmal an.",
        "Die Verfügbarkeit initialisiert sich von selbst.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Buchungsmaschine",
      description:
        "Die Maschine, die Ihr Gast sieht — mit Preis pro Tag, verbleibenden Einheiten und zehn Währungen — und die acht Ansichten, in denen Sie sie bedienen: Tagesübersicht, Liste, Kalender, manuelle Erfassung, Raten, Verfügbarkeit, Aktionen und Einstellungen. Ohne Provision pro Buchung.",
    },
    hero: {
      eyebrow: "Buchungsmaschine",
      title: "Jede Buchung, *vom ersten Klick bis zum Check-out*.",
      lead:
        "Der Gast sieht den Preis jedes Tages, bevor er Daten wählt, und bucht allein. Sie sehen sie in der Tagesübersicht ankommen, verschieben sie im Kalender und schließen sie beim Check-out ab. Ohne Provision pro Buchung, in zehn Währungen.",
    },
    guest: {
      eyebrow: "Was der Gast sieht",
      title: "Ein Kalender, der *antwortet, bevor man fragt*.",
      lead:
        "Der übliche Datumswähler fragt zwei Tage ab, und das war's. Der der Maschine zeigt, Tag für Tag und je nachdem, was Sie freigeben, das, was die Person Sie sonst vor der Buchung per WhatsApp gefragt hätte.",
      items: [
        "**Preis ab** an jedem Tag, berechnet mit denselben Raten, die die Maschine berechnet.",
        "**Verbleibende Einheiten**: Ihr echtes Inventar, kein erfundener Zähler.",
        "**Geschlossene Tage**, geschlossen für Anreise oder Abreise, und der **Mindestaufenthalt** bei der Wahl der Anreise.",
        "**Hütte mit Namen oder Kategorie**, je nachdem, wie Sie verkaufen, mit ihren Fotos, ihrer Ausstattung und den Extras, die vor dem Bezahlen angeboten werden.",
      ],
    },
    views: {
      eyebrow: "Was Sie sehen",
      title: "Jeder Moment der Schicht, *sein Bildschirm*.",
      lead:
        "Acht Ansichten auf demselben Datenbestand: Eine Buchung im Kalender zu verschieben ändert das Zimmer, gibt die Nacht in der Maschine frei und erscheint im Bericht.",
      items: [
        {
          title: "Tagesübersicht",
          desc: "An- und Abreisen des Tages, mit ausführbaren Karten. Das ist der Bildschirm, mit dem die Rezeption die Schicht eröffnet.",
        },
        {
          title: "Alle Buchungen",
          desc: "Die Liste mit Filtern und einem Seitenpanel, das sich öffnet, ohne die Ansicht zu verlassen: Zusammenfassung, Aktivität und Notizen. Von dort weist man das Zimmer zu und ändert den Status.",
        },
        {
          title: "Kalender",
          desc: "Zimmer pro Tag. Sie ziehen eine Buchung oder dehnen sie, und bevor Sie loslassen, sehen Sie, ob es einen Konflikt gibt und was mit dem Preis passiert.",
        },
        {
          title: "Neue Buchung",
          desc: "Die, die per Telefon oder WhatsApp hereinkam: Gast, Daten, Belegung nach Alter, Herkunftskanal, Aktionen und Notizen.",
        },
        {
          title: "Raten",
          desc: "Basispreis pro Kategorie und Ratenpläne mit Gültigkeit, Währung und Mindestaufenthalt.",
        },
        {
          title: "Verfügbarkeit",
          desc: "Ampel pro Tag — frei, teilweise, voll, geschlossen — und Restriktionen: geschlossen für Anreise oder Abreise, Mindest- und Höchstaufenthalt.",
        },
        {
          title: "Aktionen",
          desc: "Automatisch oder mit Code, nach Prozentsatz, Festbetrag oder Preis pro Nacht, mit fertiger Darstellung für Ihre Website.",
        },
        {
          title: "Einstellungen",
          desc: "Währung, Bestätigung, Aufenthaltsregeln, Zeiten und wie die Zimmer zugewiesen werden. Dazu das Engine Studio für Texte und Farben.",
        },
      ],
    },
    prices: {
      eyebrow: "Jede Rate, einzeln",
      title: "Der Preis jeder Nacht, *mit seinem Warum*.",
      lead:
        "Wenn die Maschine sagen muss, was eine Nacht kostet, löst sie eine feste Kette auf, immer in derselben Reihenfolge. Zu wissen, aus welcher Stufe jeder Preis stammt, ist der Unterschied zwischen dem System vertrauen und es jeden Morgen prüfen.",
      items: [
        "**Zuerst, was Sie in Revenue akzeptiert haben**: Gibt es für dieses Datum eine empfohlene und angenommene Rate, gilt sie.",
        "**Danach der Ratenplan**, der für diese Kategorie und dieses Datum gültig ist, mit seinem Mindestaufenthalt.",
        "**Gibt es keinen Plan, der Basispreis** der Kategorie. Jede Hütte kann ihren eigenen haben.",
        "**Ganz oben die Aktionen**: Rabatt oder Aufschlag — eine Aktion kann den Preis in der Hochsaison auch anheben —, automatisch oder mit Code.",
      ],
    },
    currency: {
      eyebrow: "Zehn Währungen",
      title: "Was der Gast sah, *bewegt sich nicht mehr*.",
      lead:
        "Der Gast sieht den Preis in seiner Währung, und Sie kassieren in Ihrer. Die Buchung bleibt immer in Ihrer Basiswährung, und die Umrechnung friert beim Check-in ein: Der Betrag, den Sie kassieren, ändert sich danach nicht mehr.",
      items: [
        "Dollar, argentinischer Peso, Real, chilenischer Peso, kolumbianischer Peso, mexikanischer Peso, Sol, uruguayischer Peso, Euro und Pfund.",
        "Für argentinische Pesos wählen Sie den Kurs: offiziell, blue, MEP oder CCL.",
        "Die Kurse werden alle drei Stunden aktualisiert und als veraltet markiert, wenn die Quelle nicht geantwortet hat.",
        "Die Berichte summieren direkt, weil alles in Ihrer Basiswährung bleibt.",
      ],
    },
    where: {
      eyebrow: "Wo sie erscheint",
      title: "Auf der Website, der Bio *und für die KI*.",
      items: [
        {
          title: "Ihre Website",
          desc: "Ein Bereich des Website-Editors, der sich selbst mit Ihrem Inventar verbindet.",
        },
        {
          title: "Ihr LinkHub",
          desc: "Der Link in der Instagram-Bio öffnet dieselbe Maschine, identisch mit der auf Ihrer Website.",
        },
        {
          title: "Ein direkter Link",
          desc: "Eine eigene Seite mit der Adresse Ihrer Unterkunft, zum Verschicken per WhatsApp, wenn Sie noch keine Website haben.",
        },
        {
          title: "KI-Agenten",
          desc: "Mit eingeschalteter agentischer Ebene kann ein externer Assistent Ihre Verfügbarkeit lesen und eine Buchung abschließen. [Wie das funktioniert](/producto/marketing#agentes).",
        },
      ],
    },
    after: {
      eyebrow: "Nach dem Checkout",
      title: "Die Buchung kommt an, *und das System macht weiter*.",
      items: [
        {
          title: "Die Einheit wird zugewiesen",
          desc: "Die einzig mögliche, wenn Sie nach Einheit verkaufen, die vom System gewählte bei einem automatischen Pool, oder keine, wenn die Rezeption entscheiden soll.",
        },
        {
          title: "Die E-Mail geht raus",
          desc: "Von der roombir-Domain, mit Ihrem Postfach als Antwortadresse. Ohne einen Mailserver einzurichten oder einen weiteren Anbieter.",
        },
        {
          title: "Der Gast hat sein Konto",
          desc: "Mit StayPass sieht er seine Buchungen auf Ihrer Website. Derselbe Gast sammelt die Unterkünfte, bei denen er gebucht hat, und jedes Hotel sieht nur die eigenen.",
        },
      ],
      stats: [
        { value: "0 %", label: "Provision pro Buchung" },
        { value: "10", label: "Währungen, mit blue, MEP, CCL oder offiziell für ARS" },
        { value: "2", label: "Bestätigungsmodi, mit automatischem Ablauf" },
      ],
    },
    faq: [
      {
        q: "Berechnen Sie eine Provision pro Buchung?",
        a: "Nein. Die Maschine hat keine Gebühr pro Buchung: Sie zahlen den Tarif und nichts weiter. Das steht in den [Bedingungen](/legal/terminos).",
      },
{
        q: "Wer bestätigt die Buchung?",
        a: "Das entscheiden Sie. In einem Modus entsteht die Buchung ausstehend, und **der Gast bestätigt sie** über einen Link, der per E-Mail kommt. Im anderen bleibt sie ausstehend, bis **die Rezeption sie annimmt**. In beiden Fällen laufen ausstehende Buchungen von selbst ab, sodass keine Nächte durch jemanden blockiert bleiben, der nie zurückkam.",
      },
      {
        q: "Kann ich die Texte und Farben des Checkouts ändern?",
        a: "Ja, im Engine Studio und **ohne Code anzufassen oder die Website neu zu veröffentlichen**: Suche, Kalender, Gäste, Liste, Detail, Leistungen, Checkout und Erfolgsbildschirm, jeder mit eigenen Texten und Stilen.",
      },
    ],
    cta: {
      title: "Setzen Sie Ihren Buchungslink *in die Bio*.",
      lead:
        "Sie erfassen die Zimmer, und die Maschine ist mit initialisierter Verfügbarkeit einsatzbereit. Website und LinkHub kommen später dazu, wann Sie wollen.",
      steps: [
        "Sie erfassen Kategorien, Einheiten und Preise.",
        "Sie konfigurieren die Maschine im Studio.",
        "Sie teilen den Link und verlieren keine Anfragen mehr im Chat.",
      ],
    },
  },

  informes: {
    meta: {
      title: "Berichte",
      description:
        "Belegung, ADR, RevPAR, Einnahmen, Stornierungen, Vorlaufzeit und Kanäle, berechnet auf denselben Buchungen, die Sie bedienen, und ein Abschnitt mit dem, was heute falsch erfasst ist. Ohne Tabellen.",
    },
    hero: {
      eyebrow: "Berichte",
      title: "Ihre Zahlen, *ohne eine Tabelle zu bauen*.",
      lead:
        "Belegung, durchschnittliche Rate, Einnahmen, Stornierungen und aus welchem Kanal jede Buchung kommt, berechnet auf denselben Buchungen, die Sie bedienen. Und ein Abschnitt, der nicht auf das Vergangene schaut, sondern auf das, was heute falsch erfasst ist.",
    },
    hygiene: {
      eyebrow: "Zustand und Verwaltung",
      title: "Was falsch läuft, *vor dem, was geschah*.",
      lead:
        "Die meisten Berichte erzählen Ihnen vom letzten Monat. Dieser Abschnitt sagt Ihnen, was heute zu reparieren ist, bevor daraus ein Gast ohne Zimmer wird.",
      items: [
        "**Ausstehende Buchungen**, die niemand rechtzeitig bestätigt hat.",
        "**Heutige Anreisen ohne zugewiesenes Zimmer.**",
        "**Heutige Abreisen, die noch drinnen sind**: Der Check-out wurde nicht markiert.",
        "**Buchungen ohne Kanal**: die, die niemand markiert hat und die Ihnen später den Kanalbericht zerlegen.",
      ],
    },
    metrics: {
      eyebrow: "Was sie misst",
      title: "Jede Zahl, *in ihrer Zeile erklärt*.",
      lead: "Ohne separates Glossar: Jede Kennzahl versteht sich dort, wo sie erscheint.",
      items: [
        {
          title: "Belegung und Nachfrage",
          desc: "Wie viele Zimmer heute belegt sind und die Kurve dessen, was für die nächsten 7 bis 90 Tage bereits gebucht ist.",
        },
        {
          title: "ADR und RevPAR",
          desc: "Der ADR ist, was Sie im Schnitt pro verkaufter Nacht kassieren; der RevPAR, was jedes Zimmer einbringt, das Sie haben, verkauft oder nicht.",
        },
        {
          title: "Stornierungen",
          desc: "Die Quote des Zeitraums und die Last-Minute-Stornierungen, mit ihrem Trend pro Woche oder Monat.",
        },
        {
          title: "Kanäle",
          desc: "Woher jede Buchung kommt und welcher Kanal am meisten storniert. Bei weniger als drei Buchungen wird das nicht behauptet.",
        },
      ],
    },
    period: {
      eyebrow: "Gegen den vorherigen Zeitraum",
      title: "Jede Zahl, *mit ihrer Differenz*.",
      lead:
        "Sie wählen den Zeitraum — eine Woche, einen Monat, drei oder sechs Monate, oder einen eigenen — und jede Kennzahl wird mit dem unmittelbar vorherigen Zeitraum verglichen.",
      items: [
        {
          title: "Einnahmen",
          desc: "Die des Zeitraums und die für die nächsten 30 Tage projizierten, mit dem, was bereits gebucht ist.",
        },
        {
          title: "Vorlaufzeit",
          desc: "Mit wie vielen Tagen Vorlauf gebucht wird, mit Minimum, Maximum und der Anzahl der Buchungen, auf der es berechnet wurde.",
        },
        {
          title: "Durchschnittlicher Aufenthalt",
          desc: "Wie viele Nächte jeder Gast im Schnitt bleibt, im gewählten Zeitraum.",
        },
        {
          title: "Belegung nach Kategorie",
          desc: "Welche Kategorien heute voll sind und welche noch Platz haben, mit dem Prozentsatz jeder einzelnen.",
        },
      ],
    },
    ask: {
      eyebrow: "Die Frage, die nicht auf dem Bildschirm steht",
      title: "Steht es nicht im Bericht, *fragen Sie sie*.",
      lead:
        "Roombir KI liest dieselben Berichte und antwortet Ihnen im Gespräch, mit der Zahl und woher sie stammt. Für „Stehen wir zu diesem Zeitpunkt besser da als letztes Jahr?“ gibt es den Pace von [Revenue](/producto/revenue), gegen Ihre eigene Historie.",
      items: [
        "„Welcher Kanal storniert mir dieses Quartal am meisten?“",
        "„Wie viele Anreisen habe ich morgen ohne Zimmer?“",
        "„Wie steht der Oktober im Vergleich zum September?“",
      ],
    },
    faq: [
      {
        q: "Woher kommen die Zahlen?",
        a: "Aus denselben Buchungen, die Sie im Kalender bedienen, im Moment berechnet. Es gibt keinen nächtlichen Export und keine separate Datenbank, die aus dem Takt geraten könnte.",
      },
{
        q: "Worin unterscheidet sich das von Revenue?",
        a: "Berichte schauen auf den Betrieb: was passiert ist, was falsch erfasst ist, woher die Buchungen kommen. [Revenue](/producto/revenue) schaut nach vorn, um den Preis zu entscheiden: Pace gegen die eigene Historie, Mitbewerber und Events.",
      },
      {
        q: "Muss ich etwas konfigurieren?",
        a: "Nein. Sobald die Buchungen erfasst sind, stehen die Berichte bereit. Sinnvoll ist nur, bei jeder manuellen Buchung den Kanal zu markieren, damit der Kanalbericht etwas taugt.",
      },
    ],
    cta: {
      title: "Ihre Zahlen, *vom ersten Tag an*.",
      lead: "Die Berichte werden nicht konfiguriert: Sie entstehen aus den Buchungen, die Sie bereits erfassen.",
      steps: [
        "Sie erfassen Ihre Buchungen, oder wir migrieren sie gemeinsam mit Ihnen.",
        "Sie markieren den Kanal jeder manuellen Buchung.",
        "Sie öffnen Berichte und wählen den Zeitraum.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue",
      description:
        "Revenue Management mit der Nachvollziehbarkeit jedes Preises: welche Daten es gesehen hat, welche Regel zutraf und welche Grenze griff. Pace gegen die eigene Historie, Mitbewerber, Events Ihrer Destination aus fünfzehn Quellen und die Rate, die bei Annahme in die Maschine geht.",
    },
    hero: {
      eyebrow: "Revenue",
      title: "Sie sagt den Preis *und warum*.",
      lead:
        "Ein Dokument pro Datum mit der vollständigen Nachvollziehbarkeit: welche Daten es sah, welche Regel zutraf und welche Grenze griff. Es schaut auf Ihre eigene Historie und Ihre Destination — Feiertage, Events, Flugrouten, Wetter — mit der Quelle im Blick. Und wenn Sie annehmen, geht die Rate von selbst in die Maschine.",
    },
    decision: {
      eyebrow: "Entscheidungen",
      title: "Die Antwort auf *„warum schlägst du mir das vor?“*",
      lead:
        "Es gibt ein Dokument pro Unterkunft und pro Datum mit der vollständigen Nachvollziehbarkeit: welche Daten das System sah, wie die Basisrate war, welche es vorschlug, welche Regeln zutrafen, ob eine Grenze griff, und ein Protokoll, das sich Zeile für Zeile lesen lässt.",
      items: [
        "Belegung, Nachfrage, Verfügbarkeit, Mitbewerberraten, neue Buchungen und Events: alles, was in die Rechnung einging, mit seinem Wert.",
        "Welche Regel zutraf und in welcher Reihenfolge, denn die letzte gewinnt.",
        "Ob die Mindest- oder Höchstgrenze griff, und welche das war.",
        "Der Lebenszyklus der Empfehlung: vorgeschlagen, angenommen oder abgelehnt, angewendet, von wem und wann.",
      ],
    },
    destination: {
      eyebrow: "Ihre Destination",
      title: "Was die Nachfrage bewegt, *mit der Quelle*.",
      lead:
        "Die Nachfragesignale stammen aus fünfzehn öffentlichen Quellen pro Destination, erfasst rund um Ihre Unterkunft und nicht aus einer festen Städteliste. Die Events werden von selbst vorgeschlagen, und Sie genehmigen sie: Ein genehmigtes wird von der nächsten Aktualisierung nicht überschrieben.",
      items: [
        "**Events in Ihrem Radius**: Sport, Kultur, Kongresse und Messen, mit erwarteter Wirkung und verbleibenden Tagen.",
        "**Feiertage und lange Wochenenden**, die die Preisregeln als Variable nutzen können.",
        "**Beobachtete Flugrouten**, die in Ihrer Zone landen, und der Wechselkurs der Märkte, aus denen Ihre Gäste kommen.",
        "**Die Suchen ohne Verfügbarkeit** Ihrer eigenen Maschine: das am meisten unterschätzte Nachfragesignal einer kleinen Unterkunft.",
      ],
    },
    rules: {
      eyebrow: "Szenarien",
      title: "Dreizehn Variablen, *und ein Trockenlauf*.",
      lead:
        "Jede Regel bewertet eine Variable, vergleicht sie mit einem Wert innerhalb eines Vorlauffensters und wendet eine Anpassung an. Sie werden der Reihe nach ausgewertet, und die letzte zutreffende gewinnt. Bevor Sie eine aktivieren, zeigt Ihnen der Trockenlauf, was sie getan hätte.",
      items: [
        "**Variablen**: Belegung, Nachfrageindex, Verfügbarkeit, Rate der Mitbewerber 1 bis 5, neue Buchungen in 7 und in 30 Tagen, Event-Wirkung, Tage bis zum nächsten Event und Pace-Index.",
        "**Vergleiche**: größer, größer oder gleich, gleich, kleiner oder gleich, kleiner.",
        "**Anpassung** in Prozent auf die Basisrate.",
        "**Grenzen** für Mindest- und Höchstrate, die nach allem anderen greifen.",
      ],
    },
    comp: {
      eyebrow: "Mitbewerber",
      title: "Ein *gemischtes und ehrliches* Comp-Set.",
      lead:
        "Mitbewerber, die ebenfalls roombir nutzen, liefern ihre echte Rate. Externe werden von selbst über Nähe und Ähnlichkeit entdeckt, und ihre Rate erfassen Sie, als feste Referenz oder pro Datum.",
      items: [
        "Ähnlichkeitswert nach Typ, Kategorie, Größe, Segment und Gebiet.",
        "Das Profil Ihres eigenen Hotels, aus dem System übernommen, sofern Sie es nicht von Hand ändern.",
        "Raster der Mitbewerberraten pro Datum.",
        "Vorbereitet für automatische Ratenanbieter; heute nicht angebunden.",
      ],
    },
    rest: {
      eyebrow: "Die anderen Reiter",
      title: "Alles, was es *außer dem Preis* gibt.",
      items: [
        {
          title: "Zwei Kalender in einem",
          desc: "Nach Buchungsdatum — wann bei Ihnen gekauft wurde — und nach Aufenthaltsdatum — wann geschlafen wird. Viele Systeme vermischen beide und stiften Verwirrung.",
        },
        {
          title: "Pace",
          desc: "Das Verkaufstempo gegen das Ihrer eigenen Unterkunft in der Vergangenheit, nach Wochentag, Monat und Vorlauf, mit Warnungen bei schnellem oder langsamem Verkauf.",
        },
        {
          title: "Events",
          desc: "Von selbst vorgeschlagen und von Ihnen kuratiert: vorgeschlagen, genehmigt oder verworfen, mit Relevanzwert und erwarteter Wirkung.",
        },
        {
          title: "Empfehlungen",
          desc: "Aktuelle Rate, Vorschlag, Differenz und Begründung. Sie werden angenommen oder abgelehnt und können sich selbst anwenden, wenn Sie das aktivieren.",
        },
        {
          title: "Nachfragesignale",
          desc: "Neben den Buchungen nimmt der Nachfrageindex die Suchen Ihrer Maschine auf, einschließlich derer, die keinen Platz fanden.",
        },
        {
          title: "Einstellungen",
          desc: "Mitbewerber, Standort, Hotelprofil, Pace-Schwellen, Event-Radius und Ratengrenzen.",
        },
      ],
    },
    cost: {
      eyebrow: "Anderswo, gesondert",
      title: "Ein RMS ist fast immer *ein weiteres Modul*.",
      lead:
        "Unter den Systemen für unabhängige Unterkünfte wird Revenue Management als Zusatz verkauft. Das einzige, das den Preis auf seiner Website veröffentlicht, berechnet ihn pro Zimmer.",
      head: { tool: "Produkt", price: "Veröffentlichter Preis", gap: "Wie es gebucht wird" },
      rows: [
        {
          tool: "Amenitiz PriceAdvisor",
          price: "**6 €** pro Zimmer und Monat",
          gap: "Zusatz zum Tarif. Schlägt vor; wendet nicht selbst an.",
        },
        {
          tool: "SiteMinder Dynamic Revenue Plus",
          price: "veröffentlicht ihn nicht",
          gap: "Zusatz mit separater Gebühr zum Tarif.",
        },
        {
          tool: "Mews RMS",
          price: "veröffentlicht ihn nicht",
          gap: "Separates Modul zu seinen drei Tarifen.",
        },
      ],
      total:
        "Mit veröffentlichtem Preis zahlt ein Hotel mit **15 Zimmern** **90 € pro Monat** allein für die Ratenvorschläge. Bei roombir steht Revenue im Produktkatalog wie jedes andere: [sehen Sie, welcher Tarif es enthält](/precios).",
      source:
        "Quellen: Produkt- und Preisseiten von amenitiz.com, siteminder.com und mews.com, gelesen am 22. September 2026.",
    },
    faq: [
      {
        q: "Ich habe wenig Historie. Nützt es mir trotzdem?",
        a: "Es nützt Ihnen, aber es sagt Ihnen das auch. Der Pace wird mit **Ihrer eigenen Historie** verglichen, gruppiert nach Wochentag, Monat und Vorlauf, und die Oberfläche **zeigt die Stichprobengröße**. Wurde eine Zelle aus drei Buchungen berechnet, sehen Sie das. Das ist uns lieber, als Ihnen eine selbstsichere Kurve auf Basis von nichts zu zeigen.",
      },
      {
        q: "Woher kommen die Mitbewerberraten?",
        a: "Aus zwei Quellen. Nutzt der Mitbewerber ebenfalls roombir, ist die Rate echt. Ist er extern, **entdeckt das System ihn von selbst** über Standort und Ähnlichkeit, aber **die Rate erfassen Sie**, fest oder pro Datum. Die Anbindung an automatische Anbieter ist vorbereitet und noch nicht verbunden; wir sagen nicht ja, bevor sie es ist.",
      },
      {
        q: "Wenn ich eine Empfehlung annehme, muss ich den Preis woanders eintragen?",
        a: "Nein. Beim Annehmen geht die Rate **in die Buchungsmaschine** und wird zur ersten Stufe des Preises für dieses Datum. In den meisten Systemen ist dieser Schritt eine Person, die eine Zahl von einem Bildschirm in einen anderen überträgt.",
      },
    ],
    cta: {
      title: "Der Preis *hört auf, ein Bauchgefühl zu sein*.",
      lead:
        "Revenue nützt, sobald Sie eigene Historie haben, und solange nicht, sagt es Ihnen das ins Gesicht, statt eine Kurve zu erfinden.",
      steps: [
        "Sie erfassen das Inventar und die Basisraten.",
        "Sie bauen Ihr Comp-Set auf und genehmigen die Events Ihrer Region.",
        "Sie schreiben zwei oder drei Regeln und testen sie trocken.",
      ],
    },
  },

  marketing: {
    meta: {
      title: "Marketing",
      description:
        "Der Website-Editor mit Assistent — Sie zeigen ihm einen Screenshot, und er baut die Abschnitte — verbunden mit Ihrem Inventar und Ihrer Maschine. Marke, Fotobibliothek, Galerien, Bewertungen, LinkHub und die Ebene, die Ihre Unterkunft für eine KI lesbar macht.",
    },
    hero: {
      eyebrow: "Marketing",
      title: "Eine Website, die *schon weiß*, was frei ist.",
      lead:
        "Website, Marke, Fotos, Bewertungen und LinkHub kommen aus derselben Quelle wie Ihre Buchungen: Sie ändern einen Preis, und er steht schon auf der Website. Und der Editor hat einen Assistenten: Sie fügen den Screenshot einer Website ein, die Ihnen gefällt, und er baut die Abschnitte, editierbar.",
    },
    ai: {
      eyebrow: "Der Editor mit Assistent",
      title: "Sie zeigen eine Website, *er baut Ihre*.",
      lead:
        "Sie fügen bis zu sechs Screenshots pro Anfrage ein — die Startseite eines Hotels, das Ihnen gefällt, einen Abschnitt einer anderen Website — und der Assistent baut die Abschnitte mit dieser Struktur und Ihren Texten, auf der Leinwand und im Entwurf. Danach bearbeiten Sie sie wie alles andere.",
      items: [
        "**Sie markieren einen Block und bitten**: „mach das wie diesen“, „füge zwei weitere Karten hinzu“, „ändere den Titel“: Er fasst nur dieses Element an und lässt den Rest, wie er war.",
        "**Alles geht in den Entwurf.** Veröffentlichen ist ein eigener Schritt, und der gehört Ihnen.",
"**Ohne Code.** Und wenn Sie möchten, gibt es Stile pro Bildschirm, Animationen und eigenes CSS.",
      ],
    },
    connected: {
      eyebrow: "Verbunden, nicht eingeklebt",
      title: "Abschnitte, die *Ihre Daten lesen*.",
      lead:
        "Was den Editor von einem generischen Baukasten unterscheidet, ist nicht die Leinwand: Es sind die Abschnitte, die sich selbst mit dem verbinden, was Sie bereits erfasst haben. In einem generischen Baukasten werden Maschine und Zimmer von einem anderen Dienst eingeklebt.",
      items: [
        {
          title: "Maschine und Zimmer",
          desc: "Die Buchungsmaschine, die Zimmerkarten und die Kategorien, mit echter Verfügbarkeit und echtem Preis.",
        },
        {
          title: "Galerie, Bewertungen, Leistungen und Aktionen",
          desc: "Sie ändern eine Aktion in Buchungen, und die Website zeigt sie, ohne dass jemand die Seite bearbeitet.",
        },
        {
          title: "Mehrere Sprachen",
          desc: "Jede Sprache ist eine Seite mit eigener Adresse, eigenem Titel und eigener Vorschau für soziale Netzwerke. Kein Übersetzer obendrauf.",
        },
        {
          title: "Ihre Domain",
          desc: "Jede Sprache kann ihre eigene haben, mit Entwurf, ausdrücklicher Veröffentlichung und Vorschau in mehreren Größen.",
        },
      ],
    },
    quality: {
      eyebrow: "Qualität der Website",
      title: "Eine Qualitätskontrolle, *die auch repariert*.",
      lead:
        "Ein Panel wie das von PageSpeed prüft, was eine Suchmaschine und ein Handy bestrafen. Der Button „Alles reparieren“ korrigiert, was gefunden wurde, mit festen Regeln, ohne KI im Spiel, und prüft erneut.",
      items: [
        {
          title: "Vor dem Veröffentlichen",
          desc: "Es warnt vor zu kleinen Texten auf dem Handy, Bildern ohne Beschreibung und fehlenden Titeln oder Beschreibungen.",
        },
        {
          title: "Vorlagen mit Ihrer Marke",
          desc: "Sie starten von einer Vorlage, die sich mit Ihrem Logo, Ihren Farben, Ihren Fotos und den Texten Ihrer Unterkunft füllt.",
        },
        {
          title: "Einfacher oder erweiterter Modus",
          desc: "Der einfache verbirgt die Gestaltungsregler, bis Sie danach suchen. Der erweiterte zeigt sie alle.",
        },
        {
          title: "Popups und WhatsApp",
          desc: "Fünf Popup-Formate mit Seiten- und Häufigkeitsregeln, und ein WhatsApp-Button mit bereits geschriebener Nachricht.",
        },
      ],
    },
    cost: {
      eyebrow: "Was Sie heute gesondert zahlen",
      title: "Fünf Anbieter, *die nicht miteinander reden*.",
      lead:
        "So entsteht heute die digitale Präsenz einer unabhängigen Unterkunft, mit den Preisen, die jeder Anbieter veröffentlicht. Keiner weiß, was Sie heute Nacht frei haben.",
      head: { tool: "Was gekauft wird", price: "Veröffentlichter Preis", gap: "Was er von Ihrer Unterkunft nicht weiß" },
      rows: [
        {
          tool: "Website bei Framer",
          price: "10 US$/Monat + **20 US$ pro Sprache**",
          gap: "Ihr Inventar und Ihre Preise: Die Maschine wird von einem anderen Dienst eingeklebt.",
        },
        {
          tool: "Website bei Webflow",
          price: "15 US$/Monat + **9 US$ pro Sprache**",
          gap: "Dasselbe: ohne eigene Zimmer oder Maschine.",
        },
        {
          tool: "Bewertungen bei TrustYou",
          price: "ab **75 US$** pro Unterkunft und Monat",
          gap: "Welcher Gast heute abgereist ist, außer Sie binden es an Ihr System an.",
        },
        {
          tool: "Link in der Bio mit Linktree",
          price: "**15 US$/Monat**",
          gap: "Ihre Verfügbarkeit: „Buchen“ ist ein Link.",
        },
        {
          tool: "Fotos bei Google Workspace",
          price: "**7 US$** pro Nutzer und Monat",
          gap: "Welches Foto zu welchem Zimmer gehört.",
        },
      ],
      total:
        "Eine Website in fünf Sprachen bei Framer (10 US$ + 4 × 20 US$), plus Bewertungen, Link in der Bio und Fotos: **187 US$ pro Monat**, und immer noch ohne Buchungsmaschine oder irgendetwas, das mit Ihren Buchungen verbunden ist.",
      source:
        "Veröffentlichte Preise auf framer.com, webflow.com, trustyou.com, linktr.ee und workspace.google.com, gelesen am 22. September 2026. Framer, Webflow und TrustYou mit jährlicher Zahlung; Linktree, monatlicher Pro-Tarif.",
    },
    brand: {
      eyebrow: "Marke",
      title: "Ihre Marke, *einmal erfasst*.",
      lead:
        "Ein Identitätsdatenblatt, das Website, LinkHub, Maschine und die Daten speist, die Suchmaschinen lesen. Sie ändern das Logo, und es ändert sich überall.",
      items: [
        "**Palette aus Ihrem Logo**, mit angepasster Hauptfarbe, damit sich der Text darüber lesen lässt.",
        "**Ton und Typografie**: Sie wählen den Ton, und die Typografie schlägt sich von selbst vor.",
        "**Geschichte, Claim und Zielgruppe**, in Ihren Worten.",
        "**Ihre Zone und was in der Nähe ist**, von der Karte erkannt.",
      ],
    },
    files: {
      eyebrow: "Fotos und Dateien",
      title: "Ihre Fotos, *an einem Ort*.",
      items: [
        {
          title: "Die Bibliothek des Unternehmens",
          desc: "Bilder, Videos, Audios und Dokumente, mit Ordnern, Tags und Suche. Sie ziehen sie vom Computer herein, fertig.",
        },
        {
          title: "Bildeditor",
          desc: "Sie schneiden ein Foto zu und passen es an, ohne das System zu verlassen.",
        },
        {
          title: "Galerien",
          desc: "Fotos und Videos von YouTube oder Vimeo, gruppiert in Galerien der Unterkunft, mit Titelbild und Reihenfolge.",
        },
        {
          title: "Dieselbe Bibliothek für alles",
          desc: "Sie wird vom Website-Editor, der Marke, den Galerien und dem Assistenten genutzt. Die Website zeigt die Galerie, die Sie mit einem Abschnitt wählen.",
        },
      ],
    },
    reviews: {
      eyebrow: "Bewertungen",
      title: "Ihre Bewertungen, *an einem Ort beantwortet*.",
      lead:
        "Sie erfassen die Bewertungen von Google, Booking, TripAdvisor, Airbnb, Despegar, Hotels.com und die eigenen, von Hand oder per Datei, und beantworten sie von hier aus. Die, die Sie wählen, erscheinen auf Ihrer Website.",
      items: [
        "**Import per Datei**, der Zeilen mit Fehlern meldet und bereits vorhandene nicht dupliziert.",
        "**Öffentliche Antwort** pro Bewertung, und ein Filter für die, die noch unbeantwortet sind.",
        "**Durchschnitt und Verteilung** von einem bis fünf Sternen, nach Quelle.",
        "**Sie werden auf Ihrer Website veröffentlicht** mit einem Abschnitt des Editors, nur die, die Sie sichtbar lassen.",
      ],
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "Der Link in Ihrer Bio, *mit der Maschine drin*.",
      lead:
        "Ein Link in der Bio, gemacht für Unterkünfte: Der Buchen-Button öffnet dieselbe Maschine wie Ihre Website, mit Verfügbarkeit und Preis, ohne jemanden zu einem anderen Formular zu schicken.",
      items: [
        "**Zehn Blocktypen**: Buchen, WhatsApp, Bewertungen, Galerie, Video, Karte, Kontakt, Link, Text und Trenner, mit Terminplanung.",
        "**Sechs Vorlagen**, die sich mit Ihrer Marke füllen, oder das Design von Hand.",
        "**QR-Code** zum Ausdrucken an der Rezeption oder auf der Karte.",
        "**Aufrufe und Klicks** nach Tag, Land, Herkunft und Gerät, ohne die IP von irgendjemandem zu speichern.",
      ],
    },
    agentes: {
      eyebrow: "Lesbar für eine KI",
      title: "Damit eine Maschine Sie *verstehen und buchen* kann.",
      lead:
        "Immer mehr Menschen fragen einen KI-Assistenten, bevor sie suchen. Dieser Assistent sieht Ihr Fotokarussell nicht: Er liest Text, strukturierte Daten und Routen. Ihre Website und Ihre Maschine veröffentlichen alle drei, und sie werden mit einem Schalter aktiviert.",
      items: [
        "**`llms.txt`**: wer Sie sind, was Sie verkaufen und wie man bucht, in reinem Text.",
        "**`availability.json`** und **`engine-capabilities.json`**: Ihre echte Verfügbarkeit und was Ihre Maschine akzeptiert.",
        "**Strukturierte Daten** auf jeder Seite und ein GEO-Editor, um mit Ihren Worten zu erklären, was Sie sind.",
        "**Zehn Werkzeuge für Agenten im Browser**: Ein externer Assistent kann eine Buchung abschließen.",
      ],
    },
    faq: [
      {
        q: "Muss ich gestalten können?",
        a: "Nein. Sie können von einer Vorlage starten, die sich mit Ihrer Marke füllt, den Assistenten bitten, aus einem Screenshot einen Abschnitt zu bauen, oder im einfachen Modus arbeiten, der die Gestaltungsregler verbirgt. Können Sie gestalten, hat der erweiterte Modus Stile pro Bildschirm, Animationen und eigenes CSS.",
      },
      {
        q: "Muss ich die Zimmer zweimal erfassen, einmal für die Website?",
        a: "Nein, und genau darum geht es. Die Abschnitte für Zimmer, Maschine, Galerien, Aktionen, Bewertungen und Leistungen **verbinden sich von selbst mit dem, was Sie bereits erfasst haben**. Laden Sie ein neues Foto zu einer Kategorie hoch, erscheint es auf der Website, ohne dass jemand es anfasst.",
      },
      {
        q: "Kann ich meine eigene Domain nutzen?",
        a: "Ja, und jede Sprache der Website kann ihre eigene haben.",
      },
{
        q: "Kann ich meine Google-Bewertungen importieren?",
        a: "Ja, per Datei oder von Hand.",
      },
    ],
    cta: {
      title: "Ihre Website und Ihr Link, *am selben Nachmittag*.",
      lead:
        "Wenn Sie Marke und Zimmer bereits erfasst haben, starten Sie die Website von einer Vorlage oder einem Screenshot, und der LinkHub füllt sich mit den Daten der Unterkunft.",
      steps: [
        "Sie erfassen Ihre Marke und Ihre Fotos.",
        "Sie starten die Website von einer Vorlage oder einem Screenshot.",
        "Sie veröffentlichen auf Ihrer Domain und bauen den LinkHub.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Lösungen",
      description:
        "Hotels, Hütten und Wohnungen, Hostels, Glamping und Villen, und kleine Gruppen: wie Roombir für jeden Unterkunftstyp und jeden Arbeitsplatz konfiguriert wird.",
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
          desc: "Builder, Websites, Galerien, Bewertungen, Marke und LinkHub. Die Startseite zeigt Bewertungsnote, Sichtbarkeit und LinkHub-Status. Der Bereich Buchungen taucht gar nicht auf.",
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
    faq: [
      {
        q: "Ich habe Hütten und außerdem zwei Standardzimmer. Welches Modell wähle ich?",
        a: "Beide. Das Verkaufsmodell wird pro **Kategorie** festgelegt, nicht pro System: die Hütten laufen als 1:1-Einzeleinheiten mit eigenem Namen, die Zimmer als austauschbarer Pool. Sie leben im selben Kalender und in derselben Engine, und ein Assistent migriert eine Kategorie von einem Modus in den anderen, wenn sie schon Buchungen enthält.",
      },
      {
        q: "Wir sind drei Leute im Schichtwechsel. Wie schulen wir jemand Neues?",
        a: "Jede Person betritt ihren Arbeitsbereich und sieht nur das Eigene. Die Einarbeitung wird aus den Apps dieses Bereichs gebaut, und die **38 geführten Touren** zeichnen sich über dem echten Bildschirm und heben das Element hervor, von dem sie sprechen. Kein Handbuch zum Lesen, kein Video zum Anschauen: man lernt in der ersten Schicht.",
      },
      {
        q: "Ich habe zwei Objekte in verschiedenen Städten.",
        a: "Ein Unternehmen kann mehrere Objekte haben, und jede Mitgliedschaft lässt sich eingrenzen: die Leitung des einen sieht ihres und sonst nichts. Mit **Objektvorlagen** startet das zweite mit denselben Arbeitsbereichen und Apps wie das erste.",
      },
    ],
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
          desc: "Die Gast-E-Mails gehen von der roombir-Domain aus, ohne separaten Maildienst und ohne SMTP-Konfiguration pro Hotel.",
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
    why: {
      eyebrow: "Warum er veröffentlicht ist",
      title: "Der Preis *wird nicht angefragt*: er wird gelesen.",
      lead:
        "Von den fünf größten Hotelsystemen der Welt veröffentlicht keines eine Zahl auf seiner Website: man fragt per Formular an und erfährt sie im zweiten Termin. Eine Unterkunft mit zwölf Einheiten hat dafür keine Zeit.",
      items: [
        {
          title: "Derselbe Katalog, der abrechnet",
          desc: "Die Karten und der Vergleich kommen vom Endpunkt, mit dem das System Ihr Konto auflöst. Es gibt keine Marketing-Version der Pläne.",
        },
        {
          title: "Ohne Mindestlaufzeit",
          desc: "Monatlich, ohne Strafe, ohne Halteanruf. Das sagen die [AGB](/legal/terminos), nicht ein Verkäufer.",
        },
        {
          title: "Was es nicht gibt, wird nicht berechnet",
          desc: "Channel Manager und Zahlungen stehen in keinem Plan, weil es sie noch nicht gibt. Wenn es sie gibt, stehen sie hier, mit ihrer Zahl.",
        },
      ],
    },
    compareAsk: "Vergleichen Sie mit einem anderen System?",
    compareLink: "Die Vergleiche ansehen, mit Datum",
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
      {
        q: "Warum veröffentlichen die anderen Systeme keine Preise?",
        a: "Weil der Preis pro Zimmer mit der Größe sinkt und es sich für sie lohnt, von Fall zu Fall zu verhandeln. Das ist legitim, verlagert die Arbeit aber auf den Hotelier: Formular, Anruf, Angebot, zweiter Anruf. Wir verlieren lieber die eine oder andere Verhandlung und lassen die Zahl in Sicht. Wie das gegenüber jedem Einzelnen aussieht, steht in den [Vergleichen](/comparar).",
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
        "Warum es Roombir gibt, wie wir arbeiten und in welchem Zustand jeder Teil des Produkts ist — einschließlich dessen, was es noch nicht kann.",
    },
    hero: {
      eyebrow: "Über uns",
      title: "Software für die Unterkunft, die *keine IT-Abteilung hat*.",
      lead:
        "Roombir entstand aus einer einfachen Beobachtung: ein Hotel mit zwanzig Zimmern oder eine Anlage mit sechs Hütten braucht genau dieselben Bausteine wie eine Kette, und keine Option am Markt liefert sie zusammen auf eine Weise, die in dieser Größenordnung Sinn ergibt.",
      secondary: "Produkt ansehen",
    },
    thesis: {
      eyebrow: "Die These",
      title: "Eine kleine Unterkunft sollte nicht *fünf Anbieter und einen Berater* brauchen.",
      p1: "Heute ist der übliche Ausweg ein PMS auf der einen Seite, eine Buchungsmaschine auf der anderen, eine Website von jemandem, der nicht mehr antwortet, eine Ratentabelle und Anfragen, die in einem WhatsApp landen, das niemand ordnet. Jedes Teil funktioniert; das Ganze nicht. Und die Arbeit, das Ganze in Übereinstimmung zu halten, macht am Ende die Person an der Rezeption — von Hand.",
      p2: "Die Wette von Roombir ist, dass dieses Ganze ein System mit einer Datenbank wird, dass man sich ohne Hilfe einrichten kann, und dass jeder Arbeitsplatz nur das Seine sieht. Alles andere — das RMS, die Agentenebene, der Assistent — folgt daraus: das sind Dinge, die man erst gut machen kann, wenn die Daten bereits eine Einheit sind.",
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
    pilot: {
      eyebrow: "Wo wir stehen",
      title: "Im Marktpiloten, *mit Absicht*.",
      lead:
        "In dieser Phase geht es uns nicht um Volumen. Wir versuchen, vier Fragen mit Daten zu beantworten, und alle vier hängen davon ab, dass Unterkünfte das System ernsthaft nutzen, mit echten Buchungen darin.",
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
        { value: "1", label: "einzige Datenbank für das ganze System" },
      ],
    },
    cta: {
      title: "Wenn Ihnen davon etwas *nach Ihrem Problem klingt*.",
      lead:
        "Schreiben Sie uns und wir besprechen es ohne Umschweife. Wenn Roombir für Ihren Fall noch nichts taugt, sagen wir Ihnen das im selben Gespräch.",
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
        "Schreiben Sie uns und wir besprechen es ohne Umschweife: was Roombir für Ihre Unterkunft löst und was noch nicht. Sie können die Einrichtung auch selbst starten.",
    },
    eyebrow: "Kontakt",
    title: "Erzählen Sie uns, wie *Sie heute Buchungen entgegennehmen*.",
    lead:
      "Sie müssen nicht wissen, welches Modul Sie brauchen. Zu wissen, wie viele Einheiten Sie haben, ob Sie über OTAs verkaufen und wie viel Tag dafür draufgeht, Verfügbarkeitsfragen zu beantworten, reicht schon, um Ihnen zu sagen, ob Roombir Ihnen nützt — oder ob noch nicht.",
    checks: [
      "Wir antworten innerhalb des Werktags.",
      "Wenn etwas, das Sie brauchen, noch nicht existiert, sagen wir es Ihnen sofort.",
      "Wenn Sie möchten, erfassen wir die Zimmer gemeinsam in einem kurzen Gespräch.",
    ],
    directLabel: "Oder schreiben Sie direkt",
    shortcutTitle: "Möchten Sie nicht auf eine Antwort warten?",
    shortcutText:
      "Die Einrichtung ist selbstverwaltet und geführt. Sie können die Maschine am Laufen haben, bevor wir dieses Formular beantworten.",
  },

  legal: {
    updated: "Zuletzt aktualisiert",
    updatedDate: "30. August 2026",
    privacy: {
      meta: {
        title: "Datenschutzerklärung",
        description:
          "Welche Daten Roombir auf dieser Website und in der Plattform erhebt, mit welchen Dienstleistern sie verarbeitet werden und wie man ihre Löschung verlangt.",
      },
      title: "Datenschutzerklärung",
      lead: "Welche Daten wir erheben, wofür, mit wem wir sie verarbeiten und wie Sie ihre Löschung verlangen.",
      blocks: [
        { h: "1. Wer wir sind" },
        {
          p: "Roombir ist eine Verwaltungsplattform für Unterkünfte, betrieben aus Argentinien. Für alle Fragen zu Ihren personenbezogenen Daten schreiben Sie uns an [hola@roombir.com](mailto:hola@roombir.com).",
        },
        { h: "2. Zwei verschiedene Rollen" },
        { p: "Es lohnt, sie zu trennen, denn die Pflichten sind nicht dieselben:" },
        {
          ul: [
            "**Diese Website und die geschäftliche Beziehung zu Ihnen.** Hier sind wir für die Daten verantwortlich: wir erheben sie, um Sie zu kontaktieren und zu verstehen, woher Anfragen kommen.",
            "**Die Plattform.** Wenn eine Unterkunft die Daten ihrer Gäste in Roombir erfasst, ist die Unterkunft für diese Daten verantwortlich; wir verarbeiten sie in ihrem Auftrag und nach ihren Weisungen.",
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
          p: "Wir nutzen die Formulardaten für nichts anderes, als Sie zu Roombir zu kontaktieren, und wir verkaufen sie nicht und geben sie nicht zu Werbezwecken an Dritte weiter.",
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
          p: "Sie können Auskunft über Ihre Daten, deren Berichtigung, Aktualisierung oder Löschung verlangen, indem Sie an [hola@roombir.com](mailto:hola@roombir.com) schreiben. In Argentinien ist die Agentur für Zugang zu öffentlichen Informationen die Aufsichtsbehörde für den Schutz personenbezogener Daten und bearbeitet Beschwerden derjenigen, die ihre Rechte verletzt sehen.",
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
          "Nutzungsbedingungen der Plattform roombir: was der Dienst umfasst, was im Piloten ist, die Verantwortlichkeiten beider Seiten und wie ein Konto beendet wird.",
      },
      title: "Allgemeine Geschäftsbedingungen",
      lead: "Die Regeln für die Nutzung der Plattform, so geschrieben, dass man sie versteht.",
      blocks: [
        { h: "1. Was der Dienst ist" },
        {
          p: "Roombir ist eine Cloud-Plattform zur Führung einer Unterkunft: Buchungen, Zimmer, öffentliche Buchungsmaschine, Websites, Revenue Management, Gästeportal und ein Assistent mit künstlicher Intelligenz. Der Zugang erfolgt über den Browser; es wird keine Software zur Installation ausgeliefert.",
        },
        { h: "2. Leistungsumfang" },
        {
          p: "Die Plattform befindet sich im **Marktpilot**: Einzelne Funktionen können unvollständig sein oder noch fehlen. Der geltende Umfang wird beim Vertragsabschluss schriftlich festgehalten und ist Teil dessen, was Sie akzeptieren: Wir versprechen keine Funktionen, die es nicht gibt.",
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
        { h: "5. Kommerzielle Bedingungen" },
        {
          p: "Die enthaltenen Produkte und die Obergrenzen für Objekte und Nutzer jedes Kontos werden beim Vertragsabschluss schriftlich mitgeteilt und sind Teil der Vereinbarung.",
        },
        {
          p: "Die Zahlung des Gastes läuft nicht über roombir: sie erfolgt heute beim Check-in, zwischen Unterkunft und Gast.",
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
          p: "Software, Marke und Dokumentation von Roombir gehören uns. Die Inhalte, die Sie erfassen — Texte, Fotos, Logo, Design Ihrer Website — gehören Ihnen, und Sie gestatten uns, sie ausschließlich zur Leistungserbringung zu hosten und anzuzeigen.",
        },
        { h: "10. Kündigung" },
        {
          p: "Sie können Ihr Konto jederzeit kündigen, indem Sie an [hola@roombir.com](mailto:hola@roombir.com) schreiben. Vor der Schließung räumen wir Ihnen eine angemessene Frist ein, um herunterzuladen, was Sie behalten möchten.",
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
          "Welche Cookies und Messtechnologien die roombir-Website nutzt, welche notwendig sind und wie man den Rest deaktiviert.",
      },
      title: "Cookie-Richtlinie",
      lead: "Was diese Website in Ihrem Browser speichert und was Sie deaktivieren können.",
      blocks: [
        { h: "1. Die öffentliche Website" },
        {
          p: "Die Seiten von `roombir.com` sind statisch und brauchen keine Cookies, um zu funktionieren. Wir verwenden keine eigenen Cookies, um Sie zu profilieren oder uns zwischen Besuchen zu merken, wer Sie sind. Das einzige, das auftauchen kann, ist das mit der **gewählten Sprache** aus dem Sprachumschalter, damit wir Sie beim nächsten Besuch nicht in eine andere zurückschicken.",
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
          p: "Die Anwendung unter `app.roombir.com` nutzt sehr wohl **notwendige** Cookies: die, die Ihre Sitzung aufrechterhalten. Ohne sie lässt sich das System nicht nutzen, und sie lassen sich nicht deaktivieren, ohne die Sitzung zu beenden.",
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
          p: "Bei Fragen dazu schreiben Sie uns an [hola@roombir.com](mailto:hola@roombir.com). Siehe auch die [Datenschutzerklärung](/legal/privacidad).",
        },
      ],
    },
  },

  comparar: {
    meta: {
      title: "Vergleiche",
      description:
        "Roombir gegenüber Cloudbeds, Little Hotelier, Amenitiz und Mews: veröffentlichte Preise, Mindestlaufzeit, Provision, Revenue, Channel Manager, Zahlungen und KI. Geprüft an ihren Websites, mit Datum, und mit dem Fall, in dem der andere die richtige Wahl ist.",
    },
    hero: {
      eyebrow: "Vergleiche",
      title: "Verglichen *mit Namen*.",
      lead:
        "Vier Vergleiche, geschrieben nach einer Regel: nur das, was die öffentliche Website des jeweiligen Anbieters sagt, an einem konkreten Datum gelesen und wörtlich zitiert. Keine Schätzungen Dritter, keine alten Screenshots. Jeder sagt, in welchem Fall der andere die richtige Wahl ist, denn ein Vergleich, der immer gewinnt, nützt niemandem.",
      notes: ["Nur ihre öffentliche Website", "Mit Prüfdatum", "Mit „wann den anderen wählen“"],
    },
    vsPrefix: "Roombir vs",
    read: "Vergleich lesen",
    verified: "Geprüft am {date} an der öffentlichen Website von {name}",
    verifiedDate: "2. September 2026",
    chooseThem: "Wählen Sie {name}, wenn…",
    chooseUs: "Wählen Sie roombir, wenn…",
    table: {
      eyebrow: "Kriterium für Kriterium",
      title: "Roombir und {name}, *in derselben Tabelle*.",
      lead:
        "Die Zeilen von Roombir stammen aus dem Produktstand, den wir unter Über uns veröffentlichen, einschließlich derer, die „gibt es noch nicht“ sagen. Die des anderen aus seiner öffentlichen Website am angegebenen Datum. Wenn sich etwas geändert hat, sagen Sie es uns und wir korrigieren es mit neuem Datum.",
      headCriterion: "Kriterium",
      headUs: "roombir",
    },
    legend: {
      ok: "Ja, enthalten oder angegeben",
      mid: "Teilweise, Zusatzmodul oder mit Bedingungen",
      no: "Nein, oder nicht angegeben",
      info: "Angabe ohne Bewertung",
    },
    sourcesNote:
      "Daten zu {name} am {date} von der öffentlichen Website übernommen. Die zu Roombir aus dem [Produktstand](/nosotros#estado) desselben Datums. Wenn Sie etwas Veraltetes finden, schreiben Sie an hola@roombir.com. Quelle:",
    method: {
      eyebrow: "Wie wir vergleichen",
      title: "Nur das, was ihre Website sagt, *mit Datum*.",
      lead:
        "Es ist die einzige Art, wie ein von einer der Parteien geschriebener Vergleich etwas wert sein kann. Drei Regeln, die auch für unsere Spalte gelten.",
      items: [
        "**Eine Quelle:** die öffentliche Website jedes Wettbewerbers, gelesen am 2. September 2026. Steht eine Angabe nicht auf seiner Website, sagt die Zelle „nicht angegeben“; wir erfinden nichts.",
        "**Keine Preise Dritter:** die Zahlen, die in Software-Verzeichnissen kursieren, sind Schätzungen. Veröffentlicht der Wettbewerber keinen Preis, sagt die Zeile genau das.",
        "**Unsere Zeilen stammen aus dem Produktstand:** denselben, die sagen, dass wir weder Channel Manager noch Zahlungen haben. Werden wir besser, ändert es sich dort und hier im selben Commit.",
      ],
    },
    cta: {
      title: "Wenn Sie nach dem Lesen *noch hier sind*.",
      lead:
        "Die Anmeldung ist kostenlos, geführt und verlangt keine Karte. Und wenn der Vergleich klargemacht hat, dass Sie brauchen, was wir noch nicht haben, hat er auch seinen Zweck erfüllt.",
      steps: [
        "Sie melden sich an und laden ein Objekt.",
        "Sie testen die Engine und den Assistenten mit Ihren Daten.",
        "Sie wählen einen Plan nur, wenn sich etwas für Sie geändert hat.",
      ],
    },
    criteria: {
      price: { label: "Preise auf der Website veröffentlicht", us: "Ja: in HTML, mit Zahl, aus demselben Katalog, der das Konto abrechnet", tone: "ok" },
      trial: { label: "Ohne Karte testen", us: "Ja: kostenloser Plan und Self-Service-Anmeldung, ohne vorherigen Anruf", tone: "ok" },
      lockin: { label: "Mindestlaufzeit", us: "Keine: monatlicher Plan, Kündigung ohne Strafe", tone: "ok" },
      commission: { label: "Provision auf die Booking-Engine", us: "0 %. Was über Ihre Engine hereinkommt, gehört ganz Ihnen", tone: "ok" },
      rms: { label: "Revenue Management", us: "Im Produktkatalog enthalten, je nach Plan; kein separates Modul", tone: "ok" },
      channel: { label: "Channel Manager (OTAs)", us: "Gibt es noch nicht. Nur ein Ereignisprotokoll für die spätere Anbindung", tone: "no" },
      payments: { label: "Online-Zahlung des Gastes", us: "Gibt es noch nicht: bezahlt wird beim Check-in", tone: "no" },
      ai: { label: "KI-Assistent", us: "Führt aus, mit Ihren Berechtigungen, sichtbares Protokoll des Zugs", tone: "ok" },
      fx: { label: "Mehrwährung", us: "10 Währungen; Umrechnung beim Check-in eingefroren; blue, MEP, CCL oder offiziell für ARS", tone: "ok" },
      dual: { label: "Verkaufsmodell Pool und 1:1-Einheit", us: "Ja, pro Kategorie wählbar, im selben Kalender", tone: "ok" },
      website: { label: "Website mit eigener Domain", us: "Enthalten: Builder, mehrsprachig, LinkHub mit QR", tone: "ok" },
      fiscal: { label: "Lokale steuerliche Rechnungsstellung", us: "Noch nicht", tone: "no" },
      languages: { label: "Sprachen der Plattform", us: "5: Spanisch, Englisch, Portugiesisch, Französisch, Deutsch", tone: "info" },
      segment: { label: "Typisches Segment", us: "Unabhängige und Boutique-Betriebe in Lateinamerika: Hotels, Hütten, Hostels, Glamping", tone: "info" },
      support: { label: "Einrichtung und Support", us: "Geführte Einrichtung in 9 Schritten, 38 Touren, gemeinsames Anlegen der Zimmer ohne Aufpreis", tone: "info" },
      llms: { label: "Die eigene Website, lesbar für KI (llms.txt)", us: "Ja: kuratiert, mit denselben Zahlen und Preisen wie die Website", tone: "ok" },
    },
    rivals: {
      cloudbeds: {
        name: "Cloudbeds",
        site: "cloudbeds.com",
        oneLiner: "Das globale All-in-one: 20.000+ Objekte, Channel Manager mit 450+ Kanälen, Preis auf Anfrage.",
        meta: {
          title: "Roombir vs Cloudbeds",
          description:
            "Cloudbeds und Roombir Kriterium für Kriterium verglichen: veröffentlichte Preise, Mindestlaufzeit, Provision, Revenue, Channel Manager, Zahlungen und KI. Geprüft an cloudbeds.com am 2. September 2026.",
        },
        hero: {
          title: "Roombir vs *Cloudbeds*",
          lead:
            "Cloudbeds ist das vollständigste System im unabhängigen Segment auf globaler Ebene: Channel Manager, Zahlungen, Marketing und eine analytische KI-Ebene, in über 150 Ländern. Roombir ist kleiner, jünger und für Lateinamerika gemacht, mit zwei Dingen, die Cloudbeds nicht veröffentlicht — Preis und Mindestlaufzeit — und zwei Dingen, die Cloudbeds hat und wir noch nicht: Channel Manager und Zahlungsgateway.",
        },
        them: [
          "Sie verkaufen stark über OTAs und brauchen heute einen Channel Manager, nicht erst, wenn wir ihn starten.",
          "Sie wollen online per Karte aus der Engine heraus abrechnen.",
          "Sie betreiben mehrere Objekte in mehreren Ländern und brauchen einen Marketplace mit 450 Integrationen.",
        ],
        us: [
          "Sie wollen wissen, was es kostet, bevor Sie mit einem Verkäufer sprechen, und keine Mindestlaufzeit unterschreiben.",
          "Ihr Problem ist der Direktverkauf: Anfragen gehen im Chat verloren und es gibt weder Website noch eigene Engine.",
          "Sie verkaufen in Pesos bei instabilem Wechselkurs oder mischen Hütten mit Zimmern, und kein System lässt das zu.",
        ],
        rows: {
          price: { v: "Nein: vier Pläne, und alle vier enden mit „Request a quote“", tone: "no" },
          trial: { v: "Nein: der Einstieg ist „Get a demo“", tone: "no" },
          lockin: { v: "Auf der Preisseite nicht angegeben", tone: "mid" },
          commission: { v: "0 % auf Engine und Channel Manager (angegeben); Metasearch-Provision nach dem Aufenthalt", tone: "ok" },
          rms: { v: "Zusatzmodul: Revenue Intelligence, innerhalb von Revenue Marketing", tone: "mid" },
          channel: { v: "Ja, 450+ Kanäle", tone: "ok" },
          payments: { v: "Ja, Cloudbeds Payments", tone: "ok" },
          ai: { v: "Signals und Ask Signals: konversationelle KI zur Datenabfrage", tone: "mid" },
          fx: { v: "Nicht angegeben", tone: "mid" },
          dual: { v: "Hotels und Ferienwohnungen als Segmente; kein Mischmodus angegeben", tone: "mid" },
          website: { v: "Zusatzmodul: Websites, innerhalb von Revenue Marketing", tone: "mid" },
          fiscal: { v: "Nicht angegeben", tone: "mid" },
          languages: { v: "Website in 4 Sprachen: Englisch, Spanisch, Portugiesisch, Französisch", tone: "info" },
          segment: { v: "Unabhängige und Gruppen, 150+ Länder, 20.000+ Objekte", tone: "info" },
          support: { v: "Onboarding, Customer Success und Cloudbeds University", tone: "info" },
          llms: { v: "Keine llms.txt (404 bei der Prüfung)", tone: "no" },
        },
        faq: [
          {
            q: "Ist Cloudbeds besser als roombir?",
            a: "In der Abdeckung ja: es hat Channel Manager, Zahlungen und 450 Integrationen, die wir nicht haben. In Transparenz und Fokus glauben wir nein: der Preis wird per Formular angefragt, und Revenue und Website sind separate Module. Wenn Ihr Problem heute die OTA-Distribution ist: Cloudbeds. Wenn es die Direktbuchung ist und zu wissen, was Sie zahlen werden: roombir.",
          },
          {
            q: "Was kostet Cloudbeds?",
            a: "Es wird nicht veröffentlicht. Die Preisseite hat vier Pläne — Flex, One, Experience und Enterprise — und alle vier enden mit „Request a quote“. Die Zahlen, die im Internet kursieren, sind Schätzungen Dritter, nicht von Cloudbeds, und deshalb wiederholen wir sie hier nicht.",
          },
          {
            q: "Kann ich von Cloudbeds zu Roombir wechseln?",
            a: "Ja, und wir legen Zimmer und Raten gemeinsam mit Ihnen an, ohne Aufpreis. Vorher gut zu wissen: wenn Sie von seinem Channel Manager abhängen, wird diese OTA-Synchronisation bei Roombir heute von Hand erledigt. Das steht im [Produktstand](/nosotros#estado).",
          },
        ],
      },
      littlehotelier: {
        name: "Little Hotelier",
        site: "littlehotelier.com",
        oneLiner: "Die SiteMinder-Marke für 1–30 Zimmer: 30 Tage Test, Preisrechner und Zusatzmodule, die pro Buchung berechnen.",
        meta: {
          title: "Roombir vs Little Hotelier",
          description:
            "Little Hotelier und Roombir verglichen: Preise, kostenloser Test, Gebühr pro Buchung, Revenue, Channel Manager, Zahlungen und KI. Geprüft an littlehotelier.com am 2. September 2026; Provisionen überprüft am 22. September.",
        },
        hero: {
          title: "Roombir vs *Little Hotelier*",
          lead:
            "Little Hotelier ist das System für kleine Betriebe von SiteMinder, dem größten Hoteldistributor der Welt, und Roombir in der Kundengröße am ähnlichsten: Objekte mit 1 bis 30 Zimmern. Es veröffentlicht einen Preisrechner, gibt 30 Tage Test und hat Channel Manager und Zahlungen. Seine direkte Buchungsmaschine gibt keine Provision an: Die variablen Gebühren pro Buchung stecken in den Zusatzmodulen für Metasearch und Kanäle, und Revenue und Website kommen ebenfalls als Zusatzmodule dazu.",
        },
        them: [
          "Sie brauchen heute Channel Manager und Zahlungen: beides ist da und funktioniert weltweit.",
          "Sie wollen den Rückhalt des Distributionsnetzes von SiteMinder: 450+ Kanäle, GDS, Metasearch.",
          "Sie arbeiten auf Englisch, Deutsch, Italienisch, Thai oder Indonesisch: dort ist es lokalisiert.",
        ],
        us: [
          "Sie wollen den vollständigen Preis in einer Zeile, ohne Zusatzmodule, die pro Buchung berechnen.",
          "Sie wollen Revenue und Website im Plan, nicht als Zusatzmodule.",
          "Sie verkaufen Hütten mit eigenem Namen neben Zimmern, oder rechnen in Pesos ab und müssen den Wechselkurs einfrieren.",
        ],
        rows: {
          price: { v: "Ja: Rechner nach Zimmerzahl (die Zahl wird per JavaScript geladen)", tone: "ok" },
          trial: { v: "Ja: 30 Tage kostenlos", tone: "ok" },
          lockin: { v: "Auf der Preisseite nicht angegeben", tone: "mid" },
          commission: { v: "Die direkte Buchungsmaschine gibt keine Provision an; Metasearch und Channels Plus berechnen eine variable Gebühr pro Buchung, und die Zahlungen pro Transaktion", tone: "mid" },
          rms: { v: "Zusatzmodul: Dynamic Revenue Plus", tone: "mid" },
          channel: { v: "Ja", tone: "ok" },
          payments: { v: "Ja, Little Hotelier Payments, mit Transaktionsgebühren", tone: "ok" },
          ai: { v: "Kein Assistent angegeben, der das System bedient", tone: "no" },
          fx: { v: "Nicht angegeben", tone: "mid" },
          dual: { v: "Hotels, B&B, Hütten und mehr als Typen; kein Mischmodus angegeben", tone: "mid" },
          website: { v: "Zusatzmodul: Website Builder", tone: "mid" },
          fiscal: { v: "Nicht angegeben", tone: "mid" },
          languages: { v: "Website in 6 Sprachen: Englisch, Deutsch, Spanisch, Italienisch, Thai, Indonesisch", tone: "info" },
          segment: { v: "Objekte mit 1 bis 30 Zimmern, weltweit", tone: "info" },
          support: { v: "Support rund um die Uhr per Chat, E-Mail und Telefon; Onboarding-Spezialist", tone: "info" },
          llms: { v: "Ja, automatisch erzeugt: eine Seitenliste", tone: "mid" },
        },
        faq: [
          {
            q: "Berechnet Little Hotelier Provision?",
            a: "Für seine direkte Buchungsmaschine gibt die Preisseite keine Provision an. Die **variablen Buchungsgebühren** — berechnet auf die Gesamtbuchungen abzüglich Stornierungen — gelten für seine Zusatzmodule Metasearch und Channels Plus, und seine Zahlungen berechnen pro Transaktion (littlehotelier.com/pricing, 22. September 2026). Roombir berechnet keinen Prozentsatz auf irgendeine Buchung.",
          },
          {
            q: "Welches ist günstiger?",
            a: "Das hängt davon ab, was Sie brauchen. Little Hotelier berechnet den Preis nach Zimmerzahl und rechnet Revenue und Website als Zusatzmodule dazu; Roombir bringt sie im Katalog mit, zu einer festen Gebühr pro Unterkunft. Sein Rechner und [unsere Pläne](/precios) sind veröffentlicht: Rechnen Sie mit Ihren Zahlen.",
          },
          {
            q: "Little Hotelier hat einen Channel Manager und Roombir nicht?",
            a: "Richtig, und das ist der wichtigste Unterschied, wenn Sie heute über Booking oder Expedia verkaufen. Es steht in unserem [Produktstand](/nosotros#estado) und wir werden Ihnen nichts anderes erzählen.",
          },
        ],
      },
      amenitiz: {
        name: "Amenitiz",
        site: "amenitiz.com",
        oneLiner: "Europäisches All-in-one für Unabhängige mit 3–30 Zimmern, Website inklusive. Jahresvertrag und Preis auf Anfrage.",
        meta: {
          title: "Roombir vs Amenitiz",
          description:
            "Amenitiz und Roombir verglichen: Preise, Mindestlaufzeit, Provision, Revenue, Channel Manager, Zahlungen, steuerliche Rechnungsstellung und KI. Geprüft an amenitiz.com am 2. September 2026.",
        },
        hero: {
          title: "Roombir vs *Amenitiz*",
          lead:
            "Amenitiz ist das System, das Roombir in der Idee am nächsten kommt: alles an einem Ort, Website inklusive, für unabhängige Unterkünfte mit 3 bis 30 Zimmern. Es ist europäisch — Spanien, Frankreich, Italien, Portugal — und bringt zwei Dinge mit, die wir nicht haben: Channel Manager und Zahlungen, plus steuerliche Zertifizierungen für diese vier Länder. Es verlangt einen Jahresvertrag, und der Preis wird in einem Telefonat bestätigt.",
        },
        them: [
          "Sie sind in Spanien, Frankreich, Italien oder Portugal und brauchen zertifizierte steuerliche Rechnungsstellung: VeriFactu, NF525, FatturaPA, SEF.",
          "Sie brauchen Channel Manager und Kartenzahlung vom ersten Tag an.",
          "Sie lassen Ihre Website lieber von einem Team bauen, statt sie selbst zu erstellen.",
        ],
        us: [
          "Sie wollen kein Jahr unterschreiben, bevor Sie wissen, ob es Ihnen etwas bringt.",
          "Sie wollen den Preis auf der Website und nicht „in der Demo bestätigt“.",
          "Sie sind in Lateinamerika, verkaufen in Pesos oder Reais und brauchen Mehrwährung mit eingefrorenem Kurs und einen Assistenten, der ausführt.",
        ],
        rows: {
          price: { v: "Nicht auf der Preisseite („Preis auf Anfrage“); seine llms.txt nennt ab 5 € pro Zimmer und Monat", tone: "mid" },
          trial: { v: "Nein: der Einstieg ist „Book a demo“", tone: "no" },
          lockin: { v: "1-Jahres-Vertrag (laut eigener llms.txt)", tone: "no" },
          commission: { v: "0 % auf Direktbuchungen (angegeben)", tone: "ok" },
          rms: { v: "Zusatzmodul: PriceAdvisor", tone: "mid" },
          channel: { v: "Ja, 150+ OTAs", tone: "ok" },
          payments: { v: "Ja, AmenitizPay: 1,5 % + 0,25 € pro Transaktion (laut Website)", tone: "ok" },
          ai: { v: "PriceAdvisor für Preise; kein Assistent angegeben, der das System bedient", tone: "mid" },
          fx: { v: "Nicht angegeben", tone: "mid" },
          dual: { v: "Hotels und B&B; kein Mischmodus angegeben", tone: "mid" },
          website: { v: "Ja, enthalten und vom eigenen Team gebaut", tone: "ok" },
          fiscal: { v: "Ja: NF525 (Frankreich), VeriFactu (Spanien), FatturaPA (Italien), SEF (Portugal)", tone: "ok" },
          languages: { v: "Website in 5 Sprachen: Englisch, Französisch, Spanisch, Italienisch, Portugiesisch", tone: "info" },
          segment: { v: "Unabhängige mit 3 bis 30 Zimmern in Spanien, Frankreich, Italien und Portugal", tone: "info" },
          support: { v: "Muttersprachlicher Support in 5 Sprachen, kostenlose Migration, „in 30 Tagen live oder der erste Monat ist gratis“", tone: "info" },
          llms: { v: "Ja, kuratiert: mit Preis und Vergleichen gegen Wettbewerber", tone: "ok" },
        },
        faq: [
          {
            q: "Hat Amenitiz eine Mindestlaufzeit?",
            a: "Laut seiner eigenen llms.txt-Datei läuft der Vertrag **ein Jahr**, und der Endpreis wird in der Demo bestätigt. Roombir ist monatlich ohne Mindestlaufzeit, und der Preis steht auf der Website.",
          },
          {
            q: "Taugt Amenitiz in Argentinien oder Mexiko?",
            a: "Website und llms.txt beschreiben ein Produkt für Spanien, Frankreich, Italien und Portugal, mit steuerlichen Zertifizierungen dieser Länder. Wir haben weder Preise noch Währungen noch Compliance für Lateinamerika gefunden. Roombir ist hier entstanden: Pesos, Reais, Kurse blue, MEP oder CCL, und Arbeitszeiten auf dieser Seite der Welt.",
          },
          {
            q: "Was macht Amenitiz besser?",
            a: "Drei Dinge, die wir nicht kleinreden: ein Channel Manager mit 150+ OTAs, integrierte Zahlungen und zertifizierte steuerliche Rechnungsstellung in seinen vier Ländern. Und ein Einführungsversprechen — „in 30 Tagen live oder der erste Monat ist gratis“ —, das wir für einen guten Standard halten.",
          },
        ],
      },
      mews: {
        name: "Mews",
        site: "mews.com",
        oneLiner: "Das höchstbewertete Mid-Market- und Enterprise-PMS der Welt. Offene API nur in Enterprise, Preis auf Anfrage.",
        meta: {
          title: "Roombir vs Mews",
          description:
            "Mews und Roombir verglichen: Preise, Test, Mindestlaufzeit, Revenue, offene API, Zahlungen und KI. Geprüft an mews.com am 2. September 2026.",
        },
        hero: {
          title: "Roombir vs *Mews*",
          lead:
            "Mews ist das moderne Referenz-PMS für Stadthotels, Ketten und Hostels, mit eingebetteten Zahlungen, POS und einem Marketplace mit 1.000 Integrationen. Es ist eine andere Kundengröße und ein anderer Preis. Der Vergleich zählt aus einem Grund: seine Preisseite legt die offene API und den vollständigen Marketplace in den Enterprise-Plan, während der Einstiegsplan acht Integrationen und Chatbot-Support bringt.",
        },
        them: [
          "Sie sind eine Kette, ein großes Stadthotel oder eine Gruppe mit Finanz- und IT-Team.",
          "Sie brauchen POS, eingebettete Zahlungen und Buchhaltung integriert im großen Maßstab.",
          "Sie werden den Marketplace mit 1.000 Integrationen nutzen und können den Plan bezahlen, der ihn freischaltet.",
        ],
        us: [
          "Sie haben zwischen 1 und 50 Einheiten und niemanden in der IT.",
          "Sie wollen den Preis vor der Demo kennen und keine Mindestlaufzeit unterschreiben.",
          "Sie wollen, dass die offene Ebene — llms.txt, lesbare Verfügbarkeit — mit der Buchungsmaschine kommt und nicht nur im teuersten Plan steckt.",
        ],
        rows: {
          price: { v: "Nein: drei Pläne mit „Get Pricing“", tone: "no" },
          trial: { v: "Nein: der Einstieg ist „Book a demo“", tone: "no" },
          lockin: { v: "Auf der Preisseite nicht angegeben", tone: "mid" },
          commission: { v: "Gibt keine Provision auf die Engine an", tone: "ok" },
          rms: { v: "Separates Produkt (Mews RMS); nicht in den drei veröffentlichten Plänen", tone: "mid" },
          channel: { v: "Über den Marketplace: 8 Integrationen in Essentials (mit Booking.com und Expedia); unbegrenzt nur in Enterprise", tone: "mid" },
          payments: { v: "Ja, eingebettete Zahlungen ab Essentials", tone: "ok" },
          ai: { v: "KI-Zusammenfassungen der Gästepräferenzen (Advanced); kein bedienender Assistent angegeben", tone: "mid" },
          fx: { v: "Multicurrency als Funktion; kein Einfrieren angegeben", tone: "mid" },
          dual: { v: "Hotels, Hostels, Extended Stay; kein Mischmodus angegeben", tone: "mid" },
          website: { v: "Nein: Booking-Engine ja, Website nein", tone: "no" },
          fiscal: { v: "Nicht angegeben", tone: "mid" },
          languages: { v: "Website in 7 Sprachen: Englisch (US und GB), Französisch, Deutsch, Spanisch, Niederländisch, Italienisch", tone: "info" },
          segment: { v: "Hotels, Gruppen und Ketten, Hostels; 15.000 Objekte in 85 Ländern", tone: "info" },
          support: { v: "Chatbot rund um die Uhr in Essentials; Mews University; öffentliche Community", tone: "info" },
          llms: { v: "Keine llms.txt (404 bei der Prüfung)", tone: "no" },
        },
        faq: [
          {
            q: "Warum Roombir mit Mews vergleichen, wenn es verschiedene Größen sind?",
            a: "Weil Mews als Erstes erscheint, wenn ein Hotelier „das beste PMS“ sucht, und man wissen sollte, was man bekommt: ein exzellentes System für Hotels mit Team, dessen Einstiegsplan acht Integrationen bringt und dessen offene API in Enterprise lebt. Wenn Ihr Hotel zwölf Zimmer hat, ist das nicht Ihre Liga.",
          },
          {
            q: "Ist Mews vollständiger als roombir?",
            a: "Ja, bei Zahlungen, POS, Buchhaltung und Integrationen. Roombir hat weder Zahlungen noch Channel Manager. Was wir haben, ist das, was Mews dem teuersten Plan vorbehält, und bei uns kommt es mit der Buchungsmaschine: die offene Ebene — llms.txt, lesbare Verfügbarkeit. Und je nach Plan ein Assistent, der ausführt.",
          },
          {
            q: "Was kostet Mews?",
            a: "Es wird nicht veröffentlicht: Essentials, Advanced und Enterprise, alle drei mit „Get Pricing“. Die kursierenden Zahlen sind Schätzungen Dritter und wir wiederholen sie nicht.",
          },
        ],
      },
    },
  },

  video: {
    meta: {
      title: "Video",
      description: "Roombir in einer Minute: fünf Anbieter werden einer, und ein ganzes Hotel lässt sich in einem Gespräch steuern.",
    },
    hookLead: "Dein Hotel",
    hook: [
      "Das operative Chaos",
      "bringt dich um.",
    ],
    sprawlIn: [
      "Buchungen",
      "Gästewünsche",
      "Lieferanten",
      "Schäden / Reparaturen",
    ],
    sprawlAsk: [
      "Ist das *dringend*?",
      "*WIE* lösen wir das?",
      "*WER* übernimmt?",
      "Haben wir alle *Gastdaten*?",
    ],
    sprawlChain: [
      "Etwas zu bestätigen dauert *STUNDEN*",
      "Entscheidungen gehen *VERLOREN*",
      "*DU SIEHST ES NICHT* rechtzeitig, um es zu lösen",
      "*OVERBOOKING* passiert und bringt Beschwerden",
      "*8 STUNDEN* weg und du weißt nicht, ob es was gebracht hat",
    ],
    sprawlFoot: [
      "Der Kontext geht *VERLOREN*",
      "Bewertungen und Beschwerden bleiben *VERSTREUT*",
    ],
    sprawlApps: "*MEHRERE APPS BEZAHLEN*, die du nicht mal voll nutzt",
    tooManyApps: "Zu viele Apps…",
    tooManyVendors: "Zu viele Anbieter…",
    vendors: [
      "PMS",
      "Channel-Manager",
      "Buchungsmaschine",
      "RMS",
      "Website",
    ],
    contextLost: "Der Kontext geht verloren.",
    noStaff: [
      "Du hast keinen Revenue Manager.",
      "Du hast keinen Community Manager.",
    ],
    youAre: "Du hast *dich*.",
    mazeChips: [
      "Wer hat 203 bestätigt?",
      "Was kostet der Samstag?",
      "Ist die Anzahlung da?",
      "Wer hat das Excel?",
      "Ist 104 sauber?",
      "Was hat der Gast gesagt?",
    ],
    kills: {
      pre: [
        "Verstreute Tools kosten",
        "Verstreute Information kostet",
      ],
      words: [
        "*deine Zeit*.",
        "*deinen Umsatz*.",
      ],
    },
    punchline: {
      pre: "Schluss mit ",
      struck: "losen Tabellen",
      post: ".",
    },
    meet: "Das ist",
    promise: [
      "Deine Unterkunft",
      "*komplett*",
      "in einem einzigen *System*.",
    ],
    builtTo: {
      lead: "Gebaut, um",
      pre: "Schluss zu machen mit ",
      struck: "operativem Chaos",
      post: ".",
    },
    modules: {
      reservas: "Buchungen",
      linkhub: "LinkHub",
      revenue: "Revenue",
      tourism: "Tourismus-Lage",
      ia: "Roombir KI",
      staypass: "StayPass",
      rooms: "Zimmer",
      reports: "Berichte",
    },
    moreModules: [
      "Preise",
      "Housekeeping",
      "Websites",
      "Gäste",
      "Agenten",
      "Bereiche",
      "Wettbewerb",
    ],
    brand: "Ein einziges *System*.",
    shotHead: [
      "Buchungen, Preise und Gäste",
      "auf einem einzigen Bildschirm.",
    ],
    designed: [
      "Gestaltet mit",
      "*Millimeterpräzision*.",
    ],
    hinge: {
      line: "Warum nicht einfach fragen?",
    },
    unlock: {
      lead: "Ein Gespräch schaltet frei",
      head: "Mehr",
      words: [
        "Auslastung",
        "Sichtbarkeit",
        "Rate",
        "Kontext",
        "Leistung",
      ],
      experience: "Effizienz",
    },
    era: {
      lead: "Eine neue Ära für",
      words: [
        "Buchungen",
        "Revenue",
        "Strategie",
        "KI",
      ],
    },
    outro: "Roombir. Dein Hotel, in einem *Gespräch*.",
    end: {
      tagline: "Für deine Unterkunft gemacht",
      cta: "Starte heute auf roombir.com",
    },
    booking: {
      tag: "heute",
      guest: "Martina García",
      detail: "19. → 22. März · 3 Nächte · Superior Doppel",
      amount: "$ 288.000",
    },
    linkhub: {
      tag: "buchen",
      tap: "Online buchen",
      title: "Buchen",
      checkin: "Anreise",
      checkout: "Abreise",
      inDate: "Sa 21. März",
      outDate: "Mo 23. März",
      guests: "2 Gäste",
      search: "Suchen",
      nights: "2 Nächte",
      room: "Superior Doppel",
      price: "$ 96.600 / Nacht",
      book: "Buchen",
    },
    iaCard: {
      ask: "Verleg García in die 203 und schick ihm eine Mail",
      steps: [
        {
          label: "Buchung verlegt",
          tool: "Buchung verlegen",
        },
        {
          label: "Mail gesendet",
          tool: "Mail senden",
        },
      ],
      answer: "Erledigt. García ist in der 203 und hat die Info schon.",
      hello: "Womit kann ich helfen?",
      hint: "Betrieb, Verfügbarkeit, Raten und Richtlinien.",
      placeholder: "Frag etwas…",
      chips: ["Verfügbarkeit", "Wochenendrate", "Offene Zahlungen", "Stornos"],
    },
    rooms: {
      tag: "Etage 2",
      floor: "Etage 2",
      superior: "Superior Doppel",
      double: "Doppel",
      short: {
        available: "Frei",
        occupied: "In",
        cleaning: "Rein.",
        maintenance: "Wart.",
        blocked: "Gesp.",
        checkoutPending: "C/O",
      },
      legend: {
        available: "Frei",
        occupied: "Belegt",
        cleaning: "Reinigung",
      },
    },
    stay: {
      tag: "im Aufenthalt",
      greeting: "Hallo, Martina",
      sub: "Dein Aufenthalt im Hotel del Parque",
      badge: "Eingecheckt",
      codeLabel: "Code für Formalitäten",
      copy: "Kopieren",
      stayLabel: "Unterkunft und Aufenthalt",
      hotel: "Hotel del Parque · 103 Superior Doppel",
      dates: "19. → 22. März · 3 Nächte",
    },
    status: {
      pending: "Offen",
      confirmed: "Bestätigt",
      checkedIn: "Eingecheckt",
      checkedOut: "Ausgecheckt",
      cancelled: "Storniert",
      noShow: "No-Show",
    },
    reports: {
      tag: "März",
      closed: "Ausgecheckt · Zyklus geschlossen",
      kpis: [
        {
          label: "Auslastung",
          value: "78 %",
          hint: "Feb: 71 %",
        },
        {
          label: "ADR",
          value: "$ 96.600",
          hint: "pro Nacht",
        },
        {
          label: "RevPAR",
          value: "$ 75.300",
          hint: "",
        },
        {
          label: "Umsatz",
          value: "$ 4,1 M",
          hint: "127 Nächte",
        },
      ],
    },
    tourism: {
      title: "Tourismus-Lage · München",
      updated: "aktualisiert vor 12 Min.",
      metrics: [
        {
          label: "Events in 30 Tagen",
          value: "6",
          hint: "Starkbierfest · 20. → 22. März · 3 km",
          trend: "up",
        },
        {
          label: "Nächstes langes WE",
          value: "3. → 6. Apr.",
          hint: "4 Tage · Karfreitag + Ostermontag",
          trend: "neutral",
        },
        {
          label: "Wetter am WE",
          value: "14°",
          hint: "sonnig · Frühlingsanfang",
          trend: "up",
        },
        {
          label: "Aufmerksamkeit",
          value: "+18 %",
          hint: "Suchen · 30 Tage vs. davor",
          trend: "up",
        },
      ],
      alert: "Ostern vom 3. bis 6.: die Stadt füllt sich.",
      more: "Mehr",
    },
    chat: {
      placeholder: "Bitte Roombir KI um etwas",
      thinking: "Roombir KI denkt nach",
      wait: "System wird abgefragt",
      turns: [
        {
          ask: "Leg eine Buchung an: heute, 2 Nächte, Superior Doppel",
          steps: [
            {
              label: "Verfügbarkeit",
              tool: "Verfügbarkeit suchen",
            },
            {
              label: "Buchung angelegt",
              tool: "Buchung anlegen",
            },
          ],
          answer: "Erledigt. Es ist die #BK-4821: heute, 2 Nächte, Superior Doppel.",
          hold: 700,
        },
        {
          ask: "Wie sieht das Wochenende aus? Ist was los in der Stadt?",
          steps: [
            {
              label: "Tourismus-Lage",
              tool: "Tourismus-Lage",
            },
            {
              label: "Revenue am WE",
              tool: "Revenue-Übersicht",
            },
          ],
          answer: "Starker Samstag: Starkbierfest in nur 3 km Entfernung. Ich schlage +10 % am Samstag und 2 Nächte Minimum vor.",
          hold: 1800,
        },
        {
          ask: "Ja, mach das.",
          steps: [
            {
              label: "+10 % am Samstag",
              tool: "Preis anwenden",
            },
          ],
          answer: "Erledigt. Samstag geht von $96.600 auf $106.260 in der Buchungsmaschine.",
          hold: 900,
        },
      ],
      bookingBlock: {
        guest: "Martina García",
        detail: "heute → +2 · 2 Nächte · Superior Doppel",
        amount: "$ 193.200",
      },
      ruleBlock: {
        title: "Preis angewendet",
        meta: "Sa 21.",
        kpis: [
          {
            label: "Vorher",
            value: "$ 96.600",
            hint: "pro Nacht",
          },
          {
            label: "Jetzt",
            value: "$ 106.260",
            hint: "pro Nacht",
          },
          {
            label: "Änderung",
            value: "+10 %",
            hint: "Samstag",
          },
        ],
      },
      rates: {
        old: "$96.600",
        next: "$106.260",
        delta: "+10 %",
      },
    },
    chaos: {
      chat: "Chat",
      sheet: "Tabelle",
      notes: "Notizen",
      mail: "Mail",
      agenda: "Kalender",
    },
    actions: {
      create: "Neue Buchung · 3 Nächte",
    },
    url: "roombir.com",
    ui: {
      shell: {
        company: "Hotel del Parque S.A.",
        property: "Hotel del Parque",
        space: "Rezeption",
        initials: "MG",
      },
      bookingTabs: [
        "Tagesübersicht",
        "Buchungen",
        "Kalender",
        "Neue Buchung",
        "Preise",
        "Verfügbarkeit",
        "Aktionen",
        "Einstellungen",
      ],
      roomsTabs: [
        "Zimmerstatus",
        "Belegungsplan",
        "Kategorien",
      ],
      rmsTabs: [
        "Analytik",
        "Pace",
        "Szenarien",
        "Events",
        "Wettbewerb",
        "Entscheidungen",
        "Empfehlungen",
        "Einstellungen",
      ],
      calendar: {
        hab: "Zi.",
        occupancy: "Auslastung",
        today: "Heute",
        month: "März 2026",
        ranges: [
          "1W",
          "2W",
          "1M",
        ],
        search: "Gast oder Code suchen",
        categories: "Alle Kategorien",
        states: "Alle Status",
        refresh: "Aktualisieren",
        create: "+ Neu",
        legend: {
          pending: "Offen",
          confirmed: "Bestätigt",
          "checked-in": "Eingecheckt",
          "checked-out": "Ausgecheckt",
          cancelled: "Storniert",
          "no-show": "No-Show",
        },
        hint: "Balken ziehen, um zu verschieben",
        dows: [
          "Mo",
          "Di",
          "Mi",
          "Do",
          "Fr",
          "Sa",
          "So",
        ],
        monthTick: "März",
        cats: [
          {
            name: "Doppel",
            rate: "$ 96.600",
          },
          {
            name: "Superior Doppel",
            rate: "$ 106.000",
          },
        ],
        guests: [
          "Ruiz",
          "Pérez",
          "Sosa",
          "Bianchi",
          "Engine",
        ],
      },
      rooms: {
        floors: "Alle Etagen",
        order: "Sortierung",
        orderOpts: [
          "Nr.",
          "Etage",
          "Kat.",
        ],
        countWord: "Zimmer",
        search: "Zimmer suchen...",
        categories: "Alle Kategorien",
        refresh: "Aktualisieren",
        columns: {
          available: "Frei",
          occupied: "Belegt",
          cleaning: "Reinigung",
          maintenance: "Wartung",
          blocked: "Gesperrt",
          "checkout-pending": "Checkout offen",
        },
        empty: "Keine Zimmer",
        hint: "Karte in eine andere Spalte ziehen, um den Status zu ändern",
      },
      revenue: {
        title: "Preisempfehlungen",
        sub: "Annehmen wendet den Preis als Override in der Buchungsmaschine an.",
        tabs: [
          "Offen",
          "Verlauf",
        ],
        status: {
          suggested: "Offen",
          accepted: "Angenommen",
          applied: "Angewendet",
          rejected: "Abgelehnt",
        },
        accept: "Annehmen",
        reject: "Ablehnen",
        blockTitle: "Preisempfehlungen",
        blockMeta: "1 offen",
        footnote: "Annehmen wendet den Preis als Override in der Buchungsmaschine an.",
        recs: [
          {
            date: "Sa 21. März",
            from: "$ 96.600",
            to: "$ 106.260",
            delta: "+10 %",
            reason: "Auslastung 78 % + Starkbierfest 3 km entfernt",
            status: "suggested",
          },
          {
            date: "So 22. März",
            from: "$ 96.600",
            to: "$ 101.400",
            delta: "+5 %",
            reason: "Pace +18 % vs. eigener Verlauf · Comp-Set-Median $ 101.400",
            status: "suggested",
          },
          {
            date: "Di 24. März",
            from: "$ 96.600",
            to: "$ 91.800",
            delta: "-5 %",
            reason: "Niedriger 7-Tage-Pickup · Dienstag ohne Events im Umkreis",
            status: "suggested",
          },
        ],
      },
      dashboard: {
        checkin: "Check-in",
        checkout: "Check-out",
        active: "Aktive Buchungen",
        activeSub: "Bestätigt + im Haus",
        occupancy: "Auslastung heute",
        occupancySub: "Anreisen diese Woche: 6",
        demand: "Nachfragekurve",
        demandSub: "Spitze: 9 · Schnitt: 5,4",
        recent: "Letzte Buchungen",
        recentSub: "Liste der letzten Gästebuchungen",
        newBooking: "Neue Buchung",
        cols: [
          "Buchungs-ID",
          "Gastname",
          "Check-in",
          "Check-out",
          "Summe",
          "Status",
        ],
        status: {
          confirmed: "Bestätigt",
          "checked-in": "Eingecheckt",
          pending: "Offen",
        },
        more: "Mehr",
        bookings: "Buchungen",
        bookingsSub: "Letzte 3 Monate",
        months: [
          "Januar",
          "Februar",
          "März",
        ],
        topCats: "Top-Kategorien",
        topCatsSub: "Höchste Auslastung heute",
        topCatNames: ["Doppel Superior", "Doppel", "Suite"],
        quick: "Schnellzugriff",
        quickSub: "Aktive Apps in Rezeption",
        quickItems: [
          "Tagesübersicht",
          "Buchungen",
          "Neue Buchung",
          "Preise",
        ],
        rows: [
          {
            code: "#RES-2026-KGMJ",
            cat: "Superior Doppel",
            guest: "Martina García",
            mail: "martina.garcia@gmail.com",
            inDate: "21. März 2026",
            outDate: "23. März 2026",
            nights: "2 Nächte",
            total: "$ 212.520",
            status: "confirmed",
          },
          {
            code: "#RES-2026-NGA6",
            cat: "Doppel",
            guest: "Carlos Tévez",
            mail: "ctevez@hotmail.com",
            inDate: "19. März 2026",
            outDate: "22. März 2026",
            nights: "3 Nächte",
            total: "$ 289.800",
            status: "checked-in",
          },
          {
            code: "#RES-2026-3CYL",
            cat: "Suite Nord",
            guest: "Ana Bianchi",
            mail: "ana.bianchi@yahoo.com",
            inDate: "20. März 2026",
            outDate: "24. März 2026",
            nights: "4 Nächte",
            total: "$ 592.000",
            status: "confirmed",
          },
          {
            code: "#RES-2026-B0SO",
            cat: "Doppel",
            guest: "Lucas Pérez",
            mail: "lperez@outlook.com",
            inDate: "22. März 2026",
            outDate: "25. März 2026",
            nights: "3 Nächte",
            total: "$ 289.800",
            status: "pending",
          },
          {
            code: "#RES-2026-WJU9",
            cat: "Superior Doppel",
            guest: "Sofía Ruiz",
            mail: "sofia.ruiz@gmail.com",
            inDate: "23. März 2026",
            outDate: "26. März 2026",
            nights: "3 Nächte",
            total: "$ 318.780",
            status: "confirmed",
          },
        ],
      },
      linkhub: {
        name: "Hotel del Parque",
        bio: "München · 3 km vom Englischen Garten",
        bookTitle: "Buchen",
        checkin: "Anreise",
        checkout: "Abreise",
        guests: "Gäste",
        guestsValue: "2 Erwachsene",
        search: "Suchen",
        blocks: [
          "Website",
          "WhatsApp",
          "Anfahrt",
          "Kontakt",
        ],
        footer: "Erstellt mit roombir",
        inShort: "21. März",
        outShort: "23. März",
        travelers: "2 Reisende",
        monthTitle: "März 2026",
        dows: [
          "SO",
          "MO",
          "DI",
          "MI",
          "DO",
          "FR",
          "SA",
        ],
        cancel: "Abbrechen",
        next: "Weiter",
        resultsTitle: "Wähle dein Zimmer",
        summary: "21. März → 23. März · 2 Erwachsene · 2 Nächte",
        rooms: [
          {
            name: "Superior Doppel",
            price: "$ 106.260",
          },
          {
            name: "Doppel",
            price: "$ 96.600",
          },
          {
            name: "Suite Nord",
            price: "$ 148.000",
          },
        ],
        perNight: "/ Nacht",
        book: "Buchen",
      },
      stay: {
        brand: "StayPass",
        tabs: [
          "Start",
          "Profil",
        ],
        user: "Martina",
        section: "Buchungen",
        filters: [
          "Alle",
          "Aktiv",
          "Vergangen",
        ],
      },
      reports: {
        title: "Berichte",
        updated: "Aktualisiert 21.3.2026, 09:12",
        refresh: "Aktualisieren",
        ranges: [
          "Letzte Woche",
          "Letzter Monat",
          "3 Monate",
          "6 Monate",
        ],
        rangeNote: "20.2. → 21.3. · nach Woche",
        section: "Auslastung und Volumen",
        sectionSub: "Wie das Haus gerade läuft und was kommt.",
        kpis: [
          {
            label: "Aktive Buchungen heute",
            value: "14",
            hint: "bestätigt + im Haus, heute",
          },
          {
            label: "Anreisen diese Woche",
            value: "9",
            hint: "Check-ins in den nächsten 7 Tagen",
          },
          {
            label: "Auslastung",
            value: "78 %",
            hint: "Feb: 71 %",
            badge: "+7 %",
          },
          {
            label: "RevPAR",
            value: "$ 75.300",
            hint: "24 Einheiten · 30 Tage",
          },
        ],
        chart: "Nachfragekurve — nächste 30 Tage",
        chartSub: "Bestätigte/eingecheckte Buchungen pro Nacht.",
      },
    },
    hud: {
      play: "Abspielen",
      pause: "Pause",
      restart: "Neu starten",
      language: "Sprache",
      scene: "Szene",
      fullscreen: "Vollbild",
      exitFullscreen: "Vollbild beenden",
      replay: "Noch mal ansehen",
    },
  },

  videoIa: {
    meta: {
      title: "Video · Roombir KI",
      description: "Roombir KI in gut einer Minute: Alltagsbitten, die erledigt werden, das Dossier Ihrer Destination, ein Plan, wenn die Bitte ein Ziel ist, und Ihre Berechtigungen immer vorneweg.",
    },
    tabsLine: "Wofür Sie heute *vier Tabs* brauchen…",
    placeholder: "Bitte Roombir KI um etwas",
    name: "Roombir KI",
    demo: {
      thinking: "Roombir KI denkt nach",
      wait: "System wird abgefragt",
      captions: ["Datei anhängen", "Bericht anfragen", "Per Sprache diktieren", "Ihre Destination im Detail"],
      attach: {
        label: "Datei anhängen",
        media: "Medien",
        docs: "Dokumente",
        image: "Bild",
        video: "Video",
        audio: "Audio",
        pdf: "PDF",
        csv: "CSV",
        file: "raten-april.pdf",
        ask: "Laden Sie diese Raten für April",
        steps: [
          { label: "PDF gelesen · 2 Seiten", tool: "Anhang lesen" },
          { label: "30 Raten geladen", tool: "Raten laden" },
        ],
        answer: "Erledigt: Ich habe die 30 April-Raten in den Plan Doppelzimmer Superior geladen.",
      },
      report: {
        ask: "Welcher Kanal storniert mir am meisten?",
        steps: [{ label: "Kanalbericht", tool: "Kanalbericht" }],
        answer: "Booking.com: 18 % Stornos in 90 Tagen. Direkt: 4 %.",
        title: "Stornos nach Kanal · 90 Tage",
        meta: "377 Buchungen",
        kpis: [
          { label: "Booking.com", value: "18 %", hint: "41 von 228" },
          { label: "Airbnb", value: "9 %", hint: "7 von 78" },
          { label: "Direkt", value: "4 %", hint: "3 von 71" },
        ],
      },
      voice: {
        listening: "Wird zugehört…",
        heard: "Sperren Sie die Hütte Alerce am Dienstagnachmittag wegen Wartung",
        steps: [{ label: "Sperre angelegt", tool: "Sperre anlegen" }],
        answer: "Erledigt: Die Hütte Alerce ist ab Dienstagnachmittag gesperrt. Der Vormittag bleibt buchbar.",
      },
      tourism: {
        ask: "Was ist diesen Monat in der Stadt los?",
        steps: [{ label: "Tourismus-Lage", tool: "Tourismus-Lage" }],
        answer: "Ein voller Monat: das Starkbierfest 3 km entfernt und das lange Osterwochenende.",
        panel: {
          title: "Mein Tourismusstatus",
          live: "Live-Daten",
          delayed: "Verzögert",
          sections: [
            {
              title: "Veranstaltungen in der Nähe",
              live: true,
              metrics: [
                { value: "6", label: "Veranstaltungen in 30 Tagen" },
                { value: "20. → 22. März", label: "Nächstes Großereignis" },
              ],
              narrative: "",
              items: [
                { title: "Starkbierfest", detail: "20. → 22. März · 3 km" },
                { title: "Frühlingsfest", detail: "17. Apr. → 3. Mai · 2 km" },
                { title: "Fachmesse in Riem", detail: "13. → 19. Apr. · 9 km" },
              ],
              spark: false,
            },
            {
              title: "Saison und Kalender",
              live: false,
              metrics: [
                { value: "3. → 6. Apr.", label: "Nächstes langes Wochenende" },
                { value: "30. März → 10. Apr.", label: "Nächste Schulferien" },
              ],
              narrative: "Ostern fällt auf den 3. bis 6. April: langes Wochenende in Deutschland und Österreich, Ihren zwei wichtigsten Märkten.",
              items: [],
              spark: false,
            },
            {
              title: "Interesse und Märkte",
              live: true,
              metrics: [
                { value: "+18 %", label: "Online-Interesse" },
                { value: "3", label: "Quellmärkte mit Ferien (60 T)" },
              ],
              narrative: "",
              items: [],
              spark: true,
            },
          ],
          spark: "Tägliche Wikipedia-Aufrufe (30 Tage)",
          readOnly: "Nur lesen: Um etwas zu ändern, fragen Sie Roombir KI im Chat.",
          footer: "Vor 12 Min. aktualisiert · Quellen: Nager.Date · Open-Meteo · Wikipedia · OpenStreetMap",
        },
      },
    },
    dossier: {
      count: "15 Quellen, jeder Wert mit Datum",
      topics: [
        "Feiertage",
        "Brückentage",
        "Schulferien",
        "Sport",
        "Kultur",
        "Kongresse und Messen",
        "Flüge",
        "Wetter",
        "Wechselkurse",
        "Sicherheit",
        "Naturgefahren",
        "Visa",
        "Hotelangebot",
        "Interesse am Reiseziel",
        "Umgebung",
      ],
      dates: ["22. Sep", "21. Sep", "22. Sep", "20. Sep", "22. Sep"],
      placeMeta: "München · Deutschland",
    },
    versus: {
      pre: "Ein generischer Chat",
      struck: "sucht",
      post: ".",
      us: "Roombir KI startet mit *einem Dossier*.",
    },
    goal: {
      ask: "Ich will mehr Buchungen",
      reads: "18 Quellen aus Ihrem Betrieb",
      time: "1,1 s",
      sources: [
        "Inventar",
        "Pace",
        "Tagespanel",
        "Buchungsmaschine",
        "Ratenpläne",
        "Aktionen",
        "Restriktionen",
        "Website",
        "LinkHub",
        "Sichtbarkeit",
        "Google-Profil",
        "OTAs",
        "Social Media",
        "Bewertungen",
        "Preisregeln",
        "Empfehlungen",
        "Wettbewerb",
        "Markt",
      ],
      plan: {
        title: "Nebensaison mit langsamem Tempo",
        meta: "Plan · 3 Schritte",
        diagnosis: "Der Oktober verkauft sich langsamer als Ihre Historie zu denselben Daten.",
        steps: [
          "10 % Aktion nur im Direktkanal",
          "Mindestens 1 Nacht an ruhigen Dienstagen und Mittwochen",
          "Preisregel nur für die Daten, die hinterherhinken",
        ],
        confirm: "Bestätigen",
        done: "Angewendet",
      },
    },
    perms: {
      spaces: ["Rezeption", "Verwaltung"],
      tools: "Werkzeuge",
      modal: {
        title: "Rate „Hochsaison“ löschen",
        body: "Das lässt sich nicht rückgängig machen.",
        prompt: "Namen zur Bestätigung eingeben",
        word: "Hochsaison",
        confirm: "Löschen",
        cancel: "Abbrechen",
      },
    },
    talk: {
      lines: ["Sie schreiben.", "Sie sprechen.", "Sie zeigen."],
      typed: "Welcher Kanal storniert mir am meisten?",
      listening: "Hört zu…",
      heard: "Sperren Sie die Hütte Alerce am Dienstagnachmittag",
      file: "raten-oktober.pdf",
      fileMeta: "PDF · 2 Seiten",
      shot: "ota-screenshot.png",
      withFile: "Laden Sie diese Raten für Oktober",
    },
  },

  videoProps: {
    meta: {
      title: "Video · Unterkünfte",
      description: "Unterkünfte in einer Minute: mehrere Unterkünfte unter einem Konto, jede mit eigener Währung und eigenem Team, Zugriff pro Unterkunft und pro Rolle, und alles andere hängt am Datenblatt.",
    },
    name: "Unterkünfte",
    owner: { name: "Martina García", role: "Inhaberin", initials: "MG" },
    company: "Hotel del Parque S.A.",
    hotel: {
      name: "Hotel del Parque",
      city: "Mendoza, Argentinien",
      type: "Hotel",
      inventory: "3",
      inventoryWord: "Kategorien",
      spaces: "4",
      currency: "ARS",
      language: "Español",
    },
    cabins: {
      name: "Cabañas del Lago",
      city: "Villa La Angostura, Argentinien",
      cityOnly: "Villa La Angostura",
      type: "Hütte",
      inventory: "6",
      inventoryWord: "Einheiten",
      spaces: "4",
      currency: "USD",
      language: "English",
    },
    spacesWord: "Bereiche",
    counts: { one: "1 Unterkunft", two: "2 Unterkünfte", users2: "2 Benutzer", users3: "3 Benutzer" },
    status: "active",
    chips: { currency: "Währung", timezone: "Zeitzone", language: "Sprache", tz: "UTC−3" },
    // El recorrido: la organización (tipos, estructura, reservas), no el alta.
    captions: ["Jede Unterkunft mit ihrem Typ", "Ihre Buchungen, in ihrer Währung", "Unterkunft oben wechseln", "Alles an einem Ort finden"],
    cabinUnits: ["Hütte Alerce", "Hütte Coihue", "Hütte Arrayán", "Hütte Maitén", "Hütte Lenga", "Hütte Ñire"],
    suiteRate: "$ 142.000",
    cabinRate: "US$ 180",
    templateName: "Hotel del Parque · Bereiche und Apps",
    templateNone: "Ohne Vorlage",
    coords: { pair: "-40.7625, -71.6463", lat: "-40.7625", lng: "-71.6463" },
    invite: {
      name: "Lucía Ferreyra",
      email: "lucia@cabanasdellago.com",
      role: "Staff",
      spaces: [
        { name: "Rezeption", apps: "9" },
        { name: "Housekeeping", apps: "4" },
        { name: "Verwaltung", apps: "" },
      ],
      users: "Benutzer",
      addedRow: "Cabañas del Lago · Rezeption",
      allProps: "Alle Unterkünfte",
    },
    search: {
      query: "Alerce",
      results: [
        { kind: "room", title: "Hütte Alerce", meta: "Cabañas del Lago · 4 Gäste" },
        { kind: "booking", title: "#RES-2026-QX4T · Julián Paz", meta: "Hütte Alerce · 12. → 15. Okt." },
        { kind: "property", title: "Cabañas del Lago", meta: "Villa La Angostura" },
      ],
    },
    hotelTotals: ["$ 212.520", "$ 289.800", "$ 592.000", "$ 190.400", "$ 450.000"],
    cabinRows: [
      { code: "#RES-2026-QX4T", cat: "Hütte Alerce", guest: "Julián Paz", mail: "julian.paz@gmail.com", inDate: "12. Okt. 2026", outDate: "15. Okt. 2026", nights: "3 Nächte", total: "US$ 540", status: "confirmed" },
      { code: "#RES-2026-7HPA", cat: "Hütte Coihue", guest: "Emma Walker", mail: "emma.w@outlook.com", inDate: "10. Okt. 2026", outDate: "14. Okt. 2026", nights: "4 Nächte", total: "US$ 760", status: "checked-in" },
      { code: "#RES-2026-2KDN", cat: "Hütte Arrayán", guest: "Lucas Stein", mail: "lstein@gmx.de", inDate: "14. Okt. 2026", outDate: "18. Okt. 2026", nights: "4 Nächte", total: "US$ 720", status: "confirmed" },
      { code: "#RES-2026-M8RE", cat: "Hütte Maitén", guest: "Sofía Ruiz", mail: "sofiaruiz@yahoo.com", inDate: "11. Okt. 2026", outDate: "13. Okt. 2026", nights: "2 Nächte", total: "US$ 330", status: "pending" },
      { code: "#RES-2026-VT0L", cat: "Hütte Lenga", guest: "Noah Martin", mail: "noahm@gmail.com", inDate: "16. Okt. 2026", outDate: "19. Okt. 2026", nights: "3 Nächte", total: "US$ 510", status: "confirmed" },
    ],
    access: {
      people: [
        { name: "Lucía Ferreyra", initials: "LF", space: "Rezeption", scope: "Cabañas del Lago" },
        { name: "Tomás Ríos", initials: "TR", space: "Housekeeping", scope: "Hotel del Parque" },
        { name: "Martina García", initials: "MG", space: "Verwaltung", scope: "Alle" },
      ],
      caps: "10 Verwaltungsrechte, einzeln vergeben",
    },
    root: {
      items: ["Zimmer", "Buchungen", "Marke", "Website", "LinkHub", "Bewertungen", "Galerien"],
      phoneLabel: "Telefon",
      phoneOld: "+54 261 555-0100",
      phoneNew: "+54 261 555-0199",
      targets: ["Website", "LinkHub", "Buchungsmaschine"],
      updated: "Aktualisiert",
    },
    // Los rótulos de la UI real, copiados de los diccionarios del PMS (pms-core/app/src/i18n/dictionaries).
    ui: {
      newProperty: "Neues Objekt",
      typeLabel: "Unterkunftstyp *",
      typeHint: "Legt fest, wie Ihre Unterkünfte verkauft werden: nach konkreter Einheit oder nach Kategorie.",
      template: "Vorlage (optional)",
      create: "Objekt erstellen",
      nameLabel: "Name *",
      city: "Stadt *",
      country: "Land",
      cancel: "Abbrechen",
      properties: "Objekte",
      unitTitle: "Verkauf nach Einheiten",
      unitHint: "Jede Unterkunft wird einzeln gebucht (1:1).",
      catTitle: "Verkauf nach Kategorien",
      catHint: "Der Verkauf erfolgt nach Zimmertyp aus einem Pool von Einheiten.",
      tCabin: "Hütte",
      tVilla: "Villa",
      tVacation: "Ferienunterkunft",
      tGlamping: "Glamping",
      tResort: "Resort",
      tAparthotel: "Aparthotel",
      tHostel: "Hostel",
      editProperty: "Objekt bearbeiten",
      coords: "Koordinaten",
      lat: "Breitengrad",
      lng: "Längengrad",
      coordTip: "Tipp: In Google Maps mit Rechtsklick auf den Punkt → Koordinaten kopieren und das Paar hier einfügen (es wird automatisch auf Lat / Long verteilt).",
      howCopy: "So kopieren Sie",
      publicContact: "Öffentlicher Kontakt",
      publicEmail: "Öffentliche E-Mail",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      social: "Soziale Netzwerke",
      address: "Adresse",
      save: "Änderungen speichern",
      spacesTitle: "Objekte und Arbeitsbereiche",
      spacesIntro: "Wähle die zugänglichen Objekte. Öffne jedes, um die Arbeitsbereiche zuzuweisen.",
      onlyChosen: "Nur die ausgewählten",
      allFuture: "Alle, auch künftige",
      assignedSpaces: "Bereiche zugewiesen",
      seeSpaces: "Bereiche anzeigen",
      isDefault: "Standard",
      allApps: "Zugriff auf alle Apps",
      appsEnabled: "Apps aktiviert",
      operate: "Bedienen",
      capsTitle: "Administrative Zugriffe",
      capsHint: "Wähle aus, was diese Person im Unternehmen verwalten darf.",
      gUsers: "Benutzer",
      gProps: "Objekte und Bereiche",
      gCompany: "Unternehmen",
      changeProperty: "Objekt wechseln",
      searchPlaceholder: "Reservierungen, Gäste, Zimmer, Apps, Benutzer suchen…",
      navigate: "navigieren",
      open: "öffnen",
      close: "schließen",
      kBooking: "Reservierung",
      kProperty: "Objekt",
      kRoom: "Zimmer",
      currentProperty: "Aktuelles Objekt",
      createUserTitle: "Benutzer anlegen",
      createUserBtn: "Benutzer anlegen",
      createUserIntro: "Das Konto wird mit einem temporären Passwort erstellt. Bei der ersten Anmeldung muss der Benutzer es durch ein eigenes ersetzen.",
      fullName: "Vor- und Nachname",
      email: "Benutzer-E-Mail",
      role: "Rolle",
      caps: [
        "Benutzer verwalten",
        "Arbeitsbereiche zuweisen",
        "Objekte anlegen",
        "Objekte bearbeiten",
        "Objekt wechseln",
        "Arbeitsbereiche verwalten",
        "Apps aktivieren und deaktivieren",
        "Unternehmenseinstellungen",
        "Abrechnung und Tarif",
        "Websites"
      ]
    },
  },

  /* Die Videos Zimmer, Buchungsmaschine, Berichte, Revenue und Marketing
     (`/video/zimmer`, …): die Überschriften kommen von jeder Seite; hier steht
     nur, was zu jedem Video gehört (Schritt-Untertitel und Beispieldaten). */
  videoTours: {
    rooms: {
      meta: {
        title: "Video · Zimmer",
        description: "Zimmer in einer Minute: der Zustand des Hauses auf einen Blick, Kategorie-Pools und benannte Hütten im selben Kalender, Status, die Unmögliches ausschließen, und eine Nacht, die nur einmal verkauft wird.",
      },
      captions: ["Der Zustand des Hauses, auf einen Blick", "Kategorie-Pool und benannte Hütten, in einem Kalender", "Eine Nacht wird nur einmal verkauft"],
      modes: ["Kategorie-Pool", "Benannte Einheit"],
      cabinCat: "Hütten",
      cabinRate: "$ 140.000",
      cabins: ["Hütte Alerce", "Hütte Coihue"],
      guestNew: "Romero",
      sources: { first: "Ihre Website", second: "Booking" },
      lock: { title: "Diese Nacht ist schon verkauft", sub: "Hütte Alerce · 21. März · die Datenbank lässt die zweite nicht rein" },
      states: { forbidden: "Nicht, solange der Gast drin ist", allowed: "Erst Check-out ausstehend" },
      notes: {
        card: {
          t: "Eine Karte, ein Zimmer",
          d: "Die Farbe zeigt den Status: frei, belegt, in Reinigung…"
        },
        moved: {
          t: "Die Reinigung ist fertig",
          d: "Ziehen Sie es auf Frei, und es ist wieder buchbar."
        },
        pool: {
          t: "Kategorie-Pool",
          d: "Der Gast bucht „ein Doppel“; das Zimmer wird später zugeteilt."
        },
        row: {
          t: "Jede Zeile, ein Zimmer",
          d: "Und jeder Balken, eine Buchung: Gast, Personen und Nächte."
        },
        unit: {
          t: "Benannte Einheit",
          d: "Gebucht wird die Hütte Alerce, mit ihren Fotos und ihrem Preis."
        },
        web: {
          t: "Eine Buchung kommt von Ihrer Website",
          d: "Sie belegt die Nächte vom 19. bis 21."
        },
        second: {
          t: "Booking will dieselben Nächte",
          d: "Die Datenbank lässt sie nicht rein."
        }
      },
      load: {
        card: { name: "Superior Doppel", units: "4 Einheiten", mode: "Kategorie-Pool", rate: "$ 106.000 / Nacht", size: "24 m²", guests: "2 Erwachsene", amenities: ["WLAN","Klimaanlage","Bergblick"] },
        chips: ["Kalender", "Buchungsmaschine", "Ihre Website", "LinkHub", "Revenue", "Roombir KI", "Berichte"],
      },
    },
    motor: {
      meta: {
        title: "Video · Buchungsmaschine",
        description: "Die Buchungsmaschine in einer Minute: der Gast wählt seine Nächte auf Ihrer Website, die Buchung landet im Tagespanel und im Kalender, jeder Preis sagt, woher er kommt, und der Betrag bewegt sich nicht mit dem Wechselkurs.",
      },
      captions: ["Die Buchung landet im Tagespanel", "Und belegt ihre Nächte im Kalender", "Der Preis der Nacht, mit Begründung"],
      source: "Maschine · Ihre Website",
      notes: {
        price: {
          t: "Der Preis jedes Tages",
          d: "Schon vor der Datumswahl, mit den Tarifen der Maschine."
        },
        units: {
          t: "Wie viele übrig sind",
          d: "Ihr echtes Inventar: am 21. sind es noch 3."
        },
        photos: {
          t: "Jedes Zimmer, mit seinen Fotos",
          d: "Und seinem Preis pro Nacht für diese Daten."
        },
        row: {
          t: "Die neue Buchung, ganz oben",
          d: "Bestätigt und mit Gesamtbetrag: niemand hat sie eingetippt."
        },
        bar: {
          t: "Ihre zwei Nächte, belegt",
          d: "Die 103 wird am 21. und 22. nicht mehr verkauft."
        },
        accept: {
          t: "Sie nehmen den Vorschlag an",
          d: "Dieser Tarif hat jetzt Vorrang vor den anderen."
        }
      },
      chain: {
        title: "Woher der Preis kommt",
        steps: ["In Revenue akzeptiert", "Tarifplan", "Grundpreis", "Aktionen"],
        winner: "$ 106.260 · Sa 21. März",
      },
      motorUi: {travelers: "Reisende",dates: "Daten",adults: "Erwachsene",adultsHint: "Ab 18",children: "Kinder",childrenHint: "3 – 17 Jahre",infants: "Babys",infantsHint: "0 – 2 Jahre",code: "Code",promoName: "Direktbuchung",optional: "Optional",back: "Zurück",done: "Fertig",available: "Verfügbare Zimmer",range: "21. März → 23. März",dayRange: "21. März - 23. März",nights: "2 Nächte",adultsCount: "2 Erwachsene",monthCaption: "März 2026",dows: ["So","Mo","Di","Mi","Do","Fr","Sa"]},
      promos: {
        title: "Aktionen, *sichtbar vor der Buchung*.",
        notes: {
          code: { t: "Mit Code oder automatisch", d: "Der Gast gibt den Code ein, oder die Aktion gilt automatisch für seine Daten." },
          badge: { t: "Die Aktion im Blick", d: "Etikett, durchgestrichener alter Preis und der Name der Aktion bei jedem Zimmer." },
        },
      },
      currencyTitle: "Der Preis, den der Gast sah, *bleibt eingefroren*.",
      currencies: ["US$ · US-Dollar", "$ · Argentinischer Peso", "R$ · Real", "CLP · Chilenischer Peso", "COP · Kolumbianischer Peso", "MXN · Mexikanischer Peso", "S/ · Sol", "UYU · Uruguayischer Peso", "€ · Euro", "£ · Pfund"],
      frozen: { guestLabel: "Der Gast sah", guestValue: "158,60 US$", youLabel: "Sie kassieren", youValue: "$ 212.520", note: "Kurs beim Check-in eingefroren · 21. März 09:12" },
    },
    reports: {
      meta: {
        title: "Video · Berichte",
        description: "Berichte in einer Minute: wie die Unterkunft läuft, ohne Tabelle zu bauen, jede Zahl gegen den Vorzeitraum und, was nicht im Bericht steht, an Roombir KI gefragt.",
      },
      captions: ["Wie die Unterkunft läuft", "Was schon gebucht ist, Nacht für Nacht", "Steht es nicht im Bericht, fragen Sie"],
      ask: "Welcher Kanal storniert diesen Monat am meisten?",
      steps: [
        { label: "Buchungen des Monats gelesen", tool: "Buchungsbericht" },
        { label: "Stornierungen nach Kanal", tool: "Stornierungen" },
      ],
      answer: "Booking storniert am meisten: 6 von 21 Buchungen (29 %). Ihre Website, 1 von 14. Die Rezeption hat 2 Buchungen, daher lege ich mich nicht fest.",
      block: {
        title: "Stornierungen nach Kanal",
        meta: "März",
        kpis: [
          { label: "Booking", value: "29 %", hint: "6 von 21" },
          { label: "Ihre Website", value: "7 %", hint: "1 von 14" },
          { label: "Rezeption", value: "—", hint: "2 Buchungen: zu wenige" },
        ],
      },
      compare: {
        vs: "vs. Februar",
        items: [
          { label: "Umsatz", now: "$ 4,1 M", prev: "$ 3,6 M", delta: "+14 %" },
          { label: "Vorlaufzeit", now: "18 Tage", prev: "22 Tage", delta: "−4 Tage" },
          { label: "Ø Aufenthalt", now: "2,8 Nächte", prev: "2,5 Nächte", delta: "+0,3" },
          { label: "Auslastung", now: "78 %", prev: "71 %", delta: "+7 Pkt." },
        ],
      },
      chips: ["Auslastung", "Nachfrage 90 Tage", "ADR", "RevPAR", "Stornierungen", "Kanäle", "Umsatz", "Vorlaufzeit", "Ø Aufenthalt", "Auslastung je Kategorie"],
    },
    revenue: {
      meta: {
        title: "Video · Revenue",
        description: "Revenue in einer Minute: jeder vorgeschlagene Preis mit Begründung, Annehmen setzt ihn in der Maschine, das Reiseziel mit seinen Quellen und dreizehn Variablen mit Trockenlauf.",
      },
      captions: ["Jeder Preis, mit Begründung", "Annehmen setzt ihn in der Maschine", "Was die Nachfrage bewegt, mit Quelle"],
      vars: ["Auslastung", "Nachfrageindex", "Verfügbarkeit", "Wettbewerber 1", "Wettbewerber 2", "Wettbewerber 3", "Wettbewerber 4", "Wettbewerber 5", "Neue Buchungen · 7 Tage", "Neue Buchungen · 30 Tage", "Event-Wirkung", "Tage bis zum Event", "Pace-Index"],
      dryRun: {
        title: "Trockenlauf",
        rule: "Wenn Auslastung ≥ 75 % in 14 Tagen → +8 %",
        result: "Hätte 9 Nächte geändert",
        avg: "+$ 7.700 pro Nacht",
      },
      applied: "Tarif in der Maschine gesetzt",
    },
    marketing: {
      meta: {
        title: "Video · Marketing",
        description: "Marketing in einer Minute: eine Website und ein LinkHub, die schon wissen, was frei ist, der Editor mit seinem KI-Assistenten, Follower, die aus Ihren sozialen Netzwerken buchen, Ihre Marke einmal hinterlegt und der ganze Hub an einem Ort.",
      },
      linkhub: {
        title: "Machen Sie Ihre Follower *zu Gästen* – mit LinkHub.",
        points: ["Direkt dort buchen, ohne den Link zu verlassen", "Aus Instagram, TikTok oder WhatsApp", "Freie Termine sofort im Blick", "Mit wenigen Tipps, ohne unnötige Formulare"],
      },
      brand: {
        title: "Markenidentität",
        name: "Hotel del Parque",
        palette: "Palette aus dem Logo",
        tone: "Ton",
        toneValue: "Warm und nahbar",
        font: "Schrift",
        fontValue: "Outfit",
        targets: ["Ihre Website", "LinkHub", "Buchungsmaschine", "Suchmaschinen", "Mails an Gäste", "Roombir KI"],
      },
      editor: {
        captions: [
          "Screenshot einfügen, die Bereiche entstehen",
          "Auf einen Block zeigen und die Änderung verlangen",
          "Eine Qualitätsprüfung, die auch behebt"
        ],
        bar: {
          add: "Hinzufügen",
          layers: "Ebenen",
          files: "Dateien",
          popups: "Popups",
          motor: "Engine",
          settings: "Einstellungen",
          ai: "Editor",
          preview: "Vorschau",
          unpublished: "Nicht veröffentlicht",
          discard: "Verwerfen",
          quality: "Qualität",
          publish: "Veröffentlichen",
          published: "Veröffentlicht",
          page: "Seite bearbeiten:",
          pageName: "Start",
          editIn: "Bearbeiten für:",
          device: "Desktop",
          live: "Live ansehen",
          domain: "Domain verbinden"
        },
        chat: {
          title: "KI-Editor",
          hello: "Hallo! Ich bin Roombir KI. Bitten Sie mich, Bereiche zu erstellen, zu bearbeiten oder neu zu ordnen.",
          placeholder: "Schreiben Sie roombir… Fügen Sie Bilder ein oder wählen Sie Elemente der Arbeitsfläche aus, um sie zu zitieren.",
          cite: "Elemente zitieren",
          shot: "startseite-vorlage.png",
          ask1: "Bauen Sie meine Startseite wie diese, mit meinen Zimmern",
          steps1: [
            "Screenshot wird gelesen",
            "Titelbereich",
            "Zimmerbereich",
            "Bewertungsbereich"
          ],
          answer1: "Fertig: Die Startseite hat drei Bereiche, als Entwurf.",
          quote: "Zimmer",
          ask2: "Zwei weitere Karten hinzufügen",
          steps2: [
            "„Zimmer“ wird bearbeitet"
          ],
          answer2: "Zwei Karten hinzugefügt. Der Rest blieb gleich."
        },
        site: {
          nav: [
            "Zimmer",
            "Service",
            "Lage"
          ],
          book: "Buchen",
          heroTitle: "Ihr Zuhause am Park",
          heroSub: "Hotel del Parque · Mendoza, Argentinien",
          roomsTitle: "Unsere Zimmer",
          rooms: [
            "Doppel Superior",
            "Park-Suite",
            "Hütte Alerce",
            "Doppel Klassik",
            "Hütte Coihue"
          ],
          guests: "Gäste",
          reviewsTitle: "Das sagen unsere Gäste",
          review: "Köstliches Frühstück und ein Blick auf den Park, den wir nicht vergessen.",
          reviewer: "Laura M. · Google"
        },
        quality: {
          title: "Website-Qualität",
          sub: "Vollständige Prüfung",
          gauges: [
            "Leistung",
            "Barrierefreiheit",
            "Empfehlungen",
            "SEO",
            "Agenten"
          ],
          overall: "Gesamtwert",
          fix: "Alles beheben",
          recheck: "Erneut prüfen",
          errors: "Fehler",
          passed: "Bestanden",
          issues: [
            "Bilder ohne Beschreibung",
            "Seitenbeschreibung fehlt",
            "Text auf dem Handy zu klein"
          ]
        },
        notes: {
          draft: {
            t: "Alles landet im Entwurf",
            d: "Veröffentlichen ist ein eigener Schritt, und er gehört Ihnen."
          }
        }
      },
      hub: {
        title: "Und alles andere, *am selben Ort*.",
        menu: [
          "Websites",
          "Markenidentität",
          "Galerien",
          "Bewertungen",
          "LinkHub",
          "Dateibibliothek"
        ],
        chips: [
          "Fotos und Videos",
          "Bildeditor",
          "Vorlagen mit Ihrer Marke",
          "Bewertungen importieren",
          "LinkHub mit QR",
          "Popups und WhatsApp",
          "Ihre Domain",
          "Mehrere Sprachen",
          "SEO und GEO",
          "Für eine KI lesbar"
        ]
      },
      one: "Alles in roombir, verbunden mit Ihren Buchungen",
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
