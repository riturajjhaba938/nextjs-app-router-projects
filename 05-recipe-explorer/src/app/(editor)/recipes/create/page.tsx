"use client";

import { useState } from "react";
import Link from "next/link";
import RecipeBreadcrumbs from "../../../../components/RecipeBreadcrumbs";

export default function CreateRecipePage() {
  const [title, setTitle] = useState("Garlic Sesame Soba Noodles");
  const [cuisine, setCuisine] = useState("East Asian");
  const [prepTime, setPrepTime] = useState("10 mins");
  const [cookTime, setCookTime] = useState("8 mins");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Easy");
  const [servings, setServings] = useState(2);
  const [calories, setCalories] = useState(360);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <RecipeBreadcrumbs
        items={[
          { label: "Recipes", href: "/recipes" },
          { label: "Create Recipe" },
        ]}
      />

      <div className="border-b border-stone-200 pb-5">
        <div className="inline-block px-2.5 py-1 text-xs font-semibold text-orange-800 bg-orange-50 border border-orange-100 rounded-md mb-2">
          Route Group: (editor)
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900">
          Create New Recipe
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Author and submit handcrafted culinary recipes into the global community database with real-time preview.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-stone-200 p-6 shadow-xs space-y-5">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Cuisine Category</label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-700 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
              >
                <option value="East Asian">East Asian</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Mediterranean">Mediterranean</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Skill Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as "Easy" | "Medium" | "Hard")}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-700 focus:outline-hidden focus:ring-2 focus:ring-orange-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Prep Time</label>
              <input
                type="text"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Cook Time</label>
              <input
                type="text"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Servings</label>
              <input
                type="number"
                value={servings}
                onChange={(e) => setServings(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Calories</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="w-full text-sm bg-stone-50 border border-stone-200 rounded-xl px-3 py-2"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={() => setSubmitted(true)}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition shadow-xs"
            >
              Publish Recipe
            </button>
            {submitted && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                ✓ Recipe staged successfully to local storage!
              </span>
            )}
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
            Live Card Preview
          </span>
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-100 uppercase">
                {cuisine}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                {difficulty}
              </span>
            </div>

            <h3 className="text-lg font-bold text-stone-900 leading-snug">{title || "Untitled Recipe"}</h3>

            <div className="text-xs text-stone-500 space-y-1">
              <div>Prep: {prepTime} &bull; Cook: {cookTime}</div>
              <div>{calories} kcal &bull; {servings} Servings</div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-xs font-semibold text-orange-700">
              Preview Mode Active &bull; Form Sync
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
