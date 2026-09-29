import type { SolDict } from "./es";

/** Menus do header e páginas de soluções, em português. Mesma forma que `sol/es.ts`. */
const menus: SolDict["menus"] = {
  platform: "Plataforma",
  ia: "Roombir IA",
  solutions: "Soluções",
  platformGroups: {
    operations: "Operações",
    distribution: "Distribuição",
    marketing: "Marketing",
  },
  platformItems: {
    pms: { title: "Propriedades, quartos e reservas", desc: "Carrega uma vez e opera no painel do dia, na lista e no calendário." },
    informes: { title: "Relatórios", desc: "Ocupação, receita, canais e o que está cadastrado errado." },
    motor: { title: "Motor de reservas", desc: "O calendário onde o hóspede vê o preço e reserva sozinho." },
    revenue: { title: "Revenue", desc: "O preço de cada data, com o porquê." },
    linkhub: { title: "LinkHub", desc: "O link da sua bio, com o motor dentro." },
    agentes: { title: "Legível para uma IA", desc: "Sua hospedagem, compreensível e reservável por um assistente." },
    web: { title: "Site", desc: "Um editor com assistente, conectado às suas reservas." },
    marca: { title: "Marca", desc: "Logo, paleta e tom, cadastrados uma vez." },
    archivos: { title: "Fotos e arquivos", desc: "Biblioteca e galerias em um só lugar." },
    resenas: { title: "Avaliações", desc: "Avaliações de várias fontes, respondidas daqui." },
  },
  platformFoot: "Tudo sobre uma única base de dados.",
  platformLink: "Ver a plataforma completa",
  iaFeatured: {
    label: "O assistente",
    title: "Roombir IA",
    desc: "Toda a gestão, em uma conversa. Você pede e ele faz, com as suas permissões.",
    more: "O que você pode pedir",
  },
  iaLabel: "O que faz",
  // El único enlace del menú Roombir IA (las secciones son anclas de la misma página).
  iaLink: "Tudo sobre o Roombir IA",
  iaItems: {
    pedidos: { title: "O que você pode pedir", desc: "Reservas, tarifas, quartos e site, em uma frase." },
    destino: { title: "Status turístico", desc: "Feriados, eventos, clima e voos do seu destino, com fonte." },
    estrategia: { title: "Turno estratégico", desc: "Você pede mais reservas e ele propõe um plano que se executa." },
    permisos: { title: "Permissões", desc: "Opera com as suas permissões, não com as dele." },
    hablar: { title: "Como falar com ele", desc: "Por escrito, por voz ou mostrando uma captura de tela." },
    diferencia: { title: "A diferença", desc: "Por que não é um chat de IA de uso geral." },
  },
  solutionGroups: {
    byType: "Por tipo de hospedagem",
    byRole: "Por cargo",
  },
  solutionItems: {
    hoteles: { title: "Hotéis, apart-hotéis e hostels", desc: "Você vende a categoria e o sistema atribui o quarto." },
    alojamientos: { title: "Chalés e temporada", desc: "Cada unidade com nome, fotos e preço próprios." },
    propietarios: { title: "Proprietários", desc: "O negócio à vista, sem estar na recepção." },
    direccion: { title: "Gerência geral", desc: "A operação e a equipe em um só sistema." },
    revenue: { title: "Revenue managers", desc: "O preço de cada data, com o rastro completo." },
    recepcion: { title: "Recepção", desc: "O turno inteiro a partir do painel do dia." },
    housekeeping: { title: "Governança", desc: "O status de cada quarto, pelo celular." },
  },
  solutionsLink: "Ver todas as soluções",
  more: "Mais",
};

const index: SolDict["index"] = {
  byType: {
    eyebrow: "Por tipo de hospedagem",
    title: "Duas formas de vender, *um mesmo sistema*.",
    lead: "Há hospedagens que vendem uma categoria e atribuem o quarto depois, e outras que vendem cada unidade com nome próprio. O Roombir faz as duas, e as duas ao mesmo tempo na mesma propriedade.",
  },
  byRole: {
    eyebrow: "Por cargo",
    title: "Cada função, *seu espaço de trabalho*.",
    lead: "Os espaços modelo dos cargos mais comuns: o que cada um vê, o que resolve e como se conecta com o resto da equipe.",
  },
  open: "Ver a solução",
};

