import { notFound } from "next/navigation";
import Link from "next/link";
import { cuisines, recipes, getCuisineRegion } from "../../../../../data/recipes";
import RecipeBreadcrumbs from "../../../../../components/RecipeBreadcrumbs";
import RecipeCard from "../../../../../components/RecipeCard";

interface Props {
  params: Promise<{
    cuisine: string;
    region: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { cuisine: string; region: string }[] = [];
  cuisines.forEach((c) => {
    c.regions.forEach((r) => {
      paths.push({
        cuisine: c.slug,
        region: r.slug,
      });
    });
  });
  return paths;
}

export default async function NestedCuisineRegionPage({ params }: Props) {
  const { cuisine, region } = await params;
  const result = getCuisineRegion(cuisine, region);

  if (!result) {
    notFound();
  }

  const { cuisine: cui, region: reg } = result;

  const regionalRecipes = recipes.filter(
    (r) => r.cuisineSlug === cui.slug && r.regionSlug === reg.slug
  );

  return (
    <div className="space-y-6">
      <RecipeBreadcrumbs
        items={[
          { label: "Cuisines", href: "/recipes" },
          { label: cui.name, href: `/recipes/${cui.slug}` },
          { label: reg.name },
        ]}
      />

      <Link
        href={`/recipes/${cui.slug}`}
        className="inline-flex items-center text-xs font-semibold text-stone-500 hover:text-orange-700 transition gap-1"
      >
        <span>&larr;</span> Return to {cui.name} Cuisines
      </Link>

      <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-orange-800 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 uppercase tracking-wider">
            {cui.name} &bull; Regional Culinary Heritage
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          {reg.name}
        </h1>
        <p className="mt-2 text-sm text-stone-600 max-w-3xl leading-relaxed">
          {reg.description}
        </p>

        <div className="mt-4 pt-4 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">
            Signature Culinary Techniques &amp; Staples
          </span>
          <div className="flex flex-wrap gap-2">
            {reg.traditions.map((trad, i) => (
              <span
                key={i}
                className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-700"
              >
                &bull; {trad}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-stone-900">
            Featured Regional Recipes ({regionalRecipes.length})
          </h2>
        </div>

        {regionalRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalRecipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-2xl border border-dashed border-stone-200 text-sm text-stone-500">
            No recipes filed under this specific subregion yet.
          </div>
        )}
      </div>
    </div>
  );
}
