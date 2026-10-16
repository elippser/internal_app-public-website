/**
 * El guion de la guía de Roombir: capítulos y pasos sobre capturas reales de la
 * cuenta demo (Altos del Lago Lodge & Spa, app.roombir.com).
 *
 * Coordenadas: las de la captura en px CSS (ventana de 1920×1080; la imagen
 * está a 3840×2160). Tiempos en ms desde el arranque del paso, escritos sobre su
 * largo "natural" (la locución a ~2,4 palabras por segundo, `natDur`). El largo
 * real de cada paso sale de la voz grabada (`voz.json`: dónde empieza y cuánto
 * dura cada bloque dentro de `public/video/guia/voz-es.mp3`) y los tiempos del
 * paso se escalan en proporción (`stepScale`), así lo que se ve sigue a lo que
 * se dice.
 *
 * - `cam`:   [t, d, x, y, zoom] — un plano hacia el punto (x, y) con ese zoom
 *            (1 = la ventana entera). Al empezar un paso la cámara vuelve sola al
 *            plano general, salvo `keepCam`.
 * - `ptr`:   [t, x, y, clic?] — el puntero; con clic hace la onda.
 * - `swap`:  [captura, t] — la pantalla de antes del gesto y cuándo pasa a `shot`.
 * - `notes`: notas didácticas con línea guía hasta `to`.
 * - `vo`:    la locución del paso (español neutro, tú). Sale a `locuciones/guia/ES.md`.
 */

import VOZ_JSON from "./voz.json";

export type Cam = [t: number, d: number, x: number, y: number, z: number];
export type Ptr = [t: number, x: number, y: number, click?: boolean];
export type GuiaNote = { at: number; out?: number; to: [number, number]; title: string; text?: string };
export type GuiaStep = {
  shot: string;
  cap: string;
  vo: string;
  cam?: Cam[];
  ptr?: Ptr[];
  swap?: [shot: string, t: number];
  notes?: GuiaNote[];
  keys?: { at: number; out: number; keys: string[] };
  keepCam?: boolean;
  /** Zoom del plano que acompaña cada clic (por defecto `CLICK_ZOOM`). */
  clickZoom?: number;
  /** Duración mínima propia (si la locución es más corta que lo que pasa en pantalla). */
  min?: number;
  /** Varias pantallas antes de `shot`: cada una hasta su `t` y después la siguiente (un `swap` encadenado). */
  chain?: [shot: string, until: number][];
  /** Paso mudo (no tiene bloque de voz): el camino por el menú lateral hasta el capítulo. */
  nav?: boolean;
};
export type GuiaChapter = { id: string; title: string; sub: string; vo: string; steps: GuiaStep[] };

export const WPS = 2.4;
const MIN_STEP = 6500;
export const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
/** El largo con el que se escribieron los tiempos del paso (`cam`, `ptr`, `notes`…). */
export const natDur = (s: GuiaStep) => Math.max(s.min ?? MIN_STEP, Math.round((words(s.vo) / WPS) * 1000 + 1400));

export const INTRO = {
  eyebrow: "Guía paso a paso",
  title: "Así funciona *Roombir*",
  sub: "Todas las herramientas, recorridas con un hotel de demostración: Altos del Lago Lodge & Spa, en Bariloche.",
  vo: "Esta es la guía de Roombir. Vas a recorrer todas sus herramientas, una por una, con un hotel de demostración.",
};

export const OUTRO = {
  cta: "Todo tu hotel, en *un solo lugar*.",
  tagline: "roombir.com",
  vo: "Todo tu hotel, en un solo lugar. Roombir.",
};

/* ------------------------------------------------------ menú lateral --- */

/**
 * Cómo se llega a cada capítulo: desde el inicio, el puntero va al ícono del
 * menú lateral, hace clic, elige en el submenú (si tiene) y entra a la pantalla.
 * Las capturas `nav-*` (submenú abierto) y `tip-*` (etiqueta del ícono) son del
 * mismo inicio; la `y` es la del ícono en la captura.
 */
