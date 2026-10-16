/**
 * Telemetría del sitio: visitas, clics, formularios y videos.
 *
 * Primera parte, sin terceros: los eventos van al `/api/track` del propio
 * dominio, que les agrega país y navegador y los reenvía al API interno
 * (colección `mkt_site_events`, tablero Marketing › Tráfico del panel).
 *
 * Nada identificable. `vid` es un id al azar por navegador (localStorage) y
 * `sid` uno por sesión, que se corta a los 30 minutos sin actividad o cuando
 * entra una campaña distinta (la regla de siempre de la analítica web). De los
 * formularios se manda qué CAMPO se tocó, jamás lo que se escribió.
 *
 * Si están cargados GA4 o el pixel de Meta (`Pixels.tsx`), las conversiones se
 * les espejan también, para que las campañas tengan contra qué optimizar.
 */

const ENDPOINT = "/api/track";
const VISITOR_KEY = "rb_vid";
const SESSION_KEY = "rb_ses";
const SESSION_IDLE_MS = 30 * 60_000;
const FLUSH_MS = 5_000;
const FLUSH_AT = 10;
const OWN_HOST = /(^|\.)roombir\.com$/;

export type EventType =
  | "page_view"
  | "page_leave"
  | "click"
  | "form_view"
  | "form_start"
  | "form_invalid"
  | "form_submit"
  | "form_success"
  | "form_error"
  | "form_abandon"
  | "video_play"
  | "video_progress"
  | "video_complete";

interface Utm {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

interface Session {
  id: string;
  last: number;
  refHost: string | null;
  utm?: Utm;
  landing: string;
  newVisitor: boolean;
}

interface PageCtx {
  path: string;
  route: string | null;
  locale: string | null;
}

let page: PageCtx = { path: "/", route: null, locale: null };
let queue: Record<string, unknown>[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;
let memVisitor = "";
let memSession: Session | null = null;

const rid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

/**
 * Se mide en producción y no adentro de un iframe: en el panel interno el sitio
 * se ve embebido mientras alguien lo edita, y esas visitas no son tráfico. La
 * misma regla que los pixels. `NEXT_PUBLIC_TRACK_DEV=1` lo prende en local.
 */
export function trackingEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_TRACK_DEV !== "1") return false;
  try {
    if (window.top !== window.self) return false;
  } catch {
    return false;
  }
  const { pathname, search } = window.location;
  if (/^\/[a-z]{2}\/preview\//.test(pathname) || /[?&]edit=/.test(search)) return false;
  return true;
}

function visitor(): { id: string; isNew: boolean } {
  try {
    const existing = localStorage.getItem(VISITOR_KEY);
    if (existing) return { id: existing, isNew: false };
    const id = rid();
    localStorage.setItem(VISITOR_KEY, id);
    return { id, isNew: true };
  } catch {
    // Sin storage (navegación privada estricta): uno por carga de página.
    if (!memVisitor) memVisitor = rid();
    return { id: memVisitor, isNew: false };
  }
}

function readUtm(): Utm | undefined {
  const params = new URLSearchParams(window.location.search);
  const utm: Utm = {};
  for (const key of ["source", "medium", "campaign", "term", "content"] as const) {
    const v = params.get(`utm_${key}`);
    if (v) utm[key] = v.slice(0, 160);
  }
  // Los clics de anuncios llegan con su id y sin utm: igual son pagos.
  if (!utm.source && params.get("gclid")) Object.assign(utm, { source: "google", medium: "cpc" });
  // fbclid lo pone Meta también en los enlaces orgánicos: sólo dice "vino de
  // Meta", no que sea pago. Por eso fuente sin medio.
  if (!utm.source && params.get("fbclid")) utm.source = "facebook";
  return Object.keys(utm).length ? utm : undefined;
}

function refHost(): string | null {
  try {
    if (!document.referrer) return null;
    const host = new URL(document.referrer).host.toLowerCase();
    return OWN_HOST.test(host) || host === window.location.host ? null : host;
  } catch {
    return null;
  }
}

function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return memSession;
  }
}

function saveSession(s: Session) {
  memSession = s;
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
    // Queda en memoria.
  }
}

