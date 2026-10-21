import Link from "next/link";
import { Student } from "../types";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
              {student.avatar}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 hover:text-blue-600 transition">
                <Link href={`/students/${student.id}`}>{student.name}</Link>
              </h3>
              <p className="text-xs text-slate-500">{student.year}</p>
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            GPA {student.gpa.toFixed(2)}
          </span>
        </div>

        <div className="space-y-2 mb-4 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-slate-400">Department:</span>
            <Link
              href={`/departments/${student.departmentSlug}/${student.specializationSlug}`}
              className="font-medium text-slate-800 hover:text-blue-600 hover:underline transition"
            >
              {student.department}
            </Link>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-slate-400">Track:</span>
            <span className="font-medium text-slate-700 truncate max-w-[170px]">
              {student.specialization}
            </span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-slate-400">Advisor:</span>
            <span className="text-slate-600 truncate max-w-[170px]">{student.advisor}</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">ID: {student.id}</span>
        <Link
          href={`/students/${student.id}`}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 group"
        >
          View profile
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
