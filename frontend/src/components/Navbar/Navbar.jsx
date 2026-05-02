import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">VeloCET</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Team</a>
        <a href="">Gallery</a>
        <a href="">Events</a>
      </div>
    </nav>
  );
}

export default Navbar;