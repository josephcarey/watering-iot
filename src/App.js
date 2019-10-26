import React from 'react';
import './App.css';
import PlantInfo from './components/PlantInfo';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Connected Houseplant Watering System
        </p>
      </header>
      <h2>
        Plant Info should be displayed below:
      </h2>
      <PlantInfo />
    </div>
  );
}

export default App;
