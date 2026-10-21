export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse space-y-8">
      <div className="h-10 bg-slate-200 rounded-xl w-1/3"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="h-6 bg-slate-200 rounded w-1/4"></div>
            <div className="h-8 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            <div className="h-10 bg-slate-200 rounded-xl mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
