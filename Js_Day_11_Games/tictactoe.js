// Tic Tac Toe in JavaScript (console-based)

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X";

// Function to print the board
function printBoard() {
  console.log(`
   ${board[0]} | ${board[1]} | ${board[2]}
  ---+---+---
   ${board[3]} | ${board[4]} | ${board[5]}
  ---+---+---
   ${board[6]} | ${board[7]} | ${board[8]}
  `);
}

// Function to check winner
function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== " " && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.includes(" ") ? null : "Draw";
}

// Function to make a move
function makeMove(position) {
  if (board[position] === " ") {
    board[position] = currentPlayer;
    let winner = checkWinner();
    printBoard();
    if (winner) {
      console.log(winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`);
      return true; // game ends
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    console.log("Invalid move! Try again.");
  }
  return false;
}

// Example game (manual moves):
printBoard();
makeMove(0); // X
makeMove(4); // O
makeMove(1); // X
makeMove(8); // O
makeMove(2); // X wins
