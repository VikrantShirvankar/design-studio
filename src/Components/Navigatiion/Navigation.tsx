import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavItems from './NavItems';
import './Navigation.scss';

const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Portfolio',
    path: '/portfolio'
  },

  {
    name: 'Contact',
    path: '/contact'
  }
];

const Navigation = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth <= 768);
  const [isMneuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setIsMobileMenu(false);
      setIsMenuDrawerOpen(false);
    } else {
      setIsMobileMenu(true);
    }
  };

  const toggleMenuDrawer = () => {
    setIsMenuDrawerOpen(!isMneuDrawerOpen);
  };

  const mobileNavigationContainer = isMobileMenu
    ? 'mobile-navigation-container'
    : '';

  return (
    <>
      <div className={`navigation-container ${mobileNavigationContainer}`}>
        <div className="menu-title">Rettro</div>

        {!isMobileMenu && (
          <div className="menu-items-wrapper">
            <NavItems menuItems={menuItems} />
          </div>
        )}

        {isMobileMenu && (
          <div className="mobile-menu-icon" onClick={toggleMenuDrawer}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        )}

        <Outlet />
      </div>
      {isMneuDrawerOpen && isMobileMenu && (
        <div className="mobile-menu-wrapper">
          <NavItems menuItems={menuItems} />
        </div>
      )}
    </>
  );
};

export default Navigation;
