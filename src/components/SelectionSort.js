import React, { useState } from 'react';
import './SortingAlgorithm.css';

const SelectionSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndex, setActiveIndex] = useState(null);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  const selectionSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        setActiveIndex(j);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
      }
    }
    setActiveIndex(null);
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
      <button className='buttons-visualizer' onClick={selectionSort}>Ordenar</button>
      <button className='buttons-visualizer' onClick={() => { setArray(generateRandomArray(10)); setActiveIndex(null); }}>Gerar Novo Array</button>
    </div>
  );
};

export default SelectionSort;
