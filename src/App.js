import React, { useState } from 'react';
import InsertionSort from './components/InsertionSort';
import SelectionSort from './components/SelectionSort';
import MergeSort from './components/MergeSort';
import ShellSort from './components/ShellSort';
import QuickSort from './components/QuickSort';

import './App.css';

const App = () => {
  const [activeAlgorithm, setActiveAlgorithm] = useState('Bubble Sort');

  const renderAlgorithm = () => {
    switch (activeAlgorithm) {
      case 'Selection Sort':
        return <SelectionSort />;
      case 'Insertion Sort':
        return <InsertionSort />;
      case 'Merge Sort':
        return <MergeSort />;
      case 'Shell Sort':
        return <ShellSort />;
      case 'Quick Sort':
        return <QuickSort />;
      default:
        return <InsertionSort />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>──💻‧₊˚🖇️ Algorithm Visualizer ₊˚🎧⊹♡💾── </h1>
        <nav className="tabs">
          {[ 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Shell Sort', 'Quick Sort'].map((algorithm) => (
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
      <div className={`algorithm-container ${activeAlgorithm.replace(" ", "-").toLowerCase()}`}>
        {renderAlgorithm()}
      </div>
    </div>
  );
};

export default App;
