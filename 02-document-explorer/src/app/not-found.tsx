import Link from "next/link";

export default function NotFound() {
  const suggestedArticles = [
    {
      title: "Quickstart & Installation",
      href: "/docs/getting-started/installation",
      desc: "Get started with the project workspace, required Node.js version, and initial CLI flags.",
    },
    {
      title: "Working with Catch-All Routes",
      href: "/docs/routing/catch-all-routes",
      desc: "Extend dynamic segments using [...slug] and handle optional nested URL parameters.",
    },
    {
      title: "Configuration Reference",
      href: "/docs/configuration/next-config",
      desc: "Customize runtime options, compiler flags, and monorepo workspace boundaries.",
    },
  ];

  return (
    <div className="py-16 max-w-2xl mx-auto text-center">
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 rounded-full mb-4">
        404 &bull; ROUTE NOT FOUND
      </span>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Page not found</h1>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto">
        The documentation page you requested could not be located. The code link or navigation key identifier might be invalid.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left mb-8">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
          Suggested Articles
        </h2>
        <div className="space-y-3">
          {suggestedArticles.map((art) => (
            <Link
              key={art.href}
              href={art.href}
              className="block p-3.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition">
                  {art.title}
                </span>
                <span className="text-xs text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  &rarr;
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{art.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <Link
        href="/docs"
        className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Back to Documentation Home
      </Link>
    </div>
  );
}
