import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/script-to-episode',
  'Can AI Turn a Script into an Episode? | Moon Ocean',
  'AI can turn a script into one vertical episode with a start, a turn and an end. Moon Ocean Studio scopes that episode for ecommerce brands.'
);

const faqs = [
  { question: 'What counts as a full episode for a brand?', answer: 'Usually one 15–60 second vertical film with a beginning, a turn and an end, plus the product beat you agreed. A ten-minute episode is a different quote.' },
  { question: 'Can one script become more than one episode?', answer: 'It can become a pilot and a plan for later episodes. Commission episode two only after the first scope is delivered and you still want the same world.' },
  { question: 'Do characters need to be designed before the script?', answer: 'They need enough description to approve references before the full sequence. You can write the situation first and lock faces before generation. Do not invent continuity after the shots exist.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Script to a finished episode</div>
      <h1>Can AI Turn Your Script into a Full Episode?</h1>
      <p className="lead">Yes, if “full episode” means one complete vertical story with a start, a turn and an end. Moon Ocean Studio can produce that from your script for an ecommerce brand. A full episode here is not an untitled hour of generated footage.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Send the Script</Link><Link className="btn secondary" href="/ai-short-drama">Start From a Script</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>Define the episode before the model does.</h2></div>
      <div className="editorial">
        <p>AI can realize scenes that are already decided. It cannot know that your episode is supposed to end on the clasp, or that the watch must be readable, or that you are not allowed to imply a discount. Those choices belong in the script and the brief.</p>
        <p>For a single ad, follow <Link href="/ai-short-drama">how to create an AI short drama from a script</Link>. The production milestones, including what you approve before generation, are on <Link href="/ai-short-drama-ads">the process page</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Pilot episode vs a season.</h2>
      <div className="table-scroll" role="region" aria-label="Episode scope" tabIndex={0}>
        <table className="content-table">
          <caption>Ask for the row you actually need. Do not buy a season to answer a pilot question.</caption>
          <thead><tr><th scope="col"></th><th scope="col">One episode</th><th scope="col">A season</th></tr></thead>
          <tbody>
            <tr><th scope="row">Story</th><td>One situation, resolved or clearly paused.</td><td>A shared world. Each episode still has its own job.</td></tr>
            <tr><th scope="row">People</th><td>Whoever the scene needs, referenced for that cut.</td><td>Recurring faces. See <Link href="/consistent-characters">consistent characters</Link>.</td></tr>
            <tr><th scope="row">Product</th><td>One role in this film.</td><td>A reason for each item in its episode.</td></tr>
            <tr><th scope="row">Buy</th><td>A pilot quote.</td><td>A bible first, then episodes. See <Link href="/branded-short-drama">branded short drama</Link>.</td></tr>
          </tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>What we send back.</h2></div>
      <div className="editorial">
        <p>If the script can become one episode, the reply names the runtime, the product moment, the missing references and the versions. If it cannot, we say what to cut. A script that needs six locations and four speaking parts is not a 20-second episode until you choose which minute matters.</p>
        <p>Vertical framing is its own problem. Read <Link href="/vertical-drama">cinematic vertical drama without a crew</Link> if the pages were written for a wide frame. Cost stays in <Link href="/guides/ai-drama-ad-cost">the cost guide</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about script to episode.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-short-drama', 'Create an AI short drama from a script'],
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/branded-short-drama', 'Branded short drama series'],
        ['/consistent-characters', 'Consistent characters across episodes'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Send the pages you have.</h2>
      <p className="lead">We will tell you whether they are one episode, a pilot plus leftovers, or a series that needs a bible first.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
