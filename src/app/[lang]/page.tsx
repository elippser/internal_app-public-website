import type { Metadata } from "next";
import Link from "next/link";
import AdaptSection from "@/components/site/AdaptSection";
import Faq from "@/components/site/Faq";
import { Headline } from "@/components/site/RichText";
import SiteVideo from "@/components/site/SiteVideo";
import {
  ArrowRight,
  Commitments,
  CtaBand,
  DayCompare,
  HeroActions,
  SmartLink,
  Split,
  SplitHead,
} from "@/components/site/Sections";
import { AgentTurn } from "@/components/site/Vignettes";
import { PMS_PARTS, PRODUCT_HREFS, type ProductKey } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteUrl } from "@/lib/siteConfig";
import styles from "./home.module.css";
import "./monax.css";

/**
 * La home, para la etapa de captación de primeros clientes
 * (IDENTIDAD-COMUNICACIONAL-2026.md §4). Los bloques, en este orden:
 * titular → qué cambia → qué es (con el video de portada) → por qué Roombir
 * (`AdaptSection`) → los productos (la grilla) → un martes con y sin → compromisos → Roombir IA → preguntas → cierre. Orden del 29-09-2026, pedido del usuario.
 * Sin precios: la política comercial no está decidida
 * (28-09-2026) y el sitio no los menciona hasta que lo esté.
 *
 * El hero es el del template original (el headline animado: palabras
 * enmascaradas, el chip naranja y la píldora verde) con la tipografía del
 * sistema nuevo; todo su movimiento vive en `monax.css`, en CSS puro. El video
 * de portada ya no va debajo del titular: cierra la home, en el idioma de la
 * página y en la orientación del dispositivo.
 *
 * Lo que era específico de un producto (modelo dual, calendario del motor,
 * garantías, capa agéntica, revenue, marketing, alta) vive en la página de
 * ese producto: la home dice qué es y por qué confiar, no todo lo que hay.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  return pageMetadata(lang, "/", dict.site.title, dict.site.description);
}

/* El destello de cuatro puntas de la tarjeta del asistente en "qué cambia". */
function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c0 6 4 10 10 10-6 0-10 4-10 10 0-6-4-10-10-10 6 0 10-4 10-10Z" />
    </svg>
  );
}

/* Los productos, con su icono y el tinte que le toca. Roombir IA va primero
   y en doble ancho: es la capa que usa a los demás. El PMS también va en
   doble ancho: es el núcleo, y lista sus partes. */
const MODULE_ICONS: Record<ProductKey, React.ReactNode> = {
  ia: (
    <>
      <path d="M11 5c.5 3.9 3.1 6.5 7 7-3.9.5-6.5 3.1-7 7-.5-3.9-3.1-6.5-7-7 3.9-.5 6.5-3.1 7-7Z" />
      <path d="M18.5 3v3M17 4.5h3" />
    </>
  ),
  pms: (
    <>
      <path d="M3 20h18M5 20v-9l7-5 7 5v9" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  informes: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-5M12 16V7M17 16v-8" />
    </>
  ),
  revenue: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  marketing: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
};

