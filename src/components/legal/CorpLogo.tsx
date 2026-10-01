import { WORDMARK_PATH } from "@/components/site/logoPaths";
import {
  CORP_EYE_BROW,
  CORP_EYE_RING,
  CORP_EYE_STROKE,
  CORP_LOGO_RATIO,
  CORP_LOGO_VIEWBOX,
} from "./corpLogoPaths";

/**
 * La marca corporativa: el ojo y, a su derecha, "roombir". Sólo la usa el
 * centro legal; el resto del sitio firma con el isotipo de cuatro formas
 * (`site/Logo`).
 *
 * La palabra sale de `currentColor` —tinta sobre blanco, blanco sobre tinta— y
 * el ojo va siempre en su gris, que se lee en los dos fondos. La geometría la
 * genera `scripts/brand/sync-corp-logo.mjs` en la raíz.
 *
 * `size` es la altura del logotipo entero, ojo incluido.
 */
export default function CorpLogo({
  tone = "ink",
  size = 22,
}: {
  tone?: "ink" | "paper";
  size?: number;
}) {
  return (
    <svg
      width={Math.round(size * CORP_LOGO_RATIO * 10) / 10}
      height={size}
      viewBox={CORP_LOGO_VIEWBOX}
      aria-hidden="true"
      style={{ display: "block", flex: "none", color: tone === "ink" ? "#0a0a0a" : "#ffffff" }}
    >
      <path fill="currentColor" fillRule="evenodd" d={WORDMARK_PATH} />
      <g fill="none" stroke="#bfbfbf" strokeWidth={CORP_EYE_STROKE}>
        <circle cx={CORP_EYE_RING.cx} cy={CORP_EYE_RING.cy} r={CORP_EYE_RING.r} />
        <path d={CORP_EYE_BROW} />
      </g>
    </svg>
  );
}