const SIDE_X = 30;
const MENU_X = 130;
function navStep(
  cap: string,
  shot: string,
  icon: number,
  via: { tip: string } | { menu: string; item: number; then?: [shot: string, x: number, y: number] },
): GuiaStep {
  const ptr: Ptr[] = [[300, 760, 560], [1300, SIDE_X, icon], [1650, SIDE_X, icon, true]];
  const chain: [string, number][] = [];
  let last = 1650;
  if ("tip" in via) {
    // La etiqueta aparece cuando el puntero se posa sobre el ícono.
    chain.push(["nav-inicio", 1150], [via.tip, last + 150]);
  } else {
    chain.push(["nav-inicio", last + 100]);
    ptr.push([2550, MENU_X, via.item], [2850, MENU_X, via.item, true]);
    last = 2850;
    chain.push([via.menu, last + 150]);
    if (via.then) {
      const [mid, x, y] = via.then;
      ptr.push([last + 1300, x, y], [last + 1650, x, y, true]);
      last += 1650;
      chain.push([mid, last + 150]);
    }
  }
  return { nav: true, shot, cap, vo: "", chain, ptr, min: last + 1500 };
}

const NAV = {
  habitaciones: navStep("Menú lateral › Habitaciones › Estado de habitaciones", "hab-estado", 244, { menu: "nav-hab", item: 290 }),
  reservas: navStep("Menú lateral › Reservas › Panel del día", "res-panel", 290, { menu: "nav-res", item: 336 }),
  informes: navStep("Menú lateral › Informes", "informes", 336, { tip: "tip-informes" }),
  revenue: navStep("Menú lateral › Revenue", "rev-analitica", 382, { tip: "tip-revenue" }),
  marketing: navStep("Menú lateral › Marketing › Sitios web", "mk-sitios", 428, { menu: "nav-mk", item: 474 }),
  ia: navStep("Menú lateral › Roombir IA", "ia", 106, { tip: "tip-ia" }),
  admin: navStep("Menú lateral › Propiedades › tu propiedad", "propiedad-ficha", 198, { menu: "nav-prop", item: 244, then: ["propiedades", 200, 208] }),
};

