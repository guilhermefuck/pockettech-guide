import type { MetadataRoute } from "next";
import { articles } from "@/components/site";

const baseUrl = "https://pockettech-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/guides", "/comparisons", "/phone-tips", "/about", "/contact", "/privacy", "/affiliate-disclosure"];
  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...articles.map((article) => ({ url: `${baseUrl}/articles/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}