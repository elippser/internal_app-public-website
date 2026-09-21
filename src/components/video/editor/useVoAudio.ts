"use client";

import { useCallback, useEffect, useRef } from "react";
import { gainAt, placed, rateOf, type Placed, type Track } from "./model";

/**
 * El sonido del montaje, atado al reloj del video.
 *
 * El video manda y el audio lo sigue, no al revés: el reloj del editor es el
 * mismo `requestAnimationFrame` del reproductor, así que la imagen nunca espera
 * a que un archivo termine de cargar. En cada cuadro se le pregunta a cada clip
 * si le toca sonar, y si está sonando corrido se lo acomoda.
 *
 * El acomodo va con tolerancia (`DRIFT`) a propósito: `currentTime` en un
 * `<audio>` que está reproduciendo provoca un resincronizado del decodificador
 * y se escucha como un clic. Corregir cada cuadro sería un chisporroteo
 * constante; corregir sólo cuando se pasó de 120 ms es inaudible y alcanza de
 * sobra para montar una locución.
 */

/** Cuánto se tolera que el audio se corra del reloj antes de acomodarlo, en s. */
const DRIFT = 0.12;

/**
 * La URL con la que se pide un archivo, con su versión pegada.
 *
 * El `src` guardado en la base no cambia cuando se reemplaza el archivo por
 * otro del mismo nombre, así que sin esto el navegador sigue sirviendo el viejo
 * de su caché. La versión es la marca de tiempo del archivo (la da
 * `GET /api/video/vo/audio?srcs=...`): cambia sola cuando el archivo cambia, y
 * no cambia cuando no, así que la caché sigue sirviendo para lo que sirve.
 */
export function urlDe(src: string, versiones: Map<string, number | null>): string {
  const v = versiones.get(src);
  return v ? `${src}?v=${v}` : src;
}

export function useVoAudio(tracks: Track[], versiones: Map<string, number | null>) {
  const els = useRef(new Map<string, HTMLAudioElement>());

  // Un elemento por PISTA y archivo, no por clip.
  //
  // Dentro de una pista los clips nunca se solapan —el modelo es una fila de
  // piezas pegadas, cada una arranca donde termina la anterior—, así que una
  // sola cabeza de lectura alcanza para todos los fragmentos de un mismo
  // archivo en esa pista. Con uno por clip, una locución cortada en diecisiete
  // pedazos abría diecisiete reproductores del MISMO mp3 —diecisiete
  // decodificadores para un archivo— y el audio se entrecortaba. El solape sólo
  // puede darse entre pistas distintas, y eso lo cubre la clave.
  useEffect(() => {
    const map = els.current;
    const vivos = new Set<string>();
    for (const track of tracks) {
      for (const clip of track.clips) {
        if (clip.kind !== "audio" || !clip.src) continue;
        const clave = `${track.trackId}|${clip.src}`;
        vivos.add(clave);
        const url = urlDe(clip.src, versiones);
        const previo = map.get(clave);
        if (previo && previo.getAttribute("src") === url) continue;
        previo?.pause();
        const el = new Audio(url);
        el.preload = "auto";
        map.set(clave, el);
      }
    }
    for (const [id, el] of map) {
      if (vivos.has(id)) continue;
      el.pause();
      map.delete(id);
    }
  }, [tracks, versiones]);

  const stopAll = useCallback(() => {
    for (const el of els.current.values()) if (!el.paused) el.pause();
  }, []);

  useEffect(() => stopAll, [stopAll]);

  /** Se llama una vez por cuadro con el instante del video. */
  const sync = useCallback(
    (t: number, playing: boolean) => {
      if (!playing) {
        stopAll();
        return;
      }
      for (const track of tracks) {
        // Primero: qué fragmento suena en este instante, por archivo. Dentro de
        // una pista no puede haber dos a la vez —las piezas van pegadas, no
        // superpuestas—, así que a lo sumo hay uno por archivo.
        const activo = new Map<string, Placed>();
        for (const p of placed(track)) {
          if (p.clip.kind !== "audio" || !p.clip.src) continue;
          // Dentro del clip, y dentro de la parte que TIENE sonido: un clip
          // puede ocupar más de lo que le queda de archivo (cola muda).
          const conSonido = p.clip.srcDur
            ? Math.max(0, p.clip.srcDur - p.clip.trim) / rateOf(p.clip)
            : Infinity;
          if (t >= p.start && t < Math.min(p.end, p.start + conSonido)) {
            activo.set(`${track.trackId}|${p.clip.src}`, p);
          }
        }

        // Y recién ahora, UNA decisión por reproductor. Decidir recorriendo los
        // clips era lo que entrecortaba todo: con un elemento compartido por
        // pista, el fragmento que tocaba lo reproducía y los otros dieciséis lo
        // pausaban, en cada cuadro — medido, 497 play y 496 pause en quince
        // segundos.
        for (const [clave, el] of els.current) {
          if (!clave.startsWith(`${track.trackId}|`)) continue;
          const p = activo.get(clave);
          if (!p) {
            if (!el.paused) el.pause();
            continue;
          }

          // El volumen se recalcula EN CADA CUADRO porque puede venir de una
          // curva: el fader por la ganancia de la curva en este instante. Es lo
          // que hace el fundido cruzado sin tocar los archivos.
          el.volume = gainAt(track, t);
          const rate = rateOf(p.clip);
          if (el.playbackRate !== rate) {
            el.playbackRate = rate;
            // Sin esto un clip estirado suena a ardilla. Los navegadores lo
            // traen en true, pero un `playbackRate` puesto a mano lo apaga en
            // algunos, así que se afirma.
            el.preservesPitch = true;
          }
          // Lo que se avanzó en el ARCHIVO no es lo que se avanzó en la pista:
          // va multiplicado por la velocidad.
          const target = (p.clip.trim + (t - p.start) * rate) / 1000;
          if (el.paused) {
            el.currentTime = target;
            // El rechazo es normal: pausar mientras la promesa está en vuelo la
            // corta, y en el cuadro siguiente se vuelve a intentar.
            void el.play().catch(() => {});
          } else if (Math.abs(el.currentTime - target) > DRIFT) {
            el.currentTime = target;
          }
        }
      }
    },
    [tracks, stopAll],
  );

  return { sync, stopAll };
}

/** Cuánto dura, en ms, un audio que ya está servido. 0 si no se puede leer. */
export function readDurationFrom(url: string): Promise<number> {
  return new Promise((resolve) => {
    const el = new Audio();
    el.preload = "metadata";
    el.onloadedmetadata = () => resolve(Number.isFinite(el.duration) ? Math.round(el.duration * 1000) : 0);
    el.onerror = () => resolve(0);
    el.src = url;
  });
}

/**
 * Cuánto dura un archivo de audio, en ms, sin subirlo a ningún lado.
 *
 * Hace falta antes de dibujar el clip en la pista: el ancho de la pieza ES su
 * duración, así que sin este dato no hay nada que mostrar. Se mide sobre un
 * blob local; el `src` definitivo llega después, cuando el archivo terminó de
 * subir.
 */
export function readDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const el = new Audio();
    const done = (ms: number) => {
      URL.revokeObjectURL(url);
      resolve(ms);
    };
    el.preload = "metadata";
    el.onloadedmetadata = () => {
      // Un archivo sin cabecera de duración da Infinity: mejor 0 que un clip de
      // ancho infinito que rompe la pista entera.
      const d = el.duration;
      done(Number.isFinite(d) ? Math.round(d * 1000) : 0);
    };
    el.onerror = () => done(0);
    el.src = url;
  });
}
