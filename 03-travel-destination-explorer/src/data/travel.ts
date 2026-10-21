import { Destination, Region, Itinerary } from "../types";

export const regions: Region[] = [
  {
    slug: "east-asia",
    name: "East Asia",
    continent: "Asia",
    description: "Historic ancient dynasties, bustling technological megacities, pristine alpine landscapes, and celebrated food traditions.",
    subregions: [
      {
        slug: "kansai-region",
        name: "Kansai Region",
        description: "The historical and cultural heartland of Japan, comprising Kyoto's imperial shrines, Osaka's street food, and Nara's sacred deer.",
        climate: "Temperate four-season climate with humid summers and vibrant autumn leaves.",
        destinationCount: 3,
      },
      {
        slug: "kanto-plains",
        name: "Kanto Plains",
        description: "The economic powerhouse of Japan, centered around Tokyo with mountain passes and coastal hot-springs.",
        climate: "Maritime temperate climate with mild winters and sunny springs.",
        destinationCount: 2,
      },
    ],
  },
  {
    slug: "southern-europe",
    name: "Southern Europe",
    continent: "Europe",
    description: "Sun-drenched Mediterranean coastlines, Renaissance art masterpieces, olive groves, and millennia of classical history.",
    subregions: [
      {
        slug: "tuscany",
        name: "Tuscany & Central Italy",
        description: "Rolling cypress-lined hills, medieval walled towns, Renaissance galleries, and world-renowned vineyards.",
        climate: "Mediterranean climate with warm dry summers and mild winters.",
        destinationCount: 2,
      },
    ],
  },
  {
    slug: "scandinavia",
    name: "Scandinavia",
    continent: "Europe",
    description: "Towering glacial fjords, northern lights displays, midnight sun, and sleek Nordic architectural heritage.",
    subregions: [
      {
        slug: "fjord-region",
        name: "Western Fjord Region",
        description: "Dramatic ocean inlets flanked by sheer mountain cliffs, UNESCO-protected wooden harbors, and cascading waterfalls.",
        climate: "Cool maritime climate with frequent ocean breezes and dramatic fog.",
        destinationCount: 2,
      },
    ],
  },
  {
    slug: "latin-america",
    name: "Central & South America",
    continent: "Americas",
    description: "Vibrant indigenous cultures, colonial architecture, cloud forests, and rich culinary biodiversity.",
    subregions: [
      {
        slug: "southern-highlands",
        name: "Southern Highlands",
        description: "Rich culinary traditions, artisan craft markets, ancient Zapotec archaeological complexes, and mountainous vistas.",
        climate: "Subtropical highland climate with mild sunny days year-round.",
        destinationCount: 2,
      },
    ],
  },
];

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    regionSlug: "east-asia",
    subregionSlug: "kansai-region",
    regionName: "East Asia",
    subregionName: "Kansai Region",
    rating: 4.95,
    bestSeason: "Spring (Cherry Blossoms) & Autumn (Foliage)",
    currency: "Japanese Yen (¥ / JPY)",
    language: "Japanese",
    description: "The imperial capital for over a millennium, Kyoto features thousands of classical Buddhist temples, Zen gardens, imperial palaces, and traditional wooden geisha districts.",
    highlights: [
      "Fushimi Inari-taisha with over 10,000 torii gates",
      "Kinkaku-ji (The Golden Pavilion)",
      "Arashiyama Bamboo Grove & Tenryu-ji",
      "Gion historic district and lantern-lit alleyways",
    ],
    localCuisine: [
      "Matcha Kaiseki multi-course dining",
      "Yudofu (Simmered silken tofu in kelp broth)",
      "Yatsuhashi cinnamon-infused confectionery",
    ],
    travelTips: [
      "Purchase an ICOCA transit card for seamless bus and train navigation.",
      "Visit Fushimi Inari at dawn (before 7:00 AM) to experience the torii gates without crowds.",
      "Book temple garden viewings 2-3 weeks in advance during autumn peak foliage.",
    ],
  },
  {
    id: "osaka",
    name: "Osaka",
    country: "Japan",
    regionSlug: "east-asia",
    subregionSlug: "kansai-region",
    regionName: "East Asia",
    subregionName: "Kansai Region",
    rating: 4.88,
    bestSeason: "Spring (March-May) & Autumn (October-November)",
    currency: "Japanese Yen (¥ / JPY)",
    language: "Japanese",
    description: "Known as 'The Nation's Kitchen', Osaka is famous for its vibrant neon canal district, warm hospitality, towering castle, and extraordinary street food culture.",
    highlights: [
      "Dotonbori neon arcade & Glico Running Man",
      "Historic Osaka Castle & plum blossom park",
      "Shinsekai retro dining district",
      "Kuromon Ichiba market food stalls",
    ],
    localCuisine: [
      "Takoyaki (Crispy octopus savory batter balls)",
      "Okonomiyaki (Cabbage pancake with pork & sweet glaze)",
      "Kushikatsu (Skewered deep-fried delicacies)",
    ],
    travelTips: [
      "Dotonbori is best explored after dusk when neon reflections illuminate the canal.",
      "Take a 15-minute express train to Kobe for wagyu beef day excursions.",
    ],
  },
  {
    id: "florence",
    name: "Florence",
    country: "Italy",
    regionSlug: "southern-europe",
    subregionSlug: "tuscany",
    regionName: "Southern Europe",
    subregionName: "Tuscany & Central Italy",
    rating: 4.92,
    bestSeason: "April - June & September - October",
    currency: "Euro (€ / EUR)",
    language: "Italian",
    description: "The birthplace of the Italian Renaissance, Florence is an open-air museum crowned by Brunelleschi's terracotta Duomo dome, the Uffizi Gallery, and the Ponte Vecchio.",
    highlights: [
      "Cattedrale di Santa Maria del Fiore (The Duomo)",
      "Uffizi Gallery (Botticelli's Birth of Venus)",
      "Piazzale Michelangelo sunset panoramic overlook",
      "Ponte Vecchio medieval jewelers' bridge",
    ],
    localCuisine: [
      "Bistecca alla Fiorentina (Thick-cut Chianina steak)",
      "Ribollita hearty vegetable bread soup",
      "Artisanal pistachio & stracciatella gelato",
    ],
    travelTips: [
      "Pre-reserve timed-entry tickets for the Uffizi and Accademia weeks ahead.",
      "Walk across the Arno river to the Oltrarno neighborhood for authentic artisan leather workshops.",
    ],
  },
  {
    id: "bergen",
    name: "Bergen",
    country: "Norway",
    regionSlug: "scandinavia",
    subregionSlug: "fjord-region",
    regionName: "Scandinavia",
    subregionName: "Western Fjord Region",
    rating: 4.86,
    bestSeason: "May - September (Long daylight hours)",
    currency: "Norwegian Krone (kr / NOK)",
    language: "Norwegian / English",
    description: "Surrounded by seven majestic mountains, Bergen is the gateway to Norway's deepest fjords, featuring the colorful UNESCO Bryggen wooden wharf.",
    highlights: [
      "UNESCO-listed Bryggen Hanseatic wooden waterfront",
      "Fløibanen Funicular to Mount Fløyen viewpoint",
      "Day boat cruise through the Nærøyfjord",
      "Historic Fish Market & fresh king crab tastings",
    ],
    localCuisine: [
      "Bergensk fiskesuppe (Creamy fish & sour cream soup)",
      "Smoked Atlantic salmon & cured trout",
      "Skillingsbolle (Cinnamon sugar buns)",
    ],
    travelTips: [
      "Bring waterproof outer shells — Bergen receives intermittent coastal showers.",
      "Take the picturesque Bergen Railway connecting Oslo over scenic high mountain passes.",
    ],
  },
  {
    id: "oaxaca",
    name: "Oaxaca",
    country: "Mexico",
    regionSlug: "latin-america",
    subregionSlug: "southern-highlands",
    regionName: "Central & South America",
    subregionName: "Southern Highlands",
    rating: 4.93,
    bestSeason: "October - March (Dry, festival season)",
    currency: "Mexican Peso ($ / MXN)",
    language: "Spanish / Zapotec",
    description: "Renowned as Mexico's culinary soul, Oaxaca boasts seven complex mole sauces, artisanal mezcal distilleries, handwoven textiles, and mountaintop pre-Columbian pyramids.",
    highlights: [
      "Monte Albán Zapotec ruins atop the central valley",
      "Santo Domingo Baroque church & botanical gardens",
      "Mercado 20 de Noviembre smoke alley",
      "Hierve el Agua calcified petrified waterfalls",
    ],
    localCuisine: [
      "Mole Negro made with over 30 roasted spices & Mexican chocolate",
      "Tlayudas (Crispy oversized toasted tortillas with Oaxacan cheese)",
      "Traditional Mezcal flights paired with orange slices and sal de gusano",
    ],
    travelTips: [
      "Spend early mornings exploring the open-air central markets.",
      "Hire local certified guides when visiting indigenous artisan weaving villages.",
    ],
  },
];

