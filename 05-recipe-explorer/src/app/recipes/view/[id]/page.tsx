import { notFound } from "next/navigation";
import Link from "next/link";
import { recipes, getRecipeById } from "../../../../data/recipes";
import RecipeBreadcrumbs from "../../../../components/RecipeBreadcrumbs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default async function RecipeDetailPage({ params }: Props) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <RecipeBreadcrumbs
        items={[
          { label: "Recipes", href: "/recipes" },
          { label: recipe.cuisineName, href: `/recipes/${recipe.cuisineSlug}` },
          { label: recipe.title },
        ]}
      />

      <Link
        href="/recipes"
        className="inline-flex items-center text-xs font-semibold text-stone-500 hover:text-orange-700 transition gap-1"
      >
        <span>&larr;</span> Back to recipe collection
      </Link>

      <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xs space-y-6">
        <div className="border-b border-stone-100 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-orange-800 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 uppercase tracking-wider">
              {recipe.cuisineName} &bull; {recipe.regionName}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
              {recipe.difficulty}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            {recipe.title}
          </h1>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-3xl">
            {recipe.description}
          </p>
        </div>

        {/* Nutritional & Prep Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Prep Time</span>
            <span className="font-bold text-stone-900 text-sm block">{recipe.prepTime}</span>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Cook Time</span>
            <span className="font-bold text-stone-900 text-sm block">{recipe.cookTime}</span>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Servings</span>
            <span className="font-bold text-stone-900 text-sm block">{recipe.servings} Portions</span>
          </div>
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
            <span className="text-stone-400 block mb-1">Calories</span>
            <span className="font-bold text-stone-900 text-sm block">{recipe.calories} kcal</span>
          </div>
        </div>

        {/* Ingredients Checklist */}
        <div>
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">
            Ingredients Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {recipe.ingredients.map((ing, i) => (
              <div
                key={i}
                className="p-3 bg-stone-50/70 rounded-xl border border-stone-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-orange-400 bg-white flex items-center justify-center text-[10px] text-orange-600">
                    ✓
                  </span>
                  <span className="font-medium text-stone-800">{ing.item}</span>
                </div>
                <span className="font-bold text-stone-900">{ing.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div>
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
            Methodology &amp; Cooking Steps
          </h2>
          <div className="space-y-4">
            {recipe.instructions.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-2xl border border-stone-200 bg-white flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                  {step.step}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Step {step.step}</span>
                    {step.timingCue && (
                      <span className="text-[11px] font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                        ⏱ {step.timingCue}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
