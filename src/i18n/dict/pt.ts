import type { Dictionary } from "./es";

/**
 * Português do Brasil. As mesmas chaves de `es.ts` — o TypeScript não deixa
 * ser de outro jeito.
 *
 * O tom é o mesmo do castelhano: direto, concreto e disposto a dizer o que o
 * produto ainda não faz.
 */
const pt: Dictionary = {
  site: {
    title: "Bookfer · O sistema operacional da sua hospedagem",
    description:
      "PMS, motor de reservas, site, revenue management e um assistente de IA que opera o sistema. Tudo sobre um único banco de dados, para hotéis, chalés, hostels e aluguéis.",
    tagline: "Sistema operacional hoteleiro",
  },

  nav: {
    product: "Plataforma",
    platform: "A plataforma",
    contact: "Contato",
    login: "Entrar",
    signup: "Começar grátis",
    home: "bookfer, início",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    more: "Mais",
    skip: "Ir para o conteúdo",
    primary: "Principal",
    megaFoot: "Sete produtos sobre um único banco de dados.",
    megaLink: "Ver a plataforma completa",
    language: "Idioma",
    links: {
      solutions: "Soluções",
      pricing: "Preços",
      about: "Sobre nós",
    },
    groups: {
      operation: "A operação",
      growth: "O crescimento",
      newLayer: "A camada nova",
    },
    products: {
      reservas: {
        title: "Reservas e quartos",
        desc: "Painel do dia, calendário, tarifas, disponibilidade e inventário físico.",
      },
      motor: {
        title: "Motor de reservas",
        desc: "A busca e o checkout que o hóspede vê, com calendário informativo.",
      },
      revenue: {
        title: "Revenue · RMS",
        desc: "Pace, concorrência, eventos e recomendações de tarifa com ciclo fechado.",
      },
      sitios: {
        title: "Site e marca",
        desc: "Builder com domínio próprio, LinkHub, galerias e avaliações.",
      },
      ia: {
        title: "Bookfer IA",
        desc: "Um assistente com 272 ferramentas que opera o sistema com você.",
      },
      agentes: {
        title: "Hospedagem agêntica",
        desc: "llms.txt, availability.json e JSON-LD: reservável por uma IA.",
      },
    },
  },

  footer: {
    claim:
      "O sistema operacional da sua hospedagem. Reservas, quartos, motor, site, revenue e um assistente que opera tudo isso, sobre um único banco de dados.",
    nav: "Rodapé",
    columns: {
      product: "Plataforma",
      solutions: "Soluções",
      company: "Empresa",
      legal: "Jurídico",
    },
    company: {
      about: "Quem somos",
      status: "Estado do produto",
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
    madeIn: "Feito na Argentina",
    agentNote: "este site também tem llms.txt",
    social: {
      instagram: "bookfer no Instagram",
      linkedin: "bookfer no LinkedIn",
      email: "Escreva por email",
    },
  },

  common: {
    startFree: "Começar grátis",
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
  },

  ticker: [
    "Motor próprio, 0% de comissão",
    "Tape chart com prévia",
    "Revenue com ciclo fechado",
    "llms.txt · reservável por uma IA",
    "272 ferramentas do assistente",
    "Multimoeda de verdade",
    "E-mails ao hóspede sem SMTP",
    "LinkHub com QR",
    "Pronto em uma tarde",
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
      label: "Bookfer IA",
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
      sources: { own: "própria", bookfer: "bookfer", manual: "manual", none: "sem dado" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Descoberta automática por proximidade e similaridade. As tarifas externas são carregadas à mão: não inventamos um número que não temos.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Reservar online", "WhatsApp", "Fotos dos chalés", "Como chegar", "Avaliações · 4.8"],
    },
    signals: {
      revenue: "revenue · sáb 21/03",
      applied: "aplicada no motor",
      agent: "bookfer ia",
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
    homeTitle: "Um só sistema, um só preço",
    homeSubtitle:
      "Tudo o que uma hospedagem precisa para operar e vender, sem cinco fornecedores e sem comissão por reserva.",
    matrix: {
      caption: "O que cada plano do bookfer inclui",
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
    errorTail: "Se continuar falhando, escreva para hola@bookfer.com.",
    legal:
      "Usamos seus dados só para falar com você sobre o bookfer. Pode pedir para apagá-los quando quiser. Mais na [política de privacidade](/legal/privacidad).",
    doneTitle: "Pronto, chegou.",
    doneText:
      "A gente escreve nas próximas horas. Se preferir não esperar, pode começar o cadastro agora mesmo: é grátis e não pede cartão.",
  },

  home: {
    hero: {
      l1a: "Sua hospedagem",
      l1b: "inteira",
      l2: "em um",
      pill: "Por trás de cada\ngrande estadia",
      l3a: "só",
      l3b: "sistema.",
    },
    swap: {
      eyebrow: "Por que existe",
      title: "Sete produtos que você *compra separado* hoje.",
      lead:
        "Uma hospedagem pequena ou média não deveria precisar de cinco fornecedores e um consultor para operar digitalmente. Essa é a tese do bookfer, e é o que decide cada escolha de produto lá dentro.",
      headOld: "O que você compra separado hoje",
      headNew: "No bookfer",
      rows: [
        { old: "PMS de reservas e quartos", now: "Hubs Reservas + Quartos" },
        { old: "Motor de reservas / booking engine", now: "Motor público + Estúdio do Motor" },
        { old: "Construtor de site", now: "Builder + renderer com domínio próprio" },
        { old: "RMS de revenue management", now: "Hub Revenue" },
        { old: "Link-in-bio e presença digital", now: "LinkHub + Presença Online" },
        { old: "Portal do hóspede", now: "StayPass" },
        { old: "Assistente / automações", now: "Bookfer IA" },
      ],
    },
    modules: {
      eyebrow: "A plataforma",
      title: "Seis superfícies, *nenhuma ponte* entre elas.",
      lead:
        "Não são integrações que sincronizam de madrugada: são visões diferentes dos mesmos dados. Mudar o preço de uma categoria aparece no motor na hora, sem publicar nada.",
      items: {
        reservas: {
          title: "Reservas",
          desc: "Painel do dia, calendário tape chart com arrastar e redimensionar, entrada manual, tarifas, disponibilidade e promoções.",
        },
        habitaciones: {
          title: "Quartos",
          desc: "O inventário físico: status operacional de cada unidade, planta de ocupação e gestão de categorias.",
        },
        motor: {
          title: "Motor de reservas",
          desc: "Sua busca e seu checkout, com um calendário que mostra preço e unidades restantes dia a dia.",
        },
        revenue: {
          title: "Revenue · RMS",
          desc: "Pace contra seu próprio histórico, comp-set, eventos de demanda, regras de preço e recomendações explicadas.",
        },
        sitios: {
          title: "Site e LinkHub",
          desc: "Construtor visual com domínio próprio e multi-idioma, galerias, avaliações, identidade de marca e link-in-bio.",
        },
        ia: {
          title: "Bookfer IA",
          desc: "Um assistente com 272 ferramentas que consulta e opera o sistema, sempre com as suas permissões e nunca com as dele.",
        },
      },
    },
    spaces: {
      eyebrow: "O que ninguém mais tem",
      title: "Cada posto vê *o seu* sistema, não o seu inteiro.",
      lead:
        "Recepção, governança, marketing e administração trabalham sobre os mesmos dados, mas cada espaço de trabalho tem seu próprio menu, sua própria tela inicial e suas próprias permissões. Ninguém aprende a ignorar metade de um aplicativo.",
      items: [
        "O menu se monta sozinho: um espaço de marketing **não mostra** o hub Reservas.",
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
      eyebrow: "Bookfer IA",
      title: "Um assistente que *opera*, não que sugere.",
      lead:
        "Não é um chat que explica onde clicar. Consulta disponibilidade, cria reservas, move uma estadia com prévia, ajusta tarifas, aprova eventos do RMS ou publica um site. E faz tudo isso com as suas permissões, não com as dele.",
      items: [
        "272 ferramentas cobrindo praticamente toda a superfície do produto.",
        "Dá para ver a transcrição do turno: qual ferramenta usou e o que voltou.",
        "Responde com cartões acionáveis, não só com texto.",
        "Três camadas de permissão: filtro antes do turno, contexto no prompt e avaliação em cada chamada.",
      ],
      link: "Ver Bookfer IA",
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
          key: "reservations@bookfer.com",
          title: "Você não configura servidor de email",
          text: "Todos os emails ao hóspede — confirmação, token, aviso de troca — saem do domínio do bookfer com a sua caixa como responder-a. É uma das frições clássicas do cadastro de um PMS e foi eliminada de propósito.",
        },
      ],
    },
    stats: {
      eyebrow: "O tamanho real",
      title: "Não são promessas: *já está construído*.",
      lead:
        "O bookfer está em piloto de mercado, então ainda não vamos te mostrar um contador de hotéis inflado. O que dá para mostrar é o que existe dentro do produto hoje.",
      items: [
        { value: "23", label: "apps ativáveis por espaço de trabalho" },
        { value: "272", label: "ferramentas que o assistente maneja" },
        { value: "37", label: "tours guiados sobre a tela real" },
        { value: "10", label: "moedas, com blue, MEP, CCL ou oficial para ARS" },
        { value: "5", label: "idiomas de plataforma" },
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
    honest: {
      eyebrow: "Estado do produto",
      title: "O que *ainda não* fazemos.",
      lead:
        "Estamos em piloto de mercado e preferimos que você saiba antes de começar, não na segunda semana. Estas são as quatro coisas que um concorrente grande tem e o bookfer não tem, hoje.",
      link: "Ver o estado completo, área por área",
      states: { none: "não existe", partial: "parcial" },
      items: [
        {
          tag: "Channel manager",
          state: "none",
          text: "Não há sincronização de inventário nem de tarifas com OTAs. Existe um log de eventos que registra cada mudança de reserva para quando isso se conectar, mas hoje é um arquivo, não uma integração.",
        },
        {
          tag: "Gateway de pagamento",
          state: "none",
          text: "Não se cobra online. A cobrança é no check-in, presencial, com a conversão de moeda congelada naquele momento.",
        },
        {
          tag: "Tarifas de concorrentes",
          state: "partial",
          text: "O comp-set se descobre sozinho por proximidade e similaridade, mas as tarifas dos concorrentes externos são carregadas à mão. A conexão com provedores automáticos está preparada e não conectada.",
        },
        {
          tag: "Presença online",
          state: "partial",
          text: "As fichas do Google Business e das OTAs são editadas e pontuadas dentro do sistema, mas não são publicadas por API: hoje se copiam à mão para o destino. As conexões de redes são declaradas.",
        },
      ],
    },
    faq: [
      {
        q: "Serve para chalés e apartamentos, ou só para hotéis?",
        a: "Para os dois, e não com o mesmo truque. Uma categoria pode ser vendida como **pool** — dez duplos intercambiáveis, o hóspede compra “um duplo” — ou como **unidade única 1:1**, onde a categoria envolve uma só unidade com nome próprio. Escolhe-se por categoria, não por sistema, então um complexo com seis chalés e dois quartos padrão convive sem forçar nada.",
      },
      {
        q: "Preciso de um channel manager para usar o bookfer?",
        a: "Não para operar, mas vale dizer direto: **o bookfer ainda não tem channel manager**. Se você vende no Booking ou na Expedia, essa disponibilidade hoje se concilia à mão. O sistema é pensado para que a reserva direta — seu site, seu LinkHub, seu motor — pare de se perder num chat, que é de onde sai a maior parte da receita que você hoje não controla.",
      },
      {
        q: "Como eu cobro as reservas?",
        a: "No check-in, presencialmente. **Ainda não há gateway de pagamento integrado.** O que existe é multimoeda de verdade: você guarda os preços numa moeda base, cobra em outra, e a conversão fica viva até o check-in e ali congela, para que o valor cobrado não mude depois.",
      },
      {
        q: "Preciso instalar ou configurar alguma coisa?",
        a: "Entra-se pelo navegador. O cadastro são nove passos guiados salvos no servidor — dá para largar no meio e continuar pelo celular — e não há servidor de email para configurar: **todos os emails ao hóspede saem do domínio do bookfer** com a sua caixa como responder-a.",
      },
      {
        q: "Posso usar meu próprio domínio?",
        a: "Sim. Cada site publicado aceita hostname próprio, e cada variante de idioma pode ter o seu. O LinkHub também tem endereço público, com QR code para imprimir.",
      },
      {
        q: "A IA pode fazer qualquer coisa dentro do meu sistema?",
        a: "Não, e é de propósito. O assistente opera **assumindo a sua identidade real** com uma permissão de vida curta reemitida a cada chamada. Antes do turno tiram-se da mão dele as ferramentas que o seu usuário não pode usar, e cada operação é reavaliada contra a política do serviço. Se no meio da conversa te revogarem um acesso, a ação seguinte falha e o assistente explica por quê.",
      },
    ],
    cta: {
      title: "Coloque para rodar *esta semana*.",
      lead:
        "O cadastro é guiado e não pede cartão. Se preferir que a gente acompanhe a carga de quartos — o passo que mais custa —, fazemos numa call curta.",
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
        "Sete produtos sobre um único banco de dados: reservas, quartos, motor, revenue, sites, portal do hóspede e um assistente de IA. O que cada um faz e como se conectam.",
    },
    hero: {
      eyebrow: "A plataforma",
      title: "Sete produtos, *um único banco de dados*.",
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
      title: "23 apps que *ligam e desligam*.",
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
      items: [
        {
          title: "Reservas e quartos",
          desc: "Painel do dia, lista com painel rápido, tape chart com mover e redimensionar, entrada manual, tarifas com cadeia de preços, disponibilidade com restrições e promoções. Do outro lado, o inventário físico com seis status operacionais e matriz de transições.",
        },
        {
          title: "Motor de reservas",
          desc: "Busca, resultados, detalhe, serviços, dados do hóspede e confirmação. Com calendário informativo, sete blocos de configuração visual e dois modos de confirmação. Embute no seu site ou funciona como página própria.",
        },
        {
          title: "Revenue · RMS",
          desc: "Analytics de eixo duplo — quando se reservou e quando se dorme —, pace contra seu próprio histórico, comp-set com descoberta automática, eventos de demanda, motor de regras com ensaio a seco e recomendações que empurram a tarifa para o motor.",
        },
        {
          title: "Sites e marca",
          desc: "Builder visual com biblioteca de componentes, componentes de domínio conectados a dados, multi-idioma, domínio próprio, popups, botão de WhatsApp e editor de SEO e GEO. Mais galerias, avaliações, identidade de marca e LinkHub.",
        },
        {
          title: "StayPass",
          desc: "O portal do hóspede: conta própria, minhas reservas, detalhe, cancelamento, perfil com documento e nacionalidade, e confirmação por token de email. Um mesmo hóspede acumula as hospedagens onde se cadastrou; cada hotel vê só a sua base.",
        },
        {
          title: "Relatórios",
          desc: "Ocupação e volume com projeção, ADR e RevPAR, lead time, estadia média, cancelamentos e última hora, produção por canal, e duas seções de higiene operacional que marcam o que está mal gerido, não só o que aconteceu.",
        },
      ],
    },
    ia: {
      eyebrow: "A camada que une tudo",
      title: "O assistente vê *o sistema inteiro*, não um módulo.",
      lead:
        "Como os dados são um só, o agente faz em uma frase o que em outro stack são três abas e duas exportações: olhar o pace, ajustar uma tarifa e publicar a promo no site.",
      items: [
        "272 ferramentas distribuídas por reservas, tarifas, disponibilidade, quartos, propriedades, revenue, marketing, arquivos, empresa e sistema.",
        "Blocos de resposta ricos: cartões de reserva e de revenue com botões que executam, sujeitos à mesma verificação de permissões.",
        "Histórico de sessões filtrado pelo espaço de trabalho ativo.",
      ],
      link: "Ver Bookfer IA",
    },
    stats: [
      { value: "23", label: "apps ativáveis" },
      { value: "30", label: "widgets do painel adaptativo" },
      { value: "37", label: "tours guiados" },
      { value: "272", label: "ferramentas do agente" },
    ],
    ask: "Procurava algo específico?",
    askLink: "Pergunte para a gente",
    cta: {
      title: "Venha *olhar por dentro*.",
      lead:
        "O cadastro é gratuito e guiado. Se preferir que a gente mostre antes, peça uma demo e percorremos com os seus dados.",
      steps: [
        "Você cria a empresa e a propriedade.",
        "Carrega quartos e unidades.",
        "O motor e o site ficam prontos para publicar.",
      ],
    },
  },

  reservas: {
    meta: {
      title: "Reservas e quartos",
      description:
        "O coração operacional: painel do dia, calendário tape chart com mover e redimensionar, entrada manual, tarifas, disponibilidade, promoções e o inventário físico com seus seis status.",
    },
    hero: {
      eyebrow: "Reservas e quartos",
      title: "O dia a dia, *em uma só grade*.",
      lead:
        "Oito telas para a operação comercial e três para o inventário físico. Todas sobre o mesmo dado, então mover uma reserva no calendário muda o status do quarto, libera a noite no motor e aparece no relatório.",
    },
    calendar: {
      eyebrow: "Calendário",
      title: "Você arrasta a reserva e *vê o que vai acontecer* antes de soltar.",
      lead:
        "A grade é quarto por dia, agrupada por categoria. Uma reserva se move de quarto ou de datas arrastando, e antes de aplicar a mudança o sistema mostra a prévia: se há conflito e o que acontece com o preço.",
      items: [
        "Barras de bloqueio por manutenção ou uso interno, criáveis do próprio calendário e com a mesma trava de uma reserva.",
        "Popover de detalhe ao clicar, sem sair da tela.",
        "Toolbar com navegação por mês ou intervalo, hoje, busca por hóspede ou código, filtro por categoria e por status.",
        "Estatísticas por categoria e por dia acima da grade.",
      ],
    },
    views: {
      eyebrow: "As oito telas",
      title: "Cada momento do turno, *a sua tela*.",
      items: [
        {
          title: "Painel do dia",
          desc: "Check-ins e check-outs do dia, com dois dias visíveis e navegação. É a tela com que a recepção abre o turno, com cartões acionáveis.",
        },
        {
          title: "Todas as reservas",
          desc: "Lista com filtros e um painel lateral que abre sem sair da lista: resumo, atividade e notas. Dali se atribui unidade, muda status e editam-se notas internas.",
        },
        {
          title: "Calendário",
          desc: "O tape chart: quarto por dia, mover e redimensionar com prévia, bloqueios, filtros e estatísticas.",
        },
        {
          title: "Nova reserva",
          desc: "Entrada manual ou walk-in com busca do hóspede, categoria, datas, ocupação por idade, canal de origem, promoções e notas.",
        },
        {
          title: "Tarifas",
          desc: "Preço base por categoria mais planos tarifários com vigência, preço por noite, moeda, estadia mínima e ativação.",
        },
        {
          title: "Disponibilidade",
          desc: "Grade com semáforo — livre, parcial, cheio, fechado — e restrições por dia: fechado, fechado na chegada, fechado na saída, estadia mínima e máxima.",
        },
        {
          title: "Promoções",
          desc: "Assistente de três passos, automáticas ou com código, por porcentagem, valor fixo ou preço fixo por noite, com restrições e sua apresentação no site público.",
        },
        {
          title: "Configuração do motor",
          desc: "Moeda, confirmação, regras de estadia, calendário informativo, camada agêntica e horários. Mais o modelo de reservas: modo de venda e estratégia de atribuição.",
        },
      ],
    },
    chain: {
      eyebrow: "Cadeia de preços",
      title: "Quatro passos, *sempre na mesma ordem*.",
      lead:
        "Quando o motor precisa dizer quanto custa uma noite, resolve esta cadeia. Saber em que degrau está cada preço é a diferença entre confiar no sistema e auditá-lo à mão toda manhã.",
      stepLabel: "passo {n}",
      steps: [
        {
          title: "Override do RMS",
          desc: "Se há uma recomendação de revenue aceita para aquela data, é ela que manda.",
        },
        {
          title: "Plano tarifário",
          desc: "O plano vigente para aquela categoria e aquela data, com sua moeda e seu mínimo de noites.",
        },
        {
          title: "Preço base",
          desc: "O da categoria. É o que o motor cobra enquanto você não carregar tarifas.",
        },
        {
          title: "Promoções",
          desc: "Aplicam-se por cima do preço que saiu dos três passos anteriores.",
        },
      ],
    },
    rooms: {
      eyebrow: "Quartos",
      title: "O inventário físico, *com status que não mentem*.",
      lead:
        "Seis status operacionais — disponível, ocupado, limpeza, manutenção, bloqueado e saída pendente — e uma matriz que define qual transição é válida. De 'ocupado' só se pode ir para 'saída pendente': o quadro não aceita status impossíveis.",
      items: [
        "**Status dos quartos**: quadro ao vivo com filtros por andar e categoria, e painel de detalhe com o histórico completo de mudanças — quem, quando e com que nota.",
        "**Planta de ocupação**: visão espacial por andar com navegação de data, para ler a casa de relance.",
        "**Gestão**: categorias com capacidade, preço base, fotos, comodidades e modo de venda auditado; unidades com código único, andar, capacidade própria e **criação em massa com prévia**.",
      ],
    },
    detail: {
      eyebrow: "Detalhe da reserva",
      title: "Tudo o que aconteceu com aquela reserva, *em uma ficha*.",
      items: [
        {
          title: "Linha do tempo de status",
          desc: "Pendente, confirmada, check-in, check-out, mais cancelada e no-show. Com as ações disponíveis conforme o ponto em que está.",
        },
        {
          title: "Serviços contratados",
          desc: "Spa, café da manhã, late check-out, com quantidade, data e status. Preço e título congelam ao contratar: uma reserva antiga continua mostrando o que se cobrou então.",
        },
        {
          title: "Valores em duas moedas",
          desc: "O valor na moeda base e na moeda de cobrança, com a conversão viva até o check-in e congelada a partir dali.",
        },
        {
          title: "Canal de origem fino",
          desc: "Direto, telefone ou OTA, com identificador pontual — booking.com, airbnb, direct-web, phone-front-desk — para que o relatório por canal sirva para algo.",
        },
        {
          title: "Notas e pedidos especiais",
          desc: "Notas internas do time separadas dos pedidos do hóspede, para ninguém confundir uma coisa com a outra.",
        },
        {
          title: "Log de auditoria",
          desc: "Cada mudança relevante fica registrada, incluindo todo ajuste manual de valores. É o que se olha quando a conta não fecha.",
        },
      ],
    },
    faq: [
      {
        q: "O que acontece se duas pessoas reservam a mesma noite ao mesmo tempo?",
        a: "Uma das duas falha. Cada noite de cada quarto é uma **trava única no banco de dados** — a chave é a unidade mais a data —, então a segunda escrita não entra. Não é uma validação no código que a concorrência consiga driblar: é o banco que impede.",
      },
      {
        q: "Posso lançar reservas que entraram por telefone ou WhatsApp?",
        a: "Sim, e convém. A entrada manual tem busca do hóspede por email, seleção de categoria e datas, ocupação separada em adultos, crianças e bebês — bebês não contam para capacidade nem para preço —, promoções e **canal de origem**. Esse último campo é o que depois te diz que parte das suas reservas ainda entra pelo chat.",
      },
      {
        q: "Como se decide qual quarto cabe a cada reserva?",
        a: "Depende de dois eixos. Se a categoria é de **unidade única**, há uma só opção. Se é um pool, a propriedade escolhe entre atribuição **manual** — a reserva fica “sem quarto” e a recepção decide — ou **automática**, onde o motor pontua e escolhe, com preferências opcionais de minimizar buracos ou equilibrar o desgaste. Cada reserva congela o modo com que nasceu, então mudar a configuração depois não reescreve a história.",
      },
    ],
    cta: {
      title: "Comece pelo *calendário*.",
      lead:
        "Você carrega os quartos uma vez e já tem a grade, o motor e a disponibilidade inicializada. O resto pode entrar quando quiser.",
      steps: [
        "Você carrega categorias e unidades.",
        "A disponibilidade se inicializa sozinha.",
        "O calendário e o motor ficam operacionais.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Motor de reservas",
      description:
        "A busca e o checkout que o seu hóspede vê: calendário com preço e unidades restantes, sete blocos configuráveis sem código, dois modos de confirmação e emails sem configurar SMTP.",
    },
    hero: {
      eyebrow: "Motor de reservas",
      title: "O link que *substitui a conversa*.",
      lead:
        "Busca, resultados, detalhe, serviços, dados do hóspede e confirmação. É o seu motor, com a sua marca, sem comissão por reserva e com um calendário que diz ao hóspede o que ele precisa para decidir.",
    },
    calendar: {
      eyebrow: "Calendário informativo",
      title: "Um seletor de datas que *responde perguntas*.",
      lead:
        "O calendário comum pede duas datas e pronto. O do motor mostra, dia a dia e conforme o que você habilitar, tudo o que a pessoa ia perguntar por WhatsApp antes de reservar.",
      items: [
        "**Preço a partir de** em cada dia, resolvido pela cadeia de preços real: override do RMS, plano tarifário, preço base e promoções.",
        "**Unidades restantes**, que é o sinal de escassez mais honesto que existe: é o seu inventário, não um contador inventado.",
        "**Bandeiras** de dia fechado, fechado na chegada e fechado na saída, marcadas onde se olha.",
        "**Aviso de mínimo de noites** ao escolher a entrada, para ninguém chegar ao fim do checkout e só ali descobrir.",
        "Um botão mestre desliga tudo e ele volta a ser um seletor de datas comum. É seu, não nosso.",
      ],
    },
    studio: {
      eyebrow: "Estúdio do Motor",
      title: "Sete blocos, *sem tocar em código*.",
      lead:
        "Cada tela do fluxo tem seu bloco de configuração, com seus textos, suas etiquetas e seus estilos. As mudanças se aplicam ao motor sem republicar o site.",
      items: [
        { title: "Busca", desc: "A busca de entrada: campos, etiquetas e o que se pede primeiro." },
        {
          title: "Calendário",
          desc: "O botão mestre e o que o hóspede vê por dia: preços, unidades, bandeiras e avisos.",
        },
        {
          title: "Hóspedes",
          desc: "Como se pedem adultos, crianças e bebês. Bebês não contam para capacidade nem para preço.",
        },
        {
          title: "Listagem",
          desc: "Como se apresentam as categorias disponíveis e que informação acompanha cada uma.",
        },
        {
          title: "Detalhe",
          desc: "A ficha da categoria ou da unidade, com fotos, comodidades e descrição.",
        },
        {
          title: "Serviços",
          desc: "Os extras oferecidos antes de pagar, com sua janela de horário e antecedência mínima.",
        },
        { title: "Checkout", desc: "O formulário final: que dados se pedem e com que textos legais." },
        {
          title: "Tela de sucesso",
          desc: "O que o hóspede vê ao terminar, que é onde se decide se ele volta a te escrever ou não.",
        },
      ],
    },
    agentic: {
      eyebrow: "Camada agêntica",
      title: "E *uma máquina também consegue ler*.",
      lead:
        "Com a camada agêntica ativa, o motor publica seu inventário em formatos pensados para modelos de linguagem, não só para navegadores. É uma aposta explícita de produto rumo à busca generativa.",
      items: [
        "`llms.txt` — a descrição da hospedagem em texto puro.",
        "`availability.json` — a disponibilidade legível por máquina.",
        "`engine-capabilities.json` — quais operações o motor aceita.",
        "JSON-LD estruturado nas páginas do site.",
      ],
      link: "Ver a camada agêntica inteira",
    },
    after: {
      eyebrow: "Depois do checkout",
      title: "A reserva entra *e o sistema segue sozinho*.",
      items: [
        {
          title: "A unidade é atribuída",
          desc: "Conforme o modelo da propriedade: a única unidade possível se for 1:1, a que o motor escolhe se for pool automático, ou nenhuma se você preferir que a recepção decida.",
        },
        {
          title: "O email sai",
          desc: "Do domínio do bookfer, com a sua caixa como responder-a. Sem configurar SMTP, sem domínio verificado, sem mais um provedor de email na lista.",
        },
        {
          title: "A busca fica registrada",
          desc: "Incluindo as buscas **sem disponibilidade**, que são as mais valiosas: alimentam o índice de demanda do RMS e o funil de conversão.",
        },
      ],
      stats: [
        { value: "0%", label: "de comissão por reserva do motor" },
        { value: "10", label: "moedas, com blue, MEP, CCL ou oficial para ARS" },
        { value: "2", label: "modos de confirmação, com expiração automática" },
      ],
    },
    distribute: {
      eyebrow: "Onde vai o link",
      title: "No seu site, na sua bio e *no chat*.",
      lead:
        "O motor é uma superfície, não uma página. Vai embutido no site que você monta com o builder, como página própria, ou como o botão principal do seu LinkHub: a página link-in-bio que você põe no Instagram, com seu QR para baixar.",
      items: [
        "Componente do builder que se conecta sozinho ao seu inventário.",
        "Página própria com a URL da sua hospedagem.",
        "Bloco 'reservar' do LinkHub, com analítica de visitas e cliques.",
        "Botão flutuante de WhatsApp no site, com mensagem pronta, para quem mesmo assim prefere escrever.",
      ],
    },
    faq: [
      {
        q: "O motor vai dentro do meu site ou é uma página à parte?",
        a: "As duas coisas. Embute como componente dentro do site que você monta com o builder, e também existe como página própria em `/sua-hospedagem`. Se você ainda não tem site, o link do motor já é algo que dá para mandar por WhatsApp ou pôr na bio do Instagram.",
      },
      {
        q: "Posso mudar os textos e as cores do checkout?",
        a: "Sim, pelo Estúdio do Motor e **sem tocar em código nem republicar o site**. São sete blocos configuráveis: busca, calendário, hóspedes, listagem, detalhe, serviços, checkout e tela de sucesso, cada um com seus textos, etiquetas e estilos.",
      },
      {
        q: "Quem confirma a reserva?",
        a: "Você escolhe. Num modo a reserva nasce pendente e **o hóspede confirma** com um link com token que chega por email. No outro, fica pendente até **a recepção aceitar**. Nos dois casos as pendentes expiram sozinhas conforme o tempo configurado, então você não fica com noites bloqueadas por alguém que nunca voltou.",
      },
      {
        q: "Preciso configurar um servidor de email?",
        a: "Não. Todos os emails ao hóspede saem do domínio do bookfer, com a caixa da hospedagem como **responder-a**. É uma decisão deliberada: configurar SMTP por hotel é uma das frições clássicas do cadastro de um PMS e aqui simplesmente não existe.",
      },
    ],
    cta: {
      title: "Ponha seu link de reservas *na bio*.",
      lead:
        "Você carrega os quartos e o motor fica operacional com a disponibilidade inicializada. O site e o LinkHub entram depois, quando quiser.",
      steps: [
        "Você carrega categorias, unidades e preços.",
        "Configura o motor no Estúdio.",
        "Compartilha o link e para de perder consultas no chat.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue · RMS",
      description:
        "Revenue management incluído: pace contra seu próprio histórico, comp-set com descoberta automática, eventos de demanda, motor de regras com ensaio a seco e recomendações que empurram a tarifa para o motor.",
    },
    hero: {
      eyebrow: "Revenue · RMS",
      title: "Um preço sugerido *que dá para auditar*.",
      lead:
        "Oito abas de revenue management embutidas no painel: analytics de eixo duplo, pace contra seu próprio histórico, comp-set, eventos de demanda, um motor de regras com ensaio a seco, e um documento de decisão por data que explica cada número.",
    },
    decision: {
      eyebrow: "Decisões",
      title: "A resposta para *“por que você sugere isso?”*",
      lead:
        "Há um documento por propriedade e por data com o rastro completo: que inputs o motor viu, qual era a tarifa base, qual sugeriu, que regras casaram, se um teto foi aplicado, e um log legível linha por linha.",
      items: [
        "Ocupação, índice de demanda, disponibilidade, tarifas de concorrentes, pickup e eventos: tudo o que entrou na conta, com seu valor.",
        "Que regra casou e em que ordem, porque vence a última.",
        "Se o teto mínimo ou máximo foi aplicado, e qual era.",
        "O ciclo de vida da recomendação: sugerida, aceita ou recusada, aplicada, por quem e quando.",
      ],
    },
    rules: {
      eyebrow: "Cenários",
      title: "Treze variáveis, *e um ensaio a seco*.",
      lead:
        "Cada regra avalia uma variável contra uma referência, dentro de uma janela de antecedência, e aplica uma ação. São avaliadas em ordem e vence a última que casa. Antes de ativar qualquer uma, o ensaio a seco mostra o que ela teria feito.",
      items: [
        "**Variáveis**: ocupação, índice de demanda, disponibilidade, tarifa de concorrente 1 a 5, pickup 7d, pickup 30d, impacto de eventos, dias até o evento mais próximo e índice de pace.",
        "**Operadores**: maior, maior ou igual, igual, menor ou igual, menor.",
        "**Ações**: ajuste percentual sobre a base, ou troca de plano tarifário.",
        "**Tetos** de tarifa mínima e máxima, aplicados depois de todo o resto.",
      ],
    },
    comp: {
      eyebrow: "Concorrência",
      title: "Um comp-set *misto e honesto*.",
      lead:
        "Os concorrentes que também usam bookfer trazem tarifa real. Os externos são descobertos sozinhos por proximidade e score de similaridade, e a tarifa deles você carrega — como referência fixa ou por data, que tem prioridade.",
      items: [
        "Score de similaridade por tipo, categoria, tamanho, faixa e região.",
        "Perfil do seu próprio hotel, sincronizado do PMS a menos que você o sobreponha à mão.",
        "Grade de tarifas de concorrentes por data.",
        "Preparado para Lighthouse, RateGain, PriceLabs e KeyData; hoje sem conexão.",
      ],
    },
    rest: {
      eyebrow: "As outras abas",
      title: "Tudo o que há *além do preço*.",
      items: [
        {
          title: "Analytics de eixo duplo",
          desc: "Eixo de criação — quando se reservou — com receita direta e de OTA, cancelamentos, antecedência, buscas e pickup. Eixo de estadia — quando se dorme — com ocupação, ADR, RevPAR e receita. Muitos sistemas misturam os dois e confundem.",
        },
        {
          title: "Pace",
          desc: "Ritmo de venda contra o comportamento histórico da sua própria propriedade, separado por dia da semana, mês e faixa de antecedência. Com curva, pickup e alertas de venda rápida ou lenta com limites configuráveis.",
        },
        {
          title: "Eventos",
          desc: "Feriados, feiras, shows e esportivos, ingeridos automaticamente e curados por você: sugerido, aprovado ou descartado. Um evento aprovado não é sobrescrito pela reingestão. Com score de relevância e impacto esperado.",
        },
        {
          title: "Recomendações",
          desc: "Tarifa atual, sugerida, delta e motivo. Ciclo de vida completo: sugerida, aceita ou recusada, aplicada, expirada ou substituída, com responsável e data.",
        },
        {
          title: "Sinais de demanda",
          desc: "Além das reservas, o índice de demanda usa as buscas do motor, incluindo as que não acharam disponibilidade — o sinal mais subestimado que uma hospedagem pequena tem.",
        },
        {
          title: "Configuração",
          desc: "Comp-set, localização sincronizada do PMS com override manual, perfil do hotel, limites de pace, raio e horizonte de eventos, e tetos de tarifa.",
        },
      ],
    },
    faq: [
      {
        q: "Tenho pouco histórico. O RMS serve mesmo assim?",
        a: "Serve, mas vai te avisar. O benchmark de pace se monta com **o seu próprio histórico**, agrupado por dia da semana, mês e faixa de antecedência, e a interface **expõe o tamanho da amostra**. Se uma célula foi calculada com três reservas, você vai ver. Preferimos isso a te mostrar uma curva confiante construída sobre nada.",
      },
      {
        q: "De onde saem as tarifas da concorrência?",
        a: "De dois lugares. Se o concorrente também usa bookfer, a tarifa é real. Se é externo, o sistema o **descobre sozinho** por geolocalização e score de similaridade — tipo, categoria, tamanho, faixa, região — mas **a tarifa você carrega**, como referência fixa ou por data. A conexão com provedores automáticos está preparada e ainda não conectada; não vamos dizer que sim até que esteja.",
      },
      {
        q: "Se eu aceitar uma recomendação, preciso copiar o preço em outro lugar?",
        a: "Não. Ao aceitá-la, a recomendação **empurra um override de tarifa para o motor de reservas**, que passa a ser o passo 0 da cadeia de preços. O ciclo fecha dentro do sistema. Na maioria dos stacks esse passo é uma pessoa copiando um número de uma tela para outra.",
      },
      {
        q: "Está incluído ou se paga à parte?",
        a: "Depende do plano. Nos sistemas grandes o RMS é quase sempre um módulo adicional cotado à parte; aqui é mais um produto do catálogo. [Veja os planos](/precios) para saber em qual entra.",
      },
    ],
    cta: {
      title: "O preço *deixa de ser um palpite*.",
      lead:
        "O RMS começa a servir assim que você tem histórico próprio, e enquanto não tiver, ele te diz na cara em vez de inventar uma curva.",
      steps: [
        "Você carrega o inventário e as tarifas base.",
        "Monta o comp-set e aprova os eventos da sua região.",
        "Escreve duas ou três regras e testa a seco.",
      ],
    },
  },

  sitios: {
    meta: {
      title: "Site e marca",
      description:
        "Construtor visual com domínio próprio e multi-idioma, componentes conectados aos seus dados, LinkHub para a bio do Instagram, identidade de marca, galerias e avaliações.",
    },
    hero: {
      eyebrow: "Site, marca e LinkHub",
      title: "Sua presença digital, *servida pelo mesmo sistema*.",
      lead:
        "O construtor monta o site com componentes que se conectam sozinhos ao seu inventário, e o renderer publica no seu domínio. Ao lado vivem a identidade de marca, as galerias, as avaliações e o LinkHub que vai na bio do Instagram.",
    },
    builder: {
      eyebrow: "Builder",
      title: "Um editor visual com *componentes que entendem de hotelaria*.",
      lead:
        "Tela com arrastar e soltar, edição direta sobre o texto, menus de contexto e uma biblioteca de componentes organizada em famílias. O que o diferencia de um construtor genérico é a outra metade: os componentes de domínio.",
      items: [
        "**Motor de reservas embutido**, cartões de quarto, categorias, galerias, promoções, avaliações e serviços: todos conectados a dados vivos.",
        "**Editor de estilos** lateral com tipografia, cor, espaçamento e efeitos, mais editor de CSS para casos avançados.",
        "**Editor de imagens** integrado — recorte, filtros, ajustes — e editor de texto rico.",
        "**Assistente de IA do builder** com streaming, para gerar e editar seções.",
        "**Modo simples ou avançado** por subsite, rascunhos e publicação explícita, prévia em vários tamanhos.",
      ],
    },
    published: {
      eyebrow: "O site publicado",
      title: "O que *o hóspede* vê.",
      items: [
        {
          title: "Domínio próprio",
          desc: "Hostnames personalizados por subsite, com registro e resolução. Cada variante de idioma pode ter o seu.",
        },
        {
          title: "Multi-idioma de verdade",
          desc: "Rotas por idioma com título, descrição, capa, favicon e prévia social próprios. Páginas, não tradução automática.",
        },
        {
          title: "Popups",
          desc: "Cinco formatos — modal, slide-in, toast, banner e tela cheia — com modelos, gatilhos, regras de página, prioridade e controle de frequência por visitante.",
        },
        {
          title: "Botão de WhatsApp",
          desc: "Flutuante, com preset visual, canto, tamanho, cores e mensagem pronta. O número sai da propriedade.",
        },
        {
          title: "Analítica",
          desc: "Google Analytics e Google Tag Manager por subsite, preservando as UTMs da campanha até a reserva.",
        },
        {
          title: "Conta do hóspede",
          desc: "Login, cadastro e recuperação integrados ao StayPass, para o hóspede ver e cancelar suas reservas pelo seu site.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO e GEO",
      title: "Para buscadores *e para modelos*.",
      lead:
        "O editor cobre o SEO clássico — título, descrição, capa, favicon, prévia social, ícone da Apple — e acrescenta uma camada pensada para que um modelo de linguagem entenda a sua hospedagem sem ninguém entrar no site.",
      items: [
        "Tipo de entidade, nome e descrição, categorias, casos de uso e domínios de problema.",
        "Públicos-alvo e alcance geográfico.",
        "Sinais de confiança: anos de atividade, quantidade de clientes, certificações e clientes em destaque.",
        "Por página: intenção, tema, contexto semântico e entidades relacionadas.",
      ],
      link: "Ver a camada agêntica",
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "A página que vai *na bio*.",
      lead:
        "Um link-in-bio feito para hospedagens, não um genérico com um botão de 'reservar' que leva a um formulário. Dez tipos de bloco, tema próprio e analítica própria.",
      items: [
        "**Blocos**: link, WhatsApp, reservar, avaliações, texto, galeria, vídeo, mapa, contato e separador. Cada um com título, subtítulo, ícone, miniatura, ordem, destaque e **agendamento por data**.",
        "**Design**: modelos de tema, claro e escuro, fundo sólido, gradiente, imagem ou padrão, sete estilos de botão, cantos e tipografia — incluindo qualquer Google Font.",
        "**Compartilhar**: link e **QR code para baixar** e imprimir na recepção ou no cardápio.",
        "**Analítica**: visitas e cliques por dia, país, referência e dispositivo, sem IP e sem user-agent. As etiquetas ficam guardadas à parte para que renomear um bloco não quebre o histórico.",
      ],
    },
    around: {
      eyebrow: "Ao redor",
      title: "O que *alimenta* tudo isso.",
      items: [
        {
          title: "Identidade de marca",
          desc: "Logo, logo escuro, hero, fundo e quatro fotos; paleta com extração automática do logo; tom, tipografia, tagline, história, públicos, contexto de localização e contato público. Uma só ficha que alimenta o site, o motor, o LinkHub e as fichas de OTA.",
        },
        {
          title: "Galerias",
          desc: "Galerias multimídia da propriedade e dos quartos, com capa, ordem, descrição, imagens e vídeos. Consumidas pelo site, pelo LinkHub e pelas fichas.",
        },
        {
          title: "Avaliações",
          desc: "Próprias e externas, com autor, nota, texto, data, idioma e link. Resposta do hotel, importação em massa por CSV com deduplicação, e estatísticas que alimentam os widgets e os componentes do site.",
        },
        {
          title: "Biblioteca de arquivos",
          desc: "Repositório de imagens, vídeos, áudios e documentos da empresa, com pastas aninhadas e etiquetas. Os apps embutidos podem abri-la e receber o arquivo escolhido.",
        },
        {
          title: "Modelos com autopreenchimento",
          desc: "Cria-se um modelo a partir de um subsite, extraem-se os espaços preenchíveis, e gerar monta um site novo com os dados reais da hospedagem.",
        },
        {
          title: "Presença online",
          desc: "Score de visibilidade auditável, conexões de redes declaradas, ficha do Google Business e fichas de OTA. Hoje está escondida do menu e não publica por API: edita-se e copia-se para o destino.",
        },
      ],
    },
    faq: [
      {
        q: "Preciso carregar meus quartos duas vezes, uma para o site?",
        a: "Não, e esse é o ponto. Os componentes de domínio do builder — motor embutido, cartões de quarto, categorias, galerias, promoções, avaliações e serviços — **se conectam sozinhos aos dados que você já carregou**. Se você sobe uma foto nova numa categoria, ela aparece no site sem ninguém tocar.",
      },
      {
        q: "Posso ter o site em vários idiomas?",
        a: "Sim. Cada site tem variantes por idioma, e cada variante tem sua própria URL, título, descrição, domínio, capa, favicon e prévia social. Não é um tradutor automático em cima de uma página: são páginas.",
      },
      {
        q: "Não sei desenhar. Ainda assim sai algo apresentável?",
        a: "É para isso que existem os modelos com autopreenchimento: toma-se um site como modelo, extraem-se os espaços preenchíveis e “gerar” monta um novo com **os seus dados reais** — marca, fotos, quartos e serviços. Além disso os sites novos começam em modo simples, com os controles avançados escondidos até você procurá-los.",
      },
    ],
    cta: {
      title: "Seu site e seu link, *na mesma tarde*.",
      lead:
        "Se você já carregou marca e quartos, gerar o site com um modelo é questão de minutos, e o LinkHub se autopreenche com os dados da propriedade.",
      steps: [
        "Você carrega identidade de marca e fotos.",
        "Gera o site a partir de um modelo.",
        "Publica no seu domínio e monta o LinkHub.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Bookfer IA",
      description:
        "Um assistente com 272 ferramentas que consulta e opera o PMS com as permissões reais do usuário: filtro antes do turno, contexto no prompt e avaliação em cada chamada.",
    },
    hero: {
      eyebrow: "Bookfer IA",
      title: "Um assistente que *faz*, não que explica onde clicar.",
      lead:
        "Está embutido no painel, tem sessões persistentes e 272 ferramentas que cobrem praticamente toda a superfície do produto. Consulta disponibilidade, cria reservas, move uma estadia com prévia, ajusta tarifas, aprova eventos ou publica um site.",
    },
    perms: {
      eyebrow: "Permissões",
      title: "Opera com *as suas* permissões, não com as dele.",
      lead:
        "É o ponto delicado de qualquer agente dentro de um sistema de gestão, e está resolvido em três camadas aplicadas em momentos diferentes.",
      items: [
        "**Antes do turno** — filtram-se as ferramentas conforme o seu alcance real. O que você não pode usar nem chega a ser oferecido ao modelo.",
        "**No prompt** — explica-se que papel você tem, que apps você tem com e sem acesso, que capacidades, que propriedades, e como responder quando algo está bloqueado.",
        "**Em cada chamada** — a operação concreta é avaliada contra uma tabela de políticas por serviço, que espelha o que os serviços reais exigem e **fecha as lacunas** onde o backend é mais frouxo que a interface.",
        "**Com a sua identidade** — a execução usa uma permissão de vida curta emitida em seu nome e renovada a cada chamada.",
      ],
    },
    tools: {
      eyebrow: "272 ferramentas",
      title: "Praticamente *toda* a superfície do produto.",
      lead:
        "Não é um chatbot com três ações de demonstração. Estão agrupadas por domínio e ainda há ferramentas cruas de leitura e escrita para cobrir os endpoints sem uma dedicada.",
      items: [
        {
          title: "Reservas",
          desc: "Consultar disponibilidade, criar reserva, mudar status, atribuir, desatribuir e auto-atribuir unidade, mover com prévia, notas, ajuste de valor, serviços extras, buscar hóspede e hóspedes frequentes.",
        },
        {
          title: "Tarifas e promoções",
          desc: "Listar, criar, atualizar e excluir planos tarifários e promoções, e ativá-las ou desativá-las.",
        },
        {
          title: "Disponibilidade",
          desc: "Inicializar, sincronizar, restrições por dia e bloqueios de quarto.",
        },
        {
          title: "Quartos",
          desc: "Status dos quartos, unidades e categorias completas, histórico, criação em massa, auditoria do modelo de venda e autocorreção.",
        },
        {
          title: "Revenue",
          desc: "Dashboard, séries diárias, janela de reserva, pace, sinais de demanda, regras com ensaio a seco, decisões, recomendações, eventos e concorrência.",
        },
        {
          title: "Marketing",
          desc: "Sites — criar, publicar, duplicar, páginas, idiomas, SEO e GEO, popups, Estúdio do Motor —, galerias, avaliações, LinkHub e presença online.",
        },
        {
          title: "Empresa e usuários",
          desc: "Perfil, usuários, convites, papéis, status, acessos e busca por email.",
        },
        {
          title: "Sistema",
          desc: "Busca global, notificações e tema do painel. Mais a biblioteca de arquivos completa, com pastas e arquivos.",
        },
      ],
    },
    experience: {
      eyebrow: "A experiência",
      title: "Você vê *o que ele está fazendo* enquanto faz.",
      lead:
        "A resposta chega em streaming com a transcrição do turno à vista. Não é um spinner e depois um parágrafo: é a lista de operações, com seu resultado, enquanto acontecem.",
      items: [
        "Blocos de resposta ricos: cartões de reserva, de revenue e listas acionáveis, não só texto.",
        "Botões dentro dos cartões que executam operações, com a mesma verificação de permissões.",
        "Captura de feedback dentro da conversa, para que o que não funcionou chegue a quem conserta.",
        "Histórico de sessões filtrado pelo espaço de trabalho ativo: a recepção não vê as conversas do marketing.",
      ],
    },
    stats: [
      { value: "272", label: "ferramentas disponíveis" },
      { value: "3", label: "camadas de verificação de permissões" },
      { value: "10", label: "códigos de recusa explícitos" },
      { value: "1", label: "identidade: a sua, com permissão de vida curta" },
    ],
    why: {
      eyebrow: "Por que aqui ele pode mais",
      title: "Porque vê *o sistema inteiro*, não um módulo.",
      lead:
        "Um assistente preso a um só produto responde sobre aquele produto. Como aqui os dados são um só, numa frase se cruzam coisas que em outro stack são três abas e duas exportações.",
      items: [
        "“Como está vindo o feriado prolongado comparado com o ano passado?” — olha o **pace** contra o seu próprio histórico.",
        "“Sobe 10% os duplos de sábado e me avisa se ficar acima do comp-set” — mexe em **tarifas** e consulta **concorrência**.",
        "“Publica a promo de última hora no site” — cria a **promoção** e publica o **site**.",
        "“Quem chega hoje e está sem quarto atribuído?” — cruza **reservas** e **unidades**.",
      ],
    },
    faq: [
      {
        q: "O que acontece se eu pedir algo que meu usuário não pode fazer?",
        a: "Ele explica a permissão que falta, não diz que a função não existe. Há códigos de recusa explícitos — papel insuficiente, capacidade ausente, sem espaço ativo, acesso de app insuficiente, propriedade fora de alcance, troca de senha obrigatória, entre outros — e o assistente traduz qual foi. A diferença importa: “você não tem permissão” se resolve falando com o seu admin, “não existe” te faz procurar outro sistema.",
      },
      {
        q: "O assistente tem acesso total ao sistema?",
        a: "Não tem acesso próprio nenhum. Quando executa algo, faz **assumindo a sua identidade real**, com uma permissão de vida curta reemitida a cada chamada. Se no meio da conversa te revogarem a associação, a operação seguinte falha e o assistente explica. Não há uma conta de serviço com superpoderes por trás.",
      },
      {
        q: "Dá para ver o que ele fez ou é preciso confiar?",
        a: "Dá para ver. Cada turno mostra a transcrição: que ferramenta usou, com que parâmetros e o que voltou. E as respostas não são só texto: voltam como cartões de reserva ou de revenue com botões que executam, sujeitos à mesma verificação de permissões que todo o resto.",
      },
    ],
    cta: {
      title: "Teste com *os seus próprios dados*.",
      lead:
        "O assistente serve de verdade quando tem um sistema carregado embaixo. Comece pelo cadastro, carregue uma propriedade e peça algo que hoje você resolveria abrindo quatro abas.",
      steps: [
        "Você se cadastra e carrega a propriedade.",
        "Entra no Bookfer IA pelo painel.",
        "Pede algo real e olha a transcrição.",
      ],
    },
  },

  agentes: {
    meta: {
      title: "Hospedagem agêntica",
      description:
        "llms.txt, availability.json, engine-capabilities.json, JSON-LD e um editor de GEO: o que é preciso para um modelo de linguagem entender a sua hospedagem e conseguir reservá-la.",
    },
    hero: {
      eyebrow: "Hospedagem agêntica",
      title: "Que uma máquina consiga *te entender e te reservar*.",
      lead:
        "Cada vez mais gente pergunta a um modelo antes de buscar. Esse modelo não vê o seu carrossel de fotos: vê texto, dados estruturados e rotas. O motor do bookfer publica as três coisas, e o editor de GEO deixa você declarar o que é com as suas palavras.",
      secondary: "Ver o motor",
    },
    shift: {
      eyebrow: "A mudança",
      title: "A consulta já não *começa num buscador*.",
      lead:
        "Antes a pergunta era “chalés em Villa La Angostura” e a resposta eram dez links azuis. Agora a pergunta é “onde eu fico quatro noites com duas crianças e um cachorro, a menos de trinta minutos do centro?” e a resposta é um parágrafo com dois ou três nomes. Estar nesse parágrafo depende de haver algo seu que se possa ler.",
      headOld: "O que o SEO clássico otimiza",
      headNew: "O que a camada agêntica acrescenta",
      rows: [
        { old: "Título e descrição para o resultado", now: "Descrição da entidade, em texto puro" },
        { old: "Imagem de capa para o clique", now: "Disponibilidade real legível por máquina" },
        { old: "Palavras-chave na página", now: "Casos de uso, públicos e alcance geográfico" },
        { old: "Links de entrada", now: "Sinais de confiança declarados e verificáveis" },
        { old: "Um formulário de contato", now: "Uma rota de reserva que um agente consegue seguir" },
      ],
    },
    surfaces: {
      eyebrow: "As quatro superfícies",
      title: "O que *o seu motor* publica.",
      lead:
        "Ativa-se com um botão na configuração do motor. A partir daí, a sua hospedagem tem uma cara pública para máquinas além da que já tinha para pessoas.",
      items: [
        {
          title: "llms.txt",
          desc: "Quem você é, o que vende e como se reserva, em texto puro e sem markup. É o arquivo que um modelo lê inteiro sem gastar tokens interpretando HTML.",
        },
        {
          title: "availability.json",
          desc: "A sua disponibilidade real, num formato que uma máquina consegue consultar. Não é um formulário a preencher: é o dado.",
        },
        {
          title: "engine-capabilities.json",
          desc: "Que operações o seu motor aceita e com que parâmetros. É a diferença entre um agente saber que você existe e saber como te reservar.",
        },
        {
          title: "JSON-LD nas páginas",
          desc: "Dados estruturados no site publicado, que é o que os buscadores clássicos já leem e também os modelos quando visitam a página.",
        },
      ],
    },
    editor: {
      eyebrow: "Editor de GEO",
      title: "Você declara o que é *com as suas palavras*, não com as de um robô.",
      lead:
        "O editor vai bem além do SEO clássico. É uma ficha pensada para que um modelo consiga te descrever com precisão mesmo que ninguém entre no seu site.",
      items: [
        "**Tipo de entidade**: hotel, resort, B&B, aluguel de temporada, apartamento, hostel, motel, camping ou hospedagem genérica.",
        "**Categorias, casos de uso e domínios de problema**: para que serve a sua hospedagem, dito do jeito que as pessoas buscam.",
        "**Públicos e alcance geográfico**: a quem você atende e até onde.",
        "**Sinais de confiança**: anos de atividade, quantidade de clientes, certificações e clientes em destaque.",
        "**Controle de indexação por IA** e prioridade: a camada desliga se você não quiser.",
        "**Por página**: intenção (informativa, comercial, transacional, comparativa ou de suporte), tema, contexto semântico e entidades relacionadas.",
      ],
    },
    consistency: {
      eyebrow: "Por que aqui funciona",
      title: "Porque o dado *não se copia*.",
      lead:
        "A razão pela qual um arquivo de disponibilidade pode ser publicado sem medo é a mesma pela qual o calendário do motor mostra unidades restantes de verdade: é o mesmo inventário que o calendário do hotel usa. Não há exportação noturna que possa dessincronizar.",
      items: [
        "Um quarto é carregado uma vez e aparece no motor, no site, no JSON de disponibilidade e no RMS.",
        "Um bloqueio de manutenção tira inventário real e some de todas as superfícies ao mesmo tempo.",
        "A descrição de marca que você carregou alimenta o site, o LinkHub, as fichas de OTA e o llms.txt.",
      ],
    },
    dogfood: {
      eyebrow: "Pregar e praticar",
      title: "Este site também tem o seu *llms.txt*.",
      lead:
        "Seria estranho pedir que a sua hospedagem seja legível por uma máquina e que a página onde pedimos isso não fosse.",
      button: "Ver /llms.txt",
    },
    faq: [
      {
        q: "Isso me garante aparecer quando alguém pergunta ao ChatGPT?",
        a: "Não, e quem disser que sim está mentindo. Ninguém controla o que um modelo recomenda, assim como ninguém controla o ranking do Google. **O que depende de você é que, quando um agente for olhar, encontre algo que consiga entender** — um texto que descreva o que você é, uma disponibilidade legível e uma rota clara para reservar. Uma hospedagem cujo único dado público é um carrossel de fotos no Instagram não tem nada que um modelo possa citar.",
      },
      {
        q: "O que é GEO e em que difere do SEO?",
        a: "O SEO clássico otimiza para que uma pessoa clique num resultado: título, descrição, imagem de capa. **GEO — Generative Engine Optimization —** otimiza para que um modelo consiga te descrever com precisão sem ninguém entrar no seu site: que tipo de entidade você é, para quais públicos, em que região, com que sinais de confiança. São complementares; o editor do sistema tem os dois.",
      },
      {
        q: "Posso decidir que a IA não me indexe?",
        a: "Sim. A camada agêntica do motor liga ou desliga na configuração, e o editor de GEO tem controle de indexação por IA e prioridade. É uma decisão sua, não um padrão que a gente impõe.",
      },
    ],
    cta: {
      title: "Ative *com um botão*.",
      lead:
        "A camada agêntica é mais uma seção da configuração do motor. Se o seu inventário já está carregado, publicar as rotas não leva nada.",
      steps: [
        "Você carrega o inventário e a identidade de marca.",
        "Ativa a camada agêntica no motor.",
        "Preenche o editor de GEO com as suas palavras.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Soluções",
      description:
        "Hotéis, chalés e apartamentos, hostels, glamping e villas, e grupos pequenos: como o bookfer se configura para cada tipo de hospedagem e para cada posto de trabalho.",
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
          desc: "Builder, sites, galerias, avaliações, marca e LinkHub. A home mostra nota de avaliações, visibilidade e status do LinkHub. O hub Reservas nem aparece.",
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
          desc: "Os emails ao hóspede saem do domínio do bookfer, sem serviço de email à parte nem configuração de SMTP por hotel.",
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
    honest: {
      eyebrow: "Antes de você decidir",
      title: "O que um plano do bookfer ainda não inclui",
      text: "Não está em nenhum plano porque ainda não existe, não porque seja um extra: **channel manager** — não há sincronização de inventário nem tarifas com OTAs — e **gateway de pagamento** — não se cobra online. As tarifas de concorrentes externos são carregadas à mão, e as fichas do Google Business e das OTAs se editam dentro mas se copiam ao destino à mão.",
      link: "Ver o estado completo do produto",
    },
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
        "Por que o bookfer existe, como trabalhamos e em que estado está cada parte do produto — incluindo o que ainda não faz.",
    },
    hero: {
      eyebrow: "Sobre nós",
      title: "Software para a hospedagem que *não tem área de TI*.",
      lead:
        "O bookfer nasceu de uma observação simples: um hotel de vinte quartos ou um complexo de seis chalés precisa exatamente das mesmas sete peças que uma rede, e nenhuma das opções do mercado as entrega juntas a um preço que faça sentido nessa escala.",
      secondary: "Ver o produto",
    },
    thesis: {
      eyebrow: "A tese",
      title: "Uma hospedagem pequena não deveria precisar de *cinco fornecedores e um consultor*.",
      p1: "Hoje a saída típica é um PMS de um lado, um motor de outro, um site feito por alguém que já não responde, uma planilha de tarifas e as consultas caindo num WhatsApp que ninguém organiza. Cada peça funciona; o conjunto não. E o trabalho de manter o conjunto alinhado acaba sendo feito à mão pela pessoa da recepção.",
      p2: "A aposta do bookfer é que esse conjunto seja um só sistema com um só banco de dados, que dê para se cadastrar sem ajuda, e que cada posto de trabalho veja apenas o seu. Todo o resto — o RMS, a camada de agentes, o assistente — sai daí: são coisas que só dá para fazer bem quando os dados já são um só.",
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
    status: {
      eyebrow: "Estado do produto",
      title: "O que funciona, o que funciona pela metade e *o que não existe*.",
      lead:
        "Esta tabela é a mesma que usamos internamente para decidir o que se constrói. Publicamos porque a alternativa — você descobrir na terceira semana — não serve para ninguém, muito menos para nós.",
      groups: [
        {
          label: "Sólido e em produção",
          tone: "ok",
          rows: [
            {
              name: "Modelo de venda duplo",
              desc: "Pool de categoria e unidade única 1:1, escolhível por categoria, com detecção de estado misto, autocorreção e assistente de migração com rascunho, prévia e cancelamento.",
            },
            {
              name: "Anti-overbooking",
              desc: "Trava única por unidade e data no banco de dados. Os bloqueios de manutenção usam a mesma trava.",
            },
            {
              name: "Motor de reservas",
              desc: "Fluxo completo com calendário informativo, Estúdio do Motor de sete blocos, dois modos de confirmação e expiração automática das pendentes.",
            },
            {
              name: "Multimoeda",
              desc: "Moeda base, de cobrança e de comparação, com congelamento no check-in, dez moedas e cotação escolhível para ARS — blue, MEP, CCL ou oficial.",
            },
            {
              name: "Calendário tape chart",
              desc: "Mover e redimensionar com prévia do resultado e dos conflitos antes de aplicar.",
            },
            {
              name: "Revenue management",
              desc: "Analytics de eixo duplo, pace com benchmark próprio, comp-set, eventos, regras com ensaio a seco e ciclo fechado até o motor de preços.",
            },
            {
              name: "Builder e renderer",
              desc: "Construtor visual com componentes de domínio, multi-idioma, domínios próprios, popups e editor de SEO e GEO.",
            },
            {
              name: "LinkHub",
              desc: "Dez tipos de bloco, temas, agendamento por data, QR e analítica de visitas e cliques.",
            },
            {
              name: "Bookfer IA",
              desc: "272 ferramentas e política de permissões em três camadas, com assunção de identidade e permissão de vida curta.",
            },
            {
              name: "Suporte e cadastro",
              desc: "37 tours guiados, treinamento por espaço de trabalho e cadastro de nove passos que retoma em outro dispositivo.",
            },
          ],
        },
        {
          label: "Parcial: existe, mas não completo",
          tone: "partial",
          rows: [
            {
              name: "Presença online",
              desc: "Funciona mas está escondida do menu por decisão de produto. As conexões de redes são declaradas — carga manual, sem OAuth real — e a sincronização com OTAs marca status mas não publica.",
            },
            {
              name: "Google Business",
              desc: "A ficha é editável e pode ser marcada como publicada no modelo, mas não há API do Google conectada: hoje se copia ao destino à mão.",
            },
            {
              name: "Tarifas de concorrentes",
              desc: "A descoberta de concorrentes é automática; as tarifas externas são carregadas à mão. Preparado para Lighthouse, RateGain, PriceLabs e KeyData, sem conexão.",
            },
            {
              name: "Contratos e créditos de IA",
              desc: "O plano define que produtos cada empresa tem e os créditos de IA são medidos e reportados, mas ainda não bloqueiam o acesso nem impõem cota.",
            },
            {
              name: "Faturamento",
              desc: "Existe a capacidade de gerenciar faturamento e o plano vive na empresa, mas não há sistema de faturamento conectado.",
            },
          ],
        },
        {
          label: "Ainda não existe",
          tone: "none",
          rows: [
            {
              name: "Channel manager",
              desc: "Não há integração de inventário nem de tarifas com OTAs. A única coisa que existe é um log de eventos que registra cada mudança relevante de uma reserva — criada, confirmada, atribuída, movida, check-in, check-out, cancelada, no-show — pensado para alimentar essa integração quando existir. Hoje é um arquivo para replay e diagnóstico, não uma conexão.",
            },
            {
              name: "Gateway de pagamento",
              desc: "Não se cobra online. O modelo de empresa tem a marca de pagamentos, mas não há gateway: a cobrança é no check-in, presencial, com o câmbio congelado naquele momento.",
            },
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Onde estamos",
      title: "Em piloto de mercado, *de propósito*.",
      lead:
        "Não estamos tentando faturar nesta etapa. Estamos tentando responder quatro perguntas com dados, e as quatro dependem de haver hospedagens usando o sistema para valer, com reservas reais dentro.",
      questions: [
        "O cadastro se completa sozinho, ou há um passo específico onde as pessoas desistem?",
        "Os hóspedes reservam pelo motor, ou o hábito volta ao chat mesmo com o link existindo?",
        "O que pede quem usa para valer, e no que isso difere do que pediu quem testou e não voltou?",
        "Para que o assistente é usado quando ninguém está olhando?",
      ],
      stats: [
        { value: "2026", label: "ano do piloto de mercado" },
        { value: "AR", label: "feito na Argentina, em cinco idiomas" },
        { value: "5", label: "idiomas de plataforma" },
        { value: "0", label: "comissão por reserva do motor" },
      ],
    },
    cta: {
      title: "Se algo disso *soa como o seu problema*.",
      lead:
        "Escreva para a gente e conversamos sem rodeios. Se o bookfer ainda não serve para o seu caso, vamos te dizer nessa mesma conversa.",
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
        "Escreva para a gente e conversamos sem rodeios: o que o bookfer resolve para a sua hospedagem e o que ainda não. Você também pode começar o cadastro grátis por conta própria.",
    },
    eyebrow: "Contato",
    title: "Conte como *você recebe reservas hoje*.",
    lead:
      "Não precisa saber de que módulo você precisa. Saber quantas unidades você tem, se vende em OTAs e que parte do dia se vai respondendo disponibilidade já basta para dizermos se o bookfer te serve — ou se ainda não.",
    checks: [
      "A gente responde dentro do dia útil.",
      "Se algo de que você precisa ainda não existe, dizemos ali mesmo.",
      "Se quiser, fazemos juntos a carga de quartos numa call curta.",
    ],
    directLabel: "Ou escreva direto",
    shortcutTitle: "Prefere não esperar uma resposta?",
    shortcutText:
      "O cadastro é autogerido, gratuito e não pede cartão. Dá para ter o motor funcionando antes de a gente responder este formulário.",
    whatsappMessage: "Oi, quero conhecer o bookfer para a minha hospedagem.",
  },

  legal: {
    updated: "Última atualização",
    updatedDate: "30 de agosto de 2026",
    privacy: {
      meta: {
        title: "Política de privacidade",
        description:
          "Que dados o bookfer coleta neste site e na plataforma, com que fornecedores os processa e como pedir que sejam apagados.",
      },
      title: "Política de privacidade",
      lead: "Que dados coletamos, para quê, com quem os processamos e como pedir que sejam apagados.",
      blocks: [
        { h: "1. Quem somos" },
        {
          p: "O bookfer é uma plataforma de gestão para hospedagens operada a partir da Argentina. Para qualquer questão relacionada aos seus dados pessoais, escreva para [hola@bookfer.com](mailto:hola@bookfer.com).",
        },
        { h: "2. Dois papéis diferentes" },
        { p: "Vale separá-los porque as obrigações não são as mesmas:" },
        {
          ul: [
            "**Este site e a relação comercial com você.** Aqui somos os controladores dos dados: coletamos para falar com você e para entender de onde chegam as consultas.",
            "**A plataforma.** Quando uma hospedagem carrega os dados dos seus hóspedes no bookfer, o controlador desses dados é a hospedagem; nós os processamos por conta dela e conforme suas instruções.",
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
          p: "Não usamos os dados do formulário para nada além de falar com você sobre o bookfer, e não os vendemos nem os cedemos a terceiros para fins publicitários.",
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
          p: "Você pode nos pedir acesso aos seus dados, correção, atualização ou exclusão escrevendo para [hola@bookfer.com](mailto:hola@bookfer.com). Na Argentina, a Agência de Acesso à Informação Pública é a autoridade de controle em proteção de dados pessoais e atende reclamações de quem considerar seus direitos violados.",
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
          "Condições de uso da plataforma bookfer: o que o serviço inclui, o que está em piloto, responsabilidades de cada parte e como encerrar uma conta.",
      },
      title: "Termos e condições",
      lead: "As regras de uso da plataforma, escritas para serem entendidas.",
      blocks: [
        { h: "1. O que é o serviço" },
        {
          p: "O bookfer é uma plataforma na nuvem para gerenciar uma hospedagem: reservas, quartos, motor de reservas público, sites, revenue management, portal do hóspede e um assistente de inteligência artificial. Acessa-se pelo navegador; não se entrega software para instalar.",
        },
        { h: "2. Estado do produto" },
        {
          p: "A plataforma está em **piloto de mercado**. Há funcionalidades declaradas como parciais e outras que não existem — entre elas **channel manager** e **gateway de pagamento**. O detalhe atualizado está publicado em [Estado do produto](/nosotros#estado) e faz parte do que você aceita ao contratar: não prometemos funcionalidades que ali figurem como inexistentes.",
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
        { h: "5. Planos e faturamento" },
        {
          p: "Cada plano define que produtos inclui e que tetos de propriedades e de usuários tem; o publicado em [Preços](/precios) sai do mesmo catálogo com que a sua conta é resolvida. Os períodos gratuitos e os testes duram o que ali se indicar. Não há fidelidade mínima nem multa por encerrar.",
        },
        {
          p: "O motor de reservas não cobra comissão por reserva. A cobrança ao hóspede não passa pelo bookfer: hoje acontece no check-in, entre a hospedagem e o hóspede.",
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
          p: "O software, a marca e a documentação do bookfer são nossos. O conteúdo que você carregar — textos, fotos, logo, design do seu site — é seu, e você nos autoriza a hospedá-lo e exibi-lo unicamente para prestar o serviço.",
        },
        { h: "10. Encerramento" },
        {
          p: "Você pode encerrar sua conta quando quiser escrevendo para [hola@bookfer.com](mailto:hola@bookfer.com). Antes de fechá-la damos um prazo razoável para você baixar o que precisar guardar.",
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
          "Que cookies e tecnologias de medição o site do bookfer usa, quais são necessários e como desativar o resto.",
      },
      title: "Política de cookies",
      lead: "O que este site guarda no seu navegador e o que você pode desativar.",
      blocks: [
        { h: "1. O site público" },
        {
          p: "As páginas de `bookfer.com` são estáticas e não precisam de cookies para funcionar. Não usamos cookies próprios para traçar seu perfil nem para lembrar quem você é entre visitas. O único que pode aparecer é o que guarda o **idioma que você escolheu** no seletor, para não te devolver a outro na próxima visita.",
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
          p: "O aplicativo em `app.bookfer.com` usa sim cookies **necessários**: são os que mantêm a sua sessão. Sem eles não dá para usar o sistema, e não dá para desativá-los sem encerrar a sessão.",
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
          p: "Qualquer dúvida sobre isso, escreva para [hola@bookfer.com](mailto:hola@bookfer.com). Ver também a [política de privacidade](/legal/privacidad).",
        },
      ],
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