export const CHAPTERS: GuiaChapter[] = [
  {
    id: "escritorio",
    title: "El *escritorio*",
    sub: "Todo tu hotel en una sola pantalla.",
    vo: "Empecemos por el escritorio.",
    steps: [
      {
        shot: "inicio",
        cap: "Inicio: tu día de un vistazo",
        vo: "La pantalla de inicio resume tu día: llegadas y salidas, reservas activas, ocupación y la curva de demanda de las próximas semanas. Debajo están las reservas más recientes y, a la derecha, los accesos rápidos a cada herramienta.",
        cam: [[900, 1500, 560, 140, 1.85], [6200, 1500, 470, 330, 1.55], [11000, 1600, 1660, 560, 1.5]],
        notes: [
          { at: 2300, out: 5600, to: [135, 135], title: "Llegadas y salidas", text: "El número de hoy, con acceso directo." },
          { at: 7600, out: 10400, to: [380, 340], title: "Reservas recientes", text: "Las últimas que entraron, con su estado." },
        ],
      },
      {
        shot: "espacios",
        swap: ["inicio", 2100],
        cap: "Espacios de trabajo",
        vo: "Cada equipo trabaja en su propio espacio: recepción, limpieza, administración o marketing. El menú y los permisos cambian según el espacio que elijas.",
        cam: [[800, 1200, 640, 140, 2.0]],
        ptr: [[700, 900, 500], [1500, 530, 25], [1900, 530, 25, true], [3600, 700, 130], [5200, 700, 240]],
        notes: [{ at: 3200, out: 8800, to: [740, 130], title: "Cuatro espacios", text: "Cada uno con sus herramientas y su gente." }],
      },
      {
        shot: "buscador",
        swap: ["inicio", 2000],
        cap: "Buscador global · Ctrl + K",
        vo: "Con Control más K abres el buscador global: escribes un nombre, un código o una habitación, y llegas directo a la reserva.",
        keys: { at: 500, out: 2100, keys: ["Ctrl", "K"] },
        cam: [[2300, 1300, 960, 330, 1.5]],
        notes: [{ at: 4200, to: [700, 210], title: "Resultados al instante", text: "Reservas, huéspedes y habitaciones." }],
      },
    ],
  },
  {
    id: "habitaciones",
    title: "*Habitaciones*",
    sub: "El estado de cada habitación, en tiempo real.",
    vo: "Sigamos con las habitaciones.",
    steps: [
      NAV.habitaciones,
      {
        shot: "hab-estado",
        cap: "Estado de habitaciones",
        vo: "El tablero muestra cada habitación según su estado: disponible, ocupada, en limpieza o en mantenimiento. Para cambiar un estado, arrastras la tarjeta a otra columna y todo el equipo lo ve al instante.",
        cam: [[900, 1500, 720, 330, 1.45]],
        ptr: [[3600, 1100, 600], [5200, 840, 245], [5600, 840, 245, true]],
        notes: [
          { at: 2400, out: 5200, to: [140, 170], title: "Columnas por estado", text: "Disponible, ocupada, limpieza, mantenimiento." },
          { at: 6400, to: [840, 240], title: "Arrastra la tarjeta", text: "Pasa de limpieza a disponible en un gesto." },
        ],
      },
      {
        shot: "hab-plano",
        cap: "Plano de ocupación",
        vo: "El plano de ocupación ordena las habitaciones por piso, con quién está alojado y qué queda libre en la fecha que elijas.",
        cam: [[900, 1500, 560, 240, 1.75], [5200, 2600, 560, 520, 1.75]],
        notes: [{ at: 2600, out: 6200, to: [175, 117], title: "Elige la fecha", text: "Y mira la ocupación de ese día." }],
      },
      {
        shot: "hab-categorias",
        cap: "Categorías y unidades",
        vo: "En Categorías defines cada tipo de habitación con sus fotos, capacidad, precio base y amenities. Las unidades se agregan dentro de cada categoría.",
        cam: [[900, 1500, 840, 380, 1.9]],
        ptr: [[5600, 1000, 700], [7600, 724, 564], [8200, 724, 564, true]],
        notes: [{ at: 2600, out: 7000, to: [770, 430], title: "Precio base y amenities", text: "Lo usan el motor, el sitio y la IA." }],
      },
      {
        shot: "hab-categoria-modal",
        cap: "Editar en siete pasos",
        vo: "Editar una categoría es un asistente de siete pasos: información, modelo de venta, capacidad, precio, amenities, servicios y fotos.",
        keepCam: true,
        cam: [[300, 1400, 990, 560, 1.65]],
        notes: [{ at: 2000, to: [990, 380], title: "Siete pasos", text: "Sin perderte en un formulario largo." }],
      },
    ],
  },
  {
    id: "reservas",
    title: "*Reservas*",
    sub: "Del primer contacto al check-out.",
    vo: "Ahora, las reservas.",
    steps: [
      NAV.reservas,
      {
        shot: "res-panel",
        cap: "Panel del día",
        vo: "El panel del día es la pantalla de recepción: a la izquierda las llegadas, a la derecha las salidas, de hoy y de mañana. Cada una tiene su botón de check-in o de check-out.",
        cam: [[900, 1500, 690, 400, 1.6], [7600, 1600, 1290, 400, 1.6]],
        ptr: [[3600, 700, 700], [5000, 926, 476], [5500, 926, 476, true]],
        notes: [{ at: 5800, out: 8400, to: [926, 476], title: "Check-in con un clic", text: "La habitación pasa a ocupada sola." }],
      },
      {
        shot: "res-lista",
        cap: "Todas las reservas",
        vo: "En la lista de reservas filtras por estado, fechas o canal, y buscas por código o por huésped. También puedes exportarla a CSV.",
        cam: [[900, 1400, 980, 300, 1.5]],
        ptr: [[2600, 700, 600], [3800, 1240, 203], [4200, 1240, 203, true]],
        notes: [{ at: 1900, out: 3800, to: [500, 200], title: "Filtros", text: "Estado, fechas y canal de venta." }],
      },
      {
        shot: "res-detalle",
        swap: ["res-lista", 1700],
        cap: "El detalle de una reserva",
        vo: "Al abrir una reserva ves al huésped, de dónde llegó —ciudad, canal y dispositivo—, la habitación asignada y el detalle del precio, con la promoción aplicada. Desde aquí la confirmas, la mueves o la cancelas.",
        keepCam: true,
        cam: [[1900, 1100, 980, 420, 1.15], [4000, 1500, 1220, 290, 1.9], [9600, 1600, 760, 640, 1.8]],
        ptr: [[300, 700, 500], [900, 600, 394], [1300, 600, 394, true]],
        notes: [
          { at: 5400, out: 9200, to: [1050, 270], title: "Origen de la reserva", text: "Ciudad, canal y dispositivo del huésped." },
          { at: 11200, to: [560, 750], title: "Precio con la promo", text: "Cada noche y el descuento aplicado." },
        ],
      },
      {
        shot: "res-calendario",
        cap: "Calendario",
        vo: "El calendario muestra cada habitación por día. Arrastras una reserva para cambiarla de habitación o de fechas, y el sistema verifica que no se superponga con otra.",
        cam: [[900, 1400, 560, 330, 1.7], [6200, 4200, 1320, 330, 1.7]],
        ptr: [[2800, 400, 500], [4200, 640, 274]],
        notes: [{ at: 4600, out: 8000, to: [640, 274], title: "Arrastra para mover", text: "O estira el borde para cambiar las fechas." }],
      },
      {
        shot: "res-nueva",
        cap: "Nueva reserva",
        vo: "Para cargar una reserva a mano eliges fechas y huéspedes, y ves al instante las habitaciones disponibles con su precio.",
        cam: [[900, 1300, 990, 360, 1.35]],
        ptr: [[1800, 1100, 500], [3000, 1440, 214], [3400, 1440, 214, true], [5800, 1336, 440], [6400, 1336, 440, true]],
      },
      {
        shot: "res-nueva-form",
        cap: "Elegir la habitación",
        vo: "Eliges la habitación, revisas el detalle y completas los datos del huésped. La reserva queda confirmada y la habitación asignada.",
        cam: [[900, 1400, 980, 480, 1.5]],
        ptr: [[3600, 1100, 760], [5000, 1248, 616], [5500, 1248, 616, true]],
      },
      {
        shot: "res-tarifas",
        cap: "Tarifas por temporada",
        vo: "En Tarifas defines el precio base de cada categoría y sus temporadas: verano, otoño, esquí. Cada temporada muestra cuánto sube o baja respecto del precio base.",
        cam: [[900, 1400, 1390, 420, 1.7]],
        notes: [{ at: 3000, to: [1240, 350], title: "Temporadas", text: "Con su variación sobre el precio base." }],
      },
      {
        shot: "res-disponibilidad",
        cap: "Disponibilidad",
        vo: "La disponibilidad muestra cuántas unidades quedan por categoría y por día, con colores según lo lleno que está. Tocando una celda editas restricciones como estadía mínima o cierres.",
        cam: [[900, 1400, 980, 270, 1.5]],
        notes: [{ at: 3200, to: [520, 300], title: "Unidades libres por día", text: "El color indica lo lleno que está." }],
      },
      {
        shot: "res-promos",
        cap: "Promociones",
        vo: "Las promociones pueden ser automáticas o con código, con fechas, estadía mínima y anticipación. Si las marcas para la web, aparecen destacadas en tu sitio y en el motor.",
        cam: [[900, 1300, 990, 380, 1.45]],
        notes: [{ at: 3000, to: [580, 420], title: "Automática o con código", text: "Con reglas de estadía y anticipación." }],
      },
      {
        shot: "res-config",
        cap: "Configuración del motor",
        vo: "En Configuración eliges cómo se vende cada categoría, cómo se asignan las habitaciones, la moneda, los horarios de entrada y salida y los avisos por correo.",
        cam: [[900, 1400, 990, 420, 1.35], [7000, 3000, 990, 820, 1.35]],
      },
    ],
  },
  {
    id: "informes",
    title: "*Informes*",
    sub: "Cómo viene tu hotel, en números.",
    vo: "Pasemos a los informes.",
    steps: [
      NAV.informes,
      {
        shot: "informes",
        cap: "Informes",
        vo: "Informes reúne la ocupación, las reservas activas, las llegadas de la semana y la curva de demanda de los próximos días, junto con la ocupación por categoría y el resumen financiero.",
        cam: [[900, 1400, 980, 320, 1.4], [7000, 2200, 980, 800, 1.4]],
        notes: [{ at: 2800, out: 6600, to: [600, 520], title: "Curva de demanda", text: "Reservas por noche, hacia adelante." }],
      },
    ],
  },
  {
    id: "revenue",
    title: "*Revenue*",
    sub: "Precios que siguen a la demanda.",
    vo: "Ahora, revenue.",
    steps: [
      NAV.revenue,
      {
        shot: "rev-analitica",
        cap: "Analítica",
        vo: "Revenue analiza ingresos, ocupación, tarifa promedio y canal directo frente a las OTAs, con la evolución día a día y la capacidad vendida.",
        cam: [[900, 1400, 980, 330, 1.6], [6400, 2000, 980, 700, 1.3]],
        notes: [{ at: 2600, out: 6200, to: [1010, 262], title: "Canal directo", text: "Cuánto vendes sin comisiones." }],
      },
      {
        shot: "rev-pace",
        cap: "Pace",
        vo: "El pace compara cómo se está vendiendo cada fecha futura con lo esperado, para saber si vas rápido o lento.",
        cam: [[900, 1400, 980, 420, 1.5]],
      },
      {
        shot: "rev-eventos",
        cap: "Eventos de mercado",
        vo: "Los eventos de mercado se detectan solos: feriados, vacaciones escolares y eventos cerca del hotel. Al aprobarlos, influyen en el precio sugerido.",
        cam: [[900, 1400, 990, 420, 1.5]],
        ptr: [[3600, 1200, 600], [5200, 1238, 512]],
      },
      {
        shot: "rev-recos",
        cap: "Recomendaciones de precio",
        vo: "Con tus reglas de precio, el motor sugiere tarifas por fecha y explica por qué. Aceptas o rechazas cada recomendación con un clic.",
        cam: [[900, 1400, 980, 330, 1.7]],
        ptr: [[3000, 1100, 500], [4600, 1354, 240], [5100, 1354, 240, true]],
        notes: [{ at: 2400, out: 4800, to: [560, 242], title: "Precio sugerido", text: "Con la regla que lo explica." }],
      },
    ],
  },
  {
    id: "marketing",
    title: "*Marketing*",
    sub: "Tu sitio, tu marca y tus canales directos.",
    vo: "Sigamos con marketing.",
    steps: [
      NAV.marketing,
      {
        shot: "mk-sitios",
        cap: "Sitios web",
        vo: "En Sitios web están los sitios de tu hotel, con su vista previa y su estado de publicación.",
        cam: [[900, 1300, 420, 380, 1.6]],
        ptr: [[3600, 700, 700], [5200, 400, 360], [5700, 400, 360, true]],
      },
      {
        shot: "mk-sitio-detalle",
        cap: "Resumen del sitio",
        vo: "El resumen del sitio muestra sus páginas, el dominio y el posicionamiento en Google y en los asistentes de inteligencia artificial. Desde aquí abres el editor.",
        cam: [[2600, 1400, 1420, 600, 1.45]],
        ptr: [[8000, 1500, 400], [9400, 1850, 80], [9900, 1850, 80, true]],
      },
      {
        shot: "mk-editor",
        cap: "El editor visual",
        vo: "El editor es visual: cambias textos, fotos y secciones directamente sobre la página. Las secciones de habitaciones, promociones y reseñas se llenan solas con los datos del sistema.",
        cam: [[1800, 1500, 1200, 330, 1.6], [8400, 1500, 1400, 90, 1.5]],
        notes: [{ at: 10200, to: [1674, 72], title: "Calidad del sitio", text: "Velocidad, SEO y accesibilidad." }],
      },
      {
        shot: "web-home",
        cap: "El sitio publicado",
        vo: "Así lo ve el huésped: un sitio rápido, con el buscador de fechas siempre a mano.",
        cam: [[2400, 1600, 600, 330, 1.5]],
        ptr: [[3800, 1300, 300], [5000, 1160, 40], [5400, 1160, 40, true]],
      },
      {
        shot: "web-motor",
        cap: "El motor de reservas",
        vo: "El motor de reservas muestra el calendario con el precio de cada noche y la disponibilidad marcada en verde.",
        cam: [[900, 1300, 960, 300, 1.7]],
      },
      {
        shot: "web-resultados",
        cap: "Reserva directa",
        vo: "El huésped elige su habitación, ve el precio en su moneda y reserva directo, sin comisiones.",
        cam: [[900, 1300, 960, 420, 1.5]],
        notes: [{ at: 2600, to: [500, 140], title: "Su moneda", text: "Dólares, pesos, reales o euros." }],
      },
      {
        shot: "mk-marca",
        cap: "Identidad de marca",
        vo: "Identidad de marca guarda tu logo, colores, tipografía, tono y la historia de tu hotel. Todo lo demás, el sitio, el LinkHub y la IA, toma estos datos.",
        cam: [[900, 1300, 980, 300, 1.45], [6600, 1500, 980, 700, 1.4]],
        notes: [{ at: 2600, out: 6200, to: [560, 310], title: "Paleta de colores", text: "La usan el sitio y el LinkHub." }],
      },
      {
        shot: "mk-galerias",
        cap: "Galerías",
        vo: "Las galerías ordenan tus fotos por tema y eliges cuál es la portada de cada una. El sitio y el LinkHub las muestran solas.",
        cam: [[900, 1300, 640, 380, 1.7]],
        notes: [{ at: 3200, to: [234, 410], title: "Portada", text: "La foto que representa la galería." }],
      },
      {
        shot: "mk-resenas",
        cap: "Reseñas",
        vo: "En Reseñas juntas las opiniones de Google, Booking, TripAdvisor y otros sitios, ves tu puntaje y respondes cada una desde el mismo lugar.",
        cam: [[900, 1300, 420, 250, 1.9], [4800, 1500, 1300, 620, 1.6]],
        ptr: [[6600, 1100, 900], [8000, 1346, 696], [8500, 1346, 696, true]],
      },
      {
        shot: "mk-linkhub",
        cap: "LinkHub",
        vo: "LinkHub es tu página de enlaces para Instagram y otras redes: sumas bloques como el buscador de reservas, WhatsApp, galerías o el mapa, y ves cómo queda en el teléfono.",
        cam: [[900, 1300, 800, 480, 1.4], [6600, 1500, 1750, 520, 1.8]],
      },
      {
        shot: "linkhub-publico",
        cap: "LinkHub publicado",
        vo: "Así se ve publicado: tus huéspedes reservan directo desde tu perfil.",
        cam: [[700, 1400, 960, 380, 1.4], [3800, 3000, 960, 780, 1.4]],
      },
      {
        shot: "mk-archivos",
        cap: "Librería de archivos",
        vo: "La librería de archivos guarda todas las imágenes y documentos del hotel, ordenados en carpetas.",
        cam: [[900, 1300, 780, 300, 1.6]],
        ptr: [[3000, 1100, 600], [4400, 784, 216], [4800, 784, 216, true]],
      },
      {
        shot: "mk-archivos-carpeta",
        cap: "Todo en un lugar",
        vo: "Cada archivo que subes queda disponible para el sitio, las galerías y el LinkHub.",
        cam: [[900, 1300, 990, 370, 1.45]],
      },
    ],
  },
  {
    id: "ia",
    title: "Roombir *IA*",
    sub: "Pídele lo que necesites, como a tu equipo.",
    vo: "Y ahora, Roombir IA.",
    steps: [
      NAV.ia,
      {
        shot: "ia-pregunta",
        swap: ["ia", 1800],
        cap: "Pregunta en lenguaje natural",
        vo: "Roombir IA conoce todo tu sistema. Le preguntas en lenguaje natural, por escrito o por voz.",
        cam: [[900, 1300, 990, 470, 1.7]],
        ptr: [[3800, 1100, 700], [5000, 1264, 578], [5400, 1264, 578, true]],
      },
      {
        shot: "ia-respuesta",
        cap: "Responde y actúa",
        vo: "Responde con los datos reales del hotel y te deja la acción a un clic: hacer el check-in, confirmar o cancelar, siempre con tu permiso.",
        cam: [[900, 1400, 990, 380, 1.6]],
        notes: [{ at: 4200, to: [1284, 454], title: "Acciones directas", text: "Check-in o cancelar, desde el chat." }],
      },
    ],
  },
  {
    id: "admin",
    title: "*Administración*",
    sub: "Propiedades, equipo y preferencias.",
    vo: "Por último, la administración.",
    steps: [
      NAV.admin,
      {
        shot: "propiedad-ficha",
        cap: "La ficha de la propiedad",
        vo: "En la ficha de la propiedad ves sus datos, los espacios de trabajo con las herramientas de cada uno, todas las unidades con su estado y los usuarios. Para sumar a alguien del equipo, lo invitas y eliges en qué espacios trabaja.",
        cam: [[900, 1300, 530, 300, 1.6], [4400, 1500, 1450, 300, 1.6], [8800, 1500, 980, 720, 1.3], [12600, 1400, 1300, 960, 1.6]],
        ptr: [[13600, 1500, 800], [15000, 1828, 942], [15500, 1828, 942, true]],
      },
      {
        shot: "ajustes",
        cap: "Ajustes personales",
        vo: "En Ajustes cada persona elige si quiere el menú arriba o al costado, tema claro u oscuro y su color.",
        cam: [[900, 1300, 1115, 420, 1.7]],
      },
      {
        shot: "soporte",
        cap: "Guías interactivas",
        vo: "Y si alguien del equipo está empezando, las guías interactivas lo llevan paso a paso por cada pantalla, dentro del propio sistema.",
        cam: [[900, 1300, 560, 420, 1.5]],
      },
    ],
  },
];

