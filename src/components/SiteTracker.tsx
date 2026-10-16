"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { routeKeyOf } from "@/i18n/routes";
import { loginUrl } from "@/lib/siteConfig";
import { flush, setPage, track, trackingEnabled } from "@/lib/track";

/**
 * Todo lo que se mide del sitio sale de acá, montado una vez en el layout.
 *
 * Por DELEGACIÓN sobre el documento, como el `Tracker` del LinkHub: ningún
 * botón ni formulario trae su propio onClick de telemetría, así las páginas
 * siguen siendo server components y agregar una sección nueva no exige
 * acordarse de instrumentarla. Lo único explícito es el resultado de un envío
 * (`form_success`, `form_error`, validación propia), que sólo el formulario
 * conoce: lo llaman `LeadForm` y `SignupForm` con `track()`.
 *
 * - Página: `page_view` en cada navegación (también las del router de Next) y
 *   `page_leave` con el tiempo de atención real (pestaña visible y alguien
 *   moviéndose en los últimos 30 s) y el scroll máximo.
 * - Clics: enlaces y botones, clasificados (CTA, alta, contacto, login, menú,
 *   externo, idioma…) y ubicados en una zona (header, mega menú, pie, sección).
 * - Formularios con `data-track-form`: visto, empezado, intento de envío,
 *   campos inválidos y abandono con el último campo tocado.
 * - Videos con controles: play, 25/50/75 % y completo. Los clips mudos en
 *   bucle son decorado y no cuentan.
 */

const IDLE_MS = 30_000;

interface PageState {
  pv: string;
  engagedMs: number;
  sentMs: number;
  scroll: number;
  lastActivity: number;
  closed: boolean;
}

interface FormState {
  started: number;
  fields: Set<string>;
  lastField: string;
  submitted: boolean;
  done: boolean;
}

const rid = () => Math.random().toString(36).slice(2, 10);

/** Formularios de la página actual. A nivel de módulo: `trackFormResult` lo usa desde afuera. */
let forms = new Map<HTMLFormElement, FormState>();

function formState(form: HTMLFormElement): FormState {
  let st = forms.get(form);
  if (!st) {
    st = { started: 0, fields: new Set(), lastField: "", submitted: false, done: false };
    forms.set(form, st);
  }
  return st;
}

function pageCtx(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  const locale = isLocale(first ?? "") ? first : null;
  const bare = locale ? `/${rest.join("/")}` : pathname;
  return { path: pathname, route: routeKeyOf(bare), locale };
}

function scrollPct(): number {
  const doc = document.documentElement;
  const max = doc.scrollHeight;
  if (max <= 0) return 100;
  return Math.min(100, Math.round(((window.scrollY + window.innerHeight) / max) * 100));
}

const clean = (s: string | null | undefined, max = 120) =>
  (s ?? "").replace(/\s+/g, " ").trim().slice(0, max);

/** Zona del clic: la más específica que se pueda nombrar sin tocar la página. */
function zoneOf(el: Element, route: string | null): string {
  const marked = el.closest<HTMLElement>("[data-zone]");
  if (marked) return marked.dataset.zone || "zona";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section");
  if (section) {
    if (section.id) return `${route ?? "pagina"}#${section.id}`;
    const main = document.querySelector("main");
    const all = main ? Array.from(main.querySelectorAll("section")) : [];
    const i = all.indexOf(section);
    if (i >= 0) return `${route ?? "pagina"}#s${i + 1}`;
  }
  return route ?? "pagina";
}

const SOCIAL = /(^|\.)(instagram|facebook|linkedin|tiktok|youtube|x|twitter|threads|wa|whatsapp)\.(com|me)$/;

