import React from 'react'

const TargetColorDisplay = ({targetColor}) => {
  return (
    <div className="target">
      <h1>Target Color: ???</h1>
      <div
        className="target-color"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>
    </div>
  );
}

export default TargetColorDisplay