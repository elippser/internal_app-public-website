"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./legal.module.css";

/** A qué altura de la ventana una sección pasa a ser "la que se está leyendo". */
const READING_LINE = 160;

/**
 * El índice del documento.
 *
 * En escritorio acompaña la lectura, fijo al costado, y marca la sección que
 * está en pantalla. En tableta y teléfono es un desplegable arriba del texto,
 * que se cierra al elegir una sección.
 *
 * Sin JS sigue siendo una lista de anclas: en escritorio se ve entera y sólo
 * se pierde la marca de la sección activa.
 */
export default function LegalToc({
  title,
  items,
}: {
  title: string;
  items: { id: string; n: number; title: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= READING_LINE) current = item.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // Con muchas secciones el índice tiene su propio scroll: que acompañe a la
  // sección activa. A mano y no con `scrollIntoView`, que movería la página.
  useEffect(() => {
    const nav = box.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !link || nav.scrollHeight <= nav.clientHeight) return;
    const top = link.offsetTop - nav.clientHeight / 2 + link.offsetHeight / 2;
    nav.scrollTop = Math.max(0, top);
  }, [active]);

  return (
    <nav ref={box} className={styles.toc} aria-label={title}>
      <p className={styles.tocTitle}>{title}</p>
      <button
        type="button"
        className={styles.tocToggle}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
      </button>
      <ol className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={styles.tocLink}
              aria-current={item.id === active ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className={styles.tocNum}>{String(item.n).padStart(2, "0")}</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
