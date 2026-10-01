import { Fragment, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import AdaptStack from "./AdaptStack";
import LoopClip from "./LoopClip";
import { Headline } from "./RichText";
import { ArrowRight, SmartLink } from "./Sections";
import styles from "./AdaptSection.module.css";

const GRID_ID = "adapt-grid";

/** Adónde lleva "Explorar la plataforma": la misma página que el botón
    "Ver la plataforma" del titular de la home. */
const PLATFORM_HREF = "/producto";

/**
 * "Por qué Roombir": la sección de la home que reemplazó a "cómo funciona"
 * (29-09-2026, pedido del usuario).
 *
 * Arriba, la narrativa de distinción (el mercado es genérico y homogéneo),
 * que se va con el scroll. Debajo, dos columnas:
 *
 * - **Izquierda, fija:** el titular "Roombir se adapta a tu alojamiento" en
 *   degradado, y las tres razones, que llegan con el scroll y se apilan una
 *   debajo de la otra (`AdaptStack` mide y el CSS las fija).
 * - **Derecha, scroll normal:** primero el clip del motor; después, por cada
 *   razón, título + texto + botón a la plataforma + su imagen o su clip.
 *
 * Por debajo de 1024 px no hay nada fijo: una sola columna, cada razón como
 * rótulo de su bloque.
 *
 * Al llegar al bloque de IA el fondo cambia: del papel al degradado oscuro
 * de los videos (`.aiBg`) y el texto pasa a claro, en todos los anchos.
 *
 * El orden del DOM es el de lectura (razón, bloque, razón, bloque…): la
 * grilla de escritorio ubica cada pieza por `data-stack` / `data-block`.
 */
export default function AdaptSection({
  locale,
  t,
  video,
}: {
  locale: Locale;
  t: Dictionary["home"]["adapt"];
  /** Sólo los rótulos de reproducir y pausar de `common.video`. */
  video: Pick<Dictionary["common"]["video"], "play" | "pause">;
}) {
  const clip = (name: "motor" | "pms" | "ia", label: string) => (
    <LoopClip clip={name} locale={locale} label={label} playLabel={video.play} pauseLabel={video.pause} />
  );

  const reasons: { key: string; label: string; title: string; text: string; media: ReactNode }[] = [
    {
      key: "world",
      label: t.world.label,
      title: t.world.title,
      text: t.world.text,
      media: (
        <figure className={styles.photo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/image-section-lab.webp"
            srcSet="/images/image-section-lab-960.webp 960w, /images/image-section-lab.webp 1920w"
            sizes="(max-width: 1023px) 92vw, 760px"
            alt={t.world.alt}
            width={1920}
            height={1344}
            loading="lazy"
            decoding="async"
          />
          {/* Blur progresivo: cinco capas, cada una difumina más y entra más
              abajo que la anterior. */}
          <div className={styles.photoBlur} aria-hidden>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <figcaption className={styles.photoCaption}>{t.world.caption}</figcaption>
        </figure>
      ),
    },
    {
      key: "easy",
      label: t.easy.label,
      title: t.easy.title,
      text: t.easy.text,
      media: clip("pms", t.easy.clip),
    },
    {
      key: "ai",
      label: t.ai.label,
      title: t.ai.title,
      text: t.ai.text,
      media: clip("ia", t.ai.clip),
    },
  ];

  return (
    <section className={["section", styles.adapt].join(" ")} id="por-que-roombir">
      {/* El fondo de la parte de IA: el degradado oscuro de los videos (verde
          petróleo con una pluma de luz), a pantalla completa. Está siempre
          en el DOM, invisible; `AdaptStack` pone `data-tone="ai"` en la
          sección cuando llega el bloque de IA, y el CSS funde el fondo y
          pasa el texto a claro. */}
      <div className={styles.aiBg} aria-hidden>
        <span className={styles.aiStage}>
          <i className={styles.aiLight} />
          <i className={styles.aiDisc} />
          <i className={styles.aiFoot} />
        </span>
        <span className={styles.aiGrain} />
      </div>

      <div className="container container-wide">
        <div className={styles.intro} data-reveal>
          <div className="stack">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className={["h2", styles.introTitle].join(" ")}>
              <Headline text={t.title} />
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className={styles.grid} id={GRID_ID}>
          <h3 className={styles.heading} data-stack="0">
            <span className={styles.headingText}>{t.heading}</span>
          </h3>
          <div className={styles.first}>{clip("motor", t.clip)}</div>

          {reasons.map((reason, i) => (
            <Fragment key={reason.key}>
              <p className={styles.reason} data-stack={i + 1}>
                <span className={styles.reasonNum} aria-hidden>
                  0{i + 1}
                </span>
                <span>{reason.label}</span>
              </p>
              <div
                className={styles.block}
                data-block={i + 1}
                data-tone={reason.key === "ai" ? "ai" : undefined}
              >
                <h4 className={["h3", styles.blockTitle].join(" ")}>
                  <Headline text={reason.title} />
                </h4>
                <p className={["lead", styles.blockText].join(" ")}>{reason.text}</p>
                <SmartLink
                  locale={locale}
                  className={["btn btn-primary", styles.blockCta].join(" ")}
                  href={PLATFORM_HREF}
                >
                  {t.cta}
                  <ArrowRight />
                </SmartLink>
                <div className={styles.blockMedia}>{reason.media}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <AdaptStack targetId={GRID_ID} />
    </section>
  );
}
