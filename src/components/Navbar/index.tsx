import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { route } from '../../constants/route';
import { AuthContext } from '../../context/AuthProvider';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../Logo';
import './index.scss';
import firebase from '../../firebase';
import Button from '../Button';

interface NavbarProps {
  onClick: () => void;
}

const onLogout = () => {
  firebase.auth().signOut();
};

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div id="nav">
      <Logo />
      <div className="nav-menu">
        {!currentUser ? (
          route.map((r) => (
            <NavLink className="nav-link" to={r.to} key={r.name}>
              {r.name}
            </NavLink>
          ))
        ) : (
          <Button onClick={onLogout}>Logout</Button>
        )}
      </div>
      <HamburgerMenu onClick={onClick} />
    </div>
  );
};

export default Navbar;
