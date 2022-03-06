import { doc } from 'prettier';
import React, { useEffect, useState } from 'react';
import './HomePageBanner.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerData = [
  {
    id: 3,
    image:
      'https://drive.google.com/uc?export=view&id=1OmHyuMerFg4X8XQhOZIe1Ehh6Oqdtm9g',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1SI9rmt5iC75wNEEYontPbOBWtgYp1Be8',
  },
  {
    id: 2,
    image:
      'https://drive.google.com/uc?export=view&id=1CgpF5Z4lPqrCG0VYJ32Asc0twviuS63P',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1mPbXqJBsa753J6IXcNjJx16PNeoyHiZO'
  },
  {
    id: 1,
    image:
      'https://drive.google.com/uc?export=view&id=12X7RCMZIa-4qjBNg91LOYc3obzkS_nXO',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=1CD8f-tIbfATBKB55qAAQw_REhtzyiG6A'
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 3000,
};
const HomePageBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <Slider {...settings}>
          {bannerData?.map((banner) => (
            <div key={banner.id}>
              <div
                className="slider__image"
                style={{ backgroundImage: `url(${banner.image})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageBanner;
