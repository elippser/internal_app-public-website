import type { Dictionary } from "@/i18n/dict/es";

/**
 * El tiempo del video: curvas, el guion del chat y el reparto de los beats.
 *
 * Todo se mide en ms. Cada escena recibe su tiempo local (`lt`) y calcula su
 * movimiento a partir de él: nada depende de cuándo se montó un elemento, así
 * que pausar congela y adelantar es exacto.
 *
 * Los beats calcan uno por uno los de `video-reference.mp4` (ver
 * VIDEO-REFERENCIA-ANALISIS.md en la raíz): mismas duraciones donde el
 * contenido lo permite, más largos donde el nuestro necesita más (las tarjetas
 * con interacción, la cadena "Tenés vos") y con el chat de Roombir IA
 * insertado después de "precisión". El total es lo que suma: no hay tope.
 */

export type VideoDict = Dictionary["video"];

/* ------------------------------------------------------------- curvas ---- */

export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
/** Progreso 0→1 entre dos instantes. */
export const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
export const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
export const easeOutQuint = (x: number) => 1 - Math.pow(1 - x, 5);
/** La curva de casi todas las entradas: arranca de golpe y frena largo. */
export const easeOutExpo = (x: number) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
export const easeIn = (x: number) => x * x * x;
/** La curva de las salidas y del zoom que atraviesa el texto. */
export const easeInExpo = (x: number) => (x <= 0 ? 0 : Math.pow(2, 10 * x - 10));
export const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
/** Sobrepasa un poco y vuelve: para lo que "cae" en su lugar. */
export const easeBack = (x: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

/** Ruido determinístico en [0, 1): el mismo índice da siempre el mismo valor. */
export function noise(i: number, salt = 0): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/* ----------------------------------------------------------- tipeo ------- */

/** Ritmo medio de tipeo (ms por carácter). Con temblor: nadie tipea parejo. */
export const TYPE_BASE = 30;
/** Ritmo con el que la IA escribe su respuesta. */
export const STREAM_MS = 11;

/**
 * Los instantes (ms desde que empieza a tipear) en los que aparece cada
 * carácter. Los espacios y los signos llevan una pausa extra, como al escribir.
 */
export function typingOffsets(text: string): number[] {
  const out: number[] = [];
  let t = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    let d = TYPE_BASE * (0.72 + 0.56 * noise(i, text.length));
    if (c === " ") d += 34;
    if (/[,.;:?!]/.test(c)) d += 100;
    t += d;
    out.push(t);
  }
  return out;
}

export function typedCount(offsets: number[], elapsed: number): number {
  let n = 0;
  while (n < offsets.length && offsets[n] <= elapsed) n += 1;
  return n;
}

/* ---------------------------------------------------------- guion chat ---- */

export type StepPlan = { at: number; done: number };
export type TurnPlan = {
  typeStart: number;
  typeEnd: number;
  offsets: number[];
  send: number;
  steps: StepPlan[];
  answerAt: number;
  streamEnd: number;
  blockAt: number;
  end: number;
};

/**
 * Cuándo se empieza a tipear la PRIMERA consulta. Todo lo de antes es el
 * prólogo de la escena: la frase de la bisagra que se va, el input que aparece
 * centrado y el acercamiento de la cámara (`PRO` en `acts/chat.tsx`).
 */
export const CHAT_TYPE_AT = 2050;
/** Lo que la IA "piensa" antes de tocar la primera herramienta. */
const THINK = 520;
/**
 * Lo que espera el PRIMER turno. No es suspenso: en ese hueco la cámara se
 * aleja y la UI se compone alrededor del input. Si se acorta, la primera
 * herramienta corre con la app a medio abrir y nadie la ve. (Antes eran
 * 2.550 ms porque además arrancaba un loader; se sacó el 20-09-2026.)
 */
const THINK_FIRST = 1400;

/**
 * El guion del acto del chat, en ms desde que entra la escena. Sale del largo
 * real de las frases: en alemán el tipeo dura más y el acto se estira solo, en
 * vez de cortar la respuesta. `hold` es cuánto se deja leer cada bloque rico.
 */
