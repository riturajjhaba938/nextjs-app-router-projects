"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { driveStats } from "../data/files";

export default function FileNavbar() {
  const pathname = usePathname();
  const percentage = Math.round((driveStats.usedGB / driveStats.totalGB) * 100);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/files" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-sky-700 transition">
                📁
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                CloudDrive
              </span>
            </Link>

            <nav className="flex space-x-1">
              <Link
                href="/files"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/" || pathname === "/files" || pathname.startsWith("/files/")
                    ? "bg-slate-100 text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Explorer
              </Link>
              <Link
                href="/preferences"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  pathname === "/preferences"
                    ? "bg-slate-100 text-sky-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Preferences
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
              <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sky-600 h-full rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="text-slate-600 font-medium">
                {driveStats.usedGB} GB of {driveStats.totalGB} GB ({percentage}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
