
const pilotSteps = [
  {
    number: "01",
    title: "Bring people together",
    description:
      "Welcome developers, designers, entrepreneurs, researchers, students, and professionals.",
  },
  {
    number: "02",
    title: "Discover shared interests",
    description:
      "Connect people with complementary skills, ideas, and project goals.",
  },
  {
    number: "03",
    title: "Build real projects",
    description:
      "Form small teams, define responsibilities, and work toward meaningful results.",
  },
  {
    number: "04",
    title: "Share and grow",
    description:
      "Showcase your work, exchange feedback, and help shape the future of Collegyra.",
  },
];

export default function CommunitySection() {
  return (
    <section className="pilot-section" id="community">
      <div className="container pilot-layout">
        <div>
          <p className="eyebrow">Join the Collegyra community</p>

          <h2>Good ideas deserve the right people.</h2>

          <p className="section-intro">
            We're building a community where people can meet collaborators,
            turn ideas into projects, share their progress, and discover
            opportunities to grow.
          </p>

          <p className="pilot-footnote">
            Open to everyone. Participation in the initial pilot is free.
          </p>

          <a className="button" href="mailto:">
            Get involved
            <span className="button-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="pilot-plan" aria-label="How Collegyra works">
          {pilotSteps.map((step) => (
            <article className="pilot-step" key={step.number}>
              <span className="step-number">{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
