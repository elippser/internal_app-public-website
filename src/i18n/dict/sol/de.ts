import type { SolDict } from "./es";

/** Header-Menüs und Lösungsseiten, auf Deutsch. Gleiche Form wie `sol/es.ts`. */
const menus: SolDict["menus"] = {
  platform: "Plattform",
  ia: "Roombir KI",
  solutions: "Lösungen",
  platformGroups: {
    operations: "Betrieb",
    distribution: "Vertrieb",
    marketing: "Marketing",
  },
  platformItems: {
    pms: { title: "Unterkünfte, Zimmer und Buchungen", desc: "Einmal anlegen, dann im Tagespanel, in der Liste und im Kalender arbeiten." },
    informes: { title: "Berichte", desc: "Belegung, Umsatz, Kanäle und falsch erfasste Daten." },
    motor: { title: "Buchungsmaschine", desc: "Der Kalender, in dem der Gast den Preis sieht und selbst bucht." },
    revenue: { title: "Revenue", desc: "Der Preis für jedes Datum, mit Begründung." },
    linkhub: { title: "LinkHub", desc: "Der Link in Ihrer Bio, mit der Buchungsmaschine darin." },
    agentes: { title: "Lesbar für eine KI", desc: "Ihre Unterkunft, für einen Assistenten verständlich und buchbar." },
    web: { title: "Website", desc: "Ein Editor mit Assistent, verbunden mit Ihren Reservierungen." },
    marca: { title: "Marke", desc: "Logo, Farbpalette und Tonalität, einmal hinterlegt." },
    archivos: { title: "Fotos und Dateien", desc: "Bibliothek und Galerien an einem Ort." },
    resenas: { title: "Bewertungen", desc: "Bewertungen aus mehreren Quellen, direkt hier beantwortet." },
  },
  platformFoot: "Alles auf einer einzigen Datenbank.",
  platformLink: "Die ganze Plattform ansehen",
  iaFeatured: {
    label: "Der Assistent",
    title: "Roombir KI",
    desc: "Die gesamte Verwaltung in einem Gespräch. Sie fragen, sie erledigt es, mit Ihren Berechtigungen.",
    more: "Was Sie anfragen können",
  },
  iaLabel: "Was sie macht",
  // El único enlace del menú Roombir IA (las secciones son anclas de la misma página).
  iaLink: "Alles über Roombir KI",
  iaItems: {
    pedidos: { title: "Was Sie anfragen können", desc: "Reservierungen, Tarife, Zimmer und Website in einem Satz." },
    destino: { title: "Lage am Reiseziel", desc: "Feiertage, Events, Wetter und Flüge an Ihrem Reiseziel, mit Quelle." },
    estrategia: { title: "Strategie-Modus", desc: "Sie bitten um mehr Buchungen und erhalten einen Plan, der umgesetzt wird." },
    permisos: { title: "Berechtigungen", desc: "Sie arbeitet mit Ihren Berechtigungen, nicht mit eigenen." },
    hablar: { title: "So sprechen Sie mit ihr", desc: "Schriftlich, per Sprache oder mit einem Screenshot." },
    diferencia: { title: "Der Unterschied", desc: "Warum sie kein allgemeiner KI-Chat ist." },
  },
  solutionGroups: {
    byType: "Nach Unterkunftsart",
    byRole: "Nach Rolle",
  },
  solutionItems: {
    hoteles: { title: "Hotels, Aparthotels und Hostels", desc: "Sie verkaufen die Kategorie, das System weist das Zimmer zu." },
    alojamientos: { title: "Hütten und Ferienwohnungen", desc: "Jede Einheit mit eigenem Namen, eigenen Fotos und eigenem Preis." },
    propietarios: { title: "Eigentümer", desc: "Das Geschäft im Blick, ohne an der Rezeption zu stehen." },
    direccion: { title: "Geschäftsführung", desc: "Betrieb und Team in einem einzigen System." },
    revenue: { title: "Revenue Manager", desc: "Der Preis für jedes Datum, vollständig nachvollziehbar." },
    recepcion: { title: "Rezeption", desc: "Die ganze Schicht aus der Tagesübersicht." },
    housekeeping: { title: "Housekeeping", desc: "Der Status jedes Zimmers, direkt vom Smartphone." },
  },
  solutionsLink: "Alle Lösungen ansehen",
  more: "Mehr",
};

const index: SolDict["index"] = {
  byType: {
    eyebrow: "Nach Unterkunftsart",
    title: "Zwei Arten zu verkaufen, *ein System*.",
    lead: "Manche Unterkünfte verkaufen eine Kategorie und weisen das Zimmer später zu, andere verkaufen jede Einheit mit eigenem Namen. Roombir kann beides, auch gleichzeitig in derselben Unterkunft.",
  },
  byRole: {
    eyebrow: "Nach Rolle",
    title: "Jede Rolle, *ihr Arbeitsbereich*.",
    lead: "Die Muster-Arbeitsbereiche der häufigsten Rollen: was jede Person sieht, was sie erledigt und wie sie mit dem restlichen Team verbunden ist.",
  },
  open: "Lösung ansehen",
};

