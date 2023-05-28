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
let higScore;
const guessBtn = function () {
  const inpBoxValue = Number(document.querySelector("#inpBox").value);
  if (inpBoxValue === 0) {
    gCt.innerHTML = "You Enter Nothing";
    gCtImg.src = "./icons/happy.png";
  } else if (inpBoxValue > 20 || inpBoxValue <= 0) {
    gCt.innerHTML = "Follow the game rule";
    gCtImg.src = "./icons/happy.png";
  } else if (inpBoxValue > randNumber) {
    gCt.innerHTML = "Guess is too high";
    gCtImg.src = "./icons/fire.png";
    counter++;
  } else if (inpBoxValue < randNumber) {
    gCt.innerHTML = "Guess is too low";
    gCtImg.src = "./icons/ice-cubes.png";
    counter++;
  } else if (inpBoxValue === randNumber) {
    gCt.innerHTML = "Your guess is correct";
    gCtImg.src = "./icons/party.png";
    btn.classList.remove("border-red-500");
    inpBox.classList.remove("border-red-500");
    btn.classList.add("border-green-500");
    inpBox.classList.add("border-green-500");
    gBox.classList.remove("bg-red-500");
    gBox.classList.add("bg-green-500");
    btn.innerHTML = "Play Again";
    hSc.innerHTML = higScore;
    btn.addEventListener("click", reset);
  }
  if (Number(counter) === 20) {
    gCt.innerHTML = "Game Over";
    gCtImg.src = "./icons/sading.png";
    gBox.classList.remove("bg-red-500");
    inpBox.classList.add("bg-red-800");
    btn.innerHTML = "Play Again";
    btn.addEventListener("click", reset);
  }
  if (inpBoxValue === randNumber && counter === 0) {
    gCt.innerHTML = "IQ is 420!!!!!";
    gCtImg.src = "./icons/shocked.png";
    btn.classList.remove("border-red-500");
    inpBox.classList.remove("border-red-500");
    btn.classList.add("border-green-500");
    inpBox.classList.add("border-green-500");
    gBox.classList.remove("bg-red-500");
    gBox.classList.add("bg-green-500");
    btn.innerHTML = "Play Again";
    hSc.innerHTML = score.innerHTML;
    btn.addEventListener("click", reset);
  }
  higScore = Number((score.innerHTML = 20 - counter));
};
btn.addEventListener("click", guessBtn);
function reset() {
  window.location.reload();
}
