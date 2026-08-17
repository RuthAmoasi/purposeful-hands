import "./Services.css";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesGrid from "../components/services/ServicesGrid";

function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
    </div>
  );
}

export default Services;
