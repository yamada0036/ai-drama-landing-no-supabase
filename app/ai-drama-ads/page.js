import Link from 'next/link';

export const metadata = {
  title:'AI Drama Ads for Brands',
  description:'AI drama ads for brands: story-driven vertical video ads where products become part of the plot, conflict and reveal.',
  alternates:{ canonical:'/ai-drama-ads' },
  openGraph:{
    title:'AI Drama Ads for Brands | Moon Ocean Studio',
    description:'Story-driven AI drama advertising where the product becomes part of the plot.',
    url:'/ai-drama-ads'
  }
};

export default function Page(){
  return <main>
    <section className="hero"><div className="container">
      <div className="eyebrow">AI drama advertising</div>
      <h1>AI Drama Ads for Brands</h1>
      <p className="lead">AI drama ads combine short-form storytelling with product advertising. Instead of pausing the story to sell, the product becomes evidence, status, conflict or payoff inside the plot.</p>
      <div className="actions">
        <Link className="btn primary" href="/contact">Get 3 Free Drama Ideas</Link>
        <Link className="btn secondary" href="/examples">See Drama Ad Examples</Link>
      </div>
    </div></section>

    <section className="section"><div className="container two-col">
      <div>
        <div className="eyebrow">What are AI Drama Ads?</div>
        <h2>Short-form ads built like mini dramas.</h2>
      </div>
      <div>
        <p>AI drama ads use recurring characters, emotional conflict and fast plot twists to hold attention while integrating the brand directly into the narrative.</p>
        <ul className="clean">
          <li>Strong hook before the product reveal</li>
          <li>Conflict designed to create watch-through</li>
          <li>The product has a narrative role</li>
          <li>Built for 9:16 social feeds</li>
          <li>Reusable characters and campaign worlds</li>
        </ul>
      </div>
    </div></section>

    <section className="section"><div className="container cta">
      <h2>Want to turn your product into the plot twist?</h2>
      <p className="lead">Send us your product and we’ll create three AI drama ad concepts.</p>
      <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Drama Ideas</Link></div>
    </div></section>
  </main>
}
