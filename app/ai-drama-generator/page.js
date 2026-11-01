import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-drama-generator',
  'Free AI Drama Generator or a Studio? | Moon Ocean',
  'A free AI drama generator can explore a look. It does not replace a scoped ecommerce ad. Moon Ocean Studio writes and delivers the film under a written quote.'
);

const faqs = [
  { question: 'Does Moon Ocean Studio offer a free AI drama generator?', answer: 'No. There is no public prompt tool on this site. The free step is three story directions after you send a product. Production is quoted.' },
  { question: 'Can a free generator reproduce my exact product?', answer: 'Sometimes it can suggest a scene. Exact stones, dials, hardware and logos still need your photos and a human review. A plausible frame is not a product check.' },
  { question: 'When is a studio a better fit than a generator?', answer: 'When you need an approved script, named exports, revision rounds and a file you can hand to media. A generator is for exploration. A studio is for a deliverable.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Tool question, studio answer</div>
      <h1>Best Free AI Drama Generator? Start With the Job</h1>
      <p className="lead">A free AI drama generator is a self-serve box: prompt in, clip out. That can be the right tool for a look test. It is a poor description of a finished ecommerce ad. Moon Ocean Studio does not publish a generator and does not rank other people’s tools.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/ai-drama-studio">What a Studio Does</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>What people usually mean by “best”.</h2></div>
      <div className="editorial">
        <p>There is no single best generator for every brand, and this page will not invent one. Ask what the output has to survive. If you need a private exploration of tone, a free or cheap generator may be enough. If you need a ring, a watch or a bag to stay recognizable, and a file your media buyer can name, you need a scope.</p>
        <p>Judge a tool by whether you can control the script, keep a character, check the product, and export the versions you listed. Speed without those controls is a different product.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Generator, maker, studio.</h2>
      <div className="table-scroll" role="region" aria-label="Ways to make an AI drama" tabIndex={0}>
        <table className="content-table">
          <caption>Three different jobs. Moon Ocean Studio sells the third.</caption>
          <thead><tr><th scope="col">Path</th><th scope="col">You get</th><th scope="col">You still own</th></tr></thead>
          <tbody>
            <tr><th scope="row">Generator</th><td>A clip from a prompt, on your login.</td><td>The script, the product accuracy, the edit and the test.</td></tr>
            <tr><th scope="row">Maker</th><td>A more guided assembly of a short drama. See <Link href="/microdrama-maker">microdrama maker</Link>.</td><td>Whether the result is actually your SKU and your offer.</td></tr>
            <tr><th scope="row">Studio</th><td>Story directions, an approved script, checks and named files.</td><td>The product facts, approvals and the media budget.</td></tr>
          </tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>What the free step on this site is.</h2></div>
      <div className="editorial">
        <p>Send a product photo or URL, the audience and the goal. We reply with three drama directions. That is a creative response, not unlimited generation and not a promise of performance.</p>
        <p>If a direction is worth making, the next document is a quote: scenes, product checks, versions, revisions. Read <Link href="/guides/ai-drama-ad-cost">how much an AI drama ad costs</Link> before you treat any tool’s sticker price as the full cost. Your own review time is part of the cost even when the software looks free.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about AI drama generators.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-drama-studio', 'What an AI drama studio is'],
        ['/microdrama-maker', 'What to look for in a microdrama maker'],
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/ai-jewelry-video-ads', 'AI jewelry video ads'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Skip the prompt box. Send the product.</h2>
      <p className="lead">Three story directions are free. A finished film is a scoped project.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