/** Qué es el clic y adónde lleva. */
function classify(el: HTMLElement, current: { route: string | null; locale: string | null }) {
  const explicit = el.dataset.track;
  if (el instanceof HTMLAnchorElement && el.getAttribute("href")) {
    const raw = el.getAttribute("href") ?? "";
    if (raw.startsWith("mailto:")) return { kind: "mail", target: "mailto" };
    if (raw.startsWith("tel:")) return { kind: "tel", target: "tel" };
    let url: URL;
    try {
      url = new URL(el.href, window.location.href);
    } catch {
      return { kind: "link", target: explicit ?? raw.slice(0, 200) };
    }
    const host = url.host.toLowerCase();
    if (host === window.location.host || host === "roombir.com" || host === "www.roombir.com") {
      if (url.pathname === window.location.pathname && url.hash) {
        return { kind: "anchor", target: explicit ?? url.hash.slice(0, 80) };
      }
      const ctx = pageCtx(url.pathname);
      const key = ctx.route ?? url.pathname.slice(0, 200);
      if (ctx.route && ctx.route === current.route && ctx.locale && ctx.locale !== current.locale) {
        return { kind: "lang", target: ctx.locale };
      }
      const target = explicit ?? `${key}${url.hash}`;
      if (ctx.route === "crearCuenta") return { kind: "signup", target };
      if (ctx.route === "contacto") return { kind: "contact", target };
      if (el.classList.contains("btn")) return { kind: "cta", target };
      if (el.closest("header, footer, [data-zone]")) return { kind: "nav", target };
      return { kind: "link", target };
    }
    // "Ingresar" apunta al login del PMS (`NEXT_PUBLIC_APP_LOGIN_URL`).
    const login = new URL(loginUrl);
    if (host === login.host && url.pathname.startsWith(login.pathname)) return { kind: "login", target: "login" };
    if (/^app\./.test(host)) {
      return { kind: url.pathname.startsWith("/login") ? "login" : "cta", target: `${host}${url.pathname}`.slice(0, 200) };
    }
    if (SOCIAL.test(host)) return { kind: "social", target: host };
    return { kind: "outbound", target: host };
  }
  const label = explicit ?? el.getAttribute("aria-controls") ?? clean(el.getAttribute("aria-label") ?? el.textContent, 80);
  return { kind: el.classList.contains("btn") ? "cta" : "button", target: label };
}

/** Nombre de un campo: su `name`, que es un código del formulario, nunca su valor. */
function fieldName(el: EventTarget | null): string {
  if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return "";
  if (el.name === "website") return ""; // el campo trampa
  return /^[a-zA-Z0-9._-]{1,60}$/.test(el.name) ? el.name : "";
}

function formOf(el: EventTarget | null): HTMLFormElement | null {
  return el instanceof Element ? el.closest<HTMLFormElement>("form[data-track-form]") : null;
}

function videoName(v: HTMLVideoElement): string {
  const named = v.dataset.trackVideo;
  if (named) return named;
  try {
    return new URL(v.currentSrc || v.src, window.location.href).pathname.split("/").pop() || "video";
  } catch {
    return "video";
  }
}

