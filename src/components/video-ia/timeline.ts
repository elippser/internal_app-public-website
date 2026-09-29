import type { Dictionary } from "@/i18n/dict/es";
import { STREAM_MS, planChat, typingOffsets } from "../video/timeline";

/**
 * El tiempo del video de Roombir IA (`/[lang]/video/ia`).
 *
 * Mismo contrato que el video de portada (`components/video/timeline.ts`):
 * cada escena recibe su tiempo local `lt` en ms y todo lo que se mueve es una
 * función pura de ese número. Pausar congela, saltar es exacto, una captura en
 * el milisegundo T es reproducible.
 *
 * Es un video aparte a propósito: no toca ni una línea del de portada. De allá
 * IMPORTA las curvas, los efectos (`video/fx.tsx`) y las copias de la UI real
 * (`video/pms/*`), y acá tiene su propio reparto de beats y sus escenas.
 *
 * El contenido sale de la página `/producto/ia` (`dict.ia`): los titulares son
 * los mismos del sitio, así el video presenta exactamente lo que la página
 * promete. Lo que la página no tiene —los turnos del chat, las fuentes, el
 * plan— vive en `dict.videoIa`. No lleva voz ni música.
 */

export type IaVideoDict = {
  /** Los controles del reproductor: los mismos del video de portada. */
  hud: Dictionary["video"]["hud"];
  meta: { title: string; description: string };
  /** Lo propio del video. */
  x: Dictionary["videoIa"];
  /** La página del producto: titulares y pedidos. */
  ia: Dictionary["ia"];
  /** Las etiquetas de la UI real (cascarón del PMS, estado turístico, estados). */
  base: Dictionary["video"];
};

export type IaBeatId =
  | "hinge"
  | "chat"
  | "tabs"
  | "hero"
  | "meet"
  | "asks"
  | "demo"
  | "dossier"
  | "versus"
  | "goal"
  | "perms"
  | "talk"
  | "stats"
  | "end";

export type IaBeat = {
  id: IaBeatId;
  start: number;
  end: number;
  /** Cuánto antes de `start` se monta. */
  preroll: number;
  /** Se queda montada hasta acá (cruces). */
  until: number;
  enter: "fade" | "none";
  enterDur: number;
  /** Cuánto se estiró la escena en el montaje (1 = natural). */
  escala?: number;
};

type Fixed = { id: IaBeatId; dur: number; enter?: "fade" | "none"; enterDur?: number; preroll?: number; tail?: number };

/* ------------------------------------------------------- el tutorial ---- */

type Demo = Dictionary["videoIa"]["demo"];

/** Un turno del asistente: pasos, respuesta que se escribe, bloque y aire para leer. */
export type IaTurnPlan = {
  send: number;
  steps: { at: number; done: number }[];
  answerAt: number;
  streamEnd: number;
  blockAt: number;
  end: number;
};

const THINK = 450;
/**
 * De que termina el tipeo al clic en enviar. Adentro: ~600 ms de cámara quieta
 * sobre la frase (para leerla), ~800 de cámara abriéndose a la píldora entera y
 * el viaje del puntero al botón. Con 600 la cámara salía al botón apenas
 * terminaba la última letra y el pedido no se llegaba a leer.
 */
const READ = 1700;

function turnAt(send: number, steps: number, answer: string, hold: number): IaTurnPlan {
  let at = send + THINK;
  const st = Array.from({ length: steps }, () => {
    const s = { at, done: at + 300 };
    at += 400;
    return s;
  });
  const answerAt = st[st.length - 1].done + 120;
  const streamEnd = answerAt + answer.length * STREAM_MS;
  const blockAt = answerAt + 180;
  return { send, steps: st, answerAt, streamEnd, blockAt, end: Math.max(streamEnd, blockAt + 300) + hold };
}

const typed = (text: string, start: number) => {
  const offsets = typingOffsets(text);
  return { start, offsets, end: start + offsets[offsets.length - 1] };
};

/**
 * El tutorial de la escena 5, en ms desde que entra: cuatro funciones del chat
 * mostradas una por una con un puntero que las opera y la cámara encima.
 * Todo sale del largo real de cada frase, así en alemán se estira solo.
 *
 * 1. Adjuntar: clic en el clip, se abre el menú, clic en PDF, el archivo se
 *    procesa y queda en el compositor; se escribe el pedido y se manda.
 * 2. Informe: se escribe "¿qué canal me cancela más?" y vuelve con la tarjeta.
 * 3. Voz: clic en el micrófono, la banda de dictado, la transcripción entrando
 *    palabra por palabra, clic en stop y enviar.
 * 4. Estado turístico: la tarjeta en el chat, clic en "Ver más" y el panel
 *    lateral que se abre y se recorre de arriba abajo.
 */
