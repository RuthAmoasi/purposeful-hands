import "./ProductsSection.css";
import tissueBoxImage from "../../assets/home/tissue-box.jpg";
import crochetBagImage from "../../assets/home/crochet-bag.jpg";
import beadedJewelryImage from "../../assets/home/beaded-jewelry.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";

function ProductsSection() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useFadeInOnScroll(card1Ref);
  useFadeInOnScroll(card2Ref);
  useFadeInOnScroll(card3Ref);

  return (
    <section className="home-products-section">
      <div className="home-products-container container">
        <h2>Our Creations</h2>
        <p className="home-products-subtext">
          Discover beautiful handmade beadwork and crochet pieces crafted with
          purpose and passion.
        </p>
        <div className="home-products-grid">
          <div
            ref={card1Ref}
            className="home-product-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <img src={tissueBoxImage} alt="Tissue Box" />
            <div className="home-product-img-text">
              <h3>Tissue Box</h3>
              <p>Handmade with care, perfect for everyday use.</p>
            </div>
          </div>
          <div
            ref={card2Ref}
            className="home-product-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <img src={crochetBagImage} alt="Crochet Bag" />
            <div className="home-product-img-text">
              <h3>Crochet Bag</h3>
              <p>Stylish and functional, handmade with love.</p>
            </div>
          </div>
          <div
            ref={card3Ref}
            className="home-product-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <img src={beadedJewelryImage} alt="Beaded Jewelry" />
            <div className="home-product-img-text">
              <h3>Beaded Jewelry</h3>
              <p>Elegant and colorful, perfect for any occasion.</p>
            </div>
          </div>
        </div>

        <Link to="/products" className="view-products-btn btn btn-primary">
          View All Products &rarr;
        </Link>
      </div>
    </section>
  );
}

export default ProductsSection;
