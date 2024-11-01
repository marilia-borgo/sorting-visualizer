import React, { useState } from 'react';
import './SortingAlgorithm.css';

const MergeSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndex, setActiveIndex] = useState(null);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  const mergeSort = async (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  };

  const merge = async (arr, start, mid, end) => {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      setActiveIndex(k);
      if (left[i] < right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    while (i < left.length) {
      arr[k++] = left[i++];
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    while (j < right.length) {
      arr[k++] = right[j++];
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  };

  const startSort = () => {
    const arr = [...array];
    mergeSort(arr);
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

export default MergeSort;
