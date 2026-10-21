export interface Destination {
  id: string;
  name: string;
  country: string;
  regionSlug: string;
  subregionSlug: string;
  regionName: string;
  subregionName: string;
  rating: number;
  bestSeason: string;
  currency: string;
  language: string;
  description: string;
  highlights: string[];
  localCuisine: string[];
  travelTips: string[];
}

export interface SubRegion {
  slug: string;
  name: string;
  description: string;
  climate: string;
  destinationCount: number;
}

export interface Region {
  slug: string;
  name: string;
  continent: string;
  description: string;
  subregions: SubRegion[];
}

export interface Itinerary {
  id: string;
  tripTitle: string;
  destinations: {
    name: string;
    duration: string;
    activities: string[];
  }[];
  totalDays: number;
  budgetTier: "Backpacker" | "Comfort" | "Luxury";
  estimatedCost: string;
}
