const cases = [
  {title:'Luxury Necklace Reveal',desc:'A relationship confrontation turns into a status-reversal reveal, with the necklace becoming the story’s key twist.'},
  {title:'Watch Collection Twist',desc:'The watch is not shown as a prop. It becomes evidence of exclusivity and status inside the scene.'},
  {title:'Ring / Bag Plot Integration',desc:'Products are written into the conflict so viewers have a reason to keep watching until the reveal.'}
];
export default function CaseGrid(){
 return <div className="grid">{cases.map((c,i)=><article className="card" key={c.title}>
   <div className="video-placeholder">Replace with your vertical case video #{i+1}</div>
   <div className="kicker">CASE STUDY</div><h3>{c.title}</h3><p>{c.desc}</p>
 </article>)}</div>
}
