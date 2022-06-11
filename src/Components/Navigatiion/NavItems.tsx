import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  path: string;
  name: string;
}

interface Props {
  menuItems: MenuItem[];
}

const NavItems = (props: Props) => {
  const { menuItems } = props;
  return (
    <>
      {menuItems?.map((menuItem) => (
        <div className="menu-items" key={menuItem.name}>
          <Link to={menuItem.path}>{menuItem.name}</Link>
        </div>
      ))}
    </>
  );
};

export default NavItems;
