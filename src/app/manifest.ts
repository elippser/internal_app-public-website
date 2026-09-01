import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

/**
 * El web app manifest. El sitio no es una PWA ni pretende serlo: esto existe
 * porque hay navegadores y rastreadores que lo piden igual (estaba listado en
 * el PASSTHROUGH del middleware y daba 404), y porque declara nombre, color e
 * ícono canónicos de la marca en un formato más que las máquinas entienden.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#f2efe8",
    theme_color: "#14150f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
