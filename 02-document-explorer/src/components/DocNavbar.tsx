"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/docs" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                &lt;/&gt;
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">CoreDocs</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  v16.3
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-1">
              <Link
                href="/docs"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/docs" || pathname.startsWith("/docs/")
                    ? "bg-slate-100 text-indigo-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Documentation
              </Link>
              <Link
                href="/docs/routing/catch-all-routes"
                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Catch-all Routes
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/docs/routing/dynamic-routes"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-xs"
            >
              Explore Guides &rarr;
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
