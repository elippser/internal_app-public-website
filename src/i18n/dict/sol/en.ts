import type { SolDict } from "./es";

/** Menús del header y páginas de soluciones, en inglés. Misma forma que `sol/es.ts`. */
const menus: SolDict["menus"] = {
  platform: "Platform",
  ia: "Roombir AI",
  solutions: "Solutions",
  platformGroups: {
    operations: "Operations",
    distribution: "Distribution",
    marketing: "Marketing",
  },
  platformItems: {
    pms: { title: "Properties, rooms and bookings", desc: "Set up once and run the day panel, the list and the calendar." },
    informes: { title: "Reports", desc: "Occupancy, revenue, channels and what is set up wrong." },
    motor: { title: "Booking engine", desc: "The calendar where guests see the price and book on their own." },
    revenue: { title: "Revenue", desc: "The price for each date, with the reason." },
    linkhub: { title: "LinkHub", desc: "Your bio link, with the booking engine inside." },
    agentes: { title: "Readable by AI", desc: "Your property, understood and bookable by an assistant." },
    web: { title: "Website", desc: "An editor with an assistant, connected to your reservations." },
    marca: { title: "Brand", desc: "Logo, palette and tone, set up once." },
    archivos: { title: "Photos and files", desc: "Library and galleries in one place." },
    resenas: { title: "Reviews", desc: "Reviews from several sources, answered from here." },
  },
  platformFoot: "Everything on a single database.",
  platformLink: "See the full platform",
  iaFeatured: {
    label: "The assistant",
    title: "Roombir AI",
    desc: "The whole operation, in one conversation. You ask, it does it, with your permissions.",
    more: "What you can ask",
  },
  iaLabel: "What it does",
  // El único enlace del menú Roombir IA (las secciones son anclas de la misma página).
  iaLink: "All about Roombir AI",
  iaItems: {
    pedidos: { title: "What you can ask", desc: "Reservations, rates, rooms and website, in one sentence." },
    destino: { title: "Destination status", desc: "Holidays, events, weather and flights for your destination, with sources." },
    estrategia: { title: "Strategy mode", desc: "Ask for more bookings and it proposes a plan that runs." },
    permisos: { title: "Permissions", desc: "It works with your permissions, not its own." },
    hablar: { title: "How to talk to it", desc: "In writing, by voice or by showing it a screenshot." },
    diferencia: { title: "The difference", desc: "Why it is not a general-purpose AI chat." },
  },
  solutionGroups: {
    byType: "By property type",
    byRole: "By role",
  },
  solutionItems: {
    hoteles: { title: "Hotels, aparthotels and hostels", desc: "You sell the category and the system assigns the room." },
    alojamientos: { title: "Cabins and rentals", desc: "Each unit with its own name, photos and price." },
    propietarios: { title: "Owners", desc: "Your business in view, without being at the front desk." },
    direccion: { title: "General managers", desc: "Operations and team in a single system." },
    revenue: { title: "Revenue managers", desc: "The price for each date, with the full trail." },
    recepcion: { title: "Front desk", desc: "The whole shift from the daily board." },
    housekeeping: { title: "Housekeeping", desc: "The status of every room, from your phone." },
  },
  solutionsLink: "See all solutions",
  more: "More",
};

const index: SolDict["index"] = {
  byType: {
    eyebrow: "By property type",
    title: "Two ways to sell, *one system*.",
    lead: "Some properties sell a category and assign the room later. Others sell each unit by name. Roombir does both, and both at once in the same property.",
  },
  byRole: {
    eyebrow: "By role",
    title: "Every role, *its own workspace*.",
    lead: "Model workspaces for the most common roles: what each one sees, what it handles and how it connects with the rest of the team.",
  },
  open: "See the solution",
};

