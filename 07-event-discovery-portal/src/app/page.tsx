import Link from "next/link";
import { events, cities, categories } from "@/data/events";
import EventCard from "@/components/EventCard";

export default function HomePage() {
  const featuredEvents = events.filter((e) => e.featured);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 md:p-14 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-indigo-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            2026 Global Conference & Meetup Index
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Discover What's Happening in Tech, Arts, & Culture
          </h1>
          <p className="text-indigo-200 text-base md:text-lg leading-relaxed">
            Explore curated conferences, hackathons, and creative expos worldwide. Reserve your passes, view agendas, and connect with industry leaders.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/events"
              className="px-6 py-3 bg-white text-indigo-900 hover:bg-indigo-50 font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Browse All Events →
            </Link>
            <Link
              href="/events/city/san-francisco/tech"
              className="px-5 py-3 bg-indigo-700/60 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm border border-indigo-500/30 transition-all"
            >
              Explore SF Tech Hub
            </Link>
          </div>
        </div>

        {/* Floating background decorative circles */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-40 top-10 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Category Pills */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Explore by Category</h2>
          <Link href="/events" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/events?category=${cat.slug}`}
              className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex items-center gap-4"
            >
              <span className="text-3xl p-3 bg-slate-50 group-hover:bg-indigo-50 rounded-xl transition-colors">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {events.filter((e) => e.categorySlug === cat.slug).length} upcoming
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Featured Highlights</h2>
            <p className="text-xs text-slate-500 mt-1">Hand-picked flagship summits and showcases</p>
          </div>
          <Link
            href="/events"
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs rounded-xl transition-colors"
          >
            See Full Calendar
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </section>

      {/* Top Cities Showcase */}
      <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Host Cities</h2>
          <p className="text-xs text-slate-500 mt-0.5">Explore events taking place across premier tech and cultural centers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <div key={city.slug} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {city.country}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {city.eventCount} {city.eventCount === 1 ? "Event" : "Events"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{city.name}</h3>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                <Link
                  href={`/events/city/${city.slug}/tech`}
                  className="text-slate-600 hover:text-indigo-600 underline font-medium"
                >
                  Tech
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  href={`/events/city/${city.slug}/music`}
                  className="text-slate-600 hover:text-indigo-600 underline font-medium"
                >
                  Music
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  href={`/events/city/${city.slug}/business`}
                  className="text-slate-600 hover:text-indigo-600 underline font-medium"
                >
                  Business
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
