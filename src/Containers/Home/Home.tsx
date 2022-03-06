import React from 'react';
import HomePageBanner
 from '../../Components/HomePageBanner/HomePageBanner';
 import PortfolioSection from '../../Components/PortfolioSection/PortfolioSection';
 import AboutMeSection from '../../Components/AboutMeSection/AboutMeSection';
 import WorkSection from '../../Components/WorkSection/WorkSection';
 import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <HomePageBanner />
      <PortfolioSection />
      <AboutMeSection />
      <WorkSection />
    </div>
  );
};

export default Home;
