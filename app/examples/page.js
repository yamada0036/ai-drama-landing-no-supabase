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
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid />
      </div>
    </section>
  </main>
}
