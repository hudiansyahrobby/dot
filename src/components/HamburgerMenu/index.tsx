import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './index.scss';

interface HamburgerMenuProps {
  onClick: () => void;
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => (
  <AiOutlineMenu
    size={25}
    onClick={onClick}
    color="white"
    cursor="pointer"
    className="menu"
  />
);

export default HamburgerMenu;
