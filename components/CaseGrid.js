const cases = [
  {
    tag:'JEWELRY',
    title:'Luxury Necklace Reveal',
    desc:'A relationship confrontation becomes a status-reversal reveal, with the necklace acting as the evidence that changes the scene.',
    hook:'The product is the proof.'
  },
  {
    tag:'WATCHES',
    title:'Watch Collection Twist',
    desc:'The watch is introduced as part of the conflict, then becomes the payoff: exclusivity, ownership and status are revealed through the product.',
    hook:'The product is the reveal.'
  },
  {
    tag:'FASHION & ACCESSORIES',
    title:'Ring / Bag Plot Integration',
    desc:'A ring or handbag is written directly into the argument, giving viewers a reason to stay until the final product-driven reversal.',
    hook:'The product is the plot twist.'
  }
];

export default function CaseGrid(){
  return <div className="grid">
    {cases.map((c,i)=><article className="card" key={c.title}>
      <div className="case-visual">
        <span className="case-number">0{i+1}</span>
        <span className="case-hook">{c.hook}</span>
      </div>
      <div className="kicker">{c.tag}</div>
      <h3>{c.title}</h3>
      <p>{c.desc}</p>
    </article>)}
  </div>
}
