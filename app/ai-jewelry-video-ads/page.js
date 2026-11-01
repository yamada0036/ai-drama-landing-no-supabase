import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-jewelry-video-ads',
  'AI Jewelry Video Ads & Drama Ads | Moon Ocean Studio',
  'AI jewelry video ads that put your ring or necklace in the plot, not only the product shot. Short drama for TikTok, Reels and Shorts.'
);

const checks = [
  ['Stone layout and color', 'Count, cut and relative size must match the approved reference.'],
  ['Setting and metal', 'Prongs, bezel and band finish. Note whether the metal should read warm or cool under the scene light.'],
  ['On-hand or on-neck scale', 'Avoid oversized fantasy jewelry that breaks recognition of the real piece.'],
  ['Clasp and chain', 'For necklaces, thickness and clasp should stay readable in the gift or reveal beat.'],
  ['Logo or hallmark', 'Include one only when it is visible in the real photos and you need it for recognition.'],
  ['When the product appears', 'Early prop or late reveal can both work. Pick one hypothesis per test.'],
  ['CTA beat', 'After recognition, a clear next step: offer, collection or site visit. Agree it in the brief.']
];

const faqs = [
  { question: 'Can you match my exact ring or necklace?', answer: 'Yes, from your product photos and references. Before production we agree how the piece appears in each scene, and you review stones, metal, setting and scale against those images.' },
  { question: 'Is The Ring Reveal a paid client campaign?', answer: 'No. It is a Moon Ocean Studio spec concept that demonstrates story structure and a jewelry product moment.' },
  { question: 'How much do AI jewelry video ads cost?', answer: 'Price depends on scenes, product accuracy checks, versions and revisions, not runtime alone. The cost guide lists the factors. Then request a scoped quote.' },
  { question: 'Do you also make watch or handbag drama ads?', answer: 'Yes. The category overview covers jewelry, watches and fashion together. This page stays on jewelry.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Jewelry · product in the plot</div>
      <h1>AI Jewelry Video Ads Built Around the Product in the Plot</h1>
      <p className="lead">Moon Ocean Studio produces AI jewelry video ads where a ring, necklace or bracelet drives the hook, conflict or reveal. We write and deliver vertical drama creatives for ecommerce jewelry brands testing story-led ads on TikTok, Reels and Shorts.</p>
      <div className="actions">
        <Link className="btn primary" href="/contact">Get 3 Free Jewelry Story Ideas</Link>
        <Link className="btn secondary" href="/watch/the-ring-reveal">Watch The Ring Reveal</Link>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Why jewelry needs drama, not only demos.</h2></div>
      <div className="editorial">
        <p>Jewelry shoppers already understand what a ring or necklace is. What they need in the first three seconds is a reason to care. An AI jewelry drama ad uses a compact fictional situation so the piece becomes a decision, a gift with meaning, or a visual payoff, not a floating SKU.</p>
        <p>Use a demonstration when fit, clasp or sizing must be shown. Use drama when the emotional role of the piece is the hypothesis you want to test. Neither choice is a promise of sales. It is a creative bet you can compare against your current ads.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Product-in-plot checklist for rings and necklaces.</h2>
      <p className="lead">Lock these against your product photos before generation. A convincing scene that changes the stone layout is not a usable ad.</p>
      <div className="table-scroll" role="region" aria-label="Jewelry product checks" tabIndex={0}>
        <table className="content-table">
          <caption>Agree the checks in the brief, then review the cut against the same list.</caption>
          <thead><tr><th scope="col">Check</th><th scope="col">What must stay true</th></tr></thead>
          <tbody>{checks.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div>
        <div className="eyebrow">Spec concept</div>
        <h2>The Ring Reveal.</h2>
      </div>
      <div className="editorial">
        <p>A relationship confrontation turns into a choice of her own. The ring becomes the final visual reveal, about twenty seconds, 9:16. This is a spec concept, not a client sales case study.</p>
        <p>Watch the full cut on <Link href="/watch/the-ring-reveal">The Ring Reveal watch page</Link>. Browse the other directions on <Link href="/examples">AI drama ad examples</Link>.</p>
        <p>To adapt it, specify which SKU appears on the paperwork and which SKU appears in the close-up. Review stone, setting, metal and on-hand scale before production.</p>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>What a first jewelry pilot includes.</h2></div>
      <div className="editorial">
        <ul className="clean">
          <li>One SKU and one creative hypothesis, for example whether a decision reveal beats a demo for this collection.</li>
          <li>One 15–30 second vertical story, with script and product placement approved before generation.</li>
          <li>Character and product references, plus a written list of detail checks.</li>
          <li>Agreed versions, such as hook variants or captioned and textless exports, and named revision rounds.</li>
          <li>A production budget kept separate from the media budget used to test the ad.</li>
        </ul>
        <p>Scope and price factors are in <Link href="/guides/ai-drama-ad-cost">the AI drama ad cost guide</Link>. Category context for watches and handbags is on <Link href="/ai-drama-ads">AI drama ads for jewelry and watches</Link>.</p>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Jewelry drama vs jewelry UGC.</h2></div>
      <div className="editorial">
        <p>UGC often relies on try-on, unboxing or creator endorsement. Drama uses characters and conflict so the piece plays a role in the plot. Neither format is automatically better for sales.</p>
        <p>Compare them with the same product, offer and objective. The method is in <Link href="/guides/testing-short-drama-ads">testing short drama ads vs UGC</Link>. Platform specs for a TikTok flight live on <Link href="/tiktok-ai-drama-ads">TikTok AI drama ads</Link>, not on this page.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Questions about AI jewelry video ads.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/watch/the-ring-reveal', 'The Ring Reveal watch page'],
        ['/ai-drama-ads', 'AI drama ads for jewelry and watches'],
        ['/examples', 'AI drama ad examples'],
        ['/guides/ai-drama-ad-cost', 'AI drama ad cost guide'],
        ['/guides/testing-short-drama-ads', 'Testing short drama ads vs UGC'],
        ['/tiktok-ai-drama-ads', 'TikTok AI drama ads'],
        ['/contact', 'Contact for free concepts']
      ]} />
    </div></section>

    <section className="section"><div className="container cta">
      <h2>Get 3 free jewelry story directions.</h2>
      <p className="lead">Send product photos, the audience and the campaign goal. We will reply with three drama directions built around your ring or necklace, not generic UGC scripts.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Jewelry Story Ideas</Link></div>
    </div></section>
  </main>;
}
