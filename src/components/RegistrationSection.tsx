
"use client";

export default function RegistrationSection() {
  return (
    <section className="registration-section" id="register">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">JOIN THE PILOT</span>
          <h2>Become part of Collegyra</h2>
          <p>
            Meet collaborators, build projects, develop your skills,
            and discover new opportunities.
          </p>
        </div>

        <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Personal Information</h3>

          <label>
            Full name *
            <input type="text" placeholder="Enter your full name" required />
          </label>

          <label>
            Email address *
            <input type="email" placeholder="Enter your email" required />
          </label>

          <label>
            Date of birth *
            <input type="date" required />
          </label>

          <label>
            Gender (Optional)
            <select defaultValue="">
              <option value="" disabled>Select an option</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
              <option>Self-describe</option>
            </select>
          </label>

          <h3>Education (Optional)</h3>

          <label>
            School name
            <input type="text" placeholder="Enter school name" />
          </label>

          <label>
            School location
            <input type="text" placeholder="City, State, Country" />
          </label>

          <h3>Interests and Skills</h3>

          <label>
            Main area of interest *
            <select defaultValue="" required>
              <option value="" disabled>Select your interest</option>
              <option>Software Development</option>
              <option>Artificial Intelligence</option>
              <option>Design and Creativity</option>
              <option>Business and Entrepreneurship</option>
              <option>Research</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Your skills
            <textarea placeholder="Tell us about your skills..." rows={3} />
          </label>

          <label>
            What would you like to do on Collegyra? *
            <textarea
              placeholder="Tell us what you hope to build, learn, or achieve..."
              rows={4}
              required
            />
          </label>

          <p className="registration-notice">
            Prototype only. This form does not submit or store personal
            information. Registration will open after privacy and
            age-appropriate consent safeguards are implemented.
          </p>

          <button type="button" disabled>
            Registration coming soon
          </button>
        </form>
      </div>
    </section>
  );
}
