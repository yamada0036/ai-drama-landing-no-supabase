import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';

export const metadata = {
  title:'AI Drama Ad Examples',
  description:'Watch three 20-second AI drama spec concepts: a ring reveal, a watch reveal and a ballroom plot twist.',
  alternates:{ canonical:'/examples' }
};

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Creative directions</div>
        <h1>AI Drama Ad Examples</h1>
        <p className="lead">Watch three 20-second spec concepts: two product-led reveals and a story-first brand moment. Tap a video to play with sound.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid showBreakdown />
        <p className="editorial source-notes">These are spec concepts, not commissioned client campaigns or sales case studies. The notes explain the creative structure and what to review when adapting it to a real product.</p>
      </div>
    </section>
    <section className="section"><div className="container two-col"><div><h2>What a product review should compare.</h2></div><div className="editorial"><p>For a commissioned ad, review the supplied product photos beside the proposed close-up and final scene. Check shape, color, stones, dial details, hardware and logos, as relevant to the item.</p><p>These concepts do not include a customer product-reference comparison. A recognizable story prop alone does not prove that a specific item has been reproduced accurately.</p><p>See the <Link href="/ai-short-drama-ads#brief">product brief and approval checklist</Link>, then define the <Link href="/guides/ai-drama-ad-cost">versions and revision scope</Link> in your quote.</p></div></div></section>
    <section className="section">
      <div className="container cta">
        <h2>Want your product in the story?</h2>
        <p className="lead">Send us a product link or photo and we’ll suggest three story directions.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
  </main>
}
