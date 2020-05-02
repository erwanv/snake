function drawBackground() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(pommeX * gridSize, pommeY * gridSize, gridSize, gridSize);
}

function drawSnake() {
  ctx.fillStyle = "lime";
  for (let i = 0; i < positionsQueue.length; i++) {
    ctx.fillRect(
      positionsQueue[i].x * gridSize,
      positionsQueue[i].y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
    if (
      positionsQueue[i].x === positionX &&
      positionsQueue[i].y === positionY
    ) {
      return gameOver();
    }
  }
}
