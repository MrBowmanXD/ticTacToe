const gridContainer = document.querySelector('.grid-container');

const GameBoard = (function () {
  let gameBoard = new Array(9);

  function _pushBtn() {
    for (let i = 0; i < gameBoard.length; i++) {
      const btn = document.createElement('button');
      btn.classList.add('grid-child');
      gameBoard.push(btn);
      gameBoard.shift();
    }
  }

  const populateArray = () => {
    _pushBtn();
  };

  function _displayGrid() {
    gameBoard.forEach((btn) => {
      gridContainer.appendChild(btn);
    });
  }

  const getGrid = () => {
    _displayGrid();
  };

  return {
    populateArray: populateArray,
    getGrid,
  };
})();

const GameState = (function () {
  let gamePlaying = false;

  return {
    gamePlaying,
  };
})();

const Players = (playerOne, playerTwo) => {
  return { playerOne, playerTwo };
};

const players = Players(prompt('Player One name?'), prompt('Player Two name?'));

GameBoard.populateArray();
GameBoard.getGrid();
