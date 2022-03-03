import React, { useEffect, useState } from 'react';
import './HomePageBanner.scss';

const bannerData = [
  {
    image:
      'http://localhost:3000/static/media/banner1.png.318cddededaeb087df32.webp',
    thumbnail:
      'https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot2.png',
    text: ''
  },
  {
    image:
      'https://preview.colorlib.com/theme/rettro/assets/img/hero/h1_hero1.png.webp',
    thumbnail:
      'https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot1.png',
    text: ''
  },
  {
    image:
      'https://preview.colorlib.com/theme/rettro/assets/img/hero/h1_hero3.png.webp',
    thumbnail:
      'https://preview.colorlib.com/theme/rettro/assets/img/hero/slider-dot3.png.webp',
    text: ''
  }
];

const HomePageBanner = () => {
  const [bannerActiveImage, setBannerActiveImage] = useState(
    bannerData?.[0]?.image
  );

  const changeBannerImage = (requestedImage: string) => {
    setBannerActiveImage(requestedImage);
  }

  return (
    <div className="banner-container">
      <div
        className="banner-image-container"
        style={{
          backgroundImage: `url(${bannerActiveImage})`
        }}
      >
        <div className="banner-overlay" />
      </div>
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <div className="description">01 Travel Pro</div>
          <div className="thumbnail-wrapper">
            {bannerData?.map((banner) => (
              <div
                className="thumbnail"
                style={{
                  backgroundImage: `url(${banner.thumbnail})`
                }}
                onClick={() => changeBannerImage(banner.image)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
