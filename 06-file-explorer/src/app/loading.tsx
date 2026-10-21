export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 rounded w-1/4"></div>
      <div className="h-4 bg-slate-200 rounded w-1/3"></div>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div className="h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="h-4 bg-slate-200 rounded w-1/6"></div>
            <div className="h-4 bg-slate-200 rounded w-1/6"></div>
            <div className="h-4 bg-slate-200 rounded w-1/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
