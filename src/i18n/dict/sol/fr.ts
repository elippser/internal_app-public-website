import type { SolDict } from "./es";

/** Menus du header et pages de solutions, en français. Même forme que `sol/es.ts`. */
const menus: SolDict["menus"] = {
  platform: "Plateforme",
  ia: "Roombir IA",
  solutions: "Solutions",
  platformGroups: {
    operations: "Opérations",
    distribution: "Distribution",
    marketing: "Marketing",
  },
  platformItems: {
    pms: { title: "Établissements, chambres et réservations", desc: "Vous chargez une fois et gérez depuis le panneau du jour, la liste et le calendrier." },
    informes: { title: "Rapports", desc: "Occupation, revenus, canaux et ce qui est mal saisi." },
    motor: { title: "Moteur de réservation", desc: "Le calendrier où le client voit le prix et réserve seul." },
    revenue: { title: "Revenue", desc: "Le prix de chaque date, avec le pourquoi." },
    linkhub: { title: "LinkHub", desc: "Le lien de votre bio, avec le moteur intégré." },
    agentes: { title: "Lisible par une IA", desc: "Votre établissement, compréhensible et réservable par un assistant." },
    web: { title: "Site web", desc: "Un éditeur avec assistant, relié à vos réservations." },
    marca: { title: "Marque", desc: "Logo, palette et ton, saisis une seule fois." },
    archivos: { title: "Photos et fichiers", desc: "Bibliothèque et galeries au même endroit." },
    resenas: { title: "Avis", desc: "Des avis de plusieurs sources, avec réponse depuis ici." },
  },
  platformFoot: "Tout sur une seule base de données.",
  platformLink: "Voir toute la plateforme",
  iaFeatured: {
    label: "L'assistant",
    title: "Roombir IA",
    desc: "Toute la gestion, en une conversation. Vous demandez, il le fait, avec vos autorisations.",
    more: "Ce que vous pouvez lui demander",
  },
  iaLabel: "Ce qu'il fait",
  // El único enlace del menú Roombir IA (las secciones son anclas de la misma página).
  iaLink: "Tout sur Roombir IA",
  iaItems: {
    pedidos: { title: "Ce que vous pouvez lui demander", desc: "Réservations, tarifs, chambres et site web, en une phrase." },
    destino: { title: "État touristique", desc: "Jours fériés, événements, météo et vols de votre destination, avec la source." },
    estrategia: { title: "Tour stratégique", desc: "Vous lui demandez plus de réservations, il propose un plan qui s'exécute." },
    permisos: { title: "Permissions", desc: "Il agit avec vos permissions, pas avec les siennes." },
    hablar: { title: "Comment lui parler", desc: "Par écrit, à la voix ou en lui montrant une capture." },
    diferencia: { title: "La différence", desc: "Pourquoi ce n'est pas un chat d'IA généraliste." },
  },
  solutionGroups: {
    byType: "Par type d'hébergement",
    byRole: "Par poste",
  },
  solutionItems: {
    hoteles: { title: "Hôtels, apparthôtels et auberges", desc: "Vous vendez la catégorie, le système attribue la chambre." },
    alojamientos: { title: "Chalets et locations", desc: "Chaque unité avec son nom, ses photos et son prix." },
    propietarios: { title: "Propriétaires", desc: "L'activité sous les yeux, sans être à la réception." },
    direccion: { title: "Direction générale", desc: "L'exploitation et l'équipe dans un seul système." },
    revenue: { title: "Revenue managers", desc: "Le prix de chaque date, avec la trace complète." },
    recepcion: { title: "Réception", desc: "Tout le service depuis le tableau du jour." },
    housekeeping: { title: "Étages", desc: "L'état de chaque chambre, depuis le téléphone." },
  },
  solutionsLink: "Voir toutes les solutions",
  more: "Plus",
};

const index: SolDict["index"] = {
  byType: {
    eyebrow: "Par type d'hébergement",
    title: "Deux façons de vendre, *un même système*.",
    lead: "Certains établissements vendent une catégorie et attribuent la chambre ensuite, d'autres vendent chaque unité sous son propre nom. Roombir fait les deux, et les deux à la fois dans le même établissement.",
  },
  byRole: {
    eyebrow: "Par poste",
    title: "Chaque poste, *son espace de travail*.",
    lead: "Les espaces modèles des postes les plus courants : ce que chacun voit, ce qu'il règle et comment il se relie au reste de l'équipe.",
  },
  open: "Voir la solution",
};

