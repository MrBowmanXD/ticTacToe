const gridContainer = document.querySelector('.grid-container');
const winMessage = document.querySelector('.win-message');

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

  function _btnClick() {
    board.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.textContent === 'X' || btn.textContent === 'O') {
          return;
        }

        if (playerOnePlaying) {
          if (gamePlaying === false) {
            gamePlaying = true;
          }
          if (gamePlaying) {
            btn.textContent = 'X';
            playerOnePlaying = false;
            _checkWinX();
          }
        } else {
          if (gamePlaying) {
            btn.textContent = 'O';
            playerOnePlaying = true;
            _checkWinO();
          }
        }
      });
    });
  }

  const clickOnBtn = () => {
    _btnClick();
  };

  function _checkWinX() {
    console.log('This function runs');
    if (
      board[0].textContent === 'X' &&
      board[1].textContent === 'X' &&
      board[2].textContent === 'X'
    ) {
      gamePlaying = false;
      const div = document.createElement('div');
      div.textContent = 'Player One wins!';
      div.classList.add('message');
      winMessage.appendChild(div);
    }
  }

  function _checkWinO() {
    if (
      board[0].textContent === 'O' &&
      board[1].textContent === 'O' &&
      board[2].textContent === 'O'
    ) {
      gamePlaying = false;
      const div = document.createElement('div');
      div.textContent = 'Player Two wins!';
      div.classList.add('message');
      winMessage.appendChild(div);
    }
  }

  return {
    clickOnBtn,
  };
})(GameBoard.gameBoard);

const Players = (playerOne, playerTwo) => {
  return { playerOne, playerTwo };
};

const players = Players(prompt('Player One name?'), prompt('Player Two name?'));

GameState.clickOnBtn();
