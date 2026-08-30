"use client";

import { useState, type FormEvent } from "react";
import { internalApiUrl, siteConfig } from "@/lib/siteConfig";

/**
 * Captura de leads del sitio público.
 *
 * Postea directo al API interno (`POST /public/mkt/leads`), que es público y
 * no pide JWT: crea o reusa la cuenta en el CRM y emite `lead.captured`. No
 * pasa por una route handler de Next a propósito — no hay nada que esconder
 * en el medio y así el sitio puede quedar estático.
 *
 * Las UTM se leen de la URL en el submit, no en el render: leerlas antes
 * obligaría a que el componente sea dinámico y rompería el prerender.
 */
export default function LeadForm({
  className,
  buttonLabel = "Quiero una demo",
}: {
  className?: string;
  buttonLabel?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const [k, v] of params) if (k.startsWith("utm_")) utm[k] = v;

    try {
      const res = await fetch(`${internalApiUrl}/public/mkt/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          company: String(form.get("company") ?? ""),
          message: String(form.get("message") ?? ""),
          siteId: siteConfig.siteId,
          utm,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "No pudimos enviar el formulario");
      }
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error de red");
      setState("error");
    }
  };

  if (state === "sent") {
    return (
      <div className={className} data-lead-form="sent">
        <p>¡Gracias! Te escribimos en las próximas horas.</p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={onSubmit} data-lead-form="">
      <input name="name" type="text" placeholder="Nombre" autoComplete="name" />
      <input
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        required
      />
      <input name="phone" type="tel" placeholder="Teléfono" autoComplete="tel" />
      <input
        name="company"
        type="text"
        placeholder="Hotel o empresa"
        autoComplete="organization"
      />
      <textarea name="message" placeholder="Contanos qué necesitás" rows={3} />
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Enviando..." : buttonLabel}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
