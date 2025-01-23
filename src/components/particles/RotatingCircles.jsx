
import React from 'react';

import './RotatingCircles.css';


const RotatingCircles = ({onEduPage}) => {
  return (
    <div className={`atom-container ${onEduPage ? "onEduPage": ""}`}>

      <div className="proton"></div>
      {/* Outer Orbit */}
      <div className="orbit orbit-outer">
        <div className="electron electron-outer"></div>
      </div>

      {/* Middle Orbit */}
      <div className="orbit orbit-middle">
        <div className="electron electron-middle"></div>
      </div>

      {/* Inner Orbit */}
      <div className="orbit orbit-inner">
        <div className="electron electron-inner"></div>
      </div>
    </div>
  );
};

export default RotatingCircles;
