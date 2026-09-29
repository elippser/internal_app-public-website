/**
 * "Plataforma completa" (28-09-2026): la tarjeta comercial del menú
 * Plataforma y la página que muestra el sistema de un vistazo
 * (`/plataforma-completa`). Mismas reglas que el resto: sin precios y sin
 * contar productos.
 */
export const platEs = {
  promo: {
    title: "¿Otro PMS genérico?",
    accent: "Nah.",
    body: "Basta de sistemas que te obligan a trabajar como ellos quieren. Roombir se arma según cómo opera tu alojamiento, y cada puesto ve lo suyo.",
    cta: "Plataforma completa",
  },
  // La tarjeta de la primera columna del menú Soluciones: sin botón.
  solPromo: {
    title: "Ni todos los alojamientos iguales,",
    accent: "ni todos los puestos.",
    body: "Un hotel no se opera como unas cabañas, y recepción no mira lo mismo que revenue. Roombir se configura según cómo vendes y quién trabaja contigo.",
  },
  page: {
    meta: {
      title: "Plataforma completa: Roombir de un vistazo",
      description:
        "Así se ve Roombir por dentro: operaciones, distribución, marketing y el asistente, sobre la misma base de datos. Pantallas reales del sistema.",
    },
    hero: {
      eyebrow: "Plataforma completa",
      title: "Toda la plataforma, *de un vistazo*.",
      lead: "Así se ve Roombir por dentro. Elige un área y mira sus pantallas: todas leen y escriben sobre la misma base de datos, así que lo que cambia en una lo ven las demás.",
    },
    shot: {
      label: "Roombir · Hotel del Parque",
      tag: "Pantallas reales, datos de ejemplo",
      areas: "Áreas",
      captions: {
        operations: "La propiedad, sus habitaciones y cada reserva, en el calendario y en el panel del día.",
        distribution: "Dónde se vende y a qué precio: el motor propio, la tarifa de cada fecha y los asistentes que reservan.",
        marketing: "El sitio, la marca y las reseñas, conectados a la disponibilidad real.",
        ia: "Un asistente que opera el sistema con tus permisos y conoce tu destino.",
      },
    },
    map: {
      eyebrow: "El mapa",
      title: "Cada parte, *con su página*.",
      lead: "Si quieres ver el detalle de algo, entra. Si no encuentras lo que buscas, [escríbenos](/contacto) y te contamos si existe.",
    },
    cta: {
      title: "Mírala funcionando *con tus datos*.",
      lead: "El alta es guiada: cargas la propiedad, el sistema arma los espacios de trabajo y empiezas por lo que más te urge.",
      steps: [
        "Cargas la propiedad y las habitaciones.",
        "Eliges qué ve cada puesto.",
        "Conectas el motor y empiezas a vender.",
      ],
    },
  },
};

export type PlatDict = typeof platEs;
