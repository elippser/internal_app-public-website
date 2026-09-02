import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Builds de verificación aislados: `BUILD_DIST_DIR=.next-verify npx next build`
  // no pisa el `.next` que están usando los dev servers.
  ...(process.env.BUILD_DIST_DIR ? { distDir: process.env.BUILD_DIST_DIR } : {}),
  turbopack: {
    // Evita subir a lockfiles de carpetas superiores al ejecutar desde acá.
    root: path.join(process.cwd()),
  },
  // No hay por qué anunciar el framework en cada respuesta.
  poweredByHeader: false,
  experimental: {
    // CSS inline en el HTML en vez de <link>: el sitio es estático y chico de
    // estilos; esto borra 4-5 requests render-blocking del camino crítico.
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Que el navegador no adivine content-types ni mande el referrer
          // completo a terceros. Mínimos de higiene, sin CSP: una CSP a medias
          // rompería los JSON-LD inline y no está el tiempo de mantenerla.
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Lo leen los agentes de IA; cache corto con margen de revalidación
        // para no servirles un stale de días si se actualiza.
        source: "/llms.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" },
        ],
      },
      {
        // Los favicons no cambian entre deploys; un día de cache alcanza y
        // evita el request en cada navegación.
        source: "/:icon(icon|icon-dark).svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
