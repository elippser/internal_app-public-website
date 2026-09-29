"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { clamp01, easeOut, easeOutQuint, noise, seg } from "../video/timeline";
import TourismMap from "../video/pms/TourismMap";
import cs from "../video/pms/ChatUi.module.css";
import u from "./ui.module.css";

/**
 * Las piezas del chat de Roombir IA que el video de portada no tenía, copiadas
 * de `pms-core/app/src/components/aiComponents`:
 *
 * - `TutorialComposer`: el compositor de `RoombirChatView.tsx` con lo que le
 *   falta al de `video/pms/ChatUi.tsx` — la fila de adjuntos
 *   (`attachPreviewRow` + `AttachmentThumb`), el menú de "Adjuntar archivo"
 *   (`ATTACH_GROUPS`/`ATTACH_OPTIONS`) y la banda de dictado (`VoiceWave`).
 *   Usa las MISMAS clases de `ChatUi.module.css` para la píldora; lo nuevo va en
 *   `ui.module.css`, copiado de `RoombirChatView.module.css` y
 *   `VoiceWave.module.css`.
 * - `TourismPanel`: el panel lateral "Mi estatus turístico"
 *   (`TourismStatusPanel.tsx`) en su encuadre final, con el mapa quieto
 *   (`pms/TourismMap`) y las secciones entrando escalonadas.
 *
 * Nada guarda estado: todo lo que cambia llega por props calculadas del reloj.
 * Los `data-*` son ganchos de MEDICIÓN para la cámara y el cursor del tutorial.
 */

/* ------------------------------------------------------------ íconos ---- */

const I = {
  clip: <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10l6-3v10l-6-3z" />
    </>
  ),
  audio: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  sheet: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
};

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------ adjuntos -- */

/** `AttachmentThumb` de un documento: la tarjeta cuadrada con el ícono y el nombre. */
export function AttCard({ name, small = false, pending, pendingLabel }: { name: string; small?: boolean; pending?: boolean; pendingLabel?: string }) {
  return (
    <div className={[u.attCard, small ? u.attCardSm : "", pending ? u.attPending : ""].join(" ")}>
      {pending ? (
        <>
          <span className={u.attSpinner} aria-hidden />
          <span className={u.attDocName}>{pendingLabel}</span>
        </>
      ) : (
        <div className={u.attDoc}>
          <Svg>{I.doc}</Svg>
          <span className={u.attDocName}>{name}</span>
        </div>
      )}
    </div>
  );
}

export type AttachLabels = { label: string; media: string; docs: string; image: string; video: string; audio: string; pdf: string; csv: string };

/* ------------------------------------------------------------ compositor - */

