import type { Dictionary } from "./es";

/**
 * English. Same keys as `es.ts` — TypeScript will not let it be otherwise.
 *
 * The voice is the Spanish one carried over, not softened: direct, concrete,
 * and willing to say what the product does not do yet. Marketing English that
 * hedges everything would contradict the one thing this site is betting on.
 */
const en: Dictionary = {
  site: {
    title: "Bookfer · The operating system for your property",
    description:
      "PMS, booking engine, website, revenue management and an AI assistant that operates the system. All on a single database, for hotels, cabins, hostels and rentals.",
    tagline: "Hospitality operating system",
    og: {
      title: "A whole property, in a single system.",
      lead: "Reservations, rooms, your own booking engine, website, revenue management and an assistant that operates all of it with you.",
      chips: ["PMS", "Booking engine", "Websites", "Revenue", "LinkHub", "Bookfer AI"],
    },
  },

  nav: {
    product: "Platform",
    platform: "The platform",
    contact: "Contact",
    login: "Log in",
    signup: "Start free",
    home: "bookfer, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    more: "More",
    skip: "Skip to content",
    primary: "Primary",
    megaFoot: "Seven products on a single database.",
    megaLink: "See the whole platform",
    language: "Language",
    links: {
      solutions: "Solutions",
      pricing: "Pricing",
      about: "About",
    },
    groups: {
      operation: "Operations",
      growth: "Growth",
      newLayer: "The new layer",
    },
    products: {
      reservas: {
        title: "Bookings and rooms",
        desc: "Daily board, calendar, rates, availability and physical inventory.",
      },
      motor: {
        title: "Booking engine",
        desc: "The search and checkout your guest sees, with an informative calendar.",
      },
      revenue: {
        title: "Revenue · RMS",
        desc: "Pace, comp set, events and rate recommendations with a closed loop.",
      },
      sitios: {
        title: "Website and brand",
        desc: "Builder with your own domain, LinkHub, galleries and reviews.",
      },
      ia: {
        title: "Bookfer AI",
        desc: "An assistant with 272 tools that operates the system with you.",
      },
      agentes: {
        title: "Agentic property",
        desc: "llms.txt, availability.json and JSON-LD: bookable by an AI.",
      },
    },
  },

  footer: {
    claim:
      "The operating system for your property. Bookings, rooms, engine, website, revenue and an assistant that operates all of it, on a single database.",
    nav: "Footer",
    columns: {
      product: "Platform",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
    },
    company: {
      about: "Who we are",
      status: "Product status",
      pricing: "Pricing",
      contact: "Contact",
    },
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
    },
    solutions: {
      hoteles: "Hotels and aparthotels",
      cabanas: "Cabins and apartments",
      hostels: "Hostels",
      glamping: "Glamping and villas",
      grupos: "Groups and small chains",
    },
    madeIn: "Made in Argentina",
    agentNote: "this site has an llms.txt too",
    social: {
      instagram: "bookfer on Instagram",
      linkedin: "bookfer on LinkedIn",
      email: "Email us",
    },
  },

  common: {
    startFree: "Start free",
    seePlatform: "See the platform",
    seePricing: "See pricing",
    talkToUs: "Talk to us",
    bookDemo: "Book a demo",
    writeUs: "Write to us",
    seeMore: "See more",
    faqTitle: "Frequently asked questions",
    noCard: "No card",
    noInstall: "Nothing to install",
    guidedSignup: "Nine-step guided setup",
    inSpanish: "Five languages, made in Argentina",
  },

  ticker: [
    "Your own engine, 0% commission",
    "Tape chart with preview",
    "Revenue with a closed loop",
    "llms.txt · bookable by an AI",
    "272 assistant tools",
    "Multi-currency that actually works",
    "Guest emails without SMTP",
    "LinkHub with QR",
    "Set up in an afternoon",
  ],

  vignettes: {
    tape: {
      label: "Bookings · Calendar",
      tag: "14 nights",
      units: {
        r101: "101 Double",
        r102: "102 Double",
        r103: "103 Superior",
        cabin: "Alerce cabin",
        suite: "North Suite",
      },
      bars: {
        garcia: "García",
        perez: "Pérez",
        sosa: "Sosa · 4 pax",
        paint: "Painting",
        ruiz: "Ruiz",
        fresh: "New · unassigned",
        bianchi: "Bianchi",
        engine: "Engine",
      },
      legend: {
        confirmed: "Confirmed",
        pending: "Pending",
        block: "Block",
        live: "Just came in",
      },
    },
    calendar: {
      label: "Engine · Informative calendar",
      tag: "March",
      dows: ["mo", "tu", "we", "th", "fr", "sa", "su"],
      left3: "3 left",
      left2: "2 left",
      left1: "1 left",
      hint: "Minimum 2 nights to check in on the 14th",
    },
    decision: {
      label: "Revenue · Decision",
      tag: "Sat 21/03",
      subject: "Superior Double · suggested rate",
      keys: {
        occupancy: "occupancy",
        pace: "pace",
        event: "event",
        comp: "comp set",
        rule: "rule",
        cap: "cap",
      },
      values: {
        occupancy: "**78%** · rule threshold 70%",
        pace: "**+18%** vs. your own history (Sat · March · 15-30 days)",
        event: "Vendimia Festival · in 3 days · impact **72**",
        comp: "comp-set median **$101,400** · 4 of 5 loaded",
        rule: "**High occupancy + event** → +15% adjustment",
        cap: "maximum $120,000 · not applied",
      },
      accept: "Accept and push to the engine",
      reject: "Reject",
    },
    agent: {
      label: "Bookfer AI",
      tag: "front desk",
      ask: "Move García to 203 from Thursday and let them know by email",
      trace: [
        { tool: "find_booking", arg: "guest: García", ok: "1 result" },
        { tool: "move_booking", arg: "preview", ok: "no clashes" },
        { tool: "assign_unit", arg: "203", ok: "ok" },
        { tool: "send_guest_email", arg: "room change", ok: "sent" },
      ],
      answer:
        "Done. Moved to 203 from the 19th to the 22nd and the notice went out. Room 101 is free those three nights.",
      card: {
        guest: "Martina García",
        meta: ["203 · Superior Double", "19 → 22 Mar", "2 pax", "Confirmed"],
        see: "View booking",
        undo: "Undo",
      },
    },
    spaces: {
      label: "Workspace",
      tag: "Hotel del Parque",
      tabs: ["Front desk", "Housekeeping", "Marketing", "Admin"],
      other: "other workspace",
      menu: [
        "Daily board",
        "All bookings",
        "New booking",
        "Room status",
        "Rates and availability",
        "Revenue · RMS",
        "Builder and sites",
        "LinkHub",
      ],
    },
    surface: {
      host: "cabanasdelalerce.com",
      intro: "Six mountain cabins in Villa La Angostura, Neuquén.",
      unitsTitle: "## Units",
      units: [
        "- Alerce · 4 pax · 1 bedroom · from USD 78",
        "- Coihue · 6 pax · 2 bedrooms · from USD 112",
      ],
      bookTitle: "## Booking",
      book: [
        "Machine-readable availability: /availability.json",
        "What the engine accepts: /engine-capabilities.json",
        "Checkout: /book?in=&out=&pax=",
      ],
      policyTitle: "## Policies",
      policy: "Check-in 15:00 · check-out 10:00 · 2-night minimum on weekends",
    },
    rules: {
      label: "Revenue · Scenarios",
      tag: "4 rules",
      rows: [
        { cond: "**occupancy** ≥ 70% · window 0-14 days", action: "+8%" },
        { cond: "**event impact** ≥ 60 · window 0-7 days", action: "+15%" },
        { cond: "**pickup 7d** ≤ 2 · window 0-21 days", action: "−10%" },
        { cond: "**competitor 1 rate** ≤ base · window 0-30 days", action: "plan B" },
      ],
      note:
        "They run in order and the last match wins. The dry run shows what each one would do before you turn it on.",
    },
    comp: {
      label: "Revenue · Comp set",
      tag: "Sat 21/03",
      mine: "Hotel del Parque · you",
      sources: { own: "own", bookfer: "bookfer", manual: "manual", none: "no data" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Automatic discovery by proximity and similarity. External rates are entered by hand: we do not invent a number we do not have.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Book online", "WhatsApp", "Cabin photos", "How to get here", "Reviews · 4.8"],
    },
    signals: {
      revenue: "revenue · sat 21/03",
      applied: "pushed to the engine",
      agent: "bookfer ai",
      agentText: "Moved García to 203 and sent the notice by email.",
      agentFoot: "4 tools · with your permissions",
    },
  },

  plans: {
    cta: "Start now",
    ribbon: "Most chosen",
    free: "Free",
    freeFor: "for {n} days",
    perMonth: "per month",
    perYear: "per year",
    oneTime: "one-time",
    trial: "{n}-day free trial",
    upToProperty: "Up to {n} property",
    upToProperties: "Up to {n} properties",
    upToUser: "Up to {n} user",
    upToUsers: "Up to {n} users",
    noPropertyLimit: "No property limit",
    noUserLimit: "No user limit",
    homeTitle: "One system, one price",
    homeSubtitle:
      "Everything a property needs to operate and sell, without five vendors and without a commission per booking.",
    matrix: {
      caption: "What each bookfer plan includes",
      product: "Product",
      limits: "Limits",
      properties: "Properties",
      users: "Users",
      trialRow: "Trial",
      included: "Included",
      notIncluded: "Not included",
      freeDays: "{n} days free",
      days: "{n} days",
      note:
        "Prices and what each plan includes come from the same catalogue the system uses to bill. What you see here is what applies to your account.",
    },
  },

  leadForm: {
    name: "Name",
    namePlaceholder: "What should we call you",
    email: "Email",
    emailPlaceholder: "you@yourproperty.com",
    phone: "Phone or WhatsApp",
    phonePlaceholder: "+1 555 …",
    company: "Property",
    companyPlaceholder: "Name of the hotel, cabins or aparthotel",
    message: "Tell us how you take bookings today",
    messagePlaceholder:
      "How many units you have, whether you sell on OTAs, and what you would like to stop doing by hand.",
    optional: "optional",
    submit: "Send",
    sending: "Sending…",
    honeypot: "Do not fill in",
    errorGeneric: "We couldn't send it.",
    errorRate: "Too many submissions in a row.",
    errorTail: "If it keeps failing, write to us at hola@bookfer.com.",
    legal:
      "We use your details only to contact you about bookfer. You can ask us to delete them whenever you want. More in the [privacy policy](/legal/privacidad).",
    doneTitle: "Got it.",
    doneText:
      "We will write to you within a few hours. If you would rather not wait, you can start the setup right now: it is free and asks for no card.",
  },

  home: {
    hero: {
      l1a: "Your whole",
      l1b: "property",
      l2: "in one",
      pill: "Behind every\ngreat stay",
      l3a: "single",
      l3b: "system.",
    },
    swap: {
      eyebrow: "Why it exists",
      title: "Seven products you *buy separately* today.",
      lead:
        "A small or mid-sized property should not need five vendors and a consultant to operate digitally. That is bookfer's thesis, and it is what settles every product decision inside.",
      headOld: "What you buy separately today",
      headNew: "In bookfer",
      rows: [
        { old: "PMS for bookings and rooms", now: "Bookings + Rooms hubs" },
        { old: "Booking engine", now: "Public engine + Engine Studio" },
        { old: "Website builder", now: "Builder + renderer with your own domain" },
        { old: "Revenue management system", now: "Revenue hub" },
        { old: "Link-in-bio and digital presence", now: "LinkHub + Online Presence" },
        { old: "Guest portal", now: "StayPass" },
        { old: "Assistant / automations", now: "Bookfer AI" },
      ],
    },
    modules: {
      eyebrow: "The platform",
      title: "Six surfaces, *no bridges* between them.",
      lead:
        "These are not integrations syncing overnight: they are different views of the same data. Change a category's price and the engine shows it right away, with nothing to publish.",
      items: {
        reservas: {
          title: "Bookings",
          desc: "Daily board, tape chart calendar with drag and resize, manual entry, rates, availability and promotions.",
        },
        habitaciones: {
          title: "Rooms",
          desc: "The physical inventory: operational status of every unit, occupancy floor plan and category management.",
        },
        motor: {
          title: "Booking engine",
          desc: "Your search and your checkout, with a calendar that shows price and remaining units day by day.",
        },
        revenue: {
          title: "Revenue · RMS",
          desc: "Pace against your own history, comp set, demand events, pricing rules and explained recommendations.",
        },
        sitios: {
          title: "Website and LinkHub",
          desc: "Visual builder with your own domain and multiple languages, galleries, reviews, brand identity and link-in-bio.",
        },
        ia: {
          title: "Bookfer AI",
          desc: "An assistant with 272 tools that queries and operates the system, always with your permissions and never its own.",
        },
      },
    },
    spaces: {
      eyebrow: "What nobody else has",
      title: "Every desk sees *its* system, not yours.",
      lead:
        "Front desk, housekeeping, marketing and admin work on the same data, but each workspace has its own menu, its own home screen and its own permissions. Nobody learns to ignore half an application.",
      items: [
        "The menu builds itself: a marketing workspace **does not show** the Bookings hub.",
        "The home screen recomposes: front desk sees check-ins, housekeeping sees units being cleaned.",
        "Permissions are per app and per level: **operate**, **configure** or nothing.",
        "A new hire's onboarding is built from what that workspace has, and nothing else.",
      ],
    },
    sale: {
      eyebrow: "Selling model",
      title: "A hotel and a cabin *do not sell the same way*.",
      lead:
        "Almost every system picks a side: either it is for urban hotels or it is for vacation rentals. Here the mode is set per category, and there is an assistant to migrate from one to the other once you already have bookings inside.",
      poolTitle: "Category pool",
      poolText:
        "The category groups N interchangeable rooms. The guest buys “a Superior Double”, not room 203, and the engine picks the unit on confirmation — minimising gaps or balancing wear, whichever you prefer. You can also leave it unassigned so the front desk decides.",
      poolTag: "Urban hotel · hostel · aparthotel",
      unitTitle: "Single unit 1:1",
      unitText:
        "The category wraps exactly one unit and sells it by name. The guest books the Alerce cabin, with its photos, its description and its price, and there is no ambiguity about what they got.",
      unitTag: "Cabins · apartments · glamping · villas",
      unitNames: ["Alerce", "Coihue", "Ñire"],
    },
    engine: {
      eyebrow: "Booking engine",
      title: "A calendar that *sells*, not one that asks for dates.",
      lead:
        "The engine's date picker shows, day by day and according to what you enable, the price from, how many units are left and which days are closed. If you prefer, one switch turns it off and it becomes a plain date picker.",
      items: [
        "Price from and remaining units on every day of the month.",
        "Closed to arrival, closed to departure and minimum stay, flagged where people look.",
        "Seven configurable checkout blocks, with no code and no republishing the site.",
        "The guest confirms by email or you do: pending bookings expire on their own.",
      ],
      link: "See the whole engine",
    },
    agentic: {
      eyebrow: "The bet",
      title: "Your property, *bookable by an AI*.",
      lead:
        "People no longer only search on Google: they ask a model. A property an agent cannot read does not appear in that answer. The engine publishes its inventory in machine-made formats, and the GEO editor lets you declare what your property is, for whom, and what makes it trustworthy.",
      items: [
        "**llms.txt** — who you are, what you sell and how to book, in plain text.",
        "**availability.json** — real availability, machine readable.",
        "**engine-capabilities.json** — which operations your engine accepts.",
        "**JSON-LD** on the pages and a per-page GEO editor: intent, entities and trust signals.",
      ],
      link: "How the agentic layer works",
    },
    revenue: {
      eyebrow: "Revenue · RMS",
      title: "It tells you the price *and why*.",
      lead:
        "The RMS is not a black box that spits out a number. Every property and every date has a decision document: what data it saw, which rules matched, whether a cap applied and what came out, line by line.",
      items: [
        "Pace against **your own history**, split by weekday, month and lead time.",
        "If there is little history, the screen says so: it **does not sell you** confidence that is not there.",
        "Demand events ingested on their own — holidays, fairs, concerts — and curated by you.",
        "Accept a recommendation and the rate **goes into the engine**. The loop closes without copy-paste.",
      ],
      link: "See Revenue",
    },
    ia: {
      eyebrow: "Bookfer AI",
      title: "An assistant that *operates*, not one that suggests.",
      lead:
        "It is not a chat explaining where to click. It checks availability, creates bookings, moves a stay with a preview, adjusts rates, approves RMS events or publishes a site. And it does all of that with your permissions, not its own.",
      items: [
        "272 tools covering practically the whole surface of the product.",
        "You see the turn transcript: which tool it used and what came back.",
        "It answers with actionable cards, not just text.",
        "Three permission layers: filtered before the turn, context in the prompt and evaluation on every call.",
      ],
      link: "See Bookfer AI",
    },
    guarantees: {
      eyebrow: "Three things you will not have to think about",
      title: "The *structural* guarantees.",
      items: [
        {
          key: "unit + date",
          title: "A night cannot be sold twice",
          text: "Every night of every room is a unique lock in the database, not a validation two people booking at once can slip past. Maintenance blocks use the same lock, so they take real inventory out and disappear from the engine.",
        },
        {
          key: "base · charge · display",
          title: "The amount charged does not move on you later",
          text: "Prices live in a base currency, you charge in another, and the guest can look in a third. The conversion stays live until check-in and freezes there. For Argentine pesos you pick which rate to use: blue, MEP, CCL or official.",
        },
        {
          key: "reservations@bookfer.com",
          title: "You do not configure a mail server",
          text: "Every guest email — confirmation, token, change notice — leaves from bookfer's domain with your inbox as reply-to. It is one of the classic frictions of setting up a PMS and it was removed on purpose.",
        },
      ],
    },
    stats: {
      eyebrow: "The real size",
      title: "Not promises: *it is already built*.",
      lead:
        "bookfer is in a market pilot, so we are not going to show you an inflated hotel counter yet. What we can show is what is inside the product today.",
      items: [
        { value: "23", label: "apps you can switch on per workspace" },
        { value: "272", label: "tools the assistant handles" },
        { value: "37", label: "guided tours over the real screen" },
        { value: "10", label: "currencies, with blue, MEP, CCL or official for ARS" },
        { value: "5", label: "platform languages" },
        { value: "1", label: "single database for the whole system" },
      ],
    },
    marketing: {
      eyebrow: "Marketing",
      title: "Your site, your brand and your link, *served by the same system*.",
      lead:
        "The visual builder assembles the site with components that connect themselves to your data: the embedded engine, room cards, galleries, promotions and reviews. And LinkHub is the page that goes in your Instagram bio, with its QR and its analytics.",
      items: [
        "Your own domain and multiple languages, each with its own URL, cover and social preview.",
        "A single brand identity — logo, palette extracted from the logo, tone, narrative — that feeds the site, the engine and LinkHub.",
        "Ten LinkHub block types, with date scheduling and visit and click analytics.",
        "Reviews importable by CSV, with hotel replies and their reflection on the site.",
      ],
      link: "See website and brand",
    },
    onboarding: {
      eyebrow: "Guided setup",
      title: "You set it up *on your own*, in an afternoon.",
      lead:
        "Nine steps in three stages, with progress saved on the server: you can drop it halfway and pick it up on another device. A card on your desktop takes you back to where you were.",
      steps: [
        {
          num: "Stage 1 · steps 0–4",
          title: "Configuration",
          text: "Your company, your property with an address on the map, time zone and currency, your brand identity — the palette is extracted from your logo — and how you operate. That last step is what produces the workspaces and the initial apps.",
        },
        {
          num: "Stage 2 · steps 5–7",
          title: "Loading data",
          text: "Room types and units, with bulk creation so you do not enter the same thing twenty times. Then the first promotions and a pass over the engine. When the stage closes, availability initialises itself.",
        },
        {
          num: "Stage 3 · step 8",
          title: "Tours",
          text: "Every app you were given has a guided tour drawn over the real screen, highlighting the element it is talking about. From then on, every new person on the team gets onboarding for their workspace.",
        },
      ],
    },
    honest: {
      eyebrow: "Product status",
      title: "What we *do not do yet*.",
      lead:
        "We are in a market pilot and we would rather you knew before starting than in week two. These are the four things a large competitor has and bookfer does not, today.",
      link: "See the full status, area by area",
      states: { none: "does not exist", partial: "partial" },
      items: [
        {
          tag: "Channel manager",
          state: "none",
          text: "There is no inventory or rate sync with OTAs. There is an event log recording every booking change for when it gets connected, but today it is a file, not an integration.",
        },
        {
          tag: "Payment gateway",
          state: "none",
          text: "Nothing is charged online. Payment happens at check-in, in person, with the currency conversion frozen at that moment.",
        },
        {
          tag: "Competitor rates",
          state: "partial",
          text: "The comp set discovers itself by proximity and similarity, but external competitors' rates are entered by hand. The connection to automatic providers is prepared and not connected.",
        },
        {
          tag: "Online presence",
          state: "partial",
          text: "Google Business and OTA listings are edited and scored inside the system, but they are not published by API: today they are copied to the destination by hand. Social connections are declared.",
        },
      ],
    },
    faq: [
      {
        q: "Does it work for cabins and apartments, or only hotels?",
        a: "Both, and not with the same trick. A category can sell as a **pool** — ten interchangeable doubles, the guest buys “a double” — or as a **single unit 1:1**, where the category wraps one unit with its own name. You choose per category, not per system, so a complex with six cabins and two standard rooms coexists without forcing anything.",
      },
      {
        q: "Do I need a channel manager to use bookfer?",
        a: "Not to operate, but let us say it plainly: **bookfer does not have a channel manager yet**. If you sell on Booking or Expedia, that availability is reconciled by hand today. The system is built so that direct bookings — your site, your LinkHub, your engine — stop getting lost in a chat, which is where most of the revenue you are not controlling comes from.",
      },
      {
        q: "How do I collect payment?",
        a: "At check-in, in person. **There is no integrated payment gateway yet.** What there is, is real multi-currency: you store prices in a base currency, charge in another, and the conversion stays live until check-in and freezes there so the amount charged does not change afterwards.",
      },
      {
        q: "Do I have to install or configure anything?",
        a: "You get in through the browser. Setup is nine guided steps saved on the server — you can drop it halfway and continue from your phone — and there is no mail server to configure: **every guest email leaves from bookfer's domain** with your inbox as reply-to.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes. Every published site takes its own hostname, and each language variant can have its own. LinkHub also has its own public address, with a printable QR code.",
      },
      {
        q: "Can the AI do anything at all inside my system?",
        a: "No, and that is on purpose. The assistant operates **impersonating your real identity** with a short-lived permission reissued on every call. Before the turn, the tools your user cannot use are taken off the table, and every operation is re-evaluated against the service policy. If access is revoked mid-conversation, the next action fails and the assistant explains why.",
      },
    ],
    cta: {
      title: "Get it running *this week*.",
      lead:
        "Setup is guided and asks for no card. If you would rather have us alongside for loading rooms — the step that costs the most — we do it on a short call.",
      steps: [
        "You sign up and load the property.",
        "We load the rooms together if you want.",
        "You publish your site and your booking link.",
      ],
    },
  },

  producto: {
    meta: {
      title: "The platform",
      description:
        "Seven products on a single database: bookings, rooms, engine, revenue, websites, guest portal and an AI assistant. What each one does and how they connect.",
    },
    hero: {
      eyebrow: "The platform",
      title: "Seven products, *a single database*.",
      lead:
        "All the staff comes in through the same desktop. Rooms, bookings and revenue show up embedded inside it, inheriting context and theme, so for whoever is working it is one application — and for the data, one place.",
    },
    desk: {
      eyebrow: "The desktop",
      title: "One door, *and inside, to each their own*.",
      lead:
        "The PMS is the chrome: navigation, the company, property and workspace picker, global search and the notification centre. The rooms, bookings and revenue apps live inside.",
      items: [
        "**Global search** with Ctrl/Cmd + K: bookings by code or guest, properties, categories, units and system views. It is algorithmic, not generative — it finds or it does not.",
        "**Adaptive dashboard**: 30 widgets compete for three slots depending on the active workspace, and only the ones being painted request data.",
        "**Real-time notifications** that link to the right detail; if the booking belongs to another property, the system switches property before opening it.",
        "**Light, dark or system theme**, with an accent colour, propagated to the embedded apps.",
      ],
    },
    catalog: {
      eyebrow: "The catalogue",
      title: "23 apps that *switch on and off*.",
      lead:
        "An app is enabled per workspace and with a level: operate (day to day), configure (also changes settings) or nothing. The admin workspace sees the whole catalogue, including apps added later.",
      hubs: [
        {
          hub: "Bookings",
          apps: [
            "Daily board",
            "All bookings",
            "Manual entry",
            "Rates",
            "Availability",
            "Promotions",
            "Engine settings",
          ],
        },
        {
          hub: "Rooms",
          apps: ["Room status", "Occupancy floor plan", "Category management"],
        },
        {
          hub: "Marketing",
          apps: ["Builder", "Sites", "Galleries", "Reviews", "Brand", "LinkHub", "Online presence"],
        },
        { hub: "Analytics", apps: ["Reports"] },
        { hub: "Revenue", apps: ["Revenue · RMS"] },
        { hub: "Assets", apps: ["File library"] },
        { hub: "Admin", apps: ["Properties"] },
      ],
    },
    modules: {
      eyebrow: "Module by module",
      title: "What *each part* does.",
      lead:
        "Each one has its page with the full detail. All of them read and write the same data: there is no overnight sync and nothing to import.",
      items: [
        {
          title: "Bookings and rooms",
          desc: "Daily board, list with a quick panel, tape chart with drag and resize, manual entry, rates with a price chain, availability with restrictions and promotions. On the other side, the physical inventory with six operational states and a transition matrix.",
        },
        {
          title: "Booking engine",
          desc: "Search, results, detail, services, guest data and confirmation. With an informative calendar, seven visual configuration blocks and two confirmation modes. Embed it in your site or use it as its own page.",
        },
        {
          title: "Revenue · RMS",
          desc: "Dual-axis analytics — when it was booked and when it is slept — pace against your own history, comp set with automatic discovery, demand events, a rules engine with a dry run, and recommendations that push the rate into the engine.",
        },
        {
          title: "Websites and brand",
          desc: "Visual builder with a component library, domain components wired to data, multiple languages, your own domain, popups, a WhatsApp button and an SEO and GEO editor. Plus galleries, reviews, brand identity and LinkHub.",
        },
        {
          title: "StayPass",
          desc: "The guest portal: their own account, my bookings, detail, cancellation, a profile with document and nationality, and confirmation by email token. One guest accumulates the properties they registered with; each hotel sees only its own base.",
        },
        {
          title: "Reports",
          desc: "Occupancy and volume with projection, ADR and RevPAR, lead time, average stay, cancellations and last minute, production by channel, and two operational-hygiene sections that flag what is badly managed, not only what happened.",
        },
      ],
    },
    ia: {
      eyebrow: "The layer that joins them",
      title: "The assistant sees *the whole system*, not one module.",
      lead:
        "Because the data is one, the agent can do in a sentence what in another stack is three tabs and two exports: look at pace, adjust a rate and publish the promo on the site.",
      items: [
        "272 tools spread across bookings, rates, availability, rooms, properties, revenue, marketing, files, company and system.",
        "Rich answer blocks: booking and revenue cards with buttons that execute, subject to the same permission check.",
        "Session history filtered by the active workspace.",
      ],
      link: "See Bookfer AI",
    },
    stats: [
      { value: "23", label: "apps you can switch on" },
      { value: "30", label: "adaptive dashboard widgets" },
      { value: "37", label: "guided tours" },
      { value: "272", label: "agent tools" },
    ],
    ask: "Looking for something specific?",
    askLink: "Ask us",
    cta: {
      title: "Come *look inside*.",
      lead:
        "Setup is free and guided. If you would rather we showed you first, book a demo and we will walk it through with your data.",
      steps: [
        "You create the company and the property.",
        "You load rooms and units.",
        "The engine and the site are ready to publish.",
      ],
    },
  },

  reservas: {
    meta: {
      title: "Bookings and rooms",
      description:
        "The operational core: daily board, tape chart calendar with drag and resize, manual entry, rates, availability, promotions and the physical inventory with its six states.",
    },
    hero: {
      eyebrow: "Bookings and rooms",
      title: "The day to day, *in a single grid*.",
      lead:
        "Eight views for commercial operations and three for the physical inventory. All on the same data, so moving a booking on the calendar changes the room's status, frees the night in the engine and shows up in the report.",
    },
    calendar: {
      eyebrow: "Calendar",
      title: "You drag the booking and *see what will happen* before you drop it.",
      lead:
        "The grid is room by day, grouped by category. You move a booking between rooms or dates by dragging it, and before applying the change the system shows the preview: whether there is a clash and what happens to the price.",
      items: [
        "Block bars for maintenance or internal use, creatable from the calendar itself and with the same lock as a booking.",
        "A detail popover on click, without leaving the view.",
        "Toolbar with month or range navigation, today, search by guest or code, filter by category and by status.",
        "Statistics by category and by day above the grid.",
      ],
    },
    views: {
      eyebrow: "The eight views",
      title: "Every moment of the shift, *its own screen*.",
      items: [
        {
          title: "Daily board",
          desc: "Check-ins and check-outs for the day, with two days visible and navigation. It is the screen the front desk opens the shift with, with actionable cards.",
        },
        {
          title: "All bookings",
          desc: "A list with filters and a side panel that opens without leaving the list: summary, activity and notes. From there you assign a unit, change status and edit internal notes.",
        },
        {
          title: "Calendar",
          desc: "The tape chart: room by day, drag and resize with preview, blocks, filters and statistics.",
        },
        {
          title: "New booking",
          desc: "Manual or walk-in entry with guest search, category, dates, occupancy by age, source channel, promotions and notes.",
        },
        {
          title: "Rates",
          desc: "Base price per category plus rate plans with validity, price per night, currency, minimum stay and activation.",
        },
        {
          title: "Availability",
          desc: "A grid with a traffic light — free, partial, full, closed — and per-day restrictions: closed, closed to arrival, closed to departure, minimum and maximum stay.",
        },
        {
          title: "Promotions",
          desc: "A three-step wizard, automatic or with a code, by percentage, fixed amount or fixed price per night, with restrictions and how it looks on the public site.",
        },
        {
          title: "Engine settings",
          desc: "Currency, confirmation, stay rules, informative calendar, agentic layer and times. Plus the booking model: selling mode and assignment strategy.",
        },
      ],
    },
    chain: {
      eyebrow: "Price chain",
      title: "Four steps, *always in the same order*.",
      lead:
        "When the engine has to say what a night costs, it resolves this chain. Knowing which rung a price is on is the difference between trusting the system and auditing it by hand every morning.",
      stepLabel: "step {n}",
      steps: [
        {
          title: "RMS override",
          desc: "If there is an accepted revenue recommendation for that date, it wins.",
        },
        {
          title: "Rate plan",
          desc: "The plan in force for that category and that date, with its currency and its minimum nights.",
        },
        {
          title: "Base price",
          desc: "The category's own. It is what the engine charges while you have not loaded rates.",
        },
        {
          title: "Promotions",
          desc: "They apply on top of whatever the three previous steps produced.",
        },
      ],
    },
    rooms: {
      eyebrow: "Rooms",
      title: "The physical inventory, *with states that do not lie*.",
      lead:
        "Six operational states — available, occupied, cleaning, maintenance, blocked and pending departure — and a matrix defining which transition is valid. From 'occupied' you can only go to 'pending departure': the board does not accept impossible states.",
      items: [
        "**Room status**: a live board with filters by floor and category, and a detail panel with the full change history — who, when and with what note.",
        "**Occupancy floor plan**: a spatial view by floor with date navigation, to read the house at a glance.",
        "**Management**: categories with capacity, base price, photos, amenities and an audited selling mode; units with a unique code, floor, their own capacity and **bulk creation with preview**.",
      ],
    },
    detail: {
      eyebrow: "Booking detail",
      title: "Everything that happened to that booking, *on one record*.",
      items: [
        {
          title: "State timeline",
          desc: "Pending, confirmed, check-in, check-out, plus cancelled and no-show. With the actions available depending on where it is.",
        },
        {
          title: "Contracted services",
          desc: "Spa, breakfast, late check-out, with quantity, date and status. Price and title freeze on contracting: an old booking still shows what was charged back then.",
        },
        {
          title: "Amounts in two currencies",
          desc: "The amount in base currency and in charging currency, live until check-in and frozen from then on.",
        },
        {
          title: "Fine-grained source channel",
          desc: "Direct, phone or OTA, with a specific identifier — booking.com, airbnb, direct-web, phone-front-desk — so the channel report is worth something.",
        },
        {
          title: "Notes and special requests",
          desc: "Internal team notes kept apart from guest requests, so nobody mixes the two.",
        },
        {
          title: "Audit log",
          desc: "Every relevant change is recorded, including any manual charge adjustment. It is what you look at when the amount does not add up.",
        },
      ],
    },
    faq: [
      {
        q: "What happens if two people book the same night at the same time?",
        a: "One of the two fails. Every night of every room is a **unique lock in the database** — the key is the unit plus the date — so the second write does not get in. It is not a validation in code that concurrency can dodge: the database itself prevents it.",
      },
      {
        q: "Can I enter bookings that came in by phone or WhatsApp?",
        a: "Yes, and you should. Manual entry has guest search by email, category and date selection, occupancy split into adults, children and infants — infants count for neither capacity nor price — promotions and **source channel**. That last field is what later tells you how much of your business still comes in through chat.",
      },
      {
        q: "How is it decided which room each booking gets?",
        a: "It depends on two axes. If the category is a **single unit**, there is only one option. If it is a pool, the property chooses between **manual** assignment — the booking stays “unassigned” and the front desk decides — or **automatic**, where the engine scores and picks, with optional preferences to minimise gaps or balance wear. Each booking freezes the mode it was born with, so changing the setting later does not rewrite history.",
      },
    ],
    cta: {
      title: "Start with the *calendar*.",
      lead:
        "You load the rooms once and you already have the grid, the engine and availability initialised. The rest can come whenever you want.",
      steps: [
        "You load categories and units.",
        "Availability initialises itself.",
        "The calendar and the engine are live.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Booking engine",
      description:
        "The search and checkout your guest sees: a calendar with price and remaining units, seven configurable blocks with no code, two confirmation modes and emails without configuring SMTP.",
    },
    hero: {
      eyebrow: "Booking engine",
      title: "The link that *replaces the conversation*.",
      lead:
        "Search, results, detail, services, guest data and confirmation. It is your engine, with your brand, with no commission per booking and with a calendar that tells the guest what they need in order to decide.",
    },
    calendar: {
      eyebrow: "Informative calendar",
      title: "A date picker that *answers questions*.",
      lead:
        "The usual calendar asks for two dates and that is it. The engine's shows, day by day and according to what you enable, everything the person was about to ask over WhatsApp before booking.",
      items: [
        "**Price from** on every day, resolved by the real price chain: RMS override, rate plan, base price and promotions.",
        "**Remaining units**, which is the most honest scarcity signal there is: it is your inventory, not an invented counter.",
        "**Flags** for closed days, closed to arrival and closed to departure, marked where people look.",
        "**Minimum-stay hint** when picking the arrival, so nobody reaches the end of checkout and finds out there.",
        "A master switch turns the whole thing off and it becomes a plain date picker. It is yours, not ours.",
      ],
    },
    studio: {
      eyebrow: "Engine Studio",
      title: "Seven blocks, *no code*.",
      lead:
        "Every screen of the flow has its configuration block, with its texts, its labels and its styles. Changes apply to the engine without republishing the site.",
      items: [
        { title: "Search", desc: "The entry search: fields, labels and what gets asked first." },
        {
          title: "Calendar",
          desc: "The master toggle and what the guest sees per day: prices, units, flags and hints.",
        },
        {
          title: "Guests",
          desc: "How adults, children and infants are asked for. Infants count for neither capacity nor price.",
        },
        {
          title: "Listing",
          desc: "How available categories are presented and what information goes with each one.",
        },
        {
          title: "Detail",
          desc: "The category or unit record, with photos, amenities and description.",
        },
        {
          title: "Services",
          desc: "The extras offered before paying, with their time window and minimum notice.",
        },
        { title: "Checkout", desc: "The final form: which data is asked for and with what legal text." },
        {
          title: "Success screen",
          desc: "What the guest sees at the end, which is where it is decided whether they write to you again.",
        },
      ],
    },
    agentic: {
      eyebrow: "Agentic layer",
      title: "And *a machine can read it* too.",
      lead:
        "With the agentic layer on, the engine publishes its inventory in formats meant for language models, not just browsers. It is an explicit product bet on generative search.",
      items: [
        "`llms.txt` — the property description in plain text.",
        "`availability.json` — machine-readable availability.",
        "`engine-capabilities.json` — which operations the engine accepts.",
        "Structured JSON-LD on the site's pages.",
      ],
      link: "See the whole agentic layer",
    },
    after: {
      eyebrow: "After checkout",
      title: "The booking comes in *and the system carries on*.",
      items: [
        {
          title: "The unit gets assigned",
          desc: "According to the property's model: the only possible unit if it is 1:1, the one the engine picks if it is an automatic pool, or none if you prefer the front desk to decide.",
        },
        {
          title: "The email goes out",
          desc: "From bookfer's domain, with your inbox as reply-to. No SMTP to configure, no domain to verify, no extra mail provider on the list.",
        },
        {
          title: "The search is recorded",
          desc: "Including searches **with no availability**, which are the most valuable: they feed the RMS demand index and the conversion funnel.",
        },
      ],
      stats: [
        { value: "0%", label: "commission on engine bookings" },
        { value: "10", label: "currencies, with blue, MEP, CCL or official for ARS" },
        { value: "2", label: "confirmation modes, with automatic expiry" },
      ],
    },
    distribute: {
      eyebrow: "Where the link goes",
      title: "On your site, in your bio and *in the chat*.",
      lead:
        "The engine is a surface, not a page. It goes embedded in the site you build with the builder, as its own page, or as the main button of your LinkHub: the link-in-bio page you put on Instagram, with its downloadable QR.",
      items: [
        "A builder component that wires itself to your inventory.",
        "Its own page with your property's URL.",
        "The LinkHub 'book' block, with visit and click analytics.",
        "A floating WhatsApp button on the site, with a prefilled message, for whoever would rather write anyway.",
      ],
    },
    faq: [
      {
        q: "Does the engine go inside my site or is it a separate page?",
        a: "Both. It embeds as a component inside the site you build with the builder, and it also exists as its own page at `/your-property`. If you do not have a site yet, the engine link is already something you can send over WhatsApp or put in your Instagram bio.",
      },
      {
        q: "Can I change the checkout texts and colours?",
        a: "Yes, from the Engine Studio and **without touching code or republishing the site**. There are seven configurable blocks: search, calendar, guests, listing, detail, services, checkout and success screen, each with its texts, labels and styles.",
      },
      {
        q: "Who confirms the booking?",
        a: "You choose. In one mode the booking is born pending and **the guest confirms** it with a tokenised link that arrives by email. In the other, it stays pending until **the front desk accepts** it. In both, pending bookings expire on their own after the time you configure, so you are not left with nights blocked by someone who never came back.",
      },
      {
        q: "Do I have to configure a mail server?",
        a: "No. Every guest email leaves from bookfer's domain, with the property's inbox as **reply-to**. It is a deliberate decision: configuring SMTP per hotel is one of the classic frictions of setting up a PMS and here it simply does not exist.",
      },
    ],
    cta: {
      title: "Put your booking link *in the bio*.",
      lead:
        "You load the rooms and the engine is live with availability initialised. The site and LinkHub come later, whenever you want.",
      steps: [
        "You load categories, units and prices.",
        "You configure the engine in the Studio.",
        "You share the link and stop losing enquiries in the chat.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue · RMS",
      description:
        "Revenue management included: pace against your own history, comp set with automatic discovery, demand events, a rules engine with a dry run and recommendations that push the rate into the engine.",
    },
    hero: {
      eyebrow: "Revenue · RMS",
      title: "A suggested price *you can audit*.",
      lead:
        "Eight revenue-management tabs embedded in the desktop: dual-axis analytics, pace against your own history, comp set, demand events, a rules engine with a dry run, and a decision document per date that explains every number.",
    },
    decision: {
      eyebrow: "Decisions",
      title: "The answer to *“why are you suggesting this?”*",
      lead:
        "There is a document per property and per date with the full trace: what inputs the engine saw, what the base rate was, what it suggested, which rules matched, whether a cap applied, and a readable log line by line.",
      items: [
        "Occupancy, demand index, availability, competitor rates, pickup and events: everything that went into the sum, with its value.",
        "Which rule matched and in what order, because the last one wins.",
        "Whether the minimum or maximum cap applied, and what it was.",
        "The recommendation lifecycle: suggested, accepted or rejected, applied, by whom and when.",
      ],
    },
    rules: {
      eyebrow: "Scenarios",
      title: "Thirteen variables, *and a dry run*.",
      lead:
        "Each rule evaluates a variable against a reference, inside a lead-time window, and applies an action. They run in order and the last match wins. Before turning any of them on, the dry run shows you what it would have done.",
      items: [
        "**Variables**: occupancy, demand index, availability, competitor 1 to 5 rate, pickup 7d, pickup 30d, event impact, days to the nearest event and pace index.",
        "**Operators**: greater, greater or equal, equal, less or equal, less.",
        "**Actions**: percentage adjustment over the base, or a rate plan change.",
        "**Caps** for minimum and maximum rate, applied after everything else.",
      ],
    },
    comp: {
      eyebrow: "Competitors",
      title: "A comp set that is *mixed and honest*.",
      lead:
        "Competitors that also use bookfer contribute a real rate. External ones are discovered on their own by proximity and similarity score, and you load their rate — as a fixed reference or by date, which takes priority.",
      items: [
        "Similarity score by type, category, size, tier and area.",
        "Your own hotel profile, synced from the PMS unless you override it by hand.",
        "A grid of competitor rates by date.",
        "Ready for Lighthouse, RateGain, PriceLabs and KeyData; not connected today.",
      ],
    },
    rest: {
      eyebrow: "The other tabs",
      title: "Everything there is *besides the price*.",
      items: [
        {
          title: "Dual-axis analytics",
          desc: "Creation axis — when it was booked — with direct and OTA revenue, cancellations, lead time, searches and pickup. Stay axis — when it is slept — with occupancy, ADR, RevPAR and revenue. Many systems mix the two and confuse people.",
        },
        {
          title: "Pace",
          desc: "Sales pace against your own property's historical behaviour, split by weekday, month and lead-time bucket. With a curve, pickup and fast- or slow-selling alerts with configurable thresholds.",
        },
        {
          title: "Events",
          desc: "Holidays, fairs, concerts and sports, ingested automatically and curated by you: suggested, approved or discarded. An approved event is not overwritten by re-ingestion. With a relevance score and expected impact.",
        },
        {
          title: "Recommendations",
          desc: "Current rate, suggested rate, delta and reason. Full lifecycle: suggested, accepted or rejected, applied, expired or replaced, with owner and date.",
        },
        {
          title: "Demand signals",
          desc: "Besides bookings, the demand index takes the engine's searches, including the ones that found no availability — the most underrated signal a small property has.",
        },
        {
          title: "Settings",
          desc: "Comp set, location synced from the PMS with a manual override, hotel profile, pace thresholds, event radius and horizon, and rate caps.",
        },
      ],
    },
    faq: [
      {
        q: "I have little history. Is the RMS still useful?",
        a: "It is, but it will tell you. The pace benchmark is built from **your own history**, grouped by weekday, month and lead-time bucket, and the interface **exposes the sample size**. If a cell was computed from three bookings, you will see it. We prefer that to showing you a confident curve built on nothing.",
      },
      {
        q: "Where do competitor rates come from?",
        a: "Two places. If the competitor also uses bookfer, the rate is real. If it is external, the system **discovers it on its own** by geolocation and similarity score — type, category, size, tier, area — but **you load the rate**, as a fixed reference or by date. The connection to automatic providers is prepared and not yet connected; we are not going to say otherwise until it is.",
      },
      {
        q: "If I accept a recommendation, do I have to copy the price somewhere else?",
        a: "No. On acceptance, the recommendation **pushes a rate override into the booking engine**, which becomes step 0 of the price chain. The loop closes inside the system. In most stacks that step is a person copying a number from one screen to another.",
      },
      {
        q: "Is it included or does it cost extra?",
        a: "It depends on the plan. In the large systems the RMS is almost always an add-on quoted separately; here it is one more product in the catalogue. [Look at the plans](/precios) to see which one it is in.",
      },
    ],
    cta: {
      title: "Price *stops being a hunch*.",
      lead:
        "The RMS starts being useful as soon as you have history of your own, and while you do not, it says so to your face instead of inventing a curve.",
      steps: [
        "You load inventory and base rates.",
        "You build the comp set and approve the events in your area.",
        "You write two or three rules and dry-run them.",
      ],
    },
  },

  sitios: {
    meta: {
      title: "Website and brand",
      description:
        "Visual builder with your own domain and multiple languages, components wired to your data, LinkHub for the Instagram bio, brand identity, galleries and reviews.",
    },
    hero: {
      eyebrow: "Website, brand and LinkHub",
      title: "Your digital presence, *served by the same system*.",
      lead:
        "The builder assembles the site with components that wire themselves to your inventory, and the renderer publishes it on your domain. Next to it live brand identity, galleries, reviews and the LinkHub that goes in the Instagram bio.",
    },
    builder: {
      eyebrow: "Builder",
      title: "A visual editor with *components that know about hotels*.",
      lead:
        "Drag-and-drop canvas, direct editing on the text, context menus and a component library organised into families. What sets it apart from a generic builder is the other half: the domain components.",
      items: [
        "**Embedded booking engine**, room cards, categories, galleries, promotions, reviews and services: all wired to live data.",
        "**Style editor** on the side with typography, colour, spacing and effects, plus a CSS editor for advanced cases.",
        "**Integrated image editor** — crop, filters, adjustments — and a rich text editor.",
        "**Builder AI assistant** with streaming, to generate and edit sections.",
        "**Simple or advanced mode** per subsite, drafts and explicit publishing, preview at several sizes.",
      ],
    },
    published: {
      eyebrow: "The published site",
      title: "What *the guest* sees.",
      items: [
        {
          title: "Your own domain",
          desc: "Custom hostnames per subsite, with registration and resolution. Each language variant can have its own.",
        },
        {
          title: "Real multi-language",
          desc: "Routes per language with their own title, description, cover, favicon and social preview. Pages, not machine translation.",
        },
        {
          title: "Popups",
          desc: "Five formats — modal, slide-in, toast, banner and full screen — with templates, triggers, page rules, priority and frequency control per visitor.",
        },
        {
          title: "WhatsApp button",
          desc: "Floating, with a visual preset, corner, size, colours and a prefilled message. The number comes from the property.",
        },
        {
          title: "Analytics",
          desc: "Google Analytics and Google Tag Manager per subsite, preserving UTMs from the campaign through to the booking.",
        },
        {
          title: "Guest account",
          desc: "Login, sign-up and recovery integrated against StayPass, so the guest can see and cancel their bookings from your site.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO and GEO",
      title: "For search engines *and for models*.",
      lead:
        "The editor covers classic SEO — title, description, cover, favicon, social preview, Apple icon — and adds a layer meant so a language model understands your property without anyone visiting the site.",
      items: [
        "Entity type, name and description, categories, use cases and problem domains.",
        "Target audiences and geographic scope.",
        "Trust signals: years active, number of clients, certifications and featured clients.",
        "Per page: intent, topic, semantic context and related entities.",
      ],
      link: "See the agentic layer",
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "The page that goes *in the bio*.",
      lead:
        "A link-in-bio made for properties, not a generic one with a 'book' button leading to a form. Ten block types, its own theme and its own analytics.",
      items: [
        "**Blocks**: link, WhatsApp, book, reviews, text, gallery, video, map, contact and separator. Each with title, subtitle, icon, thumbnail, order, featured flag and **date scheduling**.",
        "**Design**: theme templates, light and dark, solid, gradient, image or pattern background, seven button styles, corners and typography — including any Google Font.",
        "**Sharing**: link and a **downloadable QR code** to print at the front desk or on the menu.",
        "**Analytics**: visits and clicks by day, country, referrer and device, with no IP and no user agent. Labels are stored separately so renaming a block does not break history.",
      ],
    },
    around: {
      eyebrow: "Around it",
      title: "What *feeds* all of the above.",
      items: [
        {
          title: "Brand identity",
          desc: "Logo, dark logo, hero, background and four photos; palette with automatic extraction from the logo; tone, typography, tagline, story, audiences, location context and public contact. One record that feeds the site, the engine, LinkHub and the OTA listings.",
        },
        {
          title: "Galleries",
          desc: "Media galleries for the property and its rooms, with cover, order, description, images and videos. Consumed by the site, LinkHub and the listings.",
        },
        {
          title: "Reviews",
          desc: "Own and external, with author, score, text, date, language and link. Hotel replies, bulk CSV import with deduplication, and statistics feeding the widgets and the site components.",
        },
        {
          title: "File library",
          desc: "A repository of the company's images, videos, audio and documents, with nested folders and tags. Embedded apps can open it and receive the chosen file.",
        },
        {
          title: "Templates with autofill",
          desc: "You create a template from a subsite, the fillable slots get extracted, and 'generate' builds a new site with the property's real data.",
        },
        {
          title: "Online presence",
          desc: "An auditable visibility score, declared social connections, a Google Business listing and OTA listings. Today it is hidden from the menu and does not publish by API: it is edited and copied to the destination.",
        },
      ],
    },
    faq: [
      {
        q: "Do I have to load my rooms twice, once for the site?",
        a: "No, and that is the point. The builder's domain components — embedded engine, room cards, categories, galleries, promotions, reviews and services — **wire themselves to the data you already loaded**. Upload a new photo to a category and it shows on the site without anyone touching it.",
      },
      {
        q: "Can I have the site in several languages?",
        a: "Yes. Each site has language variants, and each variant has its own URL, title, description, domain, cover, favicon and social preview. It is not a machine translator on top of a page: they are pages.",
      },
      {
        q: "I cannot design. Will it still look presentable?",
        a: "That is what templates with autofill are for: a site is taken as a model, the fillable slots are extracted, and “generate” builds a new one with **your real data** — brand, photos, rooms and services. New sites also start in simple mode, with the advanced controls hidden until you go looking for them.",
      },
    ],
    cta: {
      title: "Your site and your link, *the same afternoon*.",
      lead:
        "If you already loaded brand and rooms, generating the site from a template is a matter of minutes, and LinkHub autofills from the property data.",
      steps: [
        "You load brand identity and photos.",
        "You generate the site from a template.",
        "You publish on your domain and build the LinkHub.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Bookfer AI",
      description:
        "An assistant with 272 tools that queries and operates the PMS with the user's real permissions: filtered before the turn, context in the prompt and evaluation on every call.",
    },
    hero: {
      eyebrow: "Bookfer AI",
      title: "An assistant that *does*, not one that explains where to click.",
      lead:
        "It is embedded in the desktop, has persistent sessions and 272 tools covering practically the whole surface of the product. It checks availability, creates bookings, moves a stay with a preview, adjusts rates, approves events or publishes a site.",
    },
    perms: {
      eyebrow: "Permissions",
      title: "It operates with *your* permissions, not its own.",
      lead:
        "This is the delicate part of any agent inside a management system, and it is solved in three layers applied at different moments.",
      items: [
        "**Before the turn** — tools are filtered by your real scope. What you cannot use is never even offered to the model.",
        "**In the prompt** — it is told what role you have, which apps you do and do not have access to, what capabilities, what properties, and how to answer when something is blocked.",
        "**On every call** — the specific operation is evaluated against a per-service policy table that mirrors what the real services require and **fills the gaps** where the backend is laxer than the interface.",
        "**With your identity** — execution uses a short-lived permission issued in your name and renewed on every call.",
      ],
    },
    tools: {
      eyebrow: "272 tools",
      title: "Practically *the whole* surface of the product.",
      lead:
        "It is not a chatbot with three demo actions. They are grouped by domain, and there are also raw read and write tools to cover the endpoints without a dedicated one.",
      items: [
        {
          title: "Bookings",
          desc: "Check availability, create a booking, change status, assign, unassign and auto-assign a unit, move with preview, notes, charge adjustment, extra services, guest search and frequent guests.",
        },
        {
          title: "Rates and promotions",
          desc: "List, create, update and delete rate plans and promotions, and activate or deactivate them.",
        },
        {
          title: "Availability",
          desc: "Initialise, sync, per-day restrictions and room blocks.",
        },
        {
          title: "Rooms",
          desc: "Room status, full units and categories, history, bulk creation, selling-model audit and auto-correction.",
        },
        {
          title: "Revenue",
          desc: "Dashboard, daily series, booking window, pace, demand signals, rules with a dry run, decisions, recommendations, events and competitors.",
        },
        {
          title: "Marketing",
          desc: "Sites — create, publish, duplicate, pages, languages, SEO and GEO, popups, Engine Studio — galleries, reviews, LinkHub and online presence.",
        },
        {
          title: "Company and users",
          desc: "Profile, users, invitations, roles, statuses, access and search by email.",
        },
        {
          title: "System",
          desc: "Global search, notifications and dashboard theme. Plus the whole file library, folders and files.",
        },
      ],
    },
    experience: {
      eyebrow: "The experience",
      title: "You see *what it is doing* while it does it.",
      lead:
        "The answer arrives streaming with the turn transcript in view. It is not a spinner and then a paragraph: it is the list of operations, with their results, as they happen.",
      items: [
        "Rich answer blocks: booking cards, revenue cards and actionable lists, not just text.",
        "Buttons inside the cards that execute operations, with the same permission check.",
        "Feedback capture inside the conversation, so what did not work reaches whoever fixes it.",
        "Session history filtered by the active workspace: the front desk does not see marketing's conversations.",
      ],
    },
    stats: [
      { value: "272", label: "tools available" },
      { value: "3", label: "permission verification layers" },
      { value: "10", label: "explicit denial codes" },
      { value: "1", label: "identity: yours, with a short-lived permission" },
    ],
    why: {
      eyebrow: "Why it can do more here",
      title: "Because it sees *the whole system*, not one module.",
      lead:
        "An assistant tied to a single product can answer about that product. Since the data here is one, a single sentence crosses things that in another stack are three tabs and two exports.",
      items: [
        "“How is the long weekend looking compared with last year?” — it reads **pace** against your own history.",
        "“Raise Saturday doubles by 10% and tell me if that puts me above the comp set” — it touches **rates** and queries **competitors**.",
        "“Publish the last-minute promo on the site” — it creates the **promotion** and publishes the **site**.",
        "“Who is arriving today with no room assigned?” — it crosses **bookings** and **units**.",
      ],
    },
    faq: [
      {
        q: "What happens if I ask for something my user cannot do?",
        a: "It explains the missing permission, it does not tell you the feature does not exist. There are explicit denial codes — insufficient role, missing capability, no active workspace, insufficient app access, property out of scope, password change required, among others — and the assistant translates which one it was. The difference matters: “you do not have permission” is solved by talking to your admin, “it does not exist” sends you looking for another system.",
      },
      {
        q: "Does the assistant have full access to the system?",
        a: "It has no access of its own at all. When it executes something it does so **impersonating your real identity**, with a short-lived permission reissued on every call. If your membership is revoked mid-conversation, the next operation fails and the assistant explains it. There is no service account with superpowers behind it.",
      },
      {
        q: "Can I see what it did, or do I have to trust it?",
        a: "You can see it. Every turn shows the transcript: which tool it used, with what parameters and what came back. And answers are not just text: they come back as booking or revenue cards with buttons that execute, subject to the same permission check as everything else.",
      },
    ],
    cta: {
      title: "Try it with *your own data*.",
      lead:
        "The assistant is genuinely useful when there is a loaded system underneath. Start with setup, load a property and ask it something you would solve today by opening four tabs.",
      steps: [
        "You sign up and load the property.",
        "You open Bookfer AI from the desktop.",
        "You ask for something real and watch the transcript.",
      ],
    },
  },

  agentes: {
    meta: {
      title: "Agentic property",
      description:
        "llms.txt, availability.json, engine-capabilities.json, JSON-LD and a GEO editor: what it takes for a language model to understand your property and be able to book it.",
    },
    hero: {
      eyebrow: "Agentic property",
      title: "So a machine can *understand you and book you*.",
      lead:
        "More and more people ask a model before searching. That model does not see your photo carousel: it sees text, structured data and routes. bookfer's engine publishes all three, and the GEO editor lets you declare what you are in your own words.",
      secondary: "See the engine",
    },
    shift: {
      eyebrow: "The shift",
      title: "The question no longer *starts in a search box*.",
      lead:
        "It used to be “cabins in Villa La Angostura” and the answer was ten blue links. Now it is “where do I stay four nights with two kids and a dog, less than thirty minutes from the centre?” and the answer is a paragraph with two or three names. Being in that paragraph depends on there being something of yours that can be read.",
      headOld: "What classic SEO optimises",
      headNew: "What the agentic layer adds",
      rows: [
        { old: "Title and description for the result", now: "Entity description, in plain text" },
        { old: "Cover image for the click", now: "Real machine-readable availability" },
        { old: "Keywords on the page", now: "Use cases, audiences and geographic scope" },
        { old: "Inbound links", now: "Declared, verifiable trust signals" },
        { old: "A contact form", now: "A booking route an agent can follow" },
      ],
    },
    surfaces: {
      eyebrow: "The four surfaces",
      title: "What *your engine* publishes.",
      lead:
        "It turns on with a switch in the engine settings. From then on, your property has a public face for machines as well as the one it already had for people.",
      items: [
        {
          title: "llms.txt",
          desc: "Who you are, what you sell and how to book, in plain text with no markup. It is the file a model can read whole without spending tokens parsing HTML.",
        },
        {
          title: "availability.json",
          desc: "Your real availability, in a format a machine can query. It is not a form to fill in: it is the data.",
        },
        {
          title: "engine-capabilities.json",
          desc: "Which operations your engine accepts and with what parameters. It is the difference between an agent knowing you exist and knowing how to book you.",
        },
        {
          title: "JSON-LD on the pages",
          desc: "Structured data on the published site, which is what classic search engines already read and what models read too when they visit the page.",
        },
      ],
    },
    editor: {
      eyebrow: "GEO editor",
      title: "You declare what you are *in your own words*, not a robot's.",
      lead:
        "The editor goes well beyond classic SEO. It is a record meant so a model can describe you accurately even if nobody visits your site.",
      items: [
        "**Entity type**: hotel, resort, B&B, vacation rental, apartment, hostel, motel, campsite or generic lodging.",
        "**Categories, use cases and problem domains**: what your property is for, said the way people search for it.",
        "**Audiences and geographic scope**: who you serve and how far.",
        "**Trust signals**: years active, number of clients, certifications and featured clients.",
        "**AI indexing control** and priority: the layer turns off if you do not want it.",
        "**Per page**: intent (informational, commercial, transactional, comparative or support), topic, semantic context and related entities.",
      ],
    },
    consistency: {
      eyebrow: "Why it works here",
      title: "Because the data *is not copied*.",
      lead:
        "The reason an availability file can be published without fear is the same reason the engine's calendar shows real remaining units: it is the same inventory the hotel's calendar uses. There is no nightly export that can drift.",
      items: [
        "A room is loaded once and appears in the engine, on the site, in the availability JSON and in the RMS.",
        "A maintenance block takes real inventory out and disappears from every surface at once.",
        "The brand description you loaded feeds the site, LinkHub, the OTA listings and the llms.txt.",
      ],
    },
    dogfood: {
      eyebrow: "Practising what we preach",
      title: "This site has its own *llms.txt* too.",
      lead:
        "It would be odd to ask that your property be readable by a machine and for the page asking it not to be.",
      button: "See /llms.txt",
    },
    faq: [
      {
        q: "Does this guarantee I show up when someone asks ChatGPT?",
        a: "No, and anyone who tells you otherwise is lying. Nobody controls what a model recommends, just as nobody controls Google's ranking. **What does depend on you is that, when an agent goes to look, it finds something it can understand** — text describing what you are, availability that can be read and a clear route to book. A property whose only public data is a photo carousel on Instagram has nothing a model can cite.",
      },
      {
        q: "What is GEO and how is it different from SEO?",
        a: "Classic SEO optimises for a person to click a result: title, description, cover image. **GEO — Generative Engine Optimization —** optimises for a model to describe you accurately without anyone visiting your site: what type of entity you are, for which audiences, in which area, with what trust signals. They are complementary; the system's editor has both.",
      },
      {
        q: "Can I decide that AI should not index me?",
        a: "Yes. The engine's agentic layer turns on or off in the settings, and the GEO editor has AI indexing control and priority. It is your decision, not a default we impose.",
      },
    ],
    cta: {
      title: "Turn it on *with a switch*.",
      lead:
        "The agentic layer is one more section of the engine settings. If your inventory is already loaded, publishing the routes takes no time at all.",
      steps: [
        "You load inventory and brand identity.",
        "You turn the agentic layer on in the engine.",
        "You fill the GEO editor in your own words.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Solutions",
      description:
        "Hotels, cabins and apartments, hostels, glamping and villas, and small groups: how bookfer is configured for each type of property and each desk.",
    },
    hero: {
      eyebrow: "Solutions",
      title: "The same system, *configured differently*.",
      lead:
        "An urban hotel, a cabin complex and a hostel do not operate the same way, and yet almost every system on the market picks one of the three and makes the other two adapt. Here what changes is the configuration: selling model, workspaces and active apps.",
    },
    hoteles: {
      eyebrow: "Hotels and aparthotels",
      title: "Interchangeable rooms, *assigned automatically*.",
      lead:
        "The classic setup: categories grouping several equivalent units, the guest buys a room type and the system decides which one they get. With automatic assignment you can ask it to minimise gaps or balance wear across units.",
      items: [
        "Selling model: category pool, with automatic or manual assignment as you prefer.",
        "Typical workspaces: front desk, housekeeping and admin, each with its own menu.",
        "Occupancy floor plan by floor and room status with a transition matrix.",
        "Assignment recompaction to free gaps when occupancy gets tight.",
      ],
    },
    cabanas: {
      eyebrow: "Cabins, apartments and rentals",
      title: "Every unit with *a name of its own*.",
      lead:
        "Here the guest does not buy 'a two-room cabin': they buy the Alerce, with its photos and its description. The single-unit model makes the category wrap exactly one unit, and there is no ambiguity about what they booked.",
      items: [
        "Selling model: single unit 1:1, selectable per category and not for the whole property.",
        "Its own record per unit in the engine: photos, description, capacity and price.",
        "Maintenance blocks that take real inventory out and disappear from the engine.",
        "If you also have two standard rooms, they coexist: the mode is set per category.",
      ],
    },
    hostels: {
      eyebrow: "Hostels",
      title: "Beds, shifts and *a lot of turnover*.",
      lead:
        "High volume of short bookings, a rotating team and an operation where the day's check-ins and check-outs are the most watched screen. The daily board opens the shift and room status closes it.",
      items: [
        "Daily board with check-ins and check-outs, and two days visible at once.",
        "A housekeeping workspace with its own work list and nothing else in the menu.",
        "Guided tours per app: a new person onboards themselves on their first shift.",
        "User creation with a temporary password that locks the interface until it is changed.",
      ],
    },
    glamping: {
      eyebrow: "Glamping, villas and estates",
      title: "Few units, *a lot of brand*.",
      lead:
        "When you have six domes, the operation is simple and the hard part is selling them well. Brand identity, galleries, the site on your own domain and LinkHub weigh more than the tape chart.",
      items: [
        "Brand identity with a palette extracted from the logo, tone, narrative and audiences.",
        "A site from a template autofilled with your real data, on your domain.",
        "LinkHub with a printable QR, and the engine as the main button.",
        "Agentic layer: the property becomes readable by a language model, not just by Google.",
      ],
    },
    grupos: {
      eyebrow: "Groups and small chains",
      title: "Several properties, *one place*.",
      lead:
        "A company can have several properties, and a person can belong to several companies. On top of that, a membership can be scoped to specific properties: a hotel manager sees their hotel and nothing else.",
      items: [
        "Company, property and workspace picker on the desktop.",
        "Memberships scoped to a list of properties, or to all of them.",
        "Ten administrative capabilities assignable per membership, on top of the role.",
        "Property templates: a new property starts with workspaces and apps already configured.",
      ],
    },
    roles: {
      eyebrow: "By desk",
      title: "And inside, *everyone sees their own*.",
      lead:
        "The active workspace decides the menu, the home screen, the effective permissions and even the onboarding tour. It is not a permission hiding buttons: it is a different composition of the same system.",
      items: [
        {
          title: "Front desk",
          desc: "Daily board, bookings, calendar, manual entry and room status. The home shows check-ins, check-outs and recent bookings.",
        },
        {
          title: "Housekeeping",
          desc: "Room status and occupancy floor plan. The home shows units being cleaned and pending departures, and the menu has no rates and no revenue.",
        },
        {
          title: "Marketing",
          desc: "Builder, sites, galleries, reviews, brand and LinkHub. The home shows review score, visibility and LinkHub status. The Bookings hub does not even appear.",
        },
        {
          title: "Revenue and owner",
          desc: "Full reports and RMS: pace, comp set, events, rules and recommendations, plus ADR, RevPAR and production by channel.",
        },
        {
          title: "Admin",
          desc: "Sees the whole catalogue automatically, including apps added in the future. It is the workspace that manages users, properties and billing.",
        },
        {
          title: "The guest",
          desc: "StayPass: their account, their bookings, the detail, cancellation and their profile. They register once and accumulate the properties they booked with.",
        },
      ],
    },
    cta: {
      title: "Tell us how *you operate*.",
      lead:
        "Setup has a step where you pick your operating archetype, and the workspaces and initial apps come out of it. If none of them fits, write to us and we will look at it.",
      steps: [
        "You choose property type and selling model.",
        "Setup builds your workspaces.",
        "You adjust apps and permissions per desk.",
      ],
    },
  },

  precios: {
    meta: {
      title: "Pricing",
      description:
        "One plan per property, with no commission per booking and no setup cost. See what each plan includes and what we do not do yet.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "One plan per property, *no commission per booking*.",
      lead:
        "What people book through your engine is entirely yours. There is no percentage per booking, no setup cost and no hidden module showing up on the second invoice.",
      notes: ["No card to start", "No lock-in", "No setup fee"],
    },
    matrix: {
      eyebrow: "Comparison",
      title: "What is in *each plan*.",
      lead:
        "This table comes from the same catalogue the system uses to resolve your account. It is not a marketing version of the plans: it is the plans.",
    },
    noCharge: {
      eyebrow: "What is not charged separately",
      title: "The lines you will *not* see on the invoice.",
      items: [
        {
          title: "Commission per booking",
          desc: "Zero. The engine is yours and we do not keep a percentage of what you sell through it.",
        },
        {
          title: "Sending emails",
          desc: "Guest emails leave from bookfer's domain, with no separate mail service and no SMTP configuration per hotel.",
        },
        {
          title: "Setup",
          desc: "Setup is self-service. For the first cohorts we accompany the room loading at no charge.",
        },
        {
          title: "Website and domain",
          desc: "The builder and the renderer are in the plan. You register the domain wherever you like and point it here.",
        },
        {
          title: "Additional users",
          desc: "Within the plan's cap, you add whoever you need. There is no per-seat charge.",
        },
        {
          title: "Transaction fee",
          desc: "It does not exist, because there is no payment gateway yet: the guest pays at check-in.",
        },
      ],
    },
    honest: {
      eyebrow: "Before you decide",
      title: "What a bookfer plan does not include yet",
      text: "It is in no plan because it does not exist yet, not because it is an extra: **channel manager** — there is no inventory or rate sync with OTAs — and **payment gateway** — nothing is charged online. External competitor rates are entered by hand, and Google Business and OTA listings are edited inside but copied to the destination by hand.",
      link: "See the full product status",
    },
    faqTitle: "Questions about pricing",
    faq: [
      {
        q: "Do you charge a commission per booking?",
        a: "No. The engine is yours and what comes in through it is entirely yours. The plan is a subscription per property with no percentage per booking and no transaction fee — among other reasons because **there is no payment gateway yet**: payment happens at check-in.",
      },
      {
        q: "Is there a setup cost?",
        a: "No. Setup is self-service: nine guided steps you do yourself, with progress saved on the server. For the first cohorts we offer live help on the room-loading step — the one that costs the most — and that is not charged either.",
      },
      {
        q: "What happens when the free period ends?",
        a: "You pick a paid plan or you stop using it. There is no lock-in and no penalty. We are in a market pilot: what we want from this stage is real evidence of use, not revenue.",
      },
      {
        q: "Do you charge per user?",
        a: "No: each plan comes with a cap on users and properties, and within that cap you add whoever you want at no per-person charge. The caps are in the comparison above.",
      },
      {
        q: "Is revenue management charged separately?",
        a: "In the large systems it almost always is: the RMS is an add-on quoted separately. Here it is one more product in the catalogue and it is in the plan or it is not — the comparison above tells you row by row.",
      },
    ],
    cta: {
      title: "Start free and *see later*.",
      lead:
        "We do not ask for a card to sign up. If in two weeks the system has changed nothing for you, there is nothing to cancel.",
      steps: [
        "You sign up with no card.",
        "You load the property and the rooms.",
        "You pick a plan when the free period ends.",
      ],
    },
  },

  nosotros: {
    meta: {
      title: "About",
      description:
        "Why bookfer exists, how we work and what state each part of the product is in — including what it does not do yet.",
    },
    hero: {
      eyebrow: "About",
      title: "Software for the property that *has no IT department*.",
      lead:
        "bookfer came out of a simple observation: a twenty-room hotel or a six-cabin complex needs exactly the same seven pieces a chain does, and none of the options on the market give them together at a price that makes sense at that scale.",
      secondary: "See the product",
    },
    thesis: {
      eyebrow: "The thesis",
      title: "A small property should not need *five vendors and a consultant*.",
      p1: "Today the usual way out is a PMS over here, an engine over there, a site built by someone who no longer replies, a rates spreadsheet and enquiries landing in a WhatsApp nobody organises. Each piece works; the whole does not. And the work of keeping the whole aligned ends up being done by hand, by the person at the front desk.",
      p2: "bookfer's bet is that this whole becomes one system with one database, that it can be set up without help, and that every desk sees only its own. Everything else — the RMS, the agent layer, the assistant — comes out of that: they are things you can only do well once the data is already one.",
    },
    principles: {
      eyebrow: "How we work",
      title: "Four decisions that *are not up for negotiation*.",
      items: [
        {
          title: "One fact, one place",
          desc: "A room is loaded once. If it appears in the engine, on the site, in the RMS and in LinkHub it is because it is the same row, not because there is a sync in the middle. Most problems in a hospitality stack are two systems saying different things about the same room.",
        },
        {
          title: "Status gets said",
          desc: "If something is not there, we say it on the site and not on the third call. A pilot that starts with an inflated expectation ends in a silent churn four weeks later, and that churn teaches us nothing. We would rather have fewer sign-ups and know why the ones who stay, stay.",
        },
        {
          title: "Permissions are real",
          desc: "Hiding a button is not a permission. Every operation is evaluated against the service policy, and the AI assistant operates impersonating the real identity of whoever is asking, with a short-lived permission renewed on every call. There is no service account with superpowers behind it.",
        },
        {
          title: "Setup friction is a bug",
          desc: "Configuring a mail server, waiting for an onboarding call, paying a setup fee: each of those is people left outside. Setup is nine steps you do alone, and guest emails go out without you configuring anything.",
        },
      ],
    },
    status: {
      eyebrow: "Product status",
      title: "What works, what half works and *what does not exist*.",
      lead:
        "This table is the same one we use internally to decide what gets built. We publish it because the alternative — you finding out in week three — helps nobody, least of all us.",
      groups: [
        {
          label: "Solid and in production",
          tone: "ok",
          rows: [
            {
              name: "Dual selling model",
              desc: "Category pool and single unit 1:1, selectable per category, with mixed-state detection, auto-correction and a migration assistant with draft, preview and cancellation.",
            },
            {
              name: "Anti-overbooking",
              desc: "A unique lock per unit and date in the database. Maintenance blocks use the same lock.",
            },
            {
              name: "Booking engine",
              desc: "Full flow with an informative calendar, a seven-block Engine Studio, two confirmation modes and automatic expiry of pending bookings.",
            },
            {
              name: "Multi-currency",
              desc: "Base, charging and comparison currencies, frozen at check-in, ten currencies and a selectable rate for ARS — blue, MEP, CCL or official.",
            },
            {
              name: "Tape chart calendar",
              desc: "Drag and resize with a preview of the result and the clashes before applying.",
            },
            {
              name: "Revenue management",
              desc: "Dual-axis analytics, pace with your own benchmark, comp set, events, rules with a dry run and a closed loop into the pricing engine.",
            },
            {
              name: "Builder and renderer",
              desc: "Visual builder with domain components, multiple languages, custom domains, popups and an SEO and GEO editor.",
            },
            {
              name: "LinkHub",
              desc: "Ten block types, themes, date scheduling, QR and visit and click analytics.",
            },
            {
              name: "Bookfer AI",
              desc: "272 tools and a three-layer permission policy, with identity impersonation and a short-lived permission.",
            },
            {
              name: "Support and setup",
              desc: "37 guided tours, onboarding per workspace and nine-step setup that resumes on another device.",
            },
          ],
        },
        {
          label: "Partial: it exists, but not complete",
          tone: "partial",
          rows: [
            {
              name: "Online presence",
              desc: "It works but it is hidden from the menu by product decision. Social connections are declared — manual entry, no real OAuth — and the OTA sync marks status but does not publish.",
            },
            {
              name: "Google Business",
              desc: "The listing is editable and can be marked as published in the model, but there is no Google API connected: today it is copied to the destination by hand.",
            },
            {
              name: "Competitor rates",
              desc: "Competitor discovery is automatic; external rates are entered by hand. Ready for Lighthouse, RateGain, PriceLabs and KeyData, not connected.",
            },
            {
              name: "Contracts and AI credits",
              desc: "The plan defines which products each company has, and AI credits are measured and reported, but they do not block access or enforce a quota yet.",
            },
            {
              name: "Billing",
              desc: "The capability to manage billing exists and the plan lives on the company, but there is no billing system connected.",
            },
          ],
        },
        {
          label: "Does not exist yet",
          tone: "none",
          rows: [
            {
              name: "Channel manager",
              desc: "There is no inventory or rate integration with OTAs. All there is, is an event log recording every relevant booking change — created, confirmed, assigned, moved, check-in, check-out, cancelled, no-show — meant to feed that integration when it exists. Today it is a file for replay and diagnosis, not a connection.",
            },
            {
              name: "Payment gateway",
              desc: "Nothing is charged online. The company model has the payments flag, but there is no gateway: payment happens at check-in, in person, with the exchange rate frozen at that moment.",
            },
          ],
        },
      ],
    },
    pilot: {
      eyebrow: "Where we are",
      title: "In a market pilot, *on purpose*.",
      lead:
        "We are not trying to make money in this stage. We are trying to answer four questions with data, and all four depend on properties using the system for real, with real bookings inside.",
      questions: [
        "Does setup complete on its own, or is there a specific step where people drop out?",
        "Do guests book through the engine, or does the habit go back to chat even though the link exists?",
        "What do people who use it seriously ask for, and how is that different from what someone who tried it and left asked for?",
        "What is the assistant used for when nobody is watching?",
      ],
      stats: [
        { value: "2026", label: "year of the market pilot" },
        { value: "AR", label: "made in Argentina, in five languages" },
        { value: "5", label: "platform languages" },
        { value: "0", label: "commission on engine bookings" },
      ],
    },
    cta: {
      title: "If any of this *sounds like your problem*.",
      lead:
        "Write to us and we will talk it through plainly. If bookfer is not useful for your case yet, we will tell you in that same conversation.",
      steps: [
        "You tell us how you operate today.",
        "We tell you what it solves and what it does not.",
        "If it makes sense, we start the setup together.",
      ],
    },
  },

  contacto: {
    meta: {
      title: "Contact",
      description:
        "Write to us and we will talk it through plainly: what bookfer solves for your property and what it does not yet. You can also start the free setup yourself.",
    },
    eyebrow: "Contact",
    title: "Tell us how *you take bookings today*.",
    lead:
      "You do not need to know which module you need. Knowing how many units you have, whether you sell on OTAs and how much of your day goes into answering availability questions is already enough for us to tell you whether bookfer is useful to you — or whether it is not yet.",
    checks: [
      "We answer within the business day.",
      "If something you need does not exist yet, we tell you right there.",
      "If you want, we load the rooms together on a short call.",
    ],
    directLabel: "Or write to us directly",
    shortcutTitle: "Would you rather not wait for an answer?",
    shortcutText:
      "Setup is self-service, free and asks for no card. You can have the engine running before we answer this form.",
    whatsappMessage: "Hi, I would like to know more about bookfer for my property.",
  },

  legal: {
    updated: "Last updated",
    updatedDate: "30 August 2026",
    privacy: {
      meta: {
        title: "Privacy policy",
        description:
          "What data bookfer takes on this site and in the platform, which providers process it and how to ask for it to be deleted.",
      },
      title: "Privacy policy",
      lead: "What we take, what for, who processes it with us and how to ask for it to be deleted.",
      blocks: [
        { h: "1. Who we are" },
        {
          p: "bookfer is a management platform for properties, operated from Argentina. For anything related to your personal data you can write to us at [hola@bookfer.com](mailto:hola@bookfer.com).",
        },
        { h: "2. Two different roles" },
        { p: "They are worth separating because the obligations are not the same:" },
        {
          ul: [
            "**This site and our commercial relationship with you.** Here we are the controller: we take the data to contact you and to understand where enquiries come from.",
            "**The platform.** When a property loads its guests' data into bookfer, the controller of that data is the property; we process it on their behalf and according to their instructions.",
          ],
        },
        { h: "3. What data we take on this site" },
        {
          ul: [
            "**What you give us in the form:** name, email, phone, property name and whatever message you write. The only required one is the email.",
            "**Campaign parameters (UTM)** present in the URL when the form is submitted, so we know how you got here.",
            "**Technical visit data** recorded by the server serving the site, like any web server.",
            "**Navigation metrics**, only if we have measurement tools configured. See the [cookie policy](/legal/cookies).",
          ],
        },
        {
          p: "We do not use the form data for anything other than contacting you about bookfer, and we do not sell it or hand it to third parties for advertising.",
        },
        { h: "4. What data the platform takes" },
        {
          p: "If you sign up, we also take what the system needs to work: your account and company data, your properties and units, and the bookings you load or that come in through your engine — including whatever guest data the stay requires. All of that belongs to you.",
        },
        { h: "5. Who processes it with us" },
        { p: "We work with providers acting on our behalf and only to deliver the service:" },
        {
          ul: [
            "**Transactional email delivery**, for the confirmations and notices that go out to the guest.",
            "**Image and file storage** for galleries, brand and the company library.",
            "**Authentication**, including the option to sign in with a social account if the property enables it.",
            "**Infrastructure and database** where the platform runs.",
            "**Measurement and advertising**, where applicable and as explained in the cookie policy.",
          ],
        },
        { h: "6. How long we keep it" },
        {
          p: "Commercial contact data is kept while there is an active relationship or interest, and deleted when you ask us to. An account's operational data is kept while the account exists and for whatever period the applicable legal and accounting obligations require.",
        },
        { h: "7. Your rights" },
        {
          p: "You can ask us for access to your data, its correction, its update or its deletion by writing to [hola@bookfer.com](mailto:hola@bookfer.com). In Argentina, the Agency for Access to Public Information is the supervisory authority for personal data protection and handles claims from anyone who considers their rights infringed.",
        },
        { h: "8. Security" },
        {
          p: "Access to the platform is protected by authentication and by a permission system with roles, capabilities and per-property scope. Sensitive operations are recorded in audit logs. No system is infallible; if we detected an incident affecting your data, we would tell you.",
        },
        { h: "9. Changes" },
        {
          p: "If we update this policy, we change the date in the header. Relevant changes are also communicated by email to active accounts.",
        },
      ],
    },
    terms: {
      meta: {
        title: "Terms and conditions",
        description:
          "Terms of use for the bookfer platform: what the service includes, what is in pilot, each party's responsibilities and how an account is closed.",
      },
      title: "Terms and conditions",
      lead: "The rules for using the platform, written to be understood.",
      blocks: [
        { h: "1. What the service is" },
        {
          p: "bookfer is a cloud platform for running a property: bookings, rooms, a public booking engine, websites, revenue management, a guest portal and an artificial intelligence assistant. You access it through a browser; no software is delivered to install.",
        },
        { h: "2. Product status" },
        {
          p: "The platform is in a **market pilot**. There are features declared partial and others that do not exist — among them a **channel manager** and a **payment gateway**. The up-to-date detail is published at [Product status](/nosotros#estado) and is part of what you accept on signing up: we do not promise features listed there as non-existent.",
        },
        { h: "3. Your account" },
        {
          p: "You are responsible for your account credentials and for those of the people you create. The system creates users with a temporary password the person must change on first login; until they do, the interface stays locked for them.",
        },
        {
          p: "You can assign roles, administrative capabilities and per-property scope. Configuring those permissions is yours: we provide the mechanism, we do not decide who sees what in your operation.",
        },
        { h: "4. Your data" },
        {
          p: "The data you load — properties, units, rates, bookings, guests, the content of your sites — is yours. We process it to provide the service, as set out in the [privacy policy](/legal/privacidad). If you are the one loading guest data, you are the controller of that data towards them and under applicable law.",
        },
        { h: "5. Plans and billing" },
        {
          p: "Each plan defines which products it includes and what property and user caps it has; what is published at [Pricing](/precios) comes from the same catalogue used to resolve your account. Free periods and trials last as indicated there. There is no minimum term and no penalty for closing your account.",
        },
        {
          p: "The booking engine charges no commission per booking. Guest payment does not go through bookfer: today it happens at check-in, between the property and the guest.",
        },
        { h: "6. Acceptable use" },
        { p: "The platform cannot be used to:" },
        {
          ul: [
            "Publish illegal or misleading content, or content you have no right to use.",
            "Load fake reviews or attribute trust signals to your property that are not true.",
            "Attempt to access another company's data, or to bypass the system's permission controls.",
            "Load data automatically outside the intended interfaces, to the point of degrading the service for others.",
          ],
        },
        { h: "7. Availability" },
        {
          p: "We do what is reasonable to keep the service available, but at this stage we do not offer a service level agreement with compensation. Maintenance that may interrupt the service is announced when it is foreseeable.",
        },
        { h: "8. The AI assistant" },
        {
          p: "The assistant executes operations with the real permissions of whoever uses it and leaves a record of what it did. Even so, it is a probabilistic system: **review what it executes** before taking a sensitive operation as done, just as you would review the work of someone who just joined. The revenue module's rate suggestions are exactly that, suggestions: the decision to apply them is yours.",
        },
        { h: "9. Intellectual property" },
        {
          p: "bookfer's software, brand and documentation are ours. The content you load — texts, photos, logo, your site's design — is yours, and you authorise us to host and display it solely to provide the service.",
        },
        { h: "10. Closing your account" },
        {
          p: "You can close your account whenever you want by writing to [hola@bookfer.com](mailto:hola@bookfer.com). Before closing it we give you a reasonable period to download whatever you need to keep.",
        },
        { h: "11. Liability" },
        {
          p: "The service is provided as is. To the extent the law allows, our liability is limited to the amounts you have paid us in the twelve months before the event giving rise to it. None of this limits liabilities that by law cannot be limited.",
        },
        { h: "12. Changes and jurisdiction" },
        {
          p: "We may update these terms; relevant changes are announced by email to active accounts and the date in the header is updated. The laws of the Argentine Republic and its competent courts apply.",
        },
      ],
    },
    cookies: {
      meta: {
        title: "Cookie policy",
        description:
          "Which cookies and measurement technologies the bookfer site uses, which are necessary and how to disable the rest.",
      },
      title: "Cookie policy",
      lead: "What this site stores in your browser and what you can disable.",
      blocks: [
        { h: "1. The public site" },
        {
          p: "The pages at `bookfer.com` are static and do not need cookies to work. We do not use our own cookies to profile you or to remember who you are between visits. The only one that may appear is the one storing the **language you chose** in the switcher, so we do not send you back to another one on your next visit.",
        },
        { h: "2. Measurement and advertising" },
        {
          p: "The site may load third-party measurement tools — navigation analytics, campaign conversion measurement and advertising platform pixels — when they are configured. Those tools can leave cookies or identifiers in your browser to count visits and attribute conversions.",
        },
        {
          p: "**They only load on the published site, never on internal previews.** It is a deliberate technical decision: while someone is editing a page from the panel, those visits would pollute the metrics.",
        },
        {
          p: "We may also send conversion events from our server to the corresponding advertising platform. That send uses no cookies and does not include the content of your message.",
        },
        { h: "3. The platform" },
        {
          p: "The application at `app.bookfer.com` does use **necessary** cookies: the ones keeping you signed in. Without them the system cannot be used, and they cannot be disabled without ending the session.",
        },
        {
          p: "The platform also stores some preferences in your browser's local storage — the visual theme, the sidebar state, guided tour progress. That lives on your machine and goes nowhere.",
        },
        { h: "4. How to disable them" },
        {
          p: "You can block or delete cookies from your browser settings, and use the opt-out options the analytics and advertising platforms offer themselves. If you block all cookies, the public site works the same; the application does not — because it will not be able to keep your session.",
        },
        { h: "5. Questions" },
        {
          p: "Any doubts about this, write to us at [hola@bookfer.com](mailto:hola@bookfer.com). See also the [privacy policy](/legal/privacidad).",
        },
      ],
    },
  },

  notFound: {
    eyebrow: "Error 404",
    title: "This page *does not exist*.",
    lead:
      "We may have moved it, or the link may be misspelled. These are the places people usually want to reach.",
    home: "Back to home",
  },
};

export default en;
