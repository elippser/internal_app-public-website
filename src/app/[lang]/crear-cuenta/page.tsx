import type { Metadata } from "next";

import SignupForm from "@/components/signup/SignupForm";
import { Headline } from "@/components/site/RichText";
import { CheckList } from "@/components/site/Sections";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";
import { countryOptions, PRIORITY_CODES } from "@/lib/countries";
import { pageMetadata } from "@/lib/meta";
import styles from "./crear-cuenta.module.css";

/**
 * El alta.
 *
 * Es la unica puerta de entrada a roombir. Lo que se completa aca crea un lead
 * en el back-office y dispara un correo con un enlace de un solo uso: sin ese
 * enlace el `/register` del PMS no abre. Por eso el CTA "empezar gratis" de
 * todas las paginas del sitio termina en esta.
 *
 * La pagina es estatica salvo el POST del formulario, que va a
 * `/api/signup` — un route handler de este mismo sitio, no el API interno
 * (el porque esta escrito ahi).
 *
 * `noindex` a proposito: la pagina no aporta nada al buscador (es un
 * formulario), y no indexarla evita que compita con `/precios` por las
 * consultas de marca. Los enlaces internos siguen llevando gente igual.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const meta = pageMetadata(
    lang,
    "/crear-cuenta",
    dict.createAccount.meta.title,
    dict.createAccount.meta.description,
  );
  return { ...meta, robots: { index: false, follow: true } };
}

export default async function CrearCuentaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.createAccount;

  // Los paises se resuelven en el SERVIDOR y viajan como props: el orden
  // alfabetico depende del `Intl.Collator` del entorno y calcularlo de los dos
  // lados es la receta del error de hidratacion. Ver `lib/countries.ts`.
  const countries = countryOptions(lang);
  const priority = PRIORITY_CODES.map((code) =>
    countries.find((c) => c.code === code),
  ).filter((c): c is (typeof countries)[number] => Boolean(c));

  return (
    <section className={styles.wrap}>
      <div className="container container-wide">
        <div className={styles.grid}>
          {/* ---------------------------------------------------- la copia */}
          <div className={styles.aside}>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="h1" style={{ margin: "16px 0 18px" }}>
              <Headline text={t.title} />
            </h1>
            <p className="lead" style={{ marginBottom: 26 }}>
              {t.lead}
            </p>

            <CheckList items={t.checks} locale={lang} />

            {/* Los tres pasos. Estan a la vista porque el alta NO termina en
                este formulario: quien no entiende que el acceso llega por
                correo cierra la pestana y no vuelve. */}
            <ol className={styles.steps}>
              {t.steps.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <span>
                    <b className={styles.stepTitle}>{step.title}</b>
                    <span className={styles.stepText}>{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* --------------------------------------------------- el form -- */}
          <div className={styles.card}>
            <SignupForm
              locale={lang}
              t={t.form}
              countries={countries}
              priority={priority}
              turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
