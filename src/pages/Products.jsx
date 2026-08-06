import "./Products.css";
import ProductsHero from "../components/products/ProductsHero";
import ProductsGrid from "../components/products/ProductsGrid";

function Products() {
  return (
    <div className="products-page">
      <ProductsHero />
      <ProductsGrid />
    </div>
  );
}

export default Products;
