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
      <body className="p-2 bg-slate-900 text-slate-200">
        <div className="bg-slate-800 text-slate-200 p-2 mb-2 text-right rounded">
          username
        </div>
        {children}
      </body>
    </html>
  );
}
