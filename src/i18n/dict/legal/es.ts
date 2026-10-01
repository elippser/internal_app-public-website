/**
 * El centro legal (`/legal/*`): su chrome y el marco de cada documento.
 *
 * Acá NO está el texto legal. Los Términos del software y los del sitio viven
 * en `content/legal/es/*.md`, se publican sólo en español y no se traducen
 * desde el código: una traducción jurídica la define el abogado. Lo que se
 * traduce es lo que rodea al documento: navegación, ficha, aviso y resumen.
 *
 * En los resúmenes, `ref` es la cláusula que respalda la fila: si el
 * documento cambia de numeración, cambia acá.
 *
 * Dos reglas de contenido (29-09-2026): no se publican montos —las sanciones
 * se nombran como severas, y lo que sigue es el contacto con la parte
 * responsable y la vía legal— y no se muestra el estado de revisión del
 * documento.
 *
 * El tono es deliberado y es el contrario al del resto del sitio: frío,
 * impersonal, sin adjetivos. Frases cortas, en tercera persona.
 */
export const legalCenterEs = {
  area: "Legal",
  home: "Ir al inicio de roombir.com",
  back: "Volver al sitio",
  language: "Idioma",
  nav: {
    label: "Documentos legales",
    terms: "Software",
    siteTerms: "Sitio web",
    privacy: "Privacidad",
    cookies: "Cookies",
  },
  toc: "Índice",
  essential: "Cláusula esencial",
  control: {
    label: "Ficha del documento",
    document: "Documento",
    version: "Versión",
    effective: "Vigencia",
    updated: "Última actualización",
    prevailing: "Idioma que prevalece",
    sections: "Secciones",
    hash: "Huella SHA-256",
  },
  spanish: "Español",
  /** Si un idioma no tiene su traducción y se sirve el texto en español. */
  courtesy: "Este documento se publica en español. El texto en español es el único que prevalece.",
  /** Sobre cada traducción. En español no se muestra. */
  translation: "Traducción. En caso de discrepancia, prevalece el texto en español.",
  pending: "pendiente",
  footer: {
    legend:
      "Confidencial y propietario. © {year} Roombir. Todos los derechos reservados. La reproducción, copia o divulgación sin autorización está prohibida.",
    documents: "Documentos",
    contact: "Contacto legal",
    docLine: "Roombir · {doc} · Versión {version} · Vigencia {date}",
  },
  docs: {
    terms: {
      meta: {
        title: "Términos y Condiciones de Uso",
        description:
          "Condiciones de acceso y uso de la Plataforma Roombir: licencia, conductas prohibidas, sanciones por uso indebido, prueba, auditoría y jurisdicción.",
      },
      kicker: "Documento legal · Software",
      title: "Términos y Condiciones de Uso",
      lead: "Este documento rige todo acceso a la Plataforma Roombir. Se acepta completo, de forma expresa y antes de crear la cuenta. Sin aceptación no hay acceso.",
      notice: {
        label: "Aviso",
        body: "La actividad en la Plataforma se registra y constituye prueba. Copiar, clonar, extraer datos por medios automatizados, aplicar ingeniería inversa, registrarse con datos falsos o usar la Plataforma para desarrollar un producto competidor es **Uso Indebido**. El Uso Indebido se sanciona con severidad. Al ejecutar una sanción, Roombir se comunica con la parte responsable y el asunto pasa a la vía legal.",
      },
      summary: {
        title: "Cuadro de consecuencias",
        note: "Resumen informativo. Rige el texto completo de cada sección.",
        head: { subject: "Supuesto", result: "Consecuencia", ref: "Sección" },
        rows: [
          {
            subject: "Registro con datos falsos o inexactos",
            result: "La licencia es nula desde su origen. Todo acceso es acceso sin licencia",
            ref: "8.2",
          },
          {
            subject: "Uso Indebido",
            result: "Sanciones severas, determinadas según la gravedad de la infracción",
            ref: "13.1",
          },
          {
            subject: "Ejecución de una sanción",
            result: "Roombir se comunica con la parte responsable. El asunto pasa a la vía legal",
            ref: "13.2",
          },
          {
            subject: "Cuenta del infractor y cuentas vinculadas",
            result: "Cancelación inmediata, sin aviso previo y sin reembolso",
            ref: "13.3",
          },
          {
            subject: "Copias, réplicas y derivados",
            result: "Cese inmediato y destrucción certificada por escrito",
            ref: "13.4",
          },
          {
            subject: "Detección, peritajes, honorarios y costas",
            result: "A cargo del infractor, en su totalidad",
            ref: "13.6",
          },
          {
            subject: "Negativa a ser auditado",
            result: "Se presume reconocimiento de la infracción",
            ref: "14.2",
          },
        ],
      },
    },
    siteTerms: {
      meta: {
        title: "Términos de Uso del Sitio",
        description:
          "Condiciones de acceso al sitio web de Roombir: propiedad intelectual, usos prohibidos y medidas ante incumplimiento.",
      },
      kicker: "Documento legal · Sitio web",
      title: "Términos de Uso del Sitio",
      lead: "Navegar este sitio implica aceptar estos términos. Quien no los acepta debe abandonarlo.",
      notice: {
        label: "Aviso",
        body: "Todo el contenido de este sitio es propiedad de Roombir o de sus licenciantes. Está prohibido copiarlo, clonarlo, extraerlo por medios automatizados, someterlo a ingeniería inversa o usarlo para entrenar modelos de inteligencia artificial. Las consecuencias de un incumplimiento son severas: Roombir bloquea el acceso sin previo aviso, conserva los registros técnicos, se comunica con la parte responsable y lleva el asunto a la vía legal.",
      },
      summary: {
        title: "Medidas ante incumplimiento",
        note: "Resumen informativo. Rige el texto completo de cada sección.",
        head: { subject: "Medida", result: "Alcance", ref: "Sección" },
        rows: [
          { subject: "Bloqueo del acceso", result: "Por IP, rangos o agentes. Sin previo aviso", ref: "7" },
          {
            subject: "Registros técnicos",
            result: "Se conservan como constancia del incumplimiento",
            ref: "7",
          },
          {
            subject: "Comunicación",
            result: "Roombir se comunica con la parte responsable",
            ref: "7",
          },
          {
            subject: "Vía legal",
            result: "El asunto se tramita exclusivamente por la vía legal",
            ref: "7",
          },
        ],
      },
    },
    privacy: { kicker: "Documento legal · Datos personales" },
    cookies: { kicker: "Documento legal · Cookies" },
  },
};

export type LegalCenterDict = typeof legalCenterEs;