/* ------------------------------------------------------------- cámara --- */

export type CamPose = { x: number; y: number; z: number };
export type CamMove = { t: number; d: number; to: CamPose };

/** Zoom con el que la ventana entera entra en el escenario de 1280×720 (con aire alrededor). */
export const FIT = 1180 / 1920;
export const WIDE: CamPose = { x: 960, y: 540, z: FIT };
const BACK = 700;
export const CLICK_ZOOM = 1.9;
/** Cuánto se queda el plano del clic después del clic (para ver qué pasó). */
const CLICK_HOLD = 1300;

/** Con zoom, la cámara no se asoma más allá de los bordes de la ventana (si no, aparece una franja vacía). */
export function inside(x: number, y: number, z: number): CamPose {
  const hw = 640 / z;
  const hh = 360 / z;
  return { x: hw * 2 >= 1920 ? 960 : Math.min(1920 - hw, Math.max(hw, x)), y: hh * 2 >= 1080 ? 540 : Math.min(1080 - hh, Math.max(hh, y)), z };
}

/**
 * Los movimientos de cámara de un paso, en tiempo del paso. Cada clic manda: la
 * cámara viaja al punto del clic mientras el puntero va hacia él, llega cuando
 * el puntero llega y se queda hasta después del clic. Los planos de `cam` que
 * caen en esa ventana se descartan (o se cortan), así el zoom nunca mira a otro
 * lado mientras se hace clic.
 */
