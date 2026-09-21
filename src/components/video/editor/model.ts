/**
 * El montaje de la voz en off: pistas, clips y silencios.
 *
 * **Una pista es una fila de piezas pegadas, no un plano con coordenadas.**
 * Cada clip arranca donde termina el anterior y el silencio es una pieza más
 * (`kind: "gap"`) en vez de un hueco calculado. Esa es la diferencia que hace
 * todo lo demás: "meter un espacio en blanco" es insertar una pieza y lo que
 * viene atrás se corre solo, sin recalcular cincuenta posiciones ni dejar dos
 * clips encimados. Arrastrar un clip no lo manda a una coordenada: agranda o
 * achica el silencio que tiene delante, que es lo mismo visto desde el mouse.
 *
 * Todo lo de acá es puro: recibe el estado y devuelve uno nuevo. El estado
 * entero es lo que se guarda en la base (ver `mktvideo.model.ts` del API
 * interno); los bytes del audio no viajan por acá, sólo su `src`.
 */

export type ClipKind = "audio" | "gap";

export type Clip = {
  clipId: string;
  kind: ClipKind;
  /** Ruta pública del archivo. Vacía en los silencios. */
  src: string;
  name: string;
  /** Lo que ocupa en la pista, en ms. */
  dur: number;
  /** Desde dónde se lee el archivo, en ms. */
  trim: number;
  /** Largo real del archivo, en ms. Topea el estirado. */
  srcDur: number;
  /**
   * A qué velocidad se lee el archivo. 1 = natural.
   *
   * Es lo que hace que estirar un clip sea proporcional y no un recorte: al
   * llevarlo de 10 s a 8, en vez de tirar 2 s de audio se lee un 25 % más
   * rápido y se escucha lo mismo, más corto — igual que una escena que corre su
   * animación al 80 %. El archivo que consume un clip es `dur × rate`.
   */
  rate?: number;
};

/** La velocidad de un clip, con el valor de siempre para los que no la traen. */
export const rateOf = (c: Clip): number => (c.rate && c.rate > 0 ? c.rate : 1);
/** Cuánto archivo consume un clip, en ms. */
export const srcSpan = (c: Clip): number => c.dur * rateOf(c);
/** Fuera de esto se nota como un defecto y no como un ajuste. */
export const RATE_MIN = 0.5;
export const RATE_MAX = 2;

/**
 * Un punto de la curva de volumen: en qué instante y con qué ganancia.
 *
 * `at` va en ms desde el principio del VIDEO, no desde el clip: la curva es de
 * la pista y sigue estando donde está aunque los clips se muevan debajo. Es lo
 * que hace que un fundido cruzado se mantenga en su lugar.
 */
export type EnvPoint = { at: number; v: number };

export type Track = {
  trackId: string;
  name: string;
  muted: boolean;
  volume: number;
  clips: Clip[];
  /**
   * La curva de volumen de la pista, en orden. Vacía o ausente = plana en 1,
   * que es como se comportaba antes de que esto existiera.
   */
  env?: EnvPoint[];
};

/**
 * La ganancia de la curva es un MULTIPLICADOR del fader de la pista, no su
 * reemplazo: el fader sigue siendo el nivel general y la curva dice dónde se
 * agacha o se levanta.
 *
 * El tope decide dónde se dibuja la línea en reposo: la altura es
 * `1 − v / ENV_MAX`, así que con 1,25 el valor 1 cae **cerca del borde de
 * arriba** del carril. Es lo que se quiere, porque una curva de volumen se usa
 * casi siempre para BAJAR —agachar la música debajo de la voz— y conviene tener
 * todo el alto para abajo. Arriba queda un cuarto de margen para levantar algo
 * que quedó flojo, y lo justo para que la línea no se pegue al borde y se
 * pueda agarrar.
 */
export const ENV_MAX = 1.25;

/** La ganancia de la curva en un instante, interpolando entre los puntos. */
export function envAt(track: Track, t: number): number {
  const pts = track.env;
  if (!pts || pts.length === 0) return 1;
  if (t <= pts[0].at) return pts[0].v;
  const ultimo = pts[pts.length - 1];
  if (t >= ultimo.at) return ultimo.v;
  for (let i = 1; i < pts.length; i++) {
    const b = pts[i];
    if (t > b.at) continue;
    const a = pts[i - 1];
    const span = b.at - a.at;
    // Dos puntos en el mismo instante son un corte seco a propósito.
    return span <= 0 ? b.v : a.v + ((b.v - a.v) * (t - a.at)) / span;
  }
  return ultimo.v;
}

