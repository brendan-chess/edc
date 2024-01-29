import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EDC Demo",
  description: "EDC Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-2 bg-slate-900 text-slate-200">
        <div className="bg-slate-800 p-2 mb-2 rounded">
          <Link href="/dashboard">Dashboard</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
