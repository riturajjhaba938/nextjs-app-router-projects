"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Product, CategoryItem } from "../types";
import ProductCard from "./ProductCard";

interface Props {
  initialProducts: Product[];
  categories: CategoryItem[];
  activeCategorySlug?: string;
  categoryTitle: string;
  categoryDesc?: string;
}

export default function ProductCatalogView({
  initialProducts,
  categories,
  activeCategorySlug,
  categoryTitle,
  categoryDesc,
}: Props) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [inStockOnly, setInStockOnly] = useState(false);

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let result = initialProducts.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchStock = inStockOnly ? p.inStock && p.stockCount > 0 : true;
      return matchSearch && matchStock;
    });

    switch (sortBy) {
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);
      case "price-desc":
        return result.sort((a, b) => b.price - a.price);
      case "rating":
        return result.sort((a, b) => b.rating - a.rating);
      case "featured":
      default:
        return result;
    }
  }, [initialProducts, search, inStockOnly, sortBy]);

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Collection Explorer
            </span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">{categoryTitle}</h1>
            {categoryDesc && <p className="text-slate-500 text-sm mt-1 max-w-2xl">{categoryDesc}</p>}
          </div>

          <div className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl self-start md:self-center">
            {displayedProducts.length} {displayedProducts.length === 1 ? "Item Available" : "Items Available"}
          </div>
        </div>

        {/* Quick Category Switcher */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          <Link
            href="/products"
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              !activeCategorySlug
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Categories
          </Link>

          {categories.map((c) => {
            const href = c.parentSlug ? `/products/${c.parentSlug}/${c.slug}` : `/products/${c.slug}`;
            const isActive = activeCategorySlug === c.slug;

            return (
              <Link
                key={c.slug}
                href={href}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Filter and Controls Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search within this collection..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
          />
        </div>

        {/* Sort & Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="rounded text-slate-900 focus:ring-slate-900"
            />
            <span>In Stock Only</span>
          </label>

          <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <option value="featured">Featured / Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-16 text-center space-y-3">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto text-slate-400">
            📦
          </div>
          <h3 className="text-base font-bold text-slate-800">No Products Matched Your Filter</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or enabling out-of-stock items to view more products.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setInStockOnly(false);
              setSortBy("featured");
            }}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
