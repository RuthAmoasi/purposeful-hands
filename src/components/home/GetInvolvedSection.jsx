import { Link } from "react-router-dom";
import "./GetInvolvedSection.css";
import { HiUserGroup, HiHeart, HiUsers } from "react-icons/hi";
import { useRef } from "react";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";

function GetInvolvedSection() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useFadeInOnScroll(card1Ref);
  useFadeInOnScroll(card2Ref);
  useFadeInOnScroll(card3Ref);

  return (
    <section className="home-get-involved-section">
      <div className="home-get-involved-container container">
        <h2>Get Involved</h2>
        <p className="home-get-involved-subtext">
          Be part of transforming lives through creativity, skills, and purpose.
        </p>

        <div className="home-get-involved-grid">
          <div
            ref={card1Ref}
            className="home-get-involved-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="home-get-involved-icon-wrapper">
              <HiUserGroup className="home-get-involved-icon" />
            </div>

            <h3>Volunteer</h3>

            <p>
              Support and mentor individuals by sharing your time and creative
              skills.
            </p>
          </div>
          <div
            ref={card2Ref}
            className="home-get-involved-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="home-get-involved-icon-wrapper">
              <HiHeart className="home-get-involved-icon" />
            </div>
            <h3>Sponsor</h3>

            <p>
              Help provide tools, materials, and resources for skill development
              and growth.
            </p>
          </div>
          <div
            ref={card3Ref}
            className="home-get-involved-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="home-get-involved-icon-wrapper">
              <HiUsers className="home-get-involved-icon" />
            </div>
            <h3>Partner</h3>
            <p>
              Collaborate with us to expand opportunities and create meaningful
              impact together.
            </p>
          </div>
        </div>
        <Link
          to="/opportunities"
          className="home-get-involved-btn btn btn-primary"
        >
          Learn More &rarr;
        </Link>
      </div>
    </section>
  );
}

export default GetInvolvedSection;
