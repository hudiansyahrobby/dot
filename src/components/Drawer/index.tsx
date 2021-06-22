import React, { useContext } from 'react';
import { route } from '../../constants/route';
import { AuthContext } from '../../context/AuthProvider';
import firebase from '../../firebase';
import Button from '../Button';
import DrawerMenu from './DrawerMenu';
import './index.scss';

interface DrawerProps {
  isOpen: boolean;
}

const onLogout = () => {
  firebase.auth().signOut();
};

const Drawer: React.FC<DrawerProps> = ({ isOpen }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className={`drawer ${isOpen && 'open'}`}>
      <ul className="drawer-menus">
        {!currentUser ? (
          route.map((r) => <DrawerMenu key={r.name} to={r.to} name={r.name} />)
        ) : (
          <div className="drawer-btn">
            <Button width="full" onClick={onLogout}>
              Logout
            </Button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Drawer;
