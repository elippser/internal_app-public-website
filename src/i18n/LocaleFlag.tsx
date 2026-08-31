import React from "react";
import type { Locale } from "./config";

/**
 * Banderas de los 5 idiomas, en SVG.
 *
 * Portado tal cual de `pms-core/app/src/i18n/LocaleFlag.tsx`: el selector del
 * PMS y el del sitio público muestran la misma bandera para el mismo idioma,
 * que es lo que espera alguien que se mueve entre los dos. Si se toca acá,
 * se toca allá.
 *
 * En SVG y no en emoji porque Windows no tiene glifo para las banderas
 * regionales y las pinta como dos letras ("ES", "GB"): el selector se veía
 * distinto según el sistema.
 *
 * La bandera es la del origen del idioma (España, Reino Unido, Portugal), no
 * la del mercado —el sitio es es_AR—: es la convención del PMS y la habitual
 * en un selector de idioma, donde la bandera nombra la lengua y no el país.
 *
 * Van en `viewBox` 4:3 con `slice`, para que recortadas en círculo sigan
 * mostrando el centro.
 */

const FLAGS: Record<Locale, React.ReactNode> = {
  es: (
    <>
      <path fill="#c60b1e" d="M0 0h640v480H0z" />
      <path fill="#ffc400" d="M0 120h640v240H0z" />
    </>
  ),
  en: (
    <>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
      />
      <path
        fill="#c8102e"
        d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
      />
      <path fill="#fff" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#c8102e" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </>
  ),
  fr: (
    <>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#002654" d="M0 0h213.3v480H0z" />
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
    </>
  ),
  de: (
    <>
      <path fill="#000" d="M0 0h640v160H0z" />
      <path fill="#dd0000" d="M0 160h640v160H0z" />
      <path fill="#ffce00" d="M0 320h640v160H0z" />
    </>
  ),
  pt: (
    <>
      <path fill="#f00" d="M0 0h640v480H0z" />
      <path fill="#060" d="M0 0h256v480H0z" />
      <circle cx="256" cy="240" r="84" fill="none" stroke="#ff0" strokeWidth="14" />
      <circle cx="256" cy="240" r="52" fill="#fff" stroke="#f00" strokeWidth="12" />
      <path fill="#039" d="M232 216h48v48h-48z" />
    </>
  ),
};

export default function LocaleFlag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      {FLAGS[locale]}
    </svg>
  );
}
