import React, { useState } from 'react';
import './SortingAlgorithm.css';

const QuickSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndex, setActiveIndex] = useState(null);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  const quickSort = async (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    const pivotIndex = await partition(arr, start, end);
    await quickSort(arr, start, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, end);
  };

  const partition = async (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      setActiveIndex(i);
      if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    setArray([...arr]);
    return pivotIndex;
  };

  const startSort = () => {
    const arr = [...array];
    quickSort(arr);
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
      <button className='buttons-visualizer' onClick={startSort}>Ordenar</button>
      <button className='buttons-visualizer' onClick={() => { setArray(generateRandomArray(10)); setActiveIndex(null); }}>Gerar Novo Array</button>
    </div>
  );
};

export default QuickSort;
