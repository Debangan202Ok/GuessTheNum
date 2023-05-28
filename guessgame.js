const gameBoard = document.querySelector("#gBoard");
const gBox = document.querySelector("#GuessBox");
const inpBox = document.querySelector("#inpBox");
const btn = document.querySelector("#btn");
const gCt = document.querySelector("#guessCloseText");
const gCtImg = document.querySelector("#gCI");
const sc = document.querySelector("#score");
const hSc = document.querySelector("#hScore");
let randNumber = Math.floor(Math.random() * 18 + 1);
let counter = 0;
let highScore = 0;
const guessBtn = function () {
  const inpBoxValue = Number(document.querySelector("#inpBox").value);
  if (inpBoxValue === 0) {
    gCSet("You Enter Nothing", "happy.png");
  } else if (inpBoxValue > 20 || inpBoxValue <= 0) {
    gCSet("Follow the game rule", "happy.png");
  } else if (inpBoxValue > randNumber) {
    gCSet("Guess is too high", "fire.png");
    counter++;
  } else if (inpBoxValue < randNumber) {
    gCSet("Guess is too low", "ice-cubes.png");
    counter++;
  } else if (inpBoxValue === randNumber) {
    gCSet("Your guess is correct", "party.png");
    correctGuess();
    highScore = sc.innerHTML;
    win();
    reset();
  }
  if (Number(counter) === 20) {
    gCSet("Game Over", "sading.png");
    gameOver();
    reset();
  }
  if (inpBoxValue === randNumber && counter === 0) {
    gCSet("IQ is 420!!!!!","shocked.png");
    correctGuess();
    highScore = sc.innerHTML;
    win()
    reset();
  }
  Number(sc.innerHTML = 20 - counter);
  if (counter === 20) {
    counter = 0
  }
};
btn.addEventListener("click", guessBtn);

// -------------functions-------------------
function reset() {
  btn.addEventListener("click", () => window.location.reload());
}

function gCSet(texts, srcs) {
  gCt.innerHTML = texts;
  gCtImg.src = `./icons/${srcs}`;
}
function correctGuess() {
  btn.classList.remove("border-red-500");
  btn.classList.add("border-green-500");
  inpBox.classList.remove("border-red-500");
  inpBox.classList.add("border-green-500");
  gBox.classList.remove("bg-red-500");
  gBox.classList.add("bg-green-500");
}
function win() {
  btn.innerHTML = "Play Again";
  localStorage.setItem('highScore', highScore);
}
function gameOver () {
  gBox.classList.remove("bg-red-500");
  inpBox.classList.add("bg-red-800");
  btn.innerHTML = "Play Again";
}
hSc.innerHTML = localStorage.getItem('highScore');