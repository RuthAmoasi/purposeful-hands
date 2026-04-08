import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
    </div>
  );
}

export default Home;
