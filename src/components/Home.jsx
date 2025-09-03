import React from "react";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => (
  <div className="home-page">
    <Hero />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
