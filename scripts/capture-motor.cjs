/**
 * Captura el motor de reservas REAL del web-renderer en móvil para los videos
 * (`src/components/video-kit/motor-real.json`).
 *
 * El teléfono de los videos tiene que verse igual que el motor de verdad: en
 * vez de copiar sus estilos a mano, este script abre el sitio de prueba del
 * web-renderer en un viewport de 390 × 844, abre el motor y guarda, por estado
 * (búsqueda con el calendario y resultados), el HTML de la hoja del motor y
 * SÓLO las reglas CSS que la afectan:
 *
 * - `@media` que aplican en 390 px se desenvuelven (el video se ve en una
 *   pantalla grande y si no, no aplicarían); las que no aplican se descartan.
 * - `vh`/`dvh`/`svh`/`lvh` y `vw` pasan a px del viewport capturado.
 * - `html`, `body` y `:root` pasan a clases (`.mr-html`, `.mr-body`), porque
 *   el video monta la captura dentro de un shadow root.
 * - La cadena de ancestros de la hoja (clases y estilos en línea) se guarda
 *   para reconstruirla: de ahí salen las variables del tema.
 *
 * Uso (con el web-renderer corriendo en :6100):
 *   PW=<ruta a playwright> EXE=<chromium> node scripts/capture-motor.cjs
 *
 * Con `PROMO=1` captura el mismo recorrido CON UNA PROMOCIÓN: intercepta la
 * disponibilidad y le aplica una promo de reserva directa (-10 %, código
 * DIRECTO10, con la forma de `AppliedPromo` del booking-api), escribe el código
 * en el paso de viajeros y guarda esos dos estados como `guestsPromo` y
 * `resultsPromo` DENTRO del JSON existente, sumando sólo las reglas CSS nuevas
 * (la etiqueta, el nombre de la promo, el precio tachado). Los estados de
 * siempre no se tocan.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require(process.env.PW || "playwright");

const URL = process.env.MOTOR_URL || "http://localhost:6100/";
const OUT = path.join(__dirname, "../src/components/video-kit/motor-real.json");
const VW = 390;
const VH = 844;

(async () => {
  const browser = await chromium.launch(process.env.EXE ? { executablePath: process.env.EXE } : {});
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "es-AR" });
  const page = await ctx.newPage();
  const PROMO = process.env.PROMO === "1";
  if (PROMO) {
    await page.route("**/api/v1/availability**", async (route) => {
      const res = await route.fetch();
      let list = await res.json();
      if (Array.isArray(list)) {
        list = list.map((r) => {
          const ppn = r.pricePerNight;
          const nights = Math.max(1, r.nights || 1);
          const base = ppn;
          const now = Math.round(ppn * 0.9);
          const d = now - base;
          return { ...r, basePricePerNight: base, pricePerNight: now, totalAmount: now * nights, appliedPromo: { promoId: "video", name: "Reserva directa", discountType: "percentage", discountValue: -10, deltaPerNight: d, deltaTotal: d * nights, deltaPercent: -10, code: "DIRECTO10" } };
        });
      }
      await route.fulfill({ response: res, json: list });
    });
  }
  await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
  // El primer toque monta el motor; el segundo lo abre (ver la memoria del smoke del motor).
  await page.tap(".motor-trigger-mobile");
  await page.waitForTimeout(1500);
  await page.tap(".motor-trigger-mobile").catch(() => {});
  await page.waitForSelector(".motor-msearch-overlay .motor-cal-grid", { timeout: 30000 });
  await page.waitForTimeout(1200);

  const grab = () =>
    page.evaluate(({ VW, VH }) => {
      const sheet = document.querySelector(".motor-modal-window");
      const nodes = [sheet, ...sheet.querySelectorAll("*")];
      const chain = [];
      for (let el = sheet.parentElement; el; el = el.parentElement) {
        chain.unshift({ tag: el.tagName.toLowerCase(), cls: (el.className && el.className.baseVal === undefined ? el.className : "") || "", style: el.getAttribute("style") || "" });
      }
      const ancestors = [];
      for (let el = sheet.parentElement; el; el = el.parentElement) ancestors.push(el);
      const fix = (css) =>
        css
          .replace(/(-?\d*\.?\d+)(d|s|l)?vh\b/g, (_, n) => `${(parseFloat(n) * VH) / 100}px`)
          .replace(/(-?\d*\.?\d+)(d|s|l)?vw\b/g, (_, n) => `${(parseFloat(n) * VW) / 100}px`);
      const strip = (sel) => sel.replace(/::?[a-zA-Z-]+(\([^)]*\))?/g, "").trim() || "*";
      const matchesAny = (sel) => {
        let s;
        try {
          s = strip(sel);
          document.querySelector(s);
        } catch {
          return false;
        }
        return nodes.some((n) => n.matches(s)) || ancestors.some((n) => n.matches(s));
      };
      const out = [];
      const walk = (rules) => {
        for (const r of rules) {
          if (r instanceof CSSStyleRule) {
            const sels = r.selectorText.split(",").map((x) => x.trim());
            if (sels.some(matchesAny)) out.push(fix(r.cssText));
          } else if (r instanceof CSSMediaRule) {
            if (window.matchMedia(r.conditionText || r.media.mediaText).matches) walk(r.cssRules);
          } else if (r instanceof CSSSupportsRule) {
            if (CSS.supports(r.conditionText)) walk(r.cssRules);
          } else if (r instanceof CSSKeyframesRule || r instanceof CSSFontFaceRule) {
            out.push(r.cssText);
          } else if (r.cssRules) {
            // @container, @layer…: se conservan enteros.
            out.push(fix(r.cssText));
          }
        }
      };
      for (const s of document.styleSheets) {
        try {
          walk(s.cssRules);
        } catch {
          /* hoja de otro origen sin CORS */
        }
      }
      return { html: sheet.outerHTML, chain, css: out };
    }, { VW, VH });

  const search = await grab();
  // A resultados: el botón Siguiente del buscador.
  await page.click(".motor-msearch-overlay button:has-text('Siguiente')").catch(async () => {
    await page.click("text=Siguiente");
  });
  await page.waitForTimeout(1500);
  if (PROMO) {
    await page.fill(".motor-msearch-overlay .motor-search-promo-input", "DIRECTO10");
    await page.waitForTimeout(400);
  }
  const guests = await grab();
  // Y Buscar: el buscador se cierra y queda la hoja con los resultados.
  await page.click(".motor-msearch-overlay button:has-text('Buscar')").catch(async () => {
    await page.click("text=Buscar");
  });
  await page.waitForFunction(() => !document.querySelector(".motor-msearch-overlay") && document.querySelector(".motor-result-card"), null, { timeout: 30000 });
  await page.waitForTimeout(2000);
  const results = await grab();

  // Las reglas de los dos estados, sin repetir y en el orden de la cascada.
  const seen = new Set();
  const css = [];
  for (const r of [...search.css, ...guests.css, ...results.css]) {
    // Fuentes servidas por el propio web-renderer (rutas relativas) o por el overlay de Next: acá no existen.
    if (/^@font-face/.test(r) && /url\("?\//.test(r)) continue;
    const k = r.replace(/\s+/g, " ");
    if (!seen.has(k)) {
      seen.add(k);
      css.push(r);
    }
  }
  const rename = (c) => c.replace(/(^|[\s,>+~(])(:root|html)(?=[\s,{.:[>+~)]|$)/g, "$1.mr-html").replace(/(^|[\s,>+~(])body(?=[\s,{.:[>+~)]|$)/g, "$1.mr-body");
  if (PROMO) {
    const old = JSON.parse(fs.readFileSync(OUT, "utf8"));
    const have = new Set(old.css.split("\n").map((r) => r.replace(/\s+/g, " ")));
    const extra = css.map(rename).filter((r) => !have.has(r.replace(/\s+/g, " ")));
    const merged = { ...old, promoCapturedAt: new Date().toISOString(), css: [old.css, ...extra].join("\n"), guestsPromo: guests.html, resultsPromo: results.html };
    fs.writeFileSync(OUT, JSON.stringify(merged));
    console.log("ok promo", OUT, extra.length + " reglas nuevas");
    await browser.close();
    return;
  }
  const data = {
    capturedAt: new Date().toISOString(),
    source: URL,
    viewport: { w: VW, h: VH },
    chain: search.chain,
    css: css.map(rename).join("\n"),
    search: search.html,
    guests: guests.html,
    results: results.html,
  };
  fs.writeFileSync(OUT, JSON.stringify(data));
  console.log("ok", OUT, (JSON.stringify(data).length / 1024).toFixed(0) + " KB", css.length + " reglas");
  await browser.close();
})();
