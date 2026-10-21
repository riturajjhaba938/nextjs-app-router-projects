# Project 08: Product Category Explorer (PlainShop)

A minimalist, high-craft Product & Workspace Category Explorer built with **Next.js App Router**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Optional Catch-All Route Architecture (`/products/[[...categories]]`)**:
   - Matches the base route `/products` as well as any level of category nesting (e.g., `/products/electronics` or `/products/electronics/audio`).
   - Implemented with static pre-rendering via `generateStaticParams` for instant navigation.
   - Dynamic breadcrumb generation matching directory depth.
   - Live client-side product filtering, keyword search, price sorting, and in-stock toggling.

2. **Dynamic Product Detail Route (`/products/view/[id]`)**:
   - Static HTML pre-generation (`generateStaticParams`) for all catalog SKUs.
   - Dynamic page metadata generation (`generateMetadata`).
   - Detailed technical specifications table and design overview.
   - Interactive `ProductDetailActions` client component with quantity selector, instant bag feedback, and express shipping perks.
   - Related products recommendation carousel for items within the same collection.

3. **Route Group Organization (`(account)`)**:
   - `/(account)/preferences` organizes user account configurations without polluting or altering the browser URL (`/preferences`).
   - Multi-currency switcher (USD $, EUR €, GBP £, JPY ¥).
   - Catalog density selector (comfortable vs compact grid).
   - Notification and design journal preferences.

4. **Robust State & Error Handling**:
   - `not-found.tsx`: Global 404 handler that gracefully recovers by recommending flagship products.
   - `loading.tsx`: Clean animated pulse skeleton loaders for smooth page transitions.
   - `error.tsx`: Client error boundary with retry capability.

---

## 🗺️ Route Architecture

| Route Pattern | Next.js App Router Convention | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Storefront homepage highlighting featured categories and staff picks |
| `/products` | `src/app/products/[[...categories]]/page.tsx` | All products catalog (Optional Catch-All base) |
| `/products/[...category]` | `src/app/products/[[...categories]]/page.tsx` | Nested category browsing (e.g. `/products/electronics/audio`) |
| `/products/view/[id]` | `src/app/products/view/[id]/page.tsx` | Dynamic product specifications & purchase page |
| `/preferences` | `src/app/(account)/preferences/page.tsx` | Route Group `(account)` for user shopping & currency preferences |
| 404 Handler | `src/app/not-found.tsx` | Custom 404 page with suggested items |
| Error Boundary | `src/app/error.tsx` | Client error boundary with interactive retry |
| Loading Skeleton | `src/app/loading.tsx` | Suspense skeleton loader for collection browsing |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Model**: Local type-safe repository (`src/data/products.ts`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```
