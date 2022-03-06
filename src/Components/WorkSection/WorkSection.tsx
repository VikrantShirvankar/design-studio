import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkSection.scss';

const WorkSection = () => {
  return (
    <div className="work-section-container">
      <div className="title">Life is about Creating Experiences</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet
      </div>
    </div>
  );
};

export default WorkSection;
