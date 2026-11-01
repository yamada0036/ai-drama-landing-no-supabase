import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/microdrama-maker',
  'AI Microdrama Maker: Tool or Studio? | Moon Ocean',
  'What to check in an online AI microdrama maker: script control, character continuity and product accuracy. Moon Ocean is the scoped studio path.'
);

const checks = [
  ['Script control', 'Can you approve the story before the full sequence, or does the tool invent the plot?'],
  ['One episode', 'Does it finish a 15–60 second story, or only a clip you still have to edit?'],
  ['Characters', 'Can you reuse an approved face and wardrobe? See consistent characters.'],
  ['Your SKU', 'Can you supply photos and reject a frame that changes the product?'],
  ['Exports', 'Can you name captions, textless and aspect before you pay?'],
  ['Rights and labels', 'Do you know how the output may be used, and when a synthetic-media label is required?']
];

const faqs = [
  { question: 'What should an online microdrama maker be able to do?', answer: 'Finish one short story with an approved script, a stable character and a product you can still recognize. A prompt that returns an unrelated clip is not a maker for a brand ad.' },
  { question: 'Is a maker the same thing as a finished ad?', answer: 'Only if the export matches the brief: runtime, product, captions and the placement you will actually run. Otherwise it is a draft.' },
  { question: 'Can I bring a maker draft to Moon Ocean?', answer: 'Yes, as a reference for the story you want. We still write or revise the script, check the product and quote the finished files. A draft is not a substitute for that scope.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Choose the job first</div>
      <h1>Best AI Microdrama Maker Online? Match the Tool to the Job</h1>
      <p className="lead">An AI microdrama maker is an online product that tries to assemble a very short drama for you. “Best” depends on whether you need a private draft or a file a brand can run. Moon Ocean Studio is not a maker login. We produce the film under a quote.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/ai-drama-generator">Generator vs Studio</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>Maker is not a ranking.</h2></div>
      <div className="editorial">
        <p>This page will not crown a tool. Public makers change, and a leaderboard without your SKU in the test is noise. Use the checklist below on whatever product you are considering, including a studio.</p>
        <p>A generator takes a prompt and returns a clip. A maker usually adds more structure: characters, beats, maybe episodes. A studio, described on <Link href="/ai-drama-studio">what an AI drama studio is</Link>, is accountable for the story and the delivered file. If you only need the definition of the format, start at <Link href="/ai-micro-drama">what an AI micro drama is</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Check the maker against the ad you need.</h2>
      <div className="table-scroll" role="region" aria-label="Microdrama maker checks" tabIndex={0}>
        <table className="content-table">
          <caption>If the answer is no, the tool is a sketchpad, not the production path.</caption>
          <thead><tr><th scope="col">Check</th><th scope="col">Question to ask</th></tr></thead>
          <tbody>{checks.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="editorial">Character continuity has its own page: <Link href="/consistent-characters">how to keep the same characters</Link>. Product checks for rings and necklaces are on <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>.</p>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>When to stop using the maker.</h2></div>
      <div className="editorial">
        <p>Stop when the next hour will be spent fixing a logo, a stone or a face that the tool will not hold. That hour is production. Put it in a scope so the revisions have a limit and an approver.</p>
        <p>The cost of that scope is explained in <Link href="/guides/ai-drama-ad-cost">the AI drama ad cost guide</Link>. It is not a published rate, and a maker subscription does not include our review.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about microdrama makers.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-drama-generator', 'Free AI drama generator or a studio'],
        ['/ai-drama-studio', 'What an AI drama studio is'],
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/script-to-episode', 'Script to episode'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>If the maker cannot hold the product, send it here.</h2>
      <p className="lead">We will reply with three story directions and a plain description of what a finished microdrama would include.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
