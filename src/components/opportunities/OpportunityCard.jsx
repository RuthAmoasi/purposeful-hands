import "./OpportunityCard.css";

function OpportunityCard({ image, title, description, status }) {
  return (
    <div className="opportunity-card card">
      <img src={image} alt={title} className="opportunity-card-image" />

      <div className="opportunity-card-text">
        <h5>{title}</h5>
        <p>{description}</p>
        {status && <span className="opportunity-card-status">{status}</span>}
      </div>
    </div>
  );
}

export default OpportunityCard;
