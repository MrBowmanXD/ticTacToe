const gridContainer = document.querySelector('.grid-container');

const GameBoard = (function () {
  let gameBoard = new Array(9);

  function _pushBtn() {
    for (let i = 0; i < gameBoard.length; i++) {
      const btn = document.createElement('button');
      btn.classList.add('grid-child');
      btn.classList.add(`btn${i}`);
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
    populateArray,
    getGrid,
    gameBoard,
  };
})();

GameBoard.populateArray();
GameBoard.getGrid();

const GameState = (function (board) {
  let gamePlaying = false;
  let playerOnePlaying = true;
  // let clickedWrongBtn = false;

  function _btnClick() {
    board.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (playerOnePlaying) {
          if (gamePlaying === false) {
            gamePlaying = true;
          }
          if (gamePlaying) {
            if (btn.textContent != 'X' || btn.textContent != 'O') {
              btn.textContent = 'X';
              playerOnePlaying = false;
            }
          }
        } else {
          if (gamePlaying) {
            if (btn.textContent != 'X' || btn.textContent != 'O') {
              btn.textContent = 'O';
              playerOnePlaying = true;
            }
          }
        }
      });
    });
  }

  const clickOnBtn = () => {
    _btnClick();
  };

  return {
    clickOnBtn,
  };
})(GameBoard.gameBoard);

const Players = (playerOne, playerTwo) => {
  return { playerOne, playerTwo };
};

const players = Players(prompt('Player One name?'), prompt('Player Two name?'));

GameState.clickOnBtn();
