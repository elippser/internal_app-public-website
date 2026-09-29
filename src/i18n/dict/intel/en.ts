/** Intelligence (EN): translation of es.ts. Same keys and structure. */
import type { IntelDict } from "./es";

export const intelEn: IntelDict = {
  card: {
    label: "Intelligence",
    title: "Everything that drives your demand, *in one place*.",
    body: "Events, holidays, flights and more, from trusted sources.",
    more: "Discover Intelligence",
  },
  page: {
    meta: {
      title: "Intelligence: the data that drives your demand, in one place",
      description:
        "The intelligence service behind Roombir AI: events, holidays, flights, weather, exchange rates, safety and more, from official sources, so you set prices and plan campaigns with the full picture.",
    },
    hero: {
      eyebrow: "Intelligence",
      title: "What takes a revenue team hours *is already here*.",
      lead: "Intelligence brings together everything that drives demand in your destination: events, holidays in the countries your guests come from, flights, weather, exchange rates, safety and much more. From trusted sources, up to date and with the source always in view. Roombir AI uses it so every pricing and sales decision is made with the full picture.",
      imageAlt: "The planet at night with the routes that connect it",
    },
    problem: {
      eyebrow: "The problem",
      title: "The information is out there. *It’s just scattered.*",
      lead: "Everything that explains why a date fills up or falls flat is somewhere on the web: in another country’s calendar, in a convention center’s schedule, in a foreign ministry’s travel alert. Pulling it together by hand takes hours, gets done once and goes stale. That’s how decisions get made blind.",
      headOld: "Researching it by hand",
      headNew: "With Intelligence",
      rows: [
        {
          time: "Events",
          old: "Checking the schedules of stadiums, theaters, convention centers and ticketing sites, city by city.",
          now: "The events, conferences and trade shows near your property, with dates and weight, **in one list**.",
        },
        {
          time: "Holidays",
          old: "Looking up the holidays and school breaks of every country your guests come from, one by one.",
          now: "Long weekends **in your source markets**, with bridge days already worked out.",
        },
        {
          time: "Travelers",
          old: "Guessing whether today’s exchange rate makes it worth it for foreign travelers to come.",
          now: "Whether **you’re getting more expensive or cheaper** for your visitors, based on the real exchange rate, not the nominal one.",
        },
        {
          time: "Risks",
          old: "Finding out about a travel alert or an airport closure once the cancellations have already come in.",
          now: "Foreign ministry alerts and threats affecting **your airport**, ahead of time.",
        },
      ],
    },
    areas: {
      eyebrow: "What it covers",
      title: "Everything that explains your demand, *area by area*.",
      lead: "Each area answers a specific question about your destination and tells you where the data comes from.",
      items: [
        {
          title: "Events and shows",
          desc: "Concerts, plays, festivals and games near you, plus the big events announced years in advance.",
        },
        {
          title: "Conferences and trade shows",
          desc: "Corporate demand: midweek, longer stays and less price-sensitive.",
        },
        {
          title: "Calendar and holidays",
          desc: "Holidays, long weekends, school breaks and shopping dates, both yours and those of the countries your guests come from.",
        },
        {
          title: "Weather and seasons",
          desc: "What the year looks like in your destination: seasons, best months, seasonal risks and the forecast for the days ahead.",
        },
        {
          title: "Air traffic",
          desc: "Which airports feed you, which airlines and routes are seen arriving, and how people get there by land.",
        },
        {
          title: "Exchange rates and the economy",
          desc: "Whether your destination is getting cheaper or pricier for each source market, with inflation and the real exchange rate.",
        },
        {
          title: "Entry requirements",
          desc: "Who can get in without applying in advance. Affordable, with a flight and no visa: the combination that sells itself.",
        },
        {
          title: "Safety",
          desc: "Travel advisories from your markets’ governments and declared outbreaks, separating what’s perceived from what’s measured.",
        },
        {
          title: "Natural hazards",
          desc: "Earthquakes, storms, volcanoes and heat waves that hit nearby or close the airport that brings you guests.",
        },
        {
          title: "Your competition",
          desc: "How many properties are around you, what kind they are, and how short-term rentals are regulated in your city.",
        },
        {
          title: "Interest in your destination",
          desc: "How much attention your destination gets in each language. Attention shows up weeks before the booking does.",
        },
        {
          title: "Demand that isn’t tourism",
          desc: "Universities, hospitals, industry, harvests and mining shifts: what fills rooms in the off-season.",
        },
      ],
    },
    trust: {
      eyebrow: "Reliable",
      title: "Data without a source *isn’t data*.",
      lead: "Intelligence reads official agencies and recognized public sources, and never fills in what it doesn’t know.",
      items: [
        "Every data point comes **with its source and date**, so you know where it comes from and how fresh it is.",
        "Official agencies and recognized sources: weather services, foreign ministries, central banks, the IMF and the World Bank.",
        "When a source doesn’t respond, it says so. **It never shows a zero where it doesn’t know.**",
        "It separates what’s known for certain from what was only observed: a flight that wasn’t seen isn’t a flight that doesn’t exist.",
      ],
    },
    ia: {
      eyebrow: "With Roombir AI",
      title: "You ask, and the answer *comes with the context*.",
      lead: "Roombir AI checks Intelligence when you ask about your destination or ask for more bookings, cross-references it with your occupancy and rates, and suggests what to do.",
      items: [
        "Ask what’s happening in your destination in March and it puts together the big picture, with the source for each item.",
        "Ask for more bookings and the plan it suggests already accounts for events, holidays and markets.",
        "What it suggests gets carried out in the system: a rate, a promotion, a campaign.",
      ],
      link: "See Roombir AI",
    },
    decisions: {
      eyebrow: "Better decisions",
      title: "Every night, sold *at the right price*.",
      lead: "Money is lost on dates sold too cheap because nobody saw what was coming, and on dates left empty because nobody went after them. Intelligence is there so neither happens to you.",
      items: [
        {
          title: "Raise rates in time",
          desc: "Spot the conference, the concert or the long weekend in your top source country before the rooms sell out, not after.",
        },
        {
          title: "Stop giving nights away",
          desc: "Know when demand is coming on its own, so you don’t drop prices on dates that were going to fill anyway.",
        },
        {
          title: "Target the right market",
          desc: "Point your campaigns at the country where you’ve become cheaper, that has flights and can enter without a visa.",
        },
        {
          title: "Get ahead of it",
          desc: "A travel alert, a closed airport or a heat wave shows up before the cancellations do.",
        },
      ],
    },
    faq: [
      {
        q: "What is Intelligence?",
        a: "It’s Roombir’s intelligence and data service. It gathers what drives demand in a destination from trusted sources —events, holidays, flights, weather, exchange rates, safety and more— and puts it all in one place. Roombir AI uses it to answer your questions and suggest what to do.",
      },
      {
        q: "Where does the data come from?",
        a: "From official agencies and recognized public sources: weather services, official calendars, foreign ministries, central banks, the IMF, the World Bank, ticketing sites and venue schedules, among others. Every data point is shown with its source and date.",
      },
      {
        q: "Do I need to enter anything?",
        a: "No. Intelligence starts from your property’s location. What does help is having your bookings and rates in Roombir, so Roombir AI can cross-reference what’s happening outside with what’s happening at your property.",
      },
      {
        q: "What if a source doesn’t have the data?",
        a: "It tells you. Intelligence doesn’t make things up or fill in gaps: if a source didn’t respond or doesn’t publish that data for your destination, it shows as unknown, never as zero.",
      },
    ],
    cta: {
      title: "Decide with *the full picture*.",
      lead: "Add your property and Roombir AI starts using Intelligence from day one.",
      steps: [
        "Add your property and its location.",
        "Ask Roombir AI about your destination.",
        "Set prices and campaigns with the data in view.",
      ],
    },
  },
};
