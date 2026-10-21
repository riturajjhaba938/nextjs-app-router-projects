import type { Metadata } from "next";
import "./globals.css";
import EventNavbar from "@/components/EventNavbar";

export const metadata: Metadata = {
  title: "PulseEvents | Global Event Discovery & Ticket Hub",
  description: "Explore tech summits, live music concerts, venture forums, and creative design expos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 antialiased">
        <EventNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-500">
          <p>PulseEvents &bull; Project 7 Event Discovery Portal &bull; Next.js Nested City &amp; Category Routes</p>
        </footer>
      </body>
    </html>
  );
}
