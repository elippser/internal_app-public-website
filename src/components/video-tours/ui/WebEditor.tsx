import type { CSSProperties, ReactNode } from "react";
import type { Dictionary } from "@/i18n/dict/es";
import s from "./WebEditor.module.css";

/**
 * El editor web del hub de Marketing, reciclado del constructor real
 * (`pms-core/app/src/app/apps/builder/components/Builder/`):
 *
 * - Barra 1 (45 px, blanca): el grupo de la izquierda de
 *   `SidebarContentEditor.tsx` (Agregar · Capas · Archivos · Popups · Motor ·
 *   Ajustes · Editor IA) y las acciones de `TopbarSaveDetails.tsx` (Vista
 *   previa, "Sin publicar" (sin su "Descartar": no entra en alemán), el chip de Calidad y Publicar).
 * - Barra 2 (46 px, modo simple): `SimpleModeTopbar.tsx` — página, dispositivo,
 *   la URL con "Ver en línea" y "Conecta tu dominio", deshacer y zoom.
 * - Panel izquierdo de 250 px: el chat `ChatBotPrincipal.tsx` (texto del
 *   asistente sin burbuja, burbuja azul del usuario, tarjetas de paso, el
 *   interruptor "Citar elementos" y el compositor).
 * - El lienzo gris `#d9d9d9` con la página del sitio.
 * - El panel de `SiteQuality` (468 px, cinco medidores, "Arreglar todo").
 *
 * Todo lo que se mueve lo decide la escena: acá no hay estado.
 */

export type EditorLabels = Dictionary["videoTours"]["marketing"]["editor"];

export type EdMsg =
  | { kind: "ai"; text: string; streaming?: boolean }
  | { kind: "user"; text: string; shot?: boolean; quote?: string }
  | { kind: "step"; label: string; done: boolean };

export type EditorState = {
  msgs: EdMsg[];
  draft: { text: string; caret: boolean; shot: number; quote: number };
  /** Entrada (0..1) de cada sección de la página y de las dos tarjetas nuevas. */
  page: { hero: number; rooms: number; reviews: number; extra: number; selected: number; scroll: number };
  quality: { open: number; scores: number[]; fixed: number };
  published: boolean;
  draftBadge: boolean;
};

const PHOTOS = ["/video/tours/superior.jpg", "/video/tours/suite.jpg", "/video/tours/cabana.jpg", "/video/tours/doble.jpg", "/video/tours/cabana-living.jpg"];
const GUESTS = [2, 3, 4, 2, 5];

/* -------------------------------------------------------------- iconos --- */

function I({ children, size = 15 }: { children: ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}
const ICON = {
  add: <path d="M12 5v14M5 12h14" />,
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  files: <path d="M4 5a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />,
  popups: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <rect x="7" y="8" width="10" height="8" rx="1" />
    </>
  ),
  motor: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  cloud: <path d="M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8zM12 16v-5M9.5 13.5L12 11l2.5 2.5" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  tablet: <rect x="5" y="3" width="14" height="18" rx="2" />,
  phone: <rect x="7" y="3" width="10" height="18" rx="2" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  undo: <path d="M9 14L4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3" />,
  redo: <path d="M15 14l5-5-5-5M20 9H9a5 5 0 0 0 0 10h3" />,
  minus: <path d="M5 12h14" />,
  chev: <path d="M6 9l6 6 6-6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 16l-5-5-9 9" />
    </>
  ),
  send: <path d="M12 19V5M6 11l6-6 6 6" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" stroke="none" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
};

function Spark({ size = 14 }: { size?: number }) {
  // El pictograma de Roombir IA (el mismo del riel del PMS).
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M12 2.5c2.3 0 4.2 1.5 4.9 3.6 2.1.7 3.6 2.6 3.6 4.9s-1.5 4.2-3.6 4.9c-.7 2.1-2.6 3.6-4.9 3.6s-4.2-1.5-4.9-3.6C5 15.2 3.5 13.3 3.5 11s1.5-4.2 3.6-4.9C7.8 4 9.7 2.5 12 2.5z" fill="#14150f" />
      <path d="M12 7.2l1.1 2.7 2.7 1.1-2.7 1.1L12 14.8l-1.1-2.7L8.2 11l2.7-1.1z" fill="#c8e293" />
    </svg>
  );
}

