import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function DocBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
      <Link href="/docs" className="hover:text-slate-900 transition font-medium">
        CoreDocs
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center space-x-2">
            <span className="text-slate-300">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-900 transition font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-semibold">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
