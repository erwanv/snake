function moveSnakePosition() {
  positionsQueue.push({ x: positionX, y: positionY });
  if (positionsQueue.length > longueurQueue) {
    positionsQueue.shift();
  }
}

function controlVelocityInFrame() {
  if (previousYV === -velociteVerticale) {
    velociteVerticale = previousYV;
  }
  if (previousXV === -velociteHorizontale) {
    velociteHorizontale = previousXV;
  }
}

function setNextPosition() {
  positionX += velociteHorizontale;
  positionY += velociteVerticale;
  previousXV = velociteHorizontale;
  previousYV = velociteVerticale;
  if (positionX < 0) {
    positionX = tileCount - 1;
  }
  if (positionX > tileCount - 1) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = tileCount - 1;
  }
  if (positionY > tileCount - 1) {
    positionY = 0;
  }
}
