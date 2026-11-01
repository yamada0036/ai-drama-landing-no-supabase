import Link from 'next/link';
import { watchVideos } from '../lib/videos';

export default function CaseGrid() {
  return <div className="grid">
    {watchVideos.map((video) => <article className="card" key={video.path}>
      <Link href={video.path}><img className="case-video" src={video.cardPoster} alt={`Watch ${video.title}`} width="540" height="960" /></Link>
      <div className="kicker">{video.tag}</div>
      <h3><Link href={video.path}>{video.title}</Link></h3>
      <p>{video.cardDesc}</p>
    </article>)}
  </div>;
}
