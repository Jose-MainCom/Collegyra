export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand" href="/" aria-label="Collegyra home">
          <span className="brand-mark" aria-hidden="true">C</span>
          Collegyra
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">How it works</a>
          <a href="#benefits">Why Collegyra</a>
          <a className="nav-cta" href="#pilot">Join the pilot</a>
        </nav>
      </div>
    </header>
  );
}
