import "./Opportunities.css";
import OpportunitiesHero from "../components/opportunities/OpportunitiesHero";
import LearnWithUs from "../components/opportunities/LearnWithUs";
import WorkWithUs from "../components/opportunities/WorkWithUs";
import VolunteerWithUs from "../components/opportunities/VolunteerWithUs";

function Opportunities() {
  return (
    <div className="opportunities-page">
      <OpportunitiesHero />
      <LearnWithUs />
      <WorkWithUs />
      <VolunteerWithUs />
    </div>
  );
}

export default Opportunities;
