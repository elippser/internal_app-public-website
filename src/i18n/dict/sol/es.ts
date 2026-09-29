/**
 * Menús del header y páginas de soluciones, en castellano (28-09-2026).
 *
 * Vive aparte de `es.ts` para que las cinco versiones se escriban y revisen
 * juntas: los otros idiomas se declaran `typeof solEs`, así que una clave
 * faltante es un error de compilación. `es.ts` lo engancha en `nav.menus`,
 * `solucionesIndex` y `solucionesPaginas`.
 *
 * Reglas de este texto (IDENTIDAD-COMUNICACIONAL-2026.md): castellano neutro con tuteo, sin precios
 * ni planes, sin contar productos, una itálica por titular, cada afirmación con
 * respaldo en el producto.
 */

const menus = {
  platform: "Plataforma",
  ia: "Roombir IA",
  solutions: "Soluciones",
  platformGroups: {
    operations: "Operaciones",
    distribution: "Distribución",
    marketing: "Marketing",
  },
  platformItems: {
    pms: { title: "Propiedades, habitaciones y reservas", desc: "Cargas una vez y operas en el panel del día, la lista y el calendario." },
    informes: { title: "Informes", desc: "Ocupación, ingresos, canales y lo que está mal cargado." },
    motor: { title: "Motor de reservas", desc: "El calendario donde el huésped ve el precio y reserva solo." },
    revenue: { title: "Revenue", desc: "El precio de cada fecha, con el porqué." },
    linkhub: { title: "LinkHub", desc: "El link de tu bio, con el motor dentro." },
    agentes: { title: "Legible para una IA", desc: "Tu alojamiento, entendible y reservable por un asistente." },
    web: { title: "Sitio web", desc: "Un editor con asistente, conectado a tus reservas." },
    marca: { title: "Marca", desc: "Logo, paleta y tono, cargados una vez." },
    archivos: { title: "Fotos y archivos", desc: "Librería y galerías en un solo lugar." },
    resenas: { title: "Reseñas", desc: "Reseñas de varias fuentes, respondidas desde aquí." },
  },
  platformFoot: "Todo sobre una sola base de datos.",
  platformLink: "Ver la plataforma completa",
  iaFeatured: {
    label: "El asistente",
    title: "Roombir IA",
    desc: "Toda la gestión, en una conversación. Le pides y lo hace, con tus permisos.",
    more: "Qué le puedes pedir",
  },
  iaLabel: "Qué hace",
  // El único enlace del menú Roombir IA (las secciones son anclas de la misma página).
  iaLink: "Todo sobre Roombir IA",
  iaItems: {
    pedidos: { title: "Lo que le puedes pedir", desc: "Reservas, tarifas, habitaciones y web, en una frase." },
    destino: { title: "Estado turístico", desc: "Feriados, eventos, clima y vuelos de tu destino, con fuente." },
    estrategia: { title: "Turno estratégico", desc: "Le pides más reservas y te propone un plan que se ejecuta." },
    permisos: { title: "Permisos", desc: "Opera con tus permisos, no con los suyos." },
    hablar: { title: "Cómo se le habla", desc: "Por escrito, por voz o mostrándole una captura." },
    diferencia: { title: "La diferencia", desc: "Por qué no es un chat de IA de uso general." },
  },
  solutionGroups: {
    byType: "Por tipo de alojamiento",
    byRole: "Por cargo",
  },
  solutionItems: {
    hoteles: { title: "Hoteles, aparthoteles y hostels", desc: "Vendes la categoría y el sistema asigna la habitación." },
    alojamientos: { title: "Cabañas y alquileres", desc: "Cada unidad con nombre, fotos y precio propios." },
    propietarios: { title: "Propietarios", desc: "El negocio a la vista, sin estar en recepción." },
    direccion: { title: "Dirección general", desc: "La operación y el equipo en un solo sistema." },
    revenue: { title: "Revenue managers", desc: "El precio de cada fecha, con la traza completa." },
    recepcion: { title: "Recepción", desc: "El turno entero desde el panel del día." },
    housekeeping: { title: "Housekeeping", desc: "El estado de cada habitación, desde el teléfono." },
  },
  solutionsLink: "Ver todas las soluciones",
  more: "Más",
};

