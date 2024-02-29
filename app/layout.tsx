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
      <body className="p-8 bg-neutral-900 text-neutral-200">{children}</body>
    </html>
  );
}
