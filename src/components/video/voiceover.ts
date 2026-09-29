import type { Locale } from "@/i18n/config";
import type { BeatId } from "./timeline";

/**
 * El guion de la voz en off, en los cinco idiomas.
 *
 * **Volcado de `locuciones/portada/{ES,EN,PT,FR,DE}.md` (raíz del monorepo), que
 * son la fuente.** Ahí está el texto tal como se pega en ElevenLabs; acá está
 * el mismo texto más el dato que los documentos no traen: en qué beat del video
 * cae cada bloque. Si se toca el texto, se toca allá y se vuelve a volcar con
 * `gen-voiceover.cjs`; esto no se edita a mano.
 *
 * **Un bloque no es una escena.** Hay bloques que cubren varias (el de la rueda
 * corre por las escenas 12 a 15, sin texto en pantalla, y el de la nueva era
 * por la 20, 21 y 22) y escenas con dos bloques (la 19: el cascadeo y, aparte,
 * "Eficiencia." cuando la línea sobreescribe la palabra). Las escenas 5 —una
 * transición muda de 0,25 s— y la 24 comparten el criterio de siempre: no se
 * dice nada nuevo si la pantalla no lo pide.
 *
 * **El `at` va en ms desde que empieza SU BEAT**, no desde el principio del
 * video. Guardar el instante absoluto lo dejaría viejo al primer retoque de una
 * escena (trampa 45 de este video), y además el video dura distinto en cada
 * idioma porque el tipeo del chat se mide del texto real.
 *
 * El reparto por beats vive en `ORDEN`, dentro del generador: los documentos
 * son texto pelado, sin timecodes ni números de escena. Por eso el generador
 * exige que los cinco idiomas traigan la misma cantidad de bloques — si el
 * guion cambia de largo, hay que actualizar `ORDEN` antes de volcar.
 */

export type VoTake = {
  beat: BeatId;
  /** Ms desde que empieza su beat. */
  at: number;
  text: string;
};

