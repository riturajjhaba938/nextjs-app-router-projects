import { Department } from "../types";

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description: "Core software engineering, artificial intelligence, algorithms, distributed systems, and web architectures.",
    enrolledCount: 320,
    facultyCount: 24,
    headOfDepartment: "Prof. Ronald Rivest",
    specializations: [
      {
        slug: "web-development",
        name: "Web Development",
        description: "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web services.",
        leadFaculty: "Prof. Elena Vance",
        enrolledCount: 84,
        curriculumCode: "CS-WD-2026",
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence & ML",
        description: "Foundational deep learning, transformer architectures, reinforcement learning, and autonomous agent orchestration.",
        leadFaculty: "Dr. Geoffrey Hinton Chair",
        enrolledCount: 142,
        curriculumCode: "CS-AIML-401",
      },
      {
        slug: "distributed-systems",
        name: "Distributed Systems & Cloud",
        description: "Large scale consensus protocols, high-concurrency microservices, edge computing, and resilient cloud storage.",
        leadFaculty: "Dr. Leslie Lamport Chair",
        enrolledCount: 94,
        curriculumCode: "CS-DS-502",
      },
    ],
  },
  {
    slug: "design",
    name: "Design & Innovation",
    description: "Human-experience research, visual communication, interaction design, spatial computing, and product prototyping.",
    enrolledCount: 185,
    facultyCount: 16,
    headOfDepartment: "Prof. Jony Ive Chair",
    specializations: [
      {
        slug: "visual-communication",
        name: "Visual Communication",
        description: "Typography, editorial systems, dynamic branding, and design language tokens for digital and physical platforms.",
        leadFaculty: "Prof. Massimo Vignelli Fellow",
        enrolledCount: 92,
        curriculumCode: "DES-VC-108",
      },
      {
        slug: "product-prototyping",
        name: "Product Prototyping",
        description: "Micro-interactions, high-fidelity design systems, hardware-software integration, and user usability testing.",
        leadFaculty: "Prof. Don Norman Chair",
        enrolledCount: 93,
        curriculumCode: "DES-PR-320",
      },
    ],
  },
  {
    slug: "business",
    name: "Business & Management",
    description: "Strategic leadership, quantitative financial technology, global market scaling, entrepreneurship, and product analytics.",
    enrolledCount: 240,
    facultyCount: 20,
    headOfDepartment: "Prof. Clayton Christensen Chair",
    specializations: [
      {
        slug: "fintech-analytics",
        name: "FinTech & Analytics",
        description: "Algorithmic market mechanics, blockchain consensus economics, computational risk modelling, and asset pricing.",
        leadFaculty: "Dr. Fischer Black Fellow",
        enrolledCount: 115,
        curriculumCode: "BUS-FIN-412",
      },
      {
        slug: "entrepreneurship",
        name: "Global Entrepreneurship",
        description: "Venture incubation, zero-to-one product velocity, fundraising strategies, and sustainable unit economics.",
        leadFaculty: "Prof. Steve Blank Chair",
        enrolledCount: 125,
        curriculumCode: "BUS-ENT-204",
      },
    ],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug.toLowerCase() === slug.toLowerCase());
}

export function getSpecialization(deptSlug: string, specSlug: string) {
  const dept = getDepartmentBySlug(deptSlug);
  if (!dept) return undefined;
  const spec = dept.specializations.find(
    (s) => s.slug.toLowerCase() === specSlug.toLowerCase()
  );
  if (!spec) return undefined;
  return { department: dept, specialization: spec };
}
