/**
 * El catálogo de planes, tal como lo publica el panel interno.
 *
 * Vive aparte porque lo consumen dos componentes —las tarjetas de precio y la
 * comparativa— y las dos tienen que estar mirando exactamente lo mismo. Si una
 * leyera de otro lado, la tabla y las tarjetas se podrían contradecir en la
 * misma página, que es el peor lugar posible para contradecirse.
 */

export interface MktPlanProduct {
  key: string;
  name: string;
  description: string;
}

export interface MktPlan {
  planId: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: { amount: number; currency: string; period: string };
  free: boolean;
  freeDurationDays: number | null;
  trialDays: number;
  limits: {
    maxProperties?: number | null;
    maxUsers?: number | null;
    iaMonthlyCredits?: number | null;
  };
  highlighted?: boolean;
  order?: number;
  products: MktPlanProduct[];
}

const API =
  process.env.NEXT_PUBLIC_INTERNAL_API_URL?.trim() || "http://localhost:8600";

export async function fetchPlans(): Promise<MktPlan[]> {
  try {
    const res = await fetch(`${API}/public/plans`, {
      // Se revalida cada 5 minutos: un cambio de precio tiene que llegar al
      // sitio sin un deploy, pero tampoco hace falta pegarle al API en cada
      // visita de una página que cambia una vez por trimestre.
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const body = (await res.json()) as { data?: MktPlan[] };
    return body.data ?? [];
  } catch {
    // Un corte del API interno no puede tumbar la página: la sección se omite
    // y el resto sigue en pie.
    return [];
  }
}
