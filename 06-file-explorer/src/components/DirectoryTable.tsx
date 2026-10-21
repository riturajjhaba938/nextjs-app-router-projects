import Link from "next/link";
import { FileEntry } from "../types";

export default function DirectoryTable({ entries }: { entries: FileEntry[] }) {
  if (entries.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
        <div className="text-4xl mb-3">📂</div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">This folder is empty</h3>
        <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto">
          There are no files or subdirectories stored in this directory path.
        </p>
        <Link
          href="/files"
          className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          Return to Root Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
        <thead className="bg-slate-50 text-slate-600 font-semibold">
          <tr>
            <th className="py-3.5 px-6">Name</th>
            <th className="py-3.5 px-4">Type</th>
            <th className="py-3.5 px-4">Size</th>
            <th className="py-3.5 px-4">Last Modified</th>
            <th className="py-3.5 px-6 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {entries.map((entry) => {
            const isFolder = entry.type === "folder";
            const targetHref = `/files/${entry.path.join("/")}`;

            return (
              <tr key={entry.path.join("/")} className="hover:bg-slate-50/70 transition">
                <td className="py-3.5 px-6 font-medium text-slate-900 flex items-center gap-3">
                  <span className="text-base">{isFolder ? "📁" : "📄"}</span>
                  <Link href={targetHref} className="hover:text-sky-600 transition font-semibold">
                    {entry.name}
                  </Link>
                </td>
                <td className="py-3.5 px-4 text-slate-500 capitalize">{entry.type}</td>
                <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{entry.size}</td>
                <td className="py-3.5 px-4 text-slate-500">{entry.modified}</td>
                <td className="py-3.5 px-6 text-right">
                  <Link
                    href={targetHref}
                    className="font-semibold text-sky-600 hover:text-sky-800 transition"
                  >
                    {isFolder ? "Open Folder &rarr;" : "View Code &rarr;"}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
