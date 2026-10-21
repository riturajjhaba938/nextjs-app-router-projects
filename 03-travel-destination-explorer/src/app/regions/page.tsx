import Link from "next/link";
import { regions } from "../../data/travel";
import TravelBreadcrumbs from "../../components/TravelBreadcrumbs";

export default function RegionsLandingPage() {
  return (
    <div className="space-y-6">
      <TravelBreadcrumbs items={[{ label: "Geographic Regions" }]} />

      <div className="border-b border-stone-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Geographic Regions
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Explore destinations organized across macro-continents and distinct cultural micro-regions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regions.map((region) => (
          <div
            key={region.slug}
            className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wider">
                  {region.continent}
                </span>
                <span className="text-xs text-stone-400">
                  {region.subregions.length} Subregions
                </span>
              </div>

              <h2 className="text-2xl font-bold text-stone-900 mb-2">{region.name}</h2>
              <p className="text-xs text-stone-600 leading-relaxed mb-6">
                {region.description}
              </p>

              <div className="space-y-2.5 border-t border-stone-100 pt-4">
                <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                  Cultural Subregions
                </span>
                {region.subregions.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/regions/${region.slug}/${sub.slug}`}
                    className="p-3 rounded-xl bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 flex items-center justify-between transition group"
                  >
                    <div>
                      <span className="font-semibold text-xs text-stone-900 group-hover:text-emerald-800 transition">
                        {sub.name}
                      </span>
                      <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{sub.climate}</p>
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
