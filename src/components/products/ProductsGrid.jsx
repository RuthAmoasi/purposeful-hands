import "./ProductsGrid.css";
import { products } from "./productsData";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

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
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="products-pagination">
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="pagination-button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
    </section>
  );
}

export default ProductsGrid;
