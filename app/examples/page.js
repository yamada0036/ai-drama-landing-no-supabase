import CaseGrid from '../../components/CaseGrid';

export const metadata = {
  title:'AI Drama Ad Examples',
  description:'Story-driven AI product ad concepts for jewelry, watches, fashion and ecommerce brands.'
};

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container">
        <div className="eyebrow">Creative directions</div>
        <h1>AI Drama Ad Examples</h1>
        <p className="lead">Three ways a product can do more than appear on screen: it can become the evidence, the reveal or the plot twist that keeps viewers watching.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <CaseGrid />
      </div>
    </section>
  </main>
}
