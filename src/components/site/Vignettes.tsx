import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dict/es";
import { renderRich } from "./RichText";
import styles from "./Vignettes.module.css";

/**
 * Viñetas de producto: pantallas reales del sistema, redibujadas en HTML.
 *
 * Cada una corresponde a algo que existe y se puede ir a ver: el tape chart del
 * hub Reservas, el calendario informativo del motor, el documento de decisión
 * del RMS, el turno del agente con su transcripción, el selector de espacio
 * operativo y las rutas agénticas del motor.
 *
 * Todas son componentes de servidor. Ninguna tiene estado; lo que parece
 * interactivo (pestañas, botones) es la foto de un estado, no un control. Y
 * todas reciben sus textos del diccionario: las etiquetas de una pantalla del
 * sistema se traducen igual que el sistema.
 */

type V = Dictionary["vignettes"];

function Frame({
  label,
  tag,
  tone = "paper",
  children,
}: {
  label: string;
  tag?: string;
  tone?: "paper" | "ink";
  children: ReactNode;
}) {
  return (
    // `data-fx`: al entrar en viewport, el FxObserver marca `data-fx-in` y el
    // CSS de este módulo "dibuja" el contenido — las barras crecen, las líneas
    // de la transcripción aparecen en orden. El estado base es el final.
    // `aria-hidden`: la viñeta es la FOTO de una pantalla, con datos de
    // ejemplo; para un lector de pantalla es ruido sin contexto (el argumento
    // real está en el copy que la rodea). Nada adentro es focuseable.
    <div
      className={[styles.frame, tone === "ink" ? styles.frameInk : ""].join(" ")}
      data-fx=""
      aria-hidden
    >
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.barLabel}>{label}</span>
        {tag && <span className={styles.barTag}>{tag}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

/** Retardo de animación escalonado, para pasar como style inline. */
function delay(seconds: number): React.CSSProperties {
  return { "--d": `${seconds.toFixed(2)}s` } as React.CSSProperties;
}

/* ---------------------------------------------------------- tape chart ---- */

type Seg = {
  start: number;
  span: number;
  kind: "confirmed" | "pending" | "block" | "live";
  label?: string;
};

const SEG_CLASS = {
  confirmed: styles.barConfirmed,
  pending: styles.barPending,
  block: styles.barBlock,
  live: styles.barLive,
};

const DAYS = 14;

function TapeRow({ unit, segs, row = 0 }: { unit: string; segs: Seg[]; row?: number }) {
  const cells: ReactNode[] = [];
  let day = 1;
  for (const seg of [...segs].sort((a, b) => a.start - b.start)) {
    while (day < seg.start) {
      cells.push(<div key={`e${day}`} className={styles.tapeCell} />);
      day += 1;
    }
    cells.push(
      <div
        key={`s${seg.start}`}
        className={[styles.tapeBar, SEG_CLASS[seg.kind]].join(" ")}
        // La cascada del dibujo: cada barra entra según su fila y su día de
        // inicio, como si el calendario se cargara de arriba a la izquierda.
        style={{ gridColumn: `span ${seg.span}`, ...delay(row * 0.1 + seg.start * 0.035) }}
      >
        {seg.label}
      </div>,
    );
    day += seg.span;
  }
  while (day <= DAYS) {
    cells.push(<div key={`e${day}`} className={styles.tapeCell} />);
    day += 1;
  }
  return (
    <>
      <div className={styles.tapeUnit}>{unit}</div>
      {cells}
    </>
  );
}

/** El calendario del hub Reservas: unidades por fila, noches por columna. */
export function TapeChart({ v }: { v: V }) {
  const t = v.tape;
  return (
    <Frame label={t.label} tag={t.tag}>
      <div className={styles.tape}>
        <div />
        {Array.from({ length: DAYS }, (_, i) => (
          <div key={i} className={styles.tapeHead}>
            {12 + i}
          </div>
        ))}

        <TapeRow
          row={0}
          unit={t.units.r101}
          segs={[
            { start: 1, span: 4, kind: "confirmed", label: t.bars.garcia },
            { start: 7, span: 4, kind: "pending", label: t.bars.perez },
          ]}
        />
        <TapeRow
          row={1}
          unit={t.units.r102}
          segs={[{ start: 2, span: 6, kind: "confirmed", label: t.bars.sosa }]}
        />
        <TapeRow
          row={2}
          unit={t.units.r103}
          segs={[
            { start: 1, span: 3, kind: "block", label: t.bars.paint },
            { start: 8, span: 7, kind: "confirmed", label: t.bars.ruiz },
          ]}
        />
        <TapeRow
          row={3}
          unit={t.units.cabin}
          segs={[{ start: 4, span: 6, kind: "live", label: t.bars.fresh }]}
        />
        <TapeRow
          row={4}
          unit={t.units.suite}
          segs={[
            { start: 5, span: 4, kind: "confirmed", label: t.bars.bianchi },
            { start: 11, span: 4, kind: "pending", label: t.bars.engine },
          ]}
        />
      </div>

      <div className={styles.tapeFoot}>
        <span className={styles.legend}>
          <i className={styles.barConfirmed} /> {t.legend.confirmed}
        </span>
        <span className={styles.legend}>
          <i className={styles.barPending} /> {t.legend.pending}
        </span>
        <span className={styles.legend}>
          <i className={styles.barBlock} /> {t.legend.block}
        </span>
        <span className={styles.legend}>
          <i className={styles.barLive} /> {t.legend.live}
        </span>
      </div>
    </Frame>
  );
}

/* -------------------------------------------------- calendario del motor -- */

type Day = {
  n: number;
  price?: string;
  left?: "l3" | "l2" | "l1";
  state?: "selected" | "range" | "closed" | "muted";
};

const CAL_DAYS: Day[] = [
  { n: 8, price: "78", state: "muted" },
  { n: 9, price: "78", state: "muted" },
  { n: 10, price: "78" },
  { n: 11, price: "78" },
  { n: 12, price: "84", left: "l3" },
  { n: 13, price: "96" },
  { n: 14, price: "96", state: "selected" },
  { n: 15, price: "96", state: "range" },
  { n: 16, price: "96", state: "range" },
  { n: 17, price: "88", state: "selected" },
  { n: 18, price: "78" },
  { n: 19, price: "78" },
  { n: 20, price: "84", left: "l2" },
  { n: 21, price: "112" },
  { n: 22, price: "112", state: "closed" },
  { n: 23, price: "98" },
  { n: 24, price: "84" },
  { n: 25, price: "78" },
  { n: 26, price: "78" },
  { n: 27, price: "78", left: "l1" },
  { n: 28, price: "78" },
];

const STATE_CLASS = {
  selected: styles.calSelected,
  range: styles.calInRange,
  closed: styles.calClosed,
  muted: styles.calMuted,
};

/**
 * El datepicker del motor público. No es un selector de fechas: muestra precio
 * desde, unidades restantes y días cerrados, día por día.
 */
export function EngineCalendar({ v }: { v: V }) {
  const c = v.calendar;
  const left = { l3: c.left3, l2: c.left2, l1: c.left1 };
  return (
    <Frame label={c.label} tag={c.tag}>
      <div className={styles.cal}>
        {c.dows.map((d, i) => (
          <div key={`${d}-${i}`} className={styles.calDow}>
            {d}
          </div>
        ))}
        {CAL_DAYS.map((day, i) => (
          <div
            key={day.n}
            className={[styles.calDay, day.state ? STATE_CLASS[day.state] : ""].join(" ")}
            style={delay(i * 0.03)}
          >
            <span className={styles.calNum}>{day.n}</span>
            {day.price && <span className={styles.calPrice}>${day.price}k</span>}
            {day.left && <span className={styles.calLeft}>{left[day.left]}</span>}
          </div>
        ))}
        <p className={styles.calHint}>{c.hint}</p>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------ decisión del RMS -- */

/** El documento de decisión: por qué el motor sugiere esa tarifa y no otra. */
export function RateDecision({ v, locale }: { v: V; locale: Locale }) {
  const d = v.decision;
  const rows = [
    { key: d.keys.occupancy, val: d.values.occupancy },
    { key: d.keys.pace, val: d.values.pace },
    { key: d.keys.event, val: d.values.event },
    { key: d.keys.comp, val: d.values.comp },
    { key: d.keys.rule, val: d.values.rule },
    { key: d.keys.cap, val: d.values.cap },
  ];

  return (
    <Frame label={d.label} tag={d.tag}>
      <div className={styles.decisionTop}>
        <div>
          <p className={styles.decisionDate}>{d.subject}</p>
          <div className={styles.decisionRates}>
            <span className={styles.rateOld}>$84.000</span>
            <span className={styles.rateNew}>$96.600</span>
            <span className={styles.rateDelta}>+15%</span>
          </div>
        </div>
      </div>

      <div>
        {rows.map((row) => (
          <div key={row.key} className={styles.logLine}>
            <span className={styles.logKey}>{row.key}</span>
            <span className={styles.logVal}>{renderRich(row.val, locale)}</span>
          </div>
        ))}
      </div>

      <div className={styles.decisionActions}>
        <span className={styles.miniBtn}>{d.accept}</span>
        <span className={[styles.miniBtn, styles.miniBtnGhost].join(" ")}>{d.reject}</span>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------ turno del agente -- */

/** Un turno de Bookfer IA, con la transcripción de lo que ejecutó. */
export function AgentTurn({ v }: { v: V }) {
  const a = v.agent;
  return (
    <Frame label={a.label} tag={a.tag} tone="ink">
      <div className={styles.chat}>
        <p className={styles.msgUser}>{a.ask}</p>

        <div className={styles.trace}>
          {a.trace.map((line) => (
            <p key={line.tool} className={styles.traceLine}>
              <b>{line.tool}</b> {line.arg}
              <span className={styles.traceOk}>{line.ok}</span>
            </p>
          ))}
        </div>

        <p className={styles.msgBot}>
          {a.answer}
          <span className={styles.caret} aria-hidden />
        </p>

        <div className={styles.resCard}>
          <div className={styles.resHead}>
            <span className={styles.resName}>{a.card.guest}</span>
            <span className={styles.resCode}>#BK-4821</span>
          </div>
          <div className={styles.resMeta}>
            {a.card.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <div className={styles.resActions}>
            <span className={[styles.resBtn, styles.resBtnMain].join(" ")}>{a.card.see}</span>
            <span className={styles.resBtn}>{a.card.undo}</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------- espacios operativos ---- */

/** El selector de espacio operativo y lo que le hace al menú. */
export function SpaceSwitcher({ v }: { v: V }) {
  const s = v.spaces;
  return (
    <Frame label={s.label} tag={s.tag}>
      <div className={styles.spaces}>
        <div className={styles.spaceTabs}>
          {s.tabs.map((tab, i) => (
            <span
              key={tab}
              className={[styles.spaceTab, i === 0 ? styles.spaceTabOn : ""].join(" ")}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className={styles.menuList}>
          {s.menu.map((label, i) => {
            const on = i < 5;
            return (
              <div
                key={label}
                className={[styles.menuItem, on ? "" : styles.menuOff].join(" ")}
              >
                <i aria-hidden />
                {label}
                {!on && <span className={styles.menuTag}>{s.other}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}

/* --------------------------------------------------- superficie agéntica -- */

/** Las rutas que el motor publica para que una IA pueda leer el alojamiento. */
export function AgentSurface({ v }: { v: V }) {
  const s = v.surface;
  return (
    <div className={[styles.frame, styles.frameInk].join(" ")} data-fx="" aria-hidden>
      <div className={styles.bar}>
        <span className={styles.dots} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.barLabel}>{s.host}</span>
        <span className={styles.barTag}>200 OK</span>
      </div>
      <div className={styles.tabsRow}>
        <span className={[styles.tabChip, styles.tabChipOn].join(" ")}>/llms.txt</span>
        <span className={styles.tabChip}>/availability.json</span>
        <span className={styles.tabChip}>/engine-capabilities.json</span>
      </div>
      <div className={styles.body}>
        <pre className={styles.code}>
          <i># {v.linkhub.name}</i>
          {"\n"}
          <b>&gt; </b>
          {s.intro}
          {"\n\n"}
          <b>{s.unitsTitle}</b>
          {"\n"}
          {s.units.join("\n")}
          {"\n\n"}
          <b>{s.bookTitle}</b>
          {"\n"}
          {s.book.join("\n")}
          {"\n\n"}
          <b>{s.policyTitle}</b>
          {"\n"}
          {s.policy}
        </pre>
      </div>
    </div>
  );
}

/* ------------------------------------------------------ reglas del RMS ---- */

/**
 * El motor de reglas del RMS. Se evalúan por orden y gana la última que
 * coincide, que es exactamente lo que muestra la viñeta.
 */
export function RulesList({ v, locale }: { v: V; locale: Locale }) {
  const r = v.rules;
  return (
    <Frame label={r.label} tag={r.tag}>
      <div className={styles.rules}>
        {r.rows.map((row, i) => (
          <div
            key={row.action}
            className={[
              styles.rule,
              i === 1 ? styles.ruleOn : "",
              i === 3 ? styles.ruleOff : "",
            ].join(" ")}
          >
            <span className={styles.ruleOrder}>0{i + 1}</span>
            <span className={styles.ruleCond}>{renderRich(row.cond, locale)}</span>
            <span className={styles.ruleAction}>{row.action}</span>
          </div>
        ))}
      </div>
      <p className={styles.ruleNote}>{r.note}</p>
    </Frame>
  );
}

/* ------------------------------------------------------------ comp-set --- */

/** La grilla de tarifas de la competencia para una fecha. */
export function CompSet({ v }: { v: V }) {
  const c = v.comp;
  const rates = ["$104.200", "$101.400", "$88.000", "—"];
  const sources = [c.sources.bookfer, c.sources.manual, c.sources.manual, c.sources.none];

  return (
    <Frame label={c.label} tag={c.tag}>
      <div className={styles.comp}>
        <div className={[styles.compRow, styles.compMine].join(" ")}>
          <span className={styles.compName}>{c.mine}</span>
          <span className={styles.compSrc}>{c.sources.own}</span>
          <span className={styles.compRate}>$96.600</span>
        </div>
        {c.rivals.map((name, i) => (
          <div key={name} className={styles.compRow}>
            <span className={styles.compName}>{name}</span>
            <span className={styles.compSrc}>{sources[i]}</span>
            <span className={styles.compRate}>{rates[i]}</span>
          </div>
        ))}
      </div>
      <p className={styles.ruleNote}>{c.note}</p>
    </Frame>
  );
}

/* ------------------------------------------------------------- LinkHub ---- */

/** La página link-in-bio, que es lo que el alojamiento pone en la bio de IG. */
export function LinkHubPhone({ v }: { v: V }) {
  const l = v.linkhub;
  return (
    <div className={styles.phone} data-fx="">
      <div className={styles.phoneScreen}>
        <div className={styles.phoneAvatar}>{l.name.slice(0, 1)}</div>
        <p className={styles.phoneName}>{l.name}</p>
        <p className={styles.phoneBio}>{l.bio}</p>
        {l.blocks.map((block, i) => (
          <span
            key={block}
            className={[styles.phoneBlock, i === 0 ? styles.phoneBlockMain : ""].join(" ")}
          >
            {block}
          </span>
        ))}
        <span className={styles.phoneDots} aria-hidden>
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------- señales del sistema ---- */

function SignalCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * Recomendación de tarifa aceptada. Es el lazo cerrado del RMS contado en tres
 * líneas: el número, el delta y a dónde fue.
 */
export function SignalRate({ v }: { v: V }) {
  return (
    <div className={styles.signal}>
      <p className={styles.signalHead}>
        <i aria-hidden />
        {v.signals.revenue}
      </p>
      <p className={styles.signalMain}>
        $96.600
        <span className={styles.signalDelta}>+15%</span>
      </p>
      <p className={styles.signalFoot}>
        <SignalCheck />
        {v.signals.applied}
      </p>
    </div>
  );
}

/** Un turno del agente resumido: qué hizo y con cuántas herramientas. */
export function SignalAgent({ v }: { v: V }) {
  return (
    <div className={styles.signal}>
      <p className={styles.signalHead}>
        <i aria-hidden />
        {v.signals.agent}
      </p>
      <p className={styles.signalText}>{v.signals.agentText}</p>
      <p className={styles.signalFoot}>
        <SignalCheck />
        {v.signals.agentFoot}
      </p>
    </div>
  );
}
