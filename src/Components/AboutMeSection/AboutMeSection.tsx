import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutMeSection.scss';
const AboutMeSection = () => {
  return (
    <div className="about-me-section">
      <div className="title">We Are Ready to Exceed Expectations</div>
      <div className="description">
        Subak Arts studio is a team of creative artists with a desire of
        Expansion of new aspects of painting in rural areas, bringing to the
        fore various features of Konkan through paintings, exhibitions encourage
        Students from rural as well as urban areas, encourage painting lovers to
        develop new style of painting.
      </div>
      <Link to="/about">
        <div className="about-btn">About Us</div>
      </Link>
    </div>
  );
};

export default AboutMeSection;
