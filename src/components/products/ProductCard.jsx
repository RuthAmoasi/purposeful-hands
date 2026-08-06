import "./ProductCard.css";

function ProductCard({ product, onViewDetails }) {
  return (
    <div className="product-card card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-text">
        <h3>{product.name}</h3>
        <p className="product-price">GH₵{product.price}</p>
        <div className="product-card-buttons">
          <button
            className="view-details-btn btn btn-primary"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
