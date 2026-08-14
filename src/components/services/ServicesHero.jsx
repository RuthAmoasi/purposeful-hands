import "./ServicesHero.css";
import { useState, useEffect } from "react";
import manicureImg from "../../assets/services/manicure.jpeg";
import eventDecorationImg from "../../assets/services/event-decoration.jpg";
import manicurePedicureImg from "../../assets/services/manicure-and-pedicure.png";
import hairStylingImg from "../../assets/services/hair-styling.webp";

const images = [
  hairStylingImg,
  manicureImg,
  manicurePedicureImg,
  eventDecorationImg,
];

function ServicesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up timer to advance the slide
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    // Clean up interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services-hero-section">
      {/* Background Images Layer */}
      {images.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`hero-bg-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      ))}

      <div className="services-hero-container container">
        <span className="services-hero-label">OUR SERVICES</span>
        <div className="services-hero-text">
          <h1>More Ways to Experience Purposeful Hands Studio</h1>
          <p>
            Creative, personal, and thoughtful services designed with you in
            mind.
          </p>
        </div>
        <button
          type="button"
          className="services-hero-btn btn btn-primary"
          onClick={() => {
            document
              .getElementById("services-grid")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Our Services ↓
        </button>
      </div>
    </section>
  );
}

export default ServicesHero;
