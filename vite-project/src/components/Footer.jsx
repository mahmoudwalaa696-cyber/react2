import React from "react";
import { Link } from "react-router-dom";
import { Logo, FooterApp, FooterPlay, FooterPay } from "../assets"; // named imports

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={Logo} alt="Logo" />
        <h4>Contacts</h4>
        <p>
          <strong>Address: </strong> 563 Welligntone Roas, Street, San Fransisco
        </p>
        <p>
          <strong>Phone: </strong> +002 010 64 50 16 82
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
        </p>

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to="#">About Us</Link>
        <Link to="#">Delivery Information</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms & Condition</Link>
        <Link to="#">Contact Us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to="#">Sign In</Link>
        <Link to="#">View Cart</Link>
        <Link to="#">My Wishlist</Link>
        <Link to="#">Track My Order</Link>
        <Link to="#">Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store Or Google Play</p>
        <div className="row">
          <img src={FooterApp} alt="App Store" />
          <img src={FooterPlay} alt="Play Store" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={FooterPay} alt="Payment" />
      </div>

      <div className="copyRight">
        <p>@ 2022, Tech2 etc - HTML CSS ECOMMERCE TEMPLATES</p>
      </div>
    </footer>
  );
};

export default Footer;
