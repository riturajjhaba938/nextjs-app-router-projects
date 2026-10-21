import { students } from "../data/students";
import { departments } from "../data/departments";
import StudentDirectoryList from "../components/StudentDirectoryList";

export default function HomePage() {
  const deptOptions = departments.map((d) => ({ slug: d.slug, name: d.name }));

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Students</h1>
        <p className="mt-1 text-sm text-slate-500">
          Browse all registered campus students, filter by academic department, and inspect individual academic profiles.
        </p>
      </div>

      <StudentDirectoryList initialStudents={students} departments={deptOptions} />
    </div>
  );
}
