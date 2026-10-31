import Link from 'next/link';
import JsonLd from './JsonLd';
import RelatedLinks from './RelatedLinks';
import SampleVideo from './SampleVideo';
import { videoObject } from '../lib/videos';

export default function WatchPageView({ video }) {
  return <main>
    <JsonLd data={videoObject(video)} />
    <section className="hero"><div className="container watch-layout">
      <div className="watch-player-wrap">
        <SampleVideo className="watch-player" src={video.src} poster={video.poster} title={`Play ${video.title}`} preload="metadata" width={video.width} height={video.height} />
        <p className="watch-meta"><a href={video.src}>Open the video file</a> · {video.durationSeconds} sec · 9:16 · MP4</p>
      </div>
      <div>
        <div className="eyebrow">{video.tag}</div>
        <h1>{video.title}</h1>
        <p className="lead">{video.eyebrow}</p>
        <p className="editorial">{video.synopsis}</p>
        <div className="actions"><Link className="btn primary" href="/contact">{video.ctaLabel}</Link></div>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>What happens in the cut.</h2>
      <div className="table-scroll" role="region" aria-label={`${video.title} story beats`} tabIndex={0}>
        <table className="content-table">
          <caption>Three beats in {video.title}. This is a spec concept, not a client case study.</caption>
          <thead><tr><th scope="col">Beat</th><th scope="col">What happens</th></tr></thead>
          <tbody>{video.beats.map(([label, text]) => <tr key={label}><th scope="row">{label}</th><td>{text}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><h2>What a brand must approve.</h2></div>
      <div className="editorial">
        <p>{video.adaptation}</p>
        <p>Read the factors in <Link href="/guides/ai-drama-ad-cost">how much an AI drama ad costs</Link> before treating this cut as a production template.</p>
        <p>These frames demonstrate storytelling and product moments. Views and watch time do not establish purchases or return on ad spend.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <h2>Related pages.</h2>
      <RelatedLinks links={video.related} />
    </div></section>
    <section className="section"><div className="container cta">
      <h2>{video.ctaTitle}</h2>
      <p className="lead">{video.ctaNote}</p>
      <div className="actions"><Link className="btn primary" href="/contact">{video.ctaLabel}</Link></div>
    </div></section>
  </main>;
}
