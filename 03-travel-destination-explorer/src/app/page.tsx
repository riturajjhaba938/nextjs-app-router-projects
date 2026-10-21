import { destinations, regions } from "../data/travel";
import DestinationExplorerList from "../components/DestinationExplorerList";

export default function DestinationsHomePage() {
  const regionOptions = regions.map((r) => ({ slug: r.slug, name: r.name }));

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Explore destinations
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Discover hand-picked global destinations organized by geographic regions and local itineraries.
        </p>
      </div>

      <DestinationExplorerList
        initialDestinations={destinations}
        regions={regionOptions}
      />
    </div>
  );
}
