
export default function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Explore collaboration</p>
          <h2>Turn ideas into real projects.</h2>
          <p className="section-intro">
            Find projects that interest you, bring your skills to the table,
            and work with others to create something meaningful.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card project-feature-card">
            <span className="feature-icon" aria-hidden="true">
              <span>01</span>
            </span>
            <p className="card-label">Discover</p>
            <h3>Explore projects</h3>
            <p>
              Discover ideas and challenges across software, AI, design,
              business, research, and more.
            </p>
            <a href="#community" className="card-link">
              Find projects <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="feature-card project-feature-card">
            <span className="feature-icon" aria-hidden="true">
              <span>02</span>
            </span>
            <p className="card-label">Collaborate</p>
            <h3>Build with others</h3>
            <p>
              Connect with people who bring different skills and perspectives.
              Find a team or invite others to join your idea.
            </p>
            <a href="#collaborators" className="card-link">
              Meet collaborators <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className="feature-card project-feature-card">
            <span className="feature-icon" aria-hidden="true">
              <span>03</span>
            </span>
            <p className="card-label">Show your work</p>
            <h3>Build your portfolio</h3>
            <p>
              Showcase projects, document your contributions, and give
              others a clearer picture of what you can do.
            </p>
            <a href="#skills" className="card-link">
              Showcase your skills <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
