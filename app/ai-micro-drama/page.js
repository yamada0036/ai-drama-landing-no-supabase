import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-micro-drama',
  'What Is an AI Micro Drama? | Moon Ocean Studio',
  'An AI micro drama is a very short scripted story, often under a minute. Moon Ocean Studio builds them as vertical ads for ecommerce brands.'
);

const faqs = [
  { question: 'How long is an AI micro drama?', answer: 'For a brand ad, usually 15–60 seconds. Long enough for a hook, a turn and a product beat. Not a multi-minute episode unless that runtime is quoted.' },
  { question: 'Is a micro drama the same as a product demo?', answer: 'No. A demo shows how the item works. A micro drama gives the item a role in a short fictional situation. Use a demo when shoppers need fit or function.' },
  { question: 'What do you need from me to make one?', answer: 'A product, the audience, and the outcome you want to learn. Photos or a URL are enough to start story directions. Production needs references, an approved script and a written scope.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Same-lane format</div>
      <h1>What Is an AI Micro Drama and How Do You Make One?</h1>
      <p className="lead">An AI micro drama is a very short scripted story, often under a minute, produced with AI-assisted video. Moon Ocean Studio makes them as vertical ads for ecommerce brands, where a product plays a role in the hook, conflict or reveal.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/watch/the-ring-reveal">Watch The Ring Reveal</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>A micro drama is a complete beat, not a clip dump.</h2></div>
      <div className="editorial">
        <p>The useful version has a beginning, a turn and an end. Someone wants something. The product changes the situation or becomes the thing the viewer recognizes. Then the film asks for a next step, or it stops because the test is about attention only. Say which one in the brief.</p>
        <p>A stack of pretty shots with a logo at the end is a montage. It can be useful, but it is not the format this page describes. If you need a longer world with recurring people, that is a <Link href="/branded-short-drama">branded short drama series</Link>, built from a pilot rather than assumed on day one.</p>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>How Moon Ocean makes one.</h2></div>
      <div className="editorial">
        <ol className="clean">
          <li>You send the product, the audience and the question the ad should help you learn.</li>
          <li>We reply with story directions. You pick one situation, not three films at once, unless the quote says otherwise.</li>
          <li>Script and product placement are approved before generation. The piece has a planned moment, early or late.</li>
          <li>References lock faces, wardrobe and the product details that must survive the cut.</li>
          <li>You receive the vertical versions named in the quote, then test them apart from the production invoice.</li>
        </ol>
        <p>The step-by-step production page is <Link href="/ai-short-drama-ads">how AI short drama ads are produced</Link>. If you already have a script, start at <Link href="/ai-short-drama">creating an AI short drama from a script</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>Where this fits for ecommerce.</h2></div>
      <div className="editorial">
        <p>Jewelry, watches and fashion are the work we show. A ring can be the decision. A watch can be the argument. A fashion moment can be the turn. Those are hypotheses, not case studies. The films on this site are spec concepts.</p>
        <p>See <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link> for product checks, and <Link href="/tiktok-ai-drama-ads">TikTok AI drama ads</Link> for 9:16 specs. Price factors live in <Link href="/guides/ai-drama-ad-cost">the cost guide</Link>, not as a rate card on this page.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about AI micro drama.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-drama-studio', 'What an AI drama studio does'],
        ['/microdrama-maker', 'Microdrama maker vs a studio'],
        ['/ai-drama-ads', 'AI drama ads for jewelry and watches'],
        ['/examples', 'AI drama ad examples'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Start with the product, not a blank prompt.</h2>
      <p className="lead">Send a photo or a URL. We will reply with three micro-drama directions and what a first pilot would need to include.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
