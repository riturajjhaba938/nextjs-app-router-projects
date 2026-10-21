import { Course, Topic } from "../types";

export const topics: Topic[] = [
  {
    slug: "react-nextjs",
    name: "React & Next.js Ecosystem",
    description: "Modern server component paradigms, reactive client hydration, edge rendering, and full-stack App Router mechanics.",
    icon: "⚛️",
    courseCount: 2,
  },
  {
    slug: "systems-backend",
    name: "Systems & Cloud Architecture",
    description: "Distributed consensus, caching hierarchies, database query optimization, and resilient API contracts.",
    icon: "☁️",
    courseCount: 3,
  },
  {
    slug: "frontend-architecture",
    name: "Frontend Architecture & Signals",
    description: "State machines, fine-grained reactivity, web performance budgets, and enterprise design tokens.",
    icon: "⚡",
    courseCount: 1,
  },
];

export const courses: Course[] = [
  {
    id: "nextjs-app-router-fundamentals",
    title: "Next.js App Router Fundamentals",
    topicSlug: "react-nextjs",
    topicName: "React & Next.js Ecosystem",
    description: "Master React Server Components, streaming SSR, dynamic routing conventions, route groups, and zero-bundle-size server architecture.",
    instructor: {
      name: "Prof. Alex Rivera",
      title: "Principal Web Architect",
      avatar: "AR",
    },
    level: "Intermediate",
    duration: "14h 30m &bull; 8 Modules",
    rating: 4.96,
    totalStudents: 1420,
    modules: [
      {
        id: "module-1",
        title: "Module 1: Architecture & Foundation",
        lessons: [
          {
            id: "server-vs-client-components",
            title: "01 Server vs Client Components",
            duration: "18m",
            summary: "Understand the execution environment differences, serialization boundaries, and bundle footprint.",
            content: [
              "By default, every file in the Next.js App Router is a React Server Component (RSC). RSCs execute exclusively on the server, producing a virtual DOM stream without sending any JavaScript bundle to the browser.",
              "When you need client interactivity (state, effects, browser events), declare 'use client' at the file top to create a boundary.",
            ],
          },
          {
            id: "nested-layouts-templates",
            title: "02 Nested Layouts & Templates",
            duration: "24m",
            summary: "Construct persistent shared shells and learn when to leverage re-mounting templates.",
            content: [
              "Layouts preserve component state, maintain scroll position, and do not re-render un-navigated parent segments.",
              "Templates, on the other hand, create a fresh instance on every navigation, perfect for enter/exit page transitions.",
            ],
          },
        ],
      },
      {
        id: "module-2",
        title: "Module 2: Advanced Routing Mechanics",
        lessons: [
          {
            id: "route-groups-conventions",
            title: "03 Route Groups & Conventions",
            duration: "22m",
            summary: "Structure clean directories with (marketing), (dashboard), and isolated root layouts.",
            content: [
              "Route Groups wrap directories in parentheses (group). They organize routes logically without injecting their name into the public URL.",
              "Multiple root layouts can be defined by placing separate root layouts inside different top-level route groups.",
            ],
          },
          {
            id: "dynamic-catch-all-routes",
            title: "04 Dynamic & Catch-All Routes",
            duration: "32m",
            summary: "Implement flexible dynamic paths using [id], catch-all [...slug], and optional [[...slug]] segments.",
            content: [
              "Dynamic routing empowers programmatic URL generation. When designing hierarchical portals, documentation systems, or nested category catalogs, catch-all segments [...slug] capture all succeeding path elements into an array.",
              "With Next.js 15+, page parameters are promises that must be resolved using `const { slug } = await params`.",
            ],
            codeExample: {
              title: "Catch-All Route: src/app/courses/[courseId]/lessons/[lessonId]/page.tsx",
              language: "tsx",
              code: `interface Props {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { courseId, lessonId } = await params;
  const lesson = await getLesson(courseId, lessonId);
  
  return (
    <article className="lesson-viewer">
      <h1>{lesson.title}</h1>
      <p>{lesson.summary}</p>
    </article>
  );
}`,
            },
          },
        ],
      },
    ],
  },
  {
    id: "typescript-enterprise-patterns",
    title: "TypeScript Enterprise Patterns",
    topicSlug: "systems-backend",
    topicName: "Systems & Cloud Architecture",
    description: "Deep dive into conditional types, template literal types, branded nominal typing, and high-performance AST transforms.",
    instructor: {
      name: "Dr. Priya Nair",
      title: "Senior Compiler Engineer",
      avatar: "PN",
    },
    level: "Advanced",
    duration: "10h 15m &bull; 6 Modules",
    rating: 4.91,
    totalStudents: 890,
    modules: [
      {
        id: "mod-ts-1",
        title: "Module 1: Type-Level Programming",
        lessons: [
          {
            id: "conditional-types",
            title: "01 Conditional Types & Infer",
            duration: "20m",
            summary: "Demystify pattern matching at the type level with infer keyword expressions.",
            content: ["Conditional types enable functional type-level transformations: T extends U ? X : Y."],
          },
        ],
      },
    ],
  },
  {
    id: "distributed-cache-architecture",
    title: "Distributed Cache Architecture",
    topicSlug: "systems-backend",
    topicName: "Systems & Cloud Architecture",
    description: "Design multi-tier caching architectures with Redis cluster, stale-while-revalidate invalidation, and thundering herd mitigations.",
    instructor: {
      name: "Marcus Vance",
      title: "Distributed Systems Lead",
      avatar: "MV",
    },
    level: "Advanced",
    duration: "8h 45m &bull; 5 Modules",
    rating: 4.88,
    totalStudents: 640,
    modules: [
      {
        id: "mod-cache-1",
        title: "Module 1: Cache Topologies",
        lessons: [
          {
            id: "cache-invalidation-patterns",
            title: "01 Invalidation & Consistency Models",
            duration: "25m",
            summary: "Explore write-through, write-behind, and cache-aside patterns with strong vs eventual consistency.",
            content: ["Learn how to balance low-latency reads with reliable invalidation."],
          },
        ],
      },
    ],
  },
  {
    id: "modern-state-management-signals",
    title: "Modern State Management & Signals",
    topicSlug: "frontend-architecture",
    topicName: "Frontend Architecture & Signals",
    description: "Discover fine-grained reactivity, reactive signals, derived computed state, and reactive graph optimization without unnecessary virtual DOM diffing.",
    instructor: {
      name: "Elena Morris",
      title: "Frontend Architect",
      avatar: "EM",
    },
    level: "Intermediate",
    duration: "7h 10m &bull; 4 Modules",
    rating: 4.85,
    totalStudents: 980,
    modules: [
      {
        id: "mod-sig-1",
        title: "Module 1: Reactive Foundations",
        lessons: [
          {
            id: "signals-vs-react-state",
            title: "01 Signals vs Virtual DOM Diffing",
            duration: "19m",
            summary: "Compare mechanical performance characteristics of reactive signals versus tree reconciliation.",
            content: ["Signals track direct dependencies at the leaf node, enabling surgical DOM updates."],
          },
        ],
      },
    ],
  },
];

export function getCourseById(courseId: string): Course | undefined {
  return courses.find((c) => c.id.toLowerCase() === courseId.toLowerCase());
}

export function getLesson(courseId: string, lessonId: string) {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id.toLowerCase() === lessonId.toLowerCase());
    if (lesson) {
      return { course, module, lesson };
    }
  }
  return undefined;
}
