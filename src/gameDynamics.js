const eatingAudio = new Audio("../assets/crunch.mp3");
const gameOverAudio = new Audio("../assets/gameover.wav");

function eatApple() {
  longueurQueue++;
  eatingAudio.play();
  genAppleCoordinates();
}

function genAppleCoordinates() {
  pommeX = Math.floor(Math.random() * tileCount);
  pommeY = Math.floor(Math.random() * tileCount);
  for ({ x, y } of positionsQueue) {
    if (x === pommeX && y === pommeY) {
      genAppleCoordinates();
    }
  }
}

function keyPush(evt) {
  switch (evt.key) {
    case "ArrowUp":
      velociteHorizontale = 0;
      velociteVerticale = -1;
      break;
    case "ArrowDown":
      velociteHorizontale = 0;
      velociteVerticale = 1;
      break;
    case "ArrowRight":
      velociteHorizontale = 1;
      velociteVerticale = 0;
      break;
    case "ArrowLeft":
      velociteHorizontale = -1;
      velociteVerticale = 0;
      break;
    case "+":
      longueurQueue++;
      break;
    case "f":
    case "e":
      enterFullScreen();
      break;
    case "Enter":
      startGameLoop();
    default:
      break;
  }
}

function enterFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function gameOver() {
  drawBackground();
  isGameOver = true;
  intervalId = clearInterval(intervalId);
  ctx.font = "60px Impact";
  ctx.fillStyle = "White";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
  ctx.font = "italic 20px Impact";
  ctx.fillText(
    "-Press Enter to restart-",
    canvas.width / 2,
    canvas.height / 2 + 50
  );
  gameOverAudio.play();
}
