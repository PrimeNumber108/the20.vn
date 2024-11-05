import React from "react";
import Intro from "./Intro";
import AboutSection from "./AboutSection";
import Team from "./team";
import Product from "./product";
import Partner from "./partner";

const About = () => {
  return (
    <div>
      <Intro />
      <AboutSection />
      <Team />
      <Product />
      <Partner />
    </div>
  );
};

export default About;
