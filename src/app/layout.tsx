import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "@/components/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://pockettech-guide.vercel.app"),
  title: {
    default: "PocketTech Guide | Tech made clear",
    template: "%s | PocketTech Guide",
  },
  description: "Friendly smartphone buying guides, honest comparisons, and practical technology advice.",
  verification: { google: "_XMPg-BIMmGrnh_ZNsIu-1bNPiXj5rSELqGT4YCdpA8" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PocketTech Guide",
    title: "PocketTech Guide | Tech made clear",
    description: "Friendly smartphone buying guides, honest comparisons, and practical technology advice.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><Script src="https://www.googletagmanager.com/gtag/js?id=G-5SLVYW9BCP" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-5SLVYW9BCP");`}</Script><Header />{children}<Footer /></body>
    </html>
  );
}
