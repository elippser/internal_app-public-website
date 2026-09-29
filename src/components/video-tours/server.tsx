import type { Metadata } from "next";
import { LOCALES, LOCALE_SHORT } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { ROUTES, publicPath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";
import { videoPage } from "@/i18n/video-neutral-es";
import { getVideoVoiceover } from "@/lib/videoVo";
import TourVideo from "./TourVideo";
import { PAGE_KEY, ROUTE_KEY, type TourDict, type TourKind } from "./types";

/**
 * La página de cada video de producto (`app/[lang]/video/<producto>/page.tsx`):
 * arma el diccionario del video en el servidor y lo pasa al reproductor.
 * Fuera del índice, como `/video`. Parámetros: `?t=12.5`, `?autoplay=1`, `?loop=1`.
 */
export function tourPage<K extends TourKind>(kind: K) {
  async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const lang = await readLocale(params);
    const dict = await getDictionary(lang);
    const meta = dict.videoTours[kind].meta;
    return {
      ...pageMetadata(lang, ROUTES[ROUTE_KEY[kind]].path, meta.title, meta.description),
      robots: { index: false, follow: false },
    };
  }

  async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const lang = await readLocale(params);
    const dict = await getDictionary(lang);
    const v = {
      hud: dict.video.hud,
      meta: dict.videoTours[kind].meta,
      x: dict.videoTours[kind],
      page: videoPage(lang, PAGE_KEY[kind], dict[PAGE_KEY[kind]]),
      base: dict.video,
      mui: dict.videoTours.motor.motorUi,
    } as unknown as TourDict<K>;
    const langs = LOCALES.map((l) => ({ locale: l, short: LOCALE_SHORT[l], href: publicPath(l, ROUTE_KEY[kind]) }));
    // El montaje de voz y música (Marketing › Videos del panel). El id del video es la clave de su página.
    const vo = await getVideoVoiceover(PAGE_KEY[kind], lang);
    return <TourVideo kind={kind} locale={lang} v={v as never} langs={langs} vo={vo} />;
  }

  return { generateMetadata, Page };
}
