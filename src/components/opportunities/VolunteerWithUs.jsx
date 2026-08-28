import "./VolunteerWithUs.css";
import { Link } from "react-router-dom";
import volunteerImg from "../../assets/opportunities/volunteer.jpeg";

function VolunteerWithUs() {
  return (
    <section className="volunteer-section">
      <div className="volunteer-container container">
        <div className="volunteer-image">
          <img
            src={volunteerImg}
            alt="People working together on a creative craft project"
          />
        </div>
        <div className="volunteer-text">
          <h4 className="volunteer-heading">VOLUNTEER WITH US</h4>
          <h2>Give Your Time. Share Your Skills. Make a Difference.</h2>
          <p className="volunteer-description">
            There are many ways to contribute beyond employment. Whether you
            have creative skills, technical skills, event experience, or simply
            a willingness to help, we'd love to hear from people who want to
            contribute to our work.
          </p>
          <h3 className="ways-to-volunteer-subheading">
            WAYS YOU CAN CONTRIBUTE
          </h3>
          <div className="volunteer-option">
            <h4>Creative & Craft Support</h4>
            <p>
              Help with creative activities, workshops, and handmade projects.
            </p>
          </div>
          <div className="volunteer-option">
            <h4>Events & Activities</h4>
            <p>
              Support the planning and execution of workshops, events, and
              studio activities.
            </p>
          </div>
          <div className="volunteer-option">
            <h4>Skills & Expertise</h4>
            <p>
              Share your professional or technical skills to help Purposeful
              Hands grow.
            </p>
          </div>
          <div className="volunteer-option">
            <h4>Community Initiatives</h4>
            <p>
              Contribute your time and ideas to projects that create meaningful
              impact.
            </p>
          </div>
          <Link to="/contact" className="volunteer-btn btn btn-primary">
            Volunteer With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default VolunteerWithUs;
