import { notFound } from "next/navigation";

/**
 * La ruta comodín bajo `[lang]`: cualquier URL que no sea una página del
 * sitio termina acá y dispara el `not-found.tsx` del idioma, CON el chrome
 * (header, pie) y en el idioma de la URL.
 *
 * Sin esto, Next servía su 404 genérico —"This page could not be found", en
 * inglés y sin marca— para cualquier enlace roto, porque no hay un
 * `app/not-found.tsx` en la raíz (el layout raíz vive en `[lang]` a
 * propósito, ver ahí) y el `not-found` de un segmento sólo se monta cuando
 * algo dentro de ese segmento llama a `notFound()`.
 *
 * `dynamicParams = false` del layout no aplica a este segmento: acá se acepta
 * cualquier resto y se contesta 404. El middleware ya redirigió antes las
 * rutas viejas y los slugs de otro idioma, así que lo que llega es de verdad
 * inexistente.
 */
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default function CatchAll() {
  notFound();
}
