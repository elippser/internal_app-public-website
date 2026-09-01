"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Botón que se queda quieto.
 *
 * El sitio público no enlaza al PMS: ni el alta ni el ingreso salen de acá.
 * Los CTA ("empezar gratis", "ingresar", el botón de cada plan) siguen en su
 * lugar porque son parte del diseño de la página, pero apuntan a la página que
 * se está mirando, igual que el logotipo: hacer clic no lleva a ningún lado.
 *
 * Apunta al `pathname` real y no a `#` a propósito: un `#` deja la marca en la
 * barra de direcciones, empuja una entrada al historial y salta al principio
 * de la página. Con `scroll={false}` sobre la ruta actual no se mueve nada.
 */
export default function SamePageLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link className={className} href={pathname} scroll={false}>
      {children}
    </Link>
  );
}
