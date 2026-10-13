import Link from "next/link";
import { ArticleCard, articles } from "@/components/site";

export default function Home() {
  return <main>
    <section className="home-hero"><div><p className="eyebrow">SMART CHOICES. CLEAR ANSWERS.</p><h1>Technology made <em>practical.</em></h1><p className="hero-text">Smartphone guides, honest comparisons and useful tech advice for people who want to choose well and move on with their day.</p><div className="hero-actions"><Link className="button" href="/guides">Explore buying guides <span>→</span></Link><Link className="quiet-link" href="/about">Why PocketTech Guide?</Link></div></div><div className="hero-device" aria-hidden="true"><div className="device-orbit one" /><div className="device-orbit two" /><div className="device"><div className="device-camera" /><div className="device-screen"><span>PT</span><i /><b /></div></div><span className="device-star">✦</span></div></section>
    <section className="home-section"><div className="section-heading"><div><p className="eyebrow">START HERE</p><h2>Useful reads, not endless specs.</h2></div><Link className="text-link" href="/guides">Browse all guides <span>→</span></Link></div><div className="article-grid three-up">{articles.slice(0, 3).map((article) => <ArticleCard article={article} key={article.slug} />)}</div></section>
    <section className="mission-band"><p className="eyebrow">OUR EDITORIAL PROMISE</p><h2>We make recommendations like we are helping a friend spend their own money.</h2><p>Direct, independent and useful. No hype, no copied rankings, and no pressure to upgrade for the sake of it.</p><Link className="button light-button" href="/about">How we work <span>→</span></Link></section>
    <section className="home-section topic-section"><p className="eyebrow">FIND YOUR ANSWER</p><div className="topic-links"><Link href="/guides"><span>01</span><b>Buying guides</b><i>Make a confident choice →</i></Link><Link href="/comparisons"><span>02</span><b>Comparisons</b><i>See the real differences →</i></Link><Link href="/phone-tips"><span>03</span><b>Phone tips</b><i>Get more from your device →</i></Link></div></section>
  </main>;
}
