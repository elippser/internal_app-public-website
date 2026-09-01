import { ImageResponse } from "next/og";
import {
  LOGOTYPE_DOT,
  LOGOTYPE_RATIO,
  LOGOTYPE_TEXT_PATH,
  LOGOTYPE_VIEWBOX,
} from "@/components/site/logoPaths";
import { getDictionary } from "@/i18n/get-dictionary";
import { readLocale } from "@/i18n/params";

/**
 * La imagen que se ve cuando alguien pega un link del sitio en WhatsApp, en
 * LinkedIn o en un chat interno del hotel.
 *
 * Se genera en el build con `next/og`, sin subir un PNG a ningún lado. Los
 * textos salen del diccionario del idioma (`site.og`): el archivo vive bajo
 * `[lang]` justamente para que el share de `/de/plattform` no muestre una
 * tarjeta en castellano. No carga tipografías remotas a propósito — una
 * fuente de Google acá haría que el build dependa de la red y falle en el
 * peor momento, que es el deploy.
 */
// El alt es sólo la marca: es el único texto de este archivo que no puede
// variar por idioma (Next lo exige como constante del segmento).
export const alt = "Bookfer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const og = (await getDictionary(lang)).site.og;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14150f",
          padding: 72,
          color: "#f2efe8",
        }}
      >
        {/* La marca: el logotipo real (mismos paths que el header), en claro
            sobre tinta, con el punto en pistacho como en el footer. */}
        <div style={{ display: "flex" }}>
          <svg
            width={Math.round(52 * LOGOTYPE_RATIO)}
            height={52}
            viewBox={LOGOTYPE_VIEWBOX}
          >
            <path fill="#f2efe8" fillRule="evenodd" d={LOGOTYPE_TEXT_PATH} />
            <circle
              fill="#c8e293"
              cx={LOGOTYPE_DOT.cx}
              cy={LOGOTYPE_DOT.cy}
              r={LOGOTYPE_DOT.r}
            />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {og.title}
          </div>
          <div style={{ fontSize: 27, color: "rgba(242,239,232,0.66)", maxWidth: 860, lineHeight: 1.4 }}>
            {og.lead}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {og.chips.map((chip) => (
            <div
              key={chip}
              style={{
                fontSize: 21,
                padding: "9px 20px",
                borderRadius: 999,
                border: "1px solid rgba(242,239,232,0.2)",
                color: "rgba(242,239,232,0.8)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
