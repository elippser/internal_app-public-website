import type { Dictionary } from "./es";

/**
 * Français. Les mêmes clés que `es.ts` — TypeScript ne laisse pas faire
 * autrement.
 *
 * Le vouvoiement est celui d'un fournisseur qui parle à un professionnel :
 * direct, concret, et prêt à dire ce que le produit ne fait pas encore.
 */
const fr: Dictionary = {
  site: {
    title: "Bookfer · Le système d'exploitation de votre hébergement",
    description:
      "PMS, moteur de réservation, site web, revenue management et un assistant IA qui pilote le système. Le tout sur une seule base de données, pour hôtels, chalets, auberges et locations.",
    tagline: "Système d'exploitation hôtelier",
  },

  nav: {
    product: "Plateforme",
    platform: "La plateforme",
    contact: "Contact",
    login: "Se connecter",
    signup: "Commencer gratuitement",
    home: "bookfer, accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    more: "Plus",
    skip: "Aller au contenu",
    primary: "Principal",
    megaFoot: "Sept produits sur une seule base de données.",
    megaLink: "Voir toute la plateforme",
    language: "Langue",
    links: {
      solutions: "Solutions",
      pricing: "Tarifs",
      about: "À propos",
    },
    groups: {
      operation: "L'exploitation",
      growth: "La croissance",
      newLayer: "La nouvelle couche",
    },
    products: {
      reservas: {
        title: "Réservations et chambres",
        desc: "Tableau du jour, calendrier, tarifs, disponibilité et inventaire physique.",
      },
      motor: {
        title: "Moteur de réservation",
        desc: "La recherche et le paiement que voit le client, avec calendrier informatif.",
      },
      revenue: {
        title: "Revenue · RMS",
        desc: "Pace, concurrence, événements et recommandations tarifaires en boucle fermée.",
      },
      sitios: {
        title: "Site web et marque",
        desc: "Builder avec nom de domaine, LinkHub, galeries et avis.",
      },
      ia: {
        title: "Bookfer IA",
        desc: "Un assistant doté de 272 outils qui pilote le système avec vous.",
      },
      agentes: {
        title: "Hébergement agentique",
        desc: "llms.txt, availability.json et JSON-LD : réservable par une IA.",
      },
    },
  },

  footer: {
    claim:
      "Le système d'exploitation de votre hébergement. Réservations, chambres, moteur, site web, revenue et un assistant qui pilote tout cela, sur une seule base de données.",
    nav: "Pied de page",
    columns: {
      product: "Plateforme",
      solutions: "Solutions",
      company: "Entreprise",
      legal: "Mentions légales",
    },
    company: {
      about: "Qui nous sommes",
      status: "État du produit",
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
    madeIn: "Fait en Argentine",
    agentNote: "ce site aussi a son llms.txt",
    social: {
      instagram: "bookfer sur Instagram",
      linkedin: "bookfer sur LinkedIn",
      email: "Nous écrire",
    },
  },

  common: {
    startFree: "Commencer gratuitement",
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
  },

  ticker: [
    "Votre propre moteur, 0 % de commission",
    "Tape chart avec aperçu",
    "Revenue en boucle fermée",
    "llms.txt · réservable par une IA",
    "272 outils de l'assistant",
    "Multidevise pour de vrai",
    "E-mails clients sans SMTP",
    "LinkHub avec QR",
    "Prêt en un après-midi",
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
      label: "Bookfer IA",
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
      sources: { own: "propre", bookfer: "bookfer", manual: "manuel", none: "sans donnée" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Découverte automatique par proximité et similarité. Les tarifs externes se saisissent à la main : nous n'inventons pas un chiffre que nous n'avons pas.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Réserver en ligne", "WhatsApp", "Photos des chalets", "Comment venir", "Avis · 4,8"],
    },
    signals: {
      revenue: "revenue · sam 21/03",
      applied: "appliquée au moteur",
      agent: "bookfer ia",
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
    homeTitle: "Un seul système, un seul prix",
    homeSubtitle:
      "Tout ce qu'un hébergement doit avoir pour exploiter et vendre, sans cinq prestataires et sans commission par réservation.",
    matrix: {
      caption: "Ce que comprend chaque formule bookfer",
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
    errorTail: "Si cela continue d'échouer, écrivez-nous à hola@bookfer.com.",
    legal:
      "Nous utilisons vos données uniquement pour vous contacter au sujet de bookfer. Vous pouvez nous demander de les supprimer à tout moment. Plus d'informations dans la [politique de confidentialité](/legal/privacidad).",
    doneTitle: "C'est reçu.",
    doneText:
      "Nous vous écrivons dans les prochaines heures. Si vous préférez ne pas attendre, vous pouvez commencer l'inscription tout de suite : c'est gratuit et sans carte.",
  },

  home: {
    hero: {
      l1a: "Votre hébergement",
      l1b: "entier",
      l2: "dans un",
      pill: "Derrière chaque\nbeau séjour",
      l3a: "seul",
      l3b: "système.",
    },
    swap: {
      eyebrow: "Pourquoi ça existe",
      title: "Sept produits que vous *achetez séparément* aujourd'hui.",
      lead:
        "Un hébergement petit ou moyen ne devrait pas avoir besoin de cinq prestataires et d'un consultant pour exister numériquement. C'est la thèse de bookfer, et c'est elle qui tranche chaque décision produit à l'intérieur.",
      headOld: "Ce que vous achetez à part aujourd'hui",
      headNew: "Dans bookfer",
      rows: [
        { old: "PMS de réservations et chambres", now: "Hubs Réservations + Chambres" },
        { old: "Moteur de réservation", now: "Moteur public + Studio du Moteur" },
        { old: "Créateur de site web", now: "Builder + renderer avec nom de domaine" },
        { old: "RMS de revenue management", now: "Hub Revenue" },
        { old: "Link-in-bio et présence numérique", now: "LinkHub + Présence en ligne" },
        { old: "Portail du client", now: "StayPass" },
        { old: "Assistant / automatisations", now: "Bookfer IA" },
      ],
    },
    modules: {
      eyebrow: "La plateforme",
      title: "Six surfaces, *aucun pont* entre elles.",
      lead:
        "Ce ne sont pas des intégrations qui se synchronisent la nuit : ce sont des vues différentes des mêmes données. Changer le prix d'une catégorie se voit dans le moteur immédiatement, sans rien publier.",
      items: {
        reservas: {
          title: "Réservations",
          desc: "Tableau du jour, calendrier tape chart avec glisser et redimensionner, saisie manuelle, tarifs, disponibilité et promotions.",
        },
        habitaciones: {
          title: "Chambres",
          desc: "L'inventaire physique : état opérationnel de chaque unité, plan d'occupation et gestion des catégories.",
        },
        motor: {
          title: "Moteur de réservation",
          desc: "Votre recherche et votre paiement, avec un calendrier qui affiche prix et unités restantes jour par jour.",
        },
        revenue: {
          title: "Revenue · RMS",
          desc: "Pace contre votre propre historique, comp-set, événements de demande, règles de prix et recommandations expliquées.",
        },
        sitios: {
          title: "Site web et LinkHub",
          desc: "Créateur visuel avec nom de domaine et multilingue, galeries, avis, identité de marque et link-in-bio.",
        },
        ia: {
          title: "Bookfer IA",
          desc: "Un assistant doté de 272 outils qui consulte et pilote le système, toujours avec vos permissions et jamais avec les siennes.",
        },
      },
    },
    spaces: {
      eyebrow: "Ce que personne d'autre n'a",
      title: "Chaque poste voit *son* système, pas le vôtre.",
      lead:
        "Réception, étages, marketing et administration travaillent sur les mêmes données, mais chaque espace de travail a son propre menu, son propre écran d'accueil et ses propres permissions. Personne n'apprend à ignorer la moitié d'une application.",
      items: [
        "Le menu se construit seul : un espace marketing **n'affiche pas** le hub Réservations.",
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
      eyebrow: "Bookfer IA",
      title: "Un assistant qui *exécute*, pas qui suggère.",
      lead:
        "Ce n'est pas un chat qui explique où cliquer. Il consulte la disponibilité, crée des réservations, déplace un séjour avec aperçu, ajuste des tarifs, valide des événements du RMS ou publie un site. Et il fait tout cela avec vos permissions, pas les siennes.",
      items: [
        "272 outils couvrant pratiquement toute la surface du produit.",
        "On voit la transcription du tour : quel outil il a utilisé et ce qui est revenu.",
        "Il répond avec des cartes actionnables, pas seulement du texte.",
        "Trois couches de permissions : filtrage avant le tour, contexte dans le prompt et évaluation à chaque appel.",
      ],
      link: "Voir Bookfer IA",
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
          key: "reservations@bookfer.com",
          title: "Vous ne configurez pas de serveur de messagerie",
          text: "Tous les e-mails au client — confirmation, jeton, avis de changement — partent du domaine de bookfer avec votre boîte en répondre-à. C'est l'une des frictions classiques de la mise en route d'un PMS, supprimée exprès.",
        },
      ],
    },
    stats: {
      eyebrow: "La taille réelle",
      title: "Ce ne sont pas des promesses : *c'est déjà construit*.",
      lead:
        "bookfer est en pilote de marché, nous n'allons donc pas encore vous montrer un compteur d'hôtels gonflé. Ce que nous pouvons montrer, c'est ce qu'il y a dans le produit aujourd'hui.",
      items: [
        { value: "23", label: "applications activables par espace de travail" },
        { value: "272", label: "outils que manie l'assistant" },
        { value: "37", label: "visites guidées sur l'écran réel" },
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
    honest: {
      eyebrow: "État du produit",
      title: "Ce que nous *ne faisons pas encore*.",
      lead:
        "Nous sommes en pilote de marché et nous préférons que vous le sachiez avant de commencer plutôt qu'en deuxième semaine. Voici les quatre choses qu'un grand concurrent a et que bookfer n'a pas, aujourd'hui.",
      link: "Voir l'état complet, domaine par domaine",
      states: { none: "n'existe pas", partial: "partiel" },
      items: [
        {
          tag: "Channel manager",
          state: "none",
          text: "Il n'y a pas de synchronisation d'inventaire ni de tarifs avec les OTA. Il existe un journal d'événements qui enregistre chaque changement de réservation pour le jour où ce sera connecté, mais aujourd'hui c'est un fichier, pas une intégration.",
        },
        {
          tag: "Passerelle de paiement",
          state: "none",
          text: "Rien n'est encaissé en ligne. L'encaissement se fait à l'arrivée, en présentiel, avec la conversion de devise figée à ce moment-là.",
        },
        {
          tag: "Tarifs des concurrents",
          state: "partial",
          text: "Le comp-set se découvre seul par proximité et similarité, mais les tarifs des concurrents externes se saisissent à la main. La connexion aux fournisseurs automatiques est prête et non connectée.",
        },
        {
          tag: "Présence en ligne",
          state: "partial",
          text: "Les fiches Google Business et OTA s'éditent et se notent dans le système, mais ne se publient pas par API : aujourd'hui elles se recopient à la main. Les connexions aux réseaux sont déclaratives.",
        },
      ],
    },
    faq: [
      {
        q: "Est-ce que ça marche pour des chalets et des appartements, ou seulement pour les hôtels ?",
        a: "Pour les deux, et pas avec la même astuce. Une catégorie peut se vendre en **pool** — dix doubles interchangeables, le client achète « une double » — ou en **unité unique 1:1**, où la catégorie enveloppe une seule unité avec son nom propre. Le choix se fait par catégorie, pas par système, donc un complexe avec six chalets et deux chambres standard cohabite sans rien forcer.",
      },
      {
        q: "Ai-je besoin d'un channel manager pour utiliser bookfer ?",
        a: "Pas pour exploiter, mais disons-le franchement : **bookfer n'a pas encore de channel manager**. Si vous vendez sur Booking ou Expedia, cette disponibilité se réconcilie aujourd'hui à la main. Le système est pensé pour que la réservation directe — votre site, votre LinkHub, votre moteur — cesse de se perdre dans une conversation, d'où vient l'essentiel du revenu que vous ne contrôlez pas aujourd'hui.",
      },
      {
        q: "Comment j'encaisse les réservations ?",
        a: "À l'arrivée, en présentiel. **Il n'y a pas encore de passerelle de paiement intégrée.** Ce qu'il y a, c'est du multidevise pour de vrai : vous stockez les prix dans une devise de base, vous encaissez dans une autre, et la conversion reste vivante jusqu'à l'arrivée puis se fige pour que le montant encaissé ne change plus.",
      },
      {
        q: "Dois-je installer ou configurer quelque chose ?",
        a: "On entre par le navigateur. L'inscription, ce sont neuf étapes guidées enregistrées sur le serveur — vous pouvez l'abandonner à mi-chemin et la continuer depuis le téléphone — et il n'y a pas de serveur de messagerie à configurer : **tous les e-mails au client partent du domaine bookfer** avec votre boîte en répondre-à.",
      },
      {
        q: "Puis-je utiliser mon propre nom de domaine ?",
        a: "Oui. Chaque site publié accepte son propre nom d'hôte, et chaque variante de langue peut avoir le sien. Le LinkHub a aussi son adresse publique, avec un QR code à imprimer.",
      },
      {
        q: "L'IA peut-elle faire n'importe quoi dans mon système ?",
        a: "Non, et c'est voulu. L'assistant opère **en empruntant votre identité réelle** avec une permission de courte durée réémise à chaque appel. Avant le tour, on lui retire les outils que votre utilisateur ne peut pas utiliser, et chaque opération est réévaluée contre la politique du service. Si un accès vous est révoqué en cours de conversation, l'action suivante échoue et l'assistant vous explique pourquoi.",
      },
    ],
    cta: {
      title: "Mettez-le en route *cette semaine*.",
      lead:
        "L'inscription est guidée et ne demande pas de carte. Si vous préférez qu'on vous accompagne sur le chargement des chambres — l'étape qui coûte le plus —, on le fait sur un appel court.",
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
        "Sept produits sur une seule base de données : réservations, chambres, moteur, revenue, sites web, portail client et un assistant IA. Ce que fait chacun et comment ils se connectent.",
    },
    hero: {
      eyebrow: "La plateforme",
      title: "Sept produits, *une seule base de données*.",
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
      title: "23 applications qui *s'allument et s'éteignent*.",
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
      items: [
        {
          title: "Réservations et chambres",
          desc: "Tableau du jour, liste avec panneau rapide, tape chart avec déplacement et redimensionnement, saisie manuelle, tarifs avec chaîne de prix, disponibilité avec restrictions et promotions. De l'autre côté, l'inventaire physique avec six états opérationnels et une matrice de transitions.",
        },
        {
          title: "Moteur de réservation",
          desc: "Recherche, résultats, détail, services, données du client et confirmation. Avec calendrier informatif, sept blocs de configuration visuelle et deux modes de confirmation. Il s'intègre à votre site ou s'utilise comme page à part entière.",
        },
        {
          title: "Revenue · RMS",
          desc: "Analyse à double axe — quand on a réservé et quand on dort —, pace contre votre propre historique, comp-set avec découverte automatique, événements de demande, moteur de règles avec essai à blanc et recommandations qui poussent le tarif vers le moteur.",
        },
        {
          title: "Sites web et marque",
          desc: "Créateur visuel avec bibliothèque de composants, composants métier branchés aux données, multilingue, nom de domaine, popups, bouton WhatsApp et éditeur SEO et GEO. Plus galeries, avis, identité de marque et LinkHub.",
        },
        {
          title: "StayPass",
          desc: "Le portail du client : son compte, mes réservations, le détail, l'annulation, un profil avec pièce d'identité et nationalité, et confirmation par jeton e-mail. Un même client accumule les hébergements où il s'est inscrit ; chaque hôtel ne voit que sa base.",
        },
        {
          title: "Rapports",
          desc: "Occupation et volume avec projection, ADR et RevPAR, lead time, séjour moyen, annulations et dernière minute, production par canal, et deux sections d'hygiène opérationnelle qui signalent ce qui est mal géré, pas seulement ce qui s'est passé.",
        },
      ],
    },
    ia: {
      eyebrow: "La couche qui les relie",
      title: "L'assistant voit *tout le système*, pas un module.",
      lead:
        "Parce que les données ne font qu'une, l'agent fait en une phrase ce qui, dans un autre stack, prend trois onglets et deux exports : regarder le pace, ajuster un tarif et publier la promo sur le site.",
      items: [
        "272 outils répartis entre réservations, tarifs, disponibilité, chambres, établissements, revenue, marketing, fichiers, société et système.",
        "Blocs de réponse riches : cartes de réservation et de revenue avec des boutons qui exécutent, soumis à la même vérification de permissions.",
        "Historique des sessions filtré par l'espace de travail actif.",
      ],
      link: "Voir Bookfer IA",
    },
    stats: [
      { value: "23", label: "applications activables" },
      { value: "30", label: "widgets du tableau adaptatif" },
      { value: "37", label: "visites guidées" },
      { value: "272", label: "outils de l'agent" },
    ],
    ask: "Vous cherchiez quelque chose de précis ?",
    askLink: "Demandez-nous",
    cta: {
      title: "Venez *regarder à l'intérieur*.",
      lead:
        "L'inscription est gratuite et guidée. Si vous préférez qu'on vous le montre avant, demandez une démo et on le parcourt avec vos données.",
      steps: [
        "Vous créez la société et l'établissement.",
        "Vous chargez chambres et unités.",
        "Le moteur et le site sont prêts à publier.",
      ],
    },
  },

  reservas: {
    meta: {
      title: "Réservations et chambres",
      description:
        "Le cœur opérationnel : tableau du jour, calendrier tape chart avec déplacement et redimensionnement, saisie manuelle, tarifs, disponibilité, promotions et l'inventaire physique avec ses six états.",
    },
    hero: {
      eyebrow: "Réservations et chambres",
      title: "Le quotidien, *dans une seule grille*.",
      lead:
        "Huit vues pour l'exploitation commerciale et trois pour l'inventaire physique. Toutes sur la même donnée : déplacer une réservation dans le calendrier change l'état de la chambre, libère la nuit dans le moteur et apparaît dans le rapport.",
    },
    calendar: {
      eyebrow: "Calendrier",
      title: "Vous glissez la réservation et *voyez ce qui va se passer* avant de lâcher.",
      lead:
        "La grille est chambre par jour, groupée par catégorie. On déplace une réservation de chambre ou de dates en la glissant, et avant d'appliquer le changement le système affiche l'aperçu : s'il y a conflit et ce qu'il advient du prix.",
      items: [
        "Barres de blocage pour maintenance ou usage interne, créables depuis le calendrier et avec le même verrou qu'une réservation.",
        "Fenêtre de détail au clic, sans quitter la vue.",
        "Barre d'outils avec navigation par mois ou plage, aujourd'hui, recherche par client ou code, filtre par catégorie et par état.",
        "Statistiques par catégorie et par jour au-dessus de la grille.",
      ],
    },
    views: {
      eyebrow: "Les huit vues",
      title: "Chaque moment du service, *son écran*.",
      items: [
        {
          title: "Tableau du jour",
          desc: "Arrivées et départs du jour, avec deux jours visibles et navigation. C'est l'écran avec lequel la réception ouvre le service, avec des cartes actionnables.",
        },
        {
          title: "Toutes les réservations",
          desc: "Liste avec filtres et un panneau latéral qui s'ouvre sans quitter la liste : résumé, activité et notes. De là on attribue une unité, on change l'état et on édite les notes internes.",
        },
        {
          title: "Calendrier",
          desc: "Le tape chart : chambre par jour, déplacer et redimensionner avec aperçu, blocages, filtres et statistiques.",
        },
        {
          title: "Nouvelle réservation",
          desc: "Saisie manuelle ou walk-in avec recherche du client, catégorie, dates, occupation par âge, canal d'origine, promotions et notes.",
        },
        {
          title: "Tarifs",
          desc: "Prix de base par catégorie plus plans tarifaires avec validité, prix par nuit, devise, séjour minimum et activation.",
        },
        {
          title: "Disponibilité",
          desc: "Grille avec feu tricolore — libre, partiel, complet, fermé — et restrictions par jour : fermé, fermé à l'arrivée, fermé au départ, séjour minimum et maximum.",
        },
        {
          title: "Promotions",
          desc: "Assistant en trois étapes, automatiques ou avec code, par pourcentage, montant fixe ou prix fixe par nuit, avec restrictions et leur présentation sur le site public.",
        },
        {
          title: "Réglages du moteur",
          desc: "Devise, confirmation, règles de séjour, calendrier informatif, couche agentique et horaires. Plus le modèle de réservation : mode de vente et stratégie d'attribution.",
        },
      ],
    },
    chain: {
      eyebrow: "Chaîne de prix",
      title: "Quatre étapes, *toujours dans le même ordre*.",
      lead:
        "Quand le moteur doit dire ce que coûte une nuit, il résout cette chaîne. Savoir sur quel échelon se trouve chaque prix, c'est la différence entre faire confiance au système et l'auditer à la main chaque matin.",
      stepLabel: "étape {n}",
      steps: [
        {
          title: "Override du RMS",
          desc: "S'il y a une recommandation revenue acceptée pour cette date, c'est elle qui commande.",
        },
        {
          title: "Plan tarifaire",
          desc: "Le plan en vigueur pour cette catégorie et cette date, avec sa devise et son minimum de nuits.",
        },
        {
          title: "Prix de base",
          desc: "Celui de la catégorie. C'est ce que facture le moteur tant que vous n'avez pas chargé de tarifs.",
        },
        {
          title: "Promotions",
          desc: "Elles s'appliquent par-dessus le prix issu des trois étapes précédentes.",
        },
      ],
    },
    rooms: {
      eyebrow: "Chambres",
      title: "L'inventaire physique, *avec des états qui ne mentent pas*.",
      lead:
        "Six états opérationnels — disponible, occupée, nettoyage, maintenance, bloquée et départ en attente — et une matrice qui définit quelle transition est valide. Depuis « occupée », on ne peut aller que vers « départ en attente » : le tableau n'accepte pas les états impossibles.",
      items: [
        "**État des chambres** : tableau en direct avec filtres par étage et catégorie, et panneau de détail avec l'historique complet des changements — qui, quand et avec quelle note.",
        "**Plan d'occupation** : vue spatiale par étage avec navigation de date, pour lire la maison d'un coup d'œil.",
        "**Gestion** : catégories avec capacité, prix de base, photos, équipements et mode de vente audité ; unités avec code unique, étage, capacité propre et **création en masse avec aperçu**.",
      ],
    },
    detail: {
      eyebrow: "Détail de réservation",
      title: "Tout ce qui s'est passé sur cette réservation, *sur une fiche*.",
      items: [
        {
          title: "Chronologie des états",
          desc: "En attente, confirmée, arrivée, départ, plus annulée et no-show. Avec les actions disponibles selon le point où elle se trouve.",
        },
        {
          title: "Services souscrits",
          desc: "Spa, petit-déjeuner, départ tardif, avec quantité, date et état. Prix et intitulé se figent à la souscription : une ancienne réservation continue d'afficher ce qui a été facturé alors.",
        },
        {
          title: "Montants en deux devises",
          desc: "Le montant en devise de base et en devise d'encaissement, avec la conversion vivante jusqu'à l'arrivée et figée ensuite.",
        },
        {
          title: "Canal d'origine fin",
          desc: "Direct, téléphone ou OTA, avec un identifiant précis — booking.com, airbnb, direct-web, phone-front-desk — pour que le rapport par canal serve à quelque chose.",
        },
        {
          title: "Notes et demandes spéciales",
          desc: "Notes internes de l'équipe séparées des demandes du client, pour que personne ne confonde les deux.",
        },
        {
          title: "Journal d'audit",
          desc: "Chaque changement pertinent est enregistré, y compris tout ajustement manuel de montant. C'est ce qu'on regarde quand le compte ne tombe pas juste.",
        },
      ],
    },
    faq: [
      {
        q: "Que se passe-t-il si deux personnes réservent la même nuit en même temps ?",
        a: "L'une des deux échoue. Chaque nuit de chaque chambre est un **verrou unique dans la base de données** — la clé est l'unité plus la date —, donc la seconde écriture ne passe pas. Ce n'est pas une validation dans le code que la concurrence peut contourner : c'est la base qui l'empêche.",
      },
      {
        q: "Puis-je saisir des réservations arrivées par téléphone ou WhatsApp ?",
        a: "Oui, et c'est conseillé. La saisie manuelle propose la recherche du client par e-mail, le choix de catégorie et de dates, l'occupation séparée en adultes, enfants et bébés — les bébés ne comptent ni pour la capacité ni pour le prix —, les promotions et le **canal d'origine**. C'est ce dernier champ qui vous dira ensuite quelle part de vos réservations passe encore par la messagerie.",
      },
      {
        q: "Comment décide-t-on quelle chambre revient à chaque réservation ?",
        a: "Cela dépend de deux axes. Si la catégorie est en **unité unique**, il n'y a qu'une option. Si c'est un pool, l'établissement choisit entre attribution **manuelle** — la réservation reste « non attribuée » et la réception décide — ou **automatique**, où le moteur note et choisit, avec des préférences facultatives pour minimiser les trous ou équilibrer l'usure. Chaque réservation fige le mode avec lequel elle est née : changer le réglage plus tard ne réécrit pas l'histoire.",
      },
    ],
    cta: {
      title: "Commencez par le *calendrier*.",
      lead:
        "Vous chargez les chambres une fois et vous avez déjà la grille, le moteur et la disponibilité initialisée. Le reste peut s'ajouter quand vous voulez.",
      steps: [
        "Vous chargez catégories et unités.",
        "La disponibilité s'initialise toute seule.",
        "Le calendrier et le moteur sont opérationnels.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Moteur de réservation",
      description:
        "La recherche et le paiement que voit votre client : calendrier avec prix et unités restantes, sept blocs configurables sans code, deux modes de confirmation et des e-mails sans configurer de SMTP.",
    },
    hero: {
      eyebrow: "Moteur de réservation",
      title: "Le lien qui *remplace la conversation*.",
      lead:
        "Recherche, résultats, détail, services, données du client et confirmation. C'est votre moteur, avec votre marque, sans commission par réservation et avec un calendrier qui dit au client ce dont il a besoin pour décider.",
    },
    calendar: {
      eyebrow: "Calendrier informatif",
      title: "Un sélecteur de dates qui *répond aux questions*.",
      lead:
        "Le calendrier habituel demande deux dates et c'est tout. Celui du moteur affiche, jour par jour et selon ce que vous activez, tout ce que la personne allait demander par WhatsApp avant de réserver.",
      items: [
        "**Prix à partir de** sur chaque jour, résolu par la vraie chaîne de prix : override du RMS, plan tarifaire, prix de base et promotions.",
        "**Unités restantes**, le signal de rareté le plus honnête qui soit : c'est votre inventaire, pas un compteur inventé.",
        "**Indicateurs** de jour fermé, fermé à l'arrivée et fermé au départ, signalés là où on regarde.",
        "**Rappel du minimum de nuits** au choix de l'arrivée, pour que personne n'arrive au bout du paiement et l'apprenne à ce moment-là.",
        "Un interrupteur principal éteint le tout et il redevient un sélecteur de dates ordinaire. Il est à vous, pas à nous.",
      ],
    },
    studio: {
      eyebrow: "Studio du Moteur",
      title: "Sept blocs, *sans toucher au code*.",
      lead:
        "Chaque écran du parcours a son bloc de configuration, avec ses textes, ses libellés et ses styles. Les changements s'appliquent au moteur sans republier le site.",
      items: [
        { title: "Recherche", desc: "La recherche d'entrée : champs, libellés et ce qu'on demande en premier." },
        {
          title: "Calendrier",
          desc: "L'interrupteur principal et ce que voit le client par jour : prix, unités, indicateurs et rappels.",
        },
        {
          title: "Voyageurs",
          desc: "Comment on demande adultes, enfants et bébés. Les bébés ne comptent ni pour la capacité ni pour le prix.",
        },
        {
          title: "Liste",
          desc: "Comment se présentent les catégories disponibles et quelle information accompagne chacune.",
        },
        {
          title: "Détail",
          desc: "La fiche de la catégorie ou de l'unité, avec photos, équipements et description.",
        },
        {
          title: "Services",
          desc: "Les extras proposés avant de payer, avec leur créneau horaire et leur délai minimum.",
        },
        { title: "Paiement", desc: "Le formulaire final : quelles données on demande et avec quels textes légaux." },
        {
          title: "Écran de succès",
          desc: "Ce que voit le client à la fin, là où se décide s'il vous réécrit ou non.",
        },
      ],
    },
    agentic: {
      eyebrow: "Couche agentique",
      title: "Et *une machine peut aussi le lire*.",
      lead:
        "Avec la couche agentique activée, le moteur publie son inventaire dans des formats pensés pour les modèles de langage, pas seulement pour les navigateurs. C'est un pari produit explicite vers la recherche générative.",
      items: [
        "`llms.txt` — la description de l'hébergement en texte brut.",
        "`availability.json` — la disponibilité lisible par une machine.",
        "`engine-capabilities.json` — quelles opérations le moteur accepte.",
        "JSON-LD structuré dans les pages du site.",
      ],
      link: "Voir toute la couche agentique",
    },
    after: {
      eyebrow: "Après le paiement",
      title: "La réservation entre *et le système continue tout seul*.",
      items: [
        {
          title: "L'unité est attribuée",
          desc: "Selon le modèle de l'établissement : la seule unité possible si c'est du 1:1, celle que choisit le moteur si c'est un pool automatique, ou aucune si vous préférez que la réception décide.",
        },
        {
          title: "L'e-mail part",
          desc: "Depuis le domaine de bookfer, avec votre boîte en répondre-à. Sans configurer de SMTP, sans domaine à vérifier, sans un fournisseur de messagerie de plus sur la liste.",
        },
        {
          title: "La recherche est enregistrée",
          desc: "Y compris les recherches **sans disponibilité**, les plus précieuses : elles alimentent l'indice de demande du RMS et l'entonnoir de conversion.",
        },
      ],
      stats: [
        { value: "0 %", label: "de commission sur les réservations du moteur" },
        { value: "10", label: "devises, avec blue, MEP, CCL ou officiel pour l'ARS" },
        { value: "2", label: "modes de confirmation, avec expiration automatique" },
      ],
    },
    distribute: {
      eyebrow: "Où va le lien",
      title: "Sur votre site, dans votre bio et *dans la conversation*.",
      lead:
        "Le moteur est une surface, pas une page. Il s'intègre dans le site que vous construisez avec le builder, comme page à part entière, ou comme bouton principal de votre LinkHub : la page link-in-bio que vous mettez sur Instagram, avec son QR téléchargeable.",
      items: [
        "Composant du builder qui se branche seul à votre inventaire.",
        "Page à part entière avec l'URL de votre hébergement.",
        "Bloc « réserver » du LinkHub, avec statistiques de visites et de clics.",
        "Bouton WhatsApp flottant sur le site, avec message prérempli, pour qui préfère quand même écrire.",
      ],
    },
    faq: [
      {
        q: "Le moteur va dans mon site ou c'est une page séparée ?",
        a: "Les deux. Il s'intègre comme composant dans le site que vous construisez avec le builder, et il existe aussi comme page à part entière sur `/votre-hebergement`. Si vous n'avez pas encore de site, le lien du moteur est déjà quelque chose que vous pouvez envoyer par WhatsApp ou mettre dans votre bio Instagram.",
      },
      {
        q: "Puis-je changer les textes et les couleurs du paiement ?",
        a: "Oui, depuis le Studio du Moteur et **sans toucher au code ni republier le site**. Ce sont sept blocs configurables : recherche, calendrier, voyageurs, liste, détail, services, paiement et écran de succès, chacun avec ses textes, libellés et styles.",
      },
      {
        q: "Qui confirme la réservation ?",
        a: "Vous choisissez. Dans un mode, la réservation naît en attente et **le client la confirme** avec un lien à jeton reçu par e-mail. Dans l'autre, elle reste en attente jusqu'à ce que **la réception l'accepte**. Dans les deux cas, les réservations en attente expirent toutes seules selon le délai que vous configurez : vous ne restez pas avec des nuits bloquées par quelqu'un qui n'est jamais revenu.",
      },
      {
        q: "Dois-je configurer un serveur de messagerie ?",
        a: "Non. Tous les e-mails au client partent du domaine de bookfer, avec la boîte de l'hébergement en **répondre-à**. C'est une décision délibérée : configurer un SMTP par hôtel est l'une des frictions classiques de la mise en route d'un PMS et ici elle n'existe tout simplement pas.",
      },
    ],
    cta: {
      title: "Mettez votre lien de réservation *dans la bio*.",
      lead:
        "Vous chargez les chambres et le moteur est opérationnel avec la disponibilité initialisée. Le site et le LinkHub s'ajoutent ensuite, quand vous voulez.",
      steps: [
        "Vous chargez catégories, unités et prix.",
        "Vous configurez le moteur dans le Studio.",
        "Vous partagez le lien et cessez de perdre des demandes dans la messagerie.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue · RMS",
      description:
        "Revenue management inclus : pace contre votre propre historique, comp-set avec découverte automatique, événements de demande, moteur de règles avec essai à blanc et recommandations qui poussent le tarif vers le moteur.",
    },
    hero: {
      eyebrow: "Revenue · RMS",
      title: "Un prix suggéré *que l'on peut auditer*.",
      lead:
        "Huit onglets de revenue management intégrés au bureau : analyse à double axe, pace contre votre propre historique, comp-set, événements de demande, un moteur de règles avec essai à blanc, et un document de décision par date qui explique chaque chiffre.",
    },
    decision: {
      eyebrow: "Décisions",
      title: "La réponse à *« pourquoi vous me suggérez ça ? »*",
      lead:
        "Il y a un document par établissement et par date avec la trace complète : quelles entrées le moteur a vues, quel était le tarif de base, lequel il a suggéré, quelles règles ont correspondu, si un plafond s'est appliqué, et un journal lisible ligne par ligne.",
      items: [
        "Occupation, indice de demande, disponibilité, tarifs des concurrents, pickup et événements : tout ce qui est entré dans le calcul, avec sa valeur.",
        "Quelle règle a correspondu et dans quel ordre, puisque c'est la dernière qui l'emporte.",
        "Si le plafond minimum ou maximum s'est appliqué, et lequel c'était.",
        "Le cycle de vie de la recommandation : suggérée, acceptée ou refusée, appliquée, par qui et quand.",
      ],
    },
    rules: {
      eyebrow: "Scénarios",
      title: "Treize variables, *et un essai à blanc*.",
      lead:
        "Chaque règle évalue une variable contre une référence, dans une fenêtre d'anticipation, et applique une action. Elles s'évaluent dans l'ordre et la dernière qui correspond l'emporte. Avant d'en activer une, l'essai à blanc vous montre ce qu'elle aurait fait.",
      items: [
        "**Variables** : occupation, indice de demande, disponibilité, tarif concurrent 1 à 5, pickup 7j, pickup 30j, impact des événements, jours jusqu'à l'événement le plus proche et indice de pace.",
        "**Opérateurs** : supérieur, supérieur ou égal, égal, inférieur ou égal, inférieur.",
        "**Actions** : ajustement en pourcentage sur la base, ou changement de plan tarifaire.",
        "**Plafonds** de tarif minimum et maximum, appliqués après tout le reste.",
      ],
    },
    comp: {
      eyebrow: "Concurrence",
      title: "Un comp-set *mixte et honnête*.",
      lead:
        "Les concurrents qui utilisent aussi bookfer apportent un tarif réel. Les externes se découvrent seuls par proximité et score de similarité, et leur tarif, c'est vous qui le saisissez — comme référence fixe ou par date, qui a la priorité.",
      items: [
        "Score de similarité par type, catégorie, taille, gamme et zone.",
        "Profil de votre propre hôtel, synchronisé depuis le PMS sauf si vous le remplacez à la main.",
        "Grille des tarifs concurrents par date.",
        "Prêt pour Lighthouse, RateGain, PriceLabs et KeyData ; non connecté à ce jour.",
      ],
    },
    rest: {
      eyebrow: "Les autres onglets",
      title: "Tout ce qu'il y a *en plus du prix*.",
      items: [
        {
          title: "Analyse à double axe",
          desc: "Axe de création — quand on a réservé — avec revenus directs et OTA, annulations, anticipation, recherches et pickup. Axe de séjour — quand on dort — avec occupation, ADR, RevPAR et revenus. Beaucoup de systèmes mélangent les deux et sèment la confusion.",
        },
        {
          title: "Pace",
          desc: "Rythme de vente contre le comportement historique de votre propre établissement, séparé par jour de semaine, mois et tranche d'anticipation. Avec courbe, pickup et alertes de vente rapide ou lente à seuils configurables.",
        },
        {
          title: "Événements",
          desc: "Jours fériés, salons, concerts et sport, ingérés automatiquement et validés par vous : suggéré, approuvé ou écarté. Un événement approuvé n'est pas écrasé par la ré-ingestion. Avec score de pertinence et impact attendu.",
        },
        {
          title: "Recommandations",
          desc: "Tarif actuel, suggéré, écart et motif. Cycle de vie complet : suggérée, acceptée ou refusée, appliquée, expirée ou remplacée, avec responsable et date.",
        },
        {
          title: "Signaux de demande",
          desc: "Outre les réservations, l'indice de demande prend les recherches du moteur, y compris celles qui n'ont trouvé aucune disponibilité — le signal le plus sous-estimé qu'ait un petit hébergement.",
        },
        {
          title: "Réglages",
          desc: "Comp-set, localisation synchronisée du PMS avec remplacement manuel, profil de l'hôtel, seuils de pace, rayon et horizon des événements, et plafonds de tarif.",
        },
      ],
    },
    faq: [
      {
        q: "J'ai peu d'historique. Le RMS me sert quand même ?",
        a: "Oui, mais il vous le dira. Le benchmark de pace se construit avec **votre propre historique**, groupé par jour de semaine, mois et tranche d'anticipation, et l'interface **expose la taille de l'échantillon**. Si une cellule a été calculée avec trois réservations, vous le verrez. Nous préférons cela à vous montrer une courbe confiante bâtie sur rien.",
      },
      {
        q: "D'où viennent les tarifs de la concurrence ?",
        a: "De deux endroits. Si le concurrent utilise aussi bookfer, le tarif est réel. S'il est externe, le système le **découvre seul** par géolocalisation et score de similarité — type, catégorie, taille, gamme, zone — mais **le tarif, c'est vous qui le saisissez**, comme référence fixe ou par date. La connexion aux fournisseurs automatiques est prête et pas encore connectée ; nous ne dirons pas le contraire tant qu'elle ne l'est pas.",
      },
      {
        q: "Si j'accepte une recommandation, dois-je recopier le prix ailleurs ?",
        a: "Non. En l'acceptant, la recommandation **pousse un override de tarif vers le moteur de réservation**, qui devient l'étape 0 de la chaîne de prix. La boucle se ferme dans le système. Dans la plupart des stacks, cette étape est une personne qui recopie un chiffre d'un écran à un autre.",
      },
      {
        q: "Est-ce inclus ou facturé à part ?",
        a: "Cela dépend de la formule. Dans les grands systèmes, le RMS est presque toujours un module supplémentaire chiffré à part ; ici c'est un produit du catalogue comme un autre. [Regardez les formules](/precios) pour voir dans laquelle il entre.",
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

  sitios: {
    meta: {
      title: "Site web et marque",
      description:
        "Créateur visuel avec nom de domaine et multilingue, composants branchés à vos données, LinkHub pour la bio Instagram, identité de marque, galeries et avis.",
    },
    hero: {
      eyebrow: "Site web, marque et LinkHub",
      title: "Votre présence numérique, *servie par le même système*.",
      lead:
        "Le créateur assemble le site avec des composants qui se branchent seuls à votre inventaire, et le renderer le publie sur votre domaine. À côté vivent l'identité de marque, les galeries, les avis et le LinkHub qui va dans la bio Instagram.",
    },
    builder: {
      eyebrow: "Builder",
      title: "Un éditeur visuel avec *des composants qui connaissent l'hôtellerie*.",
      lead:
        "Toile en glisser-déposer, édition directe sur le texte, menus contextuels et une bibliothèque de composants organisée en familles. Ce qui le distingue d'un créateur générique, c'est l'autre moitié : les composants métier.",
      items: [
        "**Moteur de réservation intégré**, cartes de chambre, catégories, galeries, promotions, avis et services : tous branchés à des données vivantes.",
        "**Éditeur de styles** latéral avec typographie, couleur, espacement et effets, plus un éditeur CSS pour les cas avancés.",
        "**Éditeur d'images** intégré — recadrage, filtres, réglages — et éditeur de texte enrichi.",
        "**Assistant IA du builder** en streaming, pour générer et modifier des sections.",
        "**Mode simple ou avancé** par sous-site, brouillons et publication explicite, aperçu en plusieurs tailles.",
      ],
    },
    published: {
      eyebrow: "Le site publié",
      title: "Ce que voit *le client*.",
      items: [
        {
          title: "Nom de domaine",
          desc: "Noms d'hôte personnalisés par sous-site, avec enregistrement et résolution. Chaque variante de langue peut avoir le sien.",
        },
        {
          title: "Multilingue véritable",
          desc: "Routes par langue avec titre, description, couverture, favicon et aperçu social propres. Des pages, pas de la traduction automatique.",
        },
        {
          title: "Popups",
          desc: "Cinq formats — modale, slide-in, toast, bannière et plein écran — avec modèles, déclencheurs, règles de page, priorité et contrôle de fréquence par visiteur.",
        },
        {
          title: "Bouton WhatsApp",
          desc: "Flottant, avec préréglage visuel, coin, taille, couleurs et message prérempli. Le numéro vient de l'établissement.",
        },
        {
          title: "Statistiques",
          desc: "Google Analytics et Google Tag Manager par sous-site, avec conservation des UTM de la campagne jusqu'à la réservation.",
        },
        {
          title: "Compte du client",
          desc: "Connexion, inscription et récupération intégrées à StayPass, pour que le client voie et annule ses réservations depuis votre site.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO et GEO",
      title: "Pour les moteurs de recherche *et pour les modèles*.",
      lead:
        "L'éditeur couvre le SEO classique — titre, description, couverture, favicon, aperçu social, icône Apple — et ajoute une couche pensée pour qu'un modèle de langage comprenne votre hébergement sans que personne n'entre sur le site.",
      items: [
        "Type d'entité, nom et description, catégories, cas d'usage et domaines de problème.",
        "Publics cibles et portée géographique.",
        "Signaux de confiance : années d'activité, nombre de clients, certifications et clients mis en avant.",
        "Par page : intention, thème, contexte sémantique et entités liées.",
      ],
      link: "Voir la couche agentique",
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "La page qui va *dans la bio*.",
      lead:
        "Un link-in-bio fait pour des hébergements, pas un générique avec un bouton « réserver » qui mène à un formulaire. Dix types de blocs, thème propre et statistiques propres.",
      items: [
        "**Blocs** : lien, WhatsApp, réserver, avis, texte, galerie, vidéo, carte, contact et séparateur. Chacun avec titre, sous-titre, icône, vignette, ordre, mise en avant et **programmation par date**.",
        "**Design** : modèles de thème, clair et sombre, fond uni, dégradé, image ou motif, sept styles de boutons, coins et typographie — y compris n'importe quelle Google Font.",
        "**Partage** : lien et **QR code téléchargeable** à imprimer à la réception ou sur la carte.",
        "**Statistiques** : visites et clics par jour, pays, référent et appareil, sans IP ni user-agent. Les libellés sont stockés à part pour que renommer un bloc ne casse pas l'historique.",
      ],
    },
    around: {
      eyebrow: "Autour",
      title: "Ce qui *alimente* tout cela.",
      items: [
        {
          title: "Identité de marque",
          desc: "Logo, logo sombre, hero, fond et quatre photos ; palette avec extraction automatique depuis le logo ; ton, typographie, accroche, histoire, publics, contexte de localisation et contact public. Une seule fiche qui alimente le site, le moteur, le LinkHub et les fiches OTA.",
        },
        {
          title: "Galeries",
          desc: "Galeries multimédia de l'établissement et des chambres, avec couverture, ordre, description, images et vidéos. Consommées par le site, le LinkHub et les fiches.",
        },
        {
          title: "Avis",
          desc: "Propres et externes, avec auteur, note, texte, date, langue et lien. Réponse de l'hôtel, import en masse par CSV avec déduplication, et statistiques qui alimentent les widgets et les composants du site.",
        },
        {
          title: "Bibliothèque de fichiers",
          desc: "Dépôt d'images, vidéos, audios et documents de la société, avec dossiers imbriqués et étiquettes. Les applications intégrées peuvent l'ouvrir et recevoir le fichier choisi.",
        },
        {
          title: "Modèles avec remplissage automatique",
          desc: "On crée un modèle à partir d'un sous-site, on en extrait les emplacements à remplir, et « générer » construit un site neuf avec les données réelles de l'hébergement.",
        },
        {
          title: "Présence en ligne",
          desc: "Score de visibilité auditable, connexions aux réseaux déclaratives, fiche Google Business et fiches OTA. Aujourd'hui masquée du menu et sans publication par API : on édite et on recopie vers la destination.",
        },
      ],
    },
    faq: [
      {
        q: "Dois-je charger mes chambres deux fois, une pour le site ?",
        a: "Non, et c'est tout l'intérêt. Les composants métier du builder — moteur intégré, cartes de chambre, catégories, galeries, promotions, avis et services — **se branchent seuls aux données déjà chargées**. Si vous ajoutez une photo à une catégorie, elle apparaît sur le site sans que personne n'y touche.",
      },
      {
        q: "Puis-je avoir le site en plusieurs langues ?",
        a: "Oui. Chaque site a des variantes par langue, et chaque variante a sa propre URL, son titre, sa description, son domaine, sa couverture, son favicon et son aperçu social. Ce n'est pas un traducteur automatique posé sur une page : ce sont des pages.",
      },
      {
        q: "Je ne sais pas concevoir. Est-ce que ça rendra bien quand même ?",
        a: "C'est à cela que servent les modèles avec remplissage automatique : on prend un site comme modèle, on en extrait les emplacements à remplir et « générer » en construit un neuf avec **vos données réelles** — marque, photos, chambres et services. De plus, les nouveaux sites démarrent en mode simple, avec les contrôles avancés masqués tant que vous ne les cherchez pas.",
      },
    ],
    cta: {
      title: "Votre site et votre lien, *le même après-midi*.",
      lead:
        "Si vous avez déjà chargé marque et chambres, générer le site depuis un modèle est l'affaire de quelques minutes, et le LinkHub se remplit tout seul avec les données de l'établissement.",
      steps: [
        "Vous chargez identité de marque et photos.",
        "Vous générez le site depuis un modèle.",
        "Vous publiez sur votre domaine et montez le LinkHub.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Bookfer IA",
      description:
        "Un assistant doté de 272 outils qui consulte et pilote le PMS avec les permissions réelles de l'utilisateur : filtrage avant le tour, contexte dans le prompt et évaluation à chaque appel.",
    },
    hero: {
      eyebrow: "Bookfer IA",
      title: "Un assistant qui *fait*, pas qui explique où cliquer.",
      lead:
        "Il est intégré au bureau, a des sessions persistantes et 272 outils couvrant pratiquement toute la surface du produit. Il consulte la disponibilité, crée des réservations, déplace un séjour avec aperçu, ajuste des tarifs, valide des événements ou publie un site.",
    },
    perms: {
      eyebrow: "Permissions",
      title: "Il opère avec *vos* permissions, pas les siennes.",
      lead:
        "C'est le point délicat de tout agent à l'intérieur d'un système de gestion, et il est résolu en trois couches appliquées à des moments différents.",
      items: [
        "**Avant le tour** — les outils sont filtrés selon votre périmètre réel. Ce que vous ne pouvez pas utiliser n'est même pas proposé au modèle.",
        "**Dans le prompt** — on lui explique quel rôle vous avez, quelles applications vous sont accessibles ou non, quelles capacités, quels établissements, et comment répondre quand quelque chose est bloqué.",
        "**À chaque appel** — l'opération concrète est évaluée contre une table de politiques par service, qui reflète ce qu'exigent les services réels et **comble les trous** là où le backend est plus laxiste que l'interface.",
        "**Avec votre identité** — l'exécution utilise une permission de courte durée émise à votre nom et renouvelée à chaque appel.",
      ],
    },
    tools: {
      eyebrow: "272 outils",
      title: "Pratiquement *toute* la surface du produit.",
      lead:
        "Ce n'est pas un chatbot avec trois actions de démonstration. Ils sont groupés par domaine, et il existe en plus des outils bruts de lecture et d'écriture pour couvrir les endpoints sans outil dédié.",
      items: [
        {
          title: "Réservations",
          desc: "Consulter la disponibilité, créer une réservation, changer d'état, attribuer, retirer et auto-attribuer une unité, déplacer avec aperçu, notes, ajustement de montant, services extras, chercher un client et clients fidèles.",
        },
        {
          title: "Tarifs et promotions",
          desc: "Lister, créer, mettre à jour et supprimer plans tarifaires et promotions, et les activer ou désactiver.",
        },
        {
          title: "Disponibilité",
          desc: "Initialiser, synchroniser, restrictions par jour et blocages de chambre.",
        },
        {
          title: "Chambres",
          desc: "État des chambres, unités et catégories complètes, historique, création en masse, audit du modèle de vente et autocorrection.",
        },
        {
          title: "Revenue",
          desc: "Tableau de bord, séries quotidiennes, fenêtre de réservation, pace, signaux de demande, règles avec essai à blanc, décisions, recommandations, événements et concurrence.",
        },
        {
          title: "Marketing",
          desc: "Sites — créer, publier, dupliquer, pages, langues, SEO et GEO, popups, Studio du Moteur —, galeries, avis, LinkHub et présence en ligne.",
        },
        {
          title: "Société et utilisateurs",
          desc: "Profil, utilisateurs, invitations, rôles, états, accès et recherche par e-mail.",
        },
        {
          title: "Système",
          desc: "Recherche globale, notifications et thème du tableau de bord. Plus toute la bibliothèque de fichiers, dossiers et fichiers.",
        },
      ],
    },
    experience: {
      eyebrow: "L'expérience",
      title: "Vous voyez *ce qu'il fait* pendant qu'il le fait.",
      lead:
        "La réponse arrive en streaming avec la transcription du tour sous les yeux. Ce n'est pas un spinner puis un paragraphe : c'est la liste des opérations, avec leur résultat, au fur et à mesure.",
      items: [
        "Blocs de réponse riches : cartes de réservation, de revenue et listes actionnables, pas seulement du texte.",
        "Boutons dans les cartes qui exécutent des opérations, avec la même vérification de permissions.",
        "Recueil de retours dans la conversation, pour que ce qui n'a pas marché arrive à qui le corrige.",
        "Historique des sessions filtré par l'espace de travail actif : la réception ne voit pas les conversations du marketing.",
      ],
    },
    stats: [
      { value: "272", label: "outils disponibles" },
      { value: "3", label: "couches de vérification des permissions" },
      { value: "10", label: "codes de refus explicites" },
      { value: "1", label: "identité : la vôtre, avec permission de courte durée" },
    ],
    why: {
      eyebrow: "Pourquoi il peut davantage ici",
      title: "Parce qu'il voit *tout le système*, pas un module.",
      lead:
        "Un assistant attaché à un seul produit répond sur ce produit. Comme ici les données ne font qu'une, une phrase croise des choses qui, dans un autre stack, sont trois onglets et deux exports.",
      items: [
        "« Comment se présente le week-end prolongé par rapport à l'an dernier ? » — il regarde le **pace** contre votre propre historique.",
        "« Monte de 10 % les doubles du samedi et dis-moi si ça passe au-dessus du comp-set » — il touche aux **tarifs** et consulte la **concurrence**.",
        "« Publie la promo de dernière minute sur le site » — il crée la **promotion** et publie le **site**.",
        "« Qui arrive aujourd'hui sans chambre attribuée ? » — il croise **réservations** et **unités**.",
      ],
    },
    faq: [
      {
        q: "Que se passe-t-il si je demande quelque chose que mon utilisateur ne peut pas faire ?",
        a: "Il vous explique la permission qui manque, il ne dit pas que la fonction n'existe pas. Il y a des codes de refus explicites — rôle insuffisant, capacité manquante, pas d'espace actif, accès application insuffisant, établissement hors périmètre, changement de mot de passe requis, entre autres — et l'assistant traduit lequel c'était. La différence compte : « vous n'avez pas la permission » se règle en parlant à votre admin, « ça n'existe pas » vous envoie chercher un autre système.",
      },
      {
        q: "L'assistant a-t-il un accès total au système ?",
        a: "Il n'a aucun accès propre. Quand il exécute quelque chose, il le fait **en empruntant votre identité réelle**, avec une permission de courte durée réémise à chaque appel. Si votre adhésion est révoquée en cours de conversation, l'opération suivante échoue et l'assistant l'explique. Il n'y a pas de compte de service aux super-pouvoirs derrière.",
      },
      {
        q: "Voit-on ce qu'il a fait ou faut-il faire confiance ?",
        a: "On le voit. Chaque tour affiche la transcription : quel outil il a utilisé, avec quels paramètres et ce qui est revenu. Et les réponses ne sont pas que du texte : elles reviennent en cartes de réservation ou de revenue avec des boutons qui exécutent, soumis à la même vérification de permissions que tout le reste.",
      },
    ],
    cta: {
      title: "Essayez-le avec *vos propres données*.",
      lead:
        "L'assistant sert vraiment quand il y a un système chargé en dessous. Commencez par l'inscription, chargez un établissement et demandez-lui quelque chose que vous résoudriez aujourd'hui en ouvrant quatre onglets.",
      steps: [
        "Vous vous inscrivez et chargez l'établissement.",
        "Vous entrez dans Bookfer IA depuis le bureau.",
        "Vous demandez quelque chose de réel et regardez la transcription.",
      ],
    },
  },

  agentes: {
    meta: {
      title: "Hébergement agentique",
      description:
        "llms.txt, availability.json, engine-capabilities.json, JSON-LD et un éditeur GEO : ce qu'il faut pour qu'un modèle de langage comprenne votre hébergement et puisse le réserver.",
    },
    hero: {
      eyebrow: "Hébergement agentique",
      title: "Qu'une machine puisse *vous comprendre et vous réserver*.",
      lead:
        "De plus en plus de gens demandent à un modèle avant de chercher. Ce modèle ne voit pas votre carrousel de photos : il voit du texte, des données structurées et des routes. Le moteur de bookfer publie les trois, et l'éditeur GEO vous laisse déclarer ce que vous êtes avec vos mots.",
      secondary: "Voir le moteur",
    },
    shift: {
      eyebrow: "Le changement",
      title: "La requête ne *commence plus dans un moteur de recherche*.",
      lead:
        "Avant, la question était « chalets à Villa La Angostura » et la réponse était dix liens bleus. Aujourd'hui la question est « où loger quatre nuits avec deux enfants et un chien, à moins de trente minutes du centre ? » et la réponse est un paragraphe avec deux ou trois noms. Être dans ce paragraphe dépend qu'il existe quelque chose de vous qui puisse se lire.",
      headOld: "Ce qu'optimise le SEO classique",
      headNew: "Ce qu'ajoute la couche agentique",
      rows: [
        { old: "Titre et description pour le résultat", now: "Description de l'entité, en texte brut" },
        { old: "Image de couverture pour le clic", now: "Disponibilité réelle lisible par machine" },
        { old: "Mots-clés dans la page", now: "Cas d'usage, publics et portée géographique" },
        { old: "Liens entrants", now: "Signaux de confiance déclarés et vérifiables" },
        { old: "Un formulaire de contact", now: "Une route de réservation qu'un agent peut suivre" },
      ],
    },
    surfaces: {
      eyebrow: "Les quatre surfaces",
      title: "Ce que publie *votre moteur*.",
      lead:
        "Cela s'active avec un interrupteur dans les réglages du moteur. À partir de là, votre hébergement a une face publique pour les machines en plus de celle qu'il avait déjà pour les personnes.",
      items: [
        {
          title: "llms.txt",
          desc: "Qui vous êtes, ce que vous vendez et comment on réserve, en texte brut et sans balisage. C'est le fichier qu'un modèle peut lire en entier sans dépenser de tokens à interpréter du HTML.",
        },
        {
          title: "availability.json",
          desc: "Votre disponibilité réelle, dans un format qu'une machine peut interroger. Ce n'est pas un formulaire à remplir : c'est la donnée.",
        },
        {
          title: "engine-capabilities.json",
          desc: "Quelles opérations votre moteur accepte et avec quels paramètres. C'est la différence entre qu'un agent sache que vous existez et qu'il sache comment vous réserver.",
        },
        {
          title: "JSON-LD dans les pages",
          desc: "Données structurées sur le site publié, ce que lisent déjà les moteurs classiques et aussi les modèles quand ils visitent la page.",
        },
      ],
    },
    editor: {
      eyebrow: "Éditeur GEO",
      title: "Vous déclarez ce que vous êtes *avec vos mots*, pas ceux d'un robot.",
      lead:
        "L'éditeur va bien au-delà du SEO classique. C'est une fiche pensée pour qu'un modèle puisse vous décrire avec précision même si personne n'entre sur votre site.",
      items: [
        "**Type d'entité** : hôtel, resort, chambre d'hôtes, location saisonnière, appartement, auberge, motel, camping ou hébergement générique.",
        "**Catégories, cas d'usage et domaines de problème** : à quoi sert votre hébergement, dit de la façon dont les gens le cherchent.",
        "**Publics et portée géographique** : qui vous servez et jusqu'où.",
        "**Signaux de confiance** : années d'activité, nombre de clients, certifications et clients mis en avant.",
        "**Contrôle d'indexation par l'IA** et priorité : la couche s'éteint si vous n'en voulez pas.",
        "**Par page** : intention (informative, commerciale, transactionnelle, comparative ou support), thème, contexte sémantique et entités liées.",
      ],
    },
    consistency: {
      eyebrow: "Pourquoi ça marche ici",
      title: "Parce que la donnée *ne se recopie pas*.",
      lead:
        "La raison pour laquelle un fichier de disponibilité peut se publier sans crainte est la même que celle pour laquelle le calendrier du moteur affiche de vraies unités restantes : c'est le même inventaire que celui du calendrier de l'hôtel. Il n'y a pas d'export nocturne qui puisse se désynchroniser.",
      items: [
        "Une chambre est chargée une fois et apparaît dans le moteur, sur le site, dans le JSON de disponibilité et dans le RMS.",
        "Un blocage de maintenance retire de l'inventaire réel et disparaît de toutes les surfaces à la fois.",
        "La description de marque que vous avez chargée alimente le site, le LinkHub, les fiches OTA et le llms.txt.",
      ],
    },
    dogfood: {
      eyebrow: "Prêcher et pratiquer",
      title: "Ce site aussi a son *llms.txt*.",
      lead:
        "Il serait étrange de demander que votre hébergement soit lisible par une machine et que la page où on vous le demande ne le soit pas.",
      button: "Voir /llms.txt",
    },
    faq: [
      {
        q: "Est-ce que cela me garantit d'apparaître quand quelqu'un demande à ChatGPT ?",
        a: "Non, et quiconque vous dit le contraire vous ment. Personne ne contrôle ce qu'un modèle recommande, comme personne ne contrôle le classement de Google. **Ce qui dépend de vous, c'est que, quand un agent vient regarder, il trouve quelque chose qu'il puisse comprendre** — un texte qui décrit ce que vous êtes, une disponibilité lisible et une route claire pour réserver. Un hébergement dont la seule donnée publique est un carrousel de photos sur Instagram n'a rien qu'un modèle puisse citer.",
      },
      {
        q: "Qu'est-ce que le GEO et en quoi diffère-t-il du SEO ?",
        a: "Le SEO classique optimise pour qu'une personne clique sur un résultat : titre, description, image de couverture. Le **GEO — Generative Engine Optimization —** optimise pour qu'un modèle puisse vous décrire avec précision sans que personne n'entre sur votre site : quel type d'entité vous êtes, pour quels publics, dans quelle zone, avec quels signaux de confiance. Ils sont complémentaires ; l'éditeur du système propose les deux.",
      },
      {
        q: "Puis-je décider que l'IA ne m'indexe pas ?",
        a: "Oui. La couche agentique du moteur s'active ou se désactive dans les réglages, et l'éditeur GEO dispose d'un contrôle d'indexation par l'IA et d'une priorité. C'est votre décision, pas un réglage par défaut que nous imposons.",
      },
    ],
    cta: {
      title: "Activez-la *avec un interrupteur*.",
      lead:
        "La couche agentique est une section de plus dans les réglages du moteur. Si votre inventaire est déjà chargé, publier les routes ne prend rien.",
      steps: [
        "Vous chargez l'inventaire et l'identité de marque.",
        "Vous activez la couche agentique dans le moteur.",
        "Vous remplissez l'éditeur GEO avec vos mots.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Solutions",
      description:
        "Hôtels, chalets et appartements, auberges, glamping et villas, et petits groupes : comment bookfer se configure pour chaque type d'hébergement et pour chaque poste.",
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
          desc: "Builder, sites, galeries, avis, marque et LinkHub. L'accueil affiche la note des avis, la visibilité et l'état du LinkHub. Le hub Réservations n'apparaît même pas.",
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
          desc: "Les e-mails au client partent du domaine de bookfer, sans service de messagerie à part ni configuration SMTP par hôtel.",
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
    honest: {
      eyebrow: "Avant que vous décidiez",
      title: "Ce qu'une formule bookfer ne comprend pas encore",
      text: "Ce n'est dans aucune formule parce que cela n'existe pas encore, pas parce que c'est une option : **channel manager** — pas de synchronisation d'inventaire ni de tarifs avec les OTA — et **passerelle de paiement** — rien n'est encaissé en ligne. Les tarifs des concurrents externes se saisissent à la main, et les fiches Google Business et OTA s'éditent à l'intérieur mais se recopient à la main vers la destination.",
      link: "Voir l'état complet du produit",
    },
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
        "Pourquoi bookfer existe, comment nous travaillons et dans quel état est chaque partie du produit — y compris ce qu'il ne fait pas encore.",
    },
    hero: {
      eyebrow: "À propos",
      title: "Un logiciel pour l'hébergement qui *n'a pas de service informatique*.",
      lead:
        "bookfer est né d'une observation simple : un hôtel de vingt chambres ou un complexe de six chalets a besoin exactement des mêmes sept pièces qu'une chaîne, et aucune des options du marché ne les donne ensemble à un prix qui ait du sens à cette échelle.",
      secondary: "Voir le produit",
    },
    thesis: {
      eyebrow: "La thèse",
      title: "Un petit hébergement ne devrait pas avoir besoin de *cinq prestataires et d'un consultant*.",
      p1: "Aujourd'hui, la sortie habituelle, c'est un PMS d'un côté, un moteur de l'autre, un site fait par quelqu'un qui ne répond plus, un tableur de tarifs et les demandes qui tombent dans un WhatsApp que personne n'organise. Chaque pièce fonctionne ; l'ensemble non. Et le travail de tenir l'ensemble aligné finit par se faire à la main, par la personne de la réception.",
      p2: "Le pari de bookfer, c'est que cet ensemble soit un seul système avec une seule base de données, qu'on puisse s'inscrire sans aide, et que chaque poste de travail ne voie que le sien. Tout le reste — le RMS, la couche d'agents, l'assistant — sort de là : ce sont des choses qu'on ne peut bien faire qu'une fois que les données ne font qu'une.",
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
    status: {
      eyebrow: "État du produit",
      title: "Ce qui marche, ce qui marche à moitié et *ce qui n'existe pas*.",
      lead:
        "Ce tableau est le même que celui que nous utilisons en interne pour décider ce qui se construit. Nous le publions parce que l'alternative — que vous le découvriez en troisième semaine — n'aide personne, et nous moins que quiconque.",
      groups: [
        {
          label: "Solide et en production",
          tone: "ok",
          rows: [
            {
              name: "Modèle de vente double",
              desc: "Pool de catégorie et unité unique 1:1, choisissable par catégorie, avec détection d'état mixte, autocorrection et assistant de migration avec brouillon, aperçu et annulation.",
            },
            {
              name: "Anti-surréservation",
              desc: "Verrou unique par unité et date dans la base de données. Les blocages de maintenance utilisent le même verrou.",
            },
            {
              name: "Moteur de réservation",
              desc: "Parcours complet avec calendrier informatif, Studio du Moteur à sept blocs, deux modes de confirmation et expiration automatique des réservations en attente.",
            },
            {
              name: "Multidevise",
              desc: "Devise de base, d'encaissement et de comparaison, avec gel à l'arrivée, dix devises et cours choisissable pour l'ARS — blue, MEP, CCL ou officiel.",
            },
            {
              name: "Calendrier tape chart",
              desc: "Déplacer et redimensionner avec aperçu du résultat et des conflits avant d'appliquer.",
            },
            {
              name: "Revenue management",
              desc: "Analyse à double axe, pace avec benchmark propre, comp-set, événements, règles avec essai à blanc et boucle fermée vers le moteur de prix.",
            },
            {
              name: "Builder et renderer",
              desc: "Créateur visuel avec composants métier, multilingue, noms de domaine, popups et éditeur SEO et GEO.",
            },
            {
              name: "LinkHub",
              desc: "Dix types de blocs, thèmes, programmation par date, QR et statistiques de visites et de clics.",
            },
            {
              name: "Bookfer IA",
              desc: "272 outils et politique de permissions en trois couches, avec emprunt d'identité et permission de courte durée.",
            },
            {
              name: "Support et inscription",
              desc: "37 visites guidées, formation par espace de travail et inscription en neuf étapes qui reprend sur un autre appareil.",
            },
          ],
        },
        {
          label: "Partiel : ça existe, mais pas complet",
          tone: "partial",
          rows: [
            {
              name: "Présence en ligne",
              desc: "Fonctionne mais masquée du menu par décision produit. Les connexions aux réseaux sont déclaratives — saisie manuelle, sans OAuth réel — et la synchronisation avec les OTA marque un état mais ne publie pas.",
            },
            {
              name: "Google Business",
              desc: "La fiche s'édite et peut être marquée comme publiée dans le modèle, mais aucune API Google n'est connectée : aujourd'hui elle se recopie à la main.",
            },
            {
              name: "Tarifs des concurrents",
              desc: "La découverte des concurrents est automatique ; les tarifs externes se saisissent à la main. Prêt pour Lighthouse, RateGain, PriceLabs et KeyData, non connecté.",
            },
            {
              name: "Contrats et crédits IA",
              desc: "La formule définit quels produits chaque société possède et les crédits IA sont mesurés et rapportés, mais ils ne bloquent pas encore l'accès ni n'imposent de quota.",
            },
            {
              name: "Facturation",
              desc: "La capacité de gérer la facturation existe et la formule vit sur la société, mais aucun système de facturation n'est connecté.",
            },
          ],
        },
        {
          label: "N'existe pas encore",
          tone: "none",
          rows: [
            {
              name: "Channel manager",
              desc: "Aucune intégration d'inventaire ni de tarifs avec les OTA. Tout ce qu'il y a, c'est un journal d'événements enregistrant chaque changement pertinent d'une réservation — créée, confirmée, attribuée, déplacée, arrivée, départ, annulée, no-show — pensé pour alimenter cette intégration quand elle existera. Aujourd'hui c'est un fichier pour rejeu et diagnostic, pas une connexion.",
            },
            {
              name: "Passerelle de paiement",
              desc: "Rien n'est encaissé en ligne. Le modèle de société a l'indicateur de paiements, mais il n'y a pas de passerelle : l'encaissement se fait à l'arrivée, en présentiel, avec le taux de change figé à ce moment-là.",
            },
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Où nous en sommes",
      title: "En pilote de marché, *exprès*.",
      lead:
        "Nous n'essayons pas de faire du chiffre à cette étape. Nous essayons de répondre à quatre questions avec des données, et les quatre dépendent d'hébergements utilisant le système pour de vrai, avec de vraies réservations dedans.",
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
        { value: "0", label: "commission sur les réservations du moteur" },
      ],
    },
    cta: {
      title: "Si tout cela *ressemble à votre problème*.",
      lead:
        "Écrivez-nous et on en parle sans détour. Si bookfer ne sert pas encore à votre cas, nous vous le dirons dans cette même conversation.",
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
        "Écrivez-nous et on en parle sans détour : ce que bookfer règle pour votre hébergement et ce qu'il ne règle pas encore. Vous pouvez aussi commencer l'inscription gratuite vous-même.",
    },
    eyebrow: "Contact",
    title: "Racontez-nous comment *vous recevez les réservations aujourd'hui*.",
    lead:
      "Vous n'avez pas besoin de savoir quel module il vous faut. Savoir combien d'unités vous avez, si vous vendez sur les OTA et quelle part de la journée passe à répondre sur la disponibilité suffit déjà pour vous dire si bookfer vous sert — ou s'il ne vous sert pas encore.",
    checks: [
      "Nous répondons dans la journée ouvrée.",
      "Si quelque chose dont vous avez besoin n'existe pas encore, on vous le dit tout de suite.",
      "Si vous voulez, on charge les chambres ensemble sur un appel court.",
    ],
    directLabel: "Ou écrivez-nous directement",
    shortcutTitle: "Vous préférez ne pas attendre une réponse ?",
    shortcutText:
      "L'inscription est autonome, gratuite et ne demande pas de carte. Vous pouvez avoir le moteur en fonctionnement avant que nous répondions à ce formulaire.",
    whatsappMessage: "Bonjour, je souhaite découvrir bookfer pour mon hébergement.",
  },

  legal: {
    updated: "Dernière mise à jour",
    updatedDate: "30 août 2026",
    privacy: {
      meta: {
        title: "Politique de confidentialité",
        description:
          "Quelles données bookfer collecte sur ce site et dans la plateforme, avec quels prestataires elles sont traitées et comment demander leur suppression.",
      },
      title: "Politique de confidentialité",
      lead: "Quelles données nous collectons, pour quoi, avec qui nous les traitons et comment demander leur suppression.",
      blocks: [
        { h: "1. Qui nous sommes" },
        {
          p: "bookfer est une plateforme de gestion pour hébergements, exploitée depuis l'Argentine. Pour toute question relative à vos données personnelles, écrivez-nous à [hola@bookfer.com](mailto:hola@bookfer.com).",
        },
        { h: "2. Deux rôles différents" },
        { p: "Il vaut la peine de les séparer, car les obligations ne sont pas les mêmes :" },
        {
          ul: [
            "**Ce site et la relation commerciale avec vous.** Ici nous sommes responsables des données : nous les collectons pour vous contacter et pour comprendre d'où viennent les demandes.",
            "**La plateforme.** Quand un hébergement charge les données de ses clients dans bookfer, le responsable de ces données est l'hébergement ; nous les traitons pour son compte et selon ses instructions.",
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
          p: "Nous n'utilisons les données du formulaire que pour vous contacter au sujet de bookfer, et nous ne les vendons ni ne les cédons à des tiers à des fins publicitaires.",
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
          p: "Vous pouvez nous demander l'accès à vos données, leur rectification, leur mise à jour ou leur suppression en écrivant à [hola@bookfer.com](mailto:hola@bookfer.com). En Argentine, l'Agence d'accès à l'information publique est l'autorité de contrôle en matière de protection des données personnelles et traite les réclamations de qui estime ses droits atteints.",
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
          "Conditions d'utilisation de la plateforme bookfer : ce que comprend le service, ce qui est en pilote, les responsabilités de chaque partie et comment résilier un compte.",
      },
      title: "Conditions générales",
      lead: "Les règles d'utilisation de la plateforme, écrites pour être comprises.",
      blocks: [
        { h: "1. Ce qu'est le service" },
        {
          p: "bookfer est une plateforme dans le cloud pour gérer un hébergement : réservations, chambres, moteur de réservation public, sites web, revenue management, portail du client et un assistant d'intelligence artificielle. On y accède par navigateur ; aucun logiciel n'est livré à installer.",
        },
        { h: "2. État du produit" },
        {
          p: "La plateforme est en **pilote de marché**. Certaines fonctionnalités sont déclarées partielles et d'autres n'existent pas — parmi elles le **channel manager** et la **passerelle de paiement**. Le détail à jour est publié dans [État du produit](/nosotros#estado) et fait partie de ce que vous acceptez en souscrivant : nous ne promettons pas de fonctionnalités qui y figurent comme inexistantes.",
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
        { h: "5. Formules et facturation" },
        {
          p: "Chaque formule définit les produits qu'elle comprend et les plafonds d'établissements et d'utilisateurs ; ce qui est publié dans [Tarifs](/precios) vient du même catalogue avec lequel votre compte est résolu. Les périodes gratuites et les essais durent ce qui y est indiqué. Il n'y a pas de durée minimale ni de pénalité de résiliation.",
        },
        {
          p: "Le moteur de réservation ne prend pas de commission par réservation. L'encaissement auprès du client ne passe pas par bookfer : il se fait aujourd'hui à l'arrivée, entre l'hébergement et le client.",
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
          p: "Le logiciel, la marque et la documentation de bookfer sont les nôtres. Le contenu que vous chargez — textes, photos, logo, design de votre site — est le vôtre, et vous nous autorisez à l'héberger et à l'afficher uniquement pour fournir le service.",
        },
        { h: "10. Résiliation" },
        {
          p: "Vous pouvez résilier votre compte quand vous voulez en écrivant à [hola@bookfer.com](mailto:hola@bookfer.com). Avant de le fermer, nous vous laissons un délai raisonnable pour télécharger ce que vous souhaitez conserver.",
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
          "Quels cookies et technologies de mesure utilise le site de bookfer, lesquels sont nécessaires et comment désactiver le reste.",
      },
      title: "Politique de cookies",
      lead: "Ce que ce site stocke dans votre navigateur et ce que vous pouvez désactiver.",
      blocks: [
        { h: "1. Le site public" },
        {
          p: "Les pages de `bookfer.com` sont statiques et n'ont pas besoin de cookies pour fonctionner. Nous n'utilisons pas de cookies propres pour vous profiler ni pour nous souvenir de qui vous êtes entre deux visites. Le seul qui puisse apparaître est celui qui garde la **langue que vous avez choisie** dans le sélecteur, pour ne pas vous renvoyer vers une autre à la prochaine visite.",
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
          p: "L'application sur `app.bookfer.com` utilise bien des cookies **nécessaires** : ceux qui maintiennent votre session ouverte. Sans eux, le système ne peut pas être utilisé, et ils ne peuvent pas être désactivés sans fermer la session.",
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
          p: "Pour toute question à ce sujet, écrivez-nous à [hola@bookfer.com](mailto:hola@bookfer.com). Voir aussi la [politique de confidentialité](/legal/privacidad).",
        },
      ],
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
