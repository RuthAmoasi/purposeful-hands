import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container container">
        <h2>Mission & Vision</h2>
        <div className="mission-vision-content">
          <div className="mission-vision-card card">
            <i className="fi fi-sr-bullseye-arrow mission-vision-icon"></i>
            <div className="mission-vision-text">
              <h4>OUR MISSION</h4>
              <p>
                To create beautiful handmade products while equipping
                individuals with practical skills for self-reliance and income.
              </p>
            </div>
          </div>
          <div className="mission-vision-card card">
            <i className="fi fi-sr-mountains mission-vision-icon"></i>
            <div className="mission-vision-text">
              <h4>OUR VISION</h4>
              <p>
                To build a community where creativity becomes a tool for
                empowerment, opportunity, and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
