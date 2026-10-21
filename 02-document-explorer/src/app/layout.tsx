import type { Metadata } from "next";
import "./globals.css";
import DocNavbar from "../components/DocNavbar";

export const metadata: Metadata = {
  title: "CoreDocs | Next.js App Router Documentation Explorer",
  description: "Comprehensive documentation explorer with nested catch-all routes and live code examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <DocNavbar />
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-500">
          <p>CoreDocs &bull; Project 2 Documentation Explorer &bull; Next.js Catch-all Routes ([...slug])</p>
        </footer>
      </body>
    </html>
  );
}
