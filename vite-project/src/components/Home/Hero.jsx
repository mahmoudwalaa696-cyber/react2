import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div id="hero">
        <Link to="#" className="hvr-wobble-to-bottom-right">
          Mahmoud Habib
        </Link>
        <h4>Trade-In-Offer</h4>
        <h2>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p>Save More With Coupons & Up To 70% Off!</p>
        <button> Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
