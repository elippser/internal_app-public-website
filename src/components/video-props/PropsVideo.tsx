"use client";

import { useMemo } from "react";
import type { Locale } from "@/i18n/config";
import type { LangLink } from "../video/HeroVideo";
import KitPlayer, { type KitSceneProps } from "../video-kit/KitPlayer";
import { PROPS_SCENES, propsVoiceAnchors } from "./scenes";
import { buildPropsBeats, type PropsVideoDict } from "./timeline";
import type { Voiceover } from "@/lib/videoVo";

/**
 * El video de Propiedades montado en el reproductor genérico. Va en un
 * componente cliente porque las escenas son funciones y no pueden cruzar del
 * servidor al cliente como props.
 */
export default function PropsVideo({ locale, v, langs, vo }: { locale: Locale; v: PropsVideoDict; langs: LangLink[]; vo?: Voiceover | null }) {
  const beats = useMemo(() => buildPropsBeats(v), [v]);
  const anchors = useMemo(() => propsVoiceAnchors(v), [v]);
  return <KitPlayer<PropsVideoDict> locale={locale} v={v} langs={langs} beats={beats} scenes={PROPS_SCENES as Record<string, (p: KitSceneProps<PropsVideoDict>) => React.ReactNode>} posterAt={["tutorial", 9800]} anchors={anchors} vo={vo} pzoom={{ tutorial: 1.1 }} />;
}
