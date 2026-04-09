import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";
import ServicesSection from "../components/home/ServicesSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
