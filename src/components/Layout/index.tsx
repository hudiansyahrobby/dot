import React from 'react';
import Drawer from '../Drawer';
import Navbar from '../Navbar';
import Overlay from '../Overlay';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar onClick={onClick} />
      <Drawer isOpen={isOpen} />
      <Overlay onClick={onClick} isOpen={isOpen} />
      {children}
    </div>
  );
};

export default Layout;
