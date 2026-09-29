import type { Metadata } from "next";
import PropsVideo from "@/components/video-props/PropsVideo";
import type { PropsVideoDict } from "@/components/video-props/timeline";
import { LOCALES, LOCALE_SHORT } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { publicPath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";
import { videoPage } from "@/i18n/video-neutral-es";
import { getVideoVoiceover } from "@/lib/videoVo";

/**
 * El video de Propiedades, como página: la misma técnica que `/video` y
 * `/video/ia`, con el contenido de `/producto/propiedades`. Con la voz y la música del montaje del panel.
 *
 * Parámetros: `?t=12.5` arranca en ese segundo, `?autoplay=1` y `?loop=1`.
 */

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return {
    ...pageMetadata(lang, "/video/propiedades", dict.videoProps.meta.title, dict.videoProps.meta.description),
    // Pieza de marketing que se enlaza a mano: fuera del índice.
    robots: { index: false, follow: false },
  };
}

export default async function VideoPropiedadesPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const v: PropsVideoDict = {
    hud: dict.video.hud,
    meta: dict.videoProps.meta,
    x: dict.videoProps,
    page: videoPage(lang, "propiedades", dict.propiedades),
    base: dict.video,
  };
  const langs = LOCALES.map((l) => ({ locale: l, short: LOCALE_SHORT[l], href: publicPath(l, "videoPropiedades") }));
  // El montaje de voz y música (Marketing › Videos del panel).
  const vo = await getVideoVoiceover("propiedades", lang);
  return <PropsVideo locale={lang} v={v} langs={langs} vo={vo} />;
}
