import { getEntriesInDirectory } from "../data/files";
import DirectoryTable from "../components/DirectoryTable";
import FileBreadcrumbs from "../components/FileBreadcrumbs";

export default function RootFilesPage() {
  const rootEntries = getEntriesInDirectory([]);

  return (
    <div className="space-y-6">
      <FileBreadcrumbs path={[]} />

      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          My Files
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Traverse directories, inspect code files, and manage your cloud development workspace.
        </p>
      </div>

      <DirectoryTable entries={rootEntries} />
    </div>
  );
}
