import Breadcrumbs from "../../components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">About Campus Directory</h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The Campus Directory is a high-performance Next.js App Router portal designed for university administrators, faculty, and students to browse academic profiles, department faculties, and specialization tracks.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-4 text-sm text-slate-700">
          <h2 className="text-base font-bold text-slate-900">Next.js App Router Architecture</h2>
          <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
            <li>
              <strong>Static Routes:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded">/</code>, <code className="bg-slate-100 px-1 py-0.5 rounded">/students</code>, <code className="bg-slate-100 px-1 py-0.5 rounded">/departments</code>, <code className="bg-slate-100 px-1 py-0.5 rounded">/about</code>
            </li>
            <li>
              <strong>Dynamic Route ([id]):</strong> <code className="bg-slate-100 px-1 py-0.5 rounded">/students/[id]</code> with static params generation via <code className="bg-slate-100 px-1 py-0.5 rounded">generateStaticParams()</code>.
            </li>
            <li>
              <strong>Nested Dynamic Route ([dept]/[specialization]):</strong> <code className="bg-slate-100 px-1 py-0.5 rounded">/departments/[dept]/[specialization]</code> mapping directly to faculty tracks and enrolled students.
            </li>
            <li>
              <strong>Not-Found Fallback:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded">not-found.tsx</code> triggered programmatically via <code className="bg-slate-100 px-1 py-0.5 rounded">notFound()</code> for non-existent students or departments.
            </li>
            <li>
              <strong>Loading &amp; Error Boundaries:</strong> <code className="bg-slate-100 px-1 py-0.5 rounded">loading.tsx</code> skeletons and <code className="bg-slate-100 px-1 py-0.5 rounded">error.tsx</code> reset wrappers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
