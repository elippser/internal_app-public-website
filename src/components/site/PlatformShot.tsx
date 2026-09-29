"use client";

import { useState, type ReactNode } from "react";
import styles from "./PlatformShot.module.css";

/**
 * El "pantallazo" de la plataforma completa (28-09-2026): una ventana del
 * sistema con las áreas a la izquierda y, a la derecha, las pantallas de la
 * elegida. Las pantallas son las viñetas de servidor de siempre: llegan ya
 * renderizadas como `panes` y acá sólo se elige cuál se ve. Todas quedan en
 * el HTML (las ocultas con `hidden`), así que el buscador y quien no tenga
 * JavaScript igual reciben el contenido.
 */
export interface ShotArea {
  key: string;
  label: string;
  caption: string;
  items: string[];
  pane: ReactNode;
}

export default function PlatformShot({
  label,
  tag,
  areasLabel,
  areas,
}: {
  label: string;
  tag: string;
  areasLabel: string;
  areas: ShotArea[];
}) {
  const [active, setActive] = useState(areas[0]?.key);

  return (
    <div className={styles.shot}>
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.barLabel}>{label}</span>
        <span className={styles.barTag}>{tag}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.rail} role="tablist" aria-label={areasLabel}>
          {areas.map((area) => {
            const on = area.key === active;
            return (
              <button
                key={area.key}
                type="button"
                role="tab"
                id={`area-${area.key}`}
                aria-selected={on}
                aria-controls={`panel-${area.key}`}
                className={[styles.area, on ? styles.areaOn : ""].join(" ")}
                onClick={() => setActive(area.key)}
              >
                <span className={styles.areaLabel}>{area.label}</span>
                <span className={styles.areaItems}>
                  {area.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        {areas.map((area) => (
          <div
            key={area.key}
            role="tabpanel"
            id={`panel-${area.key}`}
            aria-labelledby={`area-${area.key}`}
            hidden={area.key !== active}
            className={styles.panel}
          >
            <p className={styles.caption}>{area.caption}</p>
            <div className={styles.panes}>{area.pane}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
