import "./AboutHeader.css";
import curvyLine from "../../assets/about/scribble.png";

function AboutHeader() {
  return (
    <section className="about-header-section">
      <div className="about-header-container container">
        <div className="about-header-text">
          <span className="about-header-badge">ABOUT US</span>

          <h1>About Purposeful Hands Studio</h1>
          <p>Create. Empower. Grow</p>
        </div>
        <div className="about-header-image">
          <img
            src={curvyLine}
            alt="Decorative curvy line"
            className="curvy-line"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
