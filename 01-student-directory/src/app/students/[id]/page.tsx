import { notFound } from "next/navigation";
import Link from "next/link";
import { getStudentById, students } from "../../../data/students";
import Breadcrumbs from "../../../components/Breadcrumbs";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return students.map((s) => ({ id: s.id }));
}

export default async function StudentProfilePage({ params }: Props) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumbs
        items={[
          { label: "Students", href: "/students" },
          { label: student.name },
        ]}
      />

      <Link
        href="/students"
        className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition gap-1 mb-2"
      >
        <span>&larr;</span> Back to students directory
      </Link>

      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-linear-to-r from-blue-600 to-indigo-700 px-8 flex items-end">
          <div className="transform translate-y-1/2 flex items-end gap-5">
            <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-md">
              <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold tracking-wider">
                {student.avatar}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 pb-8 px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {student.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">{student.email}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-400">Cumulative GPA</div>
                <div className="text-2xl font-bold text-slate-900">{student.gpa.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block">Department</span>
              <Link
                href={`/departments/${student.departmentSlug}/${student.specializationSlug}`}
                className="font-semibold text-blue-600 hover:underline"
              >
                {student.department}
              </Link>
            </div>
            <div>
              <span className="text-slate-400 block">Academic Track</span>
              <span className="font-semibold text-slate-800">{student.specialization}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Standing</span>
              <span className="font-semibold text-slate-800">{student.year}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Enrolled Since</span>
              <span className="font-semibold text-slate-800">{student.startTerm}</span>
            </div>
          </div>

          {/* About / Bio */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Student Biography
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl">
              {student.bio}
            </p>
          </div>

          {/* Academic Advising & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-400 block">Faculty Advisor</span>
              <span className="text-sm font-semibold text-slate-800 mt-1 block">
                {student.advisor}
              </span>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <span className="text-xs text-slate-400 block">Campus Workspace</span>
              <span className="text-sm font-semibold text-slate-800 mt-1 block">
                {student.officeLocation}
              </span>
            </div>
          </div>

          {/* Enrolled Courses Table */}
          <div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Enrolled Curriculum &amp; Courses
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold">
                  <tr>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">Course Title</th>
                    <th className="py-3 px-4">Credits</th>
                    <th className="py-3 px-4">Instructor</th>
                    <th className="py-3 px-4 text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {student.enrolledCourses.map((course) => (
                    <tr key={course.code} className="hover:bg-slate-50/60 transition">
                      <td className="py-3 px-4 font-mono font-semibold text-blue-600">
                        {course.code}
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">{course.title}</td>
                      <td className="py-3 px-4 text-slate-500">{course.credits} Cr</td>
                      <td className="py-3 px-4 text-slate-600">{course.instructor}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                          {course.grade || "In Progress"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
