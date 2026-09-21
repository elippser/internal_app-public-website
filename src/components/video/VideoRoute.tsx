"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import HeroVideo, { type LangLink } from "./HeroVideo";
import type { VideoDict } from "./timeline";
import type { Voiceover } from "@/lib/videoVo";

/**
 * Qué se ve en `/{lang}/video`: el reproductor, o el escenario pelado con
 * `?embed=1` para que lo maneje el editor del panel interno.
 *
 * **Desde acá no se edita nada.** El montaje se hace en el panel (Marketing ›
 * Videos) y esta página sólo lo REPRODUCE, ya resuelto en el servidor. Un
 * visitante no tiene forma de cambiarlo, que es justamente lo que se quería.
 *
 * El parámetro se lee en el NAVEGADOR y no en el servidor a propósito. Mirar
 * `searchParams` del lado del servidor vuelve la ruta dinámica, y esta página
 * vive prerenderizada como el resto del sitio; por un editor que usa una sola
 * persona no se paga el renderizado de cada visita.
 *
 * Mientras no se sabe (`edit === null`, el primer cuadro) se dibuja el
 * reproductor, que es exactamente el HTML prerenderizado: así la hidratación
 * coincide y no hay parpadeo para quien entra a ver el video. El editor además
 * se carga aparte (`ssr: false`), así que su código no viaja en el bundle de la
 * página pública.
 */

const VideoEmbed = dynamic(() => import("./VideoEmbed"), { ssr: false });

export default function VideoRoute({
  locale,
  v,
  langs,
  vo,
}: {
  locale: Locale;
  v: VideoDict;
  langs: LangLink[];
  /** El montaje de la voz en off. `null` si el API interno no contestó. */
  vo: Voiceover | null;
}) {
  const [modo, setModo] = useState<"player" | "embed" | null>(null);

  useEffect(() => {
    setModo(new URLSearchParams(window.location.search).get("embed") === "1" ? "embed" : "player");
  }, []);

  if (modo === "embed") return <VideoEmbed locale={locale} v={v} />;
  return <HeroVideo locale={locale} v={v} langs={langs} vo={vo} />;
}
