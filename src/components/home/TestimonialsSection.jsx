import { Link } from "react-router-dom";
import "./TestimonialsSection.css";
import testimonialsImage1 from "../../assets/home/testimonials-img1.png";
import testimonialsImage2 from "../../assets/home/testimonials-img2.png";
import testimonialsImage3 from "../../assets/home/testimonials-img3.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useRef } from "react";
import useFadeInOnScroll from "../../hooks/useFadeInOnScroll";

function TestimonialsSection() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useFadeInOnScroll(card1Ref);
  useFadeInOnScroll(card2Ref);
  useFadeInOnScroll(card3Ref);

  return (
    <section className="home-testimonials-section">
      <div className="home-testimonials-container container">
        <div className="home-testimonials-subtext">
          <h2>Impact Stories</h2>
          <p>
            Real stories from individuals whose lives have been impacted through
            creativity, skill-building, and community.
          </p>
        </div>
        <div className="home-testimonials-grid">
          <div
            ref={card1Ref}
            className="home-testimonial-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="home-testimonial-card-text">
              <RiDoubleQuotesL className="open-double-quotes-icon" />
              <p>
                “Being part of Purposeful Hands has given me confidence in my
                creativity. I’ve learned skills that I never thought I could
                master, and now I can even earn from them.”
              </p>
            </div>

            <div className="home-testimonial-card-author">
              <div className="home-testimonial-card-author-img">
                <img src={testimonialsImage1} alt="Youth Trainee" />
              </div>
              <div className="home-testimonial-card-author-details">
                <h4 className="home-testimonial-card-author-name">Ama K.</h4>
                <p className="home-testimonial-card-author-role">
                  Youth Trainee
                </p>
              </div>
            </div>
          </div>
          <div
            ref={card2Ref}
            className="home-testimonial-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="home-testimonial-card-text">
              <RiDoubleQuotesL className="open-double-quotes-icon" />
              <p>
                "My wife really loves their handmade products. It's always the
                right place to get her a surprise gift."
              </p>
            </div>

            <div className="home-testimonial-card-author">
              <div className="home-testimonial-card-author-img">
                <img src={testimonialsImage2} alt="customer" />
              </div>
              <div className="home-testimonial-card-author-details">
                <h4 className="home-testimonial-card-author-name">Daniel T.</h4>
                <p className="home-testimonial-card-author-role">Customer</p>
              </div>
            </div>
          </div>
          <div
            ref={card3Ref}
            className="home-testimonial-card card glow-effect fade-in-up"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="home-testimonial-card-text">
              <RiDoubleQuotesL className="open-double-quotes-icon" />
              <p>
                “I love how this initiative brings people together. It’s more
                than just learning crafts—it’s about building a supportive and
                empowering community.”
              </p>
            </div>

            <div className="home-testimonial-card-author">
              <div className="home-testimonial-card-author-img">
                <img src={testimonialsImage3} alt="community partner" />
              </div>
              <div className="home-testimonial-card-author-details">
                <h4 className="home-testimonial-card-author-name">Esther M.</h4>
                <p className="home-testimonial-card-author-role">
                  Community Partner
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/about" className="home-testimonials-btn btn btn-primary">
          Read More Stories &rarr;
        </Link>
      </div>
    </section>
  );
}

export default TestimonialsSection;
