import styles from "./PlansMkt.module.css";

/**
 * `<PlansMkt/>` — la sección de precios del sitio público de bookfer.
 *
 * Se pone en cualquier página del sitio (`src/app/precios/page.tsx`, la home,
 * una landing) y se dibuja sola: los planes salen del mismo catálogo que
 * alimenta la pantalla de elección del PMS, así que lo que se publica acá y lo
 * que se le cobra al hotel no se pueden contradecir. Editar un precio en
 * Planes → el sitio lo muestra sin tocar código.
 *
 * Es un Server Component a propósito: la llamada al catálogo se hace en el
 * servidor de Next, así que no hay CORS que configurar en el API interno, el
 * HTML sale con los precios adentro (que es lo que indexa Google) y nadie
 * descarga JavaScript para leer una tabla de precios.
 *
 * Este archivo se edita desde el panel interno (Planes → Código), y su vista
 * previa vive en `/preview/plans`.
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

async function fetchPlans(): Promise<MktPlan[]> {
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
    // Un corte del API interno no puede tumbar la home del sitio público: la
    // sección se omite y el resto de la página sigue en pie.
    return [];
  }
}

function priceLabel(plan: MktPlan): { amount: string; period: string } {
  if (plan.free) {
    return {
      amount: "Gratis",
      period: plan.freeDurationDays ? `por ${plan.freeDurationDays} días` : "",
    };
  }
  const period =
    plan.price.period === "yearly"
      ? "por año"
      : plan.price.period === "one_time"
        ? "pago único"
        : "por mes";
  return {
    amount: `${plan.price.currency} ${plan.price.amount.toLocaleString("es-AR")}`,
    period,
  };
}

interface Props {
  /** Encabezado de la sección. Vacío = sin encabezado. */
  title?: string;
  subtitle?: string;
  /** A dónde lleva el botón de cada plan. */
  ctaHref?: string;
  ctaLabel?: string;
  /** Planes ya resueltos. Si no vienen, el componente los busca solo. */
  plans?: MktPlan[];
}

export default async function PlansMkt({
  title = "Un solo sistema, un solo precio",
  subtitle = "Todo lo que un alojamiento necesita para operar y vender, sin cinco proveedores.",
  ctaHref = "/registro",
  ctaLabel = "Empezar ahora",
  plans: given,
}: Props) {
  const plans = given ?? (await fetchPlans());
  if (plans.length === 0) return null;

  return (
    <section className={styles.section} id="planes">
      <div className={styles.inner}>
        {(title || subtitle) && (
          <header className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}

        <div className={styles.grid}>
          {plans.map((plan) => {
            const { amount, period } = priceLabel(plan);
            return (
              <article
                key={plan.planId}
                className={[
                  styles.card,
                  plan.highlighted ? styles.cardHighlighted : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {plan.highlighted && (
                  <span className={styles.ribbon}>El más elegido</span>
                )}

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>
                  {plan.tagline || plan.description}
                </p>

                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>{amount}</span>
                  <span className={styles.pricePeriod}>{period}</span>
                </div>
                <div className={styles.priceNote}>
                  {plan.trialDays > 0
                    ? `${plan.trialDays} días de prueba gratis`
                    : " "}
                </div>

                <ul className={styles.productList}>
                  {plan.products.map((product) => (
                    <li key={product.key} className={styles.productItem}>
                      <svg
                        className={styles.checkIcon}
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {product.name}
                    </li>
                  ))}
                </ul>

                {(plan.limits?.maxProperties || plan.limits?.maxUsers) && (
                  <div className={styles.limits}>
                    {plan.limits.maxProperties ? (
                      <span className={styles.limitChip}>
                        Hasta {plan.limits.maxProperties} propiedades
                      </span>
                    ) : null}
                    {plan.limits.maxUsers ? (
                      <span className={styles.limitChip}>
                        Hasta {plan.limits.maxUsers} usuarios
                      </span>
                    ) : null}
                  </div>
                )}

                <a
                  href={ctaHref}
                  className={[
                    styles.cta,
                    plan.highlighted ? "" : styles.ctaGhost,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