export function planChat(chat: VideoDict["chat"]): { turns: TurnPlan[]; duration: number } {
  let cursor = CHAT_TYPE_AT;
  const turns = chat.turns.map((turn, i) => {
    const offsets = typingOffsets(turn.ask);
    const typeStart = cursor;
    const typeEnd = typeStart + offsets[offsets.length - 1];
    const send = typeEnd + 140;
    let at = send + (i === 0 ? THINK_FIRST : THINK);
    const steps = turn.steps.map(() => {
      const st = { at, done: at + 280 };
      at += 380;
      return st;
    });
    const answerAt = steps[steps.length - 1].done + 120;
    const streamEnd = answerAt + turn.answer.length * STREAM_MS;
    const blockAt = answerAt + 160;
    const end = Math.max(streamEnd, blockAt + 240) + turn.hold;
    cursor = end;
    return { typeStart, typeEnd, offsets, send, steps, answerAt, streamEnd, blockAt, end };
  });
  // El último bloque se queda a la vista: es el remate del acto.
  return { turns, duration: cursor + 600 };
}

/* -------------------------------------------------------------- beats ---- */

export type BeatId =
  | "sprawl"
  | "thread"
  | "tools"
  | "maze"
  | "dot"
  | "kills"
  | "punch"
  | "meet"
  | "first"
  | "shot"
  | "built"
  | "wheel"
  | "grid"
  | "merge"
  | "unfold"
  | "precision"
  | "hinge"
  | "chat"
  | "unlock"
  | "donut"
  | "blob"
  | "ring"
  | "row"
  | "end";

export type Beat = {
  id: BeatId;
  start: number;
  end: number;
  /** Cómo entra: fundido, o corte (la escena se ocupa de su propia entrada). */
  enter: "fade" | "none";
  enterDur: number;
  /** Cuánto antes de `start` se monta (para verse por el agujero de la anterior). */
  preroll: number;
  /** Se queda montada y POR ENCIMA de la siguiente hasta este instante. */
  until: number;
  /** Si va por encima de la que sigue mientras conviven. */
  over: boolean;
  /**
   * Lo que se estiró o se achicó respecto de su duración natural. `VideoStage`
   * divide el tiempo local por esto, así la escena corre toda su animación en
   * proporción en vez de quedarse congelada al final.
   */
  escala: number;
};

type Fixed = { id: BeatId; dur: number; enter?: Beat["enter"]; enterDur?: number; preroll?: number; over?: boolean; tail?: number };

/** Duración natural de cada beat, en el orden de la referencia. */
const BEFORE_CHAT: Fixed[] = [
  { id: "sprawl", dur: 5500, enter: "fade", enterDur: 400 },
  // La cola tiene que cubrir TODA la cuña de la escena siguiente (820 ms): si no, el papel se desmonta antes y la pantalla salta a negro.
  { id: "thread", dur: 2100, tail: 900 },
  { id: "tools", dur: 2450, preroll: 0, tail: 800 },
  { id: "maze", dur: 3550, over: true, tail: 1000 },
  { id: "dot", dur: 250, over: true, tail: 260 },
  { id: "kills", dur: 5360, over: true, tail: 60 },
  // El preroll tiene que cubrir TODO el zoom-through de `kills`: el agujero del
  // ojo se abre cuando la letra empieza a crecer y por ahí se ve ESTA escena. Si
  // todavía no está montada, por el ojo se ve el fondo negro del reproductor —un
  // puntito negro adentro de la "e"—.
  { id: "punch", dur: 2650, preroll: 2100 },
  { id: "meet", dur: 3000 },
  { id: "first", dur: 2800 },
  { id: "shot", dur: 2800 },
  { id: "built", dur: 2830 },
  { id: "wheel", dur: 5450 },
  // `stack` (la pila en 3D) salió del video el 19-09-2026: la grilla se zambulle
  // directo en el degradado de `unfold`. La escena sigue en `acts/modules.tsx`.
  // Premontada 1 s debajo de la rueda para montar sus tarjetas de a poco (`GRID_PRE` en acts/modules.tsx).
  { id: "grid", dur: 1900, preroll: 1000 },
  // Las tarjetas de la grilla se juntan en la del logo; premontada como la grilla.
  { id: "merge", dur: 2000, preroll: 1000 },
  { id: "unfold", dur: 2250 },
  // 3600 y no 2800: con 2800 el plano se cortaba encima del arrastre y la
  // salida barrida (`PR.push`, los últimos 480 ms) no llegaba a leerse.
  { id: "precision", dur: 3600 },
  { id: "hinge", dur: 2100 },
];
const AFTER_CHAT: Fixed[] = [
  { id: "unlock", dur: 6820 },
  { id: "donut", dur: 2000 },
  { id: "blob", dur: 1400 },
  // Fundido corto sobre el final de `blob`: el fondo pasa de claro a oscuro y
  // un corte seco se leía brusco (la referencia corta seco, pero ahí el fondo
  // es el mismo a los dos lados).
  // Premontada 900 ms: son DIEZ copias de la UI real y montarlas de golpe al
  // corte costaba un cuadro de ~380 ms, que hacía patinar el audio (el reloj del
  // reproductor es el mismo requestAnimationFrame). Mientras está premontada va
  // en opacidad 0 —el `enter: fade` la deja invisible antes de su `start`—, así
  // que el costo cae durante la escena anterior y no se ve. Es lo mismo que hizo
  // falta en la grilla de la 13.
  { id: "ring", dur: 3600, enter: "fade", enterDur: 340, preroll: 900 },
  { id: "row", dur: 2000 },
  { id: "end", dur: 6900, enter: "none" },
];