/**
 * La sesión vigente, o una nueva. Atribución de la primera página: el
 * referente externo y las utm con las que entró, y vale para toda la sesión.
 * Una campaña distinta abre sesión nueva aunque no haya pasado media hora.
 */
function session(isNewVisitor: boolean, atLanding: boolean): Session {
  const now = Date.now();
  const current = loadSession();
  const utm = atLanding ? readUtm() : undefined;
  const ref = atLanding ? refHost() : null;
  const sameCampaign =
    !utm || (current?.utm?.source === utm.source && current?.utm?.campaign === utm.campaign);
  const alive = current && now - current.last < SESSION_IDLE_MS && sameCampaign && !(ref && ref !== current.refHost);
  const s: Session = alive
    ? { ...current, last: now }
    : {
        id: rid(),
        last: now,
        refHost: ref,
        utm,
        landing: window.location.pathname,
        newVisitor: isNewVisitor,
      };
  saveSession(s);
  return s;
}

let landingDone = false;

/** Lo llama el tracker en cada navegación. */
export function setPage(ctx: PageCtx) {
  page = ctx;
}

function device(): "mobile" | "tablet" | "desktop" {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  return w < 1024 ? "tablet" : "desktop";
}

export function track(t: EventType, data: Record<string, unknown> = {}) {
  if (!trackingEnabled()) return;
  const v = visitor();
  const s = session(v.isNew, !landingDone);
  landingDone = true;
  queue.push({
    t,
    vid: v.id,
    sid: s.id,
    ts: new Date().toISOString(),
    path: page.path,
    route: page.route,
    locale: page.locale,
    refHost: s.refHost,
    utm: s.utm,
    landing: s.landing,
    newVisitor: s.newVisitor,
    device: device(),
    data,
  });
  mirror(t, data);
  if (queue.length >= FLUSH_AT) flush();
  else if (!timer) timer = setTimeout(() => flush(), FLUSH_MS);
}

/**
 * El visitante y la sesión vigentes, para que un formulario los mande junto con
 * el alta: así el lead queda unido a su recorrido en el sitio y al canal por el
 * que entró, aunque haya llegado a /crear-cuenta navegando desde otra página
 * (las `utm` de la URL ya no están ahí, pero sí en la sesión). Vacío donde no
 * se mide (local, iframe del panel).
 */
export function attribution(): {
  vid: string;
  sid: string;
  landing: string;
  refHost: string;
  utm: Record<string, string>;
} | null {
  if (!trackingEnabled()) return null;
  const v = visitor();
  const s = session(v.isNew, !landingDone);
  landingDone = true;
  const utm: Record<string, string> = {};
  for (const [key, value] of Object.entries(s.utm ?? {})) if (value) utm[`utm_${key}`] = value;
  return { vid: v.id, sid: s.id, landing: s.landing, refHost: s.refHost ?? "", utm };
}

/**
 * Manda la cola. Con `beacon` (al ocultarse o cerrar la pestaña) va por
 * `sendBeacon`, que sobrevive a la descarga de la página; si no, fetch.
 */
export function flush(beacon = false) {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  if (!queue.length) return;
  const batch = queue.splice(0, 50);
  const body = JSON.stringify({ events: batch });
  try {
    if (beacon && navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }))) {
      if (queue.length) flush(beacon);
      return;
    }
  } catch {
    // Cae al fetch.
  }
  fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
  if (queue.length) flush(beacon);
}

// ── Espejo a GA4 / Meta (sólo si Pixels.tsx los cargó) ────────────────────

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

function mirror(t: EventType, data: Record<string, unknown>) {
  const w = window as unknown as { gtag?: Gtag; fbq?: Fbq };
  try {
    if (t === "form_success") {
      const signup = data.form === "signup";
      w.gtag?.("event", signup ? "sign_up" : "generate_lead", { form: data.form });
      w.fbq?.("track", signup ? "CompleteRegistration" : "Lead");
    } else if (t === "click" && ["cta", "signup", "contact"].includes(String(data.kind))) {
      w.gtag?.("event", "cta_click", { target: data.target, zone: data.zone });
    } else if (t === "form_start") {
      w.gtag?.("event", "form_start", { form: data.form });
    }
  } catch {
    // Un pixel roto no puede romper el sitio.
  }
}
