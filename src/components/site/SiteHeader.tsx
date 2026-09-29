"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import type { Locale } from "@/i18n/config";
import { localizedHref as localePath } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/dict/es";
import { loginUrl } from "@/lib/siteConfig";
import LangSwitcher from "./LangSwitcher";
import Logo from "./Logo";
import {
  IA_MENU,
  INTELLIGENCE_HREF,
  MAIN_NAV,
  PLATFORM_MENU,
  PLATFORM_OVERVIEW_HREF,
  PRODUCT_HREFS,
  SOLUTIONS_MENU,
  SOLUTION_HREFS,
} from "./nav";
import { Headline } from "./RichText";
import styles from "./SiteHeader.module.css";

/**
 * Header del sitio.
 *
 * Es el único componente del chrome que necesita ser cliente, y por tres
 * cosas concretas: los menús desplegables, el cajón de móvil y el selector de
 * idioma. El resto del sitio es HTML servido.
 *
 * Desde el 28-09-2026 hay tres menús: **Plataforma** (Operaciones,
 * Distribución y Marketing, con cada página o ancla del sistema), **Roombir
 * IA** (la tarjeta destacada y las secciones de su página) y **Soluciones**
 * (por tipo de alojamiento y por cargo). Los ítems salen de `nav.ts` y los
 * textos de `dict.nav.menus`.
 *
 * Cada menú abre con el mouse y también con el teclado (son `<button>` con
 * `aria-expanded`, no un `:hover` de CSS), y se *fija* con un clic.
 */
type MenuKey = "platform" | "ia" | "solutions";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="4" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