const pages: SolDict["pages"] = {
  hoteles: {
    meta: {
      title: "Hotels, aparthotels and hostels",
      description:
        "Roombir for properties that sell by room type: the guest books a category and the system assigns the room. Automatic assignment, tape chart calendar, statuses by floor and an assistant that gets things done.",
    },
    hero: {
      eyebrow: "Solutions · By property type",
      title: "You sell the category, *the system assigns the room*.",
      lead: "In a hotel, an aparthotel or a hostel, the guest buys “a superior double”, not room 203. Roombir works that way from the ground up: the category groups interchangeable rooms, the booking engine sells the category and the room is assigned automatically or by the front desk.",
    },
    space: {
      eyebrow: "How it sells",
      title: "One category, *several identical rooms*.",
      lead: "Each category is set up as a pool: ten interchangeable doubles sell as one item, with their price, photos and amenities. When the booking is confirmed, the system picks the room.",
      items: [
        "**Automatic assignment** that minimizes gaps between bookings or spreads wear across rooms, as you prefer.",
        "**Or unassigned**: the booking goes into the category and the front desk picks the room from the calendar.",
        "**Assignment repacking** to free up gaps when occupancy gets tight.",
        "**If you also have a suite or a one-of-a-kind cabin**, that category sells under its own name in the same property.",
      ],
    },
    day: {
      eyebrow: "A fully booked Saturday",
      title: "The same day, *with and without* roombir.",
      lead: "A thirty-room hotel with high occupancy. On the left, what happens with spreadsheets and a separate booking engine. On the right, what the system does.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "08:00",
          old: "Three web bookings came in overnight. Someone has to copy them into the spreadsheet and find a room that fits.",
          now: "They landed in the calendar on their own, assigned to the room that leaves the fewest gaps. The front desk sees them on the daily board.",
        },
        {
          time: "11:30",
          old: "A family wants one more night and their room is taken from tomorrow.",
          now: "The front desk stretches the booking in the calendar and, before letting go, sees the conflict and which free room to move it to.",
        },
        {
          time: "13:00",
          old: "Housekeeping does not know which rooms are already free.",
          now: "Each room has its status — pending checkout, cleaning, available — and housekeeping updates it from its workspace.",
        },
        {
          time: "18:00",
          old: "One double is still free and nobody knows whether to lower the price or hold it.",
          now: "Revenue shows the recommendation for that date with the reason in writing. If you accept it, it goes to the booking engine.",
        },
      ],
    },
    benefits: {
      eyebrow: "What it solves",
      title: "Built for *how a hotel runs*.",
      items: [
        { title: "Tape chart calendar", desc: "Rooms by day: drag, stretch and see conflicts before you let go. [See Reservations](/producto/pms)." },
        { title: "Statuses by floor", desc: "Six statuses with valid transitions, history per room and an occupancy plan by floor." },
        { title: "One night, one sale", desc: "Each night of each room is a unique lock in the database: two bookings cannot take the same one." },
        { title: "Every role, its own screen", desc: "Front desk, housekeeping, revenue and admin each open their own workspace, with their own menu." },
      ],
    },
    faq: [
      {
        q: "Does it work for hostels?",
        a: "Yes, for day-to-day operations: a daily board with arrivals and departures, a workspace for housekeeping and guided tours for rotating staff. Each room type is set up as a category with its capacity.",
      },
      {
        q: "Can I choose the room myself instead of the system?",
        a: "Yes. Automatic assignment is optional: you can let bookings come in without a room and assign them yourself from the calendar or the reservations list.",
      },
      {
        q: "What happens if two people book the last room at the same time?",
        a: "One of them does not get in. Each night of each room is a **unique lock in the database**: it is not a check someone can skip, the database itself prevents it.",
      },
    ],
    cta: {
      title: "Set up your categories and *watch them get assigned*.",
      lead: "Setup is guided: you add the property, the categories and the rooms, and availability initializes on its own.",
      steps: [
        "Add the property and the categories.",
        "Create all the rooms at once, with bulk upload.",
        "Connect the booking engine to your website and start taking bookings.",
      ],
    },
  },

  alojamientos: {
    meta: {
      title: "Cabins, apartments and rentals",
      description:
        "Roombir for properties that sell each unit by name: cabins, apartments, villas and glamping. Each unit with its own photos, price and calendar, and a booking engine that shows availability day by day.",
    },
    hero: {
      eyebrow: "Solutions · By property type",
      title: "Each unit sells *under its own name*.",
      lead: "Nobody books “a two-room cabin”. They book the Alerce cabin, with its photos, its view and its price. In Roombir each unit is its own category, with its calendar, its rates and its page in the booking engine.",
    },
    space: {
      eyebrow: "How it sells",
      title: "One unit, *its own page*.",
      lead: "In unit mode, the category wraps exactly one unit. There is no assignment to work out and no doubt about what the guest booked.",
      items: [
        "**Photos, description, capacity and price** of its own in the booking engine and on the website, unit by unit.",
        "**Minimum stay and closed dates** by date, for long weekends and high season.",
        "**Half-day blocks**: afternoon maintenance blocks that night and keeps the morning sellable.",
        "**If you also have standard rooms**, they live side by side: the mode is chosen per category, not for the whole property.",
      ],
    },
    day: {
      eyebrow: "A Friday on a long weekend",
      title: "The same day, *with and without* roombir.",
      lead: "A six-cabin complex in high season. On the left, what owners tell us on the first call. On the right, what the system does.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "09:00",
          old: "Ten WhatsApp messages asking which cabin is free this weekend.",
          now: "The booking engine link shows, day by day, which units are left and the starting price. Three guests booked on their own.",
        },
        {
          time: "12:00",
          old: "Someone asks for two nights and the long-weekend minimum is three. You have to explain it by hand.",
          now: "The booking engine flags the minimum nights when the guest picks the arrival date. The question never comes in.",
        },
        {
          time: "15:00",
          old: "The Coihue cabin has a water leak and has to come off sale until tomorrow.",
          now: "You block the afternoon for maintenance: that night leaves the booking engine and the next morning stays sellable.",
        },
        {
          time: "20:00",
          old: "A traveler from Brazil asks for the price in reais and you work out the exchange rate by hand.",
          now: "The booking engine shows the price in their currency. You charge in yours and the conversion locks at check-in.",
        },
      ],
    },
    benefits: {
      eyebrow: "What it solves",
      title: "Built for *selling one-of-a-kind units*.",
      items: [
        { title: "Availability in view", desc: "Starting price, units left and closed dates on every calendar day, before dates are picked. [See the booking engine](/producto/motor)." },
        { title: "LinkHub for your bio", desc: "Your Instagram link opens the same booking engine, with real availability. [See LinkHub](/producto/marketing#linkhub)." },
        { title: "Ten currencies", desc: "Guests browse in their currency and you charge in yours. For Argentine pesos you choose official, blue, MEP or CCL." },
        { title: "A website with your units", desc: "The editor builds the site with sections that read your units, your photos and your reviews. [See Marketing](/producto/marketing#web)." },
      ],
    },
    faq: [
      {
        q: "Can I have cabins and rooms in the same property?",
        a: "Yes. Cabins sell as named units and rooms as a category with several identical ones, and they share the same calendar and the same booking engine.",
      },
      {
        q: "Can each cabin have its own price?",
        a: "Yes. Each unit has its base price and can have its own rate plans and promotions, with minimum stay by date.",
      },
      {
        q: "Does it work for glamping and villas?",
        a: "Yes: for any property where each unit is different and sells by name. Domes, houses, apartments or villas are set up just like a cabin.",
      },
    ],
    cta: {
      title: "Set up your units and *share the link*.",
      lead: "Setup is guided. You add each unit with its photos and price, and the booking engine is ready to send over WhatsApp or put in your bio.",
      steps: [
        "Add the property and each unit with its photos.",
        "Set minimum stays and closed dates.",
        "Share the booking engine link or put it on your website.",
      ],
    },
  },

  propietarios: {
    meta: {
      title: "Owners",
      description:
        "Roombir for property owners: know how the business is doing without being at the front desk, decide with numbers and delegate with clear permissions per person and per property.",
    },
    hero: {
      eyebrow: "Solutions · By role",
      title: "Your business in view, *without being at the front desk*.",
      lead: "As an owner you need to know how occupancy is trending, what sold and what is set up wrong, without asking anyone for a spreadsheet. And you need each person on the team to do their part without access to everything.",
    },
    space: {
      eyebrow: "Their workspace",
      title: "The whole system, *and who sees what*.",
      lead: "The admin workspace sees every app in the system, and it is where you give the rest of the team access, person by person and property by property.",
      items: [
        "**Reports** on occupancy, average rate, revenue and cancellations, against the previous period.",
        "**Status and management**: what is set up wrong today, like unconfirmed pending bookings or arrivals without a room.",
        "**Users and capabilities**: ten admin capabilities granted one at a time, and access limited to the right properties.",
        "**Roombir AI** to ask what is not on screen, in one sentence.",
      ],
    },
    day: {
      eyebrow: "An owner’s week",
      title: "The same week, *with and without* roombir.",
      lead: "An owner with a hotel and a cabin complex, who is not at the desk every day.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "Monday",
          old: "You message the manager to find out how the weekend closed. The answer comes at noon, with a photo of the spreadsheet.",
          now: "You open Reports on your phone: occupancy, revenue and cancellations for the period, with the change against the previous one.",
        },
        {
          time: "Tuesday",
          old: "A guest tells you their booking was never confirmed.",
          now: "Status and management flags bookings pending confirmation for more than a day, before the guest arrives.",
        },
        {
          time: "Thursday",
          old: "Someone new starts at the front desk and you hand over your login because there is no other.",
          now: "You create their user in the front desk workspace, limited to that property. They do not see revenue or settings.",
        },
        {
          time: "Friday",
          old: "You wonder which channel brings the most bookings and which one cancels the most.",
          now: "You ask Roombir AI and it answers with the number and where it comes from.",
        },
      ],
    },
    benefits: {
      eyebrow: "What you get",
      title: "Decide with numbers, *delegate with permissions*.",
      items: [
        { title: "Reports without spreadsheets", desc: "Built on the same bookings your team works with. [See Reports](/producto/informes)." },
        { title: "Several properties", desc: "A hotel and some cabins under one account, each with its own currency and team. [See Properties](/producto/pms)." },
        { title: "Real permissions", desc: "Each person signs in with their own user, to their workspace and their properties. Sensitive actions are logged." },
        { title: "An assistant that answers", desc: "Roombir AI reads the same data and answers with the number, or makes the change if you ask. [See Roombir AI](/producto/ia)." },
      ],
    },
    faq: [
      {
        q: "Can I follow the business from my phone?",
        a: "Yes. The system runs in the browser and is designed for phones and tablets, not only the front desk computer.",
      },
      {
        q: "What do the staff I hire see?",
        a: "Only what you give them: the workspace sets the menu and the home screen, and property access sets which properties they see. Housekeeping, for example, does not see rates.",
      },
      {
        q: "Do I have to install anything?",
        a: "No. You sign in from the browser, and setup is nine guided steps you can leave halfway and pick up on another device.",
      },
    ],
    cta: {
      title: "See your property *the way the system sees it*.",
      lead: "You sign up, add the property and have your reports ready the same afternoon. If you would rather see it first, we walk through it together.",
      steps: [
        "Create the company and the first property.",
        "Invite your team, each to their own workspace.",
        "Follow the business from Reports and Roombir AI.",
      ],
    },
  },

  direccion: {
    meta: {
      title: "General managers",
      description:
        "Roombir for general managers and directors: daily operations, the team and the numbers in the same system, with a workspace per role and a section that flags what is set up wrong.",
    },
    hero: {
      eyebrow: "Solutions · By role",
      title: "Your whole operation, *in a single system*.",
      lead: "Running a property means coordinating the front desk, housekeeping, sales and numbers that usually live in different tools. In Roombir it is one system: each role works in its own workspace and you see the whole picture.",
    },
    space: {
      eyebrow: "Their workspace",
      title: "See the whole picture *without opening every area*.",
      lead: "The admin workspace brings together every area of the system, and from there you decide what each role sees and can do.",
      items: [
        "**Daily board** with arrivals, departures and the bookings that need action.",
        "**Status and management**: what is set up wrong today, before it turns into a guest without a room.",
        "**Workspaces per role**: you decide which apps the front desk, housekeeping, marketing or revenue see.",
        "**Onboarding per workspace**: each new person gets the guided tours for the apps of their role.",
      ],
    },
    day: {
      eyebrow: "A day in management",
      title: "The same day, *with and without* roombir.",
      lead: "A forty-room hotel with a team of twelve working in shifts.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "08:00",
          old: "The morning meeting starts by pulling data from three systems and a spreadsheet.",
          now: "The daily board and reports already show arrivals, departures, occupancy and what is still pending.",
        },
        {
          time: "10:30",
          old: "A new receptionist starts and someone explains the system in the middle of the shift.",
          now: "Their front desk workspace comes with guided tours for each screen, on the real interface.",
        },
        {
          time: "14:00",
          old: "A complaint: a room was handed over uncleaned and nobody knows what happened.",
          now: "The room history shows who changed each status, at what time and with what note.",
        },
        {
          time: "17:00",
          old: "Revenue, website and reservations coordinate through messages between three people.",
          now: "All three work on the same data: the rate accepted in Revenue is already in the booking engine and on the website.",
        },
      ],
    },
    benefits: {
      eyebrow: "What you get",
      title: "A team coordinated *by the same system*.",
      items: [
        { title: "Workspaces per role", desc: "Each role with its menu, its home screen and its permissions: operate, configure or none." },
        { title: "Guided tours", desc: "38 tours drawn over the real screen that make up each new person’s onboarding." },
        { title: "History per room", desc: "Who changed each status, when and with what note. [See Rooms](/producto/pms)." },
        { title: "Reports and revenue", desc: "Your operating numbers and the price for each date, with the reason. [See Revenue](/producto/revenue)." },
      ],
    },
    faq: [
      {
        q: "Can I limit what each role sees?",
        a: "Yes. The workspace sets the menu and the home screen, and permissions go by app and by level: operate, configure or none.",
      },
      {
        q: "What about rotating staff?",
        a: "Each new person opens their workspace with the guided tours for their apps. And a user can be created with a temporary password that must be changed at first sign-in.",
      },
      {
        q: "Does it work if I manage more than one property?",
        a: "Yes. Several properties live in the same account and each person’s access is limited to the ones they handle.",
      },
    ],
    cta: {
      title: "Set up your team’s workspaces *in one afternoon*.",
      lead: "Setup creates the property and suggests workspaces based on how you operate. Then you invite each person to theirs.",
      steps: [
        "Create the property and choose how you operate.",
        "Adjust the workspaces per role.",
        "Invite the team, each to their own workspace.",
      ],
    },
  },

  revenue: {
    meta: {
      title: "Revenue managers",
      description:
        "Roombir for revenue managers: the price for each date with the trail of why, pace against your own history, competitors, destination events and a rate that goes to the booking engine once you accept it.",
    },
    hero: {
      eyebrow: "Solutions · By role",
      title: "The price for each date, *with the full trail*.",
      lead: "A revenue manager does not need another black box that returns a number. You need to see which data was used, which rule matched and which cap applied, and the accepted rate has to reach the booking engine without copying it by hand.",
    },
    space: {
      eyebrow: "Their workspace",
      title: "Revenue, reports and rates, *in the same place*.",
      lead: "The revenue workspace brings together the RMS with rates, availability and reports, on the same data the front desk works with.",
      items: [
        "**Decision record** per date: the data seen, the rule that matched, the cap applied and the result.",
        "**Pace against your own history**, by day of week, month and lead time, with the sample size in view.",
        "**Rules with a dry run**: thirteen variables and a test that shows what each rule would have done before you turn it on.",
        "**Competitors**: found by proximity and similarity, and you enter external competitors’ rates as a reference.",
      ],
    },
    day: {
      eyebrow: "Ten days before an event",
      title: "The same decision, *with and without* roombir.",
      lead: "A hotel in a city with a big festival ten days out.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "09:00",
          old: "You hear about the festival from a guest asking if there is room.",
          now: "The event is already on the list, suggested by the system by proximity and date, waiting for your approval.",
        },
        {
          time: "11:00",
          old: "You compare the booking pace with last year across two spreadsheets.",
          now: "Pace compares against your own history for those dates and tells you how many bookings it is based on.",
        },
        {
          time: "15:00",
          old: "You decide to raise the rate and ask someone to change the price in the booking engine.",
          now: "You accept the recommendation and the rate goes to the booking engine as the first step of that date’s price.",
        },
        {
          time: "+7 days",
          old: "Nobody remembers why it went up.",
          now: "The decision record keeps what the system saw, which rule matched and who accepted it.",
        },
      ],
    },
    benefits: {
      eyebrow: "What you get",
      title: "Decisions *you can explain*.",
      items: [
        { title: "The trail behind every price", desc: "Which data, which rule and which cap, date by date. [See Revenue](/producto/revenue)." },
        { title: "Your destination, with sources", desc: "Holidays, events in your radius, weather and observed air routes, each data point with its date. [See destination status](/producto/ia#destino)." },
        { title: "Closed loop with the booking engine", desc: "The accepted rate is the first step in the booking engine’s pricing chain. [See the booking engine](/producto/motor)." },
        { title: "Questions in one sentence", desc: "Roombir AI reads pace, events and rates and suggests what to do, with your confirmation." },
      ],
    },
    faq: [
      {
        q: "Does it apply prices on its own?",
        a: "By default it suggests, and you accept or reject each recommendation. If you turn it on, recommendations can apply automatically.",
      },
      {
        q: "What if I have little history?",
        a: "The screen tells you: each calculation shows how many bookings it is based on, and it does not sell you confidence that is not there.",
      },
      {
        q: "Where do competitor rates come from?",
        a: "Competitors who also use roombir contribute their real rate. Outside competitors are found automatically by proximity and similarity, and you enter their rate as a fixed or per-date reference.",
      },
    ],
    cta: {
      title: "Pricing *stops being a hunch*.",
      lead: "Revenue becomes useful as soon as you have your own history, and until then it tells you what sample it is working with.",
      steps: [
        "Add the property and the base rates.",
        "Review your destination’s events and competitors.",
        "Accept the first recommendation and it goes to the booking engine.",
      ],
    },
  },

  recepcion: {
    meta: {
      title: "Front desk",
      description:
        "Roombir for the front desk: the daily board, the reservations list, the tape chart calendar and an assistant that makes changes in one sentence, with guest emails that go out on their own.",
    },
    hero: {
      eyebrow: "Solutions · By role",
      title: "The whole shift, *from the daily board*.",
      lead: "The front desk lives between arrivals, departures, room changes and WhatsApp questions. The front desk workspace opens on the daily board and keeps everything the shift needs close at hand, and nothing it does not.",
    },
    space: {
      eyebrow: "Their workspace",
      title: "What the shift needs, *and nothing else*.",
      lead: "The front desk menu has the reservation screens and room status. Revenue, settings and the website editor stay in other workspaces.",
      items: [
        "**Daily board** with arrivals and departures, on cards you can act on.",
        "**All reservations** with a side panel: summary, activity and notes without leaving the list.",
        "**Tape chart calendar**: drag or stretch a booking and see the conflict before you let go.",
        "**New reservation** for what comes in by phone or WhatsApp, with source channel and promotions.",
      ],
    },
    day: {
      eyebrow: "An ordinary Tuesday",
      title: "The same shift, *with and without* roombir.",
      lead: "A twelve-unit property and one person at the desk.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "08:10",
          old: "Three WhatsApp messages asking about weekend availability. You open the spreadsheet and answer one by one.",
          now: "You send them the booking engine link: price and units left, day by day. Two booked on their own.",
        },
        {
          time: "11:00",
          old: "García needs to move to another room. You find the booking, change it and write the email.",
          now: "You ask Roombir AI to move him to 203 and email him. It does it and hands you back the card with the change.",
        },
        {
          time: "14:20",
          old: "A guest wants one more night and you do not know if the room is free.",
          now: "You stretch the booking in the calendar and, before letting go, see whether it clashes with another and how the price changes.",
        },
        {
          time: "17:00",
          old: "You have to send the confirmation for a phone booking from your personal inbox.",
          now: "You enter it in New reservation and the guest email goes out on its own, from the roombir domain with your inbox as reply-to.",
        },
      ],
    },
    benefits: {
      eyebrow: "What you get",
      title: "Fewer clicks, *fewer messages*.",
      items: [
        { title: "An assistant that acts", desc: "Move, assign and notify in one sentence, with your permissions. [See Roombir AI](/producto/ia)." },
        { title: "Emails that go out on their own", desc: "Confirmations and guest notices go out without setting up a mail server." },
        { title: "One night, one sale", desc: "Two bookings cannot take the same night of the same room: the database prevents it." },
        { title: "Guided tours", desc: "If you are new to the role, each screen has its tour on the real interface. [See Reservations](/producto/pms)." },
      ],
    },
    faq: [
      {
        q: "Do I need to know how to use a hotel system?",
        a: "No. Your workspace only has the front desk screens, and each one has a guided tour drawn over the real screen.",
      },
      {
        q: "Who confirms bookings that come in through the booking engine?",
        a: "It depends on your settings: the guest confirms with a link by email, or you accept them. Either way, pending bookings expire on their own.",
      },
      {
        q: "Can I use it on a tablet at the desk?",
        a: "Yes. It runs in the browser and is designed for phones and tablets, as well as the computer.",
      },
    ],
    cta: {
      title: "Start your shift *on the daily board*.",
      lead: "Your manager invites you to your front desk workspace and you sign in with your own user. The guided tours do the rest.",
      steps: [
        "Get the invitation to your workspace.",
        "Take the daily board tour.",
        "Run the shift from reservations and the calendar.",
      ],
    },
  },

  housekeeping: {
    meta: {
      title: "Housekeeping",
      description:
        "Roombir for housekeeping: the status of every room by floor, status changes that leave no room for mistakes and a history, in a workspace without rates or revenue.",
    },
    hero: {
      eyebrow: "Solutions · By role",
      title: "The status of every room, *without asking the front desk*.",
      lead: "Housekeeping needs to know which rooms are free, which ones to prepare for an arrival and which ones are under maintenance. In Roombir they see it in their own workspace, with a board by floor that shares its data with the front desk.",
    },
    space: {
      eyebrow: "Their workspace",
      title: "Statuses and floor plan, *no rates*.",
      lead: "The housekeeping workspace has room status and the occupancy plan. It does not see rates, revenue or booking engine settings.",
      items: [
        "**Six statuses**: available, occupied, cleaning, maintenance, blocked and pending checkout.",
        "**Changes that leave no room for mistakes**: occupied can only move to pending checkout, so nobody frees a room with the guest inside.",
        "**Board by floor and by category**, with filters, to read the whole property at a glance.",
        "**History per room**: who changed each status, when and with what note.",
      ],
    },
    day: {
      eyebrow: "A morning of checkouts",
      title: "The same shift, *with and without* roombir.",
      lead: "A hotel with fifteen departures and ten arrivals in the day.",
      headOld: "Today",
      headNew: "With roombir",
      rows: [
        {
          time: "09:00",
          old: "The front desk phones to say which rooms have checked out.",
          now: "When the front desk checks a guest out, the room moves to pending checkout and shows up on your board.",
        },
        {
          time: "11:00",
          old: "You finished 203, but the front desk does not know and still treats it as dirty.",
          now: "You set it to available from your phone and the front desk sees it available on their screen.",
        },
        {
          time: "13:00",
          old: "Room 205 has a broken faucet and the report ends up on a piece of paper.",
          now: "You mark it as under maintenance with a note, and the change goes into the room history.",
        },
        {
          time: "15:00",
          old: "A guest arrives early and nobody knows which room is ready.",
          now: "The board by floor shows which rooms are available right now.",
        },
      ],
    },
    benefits: {
      eyebrow: "What you get",
      title: "Less back and forth *with the front desk*.",
      items: [
        { title: "Board by floor", desc: "The whole property at a glance, with filters by floor and by category. [See Rooms](/producto/pms)." },
        { title: "From your phone", desc: "The housekeeping workspace runs in your phone’s browser, right in the room." },
        { title: "No extra information", desc: "Your menu has no rates or revenue: only what the shift needs." },
        { title: "Guided tours", desc: "Each screen has its tour on the real interface for anyone just starting." },
      ],
    },
    faq: [
      {
        q: "Do housekeeping staff see the rates?",
        a: "Not unless you want them to. The housekeeping workspace has its own menu — room status and floor plan — without rates or revenue.",
      },
      {
        q: "Why can’t I set an occupied room to available?",
        a: "Because the guest is still inside. Occupied can only move to pending checkout, which comes with the check-out. That way nobody sells a room that is still in use.",
      },
      {
        q: "Are changes logged?",
        a: "Yes. Each room keeps its status history: who, when and with what note.",
      },
    ],
    cta: {
      title: "Housekeeping *sees the same* as the front desk.",
      lead: "The manager creates the user in the housekeeping workspace and each person signs in with their own, from their phone.",
      steps: [
        "Get the invitation to your workspace.",
        "Take the room status tour.",
        "Change statuses from your phone, room by room.",
      ],
    },
  },
};

export const solEn: SolDict = { menus, index, pages };
