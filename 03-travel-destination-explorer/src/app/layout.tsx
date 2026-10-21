import type { Metadata } from "next";
import "./globals.css";
import TravelNavbar from "../components/TravelNavbar";

export const metadata: Metadata = {
  title: "WayFinder | Travel Destination & Regional Explorer",
  description: "Explore curated travel destinations, nested geographic regions, and comprehensive trip itineraries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-900 antialiased">
        <TravelNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-500">
          <p>WayFinder &bull; Project 3 Travel Destination Explorer &bull; Next.js Nested Regions &amp; Dynamic Routes</p>
        </footer>
      </body>
    </html>
  );
}
