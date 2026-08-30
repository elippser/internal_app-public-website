import type { Metadata } from "next";
import PlansMkt from "@/components/plans/PlansMkt";
import { readLocale } from "@/i18n/params";
import { getDictionary } from "@/i18n/get-dictionary";

export const dynamic = "force-dynamic";

/**
 * Vista previa aislada de `<PlansMkt/>`.
 *
 * Es lo que se embebe en el editor de código del panel interno (Planes →
 * Código → Módulo del sitio): la sección sola, sin el resto de la página, para
 * verla mientras se la edita.
 *
 * El panel apunta a `/preview/plans` sin idioma (`previewPath` en
 * `planscode.service.ts`); el middleware lo redirige al idioma que
 * corresponda, así que el embed sigue funcionando sin tocar el panel.
 *
 * `noindex` porque no es una página del sitio: es la misma sección que ya vive
 * dentro de una página real, y dejar que Google indexe las dos sería
 * contenido duplicado contra nosotros mismos.
 */
export const metadata: Metadata = {
  title: "Preview · Plans",
  robots: { index: false, follow: false },
};

export default async function PlansPreviewPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return <PlansMkt dict={dict} />;
}
