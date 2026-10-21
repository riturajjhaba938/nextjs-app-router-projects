import { DocArticle, DocNavSection } from "../types";

export const docNavSections: DocNavSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      { title: "Installation & Requirements", slug: ["getting-started", "installation"], badge: "Start" },
      { title: "Quickstart Guide", slug: ["getting-started", "quickstart"] },
      { title: "Project Directory Setup", slug: ["getting-started", "project-setup"] },
    ],
  },
  {
    title: "Routing & Navigation",
    slug: "routing",
    items: [
      { title: "Dynamic Routes ([id])", slug: ["routing", "dynamic-routes"] },
      { title: "Catch-all Routes ([...slug])", slug: ["routing", "catch-all-routes"], badge: "Core" },
      { title: "Route Groups ((group))", slug: ["routing", "route-groups"] },
      { title: "Parallel & Intercepting Routes", slug: ["routing", "parallel-routes"] },
    ],
  },
  {
    title: "Rendering Strategies",
    slug: "rendering",
    items: [
      { title: "React Server Components", slug: ["rendering", "server-components"], badge: "RSC" },
      { title: "Static Generation (generateStaticParams)", slug: ["rendering", "static-site-generation"] },
    ],
  },
  {
    title: "Configuration & Types",
    slug: "configuration",
    items: [
      { title: "next.config.ts Settings", slug: ["configuration", "next-config"] },
      { title: "TypeScript Integration", slug: ["configuration", "typescript"] },
    ],
  },
];

