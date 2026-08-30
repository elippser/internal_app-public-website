import { ImageResponse } from "next/og";

/**
 * La imagen que se ve cuando alguien pega un link del sitio en WhatsApp, en
 * LinkedIn o en un chat interno del hotel.
 *
 * Se genera en el build con `next/og`, sin subir un PNG a ningún lado: cambiar
 * el texto es editar este archivo. No carga tipografías remotas a propósito —
 * una fuente de Google acá haría que el build dependa de la red y falle en el
 * peor momento, que es el deploy.
 */
export const alt = "Bookfer · El sistema operativo de tu alojamiento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        {/* La marca: el mismo dibujo del logo, en grande. */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#f2efe8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 7,
              padding: 13,
            }}
          >
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 10, height: 11, borderRadius: 3, background: "rgba(20,21,15,0.28)" }} />
              <div style={{ width: 23, height: 11, borderRadius: 3, background: "#4e6b28" }} />
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 17, height: 11, borderRadius: 3, background: "#4e6b28" }} />
              <div style={{ width: 8, height: 11, borderRadius: 3, background: "rgba(20,21,15,0.28)" }} />
              <div style={{ width: 8, height: 11, borderRadius: 3, background: "rgba(20,21,15,0.28)" }} />
            </div>
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>bookfer</div>
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
            Un alojamiento entero, en un solo sistema.
          </div>
          <div style={{ fontSize: 27, color: "rgba(242,239,232,0.66)", maxWidth: 860, lineHeight: 1.4 }}>
            Reservas, habitaciones, motor propio, sitio web, revenue management
            y un asistente que opera todo eso con vos.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["PMS", "Motor de reservas", "Sitios web", "Revenue", "LinkHub", "Bookfer IA"].map((chip) => (
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
