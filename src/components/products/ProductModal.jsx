import "./ProductModal.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProductModal({ selectedProduct, setSelectedProduct }) {
  // useEffect to handle closing the modal when the Escape key is pressed
  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct, setSelectedProduct]);

  // useEffect to prevent scrolling when the modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const whatsappMessage = `Hello Purposeful Hands,

I'm interested in ordering the ${selectedProduct.name} I saw on your website.

Could you please let me know its availability and how I can place my order?

Thank you!`;

  const whatsappUrl = `https://wa.me/233557542005?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={() => setSelectedProduct(null)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          aria-label="Close"
          onClick={() => setSelectedProduct(null)}
        >
          &times;
        </button>
        <h2 className="modal-title">{selectedProduct.name}</h2>
        <img
          className="modal-image"
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
        <p className="modal-price">GH₵{selectedProduct.price}</p>
        <p className="modal-description">{selectedProduct.description}</p>
        <hr className="modal-divider" />
        <div className="modal-order-section">
          <h3>How would you like to order?</h3>
          <div className="modal-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-whatsapp btn btn-primary"
            >
              Order via WhatsApp
            </a>
            <Link
              to="/contact"
              state={{
                productId: selectedProduct.id,
                product: selectedProduct,
              }}
              className="modal-form btn btn-secondary"
            >
              Order via form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
