import { EventItem, City, EventCategory } from "../types";

export const categories: EventCategory[] = [
  { slug: "tech", name: "Tech & AI", icon: "💻" },
  { slug: "music", name: "Music & Arts", icon: "🎵" },
  { slug: "business", name: "Business & Venture", icon: "💼" },
  { slug: "design", name: "Design & Creative", icon: "🎨" },
];

export const cities: City[] = [
  { slug: "san-francisco", name: "San Francisco", country: "United States", eventCount: 2 },
  { slug: "tokyo", name: "Tokyo", country: "Japan", eventCount: 1 },
  { slug: "london", name: "London", country: "United Kingdom", eventCount: 1 },
  { slug: "berlin", name: "Berlin", country: "Germany", eventCount: 1 },
];

export const events: EventItem[] = [
  {
    id: "nextjs-summit-2026",
    title: "Global Next.js Architecture Summit 2026",
    categorySlug: "tech",
    categoryName: "Tech & AI",
    citySlug: "san-francisco",
    cityName: "San Francisco",
    venue: "Moscone Center West, Level 3",
    date: "Thursday, Nov 12, 2026",
    time: "09:00 AM - 06:00 PM PST",
    price: "$299",
    featured: true,
    description: "The world's premier gathering for full-stack architects and Next.js developers. Keynotes on React Server Components, Turbopack optimizations, streaming data pipelines, and real-time agentic workflows.",
    speakers: [
      { name: "Guillermo Rauch", role: "CEO", company: "Vercel" },
      { name: "Sophie Alpert", role: "Former React Core Lead", company: "Humane" },
      { name: "Dan Abramov", role: "Software Architect", company: "Bluesky" },
    ],
    ticketTiers: [
      { name: "General Admission", price: "$299", perks: ["Full Keynote Access", "Breakout Sessions", "Lunch & Evening Mixer"] },
      { name: "VIP All-Access", price: "$599", perks: ["Front Row Reserved Seating", "Speaker Lounge Access", "Workshop Day Entry"] },
    ],
  },
  {
    id: "sf-ai-agents-hackathon",
    title: "Autonomous Agent Developers Hackathon",
    categorySlug: "tech",
    categoryName: "Tech & AI",
    citySlug: "san-francisco",
    cityName: "San Francisco",
    venue: "Fort Mason Center, Gallery 308",
    date: "Friday, Nov 20, 2026",
    time: "10:00 AM - 10:00 PM PST",
    price: "Free / RSVP",
    featured: false,
    description: "A 12-hour high-intensity hackathon building multi-modal autonomous agentic systems using Next.js App Router, WebSocket streams, and local LLM tool calling.",
    speakers: [
      { name: "Dr. Harrison Chase", role: "Co-Founder", company: "LangChain" },
      { name: "Alex Graveley", role: "Creator", company: "GitHub Copilot" },
    ],
    ticketTiers: [
      { name: "Hacker Pass", price: "Free", perks: ["API Credits", "Hacking Desk", "Meals & Caffeine Included"] },
    ],
  },
  {
    id: "tokyo-ambient-sound",
    title: "Tokyo Spatial Audio & Ambient Night",
    categorySlug: "music",
    categoryName: "Music & Arts",
    citySlug: "tokyo",
    cityName: "Tokyo",
    venue: "Roppongi Arts Pavilion, Hall B",
    date: "Saturday, Dec 5, 2026",
    time: "07:00 PM - 11:30 PM JST",
    price: "¥8,000",
    featured: true,
    description: "An immersive binaural concert featuring modular synthesizers, acoustic chamber instrumentation, and reactive generative projection mapping.",
    speakers: [
      { name: "Ryuichi Sakamoto Legacy Trio", role: "Chamber Ensemble", company: "Tokyo Sound Lab" },
      { name: "Hiroshi Yoshimura Sound Archive", role: "Curator", company: "Kankyō Ongaku" },
    ],
    ticketTiers: [
      { name: "Standard Listening Seat", price: "¥8,000", perks: ["Main Auditorium", "Program Book"] },
      { name: "Spatial Dome VIP", price: "¥14,000", perks: ["Center Sound Sweet-Spot", "Commemorative Vinyl"] },
    ],
  },
  {
    id: "london-venture-forum",
    title: "London Seed Capital & Growth Forum",
    categorySlug: "business",
    categoryName: "Business & Venture",
    citySlug: "london",
    cityName: "London",
    venue: "Level39 Technology Accelerator, Canary Wharf",
    date: "Tuesday, Nov 24, 2026",
    time: "01:00 PM - 07:30 PM GMT",
    price: "£150",
    featured: false,
    description: "Connect with 50+ leading European venture capital partners, angel syndicates, and seed-stage AI startup founders navigating Series A milestones.",
    speakers: [
      { name: "Eileen Burbidge", role: "Partner", company: "Passion Capital" },
      { name: "Saul Klein", role: "Founding Partner", company: "LocalGlobe" },
    ],
    ticketTiers: [
      { name: "Founder Pass", price: "£150", perks: ["Pitch Sessions", "Speed Networking", "Investor Directory"] },
      { name: "Investor Pass", price: "£450", perks: ["Dealflow Preview", "Private Dining Room Access"] },
    ],
  },
  {
    id: "berlin-generative-design",
    title: "Berlin Generative Design Expo",
    categorySlug: "design",
    categoryName: "Design & Creative",
    citySlug: "berlin",
    cityName: "Berlin",
    venue: "Kraftwerk Berlin, Köpenicker Str. 70",
    date: "Thursday, Dec 10, 2026",
    time: "11:00 AM - 08:00 PM CET",
    price: "€90",
    featured: true,
    description: "Exploring algorithmic typography, computational spatial forms, procedural 3D generation, and tactile user interface hardware.",
    speakers: [
      { name: "Zach Lieberman", role: "Adjunct Professor & Artist", company: "MIT Media Lab" },
      { name: "Casey Reas", role: "Co-Creator", company: "Processing Foundation" },
    ],
    ticketTiers: [
      { name: "Expo Day Pass", price: "€90", perks: ["Exhibition Hall", "Keynote Talks", "Creative Coding Labs"] },
    ],
  },
];

export function getEventById(id: string): EventItem | undefined {
  return events.find((e) => e.id.toLowerCase() === id.toLowerCase());
}

export function getEventsByCityAndCategory(citySlug: string, categorySlug: string): EventItem[] {
  return events.filter(
    (e) =>
      e.citySlug.toLowerCase() === citySlug.toLowerCase() &&
      e.categorySlug.toLowerCase() === categorySlug.toLowerCase()
  );
}
