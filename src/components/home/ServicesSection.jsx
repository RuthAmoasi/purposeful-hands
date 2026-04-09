import { Link } from "react-router-dom";
import "./ServicesSection.css";
import skillTrainingImage from "../../assets/home/skill-training.png";
import handmadeProductsImage from "../../assets/home/handmade-products.png";
import communityEmpowermentImage from "../../assets/home/community-empowerment.png";
import workshopsImage from "../../assets/home/workshops.png";

function ServicesSection() {
  return (
    <section className="home-services-section">
      <div className="home-services-container container">
        <h2>What We Offer</h2>
        <p className="home-services-subtext">
          Empowering creativity through skills, products and community impact.
        </p>
        <div className="home-services-grid">
          <div className="home-service-card">
            <div className="home-service-card-text">
              <h3>Skill Training</h3>
              <p>
                Training programs in various crafts, from beadwork to crochets,
                empowering individuals with valuable skills.
              </p>
            </div>
            <div className="home-service-card-image">
              <img src={skillTrainingImage} alt="Skill Training" />
            </div>
          </div>
          <div className="home-service-card">
            <div className="home-service-card-text">
              <h3>Handmade Products</h3>
              <p>
                Creating and selling unique, handcrafted items made with care
                and love
              </p>
            </div>
            <div className="home-service-card-image">
              <img src={handmadeProductsImage} alt="Handmade Products" />
            </div>
          </div>
          <div className="home-service-card">
            <div className="home-service-card-text">
              <h3>Community Empowerment</h3>
              <p>
                Supporting underprivileged and disabled individuals through
                creative opportunities and skill development.
              </p>
            </div>
            <div className="home-service-card-image">
              <img
                src={communityEmpowermentImage}
                alt="Community Empowerment"
              />
            </div>
          </div>
          <div className="home-service-card">
            <div className="home-service-card-text">
              <h3>Workshops and Events</h3>
              <p>
                Organising community workshops, exhibitions and outreach
                programs.
              </p>
            </div>
            <div className="home-service-card-image">
              <img src={workshopsImage} alt="Workshops and Events" />
            </div>
          </div>
        </div>

        <Link to="/services" className="home-services-btn">
          Explore Our Services &rarr;
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
