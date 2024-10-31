import React, { useState } from 'react';
import './SortingAlgorithm.css';

const BubbleSort = () => {
  const [array, setArray] = useState(generateRandomArray(10));
  const [activeIndices, setActiveIndices] = useState([]);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  }

  const bubbleSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    }
    setActiveIndices([]);
    setArray(arr);
  };

  return (
    <div
      className="sorting-algorithm full-screen"
      style={{
        backgroundImage: `url('https://example.com/bubble-sort-bg.jpg')`,
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
              height: `${value}%`,
              backgroundColor: activeIndices.includes(idx) ? '#FF6347' : '#3498db',
            }}
          ></div>
        ))}
      </div>
      <button onClick={bubbleSort}>Ordenar</button>
      <button onClick={() => { setArray(generateRandomArray(10)); setActiveIndices([]); }}>Gerar Novo Array</button>
    </div>
  );
};

export default BubbleSort;
