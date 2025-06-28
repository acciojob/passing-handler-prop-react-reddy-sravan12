import React, { useState } from 'react';
// import './styles.css'; // if using external CSS

function Selection({ selectedColor }) {
  const [boxColor, setBoxColor] = useState('');

  const applyColor = () => {
    setBoxColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      onClick={applyColor}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: boxColor,
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      <p>Selection</p>
    </div>
  );
}

export default Selection;
