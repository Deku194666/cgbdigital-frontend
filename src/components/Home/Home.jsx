import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import WhyUs from "./WhyUs/WhyUs";
import Contact from "./Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Projects />
      <WhyChooseUs />
      <WhyUs />
      <Contact />
    </div>
  );
};

export default Home;




