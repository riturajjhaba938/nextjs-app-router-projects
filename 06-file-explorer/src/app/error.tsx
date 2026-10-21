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
    console.error("File explorer error:", error);
  }, [error]);

  return (
    <div className="py-16 text-center max-w-md mx-auto">
      <div className="p-8 rounded-2xl bg-rose-50 border border-rose-200">
        <h2 className="text-xl font-bold text-rose-900 mb-2">Drive Read Error</h2>
        <p className="text-sm text-rose-700 mb-6">
          {error.message || "An unexpected error occurred while traversing this filesystem directory."}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
