"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TravelNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Geographic Regions", href: "/regions" },
    { label: "Trip Planner", href: "/trip-planner" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/destinations" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-emerald-700 transition">
                WF
              </div>
              <span className="font-bold text-lg text-stone-900 tracking-tight">
                WayFinder
              </span>
            </Link>

            <nav className="flex space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/destinations" && (pathname === "/" || pathname.startsWith("/destinations/"))) ||
                  (link.href === "/regions" && pathname.startsWith("/regions/"));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "bg-stone-100 text-emerald-700 font-semibold"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/trip-planner"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-xs"
            >
              Custom Itineraries &rarr;
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
