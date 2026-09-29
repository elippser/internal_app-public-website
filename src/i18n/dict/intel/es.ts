/**
 * Intelligence (28-09-2026): el servicio de inteligencia y datos que consume
 * Roombir IA. La tarjeta de la cuarta columna del menú Roombir IA y la página
 * `/producto/intelligence`.
 *
 * Todo lo que se afirma acá existe en el servicio (ver
 * internal-laupser/GLOBAL-INTELIGENCIA-REFERENCIA.md): las áreas, las fuentes
 * oficiales, el dato con su fuente y el "no sé" en vez del cero. Nada de
 * números de fuentes ni de promesas de resultado en cifras.
 */
export const intelEs = {
  card: {
    label: "Intelligence",
    title: "Todo lo que mueve tu demanda, *en un solo lugar*.",
    body: "Eventos, feriados, vuelos y más, de fuentes confiables.",
    more: "Conocer Intelligence",
  },
  page: {
    meta: {
      title: "Intelligence: los datos que mueven tu demanda, en un solo lugar",
      description:
        "El servicio de inteligencia que usa Roombir IA: eventos, feriados, vuelos, clima, tipo de cambio, seguridad y más, de fuentes oficiales, para decidir precios y campañas con todo el contexto.",
    },
    hero: {
      eyebrow: "Intelligence",
      title: "Lo que a un equipo de revenue le lleva horas, *ya está aquí*.",
      lead: "Intelligence reúne en un solo lugar lo que mueve la demanda de tu destino: eventos, feriados de los países que te visitan, vuelos, clima, tipo de cambio, seguridad y mucho más. De fuentes confiables, al día y con la fuente a la vista. Roombir IA lo usa para que cada decisión de precio y de venta se tome con todo el contexto.",
      imageAlt: "El planeta de noche con las rutas que lo conectan",
    },
    problem: {
      eyebrow: "El problema",
      title: "La información existe. *Está dispersa.*",
      lead: "Todo lo que explica por qué una fecha se llena o se cae está en algún lado de la web: en el calendario de otro país, en la agenda de un recinto de ferias, en una alerta de una cancillería. Juntarlo a mano lleva horas, se hace una vez y queda viejo. Así se decide a ciegas.",
      headOld: "Investigándolo a mano",
      headNew: "Con Intelligence",
      rows: [
        {
          time: "Eventos",
          old: "Revisar agendas de estadios, teatros, recintos de ferias y sitios de venta de entradas, ciudad por ciudad.",
          now: "Los eventos, congresos y ferias cerca de tu alojamiento, con fecha y peso, **en una lista**.",
        },
        {
          time: "Feriados",
          old: "Buscar los feriados y las vacaciones escolares de cada país que te visita, uno por uno.",
          now: "Los fines de semana largos **de tus mercados emisores**, con los puentes ya calculados.",
        },
        {
          time: "Viajeros",
          old: "Adivinar si al turista de fuera le conviene venir con el tipo de cambio de hoy.",
          now: "Si **te estás volviendo caro o barato** para quien te visita, con el cambio real y no el nominal.",
        },
        {
          time: "Riesgos",
          old: "Enterarte de una alerta de viaje o un cierre de aeropuerto cuando ya llegaron las cancelaciones.",
          now: "Las alertas de las cancillerías y las amenazas que afectan **a tu aeropuerto**, antes.",
        },
      ],
    },
    areas: {
      eyebrow: "Qué reúne",
      title: "Todo lo que explica tu demanda, *área por área*.",
      lead: "Cada área responde una pregunta concreta sobre tu destino y dice de dónde saca el dato.",
      items: [
        {
          title: "Eventos y espectáculos",
          desc: "Conciertos, obras, festivales y partidos cerca de ti, y las grandes citas que se conocen con años de anticipación.",
        },
        {
          title: "Congresos y ferias",
          desc: "La demanda corporativa: de mitad de semana, de estadía más larga y menos sensible al precio.",
        },
        {
          title: "Calendario y feriados",
          desc: "Feriados, fines de semana largos, vacaciones escolares y fechas comerciales, tuyos y de los países que te visitan.",
        },
        {
          title: "Clima y temporadas",
          desc: "Cómo es el año en tu destino: temporadas, mejores meses, riesgos estacionales y el pronóstico de los próximos días.",
        },
        {
          title: "Movimiento aéreo",
          desc: "Qué aeropuertos te alimentan, qué aerolíneas y rutas se observan llegando, y cómo se llega por tierra.",
        },
        {
          title: "Tipo de cambio y economía",
          desc: "Si tu destino se abarata o se encarece para cada mercado emisor, con inflación y tipo de cambio real.",
        },
        {
          title: "Requisitos de entrada",
          desc: "Quién puede entrar sin trámite previo. Barato, con vuelo y sin visa: la combinación que convierte sola.",
        },
        {
          title: "Seguridad",
          desc: "Las alertas de viaje de los gobiernos de tus mercados y los brotes declarados, separando lo percibido de lo medido.",
        },
        {
          title: "Amenazas naturales",
          desc: "Sismos, tormentas, volcanes y olas de calor que caen cerca o que cierran el aeropuerto que te trae huéspedes.",
        },
        {
          title: "Tu competencia",
          desc: "Cuántos alojamientos hay alrededor, de qué tipo, y cómo se regula el alquiler temporal en tu ciudad.",
        },
        {
          title: "Interés por tu destino",
          desc: "Cuánta atención recibe tu destino en cada idioma. La atención llega semanas antes que la reserva.",
        },
        {
          title: "La demanda que no es turismo",
          desc: "Universidades, hospitales, industria, cosechas y turnos mineros: lo que llena fuera de temporada.",
        },
      ],
    },
    trust: {
      eyebrow: "Confiable",
      title: "Un dato sin fuente *no es un dato*.",
      lead: "Intelligence lee organismos oficiales y fuentes públicas reconocidas, y nunca rellena lo que no sabe.",
      items: [
        "Cada dato llega **con su fuente y su fecha**, para que sepas de dónde sale y qué tan fresco es.",
        "Organismos oficiales y fuentes reconocidas: servicios meteorológicos, cancillerías, bancos centrales, el FMI y el Banco Mundial.",
        "Cuando una fuente no responde, lo dice. **Nunca muestra un cero donde no sabe.**",
        "Distingue lo que se sabe con certeza de lo que sólo se observó: un vuelo que no se vio no es un vuelo que no existe.",
      ],
    },
    ia: {
      eyebrow: "Con Roombir IA",
      title: "Preguntas, y la respuesta *ya viene con el contexto*.",
      lead: "Roombir IA consulta Intelligence cuando le preguntas por tu destino o le pides más reservas, lo cruza con tu ocupación y tus tarifas, y te propone qué hacer.",
      items: [
        "Le preguntas qué pasa en tu destino en marzo y te arma el panorama, con la fuente de cada cosa.",
        "Le pides más reservas y el plan que te propone ya tiene en cuenta los eventos, los feriados y los mercados.",
        "Lo que propone se ejecuta en el sistema: una tarifa, una promoción, una campaña.",
      ],
      link: "Ver Roombir IA",
    },
    decisions: {
      eyebrow: "Mejores decisiones",
      title: "Cada noche, vendida *al precio que corresponde*.",
      lead: "El dinero se pierde en las fechas que se venden baratas porque nadie vio lo que venía, y en las que quedan vacías porque nadie las salió a buscar. Intelligence está para que no te pase ninguna de las dos.",
      items: [
        {
          title: "Subes a tiempo",
          desc: "Ves el congreso, el concierto o el fin de semana largo del país que más te visita antes de que se agote la plaza, no después.",
        },
        {
          title: "No regalas noches",
          desc: "Sabes cuándo la demanda viene sola, así no bajas el precio en las fechas que se iban a llenar igual.",
        },
        {
          title: "Sales a buscar al mercado correcto",
          desc: "Llevas tus campañas al país para el que te volviste más barato, que tiene vuelo y que entra sin visa.",
        },
        {
          title: "Te anticipas",
          desc: "Una alerta de viaje, un aeropuerto cerrado o una ola de calor se ven antes de que lleguen las cancelaciones.",
        },
      ],
    },
    faq: [
      {
        q: "¿Qué es Intelligence?",
        a: "Es el servicio de inteligencia y datos de Roombir. Reúne de fuentes confiables lo que mueve la demanda de un destino —eventos, feriados, vuelos, clima, tipo de cambio, seguridad y más— y lo deja en un solo lugar. Roombir IA lo usa para responderte y para proponerte qué hacer.",
      },
      {
        q: "¿De dónde salen los datos?",
        a: "De organismos oficiales y fuentes públicas reconocidas: servicios meteorológicos, calendarios oficiales, cancillerías, bancos centrales, el FMI, el Banco Mundial, sitios de venta de entradas y agendas de recintos, entre otras. Cada dato se muestra con su fuente y su fecha.",
      },
      {
        q: "¿Tengo que cargar algo?",
        a: "No. Intelligence parte de la ubicación de tu alojamiento. Lo que sí suma es tener tus reservas y tarifas en Roombir, porque así Roombir IA puede cruzar lo que pasa fuera con lo que pasa en tu casa.",
      },
      {
        q: "¿Qué pasa si una fuente no tiene el dato?",
        a: "Te lo dice. Intelligence no inventa ni rellena: si una fuente no respondió o no publica ese dato para tu destino, aparece como desconocido, nunca como cero.",
      },
    ],
    cta: {
      title: "Decide con *todo el contexto*.",
      lead: "Cargas tu alojamiento y Roombir IA empieza a usar Intelligence desde el primer día.",
      steps: [
        "Cargas tu alojamiento y su ubicación.",
        "Le preguntas a Roombir IA por tu destino.",
        "Decides precios y campañas con los datos a la vista.",
      ],
    },
  },
};

export type IntelDict = typeof intelEs;
