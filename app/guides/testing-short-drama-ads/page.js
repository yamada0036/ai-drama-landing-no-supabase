import Link from 'next/link';
import BuyerFAQ from '../../../components/BuyerFAQ';

export const metadata = {
  title: 'How to Test Short Drama Ads Against UGC',
  description: 'Plan a short drama ad test with a clear hypothesis, comparable creative, campaign links and separate viewing, click and purchase metrics.',
  alternates: { canonical: '/guides/testing-short-drama-ads' },
  openGraph: { title: 'How to Test Short Drama Ads Against UGC', description: 'A practical plan for comparing creative and interpreting results.', url: '/guides/testing-short-drama-ads' }
};
const metrics = [
  ['Attention', 'Opening retention and watch time', 'Does the opening hold attention?'],
  ['Interest', 'Outbound clicks and landing-page visits', 'Does the story create a reason to visit the store?'],
  ['Purchase', 'Attributed orders, acquisition cost and revenue', 'Does the campaign meet the agreed business objective?'],
  ['Evidence quality', 'Spend, dates, attribution window and sample size', 'Is the comparison sufficiently supported to guide the next test?']
];
const faqs = [
  { question: 'Do short drama ads convert better than UGC?', answer: 'That needs to be tested for the product, audience and offer. A story may hold attention without creating purchase intent. Use a comparable control and evaluate the business outcome you chose before launch.' },
  { question: 'How many versions should I test?', answer: 'Choose the number around a specific hypothesis and the resources available to evaluate it. If you test opening hooks, hold the body and call to action constant. An underfunded comparison with many variants can be inconclusive.' },
  { question: 'What if people watch but do not click?', answer: 'Review whether viewers can recognize the product, understand the offer and see a clear next action. Then inspect the destination page and tracking. Change one suspected cause at a time so the next result is interpretable.' },
  { question: 'Does a tracked sale prove the ad created an extra sale?', answer: 'No. Attribution assigns credit under a reporting rule. It does not by itself establish incremental sales. Keep the attribution model and window visible when comparing results.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container"><div className="eyebrow">Creative testing</div><h1>How to Test Short Drama Ads Against UGC.</h1><p className="lead">Start with one question: does this story help the same product reach the campaign’s goal? Define that goal before choosing the winning video.</p><div className="actions"><Link className="btn primary" href="/contact">Discuss a Pilot</Link><Link className="btn secondary" href="/ai-drama-ads">Explore Drama Ads</Link></div></div></section>
    <section className="section"><div className="container"><h2>Write the test before making more versions.</h2><div className="workflow-list">
      <article className="card"><h3>1. State the hypothesis</h3><p>Example: a story built around the ring’s meaning may generate more qualified store visits than the current demonstration. Treat this as a question to test, not a promised result.</p></article>
      <article className="card"><h3>2. Choose a comparable control</h3><p>Keep the product, offer, landing page and audience conditions comparable. Use the platform’s experiment tools where suitable. Document any differences that remain.</p></article>
      <article className="card"><h3>3. Choose one main variable</h3><p>For a format comparison, compare the story-led creative with the existing format. For a hook comparison, keep the story body and CTA fixed and change the opening. These answer different questions.</p></article>
      <article className="card"><h3>4. Set the budget and decision rules</h3><p>Agree a media budget ceiling, review period and primary metric. Check the platform’s current experiment requirements. Record an inconclusive result when there is too little evidence to choose a winner.</p></article>
      <article className="card"><h3>5. Record and iterate</h3><p>Save each creative version with its campaign links and results. Make the next variation address what the first test revealed.</p></article>
    </div></div></section>
    <section className="section"><div className="container"><h2>Keep viewing and purchasing separate.</h2><div className="table-scroll" role="region" aria-label="Creative testing metrics" tabIndex={0}><table className="content-table"><caption>Use the same metric definitions and reporting window across variants.</caption><thead><tr><th scope="col">Layer</th><th scope="col">Record</th><th scope="col">Question it helps answer</th></tr></thead><tbody>{metrics.map(([layer, record, question]) => <tr key={layer}><th scope="row">{layer}</th><td>{record}</td><td>{question}</td></tr>)}</tbody></table></div></div></section>
    <section className="section"><div className="container two-col"><div><h2>Give each creative a traceable link.</h2></div><div className="editorial"><p>Use consistent campaign names and distinguish the video variant in your tracking. For example:</p><pre className="code-example"><code>{'utm_source=instagram\nutm_medium=paid_social\nutm_campaign=ring_drama_pilot\nutm_content=story_hook_a'}</code></pre><p>This is a naming example, not a tracking installation. Verify that the store’s analytics receives the parameters and records the intended events before spending on the comparison.</p><p>In the test log, keep: version ID, changed variable, destination URL, dates, spend, views, clicks, orders and the attribution model. Use the same definitions for the control.</p></div></div></section>
    <section className="section"><div className="container"><h2>Questions about results.</h2><BuyerFAQ items={faqs} /><div className="editorial source-notes"><p>Check the current platform guidance before launch: <a href="https://ads.tiktok.com/help/article/split-testing-variables?lang=en">TikTok split-testing variables</a>, <a href="https://ads.tiktok.com/resources/help/article/about-split-testing-in-experiment-manager">TikTok Experiment Manager</a> and <a href="https://help.shopify.com/en/manual/promoting-marketing/create-marketing/campaigns/understanding-campaigns">Shopify campaigns</a>.</p></div></div></section>
    <section className="section"><div className="container cta"><h2>Scope the creative before the test.</h2><p className="lead">Agree the product, story, control and finished versions, then budget production and media separately.</p><div className="actions"><Link className="btn primary" href="/guides/ai-drama-ad-cost">Review Production Scope</Link><Link className="btn secondary" href="/examples">See the Spec Concepts</Link></div></div></section>
  </main>;
}
