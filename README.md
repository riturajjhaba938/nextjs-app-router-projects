# Next.js App Router Master Portfolio — All 8 Projects

This repository directory contains complete, production-grade implementations of **all 8 projects** designed to master the **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Each project is completely independent, features its own routes, custom layouts, type-safe data model, responsive UI, loading states, custom 404 handlers, and isolated Git repository with verified production builds.

---

## 📋 Comprehensive Project Catalog

| # | Project Name | Directory | Key Next.js App Router Concepts | Last Commit ID |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **Student Directory** | `01-student-directory` | Dynamic Routes (`[id]`), Nested Dynamic Routes (`[dept]/[spec]`), Breadcrumbs, `generateStaticParams`, Loading Skeletons, Custom 404 | `00aced192f50f9612b7f9dda6e539d11512e9b96` |
| **02** | **Document Explorer** | `02-document-explorer` | Multi-Level Catch-All Routes (`[...slug]`), Hierarchical Tree Navigation, Interactive Doc Search, Markdown-styled typography | `139790cdf672a2d8a16d08e7bc833f164c85df3e` |
| **03** | **Travel Destination Explorer** | `03-travel-destination-explorer` | Route Groups (`(planning)`), Dynamic Detail Routes (`[id]`), Multi-segment regional browsing (`[region]/[subregion]`), Interactive Itinerary Planner | `28f0d94c9ca45c22295b3fb19745f851588ed581` |
| **04** | **Course Learning Portal** | `04-course-learning-portal` | Deeply Nested Dynamic Routes (`[courseId]/lessons/[lessonId]`), Syllabus sidebar layout, Interactive video player mockup, Quiz submission | `96e178fef24c8e4ad1b220fb69e4956fee2444e0` |
| **05** | **Recipe & Meal Planner** | `05-recipe-explorer` | Optional Catch-All Routes (`[[...filter]]`), Nested cuisine routing (`[cuisine]/[region]`), Route Groups (`(editor)`), Interactive cook mode & recipe creator | `3f62821b261624353a17c9ba69fa2d0d897c412f` |
| **06** | **Cloud File Explorer** | `06-file-explorer` | Catch-All Route (`[...path]`) for unified folder navigation & code viewer, Route Groups (`(settings)`), Breadcrumb directory jump, File previewer | `de5aed2963edb6fa04dfec1ef1d2b64717d61654` |
| **07** | **Event Discovery & Tickets** | `07-event-discovery-portal` | Nested Dynamic Routes (`city/[city]/[category]`), Route Groups (`(management)`), Dynamic Event Details (`[id]`), Ticket tier booking & QR pass generation | `bccf8cfa2f537a648b636807fb458ea1b997acbf` |
| **08** | **Product Category Explorer** | `08-product-category-explorer` | Optional Catch-All Routes (`[[...categories]]`), Dynamic Product View (`view/[id]`), Route Groups (`(account)`), Multi-facet filter & currency switcher | `fc831c243fc164f6a580da5f42a6fbcf17e80a8d` |

---

## 🏆 Recommended 2 Projects for Submission

As per your course assignment requirement:
> *"Pick any 2 projects and Submit Repo and Last commit ID"*

Here are the **top 2 recommended projects** that showcase the highest variety and depth of App Router capabilities:

### Choice 1: Project 04 — Course Learning Portal
- **Folder**: `04-course-learning-portal`
- **Last Commit ID**: `96e178fef24c8e4ad1b220fb69e4956fee2444e0`
- **Why It Stands Out**:
  - Implements complex multi-level nested dynamic routing: `/courses/[courseId]/lessons/[lessonId]`.
  - Nested layout (`CourseNavLayout`) preserving syllabus state across lessons.
  - Interactive video lesson player with playback controls, timestamps, and interactive post-lesson comprehension quiz.
  - Category exploration via `/topics/[topic]`.
  - 18 static & SSG pre-rendered routes.

### Choice 2: Project 08 — Product Category Explorer (PlainShop)
- **Folder**: `08-product-category-explorer`
- **Last Commit ID**: `fc831c243fc164f6a580da5f42a6fbcf17e80a8d`
- **Why It Stands Out**:
  - Implements optional catch-all routing (`/products/[[...categories]]`) matching both the root catalog `/products` and deep subcategories like `/products/electronics/audio`.
  - Route Group `(account)/preferences` cleanly managing user currency (USD/EUR/GBP/JPY) and layout density without affecting URL path.
  - Dynamic product specs and purchase workflow (`/products/view/[id]`).
  - Sleek, modern hardware design aesthetics inspired by PlainShop / teenage engineering.
  - 17 static & SSG pre-rendered routes.

*(Alternative excellent submission: **Project 06 Cloud File Explorer** with commit `de5aed2963edb6fa04dfec1ef1d2b64717d61654`, which demonstrates catch-all tree exploration and Monaco-style code inspection).*

---

## 🚀 How to Run Any Project

All projects use the shared root dependencies located in `c:\Users\Admin\Desktop\NextJs\node_modules`.

To launch any project, open your terminal and navigate to its folder:

```bash
# Example: Running Project 04 Course Learning Portal
cd 04-course-learning-portal
npm run dev

# Example: Running Project 08 Product Category Explorer
cd 08-product-category-explorer
npm run dev

# Example: Running Project 06 File Explorer
cd 06-file-explorer
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🛠️ Verification & Build Status

Every single project has been validated against Next.js production builds (`npm run build`):
- ✅ Zero TypeScript errors (`strict: true`)
- ✅ Zero ESLint or syntax errors
- ✅ All dynamic params statically generated via `generateStaticParams`
- ✅ Custom `not-found.tsx`, `loading.tsx`, and `error.tsx` handling in every project
- ✅ Independent Git repository per project with initial commit
