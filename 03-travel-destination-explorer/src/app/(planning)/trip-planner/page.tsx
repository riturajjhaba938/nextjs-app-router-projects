import Link from "next/link";
import { sampleItineraries } from "../../../data/travel";
import TravelBreadcrumbs from "../../../components/TravelBreadcrumbs";

export default function TripPlannerPage() {
  return (
    <div className="space-y-6">
      <TravelBreadcrumbs items={[{ label: "Trip Planner & Itineraries" }]} />

      <div className="border-b border-stone-200 pb-5">
        <div className="inline-block px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-md mb-2">
          Route Group: (planning)
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
          Trip Planner Overview
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Curated, multi-destination itineraries complete with duration estimates, budget tiers, and activity milestones.
        </p>
      </div>

      <div className="space-y-6">
        {sampleItineraries.map((itinerary) => (
          <div
            key={itinerary.id}
            className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs hover:border-emerald-300 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {itinerary.budgetTier} Itinerary Tier
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  {itinerary.tripTitle}
                </h2>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-center">
                  <span className="text-stone-400 block">Total Duration</span>
                  <span className="font-bold text-stone-800 text-sm">{itinerary.totalDays} Days</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                  <span className="text-emerald-700 block">Estimated Cost</span>
                  <span className="font-bold text-emerald-900 text-sm">{itinerary.estimatedCost}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
                Curated Route Milestones &amp; Stays
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {itinerary.destinations.map((dest, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-stone-900">{dest.name}</span>
                        <span className="text-xs font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                          {dest.duration}
                        </span>
                      </div>
                      <div className="space-y-1 mt-2">
                        {dest.activities.map((act, actIdx) => (
                          <div key={actIdx} className="text-xs text-stone-600 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-600"></span>
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
