"use client";

import { useLayoutEffect, useRef } from "react";
import SNAP from "./motor-real.json";

/**
 * El motor de reservas REAL del web-renderer, en móvil, dentro del teléfono de
 * los videos. `motor-real.json` es una captura (`scripts/capture-motor.cjs`):
 * el HTML de la hoja del motor en tres estados —buscador con el calendario,
 * viajeros y resultados— y sólo las reglas CSS que la afectan, con las
 * `@media` de móvil ya desenvueltas. Se monta en un shadow root para que ese
 * CSS no toque el sitio ni el sitio lo toque a él.
 *
 * Lo único que el video cambia son los DATOS (el mes, precios y unidades por
 * día, el rango elegido, las habitaciones con sus fotos) y los textos, en el
 * idioma del video. Clases, estructura y estilos son los del motor.
 */

export type MotorState = "search" | "guests" | "results";

export type MotorUi = {
  travelers: string;
  dates: string;
  adults: string;
  adultsHint: string;
  children: string;
  childrenHint: string;
  infants: string;
  infantsHint: string;
  code: string;
  /** El nombre de la promo de reserva directa (los estados con promo). */
  promoName: string;
  optional: string;
  back: string;
  done: string;
  available: string;
  range: string;
  dayRange: string;
  nights: string;
  adultsCount: string;
  monthCaption: string;
  dows: string[];
};

export type MotorData = {
  ui: MotorUi;
  bookTitle: string;
  checkin: string;
  checkout: string;
  cancel: string;
  next: string;
  search: string;
  monthTitle: string;
  perNight: string;
  rooms: { name: string; price: string }[];
  photos: string[];
};

type Sel = { a: number | null; b: number | null; tab: 0 | 1; chosen: number | null; /** Lo tipeado en el campo del código (estados con promo). */ code?: string };

/** El código de la promo capturada (`PROMO=1 scripts/capture-motor.cjs`): -10 % por reservar directo. */
export const PROMO_CODE = "DIRECTO10";
const PROMO_OFF = 0.1;

/** "$ 106.260" → "$ 95.630": el mismo formato (símbolo y separador de miles), redondeado a decenas. */
function discounted(price: string): string {
  const digits = price.replace(/\D/g, "");
  if (!digits) return price;
  const sep = /\d([.,])\d{3}/.exec(price)?.[1] ?? ".";
  const n = Math.round((Number(digits) * (1 - PROMO_OFF)) / 10) * 10;
  const out = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return price.replace(/[\d.,]*\d/, out);
}

/** Marzo de 2026 (empieza en domingo): precio desde y unidades libres por día. */
const TODAY = 14;
function month() {
  return Array.from({ length: 31 }, (_, i) => {
    const n = i + 1;
    const dow = i % 7;
    const units = n === 21 ? 3 : n === 20 ? 6 : n === 22 ? 8 : n === 28 ? 9 : n === 27 ? 11 : 12;
    const price = n === 21 ? "$106k" : dow === 5 || dow === 6 || n === 22 ? "$104k" : "$96k";
    return { n, units, price, off: n < TODAY };
  });
}

function dayButton(d: ReturnType<typeof month>[number], s: Sel) {
  const iso = `2026-03-${String(d.n).padStart(2, "0")}`;
  const edge = d.n === s.a || d.n === s.b;
  const hasRange = s.a !== null && s.b !== null;
  let cls = "motor-cal-day";
  if (edge) {
    cls += " motor-cal-selected";
    if (hasRange && d.n === s.a) cls += " motor-cal-start";
    if (hasRange && d.n === s.b) cls += " motor-cal-end";
  } else if (d.off) cls += " motor-cal-disabled";
  else if (hasRange && d.n > (s.a as number) && d.n < (s.b as number)) cls += " motor-cal-inrange";
  const dot = d.off ? "" : `<span class="motor-cal-day-dot motor-cal-day-dot--${d.units <= 2 ? "warn" : "ok"}" aria-hidden="true"></span>`;
  return `<button type="button" data-iso="${iso}" data-day="${d.n}" data-blocked="${d.off ? 1 : 0}" class="${cls}" aria-disabled="${d.off}"><span class="motor-cal-day-units">${d.units}u</span><span class="motor-cal-day-num">${d.n}</span><span class="motor-cal-day-price">${d.price}</span>${dot}</button>`;
}

