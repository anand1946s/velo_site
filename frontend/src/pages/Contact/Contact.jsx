import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import instagramLogo from "./instagram.png";
import linkedinLogo from "./linkedin.png";
import githubLogo from "./github.png";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page" id="contact">
      <Navbar />

      <section className="contact-hero">
        <p className="contact-kicker">Get in touch</p>
        <h1>Contact VeloCET</h1>
        <p className="contact-intro">
          Reach out for collaborations, membership questions, sponsorships, or event invitations. We reply as soon as
          possible.
        </p>

        <div className="contact-grid">
          <article className="contact-card">
            <h2>Email</h2>
            <a href="mailto:velocet@example.com">velo@cet.ac.in</a>
            <p>Best for formal inquiries, proposals, and document sharing.</p>
          </article>

          <article className="contact-card">
            <h2>Location</h2>
            <p>College Of Engineering Trivandrum</p>
            <p>Sreekaryam, Thiruvananthapuram,Kerala.</p>
          </article>

          <article className="contact-card">
            <h2>Social</h2>
            <a className="contact-social-link" href="https://www.instagram.com/velo_cet" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <img src={instagramLogo} alt="Instagram logo" className="contact-social-logo" />
            </a>
            <a className="contact-social-link" href="https://www.linkedin.com/company/velo-cet" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <img src={linkedinLogo} alt="LinkedIn logo" className="contact-social-logo" />
            </a>
            <a className="contact-social-link" href="https://github.com/Velo-CET" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <img src={githubLogo} alt="GitHub logo" className="contact-social-logo" />
            </a>
          </article>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-copy">
          <p className="contact-kicker">Message us</p>
          <h2>Send a direct note</h2>
          <p>
            Tell us what you need, and we will route it to the right team member. Use this form for quick responses and
            event coordination.
          </p>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Subject
            <input type="text" name="subject" placeholder="How can we help?" />
          </label>

          <label>
            Message
            <textarea name="message" rows="6" placeholder="Write your message here" />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

export default Contact;