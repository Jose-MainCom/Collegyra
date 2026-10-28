export default function SkillsSection() {
  return (
    <section className="content-section" id="benefits">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">More than a line on your résumé</p>
          <h2>Build confidence along with your portfolio.</h2>
          <p className="section-intro">
            Make progress with a team, get useful feedback, and build a
            track record of what you can do.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">↗</span>
            <h3>Practical experience</h3>
            <p>Put your skills to work on a shared project with a real team.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">✳</span>
            <h3>Feedback that helps</h3>
            <p>Learn from teammates and make your next contribution stronger.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon" aria-hidden="true">◎</span>
            <h3>Work you can show</h3>
            <p>Document your contributions and share what you helped create.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
