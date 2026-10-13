import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site";

export const metadata: Metadata = {
  title: "PocketTech Guide | Tech made clear",
  description: "Friendly buying guides, phone tips, and honest technology explainers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><Header />{children}<Footer /></body>
    </html>
  );
}