/** El volumen que suena: el fader por la curva, sin pasarse de 1. */
export function gainAt(track: Track, t: number): number {
  if (track.muted) return 0;
  return Math.max(0, Math.min(1, track.volume * envAt(track, t)));
}

const limpiarEnv = (pts: EnvPoint[]): EnvPoint[] =>
  pts
    .map((p) => ({ at: Math.max(0, Math.round(p.at)), v: Math.max(0, Math.min(ENV_MAX, p.v)) }))
    .sort((a, b) => a.at - b.at);

/**
 * Mete un punto en la curva.
 *
 * Si la curva estaba vacía no alcanza con agregar uno: una curva de un solo
 * punto es una línea plana a esa altura, o sea que tocar un punto cambiaría el
 * volumen de TODA la pista. Se siembra además un punto en 1 al principio, así
 * el primero que se pone hace lo que uno espera — un valle que arranca donde
 * estaba y baja hasta ahí.
 */
export function addEnvPoint(track: Track, at: number, v: number): Track {
  const previos = track.env?.length ? track.env : [{ at: 0, v: 1 }];
  return { ...track, env: limpiarEnv([...previos, { at, v }]) };
}

export function moveEnvPoint(track: Track, index: number, at: number, v: number): Track {
  if (!track.env?.[index]) return track;
  const env = track.env.map((p, i) => (i === index ? { at, v } : p));
  return { ...track, env: limpiarEnv(env) };
}

export function removeEnvPoint(track: Track, index: number): Track {
  if (!track.env?.[index]) return track;
  const env = track.env.filter((_, i) => i !== index);
  // Sin puntos la curva vuelve a ser plana en 1, no un hueco raro.
  return { ...track, env: env.length ? env : undefined };
}

export type Placed = { clip: Clip; index: number; start: number; end: number };

/** Ids cortos y estables. `crypto.randomUUID` no está en todos los contextos. */
export function newId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

export function emptyTrack(name: string): Track {
  return { trackId: newId("trk"), name, muted: false, volume: 1, clips: [] };
}

/** Dónde cae cada clip de una pista, en ms desde el principio del video. */
export function placed(track: Track): Placed[] {
  const out: Placed[] = [];
  let at = 0;
  track.clips.forEach((clip, index) => {
    out.push({ clip, index, start: at, end: at + clip.dur });
    at += clip.dur;
  });
  return out;
}

export function trackEnd(track: Track): number {
  return track.clips.reduce((acc, c) => acc + c.dur, 0);
}

export function gap(dur: number): Clip {
  return { clipId: newId("gap"), kind: "gap", src: "", name: "", dur, trim: 0, srcDur: 0 };
}

const withClips = (track: Track, clips: Clip[]): Track => ({ ...track, clips: prune(clips) });

/** Fuera los silencios de largo cero y los pegados entre sí (se suman). */
function prune(clips: Clip[]): Clip[] {
  const out: Clip[] = [];
  for (const c of clips) {
    if (c.kind === "gap") {
      if (c.dur <= 0) continue;
      const prev = out[out.length - 1];
      if (prev?.kind === "gap") {
        out[out.length - 1] = { ...prev, dur: prev.dur + c.dur };
        continue;
      }
    }
    out.push(c);
  }
  return out;
}

/**
 * En qué clip cae un instante. Devuelve `null` si está más allá del final de la
 * pista, que es donde hay que rellenar con silencio antes de poner nada.
 */
export function clipAt(track: Track, ms: number): Placed | null {
  return placed(track).find((p) => ms >= p.start && ms < p.end) ?? null;
}

/**
 * Suelta un audio en un instante.
 *
 * Si cae más allá del final de la pista, el hueco que queda se rellena con un
 * silencio: el clip tiene que arrancar donde lo soltaron, no pegado a lo
 * anterior. Si cae adentro de lo que ya hay, se mete en el límite más cercano y
 * empuja al resto — nunca parte un audio al medio.
 */
