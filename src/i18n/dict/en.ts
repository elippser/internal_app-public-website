import type { Dictionary } from "./es";
import { solEn } from "./sol/en";
import { platEn } from "./plat/en";
import { intelEn } from "./intel/en";
import { legalCenterEn } from "./legal/en";

/**
 * English. Same keys as `es.ts` — TypeScript will not let it be otherwise.
 *
 * The voice is the Spanish one carried over, not softened: direct, concrete,
 * and willing to say what the product does not do yet. Marketing English that
 * hedges everything would contradict the one thing this site is betting on.
 */
const en: Dictionary = {
  site: {
    title: "Roombir · PMS, booking engine, website and revenue without five vendors",
    description:
      "Bookings, your own booking engine, website, revenue management and an AI assistant that executes, on a single database. For hotels, cabins, hostels and rentals in Latin America.",
    tagline: "Hotel software without five vendors",
    og: {
      title: "Your whole property, without five vendors.",
      lead: "Bookings, rooms, your own booking engine, website, revenue and an assistant that executes. On a single database, made in Argentina.",
      chips: ["PMS", "Booking engine", "Websites", "Revenue", "LinkHub", "Roombir AI"],
    },
  },

  nav: {
    menus: { ...solEn.menus, platformPromo: platEn.promo, solutionsPromo: platEn.solPromo, intelligence: intelEn.card },
    product: "Platform",
    platform: "The platform",
    contact: "Contact",
    login: "Log in",
    signup: "Get started",
    home: "roombir, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    more: "More",
    skip: "Skip to content",
    primary: "Primary",
    megaFoot: "All on a single database.",
    megaLink: "See the whole platform",
    language: "Language",
    featured: "The assistant",
    featuredMore: "What you can ask it",
    links: {
      solutions: "Solutions",
      pricing: "Pricing",
      about: "About",
    },
    groups: {
      operation: "Operations",
      growth: "Growth",
    },
    products: {
      ia: {
        title: "Roombir AI",
        desc: "The whole operation, in one conversation. You ask, it does it, with your permissions.",
      },
      pms: {
        title: "PMS",
        desc: "Properties, rooms, bookings and the engine, on a single inventory.",
      },
      informes: {
        title: "Reports",
        desc: "Occupancy, revenue, cancellations, channels and what is loaded wrong today.",
      },
      revenue: {
        title: "Revenue",
        desc: "The price for every date, with the trace of why and your target in view.",
      },
      marketing: {
        title: "Marketing",
        desc: "Website with an assistant, brand, files, reviews and LinkHub, connected to your bookings.",
      },
    },
    pmsParts: {
      propiedades: "Properties",
      habitaciones: "Rooms",
      reservas: "Bookings",
      motor: "Booking engine",
    },
  },

  plataformaCompleta: platEn.page,
  intelligence: intelEn,
  legalCenter: legalCenterEn,
  solucionesIndex: solEn.index,
  solucionesPaginas: solEn.pages,

  footer: {
    claim:
      "Bookings, rooms, your own booking engine, website, revenue and an assistant that executes, on a single database.",
    nav: "Footer",
    columns: {
      product: "Platform",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
    },
    company: {
      about: "Who we are",
      compare: "Comparisons",
      pricing: "Pricing",
      contact: "Contact",
    },
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      siteTerms: "Site terms",
    },
    solutions: {
      hoteles: "Hotels and aparthotels",
      cabanas: "Cabins and apartments",
      hostels: "Hostels",
      glamping: "Glamping and villas",
      grupos: "Groups and small chains",
    },
    agentNote: "this site has an llms.txt too",
    social: {
      instagram: "Roombir on Instagram",
      linkedin: "Roombir on LinkedIn",
      email: "Email us",
    },
  },

  common: {
    startFree: "Get started",
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
    video: {
      label: "Product video",
      play: "Play",
      pause: "Pause",
      unmute: "Turn sound on",
      mute: "Mute",
      close: "Close the video",
      volume: "Volume",
      progress: "Video progress",
    },
  },

  ticker: [
    "One database for everything",
    "Tape chart with preview",
    "Revenue with the reason behind every rate",
    "llms.txt · readable by an AI",
    "An assistant that executes",
    "10 currencies, rate frozen at check-in",
    "Guest emails without SMTP setup",
    "LinkHub with QR",
    "38 guided tours over the real screen",
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
      label: "Roombir AI",
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
      sources: { own: "own", roombir: "roombir", manual: "manual", none: "no data" },
      rivals: ["Posada del Lago", "Hostería Los Álamos", "Cabañas Ruca Hue", "Apart Cordillera"],
      note:
        "Automatic discovery by proximity and similarity. External rates are entered by hand: we do not invent a number we do not have.",
    },
    linkhub: {
      name: "Cabañas del Alerce",
      bio: "Villa La Angostura · Neuquén",
      blocks: ["Book online", "WhatsApp", "Cabin photos", "How to get here", "Reviews · 4.8"],
    },
    /* Room status. `state` is a key: available, occupied, cleaning,
       maintenance, blocked, checkout. */
    units: {
      label: "Rooms · Status",
      tag: "floor 2",
      states: {
        available: "Available",
        occupied: "Occupied",
        cleaning: "Cleaning",
        maintenance: "Maintenance",
        blocked: "Blocked",
        checkout: "Checkout pending",
      },
      tiles: [
        { code: "201", cat: "Double", state: "occupied" },
        { code: "202", cat: "Double", state: "checkout" },
        { code: "203", cat: "Superior Double", state: "cleaning" },
        { code: "204", cat: "Superior Double", state: "available" },
        { code: "205", cat: "Triple", state: "maintenance" },
        { code: "206", cat: "Suite", state: "blocked" },
      ],
      history: "203 · checkout pending → cleaning · Lucía · 11:42",
    },
    reports: {
      label: "Reports",
      tag: "last 30 days",
      kpis: [
        { label: "Occupancy", value: "72%", delta: "+8 pts" },
        { label: "ADR", value: "$96,600", delta: "+6%" },
        { label: "RevPAR", value: "$69,500", delta: "+18%" },
        { label: "Cancellation", value: "6%", delta: "−2 pts" },
      ],
      chart: "Demand · next 14 days",
      hygieneTitle: "Status and cleanup",
      hygiene: [
        "2 pending bookings unconfirmed for over 24h",
        "1 arrival today with no room assigned",
        "1 departure today still at check-in",
      ],
    },
    tourism: {
      label: "Roombir AI · Tourism snapshot",
      tag: "briefing",
      place: "Mendoza · March",
      updated: "updated 2h ago",
      rows: [
        { key: "holidays", value: "Carnival **3rd and 4th** · long weekend", src: "calendar" },
        { key: "events", value: "Vendimia Festival · **Mar 7** · 4 km away", src: "agenda" },
        { key: "weather", value: "average high **29°** · 2 days of rain", src: "weather" },
        { key: "flights", value: "routes observed into MDZ: **Santiago, São Paulo, Aeroparque**", src: "ADS-B" },
        {
          key: "exchange",
          value: "for a Brazilian traveler, Mendoza is **cheaper** than a year ago",
          src: "real exchange rate",
        },
      ],
      missing: { key: "on foot", value: "could not be read · omitted" },
      note: "Every figure carries its source. What could not be read is marked as missing, never as zero.",
    },
    builder: {
      label: "Editor · Assistant",
      tag: "draft",
      file: "reference.png",
      ask: "Build the homepage like this screenshot, with my own text",
      trace: [
        { tool: "read the screenshot", ok: "hero + search bar" },
        { tool: "add section · homepage", ok: "ok" },
        { tool: "connect booking engine", ok: "ok" },
      ],
      photo: "placeholder photo · change",
      title: "Cabañas del Alerce",
      sub: "Six mountain cabins in Villa La Angostura",
      bar: ["Check-in", "Check-out", "2 adults", "Search"],
    },
    brand: {
      label: "Brand",
      tag: "Cabañas del Alerce",
      logo: "A",
      palette: "Palette · pulled from the logo",
      rows: [
        { key: "tone", value: "Warm and personal" },
        { key: "typeface", value: "Classic serif · suggested by the tone" },
        { key: "tagline", value: "Six cabins between the lake and the forest" },
        { key: "nearby", value: "Lake Nahuel Huapi · 800 m" },
      ],
      used: "Used by the website, LinkHub, the booking engine and the data for search engines.",
    },
    /* `status`: replied or pending. */
    reviews: {
      label: "Reviews",
      tag: "4.8 · 126 reviews",
      rows: [
        {
          source: "Google",
          stars: "★★★★★",
          author: "Paula R.",
          text: "The cabin was spotless and the lake view was the best part of the trip.",
          status: "replied",
        },
        {
          source: "Booking",
          stars: "★★★★☆",
          author: "Marcos T.",
          text: "Everything was lovely. The last stretch of the road is gravel.",
          status: "pending",
        },
        {
          source: "Airbnb",
          stars: "★★★★★",
          author: "Julia M.",
          text: "We are coming back for sure. The Coihue is huge for four.",
          status: "replied",
        },
      ],
      replied: "replied",
      pending: "not replied",
    },
    org: {
      label: "Company",
      tag: "2 properties",
      company: "Grupo Andino",
      select: "Hotel del Parque ▾",
      props: [
        {
          name: "Hotel del Parque",
          meta: "Mendoza · ARS · UTC−3",
          spaces: ["Front desk", "Housekeeping", "Revenue"],
        },
        {
          name: "Cabañas del Alerce",
          meta: "Villa La Angostura · ARS · UTC−3",
          spaces: ["Front desk", "Marketing"],
        },
      ],
      membersTitle: "Who sees what",
      members: [
        { name: "Martín Sosa", scope: "all properties · Admin" },
        { name: "Lucía Paz", scope: "Cabañas del Alerce only · Front desk" },
      ],
    },
    signals: {
      revenue: "revenue · sat 21/03",
      applied: "pushed to the engine",
      agent: "Roombir ai",
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
    catalog: {
      plans: {
        "inicial": { tagline: "To get the property operating and taking bookings online", description: "The core of the PMS: rooms, bookings and the public booking engine. Free for a limited time so you can try the platform with real data." },
        "profesional": { tagline: "The complete property: operations, marketing and web presence", description: "Adds website, brand identity, galleries, reviews, LinkHub and reports to the operational core. It is the plan that covers most small and mid-sized properties." },
        "full-system": { tagline: "All of roombir, including revenue management and the AI assistant", description: "Every product on the platform: the operational core, full marketing, Revenue (RMS), online presence and Roombir AI with monthly credits." },
      },
      products: {
        "habitaciones": { name: "Rooms", description: "Physical inventory: categories, units, operational statuses and occupancy map." },
        "reservas": { name: "Bookings", description: "Day-to-day commercial operations: daily board, booking list and calendar, manual entry, rates, availability and promotions." },
        "motor": { name: "Booking engine", description: "The search and checkout the guest sees, with its setup studio. Public surface: it does not open from the PMS menu." },
        "informes": { name: "Reports", description: "Operational analytics for the property: occupancy, revenue, production by channel and closings." },
        "revenue": { name: "Revenue (RMS)", description: "Revenue management: pace, compset, demand events, rules and rate recommendations." },
        "website": { name: "Websites", description: "Site builder and the renderer that publishes the sites: multilingual, custom domain, SEO and GEO." },
        "marca": { name: "Brand identity", description: "Logo, palette, tone, story and public contact details of the property. It feeds the website, the booking engine and the LinkHub." },
        "galerias": { name: "Galleries", description: "Media galleries for the property and its rooms." },
        "resenas": { name: "Reviews", description: "Guest reviews, public replies and how they show up on the website and in the booking engine." },
        "linkhub": { name: "LinkHub", description: "The property's link-in-bio page for social media, with its public renderer." },
        "social-hub": { name: "Online presence", description: "Social media, Google Business Profile, OTA listings and SEO/GEO control. Currently hidden from the PMS menu." },
        "archivos": { name: "File library", description: "Shared storage for the property's images and documents." },
        "staypass": { name: "StayPass", description: "Guest portal: account, bookings and profile. Public surface, it does not open from the PMS." },
      },
    },
    homeTitle: "One system, one price",
    homeSubtitle:
      "Everything a property needs to operate and sell, without five vendors and without a commission per booking.",
    empty:
      "We could not load the plans right now. They are monthly, per property, with no commission per booking and no lock-in: [write to us](/contacto) and we will send them with the numbers.",
    matrix: {
      caption: "What each Roombir plan includes",
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

  createAccount: {
    meta: {
      title: "Create account · roombir",
      description:
        "Tell us about your property and we will email you the access to create your account.",
    },
    eyebrow: "Get started",
    title: "Tell us about your *property*.",
    lead: "Four details and we email you the access. Setup takes an afternoon and you do it yourself.",
    checks: [
      "Nine-step guided setup, **nothing to install**",
      "We migrate your bookings and rates with you",
      "Your own booking engine, on your site and your LinkHub",
      "Real people answering, in your language",
    ],
    steps: [
      { title: "You fill in the form", text: "Four details about the property and your email." },
      { title: "The access arrives", text: "A personal, single-use link that opens the sign-up." },
      { title: "You set your password", text: "And walk through the nine-step guided setup." },
    ],
    form: {
      groupProperty: "Your property",
      groupContact: "Your details",
      hotelName: "Property name",
      hotelNamePlaceholder: "Los Alamos Hotel",
      lodgingType: "Type",
      lodgingTypes: {
        hotel: "Hotel",
        apart_hotel: "Apart hotel",
        hostel: "Hostel",
        cabins: "Cabins",
        inn_bnb: "Inn or B&B",
        apartment: "Apartments",
        house: "House",
        country_house: "Country house",
        resort: "Resort",
        lodge: "Lodge",
        glamping: "Glamping",
        camping: "Campsite",
        villas: "Villas",
        other: "Other",
      },
      units: "Rooms or units",
      unitsPlaceholder: "12",
      unitsHint: "The ones you can sell today.",
      country: "Country",
      countryCommon: "Most common",
      countryAll: "All countries",
      city: "City",
      cityPlaceholder: "San Martin de los Andes",
      contactName: "Your name",
      contactNamePlaceholder: "First and last name",
      email: "Your email",
      emailPlaceholder: "you@yourproperty.com",
      emailHint: "This is where the access goes, so use one you actually read.",
      phone: "Phone or WhatsApp",
      phonePlaceholder: "+1 555 …",
      optional: "optional",
      choose: "Choose an option",
      honeypot: "Do not fill in",
      submit: "Get my access",
      sending: "Sending…",
      legal:
        "We use your details only to give you access and help you set up. You can ask us to delete them at any time. More in the [privacy policy](/legal/privacidad).",
      errors: {
        hotelName: "Enter the name of your property.",
        lodgingType: "Choose the type of property.",
        units: "Tell us how many rooms or units you have.",
        country: "Choose the country.",
        city: "Enter the city.",
        contactName: "Enter your name.",
        emailRequired: "Enter your email.",
        emailInvalid: "That email does not look valid.",
        disposable: "Use a permanent address: the access is sent there.",
        rate: "Too many attempts in a row. Try again in a few minutes.",
        mail: "We could not send you the email. Try again in a few minutes.",
        generic: "We could not send it. Write to us at team@roombir.com.",
        network: "We could not connect. Check your connection and try again.",
      },
      done: {
        title: "Check your email",
        text: "We sent the access to {email}. The link is personal and works once.",
        textNoEmail: "We sent the access to your email. The link is personal and works once.",
        notes: [
          "If it does not show up in a few minutes, check spam or promotions.",
          "The link expires in 7 days.",
          "If you mistyped the address, fill in the form again.",
        ],
      },
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
    errorTail: "If it keeps failing, write to us at team@roombir.com.",
    legal:
      "We use your details only to contact you about roombir. You can ask us to delete them whenever you want. More in the [privacy policy](/legal/privacidad).",
    doneTitle: "Got it.",
    doneText:
      "We will write to you within a few hours. If you would rather not wait, you can start the setup right now: it is guided and you do it yourself.",
  },

  home: {
    hero: {
      l1a: "Take your",
      l1b: "property",
      l2: "out of the past",
      pill: "nothing\nto install",
      l3a: "and let it",
      l3b: "grow.",
      kicker: "Hospitality management system",
      lead: "Software for hotels, cabins, hostels and rentals: reservations, your own booking engine, website, revenue and an AI assistant, on a single database.",
    },

    works: {
      eyebrow: "What changes",
      title: "Run your whole property *from one place*.",
      cardLabel: "Booking updated",
      items: [
        {
          title: "No more double bookings",
          text: "Your website, your LinkHub and the front desk sell the same inventory. A night of a unit is sold once, and availability changes the moment it happens, nothing to sync.",
        },
        {
          title: "Hand the operation to the assistant",
          text: "Ask in one sentence: move a booking, change a rate, notify the guest. It does it with your permissions and shows you what it touched, with undo at hand.",
        },
        {
          title: "Charge the price each date deserves",
          text: "Revenue prices every date with the reasons in view (occupancy, pace, events, competitors) and applies it to the booking engine on its own.",
        },
      ],
    },
    // La habitación en 3D bajo la cinta: la cámara sigue al cursor.
    room: {
      eyebrow: "Built for properties",
      title: "Every room, *in its place*.",
      lead: "Bookings, housekeeping, rates and the guest for every unit live in the same database: what changes on one screen has already changed on all of them.",
      hint: "Move your cursor to look around",
      label: "3D illustration of a room",
    },
    swap: {
      eyebrow: "Why it exists",
      title: "What you *buy separately* today.",
      lead:
        "A small or mid-sized property should not need five vendors and a consultant to operate digitally. That is roombir's thesis, and it is what settles every product decision inside.",
      headOld: "What you buy separately today",
      headNew: "In roombir",
      rows: [
        { old: "PMS for bookings and rooms", now: "Bookings + Rooms areas" },
        { old: "Booking engine", now: "Public engine + Engine Studio" },
        { old: "Website builder", now: "Builder + renderer with your own domain" },
        { old: "Revenue management system", now: "Revenue area" },
        { old: "Link-in-bio and digital presence", now: "LinkHub + Online Presence" },
        { old: "Guest portal", now: "StayPass" },
        { old: "Assistant / automations", now: "Roombir AI" },
      ],
    },
    modules: {
      eyebrow: "What it is",
      title: "One system, *no bridge* between its parts.",
      lead:
        "These are not integrations syncing overnight: they are different views of the same data. Change a category's price and the engine shows it right away, with nothing to publish.",
      items: {
        ia: {
          title: "Roombir AI",
          desc: "The whole operation in one conversation. It creates and moves bookings, changes rates and edits your site, and reads a dated, fifteen-source briefing before it says anything about your destination.",
        },
        pms: {
          title: "PMS",
          desc: "Properties, rooms, bookings and the engine your guest sees, on a single inventory. You load once and run it on the calendar.",
        },
        informes: {
          title: "Reports",
          desc: "Occupancy, revenue, cancellations, channels, and what is loaded wrong today.",
        },
        revenue: {
          title: "Revenue",
          desc: "The price for every date with the trace of why, and the rate that walks into the engine on its own.",
        },
        marketing: {
          title: "Marketing",
          desc: "Website with an assistant, brand, photos, reviews and LinkHub, all reading your bookings.",
        },
      },
    },
    how: {
      eyebrow: "How it works",
      title: "From the property to the booking, *in four steps*.",
      lead:
        "You load it once and use it in the order a front-desk day happens. There is no module you have to connect to another.",
      steps: [
        {
          title: "You load the property and the rooms",
          text: "Type, address, currency and contact; then the categories and the units, as a pool or as named units. Availability initializes itself.",
          href: "/producto/pms",
          link: "See the PMS",
        },
        {
          title: "You publish your site and your link with the engine inside",
          text: "The site and the LinkHub come from the same brand and read the same inventory. The guest sees the price for every day and books on their own.",
          href: "/producto/marketing",
          link: "See Marketing",
        },
        {
          title: "Bookings come in and you run them",
          text: "Daily board, list and tape chart calendar. A night of a unit sells exactly once, and the email to the guest goes out with nothing to configure.",
          href: "/producto/pms",
          link: "See Bookings",
        },
        {
          title: "The numbers and the price, without a spreadsheet",
          text: "Reports over the same bookings, Revenue with the reason behind every rate, and an assistant you ask for the rest in one sentence.",
          href: "/producto/ia",
          link: "See Roombir AI",
        },
      ],
    },
    adapt: {
      eyebrow: "Why Roombir",
      title: "There are plenty of systems. Nearly all of them are the same one.",
      lead: "The market is full of generic solutions: the same screens, the same steps and the same rules for a city hotel as for six cabins by a lake. With them, you are the one who adapts. Roombir does the opposite: it starts from your property, not from a template.",
      heading: "Roombir adapts to your property",
      cta: "Explore the platform",
      clip: "The booking engine in use: a new booking lands on the daily dashboard and takes its nights on the calendar.",
      world: {
        label: "Built to connect you with the world",
        title: "Every property is a world of its own, and Roombir has *the right solution* for each one.",
        text: "A city hotel, a mountain inn and a cabin resort don't sell or work the same way. Roombir is set up around your type of property, your units and your currency, and puts your availability on your website, your booking engine and your link so guests can find you and book from anywhere.",
        caption: "From a city hotel to a cabin by the lake, the system takes the shape of your property.",
        alt: "A guest looks out over a mountain lake from the edge of an infinity pool.",
      },
      easy: {
        label: "So easy you use it from day one",
        title: "You don't need to be technical *or know how to read data*.",
        text: "Roombir is made to be easy to use. You get assistance from day one, and all the complexity of running the property (bookings, rates, availability, reports) is brought together in one place and explained so you understand it at a glance.",
        clip: "The Roombir PMS in use: properties, the booking calendar and search.",
      },
      ai: {
        label: "Made for the age of AI",
        title: "Your property has to join the age of AI *or fall behind*.",
        text: "Today the internet offers hundreds of kinds of AI, hundreds of millions of data points and endless strategies. At Roombir we know your property and give you the best AI, with the concrete data and the best strategy to send your occupancy soaring.",
        clip: "Roombir AI in use: it loads rates from a file, answers which channel cancels the most and blocks a unit from the chat.",
      },
    },
    spaces: {
      eyebrow: "What nobody else has",
      title: "Every desk sees *its* system, not yours.",
      lead:
        "Front desk, housekeeping, marketing and admin work on the same data, but each workspace has its own menu, its own home screen and its own permissions. Nobody learns to ignore half an application.",
      items: [
        "The menu builds itself: a marketing workspace **does not show** the Bookings area.",
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
      eyebrow: "Roombir AI",
      title: "An assistant that *operates*, not one that suggests.",
      lead:
        "It is not a chat explaining where to click. It checks availability, creates bookings, moves a stay with a preview, adjusts rates, approves RMS events or publishes a site. And it does all of that with your permissions, not its own.",
      items: [
        "Whatever you can do in the app, you can ask for in a sentence.",
        "You see the turn transcript: which tool it used and what came back.",
        "It answers with actionable cards, not just text.",
        "Three permission layers: filtered before the turn, context in the prompt and evaluation on every call.",
      ],
      link: "See Roombir AI",
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
          key: "reservations@roombir.com",
          title: "You do not configure a mail server",
          text: "Every guest email — confirmation, token, change notice — leaves from roombir's domain with your inbox as reply-to. It is one of the classic frictions of setting up a PMS and it was removed on purpose.",
        },
      ],
    },
    stats: {
      eyebrow: "The real size",
      title: "Not promises: *it is already built*.",
      lead:
        "Roombir is in a market pilot, so we are not going to show you an inflated hotel counter yet. What we can show is what is inside the product today.",
      items: [
        { value: "21", label: "apps you can switch on per workspace" },
        { value: "38", label: "guided tours over the real screen" },
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
    commitments: {
      eyebrow: "What others don't say",
      title: "Three things you can *verify* before talking to anyone.",
      lead:
        "In this category what is missing comes out in week three and the demo arrives before the product. Here it goes the other way: each of these three lines has a place where it can be checked.",
      verify: "Verify",
      items: [
        {
          key: "traza",
          title: "Every AI action, in plain sight",
          text: "The assistant acts with your permissions and leaves the transcript of every turn: which tool it used, with what data and what changed, **with undo at hand**.",
          href: "/producto/ia",
        },
        {
          key: "ia",
          title: "An AI can read this site",
          text: "It has its own `llms.txt` with the same numbers as this page. We practice it before asking it of you.",
          href: "/llms.txt",
        },
        {
          key: "alta",
          title: "Guided sign-up, nothing to install",
          text: "You sign up on your own, in nine steps saved on the server, and you get in through the browser. **No call beforehand** and no onboarding to wait for.",
          href: "/crear-cuenta",
        },
      ],
    },
    day: {
      eyebrow: "An ordinary Tuesday",
      title: "The same day, *with and without* roombir.",
      lead:
        "Not a promise of more bookings: a front-desk day at a twelve-unit property. The left is what we hear on the first call; the right is what the system does at each of those moments.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "08:10",
          old: "Three WhatsApp messages asking about weekend availability. You open the spreadsheet to answer one by one.",
          now: "All three already looked at the engine calendar: price and units left, day by day. Two booked on their own.",
        },
        {
          time: "09:30",
          old: "A guest paid a deposit in pesos a month ago. You recalculate by hand what is still owed, at today's dollar.",
          now: "The booking keeps the conversion and freezes it at check-in. The balance did not move.",
        },
        {
          time: "11:00",
          old: "García arrives and you don't know which room. Neither does housekeeping.",
          now: "Front desk asks the assistant to move him to 203 and email him. Housekeeping sees it on its board without anyone messaging.",
        },
        {
          time: "14:20",
          old: "You find out the Alerce cabin was sold twice for Saturday.",
          now: "Impossible: every night of every unit is a unique lock in the database. The second booking never got in.",
        },
        {
          time: "17:00",
          old: "The person who built the website isn't answering and the suite price is still old on the site.",
          now: "You changed the price in Rates and it is already in the engine, on the site and in the LinkHub. You published nothing.",
        },
        {
          time: "19:45",
          old: "You wonder whether Saturday should go up. You decide on a hunch.",
          now: "Revenue shows +15% with the reason written out: occupancy, pace and an event three days away. You accept and it goes to the engine.",
        },
      ],
    },
    compare: {
      eyebrow: "If you are comparing",
      title: "Roombir *against* the ones you already know.",
      lead:
        "Comparisons written to be useful even if you don't choose us: what each one does better, what we don't do yet, and when the other one is the right call. Verified against their public sites, with a date.",
      link: "See all comparisons",
    },
    faq: [
      {
        q: "Does it work for cabins and apartments, or only hotels?",
        a: "Both, and not with the same trick. A category can sell as a **pool** — ten interchangeable doubles, the guest buys “a double” — or as a **single unit 1:1**, where the category wraps one unit with its own name. You choose per category, not per system, so a complex with six cabins and two standard rooms coexists without forcing anything.",
      },
      {
        q: "Do I need a channel manager to use roombir?",
        a: "Not to operate, but let us say it plainly: **Roombir does not have a channel manager yet**. If you sell on Booking or Expedia, that availability is reconciled by hand today. The system is built so that direct bookings — your site, your LinkHub, your engine — stop getting lost in a chat, which is where most of the revenue you are not controlling comes from.",
      },
      {
        q: "How do I collect payment?",
        a: "At check-in, in person. **There is no integrated payment gateway yet.** What there is, is real multi-currency: you store prices in a base currency, charge in another, and the conversion stays live until check-in and freezes there so the amount charged does not change afterwards.",
      },
      {
        q: "Do I have to install or configure anything?",
        a: "You get in through the browser. Setup is nine guided steps saved on the server — you can drop it halfway and continue from your phone — and there is no mail server to configure: **every guest email leaves from roombir's domain** with your inbox as reply-to.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes. Every published site takes its own hostname, and each language variant can have its own. LinkHub also has its own public address, with a printable QR code.",
      },
      {
        q: "Can the AI do anything at all inside my system?",
        a: "No, and that is on purpose. The assistant operates **impersonating your real identity** with a short-lived permission reissued on every call. Before the turn, the tools your user cannot use are taken off the table, and every operation is re-evaluated against the service policy. If access is revoked mid-conversation, the next action fails and the assistant explains why.",
      },
      {
        q: "How is it different from Cloudbeds or Little Hotelier?",
        a: "In three things you can verify: revenue management and the AI assistant are part of the system, not add-on modules; the assistant executes instead of suggesting, and leaves the transcript of every turn; and everything (bookings, engine, website, revenue) reads the same database, with nothing to sync.",
      },
    ],
    cta: {
      title: "Get it running *this week*.",
      lead:
        "Setup is guided and you do it yourself. If you would rather have us alongside for loading rooms — the step that costs the most — we do it on a short call.",
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
        "Roombir AI, the PMS (properties, rooms, bookings and engine), reports, revenue and marketing, on a single database. What each part does and how they connect.",
    },
    hero: {
      eyebrow: "The platform",
      title: "Every part of the system, *on the same data*.",
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
      title: "21 apps that *switch on and off*.",
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
      items: {
        ia: {
          title: "Roombir AI",
          desc: "An assistant that operates the whole system in one conversation: bookings, rates, rooms, the site, revenue. It starts from a briefing on your destination with fifteen dated sources and works with your permissions.",
        },
        pms: {
          title: "PMS",
          desc: "Properties with their own currency and team; categories sold as a pool or as named units; daily board, list and tape chart calendar; and the engine where the guest sees the price for every day and books on their own, in ten currencies.",
        },
        informes: {
          title: "Reports",
          desc: "Occupancy, average rate, revenue, cancellations and channels over the same bookings you operate, plus a section with what is loaded wrong today.",
        },
        revenue: {
          title: "Revenue",
          desc: "A decision document per date with the full trace, pace against your own history, competitors, events at your destination and the rate that goes into the engine when you accept it.",
        },
        marketing: {
          title: "Marketing",
          desc: "The website editor with an assistant, brand, photo library, galleries, reviews, LinkHub and the layer that makes your property readable by an AI.",
        },
      },
    },
    ia: {
      eyebrow: "The layer that joins them",
      title: "The assistant sees *the whole system*, not one module.",
      lead:
        "Because the data is one, the agent can do in a sentence what in another stack is three tabs and two exports: look at pace, adjust a rate and publish the promo on the site.",
      items: [
        "It operates bookings, rates, availability, rooms, properties, revenue, marketing, files, company and system.",
        "Rich answer blocks: booking and revenue cards with buttons that execute, subject to the same permission check.",
        "Session history filtered by the active workspace.",
      ],
      link: "See Roombir AI",
    },
    stats: [
      { value: "21", label: "apps you can switch on" },
      { value: "30", label: "adaptive dashboard widgets" },
      { value: "38", label: "guided tours" },
    ],
    ask: "Looking for something specific?",
    askLink: "Ask us",
    cta: {
      title: "Come *look inside*.",
      lead:
        "Setup is guided. If you would rather we showed you first, book a demo and we will walk it through with your data.",
      steps: [
        "You create the company and the property.",
        "You load rooms and units.",
        "The engine and the site are ready to publish.",
      ],
    },
  },

  pms: {
    meta: {
      title: "PMS",
      description:
        "Properties, rooms and bookings in one product: set up the property and the rooms once, bookings come in through the engine or by hand, and you run them from the day panel and the calendar.",
    },
    hero: {
      eyebrow: "PMS · Properties, rooms and bookings",
      title: "Your whole property, *in one place*.",
      lead:
        "You load the property and the rooms once. Bookings come in through your engine or you enter them yourself, and you run them on the daily board and the calendar. It is a single database: what changes on one screen has already changed on all of them.",
    },
    propiedades: {
      eyebrow: "01 · Properties",
      title: "Several properties, *one single account*.",
      lead:
        "A hotel in Mendoza and six cabins in Villa La Angostura, under the same login. Each property with its own currency, time zone and team; each person sees only the ones that are theirs.",
      items: [
        "**Access by property and by role**: whoever runs the front desk at the cabins gets into the cabins, with the front-desk menu; whoever administers sees everything.",
        "**Workspaces by role** — front desk, housekeeping, marketing, revenue — each with its own menu and home screen.",
        "**Everything else hangs off the property**: rooms, bookings, brand, website, LinkHub and reviews load once. Change the phone number and it changes everywhere.",
        "**The second property copies the first one's structure**, and you switch between them with a picker up top, with no logging out and back in.",
      ],
    },
    habitaciones: {
      eyebrow: "02 · Rooms",
      title: "By category or by unit, *however you sell*.",
      lead:
        "A hotel sells a superior double and assigns 203 afterward. A complex sells the Alerce cabin, with its photos and its price. Roombir does both, and both at once in the same property.",
      items: [
        "**Category pool**: the guest buys \"a superior double\" and the system assigns the room, minimizing gaps or spreading out wear. Or it leaves it unassigned for the front desk to decide.",
        "**Named unit**: the category wraps exactly one unit. The guest books the Alerce cabin, with its photos and its price.",
        "**Six statuses with history** — available, occupied, cleaning, maintenance, blocked and checkout pending —, a board by floor and an occupancy floor plan.",
        "**Bulk loading in two steps** and blocks by half-day, which use the same lock as a booking.",
      ],
    },
    reservas: {
      eyebrow: "03 · Bookings",
      title: "Every moment of the shift, *its own screen*.",
      lead:
        "Eight views over the same data: moving a booking on the calendar changes the room, frees the night in the engine and shows up in the report.",
      items: [
        {
          title: "Daily board",
          desc: "Today's arrivals and departures, with actionable cards. It's the screen the front desk opens the shift with.",
        },
        {
          title: "All bookings",
          desc: "The list with filters and a side panel that opens without leaving it: summary, activity and notes. From there you assign a room and change the status.",
        },
        {
          title: "Calendar",
          desc: "Rooms by day. You drag a booking or stretch it, and before you drop it you see if it clashes with another and what happens to the price.",
        },
        {
          title: "New booking",
          desc: "The one that came in by phone or WhatsApp: guest, dates, occupancy by age, source channel, promotions and notes.",
        },
        {
          title: "Rates",
          desc: "Base price per category and rate plans with validity dates, currency and minimum stay.",
        },
        {
          title: "Availability",
          desc: "A traffic light per day — free, partial, full, closed — and restrictions: closed to arrival or departure, minimum and maximum stay.",
        },
        {
          title: "Promotions",
          desc: "Automatic or with a code, by percentage, fixed amount or price per night, with their presentation ready for your site.",
        },
        {
          title: "Settings",
          desc: "Currency, confirmation, stay rules, times and how rooms get assigned. Plus the Engine Studio for texts and colors.",
        },
      ],
    },
    motor: {
      eyebrow: "PMS · Booking engine",
      title: "A calendar that *answers before you ask*.",
      lead:
        "The usual date picker asks for two dates and that's it. The engine's shows, day by day and according to what you enable, what the person was about to ask you over WhatsApp before booking.",
      items: [
        "**Price from** on every day, calculated with the same rates the engine charges.",
        "**Remaining units**: your real inventory, not a made-up counter.",
        "**Closed days**, closed to arrival or to departure, and the **minimum-night stay** when picking check-in.",
        "**The guest confirms by email or you confirm**: pending bookings expire on their own, and the email goes out from roombir's domain with nothing to configure.",
      ],
    },
    prices: {
      eyebrow: "Every rate, on its own",
      title: "The price of every night, *with its reason*.",
      lead:
        "When the engine has to say what a night costs, it resolves a fixed chain, always in the same order. Knowing which rung every price comes from is what lets you trust the system without auditing it every morning.",
      items: [
        "**First, what you accepted in Revenue**: if there's a recommended, accepted rate for that date, it wins.",
        "**Then, the rate plan** in force for that category and that date, with its minimum stay.",
        "**If there's no plan, the category's base price**. Every cabin can have its own.",
        "**On top of everything, promotions**: discount or surcharge — a promo can also raise the price in high season — automatic or with a code.",
      ],
    },
    currency: {
      eyebrow: "Ten currencies",
      title: "What the guest saw *does not move on you*.",
      lead:
        "The guest looks at the price in their currency and you charge in yours. The booking always stays in your base currency and the conversion freezes at check-in: the amount you charge does not change afterward.",
      items: [
        "US dollar, Argentine peso, real, Chilean peso, Colombian peso, Mexican peso, sol, Uruguayan peso, euro and pound.",
        "For Argentine pesos you choose the rate: official, blue, MEP or CCL.",
        "Rates update every three hours and get flagged as stale if the source did not respond.",
        "Reports add up directly, because everything stays in your base currency.",
      ],
    },
    where: {
      eyebrow: "Where the engine goes",
      title: "On your site, your bio *and for an AI*.",
      items: [
        {
          title: "Your site",
          desc: "A section of the website editor that wires itself to your inventory.",
        },
        {
          title: "Your LinkHub",
          desc: "The link in your Instagram bio opens the same engine, identical to the one on your site.",
        },
        {
          title: "A direct link",
          desc: "A page of its own with your property's address, to send over WhatsApp if you don't have a site yet.",
        },
        {
          title: "AI agents",
          desc: "With the agentic layer on, an outside assistant can read your availability and complete a booking. [How it works](/producto/marketing#agentes).",
        },
      ],
    },
    stats: [
      { value: "8", label: "views over the same data to run bookings" },
      { value: "10", label: "currencies, with blue, MEP, CCL or official for ARS" },
      { value: "6", label: "room statuses, with history" },
      { value: "1", label: "lock per unit and night in the database" },
    ],
    faq: [
      {
        q: "How do I get paid for bookings?",
        a: "At check-in, in person. **There is no integrated payment gateway yet.** What there is is real multi-currency: the guest looks in their currency, you charge in yours and the conversion freezes at check-in.",
      },
      {
        q: "Does it connect to Booking or Expedia?",
        a: "Not yet: **Roombir has no channel manager**. If you sell on OTAs, that availability is reconciled by hand today. The system is built so that the direct booking — your site, your LinkHub, your engine — stops getting lost in a chat.",
      },
      {
        q: "What happens if two people book the same night at the same time?",
        a: "One of the two fails. Every night of every unit is a **unique lock in the database** — the key is the unit plus the date — so the second write does not get in. It is not a validation in the code that can be dodged: it is the database that stops it.",
      },
      {
        q: "I have cabins and rooms. Can I have both?",
        a: "Yes, in the same property. Cabins go as named units and rooms as a pool, and they coexist on the same calendar and in the same engine.",
      },
      {
        q: "Who confirms the booking?",
        a: "You choose. In one mode the booking is born pending and **the guest confirms it** with a link that reaches them by email. In the other, it stays pending until **the front desk accepts it**. Either way, pending bookings expire on their own.",
      },
    ],
    cta: {
      title: "Load the property and the rooms; *the engine is ready*.",
      lead:
        "Sign-up is guided and you do it yourself. If you'd rather we walk you through loading the rooms — the step that costs the most — we do it on a short call.",
      steps: [
        "You create the property and load categories and units.",
        "You configure the engine in the Studio.",
        "You share the link and stop losing enquiries in the chat.",
      ],
    },
  },

  ia: {
    meta: {
      title: "Roombir AI",
      description:
        "An assistant that operates your property in one conversation: it creates and moves bookings, changes rates and edits the site, with your permissions. Before it says anything about your destination it reads a briefing with fifteen dated sources.",
    },
    hero: {
      eyebrow: "Roombir AI",
      title: "Your whole property, *in one conversation*.",
      lead:
        "Roombir AI operates the whole system: it creates and moves bookings, changes rates, blocks units and edits your site. Before it says anything about your destination, it reads a briefing built from fifteen dated sources. And it works with your permissions, not its own.",
    },
    ask: {
      eyebrow: "What you can ask it",
      title: "Ask it your way, *and it gets done*.",
      lead:
        "There are no commands to learn and no screen to hunt for. These are requests from a normal day, and what it does with each one.",
      items: [
        {
          area: "Bookings",
          ask: "Move García from 203 to 204 starting Thursday",
          does: "It finds the booking, checks that 204 is free those nights and moves it. It hands back the card with the change.",
        },
        {
          area: "Rates",
          ask: "Raise the superior double 10% on October Saturdays",
          does: "It tells you which dates that touches and applies it to the rate plan once you confirm.",
        },
        {
          area: "Rooms",
          ask: "Block the Alerce cabin Tuesday afternoon for maintenance",
          does: "It creates the block from the afternoon on: Tuesday night comes off the engine and the morning stays sellable.",
        },
        {
          area: "Website",
          ask: "Change the homepage title and publish it",
          does: "It edits the text in your site's draft and publishes it. If you don't ask it to publish, it stays a draft.",
        },
        {
          area: "Destination",
          ask: "What should I do about the Vendimia festival?",
          does: "It reads Mendoza's briefing — date, distance, nearby holidays, flight routes — and your pace for those nights, and suggests what to do with the rate and the minimum stay.",
        },
        {
          area: "Reports",
          ask: "Which channel cancels on me the most?",
          does: "It reads the channel report and answers with the number and the channel. With fewer than three bookings, it won't claim it.",
        },
      ],
    },
    dossier: {
      eyebrow: "Tourism snapshot",
      title: "It knows where *your destination* stands.",
      lead:
        "Before it says anything about your area, Roombir AI builds a briefing from fifteen public sources, every figure dated: what is happening this month and what is coming. The model does not go searching: it reads what the system already verified.",
      items: [
        "**Holidays, long weekends and school breaks**, yours and those of the countries that visit you.",
        "**Events in your radius**: sports, culture, conferences and fairs, filtered by distance, not by country.",
        "**Which flights reach your area and from where**: the routes observed landing at nearby airports.",
        "**Weather, the exchange rate of your markets and alerts** for security or natural hazards.",
      ],
    },
    compare: {
      eyebrow: "The difference",
      title: "Generic chat searches; *this one has a briefing*.",
      lead:
        "A general-purpose AI chat is very good at writing, and it does not see your system: it searches the web, gathers what it finds and summarizes it for you. Roombir AI starts from your data and from fixed sources. If you also ask it to search the web, it does that too.",
      headCriterion: "What matters",
      headUs: "Roombir AI",
      headThem: "A general-purpose AI chat",
      rows: [
        {
          label: "Sees your bookings, rates and rooms",
          us: "Yes: the same ones you operate",
          usTone: "ok",
          them: "No, unless you paste in the data",
          themTone: "no",
        },
        {
          label: "Makes the changes",
          us: "Yes, with your permissions",
          usTone: "ok",
          them: "No: it explains where to click",
          themTone: "no",
        },
        {
          label: "Where your destination data comes from",
          us: "A briefing with fifteen fixed, dated sources",
          usTone: "ok",
          them: "Whatever it finds on the web that time",
          themTone: "mid",
        },
        {
          label: "If a figure is missing",
          us: "It tells you it's missing",
          usTone: "ok",
          them: "It doesn't always tell the difference",
          themTone: "mid",
        },
        {
          label: "Searches the web",
          us: "If you ask it to",
          usTone: "ok",
          them: "Yes",
          themTone: "ok",
        },
        {
          label: "Writes, summarizes and translates",
          us: "Yes",
          usTone: "ok",
          them: "Yes",
          themTone: "ok",
        },
      ],
      legend: {
        ok: "yes",
        mid: "it depends",
        no: "no",
        info: "not rated",
      },
    },
    strategic: {
      eyebrow: "Strategic turn",
      title: "\"I want more bookings\" *is a request too*.",
      lead:
        "An open-ended goal doesn't fit the usual pipeline. Roombir AI reads your whole operation — upcoming occupancy, pace, channels, competitors, what's still unconfigured — and picks up to three moves using fixed rules, not the model's taste. It proposes a plan with steps you can execute, and each step asks for your confirmation.",
      items: [
        "Reads **18 sources from your own operation** in parallel, in about a second.",
        "The system picks the moves by rule; the model diagnoses and writes them up.",
        "A figure that could not be read comes in as missing: it is never filled in with a zero.",
        "If you already have a plan running, it picks that up instead of proposing another one.",
      ],
    },
    perms: {
      eyebrow: "Permissions",
      title: "It operates with *your* permissions, not its own.",
      lead:
        "It's the delicate part of any assistant inside a management system. Here it's solved in layers applied at different moments, and the last one sits where it can't be skipped: at the point of execution.",
      items: [
        "**What your user can't do is never offered to the model**: front desk does what front desk can do; admin, what admin can do.",
        "**What can't be undone asks you to type it**: to confirm it you have to type out by hand what you're about to delete.",
        "**Deletions ask for a button**, not a \"yes\" buried in the conversation.",
        "**You see the transcript** of every turn: which tool it used, with what data and what came back.",
      ],
    },
    talk: {
      eyebrow: "How you talk to it",
      title: "You type, you talk, *you show it*.",
      lead:
        "Inside the desktop, in whichever workspace you're in, with that workspace's own history: front desk doesn't see marketing's conversations.",
      items: [
        {
          title: "By voice",
          desc: "You dictate instead of typing. It works in any browser, because the transcription happens on our side.",
        },
        {
          title: "Screenshots and PDFs",
          desc: "You paste a screenshot or drop a PDF — a rate spreadsheet, an OTA listing — and it works from that.",
        },
        {
          title: "Audio and video",
          desc: "A short audio clip or video gets summarized before the answer and comes in as context. Up to two minutes of audio.",
        },
        {
          title: "The web, if you ask for it",
          desc: "When you ask it to search outside, it does. Otherwise, it works with your system and your destination's briefing.",
        },
      ],
    },
    stats: [
      { value: "15", label: "sources in the destination briefing" },
      { value: "3", label: "model tiers, picked per turn" },
      { value: "5", label: "languages" },
    ],
    faq: [
      {
        q: "Can it do anything at all?",
        a: "Everything your user can do in the app, yes: it **covers every screen in the system**, except what we left out on purpose, like the guest flow or login. What your user can't do is never offered to the model: front desk does what front desk can do, not what admin can.",
      },
      {
        q: "What happens if it makes a mistake?",
        a: "That's why there are brakes. Whatever writes data, it confirms with you in the conversation. Whatever it deletes asks for a button. Whatever can't be undone asks you to type out by hand what you're about to delete. And on the site it works on the draft: publishing is a separate step.",
      },
      {
        q: "Does it make up data about my destination?",
        a: "The system builds the briefing, not the model: fifteen public sources read with fixed rules and stored with their date. If a source didn't respond, the figure shows up as **missing** and the assistant has to say so. A made-up zero is worse than a missing figure, because it gets cited as evidence.",
      },
      {
        q: "Does it search the internet?",
        a: "If you ask it to, yes. By default it works with your system and the destination briefing, which is verified information, one source per topic. Open search is there for when you want it.",
      },
      {
        q: "Which AI model does it use?",
        a: "It's not tied to one provider. Every turn gets classified and routed to the model that fits: a fast one for queries, a more capable one when it needs to write data or analyze. When a better model comes out, we switch it on our side and you don't have to do anything.",
      },
    ],
    cta: {
      title: "Ask it something *that takes four tabs* today.",
      lead:
        "The assistant is genuinely useful once your system is loaded underneath. Start with sign-up, load a property and ask it something real.",
      steps: [
        "You sign up and load the property.",
        "You open Roombir AI from the desktop.",
        "You ask it something real and watch the transcript.",
      ],
    },
  },

  propiedades: {
    meta: {
      title: "Properties",
      description:
        "Several properties under one company and one login: each with its own currency, time zone and team, and each person with access only to the properties and screens that are theirs.",
    },
    hero: {
      eyebrow: "Properties",
      title: "Several properties, *one single account*.",
      lead:
        "A hotel in Mendoza and six cabins in Villa La Angostura, under the same login. Each property with its own currency, time zone and team; each person sees only the ones that are theirs.",
    },
    access: {
      eyebrow: "Access",
      title: "Each person, *only their own*.",
      lead:
        "Access is granted by property and by role. Whoever runs the front desk at the cabins gets into the cabins, with the front-desk menu; whoever administers sees everything.",
      items: [
        "**Access by property**: a person can have all of them or only some, and if you invite them from one property they're limited to it.",
        "**Ten administrative capabilities** granted one at a time: creating properties, managing users, assigning workspaces, activating apps, billing and websites, among others.",
        "**Workspaces by role** — front desk, housekeeping, marketing, revenue — each with its own menu and home screen.",
        "**An admin workspace** that sees the full catalog, including apps added later.",
      ],
    },
    sheet: {
      eyebrow: "The record",
      title: "What *defines* every property.",
      items: [
        {
          title: "Property type",
          desc: "Hotel, resort, aparthotel, hostel, cabins, villa, short-term rental or glamping. The type decides how everything else starts out.",
        },
        {
          title: "Address with a map",
          desc: "You paste the coordinates from Google Maps and it's placed. That's where your site's map and your destination briefing come from.",
        },
        {
          title: "Currency, time zone and language",
          desc: "Each property's own, not the company's: one in pesos and another in dollars coexist without a problem.",
        },
        {
          title: "Public contact and social",
          desc: "Email, phone, WhatsApp, Instagram, Facebook and TikTok, loaded once for the site, LinkHub and the engine.",
        },
      ],
    },
    root: {
      eyebrow: "The root",
      title: "Everything else *hangs off the property*.",
      lead:
        "Rooms, bookings, brand, website, LinkHub, reviews and galleries all load onto a property. That's why they load once: change the phone number and it changes everywhere.",
      items: [
        "**Property templates**: the second one starts by copying the first one's workspaces and apps.",
        "**Each property has its own engine, its own site and its own LinkHub**, with its own brand.",
        "**Workspaces that don't come apart by mistake**: one with bookings in progress or active users stays locked.",
        "**Deleting a property** can only be done by whoever owns the company.",
      ],
    },
    move: {
      eyebrow: "Between properties",
      title: "Switching properties *is not switching systems*.",
      items: [
        {
          title: "One picker up top",
          desc: "The company, property and workspace are all picked in the same place, with no logging out and back in.",
        },
        {
          title: "One search for all of them",
          desc: "Ctrl or Cmd + K finds bookings, properties, units and screens. It finds or it doesn't: it never makes anything up.",
        },
        {
          title: "Notifications that know where to go",
          desc: "If the notification belongs to another property, the system switches property before opening it.",
        },
      ],
    },
    faq: [
      {
        q: "How many properties does each plan include?",
        a: "Every plan states it with a number in [pricing](/precios), from the same catalog that bills your account.",
      },
      {
        q: "Can I give someone access to just one property?",
        a: "Yes. If you invite them from that property, they're limited to it. And inside the property, the workspace decides which screens they see.",
      },
      {
        q: "Can I have a hotel and cabins in the same company?",
        a: "Yes, and in the same property too: each category sells as a pool or as a named unit. It's explained in [Rooms](/producto/pms).",
      },
],
    cta: {
      title: "Load the first; *the second copies its structure*.",
      lead:
        "Sign-up creates the company and the first property. The next ones start from a template.",
      steps: [
        "You create the company and the first property.",
        "You invite your team with access by property.",
        "You add the second one from a template.",
      ],
    },
  },

  habitaciones: {
    meta: {
      title: "Rooms",
      description:
        "Categories sold as a pool of interchangeable rooms or as named units, inside the same property. Six operational states with history, a floor plan, bulk loading and a lock per night.",
    },
    hero: {
      eyebrow: "Rooms",
      title: "By category or by unit, *however you sell*.",
      lead:
        "A hotel sells a superior double and assigns 203 afterward. A complex sells the Alerce cabin, with its photos and its price. Roombir does both, and both at once in the same property.",
    },
    dual: {
      eyebrow: "Two ways to sell",
      title: "Every category chooses *how it sells*.",
      lead:
        "The mode is set category by category, with a default for the property. So a complex with six cabins and two rooms sells the cabins by name and the rooms as a pool, on the same calendar.",
      items: [
        "**Category pool**: the guest buys \"a superior double\" and the system assigns the room, minimizing gaps or spreading out wear. Or it leaves it unassigned for the front desk to decide.",
        "**Named unit**: the category wraps exactly one unit. The guest books the Alerce cabin, with its photos and its price.",
        "**Switching modes gets logged**, with the reason, and there's a tool to migrate categories that already have bookings.",
        "**Every booking keeps the mode it was born with**: changing the setting later does not rewrite history.",
      ],
    },
    states: {
      eyebrow: "Room status",
      title: "Statuses that *rule out the impossible*.",
      lead:
        "Six statuses — available, occupied, cleaning, maintenance, blocked and checkout pending — and a rule for every change. From occupied you can only move to checkout pending: nobody frees up a room with the guest still inside.",
      items: [
        "**History per unit**: who changed which status, when and with what note.",
        "**A board by floor and by category**, with filters, to read the property at a glance.",
        "**Occupancy floor plan**, by floor, with date navigation.",
        "**Housekeeping changes statuses** without seeing rates or revenue: their workspace does not have them.",
      ],
    },
    load: {
      eyebrow: "Loading",
      title: "You load it once, *everyone uses it*.",
      items: [
        {
          title: "Bulk loading in two steps",
          desc: "A preview flags a repeated code before anything is created; then they're all created together, or none at all.",
        },
        {
          title: "Blocks by half-day",
          desc: "An afternoon maintenance block locks that night and leaves the morning sellable. It uses the same lock as a booking.",
        },
        {
          title: "Each category's record",
          desc: "Adult and child capacity, size, base price, photos and amenities picked from a catalog.",
        },
        {
          title: "One single inventory",
          desc: "The category you load here is the one shown by the engine, the site, LinkHub and Revenue.",
        },
      ],
    },
    lock: {
      eyebrow: "The guarantee",
      title: "A night sells *exactly once*.",
      lead:
        "Every night of every unit is a unique lock in the database. If two people book the same thing at the same time, the second one does not get in: it is not a validation that can be skipped, it is the database itself that stops it.",
      items: [
        "Maintenance blocks use the same lock, so they take real inventory out.",
        "On cancellation, marking a no-show or checking out, the night frees itself.",
        "The departure night is not blocked: whoever arrives that day can check in.",
      ],
    },
    faq: [
      {
        q: "I have cabins and rooms. Can I have both?",
        a: "Yes, in the same property. Cabins go as named units and rooms as a pool, and they coexist on the same calendar and in the same engine.",
      },
      {
        q: "Can I change the mode later?",
        a: "Yes. The change asks for a reason and gets logged, and if the category already has bookings there's a tool to migrate it. Old bookings keep the mode they were born with.",
      },
      {
        q: "What happens if two people book the same night at the same time?",
        a: "One of the two fails. Every night of every unit is a **unique lock in the database** — the key is the unit plus the date — so the second write does not get in. It is not a validation in the code that can be dodged: it is the database that stops it.",
      },
      {
        q: "Does housekeeping staff see the rates?",
        a: "Not if you don't want them to. The housekeeping workspace comes with its own menu — room status and floor plan — with no rates or revenue.",
      },
    ],
    cta: {
      title: "Start with *your rooms*.",
      lead:
        "You load categories and units and availability initializes itself. The calendar and the engine are ready.",
      steps: [
        "You load the categories and choose how each one sells.",
        "You create the units all at once.",
        "Availability initializes itself.",
      ],
    },
  },

  motor: {
    meta: {
      title: "Booking engine",
      description:
        "The engine your guest sees — with a price for every day, remaining units and ten currencies — and the eight views where you run it: daily board, list, calendar, manual entry, rates, availability, promotions and settings. No commission per booking.",
    },
    hero: {
      eyebrow: "Booking engine",
      title: "Every booking, *from the first click to check-out*.",
      lead:
        "The guest sees the price for every day before picking dates and books on their own. You see it come in on the daily board, move it on the calendar and close it at check-out. No commission per booking, in ten currencies.",
    },
    guest: {
      eyebrow: "What the guest sees",
      title: "A calendar that *answers before you ask*.",
      lead:
        "The usual date picker asks for two dates and that's it. The engine's shows, day by day and according to what you enable, what the person was about to ask you over WhatsApp before booking.",
      items: [
        "**Price from** on every day, calculated with the same rates the engine charges.",
        "**Remaining units**: your real inventory, not a made-up counter.",
        "**Closed days**, closed to arrival or to departure, and the **minimum-night stay** when picking check-in.",
        "**Named cabin or category**, depending on how you sell, with its photos, its amenities and the extras offered before paying.",
      ],
    },
    views: {
      eyebrow: "What you see",
      title: "Every moment of the shift, *its own screen*.",
      lead:
        "Eight views over the same data: moving a booking on the calendar changes the room, frees the night in the engine and shows up in the report.",
      items: [
        {
          title: "Daily board",
          desc: "Today's arrivals and departures, with actionable cards. It's the screen the front desk opens the shift with.",
        },
        {
          title: "All bookings",
          desc: "The list with filters and a side panel that opens without leaving it: summary, activity and notes. From there you assign a room and change the status.",
        },
        {
          title: "Calendar",
          desc: "Rooms by day. You drag a booking or stretch it, and before you drop it you see if it clashes with another and what happens to the price.",
        },
        {
          title: "New booking",
          desc: "The one that came in by phone or WhatsApp: guest, dates, occupancy by age, source channel, promotions and notes.",
        },
        {
          title: "Rates",
          desc: "Base price per category and rate plans with validity dates, currency and minimum stay.",
        },
        {
          title: "Availability",
          desc: "A traffic light per day — free, partial, full, closed — and restrictions: closed to arrival or departure, minimum and maximum stay.",
        },
        {
          title: "Promotions",
          desc: "Automatic or with a code, by percentage, fixed amount or price per night, with their presentation ready for your site.",
        },
        {
          title: "Settings",
          desc: "Currency, confirmation, stay rules, times and how rooms get assigned. Plus the Engine Studio for texts and colors.",
        },
      ],
    },
    prices: {
      eyebrow: "Every rate, on its own",
      title: "The price of every night, *with its reason*.",
      lead:
        "When the engine has to say what a night costs, it resolves a fixed chain, always in the same order. Knowing which rung every price comes from is what lets you trust the system without auditing it every morning.",
      items: [
        "**First, what you accepted in Revenue**: if there's a recommended, accepted rate for that date, it wins.",
        "**Then, the rate plan** in force for that category and that date, with its minimum stay.",
        "**If there's no plan, the category's base price**. Every cabin can have its own.",
        "**On top of everything, promotions**: discount or surcharge — a promo can also raise the price in high season — automatic or with a code.",
      ],
    },
    currency: {
      eyebrow: "Ten currencies",
      title: "What the guest saw *does not move on you*.",
      lead:
        "The guest looks at the price in their currency and you charge in yours. The booking always stays in your base currency and the conversion freezes at check-in: the amount you charge does not change afterward.",
      items: [
        "US dollar, Argentine peso, real, Chilean peso, Colombian peso, Mexican peso, sol, Uruguayan peso, euro and pound.",
        "For Argentine pesos you choose the rate: official, blue, MEP or CCL.",
        "Rates update every three hours and get flagged as stale if the source did not respond.",
        "Reports add up directly, because everything stays in your base currency.",
      ],
    },
    where: {
      eyebrow: "Where it goes",
      title: "On your site, your bio *and for an AI*.",
      items: [
        {
          title: "Your site",
          desc: "A section of the website editor that wires itself to your inventory.",
        },
        {
          title: "Your LinkHub",
          desc: "The link in your Instagram bio opens the same engine, identical to the one on your site.",
        },
        {
          title: "A direct link",
          desc: "A page of its own with your property's address, to send over WhatsApp if you don't have a site yet.",
        },
        {
          title: "AI agents",
          desc: "With the agentic layer on, an outside assistant can read your availability and complete a booking. [How it works](/producto/marketing#agentes).",
        },
      ],
    },
    after: {
      eyebrow: "After checkout",
      title: "The booking comes in *and the system carries on*.",
      items: [
        {
          title: "The unit gets assigned",
          desc: "The only one possible if you sell by unit, the one the system picks if it's an automatic pool, or none if you'd rather the front desk decide.",
        },
        {
          title: "The email goes out",
          desc: "From roombir's domain, with your inbox as reply-to. With no mail server to configure and no extra provider.",
        },
        {
          title: "The guest has their account",
          desc: "With StayPass they see their bookings from your site. One guest accumulates the properties they've booked with, and each hotel sees only its own.",
        },
      ],
      stats: [
        { value: "0%", label: "commission per booking" },
        { value: "10", label: "currencies, with blue, MEP, CCL or official for ARS" },
        { value: "2", label: "confirmation modes, with automatic expiry" },
      ],
    },
    faq: [
      {
        q: "Do you charge a commission per booking?",
        a: "No. The engine has no charge per booking: you pay the plan and nothing else.",
      },
{
        q: "Who confirms the booking?",
        a: "You choose. In one mode the booking is born pending and **the guest confirms it** with a link that reaches them by email. In the other, it stays pending until **the front desk accepts it**. Either way, pending bookings expire on their own, so you're not left with nights blocked by someone who never came back.",
      },
      {
        q: "Can I change the checkout's texts and colors?",
        a: "Yes, from the Engine Studio and **without touching code or republishing the site**: search, calendar, guests, listing, detail, services, checkout and final screen, each with its own texts and styles.",
      },
    ],
    cta: {
      title: "Put your booking link *in the bio*.",
      lead:
        "You load the rooms and the engine is live with availability initialized. The site and LinkHub come later, whenever you want.",
      steps: [
        "You load categories, units and prices.",
        "You configure the engine in the Studio.",
        "You share the link and stop losing enquiries in the chat.",
      ],
    },
  },

  informes: {
    meta: {
      title: "Reports",
      description:
        "Occupancy, ADR, RevPAR, revenue, cancellations, lead time and channels, calculated over the same bookings you operate, plus a section with what's loaded wrong today. No spreadsheets.",
    },
    hero: {
      eyebrow: "Reports",
      title: "Your numbers, *with no spreadsheet to build*.",
      lead:
        "Occupancy, average rate, revenue, cancellations and which channel every booking came from, calculated over the same bookings you operate. Plus a section that doesn't look at what happened but at what's loaded wrong today.",
    },
    hygiene: {
      eyebrow: "Status and cleanup",
      title: "What's wrong, *before what happened*.",
      lead:
        "Most reports tell you about last month. This section tells you what needs fixing today, before it turns into a guest with no room.",
      items: [
        "**Pending bookings** nobody confirmed in time.",
        "**Today's arrivals with no room assigned.**",
        "**Today's departures still checked in**: check-out wasn't marked.",
        "**Bookings with no channel**: the ones nobody tagged, which later throw off your channel report.",
      ],
    },
    metrics: {
      eyebrow: "What it measures",
      title: "Every number, *explained on the spot*.",
      lead: "No separate glossary: every metric is explained right where it appears.",
      items: [
        {
          title: "Occupancy and demand",
          desc: "How many rooms you have occupied today and the curve of what's already booked for the next 7 to 90 days.",
        },
        {
          title: "ADR and RevPAR",
          desc: "ADR is what you charge on average per night sold; RevPAR is what every room you have brings in, sold or not.",
        },
        {
          title: "Cancellations",
          desc: "The rate for the period and last-minute ones, with their trend by week or by month.",
        },
        {
          title: "Channels",
          desc: "Where every booking comes from and which one cancels on you the most. With fewer than three bookings, it won't claim it.",
        },
      ],
    },
    period: {
      eyebrow: "Against the prior period",
      title: "Every number, *with its difference*.",
      lead:
        "You pick the range — a week, a month, three or six months, or a custom one — and every metric is compared against the period right before it.",
      items: [
        {
          title: "Revenue",
          desc: "The period's revenue and what's projected for the next 30 days from what's already booked.",
        },
        {
          title: "Lead time",
          desc: "How many days ahead people book, with the minimum, the maximum and how many bookings it was calculated over.",
        },
        {
          title: "Average stay",
          desc: "How many nights each guest stays, on average, in the range you picked.",
        },
        {
          title: "Occupancy by category",
          desc: "Which categories are full today and which have room, with the percentage for each one.",
        },
      ],
    },
    ask: {
      eyebrow: "The question that's not on screen",
      title: "If it's not in the report, *ask it*.",
      lead:
        "Roombir AI reads the same reports and answers you in the conversation, with the number and where it comes from. For \"are we doing better than last year at this point?\" there's Revenue's [pace](/producto/revenue), against your own history.",
      items: [
        "\"Which channel cancels on me the most this quarter?\"",
        "\"How many arrivals do I have tomorrow with no room?\"",
        "\"How is October looking against September?\"",
      ],
    },
    faq: [
      {
        q: "Where do the numbers come from?",
        a: "From the same bookings you operate on the calendar, calculated on the spot. There's no overnight export and no separate database that can drift out of sync.",
      },
{
        q: "What's the difference with Revenue?",
        a: "Reports looks at the operation: what happened, what's loaded wrong, where bookings come from. [Revenue](/producto/revenue) looks ahead to decide the price: pace against your own history, competitors and events.",
      },
      {
        q: "Do I have to configure anything?",
        a: "No. With the bookings loaded, the reports are already there. The only thing worth doing is tagging the channel on every manual booking, so the channel report is worth something.",
      },
    ],
    cta: {
      title: "Your numbers, *from day one*.",
      lead: "Reports aren't configured: they come from the bookings you're already loading.",
      steps: [
        "You load your bookings, or we migrate them with you.",
        "You tag the channel on every manual booking.",
        "You open Reports and pick the range.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue",
      description:
        "Revenue management with the trace behind every price: what data it saw, which rule matched and which cap applied. Pace against your own history, competitors, destination events from fifteen sources and the rate that goes into the engine when you accept it.",
    },
    hero: {
      eyebrow: "Revenue",
      title: "It tells you the price *and why*.",
      lead:
        "A document per date with the full trace: what data it saw, which rule matched and which cap applied. It looks at your own history and your destination — holidays, events, flight routes, weather — with the source in view. And when you accept, the rate goes into the engine on its own.",
    },
    decision: {
      eyebrow: "Decisions",
      title: "The answer to *\"why are you suggesting this?\"*",
      lead:
        "There's a document per property and per date with the full trace: what data the system saw, what the base rate was, what it suggested, which rules matched, whether a cap applied, and a log you can read line by line.",
      items: [
        "Occupancy, demand, availability, competitor rates, new bookings and events: everything that went into the count, with its value.",
        "Which rule matched and in what order, because the last one wins.",
        "Whether the minimum or maximum cap applied, and what it was.",
        "The recommendation's life cycle: suggested, accepted or rejected, applied, by whom and when.",
      ],
    },
    destination: {
      eyebrow: "Your destination",
      title: "What moves demand, *with its source*.",
      lead:
        "Demand signals come from fifteen public sources per destination, swept around your property and not from a fixed list of cities. Events get suggested on their own and you approve them: an approved one doesn't get overwritten by the next update.",
      items: [
        "**Events in your radius**: sports, culture, conferences and fairs, with their expected impact and days remaining.",
        "**Holidays and long weekends**, which pricing rules can use as a variable.",
        "**Observed flight routes** arriving in your area, and the exchange rate of the markets that visit you.",
        "**Searches with no availability** from your own engine: the most underrated demand signal a small property has.",
      ],
    },
    rules: {
      eyebrow: "Scenarios",
      title: "Thirteen variables, *and a dry run*.",
      lead:
        "Every rule looks at a variable, compares it against a value inside a lead-time window and applies an adjustment. They're evaluated in order and the last match wins. Before you turn any of them on, the dry run shows you what it would have done.",
      items: [
        "**Variables**: occupancy, demand index, availability, competitor 1 through 5 rate, new bookings in 7 and in 30 days, event impact, days to the nearest event and pace index.",
        "**Comparisons**: greater than, greater than or equal, equal, less than or equal, less than.",
        "**Adjustment** as a percentage over the base rate.",
        "**Caps** for minimum and maximum rate, applied after everything else.",
      ],
    },
    comp: {
      eyebrow: "Competitors",
      title: "A comp set that's *mixed and honest*.",
      lead:
        "Competitors who also use roombir contribute their real rate. Outside ones get discovered on their own by proximity and similarity, and you load their rate, as a fixed reference or by date.",
      items: [
        "Similarity score by type, category, size, tier and area.",
        "Your own hotel's profile, taken from the system unless you change it by hand.",
        "A grid of competitor rates by date.",
        "Ready for automatic rate providers; not connected today.",
      ],
    },
    rest: {
      eyebrow: "The other tabs",
      title: "Everything there is *besides the price*.",
      items: [
        {
          title: "Two calendars in one",
          desc: "By booking date — when they bought — and by stay date — when they sleep. Many systems mix the two and confuse people.",
        },
        {
          title: "Pace",
          desc: "Sales pace against your own property's past, by day of week, month and lead time, with fast- or slow-selling alerts.",
        },
        {
          title: "Events",
          desc: "Suggested on their own and curated by you: suggested, approved or discarded, with a relevance score and expected impact.",
        },
        {
          title: "Recommendations",
          desc: "Current rate, suggested rate, difference and reason. They get accepted or rejected, and can apply themselves if you turn that on.",
        },
        {
          title: "Demand signals",
          desc: "Besides bookings, the demand index takes your engine's searches, including the ones that found no availability.",
        },
        {
          title: "Settings",
          desc: "Competitors, location, hotel profile, pace thresholds, event radius and rate caps.",
        },
      ],
    },
    cost: {
      eyebrow: "Elsewhere, on the side",
      title: "An RMS is almost always *one more module*.",
      lead:
        "Among systems for independent properties, revenue management sells as an add-on. The only one that publishes its price on its site charges per room.",
      head: { tool: "Product", price: "Published price", gap: "How it's sold" },
      rows: [
        {
          tool: "Amenitiz PriceAdvisor",
          price: "**€6** per room per month",
          gap: "Add-on over the plan. Suggests; doesn't apply on its own.",
        },
        {
          tool: "SiteMinder Dynamic Revenue Plus",
          price: "doesn't publish it",
          gap: "Add-on with a separate charge on top of the plan.",
        },
        {
          tool: "Mews RMS",
          price: "doesn't publish it",
          gap: "A separate module from its three plans.",
        },
      ],
      total:
        "With published pricing, a **15-room** hotel pays **€90 a month** just for rate suggestions. In roombir, Revenue is in the product catalog like any other: [see which plan includes it](/precios).",
      source:
        "Sources: product and pricing pages from amenitiz.com, siteminder.com and mews.com, read on September 22, 2026.",
    },
    faq: [
      {
        q: "I don't have much history. Is it still useful to me?",
        a: "It is, but it will tell you so. Pace is compared against **your own history**, grouped by day of week, month and lead time, and the screen **shows the sample size**. If a cell was calculated from three bookings, you'll see it. We'd rather do that than show you a confident-looking curve built on nothing.",
      },
      {
        q: "Where do competitor rates come from?",
        a: "From two places. If the competitor also uses roombir, the rate is real. If it's external, the system **discovers it on its own** by location and similarity, but **you load the rate**, fixed or by date. The connection to automatic providers is prepared and not yet connected; we won't tell you it is until it's true.",
      },
      {
        q: "If I accept a recommendation, do I have to copy the price somewhere else?",
        a: "No. Once you accept it, the rate **goes into the booking engine** and becomes the first rung of the price for that date. In most systems that step is a person copying a number from one screen to another.",
      },
    ],
    cta: {
      title: "The price *stops being a hunch*.",
      lead:
        "Revenue starts being useful as soon as you have history of your own, and while you don't, it says so to your face instead of inventing a curve.",
      steps: [
        "You load the inventory and base rates.",
        "You build your comp set and approve the events in your area.",
        "You write two or three rules and dry-run them.",
      ],
    },
  },

  marketing: {
    meta: {
      title: "Marketing",
      description:
        "The website editor with an assistant — you show it a screenshot and it builds the sections — wired to your inventory and your engine. Brand, photo library, galleries, reviews, LinkHub and the layer that makes your property readable by an AI.",
    },
    hero: {
      eyebrow: "Marketing",
      title: "A site that *already knows* what you have free.",
      lead:
        "The site, the brand, the photos, the reviews and LinkHub all come from the same place as your bookings: you change a price and it's already on the site. And the editor has an assistant: you paste in a screenshot of a site you like and it builds the sections for you, editable.",
    },
    ai: {
      eyebrow: "The editor with an assistant",
      title: "Show it a site, *it builds yours*.",
      lead:
        "You paste up to six screenshots per request — a hotel homepage you like, a section from another site — and the assistant builds the sections with that structure and your text, on the canvas and in draft. Then you edit them like anything else.",
      items: [
        "**You point at a block and ask** \"make it like this one\", \"add two more cards\", \"change the title\": it touches that piece and leaves the rest as it was.",
        "**Everything goes to draft.** Publishing is a separate step, and it's yours.",
"**No code.** And if you want it, there are per-screen styles, animations and your own CSS.",
      ],
    },
    connected: {
      eyebrow: "Wired in, not pasted on",
      title: "Sections that *read your data*.",
      lead:
        "What sets the editor apart from a generic builder isn't the canvas: it's the sections that wire themselves to what you already loaded. In a generic builder, the engine and the rooms get pasted in from another service.",
      items: [
        {
          title: "Engine and rooms",
          desc: "The booking engine, room cards and categories, with real availability and price.",
        },
        {
          title: "Gallery, reviews, services and promos",
          desc: "You change a promo in Bookings and the site shows it, without editing the page.",
        },
        {
          title: "Multiple languages",
          desc: "Every language is a page with its own address, its own title and its own social preview. It's not a translator layered on top.",
        },
        {
          title: "Your domain",
          desc: "Every language can have its own, with drafts, explicit publishing and preview at several sizes.",
        },
      ],
    },
    quality: {
      eyebrow: "Site quality",
      title: "A quality check *that also fixes things*.",
      lead:
        "A panel like PageSpeed's checks what a search engine and a phone punish. The \"Fix everything\" button corrects what it found using fixed rules, with no AI involved, and checks again.",
      items: [
        {
          title: "Before you publish",
          desc: "It flags text too small on a phone, images with no description, and missing titles or descriptions.",
        },
        {
          title: "Templates with your brand",
          desc: "You start from a template that fills itself in with your logo, your colors, your photos and your property's text.",
        },
        {
          title: "Simple or advanced mode",
          desc: "Simple mode hides the design controls until you go looking for them. Advanced shows all of them.",
        },
        {
          title: "Popups and WhatsApp",
          desc: "Five popup formats with page and frequency rules, and a WhatsApp button with the message already written.",
        },
      ],
    },
    cost: {
      eyebrow: "What you pay separately today",
      title: "Five vendors *that don't talk to each other*.",
      lead:
        "This is how an independent property's digital presence gets built today, with the prices each vendor publishes. None of them knows what you have free tonight.",
      head: { tool: "What you buy", price: "Published price", gap: "What it doesn't know about your property" },
      rows: [
        {
          tool: "Website on Framer",
          price: "US$10/month + **US$20 per language**",
          gap: "Your inventory and your prices: the engine gets pasted in from another service.",
        },
        {
          tool: "Website on Webflow",
          price: "US$15/month + **US$9 per language**",
          gap: "Same story: no rooms or engine of its own.",
        },
        {
          tool: "Reviews on TrustYou",
          price: "from **US$75** per property per month",
          gap: "Which guest checked out today, unless you integrate it with your system.",
        },
        {
          tool: "Link in bio with Linktree",
          price: "**US$15/month**",
          gap: "Your availability: \"Book now\" is just a link.",
        },
        {
          tool: "Photos on Google Workspace",
          price: "**US$7** per user per month",
          gap: "Which photo belongs to which room.",
        },
      ],
      total:
        "A site in five languages on Framer (US$10 + 4 × US$20), plus reviews, a link in bio and photos: **US$187 a month**, and still with no booking engine and nothing wired to your bookings.",
      source:
        "Prices published on framer.com, webflow.com, trustyou.com, linktr.ee and workspace.google.com, read on September 22, 2026. Framer, Webflow and TrustYou, billed annually; Linktree, monthly Pro plan.",
    },
    brand: {
      eyebrow: "Brand",
      title: "Your brand, *loaded once*.",
      lead:
        "One identity record that feeds the site, LinkHub, the engine and the data search engines read. Change the logo and it changes everywhere.",
      items: [
        "**A palette pulled from your logo**, with the main color adjusted so the text on top of it reads.",
        "**Tone and typeface**: you choose the tone and the typeface suggests itself.",
        "**Story, tagline and who you're talking to**, in your own words.",
        "**Your area and what's nearby**, detected from the map.",
      ],
    },
    files: {
      eyebrow: "Photos and files",
      title: "Your photos, *in one place*.",
      items: [
        {
          title: "The company library",
          desc: "Images, videos, audio and documents, with folders, tags and search. You drag from your computer and it's done.",
        },
        {
          title: "Image editor",
          desc: "You crop and adjust a photo without leaving the system.",
        },
        {
          title: "Galleries",
          desc: "Photos and YouTube or Vimeo videos grouped into property galleries, with a cover and an order.",
        },
        {
          title: "The same library for everything",
          desc: "It's used by the website editor, the brand, the galleries and the assistant. The site shows whichever gallery you pick with a section.",
        },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "Your reviews, *answered in one place*.",
      lead:
        "You load reviews from Google, Booking, TripAdvisor, Airbnb, Despegar, Hotels.com and your own, by hand or by file, and reply to them from here. The ones you pick show up on your site.",
      items: [
        "**File import** that flags rows with errors and doesn't duplicate the ones already there.",
        "**A public reply** per review, and a filter for the ones still unanswered.",
        "**Average and distribution** from one to five stars, by source.",
        "**They publish on your site** with a section from the editor, only the ones you leave visible.",
      ],
    },
    linkhub: {
      eyebrow: "LinkHub",
      title: "The link in your bio, *with the engine inside*.",
      lead:
        "A link-in-bio made for properties: the book button opens the same engine as your site, with real availability and price, with nobody sent off to another form.",
      items: [
        "**Ten block types**: book, WhatsApp, reviews, gallery, video, map, contact, link, text and separator, with date scheduling.",
        "**Six templates** that fill themselves in with your brand, or design it by hand.",
        "**QR code** to print at the front desk or on the menu.",
        "**Visits and clicks** by day, country, referrer and device, with nobody's IP stored.",
      ],
    },
    agentes: {
      eyebrow: "Readable by an AI",
      title: "So a machine can *understand and book you*.",
      lead:
        "More and more people ask an AI assistant before they search. That assistant doesn't see your photo carousel: it reads text, structured data and routes. Your site and your engine publish all three, and they switch on with one toggle.",
      items: [
        "**`llms.txt`**: who you are, what you sell and how to book, in plain text.",
        "**`availability.json`** and **`engine-capabilities.json`**: your real availability and what your engine accepts.",
        "**Structured data** on every page and a GEO editor to declare what you are, in your own words.",
        "**Ten tools for agents in the browser**: an outside assistant can complete a booking.",
      ],
    },
    faq: [
      {
        q: "Do I need to know how to design?",
        a: "No. You can start from a template that fills itself in with your brand, ask the assistant to build a section from a screenshot, or work in simple mode, which hides the design controls. If you do know how to design, advanced mode has per-screen styles, animations and your own CSS.",
      },
      {
        q: "Do I have to load the rooms twice, once for the site?",
        a: "No, and that's the point. The rooms, engine, galleries, promotions, reviews and services sections **wire themselves to what you already loaded**. Upload a new photo to a category and it shows up on the site without anyone touching it.",
      },
      {
        q: "Can I use my own domain?",
        a: "Yes, and every language on the site can have its own.",
      },
{
        q: "Can I pull in my Google reviews?",
        a: "Yes, by file or by hand.",
      },
    ],
    cta: {
      title: "Your site and your link, *the same afternoon*.",
      lead:
        "If you've already loaded the brand and the rooms, you start the site from a template or a screenshot, and LinkHub fills itself in with the property's data.",
      steps: [
        "You load your brand and your photos.",
        "You start the site from a template or a screenshot.",
        "You publish on your domain and build the LinkHub.",
      ],
    },
  },

  soluciones: {
    meta: {
      title: "Solutions",
      description:
        "Hotels, cabins and apartments, hostels, glamping and villas, and small groups: how Roombir is configured for each type of property and each desk.",
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
          desc: "Builder, sites, galleries, reviews, brand and LinkHub. The home shows review score, visibility and LinkHub status. The Bookings area does not even appear.",
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
    faq: [
      {
        q: "I have cabins and also two standard rooms. Which model do I choose?",
        a: "Both. The sales model is set per **category**, not per system: the cabins go as 1:1 single units, with their own name, and the rooms as an interchangeable pool. They live in the same calendar and the same engine, and there is a wizard to migrate a category from one mode to the other once it already has bookings inside.",
      },
      {
        q: "We are three people rotating shifts. How do we train someone new?",
        a: "Each person enters their workspace and sees only what is theirs. The onboarding is built from the apps of that workspace, and the **38 guided tours** draw over the real screen, highlighting the element they talk about. No manual to read, no video to watch: you learn on your first shift.",
      },
      {
        q: "I have two properties in different cities.",
        a: "A company can have several properties, and each membership can be scoped: the manager of one sees theirs and nothing else. With **property templates**, the second one starts with the workspaces and apps already set up like the first.",
      },
    ],
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
          desc: "Guest emails leave from roombir's domain, with no separate mail service and no SMTP configuration per hotel.",
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
    why: {
      eyebrow: "Why it is published",
      title: "The price is *not requested*: it is read.",
      lead:
        "Of the five largest hotel systems in the world, none publishes a number on its website: you request it through a form and it shows up in the second meeting. A twelve-unit property has no time for that.",
      items: [
        {
          title: "Same catalog that bills",
          desc: "The cards and the comparison come from the endpoint the system uses to resolve your account. There is no marketing version of the plans.",
        },
        {
          title: "No lock-in",
          desc: "Monthly, no penalty, no retention call. The [terms](/legal/terminos) say so, not a salesperson.",
        },
        {
          title: "What isn't there isn't charged",
          desc: "Channel manager and payments are in no plan because they do not exist yet. When they do, they will be here, with their number.",
        },
      ],
    },
    compareAsk: "Comparing with another system?",
    compareLink: "See the comparisons, with a date",
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
      {
        q: "Why don't the other systems publish pricing?",
        a: "Because the per-room price drops with size and it suits them to negotiate case by case. Legitimate, but it shifts the work to the hotelier: form, call, quote, second call. We would rather lose the odd negotiation and have the number in plain sight. To see how it stacks up against each one, it is in the [comparisons](/comparar).",
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
        "Why Roombir exists, how we work and what state each part of the product is in — including what it does not do yet.",
    },
    hero: {
      eyebrow: "About",
      title: "Software for the property that *has no IT department*.",
      lead:
        "Roombir came out of a simple observation: a twenty-room hotel or a six-cabin complex needs exactly the same pieces a chain does, and none of the options on the market give them together in a way that makes sense at that scale.",
      secondary: "See the product",
    },
    thesis: {
      eyebrow: "The thesis",
      title: "A small property should not need *five vendors and a consultant*.",
      p1: "Today the usual way out is a PMS over here, an engine over there, a site built by someone who no longer replies, a rates spreadsheet and enquiries landing in a WhatsApp nobody organises. Each piece works; the whole does not. And the work of keeping the whole aligned ends up being done by hand, by the person at the front desk.",
      p2: "roombir's bet is that this whole becomes one system with one database, that it can be set up without help, and that every desk sees only its own. Everything else — the RMS, the agent layer, the assistant — comes out of that: they are things you can only do well once the data is already one.",
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
    pilot: {
      eyebrow: "Where we are",
      title: "In a market pilot, *on purpose*.",
      lead:
        "We are not chasing volume in this stage. We are trying to answer four questions with data, and all four depend on properties using the system for real, with real bookings inside.",
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
        { value: "1", label: "single database for the whole system" },
      ],
    },
    cta: {
      title: "If any of this *sounds like your problem*.",
      lead:
        "Write to us and we will talk it through plainly. If Roombir is not useful for your case yet, we will tell you in that same conversation.",
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
        "Write to us and we will talk it through plainly: what Roombir solves for your property and what it does not yet. You can also start the setup yourself.",
    },
    eyebrow: "Contact",
    title: "Tell us how *you take bookings today*.",
    lead:
      "You do not need to know which module you need. Knowing how many units you have, whether you sell on OTAs and how much of your day goes into answering availability questions is already enough for us to tell you whether Roombir is useful to you — or whether it is not yet.",
    checks: [
      "We answer within the business day.",
      "If something you need does not exist yet, we tell you right there.",
      "If you want, we load the rooms together on a short call.",
    ],
    directLabel: "Or write to us directly",
    shortcutTitle: "Would you rather not wait for an answer?",
    shortcutText:
      "Setup is self-service and guided. You can have the engine running before we answer this form.",
  },

  legal: {
    updated: "Last updated",
    updatedDate: "30 August 2026",
    privacy: {
      meta: {
        title: "Privacy policy",
        description:
          "What data Roombir takes on this site and in the platform, which providers process it and how to ask for it to be deleted.",
      },
      title: "Privacy policy",
      lead: "What we take, what for, who processes it with us and how to ask for it to be deleted.",
      blocks: [
        { h: "1. Who we are" },
        {
          p: "Roombir is a management platform for properties, operated from Argentina. For anything related to your personal data you can write to us at [team@roombir.com](mailto:team@roombir.com).",
        },
        { h: "2. Two different roles" },
        { p: "They are worth separating because the obligations are not the same:" },
        {
          ul: [
            "**This site and our commercial relationship with you.** Here we are the controller: we take the data to contact you and to understand where enquiries come from.",
            "**The platform.** When a property loads its guests' data into roombir, the controller of that data is the property; we process it on their behalf and according to their instructions.",
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
          p: "We do not use the form data for anything other than contacting you about roombir, and we do not sell it or hand it to third parties for advertising.",
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
          p: "You can ask us for access to your data, its correction, its update or its deletion by writing to [team@roombir.com](mailto:team@roombir.com). In Argentina, the Agency for Access to Public Information is the supervisory authority for personal data protection and handles claims from anyone who considers their rights infringed.",
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
    cookies: {
      meta: {
        title: "Cookie policy",
        description:
          "Which cookies and measurement technologies the Roombir site uses, which are necessary and how to disable the rest.",
      },
      title: "Cookie policy",
      lead: "What this site stores in your browser and what you can disable.",
      blocks: [
        { h: "1. The public site" },
        {
          p: "The pages at `roombir.com` are static and do not need cookies to work. We do not use our own cookies to profile you or to remember who you are between visits. The only one that may appear is the one storing the **language you chose** in the switcher, so we do not send you back to another one on your next visit.",
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
          p: "The application at `app.roombir.com` does use **necessary** cookies: the ones keeping you signed in. Without them the system cannot be used, and they cannot be disabled without ending the session.",
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
          p: "Any doubts about this, write to us at [team@roombir.com](mailto:team@roombir.com). See also the [privacy policy](/legal/privacidad).",
        },
      ],
    },
  },

  comparar: {
    meta: {
      title: "Comparisons",
      description:
        "Roombir against Cloudbeds, Little Hotelier, Amenitiz and Mews: published pricing, lock-in, commission, revenue, channel manager, payments and AI. Verified against their websites, with a date, and with when the other one is the right call.",
    },
    hero: {
      eyebrow: "Comparisons",
      title: "Compared *by name*.",
      lead:
        "Four comparisons written with one rule: only what each company's public website says, read on a specific date and quoted as is. No third-party estimates, no stale screenshots. Each one says when the other is the right call, because a comparison that always wins is useless to everyone.",
      notes: ["Only their public site", "With a verification date", "With “when to choose the other”"],
    },
    vsPrefix: "Roombir vs",
    read: "Read the comparison",
    verified: "Verified on {date} against the public website of {name}",
    verifiedDate: "September 2, 2026",
    chooseThem: "Choose {name} if…",
    chooseUs: "Choose Roombir if…",
    table: {
      eyebrow: "Criterion by criterion",
      title: "Roombir and {name}, *in the same table*.",
      lead:
        "roombir's rows come from the product status we publish under About, including the ones that say “does not exist yet”. The other's rows come from their public site on the date shown. If something changed, tell us and we correct it with the new date.",
      headCriterion: "Criterion",
      headUs: "roombir",
    },
    legend: {
      ok: "Yes, included or stated",
      mid: "Partial, add-on or with conditions",
      no: "No, or not stated",
      info: "Fact, no judgement",
    },
    sourcesNote:
      "{name} data taken from its public site on {date}. Roombir data from the [product status](/nosotros#estado) of the same date. If you find something outdated, write to team@roombir.com. Source:",
    method: {
      eyebrow: "How we compare",
      title: "Only what their site says, *with a date*.",
      lead:
        "It is the only way a comparison written by one of the parties can be worth anything. Three rules, and they apply to our column too.",
      items: [
        "**Single source:** each competitor's public site, read on September 2, 2026. If a fact is not on their site, the cell says “not stated”; we don't make it up.",
        "**No third-party prices:** the numbers floating around software directories are estimates. If the competitor does not publish pricing, the row says exactly that.",
        "**Our rows come from the product status:** the same ones that say we have no channel manager and no payments. If we improve, it changes there and here in the same commit.",
      ],
    },
    cta: {
      title: "If after reading *you are still here*.",
      lead:
        "Signing up is free, guided and asks for no card. And if the comparison made it clear you need what we don't have yet, it did its job too.",
      steps: [
        "You sign up and load a property.",
        "You try the engine and the assistant with your data.",
        "You pick a plan only if something changed for you.",
      ],
    },
    criteria: {
      price: { label: "Pricing published on the website", us: "Yes: in HTML, with a number, from the same catalog that bills the account", tone: "ok" },
      trial: { label: "Try without a card", us: "Yes: free plan and self-serve signup, no call first", tone: "ok" },
      lockin: { label: "Lock-in", us: "None: monthly plan, leave without penalty", tone: "ok" },
      commission: { label: "Commission on the booking engine", us: "0%. What comes in through your engine is entirely yours", tone: "ok" },
      rms: { label: "Revenue management", us: "Included in the product catalog, by plan; not a separate module", tone: "ok" },
      channel: { label: "Channel manager (OTAs)", us: "Does not exist yet. Only an event log for when it connects", tone: "no" },
      payments: { label: "Online guest payments", us: "Does not exist yet: payment is at check-in", tone: "no" },
      ai: { label: "AI assistant", us: "Executes with your permissions, visible turn transcript", tone: "ok" },
      fx: { label: "Multi-currency", us: "10 currencies; conversion frozen at check-in; blue, MEP, CCL or official rate for ARS", tone: "ok" },
      dual: { label: "Pool and 1:1 unit sales models", us: "Yes, chosen per category, living in the same calendar", tone: "ok" },
      website: { label: "Website with your own domain", us: "Included: builder, multi-language, LinkHub with QR", tone: "ok" },
      fiscal: { label: "Local tax invoicing", us: "Not yet", tone: "no" },
      languages: { label: "Platform languages", us: "5: Spanish, English, Portuguese, French, German", tone: "info" },
      segment: { label: "Typical segment", us: "Independent and boutique properties in Latin America: hotels, cabins, hostels, glamping", tone: "info" },
      support: { label: "Setup and support", us: "9-step guided setup, 38 tours, room loading done together at no charge", tone: "info" },
      llms: { label: "Their own site, readable by AI (llms.txt)", us: "Yes: curated, with the same numbers and prices as the site", tone: "ok" },
    },
    rivals: {
      cloudbeds: {
        name: "Cloudbeds",
        site: "cloudbeds.com",
        oneLiner: "The global all-in-one: 20,000+ properties, a 450+ channel manager, quote-based pricing.",
        meta: {
          title: "Roombir vs Cloudbeds",
          description:
            "Cloudbeds and Roombir compared criterion by criterion: published pricing, lock-in, commission, revenue, channel manager, payments and AI. Verified against cloudbeds.com on September 2, 2026.",
        },
        hero: {
          title: "Roombir vs *Cloudbeds*",
          lead:
            "Cloudbeds is the most complete system in the independent segment at global scale: channel manager, payments, marketing and an analytical AI layer, in more than 150 countries. Roombir is smaller, newer and built for Latin America, with two things Cloudbeds does not publish —the price and the lock-in— and two things Cloudbeds has and we don't yet: channel manager and payment gateway.",
        },
        them: [
          "You sell heavily on OTAs and need a channel manager today, not when we launch it.",
          "You want to charge cards online from the engine.",
          "You run several properties in several countries and need a 450-integration marketplace.",
        ],
        us: [
          "You want to know what it costs before talking to a salesperson, and no lock-in.",
          "Your problem is direct sales: inquiries get lost in the chat and there is no website or engine of your own.",
          "You sell in pesos with an unstable exchange rate, or mix cabins with rooms and no system lets you.",
        ],
        rows: {
          price: { v: "No: four plans, all four ending in “Request a quote”", tone: "no" },
          trial: { v: "No: the entry point is “Get a demo”", tone: "no" },
          lockin: { v: "Not stated on its pricing page", tone: "mid" },
          commission: { v: "0% on engine and channel manager (stated); metasearch commission after the stay", tone: "ok" },
          rms: { v: "Add-on: Revenue Intelligence, within Revenue Marketing", tone: "mid" },
          channel: { v: "Yes, 450+ channels", tone: "ok" },
          payments: { v: "Yes, Cloudbeds Payments", tone: "ok" },
          ai: { v: "Signals and Ask Signals: conversational AI for querying data", tone: "mid" },
          fx: { v: "Not stated", tone: "mid" },
          dual: { v: "Hotels and rentals as segments; no mixed mode stated", tone: "mid" },
          website: { v: "Add-on: Websites, within Revenue Marketing", tone: "mid" },
          fiscal: { v: "Not stated", tone: "mid" },
          languages: { v: "Site in 4: English, Spanish, Portuguese, French", tone: "info" },
          segment: { v: "Independents and groups, 150+ countries, 20,000+ properties", tone: "info" },
          support: { v: "Onboarding, Customer Success and Cloudbeds University", tone: "info" },
          llms: { v: "No llms.txt (404 when verified)", tone: "no" },
        },
        faq: [
          {
            q: "Is Cloudbeds better than roombir?",
            a: "In coverage, yes: it has a channel manager, payments and 450 integrations we don't have. In transparency and focus, we think not: its price is requested through a form, and revenue and the website are separate modules. If your problem today is OTA distribution, Cloudbeds. If it is direct bookings and knowing what you will pay, roombir.",
          },
          {
            q: "How much does Cloudbeds cost?",
            a: "It does not publish it. Its pricing page has four plans —Flex, One, Experience and Enterprise— and all four end in “Request a quote”. The numbers floating around the internet are third-party estimates, not Cloudbeds', which is why we don't repeat them here.",
          },
          {
            q: "Can I migrate from Cloudbeds to roombir?",
            a: "Yes, and we do the room and rate loading with you at no charge. Worth knowing first: if you depend on its channel manager, in Roombir that OTA sync is done by hand today. It is in the [product status](/nosotros#estado).",
          },
        ],
      },
      littlehotelier: {
        name: "Little Hotelier",
        site: "littlehotelier.com",
        oneLiner: "SiteMinder's brand for 1–30 rooms: 30-day trial, a pricing calculator and add-ons that charge per booking.",
        meta: {
          title: "Roombir vs Little Hotelier",
          description:
            "Little Hotelier and Roombir compared: pricing, free trial, booking fee, revenue, channel manager, payments and AI. Verified against littlehotelier.com on September 2, 2026; commissions reviewed on September 22.",
        },
        hero: {
          title: "Roombir vs *Little Hotelier*",
          lead:
            "Little Hotelier is the small-property system from SiteMinder, the world's largest hotel distributor, and the closest to Roombir in customer size: properties with 1 to 30 rooms. It publishes a pricing calculator, gives a 30-day trial and has a channel manager and payments. Its direct engine states no commission: the variable per-booking fees sit in its metasearch and channels add-ons, and revenue and the website are also add-ons.",
        },
        them: [
          "You need a channel manager and payments today: both are there and work at global scale.",
          "You want the backing of SiteMinder's distribution network: 450+ channels, GDS, metasearch.",
          "You operate in English, German, Italian, Thai or Indonesian: that is where it localizes.",
        ],
        us: [
          "You want the full price in one line, with no add-ons that charge per booking.",
          "You want revenue and the website inside the plan, not as add-ons.",
          "You sell cabins with their own name alongside rooms, or charge in pesos and need to freeze the exchange rate.",
        ],
        rows: {
          price: { v: "Yes: calculator by number of rooms (the number is loaded by JavaScript)", tone: "ok" },
          trial: { v: "Yes: 30 days free", tone: "ok" },
          lockin: { v: "Not stated on the pricing page", tone: "mid" },
          commission: { v: "The direct engine states no commission; Metasearch and Channels Plus charge a variable fee per booking, and its payments, per transaction", tone: "mid" },
          rms: { v: "Add-on: Dynamic Revenue Plus", tone: "mid" },
          channel: { v: "Yes", tone: "ok" },
          payments: { v: "Yes, Little Hotelier Payments, with transaction fees", tone: "ok" },
          ai: { v: "Does not state an assistant that operates the system", tone: "no" },
          fx: { v: "Not stated", tone: "mid" },
          dual: { v: "Hotels, B&Bs, cabins and more as types; no mixed mode stated", tone: "mid" },
          website: { v: "Add-on: Website Builder", tone: "mid" },
          fiscal: { v: "Not stated", tone: "mid" },
          languages: { v: "Site in 6: English, German, Spanish, Italian, Thai, Indonesian", tone: "info" },
          segment: { v: "Properties with 1 to 30 rooms, global", tone: "info" },
          support: { v: "24/7 chat, email and phone support; onboarding specialist", tone: "info" },
          llms: { v: "Yes, auto-generated: a list of pages", tone: "mid" },
        },
        faq: [
          {
            q: "Does Little Hotelier charge commission?",
            a: "On its direct engine, its pricing page states no commission. The **variable booking fees** — calculated on total bookings net of cancellations — apply to its metasearch and channels add-ons, and its payments charge per transaction (littlehotelier.com/pricing, September 22, 2026). Roombir charges no percentage on any booking.",
          },
          {
            q: "Which one is cheaper?",
            a: "It depends on what you need. Little Hotelier calculates the price by number of rooms and adds revenue and the website as add-ons; Roombir brings them into the catalog, with a flat fee per property. Its calculator and [our plans](/precios) are published: do the math with your own numbers.",
          },
          {
            q: "Little Hotelier has a channel manager and Roombir doesn't?",
            a: "Correct, and it is the most important difference if you sell on Booking or Expedia today. It is in our [product status](/nosotros#estado) and we won't tell you otherwise.",
          },
        ],
      },
      amenitiz: {
        name: "Amenitiz",
        site: "amenitiz.com",
        oneLiner: "European all-in-one for independents with 3–30 rooms, website included. Annual contract and quote-based pricing.",
        meta: {
          title: "Roombir vs Amenitiz",
          description:
            "Amenitiz and Roombir compared: pricing, lock-in, commission, revenue, channel manager, payments, tax invoicing and AI. Verified against amenitiz.com on September 2, 2026.",
        },
        hero: {
          title: "Roombir vs *Amenitiz*",
          lead:
            "Amenitiz is the system closest to Roombir in idea: everything in one place, website included, for independent properties with 3 to 30 rooms. It is European —Spain, France, Italy, Portugal— and brings two things we don't: channel manager and payments, plus tax certifications for those four countries. It asks for a one-year contract and the price is confirmed on a call.",
        },
        them: [
          "You are in Spain, France, Italy or Portugal and need certified tax invoicing: VeriFactu, NF525, FatturaPA, SEF.",
          "You need a channel manager and card payments from day one.",
          "You would rather have a team build your website than build it yourself.",
        ],
        us: [
          "You don't want to sign a year before knowing whether it works for you.",
          "You want the price on the website and not “confirmed on the demo”.",
          "You are in Latin America, sell in pesos or reais, and need multi-currency with a frozen rate and an assistant that executes.",
        ],
        rows: {
          price: { v: "Not on the pricing page (“price on request”); its llms.txt mentions from €5 per room per month", tone: "mid" },
          trial: { v: "No: the entry point is “Book a demo”", tone: "no" },
          lockin: { v: "1-year contract (per its own llms.txt)", tone: "no" },
          commission: { v: "0% on direct bookings (stated)", tone: "ok" },
          rms: { v: "Add-on: PriceAdvisor", tone: "mid" },
          channel: { v: "Yes, 150+ OTAs", tone: "ok" },
          payments: { v: "Yes, AmenitizPay: 1.5% + €0.25 per transaction (per its site)", tone: "ok" },
          ai: { v: "PriceAdvisor for pricing; no assistant that operates the system stated", tone: "mid" },
          fx: { v: "Not stated", tone: "mid" },
          dual: { v: "Hotels and B&Bs; no mixed mode stated", tone: "mid" },
          website: { v: "Yes, included and built by its team", tone: "ok" },
          fiscal: { v: "Yes: NF525 (France), VeriFactu (Spain), FatturaPA (Italy), SEF (Portugal)", tone: "ok" },
          languages: { v: "Site in 5: English, French, Spanish, Italian, Portuguese", tone: "info" },
          segment: { v: "Independents with 3 to 30 rooms in Spain, France, Italy and Portugal", tone: "info" },
          support: { v: "Native support in 5 languages, free migration, “live in 30 days or the first month is free”", tone: "info" },
          llms: { v: "Yes, curated: with pricing and comparisons against competitors", tone: "ok" },
        },
        faq: [
          {
            q: "Does Amenitiz have a lock-in?",
            a: "According to its own llms.txt file, the contract is **one year** and the final price is confirmed on the demo. Roombir is monthly with no lock-in, and the price is on the site.",
          },
          {
            q: "Does Amenitiz work in Argentina or Mexico?",
            a: "Its site and its llms.txt describe a product for Spain, France, Italy and Portugal, with tax certifications for those countries. We found no pricing, currencies or compliance for Latin America. Roombir was born here: pesos, reais, blue, MEP or CCL rates, and hours on this side of the world.",
          },
          {
            q: "What does Amenitiz do better?",
            a: "Three things we won't downplay: a channel manager with 150+ OTAs, integrated payments and certified tax invoicing in its four countries. And an implementation promise —“live in 30 days or the first month is free”— that we think is a good standard.",
          },
        ],
      },
      mews: {
        name: "Mews",
        site: "mews.com",
        oneLiner: "The highest-valued mid-market and enterprise PMS in the world. Open API only on Enterprise, quote-based pricing.",
        meta: {
          title: "Roombir vs Mews",
          description:
            "Mews and Roombir compared: pricing, trial, lock-in, revenue, open API, payments and AI. Verified against mews.com on September 2, 2026.",
        },
        hero: {
          title: "Roombir vs *Mews*",
          lead:
            "Mews is the reference modern PMS for urban hotels, chains and hostels, with embedded payments, POS and a 1,000-integration marketplace. It is another customer size and another price. The comparison matters for one reason: its pricing page puts the open API and the full marketplace on the Enterprise plan, while the entry plan comes with eight integrations and chatbot support.",
        },
        them: [
          "You are a chain, a large urban hotel or a group with finance and IT teams.",
          "You need POS, embedded payments and accounting integrated at scale.",
          "You will use the 1,000-integration marketplace and can pay for the plan that unlocks it.",
        ],
        us: [
          "You have between 1 and 50 units and nobody in IT.",
          "You want to know the price before the demo and sign no lock-in.",
          "You want the open layer — llms.txt, readable availability — to come with the booking engine and not only on the most expensive plan.",
        ],
        rows: {
          price: { v: "No: three plans with “Get Pricing”", tone: "no" },
          trial: { v: "No: the entry point is “Book a demo”", tone: "no" },
          lockin: { v: "Not stated on its pricing page", tone: "mid" },
          commission: { v: "States no commission on the engine", tone: "ok" },
          rms: { v: "Separate product (Mews RMS); not in the three published plans", tone: "mid" },
          channel: { v: "Via Marketplace: 8 integrations on Essentials (with Booking.com and Expedia); unlimited only on Enterprise", tone: "mid" },
          payments: { v: "Yes, embedded payments from Essentials", tone: "ok" },
          ai: { v: "AI summaries of guest preferences (Advanced); no operating assistant stated", tone: "mid" },
          fx: { v: "Multicurrency as a feature; no freezing stated", tone: "mid" },
          dual: { v: "Hotels, hostels, extended stay; no mixed mode stated", tone: "mid" },
          website: { v: "No: booking engine yes, website no", tone: "no" },
          fiscal: { v: "Not stated", tone: "mid" },
          languages: { v: "Site in 7: English (US and GB), French, German, Spanish, Dutch, Italian", tone: "info" },
          segment: { v: "Hotels, groups and chains, hostels; 15,000 properties in 85 countries", tone: "info" },
          support: { v: "24/7 chatbot on Essentials; Mews University; public community", tone: "info" },
          llms: { v: "No llms.txt (404 when verified)", tone: "no" },
        },
        faq: [
          {
            q: "Why compare Roombir with Mews if they are different sizes?",
            a: "Because when a hotelier searches for “the best PMS”, Mews shows up first, and it is worth knowing what you get: an excellent system for hotels with a team, whose entry plan comes with eight integrations and whose open API lives on Enterprise. If your hotel has twelve rooms, that is not your bracket.",
          },
          {
            q: "Is Mews more complete than roombir?",
            a: "Yes, in payments, POS, accounting and integrations. Roombir has no payments and no channel manager. What we do have is what Mews reserves for its most expensive plan, and here it comes with the booking engine: the open layer —llms.txt, readable availability. And an assistant that executes, depending on the plan.",
          },
          {
            q: "How much does Mews cost?",
            a: "It does not publish it: Essentials, Advanced and Enterprise, all three with “Get Pricing”. The figures floating around are third-party estimates and we don't repeat them.",
          },
        ],
      },
    },
  },

  video: {
    meta: {
      title: "Video",
      description: "Roombir in one minute: five vendors that become one, and a whole hotel you can ask for in a conversation.",
    },
    hookLead: "Your hotel",
    hook: [
      "Operational chaos",
      "is killing you.",
    ],
    sprawlIn: [
      "Bookings",
      "Guest requests",
      "Suppliers",
      "Breakages / repairs",
    ],
    sprawlAsk: [
      "Is this *urgent*?",
      "*HOW* do we solve it?",
      "*WHO* takes it on?",
      "Do we have all the *guest info*?",
    ],
    sprawlChain: [
      "Confirming anything takes *HOURS*",
      "Decisions get *LOST*",
      "*YOU WON'T SEE IT* in time to unblock it",
      "*OVERBOOKING* happens and brings complaints",
      "*8 HOURS* gone and you still don't know if it helped",
    ],
    sprawlFoot: [
      "Context gets *LOST*",
      "Reviews and complaints stay *SCATTERED*",
    ],
    sprawlApps: "*PAYING FOR SEVERAL APPS* you don't even use fully",
    tooManyApps: "Too many apps…",
    tooManyVendors: "Too many vendors…",
    vendors: [
      "PMS",
      "Channel manager",
      "Booking engine",
      "RMS",
      "Website",
    ],
    contextLost: "Context gets lost.",
    noStaff: [
      "You don't have a revenue manager.",
      "You don't have a community manager.",
    ],
    youAre: "You have *you*.",
    mazeChips: [
      "Who confirmed 203?",
      "What do we charge Saturday?",
      "Did the deposit arrive?",
      "Who has the Excel?",
      "Is 104 clean?",
      "What did the guest say?",
    ],
    kills: {
      pre: [
        "Scattered tools kill",
        "Scattered information kills",
      ],
      words: [
        "*your time*.",
        "*your revenue*.",
      ],
    },
    punchline: {
      pre: "No more ",
      struck: "loose spreadsheets",
      post: ".",
    },
    meet: "Meet",
    promise: [
      "Your property,",
      "*whole*,",
      "in one *system*.",
    ],
    builtTo: {
      lead: "Built to",
      pre: "eliminate ",
      struck: "operational chaos",
      post: ".",
    },
    modules: {
      reservas: "Bookings",
      linkhub: "LinkHub",
      revenue: "Revenue",
      tourism: "Tourism status",
      ia: "Roombir AI",
      staypass: "StayPass",
      rooms: "Rooms",
      reports: "Reports",
    },
    moreModules: [
      "Rates",
      "Housekeeping",
      "Sites",
      "Guests",
      "Agents",
      "Workspaces",
      "Competitors",
    ],
    brand: "One *system*.",
    shotHead: [
      "Bookings, rates and guests",
      "on a single screen.",
    ],
    designed: [
      "Designed with",
      "*millimetre precision*.",
    ],
    hinge: {
      line: "Why not just ask?",
    },
    unlock: {
      lead: "One conversation unlocks",
      head: "Maximum",
      words: [
        "occupancy",
        "visibility",
        "rate",
        "context",
        "performance",
      ],
      experience: "efficiency",
    },
    era: {
      lead: "A new era of",
      words: [
        "bookings",
        "revenue",
        "strategy",
        "AI",
      ],
    },
    outro: "Roombir. Your hotel, in a *conversation*.",
    end: {
      tagline: "Designed for your property",
      cta: "Start today at roombir.com",
    },
    booking: {
      tag: "today",
      guest: "Martina García",
      detail: "19 → 22 Mar · 3 nights · Superior Double",
      amount: "$288,000",
    },
    linkhub: {
      tag: "book",
      tap: "Book online",
      title: "Book",
      checkin: "Check-in",
      checkout: "Check-out",
      inDate: "Sat 21 Mar",
      outDate: "Mon 23 Mar",
      guests: "2 guests",
      search: "Search",
      nights: "2 nights",
      room: "Superior Double",
      price: "$96,600 / night",
      book: "Book",
    },
    iaCard: {
      ask: "Move García to 203 and email them",
      steps: [
        {
          label: "Booking moved",
          tool: "move booking",
        },
        {
          label: "Email sent",
          tool: "send email",
        },
      ],
      answer: "Done. García is in 203 and already has the notice.",
      hello: "How can I help?",
      hint: "Operations, availability, rates and policies.",
      placeholder: "Ask anything…",
      chips: ["Availability", "Weekend rate", "Pending payments", "Cancellations"],
    },
    rooms: {
      tag: "floor 2",
      floor: "Floor 2",
      superior: "Superior Double",
      double: "Double",
      short: {
        available: "Free",
        occupied: "In",
        cleaning: "Clean",
        maintenance: "Maint.",
        blocked: "Block",
        checkoutPending: "C/O",
      },
      legend: {
        available: "Available",
        occupied: "Occupied",
        cleaning: "Cleaning",
      },
    },
    stay: {
      tag: "staying",
      greeting: "Hi, Martina",
      sub: "Your stay at Hotel del Parque",
      badge: "Checked in",
      codeLabel: "Code for paperwork",
      copy: "Copy",
      stayLabel: "Property and stay",
      hotel: "Hotel del Parque · 103 Superior Double",
      dates: "19 → 22 March · 3 nights",
    },
    status: {
      pending: "Pending",
      confirmed: "Confirmed",
      checkedIn: "Checked in",
      checkedOut: "Checked out",
      cancelled: "Cancelled",
      noShow: "No show",
    },
    reports: {
      tag: "March",
      closed: "Checked out · cycle closed",
      kpis: [
        {
          label: "Occupancy",
          value: "78%",
          hint: "Feb: 71%",
        },
        {
          label: "ADR",
          value: "$96,600",
          hint: "per night",
        },
        {
          label: "RevPAR",
          value: "$75,300",
          hint: "",
        },
        {
          label: "Revenue",
          value: "$4.1M",
          hint: "127 nights",
        },
      ],
    },
    tourism: {
      title: "Tourism status · London",
      updated: "updated 12 min ago",
      metrics: [
        {
          label: "Events in 30 days",
          value: "6",
          hint: "Premier League match · 21 Mar · 3 km away",
          trend: "up",
        },
        {
          label: "Next long weekend",
          value: "3 → 6 Apr",
          hint: "4 days · Good Friday + Easter Monday",
          trend: "neutral",
        },
        {
          label: "Weekend weather",
          value: "13°",
          hint: "sunny spells · spring",
          trend: "up",
        },
        {
          label: "Destination attention",
          value: "+18%",
          hint: "searches · 30 days vs. prior",
          trend: "up",
        },
      ],
      alert: "Easter weekend 3–6: the city fills up.",
      more: "See more",
    },
    chat: {
      placeholder: "Ask Roombir AI for something",
      thinking: "Roombir AI is thinking",
      wait: "Checking the system",
      turns: [
        {
          ask: "Add a booking for today, 2 nights, superior double",
          steps: [
            {
              label: "Availability",
              tool: "find availability",
            },
            {
              label: "Booking created",
              tool: "create booking",
            },
          ],
          answer: "Done. It's #BK-4821: today, 2 nights, Superior Double.",
          hold: 700,
        },
        {
          ask: "How's the weekend looking? Anything on in town?",
          steps: [
            {
              label: "Tourism status",
              tool: "tourism status",
            },
            {
              label: "Weekend revenue",
              tool: "revenue summary",
            },
          ],
          answer: "Strong Saturday: a Premier League match just 3 km away. I suggest +10% on Saturday and a 2-night minimum.",
          hold: 1800,
        },
        {
          ask: "Go ahead, apply it.",
          steps: [
            {
              label: "+10% on Saturday",
              tool: "apply rate",
            },
          ],
          answer: "Done. Saturday goes from $96,600 to $106,260 on the engine.",
          hold: 900,
        },
      ],
      bookingBlock: {
        guest: "Martina García",
        detail: "today → +2 · 2 nights · Superior Double",
        amount: "$193,200",
      },
      ruleBlock: {
        title: "Rate applied",
        meta: "Sat 21",
        kpis: [
          {
            label: "Before",
            value: "$96,600",
            hint: "per night",
          },
          {
            label: "Now",
            value: "$106,260",
            hint: "per night",
          },
          {
            label: "Change",
            value: "+10%",
            hint: "Saturday",
          },
        ],
      },
      rates: {
        old: "$96,600",
        next: "$106,260",
        delta: "+10%",
      },
    },
    chaos: {
      chat: "chat",
      sheet: "spreadsheet",
      notes: "notes",
      mail: "mail",
      agenda: "diary",
    },
    actions: {
      create: "New booking · 3 nights",
    },
    url: "roombir.com",
    ui: {
      shell: {
        company: "Hotel del Parque S.A.",
        property: "Hotel del Parque",
        space: "Front desk",
        initials: "MG",
      },
      bookingTabs: [
        "Day panel",
        "Bookings",
        "Calendar",
        "New booking",
        "Rates",
        "Availability",
        "Promotions",
        "Settings",
      ],
      roomsTabs: [
        "Room status",
        "Occupancy map",
        "Categories",
      ],
      rmsTabs: [
        "Analytics",
        "Pace",
        "Scenarios",
        "Events",
        "Competitors",
        "Decisions",
        "Recommendations",
        "Settings",
      ],
      calendar: {
        hab: "Room",
        occupancy: "Occupancy",
        today: "Today",
        month: "March 2026",
        ranges: [
          "1w",
          "2w",
          "1m",
        ],
        search: "Search guest or code",
        categories: "All categories",
        states: "All statuses",
        refresh: "Refresh",
        create: "+ New",
        legend: {
          pending: "Pending",
          confirmed: "Confirmed",
          "checked-in": "Checked in",
          "checked-out": "Checked out",
          cancelled: "Cancelled",
          "no-show": "No show",
        },
        hint: "Drag a bar to move it",
        dows: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        monthTick: "Mar",
        cats: [
          {
            name: "Double",
            rate: "$96,600",
          },
          {
            name: "Superior Double",
            rate: "$106,000",
          },
        ],
        guests: [
          "Ruiz",
          "Pérez",
          "Sosa",
          "Bianchi",
          "Engine",
        ],
      },
      rooms: {
        floors: "All floors",
        order: "Sort",
        orderOpts: [
          "No.",
          "Floor",
          "Cat.",
        ],
        countWord: "rooms",
        search: "Search room...",
        categories: "All categories",
        refresh: "Refresh",
        columns: {
          available: "Available",
          occupied: "Occupied",
          cleaning: "Cleaning",
          maintenance: "Maintenance",
          blocked: "Blocked",
          "checkout-pending": "Checkout pend.",
        },
        empty: "No rooms",
        hint: "Drag a card to another column to change its status",
      },
      revenue: {
        title: "Rate recommendations",
        sub: "Accepting applies the rate to the booking engine as an override.",
        tabs: [
          "Pending",
          "History",
        ],
        status: {
          suggested: "Pending",
          accepted: "Accepted",
          applied: "Applied",
          rejected: "Rejected",
        },
        accept: "Accept",
        reject: "Reject",
        blockTitle: "Rate recommendations",
        blockMeta: "1 pending",
        footnote: "Accepting applies the rate to the booking engine as an override.",
        recs: [
          {
            date: "Sat 21 Mar",
            from: "$96,600",
            to: "$106,260",
            delta: "+10%",
            reason: "78% occupancy + Premier League match 3 km away",
            status: "suggested",
          },
          {
            date: "Sun 22 Mar",
            from: "$96,600",
            to: "$101,400",
            delta: "+5%",
            reason: "Pace +18% vs. your history · comp-set median $101,400",
            status: "suggested",
          },
          {
            date: "Tue 24 Mar",
            from: "$96,600",
            to: "$91,800",
            delta: "-5%",
            reason: "Low 7-day pickup · Tuesday with no events nearby",
            status: "suggested",
          },
        ],
      },
      dashboard: {
        checkin: "Check-in",
        checkout: "Check-out",
        active: "Active bookings",
        activeSub: "Confirmed + in-house",
        occupancy: "Occupancy today",
        occupancySub: "Arriving this week: 6",
        demand: "Demand curve",
        demandSub: "Peak: 9 · Average: 5.4",
        recent: "Recent bookings",
        recentSub: "Latest guest bookings",
        newBooking: "New booking",
        cols: [
          "Booking ID",
          "Guest name",
          "Check-in",
          "Check-out",
          "Total",
          "Status",
        ],
        status: {
          confirmed: "Confirmed",
          "checked-in": "Checked in",
          pending: "Pending",
        },
        more: "See more",
        bookings: "Bookings",
        bookingsSub: "Last 3 months",
        months: [
          "January",
          "February",
          "March",
        ],
        topCats: "Top categories",
        topCatsSub: "Highest occupancy today",
        topCatNames: ["Superior Double", "Double", "Suite"],
        quick: "Quick access",
        quickSub: "Active apps in Front desk",
        quickItems: [
          "Day panel",
          "Bookings",
          "New booking",
          "Rates",
        ],
        rows: [
          {
            code: "#RES-2026-KGMJ",
            cat: "Superior Double",
            guest: "Martina García",
            mail: "martina.garcia@gmail.com",
            inDate: "21 Mar 2026",
            outDate: "23 Mar 2026",
            nights: "2 nights",
            total: "$212,520",
            status: "confirmed",
          },
          {
            code: "#RES-2026-NGA6",
            cat: "Double",
            guest: "Carlos Tévez",
            mail: "ctevez@hotmail.com",
            inDate: "19 Mar 2026",
            outDate: "22 Mar 2026",
            nights: "3 nights",
            total: "$289,800",
            status: "checked-in",
          },
          {
            code: "#RES-2026-3CYL",
            cat: "North Suite",
            guest: "Ana Bianchi",
            mail: "ana.bianchi@yahoo.com",
            inDate: "20 Mar 2026",
            outDate: "24 Mar 2026",
            nights: "4 nights",
            total: "$592,000",
            status: "confirmed",
          },
          {
            code: "#RES-2026-B0SO",
            cat: "Double",
            guest: "Lucas Pérez",
            mail: "lperez@outlook.com",
            inDate: "22 Mar 2026",
            outDate: "25 Mar 2026",
            nights: "3 nights",
            total: "$289,800",
            status: "pending",
          },
          {
            code: "#RES-2026-WJU9",
            cat: "Superior Double",
            guest: "Sofía Ruiz",
            mail: "sofia.ruiz@gmail.com",
            inDate: "23 Mar 2026",
            outDate: "26 Mar 2026",
            nights: "3 nights",
            total: "$318,780",
            status: "confirmed",
          },
        ],
      },
      linkhub: {
        name: "Hotel del Parque",
        bio: "London · 3 km from Hyde Park",
        bookTitle: "Book",
        checkin: "Check-in",
        checkout: "Check-out",
        guests: "Guests",
        guestsValue: "2 adults",
        search: "Search",
        blocks: [
          "Website",
          "WhatsApp",
          "Directions",
          "Contact",
        ],
        footer: "Made with roombir",
        inShort: "Mar 21",
        outShort: "Mar 23",
        travelers: "2 travelers",
        monthTitle: "March 2026",
        dows: [
          "SU",
          "MO",
          "TU",
          "WE",
          "TH",
          "FR",
          "SA",
        ],
        cancel: "Cancel",
        next: "Next",
        resultsTitle: "Choose your room",
        summary: "21 Mar → 23 Mar · 2 adults · 2 nights",
        rooms: [
          {
            name: "Superior Double",
            price: "$106,260",
          },
          {
            name: "Double",
            price: "$96,600",
          },
          {
            name: "North Suite",
            price: "$148,000",
          },
        ],
        perNight: "/ night",
        book: "Book",
      },
      stay: {
        brand: "StayPass",
        tabs: [
          "Home",
          "Profile",
        ],
        user: "Martina",
        section: "Bookings",
        filters: [
          "All",
          "Active",
          "Past",
        ],
      },
      reports: {
        title: "Reports",
        updated: "Updated 3/21/2026, 09:12",
        refresh: "Refresh",
        ranges: [
          "Last week",
          "Last month",
          "3 months",
          "6 months",
        ],
        rangeNote: "2/20 → 3/21 · grouped by week",
        section: "Occupancy and volume",
        sectionSub: "How the property is running now and what's coming.",
        kpis: [
          {
            label: "Active bookings today",
            value: "14",
            hint: "confirmed + in-house covering today",
          },
          {
            label: "Arriving this week",
            value: "9",
            hint: "check-ins in the next 7 days",
          },
          {
            label: "Occupancy",
            value: "78%",
            hint: "Feb: 71%",
            badge: "+7%",
          },
          {
            label: "RevPAR",
            value: "$75,300",
            hint: "24 units · 30 days",
          },
        ],
        chart: "Demand curve — next 30 days",
        chartSub: "Confirmed/in-house bookings covering each night.",
      },
    },
    hud: {
      play: "Play",
      pause: "Pause",
      restart: "Restart",
      language: "Language",
      scene: "Scene",
      fullscreen: "Full screen",
      exitFullscreen: "Exit full screen",
      replay: "Watch again",
    },
  },

  videoIa: {
    meta: {
      title: "Video · Roombir AI",
      description: "Roombir AI in just over a minute: everyday requests that get done, your destination's briefing, a plan when the request is a goal, and your permissions always first.",
    },
    tabsLine: "What takes you *four tabs* today…",
    placeholder: "Ask Roombir AI for something",
    name: "Roombir AI",
    demo: {
      thinking: "Roombir AI is thinking",
      wait: "Checking the system",
      captions: ["Attach a file", "Ask for a report", "Dictate by voice", "See your destination in detail"],
      attach: {
        label: "Attach file",
        media: "Media",
        docs: "Documents",
        image: "Image",
        video: "Video",
        audio: "Audio",
        pdf: "PDF",
        csv: "CSV",
        file: "april-rates.pdf",
        ask: "Load these rates for April",
        steps: [
          { label: "PDF read · 2 pages", tool: "read attachment" },
          { label: "30 rates loaded", tool: "load rates" },
        ],
        answer: "Done: I loaded the 30 April rates into the Superior Double plan.",
      },
      report: {
        ask: "Which channel cancels on me the most?",
        steps: [{ label: "Channel report", tool: "channel report" }],
        answer: "Booking.com: 18% cancellations over 90 days. Direct: 4%.",
        title: "Cancellations by channel · 90 days",
        meta: "377 bookings",
        kpis: [
          { label: "Booking.com", value: "18%", hint: "41 of 228" },
          { label: "Airbnb", value: "9%", hint: "7 of 78" },
          { label: "Direct", value: "4%", hint: "3 of 71" },
        ],
      },
      voice: {
        listening: "Listening…",
        heard: "Block the Alerce cabin Tuesday afternoon for maintenance",
        steps: [{ label: "Block created", tool: "create block" }],
        answer: "Done: the Alerce cabin is blocked from Tuesday afternoon. The morning stays on sale.",
      },
      tourism: {
        ask: "What's happening in the city this month?",
        steps: [{ label: "Tourism status", tool: "tourism status" }],
        answer: "A busy month: a big match 3 km away and the Easter long weekend.",
        panel: {
          title: "My tourism status",
          live: "Live data",
          delayed: "Delayed",
          sections: [
            {
              title: "Nearby events",
              live: true,
              metrics: [
                { value: "6", label: "Events in 30 days" },
                { value: "21 Mar", label: "Upcoming major event" },
              ],
              narrative: "",
              items: [
                { title: "Premier League match", detail: "21 Mar · 3 km away" },
                { title: "London Marathon", detail: "26 Apr · 2 km away" },
                { title: "Trade fair at Olympia", detail: "14 → 16 Apr · 5 km away" },
              ],
              spark: false,
            },
            {
              title: "Season and calendar",
              live: false,
              metrics: [
                { value: "3 → 6 Apr", label: "Next long weekend" },
                { value: "30 Mar → 10 Apr", label: "Next school break" },
              ],
              narrative: "Easter falls on 3–6 April: a long weekend in the UK and in Germany, your two main markets.",
              items: [],
              spark: false,
            },
            {
              title: "Interest and markets",
              live: true,
              metrics: [
                { value: "+18%", label: "Online interest" },
                { value: "3", label: "Source markets on holiday (60 d)" },
              ],
              narrative: "",
              items: [],
              spark: true,
            },
          ],
          spark: "Daily Wikipedia views (30 days)",
          readOnly: "Read only: to act on this, ask Roombir AI in the chat.",
          footer: "Updated 12 min ago · Sources: Nager.Date · Open-Meteo · Wikipedia · OpenStreetMap",
        },
      },
    },
    dossier: {
      count: "15 sources, every data point dated",
      topics: [
        "Public holidays",
        "Long weekends",
        "School holidays",
        "Sports",
        "Culture",
        "Conferences and fairs",
        "Flights",
        "Weather",
        "Exchange rates",
        "Safety",
        "Natural hazards",
        "Visas",
        "Hotel supply",
        "Destination interest",
        "Surroundings",
      ],
      dates: ["Sep 22", "Sep 21", "Sep 22", "Sep 20", "Sep 22"],
      placeMeta: "London · United Kingdom",
    },
    versus: {
      pre: "A generic chat",
      struck: "searches",
      post: ".",
      us: "Roombir AI starts from *a briefing*.",
    },
    goal: {
      ask: "I want more bookings",
      reads: "18 sources from your operation",
      time: "1.1 s",
      sources: [
        "Inventory",
        "Pace",
        "Daily panel",
        "Engine",
        "Rate plans",
        "Promotions",
        "Restrictions",
        "Website",
        "LinkHub",
        "Visibility",
        "Google profile",
        "OTAs",
        "Social",
        "Reviews",
        "Pricing rules",
        "Recommendations",
        "Competitors",
        "Market",
      ],
      plan: {
        title: "Low season, slow pace",
        meta: "Plan · 3 steps",
        diagnosis: "October is selling slower than your history for the same dates.",
        steps: [
          "10% promo on the direct channel only",
          "1-night minimum on slow Tuesdays and Wednesdays",
          "Pricing rule only on the dates that lag",
        ],
        confirm: "Confirm",
        done: "Applied",
      },
    },
    perms: {
      spaces: ["Front desk", "Management"],
      tools: "tools",
      modal: {
        title: "Delete the “High season” rate",
        body: "This can't be undone.",
        prompt: "Type the name to confirm",
        word: "High season",
        confirm: "Delete",
        cancel: "Cancel",
      },
    },
    talk: {
      lines: ["You type.", "You talk.", "You show it."],
      typed: "Which channel cancels on me the most?",
      listening: "Listening…",
      heard: "Block the Alerce cabin Tuesday afternoon",
      file: "october-rates.pdf",
      fileMeta: "PDF · 2 pages",
      shot: "ota-screenshot.png",
      withFile: "Load these rates for October",
    },
  },

  videoProps: {
    meta: {
      title: "Video · Properties",
      description: "Properties in a minute: several properties under one account, each with its own currency and team, access by property and by role, and everything else hanging from the property sheet.",
    },
    name: "Properties",
    owner: { name: "Martina García", role: "Owner", initials: "MG" },
    company: "Hotel del Parque S.A.",
    hotel: {
      name: "Hotel del Parque",
      city: "Mendoza, Argentina",
      type: "Hotel",
      inventory: "3",
      inventoryWord: "categories",
      spaces: "4",
      currency: "ARS",
      language: "Español",
    },
    cabins: {
      name: "Cabañas del Lago",
      city: "Villa La Angostura, Argentina",
      cityOnly: "Villa La Angostura",
      type: "Cabin",
      inventory: "6",
      inventoryWord: "units",
      spaces: "4",
      currency: "USD",
      language: "English",
    },
    spacesWord: "spaces",
    counts: { one: "1 property", two: "2 properties", users2: "2 users", users3: "3 users" },
    status: "active",
    chips: { currency: "Currency", timezone: "Time zone", language: "Language", tz: "UTC−3" },
    // El recorrido: la organización (tipos, estructura, reservas), no el alta.
    captions: ["Each property, with its type", "Its bookings, in its currency", "Switch property from the top bar", "Find anything from one place"],
    cabinUnits: ["Alerce cabin", "Coihue cabin", "Arrayán cabin", "Maitén cabin", "Lenga cabin", "Ñire cabin"],
    suiteRate: "$142,000",
    cabinRate: "US$180",
    templateName: "Hotel del Parque · spaces and apps",
    templateNone: "No template",
    coords: { pair: "-40.7625, -71.6463", lat: "-40.7625", lng: "-71.6463" },
    invite: {
      name: "Lucía Ferreyra",
      email: "lucia@cabanasdellago.com",
      role: "Staff",
      spaces: [
        { name: "Front desk", apps: "9" },
        { name: "Housekeeping", apps: "4" },
        { name: "Management", apps: "" },
      ],
      users: "Users",
      addedRow: "Cabañas del Lago · Front desk",
      allProps: "All properties",
    },
    search: {
      query: "Alerce",
      results: [
        { kind: "room", title: "Alerce cabin", meta: "Cabañas del Lago · 4 guests" },
        { kind: "booking", title: "#RES-2026-QX4T · Julián Paz", meta: "Alerce cabin · Oct 12 → 15" },
        { kind: "property", title: "Cabañas del Lago", meta: "Villa La Angostura" },
      ],
    },
    hotelTotals: ["$212,520", "$289,800", "$592,000", "$190,400", "$450,000"],
    cabinRows: [
      { code: "#RES-2026-QX4T", cat: "Alerce cabin", guest: "Julián Paz", mail: "julian.paz@gmail.com", inDate: "Oct 12, 2026", outDate: "Oct 15, 2026", nights: "3 nights", total: "US$540", status: "confirmed" },
      { code: "#RES-2026-7HPA", cat: "Coihue cabin", guest: "Emma Walker", mail: "emma.w@outlook.com", inDate: "Oct 10, 2026", outDate: "Oct 14, 2026", nights: "4 nights", total: "US$760", status: "checked-in" },
      { code: "#RES-2026-2KDN", cat: "Arrayán cabin", guest: "Lucas Stein", mail: "lstein@gmx.de", inDate: "Oct 14, 2026", outDate: "Oct 18, 2026", nights: "4 nights", total: "US$720", status: "confirmed" },
      { code: "#RES-2026-M8RE", cat: "Maitén cabin", guest: "Sofía Ruiz", mail: "sofiaruiz@yahoo.com", inDate: "Oct 11, 2026", outDate: "Oct 13, 2026", nights: "2 nights", total: "US$330", status: "pending" },
      { code: "#RES-2026-VT0L", cat: "Lenga cabin", guest: "Noah Martin", mail: "noahm@gmail.com", inDate: "Oct 16, 2026", outDate: "Oct 19, 2026", nights: "3 nights", total: "US$510", status: "confirmed" },
    ],
    access: {
      people: [
        { name: "Lucía Ferreyra", initials: "LF", space: "Front desk", scope: "Cabañas del Lago" },
        { name: "Tomás Ríos", initials: "TR", space: "Housekeeping", scope: "Hotel del Parque" },
        { name: "Martina García", initials: "MG", space: "Management", scope: "All" },
      ],
      caps: "10 admin permissions, granted one by one",
    },
    root: {
      items: ["Rooms", "Bookings", "Brand", "Website", "LinkHub", "Reviews", "Galleries"],
      phoneLabel: "Phone",
      phoneOld: "+54 261 555-0100",
      phoneNew: "+54 261 555-0199",
      targets: ["Website", "LinkHub", "Booking engine"],
      updated: "Updated",
    },
    // Los rótulos de la UI real, copiados de los diccionarios del PMS (pms-core/app/src/i18n/dictionaries).
    ui: {
      newProperty: "New property",
      typeLabel: "Accommodation type *",
      typeHint: "Defines how your accommodations are sold: by specific unit or by category.",
      template: "Template (optional)",
      create: "Create property",
      nameLabel: "Name *",
      city: "City *",
      country: "Country",
      cancel: "Cancel",
      properties: "Properties",
      unitTitle: "Selling by units",
      unitHint: "Each accommodation is booked individually (1:1).",
      catTitle: "Selling by categories",
      catHint: "It is sold by room type from a pool of units.",
      tCabin: "Cabin",
      tVilla: "Villa",
      tVacation: "Vacation rental",
      tGlamping: "Glamping",
      tResort: "Resort",
      tAparthotel: "Aparthotel",
      tHostel: "Hostel",
      editProperty: "Edit property",
      coords: "Coordinates",
      lat: "Latitude",
      lng: "Longitude",
      coordTip: "Tip: in Google Maps right-click on the point → copy the coordinates and paste the pair here (it splits itself into Lat / Long).",
      howCopy: "How to copy",
      publicContact: "Public contact",
      publicEmail: "Public email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      social: "Social media",
      address: "Address",
      save: "Save changes",
      spacesTitle: "Properties and workspaces",
      spacesIntro: "Choose which properties they can access. Open each one to assign the workspaces they can work in.",
      onlyChosen: "Only the selected ones",
      allFuture: "All, including future ones",
      assignedSpaces: "spaces assigned",
      seeSpaces: "View spaces",
      isDefault: "Default",
      allApps: "Access to every app",
      appsEnabled: "apps enabled",
      operate: "Operate",
      capsTitle: "Administrative access",
      capsHint: "Choose what this person can manage within the company.",
      gUsers: "Users",
      gProps: "Properties and spaces",
      gCompany: "Company",
      changeProperty: "Switch property",
      searchPlaceholder: "Search reservations, guests, rooms, apps, users…",
      navigate: "navigate",
      open: "open",
      close: "close",
      kBooking: "Reservation",
      kProperty: "Property",
      kRoom: "Room",
      currentProperty: "Current property",
      createUserTitle: "Create a user",
      createUserBtn: "Create user",
      createUserIntro: "The account is created with a temporary password. On first sign-in the user must replace it with their own.",
      fullName: "Full name",
      email: "User email",
      role: "Role",
      caps: [
        "Manage users",
        "Assign workspaces",
        "Create properties",
        "Edit properties",
        "Switch properties",
        "Manage workspaces",
        "Enable and disable apps",
        "Company settings",
        "Billing and plan",
        "Websites"
      ]
    },
  },

  /* The Rooms, Booking engine, Reports, Revenue and Marketing videos
     (`/video/rooms`, …): the headlines come from each page; only what is
     specific to each video lives here (step captions and sample data). */
  videoTours: {
    rooms: {
      meta: {
        title: "Video · Rooms",
        description: "Rooms in a minute: the state of the house at a glance, category pools and named cabins in the same calendar, statuses that rule out the impossible, and a night that sells only once.",
      },
      captions: ["The state of the house, at a glance", "Category pools and named cabins, in one calendar", "A night sells only once"],
      modes: ["Category pool", "Named unit"],
      cabinCat: "Cabins",
      cabinRate: "$140,000",
      cabins: ["Alerce cabin", "Coihue cabin"],
      guestNew: "Romero",
      sources: { first: "Your website", second: "Booking" },
      lock: { title: "That night is already sold", sub: "Alerce cabin · Mar 21 · the database keeps the second one out" },
      states: { forbidden: "Not with the guest still inside", allowed: "Checkout pending comes first" },
      notes: {
        card: {
          t: "One card, one room",
          d: "The color tells its status: free, occupied, being cleaned…"
        },
        moved: {
          t: "Cleaning is done",
          d: "Drag it to Available and it's back on sale."
        },
        pool: {
          t: "Category pool",
          d: "The guest buys “a Double”; the room is assigned later."
        },
        row: {
          t: "Each row, a room",
          d: "And each bar, a booking: guest, people and nights."
        },
        unit: {
          t: "Named unit",
          d: "The guest books the Alerce cabin, with its photos and its price."
        },
        web: {
          t: "A booking comes in from your website",
          d: "It takes the nights of the 19th to the 21st."
        },
        second: {
          t: "Booking asks for the same nights",
          d: "The database won't let it in."
        }
      },
      load: {
        card: { name: "Superior Double", units: "4 units", mode: "Category pool", rate: "$106,000 / night", size: "24 m²", guests: "2 adults", amenities: ["Wi-Fi","Air conditioning","Mountain view"] },
        chips: ["Calendar", "Booking engine", "Your website", "LinkHub", "Revenue", "Roombir AI", "Reports"],
      },
    },
    motor: {
      meta: {
        title: "Video · Booking engine",
        description: "The booking engine in a minute: the guest picks their nights on your website, the booking lands on the day panel and the calendar, every price says where it comes from and the amount doesn't move with the exchange rate.",
      },
      captions: ["The booking lands on the day panel", "And takes its nights on the calendar", "The night's price, with its reason"],
      source: "Engine · your website",
      notes: {
        price: {
          t: "The price of each day",
          d: "Before picking dates, with the rates the engine charges."
        },
        units: {
          t: "How many are left",
          d: "Your real inventory: 3 left on the 21st."
        },
        photos: {
          t: "Every room, with its photos",
          d: "And its nightly price for those dates."
        },
        row: {
          t: "The new booking, on top",
          d: "Confirmed and with its total: nobody typed it in."
        },
        bar: {
          t: "Its two nights, taken",
          d: "Room 103 stops selling on the 21st and 22nd."
        },
        accept: {
          t: "You accept the suggestion",
          d: "That rate now overrides the others."
        }
      },
      chain: {
        title: "Where the price comes from",
        steps: ["Accepted in Revenue", "Rate plan", "Base price", "Promotions"],
        winner: "$106,260 · Sat Mar 21",
      },
      motorUi: {travelers: "Travelers",dates: "Dates",adults: "Adults",adultsHint: "18 and over",children: "Children",childrenHint: "3 – 17 years",infants: "Infants",infantsHint: "0 – 2 years",code: "Code",promoName: "Direct booking",optional: "Optional",back: "Back",done: "Done",available: "Available rooms",range: "Mar 21 → Mar 23",dayRange: "Mar 21 - Mar 23",nights: "2 nights",adultsCount: "2 adults",monthCaption: "March 2026",dows: ["Su","Mo","Tu","We","Th","Fr","Sa"]},
      promos: {
        title: "Promotions *seen before booking*.",
        notes: {
          code: { t: "With a code or automatic", d: "The guest types the code, or the promo applies on its own for their dates." },
          badge: { t: "The promo, in plain sight", d: "Badge, previous price struck through and the promo's name on every room." },
        },
      },
      currencyTitle: "The price the guest saw *stays frozen*.",
      currencies: ["US$ · US dollar", "$ · Argentine peso", "R$ · Real", "CLP · Chilean peso", "COP · Colombian peso", "MXN · Mexican peso", "S/ · Sol", "UYU · Uruguayan peso", "€ · Euro", "£ · Pound"],
      frozen: { guestLabel: "The guest saw", guestValue: "US$158.60", youLabel: "You charge", youValue: "$212,520", note: "Rate frozen at check-in · Mar 21, 09:12" },
    },
    reports: {
      meta: {
        title: "Video · Reports",
        description: "Reports in a minute: how the property is running without building a spreadsheet, every number against the previous period and, whatever isn't in the report, asked to Roombir AI.",
      },
      captions: ["How the property is running", "What's already booked, night by night", "If it isn't in the report, ask"],
      ask: "Which channel cancels on me the most this month?",
      steps: [
        { label: "This month's bookings read", tool: "bookings report" },
        { label: "Cancellations by channel", tool: "cancellations" },
      ],
      answer: "Booking cancels the most: 6 of 21 bookings (29%). Your website, 1 of 14. The front desk has 2 bookings, so I won't call it.",
      block: {
        title: "Cancellations by channel",
        meta: "March",
        kpis: [
          { label: "Booking", value: "29%", hint: "6 of 21" },
          { label: "Your website", value: "7%", hint: "1 of 14" },
          { label: "Front desk", value: "—", hint: "2 bookings: too few" },
        ],
      },
      compare: {
        vs: "vs. February",
        items: [
          { label: "Revenue", now: "$4.1M", prev: "$3.6M", delta: "+14%" },
          { label: "Lead time", now: "18 days", prev: "22 days", delta: "−4 days" },
          { label: "Average stay", now: "2.8 nights", prev: "2.5 nights", delta: "+0.3" },
          { label: "Occupancy", now: "78%", prev: "71%", delta: "+7 pts" },
        ],
      },
      chips: ["Occupancy", "90-day demand", "ADR", "RevPAR", "Cancellations", "Channels", "Revenue", "Lead time", "Average stay", "Occupancy by category"],
    },
    revenue: {
      meta: {
        title: "Video · Revenue",
        description: "Revenue in a minute: every suggested price with its reason, accepting it applies it to the engine, the destination with its sources, and thirteen variables with a dry run.",
      },
      captions: ["Every price, with its reason", "Accepting applies it to the engine", "What drives demand, with the source"],
      vars: ["Occupancy", "Demand index", "Availability", "Competitor 1", "Competitor 2", "Competitor 3", "Competitor 4", "Competitor 5", "New bookings · 7 days", "New bookings · 30 days", "Event impact", "Days to event", "Pace index"],
      dryRun: {
        title: "Dry run",
        rule: "If occupancy ≥ 75% at 14 days → +8%",
        result: "Would have changed 9 nights",
        avg: "+$7,700 per night",
      },
      applied: "Rate applied to the engine",
    },
    marketing: {
      meta: {
        title: "Video · Marketing",
        description: "Marketing in a minute: a website and a LinkHub that already know what you have free, the editor with its AI assistant, followers who book from your social media, your brand loaded once and the whole hub in one place.",
      },
      linkhub: {
        title: "Turn your followers *into guests* with LinkHub.",
        points: ["They book right there, without leaving the link", "From Instagram, TikTok or WhatsApp", "Your free dates, in view instantly", "In a few taps, no extra forms"],
      },
      brand: {
        title: "Brand identity",
        name: "Hotel del Parque",
        palette: "Palette taken from the logo",
        tone: "Tone",
        toneValue: "Warm and friendly",
        font: "Typeface",
        fontValue: "Outfit",
        targets: ["Your website", "LinkHub", "Booking engine", "Search engines", "Guest emails", "Roombir AI"],
      },
      editor: {
        captions: [
          "Paste a screenshot and it builds the sections",
          "Point at a block and ask for the change",
          "A quality check that also fixes"
        ],
        bar: {
          add: "Add",
          layers: "Layers",
          files: "Files",
          popups: "Popups",
          motor: "Engine",
          settings: "Settings",
          ai: "Editor",
          preview: "Preview",
          unpublished: "Unpublished",
          discard: "Discard",
          quality: "Quality",
          publish: "Publish",
          published: "Published",
          page: "Edit page:",
          pageName: "Home",
          editIn: "Edit on:",
          device: "Desktop",
          live: "View live",
          domain: "Connect your domain"
        },
        chat: {
          title: "AI Editor",
          hello: "Hi! I'm Roombir AI. Ask me to create, edit or reorder sections.",
          placeholder: "Write to roombir… Paste images or select canvas elements to quote them.",
          cite: "Quote elements",
          shot: "reference-home.png",
          ask1: "Build my home page like this one, with my rooms",
          steps1: [
            "Reading the screenshot",
            "Hero section",
            "Rooms section",
            "Reviews section"
          ],
          answer1: "Done: I built the home page with three sections, as a draft.",
          quote: "Rooms",
          ask2: "Add two more cards",
          steps2: [
            "Editing “Rooms”"
          ],
          answer2: "I added two cards. Everything else stayed the same."
        },
        site: {
          nav: [
            "Rooms",
            "Services",
            "Location"
          ],
          book: "Book",
          heroTitle: "Your home by the park",
          heroSub: "Hotel del Parque · Mendoza, Argentina",
          roomsTitle: "Our rooms",
          rooms: [
            "Superior Double",
            "Park Suite",
            "Alerce Cabin",
            "Classic Double",
            "Coihue Cabin"
          ],
          guests: "guests",
          reviewsTitle: "What our guests say",
          review: "Delicious breakfast and a park view we won't forget.",
          reviewer: "Laura M. · Google"
        },
        quality: {
          title: "Site quality",
          sub: "Full check",
          gauges: [
            "Performance",
            "Accessibility",
            "Best practices",
            "SEO",
            "Agents"
          ],
          overall: "Overall score",
          fix: "Fix all",
          recheck: "Check again",
          errors: "Errors",
          passed: "Passed",
          issues: [
            "Images without a description",
            "Page description missing",
            "Text too small on mobile"
          ]
        },
        notes: {
          draft: {
            t: "Everything goes to draft",
            d: "Publishing is a separate step, and it's yours."
          }
        }
      },
      hub: {
        title: "And everything else, *in the same place*.",
        menu: [
          "Websites",
          "Brand identity",
          "Galleries",
          "Reviews",
          "LinkHub",
          "File library"
        ],
        chips: [
          "Photos and videos",
          "Image editor",
          "Branded templates",
          "Review import",
          "LinkHub with QR",
          "Popups and WhatsApp",
          "Your domain",
          "Several languages",
          "SEO and GEO",
          "Readable by an AI"
        ]
      },
      one: "All in roombir, connected to your bookings",
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
