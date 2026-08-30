import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";

/**
 * Un poco de formato dentro de un string de diccionario.
 *
 * Todo el texto del sitio vive en `src/i18n/dict/*.ts` como strings planos,
 * porque un traductor —persona o modelo— tiene que poder trabajar sin tocar
 * JSX. Pero hay frases que necesitan una negrita o un enlace en el medio, y
 * partirlas en tres claves las vuelve intraducibles: el orden de las palabras
 * cambia según el idioma.
 *
 * La solución es una micro-sintaxis, la mínima que hace falta:
 *
 *     **negrita**            → <b>
 *     `código`               → <code>
 *     [texto](/ruta)         → <Link> con el idioma ya puesto
 *     [texto](https://…)     → <a> externo
 *
 * No es Markdown ni pretende serlo: no hay párrafos, ni listas, ni anidado.
 * Si un texto necesita más que esto, es que quiere ser dos textos.
 */

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export function renderRich(text: string, locale: Locale): ReactNode[] {
  return text.split(TOKEN).map((chunk, i) => {
    if (!chunk) return null;

    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return <b key={i}>{chunk.slice(2, -2)}</b>;
    }

    if (chunk.startsWith("`") && chunk.endsWith("`")) {
      return (
        <span className="mono" key={i}>
          {chunk.slice(1, -1)}
        </span>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(chunk);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={localePath(locale, href)}>
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href}>
          {label}
        </a>
      );
    }

    return <span key={i}>{chunk}</span>;
  });
}

/** La versión componente, para cuando el texto va suelto dentro de un bloque. */
export default function RichText({
  text,
  locale,
}: {
  text: string;
  locale: Locale;
}) {
  return <>{renderRich(text, locale)}</>;
}

/**
 * Un título con una palabra en bastardilla.
 *
 * El sitio entero usa el mismo recurso tipográfico: el titular en sans y una
 * parte en el serif itálico verde. En los diccionarios se marca con `*…*` y
 * acá se convierte en el `<em>` que el CSS ya sabe pintar.
 */
export function Headline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((chunk, i) =>
        chunk.startsWith("*") && chunk.endsWith("*") && chunk.length > 2 ? (
          <em key={i}>{chunk.slice(1, -1)}</em>
        ) : (
          <span key={i}>{chunk}</span>
        ),
      )}
    </>
  );
}
