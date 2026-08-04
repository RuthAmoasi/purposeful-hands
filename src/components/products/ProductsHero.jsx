import "./ProductsHero.css";

function ProductsHero() {
  return (
    <section className="products-hero-section">
      <div className="products-hero-container container">
        <div className="products-hero-content">
          <div className="products-hero-text">
            <span className="products-label">Products</span>

            <h1>Handmade with Purpose</h1>

            <p>
              Explore our collection of handcrafted beadwork, crochet, sewing,
              and creative pieces made with care, creativity, and purpose.
            </p>

            <a
              href="#products-grid"
              className="products-hero-btn btn btn-primary"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
