import "./Products.css";
import ProductsHero from "../components/products/ProductsHero";
import ProductsGrid from "../components/products/ProductsGrid";
import ProductsOrdering from "../components/products/ProductsOrdering";
import WhyChooseUs from "../components/products/WhyChooseUs";
import CustomOrderCTA from "../components/products/CustomOrderCTA";

function Products() {
  return (
    <div className="products-page">
      <ProductsHero />
      <ProductsGrid />
      <ProductsOrdering />
      <WhyChooseUs />
      <CustomOrderCTA />
    </div>
  );
}

export default Products;
