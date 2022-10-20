let currentCredits = 1000
let currentBet = 0
let lastWin = 0
const symbolOne = document.getElementById('symbol-one')
const symbolTwo = document.getElementById('symbol-two')
const symbolThree = document.getElementById('symbol-three')
document.getElementById("current-bet").innerHTML = 'My Bet: ' + currentBet
document.getElementById("total-credits").innerHTML = 'Credits: ' + currentCredits
document.getElementById("last-win").innerHTML = 'Last Win: ' + lastWin
const lowerBet = document.getElementById('lower-bet')
const reset = document.getElementById('reset')
const raiseBet = document.getElementById('raise-bet')
const maxBet = document.getElementById('max-bet')
const spinWheel = document.getElementById('spin-slot')
lowerBet.addEventListener('click', onLowerClicked)
reset.addEventListener('click', resetGame)
raiseBet.addEventListener('click', onRaiseClicked)
maxBet.addEventListener('click', onMaxClicked)
spinWheel.addEventListener('click', onSpinClicked)

function onLowerClicked() {
	let minusBet = currentBet - 10
	currentBet = minusBet
	let addCredits = currentCredits + 10
	currentCredits = addCredits
	if (currentBet < 0) {
		currentBet = currentBet + 10
		currentCredits = currentCredits - 10
	}
	updateValues()
}

function onRaiseClicked() {
	let addBet = currentBet + 10
	currentBet = addBet
	let minusCredits = currentCredits - 10
	currentCredits = minusCredits
	if (currentCredits < 0) {
		currentCredits = currentCredits + 10
		currentBet = currentBet - 10
	}
	updateValues()
}

function onMaxClicked() {
	let maxBet = currentCredits + currentBet
	currentCredits = maxBet - maxBet
	currentBet = maxBet
	updateValues()
}

function onSpinClicked() {
	symbolOne.style.backgroundImage = ""
	symbolTwo.style.backgroundImage = ""
	symbolThree.style.backgroundImage = ""
	if (currentBet === 0) {
		document.getElementById('notification').innerHTML = 'Please Enter Bet'
		setTimeout(function() {
			document.getElementById('notification').innerHTML = ''
		}, 1500)
	} else {
		const noti = document.getElementById('notification')
		let num1 = getRandomNumber()
		let num2 = getRandomNumber()
		let num3 = getRandomNumber()
		setTimeout(function() {
			if (num1 === 1) {
				symbolOne.style.backgroundImage = "url('images/Astronaut.png')"
			} else if (num1 === 2) {
				symbolOne.style.backgroundImage = "url('images/Rocket.png')"
			} else if (num1 === 3) {
				symbolOne.style.backgroundImage = "url('images/Saturn.png')"
			}
		}, 750)
		setTimeout(function() {
			if (num2 === 1) {
				symbolTwo.style.backgroundImage = "url('images/Astronaut.png')"
			} else if (num2 === 2) {
				symbolTwo.style.backgroundImage = "url('images/Rocket.png')"
			} else if (num2 === 3) {
				symbolTwo.style.backgroundImage = "url('images/Saturn.png')"
			}
		}, 1500)
		setTimeout(function() {
			if (num3 === 1) {
				symbolThree.style.backgroundImage = "url('images/Astronaut.png')"
			} else if (num3 === 2) {
				symbolThree.style.backgroundImage = "url('images/Rocket.png')"
			} else if (num3 === 3) {
				symbolThree.style.backgroundImage = "url('images/Saturn.png')"
			}
		}, 2250)
		setTimeout(function() {
			if (num1 === 3 && num1 === num2 && num1 === num3) {
				currentCredits = currentBet * 10 + currentCredits
				lastWin = currentBet * 10
				currentBet = 0
				noti.innerHTML = 'Jackpot!!!'
				setTimeout(function() {
					noti.innerHTML = ''
				}, 1500)
			} else if (num1 === 2 && num1 === num2 && num1 === num3) {
				currentCredits = currentBet * 4 + currentCredits
				lastWin = currentBet * 6
				currentBet = 0
				noti.innerHTML = 'Winner!!'
				setTimeout(function() {
					noti.innerHTML = ''
				}, 1500)
			} else if (num1 === 1 && num1 === num2 && num1 === num3) {
				currentCredits = currentBet * 4 + currentCredits
				lastWin = currentBet * 4
				currentBet = 0
				noti.innerHTML = 'You Win!'
				setTimeout(function() {
					noti.innerHTML = ''
				}, 1500)
			} else {
				if (currentCredits > 0) {
					noti.innerHTML = 'Try Again!'
					currentBet = 0
					setTimeout(function() {
						noti.innerHTML = ''
					}, 1500)
				} else {
					currentBet = 0
					gameOver()
				}
			}
			updateValues()
		}, 2500)
	}
}

function getRandomNumber() {
	return Math.floor(Math.random() * 3) + 1
}

function updateValues() {
	document.getElementById("current-bet").innerHTML = 'Current Bet: ' + currentBet
	document.getElementById("total-credits").innerHTML = 'Credits: ' + currentCredits
	document.getElementById("last-win").innerHTML = 'Last Win: ' + lastWin
}

function gameOver() {
	if (currentBet === 0 && currentCredits === 0) document.getElementById('notification').innerHTML = 'GAME OVER'
}

function resetGame() {
	currentCredits = 1000
	currentBet = 0
	lastWin = 0
	document.getElementById('notification').innerHTML = ''
	symbolOne.style.backgroundImage = ""
	symbolTwo.style.backgroundImage = ""
	symbolThree.style.backgroundImage = ""
	updateValues()
}