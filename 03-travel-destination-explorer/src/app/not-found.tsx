import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 rounded-full mb-4">
          404 &bull; ROUTE NOT FOUND
        </span>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          Destination or region not found
        </h2>
        <p className="text-sm text-stone-500 mb-8 leading-relaxed">
          The requested geographic destination or region could not be located within the WayFinder travel database. This path may have changed or the slug identifier might be invalid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/destinations"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Return to Destinations
          </Link>
          <Link
            href="/regions"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
          >
            Explore All Regions
          </Link>
        </div>
      </div>
    </div>
  );
}
