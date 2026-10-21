import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function TravelBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-stone-500 mb-6">
      <Link href="/destinations" className="hover:text-stone-900 transition font-medium">
        WayFinder
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center space-x-2">
            <span className="text-stone-300">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-stone-900 transition font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-900 font-semibold">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
