import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SubsystemCard from "./SubsystemCard.jsx";
import "./Home.css";

const subsystemSlides = [
  {
    title: "Propulsion",
    label: "Thrust and launch energy",
    description: "Engine design, recovery dynamics, and controlled flight performance.",
    note: "High-energy stages, ignition timing, and launch optimization.",
  },
  {
    title: "Structure",
    label: "Frames, fins, and airframe integrity",
    description: "Load paths, material strength, and aerodynamic stability under stress.",
    note: "Lightweight shells, rigidity, and structural resilience.",
  },
  {
    title: "Avionics",
    label: "Telemetry and onboard control",
    description: "Flight computers, sensors, data logging, and mission sequencing.",
    note: "Guidance logic, flight data, and mission electronics.",
  },
  {
    title: "Payload",
    label: "Experiments and mission cargo",
    description: "Scientific packages, modular bays, and deployment systems.",
    note: "Mission tools, test payloads, and deployable modules.",
  },
];

function Home() {
  const missionRef = useRef(null);
  const subsystemSliderRef = useRef(null);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  useEffect(() => {
    if (!missionRef.current) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsMissionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMissionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -25% 0px" },
    );

    observer.observe(missionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollSubsystems = (direction) => {
    if (!subsystemSliderRef.current) {
      return;
    }

    const amount = Math.round(subsystemSliderRef.current.clientWidth * 0.82) * direction;
    subsystemSliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <section className={`mission-section${isMissionVisible ? " is-visible" : ""}`} id="projects" ref={missionRef}>
        <div className="mission-head">
          <div>
            <h2>Engineering Excellence</h2>
            <span className="mission-line" aria-hidden="true" />
          </div>
          <p>
            Our mission is to cultivate the next generation of aerospace engineers by providing a high-stakes environment where
            theoretical knowledge meets atmospheric reality.
          </p>
        </div>

        <div className="mission-grid">
          <article className="mission-card">
            <div className="mission-icon" aria-hidden="true">✦</div>
            <h3>Learning</h3>
            <p>Deep-dive workshops in CAD, fluid dynamics, and orbital mechanics taught by experienced members and mentors.</p>
          </article>
          <article className="mission-card">
            <div className="mission-icon" aria-hidden="true">⎔</div>
            <h3>Building</h3>
            <p>Access to carbon fiber fabrication, CNC workflows, and electronics labs for custom flight systems.</p>
          </article>
          <article className="mission-card">
            <div className="mission-icon" aria-hidden="true">⟟</div>
            <h3>Precision</h3>
            <p>Rigorous testing protocols and pre-flight simulations ensure mission success and structural integrity.</p>
          </article>
        </div>
      </section>

      <section className="systems-section subsystem-section" id="achievements">
        <p className="systems-kicker">Fleet Manifest</p>
        <h2>Our Subsystems</h2>

        <div className="subsystem-slider-controls">
          <p>Swipe or use the arrows to move through each subsystem.</p>
          <div className="subsystem-slider-buttons">
            <button type="button" onClick={() => scrollSubsystems(-1)} aria-label="Scroll subsystems left">
              ←
            </button>
            <button type="button" onClick={() => scrollSubsystems(1)} aria-label="Scroll subsystems right">
              →
            </button>
          </div>
        </div>

        <div className="subsystem-slider" ref={subsystemSliderRef} aria-label="Subsystem image slider">
          {subsystemSlides.map((slide) => (
            <SubsystemCard key={slide.title} slide={slide} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
