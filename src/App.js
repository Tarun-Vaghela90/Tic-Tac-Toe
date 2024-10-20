import React, { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // 9 squares
  const [xIsNext, setXIsNext] = useState(true); // X starts the game

  // Function to handle clicking a square
  const handleClick = (index) => {
    const newSquares = [...squares]; // Copy the squares array
    if (newSquares[index] || calculateWinner(newSquares)) return; // Ignore clicks if there's a winner or square is filled
    newSquares[index] = xIsNext ? 'X' : 'O'; // Set 'X' or 'O' in the square
    setSquares(newSquares); // Update the board
    setXIsNext(!xIsNext); // Switch turns
  };

  // Determine winner
  const winner = calculateWinner(squares);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Tic-Tac-Toe</h1>
      <div>
        {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {xIsNext ? 'X' : 'O'}</h2>}
      </div>
      <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
        {squares.map((square, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: '100px',
              height: '100px',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}

// Function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
