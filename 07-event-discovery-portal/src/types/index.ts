export interface Speaker {
  name: string;
  role: string;
  company: string;
}

export interface TicketTier {
  name: string;
  price: string;
  perks: string[];
}

export interface EventItem {
  id: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  citySlug: string;
  cityName: string;
  venue: string;
  date: string;
  time: string;
  price: string;
  featured: boolean;
  description: string;
  speakers: Speaker[];
  ticketTiers: TicketTier[];
}

export interface City {
  slug: string;
  name: string;
  country: string;
  eventCount: number;
}

export interface EventCategory {
  slug: string;
  name: string;
  icon: string;
}
