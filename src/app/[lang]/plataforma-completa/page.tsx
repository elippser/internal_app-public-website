import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsLd from "@/components/site/BreadcrumbsLd";
import PlatformShot, { type ShotArea } from "@/components/site/PlatformShot";
import { ArrowRight, CtaBand, HeroActions, PageHero, SplitHead } from "@/components/site/Sections";
import {
  AgentSurface,
  AgentTurn,
  BrandKit,
  BuilderAi,
  EngineCalendar,
  LinkHubPhone,
  OrgTree,
  RateDecision,
  ReportsBoard,
  ReviewsList,
  TapeChart,
  TourismDossier,
  UnitStates,
} from "@/components/site/Vignettes";
import { IA_MENU, PLATFORM_MENU, PLATFORM_OVERVIEW_HREF } from "@/components/site/nav";
import { localizedHref as localePath } from "@/i18n/routes";
import { readLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/meta";
import { getDictionary } from "@/i18n/get-dictionary";
import styles from "./plataforma-completa.module.css";

/**
 * La plataforma de un vistazo (28-09-2026). La abre la tarjeta comercial del
 * menú Plataforma ("¿Otro PMS genérico? Nah."). Arriba, una ventana del
 * sistema con las áreas del menú —Operaciones, Distribución, Marketing y
 * Roombir IA— y sus pantallas reales; abajo, el mapa con el enlace a cada
 * página. Los grupos y los ítems son los mismos de `PLATFORM_MENU` e
 * `IA_MENU`, así que menú y página no se pueden desalinear.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.plataformaCompleta;
  return pageMetadata(lang, PLATFORM_OVERVIEW_HREF, t.meta.title, t.meta.description);
}

export default async function PlataformaCompletaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = await readLocale(params);
  const dict = await getDictionary(lang);
  const t = dict.plataformaCompleta;
  const m = dict.nav.menus;
  const v = dict.vignettes;
  const path = (href: string) => localePath(lang, href);

  // Las pantallas de cada área: las mismas viñetas de las páginas de producto.
  const panes = {
    operations: [
      <TapeChart key="tape" v={v} />,
      <UnitStates key="units" v={v} />,
      <OrgTree key="org" v={v} />,
      <ReportsBoard key="reports" v={v} />,
    ],
    distribution: [
      <EngineCalendar key="engine" v={v} />,
      <RateDecision key="rate" v={v} locale={lang} />,
      <LinkHubPhone key="linkhub" v={v} />,
      <AgentSurface key="agents" v={v} />,
    ],
    marketing: [
      <BuilderAi key="web" v={v} />,
      <BrandKit key="brand" v={v} />,
      <ReviewsList key="reviews" v={v} />,
    ],
  } as const;

  const areas: ShotArea[] = [
    ...PLATFORM_MENU.map((group) => ({
      key: group.key,
      label: m.platformGroups[group.key],
      caption: t.shot.captions[group.key],
      items: group.items.map((item) => m.platformItems[item.key].title),
      pane: <>{panes[group.key]}</>,
    })),
    {
      key: "ia",
      label: m.ia,
      caption: t.shot.captions.ia,
      items: IA_MENU.slice(0, 4).map((item) => m.iaItems[item.key].title),
      pane: (
        <>
          <AgentTurn v={v} />
          <TourismDossier v={v} locale={lang} />
        </>
      ),
    },
  ];

  const mapGroups = [
    ...PLATFORM_MENU.map((group) => ({
      key: group.key,
      label: m.platformGroups[group.key],
      items: group.items.map((item) => ({ href: item.href, ...m.platformItems[item.key] })),
    })),
    {
      key: "ia",
      label: m.ia,
      items: IA_MENU.map((item) => ({ href: item.href, ...m.iaItems[item.key] })),
    },
  ];

  return (
    <>
      <PageHero
        locale={lang}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<HeroActions locale={lang} dict={dict} />}
      />

      {/* --------------------------------------------------- el pantallazo -- */}
      <section className="section section-tight" id="pantallazo" style={{ paddingTop: 0 }}>
        <div className="container container-wide" data-reveal>
          <PlatformShot label={t.shot.label} tag={t.shot.tag} areasLabel={t.shot.areas} areas={areas} />
        </div>
      </section>

      {/* -------------------------------------------------------- el mapa -- */}
      <section className="section section-paper2" id="mapa">
        <div className="container container-wide">
          <SplitHead locale={lang} eyebrow={t.map.eyebrow} title={t.map.title} lead={t.map.lead} />
          <div className={styles.map} data-reveal>
            {mapGroups.map((group) => (
              <div key={group.key} className={styles.mapGroup}>
                <p className={styles.mapLabel}>{group.label}</p>
                {group.items.map((item) => (
                  <Link key={item.href} href={path(item.href)} className={styles.mapItem}>
                    <span className={styles.mapTitle}>
                      {item.title}
                      <ArrowRight />
                    </span>
                    <span className={styles.mapDesc}>{item.desc}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={lang} dict={dict} title={t.cta.title} lead={t.cta.lead} steps={t.cta.steps} />

      <BreadcrumbsLd
        lang={lang}
        trail={[
          { name: dict.producto.meta.title, href: "/producto" },
          { name: t.meta.title, href: PLATFORM_OVERVIEW_HREF },
        ]}
      />
    </>
  );
}

