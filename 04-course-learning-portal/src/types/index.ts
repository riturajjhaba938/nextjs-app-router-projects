export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  codeExample?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  topicSlug: string;
  topicName: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
  };
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  totalStudents: number;
  modules: CourseModule[];
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}
