import React, { useEffect } from 'react';
import './PageHeaderBanner.scss';

const PageHeaderBanner = (props) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [])
  return <div className="page-banner-image-wrapper">{props.pageName}</div>;
};

export default PageHeaderBanner;