export const docArticles: DocArticle[] = [
  {
    slug: ["routing", "catch-all-routes"],
    title: "Catch-all Routes",
    section: "Routing & Navigation",
    sectionSlug: "routing",
    summary: "Extend dynamic segments to catch all subsequent URL segments using [...slug] syntax.",
    overview: "Dynamic segments can be extended to catch all subsequent path segments by adding an ellipsis inside the brackets: [...segmentName]. This is ideal for documentation portals, nested file systems, and flexible multi-tier category structures.",
    content: [
      "Dynamic segments allow you to create routes that match arbitrary URL paths. When you need a route that captures multiple segments of varying depth (such as /docs/a/b/c or /files/src/components/Button.tsx), you use a Catch-all segment.",
      "The matched parameters are passed into the page component as an array of strings in the `params` promise.",
      "To make catch-all segments optional (matching the root as well as nested paths), use double brackets: `[[...segmentName]]`.",
    ],
    codeSnippets: [
      {
        title: "Catch-All Route: app/docs/[...slug]/page.tsx",
        language: "tsx",
        code: `type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  
  return (
    <article>
      <h1>Current Path: {slug.join(' / ')}</h1>
    </article>
  );
}`,
      },
      {
        title: "Optional Catch-All Route: app/shop/[[...slug]]/page.tsx",
        language: "tsx",
        code: `// Matches /shop as well as /shop/clothing and /shop/clothing/tops
export default async function ShopPage({ params }: Props) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) {
    return <h1>All Categories</h1>;
  }
  
  return <h1>Category: {slug.join(' > ')}</h1>;
}`,
      },
    ],
    tableOfContents: [
      { id: "overview", title: "Overview & Mental Model" },
      { id: "creating-the-segment-folder", title: "Creating the Segment Folder" },
      { id: "accessing-route-parameters", title: "Accessing Route Parameters" },
      { id: "handling-optional-catch-all", title: "Handling Optional Segments" },
    ],
    previous: { title: "Dynamic Routes ([id])", slug: ["routing", "dynamic-routes"] },
    next: { title: "Route Groups ((group))", slug: ["routing", "route-groups"] },
  },
  {
    slug: ["routing", "dynamic-routes"],
    title: "Dynamic Routes ([id])",
    section: "Routing & Navigation",
    sectionSlug: "routing",
    summary: "Define programmatic routes by wrapping a folder's name in square brackets: [paramName].",
    overview: "When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or pre-rendered at build time.",
    content: [
      "A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, `app/students/[id]/page.tsx` matches `/students/aarav-mehta` and `/students/elena-rostova`.",
      "In Next.js 15 and 16, route parameters in Page and Layout components are asynchronous and must be unwrapped using `await params`.",
      "Combine dynamic routes with `generateStaticParams()` to pre-render dynamic paths statically at build time.",
    ],
    codeSnippets: [
      {
        title: "Dynamic Route Implementation",
        language: "tsx",
        code: `interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(id);
  
  return <div>Item: {item.name}</div>;
}`,
      },
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "creating-dynamic-segments", title: "Creating Dynamic Segments" },
      { id: "generatestaticparams", title: "generateStaticParams Usage" },
    ],
    previous: { title: "Project Directory Setup", slug: ["getting-started", "project-setup"] },
    next: { title: "Catch-all Routes ([...slug])", slug: ["routing", "catch-all-routes"] },
  },
  {
    slug: ["routing", "route-groups"],
    title: "Route Groups ((group))",
    section: "Routing & Navigation",
    sectionSlug: "routing",
    summary: "Organize routes into distinct logical groups without affecting the URL path structure.",
    overview: "In the App Router, a folder wrapped in parentheses is a Route Group: `(folderName)`. This indicates the folder is for organizational purposes only and should not be included in the route's URL path.",
    content: [
      "Route groups are ideal for applying separate shared layouts to different parts of an application (e.g., an `(auth)` group with a minimal layout and a `(dashboard)` group with sidebars).",
      "You can also create multiple root layouts by placing them inside top-level route groups.",
    ],
    codeSnippets: [
      {
        title: "Route Group Layout Example",
        language: "tsx",
        code: `// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-shell">
      <MarketingNavbar />
      {children}
    </div>
  );
}`,
      },
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "group-organization", title: "Group Organization" },
      { id: "nested-layouts", title: "Nested Layout Patterns" },
    ],
    previous: { title: "Catch-all Routes ([...slug])", slug: ["routing", "catch-all-routes"] },
    next: { title: "Parallel & Intercepting Routes", slug: ["routing", "parallel-routes"] },
  },
  {
    slug: ["getting-started", "installation"],
    title: "Installation & Requirements",
    section: "Getting Started",
    sectionSlug: "getting-started",
    summary: "System requirements, package installation, and initial workspace verification.",
    overview: "Get up and running with the Next.js App Router framework. Learn about Node.js requirements, TypeScript configuration, and standard scripts.",
    content: [
      "To build production-grade web applications with modern React Server Components, ensure you have Node.js 18.18+ or Node.js 20+ installed on your system.",
      "The App Router is standard in Next.js 14, 15, and 16, featuring built-in streaming with React 19 and Turbopack bundler acceleration.",
    ],
    codeSnippets: [
      {
        title: "Terminal Commands",
        language: "bash",
        code: `npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm run dev`,
      },
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "system-requirements", title: "System Requirements" },
      { id: "scaffolding", title: "Project Scaffolding" },
    ],
    next: { title: "Quickstart Guide", slug: ["getting-started", "quickstart"] },
  },
  {
    slug: ["getting-started", "quickstart"],
    title: "Quickstart Guide",
    section: "Getting Started",
    sectionSlug: "getting-started",
    summary: "Build your first page, create a shared layout, and navigate between dynamic routes.",
    overview: "This guide walks through creating your first page in the `app` directory, setting up nested layouts, and understanding server rendering defaults.",
    content: [
      "Every folder inside `app/` that contains a `page.tsx` file defines a public route.",
      "Layout files (`layout.tsx`) wrap the child routes and preserve their state across navigation.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "first-page", title: "Your First Page" },
    ],
    previous: { title: "Installation & Requirements", slug: ["getting-started", "installation"] },
    next: { title: "Project Directory Setup", slug: ["getting-started", "project-setup"] },
  },
  {
    slug: ["getting-started", "project-setup"],
    title: "Project Directory Setup",
    section: "Getting Started",
    sectionSlug: "getting-started",
    summary: "Best practices for folder organization, components, utilities, and TypeScript types.",
    overview: "Learn how to structure your application directory to separate reusable components, route handlers, and data services cleanly.",
    content: [
      "Keep UI components organized by purpose: shared widgets in `src/components`, types in `src/types`, and dummy data sources in `src/data`.",
      "Take advantage of `@/*` path aliases configured in `tsconfig.json` for concise imports.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "directory-conventions", title: "Directory Conventions" },
    ],
    previous: { title: "Quickstart Guide", slug: ["getting-started", "quickstart"] },
    next: { title: "Dynamic Routes ([id])", slug: ["routing", "dynamic-routes"] },
  },
  {
    slug: ["routing", "parallel-routes"],
    title: "Parallel & Intercepting Routes",
    section: "Routing & Navigation",
    sectionSlug: "routing",
    summary: "Render multiple pages simultaneously in the same view using named slots.",
    overview: "Parallel Routing allows you to simultaneously or conditionally render one or more pages within the same layout, using named slots defined with `@slotName`.",
    content: [
      "Named slots are passed as props to the parent layout alongside `children`.",
      "Useful for split-pane dashboards, modal overlays, and conditional user flows.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "slots", title: "Defining Slots" },
    ],
    previous: { title: "Route Groups ((group))", slug: ["routing", "route-groups"] },
    next: { title: "React Server Components", slug: ["rendering", "server-components"] },
  },
  {
    slug: ["rendering", "server-components"],
    title: "React Server Components",
    section: "Rendering Strategies",
    sectionSlug: "rendering",
    summary: "Understand zero-bundle-size server rendering and client component boundaries.",
    overview: "React Server Components allow you to write UI that can be rendered and optionally cached on the server, keeping large dependencies out of client JavaScript bundles.",
    content: [
      "In the App Router, all components inside the `app/` folder are Server Components by default.",
      "Add the `'use client'` directive at the top of a file only when you need interactive hooks (useState, useEffect) or browser events.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "benefits", title: "Benefits of Server Components" },
    ],
    previous: { title: "Parallel & Intercepting Routes", slug: ["routing", "parallel-routes"] },
    next: { title: "Static Generation (generateStaticParams)", slug: ["rendering", "static-site-generation"] },
  },
  {
    slug: ["rendering", "static-site-generation"],
    title: "Static Generation (generateStaticParams)",
    section: "Rendering Strategies",
    sectionSlug: "rendering",
    summary: "Pre-render dynamic routes at build time for optimal performance and instant loads.",
    overview: "The `generateStaticParams` function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.",
    content: [
      "Static generation produces static HTML files, boosting Core Web Vitals (LCP/INP) and cutting server compute overhead.",
      "Ideal for documentation, blogs, and product catalogs where content is known ahead of time.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "usage", title: "Function Usage" },
    ],
    previous: { title: "React Server Components", slug: ["rendering", "server-components"] },
    next: { title: "next.config.ts Settings", slug: ["configuration", "next-config"] },
  },
  {
    slug: ["configuration", "next-config"],
    title: "next.config.ts Settings",
    section: "Configuration & Types",
    sectionSlug: "configuration",
    summary: "Configure the Next.js runtime, image domains, headers, and Turbopack compiler options.",
    overview: "The `next.config.ts` file is used to configure Next.js runtime behaviors, headers, rewrites, redirects, and build settings.",
    content: [
      "Next.js 15+ supports native TypeScript in `next.config.ts` without requiring additional transpilations.",
      "Use `turbopack: { root: '...' }` to fine-tune workspace root boundaries in monorepo setups.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "turbopack-options", title: "Turbopack Configuration" },
    ],
    previous: { title: "Static Generation (generateStaticParams)", slug: ["rendering", "static-site-generation"] },
    next: { title: "TypeScript Integration", slug: ["configuration", "typescript"] },
  },
  {
    slug: ["configuration", "typescript"],
    title: "TypeScript Integration",
    section: "Configuration & Types",
    sectionSlug: "configuration",
    summary: "Strict type-checking for route params, search params, metadata, and Server Actions.",
    overview: "Next.js provides an end-to-end type-safe experience. Route segments, metadata objects, and async parameters are strongly typed.",
    content: [
      "Next.js generates types in `.next/types/app` to validate page props and link hrefs.",
      "Use `Metadata` type from `next` for typed SEO tags.",
    ],
    tableOfContents: [
      { id: "overview", title: "Overview" },
      { id: "typed-routes", title: "Typed Routes" },
    ],
    previous: { title: "next.config.ts Settings", slug: ["configuration", "next-config"] },
  },
];

export function getDocArticle(slugs: string[]): DocArticle | undefined {
  const target = slugs.join("/").toLowerCase();
  return docArticles.find((art) => art.slug.join("/").toLowerCase() === target);
}