export function stepCamera(s: GuiaStep, dur: number): CamMove[] {
  const ptr = s.ptr ?? [];
  const wins: { start: number; arrive: number; end: number; to: CamPose }[] = [];
  ptr.forEach(([c, x, y, click], i) => {
    if (!click) return;
    // El puntero llega al punto en la primera llave con esa posición; el viaje empieza en la llave anterior.
    let j = i;
    while (j > 0 && ptr[j - 1][1] === x && ptr[j - 1][2] === y) j--;
    const arrive = Math.min(ptr[j][0], c - 150);
    const travel = j > 0 ? ptr[j - 1][0] : arrive - 900;
    const start = Math.max(travel, arrive - 1600, 0);
    wins.push({ start, arrive, end: Math.min(dur, c + CLICK_HOLD), to: inside(x, y, (s.clickZoom ?? CLICK_ZOOM) * FIT) });
  });

  const plain: CamMove[] = [];
  if (!s.keepCam) plain.push({ t: 0, d: BACK, to: WIDE });
  let floor = s.keepCam ? 0 : BACK;
  for (const [ct, cd, x, y, z] of s.cam ?? []) {
    const at = Math.max(ct, floor);
    const d = Math.min(cd, dur - at);
    if (d <= 0) continue;
    plain.push({ t: at, d, to: inside(x, y, z * FIT) });
    floor = at + d;
  }

  const out: CamMove[] = [];
  for (const m of plain) {
    const hit = wins.find((w) => m.t < w.end && m.t + m.d > w.start);
    if (!hit) out.push(m);
    else if (m.t < hit.start && hit.start - m.t >= 450) out.push({ ...m, d: hit.start - m.t });
  }
  for (const w of wins) {
    const prevEnd = out.filter((m) => m.t < w.arrive).reduce((a, m) => Math.max(a, m.t + m.d), 0);
    const t = Math.max(w.start, prevEnd);
    out.push({ t, d: Math.max(450, w.arrive - t), to: w.to });
  }
  return out.sort((a, b) => a.t - b.t);
}

