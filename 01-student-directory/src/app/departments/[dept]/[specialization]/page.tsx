import { notFound } from "next/navigation";
import Link from "next/link";
import { departments, getSpecialization } from "../../../../data/departments";
import { getStudentsBySpecialization } from "../../../../data/students";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import StudentCard from "../../../../components/StudentCard";

interface Props {
  params: Promise<{
    dept: string;
    specialization: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { dept: string; specialization: string }[] = [];
  departments.forEach((dept) => {
    dept.specializations.forEach((spec) => {
      paths.push({
        dept: dept.slug,
        specialization: spec.slug,
      });
    });
  });
  return paths;
}

export default async function NestedSpecializationPage({ params }: Props) {
  const { dept, specialization } = await params;
  const result = getSpecialization(dept, specialization);

  if (!result) {
    notFound();
  }

  const { department, specialization: spec } = result;
  const enrolledStudents = getStudentsBySpecialization(spec.slug);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name, href: "/departments" },
          { label: spec.name },
        ]}
      />

      <Link
        href="/departments"
        className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition gap-1"
      >
        <span>&larr;</span> Return to {department.name} Department
      </Link>

      {/* Specialization Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-block px-2.5 py-1 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-md mb-2">
              {department.name} &bull; Track
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{spec.name}</h1>
            <p className="mt-2 text-sm text-slate-600 max-w-3xl leading-relaxed">
              {spec.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block">Faculty Lead</span>
            <span className="font-semibold text-slate-800 text-sm mt-0.5 block">
              {spec.leadFaculty}
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block">Total Active Enrolled</span>
            <span className="font-semibold text-slate-800 text-sm mt-0.5 block">
              {spec.enrolledCount} Active Students
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-slate-400 block">Curriculum Code</span>
            <span className="font-mono font-semibold text-slate-800 text-sm mt-0.5 block">
              {spec.curriculumCode}
            </span>
          </div>
        </div>
      </div>

      {/* Students in this Specialization */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Students in this Specialization ({enrolledStudents.length})
          </h2>
          <span className="text-xs text-slate-400">Direct academic assignment</span>
        </div>

        {enrolledStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-500">
            No student records assigned to this specialization currently.
          </div>
        )}
      </div>
    </div>
  );
}