// Recibe SOLO dict.nav y no el diccionario entero: esto es un client
// component, y todo lo que le llega por props se serializa al payload de
// hidratacion de CADA pagina.
export default function SiteHeader({
  locale,
  nav,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // La ilustración de la columna 4 de Soluciones: la general por defecto y la
  // del hotel mientras el mouse (o el foco) está sobre "Hoteles".
  const [solArt, setSolArt] = useState<"hospitality" | "hotel">("hospitality");
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** El menú quedó "fijado" por un clic y no lo cierra el hover. */
  const pinned = useRef(false);
  const m = nav.menus;
  const intel = m.intelligence;

  const path = (href: string) => localePath(locale, href);

  // Navegar cierra todo. Sin esto el cajón queda abierto sobre la página nueva,
  // porque el App Router no desmonta el layout entre rutas.
  useEffect(() => {
    pinned.current = false;
    setOpen(null);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      pinned.current = false;
      setOpen(null);
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
   * Los menús abren con el mouse y se pueden *fijar* con un clic. Sin lo de
   * fijar, el patrón obvio está roto: el hover abre, la persona hace clic
   * —que es lo que uno hace con un menú— y el clic lo cierra.
   */
  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (pinned.current && open !== key) pinned.current = false;
    setOpen(key);
  };

  // El cierre por hover va con retardo: entre el botón y el panel hay aire y
  // sin la gracia se cierra mientras el mouse los cruza.
  const closeMenu = () => {
    if (pinned.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // 320ms de gracia: da tiempo a bajar del botón al panel sin apuro.
    closeTimer.current = setTimeout(() => setOpen(null), 320);
  };

  const toggleMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (open === key && pinned.current) {
      pinned.current = false;
      setOpen(null);
      return;
    }
    pinned.current = true;
    setOpen(key);
  };

  // Scrollear hacia abajo con un menú abierto lo cierra: la persona ya siguió
  // de largo. Unos píxeles de tolerancia para que un roce del trackpad no
  // lo cierre.
  useEffect(() => {
    if (!open) return;
    const startY = window.scrollY;
    const onScroll = () => {
      if (window.scrollY - startY < 12) return;
      pinned.current = false;
      setOpen(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    pinned.current = false;
    setOpen(null);
  };

  // Cualquier clic en un enlace del menú o del cajón cierra todo, aunque
  // lleve a la página en la que ya estás o a un ancla de ella: ahí el
  // pathname no cambia y el efecto de navegación no se entera.
  const closeOnLink = (e: ReactMouseEvent) => {
    if (!(e.target as HTMLElement).closest("a")) return;
    closeNow();
    setDrawerOpen(false);
  };

  // Un clic fuera del header cierra el menú fijado.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("header")) return;
      pinned.current = false;
      setOpen(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const menuButton = (key: MenuKey, label: string) => (
    <button
      type="button"
      className={[styles.navItem, open === key ? styles.navItemOpen : ""].join(" ")}
      aria-expanded={open === key}
      aria-haspopup="true"
      onClick={() => toggleMenu(key)}
      onMouseEnter={() => openMenu(key)}
      onMouseLeave={closeMenu}
      onFocus={() => openMenu(key)}
    >
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );

  return (
    <>
      {/* Hermano del header: porta el ::before del progressive blur. */}
      {/* Con un menú abierto la banda crece y se aclara: el fondo no compite
          con el panel. */}
      <div aria-hidden className={[styles.blurTop, open ? styles.blurTopOpen : ""].join(" ")} />
      <header className={styles.wrap}>
        <div className={styles.bar}>
          <Link href={path("/")} className={styles.brand} aria-label={nav.home}>
            <Logo />
          </Link>

          <nav className={styles.nav} aria-label={nav.primary}>
            {menuButton("platform", m.platform)}
            {menuButton("ia", m.ia)}
            {menuButton("solutions", m.solutions)}
            {MAIN_NAV.map((item) => (
              <Link key={item.href} href={path(item.href)} className={styles.navItem}>
                {nav.links[item.key]}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <LangSwitcher locale={locale} label={nav.language} />
            {/* "Ingresar" sale del sitio: es el unico enlace al PMS. */}
            <a href={loginUrl} className={styles.login}>
              {nav.login}
            </a>
            <Link
              href={path("/crear-cuenta")}
              className={["btn", "btn-primary", styles.cta].join(" ")}
            >
              {nav.signup}
            </Link>
            <button
              type="button"
              className={styles.burger}
              data-burger=""
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
        </div>

        {/* El menú va fuera de la cápsula: ocupa todo el ancho del header
            con 10px de margen a cada lado (pedido del 28-09-2026). */}
        {open && (
          <div
            className={styles.megaWrap}
            onMouseEnter={() => openMenu(open)}
            onMouseLeave={closeMenu}
            onClickCapture={closeOnLink}
          >
            {/* La X de la esquina: cierra el menú abierto, sea cual sea. */}
            <button type="button" className={styles.megaClose} aria-label={nav.closeMenu} onClick={closeNow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
            {/* ------------------------------------------------ Plataforma */}
            {open === "platform" && (
              <div className={[styles.mega, styles.megaPlatform].join(" ")}>
                {/* La primera columna es un mensaje comercial, no un grupo: va
                    pegada al borde, separada de los enlaces por una línea, y
                    lleva a la plataforma de un vistazo. */}
                <div className={styles.megaPromo}>
                  <p className={styles.megaPromoTitle}>
                    {m.platformPromo.title} <em>{m.platformPromo.accent}</em>
                  </p>
                  <p className={styles.megaPromoBody}>{m.platformPromo.body}</p>
                  <Link href={path(PLATFORM_OVERVIEW_HREF)} className={["btn", "btn-primary", styles.megaPromoBtn].join(" ")}>
                    {m.platformPromo.cta}
                    <ArrowIcon />
                  </Link>
                </div>
                {PLATFORM_MENU.map((group) => (
                  <div key={group.key} className={styles.megaGroup}>
                    <p className={styles.megaLabel}>
                      {m.platformGroups[group.key]}
                      <ArrowIcon />
                    </p>
                    {group.items.map((item) => (
                      <Link key={item.key} href={path(item.href)} className={styles.megaItem}>
                        <span className={styles.megaTitle}>{m.platformItems[item.key].title}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ------------------------------------------------ Roombir IA */}
            {open === "ia" && (
              // Columna 1: la tarjeta de color. Columna 2: UNA entrada a la
              // página (sus secciones son anclas de esa misma página). Columna
              // 3: libre. Columna 4: Intelligence, el servicio de datos que usa.
              <div className={[styles.mega, styles.megaIa].join(" ")}>
                <Link href={path(PRODUCT_HREFS.ia)} className={styles.megaFeatured}>
                  {/* El color: manchas de forma libre, difuminadas y a la
                      deriva, que arman una malla de color pleno. */}
                  <span className={styles.megaFeaturedGlow} aria-hidden>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  {/* El glitter: grano fino y destellos que titilan. */}
                  <span className={styles.megaFeaturedSparkle} aria-hidden />
                  <span className={styles.megaFeaturedLabel}>{m.iaFeatured.label}</span>
                  <span className={styles.megaFeaturedTitle}>{m.iaFeatured.title}</span>
                  <span className={styles.megaFeaturedDesc}>{m.iaFeatured.desc}</span>
                </Link>
                <div className={styles.megaGroup}>
                  <p className={styles.megaLabel}>{m.iaLabel}</p>
                  <Link href={path(PRODUCT_HREFS.ia)} className={[styles.megaItem, styles.megaIaItem].join(" ")}>
                    <span className={styles.megaTitle}>
                      {m.iaLink}
                      <ArrowIcon />
                    </span>
                    <span className={styles.megaDesc}>
                      {IA_MENU.map((item) => m.iaItems[item.key].title).join(" · ")}
                    </span>
                  </Link>
                </div>
                <Link href={path(INTELLIGENCE_HREF)} className={styles.megaIntel}>
                  <span className={styles.megaIntelTitle}>
                    <Headline text={intel.title} />
                  </span>
                  <span className={styles.megaIntelBody}>{intel.body}</span>
                  <span className={styles.megaIntelMore}>
                    {intel.more}
                    <ArrowIcon />
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/global-720.webp" alt="" width={720} height={392} decoding="async" className={styles.megaIntelImg} />
                </Link>
              </div>
            )}

            {/* ------------------------------------------------ Soluciones */}
            {open === "solutions" && (
              <div className={[styles.mega, styles.megaSolutions].join(" ")}>
                {/* Columna 1: la tarjeta, sin botón. Columna 2: por tipo, con
                    el enlace al índice abajo. Columna 3: por cargo. La 4 queda
                    libre a propósito: agrupado vale más que repartido. */}
                <div className={[styles.megaPromo, styles.megaPromoAlt].join(" ")}>
                  <p className={styles.megaPromoTitle}>
                    {m.solutionsPromo.title} <em>{m.solutionsPromo.accent}</em>
                  </p>
                  <p className={styles.megaPromoBody}>{m.solutionsPromo.body}</p>
                  <Link href={path("/soluciones")} className="link-arrow">
                    {m.solutionsLink}
                    <ArrowIcon />
                  </Link>
                </div>
                {SOLUTIONS_MENU.map((group) =>
                  group.key === "byType" ? (
                    <div key={group.key} className={styles.megaGroup}>
                      <p className={styles.megaLabel}>{m.solutionGroups[group.key]}</p>
                      {group.items.map((key) => {
                        const art = key === "hoteles";
                        return (
                          <Link
                            key={key}
                            href={path(SOLUTION_HREFS[key])}
                            className={styles.megaItem}
                            onMouseEnter={art ? () => setSolArt("hotel") : undefined}
                            onMouseLeave={art ? () => setSolArt("hospitality") : undefined}
                            onFocus={art ? () => setSolArt("hotel") : undefined}
                            onBlur={art ? () => setSolArt("hospitality") : undefined}
                          >
                            <span className={styles.megaTitle}>{m.solutionItems[key].title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div key={group.key} className={styles.megaGroup}>
                      <p className={styles.megaLabel}>{m.solutionGroups[group.key]}</p>
                      {group.items.map((key) => (
                        <Link key={key} href={path(SOLUTION_HREFS[key])} className={styles.megaItem}>
                          <span className={styles.megaTitle}>{m.solutionItems[key].title}</span>
                        </Link>
                      ))}
                    </div>
                  ),
                )}
                {/* Columna 4: las dos ilustraciones apiladas; se cruzan con un
                    fundido. Decorativas: sin texto alternativo. */}
                <div className={styles.megaArt} aria-hidden>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/3d-hospitality.webp"
                    alt=""
                    width={720}
                    height={507}
                    decoding="async"
                    className={solArt === "hospitality" ? styles.megaArtOn : ""}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/3d-hotel.webp"
                    alt=""
                    width={720}
                    height={707}
                    decoding="async"
                    className={solArt === "hotel" ? styles.megaArtOn : ""}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {drawerOpen && (
          <div className={styles.drawer} id="menu-movil" onClickCapture={closeOnLink}>
            {/* Plataforma: los tres grupos, con los ítems como píldoras. */}
            <div className={styles.drawerGroup}>
              <Link href={path("/producto")} className={styles.drawerLink}>
                {m.platform}
              </Link>
              {PLATFORM_MENU.map((group) => (
                <div key={group.key} className={styles.drawerSub}>
                  <p className={styles.drawerLabel}>{m.platformGroups[group.key]}</p>
                  <div className={styles.drawerParts}>
                    {group.items.map((item) => (
                      <Link key={item.key} href={path(item.href)} className={styles.drawerPart}>
                        {m.platformItems[item.key].title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.megaPromo}>
                <p className={styles.megaPromoTitle}>
                  {m.platformPromo.title} <em>{m.platformPromo.accent}</em>
                </p>
                <p className={styles.megaPromoBody}>{m.platformPromo.body}</p>
                <Link href={path(PLATFORM_OVERVIEW_HREF)} className={["btn", "btn-primary", styles.megaPromoBtn].join(" ")}>
                  {m.platformPromo.cta}
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className={styles.drawerGroup}>
              <Link href={path(PRODUCT_HREFS.ia)} className={styles.drawerLink}>
                {m.ia}
                <span className={styles.drawerDesc}>{m.iaFeatured.desc}</span>
              </Link>
            </div>

            <div className={styles.drawerGroup}>
              <Link href={path("/soluciones")} className={styles.drawerLink}>
                {m.solutions}
              </Link>
              {SOLUTIONS_MENU.map((group) => (
                <div key={group.key} className={styles.drawerSub}>
                  <p className={styles.drawerLabel}>{m.solutionGroups[group.key]}</p>
                  <div className={styles.drawerParts}>
                    {group.items.map((key) => (
                      <Link key={key} href={path(SOLUTION_HREFS[key])} className={styles.drawerPart}>
                        {m.solutionItems[key].title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.drawerGroup}>
              <p className={styles.drawerLabel}>{m.more}</p>
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
              <Link
                href={path("/crear-cuenta")}
                className={["btn", "btn-primary", "btn-lg"].join(" ")}
              >
                {nav.signup}
              </Link>
              <a href={loginUrl} className={["btn", "btn-ghost", "btn-lg"].join(" ")}>
                {nav.login}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
