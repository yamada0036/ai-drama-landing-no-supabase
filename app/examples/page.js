import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/examples',
  'AI Drama Ad Examples | Moon Ocean Studio',
  'Three Moon Ocean Studio spec concepts: The Ring Reveal, The Watch Reveal and The Ballroom Twist. Open a watch page to play one video.'
);

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Creative directions</div>
      <h1>AI Drama Ad Examples for Brands</h1>
      <p className="lead">Three 20-second spec concepts. Open a watch page to play one film. Each card is an index entry, not a case study. They show a hook, a product moment and a short-form shape for TikTok, Reels and Shorts.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
    <section className="section"><div className="container">
      <CaseGrid />
      <p className="editorial source-notes">Spec concepts, not commissioned client campaigns. Views on these cuts do not establish purchases or return on ad spend. Product-fidelity checks for a real ring or necklace are on <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>.</p>
      <RelatedLinks links={[
        ['/watch/the-ring-reveal', 'Watch The Ring Reveal'],
        ['/watch/the-watch-reveal', 'Watch The Watch Reveal'],
        ['/watch/the-ballroom-twist', 'Watch The Ballroom Twist'],
        ['/ai-drama-ads', 'AI drama ads for jewelry and watches'],
        ['/guides/ai-drama-ad-cost', 'AI drama ad cost'],
        ['/tiktok-ai-drama-ads', 'TikTok AI drama ads']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Want your product in the story?</h2>
      <p className="lead">Send a product link or photo and we will suggest three story directions.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
