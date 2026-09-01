"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/dict/es";
import SamePageLink from "./SamePageLink";
import LangSwitcher from "./LangSwitcher";
import Logo from "./Logo";
import { MAIN_NAV, PRODUCT_GROUPS, PRODUCT_HREFS } from "./nav";
import styles from "./SiteHeader.module.css";

/**
 * Header del sitio.
 *
 * Es el único componente del chrome que necesita ser cliente, y por tres
 * cosas concretas: el mega menú, el cajón de móvil y el selector de idioma.
 * El resto del sitio es HTML servido.
 *
 * El mega menú abre con el mouse y también con el teclado (es un `<button>` con
 * `aria-expanded`, no un `:hover` de CSS): la mitad de las auditorías de
 * accesibilidad de sitios de SaaS se caen justo ahí.
 */
// Recibe SOLO dict.nav y no el diccionario entero: esto es un client
// component, y todo lo que le llega por props se serializa al payload de
// hidratacion de CADA pagina (el dict completo son ~97KB de JSON).
export default function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** El mega menú quedó "fijado" por un clic y no lo cierra el hover. */
  const pinned = useRef(false);

  const path = (href: string) => localePath(locale, href);

  // Navegar cierra todo. Sin esto el cajón queda abierto sobre la página nueva,
  // porque el App Router no desmonta el layout entre rutas.
  useEffect(() => {
    pinned.current = false;
    setMegaOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      pinned.current = false;
      setMegaOpen(false);
      setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Con el cajón abierto el fondo no se scrollea: en iOS, si no, se mueve la
  // página de atrás y el cajón parece roto.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  /**
   * El mega menú abre con el mouse y se puede *fijar* con un clic.
   *
   * Sin lo de fijar, el patrón obvio está roto: el mouse pasa por encima, el
   * hover lo abre, la persona hace clic —que es lo que uno hace con un menú— y
   * el clic lo cierra, porque para el componente ya estaba abierto. Se ve como
   * si el botón no funcionara.
   */
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  // El cierre por hover va con retardo: entre el botón y el panel hay 10px de
  // aire y sin la gracia se cierra mientras el mouse los cruza.
  const closeMega = () => {
    if (pinned.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const toggleMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (megaOpen && pinned.current) {
      pinned.current = false;
      setMegaOpen(false);
      return;
    }
    pinned.current = true;
    setMegaOpen(true);
  };

  // Un clic fuera del header cierra el menú fijado. Sin esto, la única forma de
  // sacarlo es volver a apuntarle al botón.
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("header")) return;
      pinned.current = false;
      setMegaOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [megaOpen]);

  return (
    <>
      {/* Hermano del header: porta el ::before del progressive blur. */}
      <div aria-hidden className={styles.blurTop} />
      <header className={styles.wrap}>
      <div className={styles.bar}>
        <Link href={path("/")} className={styles.brand} aria-label={nav.home}>
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label={nav.primary}>
          <button
            type="button"
            className={[styles.navItem, megaOpen ? styles.navItemOpen : ""].join(" ")}
            aria-expanded={megaOpen}
            aria-haspopup="true"
            onClick={toggleMega}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            onFocus={openMega}
          >
            {nav.product}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={path(item.href)} className={styles.navItem}>
              {nav.links[item.key]}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <LangSwitcher locale={locale} label={nav.language} />
          <SamePageLink className={styles.login}>
            {nav.login}
          </SamePageLink>
          <SamePageLink className={["btn", "btn-primary", styles.cta].join(" ")}>
            {nav.signup}
          </SamePageLink>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {drawerOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3.5" y1="8" x2="20.5" y2="8" />
                  <line x1="3.5" y1="16" x2="20.5" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {megaOpen && (
          <div
            className={styles.megaWrap}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <div className={styles.mega}>
              {PRODUCT_GROUPS.map((group) => (
                <div key={group.key} className={styles.megaGroup}>
                  <p className={styles.megaLabel}>{nav.groups[group.key]}</p>
                  {group.items.map((key) => (
                    <Link key={key} href={path(PRODUCT_HREFS[key])} className={styles.megaItem}>
                      <span className={styles.megaTitle}>{nav.products[key].title}</span>
                      <span className={styles.megaDesc}>{nav.products[key].desc}</span>
                    </Link>
                  ))}
                </div>
              ))}
              <div className={styles.megaFoot}>
                <span className={styles.megaFootText}>{nav.megaFoot}</span>
                <Link href={path("/producto")} className="link-arrow">
                  {nav.megaLink}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="4" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {drawerOpen && (
        <div className={styles.drawer} id="menu-movil">
          {PRODUCT_GROUPS.map((group) => (
            <div key={group.key} className={styles.drawerGroup}>
              <p className={styles.drawerLabel}>{nav.groups[group.key]}</p>
              {group.items.map((key) => (
                <Link key={key} href={path(PRODUCT_HREFS[key])} className={styles.drawerLink}>
                  {nav.products[key].title}
                  <span className={styles.drawerDesc}>{nav.products[key].desc}</span>
                </Link>
              ))}
            </div>
          ))}
          <div className={styles.drawerGroup}>
            <p className={styles.drawerLabel}>{nav.more}</p>
            <Link href={path("/producto")} className={styles.drawerLink}>
              {nav.platform}
            </Link>
            {MAIN_NAV.map((item) => (
              <Link key={item.href} href={path(item.href)} className={styles.drawerLink}>
                {nav.links[item.key]}
              </Link>
            ))}
            <Link href={path("/contacto")} className={styles.drawerLink}>
              {nav.contact}
            </Link>
          </div>
          <div className={styles.drawerActions}>
            <SamePageLink className={["btn", "btn-primary", "btn-lg"].join(" ")}>
              {nav.signup}
            </SamePageLink>
            <SamePageLink className={["btn", "btn-ghost", "btn-lg"].join(" ")}>
              {nav.login}
            </SamePageLink>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
