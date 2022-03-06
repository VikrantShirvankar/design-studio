import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMeSection.scss';
const AboutMeSection = () => {
  return (
    <div className="about-me-section">
      <div className="title">I'm Ready to Exceed Expectations</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet
      </div>
      <Link to="/about">
        <div className="about-btn">About Me</div>
      </Link>
    </div>
  );
};

export default AboutMeSection;
