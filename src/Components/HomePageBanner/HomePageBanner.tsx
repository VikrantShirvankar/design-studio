import React, { useEffect, useState } from 'react';
import './HomePageBanner.scss';

const bannerData = [
  {
    image:
      'http://localhost:3000/static/media/banner1.png.318cddededaeb087df32.webp',
    thumbnail: '',
    text: ''
  },
  {
    image:
      'http://localhost:3000/static/media/banner1.png.318cddededaeb087df32.webp',
    thumbnail: '',
    text: ''
  },
  {
    image:
      'http://localhost:3000/static/media/banner1.png.318cddededaeb087df32.webp',
    thumbnail: '',
    text: ''
  },
  {
    image:
      'http://localhost:3000/static/media/banner1.png.318cddededaeb087df32.webp',
    thumbnail: '',
    text: ''
  }
];

const HomePageBanner = () => {
  return (
    <div className="banner-container">
      <div
        className="banner-image-container"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/rettro/assets/img/hero/h1_hero3.png.webp')"
        }}
      >
        <div className="banner-overlay" />
      </div>
        <div className="banner-content-wrapper">
        <div className="banner-content">
          <div className="description">01 Travel Pro</div>
          <div className="thumbnail-wrapper">
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot2.png')"
              }}
            ></div>
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot2.png')"
              }}
            ></div>
            <div
              className="thumbnail"
              style={{
                backgroundImage:
                  "url('https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot2.png')"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
