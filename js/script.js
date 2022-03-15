const container = document.querySelector('.grid-container');

const GameBoard = (function () {
  let gameBoard = [];

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.textContent = 'O';
    div.classList.add('.grid-child');
    gameBoard.push(div);
    container.appendChild(div);
  }

  container.setAttribute(
    'style',
    `grid-template-columns:(repeat 3, 1fr); grid-template-rows:(repeat 3, 1fr);`
  );

  return {
    gameBoard,
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
console.log(players);
