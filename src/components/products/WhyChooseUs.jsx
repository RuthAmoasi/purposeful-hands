import "./WhyChooseUs.css";
import {
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineChat,
} from "react-icons/hi";
import { PiSparkle } from "react-icons/pi";

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container container">
        <h4 className="why-choose-us-heading">WHY CHOOSE US</h4>

        <h2 className="why-choose-us-subheading">Made with Purpose</h2>

        <p className="why-choose-us-text">
          We put our heart into every piece we create, so you can shop with
          confidence and purpose
        </p>

        <div className="why-choose-us-grid">
          <div className="why-choose-us-card card">
            <HiOutlineHeart className="why-choose-us-icon" />

            <div className="why-choose-us-card-text">
              <h3>Made with Care</h3>

              <p>
                Every piece is thoughtfully handmade with attention to detail
                and quality
              </p>
            </div>
          </div>

          <div className="why-choose-us-card card">
            <PiSparkle className="why-choose-us-icon" />

            <div className="why-choose-us-card-text">
              <h3>Unique &amp; Handmade</h3>

              <p>
                Our products are created by hand, giving each piece its own
                character and charm
              </p>
            </div>
          </div>

          <div className="why-choose-us-card card">
            <HiOutlineLightBulb className="why-choose-us-icon" />

            <div className="why-choose-us-card-text">
              <h3>Made with Purpose</h3>

              <p>
                Your support helps us create opportunities for creativity,
                learning and empowerment.
              </p>
            </div>
          </div>

          <div className="why-choose-us-card card">
            <HiOutlineChat className="why-choose-us-icon" />

            <div className="why-choose-us-card-text">
              <h3>Personal &amp; friendly service</h3>

              <p>
                We're happy to help you choose a product, answer your questions
                and guide you through your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
