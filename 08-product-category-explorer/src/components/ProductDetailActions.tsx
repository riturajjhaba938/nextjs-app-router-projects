"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "../types";

export default function ProductDetailActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 3500);
  };

  return (
    <div className="space-y-6 bg-slate-50 rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Price</span>
          <span className="text-3xl font-black text-slate-900">
            {product.currency}{product.price * quantity}
          </span>
        </div>
        <div className="text-right">
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
              product.inStock
                ? "bg-emerald-100 text-emerald-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.inStock ? `● ${product.stockCount} in Stock` : "Sold Out"}
          </span>
          <p className="text-[11px] text-slate-400 mt-1">Dispatches in 24 hours</p>
        </div>
      </div>

      {product.inStock && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold text-slate-600">Quantity:</label>
            <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-bold text-slate-900 min-w-8 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                added
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-900 hover:bg-indigo-600 text-white hover:shadow-indigo-500/20"
              }`}
            >
              {added ? "✓ Added to Bag!" : `Add to Bag — ${product.currency}${product.price * quantity}`}
            </button>

            <Link
              href="/preferences"
              className="px-4 py-3.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs text-center transition-colors"
            >
              Shopping Settings
            </Link>
          </div>
        </div>
      )}

      {/* Perks Ribbon */}
      <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <span>📦</span>
          <span>Free Global Express Courier</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🛡️</span>
          <span>2-Year Manufacturer Warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔄</span>
          <span>30-Day Hassle-Free Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🌿</span>
          <span>Carbon-Neutral Packaging</span>
        </div>
      </div>
    </div>
  );
}
