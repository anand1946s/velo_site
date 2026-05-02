import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <p className="hero-tag">Model rocketry club</p>
      <h1>Launch higher. Build smarter. Fly together.</h1>
      <p className="hero-text">
        Apex Rocketry Club is a community for hobby builders, launch-day crews, and anyone excited by rockets, science, and flight.
      </p>
      <div className="hero-actions">
        <a className="hero-button primary" href="#contact">
          Join the Club
        </a>
        <a className="hero-button secondary" href="#projects">
          Explore Activities
        </a>
      </div>
    </section>
  );
}

export default Hero;