import AboutHeader from "../components/about/AboutHeader";
import FounderStory from "../components/about/FounderStory";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <AboutHeader />
      <FounderStory />
    </div>
  );
}

export default About;
