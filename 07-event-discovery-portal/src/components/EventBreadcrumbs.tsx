import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function EventBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-zinc-500 mb-6">
      <Link href="/events" className="hover:text-zinc-900 transition font-medium">
        PulseEvents
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center space-x-2">
            <span className="text-zinc-300">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-zinc-900 transition font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-900 font-semibold">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
