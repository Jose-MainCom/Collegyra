
export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand" href="#home" aria-label="Collegyra home">
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span>Collegyra</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#collaborators">Collaborators</a>
          <a href="#skills">Skills</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#community">Community</a>
        </nav>

        <div className="nav-actions">
          <span className="nav-login" aria-disabled="true">
            Coming soon
          </span>

          <a
            className="nav-cta"
            href="#register"
            aria-label="Join the Collegyra community pilot"
          >
            Join Collegyra
          </a>
        </div>
      </div>
    </header>
  );
}
