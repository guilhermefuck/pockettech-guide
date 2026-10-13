import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/components/site";

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };

const articleContent: Record<string, { intro: string; sections: Section[] }> = {
  "make-phone-battery-last": {
    intro: "A longer-lasting battery is usually about small, sensible changes — not obsessively closing apps or turning every useful feature off. Start with the settings that make the biggest difference, then build habits that protect battery health over time.",
    sections: [
      { heading: "Start with the screen", paragraphs: ["Your display is often the biggest drain on a phone battery. Lowering brightness when you are indoors and using adaptive brightness are easy wins. If your phone has a high refresh-rate option, choose a standard or adaptive setting when smooth scrolling is not important to you.", "Set a shorter screen timeout too. A screen that stays awake for two minutes at a time quietly uses far more power than most people expect."] },
      { heading: "Use power-saving mode strategically", paragraphs: ["Battery Saver or Low Power Mode is useful before your battery is critical. Turn it on for long travel days, concerts, or whenever you know you will be away from a charger. It typically limits background activity, visual effects and some syncing — changes most people barely notice.", "You do not need to leave it enabled all day, every day. Think of it as a tool for extending the time between charges when it matters."] },
      { heading: "Review the apps working in the background", paragraphs: ["Open your battery settings once a week and look for an app using much more power than expected. Social, video and navigation apps can be demanding, but an unfamiliar app near the top of the list deserves a closer look.", "Restrict background refresh for apps you rarely need immediately. Keep messaging, maps and essential services available; limit the rest."] },
      { heading: "Protect long-term battery health", paragraphs: ["Lithium-ion batteries naturally lose capacity over time, but heat is the main thing you can control. Avoid leaving your phone in a hot car, under a pillow while charging, or in direct sunlight for long periods.", "Fast charging is convenient, and it is fine to use when you need it. For routine overnight charging, a slower charger can create less heat. If your phone offers an optimized charging feature, enable it."] },
      { heading: "The simple checklist", paragraphs: ["Start with these steps before buying a battery pack or replacing your phone."], bullets: ["Use adaptive brightness and a shorter screen timeout.", "Enable power-saving mode before the battery becomes urgent.", "Limit background activity for non-essential apps.", "Keep your phone out of excessive heat.", "Install software updates, which can improve power management."] },
    ],
  },
  "android-vs-iphone": {
    intro: "The best phone is not the one with the longest specification sheet. It is the one that fits the devices you own, the way you communicate and the amount of control you want over your technology.",
    sections: [
      { heading: "Choose the ecosystem you already use", paragraphs: ["If your household uses Macs, iPads, AirPods or an Apple Watch, an iPhone can make sharing, messaging and setup feel seamless. If you use Windows, Google services, a wide variety of smart-home products or different device brands, Android usually offers more choice without asking you to stay within one company.", "Neither direction is automatically better. The goal is to reduce friction in the devices you already use."] },
      { heading: "Android offers more choice", paragraphs: ["Android phones come in far more shapes, sizes and price points. You can find compact phones, folding phones, excellent budget models and devices focused on photography or gaming. Android also gives you more freedom to customize your home screen, default apps and file handling.", "The trade-off is that the experience varies by manufacturer. Compare software-update promises and support quality for the exact model you are considering."] },
      { heading: "iPhone favors consistency", paragraphs: ["iPhones have a more consistent interface across models, and the setup is straightforward for people who do not want to adjust many settings. Accessories are easy to find, and many people value the predictable experience when moving from one iPhone to another.", "The trade-off is less flexibility. You have fewer hardware choices and less freedom to change how the system behaves."] },
      { heading: "Compare the costs you will actually pay", paragraphs: ["Do not compare only the launch price. Look at storage capacity, case and charger needs, trade-in value, repair options and how long the manufacturer promises to support the model. A phone that costs more but works well for several years can be better value than a cheap phone you want to replace quickly.", "If you are switching platforms, include the cost of replacing accessories that no longer work as well with your new phone."] },
      { heading: "A practical decision rule", paragraphs: ["Choose an iPhone if you want a simple, consistent experience and already use Apple devices. Choose Android if you want more price options, hardware variety or customization. If neither ecosystem matters to you, compare individual phones on camera, battery, size, software support and total cost — not the logo on the back."] },
    ],
  },
  "refurbished-phone-guide": {
    intro: "A refurbished phone can be one of the best-value technology purchases you make. The key is buying from a seller that clearly explains condition, battery policy, warranty and returns — and avoiding deals that are only cheap because the risks are hidden.",
    sections: [
      { heading: "Refurbished is not the same as used", paragraphs: ["A used phone is usually sold as-is by its previous owner. A refurbished phone should have been inspected, tested and prepared for resale by a retailer, carrier or specialist. The exact standard varies, which is why the seller matters as much as the phone model.", "Read the condition grade carefully. Cosmetic marks may be acceptable, but vague language about functionality is a warning sign."] },
      { heading: "Check the battery policy first", paragraphs: ["Battery health is the most important question on an older phone. Look for a stated minimum battery capacity, a replacement policy or the option to return the phone if the battery does not meet expectations.", "A lower price is not a bargain if you need a battery replacement soon after buying. If the seller says nothing about battery condition, ask before ordering."] },
      { heading: "Buy from a seller with real protection", paragraphs: ["Prioritize a clear warranty and a no-hassle return period. Read what the warranty covers, how long it lasts and who pays return shipping. Major retailers, manufacturer-refurbished stores and established specialist resellers are generally safer than anonymous marketplace listings.", "Keep a copy of the listing and test the phone immediately when it arrives: cameras, speakers, charging, Wi-Fi, mobile signal, buttons and biometric unlock."] },
      { heading: "Choose a model with years left", paragraphs: ["A refurbished phone is only good value if it will receive security updates and run the apps you need for a reasonable time. Check the manufacturer’s support policy for the exact model, not just the brand.", "For most people, a model that is one to three years old is the comfortable sweet spot: it is meaningfully cheaper than new but not close to the end of software support."] },
      { heading: "When refurbished makes sense", paragraphs: ["A refurbished phone is a strong choice if you want a better camera, display or build quality than your new-phone budget allows. It is less attractive if you need the very latest features, a maximum-length warranty or a model with a specific new-only promotion.", "Buy the condition and seller first, then the specification. That order prevents most expensive mistakes."] },
    ],
  },
  "best-budget-smartphones": {
    intro: "A good budget phone is not the cheapest phone on the shelf. It is the one that handles the everyday tasks you care about, has enough storage, receives updates for a reasonable time and does not create an expensive frustration six months later.",
    sections: [
      { heading: "Set a realistic budget", paragraphs: ["Start by deciding what you can spend including a case, screen protector and any charger you may need. The lowest-priced models can be perfectly suitable for calls, messages and maps, but a modest step up often buys noticeably better battery life, storage and software support.", "Avoid paying extra for a headline feature you will not use. A slightly better battery and a longer support promise usually matter more than a camera specification on a product page."] },
      { heading: "Prioritize the basics you notice every day", paragraphs: ["Look for enough storage for your photos, apps and offline downloads. For many people, 128GB is a more comfortable starting point than a smaller option. Check whether the phone supports expandable storage if you keep a large media library.", "Read independent reviews for battery life, call quality and outdoor screen brightness. These are often more meaningful than benchmark scores in daily use."] },
      { heading: "Check software support before you buy", paragraphs: ["The exact model matters. Manufacturers make different update commitments across their budget, mid-range and flagship phones. Check how many years of security updates are promised from the phone’s release date, then factor in how long it has already been on sale.", "A discounted older model can be good value, but only if it still has enough supported life left for your plans."] },
      { heading: "Treat the camera honestly", paragraphs: ["Most current budget phones can take pleasant photos in good daylight. Low-light performance, moving subjects and video quality are where the differences become clearer. Look at sample photos from reviewers rather than relying on megapixel counts.", "If photography is important to you, it can be smarter to buy a well-supported refurbished mid-range phone than a new entry-level phone."] },
      { heading: "The quick buying checklist", paragraphs: ["Before checking out, confirm these five things:"], bullets: ["Enough storage for how you use your phone.", "Battery life that suits a full day.", "A clear software and security-update policy.", "Network compatibility with your carrier.", "A return policy that lets you test it properly."] },
    ],
  },
  "phone-storage-explained": {
    intro: "Storage is easy to overlook when buying a phone, but it shapes how long the device remains comfortable to use. The right amount is not about having the biggest number; it is about leaving enough room for your habits and the future.",
    sections: [
      { heading: "What uses phone storage", paragraphs: ["Photos and video are usually the biggest space users, especially if you record in high resolution. Messaging apps can quietly accumulate years of images, voice notes and videos. Games, offline music, maps and downloaded shows also add up quickly.", "System files and preinstalled apps already use some of the storage you see on the box, so usable space will always be lower than the advertised number."] },
      { heading: "Who can live with 128GB", paragraphs: ["128GB works well for many people who stream most of their media, regularly back up photos and do not install many large games. It is a comfortable baseline for a new phone when you want room to grow without thinking about storage every week.", "If you currently manage storage warnings often, do not buy the same capacity again just because it is cheaper."] },
      { heading: "When 256GB is worth it", paragraphs: ["Choose 256GB if you take lots of photos and videos, travel without reliable internet, download media for offline use or plan to keep the phone for several years. It can also be a better choice for parents who share devices with children or anyone who uses large creative apps.", "Paying more for storage at purchase is often cheaper and easier than changing phones early because it is full."] },
      { heading: "Use cloud storage thoughtfully", paragraphs: ["Cloud backup is useful protection against loss or damage, but it is not a substitute for enough local space. Check whether your preferred photo service charges after a limited free tier and include that recurring cost in your decision.", "A simple habit helps: turn on automatic backup, then occasionally remove duplicate downloads, old offline maps and unused apps."] },
      { heading: "A simple decision", paragraphs: ["Choose 128GB for moderate everyday use with regular backups. Choose 256GB if you take a lot of media, use demanding apps or want to keep the phone longer. Choose more only when you know your work or creative projects genuinely require it."] },
    ],
  },
  "upgrade-your-phone": {
    intro: "A new phone is exciting, but an upgrade is most valuable when it fixes a real problem. Use these signs to decide whether to replace your device now, repair it, or keep it for another year.",
    sections: [
      { heading: "Security support is ending", paragraphs: ["When a phone no longer receives security updates, that is the strongest reason to move on. Updates protect your information and help important apps continue to work reliably. Check the manufacturer’s support page for your exact model rather than guessing based on its age.", "If support is ending soon, you have time to compare options calmly instead of replacing the phone in a rush."] },
      { heading: "The battery no longer fits your day", paragraphs: ["A battery that needs repeated charging, shuts down unexpectedly or becomes unusually hot can make a phone stressful to rely on. First, check battery health and the cost of a replacement. A repair may be far better value than buying a new device.", "Upgrade when a repair is impractical, the phone has other major problems, or the overall experience is holding you back every day."] },
      { heading: "Essential apps or features no longer work well", paragraphs: ["Slow performance is not automatically a reason to upgrade. Freeing storage, updating the software or replacing a worn battery can help. But if your banking app, navigation, accessibility feature or work tool no longer runs reliably, an upgrade can be justified.", "Focus on the functions you use most, not on features that look impressive in advertising."] },
      { heading: "Repair costs are no longer sensible", paragraphs: ["A cracked screen or charging-port problem can be worth repairing on a well-supported phone. Compare the repair quote with the value of a reliable refurbished or new replacement, and consider whether the device has other aging parts.", "If one repair would restore a phone you otherwise like, repairing is often the more sustainable and economical choice."] },
      { heading: "You need something your phone cannot provide", paragraphs: ["Sometimes an upgrade is straightforward: you need better low-light photos for work, more storage for a creative project, reliable dual-SIM support or accessibility features your device lacks. Write down the one or two problems you need to solve, then compare phones against that list.", "A clear reason makes it easier to avoid paying for unnecessary extras."] },
    ],
  },

};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = articles.find((item) => item.slug === slug);
    return {
      title: article ? `${article.title} | PocketTech Guide` : "Article | PocketTech Guide",
      description: article?.description,
    };
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  const content = articleContent[slug] ?? {
    intro: "Choosing technology should feel straightforward. This guide focuses on the things you will notice in real life, so you can make a decision with confidence.",
    sections: [
      { heading: "Start with what you need", paragraphs: ["Before comparing features, think about the moments when you reach for your phone most. A good choice should make those moments easier — without asking you to pay for features that do not fit your routine."] },
      { heading: "Look past the headline", paragraphs: ["Specifications can be helpful, but they rarely tell the whole story. We weigh them against battery life, software support, comfort and long-term value."] },
    ],
  };

  const sectionPath = article.category === "Buying guides" || article.category === "Explainers" ? "guides" : article.category === "Comparisons" ? "comparisons" : "phone-tips";

  return <main className="article-page">
    <Link className="back-link" href={`/${sectionPath}`}>← Back to {article.category}</Link>
    <header>
      <p className="eyebrow">{article.category} <span>•</span> {article.readTime}</p>
      <h1>{article.title}</h1>
      <p className="article-dek">{article.description}</p>
    </header>
    <div className={`article-hero ${article.visual}`}><span>{article.category === "Comparisons" ? "↔" : article.category === "Phone tips" ? "✦" : "⌁"}</span></div>
    <div className="article-body">
      <p>{content.intro}</p>
      {content.sections.map((section) => <section key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
      </section>)}
      <p className="article-disclosure">PocketTech Guide may earn a commission when readers buy through selected links. This never changes our editorial recommendations.</p>
    </div>
  </main>;
}
