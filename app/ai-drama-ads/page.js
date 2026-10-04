import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';
import BuyerFAQ from '../../components/BuyerFAQ';

export const metadata = {
  title: 'AI Drama Ads for Jewelry, Watches & Fashion Brands',
  description: 'Story-driven AI drama ads with product placement for jewelry, watches and fashion brands. Explore concepts, production scope and a focused first pilot.',
  alternates: { canonical: '/ai-drama-ads' },
  openGraph: {
    title: 'AI Drama Ads for Brands | Moon Ocean Studio',
    description: 'Put your product inside a story, from the first conflict to the final reveal.',
    url: '/ai-drama-ads'
  }
};
const faqs = [
  { question: 'What is an AI drama ad?', answer: 'An AI drama ad is a short scripted brand video made with AI-assisted production. Characters and conflict carry the story, while the product has a clear role in the action or reveal. It can be a standalone ad or part of a series.' },
  { question: 'How do drama ads compare with UGC ads?', answer: 'UGC commonly uses a demonstration, experience or testimonial. Drama uses a fictional situation and character relationships. Neither format is automatically better for sales. Compare them using the same product, offer and business objective.' },
  { question: 'Can a ring, watch or handbag be part of the story?', answer: 'Yes. A ring can carry a personal decision, a watch can become a clue, and a handbag can be part of a gift or identity reveal. The concept should make the product recognizable and relevant to the plot.' },
  { question: 'What should a first project include?', answer: 'Start with one product and one clear story. Before production, agree the script, scenes, product details, runtime, final versions, review stages and revision scope. Any additional hooks or formats should be included in the quote.' },
  { question: 'Do your example videos prove that drama ads sell more?', answer: 'The videos shown here are spec concepts demonstrating storytelling and product integration. They are not client sales case studies. Views and watch time do not establish purchases or return on ad spend.' }
];
export default function Page() {
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">Story-driven creative for consumer brands</div>
      <h1>AI Drama Ads for Jewelry, Watches & Fashion Brands.</h1>
      <p className="lead">Make the product part of the decision, the conflict or the reveal. Moon Ocean Studio creates short narrative ad concepts for brands that want to test a different way to tell their story.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Drama Ideas</Link><Link className="btn secondary" href="#examples">Watch the Concepts</Link></div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><div className="eyebrow">What makes it a drama ad?</div><h2>A product with a role in the plot.</h2></div>
      <div className="editorial"><p>AI drama ads combine fictional characters, a compact conflict and a product moment. The story gives viewers a reason to follow the action; a recognizable product and a clear next step connect that attention to your campaign.</p><p>Use a short drama when you have an emotional situation worth exploring. Use a demonstration when shoppers mainly need to understand how the product works. Test the choice rather than assuming entertainment will convert.</p></div>
    </div></section>
    <section className="section"><div className="container"><div className="eyebrow">Product integration</div><h2>Write the scene around what you sell.</h2><div className="grid">
      <article className="card"><h3>Jewelry</h3><p>A ring marks a decision. A necklace becomes a gift with meaning. Build the emotional beat around the piece, with a clear detail shot of the actual design.</p></article>
      <article className="card"><h3>Watches</h3><p>A watch can signal a promise, a deadline or a change in status. Plan a readable close-up and review the dial, strap and brand details.</p></article>
      <article className="card"><h3>Handbags & fashion</h3><p>A bag can be part of a gift, a discovery or an identity reveal. Keep shape, hardware and logo readable while the character uses it naturally.</p></article>
    </div></div></section>
    <section id="examples" className="section"><div className="container"><div className="eyebrow">Spec concepts</div><h2>See the story and product moment.</h2><p className="lead">Three 20-second concepts show the format in motion. These are creative demonstrations, not commissioned client campaigns.</p><CaseGrid /><p className="editorial"><Link href="/examples">Explore all concepts</Link> or see how we plan <Link href="/branded-short-drama">a connected branded drama series</Link>.</p></div></section>
    <section className="section"><div className="container two-col">
      <div><div className="eyebrow">A focused first pilot</div><h2>One product. One story to test.</h2></div>
      <div className="editorial"><p>Send your product, audience and campaign goal. We start with story directions. For production, the written scope should identify the approved script, scenes, product references, output versions and review stages.</p><ul className="clean"><li>One clear creative hypothesis and a recognizable product</li><li>Script and product placement reviewed before generation</li><li>Product details checked against your references</li><li>Delivery versions and revisions agreed in the quote</li></ul><p><Link href="/ai-short-drama-ads">Read the production workflow</Link> · <Link href="/guides/ai-drama-ad-cost">Understand the quote</Link> · <Link href="/guides/testing-short-drama-ads">Plan the creative test</Link></p></div>
    </div></section>
    <section className="section"><div className="container"><h2>Questions brands ask.</h2><BuyerFAQ items={faqs} /></div></section>
    <section className="section"><div className="container cta"><h2>What story could your product tell?</h2><p className="lead">Share the product and the audience. We’ll reply with three drama directions.</p><div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Drama Ideas</Link></div></div></section>
  </main>;
}
