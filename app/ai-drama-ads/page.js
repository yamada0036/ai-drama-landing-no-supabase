import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import CaseGrid from '../../components/CaseGrid';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-drama-ads',
  'AI Drama Ads for Jewelry & Watch Brands | Moon Ocean Studio',
  'AI drama ads that put jewelry and watches in the plot. Moon Ocean Studio produces short-form story ads for ecommerce brands on TikTok, Reels and Shorts.'
);

const delivery = [
  ['Script and product placement', 'One story, approved before generation.'],
  ['Vertical cut', '15–30 seconds, 9:16.'],
  ['Product detail checks', 'Against brand references.'],
  ['Versions', 'As quoted: hooks, captions, textless.'],
  ['Revisions', 'Written rounds and a named approver.'],
  ['Not included unless quoted', 'Extra SKUs, a new story direction after approval, media buying.']
];

const faqs = [
  { question: 'What is an AI drama ad?', answer: 'An AI drama ad is a short scripted brand video. Characters and a compact conflict carry the story, and the product has a role in the action or the reveal. It can be one film or the first episode of a series.' },
  { question: 'How do drama ads compare with UGC ads?', answer: 'UGC usually demonstrates the product or quotes a user. Drama uses a fictional situation. Neither format is automatically better for sales. Compare them with the same product, offer and objective.' },
  { question: 'What should a first project include?', answer: 'One product, one story and a written scope: script, product placement, runtime, versions, review stages and revision rounds. Extra hooks or formats belong in the quote.' },
  { question: 'How is pricing set?', answer: 'Price follows scenes, product checks, versions and revisions, not runtime alone. The cost guide explains the factors. Ask for a scoped quote before production.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Commercial hub · jewelry, watches, fashion</div>
      <h1>AI Drama Ads for Jewelry & Watch Brands</h1>
      <p className="lead">Moon Ocean Studio produces AI drama ads for ecommerce jewelry, watch and fashion brands: short vertical stories where the product plays a role in the hook, conflict or reveal. Use this page to scope a first pilot. Open the jewelry, TikTok and watch pages when you need category or platform depth.</p>
      <div className="actions">
        <Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link>
        <Link className="btn secondary" href="/watch/the-ring-reveal">Watch The Ring Reveal</Link>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><div className="eyebrow">What makes it a drama ad?</div><h2>A product with a role in the plot.</h2></div>
      <div className="editorial">
        <p>AI drama ads combine fictional characters, a compact conflict and a product moment. The story gives viewers a reason to follow. A recognizable product and a clear next step connect that attention to the campaign.</p>
        <p>Use a short drama when you have an emotional situation worth testing. Use a demonstration when shoppers mainly need fit, sizing or how the product works. Test the choice rather than assuming entertainment will convert.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="eyebrow">Categories</div>
      <h2>Jewelry, watches, handbags.</h2>
      <div className="grid">
        <article className="card">
          <h3>Jewelry</h3>
          <p>A ring can mark a decision. A necklace can be a gift with meaning. Stone, metal, setting and scale need their own checklist.</p>
          <p><Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link></p>
        </article>
        <article className="card">
          <h3>Watches</h3>
          <p>A watch can signal a promise, a deadline or a change in status. Plan a readable close-up of the dial, strap and brand marks.</p>
          <p><Link href="/watch/the-watch-reveal">Watch The Watch Reveal</Link></p>
        </article>
        <article className="card">
          <h3>Handbags and fashion</h3>
          <p>A bag can be part of a gift, a discovery or an identity reveal. Keep shape, hardware and logo readable while the character uses it.</p>
          <p><Link href="/watch/the-ballroom-twist">Watch The Ballroom Twist</Link></p>
        </article>
      </div>
    </div></section>

    <section id="examples" className="section"><div className="container">
      <div className="eyebrow">Spec concepts</div>
      <h2>Three films. One job each.</h2>
      <p className="lead">These are Moon Ocean Studio spec concepts. They show story structure and a product moment. They are not client campaigns, and views do not establish return on ad spend.</p>
      <CaseGrid />
      <p className="editorial">Open <Link href="/examples">AI drama ad examples</Link> for the index, or plan <Link href="/branded-short-drama">a branded short drama series</Link> when one film is not the whole job.</p>
    </div></section>

    <section className="section"><div className="container">
      <h2>What a first pilot delivers.</h2>
      <div className="table-scroll" role="region" aria-label="Pilot delivery scope" tabIndex={0}>
        <table className="content-table">
          <caption>Typical first pilot. The written quote is the scope that counts.</caption>
          <thead><tr><th scope="col">Deliverable</th><th scope="col">Typical first pilot</th></tr></thead>
          <tbody>{delivery.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>When drama is the wrong tool.</h2></div>
      <div className="editorial">
        <ul className="clean">
          <li>Shoppers need fit, sizing or a how-to more than an emotional situation.</li>
          <li>The offer or the landing page is unclear. A story will not repair a broken funnel.</li>
          <li>You cannot supply readable product references for close-ups.</li>
          <li>You need dozens of thin UGC-style variants immediately. That is a different production model.</li>
        </ul>
        <p>If the question is cost, read <Link href="/guides/ai-drama-ad-cost">how much an AI drama ad costs</Link>. If the question is which format to buy, read <Link href="/guides/testing-short-drama-ads">drama ads vs UGC</Link>.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Where to go next.</h2>
      <RelatedLinks links={[
        ['/ai-jewelry-video-ads', 'Jewelry fidelity and story ideas'],
        ['/tiktok-ai-drama-ads', 'TikTok pilot specs and hook matrix'],
        ['/watch/the-ring-reveal', 'Watch The Ring Reveal'],
        ['/guides/ai-drama-ad-cost', 'AI drama ad cost factors'],
        ['/guides/testing-short-drama-ads', 'Drama vs UGC test design'],
        ['/branded-short-drama', 'Series and multi-episode work'],
        ['/ai-short-drama-ads', 'Production process and brief']
      ]} />
    </div></section>

    <section className="section"><div className="container">
      <h2>Questions brands ask.</h2>
      <BuyerFAQ items={faqs} />
      <p className="editorial">Format comparison: <Link href="/guides/testing-short-drama-ads">testing short drama ads vs UGC</Link>. Price factors: <Link href="/guides/ai-drama-ad-cost">AI drama ad cost</Link>.</p>
    </div></section>

    <section className="section"><div className="container cta">
      <h2>What story could your product tell?</h2>
      <p className="lead">Share the product, the audience and the goal. We will reply with three drama directions and a written scope outline.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
