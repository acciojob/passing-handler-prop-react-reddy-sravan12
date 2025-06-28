import React from 'react';

function ColourSelector({ colors, onColorSelect }) {
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color.id}
          style={{
            marginRight: '10px',
            padding: '10px',
            backgroundColor: color.value,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => onColorSelect(color.value)}
        >
          {color.label}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
