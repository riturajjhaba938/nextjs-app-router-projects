import Link from "next/link";
import { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between">
      {/* Visual Area */}
      <div className="relative bg-slate-50 p-8 flex items-center justify-center border-b border-slate-100 min-h-[220px]">
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold rounded-full shadow-2xs border border-slate-200">
            {product.badge}
          </span>
        )}

        <div className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
          {product.emoji}
        </div>

        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400">
          {product.inStock ? `${product.stockCount} in stock` : "Sold Out"}
        </span>
      </div>

      {/* Info Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
              <span>★</span>
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          <Link
            href={`/products/view/${product.id}`}
            className="block text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2"
          >
            {product.name}
          </Link>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Price</span>
            <span className="text-lg font-black text-slate-900">
              {product.currency}{product.price}
            </span>
          </div>

          <Link
            href={`/products/view/${product.id}`}
            className="px-3.5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-semibold transition-colors shadow-2xs"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
