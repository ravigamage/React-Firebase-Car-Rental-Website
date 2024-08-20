import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import "../styles/About.css"; 

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <div className="about-section-container">
        <AboutSection />
      </div>
    </Helmet>
  );
};

export default About;
