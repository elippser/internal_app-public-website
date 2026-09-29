import type { Metadata } from "next";
import IaPlayer from "@/components/video-ia/IaPlayer";
import type { IaVideoDict } from "@/components/video-ia/timeline";
import { LOCALES, LOCALE_SHORT } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { publicPath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";
import { videoPage } from "@/i18n/video-neutral-es";
import { getVideoVoiceover } from "@/lib/videoVo";

/**
 * El video de Roombir IA, como página: la misma técnica que `/video` (una
 * línea de tiempo en HTML sobre un escenario de 16:9, con la UI real del
 * producto) y el contenido de `/producto/ia`. Mudo: sin voz ni música.
 *
 * Parámetros: `?t=12.5` arranca en ese segundo, `?autoplay=1` y `?loop=1`.
 */

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    ...pageMetadata(lang, "/video/ia", dict.videoIa.meta.title, dict.videoIa.meta.description),
    // Pieza de marketing que se enlaza a mano: fuera del índice.
    robots: { index: false, follow: false },
  };
}

export default async function VideoIaPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const v: IaVideoDict = {
    hud: dict.video.hud,
    meta: dict.videoIa.meta,
    x: dict.videoIa,
    ia: videoPage(lang, "ia", dict.ia),
    base: dict.video,
  };
  const langs = LOCALES.map((l) => ({ locale: l, short: LOCALE_SHORT[l], href: publicPath(l, "videoIa") }));
  // El montaje de voz y música (Marketing › Videos del panel).
  const vo = await getVideoVoiceover("ia", lang);
  return <IaPlayer locale={lang} v={v} langs={langs} vo={vo} />;
}
