import React from 'react';
import { NavLink } from 'react-router-dom';

interface DrawerMenuProps {
  to: string;
  name: string;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ to, name }) => (
  <li className="drawer-menu">
    <NavLink
      activeClassName="drawer-active"
      exact
      className="drawer-link"
      to={to}
    >
      {name}
    </NavLink>
  </li>
);

export default DrawerMenu;