export const sampleItineraries: Itinerary[] = [
  {
    id: "autumn-in-honshu",
    tripTitle: "Autumn in Honshu & Cultural Kansai",
    totalDays: 10,
    budgetTier: "Comfort",
    estimatedCost: "$2,850 USD per person",
    destinations: [
      { name: "Kyoto", duration: "5 Days", activities: ["Zen Temples", "Bamboo Forest", "Kaiseki Dinner"] },
      { name: "Osaka", duration: "3 Days", activities: ["Dotonbori Street Food", "Osaka Castle", "Neon Night Walk"] },
      { name: "Nara & Kobe Excursion", duration: "2 Days", activities: ["Sacred Deer Park", "Todai-ji Great Buddha", "Harbor Promenade"] },
    ],
  },
  {
    id: "nordic-fjord-expedition",
    tripTitle: "Western Norway Fjords & Coastal Rails",
    totalDays: 7,
    budgetTier: "Luxury",
    estimatedCost: "$3,400 USD per person",
    destinations: [
      { name: "Bergen", duration: "3 Days", activities: ["Bryggen Wharf", "Mount Fløyen Hike", "Seafood Tasting"] },
      { name: "Flåm & Nærøyfjord", duration: "4 Days", activities: ["Scenic Flåm Railway", "Fjord Cruise", "Glacier Kayaking"] },
    ],
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id.toLowerCase() === id.toLowerCase());
}

export function getRegionBySlug(regionSlug: string): Region | undefined {
  return regions.find((r) => r.slug.toLowerCase() === regionSlug.toLowerCase());
}

export function getSubRegion(regionSlug: string, subregionSlug: string) {
  const reg = getRegionBySlug(regionSlug);
  if (!reg) return undefined;
  const sub = reg.subregions.find((s) => s.slug.toLowerCase() === subregionSlug.toLowerCase());
  if (!sub) return undefined;
  return { region: reg, subregion: sub };
}
