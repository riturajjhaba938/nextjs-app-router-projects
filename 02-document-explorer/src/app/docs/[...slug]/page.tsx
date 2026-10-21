import { notFound } from "next/navigation";
import Link from "next/link";
import { docArticles, getDocArticle } from "../../../data/docs";
import DocSidebar from "../../../components/DocSidebar";
import DocTableOfContents from "../../../components/DocTableOfContents";
import DocBreadcrumbs from "../../../components/DocBreadcrumbs";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return docArticles.map((art) => ({
    slug: art.slug,
  }));
}

export default async function DocArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getDocArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex gap-8 min-h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <DocSidebar />

      {/* Main Content Pane */}
      <main className="flex-1 py-8 max-w-3xl overflow-hidden">
        <DocBreadcrumbs
          items={[
            { label: article.section, href: "/docs" },
            { label: article.title },
          ]}
        />

        <div className="border-b border-slate-200 pb-6 mb-6">
          <span className="inline-block px-2.5 py-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md mb-2">
            {article.section}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">
            {article.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">{article.summary}</p>
        </div>

        {/* Overview Box */}
        <section id="overview" className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
            Overview
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">{article.overview}</p>
        </section>

        {/* Article Body Paragraphs */}
        <div className="space-y-4 mb-8 text-sm text-slate-700 leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Code Snippets */}
        {article.codeSnippets && article.codeSnippets.length > 0 && (
          <div className="space-y-6 mb-10">
            {article.codeSnippets.map((snippet, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900 text-slate-100 overflow-hidden shadow-xs"
              >
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-400 font-mono">
                  <span>{snippet.title}</span>
                  <span className="uppercase text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                    {snippet.language}
                  </span>
                </div>
                <pre className="m-0 p-4 bg-transparent">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        )}

        {/* Next / Previous Guide Navigation */}
        <div className="border-t border-slate-200 pt-6 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {article.previous ? (
            <Link
              href={`/docs/${article.previous.slug.join("/")}`}
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition group block"
            >
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                &larr; Previous Guide
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition">
                {article.previous.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {article.next && (
            <Link
              href={`/docs/${article.next.slug.join("/")}`}
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition group block sm:text-right"
            >
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                Next Guide &rarr;
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition">
                {article.next.title}
              </span>
            </Link>
          )}
        </div>
      </main>

      {/* Right Table of Contents */}
      <DocTableOfContents items={article.tableOfContents} />
    </div>
  );
}
