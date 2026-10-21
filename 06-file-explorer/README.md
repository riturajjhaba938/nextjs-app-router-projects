# Project 6: File Explorer (CloudDrive)

A cloud file and directory manager built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It demonstrates recursive dynamic directory traversal with catch-all routes (`[...path]`), syntax-highlighted code file inspection within dynamic paths, empty-state handling, and an isolated `(settings)` preferences route group.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/files` | **Static Route** | `src/app/page.tsx` & `src/app/files/page.tsx` | Root drive file and folder listing with capacity storage meter and directory table. |
| `/files/[...path]` | **Catch-all Dynamic Route (`[...path]`)** | `src/app/files/[...path]/page.tsx` | Unifies folder traversal and file code inspection. If `path` is a folder, renders nested subdirectories and files (with empty-folder state if empty). If `path` is a file, renders the file metadata and syntax-highlighted code editor. Uses `generateStaticParams()`. |
| `/preferences` | **Route Group `(settings)`** | `src/app/(settings)/preferences/page.tsx` | Route group for explorer configurations, sort order, hidden files display, and storage diagnostics. |
| `/*` (Invalid Paths) | **404 Fallback** | `src/app/not-found.tsx` | Triggered programmatically via `notFound()` for missing files or invalid directory paths. |

---

## 🎨 UI & Layout Hierarchy

- **Root Layout (`src/app/layout.tsx`)**: Global `FileNavbar` header with real-time storage bar and directory breadcrumb navigation.
- **Components**:
  - `FileNavbar.tsx`: Header with dynamic storage capacity gauge.
  - `DirectoryTable.tsx`: Directory table with file icons, size, modification date, and action links.
  - `FileBreadcrumbs.tsx`: Interactive path breadcrumb trail.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Skeleton pulse placeholders for directory tables and headers.
- **Error Boundary (`error.tsx`)**: Client boundary with retry capability for filesystem reading errors.
- **Not Found (`not-found.tsx`)**: Themed 404 screen matching the drive designs.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 06-file-explorer

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
