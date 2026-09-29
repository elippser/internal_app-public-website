"use client";

import { Fragment, useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import type { SceneProps } from "../scenes";
import { CHAT_TYPE_AT, STREAM_MS, clamp01, easeIn, easeInOut, easeOutExpo, lerp, planChat, seg, typedCount } from "../timeline";
import { Camera, Cursor, Gradient, HBlur, Mark, H as H_L, W as W_L, useOffsets, type CursorKey, type Rect } from "../fx";
import { usePortrait } from "../orientation";
import { AssistantTurn, ChatShell, Composer, ReservationList, UserBubble } from "../pms/ChatUi";
import PmsShell from "../pms/PmsShell";
import { RecCard } from "../pms/Revenue";
import TourismCard from "../pms/TourismCard";
import { chatBooking, recs, shellLabels, tourismMetrics } from "./data";
import s from "../scenes.module.css";

/**
 * Acto 4 — la conversación. La referencia no tiene demo del producto: la
 * bisagra usa el lenguaje de "Convergence unlocks" (texto que entra con blur
 * horizontal y se releva como un roller) y la demostración de Roombir IA nace
 * de un input suelto en el medio del cuadro y se abre hasta ser la app entera.
 */

/* 1 · Bisagra -------------------------------------------------------------- */

// Quedó en UNA sola línea de texto y nada más (20-09-2026). Antes entraba
// "¿Y si no necesitaras contratar a nadie más?" y recién después la cambiaba
// por la respuesta, con el orbe de Roombir IA arriba; ahora entra directo la
// única frase —en negro, sin el subrayado de marca— con el mismo blur
// horizontal que abría la pregunta.
//
// Se sacaron a propósito, no son un olvido: el orbe (`OrbLoader`) y la marca de
// agua (`Mark`, el logo chico abajo a la derecha, que sí llevan las otras 23).
const HI = { line: 180 };

export function HingeScene({ lt, v }: SceneProps) {
  return (
    <div className={`${s.scene} ${s.lavender}`}>
      <div className={s.typeBlock}>
        <h2 className={s.display}>
          <HBlur lt={lt} at={HI.line} dur={420}>
            {v.hinge.line}
          </HBlur>
        </h2>
      </div>
    </div>
  );
}

/* 2 · De un input suelto a la app: la demostración -------------------------- */

/**
 * Dónde vive la app: centrada y grande, el mismo lugar que ocupa la tarjeta al
 * frente de la rueda (escena 12) y la UI de `unfold` (escena 15). No hay nada
 * más en cuadro —las dos apps embebidas que flotaban al costado se fueron el
 * 20-09-2026—: la demostración entera pasa adentro de esta ventana.
 */
// `r` subió de 12 a 26 el 21-09-2026: el usuario pidió los bordes más redondos.
const APP = { w: 980, h: 620, x: 150, y: 50, r: 26 };
const APP_L = APP;
/** La ventana en el corte vertical: la de escritorio, centrada en 720×1280 (se achica con `K`). */
const APP_P = { w: 980, h: 620, x: 360 - 490, y: 640 - 310, r: 26 };

/**
 * Los ganchos de medición que planta `pms/ChatUi.tsx`. `data-ghost` es el
 * espejo invisible con la frase completa: de ahí sale, de una sola vez, cuánto
 * tiene que recorrer la cámara.
 */
const PILL = "[data-pill]";
const SEND = "[data-send]";
const GHOST = "[data-ghost]";

/**
 * El prólogo, en ms de tiempo local. Lo que sigue lo manda `planChat`, que
 * arranca a tipear en `CHAT_TYPE_AT`: acá abajo no hay ningún número que
 * dependa del largo de una frase, así que en alemán el prólogo dura lo mismo y
 * lo único que se estira es el tipeo.
 *
 * El orden: la frase de la bisagra se va, queda un input solo en el medio, la
 * cámara se acerca, se escribe la consulta —y la cámara SIGUE al cursor de
 * texto, que si no se le va de cuadro—, un puntero grande aprieta enviar, la
 * cámara se aleja y la UI se compone alrededor del input, que queda abajo.
 */
const PRO = {
  fade: 90, fadeEnd: 560,
  pill: 420, pillEnd: 1150,
  zoom: 1150,
  /** Escala de cámara con el input suelto y con el input a tamaño de tipeo. */
  small: 0.78, big: 2.2,
  /**
   * Dónde queda el cursor de texto dentro del cuadro: al empezar a escribir y
   * al terminar. Que NO sea un punto fijo es lo que deja leer: si el cursor
   * estuviera clavado, la cámara tendría que recorrer todo el ancho de la
   * frase y lo ya escrito se iría de cuadro a la velocidad del tipeo. Dejando
   * que el cursor derive de un tercio a cuatro quintos del ancho, la cámara
   * recorre apenas el sobrante —unos 370 px en vez de 930— y la frase entera
   * queda a la vista cuando se termina de escribir.
   */
  followFrom: 0.36, followTo: 0.8,
  /**
   * Del borde de la píldora hasta donde arranca el texto. Medido en el DOM,
   * no estimado: es `caret.x − pill.x` con el input vacío.
   */
  textAt: 57,
  /**
   * Antes de terminar de escribir la cámara afloja y vuelve a encuadrar la
   * píldora entera: si no, con el acercamiento de tipeo el botón de enviar
   * queda fuera de cuadro y el puntero iría a hacer click a la nada.
   */
  settle: 700, settleEnd: 120, settleScale: 1.35,
  /**
   * El click. El puntero entra de lejos, frena cerca del botón, aprieta y
   * suelta: todo el gesto va lento a propósito, para que se lea que alguien
   * lo está apretando y no que el envío pasó solo.
   */
  cursor: 1100, press: 240, ripple: 900,
  /** El alejamiento, y la UI componiéndose, después del click. */
  out: 1150, open: 980,
  /**
   * Cuándo aparece el hilo con el mensaje ya mandado. La app NO arranca con un
   * loader: el 20-09-2026 se sacó primero el isotipo por fragmentos y después
   * la barra entera. El click manda la consulta y punto; mientras la ventana
   * termina de componerse, la burbuja ya está puesta y la IA ya está pensando.
   */
  thread: 780,
};

/**
 * Lo que el `.composer` del chat agrega alrededor de la píldora (su padding).
 * El input suelto se arma con la misma caja para que la píldora de vidrio y la
 * del compositor de la app caigan exactamente una sobre la otra.
 */
const GLASS = { pad: 20, top: 7 };

/** Por si se pinta antes de la primera medición: un cuadro que nadie ve. */
const PILL_FALLBACK: Rect = { x: 85, y: APP.h - 60, w: 860, h: 50 };

/**
 * Avance de 0 a 1 con arranque y frenada suaves y velocidad CONSTANTE en el
 * medio: el perfil de una cámara movida a mano. `edge` es qué fracción del
 * recorrido ocupa cada rampa.
 *
 * Un `easeInOut` entero no sirve acá: haría que la cámara corra en el medio y
 * el cursor de texto se descuelgue. Esto deja el 68 % del recorrido a
 * velocidad pareja, que es lo que se puede leer.
 */
function ramp(p: number, edge: number): number {
  const q = clamp01(p);
  const v = 1 / (1 - edge);
  if (q <= edge) return (v * q * q) / (2 * edge);
  if (q >= 1 - edge) return 1 - (v * (1 - q) * (1 - q)) / (2 * edge);
  return v * (edge / 2 + (q - edge));
}

export function ChatScene({ lt, v, paused }: SceneProps) {
  // En vertical (`?view=mobile`) va la MISMA ventana de escritorio, centrada y achicada ×`K` para que
  // entre entera; la cámara hace sus cuentas con los puntos ya achicados (`wx`/`wy`).
  const portrait = usePortrait();
  const APP = portrait ? APP_P : APP_L;
  const K = portrait ? 0.7 : 1;
  const wx = (x: number) => 360 + (x - 360) * K;
  const wy = (y: number) => 640 + (y - 640) * K;
  const wrapK = (x: number) => (portrait ? wx(x) : x);
  const wrapKy = (y: number) => (portrait ? wy(y) : y);
  const W = portrait ? 720 : W_L;
  const H = portrait ? 1280 : H_L;
  const plan = useMemo(() => planChat(v.chat), [v.chat]);
  const { turns } = plan;
  const appRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const lastHeight = useRef<number | null>(null);

  // El hilo crece desde abajo: cuando entra algo, lo de arriba sube deslizando.
  useLayoutEffect(() => {
    const el = threadRef.current;
    if (!el) {
      lastHeight.current = null;
      return;
    }
    const h = el.offsetHeight;
    const prev = lastHeight.current;
    lastHeight.current = h;
    if (prev === null) return;
    const d = h - prev;
    if (d > 0.5 && d < 480) {
      el.animate([{ transform: `translateY(${d}px)` }, { transform: "translateY(0)" }], { duration: 380, easing: "cubic-bezier(0.22, 0.9, 0.3, 1)", composite: "add" });
    }
  });

  let typed = "";
  let caretOn = lt < turns[0].typeStart;
  let pressed = false;
  turns.forEach((tp, i) => {
    const ask = v.chat.turns[i].ask;
    if (lt >= tp.typeStart && lt < tp.send) {
      typed = ask.slice(0, typedCount(tp.offsets, lt - tp.typeStart));
      caretOn = true;
    }
    if (lt >= tp.send - 90 && lt < tp.send + PRO.press) pressed = true;
    if (lt >= tp.send - 90 && lt < tp.send) typed = ask;
  });

  // Dónde cayeron la píldora, el botón de enviar y el espejo con la frase
  // entera. Se mide UNA sola vez, al montar: nada de esto depende de cuánto se
  // lleva escrito, y por eso la cámara no puede temblar con el tipeo.
  const rects = useOffsets(appRef, [PILL, SEND, GHOST], []);
  const pill = rects[PILL] ?? PILL_FALLBACK;

  const t0 = turns[0];
  const send = t0.send;
  const fade = easeIn(seg(lt, PRO.fade, PRO.fadeEnd));
  const pillIn = easeOutExpo(seg(lt, PRO.pill, PRO.pillEnd));
  const zoomP = easeInOut(seg(lt, PRO.zoom, CHAT_TYPE_AT));
  const outP = easeInOut(seg(lt, send, send + PRO.out));
  const openP = easeOutExpo(seg(lt, send + 150, send + 150 + PRO.open));
  // El cruce vidrio → app: la píldora de vidrio se apaga mientras la ventana
  // se enciende. Como son el mismo componente en el mismo lugar, no se ve un
  // cambio de pieza sino un cambio de material.
  const appIn = easeOutExpo(seg(lt, send + 120, send + 620));
  const glass = 1 - easeIn(seg(lt, send + 120, send + 620));
  const threadAt = send + PRO.thread;

  // La cámara. `scale` es una sola curva (acercarse y alejarse) y la
  // traslación se despeja de ella: para que el punto P del contenido caiga en
  // el punto T de la pantalla hace falta t = T − O − (P − O) · s, con O en el
  // centro del escenario. Con eso el encuadre es exacto a cualquier escala, y
  // seguir al cursor de texto es cambiar P, no inventar un paneo.
  const settleP = easeInOut(seg(lt, t0.typeEnd - PRO.settle, t0.typeEnd + PRO.settleEnd));
  const scale = lerp(lerp(lerp(PRO.small, PRO.big, zoomP), PRO.settleScale, settleP), 1, outP);
  const put = (px: number, tx: number) => tx - W / 2 - (px - W / 2) * scale;

  // La cámara NO se clava al cursor de texto. El tipeo tiene un ritmo
  // irregular a propósito —cada letra dura distinto, las comas suman 100 ms y
  // los espacios 34—, así que una cámara pegada al cursor hereda esos tirones:
  // avanza a los saltos y no se puede leer. Sigue el AVANCE del texto en el
  // TIEMPO, que es parejo, y deja que el cursor respire un par de letras
  // alrededor del punto de lectura.
  //
  // A dónde tiene que llegar es el ancho de la frase ENTERA, medido de una vez
  // en un espejo invisible dentro del campo (`data-ghost`). Antes se deducía
  // del cursor de texto dividido por las letras escritas, y eso era el
  // temblequeo: ese promedio cambiaba con CADA tecla y multiplicaba todo el
  // recorrido, así que cada letra empujaba la cámara un poco. Medido así no
  // hay ni una constante de tipografía —los cinco idiomas salen solos— y la
  // posición pasa a ser función únicamente del tiempo.
  const x0 = pill.x + PRO.textAt;
  const fullWidth = rects[GHOST]?.w ?? 0;
  const typeP = ramp(clamp01((lt - t0.typeStart) / (t0.typeEnd - t0.typeStart)), 0.16);
  const kx = wrapK(APP.x + x0 + fullWidth * typeP);
  const pcx = wrapK(APP.x + pill.x + pill.w / 2);
  const reading = W * lerp(PRO.followFrom, PRO.followTo, typeP);
  const camX = lerp(lerp(lerp(put(pcx, W / 2), put(kx, reading), zoomP), put(pcx, W / 2), settleP), 0, outP);
  const camY = lerp(-(wrapKy(APP.y + pill.y + pill.h / 2) - H / 2) * scale, 0, outP);

  // El recorte: la ventana entera existe desde el primer cuadro, pero hasta el
  // envío sólo se ve el rectángulo de la píldora. Al abrirse, la UI se compone
  // DESDE el input hacia afuera, que es lo que había que contar.
  const cut = {
    t: lerp(pill.y, 0, openP),
    r: lerp(APP.w - pill.x - pill.w, 0, openP),
    b: lerp(APP.h - pill.y - pill.h, 0, openP),
    l: lerp(pill.x, 0, openP),
    rad: lerp(25, APP.r, openP),
  };

  const sendR = rects[SEND];
  const bx = APP.x + (sendR ? sendR.x + sendR.w / 2 : pill.x + pill.w - 28);
  const by = APP.y + (sendR ? sendR.y + sendR.h / 2 : pill.y + pill.h / 2);
  // El puntero va DENTRO de la cámara: con el acercamiento se ve grande, como
  // el de un tutorial, sin escalarlo a mano. La clave del gesto es la llave
  // del medio: llega CERCA del botón y recién después se posa, que es lo que
  // hace que frene en vez de aterrizar de golpe.
  const pointer: CursorKey[] = [
    { at: send - PRO.cursor, x: bx + 74, y: by + 330 },
    { at: send - 430, x: bx + 18, y: by + 76 },
    { at: send - 130, x: bx, y: by },
    { at: send, x: bx, y: by, click: true, down: true },
    { at: send + PRO.press, x: bx, y: by, up: true },
  ];

  const lastVisible = turns.reduce((acc, tp, i) => (lt >= tp.send + 60 ? i : acc), -1);
  const sh = shellLabels(v);

  return (
    <div className={`${s.scene} ${s.lavender}`}>
      {/* El degradado entra ANTES que el input —el vidrio necesita algo detrás
          que difuminar, si no se lee como un plástico— y se va antes del corte,
          que la 19 sigue en lavanda y el fondo pegaría un salto de color. */}
      <Gradient lt={lt} light style={{ opacity: seg(lt, 260, 1150) * (1 - seg(lt, plan.duration - 700, plan.duration - 140)) }} />

      {/* La frase de la bisagra, en el mismo lugar y tamaño que en la escena
          17: el corte no se nota y de acá se funde. */}
      {fade < 1 && (
        <div className={s.typeBlock} style={{ opacity: 1 - fade, transform: `scale(${(1 - fade * 0.04).toFixed(4)})`, filter: fade > 0 ? `blur(${(fade * 7).toFixed(1)}px)` : undefined }}>
          <h2 className={s.display}>{v.hinge.line}</h2>
        </div>
      )}

      <Camera scale={scale} x={camX} y={camY} origin={`${W / 2}px ${H / 2}px`}>
        {/* Sin `opacity` ni `filter` en este contenedor: los dos crean un
            "backdrop root" y el `backdrop-filter` del vidrio se quedaría sin
            nada que difuminar. La entrada la hace cada pieza por su cuenta. */}
        <div className={s.demoStage} style={portrait ? { transform: `scale(${K})`, transformOrigin: "360px 640px" } : undefined}>
          {/* La sombra va suelta: `clip-path` recorta también la del elemento,
              así que si viviera en la ventana la píldora flotaría sin apoyo. */}
          <div
            className={s.demoShadow}
            style={{
              opacity: pillIn * openP,
              left: APP.x + cut.l,
              top: APP.y + cut.t,
              width: APP.w - cut.l - cut.r,
              height: APP.h - cut.t - cut.b,
              borderRadius: cut.rad,
              boxShadow: `0 ${lerp(10, 30, openP).toFixed(1)}px ${lerp(34, 80, openP).toFixed(1)}px rgba(20, 21, 15, ${lerp(0.12, 0.18, openP).toFixed(3)})`,
            }}
          />
          <div
            ref={appRef}
            className={s.demoApp}
            style={{
              opacity: appIn,
              left: APP.x,
              top: APP.y,
              width: APP.w,
              height: APP.h,
              clipPath: `inset(${cut.t.toFixed(1)}px ${cut.r.toFixed(1)}px ${cut.b.toFixed(1)}px ${cut.l.toFixed(1)}px round ${cut.rad.toFixed(1)}px)`,
            }}
          >
            <PmsShell active="ia" labels={sh} width={APP.w} height={APP.h} round>
              <ChatShell className={s.chatPage}>
                <div className={s.viewport}>
                  {lt >= threadAt && (
                    <div ref={threadRef} className={s.thread} style={{ opacity: seg(lt, threadAt, threadAt + 320) }}>
                      {turns.map((tp, i) => {
                        if (lt < tp.send) return null;
                        const turn = v.chat.turns[i];
                        const steps = tp.steps
                          .map((sp, j) => ({ sp, j }))
                          .filter(({ sp }) => lt >= sp.at)
                          .map(({ sp, j }) => ({ label: turn.steps[j].label, tool: turn.steps[j].tool, running: lt < sp.done }));
                        const thinking = lt < tp.answerAt;
                        const isTourism = i === 1;
                        const synthAt = tp.blockAt + 820;
                        const answer = isTourism ? "" : lt >= tp.answerAt ? turn.answer.slice(0, Math.ceil((lt - tp.answerAt) / STREAM_MS)) : "";
                        const synth = lt >= synthAt ? turn.answer.slice(0, Math.ceil((lt - synthAt) / STREAM_MS)) : "";
                        let block: ReactNode = null;
                        if (lt >= tp.blockAt) {
                          if (i === 0) block = <ReservationList block rows={[chatBooking(v, "confirmed", v.status.confirmed)]} />;
                          if (i === 1)
                            block = (
                              <TourismCard
                                block
                                title={v.tourism.title}
                                updated={v.tourism.updated}
                                metrics={tourismMetrics(v, lt, tp.blockAt + 80, 140)}
                                reveal={v.tourism.metrics.filter((_, k) => lt >= tp.blockAt + 80 + k * 140).length}
                                alert={v.tourism.alert}
                                alertOn={lt >= tp.blockAt + 620}
                                synthesis={synth}
                                streaming={lt < synthAt + turn.answer.length * STREAM_MS}
                                more={v.tourism.more}
                              />
                            );
                          if (i === 2) block = <RecCard recs={recs(v, true).slice(0, 1)} labels={v.ui.revenue} />;
                        }
                        return (
                          <Fragment key={i}>
                            <UserBubble text={turn.ask} />
                            {lt >= tp.send + 60 && (
                              <AssistantTurn steps={steps} answer={answer} streaming={lt < tp.streamEnd} block={block} thinking={thinking} thinkingLabel={v.chat.thinking} waitHint={v.chat.wait} foot={i === lastVisible} />
                            )}
                          </Fragment>
                        );
                      })}
                    </div>
                  )}
                </div>
                <Composer text={typed} placeholder={v.chat.placeholder} caret={caretOn} pressed={pressed} sendLabel={v.chat.placeholder} ghost={v.chat.turns[0].ask} />
              </ChatShell>
            </PmsShell>
          </div>
          {/* EL INPUT SUELTO, en vidrio líquido. Es una pieza de escenografía:
              el compositor de verdad —el que se ve cuando la UI ya está
              compuesta— es el de la app y tiene que verse como en la app. Los
              dos son el mismo componente con el mismo ancho y en el mismo
              lugar, así que el cruce se lee como que el vidrio se solidifica.
              Va afuera de `appRef`: si no, la medición agarraría ESTE. */}
          {glass > 0.001 && (
            <div
              className={s.demoGlass}
              style={{
                left: APP.x + pill.x - GLASS.pad,
                top: APP.y + pill.y - GLASS.top,
                width: pill.w + GLASS.pad * 2,
                opacity: glass * pillIn,
                transform: `translate3d(0, ${((1 - pillIn) * 26).toFixed(1)}px, 0)`,
              }}
            >
              <ChatShell className={s.demoGlassShell}>
                <Composer text={typed} placeholder={v.chat.placeholder} caret={caretOn} pressed={pressed} sendLabel={v.chat.placeholder} />
              </ChatShell>
            </div>
          )}
          <Cursor lt={lt} keys={pointer} hideAt={send + 520} scale={1.7} clickMs={PRO.ripple} />
        </div>
      </Camera>
      <Mark tone="ink" />
    </div>
  );
}
