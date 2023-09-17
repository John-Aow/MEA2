import React, { useState } from 'react';
import OverlayComponent from './OverlayComponent';
import './YourComponent.css';

const YourComponent: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="container">
      <button onClick={toggleOverlay}>Toggle Overlay</button>

      {showOverlay && <OverlayComponent onClose={toggleOverlay} />}
    </div>
  );
};

export default YourComponent;
