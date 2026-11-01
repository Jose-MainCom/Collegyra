
export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">
            A platform for collaboration, projects & opportunities
          </p>

          <h1>
            Build something meaningful.
            <span> Grow together.</span>
          </h1>

          <p className="lead">
            Connect with people who share your interests, turn ideas into
            real projects, showcase your skills, and discover opportunities
            to grow your career or business.
          </p>

          <div className="hero-actions">
            <a className="button" href="#community">
              Join Collegyra
              <span className="button-arrow" aria-hidden="true">→</span>
            </a>

            <a className="button button-secondary" href="#projects">
              Explore projects
            </a>
          </div>

          <p className="hero-note">
            <span className="note-dot" aria-hidden="true" />
            Open to everyone · Build at any experience level
          </p>
        </div>

        <div
          className="hero-art"
          role="img"
          aria-label="Preview of a collaborative project and professional network"
        >
          <div className="orbit" aria-hidden="true" />

          <div className="floating-label floating-label-one">
            Share your ideas
          </div>

          <div className="floating-label floating-label-two">
            Meet your collaborators
          </div>

          <article className="project-card">
            <div className="project-card-top">
              <span>Featured collaboration</span>
              <span className="status-pill">Looking for teammates</span>
            </div>

            <h2>Ideas become real projects.</h2>

            <p className="project-card-copy">
              Bring your skills together, work with others, and create
              something worth sharing.
            </p>

            <div className="team-row">
              <span>Connect. Create. Grow.</span>

              <span className="team-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
