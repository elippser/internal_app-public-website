/** Legal center (EN): translation of es.ts. Same keys and structure. */
import type { LegalCenterDict } from "./es";

export const legalCenterEn: LegalCenterDict = {
  area: "Legal",
  home: "Go to the roombir.com home page",
  back: "Back to the site",
  language: "Language",
  nav: {
    label: "Legal documents",
    terms: "Software",
    siteTerms: "Website",
    privacy: "Privacy",
    cookies: "Cookies",
  },
  toc: "Contents",
  essential: "Essential clause",
  control: {
    label: "Document record",
    document: "Document",
    version: "Version",
    effective: "Effective",
    updated: "Last updated",
    prevailing: "Prevailing language",
    sections: "Sections",
    hash: "SHA-256 fingerprint",
  },
  spanish: "Spanish",
  courtesy: "This document is published in Spanish. The Spanish text is the only one that prevails.",
  translation: "Translation. In the event of any discrepancy, the Spanish text prevails.",
  pending: "pending",
  footer: {
    legend:
      "Confidential and proprietary. © {year} Roombir. All rights reserved. Reproduction, copying or disclosure without authorization is prohibited.",
    documents: "Documents",
    contact: "Legal contact",
    docLine: "Roombir · {doc} · Version {version} · Effective {date}",
  },
  docs: {
    terms: {
      meta: {
        title: "Terms and Conditions of Use",
        description:
          "Conditions of access to and use of the Roombir Platform: license, prohibited conduct, sanctions for misuse, evidence, audit and jurisdiction.",
      },
      kicker: "Legal document · Software",
      title: "Terms and Conditions of Use",
      lead: "This document governs all access to the Roombir Platform. It is accepted in full, expressly, and before the account is created. Without acceptance there is no access.",
      notice: {
        label: "Notice",
        body: "Activity on the Platform is recorded and constitutes evidence. Copying, cloning, extracting data by automated means, reverse engineering, registering with false information or using the Platform to develop a competing product is **Misuse**. Misuse is sanctioned severely. When a sanction is enforced, Roombir contacts the responsible party and the matter proceeds through legal channels.",
      },
      summary: {
        title: "Table of consequences",
        note: "Informational summary. The full text of each section governs.",
        head: { subject: "Event", result: "Consequence", ref: "Section" },
        rows: [
          {
            subject: "Registration with false or inaccurate information",
            result: "The license is void from the outset. All access is unlicensed access",
            ref: "8.2",
          },
          {
            subject: "Misuse",
            result: "Severe sanctions, determined by the seriousness of the infringement",
            ref: "13.1",
          },
          {
            subject: "Enforcement of a sanction",
            result: "Roombir contacts the responsible party. The matter proceeds through legal channels",
            ref: "13.2",
          },
          {
            subject: "Account of the infringer and linked accounts",
            result: "Immediate cancellation, without prior notice and without refund",
            ref: "13.3",
          },
          {
            subject: "Copies, replicas and derivatives",
            result: "Immediate cessation and destruction, certified in writing",
            ref: "13.4",
          },
          {
            subject: "Detection, forensic examination, fees and court costs",
            result: "Borne by the infringer, in full",
            ref: "13.6",
          },
          {
            subject: "Refusal to be audited",
            result: "Presumed to be an admission of the infringement",
            ref: "14.2",
          },
        ],
      },
    },
    siteTerms: {
      meta: {
        title: "Website Terms of Use",
        description:
          "Conditions of access to the Roombir website: intellectual property, prohibited uses and measures in the event of a breach.",
      },
      kicker: "Legal document · Website",
      title: "Website Terms of Use",
      lead: "Browsing this site constitutes acceptance of these terms. Anyone who does not accept them must leave it.",
      notice: {
        label: "Notice",
        body: "All content on this site is the property of Roombir or its licensors. Copying it, cloning it, extracting it by automated means, reverse engineering it or using it to train artificial intelligence models is prohibited. The consequences of a breach are severe: Roombir blocks access without prior notice, retains the technical records, contacts the responsible party and takes the matter through legal channels.",
      },
      summary: {
        title: "Measures in the event of a breach",
        note: "Informational summary. The full text of each section governs.",
        head: { subject: "Measure", result: "Scope", ref: "Section" },
        rows: [
          { subject: "Blocking of access", result: "By IP, ranges or agents. Without prior notice", ref: "7" },
          {
            subject: "Technical records",
            result: "Retained as a record of the breach",
            ref: "7",
          },
          {
            subject: "Contact",
            result: "Roombir contacts the responsible party",
            ref: "7",
          },
          {
            subject: "Legal channels",
            result: "The matter is handled exclusively through legal channels",
            ref: "7",
          },
        ],
      },
    },
    privacy: { kicker: "Legal document · Personal data" },
    cookies: { kicker: "Legal document · Cookies" },
  },
};
