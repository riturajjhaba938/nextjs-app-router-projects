export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-stone-200 rounded w-1/4"></div>
      <div className="h-4 bg-stone-200 rounded w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 h-56 space-y-4">
            <div className="h-4 bg-stone-200 rounded w-1/3"></div>
            <div className="h-6 bg-stone-200 rounded w-3/4"></div>
            <div className="h-3 bg-stone-200 rounded w-full"></div>
            <div className="h-3 bg-stone-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