export function insertAudio(track: Track, clip: Clip, ms: number): Track {
  const end = trackEnd(track);
  if (ms >= end) {
    return withClips(track, [...track.clips, gap(ms - end), clip]);
  }
  const hit = clipAt(track, ms);
  if (!hit) return withClips(track, [...track.clips, clip]);

  const clips = [...track.clips];
  if (hit.clip.kind === "gap") {
    // Cae en el medio de un silencio: se parte en dos y el audio va al medio.
    const before = ms - hit.start;
    clips.splice(hit.index, 1, gap(before), clip, gap(hit.clip.dur - before));
    return withClips(track, clips);
  }
  // Cae sobre un audio: entra por el borde más cercano, sin cortarlo.
  const at = ms - hit.start < hit.clip.dur / 2 ? hit.index : hit.index + 1;
  clips.splice(at, 0, clip);
  return withClips(track, clips);
}

/**
 * Mete silencio en un instante: todo lo que estaba de ahí en adelante se corre
 * a la derecha. Si el instante cae adentro de un silencio, ese silencio crece;
 * si cae sobre un audio, el silencio entra ANTES de ese audio, porque partirlo
 * al medio no es lo que se pidió.
 */
export function insertGap(track: Track, ms: number, dur: number): Track {
  if (dur <= 0) return track;
  const end = trackEnd(track);
  if (ms >= end) return withClips(track, [...track.clips, gap(ms - end + dur)]);

  const hit = clipAt(track, ms);
  if (!hit) return withClips(track, [...track.clips, gap(dur)]);

  const clips = [...track.clips];
  if (hit.clip.kind === "gap") {
    clips[hit.index] = { ...hit.clip, dur: hit.clip.dur + dur };
    return withClips(track, clips);
  }
  clips.splice(hit.index, 0, gap(dur));
  return withClips(track, clips);
}

/**
 * Lleva un clip a otra pista, al instante que se le diga.
 *
 * Es una operación sobre el MONTAJE entero y no sobre una pista, porque toca
 * dos: sale de una y entra en la otra. Entrar usa `insertAudio`, así que se
 * banca todo lo de siempre —rellena con silencio si cae más allá del final, y
 * si cae encima de otro audio entra por el borde más cercano sin partirlo—.
 *
 * Un silencio no viaja: es la ausencia de sonido de SU pista, y mudarlo a otra
 * no quiere decir nada. Si el destino es la misma pista, esto es simplemente
 * correrlo.
 */
export function moveClipToTrack(
  tracks: Track[],
  fromTrackId: string,
  clipId: string,
  toTrackId: string,
  ms: number,
): Track[] {
  const origen = tracks.find((t) => t.trackId === fromTrackId);
  const clip = origen?.clips.find((c) => c.clipId === clipId);
  if (!origen || !clip) return tracks;
  if (fromTrackId === toTrackId || clip.kind === "gap") {
    return tracks.map((t) => (t.trackId === fromTrackId ? setClipStart(t, clipId, ms) : t));
  }
  if (!tracks.some((t) => t.trackId === toTrackId)) return tracks;

  return tracks.map((t) => {
    if (t.trackId === fromTrackId) return removeClip(t, clipId);
    if (t.trackId === toTrackId) return insertAudio(t, clip, Math.max(0, Math.round(ms)));
    return t;
  });
}

/** Cambia una pista de lugar en la lista. El orden es el que se ve y el que se guarda. */
export function moveTrack(tracks: Track[], from: number, to: number): Track[] {
  if (from === to || from < 0 || from >= tracks.length) return tracks;
  const next = [...tracks];
  const [pista] = next.splice(from, 1);
  next.splice(Math.max(0, Math.min(next.length, to)), 0, pista);
  return next;
}

/** Lo más corto que puede quedar una pieza al partirla, en ms. */
const MIN_PIEZA = 40;

/**
 * Parte un clip en dos por un instante, en la misma pista.
 *
 * Los dos trozos siguen pegados —entre ellos no queda nada—, así que el corte
 * por sí solo no cambia cómo suena: lo que habilita es correr el segundo trozo
 * y que aparezca un silencio en el medio, que es para lo que se corta.
 *
 * El truco está en `trim`: el segundo trozo apunta al MISMO archivo pero empieza
 * a leerlo más adentro. Por eso no hace falta tocar bytes ni subir nada nuevo.
 *
 * Un silencio no se parte: dos silencios pegados son un silencio (los funde
 * `prune`), así que cortarlo no haría nada.
 */
