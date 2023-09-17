import React from 'react';
import './OverlayComponent.css';

interface OverlayProps {
  onClose: () => void;
}

const OverlayComponent: React.FC<OverlayProps> = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        {/* Overlay content goes here */}
        <p>This is the overlay content.</p>
        <button onClick={onClose}>Close Overlay</button>
      </div>
    </div>
  );
};

export default OverlayComponent;
