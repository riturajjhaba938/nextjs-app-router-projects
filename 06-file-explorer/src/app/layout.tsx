import type { Metadata } from "next";
import "./globals.css";
import FileNavbar from "../components/FileNavbar";

export const metadata: Metadata = {
  title: "CloudDrive | File & Folder Explorer",
  description: "Dynamic file and folder browser with nested catch-all routes and live code inspection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <FileNavbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <p>CloudDrive &bull; Project 6 File Explorer &bull; Next.js Catch-All Routes ([...path])</p>
        </footer>
      </body>
    </html>
  );
}
