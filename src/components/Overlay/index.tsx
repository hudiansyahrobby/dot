import React from 'react';
import './index.scss';

interface OverlayProps {
  onClick: () => void;
  isOpen: boolean;
}
const Overlay: React.FC<OverlayProps> = ({ onClick, isOpen }) => (
  <div className={`overlay ${isOpen && 'open'}`} onClick={onClick} />
);

export default Overlay;
