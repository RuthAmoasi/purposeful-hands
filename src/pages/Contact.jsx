import "./Contact.css";
import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";

function Contact() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactSection />
    </div>
  );
}

export default Contact;
