import ContactForm from '../../components/ContactForm';

export const metadata = {
  title:'Contact',
  description:'Send your product and get three AI drama ad concepts from Moon Ocean Studio.'
};

export default function Page(){
  return <main>
    <section className="hero">
      <div className="container two-col">
        <div>
          <div className="eyebrow">Free concept offer</div>
          <h1>Get 3 Free Drama Concepts.</h1>
          <p className="lead">Send your product, audience and platform. We’ll turn it into three short-drama ad directions built for TikTok, Instagram Reels or YouTube Shorts.</p>
          <div style={{marginTop:24}}>
            <span className="badge">No long brief required</span>
            <span className="badge">Product-first concepts</span>
            <span className="badge">Short-form ready</span>
          </div>
        </div>
        <div className="card">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
}