export function splitClip(track: Track, clipId: string, ms: number): Track {
  const hit = placed(track).find((p) => p.clip.clipId === clipId);
  if (!hit || hit.clip.kind !== "audio") return track;

  const antes = Math.round(ms - hit.start);
  const despues = hit.clip.dur - antes;
  // Un corte pegado a un borde no parte nada: dejaría un trozo de cero.
  if (antes < MIN_PIEZA || despues < MIN_PIEZA) return track;

  const clips = [...track.clips];
  clips.splice(
    hit.index,
    1,
    { ...hit.clip, dur: antes },
    // El segundo trozo entra al archivo donde lo dejó el primero, y eso se mide
    // en ARCHIVO consumido, no en tiempo de pista: por eso va por la velocidad.
    { ...hit.clip, clipId: newId("aud"), dur: despues, trim: hit.clip.trim + Math.round(antes * rateOf(hit.clip)) },
  );
  return withClips(track, clips);
}

/**
 * Recorta un clip a la ventana `[desde, hasta)`: lo que queda afuera se va.
 *
 * **Lo que se tira se reemplaza por silencio, así la pista no cambia de largo.**
 * Es la decisión que importa: en un montaje sincronizado a mano, si recortar
 * corriera todo lo que viene atrás, arreglar un clip rompería los veinte
 * siguientes. Acá el recorte es local — lo de al lado se queda donde está — y
 * el hueco que deja se ve como lo que es, un silencio.
 *
 * Del archivo se lee más adentro (`trim`), por eso no hay que tocar bytes; y la
 * cuenta va por la velocidad, porque `trim` se mide en archivo consumido y no
 * en tiempo de pista.
 */
export function cropClip(track: Track, clipId: string, desde: number, hasta: number): Track {
  const hit = placed(track).find((p) => p.clip.clipId === clipId);
  if (!hit || hit.clip.kind !== "audio") return track;

  const a = Math.max(hit.start, Math.min(hit.end - MIN_PIEZA, Math.round(desde)));
  const b = Math.min(hit.end, Math.max(a + MIN_PIEZA, Math.round(hasta)));
  const cabeza = a - hit.start;
  const cola = hit.end - b;
  if (cabeza <= 0 && cola <= 0) return track;

  const recortado: Clip = {
    ...hit.clip,
    trim: hit.clip.trim + Math.round(cabeza * rateOf(hit.clip)),
    dur: b - a,
  };
  const clips = [...track.clips];
  clips.splice(hit.index, 1, gap(cabeza), recortado, gap(cola));
  return withClips(track, clips);
}

/** Si el corte por ese instante dejaría dos trozos de verdad. */
export function canSplit(track: Track, clipId: string, ms: number): boolean {
  const hit = placed(track).find((p) => p.clip.clipId === clipId);
  if (!hit || hit.clip.kind !== "audio") return false;
  return ms - hit.start >= MIN_PIEZA && hit.end - ms >= MIN_PIEZA;
}

/** Una copia del clip, pegada justo detrás del original. */
export function duplicateClip(track: Track, clipId: string): Track {
  const i = track.clips.findIndex((c) => c.clipId === clipId);
  if (i < 0) return track;
  const original = track.clips[i];
  const clips = [...track.clips];
  clips.splice(i + 1, 0, { ...original, clipId: newId(original.kind === "gap" ? "gap" : "aud") });
  return withClips(track, clips);
}

export function removeClip(track: Track, clipId: string): Track {
  return withClips(
    track,
    track.clips.filter((c) => c.clipId !== clipId),
  );
}

/**
 * Corre un clip a un instante nuevo estirando o comiéndose el silencio que
 * tiene delante. Hacia la derecha siempre se puede (se inventa el silencio si
 * no había); hacia la izquierda sólo hasta donde termina la pieza anterior, que
 * es lo que evita que dos audios se pisen.
 */
export function setClipStart(track: Track, clipId: string, ms: number): Track {
  const list = placed(track);
  const hit = list.find((p) => p.clip.clipId === clipId);
  if (!hit || hit.index === 0) {
    if (!hit) return track;
    // El primero de la pista: el silencio de delante no existe todavía.
    const at = Math.max(0, ms);
    return at <= 0 ? track : withClips(track, [gap(at), ...track.clips]);
  }

  const prev = list[hit.index - 1];
  const clips = [...track.clips];
  if (prev.clip.kind === "gap") {
    const floor = prev.start;
    const dur = Math.max(0, Math.round(ms) - floor);
    clips[prev.index] = { ...prev.clip, dur };
    return withClips(track, clips);
  }
  const dur = Math.max(0, Math.round(ms) - prev.end);
  if (dur === 0) return track;
  clips.splice(hit.index, 0, gap(dur));
  return withClips(track, clips);
}

