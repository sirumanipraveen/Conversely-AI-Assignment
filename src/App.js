import React, { useState } from 'react';

function App() {
  const [matrix, setMatrix] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
  const [sequence, setSequence] = useState([]);
  const [lastBoxClicked, setLastBoxClicked] = useState(false);

  const handleClick = (i, j) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = !newMatrix[i][j];
    setMatrix(newMatrix);
    setSequence((prevSequence) => [...prevSequence, [i, j]]);
    if (sequence.length === 8) {
      setLastBoxClicked(true);
    }
  };

  React.useEffect(() => {
    if (lastBoxClicked) {
      sequence.forEach(([i, j], index) => {
        setTimeout(() => {
          const newMatrix = [...matrix];
          newMatrix[i][j] = 'orange';
          setMatrix(newMatrix);
        }, 1000 * index);
      });
    }
  }, [lastBoxClicked, sequence, matrix]);

  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <div
              key={j}
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: cell === 'orange' ? 'orange' : cell ? 'green' : 'white',
                border: '1px solid black',
                display: 'inline-block'
              }}
              onClick={() => handleClick(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;