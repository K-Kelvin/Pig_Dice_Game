const start_game_btn = document.getElementById("start-game");
const game_instructions = document.getElementById("game-instructions");

start_game_btn.onclick = function () {
  game_instructions.classList.toggle("show");
};
