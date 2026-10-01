/**
 * El modelo de un documento legal, ya parseado.
 *
 * Los documentos viven en `content/legal/{idioma}/{doc}.md` y no en los
 * diccionarios: un cambio de redacción lo define el abogado y no tiene que
 * tocar código (roombir-legal-spec-software.md, sección 3).
 *
 * El Markdown que se admite es el mínimo que usan esos textos, y nada más:
 *
 *     ## 13. Título            sección; su ancla es `#s13` en todos los idiomas
 *     13.1. Texto              cláusula numerada
 *     a) Texto                 inciso
 *     - Texto                  ítem de lista
 *     | a | b |                tabla, con su fila separadora
 *     **negrita**, `código`, [texto](/ruta-interna)
 *     {{variable}}             un valor de `content/legal/variables.json`
 *     <!-- nota -->            nota interna: no se publica
 *
 * El frontmatter es el del spec, más `essential` (opcional).
 */

export type LegalDocKey = "terms" | "site-terms";

export interface LegalMeta {
  doc: string;
  locale: string;
  version: string;
  /** `AAAA-MM-DD`. */
  effectiveDate: string;
  legallyReviewed: boolean;
  binding: boolean;
  requiresReacceptance: boolean;
  /**
   * Las secciones que el propio documento señala como las que hay que leer
   * (en los Términos del software, las que enumera la cláusula 27). Se marcan
   * en pantalla; no cambian lo que el documento dice.
   */
  essential: number[];
}

export type LegalBlock =
  | { kind: "p"; num?: string; text: string }
  | { kind: "list"; items: { mark?: string; text: string }[] }
  | { kind: "table"; head: string[]; rows: string[][] };

export interface LegalSection {
  n: number;
  /** `s{N}`: igual en los cinco idiomas, porque las cláusulas se citan entre sí. */
  id: string;
  title: string;
  blocks: LegalBlock[];
}

/** Así viaja en el texto un dato que todavía no está definido. */
export const PENDING_OPEN = "⟦";
export const PENDING_CLOSE = "⟧";

const HEADING = /^## (\d+)\. (.+)$/;
const ITEM = /^(?:- |([a-z])\) )(.+)$/;
const CLAUSE = /^(\d+\.\d+)\. (.+)$/;
const TABLE_RULE = /^\|[\s:|-]+\|$/;

const cells = (line: string) =>
  line
    .trim()
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((cell) => cell.trim());

export function parseLegal(body: string): LegalSection[] {
  const lines = body.split("\n");
  const sections: LegalSection[] = [];
  let current: LegalSection | null = null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    const heading = HEADING.exec(line);
    if (heading) {
      current = { n: Number(heading[1]), id: `s${heading[1]}`, title: heading[2].trim(), blocks: [] };
      sections.push(current);
      i++;
      continue;
    }

    if (!current) throw new Error(`Documento legal: hay texto antes de la primera sección ("${line}").`);

    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!TABLE_RULE.test(lines[i].trim())) rows.push(cells(lines[i]));
        i++;
      }
      const [head, ...rest] = rows;
      current.blocks.push({ kind: "table", head, rows: rest });
      continue;
    }

    if (ITEM.test(line)) {
      const items: { mark?: string; text: string }[] = [];
      for (let m = ITEM.exec(lines[i] ?? ""); m; m = ITEM.exec(lines[i] ?? "")) {
        items.push({ mark: m[1], text: m[2].trim() });
        i++;
      }
      current.blocks.push({ kind: "list", items });
      continue;
    }

    const buffer: string[] = [];
    while (i < lines.length && lines[i].trim() && !HEADING.test(lines[i]) && !lines[i].startsWith("|") && !ITEM.test(lines[i])) {
      buffer.push(lines[i].trim());
      i++;
    }
    const text = buffer.join(" ");
    const clause = CLAUSE.exec(text);
    current.blocks.push(clause ? { kind: "p", num: clause[1], text: clause[2] } : { kind: "p", text });
  }

  return sections;
}

/**
 * Los bloques de las páginas legales que siguen en el diccionario (privacidad
 * y cookies) llevados al mismo modelo, para que las dibuje el mismo documento.
 */
export function sectionsFromBlocks(
  blocks: readonly { h?: string; p?: string; ul?: readonly string[] }[],
): LegalSection[] {
  const sections: LegalSection[] = [];
  for (const block of blocks) {
    if (block.h) {
      const m = /^(\d+)\. (.+)$/.exec(block.h);
      const n = m ? Number(m[1]) : sections.length + 1;
      sections.push({ n, id: `s${n}`, title: m ? m[2] : block.h, blocks: [] });
      continue;
    }
    const current = sections[sections.length - 1];
    if (!current) continue;
    if (block.ul) current.blocks.push({ kind: "list", items: block.ul.map((text) => ({ text })) });
    else if (block.p) current.blocks.push({ kind: "p", text: block.p });
  }
  return sections;
}
