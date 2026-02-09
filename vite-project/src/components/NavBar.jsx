import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
const NavBar = () => {
  return (
    <section id="header">
      <Link to="/">
        {" "}
        <img src={Logo} alt="Logo" />{" "}
      </Link>
      <ul id="navBar">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link id="lg_bag" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
