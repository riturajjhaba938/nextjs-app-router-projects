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
    console.error("Recipe explorer error:", error);
  }, [error]);

  return (
    <div className="py-16 text-center max-w-md mx-auto">
      <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200">
        <h2 className="text-xl font-bold text-amber-900 mb-2">Error Loading Recipes</h2>
        <p className="text-sm text-amber-700 mb-6">
          {error.message || "An unexpected error occurred while preparing recipe data."}
        </p>
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
