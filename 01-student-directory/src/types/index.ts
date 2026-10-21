export interface EnrolledCourse {
  code: string;
  title: string;
  credits: number;
  instructor: string;
  grade?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  departmentSlug: string;
  specialization: string;
  specializationSlug: string;
  year: string;
  gpa: number;
  bio: string;
  avatar: string;
  status: "Active" | "Alumni" | "On Leave";
  startTerm: string;
  advisor: string;
  officeLocation: string;
  enrolledCourses: EnrolledCourse[];
}

export interface Specialization {
  slug: string;
  name: string;
  description: string;
  leadFaculty: string;
  enrolledCount: number;
  curriculumCode: string;
}

export interface Department {
  slug: string;
  name: string;
  description: string;
  enrolledCount: number;
  facultyCount: number;
  headOfDepartment: string;
  specializations: Specialization[];
}
