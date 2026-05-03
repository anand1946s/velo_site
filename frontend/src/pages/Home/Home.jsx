import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

function createSubsystemArt({ title, accentA, accentB, label }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.24" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" rx="44" fill="url(#bg)" />
      <circle cx="880" cy="210" r="260" fill="url(#glow)" />
      <path d="M60 650 C240 560, 320 560, 460 650 S770 760, 1140 590" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="20" stroke-linecap="round" />
      <path d="M110 250 C330 110, 580 110, 820 250 S1050 370, 1160 260" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="14" stroke-linecap="round" />
      <text x="84" y="118" fill="rgba(255,255,255,0.9)" font-family="Arial, sans-serif" font-size="54" font-weight="700" letter-spacing="6">VELOCET</text>
      <text x="84" y="680" fill="rgba(255,255,255,0.94)" font-family="Arial, sans-serif" font-size="112" font-weight="800">${title}</text>
      <text x="86" y="736" fill="rgba(255,255,255,0.78)" font-family="Arial, sans-serif" font-size="34" font-weight="600" letter-spacing="3">${label}</text>
      <rect x="84" y="162" width="260" height="58" rx="29" fill="rgba(255,255,255,0.16)" />
      <text x="114" y="202" fill="white" font-family="Arial, sans-serif" font-size="32" font-weight="700">Subsystem</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const subsystemSlides = [
  {
    title: "Propulsion",
    label: "Thrust and launch energy",
    description: "Engine design, recovery dynamics, and controlled flight performance.",
    accentA: "#7c3aed",
    accentB: "#1d4ed8",
  },
  {
    title: "Structure",
    label: "Frames, fins, and airframe integrity",
    description: "Load paths, material strength, and aerodynamic stability under stress.",
    accentA: "#0f766e",
    accentB: "#2563eb",
  },
  {
    title: "Avionics",
    label: "Telemetry and onboard control",
    description: "Flight computers, sensors, data logging, and mission sequencing.",
    accentA: "#ea580c",
    accentB: "#db2777",
  },
  {
    title: "Payload",
    label: "Experiments and mission cargo",
    description: "Scientific packages, modular bays, and deployment systems.",
    accentA: "#0f172a",
    accentB: "#4f46e5",
  },
].map((slide) => ({
  ...slide,
  image: createSubsystemArt(slide),
}));

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
            <article className="subsystem-slide" key={slide.title}>
              <img className="subsystem-slide-image" src={slide.image} alt={`${slide.title} subsystem artwork`} />
              <div className="subsystem-slide-copy">
                <p className="subsystem-slide-label">{slide.title}</p>
                <h3>{slide.label}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
