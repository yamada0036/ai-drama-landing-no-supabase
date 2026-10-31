import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/consistent-characters',
  'Consistent Characters in AI Drama | Moon Ocean Studio',
  'Keep the same characters across AI drama episodes with approved face and wardrobe references, then review every selected shot.'
);

const refs = [
  ['Face', 'Front and three-quarter stills you have approved. Note age, hair and any feature that must not drift.'],
  ['Wardrobe', 'The outfit for this episode, and what is allowed to change in the next one.'],
  ['Body and hands', 'If a ring or watch is on the body, the hand and wrist are part of continuity, not a separate problem.'],
  ['Relationships', 'Who these people are to each other, in one paragraph, so later episodes do not invent a new history.'],
  ['Rejects', 'Frames you already refused, so the next pass does not repeat them.']
];

const faqs = [
  { question: 'Why do AI characters change between shots?', answer: 'Each generated shot can drift unless it is tied to approved references and then selected by a person. The model does not remember your episode by itself.' },
  { question: 'What references should I approve?', answer: 'Face, hair, wardrobe and, when the product is worn, the hand or neck. Approve them before the full sequence, not after you have fallen in love with an inconsistent hero shot.' },
  { question: 'Does character consistency cover the product too?', answer: 'No. A stable face can still wear the wrong ring. Product checks are a separate list, especially for jewelry and watches.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Continuity across shots and episodes</div>
      <h1>How to Keep the Same Characters Across AI Drama Episodes</h1>
      <p className="lead">Keep the same characters by approving face and wardrobe references, using those references on every shot, and reviewing what you select. Moon Ocean Studio treats that as a production check. It is not a switch that makes every generated frame correct.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/ai-short-drama-ads">See the Production Process</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>Consistency is a review, not a promise.</h2></div>
      <div className="editorial">
        <p>AI video will change a face, a jacket or a hand when the prompt is loose or the reference is weak. The correction is to constrain the inputs and to throw away shots that drift. Hoping the next generation “remembers” the last one is how episodes fall apart.</p>
        <p>One film needs this inside the cut. A series needs it across episodes. Write the rules once, in the <Link href="/branded-short-drama">series bible</Link>, before episode two. If you are still deciding whether you even have an episode, start at <Link href="/script-to-episode">script to episode</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>What to approve before generation.</h2>
      <div className="table-scroll" role="region" aria-label="Character reference list" tabIndex={0}>
        <table className="content-table">
          <caption>Lock the row, then compare every selected shot to it.</caption>
          <thead><tr><th scope="col">Reference</th><th scope="col">Lock this</th></tr></thead>
          <tbody>{refs.map(([name, detail]) => <tr key={name}><th scope="row">{name}</th><td>{detail}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>People and products drift separately.</h2></div>
      <div className="editorial">
        <p>A character can stay recognizable while the ring changes stone count. Review both. Jewelry checks are on <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>. The general production sequence, including when references are locked, is on <Link href="/ai-short-drama-ads">how AI short drama ads are produced</Link>.</p>
        <p>For a single spec, you can see how little a concept needs to show: <Link href="/watch/the-ring-reveal">The Ring Reveal</Link> is one situation, not a cast held across a season. Holding a cast across a season costs more review. That belongs in <Link href="/guides/ai-drama-ad-cost">the cost guide</Link> as a scope change, not as a surprise.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about consistent characters.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/branded-short-drama', 'Branded short drama series'],
        ['/script-to-episode', 'Script to episode'],
        ['/ai-short-drama-ads', 'Production process'],
        ['/ai-jewelry-video-ads', 'AI jewelry video ads'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Tell us who has to stay the same.</h2>
      <p className="lead">Send the product and, if you have them, the people who should recur. We will reply with three directions and which references a first episode would need.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
