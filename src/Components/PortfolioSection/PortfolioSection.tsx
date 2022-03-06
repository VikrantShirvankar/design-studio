import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="row">
          <div className="block">
            <img src="https://preview.colorlib.com/theme/rettro/assets/img/gallery/xgallery1.png.pagespeed.ic.ruYLaOoOtt.webp" />
          </div>
          <div className="block">
            <img src="https://preview.colorlib.com/theme/rettro/assets/img/gallery/xgallery2.png.pagespeed.ic.UIrYvLtnDR.webp" />
          </div>
        </div>
        <div className="row">
          <div className="block">
            <img src="https://preview.colorlib.com/theme/rettro/assets/img/gallery/xgallery3.png.pagespeed.ic.aEDsrmDz09.webp" />
          </div>
          <div className="block">
            <img src="https://preview.colorlib.com/theme/rettro/assets/img/gallery/xgallery4.png.pagespeed.ic.QchecjF9TD.webp" />
          </div>
        </div>
      </div>
      <div className="view-more-wrapper">
        <Link to="/portfolio">
          <div className="more">More Portfolio</div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
