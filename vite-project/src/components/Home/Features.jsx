import React from "react";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
} from "../../assets";

const feat = [
  { id: 1, img: feature1, title: "Free Shipping" },
  { id: 2, img: feature2, title: "Online Order" },
  { id: 3, img: feature3, title: "Save Money" },
  { id: 4, img: feature4, title: "Promotions" },
  { id: 5, img: feature5, title: "Happy Sell" },
  { id: 6, img: feature6, title: "24/7 Support" },
];

const Features = () => {
  return (
    <div id="Features" className="section-p1">
      {feat.map((p) => (
        <div className="fe-box" key={p.id}>
          <img src={p.img} alt={p.title} />
          <h6>{p.title}</h6>
        </div>
      ))}
    </div>
  );
};

export default Features;
