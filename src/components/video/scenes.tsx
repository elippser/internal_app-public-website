"use client";

import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { BeatId, VideoDict } from "./timeline";
import { HingeScene, ChatScene } from "./acts/chat";
import { BlobScene, DonutScene, EndScene, RingScene, RowScene, UnlockScene } from "./acts/era";
import { BuiltScene, FirstScene, MeetScene, ShotScene } from "./acts/meet";
import { GridScene, MergeScene, PrecisionScene, UnfoldScene, WheelScene } from "./acts/modules";
import { DotScene, KillsScene, MazeScene, PunchScene, SprawlScene, ThreadScene, ToolsScene } from "./acts/problem";

/**
 * Las escenas del video, una por beat (`timeline.ts`), repartidas en cinco
 * actos (`./acts`). El arco y el lenguaje visual calcan beat por beat al video
 * de referencia (VIDEO-REFERENCIA-ANALISIS.md); lo que se ve son las pantallas
 * REALES del producto, copiadas de cada app (`./pms`).
 */

export type SceneProps = {
  /** Tiempo local del beat en ms; negativo mientras la escena está premontada. */
  lt: number;
  v: VideoDict;
  locale: Locale;
  paused: boolean;
};

export const SCENES: Record<BeatId, (p: SceneProps) => ReactNode> = {
  sprawl: SprawlScene,
  thread: ThreadScene,
  tools: ToolsScene,
  maze: MazeScene,
  dot: DotScene,
  kills: KillsScene,
  punch: PunchScene,
  meet: MeetScene,
  first: FirstScene,
  shot: ShotScene,
  built: BuiltScene,
  wheel: WheelScene,
  grid: GridScene,
  merge: MergeScene,
  unfold: UnfoldScene,
  precision: PrecisionScene,
  hinge: HingeScene,
  chat: ChatScene,
  unlock: UnlockScene,
  donut: DonutScene,
  blob: BlobScene,
  ring: RingScene,
  row: RowScene,
  end: EndScene,
};
