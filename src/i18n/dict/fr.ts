import type { Dictionary } from "./es";
import { solFr } from "./sol/fr";
import { platFr } from "./plat/fr";
import { intelFr } from "./intel/fr";

/**
 * Français. Les mêmes clés que `es.ts` — TypeScript ne laisse pas faire
 * autrement.
 *
 * Le vouvoiement est celui d'un fournisseur qui parle à un professionnel :
 * direct, concret, et prêt à dire ce que le produit ne fait pas encore.
 */
const fr: Dictionary = {
  site: {
    title: "Roombir · PMS, moteur, site web et revenue sans cinq fournisseurs",
    description:
      "Réservations, moteur de réservation propre, site web, revenue management et un assistant IA qui exécute, sur une seule base de données. Pour hôtels, chalets, auberges et locations d'Amérique latine.",
    tagline: "Logiciel hôtelier sans cinq fournisseurs",
    og: {
      title: "Votre hébergement entier, sans cinq fournisseurs.",
      lead: "Réservations, chambres, moteur de réservation propre, site web, revenue et un assistant qui exécute. Sur une seule base de données, fait en Argentine.",
      chips: ["PMS", "Moteur de réservation", "Sites web", "Revenue", "LinkHub", "Roombir IA"],
    },
  },

  nav: {
    menus: { ...solFr.menus, platformPromo: platFr.promo, solutionsPromo: platFr.solPromo, intelligence: intelFr.card },
    product: "Plateforme",
    platform: "La plateforme",
    contact: "Contact",
    login: "Se connecter",
    signup: "Commencer",
    home: "roombir, accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    more: "Plus",
    skip: "Aller au contenu",
    primary: "Principal",
    megaFoot: "Tout sur une seule base de données.",
    megaLink: "Voir toute la plateforme",
    language: "Langue",
    featured: "L'assistant",
    featuredMore: "Ce que vous pouvez lui demander",
    links: {
      solutions: "Solutions",
      pricing: "Tarifs",
      about: "À propos",
    },
    groups: {
      operation: "L'exploitation",
      growth: "La croissance",
    },
    products: {
      ia: {
        title: "Roombir IA",
        desc: "Toute la gestion, en une conversation. Vous demandez, il le fait, avec vos autorisations.",
      },
      pms: {
        title: "PMS",
        desc: "Établissements, chambres, réservations et le moteur, sur un seul inventaire.",
      },
      informes: {
        title: "Rapports",
        desc: "Occupation, revenus, annulations, canaux et ce qui est mal saisi aujourd'hui.",
      },
      revenue: {
        title: "Revenue",
        desc: "Le prix de chaque date, avec la trace du pourquoi et votre objectif en vue.",
      },
      marketing: {
        title: "Marketing",
        desc: "Site web avec assistant, marque, fichiers, avis et LinkHub, reliés à vos réservations.",
      },
    },
    pmsParts: {
      propiedades: "Établissements",
      habitaciones: "Chambres",
      reservas: "Réservations",
      motor: "Moteur de réservation",
    },
  },

  plataformaCompleta: platFr.page,
  intelligence: intelFr,
  solucionesIndex: solFr.index,
  solucionesPaginas: solFr.pages,

  footer: {
    claim:
      "Réservations, chambres, moteur de réservation propre, site web, revenue et un assistant qui exécute, sur une seule base de données.",
    nav: "Pied de page",
    columns: {
      product: "Plateforme",
      solutions: "Solutions",
      company: "Entreprise",
      legal: "Mentions légales",
    },
    company: {
      about: "Qui nous sommes",
      compare: "Comparatifs",
      pricing: "Tarifs",
      contact: "Contact",
    },
    legal: {
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Cookies",
    },
    solutions: {
      hoteles: "Hôtels et apparthôtels",
      cabanas: "Chalets et appartements",
      hostels: "Auberges",
      glamping: "Glamping et villas",
      grupos: "Groupes et petites chaînes",
    },
    agentNote: "ce site aussi a son llms.txt",
    social: {
      instagram: "Roombir sur Instagram",
      linkedin: "Roombir sur LinkedIn",
      email: "Nous écrire",
    },
  },

  common: {
    startFree: "Commencer",
    seePlatform: "Voir la plateforme",
    seePricing: "Voir les tarifs",
    talkToUs: "Nous parler",
    bookDemo: "Demander une démo",
    writeUs: "Écrivez-nous",
    seeMore: "Voir plus",
    faqTitle: "Questions fréquentes",
    noCard: "Sans carte",
    noInstall: "Rien à installer",
    guidedSignup: "Inscription guidée en neuf étapes",
    inSpanish: "Cinq langues, fait en Argentine",
    video: {
      label: "Vidéo de présentation",
      play: "Lire",
      pause: "Pause",
      unmute: "Activer le son",
      mute: "Couper le son",
      close: "Fermer la vidéo",
      volume: "Volume",
      progress: "Progression de la vidéo",
    },
  },

  ticker: [
    "Une seule base de données pour tout",
    "Tape chart avec aperçu",
    "Revenue avec le pourquoi de chaque tarif",
    "llms.txt · lisible par une IA",
    "Un assistant qui exécute",
    "10 devises, taux figé au check-in",
    "E-mails clients sans configurer SMTP",
    "LinkHub avec QR",
    "38 visites guidées sur l'écran réel",
  ],

  vignettes: {
    tape: {
      label: "Réservations · Calendrier",
      tag: "14 nuits",
      units: {
        r101: "101 Double",
        r102: "102 Double",
        r103: "103 Supérieure",
        cabin: "Chalet Alerce",
        suite: "Suite Nord",
      },
      bars: {
        garcia: "García",
        perez: "Pérez",
        sosa: "Sosa · 4 pers.",
        paint: "Peinture",
        ruiz: "Ruiz",
        fresh: "Nouvelle · non attribuée",
        bianchi: "Bianchi",
        engine: "Moteur",
      },
      legend: {
        confirmed: "Confirmée",
        pending: "En attente",
        block: "Blocage",
        live: "Vient d'arriver",
      },
    },
    calendar: {
      label: "Moteur · Calendrier informatif",
      tag: "mars",
      dows: ["lu", "ma", "me", "je", "ve", "sa", "di"],
      left3: "3 restantes",
      left2: "2 restantes",
      left1: "1 restante",
      hint: "Minimum 2 nuits pour arriver le 14",
    },
    decision: {
      label: "Revenue · Décision",
      tag: "sam 21/03",
      subject: "Double Supérieure · tarif suggéré",
      keys: {
        occupancy: "occupation",
        pace: "pace",
        event: "événement",
        comp: "concurrence",
        rule: "règle",
        cap: "plafond",
      },
      values: {
        occupancy: "**78 %** · seuil de la règle 70 %",
        pace: "**+18 %** vs. votre propre historique (sam · mars · 15-30 jours)",
        event: "Fête des Vendanges · dans 3 jours · impact **72**",
        comp: "médiane du comp-set **101 400 $** · 4 sur 5 renseignés",
        rule: "**Occupation élevée + événement** → ajustement +15 %",
        cap: "maximum 120 000 $ · non appliqué",
      },
      accept: "Accepter et appliquer au moteur",
      reject: "Refuser",
    },
    agent: {
      label: "Roombir IA",
      tag: "réception",
      ask: "Déplace García en 203 à partir de jeudi et préviens-le par e-mail",
      trace: [
        { tool: "chercher_reservation", arg: "client : García", ok: "1 résultat" },
        { tool: "deplacer_reservation", arg: "aperçu", ok: "aucun conflit" },
        { tool: "attribuer_unite", arg: "203", ok: "ok" },
        { tool: "envoyer_email_client", arg: "changement de chambre", ok: "envoyé" },
      ],
      answer:
        "C'est fait. Déplacée en 203 du 19 au 22 et l'avis est parti. La 101 est libre ces trois nuits.",
      card: {
        guest: "Martina García",
        meta: ["203 · Double Supérieure", "19 → 22 mars", "2 pers.", "Confirmée"],
        see: "Voir la réservation",
        undo: "Annuler",
      },
    },
    spaces: {
      label: "Espace de travail",
      tag: "Hotel del Parque",
      tabs: ["Réception", "Étages", "Marketing", "Administration"],
      other: "autre espace",
      menu: [
        "Tableau du jour",
        "Toutes les réservations",
        "Nouvelle réservation",
        "État des chambres",
        "Tarifs et disponibilité",
        "Revenue · RMS",
        "Builder et sites",
        "LinkHub",
      ],
    },
    surface: {
      host: "cabanasdelalerce.com",
      intro: "Six chalets de montagne à Villa La Angostura, Neuquén.",
      unitsTitle: "## Unités",
      units: [
        "- Alerce · 4 pers. · 1 chambre · à partir de 78 USD",
        "- Coihue · 6 pers. · 2 chambres · à partir de 112 USD",
      ],
      bookTitle: "## Réserver",
      book: [
        "Disponibilité lisible : /availability.json",
        "Ce que le moteur accepte : /engine-capabilities.json",
        "Paiement : /reserver?in=&out=&pax=",
      ],
      policyTitle: "## Conditions",
      policy: "Arrivée 15h00 · départ 10h00 · minimum 2 nuits le week-end",
    },
    rules: {
      label: "Revenue · Scénarios",
      tag: "4 règles",
      rows: [
        { cond: "**occupation** ≥ 70 % · fenêtre 0-14 jours", action: "+8 %" },
        { cond: "**impact des événements** ≥ 60 · fenêtre 0-7 jours", action: "+15 %" },
        { cond: "**pickup 7j** ≤ 2 · fenêtre 0-21 jours", action: "−10 %" },
        { cond: "**tarif concurrent 1** ≤ base · fenêtre 0-30 jours", action: "plan B" },
      ],
      note:
        "Elles s'évaluent dans l'ordre et la dernière qui correspond l'emporte. L'essai à blanc montre ce que chacune ferait avant de l'activer.",
    },
    comp: {
      label: "Revenue · Concurrence",
      tag: "sam 21/03",
      mine: "Hotel del Parque · vous",
      sources: { own: "propre", roombir: "roombir", manual: "manuel", none: "sans donnée" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Découverte automatique par proximité et similarité. Les tarifs externes se saisissent à la main : nous n'inventons pas un chiffre que nous n'avons pas.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Réserver en ligne", "WhatsApp", "Photos des chalets", "Comment venir", "Avis · 4,8"],
    },
    /* État des chambres. `state` est une clé : available, occupied,
       cleaning, maintenance, blocked, checkout. */
    units: {
      label: "Chambres · État",
      tag: "étage 2",
      states: {
        available: "Disponible",
        occupied: "Occupée",
        cleaning: "Nettoyage",
        maintenance: "Maintenance",
        blocked: "Bloquée",
        checkout: "Départ en attente",
      },
      tiles: [
        { code: "201", cat: "Double", state: "occupied" },
        { code: "202", cat: "Double", state: "checkout" },
        { code: "203", cat: "Double Supérieure", state: "cleaning" },
        { code: "204", cat: "Double Supérieure", state: "available" },
        { code: "205", cat: "Triple", state: "maintenance" },
        { code: "206", cat: "Suite", state: "blocked" },
      ],
      history: "203 · départ en attente → nettoyage · Lucía · 11:42",
    },
    reports: {
      label: "Rapports",
      tag: "30 derniers jours",
      kpis: [
        { label: "Occupation", value: "72 %", delta: "+8 pts" },
        { label: "ADR", value: "96 600 $", delta: "+6 %" },
        { label: "RevPAR", value: "69 500 $", delta: "+18 %" },
        { label: "Annulation", value: "6 %", delta: "−2 pts" },
      ],
      chart: "Demande · 14 prochains jours",
      hygieneTitle: "État et gestion",
      hygiene: [
        "2 réservations en attente non confirmées depuis plus de 24 h",
        "1 arrivée du jour sans chambre attribuée",
        "1 départ du jour encore en check-in",
      ],
    },
    tourism: {
      label: "Roombir IA · État touristique",
      tag: "dossier",
      place: "Mendoza · mars",
      updated: "mis à jour il y a 2 h",
      rows: [
        { key: "jours fériés", value: "Carnaval **3 et 4** · week-end prolongé", src: "calendrier" },
        { key: "événements", value: "Fête des Vendanges · **7 mars** · à 4 km", src: "agenda" },
        { key: "météo", value: "maximale moyenne **29°** · 2 jours de pluie", src: "météo" },
        { key: "vols", value: "routes observées vers MDZ : **Santiago, São Paulo, Aeroparque**", src: "ADS-B" },
        {
          key: "change",
          value: "pour un Brésilien, Mendoza est **moins chère** qu'il y a un an",
          src: "taux réel",
        },
      ],
      missing: { key: "à pied", value: "impossible à lire · omis" },
      note: "Chaque donnée avec sa source. Ce qui n'a pas pu être lu est marqué comme manquant, jamais comme zéro.",
    },
    builder: {
      label: "Éditeur · Assistant",
      tag: "brouillon",
      file: "reference.png",
      ask: "Construis la page d'accueil comme sur cette capture, avec mes textes",
      trace: [
        { tool: "lire la capture", ok: "hero + moteur de recherche" },
        { tool: "ajouter une section · page d'accueil", ok: "ok" },
        { tool: "connecter le moteur de réservation", ok: "ok" },
      ],
      photo: "photo de remplissage · changer",
      title: "Cabañas del Alerce",
      sub: "Six chalets de montagne à Villa La Angostura",
      bar: ["Arrivée", "Départ", "2 adultes", "Rechercher"],
    },
    brand: {
      label: "Marque",
      tag: "Cabañas del Alerce",
      logo: "A",
      palette: "Palette · extraite du logo",
      rows: [
        { key: "ton", value: "Chaleureux et proche" },
        { key: "typographie", value: "Serif classique · suggérée par le ton" },
        { key: "phrase", value: "Six chalets entre le lac et la forêt" },
        { key: "proximité", value: "Lac Nahuel Huapi · 800 m" },
      ],
      used: "Utilisée par le site, le LinkHub, le moteur et les données pour les moteurs de recherche.",
    },
    /* `status` : replied ou pending. */
    reviews: {
      label: "Avis",
      tag: "4,8 · 126 avis",
      rows: [
        {
          source: "Google",
          stars: "★★★★★",
          author: "Paula R.",
          text: "Le chalet impeccable et la vue sur le lac, le meilleur du voyage.",
          status: "replied",
        },
        {
          source: "Booking",
          stars: "★★★★☆",
          author: "Marcos T.",
          text: "Tout était très joli. Le dernier tronçon du chemin est en gravier.",
          status: "pending",
        },
        {
          source: "Airbnb",
          stars: "★★★★★",
          author: "Julia M.",
          text: "On revient, c'est sûr. La Coihue est immense pour quatre.",
          status: "replied",
        },
      ],
      replied: "répondu",
      pending: "sans réponse",
    },
    org: {
      label: "Entreprise",
      tag: "2 établissements",
      company: "Grupo Andino",
      select: "Hotel del Parque ▾",
      props: [
        {
          name: "Hotel del Parque",
          meta: "Mendoza · ARS · UTC−3",
          spaces: ["Réception", "Nettoyage", "Revenue"],
        },
        {
          name: "Cabañas del Alerce",
          meta: "Villa La Angostura · ARS · UTC−3",
          spaces: ["Réception", "Marketing"],
        },
      ],
      membersTitle: "Qui voit quoi",
      members: [
        { name: "Martín Sosa", scope: "tous · Administration" },
        { name: "Lucía Paz", scope: "seulement Cabañas del Alerce · Réception" },
      ],
    },
    signals: {
      revenue: "revenue · sam 21/03",
      applied: "appliquée au moteur",
      agent: "Roombir ia",
      agentText: "J'ai déplacé García en 203 et envoyé l'avis par e-mail.",
      agentFoot: "4 outils · avec vos permissions",
    },
  },

  plans: {
    cta: "Commencer maintenant",
    ribbon: "Le plus choisi",
    free: "Gratuit",
    freeFor: "pendant {n} jours",
    perMonth: "par mois",
    perYear: "par an",
    oneTime: "paiement unique",
    trial: "{n} jours d'essai gratuit",
    upToProperty: "Jusqu'à {n} établissement",
    upToProperties: "Jusqu'à {n} établissements",
    upToUser: "Jusqu'à {n} utilisateur",
    upToUsers: "Jusqu'à {n} utilisateurs",
    noPropertyLimit: "Établissements illimités",
    noUserLimit: "Utilisateurs illimités",
    catalog: {
      plans: {
        "inicial": { tagline: "Pour mettre l'établissement en service et recevoir des réservations en ligne", description: "Le cœur du PMS : chambres, réservations et le moteur public. Gratuit pour une durée limitée pour tester la plateforme avec des données réelles." },
        "profesional": { tagline: "L'établissement complet : exploitation, marketing et présence web", description: "Ajoute site web, identité de marque, galeries, avis, LinkHub et rapports au cœur opérationnel. C'est la formule qui couvre la plupart des petits et moyens établissements." },
        "full-system": { tagline: "Tout roombir, revenue management et assistant IA compris", description: "Tous les produits de la plateforme : le cœur opérationnel, le marketing complet, Revenue (RMS), la présence en ligne et Roombir IA avec des crédits mensuels." },
      },
      products: {
        "habitaciones": { name: "Chambres", description: "Inventaire physique : catégories, unités, statuts opérationnels et plan d'occupation." },
        "reservas": { name: "Réservations", description: "Opération commerciale au quotidien : tableau du jour, liste et calendrier des réservations, saisie manuelle, tarifs, disponibilité et promotions." },
        "motor": { name: "Moteur de réservation", description: "La recherche et le paiement que voit le client, avec son studio de configuration. Surface publique : il ne s'ouvre pas depuis le menu du PMS." },
        "informes": { name: "Rapports", description: "Analyse opérationnelle de l'établissement : occupation, revenus, production par canal et clôtures." },
        "revenue": { name: "Revenue (RMS)", description: "Revenue management : pace, compset, événements de demande, règles et recommandations tarifaires." },
        "website": { name: "Sites web", description: "Créateur de sites et le moteur de rendu qui les publie : multilingue, domaine propre, SEO et GEO." },
        "marca": { name: "Identité de marque", description: "Logo, palette, ton, récit et coordonnées publiques de l'établissement. Alimente le site, le moteur et le LinkHub." },
        "galerias": { name: "Galeries", description: "Galeries multimédias de l'établissement et de ses chambres." },
        "resenas": { name: "Avis", description: "Avis des clients, réponses publiques et leur reflet sur le site et dans le moteur." },
        "linkhub": { name: "LinkHub", description: "Page link-in-bio de l'établissement pour les réseaux sociaux, avec son moteur de rendu public." },
        "social-hub": { name: "Présence en ligne", description: "Réseaux sociaux, Google Business Profile, fiches OTA et contrôle SEO/GEO. Actuellement masqué du menu du PMS." },
        "archivos": { name: "Bibliothèque de fichiers", description: "Stockage partagé des images et documents de l'établissement." },
        "staypass": { name: "StayPass", description: "Portail client : compte, réservations et profil. Surface publique, il ne s'ouvre pas depuis le PMS." },
      },
    },
    homeTitle: "Un seul système, un seul prix",
    homeSubtitle:
      "Tout ce qu'un hébergement doit avoir pour exploiter et vendre, sans cinq prestataires et sans commission par réservation.",
    empty:
      "Nous n'avons pas pu charger les tarifs pour le moment. Ils sont mensuels, par établissement, sans commission par réservation et sans engagement : [écrivez-nous](/contacto) et nous vous les envoyons avec les chiffres.",
    matrix: {
      caption: "Ce que comprend chaque formule roombir",
      product: "Produit",
      limits: "Limites",
      properties: "Établissements",
      users: "Utilisateurs",
      trialRow: "Essai",
      included: "Inclus",
      notIncluded: "Non inclus",
      freeDays: "{n} jours gratuits",
      days: "{n} jours",
      note:
        "Les prix et le contenu de chaque formule viennent du même catalogue que le système utilise pour facturer. Ce que vous voyez ici est ce qui s'applique à votre compte.",
    },
  },

  createAccount: {
    meta: {
      title: "Créer un compte · roombir",
      description:
        "Parlez-nous de votre hébergement et nous vous envoyons par e-mail l’accès pour créer votre compte.",
    },
    eyebrow: "Commencer",
    title: "Parlez-nous de votre *hébergement*.",
    lead: "Quatre informations et nous vous envoyons l’accès par e-mail. La mise en route prend un après-midi et c'est vous qui la faites.",
    checks: [
      "Inscription guidée en neuf étapes, **rien à installer**",
      "Nous migrons vos réservations et vos tarifs avec vous",
      "Votre propre moteur de réservation, sur votre site et votre LinkHub",
      "De vraies personnes qui répondent, dans votre langue",
    ],
    steps: [
      { title: "Vous remplissez le formulaire", text: "Quatre informations sur l’hébergement et votre e-mail." },
      { title: "L’accès arrive", text: "Un lien personnel, à usage unique, qui ouvre l’inscription." },
      { title: "Vous choisissez votre mot de passe", text: "Et vous suivez la mise en route guidée en neuf étapes." },
    ],
    form: {
      groupProperty: "Votre hébergement",
      groupContact: "Vos coordonnées",
      hotelName: "Nom de l’hébergement",
      hotelNamePlaceholder: "Hôtel Les Peupliers",
      lodgingType: "Type",
      lodgingTypes: {
        hotel: "Hôtel",
        apart_hotel: "Apparthôtel",
        hostel: "Auberge de jeunesse",
        cabins: "Chalets",
        inn_bnb: "Auberge ou chambre d’hôtes",
        apartment: "Appartements",
        house: "Maison",
        country_house: "Maison de campagne",
        resort: "Resort",
        lodge: "Lodge",
        glamping: "Glamping",
        camping: "Camping",
        villas: "Villas",
        other: "Autre",
      },
      units: "Chambres ou logements",
      unitsPlaceholder: "12",
      unitsHint: "Ceux que vous pouvez vendre aujourd’hui.",
      country: "Pays",
      countryCommon: "Les plus fréquents",
      countryAll: "Tous les pays",
      city: "Ville",
      cityPlaceholder: "Annecy",
      contactName: "Votre nom",
      contactNamePlaceholder: "Prénom et nom",
      email: "Votre e-mail",
      emailPlaceholder: "vous@votrehebergement.com",
      emailHint: "C’est là que part l’accès : utilisez une adresse que vous lisez.",
      phone: "Téléphone ou WhatsApp",
      phonePlaceholder: "+33 6 …",
      optional: "facultatif",
      choose: "Choisissez une option",
      honeypot: "Ne pas remplir",
      submit: "Recevoir mon accès",
      sending: "Envoi…",
      legal:
        "Nous utilisons vos données uniquement pour vous donner accès et vous accompagner. Vous pouvez demander leur suppression à tout moment. Plus dans la [politique de confidentialité](/legal/privacidad).",
      errors: {
        hotelName: "Indiquez le nom de votre hébergement.",
        lodgingType: "Choisissez le type d’hébergement.",
        units: "Indiquez combien de chambres ou de logements vous avez.",
        country: "Choisissez le pays.",
        city: "Indiquez la ville.",
        contactName: "Indiquez votre nom.",
        emailRequired: "Indiquez votre e-mail.",
        emailInvalid: "Cet e-mail ne semble pas valide.",
        disposable: "Utilisez une adresse permanente : l’accès y sera envoyé.",
        rate: "Trop de tentatives d’affilée. Réessayez dans quelques minutes.",
        mail: "Nous n’avons pas pu envoyer l’e-mail. Réessayez dans quelques minutes.",
        generic: "Nous n’avons pas pu l’envoyer. Écrivez-nous à hola@roombir.com.",
        network: "Connexion impossible. Vérifiez votre réseau et réessayez.",
      },
      done: {
        title: "Regardez votre boîte mail",
        text: "Nous avons envoyé l’accès à {email}. Le lien est personnel et ne sert qu’une fois.",
        textNoEmail: "Nous avons envoyé l’accès par e-mail. Le lien est personnel et ne sert qu’une fois.",
        notes: [
          "S’il n’arrive pas en quelques minutes, regardez dans les spams ou les promotions.",
          "Le lien expire dans 7 jours.",
          "Si vous vous êtes trompé d’adresse, remplissez à nouveau le formulaire.",
        ],
      },
    },
  },

  leadForm: {
    name: "Nom",
    namePlaceholder: "Comment vous appeler",
    email: "E-mail",
    emailPlaceholder: "vous@votrehebergement.com",
    phone: "Téléphone ou WhatsApp",
    phonePlaceholder: "+33 6 …",
    company: "Hébergement",
    companyPlaceholder: "Nom de l'hôtel, des chalets ou de l'apparthôtel",
    message: "Racontez-nous comment vous recevez les réservations aujourd'hui",
    messagePlaceholder:
      "Combien d'unités vous avez, si vous vendez sur les OTA, et ce que vous aimeriez arrêter de faire à la main.",
    optional: "facultatif",
    submit: "Envoyer",
    sending: "Envoi…",
    honeypot: "Ne pas remplir",
    errorGeneric: "Nous n'avons pas pu l'envoyer.",
    errorRate: "Trop d'envois à la suite.",
    errorTail: "Si cela continue d'échouer, écrivez-nous à hola@roombir.com.",
    legal:
      "Nous utilisons vos données uniquement pour vous contacter au sujet de roombir. Vous pouvez nous demander de les supprimer à tout moment. Plus d'informations dans la [politique de confidentialité](/legal/privacidad).",
    doneTitle: "C'est reçu.",
    doneText:
      "Nous vous écrivons dans les prochaines heures. Si vous préférez ne pas attendre, vous pouvez commencer l'inscription tout de suite : c'est guidé et c'est vous qui le faites.",
  },

  home: {
    hero: {
      l1a: "Sortez votre",
      l1b: "hébergement",
      l2: "du passé",
      pill: "rien\nà installer",
      l3a: "et faites-le",
      l3b: "grandir.",
      kicker: "Système de gestion hôtelière",
      lead: "Un logiciel pour hôtels, chalets, auberges et locations : réservations, moteur de réservation propre, site web, revenue management et un assistant IA, sur une seule base de données.",
    },

    works: {
      eyebrow: "Ce qui change",
      title: "Gérez tout votre hébergement *depuis un seul endroit*.",
      cardLabel: "Réservation mise à jour",
      items: [
        {
          title: "Plus aucune double réservation",
          text: "Votre site, votre LinkHub et la réception vendent le même inventaire. Une nuit d'une unité se vend une seule fois, et la disponibilité change à l'instant, sans rien synchroniser.",
        },
        {
          title: "Confiez l'exploitation à l'assistant",
          text: "Demandez-le en une phrase : déplacer une réservation, changer un tarif, prévenir le client. Il le fait avec vos permissions et vous montre ce qu'il a touché, avec l'annulation à portée de main.",
        },
        {
          title: "Encaissez le prix que chaque date mérite",
          text: "Revenue calcule le prix de chaque date avec le pourquoi sous les yeux (occupation, rythme, événements, concurrence) et l'applique seul au moteur.",
        },
      ],
    },
    // La habitación en 3D bajo la cinta: la cámara sigue al cursor.
    room: {
      eyebrow: "Conçu pour l’hébergement",
      title: "Chaque chambre, *à sa place*.",
      lead: "Réservations, ménage, tarifs et client de chaque unité vivent dans la même base de données : ce qui change sur un écran a déjà changé sur tous.",
      hint: "Bougez le curseur pour la parcourir",
      label: "Illustration 3D d’une chambre",
    },
    swap: {
      eyebrow: "Pourquoi ça existe",
      title: "Ce que vous *achetez séparément* aujourd'hui.",
      lead:
        "Un hébergement petit ou moyen ne devrait pas avoir besoin de cinq prestataires et d'un consultant pour exister numériquement. C'est la thèse de roombir, et c'est elle qui tranche chaque décision produit à l'intérieur.",
      headOld: "Ce que vous achetez à part aujourd'hui",
      headNew: "Dans roombir",
      rows: [
        { old: "PMS de réservations et chambres", now: "Domaines Réservations + Chambres" },
        { old: "Moteur de réservation", now: "Moteur public + Studio du Moteur" },
        { old: "Créateur de site web", now: "Builder + renderer avec nom de domaine" },
        { old: "RMS de revenue management", now: "Domaine Revenue" },
        { old: "Link-in-bio et présence numérique", now: "LinkHub + Présence en ligne" },
        { old: "Portail du client", now: "StayPass" },
        { old: "Assistant / automatisations", now: "Roombir IA" },
      ],
    },
    modules: {
      eyebrow: "Ce que c'est",
      title: "Un seul système, *aucun pont* entre ses parties.",
      lead:
        "Ce ne sont pas des intégrations qui se synchronisent la nuit : ce sont des vues différentes des mêmes données. Changer le prix d'une catégorie se voit dans le moteur immédiatement, sans rien publier.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Toute la gestion en une conversation. Il crée et déplace des réservations, change des tarifs et modifie votre site, et avant de se prononcer sur votre destination il lit un dossier avec quinze sources datées.",
        },
        pms: {
          title: "PMS",
          desc: "Établissements, chambres, réservations et le moteur que voit le client, sur un seul inventaire. Vous chargez une fois et vous exploitez dans le calendrier.",
        },
        informes: {
          title: "Rapports",
          desc: "Occupation, revenus, annulations et canaux, et ce qui est mal saisi aujourd'hui.",
        },
        revenue: {
          title: "Revenue",
          desc: "Le prix de chaque date avec la trace du pourquoi, et le tarif qui entre seul dans le moteur.",
        },
        marketing: {
          title: "Marketing",
          desc: "Site avec assistant, marque, photos, avis et LinkHub, le tout branché sur vos réservations.",
        },
      },
    },
    how: {
      eyebrow: "Comment ça marche",
      title: "De l'établissement à la réservation, *en quatre étapes*.",
      lead:
        "Vous chargez une fois et vous utilisez dans l'ordre d'une journée de réception. Il n'y a aucun module à connecter à un autre.",
      steps: [
        {
          title: "Vous chargez l'établissement et les chambres",
          text: "Type, adresse, devise et contact ; puis les catégories et les unités, en pool ou au nom propre. La disponibilité s'initialise toute seule.",
          href: "/producto/pms",
          link: "Voir le PMS",
        },
        {
          title: "Vous publiez votre site et votre lien avec le moteur dedans",
          text: "Le site et le LinkHub sortent de la même marque et lisent le même inventaire. Le client voit le prix de chaque jour et réserve seul.",
          href: "/producto/marketing",
          link: "Voir Marketing",
        },
        {
          title: "Les réservations entrent et vous les gérez",
          text: "Tableau du jour, liste et calendrier tape chart. Une nuit d'une unité se vend une seule fois, et l'e-mail au client part sans rien configurer.",
          href: "/producto/pms",
          link: "Voir Réservations",
        },
        {
          title: "Les chiffres et le prix, sans tableur",
          text: "Rapports sur les mêmes réservations, Revenue avec le pourquoi de chaque tarif et un assistant à qui vous demandez le reste en une phrase.",
          href: "/producto/ia",
          link: "Voir Roombir IA",
        },
      ],
    },
    spaces: {
      eyebrow: "Ce que personne d'autre n'a",
      title: "Chaque poste voit *son* système, pas le vôtre.",
      lead:
        "Réception, étages, marketing et administration travaillent sur les mêmes données, mais chaque espace de travail a son propre menu, son propre écran d'accueil et ses propres permissions. Personne n'apprend à ignorer la moitié d'une application.",
      items: [
        "Le menu se construit seul : un espace marketing **n'affiche pas** le domaine Réservations.",
        "L'écran d'accueil se recompose : la réception voit les arrivées, les étages voient les unités en nettoyage.",
        "Les permissions sont par application et par niveau : **exploiter**, **configurer** ou rien.",
        "La formation d'une nouvelle personne se construit avec ce que cet espace contient, et rien d'autre.",
      ],
    },
    sale: {
      eyebrow: "Modèle de vente",
      title: "Un hôtel et un chalet *ne se vendent pas pareil*.",
      lead:
        "Presque tous les systèmes choisissent un camp : soit hôtel urbain, soit location saisonnière. Ici le mode se définit par catégorie, et un assistant permet de migrer de l'un à l'autre même avec des réservations déjà en cours.",
      poolTitle: "Pool de catégorie",
      poolText:
        "La catégorie regroupe N chambres interchangeables. Le client achète « une Double Supérieure », pas la 203, et le moteur choisit l'unité à la confirmation — en minimisant les trous ou en équilibrant l'usure, comme vous préférez. Vous pouvez aussi la laisser non attribuée pour que la réception décide.",
      poolTag: "Hôtel urbain · auberge · apparthôtel",
      unitTitle: "Unité unique 1:1",
      unitText:
        "La catégorie enveloppe exactement une unité et se vend avec son nom propre. Le client réserve le chalet Alerce, avec ses photos, sa description et son prix, et aucune ambiguïté ne subsiste sur ce qu'il a obtenu.",
      unitTag: "Chalets · appartements · glamping · villas",
      unitNames: ["Alerce", "Coihue", "Ñire"],
    },
    engine: {
      eyebrow: "Moteur de réservation",
      title: "Un calendrier qui *vend*, pas qui demande des dates.",
      lead:
        "Le sélecteur de dates du moteur affiche, jour par jour et selon ce que vous activez, le prix à partir de, combien d'unités restent et quels jours sont fermés. Si vous préférez, un interrupteur l'éteint et il redevient un sélecteur de dates ordinaire.",
      items: [
        "Prix à partir de et unités restantes sur chaque jour du mois.",
        "Fermé à l'arrivée, fermé au départ et minimum de nuits, signalés là où on regarde.",
        "Sept blocs configurables du parcours de paiement, sans toucher au code ni republier le site.",
        "Le client confirme par e-mail ou c'est vous : les réservations en attente expirent toutes seules.",
      ],
      link: "Voir le moteur en entier",
    },
    agentic: {
      eyebrow: "Le pari",
      title: "Votre hébergement, *réservable par une IA*.",
      lead:
        "Les gens ne cherchent plus seulement sur Google : ils demandent à un modèle. Un hébergement qu'un agent ne peut pas lire n'apparaît pas dans cette réponse. Le moteur publie son inventaire dans des formats faits pour les machines, et l'éditeur GEO permet de déclarer ce qu'est votre établissement, pour qui, et ce qui le rend fiable.",
      items: [
        "**llms.txt** — qui vous êtes, ce que vous vendez et comment on réserve, en texte brut.",
        "**availability.json** — la disponibilité réelle, lisible par une machine.",
        "**engine-capabilities.json** — quelles opérations votre moteur accepte.",
        "**JSON-LD** dans les pages et éditeur GEO par page : intention, entités et signaux de confiance.",
      ],
      link: "Comment fonctionne la couche agentique",
    },
    revenue: {
      eyebrow: "Revenue · RMS",
      title: "Il vous donne le prix *et le pourquoi*.",
      lead:
        "Le RMS n'est pas une boîte noire qui recrache un chiffre. Chaque établissement et chaque date ont un document de décision : quelles données il a vues, quelles règles ont correspondu, si un plafond s'est appliqué et quel a été le résultat, ligne par ligne.",
      items: [
        "Pace contre **votre propre historique**, séparé par jour de semaine, mois et anticipation.",
        "S'il y a peu d'historique, l'écran le dit : il **ne vous vend pas** une confiance qui n'existe pas.",
        "Événements de demande ingérés tout seuls — jours fériés, salons, concerts — et validés par vous.",
        "En acceptant une recommandation, le tarif **entre dans le moteur**. La boucle se ferme sans copier-coller.",
      ],
      link: "Voir Revenue",
    },
    ia: {
      eyebrow: "Roombir IA",
      title: "Un assistant qui *exécute*, pas qui suggère.",
      lead:
        "Ce n'est pas un chat qui explique où cliquer. Il consulte la disponibilité, crée des réservations, déplace un séjour avec aperçu, ajuste des tarifs, valide des événements du RMS ou publie un site. Et il fait tout cela avec vos permissions, pas les siennes.",
      items: [
        "Tout ce qui se fait dans l'application peut lui être demandé en une phrase.",
        "On voit la transcription du tour : quel outil il a utilisé et ce qui est revenu.",
        "Il répond avec des cartes actionnables, pas seulement du texte.",
        "Trois couches de permissions : filtrage avant le tour, contexte dans le prompt et évaluation à chaque appel.",
      ],
      link: "Voir Roombir IA",
    },
    guarantees: {
      eyebrow: "Trois choses auxquelles vous n'aurez pas à penser",
      title: "Les garanties *structurelles*.",
      items: [
        {
          key: "unité + date",
          title: "Une nuit ne peut pas être vendue deux fois",
          text: "Chaque nuit de chaque chambre est un verrou unique dans la base de données, pas une validation que deux personnes réservant en même temps peuvent contourner. Les blocages de maintenance utilisent le même verrou : ils retirent de l'inventaire réel et disparaissent du moteur.",
        },
        {
          key: "base · encaissement · affichage",
          title: "Le montant encaissé ne bouge plus après",
          text: "Les prix vivent dans une devise de base, vous encaissez dans une autre, et le client peut regarder dans une troisième. La conversion reste vivante jusqu'à l'arrivée et s'y fige. Pour le peso argentin, vous choisissez le cours : blue, MEP, CCL ou officiel.",
        },
        {
          key: "reservations@roombir.com",
          title: "Vous ne configurez pas de serveur de messagerie",
          text: "Tous les e-mails au client — confirmation, jeton, avis de changement — partent du domaine de Roombir avec votre boîte en répondre-à. C'est l'une des frictions classiques de la mise en route d'un PMS, supprimée exprès.",
        },
      ],
    },
    stats: {
      eyebrow: "La taille réelle",
      title: "Ce ne sont pas des promesses : *c'est déjà construit*.",
      lead:
        "Roombir est en pilote de marché, nous n'allons donc pas encore vous montrer un compteur d'hôtels gonflé. Ce que nous pouvons montrer, c'est ce qu'il y a dans le produit aujourd'hui.",
      items: [
        { value: "21", label: "applications activables par espace de travail" },
        { value: "38", label: "visites guidées sur l'écran réel" },
        { value: "10", label: "devises, avec blue, MEP, CCL ou officiel pour l'ARS" },
        { value: "5", label: "langues de la plateforme" },
        { value: "1", label: "seule base de données pour tout le système" },
      ],
    },
    marketing: {
      eyebrow: "Marketing",
      title: "Votre site, votre marque et votre lien, *servis par le même système*.",
      lead:
        "Le créateur visuel assemble le site avec des composants qui se branchent seuls à vos données : le moteur intégré, les cartes de chambre, les galeries, les promotions et les avis. Et le LinkHub est la page qui va dans la bio Instagram, avec son QR et ses statistiques.",
      items: [
        "Nom de domaine et multilingue, avec URL, couverture et aperçu social propres par langue.",
        "Une identité de marque unique — logo, palette extraite du logo, ton, récit — qui alimente le site, le moteur et le LinkHub.",
        "Dix types de blocs dans le LinkHub, avec programmation par date et statistiques de visites et de clics.",
        "Avis importables par CSV, avec réponse de l'hôtel et reflet sur le site.",
      ],
      link: "Voir site web et marque",
    },
    onboarding: {
      eyebrow: "Inscription guidée",
      title: "Vous vous inscrivez *tout seul*, en un après-midi.",
      lead:
        "Neuf étapes en trois phases, avec la progression enregistrée sur le serveur : vous pouvez abandonner à mi-chemin et reprendre depuis un autre appareil. Sur le bureau, une carte vous ramène là où vous en étiez.",
      steps: [
        {
          num: "Phase 1 · étapes 0–4",
          title: "Configuration",
          text: "Votre société, votre établissement avec adresse sur la carte, fuseau horaire et devise, votre identité de marque — la palette est extraite de votre logo — et votre façon d'exploiter. C'est de cette dernière étape que sortent les espaces de travail et les applications initiales.",
        },
        {
          num: "Phase 2 · étapes 5–7",
          title: "Chargement des données",
          text: "Types de chambre et unités, avec création en masse pour ne pas saisir vingt fois la même chose. Ensuite les premières promotions et une revue du moteur. À la fin de la phase, la disponibilité s'initialise toute seule.",
        },
        {
          num: "Phase 3 · étape 8",
          title: "Visites guidées",
          text: "Chaque application qui vous revient a une visite guidée dessinée par-dessus l'écran réel, qui met en évidence l'élément dont elle parle. Ensuite, chaque nouvelle personne de l'équipe a sa formation selon son espace.",
        },
      ],
    },
    commitments: {
      eyebrow: "Ce que les autres ne disent pas",
      title: "Trois choses que vous pouvez *vérifier* avant de parler à qui que ce soit.",
      lead:
        "Dans cette catégorie, ce qui manque se révèle la troisième semaine et la démo arrive avant le produit. Ici c'est l'inverse : chacune de ces trois lignes a un endroit où elle se vérifie.",
      verify: "Vérifier",
      items: [
        {
          key: "traza",
          title: "Chaque action de l’IA, sous vos yeux",
          text: "L’assistant agit avec vos permissions et laisse la transcription de chaque tour : quel outil il a utilisé, avec quelles données et ce qui a changé, **avec l’annulation à portée de main**.",
          href: "/producto/ia",
        },
        {
          key: "ia",
          title: "Une IA peut lire ce site",
          text: "Il a son propre `llms.txt` avec les mêmes chiffres que cette page. Nous le pratiquons avant de vous le demander.",
          href: "/llms.txt",
        },
        {
          key: "alta",
          title: "Inscription guidée, rien à installer",
          text: "Vous vous inscrivez seul, en neuf étapes enregistrées sur le serveur, et vous entrez par le navigateur. **Pas d'appel préalable** ni de mise en route à attendre.",
          href: "/crear-cuenta",
        },
      ],
    },
    day: {
      eyebrow: "Un mardi ordinaire",
      title: "La même journée, *avec et sans* roombir.",
      lead:
        "Ce n'est pas une promesse de réservations en plus : c'est une journée de réception dans un hébergement de douze unités. À gauche, ce qu'on nous raconte au premier appel ; à droite, ce que fait le système à chacun de ces moments.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "08:10",
          old: "Trois WhatsApp qui demandent la disponibilité du week-end. Vous ouvrez le tableur pour répondre un par un.",
          now: "Les trois ont déjà regardé le calendrier du moteur : prix et unités restantes, jour par jour. Deux ont réservé seuls.",
        },
        {
          time: "09:30",
          old: "Un client a versé un acompte en pesos il y a un mois. Il faut recalculer à la main ce qui reste, au dollar du jour.",
          now: "La réservation garde la conversion et la fige au check-in. Le solde n'a pas bougé.",
        },
        {
          time: "11:00",
          old: "García arrive et vous ne savez pas dans quelle chambre il va. Le housekeeping non plus.",
          now: "La réception demande à l'assistant de le passer en 203 et de le prévenir par e-mail. Le housekeeping le voit sur son tableau sans que personne n'écrive.",
        },
        {
          time: "14:20",
          old: "Vous découvrez que le chalet Alerce a été vendu deux fois pour samedi.",
          now: "Impossible : chaque nuit de chaque unité est un verrou unique dans la base de données. La deuxième réservation n'est jamais entrée.",
        },
        {
          time: "17:00",
          old: "Celui qui a fait le site ne répond pas et le prix de la suite est toujours périmé en ligne.",
          now: "Vous avez changé le prix dans Tarifs et il est déjà dans le moteur, sur le site et dans le LinkHub. Vous n'avez rien publié.",
        },
        {
          time: "19:45",
          old: "Vous vous demandez s'il faut augmenter samedi. Vous décidez à l'instinct.",
          now: "Revenue affiche +15 % avec la raison écrite : occupation, pace et un événement dans trois jours. Vous acceptez et ça part au moteur.",
        },
      ],
    },
    compare: {
      eyebrow: "Si vous comparez",
      title: "Roombir *face à* ceux que vous connaissez déjà.",
      lead:
        "Des comparatifs écrits pour servir même si vous ne nous choisissez pas : ce que chacun fait mieux, ce que nous ne faisons pas encore et dans quel cas l'autre est le bon choix. Vérifiés sur leur site public, avec une date.",
      link: "Voir tous les comparatifs",
    },
    faq: [
      {
        q: "Est-ce que ça marche pour des chalets et des appartements, ou seulement pour les hôtels ?",
        a: "Pour les deux, et pas avec la même astuce. Une catégorie peut se vendre en **pool** — dix doubles interchangeables, le client achète « une double » — ou en **unité unique 1:1**, où la catégorie enveloppe une seule unité avec son nom propre. Le choix se fait par catégorie, pas par système, donc un complexe avec six chalets et deux chambres standard cohabite sans rien forcer.",
      },
      {
        q: "Ai-je besoin d'un channel manager pour utiliser Roombir ?",
        a: "Pas pour exploiter, mais disons-le franchement : **Roombir n'a pas encore de channel manager**. Si vous vendez sur Booking ou Expedia, cette disponibilité se réconcilie aujourd'hui à la main. Le système est pensé pour que la réservation directe — votre site, votre LinkHub, votre moteur — cesse de se perdre dans une conversation, d'où vient l'essentiel du revenu que vous ne contrôlez pas aujourd'hui.",
      },
      {
        q: "Comment j'encaisse les réservations ?",
        a: "À l'arrivée, en présentiel. **Il n'y a pas encore de passerelle de paiement intégrée.** Ce qu'il y a, c'est du multidevise pour de vrai : vous stockez les prix dans une devise de base, vous encaissez dans une autre, et la conversion reste vivante jusqu'à l'arrivée puis se fige pour que le montant encaissé ne change plus.",
      },
      {
        q: "Dois-je installer ou configurer quelque chose ?",
        a: "On entre par le navigateur. L'inscription, ce sont neuf étapes guidées enregistrées sur le serveur — vous pouvez l'abandonner à mi-chemin et la continuer depuis le téléphone — et il n'y a pas de serveur de messagerie à configurer : **tous les e-mails au client partent du domaine roombir** avec votre boîte en répondre-à.",
      },
      {
        q: "Puis-je utiliser mon propre nom de domaine ?",
        a: "Oui. Chaque site publié accepte son propre nom d'hôte, et chaque variante de langue peut avoir le sien. Le LinkHub a aussi son adresse publique, avec un QR code à imprimer.",
      },
      {
        q: "L'IA peut-elle faire n'importe quoi dans mon système ?",
        a: "Non, et c'est voulu. L'assistant opère **en empruntant votre identité réelle** avec une permission de courte durée réémise à chaque appel. Avant le tour, on lui retire les outils que votre utilisateur ne peut pas utiliser, et chaque opération est réévaluée contre la politique du service. Si un accès vous est révoqué en cours de conversation, l'action suivante échoue et l'assistant vous explique pourquoi.",
      },
      {
        q: "Quelle différence avec Cloudbeds ou Little Hotelier ?",
        a: "Sur trois points vérifiables : le revenue management et l’assistant IA font partie du système, ce ne sont pas des modules ajoutés ; l’assistant exécute au lieu de suggérer, et laisse la transcription de chaque tour ; et tout (réservations, moteur, site, revenue) lit la même base de données, sans synchronisation.",
      },
    ],
    cta: {
      title: "Mettez-le en route *cette semaine*.",
      lead:
        "L'inscription est guidée et c'est vous qui la faites. Si vous préférez qu'on vous accompagne sur le chargement des chambres — l'étape qui coûte le plus —, on le fait sur un appel court.",
      steps: [
        "Vous vous inscrivez et chargez l'établissement.",
        "On charge les chambres ensemble si vous voulez.",
        "Vous publiez votre site et votre lien de réservation.",
      ],
    },
  },

  producto: {
    meta: {
      title: "La plateforme",
      description:
        "Roombir IA, le PMS (établissements, chambres, réservations et moteur), rapports, revenue et marketing, sur une seule base de données. Ce que fait chaque partie et comment elles se connectent.",
    },
    hero: {
      eyebrow: "La plateforme",
      title: "Chaque partie du système, *sur les mêmes données*.",
      lead:
        "Toute l'équipe entre par le même bureau. Chambres, réservations et revenue s'affichent intégrés à l'intérieur, avec le contexte et le thème hérités : pour celui qui travaille, c'est une seule application — et pour les données, un seul endroit.",
    },
    desk: {
      eyebrow: "Le bureau",
      title: "Une seule porte, *et à l'intérieur, à chacun le sien*.",
      lead:
        "Le PMS est le chrome : la navigation, le sélecteur de société, d'établissement et d'espace de travail, la recherche globale et le centre de notifications. Les applications de chambres, réservations et revenue vivent à l'intérieur.",
      items: [
        "**Recherche globale** avec Ctrl/Cmd + K : réservations par code ou client, établissements, catégories, unités et vues du système. Elle est algorithmique, pas générative — elle trouve ou elle ne trouve pas.",
        "**Tableau de bord adaptatif** : 30 widgets se disputent trois places selon l'espace actif, et seules les données de ceux qui vont s'afficher sont demandées.",
        "**Notifications en temps réel** qui mènent au bon détail ; si la réservation appartient à un autre établissement, le système en change avant de l'ouvrir.",
        "**Thème clair, sombre ou système**, avec couleur d'accent, propagé aux applications intégrées.",
      ],
    },
    catalog: {
      eyebrow: "Le catalogue",
      title: "21 applications qui *s'allument et s'éteignent*.",
      lead:
        "Une application s'active par espace de travail et avec un niveau : exploiter (le quotidien), configurer (change aussi les réglages) ou rien. L'espace d'administration voit tout le catalogue, y compris les applications ajoutées plus tard.",
      hubs: [
        {
          hub: "Réservations",
          apps: [
            "Tableau du jour",
            "Toutes les réservations",
            "Saisie manuelle",
            "Tarifs",
            "Disponibilité",
            "Promotions",
            "Réglages du moteur",
          ],
        },
        {
          hub: "Chambres",
          apps: ["État des chambres", "Plan d'occupation", "Gestion des catégories"],
        },
        {
          hub: "Marketing",
          apps: ["Builder", "Sites", "Galeries", "Avis", "Marque", "LinkHub", "Présence en ligne"],
        },
        { hub: "Analyse", apps: ["Rapports"] },
        { hub: "Revenue", apps: ["Revenue · RMS"] },
        { hub: "Assets", apps: ["Bibliothèque de fichiers"] },
        { hub: "Admin", apps: ["Établissements"] },
      ],
    },
    modules: {
      eyebrow: "Module par module",
      title: "Ce que fait *chaque partie*.",
      lead:
        "Chacun a sa page avec le détail complet. Tous lisent et écrivent les mêmes données : pas de synchronisation nocturne ni d'import de quoi que ce soit.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Un assistant qui pilote tout le système en une conversation : réservations, tarifs, chambres, le site, le revenue. Il part d'un dossier sur votre destination avec quinze sources datées et travaille avec vos permissions.",
        },
        pms: {
          title: "PMS",
          desc: "Des établissements avec leur devise et leur équipe ; des catégories vendues en pool ou au nom propre ; tableau du jour, liste et calendrier tape chart ; et le moteur où le client voit le prix de chaque jour et réserve seul, en dix devises.",
        },
        informes: {
          title: "Rapports",
          desc: "Occupation, tarif moyen, revenus, annulations et canaux sur les mêmes réservations que vous gérez, et une section avec ce qui est mal saisi aujourd'hui.",
        },
        revenue: {
          title: "Revenue",
          desc: "Un document de décision par date avec la trace complète, pace contre votre propre historique, concurrence, événements de votre destination et le tarif qui entre dans le moteur quand vous l'acceptez.",
        },
        marketing: {
          title: "Marketing",
          desc: "L'éditeur web avec assistant, la marque, la bibliothèque de photos, les galeries, les avis, le LinkHub et la couche qui rend votre hébergement lisible par une IA.",
        },
      },
    },
    ia: {
      eyebrow: "La couche qui les relie",
      title: "L'assistant voit *tout le système*, pas un module.",
      lead:
        "Parce que les données ne font qu'une, l'agent fait en une phrase ce qui, dans un autre stack, prend trois onglets et deux exports : regarder le pace, ajuster un tarif et publier la promo sur le site.",
      items: [
        "Il opère réservations, tarifs, disponibilité, chambres, établissements, revenue, marketing, fichiers, société et système.",
        "Blocs de réponse riches : cartes de réservation et de revenue avec des boutons qui exécutent, soumis à la même vérification de permissions.",
        "Historique des sessions filtré par l'espace de travail actif.",
      ],
      link: "Voir Roombir IA",
    },
    stats: [
      { value: "21", label: "applications activables" },
      { value: "30", label: "widgets du tableau adaptatif" },
      { value: "38", label: "visites guidées" },
    ],
    ask: "Vous cherchiez quelque chose de précis ?",
    askLink: "Demandez-nous",
    cta: {
      title: "Venez *regarder à l'intérieur*.",
      lead:
        "L'inscription est guidée. Si vous préférez qu'on vous le montre avant, demandez une démo et on le parcourt avec vos données.",
      steps: [
        "Vous créez la société et l'établissement.",
        "Vous chargez chambres et unités.",
        "Le moteur et le site sont prêts à publier.",
      ],
    },
  },

  pms: {
    meta: {
      title: "PMS",
      description:
        "Établissements, chambres et réservations dans un seul produit : vous chargez l’établissement et les chambres une fois, les réservations arrivent par le moteur ou à la main, et vous les gérez depuis le panneau du jour et le calendrier.",
    },
    hero: {
      eyebrow: "PMS · Établissements, chambres et réservations",
      title: "Votre hébergement entier, *au même endroit*.",
      lead:
        "Vous chargez l'établissement et les chambres une fois. Les réservations entrent par votre moteur ou vous les saisissez, et vous les gérez dans le tableau du jour et le calendrier. C'est une seule base de données : ce qui change sur un écran a déjà changé sur tous.",
    },
    propiedades: {
      eyebrow: "01 · Établissements",
      title: "Plusieurs établissements, *un seul compte*.",
      lead:
        "Un hôtel à Mendoza et six chalets à Villa La Angostura, avec le même utilisateur. Chaque établissement avec sa devise, son fuseau horaire et son équipe ; chaque personne ne voit que ceux qui la concernent.",
      items: [
        "**Accès par établissement et par poste** : qui tient la réception des chalets entre dans les chalets, avec le menu de réception ; qui administre voit tout.",
        "**Espaces de travail par poste** — réception, nettoyage, marketing, revenue —, chacun avec son menu et son écran d'accueil.",
        "**Tout le reste dépend de l'établissement** : chambres, réservations, marque, site web, LinkHub et avis se chargent une fois. Vous changez le téléphone et ça change partout.",
        "**Le deuxième établissement copie la structure du premier**, et on passe de l'un à l'autre avec un sélecteur en haut, sans sortir ni revenir.",
      ],
    },
    habitaciones: {
      eyebrow: "02 · Chambres",
      title: "Par catégorie ou par unité, *comme vous vendez*.",
      lead:
        "Un hôtel vend une double supérieure et attribue la 203 après. Un complexe vend le chalet Alerce, avec ses photos et son prix. Roombir fait les deux, et les deux à la fois dans le même établissement.",
      items: [
        "**Pool de catégorie** : le client achète « une double supérieure » et le système attribue la chambre, en minimisant les trous ou en répartissant l'usure. Ou il la laisse non attribuée pour que la réception décide.",
        "**Unité au nom propre** : la catégorie enveloppe une seule unité. Le client réserve le chalet Alerce, avec ses photos et son prix.",
        "**Six états avec historique** — disponible, occupée, nettoyage, maintenance, bloquée et départ en attente —, tableau par étage et plan d'occupation.",
        "**Création en masse en deux étapes** et blocages par demi-journée, qui utilisent le même verrou qu'une réservation.",
      ],
    },
    reservas: {
      eyebrow: "03 · Réservations",
      title: "Chaque moment du service, *son écran*.",
      lead:
        "Huit vues sur la même donnée : déplacer une réservation dans le calendrier change la chambre, libère la nuit dans le moteur et apparaît dans le rapport.",
      items: [
        {
          title: "Tableau du jour",
          desc: "Arrivées et départs du jour, avec des cartes actionnables. C'est l'écran avec lequel la réception ouvre le service.",
        },
        {
          title: "Toutes les réservations",
          desc: "La liste avec filtres et un panneau latéral qui s'ouvre sans quitter la page : résumé, activité et notes. De là, on attribue une chambre et on change l'état.",
        },
        {
          title: "Calendrier",
          desc: "Chambres par jour. Vous glissez une réservation ou l'étirez, et avant de lâcher vous voyez si elle entre en conflit avec une autre et ce qui arrive au prix.",
        },
        {
          title: "Nouvelle réservation",
          desc: "Celle qui est arrivée par téléphone ou par WhatsApp : client, dates, occupation par âge, canal d'origine, promotions et notes.",
        },
        {
          title: "Tarifs",
          desc: "Prix de base par catégorie et plans tarifaires avec validité, devise et séjour minimum.",
        },
        {
          title: "Disponibilité",
          desc: "Feu tricolore par jour — libre, partiel, complet, fermé — et restrictions : fermé à l'arrivée ou au départ, séjour minimum et maximum.",
        },
        {
          title: "Promotions",
          desc: "Automatiques ou avec code, en pourcentage, montant fixe ou prix par nuit, avec leur présentation prête pour votre site.",
        },
        {
          title: "Configuration",
          desc: "Devise, confirmation, règles de séjour, horaires et comment les chambres sont attribuées. Plus le Studio du Moteur pour les textes et les couleurs.",
        },
      ],
    },
    motor: {
      eyebrow: "PMS · Moteur de réservation",
      title: "Un calendrier qui *répond avant de demander*.",
      lead:
        "Le sélecteur de dates habituel demande deux jours et c'est tout. Celui du moteur affiche, jour par jour et selon ce que vous activez, ce que la personne allait vous demander par WhatsApp avant de réserver.",
      items: [
        "**Prix à partir de** sur chaque jour, calculé avec les mêmes tarifs que facture le moteur.",
        "**Unités restantes** : votre inventaire réel, pas un compteur inventé.",
        "**Jours fermés**, fermés à l'arrivée ou au départ, et le **minimum de nuits** au choix de l'arrivée.",
        "**Le client confirme par e-mail ou vous confirmez** : les réservations en attente expirent toutes seules, et l'e-mail part du domaine de roombir sans rien configurer.",
      ],
    },
    prices: {
      eyebrow: "Chaque tarif, individuel",
      title: "Le prix de chaque nuit, *avec son pourquoi*.",
      lead:
        "Quand le moteur doit dire combien coûte une nuit, il résout une chaîne fixe, toujours dans le même ordre. Savoir de quel échelon sort chaque prix est ce qui vous permet de faire confiance au système sans l'auditer chaque matin.",
      items: [
        "**D'abord, ce que vous avez accepté dans Revenue** : s'il y a un tarif recommandé et accepté pour cette date, c'est lui qui commande.",
        "**Ensuite, le plan tarifaire** en vigueur pour cette catégorie et cette date, avec son séjour minimum.",
        "**S'il n'y a pas de plan, le prix de base** de la catégorie. Chaque chalet peut avoir le sien.",
        "**Par-dessus tout, les promotions** : remise ou majoration — une promo peut aussi augmenter le prix en haute saison —, automatiques ou avec code.",
      ],
    },
    currency: {
      eyebrow: "Dix devises",
      title: "Ce qu'a vu le client *ne bouge plus*.",
      lead:
        "Le client regarde le prix dans sa devise et vous encaissez dans la vôtre. La réservation reste toujours dans votre devise de base et la conversion se fige au check-in : le montant que vous encaissez ne change plus après.",
      items: [
        "Dollar, peso argentin, real, peso chilien, peso colombien, peso mexicain, sol, peso uruguayen, euro et livre sterling.",
        "Pour les pesos argentins, vous choisissez le cours : officiel, blue, MEP ou CCL.",
        "Les taux se mettent à jour toutes les trois heures et sont marqués comme anciens si la source n'a pas répondu.",
        "Les rapports additionnent directement, parce que tout reste dans votre devise de base.",
      ],
    },
    where: {
      eyebrow: "Où va le moteur",
      title: "Sur votre site, votre bio *et pour une IA*.",
      items: [
        {
          title: "Votre site",
          desc: "Une section de l'éditeur web qui se connecte seule à votre inventaire.",
        },
        {
          title: "Votre LinkHub",
          desc: "Le lien de la bio Instagram ouvre le même moteur, identique à celui de votre site.",
        },
        {
          title: "Un lien direct",
          desc: "Une page propre avec l'adresse de votre hébergement, à envoyer par WhatsApp si vous n'avez pas encore de site.",
        },
        {
          title: "Agents IA",
          desc: "Avec la couche agentique activée, un assistant externe peut lire votre disponibilité et compléter une réservation. [Comment ça marche](/producto/marketing#agentes).",
        },
      ],
    },
    stats: [
      { value: "8", label: "vues sur la même donnée pour gérer les réservations" },
      { value: "10", label: "devises, avec blue, MEP, CCL ou officiel pour l'ARS" },
      { value: "6", label: "états de chambre, avec historique" },
      { value: "1", label: "verrou par unité et par nuit dans la base de données" },
    ],
    faq: [
      {
        q: "Comment j'encaisse les réservations ?",
        a: "Au check-in, en personne. **Il n'y a pas encore de passerelle de paiement intégrée.** Ce qu'il y a, c'est un vrai multidevise : le client regarde dans sa devise, vous encaissez dans la vôtre et la conversion se fige au check-in.",
      },
      {
        q: "Est-ce connecté à Booking ou Expedia ?",
        a: "Pas encore : **Roombir n'a pas de channel manager**. Si vous vendez sur des OTA, cette disponibilité se concilie à la main aujourd'hui. Le système est pensé pour que la réservation directe — votre site, votre LinkHub, votre moteur — cesse de se perdre dans une messagerie.",
      },
      {
        q: "Que se passe-t-il si deux personnes réservent la même nuit en même temps ?",
        a: "L'une des deux échoue. Chaque nuit de chaque unité est un **verrou unique dans la base de données** — la clé est l'unité plus la date —, donc la seconde écriture n'entre pas. Ce n'est pas une validation dans le code qu'on peut contourner : c'est la base qui l'empêche.",
      },
      {
        q: "J'ai des chalets et des chambres. Puis-je avoir les deux ?",
        a: "Oui, dans le même établissement. Les chalets vont en unité au nom propre et les chambres en pool, et ils cohabitent dans le même calendrier et le même moteur.",
      },
      {
        q: "Qui confirme la réservation ?",
        a: "Vous choisissez. Dans un mode, la réservation naît en attente et **le client la confirme** avec un lien reçu par e-mail. Dans l'autre, elle reste en attente jusqu'à ce que **la réception l'accepte**. Dans les deux cas, les réservations en attente expirent toutes seules.",
      },
    ],
    cta: {
      title: "Chargez l'établissement et les chambres ; *le moteur est prêt*.",
      lead:
        "L'inscription est guidée et c'est vous qui la faites. Si vous préférez qu'on vous accompagne pour charger les chambres — l'étape qui coûte le plus —, on le fait sur un court appel.",
      steps: [
        "Vous créez l'établissement et chargez catégories et unités.",
        "Vous configurez le moteur dans le Studio.",
        "Vous partagez le lien et cessez de perdre des demandes dans la messagerie.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Roombir IA",
      description:
        "Un assistant qui pilote votre hébergement en une conversation : il crée et déplace des réservations, changent des tarifs et modifient le site, avec vos permissions. Avant de se prononcer sur votre destination, il lit un dossier avec quinze sources datées.",
    },
    hero: {
      eyebrow: "Roombir IA",
      title: "Tout votre hébergement, *en une conversation*.",
      lead:
        "Roombir IA pilote tout le système : il crée et déplace des réservations, change des tarifs, bloque des unités et modifie votre site. Avant de se prononcer sur votre destination, il lit un dossier construit avec quinze sources datées. Et il travaille avec vos permissions, pas les siennes.",
    },
    ask: {
      eyebrow: "Ce que vous pouvez lui demander",
      title: "Demandez-le normalement, *et c'est fait*.",
      lead:
        "Pas besoin d'apprendre des commandes ni de savoir sur quel écran se trouve chaque chose. Ce sont des demandes d'une journée normale, et ce qu'il fait avec chacune.",
      items: [
        {
          area: "Réservations",
          ask: "Déplace García de la 203 à la 204 à partir de jeudi",
          does: "Il cherche la réservation, vérifie que la 204 est libre ces nuits-là et la déplace. Il vous renvoie la carte avec le changement.",
        },
        {
          area: "Tarifs",
          ask: "Augmente de 10 % la double supérieure les samedis d'octobre",
          does: "Il vous dit quelles dates ça touche et l'applique au plan tarifaire quand vous confirmez.",
        },
        {
          area: "Chambres",
          ask: "Bloque le chalet Alerce mardi après-midi pour maintenance",
          does: "Il crée le blocage à partir de l'après-midi : la nuit de mardi sort du moteur et la matinée reste vendable.",
        },
        {
          area: "Site",
          ask: "Change le titre de la page d'accueil et publie-le",
          does: "Il modifie le texte dans le brouillon de votre site et le publie. Si vous ne lui demandez pas de publier, ça reste en brouillon.",
        },
        {
          area: "Destination",
          ask: "Qu'est-ce qui me convient de faire pour les Vendanges ?",
          does: "Il lit le dossier de Mendoza — date, distance, jours fériés proches, routes aériennes — et votre pace pour ces nuits-là, et vous propose quoi faire du tarif et du séjour minimum.",
        },
        {
          area: "Rapports",
          ask: "Quel canal m'annule le plus ?",
          does: "Il lit le rapport des canaux et répond avec le chiffre et le canal. S'il y a moins de trois réservations, il ne l'affirme pas.",
        },
      ],
    },
    dossier: {
      eyebrow: "État touristique",
      title: "Il sait où en est *votre destination*.",
      lead:
        "Avant de se prononcer sur votre zone, Roombir IA construit un dossier avec quinze sources publiques, chaque donnée avec sa date : ce qui se passe ce mois-ci et ce qui vient. Le modèle ne part pas chercher : il lit ce que le système a déjà vérifié.",
      items: [
        "**Jours fériés, week-ends prolongés et vacances scolaires**, les vôtres et ceux des pays qui vous visitent.",
        "**Événements dans votre rayon** : sport, culture, congrès et salons, filtrés par distance et non par pays.",
        "**Quels vols arrivent dans votre zone et d'où** : les routes observées atterrissant dans les aéroports proches.",
        "**Météo, taux de change de vos marchés et alertes** de sécurité ou de risques naturels.",
      ],
    },
    compare: {
      eyebrow: "La différence",
      title: "Un chat générique cherche ; *lui part d'un dossier*.",
      lead:
        "Un chat d'IA généraliste est très bon pour rédiger, et il ne voit pas votre système : il cherche sur le web, rassemble ce qu'il trouve et vous le résume. Roombir IA part de vos données et de sources fixes. Si vous lui demandez de chercher aussi sur le web, il le fait aussi.",
      headCriterion: "Ce qui compte",
      headUs: "Roombir IA",
      headThem: "Un chat d'IA généraliste",
      rows: [
        {
          label: "Voit vos réservations, tarifs et chambres",
          us: "Oui : les mêmes que vous gérez",
          usTone: "ok",
          them: "Non, sauf si vous lui collez les données",
          themTone: "no",
        },
        {
          label: "Fait les changements",
          us: "Oui, avec vos permissions",
          usTone: "ok",
          them: "Non : il vous explique où cliquer",
          themTone: "no",
        },
        {
          label: "D'où vient la donnée sur votre destination",
          us: "Un dossier avec quinze sources fixes et datées",
          usTone: "ok",
          them: "Ce qu'il trouve ce jour-là sur le web",
          themTone: "mid",
        },
        {
          label: "Si une donnée manque",
          us: "Il vous dit qu'elle manque",
          usTone: "ok",
          them: "Il ne le distingue pas toujours",
          themTone: "mid",
        },
        {
          label: "Cherche sur le web",
          us: "Si vous le lui demandez",
          usTone: "ok",
          them: "Oui",
          themTone: "ok",
        },
        {
          label: "Rédige, résume et traduit",
          us: "Oui",
          usTone: "ok",
          them: "Oui",
          themTone: "ok",
        },
      ],
      legend: {
        ok: "oui",
        mid: "ça dépend",
        no: "non",
        info: "sans évaluation",
      },
    },
    strategic: {
      eyebrow: "Tour stratégique",
      title: "« Je veux plus de réservations » *est aussi une demande*.",
      lead:
        "Un objectif ouvert n'entre pas dans le circuit habituel. Roombir IA lit toute votre exploitation — l'occupation à venir, le pace, les canaux, la concurrence, ce qui reste à configurer — et choisit jusqu'à trois coups avec des règles fixes, pas au goût du modèle. Il vous propose un plan avec des étapes exécutables, et chaque étape demande votre confirmation.",
      items: [
        "Il lit **18 sources de votre propre exploitation** en parallèle, en environ une seconde.",
        "Les coups sont choisis par le système selon des règles ; le modèle diagnostique et rédige.",
        "Une donnée qui n'a pas pu être lue entre comme manquante : jamais remplie par des zéros.",
        "Si vous avez déjà un plan en cours, il le reprend au lieu de vous en proposer un autre.",
      ],
    },
    perms: {
      eyebrow: "Permissions",
      title: "Il opère avec *vos* permissions, pas les siennes.",
      lead:
        "C'est le point délicat de tout assistant à l'intérieur d'un système de gestion. Ici, c'est résolu en couches qui s'appliquent à des moments différents, et la dernière se trouve là où on ne peut pas la contourner : dans celui qui exécute.",
      items: [
        "**Ce que votre utilisateur ne peut pas faire n'est pas proposé au modèle** : à la réception, il fait ce que peut faire la réception ; en administration, ce que peut faire l'administration.",
        "**Ce qui ne peut pas être annulé demande que vous l'écriviez** : pour confirmer, vous devez taper à la main ce que vous allez supprimer.",
        "**Les suppressions demandent un bouton**, pas un « oui » perdu dans la conversation.",
        "**Vous voyez la transcription** de chaque tour : quel outil il a utilisé, avec quelles données et ce qui est revenu.",
      ],
    },
    talk: {
      eyebrow: "Comment on lui parle",
      title: "Vous lui écrivez, lui parlez, *lui montrez*.",
      lead:
        "À l'intérieur du bureau, dans l'espace de travail où vous êtes, avec l'historique de cet espace : la réception ne voit pas les conversations du marketing.",
      items: [
        {
          title: "Par la voix",
          desc: "Vous dictez au lieu d'écrire. Ça marche dans n'importe quel navigateur, parce que la transcription se fait de notre côté.",
        },
        {
          title: "Captures et PDF",
          desc: "Vous collez une capture ou déposez un PDF — un tableau de tarifs, une liste d'une OTA — et il travaille dessus.",
        },
        {
          title: "Audio et vidéo",
          desc: "Un audio ou une courte vidéo est résumé avant la réponse et entre comme contexte. Jusqu'à deux minutes d'audio.",
        },
        {
          title: "Le web, si vous le demandez",
          desc: "Quand vous lui demandez de chercher à l'extérieur, il cherche. Sinon, il travaille avec votre système et le dossier de votre destination.",
        },
      ],
    },
    stats: [
      { value: "15", label: "sources dans le dossier de destination" },
      { value: "3", label: "niveaux de modèle, choisis par tour" },
      { value: "5", label: "langues" },
    ],
    faq: [
      {
        q: "Peut-il faire n'importe quoi ?",
        a: "Tout ce que votre utilisateur peut faire dans l'application, oui : il **couvre chaque écran du système**, sauf ce que nous avons laissé de côté exprès, comme le parcours du client ou la connexion. Ce que votre utilisateur ne peut pas faire n'est pas proposé au modèle : à la réception, il fait ce que peut faire la réception, rien de plus.",
      },
      {
        q: "Que se passe-t-il s'il se trompe ?",
        a: "C'est pour ça qu'il y a des freins. Ce qui écrit des données, il le confirme avec vous dans la conversation. Ce qui supprime demande un bouton. Ce qui ne peut pas être annulé demande que vous écriviez à la main ce que vous allez supprimer. Et sur le site, il travaille sur le brouillon : publier est une étape à part.",
      },
      {
        q: "Invente-t-il des données sur ma destination ?",
        a: "Le dossier est construit par le système, pas par le modèle : quinze sources publiques lues selon des règles fixes et enregistrées avec leur date. Si une source n'a pas répondu, la donnée figure comme **manquante** et l'assistant doit le dire. Un zéro inventé est pire qu'une donnée manquante, parce qu'il est cité comme preuve.",
      },
      {
        q: "Cherche-t-il sur internet ?",
        a: "Si vous le lui demandez, oui. Par défaut, il travaille avec votre système et le dossier de destination, une information vérifiée, une source par sujet. La recherche ouverte reste pour quand vous la voulez.",
      },
      {
        q: "Quel modèle d'IA utilise-t-il ?",
        a: "Il n'est pas lié à un fournisseur. Chaque tour est classé et envoyé au modèle qui correspond : un rapide pour les consultations, un plus capable quand il faut écrire des données ou analyser. Quand un meilleur modèle sort, nous le changeons de notre côté et vous n'avez rien à faire.",
      },
    ],
    cta: {
      title: "Demandez-lui ce qui *prend quatre onglets aujourd'hui*.",
      lead:
        "L'assistant sert vraiment quand votre système est chargé en dessous. Commencez par l'inscription, chargez un établissement et demandez-lui quelque chose de réel.",
      steps: [
        "Vous vous inscrivez et chargez l'établissement.",
        "Vous ouvrez Roombir IA depuis le bureau.",
        "Vous lui demandez quelque chose de réel et regardez la transcription.",
      ],
    },
  },

  propiedades: {
    meta: {
      title: "Établissements",
      description:
        "Plusieurs établissements sous une même entreprise et un seul utilisateur : chacun avec sa devise, son fuseau horaire et son équipe, et chaque personne avec accès seulement aux établissements et aux écrans qui la concernent.",
    },
    hero: {
      eyebrow: "Établissements",
      title: "Plusieurs établissements, *un seul compte*.",
      lead:
        "Un hôtel à Mendoza et six chalets à Villa La Angostura, avec le même utilisateur. Chaque établissement avec sa devise, son fuseau horaire et son équipe ; chaque personne ne voit que ceux qui la concernent.",
    },
    access: {
      eyebrow: "Accès",
      title: "Chaque personne, *seulement le sien*.",
      lead:
        "L'accès se donne par établissement et par poste. Qui tient la réception des chalets entre dans les chalets, avec le menu de réception ; qui administre voit tout.",
      items: [
        "**Accès par établissement** : une personne peut les avoir tous ou seulement quelques-uns, et si vous l'invitez depuis un établissement, elle y reste limitée.",
        "**Dix capacités administratives** qui s'accordent une par une : créer des établissements, gérer les utilisateurs, assigner des espaces, activer des applications, facturation et sites web, entre autres.",
        "**Espaces de travail par poste** — réception, nettoyage, marketing, revenue —, chacun avec son menu et son écran d'accueil.",
        "**Un espace d'administration** qui voit le catalogue complet, y compris les applications ajoutées plus tard.",
      ],
    },
    sheet: {
      eyebrow: "La fiche",
      title: "Ce qui *définit* chaque établissement.",
      items: [
        {
          title: "Type d'hébergement",
          desc: "Hôtel, resort, apparthôtel, auberge, chalets, villa, location saisonnière ou glamping. Le type décide comment démarre le reste.",
        },
        {
          title: "Adresse avec carte",
          desc: "Vous collez les coordonnées de Google Maps et il est situé. De là sortent la carte de votre site et le dossier de votre destination.",
        },
        {
          title: "Devise, fuseau horaire et langue",
          desc: "Ceux de chaque établissement, pas ceux de l'entreprise : l'un en pesos et l'autre en dollars cohabitent sans problème.",
        },
        {
          title: "Contact public et réseaux",
          desc: "E-mail, téléphone, WhatsApp, Instagram, Facebook et TikTok, chargés une fois pour le site, le LinkHub et le moteur.",
        },
      ],
    },
    root: {
      eyebrow: "La racine",
      title: "Tout le reste *dépend de l'établissement*.",
      lead:
        "Chambres, réservations, marque, site web, LinkHub, avis et galeries se chargent sur un établissement. C'est pour ça qu'ils se chargent une fois : vous changez le téléphone et ça change partout.",
      items: [
        "**Modèles d'établissement** : le deuxième démarre en copiant les espaces et les applications du premier.",
        "**Chaque établissement a son moteur, son site et son LinkHub**, avec sa propre marque.",
        "**Des espaces qui ne se démontent pas par erreur** : un espace avec des réservations en cours ou des utilisateurs actifs reste bloqué.",
        "**Supprimer un établissement** ne peut le faire que le propriétaire de l'entreprise.",
      ],
    },
    move: {
      eyebrow: "Entre établissements",
      title: "Changer d'établissement *n'est pas changer de système*.",
      items: [
        {
          title: "Un sélecteur en haut",
          desc: "L'entreprise, l'établissement et l'espace de travail se choisissent au même endroit, sans sortir ni revenir.",
        },
        {
          title: "Une recherche pour tous",
          desc: "Ctrl ou Cmd + K trouve réservations, établissements, unités et écrans. Elle trouve ou elle ne trouve pas : elle n'invente pas.",
        },
        {
          title: "Des notifications qui savent où aller",
          desc: "Si la notification vient d'un autre établissement, le système en change avant de l'ouvrir.",
        },
      ],
    },
    faq: [
      {
        q: "Combien d'établissements inclut chaque plan ?",
        a: "Chaque plan le dit avec un chiffre dans les [tarifs](/precios), du même catalogue qui facture votre compte.",
      },
      {
        q: "Puis-je donner accès à quelqu'un pour un seul établissement ?",
        a: "Oui. Si vous l'invitez depuis cet établissement, elle y reste limitée. Et à l'intérieur de l'établissement, l'espace de travail décide quels écrans elle voit.",
      },
      {
        q: "Puis-je avoir un hôtel et des chalets dans la même entreprise ?",
        a: "Oui, et dans le même établissement aussi : chaque catégorie se vend en pool ou en unité au nom propre. C'est expliqué dans [Chambres](/producto/pms).",
      },
],
    cta: {
      title: "Chargez le premier ; *le deuxième copie sa structure*.",
      lead:
        "L'inscription crée l'entreprise et le premier établissement. Les suivants démarrent depuis un modèle.",
      steps: [
        "Vous créez l'entreprise et le premier établissement.",
        "Vous invitez votre équipe avec accès par établissement.",
        "Vous ajoutez le deuxième depuis un modèle.",
      ],
    },
  },

  habitaciones: {
    meta: {
      title: "Chambres",
      description:
        "Des catégories vendues en pool de chambres interchangeables ou en unités au nom propre, dans le même établissement. Six états opérationnels avec historique, plan par étage, création en masse et un verrou par nuit.",
    },
    hero: {
      eyebrow: "Chambres",
      title: "Par catégorie ou par unité, *comme vous vendez*.",
      lead:
        "Un hôtel vend une double supérieure et attribue la 203 après. Un complexe vend le chalet Alerce, avec ses photos et son prix. Roombir fait les deux, et les deux à la fois dans le même établissement.",
    },
    dual: {
      eyebrow: "Deux façons de vendre",
      title: "Chaque catégorie choisit *comment elle se vend*.",
      lead:
        "Le mode se définit catégorie par catégorie, avec une valeur par défaut pour l'établissement. Ainsi un complexe avec six chalets et deux chambres vend les chalets par nom et les chambres en pool, dans le même calendrier.",
      items: [
        "**Pool de catégorie** : le client achète « une double supérieure » et le système attribue la chambre, en minimisant les trous ou en répartissant l'usure. Ou il la laisse non attribuée pour que la réception décide.",
        "**Unité au nom propre** : la catégorie enveloppe une seule unité. Le client réserve le chalet Alerce, avec ses photos et son prix.",
        "**Changer de mode est enregistré**, avec le motif, et il y a un outil pour migrer les catégories qui ont déjà des réservations.",
        "**Chaque réservation garde le mode avec lequel elle est née** : changer le réglage après ne réécrit pas l'histoire.",
      ],
    },
    states: {
      eyebrow: "État des chambres",
      title: "Des états qui *n'admettent pas l'impossible*.",
      lead:
        "Six états — disponible, occupée, nettoyage, maintenance, bloquée et départ en attente — et une règle pour chaque changement. Depuis occupée, on ne passe qu'à départ en attente : personne ne libère une chambre avec le client à l'intérieur.",
      items: [
        "**Historique par unité** : qui a changé quel état, quand et avec quelle note.",
        "**Tableau par étage et par catégorie**, avec filtres, pour lire la maison d'un coup d'œil.",
        "**Plan d'occupation** par étage, avec navigation par date.",
        "**Le nettoyage change les états** sans voir les tarifs ni le revenue : son espace de travail ne les a pas.",
      ],
    },
    load: {
      eyebrow: "La saisie",
      title: "Vous le chargez une fois, *tous l'utilisent*.",
      items: [
        {
          title: "Création en masse en deux étapes",
          desc: "Un aperçu prévient si un code se répète avant de rien créer ; ensuite elles se créent toutes ensemble ou aucune.",
        },
        {
          title: "Blocages par demi-journée",
          desc: "Une maintenance l'après-midi bloque cette nuit-là et laisse la matinée vendable. Il utilise le même verrou qu'une réservation.",
        },
        {
          title: "La fiche de chaque catégorie",
          desc: "Capacité d'adultes et d'enfants, taille, prix de base, photos et équipements choisis dans un catalogue.",
        },
        {
          title: "Un seul inventaire",
          desc: "La catégorie que vous chargez ici est celle qu'affichent le moteur, le site, le LinkHub et Revenue.",
        },
      ],
    },
    lock: {
      eyebrow: "La garantie",
      title: "Une nuit se vend *une seule fois*.",
      lead:
        "Chaque nuit de chaque unité est un verrou unique dans la base de données. Si deux personnes réservent la même chose en même temps, la seconde n'entre pas : ce n'est pas une validation qu'on peut contourner, c'est la base qui l'empêche.",
      items: [
        "Les blocages de maintenance utilisent le même verrou, donc ils retirent de l'inventaire réel.",
        "En annulant, en marquant no-show ou en faisant le check-out, la nuit se libère toute seule.",
        "La nuit de départ ne se bloque pas : qui arrive ce jour-là peut entrer.",
      ],
    },
    faq: [
      {
        q: "J'ai des chalets et des chambres. Puis-je avoir les deux ?",
        a: "Oui, dans le même établissement. Les chalets vont en unité au nom propre et les chambres en pool, et ils cohabitent dans le même calendrier et le même moteur.",
      },
      {
        q: "Puis-je changer de mode après ?",
        a: "Oui. Le changement demande un motif et reste enregistré, et si la catégorie a déjà des réservations, il y a un outil pour la migrer. Les anciennes réservations conservent le mode avec lequel elles sont nées.",
      },
      {
        q: "Que se passe-t-il si deux personnes réservent la même nuit en même temps ?",
        a: "L'une des deux échoue. Chaque nuit de chaque unité est un **verrou unique dans la base de données** — la clé est l'unité plus la date —, donc la seconde écriture n'entre pas. Ce n'est pas une validation dans le code qu'on peut contourner : c'est la base qui l'empêche.",
      },
      {
        q: "Le personnel de nettoyage voit-il les tarifs ?",
        a: "Non, si vous ne le voulez pas. L'espace de nettoyage a son propre menu — état des chambres et plan — sans tarifs ni revenue.",
      },
    ],
    cta: {
      title: "Commencez par *vos chambres*.",
      lead:
        "Vous chargez catégories et unités et la disponibilité s'initialise toute seule. Le calendrier et le moteur sont prêts.",
      steps: [
        "Vous chargez les catégories et choisissez comment se vend chacune.",
        "Vous créez les unités d'un coup.",
        "La disponibilité s'initialise toute seule.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Moteur de réservation",
      description:
        "Le moteur que voit votre client — avec le prix par jour, les unités restantes et dix devises — et les huit vues où vous l'exploitez : tableau du jour, liste, calendrier, saisie manuelle, tarifs, disponibilité, promotions et configuration. Sans commission par réservation.",
    },
    hero: {
      eyebrow: "Moteur de réservation",
      title: "Chaque réservation, *du premier clic au check-out*.",
      lead:
        "Le client voit le prix de chaque jour avant de choisir des dates et réserve seul. Vous la voyez entrer dans le tableau du jour, vous la déplacez dans le calendrier et vous la clôturez au check-out. Sans commission par réservation, en dix devises.",
    },
    guest: {
      eyebrow: "Ce que voit le client",
      title: "Un calendrier qui *répond avant de demander*.",
      lead:
        "Le sélecteur de dates habituel demande deux jours et c'est tout. Celui du moteur affiche, jour par jour et selon ce que vous activez, ce que la personne allait vous demander par WhatsApp avant de réserver.",
      items: [
        "**Prix à partir de** sur chaque jour, calculé avec les mêmes tarifs que facture le moteur.",
        "**Unités restantes** : votre inventaire réel, pas un compteur inventé.",
        "**Jours fermés**, fermés à l'arrivée ou au départ, et le **minimum de nuits** au choix de l'arrivée.",
        "**Chalet avec nom ou catégorie**, selon comment vous vendez, avec ses photos, ses équipements et les extras proposés avant de payer.",
      ],
    },
    views: {
      eyebrow: "Ce que vous voyez",
      title: "Chaque moment du service, *son écran*.",
      lead:
        "Huit vues sur la même donnée : déplacer une réservation dans le calendrier change la chambre, libère la nuit dans le moteur et apparaît dans le rapport.",
      items: [
        {
          title: "Tableau du jour",
          desc: "Arrivées et départs du jour, avec des cartes actionnables. C'est l'écran avec lequel la réception ouvre le service.",
        },
        {
          title: "Toutes les réservations",
          desc: "La liste avec filtres et un panneau latéral qui s'ouvre sans quitter la page : résumé, activité et notes. De là, on attribue une chambre et on change l'état.",
        },
        {
          title: "Calendrier",
          desc: "Chambres par jour. Vous glissez une réservation ou l'étirez, et avant de lâcher vous voyez si elle entre en conflit avec une autre et ce qui arrive au prix.",
        },
        {
          title: "Nouvelle réservation",
          desc: "Celle qui est arrivée par téléphone ou par WhatsApp : client, dates, occupation par âge, canal d'origine, promotions et notes.",
        },
        {
          title: "Tarifs",
          desc: "Prix de base par catégorie et plans tarifaires avec validité, devise et séjour minimum.",
        },
        {
          title: "Disponibilité",
          desc: "Feu tricolore par jour — libre, partiel, complet, fermé — et restrictions : fermé à l'arrivée ou au départ, séjour minimum et maximum.",
        },
        {
          title: "Promotions",
          desc: "Automatiques ou avec code, en pourcentage, montant fixe ou prix par nuit, avec leur présentation prête pour votre site.",
        },
        {
          title: "Configuration",
          desc: "Devise, confirmation, règles de séjour, horaires et comment les chambres sont attribuées. Plus le Studio du Moteur pour les textes et les couleurs.",
        },
      ],
    },
    prices: {
      eyebrow: "Chaque tarif, individuel",
      title: "Le prix de chaque nuit, *avec son pourquoi*.",
      lead:
        "Quand le moteur doit dire combien coûte une nuit, il résout une chaîne fixe, toujours dans le même ordre. Savoir de quel échelon sort chaque prix est ce qui vous permet de faire confiance au système sans l'auditer chaque matin.",
      items: [
        "**D'abord, ce que vous avez accepté dans Revenue** : s'il y a un tarif recommandé et accepté pour cette date, c'est lui qui commande.",
        "**Ensuite, le plan tarifaire** en vigueur pour cette catégorie et cette date, avec son séjour minimum.",
        "**S'il n'y a pas de plan, le prix de base** de la catégorie. Chaque chalet peut avoir le sien.",
        "**Par-dessus tout, les promotions** : remise ou majoration — une promo peut aussi augmenter le prix en haute saison —, automatiques ou avec code.",
      ],
    },
    currency: {
      eyebrow: "Dix devises",
      title: "Ce qu'a vu le client *ne bouge plus*.",
      lead:
        "Le client regarde le prix dans sa devise et vous encaissez dans la vôtre. La réservation reste toujours dans votre devise de base et la conversion se fige au check-in : le montant que vous encaissez ne change plus après.",
      items: [
        "Dollar, peso argentin, real, peso chilien, peso colombien, peso mexicain, sol, peso uruguayen, euro et livre sterling.",
        "Pour les pesos argentins, vous choisissez le cours : officiel, blue, MEP ou CCL.",
        "Les taux se mettent à jour toutes les trois heures et sont marqués comme anciens si la source n'a pas répondu.",
        "Les rapports additionnent directement, parce que tout reste dans votre devise de base.",
      ],
    },
    where: {
      eyebrow: "Où il va",
      title: "Sur votre site, votre bio *et pour une IA*.",
      items: [
        {
          title: "Votre site",
          desc: "Une section de l'éditeur web qui se connecte seule à votre inventaire.",
        },
        {
          title: "Votre LinkHub",
          desc: "Le lien de la bio Instagram ouvre le même moteur, identique à celui de votre site.",
        },
        {
          title: "Un lien direct",
          desc: "Une page propre avec l'adresse de votre hébergement, à envoyer par WhatsApp si vous n'avez pas encore de site.",
        },
        {
          title: "Agents IA",
          desc: "Avec la couche agentique activée, un assistant externe peut lire votre disponibilité et compléter une réservation. [Comment ça marche](/producto/marketing#agentes).",
        },
      ],
    },
    after: {
      eyebrow: "Après le paiement",
      title: "La réservation entre *et le système continue tout seul*.",
      items: [
        {
          title: "L'unité est attribuée",
          desc: "La seule possible si vous vendez par unité, celle que choisit le système si c'est un pool automatique, ou aucune si vous préférez que la réception décide.",
        },
        {
          title: "L'e-mail part",
          desc: "Depuis le domaine de roombir, avec votre boîte en répondre-à. Sans configurer de serveur de messagerie ni un fournisseur de plus.",
        },
        {
          title: "Le client a son compte",
          desc: "Avec StayPass, il voit ses réservations depuis votre site. Un même client accumule les hébergements où il a réservé, et chaque hôtel ne voit que les siens.",
        },
      ],
      stats: [
        { value: "0 %", label: "de commission par réservation" },
        { value: "10", label: "devises, avec blue, MEP, CCL ou officiel pour l'ARS" },
        { value: "2", label: "modes de confirmation, avec expiration automatique" },
      ],
    },
    faq: [
      {
        q: "Prenez-vous une commission par réservation ?",
        a: "Non. Le moteur n'a pas de frais par réservation : vous payez le plan et rien de plus. C'est écrit dans les [conditions](/legal/terminos).",
      },
{
        q: "Qui confirme la réservation ?",
        a: "Vous choisissez. Dans un mode, la réservation naît en attente et **le client la confirme** avec un lien reçu par e-mail. Dans l'autre, elle reste en attente jusqu'à ce que **la réception l'accepte**. Dans les deux cas, les réservations en attente expirent toutes seules, pour que vous ne restiez pas avec des nuits bloquées par quelqu'un qui n'est jamais revenu.",
      },
      {
        q: "Puis-je changer les textes et les couleurs du paiement ?",
        a: "Oui, depuis le Studio du Moteur et **sans toucher au code ni republier le site** : recherche, calendrier, clients, liste, détail, services, paiement et écran final, chacun avec ses textes et ses styles.",
      },
    ],
    cta: {
      title: "Mettez votre lien de réservation *dans la bio*.",
      lead:
        "Vous chargez les chambres et le moteur devient opérationnel avec la disponibilité initialisée. Le site et le LinkHub s'ajoutent ensuite, quand vous voulez.",
      steps: [
        "Vous chargez catégories, unités et prix.",
        "Vous configurez le moteur dans le Studio.",
        "Vous partagez le lien et cessez de perdre des demandes dans la messagerie.",
      ],
    },
  },

  informes: {
    meta: {
      title: "Rapports",
      description:
        "Occupation, ADR, RevPAR, revenus, annulations, anticipation et canaux, calculés sur les mêmes réservations que vous gérez, et une section avec ce qui est mal saisi aujourd'hui. Sans tableurs.",
    },
    hero: {
      eyebrow: "Rapports",
      title: "Vos chiffres, *sans construire de tableur*.",
      lead:
        "Occupation, tarif moyen, revenus, annulations et de quel canal vient chaque réservation, calculés sur les mêmes réservations que vous gérez. Et une section qui ne regarde pas ce qui s'est passé mais ce qui est mal saisi aujourd'hui.",
    },
    hygiene: {
      eyebrow: "État et gestion",
      title: "Ce qui va mal, *avant ce qui s'est passé*.",
      lead:
        "La plupart des rapports vous racontent le mois dernier. Cette section vous dit ce qu'il faut arranger aujourd'hui, avant que ça devienne un client sans chambre.",
      items: [
        "**Réservations en attente** que personne n'a confirmées à temps.",
        "**Arrivées du jour sans chambre attribuée.**",
        "**Départs du jour encore à l'intérieur** : le check-out n'a pas été marqué.",
        "**Réservations sans canal** : celles que personne n'a étiquetées et qui ensuite faussent le rapport des canaux.",
      ],
    },
    metrics: {
      eyebrow: "Ce qu'il mesure",
      title: "Chaque chiffre, *expliqué à sa ligne*.",
      lead: "Pas de glossaire à part : chaque métrique se comprend là où elle apparaît.",
      items: [
        {
          title: "Occupation et demande",
          desc: "Combien de chambres vous avez occupées aujourd'hui et la courbe de ce qui est déjà réservé pour les 7 à 90 prochains jours.",
        },
        {
          title: "ADR et RevPAR",
          desc: "L'ADR, c'est ce que vous encaissez en moyenne par nuit vendue ; le RevPAR, ce que vous rapporte chaque chambre que vous avez, vendue ou non.",
        },
        {
          title: "Annulations",
          desc: "Le taux de la période et celles de dernière minute, avec leur tendance par semaine ou par mois.",
        },
        {
          title: "Canaux",
          desc: "D'où vient chaque réservation et lequel vous annule le plus. Avec moins de trois réservations, il ne l'affirme pas.",
        },
      ],
    },
    period: {
      eyebrow: "Contre la période précédente",
      title: "Chaque chiffre, *avec sa différence*.",
      lead:
        "Vous choisissez la plage — une semaine, un mois, trois ou six mois, ou une sur mesure — et chaque métrique se compare à la période immédiatement précédente.",
      items: [
        {
          title: "Revenus",
          desc: "Ceux de la période et ceux projetés pour les 30 prochains jours avec ce qui est déjà réservé.",
        },
        {
          title: "Anticipation",
          desc: "Avec combien de jours d'avance on vous réserve, avec le minimum, le maximum et sur combien de réservations c'est calculé.",
        },
        {
          title: "Séjour moyen",
          desc: "Combien de nuits reste chaque client, en moyenne, sur la plage que vous avez choisie.",
        },
        {
          title: "Occupation par catégorie",
          desc: "Quelles catégories sont pleines aujourd'hui et lesquelles ont de la place, avec le pourcentage de chacune.",
        },
      ],
    },
    ask: {
      eyebrow: "La question qui n'est pas à l'écran",
      title: "S'il n'est pas dans le rapport, *demandez-lui*.",
      lead:
        "Roombir IA lit les mêmes rapports et vous répond dans la conversation, avec le chiffre et sa provenance. Pour « sommes-nous mieux que l'an dernier à ce stade ? », il y a le pace de [Revenue](/producto/revenue), contre votre propre historique.",
      items: [
        "« Quel canal m'annule le plus ce trimestre ? »",
        "« Combien d'arrivées ai-je demain sans chambre ? »",
        "« Comment se présente octobre contre septembre ? »",
      ],
    },
    faq: [
      {
        q: "D'où viennent les chiffres ?",
        a: "Des mêmes réservations que vous gérez dans le calendrier, calculées à l'instant. Il n'y a pas d'export nocturne ni de base à part qui puisse se désynchroniser.",
      },
{
        q: "Quelle différence avec Revenue ?",
        a: "Rapports regarde l'exploitation : ce qui s'est passé, ce qui est mal saisi, d'où viennent les réservations. [Revenue](/producto/revenue) regarde vers l'avenir pour décider le prix : pace contre votre propre historique, concurrence et événements.",
      },
      {
        q: "Dois-je configurer quelque chose ?",
        a: "Non. Avec les réservations chargées, les rapports sont déjà là. La seule chose utile est de marquer le canal de chaque réservation manuelle, pour que le rapport des canaux serve à quelque chose.",
      },
    ],
    cta: {
      title: "Vos chiffres, *dès le premier jour*.",
      lead: "Les rapports ne se configurent pas : ils sortent des réservations que vous chargez déjà.",
      steps: [
        "Vous chargez vos réservations, ou nous les migrons avec vous.",
        "Vous marquez le canal de chaque réservation manuelle.",
        "Vous ouvrez Rapports et choisissez la plage.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue",
      description:
        "Revenue management avec la trace de chaque prix : quelles données il a vues, quelle règle a correspondu et quel plafond s'est appliqué. Pace contre votre propre historique, concurrence, événements de votre destination issus de quinze sources et le tarif qui entre dans le moteur quand vous l'acceptez.",
    },
    hero: {
      eyebrow: "Revenue",
      title: "Il vous donne le prix *et le pourquoi*.",
      lead:
        "Un document par date avec la trace complète : quelles données il a vues, quelle règle a correspondu et quel plafond s'est appliqué. Il regarde votre propre historique et votre destination — jours fériés, événements, routes aériennes, météo — avec la source en vue. Et quand vous acceptez, le tarif entre seul dans le moteur.",
    },
    decision: {
      eyebrow: "Décisions",
      title: "La réponse à *« pourquoi vous me suggérez ça ? »*",
      lead:
        "Il y a un document par établissement et par date avec la trace complète : quelles entrées le moteur a vues, quel était le tarif de base, lequel il a suggéré, quelles règles ont correspondu, si un plafond s'est appliqué, et un journal lisible ligne par ligne.",
      items: [
        "Occupation, indice de demande, disponibilité, tarifs des concurrents, réservations nouvelles et événements : tout ce qui est entré dans le calcul, avec sa valeur.",
        "Quelle règle a correspondu et dans quel ordre, puisque c'est la dernière qui l'emporte.",
        "Si le plafond minimum ou maximum s'est appliqué, et lequel c'était.",
        "Le cycle de vie de la recommandation : suggérée, acceptée ou refusée, appliquée, par qui et quand.",
      ],
    },
    destination: {
      eyebrow: "Votre destination",
      title: "Ce qui bouge la demande, *avec la source*.",
      lead:
        "Les signaux de demande viennent de quinze sources publiques par destination, balayées autour de votre établissement et non d'une liste fixe de villes. Les événements se suggèrent seuls et vous les approuvez : un événement approuvé n'est pas écrasé par la mise à jour suivante.",
      items: [
        "**Événements dans votre rayon** : sport, culture, congrès et salons, avec leur impact attendu et les jours restants.",
        "**Jours fériés et week-ends prolongés**, que les règles de prix peuvent utiliser comme variable.",
        "**Routes aériennes observées** arrivant dans votre zone, et le taux de change des marchés qui vous visitent.",
        "**Les recherches sans disponibilité** de votre propre moteur : le signal de demande le plus sous-estimé d'un petit hébergement.",
      ],
    },
    rules: {
      eyebrow: "Scénarios",
      title: "Treize variables, *et un essai à blanc*.",
      lead:
        "Chaque règle évalue une variable contre une référence, dans une fenêtre d'anticipation, et applique un ajustement. Elles s'évaluent dans l'ordre et la dernière qui correspond l'emporte. Avant d'en activer une, l'essai à blanc vous montre ce qu'elle aurait fait.",
      items: [
        "**Variables** : occupation, indice de demande, disponibilité, tarif des concurrents 1 à 5, réservations nouvelles à 7 et à 30 jours, impact des événements, jours jusqu'à l'événement le plus proche et indice de pace.",
        "**Comparaisons** : supérieur, supérieur ou égal, égal, inférieur ou égal, inférieur.",
        "**Ajustement** en pourcentage sur le tarif de base.",
        "**Plafonds** de tarif minimum et maximum, qui s'appliquent après tout le reste.",
      ],
    },
    comp: {
      eyebrow: "Concurrence",
      title: "Un comp-set *mixte et honnête*.",
      lead:
        "Les concurrents qui utilisent aussi roombir apportent leur tarif réel. Ceux de l'extérieur se découvrent seuls par proximité et ressemblance, et leur tarif, c'est vous qui le chargez, comme référence fixe ou par date.",
      items: [
        "Score de ressemblance par type, catégorie, taille, gamme et zone.",
        "Le profil de votre propre hôtel, pris du système sauf si vous le changez à la main.",
        "Grille des tarifs de la concurrence par date.",
        "Prêt pour des fournisseurs automatiques de tarifs ; aujourd'hui non connecté.",
      ],
    },
    rest: {
      eyebrow: "Les autres onglets",
      title: "Tout ce qu'il y a *en plus du prix*.",
      items: [
        {
          title: "Deux calendriers en un",
          desc: "Par date de réservation — quand on vous a acheté — et par date de séjour — quand on dort. Beaucoup de systèmes mélangent les deux et créent de la confusion.",
        },
        {
          title: "Pace",
          desc: "Le rythme de vente contre celui de votre propre établissement dans le passé, par jour de semaine, mois et anticipation, avec des alertes de vente rapide ou lente.",
        },
        {
          title: "Événements",
          desc: "Suggérés seuls et validés par vous : suggéré, approuvé ou écarté, avec score de pertinence et impact attendu.",
        },
        {
          title: "Recommandations",
          desc: "Tarif actuel, suggéré, écart et motif. Elles s'acceptent ou se refusent, et peuvent s'appliquer seules si vous l'activez.",
        },
        {
          title: "Signaux de demande",
          desc: "En plus des réservations, l'indice de demande prend les recherches de votre moteur, y compris celles qui n'ont trouvé aucune place.",
        },
        {
          title: "Configuration",
          desc: "Concurrence, localisation, profil de l'hôtel, seuils de pace, rayon des événements et plafonds de tarif.",
        },
      ],
    },
    cost: {
      eyebrow: "Ailleurs, à part",
      title: "Un RMS est presque toujours *un module de plus*.",
      lead:
        "Parmi les systèmes pour hébergements indépendants, le revenue management se vend comme un ajout. Le seul qui publie son prix sur son site le facture par chambre.",
      head: { tool: "Produit", price: "Prix publié", gap: "Comment on le prend" },
      rows: [
        {
          tool: "Amenitiz PriceAdvisor",
          price: "**6 €** par chambre et par mois",
          gap: "Ajout sur le plan. Il suggère ; il n'applique pas seul.",
        },
        {
          tool: "SiteMinder Dynamic Revenue Plus",
          price: "ne le publie pas",
          gap: "Ajout facturé à part sur le plan.",
        },
        {
          tool: "Mews RMS",
          price: "ne le publie pas",
          gap: "Module à part de ses trois formules.",
        },
      ],
      total:
        "Avec un prix publié, un hôtel de **15 chambres** paie **90 € par mois** rien que pour les suggestions de tarif. Chez roombir, Revenue est dans le catalogue de produits comme n'importe quel autre : [regardez quel plan l'inclut](/precios).",
      source:
        "Sources : pages produit et tarifs de amenitiz.com, siteminder.com et mews.com, lues le 22 septembre 2026.",
    },
    faq: [
      {
        q: "J'ai peu d'historique. Le RMS me sert quand même ?",
        a: "Oui, mais il vous le dira. Le benchmark de pace se construit avec **votre propre historique**, groupé par jour de semaine, mois et tranche d'anticipation, et l'interface **expose la taille de l'échantillon**. Si une cellule a été calculée avec trois réservations, vous le verrez. Nous préférons cela à vous montrer une courbe confiante bâtie sur rien.",
      },
      {
        q: "D'où viennent les tarifs de la concurrence ?",
        a: "De deux endroits. Si le concurrent utilise aussi roombir, le tarif est réel. S'il est externe, le système le **découvre seul** par localisation et ressemblance, mais **le tarif, c'est vous qui le chargez**, fixe ou par date. La connexion aux fournisseurs automatiques est prête et pas encore connectée ; nous ne dirons pas que oui tant qu'elle ne l'est pas.",
      },
      {
        q: "Si j'accepte une recommandation, dois-je recopier le prix ailleurs ?",
        a: "Non. En l'acceptant, le tarif entre dans le moteur de réservation et devient le premier échelon du prix de cette date. Dans la plupart des systèmes, cette étape est une personne qui recopie un chiffre d'un écran à un autre.",
      },
    ],
    cta: {
      title: "Le prix *cesse d'être une intuition*.",
      lead:
        "Le RMS commence à servir dès que vous avez votre propre historique, et tant que vous ne l'avez pas, il vous le dit en face au lieu d'inventer une courbe.",
      steps: [
        "Vous chargez l'inventaire et les tarifs de base.",
        "Vous montez le comp-set et validez les événements de votre zone.",
        "Vous écrivez deux ou trois règles et les testez à blanc.",
      ],
    },
  },

  marketing: {
    meta: {
      title: "Marketing",
      description:
        "L'éditeur web avec assistant — vous lui montrez une capture et il construit les sections — connecté à votre inventaire et à votre moteur. Marque, bibliothèque de photos, galeries, avis, LinkHub et la couche qui rend votre hébergement lisible pour une IA.",
    },
    hero: {
      eyebrow: "Marketing",
      title: "Un site qui *sait déjà* vos disponibilités.",
      lead:
        "Le site, la marque, les photos, les avis et le LinkHub sortent du même endroit que vos réservations : vous changez un prix et c'est déjà sur le site. Et l'éditeur a un assistant : vous lui collez la capture d'un site que vous aimez et il vous construit les sections, éditables.",
    },
    ai: {
      eyebrow: "L'éditeur avec assistant",
      title: "Vous lui montrez un site, *il construit le vôtre*.",
      lead:
        "Vous collez jusqu'à six captures par demande — la page d'accueil d'un hôtel que vous aimez, une section d'un autre site — et l'assistant construit les sections avec cette structure et vos textes, sur le canevas et en brouillon. Ensuite vous les éditez comme n'importe quoi d'autre.",
      items: [
        "**Vous désignez un bloc et demandez** « fais-le comme ça », « ajoute deux cartes de plus », « change le titre » : il touche cette pièce et laisse le reste comme avant.",
        "**Tout va au brouillon.** Publier est une étape à part, et elle est à vous.",
"**Sans code.** Et si vous le voulez, il y a des styles par écran, des animations et du CSS propre.",
      ],
    },
    connected: {
      eyebrow: "Connectée, pas collée",
      title: "Des sections qui *lisent vos données*.",
      lead:
        "Ce qui distingue l'éditeur d'un créateur générique, ce n'est pas le canevas : ce sont les sections qui se connectent seules à ce que vous avez déjà chargé. Dans un créateur générique, le moteur et les chambres se collent depuis un autre service.",
      items: [
        {
          title: "Moteur et chambres",
          desc: "Le moteur de réservation, les cartes de chambre et les catégories, avec une disponibilité et un prix réels.",
        },
        {
          title: "Galerie, avis, services et promos",
          desc: "Vous changez une promo dans Réservations et le site l'affiche, sans éditer la page.",
        },
        {
          title: "Plusieurs langues",
          desc: "Chaque langue est une page avec sa propre adresse, son titre et son aperçu pour les réseaux. Ce n'est pas un traducteur posé dessus.",
        },
        {
          title: "Votre domaine",
          desc: "Chaque langue peut avoir le sien, avec brouillon, publication explicite et aperçu en plusieurs tailles.",
        },
      ],
    },
    quality: {
      eyebrow: "Qualité du site",
      title: "Un contrôle qualité *qui répare aussi*.",
      lead:
        "Un panneau comme celui de PageSpeed vérifie ce qu'un moteur de recherche et un mobile pénalisent. Le bouton « Tout réparer » corrige ce qu'il a trouvé avec des règles fixes, sans IA dans la boucle, et revérifie.",
      items: [
        {
          title: "Avant de publier",
          desc: "Il vous signale des textes trop petits sur mobile, des images sans description et des titres ou descriptions manquants.",
        },
        {
          title: "Modèles avec votre marque",
          desc: "Vous démarrez d'un modèle qui se remplit avec votre logo, vos couleurs, vos photos et les textes de votre établissement.",
        },
        {
          title: "Mode simple ou avancé",
          desc: "Le simple cache les contrôles de design jusqu'à ce que vous les cherchiez. L'avancé les montre tous.",
        },
        {
          title: "Popups et WhatsApp",
          desc: "Cinq formats de popup avec règles de page et de fréquence, et un bouton WhatsApp avec le message déjà écrit.",
        },
      ],
    },
    cost: {
      eyebrow: "Ce que vous payez aujourd'hui à part",
      title: "Cinq fournisseurs *qui ne se parlent pas*.",
      lead:
        "Voici comment se construit aujourd'hui la présence numérique d'un hébergement indépendant, avec les prix que publie chaque fournisseur. Aucun ne sait ce que vous avez de libre ce soir.",
      head: { tool: "Ce qu'on achète", price: "Prix publié", gap: "Ce qu'il ne sait pas de votre hébergement" },
      rows: [
        {
          tool: "Site web sur Framer",
          price: "10 US$/mois + **20 US$ par langue**",
          gap: "Votre inventaire et vos prix : le moteur se colle depuis un autre service.",
        },
        {
          tool: "Site web sur Webflow",
          price: "15 US$/mois + **9 US$ par langue**",
          gap: "Pareil : sans chambres ni moteur propres.",
        },
        {
          tool: "Avis sur TrustYou",
          price: "à partir de **75 US$** par établissement et par mois",
          gap: "Quel client est parti aujourd'hui, sauf si vous l'intégrez à votre système.",
        },
        {
          tool: "Lien en bio avec Linktree",
          price: "**15 US$/mois**",
          gap: "Votre disponibilité : « Réserver » est un lien.",
        },
        {
          tool: "Photos sur Google Workspace",
          price: "**7 US$** par utilisateur et par mois",
          gap: "Quelle photo correspond à quelle chambre.",
        },
      ],
      total:
        "Un site en cinq langues sur Framer (10 US$ + 4 × 20 US$), plus avis, lien en bio et photos : **187 US$ par mois**, et toujours sans moteur de réservation ni rien de connecté à vos réservations.",
      source:
        "Prix publiés sur framer.com, webflow.com, trustyou.com, linktr.ee et workspace.google.com, lus le 22 septembre 2026. Framer, Webflow et TrustYou, avec paiement annuel ; Linktree, plan Pro mensuel.",
    },
    brand: {
      eyebrow: "Marque",
      title: "Votre marque, *chargée une fois*.",
      lead:
        "Une fiche d'identité qui alimente le site, le LinkHub, le moteur et les données que lisent les moteurs de recherche. Vous changez le logo et ça change partout.",
      items: [
        "**Palette extraite de votre logo**, avec la couleur principale ajustée pour que le texte dessus se lise.",
        "**Ton et typographie** : vous choisissez le ton et la typographie se suggère seule.",
        "**Histoire, phrase et à qui vous parlez**, dans vos propres mots.",
        "**Votre zone et ce que vous avez à proximité**, détectés depuis la carte.",
      ],
    },
    files: {
      eyebrow: "Photos et fichiers",
      title: "Vos photos, *en un seul endroit*.",
      items: [
        {
          title: "La bibliothèque de l'entreprise",
          desc: "Images, vidéos, audios et documents, avec dossiers, étiquettes et recherche. Vous glissez depuis l'ordinateur et voilà.",
        },
        {
          title: "Éditeur d'image",
          desc: "Vous recadrez et ajustez une photo sans quitter le système.",
        },
        {
          title: "Galeries",
          desc: "Photos et vidéos de YouTube ou Vimeo regroupées en galeries de l'établissement, avec couverture et ordre.",
        },
        {
          title: "La même bibliothèque pour tout",
          desc: "L'utilisent l'éditeur web, la marque, les galeries et l'assistant. Le site affiche la galerie que vous choisissez avec une section.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avis",
      title: "Vos avis, *répondus au même endroit*.",
      lead:
        "Vous chargez les avis de Google, Booking, TripAdvisor, Airbnb, Despegar, Hotels.com et les vôtres, à la main ou par fichier, et vous y répondez depuis ici. Ceux que vous choisissez s'affichent sur votre site.",
      items: [
        "**Import par fichier** qui signale les lignes avec des erreurs et ne duplique pas celles qui existaient déjà.",
        "**Réponse publique** par avis, et un filtre pour ceux qui restent sans réponse.",
        "**Moyenne et répartition** d'une à cinq étoiles, par source.",
        "**Ils se publient sur votre site** avec une section de l'éditeur, seulement ceux que vous laissez visibles.",
      ],
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "Le lien de votre bio, *avec le moteur dedans*.",
      lead:
        "Un lien en bio fait pour les hébergements : le bouton réserver ouvre le même moteur que votre site, avec disponibilité et prix, sans envoyer personne vers un autre formulaire.",
      items: [
        "**Dix types de blocs** : réserver, WhatsApp, avis, galerie, vidéo, carte, contact, lien, texte et séparateur, avec programmation par date.",
        "**Six modèles** qui se complètent avec votre marque, ou le design à la main.",
        "**Code QR** à imprimer à la réception ou sur la carte.",
        "**Visites et clics** par jour, pays, origine et appareil, sans enregistrer l'IP de personne.",
      ],
    },
    agentes: {
      eyebrow: "Lisible pour une IA",
      title: "Qu'une machine puisse *vous comprendre et vous réserver*.",
      lead:
        "De plus en plus de gens demandent à un assistant IA avant de chercher. Cet assistant ne voit pas votre carrousel de photos : il lit du texte, des données structurées et des routes. Votre site et votre moteur publient les trois, et ça s'active avec un interrupteur.",
      items: [
        "**`llms.txt`** : qui vous êtes, ce que vous vendez et comment on réserve, en texte brut.",
        "**`availability.json`** et **`engine-capabilities.json`** : votre disponibilité réelle et ce qu'accepte votre moteur.",
        "**Données structurées** sur chaque page et un éditeur GEO pour déclarer ce que vous êtes avec vos mots.",
        "**Dix outils pour agents dans le navigateur** : un assistant externe peut compléter une réservation.",
      ],
    },
    faq: [
      {
        q: "Ai-je besoin de savoir designer ?",
        a: "Non. Vous pouvez démarrer d'un modèle qui se remplit avec votre marque, demander à l'assistant de construire une section à partir d'une capture, ou travailler en mode simple, qui cache les contrôles de design. Si vous savez designer, le mode avancé a des styles par écran, des animations et du CSS propre.",
      },
      {
        q: "Dois-je charger les chambres deux fois, une pour le site ?",
        a: "Non, et c'est tout l'intérêt. Les sections de chambres, moteur, galeries, promotions, avis et services se connectent seules à ce que vous avez déjà chargé. Si vous ajoutez une nouvelle photo à une catégorie, elle apparaît sur le site sans que personne n'y touche.",
      },
      {
        q: "Puis-je utiliser mon propre domaine ?",
        a: "Oui, et chaque langue du site peut avoir le sien.",
      },
{
        q: "Puis-je récupérer mes avis Google ?",
        a: "Oui, par fichier ou à la main.",
      },
    ],
    cta: {
      title: "Votre site et votre lien, *le même après-midi*.",
      lead:
        "Si vous avez déjà chargé la marque et les chambres, vous démarrez le site depuis un modèle ou depuis une capture, et le LinkHub se complète avec les données de l'établissement.",
      steps: [
        "Vous chargez votre marque et vos photos.",
        "Vous démarrez le site depuis un modèle ou une capture.",
        "Vous publiez sur votre domaine et montez le LinkHub.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Solutions",
      description:
        "Hôtels, chalets et appartements, auberges, glamping et villas, et petits groupes : comment Roombir se configure pour chaque type d'hébergement et pour chaque poste.",
    },
    hero: {
      eyebrow: "Solutions",
      title: "Le même système, *configuré autrement*.",
      lead:
        "Un hôtel urbain, un complexe de chalets et une auberge ne s'exploitent pas pareil, et pourtant presque tous les systèmes du marché en choisissent un des trois et forcent les deux autres à s'adapter. Ici, ce qui change, c'est la configuration : modèle de vente, espaces de travail et applications actives.",
    },
    hoteles: {
      eyebrow: "Hôtels et apparthôtels",
      title: "Chambres interchangeables, *attribuées toutes seules*.",
      lead:
        "La configuration classique : des catégories regroupant plusieurs unités équivalentes, le client achète un type de chambre et le système décide laquelle lui revient. Avec l'attribution automatique, vous pouvez lui demander de minimiser les trous ou d'équilibrer l'usure entre unités.",
      items: [
        "Modèle de vente : pool de catégorie, avec attribution automatique ou manuelle selon votre préférence.",
        "Espaces de travail typiques : réception, étages et administration, chacun avec son menu.",
        "Plan d'occupation par étage et état des chambres avec matrice de transitions.",
        "Recompactage des attributions pour libérer les trous quand l'occupation serre.",
      ],
    },
    cabanas: {
      eyebrow: "Chalets, appartements et locations",
      title: "Chaque unité avec *son nom propre*.",
      lead:
        "Ici le client n'achète pas « un chalet deux pièces » : il achète l'Alerce, avec ses photos et sa description. Le modèle d'unité unique fait que la catégorie enveloppe exactement une unité, et il ne reste aucune ambiguïté sur ce qu'il a réservé.",
      items: [
        "Modèle de vente : unité unique 1:1, choisissable par catégorie et non pour tout l'établissement.",
        "Fiche propre par unité dans le moteur : photos, description, capacité et prix.",
        "Blocages de maintenance qui retirent de l'inventaire réel et disparaissent du moteur.",
        "Si vous avez aussi deux chambres standard, elles cohabitent : le mode se définit par catégorie.",
      ],
    },
    hostels: {
      eyebrow: "Auberges",
      title: "Lits, services et *beaucoup de rotation*.",
      lead:
        "Volume élevé de réservations courtes, équipe qui tourne et une exploitation où les arrivées et départs du jour sont l'écran le plus regardé. Le tableau du jour ouvre le service et l'état des chambres le referme.",
      items: [
        "Tableau du jour avec arrivées et départs, et deux jours visibles à la fois.",
        "Espace étages avec sa propre liste de travail et rien d'autre au menu.",
        "Visites guidées par application : une nouvelle personne se forme seule dès son premier service.",
        "Création d'utilisateurs avec mot de passe temporaire, qui bloque l'interface jusqu'au changement.",
      ],
    },
    glamping: {
      eyebrow: "Glamping, villas et domaines",
      title: "Peu d'unités, *beaucoup de marque*.",
      lead:
        "Quand vous avez six dômes, l'exploitation est simple et le difficile est de bien les vendre. L'identité de marque, les galeries, le site avec nom de domaine et le LinkHub pèsent plus que le tape chart.",
      items: [
        "Identité de marque avec palette extraite du logo, ton, récit et publics.",
        "Site depuis un modèle rempli automatiquement avec vos données réelles, sur votre domaine.",
        "LinkHub avec QR à imprimer, et le moteur comme bouton principal.",
        "Couche agentique : l'hébergement devient lisible pour un modèle de langage, pas seulement pour Google.",
      ],
    },
    grupos: {
      eyebrow: "Groupes et petites chaînes",
      title: "Plusieurs établissements, *un seul endroit*.",
      lead:
        "Une société peut avoir plusieurs établissements, et une personne peut appartenir à plusieurs sociétés. De plus, une adhésion peut être limitée à des établissements précis : le responsable d'un hôtel voit son hôtel et rien d'autre.",
      items: [
        "Sélecteur de société, d'établissement et d'espace de travail sur le bureau.",
        "Adhésions limitées à une liste d'établissements, ou à tous.",
        "Dix capacités administratives attribuables par adhésion, en plus du rôle.",
        "Modèles d'établissement : un nouvel établissement démarre avec espaces et applications déjà configurés.",
      ],
    },
    roles: {
      eyebrow: "Par poste",
      title: "Et à l'intérieur, *chacun voit le sien*.",
      lead:
        "L'espace de travail actif décide du menu, de l'écran d'accueil, des permissions effectives et jusqu'au parcours de formation. Ce n'est pas une permission qui cache des boutons : c'est une composition différente du même système.",
      items: [
        {
          title: "Réception",
          desc: "Tableau du jour, réservations, calendrier, saisie manuelle et état des chambres. L'accueil affiche arrivées, départs et réservations récentes.",
        },
        {
          title: "Étages",
          desc: "État des chambres et plan d'occupation. L'accueil affiche les unités en nettoyage et les départs en attente, et le menu n'a ni tarifs ni revenue.",
        },
        {
          title: "Marketing",
          desc: "Builder, sites, galeries, avis, marque et LinkHub. L'accueil affiche la note des avis, la visibilité et l'état du LinkHub. Le domaine Réservations n'apparaît même pas.",
        },
        {
          title: "Revenue et propriétaire",
          desc: "Rapports et RMS complets : pace, comp-set, événements, règles et recommandations, plus ADR, RevPAR et production par canal.",
        },
        {
          title: "Administration",
          desc: "Voit tout le catalogue automatiquement, y compris les applications ajoutées à l'avenir. C'est l'espace qui gère utilisateurs, établissements et facturation.",
        },
        {
          title: "Le client",
          desc: "StayPass : son compte, ses réservations, le détail, l'annulation et son profil. Il s'inscrit une fois et accumule les hébergements où il a réservé.",
        },
      ],
    },
    faq: [
      {
        q: "J'ai des chalets et aussi deux chambres standard. Quel modèle choisir ?",
        a: "Les deux. Le mode de vente se définit par **catégorie**, pas par système : les chalets vont en unité unique 1:1, avec leur propre nom, et les chambres en pool interchangeable. Ils cohabitent dans le même calendrier et le même moteur, et un assistant permet de migrer une catégorie d'un mode à l'autre quand elle contient déjà des réservations.",
      },
      {
        q: "Nous sommes trois à tourner. Comment former quelqu'un de nouveau ?",
        a: "Chaque personne entre dans son espace de travail et ne voit que ce qui la concerne. La formation se construit à partir des apps de cet espace, et les **38 visites guidées** se dessinent par-dessus l'écran réel en surlignant l'élément dont elles parlent. Pas de manuel à lire ni de vidéo à regarder : on apprend au premier service.",
      },
      {
        q: "J'ai deux établissements dans deux villes.",
        a: "Une société peut avoir plusieurs établissements, et chaque adhésion peut être limitée : le responsable de l'un voit le sien et rien d'autre. Avec les **modèles d'établissement**, le second démarre avec les espaces de travail et les apps déjà configurés comme le premier.",
      },
    ],
    cta: {
      title: "Racontez-nous comment *vous exploitez*.",
      lead:
        "L'inscription comporte une étape où vous choisissez votre archétype d'exploitation, et c'est de là que sortent les espaces de travail et les applications initiales. Si aucun ne convient, écrivez-nous et on regarde.",
      steps: [
        "Vous choisissez type d'hébergement et modèle de vente.",
        "L'inscription monte vos espaces de travail.",
        "Vous ajustez applications et permissions par poste.",
      ],
    },
  },

  precios: {
    meta: {
      title: "Tarifs",
      description:
        "Une formule par hébergement, sans commission par réservation et sans frais de mise en route. Voyez ce que comprend chaque formule et ce que nous ne faisons pas encore.",
    },
    hero: {
      eyebrow: "Tarifs",
      title: "Une formule par hébergement, *sans commission par réservation*.",
      lead:
        "Ce qui se réserve par votre moteur est entièrement à vous. Pas de pourcentage par réservation, pas de frais de mise en route et pas de module caché qui apparaît sur la deuxième facture.",
      notes: ["Sans carte pour commencer", "Sans engagement", "Sans frais d'inscription"],
    },
    matrix: {
      eyebrow: "Comparatif",
      title: "Ce qu'il y a *dans chaque formule*.",
      lead:
        "Ce tableau vient du même catalogue avec lequel le système résout votre compte. Ce n'est pas une version marketing des formules : ce sont les formules.",
    },
    noCharge: {
      eyebrow: "Ce qui n'est pas facturé à part",
      title: "Les lignes que vous *ne* verrez pas sur la facture.",
      items: [
        {
          title: "Commission par réservation",
          desc: "Zéro. Le moteur est à vous et nous ne prenons pas un pourcentage de ce que vous vendez par lui.",
        },
        {
          title: "Envoi d'e-mails",
          desc: "Les e-mails au client partent du domaine de roombir, sans service de messagerie à part ni configuration SMTP par hôtel.",
        },
        {
          title: "Mise en route",
          desc: "L'inscription est autonome. Pour les premières cohortes, nous accompagnons le chargement des chambres sans frais.",
        },
        {
          title: "Site web et domaine",
          desc: "Le créateur et le renderer sont dans la formule. Le domaine, vous l'enregistrez où vous voulez et vous le pointez ici.",
        },
        {
          title: "Utilisateurs supplémentaires",
          desc: "Dans la limite de la formule, vous ajoutez qui vous voulez. Pas de facturation au siège.",
        },
        {
          title: "Frais par transaction",
          desc: "N'existent pas, puisqu'il n'y a pas encore de passerelle de paiement : l'encaissement se fait à l'arrivée.",
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi c'est publié",
      title: "Le prix *ne se demande pas* : il se lit.",
      lead:
        "Sur les cinq plus grands systèmes hôteliers du monde, aucun ne publie un chiffre sur son site : on le demande par formulaire et il apparaît à la deuxième réunion. Un hébergement de douze unités n'a pas de temps pour ça.",
      items: [
        {
          title: "Le même catalogue qui facture",
          desc: "Les cartes et le comparatif viennent du point d'accès que le système utilise pour résoudre votre compte. Il n'y a pas de version marketing des plans.",
        },
        {
          title: "Sans engagement",
          desc: "Mensuel, sans pénalité, sans appel de rétention. Ce sont les [conditions](/legal/terminos) qui le disent, pas un commercial.",
        },
        {
          title: "Ce qui n'existe pas n'est pas facturé",
          desc: "Channel manager et paiements ne figurent dans aucun plan parce qu'ils n'existent pas encore. Quand ils existeront, ils seront ici, avec leur chiffre.",
        },
      ],
    },
    compareAsk: "Vous comparez avec un autre système ?",
    compareLink: "Voir les comparatifs, avec une date",
    faqTitle: "Questions sur les tarifs",
    faq: [
      {
        q: "Prenez-vous une commission par réservation ?",
        a: "Non. Le moteur est à vous et ce qui entre par lui est entièrement à vous. La formule est un abonnement par hébergement, sans pourcentage par réservation ni frais de transaction — entre autres parce qu'**il n'y a pas encore de passerelle de paiement** : l'encaissement se fait à l'arrivée.",
      },
      {
        q: "Y a-t-il des frais de mise en route ?",
        a: "Non. L'inscription est autonome : neuf étapes guidées que vous faites vous-même, avec la progression enregistrée sur le serveur. Pour les premières cohortes, nous proposons un accompagnement en direct sur l'étape de chargement des chambres — celle qui coûte le plus — et ce n'est pas facturé non plus.",
      },
      {
        q: "Que se passe-t-il à la fin de la période gratuite ?",
        a: "Vous choisissez une formule payante ou vous arrêtez. Pas d'engagement ni de pénalité. Nous sommes en pilote de marché : ce que nous cherchons à cette étape, c'est de la preuve d'usage réelle, pas du chiffre d'affaires.",
      },
      {
        q: "Facturez-vous par utilisateur ?",
        a: "Non : chaque formule a un plafond d'utilisateurs et d'établissements, et dans cette limite vous ajoutez qui vous voulez sans frais par personne. Les plafonds sont dans le comparatif ci-dessus.",
      },
      {
        q: "Le revenue management est-il facturé à part ?",
        a: "Dans les grands systèmes, presque toujours : le RMS est un module supplémentaire chiffré à part. Ici c'est un produit du catalogue comme un autre et il est inclus ou non selon la formule — le comparatif ci-dessus vous le dit ligne par ligne.",
      },
      {
        q: "Pourquoi les autres systèmes ne publient-ils pas leurs tarifs ?",
        a: "Parce que le prix par chambre baisse avec la taille et qu'ils ont intérêt à négocier au cas par cas. C'est légitime, mais ça reporte le travail sur l'hôtelier : formulaire, appel, devis, deuxième appel. Nous préférons perdre une négociation de temps en temps et laisser le chiffre en clair. Pour voir ce que ça donne face à chacun, c'est dans les [comparatifs](/comparar).",
      },
    ],
    cta: {
      title: "Commencez gratuitement et *on verra après*.",
      lead:
        "Nous ne demandons pas de carte pour l'inscription. Si en deux semaines le système ne vous a rien changé, il n'y a rien à résilier.",
      steps: [
        "Vous vous inscrivez sans carte.",
        "Vous chargez l'établissement et les chambres.",
        "Vous choisissez une formule quand la période gratuite se termine.",
      ],
    },
  },

  nosotros: {
    meta: {
      title: "À propos",
      description:
        "Pourquoi Roombir existe, comment nous travaillons et dans quel état est chaque partie du produit — y compris ce qu'il ne fait pas encore.",
    },
    hero: {
      eyebrow: "À propos",
      title: "Un logiciel pour l'hébergement qui *n'a pas de service informatique*.",
      lead:
        "Roombir est né d'une observation simple : un hôtel de vingt chambres ou un complexe de six chalets a besoin exactement des mêmes pièces qu'une chaîne, et aucune des options du marché ne les donne ensemble d'une façon qui ait du sens à cette échelle.",
      secondary: "Voir le produit",
    },
    thesis: {
      eyebrow: "La thèse",
      title: "Un petit hébergement ne devrait pas avoir besoin de *cinq prestataires et d'un consultant*.",
      p1: "Aujourd'hui, la sortie habituelle, c'est un PMS d'un côté, un moteur de l'autre, un site fait par quelqu'un qui ne répond plus, un tableur de tarifs et les demandes qui tombent dans un WhatsApp que personne n'organise. Chaque pièce fonctionne ; l'ensemble non. Et le travail de tenir l'ensemble aligné finit par se faire à la main, par la personne de la réception.",
      p2: "Le pari de roombir, c'est que cet ensemble soit un seul système avec une seule base de données, qu'on puisse s'inscrire sans aide, et que chaque poste de travail ne voie que le sien. Tout le reste — le RMS, la couche d'agents, l'assistant — sort de là : ce sont des choses qu'on ne peut bien faire qu'une fois que les données ne font qu'une.",
    },
    principles: {
      eyebrow: "Comment nous travaillons",
      title: "Quatre décisions qui *ne se négocient pas*.",
      items: [
        {
          title: "Une donnée, un endroit",
          desc: "Une chambre se charge une fois. Si elle apparaît dans le moteur, sur le site, dans le RMS et dans le LinkHub, c'est parce que c'est la même ligne, pas parce qu'il y a une synchronisation au milieu. La plupart des problèmes d'un stack hôtelier sont deux systèmes qui disent des choses différentes de la même chambre.",
        },
        {
          title: "L'état se dit",
          desc: "Si quelque chose n'y est pas, on le dit sur le site et pas au troisième appel. Un pilote qui démarre avec une attente gonflée se termine par un départ silencieux quatre semaines plus tard, et ce départ ne nous apprend rien. Nous préférons moins d'inscriptions et savoir pourquoi restent ceux qui restent.",
        },
        {
          title: "Les permissions sont réelles",
          desc: "Cacher un bouton n'est pas une permission. Chaque opération est évaluée contre la politique du service, et l'assistant IA opère en empruntant l'identité réelle de celui qui demande, avec une permission de courte durée renouvelée à chaque appel. Il n'y a pas de compte de service aux super-pouvoirs derrière.",
        },
        {
          title: "La friction de l'inscription est un bug",
          desc: "Configurer un serveur de messagerie, attendre un appel d'onboarding, payer une mise en route : chacune de ces choses, ce sont des gens qui restent dehors. L'inscription, ce sont neuf étapes que vous faites seul, et les e-mails au client partent sans que vous configuriez quoi que ce soit.",
        },
      ],
    },
    pilot: {
      eyebrow: "Où nous en sommes",
      title: "En pilote de marché, *exprès*.",
      lead:
        "À cette étape, nous ne cherchons pas le volume. Nous essayons de répondre à quatre questions avec des données, et les quatre dépendent d'hébergements utilisant le système pour de vrai, avec de vraies réservations dedans.",
      questions: [
        "L'inscription se termine-t-elle toute seule, ou y a-t-il une étape précise où les gens abandonnent ?",
        "Les clients réservent-ils par le moteur, ou l'habitude revient-elle à la messagerie même si le lien existe ?",
        "Que demandent ceux qui l'utilisent pour de vrai, et en quoi est-ce différent de ce que demandait celui qui l'a essayé et n'est pas revenu ?",
        "À quoi sert l'assistant quand personne ne regarde ?",
      ],
      stats: [
        { value: "2026", label: "année du pilote de marché" },
        { value: "AR", label: "fait en Argentine, en cinq langues" },
        { value: "5", label: "langues de la plateforme" },
        { value: "1", label: "seule base de données pour tout le système" },
      ],
    },
    cta: {
      title: "Si tout cela *ressemble à votre problème*.",
      lead:
        "Écrivez-nous et on en parle sans détour. Si Roombir ne sert pas encore à votre cas, nous vous le dirons dans cette même conversation.",
      steps: [
        "Vous nous racontez comment vous exploitez aujourd'hui.",
        "On vous dit ce que ça règle et ce que ça ne règle pas.",
        "Si ça a du sens, on démarre l'inscription ensemble.",
      ],
    },
  },

  contacto: {
    meta: {
      title: "Contact",
      description:
        "Écrivez-nous et on en parle sans détour : ce que Roombir règle pour votre hébergement et ce qu'il ne règle pas encore. Vous pouvez aussi commencer l'inscription vous-même.",
    },
    eyebrow: "Contact",
    title: "Racontez-nous comment *vous recevez les réservations aujourd'hui*.",
    lead:
      "Vous n'avez pas besoin de savoir quel module il vous faut. Savoir combien d'unités vous avez, si vous vendez sur les OTA et quelle part de la journée passe à répondre sur la disponibilité suffit déjà pour vous dire si Roombir vous sert — ou s'il ne vous sert pas encore.",
    checks: [
      "Nous répondons dans la journée ouvrée.",
      "Si quelque chose dont vous avez besoin n'existe pas encore, on vous le dit tout de suite.",
      "Si vous voulez, on charge les chambres ensemble sur un appel court.",
    ],
    directLabel: "Ou écrivez-nous directement",
    shortcutTitle: "Vous préférez ne pas attendre une réponse ?",
    shortcutText:
      "L'inscription est autonome et guidée. Vous pouvez avoir le moteur en fonctionnement avant que nous répondions à ce formulaire.",
  },

  legal: {
    updated: "Dernière mise à jour",
    updatedDate: "30 août 2026",
    privacy: {
      meta: {
        title: "Politique de confidentialité",
        description:
          "Quelles données Roombir collecte sur ce site et dans la plateforme, avec quels prestataires elles sont traitées et comment demander leur suppression.",
      },
      title: "Politique de confidentialité",
      lead: "Quelles données nous collectons, pour quoi, avec qui nous les traitons et comment demander leur suppression.",
      blocks: [
        { h: "1. Qui nous sommes" },
        {
          p: "Roombir est une plateforme de gestion pour hébergements, exploitée depuis l'Argentine. Pour toute question relative à vos données personnelles, écrivez-nous à [hola@roombir.com](mailto:hola@roombir.com).",
        },
        { h: "2. Deux rôles différents" },
        { p: "Il vaut la peine de les séparer, car les obligations ne sont pas les mêmes :" },
        {
          ul: [
            "**Ce site et la relation commerciale avec vous.** Ici nous sommes responsables des données : nous les collectons pour vous contacter et pour comprendre d'où viennent les demandes.",
            "**La plateforme.** Quand un hébergement charge les données de ses clients dans roombir, le responsable de ces données est l'hébergement ; nous les traitons pour son compte et selon ses instructions.",
          ],
        },
        { h: "3. Quelles données nous collectons sur ce site" },
        {
          ul: [
            "**Celles que vous donnez dans le formulaire :** nom, e-mail, téléphone, nom de l'hébergement et le message que vous écrivez. Le seul obligatoire est l'e-mail.",
            "**Paramètres de campagne (UTM)** présents dans l'URL au moment de l'envoi, pour savoir par quelle voie vous êtes arrivé.",
            "**Données techniques de la visite** enregistrées par le serveur qui sert le site, comme tout serveur web.",
            "**Mesures de navigation**, uniquement si des outils de mesure sont configurés. Voir la [politique de cookies](/legal/cookies).",
          ],
        },
        {
          p: "Nous n'utilisons les données du formulaire que pour vous contacter au sujet de roombir, et nous ne les vendons ni ne les cédons à des tiers à des fins publicitaires.",
        },
        { h: "4. Quelles données collecte la plateforme" },
        {
          p: "Si vous vous inscrivez, nous collectons en plus ce qui est nécessaire au fonctionnement du système : les données de votre compte et de votre société, celles de vos établissements et unités, et celles des réservations que vous chargez ou qui arrivent par votre moteur — y compris les données du client nécessaires au séjour. Tout cela vous appartient.",
        },
        { h: "5. Avec qui nous les traitons" },
        { p: "Nous travaillons avec des prestataires agissant pour notre compte et uniquement pour fournir le service :" },
        {
          ul: [
            "**Envoi d'e-mails transactionnels**, pour les confirmations et avis destinés au client.",
            "**Stockage d'images et de fichiers** des galeries, de la marque et de la bibliothèque de la société.",
            "**Authentification**, y compris la possibilité de se connecter avec un compte social si l'hébergement l'active.",
            "**Infrastructure et base de données** où tourne la plateforme.",
            "**Mesure et publicité**, le cas échéant et selon ce qui est expliqué dans la politique de cookies.",
          ],
        },
        { h: "6. Combien de temps nous les conservons" },
        {
          p: "Les données de contact commercial sont conservées tant qu'il existe une relation ou un intérêt en cours, et supprimées lorsque vous le demandez. Les données d'exploitation d'un compte sont conservées tant que le compte existe et pour la durée exigée par les obligations légales et comptables applicables.",
        },
        { h: "7. Vos droits" },
        {
          p: "Vous pouvez nous demander l'accès à vos données, leur rectification, leur mise à jour ou leur suppression en écrivant à [hola@roombir.com](mailto:hola@roombir.com). En Argentine, l'Agence d'accès à l'information publique est l'autorité de contrôle en matière de protection des données personnelles et traite les réclamations de qui estime ses droits atteints.",
        },
        { h: "8. Sécurité" },
        {
          p: "L'accès à la plateforme est protégé par authentification et par un système de permissions avec rôles, capacités et périmètre par établissement. Les opérations sensibles sont enregistrées dans des journaux d'audit. Aucun système n'est infaillible ; si nous détections un incident affectant vos données, nous vous le communiquerions.",
        },
        { h: "9. Modifications" },
        {
          p: "Si nous mettons à jour cette politique, nous changeons la date de l'en-tête. Les modifications importantes sont aussi communiquées par e-mail aux comptes actifs.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Conditions générales",
        description:
          "Conditions d'utilisation de la plateforme Roombir : ce que comprend le service, ce qui est en pilote, les responsabilités de chaque partie et comment résilier un compte.",
      },
      title: "Conditions générales",
      lead: "Les règles d'utilisation de la plateforme, écrites pour être comprises.",
      blocks: [
        { h: "1. Ce qu'est le service" },
        {
          p: "Roombir est une plateforme dans le cloud pour gérer un hébergement : réservations, chambres, moteur de réservation public, sites web, revenue management, portail du client et un assistant d'intelligence artificielle. On y accède par navigateur ; aucun logiciel n'est livré à installer.",
        },
        { h: "2. Périmètre du service" },
        {
          p: "La plateforme est en **pilote de marché** : certaines fonctionnalités peuvent être partielles ou ne pas encore exister. Le périmètre en vigueur est détaillé par écrit à la souscription et fait partie de ce que vous acceptez : nous ne promettons pas de fonctionnalités qui n’existent pas.",
        },
        { h: "3. Votre compte" },
        {
          p: "Vous êtes responsable des identifiants de votre compte et de ceux des personnes que vous créez. Le système crée des utilisateurs avec un mot de passe temporaire que la personne doit changer à la première connexion ; tant qu'elle ne l'a pas fait, l'interface lui reste bloquée.",
        },
        {
          p: "Vous pouvez attribuer des rôles, des capacités administratives et un périmètre par établissement. La configuration de ces permissions est la vôtre : nous fournissons le mécanisme, nous ne décidons pas qui voit quoi dans votre exploitation.",
        },
        { h: "4. Vos données" },
        {
          p: "Les données que vous chargez — établissements, unités, tarifs, réservations, clients, contenu de vos sites — sont les vôtres. Nous les traitons pour vous fournir le service, selon la [politique de confidentialité](/legal/privacidad). Si c'est vous qui chargez des données de clients, vous en êtes le responsable envers eux et au regard de la loi applicable.",
        },
        { h: "5. Conditions commerciales" },
        {
          p: "Les produits inclus et les plafonds d'établissements et d'utilisateurs de chaque compte sont communiqués par écrit au moment de la souscription et font partie de l'accord.",
        },
        {
          p: "L'encaissement auprès du client ne passe pas par Roombir : il se fait aujourd'hui à l'arrivée, entre l'hébergement et le client.",
        },
        { h: "6. Usage acceptable" },
        { p: "Il n'est pas permis d'utiliser la plateforme pour :" },
        {
          ul: [
            "Publier du contenu illégal, trompeur ou que vous n'avez pas le droit d'utiliser.",
            "Charger de faux avis ou attribuer à votre hébergement des signaux de confiance qui ne sont pas véridiques.",
            "Tenter d'accéder aux données d'une autre société, ou contourner les contrôles de permissions du système.",
            "Charger de façon automatisée en dehors des interfaces prévues, au point de dégrader le service pour les autres.",
          ],
        },
        { h: "7. Disponibilité" },
        {
          p: "Nous faisons le raisonnable pour que le service soit disponible, mais à ce stade nous n'offrons pas d'accord de niveau de service avec compensation. Les maintenances susceptibles d'interrompre le service sont annoncées lorsqu'elles sont prévisibles.",
        },
        { h: "8. L'assistant IA" },
        {
          p: "L'assistant exécute des opérations avec les permissions réelles de celui qui l'utilise et laisse une trace de ce qu'il a fait. Cela dit, c'est un système probabiliste : **relisez ce qu'il exécute** avant de considérer une opération sensible comme faite, comme vous reliriez le travail de quelqu'un qui vient d'arriver. Les suggestions tarifaires du module revenue sont cela, des suggestions : la décision de les appliquer est la vôtre.",
        },
        { h: "9. Propriété intellectuelle" },
        {
          p: "Le logiciel, la marque et la documentation de Roombir sont les nôtres. Le contenu que vous chargez — textes, photos, logo, design de votre site — est le vôtre, et vous nous autorisez à l'héberger et à l'afficher uniquement pour fournir le service.",
        },
        { h: "10. Résiliation" },
        {
          p: "Vous pouvez résilier votre compte quand vous voulez en écrivant à [hola@roombir.com](mailto:hola@roombir.com). Avant de le fermer, nous vous laissons un délai raisonnable pour télécharger ce que vous souhaitez conserver.",
        },
        { h: "11. Responsabilité" },
        {
          p: "Le service est fourni tel quel. Dans la mesure où la loi le permet, notre responsabilité est limitée aux montants que vous nous avez versés dans les douze mois précédant le fait qui l'engendre. Rien de cela ne limite les responsabilités que la loi ne permet pas de limiter.",
        },
        { h: "12. Modifications et juridiction" },
        {
          p: "Nous pouvons mettre à jour ces conditions ; les modifications importantes sont annoncées par e-mail aux comptes actifs et la date de l'en-tête est mise à jour. Les lois de la République argentine et ses tribunaux compétents s'appliquent.",
        },
      ],
    },
    cookies: {
      meta: {
        title: "Politique de cookies",
        description:
          "Quels cookies et technologies de mesure utilise le site de roombir, lesquels sont nécessaires et comment désactiver le reste.",
      },
      title: "Politique de cookies",
      lead: "Ce que ce site stocke dans votre navigateur et ce que vous pouvez désactiver.",
      blocks: [
        { h: "1. Le site public" },
        {
          p: "Les pages de `roombir.com` sont statiques et n'ont pas besoin de cookies pour fonctionner. Nous n'utilisons pas de cookies propres pour vous profiler ni pour nous souvenir de qui vous êtes entre deux visites. Le seul qui puisse apparaître est celui qui garde la **langue que vous avez choisie** dans le sélecteur, pour ne pas vous renvoyer vers une autre à la prochaine visite.",
        },
        { h: "2. Mesure et publicité" },
        {
          p: "Le site peut charger des outils de mesure tiers — analyse de navigation, mesure de conversions de campagnes et pixels de plateformes publicitaires — lorsqu'ils sont configurés. Ces outils peuvent laisser des cookies ou des identifiants dans votre navigateur pour compter les visites et attribuer les conversions.",
        },
        {
          p: "**Ils ne se chargent que sur le site publié, jamais sur les aperçus internes.** C'est une décision technique délibérée : pendant que quelqu'un édite une page depuis le panneau, ces visites fausseraient les mesures.",
        },
        {
          p: "Nous pouvons aussi envoyer des événements de conversion depuis notre serveur vers la plateforme publicitaire correspondante. Cet envoi n'utilise pas de cookies et n'inclut pas le contenu de votre message.",
        },
        { h: "3. La plateforme" },
        {
          p: "L'application sur `app.roombir.com` utilise bien des cookies **nécessaires** : ceux qui maintiennent votre session ouverte. Sans eux, le système ne peut pas être utilisé, et ils ne peuvent pas être désactivés sans fermer la session.",
        },
        {
          p: "La plateforme stocke aussi quelques préférences dans le stockage local de votre navigateur — le thème visuel, l'état de la barre latérale, la progression des visites guidées. Cela vit sur votre appareil et ne va nulle part.",
        },
        { h: "4. Comment les désactiver" },
        {
          p: "Vous pouvez bloquer ou supprimer les cookies depuis les réglages de votre navigateur, et utiliser les options d'exclusion que proposent les plateformes d'analyse et de publicité elles-mêmes. Si vous bloquez tous les cookies, le site public fonctionne pareil ; l'application, non — parce qu'elle ne pourra pas maintenir votre session.",
        },
        { h: "5. Questions" },
        {
          p: "Pour toute question à ce sujet, écrivez-nous à [hola@roombir.com](mailto:hola@roombir.com). Voir aussi la [politique de confidentialité](/legal/privacidad).",
        },
      ],
    },
  },

  comparar: {
    meta: {
      title: "Comparatifs",
      description:
        "Roombir face à Cloudbeds, Little Hotelier, Amenitiz et Mews : tarifs publiés, engagement, commission, revenue, channel manager, paiements et IA. Vérifié sur leurs sites, avec une date, et avec dans quel cas l'autre est le bon choix.",
    },
    hero: {
      eyebrow: "Comparatifs",
      title: "Comparé *nommément*.",
      lead:
        "Quatre comparatifs écrits avec une règle : uniquement ce que dit le site public de chacun, lu à une date précise et cité tel quel. Sans estimations de tiers ni captures périmées. Chacun dit dans quel cas l'autre est le bon choix, parce qu'un comparatif qui gagne toujours ne sert à personne.",
      notes: ["Uniquement leur site public", "Avec une date de vérification", "Avec « quand choisir l'autre »"],
    },
    vsPrefix: "Roombir vs",
    read: "Lire le comparatif",
    verified: "Vérifié le {date} sur le site public de {name}",
    verifiedDate: "2 septembre 2026",
    chooseThem: "Choisissez {name} si…",
    chooseUs: "Choisissez Roombir si…",
    table: {
      eyebrow: "Critère par critère",
      title: "Roombir et {name}, *dans le même tableau*.",
      lead:
        "Les lignes de Roombir viennent de l'état du produit que nous publions dans À propos, y compris celles qui disent « n'existe pas encore ». Celles de l'autre, de son site public à la date indiquée. Si quelque chose a changé, dites-le nous et nous corrigeons avec la nouvelle date.",
      headCriterion: "Critère",
      headUs: "roombir",
    },
    legend: {
      ok: "Oui, inclus ou déclaré",
      mid: "Partiel, option payante ou sous conditions",
      no: "Non, ou non déclaré",
      info: "Donnée sans jugement",
    },
    sourcesNote:
      "Données de {name} relevées sur son site public le {date}. Celles de roombir, de l'[état du produit](/nosotros#estado) à la même date. Si vous trouvez quelque chose de périmé, écrivez à hola@roombir.com. Source :",
    method: {
      eyebrow: "Comment nous comparons",
      title: "Uniquement ce que dit leur site, *avec une date*.",
      lead:
        "C'est la seule façon pour qu'un comparatif écrit par l'une des parties vaille quelque chose. Trois règles, qui s'appliquent aussi à notre colonne.",
      items: [
        "**Source unique :** le site public de chaque concurrent, lu le 2 septembre 2026. Si une donnée n'est pas sur son site, la case dit « non déclaré » ; nous n'inventons pas.",
        "**Pas de prix de tiers :** les chiffres qui circulent dans les annuaires de logiciels sont des estimations. Si le concurrent ne publie pas de tarif, la ligne dit exactement cela.",
        "**Nos lignes viennent de l'état du produit :** les mêmes qui disent que nous n'avons ni channel manager ni paiements. Si nous progressons, ça change là-bas et ici dans le même commit.",
      ],
    },
    cta: {
      title: "Si après lecture *vous êtes encore là*.",
      lead:
        "L'inscription est gratuite, guidée et ne demande pas de carte. Et si le comparatif vous a montré qu'il vous faut ce que nous n'avons pas encore, il a aussi servi.",
      steps: [
        "Vous vous inscrivez et chargez un établissement.",
        "Vous testez le moteur et l'assistant avec vos données.",
        "Vous choisissez un plan seulement si quelque chose a changé pour vous.",
      ],
    },
    criteria: {
      price: { label: "Tarifs publiés sur le site", us: "Oui : en HTML, avec un chiffre, issus du même catalogue qui facture le compte", tone: "ok" },
      trial: { label: "Essayer sans carte", us: "Oui : plan gratuit et inscription en autonomie, sans appel préalable", tone: "ok" },
      lockin: { label: "Engagement", us: "Sans engagement : plan mensuel, résiliation sans pénalité", tone: "ok" },
      commission: { label: "Commission sur le moteur de réservation", us: "0 %. Ce qui entre par votre moteur est entièrement à vous", tone: "ok" },
      rms: { label: "Revenue management", us: "Inclus dans le catalogue de produits, selon le plan ; pas un module à part", tone: "ok" },
      channel: { label: "Channel manager (OTA)", us: "N'existe pas encore. Seulement un journal d'événements pour le jour où ça se connecte", tone: "no" },
      payments: { label: "Paiement en ligne du client", us: "N'existe pas encore : le paiement se fait au check-in", tone: "no" },
      ai: { label: "Assistant IA", us: "Exécute, avec vos permissions, transcription du tour visible", tone: "ok" },
      fx: { label: "Multidevise", us: "10 devises ; conversion figée au check-in ; blue, MEP, CCL ou officiel pour l'ARS", tone: "ok" },
      dual: { label: "Modèle de vente pool et unité 1:1", us: "Oui, choisi par catégorie, dans le même calendrier", tone: "ok" },
      website: { label: "Site web avec domaine propre", us: "Inclus : builder, multilingue, LinkHub avec QR", tone: "ok" },
      fiscal: { label: "Facturation fiscale locale", us: "Pas encore", tone: "no" },
      languages: { label: "Langues de la plateforme", us: "5 : espagnol, anglais, portugais, français, allemand", tone: "info" },
      segment: { label: "Segment typique", us: "Indépendants et boutique d'Amérique latine : hôtels, chalets, auberges, glamping", tone: "info" },
      support: { label: "Inscription et support", us: "Inscription guidée en 9 étapes, 38 visites, chargement des chambres accompagné sans frais", tone: "info" },
      llms: { label: "Leur propre site, lisible par une IA (llms.txt)", us: "Oui : soigné, avec les mêmes chiffres et tarifs que le site", tone: "ok" },
    },
    rivals: {
      cloudbeds: {
        name: "Cloudbeds",
        site: "cloudbeds.com",
        oneLiner: "Le tout-en-un mondial : 20 000+ établissements, channel manager à 450+ canaux, tarif sur devis.",
        meta: {
          title: "Roombir vs Cloudbeds",
          description:
            "Cloudbeds et Roombir comparés critère par critère : tarifs publiés, engagement, commission, revenue, channel manager, paiements et IA. Vérifié sur cloudbeds.com le 2 septembre 2026.",
        },
        hero: {
          title: "Roombir vs *Cloudbeds*",
          lead:
            "Cloudbeds est le système le plus complet du segment indépendant à l'échelle mondiale : channel manager, paiements, marketing et une couche d'IA analytique, dans plus de 150 pays. Roombir est plus petit, plus récent et fait pour l'Amérique latine, avec deux choses que Cloudbeds ne publie pas — le prix et l'engagement — et deux choses que Cloudbeds a et que nous n'avons pas encore : channel manager et passerelle de paiement.",
        },
        them: [
          "Vous vendez beaucoup sur les OTA et il vous faut un channel manager aujourd'hui, pas quand nous le lancerons.",
          "Vous voulez encaisser en ligne par carte depuis le moteur.",
          "Vous exploitez plusieurs établissements dans plusieurs pays et il vous faut une marketplace de 450 intégrations.",
        ],
        us: [
          "Vous voulez connaître le prix avant de parler à un commercial, et ne pas signer d'engagement.",
          "Votre problème, c'est la vente directe : les demandes se perdent dans le chat et il n'y a ni site ni moteur à vous.",
          "Vous vendez en pesos avec un taux instable, ou vous mélangez chalets et chambres et aucun système ne le permet.",
        ],
        rows: {
          price: { v: "Non : quatre plans, et les quatre finissent sur « Request a quote »", tone: "no" },
          trial: { v: "Non : l'entrée se fait par « Get a demo »", tone: "no" },
          lockin: { v: "Non déclaré sur sa page tarifs", tone: "mid" },
          commission: { v: "0 % sur le moteur et le channel manager (déclaré) ; commission métamoteur après le séjour", tone: "ok" },
          rms: { v: "Option payante : Revenue Intelligence, dans Revenue Marketing", tone: "mid" },
          channel: { v: "Oui, 450+ canaux", tone: "ok" },
          payments: { v: "Oui, Cloudbeds Payments", tone: "ok" },
          ai: { v: "Signals et Ask Signals : IA conversationnelle pour interroger les données", tone: "mid" },
          fx: { v: "Non déclaré", tone: "mid" },
          dual: { v: "Hôtels et locations comme segments ; pas de mode mixte déclaré", tone: "mid" },
          website: { v: "Option payante : Websites, dans Revenue Marketing", tone: "mid" },
          fiscal: { v: "Non déclaré", tone: "mid" },
          languages: { v: "Site en 4 langues : anglais, espagnol, portugais, français", tone: "info" },
          segment: { v: "Indépendants et groupes, 150+ pays, 20 000+ établissements", tone: "info" },
          support: { v: "Onboarding, Customer Success et Cloudbeds University", tone: "info" },
          llms: { v: "Pas de llms.txt (404 à la vérification)", tone: "no" },
        },
        faq: [
          {
            q: "Cloudbeds est-il meilleur que Roombir ?",
            a: "En couverture, oui : il a un channel manager, des paiements et 450 intégrations que nous n'avons pas. En transparence et en focalisation, nous pensons que non : son prix se demande par formulaire, et le revenue et le site web sont des modules à part. Si votre problème aujourd'hui est la distribution OTA, Cloudbeds. Si c'est la réservation directe et savoir ce que vous paierez, roombir.",
          },
          {
            q: "Combien coûte Cloudbeds ?",
            a: "Il ne le publie pas. Sa page tarifs a quatre plans — Flex, One, Experience et Enterprise — et les quatre finissent sur « Request a quote ». Les chiffres qui circulent sur internet sont des estimations de tiers, pas de Cloudbeds, et c'est pourquoi nous ne les répétons pas ici.",
          },
          {
            q: "Puis-je migrer de Cloudbeds vers Roombir ?",
            a: "Oui, et nous chargeons les chambres et les tarifs avec vous, sans frais. À savoir avant : si vous dépendez de son channel manager, chez Roombir cette synchronisation avec les OTA se fait à la main aujourd'hui. C'est dans l'[état du produit](/nosotros#estado).",
          },
        ],
      },
      littlehotelier: {
        name: "Little Hotelier",
        site: "littlehotelier.com",
        oneLiner: "La marque de SiteMinder pour 1 à 30 chambres : 30 jours d'essai, calculateur de prix et options payantes facturées par réservation.",
        meta: {
          title: "Roombir vs Little Hotelier",
          description:
            "Little Hotelier et Roombir comparés : tarifs, essai gratuit, frais par réservation, revenue, channel manager, paiements et IA. Vérifié sur littlehotelier.com le 2 septembre 2026 ; commissions revues le 22 septembre.",
        },
        hero: {
          title: "Roombir vs *Little Hotelier*",
          lead:
            "Little Hotelier est le système pour petits établissements de SiteMinder, le plus grand distributeur hôtelier du monde, et le plus proche de Roombir par la taille de ses clients : des établissements de 1 à 30 chambres. Il publie un calculateur de prix, offre 30 jours d'essai et a un channel manager et des paiements. Son moteur direct ne déclare pas de commission : les frais variables par réservation sont dans ses options payantes de métamoteur et de canaux, et le revenue et le site web s'ajoutent aussi comme options payantes.",
        },
        them: [
          "Il vous faut un channel manager et des paiements aujourd'hui : les deux existent et fonctionnent à l'échelle mondiale.",
          "Vous voulez l'appui du réseau de distribution de SiteMinder : 450+ canaux, GDS, métamoteurs.",
          "Vous travaillez en anglais, allemand, italien, thaï ou indonésien : c'est là qu'il est localisé.",
        ],
        us: [
          "Vous voulez le prix complet en une ligne, sans options payantes qui facturent par réservation.",
          "Vous voulez le revenue et le site web dans le plan, pas en option.",
          "Vous vendez des chalets avec leur nom à côté de chambres, ou vous encaissez en pesos et devez figer le taux de change.",
        ],
        rows: {
          price: { v: "Oui : calculateur par nombre de chambres (le chiffre est chargé par JavaScript)", tone: "ok" },
          trial: { v: "Oui : 30 jours gratuits", tone: "ok" },
          lockin: { v: "Non déclaré sur la page tarifs", tone: "mid" },
          commission: { v: "Le moteur direct ne déclare pas de commission ; Metasearch et Channels Plus facturent des frais variables par réservation, et ses paiements, par transaction", tone: "mid" },
          rms: { v: "Option payante : Dynamic Revenue Plus", tone: "mid" },
          channel: { v: "Oui", tone: "ok" },
          payments: { v: "Oui, Little Hotelier Payments, avec frais par transaction", tone: "ok" },
          ai: { v: "Ne déclare pas d'assistant qui opère le système", tone: "no" },
          fx: { v: "Non déclaré", tone: "mid" },
          dual: { v: "Hôtels, B&B, chalets et autres comme types ; pas de mode mixte déclaré", tone: "mid" },
          website: { v: "Option payante : Website Builder", tone: "mid" },
          fiscal: { v: "Non déclaré", tone: "mid" },
          languages: { v: "Site en 6 langues : anglais, allemand, espagnol, italien, thaï, indonésien", tone: "info" },
          segment: { v: "Établissements de 1 à 30 chambres, mondial", tone: "info" },
          support: { v: "Support 24/7 par chat, e-mail et téléphone ; spécialiste onboarding", tone: "info" },
          llms: { v: "Oui, généré automatiquement : une liste de pages", tone: "mid" },
        },
        faq: [
          {
            q: "Little Hotelier prend-il une commission ?",
            a: "Sur son moteur direct, sa page tarifs ne déclare pas de commission. Les **frais de réservation variables** — calculés sur le total des réservations nettes des annulations — s'appliquent à ses options payantes de métamoteur et de canaux, et ses paiements facturent par transaction (littlehotelier.com/pricing, 22 septembre 2026). Roombir ne prend aucun pourcentage sur aucune réservation.",
          },
          {
            q: "Lequel est le moins cher ?",
            a: "Ça dépend de ce dont vous avez besoin. Little Hotelier calcule le prix par nombre de chambres et ajoute le revenue et le site web comme options payantes ; Roombir les inclut dans le catalogue, avec une cotisation fixe par hébergement. Son calculateur et [nos plans](/precios) sont publiés : faites le calcul avec vos chiffres.",
          },
          {
            q: "Little Hotelier a un channel manager et Roombir non ?",
            a: "Exact, et c'est la différence la plus importante si vous vendez aujourd'hui sur Booking ou Expedia. C'est dans notre [état du produit](/nosotros#estado) et nous ne vous dirons pas le contraire.",
          },
        ],
      },
      amenitiz: {
        name: "Amenitiz",
        site: "amenitiz.com",
        oneLiner: "Tout-en-un européen pour indépendants de 3 à 30 chambres, site web inclus. Contrat annuel et tarif sur devis.",
        meta: {
          title: "Roombir vs Amenitiz",
          description:
            "Amenitiz et Roombir comparés : tarifs, engagement, commission, revenue, channel manager, paiements, facturation fiscale et IA. Vérifié sur amenitiz.com le 2 septembre 2026.",
        },
        hero: {
          title: "Roombir vs *Amenitiz*",
          lead:
            "Amenitiz est le système le plus proche de Roombir dans l'idée : tout au même endroit, site web inclus, pour des hébergements indépendants de 3 à 30 chambres. Il est européen — Espagne, France, Italie, Portugal — et apporte deux choses que nous n'avons pas : channel manager et paiements, plus des certifications fiscales pour ces quatre pays. Il demande un contrat d'un an et le prix se confirme par téléphone.",
        },
        them: [
          "Vous êtes en Espagne, France, Italie ou Portugal et il vous faut une facturation fiscale certifiée : VeriFactu, NF525, FatturaPA, SEF.",
          "Il vous faut un channel manager et l'encaissement par carte dès le premier jour.",
          "Vous préférez qu'une équipe construise votre site web plutôt que de le faire vous-même.",
        ],
        us: [
          "Vous ne voulez pas signer un an avant de savoir si ça vous convient.",
          "Vous voulez le prix sur le site et non « confirmé lors de la démo ».",
          "Vous êtes en Amérique latine, vendez en pesos ou en réaux, et il vous faut du multidevise avec taux figé et un assistant qui exécute.",
        ],
        rows: {
          price: { v: "Pas sur la page tarifs (« prix sur demande ») ; son llms.txt mentionne à partir de 5 € par chambre et par mois", tone: "mid" },
          trial: { v: "Non : l'entrée se fait par « Book a demo »", tone: "no" },
          lockin: { v: "Contrat d'1 an (selon son propre llms.txt)", tone: "no" },
          commission: { v: "0 % sur les réservations directes (déclaré)", tone: "ok" },
          rms: { v: "Option payante : PriceAdvisor", tone: "mid" },
          channel: { v: "Oui, 150+ OTA", tone: "ok" },
          payments: { v: "Oui, AmenitizPay : 1,5 % + 0,25 € par transaction (selon son site)", tone: "ok" },
          ai: { v: "PriceAdvisor pour les prix ; pas d'assistant déclaré qui opère le système", tone: "mid" },
          fx: { v: "Non déclaré", tone: "mid" },
          dual: { v: "Hôtels et B&B ; pas de mode mixte déclaré", tone: "mid" },
          website: { v: "Oui, inclus et construit par son équipe", tone: "ok" },
          fiscal: { v: "Oui : NF525 (France), VeriFactu (Espagne), FatturaPA (Italie), SEF (Portugal)", tone: "ok" },
          languages: { v: "Site en 5 langues : anglais, français, espagnol, italien, portugais", tone: "info" },
          segment: { v: "Indépendants de 3 à 30 chambres en Espagne, France, Italie et Portugal", tone: "info" },
          support: { v: "Support natif en 5 langues, migration gratuite, « en ligne en 30 jours ou le premier mois est offert »", tone: "info" },
          llms: { v: "Oui, soigné : avec tarif et comparatifs face aux concurrents", tone: "ok" },
        },
        faq: [
          {
            q: "Amenitiz a-t-il un engagement ?",
            a: "D'après son propre fichier llms.txt, le contrat est d'**un an** et le prix final se confirme lors de la démo. Roombir est mensuel et sans engagement, et le prix est sur le site.",
          },
          {
            q: "Amenitiz convient-il en Argentine ou au Mexique ?",
            a: "Son site et son llms.txt décrivent un produit pour l'Espagne, la France, l'Italie et le Portugal, avec des certifications fiscales de ces pays. Nous n'avons trouvé ni tarifs, ni devises, ni conformité pour l'Amérique latine. Roombir est né ici : pesos, réaux, cours blue, MEP ou CCL, et des horaires de ce côté-ci.",
          },
          {
            q: "Que fait Amenitiz de mieux ?",
            a: "Trois choses que nous ne minimiserons pas : un channel manager avec 150+ OTA, des paiements intégrés et une facturation fiscale certifiée dans ses quatre pays. Et une promesse de mise en service — « en 30 jours ou le premier mois est offert » — qui nous semble un bon standard.",
          },
        ],
      },
      mews: {
        name: "Mews",
        site: "mews.com",
        oneLiner: "Le PMS mid-market et enterprise le mieux valorisé au monde. API ouverte seulement en Enterprise, tarif sur devis.",
        meta: {
          title: "Roombir vs Mews",
          description:
            "Mews et Roombir comparés : tarifs, essai, engagement, revenue, API ouverte, paiements et IA. Vérifié sur mews.com le 2 septembre 2026.",
        },
        hero: {
          title: "Roombir vs *Mews*",
          lead:
            "Mews est le PMS moderne de référence pour les hôtels urbains, les chaînes et les auberges, avec paiements intégrés, POS et une marketplace de 1 000 intégrations. C'est une autre taille de client et un autre prix. La comparaison compte pour une raison : sa page tarifs place l'API ouverte et la marketplace complète dans le plan Enterprise, tandis que le plan d'entrée offre huit intégrations et un support par chatbot.",
        },
        them: [
          "Vous êtes une chaîne, un grand hôtel urbain ou un groupe avec des équipes finance et informatique.",
          "Il vous faut POS, paiements intégrés et comptabilité intégrés à grande échelle.",
          "Vous utiliserez la marketplace de 1 000 intégrations et pouvez payer le plan qui la débloque.",
        ],
        us: [
          "Vous avez entre 1 et 50 unités et personne à l'informatique.",
          "Vous voulez connaître le prix avant la démo et ne signer aucun engagement.",
          "Vous voulez que la couche ouverte — llms.txt, disponibilité lisible — vienne avec le moteur de réservation et pas seulement dans le plan le plus cher.",
        ],
        rows: {
          price: { v: "Non : trois plans avec « Get Pricing »", tone: "no" },
          trial: { v: "Non : l'entrée se fait par « Book a demo »", tone: "no" },
          lockin: { v: "Non déclaré sur sa page tarifs", tone: "mid" },
          commission: { v: "Ne déclare pas de commission sur le moteur", tone: "ok" },
          rms: { v: "Produit à part (Mews RMS) ; absent des trois plans publiés", tone: "mid" },
          channel: { v: "Via la Marketplace : 8 intégrations en Essentials (avec Booking.com et Expedia) ; illimité seulement en Enterprise", tone: "mid" },
          payments: { v: "Oui, paiements intégrés dès Essentials", tone: "ok" },
          ai: { v: "Résumés IA des préférences client (Advanced) ; pas d'assistant déclaré qui opère", tone: "mid" },
          fx: { v: "Multidevise comme fonctionnalité ; pas de figeage déclaré", tone: "mid" },
          dual: { v: "Hôtels, auberges, extended stay ; pas de mode mixte déclaré", tone: "mid" },
          website: { v: "Non : moteur de réservation oui, site web non", tone: "no" },
          fiscal: { v: "Non déclaré", tone: "mid" },
          languages: { v: "Site en 7 langues : anglais (US et GB), français, allemand, espagnol, néerlandais, italien", tone: "info" },
          segment: { v: "Hôtels, groupes et chaînes, auberges ; 15 000 établissements dans 85 pays", tone: "info" },
          support: { v: "Chatbot 24/7 en Essentials ; Mews University ; communauté publique", tone: "info" },
          llms: { v: "Pas de llms.txt (404 à la vérification)", tone: "no" },
        },
        faq: [
          {
            q: "Pourquoi comparer Roombir à Mews si ce ne sont pas les mêmes tailles ?",
            a: "Parce que quand un hôtelier cherche « le meilleur PMS », Mews apparaît en premier, et il vaut mieux savoir ce qu'on obtient : un excellent système pour des hôtels avec une équipe, dont le plan d'entrée offre huit intégrations et dont l'API ouverte vit en Enterprise. Si votre hôtel a douze chambres, ce n'est pas votre tranche.",
          },
          {
            q: "Mews est-il plus complet que Roombir ?",
            a: "Oui, en paiements, POS, comptabilité et intégrations. Roombir n'a ni paiements ni channel manager. Ce que nous avons, c'est ce que Mews réserve au plan le plus cher, et ici ça vient avec le moteur de réservation : la couche ouverte — llms.txt, disponibilité lisible. Et un assistant qui exécute, selon le plan.",
          },
          {
            q: "Combien coûte Mews ?",
            a: "Il ne le publie pas : Essentials, Advanced et Enterprise, tous trois avec « Get Pricing ». Les chiffres qui circulent sont des estimations de tiers et nous ne les répétons pas.",
          },
        ],
      },
    },
  },

  video: {
    meta: {
      title: "Vidéo",
      description: "Roombir en une minute : cinq prestataires qui n'en font plus qu'un, et un hôtel entier qu'on demande dans une conversation.",
    },
    hookLead: "Votre hôtel",
    hook: [
      "Le chaos opérationnel",
      "vous tue.",
    ],
    sprawlIn: [
      "Réservations",
      "Demandes des clients",
      "Fournisseurs",
      "Pannes / réparations",
    ],
    sprawlAsk: [
      "C'est *urgent* ?",
      "*COMMENT* on règle ça ?",
      "*QUI* s'en charge ?",
      "On a toute l'*info du client* ?",
    ],
    sprawlChain: [
      "Confirmer quoi que ce soit prend des *HEURES*",
      "Les décisions se *PERDENT*",
      "*VOUS NE VERREZ RIEN* à temps pour débloquer",
      "L'*OVERBOOKING* arrive et génère des plaintes",
      "*8 HEURES* perdues sans savoir si ça a servi",
    ],
    sprawlFoot: [
      "Le contexte se *PERD*",
      "Avis et plaintes restent *ÉPARPILLÉS*",
    ],
    sprawlApps: "*PAYER PLUSIEURS APPS* que vous n'utilisez pas à fond",
    tooManyApps: "Trop d'applis…",
    tooManyVendors: "Trop de prestataires…",
    vendors: [
      "PMS",
      "Channel manager",
      "Moteur de réservation",
      "RMS",
      "Site web",
    ],
    contextLost: "Le contexte se perd.",
    noStaff: [
      "Vous n'avez pas de revenue manager.",
      "Vous n'avez pas de community manager.",
    ],
    youAre: "Vous n'avez que *vous*.",
    mazeChips: [
      "Qui a confirmé la 203 ?",
      "On facture combien samedi ?",
      "L'acompte est arrivé ?",
      "Qui a l'Excel ?",
      "La 104 est propre ?",
      "Le client a dit quoi ?",
    ],
    kills: {
      pre: [
        "Des outils épars tuent",
        "Une information éparpillée tue",
      ],
      words: [
        "*votre temps*.",
        "*votre revenu*.",
      ],
    },
    punchline: {
      pre: "Fini les ",
      struck: "tableurs épars",
      post: ".",
    },
    meet: "Voici",
    promise: [
      "Votre hébergement",
      "*en entier*",
      "dans un seul *système*.",
    ],
    builtTo: {
      lead: "Conçu pour",
      pre: "éliminer le ",
      struck: "chaos opérationnel",
      post: ".",
    },
    modules: {
      reservas: "Réservations",
      linkhub: "LinkHub",
      revenue: "Revenue",
      tourism: "État touristique",
      ia: "Roombir IA",
      staypass: "StayPass",
      rooms: "Chambres",
      reports: "Rapports",
    },
    moreModules: [
      "Tarifs",
      "Housekeeping",
      "Sites",
      "Clients",
      "Agents",
      "Espaces",
      "Concurrence",
    ],
    brand: "Un seul *système*.",
    shotHead: [
      "Réservations, tarifs et clients",
      "sur un seul écran.",
    ],
    designed: [
      "Conçu avec",
      "*précision millimétrique*.",
    ],
    hinge: {
      line: "Pourquoi ne pas simplement demander ?",
    },
    unlock: {
      lead: "Une conversation débloque",
      head: "Plus de",
      words: [
        "remplissage",
        "visibilité",
        "tarif",
        "contexte",
        "performance",
      ],
      experience: "efficacité",
    },
    era: {
      lead: "Une nouvelle ère de",
      words: [
        "réservations",
        "revenue",
        "stratégie",
        "IA",
      ],
    },
    outro: "Roombir. Votre hôtel, dans une *conversation*.",
    end: {
      tagline: "Conçu pour votre établissement",
      cta: "Commencez aujourd'hui sur roombir.com",
    },
    booking: {
      tag: "aujourd'hui",
      guest: "Martina García",
      detail: "19 → 22 mars · 3 nuits · Double Supérieure",
      amount: "288 000 $",
    },
    linkhub: {
      tag: "réserver",
      tap: "Réserver en ligne",
      title: "Réserver",
      checkin: "Arrivée",
      checkout: "Départ",
      inDate: "sam. 21 mars",
      outDate: "lun. 23 mars",
      guests: "2 personnes",
      search: "Rechercher",
      nights: "2 nuits",
      room: "Double Supérieure",
      price: "96 600 $ / nuit",
      book: "Réserver",
    },
    iaCard: {
      ask: "Passe García en 203 et préviens-le par mail",
      steps: [
        {
          label: "Réservation déplacée",
          tool: "déplacer réservation",
        },
        {
          label: "Mail envoyé",
          tool: "envoyer mail",
        },
      ],
      answer: "C'est fait. García est en 203 et a déjà reçu l'avis.",
      hello: "Comment puis-je aider ?",
      hint: "Opérations, disponibilité, tarifs et politiques.",
      placeholder: "Demandez-lui…",
      chips: ["Disponibilité", "Tarif du week-end", "Paiements en attente", "Annulations"],
    },
    rooms: {
      tag: "étage 2",
      floor: "Étage 2",
      superior: "Double Supérieure",
      double: "Double",
      short: {
        available: "Libre",
        occupied: "In",
        cleaning: "Nett.",
        maintenance: "Maint.",
        blocked: "Bloq.",
        checkoutPending: "C/O",
      },
      legend: {
        available: "Disponible",
        occupied: "Occupée",
        cleaning: "Nettoyage",
      },
    },
    stay: {
      tag: "en séjour",
      greeting: "Bonjour, Martina",
      sub: "Votre séjour à l'Hotel del Parque",
      badge: "Arrivée",
      codeLabel: "Code pour les démarches",
      copy: "Copier",
      stayLabel: "Hébergement et séjour",
      hotel: "Hotel del Parque · 103 Double Supérieure",
      dates: "19 → 22 mars · 3 nuits",
    },
    status: {
      pending: "En attente",
      confirmed: "Confirmée",
      checkedIn: "Arrivée",
      checkedOut: "Départ",
      cancelled: "Annulée",
      noShow: "No show",
    },
    reports: {
      tag: "mars",
      closed: "Départ fait · cycle clos",
      kpis: [
        {
          label: "Occupation",
          value: "78 %",
          hint: "fév : 71 %",
        },
        {
          label: "ADR",
          value: "96 600 $",
          hint: "par nuit",
        },
        {
          label: "RevPAR",
          value: "75 300 $",
          hint: "",
        },
        {
          label: "Revenus",
          value: "4,1 M$",
          hint: "127 nuits",
        },
      ],
    },
    tourism: {
      title: "État touristique · Paris",
      updated: "mis à jour il y a 12 min",
      metrics: [
        {
          label: "Événements sous 30 jours",
          value: "6",
          hint: "Match au Parc des Princes · 21 mars · à 3 km",
          trend: "up",
        },
        {
          label: "Prochain pont",
          value: "4 → 6 avr.",
          hint: "3 jours · lundi de Pâques",
          trend: "neutral",
        },
        {
          label: "Météo du week-end",
          value: "15°",
          hint: "ensoleillé · printemps",
          trend: "up",
        },
        {
          label: "Attention sur la destination",
          value: "+18 %",
          hint: "recherches · 30 jours vs. précédents",
          trend: "up",
        },
      ],
      alert: "Pâques, du 4 au 6 : la ville se remplit.",
      more: "Voir plus",
    },
    chat: {
      placeholder: "Demandez quelque chose à Roombir IA",
      thinking: "Roombir IA réfléchit",
      wait: "Consultation du système",
      turns: [
        {
          ask: "Crée une réservation pour ce soir, 2 nuits, double supérieure",
          steps: [
            {
              label: "Disponibilité",
              tool: "chercher disponibilité",
            },
            {
              label: "Réservation créée",
              tool: "créer réservation",
            },
          ],
          answer: "C'est fait. C'est la #BK-4821 : ce soir, 2 nuits, Double Supérieure.",
          hold: 700,
        },
        {
          ask: "Le week-end s'annonce comment ? Il se passe quelque chose en ville ?",
          steps: [
            {
              label: "État touristique",
              tool: "état touristique",
            },
            {
              label: "Revenue du week-end",
              tool: "résumé revenue",
            },
          ],
          answer: "Samedi fort : le PSG reçoit au Parc, à 3 km. Je suggère +10 % samedi et 2 nuits minimum.",
          hold: 1800,
        },
        {
          ask: "OK, applique-le.",
          steps: [
            {
              label: "+10 % samedi",
              tool: "appliquer tarif",
            },
          ],
          answer: "Fait. Samedi passe de 96 600 $ à 106 260 $ sur le moteur.",
          hold: 900,
        },
      ],
      bookingBlock: {
        guest: "Martina García",
        detail: "ce soir → +2 · 2 nuits · Double Supérieure",
        amount: "193 200 $",
      },
      ruleBlock: {
        title: "Tarif appliqué",
        meta: "sam. 21",
        kpis: [
          {
            label: "Avant",
            value: "96 600 $",
            hint: "par nuit",
          },
          {
            label: "Maintenant",
            value: "106 260 $",
            hint: "par nuit",
          },
          {
            label: "Variation",
            value: "+10 %",
            hint: "samedi",
          },
        ],
      },
      rates: {
        old: "96 600 $",
        next: "106 260 $",
        delta: "+10 %",
      },
    },
    chaos: {
      chat: "chat",
      sheet: "tableur",
      notes: "notes",
      mail: "mail",
      agenda: "agenda",
    },
    actions: {
      create: "Nouvelle réservation · 3 nuits",
    },
    url: "roombir.com",
    ui: {
      shell: {
        company: "Hotel del Parque S.A.",
        property: "Hotel del Parque",
        space: "Réception",
        initials: "MG",
      },
      bookingTabs: [
        "Journée",
        "Réservations",
        "Calendrier",
        "Nouvelle réservation",
        "Tarifs",
        "Disponibilité",
        "Promotions",
        "Configuration",
      ],
      roomsTabs: [
        "État des chambres",
        "Plan d'occupation",
        "Catégories",
      ],
      rmsTabs: [
        "Analytique",
        "Pace",
        "Scénarios",
        "Événements",
        "Concurrence",
        "Décisions",
        "Recommandations",
        "Configuration",
      ],
      calendar: {
        hab: "Ch.",
        occupancy: "Occupation",
        today: "Auj.",
        month: "Mars 2026",
        ranges: [
          "1s",
          "2s",
          "1m",
        ],
        search: "Client ou code",
        categories: "Toutes les catégories",
        states: "Tous les états",
        refresh: "Actualiser",
        create: "+ Nouveau",
        legend: {
          pending: "En attente",
          confirmed: "Confirmée",
          "checked-in": "Arrivée",
          "checked-out": "Départ",
          cancelled: "Annulée",
          "no-show": "No show",
        },
        hint: "Glissez une barre pour la déplacer",
        dows: [
          "lun",
          "mar",
          "mer",
          "jeu",
          "ven",
          "sam",
          "dim",
        ],
        monthTick: "mars",
        cats: [
          {
            name: "Double",
            rate: "96 600 $",
          },
          {
            name: "Double Supérieure",
            rate: "106 000 $",
          },
        ],
        guests: [
          "Ruiz",
          "Pérez",
          "Sosa",
          "Bianchi",
          "Moteur",
        ],
      },
      rooms: {
        floors: "Tous les étages",
        order: "Tri",
        orderOpts: [
          "N°",
          "Étage",
          "Cat.",
        ],
        countWord: "chambres",
        search: "Chercher une chambre...",
        categories: "Toutes les catégories",
        refresh: "Rafraîchir",
        columns: {
          available: "Disponible",
          occupied: "Occupée",
          cleaning: "Nettoyage",
          maintenance: "Maintenance",
          blocked: "Bloquée",
          "checkout-pending": "Départ en att.",
        },
        empty: "Aucune chambre",
        hint: "Glissez une carte vers une autre colonne pour changer son état",
      },
      revenue: {
        title: "Recommandations de tarif",
        sub: "Accepter applique le tarif au moteur de réservation en override.",
        tabs: [
          "En attente",
          "Historique",
        ],
        status: {
          suggested: "En attente",
          accepted: "Acceptée",
          applied: "Appliquée",
          rejected: "Refusée",
        },
        accept: "Accepter",
        reject: "Refuser",
        blockTitle: "Recommandations de tarif",
        blockMeta: "1 en attente",
        footnote: "Accepter applique le tarif au moteur de réservation en override.",
        recs: [
          {
            date: "sam. 21 mars",
            from: "96 600 $",
            to: "106 260 $",
            delta: "+10 %",
            reason: "Occupation 78 % + match au Parc des Princes à 3 km",
            status: "suggested",
          },
          {
            date: "dim. 22 mars",
            from: "96 600 $",
            to: "101 400 $",
            delta: "+5 %",
            reason: "Pace +18 % vs. votre historique · médiane du comp-set 101 400 $",
            status: "suggested",
          },
          {
            date: "mar. 24 mars",
            from: "96 600 $",
            to: "91 800 $",
            delta: "-5 %",
            reason: "Pickup 7 j faible · mardi sans événement à proximité",
            status: "suggested",
          },
        ],
      },
      dashboard: {
        checkin: "Arrivée",
        checkout: "Départ",
        active: "Réservations actives",
        activeSub: "Confirmées + en séjour",
        occupancy: "Occupation du jour",
        occupancySub: "Arrivées cette semaine : 6",
        demand: "Courbe de demande",
        demandSub: "Pic : 9 · Moyenne : 5,4",
        recent: "Réservations récentes",
        recentSub: "Dernières réservations de clients",
        newBooking: "Nouvelle réservation",
        cols: [
          "ID réservation",
          "Nom du client",
          "Arrivée",
          "Départ",
          "Total",
          "État",
        ],
        status: {
          confirmed: "Confirmée",
          "checked-in": "Arrivée",
          pending: "En attente",
        },
        more: "Voir plus",
        bookings: "Réservations",
        bookingsSub: "3 derniers mois",
        months: [
          "Janvier",
          "Février",
          "Mars",
        ],
        topCats: "Top catégories",
        topCatsSub: "Plus forte occupation du jour",
        topCatNames: ["Double Supérieure", "Double", "Suite"],
        quick: "Accès rapides",
        quickSub: "Apps actives en Réception",
        quickItems: [
          "Journée",
          "Réservations",
          "Nouvelle réservation",
          "Tarifs",
        ],
        rows: [
          {
            code: "#RES-2026-KGMJ",
            cat: "Double Supérieure",
            guest: "Martina García",
            mail: "martina.garcia@gmail.com",
            inDate: "21 mars 2026",
            outDate: "23 mars 2026",
            nights: "2 nuits",
            total: "212 520 $",
            status: "confirmed",
          },
          {
            code: "#RES-2026-NGA6",
            cat: "Double",
            guest: "Carlos Tévez",
            mail: "ctevez@hotmail.com",
            inDate: "19 mars 2026",
            outDate: "22 mars 2026",
            nights: "3 nuits",
            total: "289 800 $",
            status: "checked-in",
          },
          {
            code: "#RES-2026-3CYL",
            cat: "Suite Nord",
            guest: "Ana Bianchi",
            mail: "ana.bianchi@yahoo.com",
            inDate: "20 mars 2026",
            outDate: "24 mars 2026",
            nights: "4 nuits",
            total: "592 000 $",
            status: "confirmed",
          },
          {
            code: "#RES-2026-B0SO",
            cat: "Double",
            guest: "Lucas Pérez",
            mail: "lperez@outlook.com",
            inDate: "22 mars 2026",
            outDate: "25 mars 2026",
            nights: "3 nuits",
            total: "289 800 $",
            status: "pending",
          },
          {
            code: "#RES-2026-WJU9",
            cat: "Double Supérieure",
            guest: "Sofía Ruiz",
            mail: "sofia.ruiz@gmail.com",
            inDate: "23 mars 2026",
            outDate: "26 mars 2026",
            nights: "3 nuits",
            total: "318 780 $",
            status: "confirmed",
          },
        ],
      },
      linkhub: {
        name: "Hotel del Parque",
        bio: "Paris · à 3 km de la tour Eiffel",
        bookTitle: "Réserver",
        checkin: "Arrivée",
        checkout: "Départ",
        guests: "Personnes",
        guestsValue: "2 adultes",
        search: "Rechercher",
        blocks: [
          "Site web",
          "WhatsApp",
          "Itinéraire",
          "Contact",
        ],
        footer: "Créé avec roombir",
        inShort: "21 mars",
        outShort: "23 mars",
        travelers: "2 voyageurs",
        monthTitle: "Mars 2026",
        dows: [
          "DI",
          "LU",
          "MA",
          "ME",
          "JE",
          "VE",
          "SA",
        ],
        cancel: "Annuler",
        next: "Suivant",
        resultsTitle: "Choisissez votre chambre",
        summary: "21 mars → 23 mars · 2 adultes · 2 nuits",
        rooms: [
          {
            name: "Double Supérieure",
            price: "106 260 $",
          },
          {
            name: "Double",
            price: "96 600 $",
          },
          {
            name: "Suite Nord",
            price: "148 000 $",
          },
        ],
        perNight: "/ nuit",
        book: "Réserver",
      },
      stay: {
        brand: "StayPass",
        tabs: [
          "Accueil",
          "Profil",
        ],
        user: "Martina",
        section: "Réservations",
        filters: [
          "Toutes",
          "Actives",
          "Passées",
        ],
      },
      reports: {
        title: "Rapports",
        updated: "Mis à jour le 21/3/2026, 09:12",
        refresh: "Actualiser",
        ranges: [
          "Semaine dernière",
          "Mois dernier",
          "3 mois",
          "6 mois",
        ],
        rangeNote: "20/2 → 21/3 · par semaine",
        section: "Occupation et volume",
        sectionSub: "Comment tourne l'établissement et ce qui arrive.",
        kpis: [
          {
            label: "Réservations actives",
            value: "14",
            hint: "confirmées + en séjour aujourd'hui",
          },
          {
            label: "Arrivées cette semaine",
            value: "9",
            hint: "arrivées dans les 7 prochains jours",
          },
          {
            label: "Occupation",
            value: "78 %",
            hint: "fév : 71 %",
            badge: "+7 %",
          },
          {
            label: "RevPAR",
            value: "75 300 $",
            hint: "24 unités · 30 jours",
          },
        ],
        chart: "Courbe de demande — 30 prochains jours",
        chartSub: "Réservations confirmées/en séjour couvrant chaque nuit.",
      },
    },
    hud: {
      play: "Lire",
      pause: "Pause",
      restart: "Recommencer",
      language: "Langue",
      scene: "Scène",
      fullscreen: "Plein écran",
      exitFullscreen: "Quitter le plein écran",
      replay: "Revoir",
    },
  },

  videoIa: {
    meta: {
      title: "Vidéo · Roombir IA",
      description: "Roombir IA en un peu plus d'une minute : des demandes de tous les jours qui sont faites, le dossier de votre destination, un plan quand la demande est un objectif, et vos permissions toujours en premier.",
    },
    tabsLine: "Ce qui vous prend *quatre onglets* aujourd'hui…",
    placeholder: "Demandez quelque chose à Roombir IA",
    name: "Roombir IA",
    demo: {
      thinking: "Roombir IA réfléchit",
      wait: "Consultation du système",
      captions: ["Joignez un fichier", "Demandez un rapport", "Dictez à la voix", "Voyez votre destination en détail"],
      attach: {
        label: "Joindre un fichier",
        media: "Médias",
        docs: "Documents",
        image: "Image",
        video: "Vidéo",
        audio: "Audio",
        pdf: "PDF",
        csv: "CSV",
        file: "tarifs-avril.pdf",
        ask: "Charge ces tarifs en avril",
        steps: [
          { label: "PDF lu · 2 pages", tool: "lire la pièce jointe" },
          { label: "30 tarifs chargés", tool: "charger tarifs" },
        ],
        answer: "C'est fait : j'ai chargé les 30 tarifs d'avril dans le plan Double Supérieure.",
      },
      report: {
        ask: "Quel canal m'annule le plus ?",
        steps: [{ label: "Rapport des canaux", tool: "rapport des canaux" }],
        answer: "Booking.com : 18 % d'annulations sur 90 jours. Le direct : 4 %.",
        title: "Annulations par canal · 90 jours",
        meta: "377 réservations",
        kpis: [
          { label: "Booking.com", value: "18 %", hint: "41 sur 228" },
          { label: "Airbnb", value: "9 %", hint: "7 sur 78" },
          { label: "Direct", value: "4 %", hint: "3 sur 71" },
        ],
      },
      voice: {
        listening: "Écoute…",
        heard: "Bloque le chalet Alerce mardi après-midi pour maintenance",
        steps: [{ label: "Blocage créé", tool: "créer un blocage" }],
        answer: "Fait : le chalet Alerce est bloqué à partir de mardi après-midi. La matinée reste en vente.",
      },
      tourism: {
        ask: "Que se passe-t-il en ville ce mois-ci ?",
        steps: [{ label: "État touristique", tool: "état touristique" }],
        answer: "Mois chargé : un match au Parc des Princes et le week-end de Pâques.",
        panel: {
          title: "Mon statut touristique",
          live: "Donnée en direct",
          delayed: "Différé",
          sections: [
            {
              title: "Événements à proximité",
              live: true,
              metrics: [
                { value: "6", label: "Événements sous 30 jours" },
                { value: "21 mars", label: "Grand événement à venir" },
              ],
              narrative: "",
              items: [
                { title: "Match au Parc des Princes", detail: "21 mars · à 3 km" },
                { title: "Marathon de Paris", detail: "12 avr. · à 2 km" },
                { title: "Salon à la Porte de Versailles", detail: "14 → 16 avr. · à 4 km" },
              ],
              spark: false,
            },
            {
              title: "Saison et calendrier",
              live: false,
              metrics: [
                { value: "4 → 6 avr.", label: "Prochain week-end prolongé" },
                { value: "18 avr. → 4 mai", label: "Prochaines vacances scolaires" },
              ],
              narrative: "Pâques tombe du 4 au 6 avril : week-end prolongé en France et en Allemagne, vos deux premiers marchés.",
              items: [],
              spark: false,
            },
            {
              title: "Intérêt et marchés",
              live: true,
              metrics: [
                { value: "+18 %", label: "Intérêt en ligne" },
                { value: "3", label: "Marchés émetteurs en vacances (60 j)" },
              ],
              narrative: "",
              items: [],
              spark: true,
            },
          ],
          spark: "Vues quotidiennes sur Wikipédia (30 jours)",
          readOnly: "Lecture seule : pour agir, demandez-le à Roombir IA dans le chat.",
          footer: "Mis à jour il y a 12 min · Sources : Nager.Date · Open-Meteo · Wikipédia · OpenStreetMap",
        },
      },
    },
    dossier: {
      count: "15 sources, chaque donnée datée",
      topics: [
        "Jours fériés",
        "Ponts",
        "Vacances scolaires",
        "Sport",
        "Culture",
        "Congrès et salons",
        "Vols",
        "Météo",
        "Taux de change",
        "Sécurité",
        "Risques naturels",
        "Visas",
        "Offre hôtelière",
        "Intérêt pour la destination",
        "Environnement",
      ],
      dates: ["22 sept", "21 sept", "22 sept", "20 sept", "22 sept"],
      placeMeta: "Paris · France",
    },
    versus: {
      pre: "Un chat générique",
      struck: "cherche",
      post: ".",
      us: "Roombir IA part d'*un dossier*.",
    },
    goal: {
      ask: "Je veux plus de réservations",
      reads: "18 sources de votre activité",
      time: "1,1 s",
      sources: [
        "Inventaire",
        "Pace",
        "Tableau du jour",
        "Moteur",
        "Plans tarifaires",
        "Promotions",
        "Restrictions",
        "Site web",
        "LinkHub",
        "Visibilité",
        "Profil Google",
        "OTA",
        "Réseaux",
        "Avis",
        "Règles de prix",
        "Recommandations",
        "Concurrence",
        "Marché",
      ],
      plan: {
        title: "Basse saison, rythme lent",
        meta: "Plan · 3 étapes",
        diagnosis: "Octobre se vend plus lentement que votre historique aux mêmes dates.",
        steps: [
          "Promo de 10 % sur le canal direct uniquement",
          "Minimum d'1 nuit les mardis et mercredis lents",
          "Règle tarifaire seulement sur les dates en retard",
        ],
        confirm: "Confirmer",
        done: "Appliqué",
      },
    },
    perms: {
      spaces: ["Réception", "Direction"],
      tools: "outils",
      modal: {
        title: "Supprimer le tarif « Haute saison »",
        body: "Cette action est irréversible.",
        prompt: "Tapez le nom pour confirmer",
        word: "Haute saison",
        confirm: "Supprimer",
        cancel: "Annuler",
      },
    },
    talk: {
      lines: ["Vous écrivez.", "Vous parlez.", "Vous montrez."],
      typed: "Quel canal m'annule le plus ?",
      listening: "À l'écoute…",
      heard: "Bloque le chalet Alerce mardi après-midi",
      file: "tarifs-octobre.pdf",
      fileMeta: "PDF · 2 pages",
      shot: "capture-ota.png",
      withFile: "Charge ces tarifs en octobre",
    },
  },

  videoProps: {
    meta: {
      title: "Vidéo · Établissements",
      description: "Les établissements en une minute : plusieurs établissements sous un seul compte, chacun avec sa devise et son équipe, des accès par établissement et par poste, et tout le reste rattaché à la fiche.",
    },
    name: "Établissements",
    owner: { name: "Martina García", role: "Propriétaire", initials: "MG" },
    company: "Hotel del Parque S.A.",
    hotel: {
      name: "Hotel del Parque",
      city: "Mendoza, Argentine",
      type: "Hôtel",
      inventory: "3",
      inventoryWord: "catégories",
      spaces: "4",
      currency: "ARS",
      language: "Español",
    },
    cabins: {
      name: "Cabañas del Lago",
      city: "Villa La Angostura, Argentine",
      cityOnly: "Villa La Angostura",
      type: "Chalet",
      inventory: "6",
      inventoryWord: "unités",
      spaces: "4",
      currency: "USD",
      language: "English",
    },
    spacesWord: "espaces",
    counts: { one: "1 établissement", two: "2 établissements", users2: "2 utilisateurs", users3: "3 utilisateurs" },
    status: "active",
    chips: { currency: "Devise", timezone: "Fuseau horaire", language: "Langue", tz: "UTC−3" },
    // El recorrido: la organización (tipos, estructura, reservas), no el alta.
    captions: ["Chaque établissement, avec son type", "Ses réservations, dans sa devise", "Changez d’établissement en haut", "Trouvez tout au même endroit"],
    cabinUnits: ["Chalet Alerce", "Chalet Coihue", "Chalet Arrayán", "Chalet Maitén", "Chalet Lenga", "Chalet Ñire"],
    suiteRate: "142 000 $",
    cabinRate: "180 US$",
    templateName: "Hotel del Parque · espaces et apps",
    templateNone: "Sans modèle",
    coords: { pair: "-40.7625, -71.6463", lat: "-40.7625", lng: "-71.6463" },
    invite: {
      name: "Lucía Ferreyra",
      email: "lucia@cabanasdellago.com",
      role: "Staff",
      spaces: [
        { name: "Réception", apps: "9" },
        { name: "Ménage", apps: "4" },
        { name: "Direction", apps: "" },
      ],
      users: "Utilisateurs",
      addedRow: "Cabañas del Lago · Réception",
      allProps: "Tous les établissements",
    },
    search: {
      query: "Alerce",
      results: [
        { kind: "room", title: "Chalet Alerce", meta: "Cabañas del Lago · 4 personnes" },
        { kind: "booking", title: "#RES-2026-QX4T · Julián Paz", meta: "Chalet Alerce · 12 → 15 oct." },
        { kind: "property", title: "Cabañas del Lago", meta: "Villa La Angostura" },
      ],
    },
    hotelTotals: ["212 520 $", "289 800 $", "592 000 $", "190 400 $", "450 000 $"],
    cabinRows: [
      { code: "#RES-2026-QX4T", cat: "Chalet Alerce", guest: "Julián Paz", mail: "julian.paz@gmail.com", inDate: "12 oct. 2026", outDate: "15 oct. 2026", nights: "3 nuits", total: "540 US$", status: "confirmed" },
      { code: "#RES-2026-7HPA", cat: "Chalet Coihue", guest: "Emma Walker", mail: "emma.w@outlook.com", inDate: "10 oct. 2026", outDate: "14 oct. 2026", nights: "4 nuits", total: "760 US$", status: "checked-in" },
      { code: "#RES-2026-2KDN", cat: "Chalet Arrayán", guest: "Lucas Stein", mail: "lstein@gmx.de", inDate: "14 oct. 2026", outDate: "18 oct. 2026", nights: "4 nuits", total: "720 US$", status: "confirmed" },
      { code: "#RES-2026-M8RE", cat: "Chalet Maitén", guest: "Sofía Ruiz", mail: "sofiaruiz@yahoo.com", inDate: "11 oct. 2026", outDate: "13 oct. 2026", nights: "2 nuits", total: "330 US$", status: "pending" },
      { code: "#RES-2026-VT0L", cat: "Chalet Lenga", guest: "Noah Martin", mail: "noahm@gmail.com", inDate: "16 oct. 2026", outDate: "19 oct. 2026", nights: "3 nuits", total: "510 US$", status: "confirmed" },
    ],
    access: {
      people: [
        { name: "Lucía Ferreyra", initials: "LF", space: "Réception", scope: "Cabañas del Lago" },
        { name: "Tomás Ríos", initials: "TR", space: "Ménage", scope: "Hotel del Parque" },
        { name: "Martina García", initials: "MG", space: "Direction", scope: "Tous" },
      ],
      caps: "10 accès d'administration, un par un",
    },
    root: {
      items: ["Chambres", "Réservations", "Marque", "Site web", "LinkHub", "Avis", "Galeries"],
      phoneLabel: "Téléphone",
      phoneOld: "+54 261 555-0100",
      phoneNew: "+54 261 555-0199",
      targets: ["Site web", "LinkHub", "Moteur de réservation"],
      updated: "Mis à jour",
    },
    // Los rótulos de la UI real, copiados de los diccionarios del PMS (pms-core/app/src/i18n/dictionaries).
    ui: {
      newProperty: "Nouvelle propriété",
      typeLabel: "Type d'hébergement *",
      typeHint: "Définit comment vos hébergements sont vendus : par unité précise ou par catégorie.",
      template: "Template (facultatif)",
      create: "Créer une propriété",
      nameLabel: "Nom *",
      city: "Ville *",
      country: "Pays",
      cancel: "Annuler",
      properties: "Propriétés",
      unitTitle: "Vente par unités",
      unitHint: "Chaque hébergement est réservé individuellement (1:1).",
      catTitle: "Vente par catégories",
      catHint: "La vente se fait par type de chambre depuis un pool d'unités.",
      tCabin: "Chalet",
      tVilla: "Villa",
      tVacation: "Location de vacances",
      tGlamping: "Glamping",
      tResort: "Resort",
      tAparthotel: "Apparthôtel",
      tHostel: "Auberge",
      editProperty: "Modifier la propriété",
      coords: "Coordonnées",
      lat: "Latitude",
      lng: "Longitude",
      coordTip: "Astuce : dans Google Maps, faites un clic droit sur le point → copiez les coordonnées et collez la paire ici (elle se répartit toute seule en Lat / Long).",
      howCopy: "Comment copier",
      publicContact: "Contact public",
      publicEmail: "E-mail public",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      social: "Réseaux sociaux",
      address: "Adresse",
      save: "Enregistrer les modifications",
      spacesTitle: "Établissements et espaces de travail",
      spacesIntro: "Choisissez les établissements accessibles. Ouvrez chacun pour attribuer les espaces de travail.",
      onlyChosen: "Uniquement ceux sélectionnés",
      allFuture: "Tous, y compris les futurs",
      assignedSpaces: "espaces attribués",
      seeSpaces: "Voir les espaces",
      isDefault: "Par défaut",
      allApps: "Accès à toutes les apps",
      appsEnabled: "apps activées",
      operate: "Exploiter",
      capsTitle: "Accès administratifs",
      capsHint: "Choisissez ce que cette personne peut administrer dans l'entreprise.",
      gUsers: "Utilisateurs",
      gProps: "Établissements et espaces",
      gCompany: "Entreprise",
      changeProperty: "Changer de propriété",
      searchPlaceholder: "Rechercher réservations, clients, chambres, apps, utilisateurs…",
      navigate: "naviguer",
      open: "ouvrir",
      close: "fermer",
      kBooking: "Réservation",
      kProperty: "Établissement",
      kRoom: "Chambre",
      currentProperty: "Établissement actuel",
      createUserTitle: "Créer un utilisateur",
      createUserBtn: "Créer un utilisateur",
      createUserIntro: "Le compte est créé avec un mot de passe temporaire. À la première connexion, l'utilisateur devra le remplacer par le sien.",
      fullName: "Nom et prénom",
      email: "E-mail de l'utilisateur",
      role: "Rôle",
      caps: [
        "Gérer les utilisateurs",
        "Attribuer des espaces de travail",
        "Créer des établissements",
        "Modifier les établissements",
        "Changer d'établissement",
        "Gérer les espaces de travail",
        "Activer et désactiver les apps",
        "Paramètres de l'entreprise",
        "Facturation et forfait",
        "Sites web"
      ]
    },
  },

  /* Les vidéos Chambres, Moteur, Rapports, Revenue et Marketing
     (`/video/chambres`, …) : les titres viennent de chaque page ; ici, seulement
     ce qui est propre à chaque vidéo (légendes des étapes et données d'exemple). */
  videoTours: {
    rooms: {
      meta: {
        title: "Vidéo · Chambres",
        description: "Les chambres en une minute : l’état de la maison d’un coup d’œil, des catégories en pool et des chalets nommés dans le même calendrier, des statuts qui refusent l’impossible et une nuit qui ne se vend qu’une fois.",
      },
      captions: ["L’état de la maison, d’un coup d’œil", "Pool de catégorie et chalets nommés, dans un calendrier", "Une nuit ne se vend qu’une fois"],
      modes: ["Pool de catégorie", "Unité nommée"],
      cabinCat: "Chalets",
      cabinRate: "140 000 $",
      cabins: ["Chalet Alerce", "Chalet Coihue"],
      guestNew: "Romero",
      sources: { first: "Votre site", second: "Booking" },
      lock: { title: "Cette nuit est déjà vendue", sub: "Chalet Alerce · 21 mars · la base refuse la seconde" },
      states: { forbidden: "Pas avec le client encore dedans", allowed: "D’abord, départ en attente" },
      notes: {
        card: {
          t: "Une carte, une chambre",
          d: "La couleur indique son statut : libre, occupée, en ménage…"
        },
        moved: {
          t: "Le ménage est fini",
          d: "Glissez-la vers Disponible : elle est de nouveau en vente."
        },
        pool: {
          t: "Catégorie en pool",
          d: "Le client achète « une Double » ; la chambre est attribuée ensuite."
        },
        row: {
          t: "Chaque ligne, une chambre",
          d: "Et chaque barre, une réservation : client, personnes et nuits."
        },
        unit: {
          t: "Unité nommée",
          d: "On réserve le Chalet Alerce, avec ses photos et son prix."
        },
        web: {
          t: "Une réservation arrive de votre site",
          d: "Elle prend les nuits du 19 au 21."
        },
        second: {
          t: "Booking demande les mêmes nuits",
          d: "La base de données la refuse."
        }
      },
      load: {
        card: { name: "Double Supérieure", units: "4 unités", mode: "Pool de catégorie", rate: "106 000 $ / nuit", size: "24 m²", guests: "2 adultes", amenities: ["Wi-Fi","Climatisation","Vue sur la montagne"] },
        chips: ["Calendrier", "Moteur de réservation", "Votre site", "LinkHub", "Revenue", "Roombir IA", "Rapports"],
      },
    },
    motor: {
      meta: {
        title: "Vidéo · Moteur de réservation",
        description: "Le moteur de réservation en une minute : le client choisit ses nuits sur votre site, la réservation arrive au tableau du jour et au calendrier, chaque prix dit d’où il vient et le montant ne bouge pas avec le taux de change.",
      },
      captions: ["La réservation arrive au tableau du jour", "Et occupe ses nuits dans le calendrier", "Le prix de la nuit, avec sa raison"],
      source: "Moteur · votre site",
      notes: {
        price: {
          t: "Le prix de chaque jour",
          d: "Avant de choisir les dates, avec les tarifs du moteur."
        },
        units: {
          t: "Combien il en reste",
          d: "Votre inventaire réel : il en reste 3 le 21."
        },
        photos: {
          t: "Chaque chambre, avec ses photos",
          d: "Et son prix par nuit pour ces dates."
        },
        row: {
          t: "La nouvelle réservation, en haut",
          d: "Confirmée et avec son total : personne ne l’a saisie."
        },
        bar: {
          t: "Ses deux nuits, occupées",
          d: "La 103 n’est plus en vente les 21 et 22."
        },
        accept: {
          t: "Vous acceptez la suggestion",
          d: "Ce tarif passe devant les autres."
        }
      },
      chain: {
        title: "D’où vient le prix",
        steps: ["Accepté dans Revenue", "Plan tarifaire", "Prix de base", "Promotions"],
        winner: "106 260 $ · sam. 21 mars",
      },
      motorUi: {travelers: "Voyageurs",dates: "Dates",adults: "Adultes",adultsHint: "18 ans et plus",children: "Enfants",childrenHint: "3 – 17 ans",infants: "Bébés",infantsHint: "0 – 2 ans",code: "Code",promoName: "Réservation directe",optional: "Facultatif",back: "Retour",done: "OK",available: "Chambres disponibles",range: "21 mars → 23 mars",dayRange: "21 mars - 23 mars",nights: "2 nuits",adultsCount: "2 adultes",monthCaption: "mars 2026",dows: ["Di","Lu","Ma","Me","Je","Ve","Sa"]},
      promos: {
        title: "Des promos *visibles avant de réserver*.",
        notes: {
          code: { t: "Avec code ou automatiques", d: "Le client saisit le code, ou la promo s’applique d’elle-même à ses dates." },
          badge: { t: "La promo, bien visible", d: "Badge, ancien prix barré et nom de la promo sur chaque chambre." },
        },
      },
      currencyTitle: "Le prix vu par le client *reste figé*.",
      currencies: ["US$ · Dollar", "$ · Peso argentin", "R$ · Real", "CLP · Peso chilien", "COP · Peso colombien", "MXN · Peso mexicain", "S/ · Sol", "UYU · Peso uruguayen", "€ · Euro", "£ · Livre"],
      frozen: { guestLabel: "Le client a vu", guestValue: "158,60 US$", youLabel: "Vous encaissez", youValue: "212 520 $", note: "Taux figé au check-in · 21 mars 09:12" },
    },
    reports: {
      meta: {
        title: "Vidéo · Rapports",
        description: "Les rapports en une minute : comment tourne l’établissement sans monter de tableur, chaque chiffre comparé à la période précédente et, ce qui n’est pas dans le rapport, demandé à Roombir IA.",
      },
      captions: ["Comment tourne l’établissement", "Ce qui est déjà réservé, nuit par nuit", "Si ce n’est pas dans le rapport, demandez"],
      ask: "Quel canal m’annule le plus ce mois-ci ?",
      steps: [
        { label: "Réservations du mois lues", tool: "rapport de réservations" },
        { label: "Annulations par canal", tool: "annulations" },
      ],
      answer: "Booking annule le plus : 6 réservations sur 21 (29 %). Votre site, 1 sur 14. La réception a 2 réservations, donc je ne conclus pas.",
      block: {
        title: "Annulations par canal",
        meta: "mars",
        kpis: [
          { label: "Booking", value: "29 %", hint: "6 sur 21" },
          { label: "Votre site", value: "7 %", hint: "1 sur 14" },
          { label: "Réception", value: "—", hint: "2 réservations : trop peu" },
        ],
      },
      compare: {
        vs: "vs février",
        items: [
          { label: "Revenus", now: "4,1 M$", prev: "3,6 M$", delta: "+14 %" },
          { label: "Anticipation", now: "18 jours", prev: "22 jours", delta: "−4 jours" },
          { label: "Séjour moyen", now: "2,8 nuits", prev: "2,5 nuits", delta: "+0,3" },
          { label: "Occupation", now: "78 %", prev: "71 %", delta: "+7 pts" },
        ],
      },
      chips: ["Occupation", "Demande à 90 jours", "ADR", "RevPAR", "Annulations", "Canaux", "Revenus", "Anticipation", "Séjour moyen", "Occupation par catégorie"],
    },
    revenue: {
      meta: {
        title: "Vidéo · Revenue",
        description: "Revenue en une minute : chaque prix suggéré avec sa raison, l’accepter l’applique au moteur, la destination avec ses sources et treize variables avec un essai à blanc.",
      },
      captions: ["Chaque prix, avec sa raison", "L’accepter l’applique au moteur", "Ce qui fait bouger la demande, avec la source"],
      vars: ["Occupation", "Indice de demande", "Disponibilité", "Concurrent 1", "Concurrent 2", "Concurrent 3", "Concurrent 4", "Concurrent 5", "Nouvelles réservations · 7 jours", "Nouvelles réservations · 30 jours", "Impact des événements", "Jours avant l’événement", "Indice de pace"],
      dryRun: {
        title: "Essai à blanc",
        rule: "Si l’occupation ≥ 75 % à 14 jours → +8 %",
        result: "Aurait changé 9 nuits",
        avg: "+7 700 $ par nuit",
      },
      applied: "Tarif appliqué au moteur",
    },
    marketing: {
      meta: {
        title: "Vidéo · Marketing",
        description: "Le marketing en une minute : un site et un LinkHub qui savent déjà ce qui est libre, l’éditeur avec son assistant IA, des abonnés qui réservent depuis vos réseaux, votre marque chargée une fois et tout le hub au même endroit.",
      },
      linkhub: {
        title: "Transformez vos abonnés *en clients* avec LinkHub.",
        points: ["Ils réservent sur place, sans quitter le lien", "Depuis Instagram, TikTok ou WhatsApp", "Vos dates libres, visibles tout de suite", "En quelques touches, sans formulaire en trop"],
      },
      brand: {
        title: "Identité de marque",
        name: "Hotel del Parque",
        palette: "Palette tirée du logo",
        tone: "Ton",
        toneValue: "Chaleureux et proche",
        font: "Typographie",
        fontValue: "Outfit",
        targets: ["Votre site", "LinkHub", "Moteur de réservation", "Moteurs de recherche", "E-mails aux clients", "Roombir IA"],
      },
      editor: {
        captions: [
          "Vous collez une capture, il crée les sections",
          "Vous désignez un bloc et demandez le changement",
          "Un contrôle qualité qui corrige aussi"
        ],
        bar: {
          add: "Ajouter",
          layers: "Calques",
          files: "Fichiers",
          popups: "Popups",
          motor: "Moteur",
          settings: "Réglages",
          ai: "Éditeur",
          preview: "Aperçu",
          unpublished: "Non publié",
          discard: "Annuler",
          quality: "Qualité",
          publish: "Publier",
          published: "Publié",
          page: "Modifier la page :",
          pageName: "Accueil",
          editIn: "Modifier sur :",
          device: "Ordinateur",
          live: "Voir en ligne",
          domain: "Connectez votre domaine"
        },
        chat: {
          title: "Éditeur IA",
          hello: "Bonjour ! Je suis Roombir IA. Demandez-moi de créer, modifier ou réordonner des sections.",
          placeholder: "Écrivez à roombir… Collez des images ou sélectionnez des éléments du canevas pour les citer.",
          cite: "Citer des éléments",
          shot: "accueil-reference.png",
          ask1: "Crée mon accueil comme celui-ci, avec mes chambres",
          steps1: [
            "Lecture de la capture",
            "Section d’accueil",
            "Section chambres",
            "Section avis"
          ],
          answer1: "C’est fait : l’accueil a trois sections, en brouillon.",
          quote: "Chambres",
          ask2: "Ajoute deux cartes de plus",
          steps2: [
            "Modification de « Chambres »"
          ],
          answer2: "J’ai ajouté deux cartes. Le reste n’a pas bougé."
        },
        site: {
          nav: [
            "Chambres",
            "Services",
            "Accès"
          ],
          book: "Réserver",
          heroTitle: "Votre maison face au parc",
          heroSub: "Hotel del Parque · Mendoza, Argentine",
          roomsTitle: "Nos chambres",
          rooms: [
            "Double Supérieure",
            "Suite du Parc",
            "Cabane Alerce",
            "Double Classique",
            "Cabane Coihue"
          ],
          guests: "personnes",
          reviewsTitle: "Ce que disent nos clients",
          review: "Un petit-déjeuner délicieux et une vue sur le parc inoubliable.",
          reviewer: "Laura M. · Google"
        },
        quality: {
          title: "Qualité du site",
          sub: "Analyse complète",
          gauges: [
            "Performances",
            "Accessibilité",
            "Bonnes pratiques",
            "SEO",
            "Agents"
          ],
          overall: "Score global",
          fix: "Tout corriger",
          recheck: "Relancer l’analyse",
          errors: "Erreurs",
          passed: "Réussis",
          issues: [
            "Images sans description",
            "Description de la page manquante",
            "Texte trop petit sur mobile"
          ]
        },
        notes: {
          draft: {
            t: "Tout part en brouillon",
            d: "Publier est une étape à part, et elle vous revient."
          }
        }
      },
      hub: {
        title: "Et tout le reste, *au même endroit*.",
        menu: [
          "Sites web",
          "Identité de marque",
          "Galeries",
          "Avis",
          "LinkHub",
          "Bibliothèque de fichiers"
        ],
        chips: [
          "Photos et vidéos",
          "Éditeur d’image",
          "Modèles à votre marque",
          "Import des avis",
          "LinkHub avec QR",
          "Popups et WhatsApp",
          "Votre domaine",
          "Plusieurs langues",
          "SEO et GEO",
          "Lisible par une IA"
        ]
      },
      one: "Tout dans roombir, relié à vos réservations",
    },
  },

  notFound: {
    eyebrow: "Erreur 404",
    title: "Cette page *n'existe pas*.",
    lead:
      "Nous l'avons peut-être déplacée, ou le lien est mal écrit. Voici les endroits où les gens vont le plus souvent.",
    home: "Retour à l'accueil",
  },
};

export default fr;
