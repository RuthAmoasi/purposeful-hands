import "./ProductsOrdering.css";
import { HiOutlineSearch, HiOutlineEye } from "react-icons/hi";
import { PiPackage } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { FaWpforms, FaWhatsapp } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function ProductsOrdering() {
  return (
    <section className="products-ordering-section">
      <div className="products-ordering-container container">
        <span className="products-ordering-heading">HOW ORDERING WORKS</span>

        <h2 className="products-ordering-subheading">Ordering is Simple</h2>

        <p className="products-ordering-text">
          We've made it easy for you to shop your favourite handmade pieces.
          Follow these simple steps to place your order.
        </p>

        <div className="products-ordering-steps">
          {/* Step 1 */}
          <div className="products-ordering-step-card card">
            <div className="ordering-step-card-icon-wrapper">
              <TiShoppingCart className="ordering-step-card-icon" />
            </div>

            <div className="ordering-step-card-number">1</div>

            <h3>Browse Products</h3>

            <p>
              Explore our collection of handmade beadwork, crochet, sewing and
              more.
            </p>
          </div>

          {/* Step 2 */}
          <div className="products-ordering-step-card card">
            <div className="ordering-step-card-icon-wrapper">
              <HiOutlineSearch className="ordering-step-card-icon" />
            </div>

            <div className="ordering-step-card-number">2</div>

            <h3>View Details</h3>

            <p>
              Click on any product to see more details, including description
              and price.
            </p>
          </div>

          {/* Step 3 */}
          <div className="products-ordering-step-card card">
            <div className="ordering-step-card-icon-wrapper">
              <div className="ordering-order-icons">
                <FaWhatsapp className="ordering-step-card-icon" />
                <FaWpforms className="ordering-step-card-icon" />
              </div>
            </div>

            <div className="ordering-step-card-number">3</div>

            <h3>Place your Order</h3>

            <p>
              Choose to order via Whatsapp for quick response or fill out our
              order form.
            </p>
          </div>

          {/* Step 4 */}
          <div className="products-ordering-step-card card">
            <div className="ordering-step-card-icon-wrapper">
              <FaCheckCircle className="ordering-step-card-icon" />
            </div>

            <div className="ordering-step-card-number">4</div>

            <h3>Confirmation</h3>

            <p>
              We'll get back to you to confirm your order, payment and delivery
              details.
            </p>
          </div>
        </div>

        <div className="products-ordering-last-text">
          <p>
            Need help along the way? We're just a message away.
            <br />
            <strong>Our customer service team is here to support you.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductsOrdering;