/**
 * Cuánto se estira o se achica cada escena, como FACTOR de su duración natural.
 *
 * No son milisegundos de más: es una proporción, y eso es lo que la hace
 * servir. Agregarle tiempo a una escena sólo alarga la pausa congelada del
 * final —las animaciones tienen sus propios tiempos adentro—, mientras que
 * cambiar la proporción mueve TODO lo que pasa ahí adentro en el mismo
 * porcentaje: una escena de 10 s llevada a 8 corre sus animaciones al 80 %.
 *
 * El truco que lo hace posible sin tocar ninguna de las 24 escenas: cada una
 * dibuja a partir de su tiempo local, así que alcanza con entregárselo dividido
 * por el factor (lo hace `VideoStage`). La escena cree que dura lo de siempre.
 *
 * Va por idioma porque el motivo es el idioma: una locución no dura lo mismo en
 * alemán que en castellano.
 */
export type Escalas = Partial<Record<BeatId, number>>;

/** Fuera de esto no se acepta: una escena a ×0,2 o a ×5 ya no es esa escena. */
export const ESCALA_MIN = 0.35;
export const ESCALA_MAX = 3;

export const escalaDe = (escalas: Escalas | undefined, id: BeatId): number => {
  const v = escalas?.[id];
  return v && v > 0 ? Math.min(ESCALA_MAX, Math.max(ESCALA_MIN, v)) : 1;
};

export function buildBeats(chatDuration: number, escalas?: Escalas): Beat[] {
  const raw: Fixed[] = [...BEFORE_CHAT, { id: "chat", dur: chatDuration }, ...AFTER_CHAT];
  let cursor = 0;
  const beats: Beat[] = raw.map((b, i) => {
    const escala = escalaDe(escalas, b.id);
    // El preroll cubre la COLA de la escena anterior —el agujero del ojo de
    // `kills` se abre en sus últimos ~2 s y por ahí se ve `punch`—. Si la
    // anterior se estiró, esa cola también: con la escala propia sola, alemán
    // (kills ×1,23) dejaba medio segundo de agujero sin nada detrás.
    const escalaPrev = i > 0 ? escalaDe(escalas, raw[i - 1].id) : 1;
    const dur = Math.round(b.dur * escala);
    const beat: Beat = {
      id: b.id,
      start: cursor,
      end: cursor + dur,
      until: cursor + dur + Math.round((b.tail ?? 0) * escala),
      enter: b.enter ?? "none",
      enterDur: b.enterDur ?? 0,
      preroll: Math.round((b.preroll ?? 0) * Math.max(escala, escalaPrev)),
      over: b.over ?? false,
      escala,
    };
    cursor += dur;
    return beat;
  });
  beats.forEach((b, i) => {
    const next = beats[i + 1];
    if (next) b.until = Math.max(b.until, b.end + next.enterDur);
  });
  return beats;
}

export const totalMs = (beats: Beat[]) => beats[beats.length - 1].end;
