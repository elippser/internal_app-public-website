/** Centre juridique (FR) : traduction de es.ts. Mêmes clés et même structure. */
import type { LegalCenterDict } from "./es";

export const legalCenterFr: LegalCenterDict = {
  area: "Juridique",
  home: "Aller à l'accueil de roombir.com",
  back: "Retour au site",
  language: "Langue",
  nav: {
    label: "Documents juridiques",
    terms: "Logiciel",
    siteTerms: "Site web",
    privacy: "Confidentialité",
    cookies: "Cookies",
  },
  toc: "Sommaire",
  essential: "Clause essentielle",
  control: {
    label: "Fiche du document",
    document: "Document",
    version: "Version",
    effective: "Entrée en vigueur",
    updated: "Dernière mise à jour",
    prevailing: "Langue qui prévaut",
    sections: "Sections",
    hash: "Empreinte SHA-256",
  },
  spanish: "Espagnol",
  courtesy: "Ce document est publié en espagnol. Le texte espagnol est le seul qui prévaut.",
  translation: "Traduction. En cas de divergence, le texte espagnol prévaut.",
  pending: "à définir",
  footer: {
    legend:
      "Confidentiel et propriétaire. © {year} Roombir. Tous droits réservés. Toute reproduction, copie ou divulgation sans autorisation est interdite.",
    documents: "Documents",
    contact: "Contact juridique",
    docLine: "Roombir · {doc} · Version {version} · En vigueur le {date}",
  },
  docs: {
    terms: {
      meta: {
        title: "Conditions générales d'utilisation",
        description:
          "Conditions d'accès et d'utilisation de la Plateforme Roombir : licence, conduites interdites, sanctions pour usage abusif, preuve, audit et juridiction.",
      },
      kicker: "Document juridique · Logiciel",
      title: "Conditions générales d'utilisation",
      lead: "Ce document régit tout accès à la Plateforme Roombir. Il s'accepte en entier, de manière expresse et avant la création du compte. Sans acceptation, aucun accès.",
      notice: {
        label: "Avis",
        body: "L'activité sur la Plateforme est enregistrée et constitue une preuve. Copier, cloner, extraire des données par des moyens automatisés, pratiquer l'ingénierie inverse, s'inscrire avec de fausses données ou utiliser la Plateforme pour développer un produit concurrent constitue un **Usage abusif**. L'Usage abusif est sanctionné avec sévérité. Lorsqu'une sanction est exécutée, Roombir prend contact avec la partie responsable et l'affaire passe sur le terrain juridique.",
      },
      summary: {
        title: "Tableau des conséquences",
        note: "Résumé informatif. Le texte intégral de chaque section fait foi.",
        head: { subject: "Cas", result: "Conséquence", ref: "Section" },
        rows: [
          {
            subject: "Inscription avec des données fausses ou inexactes",
            result: "La licence est nulle dès l'origine. Tout accès est un accès sans licence",
            ref: "8.2",
          },
          {
            subject: "Usage abusif",
            result: "Sanctions sévères, déterminées selon la gravité de l'infraction",
            ref: "13.1",
          },
          {
            subject: "Exécution d'une sanction",
            result: "Roombir prend contact avec la partie responsable. L'affaire passe sur le terrain juridique",
            ref: "13.2",
          },
          {
            subject: "Compte du contrevenant et comptes liés",
            result: "Résiliation immédiate, sans préavis et sans remboursement",
            ref: "13.3",
          },
          {
            subject: "Copies, répliques et dérivés",
            result: "Cessation immédiate et destruction certifiée par écrit",
            ref: "13.4",
          },
          {
            subject: "Détection, expertises, honoraires et dépens",
            result: "À la charge du contrevenant, en totalité",
            ref: "13.6",
          },
          {
            subject: "Refus de se soumettre à un audit",
            result: "Présumé valoir reconnaissance de l'infraction",
            ref: "14.2",
          },
        ],
      },
    },
    siteTerms: {
      meta: {
        title: "Conditions d'utilisation du site",
        description:
          "Conditions d'accès au site web de Roombir : propriété intellectuelle, usages interdits et mesures en cas de manquement.",
      },
      kicker: "Document juridique · Site web",
      title: "Conditions d'utilisation du site",
      lead: "Naviguer sur ce site vaut acceptation de ces conditions. Quiconque ne les accepte pas doit le quitter.",
      notice: {
        label: "Avis",
        body: "Tout le contenu de ce site est la propriété de Roombir ou de ses concédants. Il est interdit de le copier, de le cloner, de l'extraire par des moyens automatisés, de le soumettre à l'ingénierie inverse ou de l'utiliser pour entraîner des modèles d'intelligence artificielle. Les conséquences d'un manquement sont sévères : Roombir bloque l'accès sans préavis, conserve les journaux techniques, prend contact avec la partie responsable et porte l'affaire sur le terrain juridique.",
      },
      summary: {
        title: "Mesures en cas de manquement",
        note: "Résumé informatif. Le texte intégral de chaque section fait foi.",
        head: { subject: "Mesure", result: "Portée", ref: "Section" },
        rows: [
          { subject: "Blocage de l'accès", result: "Par IP, plages ou agents. Sans préavis", ref: "7" },
          {
            subject: "Journaux techniques",
            result: "Conservés comme trace du manquement",
            ref: "7",
          },
          {
            subject: "Prise de contact",
            result: "Roombir prend contact avec la partie responsable",
            ref: "7",
          },
          {
            subject: "Voie juridique",
            result: "L'affaire est traitée exclusivement par la voie juridique",
            ref: "7",
          },
        ],
      },
    },
    privacy: { kicker: "Document juridique · Données personnelles" },
    cookies: { kicker: "Document juridique · Cookies" },
  },
};
