import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function ProductBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 py-3" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-slate-900 transition-colors">
        PlainShop
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-slate-300">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={`font-semibold ${isLast ? "text-slate-900" : "text-slate-500"}`}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
