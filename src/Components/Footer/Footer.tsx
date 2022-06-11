import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
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
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-title">
          <Link to="/" className="logo-wrapper">
            <img src="/images/Logo/brand_logo_green.png" />
          </Link>
        </div>
        <div className="footer-menu">
          <ul>
            {menuItems?.map((menuItem) => (
              <li key={menuItem.name}>
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-icons">
          {/* <Link to="/" className="footer-icon-links">
            <i className="fab fa-twitter" />
          </Link> */}
          <a
            href="https://www.facebook.com/SubakArt-Studio-100254375231999"
            className="footer-icon-links"
            target="new"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://instagram.com/subakartstudio_?igshid=YmMyMTA2M2Y="
            className="footer-icon-links last-link"
            target="new"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright ©2022 All rights reserved | This template is made by Subak
        Art
      </div>
    </div>
  );
};

export default Footer;
