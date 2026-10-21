"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Directory error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-rose-200 shadow-sm">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-full mb-4">
          Application Error
        </span>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
        <p className="text-sm text-slate-600 mb-6">
          {error.message || "An unexpected error occurred while loading this directory view."}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
