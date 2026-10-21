import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-600 uppercase bg-rose-50 border border-rose-100 rounded-full mb-4">
          404 &bull; ROUTE NOT FOUND
        </span>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Lesson or course not found
        </h2>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          The requested learning curriculum resource or lesson could not be located. It may have been moved or the course and lesson route identifiers might be invalid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/courses"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition"
          >
            Browse All Courses
          </Link>
          <Link
            href="/courses/nextjs-app-router-fundamentals"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
          >
            Featured Course
          </Link>
        </div>
      </div>
    </div>
  );
}