export function TutorialComposer({
  text,
  placeholder,
  caret,
  pressed,
  attachment,
  menu,
  menuHot,
  labels,
  listening,
  listenMs,
  stopPressed,
}: {
  text: string;
  placeholder: string;
  caret: boolean;
  pressed: boolean;
  /** El adjunto de la fila de arriba del input: nombre y si todavía se procesa. */
  attachment?: { name: string; pending: boolean; pendingLabel: string; p: number } | null;
  /** 0 → cerrado, 1 → abierto (el menú entra subiendo 6 px, como `attachMenuIn`). */
  menu: number;
  /** Qué opción del menú tiene el puntero encima (`pdf`). */
  menuHot?: string | null;
  labels: AttachLabels;
  /** 0 → sin dictado, 1 → la banda entera (entra como `laVoiceIn`). */
  listening: number;
  /** Ms desde que arrancó el dictado: de acá salen las barras. */
  listenMs: number;
  stopPressed?: boolean;
}) {
  const empty = text.length === 0;
  const mic = listening > 0.5;
  const opts: { key: string; group: "media" | "docs"; label: string; icon: ReactNode }[] = [
    { key: "image", group: "media", label: labels.image, icon: I.image },
    { key: "video", group: "media", label: labels.video, icon: I.video },
    { key: "audio", group: "media", label: labels.audio, icon: I.audio },
    { key: "pdf", group: "docs", label: labels.pdf, icon: I.doc },
    { key: "sheet", group: "docs", label: labels.csv, icon: I.sheet },
  ];
  return (
    <div className={cs.composer} data-composer>
      {/* La banda de dictado cuelga sobre el input (VoiceWave). */}
      {listening > 0 && (
        <div className={u.band} style={{ opacity: listening.toFixed(3), transform: `translate3d(0, ${((1 - listening) * 8).toFixed(1)}px, 0)` }}>
          <div className={u.bandRow} data-band>
            <VoiceBars ms={listenMs} />
            <span className={u.stop} data-stop style={stopPressed ? { transform: "scale(0.9)" } : undefined}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="6" width="12" height="12" rx="2.5" />
              </svg>
            </span>
            <span className={u.cancel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
          </div>
        </div>
      )}
      {attachment && (
        <div className={u.attachPreviewRow} style={{ opacity: clamp01(attachment.p * 2).toFixed(3), transform: `translate3d(0, ${((1 - easeOut(attachment.p)) * 10).toFixed(1)}px, 0)` }}>
          <AttCard name={attachment.name} pending={attachment.pending} pendingLabel={attachment.pendingLabel} />
        </div>
      )}
      <div className={[cs.inputWrap, caret ? cs.inputWrapFocus : ""].join(" ")} data-pill>
        <div className={u.attachWrap}>
          <span className={cs.attachBtn} data-att-btn style={menu > 0.5 ? { background: "var(--ch-surface-3)", color: "var(--ch-text)" } : undefined}>
            <svg viewBox="0 0 24 24">{I.clip}</svg>
          </span>
          {menu > 0 && (
            <div className={u.attachMenu} data-menu style={{ opacity: menu.toFixed(3), transform: `translate3d(0, ${((1 - menu) * 6).toFixed(1)}px, 0)` }}>
              {(["media", "docs"] as const).map((g) => (
                <div key={g} className={u.attachMenuGroup}>
                  <div className={u.attachMenuHead}>{g === "media" ? labels.media : labels.docs}</div>
                  <div className={u.attachMenuGrid}>
                    {opts
                      .filter((o) => o.group === g)
                      .map((o) => (
                        <span key={o.key} className={[u.attachMenuItem, menuHot === o.key ? u.attachMenuItemHot : ""].join(" ")} data-opt={o.key}>
                          <span className={u.attachMenuIcon}>
                            <Svg>{o.icon}</Svg>
                          </span>
                          <span className={u.attachMenuLabel}>{o.label}</span>
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={cs.textarea} aria-hidden>
          {empty ? (
            <>
              {caret && <span className={cs.caret} />}
              <span className={cs.placeholder}>{placeholder}</span>
            </>
          ) : (
            <>
              {text}
              {caret && <span className={cs.caret} />}
            </>
          )}
        </div>
        <span className={[cs.micBtn, mic ? u.micOn : ""].join(" ")} data-mic>
          <svg viewBox="0 0 24 24">{I.mic}</svg>
        </span>
        <span className={cs.sendBtn} data-send style={{ opacity: empty && !pressed ? 0.35 : 1, ...(pressed ? { transform: "scale(0.88)", filter: "brightness(1.12)" } : {}) }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/**
 * El espectrograma de `VoiceWave`: una barra nueva cada 70 ms que entra por la
 * derecha y corre a la izquierda de a subpíxel. Los niveles salen de un ruido
 * fijo con una envolvente de habla (sílabas) en vez del micrófono.
 */
function VoiceBars({ ms }: { ms: number }) {
  const TICK = 70;
  const SLOTS = 44;
  const STEP = 8;
  const tick = Math.floor(Math.max(0, ms) / TICK);
  const frac = (Math.max(0, ms) % TICK) / TICK;
  const level = (k: number) => {
    if (k < 0) return 0;
    const syll = 0.35 + 0.65 * Math.abs(Math.sin(k * 0.55)) * (0.4 + 0.6 * noise(Math.floor(k / 6), 11));
    return clamp01(syll * (0.55 + 0.45 * noise(k, 5)));
  };
  const scrolling = tick > SLOTS;
  const bars = [];
  for (let i = 0; i <= SLOTS; i++) {
    const k = scrolling ? tick - SLOTS + i : i;
    if (k > tick) break;
    let lv = level(k);
    if (k === tick) lv *= easeOut(frac);
    const h = 4 + lv * 32;
    const x = i * STEP - (scrolling ? frac * STEP : 0);
    bars.push(<i key={k} style={{ left: x, height: h, top: (36 - h) / 2 }} />);
  }
  return <span className={u.wave}>{bars}</span>;
}

/* ------------------------------------------------------ estado turístico - */

export type PanelSection = {
  title: string;
  live: boolean;
  metrics: { value: string; label: string }[];
  narrative: string;
  items: { title: string; detail: string }[];
  spark: boolean;
};

export type PanelLabels = {
  title: string;
  live: string;
  delayed: string;
  sections: PanelSection[];
  spark: string;
  readOnly: string;
  footer: string;
};

/** Entrada de cada pieza del panel: `tpRise` (sube 10 px y aparece). */
function rise(lt: number, at: number): CSSProperties {
  const p = easeOutQuint(seg(lt, at, at + 550));
  return { opacity: p.toFixed(3), transform: `translate3d(0, ${((1 - p) * 10).toFixed(1)}px, 0)` };
}

function Sparkline() {
  const pts = Array.from({ length: 30 }, (_, i) => 20 + i * 0.9 + 14 * noise(i, 21) + (i > 20 ? (i - 20) * 2.2 : 0));
  const max = Math.max(...pts);
  const w = 300;
  const h = 44;
  const d = pts.map((v, i) => `${((i / 29) * w).toFixed(1)},${(h - 2 - (v / max) * (h - 6)).toFixed(1)}`).join(" ");
  return (
    <svg className={u.sparkSvg} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden>
      <polyline points={d} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function TourismPanel({
  p,
  alert,
  property,
  place,
  lt,
  at,
  progress,
}: {
  p: PanelLabels;
  alert: string;
  property: string;
  place: string;
  /** Tiempo local de la escena y cuándo se abrió el panel. */
  lt: number;
  at: number;
  /** Cuánto se lleva recorrido el cuerpo, de 0 (arriba) a 1 (el pie a la vista). */
  progress: number;
}) {
  const step = 85;
  // Cuánto se puede scrollear: se mide una vez, lo que sobra del contenido.
  const viewRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState(0);
  useLayoutEffect(() => {
    const vh = viewRef.current?.offsetHeight ?? 0;
    const bh = bodyRef.current?.offsetHeight ?? 0;
    setRoom(Math.max(0, bh - vh));
  }, []);
  const scroll = room * progress;
  return (
    <aside className={u.panel} data-panel>
      <div className={u.panelHeader}>
        <span className={u.panelTitle}>{p.title}</span>
        <span className={u.panelActions}>
          <span className={u.iconBtn}>
            <Svg>
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
            </Svg>
          </span>
          <span className={u.iconBtn}>
            <Svg>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </Svg>
          </span>
        </span>
      </div>
      <div ref={viewRef} className={u.panelScroll}>
        <div ref={bodyRef} style={{ transform: `translate3d(0, ${(-scroll).toFixed(1)}px, 0)` }}>
          <div className={u.panelHero} style={rise(lt, at + 100)}>
            <TourismMap color="#4e6b28" name={property} meta={place} width={396} height={206} />
          </div>
          <div className={u.panelBody}>
            <div className={u.alert} style={rise(lt, at + step)}>
              <svg className={u.alertIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
              <span>{alert}</span>
            </div>
            {p.sections.map((sec, i) => {
              const sAt = at + (i + 2) * step;
              return (
                <section key={sec.title} className={u.section} style={rise(lt, sAt)} data-section={i}>
                  <div className={u.sectionHead}>
                    <h4 className={u.sectionTitle}>{sec.title}</h4>
                    <span className={[u.chip, sec.live ? u.chipLive : u.chipMid].join(" ")}>{sec.live ? p.live : p.delayed}</span>
                  </div>
                  <div className={u.metrics}>
                    {sec.metrics.map((m, j) => (
                      <div key={m.label} className={u.metric} style={rise(lt, sAt + 140 + j * 45)}>
                        <div className={u.metricValue}>{m.value}</div>
                        <div className={u.metricLabel}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  {sec.narrative && <p className={u.narrative}>{sec.narrative}</p>}
                  {sec.spark && (
                    <div className={u.spark}>
                      <div className={u.sparkLabel}>{p.spark}</div>
                      <Sparkline />
                    </div>
                  )}
                  {sec.items.length > 0 && (
                    <ul className={u.items}>
                      {sec.items.map((it) => (
                        <li key={it.title} className={u.item}>
                          <span className={u.itemTitle}>{it.title}</span>
                          <span className={u.itemDetail}>{it.detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
            <p className={u.missing} style={rise(lt, at + (p.sections.length + 2) * step)}>
              {p.readOnly}
            </p>
          </div>
          <div className={u.footer} style={rise(lt, at + (p.sections.length + 3) * step)}>
            {p.footer}
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------ el orbe --- */

/** `cubic-bezier(x1, y1, x2, y2)` de CSS: resuelve x → t por Newton y devuelve y. */
function bezier(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const xOf = (t: number) => ((ax * t + bx) * t + cx) * t;
  const yOf = (t: number) => ((ay * t + by) * t + cy) * t;
  const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const d = dx(t);
      if (Math.abs(d) < 1e-6) break;
      t -= (xOf(t) - x) / d;
    }
    return yOf(Math.min(1, Math.max(0, t)));
  };
}

const TURN = bezier(0.65, 0, 0.25, 1);
const SPIN = bezier(0.2, 0.65, 0.3, 1);

/**
 * Un tramo de keyframes de CSS: entre `a` y `b` del ciclo va de `v0` a `v1`
 * con la curva del tramo (en CSS la curva se aplica por intervalo).
 */
const kf = (p: number, a: number, b: number, v0: number, v1: number, ease: (x: number) => number = TURN) => v0 + (v1 - v0) * ease(Math.min(1, Math.max(0, (p - a) / (b - a))));

/**
 * El orbe de Roombir IA con la animación del producto (`RoombirOrbLoader`,
 * copiada en `video/pms/OrbLoader.module.css`), pero como función del reloj y
 * con UN solo ciclo que termina quieto:
 *
 *      0 → 84 %   el logo gira 720° (cubic-bezier .65,0,.25,1), se achica a 0,9 en el medio
 *     26 → 34 %   el logo se va y entra la esfera de gradiente cónico
 *     26 → 60 %   la esfera gira 1,5 vueltas arrancando rápido y frenando
 *     52 → 60 %   vuelve el logo, se va la esfera
 *     84 → 100 %  reposo en la pose de arranque (720° = 0°)
 *
 * `p` es el avance del ciclo (0 → 1); antes y después queda el logo quieto.
 */
export function OrbSpin({ p, size }: { p: number; size: number }) {
  const q = Math.min(1, Math.max(0, p));
  const rot = kf(q, 0, 0.84, 0, -720);
  const scale = q < 0.42 ? kf(q, 0, 0.42, 1, 0.9) : kf(q, 0.42, 0.84, 0.9, 1);
  const logoOp = q < 0.26 ? 1 : q < 0.34 ? kf(q, 0.26, 0.34, 1, 0) : q < 0.52 ? 0 : kf(q, 0.52, 0.6, 0, 1);
  const ballOp = 1 - logoOp;
  const ballScale = q < 0.34 ? kf(q, 0.26, 0.34, 0.6, 1) : kf(q, 0.52, 0.6, 1, 0.6);
  const lin = (x: number) => x;
  const blurEm = q < 0.26 ? kf(q, 0.1, 0.26, 0, 0.03, lin) : q < 0.6 ? 0.03 : kf(q, 0.6, 0.78, 0.03, 0, lin);
  const ballRot = kf(q, 0.26, 0.6, 0, -540, SPIN);
  const ballBlur = kf(q, 0.26, 0.6, 0.03, 0.018, lin);
  const hue = kf(q, 0.26, 0.6, 0, 10, lin);
  return (
    <span style={{ position: "relative", display: "inline-block", width: size, height: size, flexShrink: 0 }} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/video/roombrain.png"
        alt=""
        width={size}
        height={size}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          maxWidth: "none",
          objectFit: "contain",
          opacity: logoOp.toFixed(3),
          transform: `rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(4)})`,
          filter: blurEm > 0.0005 ? `blur(${(blurEm * size).toFixed(2)}px)` : undefined,
        }}
      />
      {ballOp > 0.001 && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
            opacity: ballOp.toFixed(3),
            transform: `scale(${ballScale.toFixed(4)})`,
            boxShadow: `0 ${(0.0714 * size).toFixed(1)}px ${(0.3214 * size).toFixed(1)}px rgba(124, 92, 245, 0.35)`,
            filter: `blur(${(ballBlur * size).toFixed(2)}px) hue-rotate(${hue.toFixed(1)}deg) saturate(${(1.06 + (hue / 10) * 0.06).toFixed(3)})`,
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: -0.1429 * size,
              background: "conic-gradient(from 0deg, #2b7fff, #7c5cf5, #ec3d8f, #2b7fff)",
              transform: `rotate(${ballRot.toFixed(2)}deg)`,
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at 33% 27%, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0) 38%), radial-gradient(circle at 68% 78%, rgba(15, 23, 42, 0.28), rgba(15, 23, 42, 0) 52%)",
            }}
          />
        </span>
      )}
    </span>
  );
}
