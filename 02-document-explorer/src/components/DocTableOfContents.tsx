import { TableOfContentItem } from "../types";

export default function DocTableOfContents({ items }: { items: TableOfContentItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-56 shrink-0 py-6 pl-6 border-l border-slate-200 hidden lg:block text-xs">
      <div className="sticky top-24 space-y-3">
        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
          On this page
        </h4>
        <ul className="space-y-2 text-slate-500">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-indigo-600 transition block leading-relaxed"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
