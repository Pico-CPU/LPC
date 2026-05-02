import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LowPassCreative — Aerial Cinematography",
  description: "Aerial cinematography for real estate, automotive, and action. FAA Part 107 certified. California.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
