/**
 * Escribe los guiones de voz en off de los videos de producto:
 * `locuciones/<video>/<IDIOMA>.md` en la raíz del monorepo.
 *
 * El criterio es el del video de portada (VIDEO-GUION.md, 1b): donde la escena
 * es un TEXTO en pantalla, la voz dice exactamente ese texto —sale de los
 * mismos diccionarios que dibuja el video, así nunca se desfasan—; donde la
 * escena es una DEMOSTRACIÓN del producto, la voz es una narración comercial y
 * didáctica que explica qué se ve, sin repetir nombres, números ni pedidos de
 * la demo. `locuciones/portada/` es del usuario y no se toca.
 *
 * Formato: el de `locuciones/portada/ES.md`, texto pelado, una frase por
 * golpe, separadas por una línea en blanco.
 *
 * Uso (desde public-side/mkt-renderer): npx tsx scripts/gen-locuciones.ts
 */
import fs from "node:fs";
import path from "node:path";
import es from "../src/i18n/dict/es";
import en from "../src/i18n/dict/en";
import pt from "../src/i18n/dict/pt";
import fr from "../src/i18n/dict/fr";
import de from "../src/i18n/dict/de";
import { videoPage } from "../src/i18n/video-neutral-es";

const ROOT = path.resolve(__dirname, "../../..");
const DICTS = { es, en, pt, fr, de } as const;
type L = keyof typeof DICTS;

