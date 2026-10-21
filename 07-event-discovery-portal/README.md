# Project 07: Event Discovery Portal

A modern, responsive Event Discovery & Ticket Reservation Portal built with **Next.js App Router**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Global Events Directory (`/events`)**:
   - Real-time client-side keyword search across event titles, venue locations, and descriptions.
   - Category filtering (Tech, Music, Business, Design) with live badge counters.
   - City filtering (San Francisco, Tokyo, London, Berlin).
   - Price sorting (Low-to-High, High-to-Low).

2. **Dynamic Event Details (`/events/[id]`)**:
   - Implemented with static pre-rendering via `generateStaticParams`.
   - Comprehensive metadata generation (`generateMetadata`).
   - Detailed speaker cards with roles and organizations.
   - Interactive Ticket Reservation modal with ticket tier selection, attendee registration, and instant confirmation.

3. **Nested Dynamic Routing (`/events/city/[city]/[category]`)**:
   - Static route generation for city and topic matrix via `generateStaticParams`.
   - Dynamic breadcrumb navigation.
   - Cross-category switcher for the selected host city.
   - Graceful empty state when no events exist for a city/topic combination.

4. **Route Group Organization (`(management)`)**:
   - `/(management)/events/my-tickets` cleanly separates attendee credential management from public event discovery without altering the public URL structure.
   - Simulated QR code generation for gate check-in.
   - Download wallet pass (PKPass) simulation and ticket cancellation workflows.

5. **Robust State & Error Handling**:
   - `not-found.tsx`: Custom 404 screen recommending alternative upcoming events.
   - `loading.tsx`: Clean animated pulse skeleton loaders for page transitions.
   - `error.tsx`: Client error boundary with recovery action.

---

## 🗺️ Route Architecture

| Route Pattern | Next.js App Router Convention | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Homepage highlighting featured events, cities, and categories |
| `/events` | `src/app/events/page.tsx` | Full event directory with multi-facet filtering & search |
| `/events/[id]` | `src/app/events/[id]/page.tsx` | Dynamic event details & ticket booking (`generateStaticParams`) |
| `/events/city/[city]/[category]` | `src/app/events/city/[city]/[category]/page.tsx` | Nested dynamic route filtering events by city and genre |
| `/events/my-tickets` | `src/app/(management)/events/my-tickets/page.tsx` | Route Group `(management)` for attendee tickets & QR passes |
| 404 Handler | `src/app/not-found.tsx` | Global not-found page with suggested event cards |
| Error Boundary | `src/app/error.tsx` | Client error boundary with interactive retry |
| Loading Skeleton | `src/app/loading.tsx` | Suspense skeleton loader for seamless navigation |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Model**: Local type-safe in-memory repository (`src/data/events.ts`)

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
