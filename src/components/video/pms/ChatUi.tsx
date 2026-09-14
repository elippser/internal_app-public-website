import type { ReactNode } from "react";
import OrbLoader from "./OrbLoader";
import StatusBadge, { type ReservationStatus } from "./StatusBadge";
import UnitCard, { type Unit, type UnitLabels } from "./UnitCard";
import s from "./ChatUi.module.css";

/**
 * El chat de Roombir IA, reciclado pieza por pieza.
 *
 * Cada componente de acá es la copia de un trozo de `RoombirChatView.tsx`,
 * `RoombirBlocks.tsx` y `RoombirRevenueBlocks.tsx` (pms-core/app): el
 * compositor con su botón de enviar, la burbuja del usuario, la transcripción
 * del turno con sus pasos, la respuesta con el orbe al pie, y los bloques de
 * respuesta rica (lista de reservas, plano de unidades, tarjeta de revenue).
 * Las clases y las animaciones son las mismas; lo que cambia es que acá no hay
 * estado ni red: cada pieza recibe lo que muestra y el video decide cuándo.
 */

export function ChatShell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={[s.shell, className ?? ""].join(" ")}>{children}</div>;
}

/* ------------------------------------------------------------ compositor -- */

export function Composer({
  text,
  placeholder,
  caret = false,
  pressed = false,
  sendLabel,
}: {
  text: string;
  placeholder: string;
  /** Cursor visible: mientras "se escribe". */
  caret?: boolean;
  /** El instante del envío: el botón se hunde apenas. */
  pressed?: boolean;
  sendLabel: string;
}) {
  const empty = text.length === 0;
  return (
    <div className={s.composer}>
      <div className={[s.inputWrap, caret ? s.inputWrapFocus : ""].join(" ")}>
        <div className={s.textarea} aria-hidden>
          {empty ? <span className={s.placeholder}>{placeholder}</span> : text}
          {caret && <span className={s.caret} />}
        </div>
        <button
          type="button"
          className={s.sendBtn}
          disabled={empty && !pressed}
          aria-label={sendLabel}
          tabIndex={-1}
          style={pressed ? { transform: "scale(0.88)", filter: "brightness(1.12)" } : undefined}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- burbujas -- */

export function UserBubble({ text }: { text: string }) {
  return (
    <div className={s.userRow}>
      <div className={s.userBubble}>{text}</div>
    </div>
  );
}

export type Step = { label: string; tool: string; running: boolean };

function ToolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function TraceStep({ step }: { step: Step }) {
  return (
    <div className={`${s.step} ${step.running ? s.stepRunning : s.stepDone}`}>
      <span className={s.stepIcon} aria-hidden>
        {step.running ? (
          <span className={s.stepDot} />
        ) : (
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 8.5l3 3 6-7" />
          </svg>
        )}
      </span>
      <span className={s.stepLabel}>{step.label}</span>
      <span className={s.stepTool}>
        <ToolIcon />
        {step.tool}
      </span>
    </div>
  );
}

/**
 * Un turno del asistente: los pasos que corrió (en orden, cada uno entra con
 * su fade), la respuesta de cierre, el bloque rico debajo y, al pie, el orbe
 * que gira mientras piensa y descansa en cuanto escribe.
 */
export function AssistantTurn({
  steps,
  answer,
  streaming = false,
  block,
  thinking,
  thinkingLabel,
  waitHint,
  foot = true,
}: {
  steps: Step[];
  answer: string;
  /** La respuesta se está escribiendo: cursor al final. */
  streaming?: boolean;
  block?: ReactNode;
  thinking: boolean;
  thinkingLabel: string;
  waitHint: string;
  /** El orbe vive sólo en la última respuesta, como en el chat real. */
  foot?: boolean;
}) {
  return (
    <div className={s.assistantRow}>
      <div className={s.assistantBody}>
        {steps.length > 0 && (
          <div className={s.trace}>
            <div className={s.stepGroup}>
              {steps.map((st, i) => (
                <TraceStep key={`${st.tool}-${i}`} step={st} />
              ))}
            </div>
          </div>
        )}
        {answer && (
          <div className={[s.assistantText, streaming ? s.assistantStreaming : ""].join(" ")}>
            <p>{answer}</p>
          </div>
        )}
        {block}
        {foot && (
          <div className={s.asstFoot}>
            <span className={s.asstOrb}>
              <OrbLoader size={28} spinning={thinking} label={thinkingLabel} />
            </span>
            {thinking && (
              <span className={s.waitHint} aria-hidden>
                {waitHint}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- bloques -- */

export type BookingRowData = {
  guest: string;
  detail: string;
  amount?: string;
  status: ReservationStatus;
  statusLabel: string;
};

/** Una fila de `ReservationsList` (RoombirBlocks): huésped, fechas, monto, estado. */
export function BookingRow({ row }: { row: BookingRowData }) {
  return (
    <div className={s.resRow}>
      <div className={s.resMain}>
        <span className={s.resGuest}>{row.guest}</span>
        <span className={s.resDates}>{row.detail}</span>
      </div>
      <div className={s.resRight}>
        {row.amount && <span className={s.resAmount}>{row.amount}</span>}
        <StatusBadge status={row.status} label={row.statusLabel} />
      </div>
    </div>
  );
}

export function ReservationList({ rows, block = false }: { rows: BookingRowData[]; block?: boolean }) {
  return (
    <div className={[block ? s.block : "", s.resList].join(" ")}>
      {rows.map((r, i) => (
        <BookingRow key={`${r.guest}-${i}`} row={r} />
      ))}
    </div>
  );
}

/** El plano de unidades de `RoomGrid` (RoombirBlocks): piso + tarjetas reales. */
export function UnitsPlan({
  floor,
  units,
  labels,
  legend,
  block = false,
  highlight,
}: {
  floor: string;
  units: Unit[];
  labels: UnitLabels;
  legend?: string[];
  block?: boolean;
  /** Código de la unidad que está cambiando: la tarjeta hace su pop. */
  highlight?: string | null;
}) {
  return (
    <div className={[block ? s.block : "", s.planWrap].join(" ")}>
      {legend && legend.length > 0 && (
        <div className={s.legend}>
          {legend.map((l) => (
            <span key={l} className={s.legendItem}>
              {l}
            </span>
          ))}
        </div>
      )}
      <div className={s.floorBlock}>
        <div className={s.floorTitle}>{floor}</div>
        <div className={s.unitCardGrid}>
          {units.map((u) => (
            <div
              // La key incluye el estado: al cambiar, la tarjeta se remonta y
              // hace su pop, que es lo que se ve cuando el plano se refresca.
              key={`${u.code}-${u.status}`}
              className={highlight === u.code ? s.unitPop : undefined}
              data-status={u.status}
              data-unit={u.code}
            >
              <UnitCard unit={u} labels={labels} selected={highlight === u.code} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** `value` admite un nodo: el video lo usa para que las cifras cuenten. */
export type KpiData = { label: string; value: ReactNode; hint?: string };

/** La grilla de KPI de `RoombirRevenueBlocks`: etiqueta, valor, pista. */
export function KpiGrid({ kpis }: { kpis: KpiData[] }) {
  return (
    <div className={s.kpiGrid}>
      {kpis.map((k, i) => (
        <div key={k.label} className={s.kpi} style={{ ["--i" as string]: i }} data-kpi={i}>
          <span className={s.kpiLabel}>{k.label}</span>
          <span className={s.kpiValue}>{k.value}</span>
          {k.hint ? <span className={s.kpiHint}>{k.hint}</span> : null}
        </div>
      ))}
    </div>
  );
}

/** La `SectionCard` de revenue con su grilla de KPI adentro. */
export function RevenueCard({
  title,
  meta,
  kpis,
  block = false,
  footer,
}: {
  title: string;
  meta?: string;
  kpis: KpiData[];
  block?: boolean;
  footer?: ReactNode;
}) {
  return (
    <div className={[block ? s.block : "", s.card].join(" ")}>
      <div className={s.cardHead}>
        <span className={s.cardTitle}>{title}</span>
        {meta && <span className={s.cardMeta}>{meta}</span>}
      </div>
      <KpiGrid kpis={kpis} />
      {footer}
    </div>
  );
}
