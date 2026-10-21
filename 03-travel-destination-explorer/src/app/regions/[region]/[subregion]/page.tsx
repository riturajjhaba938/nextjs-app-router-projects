import { notFound } from "next/navigation";
import Link from "next/link";
import { regions, destinations, getSubRegion } from "../../../../data/travel";
import TravelBreadcrumbs from "../../../../components/TravelBreadcrumbs";
import DestinationCard from "../../../../components/DestinationCard";

interface Props {
  params: Promise<{
    region: string;
    subregion: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { region: string; subregion: string }[] = [];
  regions.forEach((reg) => {
    reg.subregions.forEach((sub) => {
      paths.push({
        region: reg.slug,
        subregion: sub.slug,
      });
    });
  });
  return paths;
}

export default async function NestedRegionExplorerPage({ params }: Props) {
  const { region, subregion } = await params;
  const result = getSubRegion(region, subregion);

  if (!result) {
    notFound();
  }

  const { region: regData, subregion: subData } = result;

  const regionalDestinations = destinations.filter(
    (d) => d.regionSlug === regData.slug && d.subregionSlug === subData.slug
  );

  return (
    <div className="space-y-6">
      <TravelBreadcrumbs
        items={[
          { label: "Regions", href: "/regions" },
          { label: regData.name, href: "/regions" },
          { label: subData.name },
        ]}
      />

      <Link
        href="/regions"
        className="inline-flex items-center text-xs font-semibold text-stone-500 hover:text-emerald-700 transition gap-1"
      >
        <span>&larr;</span> Back to all geographic regions
      </Link>

      {/* Region Banner */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase tracking-wider">
            {regData.name} &bull; Cultural Subregion
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {subData.name}
        </h1>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          {subData.description}
        </p>

        <div className="mt-4 p-4 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-700">
          <strong className="text-stone-900">Climate &amp; Seasonal Profile: </strong>
          {subData.climate}
        </div>
      </div>

      {/* Destinations in this subregion */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-stone-900">
            Destinations in this region ({regionalDestinations.length})
          </h2>
          <span className="text-xs text-stone-400">Direct regional index</span>
        </div>

        {regionalDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-2xl border border-dashed border-stone-200 text-sm text-stone-500">
            No specific destination guides cataloged for this subregion yet.
          </div>
        )}
      </div>
    </div>
  );
}