/** El texto como se dice: sin los asteriscos del remate ni markdown. */
const say = (t: string) => t.replace(/\*+/g, "").replace(/\s+/g, " ").trim();
/** Un titular termina en punto (o en su signo). */
const end = (t: string) => (/[.?!…»"”“]$/.test(t) ? t : `${t}.`);

/* ------------------------------------------------ narración por idioma ---- */
// Sólo las escenas de demostración. Tono comercial y didáctico, nada literal de la demo.

const N: Record<string, Record<L, string[]>> = {
  iaDemo: {
    es: ["Puedes adjuntarle un archivo, y lo lee y lo carga en el sistema.", "Pedirle un informe, y te responde con el dato exacto.", "Hablarle, en lugar de escribir.", "Y ver cómo está tu destino: eventos, feriados, clima e interés de los viajeros, en un solo panel."],
    en: ["You can attach a file, and it reads it and loads it into the system.", "Ask for a report, and it answers with the exact figure.", "Talk to it, instead of typing.", "And see how your destination is doing: events, holidays, weather and traveler interest, in one panel."],
    pt: ["Você pode anexar um arquivo, e ele lê e carrega no sistema.", "Pedir um relatório, e ele responde com o dado exato.", "Falar com ele, em vez de escrever.", "E ver como está o seu destino: eventos, feriados, clima e interesse dos viajantes, num só painel."],
    fr: ["Vous pouvez joindre un fichier : il le lit et le charge dans le système.", "Demander un rapport : il répond avec le chiffre exact.", "Lui parler, au lieu d’écrire.", "Et voir où en est votre destination : événements, jours fériés, météo et intérêt des voyageurs, dans un seul panneau."],
    de: ["Sie können eine Datei anhängen, und sie wird gelesen und ins System übernommen.", "Einen Bericht anfordern, und Sie bekommen die genaue Zahl.", "Sprechen, statt zu tippen.", "Und sehen, wie es um Ihr Reiseziel steht: Events, Feiertage, Wetter und das Interesse der Reisenden, in einem Panel."],
  },
  iaGoal: {
    es: ["Lee tu operación en segundos y te propone un plan concreto, paso a paso."],
    en: ["It reads your operation in seconds and proposes a concrete, step-by-step plan."],
    pt: ["Lê a sua operação em segundos e propõe um plano concreto, passo a passo."],
    fr: ["Il lit votre activité en quelques secondes et propose un plan concret, étape par étape."],
    de: ["Sie liest Ihren Betrieb in Sekunden und schlägt einen konkreten Plan vor, Schritt für Schritt."],
  },
  iaPerms: {
    es: ["Y antes de cualquier acción que no se pueda deshacer, te pide confirmación."],
    en: ["And before any action that can't be undone, it asks you to confirm."],
    pt: ["E antes de qualquer ação que não possa ser desfeita, pede a sua confirmação."],
    fr: ["Et avant toute action irréversible, il vous demande de confirmer."],
    de: ["Und vor jeder Aktion, die sich nicht rückgängig machen lässt, fragt sie nach."],
  },
  propsTour: {
    es: ["Un hotel se vende por categorías y un complejo de cabañas por unidad: cada propiedad se organiza a su manera.", "Cada una tiene su calendario de reservas, en su propia moneda.", "Pasas de una propiedad a otra con un clic…", "y un buscador único encuentra habitaciones, reservas y propiedades al instante."],
    en: ["A hotel sells by category and a cabin complex by unit: each property is organized its own way.", "Each one has its own booking calendar, in its own currency.", "Switch from one property to another in one click…", "and a single search finds rooms, bookings and properties instantly."],
    pt: ["Um hotel vende por categoria e um complexo de chalés por unidade: cada propriedade se organiza do seu jeito.", "Cada uma tem o seu calendário de reservas, na sua própria moeda.", "Você passa de uma propriedade para outra com um clique…", "e uma busca única encontra quartos, reservas e propriedades na hora."],
    fr: ["Un hôtel se vend par catégorie et un ensemble de chalets à l’unité : chaque établissement s’organise à sa façon.", "Chacun a son calendrier de réservations, dans sa propre devise.", "Vous passez d’un établissement à l’autre en un clic…", "et une recherche unique trouve chambres, réservations et établissements en un instant."],
    de: ["Ein Hotel verkauft nach Kategorien, eine Hüttenanlage nach Einheiten: Jede Unterkunft ist auf ihre Art organisiert.", "Jede hat ihren eigenen Buchungskalender, in ihrer eigenen Währung.", "Sie wechseln mit einem Klick von einer Unterkunft zur anderen…", "und eine einzige Suche findet Zimmer, Buchungen und Unterkünfte sofort."],
  },
  propsRoot: {
    es: ["Cambias un dato una vez, y se actualiza en todo el sistema."],
    en: ["Change a detail once, and it updates across the whole system."],
    pt: ["Você muda um dado uma vez, e ele se atualiza no sistema inteiro."],
    fr: ["Vous modifiez une information une fois, et elle se met à jour dans tout le système."],
    de: ["Sie ändern eine Angabe einmal, und sie ist im ganzen System aktuell."],
  },
  roomsTour: {
    es: ["El estado de cada habitación, de un vistazo: libre, ocupada, en limpieza o en mantenimiento.", "Cuando una habitación está lista, vuelve a estar a la venta al instante.", "En el mismo calendario conviven las habitaciones que se venden por categoría y las unidades con nombre propio.", "Y si dos canales intentan vender la misma noche, el sistema acepta solo una."],
    en: ["Every room's status at a glance: free, occupied, being cleaned or under maintenance.", "When a room is ready, it's back on sale instantly.", "Rooms sold by category and named units live side by side in the same calendar.", "And if two channels try to sell the same night, the system accepts only one."],
    pt: ["O estado de cada quarto, num relance: livre, ocupado, em limpeza ou em manutenção.", "Quando um quarto fica pronto, ele volta a ser vendido na hora.", "No mesmo calendário convivem os quartos vendidos por categoria e as unidades com nome próprio.", "E se dois canais tentam vender a mesma noite, o sistema aceita só uma."],
    fr: ["Le statut de chaque chambre d’un coup d’œil : libre, occupée, en ménage ou en maintenance.", "Quand une chambre est prête, elle est de nouveau en vente immédiatement.", "Les chambres vendues par catégorie et les unités nommées cohabitent dans le même calendrier.", "Et si deux canaux tentent de vendre la même nuit, le système n’en accepte qu’une."],
    de: ["Der Status jedes Zimmers auf einen Blick: frei, belegt, in Reinigung oder in Wartung.", "Ist ein Zimmer fertig, ist es sofort wieder buchbar.", "Zimmer nach Kategorie und benannte Einheiten stehen im selben Kalender nebeneinander.", "Und wollen zwei Kanäle dieselbe Nacht verkaufen, nimmt das System nur eine an."],
  },
  motorGuest: {
    es: ["Tu huésped ve el precio de cada día y cuántas habitaciones quedan, elige la suya con fotos y reserva sin intermediarios."],
    en: ["Your guest sees each day's price and how many rooms are left, picks theirs with photos and books with no middleman."],
    pt: ["O seu hóspede vê o preço de cada dia e quantos quartos restam, escolhe o dele com fotos e reserva sem intermediários."],
    fr: ["Votre client voit le prix de chaque jour et les chambres restantes, choisit la sienne avec photos et réserve sans intermédiaire."],
    de: ["Ihr Gast sieht den Preis jedes Tages und wie viele Zimmer frei sind, wählt seines mit Fotos und bucht ohne Vermittler."],
  },
  motorTour: {
    es: ["La reserva aparece al instante en tu panel del día, confirmada.", "Ocupa sus noches en el calendario, sin que nadie la cargue a mano.", "Y cada precio tiene su explicación: si aceptas una recomendación de Revenue, esa tarifa pasa a mandar."],
    en: ["The booking appears instantly on your day panel, confirmed.", "It takes its nights on the calendar, without anyone entering it by hand.", "And every price has an explanation: if you accept a Revenue recommendation, that rate takes over."],
    pt: ["A reserva aparece na hora no seu painel do dia, confirmada.", "Ocupa as noites no calendário, sem que ninguém precise digitá-la.", "E cada preço tem a sua explicação: se você aceita uma recomendação do Revenue, essa tarifa passa a valer."],
    fr: ["La réservation apparaît aussitôt dans votre tableau du jour, confirmée.", "Elle occupe ses nuits dans le calendrier, sans saisie manuelle.", "Et chaque prix a son explication : si vous acceptez une recommandation de Revenue, ce tarif s’applique."],
    de: ["Die Buchung erscheint sofort in Ihrem Tagespanel, bestätigt.", "Sie belegt ihre Nächte im Kalender, ohne dass jemand sie von Hand einträgt.", "Und jeder Preis hat seine Erklärung: Nehmen Sie eine Empfehlung aus Revenue an, gilt dieser Tarif."],
  },
  motorCurrency: {
    es: ["Tu huésped ve el precio en su moneda, y tú cobras en la tuya."],
    en: ["Your guest sees the price in their currency, and you charge in yours."],
    pt: ["O seu hóspede vê o preço na moeda dele, e você cobra na sua."],
    fr: ["Votre client voit le prix dans sa devise, et vous encaissez dans la vôtre."],
    de: ["Ihr Gast sieht den Preis in seiner Währung, und Sie kassieren in Ihrer."],
  },
  reportsTour: {
    es: ["Cómo está funcionando tu alojamiento hoy: reservas, ocupación e ingresos, de un vistazo.", "Lo que ya tienes reservado para las próximas semanas, noche por noche.", "Y si una respuesta no está en el informe, se la preguntas a Roombir IA."],
    en: ["How your property is doing today: bookings, occupancy and revenue, at a glance.", "What you already have booked for the coming weeks, night by night.", "And if an answer isn't in the report, you ask Roombir AI."],
    pt: ["Como a sua hospedagem está hoje: reservas, ocupação e receita, num relance.", "O que você já tem reservado para as próximas semanas, noite a noite.", "E se uma resposta não está no relatório, você pergunta ao Roombir IA."],
    fr: ["Comment tourne votre établissement aujourd’hui : réservations, occupation et revenus, d’un coup d’œil.", "Ce qui est déjà réservé pour les semaines à venir, nuit par nuit.", "Et si une réponse n’est pas dans le rapport, vous la demandez à Roombir IA."],
    de: ["Wie Ihre Unterkunft heute läuft: Buchungen, Auslastung und Umsatz, auf einen Blick.", "Was für die kommenden Wochen schon gebucht ist, Nacht für Nacht.", "Und steht eine Antwort nicht im Bericht, fragen Sie Roombir KI."],
  },
  revenueTour: {
    es: ["Cada recomendación viene con su motivo: la ocupación, los eventos cercanos, el ritmo de tus reservas.", "La aceptas, y se aplica al instante en tu motor de reservas.", "Y lo que mueve la demanda en tu destino, siempre con su fuente."],
    en: ["Every recommendation comes with its reason: occupancy, nearby events, the pace of your bookings.", "You accept it, and it's applied instantly to your booking engine.", "And what drives demand at your destination, always with its source."],
    pt: ["Cada recomendação vem com o seu motivo: a ocupação, os eventos próximos, o ritmo das suas reservas.", "Você aceita, e ela é aplicada na hora no seu motor de reservas.", "E o que move a demanda no seu destino, sempre com a fonte."],
    fr: ["Chaque recommandation arrive avec sa raison : l’occupation, les événements proches, le rythme de vos réservations.", "Vous l’acceptez, et elle s’applique aussitôt à votre moteur de réservation.", "Et ce qui fait bouger la demande dans votre destination, toujours avec sa source."],
    de: ["Jede Empfehlung kommt mit ihrer Begründung: Auslastung, Events in der Nähe, das Tempo Ihrer Buchungen.", "Sie nehmen sie an, und sie gilt sofort in Ihrer Buchungsmaschine.", "Und was die Nachfrage an Ihrem Reiseziel bewegt, immer mit Quelle."],
  },
  mktBrand: {
    es: ["Y se aplica en tu web, tu LinkHub, tu motor de reservas y los buscadores."],
    en: ["And it's applied to your website, your LinkHub, your booking engine and search engines."],
    pt: ["E é aplicada no seu site, no LinkHub, no motor de reservas e nos buscadores."],
    fr: ["Et elle s’applique à votre site, votre LinkHub, votre moteur de réservation et les moteurs de recherche."],
    de: ["Und sie gilt für Ihre Website, Ihren LinkHub, Ihre Buchungsmaschine und die Suchmaschinen."],
  },
  motorPromos: {
    es: ["Automáticas o con código, para premiar a quien te reserva directo, o para subir la tarifa en temporada alta.", "Y aparecen donde el huésped decide: la etiqueta, el precio anterior tachado y el nombre de la promo, en cada habitación."],
    en: ["Automatic or with a code, to reward those who book with you directly, or to raise the rate in high season.", "And they show up where the guest decides: the badge, the previous price struck through and the promo's name, on every room."],
    pt: ["Automáticas ou com código, para premiar quem reserva direto com você, ou para subir a tarifa na alta temporada.", "E aparecem onde o hóspede decide: a etiqueta, o preço anterior riscado e o nome da promo, em cada quarto."],
    fr: ["Automatiques ou avec code, pour récompenser ceux qui réservent en direct, ou pour augmenter le tarif en haute saison.", "Et elles s’affichent là où le client décide : le badge, l’ancien prix barré et le nom de la promo, sur chaque chambre."],
    de: ["Automatisch oder mit Code, um Direktbuchungen zu belohnen, oder um in der Hochsaison den Tarif anzuheben.", "Und sie erscheinen dort, wo der Gast entscheidet: das Etikett, der durchgestrichene alte Preis und der Name der Aktion, bei jedem Zimmer."],
  },
  mktLinkhub: {
    es: ["No es un link más en tu bio: tu motor de reservas va adentro, y reservan ahí mismo, sin saltar a otra página.", "Quien llega desde Instagram, TikTok o WhatsApp ve tus fechas libres y confirma en pocos toques."],
    en: ["It's not just another link in your bio: your booking engine is built in, so they book right there, without jumping to another page.", "Whoever arrives from Instagram, TikTok or WhatsApp sees your free dates and confirms in a few taps."],
    pt: ["Não é só mais um link na sua bio: o seu motor de reservas vem dentro, e reservam ali mesmo, sem pular para outra página.", "Quem chega pelo Instagram, TikTok ou WhatsApp vê as suas datas livres e confirma em poucos toques."],
    fr: ["Ce n’est pas un lien de plus dans votre bio : votre moteur de réservation est intégré, et l’on réserve sur place, sans passer par une autre page.", "Qui arrive d’Instagram, de TikTok ou de WhatsApp voit vos dates libres et confirme en quelques touches."],
    de: ["Das ist nicht einfach ein weiterer Link in Ihrer Bio: Ihre Buchungsmaschine ist eingebaut, gebucht wird direkt dort, ohne Umweg über eine andere Seite.", "Wer über Instagram, TikTok oder WhatsApp kommt, sieht Ihre freien Termine und bestätigt mit wenigen Tipps."],
  },
  mktEditor: {
    es: ["El editor tiene un asistente: le pegas la captura de una web que te guste y arma las secciones con tus textos y tus fotos.", "Señalas un bloque, pides el cambio, y toca esa pieza y deja el resto como estaba.", "Antes de publicar, un control de calidad revisa la página y la arregla con un botón."],
    en: ["The editor has an assistant: paste a screenshot of a website you like and it builds the sections with your text and photos.", "Point at a block, ask for the change, and it touches that piece and leaves the rest as it was.", "Before you publish, a quality check reviews the page and fixes it with one button."],
    pt: ["O editor tem um assistente: você cola a captura de um site de que gosta e ele monta as seções com os seus textos e fotos.", "Você aponta um bloco, pede a mudança, e ele mexe só nessa peça e deixa o resto como estava.", "Antes de publicar, um controle de qualidade revisa a página e a corrige com um botão."],
    fr: ["L’éditeur a un assistant : collez la capture d’un site qui vous plaît, il crée les sections avec vos textes et vos photos.", "Désignez un bloc, demandez le changement : il touche cette pièce et laisse le reste tel quel.", "Avant de publier, un contrôle qualité vérifie la page et la corrige d’un seul bouton."],
    de: ["Der Editor hat einen Assistenten: Fügen Sie den Screenshot einer Website ein, die Ihnen gefällt, und er baut die Bereiche mit Ihren Texten und Fotos.", "Zeigen Sie auf einen Block und verlangen Sie die Änderung: Er ändert genau dieses Stück und lässt den Rest, wie er war.", "Vor dem Veröffentlichen prüft eine Qualitätskontrolle die Seite und behebt alles mit einem Klick."],
  },
};

/** La frase de la escena de chat del video de portada: la del IA es la misma escena, así que dice lo mismo. */
function chatLine(lang: L): string {
  const blocks = fs.readFileSync(path.join(ROOT, "locuciones/portada", `${lang.toUpperCase()}.md`), "utf8").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  // Sin la puntuación final: el guion de portada es del usuario y a veces cierra distinto ("?.").
  const bare = (x: string) => say(x).replace(/[.?!…s]+$/, "");
  const hinge = bare(DICTS[lang].video.hinge.line);
  const i = blocks.findIndex((b) => bare(b) === hinge);
  if (i < 0 || !blocks[i + 1]) throw new Error(`No encontré la escena de chat en locuciones/portada/${lang.toUpperCase()}.md`);
  // El guion de portada en alemán tutea; los videos de producto van con "Sie".
  return lang === "de" ? blocks[i + 1].replace(/deiner/g, "Ihrer").replace(/deine/g, "Ihre").replace(/dein/g, "Ihr") : blocks[i + 1];
}

/* ------------------------------------------------------- los guiones ---- */

/**
 * Un bloque de la voz: en qué beat del video cae y en qué fracción de ese beat
 * arranca (0 = al empezar la escena). Los bloques de un mismo beat sin fracción
 * se reparten parejo.
 */
type Take = { beat: string; text: string; frac?: number };
const B = (beat: string, ...texts: string[]): Take[] => texts.map((text, i) => ({ beat, text, frac: i / texts.length }));
const at = (beat: string, frac: number, text: string): Take => ({ beat, text, frac });

function scripts(lang: L): Record<string, Take[]> {
  const d = DICTS[lang] as typeof es;
  const page = <K extends "ia" | "propiedades" | "habitaciones" | "motor" | "informes" | "revenue" | "marketing">(k: K) => videoPage(lang, k, d[k]);
  const ia = page("ia");
  const x = d.videoIa;
  const t = (s: string) => end(say(s));
  const n = (k: string) => N[k][lang];

  const vs = x.versus;
  const props = page("propiedades");
  const rooms = page("habitaciones");
  const motor = page("motor");
  const inf = page("informes");
  const rev = page("revenue");
  const mkt = page("marketing");
  const vt = d.videoTours;
  // La tarjeta final: el CTA de la página y, cuando aparece el logo (≈55 % del beat), el titular del hero.
  const endCard = (cta: string, tag: string) => [at("end", 0, t(cta)), at("end", 0.55, tag)];

  return {
    ia: [
      ...B("hinge", t(d.video.hinge.line)),
      ...B("chat", chatLine(lang)),
      ...B("meet", t(x.name)),
      ...B("asks", t(ia.ask.title)),
      ...B("demo", ...n("iaDemo")),
      ...B("dossier", t(ia.dossier.title), t(x.dossier.count)),
      ...B("versus", t(`${vs.pre} ${vs.struck}${vs.post}`), t(vs.us)),
      ...B("goal", t(ia.strategic.title), ...n("iaGoal")),
      ...B("perms", t(ia.perms.title), ...n("iaPerms")),
      ...B("talk", x.talk.lines.map(say).join(" ")),
      // La escena de cifras dura 4 s: la cifra con su palabra principal (la etiqueta completa no entra).
      ...B("stats", ia.stats.map((s) => t(`${s.value} ${s.label.split(/,| que | qui | en | in | im | dans | na | no | that | die | pro /)[0].trim()}`)).join(" ")),
      ...endCard(ia.cta.title, `${t(x.name)} ${t(ia.hero.title)}`),
    ],
    propiedades: [
      ...B("hero", t(props.hero.title)),
      ...B("tutorial", ...n("propsTour")),
      ...B("access", t(props.access.title), t(d.videoProps.access.caps)),
      ...B("root", t(props.root.title), ...n("propsRoot")),
      ...endCard(props.cta.title, t(props.hero.title)),
    ],
    habitaciones: [
      ...B("hero", t(rooms.hero.title)),
      ...B("tour", ...n("roomsTour")),
      ...B("states", t(rooms.states.title)),
      ...B("load", t(rooms.load.title)),
      ...endCard(rooms.cta.title, t(rooms.hero.title)),
    ],
    motor: [
      ...B("hero", t(motor.hero.title)),
      ...B("guest", t(motor.guest.title), ...n("motorGuest")),
      ...B("promos", t(vt.motor.promos.title), ...n("motorPromos")),
      ...B("tour", ...n("motorTour")),
      ...B("currency", t(vt.motor.currencyTitle), ...n("motorCurrency")),
      ...endCard(motor.cta.title, t(motor.hero.title)),
    ],
    informes: [
      ...B("hero", t(inf.hero.title)),
      ...B("tour", ...n("reportsTour")),
      ...B("compare", t(inf.period.title)),
      ...B("metrics", t(inf.metrics.title), t(inf.metrics.lead)),
      ...endCard(inf.cta.title, t(inf.hero.title)),
    ],
    revenue: [
      ...B("hero", t(rev.hero.title)),
      ...B("tour", ...n("revenueTour")),
      ...B("rules", t(rev.rules.title)),
      ...endCard(rev.cta.title, t(rev.hero.title)),
    ],
    marketing: [
      ...B("hero", t(mkt.hero.title)),
      ...B("editor", ...n("mktEditor")),
      ...B("connected", t(vt.marketing.linkhub.title), ...n("mktLinkhub")),
      ...B("brand", t(mkt.brand.title)),
      ...B("hub", t(vt.marketing.hub.title), t(vt.marketing.one)),
      ...endCard(mkt.cta.title, t(mkt.hero.title)),
    ],
  };
}

const all: Record<string, Record<string, { beat: string; frac: number; text: string }[]>> = {};
let count = 0;
for (const lang of Object.keys(DICTS) as L[]) {
  for (const [video, takes] of Object.entries(scripts(lang))) {
    const dir = path.join(ROOT, "locuciones", video);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${lang.toUpperCase()}.md`), takes.map((k) => k.text).join("\n\n") + "\n");
    (all[video] ??= {})[lang] = takes.map((k) => ({ beat: k.beat, frac: Math.round((k.frac ?? 0) * 1000) / 1000, text: k.text }));
    count++;
  }
}

// El volcado para el panel (subtítulos de la mesa de montaje), como hace gen-voiceover.cjs con la portada.
const PANEL = path.join(ROOT, "internal-laupser/web/src/modules/mkt/video/productVoiceover.data.ts");
fs.writeFileSync(
  PANEL,
  `/* ---------------------------------------------------------------------------
 * VOLCADO de locuciones/<video>/{ES,EN,PT,FR,DE}.md (raíz del monorepo) con el
 * beat en que cae cada bloque. Lo escribe public-side/mkt-renderer/scripts/
 * gen-locuciones.ts: no se edita a mano.
 * ------------------------------------------------------------------------- */

export const PRODUCT_VOICEOVER: Record<string, Record<string, { beat: string; frac: number; text: string }[]>> = ${JSON.stringify(all, null, 2)};
`,
);
console.log(count, "guiones +", path.relative(ROOT, PANEL));
