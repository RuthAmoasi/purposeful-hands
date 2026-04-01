import { useState } from "react";
import "./Home.css";
import heroImage from "../assets/hero/hero-image.png";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <div className="home-page">
      <div className="hero-section" onMouseMove={handleMouseMove}>
        <div className="hero-content">
          <h1>Crafting Purpose with Every Hand</h1>
          <p>
            Handmade bead and crochet creations, empowering creativity and
            building skills for the future.
          </p>
          <div className="hero-buttons">
            <button className="shop-products">Shop Products</button>
            <button className="home-get-involved">Get Involved</button>
          </div>
        </div>

        <div
          className="hero-image"
          style={{
            "--x": mousePosition.x,
            "--y": mousePosition.y,
            transform: `rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`,
          }}
        >
          <img src={heroImage} alt="Handmade Bead and Crochet Creations" />
        </div>
      </div>
    </div>
  );
}

export default Home;
