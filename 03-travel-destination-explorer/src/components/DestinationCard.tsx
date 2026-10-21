import Link from "next/link";
import { Destination } from "../types";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-stone-300 transition flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wider">
              {destination.country} &bull; {destination.regionName}
            </span>
            <h3 className="text-xl font-bold text-stone-900 mt-2 hover:text-emerald-700 transition">
              <Link href={`/destinations/${destination.id}`}>{destination.name}</Link>
            </h3>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
            <span>★</span>
            <span>{destination.rating.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
          {destination.description}
        </p>

        <div className="space-y-2 border-t border-stone-100 pt-3 text-xs">
          <div className="flex items-center justify-between text-stone-500">
            <span>Best Season:</span>
            <span className="font-medium text-stone-800 text-right">{destination.bestSeason}</span>
          </div>
          <div className="flex items-center justify-between text-stone-500">
            <span>Currency:</span>
            <span className="font-medium text-stone-800">{destination.currency}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
        <Link
          href={`/regions/${destination.regionSlug}/${destination.subregionSlug}`}
          className="text-xs text-stone-500 hover:text-emerald-700 font-medium"
        >
          {destination.subregionName}
        </Link>
        <Link
          href={`/destinations/${destination.id}`}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 group"
        >
          Explore Guide
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
