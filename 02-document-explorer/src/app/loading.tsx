export default function Loading() {
  return (
    <div className="flex gap-8 py-8 animate-pulse">
      <div className="w-64 space-y-4 hidden md:block">
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        <div className="h-3 bg-slate-200 rounded w-3/4"></div>
        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="h-8 bg-slate-200 rounded w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-48 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
}
