import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const colors = [
  { id: 1, label: 'Red', value: 'red' },
  { id: 2, label: 'Blue', value: 'blue' },
  { id: 3, label: 'Green', value: 'green' },
];

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Select the gradient and then the box to change color</h1>
      <ColourSelector colors={colors} onColorSelect={handleColorSelect} />
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {/* Render 3 selection boxes */}
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
