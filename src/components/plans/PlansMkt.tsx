import type { Dictionary } from "@/i18n/dict/es";
import SamePageLink from "@/components/site/SamePageLink";
import { fetchPlans, type MktPlan } from "./plansApi";
import styles from "./PlansMkt.module.css";

/**
 * `<PlansMkt/>` — la sección de precios del sitio público de bookfer.
 *
 * Se pone en cualquier página del sitio (la home, `/precios`, una landing) y se
 * dibuja sola: los planes salen del mismo catálogo que alimenta la pantalla de
 * elección del PMS, así que lo que se publica acá y lo que se le cobra al hotel
 * no se pueden contradecir. Editar un precio en Planes → el sitio lo muestra
 * sin tocar código.
 *
 * Es un Server Component a propósito: la llamada al catálogo se hace en el
 * servidor de Next, así que no hay CORS que configurar en el API interno, el
 * HTML sale con los precios adentro (que es lo que indexa Google) y nadie
 * descarga JavaScript para leer una tabla de precios.
 *
 * Los NOMBRES de los planes y de los productos vienen del catálogo y no del
 * diccionario: son datos, no copy. Lo que sí se traduce es todo lo que rodea
 * —"por mes", "días de prueba", los topes—, que es lo que está acá abajo.
 *
 * Su vista previa aislada vive en `/[lang]/preview/plans`.
 */

/* El tipo y la llamada viven en `plansApi.ts`: los comparte con la tabla
   comparativa de `/precios`, que tiene que estar mirando lo mismo. */
export type { MktPlan, MktPlanProduct } from "./plansApi";

/** Reemplaza `{n}` en una plantilla del diccionario. */
function fill(template: string, n: number | string): string {
  return template.replace("{n}", String(n));
}

/**
 * Los topes del plan, en el idioma correcto y con el singular donde va.
 * `null` en el catálogo significa "sin límite", y el 1 en singular: "Hasta 1
 * propiedades" es el detalle que hace que una página de precios parezca a
 * medio terminar.
 */
function limitChip(
  value: number | null | undefined,
  one: string,
  many: string,
  none: string,
): string {
  if (value === null || value === undefined) return none;
  return fill(value === 1 ? one : many, value);
}

function priceLabel(
  plan: MktPlan,
  d: Dictionary["plans"],
): { amount: string; period: string } {
  if (plan.free) {
    return {
      amount: d.free,
      period: plan.freeDurationDays ? fill(d.freeFor, plan.freeDurationDays) : "",
    };
  }
  const period =
    plan.price.period === "yearly"
      ? d.perYear
      : plan.price.period === "one_time"
        ? d.oneTime
        : d.perMonth;
  return {
    amount: `${plan.price.currency} ${plan.price.amount.toLocaleString("es-AR")}`,
    period,
  };
}

interface Props {
  dict: Dictionary;
  /** Encabezado de la sección. Vacío = sin encabezado. */
  title?: string;
  subtitle?: string;
  /** A dónde lleva el botón de cada plan. Sin valor no lleva a ningún lado. */
  ctaHref?: string;
  /** Planes ya resueltos. Si no vienen, el componente los busca solo. */
  plans?: MktPlan[];
  /** Nivel del nombre de cada plan. En /precios el componente va pegado al
      h1 y sin `title`, así que el nombre tiene que ser h2 — con el h3 por
      defecto el outline salta de nivel (falla heading-order de axe). */
  planHeading?: "h2" | "h3";
}

export default async function PlansMkt({
  dict,
  title = "",
  subtitle = "",
  ctaHref,
  plans: given,
  planHeading: PlanHeading = "h3",
}: Props) {
  const d = dict.plans;
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
            const { amount, period } = priceLabel(plan, d);
            const ctaClass = [styles.cta, plan.highlighted ? "" : styles.ctaGhost]
              .filter(Boolean)
              .join(" ");
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
                {plan.highlighted && <span className={styles.ribbon}>{d.ribbon}</span>}

                <PlanHeading className={styles.planName}>{plan.name}</PlanHeading>
                <p className={styles.planTagline}>{plan.tagline || plan.description}</p>

                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>{amount}</span>
                  <span className={styles.pricePeriod}>{period}</span>
                </div>
                <div className={styles.priceNote}>
                  {plan.trialDays > 0 ? fill(d.trial, plan.trialDays) : " "}
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

                <div className={styles.limits}>
                  <span className={styles.limitChip}>
                    {limitChip(
                      plan.limits?.maxProperties,
                      d.upToProperty,
                      d.upToProperties,
                      d.noPropertyLimit,
                    )}
                  </span>
                  <span className={styles.limitChip}>
                    {limitChip(
                      plan.limits?.maxUsers,
                      d.upToUser,
                      d.upToUsers,
                      d.noUserLimit,
                    )}
                  </span>
                </div>

                {ctaHref ? (
                  <a href={ctaHref} className={ctaClass}>
                    {d.cta}
                  </a>
                ) : (
                  <SamePageLink className={ctaClass}>{d.cta}</SamePageLink>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
