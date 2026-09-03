import Image from "next/image";
import ContactForm from "./components/TallyEmbed";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/yamada03106/";

const selectedWorks = [
  {
    number: "01",
    category: "Corporate revenge · Microdrama",
    title: "The Divorced Heiress",
    description:
      "He thought the divorce left her with nothing. The board knew otherwise.",
    href: "https://www.instagram.com/yamada03106/reel/DcJOEHoBbq6/"
  },
  {
    number: "02",
    category: "Power reversal · Episodic story",
    title: "The Trap Was Already Set",
    description:
      "He fired his mistress to save himself. The heiress had already planned the final move.",
    href: "https://www.instagram.com/yamada03106/reel/Dba5HeLB7rS/"
  },
  {
    number: "03",
    category: "Product integration · Vertical film",
    title: "The Ring Reveal",
    description:
      "Jewellery enters at the emotional turn, as part of the story rather than a product cutaway.",
    href: instagramUrl
  }
];

const services = [
  {
    number: "I",
    title: "Brand microdramas",
    copy: "Story-led 10–30 second vertical films, from first hook to final reveal."
  },
  {
    number: "II",
    title: "Product integration",
    copy: "Jewellery, beauty and digital products written naturally into the scene."
  },
  {
    number: "III",
    title: "Paid-social creatives",
    copy: "Alternative hooks, captions and edits prepared for creative testing."
  },
  {
    number: "IV",
    title: "Recurring story campaigns",
    copy: "Connected episodes, recurring characters and product-led story worlds."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Drama Ads Studio home">
          Drama Ads Studio
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Enquire</a>
        </nav>
      </header>

      <section className="hero section-shell">
        <div className="hero-heading">
          <p className="kicker">Cinematic AI production · Worldwide</p>
          <h1>
            Your product,
            <br />
            <em>written into</em>
            <br />
            the story.
          </h1>
        </div>

        <figure className="hero-frame">
          <Image
            src="/drama-jewelry-hero.png"
            alt="Cinematic AI microdrama scene featuring a jewellery reveal"
            width={941}
            height={1672}
            priority
          />
          <figcaption>
            <span>Story-first vertical films</span>
            <span>10–30 seconds</span>
          </figcaption>
        </figure>

        <div className="hero-intro">
          <p>
            AI microdramas for jewellery, beauty, romance apps and AI products—directed from
            concept to final vertical cut.
          </p>
          <div className="hero-links">
            <a className="text-link" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">
              Start a project <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <section className="statement-band">
        <div className="section-shell statement-grid">
          <p className="section-index">The approach</p>
          <h2>The product is not interrupted by the story. It becomes the reason the story turns.</h2>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-title-row">
          <p className="section-index">Selected work</p>
          <p>Stories built for the vertical screen.</p>
        </div>

        <div className="work-list">
          {selectedWorks.map((work) => (
            <a
              className="work-row"
              href={work.href}
              target="_blank"
              rel="noreferrer"
              key={work.number}
            >
              <span className="work-number">{work.number}</span>
              <div>
                <p>{work.category}</p>
                <h3>{work.title}</h3>
              </div>
              <p className="work-description">{work.description}</p>
              <span className="work-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="proof-band" aria-label="Audience and performance">
        <div className="section-shell proof-grid">
          <article>
            <strong>166,449</strong>
            <span>views on one Reel</span>
          </article>
          <article>
            <strong>1,271</strong>
            <span>followers from that story</span>
          </article>
          <article>
            <strong>14s</strong>
            <span>average watch time</span>
          </article>
          <article>
            <strong>US-led</strong>
            <span>international audience</span>
          </article>
        </div>
      </section>

      <section className="services-section section-shell" id="services">
        <div className="services-intro">
          <p className="section-index">In the studio</p>
          <h2>One creative partner, from the first line to the final frame.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-band">
        <div className="section-shell founder-grid">
          <p className="section-index">A note from the creator</p>
          <div>
            <h2>Character, tension and a reason to keep watching.</h2>
            <p>
              I develop the story, direct the AI production, maintain character continuity, edit
              each scene, add captions and prepare the final vertical cut. The person you brief is
              the person who delivers.
            </p>
            <p>
              The work is designed for brands that want more than another product demonstration:
              a scene with an open loop, an emotional turn and a product that belongs inside it.
            </p>
            <p className="signature">— Bo Liu, Creator &amp; Director</p>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <p className="section-index">Enquiries</p>
          <h2>Tell me what your product needs to say.</h2>
          <p>
            Share your product, audience and target platform. Small paid pilots are available for
            the first collaboration.
          </p>
          <a className="email-link" href="mailto:zqx0310liubo@gmail.com">
            zqx0310liubo@gmail.com
          </a>
        </div>
        <ContactForm />
      </section>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Drama Ads Studio</p>
        <div>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:zqx0310liubo@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
}
