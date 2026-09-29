import type { Dictionary } from "@/i18n/dict/es";
import type { KitSceneProps } from "../video-kit/KitPlayer";

/**
 * Los cinco videos de producto que faltaban (Habitaciones, Motor, Informes,
 * Revenue, Marketing). Cada uno recibe lo mismo: el HUD, su bloque propio de
 * `dict.videoTours`, los textos de su página (`page`) y el diccionario del video
 * de portada (`base`), de donde salen los datos y los rótulos de la UI real.
 */

export type TourKind = "rooms" | "motor" | "reports" | "revenue" | "marketing";

type PageOf = {
  rooms: Dictionary["habitaciones"];
  motor: Dictionary["motor"];
  reports: Dictionary["informes"];
  revenue: Dictionary["revenue"];
  marketing: Dictionary["marketing"];
};

export type TourDict<K extends TourKind> = {
  hud: Dictionary["video"]["hud"];
  meta: { title: string; description: string };
  x: Dictionary["videoTours"][K];
  page: PageOf[K];
  base: Dictionary["video"];
  /** Los textos del motor real en el teléfono (los usan Motor y Marketing). */
  mui: Dictionary["videoTours"]["motor"]["motorUi"];
};

export type TourProps<K extends TourKind> = KitSceneProps<TourDict<K>>;

/** La página de cada video en el diccionario. */
export const PAGE_KEY = { rooms: "habitaciones", motor: "motor", reports: "informes", revenue: "revenue", marketing: "marketing" } as const;

/** La clave de ruta de cada video (`src/i18n/routes.ts`). */
export const ROUTE_KEY = { rooms: "videoHabitaciones", motor: "videoMotor", reports: "videoInformes", revenue: "videoRevenue", marketing: "videoMarketing" } as const;
