import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="footer-logo">
          <span className="footer-image">
            <img src={logo} alt="Purposeful Hands Logo" className="logo" />
          </span>
          <hr />
          <p>
            Empowering creativity and purpose through handmade crafts and skill
            development.
          </p>
        </div>
        <div className="footer-quick-links">
          <h3 className="quick-links-header">Quick Links</h3>
          <ul className="quick-links-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/opportunities">Opportunities</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <a href="mailto:info@purposefulhands.com">
            Email: info@purposefulhands.com
          </a>
          <a href="tel:+1234567890">Phone: (123) 456-7890</a>
          <p>Address: 123 Craft Lane, Creativity City, Country</p>
        </div>
        <div className="get-involved">
          <h3>Get Involved</h3>
          <Link to="/opportunities">Volunteer</Link>
          <Link to="/opportunities">Collaborate</Link>
          <Link to="/opportunities">Partner with Us</Link>
        </div>
      </div>

      <div className="lower-footer">
        <p>&copy; 2026 Purposeful Hands. All rights reserved.</p>

        <div className="social-media">
          <span className="social-icon">
            <FaInstagram size={23} />
          </span>
          <span className="social-icon">
            <FaFacebookF size={23} />
          </span>
          <span className="social-icon">
            <FaTwitter size={23} />
          </span>
          <span className="social-icon">
            <FaYoutube size={23} />
          </span>
          <span className="social-icon">
            <FaTiktok size={23} />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
