import type { Metadata } from "next";
import PlansMkt from "@/components/plans/PlansMkt";

export const dynamic = "force-dynamic";

/**
 * Vista previa aislada de `<PlansMkt/>`.
 *
 * Es lo que se embebe en el editor de código del panel interno (Planes →
 * Código → Módulo del sitio): la sección sola, sin el resto de la página, para
 * verla mientras se la edita.
 *
 * `noindex` porque no es una página del sitio: es la misma sección que ya vive
 * dentro de una página real, y dejar que Google indexe las dos sería
 * contenido duplicado contra nosotros mismos.
 */
export const metadata: Metadata = {
  title: "Vista previa · Planes",
  robots: { index: false, follow: false },
};

export default function PlansPreviewPage() {
  return <PlansMkt />;
}
