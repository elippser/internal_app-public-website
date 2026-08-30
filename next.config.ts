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
};

export default nextConfig;
