import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contact PocketTech Guide with feedback or corrections." };

export default function ContactPage() {
  return <main className="article-page"><header><p className="eyebrow">CONTACT</p><h1>Help us make the guide more useful.</h1><p className="article-dek">Found an error, have a topic suggestion, or want to share feedback? We would like to hear from you.</p></header><div className="article-body"><h2>Article corrections and suggestions</h2><p>For now, the best way to get in touch is through the project’s GitHub repository. Please include the article URL and a short explanation so we can review it quickly.</p><p><a className="text-link" href="https://github.com/guilhermefuck/pockettech-guide/issues" target="_blank" rel="noreferrer">Open the PocketTech Guide feedback page →</a></p><h2>Our response standard</h2><p>We review factual corrections and useful suggestions. A reader’s experience can reveal an important detail, but recommendations are updated only after we verify the information independently.</p></div></main>;
}