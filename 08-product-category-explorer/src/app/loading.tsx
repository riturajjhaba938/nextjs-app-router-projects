export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse py-4">
      <div className="h-44 bg-slate-200 rounded-3xl w-full"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="h-44 bg-slate-200 rounded-xl w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="h-6 bg-slate-200 rounded w-3/4"></div>
            <div className="h-8 bg-slate-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
