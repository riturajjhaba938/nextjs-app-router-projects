import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations, getDestinationById } from "../../../data/travel";
import TravelBreadcrumbs from "../../../components/TravelBreadcrumbs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ id: d.id }));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <TravelBreadcrumbs
        items={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
      />

      <Link
        href="/destinations"
        className="inline-flex items-center text-xs font-semibold text-stone-500 hover:text-emerald-700 transition gap-1"
      >
        <span>&larr;</span> Back to destinations
      </Link>

      {/* Main Hero Card */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-100 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase tracking-wider">
                {destination.country} &bull; {destination.regionName}
              </span>
              <Link
                href={`/regions/${destination.regionSlug}/${destination.subregionSlug}`}
                className="text-xs text-stone-500 hover:text-emerald-700 font-medium"
              >
                ({destination.subregionName})
              </Link>
            </div>
            <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight">
              {destination.name}
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl">
            <span className="text-amber-500 text-lg">★</span>
            <div>
              <div className="text-xs text-stone-500">Traveler Score</div>
              <div className="text-base font-bold text-stone-900">{destination.rating.toFixed(2)} / 5.0</div>
            </div>
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Optimal Travel Window</span>
            <span className="font-semibold text-stone-900 text-sm block">{destination.bestSeason}</span>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Local Currency</span>
            <span className="font-semibold text-stone-900 text-sm block">{destination.currency}</span>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Primary Language</span>
            <span className="font-semibold text-stone-900 text-sm block">{destination.language}</span>
          </div>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
            Destination Overview
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed bg-stone-50/50 p-5 rounded-2xl border border-stone-100">
            {destination.description}
          </p>
        </div>

        {/* Must-Visit Highlights */}
        <div>
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">
            Top Architectural &amp; Natural Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {destination.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-3.5 bg-white border border-stone-200 rounded-xl flex items-center gap-3 text-xs"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <span className="font-medium text-stone-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Culinary Traditions */}
        <div>
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">
            Regional Culinary Traditions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {destination.localCuisine.map((dish, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs flex flex-col justify-between"
              >
                <span className="font-semibold text-stone-900">{dish}</span>
                <span className="text-[11px] text-emerald-700 mt-2 font-medium">Authentic Specialty</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Travel Notes */}
        <div className="p-6 rounded-2xl bg-stone-900 text-stone-100 space-y-3">
          <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Practical Transit &amp; Itinerary Advice
          </h2>
          <ul className="space-y-2 text-xs text-stone-300">
            {destination.travelTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
