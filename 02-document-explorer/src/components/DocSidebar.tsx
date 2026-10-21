"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docNavSections } from "../data/docs";

export default function DocSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 py-6 pr-6 border-r border-slate-200 hidden md:block">
      <div className="space-y-8 sticky top-24">
        {docNavSections.map((section) => (
          <div key={section.slug} className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const targetHref = `/docs/${item.slug.join("/")}`;
                const isActive = pathname === targetHref;

                return (
                  <li key={targetHref}>
                    <Link
                      href={targetHref}
                      className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                            isActive
                              ? "bg-indigo-200 text-indigo-800"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
