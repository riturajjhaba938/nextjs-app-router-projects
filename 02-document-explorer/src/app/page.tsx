import Link from "next/link";
import DocSidebar from "../components/DocSidebar";

export default function DocsHomePage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Installation, project setup, environment configuration, and quick start guides.",
      href: "/docs/getting-started/installation",
      icon: "🚀",
      topics: ["Installation & Requirements", "Quickstart Guide", "Project Directory Setup"],
    },
    {
      title: "Core Routing Concepts",
      description: "Deep architectural patterns, dynamic segments, catch-all routes, and route groups.",
      href: "/docs/routing/catch-all-routes",
      icon: "🧭",
      topics: ["Dynamic Routes ([id])", "Catch-all Routes ([...slug])", "Route Groups ((group))", "Parallel Routes"],
    },
    {
      title: "Rendering Strategies",
      description: "React Server Components, client boundaries, and static site generation.",
      href: "/docs/rendering/server-components",
      icon: "⚡",
      topics: ["React Server Components", "Static Generation (generateStaticParams)"],
    },
    {
      title: "Configuration & Typing",
      description: "next.config.ts options, TypeScript integration, and Turbopack root boundaries.",
      href: "/docs/configuration/next-config",
      icon: "⚙️",
      topics: ["next.config.ts Settings", "TypeScript Integration"],
    },
  ];

  return (
    <div className="flex gap-8 min-h-[calc(100vh-4rem)]">
      <DocSidebar />

      <main className="flex-1 py-8 max-w-4xl">
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="inline-block px-2.5 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md mb-3">
            Core Documentation Portal
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Documentation
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            Welcome to our doc library. Browse core architecture, framework guides, and component APIs reference with full nested hierarchy and responsive code examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec) => (
            <div
              key={sec.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl mb-3">{sec.icon}</div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">{sec.title}</h2>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{sec.description}</p>

                <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Featured Guides
                  </span>
                  {sec.topics.map((t) => (
                    <div key={t} className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={sec.href}
                className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-800 gap-1 group"
              >
                Browse section
                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
