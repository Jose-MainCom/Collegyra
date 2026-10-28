export default function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">From skills to something real</p>
          <h2>Learn by making, not just watching.</h2>
          <p className="section-intro">
            Build practical AI and software projects with a small team. Take a
            clear role, contribute at your pace, and leave with real experience.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">01</span>
            <h3>Choose a real challenge</h3>
            <p>Work together on a practical idea your team cares about solving.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">02</span>
            <h3>Find your role</h3>
            <p>Make space for different skills, experience levels, and ways to contribute.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">03</span>
            <h3>Share what you make</h3>
            <p>Keep a record of the work and contributions you can showcase.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
