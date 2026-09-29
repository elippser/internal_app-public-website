import type { PlatDict } from "./es";

export const platFr: PlatDict = {
  promo: {
    title: "Encore un PMS générique ?",
    accent: "Non merci.",
    body: "Assez des systèmes qui vous obligent à travailler à leur façon. Roombir se configure selon le fonctionnement de votre établissement, et chaque poste voit ce qui le concerne.",
    cta: "Plateforme complète",
  },
  // La tarjeta de la primera columna del menú Soluciones: sin botón.
  solPromo: {
    title: "Aucun établissement n’est pareil,",
    accent: "aucun poste non plus.",
    body: "Un hôtel ne se gère pas comme des chalets, et la réception ne regarde pas ce que regarde le revenue. Roombir se configure selon votre façon de vendre et votre équipe.",
  },
  page: {
    meta: {
      title: "Plateforme complète : Roombir en un coup d'œil",
      description:
        "Roombir de l'intérieur : opérations, distribution, marketing et l'assistant, sur la même base de données. Des écrans réels du système.",
    },
    hero: {
      eyebrow: "Plateforme complète",
      title: "Toute la plateforme, *en un coup d'œil*.",
      lead: "Voici Roombir de l'intérieur. Choisissez un domaine et regardez ses écrans : tous lisent et écrivent dans la même base de données, donc ce qui change dans l'un apparaît dans les autres.",
    },
    shot: {
      label: "Roombir · Hotel del Parque",
      tag: "Écrans réels, données d'exemple",
      areas: "Domaines",
      captions: {
        operations: "L'établissement, ses chambres et chaque réservation, dans le calendrier et le tableau du jour.",
        distribution: "Où vous vendez et à quel prix : votre propre moteur, le tarif de chaque date et les assistants qui réservent.",
        marketing: "Le site, la marque et les avis, reliés à la disponibilité réelle.",
        ia: "Un assistant qui pilote le système avec vos droits et connaît votre destination.",
      },
    },
    map: {
      eyebrow: "La carte",
      title: "Chaque partie, *avec sa page*.",
      lead: "Pour voir le détail, entrez. Si vous ne trouvez pas ce que vous cherchez, [écrivez-nous](/contacto) et nous vous dirons si cela existe.",
    },
    cta: {
      title: "Voyez-la fonctionner *avec vos données*.",
      lead: "La mise en route est guidée : vous saisissez l'établissement, le système crée les espaces de travail et vous commencez par l'essentiel.",
      steps: [
        "Saisissez l'établissement et les chambres.",
        "Choisissez ce que voit chaque poste.",
        "Connectez le moteur et commencez à vendre.",
      ],
    },
  },
};
