# Project 5: Recipe Explorer (Everyday Recipes)

A modern culinary discovery application built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features optional catch-all routing (`[[...filter]]`), nested cuisine routes, an interactive live recipe creator in an `(editor)` route group, and static site generation.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/recipes` | **Static / Root** | `src/app/page.tsx` & `src/app/recipes/[[...filter]]/page.tsx` | All recipes listing with cuisine filter tabs, difficulty chips, and recipe cards. |
| `/recipes/[[...filter]]` | **Optional Catch-All (`[[...filter]]`)** | `src/app/recipes/[[...filter]]/page.tsx` | Matches `/recipes`, `/recipes/east-asian`, and `/recipes/east-asian/kansai`. Pre-rendered via `generateStaticParams()`. |
| `/recipes/view/[id]` | **Dynamic Route (`[id]`)** | `src/app/recipes/view/[id]/page.tsx` | Comprehensive recipe detail page featuring prep/cook stats, ingredients checklist, step-by-step instructions with timing cues. Pre-rendered via `generateStaticParams()`. |
| `/recipes/cuisine/[cuisine]/[region]` | **Nested Dynamic Route** | `src/app/recipes/cuisine/[cuisine]/[region]/page.tsx` | Deep regional cuisine heritage page (e.g. Japanese Kansai & Kyoto) highlighting culinary techniques and regional recipes. Pre-rendered via `generateStaticParams()`. |
| `/recipes/create` | **Route Group `(editor)`** | `src/app/(editor)/recipes/create/page.tsx` | Isolated route group for authoring and staging recipes with real-time synchronized live card preview. |
| `/*` (Invalid IDs/Slugs) | **404 Fallback** | `src/app/not-found.tsx` | Triggered programmatically via `notFound()` for invalid recipe IDs or unrecognized cuisines. |

---

## 🎨 UI & Layout Hierarchy

- **Root Layout (`src/app/layout.tsx`)**: Global `RecipeNavbar`, consistent container width, and culinary footer.
- **Components**:
  - `RecipeNavbar.tsx`: Responsive header with active link detection.
  - `RecipeCard.tsx`: Reusable card with cuisine tag, difficulty badge, prep/cook duration, and calories.
  - `RecipeBreadcrumbs.tsx`: Multi-tier navigational trail.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Skeleton pulse placeholders for recipe cards and instruction steps.
- **Error Boundary (`error.tsx`)**: Client boundary with retry capability for data fetching errors.
- **Not Found (`not-found.tsx`)**: Themed 404 screen matching the drive designs.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 05-recipe-explorer

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