export const VOICEOVER: Record<Locale, VoTake[]> = {
  es: [
    { beat: "sprawl", at: 0, text: "El caos operativo te está matando." },
    { beat: "thread", at: 0, text: "Demasiadas apps…" },
    { beat: "tools", at: 0, text: "Demasiados proveedores…" },
    { beat: "maze", at: 120, text: "El contexto se pierde." },
    { beat: "kills", at: 0, text: "Herramientas sueltas matan el tiempo. Información dispersa mata el revenue." },
    { beat: "punch", at: 0, text: "Basta de planillas sueltas." },
    { beat: "meet", at: 0, text: "Conoce Roombir." },
    { beat: "first", at: 0, text: "Tu alojamiento entero, en un solo sistema." },
    { beat: "shot", at: 0, text: "Reservas, tarifas y huéspedes, en una sola pantalla." },
    { beat: "built", at: 0, text: "Hecho para eliminar caos operativo." },
    { beat: "wheel", at: 0, text: "Cada una de las herramientas que tu alojamiento necesita, diseñadas a tu medida, en un solo sistema." },
    { beat: "precision", at: 0, text: "Diseñado con precisión milimétrica." },
    { beat: "hinge", at: 180, text: "¿Por qué no solo pedirlo?" },
    { beat: "chat", at: 500, text: "Cada consulta sobre el sistema, cada operación… puede ser ejecutada con Roombir IA, todo el potencial de tu alojamiento, en un solo chat." },
    { beat: "unlock", at: 0, text: "Una conversación desbloquea más ocupación… y rendimiento." },
    { beat: "unlock", at: 4840, text: "Eficiencia." },
    { beat: "donut", at: 0, text: "Una nueva era de revenue… de estrategia… de reservas y de IA." },
    { beat: "row", at: 0, text: "Una nueva era de Roombir." },
    { beat: "end", at: 200, text: "Diseñado para tu alojamiento." },
  ],
  en: [
    { beat: "sprawl", at: 0, text: "Operational chaos is killing you." },
    { beat: "thread", at: 0, text: "Too many apps…" },
    { beat: "tools", at: 0, text: "Too many vendors…" },
    { beat: "maze", at: 120, text: "Context gets lost." },
    { beat: "kills", at: 0, text: "Scattered tools kill your time. Scattered information kills your revenue." },
    { beat: "punch", at: 0, text: "No more loose spreadsheets." },
    { beat: "meet", at: 0, text: "Meet Roombir." },
    { beat: "first", at: 0, text: "Your property, whole, in one system." },
    { beat: "shot", at: 0, text: "Bookings, rates and guests, on a single screen." },
    { beat: "built", at: 0, text: "Built to eliminate operational chaos." },
    { beat: "wheel", at: 0, text: "Every tool your property needs, designed to fit you, in one system." },
    { beat: "precision", at: 0, text: "Designed with millimetre precision." },
    { beat: "hinge", at: 180, text: "Why not just ask?" },
    { beat: "chat", at: 500, text: "Every question about the system, every action… can be carried out with Roombir AI, your property's full potential, in a single chat." },
    { beat: "unlock", at: 0, text: "One conversation unlocks maximum occupancy… and performance." },
    { beat: "unlock", at: 4840, text: "Efficiency." },
    { beat: "donut", at: 0, text: "A new era of revenue… of strategy… of bookings and AI." },
    { beat: "row", at: 0, text: "A new era of Roombir." },
    { beat: "end", at: 200, text: "Designed for your property." },
  ],
  pt: [
    { beat: "sprawl", at: 0, text: "O caos operacional está te matando." },
    { beat: "thread", at: 0, text: "Apps demais…" },
    { beat: "tools", at: 0, text: "Fornecedores demais…" },
    { beat: "maze", at: 120, text: "O contexto se perde." },
    { beat: "kills", at: 0, text: "Ferramentas soltas matam o tempo. Informação dispersa mata a receita." },
    { beat: "punch", at: 0, text: "Chega de planilhas soltas." },
    { beat: "meet", at: 0, text: "Conheça a Roombir." },
    { beat: "first", at: 0, text: "Sua hospedagem inteira, em um só sistema." },
    { beat: "shot", at: 0, text: "Reservas, tarifas e hóspedes, em uma só tela." },
    { beat: "built", at: 0, text: "Feito para eliminar o caos operacional." },
    { beat: "wheel", at: 0, text: "Cada uma das ferramentas que a sua hospedagem precisa, desenhadas sob medida, em um só sistema." },
    { beat: "precision", at: 0, text: "Desenhado com precisão milimétrica." },
    { beat: "hinge", at: 180, text: "Por que não só pedir?" },
    { beat: "chat", at: 500, text: "Cada consulta sobre o sistema, cada operação… pode ser executada com a Roombir IA, todo o potencial da sua hospedagem, em um só chat." },
    { beat: "unlock", at: 0, text: "Uma conversa desbloqueia mais ocupação… e desempenho." },
    { beat: "unlock", at: 4840, text: "Eficiência." },
    { beat: "donut", at: 0, text: "Uma nova era de receita… de estratégia… de reservas e de IA." },
    { beat: "row", at: 0, text: "Uma nova era de Roombir." },
    { beat: "end", at: 200, text: "Projetado para a sua propriedade." },
  ],
  fr: [
    { beat: "sprawl", at: 0, text: "Le chaos opérationnel vous tue." },
    { beat: "thread", at: 0, text: "Trop d'applis…" },
    { beat: "tools", at: 0, text: "Trop de prestataires…" },
    { beat: "maze", at: 120, text: "Le contexte se perd." },
    { beat: "kills", at: 0, text: "Des outils épars tuent votre temps. Une information éparpillée tue votre revenu." },
    { beat: "punch", at: 0, text: "Fini les tableurs épars." },
    { beat: "meet", at: 0, text: "Voici Roombir." },
    { beat: "first", at: 0, text: "Votre hébergement en entier, dans un seul système." },
    { beat: "shot", at: 0, text: "Réservations, tarifs et clients, sur un seul écran." },
    { beat: "built", at: 0, text: "Conçu pour éliminer le chaos opérationnel." },
    { beat: "wheel", at: 0, text: "Chaque outil dont votre établissement a besoin, conçu sur mesure, dans un seul système." },
    { beat: "precision", at: 0, text: "Conçu avec précision millimétrique." },
    { beat: "hinge", at: 180, text: "Pourquoi ne pas simplement demander ?" },
    { beat: "chat", at: 500, text: "Chaque question sur le système, chaque opération… peut être exécutée avec Roombir IA, tout le potentiel de votre établissement, dans un seul chat." },
    { beat: "unlock", at: 0, text: "Une conversation débloque plus de remplissage… et de performance." },
    { beat: "unlock", at: 4840, text: "Efficacité." },
    { beat: "donut", at: 0, text: "Une nouvelle ère de revenue… de stratégie… de réservations et d'IA." },
    { beat: "row", at: 0, text: "Une nouvelle ère de Roombir." },
    { beat: "end", at: 200, text: "Conçu pour votre établissement." },
  ],
  de: [
    { beat: "sprawl", at: 0, text: "Das operative Chaos bringt dich um." },
    { beat: "thread", at: 0, text: "Zu viele Apps…" },
    { beat: "tools", at: 0, text: "Zu viele Anbieter…" },
    { beat: "maze", at: 120, text: "Der Kontext geht verloren." },
    { beat: "kills", at: 0, text: "Verstreute Tools kosten deine Zeit. Verstreute Information kostet deinen Umsatz." },
    { beat: "punch", at: 0, text: "Schluss mit losen Tabellen." },
    { beat: "meet", at: 0, text: "Das ist Roombir." },
    { beat: "first", at: 0, text: "Deine Unterkunft komplett, in einem einzigen System." },
    { beat: "shot", at: 0, text: "Buchungen, Preise und Gäste, auf einem einzigen Bildschirm." },
    { beat: "built", at: 0, text: "Gebaut, um Schluss zu machen mit operativem Chaos." },
    { beat: "wheel", at: 0, text: "Jedes Werkzeug, das deine Unterkunft braucht, auf dich zugeschnitten, in einem einzigen System." },
    { beat: "precision", at: 0, text: "Gestaltet mit Millimeterpräzision." },
    { beat: "hinge", at: 180, text: "Warum nicht einfach fragen?" },
    { beat: "chat", at: 500, text: "Jede Frage zum System, jede Aktion… lässt sich mit Roombir KI ausführen, das ganze Potenzial deiner Unterkunft, in einem einzigen Chat." },
    { beat: "unlock", at: 0, text: "Ein Gespräch schaltet mehr Auslastung… und Leistung frei." },
    { beat: "unlock", at: 4840, text: "Effizienz." },
    { beat: "donut", at: 0, text: "Eine neue Ära für Revenue… für Strategie… für Buchungen und KI." },
    { beat: "row", at: 0, text: "Eine neue Ära für Roombir." },
    { beat: "end", at: 200, text: "Für deine Unterkunft gemacht." },
  ],
};

