"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RecipeNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/recipes" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-orange-700 transition">
                🍳
              </div>
              <span className="font-bold text-lg text-stone-900 tracking-tight">
                Everyday Recipes
              </span>
            </Link>

            <nav className="flex space-x-1">
              <Link
                href="/recipes"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/" || pathname === "/recipes" || pathname.startsWith("/recipes/view/")
                    ? "bg-stone-100 text-orange-700 font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                All Recipes
              </Link>
              <Link
                href="/recipes/cuisine/east-asian/kansai"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname.startsWith("/recipes/cuisine/")
                    ? "bg-stone-100 text-orange-700 font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                Regional Cuisines
              </Link>
              <Link
                href="/recipes/create"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/recipes/create"
                    ? "bg-stone-100 text-orange-700 font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                Recipe Creator
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/recipes/create"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition shadow-xs"
            >
              + Create Recipe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
