import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function NotFound() {
  const suggestedProducts = products.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-3xl flex items-center justify-center text-4xl shadow-inner">
        📦
      </div>
      <span className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
        404 — Product or Category Not Found
      </span>
      <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
        The Item You Requested Is No Longer In The Catalog
      </h1>
      <p className="text-slate-600 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
        The category path or product ID might have changed, expired, or been relocated to a different collection.
      </p>

      <div className="flex justify-center gap-3 mb-14">
        <Link
          href="/products"
          className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
        >
          Explore All Products
        </Link>
        <Link
          href="/"
          className="px-6 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-all"
        >
          Return to Storefront
        </Link>
      </div>

      <div className="text-left border-t border-slate-200 pt-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          Recommended Flagship Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {suggestedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
