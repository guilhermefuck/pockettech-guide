const guides = [
  { category: "Buying guides", title: "Best budget smartphones worth buying in 2026", description: "The features that matter, the trade-offs to avoid, and the phones we would shortlist first.", tone: "coral" },
  { category: "Phone tips", title: "How to make your phone battery last longer", description: "Practical settings that save power without making your phone frustrating to use.", tone: "blue" },
  { category: "Explainers", title: "What does a flagship phone really get you?", description: "A clear look at cameras, screens, performance, and whether the upgrade is worthwhile.", tone: "yellow" },
];

export default function Home() {
  return <main>
    <nav className="site-nav" aria-label="Main navigation"><a className="brand" href="#top" aria-label="PocketTech Guide home"><span className="brand-mark">P</span><span>PocketTech <b>Guide</b></span></a><div className="nav-links"><a href="#guides">Buying guides</a><a href="#tips">Phone tips</a><a href="#about">About</a></div></nav>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">TECH MADE CLEAR</p><h1>Find the right tech <em>without</em> the noise.</h1><p className="hero-text">Friendly buying guides, phone tips, and honest explainers for people who want technology to simply work.</p><a className="button" href="#guides">Explore the guides <span aria-hidden="true">→</span></a></div><div className="hero-art" aria-hidden="true"><div className="sun" /><div className="phone"><div className="camera" /><div className="phone-screen"><span>PT</span><i /><b /></div></div><div className="spark one">✦</div><div className="spark two">✦</div></div></section>
    <section className="latest" id="guides"><div className="section-heading"><div><p className="eyebrow">START HERE</p><h2>Useful reads, not endless specs.</h2></div><a href="#about">See all articles <span aria-hidden="true">→</span></a></div><div className="guide-grid">{guides.map((guide, index) => <article className="guide-card" key={guide.title} id={index === 1 ? "tips" : undefined}><div className={`card-visual ${guide.tone}`}><span>{index === 0 ? "⌁" : index === 1 ? "☼" : "✦"}</span></div><p className="card-category">{guide.category}</p><h3>{guide.title}</h3><p>{guide.description}</p><a href="#about" aria-label={`Read ${guide.title}`}>Read guide <span aria-hidden="true">→</span></a></article>)}</div></section>
    <section className="promise" id="about"><p className="eyebrow">OUR PROMISE</p><h2>We make recommendations like we are helping a friend spend their own money.</h2><p>No jargon, no hype, and no pretending every new gadget is essential.</p></section>
    <footer><span>© 2026 PocketTech Guide</span><span>Simple tech decisions start here.</span></footer>
  </main>;
}
