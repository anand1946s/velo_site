import "./Navbar.css";
import logo from "./velofavicon.jpg";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="navbar-brand" href="/" aria-label="VeloCET home">
        <img className="navbar-logo" src={logo} alt="VeloCET logo" />
        <span>VeloCET</span>
      </a>
      <div className="navbar-links">
        <a href="#projects">PROJECTS</a>
        <a href="#events">EVENTS</a>
        <a href="#team">TEAM</a>
        <a href="#achievements">ACHIEVEMENT</a>
        <a href="/contact">CONTACT</a>
      </div>
      <a className="navbar-cta" href="/contact">
        <span className="cta-heart" aria-hidden="true">❤️</span>
        <span>SUPPORT US</span>
      </a>
    </nav>
  );
}

export default Navbar;