"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * El disparador de las animaciones de viewport.
 *
 * Cualquier elemento con `data-fx` recibe `data-fx-in` cuando entra en
 * pantalla, una sola vez. Todo lo demás es CSS: cada módulo define qué hace
 * con ese atributo (el tape chart dibuja sus barras, el agente escribe su
 * transcripción, los stats aparecen en cascada).
 *
 * Es deliberadamente lo ÚNICO que hace: si este componente no corre —sin JS,
 * un crawler, una captura— el atributo no aparece y los elementos se quedan en
 * su estado base, que es el final. La página nunca depende de esto para verse
 * completa.
 */
export default function FxObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll("[data-fx]:not([data-fx-in])"),
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-fx-in", "");
          io.unobserve(entry.target);
        }
      },
      // Un poco antes del borde de abajo: la animación arranca cuando el
      // elemento asoma, no cuando ya está a mitad de pantalla.
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // `pathname`: en el App Router el layout no se desmonta al navegar, así
    // que hay que volver a buscar los data-fx de la página nueva.
  }, [pathname]);

  return null;
}
