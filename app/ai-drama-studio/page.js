import { pageMetadata } from '../../lib/metadata';
import Link from 'next/link';
import BuyerFAQ from '../../components/BuyerFAQ';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = pageMetadata(
  '/ai-drama-studio',
  'What Is an AI Drama Studio? | Moon Ocean Studio',
  'An AI drama studio plans the story, produces it with AI-assisted tools and delivers a scoped film. Moon Ocean Studio works with ecommerce brands.'
);

const faqs = [
  { question: 'What do I get from an AI drama studio?', answer: 'Story directions, an approved script, product and character checks, and the video files named in the quote. You do not get a login to an unlimited generator.' },
  { question: 'Is a studio the same as a video model?', answer: 'No. A model generates frames. A studio decides the story, reviews the frames and finishes a file you can run as an ad.' },
  { question: 'Can a studio make one ad, or only a series?', answer: 'Start with one pilot. A series is a later scope, after the first episode has a bible and a reason to continue.' }
];

export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Moon Ocean Studio</div>
      <h1>What Is an AI Drama Studio?</h1>
      <p className="lead">An AI drama studio plans a short scripted story, produces it with AI-assisted tools, and delivers finished files under a written scope. Moon Ocean Studio is that studio for ecommerce brands, especially jewelry, watches and fashion.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/ai-drama-ads">See Drama Ads</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>A studio is accountable for a cut.</h2></div>
      <div className="editorial">
        <p>A generator account gives you access. A studio gives you a sequence of decisions: which story, which product moment, which references, which exports, who approves. The tools sit inside that sequence. They are not the offer.</p>
        <p>If you are comparing a free prompt box with this model, read <Link href="/ai-drama-generator">free AI drama generator or a studio</Link>. If you want a guided online assembler instead, read <Link href="/microdrama-maker">microdrama maker</Link>. Those pages describe other jobs. This page describes ours.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>What Moon Ocean Studio actually does.</h2>
      <div className="grid">
        <article className="card"><h3>Story</h3><p>Three directions from your product, then one script with a hook, a conflict and a reveal. The product has a role, not a logo slap.</p></article>
        <article className="card"><h3>Picture</h3><p>AI-assisted scenes checked against your references. Faces, wardrobe and the SKU are review items, not happy accidents.</p></article>
        <article className="card"><h3>File</h3><p>Vertical exports named in the quote, for TikTok, Reels and Shorts. Production budget stays separate from media.</p></article>
      </div>
      <p className="editorial">Category hub: <Link href="/ai-drama-ads">AI drama ads for jewelry and watches</Link>. Jewelry depth: <Link href="/ai-jewelry-video-ads">AI jewelry video ads</Link>. Process: <Link href="/ai-short-drama-ads">how the ads are produced</Link>.</p>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>What we will not pretend.</h2></div>
      <div className="editorial">
        <p>The films on this website are spec concepts. <Link href="/watch/the-ring-reveal">The Ring Reveal</Link>, <Link href="/watch/the-watch-reveal">The Watch Reveal</Link> and <Link href="/watch/the-ballroom-twist">The Ballroom Twist</Link> show structure. They are not client case studies and they do not prove a return on ad spend.</p>
        <p>We also do not publish a rate card. Scope changes the price. Read <Link href="/guides/ai-drama-ad-cost">AI drama ad cost</Link>, then ask for a quote. A series, if you need one, starts on <Link href="/branded-short-drama">branded short drama</Link>.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Questions about an AI drama studio.</h2>
      <BuyerFAQ items={faqs} />
      <RelatedLinks links={[
        ['/ai-micro-drama', 'What an AI micro drama is'],
        ['/ai-drama-generator', 'Generator vs studio'],
        ['/vertical-drama', 'Vertical drama without a crew'],
        ['/examples', 'AI drama ad examples'],
        ['/contact', 'Free story concepts']
      ]} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>Bring the product. We will bring the story plan.</h2>
      <p className="lead">Three directions are free. Tell us the audience and what the campaign has to learn.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
    </div></section>
  </main>;
}
