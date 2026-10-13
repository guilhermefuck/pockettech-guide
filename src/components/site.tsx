import Image from "next/image";
import Link from "next/link";

export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  visual: "mint" | "blue" | "sky" | "ink";
};

export const articles: Article[] = [
  { slug: "best-budget-smartphones", category: "Buying guides", title: "How to choose a budget smartphone in 2026", description: "A practical way to find the right balance of battery, camera, performance and support.", readTime: "8 min read", visual: "mint" },
  { slug: "android-vs-iphone", category: "Comparisons", title: "Android vs. iPhone: which one fits your life?", description: "The differences that matter after the excitement of unboxing fades.", readTime: "7 min read", visual: "blue" },
  { slug: "make-phone-battery-last", category: "Phone tips", title: "How to make your phone battery last longer", description: "Simple settings and habits that make a real difference every day.", readTime: "5 min read", visual: "sky" },
  { slug: "refurbished-phone-guide", category: "Buying guides", title: "Is a refurbished phone a smart buy?", description: "How to spot a reliable deal, understand warranties and avoid common traps.", readTime: "6 min read", visual: "ink" },
  { slug: "phone-storage-explained", category: "Explainers", title: "How much phone storage do you actually need?", description: "A no-jargon way to choose between 128GB, 256GB and more.", readTime: "4 min read", visual: "mint" },
  { slug: "upgrade-your-phone", category: "Phone tips", title: "Five signs it is time to upgrade your phone", description: "Replace it for the right reasons, not simply because a new model launched.", readTime: "5 min read", visual: "blue" },
];

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">P</span><span>PocketTech <b>Guide</b></span></Link><nav aria-label="Main navigation"><Link href="/guides">Buying guides</Link><Link href="/comparisons">Comparisons</Link><Link href="/phone-tips">Phone tips</Link><Link href="/about">About</Link></nav></header>;
}

export function Footer() {
  return <footer className="site-footer"><Link className="brand" href="/"><span className="brand-mark">P</span><span>PocketTech <b>Guide</b></span></Link><div className="footer-links"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/affiliate-disclosure">Disclosure</Link></div><span>© 2026 PocketTech Guide</span></footer>;
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return <article className={`article-card ${featured ? "featured" : ""}`}><Link href={`/articles/${article.slug}`} className={`article-visual ${article.visual}`} aria-label={`Read ${article.title}`}><Image src={`/images/articles/${article.slug}.png`} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" className="article-cover" /></Link><div className="article-content"><p className="card-category">{article.category}<span>•</span>{article.readTime}</p><h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><Link className="text-link" href={`/articles/${article.slug}`}>Read article <span aria-hidden="true">→</span></Link></div></article>;
}
