import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getLesson } from "../../../../../data/courses";
import CourseBreadcrumbs from "../../../../../components/CourseBreadcrumbs";

interface Props {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export async function generateStaticParams() {
  const paths: { courseId: string; lessonId: string }[] = [];
  courses.forEach((c) => {
    c.modules.forEach((mod) => {
      mod.lessons.forEach((les) => {
        paths.push({
          courseId: c.id,
          lessonId: les.id,
        });
      });
    });
  });
  return paths;
}

export default async function LessonViewerPage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const result = getLesson(courseId, lessonId);

  if (!result) {
    notFound();
  }

  const { course, module, lesson } = result;

  // Flatten lessons to find previous and next
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="space-y-6">
      <CourseBreadcrumbs
        items={[
          { label: "Courses", href: "/courses" },
          { label: course.title, href: `/courses/${course.id}` },
          { label: lesson.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Curriculum Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <span className="text-[11px] font-bold text-violet-700 uppercase tracking-wider block mb-1">
              Course Outline
            </span>
            <Link
              href={`/courses/${course.id}`}
              className="font-bold text-sm text-slate-900 hover:text-violet-600 transition block"
            >
              {course.title}
            </Link>
          </div>

          <div className="space-y-6">
            {course.modules.map((mod) => (
              <div key={mod.id} className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {mod.title}
                </h4>
                <ul className="space-y-1">
                  {mod.lessons.map((les) => {
                    const isCurrent = les.id === lesson.id;
                    return (
                      <li key={les.id}>
                        <Link
                          href={`/courses/${course.id}/lessons/${les.id}`}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition ${
                            isCurrent
                              ? "bg-violet-600 text-white font-semibold shadow-xs"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span className="truncate pr-2">{les.title}</span>
                          <span
                            className={`text-[10px] shrink-0 ${
                              isCurrent ? "text-violet-200" : "text-slate-400"
                            }`}
                          >
                            {les.duration}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Center Lesson Viewer */}
        <main className="flex-1 w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                {module.title}
              </span>
              <span className="text-xs text-slate-400">&bull; {lesson.duration} estimated duration</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {lesson.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{lesson.summary}</p>
          </div>

          {/* Lesson Content */}
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            {lesson.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Interactive Code Example */}
          {lesson.codeExample && (
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 overflow-hidden shadow-xs">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700 text-xs text-slate-400 font-mono">
                <span>{lesson.codeExample.title}</span>
                <span className="uppercase text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                  {lesson.codeExample.language}
                </span>
              </div>
              <pre className="m-0 p-5 bg-transparent">
                <code>{lesson.codeExample.code}</code>
              </pre>
            </div>
          )}

          {/* Bottom Next / Prev Controls */}
          <div className="border-t border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevLesson ? (
              <Link
                href={`/courses/${course.id}/lessons/${prevLesson.id}`}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                &larr; {prevLesson.title}
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                href={`/courses/${course.id}/lessons/${nextLesson.id}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition shadow-xs text-center"
              >
                Next: {nextLesson.title} &rarr;
              </Link>
            ) : (
              <Link
                href={`/courses/${course.id}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition text-center"
              >
                Complete Course &rarr;
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
