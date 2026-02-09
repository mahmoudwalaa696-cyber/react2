import { Link } from "react-router-dom";

import {
  shopF1,
  shopF2,
  shopF3,
  shopF4,
  shopF5,
  shopF6,
  shopF7,
  shopF8,
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
    img: shopF1,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 2,
    img: shopF2,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 3,
    img: shopF3,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 4,
    img: shopF4,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 5,
    img: shopF5,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 6,
    img: shopF6,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 7,
    img: shopF7,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 8,
    img: shopF8,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 9,
    img: shopN1,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 10,
    img: shopN2,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 11,
    img: shopN3,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 12,
    img: shopN4,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 13,
    img: shopN5,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 14,
    img: shopN6,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 15,
    img: shopN7,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
  {
    id: 16,
    img: shopN8,
    title: "Carton Astrount T-Shirts",
    brand: "adidas",
    price: 90,
  },
];

const ShopeProduct = () => {
  return (
    <div>
      <section id="Product1" className="section-p1">
        <div className="pro_container">
          {products.map((product) => (
            <div className="pro" key={product.id}>
              <img src={product.img} alt={product.title} />
              <div className="descreption">
                <span>{product.brand}</span>
                <h5>{product.title}</h5>
                <div className="star">
                  {/* عرض 5 نجوم */}
                  {[...Array(5)].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <Link to="#">
                <i className="fa-solid fa-cart-plus cart"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopeProduct;
