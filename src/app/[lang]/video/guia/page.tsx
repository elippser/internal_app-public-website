import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuiaVideo from "@/components/video-guia/GuiaVideo";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { publicPath } from "@/i18n/routes";
import { pageMetadata } from "@/lib/meta";

/**
 * La guía de Roombir en video: todas las herramientas, paso a paso, sobre la
 * cuenta demo (Altos del Lago Lodge & Spa). Sólo en español: los datos y las
 * capturas son de la demo en castellano. Guion: `GUIA-VIDEO-GUION.md` (raíz).
 *
 * Parámetros: `?t=12.5` arranca en ese segundo, `?autoplay=1` y `?loop=1`.
 */

const TITLE = "Guía de Roombir, paso a paso";
const DESCRIPTION = "Todas las herramientas de Roombir, recorridas una por una con un hotel de demostración.";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await readLocale(params);
  return {
    ...pageMetadata(lang, "/video/guia", TITLE, DESCRIPTION),
    // Pieza que se enlaza a mano: fuera del índice.
    robots: { index: false, follow: false },
  };
}

export default async function VideoGuiaPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await readLocale(params);
  if (lang !== "es") notFound();
  const dict = await getDictionary(lang);
  const v = { hud: dict.video.hud, meta: { description: DESCRIPTION } };
  const langs = [{ locale: lang, short: "ES", href: publicPath(lang, "videoGuia") }];
  return <GuiaVideo locale={lang} v={v} langs={langs} />;
}
