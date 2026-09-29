import { internalApiUrl } from "@/lib/siteConfig";
import type { Track } from "@/components/video/editor/model";
import type { Escalas } from "@/components/video/timeline";

/**
 * El montaje de la voz en off que le toca a un idioma, para el reproductor
 * público.
 *
 * Se lee **en el servidor y con revalidación**, no desde el navegador: así el
 * montaje viaja dentro del HTML ya renderizado, la página sigue siendo
 * estática —que es el modelo de este sitio— y ningún visitante le pega al API
 * interno. El precio es que un cambio hecho en el editor tarda hasta
 * `REVALIDA` en verse en la página pública, lo cual para una pieza de
 * marketing es exactamente lo que se quiere.
 *
 * Los archivos de audio no pasan por acá: son estáticos de `public/` y los
 * sirve Next como cualquier otro.
 */

/** Cada cuánto se vuelve a leer el montaje, en segundos. */
const REVALIDA = 300;

export type Voiceover = { tracks: Track[]; scenes: Escalas };

export async function getVoiceover(locale: string): Promise<Voiceover | null> {
  const secret = process.env.INTERNAL_API_SECRET ?? "";
  if (!secret) return null;

  try {
    const res = await fetch(`${internalApiUrl}/public/mkt/video-vo/${locale}`, {
      headers: { "X-Internal-Secret": secret },
      next: { revalidate: REVALIDA },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { tracks?: Track[]; scenes?: Escalas };
    const tracks = (body.tracks ?? []).filter((t) => t.clips?.length);
    if (!tracks.length && !body.scenes) return null;
    return { tracks, scenes: body.scenes ?? {} };
  } catch {
    // Un video sin voz se sigue pudiendo ver. Que el API interno no conteste
    // NUNCA puede dejar la página de marketing sin renderizar.
    return null;
  }
}

/**
 * El montaje de un video de producto o de Roombir IA (`ia`, `propiedades`, `habitaciones`, `motor`,
 * `informes`, `revenue`, `marketing`) en un idioma. Mismo criterio que `getVoiceover`: en el servidor,
 * con revalidación, y si el API no contesta el video se ve igual, sin voz.
 */
export async function getVideoVoiceover(video: string, locale: string): Promise<Voiceover | null> {
  const secret = process.env.INTERNAL_API_SECRET ?? "";
  if (!secret) return null;

  try {
    const res = await fetch(`${internalApiUrl}/public/mkt/video-vo/${encodeURIComponent(video)}/${locale}`, {
      headers: { "X-Internal-Secret": secret },
      next: { revalidate: REVALIDA },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { tracks?: Track[]; scenes?: Escalas };
    const tracks = (body.tracks ?? []).filter((t) => t.clips?.length);
    if (!tracks.length && !body.scenes) return null;
    return { tracks, scenes: body.scenes ?? {} };
  } catch {
    return null;
  }
}
