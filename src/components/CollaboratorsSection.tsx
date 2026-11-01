
const collaborators = [
  {
    initials: "SD",
    name: "Software Developers",
    role: "Build applications and technical solutions",
    skills: ["React", "Next.js", "Python"],
    color: "profile-green",
  },
  {
    initials: "PD",
    name: "Product & UI Designers",
    role: "Turn ideas into useful user experiences",
    skills: ["UI/UX", "Figma", "Product Design"],
    color: "profile-blue",
  },
  {
    initials: "AI",
    name: "AI & Data Enthusiasts",
    role: "Explore intelligent tools and data-driven ideas",
    skills: ["AI", "Machine Learning", "Data"],
    color: "profile-purple",
  },
];

export default function CollaboratorsSection() {
  return (
    <section
      className="content-section collaborators-section"
      id="collaborators"
    >
      <div className="container collaborator-layout">
        <div className="section-heading">
          <p className="eyebrow">Meet your future collaborators</p>

          <h2>Find people who help your ideas grow.</h2>

          <p className="section-intro">
            Connect with developers, designers, researchers, entrepreneurs,
            and people with different skills. Find teammates, share knowledge,
            and build something together.
          </p>

          <a className="button" href="#community">
            Find your collaborators
            <span className="button-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="collaborator-profiles">
          {collaborators.map((person) => (
            <article className="collaborator-profile" key={person.initials}>
              <div className={`profile-avatar ${person.color}`}>
                {person.initials}
              </div>

              <div className="profile-information">
                <h3>{person.name}</h3>
                <p>{person.role}</p>

                <div className="profile-skills">
                  {person.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
