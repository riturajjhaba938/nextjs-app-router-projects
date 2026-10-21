import Link from "next/link";
import { notFound } from "next/navigation";
import { events, cities, categories, getEventsByCityAndCategory } from "@/data/events";
import EventBreadcrumbs from "@/components/EventBreadcrumbs";
import EventCard from "@/components/EventCard";

interface Props {
  params: Promise<{
    city: string;
    category: string;
  }>;
}

export function generateStaticParams() {
  const paramsList: { city: string; category: string }[] = [];

  cities.forEach((c) => {
    categories.forEach((cat) => {
      paramsList.push({
        city: c.slug,
        category: cat.slug,
      });
    });
  });

  return paramsList;
}

export async function generateMetadata({ params }: Props) {
  const { city, category } = await params;
  const currentCity = cities.find((c) => c.slug.toLowerCase() === city.toLowerCase());
  const currentCat = categories.find((c) => c.slug.toLowerCase() === category.toLowerCase());

  const cityName = currentCity ? currentCity.name : city;
  const catName = currentCat ? currentCat.name : category;

  return {
    title: `${catName} Events in ${cityName} | EventHub`,
    description: `Discover upcoming ${catName} summits, conferences, and meetups happening in ${cityName}.`,
  };
}

export default async function CityCategoryEventsPage({ params }: Props) {
  const { city, category } = await params;

  const currentCity = cities.find((c) => c.slug.toLowerCase() === city.toLowerCase());
  const currentCategory = categories.find((c) => c.slug.toLowerCase() === category.toLowerCase());

  if (!currentCity || !currentCategory) {
    notFound();
  }

  const matchingEvents = getEventsByCityAndCategory(city, category);

  // Other categories available in this city
  const otherCategories = categories.filter((c) => c.slug !== category);

  return (
    <div className="space-y-8 pb-16">
      <EventBreadcrumbs
        items={[
          { label: "Events Directory", href: "/events" },
          { label: currentCity.name, href: `/events?city=${currentCity.slug}` },
          { label: currentCategory.name },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 rounded-full text-xs font-bold uppercase tracking-wider">
            {currentCity.country}
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300">
            {matchingEvents.length} {matchingEvents.length === 1 ? "Event Found" : "Events Found"}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
          {currentCategory.icon} {currentCategory.name} Events in {currentCity.name}
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Upcoming gatherings, workshops, and flagship conferences focused on {currentCategory.name} hosted throughout {currentCity.name}.
        </p>

        {/* Switch Categories in this city */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          <span className="text-xs font-semibold text-slate-400 mr-1">Other Topics in {currentCity.name}:</span>
          {otherCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/events/city/${currentCity.slug}/${c.slug}`}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-all"
            >
              {c.icon} {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Results */}
      {matchingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto text-slate-400">
            🗓️
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            No {currentCategory.name} Events Currently Scheduled in {currentCity.name}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Organizers have not published events for this specific city and topic combination yet. Check back soon or explore events in neighboring hubs.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/events"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all"
            >
              View All Global Events
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