const index = {
  byType: {
    eyebrow: "Por tipo de alojamiento",
    title: "Dos formas de vender, *un mismo sistema*.",
    lead: "Hay alojamientos que venden una categoría y asignan la habitación después, y otros que venden cada unidad con nombre propio. Roombir hace las dos, y las dos a la vez en la misma propiedad.",
  },
  byRole: {
    eyebrow: "Por cargo",
    title: "Cada puesto, *su espacio de trabajo*.",
    lead: "Los espacios modelo de los cargos más comunes: qué ve cada uno, qué resuelve y cómo se conecta con el resto del equipo.",
  },
  open: "Ver la solución",
};

const pages = {
  hoteles: {
    meta: {
      title: "Hoteles, aparthoteles y hostels",
      description:
        "Roombir para alojamientos que venden por tipo de habitación: el huésped reserva una categoría y el sistema asigna la habitación. Asignación automática, calendario de cinta, estados por piso y un asistente que opera.",
    },
    hero: {
      eyebrow: "Soluciones · Por tipo de alojamiento",
      title: "Vendes la categoría, *el sistema asigna la habitación*.",
      lead: "En un hotel, un aparthotel o un hostel el huésped compra “una doble superior”, no la 203. Roombir trabaja así desde la base: la categoría agrupa habitaciones intercambiables, el motor vende la categoría y la habitación se asigna sola o la decide recepción.",
    },
    space: {
      eyebrow: "Cómo se vende",
      title: "Una categoría, *varias habitaciones iguales*.",
      lead: "Cada categoría se configura como pool: diez dobles intercambiables se venden como una sola cosa, con su precio, sus fotos y sus comodidades. Al confirmar, el sistema elige la habitación.",
      items: [
        "**Asignación automática** que minimiza los huecos entre reservas o reparte el desgaste entre habitaciones, como prefieras.",
        "**O sin asignar**: la reserva entra a la categoría y recepción decide la habitación desde el calendario.",
        "**Recompactación de asignaciones** para liberar huecos cuando la ocupación aprieta.",
        "**Si además tienes una suite o una cabaña única**, esa categoría se vende con nombre propio en la misma propiedad.",
      ],
    },
    day: {
      eyebrow: "Un sábado de casa llena",
      title: "El mismo día, *con y sin* roombir.",
      lead: "Un hotel de treinta habitaciones con la ocupación alta. A la izquierda, lo que pasa con hojas de cálculo y un motor aparte; a la derecha, lo que hace el sistema.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "08:00",
          old: "Entraron tres reservas por la web durante la noche. Hay que pasarlas a la hoja de cálculo y ver en qué habitación caben.",
          now: "Entraron solas al calendario, asignadas a la habitación que menos huecos deja. Recepción las ve en el panel del día.",
        },
        {
          time: "11:30",
          old: "Una familia pide quedarse una noche más y su habitación está tomada desde mañana.",
          now: "Recepción estira la reserva en el calendario y, antes de soltar, ve el conflicto y a qué habitación libre moverla.",
        },
        {
          time: "13:00",
          old: "Limpieza no sabe qué habitaciones ya quedaron libres.",
          now: "Cada habitación tiene su estado —salida pendiente, limpieza, disponible— y housekeeping lo actualiza desde su espacio.",
        },
        {
          time: "18:00",
          old: "Queda una doble libre y nadie sabe si conviene bajarla o sostener el precio.",
          now: "Revenue muestra la recomendación para esa fecha con el motivo escrito. Si la aceptas, entra al motor.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que resuelve",
      title: "Pensado para *la operación de un hotel*.",
      items: [
        { title: "Calendario de cinta", desc: "Habitaciones por día: arrastras, estiras y ves los conflictos antes de soltar. [Ver Reservas](/producto/pms)." },
        { title: "Estados por piso", desc: "Seis estados con transiciones válidas, historial por habitación y un plano de ocupación por piso." },
        { title: "Una noche, una venta", desc: "Cada noche de cada habitación es un candado único en la base de datos: dos reservas no pueden tomar la misma." },
        { title: "Cada puesto, su pantalla", desc: "Recepción, housekeeping, revenue y administración entran a su propio espacio de trabajo, con su menú." },
      ],
    },
    faq: [
      {
        q: "¿Sirve para hostels?",
        a: "Sí, para la operación de todos los días: panel del día con llegadas y salidas, un espacio para housekeeping y recorridos guiados para el personal que rota. Cada tipo de habitación se carga como una categoría con su capacidad.",
      },
      {
        q: "¿Puedo decidir yo la habitación en vez del sistema?",
        a: "Sí. La asignación automática es una opción: puedes dejar que las reservas entren sin habitación y asignarlas tú desde el calendario o desde la lista de reservas.",
      },
      {
        q: "¿Qué pasa si dos personas reservan la última habitación al mismo tiempo?",
        a: "Una de las dos no entra. Cada noche de cada habitación es un **candado único en la base de datos**: no es una validación que se pueda saltar, es la base la que lo impide.",
      },
    ],
    cta: {
      title: "Carga tus categorías y *mira cómo se asignan*.",
      lead: "El alta es guiada: cargas la propiedad, las categorías y las habitaciones, y la disponibilidad se inicializa sola.",
      steps: [
        "Cargas la propiedad y las categorías.",
        "Creas las habitaciones de una vez, con carga masiva.",
        "Conectas el motor a tu web y empiezas a recibir reservas.",
      ],
    },
  },

  alojamientos: {
    meta: {
      title: "Cabañas, departamentos y alquileres",
      description:
        "Roombir para alojamientos que venden cada unidad con nombre propio: cabañas, departamentos, villas y glamping. Cada unidad con sus fotos, su precio y su calendario, y un motor que muestra la disponibilidad día por día.",
    },
    hero: {
      eyebrow: "Soluciones · Por tipo de alojamiento",
      title: "Cada unidad se vende *con nombre propio*.",
      lead: "Nadie reserva “una cabaña de dos habitaciones”: reserva la Alerce, con sus fotos, su vista y su precio. En Roombir cada unidad es su propia categoría, con su calendario, sus tarifas y su ficha en el motor.",
    },
    space: {
      eyebrow: "Cómo se vende",
      title: "Una unidad, *una ficha propia*.",
      lead: "En el modo unidad, la categoría envuelve exactamente una unidad. No hay asignación que resolver ni ninguna duda sobre qué reservó el huésped.",
      items: [
        "**Fotos, descripción, capacidad y precio** propios en el motor y en la web, unidad por unidad.",
        "**Estadía mínima y días cerrados** por fecha, para fines de semana largos y temporada alta.",
        "**Bloqueos por mitades de día**: el mantenimiento de la tarde bloquea esa noche y deja la mañana vendible.",
        "**Si además tienes habitaciones estándar**, conviven: el modo se elige por categoría, no para toda la propiedad.",
      ],
    },
    day: {
      eyebrow: "Un viernes de fin de semana largo",
      title: "El mismo día, *con y sin* roombir.",
      lead: "Un complejo de seis cabañas en temporada. A la izquierda, lo que nos cuentan en la primera llamada; a la derecha, lo que hace el sistema.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "09:00",
          old: "Diez mensajes por WhatsApp preguntando qué cabaña está libre el fin de semana.",
          now: "El link del motor muestra, día por día, qué unidades quedan y el precio desde. Tres reservaron solas.",
        },
        {
          time: "12:00",
          old: "Alguien pide dos noches y el mínimo del fin de semana largo es tres. Hay que explicarlo a mano.",
          now: "El motor marca el mínimo de noches al elegir la entrada. La consulta no llega.",
        },
        {
          time: "15:00",
          old: "La Coihue tiene una pérdida de agua y hay que sacarla de la venta hasta mañana.",
          now: "Bloqueas la tarde por mantenimiento: esa noche sale del motor y la mañana siguiente sigue vendible.",
        },
        {
          time: "20:00",
          old: "Un turista de Brasil pregunta el precio en reales y le calculas el cambio a mano.",
          now: "El motor le muestra el precio en su moneda. Tú cobras en la tuya y la conversión se congela al check-in.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que resuelve",
      title: "Pensado para *vender unidades únicas*.",
      items: [
        { title: "Disponibilidad a la vista", desc: "Precio desde, unidades restantes y días cerrados en cada día del calendario, antes de elegir fechas. [Ver el motor](/producto/motor)." },
        { title: "LinkHub para tu bio", desc: "El link de Instagram abre el mismo motor, con la disponibilidad real. [Ver LinkHub](/producto/marketing#linkhub)." },
        { title: "Diez monedas", desc: "El huésped mira en su moneda y tú cobras en la tuya. Para pesos argentinos eliges oficial, blue, MEP o CCL." },
        { title: "Una web con tus unidades", desc: "El editor arma el sitio con secciones que leen tus unidades, tus fotos y tus reseñas. [Ver Marketing](/producto/marketing#web)." },
      ],
    },
    faq: [
      {
        q: "¿Puedo tener cabañas y habitaciones en la misma propiedad?",
        a: "Sí. Las cabañas se venden como unidad con nombre propio y las habitaciones como categoría con varias iguales, y conviven en el mismo calendario y en el mismo motor.",
      },
      {
        q: "¿Cada cabaña puede tener su precio?",
        a: "Sí. Cada unidad tiene su precio base y puede tener planes de tarifas y promociones propias, con estadía mínima por fecha.",
      },
      {
        q: "¿Sirve para glamping y villas?",
        a: "Sí: para cualquier alojamiento donde cada unidad es distinta y se vende por su nombre. Domos, casas, departamentos o villas se cargan igual que una cabaña.",
      },
    ],
    cta: {
      title: "Carga tus unidades y *comparte el link*.",
      lead: "El alta es guiada. Cargas cada unidad con sus fotos y su precio, y el motor queda listo para mandar por WhatsApp o poner en tu bio.",
      steps: [
        "Cargas la propiedad y cada unidad con sus fotos.",
        "Configuras estadías mínimas y fechas cerradas.",
        "Compartes el link del motor o lo pones en tu web.",
      ],
    },
  },

  propietarios: {
    meta: {
      title: "Propietarios",
      description:
        "Roombir para dueños de alojamientos: saber cómo va el negocio sin estar en recepción, decidir con números y delegar con permisos claros por persona y por propiedad.",
    },
    hero: {
      eyebrow: "Soluciones · Por cargo",
      title: "Tu negocio a la vista, *sin estar en recepción*.",
      lead: "Como dueño necesitas saber cómo viene la ocupación, qué se vendió y qué está mal cargado, sin pedirle una hoja de cálculo a nadie. Y que cada persona del equipo haga lo suyo sin darle acceso a todo.",
    },
    space: {
      eyebrow: "Su espacio de trabajo",
      title: "Todo el sistema, *y quién ve qué*.",
      lead: "El espacio de administración ve todas las apps del sistema y es desde donde se da acceso al resto del equipo, persona por persona y propiedad por propiedad.",
      items: [
        "**Informes** de ocupación, tarifa promedio, ingresos y cancelaciones, contra el período anterior.",
        "**Estado y gestión**: lo que está mal cargado hoy, como reservas pendientes sin confirmar o llegadas sin habitación.",
        "**Usuarios y capacidades**: diez capacidades administrativas que se dan de a una, y acceso limitado a las propiedades que correspondan.",
        "**Roombir IA** para preguntar lo que no está en pantalla, en una frase.",
      ],
    },
    day: {
      eyebrow: "Una semana de dueño",
      title: "La misma semana, *con y sin* roombir.",
      lead: "Un dueño con un hotel y un complejo de cabañas, que no está todos los días en el mostrador.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "Lunes",
          old: "Le escribes al encargado para saber cómo cerró el fin de semana. Contesta al mediodía con una foto de la hoja de cálculo.",
          now: "Abres Informes desde el teléfono: ocupación, ingresos y cancelaciones del período, con la diferencia contra el anterior.",
        },
        {
          time: "Martes",
          old: "Te enteras por un huésped de que su reserva nunca se confirmó.",
          now: "Estado y gestión marca las reservas pendientes sin confirmar hace más de un día, antes de que llegue el huésped.",
        },
        {
          time: "Jueves",
          old: "Entra alguien nuevo a recepción y le pasas tu usuario porque no hay otro.",
          now: "Le creas su usuario en el espacio de recepción, limitado a esa propiedad. No ve revenue ni la configuración.",
        },
        {
          time: "Viernes",
          old: "Te preguntas qué canal te trae más reservas y cuál te cancela más.",
          now: "Se lo preguntas a Roombir IA y te contesta con el número y de dónde sale.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que te da",
      title: "Decidir con números, *delegar con permisos*.",
      items: [
        { title: "Informes sin hojas de cálculo", desc: "Calculados sobre las mismas reservas que opera tu equipo. [Ver Informes](/producto/informes)." },
        { title: "Varias propiedades", desc: "Un hotel y unas cabañas bajo la misma cuenta, cada uno con su moneda y su equipo. [Ver Propiedades](/producto/pms)." },
        { title: "Permisos de verdad", desc: "Cada persona entra con su usuario, a su espacio y a sus propiedades. Las operaciones sensibles quedan registradas." },
        { title: "Un asistente que responde", desc: "Roombir IA lee los mismos datos y te contesta con el número, o hace el cambio si se lo pides. [Ver Roombir IA](/producto/ia)." },
      ],
    },
    faq: [
      {
        q: "¿Puedo seguir el negocio desde el teléfono?",
        a: "Sí. El sistema se usa desde el navegador y está pensado para el teléfono y la tableta, no sólo para la computadora de recepción.",
      },
      {
        q: "¿Qué ve el personal que contrato?",
        a: "Sólo lo que le das: el espacio de trabajo decide el menú y la pantalla de inicio, y el acceso por propiedad decide qué alojamientos ve. Housekeeping, por ejemplo, no ve tarifas.",
      },
      {
        q: "¿Tengo que instalar algo?",
        a: "No. Se entra por el navegador, y el alta son nueve pasos guiados que puedes dejar por la mitad y seguir desde otro dispositivo.",
      },
    ],
    cta: {
      title: "Mira tu alojamiento *como lo ve el sistema*.",
      lead: "Te das de alta, cargas la propiedad y en la misma tarde tienes los informes armados. Si prefieres que te lo mostremos antes, lo recorremos juntos.",
      steps: [
        "Creas la compañía y la primera propiedad.",
        "Invitas a tu equipo, cada uno a su espacio.",
        "Sigues el negocio desde Informes y Roombir IA.",
      ],
    },
  },

  direccion: {
    meta: {
      title: "Dirección general",
      description:
        "Roombir para gerentes y directores generales: la operación del día, el equipo y los números en el mismo sistema, con un espacio de trabajo por puesto y una sección que avisa lo que está mal cargado.",
    },
    hero: {
      eyebrow: "Soluciones · Por cargo",
      title: "La operación entera, *en un solo sistema*.",
      lead: "Dirigir un alojamiento es coordinar recepción, limpieza, ventas y números que suelen vivir en herramientas distintas. En Roombir es un solo sistema: cada puesto trabaja en su espacio y tú ves el conjunto.",
    },
    space: {
      eyebrow: "Su espacio de trabajo",
      title: "Ver el conjunto *sin entrar a cada área*.",
      lead: "El espacio de administración reúne todas las áreas del sistema, y desde ahí se define qué ve y qué puede hacer cada puesto.",
      items: [
        "**Panel del día** con las llegadas, las salidas y las reservas que necesitan una acción.",
        "**Estado y gestión**: lo que está mal cargado hoy, antes de que se convierta en un huésped sin habitación.",
        "**Espacios de trabajo por puesto**: defines qué apps ven recepción, housekeeping, marketing o revenue.",
        "**Inducción por espacio**: cada persona nueva tiene los recorridos guiados de las apps de su puesto.",
      ],
    },
    day: {
      eyebrow: "Un día de dirección",
      title: "El mismo día, *con y sin* roombir.",
      lead: "Un hotel de cuarenta habitaciones con un equipo de doce personas en turnos.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "08:00",
          old: "La reunión de la mañana arranca juntando datos de tres sistemas y una hoja de cálculo.",
          now: "El panel del día y los informes ya tienen llegadas, salidas, ocupación y lo que quedó pendiente.",
        },
        {
          time: "10:30",
          old: "Entra una recepcionista nueva y alguien le explica el sistema en medio del turno.",
          now: "Su espacio de recepción trae los recorridos guiados de cada pantalla, sobre la interfaz real.",
        },
        {
          time: "14:00",
          old: "Un reclamo: una habitación se entregó sin limpiar y nadie sabe qué pasó.",
          now: "El historial de la habitación dice quién cambió cada estado, a qué hora y con qué nota.",
        },
        {
          time: "17:00",
          old: "Revenue, web y reservas se coordinan por mensajes entre tres personas.",
          now: "Los tres trabajan sobre los mismos datos: la tarifa aceptada en Revenue ya está en el motor y en la web.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que te da",
      title: "Un equipo coordinado *por el mismo sistema*.",
      items: [
        { title: "Espacios por puesto", desc: "Cada puesto con su menú, su pantalla de inicio y sus permisos: operar, configurar o nada." },
        { title: "Recorridos guiados", desc: "38 recorridos que se dibujan sobre la pantalla real y arman la inducción de cada persona nueva." },
        { title: "Historial por habitación", desc: "Quién cambió cada estado, cuándo y con qué nota. [Ver Habitaciones](/producto/pms)." },
        { title: "Informes y revenue", desc: "Los números de la operación y el precio de cada fecha con el porqué. [Ver Revenue](/producto/revenue)." },
      ],
    },
    faq: [
      {
        q: "¿Puedo limitar lo que ve cada puesto?",
        a: "Sí. El espacio de trabajo decide el menú y la pantalla de inicio, y los permisos van por app y por nivel: operar, configurar o nada.",
      },
      {
        q: "¿Qué pasa con el personal que rota?",
        a: "Cada persona nueva entra a su espacio con los recorridos guiados de sus apps. Y el usuario se puede crear con una contraseña temporal que hay que cambiar al entrar.",
      },
      {
        q: "¿Sirve si dirijo más de un alojamiento?",
        a: "Sí. Varias propiedades conviven en la misma cuenta y el acceso de cada persona se limita a las que le tocan.",
      },
    ],
    cta: {
      title: "Arma los espacios de tu equipo *en una tarde*.",
      lead: "El alta crea la propiedad y propone los espacios de trabajo según cómo operas. Después invitas a cada persona al suyo.",
      steps: [
        "Creas la propiedad y eliges cómo operas.",
        "Ajustas los espacios de trabajo por puesto.",
        "Invitas al equipo, cada uno a su espacio.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue managers",
      description:
        "Roombir para revenue managers: el precio de cada fecha con la traza de por qué, pace contra el histórico propio, competencia, eventos del destino y la tarifa que entra al motor al aceptarla.",
    },
    hero: {
      eyebrow: "Soluciones · Por cargo",
      title: "El precio de cada fecha, *con la traza completa*.",
      lead: "Un revenue manager no necesita otra caja negra que devuelva un número. Necesita ver qué datos se usaron, qué regla coincidió y qué tope se aplicó, y que la tarifa aceptada llegue al motor sin copiarla a mano.",
    },
    space: {
      eyebrow: "Su espacio de trabajo",
      title: "Revenue, informes y tarifas, *en el mismo lugar*.",
      lead: "El espacio de revenue reúne el RMS con las tarifas, la disponibilidad y los informes, sobre los mismos datos que opera recepción.",
      items: [
        "**Documento de decisión** por fecha: los datos vistos, la regla que coincidió, el tope aplicado y el resultado.",
        "**Pace contra tu propio histórico**, por día de semana, mes y anticipación, con el tamaño de la muestra a la vista.",
        "**Reglas con ensayo en seco**: trece variables y un ensayo que muestra qué habría hecho cada regla antes de activarla.",
        "**Competencia**: se descubre por cercanía y parecido, y la tarifa de los competidores externos la cargas tú como referencia.",
      ],
    },
    day: {
      eyebrow: "Diez días antes de un evento",
      title: "La misma decisión, *con y sin* roombir.",
      lead: "Un hotel en una ciudad con un festival grande a diez días.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "09:00",
          old: "Te enteras del festival por un huésped que pregunta si hay lugar.",
          now: "El evento ya está en la lista, sugerido por el sistema por cercanía y fecha, esperando que lo apruebes.",
        },
        {
          time: "11:00",
          old: "Comparas el ritmo de reservas con el año pasado en dos hojas de cálculo.",
          now: "El pace compara contra tu propio histórico para esas fechas y te dice sobre cuántas reservas se calculó.",
        },
        {
          time: "15:00",
          old: "Decides subir la tarifa y le pides a alguien que cambie el precio en el motor.",
          now: "Aceptas la recomendación y la tarifa entra al motor como primer escalón del precio de esa fecha.",
        },
        {
          time: "+7 días",
          old: "Nadie recuerda por qué se subió.",
          now: "El documento de decisión guarda qué vio el sistema, qué regla coincidió y quién aceptó.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que te da",
      title: "Decisiones que *se pueden explicar*.",
      items: [
        { title: "La traza de cada precio", desc: "Qué datos, qué regla y qué tope, fecha por fecha. [Ver Revenue](/producto/revenue)." },
        { title: "El destino con fuente", desc: "Feriados, eventos en tu radio, clima y rutas aéreas observadas, cada dato con su fecha. [Ver el estado turístico](/producto/ia#destino)." },
        { title: "Lazo cerrado con el motor", desc: "La tarifa aceptada es el primer escalón de la cadena de precios del motor. [Ver el motor](/producto/motor)." },
        { title: "Preguntas en una frase", desc: "Roombir IA lee el pace, los eventos y las tarifas y te propone qué hacer, con tu confirmación." },
      ],
    },
    faq: [
      {
        q: "¿Aplica los precios solo?",
        a: "Por defecto sugiere, y tú aceptas o rechazas cada recomendación. Si lo activas, las recomendaciones pueden aplicarse solas.",
      },
      {
        q: "¿Qué pasa si tengo poca historia?",
        a: "La pantalla te lo dice: cada cálculo muestra sobre cuántas reservas se hizo, y no te vende una confianza que no existe.",
      },
      {
        q: "¿De dónde salen las tarifas de la competencia?",
        a: "Los competidores que también usan roombir aportan su tarifa real. Los de fuera se descubren solos por cercanía y parecido, y su tarifa la cargas tú como referencia fija o por fecha.",
      },
    ],
    cta: {
      title: "El precio *deja de ser una corazonada*.",
      lead: "Revenue empieza a servir apenas tienes historia propia, y mientras tanto te dice con qué muestra está trabajando.",
      steps: [
        "Cargas la propiedad y las tarifas base.",
        "Revisas los eventos y la competencia de tu destino.",
        "Aceptas la primera recomendación y va al motor.",
      ],
    },
  },

  recepcion: {
    meta: {
      title: "Recepción",
      description:
        "Roombir para recepción: el panel del día, la lista de reservas, el calendario de cinta y un asistente que hace los cambios en una frase, con correos al huésped que salen solos.",
    },
    hero: {
      eyebrow: "Soluciones · Por cargo",
      title: "El turno entero, *desde el panel del día*.",
      lead: "Recepción vive entre llegadas, salidas, cambios de habitación y consultas por WhatsApp. El espacio de recepción arranca en el panel del día y tiene a mano todo lo que el turno necesita, y nada de lo que no.",
    },
    space: {
      eyebrow: "Su espacio de trabajo",
      title: "Lo del turno, *y nada más*.",
      lead: "El menú de recepción trae las pantallas de reservas y el estado de habitaciones. Revenue, la configuración y el editor web quedan en otros espacios.",
      items: [
        "**Panel del día** con las llegadas y salidas, en tarjetas que se accionan.",
        "**Todas las reservas** con un panel lateral: resumen, actividad y notas sin salir de la lista.",
        "**Calendario de cinta**: arrastras o estiras una reserva y ves el conflicto antes de soltar.",
        "**Nueva reserva** para lo que entra por teléfono o WhatsApp, con canal de origen y promociones.",
      ],
    },
    day: {
      eyebrow: "Un martes cualquiera",
      title: "El mismo turno, *con y sin* roombir.",
      lead: "Un alojamiento de doce unidades y una persona en el mostrador.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "08:10",
          old: "Tres WhatsApp preguntando disponibilidad para el fin de semana. Abres el Excel para contestar uno por uno.",
          now: "Les mandas el link del motor: precio y unidades restantes, día por día. Dos reservaron solas.",
        },
        {
          time: "11:00",
          old: "Hay que pasar a García a otra habitación. Buscas la reserva, la cambias y escribes el mail.",
          now: "Le pides a Roombir IA que lo pase a la 203 y le avise por mail. Lo hace y te devuelve la tarjeta con el cambio.",
        },
        {
          time: "14:20",
          old: "Un huésped pide quedarse una noche más y no sabes si la habitación está libre.",
          now: "Estiras la reserva en el calendario y antes de soltar ves si choca con otra y cómo cambia el precio.",
        },
        {
          time: "17:00",
          old: "Hay que mandar la confirmación de una reserva telefónica desde tu correo personal.",
          now: "La cargas en Nueva reserva y el correo al huésped sale solo, desde el dominio de roombir con tu correo como responder-a.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que te da",
      title: "Menos clics, *menos mensajes*.",
      items: [
        { title: "Un asistente que hace", desc: "Mueves, asignas y avisas con una frase, con tus permisos. [Ver Roombir IA](/producto/ia)." },
        { title: "Correos que salen solos", desc: "Las confirmaciones y los avisos al huésped salen sin configurar un servidor de correo." },
        { title: "Una noche, una venta", desc: "Dos reservas no pueden tomar la misma noche de la misma habitación: la base de datos lo impide." },
        { title: "Recorridos guiados", desc: "Si eres nuevo en el puesto, cada pantalla tiene su recorrido sobre la interfaz real. [Ver Reservas](/producto/pms)." },
      ],
    },
    faq: [
      {
        q: "¿Tengo que saber usar un sistema de hotel?",
        a: "No hace falta. Tu espacio trae sólo las pantallas de recepción, y cada una tiene un recorrido guiado que se dibuja sobre la pantalla real.",
      },
      {
        q: "¿Quién confirma las reservas que entran por el motor?",
        a: "Depende de la configuración: las confirma el huésped con un enlace por correo o las aceptas tú. En los dos casos, las pendientes vencen solas.",
      },
      {
        q: "¿Puedo usarlo desde una tableta en el mostrador?",
        a: "Sí. Se usa desde el navegador y está pensado para teléfono y tableta, además de la computadora.",
      },
    ],
    cta: {
      title: "Abre el turno *en el panel del día*.",
      lead: "Tu encargado te invita a tu espacio de recepción y entras con tu usuario. Los recorridos guiados hacen el resto.",
      steps: [
        "Recibes la invitación a tu espacio.",
        "Haces el recorrido del panel del día.",
        "Operas el turno desde las reservas y el calendario.",
      ],
    },
  },

  housekeeping: {
    meta: {
      title: "Housekeeping",
      description:
        "Roombir para housekeeping: el estado de cada habitación por piso, cambios de estado que no admiten errores e historial, en un espacio de trabajo sin tarifas ni revenue.",
    },
    hero: {
      eyebrow: "Soluciones · Por cargo",
      title: "El estado de cada habitación, *sin preguntar en recepción*.",
      lead: "Limpieza necesita saber qué habitaciones quedaron libres, cuáles hay que preparar para una llegada y cuáles están en mantenimiento. En Roombir lo ve en su propio espacio, con un tablero por piso que comparte los datos con recepción.",
    },
    space: {
      eyebrow: "Su espacio de trabajo",
      title: "Estados y plano, *sin tarifas*.",
      lead: "El espacio de housekeeping trae el estado de habitaciones y el plano de ocupación. No ve tarifas, revenue ni la configuración del motor.",
      items: [
        "**Seis estados**: disponible, ocupada, limpieza, mantenimiento, bloqueada y salida pendiente.",
        "**Cambios que no admiten errores**: de ocupada sólo se pasa a salida pendiente; nadie libera una habitación con el huésped dentro.",
        "**Tablero por piso y por categoría**, con filtros, para leer la casa de un vistazo.",
        "**Historial por habitación**: quién cambió cada estado, cuándo y con qué nota.",
      ],
    },
    day: {
      eyebrow: "Una mañana de salidas",
      title: "El mismo turno, *con y sin* roombir.",
      lead: "Un hotel con quince salidas y diez llegadas en el día.",
      headOld: "Hoy",
      headNew: "Con roombir",
      rows: [
        {
          time: "09:00",
          old: "Recepción avisa por teléfono qué habitaciones ya salieron.",
          now: "Cuando recepción hace el check-out, la habitación pasa a salida pendiente y aparece en tu tablero.",
        },
        {
          time: "11:00",
          old: "Terminaste la 203, pero recepción no se entera y la sigue dando por sucia.",
          now: "La pasas a disponible desde el teléfono y recepción la ve disponible en su pantalla.",
        },
        {
          time: "13:00",
          old: "La 205 tiene una llave de agua rota y el aviso queda en un papel.",
          now: "La marcas en mantenimiento con una nota, y el cambio queda en el historial de la habitación.",
        },
        {
          time: "15:00",
          old: "Llega un huésped temprano y nadie sabe qué habitación está lista.",
          now: "El tablero por piso muestra cuáles están disponibles en este momento.",
        },
      ],
    },
    benefits: {
      eyebrow: "Lo que te da",
      title: "Menos idas y vueltas *con recepción*.",
      items: [
        { title: "Tablero por piso", desc: "La casa entera de un vistazo, con filtros por piso y por categoría. [Ver Habitaciones](/producto/pms)." },
        { title: "Desde el teléfono", desc: "El espacio de housekeeping se usa desde el navegador del teléfono, en la misma habitación." },
        { title: "Sin información de más", desc: "Tu menú no tiene tarifas ni revenue: sólo lo que necesita el turno." },
        { title: "Recorridos guiados", desc: "Cada pantalla trae su recorrido sobre la interfaz real para quien empieza." },
      ],
    },
    faq: [
      {
        q: "¿El personal de limpieza ve las tarifas?",
        a: "No, si no quieres. El espacio de housekeeping trae su propio menú —estado de habitaciones y plano— sin tarifas ni revenue.",
      },
      {
        q: "¿Por qué no puedo pasar una habitación ocupada a disponible?",
        a: "Porque el huésped sigue dentro. De ocupada sólo se pasa a salida pendiente, que llega con el check-out; así nadie vende una habitación que todavía está en uso.",
      },
      {
        q: "¿Queda registro de los cambios?",
        a: "Sí. Cada habitación guarda su historial de estados: quién, cuándo y con qué nota.",
      },
    ],
    cta: {
      title: "Que limpieza *vea lo mismo* que recepción.",
      lead: "El encargado crea el usuario en el espacio de housekeeping y cada persona entra con el suyo, desde el teléfono.",
      steps: [
        "Recibes la invitación a tu espacio.",
        "Haces el recorrido del estado de habitaciones.",
        "Cambias estados desde el teléfono, habitación por habitación.",
      ],
    },
  },
};

export const solEs = { menus, index, pages };
export type SolDict = typeof solEs;
