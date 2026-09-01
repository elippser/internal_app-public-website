"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_SHORT,
  isLocale,
  type Locale,
} from "@/i18n/config";
import { publicPath, routeKeyOf } from "@/i18n/routes";
import LocaleFlag from "@/i18n/LocaleFlag";
import styles from "./LangSwitcher.module.css";

/**
 * El selector de idioma.
 *
 * Cambia de idioma sin moverte de página, y con la URL traducida: quien está
 * leyendo `/es/producto/motor` y elige inglés termina en
 * `/en/platform/booking-engine`. Perder el lugar es la forma más rápida de que
 * alguien no vuelva a tocar el selector.
 *
 * Además escribe la cookie que lee el `middleware`, para que la elección
 * sobreviva a la próxima visita y a un enlace sin prefijo. Es la única cookie
 * propia que pone el sitio público, y está declarada en la política.
 */
export default function LangSwitcher({
  locale,
  label,
  tone = "paper",
}: {
  locale: Locale;
  label: string;
  tone?: "paper" | "ink";
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (box.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /**
   * La MISMA página en otro idioma, con el slug de ese idioma.
   *
   * Se resuelve por clave de ruta y no cambiando el prefijo: estando en
   * `/es/producto/ia` hay que ir a `/en/platform/ai`, no a `/en/producto/ia`.
   * Y funciona tanto si el pathname que llega es el público como si es el
   * interno, porque el índice de `routes.ts` conoce las dos formas — con un
   * rewrite de por medio conviene no depender de cuál devuelve el router.
   */
  const swap = (next: Locale) => {
    const parts = (pathname ?? "/").split("/");
    const first = parts[1] ?? "";
    const rest = isLocale(first) ? "/" + parts.slice(2).join("/") : (pathname ?? "/");
    const key = routeKeyOf(rest);
    if (key) return publicPath(next, key);
    return `/${next}${rest === "/" ? "" : rest}`;
  };

  const remember = (next: Locale) => {
    // Un año: es una preferencia, no una sesión.
    document.cookie = `bookfer_lang=${next}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <div className={styles.wrap} ref={box}>
      <button
        type="button"
        className={[styles.button, tone === "ink" ? styles.buttonInk : ""].join(" ")}
        aria-expanded={open}
        aria-haspopup="true"
        // WCAG 2.5.3 (Label in Name): el nombre accesible tiene que contener
        // el texto visible del control ("ES"), no sólo describir la acción.
        aria-label={`${label}: ${LOCALE_SHORT[locale]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <LocaleFlag locale={locale} className={styles.flag} />
        {LOCALE_SHORT[locale]}
      </button>

      {open && (
        <ul className={[styles.menu, tone === "ink" ? styles.menuInk : ""].join(" ")}>
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={swap(l)}
                hrefLang={l}
                className={[styles.item, l === locale ? styles.itemOn : ""].join(" ")}
                onClick={() => remember(l)}
              >
                <span className={styles.itemName}>
                  <LocaleFlag locale={l} className={styles.flag} />
                  {LOCALE_NAMES[l]}
                </span>
                {l === locale && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
