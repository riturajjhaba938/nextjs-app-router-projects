import { FileEntry, DriveStats } from "../types";

export const driveStats: DriveStats = {
  usedGB: 5.54,
  totalGB: 10.0,
  fileCount: 48,
  folderCount: 12,
};

export const fileSystem: FileEntry[] = [
  // Root Level Folders
  { name: "projects", type: "folder", size: "1.2 GB", modified: "Oct 21, 2026", path: ["projects"] },
  { name: "documents", type: "folder", size: "240 MB", modified: "Oct 18, 2026", path: ["documents"] },
  { name: "design-assets", type: "folder", size: "3.8 GB", modified: "Oct 15, 2026", path: ["design-assets"] },
  { name: "archive-2025", type: "folder", size: "300 MB", modified: "Sep 30, 2026", path: ["archive-2025"] },

  // Root Level Files
  {
    name: "package.json",
    type: "file",
    size: "531 Bytes",
    modified: "Oct 21, 2026",
    path: ["package.json"],
    extension: "json",
    content: `{
  "name": "nextjs-app",
  "version": "1.0.0",
  "dependencies": {
    "next": "16.3.2",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  }
}`,
  },
  {
    name: "README.md",
    type: "file",
    size: "1.4 KB",
    modified: "Oct 20, 2026",
    path: ["README.md"],
    extension: "md",
    content: `# Next.js Enterprise Monorepo

Welcome to the cloud storage workspace. All project sources, configuration files, and build assets are indexed in the root drive.`,
  },
  {
    name: "next.config.ts",
    type: "file",
    size: "366 Bytes",
    modified: "Oct 19, 2026",
    path: ["next.config.ts"],
    extension: "ts",
    content: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "..",
  },
};

export default nextConfig;`,
  },

  // projects/ children
  { name: "next-app", type: "folder", size: "850 MB", modified: "Oct 21, 2026", path: ["projects", "next-app"] },
  { name: "react-dashboard", type: "folder", size: "350 MB", modified: "Oct 12, 2026", path: ["projects", "react-dashboard"] },
  { name: "empty-workspace", type: "folder", size: "0 Bytes", modified: "Oct 21, 2026", path: ["projects", "empty-workspace"] },

  // projects/next-app/ children
  { name: "src", type: "folder", size: "45 KB", modified: "Oct 21, 2026", path: ["projects", "next-app", "src"] },
  {
    name: "package.json",
    type: "file",
    size: "533 Bytes",
    modified: "Oct 21, 2026",
    path: ["projects", "next-app", "package.json"],
    extension: "json",
    content: `{\n  "name": "next-app",\n  "private": true\n}`,
  },

  // projects/next-app/src/ children (matches screenshot 4_file_detail_layout.png!)
  {
    name: "layout.tsx",
    type: "file",
    size: "690 Bytes",
    modified: "Oct 21, 2026",
    path: ["projects", "next-app", "src", "layout.tsx"],
    extension: "tsx",
    content: `import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cloud Drive App",
  description: "Enterprise file manager with catch-all routing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}`,
  },
  {
    name: "page.tsx",
    type: "file",
    size: "1.2 KB",
    modified: "Oct 21, 2026",
    path: ["projects", "next-app", "src", "page.tsx"],
    extension: "tsx",
    content: `export default function Page() {\n  return <h1>Dashboard Overview</h1>;\n}`,
  },
  {
    name: "Navbar.tsx",
    type: "file",
    size: "835 Bytes",
    modified: "Oct 20, 2026",
    path: ["projects", "next-app", "src", "Navbar.tsx"],
    extension: "tsx",
    content: `export default function Navbar() {\n  return <header>Navigation Bar</header>;\n}`,
  },
];

export function getEntriesInDirectory(parentPath: string[]): FileEntry[] {
  return fileSystem.filter((entry) => {
    if (parentPath.length === 0) {
      return entry.path.length === 1;
    }
    if (entry.path.length !== parentPath.length + 1) {
      return false;
    }
    return parentPath.every((seg, idx) => entry.path[idx].toLowerCase() === seg.toLowerCase());
  });
}

export function getFileByPath(filePath: string[]): FileEntry | undefined {
  return fileSystem.find((entry) => {
    if (entry.path.length !== filePath.length) return false;
    return filePath.every((seg, idx) => entry.path[idx].toLowerCase() === seg.toLowerCase());
  });
}
