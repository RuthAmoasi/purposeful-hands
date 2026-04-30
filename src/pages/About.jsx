import AboutHeader from "../components/about/AboutHeader";
import FounderStory from "../components/about/FounderStory";
import MissionVision from "../components/about/MissionVision";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <AboutHeader />
      <FounderStory />
      <MissionVision />
    </div>
  );
}

export default About;
