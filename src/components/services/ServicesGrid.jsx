import "./ServicesGrid.css";
import ServiceCard from "../about/ServiceCard";
import hairStylingImg from "../../assets/services/hair-styling.webp";
import manicurePedicureImg from "../../assets/services/manicure-and-pedicure.png";
import eventDecorationImg from "../../assets/services/event-decoration.jpg";

function ServicesGrid() {
  const data = [
    {
      image: hairStylingImg,
      title: "Hair Services",
      text: "Personal hair care and styling services designed to help you look and feel your best.",
      status: "Coming Soon",
    },
    {
      image: manicurePedicureImg,
      title: "Manicure & Pedicure",
      text: "Relaxing nail care services focused on keeping your hands and feet polished and cared for.",
      status: "Coming Soon",
    },
    {
      image: eventDecorationImg,
      title: "Event Decoration",
      text: "Creative decoration services to help transform your celebrations and special occasions.",
      status: "Coming Soon",
    },
  ];

  return (
    <section className="services-grid-section" id="services-grid">
      <div className="services-grid-container container">
        <h4>OUR SERVICES</h4>
        <h2>Services We're Growing Into</h2>
        <div className="services-grid-content">
          {data.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
