import "./Services.css";
import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";

function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesIntro />
    </div>
  );
}

export default Services;
