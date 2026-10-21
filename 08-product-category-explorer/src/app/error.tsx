"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Store error:", error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center text-3xl">
        ⚠️
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Unable to Load Catalog</h2>
      <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
        An unexpected error occurred while querying the product catalog or filtering options.
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-all shadow-sm"
        >
          Retry Query
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
