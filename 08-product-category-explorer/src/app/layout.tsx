import type { Metadata } from "next";
import "./globals.css";
import ProductNavbar from "@/components/ProductNavbar";

export const metadata: Metadata = {
  title: "PlainShop | Minimalist Hardware & Workspace Artifacts",
  description: "Explore curated studio headphones, custom mechanical keyboards, and architectural desk accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <ProductNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-10 mt-12 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p className="font-semibold text-slate-700">PlainShop — Minimalist Hardware & Workspace Artifacts</p>
            <p className="text-slate-400">
              Project 08 • Built with Next.js App Router (Optional Catch-All Routes & Dynamic Views)
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
