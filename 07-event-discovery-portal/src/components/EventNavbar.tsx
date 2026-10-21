"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EventNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/events" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-rose-700 transition">
                ⚡
              </div>
              <span className="font-bold text-lg text-zinc-900 tracking-tight">
                PulseEvents
              </span>
            </Link>

            <nav className="flex space-x-1">
              <Link
                href="/events"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/" || pathname === "/events" || pathname.startsWith("/events/city/")
                    ? "bg-zinc-100 text-rose-700 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                Discover Events
              </Link>
              <Link
                href="/events/my-tickets"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/events/my-tickets"
                    ? "bg-zinc-100 text-rose-700 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                My Tickets
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/events/my-tickets"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition shadow-xs"
            >
              🎟️ View Passes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
