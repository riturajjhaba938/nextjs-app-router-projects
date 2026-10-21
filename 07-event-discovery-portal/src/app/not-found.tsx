import Link from "next/link";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export default function NotFound() {
  const suggestedEvents = events.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
        🎟️
      </div>
      <span className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
        404 — Event Not Found
      </span>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        The Event or Route You Are Looking For Does Not Exist
      </h1>
      <p className="text-slate-600 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
        This event may have concluded, been moved to a different city or category, or the URL might be mistyped.
      </p>

      <div className="flex justify-center gap-3 mb-12">
        <Link
          href="/events"
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
        >
          Browse All Events
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold transition-all"
        >
          Return Home
        </Link>
      </div>

      <div className="text-left border-t border-slate-200 pt-10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          Discover Other Popular Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suggestedEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </div>
    </div>
  );
}
