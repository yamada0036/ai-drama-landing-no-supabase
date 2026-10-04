import Link from 'next/link';
import BuyerFAQ from '../../../components/BuyerFAQ';

export const metadata = {
  title: 'How Much Does an AI Drama Ad Cost?',
  description: 'Understand an AI drama ad quote: scenes, product accuracy, hooks, captions, revisions and usage. Build a focused pilot scope before production.',
  alternates: { canonical: '/guides/ai-drama-ad-cost' },
  openGraph: { title: 'How Much Does an AI Drama Ad Cost?', description: 'A practical guide to production scope, deliverables and revisions.', url: '/guides/ai-drama-ad-cost' }
};

const factors = [
  ['Story and scenes', 'Runtime, speaking characters, locations and complex actions.', 'A second location or a new speaking character after script approval.'],
  ['Product accuracy', 'Reference preparation, close-ups, real-product compositing and detail checks.', 'A new SKU or a precision shot that needs different source imagery.'],
  ['Versions', 'Opening hooks, aspect ratios, languages, captions and audio versions.', 'Three new openings instead of three exports of the same opening.'],
  ['Revisions', 'Review stages, included rounds and who consolidates feedback.', 'A new story direction after the approved scene has been produced.'],
  ['Usage and assets', 'Intended placements and any third-party voice, music or asset requirements.', 'Additional licensed assets or a change in the agreed usage.']
];
const faqs = [
  { question: 'What does a 20–30 second AI drama ad cost?', answer: 'Moon Ocean Studio quotes each project after reviewing the product, story and delivery requirements. Runtime alone does not determine the price. Ask for a written scope showing scenes, product checks, versions, revisions and usage before approving production.' },
  { question: 'Can I start with a budget below $1,000?', answer: 'Share your budget ceiling when requesting a quote. A narrower story and fewer versions may make a smaller pilot possible, but feasibility depends on the actual brief. A budget example is not a fixed-price offer.' },
  { question: 'Are extra hooks and revisions included?', answer: 'Only when they are listed in the accepted quote. Specify the number of distinct openings, finished versions and review rounds. Agree how corrections to the approved brief differ from requests that change it.' },
  { question: 'Is AI production always cheaper than filming?', answer: 'Compare quotes for the same finished deliverables. AI generation still needs creative planning, selection, editing and quality checks. Complex product interactions or repeated corrections can change the cost comparison.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container"><div className="eyebrow">Budget & scope</div><h1>How Much Does an AI Drama Ad Cost?</h1><p className="lead">The useful starting point is a written production scope. A 20-second video with one scene is a different project from a multi-character story with precise product close-ups and several opening hooks.</p><p className="editorial">Moon Ocean Studio provides project quotes after reviewing your brief. This guide explains what to compare; it is not a published rate card.</p><div className="actions"><Link className="btn primary" href="/contact">Request a Scoped Quote</Link><Link className="btn secondary" href="/examples">See Spec Concepts</Link></div></div></section>
    <section className="section"><div className="container"><h2>What changes the quote?</h2><div className="table-scroll" role="region" aria-label="Production cost factors" tabIndex={0}><table className="content-table"><caption>Compare the same scope across production quotes.</caption><thead><tr><th scope="col">Cost factor</th><th scope="col">Define before production</th><th scope="col">Example of a scope change</th></tr></thead><tbody>{factors.map(([name, scope, change]) => <tr key={name}><th scope="row">{name}</th><td>{scope}</td><td>{change}</td></tr>)}</tbody></table></div></div></section>
    <section className="section"><div className="container two-col"><div><div className="eyebrow">A starting brief</div><h2>A focused first pilot.</h2><p className="lead">Use this example to request a quote. Final quantities and timing belong in the agreed scope.</p></div><div className="card editorial"><ul className="clean"><li>One product and one creative hypothesis.</li><li>One proposed 20–30 second vertical story.</li><li>Script and product placement approved before video production.</li><li>Character references and the product details that must be preserved.</li><li>Explicit choices for captioned, textless and music-free versions.</li><li>A written number of review rounds and a named approver.</li><li>Milestones, intended usage and an agreed production budget.</li></ul><p>Price additional hooks, languages and formats separately unless they are included in the quote. Keep production spend separate from the media budget used to test the ad.</p></div></div></section>
    <section className="section"><div className="container two-col"><div><h2>Separate corrections from new requests.</h2></div><div className="editorial"><p>A wrong logo relative to the approved reference and a request to switch to a different product are different kinds of feedback. Define how each is handled before work begins.</p><p>At each approval stage, record the accepted script, product reference, scene and delivery list. If the brief changes, request a revised cost and schedule before continuing.</p><p><Link href="/ai-short-drama-ads#brief">Use the production brief</Link> to collect these decisions in one place.</p></div></div></section>
    <section className="section"><div className="container"><h2>Questions about price and scope.</h2><BuyerFAQ items={faqs} /><div className="editorial source-notes"><p>Further reading: <a href="https://genflick.com/blog/price-ai-video-client-work">Genflick’s project scoping guide</a> and <a href="https://www.leopati.com/how-to-brief-an-ai-commercial/">Leopati’s commercial brief template</a>. These are external references, not Moon Ocean prices or terms.</p></div></div></section>
    <section className="section"><div className="container cta"><h2>Start with the product and the scope.</h2><p className="lead">Send a product link, budget ceiling, intended platforms and the versions you need.</p><div className="actions"><Link className="btn primary" href="/contact">Request a Quote</Link><Link className="btn secondary" href="/guides/testing-short-drama-ads">Plan the Pilot Test</Link></div></div></section>
  </main>;
}
