import "./LearnWithUs.css";
import OpportunityCard from "./OpportunityCard";
import beadsTraining from "../../assets/opportunities/beads-training-img.jpg";
import crochetTraining from "../../assets/about/training-image.png";

function LearnWithUs() {
  const data = [
    {
      image: beadsTraining,
      title: "Bead Craft Training",
      description:
        "Learn the foundations of bead crafting through practical, hands-on training designed to help you develop your creativity and craft skills.",
      status: "COMING SOON",
    },
    {
      image: crochetTraining,
      title: "Crochet Training",
      description:
        "Develop your crochet skills through practical learning, from the basics to creating beautiful handmade pieces.",
      status: "COMING SOON",
    },
  ];

  return (
    <section className="learn-with-us-section">
      <div className="learn-with-us-container container">
        <div className="learn-with-us-text">
          <h4>LEARN WITH US</h4>
          <h2>Build Skills With Purpose</h2>
          <p>
            We envision creating practical learning opportunities that equip
            people with creative skills they can use to express themselves, earn
            an income, and build something of their own.
          </p>
        </div>

        <div className="learn-with-us-grid">
          {data.map((item) => (
            <OpportunityCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnWithUs;
