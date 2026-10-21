import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 rounded-full mb-4">
          404 &bull; NOT FOUND
        </span>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          File or folder not found
        </h2>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          The requested filesystem path or file entry does not exist in this CloudDrive storage container. It may have been renamed or relocated.
        </p>

        <Link
          href="/files"
          className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          Return to Root Directory
        </Link>
      </div>
    </div>
  );
}