/**
 * Cambia el largo de un clip (el borde derecho). En un silencio es libre; en un
 * audio se topea con lo que queda de archivo, porque estirar más allá del final
 * sería inventar sonido.
 */
export function setClipDur(track: Track, clipId: string, dur: number): Track {
  const clips = track.clips.map((c) => {
    if (c.clipId !== clipId) return c;
    // El tope es lo que queda de archivo A ESA velocidad.
    const top = c.kind === "audio" && c.srcDur > 0 ? (c.srcDur - c.trim) / rateOf(c) : Infinity;
    return { ...c, dur: Math.max(40, Math.min(top, Math.round(dur))) };
  });
  return withClips(track, clips);
}

/**
 * Pone al día los clips cuando el archivo que apuntan cambió de largo.
 *
 * Pasa seguido mientras se prueban locuciones: se reemplaza `voice-es.mp3` por
 * otra toma con el mismo nombre. El `src` no cambia, pero el `srcDur` guardado
 * es el del archivo viejo y el clip queda mintiendo en la pista.
 *
 * La regla, para no romper lo que se haya montado a mano: **si el clip era el
 * archivo entero** (sin recortar y ocupando todo su largo) sigue siendo el
 * archivo entero, y crece o se achica con él. Si ya se lo cortó o recortó, se
 * respeta el montaje y sólo se lo acota al archivo nuevo, que es lo único que
 * no se puede dejar pasar: un clip que pide más de lo que el archivo tiene
 * suena a silencio en la cola.
 */
export function retuneClips(
  tracks: Track[],
  real: Map<string, number>,
): { tracks: Track[]; cambios: string[] } {
  const cambios: string[] = [];
  const next = tracks.map((track) => ({
    ...track,
    clips: track.clips.map((c) => {
      if (c.kind !== "audio" || !c.src) return c;
      const ahora = real.get(c.src);
      if (!ahora || ahora === c.srcDur) return c;

      const entero = c.trim === 0 && srcSpan(c) === c.srcDur;
      const trim = Math.min(c.trim, Math.max(0, ahora - 40));
      const dur = entero
        ? Math.round(ahora / rateOf(c))
        : Math.max(40, Math.min(c.dur, (ahora - trim) / rateOf(c)));
      cambios.push(`${c.name || c.src}: ${clockMs(c.srcDur)} → ${clockMs(ahora)}`);
      return { ...c, srcDur: ahora, trim, dur };
    }),
  }));
  return { tracks: next, cambios };
}

/**
 * Estira o achica un clip **en proporción**: sigue sonando lo mismo, más rápido
 * o más lento.
 *
 * Es lo otro que se puede hacer con el borde derecho. Sin `shift` ese borde
 * RECORTA —que es lo que hace falta para la cama de música, un archivo de tres
 * minutos del que se usa minuto y medio—, y con `shift` estira, que es lo que
 * hace falta para que una locución entre justo en su escena.
 */
export function stretchClipDur(track: Track, clipId: string, dur: number): Track {
  const clips = track.clips.map((c) => {
    if (c.clipId !== clipId) return c;
    if (c.kind === "gap") return { ...c, dur: Math.max(40, Math.round(dur)) };
    const span = srcSpan(c);
    const next = Math.max(40, Math.round(dur));
    const rate = Math.min(RATE_MAX, Math.max(RATE_MIN, span / next));
    // Si la velocidad topeó, el largo se acomoda a ella: al revés quedaría
    // pidiendo audio que no existe o dejando una cola muda.
    return { ...c, dur: Math.round(span / rate), rate: Number(rate.toFixed(4)) };
  });
  return withClips(track, clips);
}

/** Lo que dura el montaje entero: la pista más larga. */
export function timelineEnd(tracks: Track[]): number {
  return tracks.reduce((acc, t) => Math.max(acc, trackEnd(t)), 0);
}

/** 21045 → "0:21.0". La regla del editor necesita las décimas. */
export function clockMs(ms: number): string {
  const sign = ms < 0 ? "-" : "";
  const abs = Math.abs(ms);
  const secs = Math.floor(abs / 1000);
  const tenths = Math.floor((abs % 1000) / 100);
  return `${sign}${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}.${tenths}`;
}
