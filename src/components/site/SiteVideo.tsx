"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import type { VideoPiece } from "./nav";
import VideoPlayer from "./VideoPlayer";
import styles from "./SiteVideo.module.css";

/**
 * Un video de presentación del sitio: la portada o el de un producto.
 *
 * Los archivos viven en `public/video/mp4/<pieza>-<idioma>-<h|v>.mp4`, con su
 * póster `.jpg` al lado: ocho piezas × cinco idiomas × dos orientaciones,
 * exportadas de las líneas de tiempo de `/video/*` (ver
 * IDENTIDAD-COMUNICACIONAL-2026.md §6). Este componente elige el idioma de la
 * página y la orientación del dispositivo: horizontal (16:9) desde 768 px,
 * vertical (9:16) por debajo, que es el corte que el resto del sitio usa
 * para "teléfono".
 *
 * Dos capas (29-09-2026):
 * - **En la página, sólo el póster** con el botón de reproducir: en chico no
 *   se reproduce nada (pedido del usuario), y el MP4 no se descarga hasta
 *   que alguien lo pide. Sin JavaScript se ve lo mismo: la imagen es el
 *   estado base.
 * - **El video, en un modal.** Reproducir, o tocar el póster: se abre un
 *   `<dialog>` con el reproductor propio (`VideoPlayer`), desde el principio
 *   y con sonido. Cierra con la cruz, Esc o un toque afuera.
 * - `ambient`: sin sombra, y detrás del marco el mismo póster más grande y
 *   borroso (la home). Sólo en horizontal.
 */
export default function SiteVideo({
  piece,
  locale,
  t,
  title,
  className,
  priority = false,
  ambient = false,
}: {
  piece: VideoPiece;
  locale: Locale;
  /** Sólo `common.video`: es un client component y sus props viajan al navegador. */
  t: Dictionary["common"]["video"];
  /** Descripción para lectores de pantalla. Por defecto, `t.label`. */
  title?: string;
  className?: string;
  /** En la portada el póster se precarga: es el candidato a LCP. */
  priority?: boolean;
  /** Modo ambiente: sin sombra, y detrás del marco el póster más grande y
      borroso (efecto de continuidad). Sólo en horizontal. */
  ambient?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [orient, setOrient] = useState<"h" | "v" | null>(null);
  const [open, setOpen] = useState(false);

  // La orientación se decide en el navegador: las páginas son estáticas y el
  // servidor no sabe el ancho de nadie. Hasta entonces se pinta el póster
  // horizontal (el que más gente ve) y el CSS lo recorta en teléfono.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setOrient(mq.matches ? "v" : "h");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const poster = `/video/mp4/${piece}-${locale}-${orient ?? "h"}.jpg`;
  const src = `/video/mp4/${piece}-${locale}-${orient ?? "h"}.mp4`;
  const label = title ?? t.label;
  const showAmbient = ambient && orient === "h";

  /* El modal. Mientras está abierto el scroll de la página se traba; el
     reproductor se monta al abrir y se desmonta al cerrar, así no queda
     nada sonando. */
  const openModal = () => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    setOpen(true);
    if (!dlg.open) dlg.showModal();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    const dlg = dialogRef.current;
    if (dlg?.open) dlg.close();
    setOpen(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  const host = (
    <div className={[styles.wrap, className ?? ""].join(" ")} data-orient={orient ?? "h"}>
      {/* El póster, y nada más: el video corre sólo en el modal. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.poster}
        src={poster}
        alt=""
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        onClick={openModal}
        // El póster es el candidato a LCP en la home: se avisa para que el
        // navegador lo pida antes.
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
      <button type="button" className={styles.play} onClick={openModal} aria-label={`${t.play}: ${label}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </button>

      {/* `<dialog>` nativo: capa superior, foco atrapado y Esc gratis.
          Cerrado no se pinta; abierto cubre la ventana y un clic fuera del
          video (sobre el propio dialog) lo cierra. */}
      <dialog
        ref={dialogRef}
        className={styles.modal}
        data-orient={orient ?? "h"}
        aria-label={label}
        onClose={() => {
          if (open) closeModal();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className={styles.modalBody}>
          {open && <VideoPlayer src={src} poster={poster} orient={orient ?? "h"} t={t} title={label} ambient />}
        </div>
        <button type="button" className={styles.modalClose} onClick={closeModal} aria-label={t.close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </dialog>
    </div>
  );

  if (!ambient) return host;

  return (
    <div className={styles.stage}>
      {/* El halo: el mismo póster, más grande y borroso. Decorativo. */}
      {showAmbient && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.ambient} src={poster} alt="" aria-hidden decoding="async" loading="lazy" />
      )}
      {host}
    </div>
  );
}