/** Las pantallas previas a `shot` dentro del paso (`swap` es una cadena de una). */
export const shotChain = (s: GuiaStep): [string, number][] => s.chain ?? (s.swap ? [s.swap] : []);

/** Todas las capturas que usa el video (para precargarlas). */
export const ALL_SHOTS = Array.from(new Set(CHAPTERS.flatMap((c) => c.steps.flatMap((s) => [...shotChain(s).map(([id]) => id), s.shot]))));

/* ------------------------------------------------------ línea de tiempo --- */

/* ---------------------------------------------------------------- voz --- */

/**
 * La voz: un solo archivo con los bloques de `locuciones/guia/ES.md` en orden
 * (intro, por capítulo su presentación y sus pasos, cierre). `voz.json` dice
 * dónde está cada bloque; se midió sobre las pausas del archivo.
 */
export const VOZ: { src: string; srcDur: number; blocks: { at: number; dur: number; text: string }[] } = VOZ_JSON;
/** Cuánto después de que arranca la escena entra la voz, y el aire después de que termina. */
export const VOZ_LEAD = 450;
const VOZ_TAIL = 900;
const STEP_FLOOR = 5200;

/** Lo que se narra, en el orden del archivo de voz (y de `ES.md`). */
export const VOZ_ORDER: { vo: string }[] = [INTRO, ...CHAPTERS.flatMap((c) => [c, ...c.steps.filter((s) => !s.nav)]), OUTRO];
const VOZ_IDX = new Map<object, number>(VOZ_ORDER.map((o, i) => [o, i]));
/** El bloque de voz de un paso, una portada, la intro o el cierre. */
export const voiceOf = (o: object) => VOZ.blocks[VOZ_IDX.get(o) ?? -1];
const voiced = (o: object, min: number) => {
  const v = voiceOf(o);
  return v ? Math.max(min, Math.round(v.dur + VOZ_LEAD + VOZ_TAIL)) : min;
};

