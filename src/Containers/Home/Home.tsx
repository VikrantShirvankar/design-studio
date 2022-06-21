import React from 'react';
import HomePageBanner from '../../Components/HomePageBanner/HomePageBanner';
import PortfolioSection from '../../Components/PortfolioSection/PortfolioSection';
import AboutMeSection from '../../Components/AboutMeSection/AboutMeSection';
import WorkSection from '../../Components/WorkSection/WorkSection';
import GoUp from '../../Components/GoUp/GoUp';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <HomePageBanner />
      <PortfolioSection />
      <AboutMeSection />
      <WorkSection />
      <GoUp />
    </div>
  );
};

export default Home;