export default function SiteTracker() {
  const pathname = usePathname();
  const pageRef = useRef<PageState | null>(null);
  const ctxRef = useRef(pageCtx(pathname ?? "/"));

  // ── Cierre de una página: atención, scroll y formularios abandonados ──
  const closePage = useRef((final: boolean) => {
    const p = pageRef.current;
    if (!p || p.closed) return;
    const delta = p.engagedMs - p.sentMs;
    if (delta > 0 || final) {
      track("page_leave", { pv: p.pv, engagedMs: delta, scroll: p.scroll });
      p.sentMs = p.engagedMs;
    }
    if (final) {
      p.closed = true;
      for (const [form, st] of forms) {
        if (!st.done && st.started) {
          track("form_abandon", {
            form: form.dataset.trackForm,
            lastField: st.lastField,
            fields: [...st.fields],
            ms: Date.now() - st.started,
          });
          st.done = true;
        }
      }
    }
  });

  // ── Vista de página en cada navegación ──
  useEffect(() => {
    if (!trackingEnabled()) return;
    closePage.current(true);
    flush();
    const ctx = pageCtx(pathname ?? window.location.pathname);
    ctxRef.current = ctx;
    setPage(ctx);
    const pv = rid();
    pageRef.current = { pv, engagedMs: 0, sentMs: 0, scroll: scrollPct(), lastActivity: Date.now(), closed: false };
    forms = new Map();
    track("page_view", { pv, title: clean(document.title, 200) });
    observeForms();
  }, [pathname]);

  // Volver con "atrás" desde la caché del navegador (bfcache) no remonta nada:
  // la página había cerrado en `pagehide` y vuelve a ser una vista.
  useEffect(() => {
    if (!trackingEnabled()) return;
    const onShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      const pv = rid();
      pageRef.current = { pv, engagedMs: 0, sentMs: 0, scroll: scrollPct(), lastActivity: Date.now(), closed: false };
      forms = new Map();
      track("page_view", { pv, title: clean(document.title, 200) });
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, []);

  // ── Formularios a la vista ──
  const viewObserver = useRef<IntersectionObserver | null>(null);
  function observeForms() {
    if (typeof IntersectionObserver === "undefined") return;
    viewObserver.current?.disconnect();
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || seen.has(e.target)) continue;
          seen.add(e.target);
          track("form_view", { form: (e.target as HTMLFormElement).dataset.trackForm });
          io.unobserve(e.target);
        }
      },
      { threshold: 0.25 },
    );
    viewObserver.current = io;
    // El formulario puede montarse después de la primera pintura.
    const scan = () => document.querySelectorAll("form[data-track-form]").forEach((f) => io.observe(f));
    scan();
    setTimeout(scan, 1500);
  }

  // ── Listeners globales, una sola vez ──
  useEffect(() => {
    if (!trackingEnabled()) return;

    const active = () => {
      const p = pageRef.current;
      if (p) p.lastActivity = Date.now();
    };
    const tick = setInterval(() => {
      const p = pageRef.current;
      if (!p || p.closed) return;
      if (document.visibilityState === "visible" && Date.now() - p.lastActivity < IDLE_MS) p.engagedMs += 1000;
    }, 1000);

    const onScroll = () => {
      active();
      const p = pageRef.current;
      if (p) p.scroll = Math.max(p.scroll, scrollPct());
    };

    const onClick = (e: MouseEvent) => {
      active();
      const el = (e.target as Element | null)?.closest<HTMLElement>("a[href], button, [role='button'], summary");
      if (!el) return;
      // El submit de un formulario medido lo cuenta `form_submit`.
      if (el instanceof HTMLButtonElement && el.type === "submit" && formOf(el)) return;
      const ctx = ctxRef.current;
      const { kind, target } = classify(el, ctx);
      track("click", {
        kind,
        target: clean(target, 200),
        zone: zoneOf(el, ctx.route).slice(0, 80),
        label: clean(el.dataset.trackLabel ?? el.getAttribute("aria-label") ?? el.textContent),
      });
      // Un enlace puede descargar la página (login, externo, alta en otra
      // pestaña): se manda YA por beacon, sin esperar la cola. Esperando, se
      // perdían el clic y la vista que todavía no había salido.
      if (el instanceof HTMLAnchorElement) flush(true);
    };

    const onFocusIn = (e: FocusEvent) => {
      const form = formOf(e.target);
      const name = fieldName(e.target);
      if (!form || !name) return;
      const st = formState(form);
      st.lastField = name;
      if (!st.started) {
        st.started = Date.now();
        track("form_start", { form: form.dataset.trackForm, field: name });
      }
    };

    const onChange = (e: Event) => {
      active();
      const form = formOf(e.target);
      const name = fieldName(e.target);
      if (!form || !name) return;
      const st = formState(form);
      const value = (e.target as HTMLInputElement).value;
      if (value && value.trim()) st.fields.add(name);
      else st.fields.delete(name);
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = formOf(e.target);
      if (!form) return;
      const st = formState(form);
      st.submitted = true;
      track("form_submit", {
        form: form.dataset.trackForm,
        fields: [...st.fields],
        ms: st.started ? Date.now() - st.started : 0,
      });
    };

    // Validación nativa del navegador: un `invalid` por campo, se juntan.
    let pendingInvalid: { form: HTMLFormElement; fields: Set<string> } | null = null;
    const onInvalid = (e: Event) => {
      const form = formOf(e.target);
      const name = fieldName(e.target);
      if (!form || !name) return;
      if (!pendingInvalid) {
        pendingInvalid = { form, fields: new Set() };
        setTimeout(() => {
          if (pendingInvalid) {
            track("form_invalid", { form: pendingInvalid.form.dataset.trackForm, fields: [...pendingInvalid.fields] });
          }
          pendingInvalid = null;
        }, 50);
      }
      pendingInvalid.fields.add(name);
    };

    // Videos: sólo los que alguien eligió mirar.
    const progress = new WeakMap<HTMLVideoElement, Set<number>>();
    const watched = (t: EventTarget | null): t is HTMLVideoElement =>
      t instanceof HTMLVideoElement && !t.loop && !t.muted && t.getAttribute("aria-hidden") !== "true";
    const onPlay = (e: Event) => {
      if (!watched(e.target)) return;
      if (!progress.has(e.target)) {
        progress.set(e.target, new Set());
        track("video_play", { video: videoName(e.target) });
      }
    };
    const onTime = (e: Event) => {
      if (!watched(e.target) || !e.target.duration) return;
      active();
      const marks = progress.get(e.target);
      if (!marks) return;
      const pct = (e.target.currentTime / e.target.duration) * 100;
      for (const m of [25, 50, 75]) {
        if (pct >= m && !marks.has(m)) {
          marks.add(m);
          track("video_progress", { video: videoName(e.target), pct: m });
        }
      }
    };
    const onEnded = (e: Event) => {
      if (!watched(e.target)) return;
      track("video_complete", { video: videoName(e.target) });
    };

    // Ocultar la pestaña es el último momento confiable en el móvil: se manda
    // lo acumulado. Si vuelve, la página sigue abierta y suma desde ahí.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        closePage.current(false);
        flush(true);
      } else {
        active();
      }
    };
    const onPageHide = () => {
      closePage.current(true);
      flush(true);
    };

    const opts = { capture: true, passive: true } as const;
    document.addEventListener("click", onClick, true);
    document.addEventListener("focusin", onFocusIn, true);
    document.addEventListener("input", onChange, true);
    document.addEventListener("change", onChange, true);
    document.addEventListener("submit", onSubmit, true);
    document.addEventListener("invalid", onInvalid, true);
    document.addEventListener("play", onPlay, true);
    document.addEventListener("timeupdate", onTime, true);
    document.addEventListener("ended", onEnded, true);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", onScroll, opts);
    window.addEventListener("pointerdown", active, opts);
    window.addEventListener("keydown", active, opts);
    window.addEventListener("pointermove", active, opts);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      clearInterval(tick);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("input", onChange, true);
      document.removeEventListener("change", onChange, true);
      document.removeEventListener("submit", onSubmit, true);
      document.removeEventListener("invalid", onInvalid, true);
      document.removeEventListener("play", onPlay, true);
      document.removeEventListener("timeupdate", onTime, true);
      document.removeEventListener("ended", onEnded, true);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll, opts);
      window.removeEventListener("pointerdown", active, opts);
      window.removeEventListener("keydown", active, opts);
      window.removeEventListener("pointermove", active, opts);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, []);

  return null;
}

/**
 * Resultado de un envío. Lo llama el propio formulario: sólo él sabe si el
 * servidor lo aceptó. Un éxito cierra el formulario (ya no cuenta como
 * abandono); un error no, porque la persona todavía puede corregir y reenviar.
 */
export function trackFormResult(
  formEl: HTMLFormElement | null,
  form: string,
  result: { ok: true } | { ok: false; code: string },
) {
  const st = formEl ? forms.get(formEl) : undefined;
  if (result.ok) {
    if (st) st.done = true;
    track("form_success", { form, ms: st?.started ? Date.now() - st.started : 0 });
  } else {
    track("form_error", { form, code: result.code });
  }
}

/** Validación propia del formulario (los que usan `noValidate`). */
export function trackFormInvalid(form: string, fields: string[]) {
  if (fields.length) track("form_invalid", { form, fields: fields.slice(0, 30) });
}
