import "./ServicesCTA.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function ServicesCTA() {
  const whatsappMessage = `Hello Purposeful Hands,

I'm interested in your upcoming services and would like to know more.

Thank you!`;

  const whatsappUrl = `https://wa.me/233557542005?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="services-cta-section">
      <div className="services-cta-container container">
        <div className="services-cta-content">
          <span className="services-cta-label">GET IN TOUCH</span>

          <h2>Interested in Our Services?</h2>

          <p>
            Some of our services are still being prepared, but we'd love to hear
            from you. If you're interested in any of our upcoming services, let
            us know and we'll be happy to connect with you.
          </p>

          <div className="services-cta-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn services-cta-whatsapp"
            >
              <FaWhatsapp />
              Ask Us on WhatsApp
            </a>

            <Link to="/contact?interest=service" className="btn btn-secondary">
              Express Your Interest →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;
