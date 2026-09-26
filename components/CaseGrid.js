const cases = [
  {
    tag:'JEWELRY',
    title:'Luxury Necklace Reveal',
    desc:'A relationship confrontation becomes a status-reversal reveal, with the necklace acting as the evidence that changes the scene.',
    image:'/examples/necklace.jpg',
    alt:'Luxury necklace reveal in a cinematic AI drama ad'
  },
  {
    tag:'WATCHES',
    title:'Watch Collection Twist',
    desc:'The watch is introduced as part of the conflict, then becomes the payoff: exclusivity, ownership and status are revealed through the product.',
    image:'/examples/watch.webp',
    alt:'Luxury wristwatch reveal in a cinematic AI drama ad'
  },
  {
    tag:'FASHION & ACCESSORIES',
    title:'Ring Plot Integration',
    desc:'The ring becomes the visual payoff of the story, turning the product reveal into the final plot twist.',
    image:'/examples/ring.webp',
    alt:'Blue gemstone ring plot twist in a cinematic AI drama ad'
  }
];

export default function CaseGrid(){
  return <div className="grid">
    {cases.map((c)=><article className="card" key={c.title}>
      <img className="case-image" src={c.image} alt={c.alt} loading="lazy" />
      <div className="kicker">{c.tag}</div>
      <h3>{c.title}</h3>
      <p>{c.desc}</p>
    </article>)}
  </div>
}
