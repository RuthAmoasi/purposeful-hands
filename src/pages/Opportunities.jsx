import "./Opportunities.css";
import OpportunitiesHero from "../components/opportunities/OpportunitiesHero";
import LearnWithUs from "../components/opportunities/LearnWithUs";
import WorkWithUs from "../components/opportunities/WorkWithUs";

function Services() {
  return (
    <div className="opportunities-page">
      <OpportunitiesHero />
      <LearnWithUs />
      <WorkWithUs />
    </div>
  );
}

export default Services;
