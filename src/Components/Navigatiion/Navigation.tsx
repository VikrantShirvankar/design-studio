import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/portfolio">Portfolio</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
