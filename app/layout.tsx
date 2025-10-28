import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Tariq — Portfolio",
  description: "Cloud, data & AI specialist blending strategy, storytelling, and delivery.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
