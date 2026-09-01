/**
 * El diccionario en castellano.
 *
 * Es la FUENTE DE LA FORMA: `Dictionary` se deriva de este objeto, así que
 * agregar una clave acá y no en los otros cuatro idiomas rompe el typecheck.
 * Ese es todo el mecanismo de sincronización que tiene el sitio, y alcanza.
 *
 * Convenciones del texto:
 * - `*palabra*` en un titular → sale en el serif itálico verde de la marca.
 * - `**negrita**`, `` `código` `` y `[texto](/ruta)` dentro de un párrafo →
 *   los interpreta `RichText`. Las rutas se escriben sin idioma.
 */

const es = {
  site: {
    title: "Bookfer · El sistema operativo de tu alojamiento",
    description:
      "PMS, motor de reservas, sitio web, revenue management y un asistente de IA que opera el sistema. Todo sobre una sola base de datos, para hoteles, cabañas, hostels y alquileres.",
    tagline: "Sistema operativo hotelero",
    /* La tarjeta OG (imagen de compartidos): titular, bajada y chips van por
       diccionario para que un share de /de/plattform no muestre castellano. */
    og: {
      title: "Un alojamiento entero, en un solo sistema.",
      lead: "Reservas, habitaciones, motor propio, sitio web, revenue management y un asistente que opera todo eso con vos.",
      chips: ["PMS", "Motor de reservas", "Sitios web", "Revenue", "LinkHub", "Bookfer IA"],
    },
  },

  nav: {
    product: "Producto",
    platform: "La plataforma",
    contact: "Contacto",
    login: "Ingresar",
    signup: "Empezar gratis",
    home: "bookfer, inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    more: "Más",
    skip: "Saltar al contenido",
    primary: "Principal",
    megaFoot: "Siete productos sobre una sola base de datos.",
    megaLink: "Ver la plataforma completa",
    language: "Idioma",
    links: {
      solutions: "Soluciones",
      pricing: "Precios",
      about: "Nosotros",
    },
    groups: {
      operation: "La operación",
      growth: "El crecimiento",
      newLayer: "La capa nueva",
    },
    products: {
      reservas: {
        title: "Reservas y habitaciones",
        desc: "Panel del día, calendario, tarifas, disponibilidad e inventario físico.",
      },
      motor: {
        title: "Motor de reservas",
        desc: "El buscador y el checkout que ve el huésped, con calendario informativo.",
      },
      revenue: {
        title: "Revenue · RMS",
        desc: "Pace, competencia, eventos y recomendaciones de tarifa con lazo cerrado.",
      },
      sitios: {
        title: "Sitio web y marca",
        desc: "Builder con dominio propio, LinkHub, galerías y reseñas.",
      },
      ia: {
        title: "Bookfer IA",
        desc: "Un asistente con 272 herramientas que opera el sistema con vos.",
      },
      agentes: {
        title: "Alojamiento agéntico",
        desc: "llms.txt, availability.json y JSON-LD: reservable por una IA.",
      },
    },
  },

  footer: {
    claim:
      "El sistema operativo de tu alojamiento. Reservas, habitaciones, motor, sitio web, revenue y un asistente que opera todo eso, sobre una sola base de datos.",
    nav: "Pie de página",
    columns: {
      product: "Producto",
      solutions: "Soluciones",
      company: "Empresa",
      legal: "Legal",
    },
    company: {
      about: "Quiénes somos",
      status: "Estado del producto",
      pricing: "Precios",
      contact: "Contacto",
    },
    legal: {
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
    },
    solutions: {
      hoteles: "Hoteles y aparthoteles",
      cabanas: "Cabañas y departamentos",
      hostels: "Hostels",
      glamping: "Glamping y villas",
      grupos: "Grupos y cadenas chicas",
    },
    madeIn: "Hecho en Argentina",
    agentNote: "este sitio también tiene llms.txt",
    social: {
      instagram: "bookfer en Instagram",
      linkedin: "bookfer en LinkedIn",
      email: "Escribirnos por email",
    },
  },

  common: {
    startFree: "Empezar gratis",
    seePlatform: "Ver la plataforma",
    seePricing: "Ver precios",
    talkToUs: "Hablar con nosotros",
    bookDemo: "Pedir una demo",
    writeUs: "Escribinos",
    seeMore: "Ver más",
    faqTitle: "Preguntas frecuentes",
    noCard: "Sin tarjeta",
    noInstall: "Sin instalar nada",
    guidedSignup: "Alta guiada de nueve pasos",
    inSpanish: "En español, hecho en Argentina",
  },

  ticker: [
    "Motor propio, 0% de comisión",
    "Tape chart con vista previa",
    "Revenue con lazo cerrado",
    "llms.txt · reservable por una IA",
    "272 herramientas del asistente",
    "Multi-moneda de verdad",
    "Emails sin configurar SMTP",
    "LinkHub con QR",
    "Alta guiada en una tarde",
  ],

  /* Los textos que aparecen DENTRO de las viñetas de producto. Son etiquetas
     de pantallas reales del sistema, así que se traducen como se traduce el
     sistema. */
  vignettes: {
    tape: {
      label: "Reservas · Calendario",
      tag: "14 noches",
      units: {
        r101: "101 Doble",
        r102: "102 Doble",
        r103: "103 Superior",
        cabin: "Cabaña Alerce",
        suite: "Suite Norte",
      },
      bars: {
        garcia: "García",
        perez: "Pérez",
        sosa: "Sosa · 4 pax",
        paint: "Pintura",
        ruiz: "Ruiz",
        fresh: "Nueva · sin asignar",
        bianchi: "Bianchi",
        engine: "Motor",
      },
      legend: {
        confirmed: "Confirmada",
        pending: "Pendiente",
        block: "Bloqueo",
        live: "Entró recién",
      },
    },
    calendar: {
      label: "Motor · Calendario informativo",
      tag: "marzo",
      dows: ["lu", "ma", "mi", "ju", "vi", "sá", "do"],
      left3: "3 quedan",
      left2: "2 quedan",
      left1: "1 queda",
      hint: "Mínimo 2 noches para entrar el 14",
    },
    decision: {
      label: "Revenue · Decisión",
      tag: "sáb 21/03",
      subject: "Doble Superior · tarifa sugerida",
      keys: {
        occupancy: "ocupación",
        pace: "pace",
        event: "evento",
        comp: "competencia",
        rule: "regla",
        cap: "tope",
      },
      values: {
        occupancy: "**78%** · umbral de la regla 70%",
        pace: "**+18%** vs. tu propio histórico (sáb · marzo · 15-30 días)",
        event: "Fiesta de la Vendimia · a 3 días · impacto **72**",
        comp: "mediana del comp-set **$101.400** · 4 de 5 cargados",
        rule: "**Ocupación alta + evento** → ajuste +15%",
        cap: "máximo $120.000 · no se aplicó",
      },
      accept: "Aceptar y aplicar al motor",
      reject: "Rechazar",
    },
    agent: {
      label: "Bookfer IA",
      tag: "recepción",
      ask: "Pasá a García a la 203 desde el jueves y avisale por mail",
      trace: [
        { tool: "buscar_reserva", arg: "huésped: García", ok: "1 resultado" },
        { tool: "mover_reserva", arg: "preview", ok: "sin choques" },
        { tool: "asignar_unidad", arg: "203", ok: "ok" },
        { tool: "enviar_email_huesped", arg: "cambio de habitación", ok: "enviado" },
      ],
      answer:
        "Listo. La moví a la 203 del 19 al 22 y le mandé el aviso. La 101 queda libre esas tres noches.",
      card: {
        guest: "Martina García",
        meta: ["203 · Doble Superior", "19 → 22 mar", "2 pax", "Confirmada"],
        see: "Ver reserva",
        undo: "Deshacer",
      },
    },
    spaces: {
      label: "Espacio operativo",
      tag: "Hotel del Parque",
      tabs: ["Recepción", "Housekeeping", "Marketing", "Administración"],
      other: "otro espacio",
      menu: [
        "Panel del día",
        "Todas las reservas",
        "Nueva reserva",
        "Estado de habitaciones",
        "Tarifas y disponibilidad",
        "Revenue · RMS",
        "Builder y sitios",
        "LinkHub",
      ],
    },
    surface: {
      host: "cabanasdelalerce.com",
      intro: "Seis cabañas de montaña en Villa La Angostura, Neuquén.",
      unitsTitle: "## Unidades",
      units: ["- Alerce · 4 pax · 1 dorm · desde USD 78", "- Coihue · 6 pax · 2 dorm · desde USD 112"],
      bookTitle: "## Reservar",
      book: [
        "Disponibilidad legible: /availability.json",
        "Qué acepta el motor: /engine-capabilities.json",
        "Checkout: /reservar?in=&out=&pax=",
      ],
      policyTitle: "## Políticas",
      policy: "Check-in 15:00 · check-out 10:00 · mínimo 2 noches en fin de semana",
    },
    rules: {
      label: "Revenue · Escenarios",
      tag: "4 reglas",
      rows: [
        { cond: "**ocupación** ≥ 70% · ventana 0-14 días", action: "+8%" },
        { cond: "**impacto de eventos** ≥ 60 · ventana 0-7 días", action: "+15%" },
        { cond: "**pickup 7d** ≤ 2 · ventana 0-21 días", action: "−10%" },
        { cond: "**tarifa competidor 1** ≤ base · ventana 0-30 días", action: "plan B" },
      ],
      note:
        "Se evalúan por orden y gana la última que coincide. El ensayo en seco muestra qué haría cada una antes de activarla.",
    },
    comp: {
      label: "Revenue · Competencia",
      tag: "sáb 21/03",
      mine: "Hotel del Parque · vos",
      sources: { own: "propia", bookfer: "bookfer", manual: "manual", none: "sin dato" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Descubrimiento automático por cercanía y similitud. Las tarifas externas se cargan a mano: no inventamos un número que no tenemos.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Reservar online", "WhatsApp", "Fotos de las cabañas", "Cómo llegar", "Reseñas · 4.8"],
    },
    signals: {
      revenue: "revenue · sáb 21/03",
      applied: "aplicada al motor",
      agent: "bookfer ia",
      agentText: "Moví a García a la 203 y le mandé el aviso por mail.",
      agentFoot: "4 herramientas · con tus permisos",
    },
  },

  plans: {
    cta: "Empezar ahora",
    ribbon: "El más elegido",
    free: "Gratis",
    freeFor: "por {n} días",
    perMonth: "por mes",
    perYear: "por año",
    oneTime: "pago único",
    trial: "{n} días de prueba gratis",
    upToProperty: "Hasta {n} propiedad",
    upToProperties: "Hasta {n} propiedades",
    upToUser: "Hasta {n} usuario",
    upToUsers: "Hasta {n} usuarios",
    noPropertyLimit: "Sin límite de propiedades",
    noUserLimit: "Sin límite de usuarios",
    homeTitle: "Un solo sistema, un solo precio",
    homeSubtitle:
      "Todo lo que un alojamiento necesita para operar y vender, sin cinco proveedores y sin comisión por reserva.",
    matrix: {
      caption: "Qué productos incluye cada plan de bookfer",
      product: "Producto",
      limits: "Límites",
      properties: "Propiedades",
      users: "Usuarios",
      trialRow: "Prueba",
      included: "Incluido",
      notIncluded: "No incluido",
      freeDays: "{n} días gratis",
      days: "{n} días",
      note:
        "Los precios y lo que incluye cada plan salen del mismo catálogo que usa el sistema para cobrar. Lo que ves acá es lo que se aplica en tu cuenta.",
    },
  },

  leadForm: {
    name: "Nombre",
    namePlaceholder: "Cómo te llamás",
    email: "Email",
    emailPlaceholder: "vos@tualojamiento.com",
    phone: "Teléfono o WhatsApp",
    phonePlaceholder: "+54 9 11 …",
    company: "Alojamiento",
    companyPlaceholder: "Nombre del hotel, cabañas o apart",
    message: "Contanos cómo recibís reservas hoy",
    messagePlaceholder:
      "Cuántas unidades tenés, si vendés en OTAs, y qué te gustaría dejar de hacer a mano.",
    optional: "opcional",
    submit: "Enviar",
    sending: "Enviando…",
    honeypot: "No completar",
    errorGeneric: "No pudimos enviarlo.",
    errorRate: "Demasiados envíos seguidos.",
    errorTail: "Si sigue fallando, escribinos a hola@bookfer.com.",
    legal:
      "Usamos tus datos sólo para contactarte sobre bookfer. Podés pedirnos que los borremos cuando quieras. Más en la [política de privacidad](/legal/privacidad).",
    doneTitle: "Listo, nos llegó.",
    doneText:
      "Te escribimos en las próximas horas. Si preferís no esperar, podés empezar el alta ahora mismo: es gratis y no pide tarjeta.",
  },

  /* ------------------------------------------------------------------ home */
  home: {
    hero: {
      l1a: "Tu",
      l1b: "alojamiento",
      l2: "entero",
      pill: "Detrás de cada\ngran estadía",
      l3a: "en un solo",
      l3b: "sistema.",
    },
    swap: {
      eyebrow: "Por qué existe",
      title: "Siete productos que *comprás por separado*.",
      lead:
        "Un alojamiento chico o mediano no debería necesitar cinco proveedores y un consultor para operar digitalmente. La tesis de bookfer es exactamente esa, y es lo que decide cada decisión de producto adentro.",
      headOld: "Lo que hoy comprás aparte",
      headNew: "En bookfer",
      rows: [
        { old: "PMS de reservas y habitaciones", now: "Hubs Reservas + Habitaciones" },
        { old: "Motor de reservas / booking engine", now: "Motor público + Estudio del Motor" },
        { old: "Constructor de sitio web", now: "Builder + renderer con dominio propio" },
        { old: "RMS de revenue management", now: "Hub Revenue" },
        { old: "Link-in-bio y presencia digital", now: "LinkHub + Presencia Online" },
        { old: "Portal del huésped", now: "StayPass" },
        { old: "Asistente / automatizaciones", now: "Bookfer IA" },
      ],
    },
    modules: {
      eyebrow: "La plataforma",
      title: "Seis superficies, *ningún puente* entre ellas.",
      lead:
        "No son integraciones que se sincronizan de noche: son vistas distintas de los mismos datos. Cambiar el precio de una categoría se ve en el motor en el momento, sin publicar nada.",
      items: {
        reservas: {
          title: "Reservas",
          desc: "Panel del día, calendario tape chart con arrastrar y redimensionar, carga manual, tarifas, disponibilidad y promociones.",
        },
        habitaciones: {
          title: "Habitaciones",
          desc: "El inventario físico: estado operativo de cada unidad, plano de ocupación y gestión de categorías.",
        },
        motor: {
          title: "Motor de reservas",
          desc: "Tu buscador y tu checkout, con un calendario que muestra precio y unidades restantes día por día.",
        },
        revenue: {
          title: "Revenue · RMS",
          desc: "Pace contra tu propio histórico, comp-set, eventos de demanda, reglas de precio y recomendaciones explicadas.",
        },
        sitios: {
          title: "Sitio web y LinkHub",
          desc: "Constructor visual con dominio propio y multi-idioma, galerías, reseñas, identidad de marca y link-in-bio.",
        },
        ia: {
          title: "Bookfer IA",
          desc: "Un asistente con 272 herramientas que consulta y opera el sistema, siempre con tus permisos y no con los suyos.",
        },
      },
    },
    spaces: {
      eyebrow: "Lo que no tiene nadie más",
      title: "Cada puesto ve *su* sistema, no el tuyo.",
      lead:
        "Recepción, housekeeping, marketing y administración trabajan sobre los mismos datos, pero cada espacio de trabajo tiene su propio menú, su propia pantalla de inicio y sus propios permisos. Nadie aprende a ignorar la mitad de una aplicación.",
      items: [
        "El menú se arma solo: un espacio de marketing **no muestra** el hub Reservas.",
        "La pantalla de inicio se recompone: recepción ve check-ins, housekeeping ve unidades en limpieza.",
        "Los permisos son por app y por nivel: **operar**, **configurar** o nada.",
        "La inducción de una persona nueva se arma con lo que ese espacio tiene, y con nada más.",
      ],
    },
    sale: {
      eyebrow: "Modelo de venta",
      title: "Un hotel y una cabaña *no se venden igual*.",
      lead:
        "Casi todos los sistemas eligen un lado: o son de hotel urbano o son de alquiler vacacional. Acá el modo se define por categoría, y hay un asistente para migrar de uno al otro cuando ya tenés reservas adentro.",
      poolTitle: "Pool de categoría",
      poolText:
        "La categoría agrupa N habitaciones intercambiables. El huésped compra “una Doble Superior”, no la 203, y el motor elige la unidad al confirmar —minimizando huecos o equilibrando el desgaste, como prefieras—. También podés dejarla sin asignar para que recepción decida.",
      poolTag: "Hotel urbano · hostel · aparthotel",
      unitTitle: "Unidad única 1:1",
      unitText:
        "La categoría envuelve exactamente una unidad y se vende con nombre propio. El huésped reserva la cabaña Alerce, con sus fotos, su descripción y su precio, y no hay ninguna ambigüedad sobre qué le tocó.",
      unitTag: "Cabañas · departamentos · glamping · villas",
      unitNames: ["Alerce", "Coihue", "Ñire"],
    },
    engine: {
      eyebrow: "Motor de reservas",
      title: "Un calendario que *vende*, no que pregunta fechas.",
      lead:
        "El datepicker del motor muestra, día por día y según lo que vos habilites, el precio desde, cuántas unidades quedan y qué días están cerrados. Si preferís, se apaga con un interruptor y vuelve a ser un selector de fechas común.",
      items: [
        "Precio desde y unidades restantes en cada día del mes.",
        "Cerrado a la llegada, cerrado a la salida y mínimo de noches, marcados donde se miran.",
        "Siete bloques configurables del checkout, sin tocar código ni republicar el sitio.",
        "Confirma el huésped por email o confirmás vos: las pendientes vencen solas.",
      ],
      link: "Ver el motor completo",
    },
    agentic: {
      eyebrow: "La apuesta",
      title: "Tu alojamiento, *reservable por una IA*.",
      lead:
        "La gente ya no busca solamente en Google: le pregunta a un modelo. Un alojamiento que un agente no puede leer no aparece en esa respuesta. El motor publica su inventario en formatos hechos para máquinas, y el editor de GEO deja declarar qué es tu propiedad, para quién, y qué la hace confiable.",
      items: [
        "**llms.txt** — quién sos, qué vendés y cómo se reserva, en texto plano.",
        "**availability.json** — la disponibilidad real, legible por máquina.",
        "**engine-capabilities.json** — qué operaciones acepta tu motor.",
        "**JSON-LD** en las páginas y editor de GEO por página: intención, entidades y señales de confianza.",
      ],
      link: "Cómo funciona la capa agéntica",
    },
    revenue: {
      eyebrow: "Revenue · RMS",
      title: "Te dice el precio *y por qué*.",
      lead:
        "El RMS no es una caja negra que escupe un número. Cada propiedad y cada fecha tienen un documento de decisión: qué datos vio, qué reglas coincidieron, si se aplicó un tope y cuál fue el resultado, línea por línea.",
      items: [
        "Pace contra **tu propio histórico**, separado por día de semana, mes y anticipación.",
        "Si hay poca historia, la pantalla te lo dice: **no te vende** una confianza que no existe.",
        "Eventos de demanda ingestados solos —feriados, ferias, conciertos— y curados por vos.",
        "Al aceptar una recomendación, la tarifa **entra al motor**. El lazo se cierra sin copiar y pegar.",
      ],
      link: "Ver Revenue",
    },
    ia: {
      eyebrow: "Bookfer IA",
      title: "Un asistente que *opera*, no que sugiere.",
      lead:
        "No es un chat que te explica dónde hacer clic. Consulta disponibilidad, crea reservas, mueve una estadía con vista previa, ajusta tarifas, aprueba eventos del RMS o publica un sitio. Y hace todo eso con tus permisos, no con los suyos.",
      items: [
        "272 herramientas que cubren prácticamente toda la superficie del producto.",
        "Se ve la transcripción del turno: qué herramienta usó y qué devolvió.",
        "Responde con tarjetas accionables, no sólo con texto.",
        "Tres capas de permisos: filtrado antes del turno, contexto en el prompt y evaluación en cada llamada.",
      ],
      link: "Ver Bookfer IA",
    },
    guarantees: {
      eyebrow: "Tres cosas que no vas a tener que pensar",
      title: "Las garantías *estructurales*.",
      items: [
        {
          key: "unidad + fecha",
          title: "Una noche no se puede vender dos veces",
          text: "Cada noche de cada habitación es un candado único en la base de datos, no una validación que se pueda saltear con dos personas reservando al mismo tiempo. Los bloqueos de mantenimiento usan el mismo candado, así que descuentan inventario real y desaparecen del motor.",
        },
        {
          key: "moneda base · cobro · display",
          title: "El importe cobrado no se te mueve después",
          text: "Los precios viven en una moneda base, cobrás en otra, y el huésped puede mirar en una tercera. La conversión se muestra viva hasta el check-in y ahí se congela. Para pesos argentinos elegís qué cotización usar: blue, MEP, CCL u oficial.",
        },
        {
          key: "reservations@bookfer.com",
          title: "No configurás un servidor de correo",
          text: "Todos los mails al huésped —confirmación, token, aviso de cambio— salen del dominio de bookfer con tu casilla como responder-a. Es una de las fricciones clásicas del alta de un PMS y se eliminó a propósito.",
        },
      ],
    },
    stats: {
      eyebrow: "El tamaño real",
      title: "No son promesas: *ya está construido*.",
      lead:
        "bookfer está en piloto de mercado, así que todavía no vamos a mostrarte un contador de hoteles inflado. Lo que sí podemos mostrar es lo que hay adentro del producto hoy.",
      items: [
        { value: "23", label: "apps activables por espacio de trabajo" },
        { value: "272", label: "herramientas que maneja el asistente" },
        { value: "37", label: "recorridos guiados sobre la pantalla real" },
        { value: "10", label: "monedas, con blue, MEP, CCL u oficial para ARS" },
        { value: "5", label: "idiomas de plataforma" },
        { value: "1", label: "sola base de datos para todo el sistema" },
      ],
    },
    marketing: {
      eyebrow: "Marketing",
      title: "Tu web, tu marca y tu link, *servidos por el mismo sistema*.",
      lead:
        "El constructor visual arma el sitio con componentes que se conectan solos a tus datos: el motor embebido, las tarjetas de habitación, las galerías, las promos y las reseñas. Y el LinkHub es la página que va en la bio de Instagram, con su QR y su analítica.",
      items: [
        "Dominio propio y multi-idioma, con su propia URL, portada y preview social por idioma.",
        "Identidad de marca única —logo, paleta extraída del logo, tono, narrativa— que alimenta el sitio, el motor y el LinkHub.",
        "Diez tipos de bloque en el LinkHub, con programación por fecha y analítica de visitas y clics.",
        "Reseñas importables por CSV, con respuesta del hotel y su reflejo en el sitio.",
      ],
      link: "Ver sitio web y marca",
    },
    onboarding: {
      eyebrow: "Alta guiada",
      title: "Te das de alta *solo*, en una tarde.",
      lead:
        "Nueve pasos en tres etapas, con el progreso guardado en el servidor: podés abandonar en la mitad y seguir desde otro dispositivo. En el escritorio te queda una tarjeta para retomar donde estabas.",
      steps: [
        {
          num: "Etapa 1 · pasos 0–4",
          title: "Configuración",
          text: "Tu empresa, tu propiedad con dirección en el mapa, zona horaria y moneda, tu identidad de marca —la paleta se extrae de tu logo— y cómo operás. De ese último paso salen los espacios de trabajo y las apps iniciales.",
        },
        {
          num: "Etapa 2 · pasos 5–7",
          title: "Carga de datos",
          text: "Tipos de habitación y unidades, con creación masiva para no cargar veinte veces lo mismo. Después, las primeras promociones y una revisión del motor. Al cerrar la etapa, la disponibilidad se inicializa sola.",
        },
        {
          num: "Etapa 3 · paso 8",
          title: "Recorridos",
          text: "Cada app que te tocó tiene un recorrido guiado que se dibuja encima de la pantalla real y resalta el elemento del que habla. De ahí en más, cada persona nueva del equipo tiene su inducción según su espacio.",
        },
      ],
    },
    honest: {
      eyebrow: "Estado del producto",
      title: "Lo que *todavía no* hacemos.",
      lead:
        "Estamos en piloto de mercado y preferimos que lo sepas antes de empezar y no en la segunda semana. Estas son las cuatro cosas que un competidor grande tiene y bookfer no, hoy.",
      link: "Ver el estado completo, área por área",
      states: { none: "no existe", partial: "parcial" },
      items: [
        {
          tag: "Channel manager",
          state: "none",
          text: "No hay sincronización de inventario ni de tarifas con OTAs. Hay una bitácora de eventos que registra cada cambio de reserva para cuando se conecte, pero hoy es un archivo, no una integración.",
        },
        {
          tag: "Pasarela de pago",
          state: "none",
          text: "No se cobra online. El cobro es contra el check-in, presencial, con la conversión de moneda congelada en ese momento.",
        },
        {
          tag: "Tarifas de competencia",
          state: "partial",
          text: "El comp-set se descubre solo por cercanía y similitud, pero las tarifas de los competidores externos se cargan a mano. La conexión con proveedores automáticos está preparada y no conectada.",
        },
        {
          tag: "Presencia online",
          state: "partial",
          text: "Las fichas de Google Business y de OTAs se editan y se puntúan dentro del sistema, pero no se publican por API: hoy se copian a mano al destino. Las conexiones de redes son declaradas.",
        },
      ],
    },
    faq: [
      {
        q: "¿Sirve para cabañas y departamentos, o solo para hoteles?",
        a: "Para los dos, y no con el mismo truco. Una categoría se puede vender como **pool** —diez dobles intercambiables, el huésped compra “una doble”— o como **unidad única 1:1**, donde la categoría envuelve una sola unidad con nombre propio. Se elige por categoría, no por sistema, así que un complejo con seis cabañas y dos habitaciones estándar convive sin forzar nada.",
      },
      {
        q: "¿Necesito un channel manager para usar bookfer?",
        a: "No para operar, pero hay que decirlo derecho: **bookfer todavía no tiene channel manager**. Si vendés en Booking o Expedia, esa disponibilidad hoy se concilia a mano. El sistema está pensado para que la reserva directa —tu web, tu LinkHub, tu motor— deje de perderse en un chat, que es de donde sale la mayor parte del ingreso que hoy no estás controlando.",
      },
      {
        q: "¿Cómo cobro las reservas?",
        a: "Contra el check-in, de forma presencial. **No hay pasarela de pago integrada todavía.** Lo que sí hay es multi-moneda de verdad: guardás los precios en una moneda base, cobrás en otra, y la conversión se muestra viva hasta el check-in y ahí se congela para que el importe cobrado no cambie después.",
      },
      {
        q: "¿Tengo que instalar o configurar algo?",
        a: "Se entra por el navegador. El alta son nueve pasos guiados que se guardan en el servidor —podés dejarla por la mitad y seguirla desde el teléfono— y no hay que configurar un servidor de correo: **todos los mails al huésped salen del dominio bookfer** con tu casilla como responder-a.",
      },
      {
        q: "¿Puedo usar mi propio dominio?",
        a: "Sí. Cada sitio publicado admite hostname propio, y cada variante de idioma puede tener el suyo. El LinkHub también tiene su dirección pública, con código QR para imprimir.",
      },
      {
        q: "¿La IA puede hacer cualquier cosa dentro de mi sistema?",
        a: "No, y es a propósito. El asistente opera **suplantando tu identidad real** con un permiso de vida corta que se vuelve a emitir en cada llamada. Antes del turno se le sacan de la mano las herramientas que tu usuario no puede usar, y cada operación se vuelve a evaluar contra la política del servicio. Si a mitad de la conversación te revocan un acceso, la siguiente acción falla y el asistente te explica por qué.",
      },
    ],
    cta: {
      title: "Ponelo a andar *esta semana*.",
      lead:
        "El alta es guiada y no pide tarjeta. Si preferís que te acompañemos en la carga de habitaciones —el paso que más cuesta—, lo hacemos en una llamada corta.",
      steps: [
        "Te das de alta y cargás la propiedad.",
        "Cargamos juntos las habitaciones si querés.",
        "Publicás tu web y tu link de reservas.",
      ],
    },
  },

  /* -------------------------------------------------------------- producto */
  producto: {
    meta: {
      title: "La plataforma",
      description:
        "Siete productos sobre una sola base de datos: reservas, habitaciones, motor, revenue, sitios web, portal del huésped y un asistente de IA. Qué hace cada uno y cómo se conectan.",
    },
    hero: {
      eyebrow: "La plataforma",
      title: "Siete productos, *una sola base de datos*.",
      lead:
        "Todo el staff entra por el mismo escritorio. Habitaciones, reservas y revenue se muestran embebidos adentro, con el contexto y el tema heredados, así que para quien trabaja es una sola aplicación —y para los datos, un solo lugar.",
    },
    desk: {
      eyebrow: "El escritorio",
      title: "Una sola puerta, *y adentro cada uno lo suyo*.",
      lead:
        "El PMS es el chrome: la navegación, el selector de compañía, propiedad y espacio de trabajo, el buscador global y el centro de notificaciones. Las apps de habitaciones, reservas y revenue viven adentro.",
      items: [
        "**Buscador global** con Ctrl/Cmd + K: reservas por código o huésped, propiedades, categorías, unidades y vistas del sistema. Es algorítmico, no generativo — encuentra o no encuentra.",
        "**Tablero adaptativo**: 30 widgets compiten por tres lugares según el espacio activo, y sólo se piden los datos de los que se van a pintar.",
        "**Notificaciones en tiempo real** que enlazan al detalle correcto; si la reserva es de otra propiedad, el sistema cambia de propiedad antes de abrirla.",
        "**Tema claro, oscuro o del sistema**, con color de acento, y se propaga a las apps embebidas.",
      ],
    },
    catalog: {
      eyebrow: "El catálogo",
      title: "23 apps que *se prenden y se apagan*.",
      lead:
        "Una app se activa por espacio de trabajo y con un nivel: operar (el día a día), configurar (además cambia los ajustes) o nada. El espacio de administración ve el catálogo completo, incluidas las apps que se agreguen después.",
      hubs: [
        {
          hub: "Reservas",
          apps: [
            "Panel del día",
            "Todas las reservas",
            "Carga manual",
            "Tarifas",
            "Disponibilidad",
            "Promociones",
            "Configuración del motor",
          ],
        },
        {
          hub: "Habitaciones",
          apps: ["Estado de habitaciones", "Plano de ocupación", "Gestión de categorías"],
        },
        {
          hub: "Marketing",
          apps: ["Builder", "Sitios", "Galerías", "Reseñas", "Marca", "LinkHub", "Presencia online"],
        },
        { hub: "Analítica", apps: ["Informes"] },
        { hub: "Revenue", apps: ["Revenue · RMS"] },
        { hub: "Assets", apps: ["Librería de archivos"] },
        { hub: "Admin", apps: ["Propiedades"] },
      ],
    },
    modules: {
      eyebrow: "Módulo por módulo",
      title: "Qué hace *cada parte*.",
      lead:
        "Cada uno tiene su página con el detalle completo. Todos leen y escriben los mismos datos: no hay sincronización nocturna ni importación de nada.",
      items: [
        {
          title: "Reservas y habitaciones",
          desc: "Panel del día, lista con panel rápido, tape chart con mover y redimensionar, carga manual, tarifas con cadena de precios, disponibilidad con restricciones y promociones. Del otro lado, el inventario físico con seis estados operativos y matriz de transiciones.",
        },
        {
          title: "Motor de reservas",
          desc: "Búsqueda, resultados, detalle, servicios, datos del huésped y confirmación. Con calendario informativo, siete bloques de configuración visual y dos modos de confirmación. Se embebe en tu sitio o se usa como página propia.",
        },
        {
          title: "Revenue · RMS",
          desc: "Analítica de doble eje —cuándo se reservó y cuándo se duerme—, pace contra tu propio histórico, comp-set con descubrimiento automático, eventos de demanda, motor de reglas con ensayo en seco y recomendaciones que empujan la tarifa al motor.",
        },
        {
          title: "Sitios web y marca",
          desc: "Builder visual con biblioteca de componentes, componentes de dominio conectados a datos, multi-idioma, dominio propio, popups, botón de WhatsApp y editor de SEO y GEO. Más galerías, reseñas, identidad de marca y LinkHub.",
        },
        {
          title: "StayPass",
          desc: "El portal del huésped: cuenta propia, mis reservas, detalle, cancelación, perfil con documento y nacionalidad, y confirmación por token de email. Un mismo huésped acumula los alojamientos donde se registró; cada hotel ve sólo su base.",
        },
        {
          title: "Informes",
          desc: "Ocupación y volumen con proyección, ADR y RevPAR, lead time, estadía promedio, cancelaciones y última hora, producción por canal, y dos secciones de higiene operativa que marcan lo que está mal gestionado, no sólo lo que pasó.",
        },
      ],
    },
    ia: {
      eyebrow: "La capa que las une",
      title: "El asistente ve *todo el sistema*, no un módulo.",
      lead:
        "Porque los datos son uno solo, el agente puede hacer en una frase lo que en otro stack son tres pestañas y dos exportaciones: mirar el pace, ajustar una tarifa y publicar la promo en el sitio.",
      items: [
        "272 herramientas repartidas por reservas, tarifas, disponibilidad, habitaciones, propiedades, revenue, marketing, archivos, compañía y sistema.",
        "Bloques de respuesta ricos: tarjetas de reserva y de revenue con botones que ejecutan, sujetos a la misma verificación de permisos.",
        "Historial de sesiones filtrado por el espacio de trabajo activo.",
      ],
      link: "Ver Bookfer IA",
    },
    stats: [
      { value: "23", label: "apps activables" },
      { value: "30", label: "widgets del tablero adaptativo" },
      { value: "37", label: "recorridos guiados" },
      { value: "272", label: "herramientas del agente" },
    ],
    ask: "¿Buscabas algo puntual?",
    askLink: "Preguntanos",
    cta: {
      title: "Vení a *mirarlo por dentro*.",
      lead:
        "El alta es gratuita y guiada. Si preferís que te lo mostremos antes, pedí una demo y lo recorremos con tus datos.",
      steps: [
        "Creás la compañía y la propiedad.",
        "Cargás habitaciones y unidades.",
        "El motor y el sitio quedan listos para publicar.",
      ],
    },
  },

  /* -------------------------------------------------------------- reservas */
  reservas: {
    meta: {
      title: "Reservas y habitaciones",
      description:
        "El corazón operativo: panel del día, calendario tape chart con mover y redimensionar, carga manual, tarifas, disponibilidad, promociones y el inventario físico con sus seis estados.",
    },
    hero: {
      eyebrow: "Reservas y habitaciones",
      title: "El día a día, *en una sola grilla*.",
      lead:
        "Ocho vistas para la operación comercial y tres para el inventario físico. Todas sobre el mismo dato, así que mover una reserva en el calendario cambia el estado de la habitación, libera la noche en el motor y aparece en el informe.",
    },
    calendar: {
      eyebrow: "Calendario",
      title: "Arrastrás la reserva y *ves qué va a pasar* antes de soltar.",
      lead:
        "La grilla es habitación por día, agrupada por categoría. Se mueve una reserva de habitación o de fechas arrastrándola, y antes de aplicar el cambio el sistema muestra la vista previa: si hay conflicto y qué pasa con el precio.",
      items: [
        "Barras de bloqueo por mantenimiento o uso interno, creables desde el mismo calendario y con el mismo candado que una reserva.",
        "Popover de detalle al hacer clic, sin salir de la vista.",
        "Toolbar con navegación por mes o rango, hoy, búsqueda por huésped o código, filtro por categoría y por estado.",
        "Estadísticas por categoría y por día encima de la grilla.",
      ],
    },
    views: {
      eyebrow: "Las ocho vistas",
      title: "Cada momento del turno, *su pantalla*.",
      items: [
        {
          title: "Panel del día",
          desc: "Check-ins y check-outs del día, con dos días visibles y navegación. Es la pantalla con la que recepción abre el turno, con tarjetas accionables.",
        },
        {
          title: "Todas las reservas",
          desc: "Listado con filtros y un panel lateral que abre sin salir de la lista: resumen, actividad y notas. Desde ahí se asigna unidad, se cambia estado y se editan notas internas.",
        },
        {
          title: "Calendario",
          desc: "El tape chart: habitación por día, mover y redimensionar con vista previa, bloqueos, filtros y estadísticas.",
        },
        {
          title: "Nueva reserva",
          desc: "Alta manual o walk-in con búsqueda del huésped, categoría, fechas, ocupación por edad, canal de origen, promociones y notas.",
        },
        {
          title: "Tarifas",
          desc: "Precio base por categoría más planes tarifarios con vigencia, precio por noche, moneda, estadía mínima y activación.",
        },
        {
          title: "Disponibilidad",
          desc: "Grilla con semáforo —libre, parcial, lleno, cerrado— y restricciones por día: cerrado, cerrado a la llegada, cerrado a la salida, estadía mínima y máxima.",
        },
        {
          title: "Promociones",
          desc: "Asistente de tres pasos, automáticas o con código, por porcentaje, monto fijo o precio fijo por noche, con restricciones y su presentación en el sitio público.",
        },
        {
          title: "Configuración del motor",
          desc: "Moneda, confirmación, reglas de estadía, calendario informativo, capa agéntica y horarios. Más el modelo de reservas: modo de venta y estrategia de asignación.",
        },
      ],
    },
    chain: {
      eyebrow: "Cadena de precios",
      title: "Cuatro pasos, *siempre en el mismo orden*.",
      lead:
        "Cuando el motor tiene que decir cuánto cuesta una noche, resuelve esta cadena. Saber en qué escalón está cada precio es la diferencia entre confiar en el sistema y auditarlo a mano cada mañana.",
      stepLabel: "paso {n}",
      steps: [
        {
          title: "Override del RMS",
          desc: "Si hay una recomendación de revenue aceptada para esa fecha, manda ella.",
        },
        {
          title: "Plan tarifario",
          desc: "El plan vigente para esa categoría y esa fecha, con su moneda y su mínimo de noches.",
        },
        {
          title: "Precio base",
          desc: "El de la categoría. Es lo que cobra el motor mientras no cargues tarifas.",
        },
        {
          title: "Promociones",
          desc: "Se aplican encima del precio que resultó de los tres pasos anteriores.",
        },
      ],
    },
    rooms: {
      eyebrow: "Habitaciones",
      title: "El inventario físico, *con estados que no mienten*.",
      lead:
        "Seis estados operativos —disponible, ocupada, limpieza, mantenimiento, bloqueada y salida pendiente— y una matriz que define qué transición es válida. De 'ocupada' sólo se puede pasar a 'salida pendiente': el tablero no admite estados imposibles.",
      items: [
        "**Estado de habitaciones**: tablero en vivo con filtros por piso y categoría, y panel de detalle con el historial completo de cambios — quién, cuándo y con qué nota.",
        "**Plano de ocupación**: vista espacial por piso con navegación de fecha, para leer la casa de un vistazo.",
        "**Gestión**: categorías con capacidad, precio base, fotos, amenities y modo de venta auditado; unidades con código único, piso, capacidad propia y **creación masiva con previsualización**.",
      ],
    },
    detail: {
      eyebrow: "Detalle de reserva",
      title: "Todo lo que pasó con esa reserva, *en una ficha*.",
      items: [
        {
          title: "Línea de tiempo de estados",
          desc: "Pendiente, confirmada, check-in, check-out, más cancelada y no-show. Con las acciones disponibles según en qué punto esté.",
        },
        {
          title: "Servicios contratados",
          desc: "Spa, desayuno, late check-out, con cantidad, fecha y estado. El precio y el título quedan congelados al contratar: una reserva vieja sigue mostrando lo que se cobró entonces.",
        },
        {
          title: "Montos en dos monedas",
          desc: "El importe en moneda base y en moneda de cobro, con la conversión viva hasta el check-in y congelada a partir de ahí.",
        },
        {
          title: "Canal de origen fino",
          desc: "Directo, teléfono u OTA, con identificador puntual —booking.com, airbnb, direct-web, phone-front-desk— para que el informe por canal sirva de algo.",
        },
        {
          title: "Notas y pedidos especiales",
          desc: "Notas internas del equipo separadas de los pedidos del huésped, para que nadie confunda una cosa con la otra.",
        },
        {
          title: "Bitácora de auditoría",
          desc: "Cada cambio relevante queda registrado, incluido todo ajuste manual de cargos. Es lo que se mira cuando el importe no cierra.",
        },
      ],
    },
    faq: [
      {
        q: "¿Qué pasa si dos personas reservan la misma noche al mismo tiempo?",
        a: "Una de las dos falla. Cada noche de cada habitación es un **candado único en la base de datos** —la clave es la unidad más la fecha—, así que la segunda escritura no entra. No es una validación en el código que se pueda esquivar con concurrencia: es la base la que lo impide.",
      },
      {
        q: "¿Puedo cargar reservas que entraron por teléfono o WhatsApp?",
        a: "Sí, y conviene. La carga manual tiene búsqueda del huésped por email, selección de categoría y fechas, ocupación separada en adultos, niños y bebés —los bebés no cuentan para capacidad ni para precio—, promociones y **canal de origen**. Ese último campo es el que después te dice qué parte de tus reservas sigue entrando por el chat.",
      },
      {
        q: "¿Cómo se decide qué habitación le toca a cada reserva?",
        a: "Depende de dos ejes. Si la categoría es de **unidad única**, hay una sola opción. Si es un pool, la propiedad elige entre asignación **manual** —la reserva queda en “sin asignar” y decide recepción— o **automática**, donde el motor puntúa y elige, con preferencias opcionales de minimizar huecos o equilibrar el desgaste. Cada reserva congela el modo con el que nació, así que cambiar la configuración después no reescribe la historia.",
      },
    ],
    cta: {
      title: "Empezá por el *calendario*.",
      lead:
        "Cargás las habitaciones una vez y ya tenés la grilla, el motor y la disponibilidad inicializada. El resto se puede sumar cuando quieras.",
      steps: [
        "Cargás categorías y unidades.",
        "La disponibilidad se inicializa sola.",
        "El calendario y el motor quedan operativos.",
      ],
    },
  },

  /* ----------------------------------------------------------------- motor */
  motor: {
    meta: {
      title: "Motor de reservas",
      description:
        "El buscador y el checkout que ve tu huésped: calendario con precio y unidades restantes, siete bloques configurables sin tocar código, dos modos de confirmación y emails sin configurar SMTP.",
    },
    hero: {
      eyebrow: "Motor de reservas",
      title: "El link que *reemplaza la conversación*.",
      lead:
        "Búsqueda, resultados, detalle, servicios, datos del huésped y confirmación. Es tu motor, con tu marca, sin comisión por reserva y con un calendario que le dice al huésped lo que necesita saber para decidir.",
    },
    calendar: {
      eyebrow: "Calendario informativo",
      title: "Un datepicker que *contesta preguntas*.",
      lead:
        "El calendario común pide dos fechas y ya. El del motor muestra, día por día y según lo que vos habilites, todo lo que la persona iba a preguntar por WhatsApp antes de reservar.",
      items: [
        "**Precio desde** en cada día, resuelto por la cadena de precios real: override del RMS, plan tarifario, precio base y promociones.",
        "**Unidades restantes**, que es la señal de escasez más honesta que existe: es tu inventario, no un contador inventado.",
        "**Banderas** de día cerrado, cerrado a la llegada y cerrado a la salida, marcadas donde se miran.",
        "**Hint de mínimo de noches** al elegir la entrada, para que nadie llegue al final del checkout y ahí se entere.",
        "Un interruptor maestro lo apaga entero y vuelve a ser un selector de fechas común. Es tuyo, no nuestro.",
      ],
    },
    studio: {
      eyebrow: "Estudio del Motor",
      title: "Siete bloques, *sin tocar código*.",
      lead:
        "Cada pantalla del flujo tiene su bloque de configuración, con sus textos, sus etiquetas y sus estilos. Los cambios se aplican al motor sin republicar el sitio.",
      items: [
        { title: "Búsqueda", desc: "El buscador de entrada: campos, etiquetas y qué se pide primero." },
        {
          title: "Calendario",
          desc: "El master toggle y qué ve el huésped por día: precios, unidades, banderas y hints.",
        },
        {
          title: "Huéspedes",
          desc: "Cómo se piden adultos, niños y bebés. Los bebés no cuentan para capacidad ni para precio.",
        },
        {
          title: "Listado",
          desc: "Cómo se presentan las categorías disponibles y qué información acompaña a cada una.",
        },
        {
          title: "Detalle",
          desc: "La ficha de la categoría o de la unidad, con fotos, amenities y descripción.",
        },
        {
          title: "Servicios",
          desc: "Los extras que se ofrecen antes de pagar, con su ventana horaria y su anticipación mínima.",
        },
        { title: "Checkout", desc: "El formulario final: qué datos se piden y con qué textos legales." },
        {
          title: "Pantalla de éxito",
          desc: "Lo que ve el huésped al terminar, que es donde se decide si vuelve a escribirte o no.",
        },
      ],
    },
    agentic: {
      eyebrow: "Capa agéntica",
      title: "Y también *lo puede leer una máquina*.",
      lead:
        "Con la capa agéntica activada, el motor publica su inventario en formatos pensados para modelos de lenguaje, no sólo para navegadores. Es una apuesta explícita de producto hacia la búsqueda generativa.",
      items: [
        "`llms.txt` — la descripción del alojamiento en texto plano.",
        "`availability.json` — la disponibilidad legible por máquina.",
        "`engine-capabilities.json` — qué operaciones acepta el motor.",
        "JSON-LD estructurado en las páginas del sitio.",
      ],
      link: "Ver la capa agéntica entera",
    },
    after: {
      eyebrow: "Después del checkout",
      title: "La reserva entra *y el sistema sigue solo*.",
      items: [
        {
          title: "Se asigna la unidad",
          desc: "Según el modelo de la propiedad: la única unidad posible si es 1:1, la que elige el motor si es pool automático, o ninguna si preferís que decida recepción.",
        },
        {
          title: "Sale el email",
          desc: "Desde el dominio de bookfer, con tu casilla como responder-a. Sin configurar SMTP, sin dominio verificado, sin un proveedor de correo más en la lista.",
        },
        {
          title: "Queda registrada la búsqueda",
          desc: "Incluidas las búsquedas **sin disponibilidad**, que son las más valiosas: alimentan el índice de demanda del RMS y el embudo de conversión.",
        },
      ],
      stats: [
        { value: "0%", label: "de comisión por reserva del motor" },
        { value: "10", label: "monedas, con blue, MEP, CCL u oficial para ARS" },
        { value: "2", label: "modos de confirmación, con expiración automática" },
      ],
    },
    distribute: {
      eyebrow: "Dónde va el link",
      title: "En tu web, en tu bio y *en el chat*.",
      lead:
        "El motor es una superficie, no una página. Va embebido en el sitio que armás con el builder, como página propia, o como el botón principal de tu LinkHub: la página link-in-bio que ponés en Instagram, con su QR descargable.",
      items: [
        "Componente del builder que se conecta solo a tu inventario.",
        "Página propia con la URL de tu alojamiento.",
        "Bloque 'reservar' del LinkHub, con analítica de visitas y clics.",
        "Botón flotante de WhatsApp en el sitio, con mensaje prellenado, para quien igual prefiere escribir.",
      ],
    },
    faq: [
      {
        q: "¿El motor va dentro de mi web o es una página aparte?",
        a: "Las dos cosas. Se embebe como componente dentro del sitio que armás con el builder, y además existe como página propia en `/tu-alojamiento`. Si todavía no tenés web, el link del motor ya es algo que podés mandar por WhatsApp o poner en la bio de Instagram.",
      },
      {
        q: "¿Puedo cambiar los textos y los colores del checkout?",
        a: "Sí, desde el Estudio del Motor y **sin tocar código ni republicar el sitio**. Son siete bloques configurables: búsqueda, calendario, huéspedes, listado, detalle, servicios, checkout y pantalla de éxito, cada uno con sus textos, etiquetas y estilos.",
      },
      {
        q: "¿Quién confirma la reserva?",
        a: "Lo elegís vos. En un modo la reserva nace pendiente y **el huésped la confirma** con un link con token que le llega por mail. En el otro, queda pendiente hasta que **recepción la acepta**. En los dos casos las pendientes expiran solas según el tiempo que configures, así no te quedan noches bloqueadas por alguien que nunca volvió.",
      },
      {
        q: "¿Tengo que configurar un servidor de correo?",
        a: "No. Todos los emails al huésped salen del dominio de bookfer, con la casilla del alojamiento como **responder-a**. Es una decisión deliberada: configurar SMTP por hotel es una de las fricciones clásicas del alta de un PMS y acá directamente no existe.",
      },
    ],
    cta: {
      title: "Poné tu link de reservas *en la bio*.",
      lead:
        "Cargás las habitaciones y el motor queda operativo con la disponibilidad inicializada. El sitio y el LinkHub se suman después, cuando quieras.",
      steps: [
        "Cargás categorías, unidades y precios.",
        "Configurás el motor en el Estudio.",
        "Compartís el link y dejás de perder consultas en el chat.",
      ],
    },
  },

  /* --------------------------------------------------------------- revenue */
  revenue: {
    meta: {
      title: "Revenue · RMS",
      description:
        "Revenue management incluido: pace contra tu propio histórico, comp-set con descubrimiento automático, eventos de demanda, motor de reglas con ensayo en seco y recomendaciones que empujan la tarifa al motor.",
    },
    hero: {
      eyebrow: "Revenue · RMS",
      title: "Un precio sugerido *que se puede auditar*.",
      lead:
        "Ocho pestañas de revenue management embebidas en el escritorio: analítica de doble eje, pace contra tu propio histórico, comp-set, eventos de demanda, un motor de reglas con ensayo en seco, y un documento de decisión por fecha que explica cada número.",
    },
    decision: {
      eyebrow: "Decisiones",
      title: "La respuesta a *“¿por qué me sugerís esto?”*",
      lead:
        "Hay un documento por propiedad y por fecha con la traza completa: qué inputs vio el motor, cuál era la tarifa base, cuál sugirió, qué reglas coincidieron, si se aplicó un tope, y un log legible línea por línea.",
      items: [
        "Ocupación, índice de demanda, disponibilidad, tarifas de competencia, pickup y eventos: todo lo que entró en la cuenta, con su valor.",
        "Qué regla coincidió y en qué orden, porque gana la última.",
        "Si se aplicó el tope mínimo o máximo, y cuál era.",
        "El ciclo de vida de la recomendación: sugerida, aceptada o rechazada, aplicada, con quién y cuándo.",
      ],
    },
    rules: {
      eyebrow: "Escenarios",
      title: "Trece variables, *y un ensayo en seco*.",
      lead:
        "Cada regla evalúa una variable contra una referencia, dentro de una ventana de anticipación, y aplica una acción. Se evalúan por orden y gana la última que coincide. Antes de activar cualquiera, el ensayo en seco te muestra qué habría hecho.",
      items: [
        "**Variables**: ocupación, índice de demanda, disponibilidad, tarifa de competidor 1 a 5, pickup 7d, pickup 30d, impacto de eventos, días al evento más cercano e índice de pace.",
        "**Operadores**: mayor, mayor o igual, igual, menor o igual, menor.",
        "**Acciones**: ajuste porcentual sobre la base, o cambio de plan tarifario.",
        "**Topes** de tarifa mínima y máxima, que se aplican después de todo lo demás.",
      ],
    },
    comp: {
      eyebrow: "Competencia",
      title: "Un comp-set *mixto y honesto*.",
      lead:
        "Los competidores que también usan bookfer aportan tarifa real. Los externos se descubren solos por cercanía y score de similitud, y su tarifa la cargás vos —como referencia fija o por fecha, que tiene prioridad—.",
      items: [
        "Score de similitud por tipo, categoría, tamaño, gama y zona.",
        "Perfil de tu propio hotel, sincronizado desde el PMS salvo que lo pises a mano.",
        "Grilla de tarifas de competencia por fecha.",
        "Preparado para Lighthouse, RateGain, PriceLabs y KeyData; hoy sin conectar.",
      ],
    },
    rest: {
      eyebrow: "Las otras pestañas",
      title: "Todo lo que hay *además del precio*.",
      items: [
        {
          title: "Analítica de doble eje",
          desc: "Eje de creación —cuándo se reservó— con ingresos directos y de OTA, cancelaciones, antelación, búsquedas y pickup. Eje de estancia —cuándo se duerme— con ocupación, ADR, RevPAR e ingresos. Muchos sistemas mezclan los dos y confunden.",
        },
        {
          title: "Pace",
          desc: "Ritmo de venta contra el comportamiento histórico de tu propia propiedad, separado por día de semana, mes y bucket de anticipación. Con curva, pickup y alertas de venta rápida o lenta con umbrales configurables.",
        },
        {
          title: "Eventos",
          desc: "Feriados, ferias, conciertos y deportivos, ingestados automáticamente y curados por vos: sugerido, aprobado o descartado. Un evento aprobado no lo pisa la re-ingesta. Con score de relevancia e impacto esperado.",
        },
        {
          title: "Recomendaciones",
          desc: "Tarifa actual, sugerida, delta y motivo. Ciclo de vida completo: sugerida, aceptada o rechazada, aplicada, expirada o reemplazada, con responsable y fecha.",
        },
        {
          title: "Señales de demanda",
          desc: "Además de las reservas, el índice de demanda toma las búsquedas del motor, incluidas las que no encontraron disponibilidad —la señal más subestimada que tiene un alojamiento chico—.",
        },
        {
          title: "Configuración",
          desc: "Comp-set, ubicación sincronizada del PMS con override manual, perfil del hotel, umbrales de pace, radio y horizonte de eventos, y topes de tarifa.",
        },
      ],
    },
    faq: [
      {
        q: "Tengo poca historia. ¿El RMS me sirve igual?",
        a: "Te sirve, pero te lo va a decir. El benchmark de pace se arma con **tu propio histórico**, agrupado por día de semana, mes y bucket de anticipación, y la interfaz **expone el tamaño de la muestra**. Si una celda se calculó con tres reservas, lo vas a ver. Preferimos eso a mostrarte una curva confiada construida sobre nada.",
      },
      {
        q: "¿De dónde salen las tarifas de la competencia?",
        a: "De dos lugares. Si el competidor también usa bookfer, la tarifa es real. Si es externo, el sistema lo **descubre solo** por geolocalización y score de similitud —tipo, categoría, tamaño, gama, zona— pero **la tarifa la cargás vos**, como referencia fija o por fecha. La conexión con proveedores automáticos está preparada y todavía no conectada; no vamos a decirte que sí hasta que lo esté.",
      },
      {
        q: "Si acepto una recomendación, ¿tengo que copiar el precio a otro lado?",
        a: "No. Al aceptarla, la recomendación **empuja un override de tarifa al motor de reservas**, que pasa a ser el paso 0 de la cadena de precios. El lazo se cierra dentro del sistema. En la mayoría de los stacks ese paso es una persona copiando un número de una pantalla a otra.",
      },
      {
        q: "¿Está incluido o se paga aparte?",
        a: "Depende del plan. En los sistemas grandes el RMS es casi siempre un módulo adicional que se cotiza aparte; acá está en el catálogo de productos como cualquier otro. [Mirá los planes](/precios) para ver en cuál entra.",
      },
    ],
    cta: {
      title: "El precio *deja de ser una corazonada*.",
      lead:
        "El RMS empieza a servir apenas tenés historia propia, y mientras no la tengas te lo dice en la cara en vez de inventar una curva.",
      steps: [
        "Cargás el inventario y las tarifas base.",
        "Armás el comp-set y aprobás los eventos de tu zona.",
        "Escribís dos o tres reglas y las probás en seco.",
      ],
    },
  },

  /* ---------------------------------------------------------------- sitios */
  sitios: {
    meta: {
      title: "Sitio web y marca",
      description:
        "Constructor visual con dominio propio y multi-idioma, componentes conectados a tus datos, LinkHub para la bio de Instagram, identidad de marca, galerías y reseñas.",
    },
    hero: {
      eyebrow: "Sitio web, marca y LinkHub",
      title: "Tu presencia digital, *servida por el mismo sistema*.",
      lead:
        "El constructor arma el sitio con componentes que se conectan solos a tu inventario, y el renderer lo publica en tu dominio. Al lado viven la identidad de marca, las galerías, las reseñas y el LinkHub que va en la bio de Instagram.",
    },
    builder: {
      eyebrow: "Builder",
      title: "Un editor visual con *componentes que saben de hoteles*.",
      lead:
        "Lienzo con arrastrar y soltar, edición directa sobre el texto, menús contextuales y una biblioteca de componentes organizada en familias. Lo que lo diferencia de un constructor genérico es la otra mitad: los componentes de dominio.",
      items: [
        "**Motor de reservas embebido**, tarjetas de habitación, categorías, galerías, promociones, reseñas y servicios: todos conectados a datos vivos.",
        "**Editor de estilos** lateral con tipografía, color, espaciado y efectos, más editor de CSS para casos avanzados.",
        "**Editor de imágenes** integrado —recorte, filtros, ajustes— y editor de texto enriquecido.",
        "**Asistente de IA del builder** con streaming, para generar y editar secciones.",
        "**Modo simple o avanzado** por subsitio, borradores y publicación explícita, vista previa en varios tamaños.",
      ],
    },
    published: {
      eyebrow: "El sitio publicado",
      title: "Lo que ve *el huésped*.",
      items: [
        {
          title: "Dominio propio",
          desc: "Hostnames personalizados por subsitio, con registro y resolución. Cada variante de idioma puede tener el suyo.",
        },
        {
          title: "Multi-idioma real",
          desc: "Rutas por idioma con su propio título, descripción, portada, favicon y preview social. Páginas, no traducción automática.",
        },
        {
          title: "Popups",
          desc: "Cinco formatos —modal, slide-in, toast, banner y pantalla completa— con plantillas, disparadores, reglas de página, prioridad y control de frecuencia por visitante.",
        },
        {
          title: "Botón de WhatsApp",
          desc: "Flotante, con preset visual, esquina, tamaño, colores y mensaje prellenado. El número sale de la propiedad.",
        },
        {
          title: "Analítica",
          desc: "Google Analytics y Google Tag Manager por subsitio, con preservación de UTMs desde la campaña hasta la reserva.",
        },
        {
          title: "Cuenta del huésped",
          desc: "Login, registro y recuperación integrados contra StayPass, para que el huésped vea y cancele sus reservas desde tu sitio.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO y GEO",
      title: "Para buscadores *y para modelos*.",
      lead:
        "El editor cubre el SEO clásico —título, descripción, portada, favicon, preview social, icono de Apple— y agrega una capa pensada para que un modelo de lenguaje entienda tu alojamiento sin entrar a la web.",
      items: [
        "Tipo de entidad, nombre y descripción, categorías, casos de uso y dominios de problema.",
        "Audiencias objetivo y alcance geográfico.",
        "Señales de confianza: años activo, cantidad de clientes, certificaciones y clientes destacados.",
        "Por página: intención, tema, contexto semántico y entidades relacionadas.",
      ],
      link: "Ver la capa agéntica",
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "La página que va *en la bio*.",
      lead:
        "Un link-in-bio hecho para alojamientos, no uno genérico con un botón de 'reservar' que lleva a un formulario. Diez tipos de bloque, tema propio y su propia analítica.",
      items: [
        "**Bloques**: enlace, WhatsApp, reservar, reseñas, texto, galería, video, mapa, contacto y separador. Cada uno con título, subtítulo, icono, miniatura, orden, destacado y **programación por fecha**.",
        "**Diseño**: plantillas de tema, claro y oscuro, fondo sólido, degradado, imagen o patrón, siete estilos de botón, esquinas y tipografía —incluida cualquier Google Font—.",
        "**Compartir**: enlace y **código QR descargable** para imprimir en la recepción o en la carta.",
        "**Analítica**: visitas y clics por día, país, referente y dispositivo, sin IP ni user-agent. Las etiquetas quedan guardadas aparte para que renombrar un bloque no rompa el histórico.",
      ],
    },
    around: {
      eyebrow: "Alrededor",
      title: "Lo que *alimenta* todo lo anterior.",
      items: [
        {
          title: "Identidad de marca",
          desc: "Logo, logo oscuro, hero, fondo y cuatro fotos; paleta con extracción automática desde el logo; tono, tipografía, tagline, historia, audiencias, contexto de ubicación y contacto público. Una sola ficha que alimenta el sitio, el motor, el LinkHub y las fichas de OTA.",
        },
        {
          title: "Galerías",
          desc: "Galerías multimedia de la propiedad y de las habitaciones, con portada, orden, descripción, imágenes y videos. Se consumen desde el sitio, el LinkHub y las fichas.",
        },
        {
          title: "Reseñas",
          desc: "Propias y externas, con autor, puntuación, texto, fecha, idioma y enlace. Respuesta del hotel, importación masiva por CSV con deduplicación, y estadísticas que alimentan los widgets y los componentes del sitio.",
        },
        {
          title: "Librería de archivos",
          desc: "Repositorio de imágenes, videos, audios y documentos de la compañía, con carpetas anidadas y etiquetas. Las apps embebidas pueden abrirla y recibir el archivo elegido.",
        },
        {
          title: "Plantillas con autocompletado",
          desc: "Se crea una plantilla a partir de un subsitio, se extraen los espacios rellenables, y generar arma un sitio nuevo con los datos reales del alojamiento.",
        },
        {
          title: "Presencia online",
          desc: "Score de visibilidad auditable, conexiones de redes declaradas, ficha de Google Business y fichas de OTA. Hoy está oculta del menú y no publica por API: se edita y se copia al destino.",
        },
      ],
    },
    faq: [
      {
        q: "¿Tengo que cargar mis habitaciones dos veces, una para el sitio?",
        a: "No, y ese es el punto. Los componentes de dominio del builder —motor embebido, tarjetas de habitación, categorías, galerías, promociones, reseñas y servicios— **se conectan solos a los datos que ya cargaste**. Si subís una foto nueva a una categoría, aparece en el sitio sin que nadie lo toque.",
      },
      {
        q: "¿Puedo tener el sitio en varios idiomas?",
        a: "Sí. Cada sitio tiene variantes por idioma, y cada variante tiene su propia URL, su título, su descripción, su dominio, su portada, su favicon y su preview social. No es un traductor automático encima de una página: son páginas.",
      },
      {
        q: "No sé diseñar. ¿Igual me sale algo presentable?",
        a: "Para eso están las plantillas con autocompletado: se toma un sitio como modelo, se extraen los espacios rellenables y “generar” arma uno nuevo con **tus datos reales** —marca, fotos, habitaciones y servicios—. Además los sitios nuevos arrancan en modo simple, con los controles avanzados escondidos hasta que los busques.",
      },
    ],
    cta: {
      title: "Tu web y tu link, *la misma tarde*.",
      lead:
        "Si ya cargaste marca y habitaciones, generar el sitio con una plantilla es cuestión de minutos, y el LinkHub se autocompleta con los datos de la propiedad.",
      steps: [
        "Cargás identidad de marca y fotos.",
        "Generás el sitio desde una plantilla.",
        "Publicás en tu dominio y armás el LinkHub.",
      ],
    },
  },

  /* -------------------------------------------------------------------- ia */
  ia: {
    meta: {
      title: "Bookfer IA",
      description:
        "Un asistente con 272 herramientas que consulta y opera el PMS con los permisos reales del usuario: filtrado antes del turno, contexto en el prompt y evaluación en cada llamada.",
    },
    hero: {
      eyebrow: "Bookfer IA",
      title: "Un asistente que *hace*, no que explica dónde hacer clic.",
      lead:
        "Está embebido en el escritorio, tiene sesiones persistentes y 272 herramientas que cubren prácticamente toda la superficie del producto. Consulta disponibilidad, crea reservas, mueve una estadía con vista previa, ajusta tarifas, aprueba eventos o publica un sitio.",
    },
    perms: {
      eyebrow: "Permisos",
      title: "Opera con *tus* permisos, no con los suyos.",
      lead:
        "Es el punto delicado de cualquier agente dentro de un sistema de gestión, y está resuelto en tres capas que se aplican en momentos distintos.",
      items: [
        "**Antes del turno** — se filtran las herramientas según tu alcance real. Lo que no podés usar no se le ofrece siquiera al modelo.",
        "**En el prompt** — se le explica qué rol tenés, qué apps tenés con y sin acceso, qué capacidades, qué propiedades, y cómo contestar cuando algo está bloqueado.",
        "**En cada llamada** — la operación concreta se evalúa contra una tabla de políticas por servicio, que espeja lo que exigen los servicios reales y **completa los huecos** donde el backend es más laxo que la interfaz.",
        "**Con tu identidad** — la ejecución usa un permiso de vida corta emitido a tu nombre y renovado en cada llamada.",
      ],
    },
    tools: {
      eyebrow: "272 herramientas",
      title: "Prácticamente *toda* la superficie del producto.",
      lead:
        "No es un chatbot con tres acciones de demostración. Están agrupadas por dominio y hay además herramientas crudas de lectura y escritura para cubrir los endpoints que no tienen una dedicada.",
      items: [
        {
          title: "Reservas",
          desc: "Consultar disponibilidad, crear reserva, cambiar estado, asignar, desasignar y auto-asignar unidad, mover con vista previa, notas, ajuste de cargo, servicios extra, buscar huésped y huéspedes frecuentes.",
        },
        {
          title: "Tarifas y promociones",
          desc: "Listar, crear, actualizar y eliminar planes tarifarios y promociones, y activarlas o desactivarlas.",
        },
        {
          title: "Disponibilidad",
          desc: "Inicializar, sincronizar, restricciones por día y bloqueos de habitación.",
        },
        {
          title: "Habitaciones",
          desc: "Estado de habitaciones, unidades y categorías completas, historial, creación masiva, auditoría del modelo de venta y auto-corrección.",
        },
        {
          title: "Revenue",
          desc: "Dashboard, series diarias, ventana de reserva, pace, señales de demanda, reglas con ensayo en seco, decisiones, recomendaciones, eventos y competencia.",
        },
        {
          title: "Marketing",
          desc: "Sitios —crear, publicar, duplicar, páginas, idiomas, SEO y GEO, popups, Estudio del Motor—, galerías, reseñas, LinkHub y presencia online.",
        },
        {
          title: "Compañía y usuarios",
          desc: "Perfil, usuarios, invitaciones, roles, estados, accesos y búsqueda por email.",
        },
        {
          title: "Sistema",
          desc: "Búsqueda global, notificaciones y tema del tablero. Más la librería de archivos completa, con carpetas y archivos.",
        },
      ],
    },
    experience: {
      eyebrow: "La experiencia",
      title: "Ves *qué está haciendo* mientras lo hace.",
      lead:
        "La respuesta llega en streaming con la transcripción del turno a la vista. No es un spinner y después un párrafo: es la lista de operaciones, con su resultado, mientras ocurren.",
      items: [
        "Bloques de respuesta ricos: tarjetas de reserva, de revenue y listados accionables, no sólo texto.",
        "Botones dentro de las tarjetas que ejecutan operaciones, con la misma verificación de permisos.",
        "Captura de feedback dentro de la conversación, para que lo que no funcionó llegue a quien lo arregla.",
        "Historial de sesiones filtrado por el espacio de trabajo activo: recepción no ve las conversaciones de marketing.",
      ],
    },
    stats: [
      { value: "272", label: "herramientas disponibles" },
      { value: "3", label: "capas de verificación de permisos" },
      { value: "10", label: "códigos de denegación explícitos" },
      { value: "1", label: "identidad: la tuya, con permiso de vida corta" },
    ],
    why: {
      eyebrow: "Por qué acá puede más",
      title: "Porque ve *todo el sistema*, no un módulo.",
      lead:
        "Un asistente atado a un solo producto puede responder sobre ese producto. Como acá los datos son uno solo, en una frase se cruzan cosas que en otro stack son tres pestañas y dos exportaciones.",
      items: [
        "“¿Cómo viene el fin de semana largo comparado con el año pasado?” — mira **pace** contra tu propio histórico.",
        "“Subí un 10% las dobles del sábado y avisame si queda arriba del comp-set” — toca **tarifas** y consulta **competencia**.",
        "“Publicá la promo de última hora en el sitio” — crea la **promoción** y publica el **sitio**.",
        "“¿Quién llega hoy y no tiene habitación asignada?” — cruza **reservas** y **unidades**.",
      ],
    },
    faq: [
      {
        q: "¿Qué pasa si le pido algo que mi usuario no puede hacer?",
        a: "Te explica el permiso que falta, no te dice que la función no existe. Hay códigos de denegación explícitos —rol insuficiente, capacidad faltante, sin espacio activo, acceso de app insuficiente, propiedad fuera de alcance, cambio de contraseña requerido, entre otros— y el asistente traduce cuál fue. La diferencia importa: “no tenés permiso” se resuelve hablando con tu admin, “no existe” te hace buscar otro sistema.",
      },
      {
        q: "¿El asistente tiene acceso total al sistema?",
        a: "No tiene acceso propio en absoluto. Cuando ejecuta algo lo hace **suplantando tu identidad real**, con un permiso de vida corta que se vuelve a emitir en cada llamada. Si a mitad de la conversación te revocan la membresía, la siguiente operación falla y el asistente te lo explica. No hay una cuenta de servicio con superpoderes detrás.",
      },
      {
        q: "¿Se ve lo que hizo o hay que confiar?",
        a: "Se ve. Cada turno muestra la transcripción: qué herramienta usó, con qué parámetros y qué devolvió. Y las respuestas no son sólo texto: vuelven como tarjetas de reserva o de revenue con botones que ejecutan, sujetos a la misma verificación de permisos que todo lo demás.",
      },
    ],
    cta: {
      title: "Probalo con *tus propios datos*.",
      lead:
        "El asistente sirve de verdad cuando tiene un sistema cargado abajo. Empezá por el alta, cargá una propiedad y preguntale algo que hoy resolverías abriendo cuatro pestañas.",
      steps: [
        "Te das de alta y cargás la propiedad.",
        "Entrás a Bookfer IA desde el escritorio.",
        "Le pedís algo real y mirás la transcripción.",
      ],
    },
  },

  /* -------------------------------------------------------------- agentes */
  agentes: {
    meta: {
      title: "Alojamiento agéntico",
      description:
        "llms.txt, availability.json, engine-capabilities.json, JSON-LD y un editor de GEO: lo que hace falta para que un modelo de lenguaje entienda tu alojamiento y pueda reservarlo.",
    },
    hero: {
      eyebrow: "Alojamiento agéntico",
      title: "Que una máquina pueda *entenderte y reservarte*.",
      lead:
        "Cada vez más gente le pregunta a un modelo antes de buscar. Ese modelo no ve tu carrusel de fotos: ve texto, datos estructurados y rutas. El motor de bookfer publica las tres cosas, y el editor de GEO te deja declarar qué sos con tus palabras.",
      secondary: "Ver el motor",
    },
    shift: {
      eyebrow: "El cambio",
      title: "La consulta ya no *empieza en un buscador*.",
      lead:
        "Antes la pregunta era “cabañas en Villa La Angostura” y la respuesta eran diez enlaces azules. Ahora la pregunta es “¿dónde me quedo cuatro noches con dos chicos y un perro, a menos de treinta minutos del centro?” y la respuesta es un párrafo con dos o tres nombres. Estar en ese párrafo depende de que haya algo tuyo que se pueda leer.",
      headOld: "Lo que optimiza el SEO clásico",
      headNew: "Lo que agrega la capa agéntica",
      rows: [
        { old: "Título y descripción para el resultado", now: "Descripción de la entidad, en texto plano" },
        { old: "Imagen de portada para el clic", now: "Disponibilidad real legible por máquina" },
        { old: "Palabras clave en la página", now: "Casos de uso, audiencias y alcance geográfico" },
        { old: "Enlaces entrantes", now: "Señales de confianza declaradas y verificables" },
        { old: "Un formulario de contacto", now: "Una ruta de reserva que un agente puede seguir" },
      ],
    },
    surfaces: {
      eyebrow: "Las cuatro superficies",
      title: "Lo que publica *tu motor*.",
      lead:
        "Se activa con un interruptor en la configuración del motor. A partir de ahí, tu alojamiento tiene una cara pública para máquinas además de la que ya tenía para personas.",
      items: [
        {
          title: "llms.txt",
          desc: "Quién sos, qué vendés y cómo se reserva, en texto plano y sin markup. Es el archivo que un modelo puede leer entero sin gastar tokens en interpretar HTML.",
        },
        {
          title: "availability.json",
          desc: "Tu disponibilidad real, en un formato que una máquina puede consultar. No es un formulario que hay que completar: es el dato.",
        },
        {
          title: "engine-capabilities.json",
          desc: "Qué operaciones acepta tu motor y con qué parámetros. Es la diferencia entre que un agente sepa que existís y que sepa cómo reservarte.",
        },
        {
          title: "JSON-LD en las páginas",
          desc: "Datos estructurados en el sitio publicado, que es lo que ya leen los buscadores clásicos y también los modelos cuando visitan la página.",
        },
      ],
    },
    editor: {
      eyebrow: "Editor de GEO",
      title: "Declarás qué sos *con tus palabras*, no con las de un robot.",
      lead:
        "El editor va bastante más allá del SEO clásico. Es una ficha pensada para que un modelo pueda describirte con precisión aunque nadie entre a tu web.",
      items: [
        "**Tipo de entidad**: hotel, resort, B&B, alquiler vacacional, apartamento, hostel, motel, camping o alojamiento genérico.",
        "**Categorías, casos de uso y dominios de problema**: para qué sirve tu alojamiento, dicho en la forma en que la gente lo busca.",
        "**Audiencias y alcance geográfico**: a quién servís y hasta dónde.",
        "**Señales de confianza**: años activo, cantidad de clientes, certificaciones y clientes destacados.",
        "**Control de indexación por IA** y prioridad: la capa se apaga si no la querés.",
        "**Por página**: intención (informativa, comercial, transaccional, comparativa o de soporte), tema, contexto semántico y entidades relacionadas.",
      ],
    },
    consistency: {
      eyebrow: "Por qué acá funciona",
      title: "Porque el dato *no se copia*.",
      lead:
        "La razón por la que un archivo de disponibilidad se puede publicar sin miedo es la misma por la que el calendario del motor muestra unidades restantes de verdad: es el mismo inventario que usa el calendario del hotel. No hay una exportación nocturna que se pueda desincronizar.",
      items: [
        "Una habitación se carga una vez y aparece en el motor, en el sitio, en el JSON de disponibilidad y en el RMS.",
        "Un bloqueo de mantenimiento descuenta inventario real y desaparece de todas las superficies a la vez.",
        "La descripción de marca que cargaste alimenta el sitio, el LinkHub, las fichas de OTA y el llms.txt.",
      ],
    },
    dogfood: {
      eyebrow: "Predicar y practicar",
      title: "Este sitio también tiene su *llms.txt*.",
      lead:
        "Sería raro pedirte que tu alojamiento sea legible por una máquina y que la página donde te lo pedimos no lo fuera.",
      button: "Ver /llms.txt",
    },
    faq: [
      {
        q: "¿Esto me garantiza aparecer cuando alguien le pregunta a ChatGPT?",
        a: "No, y quien te diga que sí te está mintiendo. Nadie controla qué recomienda un modelo, igual que nadie controla el ranking de Google. **Lo que sí depende de vos es que, cuando un agente vaya a mirar, encuentre algo que pueda entender** — un texto que describa qué sos, una disponibilidad que se pueda leer y una ruta clara para reservar. Un alojamiento cuyo único dato público es un carrusel de fotos en Instagram no tiene nada que un modelo pueda citar.",
      },
      {
        q: "¿Qué es GEO y en qué se diferencia del SEO?",
        a: "El SEO clásico optimiza para que una persona haga clic en un resultado: título, descripción, imagen de portada. **GEO —Generative Engine Optimization—** optimiza para que un modelo pueda describirte con precisión sin que nadie entre a tu web: qué tipo de entidad sos, para qué audiencias, en qué zona, con qué señales de confianza. Son complementarios; el editor del sistema tiene los dos.",
      },
      {
        q: "¿Puedo decidir que la IA no me indexe?",
        a: "Sí. La capa agéntica del motor se activa o se apaga desde la configuración, y el editor de GEO tiene control de indexación por IA y prioridad. Es una decisión tuya, no un default que te imponemos.",
      },
    ],
    cta: {
      title: "Activalo *con un interruptor*.",
      lead:
        "La capa agéntica es una sección más de la configuración del motor. Si tu inventario ya está cargado, publicar las rutas no te lleva nada.",
      steps: [
        "Cargás el inventario y la identidad de marca.",
        "Activás la capa agéntica en el motor.",
        "Completás el editor de GEO con tus palabras.",
      ],
    },
  },

  /* ------------------------------------------------------------ soluciones */
  soluciones: {
    meta: {
      title: "Soluciones",
      description:
        "Hoteles, cabañas y departamentos, hostels, glamping y villas, y grupos chicos: cómo se configura bookfer para cada tipo de alojamiento y para cada puesto de trabajo.",
    },
    hero: {
      eyebrow: "Soluciones",
      title: "El mismo sistema, *configurado distinto*.",
      lead:
        "Un hotel urbano, un complejo de cabañas y un hostel no operan igual, y sin embargo casi todos los sistemas del mercado eligen uno de los tres y hacen que los otros dos se acomoden. Acá lo que cambia es la configuración: modelo de venta, espacios de trabajo y apps activas.",
    },
    hoteles: {
      eyebrow: "Hoteles y aparthoteles",
      title: "Habitaciones intercambiables, *asignadas solas*.",
      lead:
        "La configuración clásica: categorías que agrupan varias unidades equivalentes, el huésped compra un tipo de habitación y el sistema decide cuál le toca. Con la asignación automática podés pedirle que minimice huecos o que equilibre el desgaste entre unidades.",
      items: [
        "Modelo de venta: pool de categoría, con asignación automática o manual según prefieras.",
        "Espacios de trabajo típicos: recepción, housekeeping y administración, cada uno con su menú.",
        "Plano de ocupación por piso y estado de habitaciones con matriz de transiciones.",
        "Recompactación de asignaciones para liberar huecos cuando la ocupación aprieta.",
      ],
    },
    cabanas: {
      eyebrow: "Cabañas, departamentos y alquileres",
      title: "Cada unidad con *nombre propio*.",
      lead:
        "Acá el huésped no compra 'una cabaña de dos ambientes': compra la Alerce, con sus fotos y su descripción. El modelo de unidad única hace que la categoría envuelva exactamente una unidad, y no queda ninguna ambigüedad sobre qué reservó.",
      items: [
        "Modelo de venta: unidad única 1:1, elegible por categoría y no para toda la propiedad.",
        "Ficha propia por unidad en el motor: fotos, descripción, capacidad y precio.",
        "Bloqueos de mantenimiento que descuentan inventario real y desaparecen del motor.",
        "Si además tenés dos habitaciones estándar, conviven: el modo se define por categoría.",
      ],
    },
    hostels: {
      eyebrow: "Hostels",
      title: "Camas, turnos y *mucha rotación*.",
      lead:
        "Volumen alto de reservas cortas, equipo que rota y una operación donde el check-in y el check-out del día son la pantalla que más se mira. El panel del día abre el turno y el estado de habitaciones lo cierra.",
      items: [
        "Panel del día con check-ins y check-outs, y dos días visibles a la vez.",
        "Espacio de housekeeping con su propia lista de trabajo y nada más en el menú.",
        "Recorridos guiados por app: una persona nueva se induce sola en su primer turno.",
        "Alta de usuarios con contraseña temporal, que bloquea la interfaz hasta que la cambian.",
      ],
    },
    glamping: {
      eyebrow: "Glamping, villas y estancias",
      title: "Pocas unidades, *mucha marca*.",
      lead:
        "Cuando tenés seis domos, la operación es simple y lo difícil es venderlos bien. La identidad de marca, las galerías, el sitio con dominio propio y el LinkHub pesan más que el tape chart.",
      items: [
        "Identidad de marca con paleta extraída del logo, tono, narrativa y audiencias.",
        "Sitio con plantilla autocompletada desde tus datos reales, en tu dominio.",
        "LinkHub con QR para imprimir, y el motor como botón principal.",
        "Capa agéntica: el alojamiento queda legible para un modelo de lenguaje, no sólo para Google.",
      ],
    },
    grupos: {
      eyebrow: "Grupos y cadenas chicas",
      title: "Varias propiedades, *un solo lugar*.",
      lead:
        "Una compañía puede tener varias propiedades, y una persona puede pertenecer a varias compañías. Además, una membresía se puede acotar a propiedades concretas: el encargado de un hotel ve su hotel y nada más.",
      items: [
        "Selector de compañía, propiedad y espacio de trabajo en el escritorio.",
        "Membresías acotadas a una lista de propiedades, o a todas.",
        "Diez capacidades administrativas asignables por membresía, además del rol.",
        "Plantillas de propiedad: una propiedad nueva arranca con los espacios y apps ya configurados.",
      ],
    },
    roles: {
      eyebrow: "Por puesto",
      title: "Y adentro, *cada uno ve lo suyo*.",
      lead:
        "El espacio de trabajo activo decide el menú, la pantalla de inicio, los permisos efectivos y hasta el recorrido de inducción. No es un permiso que esconde botones: es una composición distinta del mismo sistema.",
      items: [
        {
          title: "Recepción",
          desc: "Panel del día, reservas, calendario, carga manual y estado de habitaciones. La home muestra check-ins, check-outs y reservas recientes.",
        },
        {
          title: "Housekeeping",
          desc: "Estado de habitaciones y plano de ocupación. La home muestra unidades en limpieza y salidas pendientes, y el menú no tiene tarifas ni revenue.",
        },
        {
          title: "Marketing",
          desc: "Builder, sitios, galerías, reseñas, marca y LinkHub. La home muestra score de reseñas, visibilidad y estado del LinkHub. Ni asoma el hub Reservas.",
        },
        {
          title: "Revenue y dueño",
          desc: "Informes y RMS completos: pace, comp-set, eventos, reglas y recomendaciones, más ADR, RevPAR y producción por canal.",
        },
        {
          title: "Administración",
          desc: "Ve el catálogo completo automáticamente, incluidas las apps que se agreguen en el futuro. Es el espacio que gestiona usuarios, propiedades y facturación.",
        },
        {
          title: "El huésped",
          desc: "StayPass: su cuenta, sus reservas, el detalle, la cancelación y su perfil. Se registra una vez y acumula los alojamientos donde reservó.",
        },
      ],
    },
    cta: {
      title: "Contanos cómo *operás vos*.",
      lead:
        "En el alta hay un paso donde elegís tu arquetipo de operación, y de ahí salen los espacios de trabajo y las apps iniciales. Si no encaja ninguno, escribinos y lo vemos.",
      steps: [
        "Elegís tipo de alojamiento y modelo de venta.",
        "El alta te arma los espacios de trabajo.",
        "Ajustás apps y permisos por puesto.",
      ],
    },
  },

  /* --------------------------------------------------------------- precios */
  precios: {
    meta: {
      title: "Precios",
      description:
        "Un plan por alojamiento, sin comisión por reserva y sin costo de puesta en marcha. Mirá qué productos incluye cada plan y qué todavía no hacemos.",
    },
    hero: {
      eyebrow: "Precios",
      title: "Un plan por alojamiento, *sin comisión por reserva*.",
      lead:
        "Lo que reservan por tu motor es tuyo entero. No hay porcentaje por reserva, no hay costo de puesta en marcha y no hay un módulo escondido que aparece en la segunda factura.",
      notes: ["Sin tarjeta para empezar", "Sin permanencia", "Sin costo de alta"],
    },
    matrix: {
      eyebrow: "Comparativa",
      title: "Qué entra *en cada plan*.",
      lead:
        "Esta tabla sale del mismo catálogo con el que el sistema resuelve tu cuenta. No es una versión de marketing de los planes: son los planes.",
    },
    noCharge: {
      eyebrow: "Lo que no se cobra aparte",
      title: "Las líneas que *no* vas a ver en la factura.",
      items: [
        {
          title: "Comisión por reserva",
          desc: "Cero. El motor es tuyo y no nos quedamos con un porcentaje de lo que vendas por él.",
        },
        {
          title: "Envío de emails",
          desc: "Los mails al huésped salen del dominio de bookfer, sin servicio de correo aparte ni configuración de SMTP por hotel.",
        },
        {
          title: "Puesta en marcha",
          desc: "El alta es autogestionada. Para las primeras cohortes acompañamos la carga de habitaciones sin cargo.",
        },
        {
          title: "Sitio web y dominio",
          desc: "El constructor y el renderer están en el plan. El dominio lo registrás vos donde quieras y lo apuntás acá.",
        },
        {
          title: "Usuarios adicionales",
          desc: "Dentro del tope del plan, agregás a quien necesites. No se cobra por asiento.",
        },
        {
          title: "Cargo por transacción",
          desc: "No existe, porque todavía no hay pasarela de pago: el cobro al huésped es contra el check-in.",
        },
      ],
    },
    honest: {
      eyebrow: "Antes de que decidas",
      title: "Lo que un plan de bookfer todavía no incluye",
      text: "No está en ningún plan porque no existe todavía, no porque sea un extra: **channel manager** —no hay sincronización de inventario ni tarifas con OTAs— y **pasarela de pago** —no se cobra online—. Las tarifas de competidores externos se cargan a mano, y las fichas de Google Business y de OTAs se editan adentro pero se copian al destino a mano.",
      link: "Ver el estado completo del producto",
    },
    faqTitle: "Preguntas sobre precios",
    faq: [
      {
        q: "¿Cobran comisión por reserva?",
        a: "No. El motor es tuyo y lo que entra por ahí es tuyo entero. El plan es una suscripción por alojamiento y no hay un porcentaje por reserva ni un cargo por transacción — entre otras cosas porque **tampoco hay pasarela de pago todavía**: el cobro es contra el check-in.",
      },
      {
        q: "¿Hay costo de puesta en marcha?",
        a: "No. El alta es autogestionada: nueve pasos guiados que hacés vos, con el progreso guardado en el servidor. Para las primeras cohortes ofrecemos acompañamiento en vivo en el paso de carga de habitaciones —el que más cuesta— y tampoco se cobra.",
      },
      {
        q: "¿Qué pasa cuando se termina el período gratis?",
        a: "Elegís un plan pago o dejás de usarlo. No hay permanencia ni penalidad. Estamos en piloto de mercado: lo que buscamos de esta etapa es evidencia real de uso, no facturación.",
      },
      {
        q: "¿Se paga por usuario?",
        a: "No: cada plan trae un tope de usuarios y de propiedades, y dentro de ese tope agregás a quien quieras sin cargo por persona. Los topes están en la comparativa de arriba.",
      },
      {
        q: "¿El revenue management se paga aparte?",
        a: "En los sistemas grandes casi siempre sí: el RMS es un módulo adicional que se cotiza por separado. Acá es un producto más del catálogo y entra o no según el plan — la comparativa de arriba te lo dice fila por fila.",
      },
    ],
    cta: {
      title: "Empezá gratis y *después vemos*.",
      lead:
        "No pedimos tarjeta para el alta. Si en dos semanas el sistema no te cambió nada, no hay nada que cancelar.",
      steps: [
        "Te das de alta sin tarjeta.",
        "Cargás la propiedad y las habitaciones.",
        "Elegís plan cuando el período gratis termine.",
      ],
    },
  },

  /* -------------------------------------------------------------- nosotros */
  nosotros: {
    meta: {
      title: "Nosotros",
      description:
        "Por qué existe bookfer, cómo trabajamos y en qué estado está cada parte del producto — incluido lo que todavía no hace.",
    },
    hero: {
      eyebrow: "Nosotros",
      title: "Software para el alojamiento que *no tiene un área de sistemas*.",
      lead:
        "bookfer nació de una observación simple: un hotel de veinte habitaciones o un complejo de seis cabañas necesita exactamente las mismas siete piezas que una cadena, y ninguna de las opciones del mercado se las da juntas a un precio que tenga sentido a esa escala.",
      secondary: "Ver el producto",
    },
    thesis: {
      eyebrow: "La tesis",
      title: "Un alojamiento chico no debería necesitar *cinco proveedores y un consultor*.",
      p1: "Hoy la salida típica es un PMS por un lado, un motor por otro, una web hecha por alguien que ya no contesta, un Excel de tarifas y las consultas cayendo en un WhatsApp que nadie ordena. Cada pieza funciona; el conjunto no. Y el trabajo de mantener el conjunto alineado lo termina haciendo, a mano, la persona de recepción.",
      p2: "La apuesta de bookfer es que ese conjunto sea un solo sistema con una sola base de datos, que se pueda dar de alta sin ayuda, y que cada puesto de trabajo vea únicamente lo suyo. Todo lo demás —el RMS, la capa de agentes, el asistente— sale de ahí: son cosas que sólo se pueden hacer bien cuando los datos ya son uno solo.",
    },
    principles: {
      eyebrow: "Cómo trabajamos",
      title: "Cuatro decisiones que *no se negocian*.",
      items: [
        {
          title: "Un dato, un lugar",
          desc: "Una habitación se carga una vez. Si aparece en el motor, en el sitio, en el RMS y en el LinkHub es porque es la misma fila, no porque haya una sincronización de por medio. La mayoría de los problemas de un stack hotelero son problemas de dos sistemas que dicen cosas distintas del mismo cuarto.",
        },
        {
          title: "El estado se dice",
          desc: "Si algo no está, lo decimos en el sitio y no en la tercera llamada. Un piloto que empieza con una expectativa inflada termina en una baja silenciosa a las cuatro semanas, y esa baja no nos enseña nada. Preferimos menos altas y saber por qué se quedan las que se quedan.",
        },
        {
          title: "Los permisos son de verdad",
          desc: "Esconder un botón no es un permiso. Cada operación se evalúa contra la política del servicio, y el asistente de IA opera suplantando la identidad real de quien pregunta, con un permiso de vida corta que se renueva en cada llamada. No hay una cuenta de servicio con superpoderes detrás.",
        },
        {
          title: "La fricción del alta es un bug",
          desc: "Configurar un servidor de correo, esperar una llamada de onboarding, pagar una puesta en marcha: cada una de esas cosas es gente que se queda afuera. El alta son nueve pasos que hacés solo, y los emails al huésped salen sin que configures nada.",
        },
      ],
    },
    status: {
      eyebrow: "Estado del producto",
      title: "Qué anda, qué anda a medias y *qué no existe*.",
      lead:
        "Esta tabla es la misma que usamos internamente para decidir qué se construye. La publicamos porque la alternativa —que lo descubras en la tercera semana— no le sirve a nadie, y menos a nosotros.",
      groups: [
        {
          label: "Sólido y en producción",
          tone: "ok",
          rows: [
            {
              name: "Modelo de venta dual",
              desc: "Pool de categoría y unidad única 1:1, elegible por categoría, con detección de estado mixto, auto-corrección y asistente de migración con borrador, vista previa y cancelación.",
            },
            {
              name: "Anti-overbooking",
              desc: "Candado único por unidad y fecha en la base de datos. Los bloqueos de mantenimiento usan el mismo candado.",
            },
            {
              name: "Motor de reservas",
              desc: "Flujo completo con calendario informativo, Estudio del Motor de siete bloques, dos modos de confirmación y expiración automática de pendientes.",
            },
            {
              name: "Multi-moneda",
              desc: "Moneda base, de cobro y de comparación, con congelamiento al check-in, diez monedas y cotización elegible para ARS —blue, MEP, CCL u oficial—.",
            },
            {
              name: "Calendario tape chart",
              desc: "Mover y redimensionar con vista previa del resultado y de los conflictos antes de aplicar.",
            },
            {
              name: "Revenue management",
              desc: "Analítica de doble eje, pace con benchmark propio, comp-set, eventos, reglas con ensayo en seco y lazo cerrado hacia el motor de precios.",
            },
            {
              name: "Builder y renderer",
              desc: "Constructor visual con componentes de dominio, multi-idioma, dominios propios, popups y editor de SEO y GEO.",
            },
            {
              name: "LinkHub",
              desc: "Diez tipos de bloque, temas, programación por fecha, QR y analítica de visitas y clics.",
            },
            {
              name: "Bookfer IA",
              desc: "272 herramientas y política de permisos en tres capas, con suplantación de identidad y permiso de vida corta.",
            },
            {
              name: "Soporte y alta",
              desc: "37 recorridos guiados, inducción por espacio de trabajo y alta de nueve pasos con reanudación en otro dispositivo.",
            },
          ],
        },
        {
          label: "Parcial: existe, pero no completo",
          tone: "partial",
          rows: [
            {
              name: "Presencia online",
              desc: "Funciona pero está oculta del menú por decisión de producto. Las conexiones de redes son declaradas —carga manual, sin OAuth real— y la sincronización con OTAs marca estado pero no publica.",
            },
            {
              name: "Google Business",
              desc: "La ficha se edita y se puede marcar como publicada en el modelo, pero no hay API de Google conectada: hoy se copia al destino a mano.",
            },
            {
              name: "Tarifas de competencia",
              desc: "El descubrimiento de competidores es automático; las tarifas externas se cargan a mano. Preparado para Lighthouse, RateGain, PriceLabs y KeyData, sin conectar.",
            },
            {
              name: "Contratos y créditos de IA",
              desc: "El plan define qué productos tiene cada compañía y los créditos de IA se miden y se reportan, pero todavía no bloquean el acceso ni imponen cuota.",
            },
            {
              name: "Facturación",
              desc: "Existe la capacidad de gestionar facturación y el plan vive en la compañía, pero no hay un sistema de facturación conectado.",
            },
          ],
        },
        {
          label: "No existe todavía",
          tone: "none",
          rows: [
            {
              name: "Channel manager",
              desc: "No hay integración de inventario ni de tarifas con OTAs. Lo único que hay es una bitácora de eventos que registra cada cambio relevante de una reserva —creada, confirmada, asignada, movida, check-in, check-out, cancelada, no-show— pensada para alimentar esa integración cuando exista. Hoy es un archivo para replay y diagnóstico, no una conexión.",
            },
            {
              name: "Pasarela de pago",
              desc: "No se cobra online. El modelo de compañía tiene la marca de pagos, pero no hay pasarela: el cobro es contra el check-in, presencial, con el tipo de cambio congelado en ese momento.",
            },
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Dónde estamos",
      title: "En piloto de mercado, *a propósito*.",
      lead:
        "No estamos tratando de facturar esta etapa. Estamos tratando de contestar cuatro preguntas con datos, y las cuatro dependen de que haya alojamientos usando el sistema en serio, con reservas reales adentro.",
      questions: [
        "¿El alta se completa sola, o hay un paso puntual donde la gente abandona?",
        "¿Los huéspedes reservan por el motor, o el hábito vuelve al chat aunque el link exista?",
        "¿Qué pide la gente que lo usa en serio, y en qué se diferencia de lo que pide quien lo probó y no volvió?",
        "¿Para qué se usa el asistente cuando nadie está mirando?",
      ],
      stats: [
        { value: "2026", label: "año del piloto de mercado" },
        { value: "AR", label: "hecho en Argentina, en español" },
        { value: "5", label: "idiomas de plataforma" },
        { value: "0", label: "comisión por reserva del motor" },
      ],
    },
    cta: {
      title: "Si algo de esto *te suena a tu problema*.",
      lead:
        "Escribinos y lo charlamos sin vueltas. Si bookfer todavía no sirve para tu caso, te lo vamos a decir en esa misma conversación.",
      steps: [
        "Nos contás cómo operás hoy.",
        "Te decimos qué resuelve y qué no.",
        "Si tiene sentido, arrancamos el alta juntos.",
      ],
    },
  },

  /* -------------------------------------------------------------- contacto */
  contacto: {
    meta: {
      title: "Contacto",
      description:
        "Escribinos y lo charlamos sin vueltas: qué resuelve bookfer para tu alojamiento y qué todavía no. También podés empezar el alta gratis vos mismo.",
    },
    eyebrow: "Contacto",
    title: "Contanos cómo *recibís reservas hoy*.",
    lead:
      "No hace falta que sepas qué módulo necesitás. Con saber cuántas unidades tenés, si vendés en OTAs y qué parte del día se te va contestando disponibilidad, ya alcanza para decirte si bookfer te sirve — o si todavía no.",
    checks: [
      "Te contestamos dentro del día hábil.",
      "Si algo que necesitás todavía no existe, te lo decimos ahí mismo.",
      "Si querés, hacemos juntos la carga de habitaciones en una llamada corta.",
    ],
    directLabel: "O escribinos directo",
    shortcutTitle: "¿Preferís no esperar una respuesta?",
    shortcutText:
      "El alta es autogestionada, gratuita y no pide tarjeta. Podés tener el motor funcionando antes de que contestemos este formulario.",
    whatsappMessage: "Hola, quiero conocer bookfer para mi alojamiento.",
  },

  /* ----------------------------------------------------------------- legal */
  legal: {
    updated: "Última actualización",
    updatedDate: "30 de agosto de 2026",
    privacy: {
      meta: {
        title: "Política de privacidad",
        description:
          "Qué datos toma bookfer en este sitio y en la plataforma, con qué proveedores los procesa y cómo pedir que se borren.",
      },
      title: "Política de privacidad",
      lead: "Qué datos tomamos, para qué, con quién los procesamos y cómo pedir que se borren.",
      blocks: [
        { h: "1. Quiénes somos" },
        {
          p: "bookfer es una plataforma de gestión para alojamientos operada desde Argentina. Para cualquier cuestión relacionada con tus datos personales podés escribirnos a [hola@bookfer.com](mailto:hola@bookfer.com).",
        },
        { h: "2. Dos roles distintos" },
        { p: "Conviene separarlos porque las obligaciones no son las mismas:" },
        {
          ul: [
            "**Este sitio y la relación comercial con vos.** Acá somos responsables de los datos: los tomamos para contactarte y para entender de dónde llegan las consultas.",
            "**La plataforma.** Cuando un alojamiento carga los datos de sus huéspedes en bookfer, el responsable de esos datos es el alojamiento; nosotros los procesamos por su cuenta y según sus instrucciones.",
          ],
        },
        { h: "3. Qué datos tomamos en este sitio" },
        {
          ul: [
            "**Los que nos das en el formulario:** nombre, email, teléfono, nombre del alojamiento y el mensaje que escribas. El único obligatorio es el email.",
            "**Parámetros de campaña (UTM)** presentes en la URL al momento de enviar el formulario, para saber por qué vía llegaste.",
            "**Datos técnicos de la visita** registrados por el servidor que sirve el sitio, como cualquier servidor web.",
            "**Métricas de navegación**, sólo si tenemos configuradas herramientas de medición. Ver la [política de cookies](/legal/cookies).",
          ],
        },
        {
          p: "No usamos los datos del formulario para nada que no sea contactarte sobre bookfer, y no los vendemos ni los cedemos con fines publicitarios a terceros.",
        },
        { h: "4. Qué datos toma la plataforma" },
        {
          p: "Si te das de alta, además tomamos lo necesario para que el sistema funcione: los datos de tu cuenta y de tu compañía, los de tus propiedades y unidades, y los de las reservas que cargues o que entren por tu motor —incluidos los datos del huésped que hagan falta para la estadía—. Todo eso te pertenece a vos.",
        },
        { h: "5. Con quién los procesamos" },
        {
          p: "Trabajamos con proveedores que actúan por nuestra cuenta y sólo para prestar el servicio:",
        },
        {
          ul: [
            "**Envío de correo transaccional**, para las confirmaciones y avisos que salen hacia el huésped.",
            "**Almacenamiento de imágenes y archivos** de las galerías, la marca y la librería de la compañía.",
            "**Autenticación**, incluida la opción de ingresar con una cuenta social si el alojamiento la habilita.",
            "**Infraestructura y base de datos** donde corre la plataforma.",
            "**Medición y publicidad**, cuando corresponda y según lo que expliquemos en la política de cookies.",
          ],
        },
        { h: "6. Cuánto tiempo los guardamos" },
        {
          p: "Los datos de contacto comercial se conservan mientras haya una relación o un interés vigente, y se borran cuando nos lo pedís. Los datos operativos de una cuenta se conservan mientras la cuenta exista y por el plazo que corresponda a las obligaciones legales y contables aplicables.",
        },
        { h: "7. Tus derechos" },
        {
          p: "Podés pedirnos acceso a tus datos, su corrección, su actualización o su supresión escribiéndonos a [hola@bookfer.com](mailto:hola@bookfer.com). En Argentina, la Agencia de Acceso a la Información Pública es la autoridad de control en materia de protección de datos personales y atiende los reclamos de quien considere vulnerados sus derechos.",
        },
        { h: "8. Seguridad" },
        {
          p: "El acceso a la plataforma está protegido por autenticación y por un sistema de permisos con roles, capacidades y alcance por propiedad. Las operaciones sensibles quedan registradas en bitácoras de auditoría. Ningún sistema es infalible; si detectáramos un incidente que afecte tus datos, te lo comunicaríamos.",
        },
        { h: "9. Cambios" },
        {
          p: "Si actualizamos esta política, cambiamos la fecha del encabezado. Los cambios relevantes también los comunicamos por email a las cuentas activas.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Términos y condiciones",
        description:
          "Condiciones de uso de la plataforma bookfer: qué incluye el servicio, qué está en piloto, responsabilidades de cada parte y cómo se da de baja una cuenta.",
      },
      title: "Términos y condiciones",
      lead: "Las reglas de uso de la plataforma, escritas para que se entiendan.",
      blocks: [
        { h: "1. Qué es el servicio" },
        {
          p: "bookfer es una plataforma en la nube para gestionar un alojamiento: reservas, habitaciones, motor de reservas público, sitios web, revenue management, portal del huésped y un asistente de inteligencia artificial. Se accede por navegador; no se entrega software para instalar.",
        },
        { h: "2. Estado del producto" },
        {
          p: "La plataforma está en **piloto de mercado**. Hay funcionalidades declaradas como parciales y otras que no existen —entre ellas **channel manager** y **pasarela de pago**—. El detalle actualizado está publicado en [Estado del producto](/nosotros#estado) y forma parte de lo que aceptás al contratar: no prometemos funcionalidades que ahí figuren como inexistentes.",
        },
        { h: "3. Tu cuenta" },
        {
          p: "Sos responsable de las credenciales de tu cuenta y de las de las personas que des de alta. El sistema crea usuarios con una contraseña temporal que la persona debe cambiar en el primer ingreso; hasta que lo haga, la interfaz le queda bloqueada.",
        },
        {
          p: "Podés asignar roles, capacidades administrativas y alcance por propiedad. La configuración de esos permisos es tuya: nosotros proveemos el mecanismo, no decidimos quién ve qué en tu operación.",
        },
        { h: "4. Tus datos" },
        {
          p: "Los datos que cargues —propiedades, unidades, tarifas, reservas, huéspedes, contenido de tus sitios— son tuyos. Los procesamos para prestarte el servicio, según la [política de privacidad](/legal/privacidad). Si sos vos quien carga datos de huéspedes, sos el responsable de esos datos frente a ellos y ante la ley aplicable.",
        },
        { h: "5. Planes y facturación" },
        {
          p: "Cada plan define qué productos incluye y qué topes de propiedades y de usuarios tiene; lo publicado en [Precios](/precios) sale del mismo catálogo con el que se resuelve tu cuenta. Los períodos gratuitos y las pruebas tienen la duración que ahí se indique. No hay permanencia mínima ni penalidad por dar de baja.",
        },
        {
          p: "El motor de reservas no cobra comisión por reserva. El cobro al huésped no pasa por bookfer: hoy se hace contra el check-in, entre el alojamiento y el huésped.",
        },
        { h: "6. Uso aceptable" },
        { p: "No se puede usar la plataforma para:" },
        {
          ul: [
            "Publicar contenido ilegal, engañoso o que no tengas derecho a usar.",
            "Cargar reseñas falsas o atribuir a tu alojamiento señales de confianza que no sean ciertas.",
            "Intentar acceder a datos de otra compañía, o eludir los controles de permisos del sistema.",
            "Cargar de forma automatizada por fuera de las interfaces previstas, al punto de degradar el servicio para otros.",
          ],
        },
        { h: "7. Disponibilidad" },
        {
          p: "Hacemos lo razonable para que el servicio esté disponible, pero en esta etapa no ofrecemos un acuerdo de nivel de servicio con compensación. Las tareas de mantenimiento que puedan interrumpir el servicio se avisan cuando son previsibles.",
        },
        { h: "8. El asistente de IA" },
        {
          p: "El asistente ejecuta operaciones con los permisos reales de quien lo usa y deja registro de lo que hizo. Aun así, es un sistema probabilístico: **revisá lo que ejecuta** antes de dar por hecha una operación sensible, igual que revisarías el trabajo de alguien que recién entra. Las sugerencias de tarifa del módulo de revenue son eso, sugerencias: la decisión de aplicarlas es tuya.",
        },
        { h: "9. Propiedad intelectual" },
        {
          p: "El software, la marca y la documentación de bookfer son nuestros. El contenido que cargues —textos, fotos, logo, diseño de tu sitio— es tuyo, y nos autorizás a alojarlo y mostrarlo únicamente para prestar el servicio.",
        },
        { h: "10. Baja" },
        {
          p: "Podés dar de baja tu cuenta cuando quieras escribiéndonos a [hola@bookfer.com](mailto:hola@bookfer.com). Antes de cerrarla te damos un plazo razonable para que descargues lo que necesites conservar.",
        },
        { h: "11. Responsabilidad" },
        {
          p: "El servicio se presta tal como está. En la medida en que la ley lo permita, nuestra responsabilidad se limita a los importes que nos hayas abonado en los doce meses anteriores al hecho que la origine. Nada de esto limita responsabilidades que por ley no se puedan limitar.",
        },
        { h: "12. Cambios y jurisdicción" },
        {
          p: "Podemos actualizar estos términos; los cambios relevantes se avisan por email a las cuentas activas y se refleja la fecha en el encabezado. Se aplican las leyes de la República Argentina y sus tribunales competentes.",
        },
      ],
    },
    cookies: {
      meta: {
        title: "Política de cookies",
        description:
          "Qué cookies y tecnologías de medición usa el sitio de bookfer, cuáles son necesarias y cómo desactivar el resto.",
      },
      title: "Política de cookies",
      lead: "Qué guarda este sitio en tu navegador y qué podés desactivar.",
      blocks: [
        { h: "1. El sitio público" },
        {
          p: "Las páginas de `bookfer.com` son estáticas y no necesitan cookies para funcionar. No usamos cookies propias para perfilarte ni para recordar quién sos entre visitas. La única que puede aparecer es la que guarda el **idioma que elegiste** en el selector, para no devolverte a otro en la próxima visita.",
        },
        { h: "2. Medición y publicidad" },
        {
          p: "El sitio puede montar herramientas de medición de terceros —analítica de navegación, medición de conversiones de campañas y píxeles de plataformas publicitarias— cuando están configuradas. Esas herramientas sí pueden dejar cookies o identificadores en tu navegador para contar visitas y atribuir conversiones.",
        },
        {
          p: "**Sólo se cargan en el sitio publicado, nunca en las vistas previas internas.** Es una decisión técnica deliberada: mientras alguien edita una página desde el panel, esas visitas ensuciarían las métricas.",
        },
        {
          p: "También podemos enviar eventos de conversión desde nuestro servidor a la plataforma publicitaria correspondiente. Ese envío no usa cookies y no incluye el contenido de tu mensaje.",
        },
        { h: "3. La plataforma" },
        {
          p: "La aplicación en `app.bookfer.com` sí usa cookies **necesarias**: son las que mantienen tu sesión iniciada. Sin ellas no se puede usar el sistema, y no se pueden desactivar sin cerrar la sesión.",
        },
        {
          p: "La plataforma también guarda algunas preferencias en el almacenamiento local de tu navegador —el tema visual, el estado de la barra lateral, el progreso de los recorridos guiados—. Eso vive en tu equipo y no viaja a ningún lado.",
        },
        { h: "4. Cómo desactivarlas" },
        {
          p: "Podés bloquear o borrar cookies desde la configuración de tu navegador, y usar las opciones de exclusión que ofrecen las propias plataformas de analítica y publicidad. Si bloqueás todas las cookies, el sitio público sigue funcionando igual; la aplicación, no —porque no va a poder mantener tu sesión—.",
        },
        { h: "5. Consultas" },
        {
          p: "Cualquier duda sobre esto, escribinos a [hola@bookfer.com](mailto:hola@bookfer.com). Ver también la [política de privacidad](/legal/privacidad).",
        },
      ],
    },
  },

  notFound: {
    eyebrow: "Error 404",
    title: "Esta página *no existe*.",
    lead:
      "Puede que la hayamos movido o que el enlace esté mal escrito. Estos son los lugares a los que suele querer ir la gente.",
    home: "Volver al inicio",
  },
};

export default es;

/**
 * La forma del diccionario sale del castellano. Los otros cuatro idiomas se
 * declaran `: Dictionary`, así que a TypeScript le consta que tienen las
 * mismas claves: olvidarse una es un error de compilación, no un texto en
 * español apareciendo en la versión alemana.
 */
export type Dictionary = typeof es;
