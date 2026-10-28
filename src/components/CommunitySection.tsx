export default function CommunitySection() {
  return (
    <section className="pilot-section" id="pilot">
      <div className="container pilot-layout">
        <div>
          <p className="eyebrow">The first Collegyra pilot</p>
          <h2>Start small. Make something meaningful.</h2>
          <p className="section-intro">
            We’re bringing together a first group of student builders to test
            the idea, form teams, and learn what makes collaboration work.
          </p>
          <p className="pilot-footnote">
            Participation is free, and the pilot will use existing tools.
          </p>
        </div>
        <div className="pilot-plan" aria-label="Pilot plan">
          <article className="pilot-step">
            <span className="step-number">01</span>
            <div>
              <h3>Bring 10–15 builders together</h3>
              <p>Students and recent graduates, from beginners to experienced.</p>
            </div>
          </article>
          <article className="pilot-step">
            <span className="step-number">02</span>
            <div>
              <h3>Form 3–4 small teams</h3>
              <p>Match complementary skills around practical project ideas.</p>
            </div>
          </article>
          <article className="pilot-step">
            <span className="step-number">03</span>
            <div>
              <h3>Build in a two-week sprint</h3>
              <p>Set clear roles, track contributions, and make progress together.</p>
            </div>
          </article>
          <article className="pilot-step">
            <span className="step-number">04</span>
            <div>
              <h3>Share feedback and learn</h3>
              <p>Help shape what Collegyra should become next.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
