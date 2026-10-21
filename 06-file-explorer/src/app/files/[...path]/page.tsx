import { notFound } from "next/navigation";
import Link from "next/link";
import { fileSystem, getEntriesInDirectory, getFileByPath } from "../../../data/files";
import DirectoryTable from "../../../components/DirectoryTable";
import FileBreadcrumbs from "../../../components/FileBreadcrumbs";

interface Props {
  params: Promise<{
    path: string[];
  }>;
}

export async function generateStaticParams() {
  return fileSystem.map((entry) => ({ path: entry.path }));
}

export default async function PathExplorerPage({ params }: Props) {
  const { path } = await params;

  // 1. Check if this path points to a file
  const file = getFileByPath(path);
  if (file && file.type === "file") {
    const parentFolder = path.slice(0, path.length - 1);
    const parentHref = parentFolder.length > 0 ? `/files/${parentFolder.join("/")}` : "/files";

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <FileBreadcrumbs path={path} />

        <Link
          href={parentHref}
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-sky-600 transition gap-1"
        >
          <span>&larr;</span> Back to directory
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Header Info */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📄</span>
              <div>
                <h1 className="text-xl font-bold text-slate-900 font-mono">{file.name}</h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Path: /{file.path.join("/")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[10px]">File Size</span>
                <span className="font-bold text-slate-800">{file.size}</span>
              </div>
              <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[10px]">Modified</span>
                <span className="font-bold text-slate-800">{file.modified}</span>
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="bg-slate-900 text-slate-100 p-6">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <span>Editor Preview ({file.extension?.toUpperCase() || "TEXT"})</span>
              <span className="text-emerald-400">● Read-Only</span>
            </div>

            <pre className="p-0 bg-transparent overflow-x-auto text-xs leading-relaxed">
              <code>{file.content || "// Empty file buffer"}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  // 2. Check if this path points to a folder
  const folderExists = fileSystem.some(
    (e) => e.type === "folder" && e.path.join("/").toLowerCase() === path.join("/").toLowerCase()
  );

  if (!folderExists) {
    notFound();
  }

  const entries = getEntriesInDirectory(path);
  const currentFolderName = path[path.length - 1];

  return (
    <div className="space-y-6">
      <FileBreadcrumbs path={path} />

      <div className="border-b border-slate-200 pb-5">
        <div className="inline-block px-2.5 py-1 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-100 rounded-md mb-2">
          Directory Path: /{path.join("/")}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 capitalize">
          {currentFolderName}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Folder contents and nested subdirectories.
        </p>
      </div>

      <DirectoryTable entries={entries} />
    </div>
  );
}
