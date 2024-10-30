import React, { useState } from 'react';
import './SortingAlgorithm.css';

const InsertionSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndex, setActiveIndex] = useState(null);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  const insertionSort = async () => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        setActiveIndex(j);
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 300));
        j--;
      }
    }
    setActiveIndex(null);
    setArray(arr);
  };

  return (
    <div
        className="sorting-algorithm"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/1200px-Strawberries.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}
    >
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${value}px`,
              backgroundColor: idx === activeIndex ? '#FF6347' : '#3498db',
            }}
          ></div>
        ))}
      </div>
      <button onClick={insertionSort}>Ordenar</button>
      <button onClick={() => { setArray(generateRandomArray(10)); setActiveIndex(null); }}>Gerar Novo Array</button>
    </div>
  );
};

export default InsertionSort;
