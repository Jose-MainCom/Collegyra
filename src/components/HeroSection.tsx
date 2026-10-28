export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">A student project &amp; talent network</p>
          <h1>
            Your next big idea starts <span>together.</span>
          </h1>
          <p className="lead">
            Turn what you know into something real. Find your people, build
            practical projects, and show the world what you can do.
          </p>
          <a className="button" href="#pilot">
            Be part of the first pilot <span className="button-arrow" aria-hidden="true">→</span>
          </a>
          <p className="hero-note">
            <span className="note-dot" aria-hidden="true" />
            Free to join · Beginners are welcome
          </p>
        </div>
        <div className="hero-art" role="img" aria-label="Illustration of a student project team">
          <div className="orbit" aria-hidden="true" />
          <div className="floating-label floating-label-one">Ideas with purpose</div>
          <div className="floating-label floating-label-two">Made by students</div>
          <article className="project-card">
            <div className="project-card-top">
              <span>Team project</span>
              <span className="status-pill">In the making</span>
            </div>
            <h2>Small team. Real work.</h2>
            <p className="project-card-copy">
              Bring different strengths to the table and create something
              you can be proud to share.
            </p>
            <div className="team-row">
              <span>Better, built together</span>
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