/* ------------------------------------------------------------ medidor ---- */

const qColor = (v: number) => (v >= 90 ? "#0cce6b" : v >= 50 ? "#ffa400" : "#ff4e42");

export function Gauge({ value, size, stroke = 4, label, big = false }: { value: number; size: number; stroke?: number; label?: string; big?: boolean }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const col = qColor(value);
  return (
    <div className={s.gauge} style={{ width: size }}>
      <div className={s.gaugeRing} style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden>
          <circle cx={size / 2} cy={size / 2} r={r} fill={`${col}14`} stroke="#e8ebf0" strokeWidth={stroke} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={col} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={`${((c * value) / 100).toFixed(2)} ${c.toFixed(2)}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
        </svg>
        <span style={{ color: col, fontSize: big ? size * 0.32 : size * 0.34 }}>{Math.round(value)}</span>
      </div>
      {label && <span className={s.gaugeLabel}>{label}</span>}
    </div>
  );
}

/* ----------------------------------------------------------- el sitio ---- */

function Site({ l, p }: { l: EditorLabels; p: EditorState["page"] }) {
  const st = (v: number): CSSProperties => ({
    opacity: Math.min(1, v * 1.4).toFixed(3),
    transform: `translate3d(0, ${((1 - v) * 18).toFixed(1)}px, 0)`,
    filter: v < 0.98 ? `blur(${((1 - v) * 6).toFixed(1)}px)` : undefined,
  });
  const n = p.extra > 0 ? 5 : 3;
  const empty = p.hero <= 0;
  return (
    <div className={s.site} style={{ transform: `translate3d(0, ${(-p.scroll).toFixed(1)}px, 0)` }}>
      <nav className={s.siteNav}>
        <span className={s.siteBrand}>
          <b>HP</b>Hotel del Parque
        </span>
        <span className={s.siteLinks}>
          {l.site.nav.map((t) => (
            <span key={t}>{t}</span>
          ))}
          <i>{l.site.book}</i>
        </span>
      </nav>
      {empty && <div className={s.siteEmpty} />}
      {p.hero > 0 && (
        <section className={s.hero} style={st(p.hero)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/video/rooms/room1.jpg" alt="" />
          <div>
            <h3>{l.site.heroTitle}</h3>
            <p>{l.site.heroSub}</p>
            <i>{l.site.book}</i>
          </div>
        </section>
      )}
      {p.rooms > 0 && (
        <section data-ed="rooms" className={[s.rooms, p.selected > 0 ? s.selected : ""].join(" ")} style={{ ...st(p.rooms), ["--sel" as string]: p.selected.toFixed(3) }}>
          {p.selected > 0 && <span className={s.selTag}>{l.chat.quote}</span>}
          <h4>{l.site.roomsTitle}</h4>
          <div className={s.cards}>
            {l.site.rooms.slice(0, n).map((name, i) => (
              <div key={name} className={s.card} style={i >= 3 ? st(p.extra) : undefined}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS[i]} alt="" />
                <b>{name}</b>
                <span>
                  <I size={11}>{ICON.user}</I>
                  {GUESTS[i]} {l.site.guests}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
      {p.reviews > 0 && (
        <section className={s.reviews} style={st(p.reviews)}>
          <h4>{l.site.reviewsTitle}</h4>
          <div className={s.review}>
            <span className={s.stars}>
              {[0, 1, 2, 3, 4].map((i) => (
                <I key={i} size={13}>
                  {ICON.star}
                </I>
              ))}
            </span>
            <p>“{l.site.review}”</p>
            <small>{l.site.reviewer}</small>
          </div>
        </section>
      )}
    </div>
  );
}

/* ----------------------------------------------------- captura pegada ---- */

/** La miniatura de la captura que se pega: la portada de otro hotel, dibujada. */
export function ShotThumb({ w = 64 }: { w?: number }) {
  return (
    <span className={s.shot} style={{ width: w, height: w * 0.62 }}>
      <i className={s.shotNav} />
      <i className={s.shotHero} />
      <i className={s.shotRow}>
        <b />
        <b />
        <b />
      </i>
    </span>
  );
}

/* --------------------------------------------------------------- chat ---- */

function Chat({ l, st }: { l: EditorLabels; st: EditorState }) {
  const d = st.draft;
  const empty = !d.text && d.shot <= 0 && d.quote <= 0;
  return (
    <aside className={s.chat}>
      <header className={s.chatHead}>
        <Spark size={16} />
        <b>{l.chat.title}</b>
        <span className={s.chatClose}>
          <I size={13}>{ICON.close}</I>
        </span>
      </header>
      <div className={s.msgs}>
        <p className={s.ai}>{l.chat.hello}</p>
        {st.msgs.map((m, i) =>
          m.kind === "user" ? (
            <div key={i} className={s.user}>
              {m.shot && <ShotThumb w={96} />}
              {m.quote && <span className={s.quote}>@{m.quote}</span>}
              <span>{m.text}</span>
            </div>
          ) : m.kind === "step" ? (
            <div key={i} className={[s.step, m.done ? s.stepOk : s.stepRun].join(" ")}>
              <span className={s.stepIcon}>{m.done ? "✓" : <span className={s.spin}>⚙</span>}</span>
              {m.label}
            </div>
          ) : (
            <p key={i} className={s.ai}>
              {m.text}
              {m.streaming && <span className={s.caretAi}> ▍</span>}
            </p>
          ),
        )}
      </div>
      <div className={s.composer}>
        <div className={s.citeRow}>
          <span className={s.cite}>
            {l.chat.cite}
            <span className={[s.switch, s.switchOn].join(" ")}>
              <i />
            </span>
          </span>
        </div>
        <div data-ed="composer" className={[s.box, d.text || d.caret ? s.boxFocus : ""].join(" ")}>
          {(d.shot > 0 || d.quote > 0) && (
            <div className={s.chips}>
              {d.shot > 0 && (
                <span className={s.attach} style={{ opacity: d.shot.toFixed(3), transform: `scale(${(0.8 + 0.2 * d.shot).toFixed(3)})` }}>
                  <ShotThumb w={34} />
                  <span>{l.chat.shot}</span>
                </span>
              )}
              {d.quote > 0 && (
                <span className={s.quote} style={{ opacity: d.quote.toFixed(3), transform: `scale(${(0.8 + 0.2 * d.quote).toFixed(3)})` }}>
                  @{l.chat.quote}
                </span>
              )}
            </div>
          )}
          <div className={s.input}>
            {d.text ? d.text : !d.caret && <span className={s.placeholder}>{l.chat.placeholder}</span>}
            {d.caret && <span className={s.caret} />}
          </div>
          <div className={s.boxBar}>
            <span className={s.boxIcon}>
              <I size={14}>{ICON.image}</I>
            </span>
            <span data-ed="send" className={[s.send, empty ? s.sendOff : ""].join(" ")}>
              <I size={14}>{ICON.send}</I>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------ calidad ---- */

function Quality({ l, q }: { l: EditorLabels; q: EditorState["quality"] }) {
  const avg = q.scores.reduce((a, b) => a + b, 0) / q.scores.length;
  const left = Math.round(3 * (1 - q.fixed));
  return (
    <div className={s.quality} style={{ opacity: Math.min(1, q.open * 1.4).toFixed(3), transform: `translate3d(0, ${((1 - q.open) * -10).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * q.open).toFixed(4)})` }}>
      <header className={s.qHead}>
        <b>{l.quality.title}</b>
        <span>{l.quality.sub}</span>
      </header>
      <div className={s.qGauges}>
        {q.scores.map((v, i) => (
          <Gauge key={i} value={v} size={52} label={l.quality.gauges[i]} />
        ))}
      </div>
      <div className={s.qHero}>
        <Gauge value={avg} size={92} stroke={7} big />
        <div className={s.qHeroText}>
          <b>{l.quality.overall}</b>
          <div className={s.qActions}>
            <span data-ed="fix" className={[s.fix, left === 0 ? s.fixDone : ""].join(" ")}>
              {l.quality.fix}
              {left > 0 && ` (${left})`}
            </span>
            <span className={s.recheck}>{l.quality.recheck}</span>
          </div>
          <div className={s.legend}>
            <span>
              <i style={{ background: "#ff4e42" }} />
              0–49
            </span>
            <span>
              <i style={{ background: "#ffa400" }} />
              50–89
            </span>
            <span>
              <i style={{ background: "#0cce6b" }} />
              90–100
            </span>
          </div>
        </div>
      </div>
      <div className={s.qList}>
        <span className={s.qGroup}>{q.fixed >= 1 ? l.quality.passed : l.quality.errors}</span>
        {l.quality.issues.map((t, i) => {
          const ok = q.fixed >= (i + 1) / 3 - 0.01;
          return (
            <div key={t} className={s.qItem}>
              <i className={ok ? s.qOk : i === 1 ? s.qWarn : s.qBad}>{ok ? "✓" : i === 1 ? "!" : "▲"}</i>
              <span>{t}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ ventana ---- */

export default function WebEditor({ l, st, width, height }: { l: EditorLabels; st: EditorState; width: number; height: number }) {
  const b = l.bar;
  const avg = st.quality.scores.reduce((a, c) => a + c, 0) / st.quality.scores.length;
  const tools: [keyof typeof ICON, string][] = [
    ["add", b.add],
    ["layers", b.layers],
    ["files", b.files],
    ["popups", b.popups],
    ["motor", b.motor],
    ["settings", b.settings],
  ];
  return (
    <div className={s.app} style={{ width, height }} aria-hidden>
      <div className={s.bar1}>
        <div className={s.tools}>
          {tools.map(([k, t]) => (
            <span key={k} className={s.tool}>
              <I>{ICON[k]}</I>
              {t}
            </span>
          ))}
          <span className={[s.tool, s.aiTool].join(" ")}>
            <Spark size={15} />
            {b.ai}
            <em>IA</em>
          </span>
        </div>
        <div className={s.actions}>
          <span className={s.preview}>
            <I size={15}>{ICON.eye}</I>
            {b.preview}
          </span>
          {st.draftBadge && (
            <span data-ed="draft" className={s.draft}>
              <i />
              {b.unpublished}
            </span>
          )}
          <span data-ed="quality" className={s.qChip}>
            <Gauge value={avg} size={22} stroke={2.5} />
            {b.quality}
          </span>
          <span data-ed="publish" className={s.publish}>
            <I size={15}>{st.published ? ICON.heart : ICON.cloud}</I>
            {st.published ? b.published : b.publish}
          </span>
        </div>
      </div>
      <div className={s.bar2}>
        <div className={s.b2Left}>
          <span className={s.muted}>{b.page}</span>
          <span className={s.select}>
            {b.pageName}
            <I size={12}>{ICON.chev}</I>
          </span>
          <span className={s.divider} />
          <span className={s.muted}>
            {b.editIn} <b>{b.device}</b>
          </span>
          <span className={s.seg}>
            <span className={s.segOn}>
              <I size={14}>{ICON.desktop}</I>
            </span>
            <span>
              <I size={14}>{ICON.tablet}</I>
            </span>
            <span>
              <I size={14}>{ICON.phone}</I>
            </span>
          </span>
        </div>
        <div className={s.b2Center}>
          <span className={s.url}>
            <I size={12}>{ICON.globe}</I>
            hoteldelparque.com
          </span>
          <span className={s.live}>{b.live}</span>
          <span className={s.domain}>{b.domain}</span>
        </div>
        <div className={s.b2Right}>
          <span className={s.seg}>
            <span>
              <I size={14}>{ICON.undo}</I>
            </span>
            <span>
              <I size={14}>{ICON.redo}</I>
            </span>
          </span>
          <span className={s.seg}>
            <span>
              <I size={14}>{ICON.minus}</I>
            </span>
            <span className={s.zoom}>100%</span>
            <span>
              <I size={14}>{ICON.add}</I>
            </span>
          </span>
        </div>
      </div>
      <div className={s.body}>
        <Chat l={l} st={st} />
        <div className={s.canvas}>
          <Site l={l} p={st.page} />
        </div>
      </div>
      {st.quality.open > 0 && <Quality l={l} q={st.quality} />}
    </div>
  );
}
