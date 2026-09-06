"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import type { CountryOption } from "@/lib/countries";
import { renderRich } from "@/components/site/RichText";
import styles from "./SignupForm.module.css";

/**
 * El formulario del alta.
 *
 * Es la unica puerta de entrada a roombir: lo que se completa aca genera un
 * lead en el back-office, y de ahi sale por correo el enlace —de un solo uso—
 * que habilita el `/register` del PMS. Nadie crea una cuenta sin pasar por este
 * formulario, asi que su superficie de abuso importa mas que la de cualquier
 * otra pagina del sitio.
 *
 * Lo que hace de este lado (el resto vive en el servidor, que es donde no se
 * puede mentir):
 *
 * 1. **Campo trampa.** Un input invisible que solo completa un script. Si viene
 *    lleno, el formulario finge exito y no manda nada — un error le diria al
 *    bot que reintente distinto.
 * 2. **Reloj.** Se mide cuanto paso entre que se pinto el formulario y el
 *    envio. Menos de dos segundos y medio no es una persona escribiendo.
 * 3. **Interaccion.** Si nunca hubo una tecla, un foco ni un puntero sobre el
 *    formulario, el envio se marca como sospechoso.
 * 4. **Turnstile** (opcional). Se activa poniendo la site key; sin ella el
 *    formulario funciona igual y el resto del filtro sigue en pie.
 *
 * Las tres primeras viajan al servidor como datos, no como veredicto: aca no se
 * decide nada, se informa. El que decide es el API, porque un cliente puede
 * mandar lo que quiera.
 */

type Field =
  | "hotelName"
  | "lodgingType"
  | "units"
  | "countryCode"
  | "city"
  | "contactName"
  | "email";

type Errors = Partial<Record<Field | "general", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Los mismos valores que `LEAD_LODGING_TYPES` del API. Si cambia uno, cambian los dos. */
const LODGING_TYPES = [
  "hotel",
  "apart_hotel",
  "hostel",
  "cabins",
  "inn_bnb",
  "apartment",
  "house",
  "country_house",
  "resort",
  "lodge",
  "glamping",
  "camping",
  "villas",
  "other",
] as const;

