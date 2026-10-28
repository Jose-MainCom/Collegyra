export default function CollaboratorsSection() {
  return (
    <section className="content-section collaborators-section">
      <div className="container collaborator-layout">
        <div className="section-heading">
          <p className="eyebrow">Different skills. Shared ambition.</p>
          <h2>Good teams make room for everyone.</h2>
          <p className="section-intro">
            Connect with college students and recent graduates who bring
            complementary strengths. You don’t need to know everything to get
            started—curiosity and a willingness to learn count.
          </p>
        </div>
        <div className="skill-cloud" aria-label="Areas of interest">
          <span className="skill-chip">AI &amp; machine learning</span>
          <span className="skill-chip">Software development</span>
          <span className="skill-chip">Product ideas</span>
          <span className="skill-chip">Technology entrepreneurship</span>
          <span className="skill-chip">New to building</span>
        </div>
      </div>
    </section>
  );
}
