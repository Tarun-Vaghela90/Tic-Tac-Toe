

import React, { useState } from 'react';
import Square from './components/Squar';
import './styles.css';

function App() {
  const initialSquares = Array(9).fill(null); // Initialize squares
  const [squares, setSquares] = useState(initialSquares); // State for squares
  const [xIsNext, setXIsNext] = useState(true); // X starts the game

  // Function to handle clicking a square
  function handleClick(index) {
    const newSquares = squares.slice(); // Copy the squares array
    if (newSquares[index] || calculateWinner(newSquares)) {
      return; // Ignore clicks if there's a winner or square is filled
    }
    if (xIsNext) {
      newSquares[index] = 'X'; // Set 'X' in the square
    } else {
      newSquares[index] = 'O'; // Set 'O' in the square
    }
    setSquares(newSquares); // Update the board
    setXIsNext(!xIsNext); // Switch turns
  }

  // Determine winner
  const winner = calculateWinner(squares);

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div>
        {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {xIsNext ? 'X' : 'O'}</h2>}
      </div>
      <div className="board">
        {squares.map(function (square, i) {
          return (
            <Square 
              key={i} 
              value={square} 
              onClick={function () { handleClick(i); }} 
            />
          );
        })}
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
    const a = lines[i][0];
    const b = lines[i][1];
    const c = lines[i][2];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner
    }
  }
  return null; // No winner
}

export default App;
