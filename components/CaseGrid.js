import SampleVideo from './SampleVideo';

const cases = [
  {
    tag:'JEWELRY · SPEC CONCEPT',
    title:'The Ring Reveal',
    desc:'A relationship confrontation turns into a choice of her own. The ring becomes the final visual reveal.',
    video:'/videos/ring-story.mp4',
    poster:'/videos/ring-story.webp'
  },
  {
    tag:'WATCHES · SPEC CONCEPT',
    title:'The Watch Reveal',
    desc:'A tense divorce conversation leads to a watch reveal that carries the final message: choose yourself.',
    video:'/videos/watch-story.mp4',
    poster:'/videos/watch-story.webp'
  },
  {
    tag:'BRAND STORY · SPEC CONCEPT',
    title:'The Ballroom Twist',
    desc:'At a ballroom event, a confrontation ends with an unexpected acquisition reveal.',
    video:'/videos/ballroom-story.mp4',
    poster:'/videos/ballroom-story.webp'
  }
];

export default function CaseGrid(){
  return <div className="grid">
    {cases.map((c)=><article className="card" key={c.title}>
      <SampleVideo src={c.video} poster={c.poster} title={c.title} />
      <div className="kicker">{c.tag}</div>
      <h3>{c.title}</h3>
      <p>{c.desc}</p>
    </article>)}
  </div>
}
