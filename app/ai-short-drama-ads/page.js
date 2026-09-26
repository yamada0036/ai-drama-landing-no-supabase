import Link from 'next/link';

export const metadata = {
  title:'AI Short Drama Ads',
  description:'AI short drama ads for TikTok, Reels and Shorts — cinematic branded stories in 15–60 seconds.',
  alternates:{ canonical:'/ai-short-drama-ads' }
};

export default function Page(){return <main><section className="hero"><div className="container"><div className="eyebrow">Short-form format</div><h1>AI Short Drama Ads</h1><p className="lead">Cinematic 15–60 second brand stories designed for TikTok, Instagram Reels and YouTube Shorts. Every scene has one job: make the viewer stay for the next reveal.</p><div className="actions"><Link className="btn primary" href="/contact">Create My Drama Concept</Link></div></div></section><section className="section"><div className="container"><div className="grid"><div className="card"><h3>Hook</h3><p>A line or visual conflict that earns the first three seconds.</p></div><div className="card"><h3>Escalation</h3><p>A fast emotional beat that makes the viewer need the answer.</p></div><div className="card"><h3>Product payoff</h3><p>The brand is revealed as part of the twist, not a cutaway ad.</p></div></div></div></section></main>}
