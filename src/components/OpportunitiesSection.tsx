
const opportunities = [
  {
    number: "01",
    title: "Internships & Early Careers",
    description:
      "Discover opportunities to gain practical experience, develop your skills, and start your career.",
    tag: "Career growth",
  },
  {
    number: "02",
    title: "Jobs & Remote Work",
    description:
      "Showcase your project experience and connect with employers looking for capable people.",
    tag: "Professional careers",
  },
  {
    number: "03",
    title: "Freelance Projects",
    description:
      "Find projects where you can contribute your expertise, work with clients, and build your portfolio.",
    tag: "Independent work",
  },
  {
    number: "04",
    title: "Startup & Business Partnerships",
    description:
      "Meet founders, explore business ideas, and find people to build something together.",
    tag: "Entrepreneurship",
  },
];

export default function OpportunitiesSection() {
  return (
    <section
      className="content-section opportunities-section"
      id="opportunities"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Where collaboration can lead</p>

          <h2>Turn your experience into new opportunities.</h2>

          <p className="section-intro">
            Build your portfolio, demonstrate what you can do, and connect
            with people who may open doors to your next career or business
            opportunity.
          </p>
        </div>

        <div className="opportunities-grid">
          {opportunities.map((opportunity) => (
            <article
              className="opportunity-card"
              key={opportunity.number}
            >
              <span className="opportunity-number">
                {opportunity.number}
              </span>

              <span className="opportunity-tag">
                {opportunity.tag}
              </span>

              <h3>{opportunity.title}</h3>

              <p>{opportunity.description}</p>
            </article>
          ))}
        </div>

        <aside className="opportunity-note">
          <p>
            Collegyra helps people build, collaborate, and become discoverable.
            Career, freelance, and business opportunities may grow from these
            connections, but are never guaranteed.
          </p>
        </aside>
      </div>
    </section>
  );
}
