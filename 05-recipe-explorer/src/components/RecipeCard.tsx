import Link from "next/link";
import { Recipe } from "../types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-orange-300 hover:shadow-md transition flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            href={`/recipes/${recipe.cuisineSlug}`}
            className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-100 uppercase tracking-wider hover:bg-orange-100 transition"
          >
            {recipe.cuisineName}
          </Link>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="text-lg font-bold text-stone-900 mb-2 hover:text-orange-600 transition">
          <Link href={`/recipes/view/${recipe.id}`}>{recipe.title}</Link>
        </h3>

        <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
          {recipe.description}
        </p>

        <div className="border-t border-stone-100 pt-3 text-xs flex items-center justify-between text-stone-500">
          <div>
            <span>Prep: {recipe.prepTime}</span> &bull; <span>Cook: {recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-amber-600">
            <span>★</span>
            <span>{recipe.rating.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
        <span className="text-stone-500">{recipe.calories} kcal &bull; {recipe.servings} Servings</span>
        <Link
          href={`/recipes/view/${recipe.id}`}
          className="font-semibold text-orange-700 hover:text-orange-900 inline-flex items-center gap-1 group"
        >
          View Recipe
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
