import "./FounderStory.css";
import founderImage from "../../assets/about/founder-image.png";

function FounderStory() {
  return (
    <section className="founder-story-section">
      <div className="founder-story-container container">
        <div className="founder-story-image">
          <img src={founderImage} alt="Founder" />
        </div>
        <div className="founder-story-text">
          <h4>FOUNDER STORY</h4>
          <h2>A Dream Crafted With Purpose</h2>
          <p className="founder-story-text-body">
            Purposeful Hands began with a simple love for creating. I started
            with beads, then explored crocheting and sewing. What started as a
            personal passion soon became something bigger — a vision to turn
            creativity into opportunity.
          </p>
          <p className="founder-story-text-body">
            I saw how a skill in your hands can open doors, build confidence,
            and create income. So I created Purposeful Hands — a studio where
            handmade meets purpose, and where I can teach others to create,
            earn, and believe in themselves.
          </p>

          <p className="founder-name">Ruth - Founder</p>
        </div>
      </div>
    </section>
  );
}

export default FounderStory;
