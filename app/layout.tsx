import type { Metadata } from "next";
import "./globals.css";

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
      <body className="p-2">{children}</body>
    </html>
  );
}
