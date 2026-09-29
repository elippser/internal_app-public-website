import { solEs } from "./sol/es";
import { platEs } from "./plat/es";
import { intelEs } from "./intel/es";

/**
 * El diccionario en castellano.
 *
 * Es la FUENTE DE LA FORMA: `Dictionary` se deriva de este objeto, así que
 * agregar una clave aquí y no en los otros cuatro idiomas rompe el typecheck.
 * Ese es todo el mecanismo de sincronización que tiene el sitio, y alcanza.
 *
 * Convenciones del texto:
 * - `*palabra*` en un titular → sale en el serif itálico verde de la marca.
 * - `**negrita**`, `` `código` `` y `[texto](/ruta)` dentro de un párrafo →
 *   los interpreta `RichText`. Las rutas se escriben sin idioma.
 */

const es = {
  site: {
    /* "Sistema operativo" era el sub literal de Mews y "todo en uno" el de
       media categoría (ver MANUAL-DE-MARCA-roombir.md §2.3). La tesis va en
       forma de dolor —sin cinco proveedores— y los dos claims que nadie del
       sector publica van explícitos: precio y permanencia. */
    title: "Roombir · PMS, motor, web y revenue sin cinco proveedores",
    description:
      "Reservas, motor de reservas propio, sitio web, revenue management y un asistente de IA que ejecuta, sobre una sola base de datos. Para hoteles, cabañas, hostels y alquileres de LATAM.",
    tagline: "Software hotelero sin cinco proveedores",
    /* La tarjeta OG (imagen de compartidos): titular, bajada y chips van por
       diccionario para que un share de /de/plattform no muestre castellano. */
    og: {
      title: "Tu alojamiento entero, sin cinco proveedores.",
      lead: "Reservas, habitaciones, motor propio, sitio web, revenue y un asistente que ejecuta. Sobre una sola base de datos, hecho en Argentina.",
      chips: ["PMS", "Motor de reservas", "Sitios web", "Revenue", "LinkHub", "Roombir IA"],
    },
  },

  nav: {
    /* Los tres menús del header (Plataforma, Roombir IA, Soluciones): sol/es.ts. */
    menus: { ...solEs.menus, platformPromo: platEs.promo, solutionsPromo: platEs.solPromo, intelligence: intelEs.card },
    product: "Producto",
    platform: "La plataforma",
    contact: "Contacto",
    login: "Ingresar",
    signup: "Empezar",
    home: "roombir, inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    more: "Más",
    skip: "Saltar al contenido",
    primary: "Principal",
    megaFoot: "Todo sobre una sola base de datos.",
    megaLink: "Ver la plataforma completa",
    language: "Idioma",
    featured: "El asistente",
    featuredMore: "Qué le puedes pedir",
    links: {
      solutions: "Soluciones",
      pricing: "Precios",
      about: "Nosotros",
    },
    groups: {
      operation: "La operación",
      growth: "El crecimiento",
    },
    products: {
      ia: {
        title: "Roombir IA",
        desc: "Toda la gestión, en una conversación. Le pides y lo hace, con tus permisos.",
      },
      pms: {
        title: "PMS",
        desc: "Propiedades, habitaciones, reservas y el motor, sobre un solo inventario.",
      },
      informes: {
        title: "Informes",
        desc: "Ocupación, ingresos, cancelaciones, canales y lo que está mal cargado hoy.",
      },
      revenue: {
        title: "Revenue",
        desc: "El precio de cada fecha, con la traza de por qué y tu destino a la vista.",
      },
      marketing: {
        title: "Marketing",
        desc: "Web con asistente, marca, archivos, reseñas y LinkHub, conectados a tus reservas.",
      },
    },
    /* Las cuatro partes del PMS, como las lista el mega menú debajo del
       producto. Son anclas de /producto/pms (`PMS_PARTS` en nav.ts). */
    pmsParts: {
      propiedades: "Propiedades",
      habitaciones: "Habitaciones",
      reservas: "Reservas",
      motor: "Motor de reservas",
    },
  },

  /* Páginas de soluciones por tipo de alojamiento y por cargo: sol/es.ts. */
  plataformaCompleta: platEs.page,
  intelligence: intelEs,
  solucionesIndex: solEs.index,
  solucionesPaginas: solEs.pages,

  footer: {
    claim:
      "Reservas, habitaciones, motor propio, sitio web, revenue y un asistente que ejecuta, sobre una sola base de datos.",
    nav: "Pie de página",
    columns: {
      product: "Producto",
      solutions: "Soluciones",
      company: "Empresa",
      legal: "Legal",
    },
    company: {
      about: "Quiénes somos",
      compare: "Comparativas",
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
    agentNote: "este sitio también tiene llms.txt",
    social: {
      instagram: "Roombir en Instagram",
      linkedin: "Roombir en LinkedIn",
      email: "Escribirnos por email",
    },
  },

  common: {
    startFree: "Empezar",
    seePlatform: "Ver la plataforma",
    seePricing: "Ver precios",
    talkToUs: "Hablar con nosotros",
    bookDemo: "Pedir una demo",
    writeUs: "Escríbenos",
    seeMore: "Ver más",
    faqTitle: "Preguntas frecuentes",
    noCard: "Sin tarjeta",
    noInstall: "Sin instalar nada",
    guidedSignup: "Alta guiada de nueve pasos",
    inSpanish: "En español, hecho en Argentina",
    /* Los controles del reproductor de los videos de presentación. */
    video: {
      label: "Video de presentación",
      play: "Reproducir",
      pause: "Pausar",
      unmute: "Activar el sonido",
      mute: "Silenciar",
      close: "Cerrar el video",
      volume: "Volumen",
      progress: "Progreso del video",
    },
  },

  /* Nueve afirmaciones cortas. Cada una tiene una fila en la lista blanca de
     claims del manual de marca (§8.1): si no se puede verificar, no va. */
  ticker: [
    "Una sola base de datos para todo",
    "Tape chart con vista previa",
    "Revenue con el porqué de cada tarifa",
    "llms.txt · legible por una IA",
    "Un asistente que ejecuta",
    "10 monedas, cambio congelado al check-in",
    "Emails al huésped sin configurar SMTP",
    "LinkHub con QR",
    "38 recorridos sobre la pantalla real",
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
        live: "Acaba de entrar",
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
      label: "Roombir IA",
      tag: "recepción",
      ask: "Pasa a García a la 203 desde el jueves y avísale por mail",
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
      mine: "Hotel del Parque · tú",
      sources: { own: "propia", roombir: "roombir", manual: "manual", none: "sin dato" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Descubrimiento automático por cercanía y similitud. Las tarifas externas se cargan a mano: no inventamos un número que no tenemos.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Reservar online", "WhatsApp", "Fotos de las cabañas", "Cómo llegar", "Reseñas · 4.8"],
    },
    /* Estado de habitaciones. `state` es una clave: available, occupied,
       cleaning, maintenance, blocked, checkout. */
    units: {
      label: "Habitaciones · Estado",
      tag: "piso 2",
      states: {
        available: "Disponible",
        occupied: "Ocupada",
        cleaning: "Limpieza",
        maintenance: "Mantenimiento",
        blocked: "Bloqueada",
        checkout: "Salida pendiente",
      },
      tiles: [
        { code: "201", cat: "Doble", state: "occupied" },
        { code: "202", cat: "Doble", state: "checkout" },
        { code: "203", cat: "Doble Superior", state: "cleaning" },
        { code: "204", cat: "Doble Superior", state: "available" },
        { code: "205", cat: "Triple", state: "maintenance" },
        { code: "206", cat: "Suite", state: "blocked" },
      ],
      history: "203 · salida pendiente → limpieza · Lucía · 11:42",
    },
    reports: {
      label: "Informes",
      tag: "últimos 30 días",
      kpis: [
        { label: "Ocupación", value: "72%", delta: "+8 pts" },
        { label: "ADR", value: "$96.600", delta: "+6%" },
        { label: "RevPAR", value: "$69.500", delta: "+18%" },
        { label: "Cancelación", value: "6%", delta: "−2 pts" },
      ],
      chart: "Demanda · próximos 14 días",
      hygieneTitle: "Estado y gestión",
      hygiene: [
        "2 reservas pendientes sin confirmar hace más de 24 h",
        "1 llegada de hoy sin habitación asignada",
        "1 salida de hoy que sigue en check-in",
      ],
    },
    tourism: {
      label: "Roombir IA · Estado turístico",
      tag: "expediente",
      place: "Mendoza · marzo",
      updated: "actualizado hace 2 h",
      rows: [
        { key: "feriados", value: "Carnaval **3 y 4** · fin de semana largo", src: "calendario" },
        { key: "eventos", value: "Fiesta de la Vendimia · **7 mar** · a 4 km", src: "agenda" },
        { key: "clima", value: "máxima media **29°** · 2 días de lluvia", src: "clima" },
        { key: "vuelos", value: "rutas observadas a MDZ: **Santiago, São Paulo, Aeroparque**", src: "ADS-B" },
        { key: "cambio", value: "para un brasileño, Mendoza está **más barata** que hace un año", src: "cambio real" },
      ],
      missing: { key: "a pie", value: "no se pudo leer · se omite" },
      note: "Cada dato con su fuente. Lo que no se pudo leer se marca como faltante, nunca como cero.",
    },
    builder: {
      label: "Editor · Asistente",
      tag: "borrador",
      file: "referencia.png",
      ask: "Arma la portada como la de esta captura, con mis textos",
      trace: [
        { tool: "leer la captura", ok: "hero + buscador" },
        { tool: "agregar sección · portada", ok: "ok" },
        { tool: "conectar motor de reservas", ok: "ok" },
      ],
      photo: "foto de relleno · cambiar",
      title: "Cabañas del Alerce",
      sub: "Seis cabañas de montaña en Villa La Angostura",
      bar: ["Llegada", "Salida", "2 adultos", "Buscar"],
    },
    brand: {
      label: "Marca",
      tag: "Cabañas del Alerce",
      logo: "A",
      palette: "Paleta · sacada del logo",
      rows: [
        { key: "tono", value: "Cálido y cercano" },
        { key: "tipografía", value: "Serif clásica · sugerida por el tono" },
        { key: "frase", value: "Seis cabañas entre el lago y el bosque" },
        { key: "cerca", value: "Lago Nahuel Huapi · 800 m" },
      ],
      used: "La usan la web, el LinkHub, el motor y los datos para buscadores.",
    },
    /* `status`: replied o pending. */
    reviews: {
      label: "Reseñas",
      tag: "4,8 · 126 reseñas",
      rows: [
        {
          source: "Google",
          stars: "★★★★★",
          author: "Paula R.",
          text: "La cabaña impecable y la vista al lago, lo mejor del viaje.",
          status: "replied",
        },
        {
          source: "Booking",
          stars: "★★★★☆",
          author: "Marcos T.",
          text: "Muy lindo todo. El último tramo del camino es de tierra.",
          status: "pending",
        },
        {
          source: "Airbnb",
          stars: "★★★★★",
          author: "Julia M.",
          text: "Volvemos seguro. La Coihue es enorme para cuatro.",
          status: "replied",
        },
      ],
      replied: "respondida",
      pending: "sin responder",
    },
    org: {
      label: "Compañía",
      tag: "2 propiedades",
      company: "Grupo Andino",
      select: "Hotel del Parque ▾",
      props: [
        {
          name: "Hotel del Parque",
          meta: "Mendoza · ARS · UTC−3",
          spaces: ["Recepción", "Limpieza", "Revenue"],
        },
        {
          name: "Cabañas del Alerce",
          meta: "Villa La Angostura · ARS · UTC−3",
          spaces: ["Recepción", "Marketing"],
        },
      ],
      membersTitle: "Quién ve qué",
      members: [
        { name: "Martín Sosa", scope: "todas · Administración" },
        { name: "Lucía Paz", scope: "sólo Cabañas del Alerce · Recepción" },
      ],
    },
    signals: {
      revenue: "revenue · sáb 21/03",
      applied: "aplicada al motor",
      agent: "Roombir ia",
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
    /* Textos del catálogo de planes (taglines, descripciones y nombres de
       producto) por idioma. En castellano quedan vacíos a propósito: manda el
       catálogo del panel interno, que es la fuente. Los otros idiomas pisan lo
       que el catálogo trae en castellano, por `slug` de plan y `key` de
       producto; lo que falte cae al catálogo. Los nombres de los planes y los
       precios NO se traducen aquí. */
    catalog: {
      plans: {} as Record<string, { tagline?: string; description?: string }>,
      products: {} as Record<string, { name?: string; description?: string }>,
    },
    homeTitle: "Un solo sistema, un solo precio",
    homeSubtitle:
      "Todo lo que un alojamiento necesita para operar y vender, sin cinco proveedores y sin comisión por reserva.",
    /* Si el catálogo no responde, la sección no puede quedar en blanco: en
       una marca que promete el precio publicado, eso es lo peor que puede
       pasar. */
    empty:
      "No pudimos cargar los planes en este momento. Son mensuales, por alojamiento, sin comisión por reserva y sin permanencia: [escríbenos](/contacto) y te los mandamos con número.",
    matrix: {
      caption: "Qué productos incluye cada plan de roombir",
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
        "Los precios y lo que incluye cada plan salen del mismo catálogo que usa el sistema para cobrar. Lo que ves aquí es lo que se aplica en tu cuenta.",
    },
  },

  /* ------------------------------------------------------- crear cuenta */
  /* El alta. Es la unica puerta de entrada a la plataforma: de este formulario
     sale el correo con el enlace que habilita el /register del PMS. */
  createAccount: {
    meta: {
      title: "Crear cuenta · roombir",
      description:
        "Cuéntanos de tu alojamiento y te mandamos por correo el acceso para crear tu cuenta.",
    },
    eyebrow: "Empezar",
    title: "Cuéntanos de tu *alojamiento*.",
    lead: "Cuatro datos y te mandamos el acceso por correo. El alta se completa en una tarde y la haces tú.",
    checks: [
      "Alta guiada de nueve pasos, **sin instalar nada**",
      "Migramos tus reservas y tus tarifas contigo",
      "Motor de reservas propio, en tu web y en tu LinkHub",
      "En español y con gente que atiende",
    ],
    steps: [
      { title: "Completas el formulario", text: "Cuatro datos del alojamiento y tu correo." },
      { title: "Te llega el acceso", text: "Un enlace personal, de un solo uso, que abre el alta." },
      { title: "Creas tu contraseña", text: "Y entras al sistema con el alta guiada de nueve pasos." },
    ],
    form: {
      groupProperty: "Tu alojamiento",
      groupContact: "Tus datos",
      hotelName: "Nombre del alojamiento",
      hotelNamePlaceholder: "Hotel Los Álamos",
      lodgingType: "Tipo",
      lodgingTypes: {
        hotel: "Hotel",
        apart_hotel: "Apart hotel",
        hostel: "Hostel",
        cabins: "Cabañas",
        inn_bnb: "Posada o B&B",
        apartment: "Departamentos",
        house: "Casa",
        country_house: "Casa de campo",
        resort: "Resort",
        lodge: "Lodge",
        glamping: "Glamping",
        camping: "Camping",
        villas: "Villas",
        other: "Otro",
      },
      units: "Habitaciones o unidades",
      unitsPlaceholder: "12",
      unitsHint: "Las que puedes vender hoy.",
      country: "País",
      countryCommon: "Más frecuentes",
      countryAll: "Todos los países",
      city: "Ciudad",
      cityPlaceholder: "San Martín de los Andes",
      contactName: "Tu nombre",
      contactNamePlaceholder: "Nombre y apellido",
      email: "Tu correo",
      emailPlaceholder: "tu@tualojamiento.com",
      emailHint: "Ahí te mandamos el acceso, así que tiene que ser uno que leas.",
      phone: "Teléfono o WhatsApp",
      phonePlaceholder: "+54 9 11 …",
      optional: "opcional",
      choose: "Elige una opción",
      honeypot: "No completar",
      submit: "Recibir el acceso",
      sending: "Enviando…",
      legal:
        "Usamos tus datos sólo para darte acceso y acompañarte en el alta. Puedes pedirnos que los borremos cuando quieras. Más en la [política de privacidad](/legal/privacidad).",
      errors: {
        hotelName: "Escribe el nombre de tu alojamiento.",
        lodgingType: "Elige el tipo de alojamiento.",
        units: "Indica cuántas habitaciones o unidades tienes.",
        country: "Elige el país.",
        city: "Escribe la ciudad.",
        contactName: "Escribe tu nombre.",
        emailRequired: "Escribe tu correo.",
        emailInvalid: "Ese correo no parece válido.",
        disposable: "Usa una dirección permanente: el acceso se manda ahí.",
        rate: "Demasiados intentos seguidos. Prueba de nuevo en unos minutos.",
        mail: "No pudimos enviarte el correo. Prueba de nuevo en unos minutos.",
        generic: "No pudimos enviarlo. Escríbenos a hola@roombir.com.",
        network: "No pudimos conectarnos. Revisa tu conexión y prueba de nuevo.",
      },
      done: {
        title: "Revisa tu correo",
        /* El {email} lo reemplaza el formulario: una función no puede viajar
           como prop a un componente cliente. */
        text: "Te mandamos el acceso a {email}. El enlace es personal y sirve una sola vez.",
        textNoEmail: "Te mandamos el acceso por correo. El enlace es personal y sirve una sola vez.",
        notes: [
          "Si no aparece en unos minutos, mira en spam o promociones.",
          "El enlace vence en 7 días.",
          "Si te equivocaste de dirección, completa el formulario otra vez.",
        ],
      },
    },
  },

  leadForm: {
    name: "Nombre",
    namePlaceholder: "Cómo te llamas",
    email: "Email",
    emailPlaceholder: "tu@tualojamiento.com",
    phone: "Teléfono o WhatsApp",
    phonePlaceholder: "+54 9 11 …",
    company: "Alojamiento",
    companyPlaceholder: "Nombre del hotel, cabañas o apart",
    message: "Cuéntanos cómo recibes reservas hoy",
    messagePlaceholder:
      "Cuántas unidades tienes, si vendes en OTAs, y qué te gustaría dejar de hacer a mano.",
    optional: "opcional",
    submit: "Enviar",
    sending: "Enviando…",
    honeypot: "No completar",
    errorGeneric: "No pudimos enviarlo.",
    errorRate: "Demasiados envíos seguidos.",
    errorTail: "Si sigue fallando, escríbenos a hola@roombir.com.",
    legal:
      "Usamos tus datos sólo para contactarte sobre roombir. Puedes pedirnos que los borremos cuando quieras. Más en la [política de privacidad](/legal/privacidad).",
    doneTitle: "Listo, nos llegó.",
    doneText:
      "Te escribimos en las próximas horas. Si prefieres no esperar, puedes empezar el alta ahora mismo: es guiada y la haces tú.",
  },

  /* ------------------------------------------------------------------ home */
  home: {
    /* El titular animado del template: dos palabras, una palabra con la
       píldora al lado, y la línea final en serif itálica. Problema y
       solución en una frase, para el alojamiento que hoy se lleva a mano
       (cuaderno, planilla, WhatsApp) y quiere crecer (29-09-2026): "del
       pasado" alude a esa forma vieja sin nombrarla —no decir Excel— y el
       remate es la ambición. La píldora le quita el miedo a complicarse
       con un claim verificable: el alta es guiada y no se instala nada. */
    hero: {
      l1a: "Saca tu",
      l1b: "alojamiento",
      l2: "del pasado",
      pill: "sin instalar\nnada",
      l3a: "y hazlo",
      l3b: "crecer.",
      kicker: "Sistema de gestión para alojamientos",
      /* La bajada, en una frase: qué es y qué trae. El titular vende el
         problema; esto dice el producto. */
      lead: "Software para hoteles, cabañas, hostels y alquileres: reservas, motor propio, sitio web, revenue y un asistente de IA, sobre una sola base de datos.",
    },

    /* La sección blanca tras el hero (29-09-2026): encabezado con botón a la
       derecha y tres tarjetas foto + título + texto, al estilo de Hostaway y
       Guesty, con los tres resultados adaptados a lo que hay: un solo
       inventario (no channel manager), el asistente que ejecuta y Revenue.
       `cardLabel` es la etiqueta de la tarjeta dentro de la conversación. */
    works: {
      eyebrow: "Qué cambia",
      title: "Gestiona todo tu alojamiento *desde un solo lugar*.",
      cardLabel: "Reserva actualizada",
      items: [
        {
          title: "Ni una reserva doble",
          text: "Tu web, tu LinkHub y la recepción venden el mismo inventario. Una noche de una unidad se vende una sola vez, y la disponibilidad cambia en el momento, sin sincronizar nada.",
        },
        {
          title: "Delega la operación al asistente",
          text: "Se lo pides en una frase: mover una reserva, cambiar una tarifa, avisar al huésped. Lo hace con tus permisos y te muestra qué tocó, con deshacer a mano.",
        },
        {
          title: "Cobra el precio que cada fecha merece",
          text: "Revenue calcula el precio de cada fecha con el porqué a la vista (ocupación, ritmo, eventos, competencia) y lo aplica al motor solo.",
        },
      ],
    },
    // La habitación en 3D bajo la cinta: la cámara sigue al cursor.
    room: {
      eyebrow: "Hecho para alojamientos",
      title: "Cada habitación, *en su lugar*.",
      lead: "Reservas, limpieza, tarifas y huésped de cada unidad viven en la misma base de datos: lo que cambia en una pantalla ya cambió en todas.",
      hint: "Mueve el cursor para recorrerla",
      label: "Ilustración en 3D de una habitación",
    },
    swap: {
      eyebrow: "Por qué existe",
      title: "Lo que hoy *compras por separado*.",
      lead:
        "Un alojamiento chico o mediano no debería necesitar cinco proveedores y un consultor para operar digitalmente. La tesis de Roombir es exactamente esa, y es lo que decide cada decisión de producto dentro.",
      headOld: "Lo que hoy compras aparte",
      headNew: "En roombir",
      rows: [
        { old: "PMS de reservas y habitaciones", now: "Áreas Reservas + Habitaciones" },
        { old: "Motor de reservas / booking engine", now: "Motor público + Estudio del Motor" },
        { old: "Constructor de sitio web", now: "Builder + renderer con dominio propio" },
        { old: "RMS de revenue management", now: "Área Revenue" },
        { old: "Link-in-bio y presencia digital", now: "LinkHub + Presencia Online" },
        { old: "Portal del huésped", now: "StayPass" },
        { old: "Asistente / automatizaciones", now: "Roombir IA" },
      ],
    },
    modules: {
      eyebrow: "Qué es",
      title: "Un solo sistema, *ningún puente* entre sus partes.",
      lead:
        "No son integraciones que se sincronizan de noche: son vistas distintas de los mismos datos. Cambiar el precio de una categoría se ve en el motor en el momento, sin publicar nada.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Toda la gestión en una conversación. Crea y mueve reservas, cambia tarifas y edita tu web con tus permisos, y antes de opinar sobre tu destino lee un expediente con quince fuentes fechadas.",
        },
        pms: {
          title: "PMS",
          desc: "Propiedades, habitaciones, reservas y el motor que ve el huésped, sobre un solo inventario. Cargas una vez y operas en el calendario.",
        },
        informes: {
          title: "Informes",
          desc: "Ocupación, ingresos, cancelaciones y canales, y lo que está mal cargado hoy.",
        },
        revenue: {
          title: "Revenue",
          desc: "El precio de cada fecha con la traza de por qué, y la tarifa que entra sola al motor.",
        },
        marketing: {
          title: "Marketing",
          desc: "Web con asistente, marca, fotos, reseñas y LinkHub, todo leyendo tus reservas.",
        },
      },
    },
    /* Cómo funciona, en cuatro pasos y en el orden en que se usa. Es el
       flujo del PMS más lo que se le cuelga (web, revenue, asistente). Cada
       paso enlaza a su producto. */
    how: {
      eyebrow: "Cómo funciona",
      title: "De la propiedad a la reserva, *en cuatro pasos*.",
      lead:
        "Se carga una vez y se usa en el orden en que pasa un día de recepción. No hay un módulo que haya que conectar con otro.",
      steps: [
        {
          title: "Cargas la propiedad y las habitaciones",
          text: "Tipo, dirección, moneda y contacto; después las categorías y las unidades, por pool o con nombre propio. La disponibilidad se inicializa sola.",
          href: "/producto/pms",
          link: "Ver el PMS",
        },
        {
          title: "Publicas tu web y tu link con el motor dentro",
          text: "El sitio y el LinkHub salen de la misma marca y leen el mismo inventario. El huésped ve el precio de cada día y reserva solo.",
          href: "/producto/marketing",
          link: "Ver Marketing",
        },
        {
          title: "Las reservas entran y las operas",
          text: "Panel del día, lista y calendario de cinta. Una noche de una unidad se vende una sola vez, y el correo al huésped sale sin configurar nada.",
          href: "/producto/pms",
          link: "Ver Reservas",
        },
        {
          title: "Los números y el precio, sin planilla",
          text: "Informes sobre las mismas reservas, Revenue con el porqué de cada tarifa y un asistente al que le pides el resto en una frase.",
          href: "/producto/ia",
          link: "Ver Roombir IA",
        },
      ],
    },
    spaces: {
      eyebrow: "Lo que no tiene nadie más",
      title: "Cada puesto ve *su* sistema, no el tuyo.",
      lead:
        "Recepción, housekeeping, marketing y administración trabajan sobre los mismos datos, pero cada espacio de trabajo tiene su propio menú, su propia pantalla de inicio y sus propios permisos. Nadie aprende a ignorar la mitad de una aplicación.",
      items: [
        "El menú se arma solo: un espacio de marketing **no muestra** el área Reservas.",
        "La pantalla de inicio se recompone: recepción ve check-ins, housekeeping ve unidades en limpieza.",
        "Los permisos son por app y por nivel: **operar**, **configurar** o nada.",
        "La inducción de una persona nueva se arma con lo que ese espacio tiene, y con nada más.",
      ],
    },
    sale: {
      eyebrow: "Modelo de venta",
      title: "Un hotel y una cabaña *no se venden igual*.",
      lead:
        "Casi todos los sistemas eligen un lado: o son de hotel urbano o son de alquiler vacacional. Aquí el modo se define por categoría, y hay un asistente para migrar de uno al otro cuando ya tienes reservas dentro.",
      poolTitle: "Pool de categoría",
      poolText:
        "La categoría agrupa N habitaciones intercambiables. El huésped compra “una Doble Superior”, no la 203, y el motor elige la unidad al confirmar —minimizando huecos o equilibrando el desgaste, como prefieras—. También puedes dejarla sin asignar para que recepción decida.",
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
        "El datepicker del motor muestra, día por día y según lo que tú habilites, el precio desde, cuántas unidades quedan y qué días están cerrados. Si prefieres, se apaga con un interruptor y vuelve a ser un selector de fechas común.",
      items: [
        "Precio desde y unidades restantes en cada día del mes.",
        "Cerrado a la llegada, cerrado a la salida y mínimo de noches, marcados donde se miran.",
        "Siete bloques configurables del checkout, sin tocar código ni republicar el sitio.",
        "Confirma el huésped por email o confirmas tú: las pendientes vencen solas.",
      ],
      link: "Ver el motor completo",
    },
    agentic: {
      eyebrow: "La apuesta",
      title: "Tu alojamiento, *reservable por una IA*.",
      lead:
        "La gente ya no busca solamente en Google: le pregunta a un modelo. Un alojamiento que un agente no puede leer no aparece en esa respuesta. El motor publica su inventario en formatos hechos para máquinas, y el editor de GEO deja declarar qué es tu propiedad, para quién, y qué la hace confiable.",
      items: [
        "**llms.txt** — quién eres, qué vendes y cómo se reserva, en texto plano.",
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
        "Eventos de demanda ingestados solos —feriados, ferias, conciertos— y curados por ti.",
        "Al aceptar una recomendación, la tarifa **entra al motor**. El lazo se cierra sin copiar y pegar.",
      ],
      link: "Ver Revenue",
    },
    ia: {
      eyebrow: "Roombir IA",
      title: "Un asistente que *opera*, no que sugiere.",
      lead:
        "No es un chat que te explica dónde hacer clic. Consulta disponibilidad, crea reservas, mueve una estadía con vista previa, ajusta tarifas, aprueba eventos del RMS o publica un sitio. Y hace todo eso con tus permisos, no con los suyos.",
      items: [
        "Todo lo que se hace en la app se le puede pedir en una frase.",
        "Se ve la transcripción del turno: qué herramienta usó y qué devolvió.",
        "Responde con tarjetas accionables, no sólo con texto.",
        "Tres capas de permisos: filtrado antes del turno, contexto en el prompt y evaluación en cada llamada.",
      ],
      link: "Ver Roombir IA",
    },
    guarantees: {
      eyebrow: "Tres cosas que no vas a tener que pensar",
      title: "Las garantías *estructurales*.",
      items: [
        {
          key: "unidad + fecha",
          title: "Una noche no se puede vender dos veces",
          text: "Cada noche de cada habitación es un candado único en la base de datos, no una validación que se pueda saltar con dos personas reservando al mismo tiempo. Los bloqueos de mantenimiento usan el mismo candado, así que descuentan inventario real y desaparecen del motor.",
        },
        {
          key: "moneda base · cobro · display",
          title: "El importe cobrado no se te mueve después",
          text: "Los precios viven en una moneda base, cobras en otra, y el huésped puede mirar en una tercera. La conversión se muestra viva hasta el check-in y ahí se congela. Para pesos argentinos eliges qué cotización usar: blue, MEP, CCL u oficial.",
        },
        {
          key: "reservations@roombir.com",
          title: "No configuras un servidor de correo",
          text: "Todos los mails al huésped —confirmación, token, aviso de cambio— salen del dominio de Roombir con tu casilla como responder-a. Es una de las fricciones clásicas del alta de un PMS y se eliminó a propósito.",
        },
      ],
    },
    stats: {
      eyebrow: "El tamaño real",
      title: "No son promesas: *ya está construido*.",
      lead:
        "Roombir está en piloto de mercado, así que todavía no vamos a mostrarte un contador de hoteles inflado. Lo que sí podemos mostrar es lo que hay dentro del producto hoy.",
      items: [
        { value: "21", label: "apps activables por espacio de trabajo" },
        { value: "38", label: "recorridos guiados sobre la pantalla real" },
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
        "Nueve pasos en tres etapas, con el progreso guardado en el servidor: puedes abandonar en la mitad y seguir desde otro dispositivo. En el escritorio te queda una tarjeta para retomar donde estabas.",
      steps: [
        {
          num: "Etapa 1 · pasos 0–4",
          title: "Configuración",
          text: "Tu empresa, tu propiedad con dirección en el mapa, zona horaria y moneda, tu identidad de marca —la paleta se extrae de tu logo— y cómo operas. De ese último paso salen los espacios de trabajo y las apps iniciales.",
        },
        {
          num: "Etapa 2 · pasos 5–7",
          title: "Carga de datos",
          text: "Tipos de habitación y unidades, con creación masiva para no cargar veinte veces lo mismo. Después, las primeras promociones y una revisión del motor. Al cerrar la etapa, la disponibilidad se inicializa sola.",
        },
        {
          num: "Etapa 3 · paso 8",
          title: "Recorridos",
          text: "Cada app que te tocó tiene un recorrido guiado que se dibuja encima de la pantalla real y resalta el elemento del que habla. A partir de ahí, cada persona nueva del equipo tiene su inducción según su espacio.",
        },
      ],
    },
    /* Los sellos propios. Cada ítem tiene un `href` donde se comprueba lo
       que afirma; `/llms.txt` va sin idioma porque vive en public/. */
    commitments: {
      eyebrow: "Lo que otros no dicen",
      title: "Tres cosas que *puedes verificar* antes de hablar con nadie.",
      lead:
        "En esta categoría lo que falta se entera en la tercera semana y la demo llega antes que el producto. Aquí va al revés: cada una de estas tres líneas tiene un lugar donde se comprueba.",
      verify: "Verificar",
      items: [
        {
          key: "traza",
          title: "Cada acción de la IA, a la vista",
          text: "El asistente ejecuta con tus permisos y deja la transcripción de cada turno: qué herramienta usó, con qué datos y qué cambió, **con deshacer a mano**.",
          href: "/producto/ia",
        },
        {
          key: "ia",
          title: "Este sitio lo puede leer una IA",
          text: "Tiene su `llms.txt` con los mismos números que esta página. Predicamos con el ejemplo antes de pedírtelo a ti.",
          href: "/llms.txt",
        },
        {
          key: "alta",
          title: "Alta guiada, sin instalar nada",
          text: "Te das de alta solo, en nueve pasos que se guardan en el servidor, y entras por el navegador. **No hay llamada previa** ni puesta en marcha que esperar.",
          href: "/crear-cuenta",
        },
      ],
    },
    /* Un martes de recepción, hoy y con el sistema. Cada fila de la derecha
       nombra un mecanismo real del producto, no un beneficio. */
    day: {
      eyebrow: "Un martes cualquiera",
      title: "El mismo día, *con y sin* roombir.",
      lead:
        "No es una promesa de más reservas: es un día de recepción de un alojamiento de doce unidades. Lo de la izquierda es lo que nos cuentan en la primera llamada; lo de la derecha, lo que hace el sistema en cada uno de esos momentos.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "08:10",
          old: "Tres WhatsApp preguntando disponibilidad para el fin de semana. Abres el Excel para contestar uno por uno.",
          now: "Las tres consultas ya miraron el calendario del motor: precio y unidades restantes, día por día. Dos reservaron solas.",
        },
        {
          time: "09:30",
          old: "Un huésped pagó un anticipo en pesos hace un mes. Hay que recalcular a mano cuánto falta, con el dólar de hoy.",
          now: "La reserva guarda la conversión y se congela al check-in. El importe pendiente no se movió.",
        },
        {
          time: "11:00",
          old: "Llegó García y no sabes en qué habitación va. Housekeeping tampoco.",
          now: "Recepción le pide al asistente que lo pase a la 203 y avise por mail. Housekeeping lo ve en su tablero sin que nadie le escriba.",
        },
        {
          time: "14:20",
          old: "Descubres que la cabaña Alerce se vendió dos veces para el sábado.",
          now: "Imposible: cada noche de cada unidad es un candado único en la base de datos. La segunda reserva nunca entró.",
        },
        {
          time: "17:00",
          old: "El que hizo la web no contesta y el precio de la suite sigue viejo en el sitio.",
          now: "Cambiaste el precio en Tarifas y ya está en el motor, en la web y en el LinkHub. No publicaste nada.",
        },
        {
          time: "19:45",
          old: "Te preguntas si el sábado conviene subir. Lo decides por corazonada.",
          now: "Revenue te muestra +15% con el motivo escrito: ocupación, pace y un evento a tres días. Aceptas y va al motor.",
        },
      ],
    },
    compare: {
      eyebrow: "Si estás comparando",
      title: "Roombir *contra* los que ya conoces.",
      lead:
        "Comparativas escritas para que sirvan aunque no nos elijas: qué hace mejor cada uno, qué no hacemos todavía y en qué caso conviene el otro. Verificadas contra su web pública, con fecha.",
      link: "Ver todas las comparativas",
    },
    faq: [
      {
        q: "¿Sirve para cabañas y departamentos, o solo para hoteles?",
        a: "Para los dos, y no con el mismo truco. Una categoría se puede vender como **pool** —diez dobles intercambiables, el huésped compra “una doble”— o como **unidad única 1:1**, donde la categoría envuelve una sola unidad con nombre propio. Se elige por categoría, no por sistema, así que un complejo con seis cabañas y dos habitaciones estándar convive sin forzar nada.",
      },
      {
        q: "¿Necesito un channel manager para usar roombir?",
        a: "No para operar, pero hay que decirlo claro: **Roombir todavía no tiene channel manager**. Si vendes en Booking o Expedia, esa disponibilidad hoy se concilia a mano. El sistema está pensado para que la reserva directa —tu web, tu LinkHub, tu motor— deje de perderse en un chat, que es de donde sale la mayor parte del ingreso que hoy no estás controlando.",
      },
      {
        q: "¿Cómo cobro las reservas?",
        a: "Contra el check-in, de forma presencial. **No hay pasarela de pago integrada todavía.** Lo que sí hay es multi-moneda de verdad: guardas los precios en una moneda base, cobras en otra, y la conversión se muestra viva hasta el check-in y ahí se congela para que el importe cobrado no cambie después.",
      },
      {
        q: "¿Tengo que instalar o configurar algo?",
        a: "Se entra por el navegador. El alta son nueve pasos guiados que se guardan en el servidor —puedes dejarla por la mitad y seguirla desde el teléfono— y no hay que configurar un servidor de correo: **todos los mails al huésped salen del dominio roombir** con tu casilla como responder-a.",
      },
      {
        q: "¿Puedo usar mi propio dominio?",
        a: "Sí. Cada sitio publicado admite hostname propio, y cada variante de idioma puede tener el suyo. El LinkHub también tiene su dirección pública, con código QR para imprimir.",
      },
      {
        q: "¿La IA puede hacer cualquier cosa dentro de mi sistema?",
        a: "No, y es a propósito. El asistente opera **suplantando tu identidad real** con un permiso de vida corta que se vuelve a emitir en cada llamada. Antes del turno se le sacan de la mano las herramientas que tu usuario no puede usar, y cada operación se vuelve a evaluar contra la política del servicio. Si a mitad de la conversación te revocan un acceso, la siguiente acción falla y el asistente te explica por qué.",
      },
      {
        q: "¿En qué se diferencia de Cloudbeds o de Little Hotelier?",
        a: "En tres cosas que se pueden verificar: el revenue management y el asistente de IA son parte del sistema y no módulos que se agregan; el asistente ejecuta en vez de sugerir, y deja la transcripción de cada turno; y todo —reservas, motor, web, revenue— lee la misma base de datos, sin sincronizaciones.",
      },
    ],
    cta: {
      title: "Ponlo en marcha *esta semana*.",
      lead:
        "El alta es guiada y la haces tú. Si prefieres que te acompañemos en la carga de habitaciones —el paso que más cuesta—, lo hacemos en una llamada corta.",
      steps: [
        "Te das de alta y cargas la propiedad.",
        "Cargamos juntos las habitaciones si quieres.",
        "Publicas tu web y tu link de reservas.",
      ],
    },
  },

  /* -------------------------------------------------------------- producto */
  producto: {
    meta: {
      title: "La plataforma",
      description:
        "Roombir IA, el PMS (propiedades, habitaciones, reservas y motor), informes, revenue y marketing, sobre una sola base de datos. Qué hace cada parte y cómo se conectan.",
    },
    hero: {
      eyebrow: "La plataforma",
      title: "Cada parte del sistema, *sobre los mismos datos*.",
      lead:
        "Todo el staff entra por el mismo escritorio. Habitaciones, reservas y revenue se muestran embebidos dentro, con el contexto y el tema heredados, así que para quien trabaja es una sola aplicación —y para los datos, un solo lugar.",
    },
    desk: {
      eyebrow: "El escritorio",
      title: "Una sola puerta, *y dentro cada uno lo suyo*.",
      lead:
        "El PMS es el chrome: la navegación, el selector de compañía, propiedad y espacio de trabajo, el buscador global y el centro de notificaciones. Las apps de habitaciones, reservas y revenue viven dentro.",
      items: [
        "**Buscador global** con Ctrl/Cmd + K: reservas por código o huésped, propiedades, categorías, unidades y vistas del sistema. Es algorítmico, no generativo — encuentra o no encuentra.",
        "**Tablero adaptativo**: 30 widgets compiten por tres lugares según el espacio activo, y sólo se piden los datos de los que se van a pintar.",
        "**Notificaciones en tiempo real** que enlazan al detalle correcto; si la reserva es de otra propiedad, el sistema cambia de propiedad antes de abrirla.",
        "**Tema claro, oscuro o del sistema**, con color de acento, y se propaga a las apps embebidas.",
      ],
    },
    catalog: {
      eyebrow: "El catálogo",
      title: "21 apps que *se encienden y se apagan*.",
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
    /* Una tarjeta por producto, con enlace a su página. Las claves son las de
       `PRODUCT_KEYS` en nav.ts. */
    modules: {
      eyebrow: "Producto por producto",
      title: "Qué hace *cada parte*.",
      lead:
        "Cada uno tiene su página con el detalle completo. Todos leen y escriben los mismos datos: no hay sincronización nocturna ni importación de nada.",
      items: {
        ia: {
          title: "Roombir IA",
          desc: "Un asistente que opera el sistema entero en una conversación: reservas, tarifas, habitaciones, la web, el revenue. Parte de un expediente de tu destino con quince fuentes fechadas y trabaja con tus permisos.",
        },
        pms: {
          title: "PMS",
          desc: "Propiedades con su moneda y su equipo; categorías que se venden como pool o con nombre propio; panel del día, lista y calendario de cinta; y el motor donde el huésped ve el precio de cada día y reserva solo, en diez monedas.",
        },
        informes: {
          title: "Informes",
          desc: "Ocupación, tarifa promedio, ingresos, cancelaciones y canales sobre las mismas reservas que operas, y una sección con lo que está mal cargado hoy.",
        },
        revenue: {
          title: "Revenue",
          desc: "Un documento de decisión por fecha con la traza completa, pace contra tu propio histórico, competencia, eventos de tu destino y la tarifa que entra al motor al aceptarla.",
        },
        marketing: {
          title: "Marketing",
          desc: "El editor web con asistente, la marca, la librería de fotos, las galerías, las reseñas, el LinkHub y la capa que hace legible tu alojamiento para una IA.",
        },
      },
    },
    ia: {
      eyebrow: "La capa que las une",
      title: "El asistente ve *todo el sistema*, no un módulo.",
      lead:
        "Porque los datos son uno solo, el asistente puede hacer en una frase lo que en otro stack son tres pestañas y dos exportaciones: mirar el pace, ajustar una tarifa y publicar la promo en el sitio.",
      items: [
        "Opera reservas, tarifas, disponibilidad, habitaciones, propiedades, revenue, marketing, archivos, compañía y sistema.",
        "Tarjetas de reserva y de revenue con botones que ejecutan, sujetos a la misma verificación de permisos.",
        "Historial de conversaciones filtrado por el espacio de trabajo activo.",
      ],
      link: "Ver Roombir IA",
    },
    stats: [
      { value: "21", label: "apps activables" },
      { value: "30", label: "widgets del tablero adaptativo" },
      { value: "38", label: "recorridos guiados" },
    ],
    ask: "¿Buscabas algo puntual?",
    askLink: "Pregúntanos",
    cta: {
      title: "Ven a *mirarlo por dentro*.",
      lead:
        "El alta es guiada. Si prefieres que te lo mostremos antes, pide una demo y lo recorremos con tus datos.",
      steps: [
        "Creas la compañía y la propiedad.",
        "Cargas habitaciones y unidades.",
        "El motor y el sitio quedan listos para publicar.",
      ],
    },
  },

  /* ==================================================================
     Las páginas de producto. Desde el 28-09-2026 son cinco: Roombir IA,
     PMS, Informes, Revenue y Marketing (IDENTIDAD-COMUNICACIONAL-2026.md).
     Los bloques `propiedades`, `habitaciones` y `motor` de más abajo ya no
     tienen página: se conservan porque los leen los videos de /video/*.
     ================================================================== */

  /* --------------------------------------------------------------- pms */
  /* El PMS: Propiedades + Habitaciones + Reservas + Motor, un solo producto
     contado como flujo. Cada parte es una sección con ancla. */
  pms: {
    meta: {
      title: "PMS",
      description:
        "Propiedades, habitaciones y reservas en un solo producto: cargas la propiedad y las habitaciones una vez, las reservas entran por el motor o a mano y las operas en el panel del día y en el calendario.",
    },
    hero: {
      eyebrow: "PMS · Propiedades, habitaciones y reservas",
      title: "Tu alojamiento entero, *en un solo lugar*.",
      lead:
        "Cargas la propiedad y las habitaciones una vez. Las reservas entran por tu motor o las cargas tú, y las operas en el panel del día y en el calendario. Es una sola base de datos: lo que cambia en una pantalla ya cambió en todas.",
    },
    propiedades: {
      eyebrow: "01 · Propiedades",
      title: "Varias propiedades, *una sola cuenta*.",
      lead:
        "Un hotel en Mendoza y seis cabañas en Villa La Angostura, con el mismo usuario. Cada propiedad con su moneda, su zona horaria y su equipo; cada persona ve sólo las que le tocan.",
      items: [
        "**Acceso por propiedad y por puesto**: quien atiende la recepción de las cabañas entra a las cabañas, con el menú de recepción; quien administra ve todo.",
        "**Espacios de trabajo por puesto** —recepción, limpieza, marketing, revenue—, cada uno con su menú y su pantalla de inicio.",
        "**Todo lo demás cuelga de la propiedad**: habitaciones, reservas, marca, sitio web, LinkHub y reseñas se cargan una vez. Cambias el teléfono y cambia en todos lados.",
        "**La segunda propiedad copia la estructura de la primera**, y se cambia de una a otra con un selector arriba, sin salir ni volver a entrar.",
      ],
    },
    habitaciones: {
      eyebrow: "02 · Habitaciones",
      title: "Por categoría o por unidad, *como vendas tú*.",
      lead:
        "Un hotel vende una doble superior y asigna la 203 después. Un complejo vende la cabaña Alerce, con sus fotos y su precio. Roombir hace las dos cosas, y las dos a la vez en la misma propiedad.",
      items: [
        "**Pool de categoría**: el huésped compra “una doble superior” y el sistema asigna la habitación, minimizando huecos o repartiendo el desgaste. O la deja sin asignar para que decida recepción.",
        "**Unidad con nombre propio**: la categoría envuelve una sola unidad. El huésped reserva la cabaña Alerce, con sus fotos y su precio.",
        "**Seis estados con historial** —disponible, ocupada, limpieza, mantenimiento, bloqueada y salida pendiente—, tablero por piso y plano de ocupación.",
        "**Carga masiva en dos pasos** y bloqueos por mitades de día, que usan el mismo candado que una reserva.",
      ],
    },
    reservas: {
      eyebrow: "03 · Reservas",
      title: "Cada momento del turno, *su pantalla*.",
      lead:
        "Ocho vistas sobre el mismo dato: mover una reserva en el calendario cambia la habitación, libera la noche en el motor y aparece en el informe.",
      items: [
        {
          title: "Panel del día",
          desc: "Llegadas y salidas del día, con tarjetas que se accionan. Es la pantalla con la que recepción abre el turno.",
        },
        {
          title: "Todas las reservas",
          desc: "La lista con filtros y un panel lateral que abre sin salir: resumen, actividad y notas. Desde ahí se asigna habitación y se cambia el estado.",
        },
        {
          title: "Calendario",
          desc: "Habitaciones por día. Arrastras una reserva o la estiras, y antes de soltar ves si choca con otra y qué pasa con el precio.",
        },
        {
          title: "Nueva reserva",
          desc: "La que entró por teléfono o por WhatsApp: huésped, fechas, ocupación por edad, canal de origen, promociones y notas.",
        },
        {
          title: "Tarifas",
          desc: "Precio base por categoría y planes de tarifas con vigencia, moneda y estadía mínima.",
        },
        {
          title: "Disponibilidad",
          desc: "Semáforo por día —libre, parcial, lleno, cerrado— y restricciones: cerrado a la llegada o a la salida, estadía mínima y máxima.",
        },
        {
          title: "Promociones",
          desc: "Automáticas o con código, por porcentaje, monto fijo o precio por noche, con su presentación lista para tu web.",
        },
        {
          title: "Configuración",
          desc: "Moneda, confirmación, reglas de estadía, horarios y cómo se asignan las habitaciones. Más el Estudio del Motor para textos y colores.",
        },
      ],
    },
    motor: {
      eyebrow: "PMS · Motor de reservas",
      title: "Un calendario que *contesta antes de preguntar*.",
      lead:
        "El selector de fechas común pide dos días y ya. El del motor muestra, día por día y según lo que habilites, lo que la persona te iba a preguntar por WhatsApp antes de reservar.",
      items: [
        "**Precio desde** en cada día, calculado con las mismas tarifas que cobra el motor.",
        "**Unidades restantes**: tu inventario real, no un contador inventado.",
        "**Días cerrados**, cerrados a la llegada o a la salida, y el **mínimo de noches** al elegir la entrada.",
        "**Confirma el huésped por email o confirmas tú**: las pendientes vencen solas, y el correo sale del dominio de roombir sin configurar nada.",
      ],
    },
    prices: {
      eyebrow: "Cada tarifa, individual",
      title: "El precio de cada noche, *con su porqué*.",
      lead:
        "Cuando el motor tiene que decir cuánto cuesta una noche, resuelve una cadena fija, siempre en el mismo orden. Saber de qué escalón sale cada precio es lo que te deja confiar en el sistema sin auditarlo cada mañana.",
      items: [
        "**Primero, lo que aceptaste en Revenue**: si hay una tarifa recomendada y aceptada para esa fecha, manda ella.",
        "**Después, el plan de tarifas** vigente para esa categoría y esa fecha, con su estadía mínima.",
        "**Si no hay plan, el precio base** de la categoría. Cada cabaña puede tener el suyo.",
        "**Por encima de todo, las promociones**: descuento o recargo —una promo también puede subir el precio en temporada alta—, automáticas o con código.",
      ],
    },
    currency: {
      eyebrow: "Diez monedas",
      title: "Lo que vio el huésped *no se te mueve*.",
      lead:
        "El huésped mira el precio en su moneda y tú cobras en la tuya. La reserva queda siempre en tu moneda base y la conversión se congela al check-in: el importe que cobras no cambia después.",
      items: [
        "Dólar, peso argentino, real, peso chileno, peso colombiano, peso mexicano, sol, peso uruguayo, euro y libra.",
        "Para pesos argentinos eliges la cotización: oficial, blue, MEP o CCL.",
        "Las tasas se actualizan cada tres horas y se marcan como viejas si la fuente no respondió.",
        "Los informes suman directo, porque todo queda en tu moneda base.",
      ],
    },
    where: {
      eyebrow: "Dónde va el motor",
      title: "En tu web, en tu bio *y para una IA*.",
      items: [
        {
          title: "Tu sitio",
          desc: "Una sección del editor web que se conecta sola a tu inventario.",
        },
        {
          title: "Tu LinkHub",
          desc: "El link de la bio de Instagram abre el mismo motor, idéntico al de tu sitio.",
        },
        {
          title: "Un link directo",
          desc: "Una página propia con la dirección de tu alojamiento, para mandar por WhatsApp si todavía no tienes web.",
        },
        {
          title: "Agentes de IA",
          desc: "Con la capa agéntica encendida, un asistente externo puede leer tu disponibilidad y completar una reserva. [Cómo funciona](/producto/marketing#agentes).",
        },
      ],
    },
    stats: [
      { value: "8", label: "vistas sobre el mismo dato para operar las reservas" },
      { value: "10", label: "monedas, con blue, MEP, CCL u oficial para ARS" },
      { value: "6", label: "estados de habitación, con historial" },
      { value: "1", label: "candado por unidad y noche en la base de datos" },
    ],
    faq: [
      {
        q: "¿Cómo cobro las reservas?",
        a: "Contra el check-in, de forma presencial. **No hay pasarela de pago integrada todavía.** Lo que sí hay es multimoneda de verdad: el huésped mira en su moneda, tú cobras en la tuya y la conversión se congela al check-in.",
      },
      {
        q: "¿Se conecta con Booking o Expedia?",
        a: "Todavía no: **Roombir no tiene channel manager**. Si vendes en OTAs, esa disponibilidad hoy se concilia a mano. El sistema está pensado para que la reserva directa —tu web, tu LinkHub, tu motor— deje de perderse en un chat.",
      },
      {
        q: "¿Qué pasa si dos personas reservan la misma noche al mismo tiempo?",
        a: "Una de las dos falla. Cada noche de cada unidad es un **candado único en la base de datos** —la clave es la unidad más la fecha—, así que la segunda escritura no entra. No es una validación en el código que se pueda esquivar: es la base la que lo impide.",
      },
      {
        q: "Tengo cabañas y habitaciones. ¿Puedo tener las dos?",
        a: "Sí, en la misma propiedad. Las cabañas van como unidad con nombre propio y las habitaciones como pool, y conviven en el mismo calendario y en el mismo motor.",
      },
      {
        q: "¿Quién confirma la reserva?",
        a: "Lo eliges tú. En un modo la reserva nace pendiente y **el huésped la confirma** con un enlace que le llega por correo. En el otro, queda pendiente hasta que **la acepta recepción**. En los dos casos las pendientes vencen solas.",
      },
    ],
    cta: {
      title: "Carga la propiedad y las habitaciones; *el motor queda listo*.",
      lead:
        "El alta es guiada y la haces tú. Si prefieres que te acompañemos en la carga de habitaciones —el paso que más cuesta—, lo hacemos en una llamada corta.",
      steps: [
        "Creas la propiedad y cargas categorías y unidades.",
        "Configuras el motor en el Estudio.",
        "Compartes el link y dejas de perder consultas en el chat.",
      ],
    },
  },

  /* -------------------------------------------------------------------- ia */
  ia: {
    meta: {
      title: "Roombir IA",
      description:
        "Un asistente que opera tu alojamiento en una conversación: crea y mueve reservas, cambia tarifas y edita la web, con tus permisos. Antes de opinar sobre tu destino lee un expediente con quince fuentes fechadas.",
    },
    hero: {
      eyebrow: "Roombir IA",
      title: "Todo tu alojamiento, *en una conversación*.",
      lead:
        "Roombir IA opera el sistema entero: crea y mueve reservas, cambia tarifas, bloquea unidades y edita tu web. Antes de opinar sobre tu destino lee un expediente armado con quince fuentes fechadas. Y trabaja con tus permisos, no con los suyos.",
    },
    ask: {
      eyebrow: "Lo que le puedes pedir",
      title: "Lo pides como lo dirías, *y queda hecho*.",
      lead:
        "No hay que aprender comandos ni saber en qué pantalla está cada cosa. Son pedidos de un día normal, y lo que hace con cada uno.",
      items: [
        {
          area: "Reservas",
          ask: "Pasa a García de la 203 a la 204 desde el jueves",
          does: "Busca la reserva, verifica que la 204 esté libre esas noches y la mueve. Te devuelve la tarjeta con el cambio.",
        },
        {
          area: "Tarifas",
          ask: "Sube un 10% la doble superior los sábados de octubre",
          does: "Te dice qué fechas toca y lo aplica en el plan de tarifas cuando le confirmas.",
        },
        {
          area: "Habitaciones",
          ask: "Bloquea la cabaña Alerce el martes por la tarde por mantenimiento",
          does: "Crea el bloqueo desde la tarde: la noche del martes sale del motor y la mañana sigue vendible.",
        },
        {
          area: "Web",
          ask: "Cambia el título de la portada y publícalo",
          does: "Edita el texto en el borrador de tu sitio y lo publica. Si no le pides que publique, queda en borrador.",
        },
        {
          area: "Destino",
          ask: "¿Qué me conviene hacer con la Vendimia?",
          does: "Lee el expediente de Mendoza —fecha, distancia, feriados cerca, rutas aéreas— y tu pace de esas noches, y te propone qué hacer con la tarifa y la estadía mínima.",
        },
        {
          area: "Informes",
          ask: "¿Qué canal me cancela más?",
          does: "Lee el informe de canales y te contesta con el número y el canal. Si hay menos de tres reservas, no lo afirma.",
        },
      ],
    },
    dossier: {
      eyebrow: "Estado turístico",
      title: "Sabe dónde está parado *tu destino*.",
      lead:
        "Antes de opinar sobre tu zona, Roombir IA arma un expediente con quince fuentes públicas, cada dato con su fecha: lo que pasa este mes y lo que viene. El modelo no sale a buscar: lee lo que el sistema ya verificó.",
      items: [
        "**Feriados, fines de semana largos y vacaciones escolares**, los tuyos y los de los países que te visitan.",
        "**Eventos en tu radio**: deportes, cultura, congresos y ferias, filtrados por distancia y no por país.",
        "**Qué vuelos llegan a tu zona y desde dónde**: las rutas que se observan aterrizando en los aeropuertos cercanos.",
        "**Clima, tipo de cambio de tus mercados y alertas** de seguridad o de amenazas naturales.",
      ],
    },
    compare: {
      eyebrow: "La diferencia",
      title: "Un chat genérico busca; *éste parte de un expediente*.",
      lead:
        "Un chat de IA de uso general es muy bueno redactando, y no ve tu sistema: busca en la web, junta lo que encuentra y te lo resume. Roombir IA arranca de tus datos y de fuentes fijas. Si le pides que además busque en la web, también lo hace.",
      headCriterion: "Lo que importa",
      headUs: "Roombir IA",
      headThem: "Un chat de IA de uso general",
      rows: [
        {
          label: "Ve tus reservas, tarifas y habitaciones",
          us: "Sí: las mismas que operas",
          usTone: "ok",
          them: "No, salvo que le pegues los datos",
          themTone: "no",
        },
        {
          label: "Hace los cambios",
          us: "Sí: los ejecuta, con tus permisos",
          usTone: "ok",
          them: "No: te explica dónde hacer clic",
          themTone: "no",
        },
        {
          label: "De dónde sale el dato de tu destino",
          us: "Un expediente con quince fuentes fijas y fechadas",
          usTone: "ok",
          them: "Lo que encuentre esa vez en la web",
          themTone: "mid",
        },
        {
          label: "Si un dato falta",
          us: "Te dice que falta",
          usTone: "ok",
          them: "No siempre lo distingue",
          themTone: "mid",
        },
        {
          label: "Busca en la web",
          us: "Si se lo pides",
          usTone: "ok",
          them: "Sí",
          themTone: "ok",
        },
        {
          label: "Redacta, resume y traduce",
          us: "Sí",
          usTone: "ok",
          them: "Sí",
          themTone: "ok",
        },
      ],
      legend: {
        ok: "sí",
        mid: "depende",
        no: "no",
        info: "sin valoración",
      },
    },
    strategic: {
      eyebrow: "Turno estratégico",
      title: "“Quiero más reservas” *también es un pedido*.",
      lead:
        "Un objetivo abierto no entra al circuito de siempre. Roombir IA lee tu operación entera —la ocupación que viene, el pace, los canales, la competencia, lo que falta configurar— y elige hasta tres jugadas con reglas fijas, no a gusto del modelo. Te propone un plan con pasos que se pueden ejecutar, y cada paso pide tu confirmación.",
      items: [
        "Lee **18 fuentes de tu propia operación** en paralelo, en alrededor de un segundo.",
        "Las jugadas las elige el sistema por reglas; el modelo diagnostica y redacta.",
        "Un dato que no se pudo leer entra como faltante: nunca se rellena con ceros.",
        "Si ya tienes un plan en marcha, lo retoma en vez de proponerte otro.",
      ],
    },
    perms: {
      eyebrow: "Permisos",
      title: "Opera con *tus* permisos, no con los suyos.",
      lead:
        "Es el punto delicado de cualquier asistente dentro de un sistema de gestión. Aquí está resuelto en capas que se aplican en momentos distintos, y la última está donde no se puede saltar: en el que ejecuta.",
      items: [
        "**Lo que tu usuario no puede, no se le ofrece al modelo**: en recepción hace lo que puede recepción; en administración, lo que puede administración.",
        "**Lo que no se puede deshacer, pide que lo escribas**: para confirmarlo tienes que teclear a mano lo que vas a borrar.",
        "**Los borrados piden un botón**, no un “sí” perdido en la conversación.",
        "**Ves la transcripción** de cada turno: qué herramienta usó, con qué datos y qué devolvió.",
      ],
    },
    talk: {
      eyebrow: "Cómo se le habla",
      title: "Le escribes, le hablas, *le muestras*.",
      lead:
        "Dentro del escritorio, en el espacio de trabajo en el que estés, con el historial de ese espacio: recepción no ve las conversaciones de marketing.",
      items: [
        {
          title: "Por voz",
          desc: "Dictas en vez de escribir. Funciona en cualquier navegador, porque la transcripción se hace de nuestro lado.",
        },
        {
          title: "Capturas y PDF",
          desc: "Pegas una captura o sueltas un PDF —una planilla de tarifas, un listado de una OTA— y trabaja sobre eso.",
        },
        {
          title: "Audio y video",
          desc: "Un audio o un video corto se resume antes de la respuesta y entra como contexto. Hasta dos minutos de audio.",
        },
        {
          title: "La web, si la pides",
          desc: "Cuando le pides que busque fuera, busca. Si no, trabaja con tu sistema y con el expediente de tu destino.",
        },
      ],
    },
    stats: [
      { value: "15", label: "fuentes en el expediente del destino" },
      { value: "3", label: "niveles de modelo, elegidos por turno" },
      { value: "5", label: "idiomas" },
    ],
    faq: [
      {
        q: "¿Puede hacer cualquier cosa?",
        a: "Todo lo que tu usuario puede hacer en la app, sí: cubre cada pantalla del sistema, salvo lo que dejamos fuera a propósito, como el flujo del huésped o el inicio de sesión. Lo que tu usuario no puede, no se le ofrece al modelo: en recepción hace lo que puede recepción, no lo que puede administración.",
      },
      {
        q: "¿Qué pasa si se equivoca?",
        a: "Por eso hay frenos. Lo que escribe datos, lo confirma contigo en la conversación. Lo que borra, pide un botón. Lo que no se puede deshacer, pide que escribas a mano lo que vas a borrar. Y en la web trabaja sobre el borrador: publicar es un paso aparte.",
      },
      {
        q: "¿Se inventa datos de mi destino?",
        a: "El expediente lo arma el sistema, no el modelo: quince fuentes públicas leídas con reglas fijas y guardadas con su fecha. Si una fuente no respondió, el dato figura como **faltante** y el asistente lo tiene que decir. Un cero inventado es peor que un dato que falta, porque se cita como evidencia.",
      },
      {
        q: "¿Busca en internet?",
        a: "Si se lo pides, sí. Por defecto trabaja con tu sistema y con el expediente del destino, que es información verificada, una fuente por tema. La búsqueda abierta queda para cuando la quieres.",
      },
      {
        q: "¿Qué modelo de IA usa?",
        a: "No está atado a un proveedor. Cada turno se clasifica y va al modelo que corresponde: uno rápido para consultas, uno más capaz cuando hay que escribir datos o analizar. Cuando aparece un modelo mejor, lo cambiamos de nuestro lado y tú no tienes que hacer nada.",
      },
    ],
    cta: {
      title: "Pídele algo *que hoy te lleva cuatro pestañas*.",
      lead:
        "El asistente sirve de verdad con tu sistema cargado abajo. Empieza por el alta, carga una propiedad y pídele algo real.",
      steps: [
        "Te das de alta y cargas la propiedad.",
        "Abres Roombir IA desde el escritorio.",
        "Le pides algo real y miras la transcripción.",
      ],
    },
  },

  /* ----------------------------------------------------------- propiedades */
  propiedades: {
    meta: {
      title: "Propiedades",
      description:
        "Varias propiedades bajo una misma compañía y un solo usuario: cada una con su moneda, su zona horaria y su equipo, y cada persona con acceso sólo a las propiedades y las pantallas que le tocan.",
    },
    hero: {
      eyebrow: "Propiedades",
      title: "Varias propiedades, *una sola cuenta*.",
      lead:
        "Un hotel en Mendoza y seis cabañas en Villa La Angostura, con el mismo usuario. Cada propiedad con su moneda, su zona horaria y su equipo; cada persona ve sólo las que le tocan.",
    },
    access: {
      eyebrow: "Accesos",
      title: "Cada persona, *sólo lo suyo*.",
      lead:
        "El acceso se da por propiedad y por puesto. Quien atiende la recepción de las cabañas entra a las cabañas, con el menú de recepción; quien administra ve todo.",
      items: [
        "**Acceso por propiedad**: una persona puede tener todas o sólo algunas, y si la invitas desde una propiedad queda limitada a esa.",
        "**Diez capacidades administrativas** que se dan de a una: crear propiedades, gestionar usuarios, asignar espacios, activar apps, facturación y sitios web, entre otras.",
        "**Espacios de trabajo por puesto** —recepción, limpieza, marketing, revenue—, cada uno con su menú y su pantalla de inicio.",
        "**Un espacio de administración** que ve el catálogo completo, incluidas las apps que se agreguen después.",
      ],
    },
    sheet: {
      eyebrow: "La ficha",
      title: "Lo que *define* a cada propiedad.",
      items: [
        {
          title: "Tipo de alojamiento",
          desc: "Hotel, resort, aparthotel, hostel, cabañas, villa, alquiler temporario o glamping. El tipo decide cómo arranca el resto.",
        },
        {
          title: "Dirección con mapa",
          desc: "Pegas las coordenadas de Google Maps y queda ubicada. De ahí salen el mapa de tu web y el expediente de tu destino.",
        },
        {
          title: "Moneda, zona horaria e idioma",
          desc: "Los de cada propiedad, no los de la compañía: una en pesos y otra en dólares conviven sin problema.",
        },
        {
          title: "Contacto público y redes",
          desc: "Correo, teléfono, WhatsApp, Instagram, Facebook y TikTok, cargados una vez para la web, el LinkHub y el motor.",
        },
      ],
    },
    root: {
      eyebrow: "La raíz",
      title: "Todo lo demás *cuelga de la propiedad*.",
      lead:
        "Habitaciones, reservas, marca, sitio web, LinkHub, reseñas y galerías se cargan sobre una propiedad. Por eso se cargan una vez: cambias el teléfono y cambia en todos lados.",
      items: [
        "**Plantillas de propiedad**: la segunda arranca copiando los espacios y las apps de la primera.",
        "**Cada propiedad tiene su motor, su web y su LinkHub**, con su propia marca.",
        "**Espacios que no se desarman por error**: uno con reservas en curso o usuarios activos queda bloqueado.",
        "**Borrar una propiedad** sólo lo puede hacer quien es dueño de la compañía.",
      ],
    },
    move: {
      eyebrow: "Entre propiedades",
      title: "Cambiar de propiedad *no es cambiar de sistema*.",
      items: [
        {
          title: "Un selector arriba",
          desc: "La compañía, la propiedad y el espacio de trabajo se eligen en el mismo lugar, sin salir ni volver a entrar.",
        },
        {
          title: "Un buscador para todas",
          desc: "Ctrl o Cmd + K encuentra reservas, propiedades, unidades y pantallas. Encuentra o no encuentra: no inventa.",
        },
        {
          title: "Avisos que saben adónde ir",
          desc: "Si la notificación es de otra propiedad, el sistema cambia de propiedad antes de abrirla.",
        },
      ],
    },
    faq: [
      {
        q: "¿Cuántas propiedades incluye cada plan?",
        a: "Cada plan lo dice con número en [precios](/precios), del mismo catálogo que cobra tu cuenta.",
      },
      {
        q: "¿Puedo darle acceso a alguien a una sola propiedad?",
        a: "Sí. Si la invitas desde esa propiedad, queda limitada a ella. Y dentro de la propiedad, el espacio de trabajo decide qué pantallas ve.",
      },
      {
        q: "¿Puedo tener un hotel y cabañas en la misma compañía?",
        a: "Sí, y en la misma propiedad también: cada categoría se vende como pool o como unidad con nombre propio. Está explicado en [Habitaciones](/producto/pms).",
      },
],
    cta: {
      title: "Carga la primera; *la segunda copia su estructura*.",
      lead:
        "El alta crea la compañía y la primera propiedad. Las siguientes arrancan desde una plantilla.",
      steps: [
        "Creas la compañía y la primera propiedad.",
        "Invitas a tu equipo con acceso por propiedad.",
        "Sumas la segunda desde una plantilla.",
      ],
    },
  },

  /* ---------------------------------------------------------- habitaciones */
  habitaciones: {
    meta: {
      title: "Habitaciones",
      description:
        "Categorías que se venden como un pool de habitaciones intercambiables o unidades con nombre propio, en la misma propiedad. Seis estados operativos con historial, plano por piso, carga masiva y un candado por noche.",
    },
    hero: {
      eyebrow: "Habitaciones",
      title: "Por categoría o por unidad, *como tú vendas*.",
      lead:
        "Un hotel vende una doble superior y asigna la 203 después. Un complejo vende la cabaña Alerce, con sus fotos y su precio. Roombir hace las dos cosas, y las dos a la vez en la misma propiedad.",
    },
    dual: {
      eyebrow: "Dos formas de vender",
      title: "Cada categoría elige *cómo se vende*.",
      lead:
        "El modo se define categoría por categoría, con un valor por defecto para la propiedad. Así un complejo con seis cabañas y dos habitaciones vende las cabañas por nombre y las habitaciones como pool, en el mismo calendario.",
      items: [
        "**Pool de categoría**: el huésped compra “una doble superior” y el sistema asigna la habitación, minimizando huecos o repartiendo el desgaste. O la deja sin asignar para que decida recepción.",
        "**Unidad con nombre propio**: la categoría envuelve una sola unidad. El huésped reserva la cabaña Alerce, con sus fotos y su precio.",
        "**Cambiar de modo queda registrado**, con el motivo, y hay una herramienta para migrar categorías que ya tienen reservas.",
        "**Cada reserva guarda el modo con el que nació**: cambiar la configuración después no reescribe la historia.",
      ],
    },
    states: {
      eyebrow: "Estado de habitaciones",
      title: "Estados que *no admiten imposibles*.",
      lead:
        "Seis estados —disponible, ocupada, limpieza, mantenimiento, bloqueada y salida pendiente— y una regla para cada cambio. De ocupada sólo se pasa a salida pendiente: nadie deja libre una habitación con el huésped dentro.",
      items: [
        "**Historial por unidad**: quién cambió qué estado, cuándo y con qué nota.",
        "**Tablero por piso y por categoría**, con filtros, para leer la casa de un vistazo.",
        "**Plano de ocupación** por piso, con navegación por fecha.",
        "**Limpieza cambia estados** sin ver tarifas ni revenue: su espacio de trabajo no los tiene.",
      ],
    },
    load: {
      eyebrow: "La carga",
      title: "Lo cargas una vez, *lo usan todos*.",
      items: [
        {
          title: "Carga masiva en dos pasos",
          desc: "Una vista previa avisa si un código se repite antes de crear nada; después se crean todas juntas o ninguna.",
        },
        {
          title: "Bloqueos por mitades de día",
          desc: "Mantenimiento por la tarde bloquea esa noche y deja vendible la mañana. Usa el mismo candado que una reserva.",
        },
        {
          title: "La ficha de cada categoría",
          desc: "Capacidad de adultos y niños, tamaño, precio base, fotos y comodidades elegidas de un catálogo.",
        },
        {
          title: "Un solo inventario",
          desc: "La categoría que cargas aquí es la que muestran el motor, la web, el LinkHub y Revenue.",
        },
      ],
    },
    lock: {
      eyebrow: "La garantía",
      title: "Una noche se vende *una sola vez*.",
      lead:
        "Cada noche de cada unidad es un candado único en la base de datos. Si dos personas reservan lo mismo al mismo tiempo, la segunda no entra: no es una validación que se pueda saltar, es la base la que lo impide.",
      items: [
        "Los bloqueos de mantenimiento usan el mismo candado, así que descuentan inventario de verdad.",
        "Al cancelar, marcar no-show o hacer check-out, la noche se libera sola.",
        "La noche de salida no se bloquea: quien llega ese día puede entrar.",
      ],
    },
    faq: [
      {
        q: "Tengo cabañas y habitaciones. ¿Puedo tener las dos?",
        a: "Sí, en la misma propiedad. Las cabañas van como unidad con nombre propio y las habitaciones como pool, y conviven en el mismo calendario y en el mismo motor.",
      },
      {
        q: "¿Puedo cambiar de modo después?",
        a: "Sí. El cambio pide un motivo y queda registrado, y si la categoría ya tiene reservas hay una herramienta para migrarla. Las reservas viejas conservan el modo con el que nacieron.",
      },
      {
        q: "¿Qué pasa si dos personas reservan la misma noche al mismo tiempo?",
        a: "Una de las dos falla. Cada noche de cada unidad es un **candado único en la base de datos** —la clave es la unidad más la fecha—, así que la segunda escritura no entra. No es una validación en el código que se pueda esquivar: es la base la que lo impide.",
      },
      {
        q: "¿El personal de limpieza ve las tarifas?",
        a: "No, si no quieres. El espacio de limpieza trae su propio menú —estado de habitaciones y plano— sin tarifas ni revenue.",
      },
    ],
    cta: {
      title: "Empieza por *tus habitaciones*.",
      lead:
        "Cargas categorías y unidades y la disponibilidad se inicializa sola. El calendario y el motor quedan listos.",
      steps: [
        "Cargas las categorías y eliges cómo se vende cada una.",
        "Creas las unidades de una vez.",
        "La disponibilidad se inicializa sola.",
      ],
    },
  },

  /* ----------------------------------------------------------------- motor */
  motor: {
    meta: {
      title: "Motor de reservas",
      description:
        "El motor que ve tu huésped —con precio por día, unidades restantes y diez monedas— y las ocho vistas donde lo operas: panel del día, lista, calendario, carga manual, tarifas, disponibilidad, promociones y configuración. Sin comisión por reserva.",
    },
    hero: {
      eyebrow: "Motor de reservas",
      title: "Cada reserva, *del primer clic al check-out*.",
      lead:
        "El huésped ve el precio de cada día antes de elegir fechas y reserva solo. Tú la ves entrar en el panel del día, la mueves en el calendario y la cierras en el check-out. Sin comisión por reserva, en diez monedas.",
    },
    guest: {
      eyebrow: "Lo que ve el huésped",
      title: "Un calendario que *contesta antes de preguntar*.",
      lead:
        "El selector de fechas común pide dos días y ya. El del motor muestra, día por día y según lo que habilites, lo que la persona te iba a preguntar por WhatsApp antes de reservar.",
      items: [
        "**Precio desde** en cada día, calculado con las mismas tarifas que cobra el motor.",
        "**Unidades restantes**: tu inventario real, no un contador inventado.",
        "**Días cerrados**, cerrados a la llegada o a la salida, y el **mínimo de noches** al elegir la entrada.",
        "**Cabaña con nombre o categoría**, según cómo vendas, con sus fotos, sus comodidades y los extras que se ofrecen antes de pagar.",
      ],
    },
    views: {
      eyebrow: "Lo que ves tú",
      title: "Cada momento del turno, *su pantalla*.",
      lead:
        "Ocho vistas sobre el mismo dato: mover una reserva en el calendario cambia la habitación, libera la noche en el motor y aparece en el informe.",
      items: [
        {
          title: "Panel del día",
          desc: "Llegadas y salidas del día, con tarjetas que se accionan. Es la pantalla con la que recepción abre el turno.",
        },
        {
          title: "Todas las reservas",
          desc: "La lista con filtros y un panel lateral que abre sin salir: resumen, actividad y notas. Desde ahí se asigna habitación y se cambia el estado.",
        },
        {
          title: "Calendario",
          desc: "Habitaciones por día. Arrastras una reserva o la estiras, y antes de soltar ves si choca con otra y qué pasa con el precio.",
        },
        {
          title: "Nueva reserva",
          desc: "La que entró por teléfono o por WhatsApp: huésped, fechas, ocupación por edad, canal de origen, promociones y notas.",
        },
        {
          title: "Tarifas",
          desc: "Precio base por categoría y planes de tarifas con vigencia, moneda y estadía mínima.",
        },
        {
          title: "Disponibilidad",
          desc: "Semáforo por día —libre, parcial, lleno, cerrado— y restricciones: cerrado a la llegada o a la salida, estadía mínima y máxima.",
        },
        {
          title: "Promociones",
          desc: "Automáticas o con código, por porcentaje, monto fijo o precio por noche, con su presentación lista para tu web.",
        },
        {
          title: "Configuración",
          desc: "Moneda, confirmación, reglas de estadía, horarios y cómo se asignan las habitaciones. Más el Estudio del Motor para textos y colores.",
        },
      ],
    },
    prices: {
      eyebrow: "Cada tarifa, individual",
      title: "El precio de cada noche, *con su porqué*.",
      lead:
        "Cuando el motor tiene que decir cuánto cuesta una noche, resuelve una cadena fija, siempre en el mismo orden. Saber de qué escalón sale cada precio es lo que te deja confiar en el sistema sin auditarlo cada mañana.",
      items: [
        "**Primero, lo que aceptaste en Revenue**: si hay una tarifa recomendada y aceptada para esa fecha, manda ella.",
        "**Después, el plan de tarifas** vigente para esa categoría y esa fecha, con su estadía mínima.",
        "**Si no hay plan, el precio base** de la categoría. Cada cabaña puede tener el suyo.",
        "**Arriba de todo, las promociones**: descuento o recargo —una promo también puede subir el precio en temporada alta—, automáticas o con código.",
      ],
    },
    currency: {
      eyebrow: "Diez monedas",
      title: "Lo que vio el huésped *no se te mueve*.",
      lead:
        "El huésped mira el precio en su moneda y tú cobras en la tuya. La reserva queda siempre en tu moneda base y la conversión se congela al check-in: el importe que cobras no cambia después.",
      items: [
        "Dólar, peso argentino, real, peso chileno, peso colombiano, peso mexicano, sol, peso uruguayo, euro y libra.",
        "Para pesos argentinos eliges la cotización: oficial, blue, MEP o CCL.",
        "Las tasas se actualizan cada tres horas y se marcan como viejas si la fuente no respondió.",
        "Los informes suman directo, porque todo queda en tu moneda base.",
      ],
    },
    where: {
      eyebrow: "Dónde va",
      title: "En tu web, en tu bio *y para una IA*.",
      items: [
        {
          title: "Tu sitio",
          desc: "Una sección del editor web que se conecta sola a tu inventario.",
        },
        {
          title: "Tu LinkHub",
          desc: "El link de la bio de Instagram abre el mismo motor, idéntico al de tu sitio.",
        },
        {
          title: "Un link directo",
          desc: "Una página propia con la dirección de tu alojamiento, para mandar por WhatsApp si todavía no tienes web.",
        },
        {
          title: "Agentes de IA",
          desc: "Con la capa agéntica encendida, un asistente externo puede leer tu disponibilidad y completar una reserva. [Cómo funciona](/producto/marketing#agentes).",
        },
      ],
    },
    after: {
      eyebrow: "Después del checkout",
      title: "La reserva entra *y el sistema sigue solo*.",
      items: [
        {
          title: "Se asigna la unidad",
          desc: "La única posible si vendes por unidad, la que elige el sistema si es un pool automático, o ninguna si prefieres que decida recepción.",
        },
        {
          title: "Sale el correo",
          desc: "Desde el dominio de roombir, con tu correo como responder-a. Sin configurar un servidor de correo ni un proveedor más.",
        },
        {
          title: "El huésped tiene su cuenta",
          desc: "Con StayPass ve sus reservas desde tu sitio. Un mismo huésped acumula los alojamientos donde reservó, y cada hotel ve sólo los suyos.",
        },
      ],
      stats: [
        { value: "0%", label: "de comisión por reserva" },
        { value: "10", label: "monedas, con blue, MEP, CCL u oficial para ARS" },
        { value: "2", label: "modos de confirmación, con vencimiento automático" },
      ],
    },
    faq: [
      {
        q: "¿Cobran comisión por reserva?",
        a: "No. El motor no tiene cargo por reserva: pagas el plan y nada más. Está escrito en los [términos](/legal/terminos).",
      },
{
        q: "¿Quién confirma la reserva?",
        a: "Lo eliges tú. En un modo la reserva nace pendiente y **el huésped la confirma** con un enlace que le llega por correo. En el otro, queda pendiente hasta que **la acepta recepción**. En los dos casos las pendientes vencen solas, así no te quedan noches bloqueadas por alguien que nunca volvió.",
      },
      {
        q: "¿Puedo cambiar los textos y los colores del checkout?",
        a: "Sí, desde el Estudio del Motor y **sin tocar código ni republicar el sitio**: búsqueda, calendario, huéspedes, listado, detalle, servicios, checkout y pantalla final, cada uno con sus textos y sus estilos.",
      },
    ],
    cta: {
      title: "Pon tu link de reservas *en la bio*.",
      lead:
        "Cargas las habitaciones y el motor queda operativo con la disponibilidad inicializada. La web y el LinkHub se suman después, cuando quieras.",
      steps: [
        "Cargas categorías, unidades y precios.",
        "Configuras el motor en el Estudio.",
        "Compartes el link y dejas de perder consultas en el chat.",
      ],
    },
  },

  /* -------------------------------------------------------------- informes */
  informes: {
    meta: {
      title: "Informes",
      description:
        "Ocupación, ADR, RevPAR, ingresos, cancelaciones, anticipación y canales, calculados sobre las mismas reservas que operas, y una sección con lo que está mal cargado hoy. Sin planillas.",
    },
    hero: {
      eyebrow: "Informes",
      title: "Tus números, *sin armar una planilla*.",
      lead:
        "Ocupación, tarifa promedio, ingresos, cancelaciones y de qué canal viene cada reserva, calculados sobre las mismas reservas que operas. Y una sección que no mira lo que pasó sino lo que está mal cargado hoy.",
    },
    hygiene: {
      eyebrow: "Estado y gestión",
      title: "Lo que está mal, *antes que lo que pasó*.",
      lead:
        "La mayoría de los informes te cuentan el mes pasado. Esta sección te dice qué hay que arreglar hoy, antes de que se convierta en un huésped sin habitación.",
      items: [
        "**Reservas pendientes** que nadie confirmó a tiempo.",
        "**Llegadas de hoy sin habitación asignada.**",
        "**Salidas de hoy que siguen dentro**: el check-out no se marcó.",
        "**Reservas sin canal**: las que nadie etiquetó y después te desarman el informe de canales.",
      ],
    },
    metrics: {
      eyebrow: "Qué mide",
      title: "Cada número, *explicado en su renglón*.",
      lead: "Sin glosario aparte: cada métrica se entiende donde aparece.",
      items: [
        {
          title: "Ocupación y demanda",
          desc: "Cuántas habitaciones tienes ocupadas hoy y la curva de lo que ya está reservado para los próximos 7 a 90 días.",
        },
        {
          title: "ADR y RevPAR",
          desc: "El ADR es lo que cobras en promedio por noche vendida; el RevPAR, lo que te deja cada habitación que tienes, vendida o no.",
        },
        {
          title: "Cancelaciones",
          desc: "La tasa del período y las de último momento, con su tendencia por semana o por mes.",
        },
        {
          title: "Canales",
          desc: "De dónde viene cada reserva y cuál te cancela más. Con menos de tres reservas, no lo afirma.",
        },
      ],
    },
    period: {
      eyebrow: "Contra el período anterior",
      title: "Cada número, *con su diferencia*.",
      lead:
        "Eliges el rango —una semana, un mes, tres o seis meses, o uno a medida— y cada métrica se compara con el período inmediatamente anterior.",
      items: [
        {
          title: "Ingresos",
          desc: "Los del período y los proyectados para los próximos 30 días con lo que ya está reservado.",
        },
        {
          title: "Anticipación",
          desc: "Con cuántos días de antelación te reservan, con el mínimo, el máximo y sobre cuántas reservas se calculó.",
        },
        {
          title: "Estadía promedio",
          desc: "Cuántas noches se queda cada huésped, en promedio, en el rango que elegiste.",
        },
        {
          title: "Ocupación por categoría",
          desc: "Qué categorías están llenas hoy y cuáles tienen lugar, con el porcentaje de cada una.",
        },
      ],
    },
    ask: {
      eyebrow: "La pregunta que no está en pantalla",
      title: "Si no está en el informe, *pregúntale*.",
      lead:
        "Roombir IA lee los mismos informes y te contesta en la conversación, con el número y de dónde sale. Para “¿vamos mejor que el año pasado a esta altura?” está el pace de [Revenue](/producto/revenue), contra tu propio histórico.",
      items: [
        "“¿Qué canal me cancela más este trimestre?”",
        "“¿Cuántas llegadas tengo mañana sin habitación?”",
        "“¿Cómo viene octubre contra septiembre?”",
      ],
    },
    faq: [
      {
        q: "¿De dónde salen los números?",
        a: "De las mismas reservas que operas en el calendario, calculadas en el momento. No hay una exportación nocturna ni una base aparte que se pueda desincronizar.",
      },
{
        q: "¿Qué diferencia hay con Revenue?",
        a: "Informes mira la operación: qué pasó, qué está mal cargado, de dónde vienen las reservas. [Revenue](/producto/revenue) mira hacia adelante para decidir el precio: pace contra tu propio histórico, competencia y eventos.",
      },
      {
        q: "¿Tengo que configurar algo?",
        a: "No. Con las reservas cargadas, los informes ya están. Lo único que conviene es marcar el canal de cada reserva manual, para que el informe de canales sirva.",
      },
    ],
    cta: {
      title: "Tus números, *desde el primer día*.",
      lead: "Los informes no se configuran: salen de las reservas que ya estás cargando.",
      steps: [
        "Cargas tus reservas, o las migramos contigo.",
        "Marcas el canal de cada reserva manual.",
        "Abres Informes y eliges el rango.",
      ],
    },
  },

  /* --------------------------------------------------------------- revenue */
  revenue: {
    meta: {
      title: "Revenue",
      description:
        "Revenue management con la traza de cada precio: qué datos vio, qué regla coincidió y qué tope aplicó. Pace contra tu propio histórico, competencia, eventos de tu destino de quince fuentes y la tarifa que entra al motor al aceptarla.",
    },
    hero: {
      eyebrow: "Revenue",
      title: "Te dice el precio *y por qué*.",
      lead:
        "Un documento por fecha con la traza completa: qué datos vio, qué regla coincidió y qué tope aplicó. Mira tu propio histórico y tu destino —feriados, eventos, rutas aéreas, clima— con la fuente a la vista. Y cuando aceptas, la tarifa entra sola al motor.",
    },
    decision: {
      eyebrow: "Decisiones",
      title: "La respuesta a *“¿por qué me sugieres esto?”*",
      lead:
        "Hay un documento por propiedad y por fecha con la traza completa: qué datos vio el sistema, cuál era la tarifa base, cuál sugirió, qué reglas coincidieron, si se aplicó un tope, y un registro que se lee línea por línea.",
      items: [
        "Ocupación, demanda, disponibilidad, tarifas de la competencia, reservas nuevas y eventos: todo lo que entró en la cuenta, con su valor.",
        "Qué regla coincidió y en qué orden, porque gana la última.",
        "Si se aplicó el tope mínimo o máximo, y cuál era.",
        "La vida de la recomendación: sugerida, aceptada o rechazada, aplicada, con quién y cuándo.",
      ],
    },
    destination: {
      eyebrow: "Tu destino",
      title: "Lo que mueve la demanda, *con la fuente*.",
      lead:
        "Las señales de demanda salen de quince fuentes públicas por destino, barridas alrededor de tu propiedad y no de una lista fija de ciudades. Los eventos se sugieren solos y los apruebas tú: uno aprobado no lo pisa la siguiente actualización.",
      items: [
        "**Eventos en tu radio**: deportes, cultura, congresos y ferias, con su impacto esperado y los días que faltan.",
        "**Feriados y fines de semana largos**, que las reglas de precio pueden usar como variable.",
        "**Rutas aéreas observadas** llegando a tu zona, y el tipo de cambio de los mercados que te visitan.",
        "**Las búsquedas sin disponibilidad** de tu propio motor: la señal de demanda más subestimada de un alojamiento pequeño.",
      ],
    },
    rules: {
      eyebrow: "Escenarios",
      title: "Trece variables, *y un ensayo en seco*.",
      lead:
        "Cada regla mira una variable, la compara con un valor dentro de una ventana de anticipación y aplica un ajuste. Se evalúan por orden y gana la última que coincide. Antes de activar cualquiera, el ensayo en seco te muestra qué habría hecho.",
      items: [
        "**Variables**: ocupación, índice de demanda, disponibilidad, tarifa de los competidores 1 a 5, reservas nuevas en 7 y en 30 días, impacto de eventos, días al evento más cercano e índice de pace.",
        "**Comparaciones**: mayor, mayor o igual, igual, menor o igual, menor.",
        "**Ajuste** porcentual sobre la tarifa base.",
        "**Topes** de tarifa mínima y máxima, que se aplican después de todo lo demás.",
      ],
    },
    comp: {
      eyebrow: "Competencia",
      title: "Una competencia *mixta y honesta*.",
      lead:
        "Los competidores que también usan roombir aportan su tarifa real. Los de fuera se descubren solos por cercanía y parecido, y su tarifa la cargas tú, como referencia fija o por fecha.",
      items: [
        "Puntaje de parecido por tipo, categoría, tamaño, gama y zona.",
        "El perfil de tu propio hotel, tomado del sistema salvo que lo cambies a mano.",
        "Grilla de tarifas de la competencia por fecha.",
        "Preparado para proveedores automáticos de tarifas; hoy sin conectar.",
      ],
    },
    rest: {
      eyebrow: "Las otras pestañas",
      title: "Todo lo que hay *además del precio*.",
      items: [
        {
          title: "Dos calendarios en uno",
          desc: "Por fecha de reserva —cuándo te compraron— y por fecha de estadía —cuándo duermen—. Muchos sistemas mezclan los dos y confunden.",
        },
        {
          title: "Pace",
          desc: "El ritmo de venta contra el de tu propia propiedad en el pasado, por día de semana, mes y anticipación, con alertas de venta rápida o lenta.",
        },
        {
          title: "Eventos",
          desc: "Sugeridos solos y curados por ti: sugerido, aprobado o descartado, con puntaje de relevancia e impacto esperado.",
        },
        {
          title: "Recomendaciones",
          desc: "Tarifa actual, sugerida, diferencia y motivo. Se aceptan o rechazan, y pueden aplicarse solas si lo activas.",
        },
        {
          title: "Señales de demanda",
          desc: "Además de las reservas, el índice de demanda toma las búsquedas de tu motor, incluidas las que no encontraron lugar.",
        },
        {
          title: "Configuración",
          desc: "Competencia, ubicación, perfil del hotel, umbrales de pace, radio de eventos y topes de tarifa.",
        },
      ],
    },
    cost: {
      eyebrow: "En otros lados, aparte",
      title: "Un RMS casi siempre *es un módulo más*.",
      lead:
        "Entre los sistemas para alojamientos independientes, el revenue management se vende como un agregado. El único que publica el precio en su web lo cobra por habitación.",
      head: { tool: "Producto", price: "Precio publicado", gap: "Cómo se contrata" },
      rows: [
        {
          tool: "Amenitiz PriceAdvisor",
          price: "**€6** por habitación por mes",
          gap: "Agregado sobre el plan. Sugiere; no aplica solo.",
        },
        {
          tool: "SiteMinder Dynamic Revenue Plus",
          price: "no lo publica",
          gap: "Agregado con cargo aparte sobre el plan.",
        },
        {
          tool: "Mews RMS",
          price: "no lo publica",
          gap: "Módulo aparte de sus tres planes.",
        },
      ],
      total:
        "Con precio publicado, un hotel de **15 habitaciones** paga **€90 por mes** sólo por las sugerencias de tarifa. En roombir, Revenue está en el catálogo de productos como cualquier otro: [mira qué plan lo incluye](/precios).",
      source:
        "Fuentes: páginas de producto y de precios de amenitiz.com, siteminder.com y mews.com, leídas el 22 de septiembre de 2026.",
    },
    faq: [
      {
        q: "Tengo poca historia. ¿Me sirve igual?",
        a: "Te sirve, pero te lo va a decir. El pace se compara contra **tu propio histórico**, agrupado por día de semana, mes y anticipación, y la pantalla **muestra el tamaño de la muestra**. Si una celda se calculó con tres reservas, lo vas a ver. Preferimos eso a mostrarte una curva confiada construida sobre nada.",
      },
      {
        q: "¿De dónde salen las tarifas de la competencia?",
        a: "De dos lugares. Si el competidor también usa roombir, la tarifa es real. Si es de fuera, el sistema lo **descubre solo** por ubicación y parecido, pero **la tarifa la cargas tú**, fija o por fecha. La conexión con proveedores automáticos está preparada y todavía no conectada; no vamos a decirte que sí hasta que lo esté.",
      },
      {
        q: "Si acepto una recomendación, ¿tengo que copiar el precio a otro lado?",
        a: "No. Al aceptarla, la tarifa **entra al motor de reservas** y pasa a ser el primer escalón del precio de esa fecha. En la mayoría de los sistemas ese paso es una persona copiando un número de una pantalla a otra.",
      },
    ],
    cta: {
      title: "El precio *deja de ser una corazonada*.",
      lead:
        "Revenue empieza a servir apenas tienes historia propia, y mientras no la tengas te lo dice en la cara en vez de inventar una curva.",
      steps: [
        "Cargas el inventario y las tarifas base.",
        "Armas tu competencia y apruebas los eventos de tu zona.",
        "Escribes dos o tres reglas y las pruebas en seco.",
      ],
    },
  },

  /* ------------------------------------------------------------- marketing */
  marketing: {
    meta: {
      title: "Marketing",
      description:
        "El editor web con asistente —le muestras una captura y arma las secciones— conectado a tu inventario y a tu motor. Marca, librería de fotos, galerías, reseñas, LinkHub y la capa que hace legible tu alojamiento para una IA.",
    },
    hero: {
      eyebrow: "Marketing",
      title: "Una web que *ya sabe* qué tienes libre.",
      lead:
        "El sitio, la marca, las fotos, las reseñas y el LinkHub salen del mismo lugar que tus reservas: cambias un precio y ya está en la web. Y el editor tiene un asistente: le pegas la captura de una web que te guste y te arma las secciones, editables.",
    },
    ai: {
      eyebrow: "El editor con asistente",
      title: "Le muestras una web, *te arma la tuya*.",
      lead:
        "Pegas hasta seis capturas por pedido —la portada de un hotel que te gusta, una sección de otra web— y el asistente arma las secciones con esa estructura y tus textos, en el lienzo y en borrador. Después las editas como cualquier otra cosa.",
      items: [
        "**Señalas un bloque y pides** “hazlo como este”, “agrega dos tarjetas más”, “cambia el título”: toca esa pieza y deja el resto como estaba.",
        "**Todo va al borrador.** Publicar es un paso aparte, y es tuyo.",
"**Sin código.** Y si lo quieres, hay estilos por pantalla, animaciones y CSS propio.",
      ],
    },
    connected: {
      eyebrow: "Conectada, no pegada",
      title: "Secciones que *leen tus datos*.",
      lead:
        "Lo que distingue al editor de un constructor genérico no es el lienzo: son las secciones que se conectan solas a lo que ya cargaste. En un constructor genérico, el motor y las habitaciones se pegan desde otro servicio.",
      items: [
        {
          title: "Motor y habitaciones",
          desc: "El motor de reservas, las tarjetas de habitación y las categorías, con disponibilidad y precio de verdad.",
        },
        {
          title: "Galería, reseñas, servicios y promos",
          desc: "Cambias una promo en Reservas y la web la muestra, sin editar la página.",
        },
        {
          title: "Varios idiomas",
          desc: "Cada idioma es una página con su dirección, su título y su vista previa para redes. No es un traductor encima.",
        },
        {
          title: "Tu dominio",
          desc: "Cada idioma puede tener el suyo, con borrador, publicación explícita y vista previa en varios tamaños.",
        },
      ],
    },
    quality: {
      eyebrow: "Calidad del sitio",
      title: "Un control de calidad *que también arregla*.",
      lead:
        "Un panel como el de PageSpeed revisa lo que un buscador y un celular castigan. El botón “Arreglar todo” corrige lo que encontró con reglas fijas, sin IA de por medio, y vuelve a revisar.",
      items: [
        {
          title: "Antes de publicar",
          desc: "Te avisa textos demasiado pequeños en el celular, imágenes sin descripción y títulos o descripciones que faltan.",
        },
        {
          title: "Plantillas con tu marca",
          desc: "Arrancas de una plantilla que se rellena con tu logo, tus colores, tus fotos y los textos de tu propiedad.",
        },
        {
          title: "Modo simple o avanzado",
          desc: "El simple esconde los controles de diseño hasta que los buscas. El avanzado los muestra todos.",
        },
        {
          title: "Popups y WhatsApp",
          desc: "Cinco formatos de popup con reglas de página y de frecuencia, y un botón de WhatsApp con el mensaje ya escrito.",
        },
      ],
    },
    cost: {
      eyebrow: "Lo que hoy pagas aparte",
      title: "Cinco proveedores *que no se hablan*.",
      lead:
        "Así se arma hoy la presencia digital de un alojamiento independiente, con los precios que cada proveedor publica. Ninguno sabe qué tienes libre esta noche.",
      head: { tool: "Lo que se compra", price: "Precio publicado", gap: "Qué no sabe de tu alojamiento" },
      rows: [
        {
          tool: "Sitio web en Framer",
          price: "US$ 10/mes + **US$ 20 por idioma**",
          gap: "Tu inventario y tus precios: el motor se pega desde otro servicio.",
        },
        {
          tool: "Sitio web en Webflow",
          price: "US$ 15/mes + **US$ 9 por idioma**",
          gap: "Lo mismo: sin habitaciones ni motor propios.",
        },
        {
          tool: "Reseñas en TrustYou",
          price: "desde **US$ 75** por propiedad por mes",
          gap: "Qué huésped se fue hoy, salvo que lo integres con tu sistema.",
        },
        {
          tool: "Link en la bio con Linktree",
          price: "**US$ 15/mes**",
          gap: "Tu disponibilidad: “Reservar” es un enlace.",
        },
        {
          tool: "Fotos en Google Workspace",
          price: "**US$ 7** por usuario por mes",
          gap: "Qué foto es de qué habitación.",
        },
      ],
      total:
        "Un sitio en cinco idiomas en Framer (US$ 10 + 4 × US$ 20), más reseñas, link en la bio y fotos: **US$ 187 por mes**, y todavía sin motor de reservas ni nada conectado a tus reservas.",
      source:
        "Precios publicados en framer.com, webflow.com, trustyou.com, linktr.ee y workspace.google.com, leídos el 22 de septiembre de 2026. Framer, Webflow y TrustYou, con pago anual; Linktree, plan Pro mensual.",
    },
    brand: {
      eyebrow: "Marca",
      title: "Tu marca, *cargada una vez*.",
      lead:
        "Una ficha de identidad que alimenta la web, el LinkHub, el motor y los datos que leen los buscadores. Cambias el logo y cambia en todos lados.",
      items: [
        "**Paleta sacada de tu logo**, con el color principal ajustado para que el texto encima se lea.",
        "**Tono y tipografía**: eliges el tono y la tipografía se sugiere sola.",
        "**Historia, frase y a quién le hablas**, en tus palabras.",
        "**Tu zona y lo que tienes cerca**, detectados desde el mapa.",
      ],
    },
    files: {
      eyebrow: "Fotos y archivos",
      title: "Tus fotos, *en un solo lugar*.",
      items: [
        {
          title: "La librería de la compañía",
          desc: "Imágenes, videos, audios y documentos, con carpetas, etiquetas y búsqueda. Arrastras desde la computadora y listo.",
        },
        {
          title: "Editor de imagen",
          desc: "Recortas y ajustas una foto sin salir del sistema.",
        },
        {
          title: "Galerías",
          desc: "Fotos y videos de YouTube o Vimeo agrupados en galerías de la propiedad, con portada y orden.",
        },
        {
          title: "La misma librería para todo",
          desc: "La usan el editor web, la marca, las galerías y el asistente. La web muestra la galería que elijas con una sección.",
        },
      ],
    },
    reviews: {
      eyebrow: "Reseñas",
      title: "Tus reseñas, *respondidas en un solo lugar*.",
      lead:
        "Cargas las reseñas de Google, Booking, TripAdvisor, Airbnb, Despegar, Hotels.com y las propias, a mano o por archivo, y las respondes desde aquí. Las que elijas se muestran en tu web.",
      items: [
        "**Importación por archivo** que avisa las filas con errores y no duplica las que ya estaban.",
        "**Respuesta pública** por reseña, y un filtro de las que siguen sin responder.",
        "**Promedio y distribución** de una a cinco estrellas, y cuántas faltan responder.",
        "**Se publican en tu web** con una sección del editor, sólo las que dejas visibles.",
      ],
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "El link de tu bio, *con el motor dentro*.",
      lead:
        "Un link en la bio hecho para alojamientos: el botón de reservar abre el mismo motor que tu web, con disponibilidad y precio, sin mandar a nadie a otro formulario.",
      items: [
        "**Diez tipos de bloque**: reservar, WhatsApp, reseñas, galería, video, mapa, contacto, enlace, texto y separador, con programación por fecha.",
        "**Seis plantillas** que se completan con tu marca, o el diseño a mano.",
        "**Código QR** para imprimir en la recepción o en la carta.",
        "**Visitas y clics** por día, país, origen y dispositivo, sin guardar la IP de nadie.",
      ],
    },
    agentes: {
      eyebrow: "Legible para una IA",
      title: "Que una máquina pueda *entenderte y reservarte*.",
      lead:
        "Cada vez más gente le pregunta a un asistente de IA antes de buscar. Ese asistente no ve tu carrusel de fotos: lee texto, datos estructurados y rutas. Tu web y tu motor publican las tres cosas, y se encienden con un interruptor.",
      items: [
        "**`llms.txt`**: quién eres, qué vendes y cómo se reserva, en texto plano.",
        "**`availability.json`** y **`engine-capabilities.json`**: tu disponibilidad real y qué acepta tu motor.",
        "**Datos estructurados** en cada página y un editor de GEO para declarar qué eres con tus palabras.",
        "**Diez herramientas para agentes en el navegador**: un asistente externo puede completar una reserva.",
      ],
    },
    faq: [
      {
        q: "¿Necesito saber diseñar?",
        a: "No. Puedes arrancar de una plantilla que se rellena con tu marca, pedirle al asistente que arme una sección a partir de una captura, o trabajar en modo simple, que esconde los controles de diseño. Si sabes diseñar, el modo avanzado tiene estilos por pantalla, animaciones y CSS propio.",
      },
      {
        q: "¿Tengo que cargar las habitaciones dos veces, una para la web?",
        a: "No, y ese es el punto. Las secciones de habitaciones, motor, galerías, promociones, reseñas y servicios **se conectan solas a lo que ya cargaste**. Si subes una foto nueva a una categoría, aparece en la web sin que nadie la toque.",
      },
      {
        q: "¿Puedo usar mi propio dominio?",
        a: "Sí, y cada idioma del sitio puede tener el suyo.",
      },
{
        q: "¿Puedo traer mis reseñas de Google?",
        a: "Sí, por archivo o a mano.",
      },
    ],
    cta: {
      title: "Tu web y tu link, *la misma tarde*.",
      lead:
        "Si ya cargaste la marca y las habitaciones, arrancas el sitio desde una plantilla o desde una captura, y el LinkHub se completa con los datos de la propiedad.",
      steps: [
        "Cargas tu marca y tus fotos.",
        "Arrancas el sitio desde una plantilla o una captura.",
        "Publicas en tu dominio y armas el LinkHub.",
      ],
    },
  },

  /* ------------------------------------------------------------ soluciones */
  soluciones: {
    meta: {
      title: "Soluciones",
      description:
        "Hoteles, cabañas y departamentos, hostels, glamping y villas, y grupos pequeños: cómo se configura Roombir para cada tipo de alojamiento y para cada puesto de trabajo.",
    },
    hero: {
      eyebrow: "Soluciones",
      title: "El mismo sistema, *configurado distinto*.",
      lead:
        "Un hotel urbano, un complejo de cabañas y un hostel no operan igual, y sin embargo casi todos los sistemas del mercado eligen uno de los tres y hacen que los otros dos se acomoden. Aquí lo que cambia es la configuración: modelo de venta, espacios de trabajo y apps activas.",
    },
    hoteles: {
      eyebrow: "Hoteles y aparthoteles",
      title: "Habitaciones intercambiables, *asignadas solas*.",
      lead:
        "La configuración clásica: categorías que agrupan varias unidades equivalentes, el huésped compra un tipo de habitación y el sistema decide cuál le toca. Con la asignación automática puedes pedirle que minimice huecos o que equilibre el desgaste entre unidades.",
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
        "Aquí el huésped no compra 'una cabaña de dos ambientes': compra la Alerce, con sus fotos y su descripción. El modelo de unidad única hace que la categoría envuelva exactamente una unidad, y no queda ninguna ambigüedad sobre qué reservó.",
      items: [
        "Modelo de venta: unidad única 1:1, elegible por categoría y no para toda la propiedad.",
        "Ficha propia por unidad en el motor: fotos, descripción, capacidad y precio.",
        "Bloqueos de mantenimiento que descuentan inventario real y desaparecen del motor.",
        "Si además tienes dos habitaciones estándar, conviven: el modo se define por categoría.",
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
        "Cuando tienes seis domos, la operación es simple y lo difícil es venderlos bien. La identidad de marca, las galerías, el sitio con dominio propio y el LinkHub pesan más que el tape chart.",
      items: [
        "Identidad de marca con paleta extraída del logo, tono, narrativa y audiencias.",
        "Sitio con plantilla autocompletada desde tus datos reales, en tu dominio.",
        "LinkHub con QR para imprimir, y el motor como botón principal.",
        "Capa agéntica: el alojamiento queda legible para un modelo de lenguaje, no sólo para Google.",
      ],
    },
    grupos: {
      eyebrow: "Grupos y cadenas pequeñas",
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
      title: "Y dentro, *cada uno ve lo suyo*.",
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
          desc: "Builder, sitios, galerías, reseñas, marca y LinkHub. La home muestra score de reseñas, visibilidad y estado del LinkHub. Ni asoma el área Reservas.",
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
    faq: [
      {
        q: "Tengo cabañas y también dos habitaciones estándar. ¿Qué modelo elijo?",
        a: "Los dos. El modo de venta se define por **categoría**, no por sistema: las cabañas van como unidad única 1:1, con nombre propio, y las habitaciones como pool intercambiable. Conviven en el mismo calendario y en el mismo motor, y hay un asistente para migrar una categoría de un modo al otro cuando ya tiene reservas dentro.",
      },
      {
        q: "Somos tres personas que rotan turnos. ¿Cómo entrenamos a alguien nuevo?",
        a: "Cada persona entra a su espacio de trabajo y ve sólo lo suyo. La inducción se arma con las apps de ese espacio, y los **38 recorridos guiados** se dibujan encima de la pantalla real, resaltando el elemento del que hablan. No hay manual que leer ni video que mirar: se aprende en el primer turno.",
      },
      {
        q: "Tengo dos propiedades en ciudades distintas.",
        a: "Una compañía puede tener varias propiedades, y cada membresía se puede acotar: el encargado de una ve la suya y nada más. Con las **plantillas de propiedad**, la segunda arranca con los espacios de trabajo y las apps ya configurados como la primera.",
      },
    ],
    cta: {
      title: "Cuéntanos cómo *operas tú*.",
      lead:
        "En el alta hay un paso donde eliges tu arquetipo de operación, y de ahí salen los espacios de trabajo y las apps iniciales. Si no encaja ninguno, escríbenos y lo vemos.",
      steps: [
        "Eliges tipo de alojamiento y modelo de venta.",
        "El alta te arma los espacios de trabajo.",
        "Ajustas apps y permisos por puesto.",
      ],
    },
  },

  /* --------------------------------------------------------------- precios */
  precios: {
    meta: {
      title: "Precios",
      description:
        "Un plan por alojamiento, sin comisión por reserva y sin costo de puesta en marcha. Mira qué productos incluye cada plan y qué todavía no hacemos.",
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
          desc: "Los mails al huésped salen del dominio de roombir, sin servicio de correo aparte ni configuración de SMTP por hotel.",
        },
        {
          title: "Puesta en marcha",
          desc: "El alta es autogestionada. Para las primeras cohortes acompañamos la carga de habitaciones sin cargo.",
        },
        {
          title: "Sitio web y dominio",
          desc: "El constructor y el renderer están en el plan. El dominio lo registras tú donde quieras y lo apuntas aquí.",
        },
        {
          title: "Usuarios adicionales",
          desc: "Dentro del tope del plan, agregas a quien necesites. No se cobra por asiento.",
        },
        {
          title: "Cargo por transacción",
          desc: "No existe, porque todavía no hay pasarela de pago: el cobro al huésped es contra el check-in.",
        },
      ],
    },
    /* De los cinco sistemas más grandes del mundo ninguno publica un número
       en su web (medido el 2-sep-2026). Esta sección dice por qué nosotros sí. */
    why: {
      eyebrow: "Por qué está publicado",
      title: "El precio *no se pide*: se lee.",
      lead:
        "De los cinco sistemas hoteleros más grandes del mundo, ninguno publica un número en su web: se pide por formulario y aparece en la segunda reunión. Un alojamiento de doce unidades no tiene tiempo para eso.",
      items: [
        {
          title: "Mismo catálogo que cobra",
          desc: "Las tarjetas y la comparativa salen del endpoint que usa el sistema para resolver tu cuenta. No hay una versión de marketing de los planes.",
        },
        {
          title: "Sin permanencia",
          desc: "Mensual, sin penalidad y sin llamado de retención. Lo dicen los [términos](/legal/terminos), no un vendedor.",
        },
        {
          title: "Lo que no está, no se cobra",
          desc: "Channel manager y pagos no aparecen en ningún plan porque no existen todavía. Cuando existan van a estar aquí, con su número.",
        },
      ],
    },
    compareAsk: "¿Estás comparando con otro sistema?",
    compareLink: "Ver las comparativas, con fecha",
    faqTitle: "Preguntas sobre precios",
    faq: [
      {
        q: "¿Cobran comisión por reserva?",
        a: "No. El motor es tuyo y lo que entra por ahí es tuyo entero. El plan es una suscripción por alojamiento y no hay un porcentaje por reserva ni un cargo por transacción — entre otras cosas porque **tampoco hay pasarela de pago todavía**: el cobro es contra el check-in.",
      },
      {
        q: "¿Hay costo de puesta en marcha?",
        a: "No. El alta es autogestionada: nueve pasos guiados que haces tú, con el progreso guardado en el servidor. Para las primeras cohortes ofrecemos acompañamiento en vivo en el paso de carga de habitaciones —el que más cuesta— y tampoco se cobra.",
      },
      {
        q: "¿Qué pasa cuando se termina el período gratis?",
        a: "Eliges un plan de pago o dejas de usarlo. No hay permanencia ni penalidad. Estamos en piloto de mercado: lo que buscamos de esta etapa es evidencia real de uso, no facturación.",
      },
      {
        q: "¿Se paga por usuario?",
        a: "No: cada plan trae un tope de usuarios y de propiedades, y dentro de ese tope agregas a quien quieras sin cargo por persona. Los topes están en la comparativa de arriba.",
      },
      {
        q: "¿El revenue management se paga aparte?",
        a: "En los sistemas grandes casi siempre sí: el RMS es un módulo adicional que se cotiza por separado. Aquí es un producto más del catálogo y entra o no según el plan — la comparativa de arriba te lo dice fila por fila.",
      },
      {
        q: "¿Por qué los otros sistemas no publican precio?",
        a: "Porque el precio por habitación baja con el tamaño y les conviene negociar caso por caso. Es legítimo, pero traslada el trabajo al hotelero: formulario, llamada, cotización, segunda llamada. Preferimos perder alguna negociación y que el número esté a la vista. Si quieres ver cómo queda frente a cada uno, está en las [comparativas](/comparar).",
      },
    ],
    cta: {
      title: "Empieza gratis y *después vemos*.",
      lead:
        "No pedimos tarjeta para el alta. Si en dos semanas el sistema no te cambió nada, no hay nada que cancelar.",
      steps: [
        "Te das de alta sin tarjeta.",
        "Cargas la propiedad y las habitaciones.",
        "Eliges plan cuando el período gratis termine.",
      ],
    },
  },

  /* -------------------------------------------------------------- nosotros */
  nosotros: {
    meta: {
      title: "Nosotros",
      description:
        "Por qué existe roombir, cómo trabajamos y en qué estado está cada parte del producto — incluido lo que todavía no hace.",
    },
    hero: {
      eyebrow: "Nosotros",
      title: "Software para el alojamiento que *no tiene un área de sistemas*.",
      lead:
        "Roombir nació de una observación simple: un hotel de veinte habitaciones o un complejo de seis cabañas necesita exactamente las mismas piezas que una cadena, y ninguna de las opciones del mercado se las da juntas de una forma que tenga sentido a esa escala.",
      secondary: "Ver el producto",
    },
    thesis: {
      eyebrow: "La tesis",
      title: "Un alojamiento chico no debería necesitar *cinco proveedores y un consultor*.",
      p1: "Hoy la salida típica es un PMS por un lado, un motor por otro, una web hecha por alguien que ya no contesta, un Excel de tarifas y las consultas cayendo en un WhatsApp que nadie ordena. Cada pieza funciona; el conjunto no. Y el trabajo de mantener el conjunto alineado lo termina haciendo, a mano, la persona de recepción.",
      p2: "La apuesta de Roombir es que ese conjunto sea un solo sistema con una sola base de datos, que se pueda dar de alta sin ayuda, y que cada puesto de trabajo vea únicamente lo suyo. Todo lo demás —el RMS, la capa de agentes, el asistente— sale de ahí: son cosas que sólo se pueden hacer bien cuando los datos ya son uno solo.",
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
          desc: "Configurar un servidor de correo, esperar una llamada de onboarding, pagar una puesta en marcha: cada una de esas cosas es gente que se queda fuera. El alta son nueve pasos que haces solo, y los emails al huésped salen sin que configures nada.",
        },
      ],
    },
    pilot: {
      eyebrow: "Dónde estamos",
      title: "En piloto de mercado, *a propósito*.",
      lead:
        "En esta etapa no buscamos volumen. Estamos tratando de contestar cuatro preguntas con datos, y las cuatro dependen de que haya alojamientos usando el sistema en serio, con reservas reales dentro.",
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
        { value: "1", label: "sola base de datos para todo el sistema" },
      ],
    },
    cta: {
      title: "Si algo de esto *te suena a tu problema*.",
      lead:
        "Escríbenos y lo conversamos sin rodeos. Si Roombir todavía no sirve para tu caso, te lo vamos a decir en esa misma conversación.",
      steps: [
        "Nos cuentas cómo operas hoy.",
        "Te decimos qué resuelve y qué no.",
        "Si tiene sentido, empezamos el alta juntos.",
      ],
    },
  },

  /* -------------------------------------------------------------- contacto */
  contacto: {
    meta: {
      title: "Contacto",
      description:
        "Escríbenos y lo conversamos sin rodeos: qué resuelve Roombir para tu alojamiento y qué todavía no. También puedes empezar el alta tú mismo.",
    },
    eyebrow: "Contacto",
    title: "Cuéntanos cómo *recibes reservas hoy*.",
    lead:
      "No hace falta que sepas qué módulo necesitas. Con saber cuántas unidades tienes, si vendes en OTAs y qué parte del día se te va contestando disponibilidad, ya alcanza para decirte si Roombir te sirve — o si todavía no.",
    checks: [
      "Te contestamos dentro del día hábil.",
      "Si algo que necesitas todavía no existe, te lo decimos ahí mismo.",
      "Si quieres, hacemos juntos la carga de habitaciones en una llamada corta.",
    ],
    directLabel: "O escríbenos directo",
    shortcutTitle: "¿Prefieres no esperar una respuesta?",
    shortcutText:
      "El alta es autogestionada y guiada. Puedes tener el motor funcionando antes de que contestemos este formulario.",
  },

  /* ----------------------------------------------------------------- legal */
  legal: {
    updated: "Última actualización",
    updatedDate: "30 de agosto de 2026",
    privacy: {
      meta: {
        title: "Política de privacidad",
        description:
          "Qué datos toma Roombir en este sitio y en la plataforma, con qué proveedores los procesa y cómo pedir que se borren.",
      },
      title: "Política de privacidad",
      lead: "Qué datos tomamos, para qué, con quién los procesamos y cómo pedir que se borren.",
      blocks: [
        { h: "1. Quiénes somos" },
        {
          p: "Roombir es una plataforma de gestión para alojamientos operada desde Argentina. Para cualquier cuestión relacionada con tus datos personales puedes escribirnos a [hola@roombir.com](mailto:hola@roombir.com).",
        },
        { h: "2. Dos roles distintos" },
        { p: "Conviene separarlos porque las obligaciones no son las mismas:" },
        {
          ul: [
            "**Este sitio y la relación comercial contigo.** Aquí somos responsables de los datos: los tomamos para contactarte y para entender de dónde llegan las consultas.",
            "**La plataforma.** Cuando un alojamiento carga los datos de sus huéspedes en roombir, el responsable de esos datos es el alojamiento; nosotros los procesamos por su cuenta y según sus instrucciones.",
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
          p: "No usamos los datos del formulario para nada que no sea contactarte sobre roombir, y no los vendemos ni los cedemos con fines publicitarios a terceros.",
        },
        { h: "4. Qué datos toma la plataforma" },
        {
          p: "Si te das de alta, además tomamos lo necesario para que el sistema funcione: los datos de tu cuenta y de tu compañía, los de tus propiedades y unidades, y los de las reservas que cargues o que entren por tu motor —incluidos los datos del huésped que hagan falta para la estadía—. Todo eso te pertenece a ti.",
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
          p: "Los datos de contacto comercial se conservan mientras haya una relación o un interés vigente, y se borran cuando nos lo pides. Los datos operativos de una cuenta se conservan mientras la cuenta exista y por el plazo que corresponda a las obligaciones legales y contables aplicables.",
        },
        { h: "7. Tus derechos" },
        {
          p: "Puedes pedirnos acceso a tus datos, su corrección, su actualización o su supresión escribiéndonos a [hola@roombir.com](mailto:hola@roombir.com). En Argentina, la Agencia de Acceso a la Información Pública es la autoridad de control en materia de protección de datos personales y atiende los reclamos de quien considere vulnerados sus derechos.",
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
          "Condiciones de uso de la plataforma roombir: qué incluye el servicio, qué está en piloto, responsabilidades de cada parte y cómo se da de baja una cuenta.",
      },
      title: "Términos y condiciones",
      lead: "Las reglas de uso de la plataforma, escritas para que se entiendan.",
      blocks: [
        { h: "1. Qué es el servicio" },
        {
          p: "Roombir es una plataforma en la nube para gestionar un alojamiento: reservas, habitaciones, motor de reservas público, sitios web, revenue management, portal del huésped y un asistente de inteligencia artificial. Se accede por navegador; no se entrega software para instalar.",
        },
        { h: "2. Alcance del servicio" },
        {
          p: "La plataforma está en **piloto de mercado**: puede haber funcionalidades parciales o que todavía no existan. El alcance vigente se detalla por escrito al contratar y forma parte de lo que aceptas: no prometemos funcionalidades que no existan.",
        },
        { h: "3. Tu cuenta" },
        {
          p: "Eres responsable de las credenciales de tu cuenta y de las de las personas que des de alta. El sistema crea usuarios con una contraseña temporal que la persona debe cambiar en el primer ingreso; hasta que lo haga, la interfaz le queda bloqueada.",
        },
        {
          p: "Puedes asignar roles, capacidades administrativas y alcance por propiedad. La configuración de esos permisos es tuya: nosotros proveemos el mecanismo, no decidimos quién ve qué en tu operación.",
        },
        { h: "4. Tus datos" },
        {
          p: "Los datos que cargues —propiedades, unidades, tarifas, reservas, huéspedes, contenido de tus sitios— son tuyos. Los procesamos para prestarte el servicio, según la [política de privacidad](/legal/privacidad). Si eres tú quien carga datos de huéspedes, eres el responsable de esos datos frente a ellos y ante la ley aplicable.",
        },
        { h: "5. Condiciones comerciales" },
        {
          p: "Los productos incluidos y los topes de propiedades y de usuarios de cada cuenta se comunican por escrito al momento de contratar y forman parte del acuerdo.",
        },
        {
          p: "El cobro al huésped no pasa por roombir: hoy se hace contra el check-in, entre el alojamiento y el huésped.",
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
          p: "El asistente ejecuta operaciones con los permisos reales de quien lo usa y deja registro de lo que hizo. Aun así, es un sistema probabilístico: **revisa lo que ejecuta** antes de dar por hecha una operación sensible, igual que revisarías el trabajo de alguien que acaba de entrar. Las sugerencias de tarifa del módulo de revenue son eso, sugerencias: la decisión de aplicarlas es tuya.",
        },
        { h: "9. Propiedad intelectual" },
        {
          p: "El software, la marca y la documentación de Roombir son nuestros. El contenido que cargues —textos, fotos, logo, diseño de tu sitio— es tuyo, y nos autorizas a alojarlo y mostrarlo únicamente para prestar el servicio.",
        },
        { h: "10. Baja" },
        {
          p: "Puedes dar de baja tu cuenta cuando quieras escribiéndonos a [hola@roombir.com](mailto:hola@roombir.com). Antes de cerrarla te damos un plazo razonable para que descargues lo que necesites conservar.",
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
          "Qué cookies y tecnologías de medición usa el sitio de roombir, cuáles son necesarias y cómo desactivar el resto.",
      },
      title: "Política de cookies",
      lead: "Qué guarda este sitio en tu navegador y qué puedes desactivar.",
      blocks: [
        { h: "1. El sitio público" },
        {
          p: "Las páginas de `roombir.com` son estáticas y no necesitan cookies para funcionar. No usamos cookies propias para perfilarte ni para recordar quién eres entre visitas. La única que puede aparecer es la que guarda el **idioma que elegiste** en el selector, para no devolverte a otro en la próxima visita.",
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
          p: "La aplicación en `app.roombir.com` sí usa cookies **necesarias**: son las que mantienen tu sesión iniciada. Sin ellas no se puede usar el sistema, y no se pueden desactivar sin cerrar la sesión.",
        },
        {
          p: "La plataforma también guarda algunas preferencias en el almacenamiento local de tu navegador —el tema visual, el estado de la barra lateral, el progreso de los recorridos guiados—. Eso vive en tu equipo y no viaja a ningún lado.",
        },
        { h: "4. Cómo desactivarlas" },
        {
          p: "Puedes bloquear o borrar cookies desde la configuración de tu navegador, y usar las opciones de exclusión que ofrecen las propias plataformas de analítica y publicidad. Si bloqueas todas las cookies, el sitio público sigue funcionando igual; la aplicación, no —porque no va a poder mantener tu sesión—.",
        },
        { h: "5. Consultas" },
        {
          p: "Cualquier duda sobre esto, escríbenos a [hola@roombir.com](mailto:hola@roombir.com). Ver también la [política de privacidad](/legal/privacidad).",
        },
      ],
    },
  },

  /* ------------------------------------------------------------ comparar */
  /* Las comparativas con nombre y apellido. Dos reglas que no se negocian:
     (1) los datos del competidor salen de SU web pública, leída en la fecha
     que se muestra, y si no publica algo la celda dice "no lo declara" —nunca
     una estimación de terceros, que es donde más se inventa en este sector—;
     (2) la tarjeta "elige a X si…" va primero y con la misma generosidad que
     la nuestra. Los tonos: ok / mid / no / info (ver `toneOf` en Sections). */
  comparar: {
    meta: {
      title: "Comparativas",
      description:
        "Roombir frente a Cloudbeds, Little Hotelier, Amenitiz y Mews: precio publicado, permanencia, comisión, revenue, channel manager, pagos e IA. Verificado contra sus webs, con fecha, y con en qué caso conviene el otro.",
    },
    hero: {
      eyebrow: "Comparativas",
      title: "Comparado *con nombre y apellido*.",
      lead:
        "Cuatro comparativas escritas con una regla: sólo lo que dice la web pública de cada uno, leída en una fecha concreta y citada tal cual. Sin estimaciones de terceros ni capturas viejas. Cada una dice en qué caso conviene el otro, porque una comparativa que siempre gana no le sirve a nadie.",
      notes: ["Sólo su web pública", "Con fecha de verificación", "Con “cuándo elegir al otro”"],
    },
    vsPrefix: "Roombir vs",
    read: "Leer la comparativa",
    verified: "Verificado el {date} contra la web pública de {name}",
    verifiedDate: "2 de septiembre de 2026",
    chooseThem: "Elige {name} si…",
    chooseUs: "Elige Roombir si…",
    table: {
      eyebrow: "Criterio por criterio",
      title: "Roombir y {name}, *en la misma tabla*.",
      lead:
        "Las filas de Roombir salen del estado del producto que publicamos en Nosotros, incluidas las que dicen “no existe todavía”. Las del otro, de su web pública en la fecha indicada. Si algo cambió, avísanos y lo corregimos con la fecha nueva.",
      headCriterion: "Criterio",
      headUs: "roombir",
    },
    legend: {
      ok: "Sí, incluido o declarado",
      mid: "Parcial, add-on o con condiciones",
      no: "No, o no lo declara",
      info: "Dato sin valoración",
    },
    sourcesNote:
      "Datos de {name} tomados de su sitio público el {date}. Los de roombir, del [estado del producto](/nosotros#estado) de esa misma fecha. Si encuentras algo desactualizado, escríbenos a hola@roombir.com. Fuente:",
    method: {
      eyebrow: "Cómo comparamos",
      title: "Sólo lo que dice su web, *con fecha*.",
      lead:
        "Es la única forma de que una comparativa escrita por una de las partes sirva para algo. Tres reglas, y se aplican también a la columna nuestra.",
      items: [
        "**Fuente única:** el sitio público de cada competidor, leído el 2 de septiembre de 2026. Si un dato no está en su web, la celda dice “no lo declara”; no lo inventamos.",
        "**Sin precios de terceros:** los números que circulan en directorios de software son estimaciones. Si el competidor no publica precio, la fila dice exactamente eso.",
        "**Nuestras filas salen del estado del producto:** las mismas que dicen que no tenemos channel manager ni pagos. Si mejoramos, cambia ahí y cambia aquí en el mismo commit.",
      ],
    },
    cta: {
      title: "Si después de leer *sigues aquí*.",
      lead:
        "El alta es gratuita, guiada y no pide tarjeta. Y si la comparativa te dejó claro que necesitas lo que todavía no tenemos, también sirvió.",
      steps: [
        "Te das de alta y cargas una propiedad.",
        "Pruebas el motor y el asistente con tus datos.",
        "Eliges plan sólo si te cambió algo.",
      ],
    },
    /* La columna de roombir, común a las cuatro comparativas. */
    criteria: {
      price: { label: "Precio publicado en la web", us: "Sí: en HTML, con número, del mismo catálogo con el que se cobra la cuenta", tone: "ok" },
      trial: { label: "Probar sin tarjeta", us: "Sí: plan gratis y alta autogestionada, sin llamada previa", tone: "ok" },
      lockin: { label: "Permanencia", us: "Sin permanencia: plan mensual, baja sin penalidad", tone: "ok" },
      commission: { label: "Comisión sobre el motor de reservas", us: "0%. Lo que entra por tu motor es tuyo entero", tone: "ok" },
      rms: { label: "Revenue management", us: "Incluido en el catálogo de productos, según plan; no es un módulo aparte", tone: "ok" },
      channel: { label: "Channel manager (OTAs)", us: "No existe todavía. Sólo una bitácora de eventos para cuando se conecte", tone: "no" },
      payments: { label: "Cobro online al huésped", us: "No existe todavía: el cobro es contra el check-in", tone: "no" },
      ai: { label: "Asistente de IA", us: "Ejecuta con tus permisos, transcripción del turno visible", tone: "ok" },
      fx: { label: "Multimoneda", us: "10 monedas; conversión congelada al check-in; blue, MEP, CCL u oficial para ARS", tone: "ok" },
      dual: { label: "Modelo de venta pool y unidad 1:1", us: "Sí, elegible por categoría, conviviendo en el mismo calendario", tone: "ok" },
      website: { label: "Sitio web con dominio propio", us: "Incluido: builder, multi-idioma, LinkHub con QR", tone: "ok" },
      fiscal: { label: "Facturación fiscal local", us: "No todavía", tone: "no" },
      languages: { label: "Idiomas de la plataforma", us: "5: español, inglés, portugués, francés, alemán", tone: "info" },
      segment: { label: "Segmento típico", us: "Independientes y boutique de LATAM: hoteles, cabañas, hostels, glamping", tone: "info" },
      support: { label: "Alta y soporte", us: "Alta guiada en 9 pasos, 38 recorridos, carga de habitaciones acompañada sin cargo", tone: "info" },
      llms: { label: "Su propio sitio, legible por IA (llms.txt)", us: "Sí: curado, con los mismos números y precios que la web", tone: "ok" },
    },
    rivals: {
      cloudbeds: {
        name: "Cloudbeds",
        site: "cloudbeds.com",
        oneLiner: "El all-in-one global: 20.000+ propiedades, channel manager de 450+ canales, precio bajo cotización.",
        meta: {
          title: "Roombir vs Cloudbeds",
          description:
            "Cloudbeds y Roombir comparados criterio por criterio: precio publicado, permanencia, comisión, revenue, channel manager, pagos e IA. Verificado contra cloudbeds.com el 2 de septiembre de 2026.",
        },
        hero: {
          title: "Roombir vs *Cloudbeds*",
          lead:
            "Cloudbeds es el sistema más completo del segmento independiente a escala global: channel manager, pagos, marketing y una capa de IA analítica, en más de 150 países. Roombir es más chico, más nuevo y hecho para LATAM, con dos cosas que Cloudbeds no publica —el precio y la permanencia— y dos que Cloudbeds tiene y nosotros todavía no: channel manager y pasarela de pago.",
        },
        them: [
          "Vendes fuerte en OTAs y necesitas un channel manager hoy, no cuando lo lancemos.",
          "Quieres cobrar online con tarjeta desde el motor.",
          "Operas varias propiedades en varios países y necesitas un marketplace de 450 integraciones.",
        ],
        us: [
          "Quieres saber cuánto cuesta antes de hablar con un vendedor, y no firmar permanencia.",
          "Tu problema es la venta directa: las consultas se pierden en el chat y no hay web ni motor propio.",
          "Vendes en pesos con tipo de cambio inestable, o mezclas cabañas con habitaciones y ningún sistema te deja.",
        ],
        rows: {
          price: { v: "No: cuatro planes y los cuatro terminan en “Request a quote”", tone: "no" },
          trial: { v: "No: la entrada es “Get a demo”", tone: "no" },
          lockin: { v: "No lo declara en su página de precios", tone: "mid" },
          commission: { v: "0% en motor y channel manager (declarado); comisión de metasearch después de la estadía", tone: "ok" },
          rms: { v: "Add-on: Revenue Intelligence, dentro de Revenue Marketing", tone: "mid" },
          channel: { v: "Sí, 450+ canales", tone: "ok" },
          payments: { v: "Sí, Cloudbeds Payments", tone: "ok" },
          ai: { v: "Signals y Ask Signals: IA conversacional para consultar datos", tone: "mid" },
          fx: { v: "No lo declara", tone: "mid" },
          dual: { v: "Hoteles y alquileres como segmentos; sin modo mixto declarado", tone: "mid" },
          website: { v: "Add-on: Websites, dentro de Revenue Marketing", tone: "mid" },
          fiscal: { v: "No lo declara", tone: "mid" },
          languages: { v: "Web en 4: inglés, español, portugués, francés", tone: "info" },
          segment: { v: "Independientes y grupos, 150+ países, 20.000+ propiedades", tone: "info" },
          support: { v: "Onboarding, Customer Success y Cloudbeds University", tone: "info" },
          llms: { v: "Sin llms.txt (404 al verificar)", tone: "no" },
        },
        faq: [
          {
            q: "¿Cloudbeds es mejor que roombir?",
            a: "En cobertura, sí: tiene channel manager, pagos y 450 integraciones que nosotros no tenemos. En transparencia y en foco, creemos que no: su precio se pide por formulario, y el revenue y el sitio web son módulos aparte. Si tu problema hoy es la distribución en OTAs, Cloudbeds. Si es la reserva directa y saber cuánto vas a pagar, roombir.",
          },
          {
            q: "¿Cuánto cuesta Cloudbeds?",
            a: "No lo publica. Su página de precios tiene cuatro planes —Flex, One, Experience y Enterprise— y los cuatro terminan en “Request a quote”. Los números que circulan en internet son estimaciones de terceros, no de Cloudbeds, y por eso no los repetimos aquí.",
          },
          {
            q: "¿Puedo migrar de Cloudbeds a roombir?",
            a: "Sí, y acompañamos la carga de habitaciones y tarifas sin cargo. Lo que conviene saber antes: si dependes de su channel manager, en Roombir esa sincronización con OTAs hoy se hace a mano. Está en el [estado del producto](/nosotros#estado).",
          },
        ],
      },
      littlehotelier: {
        name: "Little Hotelier",
        site: "littlehotelier.com",
        oneLiner: "La marca de SiteMinder para 1–30 habitaciones: 30 días de prueba, calculadora de precio y add-ons que cobran por reserva.",
        meta: {
          title: "Roombir vs Little Hotelier",
          description:
            "Little Hotelier y Roombir comparados: precio, prueba gratis, tarifa por reserva, revenue, channel manager, pagos e IA. Verificado contra littlehotelier.com el 2 de septiembre de 2026; comisiones revisadas el 22 de septiembre.",
        },
        hero: {
          title: "Roombir vs *Little Hotelier*",
          lead:
            "Little Hotelier es el sistema chico de SiteMinder, el mayor distribuidor hotelero del mundo, y el más parecido a Roombir en tamaño de cliente: propiedades de 1 a 30 habitaciones. Publica una calculadora de precio, da 30 días de prueba y tiene channel manager y pagos. Su motor directo no declara comisión: las tarifas variables por reserva están en sus add-ons de metasearch y de canales, y el revenue y el sitio web también se suman como add-ons.",
        },
        them: [
          "Necesitas channel manager y pagos hoy: los dos están y funcionan a escala global.",
          "Quieres el respaldo de la red de distribución de SiteMinder: 450+ canales, GDS, metasearch.",
          "Operas en inglés, alemán, italiano, tailandés o indonesio: es donde localiza.",
        ],
        us: [
          "Quieres el precio completo en una línea, sin add-ons que cobran por reserva.",
          "Quieres el revenue y el sitio web dentro del plan, no como add-ons.",
          "Vendes cabañas con nombre propio junto a habitaciones, o cobras en pesos y necesitas congelar el tipo de cambio.",
        ],
        rows: {
          price: { v: "Sí: calculadora por cantidad de habitaciones (el número se carga por JavaScript)", tone: "ok" },
          trial: { v: "Sí: 30 días gratis", tone: "ok" },
          lockin: { v: "No lo declara en la página de precios", tone: "mid" },
          commission: { v: "El motor directo no declara comisión; Metasearch y Channels Plus cobran una tarifa variable por reserva, y sus pagos, por transacción", tone: "mid" },
          rms: { v: "Add-on: Dynamic Revenue Plus", tone: "mid" },
          channel: { v: "Sí", tone: "ok" },
          payments: { v: "Sí, Little Hotelier Payments, con tarifas por transacción", tone: "ok" },
          ai: { v: "No declara un asistente que opere el sistema", tone: "no" },
          fx: { v: "No lo declara", tone: "mid" },
          dual: { v: "Hoteles, B&B, cabañas y más como tipos; sin modo mixto declarado", tone: "mid" },
          website: { v: "Add-on: Website Builder", tone: "mid" },
          fiscal: { v: "No lo declara", tone: "mid" },
          languages: { v: "Web en 6: inglés, alemán, español, italiano, tailandés, indonesio", tone: "info" },
          segment: { v: "Propiedades de 1 a 30 habitaciones, global", tone: "info" },
          support: { v: "Soporte 24/7 por chat, email y teléfono; especialista de onboarding", tone: "info" },
          llms: { v: "Sí, generado automáticamente: un listado de páginas", tone: "mid" },
        },
        faq: [
          {
            q: "¿Little Hotelier cobra comisión?",
            a: "Sobre su motor directo, su página de precios no declara comisión. Las **tarifas de reserva variables** —calculadas sobre el total de reservas netas de cancelaciones— aplican a sus add-ons de metasearch y de canales, y sus pagos cobran por transacción (littlehotelier.com/pricing, 22 de septiembre de 2026). Roombir no cobra porcentaje sobre ninguna reserva.",
          },
          {
            q: "¿Cuál es más barato?",
            a: "Depende de qué necesites. Little Hotelier calcula el precio por cantidad de habitaciones y suma el revenue y el sitio web como add-ons; Roombir los trae en el catálogo, con una cuota fija por alojamiento. Su calculadora y [nuestros planes](/precios) están publicados: haz la cuenta con tus números.",
          },
          {
            q: "¿Little Hotelier tiene channel manager y Roombir no?",
            a: "Correcto, y es la diferencia más importante si hoy vendes en Booking o Expedia. Está en nuestro [estado del producto](/nosotros#estado) y no vamos a decirte lo contrario.",
          },
        ],
      },
      amenitiz: {
        name: "Amenitiz",
        site: "amenitiz.com",
        oneLiner: "All-in-one europeo para independientes de 3–30 habitaciones, con web incluida. Contrato anual y precio bajo cotización.",
        meta: {
          title: "Roombir vs Amenitiz",
          description:
            "Amenitiz y Roombir comparados: precio, permanencia, comisión, revenue, channel manager, pagos, facturación fiscal e IA. Verificado contra amenitiz.com el 2 de septiembre de 2026.",
        },
        hero: {
          title: "Roombir vs *Amenitiz*",
          lead:
            "Amenitiz es el sistema más parecido a Roombir en idea: todo en un solo lugar, con sitio web incluido, para alojamientos independientes de 3 a 30 habitaciones. Es europeo —España, Francia, Italia, Portugal— y trae dos cosas que nosotros no: channel manager y pagos, más certificaciones fiscales de esos cuatro países. Pide contrato de un año y el precio se confirma en una llamada.",
        },
        them: [
          "Estás en España, Francia, Italia o Portugal y necesitas facturación fiscal certificada: VeriFactu, NF525, FatturaPA, SEF.",
          "Necesitas channel manager y cobro con tarjeta desde el primer día.",
          "Prefieres que un equipo te construya el sitio web en vez de armarlo tú.",
        ],
        us: [
          "No quieres firmar un año antes de saber si te sirve.",
          "Quieres el precio en la web y no “confirmado en la demo”.",
          "Estás en LATAM, vendes en pesos o reales, y necesitas multimoneda con tipo de cambio congelado y un asistente que ejecute.",
        ],
        rows: {
          price: { v: "No en la página de precios (“precio a consultar”); su llms.txt menciona desde €5 por habitación al mes", tone: "mid" },
          trial: { v: "No: la entrada es “Book a demo”", tone: "no" },
          lockin: { v: "Contrato de 1 año (según su propio llms.txt)", tone: "no" },
          commission: { v: "0% en reservas directas (declarado)", tone: "ok" },
          rms: { v: "Add-on: PriceAdvisor", tone: "mid" },
          channel: { v: "Sí, 150+ OTAs", tone: "ok" },
          payments: { v: "Sí, AmenitizPay: 1,5% + €0,25 por transacción (según su web)", tone: "ok" },
          ai: { v: "PriceAdvisor para precios; sin asistente que opere el sistema declarado", tone: "mid" },
          fx: { v: "No lo declara", tone: "mid" },
          dual: { v: "Hoteles y B&B; sin modo mixto declarado", tone: "mid" },
          website: { v: "Sí, incluido y construido por su equipo", tone: "ok" },
          fiscal: { v: "Sí: NF525 (Francia), VeriFactu (España), FatturaPA (Italia), SEF (Portugal)", tone: "ok" },
          languages: { v: "Web en 5: inglés, francés, español, italiano, portugués", tone: "info" },
          segment: { v: "Independientes de 3 a 30 habitaciones en España, Francia, Italia y Portugal", tone: "info" },
          support: { v: "Soporte nativo en 5 idiomas, migración gratis, “operativo en 30 días o el primer mes es gratis”", tone: "info" },
          llms: { v: "Sí, curado: con precio y comparativas contra competidores", tone: "ok" },
        },
        faq: [
          {
            q: "¿Amenitiz tiene permanencia?",
            a: "Según su propio archivo llms.txt, el contrato es de **un año** y el precio final se confirma en la demo. Roombir es mensual y sin permanencia, y el precio está en la web.",
          },
          {
            q: "¿Amenitiz sirve en Argentina o en México?",
            a: "Su web y su llms.txt describen un producto para España, Francia, Italia y Portugal, con certificaciones fiscales de esos países. No encontramos precios, monedas ni cumplimiento para LATAM. Roombir nació aquí: pesos, reales, cotización blue, MEP o CCL, y horarios de este lado.",
          },
          {
            q: "¿Qué hace mejor Amenitiz?",
            a: "Tres cosas que no vamos a minimizar: channel manager con 150+ OTAs, pagos integrados y facturación fiscal certificada en sus cuatro países. Y una promesa de implementación —“en 30 días o el primer mes es gratis”— que nos parece un buen estándar.",
          },
        ],
      },
      mews: {
        name: "Mews",
        site: "mews.com",
        oneLiner: "El PMS mid-market y enterprise mejor valuado del mundo. API abierta sólo en Enterprise, precio bajo cotización.",
        meta: {
          title: "Roombir vs Mews",
          description:
            "Mews y Roombir comparados: precio, prueba, permanencia, revenue, API abierta, pagos e IA. Verificado contra mews.com el 2 de septiembre de 2026.",
        },
        hero: {
          title: "Roombir vs *Mews*",
          lead:
            "Mews es el PMS moderno de referencia para hoteles urbanos, cadenas y hostels, con pagos embebidos, POS y un marketplace de 1.000 integraciones. Es otro tamaño de cliente y otro precio. La comparación importa por una razón: su página de precios pone el API abierta y el marketplace completo en el plan Enterprise, mientras que el plan de entrada trae ocho integraciones y soporte por chatbot.",
        },
        them: [
          "Eres una cadena, un hotel urbano grande o un grupo con equipo de finanzas y de sistemas.",
          "Necesitas POS, pagos embebidos y contabilidad integrados a escala.",
          "Vas a usar el marketplace de 1.000 integraciones y puedes pagar el plan que lo habilita.",
        ],
        us: [
          "Tienes entre 1 y 50 unidades y no hay nadie de sistemas.",
          "Quieres saber el precio antes de la demo y no firmar permanencia.",
          "Quieres que la capa abierta —llms.txt, disponibilidad legible— venga con el motor de reservas y no sólo en el plan más caro.",
        ],
        rows: {
          price: { v: "No: tres planes con “Get Pricing”", tone: "no" },
          trial: { v: "No: la entrada es “Book a demo”", tone: "no" },
          lockin: { v: "No lo declara en su página de precios", tone: "mid" },
          commission: { v: "No declara comisión sobre el motor", tone: "ok" },
          rms: { v: "Producto aparte (Mews RMS); no figura en los tres planes publicados", tone: "mid" },
          channel: { v: "Vía Marketplace: 8 integraciones en Essentials (con Booking.com y Expedia); ilimitado sólo en Enterprise", tone: "mid" },
          payments: { v: "Sí, pagos embebidos desde Essentials", tone: "ok" },
          ai: { v: "Resúmenes de IA de preferencias del huésped (Advanced); sin asistente que opere declarado", tone: "mid" },
          fx: { v: "Multicurrency como funcionalidad; sin congelamiento declarado", tone: "mid" },
          dual: { v: "Hoteles, hostels, extended stay; sin modo mixto declarado", tone: "mid" },
          website: { v: "No: motor de reservas sí, sitio web no", tone: "no" },
          fiscal: { v: "No lo declara", tone: "mid" },
          languages: { v: "Web en 7: inglés (US y GB), francés, alemán, español, neerlandés, italiano", tone: "info" },
          segment: { v: "Hoteles, grupos y cadenas, hostels; 15.000 propiedades en 85 países", tone: "info" },
          support: { v: "Chatbot 24/7 en Essentials; Mews University; comunidad pública", tone: "info" },
          llms: { v: "Sin llms.txt (404 al verificar)", tone: "no" },
        },
        faq: [
          {
            q: "¿Por qué comparar Roombir con Mews si son tamaños distintos?",
            a: "Porque cuando un hotelero busca “el mejor PMS”, Mews aparece primero, y conviene saber qué se lleva: un sistema excelente para hoteles con equipo, cuyo plan de entrada trae ocho integraciones y cuya API abierta vive en Enterprise. Si tu hotel tiene doce habitaciones, ese no es tu tramo.",
          },
          {
            q: "¿Mews es más completo que roombir?",
            a: "Sí, en pagos, POS, contabilidad e integraciones. Roombir no tiene pagos ni channel manager. Lo que sí tenemos es lo que Mews reserva para el plan más caro, y aquí viene con el motor de reservas: la capa abierta —llms.txt, disponibilidad legible—. Y un asistente que ejecuta, según el plan.",
          },
          {
            q: "¿Cuánto cuesta Mews?",
            a: "No lo publica: Essentials, Advanced y Enterprise, los tres con “Get Pricing”. Las cifras que circulan son estimaciones de terceros y no las repetimos.",
          },
        ],
      },
    },
  },

  /* El video de portada (`/video`): son las cinco frases del guion, las líneas
     del chat y las etiquetas de las pantallas que aparecen. Las pantallas en sí
     salen de `vignettes` y de la UI del PMS reciclada en `components/video`. */
  video: {
    meta: {
      title: "Video",
      description: "Roombir en un minuto: cinco proveedores que se vuelven uno solo, y un hotel entero que se pide en una conversación.",
    },
    hookLead: "Tu hotel",
    hook: [
      "El caos operativo",
      "te está matando.",
    ],
    sprawlIn: [
      "Reservas",
      "Pedidos de huéspedes",
      "Proveedores",
      "Roturas / arreglos",
    ],
    sprawlAsk: [
      "¿Es *urgente*?",
      "¿*CÓMO* lo resolvemos?",
      "¿*QUIÉN* se hace cargo?",
      "¿Tenemos toda la *info del huésped*?",
    ],
    sprawlChain: [
      "Confirmar algo tarda *HORAS*",
      "Las decisiones se *PIERDEN*",
      "*TÚ NO VAS A VER* todo a tiempo para destrabarlo",
      "El *OVERBOOKING* pasa y genera quejas",
      "*8 HORAS* perdidas y ni sabes si sirvió de algo",
    ],
    sprawlFoot: [
      "El contexto se *PIERDE*",
      "Las reseñas y quejas quedan *DISPERSAS*",
    ],
    sprawlApps: "*PAGANDO VARIAS APPS* que ni usas al 100%",
    tooManyApps: "Demasiadas apps…",
    tooManyVendors: "Demasiados proveedores…",
    vendors: [
      "PMS",
      "Channel manager",
      "Motor de reservas",
      "RMS",
      "Sitio web",
    ],
    contextLost: "El contexto se pierde.",
    noStaff: [
      "No tienes un revenue manager.",
      "No tienes un community manager.",
    ],
    youAre: "Te tienes a *ti*.",
    mazeChips: [
      "¿Quién confirmó la 203?",
      "¿Cuánto cobramos el sábado?",
      "¿Llegó el anticipo?",
      "¿Quién tiene el Excel?",
      "¿Está limpia la 104?",
      "¿Qué dijo el huésped?",
    ],
    kills: {
      pre: [
        "Herramientas sueltas matan",
        "Información dispersa mata",
      ],
      words: [
        "*el tiempo*.",
        "*el revenue*.",
      ],
    },
    punchline: {
      pre: "Basta de ",
      struck: "planillas sueltas",
      post: ".",
    },
    meet: "Conoce",
    promise: [
      "Tu alojamiento",
      "*entero*",
      "en un solo *sistema*.",
    ],
    builtTo: {
      lead: "Hecho para",
      pre: "eliminar ",
      struck: "caos operativo",
      post: ".",
    },
    modules: {
      reservas: "Reservas",
      linkhub: "LinkHub",
      revenue: "Revenue",
      tourism: "Estado turístico",
      ia: "Roombir IA",
      staypass: "StayPass",
      rooms: "Habitaciones",
      reports: "Informes",
    },
    moreModules: [
      "Tarifas",
      "Housekeeping",
      "Sitios",
      "Huéspedes",
      "Agentes",
      "Espacios",
      "Competencia",
    ],
    brand: "Un solo *sistema*.",
    shotHead: [
      "Reservas, tarifas y huéspedes",
      "en una sola pantalla.",
    ],
    designed: [
      "Diseñado con",
      "*precisión milimétrica*.",
    ],
    hinge: {
      line: "¿Por qué no solo pedirlo?",
    },
    unlock: {
      lead: "Una conversación desbloquea",
      head: "Más",
      words: [
        "ocupación",
        "visibilidad",
        "tarifa",
        "contexto",
        "rendimiento",
      ],
      experience: "eficiencia",
    },
    era: {
      lead: "Una nueva era de",
      words: [
        "reservas",
        "revenue",
        "estrategia",
        "IA",
      ],
    },
    outro: "Roombir. Tu hotel, en una *conversación*.",
    end: {
      tagline: "Diseñado para tu alojamiento",
      cta: "Empieza hoy en roombir.com",
    },
    booking: {
      tag: "hoy",
      guest: "Martina García",
      detail: "19 → 22 mar · 3 noches · Doble Superior",
      amount: "$ 288.000",
    },
    linkhub: {
      tag: "reservar",
      tap: "Reservar online",
      title: "Reservar",
      checkin: "Llegada",
      checkout: "Salida",
      inDate: "sáb 21 mar",
      outDate: "lun 23 mar",
      guests: "2 huéspedes",
      search: "Buscar",
      nights: "2 noches",
      room: "Doble Superior",
      price: "$ 96.600 / noche",
      book: "Reservar",
    },
    iaCard: {
      ask: "Pasa a García a la 203 y avísale por mail",
      steps: [
        {
          label: "Reserva movida",
          tool: "mover reserva",
        },
        {
          label: "Mail enviado",
          tool: "enviar mail",
        },
      ],
      answer: "Listo. García queda en la 203 y ya tiene el aviso.",
      hello: "¿En qué te ayudo?",
      hint: "Operaciones, disponibilidad, tarifas y políticas.",
      placeholder: "Pídele algo…",
      chips: ["Disponibilidad", "Tarifa del finde", "Pagos pendientes", "Cancelaciones"],
    },
    rooms: {
      tag: "piso 2",
      floor: "Piso 2",
      superior: "Doble Superior",
      double: "Doble",
      short: {
        available: "Libre",
        occupied: "In",
        cleaning: "Limp.",
        maintenance: "Mant.",
        blocked: "Bloq.",
        checkoutPending: "C/O",
      },
      legend: {
        available: "Disponible",
        occupied: "Ocupada",
        cleaning: "Limpieza",
      },
    },
    stay: {
      tag: "en estadía",
      greeting: "Hola, Martina",
      sub: "Tu estadía en Hotel del Parque",
      badge: "Alojada",
      codeLabel: "Código para trámites",
      copy: "Copiar",
      stayLabel: "Alojamiento y estadía",
      hotel: "Hotel del Parque · 103 Doble Superior",
      dates: "19 → 22 de marzo · 3 noches",
    },
    status: {
      pending: "Pendiente",
      confirmed: "Confirmada",
      checkedIn: "Alojada",
      checkedOut: "Check-out",
      cancelled: "Cancelada",
      noShow: "No show",
    },
    reports: {
      tag: "marzo",
      closed: "Check-out hecho · ciclo cerrado",
      kpis: [
        {
          label: "Ocupación",
          value: "78%",
          hint: "feb: 71%",
        },
        {
          label: "ADR",
          value: "$ 96.600",
          hint: "por noche",
        },
        {
          label: "RevPAR",
          value: "$ 75.300",
          hint: "",
        },
        {
          label: "Ingresos",
          value: "$ 4,1 M",
          hint: "127 noches",
        },
      ],
    },
    tourism: {
      title: "Estado turístico · Mendoza",
      updated: "actualizado hace 12 min",
      metrics: [
        {
          label: "Eventos en 30 días",
          value: "6",
          hint: "Fiesta de la Vendimia · 20 → 22 mar · a 3 km",
          trend: "up",
        },
        {
          label: "Próximo puente",
          value: "21 → 23 mar",
          hint: "3 días · feriado del lunes",
          trend: "neutral",
        },
        {
          label: "Clima del finde",
          value: "26°",
          hint: "despejado · temporada alta",
          trend: "up",
        },
        {
          label: "Atención al destino",
          value: "+18%",
          hint: "búsquedas · 30 días vs. anteriores",
          trend: "up",
        },
      ],
      alert: "Fin de semana largo del 21 al 23: la ciudad se llena.",
      more: "Ver más",
    },
    chat: {
      placeholder: "Pídele algo a Roombir IA",
      thinking: "Roombir IA está pensando",
      wait: "Consultando el sistema",
      turns: [
        {
          ask: "Cárgame una reserva para hoy, 2 noches, doble superior",
          steps: [
            {
              label: "Disponibilidad",
              tool: "buscar disponibilidad",
            },
            {
              label: "Reserva creada",
              tool: "crear reserva",
            },
          ],
          answer: "Listo. Queda la #BK-4821: hoy, 2 noches, Doble Superior.",
          hold: 700,
        },
        {
          ask: "¿Cómo viene el finde? ¿Pasa algo en la ciudad?",
          steps: [
            {
              label: "Estado turístico",
              tool: "estado turístico",
            },
            {
              label: "Revenue del finde",
              tool: "resumen de revenue",
            },
          ],
          answer: "Sábado fuerte: Vendimia a 3 km y finde largo. Sugiero +10% el sábado y mínimo 2 noches.",
          hold: 1800,
        },
        {
          ask: "Adelante, aplícalo.",
          steps: [
            {
              label: "+10% el sábado",
              tool: "aplicar tarifa",
            },
          ],
          answer: "Hecho. El sábado pasa de $96.600 a $106.260 en el motor.",
          hold: 900,
        },
      ],
      bookingBlock: {
        guest: "Martina García",
        detail: "hoy → +2 · 2 noches · Doble Superior",
        amount: "$ 193.200",
      },
      ruleBlock: {
        title: "Tarifa aplicada",
        meta: "sáb 21",
        kpis: [
          {
            label: "Antes",
            value: "$ 96.600",
            hint: "por noche",
          },
          {
            label: "Ahora",
            value: "$ 106.260",
            hint: "por noche",
          },
          {
            label: "Cambio",
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
      sheet: "planilla",
      notes: "notas",
      mail: "mail",
      agenda: "agenda",
    },
    actions: {
      create: "Nueva reserva · 3 noches",
    },
    url: "roombir.com",
    ui: {
      shell: {
        company: "Hotel del Parque S.A.",
        property: "Hotel del Parque",
        space: "Recepción",
        initials: "MG",
      },
      bookingTabs: [
        "Panel del día",
        "Reservas",
        "Calendario",
        "Nueva reserva",
        "Tarifas",
        "Disponibilidad",
        "Promociones",
        "Configuración",
      ],
      roomsTabs: [
        "Estado de habitaciones",
        "Plano de ocupación",
        "Categorías",
      ],
      rmsTabs: [
        "Analítica",
        "Pace",
        "Escenarios",
        "Eventos",
        "Competencia",
        "Decisiones",
        "Recomendaciones",
        "Configuración",
      ],
      calendar: {
        hab: "Hab.",
        occupancy: "Ocupación",
        today: "Hoy",
        month: "Marzo de 2026",
        ranges: [
          "1w",
          "2w",
          "1m",
        ],
        search: "Buscar huésped o código",
        categories: "Todas las categorías",
        states: "Todos los estados",
        refresh: "Actualizar",
        create: "+ Nuevo",
        legend: {
          pending: "Pendiente",
          confirmed: "Confirmada",
          "checked-in": "Alojada",
          "checked-out": "Check-out",
          cancelled: "Cancelada",
          "no-show": "No show",
        },
        hint: "Arrastra una barra para mover",
        dows: [
          "lun",
          "mar",
          "mié",
          "jue",
          "vie",
          "sáb",
          "dom",
        ],
        monthTick: "mar",
        cats: [
          {
            name: "Doble",
            rate: "$ 96.600",
          },
          {
            name: "Doble Superior",
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
        floors: "Todos los pisos",
        order: "Orden",
        orderOpts: [
          "N°",
          "Piso",
          "Cat.",
        ],
        countWord: "habitaciones",
        search: "Buscar habitación...",
        categories: "Todas las categorías",
        refresh: "Refrescar",
        columns: {
          available: "Disponible",
          occupied: "Ocupada",
          cleaning: "Limpieza",
          maintenance: "Mantenimiento",
          blocked: "Bloqueada",
          "checkout-pending": "Checkout pend.",
        },
        empty: "Sin habitaciones",
        hint: "Arrastra una tarjeta a otra columna para cambiar el estado",
      },
      revenue: {
        title: "Recomendaciones de tarifa",
        sub: "Aceptar aplica la tarifa al motor de reservas como override.",
        tabs: [
          "Pendientes",
          "Historial",
        ],
        status: {
          suggested: "Pendiente",
          accepted: "Aceptada",
          applied: "Aplicada",
          rejected: "Rechazada",
        },
        accept: "Aceptar",
        reject: "Rechazar",
        blockTitle: "Recomendaciones de tarifa",
        blockMeta: "1 pendiente",
        footnote: "Aceptar aplica la tarifa al motor de reservas como override.",
        recs: [
          {
            date: "sáb 21 mar",
            from: "$ 96.600",
            to: "$ 106.260",
            delta: "+10%",
            reason: "Ocupación 78% + Fiesta de la Vendimia a 3 km · fin de semana largo",
            status: "suggested",
          },
          {
            date: "dom 22 mar",
            from: "$ 96.600",
            to: "$ 101.400",
            delta: "+5%",
            reason: "Pace +18% vs. tu histórico · mediana del comp-set $ 101.400",
            status: "suggested",
          },
          {
            date: "mar 24 mar",
            from: "$ 96.600",
            to: "$ 91.800",
            delta: "-5%",
            reason: "Pickup 7d bajo · martes sin eventos en el radio",
            status: "suggested",
          },
        ],
      },
      dashboard: {
        checkin: "Check-in",
        checkout: "Check-out",
        active: "Reservas activas",
        activeSub: "Confirmadas + alojadas",
        occupancy: "Ocupación hoy",
        occupancySub: "Entrando esta semana: 6",
        demand: "Curva de demanda",
        demandSub: "Pico: 9 · Promedio: 5,4",
        recent: "Reservas recientes",
        recentSub: "Listado de reservas recientes de huéspedes",
        newBooking: "Nueva reserva",
        cols: [
          "ID de reserva",
          "Nombre del huésped",
          "Check-in",
          "Check-out",
          "Total",
          "Estado",
        ],
        status: {
          confirmed: "Confirmada",
          "checked-in": "Alojada",
          pending: "Pendiente",
        },
        more: "Ver más",
        bookings: "Reservas",
        bookingsSub: "Últimos 3 meses",
        months: [
          "Enero",
          "Febrero",
          "Marzo",
        ],
        topCats: "Top categorías",
        topCatsSub: "Mayor ocupación hoy",
        topCatNames: ["Doble Superior", "Doble", "Suite"],
        quick: "Accesos rápidos",
        quickSub: "Apps activas en Recepción",
        quickItems: [
          "Panel del día",
          "Reservas",
          "Nueva reserva",
          "Tarifas",
        ],
        rows: [
          {
            code: "#RES-2026-KGMJ",
            cat: "Doble Superior",
            guest: "Martina García",
            mail: "martina.garcia@gmail.com",
            inDate: "21 mar 2026",
            outDate: "23 mar 2026",
            nights: "2 noches",
            total: "$ 212.520",
            status: "confirmed",
          },
          {
            code: "#RES-2026-NGA6",
            cat: "Doble",
            guest: "Carlos Tévez",
            mail: "ctevez@hotmail.com",
            inDate: "19 mar 2026",
            outDate: "22 mar 2026",
            nights: "3 noches",
            total: "$ 289.800",
            status: "checked-in",
          },
          {
            code: "#RES-2026-3CYL",
            cat: "Suite Norte",
            guest: "Ana Bianchi",
            mail: "ana.bianchi@yahoo.com",
            inDate: "20 mar 2026",
            outDate: "24 mar 2026",
            nights: "4 noches",
            total: "$ 592.000",
            status: "confirmed",
          },
          {
            code: "#RES-2026-B0SO",
            cat: "Doble",
            guest: "Lucas Pérez",
            mail: "lperez@outlook.com",
            inDate: "22 mar 2026",
            outDate: "25 mar 2026",
            nights: "3 noches",
            total: "$ 289.800",
            status: "pending",
          },
          {
            code: "#RES-2026-WJU9",
            cat: "Doble Superior",
            guest: "Sofía Ruiz",
            mail: "sofia.ruiz@gmail.com",
            inDate: "23 mar 2026",
            outDate: "26 mar 2026",
            nights: "3 noches",
            total: "$ 318.780",
            status: "confirmed",
          },
        ],
      },
      linkhub: {
        name: "Hotel del Parque",
        bio: "Mendoza · a 3 km de la Fiesta de la Vendimia",
        bookTitle: "Reservar",
        checkin: "Check-in",
        checkout: "Check-out",
        guests: "Huéspedes",
        guestsValue: "2 adultos",
        search: "Buscar",
        blocks: [
          "Sitio web",
          "WhatsApp",
          "Cómo llegar",
          "Contacto",
        ],
        footer: "Creado con roombir",
        inShort: "21 mar",
        outShort: "23 mar",
        travelers: "2 viajeros",
        monthTitle: "Marzo de 2026",
        dows: [
          "DO",
          "LU",
          "MA",
          "MI",
          "JU",
          "VI",
          "SA",
        ],
        cancel: "Cancelar",
        next: "Siguiente",
        resultsTitle: "Elige tu habitación",
        summary: "21 mar → 23 mar · 2 adultos · 2 noches",
        rooms: [
          {
            name: "Doble Superior",
            price: "$ 106.260",
          },
          {
            name: "Doble",
            price: "$ 96.600",
          },
          {
            name: "Suite Norte",
            price: "$ 148.000",
          },
        ],
        perNight: "/ noche",
        book: "Reservar",
      },
      stay: {
        brand: "StayPass",
        tabs: [
          "Inicio",
          "Perfil",
        ],
        user: "Martina",
        section: "Reservas",
        filters: [
          "Todas",
          "Activas",
          "Pasadas",
        ],
      },
      reports: {
        title: "Informes",
        updated: "Actualizado 21/3/2026, 09:12",
        refresh: "Actualizar",
        ranges: [
          "Última semana",
          "Último mes",
          "3 meses",
          "6 meses",
        ],
        rangeNote: "20/2 → 21/3 · agrupado por semana",
        section: "Ocupación y volumen",
        sectionSub: "Cómo está corriendo la propiedad ahora y qué viene en camino.",
        kpis: [
          {
            label: "Reservas activas hoy",
            value: "14",
            hint: "confirmadas + alojadas cubriendo hoy",
          },
          {
            label: "Entrantes esta semana",
            value: "9",
            hint: "check-in en los próximos 7 días",
          },
          {
            label: "Ocupación",
            value: "78%",
            hint: "feb: 71%",
            badge: "+7%",
          },
          {
            label: "RevPAR",
            value: "$ 75.300",
            hint: "24 unidades · 30 días",
          },
        ],
        chart: "Curva de demanda — próximos 30 días",
        chartSub: "Reservas confirmadas/alojadas cubriendo cada noche.",
      },
    },
    hud: {
      play: "Reproducir",
      pause: "Pausar",
      restart: "Reiniciar",
      language: "Idioma",
      scene: "Escena",
      fullscreen: "Pantalla completa",
      exitFullscreen: "Salir de pantalla completa",
      replay: "Volver a ver",
    },
  },

  videoIa: {
    meta: {
      title: "Video · Roombir IA",
      description: "Roombir IA en poco más de un minuto: pedidos de un día normal que quedan hechos, el expediente de tu destino, un plan cuando el pedido es un objetivo y tus permisos siempre por delante.",
    },
    tabsLine: "Lo que hoy te lleva *cuatro pestañas*…",
    placeholder: "Pídele algo a Roombir IA",
    name: "Roombir IA",
    demo: {
      thinking: "Roombir IA está pensando",
      wait: "Consultando el sistema",
      captions: ["Adjunta un archivo", "Pídele un informe", "Díctale por voz", "Mira el detalle de tu destino"],
      attach: {
        label: "Adjuntar archivo",
        media: "Multimedia",
        docs: "Documentos",
        image: "Imagen",
        video: "Video",
        audio: "Audio",
        pdf: "PDF",
        csv: "CSV",
        file: "tarifas-abril.pdf",
        ask: "Carga estas tarifas en abril",
        steps: [
          { label: "PDF leído · 2 páginas", tool: "leer adjunto" },
          { label: "30 tarifas cargadas", tool: "cargar tarifas" },
        ],
        answer: "Listo: cargué las 30 tarifas de abril en el plan Doble Superior.",
      },
      report: {
        ask: "¿Qué canal me cancela más?",
        steps: [{ label: "Informe de canales", tool: "informe de canales" }],
        answer: "Booking.com: 18 % de cancelaciones en 90 días. El directo, 4 %.",
        title: "Cancelaciones por canal · 90 días",
        meta: "377 reservas",
        kpis: [
          { label: "Booking.com", value: "18%", hint: "41 de 228" },
          { label: "Airbnb", value: "9%", hint: "7 de 78" },
          { label: "Directo", value: "4%", hint: "3 de 71" },
        ],
      },
      voice: {
        listening: "Escuchando…",
        heard: "Bloquea la cabaña Alerce el martes por la tarde por mantenimiento",
        steps: [{ label: "Bloqueo creado", tool: "crear bloqueo" }],
        answer: "Hecho: la cabaña Alerce queda bloqueada desde la tarde del martes. La mañana sigue a la venta.",
      },
      tourism: {
        ask: "¿Qué pasa en la ciudad este mes?",
        steps: [{ label: "Estado turístico", tool: "estado turístico" }],
        answer: "Mes movido: la Vendimia a 3 km y un fin de semana largo.",
        panel: {
          title: "Mi estatus turístico",
          live: "Dato en vivo",
          delayed: "Con demora",
          sections: [
            {
              title: "Eventos cerca",
              live: true,
              metrics: [
                { value: "6", label: "Eventos en 30 días" },
                { value: "20 → 22 mar", label: "Gran evento próximo" },
              ],
              narrative: "",
              items: [
                { title: "Fiesta Nacional de la Vendimia", detail: "20 → 22 mar · a 3 km" },
                { title: "Maratón Internacional de Mendoza", detail: "29 mar · a 1,5 km" },
                { title: "Congreso de enología", detail: "9 → 11 abr · a 4 km" },
              ],
              spark: false,
            },
            {
              title: "Temporada y calendario",
              live: false,
              metrics: [
                { value: "21 → 23 mar", label: "Próximo fin de semana largo" },
                { value: "13 → 24 jul", label: "Próximo receso escolar" },
              ],
              narrative: "Semana Santa cae del 2 al 5 de abril: fin de semana largo en Argentina y en Chile, tus dos mercados principales.",
              items: [],
              spark: false,
            },
            {
              title: "Interés y mercados",
              live: true,
              metrics: [
                { value: "+18%", label: "Interés online" },
                { value: "3", label: "Mercados emisores de vacaciones (60 d)" },
              ],
              narrative: "",
              items: [],
              spark: true,
            },
          ],
          spark: "Vistas diarias en Wikipedia (30 días)",
          readOnly: "Sólo lectura: para actuar sobre esto, pídeselo a Roombir IA en el chat.",
          footer: "Actualizado hace 12 min · Fuentes: Nager.Date · Open-Meteo · Wikipedia · OpenStreetMap",
        },
      },
    },
    dossier: {
      count: "15 fuentes, cada dato con su fecha",
      topics: [
        "Feriados",
        "Fines de semana largos",
        "Vacaciones escolares",
        "Deportes",
        "Cultura",
        "Congresos y ferias",
        "Vuelos",
        "Clima",
        "Tipo de cambio",
        "Seguridad",
        "Amenazas naturales",
        "Visados",
        "Oferta hotelera",
        "Atención al destino",
        "Entorno",
      ],
      dates: ["22 sep", "21 sep", "22 sep", "20 sep", "22 sep"],
      placeMeta: "Mendoza · Argentina",
    },
    versus: {
      pre: "Un chat genérico",
      struck: "busca",
      post: ".",
      us: "Roombir IA parte de *un expediente*.",
    },
    goal: {
      ask: "Quiero más reservas",
      reads: "18 fuentes de tu operación",
      time: "1,1 s",
      sources: [
        "Inventario",
        "Pace",
        "Panel del día",
        "Motor",
        "Planes de tarifa",
        "Promociones",
        "Restricciones",
        "Sitio web",
        "LinkHub",
        "Visibilidad",
        "Perfil de Google",
        "OTAs",
        "Redes",
        "Reseñas",
        "Reglas de precio",
        "Recomendaciones",
        "Competencia",
        "Mercado",
      ],
      plan: {
        title: "Temporada baja con ritmo lento",
        meta: "Plan · 3 pasos",
        diagnosis: "Octubre se vende más lento que tu histórico para las mismas fechas.",
        steps: [
          "Promo del 10% sólo en el canal directo",
          "Mínimo de 1 noche los martes y miércoles lentos",
          "Regla de tarifa sólo en las fechas atrasadas",
        ],
        confirm: "Confirmar",
        done: "Aplicado",
      },
    },
    perms: {
      spaces: ["Recepción", "Administración"],
      tools: "herramientas",
      modal: {
        title: "Borrar la tarifa «Temporada alta»",
        body: "Esto no se puede deshacer.",
        prompt: "Escribe el nombre para confirmar",
        word: "Temporada alta",
        confirm: "Borrar",
        cancel: "Cancelar",
      },
    },
    talk: {
      lines: ["Le escribes.", "Le hablas.", "Le muestras."],
      typed: "¿Qué canal me cancela más?",
      listening: "Escuchando…",
      heard: "Bloquea la cabaña Alerce el martes por la tarde",
      file: "tarifas-octubre.pdf",
      fileMeta: "PDF · 2 páginas",
      shot: "captura-ota.png",
      withFile: "Carga estas tarifas en octubre",
    },
  },

  videoProps: {
    meta: {
      title: "Video · Propiedades",
      description: "Propiedades en un minuto: varias propiedades bajo una sola cuenta, cada una con su moneda y su equipo, accesos por propiedad y por puesto, y todo lo demás colgando de la ficha.",
    },
    name: "Propiedades",
    owner: { name: "Martina García", role: "Dueña", initials: "MG" },
    company: "Hotel del Parque S.A.",
    hotel: {
      name: "Hotel del Parque",
      city: "Mendoza, Argentina",
      type: "Hotel",
      inventory: "3",
      inventoryWord: "categorías",
      spaces: "4",
      currency: "ARS",
      language: "Español",
    },
    cabins: {
      name: "Cabañas del Lago",
      city: "Villa La Angostura, Argentina",
      cityOnly: "Villa La Angostura",
      type: "Cabaña",
      inventory: "6",
      inventoryWord: "unidades",
      spaces: "4",
      currency: "USD",
      language: "English",
    },
    spacesWord: "espacios",
    counts: { one: "1 propiedad", two: "2 propiedades", users2: "2 usuarios", users3: "3 usuarios" },
    status: "active",
    chips: { currency: "Moneda", timezone: "Zona horaria", language: "Idioma", tz: "UTC−3" },
    // El recorrido: la organización (tipos, estructura, reservas), no el alta.
    captions: ["Cada propiedad, con su tipo", "Sus reservas, en su moneda", "Cambias de propiedad desde arriba", "Encuentras todo desde un solo lugar"],
    cabinUnits: ["Cabaña Alerce", "Cabaña Coihue", "Cabaña Arrayán", "Cabaña Maitén", "Cabaña Lenga", "Cabaña Ñire"],
    suiteRate: "$ 142.000",
    cabinRate: "US$ 180",
    templateName: "Hotel del Parque · espacios y apps",
    templateNone: "Sin template",
    coords: { pair: "-40.7625, -71.6463", lat: "-40.7625", lng: "-71.6463" },
    invite: {
      name: "Lucía Ferreyra",
      email: "lucia@cabanasdellago.com",
      role: "Staff",
      spaces: [
        { name: "Recepción", apps: "9" },
        { name: "Limpieza", apps: "4" },
        { name: "Administración", apps: "" },
      ],
      users: "Usuarios",
      addedRow: "Cabañas del Lago · Recepción",
      allProps: "Todas las propiedades",
    },
    search: {
      query: "Alerce",
      results: [
        { kind: "room", title: "Cabaña Alerce", meta: "Cabañas del Lago · 4 huéspedes" },
        { kind: "booking", title: "#RES-2026-QX4T · Julián Paz", meta: "Cabaña Alerce · 12 → 15 oct" },
        { kind: "property", title: "Cabañas del Lago", meta: "Villa La Angostura" },
      ],
    },
    hotelTotals: ["$ 212.520", "$ 289.800", "$ 592.000", "$ 190.400", "$ 450.000"],
    cabinRows: [
      { code: "#RES-2026-QX4T", cat: "Cabaña Alerce", guest: "Julián Paz", mail: "julian.paz@gmail.com", inDate: "12 oct 2026", outDate: "15 oct 2026", nights: "3 noches", total: "US$ 540", status: "confirmed" },
      { code: "#RES-2026-7HPA", cat: "Cabaña Coihue", guest: "Emma Walker", mail: "emma.w@outlook.com", inDate: "10 oct 2026", outDate: "14 oct 2026", nights: "4 noches", total: "US$ 760", status: "checked-in" },
      { code: "#RES-2026-2KDN", cat: "Cabaña Arrayán", guest: "Lucas Stein", mail: "lstein@gmx.de", inDate: "14 oct 2026", outDate: "18 oct 2026", nights: "4 noches", total: "US$ 720", status: "confirmed" },
      { code: "#RES-2026-M8RE", cat: "Cabaña Maitén", guest: "Sofía Ruiz", mail: "sofiaruiz@yahoo.com", inDate: "11 oct 2026", outDate: "13 oct 2026", nights: "2 noches", total: "US$ 330", status: "pending" },
      { code: "#RES-2026-VT0L", cat: "Cabaña Lenga", guest: "Noah Martin", mail: "noahm@gmail.com", inDate: "16 oct 2026", outDate: "19 oct 2026", nights: "3 noches", total: "US$ 510", status: "confirmed" },
    ],
    access: {
      people: [
        { name: "Lucía Ferreyra", initials: "LF", space: "Recepción", scope: "Cabañas del Lago" },
        { name: "Tomás Ríos", initials: "TR", space: "Limpieza", scope: "Hotel del Parque" },
        { name: "Martina García", initials: "MG", space: "Administración", scope: "Todas" },
      ],
      caps: "10 accesos administrativos, de a uno",
    },
    root: {
      items: ["Habitaciones", "Reservas", "Marca", "Sitio web", "LinkHub", "Reseñas", "Galerías"],
      phoneLabel: "Teléfono",
      phoneOld: "+54 261 555-0100",
      phoneNew: "+54 261 555-0199",
      targets: ["Sitio web", "LinkHub", "Motor de reservas"],
      updated: "Actualizado",
    },
    // Los rótulos de la UI real, copiados de los diccionarios del PMS (pms-core/app/src/i18n/dictionaries).
    ui: {
      newProperty: "Nueva propiedad",
      typeLabel: "Tipo de alojamiento *",
      typeHint: "Define cómo se venden tus alojamientos: por unidad concreta o por categoría.",
      template: "Template (opcional)",
      create: "Crear propiedad",
      nameLabel: "Nombre *",
      city: "Ciudad *",
      country: "País",
      cancel: "Cancelar",
      properties: "Propiedades",
      unitTitle: "Venta por unidades",
      unitHint: "Cada alojamiento se reserva individualmente (1:1).",
      catTitle: "Venta por categorías",
      catHint: "Se vende por tipo de habitación desde un pool de unidades.",
      tCabin: "Cabaña",
      tVilla: "Villa",
      tVacation: "Alojamiento vacacional",
      tGlamping: "Glamping",
      tResort: "Resort",
      tAparthotel: "Aparthotel",
      tHostel: "Hostal",
      editProperty: "Editar propiedad",
      coords: "Coordenadas",
      lat: "Latitud",
      lng: "Longitud",
      coordTip: "Tip: en Google Maps haz clic derecho sobre el punto → copia las coordenadas y pega el par aquí (se reparte solo en Lat / Long).",
      howCopy: "Cómo copiar",
      publicContact: "Contacto público",
      publicEmail: "Email público",
      phone: "Teléfono",
      whatsapp: "WhatsApp",
      social: "Redes sociales",
      address: "Dirección",
      save: "Guardar cambios",
      spacesTitle: "Properties y espacios de trabajo",
      spacesIntro: "Elige a qué properties accede. Abre cada una para asignar los espacios de trabajo donde puede pararse.",
      onlyChosen: "Sólo las que elija",
      allFuture: "Todas, incluidas las futuras",
      assignedSpaces: "espacios asignados",
      seeSpaces: "Ver espacios",
      isDefault: "Predeterminado",
      allApps: "Acceso a todas las apps",
      appsEnabled: "apps habilitadas",
      operate: "Operar",
      capsTitle: "Accesos administrativos",
      capsHint: "Elige qué puede administrar esta persona dentro de la empresa.",
      gUsers: "Usuarios",
      gProps: "Properties y espacios",
      gCompany: "Empresa",
      changeProperty: "Cambiar propiedad",
      searchPlaceholder: "Buscar reservas, huéspedes, habitaciones, apps, usuarios…",
      navigate: "navegar",
      open: "abrir",
      close: "cerrar",
      kBooking: "Reserva",
      kProperty: "Propiedad",
      kRoom: "Habitación",
      currentProperty: "Propiedad actual",
      createUserTitle: "Dar de alta un usuario",
      createUserBtn: "Dar de alta",
      createUserIntro: "Se crea la cuenta con una contraseña temporal. En su primer ingreso el usuario tiene que cambiarla por una propia.",
      fullName: "Nombre y apellido",
      email: "Email del usuario",
      role: "Rol",
      caps: [
        "Gestionar usuarios",
        "Asignar espacios de trabajo",
        "Crear properties",
        "Editar properties",
        "Cambiar de property",
        "Gestionar espacios de trabajo",
        "Activar y desactivar apps",
        "Ajustes de la empresa",
        "Facturación y plan",
        "Sitios web"
      ]
    },
  },

  /* Los videos de Habitaciones, Motor, Informes, Revenue y Marketing
     (`/video/habitaciones`, …): los titulares salen de cada página; aquí va
     sólo lo propio de cada video (rótulos de los pasos y datos de ejemplo). */
  videoTours: {
    rooms: {
      meta: {
        title: "Video · Habitaciones",
        description: "Habitaciones en un minuto: el estado de la casa de un vistazo, categorías en pool y cabañas por nombre en el mismo calendario, estados que no admiten imposibles y una noche que se vende una sola vez.",
      },
      captions: ["El estado de la casa, de un vistazo", "Pool de categoría y cabañas por nombre, en un calendario", "Una noche se vende una sola vez"],
      modes: ["Pool de categoría", "Unidad con nombre propio"],
      cabinCat: "Cabañas",
      cabinRate: "$ 140.000",
      cabins: ["Cabaña Alerce", "Cabaña Coihue"],
      guestNew: "Romero",
      sources: { first: "Tu web", second: "Booking" },
      lock: { title: "Esa noche ya está vendida", sub: "Cabaña Alerce · 21 mar · la base no deja entrar la segunda" },
      states: { forbidden: "Con el huésped dentro, no", allowed: "Primero, salida pendiente" },
      notes: {
        card: {
          t: "Una tarjeta, una habitación",
          d: "El color dice su estado: libre, ocupada, en limpieza…"
        },
        moved: {
          t: "Terminó la limpieza",
          d: "La arrastras a Disponible y vuelve a estar a la venta."
        },
        pool: {
          t: "Categoría en pool",
          d: "El huésped compra “una Doble”; la habitación se asigna después."
        },
        row: {
          t: "Cada fila, una habitación",
          d: "Y cada barra, una reserva: huésped, personas y noches."
        },
        unit: {
          t: "Unidad con nombre propio",
          d: "Se reserva la Cabaña Alerce, con sus fotos y su precio."
        },
        web: {
          t: "Entra una reserva de tu web",
          d: "Toma las noches del 19 al 21."
        },
        second: {
          t: "Booking pide las mismas noches",
          d: "La base de datos no la deja entrar."
        }
      },
      load: {
        card: { name: "Doble Superior", units: "4 unidades", mode: "Pool de categoría", rate: "$ 106.000 / noche", size: "24 m²", guests: "2 adultos", amenities: ["Wi-Fi","Aire acondicionado","Vista a la montaña"] },
        chips: ["Calendario", "Motor de reservas", "Tu web", "LinkHub", "Revenue", "Roombir IA", "Informes"],
      },
    },
    motor: {
      meta: {
        title: "Video · Motor de reservas",
        description: "El motor de reservas en un minuto: el huésped elige sus noches en tu web, la reserva entra al panel del día y al calendario, cada precio dice de dónde sale y el importe no se mueve con el tipo de cambio.",
      },
      captions: ["La reserva entra al panel del día", "Y ocupa su noche en el calendario", "El precio de la noche, con su porqué"],
      source: "Motor · tu web",
      notes: {
        price: {
          t: "El precio de cada día",
          d: "Antes de elegir fechas, con las tarifas que cobra el motor."
        },
        units: {
          t: "Cuántas quedan",
          d: "Tu inventario real: el 21 quedan 3."
        },
        photos: {
          t: "Cada habitación, con sus fotos",
          d: "Y su precio por noche para esas fechas."
        },
        row: {
          t: "La reserva nueva, arriba",
          d: "Confirmada y con su total: nadie la cargó a mano."
        },
        bar: {
          t: "Sus dos noches, ocupadas",
          d: "La 103 deja de venderse el 21 y el 22."
        },
        accept: {
          t: "Aceptas la sugerencia",
          d: "Esa tarifa pasa a mandar sobre las demás."
        }
      },
      chain: {
        title: "De dónde sale el precio",
        steps: ["Revenue aceptado", "Plan de tarifas", "Precio base", "Promociones"],
        winner: "$ 106.260 · sáb 21 mar",
      },
      motorUi: {travelers: "Viajeros",dates: "Fechas",adults: "Adultos",adultsHint: "Mayores de 18",children: "Niños",childrenHint: "3 – 17 años",infants: "Bebés",infantsHint: "0 – 2 años",code: "Código",promoName: "Reserva directa",optional: "Opcional",back: "Volver",done: "Listo",available: "Habitaciones disponibles",range: "21 mar → 23 mar",dayRange: "21 mar - 23 mar",nights: "2 noches",adultsCount: "2 adultos",monthCaption: "marzo de 2026",dows: ["Do","Lu","Ma","Mi","Ju","Vi","Sa"]},
      promos: {
        title: "Promociones que *se ven antes de reservar*.",
        notes: {
          code: { t: "Con código o automáticas", d: "El huésped escribe el código, o la promo se aplica sola en sus fechas." },
          badge: { t: "La promo, a la vista", d: "Etiqueta, precio anterior tachado y el nombre de la promo en cada habitación." },
        },
      },
      currencyTitle: "El precio que vio el huésped *queda congelado*.",
      currencies: ["US$ · Dólar", "$ · Peso argentino", "R$ · Real", "CLP · Peso chileno", "COP · Peso colombiano", "MXN · Peso mexicano", "S/ · Sol", "UYU · Peso uruguayo", "€ · Euro", "£ · Libra"],
      frozen: { guestLabel: "El huésped vio", guestValue: "US$ 158,60", youLabel: "Tú cobras", youValue: "$ 212.520", note: "Cotización congelada al check-in · 21 mar 09:12" },
    },
    reports: {
      meta: {
        title: "Video · Informes",
        description: "Informes en un minuto: cómo está corriendo la propiedad sin armar una planilla, cada número comparado con el período anterior y, lo que no está en el informe, preguntado a Roombir IA.",
      },
      captions: ["Cómo está corriendo la propiedad", "Lo que ya está reservado, noche por noche", "Si no está en el informe, se pregunta"],
      ask: "¿Qué canal me cancela más este mes?",
      steps: [
        { label: "Reservas del mes leídas", tool: "informe de reservas" },
        { label: "Cancelaciones por canal", tool: "cancelaciones" },
      ],
      answer: "Booking te cancela más: 6 de 21 reservas (29 %). Tu web, 1 de 14. Recepción tiene 2 reservas, así que no lo afirmo.",
      block: {
        title: "Cancelaciones por canal",
        meta: "marzo",
        kpis: [
          { label: "Booking", value: "29 %", hint: "6 de 21" },
          { label: "Tu web", value: "7 %", hint: "1 de 14" },
          { label: "Recepción", value: "—", hint: "2 reservas: pocas" },
        ],
      },
      compare: {
        vs: "vs. febrero",
        items: [
          { label: "Ingresos", now: "$ 4,1 M", prev: "$ 3,6 M", delta: "+14 %" },
          { label: "Anticipación", now: "18 días", prev: "22 días", delta: "−4 días" },
          { label: "Estadía promedio", now: "2,8 noches", prev: "2,5 noches", delta: "+0,3" },
          { label: "Ocupación", now: "78 %", prev: "71 %", delta: "+7 pts" },
        ],
      },
      chips: ["Ocupación", "Demanda a 90 días", "ADR", "RevPAR", "Cancelaciones", "Canales", "Ingresos", "Anticipación", "Estadía promedio", "Ocupación por categoría"],
    },
    revenue: {
      meta: {
        title: "Video · Revenue",
        description: "Revenue en un minuto: cada precio sugerido con su motivo, aceptarlo lo aplica al motor, el destino con sus fuentes y trece variables con un ensayo en seco.",
      },
      captions: ["Cada precio, con su motivo", "Aceptar lo aplica al motor", "Lo que mueve la demanda, con la fuente"],
      vars: ["Ocupación", "Índice de demanda", "Disponibilidad", "Competidor 1", "Competidor 2", "Competidor 3", "Competidor 4", "Competidor 5", "Reservas nuevas · 7 días", "Reservas nuevas · 30 días", "Impacto de eventos", "Días al evento", "Índice de pace"],
      dryRun: {
        title: "Ensayo en seco",
        rule: "Si la ocupación ≥ 75 % a 14 días → +8 %",
        result: "Habría cambiado 9 noches",
        avg: "+$ 7.700 por noche",
      },
      applied: "Tarifa aplicada al motor",
    },
    marketing: {
      meta: {
        title: "Video · Marketing",
        description: "Marketing en un minuto: una web y un LinkHub que ya saben qué tienes libre, el editor con su asistente de IA, seguidores que reservan desde tus redes, tu marca cargada una vez y todo el hub en un solo lugar.",
      },
      linkhub: {
        title: "Convierte tus seguidores *en huéspedes* con LinkHub.",
        points: ["Reservan ahí mismo, sin salir del link", "Desde Instagram, TikTok o WhatsApp", "Tus fechas libres, a la vista al instante", "En pocos toques, sin formularios de más"],
      },
      brand: {
        title: "Identidad de marca",
        name: "Hotel del Parque",
        palette: "Paleta sacada del logo",
        tone: "Tono",
        toneValue: "Cálido y cercano",
        font: "Tipografía",
        fontValue: "Outfit",
        targets: ["Tu web", "LinkHub", "Motor de reservas", "Buscadores", "Mails al huésped", "Roombir IA"],
      },
      editor: {
        captions: [
          "Le pegas una captura y arma las secciones",
          "Señalas un bloque y pides el cambio",
          "Un control de calidad que también arregla"
        ],
        bar: {
          add: "Agregar",
          layers: "Capas",
          files: "Archivos",
          popups: "Popups",
          motor: "Motor",
          settings: "Ajustes",
          ai: "Editor",
          preview: "Vista previa",
          unpublished: "Sin publicar",
          discard: "Descartar",
          quality: "Calidad",
          publish: "Publicar",
          published: "Publicado",
          page: "Editar página:",
          pageName: "Inicio",
          editIn: "Editar en:",
          device: "Escritorio",
          live: "Ver en línea",
          domain: "Conecta tu dominio"
        },
        chat: {
          title: "Editor IA",
          hello: "¡Hola! Soy Roombir IA. Pídeme que cree, edite o reordene secciones.",
          placeholder: "Escríbele a roombir… Pega imágenes o selecciona elementos del lienzo para citarlos.",
          cite: "Citar elementos",
          shot: "portada-referencia.png",
          ask1: "Arma mi portada como esta, con mis habitaciones",
          steps1: [
            "Leyendo la captura",
            "Sección de portada",
            "Sección de habitaciones",
            "Sección de reseñas"
          ],
          answer1: "Listo: armé la portada con tres secciones, en borrador.",
          quote: "Habitaciones",
          ask2: "Agrega dos tarjetas más",
          steps2: [
            "Editando «Habitaciones»"
          ],
          answer2: "Agregué dos tarjetas. El resto quedó igual."
        },
        site: {
          nav: [
            "Habitaciones",
            "Servicios",
            "Ubicación"
          ],
          book: "Reservar",
          heroTitle: "Tu casa frente al parque",
          heroSub: "Hotel del Parque · Mendoza, Argentina",
          roomsTitle: "Nuestras habitaciones",
          rooms: [
            "Doble Superior",
            "Suite del Parque",
            "Cabaña Alerce",
            "Doble Clásica",
            "Cabaña Coihue"
          ],
          guests: "huéspedes",
          reviewsTitle: "Lo que dicen nuestros huéspedes",
          review: "Desayuno riquísimo y una vista al parque que no olvidamos.",
          reviewer: "Laura M. · Google"
        },
        quality: {
          title: "Calidad del sitio",
          sub: "Revisión completa",
          gauges: [
            "Rendimiento",
            "Accesibilidad",
            "Recomendaciones",
            "SEO",
            "Agentes"
          ],
          overall: "Puntaje general",
          fix: "Arreglar todo",
          recheck: "Volver a revisar",
          errors: "Errores",
          passed: "Aprobadas",
          issues: [
            "Imágenes sin descripción",
            "Falta la descripción de la página",
            "Texto demasiado pequeño en el celular"
          ]
        },
        notes: {
          draft: {
            t: "Todo va al borrador",
            d: "Publicar es un paso aparte, y es tuyo."
          }
        }
      },
      hub: {
        title: "Y todo lo demás, *en el mismo lugar*.",
        menu: [
          "Sitios web",
          "Identidad de marca",
          "Galerías",
          "Reseñas",
          "LinkHub",
          "Librería de archivos"
        ],
        chips: [
          "Fotos y videos",
          "Editor de imagen",
          "Plantillas con tu marca",
          "Importar reseñas",
          "LinkHub con QR",
          "Popups y WhatsApp",
          "Tu dominio",
          "Varios idiomas",
          "SEO y GEO",
          "Legible para una IA"
        ]
      },
      one: "Todo en roombir, conectado a tus reservas",
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
