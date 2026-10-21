import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventById } from "@/data/events";
import EventBreadcrumbs from "@/components/EventBreadcrumbs";
import EventCard from "@/components/EventCard";
import TicketBookingModal from "@/components/TicketBookingModal";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return events.map((e) => ({
    id: e.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return {
      title: "Event Not Found | EventHub",
    };
  }

  return {
    title: `${event.title} | EventHub`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  const relatedEvents = events
    .filter((e) => e.id !== event.id && (e.categorySlug === event.categorySlug || e.citySlug === event.citySlug))
    .slice(0, 2);

  return (
    <div className="space-y-10 pb-16">
      <EventBreadcrumbs
        items={[
          { label: "Events Directory", href: "/events" },
          { label: event.title },
        ]}
      />

      {/* Hero Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-xs uppercase tracking-wider">
            {event.categoryName}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 font-medium rounded-lg text-xs">
            📍 {event.cityName}
          </span>
          {event.featured && (
            <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-xs border border-amber-200">
              ⭐ Featured Event
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {event.title}
        </h1>

        {/* Quick Meta Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">📅</span>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Date & Time</p>
              <p className="text-xs font-bold text-slate-800">{event.date}</p>
              <p className="text-[11px] text-slate-500">{event.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">📍</span>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Venue</p>
              <p className="text-xs font-bold text-slate-800">{event.venue}</p>
              <p className="text-[11px] text-slate-500">{event.cityName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">🎟️</span>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Starting Price</p>
              <p className="text-sm font-black text-indigo-600">{event.price}</p>
              <p className="text-[11px] text-slate-500">Tier options available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Overview & Speakers */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">About this Event</h2>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {/* Speakers */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Featured Speakers & Hosts</h2>
              <span className="text-xs text-slate-400 font-semibold">
                {event.speakers.length} Confirmed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.speakers.map((spk, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-100 bg-slate-50/70"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {spk.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{spk.name}</h4>
                    <p className="text-xs text-indigo-600 font-medium">{spk.role}</p>
                    <p className="text-[11px] text-slate-500">{spk.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Ticket Booking */}
        <div className="space-y-6">
          <TicketBookingModal
            eventId={event.id}
            eventTitle={event.title}
            ticketTiers={event.ticketTiers}
          />

          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5 space-y-2 text-xs text-indigo-900">
            <h4 className="font-bold flex items-center gap-1.5">
              <span>🛡️</span> Verified Organizers
            </h4>
            <p className="leading-relaxed text-indigo-700 text-[11px]">
              All listed sessions and schedules are officially confirmed with venue operators. Digital ticket passes are instantly transferable and accessible anytime in your portal.
            </p>
          </div>
        </div>
      </div>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <div className="border-t border-slate-200 pt-10 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">More Events You Might Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedEvents.map((re) => (
              <EventCard key={re.id} event={re} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
