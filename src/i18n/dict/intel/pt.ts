/** Intelligence (PT-BR): tradução de es.ts. Mesmas chaves e estrutura. */
import type { IntelDict } from "./es";

export const intelPt: IntelDict = {
  card: {
    label: "Intelligence",
    title: "Tudo o que move a sua demanda, *em um só lugar*.",
    body: "Eventos, feriados, voos e mais, de fontes confiáveis.",
    more: "Conhecer o Intelligence",
  },
  page: {
    meta: {
      title: "Intelligence: os dados que movem a sua demanda, em um só lugar",
      description:
        "O serviço de inteligência usado pela Roombir IA: eventos, feriados, voos, clima, câmbio, segurança e mais, de fontes oficiais, para decidir preços e campanhas com todo o contexto.",
    },
    hero: {
      eyebrow: "Intelligence",
      title: "O que uma equipe de revenue leva horas para levantar *já está aqui*.",
      lead: "O Intelligence reúne em um só lugar o que move a demanda do seu destino: eventos, feriados dos países que visitam você, voos, clima, câmbio, segurança e muito mais. De fontes confiáveis, atualizado e com a fonte sempre à vista. A Roombir IA usa isso para que cada decisão de preço e de venda seja tomada com todo o contexto.",
      imageAlt: "O planeta à noite com as rotas que o conectam",
    },
    problem: {
      eyebrow: "O problema",
      title: "A informação existe. *Só está espalhada.*",
      lead: "Tudo o que explica por que uma data lota ou fica vazia está em algum lugar da web: no calendário de outro país, na agenda de um centro de convenções, em um alerta de um ministério das relações exteriores. Juntar tudo à mão leva horas, é feito uma vez e logo fica desatualizado. Assim se decide às cegas.",
      headOld: "Pesquisando à mão",
      headNew: "Com o Intelligence",
      rows: [
        {
          time: "Eventos",
          old: "Consultar a agenda de estádios, teatros, centros de convenções e sites de ingressos, cidade por cidade.",
          now: "Os eventos, congressos e feiras perto da sua hospedagem, com data e peso, **em uma lista**.",
        },
        {
          time: "Feriados",
          old: "Procurar os feriados e as férias escolares de cada país que visita você, um por um.",
          now: "Os feriados prolongados **dos seus mercados emissores**, com as emendas já calculadas.",
        },
        {
          time: "Viajantes",
          old: "Adivinhar se, com o câmbio de hoje, vale a pena para o turista estrangeiro vir.",
          now: "Se **você está ficando caro ou barato** para quem visita você, com o câmbio real e não o nominal.",
        },
        {
          time: "Riscos",
          old: "Ficar sabendo de um alerta de viagem ou do fechamento de um aeroporto quando os cancelamentos já chegaram.",
          now: "Os alertas dos ministérios das relações exteriores e as ameaças que afetam **o seu aeroporto**, com antecedência.",
        },
      ],
    },
    areas: {
      eyebrow: "O que reúne",
      title: "Tudo o que explica a sua demanda, *área por área*.",
      lead: "Cada área responde a uma pergunta concreta sobre o seu destino e diz de onde vem o dado.",
      items: [
        {
          title: "Eventos e espetáculos",
          desc: "Shows, peças, festivais e jogos perto de você, e os grandes eventos conhecidos com anos de antecedência.",
        },
        {
          title: "Congressos e feiras",
          desc: "A demanda corporativa: no meio da semana, com estadias mais longas e menos sensível ao preço.",
        },
        {
          title: "Calendário e feriados",
          desc: "Feriados, feriados prolongados, férias escolares e datas comerciais, os seus e os dos países que visitam você.",
        },
        {
          title: "Clima e temporadas",
          desc: "Como é o ano no seu destino: temporadas, melhores meses, riscos sazonais e a previsão para os próximos dias.",
        },
        {
          title: "Movimento aéreo",
          desc: "Quais aeroportos alimentam você, quais companhias aéreas e rotas são observadas chegando, e como se chega por terra.",
        },
        {
          title: "Câmbio e economia",
          desc: "Se o seu destino fica mais barato ou mais caro para cada mercado emissor, com inflação e câmbio real.",
        },
        {
          title: "Requisitos de entrada",
          desc: "Quem pode entrar sem trâmite prévio. Barato, com voo e sem visto: a combinação que vende sozinha.",
        },
        {
          title: "Segurança",
          desc: "Os alertas de viagem dos governos dos seus mercados e os surtos declarados, separando o percebido do medido.",
        },
        {
          title: "Ameaças naturais",
          desc: "Terremotos, tempestades, vulcões e ondas de calor que atingem a região ou fecham o aeroporto que traz os seus hóspedes.",
        },
        {
          title: "A sua concorrência",
          desc: "Quantas hospedagens há ao redor, de que tipo, e como o aluguel por temporada é regulamentado na sua cidade.",
        },
        {
          title: "Interesse pelo seu destino",
          desc: "Quanta atenção o seu destino recebe em cada idioma. A atenção chega semanas antes da reserva.",
        },
        {
          title: "A demanda que não é turismo",
          desc: "Universidades, hospitais, indústria, colheitas e turnos de mineração: o que lota fora de temporada.",
        },
      ],
    },
    trust: {
      eyebrow: "Confiável",
      title: "Um dado sem fonte *não é um dado*.",
      lead: "O Intelligence lê órgãos oficiais e fontes públicas reconhecidas, e nunca preenche o que não sabe.",
      items: [
        "Cada dado chega **com a sua fonte e a sua data**, para você saber de onde vem e o quão recente é.",
        "Órgãos oficiais e fontes reconhecidas: serviços meteorológicos, ministérios das relações exteriores, bancos centrais, o FMI e o Banco Mundial.",
        "Quando uma fonte não responde, ele avisa. **Nunca mostra um zero onde não sabe.**",
        "Diferencia o que se sabe com certeza do que só foi observado: um voo que não foi visto não é um voo que não existe.",
      ],
    },
    ia: {
      eyebrow: "Com a Roombir IA",
      title: "Você pergunta, e a resposta *já vem com o contexto*.",
      lead: "A Roombir IA consulta o Intelligence quando você pergunta sobre o seu destino ou pede mais reservas, cruza isso com a sua ocupação e as suas tarifas, e sugere o que fazer.",
      items: [
        "Você pergunta o que acontece no seu destino em março e ela monta o panorama, com a fonte de cada coisa.",
        "Você pede mais reservas e o plano que ela sugere já leva em conta os eventos, os feriados e os mercados.",
        "O que ela sugere é executado no sistema: uma tarifa, uma promoção, uma campanha.",
      ],
      link: "Ver a Roombir IA",
    },
    decisions: {
      eyebrow: "Decisões melhores",
      title: "Cada noite vendida *pelo preço certo*.",
      lead: "O dinheiro se perde nas datas vendidas barato porque ninguém viu o que vinha, e nas que ficam vazias porque ninguém foi atrás delas. O Intelligence existe para que nenhuma das duas coisas aconteça com você.",
      items: [
        {
          title: "Você sobe a tempo",
          desc: "Você vê o congresso, o show ou o feriado prolongado do país que mais visita você antes de as vagas acabarem, não depois.",
        },
        {
          title: "Você não dá noites de presente",
          desc: "Você sabe quando a demanda vem sozinha, e assim não baixa o preço nas datas que iam lotar de qualquer jeito.",
        },
        {
          title: "Você busca o mercado certo",
          desc: "Você leva as suas campanhas para o país em relação ao qual ficou mais barato, que tem voo e entra sem visto.",
        },
        {
          title: "Você se antecipa",
          desc: "Um alerta de viagem, um aeroporto fechado ou uma onda de calor aparecem antes de chegarem os cancelamentos.",
        },
      ],
    },
    faq: [
      {
        q: "O que é o Intelligence?",
        a: "É o serviço de inteligência e dados da Roombir. Reúne de fontes confiáveis o que move a demanda de um destino —eventos, feriados, voos, clima, câmbio, segurança e mais— e deixa tudo em um só lugar. A Roombir IA usa isso para responder você e sugerir o que fazer.",
      },
      {
        q: "De onde vêm os dados?",
        a: "De órgãos oficiais e fontes públicas reconhecidas: serviços meteorológicos, calendários oficiais, ministérios das relações exteriores, bancos centrais, o FMI, o Banco Mundial, sites de ingressos e agendas de espaços de eventos, entre outras. Cada dado aparece com a sua fonte e a sua data.",
      },
      {
        q: "Preciso cadastrar alguma coisa?",
        a: "Não. O Intelligence parte da localização da sua hospedagem. O que ajuda, sim, é ter as suas reservas e tarifas na Roombir, porque assim a Roombir IA consegue cruzar o que acontece lá fora com o que acontece na sua casa.",
      },
      {
        q: "E se uma fonte não tiver o dado?",
        a: "Ele avisa você. O Intelligence não inventa nem preenche: se uma fonte não respondeu ou não publica esse dado para o seu destino, ele aparece como desconhecido, nunca como zero.",
      },
    ],
    cta: {
      title: "Decida com *todo o contexto*.",
      lead: "Cadastre a sua hospedagem e a Roombir IA começa a usar o Intelligence desde o primeiro dia.",
      steps: [
        "Cadastre a sua hospedagem e a localização dela.",
        "Pergunte à Roombir IA sobre o seu destino.",
        "Decida preços e campanhas com os dados à vista.",
      ],
    },
  },
};
