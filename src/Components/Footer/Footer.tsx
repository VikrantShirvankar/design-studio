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
        <div className="footer-title">Rettro</div>
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
          <Link to="/" className="footer-icon-links">
            <i className="fab fa-twitter" />
          </Link>
          <Link to="/" className="footer-icon-links">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to="/" className="footer-icon-links last-link">
            <i className="fab fa-pinterest-p" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright ©2022 All rights reserved | This template is made by Vikrant
        Shirvankar
      </div>
    </div>
  );
};

export default Footer;
