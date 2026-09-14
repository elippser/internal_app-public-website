import type { Dictionary } from "@/i18n/dict/es";

/**
 * El tiempo del video: curvas, el guion del chat y el reparto del minuto.
 *
 * Todo se mide en ms. Cada escena recibe su tiempo local (`lt`) y calcula su
 * movimiento a partir de él: nada depende de cuándo se montó un elemento, así
 * que pausar congela y adelantar es exacto.
 */

export type VideoDict = Dictionary["video"];

/* ------------------------------------------------------------- curvas ---- */

export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
/** Progreso 0→1 entre dos instantes. */
export const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a));
export const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
export const easeOutQuint = (x: number) => 1 - Math.pow(1 - x, 5);
export const easeIn = (x: number) => x * x * x;
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
export const TYPE_BASE = 36;
/** Ritmo con el que la IA escribe su respuesta. */
export const STREAM_MS = 13;

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
    if (c === " ") d += 45;
    if (/[,.;:?!]/.test(c)) d += 130;
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
 * El guion del acto 2, en ms desde que entra la escena. Sale del largo real de
 * las frases: en alemán el tipeo dura más y el acto se estira solo, en vez de
 * cortar la respuesta.
 */
export function planChat(chat: VideoDict["chat"]): { turns: TurnPlan[]; duration: number } {
  let cursor = 500;
  const turns = chat.turns.map((turn) => {
    const offsets = typingOffsets(turn.ask);
    const typeStart = cursor;
    const typeEnd = typeStart + offsets[offsets.length - 1];
    const send = typeEnd + 160;
    // La IA "piensa" un momento antes de la primera herramienta.
    let at = send + 650;
    const steps = turn.steps.map(() => {
      const st = { at, done: at + 320 };
      at += 440;
      return st;
    });
    const answerAt = steps[steps.length - 1].done + 140;
    const streamEnd = answerAt + turn.answer.length * STREAM_MS;
    const blockAt = answerAt + 180;
    const end = Math.max(streamEnd, blockAt + 260) + 950;
    cursor = end;
    return { typeStart, typeEnd, offsets, send, steps, answerAt, streamEnd, blockAt, end };
  });
  // El último bloque se queda a la vista: es el remate del acto.
  return { turns, duration: cursor + 600 };
}

/* -------------------------------------------------------------- beats ---- */

export const VIDEO_MS = 60_000;

export type BeatId = "hook" | "brand" | "flow" | "checkout" | "hinge" | "chat" | "outro";

export type Beat = {
  id: BeatId;
  start: number;
  end: number;
  /** Cómo entra: fundido, círculo que se abre, empuje con profundidad, o nada. */
  enter: "fade" | "circle" | "push" | "none";
  enterDur: number;
  /** Cómo sale por sí misma (por encima de la que sigue). */
  exit?: "circleOut";
  exitDur?: number;
  /** Hasta cuándo sigue montada (para quedar debajo de la que entra). */
  until: number;
  /** Escala del reloj local: 1 = tiempo real. Sólo el chat puede ir < 1. */
  factor: number;
};

/** Lo que dura cada escena a velocidad natural. El chat se mide; el cierre absorbe el resto. */
const FIXED: { id: BeatId; dur: number; enter: Beat["enter"]; enterDur: number; exit?: "circleOut"; exitDur?: number }[] = [
  // 6,8 s: el círculo de la marca se abre mientras las ventanas todavía vuelan.
  { id: "hook", dur: 6800, enter: "fade", enterDur: 500 },
  { id: "brand", dur: 6200, enter: "circle", enterDur: 800 },
  { id: "flow", dur: 14200, enter: "push", enterDur: 700 },
  { id: "checkout", dur: 4600, enter: "push", enterDur: 650 },
  { id: "hinge", dur: 3000, enter: "circle", enterDur: 520, exit: "circleOut", exitDur: 520 },
];
const OUTRO_MIN = 4200;

export function buildBeats(chatDuration: number): Beat[] {
  const fixed = FIXED.reduce((s, b) => s + b.dur, 0);
  // Si el chat no entra en lo que queda (idiomas largos), se aprieta apenas:
  // el tipeo y las pausas van un poco más rápido, nunca se corta una frase.
  const budget = VIDEO_MS - fixed - OUTRO_MIN;
  const chatFactor = Math.min(1, budget / chatDuration);
  const chatDur = chatDuration * chatFactor;

  const raw = [
    ...FIXED.map((b) => ({ ...b, factor: 1 })),
    { id: "chat" as BeatId, dur: chatDur, enter: "none" as const, enterDur: 0, factor: chatFactor },
    { id: "outro" as BeatId, dur: VIDEO_MS - fixed - chatDur, enter: "push" as const, enterDur: 700, factor: 1 },
  ];
  let cursor = 0;
  const beats: Beat[] = raw.map((b) => {
    const beat: Beat = {
      id: b.id,
      start: cursor,
      end: cursor + b.dur,
      until: cursor + b.dur,
      enter: b.enter,
      enterDur: b.enterDur,
      exit: "exit" in b ? b.exit : undefined,
      exitDur: "exitDur" in b ? b.exitDur : undefined,
      factor: b.factor,
    };
    cursor += b.dur;
    return beat;
  });
  beats[beats.length - 1].end = VIDEO_MS;
  beats.forEach((b, i) => {
    const next = beats[i + 1];
    b.until = b.end + Math.max(b.exitDur ?? 0, next ? next.enterDur : 0);
  });
  return beats;
}