export const stepDur = (s: GuiaStep) => (voiceOf(s) ? voiced(s, STEP_FLOOR) : natDur(s));
/** Por cuánto se multiplican los tiempos escritos del paso para caber en su largo real. */
export const stepScale = (s: GuiaStep) => stepDur(s) / natDur(s);
/** La cámara del paso ya escalada a su largo real. */
export const stepCameraReal = (s: GuiaStep): CamMove[] => {
  const k = stepScale(s);
  return stepCamera(s, natDur(s)).map((m) => ({ ...m, t: m.t * k, d: m.d * k }));
};

export const INTRO_DUR = voiced(INTRO, 7600);
export const titleDur = (c: GuiaChapter) => voiced(c, 3600);
export const OUTRO_DUR = voiced(OUTRO, 6200);

/** Los beats del video en orden (mismo formato que `layKitBeats`). */
export function guiaBeatsRaw() {
  return [
    { id: "intro", dur: INTRO_DUR },
    ...CHAPTERS.flatMap((c) => [
      { id: `t-${c.id}`, dur: titleDur(c), enter: "fade" as const, enterDur: 300 },
      { id: `c-${c.id}`, dur: c.steps.reduce((a, s) => a + stepDur(s), 0) },
    ]),
    { id: "outro", dur: OUTRO_DUR, enter: "fade" as const, enterDur: 300 },
  ];
}

/** Tiempos absolutos (ms) de cada portada, paso y del cierre: para el guion y la locución. */
export function guiaTimeline() {
  let t = INTRO_DUR;
  const chapters = CHAPTERS.map((c) => {
    const title = t;
    t += titleDur(c);
    const body = t;
    const steps = c.steps.map((s) => {
      const at = t;
      t += stepDur(s);
      return { step: s, at, dur: stepDur(s) };
    });
    return { ch: c, title, body, steps };
  });
  return { chapters, outro: t, total: t + OUTRO_DUR };
}

/** Dónde arranca cada bloque de voz en el video (ms absolutos), en el orden de `VOZ_ORDER`. */
export function vozStarts(): number[] {
  const tl = guiaTimeline();
  return [0, ...tl.chapters.flatMap((c) => [c.title, ...c.steps.filter((s) => !s.step.nav).map((s) => s.at)]), tl.outro].map((t) => t + VOZ_LEAD);
}
