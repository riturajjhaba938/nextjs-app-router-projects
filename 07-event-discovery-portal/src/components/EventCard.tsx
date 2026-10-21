import Link from "next/link";
import { EventItem } from "../types";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:border-rose-300 hover:shadow-md transition flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            href={`/events/city/${event.citySlug}/${event.categorySlug}`}
            className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 uppercase tracking-wider hover:bg-rose-100 transition"
          >
            {event.categoryName} &bull; {event.cityName}
          </Link>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-zinc-900 text-white">
            {event.price}
          </span>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 mb-2 hover:text-rose-600 transition">
          <Link href={`/events/${event.id}`}>{event.title}</Link>
        </h3>

        <p className="text-xs text-zinc-600 line-clamp-3 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-1.5 border-t border-zinc-100 pt-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span className="truncate">{event.venue}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-3.5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-xs">
        <span className="text-zinc-500">{event.time}</span>
        <Link
          href={`/events/${event.id}`}
          className="font-bold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1 group"
        >
          View Details
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
