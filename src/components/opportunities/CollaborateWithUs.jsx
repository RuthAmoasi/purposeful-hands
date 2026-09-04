import "./CollaborateWithUs.css";
import { Link } from "react-router-dom";

function CollaborateWithUs() {
  return (
    <section className="collaborate-with-us-section">
      <div className="collaborate-with-us-container container">
        <h4 className="collaborate-with-us-heading">COLLABORATE WITH US</h4>

        <h2 className="collaborate-with-us-subheading">
          Let's Create Something Meaningful Together
        </h2>

        <p className="collaborate-with-us-text">
          We welcome opportunities to work with individuals, organizations,
          businesses, and community groups whose goals align with our vision for
          creativity, skill development, and positive impact.
        </p>

        <div className="collaborate-with-us-grid">
          <div className="collaborate-with-us-card card">
            <h3>Creative Collaborations</h3>

            <p>
              Work with us on creative projects, workshops, products, and other
              opportunities that bring ideas to life.
            </p>
          </div>

          <div className="collaborate-with-us-card card">
            <h3>Community Partnerships</h3>

            <p>
              Collaborate on initiatives that support creativity, skill
              development, and meaningful community impact.
            </p>
          </div>

          <div className="collaborate-with-us-card card">
            <h3>Business &amp; Brand Partnerships</h3>

            <p>
              Explore opportunities for events, sponsorships, campaigns, and
              mutually beneficial collaborations.
            </p>
          </div>
        </div>
        <Link
          to="/contact?interest=collaboration"
          className="collaborate-with-us-btn btn btn-primary"
        >
          Let's Collaborate
        </Link>
      </div>
    </section>
  );
}

export default CollaborateWithUs;
