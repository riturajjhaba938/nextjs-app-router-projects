import { notFound } from "next/navigation";
import Link from "next/link";
import { topics, courses } from "../../../data/courses";
import CourseBreadcrumbs from "../../../components/CourseBreadcrumbs";
import CourseCard from "../../../components/CourseCard";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export default async function TopicExplorerPage({ params }: Props) {
  const { topic } = await params;
  const currentTopic = topics.find((t) => t.slug.toLowerCase() === topic.toLowerCase());

  if (!currentTopic) {
    notFound();
  }

  const topicCourses = courses.filter((c) => c.topicSlug === currentTopic.slug);

  return (
    <div className="space-y-6">
      <CourseBreadcrumbs
        items={[
          { label: "Topics" },
          { label: currentTopic.name },
        ]}
      />

      <Link
        href="/courses"
        className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-violet-600 transition gap-1"
      >
        <span>&larr;</span> Back to all courses
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
        <div className="text-3xl mb-2">{currentTopic.icon}</div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {currentTopic.name}
        </h1>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
          {currentTopic.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Courses in this Topic ({topicCourses.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
