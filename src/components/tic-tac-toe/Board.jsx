import React, { useState } from "react";
import Square from "./Square";
import "./tic.css";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [xScore, setxScore] = useState(0);
  const [yScore, setyScore] = useState(0);
  var count = 0;

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[a] === state[c] &&
        count < 9
      ) {
        return state[a];
      }
    }

    count++;

    return false;
  };

  const isWinner = checkWinner();

  //   function scoreUpdate() {
  //     if (isWinner === "X") {
  //       setxScore((prev) => prev + 1);
  //       console.log(xScore);
  //     } else if (isWinner === "O") {
  //       setyScore((prev) => prev + 1);
  //       console.log(yScore);
  //     }
  //   }

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      <h1 className="text-dark fs-1 my-5">Tic Tac Toe Game</h1>
      {isWinner ? (
        <>
          {isWinner} won the game <br />
          <button className="btn btn-secondary" onClick={handleReset}>
            Play Again
          </button>
          <br />
          <div
            className="my-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <span>X Score: {xScore}</span>
            <span>y Score: {yScore}</span>
          </div>
          <button className="btn btn-warning w-100" onClick={handleReset}>
            Reset Game
          </button>
        </>
      ) : (
        <>
          <h4
            style={{
              color: isXTurn ? "red" : "blue",
            }}
          >
            Player {isXTurn ? "X" : "O"} please move
          </h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          <button className="btn btn-warning w-100 mt-2" onClick={handleReset}>
            Reset Game
          </button>
        </>
      )}
    </div>
  );
};

export default Board;
