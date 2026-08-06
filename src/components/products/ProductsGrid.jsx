import "./ProductsGrid.css";
import { products } from "./productsData";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="products-grid-section" id="products-grid">
      <div className="products-grid-container container">
        <div className="products-grid-header">
          <h2 className="products-grid-title">Our Products</h2>
          <p className="products-grid-description">
            Discover our handcrafted collection of beadwork, crochet, sewing,
            and creative pieces made with care, creativity, and purpose. Click
            on any product to view more details and place your order.
          </p>
        </div>
        <div className="products-grid-content">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    </section>
  );
}

export default ProductsGrid;
