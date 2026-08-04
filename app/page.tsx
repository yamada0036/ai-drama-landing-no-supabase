import TallyEmbed from "./components/TallyEmbed";

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/";
const patreonUrl = process.env.NEXT_PUBLIC_PATREON_URL || "#join";
const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_URL || "#join";

const episodes = [
  {
    part: "Part 1",
    title: "He took the penthouse.",
    description: "She walked away with the one document he never read.",
    metric: "2K+ views"
  },
  {
    part: "Part 2",
    title: "The building was hers.",
    description: "He owned the apartment. She owned the mortgage beneath it.",
    metric: "Fan favorite"
  },
  {
    part: "Part 3",
    title: "The boardroom turned silent.",
    description: "One signature changed the balance of power forever.",
    metric: "New twist"
  }
];

const benefits = [
  "New episode alerts before Instagram",
  "Vote on revenge twists and endings",
  "Alternate cuts and deleted scenes",
  "VIP waitlist for full early episodes"
];

const routes = [
  {
    title: "Comment NEXT",
    copy: "Use this under every Reel to trigger curiosity and DM replies.",
    example: "Want Part 6? Comment “NEXT” and I’ll send the early access link."
  },
  {
    title: "Bio link",
    copy: "Send warm viewers to one simple page instead of many confusing links.",
    example: "Watch the next twist first → Drama Club"
  },
  {
    title: "Email capture",
    copy: "Turn one-time views into an audience you can reach again.",
    example: "Join free. Vote for what Sarah does next."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <nav className="nav-bar" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="AI Drama Club home">
            <span className="brand-mark">✦</span>
            <span>AI Drama Club</span>
          </a>
          <div className="nav-links">
            <a href="#episodes">Episodes</a>
            <a href="#vote">Vote</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">For fans of revenge, secrets, and impossible twists</p>
            <h1>The story continues before it drops on Instagram.</h1>
            <p className="hero-subtitle">
              Join the Drama Club for early episode alerts, plot votes, alternate endings, and the next
              addictive AI short drama twist.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#join">
                Get the next episode first
              </a>
              <a className="secondary-button" href="#episodes">
                Watch the current story
              </a>
            </div>
            <div className="proof-row" aria-label="Audience proof">
              <span>Revenge drama</span>
              <span>9:16 episodes</span>
              <span>Weekly drops</span>
            </div>
          </div>

          <div className="phone-stage" aria-label="Short drama preview mockup">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="phone-frame">
              <div className="phone-top">
                <span />
                <strong>Episode 6</strong>
                <span className="live-dot">●</span>
              </div>
              <div className="story-card active-card">
                <p className="scene-label">The Divorced Heiress</p>
                <h2>He signed the divorce papers. She slid over the master deed.</h2>
                <p>“You bought the penthouse. I bought the building.”</p>
              </div>
              <div className="caption-strip">
                <span>Next twist locked</span>
                <span>Comment NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell split-section" id="episodes">
        <div className="section-heading">
          <p className="eyebrow">Currently watching</p>
          <h2>The Divorced Heiress</h2>
          <p>
            The first arc is free on Instagram. The next hook, alternate ending, and plot vote live here.
          </p>
        </div>

        <div className="episode-grid">
          {episodes.map((episode) => (
            <article className="episode-card" key={episode.part}>
              <div className="episode-poster">
                <span>{episode.part}</span>
              </div>
              <div>
                <p className="metric">{episode.metric}</p>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell conversion-section" id="vote">
        <div className="conversion-copy">
          <p className="eyebrow">Why join?</p>
          <h2>Don’t just watch the twist. Choose it.</h2>
          <p>
            Every vote helps decide which storyline gets produced next: revenge, romance, betrayal, or a
            completely unhinged reveal.
          </p>
          <ul className="benefit-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <TallyEmbed />
      </section>

      <section className="section-shell funnel-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Creator funnel</p>
          <h2>How viewers get here</h2>
          <p>Use one clear path from Reel engagement to owned audience.</p>
        </div>
        <div className="route-grid">
          {routes.map((route, index) => (
            <article className="route-card" key={route.title}>
              <div className="route-number">0{index + 1}</div>
              <h3>{route.title}</h3>
              <p>{route.copy}</p>
              <blockquote>{route.example}</blockquote>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell vip-section">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h2>VIP early access</h2>
          <p>
            When the audience is ready, unlock full episode drops, unreleased cuts, and creator notes for
            your most loyal fans.
          </p>
        </div>
        <div className="vip-actions">
          <a className="secondary-button" href={patreonUrl} target={patreonUrl === "#join" ? "" : "_blank"} rel="noreferrer">
            Patreon waitlist
          </a>
          <a className="secondary-button" href={substackUrl} target={substackUrl === "#join" ? "" : "_blank"} rel="noreferrer">
            Email updates
          </a>
        </div>
      </section>

      <footer className="footer section-shell">
        <p>© {new Date().getFullYear()} AI Drama Club. Built for short drama fans.</p>
        <a href="#join">Join free</a>
      </footer>
    </main>
  );
}
