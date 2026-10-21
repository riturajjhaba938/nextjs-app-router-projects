import Link from "next/link";

export default function FileBreadcrumbs({ path }: { path: string[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto py-1">
      <Link href="/files" className="hover:text-slate-900 transition font-medium flex items-center gap-1">
        <span>🏠</span>
        <span>My Files</span>
      </Link>

      {path.map((segment, index) => {
        const isLast = index === path.length - 1;
        const currentHref = `/files/${path.slice(0, index + 1).join("/")}`;

        return (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-slate-300">/</span>
            {isLast ? (
              <span className="text-slate-900 font-bold">{segment}</span>
            ) : (
              <Link href={currentHref} className="hover:text-slate-900 transition font-medium">
                {segment}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