/** La cadena de ancestros reales (html, body, … el overlay y el wrapper del modal) envolviendo la hoja. */
function wrap(html: string) {
  let open = "";
  let close = "";
  for (const a of SNAP.chain) {
    const cls = a.tag === "html" ? `mr-html ${a.cls}` : a.tag === "body" ? `mr-body ${a.cls}` : a.cls;
    open += `<div class="${cls}" style="${a.style.replace(/overflow: hidden;?/g, "")}">`;
    close = "</div>" + close;
  }
  return open + html + close;
}

/** Reglas del video: el marco de la captura ocupa la pantalla del teléfono. */
const HOST_CSS = `
:host{all:initial;display:block;position:absolute;inset:0;overflow:hidden}
.mr-html{position:absolute;inset:0;overflow:hidden;background:transparent}
.mr-body{position:absolute;inset:0;margin:0;overflow:hidden;background:transparent}
*{animation-duration:0s!important;transition:none!important}
`;

const text = (root: ShadowRoot, sel: string, t: string, all = false) => {
  const els = all ? root.querySelectorAll(sel) : [root.querySelector(sel)];
  els.forEach((el) => {
    if (el) el.textContent = t;
  });
};

/** Cambia el texto de los nodos cuyo texto (sin espacios) es `from`. */
const swap = (root: ShadowRoot, pairs: [string, string][]) => {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const map = new Map(pairs);
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    const k = (n.nodeValue ?? "").trim();
    const v = map.get(k);
    if (v !== undefined) n.nodeValue = v;
  }
};

/**
 * Un estado del motor real. `onPoints` devuelve (en px lógicos, relativos al
 * host) dónde quedaron los elementos que el video señala o toca.
 */
