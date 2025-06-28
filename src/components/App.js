import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const colorConfig = [
  { id: 1, label: 'Red', value: 'red' },
  { id: 2, label: 'Green', value: 'green' },
  { id: 3, label: 'Blue', value: 'blue' },
  { id: 4, label: 'Orange', value: 'orange' },
];

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div>
      <h2>Handler Prop Demo</h2>

      <ColourSelector
        colors={colorConfig}
        onColorSelect={(color) => setSelectedColor(color)}
      />

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
