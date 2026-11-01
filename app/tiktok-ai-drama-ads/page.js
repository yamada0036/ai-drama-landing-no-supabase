import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/tiktok-ai-drama-ads',
  'TikTok AI Drama Ads for Ecommerce Brands | Moon Ocean',
  'TikTok AI drama ads in 9:16: story hooks, a recognizable product beat and a test plan. Vertical drama for TikTok, Reels and Shorts.'
);

const specs = [
  ['Aspect', '9:16 vertical'],
  ['Runtime', '15–30 seconds for a first pilot. Up to about 60 seconds when the story needs it.'],
  ['Audio', 'Music plus optional voice-over. Textless or music-free versions if they are quoted.'],
  ['Captions', 'Burned-in or a captioned export, as agreed.'],
  ['Product', 'A clear recognition beat before the CTA.'],
  ['Disclosure', 'Follow current platform rules for AI-generated or synthetic media labels where they are required.']
];

const hooks = [
  ['Hook A', 'Opening conflict line or visual', 'Body, product beat and CTA'],
  ['Hook B', 'An alternate first 3 seconds', 'Body, product beat and CTA'],
  ['Product timing', 'Early prop vs late reveal', 'Hook-line family and CTA'],
  ['CTA frame', 'Offer vs brand site', 'Story body']
];