const pages: SolDict["pages"] = {
  hoteles: {
    meta: {
      title: "Hotels, Aparthotels und Hostels",
      description:
        "Roombir für Unterkünfte, die nach Zimmertyp verkaufen: Der Gast bucht eine Kategorie, das System weist das Zimmer zu. Automatische Zuweisung, Tape Chart, Status nach Etage und ein Assistent, der handelt.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Unterkunftsart",
      title: "Sie verkaufen die Kategorie, *das System weist zu*.",
      lead: "In einem Hotel, Aparthotel oder Hostel bucht der Gast „ein Superior-Doppelzimmer“, nicht die 203. Roombir arbeitet von Grund auf so: Die Kategorie bündelt austauschbare Zimmer, die Buchungsmaschine verkauft die Kategorie, und das Zimmer wird automatisch zugewiesen oder von der Rezeption bestimmt.",
    },
    space: {
      eyebrow: "So wird verkauft",
      title: "Eine Kategorie, *mehrere gleiche Zimmer*.",
      lead: "Jede Kategorie wird als Pool eingerichtet: Zehn austauschbare Doppelzimmer werden als ein Produkt verkauft, mit Preis, Fotos und Ausstattung. Bei der Bestätigung wählt das System das Zimmer.",
      items: [
        "**Automatische Zuweisung**, die Lücken zwischen Buchungen minimiert oder die Abnutzung auf die Zimmer verteilt, ganz wie Sie möchten.",
        "**Oder ohne Zuweisung**: Die Buchung geht auf die Kategorie, und die Rezeption wählt das Zimmer im Kalender.",
        "**Neuverdichtung der Zuweisungen**, um Lücken freizugeben, wenn die Belegung eng wird.",
        "**Haben Sie zusätzlich eine Suite oder eine einzelne Hütte**, wird diese Kategorie in derselben Unterkunft mit eigenem Namen verkauft.",
      ],
    },
    day: {
      eyebrow: "Ein ausgebuchter Samstag",
      title: "Derselbe Tag, *mit und ohne* roombir.",
      lead: "Ein Hotel mit dreißig Zimmern bei hoher Belegung. Links, was mit Tabellen und einer separaten Buchungsmaschine passiert, rechts, was das System erledigt.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "08:00",
          old: "Über Nacht kamen drei Buchungen über die Website. Sie müssen in die Tabelle übertragen und einem passenden Zimmer zugeordnet werden.",
          now: "Sie landeten automatisch im Kalender, zugewiesen an das Zimmer mit den wenigsten Lücken. Die Rezeption sieht sie in der Tagesübersicht.",
        },
        {
          time: "11:30",
          old: "Eine Familie möchte eine Nacht länger bleiben, und ihr Zimmer ist ab morgen belegt.",
          now: "Die Rezeption verlängert die Buchung im Kalender und sieht vor dem Loslassen den Konflikt und in welches freie Zimmer sie umziehen kann.",
        },
        {
          time: "13:00",
          old: "Die Reinigung weiß nicht, welche Zimmer schon frei sind.",
          now: "Jedes Zimmer hat seinen Status – Abreise ausstehend, Reinigung, verfügbar –, und das Housekeeping aktualisiert ihn in seinem Arbeitsbereich.",
        },
        {
          time: "18:00",
          old: "Ein Doppelzimmer ist noch frei, und niemand weiß, ob man den Preis senken oder halten soll.",
          now: "Revenue zeigt die Empfehlung für dieses Datum mit schriftlicher Begründung. Wenn Sie sie annehmen, geht sie in die Buchungsmaschine.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was es löst",
      title: "Gemacht für *den Hotelbetrieb*.",
      items: [
        { title: "Tape Chart", desc: "Zimmer nach Tagen: Sie ziehen, verlängern und sehen Konflikte vor dem Loslassen. [Reservierungen ansehen](/producto/pms)." },
        { title: "Status nach Etage", desc: "Sechs Status mit gültigen Übergängen, Verlauf pro Zimmer und ein Belegungsplan nach Etage." },
        { title: "Eine Nacht, ein Verkauf", desc: "Jede Nacht jedes Zimmers ist eine eindeutige Sperre in der Datenbank: Zwei Buchungen können nicht dieselbe belegen." },
        { title: "Jede Rolle, ihr Bildschirm", desc: "Rezeption, Housekeeping, Revenue und Verwaltung arbeiten in ihrem eigenen Arbeitsbereich, mit eigenem Menü." },
      ],
    },
    faq: [
      {
        q: "Eignet es sich für Hostels?",
        a: "Ja, für den täglichen Betrieb: Tagesübersicht mit An- und Abreisen, ein Arbeitsbereich für das Housekeeping und geführte Touren für wechselndes Personal. Jeder Zimmertyp wird als Kategorie mit seiner Kapazität angelegt.",
      },
      {
        q: "Kann ich das Zimmer selbst wählen statt des Systems?",
        a: "Ja. Die automatische Zuweisung ist optional: Sie können Buchungen ohne Zimmer eingehen lassen und sie selbst im Kalender oder in der Reservierungsliste zuweisen.",
      },
      {
        q: "Was passiert, wenn zwei Personen gleichzeitig das letzte Zimmer buchen?",
        a: "Eine der beiden Buchungen geht nicht durch. Jede Nacht jedes Zimmers ist eine **eindeutige Sperre in der Datenbank**: keine Prüfung, die man umgehen kann, sondern die Datenbank selbst verhindert es.",
      },
    ],
    cta: {
      title: "Legen Sie Ihre Kategorien an und *sehen Sie die Zuweisung*.",
      lead: "Die Einrichtung ist geführt: Sie erfassen die Unterkunft, die Kategorien und die Zimmer, und die Verfügbarkeit wird automatisch angelegt.",
      steps: [
        "Sie erfassen die Unterkunft und die Kategorien.",
        "Sie legen alle Zimmer auf einmal per Massenimport an.",
        "Sie verbinden die Buchungsmaschine mit Ihrer Website und erhalten Buchungen.",
      ],
    },
  },

  alojamientos: {
    meta: {
      title: "Hütten, Apartments und Ferienwohnungen",
      description:
        "Roombir für Unterkünfte, die jede Einheit mit eigenem Namen verkaufen: Hütten, Apartments, Villen und Glamping. Jede Einheit mit eigenen Fotos, eigenem Preis und eigenem Kalender, und eine Buchungsmaschine, die die Verfügbarkeit Tag für Tag zeigt.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Unterkunftsart",
      title: "Jede Einheit wird *mit eigenem Namen* verkauft.",
      lead: "Niemand bucht „eine Hütte mit zwei Räumen“: Man bucht die Alerce, mit ihren Fotos, ihrer Aussicht und ihrem Preis. In Roombir ist jede Einheit eine eigene Kategorie, mit eigenem Kalender, eigenen Tarifen und eigener Seite in der Buchungsmaschine.",
    },
    space: {
      eyebrow: "So wird verkauft",
      title: "Eine Einheit, *eine eigene Seite*.",
      lead: "Im Einheitenmodus umfasst die Kategorie genau eine Einheit. Es gibt keine Zuweisung zu klären und keinen Zweifel daran, was der Gast gebucht hat.",
      items: [
        "**Fotos, Beschreibung, Kapazität und Preis** für jede Einheit, in der Buchungsmaschine und auf der Website.",
        "**Mindestaufenthalt und geschlossene Tage** pro Datum, für lange Wochenenden und die Hochsaison.",
        "**Sperren nach halben Tagen**: Die Wartung am Nachmittag sperrt diese Nacht, der Vormittag bleibt buchbar.",
        "**Haben Sie zusätzlich Standardzimmer**, laufen beide nebeneinander: Der Modus wird pro Kategorie gewählt, nicht für die ganze Unterkunft.",
      ],
    },
    day: {
      eyebrow: "Freitag vor einem langen Wochenende",
      title: "Derselbe Tag, *mit und ohne* roombir.",
      lead: "Eine Anlage mit sechs Hütten in der Saison. Links, was man uns im ersten Gespräch erzählt, rechts, was das System erledigt.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "09:00",
          old: "Zehn WhatsApp-Nachrichten mit der Frage, welche Hütte am Wochenende frei ist.",
          now: "Der Link der Buchungsmaschine zeigt Tag für Tag, welche Einheiten frei sind und den Ab-Preis. Drei Gäste haben selbst gebucht.",
        },
        {
          time: "12:00",
          old: "Jemand möchte zwei Nächte, aber das Minimum am langen Wochenende sind drei. Das muss man von Hand erklären.",
          now: "Die Buchungsmaschine zeigt die Mindestnächte schon bei der Wahl des Anreisetags. Die Anfrage kommt gar nicht erst.",
        },
        {
          time: "15:00",
          old: "Die Coihue hat einen Wasserschaden und muss bis morgen aus dem Verkauf.",
          now: "Sie sperren den Nachmittag wegen Wartung: Diese Nacht verschwindet aus der Buchungsmaschine, der nächste Vormittag bleibt buchbar.",
        },
        {
          time: "20:00",
          old: "Ein Gast aus Brasilien fragt nach dem Preis in Real, und Sie rechnen den Kurs von Hand um.",
          now: "Die Buchungsmaschine zeigt ihm den Preis in seiner Währung. Sie kassieren in Ihrer, und der Kurs wird beim Check-in eingefroren.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was es löst",
      title: "Gemacht für *einzigartige Einheiten*.",
      items: [
        { title: "Verfügbarkeit im Blick", desc: "Ab-Preis, freie Einheiten und geschlossene Tage an jedem Kalendertag, noch vor der Datumswahl. [Buchungsmaschine ansehen](/producto/motor)." },
        { title: "LinkHub für Ihre Bio", desc: "Der Instagram-Link öffnet dieselbe Buchungsmaschine, mit echter Verfügbarkeit. [LinkHub ansehen](/producto/marketing#linkhub)." },
        { title: "Zehn Währungen", desc: "Der Gast sieht seine Währung, Sie kassieren in Ihrer. Für argentinische Pesos wählen Sie offiziell, Blue, MEP oder CCL." },
        { title: "Eine Website mit Ihren Einheiten", desc: "Der Editor baut die Website mit Abschnitten, die Ihre Einheiten, Fotos und Bewertungen lesen. [Marketing ansehen](/producto/marketing#web)." },
      ],
    },
    faq: [
      {
        q: "Kann ich Hütten und Zimmer in derselben Unterkunft haben?",
        a: "Ja. Hütten werden als Einheit mit eigenem Namen verkauft, Zimmer als Kategorie mit mehreren gleichen Zimmern, und beide stehen im selben Kalender und in derselben Buchungsmaschine.",
      },
      {
        q: "Kann jede Hütte ihren eigenen Preis haben?",
        a: "Ja. Jede Einheit hat ihren Grundpreis und kann eigene Tarifpläne und Aktionen haben, mit Mindestaufenthalt pro Datum.",
      },
      {
        q: "Eignet es sich für Glamping und Villen?",
        a: "Ja, für jede Unterkunft, in der jede Einheit anders ist und unter ihrem Namen verkauft wird. Domes, Häuser, Apartments oder Villen werden wie eine Hütte angelegt.",
      },
    ],
    cta: {
      title: "Legen Sie Ihre Einheiten an und *teilen Sie den Link*.",
      lead: "Die Einrichtung ist geführt. Sie erfassen jede Einheit mit Fotos und Preis, und die Buchungsmaschine ist bereit für WhatsApp oder Ihre Bio.",
      steps: [
        "Sie erfassen die Unterkunft und jede Einheit mit Fotos.",
        "Sie legen Mindestaufenthalte und geschlossene Tage fest.",
        "Sie teilen den Link der Buchungsmaschine oder binden sie in Ihre Website ein.",
      ],
    },
  },

  propietarios: {
    meta: {
      title: "Eigentümer",
      description:
        "Roombir für Eigentümer von Unterkünften: wissen, wie das Geschäft läuft, ohne an der Rezeption zu stehen, mit Zahlen entscheiden und mit klaren Berechtigungen pro Person und pro Unterkunft delegieren.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Rolle",
      title: "Ihr Geschäft im Blick, *ohne an der Rezeption zu stehen*.",
      lead: "Als Eigentümer müssen Sie wissen, wie die Belegung läuft, was verkauft wurde und was falsch erfasst ist, ohne jemanden um eine Tabelle zu bitten. Und jede Person im Team soll ihre Aufgaben erledigen, ohne Zugriff auf alles zu haben.",
    },
    space: {
      eyebrow: "Der Arbeitsbereich",
      title: "Das ganze System, *und wer was sieht*.",
      lead: "Der Verwaltungsbereich sieht alle Apps des Systems. Von hier aus erhält das restliche Team Zugriff, Person für Person und Unterkunft für Unterkunft.",
      items: [
        "**Berichte** zu Belegung, Durchschnittsrate, Umsatz und Stornierungen, im Vergleich zum Vorzeitraum.",
        "**Status und Verwaltung**: was heute falsch erfasst ist, etwa unbestätigte Buchungen oder Anreisen ohne Zimmer.",
        "**Benutzer und Befugnisse**: zehn Verwaltungsbefugnisse, einzeln vergeben, und Zugriff nur auf die jeweiligen Unterkünfte.",
        "**Roombir KI**, um in einem Satz zu fragen, was nicht auf dem Bildschirm steht.",
      ],
    },
    day: {
      eyebrow: "Eine Woche als Eigentümer",
      title: "Dieselbe Woche, *mit und ohne* roombir.",
      lead: "Ein Eigentümer mit einem Hotel und einer Hüttenanlage, der nicht jeden Tag am Empfang steht.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "Mo.",
          old: "Sie schreiben dem Leiter, um zu erfahren, wie das Wochenende lief. Er antwortet mittags mit einem Foto der Tabelle.",
          now: "Sie öffnen Berichte auf dem Smartphone: Belegung, Umsatz und Stornierungen des Zeitraums, mit dem Vergleich zum Vorzeitraum.",
        },
        {
          time: "Di.",
          old: "Ein Gast erzählt Ihnen, dass seine Buchung nie bestätigt wurde.",
          now: "Status und Verwaltung markiert Buchungen, die seit über einem Tag unbestätigt sind, bevor der Gast anreist.",
        },
        {
          time: "Do.",
          old: "Jemand fängt an der Rezeption an, und Sie geben Ihren Zugang weiter, weil es keinen anderen gibt.",
          now: "Sie legen ein eigenes Konto im Rezeptionsbereich an, beschränkt auf diese Unterkunft. Revenue und Einstellungen bleiben unsichtbar.",
        },
        {
          time: "Fr.",
          old: "Sie fragen sich, welcher Kanal die meisten Buchungen bringt und welcher am häufigsten storniert.",
          now: "Sie fragen Roombir KI und erhalten die Zahl samt Herkunft.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was Sie davon haben",
      title: "Mit Zahlen entscheiden, *mit Rechten delegieren*.",
      items: [
        { title: "Berichte ohne Tabelle", desc: "Berechnet auf denselben Buchungen, mit denen Ihr Team arbeitet. [Berichte ansehen](/producto/informes)." },
        { title: "Mehrere Unterkünfte", desc: "Ein Hotel und einige Hütten unter einem Konto, jeweils mit eigener Währung und eigenem Team. [Unterkünfte ansehen](/producto/pms)." },
        { title: "Echte Berechtigungen", desc: "Jede Person meldet sich mit eigenem Konto an, in ihrem Bereich und für ihre Unterkünfte. Sensible Vorgänge werden protokolliert." },
        { title: "Ein Assistent, der antwortet", desc: "Roombir KI liest dieselben Daten und antwortet mit der Zahl oder nimmt die Änderung vor, wenn Sie darum bitten. [Roombir KI ansehen](/producto/ia)." },
      ],
    },
    faq: [
      {
        q: "Kann ich das Geschäft vom Smartphone aus verfolgen?",
        a: "Ja. Das System läuft im Browser und ist für Smartphone und Tablet gemacht, nicht nur für den Computer an der Rezeption.",
      },
      {
        q: "Was sieht das Personal, das ich einstelle?",
        a: "Nur das, was Sie freigeben: Der Arbeitsbereich bestimmt Menü und Startseite, der Zugriff pro Unterkunft bestimmt, welche Unterkünfte sichtbar sind. Das Housekeeping sieht zum Beispiel keine Tarife.",
      },
      {
        q: "Muss ich etwas installieren?",
        a: "Nein. Der Zugang läuft über den Browser, und die Einrichtung besteht aus neun geführten Schritten, die Sie unterbrechen und auf einem anderen Gerät fortsetzen können.",
      },
    ],
    cta: {
      title: "Sehen Sie Ihre Unterkunft *mit den Augen des Systems*.",
      lead: "Sie registrieren sich, erfassen die Unterkunft und haben noch am selben Nachmittag Ihre Berichte. Wenn Sie es lieber vorher sehen möchten, gehen wir es gemeinsam durch.",
      steps: [
        "Sie legen das Unternehmen und die erste Unterkunft an.",
        "Sie laden Ihr Team ein, jede Person in ihren Bereich.",
        "Sie verfolgen das Geschäft über Berichte und Roombir KI.",
      ],
    },
  },

  direccion: {
    meta: {
      title: "Geschäftsführung",
      description:
        "Roombir für Direktoren und Geschäftsführer: Tagesbetrieb, Team und Zahlen im selben System, mit einem Arbeitsbereich pro Rolle und einem Bereich, der auf falsch erfasste Daten hinweist.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Rolle",
      title: "Der ganze Betrieb, *in einem System*.",
      lead: "Eine Unterkunft zu führen heißt, Rezeption, Reinigung, Vertrieb und Zahlen zu koordinieren, die meist in verschiedenen Tools liegen. In Roombir ist es ein System: Jede Rolle arbeitet in ihrem Bereich, und Sie sehen das Ganze.",
    },
    space: {
      eyebrow: "Der Arbeitsbereich",
      title: "Das Ganze sehen, *ohne jeden Bereich zu öffnen*.",
      lead: "Der Verwaltungsbereich vereint alle Bereiche des Systems. Von hier aus legen Sie fest, was jede Rolle sieht und tun darf.",
      items: [
        "**Tagesübersicht** mit An- und Abreisen und den Buchungen, die eine Aktion brauchen.",
        "**Status und Verwaltung**: was heute falsch erfasst ist, bevor daraus ein Gast ohne Zimmer wird.",
        "**Arbeitsbereiche pro Rolle**: Sie bestimmen, welche Apps Rezeption, Housekeeping, Marketing oder Revenue sehen.",
        "**Einarbeitung pro Bereich**: Jede neue Person erhält die geführten Touren der Apps ihrer Rolle.",
      ],
    },
    day: {
      eyebrow: "Ein Tag in der Leitung",
      title: "Derselbe Tag, *mit und ohne* roombir.",
      lead: "Ein Hotel mit vierzig Zimmern und einem Team von zwölf Personen im Schichtdienst.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "08:00",
          old: "Die Morgenbesprechung beginnt damit, Daten aus drei Systemen und einer Tabelle zusammenzutragen.",
          now: "Tagesübersicht und Berichte zeigen bereits An- und Abreisen, Belegung und Offenes.",
        },
        {
          time: "10:30",
          old: "Eine neue Rezeptionistin fängt an, und jemand erklärt ihr das System mitten in der Schicht.",
          now: "Ihr Rezeptionsbereich enthält die geführten Touren jedes Bildschirms, direkt auf der echten Oberfläche.",
        },
        {
          time: "14:00",
          old: "Eine Beschwerde: Ein Zimmer wurde ungereinigt übergeben, und niemand weiß, was passiert ist.",
          now: "Der Zimmerverlauf zeigt, wer welchen Status wann und mit welcher Notiz geändert hat.",
        },
        {
          time: "17:00",
          old: "Revenue, Website und Reservierungen stimmen sich per Nachrichten zwischen drei Personen ab.",
          now: "Alle drei arbeiten mit denselben Daten: Der in Revenue angenommene Tarif ist bereits in der Buchungsmaschine und auf der Website.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was Sie davon haben",
      title: "Ein Team, abgestimmt *über ein System*.",
      items: [
        { title: "Bereiche pro Rolle", desc: "Jede Rolle mit eigenem Menü, eigener Startseite und eigenen Rechten: bedienen, konfigurieren oder nichts." },
        { title: "Geführte Touren", desc: "38 Touren, die auf dem echten Bildschirm erscheinen und die Einarbeitung jeder neuen Person bilden." },
        { title: "Verlauf pro Zimmer", desc: "Wer welchen Status wann und mit welcher Notiz geändert hat. [Zimmer ansehen](/producto/pms)." },
        { title: "Berichte und Revenue", desc: "Die Zahlen des Betriebs und der Preis jedes Datums mit Begründung. [Revenue ansehen](/producto/revenue)." },
      ],
    },
    faq: [
      {
        q: "Kann ich einschränken, was jede Rolle sieht?",
        a: "Ja. Der Arbeitsbereich bestimmt Menü und Startseite, und die Rechte gelten pro App und Stufe: bedienen, konfigurieren oder nichts.",
      },
      {
        q: "Was ist mit wechselndem Personal?",
        a: "Jede neue Person startet in ihrem Bereich mit den geführten Touren ihrer Apps. Und das Konto kann mit einem temporären Passwort angelegt werden, das bei der ersten Anmeldung geändert werden muss.",
      },
      {
        q: "Eignet es sich, wenn ich mehrere Unterkünfte leite?",
        a: "Ja. Mehrere Unterkünfte laufen unter demselben Konto, und der Zugriff jeder Person beschränkt sich auf die ihr zugeordneten.",
      },
    ],
    cta: {
      title: "Richten Sie die Bereiche Ihres Teams *an einem Nachmittag* ein.",
      lead: "Die Einrichtung legt die Unterkunft an und schlägt Arbeitsbereiche passend zu Ihrem Betrieb vor. Danach laden Sie jede Person in ihren Bereich ein.",
      steps: [
        "Sie legen die Unterkunft an und wählen Ihre Betriebsform.",
        "Sie passen die Arbeitsbereiche pro Rolle an.",
        "Sie laden das Team ein, jede Person in ihren Bereich.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue Manager",
      description:
        "Roombir für Revenue Manager: der Preis jedes Datums mit nachvollziehbarer Begründung, Pace gegen die eigene Historie, Wettbewerb, Events am Reiseziel und der Tarif, der nach Annahme direkt in die Buchungsmaschine geht.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Rolle",
      title: "Der Preis jedes Datums, *vollständig nachvollziehbar*.",
      lead: "Ein Revenue Manager braucht keine weitere Blackbox, die eine Zahl ausgibt. Er muss sehen, welche Daten genutzt wurden, welche Regel gegriffen hat und welche Grenze angewendet wurde, und der angenommene Tarif muss in die Buchungsmaschine, ohne ihn von Hand zu übertragen.",
    },
    space: {
      eyebrow: "Der Arbeitsbereich",
      title: "Revenue, Berichte und Tarife *an einem Ort*.",
      lead: "Der Revenue-Bereich vereint das RMS mit Tarifen, Verfügbarkeit und Berichten, auf denselben Daten, mit denen die Rezeption arbeitet.",
      items: [
        "**Entscheidungsprotokoll** pro Datum: die betrachteten Daten, die greifende Regel, die angewendete Grenze und das Ergebnis.",
        "**Pace gegen Ihre eigene Historie**, nach Wochentag, Monat und Vorlaufzeit, mit sichtbarer Stichprobengröße.",
        "**Regeln mit Probelauf**: dreizehn Variablen und ein Probelauf, der zeigt, was jede Regel getan hätte, bevor Sie sie aktivieren.",
        "**Wettbewerb**: wird nach Nähe und Ähnlichkeit gefunden, und die Tarife externer Mitbewerber tragen Sie selbst als Referenz ein.",
      ],
    },
    day: {
      eyebrow: "Zehn Tage vor einem Event",
      title: "Dieselbe Entscheidung, *mit und ohne* roombir.",
      lead: "Ein Hotel in einer Stadt, in der in zehn Tagen ein großes Festival stattfindet.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "09:00",
          old: "Sie erfahren vom Festival durch einen Gast, der fragt, ob noch etwas frei ist.",
          now: "Das Event steht bereits in der Liste, vom System nach Nähe und Datum vorgeschlagen, und wartet auf Ihre Freigabe.",
        },
        {
          time: "11:00",
          old: "Sie vergleichen das Buchungstempo mit dem Vorjahr in zwei Tabellen.",
          now: "Der Pace vergleicht mit Ihrer eigenen Historie für diese Daten und zeigt, auf wie vielen Buchungen die Berechnung beruht.",
        },
        {
          time: "15:00",
          old: "Sie beschließen, den Tarif zu erhöhen, und bitten jemanden, den Preis in der Buchungsmaschine zu ändern.",
          now: "Sie nehmen die Empfehlung an, und der Tarif geht als erste Stufe des Preises für dieses Datum in die Buchungsmaschine.",
        },
        {
          time: "+7 Tage",
          old: "Niemand erinnert sich, warum erhöht wurde.",
          now: "Das Entscheidungsprotokoll speichert, was das System gesehen hat, welche Regel gegriffen hat und wer angenommen hat.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was Sie davon haben",
      title: "Entscheidungen, die *sich erklären lassen*.",
      items: [
        { title: "Die Herleitung jedes Preises", desc: "Welche Daten, welche Regel, welche Grenze, Datum für Datum. [Revenue ansehen](/producto/revenue)." },
        { title: "Das Reiseziel mit Quelle", desc: "Feiertage, Events in Ihrem Umkreis, Wetter und beobachtete Flugrouten, jede Angabe mit Datum. [Lage am Reiseziel ansehen](/producto/ia#destino)." },
        { title: "Geschlossener Kreis mit der Buchungsmaschine", desc: "Der angenommene Tarif ist die erste Stufe der Preiskette der Buchungsmaschine. [Buchungsmaschine ansehen](/producto/motor)." },
        { title: "Fragen in einem Satz", desc: "Roombir KI liest Pace, Events und Tarife und schlägt Ihnen vor, was zu tun ist, mit Ihrer Bestätigung." },
      ],
    },
    faq: [
      {
        q: "Setzt es die Preise selbst um?",
        a: "Standardmäßig schlägt es vor, und Sie nehmen jede Empfehlung an oder lehnen sie ab. Wenn Sie es aktivieren, können Empfehlungen automatisch angewendet werden.",
      },
      {
        q: "Was, wenn ich wenig Historie habe?",
        a: "Der Bildschirm sagt es Ihnen: Jede Berechnung zeigt, auf wie vielen Buchungen sie beruht, und täuscht keine Sicherheit vor, die es nicht gibt.",
      },
      {
        q: "Woher kommen die Tarife der Mitbewerber?",
        a: "Mitbewerber, die ebenfalls roombir nutzen, liefern ihren echten Tarif. Externe werden automatisch nach Nähe und Ähnlichkeit gefunden, und ihren Tarif tragen Sie selbst als feste Referenz oder pro Datum ein.",
      },
    ],
    cta: {
      title: "Der Preis ist *kein Bauchgefühl mehr*.",
      lead: "Revenue ist nützlich, sobald Sie eigene Historie haben, und sagt Ihnen bis dahin, mit welcher Stichprobe es arbeitet.",
      steps: [
        "Sie erfassen die Unterkunft und die Basistarife.",
        "Sie prüfen Events und Wettbewerb an Ihrem Reiseziel.",
        "Sie nehmen die erste Empfehlung an, und sie geht in die Buchungsmaschine.",
      ],
    },
  },

  recepcion: {
    meta: {
      title: "Rezeption",
      description:
        "Roombir für die Rezeption: Tagesübersicht, Reservierungsliste, Tape Chart und ein Assistent, der Änderungen in einem Satz erledigt, mit Gäste-E-Mails, die automatisch versendet werden.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Rolle",
      title: "Die ganze Schicht, *aus der Tagesübersicht*.",
      lead: "Die Rezeption lebt zwischen Anreisen, Abreisen, Zimmerwechseln und Anfragen per WhatsApp. Der Rezeptionsbereich startet in der Tagesübersicht und hat alles griffbereit, was die Schicht braucht, und nichts, was sie nicht braucht.",
    },
    space: {
      eyebrow: "Der Arbeitsbereich",
      title: "Was die Schicht braucht, *sonst nichts*.",
      lead: "Das Menü der Rezeption enthält die Reservierungsansichten und den Zimmerstatus. Revenue, Einstellungen und der Website-Editor liegen in anderen Bereichen.",
      items: [
        "**Tagesübersicht** mit An- und Abreisen, auf Karten mit direkten Aktionen.",
        "**Alle Reservierungen** mit Seitenpanel: Übersicht, Aktivität und Notizen, ohne die Liste zu verlassen.",
        "**Tape Chart**: Sie ziehen oder verlängern eine Buchung und sehen den Konflikt vor dem Loslassen.",
        "**Neue Reservierung** für Anfragen per Telefon oder WhatsApp, mit Herkunftskanal und Aktionen.",
      ],
    },
    day: {
      eyebrow: "Ein ganz normaler Dienstag",
      title: "Dieselbe Schicht, *mit und ohne* roombir.",
      lead: "Eine Unterkunft mit zwölf Einheiten und einer Person am Empfang.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "08:10",
          old: "Drei WhatsApp-Anfragen zur Verfügbarkeit am Wochenende. Sie öffnen Excel und antworten einzeln.",
          now: "Sie schicken den Link der Buchungsmaschine: Preis und freie Einheiten, Tag für Tag. Zwei haben selbst gebucht.",
        },
        {
          time: "11:00",
          old: "García muss in ein anderes Zimmer. Sie suchen die Buchung, ändern sie und schreiben die E-Mail.",
          now: "Sie bitten Roombir KI, ihn in die 203 zu verlegen und per E-Mail zu informieren. Sie erledigt es und zeigt Ihnen die Karte mit der Änderung.",
        },
        {
          time: "14:20",
          old: "Ein Gast möchte eine Nacht länger bleiben, und Sie wissen nicht, ob das Zimmer frei ist.",
          now: "Sie verlängern die Buchung im Kalender und sehen vor dem Loslassen, ob sie mit einer anderen kollidiert und wie sich der Preis ändert.",
        },
        {
          time: "17:00",
          old: "Die Bestätigung einer telefonischen Buchung muss aus Ihrem privaten Postfach verschickt werden.",
          now: "Sie erfassen sie unter Neue Reservierung, und die E-Mail an den Gast geht automatisch raus, von der Domain von roombir mit Ihrem Postfach als Antwortadresse.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was Sie davon haben",
      title: "Weniger Klicks, *weniger Nachrichten*.",
      items: [
        { title: "Ein Assistent, der handelt", desc: "Verlegen, zuweisen und benachrichtigen in einem Satz, mit Ihren Berechtigungen. [Roombir KI ansehen](/producto/ia)." },
        { title: "E-Mails, die von selbst rausgehen", desc: "Bestätigungen und Hinweise an Gäste werden versendet, ohne einen Mailserver einzurichten." },
        { title: "Eine Nacht, ein Verkauf", desc: "Zwei Buchungen können nicht dieselbe Nacht desselben Zimmers belegen: Die Datenbank verhindert es." },
        { title: "Geführte Touren", desc: "Sind Sie neu in der Rolle, hat jeder Bildschirm seine Tour auf der echten Oberfläche. [Reservierungen ansehen](/producto/pms)." },
      ],
    },
    faq: [
      {
        q: "Muss ich mich mit Hotelsoftware auskennen?",
        a: "Nicht nötig. Ihr Bereich enthält nur die Ansichten der Rezeption, und jede hat eine geführte Tour, die auf dem echten Bildschirm erscheint.",
      },
      {
        q: "Wer bestätigt die Buchungen aus der Buchungsmaschine?",
        a: "Das hängt von der Einstellung ab: Der Gast bestätigt per Link in der E-Mail, oder Sie nehmen sie an. In beiden Fällen verfallen offene Buchungen automatisch.",
      },
      {
        q: "Kann ich es auf einem Tablet am Empfang nutzen?",
        a: "Ja. Es läuft im Browser und ist für Smartphone und Tablet gemacht, zusätzlich zum Computer.",
      },
    ],
    cta: {
      title: "Starten Sie die Schicht *in der Tagesübersicht*.",
      lead: "Ihre Leitung lädt Sie in Ihren Rezeptionsbereich ein, und Sie melden sich mit Ihrem Konto an. Die geführten Touren erledigen den Rest.",
      steps: [
        "Sie erhalten die Einladung in Ihren Bereich.",
        "Sie machen die Tour durch die Tagesübersicht.",
        "Sie führen die Schicht über Reservierungen und Kalender.",
      ],
    },
  },

  housekeeping: {
    meta: {
      title: "Housekeeping",
      description:
        "Roombir für das Housekeeping: der Status jedes Zimmers nach Etage, fehlerfreie Statuswechsel und Verlauf, in einem Arbeitsbereich ohne Tarife und Revenue.",
    },
    hero: {
      eyebrow: "Lösungen · Nach Rolle",
      title: "Der Status jedes Zimmers, *ohne Nachfrage an der Rezeption*.",
      lead: "Die Reinigung muss wissen, welche Zimmer frei geworden sind, welche für eine Anreise vorbereitet werden müssen und welche in Wartung sind. In Roombir sieht sie das in ihrem eigenen Bereich, mit einer Übersicht nach Etage, die ihre Daten mit der Rezeption teilt.",
    },
    space: {
      eyebrow: "Der Arbeitsbereich",
      title: "Status und Plan, *ohne Tarife*.",
      lead: "Der Housekeeping-Bereich enthält den Zimmerstatus und den Belegungsplan. Tarife, Revenue und die Einstellungen der Buchungsmaschine sind nicht sichtbar.",
      items: [
        "**Sechs Status**: verfügbar, belegt, Reinigung, Wartung, gesperrt und Abreise ausstehend.",
        "**Statuswechsel ohne Fehler**: Von belegt geht es nur zu Abreise ausstehend, niemand gibt ein Zimmer frei, in dem noch der Gast ist.",
        "**Übersicht nach Etage und Kategorie**, mit Filtern, um das Haus auf einen Blick zu erfassen.",
        "**Verlauf pro Zimmer**: wer welchen Status wann und mit welcher Notiz geändert hat.",
      ],
    },
    day: {
      eyebrow: "Ein Vormittag voller Abreisen",
      title: "Dieselbe Schicht, *mit und ohne* roombir.",
      lead: "Ein Hotel mit fünfzehn Abreisen und zehn Anreisen am Tag.",
      headOld: "Heute",
      headNew: "Mit roombir",
      rows: [
        {
          time: "09:00",
          old: "Die Rezeption meldet telefonisch, welche Zimmer schon ausgecheckt sind.",
          now: "Beim Check-out an der Rezeption wechselt das Zimmer zu Abreise ausstehend und erscheint in Ihrer Übersicht.",
        },
        {
          time: "11:00",
          old: "Sie sind mit der 203 fertig, aber die Rezeption erfährt es nicht und führt sie weiter als schmutzig.",
          now: "Sie setzen sie auf dem Smartphone auf verfügbar, und die Rezeption sieht sie als verfügbar auf ihrem Bildschirm.",
        },
        {
          time: "13:00",
          old: "In der 205 ist ein Wasserhahn kaputt, und die Meldung bleibt auf einem Zettel.",
          now: "Sie setzen sie mit einer Notiz auf Wartung, und die Änderung steht im Verlauf des Zimmers.",
        },
        {
          time: "15:00",
          old: "Ein Gast kommt früh an, und niemand weiß, welches Zimmer bereit ist.",
          now: "Die Übersicht nach Etage zeigt, welche Zimmer gerade verfügbar sind.",
        },
      ],
    },
    benefits: {
      eyebrow: "Was Sie davon haben",
      title: "Weniger Hin und Her *mit der Rezeption*.",
      items: [
        { title: "Übersicht nach Etage", desc: "Das ganze Haus auf einen Blick, mit Filtern nach Etage und Kategorie. [Zimmer ansehen](/producto/pms)." },
        { title: "Vom Smartphone aus", desc: "Der Housekeeping-Bereich läuft im Browser des Smartphones, direkt im Zimmer." },
        { title: "Keine überflüssigen Daten", desc: "Ihr Menü hat keine Tarife und kein Revenue, nur das, was die Schicht braucht." },
        { title: "Geführte Touren", desc: "Jeder Bildschirm hat seine Tour auf der echten Oberfläche, für alle, die neu anfangen." },
      ],
    },
    faq: [
      {
        q: "Sieht das Reinigungspersonal die Tarife?",
        a: "Nein, wenn Sie das nicht möchten. Der Housekeeping-Bereich hat ein eigenes Menü – Zimmerstatus und Plan – ohne Tarife und Revenue.",
      },
      {
        q: "Warum kann ich ein belegtes Zimmer nicht auf verfügbar setzen?",
        a: "Weil der Gast noch im Zimmer ist. Von belegt geht es nur zu Abreise ausstehend, was mit dem Check-out kommt. So verkauft niemand ein Zimmer, das noch genutzt wird.",
      },
      {
        q: "Werden die Änderungen protokolliert?",
        a: "Ja. Jedes Zimmer speichert seinen Statusverlauf: wer, wann und mit welcher Notiz.",
      },
    ],
    cta: {
      title: "Damit die Reinigung *dasselbe sieht* wie die Rezeption.",
      lead: "Die Leitung legt das Konto im Housekeeping-Bereich an, und jede Person meldet sich mit ihrem eigenen an, vom Smartphone aus.",
      steps: [
        "Sie erhalten die Einladung in Ihren Bereich.",
        "Sie machen die Tour durch den Zimmerstatus.",
        "Sie ändern den Status vom Smartphone aus, Zimmer für Zimmer.",
      ],
    },
  },
};

export const solDe: SolDict = { menus, index, pages };
