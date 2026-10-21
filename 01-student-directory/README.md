# Project 1: Student Directory & Campus Portal

A modern, responsive university directory built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed according to the campus directory UI design specifications.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/students` | **Static Route** | `src/app/page.tsx` & `src/app/students/page.tsx` | Main directory listing with client-side interactive search, department filtering, and academic year filters. |
| `/students/[id]` | **Dynamic Route (`[id]`)** | `src/app/students/[id]/page.tsx` | Comprehensive student profile displaying bio, GPA, advisor, campus workspace, and enrolled courses table. Generates static params via `generateStaticParams()`. |
| `/departments` | **Static Route** | `src/app/departments/page.tsx` | High-level faculty directory displaying department chairs, enrolled statistics, faculty counts, and specialization links. |
| `/departments/[dept]/[specialization]` | **Nested Dynamic Route** | `src/app/departments/[dept]/[specialization]/page.tsx` | Nested route for individual tracks (e.g., `/departments/computer-science/web-development`), displaying faculty lead, curriculum code, and assigned students. |
| `/about` | **Static Route** | `src/app/about/page.tsx` | Directory documentation, governance, and architecture overview. |
| `/*` (Invalid IDs/Slugs) | **404 Fallback** | `src/app/not-found.tsx` | Invoked programmatically via `notFound()` whenever an invalid student ID or department slug is requested. |

---

## 🎨 UI & Layout Implementation

- **Root Layout (`src/app/layout.tsx`)**: Global navigation header (`Navbar`), consistent container padding, and campus copyright footer.
- **Components**:
  - `Navbar.tsx`: Responsive navigation bar with active route highlighting and current academic year badge.
  - `StudentCard.tsx`: Reusable student card with avatar badge, GPA pill, department link, and profile shortcut.
  - `Breadcrumbs.tsx`: Dynamic breadcrumb trail providing clear navigational hierarchy.
  - `StudentDirectoryList.tsx`: High-performance client component for real-time search, multi-factor filtering, and empty-state messaging.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Skeleton pulse placeholders matching the student card grid to prevent layout shift during page transitions.
- **Error Boundary (`error.tsx`)**: Client error boundary with a retry button to gracefully catch unexpected runtime rendering issues.
- **Not Found (`not-found.tsx`)**: Custom 404 page styled to match the drive design with direct links back to the student directory and departments.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 01-student-directory

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
