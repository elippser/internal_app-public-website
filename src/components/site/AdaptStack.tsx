"use client";

import { useEffect } from "react";

/**
 * La pila fija de la sección "Roombir se adapta a tu alojamiento".
 *
 * A la izquierda el titular queda fijo y cada razón llega con el scroll,
 * junto a su explicación, y se detiene DEBAJO de la anterior. Eso es
 * `position: sticky` con un `top` distinto por pieza, y ese `top` depende de
 * cuánto miden las piezas de arriba: cambia con el idioma, con el ancho y
 * cuando cargan las tipografías, así que no se puede escribir en el CSS.
 *
 * Este componente sólo mide y deja dos variables en cada pieza
 * (`[data-stack]`, en orden):
 *   --stick  lo que ocupa la pila por encima → su `top`
 *   --below  lo que ocupa la pila por debajo → su margen inferior, para que
 *            al terminar la sección todas se suelten a la vez y ninguna
 *            alcance a la de arriba.
 * y marca el contenedor con `data-ready`. El CSS hace el resto.
 *
 * Sin `data-ready` no hay nada fijo: cada razón va al lado de su bloque y
 * scrollea con él. Es lo que se ve sin JavaScript, por debajo de 1024 px y
 * cuando la pila entera no entra en el alto de la ventana.
 *
 * De paso marca con `data-active` la razón del bloque que se está leyendo, y
 * con `data-tone` en la sección el fondo que pide ese bloque (hoy, sólo el de
 * IA).
 *
 * Esas dos marcas salen de la POSICIÓN de cada bloque en cada scroll, no de
 * un IntersectionObserver: el observador necesitaba `rootMargin`, y el
 * navegador lo ignora cuando la página va dentro de un iframe de otro origen
 * (la vista previa del panel). Ahí el fondo se apagaba apenas el bloque salía
 * de pantalla, que es justo lo que no tiene que pasar.
 */
export default function AdaptStack({ targetId }: { targetId: string }) {
  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-stack]"));
    const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-block]"));
    if (items.length === 0) return;

    const section = root.closest("section");
    const desktop = window.matchMedia("(min-width: 1024px)");

    const measure = () => {
      if (!desktop.matches) {
        root.removeAttribute("data-ready");
        return;
      }
      const cs = getComputedStyle(root);
      const top = parseFloat(cs.getPropertyValue("--adapt-top")) || 0;
      const gap = parseFloat(cs.getPropertyValue("--adapt-gap")) || 0;
      const heights = items.map((el) => el.offsetHeight);
      const total = heights.reduce((a, b) => a + b, 0) + gap;

      // Si la pila no entra en la ventana, fija no sirve: taparía contenido.
      if (top + total + 24 > window.innerHeight) {
        root.removeAttribute("data-ready");
        return;
      }

      let offset = 0;
      items.forEach((el, i) => {
        el.style.setProperty("--stick", `${offset}px`);
        el.style.setProperty("--below", `${total - offset - heights[i]}px`);
        offset += heights[i] + (i === 0 ? gap : 0);
      });
      root.setAttribute("data-ready", "");
    };

    /* Dónde está cada bloque respecto de la ventana:
       - La razón activa es la del último bloque cuyo borde de arriba ya pasó
         el 55 % del alto. En los huecos entre bloques queda la anterior.
       - El tono es el del último bloque con `data-tone` cuyo borde de arriba
         ya pasó el 65 %. Una vez que pasó, el tono NO se suelta al seguir
         bajando, por lejos que quede el bloque: la sección se queda con ese
         fondo hasta el final (pedido del usuario, 29-09-2026). Sólo vuelve al
         papel al subir hasta ese mismo punto. */
    let active: string | null = null;
    let tone: string | null = null;
    let frame = 0;

    const track = () => {
      frame = 0;
      const vh = window.innerHeight;
      let nextActive: string | null = null;
      let nextTone: string | null = null;
      for (const block of blocks) {
        const top = block.getBoundingClientRect().top;
        if (top < vh * 0.55) nextActive = block.dataset.block ?? null;
        if (block.dataset.tone && top < vh * 0.65) nextTone = block.dataset.tone;
      }

      if (nextActive !== active) {
        active = nextActive;
        items.forEach((el) => {
          if (el.dataset.stack === active) el.setAttribute("data-active", "");
          else el.removeAttribute("data-active");
        });
      }
      if (nextTone !== tone) {
        tone = nextTone;
        if (tone) section?.setAttribute("data-tone", tone);
        else section?.removeAttribute("data-tone");
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(track);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    const ro = new ResizeObserver(onResize);
    items.forEach((el) => ro.observe(el));
    blocks.forEach((el) => ro.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktop.addEventListener("change", onResize);
    measure();
    track();

    return () => {
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktop.removeEventListener("change", onResize);
      root.removeAttribute("data-ready");
      section?.removeAttribute("data-tone");
      items.forEach((el) => el.removeAttribute("data-active"));
    };
  }, [targetId]);

  return null;
}
