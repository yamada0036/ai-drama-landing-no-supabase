import Link from 'next/link';
import CaseGrid from '../../components/CaseGrid';

export const metadata = {
  title:'AI Drama Ad Examples',
  description:'Watch three 20-second AI drama spec concepts: a ring reveal, a watch reveal and a ballroom plot twist.',
  alternates:{ canonical:'/examples' }
};

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Creative directions</div>
        <h1>AI Drama Ad Examples</h1>
        <p className="lead">Watch three 20-second spec concepts: two product-led reveals and a story-first brand moment. Tap a video to play with sound.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid />
      </div>
    </section>
    <section className="section">
      <div className="container cta">
        <h2>Want your product in the story?</h2>
        <p className="lead">Send us a product link or photo and we’ll suggest three story directions.</p>
        <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
      </div>
    </section>
  </main>
}
