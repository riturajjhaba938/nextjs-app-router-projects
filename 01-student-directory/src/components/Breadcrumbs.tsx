import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-500 mb-6">
      <Link href="/students" className="hover:text-slate-900 transition font-medium">
        Campus Directory
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-slate-300">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-900 transition font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
