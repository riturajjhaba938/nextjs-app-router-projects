import type { Metadata } from "next";
import "./globals.css";
import LearnNavbar from "../components/LearnNavbar";

export const metadata: Metadata = {
  title: "LearnSpace | Course Learning Portal & Lessons Viewer",
  description: "Self-paced engineering curriculum with dynamic course modules and interactive lesson viewers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <LearnNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <p>LearnSpace &bull; Project 4 Course Learning Portal &bull; Next.js Nested Lesson Dynamic Routes</p>
        </footer>
      </body>
    </html>
  );
}
