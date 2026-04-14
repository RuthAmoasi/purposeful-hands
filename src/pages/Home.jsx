import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";
import ServicesSection from "../components/home/ServicesSection";
import GetInvolvedSection from "../components/home/GetInvolvedSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <GetInvolvedSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
