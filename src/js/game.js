function game() {
  const startScreen = document.getElementById("start-screen");
  startScreen.style.visibility = "hidden";
}

setInterval(game, 1000 / 65);
