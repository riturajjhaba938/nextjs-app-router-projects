export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 rounded-md w-1/4"></div>
      <div className="h-4 bg-slate-200 rounded-md w-1/3"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 h-48 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-200"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
              </div>
            </div>
            <div className="h-3 bg-slate-200 rounded-md w-full"></div>
            <div className="h-3 bg-slate-200 rounded-md w-2/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
