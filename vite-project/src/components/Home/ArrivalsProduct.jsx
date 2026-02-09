import React from "react";
import { Link } from "react-router-dom";

import {
  shopN1,
  shopN2,
  shopN3,
  shopN4,
  shopN5,
  shopN6,
  shopN7,
  shopN8,
} from "../../assets";

const products = [
  {
    id: 1,
    img: shopN1,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 2,
    img: shopN2,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 3,
    img: shopN3,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 4,
    img: shopN4,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 5,
    img: shopN5,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 6,
    img: shopN6,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 7,
    img: shopN7,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 8,
    img: shopN8,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
];
const ArrivalsProduct = () => {
  return (
    <div id="Product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>

      <div className="pro_container">
        {products.map((pro) => (
          <div className="pro" key={pro.id}>
            <img src={pro.img} alt={pro.title} />

            <div className="descreption">
              <span>{pro.brand}</span>
              <h5>{pro.title}</h5>

              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <Link to="#" className="hvr-icon-pop" key={i}>
                    <i className="fa fa-star hvr-icon"></i>
                  </Link>
                ))}
              </div>

              <h4>${pro.price}</h4>
            </div>

            <Link to="#">
              <i className="fa-solid fa-cart-plus cart"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrivalsProduct;
