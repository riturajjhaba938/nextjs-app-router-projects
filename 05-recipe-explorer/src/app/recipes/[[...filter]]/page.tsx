import Link from "next/link";
import { recipes, cuisines } from "../../../data/recipes";
import RecipeCard from "../../../components/RecipeCard";
import RecipeBreadcrumbs from "../../../components/RecipeBreadcrumbs";

interface Props {
  params: Promise<{
    filter?: string[];
  }>;
}

export async function generateStaticParams() {
  const paths: { filter?: string[] }[] = [
    { filter: undefined },
    { filter: [] },
  ];

  cuisines.forEach((c) => {
    paths.push({ filter: [c.slug] });
    c.regions.forEach((r) => {
      paths.push({ filter: [c.slug, r.slug] });
    });
  });

  return paths;
}

export default async function RecipeCatalogPage({ params }: Props) {
  const { filter } = await params;

  const cuisineFilter = filter?.[0];
  const regionFilter = filter?.[1];

  let displayRecipes = recipes;
  if (cuisineFilter) {
    displayRecipes = displayRecipes.filter((r) => r.cuisineSlug.toLowerCase() === cuisineFilter.toLowerCase());
  }
  if (regionFilter) {
    displayRecipes = displayRecipes.filter((r) => r.regionSlug.toLowerCase() === regionFilter.toLowerCase());
  }

  const activeCuisine = cuisineFilter ? cuisines.find((c) => c.slug.toLowerCase() === cuisineFilter.toLowerCase()) : null;

  return (
    <div className="space-y-6">
      <RecipeBreadcrumbs
        items={[
          ...(activeCuisine ? [{ label: activeCuisine.name, href: `/recipes/${activeCuisine.slug}` }] : []),
          ...(regionFilter ? [{ label: regionFilter }] : [{ label: "All Recipes" }]),
        ]}
      />

      <div className="border-b border-stone-200 pb-5">
        <div className="inline-block px-2.5 py-1 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-100 rounded-md mb-2">
          Optional Catch-All Route: [[...filter]]
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
          {activeCuisine ? `${activeCuisine.name} Recipes` : "All Recipes"}
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Explore handcrafted recipes, filter by international cuisine or regional kitchen traditions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 items-center bg-white p-3 rounded-2xl border border-stone-200 shadow-xs">
        <Link
          href="/recipes"
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
            !cuisineFilter
              ? "bg-orange-600 text-white shadow-xs"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          All Cuisines
        </Link>
        {cuisines.map((c) => (
          <Link
            key={c.slug}
            href={`/recipes/${c.slug}`}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              cuisineFilter === c.slug
                ? "bg-orange-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            <span>{c.icon}</span>
            <span>{c.name}</span>
          </Link>
        ))}
      </div>

      <div className="text-xs text-stone-500 flex items-center justify-between">
        <span>
          Showing <strong className="text-stone-900">{displayRecipes.length}</strong> recipes
        </span>
        {cuisineFilter && (
          <Link href="/recipes" className="text-orange-700 hover:underline font-medium">
            Reset to all
          </Link>
        )}
      </div>

      {displayRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-stone-200">
          <p className="text-stone-500 text-sm">No recipes found under this category filter.</p>
        </div>
      )}
    </div>
  );
}