export function planTutorial(d: Demo) {
  const cap1 = 500;
  const attachClick = 1800;
  const pdfClick = 2700;
  const attAt = 2780;
  const attReady = 3250;
  const tA = typed(d.attach.ask, 3500);
  const sendA = tA.end + READ;
  const A = turnAt(sendA, d.attach.steps.length, d.attach.answer, 1400);

  const cap2 = A.end;
  const tR = typed(d.report.ask, A.end + 900);
  const sendR = tR.end + READ;
  const R = turnAt(sendR, d.report.steps.length, d.report.answer, 2000);

  const cap3 = R.end;
  const micClick = R.end + 1000;
  const words = d.voice.heard.split(" ");
  const wordAt = (i: number) => micClick + 650 + i * 170;
  const stopClick = wordAt(words.length - 1) + 1000;
  const sendV = stopClick + 1100;
  const V = turnAt(sendV, d.voice.steps.length, d.voice.answer, 1400);

  const cap4 = V.end;
  const tT = typed(d.tourism.ask, V.end + 900);
  const sendT = tT.end + READ;
  const T = turnAt(sendT, d.tourism.steps.length, d.tourism.answer, 0);
  // La tarjeta se lee de cerca (~1,7 s) antes del clic en "Ver más".
  const cardAt = T.blockAt + 600;
  const moreClick = T.blockAt + 3400;
  const panelAt = moreClick + 120;
  // El panel se recorre en DOS bajadas con pausas de lectura: arriba (mapa,
  // alerta, eventos), a la mitad y al pie. De un solo tirón no se leía nada.
  // Pausas: 2,6 s arriba, 1,9 a la mitad y 1,8 al pie (el 23-09-2026 las de
  // 3,6 / 2,8 / 2,6 resultaron "tan lento").
  const SCROLL = 850;
  const scrollFrom = panelAt + 2600;
  const scrollMid = scrollFrom + SCROLL + 1900;
  const scrollTo = scrollMid + SCROLL;
  const end = scrollTo + 1800;

  return {
    cap: [cap1, cap2, cap3, cap4],
    attachClick, pdfClick, attAt, attReady, tA, sendA, A,
    tR, sendR, R,
    micClick, words, wordAt, stopClick, sendV, V,
    tT, sendT, T, cardAt, moreClick, panelAt, scrollFrom, scrollMid, scrollTo, SCROLL,
    end,
    duration: end + 450,
  };
}

export type TutorialPlan = ReturnType<typeof planTutorial>;

/* -------------------------------------------------------------- beats ---- */

/**
 * La duración natural de cada beat. El total es lo que suma: no hay tope, y
 * cada escena dura lo que su contenido necesita para leerse.
 */
function list(demoDuration: number, chatDuration: number): Fixed[] {
  return [
    // La intro son las escenas 17 y 18 del video de portada (la bisagra y el
    // chat), importadas tal cual. Reemplazaron a `tabs` y `hero` el 22-09-2026;
    // esas dos escenas siguen en `scenes.tsx` por si se quieren reponer.
    { id: "hinge", dur: 2100, enter: "fade", enterDur: 400 },
    { id: "chat", dur: chatDuration },
    { id: "meet", dur: 3200 },
    { id: "asks", dur: 6200 },
    { id: "demo", dur: demoDuration },
    { id: "dossier", dur: 7600 },
    { id: "versus", dur: 4800 },
    { id: "goal", dur: 8600 },
    { id: "perms", dur: 8000 },
    { id: "talk", dur: 6600 },
    { id: "stats", dur: 4400 },
    { id: "end", dur: 5600 },
  ];
}

export function buildIaBeats(v: IaVideoDict): IaBeat[] {
  const raw = list(planTutorial(v.x.demo).duration, planChat(v.base.chat).duration);
  let cursor = 0;
  const beats = raw.map((b) => {
    const beat: IaBeat = {
      id: b.id,
      start: cursor,
      end: cursor + b.dur,
      until: cursor + b.dur + (b.tail ?? 0),
      preroll: b.preroll ?? 0,
      enter: b.enter ?? "none",
      enterDur: b.enterDur ?? 0,
    };
    cursor += b.dur;
    return beat;
  });
  beats.forEach((b, i) => {
    const next = beats[i + 1];
    if (next) b.until = Math.max(b.until, b.end + next.enterDur);
  });
  return beats;
}
