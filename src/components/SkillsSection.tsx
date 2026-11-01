
const skillCategories = [
  {
    number: "01",
    title: "Technology & Development",
    description: "Build software, applications, and technical solutions.",
    skills: ["JavaScript", "Python", "React", "Next.js", "AI & ML", "Cloud"],
  },
  {
    number: "02",
    title: "Design & Creativity",
    description: "Create engaging experiences and communicate ideas visually.",
    skills: ["UI/UX Design", "Figma", "Graphic Design", "Writing", "Content"],
  },
  {
    number: "03",
    title: "Business & Entrepreneurship",
    description: "Turn opportunities and ideas into practical business plans.",
    skills: ["Marketing", "Business Strategy", "Sales", "Research", "Startups"],
  },
  {
    number: "04",
    title: "Research & Professional Skills",
    description: "Bring different perspectives, knowledge, and problem-solving abilities.",
    skills: ["Data Analysis", "Project Management", "Communication", "Leadership"],
  },
];

export default function SkillsSection() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Your skills have a place here</p>

          <h2>Bring what you know. Learn what comes next.</h2>

          <p className="section-intro">
            Whether you're experienced, just getting started, or learning
            something new, your skills and ideas can contribute to something
            meaningful.
          </p>
        </div>

        <div className="skills-category-grid">
          {skillCategories.map((category) => (
            <article className="skills-category-card" key={category.number}>
              <span className="skills-number">{category.number}</span>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="profile-skills">
                {category.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-bottom-note">
          <span aria-hidden="true">✦</span>
          You don't need to know everything. You just need to be willing to
          contribute and grow.
        </div>
      </div>
    </section>
  );
}
