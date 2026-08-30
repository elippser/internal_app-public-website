import type { Dictionary } from "@/i18n/dict/es";
import { fetchPlans, type MktPlan } from "./plansApi";
import styles from "./PlansMatrix.module.css";

/**
 * Comparativa de planes: productos en las filas, planes en las columnas.
 *
 * Sale del mismo catálogo que `<PlansMkt/>` y que la pantalla de elección de
 * plan del PMS. Si acá aparece un tilde donde no debería, **el problema está en
 * los datos del plan**, no en esta tabla: se edita en Planes del panel interno
 * y el sitio lo refleja sin deploy.
 *
 * Las filas son la unión de los productos de todos los planes, en el orden en
 * que los trae el plan más completo — así el orden es estable y no depende de
 * cuál de los planes se leyó primero.
 */

function Yes() {
  return (
    <span className={styles.yes}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="sr-only" />
    </span>
  );
}

/** El precio en la cabecera de la columna, abreviado. */
function planPrice(plan: MktPlan, d: Dictionary["plans"]): string {
  if (plan.free) return d.free;
  const suffix =
    plan.price.period === "yearly"
      ? d.perYear
      : plan.price.period === "one_time"
        ? d.oneTime
        : d.perMonth;
  return `${plan.price.currency} ${plan.price.amount} ${suffix}`;
}

function limitLabel(value: number | null | undefined, none: string): string {
  if (value === null || value === undefined) return none;
  return String(value);
}

function fill(template: string, n: number | string): string {
  return template.replace("{n}", String(n));
}

export default async function PlansMatrix({ dict }: { dict: Dictionary }) {
  const d = dict.plans.matrix;
  const plans = await fetchPlans();
  if (plans.length === 0) return null;

  const richest = [...plans].sort((a, b) => b.products.length - a.products.length)[0];
  const order = new Map(richest.products.map((p, i) => [p.key, i]));
  const all = new Map<string, { key: string; name: string; description: string }>();
  for (const plan of plans) {
    for (const product of plan.products) {
      if (!all.has(product.key)) all.set(product.key, product);
    }
  }
  const products = [...all.values()].sort(
    (a, b) => (order.get(a.key) ?? 999) - (order.get(b.key) ?? 999),
  );

  const has = (plan: MktPlan, key: string) =>
    plan.products.some((p) => p.key === key);

  return (
    <>
      <div className={styles.wrap}>
        <table className={styles.table}>
          <caption className="sr-only">
            {d.caption}
          </caption>
          <thead>
            <tr>
              <th scope="col" className={styles.colProduct}>
                {d.product}
              </th>
              {plans.map((plan) => (
                <th key={plan.planId} scope="col" className={styles.planHead}>
                  {plan.name}
                  <b>{planPrice(plan, dict.plans)}</b>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.key}>
                <th scope="row" className={styles.colProduct}>
                  {product.name}
                  <span>{product.description}</span>
                </th>
                {plans.map((plan) => (
                  <td key={plan.planId} className={styles.cell}>
                    {has(plan, product.key) ? (
                      <>
                        <Yes />
                        <span className="sr-only">{d.included}</span>
                      </>
                    ) : (
                      <span className={styles.no} aria-label={d.notIncluded}>
                        —
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            <tr className={styles.groupRow}>
              <th scope="colgroup" colSpan={plans.length + 1}>
                {d.limits}
              </th>
            </tr>
            <tr>
              <th scope="row" className={styles.colProduct}>
                {d.properties}
              </th>
              {plans.map((plan) => (
                <td key={plan.planId} className={styles.limit}>
                  {limitLabel(plan.limits?.maxProperties, dict.plans.noPropertyLimit)}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row" className={styles.colProduct}>
                {d.users}
              </th>
              {plans.map((plan) => (
                <td key={plan.planId} className={styles.limit}>
                  {limitLabel(plan.limits?.maxUsers, dict.plans.noUserLimit)}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row" className={styles.colProduct}>
                {d.trialRow}
              </th>
              {plans.map((plan) => (
                <td key={plan.planId} className={styles.limit}>
                  {plan.free
                    ? plan.freeDurationDays
                      ? fill(d.freeDays, plan.freeDurationDays)
                      : dict.plans.free
                    : plan.trialDays > 0
                      ? fill(d.days, plan.trialDays)
                      : "—"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className={styles.note}>{d.note}</p>
    </>
  );
}
