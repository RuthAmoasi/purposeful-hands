import AboutHeader from "../components/about/AboutHeader";
import FounderStory from "../components/about/FounderStory";
import MissionVision from "../components/about/MissionVision";
import "./About.css";
import WhatWeDo from "../components/about/WhatWeDo";

function About() {
  return (
    <div className="about-page">
      <AboutHeader />
      <FounderStory />
      <MissionVision />
      <WhatWeDo />
    </div>
  );
}

export default About;
