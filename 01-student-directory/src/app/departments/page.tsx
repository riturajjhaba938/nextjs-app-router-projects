import Link from "next/link";
import { departments } from "../../data/departments";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function DepartmentsPage() {
  const totalEnrolled = departments.reduce((acc, curr) => acc + curr.enrolledCount, 0);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Departments" }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Departments</h1>
          <p className="mt-1 text-sm text-slate-500">
            Academic faculties, degree programs, research clusters, and enrolled students.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
          <span>&bull; {departments.length} Active Academic Faculties</span>
          <span>&bull; {totalEnrolled} Enrolled Students</span>
        </div>
      </div>

      <div className="space-y-6">
        {departments.map((dept) => (
          <div
            key={dept.slug}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{dept.name}</h2>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">{dept.description}</p>
              </div>
              <div className="flex items-center gap-4 text-xs shrink-0">
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-400 block">Chair</span>
                  <span className="font-semibold text-slate-800">{dept.headOfDepartment}</span>
                </div>
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">
                  <span className="text-slate-400 block">Faculty Members</span>
                  <span className="font-semibold text-slate-800">{dept.facultyCount} Professors</span>
                </div>
                <div className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 text-center">
                  <span className="text-blue-500 block">Enrolled</span>
                  <span className="font-semibold text-blue-700">{dept.enrolledCount} Students</span>
                </div>
              </div>
            </div>

            {/* Specialization Clusters */}
            <div className="pt-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Academic Specializations &amp; Tracks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {dept.specializations.map((spec) => (
                  <Link
                    key={spec.slug}
                    href={`/departments/${dept.slug}/${spec.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 hover:shadow-xs transition group block"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-slate-900 group-hover:text-blue-600 transition">
                        {spec.name}
                      </span>
                      <span className="text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform">
                        &rarr;
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{spec.description}</p>
                    <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>{spec.leadFaculty}</span>
                      <span className="font-medium text-slate-600">{spec.enrolledCount} active</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
