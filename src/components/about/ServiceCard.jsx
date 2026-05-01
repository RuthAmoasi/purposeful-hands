import "./ServiceCard.css";

function ServiceCard({ image, title, text }) {
  return (
    <div className="service-card card">
      <img
        src={image}
        alt={`${title} example`}
        className="service-card-image"
      />

      <div className="service-card-text">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
