let currentCredits = 1000;
let currentBet = 0;
let lastWin = 0;
const symbolOne = document.getElementById("symbol-one");
const symbolTwo = document.getElementById("symbol-two");
const symbolThree = document.getElementById("symbol-three");
document.getElementById("current-bet").innerHTML = "My Bet: " + currentBet;
document.getElementById("total-credits").innerHTML =
  "Credits: " + currentCredits;
document.getElementById("last-win").innerHTML = "Last Win: " + lastWin;
const lowerBet = document.getElementById("lower-bet");
const reset = document.getElementById("reset");
const raiseBet = document.getElementById("raise-bet");
const maxBet = document.getElementById("max-bet");
const spinWheel = document.getElementById("spin-slot");
lowerBet.addEventListener("click", onLowerClicked);
reset.addEventListener("click", resetGame);
raiseBet.addEventListener("click", onRaiseClicked);
maxBet.addEventListener("click", onMaxClicked);
spinWheel.addEventListener("click", onSpinClicked);

function onLowerClicked() {
  let minusBet = currentBet - 10;
  currentBet = minusBet;
  let addCredits = currentCredits + 10;
  currentCredits = addCredits;
  if (currentBet < 0) {
    currentBet = currentBet + 10;
    currentCredits = currentCredits - 10;
  }
  updateValues();
}

function onRaiseClicked() {
  let addBet = currentBet + 10;
  currentBet = addBet;
  let minusCredits = currentCredits - 10;
  currentCredits = minusCredits;
  if (currentCredits < 0) {
    currentCredits = currentCredits + 10;
    currentBet = currentBet - 10;
  }
  updateValues();
}

function onMaxClicked() {
  let maxBet = currentCredits + currentBet;
  currentCredits = maxBet - maxBet;
  currentBet = maxBet;
  updateValues();
}

function onSpinClicked() {
  const symbols = [symbolOne, symbolTwo, symbolThree];
  symbols.forEach((symbol) => (symbol.style.backgroundImage = ""));

  const noti = document.getElementById("notification");
  const numbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
  const images = ["Astronaut", "Rocket", "Saturn"];

  if (currentBet === 0) {
    noti.innerHTML = "Please Enter Bet";
    return setTimeout(
      () => (document.getElementById("notification").innerHTML = ""),
      1500
    );
  }

  for (let i = 0; i < 3; i++) {
    let j = 0;
    const interval = setInterval(() => {
      j++;
      symbols[i].style.backgroundImage = `url('images/${images[j % 3]}.png')`;
      if (j >= 30) {
        clearInterval(interval);
        symbols[i].style.backgroundImage = `url('images/${
          images[numbers[i] - 1]
        }.png')`;
      }
    }, 25 * (i + 1));
  }

  setTimeout(() => {
    const winCombos = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ];
    const winAmts = [4, 6, 10];

    const index = winCombos.findIndex((combo) =>
      combo.every((num, i) => num === numbers[i])
    );
    if (index !== -1) {
      const winAmt = currentBet * winAmts[index];
      currentCredits += winAmt;
      lastWin = winAmt;
      currentBet = 0;
      noti.innerHTML = index === 8 ? "Jackpot!!!" : "Winner!!";
    } else {
      if (currentCredits <= 0 && currentBet === 0) {
        gameOver();
      } else {
        noti.innerHTML = "Try Again!";
      }
      currentBet = 0;
    }
    updateValues();
    setTimeout(() => (noti.innerHTML = ""), 1500);
  }, 2000);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function updateValues() {
  document.getElementById("current-bet").innerHTML =
    "Current Bet: " + currentBet;
  document.getElementById("total-credits").innerHTML =
    "Credits: " + currentCredits;
  document.getElementById("last-win").innerHTML = "Last Win: " + lastWin;
}

function gameOver() {
  if (currentBet === 0 && currentCredits === 0)
    document.getElementById("notification").innerHTML = "GAME OVER";
}

function resetGame() {
  currentCredits = 1000;
  currentBet = 0;
  lastWin = 0;
  document.getElementById("notification").innerHTML = "";
  symbolOne.style.backgroundImage = "";
  symbolTwo.style.backgroundImage = "";
  symbolThree.style.backgroundImage = "";
  updateValues();
}
