"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LearnNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/courses" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-violet-700 transition">
                LS
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                LearnSpace
              </span>
            </Link>

            <nav className="flex space-x-1">
              <Link
                href="/courses"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/" || pathname === "/courses" || pathname.startsWith("/courses/")
                    ? "bg-slate-100 text-violet-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Courses
              </Link>
              <Link
                href="/topics/react-nextjs"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname.startsWith("/topics/")
                    ? "bg-slate-100 text-violet-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Topics
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
              Self-Paced Curriculum
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
