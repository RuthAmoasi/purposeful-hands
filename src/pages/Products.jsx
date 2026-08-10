import "./Products.css";
import ProductsHero from "../components/products/ProductsHero";
import ProductsGrid from "../components/products/ProductsGrid";
import ProductsOrdering from "../components/products/ProductsOrdering";

function Products() {
  return (
    <div className="products-page">
      <ProductsHero />
      <ProductsGrid />
      <ProductsOrdering />
    </div>
  );
}

export default Products;
