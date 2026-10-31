import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-short-drama',
  'Create an AI Short Drama from a Script | Moon Ocean',
  'How to turn a script into an AI short drama for a brand: what the pages must decide, which assets you still need, and when Moon Ocean Studio produces the cut.'
);

const scriptNeeds = [
  ['Hook', 'The first seconds. What conflict or image stops the scroll, in words or in a described shot.'],
  ['Product role', 'Where the item appears, what it does in the scene, and what must stay recognizable.'],
  ['Turn and ending', 'What changes, and whether the last frame asks for a click, a visit or nothing yet.'],
  ['Constraints', 'Claims you will not make, tone, language, and anything the brand will not show.']
];

const faqs = [
  { question: 'Can you start from a script I already wrote?', answer: 'Yes. Send the script with the product photos, the audience and the placements you care about. We will say what is producible in a first vertical cut and what needs a decision before generation.' },
  { question: 'What if I only have a product photo and no script?', answer: 'That is a normal start. Ask for three story directions. A script is written after you choose one direction, not before you know the product.' },
  { question: 'Does a finished script guarantee the finished cut?', answer: 'No. A script is the plan. Faces, product details and continuity are checked against references. Lines can change when a shot cannot carry them. The quote should say how script changes are handled.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">From page to picture</div>
      <h1>How to Create an AI Short Drama from a Script</h1>
      <p className="lead">You create an AI short drama from a script by locking the product’s role, the ending and the references before anyone generates a full sequence. Moon Ocean Studio does that work for ecommerce brands that want a vertical ad, not an open-ended prompt session.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Send a Script or Product</Link><Link className="btn secondary" href="/ai-short-drama-ads">See the Production Process</Link></div>
    </div></section>
    <section className="section"><div className="container">
      <h2>What the script has to decide.</h2>
      <p className="lead">A usable brand script is short. It still has to answer four things. If one is missing, generation fills the gap, and you may not like the fill.</p>
      <div className="table-scroll" role="region" aria-label="Script decisions" tabIndex={0}>
        <table className="content-table">
          <caption>Decide these on the page before the first full generation.</caption>
          <thead><tr><th scope="col">Decision</th><th scope="col">Write it down</th></tr></thead>
          <tbody>{scriptNeeds.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>A script is not the whole brief.</h2></div>
      <div className="editorial">
        <p>Pages do not include your product photos, logo files, usage rights or the list of exports. Those still belong in the brief. A beautiful scene that changes a stone layout or a dial is a failed ad even if the dialogue is approved.</p>
        <p>Copy the field list on <Link href="/ai-short-drama-ads#brief">the production brief</Link>. Jewelry-specific checks are on <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>. If the script is really one chapter of a longer story, read <Link href="/script-to-episode">script to episode</Link> before you commission episode two.</p>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>One cut first.</h2></div>
      <div className="editorial">
        <p>A short drama for a performance test is usually one 15–30 second vertical film, plus only the hook variants you are willing to read results for. More openings are not free learning. They split the same media budget.</p>
        <p>Keep production spend separate from media. The factors that move a quote are in <Link href="/guides/ai-drama-ad-cost">how much an AI drama ad costs</Link>. How to compare the finished film with UGC is in <Link href="/guides/testing-short-drama-ads">the testing guide</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about starting from a script.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/script-to-episode', 'Can AI turn a script into an episode?'],
        ['/vertical-drama', 'Vertical drama without a crew'],
        ['/consistent-characters', 'Keeping characters consistent'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Send the script, or send the product.</h2>
      <p className="lead">If you have pages, attach them. If you do not, ask for three directions. Either way the reply is a story plan, not a generated surprise.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
