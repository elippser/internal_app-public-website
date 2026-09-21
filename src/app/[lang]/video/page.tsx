import type { Metadata } from "next";
import VideoRoute from "@/components/video/VideoRoute";
import { getVoiceover } from "@/lib/videoVo";
import { LOCALES, LOCALE_SHORT } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { publicPath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";

/**
 * El video de portada, como página.
 *
 * No es un archivo de video: es la línea de tiempo en HTML (`HeroVideo`) que
 * se reproduce sola sobre un escenario de 16:9, con las pantallas del sistema
 * recicladas. Lo único que cambia por idioma son los textos, que salen del
 * diccionario como el resto del sitio; por eso hay un `/video` por idioma.
 *
 * Con `?edit=1` la misma página abre la mesa de montaje de la voz en off:
 * el video a 40 vh, el guion abajo como subtítulo y las pistas de audio. Lo que
 * se monta ahí se guarda en la base (ver `components/video/editor/`).
 *
 * Se ve como un reproductor: arranca en pausa con el botón de play, y abajo
 * tiene play/pausa, reinicio, la barra de tiempo (se puede arrastrar), el
 * idioma y pantalla completa. Teclado: espacio o K reproduce/pausa, F pantalla
 * completa, R reinicia, flechas saltan de escena. Parámetros: `?t=12.5`
 * arranca en ese segundo, `?autoplay=1` y `?loop=1`.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    ...pageMetadata(lang, "/video", dict.video.meta.title, dict.video.meta.description),
    // Pieza de marketing que se enlaza a mano: fuera del índice.
    robots: { index: false, follow: false },
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  // El montaje de la voz en off, leído en el servidor y con revalidación: viaja
  // en el HTML y la página sigue siendo estática.
  const vo = await getVoiceover(lang);
  const langs = LOCALES.map((l) => ({
    locale: l,
    short: LOCALE_SHORT[l],
    href: publicPath(l, "video"),
  }));

  return <VideoRoute locale={lang} v={dict.video} langs={langs} vo={vo} />;
}
