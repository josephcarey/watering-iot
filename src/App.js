import React from 'react';
import './App.css';
import PlantInfo from './components/PlantInfo';

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          Connected Houseplant Watering System
        </h2>
      </header>
      <h4>
        Some text:
      </h4>
      <PlantInfo />
    </div>
  );
}

export default App;
