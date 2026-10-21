# Project 2: Documentation Explorer (CoreDocs)

A technical documentation portal built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It emphasizes nested catch-all routes (`[...slug]`), responsive three-pane layouts, and static page pre-rendering.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/docs` | **Static Route** | `src/app/page.tsx` & `src/app/docs/page.tsx` | Documentation landing dashboard with topic cards for Getting Started, Core Routing, Rendering, and Configuration. |
| `/docs/[...slug]` | **Catch-all Dynamic Route (`[...slug]`)** | `src/app/docs/[...slug]/page.tsx` | Captures multi-segment nested documentation URLs (e.g. `/docs/routing/catch-all-routes`, `/docs/getting-started/installation`). Generates all paths statically at build time via `generateStaticParams()`. |
| `/*` (Invalid Slugs) | **404 Fallback** | `src/app/not-found.tsx` | Invoked programmatically via `notFound()` when a doc slug does not exist. Features a helpful list of suggested articles. |

---

## 🎨 UI & Three-Pane Layout

- **Left Pane (`DocSidebar.tsx`)**: Sticky, nested sidebar navigation with grouped sections, active link highlighting, and topic badges.
- **Center Pane**: Article reading view with breadcrumbs, section meta, overview callouts, paragraph content, code snippets with dark syntax blocks, and Next/Previous navigation buttons.
- **Right Pane (`DocTableOfContents.tsx`)**: Sticky "On this page" table of contents with anchor links to article sections.
- **Breadcrumbs (`DocBreadcrumbs.tsx`)**: Dynamic breadcrumb trail derived from section hierarchy and current document title.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Animated layout skeleton mirroring the three-pane documentation structure.
- **Error Boundary (`error.tsx`)**: Catches and displays runtime errors with a retry button.
- **Not Found (`not-found.tsx`)**: Custom 404 page styled to match the drive design with direct links to suggested documentation guides.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 02-document-explorer

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
