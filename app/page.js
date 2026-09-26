import Link from 'next/link';
import CaseGrid from '../components/CaseGrid';

export const metadata = {
  alternates: { canonical: '/' }
};

export default function Home(){
 return <main>
  <section className="hero"><div className="container">
   <div className="eyebrow">AI video ads · branded short drama</div>
   <h1>AI Drama Ads That Turn Products Into Plot Twists.</h1>
   <p className="lead">We create cinematic, story-driven AI video ads where your product becomes part of the conflict, reveal and payoff — built for TikTok, Instagram Reels and YouTube Shorts.</p>
   <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link><Link className="btn secondary" href="/examples">See Examples</Link></div>
  </div></section>
  <section className="section"><div className="container"><h2>Don’t interrupt the story. Become the story.</h2><p className="lead">Traditional product videos explain. Drama ads create curiosity first, then make the product the reason the scene matters.</p></div></section>
  <section className="section"><div className="container"><CaseGrid /></div></section>
  <section className="section"><div className="container two-col">
    <div><div className="eyebrow">How it works</div><h2>From one product to three story concepts.</h2></div>
    <div><div className="card"><h3>1. Send the product</h3><p>A product photo, URL or short brief is enough.</p></div><div className="card" style={{marginTop:12}}><h3>2. We write the drama</h3><p>Hook, conflict, product reveal and CTA are built around the product.</p></div><div className="card" style={{marginTop:12}}><h3>3. We produce the vertical ad</h3><p>15–60 second versions for short-form platforms.</p></div></div>
  </div></section>
  <section className="section"><div className="container cta"><h2>Want your product inside the plot?</h2><p className="lead">Send us your product and we’ll reply with three short-drama concepts.</p><div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div></div></section>
 </main>
}
