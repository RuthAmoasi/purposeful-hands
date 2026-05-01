import "./WhatWeDo.css";
import ServiceCard from "./ServiceCard";
import craftsImage from "../../assets/about/crafts-image.png";
import servicesImage from "../../assets/about/services-image.png";
import trainingImage from "../../assets/about/training-image.png";
import customOrderImg from "../../assets/about/custom-order-img.png";

function WhatWeDo() {
  const data = [
    {
      image: craftsImage,
      title: "Crafts",
      text: "Handmade beaded items, crochet pieces, and sewn creations made with care.",
    },
    {
      image: servicesImage,
      title: "Services",
      text: "Beauty services coming soon to help you look and feel your best.",
    },
    {
      image: trainingImage,
      title: "Training",
      text: "Practical training in beading, crocheting, sewing, and more.",
    },
    {
      image: customOrderImg,
      title: "Custom Orders",
      text: "Personalized handmade items crafted to your specifications, perfect for gifts or special occasions.",
    },
  ];

  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container container">
        <h4>WHAT WE DO</h4>
        <h2>Create. Serve. Teach</h2>
        <div className="what-we-do-content">
          {data.map((item, index) => (
            <ServiceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
