let canvas;
let ctx;
let intervalId;
let velociteHorizontale;
let velociteVerticale;
let previousXV;
let previousYV;
let positionX;
let positionY;
let gridSize = 20;
let tileCount = 40;
let pommeX;
let pommeY;
let positionsQueue = [];
let longueurQueue;
let isGameOver;

window.onload = () => {
  canvas = document.getElementById("gc");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyPush);
  startGameLoop();
};

function startGameLoop() {
  if (!intervalId) {
    isGameOver = false;
    velociteHorizontale = 1;
    velociteVerticale = 0;
    positionX = 0;
    positionY = 0;
    longueurQueue = 5;
    positionsQueue = [];
    intervalId = setInterval(game, 1000 / 18);
    genAppleCoordinates();
  }
}

function game() {
  controlVelocityInFrame();
  setNextPosition();
  drawBackground();
  drawSnake();
  moveSnakePosition();
  if (pommeX === positionX && pommeY === positionY) {
    eatApple();
  }
  if (!isGameOver) {
    drawApple();
  }
}
