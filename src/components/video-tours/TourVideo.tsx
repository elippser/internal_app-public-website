"use client";

import { useMemo, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { LangLink } from "../video/HeroVideo";
import KitPlayer, { type KitBeat, type KitSceneProps } from "../video-kit/KitPlayer";
import { ROOMS } from "./rooms";
import { MOTOR } from "./motor";
import { REPORTS } from "./reports";
import { REVENUE } from "./revenue";
import { MARKETING } from "./marketing";
import type { TourKind } from "./types";
import type { Voiceover } from "@/lib/videoVo";

/** Lo que cada video aporta al reproductor genérico. */
export type TourSpec<D> = {
  beats: (v: D) => KitBeat[];
  scenes: Record<string, (p: KitSceneProps<D>) => ReactNode>;
  posterAt: [string, number];
  anchors?: (v: D) => Record<string, number[]>;
  /** Zoom de cada escena en el corte vertical (`?view=mobile`); sin dato, 1,3. */
  pzoom?: Record<string, number>;
};

const SPECS: Record<TourKind, TourSpec<never>> = {
  rooms: ROOMS as unknown as TourSpec<never>,
  motor: MOTOR as unknown as TourSpec<never>,
  reports: REPORTS as unknown as TourSpec<never>,
  revenue: REVENUE as unknown as TourSpec<never>,
  marketing: MARKETING as unknown as TourSpec<never>,
};

/**
 * Los videos de producto montados en el reproductor genérico. Es un componente
 * cliente porque las escenas son funciones y no cruzan del servidor al cliente.
 */
export default function TourVideo({ kind, locale, v, langs, vo }: { kind: TourKind; locale: Locale; v: never; langs: LangLink[]; vo?: Voiceover | null }) {
  const spec = SPECS[kind];
  const beats = useMemo(() => spec.beats(v), [spec, v]);
  const anchors = useMemo(() => spec.anchors?.(v), [spec, v]);
  return <KitPlayer locale={locale} v={v} langs={langs} beats={beats} scenes={spec.scenes} posterAt={spec.posterAt} anchors={anchors} vo={vo} pzoom={spec.pzoom} />;
}
