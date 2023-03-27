import React, { useState } from 'react';
import './App.css';

function App() {
  const [options, setOptions] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;
    if (value.startsWith('/')) {
      setOptions(['Heading', 'Sub-Heading', 'Italics', 'Bullets', 'Numbering']);
    } else {
      setOptions([]);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <input type="text" onChange={handleInputChange} />
        {options.length > 0 && (
          <div className="options">
            {options.map((option) => (
              <div key={option}>{option}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
