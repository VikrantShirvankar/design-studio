import React from 'react';
import HomePageBanner
 from '../../Components/HomePageBanner/HomePageBanner';
 import PortfolioSection from '../../Components/PortfolioSection/PortfolioSection';
 import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <HomePageBanner />
      <PortfolioSection />
    </div>
  );
};

export default Home;