const pages: SolDict["pages"] = {
  hoteles: {
    meta: {
      title: "Hôtels, apparthôtels et auberges",
      description:
        "Roombir pour les établissements qui vendent par type de chambre : le client réserve une catégorie et le système attribue la chambre. Attribution automatique, calendrier tape chart, états par étage et un assistant qui agit.",
    },
    hero: {
      eyebrow: "Solutions · Par type d'hébergement",
      title: "Vous vendez la catégorie, *le système attribue la chambre*.",
      lead: "Dans un hôtel, un apparthôtel ou une auberge, le client achète « une double supérieure », pas la 203. Roombir fonctionne ainsi dès la base : la catégorie regroupe des chambres interchangeables, le moteur vend la catégorie et la chambre s'attribue seule ou c'est la réception qui décide.",
    },
    space: {
      eyebrow: "Comment ça se vend",
      title: "Une catégorie, *plusieurs chambres identiques*.",
      lead: "Chaque catégorie se configure en pool : dix doubles interchangeables se vendent comme une seule offre, avec leur prix, leurs photos et leurs équipements. À la confirmation, le système choisit la chambre.",
      items: [
        "**Attribution automatique** qui réduit les trous entre réservations ou répartit l'usure entre les chambres, selon votre choix.",
        "**Ou sans attribution** : la réservation entre dans la catégorie et la réception choisit la chambre depuis le calendrier.",
        "**Recompactage des attributions** pour libérer des trous quand l'occupation se resserre.",
        "**Si vous avez aussi une suite ou un chalet unique**, cette catégorie se vend sous son propre nom dans le même établissement.",
      ],
    },
    day: {
      eyebrow: "Un samedi complet",
      title: "La même journée, *avec et sans* roombir.",
      lead: "Un hôtel de trente chambres à forte occupation. À gauche, ce qui se passe avec des tableurs et un moteur à part ; à droite, ce que fait le système.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "08:00",
          old: "Trois réservations sont arrivées par le site pendant la nuit. Il faut les reporter dans le tableur et voir dans quelle chambre elles tiennent.",
          now: "Elles sont entrées seules dans le calendrier, attribuées à la chambre qui laisse le moins de trous. La réception les voit dans le tableau du jour.",
        },
        {
          time: "11:30",
          old: "Une famille veut rester une nuit de plus et sa chambre est prise dès demain.",
          now: "La réception prolonge la réservation dans le calendrier et, avant de relâcher, voit le conflit et vers quelle chambre libre la déplacer.",
        },
        {
          time: "13:00",
          old: "Le service des étages ne sait pas quelles chambres sont déjà libres.",
          now: "Chaque chambre a son état — départ en attente, nettoyage, disponible — et le service des étages le met à jour depuis son espace.",
        },
        {
          time: "18:00",
          old: "Il reste une double libre et personne ne sait s'il faut baisser le prix ou le tenir.",
          now: "Revenue affiche la recommandation pour cette date avec le motif écrit. Si vous l'acceptez, elle entre dans le moteur.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que ça règle",
      title: "Pensé pour *l'exploitation d'un hôtel*.",
      items: [
        { title: "Calendrier tape chart", desc: "Les chambres jour par jour : vous glissez, vous prolongez et vous voyez les conflits avant de relâcher. [Voir Réservations](/producto/pms)." },
        { title: "États par étage", desc: "Six états avec des transitions valides, un historique par chambre et un plan d'occupation par étage." },
        { title: "Une nuit, une vente", desc: "Chaque nuit de chaque chambre est un verrou unique dans la base de données : deux réservations ne peuvent pas prendre la même." },
        { title: "Chaque poste, son écran", desc: "Réception, étages, revenue et administration entrent dans leur propre espace de travail, avec leur menu." },
      ],
    },
    faq: [
      {
        q: "Est-ce adapté aux auberges ?",
        a: "Oui, pour l'exploitation de tous les jours : tableau du jour avec arrivées et départs, un espace pour le service des étages et des visites guidées pour le personnel qui tourne. Chaque type de chambre se saisit comme une catégorie avec sa capacité.",
      },
      {
        q: "Puis-je choisir la chambre moi-même plutôt que le système ?",
        a: "Oui. L'attribution automatique est une option : vous pouvez laisser les réservations entrer sans chambre et les attribuer vous-même depuis le calendrier ou la liste des réservations.",
      },
      {
        q: "Que se passe-t-il si deux personnes réservent la dernière chambre au même moment ?",
        a: "L'une des deux n'entre pas. Chaque nuit de chaque chambre est un **verrou unique dans la base de données** : ce n'est pas une validation que l'on peut contourner, c'est la base qui l'empêche.",
      },
    ],
    cta: {
      title: "Saisissez vos catégories et *voyez comment elles s'attribuent*.",
      lead: "L'inscription est guidée : vous saisissez l'établissement, les catégories et les chambres, et la disponibilité s'initialise seule.",
      steps: [
        "Vous saisissez l'établissement et les catégories.",
        "Vous créez les chambres d'un coup, par saisie en masse.",
        "Vous reliez le moteur à votre site et recevez vos premières réservations.",
      ],
    },
  },

  alojamientos: {
    meta: {
      title: "Chalets, appartements et locations",
      description:
        "Roombir pour les établissements qui vendent chaque unité sous son propre nom : chalets, appartements, villas et glamping. Chaque unité avec ses photos, son prix et son calendrier, et un moteur qui affiche la disponibilité jour par jour.",
    },
    hero: {
      eyebrow: "Solutions · Par type d'hébergement",
      title: "Chaque unité se vend *sous son propre nom*.",
      lead: "Personne ne réserve « un chalet deux pièces » : on réserve l'Alerce, avec ses photos, sa vue et son prix. Dans Roombir, chaque unité est sa propre catégorie, avec son calendrier, ses tarifs et sa fiche dans le moteur.",
    },
    space: {
      eyebrow: "Comment ça se vend",
      title: "Une unité, *sa propre fiche*.",
      lead: "En mode unité, la catégorie contient exactement une unité. Aucune attribution à gérer, aucun doute sur ce que le client a réservé.",
      items: [
        "**Photos, description, capacité et prix** propres dans le moteur et sur le site, unité par unité.",
        "**Séjour minimum et jours fermés** par date, pour les ponts et la haute saison.",
        "**Blocages par demi-journée** : la maintenance de l'après-midi bloque cette nuit et laisse la matinée vendable.",
        "**Si vous avez aussi des chambres standard**, elles cohabitent : le mode se choisit par catégorie, pas pour tout l'établissement.",
      ],
    },
    day: {
      eyebrow: "Un vendredi de pont",
      title: "La même journée, *avec et sans* roombir.",
      lead: "Un ensemble de six chalets en saison. À gauche, ce qu'on nous raconte au premier appel ; à droite, ce que fait le système.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "09:00",
          old: "Dix messages WhatsApp pour savoir quel chalet est libre le week-end.",
          now: "Le lien du moteur affiche, jour par jour, les unités restantes et le prix à partir de. Trois clients ont réservé seuls.",
        },
        {
          time: "12:00",
          old: "Quelqu'un demande deux nuits alors que le minimum du pont est de trois. Il faut l'expliquer à la main.",
          now: "Le moteur indique le minimum de nuits dès le choix de l'arrivée. La question n'arrive pas.",
        },
        {
          time: "15:00",
          old: "Le Coihue a une fuite d'eau et il faut le retirer de la vente jusqu'à demain.",
          now: "Vous bloquez l'après-midi pour maintenance : cette nuit sort du moteur et la matinée suivante reste vendable.",
        },
        {
          time: "20:00",
          old: "Un touriste brésilien demande le prix en réais et vous calculez le change à la main.",
          now: "Le moteur lui affiche le prix dans sa devise. Vous encaissez dans la vôtre et la conversion est figée au check-in.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que ça règle",
      title: "Pensé pour *vendre des unités uniques*.",
      items: [
        { title: "La disponibilité en un coup d'œil", desc: "Prix à partir de, unités restantes et jours fermés sur chaque jour du calendrier, avant de choisir les dates. [Voir le moteur](/producto/motor)." },
        { title: "LinkHub pour votre bio", desc: "Le lien Instagram ouvre le même moteur, avec la disponibilité réelle. [Voir LinkHub](/producto/marketing#linkhub)." },
        { title: "Dix devises", desc: "Le client consulte dans sa devise et vous encaissez dans la vôtre. Pour le peso argentin, vous choisissez officiel, blue, MEP ou CCL." },
        { title: "Un site avec vos unités", desc: "L'éditeur construit le site avec des sections qui lisent vos unités, vos photos et vos avis. [Voir Marketing](/producto/marketing#web)." },
      ],
    },
    faq: [
      {
        q: "Puis-je avoir des chalets et des chambres dans le même établissement ?",
        a: "Oui. Les chalets se vendent comme unités sous leur propre nom et les chambres comme catégories de plusieurs chambres identiques, et ils cohabitent dans le même calendrier et le même moteur.",
      },
      {
        q: "Chaque chalet peut-il avoir son prix ?",
        a: "Oui. Chaque unité a son prix de base et peut avoir ses propres plans tarifaires et promotions, avec un séjour minimum par date.",
      },
      {
        q: "Est-ce adapté au glamping et aux villas ?",
        a: "Oui : pour tout hébergement où chaque unité est différente et se vend sous son nom. Dômes, maisons, appartements ou villas se saisissent comme un chalet.",
      },
    ],
    cta: {
      title: "Saisissez vos unités et *partagez le lien*.",
      lead: "L'inscription est guidée. Vous saisissez chaque unité avec ses photos et son prix, et le moteur est prêt à envoyer par WhatsApp ou à mettre dans votre bio.",
      steps: [
        "Vous saisissez l'établissement et chaque unité avec ses photos.",
        "Vous configurez séjours minimum et dates fermées.",
        "Vous partagez le lien du moteur ou l'intégrez à votre site.",
      ],
    },
  },

  propietarios: {
    meta: {
      title: "Propriétaires",
      description:
        "Roombir pour les propriétaires d'établissements : savoir où en est l'activité sans être à la réception, décider avec des chiffres et déléguer avec des permissions claires par personne et par établissement.",
    },
    hero: {
      eyebrow: "Solutions · Par poste",
      title: "Votre activité sous les yeux, *sans être à la réception*.",
      lead: "En tant que propriétaire, vous devez savoir comment évolue l'occupation, ce qui s'est vendu et ce qui est mal saisi, sans demander un tableur à personne. Et que chaque membre de l'équipe fasse sa part sans avoir accès à tout.",
    },
    space: {
      eyebrow: "Son espace de travail",
      title: "Tout le système, *et qui voit quoi*.",
      lead: "L'espace d'administration voit toutes les applications du système, et c'est de là qu'on donne accès au reste de l'équipe, personne par personne et établissement par établissement.",
      items: [
        "**Rapports** d'occupation, prix moyen, revenus et annulations, comparés à la période précédente.",
        "**État et gestion** : ce qui est mal saisi aujourd'hui, comme des réservations en attente non confirmées ou des arrivées sans chambre.",
        "**Utilisateurs et capacités** : dix capacités administratives accordées une par une, et un accès limité aux établissements concernés.",
        "**Roombir IA** pour demander ce qui n'est pas à l'écran, en une phrase.",
      ],
    },
    day: {
      eyebrow: "Une semaine de propriétaire",
      title: "La même semaine, *avec et sans* roombir.",
      lead: "Un propriétaire avec un hôtel et un ensemble de chalets, qui n'est pas tous les jours au comptoir.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "Lundi",
          old: "Vous écrivez au responsable pour savoir comment s'est terminé le week-end. Il répond à midi avec une photo du tableur.",
          now: "Vous ouvrez Rapports depuis le téléphone : occupation, revenus et annulations de la période, avec l'écart par rapport à la précédente.",
        },
        {
          time: "Mardi",
          old: "Vous apprenez par un client que sa réservation n'a jamais été confirmée.",
          now: "État et gestion signale les réservations en attente non confirmées depuis plus d'un jour, avant l'arrivée du client.",
        },
        {
          time: "Jeudi",
          old: "Une nouvelle personne arrive à la réception et vous lui passez votre identifiant faute d'en avoir un autre.",
          now: "Vous lui créez son utilisateur dans l'espace de réception, limité à cet établissement. Il ne voit ni revenue ni la configuration.",
        },
        {
          time: "Vendredi",
          old: "Vous vous demandez quel canal vous apporte le plus de réservations et lequel annule le plus.",
          now: "Vous le demandez à Roombir IA, qui répond avec le chiffre et sa provenance.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que vous y gagnez",
      title: "Décider avec des chiffres, *déléguer avec des permissions*.",
      items: [
        { title: "Des rapports sans tableur", desc: "Calculés sur les mêmes réservations que gère votre équipe. [Voir Rapports](/producto/informes)." },
        { title: "Plusieurs établissements", desc: "Un hôtel et des chalets sous le même compte, chacun avec sa devise et son équipe. [Voir Établissements](/producto/pms)." },
        { title: "De vraies permissions", desc: "Chaque personne entre avec son utilisateur, dans son espace et ses établissements. Les opérations sensibles sont journalisées." },
        { title: "Un assistant qui répond", desc: "Roombir IA lit les mêmes données et vous répond avec le chiffre, ou fait la modification si vous la demandez. [Voir Roombir IA](/producto/ia)." },
      ],
    },
    faq: [
      {
        q: "Puis-je suivre l'activité depuis le téléphone ?",
        a: "Oui. Le système s'utilise depuis le navigateur et il est pensé pour le téléphone et la tablette, pas seulement pour l'ordinateur de la réception.",
      },
      {
        q: "Que voit le personnel que j'embauche ?",
        a: "Seulement ce que vous lui donnez : l'espace de travail décide du menu et de l'écran d'accueil, et l'accès par établissement décide des hébergements visibles. Le service des étages, par exemple, ne voit pas les tarifs.",
      },
      {
        q: "Dois-je installer quelque chose ?",
        a: "Non. On entre par le navigateur, et l'inscription se fait en neuf étapes guidées que vous pouvez interrompre et reprendre depuis un autre appareil.",
      },
    ],
    cta: {
      title: "Voyez votre établissement *comme le voit le système*.",
      lead: "Vous vous inscrivez, saisissez l'établissement et, dans l'après-midi, vos rapports sont prêts. Si vous préférez une démonstration avant, nous le parcourons ensemble.",
      steps: [
        "Vous créez la société et le premier établissement.",
        "Vous invitez votre équipe, chacun dans son espace.",
        "Vous suivez l'activité depuis Rapports et Roombir IA.",
      ],
    },
  },

  direccion: {
    meta: {
      title: "Direction générale",
      description:
        "Roombir pour les directeurs et directeurs généraux : l'exploitation du jour, l'équipe et les chiffres dans le même système, avec un espace de travail par poste et une section qui signale ce qui est mal saisi.",
    },
    hero: {
      eyebrow: "Solutions · Par poste",
      title: "Toute l'exploitation, *dans un seul système*.",
      lead: "Diriger un établissement, c'est coordonner la réception, le ménage, les ventes et des chiffres qui vivent souvent dans des outils différents. Dans Roombir, c'est un seul système : chaque poste travaille dans son espace et vous voyez l'ensemble.",
    },
    space: {
      eyebrow: "Son espace de travail",
      title: "Voir l'ensemble *sans entrer dans chaque service*.",
      lead: "L'espace d'administration réunit tous les domaines du système, et c'est de là qu'on définit ce que chaque poste voit et peut faire.",
      items: [
        "**Tableau du jour** avec les arrivées, les départs et les réservations qui demandent une action.",
        "**État et gestion** : ce qui est mal saisi aujourd'hui, avant que cela devienne un client sans chambre.",
        "**Espaces de travail par poste** : vous définissez les applications que voient la réception, les étages, le marketing ou le revenue.",
        "**Intégration par espace** : chaque nouvelle personne a les visites guidées des applications de son poste.",
      ],
    },
    day: {
      eyebrow: "Une journée de direction",
      title: "La même journée, *avec et sans* roombir.",
      lead: "Un hôtel de quarante chambres avec une équipe de douze personnes en rotation.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "08:00",
          old: "La réunion du matin commence par rassembler les données de trois systèmes et d'un tableur.",
          now: "Le tableau du jour et les rapports ont déjà les arrivées, les départs, l'occupation et ce qui reste en suspens.",
        },
        {
          time: "10:30",
          old: "Une nouvelle réceptionniste arrive et quelqu'un lui explique le système en plein service.",
          now: "Son espace de réception propose les visites guidées de chaque écran, sur l'interface réelle.",
        },
        {
          time: "14:00",
          old: "Une réclamation : une chambre a été remise sans être nettoyée et personne ne sait ce qui s'est passé.",
          now: "L'historique de la chambre indique qui a changé chaque état, à quelle heure et avec quelle note.",
        },
        {
          time: "17:00",
          old: "Revenue, site web et réservations se coordonnent par messages entre trois personnes.",
          now: "Tous trois travaillent sur les mêmes données : le tarif accepté dans Revenue est déjà dans le moteur et sur le site.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que vous y gagnez",
      title: "Une équipe coordonnée *par le même système*.",
      items: [
        { title: "Des espaces par poste", desc: "Chaque poste avec son menu, son écran d'accueil et ses permissions : opérer, configurer ou rien." },
        { title: "Visites guidées", desc: "38 visites qui s'affichent sur l'écran réel et composent l'intégration de chaque nouvelle personne." },
        { title: "Historique par chambre", desc: "Qui a changé chaque état, quand et avec quelle note. [Voir Chambres](/producto/pms)." },
        { title: "Rapports et revenue", desc: "Les chiffres de l'exploitation et le prix de chaque date avec le pourquoi. [Voir Revenue](/producto/revenue)." },
      ],
    },
    faq: [
      {
        q: "Puis-je limiter ce que voit chaque poste ?",
        a: "Oui. L'espace de travail décide du menu et de l'écran d'accueil, et les permissions se règlent par application et par niveau : opérer, configurer ou rien.",
      },
      {
        q: "Qu'en est-il du personnel qui tourne ?",
        a: "Chaque nouvelle personne entre dans son espace avec les visites guidées de ses applications. Et l'utilisateur peut être créé avec un mot de passe temporaire à changer à la première connexion.",
      },
      {
        q: "Est-ce adapté si je dirige plusieurs établissements ?",
        a: "Oui. Plusieurs établissements cohabitent dans le même compte et l'accès de chaque personne se limite à ceux qui la concernent.",
      },
    ],
    cta: {
      title: "Montez les espaces de votre équipe *en un après-midi*.",
      lead: "L'inscription crée l'établissement et propose les espaces de travail selon votre façon d'opérer. Ensuite, vous invitez chaque personne dans le sien.",
      steps: [
        "Vous créez l'établissement et choisissez votre façon d'opérer.",
        "Vous ajustez les espaces de travail par poste.",
        "Vous invitez l'équipe, chacun dans son espace.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue managers",
      description:
        "Roombir pour les revenue managers : le prix de chaque date avec la trace du pourquoi, le pace comparé à votre propre historique, la concurrence, les événements de la destination et le tarif qui entre dans le moteur dès qu'il est accepté.",
    },
    hero: {
      eyebrow: "Solutions · Par poste",
      title: "Le prix de chaque date, *avec la trace complète*.",
      lead: "Un revenue manager n'a pas besoin d'une boîte noire de plus qui renvoie un chiffre. Il doit voir quelles données ont servi, quelle règle s'est appliquée et quel plafond a joué, et que le tarif accepté arrive dans le moteur sans le recopier à la main.",
    },
    space: {
      eyebrow: "Son espace de travail",
      title: "Revenue, rapports et tarifs, *au même endroit*.",
      lead: "L'espace revenue réunit le RMS avec les tarifs, la disponibilité et les rapports, sur les mêmes données que gère la réception.",
      items: [
        "**Document de décision** par date : les données vues, la règle appliquée, le plafond et le résultat.",
        "**Pace comparé à votre propre historique**, par jour de semaine, mois et anticipation, avec la taille de l'échantillon visible.",
        "**Règles avec essai à blanc** : treize variables et un essai qui montre ce qu'aurait fait chaque règle avant de l'activer.",
        "**Concurrence** : elle se découvre par proximité et ressemblance, et vous saisissez le tarif des concurrents externes comme référence.",
      ],
    },
    day: {
      eyebrow: "Dix jours avant un événement",
      title: "La même décision, *avec et sans* roombir.",
      lead: "Un hôtel dans une ville qui accueille un grand festival dans dix jours.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "09:00",
          old: "Vous apprenez l'existence du festival par un client qui demande s'il reste de la place.",
          now: "L'événement est déjà dans la liste, suggéré par le système selon la proximité et la date, en attente de votre validation.",
        },
        {
          time: "11:00",
          old: "Vous comparez le rythme des réservations avec l'an dernier dans deux tableurs.",
          now: "Le pace compare à votre propre historique pour ces dates et indique sur combien de réservations il a été calculé.",
        },
        {
          time: "15:00",
          old: "Vous décidez de monter le tarif et demandez à quelqu'un de changer le prix dans le moteur.",
          now: "Vous acceptez la recommandation et le tarif entre dans le moteur comme premier palier du prix de cette date.",
        },
        {
          time: "+7 jours",
          old: "Personne ne se souvient pourquoi le prix a monté.",
          now: "Le document de décision garde ce que le système a vu, quelle règle s'est appliquée et qui a accepté.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que vous y gagnez",
      title: "Des décisions *que l'on peut expliquer*.",
      items: [
        { title: "La trace de chaque prix", desc: "Quelles données, quelle règle et quel plafond, date par date. [Voir Revenue](/producto/revenue)." },
        { title: "La destination, sources à l'appui", desc: "Jours fériés, événements dans votre rayon, météo et liaisons aériennes observées, chaque donnée avec sa date. [Voir l'état touristique](/producto/ia#destino)." },
        { title: "Boucle fermée avec le moteur", desc: "Le tarif accepté est le premier palier de la chaîne de prix du moteur. [Voir le moteur](/producto/motor)." },
        { title: "Des questions en une phrase", desc: "Roombir IA lit le pace, les événements et les tarifs et vous propose quoi faire, avec votre confirmation." },
      ],
    },
    faq: [
      {
        q: "Applique-t-il les prix tout seul ?",
        a: "Par défaut, il suggère, et vous acceptez ou refusez chaque recommandation. Si vous l'activez, les recommandations peuvent s'appliquer seules.",
      },
      {
        q: "Et si j'ai peu d'historique ?",
        a: "L'écran vous le dit : chaque calcul indique sur combien de réservations il repose, et ne vous vend pas une confiance qui n'existe pas.",
      },
      {
        q: "D'où viennent les tarifs de la concurrence ?",
        a: "Les concurrents qui utilisent aussi roombir apportent leur tarif réel. Les autres se découvrent seuls par proximité et ressemblance, et vous saisissez leur tarif comme référence fixe ou par date.",
      },
    ],
    cta: {
      title: "Le prix *n'est plus une intuition*.",
      lead: "Revenue devient utile dès que vous avez votre propre historique, et en attendant il vous dit avec quel échantillon il travaille.",
      steps: [
        "Vous saisissez l'établissement et les tarifs de base.",
        "Vous passez en revue les événements et la concurrence de votre destination.",
        "Vous acceptez la première recommandation et elle part dans le moteur.",
      ],
    },
  },

  recepcion: {
    meta: {
      title: "Réception",
      description:
        "Roombir pour la réception : le tableau du jour, la liste des réservations, le calendrier tape chart et un assistant qui fait les modifications en une phrase, avec des e-mails au client qui partent seuls.",
    },
    hero: {
      eyebrow: "Solutions · Par poste",
      title: "Tout le service, *depuis le tableau du jour*.",
      lead: "La réception vit entre arrivées, départs, changements de chambre et questions sur WhatsApp. L'espace de réception s'ouvre sur le tableau du jour et met à portée de main tout ce dont le service a besoin, et rien de plus.",
    },
    space: {
      eyebrow: "Son espace de travail",
      title: "Ce qu'il faut au service, *et rien d'autre*.",
      lead: "Le menu de la réception contient les écrans de réservations et l'état des chambres. Revenue, la configuration et l'éditeur web restent dans d'autres espaces.",
      items: [
        "**Tableau du jour** avec les arrivées et les départs, en cartes actionnables.",
        "**Toutes les réservations** avec un panneau latéral : résumé, activité et notes sans quitter la liste.",
        "**Calendrier tape chart** : vous glissez ou prolongez une réservation et voyez le conflit avant de relâcher.",
        "**Nouvelle réservation** pour ce qui arrive par téléphone ou WhatsApp, avec canal d'origine et promotions.",
      ],
    },
    day: {
      eyebrow: "Un mardi ordinaire",
      title: "Le même service, *avec et sans* roombir.",
      lead: "Un établissement de douze unités et une personne au comptoir.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "08:10",
          old: "Trois WhatsApp pour connaître la disponibilité du week-end. Vous ouvrez Excel pour répondre un par un.",
          now: "Vous leur envoyez le lien du moteur : prix et unités restantes, jour par jour. Deux ont réservé seuls.",
        },
        {
          time: "11:00",
          old: "Il faut passer M. García dans une autre chambre. Vous cherchez la réservation, la modifiez et écrivez l'e-mail.",
          now: "Vous demandez à Roombir IA de le passer en 203 et de le prévenir par e-mail. Il le fait et vous renvoie la carte avec la modification.",
        },
        {
          time: "14:20",
          old: "Un client veut rester une nuit de plus et vous ne savez pas si la chambre est libre.",
          now: "Vous prolongez la réservation dans le calendrier et, avant de relâcher, voyez si elle en chevauche une autre et comment le prix change.",
        },
        {
          time: "17:00",
          old: "Il faut envoyer la confirmation d'une réservation téléphonique depuis votre boîte personnelle.",
          now: "Vous la saisissez dans Nouvelle réservation et l'e-mail au client part seul, depuis le domaine de roombir avec votre boîte en adresse de réponse.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que vous y gagnez",
      title: "Moins de clics, *moins de messages*.",
      items: [
        { title: "Un assistant qui agit", desc: "Vous déplacez, attribuez et prévenez en une phrase, avec vos permissions. [Voir Roombir IA](/producto/ia)." },
        { title: "Des e-mails qui partent seuls", desc: "Les confirmations et les avis au client partent sans configurer de serveur de messagerie." },
        { title: "Une nuit, une vente", desc: "Deux réservations ne peuvent pas prendre la même nuit de la même chambre : la base de données l'empêche." },
        { title: "Visites guidées", desc: "Si vous êtes nouveau au poste, chaque écran a sa visite sur l'interface réelle. [Voir Réservations](/producto/pms)." },
      ],
    },
    faq: [
      {
        q: "Faut-il savoir utiliser un logiciel hôtelier ?",
        a: "Pas besoin. Votre espace ne contient que les écrans de la réception, et chacun a une visite guidée qui s'affiche sur l'écran réel.",
      },
      {
        q: "Qui confirme les réservations qui arrivent par le moteur ?",
        a: "Cela dépend de la configuration : le client les confirme par un lien envoyé par e-mail ou c'est vous qui les acceptez. Dans les deux cas, les réservations en attente expirent seules.",
      },
      {
        q: "Puis-je l'utiliser sur une tablette au comptoir ?",
        a: "Oui. Il s'utilise depuis le navigateur et il est pensé pour le téléphone et la tablette, en plus de l'ordinateur.",
      },
    ],
    cta: {
      title: "Ouvrez le service *sur le tableau du jour*.",
      lead: "Votre responsable vous invite dans votre espace de réception et vous entrez avec votre utilisateur. Les visites guidées font le reste.",
      steps: [
        "Vous recevez l'invitation à votre espace.",
        "Vous suivez la visite du tableau du jour.",
        "Vous gérez le service depuis les réservations et le calendrier.",
      ],
    },
  },

  housekeeping: {
    meta: {
      title: "Étages",
      description:
        "Roombir pour le service des étages : l'état de chaque chambre par étage, des changements d'état sans erreur possible et un historique, dans un espace de travail sans tarifs ni revenue.",
    },
    hero: {
      eyebrow: "Solutions · Par poste",
      title: "L'état de chaque chambre, *sans demander à la réception*.",
      lead: "Le service des étages doit savoir quelles chambres sont libérées, lesquelles préparer pour une arrivée et lesquelles sont en maintenance. Dans Roombir, il le voit dans son propre espace, avec un tableau par étage qui partage les données avec la réception.",
    },
    space: {
      eyebrow: "Son espace de travail",
      title: "États et plan, *sans tarifs*.",
      lead: "L'espace des étages contient l'état des chambres et le plan d'occupation. Il ne voit ni les tarifs, ni le revenue, ni la configuration du moteur.",
      items: [
        "**Six états** : disponible, occupée, nettoyage, maintenance, bloquée et départ en attente.",
        "**Des changements sans erreur possible** : une chambre occupée ne passe qu'en départ en attente ; personne ne libère une chambre avec le client encore dedans.",
        "**Tableau par étage et par catégorie**, avec filtres, pour lire la maison d'un coup d'œil.",
        "**Historique par chambre** : qui a changé chaque état, quand et avec quelle note.",
      ],
    },
    day: {
      eyebrow: "Une matinée de départs",
      title: "Le même service, *avec et sans* roombir.",
      lead: "Un hôtel avec quinze départs et dix arrivées dans la journée.",
      headOld: "Aujourd'hui",
      headNew: "Avec roombir",
      rows: [
        {
          time: "09:00",
          old: "La réception prévient par téléphone des chambres déjà libérées.",
          now: "Quand la réception fait le check-out, la chambre passe en départ en attente et apparaît sur votre tableau.",
        },
        {
          time: "11:00",
          old: "Vous avez fini la 203, mais la réception ne le sait pas et la considère toujours sale.",
          now: "Vous la passez en disponible depuis le téléphone et la réception la voit disponible sur son écran.",
        },
        {
          time: "13:00",
          old: "La 205 a un robinet cassé et le signalement reste sur un bout de papier.",
          now: "Vous la marquez en maintenance avec une note, et le changement reste dans l'historique de la chambre.",
        },
        {
          time: "15:00",
          old: "Un client arrive tôt et personne ne sait quelle chambre est prête.",
          now: "Le tableau par étage montre celles qui sont disponibles à cet instant.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ce que vous y gagnez",
      title: "Moins d'allers-retours *avec la réception*.",
      items: [
        { title: "Tableau par étage", desc: "Toute la maison d'un coup d'œil, avec des filtres par étage et par catégorie. [Voir Chambres](/producto/pms)." },
        { title: "Depuis le téléphone", desc: "L'espace des étages s'utilise depuis le navigateur du téléphone, dans la chambre même." },
        { title: "Pas d'informations en trop", desc: "Votre menu n'a ni tarifs ni revenue : seulement ce dont le service a besoin." },
        { title: "Visites guidées", desc: "Chaque écran propose sa visite sur l'interface réelle pour ceux qui débutent." },
      ],
    },
    faq: [
      {
        q: "Le personnel des étages voit-il les tarifs ?",
        a: "Non, si vous ne le souhaitez pas. L'espace des étages a son propre menu — état des chambres et plan — sans tarifs ni revenue.",
      },
      {
        q: "Pourquoi ne puis-je pas passer une chambre occupée en disponible ?",
        a: "Parce que le client est toujours dedans. Une chambre occupée ne passe qu'en départ en attente, qui arrive avec le check-out ; ainsi, personne ne vend une chambre encore utilisée.",
      },
      {
        q: "Les changements sont-ils enregistrés ?",
        a: "Oui. Chaque chambre garde son historique d'états : qui, quand et avec quelle note.",
      },
    ],
    cta: {
      title: "Que les étages *voient la même chose* que la réception.",
      lead: "Le responsable crée l'utilisateur dans l'espace des étages et chaque personne entre avec le sien, depuis le téléphone.",
      steps: [
        "Vous recevez l'invitation à votre espace.",
        "Vous suivez la visite de l'état des chambres.",
        "Vous changez les états depuis le téléphone, chambre par chambre.",
      ],
    },
  },
};

export const solFr: SolDict = { menus, index, pages };
