import type { Metadata } from "next";
import "./globals.css";
import RecipeNavbar from "../components/RecipeNavbar";

export const metadata: Metadata = {
  title: "Everyday Recipes | Modern Culinary & Regional Explorer",
  description: "Browse recipes with optional category catch-all routing, regional cuisine explorer, and recipe creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900 antialiased">
        <RecipeNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-500">
          <p>Everyday Recipes &bull; Project 5 Recipe Explorer &bull; Next.js Optional Catch-All Routes ([[...filter]])</p>
        </footer>
      </body>
    </html>
  );
}
