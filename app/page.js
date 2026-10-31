import { pageMetadata } from '../lib/metadata';
import Link from 'next/link';
import CaseGrid from '../components/CaseGrid';

export const metadata = pageMetadata(
  "/",
  "AI Drama Ads for Ecommerce Brands | Moon Ocean Studio",
  "AI video ad agency making story-driven AI drama ads for jewelry, watch & fashion brands. Vertical ads for TikTok, Reels & Shorts. Get 3 free story ideas."
);

export default function Home(){
 return <main>
  <section className="hero"><div className="container hero-showcase">
   <div>
     <div className="eyebrow">AI video advertising · story-driven creative</div>
     <h1>AI Drama Ads for Ecommerce Brands</h1>
     <p className="lead">Moon Ocean Studio is an AI video ad agency creating AI drama ads for ecommerce brands. We build story-driven AI video ads for ecommerce products, including jewelry, watches and fashion, for TikTok, Reels and Shorts.</p>
     <div className="actions">
       <Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link>
       <Link className="btn secondary" href="/watch/the-ring-reveal">Watch The Ring Reveal</Link>
     </div>
   </div>
   <figure className="featured-sample">
     <Link href="/watch/the-ring-reveal"><img className="featured-video" src="/videos/ring-story.webp" alt="Watch The Ring Reveal, a 20-second jewelry drama spec concept" width="540" height="960" /></Link>
     <figcaption><Link href="/watch/the-ring-reveal">Watch The Ring Reveal</Link> · 20 sec spec concept</figcaption>
   </figure>
  </div></section>

  <section className="section"><div className="container two-col">
    <div>
      <div className="eyebrow">A story-first format</div>
      <h2>Story-Based Ads Where the Product Is the Plot</h2>
    </div>
    <div>
      <p className="lead">Instead of interrupting viewers with a product demo, we build the product into the hook, conflict, reveal or payoff.</p>
      <p>One of our core formats is <Link href="/ai-jewelry-video-ads"><strong>AI jewelry video ads</strong></Link>, short narrative ads where the piece plays a role in the plot. For watches and fashion alongside jewelry, start with <Link href="/ai-drama-ads">AI drama ads for jewelry and watch brands</Link>.</p>
    </div>
  </div></section>

  <section className="section"><div className="container">
    <div className="eyebrow">The work, in motion</div>
    <h2>AI Video Ads for Jewelry, Watches & Fashion</h2>
    <p className="lead">20-second vertical stories with a hook, a turn and a reveal.</p>
    <CaseGrid />
    <p className="editorial">Watch <Link href="/watch/the-ring-reveal">The Ring Reveal</Link>, <Link href="/watch/the-watch-reveal">The Watch Reveal</Link> and <Link href="/watch/the-ballroom-twist">The Ballroom Twist</Link>, or open the <Link href="/examples">AI drama ad examples</Link> index.</p>
    <p className="editorial">See how <Link href="/ai-short-drama-ads">AI short drama ads</Link> are produced, or plan <Link href="/branded-short-drama">branded short drama</Link> when you need more than one episode.</p>
    <p className="editorial">Planning a budget? Read <Link href="/guides/ai-drama-ad-cost">AI drama ad cost</Link>, then <Link href="/guides/testing-short-drama-ads">how to test short drama ads vs UGC ads</Link>. Platform specs are on <Link href="/tiktok-ai-drama-ads">TikTok AI drama ads</Link>.</p>
  </div></section>

  <section className="section"><div className="container two-col">
    <div><div className="eyebrow">How it works</div><h2>From one product to three story concepts.</h2></div>
    <div>
      <div className="card"><h3>1. Send the product</h3><p>A product photo, URL or short brief is enough.</p></div>
      <div className="card" style={{marginTop:12}}><h3>2. We write the story</h3><p>Hook, conflict, product reveal and CTA are built around the product.</p></div>
      <div className="card" style={{marginTop:12}}><h3>3. We produce the vertical ad</h3><p>15–60 second versions designed for short-form platforms.</p></div>
    </div>
  </div></section>

  <section className="section"><div className="container cta">
    <h2>Need an AI video ad for your product?</h2>
    <p className="lead">Send us the product and we’ll reply with three story directions.</p>
    <div className="actions"><Link className="btn primary" href="/contact">Get 3 Free Story Ideas</Link></div>
  </div></section>
 </main>
}
