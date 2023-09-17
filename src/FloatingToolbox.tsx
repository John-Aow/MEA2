import React from 'react';
import './FloatingToolbox.css';

interface FloatingToolboxProps {
  isVisible: boolean;
}

const FloatingToolbox: React.FC<FloatingToolboxProps> = ({ isVisible }) => {
  return (
    <div className={`floating-toolbox ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Toolbox content goes here */}
      <button onClick={() => console.log('Tool clicked')}>Tool 1</button>
      <button onClick={() => console.log('Tool clicked')}>Tool 2</button>
    </div>
  );
};

export default FloatingToolbox;
