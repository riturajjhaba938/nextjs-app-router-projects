import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 rounded-full mb-4">
          404 &bull; ROUTE NOT FOUND
        </span>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          Recipe or cuisine not found
        </h2>
        <p className="text-sm text-stone-500 mb-8 leading-relaxed">
          The requested culinary recipe or regional cuisine route could not be located. It may have moved or the route parameters might be invalid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/recipes"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-orange-600 text-white hover:bg-orange-700 transition shadow-xs"
          >
            Browse All Recipes
          </Link>
          <Link
            href="/recipes/cuisine/east-asian/kansai"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-stone-100 text-stone-700 hover:bg-stone-200 transition"
          >
            Explore Regional Cuisines
          </Link>
        </div>
      </div>
    </div>
  );
}
