# Project 4: Course Learning Portal (LearnSpace)

An educational engineering learning platform built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features multi-tier nested dynamic routing for course modules and lessons, interactive curriculum sidebars, and static page generation.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/courses` | **Static Route** | `src/app/page.tsx` & `src/app/courses/page.tsx` | Comprehensive course catalog with search, topic filtering, and level filtering. |
| `/courses/[courseId]` | **Dynamic Route (`[courseId]`)** | `src/app/courses/[courseId]/page.tsx` | Course overview page showing syllabus modules, lessons list, instructor bio, and enrollment action. Uses `generateStaticParams()`. |
| `/courses/[courseId]/lessons/[lessonId]` | **Nested Dynamic Route** | `src/app/courses/[courseId]/lessons/[lessonId]/page.tsx` | Immersive lesson viewer with sticky curriculum outline sidebar, lesson notes, code snippets, and sequential prev/next lesson navigation. Uses `generateStaticParams()`. |
| `/topics/[topic]` | **Dynamic Route (`[topic]`)** | `src/app/topics/[topic]/page.tsx` | Topic overview page grouping all courses under a specific tech domain (e.g., React & Next.js Ecosystem). Uses `generateStaticParams()`. |
| `/*` (Invalid IDs/Slugs) | **404 Fallback** | `src/app/not-found.tsx` | Triggered programmatically via `notFound()` for invalid course or lesson identifiers. |

---

## 🎨 UI & Layout Hierarchy

- **Root Layout (`src/app/layout.tsx`)**: Global `LearnNavbar` header, container constraints, and catalog footer.
- **Components**:
  - `LearnNavbar.tsx`: Responsive header with active link detection.
  - `CourseCard.tsx`: Course card with rating, topic badge, duration, and curriculum shortcut.
  - `CourseDirectoryList.tsx`: Client-side search and multi-criteria filter component.
  - `CourseBreadcrumbs.tsx`: Multi-tier navigational trail.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Skeleton pulse placeholders for course cards and syllabus modules.
- **Error Boundary (`error.tsx`)**: Client boundary with retry capability for data fetching errors.
- **Not Found (`not-found.tsx`)**: Themed 404 screen matching the drive designs.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 04-course-learning-portal

# Install dependencies (if not already installed)
npm install

# Run the development server
npm run dev

# Open in browser: http://localhost:3000
```

To validate production build:
```bash
npm run build
```
