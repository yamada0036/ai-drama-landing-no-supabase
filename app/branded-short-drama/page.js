import Link from 'next/link';

export const metadata = {
  title:'Branded Short Drama',
  description:'Branded short drama production for ecommerce and consumer brands using story-first product integration.',
  alternates:{ canonical:'/branded-short-drama' }
};

export default function Page(){return <main><section className="hero"><div className="container"><div className="eyebrow">Brand storytelling</div><h1>Branded Short Drama</h1><p className="lead">A branded short drama is built around a brand objective while still functioning as entertainment. Product integration is written into the scene so the ad feels like a story viewers chose to watch.</p><div className="actions"><Link className="btn primary" href="/contact">Pitch My Product</Link></div></div></section><section className="section"><div className="container"><h2>Best fit for</h2><div><span className="badge">Jewelry</span><span className="badge">Watches</span><span className="bade">Fashion</span><span className="badge">Beauty</span><span className="badge">Lifestyle</span><span className="bade">Ecommerce</span></div></div></section></main>}
