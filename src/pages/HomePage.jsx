import Banner from "../components/Banner";
import Header from "../components/Header";
import Cover from "../components/Cover";
import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

import React from "react";

export default function () {
  return (
    <div className="homePage">
      <Banner />
      <Header />
      <Cover />
      <BestSellers />
      <Carousel />
      <About />
      <Instagram />
      <Footer />
    </div>
  );
}
