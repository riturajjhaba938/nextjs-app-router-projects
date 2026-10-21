import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseById } from "../../../data/courses";
import CourseBreadcrumbs from "../../../components/CourseBreadcrumbs";

interface Props {
  params: Promise<{ courseId: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ courseId: c.id }));
}

export default async function CourseDetailPage({ params }: Props) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  const firstLesson = course.modules[0]?.lessons[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <CourseBreadcrumbs
        items={[
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      {/* Course Hero Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Link
                href={`/topics/${course.topicSlug}`}
                className="text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-100 uppercase tracking-wider hover:bg-violet-100 transition"
              >
                {course.topicName}
              </Link>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {course.title}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              {course.description}
            </p>
          </div>

          <div className="shrink-0 text-right md:w-48 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center justify-center gap-1 font-bold text-lg text-amber-600 mb-1">
              <span>★</span>
              <span>{course.rating.toFixed(2)}</span>
            </div>
            <span className="text-xs text-slate-500 block">
              {course.totalStudents.toLocaleString()} Enrolled Engineers
            </span>
            {firstLesson && (
              <Link
                href={`/courses/${course.id}/lessons/${firstLesson.id}`}
                className="mt-4 w-full block text-center px-4 py-2.5 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-700 transition shadow-xs"
              >
                Start Learning &rarr;
              </Link>
            )}
          </div>
        </div>

        {/* Instructor & Meta */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
              {course.instructor.avatar}
            </div>
            <div>
              <span className="font-semibold text-slate-900 block">{course.instructor.name}</span>
              <span>{course.instructor.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span><strong>Duration:</strong> {course.duration}</span>
            <span><strong>Modules:</strong> {course.modules.length}</span>
          </div>
        </div>
      </div>

      {/* Course Curriculum Modules */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>

        {course.modules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900">{mod.title}</h3>
              <span className="text-xs text-slate-500">{mod.lessons.length} Lessons</span>
            </div>

            <div className="divide-y divide-slate-100">
              {mod.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="px-6 py-4 flex items-center justify-between hover:bg-slate-50/70 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400">
                      ▶
                    </span>
                    <div>
                      <Link
                        href={`/courses/${course.id}/lessons/${lesson.id}`}
                        className="text-xs font-semibold text-slate-800 hover:text-violet-600 transition"
                      >
                        {lesson.title}
                      </Link>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{lesson.summary}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">{lesson.duration}</span>
                    <Link
                      href={`/courses/${course.id}/lessons/${lesson.id}`}
                      className="text-xs font-bold text-violet-600 hover:underline"
                    >
                      Open &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
