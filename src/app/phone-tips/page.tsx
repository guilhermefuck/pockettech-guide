import type { Metadata } from "next";
import { ArticleCard, articles } from "@/components/site";
export const metadata: Metadata = { title: "Phone Tips | PocketTech Guide", description: "Simple phone tips that make your technology work better." };
export default function PhoneTipsPage() { const tips = articles.filter((article) => article.category === "Phone tips"); return <main className="page-shell"><section className="page-intro mint-intro"><p className="eyebrow">PHONE TIPS</p><h1>Get more from the phone already in your pocket.</h1><p>Easy-to-follow advice for battery, storage, privacy and everyday use.</p></section><section className="article-grid">{tips.map((article) => <ArticleCard article={article} key={article.slug} />)}</section></main>; }
