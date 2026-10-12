import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';
import BuyerFAQ from '../../components/BuyerFAQ';

export const metadata = pageMetadata(
  "/examples",
  "AI Drama Ad Examples: AI-Generated Video Ads for Brands",
  "Watch AI-generated video ad examples for jewelry, watch and fashion brands. Short drama concepts made for TikTok, Reels and Shorts."
);

const faqs = [
  { question: 'Are these real AI-generated video ad examples from clients?', answer: 'No. All three are spec concepts made to show story structure and product moments. They are not commissioned campaigns, and we do not present them as sales case studies.' },
  { question: 'What makes these AI drama ads instead of regular product videos?', answer: 'Each example uses characters, conflict and a reveal. The product has a role in the plot, such as a ring on paperwork or a watch in an argument, rather than appearing only as a product shot.' },
  { question: 'How much do AI video ads like these cost?', answer: 'Price depends on length, scenes, product references, versions and revision scope. See our AI drama ad cost guide for the factors that change a quote, then send your brief for a scoped estimate.' },
  { question: 'Can you make AI jewelry video ads with my exact product?', answer: 'Yes, starting from your product photos and references. Before production we agree how the ring, necklace or watch appears, and you review stones, metal, setting, dial and logos against your images.' },
  { question: 'Should I test drama ads against UGC ads?', answer: 'You can. Use the same product, offer and objective for both so the comparison is fair. Our guide on testing short drama ads vs UGC explains how to set up the test.' }
];

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Creative directions</div>
        <h1>AI Drama Ad Examples for Brands</h1>
        <p className="lead">These AI drama ad examples are three 20-second spec concepts made by Moon Ocean Studio to show how AI-generated video ads can turn a ring, a watch or a brand moment into a short story. Each one opens on conflict, gives the product a role in the plot and is built for TikTok, Reels and Shorts. They are creative directions, not client campaigns. Tap a video to play with sound.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid showBreakdown />
        <p className="editorial source-notes">These are spec concepts, not commissioned client campaigns or sales case studies. The notes explain the creative structure and what to review when adapting it to a real product.</p>
      </div>
    </section>
    <section className="section"><div className="container"><h2>Inside each AI drama ad example.</h2><div className="editorial">
      <h3>The Ring Reveal</h3>
      <p>The Ring Reveal is a jewelry spec concept. The hook comes straight from the opening conflict: a divorce conversation that sets the emotional stakes within the first seconds. The product enters early, when a ring appears on the paperwork, and returns in a later close-up that makes the jewelry the visual focus of her decision. It runs about 20 seconds and is designed for TikTok, Instagram Reels and YouTube Shorts. See more <Link href="/ai-drama-ads">AI jewelry video ads</Link>.</p>
      <h3>The Watch Reveal</h3>
      <p>The Watch Reveal is a watch spec concept. It opens on a tense divorce conversation that turns into a demand for the watch, so the product is part of the conflict from the start. The wrist and watch become part of the exchange, and the final reveal carries the message: choose yourself. Like the other examples, it is a roughly 20-second concept for TikTok, Reels and Shorts.</p>
      <h3>The Ballroom Twist</h3>
      <p>The Ballroom Twist is a brand story spec concept. The hook is a formal ballroom encounter that creates tension between the characters, and the confrontation ends with an unexpected acquisition reveal. Jewelry is visible, but this concept demonstrates a story direction rather than a specific product. For a brand version, we would define the product's role and the moment viewers recognize it. It is a 20-second concept for TikTok, Reels and Shorts. Explore <Link href="/branded-short-drama">story-based ads and branded drama series</Link>.</p>
    </div></div></section>
    <section className="section"><div className="container"><h2>Questions about AI drama ad examples.</h2><BuyerFAQ items={faqs} /><p className="editorial">Read the <Link href="/guides/ai-drama-ad-cost">AI drama ad cost guide</Link> and <Link href="/guides/testing-short-drama-ads">how to test short drama ads vs UGC ads</Link>.</p></div></section>
    <section className="section"><div className="container two-col"><div><h2>What a product review should compare.</h2></div><div className="editorial"><p>For a commissioned ad, review the supplied product photos beside the proposed close-up and final scene. Check shape, color, stones, dial details, hardware and logos, as relevant to the item.</p><p>These concepts do not include a customer product-reference comparison. A recognizable story prop alone does not prove that a specific item has been reproduced accurately.</p><p>See the <Link href="/ai-short-drama-ads#brief">product brief and approval checklist</Link>, then define the <Link href="/guides/ai-drama-ad-cost">AI video ad pricing and revision scope</Link> in your quote.</p></div></div></section>
    <section className="section">
      <div className="container cta">
        <h2>Want your product in the story?</h2>
        <p className="lead">Send us a product link or photo and we’ll suggest three story directions.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
  </main>
}
