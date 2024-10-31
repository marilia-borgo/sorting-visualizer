import React, { useState } from 'react';
import BubbleSort from './components/BubbleSort';
import InsertionSort from './components/InsertionSort';
import SelectionSort from './components/SelectionSort';
import MergeSort from './components/MergeSort';
import './App.css';

const App = () => {
  const [activeAlgorithm, setActiveAlgorithm] = useState('Bubble Sort');

  const renderAlgorithm = () => {
    switch (activeAlgorithm) {
      case 'Bubble Sort':
        return <BubbleSort />;
      case 'Insertion Sort':
        return <InsertionSort />;
      case 'Selection Sort':
        return <SelectionSort />;
      case 'Merge Sort':
        return <MergeSort />;
      default:
        return <BubbleSort />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>──💻‧₊˚🖇️ Algorithm Visualizer ₊˚🎧⊹♡💾── </h1>
        <nav className="tabs">
          {['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort'].map((algorithm) => (
            <button
              key={algorithm}
              className={`tab ${activeAlgorithm === algorithm ? 'active' : ''}`}
              onClick={() => setActiveAlgorithm(algorithm)}
            >
              {algorithm}
            </button>
          ))}
        </nav>
      </header>
      <div className="algorithm-container">
        {renderAlgorithm()}
      </div>
    </div>
  );
};

export default App;
