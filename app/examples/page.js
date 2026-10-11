import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';

export const metadata = pageMetadata(
  "/examples",
  "AI Drama Ad Examples: AI-Generated Video Ads for Brands",
  "Watch AI-generated video ad examples for jewelry, watch and fashion brands. Short drama concepts made for TikTok, Reels and Shorts."
);

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Creative directions</div>
        <h1>AI-Generated Video Ad Examples</h1>
        <p className="lead">Watch examples of AI-generated video ads through three 20-second spec concepts: a ring reveal, a watch reveal and a ballroom story. These creative directions show how jewelry, watch and fashion brands can use short drama for TikTok, Reels and Shorts. Tap a video to play with sound.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid showBreakdown />
        <p className="editorial source-notes">These are spec concepts, not commissioned client campaigns or sales case studies. The notes explain the creative structure and what to review when adapting it to a real product.</p>
      </div>
    </section>
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