export function MotorReal({ state, data, sel, onPoints, promo = false }: { state: MotorState; data: MotorData; sel: Sel; onPoints?: (p: Record<string, { x: number; y: number; w: number; h: number }>) => void; /** Los estados capturados con una promo aplicada (viajeros con código, resultados con etiqueta y precio tachado). */ promo?: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const built = useRef<string>("");
  const days = month();
  const u = data.ui;

  useLayoutEffect(() => {
    const el = host.current;
    if (!el) return;
    const root = el.shadowRoot ?? el.attachShadow({ mode: "open" });
    // El marcado base: una vez por estado.
    const key = promo && state !== "search" ? (`${state}Promo` as const) : state;
    if (built.current !== key) {
      root.innerHTML = `<style>${SNAP.css}${HOST_CSS}</style>${wrap(SNAP[key])}`;
      built.current = key;
      // Un solo mes en el calendario (el de la historia): el resto de la lista se va.
      root.querySelectorAll(".motor-cal-month").forEach((m, i) => {
        if (i > 0) m.remove();
      });
      // Textos fijos, en el idioma del video.
      text(root, ".motor-msearch-idcard-title", data.bookTitle);
      text(root, ".motor-cal-title", data.monthTitle, true);
      text(root, ".motor-cal-month-caption", u.monthCaption, true);
      root.querySelectorAll(".motor-cal-dayheader").forEach((d, i) => (d.textContent = u.dows[i] ?? d.textContent));
      const tabs = root.querySelectorAll(".motor-cal-tab");
      if (tabs[0]) tabs[0].textContent = data.checkin;
      if (tabs[1]) tabs[1].textContent = data.checkout;
      text(root, ".motor-msearch-btn--ghost", state === "guests" ? u.back : data.cancel);
      text(root, ".motor-msearch-btn--accent", state === "guests" ? data.search : data.next);
      text(root, ".motor-msearch-summary-title", u.available);
      text(root, ".motor-msearch-summary-sub", `${u.range} · ${u.adultsCount} · ${u.nights}`);
      text(root, ".motor-msearch-searchbtn-text", data.search);
      text(root, ".motor-results-title", u.available);
      text(root, ".motor-results-summary", `${u.range} · ${u.adultsCount} · ${u.nights}`);
      swap(root, [
        ["Fechas", u.dates],
        ["Viajeros", u.travelers],
        ["Adultos", u.adults],
        ["Mayores de 18", u.adultsHint],
        ["Niños", u.children],
        ["3 – 17 años", u.childrenHint],
        ["Bebés", u.infants],
        ["0 – 2 años", u.infantsHint],
        ["Código", u.code],
        ["Listo", u.done],
      ]);
      root.querySelectorAll("input").forEach((i) => i.setAttribute("placeholder", u.optional));
      root.querySelectorAll(".motor-msearch-crumb-value").forEach((c) => (c.textContent = `${u.range} · ${u.nights}`));
      // Las habitaciones: nombres, precios y fotos de la historia.
      root.querySelectorAll(".motor-result-card").forEach((card, i) => {
        const r = data.rooms[i % data.rooms.length];
        card.setAttribute("data-room", String(i));
        const q = (s: string) => card.querySelector(s);
        if (q(".motor-result-name")) q(".motor-result-name")!.textContent = r.name;
        if (q(".motor-result-subtitle")) q(".motor-result-subtitle")!.textContent = `${u.dayRange} | ${u.adultsCount}`;
        const now = q(".motor-result-price-now");
        const was = q(".motor-result-price-was");
        if (now && was) {
          // Con promo: el precio de siempre tachado y, al lado, el de la promo (sin tocar los span de adentro).
          was.textContent = r.price;
          now.childNodes.forEach((c) => {
            if (c.nodeType === Node.TEXT_NODE && (c.nodeValue ?? "").trim()) c.nodeValue = discounted(r.price);
          });
        } else if (now) now.textContent = r.price;
        if (q(".motor-result-price-unit")) q(".motor-result-price-unit")!.textContent = data.perNight;
        if (q(".motor-result-promo-name")) q(".motor-result-promo-name")!.textContent = `✦ ${u.promoName} · ${PROMO_CODE}`;
        const img = card.querySelector("img");
        if (img) {
          img.setAttribute("src", data.photos[i % data.photos.length]);
          img.removeAttribute("srcset");
        }
      });
    }
    // Lo que cambia en cada paso: el rango, la pestaña y la habitación elegida.
    const sub = root.querySelector(".motor-msearch-idcard-sub");
    if (sub) sub.textContent = `${sel.a ?? "--"} - ${sel.b ?? "--"} · 2 ${u.travelers}`;
    const thumb = root.querySelector<HTMLElement>(".motor-cal-thumb");
    if (thumb) thumb.style.transform = sel.tab === 0 ? "translateX(0)" : "translateX(100%)";
    root.querySelectorAll(".motor-cal-tab").forEach((t, i) => t.classList.toggle("active", i === sel.tab));
    const grid = root.querySelector(".motor-cal-grid");
    if (grid) grid.innerHTML = days.map((d) => dayButton(d, sel)).join("");
    root.querySelectorAll<HTMLInputElement>(".motor-search-promo-input").forEach((i) => {
      i.value = sel.code ?? "";
      i.setAttribute("value", sel.code ?? "");
    });
    root.querySelectorAll<HTMLElement>(".motor-result-card").forEach((c, i) => {
      c.style.outline = sel.chosen === i ? "2px solid var(--motor-primary, #a11c2f)" : "";
      c.style.outlineOffset = sel.chosen === i ? "2px" : "";
    });

    if (onPoints) {
      const hb = el.getBoundingClientRect();
      const k = hb.width / el.offsetWidth || 1;
      const pts: Record<string, { x: number; y: number; w: number; h: number }> = {};
      const at = (key: string, s: string) => {
        const t = root.querySelector(s);
        if (!t) return;
        const r = t.getBoundingClientRect();
        pts[key] = { x: (r.left + r.width / 2 - hb.left) / k, y: (r.top + r.height / 2 - hb.top) / k, w: r.width / k, h: r.height / k };
      };
      at("d18price", '[data-day="18"] .motor-cal-day-price');
      at("d28", '[data-day="28"]');
      at("room1", '[data-room="1"]');
      at("d21units", '[data-day="21"] .motor-cal-day-units');
      at("d21", '[data-day="21"]');
      at("d23", '[data-day="23"]');
      at("next", ".motor-msearch-btn--accent");
      at("room0", '[data-room="0"]');
      at("room0img", '[data-room="0"] img');
      at("code", ".motor-search-promo-input");
      at("badge0", '[data-room="0"] .motor-result-promo-badge');
      at("promo0", '[data-room="0"] .motor-result-price-row');
      onPoints(pts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, promo, sel.a, sel.b, sel.tab, sel.chosen, sel.code, data]);

  return <div ref={host} style={{ position: "absolute", inset: 0 }} />;
}
