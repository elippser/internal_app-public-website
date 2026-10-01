/** Centro legal (PT): tradução de es.ts. Mesmas chaves e estrutura. */
import type { LegalCenterDict } from "./es";

export const legalCenterPt: LegalCenterDict = {
  area: "Legal",
  home: "Ir para a página inicial de roombir.com",
  back: "Voltar ao site",
  language: "Idioma",
  nav: {
    label: "Documentos legais",
    terms: "Software",
    siteTerms: "Site",
    privacy: "Privacidade",
    cookies: "Cookies",
  },
  toc: "Índice",
  essential: "Cláusula essencial",
  control: {
    label: "Ficha do documento",
    document: "Documento",
    version: "Versão",
    effective: "Vigência",
    updated: "Última atualização",
    prevailing: "Idioma que prevalece",
    sections: "Seções",
    hash: "Impressão SHA-256",
  },
  spanish: "Espanhol",
  courtesy: "Este documento é publicado em espanhol. O texto em espanhol é o único que prevalece.",
  translation: "Tradução. Em caso de divergência, prevalece o texto em espanhol.",
  pending: "pendente",
  footer: {
    legend:
      "Confidencial e proprietário. © {year} Roombir. Todos os direitos reservados. É proibida a reprodução, cópia ou divulgação sem autorização.",
    documents: "Documentos",
    contact: "Contato jurídico",
    docLine: "Roombir · {doc} · Versão {version} · Vigência {date}",
  },
  docs: {
    terms: {
      meta: {
        title: "Termos e Condições de Uso",
        description:
          "Condições de acesso e uso da Plataforma Roombir: licença, condutas proibidas, sanções por uso indevido, prova, auditoria e jurisdição.",
      },
      kicker: "Documento legal · Software",
      title: "Termos e Condições de Uso",
      lead: "Este documento rege todo acesso à Plataforma Roombir. É aceito por inteiro, de forma expressa e antes da criação da conta. Sem aceitação não há acesso.",
      notice: {
        label: "Aviso",
        body: "A atividade na Plataforma é registrada e constitui prova. Copiar, clonar, extrair dados por meios automatizados, aplicar engenharia reversa, registrar-se com dados falsos ou usar a Plataforma para desenvolver um produto concorrente é **Uso Indevido**. O Uso Indevido é sancionado com severidade. Ao executar uma sanção, a Roombir entra em contato com a parte responsável e o assunto passa à via legal.",
      },
      summary: {
        title: "Quadro de consequências",
        note: "Resumo informativo. Rege o texto completo de cada seção.",
        head: { subject: "Hipótese", result: "Consequência", ref: "Seção" },
        rows: [
          {
            subject: "Registro com dados falsos ou inexatos",
            result: "A licença é nula desde a origem. Todo acesso é acesso sem licença",
            ref: "8.2",
          },
          {
            subject: "Uso Indevido",
            result: "Sanções severas, determinadas conforme a gravidade da infração",
            ref: "13.1",
          },
          {
            subject: "Execução de uma sanção",
            result: "A Roombir entra em contato com a parte responsável. O assunto passa à via legal",
            ref: "13.2",
          },
          {
            subject: "Conta do infrator e contas vinculadas",
            result: "Cancelamento imediato, sem aviso prévio e sem reembolso",
            ref: "13.3",
          },
          {
            subject: "Cópias, réplicas e derivados",
            result: "Cessação imediata e destruição certificada por escrito",
            ref: "13.4",
          },
          {
            subject: "Detecção, perícias, honorários e custas",
            result: "A cargo do infrator, na totalidade",
            ref: "13.6",
          },
          {
            subject: "Recusa em ser auditado",
            result: "Presume-se reconhecimento da infração",
            ref: "14.2",
          },
        ],
      },
    },
    siteTerms: {
      meta: {
        title: "Termos de Uso do Site",
        description:
          "Condições de acesso ao site da Roombir: propriedade intelectual, usos proibidos e medidas em caso de descumprimento.",
      },
      kicker: "Documento legal · Site",
      title: "Termos de Uso do Site",
      lead: "Navegar neste site implica aceitar estes termos. Quem não os aceita deve abandoná-lo.",
      notice: {
        label: "Aviso",
        body: "Todo o conteúdo deste site é propriedade da Roombir ou de seus licenciantes. É proibido copiá-lo, cloná-lo, extraí-lo por meios automatizados, submetê-lo a engenharia reversa ou usá-lo para treinar modelos de inteligência artificial. As consequências de um descumprimento são severas: a Roombir bloqueia o acesso sem aviso prévio, conserva os registros técnicos, entra em contato com a parte responsável e leva o assunto à via legal.",
      },
      summary: {
        title: "Medidas em caso de descumprimento",
        note: "Resumo informativo. Rege o texto completo de cada seção.",
        head: { subject: "Medida", result: "Alcance", ref: "Seção" },
        rows: [
          { subject: "Bloqueio do acesso", result: "Por IP, faixas ou agentes. Sem aviso prévio", ref: "7" },
          {
            subject: "Registros técnicos",
            result: "São conservados como comprovação do descumprimento",
            ref: "7",
          },
          {
            subject: "Comunicação",
            result: "A Roombir entra em contato com a parte responsável",
            ref: "7",
          },
          {
            subject: "Via legal",
            result: "O assunto tramita exclusivamente pela via legal",
            ref: "7",
          },
        ],
      },
    },
    privacy: { kicker: "Documento legal · Dados pessoais" },
    cookies: { kicker: "Documento legal · Cookies" },
  },
};
