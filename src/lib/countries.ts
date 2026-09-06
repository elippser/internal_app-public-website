import type { Locale } from "@/i18n/config";

/**
 * Los paises del selector del alta.
 *
 * Se guardan SOLO los codigos ISO-3166-1 alpha-2 y el nombre lo pone
 * `Intl.DisplayNames` en el idioma activo. Es lo que evita mantener 249 paises
 * traducidos a cinco idiomas a mano —que serian ~1.250 cadenas que nadie va a
 * revisar— y lo que hace que un aleman vea "Argentinien" sin una sola linea de
 * diccionario.
 *
 * La lista se arma en el SERVIDOR y viaja como props al formulario. Calcularla
 * en el cliente seria un error medible: el orden alfabetico depende del
 * `Intl.Collator` del entorno, y el de Node y el del navegador no siempre
 * coinciden — la lista saldria en un orden en el HTML y en otro al hidratar,
 * que es exactamente el error de hidratacion que React reporta como
 * "text content did not match".
 *
 * Lo que se guarda del lead es el CODIGO, no el nombre: es estable, cabe en dos
 * caracteres y es lo que despues cruza con el resto de la plataforma.
 */

/** ISO-3166-1 alpha-2, incluidos territorios con hoteleria propia. */
const CODES = [
  "AD","AE","AF","AG","AI","AL","AM","AO","AR","AS","AT","AU","AW","AZ",
  "BA","BB","BD","BE","BF","BG","BH","BI","BJ","BM","BN","BO","BQ","BR","BS","BT","BW","BY","BZ",
  "CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CY","CZ",
  "DE","DJ","DK","DM","DO","DZ",
  "EC","EE","EG","ER","ES","ET",
  "FI","FJ","FK","FM","FO","FR",
  "GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GT","GU","GW","GY",
  "HK","HN","HR","HT","HU",
  "ID","IE","IL","IM","IN","IQ","IR","IS","IT",
  "JE","JM","JO","JP",
  "KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ",
  "LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY",
  "MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ",
  "NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ",
  "OM",
  "PA","PE","PF","PG","PH","PK","PL","PM","PR","PS","PT","PW","PY",
  "QA",
  "RE","RO","RS","RU","RW",
  "SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ",
  "TC","TD","TG","TH","TJ","TL","TM","TN","TO","TR","TT","TV","TW","TZ",
  "UA","UG","US","UY","UZ",
  "VA","VC","VE","VG","VI","VN","VU",
  "WS",
  "YE",
  "ZA","ZM","ZW",
] as const;

export interface CountryOption {
  code: string;
  label: string;
}

/**
 * Los mercados donde Roombir ya opera, arriba de todo y separados por un
 * `<optgroup>`. No es favoritismo: en un selector de 240 filas, que el pais del
 * 80% de quienes completan el formulario este a un scroll de distancia es la
 * diferencia entre elegirlo y abandonar.
 */
export const PRIORITY_CODES = ["AR", "UY", "CL", "BR", "PY", "BO", "PE", "MX", "CO", "ES"];

/**
 * La lista completa, ordenada alfabeticamente EN EL IDIOMA pedido.
 *
 * Si el entorno no trae los datos de ICU (Node compilado con `small-icu`), el
 * `DisplayNames` devuelve el propio codigo: el selector queda feo pero usable, y
 * el formulario no se cae por una diferencia de build.
 */
export function countryOptions(locale: Locale): CountryOption[] {
  let display: Intl.DisplayNames | null = null;
  try {
    display = new Intl.DisplayNames([locale], { type: "region" });
  } catch {
    display = null;
  }

  const collator = new Intl.Collator(locale);
  return CODES.map((code) => ({
    code,
    label: display?.of(code) ?? code,
  })).sort((a, b) => collator.compare(a.label, b.label));
}
