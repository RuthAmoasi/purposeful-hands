import { useState } from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero/hero-image.png";
import { Link } from "react-router-dom";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-section-container container">
        <div className="hero-content">
          <h1>Crafting Purpose with Every Hand</h1>
          <p>
            Handmade bead and crochet creations, empowering creativity and
            building skills for the future.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="home-shop-products btn btn-primary">
              Shop Products
            </Link>
            <Link
              to="/opportunities"
              className="home-get-involved btn btn-secondary"
            >
              Get Involved
            </Link>
          </div>
        </div>

        <div
          className="hero-image"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            "--x": mousePosition.x,
            "--y": mousePosition.y,
            transform: `rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)
            scale(${isHovering ? 1.01 : 1})`,
          }}
        >
          <img src={heroImage} alt="Handmade Bead and Crochet Creations" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
