import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/vertical-drama',
  'Cinematic Vertical Drama Without a Crew | Moon Ocean',
  'How to make cinematic vertical drama without a film crew: 9:16 framing, a written scene, and approvals. Moon Ocean Studio produces the cut for ecommerce brands.'
);

const faqs = [
  { question: 'Do I need a film crew on set?', answer: 'Not for this production model. You still need a script, references and a person who can approve the cut. No crew does not mean no decisions.' },
  { question: 'Why shoot the story vertical instead of cropping later?', answer: 'The hook, the product and the faces have to fit a phone frame from the first shot. Cropping a wide scene hides the thing you meant to show.' },
  { question: 'What still has to be approved if nobody is on set?', answer: 'The script, the product moment, character references, and the named exports. Those approvals replace the on-set call sheet.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">9:16 · no on-set crew</div>
      <h1>How to Make Cinematic Vertical Drama Without a Crew</h1>
      <p className="lead">You make cinematic vertical drama without a crew by writing the scene for a phone frame, locking references, and reviewing the cut. Moon Ocean Studio produces that film for ecommerce brands. The camera crew is gone. The approvals are not.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/tiktok-ai-drama-ads">TikTok Specs</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>Vertical is a writing choice.</h2></div>
      <div className="editorial">
        <p>A 9:16 frame holds one idea at a time: a face, a hand, a product, a line. Two people arguing across a wide room often become a stack of close-ups. Plan those close-ups. Do not film a widescreen scene and hope the crop finds the ring.</p>
        <p>Cinematic here means deliberate light, wardrobe and shot order, not a theatrical runtime. Most pilots are 15–30 seconds. Go longer only when the story and the quote both say so. Platform defaults are listed on <Link href="/tiktok-ai-drama-ads">TikTok AI drama ads</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>What replaces the crew.</h2>
      <div className="table-scroll" role="region" aria-label="Crew replacements" tabIndex={0}>
        <table className="content-table">
          <caption>Someone still owns each row. Name them in the brief.</caption>
          <thead><tr><th scope="col">On a set</th><th scope="col">On this kind of job</th></tr></thead>
          <tbody>
            <tr><th scope="row">Director</th><td>An approved script and shot order before generation.</td></tr>
            <tr><th scope="row">Camera and art</th><td>References for faces, wardrobe, location and the product.</td></tr>
            <tr><th scope="row">Continuity</th><td>A review of every selected shot. See <Link href="/consistent-characters">consistent characters</Link>.</td></tr>
            <tr><th scope="row">Product stylist</th><td>Photos and a written check for the SKU. Jewelry uses <Link href="/ai-jewelry-video-ads">the jewelry checklist</Link>.</td></tr>
            <tr><th scope="row">Editor</th><td>The versions in the quote: captions, textless, alternate hooks.</td></tr>
          </tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>A first vertical without a location permit.</h2></div>
      <div className="editorial">
        <p>Pick one situation that fits a phone. A confrontation, a gift, a decision. Put the product where a thumb will not cover it and where the viewer can tell what it is. Agree the ending.</p>
        <p>If you already wrote pages for a wide frame, read <Link href="/script-to-episode">script to episode</Link> and cut to the minute that matters. The production path is <Link href="/ai-short-drama-ads">how AI short drama ads are produced</Link>. Examples of the shape are <Link href="/watch/the-ring-reveal">The Ring Reveal</Link>, <Link href="/watch/the-watch-reveal">The Watch Reveal</Link> and <Link href="/watch/the-ballroom-twist">The Ballroom Twist</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about vertical drama.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/tiktok-ai-drama-ads', 'TikTok AI drama ads'],
        ['/ai-short-drama', 'AI short drama from a script'],
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/guides/ai-drama-ad-cost', 'AI drama ad cost'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Describe the scene. We will frame it vertical.</h2>
      <p className="lead">Send the product and the situation. We will reply with three vertical directions and what has to be approved before production.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
