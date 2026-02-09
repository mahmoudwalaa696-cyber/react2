import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Product from "./Product";
import Banner1 from "./Banner1";
import Bnnar2 from "./Bnnar2";
import ArrivalsProduct from "./ArrivalsProduct";
import PhotoBanners from "./PhotoBanners";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Product Section */}
      <Product />
      {/* Banner1 Section */}
      <Banner1 />
      {/* ArrivalsProduct Section */}
      <ArrivalsProduct />
      {/* Bnnar2 Section */}
      <Bnnar2 />
      {/* PhotoBanners Section */}
      <PhotoBanners />
    </div>
  );
};

export default Home;
