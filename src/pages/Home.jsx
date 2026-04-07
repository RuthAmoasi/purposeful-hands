import "./Home.css";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default Home;
