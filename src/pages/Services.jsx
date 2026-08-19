import "./Services.css";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesCTA from "../components/services/ServicesCTA";

function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  );
}

export default Services;
