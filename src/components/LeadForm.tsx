"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import { siteConfig } from "@/lib/siteConfig";
import { renderRich } from "./site/RichText";
import styles from "./LeadForm.module.css";

/**
 * Captura de leads del sitio público.
 *
 * Postea a `/api/lead`, de este mismo sitio, y desde ahí el servidor reenvía
 * al API interno. El rodeo es obligatorio: el API interno sólo autoriza por
 * CORS el origen del panel, así que un POST directo desde `bookfer.com` lo
 * corta el navegador y el lead se pierde en silencio. El porqué completo está
 * en `src/app/api/lead/route.ts`.
 *
 * Las UTM se leen de la URL en el submit, no en el render: leerlas antes
 * obligaría a que el componente sea dinámico y rompería el prerender.
 */
export default function LeadForm({
  locale,
  t,
  className,
  buttonLabel,
}: {
  locale: Locale;
  /** Sólo la sección del formulario, no el diccionario entero: esto es un
      client component y sus props viajan serializadas en el payload de
      hidratación de la página. */
  t: Dictionary["leadForm"];
  className?: string;
  buttonLabel?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "sending") return;

    const form = new FormData(e.currentTarget);
    // El campo trampa lo completan los bots y nadie más. Si tiene algo,
    // fingimos éxito: un error le diría al script que reintente distinto.
    if (String(form.get("website") ?? "").length > 0) {
      setState("sent");
      return;
    }

    setState("sending");
    setError("");

    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const [k, v] of params) if (k.startsWith("utm_")) utm[k] = v;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          company: String(form.get("company") ?? ""),
          message: String(form.get("message") ?? ""),
          siteId: siteConfig.siteId,
          // El idioma en el que llegó la consulta: sirve para contestarle en
          // el mismo, que es lo mínimo si publicamos en cinco.
          locale,
          utm,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        // Al visitante no le decimos "upstream": son códigos nuestros. Sólo
        // el 429 merece un texto propio, porque es lo único que puede
        // resolver esperando.
        setError(body?.error === "rate_limited" ? t.errorRate : t.errorGeneric);
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setError(t.errorGeneric);
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className={[styles.done, className ?? ""].join(" ")} data-lead-form="sent">
        <p className={styles.doneTitle}>{t.doneTitle}</p>
        <p className={styles.doneText}>{t.doneText}</p>
      </div>
    );
  }

  return (
    <form
      className={[styles.form, className ?? ""].join(" ")}
      onSubmit={onSubmit}
      data-lead-form=""
    >
      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-name">
          {t.name}
        </label>
        <input
          id="lead-name"
          className={styles.input}
          name="name"
          type="text"
          placeholder={t.namePlaceholder}
          autoComplete="name"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-email">
          {t.email}
        </label>
        <input
          id="lead-email"
          className={styles.input}
          name="email"
          type="email"
          placeholder={t.emailPlaceholder}
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-phone">
          {t.phone} <span>· {t.optional}</span>
        </label>
        <input
          id="lead-phone"
          className={styles.input}
          name="phone"
          type="tel"
          placeholder={t.phonePlaceholder}
          autoComplete="tel"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="lead-company">
          {t.company}
        </label>
        <input
          id="lead-company"
          className={styles.input}
          name="company"
          type="text"
          placeholder={t.companyPlaceholder}
          autoComplete="organization"
        />
      </div>

      <div className={[styles.field, styles.wide].join(" ")}>
        <label className={styles.label} htmlFor="lead-message">
          {t.message} <span>· {t.optional}</span>
        </label>
        <textarea
          id="lead-message"
          className={styles.textarea}
          name="message"
          placeholder={t.messagePlaceholder}
          rows={4}
        />
      </div>

      <div className={styles.honey} aria-hidden>
        <label htmlFor="lead-website">{t.honeypot}</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className={["btn", "btn-primary", "btn-lg", styles.submit].join(" ")}
        disabled={state === "sending"}
      >
        {state === "sending" ? t.sending : (buttonLabel ?? t.submit)}
      </button>

      {error && (
        <p role="alert" className={styles.error}>
          {error} {t.errorTail}
        </p>
      )}

      <p className={styles.legal}>{renderRich(t.legal, locale)}</p>
    </form>
  );
}
