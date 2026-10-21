import { courses, topics } from "../data/courses";
import CourseDirectoryList from "../components/CourseDirectoryList";

export default function CoursesHomePage() {
  const topicOptions = topics.map((t) => ({ slug: t.slug, name: t.name }));

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Explore courses
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Master production web development, distributed architecture, and systems engineering with modular, self-paced lessons.
        </p>
      </div>

      <CourseDirectoryList initialCourses={courses} topics={topicOptions} />
    </div>
  );
}
