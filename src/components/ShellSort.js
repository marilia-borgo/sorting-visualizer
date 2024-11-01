import React, { useState } from 'react';
import './SortingAlgorithm.css';

const ShellSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndex, setActiveIndex] = useState(null);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }
  
  const shellSort = async () => {
        let arr = [...array];
        let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
      for (let i = gap; i < arr.length; i++) {
        let j = i;
        while (j >= gap && arr[j - gap] > arr[j]) {
          setActiveIndex(j);
          [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 300));
          j -= gap;
        }
      }
      gap = Math.floor(gap / 2);
    }
    setActiveIndex(null);
    setArray(arr);
  };

  return (
    <div className="sorting-algorithm">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${value}px`,
              backgroundColor: idx === activeIndex ? '#4b1535' : '#90e0e0',
            }}
          ></div>
        ))}
      </div>
      <button className='buttons-visualizer' onClick={shellSort}>Ordenar</button>
      <button className='buttons-visualizer' onClick={() => { setArray(generateRandomArray(10)); setActiveIndex(null); }}>Gerar Novo Array</button>
    </div>
  );
};

export default ShellSort;
