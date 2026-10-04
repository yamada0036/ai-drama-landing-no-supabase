import SampleVideo from './SampleVideo';

const cases = [
  {
    tag:'JEWELRY · SPEC CONCEPT',
    title:'The Ring Reveal',
    desc:'A relationship confrontation turns into a choice of her own. The ring becomes the final visual reveal.',
    video:'/videos/ring-story.mp4',
    poster:'/videos/ring-story.webp',
    beats: [
      ['Opening conflict', 'A divorce conversation establishes the emotional stakes.'],
      ['Product moment', 'A ring appears on the paperwork; a later close-up makes jewelry the visual focus.'],
      ['For a brand adaptation', 'Specify which ring belongs in each scene. Review the stone layout, setting, metal and on-hand scale against the supplied product images.']
    ]
  },
  {
    tag:'WATCHES · SPEC CONCEPT',
    title:'The Watch Reveal',
    desc:'A tense divorce conversation leads to a watch reveal that carries the final message: choose yourself.',
    video:'/videos/watch-story.mp4',
    poster:'/videos/watch-story.webp',
    beats: [
      ['Opening conflict', 'A divorce conversation turns to a demand for the watch.'],
      ['Product moment', 'The wrist and watch become part of the exchange, linking the item to the character’s decision.'],
      ['For a brand adaptation', 'Approve the dial, case, strap and handling of the watch. Plan a clear product view and a campaign-specific next action.']
    ]
  },
  {
    tag:'BRAND STORY · SPEC CONCEPT',
    title:'The Ballroom Twist',
    desc:'At a ballroom event, a confrontation ends with an unexpected acquisition reveal.',
    video:'/videos/ballroom-story.mp4',
    poster:'/videos/ballroom-story.webp',
    beats: [
      ['Opening conflict', 'A formal ballroom encounter creates tension between the characters.'],
      ['Creative focus', 'The confrontation and reversal demonstrate a story direction. Jewelry is visible, but this is not a verified demonstration of a customer’s SKU.'],
      ['For a brand adaptation', 'Choose a specific product role before production: what does the item change in the scene, and when can viewers recognize it?']
    ]
  }
];

export default function CaseGrid({ showBreakdown = false }){
  return <div className="grid">
    {cases.map((c)=><article className="card" key={c.title}>
      <SampleVideo src={c.video} poster={c.poster} title={c.title} />
      <div className="kicker">{c.tag}</div>
      <h3>{c.title}</h3>
      <p>{c.desc}</p>
      {showBreakdown && <dl className="concept-notes">{c.beats.map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>}
    </article>)}
  </div>
}
