import Link from "next/link";
import { Course } from "../types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-violet-300 hover:shadow-md transition flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            href={`/topics/${course.topicSlug}`}
            className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-100 uppercase tracking-wider hover:bg-violet-100 transition"
          >
            {course.topicName}
          </Link>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
            {course.level}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-violet-700 transition">
          <Link href={`/courses/${course.id}`}>{course.title}</Link>
        </h3>

        <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="border-t border-slate-100 pt-3 text-xs flex items-center justify-between text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center">
              {course.instructor.avatar}
            </div>
            <span>{course.instructor.name}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-amber-600">
            <span>★</span>
            <span>{course.rating.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500">{course.duration}</span>
        <Link
          href={`/courses/${course.id}`}
          className="font-semibold text-violet-700 hover:text-violet-900 inline-flex items-center gap-1 group"
        >
          View Curriculum
          <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
