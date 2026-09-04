import { useSearchParams, useLocation } from "react-router-dom";
import "./ContactSection.css";

function ContactSection() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const interest = searchParams.get("interest") || "";
  const product = location.state?.product || null;

  const messagePlaceholders = {
    product: "Tell us anything you'd like us to know about your order...",
    "custom-order":
      "Tell us what you'd like us to create and any details you'd like us to know...",
    service:
      "Tell us which service you're interested in and how we can help...",
    training: "Tell us which training you're interested in...",
    volunteering:
      "Tell us a little about yourself and how you'd like to volunteer...",
    collaboration: "Tell us a little about your collaboration idea...",
    partnership: "Tell us how you'd like to partner with Purposeful Hands...",
    general: "Write your message here...",
  };

  return (
    <section className="contact-section">
      <div className="contact-container container">
        <div className="contact-info">
          <p className="contact-eyebrow">CONTACT US</p>

          <h2 className="contact-heading">We’d Love to Hear From You</h2>

          <p className="contact-description">
            Whether you have a question, want to place an order, learn about our
            services, or explore an opportunity to work with us, feel free to
            reach out.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <h3>Email</h3>
              <p>info@purposefulhands.com</p>
            </div>

            <div className="contact-detail">
              <h3>Phone / WhatsApp</h3>
              <p>(123) 456-7890</p>
            </div>

            <div className="contact-detail">
              <h3>Location</h3>
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="interest">
                What are you contacting us about?
              </label>

              <select
                id="interest"
                name="interest"
                defaultValue={product ? "product" : interest}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="product">Product / Order</option>
                <option value="custom-order">Custom Order</option>
                <option value="service">Service</option>
                <option value="training">Training</option>
                <option value="volunteering">Volunteering</option>
                <option value="collaboration">Collaboration</option>
                <option value="partnership">Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            {product && (
              <div className="selected-product">
                <p className="selected-product-label">Product</p>
                <p className="selected-product-name">{product.name}</p>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder={
                  product
                    ? "Tell us anything you'd like us to know about your order..."
                    : messagePlaceholders[interest] ||
                      "Write your message here..."
                }
              ></textarea>
            </div>

            <button type="submit" className="contact-form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
