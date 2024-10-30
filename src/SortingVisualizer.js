import React from 'react';
import Tabs from './components/Tabs';
import InsertionSort from './components/InsertionSort';
import BubbleSort from './components/BubbleSort';

const SortingVisualizer = () => {
  const tabs = [
    { name: 'Insertion Sort', component: <InsertionSort /> },
    { name: 'Bubble Sort', component: <BubbleSort /> },
  ];

  return (
    <div className="App">
      <h1>Visualizador de Algoritmos de Ordenação</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SortingVisualizer;
