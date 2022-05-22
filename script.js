// Change button if blank, if not alert
let currentUser = "X";
let boardSquares = Array.from(document.querySelectorAll(".board-square"));
const board = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

function newGame() {
  Object.keys(board).map((key) => (board[key] = ""));
  boardSquares.map((button) => (button.innerText = null));
  currentUser = "X";
}

//change button to whatever is clicked to take turn
boardSquares.map((button, index) => {
  button.addEventListener("click", () => {
    if (board[index + 1]) {
      alert("Tile already filled");
    } else {
      board[index + 1] = currentUser;
      changeButton(index);
      console.log(board);
      checkWin();
    }
  });
});

function changeButton(index) {
  if (currentUser === "X") {
    boardSquares[index].innerText = "X";
    currentUser = "O";
  } else {
    boardSquares[index].innerText = "O";
    currentUser = "X";
  }
}

// CHECK FOR WIN CODE BELOW

function checkWin() {
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let combo of winningCombos) {
    if (combo.every((square) => board[square] === "X")) {
      alert("Player 1 wins!");
      newGame();
      return undefined;
    } else if (combo.every((square) => board[square] === "O")) {
      alert("Player 2 wins!");
      newGame();
      return undefined;
    }
  }
  if (Object.keys(board).every((key) => board[key])) {
      alert("It's a tie");
      newGame();
  }
}
