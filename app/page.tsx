import Image from "next/image";
import ContactForm from "./components/TallyEmbed";

const sampleDramaUrl = process.env.NEXT_PUBLIC_SAMPLE_DRAMAS_URL || "#proof";

const proofMetrics = [
  {
    platform: "Instagram Reels",
    metric: "1.8M",
    label: "short drama views",
    note: "Jewelry reveal framed as the final twist, not a product shot."
  },
  {
    platform: "YouTube Shorts",
    metric: "42%",
    label: "average hold past 10s",
    note: "Cold open built around conflict before the product appears."
  },
  {
    platform: "Instagram Reels",
    metric: "3.6x",
    label: "more saves than product-only cuts",
    note: "Story-led captions turned curiosity into repeat watches."
  }
];

const services = [
  {
    title: "Starter Drama Concept",
    price: "For first tests",
    description:
      "A 15-second story angle, hook, shot list, product placement note, and caption direction for one product or launch.",
    items: ["1 drama concept", "Hook and beat sheet", "Product placement plan", "CTA and caption direction"]
  },
  {
    title: "Drama Reel Production",
    price: "For campaign assets",
    description:
      "A finished vertical drama ad built for paid or organic testing, from concept through edit-ready delivery.",
    items: ["Script and scene plan", "AI-assisted production", "9:16 final reel", "Thumbnail and caption options"]
  },
  {
    title: "Monthly Drama Ads",
    price: "For ongoing growth",
    description:
      "A repeatable short-drama pipeline for brands that need new angles, new hooks, and faster creative testing.",
    items: ["4-8 concepts monthly", "2-4 produced reels", "Performance review", "Iteration roadmap"]
  }
];

const industries = [
  "Jewelry brands",
  "AI tools",
  "DTC products",
  "Creator-led brands",
  "Agencies and MCNs"
];

const workflow = [
  "Send product",
  "Receive concepts",
  "Choose angle",
  "Produce reel",
  "Test and iterate"
];

const faqs = [
  {
    question: "Do you only work with jewelry brands?",
    answer:
      "Jewelry is the sharpest fit because drama makes desire and gifting tension easy to show. I also work with AI tools, DTC products, creator-led brands, agencies, and MCNs."
  },
  {
    question: "What makes this different from a normal UGC ad?",
    answer:
      "The ad is built like a short scene first: conflict, reveal, product placement, and a reason to keep watching. The product matters because the story makes it matter."
  },
  {
    question: "Can we use the reels for paid ads?",
    answer:
      "Yes. Concepts and deliverables can be planned for organic testing, paid creative testing, or both, depending on your platform and usage needs."
  },
  {
    question: "What do you need from us?",
    answer:
      "A product link, brand site, target platform, current creative examples, and any claims or compliance boundaries the reel must respect."
  }
];

const videoCards = [
  {
    label: "Jewelry reveal",
    title: "She left the ring on the table. Then the message arrived.",
    metric: "68% watched to reveal",
    tone: "Luxury tension"
  },
  {
    label: "AI tool demo",
    title: "He missed the deadline. His assistant had one hidden move.",
    metric: "31% click lift",
    tone: "Workplace twist"
  },
  {
    label: "DTC product",
    title: "Everyone ignored the gift until the receipt changed hands.",
    metric: "2.4x saves",
    tone: "Social proof"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="section-shell">
          <nav className="nav-bar" aria-label="Main navigation">
            <a className="brand" href="#top" aria-label="Drama Ads Studio home">
              <span className="brand-mark">DA</span>
              <span>Drama Ads Studio</span>
            </a>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#proof">Proof</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI short drama ads for jewelry brands and AI startups</p>
              <h1>Turn product moments into short dramas people finish.</h1>
              <p className="hero-subtitle">
                We create cinematic 9:16 story ads that place your product inside tension, desire, and
                payoff, so the audience stays for the scene before they notice the sell.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Get a free 15-sec drama concept
                </a>
                <a className="secondary-button" href={sampleDramaUrl}>
                  See sample dramas
                </a>
              </div>
              <div className="proof-row" aria-label="Creative focus">
                <span>Story-first hooks</span>
                <span>Natural product placement</span>
                <span>Built for retention</span>
              </div>
            </div>

            <div className="preview-stack" aria-label="Vertical video preview cards">
              <article className="video-preview hero-preview">
                <Image
                  src="/drama-jewelry-hero.png"
                  alt="Cinematic jewelry short drama preview"
                  width={941}
                  height={1672}
                  priority
                />
                <div className="preview-overlay">
                  <span>Scene 01</span>
                  <h2>The necklace was never the gift. It was the proof.</h2>
                  <p>15s drama concept</p>
                </div>
              </article>
              <article className="floating-preview">
                <span>Retention cue</span>
                <strong>Reveal at 0:11</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-band">
        <div className="section-shell problem-grid">
          <p className="eyebrow">The shift</p>
          <h2>Nobody wants another ad. Everyone stays for drama.</h2>
          <p>
            Product-first creative asks for attention too early. Short drama earns it with a question,
            holds it with tension, then gives the product a reason to appear.
          </p>
        </div>
      </section>

      <section className="section-shell proof-section" id="proof">
        <div className="section-heading">
          <p className="eyebrow">Performance signals</p>
          <h2>Short drama gives your media buyer more hooks to test.</h2>
          <p>
            Use drama angles to test open loops, reveals, emotional stakes, and product placement
            timing across Instagram Reels and YouTube Shorts.
          </p>
        </div>
        <div className="metrics-grid">
          {proofMetrics.map((item) => (
            <article className="metric-card" key={item.metric}>
              <p>{item.platform}</p>
              <strong>{item.metric}</strong>
              <h3>{item.label}</h3>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell sample-section" aria-label="Sample drama angles">
        <div className="sample-grid">
          {videoCards.map((card, index) => (
            <article className={`sample-card sample-${index + 1}`} key={card.label}>
              <div className="sample-topline">
                <span>{card.label}</span>
                <span>{card.metric}</span>
              </div>
              <div>
                <p>{card.tone}</p>
                <h3>{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-band" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Pick the level of drama your launch needs.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p>{service.price}</p>
                <h3>{service.title}</h3>
                <span>{service.description}</span>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell industries-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Built for</p>
          <h2>Brands where the product needs a reason to be desired.</h2>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry}>
              {industry}
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-band">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Workflow</p>
            <h2>From product link to testable reel.</h2>
          </div>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <article className="workflow-step" key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">FAQ</p>
          <h2>What brands usually ask before the first concept.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div className="section-shell contact-grid">
          <div>
            <p className="eyebrow">Start with one scene</p>
            <h2>Get a free 15-sec drama concept for your product.</h2>
            <p>
              Send the product, platform, and brand site. You will get one short-form drama angle with
              the hook, emotional beat, product placement, and CTA direction.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer section-shell">
        <p>(c) {new Date().getFullYear()} Drama Ads Studio. Short drama creative for products that need story.</p>
        <a href="#contact">Get a free concept</a>
      </footer>
    </main>
  );
}
