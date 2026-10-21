import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.badge);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-14 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-slate-200 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            PlainShop Autumn 2026 Collection
          </span>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Minimal Hardware for Thoughtful Workspaces.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Studio-grade planar acoustics, tactile mechanical keyboards, and solid American walnut organizers crafted for architects, engineers, and digital craftsmen.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/products"
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl text-xs transition-all shadow-md"
            >
              Browse Full Catalog →
            </Link>
            <Link
              href="/products/electronics/audio"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-xs transition-all"
            >
              Explore Studio Audio
            </Link>
          </div>
        </div>

        {/* Decorative graphic circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-20 -bottom-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Featured Categories Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Curated Disciplines</h2>
          <Link href="/products" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((cat) => {
            const href = cat.parentSlug ? `/products/${cat.parentSlug}/${cat.slug}` : `/products/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={href}
                className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:text-slate-900">
                    Explore →
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Staff Highlights */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Staff Picks & Best Sellers</h2>
            <p className="text-xs text-slate-500 mt-0.5">High-impact tools engineered for focus</p>
          </div>
          <Link
            href="/products"
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
          >
            See All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
