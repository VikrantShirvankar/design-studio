import React from 'react';
import PageHeaderBanner from '../../Components/PageHeaderBanner/PageHeaderBanner';
import GoUp from '../../Components/GoUp/GoUp';

const About = () => {
  return (
    <>
      <PageHeaderBanner pageName="About" />
      <div style={{ height: 500 }} />
      <GoUp />
    </>
  );
};

export default About;
