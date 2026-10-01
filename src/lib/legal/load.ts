import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { cache } from "react";
import type { Locale } from "@/i18n/config";
import {
  PENDING_CLOSE,
  PENDING_OPEN,
  parseLegal,
  type LegalDocKey,
  type LegalMeta,
  type LegalSection,
} from "./doc";

/**
 * Lee un documento legal del disco y lo deja listo para dibujar.
 *
 * Corre en el servidor y, como las páginas legales son estáticas, corre en el
 * build: el hash que se muestra es el del texto publicado y no se recalcula
 * por visita.
 *
 * Tres reglas del spec que se cumplen acá:
 *
 * - **`es` prevalece.** Si el idioma pedido no tiene su archivo se sirve el
 *   español y `fallback` queda en true, para que la página lo avise. Nunca un
 *   404, y nunca una traducción automática.
 * - **El hash** es el SHA-256 del contenido normalizado: sin frontmatter, sin
 *   las notas internas, con saltos `\n` y sin espacios finales.
 * - **Un documento vinculante no puede tener datos pendientes.** Si `binding`
 *   o `legallyReviewed` están en true y queda una variable sin valor, esto
 *   tira y el build falla.
 */

const DIR = path.join(process.cwd(), "content", "legal");

/**
 * Un texto de `variables.json`: igual en todos los idiomas (un número de
 * días) o uno por idioma (un plazo con su unidad, un país, una etiqueta).
 */
type Text = string | Record<Locale, string>;

type Variables = Record<string, { label: Text; value: Text | null }>;

const pick = (text: Text, locale: Locale) => (typeof text === "string" ? text : text[locale]);

export interface LegalDoc {
  meta: LegalMeta;
  sha256: string;
  sections: LegalSection[];
  /** Etiquetas de los datos que faltan definir, sin repetir. */
  pending: string[];
  /** El idioma pedido no tiene traducción y se sirvió `es`. */
  fallback: boolean;
}

const readVariables = cache((): Variables => {
  return JSON.parse(readFileSync(path.join(DIR, "variables.json"), "utf8")) as Variables;
});

/**
 * Pone los valores de `variables.json` donde el documento escribe
 * `{{clave}}`. Un dato sin definir queda marcado entre `PENDING_OPEN` y
 * `PENDING_CLOSE`, con su etiqueta, para que el documento lo muestre como
 * faltante en vez de callarlo.
 */
function fill(text: string, locale: Locale, file: string, pending: Set<string>): string {
  const variables = readVariables();
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const variable = variables[key];
    if (!variable) throw new Error(`${file}: la variable "${key}" no está en variables.json.`);
    if (variable.value !== null) return pick(variable.value, locale);
    const label = pick(variable.label, locale);
    pending.add(label);
    return `${PENDING_OPEN}${label}${PENDING_CLOSE}`;
  });
}

function readMeta(front: string, file: string): LegalMeta {
  const raw: Record<string, string> = {};
  for (const line of front.split("\n")) {
    const m = /^(\w+):\s*(.*?)\s*$/.exec(line);
    if (m) raw[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
  }
  for (const key of ["doc", "locale", "version", "effectiveDate", "legallyReviewed", "binding", "requiresReacceptance"]) {
    if (!(key in raw)) throw new Error(`${file}: falta "${key}" en el frontmatter.`);
  }
  return {
    doc: raw.doc,
    locale: raw.locale,
    version: raw.version,
    effectiveDate: raw.effectiveDate,
    legallyReviewed: raw.legallyReviewed === "true",
    binding: raw.binding === "true",
    requiresReacceptance: raw.requiresReacceptance === "true",
    essential: (raw.essential ?? "")
      .split(",")
      .map(Number)
      .filter((n) => n > 0),
  };
}

export const loadLegalDoc = cache((doc: LegalDocKey, locale: Locale): LegalDoc => {
  const own = path.join(DIR, locale, `${doc}.md`);
  const fallback = !existsSync(own);
  const file = fallback ? path.join(DIR, "es", `${doc}.md`) : own;
  const source = readFileSync(file, "utf8").replace(/\r\n?/g, "\n");

  const front = /^---\n([\s\S]*?)\n---\n/.exec(source);
  if (!front) throw new Error(`${file}: no tiene frontmatter.`);
  const meta = readMeta(front[1], file);

  const pending = new Set<string>();
  const published = source.slice(front[0].length).replace(/<!--[\s\S]*?-->/g, "");
  // Las variables se escriben en el idioma del ARCHIVO, no en el de la página:
  // si se sirve el español de respaldo, van en español.
  const body = fill(published, fallback ? "es" : locale, file, pending)
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if ((meta.binding || meta.legallyReviewed) && pending.size > 0) {
    throw new Error(
      `${file}: está marcado como vinculante o revisado y le faltan datos (${[...pending].join(", ")}). ` +
        "Completar content/legal/variables.json antes de publicar.",
    );
  }

  return {
    meta,
    sha256: createHash("sha256").update(`${body}\n`).digest("hex"),
    sections: parseLegal(body),
    pending: [...pending],
    fallback,
  };
});
