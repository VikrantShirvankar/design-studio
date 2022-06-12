import './HomePageBanner.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerData = [
  {
    id: 1,
    image: 'images/Banner/Slider/banner_1.jpg',
    thumbnail: 'images/Banner/Thambnail/banner_1.jpg'
  },
  {
    id: 2,
    image: 'images/Banner/Slider/banner_2.jpg',
    thumbnail: 'images/Banner/Thumbnail/banner_2.jpg'
  },
  {
    id: 3,
    image: 'images/Banner/Slider/banner_3.jpg',
    thumbnail: 'images/Banner/Thumbnail/banner_3.jpg'
  },
  {
    id: 4,
    image: 'images/Banner/Slider/banner_4.jpg',
    thumbnail: 'images/Banner/Thumbnail/banner_4.jpg'
  }
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 3000
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
