"use client";

import { useLayoutEffect, useMemo, useRef, type CSSProperties, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/dict/es";
import type { LinkhubTheme, PublicLinkhubBlock, PublicLinkhubPage } from "./linkhub-real/types";
import { themeToVars, customFontHref, artMotionOf } from "./linkhub-real/theme";
import { ProfileHeader, SocialIconRow, BlockView, LinkhubFooter } from "./linkhub-real/components";
import { LhIcon, RoombirMark } from "./linkhub-real/icons";
import { motorThemeAccent } from "./linkhub-real/booking";
import styles from "./linkhub-real/linkhub.module.css";

/**
 * El LinkHub REAL dentro del teléfono de los videos: las piezas de
 * `public-side/linkhub-renderer/src/linkhub/` copiadas byte a byte en
 * `linkhub-real/` (`npm run sync:linkhub`) y este archivo, que arma el mismo
 * árbol que su `LinkhubPage.tsx` (lienzo → arte animado → perfil → bloques →
 * redes → pie) sin lo que ata la página al sitio: el motor real, el rastreo,
 * el QR y el compartir (el chip se dibuja igual, inerte).
 *
 * Las animaciones son las del LinkHub —entrada escalonada, pop del avatar,
 * pulso del botón y el arte de la plantilla en bucle— pero no corren solas: en
 * cada cuadro se pausan y se ponen en el tiempo del video (`lt`), así pausar,
 * saltar o exportar cuadro por cuadro da siempre la misma imagen.
 *
 * El bloque de reservas del LinkHub tiene sus textos fijos en castellano; acá se
 * reemplazan por los del idioma del video, como hace `MotorReal` con el motor.
 */

type Labels = Dictionary["video"]["ui"]["linkhub"];

/** La plantilla "Brasas" (pms-core/api/src/constants/linkhub.ts): chispas que suben y luz que respira. */
const EMBER: LinkhubTheme = {
  templateId: "ember-fade",
  mode: "dark",
  background: { type: "preset", color: "#B15B28", gradient: null, imageFileId: null, imageUrl: null, overlayOpacity: 0.4, presetId: null },
  buttonStyle: "fill",
  cornerStyle: "pill",
  fontPreset: "sans",
  colors: { primary: "#FFFFFF", text: "#FFFFFF", buttonText: "#6B3B20" },
};

/** El color de la barra de estado del teléfono sobre esta plantilla (el tope del degradé). */
export const LINKHUB_REAL_BAR = "#8f4a22";

function page(l: Labels, avatarUrl: string | null): PublicLinkhubPage {
  const block = (id: string, type: string, title: string, content: Record<string, unknown>, icon: string | null = null, featured = false): PublicLinkhubBlock => ({ blockId: id, type, featured, title, subtitle: null, icon, thumbnailUrl: null, content });
  return {
    linkhubId: "video",
    slug: "hotel-del-parque",
    propertyId: "video",
    profile: { displayName: l.name, bio: l.bio, avatarUrl, avatarShape: "circle", verified: false },
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/hoteldelparque" },
      { platform: "tiktok", url: "https://tiktok.com/@hoteldelparque" },
      { platform: "facebook", url: "https://facebook.com/hoteldelparque" },
      { platform: "whatsapp", url: "https://wa.me/542610000000" },
    ],
    theme: EMBER,
    blocks: [
      block("book", "booking", l.bookTitle, { mode: "embed", display: "searchbar" }, "calendar"),
      block("web", "link", l.blocks[0], { url: "https://hoteldelparque.com" }),
      block("wa", "whatsapp", l.blocks[1], { phone: "+54 261 000 0000" }),
      block("map", "map", l.blocks[2], { query: "Mendoza" }),
      block("contact", "contact", l.blocks[3], { phone: "+54 261 000 0000" }),
    ],
    footer: { showWatermark: true },
    seo: { title: l.name, description: l.bio, ogImageUrl: null },
  };
}

export function LinkhubReal({ lt, l, dates, avatar, pressing = false, height }: { lt: number; l: Labels; dates: { in: string; out: string }; /** El logo del avatar como URL (un `data:` sirve); sin él, las iniciales. */ avatar?: string | null; pressing?: boolean; /** El alto del viewport simulado, en px lógicos (el LinkHub llena el alto de la pantalla). */ height: number }): ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);
  const p = useMemo(() => page(l, avatar ?? null), [l, avatar]);
  const vars = useMemo(() => ({ ...themeToVars(p.theme), "--lh-vh": `${height}px` }) as CSSProperties, [p, height]);
  const fontHref = customFontHref(p.theme);
  const art = artMotionOf(p.theme);
  const ordered = p.blocks;
  const stagger = (i: number) => ({ "--lh-i": i }) as CSSProperties;
  const ctx = { today: "2026-03-21", motorEnabled: true, themeAccent: motorThemeAccent(p.theme.colors) };

  // Los textos del bloque de reservas, en el idioma del video (una vez por montaje o cambio de idioma).
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const q = (c: string) => root.querySelector(`[class*="${c}"]`);
    const bar = q("motorBar");
    bar?.setAttribute("data-tap", "search");
    const labels = root.querySelectorAll(`[class*="motorLabel"]`);
    const values = root.querySelectorAll(`[class*="motorValue"]`);
    [l.checkin, l.checkout, l.guests].forEach((t, i) => labels[i] && (labels[i].textContent = t));
    [dates.in, dates.out, l.guestsValue].forEach((t, i) => values[i] && (values[i].textContent = t));
    const search = [...root.querySelectorAll(`[class*="motorSearch"]`)].find((e) => !/motorSearchIcon/.test(e.className));
    if (search) {
      const txt = [...search.childNodes].find((n) => n.nodeType === Node.TEXT_NODE);
      if (txt) txt.nodeValue = l.search;
    }
    const foot = q("footerLink");
    if (foot) foot.textContent = l.footer;
  }, [l, dates]);

  // Las animaciones del LinkHub, atadas al reloj del video.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    for (const a of root.getAnimations({ subtree: true })) {
      a.pause();
      a.currentTime = Math.max(0, lt);
    }
  });

  return (
    <div ref={rootRef} className={styles.root} style={vars}>
      {fontHref ? <link rel="stylesheet" href={fontHref} /> : null}
      <div className={styles.stage} data-art={p.theme.background.type}>
        <div className={styles.artMotion} aria-hidden data-a={art.a ?? undefined} data-b={art.b ?? undefined} />
        <div className={styles.topBar}>
          <span className={styles.chip}>
            <RoombirMark size={20} />
          </span>
          <span className={styles.chip}>
            <LhIcon name="share" size={18} />
          </span>
        </div>
        <div className={styles.container}>
          <ProfileHeader profile={p.profile} />
          <div className={styles.links}>
            {ordered.map((b, i) => (
              <div key={b.blockId} className={styles.enter} style={{ ...stagger(i), ...(pressing && b.type === "booking" ? { transform: "scale(0.985)", filter: "brightness(0.97)" } : null) }}>
                <BlockView block={b} ctx={ctx} />
              </div>
            ))}
          </div>
          <SocialIconRow links={p.socialLinks} style={stagger(ordered.length)} />
          <LinkhubFooter show={p.footer.showWatermark} />
        </div>
      </div>
    </div>
  );
}
