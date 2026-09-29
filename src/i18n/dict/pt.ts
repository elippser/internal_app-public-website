import type { Dictionary } from "./es";
import { solPt } from "./sol/pt";
import { platPt } from "./plat/pt";
import { intelPt } from "./intel/pt";

/**
 * Português do Brasil. As mesmas chaves de `es.ts` — o TypeScript não deixa
 * ser de outro jeito.
 *
 * O tom é o mesmo do castelhano: direto, concreto e disposto a dizer o que o
 * produto ainda não faz.
 */
const pt: Dictionary = {
  site: {
    title: "Roombir · PMS, motor, site e revenue sem cinco fornecedores",
    description:
      "Reservas, motor de reservas próprio, site, revenue management e um assistente de IA que executa, sobre um único banco de dados. Para hotéis, chalés, hostels e aluguéis da América Latina.",
    tagline: "Software hoteleiro sem cinco fornecedores",
    og: {
      title: "Sua hospedagem inteira, sem cinco fornecedores.",
      lead: "Reservas, quartos, motor próprio, site, revenue e um assistente que executa. Sobre um único banco de dados, feito na Argentina.",
      chips: ["PMS", "Motor de reservas", "Sites", "Revenue", "LinkHub", "Roombir IA"],
    },
  },

  nav: {
    menus: { ...solPt.menus, platformPromo: platPt.promo, solutionsPromo: platPt.solPromo, intelligence: intelPt.card },
    product: "Plataforma",
    platform: "A plataforma",
    contact: "Contato",
    login: "Entrar",
    signup: "Começar",
    home: "roombir, início",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    more: "Mais",
    skip: "Ir para o conteúdo",
    primary: "Principal",
    megaFoot: "Tudo sobre um único banco de dados.",
    megaLink: "Ver a plataforma completa",
    language: "Idioma",
    featured: "O assistente",
    featuredMore: "O que você pode pedir",
    links: {
      solutions: "Soluções",
      pricing: "Preços",
      about: "Sobre nós",
    },
    groups: {
      operation: "A operação",
      growth: "O crescimento",
    },
    products: {
      ia: {
        title: "Roombir IA",
        desc: "Toda a gestão, em uma conversa. Você pede e ele faz, com as suas permissões.",
      },
      pms: {
        title: "PMS",
        desc: "Propriedades, quartos, reservas e o motor, sobre um único inventário.",
      },
      informes: {
        title: "Relatórios",
        desc: "Ocupação, receita, cancelamentos, canais e o que está mal cadastrado hoje.",
      },
      revenue: {
        title: "Revenue",
        desc: "O preço de cada data, com o rastro do porquê e seu destino à vista.",
      },
      marketing: {
        title: "Marketing",
        desc: "Site com assistente, marca, arquivos, avaliações e LinkHub, conectados às suas reservas.",
      },
    },
    pmsParts: {
      propiedades: "Propriedades",
      habitaciones: "Quartos",
      reservas: "Reservas",
      motor: "Motor de reservas",
    },
  },

  plataformaCompleta: platPt.page,
  intelligence: intelPt,
  solucionesIndex: solPt.index,
  solucionesPaginas: solPt.pages,

  footer: {
    claim:
      "Reservas, quartos, motor próprio, site, revenue e um assistente que executa, sobre um único banco de dados.",
    nav: "Rodapé",
    columns: {
      product: "Plataforma",
      solutions: "Soluções",
      company: "Empresa",
      legal: "Jurídico",
    },
    company: {
      about: "Quem somos",
      compare: "Comparativos",
      pricing: "Preços",
      contact: "Contato",
    },
    legal: {
      privacy: "Privacidade",
      terms: "Termos",
      cookies: "Cookies",
    },
    solutions: {
      hoteles: "Hotéis e aparthotéis",
      cabanas: "Chalés e apartamentos",
      hostels: "Hostels",
      glamping: "Glamping e villas",
      grupos: "Grupos e redes pequenas",
    },
    agentNote: "este site também tem llms.txt",
    social: {
      instagram: "Roombir no Instagram",
      linkedin: "Roombir no LinkedIn",
      email: "Escreva por email",
    },
  },

  common: {
    startFree: "Começar",
    seePlatform: "Ver a plataforma",
    seePricing: "Ver preços",
    talkToUs: "Falar com a gente",
    bookDemo: "Pedir uma demo",
    writeUs: "Escreva para nós",
    seeMore: "Ver mais",
    faqTitle: "Perguntas frequentes",
    noCard: "Sem cartão",
    noInstall: "Nada para instalar",
    guidedSignup: "Cadastro guiado em nove passos",
    inSpanish: "Cinco idiomas, feito na Argentina",
    video: {
      label: "Vídeo de apresentação",
      play: "Reproduzir",
      pause: "Pausar",
      unmute: "Ativar o som",
      mute: "Silenciar",
      close: "Fechar o vídeo",
      volume: "Volume",
      progress: "Progresso do vídeo",
    },
  },

  ticker: [
    "Um único banco de dados para tudo",
    "Tape chart com prévia",
    "Revenue com o porquê de cada tarifa",
    "llms.txt · legível por uma IA",
    "Um assistente que executa",
    "10 moedas, câmbio congelado no check-in",
    "E-mails ao hóspede sem configurar SMTP",
    "LinkHub com QR",
    "38 tours sobre a tela real",
  ],

  vignettes: {
    tape: {
      label: "Reservas · Calendário",
      tag: "14 noites",
      units: {
        r101: "101 Duplo",
        r102: "102 Duplo",
        r103: "103 Superior",
        cabin: "Chalé Alerce",
        suite: "Suíte Norte",
      },
      bars: {
        garcia: "García",
        perez: "Pérez",
        sosa: "Sosa · 4 pax",
        paint: "Pintura",
        ruiz: "Ruiz",
        fresh: "Nova · sem quarto",
        bianchi: "Bianchi",
        engine: "Motor",
      },
      legend: {
        confirmed: "Confirmada",
        pending: "Pendente",
        block: "Bloqueio",
        live: "Acabou de entrar",
      },
    },
    calendar: {
      label: "Motor · Calendário informativo",
      tag: "março",
      dows: ["se", "te", "qu", "qu", "se", "sá", "do"],
      left3: "restam 3",
      left2: "restam 2",
      left1: "resta 1",
      hint: "Mínimo de 2 noites para entrar no dia 14",
    },
    decision: {
      label: "Revenue · Decisão",
      tag: "sáb 21/03",
      subject: "Duplo Superior · tarifa sugerida",
      keys: {
        occupancy: "ocupação",
        pace: "pace",
        event: "evento",
        comp: "concorrência",
        rule: "regra",
        cap: "teto",
      },
      values: {
        occupancy: "**78%** · limite da regra 70%",
        pace: "**+18%** vs. seu próprio histórico (sáb · março · 15-30 dias)",
        event: "Festa da Vindima · em 3 dias · impacto **72**",
        comp: "mediana do comp-set **$101.400** · 4 de 5 carregados",
        rule: "**Ocupação alta + evento** → ajuste +15%",
        cap: "máximo $120.000 · não aplicado",
      },
      accept: "Aceitar e aplicar no motor",
      reject: "Recusar",
    },
    agent: {
      label: "Roombir IA",
      tag: "recepção",
      ask: "Passa o García para o 203 a partir de quinta e avisa ele por email",
      trace: [
        { tool: "buscar_reserva", arg: "hóspede: García", ok: "1 resultado" },
        { tool: "mover_reserva", arg: "prévia", ok: "sem conflitos" },
        { tool: "atribuir_unidade", arg: "203", ok: "ok" },
        { tool: "enviar_email_hospede", arg: "troca de quarto", ok: "enviado" },
      ],
      answer:
        "Pronto. Passei para o 203 do dia 19 ao 22 e mandei o aviso. O 101 fica livre nessas três noites.",
      card: {
        guest: "Martina García",
        meta: ["203 · Duplo Superior", "19 → 22 mar", "2 pax", "Confirmada"],
        see: "Ver reserva",
        undo: "Desfazer",
      },
    },
    spaces: {
      label: "Espaço de trabalho",
      tag: "Hotel del Parque",
      tabs: ["Recepção", "Governança", "Marketing", "Administração"],
      other: "outro espaço",
      menu: [
        "Painel do dia",
        "Todas as reservas",
        "Nova reserva",
        "Status dos quartos",
        "Tarifas e disponibilidade",
        "Revenue · RMS",
        "Builder e sites",
        "LinkHub",
      ],
    },
    surface: {
      host: "cabanasdelalerce.com",
      intro: "Seis chalés de montanha em Villa La Angostura, Neuquén.",
      unitsTitle: "## Unidades",
      units: [
        "- Alerce · 4 pax · 1 quarto · a partir de USD 78",
        "- Coihue · 6 pax · 2 quartos · a partir de USD 112",
      ],
      bookTitle: "## Reservar",
      book: [
        "Disponibilidade legível: /availability.json",
        "O que o motor aceita: /engine-capabilities.json",
        "Checkout: /reservar?in=&out=&pax=",
      ],
      policyTitle: "## Políticas",
      policy: "Check-in 15:00 · check-out 10:00 · mínimo de 2 noites no fim de semana",
    },
    rules: {
      label: "Revenue · Cenários",
      tag: "4 regras",
      rows: [
        { cond: "**ocupação** ≥ 70% · janela 0-14 dias", action: "+8%" },
        { cond: "**impacto de eventos** ≥ 60 · janela 0-7 dias", action: "+15%" },
        { cond: "**pickup 7d** ≤ 2 · janela 0-21 dias", action: "−10%" },
        { cond: "**tarifa concorrente 1** ≤ base · janela 0-30 dias", action: "plano B" },
      ],
      note:
        "São avaliadas em ordem e vence a última que casa. O ensaio a seco mostra o que cada uma faria antes de você ativá-la.",
    },
    comp: {
      label: "Revenue · Concorrência",
      tag: "sáb 21/03",
      mine: "Hotel del Parque · você",
      sources: { own: "própria", roombir: "roombir", manual: "manual", none: "sem dado" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Descoberta automática por proximidade e similaridade. As tarifas externas são carregadas à mão: não inventamos um número que não temos.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Reservar online", "WhatsApp", "Fotos dos chalés", "Como chegar", "Avaliações · 4.8"],
    },
    units: {
      label: "Quartos · Status",
      tag: "andar 2",
      states: {
        available: "Disponível",
        occupied: "Ocupado",
        cleaning: "Limpeza",
        maintenance: "Manutenção",
        blocked: "Bloqueado",
        checkout: "Saída pendente",
      },
      tiles: [
        { code: "201", cat: "Duplo", state: "occupied" },
        { code: "202", cat: "Duplo", state: "checkout" },
        { code: "203", cat: "Duplo Superior", state: "cleaning" },
        { code: "204", cat: "Duplo Superior", state: "available" },
        { code: "205", cat: "Triplo", state: "maintenance" },
        { code: "206", cat: "Suíte", state: "blocked" },
      ],
      history: "203 · saída pendente → limpeza · Lucía · 11:42",
    },
    reports: {
      label: "Relatórios",
      tag: "últimos 30 dias",
      kpis: [
        { label: "Ocupação", value: "72%", delta: "+8 pts" },
        { label: "ADR", value: "$96.600", delta: "+6%" },
        { label: "RevPAR", value: "$69.500", delta: "+18%" },
        { label: "Cancelamento", value: "6%", delta: "−2 pts" },
      ],
      chart: "Demanda · próximos 14 dias",
      hygieneTitle: "Status e gestão",
      hygiene: [
        "2 reservas pendentes sem confirmação há mais de 24 h",
        "1 chegada de hoje sem quarto atribuído",
        "1 saída de hoje que ainda está em check-in",
      ],
    },
    tourism: {
      label: "Roombir IA · Panorama turístico",
      tag: "dossiê",
      place: "Mendoza · março",
      updated: "atualizado há 2 h",
      rows: [
        { key: "feriados", value: "Carnaval **3 e 4** · feriado prolongado", src: "calendário" },
        { key: "eventos", value: "Fiesta de la Vendimia · **7 mar** · a 4 km", src: "agenda" },
        { key: "clima", value: "máxima média **29°** · 2 dias de chuva", src: "clima" },
        { key: "voos", value: "rotas observadas em MDZ: **Santiago, São Paulo, Aeroparque**", src: "ADS-B" },
        { key: "câmbio", value: "para um brasileiro, Mendoza está **mais barata** que há um ano", src: "câmbio real" },
      ],
      missing: { key: "a pé", value: "não foi possível ler · fica de fora" },
      note: "Cada dado com sua fonte. O que não pôde ser lido aparece como faltante, nunca como zero.",
    },
    builder: {
      label: "Editor · Assistente",
      tag: "rascunho",
      file: "referencia.png",
      ask: "Monte a capa como a desta captura, com os meus textos",
      trace: [
        { tool: "ler a captura", ok: "hero + busca" },
        { tool: "adicionar seção · capa", ok: "ok" },
        { tool: "conectar motor de reservas", ok: "ok" },
      ],
      photo: "foto de preenchimento · trocar",
      title: "Cabañas del Alerce",
      sub: "Seis chalés de montanha em Villa La Angostura",
      bar: ["Chegada", "Saída", "2 adultos", "Buscar"],
    },
    brand: {
      label: "Marca",
      tag: "Cabañas del Alerce",
      logo: "A",
      palette: "Paleta · tirada do logo",
      rows: [
        { key: "tom", value: "Caloroso e próximo" },
        { key: "tipografia", value: "Serif clássica · sugerida pelo tom" },
        { key: "frase", value: "Seis chalés entre o lago e o bosque" },
        { key: "perto", value: "Lago Nahuel Huapi · 800 m" },
      ],
      used: "O site, o LinkHub, o motor e os dados para buscadores usam essa marca.",
    },
    reviews: {
      label: "Avaliações",
      tag: "4,8 · 126 avaliações",
      rows: [
        {
          source: "Google",
          stars: "★★★★★",
          author: "Paula R.",
          text: "O chalé impecável e a vista para o lago, o melhor da viagem.",
          status: "replied",
        },
        {
          source: "Booking",
          stars: "★★★★☆",
          author: "Marcos T.",
          text: "Tudo muito bonito. O último trecho do caminho é de cascalho.",
          status: "pending",
        },
        {
          source: "Airbnb",
          stars: "★★★★★",
          author: "Julia M.",
          text: "Voltamos com certeza. A Coihue é enorme para quatro.",
          status: "replied",
        },
      ],
      replied: "respondida",
      pending: "sem resposta",
    },
    org: {
      label: "Empresa",
      tag: "2 propriedades",
      company: "Grupo Andino",
      select: "Hotel del Parque ▾",
      props: [
        {
          name: "Hotel del Parque",
          meta: "Mendoza · ARS · UTC−3",
          spaces: ["Recepção", "Limpeza", "Revenue"],
        },
        {
          name: "Cabañas del Alerce",
          meta: "Villa La Angostura · ARS · UTC−3",
          spaces: ["Recepção", "Marketing"],
        },
      ],
      membersTitle: "Quem vê o quê",
      members: [
        { name: "Martín Sosa", scope: "todas · Administração" },
        { name: "Lucía Paz", scope: "só Cabañas del Alerce · Recepção" },
      ],
    },
    signals: {
      revenue: "revenue · sáb 21/03",
      applied: "aplicada no motor",
      agent: "Roombir ia",
      agentText: "Passei o García para o 203 e mandei o aviso por email.",
      agentFoot: "4 ferramentas · com suas permissões",
    },
  },

  plans: {
    cta: "Começar agora",
    ribbon: "O mais escolhido",
    free: "Grátis",
    freeFor: "por {n} dias",
    perMonth: "por mês",
    perYear: "por ano",
    oneTime: "pagamento único",
    trial: "{n} dias de teste grátis",
    upToProperty: "Até {n} propriedade",
    upToProperties: "Até {n} propriedades",
    upToUser: "Até {n} usuário",
    upToUsers: "Até {n} usuários",
    noPropertyLimit: "Sem limite de propriedades",
    noUserLimit: "Sem limite de usuários",
    catalog: {
      plans: {
        "inicial": { tagline: "Para colocar a hospedagem em operação e receber reservas online", description: "O núcleo do PMS: quartos, reservas e o motor público. Gratuito por tempo limitado para testar a plataforma com dados reais." },
        "profesional": { tagline: "A hospedagem completa: operação, marketing e presença web", description: "Soma site, identidade de marca, galerias, avaliações, LinkHub e relatórios ao núcleo operacional. É o plano que atende a maioria das hospedagens pequenas e médias." },
        "full-system": { tagline: "Todo o roombir, incluindo revenue management e o assistente de IA", description: "Todos os produtos da plataforma: o núcleo operacional, marketing completo, Revenue (RMS), presença online e Roombir IA com créditos mensais." },
      },
      products: {
        "habitaciones": { name: "Quartos", description: "Inventário físico: categorias, unidades, status operacionais e mapa de ocupação." },
        "reservas": { name: "Reservas", description: "Operação comercial do dia a dia: painel do dia, lista e calendário de reservas, lançamento manual, tarifas, disponibilidade e promoções." },
        "motor": { name: "Motor de reservas", description: "A busca e o checkout que o hóspede vê, com seu estúdio de configuração. Superfície pública: não abre pelo menu do PMS." },
        "informes": { name: "Relatórios", description: "Análise operacional da hospedagem: ocupação, receita, produção por canal e fechamentos." },
        "revenue": { name: "Revenue (RMS)", description: "Revenue management: pace, compset, eventos de demanda, regras e recomendações de tarifa." },
        "website": { name: "Sites", description: "Construtor de sites e o renderizador que os publica: multi-idioma, domínio próprio, SEO e GEO." },
        "marca": { name: "Identidade de marca", description: "Logo, paleta, tom, narrativa e contato público da propriedade. Alimenta o site, o motor e o LinkHub." },
        "galerias": { name: "Galerias", description: "Galerias multimídia da propriedade e de seus quartos." },
        "resenas": { name: "Avaliações", description: "Avaliações de hóspedes, respostas públicas e seu reflexo no site e no motor." },
        "linkhub": { name: "LinkHub", description: "Página link-in-bio da hospedagem para redes sociais, com seu renderizador público." },
        "social-hub": { name: "Presença online", description: "Redes sociais, Google Business Profile, anúncios em OTAs e controle de SEO/GEO. Hoje oculto do menu do PMS." },
        "archivos": { name: "Biblioteca de arquivos", description: "Armazenamento compartilhado de imagens e documentos da hospedagem." },
        "staypass": { name: "StayPass", description: "Portal do hóspede: conta, reservas e perfil. Superfície pública, não abre pelo PMS." },
      },
    },
    homeTitle: "Um só sistema, um só preço",
    homeSubtitle:
      "Tudo o que uma hospedagem precisa para operar e vender, sem cinco fornecedores e sem comissão por reserva.",
    empty:
      "Não conseguimos carregar os planos agora. São mensais, por hospedagem, sem comissão por reserva e sem fidelidade: [fale com a gente](/contacto) e mandamos os valores.",
    matrix: {
      caption: "O que cada plano do Roombir inclui",
      product: "Produto",
      limits: "Limites",
      properties: "Propriedades",
      users: "Usuários",
      trialRow: "Teste",
      included: "Incluído",
      notIncluded: "Não incluído",
      freeDays: "{n} dias grátis",
      days: "{n} dias",
      note:
        "Os preços e o que cada plano inclui saem do mesmo catálogo que o sistema usa para cobrar. O que você vê aqui é o que se aplica à sua conta.",
    },
  },

  createAccount: {
    meta: {
      title: "Criar conta · roombir",
      description:
        "Conte sobre a sua hospedagem e enviamos por e-mail o acesso para criar a sua conta.",
    },
    eyebrow: "Começar",
    title: "Conte sobre a sua *hospedagem*.",
    lead: "Quatro dados e enviamos o acesso por e-mail. O cadastro leva uma tarde e é você quem faz.",
    checks: [
      "Cadastro guiado em nove passos, **sem instalar nada**",
      "Migramos suas reservas e tarifas junto com você",
      "Motor de reservas próprio, no seu site e no seu LinkHub",
      "Atendimento de gente de verdade, no seu idioma",
    ],
    steps: [
      { title: "Você preenche o formulário", text: "Quatro dados da hospedagem e o seu e-mail." },
      { title: "O acesso chega", text: "Um link pessoal, de uso único, que abre o cadastro." },
      { title: "Você cria a sua senha", text: "E entra no sistema com o cadastro guiado de nove passos." },
    ],
    form: {
      groupProperty: "Sua hospedagem",
      groupContact: "Seus dados",
      hotelName: "Nome da hospedagem",
      hotelNamePlaceholder: "Hotel Los Álamos",
      lodgingType: "Tipo",
      lodgingTypes: {
        hotel: "Hotel",
        apart_hotel: "Apart hotel",
        hostel: "Hostel",
        cabins: "Chalés",
        inn_bnb: "Pousada ou B&B",
        apartment: "Apartamentos",
        house: "Casa",
        country_house: "Casa de campo",
        resort: "Resort",
        lodge: "Lodge",
        glamping: "Glamping",
        camping: "Camping",
        villas: "Vilas",
        other: "Outro",
      },
      units: "Quartos ou unidades",
      unitsPlaceholder: "12",
      unitsHint: "Os que você pode vender hoje.",
      country: "País",
      countryCommon: "Mais frequentes",
      countryAll: "Todos os países",
      city: "Cidade",
      cityPlaceholder: "Florianópolis",
      contactName: "Seu nome",
      contactNamePlaceholder: "Nome e sobrenome",
      email: "Seu e-mail",
      emailPlaceholder: "voce@suahospedagem.com",
      emailHint: "É para lá que vai o acesso, então use um que você leia.",
      phone: "Telefone ou WhatsApp",
      phonePlaceholder: "+55 11 …",
      optional: "opcional",
      choose: "Escolha uma opção",
      honeypot: "Não preencher",
      submit: "Receber o acesso",
      sending: "Enviando…",
      legal:
        "Usamos seus dados apenas para dar acesso e acompanhar o cadastro. Você pode pedir a exclusão quando quiser. Mais na [política de privacidade](/legal/privacidad).",
      errors: {
        hotelName: "Escreva o nome da sua hospedagem.",
        lodgingType: "Escolha o tipo de hospedagem.",
        units: "Informe quantos quartos ou unidades você tem.",
        country: "Escolha o país.",
        city: "Escreva a cidade.",
        contactName: "Escreva o seu nome.",
        emailRequired: "Escreva o seu e-mail.",
        emailInvalid: "Esse e-mail não parece válido.",
        disposable: "Use um endereço permanente: o acesso vai para lá.",
        rate: "Tentativas demais seguidas. Tente de novo em alguns minutos.",
        mail: "Não conseguimos enviar o e-mail. Tente de novo em alguns minutos.",
        generic: "Não conseguimos enviar. Escreva para hola@roombir.com.",
        network: "Não conseguimos conectar. Verifique a conexão e tente de novo.",
      },
      done: {
        title: "Confira o seu e-mail",
        text: "Enviamos o acesso para {email}. O link é pessoal e vale uma única vez.",
        textNoEmail: "Enviamos o acesso por e-mail. O link é pessoal e vale uma única vez.",
        notes: [
          "Se não aparecer em alguns minutos, veja em spam ou promoções.",
          "O link vence em 7 dias.",
          "Se errou o endereço, preencha o formulário de novo.",
        ],
      },
    },
  },

  leadForm: {
    name: "Nome",
    namePlaceholder: "Como podemos te chamar",
    email: "Email",
    emailPlaceholder: "voce@suahospedagem.com",
    phone: "Telefone ou WhatsApp",
    phonePlaceholder: "+55 11 …",
    company: "Hospedagem",
    companyPlaceholder: "Nome do hotel, chalés ou apart",
    message: "Conte como você recebe reservas hoje",
    messagePlaceholder:
      "Quantas unidades você tem, se vende em OTAs, e o que gostaria de parar de fazer à mão.",
    optional: "opcional",
    submit: "Enviar",
    sending: "Enviando…",
    honeypot: "Não preencher",
    errorGeneric: "Não conseguimos enviar.",
    errorRate: "Envios demais seguidos.",
    errorTail: "Se continuar falhando, escreva para hola@roombir.com.",
    legal:
      "Usamos seus dados só para falar com você sobre o roombir. Pode pedir para apagá-los quando quiser. Mais na [política de privacidade](/legal/privacidad).",
    doneTitle: "Pronto, chegou.",
    doneText:
      "A gente escreve nas próximas horas. Se preferir não esperar, pode começar o cadastro agora mesmo: é guiado e é você quem faz.",
  },

  home: {
    hero: {
      l1a: "Tire sua",
      l1b: "hospedagem",
      l2: "do passado",
      pill: "sem instalar\nnada",
      l3a: "e faça-a",
      l3b: "crescer.",
      kicker: "Sistema de gestão para hospedagens",
      lead: "Software para hotéis, chalés, hostels e aluguéis: reservas, motor de reservas próprio, site, revenue e um assistente de IA, sobre um único banco de dados.",
    },

    works: {
      eyebrow: "O que muda",
      title: "Gerencie toda a sua hospedagem *de um só lugar*.",
      cardLabel: "Reserva atualizada",
      items: [
        {
          title: "Nenhuma reserva duplicada",
          text: "Seu site, seu LinkHub e a recepção vendem o mesmo inventário. Uma noite de uma unidade se vende uma só vez, e a disponibilidade muda na hora, sem sincronizar nada.",
        },
        {
          title: "Delegue a operação ao assistente",
          text: "Peça em uma frase: mover uma reserva, mudar uma tarifa, avisar o hóspede. Ele faz com as suas permissões e mostra o que tocou, com desfazer à mão.",
        },
        {
          title: "Cobre o preço que cada data merece",
          text: "O Revenue calcula o preço de cada data com o porquê à vista (ocupação, ritmo, eventos, concorrência) e aplica sozinho no motor.",
        },
      ],
    },
    // La habitación en 3D bajo la cinta: la cámara sigue al cursor.
    room: {
      eyebrow: "Feito para hospedagens",
      title: "Cada quarto, *no seu lugar*.",
      lead: "Reservas, limpeza, tarifas e o hóspede de cada unidade vivem no mesmo banco de dados: o que muda em uma tela já mudou em todas.",
      hint: "Mova o cursor para percorrê-lo",
      label: "Ilustração 3D de um quarto",
    },
    swap: {
      eyebrow: "Por que existe",
      title: "O que você *compra separado* hoje.",
      lead:
        "Uma hospedagem pequena ou média não deveria precisar de cinco fornecedores e um consultor para operar digitalmente. Essa é a tese do roombir, e é o que decide cada escolha de produto lá dentro.",
      headOld: "O que você compra separado hoje",
      headNew: "No roombir",
      rows: [
        { old: "PMS de reservas e quartos", now: "Áreas Reservas + Quartos" },
        { old: "Motor de reservas / booking engine", now: "Motor público + Estúdio do Motor" },
        { old: "Construtor de site", now: "Builder + renderer com domínio próprio" },
        { old: "RMS de revenue management", now: "Área Revenue" },
        { old: "Link-in-bio e presença digital", now: "LinkHub + Presença Online" },
        { old: "Portal do hóspede", now: "StayPass" },
        { old: "Assistente / automações", now: "Roombir IA" },
      ],
    },
    modules: {
      eyebrow: "O que é",
      title: "Um só sistema, *nenhuma ponte* entre as partes.",
      lead:
        "Não são integrações que sincronizam de madrugada: são visões diferentes dos mesmos dados. Mudar o preço de uma categoria aparece no motor na hora, sem publicar nada.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Toda a gestão em uma conversa. Cria e move reservas, muda tarifas e edita o seu site, e antes de opinar sobre o seu destino lê um dossiê com quinze fontes datadas.",
        },
        pms: {
          title: "PMS",
          desc: "Propriedades, quartos, reservas e o motor que o hóspede vê, sobre um único inventário. Você cadastra uma vez e opera no calendário.",
        },
        informes: {
          title: "Relatórios",
          desc: "Ocupação, receita, cancelamentos e canais, e o que está mal cadastrado hoje.",
        },
        revenue: {
          title: "Revenue",
          desc: "O preço de cada data com o rastro do porquê, e a tarifa que entra sozinha no motor.",
        },
        marketing: {
          title: "Marketing",
          desc: "Site com assistente, marca, fotos, avaliações e LinkHub, tudo lendo suas reservas.",
        },
      },
    },
    how: {
      eyebrow: "Como funciona",
      title: "Da propriedade à reserva, *em quatro passos*.",
      lead:
        "Você cadastra uma vez e usa na ordem em que um dia de recepção acontece. Não há módulo que precise ser conectado a outro.",
      steps: [
        {
          title: "Você cadastra a propriedade e os quartos",
          text: "Tipo, endereço, moeda e contato; depois as categorias e as unidades, por pool ou com nome próprio. A disponibilidade se inicializa sozinha.",
          href: "/producto/pms",
          link: "Ver o PMS",
        },
        {
          title: "Publica o seu site e o seu link com o motor dentro",
          text: "O site e o LinkHub saem da mesma marca e leem o mesmo inventário. O hóspede vê o preço de cada dia e reserva sozinho.",
          href: "/producto/marketing",
          link: "Ver Marketing",
        },
        {
          title: "As reservas entram e você as opera",
          text: "Painel do dia, lista e calendário de fita. Uma noite de uma unidade se vende uma única vez, e o e-mail ao hóspede sai sem configurar nada.",
          href: "/producto/pms",
          link: "Ver Reservas",
        },
        {
          title: "Os números e o preço, sem planilha",
          text: "Relatórios sobre as mesmas reservas, Revenue com o porquê de cada tarifa e um assistente a quem você pede o resto em uma frase.",
          href: "/producto/ia",
          link: "Ver Roombir IA",
        },
      ],
    },
    spaces: {
      eyebrow: "O que ninguém mais tem",
      title: "Cada posto vê *o seu* sistema, não o seu inteiro.",
      lead:
        "Recepção, governança, marketing e administração trabalham sobre os mesmos dados, mas cada espaço de trabalho tem seu próprio menu, sua própria tela inicial e suas próprias permissões. Ninguém aprende a ignorar metade de um aplicativo.",
      items: [
        "O menu se monta sozinho: um espaço de marketing **não mostra** a área Reservas.",
        "A tela inicial se recompõe: a recepção vê check-ins, a governança vê unidades em limpeza.",
        "As permissões são por app e por nível: **operar**, **configurar** ou nada.",
        "O treinamento de alguém novo se monta com o que aquele espaço tem, e nada mais.",
      ],
    },
    sale: {
      eyebrow: "Modelo de venda",
      title: "Um hotel e um chalé *não se vendem igual*.",
      lead:
        "Quase todos os sistemas escolhem um lado: ou são de hotel urbano ou são de aluguel de temporada. Aqui o modo é definido por categoria, e há um assistente para migrar de um para o outro mesmo já tendo reservas dentro.",
      poolTitle: "Pool de categoria",
      poolText:
        "A categoria agrupa N quartos intercambiáveis. O hóspede compra “um Duplo Superior”, não o 203, e o motor escolhe a unidade ao confirmar — minimizando buracos ou equilibrando o desgaste, como você preferir. Também dá para deixar sem atribuir e a recepção decide.",
      poolTag: "Hotel urbano · hostel · aparthotel",
      unitTitle: "Unidade única 1:1",
      unitText:
        "A categoria envolve exatamente uma unidade e é vendida com nome próprio. O hóspede reserva o chalé Alerce, com suas fotos, sua descrição e seu preço, e não fica nenhuma ambiguidade sobre o que ele pegou.",
      unitTag: "Chalés · apartamentos · glamping · villas",
      unitNames: ["Alerce", "Coihue", "Ñire"],
    },
    engine: {
      eyebrow: "Motor de reservas",
      title: "Um calendário que *vende*, não que pergunta datas.",
      lead:
        "O seletor de datas do motor mostra, dia a dia e conforme o que você habilitar, o preço a partir de, quantas unidades restam e quais dias estão fechados. Se preferir, um botão desliga tudo e ele vira um seletor de datas comum.",
      items: [
        "Preço a partir de e unidades restantes em cada dia do mês.",
        "Fechado na chegada, fechado na saída e mínimo de noites, marcados onde se olha.",
        "Sete blocos configuráveis do checkout, sem tocar em código nem republicar o site.",
        "O hóspede confirma por email ou você confirma: as pendentes vencem sozinhas.",
      ],
      link: "Ver o motor completo",
    },
    agentic: {
      eyebrow: "A aposta",
      title: "Sua hospedagem, *reservável por uma IA*.",
      lead:
        "As pessoas já não buscam só no Google: perguntam a um modelo. Uma hospedagem que um agente não consegue ler não aparece nessa resposta. O motor publica seu inventário em formatos feitos para máquinas, e o editor de GEO permite declarar o que é a sua propriedade, para quem, e o que a torna confiável.",
      items: [
        "**llms.txt** — quem você é, o que vende e como se reserva, em texto puro.",
        "**availability.json** — a disponibilidade real, legível por máquina.",
        "**engine-capabilities.json** — quais operações o seu motor aceita.",
        "**JSON-LD** nas páginas e editor de GEO por página: intenção, entidades e sinais de confiança.",
      ],
      link: "Como funciona a camada agêntica",
    },
    revenue: {
      eyebrow: "Revenue · RMS",
      title: "Ele diz o preço *e por quê*.",
      lead:
        "O RMS não é uma caixa-preta que cospe um número. Cada propriedade e cada data têm um documento de decisão: quais dados viu, quais regras casaram, se um teto foi aplicado e qual foi o resultado, linha por linha.",
      items: [
        "Pace contra **o seu próprio histórico**, separado por dia da semana, mês e antecedência.",
        "Se há pouco histórico, a tela avisa: **não te vende** uma confiança que não existe.",
        "Eventos de demanda ingeridos sozinhos — feriados, feiras, shows — e curados por você.",
        "Ao aceitar uma recomendação, a tarifa **entra no motor**. O ciclo fecha sem copiar e colar.",
      ],
      link: "Ver Revenue",
    },
    ia: {
      eyebrow: "Roombir IA",
      title: "Um assistente que *opera*, não que sugere.",
      lead:
        "Não é um chat que explica onde clicar. Consulta disponibilidade, cria reservas, move uma estadia com prévia, ajusta tarifas, aprova eventos do RMS ou publica um site. E faz tudo isso com as suas permissões, não com as dele.",
      items: [
        "Tudo o que se faz no aplicativo pode ser pedido numa frase.",
        "Dá para ver a transcrição do turno: qual ferramenta usou e o que voltou.",
        "Responde com cartões acionáveis, não só com texto.",
        "Três camadas de permissão: filtro antes do turno, contexto no prompt e avaliação em cada chamada.",
      ],
      link: "Ver Roombir IA",
    },
    guarantees: {
      eyebrow: "Três coisas que você não vai precisar pensar",
      title: "As garantias *estruturais*.",
      items: [
        {
          key: "unidade + data",
          title: "Uma noite não pode ser vendida duas vezes",
          text: "Cada noite de cada quarto é uma trava única no banco de dados, não uma validação que duas pessoas reservando ao mesmo tempo consigam furar. Os bloqueios de manutenção usam a mesma trava, então tiram inventário de verdade e somem do motor.",
        },
        {
          key: "base · cobrança · exibição",
          title: "O valor cobrado não se mexe depois",
          text: "Os preços vivem em uma moeda base, você cobra em outra, e o hóspede pode olhar numa terceira. A conversão fica viva até o check-in e ali congela. Para pesos argentinos você escolhe qual cotação usar: blue, MEP, CCL ou oficial.",
        },
        {
          key: "reservations@roombir.com",
          title: "Você não configura servidor de email",
          text: "Todos os emails ao hóspede — confirmação, token, aviso de troca — saem do domínio do Roombir com a sua caixa como responder-a. É uma das frições clássicas do cadastro de um PMS e foi eliminada de propósito.",
        },
      ],
    },
    stats: {
      eyebrow: "O tamanho real",
      title: "Não são promessas: *já está construído*.",
      lead:
        "O Roombir está em piloto de mercado, então ainda não vamos te mostrar um contador de hotéis inflado. O que dá para mostrar é o que existe dentro do produto hoje.",
      items: [
        { value: "21", label: "apps ativáveis por espaço de trabalho" },
        { value: "38", label: "tours guiados sobre a tela real" },
        { value: "10", label: "moedas, com blue, MEP, CCL ou oficial para ARS" },
        { value: "5", label: "idiomas da plataforma" },
        { value: "1", label: "único banco de dados para todo o sistema" },
      ],
    },
    marketing: {
      eyebrow: "Marketing",
      title: "Seu site, sua marca e seu link, *servidos pelo mesmo sistema*.",
      lead:
        "O construtor visual monta o site com componentes que se conectam sozinhos aos seus dados: o motor embutido, os cartões de quarto, as galerias, as promoções e as avaliações. E o LinkHub é a página que vai na bio do Instagram, com seu QR e sua analítica.",
      items: [
        "Domínio próprio e multi-idioma, com URL, capa e prévia social próprias por idioma.",
        "Identidade de marca única — logo, paleta extraída do logo, tom, narrativa — que alimenta o site, o motor e o LinkHub.",
        "Dez tipos de bloco no LinkHub, com agendamento por data e analítica de visitas e cliques.",
        "Avaliações importáveis por CSV, com resposta do hotel e reflexo no site.",
      ],
      link: "Ver site e marca",
    },
    onboarding: {
      eyebrow: "Cadastro guiado",
      title: "Você se cadastra *sozinho*, numa tarde.",
      lead:
        "Nove passos em três etapas, com o progresso salvo no servidor: dá para largar no meio e continuar em outro dispositivo. No painel fica um cartão para retomar de onde parou.",
      steps: [
        {
          num: "Etapa 1 · passos 0–4",
          title: "Configuração",
          text: "Sua empresa, sua propriedade com endereço no mapa, fuso horário e moeda, sua identidade de marca — a paleta sai do seu logo — e como você opera. Desse último passo saem os espaços de trabalho e os apps iniciais.",
        },
        {
          num: "Etapa 2 · passos 5–7",
          title: "Carga de dados",
          text: "Tipos de quarto e unidades, com criação em massa para não carregar vinte vezes a mesma coisa. Depois, as primeiras promoções e uma revisão do motor. Ao fechar a etapa, a disponibilidade se inicializa sozinha.",
        },
        {
          num: "Etapa 3 · passo 8",
          title: "Tours",
          text: "Cada app que te coube tem um tour guiado desenhado por cima da tela real, destacando o elemento de que fala. Dali em diante, cada pessoa nova do time tem seu treinamento conforme o espaço.",
        },
      ],
    },
    commitments: {
      eyebrow: "O que os outros não dizem",
      title: "Três coisas que você pode *verificar* antes de falar com alguém.",
      lead:
        "Nesta categoria o que falta se descobre na terceira semana e a demo chega antes do produto. Aqui é ao contrário: cada uma destas três linhas tem um lugar onde se comprova.",
      verify: "Verificar",
      items: [
        {
          key: "traza",
          title: "Cada ação da IA, à vista",
          text: "O assistente executa com as suas permissões e deixa a transcrição de cada turno: qual ferramenta usou, com quais dados e o que mudou, **com desfazer à mão**.",
          href: "/producto/ia",
        },
        {
          key: "ia",
          title: "Uma IA consegue ler este site",
          text: "Tem seu próprio `llms.txt` com os mesmos números desta página. Praticamos antes de pedir isso a você.",
          href: "/llms.txt",
        },
        {
          key: "alta",
          title: "Cadastro guiado, sem instalar nada",
          text: "Você se cadastra sozinho, em nove passos salvos no servidor, e entra pelo navegador. **Sem ligação prévia** nem implantação para esperar.",
          href: "/crear-cuenta",
        },
      ],
    },
    day: {
      eyebrow: "Uma terça-feira qualquer",
      title: "O mesmo dia, *com e sem* roombir.",
      lead:
        "Não é uma promessa de mais reservas: é um dia de recepção de uma hospedagem de doze unidades. À esquerda, o que ouvimos na primeira ligação; à direita, o que o sistema faz em cada um desses momentos.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "08:10",
          old: "Três WhatsApps perguntando disponibilidade para o fim de semana. Você abre a planilha para responder um por um.",
          now: "As três consultas já olharam o calendário do motor: preço e unidades restantes, dia a dia. Duas reservaram sozinhas.",
        },
        {
          time: "09:30",
          old: "Um hóspede pagou sinal em pesos há um mês. É preciso recalcular à mão quanto falta, com o dólar de hoje.",
          now: "A reserva guarda a conversão e congela no check-in. O saldo pendente não se moveu.",
        },
        {
          time: "11:00",
          old: "García chegou e você não sabe em qual quarto ele vai. A governança também não.",
          now: "A recepção pede ao assistente para passá-lo ao 203 e avisar por e-mail. A governança vê no seu painel sem que ninguém escreva.",
        },
        {
          time: "14:20",
          old: "Você descobre que a cabana Alerce foi vendida duas vezes para sábado.",
          now: "Impossível: cada noite de cada unidade é uma trava única no banco de dados. A segunda reserva nunca entrou.",
        },
        {
          time: "17:00",
          old: "Quem fez o site não responde e o preço da suíte continua velho no site.",
          now: "Você mudou o preço em Tarifas e ele já está no motor, no site e no LinkHub. Você não publicou nada.",
        },
        {
          time: "19:45",
          old: "Você se pergunta se vale subir o sábado. Decide por intuição.",
          now: "O Revenue mostra +15% com o motivo escrito: ocupação, pace e um evento a três dias. Você aceita e vai para o motor.",
        },
      ],
    },
    compare: {
      eyebrow: "Se você está comparando",
      title: "Roombir *contra* os que você já conhece.",
      lead:
        "Comparativos escritos para servir mesmo que você não nos escolha: o que cada um faz melhor, o que ainda não fazemos e em que caso o outro é a escolha certa. Verificados contra o site público de cada um, com data.",
      link: "Ver todos os comparativos",
    },
    faq: [
      {
        q: "Serve para chalés e apartamentos, ou só para hotéis?",
        a: "Para os dois, e não com o mesmo truque. Uma categoria pode ser vendida como **pool** — dez duplos intercambiáveis, o hóspede compra “um duplo” — ou como **unidade única 1:1**, onde a categoria envolve uma só unidade com nome próprio. Escolhe-se por categoria, não por sistema, então um complexo com seis chalés e dois quartos padrão convive sem forçar nada.",
      },
      {
        q: "Preciso de um channel manager para usar o roombir?",
        a: "Não para operar, mas vale dizer direto: **o Roombir ainda não tem channel manager**. Se você vende no Booking ou na Expedia, essa disponibilidade hoje se concilia à mão. O sistema é pensado para que a reserva direta — seu site, seu LinkHub, seu motor — pare de se perder num chat, que é de onde sai a maior parte da receita que você hoje não controla.",
      },
      {
        q: "Como eu cobro as reservas?",
        a: "No check-in, presencialmente. **Ainda não há gateway de pagamento integrado.** O que existe é multimoeda de verdade: você guarda os preços numa moeda base, cobra em outra, e a conversão fica viva até o check-in e ali congela, para que o valor cobrado não mude depois.",
      },
      {
        q: "Preciso instalar ou configurar alguma coisa?",
        a: "Entra-se pelo navegador. O cadastro são nove passos guiados salvos no servidor — dá para largar no meio e continuar pelo celular — e não há servidor de email para configurar: **todos os emails ao hóspede saem do domínio do roombir** com a sua caixa como responder-a.",
      },
      {
        q: "Posso usar meu próprio domínio?",
        a: "Sim. Cada site publicado aceita hostname próprio, e cada variante de idioma pode ter o seu. O LinkHub também tem endereço público, com QR code para imprimir.",
      },
      {
        q: "A IA pode fazer qualquer coisa dentro do meu sistema?",
        a: "Não, e é de propósito. O assistente opera **assumindo a sua identidade real** com uma permissão de vida curta reemitida a cada chamada. Antes do turno tiram-se da mão dele as ferramentas que o seu usuário não pode usar, e cada operação é reavaliada contra a política do serviço. Se no meio da conversa te revogarem um acesso, a ação seguinte falha e o assistente explica por quê.",
      },
      {
        q: "Qual é a diferença para o Cloudbeds ou o Little Hotelier?",
        a: "Em três coisas que dá para verificar: o revenue management e o assistente de IA fazem parte do sistema, não são módulos adicionais; o assistente executa em vez de sugerir, e deixa a transcrição de cada turno; e tudo (reservas, motor, site, revenue) lê o mesmo banco de dados, sem sincronizações.",
      },
    ],
    cta: {
      title: "Coloque para rodar *esta semana*.",
      lead:
        "O cadastro é guiado e é você quem faz. Se preferir que a gente acompanhe a carga de quartos — o passo que mais custa —, fazemos numa call curta.",
      steps: [
        "Você se cadastra e carrega a propriedade.",
        "Carregamos os quartos juntos, se você quiser.",
        "Você publica seu site e seu link de reservas.",
      ],
    },
  },

  producto: {
    meta: {
      title: "A plataforma",
      description:
        "Roombir IA, o PMS (propriedades, quartos, reservas e motor), relatórios, revenue e marketing, sobre um único banco de dados. O que cada parte faz e como se conectam.",
    },
    hero: {
      eyebrow: "A plataforma",
      title: "Cada parte do sistema, *sobre os mesmos dados*.",
      lead:
        "Todo o time entra pelo mesmo painel. Quartos, reservas e revenue aparecem embutidos ali dentro, herdando contexto e tema, então para quem trabalha é um só aplicativo — e para os dados, um só lugar.",
    },
    desk: {
      eyebrow: "O painel",
      title: "Uma só porta, *e lá dentro cada um o seu*.",
      lead:
        "O PMS é o chrome: a navegação, o seletor de empresa, propriedade e espaço de trabalho, a busca global e a central de notificações. Os apps de quartos, reservas e revenue vivem lá dentro.",
      items: [
        "**Busca global** com Ctrl/Cmd + K: reservas por código ou hóspede, propriedades, categorias, unidades e telas do sistema. É algorítmica, não generativa — acha ou não acha.",
        "**Painel adaptativo**: 30 widgets disputam três lugares conforme o espaço ativo, e só se pedem os dados dos que vão ser pintados.",
        "**Notificações em tempo real** que levam ao detalhe certo; se a reserva é de outra propriedade, o sistema troca de propriedade antes de abrir.",
        "**Tema claro, escuro ou do sistema**, com cor de destaque, propagado aos apps embutidos.",
      ],
    },
    catalog: {
      eyebrow: "O catálogo",
      title: "21 apps que *ligam e desligam*.",
      lead:
        "Um app se ativa por espaço de trabalho e com um nível: operar (o dia a dia), configurar (também muda os ajustes) ou nada. O espaço de administração vê o catálogo completo, incluindo apps adicionados depois.",
      hubs: [
        {
          hub: "Reservas",
          apps: [
            "Painel do dia",
            "Todas as reservas",
            "Entrada manual",
            "Tarifas",
            "Disponibilidade",
            "Promoções",
            "Configuração do motor",
          ],
        },
        {
          hub: "Quartos",
          apps: ["Status dos quartos", "Planta de ocupação", "Gestão de categorias"],
        },
        {
          hub: "Marketing",
          apps: ["Builder", "Sites", "Galerias", "Avaliações", "Marca", "LinkHub", "Presença online"],
        },
        { hub: "Analytics", apps: ["Relatórios"] },
        { hub: "Revenue", apps: ["Revenue · RMS"] },
        { hub: "Assets", apps: ["Biblioteca de arquivos"] },
        { hub: "Admin", apps: ["Propriedades"] },
      ],
    },
    modules: {
      eyebrow: "Módulo por módulo",
      title: "O que faz *cada parte*.",
      lead:
        "Cada um tem sua página com o detalhe completo. Todos leem e escrevem os mesmos dados: não há sincronização noturna nem importação de nada.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Um assistente que opera o sistema inteiro em uma conversa: reservas, tarifas, quartos, o site, o revenue. Parte de um dossiê do seu destino com quinze fontes datadas e trabalha com as suas permissões.",
        },
        pms: {
          title: "PMS",
          desc: "Propriedades com sua moeda e sua equipe; categorias vendidas como pool ou com nome próprio; painel do dia, lista e calendário de fita; e o motor onde o hóspede vê o preço de cada dia e reserva sozinho, em dez moedas.",
        },
        informes: {
          title: "Relatórios",
          desc: "Ocupação, tarifa média, receita, cancelamentos e canais sobre as mesmas reservas que você opera, e uma seção com o que está mal cadastrado hoje.",
        },
        revenue: {
          title: "Revenue",
          desc: "Um documento de decisão por data com o rastro completo, pace contra seu próprio histórico, concorrência, eventos do seu destino e a tarifa que entra no motor ao aceitá-la.",
        },
        marketing: {
          title: "Marketing",
          desc: "O editor de site com assistente, a marca, a biblioteca de fotos, as galerias, as avaliações, o LinkHub e a camada que torna a sua hospedagem legível para uma IA.",
        },
      },
    },
    ia: {
      eyebrow: "A camada que une tudo",
      title: "O assistente vê *o sistema inteiro*, não um módulo.",
      lead:
        "Como os dados são um só, o agente faz em uma frase o que em outro stack são três abas e duas exportações: olhar o pace, ajustar uma tarifa e publicar a promo no site.",
      items: [
        "Opera reservas, tarifas, disponibilidade, quartos, propriedades, revenue, marketing, arquivos, empresa e sistema.",
        "Cartões de reserva e de revenue com botões que executam, sujeitos à mesma verificação de permissões.",
        "Histórico de conversas filtrado pelo espaço de trabalho ativo.",
      ],
      link: "Ver Roombir IA",
    },
    stats: [
      { value: "21", label: "apps ativáveis" },
      { value: "30", label: "widgets do painel adaptativo" },
      { value: "38", label: "tours guiados" },
    ],
    ask: "Procurava algo específico?",
    askLink: "Pergunte para a gente",
    cta: {
      title: "Venha *olhar por dentro*.",
      lead:
        "O cadastro é guiado. Se preferir que a gente mostre antes, peça uma demo e percorremos com os seus dados.",
      steps: [
        "Você cria a empresa e a propriedade.",
        "Carrega quartos e unidades.",
        "O motor e o site ficam prontos para publicar.",
      ],
    },
  },

  pms: {
    meta: {
      title: "PMS",
      description:
        "Propriedades, quartos e reservas em um só produto: você carrega a propriedade e os quartos uma vez, as reservas entram pelo motor ou à mão, e você as opera no painel do dia e no calendário.",
    },
    hero: {
      eyebrow: "PMS · Propriedades, quartos e reservas",
      title: "Sua hospedagem inteira, *em um só lugar*.",
      lead:
        "Você cadastra a propriedade e os quartos uma vez. As reservas entram pelo seu motor ou você as cadastra, e as opera no painel do dia e no calendário. É um único banco de dados: o que muda em uma tela já mudou em todas.",
    },
    propiedades: {
      eyebrow: "01 · Propriedades",
      title: "Várias propriedades, *uma única conta*.",
      lead:
        "Um hotel em Mendoza e seis chalés em Villa La Angostura, com o mesmo usuário. Cada propriedade com sua moeda, seu fuso horário e sua equipe; cada pessoa vê só as que lhe cabem.",
      items: [
        "**Acesso por propriedade e por função**: quem atende a recepção dos chalés entra nos chalés, com o menu de recepção; quem administra vê tudo.",
        "**Espaços de trabalho por função** —recepção, limpeza, marketing, revenue—, cada um com seu menu e sua tela inicial.",
        "**Todo o resto depende da propriedade**: quartos, reservas, marca, site, LinkHub e avaliações se cadastram uma vez. Você muda o telefone e ele muda em todo lugar.",
        "**A segunda propriedade copia a estrutura da primeira**, e você troca de uma para outra com um seletor no topo, sem sair nem entrar de novo.",
      ],
    },
    habitaciones: {
      eyebrow: "02 · Quartos",
      title: "Por categoria ou por unidade, *do seu jeito*.",
      lead:
        "Um hotel vende um duplo superior e atribui o 203 depois. Um complexo vende o chalé Alerce, com suas fotos e seu preço. O Roombir faz as duas coisas, e as duas ao mesmo tempo na mesma propriedade.",
      items: [
        "**Pool de categoria**: o hóspede compra “um duplo superior” e o sistema atribui o quarto, minimizando buracos ou distribuindo o desgaste. Ou deixa sem atribuir para a recepção decidir.",
        "**Unidade com nome próprio**: a categoria envolve uma única unidade. O hóspede reserva o chalé Alerce, com suas fotos e seu preço.",
        "**Seis status com histórico** —disponível, ocupado, limpeza, manutenção, bloqueado e saída pendente—, painel por andar e planta de ocupação.",
        "**Cadastro em massa em dois passos** e bloqueios por metade do dia, que usam a mesma trava que uma reserva.",
      ],
    },
    reservas: {
      eyebrow: "03 · Reservas",
      title: "Cada momento do turno, *sua tela*.",
      lead:
        "Oito telas sobre o mesmo dado: mover uma reserva no calendário muda o quarto, libera a noite no motor e aparece no relatório.",
      items: [
        {
          title: "Painel do dia",
          desc: "Chegadas e saídas do dia, com cartões acionáveis. É a tela com que a recepção abre o turno.",
        },
        {
          title: "Todas as reservas",
          desc: "A lista com filtros e um painel lateral que abre sem sair: resumo, atividade e notas. Dali se atribui o quarto e se muda o status.",
        },
        {
          title: "Calendário",
          desc: "Quartos por dia. Você arrasta uma reserva ou a estica, e antes de soltar vê se choca com outra e o que acontece com o preço.",
        },
        {
          title: "Nova reserva",
          desc: "A que entrou por telefone ou por WhatsApp: hóspede, datas, ocupação por idade, canal de origem, promoções e notas.",
        },
        {
          title: "Tarifas",
          desc: "Preço base por categoria e planos de tarifas com vigência, moeda e estadia mínima.",
        },
        {
          title: "Disponibilidade",
          desc: "Sinal por dia —livre, parcial, cheio, fechado— e restrições: fechado na chegada ou na saída, estadia mínima e máxima.",
        },
        {
          title: "Promoções",
          desc: "Automáticas ou com código, por porcentagem, valor fixo ou preço por noite, com sua apresentação pronta para o seu site.",
        },
        {
          title: "Configuração",
          desc: "Moeda, confirmação, regras de estadia, horários e como os quartos são atribuídos. Mais o Estúdio do Motor para textos e cores.",
        },
      ],
    },
    motor: {
      eyebrow: "PMS · Motor de reservas",
      title: "Um calendário que *responde antes de perguntar*.",
      lead:
        "O seletor de datas comum pede dois dias e pronto. O do motor mostra, dia a dia e conforme o que você habilitar, o que a pessoa ia perguntar por WhatsApp antes de reservar.",
      items: [
        "**Preço a partir de** em cada dia, calculado com as mesmas tarifas que o motor cobra.",
        "**Unidades restantes**: o seu inventário real, não um contador inventado.",
        "**Dias fechados**, fechados na chegada ou na saída, e o **mínimo de noites** ao escolher a entrada.",
        "**O hóspede confirma por e-mail ou você confirma**: as pendentes vencem sozinhas, e o e-mail sai do domínio do roombir sem configurar nada.",
      ],
    },
    prices: {
      eyebrow: "Cada tarifa, individual",
      title: "O preço de cada noite, *com o seu porquê*.",
      lead:
        "Quando o motor precisa dizer quanto custa uma noite, resolve uma cadeia fixa, sempre na mesma ordem. Saber de qual degrau sai cada preço é o que permite confiar no sistema sem auditá-lo toda manhã.",
      items: [
        "**Primeiro, o que você aceitou no Revenue**: se há uma tarifa recomendada e aceita para essa data, ela manda.",
        "**Depois, o plano de tarifas** vigente para essa categoria e essa data, com sua estadia mínima.",
        "**Se não há plano, o preço base** da categoria. Cada chalé pode ter o seu.",
        "**Por cima de tudo, as promoções**: desconto ou acréscimo —uma promoção também pode subir o preço na alta temporada—, automáticas ou com código.",
      ],
    },
    currency: {
      eyebrow: "Dez moedas",
      title: "O que o hóspede viu *não se mexe depois*.",
      lead:
        "O hóspede olha o preço na moeda dele e você cobra na sua. A reserva fica sempre na sua moeda base e a conversão congela no check-in: o valor que você cobra não muda depois.",
      items: [
        "Dólar, peso argentino, real, peso chileno, peso colombiano, peso mexicano, sol, peso uruguaio, euro e libra.",
        "Para pesos argentinos você escolhe a cotação: oficial, blue, MEP ou CCL.",
        "As taxas se atualizam a cada três horas e são marcadas como antigas se a fonte não respondeu.",
        "Os relatórios somam direto, porque tudo fica na sua moeda base.",
      ],
    },
    where: {
      eyebrow: "Onde o motor aparece",
      title: "No seu site, na bio *e para uma IA*.",
      items: [
        {
          title: "O seu site",
          desc: "Uma seção do editor de site que se conecta sozinha ao seu inventário.",
        },
        {
          title: "O seu LinkHub",
          desc: "O link da bio do Instagram abre o mesmo motor, idêntico ao do seu site.",
        },
        {
          title: "Um link direto",
          desc: "Uma página própria com o endereço da sua hospedagem, para mandar por WhatsApp se você ainda não tem site.",
        },
        {
          title: "Agentes de IA",
          desc: "Com a camada agêntica ligada, um assistente externo pode ler a sua disponibilidade e completar uma reserva. [Como funciona](/producto/marketing#agentes).",
        },
      ],
    },
    stats: [
      { value: "8", label: "telas sobre o mesmo dado para operar as reservas" },
      { value: "10", label: "moedas, com blue, MEP, CCL ou oficial para ARS" },
      { value: "6", label: "status de quarto, com histórico" },
      { value: "1", label: "trava por unidade e noite no banco de dados" },
    ],
    faq: [
      {
        q: "Como eu cobro as reservas?",
        a: "No check-in, presencialmente. **Ainda não há gateway de pagamento integrado.** O que há é multimoeda de verdade: o hóspede olha na moeda dele, você cobra na sua e a conversão congela no check-in.",
      },
      {
        q: "Conecta com Booking ou Expedia?",
        a: "Ainda não: **o Roombir não tem channel manager**. Se você vende em OTAs, essa disponibilidade hoje é conciliada à mão. O sistema foi pensado para que a reserva direta —seu site, seu LinkHub, seu motor— deixe de se perder num chat.",
      },
      {
        q: "O que acontece se duas pessoas reservam a mesma noite ao mesmo tempo?",
        a: "Uma das duas falha. Cada noite de cada unidade é uma **trava única no banco de dados** —a chave é a unidade mais a data—, então a segunda escrita não entra. Não é uma validação no código que dê para driblar: é o banco que impede.",
      },
      {
        q: "Tenho chalés e quartos. Posso ter os dois?",
        a: "Sim, na mesma propriedade. Os chalés entram como unidade com nome próprio e os quartos como pool, e convivem no mesmo calendário e no mesmo motor.",
      },
      {
        q: "Quem confirma a reserva?",
        a: "Você escolhe. Em um modo a reserva nasce pendente e **o hóspede a confirma** com um link que chega por e-mail. No outro, fica pendente até que **a recepção aceite**. Nos dois casos as pendentes vencem sozinhas.",
      },
    ],
    cta: {
      title: "Cadastre a propriedade e os quartos; *o motor fica pronto*.",
      lead:
        "O cadastro é guiado e é você quem faz. Se preferir que a gente acompanhe o cadastro dos quartos —o passo que mais custa—, fazemos numa ligação curta.",
      steps: [
        "Você cria a propriedade e cadastra categorias e unidades.",
        "Configura o motor no Estúdio.",
        "Compartilha o link e para de perder consultas no chat.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Roombir IA",
      description:
        "Um assistente que opera a sua hospedagem em uma conversa: cria e move reservas, muda tarifas e edita o site, com as suas permissões. Antes de opinar sobre o seu destino, lê um dossiê com quinze fontes datadas.",
    },
    hero: {
      eyebrow: "Roombir IA",
      title: "Toda a sua hospedagem, *em uma conversa*.",
      lead:
        "O Roombir IA opera o sistema inteiro: cria e move reservas, muda tarifas, bloqueia unidades e edita o seu site. Antes de opinar sobre o seu destino, lê um dossiê montado com quinze fontes datadas. E trabalha com as suas permissões, não com as dele.",
    },
    ask: {
      eyebrow: "O que você pode pedir a ele",
      title: "Você pede como diria, *e fica pronto*.",
      lead:
        "Não é preciso aprender comandos nem saber em que tela está cada coisa. São pedidos de um dia normal, e o que ele faz com cada um.",
      items: [
        {
          area: "Reservas",
          ask: "Passa o García da 203 para a 204 a partir de quinta",
          does: "Busca a reserva, verifica se a 204 está livre nessas noites e move. Devolve o cartão com a mudança.",
        },
        {
          area: "Tarifas",
          ask: "Sobe 10% o duplo superior nos sábados de outubro",
          does: "Diz quais datas são afetadas e aplica no plano de tarifas quando você confirma.",
        },
        {
          area: "Quartos",
          ask: "Bloqueia o chalé Alerce na terça à tarde por manutenção",
          does: "Cria o bloqueio a partir da tarde: a noite de terça sai do motor e a manhã continua vendável.",
        },
        {
          area: "Site",
          ask: "Muda o título da capa e publica",
          does: "Edita o texto no rascunho do seu site e publica. Se você não pedir para publicar, fica no rascunho.",
        },
        {
          area: "Destino",
          ask: "O que vale a pena fazer com a Vendimia?",
          does: "Lê o dossiê de Mendoza —data, distância, feriados por perto, rotas aéreas— e o seu pace dessas noites, e propõe o que fazer com a tarifa e a estadia mínima.",
        },
        {
          area: "Relatórios",
          ask: "Qual canal mais cancela?",
          does: "Lê o relatório de canais e responde com o número e o canal. Se houver menos de três reservas, não afirma.",
        },
      ],
    },
    dossier: {
      eyebrow: "Panorama turístico",
      title: "Sabe onde está *o seu destino*.",
      lead:
        "Antes de opinar sobre a sua região, o Roombir IA monta um dossiê com quinze fontes públicas, cada dado com a sua data: o que acontece este mês e o que vem a seguir. O modelo não sai buscando: lê o que o sistema já verificou.",
      items: [
        "**Feriados, feriados prolongados e férias escolares**, os seus e os dos países que visitam você.",
        "**Eventos no seu raio**: esportes, cultura, congressos e feiras, filtrados por distância e não por país.",
        "**Quais voos chegam à sua região e de onde**: as rotas observadas pousando nos aeroportos próximos.",
        "**Clima, câmbio dos seus mercados e alertas** de segurança ou de ameaças naturais.",
      ],
    },
    compare: {
      eyebrow: "A diferença",
      title: "Um chat genérico busca; *este parte de um dossiê*.",
      lead:
        "Um chat de IA de uso geral é muito bom redigindo, e não vê o seu sistema: busca na web, junta o que encontra e resume para você. O Roombir IA parte dos seus dados e de fontes fixas. Se você pedir que também busque na web, ele também faz isso.",
      headCriterion: "O que importa",
      headUs: "Roombir IA",
      headThem: "Um chat de IA de uso geral",
      rows: [
        {
          label: "Vê suas reservas, tarifas e quartos",
          us: "Sim: as mesmas que você opera",
          usTone: "ok",
          them: "Não, a menos que você cole os dados",
          themTone: "no",
        },
        {
          label: "Faz as mudanças",
          us: "Sim, com as suas permissões",
          usTone: "ok",
          them: "Não: explica onde clicar",
          themTone: "no",
        },
        {
          label: "De onde sai o dado do seu destino",
          us: "Um dossiê com quinze fontes fixas e datadas",
          usTone: "ok",
          them: "O que encontrar naquela vez na web",
          themTone: "mid",
        },
        {
          label: "Se falta um dado",
          us: "Diz que falta",
          usTone: "ok",
          them: "Nem sempre distingue",
          themTone: "mid",
        },
        {
          label: "Busca na web",
          us: "Se você pedir",
          usTone: "ok",
          them: "Sim",
          themTone: "ok",
        },
        {
          label: "Redige, resume e traduz",
          us: "Sim",
          usTone: "ok",
          them: "Sim",
          themTone: "ok",
        },
      ],
      legend: {
        ok: "sim",
        mid: "depende",
        no: "não",
        info: "sem avaliação",
      },
    },
    strategic: {
      eyebrow: "Turno estratégico",
      title: "“Quero mais reservas” *também é um pedido*.",
      lead:
        "Um objetivo aberto não entra no circuito de sempre. O Roombir IA lê a sua operação inteira —a ocupação que vem, o pace, os canais, a concorrência, o que falta configurar— e escolhe até três jogadas com regras fixas, não ao gosto do modelo. Propõe um plano com passos que podem ser executados, e cada passo pede a sua confirmação.",
      items: [
        "Lê **18 fontes da sua própria operação** em paralelo, em cerca de um segundo.",
        "As jogadas são escolhidas pelo sistema por regras; o modelo diagnostica e redige.",
        "Um dado que não pôde ser lido entra como faltante: nunca é preenchido com zeros.",
        "Se você já tem um plano em andamento, ele o retoma em vez de propor outro.",
      ],
    },
    perms: {
      eyebrow: "Permissões",
      title: "Opera com *as suas* permissões, não com as dele.",
      lead:
        "É o ponto delicado de qualquer assistente dentro de um sistema de gestão. Aqui está resolvido em camadas que se aplicam em momentos diferentes, e a última está onde não dá para pular: em quem executa.",
      items: [
        "**O que o seu usuário não pode, não é oferecido ao modelo**: na recepção ele faz o que a recepção pode; na administração, o que a administração pode.",
        "**O que não pode ser desfeito pede que você escreva**: para confirmar, você tem que digitar à mão o que vai apagar.",
        "**As exclusões pedem um botão**, não um “sim” perdido na conversa.",
        "**Você vê a transcrição** de cada turno: que ferramenta usou, com que dados e o que devolveu.",
      ],
    },
    talk: {
      eyebrow: "Como se fala com ele",
      title: "Você escreve, fala, *mostra*.",
      lead:
        "Dentro do painel, no espaço de trabalho em que você estiver, com o histórico desse espaço: a recepção não vê as conversas do marketing.",
      items: [
        {
          title: "Por voz",
          desc: "Você dita em vez de escrever. Funciona em qualquer navegador, porque a transcrição é feita do nosso lado.",
        },
        {
          title: "Capturas e PDF",
          desc: "Você cola uma captura ou solta um PDF —uma planilha de tarifas, uma listagem de uma OTA— e ele trabalha em cima disso.",
        },
        {
          title: "Áudio e vídeo",
          desc: "Um áudio ou um vídeo curto é resumido antes da resposta e entra como contexto. Até dois minutos de áudio.",
        },
        {
          title: "A web, se você pedir",
          desc: "Quando você pede para ele buscar fora, ele busca. Se não, trabalha com o seu sistema e com o dossiê do seu destino.",
        },
      ],
    },
    stats: [
      { value: "15", label: "fontes no dossiê do destino" },
      { value: "3", label: "níveis de modelo, escolhidos por turno" },
      { value: "5", label: "idiomas" },
    ],
    faq: [
      {
        q: "Ele pode fazer qualquer coisa?",
        a: "Tudo o que o seu usuário pode fazer no aplicativo, sim: cobre cada tela do sistema, exceto o que deixamos de fora de propósito, como o fluxo do hóspede ou o login. O que o seu usuário não pode, não é oferecido ao modelo: na recepção ele faz o que a recepção pode, não o que a administração pode.",
      },
      {
        q: "O que acontece se ele errar?",
        a: "Por isso há freios. O que grava dados, confirma com você na conversa. O que apaga, pede um botão. O que não pode ser desfeito, pede que você escreva à mão o que vai apagar. E no site ele trabalha em cima do rascunho: publicar é um passo à parte.",
      },
      {
        q: "Ele inventa dados do meu destino?",
        a: "O dossiê é montado pelo sistema, não pelo modelo: quinze fontes públicas lidas com regras fixas e guardadas com a sua data. Se uma fonte não respondeu, o dado aparece como **faltante** e o assistente tem que dizer isso. Um zero inventado é pior que um dado que falta, porque é citado como evidência.",
      },
      {
        q: "Ele busca na internet?",
        a: "Se você pedir, sim. Por padrão trabalha com o seu sistema e com o dossiê do destino, que é informação verificada, uma fonte por tema. A busca aberta fica para quando você quiser.",
      },
      {
        q: "Que modelo de IA ele usa?",
        a: "Não está preso a um fornecedor. Cada turno é classificado e vai para o modelo correspondente: um rápido para consultas, um mais capaz quando é preciso gravar dados ou analisar. Quando aparece um modelo melhor, trocamos do nosso lado e você não precisa fazer nada.",
      },
    ],
    cta: {
      title: "Peça algo *que hoje leva quatro abas*.",
      lead:
        "O assistente serve de verdade com o seu sistema carregado embaixo. Comece pelo cadastro, carregue uma propriedade e peça algo real.",
      steps: [
        "Você se cadastra e carrega a propriedade.",
        "Abre o Roombir IA pelo painel.",
        "Pede algo real e olha a transcrição.",
      ],
    },
  },

  propiedades: {
    meta: {
      title: "Propriedades",
      description:
        "Várias propriedades sob a mesma empresa e um único usuário: cada uma com sua moeda, seu fuso horário e sua equipe, e cada pessoa com acesso só às propriedades e às telas que lhe cabem.",
    },
    hero: {
      eyebrow: "Propriedades",
      title: "Várias propriedades, *uma única conta*.",
      lead:
        "Um hotel em Mendoza e seis chalés em Villa La Angostura, com o mesmo usuário. Cada propriedade com sua moeda, seu fuso horário e sua equipe; cada pessoa vê só as que lhe cabem.",
    },
    access: {
      eyebrow: "Acessos",
      title: "Cada pessoa, *só o seu*.",
      lead:
        "O acesso é dado por propriedade e por função. Quem atende a recepção dos chalés entra nos chalés, com o menu de recepção; quem administra vê tudo.",
      items: [
        "**Acesso por propriedade**: uma pessoa pode ter todas ou só algumas, e se você a convidar a partir de uma propriedade, ela fica limitada a essa.",
        "**Dez capacidades administrativas** que se concedem uma a uma: criar propriedades, gerenciar usuários, atribuir espaços, ativar apps, faturamento e sites, entre outras.",
        "**Espaços de trabalho por função** —recepção, limpeza, marketing, revenue—, cada um com seu menu e sua tela inicial.",
        "**Um espaço de administração** que vê o catálogo completo, incluindo os apps que forem adicionados depois.",
      ],
    },
    sheet: {
      eyebrow: "A ficha",
      title: "O que *define* cada propriedade.",
      items: [
        {
          title: "Tipo de hospedagem",
          desc: "Hotel, resort, apart-hotel, hostel, chalés, vila, aluguel de temporada ou glamping. O tipo decide como começa o resto.",
        },
        {
          title: "Endereço com mapa",
          desc: "Você cola as coordenadas do Google Maps e ela fica localizada. Dali saem o mapa do seu site e o dossiê do seu destino.",
        },
        {
          title: "Moeda, fuso horário e idioma",
          desc: "Os de cada propriedade, não os da empresa: uma em pesos e outra em dólares convivem sem problema.",
        },
        {
          title: "Contato público e redes",
          desc: "E-mail, telefone, WhatsApp, Instagram, Facebook e TikTok, cadastrados uma vez para o site, o LinkHub e o motor.",
        },
      ],
    },
    root: {
      eyebrow: "A raiz",
      title: "Todo o resto *depende da propriedade*.",
      lead:
        "Quartos, reservas, marca, site, LinkHub, avaliações e galerias são cadastrados sobre uma propriedade. Por isso se cadastram uma vez: você muda o telefone e ele muda em todo lugar.",
      items: [
        "**Modelos de propriedade**: a segunda começa copiando os espaços e os apps da primeira.",
        "**Cada propriedade tem seu motor, seu site e seu LinkHub**, com sua própria marca.",
        "**Espaços que não se desmontam por engano**: um com reservas em andamento ou usuários ativos fica bloqueado.",
        "**Apagar uma propriedade** só pode ser feito por quem é dono da empresa.",
      ],
    },
    move: {
      eyebrow: "Entre propriedades",
      title: "Trocar de propriedade *não é trocar de sistema*.",
      items: [
        {
          title: "Um seletor no topo",
          desc: "A empresa, a propriedade e o espaço de trabalho se escolhem no mesmo lugar, sem sair nem entrar de novo.",
        },
        {
          title: "Uma busca para todas",
          desc: "Ctrl ou Cmd + K encontra reservas, propriedades, unidades e telas. Encontra ou não encontra: não inventa.",
        },
        {
          title: "Avisos que sabem para onde ir",
          desc: "Se a notificação é de outra propriedade, o sistema troca de propriedade antes de abri-la.",
        },
      ],
    },
    faq: [
      {
        q: "Quantas propriedades cada plano inclui?",
        a: "Cada plano diz isso com número em [preços](/precios), do mesmo catálogo que cobra a sua conta.",
      },
      {
        q: "Posso dar acesso a alguém a uma única propriedade?",
        a: "Sim. Se você convidar a partir dessa propriedade, o acesso fica limitado a ela. E dentro da propriedade, o espaço de trabalho decide quais telas a pessoa vê.",
      },
      {
        q: "Posso ter um hotel e chalés na mesma empresa?",
        a: "Sim, e na mesma propriedade também: cada categoria é vendida como pool ou como unidade com nome próprio. Está explicado em [Quartos](/producto/pms).",
      },
],
    cta: {
      title: "Cadastre a primeira; *a segunda copia a estrutura*.",
      lead:
        "O cadastro cria a empresa e a primeira propriedade. As seguintes começam a partir de um modelo.",
      steps: [
        "Você cria a empresa e a primeira propriedade.",
        "Convida a sua equipe com acesso por propriedade.",
        "Adiciona a segunda a partir de um modelo.",
      ],
    },
  },

  habitaciones: {
    meta: {
      title: "Quartos",
      description:
        "Categorias vendidas como um pool de quartos intercambiáveis ou unidades com nome próprio, na mesma propriedade. Seis status operacionais com histórico, planta por andar, cadastro em massa e uma trava por noite.",
    },
    hero: {
      eyebrow: "Quartos",
      title: "Por categoria ou por unidade, *do seu jeito*.",
      lead:
        "Um hotel vende um duplo superior e atribui o 203 depois. Um complexo vende o chalé Alerce, com suas fotos e seu preço. O Roombir faz as duas coisas, e as duas ao mesmo tempo na mesma propriedade.",
    },
    dual: {
      eyebrow: "Duas formas de vender",
      title: "Cada categoria escolhe *como se vende*.",
      lead:
        "O modo se define categoria por categoria, com um valor padrão para a propriedade. Assim um complexo com seis chalés e dois quartos vende os chalés por nome e os quartos como pool, no mesmo calendário.",
      items: [
        "**Pool de categoria**: o hóspede compra “um duplo superior” e o sistema atribui o quarto, minimizando buracos ou distribuindo o desgaste. Ou deixa sem atribuir para a recepção decidir.",
        "**Unidade com nome próprio**: a categoria envolve uma única unidade. O hóspede reserva o chalé Alerce, com suas fotos e seu preço.",
        "**Mudar de modo fica registrado**, com o motivo, e há uma ferramenta para migrar categorias que já têm reservas.",
        "**Cada reserva guarda o modo com que nasceu**: mudar a configuração depois não reescreve a história.",
      ],
    },
    states: {
      eyebrow: "Status dos quartos",
      title: "Status que *não admitem impossíveis*.",
      lead:
        "Seis status —disponível, ocupado, limpeza, manutenção, bloqueado e saída pendente— e uma regra para cada mudança. De ocupado só se passa para saída pendente: ninguém libera um quarto com o hóspede dentro.",
      items: [
        "**Histórico por unidade**: quem mudou qual status, quando e com qual nota.",
        "**Painel por andar e por categoria**, com filtros, para ler a casa num relance.",
        "**Planta de ocupação** por andar, com navegação por data.",
        "**A limpeza muda status** sem ver tarifas nem revenue: o espaço de trabalho dela não tem isso.",
      ],
    },
    load: {
      eyebrow: "O cadastro",
      title: "Você cadastra uma vez, *todos usam*.",
      items: [
        {
          title: "Cadastro em massa em dois passos",
          desc: "Uma prévia avisa se um código se repete antes de criar qualquer coisa; depois todas são criadas juntas ou nenhuma.",
        },
        {
          title: "Bloqueios por metade do dia",
          desc: "Manutenção à tarde bloqueia essa noite e deixa a manhã vendável. Usa a mesma trava que uma reserva.",
        },
        {
          title: "A ficha de cada categoria",
          desc: "Capacidade de adultos e crianças, tamanho, preço base, fotos e comodidades escolhidas de um catálogo.",
        },
        {
          title: "Um único inventário",
          desc: "A categoria que você cadastra aqui é a que aparece no motor, no site, no LinkHub e no Revenue.",
        },
      ],
    },
    lock: {
      eyebrow: "A garantia",
      title: "Uma noite se vende *uma única vez*.",
      lead:
        "Cada noite de cada unidade é uma trava única no banco de dados. Se duas pessoas reservam a mesma coisa ao mesmo tempo, a segunda não entra: não é uma validação que dê para pular, é o banco que impede.",
      items: [
        "Os bloqueios de manutenção usam a mesma trava, então descontam inventário de verdade.",
        "Ao cancelar, marcar no-show ou fazer check-out, a noite se libera sozinha.",
        "A noite de saída não é bloqueada: quem chega naquele dia pode entrar.",
      ],
    },
    faq: [
      {
        q: "Tenho chalés e quartos. Posso ter os dois?",
        a: "Sim, na mesma propriedade. Os chalés entram como unidade com nome próprio e os quartos como pool, e convivem no mesmo calendário e no mesmo motor.",
      },
      {
        q: "Posso mudar de modo depois?",
        a: "Sim. A mudança pede um motivo e fica registrada, e se a categoria já tem reservas há uma ferramenta para migrá-la. As reservas antigas mantêm o modo com que nasceram.",
      },
      {
        q: "O que acontece se duas pessoas reservam a mesma noite ao mesmo tempo?",
        a: "Uma das duas falha. Cada noite de cada unidade é uma **trava única no banco de dados** —a chave é a unidade mais a data—, então a segunda escrita não entra. Não é uma validação no código que dê para driblar: é o banco que impede.",
      },
      {
        q: "A equipe de limpeza vê as tarifas?",
        a: "Não, se você não quiser. O espaço de limpeza traz seu próprio menu —status dos quartos e planta— sem tarifas nem revenue.",
      },
    ],
    cta: {
      title: "Comece pelos *seus quartos*.",
      lead:
        "Você cadastra categorias e unidades e a disponibilidade se inicializa sozinha. O calendário e o motor ficam prontos.",
      steps: [
        "Cadastra as categorias e escolhe como cada uma se vende.",
        "Cria as unidades de uma vez.",
        "A disponibilidade se inicializa sozinha.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Motor de reservas",
      description:
        "O motor que o seu hóspede vê —com preço por dia, unidades restantes e dez moedas— e as oito telas onde você o opera: painel do dia, lista, calendário, entrada manual, tarifas, disponibilidade, promoções e configuração. Sem comissão por reserva.",
    },
    hero: {
      eyebrow: "Motor de reservas",
      title: "Cada reserva, *do primeiro clique ao check-out*.",
      lead:
        "O hóspede vê o preço de cada dia antes de escolher as datas e reserva sozinho. Você a vê entrar no painel do dia, move no calendário e fecha no check-out. Sem comissão por reserva, em dez moedas.",
    },
    guest: {
      eyebrow: "O que o hóspede vê",
      title: "Um calendário que *responde antes de perguntar*.",
      lead:
        "O seletor de datas comum pede dois dias e pronto. O do motor mostra, dia a dia e conforme o que você habilitar, o que a pessoa ia perguntar por WhatsApp antes de reservar.",
      items: [
        "**Preço a partir de** em cada dia, calculado com as mesmas tarifas que o motor cobra.",
        "**Unidades restantes**: o seu inventário real, não um contador inventado.",
        "**Dias fechados**, fechados na chegada ou na saída, e o **mínimo de noites** ao escolher a entrada.",
        "**Chalé com nome ou categoria**, conforme como você vende, com suas fotos, suas comodidades e os extras oferecidos antes de pagar.",
      ],
    },
    views: {
      eyebrow: "O que você vê",
      title: "Cada momento do turno, *sua tela*.",
      lead:
        "Oito telas sobre o mesmo dado: mover uma reserva no calendário muda o quarto, libera a noite no motor e aparece no relatório.",
      items: [
        {
          title: "Painel do dia",
          desc: "Chegadas e saídas do dia, com cartões acionáveis. É a tela com que a recepção abre o turno.",
        },
        {
          title: "Todas as reservas",
          desc: "A lista com filtros e um painel lateral que abre sem sair: resumo, atividade e notas. Dali se atribui o quarto e se muda o status.",
        },
        {
          title: "Calendário",
          desc: "Quartos por dia. Você arrasta uma reserva ou a estica, e antes de soltar vê se choca com outra e o que acontece com o preço.",
        },
        {
          title: "Nova reserva",
          desc: "A que entrou por telefone ou por WhatsApp: hóspede, datas, ocupação por idade, canal de origem, promoções e notas.",
        },
        {
          title: "Tarifas",
          desc: "Preço base por categoria e planos de tarifas com vigência, moeda e estadia mínima.",
        },
        {
          title: "Disponibilidade",
          desc: "Sinal por dia —livre, parcial, cheio, fechado— e restrições: fechado na chegada ou na saída, estadia mínima e máxima.",
        },
        {
          title: "Promoções",
          desc: "Automáticas ou com código, por porcentagem, valor fixo ou preço por noite, com sua apresentação pronta para o seu site.",
        },
        {
          title: "Configuração",
          desc: "Moeda, confirmação, regras de estadia, horários e como os quartos são atribuídos. Mais o Estúdio do Motor para textos e cores.",
        },
      ],
    },
    prices: {
      eyebrow: "Cada tarifa, individual",
      title: "O preço de cada noite, *com o seu porquê*.",
      lead:
        "Quando o motor precisa dizer quanto custa uma noite, resolve uma cadeia fixa, sempre na mesma ordem. Saber de qual degrau sai cada preço é o que permite confiar no sistema sem auditá-lo toda manhã.",
      items: [
        "**Primeiro, o que você aceitou no Revenue**: se há uma tarifa recomendada e aceita para essa data, ela manda.",
        "**Depois, o plano de tarifas** vigente para essa categoria e essa data, com sua estadia mínima.",
        "**Se não há plano, o preço base** da categoria. Cada chalé pode ter o seu.",
        "**Por cima de tudo, as promoções**: desconto ou acréscimo —uma promoção também pode subir o preço na alta temporada—, automáticas ou com código.",
      ],
    },
    currency: {
      eyebrow: "Dez moedas",
      title: "O que o hóspede viu *não se mexe depois*.",
      lead:
        "O hóspede olha o preço na moeda dele e você cobra na sua. A reserva fica sempre na sua moeda base e a conversão congela no check-in: o valor que você cobra não muda depois.",
      items: [
        "Dólar, peso argentino, real, peso chileno, peso colombiano, peso mexicano, sol, peso uruguaio, euro e libra.",
        "Para pesos argentinos você escolhe a cotação: oficial, blue, MEP ou CCL.",
        "As taxas se atualizam a cada três horas e são marcadas como antigas se a fonte não respondeu.",
        "Os relatórios somam direto, porque tudo fica na sua moeda base.",
      ],
    },
    where: {
      eyebrow: "Onde aparece",
      title: "No seu site, na bio *e para uma IA*.",
      items: [
        {
          title: "O seu site",
          desc: "Uma seção do editor de site que se conecta sozinha ao seu inventário.",
        },
        {
          title: "O seu LinkHub",
          desc: "O link da bio do Instagram abre o mesmo motor, idêntico ao do seu site.",
        },
        {
          title: "Um link direto",
          desc: "Uma página própria com o endereço da sua hospedagem, para mandar por WhatsApp se você ainda não tem site.",
        },
        {
          title: "Agentes de IA",
          desc: "Com a camada agêntica ligada, um assistente externo pode ler a sua disponibilidade e completar uma reserva. [Como funciona](/producto/marketing#agentes).",
        },
      ],
    },
    after: {
      eyebrow: "Depois do checkout",
      title: "A reserva entra *e o sistema segue sozinho*.",
      items: [
        {
          title: "A unidade é atribuída",
          desc: "A única possível se você vende por unidade, a que o sistema escolhe se é um pool automático, ou nenhuma se você preferir que a recepção decida.",
        },
        {
          title: "Sai o e-mail",
          desc: "A partir do domínio do roombir, com a sua caixa como responder-a. Sem configurar servidor de e-mail nem mais um fornecedor.",
        },
        {
          title: "O hóspede tem a sua conta",
          desc: "Com o StayPass ele vê as próprias reservas a partir do seu site. Um mesmo hóspede acumula as hospedagens onde reservou, e cada hotel vê só as suas.",
        },
      ],
      stats: [
        { value: "0%", label: "de comissão por reserva" },
        { value: "10", label: "moedas, com blue, MEP, CCL ou oficial para ARS" },
        { value: "2", label: "modos de confirmação, com vencimento automático" },
      ],
    },
    faq: [
      {
        q: "Vocês cobram comissão por reserva?",
        a: "Não. O motor não tem cobrança por reserva: você paga o plano e nada mais. Está escrito nos [termos](/legal/terminos).",
      },
{
        q: "Quem confirma a reserva?",
        a: "Você escolhe. Em um modo a reserva nasce pendente e **o hóspede a confirma** com um link que chega por e-mail. No outro, fica pendente até que **a recepção aceite**. Nos dois casos as pendentes vencem sozinhas, assim você não fica com noites bloqueadas por alguém que nunca voltou.",
      },
      {
        q: "Posso mudar os textos e as cores do checkout?",
        a: "Sim, pelo Estúdio do Motor e **sem tocar em código nem republicar o site**: busca, calendário, hóspedes, listagem, detalhe, serviços, checkout e tela final, cada um com seus textos e seus estilos.",
      },
    ],
    cta: {
      title: "Coloque o seu link de reservas *na bio*.",
      lead:
        "Você cadastra os quartos e o motor fica operacional com a disponibilidade inicializada. O site e o LinkHub entram depois, quando você quiser.",
      steps: [
        "Cadastra categorias, unidades e preços.",
        "Configura o motor no Estúdio.",
        "Compartilha o link e para de perder consultas no chat.",
      ],
    },
  },

  informes: {
    meta: {
      title: "Relatórios",
      description:
        "Ocupação, ADR, RevPAR, receita, cancelamentos, antecedência e canais, calculados sobre as mesmas reservas que você opera, e uma seção com o que está mal cadastrado hoje. Sem planilhas.",
    },
    hero: {
      eyebrow: "Relatórios",
      title: "Seus números, *sem montar planilha*.",
      lead:
        "Ocupação, tarifa média, receita, cancelamentos e de que canal vem cada reserva, calculados sobre as mesmas reservas que você opera. E uma seção que não olha o que aconteceu, e sim o que está mal cadastrado hoje.",
    },
    hygiene: {
      eyebrow: "Status e gestão",
      title: "O que está mal, *antes do que aconteceu*.",
      lead:
        "A maioria dos relatórios conta o mês passado. Esta seção diz o que precisa ser corrigido hoje, antes que vire um hóspede sem quarto.",
      items: [
        "**Reservas pendentes** que ninguém confirmou a tempo.",
        "**Chegadas de hoje sem quarto atribuído.**",
        "**Saídas de hoje que continuam dentro**: o check-out não foi marcado.",
        "**Reservas sem canal**: as que ninguém marcou e depois desmontam o relatório de canais.",
      ],
    },
    metrics: {
      eyebrow: "O que mede",
      title: "Cada número, *explicado na sua linha*.",
      lead: "Sem glossário à parte: cada métrica se entende onde aparece.",
      items: [
        {
          title: "Ocupação e demanda",
          desc: "Quantos quartos você tem ocupados hoje e a curva do que já está reservado para os próximos 7 a 90 dias.",
        },
        {
          title: "ADR e RevPAR",
          desc: "O ADR é o que você cobra em média por noite vendida; o RevPAR, o que cada quarto que você tem deixa, vendido ou não.",
        },
        {
          title: "Cancelamentos",
          desc: "A taxa do período e as de última hora, com sua tendência por semana ou por mês.",
        },
        {
          title: "Canais",
          desc: "De onde vem cada reserva e qual cancela mais. Com menos de três reservas, não afirma.",
        },
      ],
    },
    period: {
      eyebrow: "Contra o período anterior",
      title: "Cada número, *com a sua diferença*.",
      lead:
        "Você escolhe o intervalo —uma semana, um mês, três ou seis meses, ou um personalizado— e cada métrica se compara com o período imediatamente anterior.",
      items: [
        {
          title: "Receita",
          desc: "A do período e a projetada para os próximos 30 dias com o que já está reservado.",
        },
        {
          title: "Antecedência",
          desc: "Com quantos dias de antecedência reservam com você, com o mínimo, o máximo e sobre quantas reservas foi calculado.",
        },
        {
          title: "Estadia média",
          desc: "Quantas noites cada hóspede fica, em média, no intervalo que você escolheu.",
        },
        {
          title: "Ocupação por categoria",
          desc: "Quais categorias estão cheias hoje e quais têm vaga, com a porcentagem de cada uma.",
        },
      ],
    },
    ask: {
      eyebrow: "A pergunta que não está na tela",
      title: "Se não está no relatório, *pergunte a ele*.",
      lead:
        "O Roombir IA lê os mesmos relatórios e responde na conversa, com o número e de onde ele sai. Para “estamos melhor que o ano passado nesta altura?” tem o pace do [Revenue](/producto/revenue), contra o seu próprio histórico.",
      items: [
        "“Qual canal mais cancela este trimestre?”",
        "“Quantas chegadas eu tenho amanhã sem quarto?”",
        "“Como está vindo outubro contra setembro?”",
      ],
    },
    faq: [
      {
        q: "De onde saem os números?",
        a: "Das mesmas reservas que você opera no calendário, calculadas na hora. Não há uma exportação noturna nem uma base à parte que possa se dessincronizar.",
      },
{
        q: "Qual a diferença com o Revenue?",
        a: "Relatórios olha para a operação: o que aconteceu, o que está mal cadastrado, de onde vêm as reservas. [Revenue](/producto/revenue) olha para a frente para decidir o preço: pace contra o seu próprio histórico, concorrência e eventos.",
      },
      {
        q: "Preciso configurar alguma coisa?",
        a: "Não. Com as reservas cadastradas, os relatórios já estão prontos. A única coisa que vale a pena é marcar o canal de cada reserva manual, para o relatório de canais servir.",
      },
    ],
    cta: {
      title: "Seus números, *desde o primeiro dia*.",
      lead: "Os relatórios não se configuram: saem das reservas que você já está cadastrando.",
      steps: [
        "Cadastra suas reservas, ou migramos com você.",
        "Marca o canal de cada reserva manual.",
        "Abre Relatórios e escolhe o intervalo.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue",
      description:
        "Revenue management com o rastro de cada preço: quais dados viu, qual regra bateu e qual teto aplicou. Pace contra o seu próprio histórico, concorrência, eventos do seu destino de quinze fontes e a tarifa que entra no motor ao aceitá-la.",
    },
    hero: {
      eyebrow: "Revenue",
      title: "Ele diz o preço *e por quê*.",
      lead:
        "Um documento por data com o rastro completo: quais dados viu, qual regra bateu e qual teto aplicou. Olha o seu próprio histórico e o seu destino —feriados, eventos, rotas aéreas, clima— com a fonte à vista. E quando você aceita, a tarifa entra sozinha no motor.",
    },
    decision: {
      eyebrow: "Decisões",
      title: "A resposta para *“por que você sugere isso?”*",
      lead:
        "Há um documento por propriedade e por data com o rastro completo: quais dados o sistema viu, qual era a tarifa base, qual sugeriu, quais regras bateram, se foi aplicado um teto, e um registro que se lê linha por linha.",
      items: [
        "Ocupação, demanda, disponibilidade, tarifas da concorrência, reservas novas e eventos: tudo o que entrou na conta, com seu valor.",
        "Qual regra bateu e em que ordem, porque ganha a última.",
        "Se foi aplicado o teto mínimo ou máximo, e qual era.",
        "A vida da recomendação: sugerida, aceita ou rejeitada, aplicada, com quem e quando.",
      ],
    },
    destination: {
      eyebrow: "O seu destino",
      title: "O que move a demanda, *com a fonte*.",
      lead:
        "Os sinais de demanda saem de quinze fontes públicas por destino, varridas ao redor da sua propriedade e não de uma lista fixa de cidades. Os eventos são sugeridos sozinhos e você os aprova: um aprovado não é sobrescrito pela próxima atualização.",
      items: [
        "**Eventos no seu raio**: esportes, cultura, congressos e feiras, com seu impacto esperado e os dias que faltam.",
        "**Feriados e feriados prolongados**, que as regras de preço podem usar como variável.",
        "**Rotas aéreas observadas** chegando à sua região, e o câmbio dos mercados que visitam você.",
        "**As buscas sem disponibilidade** do seu próprio motor: o sinal de demanda mais subestimado de uma hospedagem pequena.",
      ],
    },
    rules: {
      eyebrow: "Cenários",
      title: "Treze variáveis, *e um ensaio a seco*.",
      lead:
        "Cada regra olha uma variável, compara com um valor dentro de uma janela de antecedência e aplica um ajuste. São avaliadas em ordem e ganha a última que bate. Antes de ativar qualquer uma, o ensaio a seco mostra o que ela teria feito.",
      items: [
        "**Variáveis**: ocupação, índice de demanda, disponibilidade, tarifa dos concorrentes 1 a 5, reservas novas em 7 e em 30 dias, impacto de eventos, dias até o evento mais próximo e índice de pace.",
        "**Comparações**: maior, maior ou igual, igual, menor ou igual, menor.",
        "**Ajuste** percentual sobre a tarifa base.",
        "**Tetos** de tarifa mínima e máxima, aplicados depois de tudo o mais.",
      ],
    },
    comp: {
      eyebrow: "Concorrência",
      title: "Uma concorrência *mista e honesta*.",
      lead:
        "Os concorrentes que também usam roombir contribuem com sua tarifa real. Os de fora são descobertos sozinhos por proximidade e semelhança, e a tarifa deles você cadastra, como referência fixa ou por data.",
      items: [
        "Pontuação de semelhança por tipo, categoria, tamanho, faixa e região.",
        "O perfil do seu próprio hotel, tirado do sistema a menos que você o mude à mão.",
        "Grade de tarifas da concorrência por data.",
        "Preparado para fornecedores automáticos de tarifas; hoje sem conectar.",
      ],
    },
    rest: {
      eyebrow: "As outras abas",
      title: "Tudo o que existe *além do preço*.",
      items: [
        {
          title: "Dois calendários em um",
          desc: "Por data de reserva —quando compraram de você— e por data de estadia —quando dormem—. Muitos sistemas misturam os dois e confundem.",
        },
        {
          title: "Pace",
          desc: "O ritmo de venda contra o da sua própria propriedade no passado, por dia da semana, mês e antecedência, com alertas de venda rápida ou lenta.",
        },
        {
          title: "Eventos",
          desc: "Sugeridos sozinhos e curados por você: sugerido, aprovado ou descartado, com pontuação de relevância e impacto esperado.",
        },
        {
          title: "Recomendações",
          desc: "Tarifa atual, sugerida, diferença e motivo. São aceitas ou rejeitadas, e podem se aplicar sozinhas se você ativar isso.",
        },
        {
          title: "Sinais de demanda",
          desc: "Além das reservas, o índice de demanda considera as buscas do seu motor, incluindo as que não encontraram vaga.",
        },
        {
          title: "Configuração",
          desc: "Concorrência, localização, perfil do hotel, limites de pace, raio de eventos e tetos de tarifa.",
        },
      ],
    },
    cost: {
      eyebrow: "Em outros lugares, à parte",
      title: "Um RMS quase sempre *é mais um módulo*.",
      lead:
        "Entre os sistemas para hospedagens independentes, o revenue management é vendido como um adicional. O único que publica o preço no site cobra por quarto.",
      head: { tool: "Produto", price: "Preço publicado", gap: "Como se contrata" },
      rows: [
        {
          tool: "Amenitiz PriceAdvisor",
          price: "**€6** por quarto por mês",
          gap: "Adicional sobre o plano. Sugere; não aplica sozinho.",
        },
        {
          tool: "SiteMinder Dynamic Revenue Plus",
          price: "não publica",
          gap: "Adicional com cobrança à parte sobre o plano.",
        },
        {
          tool: "Mews RMS",
          price: "não publica",
          gap: "Módulo à parte dos seus três planos.",
        },
      ],
      total:
        "Com preço publicado, um hotel de **15 quartos** paga **€90 por mês** só pelas sugestões de tarifa. No roombir, Revenue está no catálogo de produtos como qualquer outro: [veja em qual plano ele entra](/precios).",
      source:
        "Fontes: páginas de produto e de preços de amenitiz.com, siteminder.com e mews.com, lidas em 22 de setembro de 2026.",
    },
    faq: [
      {
        q: "Tenho pouco histórico. Serve do mesmo jeito?",
        a: "Serve, mas ele vai avisar. O pace é comparado contra **o seu próprio histórico**, agrupado por dia da semana, mês e antecedência, e a tela **mostra o tamanho da amostra**. Se uma célula foi calculada com três reservas, você vai ver. Preferimos isso a mostrar uma curva confiante construída sobre nada.",
      },
      {
        q: "De onde saem as tarifas da concorrência?",
        a: "De dois lugares. Se o concorrente também usa roombir, a tarifa é real. Se é de fora, o sistema **descobre sozinho** por localização e semelhança, mas **a tarifa você cadastra**, fixa ou por data. A conexão com fornecedores automáticos está preparada e ainda não conectada; não vamos dizer que sim até que esteja.",
      },
      {
        q: "Se eu aceitar uma recomendação, tenho que copiar o preço para outro lugar?",
        a: "Não. Ao aceitá-la, a tarifa **entra no motor de reservas** e passa a ser o primeiro degrau do preço daquela data. Na maioria dos sistemas esse passo é uma pessoa copiando um número de uma tela para outra.",
      },
    ],
    cta: {
      title: "O preço *deixa de ser um palpite*.",
      lead:
        "Revenue começa a servir assim que você tem histórico próprio, e enquanto não tem, ele diz isso na cara em vez de inventar uma curva.",
      steps: [
        "Cadastra o inventário e as tarifas base.",
        "Monta a sua concorrência e aprova os eventos da sua região.",
        "Escreve duas ou três regras e testa a seco.",
      ],
    },
  },

  marketing: {
    meta: {
      title: "Marketing",
      description:
        "O editor de site com assistente —você mostra uma captura e ele monta as seções— conectado ao seu inventário e ao seu motor. Marca, biblioteca de fotos, galerias, avaliações, LinkHub e a camada que torna a sua hospedagem legível para uma IA.",
    },
    hero: {
      eyebrow: "Marketing",
      title: "Um site que *já sabe* o que está livre.",
      lead:
        "O site, a marca, as fotos, as avaliações e o LinkHub saem do mesmo lugar que as suas reservas: você muda um preço e ele já está no site. E o editor tem um assistente: você cola a captura de um site de que gosta e ele monta as seções, editáveis.",
    },
    ai: {
      eyebrow: "O editor com assistente",
      title: "Você mostra um site, *ele monta o seu*.",
      lead:
        "Você cola até seis capturas por pedido —a capa de um hotel de que gosta, uma seção de outro site— e o assistente monta as seções com essa estrutura e os seus textos, na tela e em rascunho. Depois você edita como qualquer outra coisa.",
      items: [
        "**Você aponta um bloco e pede** “faz igual a este”, “adiciona mais dois cartões”, “muda o título”: ele mexe só nessa peça e deixa o resto como estava.",
        "**Tudo vai para o rascunho.** Publicar é um passo à parte, e é seu.",
"**Sem código.** E se você quiser, há estilos por tela, animações e CSS próprio.",
      ],
    },
    connected: {
      eyebrow: "Conectado, não colado",
      title: "Seções que *leem os seus dados*.",
      lead:
        "O que diferencia o editor de um construtor genérico não é a tela: são as seções que se conectam sozinhas ao que você já cadastrou. Num construtor genérico, o motor e os quartos são colados de outro serviço.",
      items: [
        {
          title: "Motor e quartos",
          desc: "O motor de reservas, os cartões de quarto e as categorias, com disponibilidade e preço de verdade.",
        },
        {
          title: "Galeria, avaliações, serviços e promoções",
          desc: "Você muda uma promoção em Reservas e o site mostra, sem editar a página.",
        },
        {
          title: "Vários idiomas",
          desc: "Cada idioma é uma página com seu endereço, seu título e sua prévia para redes. Não é um tradutor por cima.",
        },
        {
          title: "O seu domínio",
          desc: "Cada idioma pode ter o seu, com rascunho, publicação explícita e prévia em vários tamanhos.",
        },
      ],
    },
    quality: {
      eyebrow: "Qualidade do site",
      title: "Um controle de qualidade *que também conserta*.",
      lead:
        "Um painel como o do PageSpeed revisa o que um buscador e um celular penalizam. O botão “Consertar tudo” corrige o que encontrou com regras fixas, sem IA no meio, e revisa de novo.",
      items: [
        {
          title: "Antes de publicar",
          desc: "Avisa textos pequenos demais no celular, imagens sem descrição e títulos ou descrições que faltam.",
        },
        {
          title: "Modelos com a sua marca",
          desc: "Você começa de um modelo que se preenche com o seu logo, suas cores, suas fotos e os textos da sua propriedade.",
        },
        {
          title: "Modo simples ou avançado",
          desc: "O simples esconde os controles de design até você procurá-los. O avançado mostra todos.",
        },
        {
          title: "Popups e WhatsApp",
          desc: "Cinco formatos de popup com regras de página e de frequência, e um botão de WhatsApp com a mensagem já escrita.",
        },
      ],
    },
    cost: {
      eyebrow: "O que hoje você paga à parte",
      title: "Cinco fornecedores *que não se falam*.",
      lead:
        "É assim que hoje se monta a presença digital de uma hospedagem independente, com os preços que cada fornecedor publica. Nenhum sabe o que você tem livre esta noite.",
      head: { tool: "O que se compra", price: "Preço publicado", gap: "O que não sabe da sua hospedagem" },
      rows: [
        {
          tool: "Site no Framer",
          price: "US$ 10/mês + **US$ 20 por idioma**",
          gap: "O seu inventário e os seus preços: o motor é colado de outro serviço.",
        },
        {
          tool: "Site no Webflow",
          price: "US$ 15/mês + **US$ 9 por idioma**",
          gap: "O mesmo: sem quartos nem motor próprios.",
        },
        {
          tool: "Avaliações no TrustYou",
          price: "a partir de **US$ 75** por propriedade por mês",
          gap: "Qual hóspede saiu hoje, a menos que você integre com o seu sistema.",
        },
        {
          tool: "Link na bio com Linktree",
          price: "**US$ 15/mês**",
          gap: "A sua disponibilidade: “Reservar” é um link.",
        },
        {
          tool: "Fotos no Google Workspace",
          price: "**US$ 7** por usuário por mês",
          gap: "Qual foto é de qual quarto.",
        },
      ],
      total:
        "Um site em cinco idiomas no Framer (US$ 10 + 4 × US$ 20), mais avaliações, link na bio e fotos: **US$ 187 por mês**, e ainda sem motor de reservas nem nada conectado às suas reservas.",
      source:
        "Preços publicados em framer.com, webflow.com, trustyou.com, linktr.ee e workspace.google.com, lidos em 22 de setembro de 2026. Framer, Webflow e TrustYou, com pagamento anual; Linktree, plano Pro mensal.",
    },
    brand: {
      eyebrow: "Marca",
      title: "A sua marca, *cadastrada uma vez*.",
      lead:
        "Uma ficha de identidade que alimenta o site, o LinkHub, o motor e os dados que os buscadores leem. Você muda o logo e ele muda em todo lugar.",
      items: [
        "**Paleta tirada do seu logo**, com a cor principal ajustada para o texto por cima se ler.",
        "**Tom e tipografia**: você escolhe o tom e a tipografia se sugere sozinha.",
        "**História, frase e para quem você fala**, nas suas palavras.",
        "**A sua região e o que você tem por perto**, detectados a partir do mapa.",
      ],
    },
    files: {
      eyebrow: "Fotos e arquivos",
      title: "Suas fotos, *em um só lugar*.",
      items: [
        {
          title: "A biblioteca da empresa",
          desc: "Imagens, vídeos, áudios e documentos, com pastas, etiquetas e busca. Você arrasta do computador e pronto.",
        },
        {
          title: "Editor de imagem",
          desc: "Você recorta e ajusta uma foto sem sair do sistema.",
        },
        {
          title: "Galerias",
          desc: "Fotos e vídeos do YouTube ou Vimeo agrupados em galerias da propriedade, com capa e ordem.",
        },
        {
          title: "A mesma biblioteca para tudo",
          desc: "Ela é usada pelo editor de site, pela marca, pelas galerias e pelo assistente. O site mostra a galeria que você escolher com uma seção.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avaliações",
      title: "Suas avaliações, *respondidas em um só lugar*.",
      lead:
        "Você cadastra as avaliações do Google, Booking, TripAdvisor, Airbnb, Despegar, Hotels.com e as próprias, à mão ou por arquivo, e responde daqui. As que você escolher aparecem no seu site.",
      items: [
        "**Importação por arquivo** que avisa as linhas com erros e não duplica as que já existiam.",
        "**Resposta pública** por avaliação, e um filtro das que continuam sem resposta.",
        "**Média e distribuição** de uma a cinco estrelas, por fonte.",
        "**Aparecem no seu site** com uma seção do editor, só as que você deixar visíveis.",
      ],
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "O link da sua bio, *com o motor dentro*.",
      lead:
        "Um link na bio feito para hospedagens: o botão de reservar abre o mesmo motor do seu site, com disponibilidade e preço, sem mandar ninguém para outro formulário.",
      items: [
        "**Dez tipos de bloco**: reservar, WhatsApp, avaliações, galeria, vídeo, mapa, contato, link, texto e separador, com programação por data.",
        "**Seis modelos** que se completam com a sua marca, ou o design à mão.",
        "**Código QR** para imprimir na recepção ou no cardápio.",
        "**Visitas e cliques** por dia, país, origem e dispositivo, sem guardar o IP de ninguém.",
      ],
    },
    agentes: {
      eyebrow: "Legível para uma IA",
      title: "Que uma máquina consiga *te entender e te reservar*.",
      lead:
        "Cada vez mais gente pergunta a um assistente de IA antes de buscar. Esse assistente não vê o seu carrossel de fotos: lê texto, dados estruturados e rotas. O seu site e o seu motor publicam as três coisas, e se ligam com um interruptor.",
      items: [
        "**`llms.txt`**: quem você é, o que vende e como se reserva, em texto puro.",
        "**`availability.json`** e **`engine-capabilities.json`**: a sua disponibilidade real e o que o seu motor aceita.",
        "**Dados estruturados** em cada página e um editor de GEO para declarar o que você é com as suas palavras.",
        "**Dez ferramentas para agentes no navegador**: um assistente externo pode completar uma reserva.",
      ],
    },
    faq: [
      {
        q: "Preciso saber design?",
        a: "Não. Você pode começar de um modelo que se preenche com a sua marca, pedir ao assistente que monte uma seção a partir de uma captura, ou trabalhar no modo simples, que esconde os controles de design. Se você sabe design, o modo avançado tem estilos por tela, animações e CSS próprio.",
      },
      {
        q: "Preciso cadastrar os quartos duas vezes, uma para o site?",
        a: "Não, e esse é o ponto. As seções de quartos, motor, galerias, promoções, avaliações e serviços **se conectam sozinhas ao que você já cadastrou**. Se você sobe uma foto nova numa categoria, ela aparece no site sem ninguém mexer.",
      },
      {
        q: "Posso usar o meu próprio domínio?",
        a: "Sim, e cada idioma do site pode ter o seu.",
      },
{
        q: "Posso trazer minhas avaliações do Google?",
        a: "Sim, por arquivo ou à mão.",
      },
    ],
    cta: {
      title: "Seu site e seu link, *na mesma tarde*.",
      lead:
        "Se você já cadastrou a marca e os quartos, começa o site a partir de um modelo ou de uma captura, e o LinkHub se completa com os dados da propriedade.",
      steps: [
        "Cadastra sua marca e suas fotos.",
        "Começa o site a partir de um modelo ou uma captura.",
        "Publica no seu domínio e monta o LinkHub.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Soluções",
      description:
        "Hotéis, chalés e apartamentos, hostels, glamping e villas, e grupos pequenos: como o Roombir se configura para cada tipo de hospedagem e para cada posto de trabalho.",
    },
    hero: {
      eyebrow: "Soluções",
      title: "O mesmo sistema, *configurado diferente*.",
      lead:
        "Um hotel urbano, um complexo de chalés e um hostel não operam igual, e mesmo assim quase todos os sistemas do mercado escolhem um dos três e fazem os outros dois se ajustarem. Aqui o que muda é a configuração: modelo de venda, espaços de trabalho e apps ativos.",
    },
    hoteles: {
      eyebrow: "Hotéis e aparthotéis",
      title: "Quartos intercambiáveis, *atribuídos sozinhos*.",
      lead:
        "A configuração clássica: categorias que agrupam várias unidades equivalentes, o hóspede compra um tipo de quarto e o sistema decide qual lhe cabe. Com a atribuição automática dá para pedir que minimize buracos ou equilibre o desgaste entre unidades.",
      items: [
        "Modelo de venda: pool de categoria, com atribuição automática ou manual como você preferir.",
        "Espaços de trabalho típicos: recepção, governança e administração, cada um com seu menu.",
        "Planta de ocupação por andar e status dos quartos com matriz de transições.",
        "Recompactação de atribuições para liberar buracos quando a ocupação aperta.",
      ],
    },
    cabanas: {
      eyebrow: "Chalés, apartamentos e aluguéis",
      title: "Cada unidade com *nome próprio*.",
      lead:
        "Aqui o hóspede não compra 'um chalé de dois ambientes': compra o Alerce, com suas fotos e sua descrição. O modelo de unidade única faz a categoria envolver exatamente uma unidade, e não fica nenhuma ambiguidade sobre o que ele reservou.",
      items: [
        "Modelo de venda: unidade única 1:1, escolhível por categoria e não para a propriedade inteira.",
        "Ficha própria por unidade no motor: fotos, descrição, capacidade e preço.",
        "Bloqueios de manutenção que tiram inventário real e somem do motor.",
        "Se você também tem dois quartos padrão, eles convivem: o modo se define por categoria.",
      ],
    },
    hostels: {
      eyebrow: "Hostels",
      title: "Camas, turnos e *muito giro*.",
      lead:
        "Volume alto de reservas curtas, time que gira e uma operação onde o check-in e o check-out do dia são a tela mais olhada. O painel do dia abre o turno e o status dos quartos fecha.",
      items: [
        "Painel do dia com check-ins e check-outs, e dois dias visíveis ao mesmo tempo.",
        "Espaço de governança com sua própria lista de trabalho e nada mais no menu.",
        "Tours guiados por app: alguém novo se treina sozinho no primeiro turno.",
        "Criação de usuários com senha temporária, que bloqueia a interface até ser trocada.",
      ],
    },
    glamping: {
      eyebrow: "Glamping, villas e estâncias",
      title: "Poucas unidades, *muita marca*.",
      lead:
        "Quando você tem seis domos, a operação é simples e o difícil é vendê-los bem. A identidade de marca, as galerias, o site com domínio próprio e o LinkHub pesam mais que o tape chart.",
      items: [
        "Identidade de marca com paleta extraída do logo, tom, narrativa e públicos.",
        "Site com modelo autopreenchido a partir dos seus dados reais, no seu domínio.",
        "LinkHub com QR para imprimir, e o motor como botão principal.",
        "Camada agêntica: a hospedagem fica legível para um modelo de linguagem, não só para o Google.",
      ],
    },
    grupos: {
      eyebrow: "Grupos e redes pequenas",
      title: "Várias propriedades, *um só lugar*.",
      lead:
        "Uma empresa pode ter várias propriedades, e uma pessoa pode pertencer a várias empresas. Além disso, uma associação pode ser limitada a propriedades concretas: o gerente de um hotel vê o seu hotel e nada mais.",
      items: [
        "Seletor de empresa, propriedade e espaço de trabalho no painel.",
        "Associações limitadas a uma lista de propriedades, ou a todas.",
        "Dez capacidades administrativas atribuíveis por associação, além do papel.",
        "Modelos de propriedade: uma propriedade nova começa com os espaços e apps já configurados.",
      ],
    },
    roles: {
      eyebrow: "Por posto",
      title: "E lá dentro, *cada um vê o seu*.",
      lead:
        "O espaço de trabalho ativo decide o menu, a tela inicial, as permissões efetivas e até o tour de treinamento. Não é uma permissão que esconde botões: é uma composição diferente do mesmo sistema.",
      items: [
        {
          title: "Recepção",
          desc: "Painel do dia, reservas, calendário, entrada manual e status dos quartos. A home mostra check-ins, check-outs e reservas recentes.",
        },
        {
          title: "Governança",
          desc: "Status dos quartos e planta de ocupação. A home mostra unidades em limpeza e saídas pendentes, e o menu não tem tarifas nem revenue.",
        },
        {
          title: "Marketing",
          desc: "Builder, sites, galerias, avaliações, marca e LinkHub. A home mostra nota de avaliações, visibilidade e status do LinkHub. A área Reservas nem aparece.",
        },
        {
          title: "Revenue e dono",
          desc: "Relatórios e RMS completos: pace, comp-set, eventos, regras e recomendações, mais ADR, RevPAR e produção por canal.",
        },
        {
          title: "Administração",
          desc: "Vê o catálogo completo automaticamente, incluindo apps adicionados no futuro. É o espaço que gerencia usuários, propriedades e faturamento.",
        },
        {
          title: "O hóspede",
          desc: "StayPass: sua conta, suas reservas, o detalhe, o cancelamento e seu perfil. Cadastra-se uma vez e acumula as hospedagens onde reservou.",
        },
      ],
    },
    faq: [
      {
        q: "Tenho cabanas e também dois quartos padrão. Qual modelo escolho?",
        a: "Os dois. O modo de venda se define por **categoria**, não por sistema: as cabanas vão como unidade única 1:1, com nome próprio, e os quartos como pool intercambiável. Convivem no mesmo calendário e no mesmo motor, e há um assistente para migrar uma categoria de um modo ao outro quando ela já tem reservas dentro.",
      },
      {
        q: "Somos três pessoas em turnos rotativos. Como treinamos alguém novo?",
        a: "Cada pessoa entra no seu espaço de trabalho e vê só o que é dela. O treinamento se monta com os apps desse espaço, e os **38 tours guiados** se desenham por cima da tela real, destacando o elemento de que falam. Não há manual para ler nem vídeo para assistir: aprende-se no primeiro turno.",
      },
      {
        q: "Tenho duas propriedades em cidades diferentes.",
        a: "Uma empresa pode ter várias propriedades, e cada vínculo pode ser restrito: o responsável por uma vê a sua e nada mais. Com os **modelos de propriedade**, a segunda começa com os espaços de trabalho e os apps já configurados como a primeira.",
      },
    ],
    cta: {
      title: "Conte como *você opera*.",
      lead:
        "No cadastro há um passo em que você escolhe seu arquétipo de operação, e dali saem os espaços de trabalho e os apps iniciais. Se nenhum encaixar, escreva para a gente e a gente vê.",
      steps: [
        "Você escolhe tipo de hospedagem e modelo de venda.",
        "O cadastro monta seus espaços de trabalho.",
        "Você ajusta apps e permissões por posto.",
      ],
    },
  },

  precios: {
    meta: {
      title: "Preços",
      description:
        "Um plano por hospedagem, sem comissão por reserva e sem custo de implantação. Veja o que cada plano inclui e o que ainda não fazemos.",
    },
    hero: {
      eyebrow: "Preços",
      title: "Um plano por hospedagem, *sem comissão por reserva*.",
      lead:
        "O que reservam pelo seu motor é inteiramente seu. Não há porcentagem por reserva, não há custo de implantação e não há um módulo escondido que aparece na segunda fatura.",
      notes: ["Sem cartão para começar", "Sem fidelidade", "Sem custo de cadastro"],
    },
    matrix: {
      eyebrow: "Comparativo",
      title: "O que entra *em cada plano*.",
      lead:
        "Esta tabela sai do mesmo catálogo com que o sistema resolve a sua conta. Não é uma versão de marketing dos planos: são os planos.",
    },
    noCharge: {
      eyebrow: "O que não se cobra à parte",
      title: "As linhas que *não* vão aparecer na fatura.",
      items: [
        {
          title: "Comissão por reserva",
          desc: "Zero. O motor é seu e não ficamos com uma porcentagem do que você vender por ele.",
        },
        {
          title: "Envio de emails",
          desc: "Os emails ao hóspede saem do domínio do roombir, sem serviço de email à parte nem configuração de SMTP por hotel.",
        },
        {
          title: "Implantação",
          desc: "O cadastro é autogerido. Para as primeiras turmas acompanhamos a carga de quartos sem custo.",
        },
        {
          title: "Site e domínio",
          desc: "O construtor e o renderer estão no plano. O domínio você registra onde quiser e aponta para cá.",
        },
        {
          title: "Usuários adicionais",
          desc: "Dentro do teto do plano, você adiciona quem precisar. Não se cobra por assento.",
        },
        {
          title: "Taxa por transação",
          desc: "Não existe, porque ainda não há gateway de pagamento: a cobrança ao hóspede é no check-in.",
        },
      ],
    },
    why: {
      eyebrow: "Por que está publicado",
      title: "O preço *não se pede*: se lê.",
      lead:
        "Dos cinco maiores sistemas hoteleiros do mundo, nenhum publica um número no site: pede-se por formulário e aparece na segunda reunião. Uma hospedagem de doze unidades não tem tempo para isso.",
      items: [
        {
          title: "Mesmo catálogo que cobra",
          desc: "Os cartões e o comparativo saem do endpoint que o sistema usa para resolver a sua conta. Não existe uma versão de marketing dos planos.",
        },
        {
          title: "Sem fidelidade",
          desc: "Mensal, sem multa e sem ligação de retenção. Quem diz são os [termos](/legal/terminos), não um vendedor.",
        },
        {
          title: "O que não existe, não se cobra",
          desc: "Channel manager e pagamentos não aparecem em nenhum plano porque ainda não existem. Quando existirem, vão estar aqui, com o seu número.",
        },
      ],
    },
    compareAsk: "Está comparando com outro sistema?",
    compareLink: "Ver os comparativos, com data",
    faqTitle: "Perguntas sobre preços",
    faq: [
      {
        q: "Vocês cobram comissão por reserva?",
        a: "Não. O motor é seu e o que entra por ele é inteiramente seu. O plano é uma assinatura por hospedagem e não há porcentagem por reserva nem taxa por transação — entre outros motivos porque **também ainda não há gateway de pagamento**: a cobrança é no check-in.",
      },
      {
        q: "Há custo de implantação?",
        a: "Não. O cadastro é autogerido: nove passos guiados que você faz, com o progresso salvo no servidor. Para as primeiras turmas oferecemos acompanhamento ao vivo no passo de carga de quartos — o que mais custa — e também não se cobra.",
      },
      {
        q: "O que acontece quando termina o período grátis?",
        a: "Você escolhe um plano pago ou para de usar. Não há fidelidade nem multa. Estamos em piloto de mercado: o que buscamos desta etapa é evidência real de uso, não faturamento.",
      },
      {
        q: "Paga-se por usuário?",
        a: "Não: cada plano traz um teto de usuários e de propriedades, e dentro desse teto você adiciona quem quiser sem custo por pessoa. Os tetos estão no comparativo acima.",
      },
      {
        q: "O revenue management se paga à parte?",
        a: "Nos sistemas grandes quase sempre sim: o RMS é um módulo adicional cotado separadamente. Aqui é mais um produto do catálogo e entra ou não conforme o plano — o comparativo acima te diz linha por linha.",
      },
      {
        q: "Por que os outros sistemas não publicam preço?",
        a: "Porque o preço por quarto cai com o tamanho e para eles convém negociar caso a caso. É legítimo, mas transfere o trabalho ao hoteleiro: formulário, ligação, cotação, segunda ligação. Preferimos perder alguma negociação e deixar o número à vista. Para ver como fica frente a cada um, está nos [comparativos](/comparar).",
      },
    ],
    cta: {
      title: "Comece grátis e *depois a gente vê*.",
      lead:
        "Não pedimos cartão para o cadastro. Se em duas semanas o sistema não mudou nada para você, não há nada a cancelar.",
      steps: [
        "Você se cadastra sem cartão.",
        "Carrega a propriedade e os quartos.",
        "Escolhe o plano quando o período grátis terminar.",
      ],
    },
  },

  nosotros: {
    meta: {
      title: "Sobre nós",
      description:
        "Por que o Roombir existe, como trabalhamos e em que estado está cada parte do produto — incluindo o que ainda não faz.",
    },
    hero: {
      eyebrow: "Sobre nós",
      title: "Software para a hospedagem que *não tem área de TI*.",
      lead:
        "O Roombir nasceu de uma observação simples: um hotel de vinte quartos ou um complexo de seis chalés precisa exatamente das mesmas peças que uma rede, e nenhuma das opções do mercado as entrega juntas de um jeito que faça sentido nessa escala.",
      secondary: "Ver o produto",
    },
    thesis: {
      eyebrow: "A tese",
      title: "Uma hospedagem pequena não deveria precisar de *cinco fornecedores e um consultor*.",
      p1: "Hoje a saída típica é um PMS de um lado, um motor de outro, um site feito por alguém que já não responde, uma planilha de tarifas e as consultas caindo num WhatsApp que ninguém organiza. Cada peça funciona; o conjunto não. E o trabalho de manter o conjunto alinhado acaba sendo feito à mão pela pessoa da recepção.",
      p2: "A aposta do Roombir é que esse conjunto seja um só sistema com um só banco de dados, que dê para se cadastrar sem ajuda, e que cada posto de trabalho veja apenas o seu. Todo o resto — o RMS, a camada de agentes, o assistente — sai daí: são coisas que só dá para fazer bem quando os dados já são um só.",
    },
    principles: {
      eyebrow: "Como trabalhamos",
      title: "Quatro decisões que *não se negociam*.",
      items: [
        {
          title: "Um dado, um lugar",
          desc: "Um quarto é carregado uma vez. Se aparece no motor, no site, no RMS e no LinkHub é porque é a mesma linha, não porque há uma sincronização no meio. A maioria dos problemas de um stack hoteleiro são dois sistemas dizendo coisas diferentes sobre o mesmo quarto.",
        },
        {
          title: "O estado se diz",
          desc: "Se algo não existe, dizemos no site e não na terceira ligação. Um piloto que começa com uma expectativa inflada termina numa saída silenciosa em quatro semanas, e essa saída não nos ensina nada. Preferimos menos cadastros e saber por que ficam os que ficam.",
        },
        {
          title: "As permissões são de verdade",
          desc: "Esconder um botão não é uma permissão. Cada operação é avaliada contra a política do serviço, e o assistente de IA opera assumindo a identidade real de quem pergunta, com uma permissão de vida curta renovada a cada chamada. Não há uma conta de serviço com superpoderes por trás.",
        },
        {
          title: "A fricção do cadastro é um bug",
          desc: "Configurar um servidor de email, esperar uma call de onboarding, pagar uma implantação: cada uma dessas coisas é gente que fica de fora. O cadastro são nove passos que você faz sozinho, e os emails ao hóspede saem sem você configurar nada.",
        },
      ],
    },
    pilot: {
      eyebrow: "Onde estamos",
      title: "Em piloto de mercado, *de propósito*.",
      lead:
        "Nesta etapa não buscamos volume. Estamos tentando responder quatro perguntas com dados, e as quatro dependem de haver hospedagens usando o sistema para valer, com reservas reais dentro.",
      questions: [
        "O cadastro se completa sozinho, ou há um passo específico onde as pessoas desistem?",
        "Os hóspedes reservam pelo motor, ou o hábito volta ao chat mesmo com o link existindo?",
        "O que pede quem usa para valer, e no que isso difere do que pediu quem testou e não voltou?",
        "Para que o assistente é usado quando ninguém está olhando?",
      ],
      stats: [
        { value: "2026", label: "ano do piloto de mercado" },
        { value: "AR", label: "feito na Argentina, em cinco idiomas" },
        { value: "5", label: "idiomas da plataforma" },
        { value: "1", label: "único banco de dados para todo o sistema" },
      ],
    },
    cta: {
      title: "Se algo disso *soa como o seu problema*.",
      lead:
        "Escreva para a gente e conversamos sem rodeios. Se o Roombir ainda não serve para o seu caso, vamos te dizer nessa mesma conversa.",
      steps: [
        "Você conta como opera hoje.",
        "A gente diz o que resolve e o que não.",
        "Se fizer sentido, começamos o cadastro juntos.",
      ],
    },
  },

  contacto: {
    meta: {
      title: "Contato",
      description:
        "Escreva para a gente e conversamos sem rodeios: o que o Roombir resolve para a sua hospedagem e o que ainda não. Você também pode começar o cadastro por conta própria.",
    },
    eyebrow: "Contato",
    title: "Conte como *você recebe reservas hoje*.",
    lead:
      "Não precisa saber de que módulo você precisa. Saber quantas unidades você tem, se vende em OTAs e que parte do dia se vai respondendo disponibilidade já basta para dizermos se o Roombir te serve — ou se ainda não.",
    checks: [
      "A gente responde dentro do dia útil.",
      "Se algo de que você precisa ainda não existe, dizemos ali mesmo.",
      "Se quiser, fazemos juntos a carga de quartos numa call curta.",
    ],
    directLabel: "Ou escreva direto",
    shortcutTitle: "Prefere não esperar uma resposta?",
    shortcutText:
      "O cadastro é autogerido e guiado. Dá para ter o motor funcionando antes de a gente responder este formulário.",
  },

  legal: {
    updated: "Última atualização",
    updatedDate: "30 de agosto de 2026",
    privacy: {
      meta: {
        title: "Política de privacidade",
        description:
          "Que dados o Roombir coleta neste site e na plataforma, com que fornecedores os processa e como pedir que sejam apagados.",
      },
      title: "Política de privacidade",
      lead: "Que dados coletamos, para quê, com quem os processamos e como pedir que sejam apagados.",
      blocks: [
        { h: "1. Quem somos" },
        {
          p: "O Roombir é uma plataforma de gestão para hospedagens operada a partir da Argentina. Para qualquer questão relacionada aos seus dados pessoais, escreva para [hola@roombir.com](mailto:hola@roombir.com).",
        },
        { h: "2. Dois papéis diferentes" },
        { p: "Vale separá-los porque as obrigações não são as mesmas:" },
        {
          ul: [
            "**Este site e a relação comercial com você.** Aqui somos os controladores dos dados: coletamos para falar com você e para entender de onde chegam as consultas.",
            "**A plataforma.** Quando uma hospedagem carrega os dados dos seus hóspedes no roombir, o controlador desses dados é a hospedagem; nós os processamos por conta dela e conforme suas instruções.",
          ],
        },
        { h: "3. Que dados coletamos neste site" },
        {
          ul: [
            "**Os que você dá no formulário:** nome, email, telefone, nome da hospedagem e a mensagem que escrever. O único obrigatório é o email.",
            "**Parâmetros de campanha (UTM)** presentes na URL no momento do envio, para sabermos por qual via você chegou.",
            "**Dados técnicos da visita** registrados pelo servidor que serve o site, como qualquer servidor web.",
            "**Métricas de navegação**, só se tivermos ferramentas de medição configuradas. Ver a [política de cookies](/legal/cookies).",
          ],
        },
        {
          p: "Não usamos os dados do formulário para nada além de falar com você sobre o roombir, e não os vendemos nem os cedemos a terceiros para fins publicitários.",
        },
        { h: "4. Que dados a plataforma coleta" },
        {
          p: "Se você se cadastrar, coletamos também o necessário para o sistema funcionar: os dados da sua conta e da sua empresa, os das suas propriedades e unidades, e os das reservas que você carregar ou que entrarem pelo seu motor — incluindo os dados do hóspede necessários para a estadia. Tudo isso pertence a você.",
        },
        { h: "5. Com quem os processamos" },
        { p: "Trabalhamos com fornecedores que atuam por nossa conta e só para prestar o serviço:" },
        {
          ul: [
            "**Envio de email transacional**, para as confirmações e avisos que saem ao hóspede.",
            "**Armazenamento de imagens e arquivos** das galerias, da marca e da biblioteca da empresa.",
            "**Autenticação**, incluindo a opção de entrar com uma conta social se a hospedagem habilitar.",
            "**Infraestrutura e banco de dados** onde a plataforma roda.",
            "**Medição e publicidade**, quando aplicável e conforme a política de cookies.",
          ],
        },
        { h: "6. Por quanto tempo guardamos" },
        {
          p: "Os dados de contato comercial ficam enquanto houver relação ou interesse vigente, e são apagados quando você pedir. Os dados operacionais de uma conta ficam enquanto a conta existir e pelo prazo que as obrigações legais e contábeis aplicáveis exigirem.",
        },
        { h: "7. Seus direitos" },
        {
          p: "Você pode nos pedir acesso aos seus dados, correção, atualização ou exclusão escrevendo para [hola@roombir.com](mailto:hola@roombir.com). Na Argentina, a Agência de Acesso à Informação Pública é a autoridade de controle em proteção de dados pessoais e atende reclamações de quem considerar seus direitos violados.",
        },
        { h: "8. Segurança" },
        {
          p: "O acesso à plataforma é protegido por autenticação e por um sistema de permissões com papéis, capacidades e alcance por propriedade. As operações sensíveis ficam registradas em logs de auditoria. Nenhum sistema é infalível; se detectássemos um incidente afetando seus dados, avisaríamos você.",
        },
        { h: "9. Mudanças" },
        {
          p: "Se atualizarmos esta política, mudamos a data do cabeçalho. As mudanças relevantes também são comunicadas por email às contas ativas.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Termos e condições",
        description:
          "Condições de uso da plataforma roombir: o que o serviço inclui, o que está em piloto, responsabilidades de cada parte e como encerrar uma conta.",
      },
      title: "Termos e condições",
      lead: "As regras de uso da plataforma, escritas para serem entendidas.",
      blocks: [
        { h: "1. O que é o serviço" },
        {
          p: "O Roombir é uma plataforma na nuvem para gerenciar uma hospedagem: reservas, quartos, motor de reservas público, sites, revenue management, portal do hóspede e um assistente de inteligência artificial. Acessa-se pelo navegador; não se entrega software para instalar.",
        },
        { h: "2. Escopo do serviço" },
        {
          p: "A plataforma está em **piloto de mercado**: pode haver funcionalidades parciais ou que ainda não existam. O escopo vigente é detalhado por escrito na contratação e faz parte do que você aceita: não prometemos funcionalidades que não existam.",
        },
        { h: "3. Sua conta" },
        {
          p: "Você é responsável pelas credenciais da sua conta e pelas das pessoas que cadastrar. O sistema cria usuários com senha temporária que a pessoa deve trocar no primeiro acesso; até fazer isso, a interface fica bloqueada para ela.",
        },
        {
          p: "Você pode atribuir papéis, capacidades administrativas e alcance por propriedade. A configuração dessas permissões é sua: nós fornecemos o mecanismo, não decidimos quem vê o quê na sua operação.",
        },
        { h: "4. Seus dados" },
        {
          p: "Os dados que você carregar — propriedades, unidades, tarifas, reservas, hóspedes, conteúdo dos seus sites — são seus. Nós os processamos para prestar o serviço, conforme a [política de privacidade](/legal/privacidad). Se for você quem carrega dados de hóspedes, você é o controlador desses dados perante eles e perante a lei aplicável.",
        },
        { h: "5. Condições comerciais" },
        {
          p: "Os produtos incluídos e os tetos de propriedades e de usuários de cada conta são comunicados por escrito no momento da contratação e fazem parte do acordo.",
        },
        {
          p: "A cobrança ao hóspede não passa pelo roombir: hoje acontece no check-in, entre a hospedagem e o hóspede.",
        },
        { h: "6. Uso aceitável" },
        { p: "Não se pode usar a plataforma para:" },
        {
          ul: [
            "Publicar conteúdo ilegal, enganoso ou que você não tenha direito de usar.",
            "Carregar avaliações falsas ou atribuir à sua hospedagem sinais de confiança que não sejam verdadeiros.",
            "Tentar acessar dados de outra empresa, ou burlar os controles de permissão do sistema.",
            "Carregar de forma automatizada fora das interfaces previstas, a ponto de degradar o serviço para outros.",
          ],
        },
        { h: "7. Disponibilidade" },
        {
          p: "Fazemos o razoável para que o serviço esteja disponível, mas nesta etapa não oferecemos acordo de nível de serviço com compensação. As manutenções que possam interromper o serviço são avisadas quando previsíveis.",
        },
        { h: "8. O assistente de IA" },
        {
          p: "O assistente executa operações com as permissões reais de quem o usa e deixa registro do que fez. Ainda assim, é um sistema probabilístico: **revise o que ele executa** antes de dar por feita uma operação sensível, como você revisaria o trabalho de alguém que acabou de entrar. As sugestões de tarifa do módulo de revenue são isso, sugestões: a decisão de aplicá-las é sua.",
        },
        { h: "9. Propriedade intelectual" },
        {
          p: "O software, a marca e a documentação do Roombir são nossos. O conteúdo que você carregar — textos, fotos, logo, design do seu site — é seu, e você nos autoriza a hospedá-lo e exibi-lo unicamente para prestar o serviço.",
        },
        { h: "10. Encerramento" },
        {
          p: "Você pode encerrar sua conta quando quiser escrevendo para [hola@roombir.com](mailto:hola@roombir.com). Antes de fechá-la damos um prazo razoável para você baixar o que precisar guardar.",
        },
        { h: "11. Responsabilidade" },
        {
          p: "O serviço é prestado como está. Na medida em que a lei permitir, nossa responsabilidade se limita aos valores que você nos tiver pago nos doze meses anteriores ao fato que a originar. Nada disso limita responsabilidades que por lei não possam ser limitadas.",
        },
        { h: "12. Mudanças e foro" },
        {
          p: "Podemos atualizar estes termos; as mudanças relevantes são avisadas por email às contas ativas e a data do cabeçalho é atualizada. Aplicam-se as leis da República Argentina e seus tribunais competentes.",
        },
      ],
    },
    cookies: {
      meta: {
        title: "Política de cookies",
        description:
          "Que cookies e tecnologias de medição o site do Roombir usa, quais são necessários e como desativar o resto.",
      },
      title: "Política de cookies",
      lead: "O que este site guarda no seu navegador e o que você pode desativar.",
      blocks: [
        { h: "1. O site público" },
        {
          p: "As páginas de `roombir.com` são estáticas e não precisam de cookies para funcionar. Não usamos cookies próprios para traçar seu perfil nem para lembrar quem você é entre visitas. O único que pode aparecer é o que guarda o **idioma que você escolheu** no seletor, para não te devolver a outro na próxima visita.",
        },
        { h: "2. Medição e publicidade" },
        {
          p: "O site pode montar ferramentas de medição de terceiros — analítica de navegação, medição de conversões de campanhas e pixels de plataformas de publicidade — quando estiverem configuradas. Essas ferramentas podem sim deixar cookies ou identificadores no seu navegador para contar visitas e atribuir conversões.",
        },
        {
          p: "**Só carregam no site publicado, nunca nas prévias internas.** É uma decisão técnica deliberada: enquanto alguém edita uma página pelo painel, essas visitas sujariam as métricas.",
        },
        {
          p: "Também podemos enviar eventos de conversão do nosso servidor para a plataforma de publicidade correspondente. Esse envio não usa cookies e não inclui o conteúdo da sua mensagem.",
        },
        { h: "3. A plataforma" },
        {
          p: "O aplicativo em `app.roombir.com` usa sim cookies **necessários**: são os que mantêm a sua sessão. Sem eles não dá para usar o sistema, e não dá para desativá-los sem encerrar a sessão.",
        },
        {
          p: "A plataforma também guarda algumas preferências no armazenamento local do seu navegador — o tema visual, o estado da barra lateral, o progresso dos tours guiados. Isso fica no seu equipamento e não vai a lugar nenhum.",
        },
        { h: "4. Como desativá-los" },
        {
          p: "Você pode bloquear ou apagar cookies pelas configurações do navegador, e usar as opções de exclusão que as próprias plataformas de analítica e publicidade oferecem. Se bloquear todos os cookies, o site público continua funcionando igual; o aplicativo, não — porque não vai conseguir manter a sua sessão.",
        },
        { h: "5. Dúvidas" },
        {
          p: "Qualquer dúvida sobre isso, escreva para [hola@roombir.com](mailto:hola@roombir.com). Ver também a [política de privacidade](/legal/privacidad).",
        },
      ],
    },
  },

  comparar: {
    meta: {
      title: "Comparativos",
      description:
        "Roombir frente a Cloudbeds, Little Hotelier, Amenitiz e Mews: preço publicado, fidelidade, comissão, revenue, channel manager, pagamentos e IA. Verificado contra os sites deles, com data, e com em que caso o outro é a escolha certa.",
    },
    hero: {
      eyebrow: "Comparativos",
      title: "Comparado *com nome e sobrenome*.",
      lead:
        "Quatro comparativos escritos com uma regra: só o que diz o site público de cada um, lido em uma data concreta e citado tal como está. Sem estimativas de terceiros nem capturas velhas. Cada um diz em que caso o outro é a escolha certa, porque um comparativo que sempre ganha não serve a ninguém.",
      notes: ["Só o site público deles", "Com data de verificação", "Com “quando escolher o outro”"],
    },
    vsPrefix: "Roombir vs",
    read: "Ler o comparativo",
    verified: "Verificado em {date} contra o site público de {name}",
    verifiedDate: "2 de setembro de 2026",
    chooseThem: "Escolha {name} se…",
    chooseUs: "Escolha Roombir se…",
    table: {
      eyebrow: "Critério por critério",
      title: "Roombir e {name}, *na mesma tabela*.",
      lead:
        "As linhas da Roombir saem do estado do produto que publicamos em Sobre nós, incluindo as que dizem “ainda não existe”. As do outro, do site público dele na data indicada. Se algo mudou, avise e corrigimos com a data nova.",
      headCriterion: "Critério",
      headUs: "roombir",
    },
    legend: {
      ok: "Sim, incluído ou declarado",
      mid: "Parcial, add-on ou com condições",
      no: "Não, ou não declara",
      info: "Dado sem julgamento",
    },
    sourcesNote:
      "Dados de {name} tomados do seu site público em {date}. Os da roombir, do [estado do produto](/nosotros#estado) da mesma data. Se encontrar algo desatualizado, escreva para hola@roombir.com. Fonte:",
    method: {
      eyebrow: "Como comparamos",
      title: "Só o que o site deles diz, *com data*.",
      lead:
        "É a única forma de um comparativo escrito por uma das partes servir para alguma coisa. Três regras, que valem também para a nossa coluna.",
      items: [
        "**Fonte única:** o site público de cada concorrente, lido em 2 de setembro de 2026. Se um dado não está no site deles, a célula diz “não declara”; não inventamos.",
        "**Sem preços de terceiros:** os números que circulam em diretórios de software são estimativas. Se o concorrente não publica preço, a linha diz exatamente isso.",
        "**Nossas linhas saem do estado do produto:** as mesmas que dizem que não temos channel manager nem pagamentos. Se melhorarmos, muda lá e muda aqui no mesmo commit.",
      ],
    },
    cta: {
      title: "Se depois de ler *você continua aqui*.",
      lead:
        "O cadastro é gratuito, guiado e não pede cartão. E se o comparativo deixou claro que você precisa do que ainda não temos, também serviu.",
      steps: [
        "Você se cadastra e carrega uma propriedade.",
        "Testa o motor e o assistente com os seus dados.",
        "Escolhe plano só se algo mudou para você.",
      ],
    },
    criteria: {
      price: { label: "Preço publicado no site", us: "Sim: em HTML, com número, do mesmo catálogo que cobra a conta", tone: "ok" },
      trial: { label: "Testar sem cartão", us: "Sim: plano grátis e cadastro por conta própria, sem ligação prévia", tone: "ok" },
      lockin: { label: "Fidelidade", us: "Sem fidelidade: plano mensal, cancelamento sem multa", tone: "ok" },
      commission: { label: "Comissão sobre o motor de reservas", us: "0%. O que entra pelo seu motor é inteiramente seu", tone: "ok" },
      rms: { label: "Revenue management", us: "Incluído no catálogo de produtos, conforme o plano; não é um módulo à parte", tone: "ok" },
      channel: { label: "Channel manager (OTAs)", us: "Ainda não existe. Só um registro de eventos para quando conectar", tone: "no" },
      payments: { label: "Cobrança online do hóspede", us: "Ainda não existe: a cobrança é no check-in", tone: "no" },
      ai: { label: "Assistente de IA", us: "Executa com as suas permissões, transcrição do turno visível", tone: "ok" },
      fx: { label: "Multimoeda", us: "10 moedas; conversão congelada no check-in; blue, MEP, CCL ou oficial para ARS", tone: "ok" },
      dual: { label: "Modelo de venda pool e unidade 1:1", us: "Sim, escolhido por categoria, convivendo no mesmo calendário", tone: "ok" },
      website: { label: "Site com domínio próprio", us: "Incluído: builder, multi-idioma, LinkHub com QR", tone: "ok" },
      fiscal: { label: "Faturamento fiscal local", us: "Ainda não", tone: "no" },
      languages: { label: "Idiomas da plataforma", us: "5: espanhol, inglês, português, francês, alemão", tone: "info" },
      segment: { label: "Segmento típico", us: "Independentes e boutique da América Latina: hotéis, chalés, hostels, glamping", tone: "info" },
      support: { label: "Cadastro e suporte", us: "Cadastro guiado em 9 passos, 38 tours, carga de quartos acompanhada sem custo", tone: "info" },
      llms: { label: "O próprio site, legível por IA (llms.txt)", us: "Sim: curado, com os mesmos números e preços do site", tone: "ok" },
    },
    rivals: {
      cloudbeds: {
        name: "Cloudbeds",
        site: "cloudbeds.com",
        oneLiner: "O all-in-one global: 20.000+ propriedades, channel manager com 450+ canais, preço sob cotação.",
        meta: {
          title: "Roombir vs Cloudbeds",
          description:
            "Cloudbeds e Roombir comparados critério por critério: preço publicado, fidelidade, comissão, revenue, channel manager, pagamentos e IA. Verificado contra cloudbeds.com em 2 de setembro de 2026.",
        },
        hero: {
          title: "Roombir vs *Cloudbeds*",
          lead:
            "O Cloudbeds é o sistema mais completo do segmento independente em escala global: channel manager, pagamentos, marketing e uma camada de IA analítica, em mais de 150 países. A Roombir é menor, mais nova e feita para a América Latina, com duas coisas que o Cloudbeds não publica — o preço e a fidelidade — e duas que o Cloudbeds tem e nós ainda não: channel manager e gateway de pagamento.",
        },
        them: [
          "Você vende forte em OTAs e precisa de um channel manager hoje, não quando lançarmos.",
          "Você quer cobrar online com cartão a partir do motor.",
          "Você opera várias propriedades em vários países e precisa de um marketplace com 450 integrações.",
        ],
        us: [
          "Você quer saber quanto custa antes de falar com um vendedor, e não assinar fidelidade.",
          "Seu problema é a venda direta: as consultas se perdem no chat e não há site nem motor próprio.",
          "Você vende em pesos com câmbio instável, ou mistura chalés com quartos e nenhum sistema deixa.",
        ],
        rows: {
          price: { v: "Não: quatro planos e os quatro terminam em “Request a quote”", tone: "no" },
          trial: { v: "Não: a entrada é “Get a demo”", tone: "no" },
          lockin: { v: "Não declara na página de preços", tone: "mid" },
          commission: { v: "0% no motor e no channel manager (declarado); comissão de metasearch após a estadia", tone: "ok" },
          rms: { v: "Add-on: Revenue Intelligence, dentro de Revenue Marketing", tone: "mid" },
          channel: { v: "Sim, 450+ canais", tone: "ok" },
          payments: { v: "Sim, Cloudbeds Payments", tone: "ok" },
          ai: { v: "Signals e Ask Signals: IA conversacional para consultar dados", tone: "mid" },
          fx: { v: "Não declara", tone: "mid" },
          dual: { v: "Hotéis e aluguéis como segmentos; sem modo misto declarado", tone: "mid" },
          website: { v: "Add-on: Websites, dentro de Revenue Marketing", tone: "mid" },
          fiscal: { v: "Não declara", tone: "mid" },
          languages: { v: "Site em 4: inglês, espanhol, português, francês", tone: "info" },
          segment: { v: "Independentes e grupos, 150+ países, 20.000+ propriedades", tone: "info" },
          support: { v: "Onboarding, Customer Success e Cloudbeds University", tone: "info" },
          llms: { v: "Sem llms.txt (404 ao verificar)", tone: "no" },
        },
        faq: [
          {
            q: "O Cloudbeds é melhor que a roombir?",
            a: "Em cobertura, sim: tem channel manager, pagamentos e 450 integrações que nós não temos. Em transparência e foco, achamos que não: o preço se pede por formulário, e o revenue e o site são módulos à parte. Se o seu problema hoje é a distribuição em OTAs, Cloudbeds. Se é a reserva direta e saber quanto vai pagar, roombir.",
          },
          {
            q: "Quanto custa o Cloudbeds?",
            a: "Não publica. A página de preços tem quatro planos — Flex, One, Experience e Enterprise — e os quatro terminam em “Request a quote”. Os números que circulam na internet são estimativas de terceiros, não do Cloudbeds, e por isso não os repetimos aqui.",
          },
          {
            q: "Posso migrar do Cloudbeds para a roombir?",
            a: "Sim, e acompanhamos a carga de quartos e tarifas sem custo. O que convém saber antes: se você depende do channel manager deles, na Roombir essa sincronização com OTAs hoje é feita à mão. Está no [estado do produto](/nosotros#estado).",
          },
        ],
      },
      littlehotelier: {
        name: "Little Hotelier",
        site: "littlehotelier.com",
        oneLiner: "A marca do SiteMinder para 1–30 quartos: 30 dias de teste, calculadora de preço e add-ons que cobram por reserva.",
        meta: {
          title: "Roombir vs Little Hotelier",
          description:
            "Little Hotelier e Roombir comparados: preço, teste grátis, taxa por reserva, revenue, channel manager, pagamentos e IA. Verificado contra littlehotelier.com em 2 de setembro de 2026; comissões revisadas em 22 de setembro.",
        },
        hero: {
          title: "Roombir vs *Little Hotelier*",
          lead:
            "O Little Hotelier é o sistema pequeno do SiteMinder, o maior distribuidor hoteleiro do mundo, e o mais parecido com a Roombir em tamanho de cliente: propriedades de 1 a 30 quartos. Publica uma calculadora de preço, dá 30 dias de teste e tem channel manager e pagamentos. O motor direto dele não declara comissão: as tarifas variáveis por reserva estão nos add-ons de metasearch e de canais, e o revenue e o site também entram como add-ons.",
        },
        them: [
          "Você precisa de channel manager e pagamentos hoje: os dois existem e funcionam em escala global.",
          "Você quer o respaldo da rede de distribuição do SiteMinder: 450+ canais, GDS, metasearch.",
          "Você opera em inglês, alemão, italiano, tailandês ou indonésio: é onde ele localiza.",
        ],
        us: [
          "Você quer o preço completo numa linha, sem add-ons que cobram por reserva.",
          "Você quer o revenue e o site dentro do plano, não como add-ons.",
          "Você vende chalés com nome próprio junto com quartos, ou cobra em pesos e precisa congelar o câmbio.",
        ],
        rows: {
          price: { v: "Sim: calculadora por quantidade de quartos (o número é carregado por JavaScript)", tone: "ok" },
          trial: { v: "Sim: 30 dias grátis", tone: "ok" },
          lockin: { v: "Não declara na página de preços", tone: "mid" },
          commission: { v: "O motor direto não declara comissão; Metasearch e Channels Plus cobram uma tarifa variável por reserva, e os pagamentos, por transação", tone: "mid" },
          rms: { v: "Add-on: Dynamic Revenue Plus", tone: "mid" },
          channel: { v: "Sim", tone: "ok" },
          payments: { v: "Sim, Little Hotelier Payments, com taxas por transação", tone: "ok" },
          ai: { v: "Não declara um assistente que opere o sistema", tone: "no" },
          fx: { v: "Não declara", tone: "mid" },
          dual: { v: "Hotéis, B&B, chalés e mais como tipos; sem modo misto declarado", tone: "mid" },
          website: { v: "Add-on: Website Builder", tone: "mid" },
          fiscal: { v: "Não declara", tone: "mid" },
          languages: { v: "Site em 6: inglês, alemão, espanhol, italiano, tailandês, indonésio", tone: "info" },
          segment: { v: "Propriedades de 1 a 30 quartos, global", tone: "info" },
          support: { v: "Suporte 24/7 por chat, e-mail e telefone; especialista de onboarding", tone: "info" },
          llms: { v: "Sim, gerado automaticamente: uma lista de páginas", tone: "mid" },
        },
        faq: [
          {
            q: "O Little Hotelier cobra comissão?",
            a: "Sobre o motor direto dele, a página de preços não declara comissão. As **tarifas de reserva variáveis** —calculadas sobre o total de reservas líquidas de cancelamentos— se aplicam aos add-ons de metasearch e de canais, e os pagamentos cobram por transação (littlehotelier.com/pricing, 22 de setembro de 2026). A Roombir não cobra porcentagem sobre nenhuma reserva.",
          },
          {
            q: "Qual é mais barato?",
            a: "Depende do que você precisa. O Little Hotelier calcula o preço pela quantidade de quartos e soma o revenue e o site como add-ons; a Roombir traz isso no catálogo, com uma mensalidade fixa por hospedagem. A calculadora deles e [nossos planos](/precios) estão publicados: faça a conta com os seus números.",
          },
          {
            q: "O Little Hotelier tem channel manager e a Roombir não?",
            a: "Correto, e é a diferença mais importante se hoje você vende no Booking ou na Expedia. Está no nosso [estado do produto](/nosotros#estado) e não vamos dizer o contrário.",
          },
        ],
      },
      amenitiz: {
        name: "Amenitiz",
        site: "amenitiz.com",
        oneLiner: "All-in-one europeu para independentes de 3–30 quartos, com site incluído. Contrato anual e preço sob cotação.",
        meta: {
          title: "Roombir vs Amenitiz",
          description:
            "Amenitiz e Roombir comparados: preço, fidelidade, comissão, revenue, channel manager, pagamentos, faturamento fiscal e IA. Verificado contra amenitiz.com em 2 de setembro de 2026.",
        },
        hero: {
          title: "Roombir vs *Amenitiz*",
          lead:
            "O Amenitiz é o sistema mais parecido com a Roombir em ideia: tudo em um só lugar, com site incluído, para hospedagens independentes de 3 a 30 quartos. É europeu — Espanha, França, Itália, Portugal — e traz duas coisas que nós não: channel manager e pagamentos, mais certificações fiscais desses quatro países. Pede contrato de um ano e o preço se confirma em uma ligação.",
        },
        them: [
          "Você está na Espanha, França, Itália ou Portugal e precisa de faturamento fiscal certificado: VeriFactu, NF525, FatturaPA, SEF.",
          "Você precisa de channel manager e cobrança com cartão desde o primeiro dia.",
          "Você prefere que uma equipe construa o seu site em vez de montá-lo você mesmo.",
        ],
        us: [
          "Você não quer assinar um ano antes de saber se serve.",
          "Você quer o preço no site e não “confirmado na demo”.",
          "Você está na América Latina, vende em pesos ou reais, e precisa de multimoeda com câmbio congelado e um assistente que executa.",
        ],
        rows: {
          price: { v: "Não na página de preços (“preço sob consulta”); o llms.txt deles menciona a partir de €5 por quarto ao mês", tone: "mid" },
          trial: { v: "Não: a entrada é “Book a demo”", tone: "no" },
          lockin: { v: "Contrato de 1 ano (segundo o próprio llms.txt)", tone: "no" },
          commission: { v: "0% em reservas diretas (declarado)", tone: "ok" },
          rms: { v: "Add-on: PriceAdvisor", tone: "mid" },
          channel: { v: "Sim, 150+ OTAs", tone: "ok" },
          payments: { v: "Sim, AmenitizPay: 1,5% + €0,25 por transação (segundo o site)", tone: "ok" },
          ai: { v: "PriceAdvisor para preços; sem assistente que opere o sistema declarado", tone: "mid" },
          fx: { v: "Não declara", tone: "mid" },
          dual: { v: "Hotéis e B&B; sem modo misto declarado", tone: "mid" },
          website: { v: "Sim, incluído e construído pela equipe deles", tone: "ok" },
          fiscal: { v: "Sim: NF525 (França), VeriFactu (Espanha), FatturaPA (Itália), SEF (Portugal)", tone: "ok" },
          languages: { v: "Site em 5: inglês, francês, espanhol, italiano, português", tone: "info" },
          segment: { v: "Independentes de 3 a 30 quartos na Espanha, França, Itália e Portugal", tone: "info" },
          support: { v: "Suporte nativo em 5 idiomas, migração grátis, “operando em 30 dias ou o primeiro mês é grátis”", tone: "info" },
          llms: { v: "Sim, curado: com preço e comparativos contra concorrentes", tone: "ok" },
        },
        faq: [
          {
            q: "O Amenitiz tem fidelidade?",
            a: "Segundo o próprio arquivo llms.txt deles, o contrato é de **um ano** e o preço final se confirma na demo. A Roombir é mensal e sem fidelidade, e o preço está no site.",
          },
          {
            q: "O Amenitiz serve no Brasil ou na Argentina?",
            a: "O site e o llms.txt deles descrevem um produto para Espanha, França, Itália e Portugal, com certificações fiscais desses países. Não encontramos preços, moedas nem conformidade para a América Latina. A Roombir nasceu aqui: pesos, reais, cotação blue, MEP ou CCL, e horários deste lado.",
          },
          {
            q: "O que o Amenitiz faz melhor?",
            a: "Três coisas que não vamos minimizar: channel manager com 150+ OTAs, pagamentos integrados e faturamento fiscal certificado nos seus quatro países. E uma promessa de implementação — “em 30 dias ou o primeiro mês é grátis” — que nos parece um bom padrão.",
          },
        ],
      },
      mews: {
        name: "Mews",
        site: "mews.com",
        oneLiner: "O PMS mid-market e enterprise mais bem avaliado do mundo. API aberta só no Enterprise, preço sob cotação.",
        meta: {
          title: "Roombir vs Mews",
          description:
            "Mews e Roombir comparados: preço, teste, fidelidade, revenue, API aberta, pagamentos e IA. Verificado contra mews.com em 2 de setembro de 2026.",
        },
        hero: {
          title: "Roombir vs *Mews*",
          lead:
            "O Mews é o PMS moderno de referência para hotéis urbanos, redes e hostels, com pagamentos embutidos, POS e um marketplace de 1.000 integrações. É outro tamanho de cliente e outro preço. A comparação importa por uma razão: a página de preços coloca a API aberta e o marketplace completo no plano Enterprise, enquanto o plano de entrada traz oito integrações e suporte por chatbot.",
        },
        them: [
          "Você é uma rede, um hotel urbano grande ou um grupo com equipe de finanças e de TI.",
          "Você precisa de POS, pagamentos embutidos e contabilidade integrados em escala.",
          "Você vai usar o marketplace de 1.000 integrações e pode pagar o plano que o habilita.",
        ],
        us: [
          "Você tem entre 1 e 50 unidades e não há ninguém de TI.",
          "Você quer saber o preço antes da demo e não assinar fidelidade.",
          "Você quer que a camada aberta —llms.txt, disponibilidade legível— venha com o motor de reservas e não só no plano mais caro.",
        ],
        rows: {
          price: { v: "Não: três planos com “Get Pricing”", tone: "no" },
          trial: { v: "Não: a entrada é “Book a demo”", tone: "no" },
          lockin: { v: "Não declara na página de preços", tone: "mid" },
          commission: { v: "Não declara comissão sobre o motor", tone: "ok" },
          rms: { v: "Produto à parte (Mews RMS); não consta nos três planos publicados", tone: "mid" },
          channel: { v: "Via Marketplace: 8 integrações no Essentials (com Booking.com e Expedia); ilimitado só no Enterprise", tone: "mid" },
          payments: { v: "Sim, pagamentos embutidos a partir do Essentials", tone: "ok" },
          ai: { v: "Resumos de IA das preferências do hóspede (Advanced); sem assistente que opere declarado", tone: "mid" },
          fx: { v: "Multicurrency como funcionalidade; sem congelamento declarado", tone: "mid" },
          dual: { v: "Hotéis, hostels, extended stay; sem modo misto declarado", tone: "mid" },
          website: { v: "Não: motor de reservas sim, site não", tone: "no" },
          fiscal: { v: "Não declara", tone: "mid" },
          languages: { v: "Site em 7: inglês (US e GB), francês, alemão, espanhol, neerlandês, italiano", tone: "info" },
          segment: { v: "Hotéis, grupos e redes, hostels; 15.000 propriedades em 85 países", tone: "info" },
          support: { v: "Chatbot 24/7 no Essentials; Mews University; comunidade pública", tone: "info" },
          llms: { v: "Sem llms.txt (404 ao verificar)", tone: "no" },
        },
        faq: [
          {
            q: "Por que comparar a Roombir com o Mews se são tamanhos diferentes?",
            a: "Porque quando um hoteleiro busca “o melhor PMS”, o Mews aparece primeiro, e convém saber o que se leva: um sistema excelente para hotéis com equipe, cujo plano de entrada traz oito integrações e cuja API aberta vive no Enterprise. Se o seu hotel tem doze quartos, essa não é a sua faixa.",
          },
          {
            q: "O Mews é mais completo que a roombir?",
            a: "Sim, em pagamentos, POS, contabilidade e integrações. A Roombir não tem pagamentos nem channel manager. O que temos é o que o Mews reserva para o plano mais caro, e aqui vem com o motor de reservas: a camada aberta —llms.txt, disponibilidade legível—. E um assistente que executa, conforme o plano.",
          },
          {
            q: "Quanto custa o Mews?",
            a: "Não publica: Essentials, Advanced e Enterprise, os três com “Get Pricing”. Os valores que circulam são estimativas de terceiros e não os repetimos.",
          },
        ],
      },
    },
  },

  video: {
    meta: {
      title: "Vídeo",
      description: "Roombir em um minuto: cinco fornecedores que viram um só, e um hotel inteiro que se pede numa conversa.",
    },
    hookLead: "Seu hotel",
    hook: [
      "O caos operacional",
      "está te matando.",
    ],
    sprawlIn: [
      "Reservas",
      "Pedidos de hóspedes",
      "Fornecedores",
      "Quebras / consertos",
    ],
    sprawlAsk: [
      "É *urgente*?",
      "*COMO* a gente resolve?",
      "*QUEM* assume?",
      "Temos toda a *info do hóspede*?",
    ],
    sprawlChain: [
      "Confirmar qualquer coisa leva *HORAS*",
      "As decisões se *PERDEM*",
      "*VOCÊ NÃO VAI VER* a tempo de destravar",
      "O *OVERBOOKING* acontece e gera reclamações",
      "*8 HORAS* perdidas e você nem sabe se adiantou",
    ],
    sprawlFoot: [
      "O contexto se *PERDE*",
      "Avaliações e reclamações ficam *ESPALHADAS*",
    ],
    sprawlApps: "*PAGANDO VÁRIOS APPS* que você nem usa 100%",
    tooManyApps: "Apps demais…",
    tooManyVendors: "Fornecedores demais…",
    vendors: [
      "PMS",
      "Channel manager",
      "Motor de reservas",
      "RMS",
      "Site",
    ],
    contextLost: "O contexto se perde.",
    noStaff: [
      "Você não tem um revenue manager.",
      "Você não tem um community manager.",
    ],
    youAre: "Você tem *você*.",
    mazeChips: [
      "Quem confirmou o 203?",
      "Quanto cobramos sábado?",
      "O sinal chegou?",
      "Quem tem o Excel?",
      "O 104 está limpo?",
      "O que o hóspede disse?",
    ],
    kills: {
      pre: [
        "Ferramentas soltas matam",
        "Informação dispersa mata",
      ],
      words: [
        "*o tempo*.",
        "*a receita*.",
      ],
    },
    punchline: {
      pre: "Chega de ",
      struck: "planilhas soltas",
      post: ".",
    },
    meet: "Conheça",
    promise: [
      "Sua hospedagem",
      "*inteira*",
      "em um só *sistema*.",
    ],
    builtTo: {
      lead: "Feito para",
      pre: "eliminar o ",
      struck: "caos operacional",
      post: ".",
    },
    modules: {
      reservas: "Reservas",
      linkhub: "LinkHub",
      revenue: "Revenue",
      tourism: "Estado turístico",
      ia: "Roombir IA",
      staypass: "StayPass",
      rooms: "Quartos",
      reports: "Relatórios",
    },
    moreModules: [
      "Tarifas",
      "Governança",
      "Sites",
      "Hóspedes",
      "Agentes",
      "Espaços",
      "Concorrência",
    ],
    brand: "Um só *sistema*.",
    shotHead: [
      "Reservas, tarifas e hóspedes",
      "em uma só tela.",
    ],
    designed: [
      "Desenhado com",
      "*precisão milimétrica*.",
    ],
    hinge: {
      line: "Por que não só pedir?",
    },
    unlock: {
      lead: "Uma conversa desbloqueia",
      head: "Mais",
      words: [
        "ocupação",
        "visibilidade",
        "tarifa",
        "contexto",
        "desempenho",
      ],
      experience: "eficiência",
    },
    era: {
      lead: "Uma nova era de",
      words: [
        "reservas",
        "receita",
        "estratégia",
        "IA",
      ],
    },
    outro: "Roombir. Seu hotel, numa *conversa*.",
    end: {
      tagline: "Projetado para a sua propriedade",
      cta: "Comece hoje em roombir.com",
    },
    booking: {
      tag: "hoje",
      guest: "Martina García",
      detail: "19 → 22 mar · 3 noites · Duplo Superior",
      amount: "$ 288.000",
    },
    linkhub: {
      tag: "reservar",
      tap: "Reservar online",
      title: "Reservar",
      checkin: "Chegada",
      checkout: "Saída",
      inDate: "sáb 21 mar",
      outDate: "seg 23 mar",
      guests: "2 hóspedes",
      search: "Buscar",
      nights: "2 noites",
      room: "Duplo Superior",
      price: "$ 96.600 / noite",
      book: "Reservar",
    },
    iaCard: {
      ask: "Passa o García para o 203 e avisa por e-mail",
      steps: [
        {
          label: "Reserva movida",
          tool: "mover reserva",
        },
        {
          label: "E-mail enviado",
          tool: "enviar e-mail",
        },
      ],
      answer: "Pronto. García fica no 203 e já recebeu o aviso.",
      hello: "Em que posso ajudar?",
      hint: "Operações, disponibilidade, tarifas e políticas.",
      placeholder: "Peça algo…",
      chips: ["Disponibilidade", "Tarifa do sábado", "Pagamentos pendentes", "Cancelamentos"],
    },
    rooms: {
      tag: "andar 2",
      floor: "Andar 2",
      superior: "Duplo Superior",
      double: "Duplo",
      short: {
        available: "Livre",
        occupied: "In",
        cleaning: "Limp.",
        maintenance: "Manut.",
        blocked: "Bloq.",
        checkoutPending: "C/O",
      },
      legend: {
        available: "Disponível",
        occupied: "Ocupado",
        cleaning: "Limpeza",
      },
    },
    stay: {
      tag: "hospedada",
      greeting: "Olá, Martina",
      sub: "Sua estadia no Hotel del Parque",
      badge: "Hospedada",
      codeLabel: "Código para trâmites",
      copy: "Copiar",
      stayLabel: "Hospedagem e estadia",
      hotel: "Hotel del Parque · 103 Duplo Superior",
      dates: "19 → 22 de março · 3 noites",
    },
    status: {
      pending: "Pendente",
      confirmed: "Confirmada",
      checkedIn: "Hospedada",
      checkedOut: "Check-out",
      cancelled: "Cancelada",
      noShow: "No show",
    },
    reports: {
      tag: "março",
      closed: "Check-out feito · ciclo fechado",
      kpis: [
        {
          label: "Ocupação",
          value: "78%",
          hint: "fev: 71%",
        },
        {
          label: "ADR",
          value: "$ 96.600",
          hint: "por noite",
        },
        {
          label: "RevPAR",
          value: "$ 75.300",
          hint: "",
        },
        {
          label: "Receita",
          value: "$ 4,1 M",
          hint: "127 noites",
        },
      ],
    },
    tourism: {
      title: "Estado turístico · Rio de Janeiro",
      updated: "atualizado há 12 min",
      metrics: [
        {
          label: "Eventos em 30 dias",
          value: "6",
          hint: "Clássico no Maracanã · 21 mar · a 3 km",
          trend: "up",
        },
        {
          label: "Próximo feriadão",
          value: "3 → 5 abr",
          hint: "3 dias · Sexta-feira Santa",
          trend: "neutral",
        },
        {
          label: "Clima do fim de semana",
          value: "29°",
          hint: "sol · fim do verão",
          trend: "up",
        },
        {
          label: "Atenção ao destino",
          value: "+18%",
          hint: "buscas · 30 dias vs. anteriores",
          trend: "up",
        },
      ],
      alert: "Feriadão de Páscoa, de 3 a 5: a cidade lota.",
      more: "Ver mais",
    },
    chat: {
      placeholder: "Peça algo à Roombir IA",
      thinking: "A Roombir IA está pensando",
      wait: "Consultando o sistema",
      turns: [
        {
          ask: "Cria uma reserva para hoje, 2 noites, duplo superior",
          steps: [
            {
              label: "Disponibilidade",
              tool: "buscar disponibilidade",
            },
            {
              label: "Reserva criada",
              tool: "criar reserva",
            },
          ],
          answer: "Pronto. Ficou a #BK-4821: hoje, 2 noites, Duplo Superior.",
          hold: 700,
        },
        {
          ask: "Como vem o fim de semana? Tem algo na cidade?",
          steps: [
            {
              label: "Estado turístico",
              tool: "estado turístico",
            },
            {
              label: "Receita do fim de semana",
              tool: "resumo de receita",
            },
          ],
          answer: "Sábado forte: clássico no Maracanã, 3 km. Sugiro +10% no sábado e mínimo de 2 noites.",
          hold: 1800,
        },
        {
          ask: "Pode aplicar.",
          steps: [
            {
              label: "+10% no sábado",
              tool: "aplicar tarifa",
            },
          ],
          answer: "Feito. O sábado passa de $96.600 a $106.260 no motor.",
          hold: 900,
        },
      ],
      bookingBlock: {
        guest: "Martina García",
        detail: "hoje → +2 · 2 noites · Duplo Superior",
        amount: "$ 193.200",
      },
      ruleBlock: {
        title: "Tarifa aplicada",
        meta: "sáb 21",
        kpis: [
          {
            label: "Antes",
            value: "$ 96.600",
            hint: "por noite",
          },
          {
            label: "Agora",
            value: "$ 106.260",
            hint: "por noite",
          },
          {
            label: "Mudança",
            value: "+10%",
            hint: "sábado",
          },
        ],
      },
      rates: {
        old: "$96.600",
        next: "$106.260",
        delta: "+10%",
      },
    },
    chaos: {
      chat: "chat",
      sheet: "planilha",
      notes: "notas",
      mail: "e-mail",
      agenda: "agenda",
    },
    actions: {
      create: "Nova reserva · 3 noites",
    },
    url: "roombir.com",
    ui: {
      shell: {
        company: "Hotel del Parque S.A.",
        property: "Hotel del Parque",
        space: "Recepção",
        initials: "MG",
      },
      bookingTabs: [
        "Painel do dia",
        "Reservas",
        "Calendário",
        "Nova reserva",
        "Tarifas",
        "Disponibilidade",
        "Promoções",
        "Configuração",
      ],
      roomsTabs: [
        "Estado dos quartos",
        "Mapa de ocupação",
        "Categorias",
      ],
      rmsTabs: [
        "Análise",
        "Pace",
        "Cenários",
        "Eventos",
        "Concorrência",
        "Decisões",
        "Recomendações",
        "Configuração",
      ],
      calendar: {
        hab: "Quarto",
        occupancy: "Ocupação",
        today: "Hoje",
        month: "Março de 2026",
        ranges: [
          "1s",
          "2s",
          "1m",
        ],
        search: "Buscar hóspede ou código",
        categories: "Todas as categorias",
        states: "Todos os estados",
        refresh: "Atualizar",
        create: "+ Novo",
        legend: {
          pending: "Pendente",
          confirmed: "Confirmada",
          "checked-in": "Hospedada",
          "checked-out": "Check-out",
          cancelled: "Cancelada",
          "no-show": "No show",
        },
        hint: "Arraste uma barra para mover",
        dows: [
          "seg",
          "ter",
          "qua",
          "qui",
          "sex",
          "sáb",
          "dom",
        ],
        monthTick: "mar",
        cats: [
          {
            name: "Duplo",
            rate: "$ 96.600",
          },
          {
            name: "Duplo Superior",
            rate: "$ 106.000",
          },
        ],
        guests: [
          "Ruiz",
          "Pérez",
          "Sosa",
          "Bianchi",
          "Motor",
        ],
      },
      rooms: {
        floors: "Todos os andares",
        order: "Ordem",
        orderOpts: [
          "N°",
          "Andar",
          "Cat.",
        ],
        countWord: "quartos",
        search: "Buscar quarto...",
        categories: "Todas as categorias",
        refresh: "Atualizar",
        columns: {
          available: "Disponível",
          occupied: "Ocupado",
          cleaning: "Limpeza",
          maintenance: "Manutenção",
          blocked: "Bloqueado",
          "checkout-pending": "Checkout pend.",
        },
        empty: "Sem quartos",
        hint: "Arraste um cartão para outra coluna para mudar o estado",
      },
      revenue: {
        title: "Recomendações de tarifa",
        sub: "Aceitar aplica a tarifa ao motor de reservas como override.",
        tabs: [
          "Pendentes",
          "Histórico",
        ],
        status: {
          suggested: "Pendente",
          accepted: "Aceita",
          applied: "Aplicada",
          rejected: "Rejeitada",
        },
        accept: "Aceitar",
        reject: "Rejeitar",
        blockTitle: "Recomendações de tarifa",
        blockMeta: "1 pendente",
        footnote: "Aceitar aplica a tarifa ao motor de reservas como override.",
        recs: [
          {
            date: "sáb 21 mar",
            from: "$ 96.600",
            to: "$ 106.260",
            delta: "+10%",
            reason: "Ocupação 78% + clássico no Maracanã a 3 km",
            status: "suggested",
          },
          {
            date: "dom 22 mar",
            from: "$ 96.600",
            to: "$ 101.400",
            delta: "+5%",
            reason: "Pace +18% vs. seu histórico · mediana do comp-set $ 101.400",
            status: "suggested",
          },
          {
            date: "ter 24 mar",
            from: "$ 96.600",
            to: "$ 91.800",
            delta: "-5%",
            reason: "Pickup 7d baixo · terça sem eventos no raio",
            status: "suggested",
          },
        ],
      },
      dashboard: {
        checkin: "Check-in",
        checkout: "Check-out",
        active: "Reservas ativas",
        activeSub: "Confirmadas + hospedadas",
        occupancy: "Ocupação hoje",
        occupancySub: "Chegando esta semana: 6",
        demand: "Curva de demanda",
        demandSub: "Pico: 9 · Média: 5,4",
        recent: "Reservas recentes",
        recentSub: "Lista de reservas recentes de hóspedes",
        newBooking: "Nova reserva",
        cols: [
          "ID da reserva",
          "Nome do hóspede",
          "Check-in",
          "Check-out",
          "Total",
          "Estado",
        ],
        status: {
          confirmed: "Confirmada",
          "checked-in": "Hospedada",
          pending: "Pendente",
        },
        more: "Ver mais",
        bookings: "Reservas",
        bookingsSub: "Últimos 3 meses",
        months: [
          "Janeiro",
          "Fevereiro",
          "Março",
        ],
        topCats: "Top categorias",
        topCatsSub: "Maior ocupação hoje",
        topCatNames: ["Duplo Superior", "Duplo", "Suíte"],
        quick: "Acessos rápidos",
        quickSub: "Apps ativos na Recepção",
        quickItems: [
          "Painel do dia",
          "Reservas",
          "Nova reserva",
          "Tarifas",
        ],
        rows: [
          {
            code: "#RES-2026-KGMJ",
            cat: "Duplo Superior",
            guest: "Martina García",
            mail: "martina.garcia@gmail.com",
            inDate: "21 mar 2026",
            outDate: "23 mar 2026",
            nights: "2 noites",
            total: "$ 212.520",
            status: "confirmed",
          },
          {
            code: "#RES-2026-NGA6",
            cat: "Duplo",
            guest: "Carlos Tévez",
            mail: "ctevez@hotmail.com",
            inDate: "19 mar 2026",
            outDate: "22 mar 2026",
            nights: "3 noites",
            total: "$ 289.800",
            status: "checked-in",
          },
          {
            code: "#RES-2026-3CYL",
            cat: "Suíte Norte",
            guest: "Ana Bianchi",
            mail: "ana.bianchi@yahoo.com",
            inDate: "20 mar 2026",
            outDate: "24 mar 2026",
            nights: "4 noites",
            total: "$ 592.000",
            status: "confirmed",
          },
          {
            code: "#RES-2026-B0SO",
            cat: "Duplo",
            guest: "Lucas Pérez",
            mail: "lperez@outlook.com",
            inDate: "22 mar 2026",
            outDate: "25 mar 2026",
            nights: "3 noites",
            total: "$ 289.800",
            status: "pending",
          },
          {
            code: "#RES-2026-WJU9",
            cat: "Duplo Superior",
            guest: "Sofía Ruiz",
            mail: "sofia.ruiz@gmail.com",
            inDate: "23 mar 2026",
            outDate: "26 mar 2026",
            nights: "3 noites",
            total: "$ 318.780",
            status: "confirmed",
          },
        ],
      },
      linkhub: {
        name: "Hotel del Parque",
        bio: "Rio de Janeiro · a 3 km do Maracanã",
        bookTitle: "Reservar",
        checkin: "Check-in",
        checkout: "Check-out",
        guests: "Hóspedes",
        guestsValue: "2 adultos",
        search: "Buscar",
        blocks: [
          "Site",
          "WhatsApp",
          "Como chegar",
          "Contato",
        ],
        footer: "Criado com roombir",
        inShort: "21 mar",
        outShort: "23 mar",
        travelers: "2 viajantes",
        monthTitle: "Março de 2026",
        dows: [
          "DO",
          "SE",
          "TE",
          "QU",
          "QU",
          "SE",
          "SÁ",
        ],
        cancel: "Cancelar",
        next: "Próximo",
        resultsTitle: "Escolha seu quarto",
        summary: "21 mar → 23 mar · 2 adultos · 2 noites",
        rooms: [
          {
            name: "Duplo Superior",
            price: "$ 106.260",
          },
          {
            name: "Duplo",
            price: "$ 96.600",
          },
          {
            name: "Suíte Norte",
            price: "$ 148.000",
          },
        ],
        perNight: "/ noite",
        book: "Reservar",
      },
      stay: {
        brand: "StayPass",
        tabs: [
          "Início",
          "Perfil",
        ],
        user: "Martina",
        section: "Reservas",
        filters: [
          "Todas",
          "Ativas",
          "Passadas",
        ],
      },
      reports: {
        title: "Relatórios",
        updated: "Atualizado 21/3/2026, 09:12",
        refresh: "Atualizar",
        ranges: [
          "Última semana",
          "Último mês",
          "3 meses",
          "6 meses",
        ],
        rangeNote: "20/2 → 21/3 · agrupado por semana",
        section: "Ocupação e volume",
        sectionSub: "Como a propriedade está indo agora e o que vem pela frente.",
        kpis: [
          {
            label: "Reservas ativas hoje",
            value: "14",
            hint: "confirmadas + hospedadas cobrindo hoje",
          },
          {
            label: "Chegadas esta semana",
            value: "9",
            hint: "check-in nos próximos 7 dias",
          },
          {
            label: "Ocupação",
            value: "78%",
            hint: "fev: 71%",
            badge: "+7%",
          },
          {
            label: "RevPAR",
            value: "$ 75.300",
            hint: "24 unidades · 30 dias",
          },
        ],
        chart: "Curva de demanda — próximos 30 dias",
        chartSub: "Reservas confirmadas/hospedadas cobrindo cada noite.",
      },
    },
    hud: {
      play: "Reproduzir",
      pause: "Pausar",
      restart: "Reiniciar",
      language: "Idioma",
      scene: "Cena",
      fullscreen: "Tela cheia",
      exitFullscreen: "Sair da tela cheia",
      replay: "Ver de novo",
    },
  },

  videoIa: {
    meta: {
      title: "Vídeo · Roombir IA",
      description: "A Roombir IA em pouco mais de um minuto: pedidos do dia a dia que ficam prontos, o dossiê do seu destino, um plano quando o pedido é um objetivo e as suas permissões sempre na frente.",
    },
    tabsLine: "O que hoje leva *quatro abas*…",
    placeholder: "Peça algo à Roombir IA",
    name: "Roombir IA",
    demo: {
      thinking: "A Roombir IA está pensando",
      wait: "Consultando o sistema",
      captions: ["Anexe um arquivo", "Peça um relatório", "Dite por voz", "Veja o detalhe do seu destino"],
      attach: {
        label: "Anexar arquivo",
        media: "Mídia",
        docs: "Documentos",
        image: "Imagem",
        video: "Vídeo",
        audio: "Áudio",
        pdf: "PDF",
        csv: "CSV",
        file: "tarifas-abril.pdf",
        ask: "Carrega estas tarifas em abril",
        steps: [
          { label: "PDF lido · 2 páginas", tool: "ler anexo" },
          { label: "30 tarifas carregadas", tool: "carregar tarifas" },
        ],
        answer: "Pronto: carreguei as 30 tarifas de abril no plano Duplo Superior.",
      },
      report: {
        ask: "Qual canal mais cancela?",
        steps: [{ label: "Relatório de canais", tool: "relatório de canais" }],
        answer: "Booking.com: 18 % de cancelamentos em 90 dias. O direto, 4 %.",
        title: "Cancelamentos por canal · 90 dias",
        meta: "377 reservas",
        kpis: [
          { label: "Booking.com", value: "18%", hint: "41 de 228" },
          { label: "Airbnb", value: "9%", hint: "7 de 78" },
          { label: "Direto", value: "4%", hint: "3 de 71" },
        ],
      },
      voice: {
        listening: "Ouvindo…",
        heard: "Bloqueia o chalé Alerce na terça à tarde por manutenção",
        steps: [{ label: "Bloqueio criado", tool: "criar bloqueio" }],
        answer: "Feito: o chalé Alerce fica bloqueado a partir de terça à tarde. A manhã continua à venda.",
      },
      tourism: {
        ask: "O que está acontecendo na cidade este mês?",
        steps: [{ label: "Estado turístico", tool: "estado turístico" }],
        answer: "Mês movimentado: clássico no Maracanã e o feriadão de Páscoa.",
        panel: {
          title: "Meu status turístico",
          live: "Dado ao vivo",
          delayed: "Com atraso",
          sections: [
            {
              title: "Eventos próximos",
              live: true,
              metrics: [
                { value: "6", label: "Eventos em 30 dias" },
                { value: "21 mar", label: "Grande evento próximo" },
              ],
              narrative: "",
              items: [
                { title: "Clássico no Maracanã", detail: "21 mar · a 3 km" },
                { title: "Meia maratona do Rio", detail: "12 abr · a 2 km" },
                { title: "Congresso no Riocentro", detail: "14 → 16 abr · a 18 km" },
              ],
              spark: false,
            },
            {
              title: "Temporada e calendário",
              live: false,
              metrics: [
                { value: "3 → 5 abr", label: "Próximo feriado prolongado" },
                { value: "13 → 24 jul", label: "Próximas férias escolares" },
              ],
              narrative: "A Páscoa cai de 3 a 5 de abril: feriadão no Brasil e na Argentina, seus dois principais mercados.",
              items: [],
              spark: false,
            },
            {
              title: "Interesse e mercados",
              live: true,
              metrics: [
                { value: "+18%", label: "Interesse online" },
                { value: "3", label: "Mercados emissores em férias (60 d)" },
              ],
              narrative: "",
              items: [],
              spark: true,
            },
          ],
          spark: "Visualizações diárias na Wikipédia (30 dias)",
          readOnly: "Somente leitura: para agir, peça à Roombir IA no chat.",
          footer: "Atualizado há 12 min · Fontes: Nager.Date · Open-Meteo · Wikipédia · OpenStreetMap",
        },
      },
    },
    dossier: {
      count: "15 fontes, cada dado com a sua data",
      topics: [
        "Feriados",
        "Feriadões",
        "Férias escolares",
        "Esportes",
        "Cultura",
        "Congressos e feiras",
        "Voos",
        "Clima",
        "Câmbio",
        "Segurança",
        "Ameaças naturais",
        "Vistos",
        "Oferta hoteleira",
        "Interesse no destino",
        "Entorno",
      ],
      dates: ["22 set", "21 set", "22 set", "20 set", "22 set"],
      placeMeta: "Rio de Janeiro · Brasil",
    },
    versus: {
      pre: "Um chat genérico",
      struck: "busca",
      post: ".",
      us: "A Roombir IA parte de *um dossiê*.",
    },
    goal: {
      ask: "Quero mais reservas",
      reads: "18 fontes da sua operação",
      time: "1,1 s",
      sources: [
        "Inventário",
        "Pace",
        "Painel do dia",
        "Motor",
        "Planos de tarifa",
        "Promoções",
        "Restrições",
        "Site",
        "LinkHub",
        "Visibilidade",
        "Perfil do Google",
        "OTAs",
        "Redes",
        "Avaliações",
        "Regras de preço",
        "Recomendações",
        "Concorrência",
        "Mercado",
      ],
      plan: {
        title: "Baixa temporada com ritmo lento",
        meta: "Plano · 3 passos",
        diagnosis: "Outubro está vendendo mais devagar que o seu histórico para as mesmas datas.",
        steps: [
          "Promoção de 10% só no canal direto",
          "Mínimo de 1 noite nas terças e quartas lentas",
          "Regra de tarifa só nas datas atrasadas",
        ],
        confirm: "Confirmar",
        done: "Aplicado",
      },
    },
    perms: {
      spaces: ["Recepção", "Administração"],
      tools: "ferramentas",
      modal: {
        title: "Apagar a tarifa “Alta temporada”",
        body: "Isto não pode ser desfeito.",
        prompt: "Digite o nome para confirmar",
        word: "Alta temporada",
        confirm: "Apagar",
        cancel: "Cancelar",
      },
    },
    talk: {
      lines: ["Você escreve.", "Você fala.", "Você mostra."],
      typed: "Qual canal mais cancela?",
      listening: "Ouvindo…",
      heard: "Bloqueia o chalé Alerce na terça à tarde",
      file: "tarifas-outubro.pdf",
      fileMeta: "PDF · 2 páginas",
      shot: "captura-ota.png",
      withFile: "Carrega estas tarifas em outubro",
    },
  },

  videoProps: {
    meta: {
      title: "Vídeo · Propriedades",
      description: "Propriedades em um minuto: várias propriedades sob uma só conta, cada uma com sua moeda e sua equipe, acessos por propriedade e por função, e todo o resto pendurado na ficha.",
    },
    name: "Propriedades",
    owner: { name: "Martina García", role: "Dona", initials: "MG" },
    company: "Hotel del Parque S.A.",
    hotel: {
      name: "Hotel del Parque",
      city: "Mendoza, Argentina",
      type: "Hotel",
      inventory: "3",
      inventoryWord: "categorias",
      spaces: "4",
      currency: "ARS",
      language: "Español",
    },
    cabins: {
      name: "Cabañas del Lago",
      city: "Villa La Angostura, Argentina",
      cityOnly: "Villa La Angostura",
      type: "Chalé",
      inventory: "6",
      inventoryWord: "unidades",
      spaces: "4",
      currency: "USD",
      language: "English",
    },
    spacesWord: "espaços",
    counts: { one: "1 propriedade", two: "2 propriedades", users2: "2 usuários", users3: "3 usuários" },
    status: "active",
    chips: { currency: "Moeda", timezone: "Fuso horário", language: "Idioma", tz: "UTC−3" },
    // El recorrido: la organización (tipos, estructura, reservas), no el alta.
    captions: ["Cada propriedade, com seu tipo", "Suas reservas, na sua moeda", "Troque de propriedade lá em cima", "Encontre tudo num só lugar"],
    cabinUnits: ["Chalé Alerce", "Chalé Coihue", "Chalé Arrayán", "Chalé Maitén", "Chalé Lenga", "Chalé Ñire"],
    suiteRate: "$ 142.000",
    cabinRate: "US$ 180",
    templateName: "Hotel del Parque · espaços e apps",
    templateNone: "Sem modelo",
    coords: { pair: "-40.7625, -71.6463", lat: "-40.7625", lng: "-71.6463" },
    invite: {
      name: "Lucía Ferreyra",
      email: "lucia@cabanasdellago.com",
      role: "Staff",
      spaces: [
        { name: "Recepção", apps: "9" },
        { name: "Governança", apps: "4" },
        { name: "Administração", apps: "" },
      ],
      users: "Usuários",
      addedRow: "Cabañas del Lago · Recepção",
      allProps: "Todas as propriedades",
    },
    search: {
      query: "Alerce",
      results: [
        { kind: "room", title: "Chalé Alerce", meta: "Cabañas del Lago · 4 hóspedes" },
        { kind: "booking", title: "#RES-2026-QX4T · Julián Paz", meta: "Chalé Alerce · 12 → 15 out" },
        { kind: "property", title: "Cabañas del Lago", meta: "Villa La Angostura" },
      ],
    },
    hotelTotals: ["$ 212.520", "$ 289.800", "$ 592.000", "$ 190.400", "$ 450.000"],
    cabinRows: [
      { code: "#RES-2026-QX4T", cat: "Chalé Alerce", guest: "Julián Paz", mail: "julian.paz@gmail.com", inDate: "12 out 2026", outDate: "15 out 2026", nights: "3 noites", total: "US$ 540", status: "confirmed" },
      { code: "#RES-2026-7HPA", cat: "Chalé Coihue", guest: "Emma Walker", mail: "emma.w@outlook.com", inDate: "10 out 2026", outDate: "14 out 2026", nights: "4 noites", total: "US$ 760", status: "checked-in" },
      { code: "#RES-2026-2KDN", cat: "Chalé Arrayán", guest: "Lucas Stein", mail: "lstein@gmx.de", inDate: "14 out 2026", outDate: "18 out 2026", nights: "4 noites", total: "US$ 720", status: "confirmed" },
      { code: "#RES-2026-M8RE", cat: "Chalé Maitén", guest: "Sofía Ruiz", mail: "sofiaruiz@yahoo.com", inDate: "11 out 2026", outDate: "13 out 2026", nights: "2 noites", total: "US$ 330", status: "pending" },
      { code: "#RES-2026-VT0L", cat: "Chalé Lenga", guest: "Noah Martin", mail: "noahm@gmail.com", inDate: "16 out 2026", outDate: "19 out 2026", nights: "3 noites", total: "US$ 510", status: "confirmed" },
    ],
    access: {
      people: [
        { name: "Lucía Ferreyra", initials: "LF", space: "Recepção", scope: "Cabañas del Lago" },
        { name: "Tomás Ríos", initials: "TR", space: "Governança", scope: "Hotel del Parque" },
        { name: "Martina García", initials: "MG", space: "Administração", scope: "Todas" },
      ],
      caps: "10 acessos administrativos, um por um",
    },
    root: {
      items: ["Quartos", "Reservas", "Marca", "Site", "LinkHub", "Avaliações", "Galerias"],
      phoneLabel: "Telefone",
      phoneOld: "+54 261 555-0100",
      phoneNew: "+54 261 555-0199",
      targets: ["Site", "LinkHub", "Motor de reservas"],
      updated: "Atualizado",
    },
    // Los rótulos de la UI real, copiados de los diccionarios del PMS (pms-core/app/src/i18n/dictionaries).
    ui: {
      newProperty: "Nova propriedade",
      typeLabel: "Tipo de acomodação *",
      typeHint: "Define como suas acomodações são vendidas: por unidade específica ou por categoria.",
      template: "Template (opcional)",
      create: "Criar propriedade",
      nameLabel: "Nome *",
      city: "Cidade *",
      country: "País",
      cancel: "Cancelar",
      properties: "Propriedades",
      unitTitle: "Venda por unidades",
      unitHint: "Cada acomodação é reservada individualmente (1:1).",
      catTitle: "Venda por categorias",
      catHint: "Vende-se por tipo de quarto a partir de um pool de unidades.",
      tCabin: "Cabana",
      tVilla: "Villa",
      tVacation: "Hospedagem de temporada",
      tGlamping: "Glamping",
      tResort: "Resort",
      tAparthotel: "Aparthotel",
      tHostel: "Hostel",
      editProperty: "Editar propriedade",
      coords: "Coordenadas",
      lat: "Latitude",
      lng: "Longitude",
      coordTip: "Dica: no Google Maps clique com o botão direito sobre o ponto → copie as coordenadas e cole o par aqui (ele se divide sozinho em Lat / Long).",
      howCopy: "Como copiar",
      publicContact: "Contato público",
      publicEmail: "E-mail público",
      phone: "Telefone",
      whatsapp: "WhatsApp",
      social: "Redes sociais",
      address: "Endereço",
      save: "Salvar alterações",
      spacesTitle: "Propriedades e espaços de trabalho",
      spacesIntro: "Escolha a quais propriedades tem acesso. Abra cada uma para atribuir os espaços de trabalho.",
      onlyChosen: "Apenas as selecionadas",
      allFuture: "Todas, incluindo as futuras",
      assignedSpaces: "espaços atribuídos",
      seeSpaces: "Ver espaços",
      isDefault: "Padrão",
      allApps: "Acesso a todos os apps",
      appsEnabled: "apps habilitados",
      operate: "Operar",
      capsTitle: "Acessos administrativos",
      capsHint: "Escolha o que esta pessoa pode administrar dentro da empresa.",
      gUsers: "Usuários",
      gProps: "Propriedades e espaços",
      gCompany: "Empresa",
      changeProperty: "Trocar propriedade",
      searchPlaceholder: "Buscar reservas, hóspedes, quartos, apps, usuários…",
      navigate: "navegar",
      open: "abrir",
      close: "fechar",
      kBooking: "Reserva",
      kProperty: "Propriedade",
      kRoom: "Quarto",
      currentProperty: "Propriedade atual",
      createUserTitle: "Criar um usuário",
      createUserBtn: "Criar usuário",
      createUserIntro: "A conta é criada com uma senha temporária. No primeiro acesso o usuário precisa trocá-la por uma própria.",
      fullName: "Nome e sobrenome",
      email: "E-mail do usuário",
      role: "Função",
      caps: [
        "Gerenciar usuários",
        "Atribuir espaços de trabalho",
        "Criar propriedades",
        "Editar propriedades",
        "Trocar de propriedade",
        "Gerenciar espaços de trabalho",
        "Ativar e desativar apps",
        "Configurações da empresa",
        "Faturamento e plano",
        "Sites"
      ]
    },
  },

  /* Os vídeos de Quartos, Motor, Relatórios, Revenue e Marketing
     (`/video/quartos`, …): as manchetes vêm de cada página; aqui fica só o
     próprio de cada vídeo (legendas dos passos e dados de exemplo). */
  videoTours: {
    rooms: {
      meta: {
        title: "Vídeo · Quartos",
        description: "Quartos em um minuto: o estado da casa num relance, categorias em pool e chalés por nome no mesmo calendário, estados que não admitem o impossível e uma noite que se vende uma única vez.",
      },
      captions: ["O estado da casa, num relance", "Pool de categoria e chalés por nome, num calendário", "Uma noite se vende uma única vez"],
      modes: ["Pool de categoria", "Unidade com nome próprio"],
      cabinCat: "Chalés",
      cabinRate: "$ 140.000",
      cabins: ["Chalé Alerce", "Chalé Coihue"],
      guestNew: "Romero",
      sources: { first: "Seu site", second: "Booking" },
      lock: { title: "Essa noite já está vendida", sub: "Chalé Alerce · 21 mar · o banco não deixa a segunda entrar" },
      states: { forbidden: "Com o hóspede dentro, não", allowed: "Primeiro, saída pendente" },
      notes: {
        card: {
          t: "Um cartão, um quarto",
          d: "A cor diz o estado: livre, ocupado, em limpeza…"
        },
        moved: {
          t: "A limpeza terminou",
          d: "Você arrasta para Disponível e ele volta a ser vendido."
        },
        pool: {
          t: "Categoria em pool",
          d: "O hóspede compra “um Duplo”; o quarto é atribuído depois."
        },
        row: {
          t: "Cada linha, um quarto",
          d: "E cada barra, uma reserva: hóspede, pessoas e noites."
        },
        unit: {
          t: "Unidade com nome próprio",
          d: "Reserva-se o Chalé Alerce, com as suas fotos e o seu preço."
        },
        web: {
          t: "Entra uma reserva do seu site",
          d: "Ocupa as noites de 19 a 21."
        },
        second: {
          t: "A Booking pede as mesmas noites",
          d: "O banco de dados não a deixa entrar."
        }
      },
      load: {
        card: { name: "Duplo Superior", units: "4 unidades", mode: "Pool de categoria", rate: "$ 106.000 / noite", size: "24 m²", guests: "2 adultos", amenities: ["Wi-Fi","Ar-condicionado","Vista para a montanha"] },
        chips: ["Calendário", "Motor de reservas", "Seu site", "LinkHub", "Revenue", "Roombir IA", "Relatórios"],
      },
    },
    motor: {
      meta: {
        title: "Vídeo · Motor de reservas",
        description: "O motor de reservas em um minuto: o hóspede escolhe as noites no seu site, a reserva entra no painel do dia e no calendário, cada preço diz de onde vem e o valor não muda com o câmbio.",
      },
      captions: ["A reserva entra no painel do dia", "E ocupa as noites no calendário", "O preço da noite, com o seu porquê"],
      source: "Motor · seu site",
      notes: {
        price: {
          t: "O preço de cada dia",
          d: "Antes de escolher as datas, com as tarifas que o motor cobra."
        },
        units: {
          t: "Quantos restam",
          d: "O seu inventário real: no dia 21 restam 3."
        },
        photos: {
          t: "Cada quarto, com as suas fotos",
          d: "E o seu preço por noite para essas datas."
        },
        row: {
          t: "A reserva nova, no topo",
          d: "Confirmada e com o total: ninguém a digitou."
        },
        bar: {
          t: "As suas duas noites, ocupadas",
          d: "O 103 deixa de ser vendido nos dias 21 e 22."
        },
        accept: {
          t: "Você aceita a sugestão",
          d: "Essa tarifa passa a mandar sobre as outras."
        }
      },
      chain: {
        title: "De onde vem o preço",
        steps: ["Aceito no Revenue", "Plano de tarifas", "Preço base", "Promoções"],
        winner: "$ 106.260 · sáb 21 mar",
      },
      motorUi: {travelers: "Viajantes",dates: "Datas",adults: "Adultos",adultsHint: "Maiores de 18",children: "Crianças",childrenHint: "3 – 17 anos",infants: "Bebês",infantsHint: "0 – 2 anos",code: "Código",promoName: "Reserva direta",optional: "Opcional",back: "Voltar",done: "Pronto",available: "Quartos disponíveis",range: "21 mar → 23 mar",dayRange: "21 mar - 23 mar",nights: "2 noites",adultsCount: "2 adultos",monthCaption: "março de 2026",dows: ["Do","Se","Te","Qu","Qu","Se","Sá"]},
      promos: {
        title: "Promoções que *aparecem antes de reservar*.",
        notes: {
          code: { t: "Com código ou automáticas", d: "O hóspede digita o código, ou a promo se aplica sozinha nas datas dele." },
          badge: { t: "A promo, à vista", d: "Etiqueta, preço anterior riscado e o nome da promo em cada quarto." },
        },
      },
      currencyTitle: "O preço que o hóspede viu *fica congelado*.",
      currencies: ["US$ · Dólar", "$ · Peso argentino", "R$ · Real", "CLP · Peso chileno", "COP · Peso colombiano", "MXN · Peso mexicano", "S/ · Sol", "UYU · Peso uruguaio", "€ · Euro", "£ · Libra"],
      frozen: { guestLabel: "O hóspede viu", guestValue: "US$ 158,60", youLabel: "Você cobra", youValue: "$ 212.520", note: "Câmbio congelado no check-in · 21 mar 09:12" },
    },
    reports: {
      meta: {
        title: "Vídeo · Relatórios",
        description: "Relatórios em um minuto: como a propriedade está indo sem montar uma planilha, cada número comparado com o período anterior e, o que não está no relatório, perguntado ao Roombir IA.",
      },
      captions: ["Como a propriedade está indo", "O que já está reservado, noite a noite", "Se não está no relatório, pergunte"],
      ask: "Qual canal mais me cancela este mês?",
      steps: [
        { label: "Reservas do mês lidas", tool: "relatório de reservas" },
        { label: "Cancelamentos por canal", tool: "cancelamentos" },
      ],
      answer: "A Booking cancela mais: 6 de 21 reservas (29 %). Seu site, 1 de 14. A recepção tem 2 reservas, então não afirmo.",
      block: {
        title: "Cancelamentos por canal",
        meta: "março",
        kpis: [
          { label: "Booking", value: "29 %", hint: "6 de 21" },
          { label: "Seu site", value: "7 %", hint: "1 de 14" },
          { label: "Recepção", value: "—", hint: "2 reservas: poucas" },
        ],
      },
      compare: {
        vs: "vs. fevereiro",
        items: [
          { label: "Receita", now: "$ 4,1 M", prev: "$ 3,6 M", delta: "+14 %" },
          { label: "Antecedência", now: "18 dias", prev: "22 dias", delta: "−4 dias" },
          { label: "Estadia média", now: "2,8 noites", prev: "2,5 noites", delta: "+0,3" },
          { label: "Ocupação", now: "78 %", prev: "71 %", delta: "+7 pts" },
        ],
      },
      chips: ["Ocupação", "Demanda a 90 dias", "ADR", "RevPAR", "Cancelamentos", "Canais", "Receita", "Antecedência", "Estadia média", "Ocupação por categoria"],
    },
    revenue: {
      meta: {
        title: "Vídeo · Revenue",
        description: "Revenue em um minuto: cada preço sugerido com o seu motivo, aceitar aplica no motor, o destino com as suas fontes e treze variáveis com um ensaio a seco.",
      },
      captions: ["Cada preço, com o seu motivo", "Aceitar aplica no motor", "O que move a demanda, com a fonte"],
      vars: ["Ocupação", "Índice de demanda", "Disponibilidade", "Concorrente 1", "Concorrente 2", "Concorrente 3", "Concorrente 4", "Concorrente 5", "Reservas novas · 7 dias", "Reservas novas · 30 dias", "Impacto de eventos", "Dias até o evento", "Índice de pace"],
      dryRun: {
        title: "Ensaio a seco",
        rule: "Se a ocupação ≥ 75 % a 14 dias → +8 %",
        result: "Teria mudado 9 noites",
        avg: "+$ 7.700 por noite",
      },
      applied: "Tarifa aplicada no motor",
    },
    marketing: {
      meta: {
        title: "Vídeo · Marketing",
        description: "Marketing em um minuto: um site e um LinkHub que já sabem o que você tem livre, o editor com o seu assistente de IA, seguidores que reservam pelas suas redes, a sua marca carregada uma vez e todo o hub em um só lugar.",
      },
      linkhub: {
        title: "Transforme seus seguidores *em hóspedes* com o LinkHub.",
        points: ["Reservam ali mesmo, sem sair do link", "Vindo do Instagram, TikTok ou WhatsApp", "Suas datas livres, à vista na hora", "Em poucos toques, sem formulários a mais"],
      },
      brand: {
        title: "Identidade de marca",
        name: "Hotel del Parque",
        palette: "Paleta tirada do logo",
        tone: "Tom",
        toneValue: "Caloroso e próximo",
        font: "Tipografia",
        fontValue: "Outfit",
        targets: ["Seu site", "LinkHub", "Motor de reservas", "Buscadores", "E-mails ao hóspede", "Roombir IA"],
      },
      editor: {
        captions: [
          "Você cola uma captura e ele monta as seções",
          "Você aponta um bloco e pede a mudança",
          "Um controle de qualidade que também corrige"
        ],
        bar: {
          add: "Adicionar",
          layers: "Camadas",
          files: "Arquivos",
          popups: "Popups",
          motor: "Motor",
          settings: "Ajustes",
          ai: "Editor",
          preview: "Pré-visualizar",
          unpublished: "Não publicado",
          discard: "Descartar",
          quality: "Qualidade",
          publish: "Publicar",
          published: "Publicado",
          page: "Editar página:",
          pageName: "Início",
          editIn: "Editar em:",
          device: "Desktop",
          live: "Ver online",
          domain: "Conecte o seu domínio"
        },
        chat: {
          title: "Editor IA",
          hello: "Olá! Sou a Roombir IA. Peça para eu criar, editar ou reordenar seções.",
          placeholder: "Escreva para o roombir… Cole imagens ou selecione elementos da tela para citá-los.",
          cite: "Citar elementos",
          shot: "capa-referencia.png",
          ask1: "Monte a minha capa como esta, com os meus quartos",
          steps1: [
            "Lendo a captura",
            "Seção de capa",
            "Seção de quartos",
            "Seção de avaliações"
          ],
          answer1: "Pronto: montei a capa com três seções, em rascunho.",
          quote: "Quartos",
          ask2: "Adicione mais dois cartões",
          steps2: [
            "Editando “Quartos”"
          ],
          answer2: "Adicionei dois cartões. O resto ficou igual."
        },
        site: {
          nav: [
            "Quartos",
            "Serviços",
            "Localização"
          ],
          book: "Reservar",
          heroTitle: "Sua casa em frente ao parque",
          heroSub: "Hotel del Parque · Mendoza, Argentina",
          roomsTitle: "Nossos quartos",
          rooms: [
            "Duplo Superior",
            "Suíte do Parque",
            "Cabana Alerce",
            "Duplo Clássico",
            "Cabana Coihue"
          ],
          guests: "hóspedes",
          reviewsTitle: "O que dizem os nossos hóspedes",
          review: "Café da manhã delicioso e uma vista do parque inesquecível.",
          reviewer: "Laura M. · Google"
        },
        quality: {
          title: "Qualidade do site",
          sub: "Revisão completa",
          gauges: [
            "Desempenho",
            "Acessibilidade",
            "Recomendações",
            "SEO",
            "Agentes"
          ],
          overall: "Pontuação geral",
          fix: "Corrigir tudo",
          recheck: "Revisar de novo",
          errors: "Erros",
          passed: "Aprovadas",
          issues: [
            "Imagens sem descrição",
            "Falta a descrição da página",
            "Texto pequeno demais no celular"
          ]
        },
        notes: {
          draft: {
            t: "Tudo vai para o rascunho",
            d: "Publicar é um passo à parte, e é seu."
          }
        }
      },
      hub: {
        title: "E todo o resto, *no mesmo lugar*.",
        menu: [
          "Sites",
          "Identidade de marca",
          "Galerias",
          "Avaliações",
          "LinkHub",
          "Biblioteca de arquivos"
        ],
        chips: [
          "Fotos e vídeos",
          "Editor de imagem",
          "Modelos com a sua marca",
          "Importar avaliações",
          "LinkHub com QR",
          "Popups e WhatsApp",
          "Seu domínio",
          "Vários idiomas",
          "SEO e GEO",
          "Legível para uma IA"
        ]
      },
      one: "Tudo no roombir, conectado às suas reservas",
    },
  },

  notFound: {
    eyebrow: "Erro 404",
    title: "Esta página *não existe*.",
    lead:
      "Pode ser que a tenhamos movido ou que o link esteja errado. Estes são os lugares para onde as pessoas costumam ir.",
    home: "Voltar ao início",
  },
};

export default pt;
