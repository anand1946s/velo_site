import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      <section className="home-grid" id="projects">
        <div className="home-card">
          <h2>Safety first</h2>
          <p>We teach safe build habits, launch prep, and field procedures for every flight.</p>
        </div>
        <div className="home-card">
          <h2>Launch days</h2>
          <p>Club launches bring together members, families, and curious beginners for live flights.</p>
        </div>
        <div className="home-card">
          <h2>Build and learn</h2>
          <p>From simple kits to custom designs, we help members learn rocketry through hands-on projects.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;