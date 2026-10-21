"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Students", href: "/students" },
    { label: "Departments", href: "/departments" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:bg-blue-700 transition">
                CD
              </div>
              <span className="font-semibold text-lg text-slate-900 tracking-tight">
                Campus Directory
              </span>
            </Link>

            <nav className="flex space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/students" && (pathname === "/" || pathname.startsWith("/students/"))) ||
                  (item.href === "/departments" && pathname.startsWith("/departments"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-100 text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              2026-2027 Academic Year
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
