import "./Hero.css";
import sd1000 from "./sd1000_web.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="hero-tag">
          MISSION STATUS: <span className="hero-status-active">ACTIVE</span>
        </p>
        
        <h3 className="hero-title">Defying Gravity Defining Innovation</h3>
        <p className="hero-text">
          We are VeloCET, a student-led aerospace and rocketry club dedicated to innovation, hands-on learning, and research. Through designing and launching model rockets, we equip aspiring engineers with real-world skills, foster interdisciplinary teamwork. We aim to represent our institution in national and international competitions.
        </p>
        <div className="hero-actions">
          <a className="hero-button primary" href="#contact">
            JOIN US
          </a>
          <a className="hero-button secondary" href="#projects">
            EXPLORE →
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img src={sd1000} alt="SD-1000 rocket" loading="eager" />
      </div>
    </section>
  );
}

export default Hero;