export type VoCue = VoTake & {
  /** Ms desde el principio del video. */
  start: number;
  end: number;
  /** Número de bloque, 1 a 19, para nombrarlo en el editor. */
  n: number;
};

/**
 * Cuánto se queda el subtítulo a la vista.
 *
 * Los documentos no anotan duraciones —un bloque dura lo que dure su audio, y
 * eso recién se sabe cuando el archivo está montado—, así que la ventana llega
 * hasta el bloque siguiente, acotada por lo que lleva leer la frase. Sin ese
 * tope, el bloque del chat dejaría el renglón encendido los diecisiete segundos
 * de la demostración.
 */
function ventana(texto: string): number {
  return Math.max(1400, Math.min(14_000, texto.length * 72));
}

/** El guion en tiempo absoluto, en orden, para el idioma que se esté mirando. */
export function buildCues(beats: { id: BeatId; start: number }[], locale: Locale): VoCue[] {
  const inicio = new Map(beats.map((b) => [b.id, b.start]));
  const cues = VOICEOVER[locale]
    .map((take, i) => {
      const base = inicio.get(take.beat);
      if (base === undefined) return null;
      return { ...take, n: i + 1, start: base + take.at, end: 0 };
    })
    .filter((c): c is VoCue => c !== null)
    .sort((a, b) => a.start - b.start);

  cues.forEach((c, i) => {
    const siguiente = cues[i + 1];
    c.end = Math.min(siguiente ? siguiente.start : Infinity, c.start + ventana(c.text));
  });
  return cues;
}

/**
 * El mismo bloque, en castellano.
 *
 * Los cinco idiomas son el MISMO guion traducido, bloque por bloque y en el
 * mismo orden, así que el equivalente de cualquiera es el de su índice en `es`.
 * El editor lo muestra chiquito debajo del subtítulo: montar una locución en un
 * idioma que uno no lee es imposible sin saber qué dice cada frase.
 */
export function enCastellano(n: number): string | null {
  return VOICEOVER.es[n - 1]?.text ?? null;
}

/** El bloque que va a la vista en un instante, o el último dicho si hay silencio. */
export function cueAt(cues: VoCue[], t: number): { cue: VoCue | null; live: boolean } {
  let ultima: VoCue | null = null;
  for (const c of cues) {
    if (c.start > t) break;
    ultima = c;
  }
  if (!ultima) return { cue: null, live: false };
  return { cue: ultima, live: t < ultima.end };
}