export default function SignupForm({
  locale,
  t,
  countries,
  priority,
  turnstileSiteKey,
}: {
  locale: Locale;
  /** Solo su seccion del diccionario: esto es cliente y las props se serializan. */
  t: Dictionary["createAccount"]["form"];
  countries: CountryOption[];
  /** Los codigos que van arriba de todo, ya resueltos en el servidor. */
  priority: CountryOption[];
  turnstileSiteKey?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState("");

  /** Cuando se pinto el formulario. Es el origen del reloj anti-bots. */
  const mountedAt = useRef(Date.now());
  const interacted = useRef(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // Turnstile: el script se carga UNA vez y solo si hay clave. El widget se
  // dibuja en modo implicito sobre el div con la clase `cf-turnstile`, y deja
  // su token en un input llamado `cf-turnstile-response` dentro del form.
  useEffect(() => {
    if (!turnstileSiteKey) return;
    if (document.querySelector("script[data-turnstile]")) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = "1";
    document.head.appendChild(script);
  }, [turnstileSiteKey]);

  const markInteraction = () => {
    interacted.current = true;
  };

  const countryGroups = useMemo(
    () => ({ priority, all: countries }),
    [priority, countries],
  );

  const validate = (form: FormData): Errors => {
    const next: Errors = {};
    const get = (key: string) => String(form.get(key) ?? "").trim();

    if (get("hotelName").length < 2) next.hotelName = t.errors.hotelName;
    if (!get("lodgingType")) next.lodgingType = t.errors.lodgingType;

    const units = Number(get("units"));
    if (!Number.isInteger(units) || units < 1 || units > 100000) {
      next.units = t.errors.units;
    }

    if (get("countryCode").length !== 2) next.countryCode = t.errors.country;
    if (get("city").length < 2) next.city = t.errors.city;
    if (get("contactName").length < 2) next.contactName = t.errors.contactName;

    const email = get("email");
    if (!email) next.email = t.errors.emailRequired;
    else if (!EMAIL_RE.test(email)) next.email = t.errors.emailInvalid;

    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "sending") return;

    const form = new FormData(e.currentTarget);

    // El campo trampa. Se corta antes de validar nada: al bot no se le devuelve
    // ni siquiera un error de formulario del que pueda aprender.
    if (String(form.get("website") ?? "").length > 0) {
      setState("sent");
      return;
    }

    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      // El foco va al primer campo con problema: sin esto, en el movil el
      // mensaje queda fuera de pantalla y parece que el boton no hizo nada.
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setState("sending");

    const utm: Record<string, string> = {};
    for (const [key, value] of new URLSearchParams(window.location.search)) {
      if (key.startsWith("utm_")) utm[key] = value;
    }

    const email = String(form.get("email") ?? "").trim();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotelName: String(form.get("hotelName") ?? "").trim(),
          lodgingType: String(form.get("lodgingType") ?? ""),
          units: Number(String(form.get("units") ?? "")),
          countryCode: String(form.get("countryCode") ?? ""),
          city: String(form.get("city") ?? "").trim(),
          contactName: String(form.get("contactName") ?? "").trim(),
          email,
          phone: String(form.get("phone") ?? "").trim(),
          locale,
          utm,
          website: "",
          elapsedMs: Date.now() - mountedAt.current,
          interacted: interacted.current,
          captchaToken: String(form.get("cf-turnstile-response") ?? ""),
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        const code = body?.error ?? "";
        setErrors({
          general:
            code === "disposable_email"
              ? t.errors.disposable
              : code === "rate_limited"
                ? t.errors.rate
                : code === "mail_failed"
                  ? t.errors.mail
                  : t.errors.generic,
        });
        setState("error");
        return;
      }

      setSentTo(email);
      setState("sent");
    } catch {
      setErrors({ general: t.errors.network });
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className={styles.done} data-signup="sent">
        <span className={styles.doneMark} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m3.5 7.5 8.5 6 8.5-6" />
          </svg>
        </span>
        <h2 className={styles.doneTitle}>{t.done.title}</h2>
        <p className={styles.doneText}>
          {sentTo ? t.done.text.replace("{email}", sentTo) : t.done.textNoEmail}
        </p>
        <ul className={styles.doneList}>
          {t.done.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    );
  }

  const err = (field: Field) =>
    errors[field] ? (
      <p className={styles.fieldError} id={`err-${field}`}>
        {errors[field]}
      </p>
    ) : null;

  const inputProps = (field: Field) => ({
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `err-${field}` : undefined,
    className: [styles.input, errors[field] ? styles.inputBad : ""].join(" "),
  });

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={onSubmit}
      onKeyDown={markInteraction}
      onPointerDown={markInteraction}
      onFocus={markInteraction}
      noValidate
      data-signup=""
    >
      <fieldset className={styles.group}>
        <legend className={styles.legend}>{t.groupProperty}</legend>

        <div className={[styles.field, styles.wide].join(" ")}>
          <label className={styles.label} htmlFor="su-hotelName">
            {t.hotelName}
          </label>
          <input
            id="su-hotelName"
            type="text"
            placeholder={t.hotelNamePlaceholder}
            autoComplete="organization"
            maxLength={160}
            required
            {...inputProps("hotelName")}
          />
          {err("hotelName")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-lodgingType">
            {t.lodgingType}
          </label>
          <select
            id="su-lodgingType"
            defaultValue=""
            required
            {...inputProps("lodgingType")}
          >
            <option value="" disabled>
              {t.choose}
            </option>
            {LODGING_TYPES.map((key) => (
              <option key={key} value={key}>
                {t.lodgingTypes[key]}
              </option>
            ))}
          </select>
          {err("lodgingType")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-units">
            {t.units}
          </label>
          <input
            id="su-units"
            type="number"
            inputMode="numeric"
            min={1}
            max={100000}
            step={1}
            placeholder={t.unitsPlaceholder}
            required
            {...inputProps("units")}
          />
          <p className={styles.hint}>{t.unitsHint}</p>
          {err("units")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-countryCode">
            {t.country}
          </label>
          <select
            id="su-countryCode"
            defaultValue=""
            autoComplete="country"
            required
            {...inputProps("countryCode")}
          >
            <option value="" disabled>
              {t.choose}
            </option>
            <optgroup label={t.countryCommon}>
              {countryGroups.priority.map((c) => (
                <option key={`p-${c.code}`} value={c.code}>
                  {c.label}
                </option>
              ))}
            </optgroup>
            <optgroup label={t.countryAll}>
              {countryGroups.all.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </optgroup>
          </select>
          {err("countryCode")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-city">
            {t.city}
          </label>
          <input
            id="su-city"
            type="text"
            placeholder={t.cityPlaceholder}
            autoComplete="address-level2"
            maxLength={120}
            required
            {...inputProps("city")}
          />
          {err("city")}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>{t.groupContact}</legend>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-contactName">
            {t.contactName}
          </label>
          <input
            id="su-contactName"
            type="text"
            placeholder={t.contactNamePlaceholder}
            autoComplete="name"
            maxLength={120}
            required
            {...inputProps("contactName")}
          />
          {err("contactName")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="su-email">
            {t.email}
          </label>
          <input
            id="su-email"
            type="email"
            placeholder={t.emailPlaceholder}
            autoComplete="email"
            maxLength={254}
            required
            {...inputProps("email")}
          />
          <p className={styles.hint}>{t.emailHint}</p>
          {err("email")}
        </div>

        <div className={[styles.field, styles.wide].join(" ")}>
          <label className={styles.label} htmlFor="su-phone">
            {t.phone} <span>· {t.optional}</span>
          </label>
          <input
            id="su-phone"
            className={styles.input}
            name="phone"
            type="tel"
            placeholder={t.phonePlaceholder}
            autoComplete="tel"
            maxLength={32}
          />
        </div>
      </fieldset>

      {/* Invisible para una persona, irresistible para un script. */}
      <div className={styles.honey} aria-hidden>
        <label htmlFor="su-website">{t.honeypot}</label>
        <input id="su-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {turnstileSiteKey && (
        <div
          className={["cf-turnstile", styles.captcha].join(" ")}
          data-sitekey={turnstileSiteKey}
          data-appearance="interaction-only"
        />
      )}

      {errors.general && (
        <p role="alert" className={styles.error}>
          {errors.general}
        </p>
      )}

      <button
        type="submit"
        className={["btn", "btn-primary", "btn-lg", styles.submit].join(" ")}
        disabled={state === "sending"}
      >
        {state === "sending" ? t.sending : t.submit}
      </button>

      <p className={styles.legal}>{renderRich(t.legal, locale)}</p>
    </form>
  );
}