const MODULE_ORDER: readonly { key: ProductKey; tint: string; wash: string; wide: boolean }[] = [
  { key: "ia", tint: "iconAmber", wash: "washAmber", wide: true },
  { key: "pms", tint: "iconGreen", wash: "washGreen", wide: true },
  { key: "informes", tint: "iconClay", wash: "washClay", wide: false },
  { key: "revenue", tint: "iconAmber", wash: "washAmber", wide: false },
  { key: "marketing", tint: "iconGreen", wash: "washGreen", wide: false },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.home;
  const v = dict.vignettes;
  const path = (href: string) => localePath(lang, href);

  return (
    <>
      {/* ------------------------------------------- hero (template GSAP) -- */}
      <div className="monax">
        <section className="hero">
          <p className="kicker">
            <b aria-hidden>/</b>
            {t.hero.kicker}
          </p>
          <h1 className="headline" id="headline">
            <div className="line line-1">
              <span className="word">
                <span>{t.hero.l1a}</span>
              </span>
              <span className="word">
                <span>{t.hero.l1b}</span>
              </span>
            </div>
            <div className="line line-2">
              <span className="inline-img" id="inlineImg"></span>
              <span className="word">
                <span>{t.hero.l2}</span>
              </span>
              <span className="idea-pill" id="ideaPill">
                <span className="txt">
                  {t.hero.pill.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
                <span className="leaf"></span>
              </span>
            </div>
            <div className="line line-3">
              <span className="word word-serif">
                <span>{t.hero.l3a}</span>
              </span>
              <span className="word word-serif">
                <span>{t.hero.l3b}</span>
              </span>
            </div>
          </h1>

          <p className="hero-lead">{t.hero.lead}</p>

          <div className="monax-cta">
            <HeroActions
              locale={lang}
              dict={dict}
              secondaryLabel={dict.common.seePlatform}
              secondaryHref="/producto"
            />
          </div>

        </section>
      </div>

      {/* ----------------------------------------------------- qué cambia --- */}
      {/* Sección blanca: encabezado con el botón a la derecha y tres tarjetas
          foto + título + texto. Las fotos de la primera y la tercera son
          `public/images/picture1|2.webp` a sangre y sin nada encima (pedido
          del usuario); la del medio es la conversación con el asistente. Todo
          el arte es decorativo (aria-hidden): el argumento está en el título
          y el texto de cada tarjeta. */}
      <section className={["section section-tight", styles.works].join(" ")} id="que-cambia">
        <div className="container container-wide">
          <div className={styles.worksHead} data-reveal>
            <div className="stack">
              <p className="eyebrow">{t.works.eyebrow}</p>
              <h2 className="h2">
                <Headline text={t.works.title} />
              </h2>
            </div>
            <SmartLink locale={lang} className="btn btn-primary btn-lg" href="/crear-cuenta">
              {dict.common.startFree}
              <ArrowRight />
            </SmartLink>
          </div>

          <div className={styles.worksGrid} data-reveal data-fx="">
            {t.works.items.map((item, i) => (
              <article key={item.title} className={styles.worksCard}>
                {i === 0 && (
                  /* Foto a sangre, sin elementos encima (pedido del usuario). */
                  <div className={[styles.worksArt, styles.worksArtPaper].join(" ")} aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/picture1.webp"
                      alt=""
                      width={1000}
                      height={667}
                      loading="lazy"
                      decoding="async"
                      className={styles.worksPhoto}
                    />
                  </div>
                )}
                {i === 1 && (
                  /* Calcado de la referencia: pedido con avatar, respuesta en
                     menta corrida a la derecha con su destello, y una tarjeta
                     con etiqueta y dos botones. El contenido es el turno real
                     del asistente (la viñeta AgentTurn): nada inventado. */
                  <div className={[styles.worksArt, styles.worksArtInk].join(" ")} aria-hidden>
                    <div className={styles.worksChat}>
                      <div className={styles.worksMsg}>
                        <span className={styles.worksAvatar}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                          </svg>
                        </span>
                        <p className={styles.worksBubble}>{v.agent.ask}</p>
                      </div>
                      <div className={[styles.worksMsg, styles.worksMsgAi].join(" ")}>
                        <p className={[styles.worksBubble, styles.worksBubbleAi].join(" ")}>{v.agent.answer}</p>
                        <span className={styles.worksSpark}>
                          <Sparkle />
                        </span>
                      </div>
                      <div className={[styles.worksMsg, styles.worksMsgCard].join(" ")}>
                        <div className={styles.worksTask}>
                          <p className={styles.worksTaskLabel}>
                            <Sparkle />
                            {t.works.cardLabel}
                          </p>
                          <p className={styles.worksTaskText}>
                            {v.agent.card.guest} · {v.agent.card.meta[0]} · {v.agent.card.meta[1]}
                          </p>
                          <p className={styles.worksTaskBtns}>
                            <span className={styles.worksTaskBtn}>{v.agent.card.see}</span>
                            <span className={styles.worksTaskGhost}>{v.agent.card.undo}</span>
                          </p>
                        </div>
                        <span className={styles.worksSpark}>
                          <Sparkle />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {i === 2 && (
                  /* Foto a sangre; el encuadre carga a la derecha para que la
                     pantalla de la notebook quede dentro del recorte 1:1. */
                  <div className={[styles.worksArt, styles.worksArtAmber].join(" ")} aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/picture2.webp"
                      alt=""
                      width={1200}
                      height={675}
                      loading="lazy"
                      decoding="async"
                      className={[styles.worksPhoto, styles.worksPhotoRight].join(" ")}
                    />
                  </div>
                )}
                <h3 className={styles.worksTitle}>{item.title}</h3>
                <p className={styles.worksText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- qué es --- */}
      <section className="section" id="que-es">
        <div className="container container-wide">
          {/* Encabezado a la izquierda y el video de portada a la derecha
              (29-09-2026): el video es la explicación del titular. La grilla
              de productos ya no va acá: es su propia sección, después de
              "cómo funciona". En tableta y teléfono se apilan. */}
          <div className={styles.queEsTop}>
            <div className={["section-head", styles.queEsHead].join(" ")} data-reveal>
              <p className="eyebrow">{t.modules.eyebrow}</p>
              <h2 className="h2">
                <Headline text={t.modules.title} />
              </h2>
              <p className="lead">{t.modules.lead}</p>
            </div>
            <div className={styles.videoWrap} data-reveal data-fx="">
              <SiteVideo piece="portada" locale={lang} t={dict.common.video} ambient />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ por qué Roombir -- */}
      {/* Reemplazó a "cómo funciona" (29-09-2026, pedido del usuario): la
          narrativa de distinción y, debajo, "Roombir se adapta a tu
          alojamiento" fijo a la izquierda con sus tres razones apilándose,
          y la explicación de cada una a la derecha. */}
      {/* La zona oscura: el fondo que aparece al llegar a la parte de IA no se
          va al seguir bajando; sigue detrás de la grilla de productos, que
          queda con sus tarjetas claras sobre el oscuro, y termina donde
          empieza "un martes" (pedido del usuario, 29-09-2026). */}
      <div className={styles.deepZone}>
      <AdaptSection locale={lang} t={t.adapt} video={dict.common.video} />

      {/* ------------------------------------------------------ productos -- */}
      {/* La grilla de productos, separada de "qué es" (29-09-2026, pedido del
          usuario): primero qué es y por qué Roombir, después el detalle
          producto por producto. Sin encabezado propio. Sin fondo propio: se
          ve sobre el oscuro de la zona. */}
      <section className="section section-tight" id="modulos">
        <div className="container container-wide">
          <div className={styles.modules} data-reveal data-fx="">
            {MODULE_ORDER.map((mod) => (
              <Link
                key={mod.key}
                href={path(PRODUCT_HREFS[mod.key])}
                className={[styles.module, styles[mod.wash], mod.wide ? styles.moduleWide : ""].join(" ")}
              >
                <span
                  className={[styles.moduleIcon, styles[mod.tint]].join(" ")}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {MODULE_ICONS[mod.key]}
                  </svg>
                </span>
                <span className={styles.moduleTitle}>{t.modules.items[mod.key].title}</span>
                <span className={styles.moduleDesc}>{t.modules.items[mod.key].desc}</span>
                {mod.key === "pms" && (
                  <span className={styles.moduleParts} aria-hidden>
                    {PMS_PARTS.map((part) => (
                      <span key={part} className="pill">
                        {dict.nav.pmsParts[part]}
                      </span>
                    ))}
                  </span>
                )}
                <span className={styles.moduleLink}>
                  {dict.common.seeMore}
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </div>

      {/* -------------------------------------------------- un martes ------ */}
      <section className="section section-tight">
        <div className="container container-wide">
          <SplitHead
            locale={lang}
            eyebrow={t.day.eyebrow}
            title={t.day.title}
            lead={t.day.lead}
          />
          <div data-reveal>
            <DayCompare
              locale={lang}
              headOld={t.day.headOld}
              headNew={t.day.headNew}
              rows={t.day.rows}
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- compromisos -- */}
      {/* Primero qué es (arriba); después, por qué confiar: lo que el sector
          esconde (precio, permanencia, lo que falta) es lo que decimos. */}
      <Commitments
        locale={lang}
        id="compromisos"
        eyebrow={t.commitments.eyebrow}
        title={t.commitments.title}
        lead={t.commitments.lead}
        verify={t.commitments.verify}
        items={t.commitments.items}
      />

      {/* -------------------------------------------------------------- IA - */}
      <Split
        locale={lang}
        flip
        eyebrow={t.ia.eyebrow}
        title={t.ia.title}
        lead={t.ia.lead}
        items={t.ia.items}
        link={{ href: PRODUCT_HREFS.ia, label: t.ia.link }}
        media={<AgentTurn v={v} />}
      />

      <Faq items={t.faq} title={dict.common.faqTitle} locale={lang} />

      <CtaBand
        locale={lang}
        dict={dict}
        title={t.cta.title}
        lead={t.cta.lead}
        steps={t.cta.steps}
      />

      {/* JSON-LD del producto. Lo mismo que le pedimos al hotelero que haga con
          su alojamiento: declarar qué es esto para que un modelo lo entienda. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "roombir",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Property Management System",
            operatingSystem: "Web",
            url: `${siteUrl}/${lang}`,
            inLanguage: ["es", "en", "pt", "fr", "de"],
            description: dict.site.description,
          }),
        }}
      />

    </>
  );
}
