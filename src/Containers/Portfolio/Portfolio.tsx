import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeaderBanner from '../../Components/PageHeaderBanner/PageHeaderBanner';
import GoUp from '../../Components/GoUp/GoUp';
import './Portfolio.scss';

const sectionNames = [
  { displayName: 'All', name: 'all' },
  { displayName: 'Canvas Painting', name: 'canvas-painting' },
  { displayName: 'Wall Painting', name: 'wall-painting' },
  { displayName: 'Bottle Art', name: 'bottle-art' },
  { displayName: 'Digital Painting', name: 'digital-painting' }
];

const Portfolio = () => {
  const params = useParams();
  const navigateTo = useNavigate();
  return (
    <>
      <PageHeaderBanner pageName="Portfolio" />
      <div className="portfolio-content-wrapper">
        <div className="left-section">
          {sectionNames.map((section) => (
            <div
              className={`tab-items ${
                params.section === section.name ? 'selected-section' : ''
              }`}
              key={section.name}
              onClick={() => {
                navigateTo('/portfolio/' + section.name);
              }}
            >
              {section.displayName}
            </div>
          ))}
        </div>
        <div className="right-section"></div>
      </div>
      <GoUp />
    </>
  );
};

export default Portfolio;