const faqs = [
  { question: 'Can AI drama ads run on TikTok?', answer: 'Yes, as standard in-feed video creatives when they meet platform specs and policies. Feasibility depends on your account, offer and creative review, not on the format name alone.' },
  { question: 'Do you optimize for TikTok Shop?', answer: 'We produce story-led creatives and product-accurate beats. Catalog setup, bidding and fulfillment stay with your team or media partner. Align the landing page and the offer before the test.' },
  { question: 'Should a TikTok test start with drama or UGC?', answer: 'Test them with the same product and offer when the budget allows. The testing guide explains how to keep that comparison fair.' },
  { question: 'What does a TikTok drama pilot cost?', answer: 'Scope drives price: scenes, product checks, versions and revisions. Start with the cost guide, then ask for a written quote.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">TikTok · Reels · Shorts</div>
      <h1>TikTok AI Drama Ads for Ecommerce Brands</h1>
      <p className="lead">Moon Ocean Studio builds AI drama ads designed for TikTok and other short-form feeds: vertical runtime, an early hook, and a product moment viewers can recognize. We help ecommerce brands scope a pilot creative, then separate production decisions from media tests.</p>
      <div className="actions">
        <Link className="btn primary" href="/contact">Get a TikTok Pilot Brief</Link>
        <Link className="btn secondary" href="/contact">Get 3 Free Story Ideas</Link>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Brand drama ads vs app-length Mini Dramas.</h2></div>
      <div className="editorial">
        <p>TikTok has popularized longer narrative formats and Mini Dramas-style storytelling. Brand ecommerce ads usually need a different contract with the viewer: 15–60 seconds, a recognizable SKU, and a measurable next step such as a site visit, an offer or Shop.</p>
        <p>App-install short drama and brand product drama share hook craft. They optimize for different outcomes. This page is for brand and ecommerce buyers, not app user acquisition.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Specs we produce for.</h2>
      <div className="table-scroll" role="region" aria-label="TikTok drama ad specs" tabIndex={0}>
        <table className="content-table">
          <caption>Defaults for a first pilot. Re-check TikTok’s live creative and advertising policies before launch. This page is production guidance, not legal advice.</caption>
          <thead><tr><th scope="col">Spec</th><th scope="col">Default for pilots</th></tr></thead>
          <tbody>{specs.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="editorial">Reels and Shorts can share the same master when the quote lists those placements. This URL does not split into a separate page per platform.</p>
    </div></section>

    <section className="section"><div className="container">
      <h2>Hook-test matrix. Keep the body fixed.</h2>
      <p className="lead">Change one variable per flight when you are trying to learn something.</p>
      <div className="table-scroll" role="region" aria-label="Hook test matrix" tabIndex={0}>
        <table className="content-table">
          <caption>Record version IDs the same way as in the testing guide.</caption>
          <thead><tr><th scope="col">Variant</th><th scope="col">What changes</th><th scope="col">What stays fixed</th></tr></thead>
          <tbody>{hooks.map(([name, changes, fixed]) => <tr key={name}><th scope="row">{name}</th><td>{changes}</td><td>{fixed}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="editorial">Decision rules, budget split and metric layers are in <Link href="/guides/testing-short-drama-ads">testing short drama ads vs UGC</Link>.</p>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Hook rules for the first two seconds.</h2></div>
      <div className="editorial">
        <p>Most viewers stop around 0:02. Treat that as a writing constraint, not as a performance case study for any film on this site. Open on the conflict or an identity reveal: she is fired, he is not the driver, the prenup is already on the table.</p>
        <p>Do not open on a logo, a slow packshot, or a title card. The product can be in that first frame when it is part of the conflict. A spinning SKU with music is not a hook.</p>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Search-led story templates.</h2>
      <p className="lead">These themes show up in TikTok search around short drama. They are patterns for an original brand scene. They are not our campaign results, and they are not permission to copy a named series.</p>
      <div className="grid">
        <article className="card">
          <h3>Female boss fires an employee</h3>
          <p>Office drama. Hook: the firing line, or the employee who already knows, in the first two seconds.</p>
          <p><Link href="/contact">Request 3 free story angles</Link></p>
        </article>
        <article className="card">
          <h3>She thought the CEO was the driver</h3>
          <p>Mistaken identity: a billionaire taken for the driver, or a delivery guy and a rich lead. Hook: say the mistake out loud before any reveal.</p>
          <p><Link href="/contact">Request 3 free story angles</Link></p>
        </article>
        <article className="card">
          <h3>The prenup backfired</h3>
          <p>Divorced heiress, a prenup that turns, divorce revenge. Hook: the clause or the demand, not a jewelry spin. <Link href="/watch/the-ring-reveal">The Ring Reveal</Link> is a divorce-shaped spec, not this trope’s case study.</p>
          <p><Link href="/contact">Request 3 free story angles</Link></p>
        </article>
        <article className="card">
          <h3>AI drama, episode 1 to 40</h3>
          <p>People search for episode lists. A brand pilot is one episode. A 40-episode run is a series scope, not a prompt. See <Link href="/ai-short-drama">AI short drama from a script</Link> and <Link href="/ai-drama-generator">what a generator does not finish</Link>.</p>
          <p><Link href="/contact">Request 3 free story angles</Link></p>
        </article>
      </div>
      <p className="editorial">Use the mechanism only if it fits the product and the offer. A status mix-up is not a media plan. Test design stays on <Link href="/guides/testing-short-drama-ads">testing short drama ads vs UGC</Link>. A real multi-episode plan starts at <Link href="/branded-short-drama">branded short drama</Link>.</p>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Attention is not a purchase.</h2></div>
      <div className="editorial">
        <p>Opening retention and watch time tell you whether the story holds. Outbound clicks and attributed orders answer different questions. Define the primary metric and the review window before you spend.</p>
        <p>Drama can win attention and still lose on cost per acquisition. Treat that as a result to iterate, not as a failure of the format. If people watch and do not click, check product recognition, the offer and the landing page before you order another story.</p>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>Jewelry and watches on TikTok.</h2></div>
      <div className="editorial">
        <p>Rings and watches read well in close-up reveals when metal, stones and dials match your references. Jewelry fidelity and story directions belong on <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>.</p>
        <p>Watch <Link href="/watch/the-ring-reveal">The Ring Reveal</Link> for a twenty-second jewelry spec. The category hub for jewelry, watches and fashion is <Link href="/ai-drama-ads">AI drama ads for jewelry and watches</Link>.</p>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div><h2>What a TikTok pilot package includes.</h2></div>
      <div className="editorial">
        <ul className="clean">
          <li>One product, one hypothesis, and one 15–30 second vertical cut, plus optional hook variants if they are quoted.</li>
          <li>Script and product placement approved before generation.</li>
          <li>Exports sized for TikTok, and for Reels or Shorts if those placements are listed.</li>
          <li>Written revision rounds. Production budget stays separate from media.</li>
          <li>Examples on this site are spec concepts, not guaranteed return-on-ad-spend proofs.</li>
        </ul>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2>Questions about TikTok AI drama ads.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-drama-ads', 'AI drama ads for jewelry and watches'],
        ['/ai-jewelry-video-ads', 'AI jewelry video ads'],
        ['/guides/testing-short-drama-ads', 'Testing short drama ads vs UGC'],
        ['/guides/ai-drama-ad-cost', 'AI drama ad cost'],
        ['/watch/the-ring-reveal', 'The Ring Reveal'],
        ['/examples', 'AI drama ad examples'],
        ['/contact', 'Contact']
      ]} />
    </div></section>

    <section className="section"><div className="container cta">
      <h2>Scope a TikTok drama pilot.</h2>
      <p className="lead">Send the product, the audience and the goal. Prefer story directions first? Use the same form and ask for three free story ideas.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get a TikTok Pilot Brief</Link></div>
    </div></section>
  </main>;
}
