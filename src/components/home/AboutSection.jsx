import "./AboutSection.css";
import aboutImage from "../../assets/home/about-image2.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";
import { FaHandsHelping } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

function AboutSection() {
  const textRef = useRef(null);

  useFadeInOnScroll(textRef);

  return (
    <section className="home-about-section">
      <div className="home-about-container container">
        <h1>Who We Are</h1>
        <div className="home-about-content">
          <div className="home-about-image">
            <img src={aboutImage} alt="Crafting tools and materials" />

            <div className="home-about-cards">
              <div className="home-about-card">
                <FaHandsHelping size={50} className="impact-icon" />
                <h4> 50+ Youth Trained</h4>
              </div>

              <div className="home-about-card">
                <FaPaintBrush size={50} className="impact-icon" />
                <h4>Handmade Products Created</h4>
              </div>

              <div className="home-about-card">
                <FaUsers size={50} className="impact-icon" />
                <h4>Community Impact</h4>
              </div>
            </div>
          </div>
          <div ref={textRef} className="home-about-text fade-in-up">
            <h3>Empowering Creativity, Transforming Lives</h3>
            <p>
              Purposeful Hands is dedicated to creating different crafts in
              beadwork, crochet, sewing, among others, and equipping individuals
              with practical skills in these areas, creating opportunities for
              growth, creativity, and financial independence.
            </p>
            <Link to="/about" className="learn-more-button">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