const pages: SolDict["pages"] = {
  hoteles: {
    meta: {
      title: "Hotéis, apart-hotéis e hostels",
      description:
        "Roombir para hospedagens que vendem por tipo de quarto: o hóspede reserva uma categoria e o sistema atribui o quarto. Atribuição automática, calendário de fita, status por andar e um assistente que opera.",
    },
    hero: {
      eyebrow: "Soluções · Por tipo de hospedagem",
      title: "Você vende a categoria, *o sistema atribui o quarto*.",
      lead: "Em um hotel, um apart-hotel ou um hostel, o hóspede compra “um duplo superior”, não o 203. O Roombir trabalha assim desde a base: a categoria agrupa quartos intercambiáveis, o motor vende a categoria e o quarto é atribuído sozinho ou decidido pela recepção.",
    },
    space: {
      eyebrow: "Como se vende",
      title: "Uma categoria, *vários quartos iguais*.",
      lead: "Cada categoria é configurada como pool: dez duplos intercambiáveis são vendidos como uma coisa só, com seu preço, suas fotos e suas comodidades. Ao confirmar, o sistema escolhe o quarto.",
      items: [
        "**Atribuição automática** que minimiza os buracos entre reservas ou distribui o desgaste entre os quartos, como você preferir.",
        "**Ou sem atribuir**: a reserva entra na categoria e a recepção decide o quarto pelo calendário.",
        "**Recompactação de atribuições** para liberar buracos quando a ocupação aperta.",
        "**Se você também tem uma suíte ou um chalé único**, essa categoria é vendida com nome próprio na mesma propriedade.",
      ],
    },
    day: {
      eyebrow: "Um sábado de casa cheia",
      title: "O mesmo dia, *com e sem* roombir.",
      lead: "Um hotel de trinta quartos com ocupação alta. À esquerda, o que acontece com planilhas e um motor à parte; à direita, o que o sistema faz.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "08:00",
          old: "Entraram três reservas pelo site durante a noite. É preciso passá-las para a planilha e ver em que quarto cabem.",
          now: "Entraram sozinhas no calendário, atribuídas ao quarto que deixa menos buracos. A recepção as vê no painel do dia.",
        },
        {
          time: "11:30",
          old: "Uma família pede para ficar mais uma noite e o quarto dela está ocupado a partir de amanhã.",
          now: "A recepção estica a reserva no calendário e, antes de soltar, vê o conflito e para qual quarto livre movê-la.",
        },
        {
          time: "13:00",
          old: "A limpeza não sabe quais quartos já ficaram livres.",
          now: "Cada quarto tem seu status (saída pendente, limpeza, disponível) e a governança o atualiza pelo seu espaço.",
        },
        {
          time: "18:00",
          old: "Sobra um duplo livre e ninguém sabe se vale a pena baixar ou manter o preço.",
          now: "O Revenue mostra a recomendação para essa data com o motivo escrito. Se você aceitar, ela entra no motor.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que resolve",
      title: "Pensado para *a operação de um hotel*.",
      items: [
        { title: "Calendário de fita", desc: "Quartos por dia: você arrasta, estica e vê os conflitos antes de soltar. [Ver Reservas](/producto/pms)." },
        { title: "Status por andar", desc: "Seis status com transições válidas, histórico por quarto e uma planta de ocupação por andar." },
        { title: "Uma noite, uma venda", desc: "Cada noite de cada quarto é um bloqueio único na base de dados: duas reservas não podem ficar com a mesma." },
        { title: "Cada função, sua tela", desc: "Recepção, governança, revenue e administração entram no seu próprio espaço de trabalho, com seu menu." },
      ],
    },
    faq: [
      {
        q: "Serve para hostels?",
        a: "Sim, para a operação do dia a dia: painel do dia com chegadas e saídas, um espaço para a governança e tours guiados para a equipe que roda. Cada tipo de quarto é cadastrado como uma categoria com sua capacidade.",
      },
      {
        q: "Posso decidir eu mesmo o quarto em vez do sistema?",
        a: "Sim. A atribuição automática é uma opção: você pode deixar as reservas entrarem sem quarto e atribuí-las você mesmo pelo calendário ou pela lista de reservas.",
      },
      {
        q: "O que acontece se duas pessoas reservarem o último quarto ao mesmo tempo?",
        a: "Uma das duas não entra. Cada noite de cada quarto é um **bloqueio único na base de dados**: não é uma validação que dá para pular, é a própria base que impede.",
      },
    ],
    cta: {
      title: "Cadastre suas categorias e *veja como são atribuídas*.",
      lead: "O cadastro é guiado: você cadastra a propriedade, as categorias e os quartos, e a disponibilidade se inicializa sozinha.",
      steps: [
        "Você cadastra a propriedade e as categorias.",
        "Cria os quartos de uma vez, com cadastro em massa.",
        "Conecta o motor ao seu site e começa a receber reservas.",
      ],
    },
  },

  alojamientos: {
    meta: {
      title: "Chalés, apartamentos e temporada",
      description:
        "Roombir para hospedagens que vendem cada unidade com nome próprio: chalés, apartamentos, villas e glamping. Cada unidade com suas fotos, seu preço e seu calendário, e um motor que mostra a disponibilidade dia a dia.",
    },
    hero: {
      eyebrow: "Soluções · Por tipo de hospedagem",
      title: "Cada unidade é vendida *com nome próprio*.",
      lead: "Ninguém reserva “um chalé de dois ambientes”: reserva o Alerce, com suas fotos, sua vista e seu preço. No Roombir cada unidade é sua própria categoria, com seu calendário, suas tarifas e sua ficha no motor.",
    },
    space: {
      eyebrow: "Como se vende",
      title: "Uma unidade, *uma ficha própria*.",
      lead: "No modo unidade, a categoria envolve exatamente uma unidade. Não há atribuição a resolver nem dúvida sobre o que o hóspede reservou.",
      items: [
        "**Fotos, descrição, capacidade e preço** próprios no motor e no site, unidade por unidade.",
        "**Estadia mínima e dias fechados** por data, para feriados prolongados e alta temporada.",
        "**Bloqueios por meio período**: a manutenção da tarde bloqueia aquela noite e deixa a manhã vendável.",
        "**Se você também tem quartos padrão**, eles convivem: o modo é escolhido por categoria, não para a propriedade inteira.",
      ],
    },
    day: {
      eyebrow: "Uma sexta de feriado prolongado",
      title: "O mesmo dia, *com e sem* roombir.",
      lead: "Um complexo de seis chalés na temporada. À esquerda, o que nos contam na primeira ligação; à direita, o que o sistema faz.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "09:00",
          old: "Dez mensagens no WhatsApp perguntando qual chalé está livre no fim de semana.",
          now: "O link do motor mostra, dia a dia, quais unidades restam e o preço a partir de. Três reservaram sozinhos.",
        },
        {
          time: "12:00",
          old: "Alguém pede duas noites e o mínimo do feriado prolongado é três. É preciso explicar à mão.",
          now: "O motor indica o mínimo de noites ao escolher a entrada. A pergunta nem chega.",
        },
        {
          time: "15:00",
          old: "O Coihue está com um vazamento de água e precisa sair da venda até amanhã.",
          now: "Você bloqueia a tarde para manutenção: aquela noite sai do motor e a manhã seguinte continua vendável.",
        },
        {
          time: "20:00",
          old: "Um turista argentino pergunta o preço em pesos e você calcula o câmbio à mão.",
          now: "O motor mostra o preço na moeda dele. Você recebe na sua e a conversão fica congelada no check-in.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que resolve",
      title: "Pensado para *vender unidades únicas*.",
      items: [
        { title: "Disponibilidade à vista", desc: "Preço a partir de, unidades restantes e dias fechados em cada dia do calendário, antes de escolher as datas. [Ver o motor](/producto/motor)." },
        { title: "LinkHub para sua bio", desc: "O link do Instagram abre o mesmo motor, com a disponibilidade real. [Ver LinkHub](/producto/marketing#linkhub)." },
        { title: "Dez moedas", desc: "O hóspede vê na moeda dele e você recebe na sua. Para pesos argentinos, você escolhe oficial, blue, MEP ou CCL." },
        { title: "Um site com suas unidades", desc: "O editor monta o site com seções que leem suas unidades, suas fotos e suas avaliações. [Ver Marketing](/producto/marketing#web)." },
      ],
    },
    faq: [
      {
        q: "Posso ter chalés e quartos na mesma propriedade?",
        a: "Sim. Os chalés são vendidos como unidade com nome próprio e os quartos como categoria com vários iguais, e convivem no mesmo calendário e no mesmo motor.",
      },
      {
        q: "Cada chalé pode ter seu preço?",
        a: "Sim. Cada unidade tem seu preço base e pode ter planos tarifários e promoções próprios, com estadia mínima por data.",
      },
      {
        q: "Serve para glamping e villas?",
        a: "Sim: para qualquer hospedagem em que cada unidade é diferente e é vendida pelo nome. Domos, casas, apartamentos ou villas são cadastrados igual a um chalé.",
      },
    ],
    cta: {
      title: "Cadastre suas unidades e *compartilhe o link*.",
      lead: "O cadastro é guiado. Você cadastra cada unidade com suas fotos e seu preço, e o motor fica pronto para enviar pelo WhatsApp ou colocar na sua bio.",
      steps: [
        "Você cadastra a propriedade e cada unidade com suas fotos.",
        "Configura estadias mínimas e datas fechadas.",
        "Compartilha o link do motor ou o coloca no seu site.",
      ],
    },
  },

  propietarios: {
    meta: {
      title: "Proprietários",
      description:
        "Roombir para donos de hospedagens: saber como vai o negócio sem estar na recepção, decidir com números e delegar com permissões claras por pessoa e por propriedade.",
    },
    hero: {
      eyebrow: "Soluções · Por cargo",
      title: "Seu negócio à vista, *sem estar na recepção*.",
      lead: "Como dono, você precisa saber como está a ocupação, o que foi vendido e o que está cadastrado errado, sem pedir uma planilha a ninguém. E que cada pessoa da equipe faça a sua parte sem ter acesso a tudo.",
    },
    space: {
      eyebrow: "Seu espaço de trabalho",
      title: "O sistema inteiro, *e quem vê o quê*.",
      lead: "O espaço de administração vê todos os apps do sistema e é dele que se dá acesso ao resto da equipe, pessoa por pessoa e propriedade por propriedade.",
      items: [
        "**Relatórios** de ocupação, diária média, receita e cancelamentos, comparados ao período anterior.",
        "**Status e gestão**: o que está cadastrado errado hoje, como reservas pendentes sem confirmar ou chegadas sem quarto.",
        "**Usuários e capacidades**: dez capacidades administrativas concedidas uma a uma, e acesso limitado às propriedades que correspondem.",
        "**Roombir IA** para perguntar o que não está na tela, em uma frase.",
      ],
    },
    day: {
      eyebrow: "Uma semana de dono",
      title: "A mesma semana, *com e sem* roombir.",
      lead: "Um dono com um hotel e um complexo de chalés, que não está todos os dias no balcão.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "Segunda",
          old: "Você escreve ao gerente para saber como fechou o fim de semana. Ele responde ao meio-dia com uma foto da planilha.",
          now: "Você abre Relatórios pelo celular: ocupação, receita e cancelamentos do período, com a diferença em relação ao anterior.",
        },
        {
          time: "Terça",
          old: "Você fica sabendo por um hóspede que a reserva dele nunca foi confirmada.",
          now: "Status e gestão aponta as reservas pendentes sem confirmação há mais de um dia, antes que o hóspede chegue.",
        },
        {
          time: "Quinta",
          old: "Entra alguém novo na recepção e você passa o seu usuário porque não há outro.",
          now: "Você cria o usuário dele no espaço de recepção, limitado àquela propriedade. Ele não vê revenue nem a configuração.",
        },
        {
          time: "Sexta",
          old: "Você se pergunta qual canal traz mais reservas e qual cancela mais.",
          now: "Você pergunta ao Roombir IA e ele responde com o número e de onde ele vem.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      title: "Decidir com números, *delegar com permissões*.",
      items: [
        { title: "Relatórios sem planilha", desc: "Calculados sobre as mesmas reservas que sua equipe opera. [Ver Relatórios](/producto/informes)." },
        { title: "Várias propriedades", desc: "Um hotel e alguns chalés na mesma conta, cada um com sua moeda e sua equipe. [Ver Propriedades](/producto/pms)." },
        { title: "Permissões de verdade", desc: "Cada pessoa entra com seu usuário, no seu espaço e nas suas propriedades. As operações sensíveis ficam registradas." },
        { title: "Um assistente que responde", desc: "O Roombir IA lê os mesmos dados e responde com o número, ou faz a alteração se você pedir. [Ver Roombir IA](/producto/ia)." },
      ],
    },
    faq: [
      {
        q: "Posso acompanhar o negócio pelo celular?",
        a: "Sim. O sistema é usado pelo navegador e foi pensado para celular e tablet, não só para o computador da recepção.",
      },
      {
        q: "O que vê a equipe que eu contrato?",
        a: "Só o que você libera: o espaço de trabalho define o menu e a tela inicial, e o acesso por propriedade define quais hospedagens a pessoa vê. A governança, por exemplo, não vê tarifas.",
      },
      {
        q: "Preciso instalar alguma coisa?",
        a: "Não. O acesso é pelo navegador, e o cadastro são nove passos guiados que você pode deixar pela metade e continuar em outro dispositivo.",
      },
    ],
    cta: {
      title: "Veja sua hospedagem *como o sistema a vê*.",
      lead: "Você se cadastra, cadastra a propriedade e na mesma tarde tem os relatórios prontos. Se preferir que a gente mostre antes, fazemos o tour juntos.",
      steps: [
        "Você cria a empresa e a primeira propriedade.",
        "Convida sua equipe, cada um para o seu espaço.",
        "Acompanha o negócio por Relatórios e pelo Roombir IA.",
      ],
    },
  },

  direccion: {
    meta: {
      title: "Gerência geral",
      description:
        "Roombir para gerentes e diretores gerais: a operação do dia, a equipe e os números no mesmo sistema, com um espaço de trabalho por função e uma seção que avisa o que está cadastrado errado.",
    },
    hero: {
      eyebrow: "Soluções · Por cargo",
      title: "A operação inteira, *em um só sistema*.",
      lead: "Dirigir uma hospedagem é coordenar recepção, limpeza, vendas e números que costumam viver em ferramentas diferentes. No Roombir é um só sistema: cada função trabalha no seu espaço e você vê o conjunto.",
    },
    space: {
      eyebrow: "Seu espaço de trabalho",
      title: "Ver o conjunto *sem entrar em cada área*.",
      lead: "O espaço de administração reúne todas as áreas do sistema, e é nele que se define o que cada função vê e pode fazer.",
      items: [
        "**Painel do dia** com as chegadas, as saídas e as reservas que precisam de uma ação.",
        "**Status e gestão**: o que está cadastrado errado hoje, antes que vire um hóspede sem quarto.",
        "**Espaços de trabalho por função**: você define quais apps a recepção, a governança, o marketing ou o revenue veem.",
        "**Integração por espaço**: cada pessoa nova tem os tours guiados dos apps da sua função.",
      ],
    },
    day: {
      eyebrow: "Um dia de gerência",
      title: "O mesmo dia, *com e sem* roombir.",
      lead: "Um hotel de quarenta quartos com uma equipe de doze pessoas em turnos.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "08:00",
          old: "A reunião da manhã começa juntando dados de três sistemas e uma planilha.",
          now: "O painel do dia e os relatórios já têm chegadas, saídas, ocupação e o que ficou pendente.",
        },
        {
          time: "10:30",
          old: "Entra uma recepcionista nova e alguém explica o sistema para ela no meio do turno.",
          now: "O espaço de recepção dela traz os tours guiados de cada tela, sobre a interface real.",
        },
        {
          time: "14:00",
          old: "Uma reclamação: um quarto foi entregue sem limpeza e ninguém sabe o que aconteceu.",
          now: "O histórico do quarto diz quem mudou cada status, a que horas e com qual nota.",
        },
        {
          time: "17:00",
          old: "Revenue, site e reservas se coordenam por mensagens entre três pessoas.",
          now: "Os três trabalham sobre os mesmos dados: a tarifa aceita no Revenue já está no motor e no site.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      title: "Uma equipe coordenada *pelo mesmo sistema*.",
      items: [
        { title: "Espaços por função", desc: "Cada função com seu menu, sua tela inicial e suas permissões: operar, configurar ou nada." },
        { title: "Tours guiados", desc: "38 tours que aparecem sobre a tela real e montam a integração de cada pessoa nova." },
        { title: "Histórico por quarto", desc: "Quem mudou cada status, quando e com qual nota. [Ver Quartos](/producto/pms)." },
        { title: "Relatórios e revenue", desc: "Os números da operação e o preço de cada data com o porquê. [Ver Revenue](/producto/revenue)." },
      ],
    },
    faq: [
      {
        q: "Posso limitar o que cada função vê?",
        a: "Sim. O espaço de trabalho define o menu e a tela inicial, e as permissões são por app e por nível: operar, configurar ou nada.",
      },
      {
        q: "E a equipe que roda?",
        a: "Cada pessoa nova entra no seu espaço com os tours guiados dos seus apps. E o usuário pode ser criado com uma senha temporária que precisa ser trocada no primeiro acesso.",
      },
      {
        q: "Serve se eu gerencio mais de uma hospedagem?",
        a: "Sim. Várias propriedades convivem na mesma conta e o acesso de cada pessoa se limita às que lhe cabem.",
      },
    ],
    cta: {
      title: "Monte os espaços da sua equipe *em uma tarde*.",
      lead: "O cadastro cria a propriedade e propõe os espaços de trabalho conforme a sua operação. Depois você convida cada pessoa para o seu.",
      steps: [
        "Você cria a propriedade e escolhe como opera.",
        "Ajusta os espaços de trabalho por função.",
        "Convida a equipe, cada um para o seu espaço.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue managers",
      description:
        "Roombir para revenue managers: o preço de cada data com o rastro do porquê, pace contra o seu próprio histórico, concorrência, eventos do destino e a tarifa que entra no motor ao ser aceita.",
    },
    hero: {
      eyebrow: "Soluções · Por cargo",
      title: "O preço de cada data, *com o rastro completo*.",
      lead: "Um revenue manager não precisa de outra caixa-preta que devolva um número. Precisa ver quais dados foram usados, qual regra coincidiu e qual teto foi aplicado, e que a tarifa aceita chegue ao motor sem copiá-la à mão.",
    },
    space: {
      eyebrow: "Seu espaço de trabalho",
      title: "Revenue, relatórios e tarifas, *no mesmo lugar*.",
      lead: "O espaço de revenue reúne o RMS com as tarifas, a disponibilidade e os relatórios, sobre os mesmos dados que a recepção opera.",
      items: [
        "**Documento de decisão** por data: os dados vistos, a regra que coincidiu, o teto aplicado e o resultado.",
        "**Pace contra o seu próprio histórico**, por dia da semana, mês e antecedência, com o tamanho da amostra à vista.",
        "**Regras com simulação**: treze variáveis e uma simulação que mostra o que cada regra teria feito antes de ativá-la.",
        "**Concorrência**: descoberta por proximidade e semelhança, e a tarifa dos concorrentes externos você cadastra como referência.",
      ],
    },
    day: {
      eyebrow: "Dez dias antes de um evento",
      title: "A mesma decisão, *com e sem* roombir.",
      lead: "Um hotel em uma cidade com um grande festival daqui a dez dias.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "09:00",
          old: "Você fica sabendo do festival por um hóspede que pergunta se há vaga.",
          now: "O evento já está na lista, sugerido pelo sistema por proximidade e data, esperando sua aprovação.",
        },
        {
          time: "11:00",
          old: "Você compara o ritmo de reservas com o ano passado em duas planilhas.",
          now: "O pace compara com o seu próprio histórico para essas datas e diz sobre quantas reservas foi calculado.",
        },
        {
          time: "15:00",
          old: "Você decide subir a tarifa e pede a alguém que mude o preço no motor.",
          now: "Você aceita a recomendação e a tarifa entra no motor como primeiro degrau do preço dessa data.",
        },
        {
          time: "+7 dias",
          old: "Ninguém lembra por que o preço subiu.",
          now: "O documento de decisão guarda o que o sistema viu, qual regra coincidiu e quem aceitou.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      title: "Decisões que *dá para explicar*.",
      items: [
        { title: "O rastro de cada preço", desc: "Quais dados, qual regra e qual teto, data por data. [Ver Revenue](/producto/revenue)." },
        { title: "O destino com fonte", desc: "Feriados, eventos no seu raio, clima e rotas aéreas observadas, cada dado com sua data. [Ver o status turístico](/producto/ia#destino)." },
        { title: "Ciclo fechado com o motor", desc: "A tarifa aceita é o primeiro degrau da cadeia de preços do motor. [Ver o motor](/producto/motor)." },
        { title: "Perguntas em uma frase", desc: "O Roombir IA lê o pace, os eventos e as tarifas e propõe o que fazer, com a sua confirmação." },
      ],
    },
    faq: [
      {
        q: "Ele aplica os preços sozinho?",
        a: "Por padrão ele sugere, e você aceita ou rejeita cada recomendação. Se você ativar, as recomendações podem ser aplicadas sozinhas.",
      },
      {
        q: "E se eu tiver pouco histórico?",
        a: "A tela avisa: cada cálculo mostra sobre quantas reservas foi feito, e não vende uma confiança que não existe.",
      },
      {
        q: "De onde vêm as tarifas da concorrência?",
        a: "Os concorrentes que também usam roombir fornecem sua tarifa real. Os de fora são descobertos sozinhos por proximidade e semelhança, e a tarifa deles você cadastra como referência fixa ou por data.",
      },
    ],
    cta: {
      title: "O preço *deixa de ser um palpite*.",
      lead: "O Revenue começa a ser útil assim que você tem histórico próprio, e enquanto isso diz com qual amostra está trabalhando.",
      steps: [
        "Você cadastra a propriedade e as tarifas base.",
        "Revisa os eventos e a concorrência do seu destino.",
        "Aceita a primeira recomendação e ela vai para o motor.",
      ],
    },
  },

  recepcion: {
    meta: {
      title: "Recepção",
      description:
        "Roombir para a recepção: o painel do dia, a lista de reservas, o calendário de fita e um assistente que faz as alterações em uma frase, com e-mails ao hóspede que saem sozinhos.",
    },
    hero: {
      eyebrow: "Soluções · Por cargo",
      title: "O turno inteiro, *a partir do painel do dia*.",
      lead: "A recepção vive entre chegadas, saídas, trocas de quarto e perguntas pelo WhatsApp. O espaço de recepção começa no painel do dia e tem à mão tudo o que o turno precisa, e nada do que não precisa.",
    },
    space: {
      eyebrow: "Seu espaço de trabalho",
      title: "O que é do turno, *e nada mais*.",
      lead: "O menu da recepção traz as telas de reservas e o status dos quartos. Revenue, configuração e editor do site ficam em outros espaços.",
      items: [
        "**Painel do dia** com as chegadas e saídas, em cartões acionáveis.",
        "**Todas as reservas** com um painel lateral: resumo, atividade e notas sem sair da lista.",
        "**Calendário de fita**: você arrasta ou estica uma reserva e vê o conflito antes de soltar.",
        "**Nova reserva** para o que entra por telefone ou WhatsApp, com canal de origem e promoções.",
      ],
    },
    day: {
      eyebrow: "Uma terça qualquer",
      title: "O mesmo turno, *com e sem* roombir.",
      lead: "Uma hospedagem de doze unidades e uma pessoa no balcão.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "08:10",
          old: "Três mensagens no WhatsApp perguntando disponibilidade para o fim de semana. Você abre o Excel para responder uma por uma.",
          now: "Você manda o link do motor: preço e unidades restantes, dia a dia. Dois reservaram sozinhos.",
        },
        {
          time: "11:00",
          old: "É preciso passar o García para outro quarto. Você procura a reserva, altera e escreve o e-mail.",
          now: "Você pede ao Roombir IA que o passe para o 203 e avise por e-mail. Ele faz e devolve o cartão com a alteração.",
        },
        {
          time: "14:20",
          old: "Um hóspede pede para ficar mais uma noite e você não sabe se o quarto está livre.",
          now: "Você estica a reserva no calendário e, antes de soltar, vê se ela choca com outra e como o preço muda.",
        },
        {
          time: "17:00",
          old: "É preciso enviar a confirmação de uma reserva por telefone pelo seu e-mail pessoal.",
          now: "Você cadastra em Nova reserva e o e-mail ao hóspede sai sozinho, do domínio da roombir com o seu e-mail como responder-para.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      title: "Menos cliques, *menos mensagens*.",
      items: [
        { title: "Um assistente que faz", desc: "Você move, atribui e avisa com uma frase, com as suas permissões. [Ver Roombir IA](/producto/ia)." },
        { title: "E-mails que saem sozinhos", desc: "As confirmações e os avisos ao hóspede saem sem configurar um servidor de e-mail." },
        { title: "Uma noite, uma venda", desc: "Duas reservas não podem ficar com a mesma noite do mesmo quarto: a base de dados impede." },
        { title: "Tours guiados", desc: "Se você é novo na função, cada tela tem seu tour sobre a interface real. [Ver Reservas](/producto/pms)." },
      ],
    },
    faq: [
      {
        q: "Preciso saber usar um sistema de hotel?",
        a: "Não precisa. Seu espaço traz só as telas da recepção, e cada uma tem um tour guiado que aparece sobre a tela real.",
      },
      {
        q: "Quem confirma as reservas que entram pelo motor?",
        a: "Depende da configuração: o hóspede confirma com um link por e-mail ou você aceita. Nos dois casos, as pendentes expiram sozinhas.",
      },
      {
        q: "Posso usar em um tablet no balcão?",
        a: "Sim. É usado pelo navegador e foi pensado para celular e tablet, além do computador.",
      },
    ],
    cta: {
      title: "Abra o turno *no painel do dia*.",
      lead: "Seu gerente convida você para o seu espaço de recepção e você entra com o seu usuário. Os tours guiados fazem o resto.",
      steps: [
        "Você recebe o convite para o seu espaço.",
        "Faz o tour do painel do dia.",
        "Opera o turno pelas reservas e pelo calendário.",
      ],
    },
  },

  housekeeping: {
    meta: {
      title: "Governança",
      description:
        "Roombir para a governança: o status de cada quarto por andar, mudanças de status que não admitem erros e histórico, em um espaço de trabalho sem tarifas nem revenue.",
    },
    hero: {
      eyebrow: "Soluções · Por cargo",
      title: "O status de cada quarto, *sem perguntar à recepção*.",
      lead: "A limpeza precisa saber quais quartos ficaram livres, quais é preciso preparar para uma chegada e quais estão em manutenção. No Roombir ela vê isso no seu próprio espaço, com um quadro por andar que compartilha os dados com a recepção.",
    },
    space: {
      eyebrow: "Seu espaço de trabalho",
      title: "Status e planta, *sem tarifas*.",
      lead: "O espaço da governança traz o status dos quartos e a planta de ocupação. Não vê tarifas, revenue nem a configuração do motor.",
      items: [
        "**Seis status**: disponível, ocupado, limpeza, manutenção, bloqueado e saída pendente.",
        "**Mudanças que não admitem erros**: de ocupado só se passa para saída pendente; ninguém libera um quarto com o hóspede dentro.",
        "**Quadro por andar e por categoria**, com filtros, para ler a casa de relance.",
        "**Histórico por quarto**: quem mudou cada status, quando e com qual nota.",
      ],
    },
    day: {
      eyebrow: "Uma manhã de saídas",
      title: "O mesmo turno, *com e sem* roombir.",
      lead: "Um hotel com quinze saídas e dez chegadas no dia.",
      headOld: "Hoje",
      headNew: "Com roombir",
      rows: [
        {
          time: "09:00",
          old: "A recepção avisa por telefone quais quartos já foram liberados.",
          now: "Quando a recepção faz o check-out, o quarto passa para saída pendente e aparece no seu quadro.",
        },
        {
          time: "11:00",
          old: "Você terminou o 203, mas a recepção não fica sabendo e continua achando que está sujo.",
          now: "Você o passa para disponível pelo celular e a recepção o vê disponível na tela dela.",
        },
        {
          time: "13:00",
          old: "O 205 está com uma torneira quebrada e o aviso fica num papel.",
          now: "Você o marca em manutenção com uma nota, e a mudança fica no histórico do quarto.",
        },
        {
          time: "15:00",
          old: "Chega um hóspede cedo e ninguém sabe qual quarto está pronto.",
          now: "O quadro por andar mostra quais estão disponíveis neste momento.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      title: "Menos idas e vindas *com a recepção*.",
      items: [
        { title: "Quadro por andar", desc: "A casa inteira de relance, com filtros por andar e por categoria. [Ver Quartos](/producto/pms)." },
        { title: "Pelo celular", desc: "O espaço da governança é usado pelo navegador do celular, dentro do próprio quarto." },
        { title: "Sem informação demais", desc: "Seu menu não tem tarifas nem revenue: só o que o turno precisa." },
        { title: "Tours guiados", desc: "Cada tela traz seu tour sobre a interface real para quem está começando." },
      ],
    },
    faq: [
      {
        q: "A equipe de limpeza vê as tarifas?",
        a: "Não, se você não quiser. O espaço da governança traz seu próprio menu (status dos quartos e planta) sem tarifas nem revenue.",
      },
      {
        q: "Por que não posso passar um quarto ocupado para disponível?",
        a: "Porque o hóspede continua lá dentro. De ocupado só se passa para saída pendente, que chega com o check-out; assim ninguém vende um quarto que ainda está em uso.",
      },
      {
        q: "As mudanças ficam registradas?",
        a: "Sim. Cada quarto guarda seu histórico de status: quem, quando e com qual nota.",
      },
    ],
    cta: {
      title: "Que a limpeza *veja o mesmo* que a recepção.",
      lead: "O gerente cria o usuário no espaço da governança e cada pessoa entra com o seu, pelo celular.",
      steps: [
        "Você recebe o convite para o seu espaço.",
        "Faz o tour do status dos quartos.",
        "Muda status pelo celular, quarto por quarto.",
      ],
    },
  },
};

export const solPt: SolDict = { menus, index, pages };
