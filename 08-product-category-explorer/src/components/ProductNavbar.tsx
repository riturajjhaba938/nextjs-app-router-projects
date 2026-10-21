import Link from "next/link";

export default function ProductNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              PS
            </span>
            <div className="leading-none">
              <span className="font-extrabold text-base tracking-tight text-slate-900">PlainShop</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">Catalog Explorer</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-600">
            <Link
              href="/products"
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/products/electronics"
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Electronics
            </Link>
            <Link
              href="/products/electronics/audio"
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Audio
            </Link>
            <Link
              href="/products/electronics/workstation"
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Workstation
            </Link>
            <Link
              href="/products/office"
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Desk & Office
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/preferences"
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <span>⚙️</span>
            <span className="hidden sm:inline">Preferences</span>
          </Link>

          <Link
            href="/products"
            className="relative p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Shopping Bag"
          >
            <span className="text-base">🛍️</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-slate-900 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
