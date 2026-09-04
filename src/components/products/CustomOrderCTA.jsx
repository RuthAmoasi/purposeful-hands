import "./CustomOrderCTA.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function CustomOrderCTA() {
  const whatsappMessage = `Hello Purposeful Hands,

I'd like to make a custom order.

Please let me know how I can proceed.

Thank you!`;

  const whatsappUrl = `https://wa.me/233557542005?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="custom-order-section">
      <div className="custom-order-container container">
        <div className="custom-order-content">
          <span className="custom-order-label">Custom Orders</span>

          <h2>Looking for Something Custom?</h2>

          <p>
            We also create custom pieces for special occasions, gifts, bulk
            orders, and unique requests. Tell us what you have in mind and we'll
            be happy to help.
          </p>

          <div className="custom-order-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn custom-order-whatsapp"
            >
              <FaWhatsapp />
              Order via WhatsApp
            </a>

            <Link
              to="/contact?interest=custom-order"
              className="btn btn-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomOrderCTA;
