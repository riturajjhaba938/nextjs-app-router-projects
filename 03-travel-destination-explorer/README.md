# Project 3: Travel Destination Explorer (WayFinder)

A travel destination and regional discovery portal built with **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases nested dynamic routing for macro/micro geographic regions, dynamic destination profile pages, and an isolated `(planning)` route group.

---

## 🚀 Key Features & Routing Architecture

### 1. Route Breakdown

| Route Path | Type | File Location | Purpose & Rendering |
| :--- | :--- | :--- | :--- |
| `/` & `/destinations` | **Static Route** | `src/app/page.tsx` & `src/app/destinations/page.tsx` | All-destinations explorer with interactive region filtering, keyword search, rating pills, and seasonal travel notes. |
| `/destinations/[id]` | **Dynamic Route (`[id]`)** | `src/app/destinations/[id]/page.tsx` | In-depth destination guide displaying traveler ratings, optimal season, currency, top highlights, local culinary traditions, and transit notes. Uses `generateStaticParams()`. |
| `/regions` | **Static Route** | `src/app/regions/page.tsx` | Geographic macro-regions landing page (East Asia, Southern Europe, Scandinavia, Latin America) with subregion links and climate summaries. |
| `/regions/[region]/[subregion]` | **Nested Dynamic Route** | `src/app/regions/[region]/[subregion]/page.tsx` | Micro-region explorer (e.g. `/regions/east-asia/kansai-region`) displaying local climate profiles and all destinations mapped to that subregion. Uses `generateStaticParams()`. |
| `/trip-planner` | **Route Group `(planning)`** | `src/app/(planning)/trip-planner/page.tsx` | Logical route group for multi-day itineraries, duration breakdowns, budget tiers, and activity milestones. |
| `/*` (Invalid IDs/Slugs) | **404 Fallback** | `src/app/not-found.tsx` | Invoked programmatically via `notFound()` for invalid destination IDs or unrecognized geographic regions. |

---

## 🎨 UI & Layout Hierarchy

- **Root Layout (`src/app/layout.tsx`)**: Global `TravelNavbar`, consistent container width, and travel footer.
- **Components**:
  - `TravelNavbar.tsx`: Responsive navigation with active route detection.
  - `DestinationCard.tsx`: Destination preview card with traveler rating, country badge, and direct links.
  - `DestinationExplorerList.tsx`: Client-side search and region-filter component.
  - `TravelBreadcrumbs.tsx`: Multi-tier navigational trail.

---

## 🛡️ Error & Loading Handling

- **Loading State (`loading.tsx`)**: Skeleton pulse placeholders for cards and headers.
- **Error Boundary (`error.tsx`)**: Client boundary with retry capability for data fetching errors.
- **Not Found (`not-found.tsx`)**: Themed 404 screen matching the drive designs.

---

## 💻 How to Run Locally

```bash
# Navigate to project directory
cd 03-travel-destination-explorer

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
