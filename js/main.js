let currentCredits = 1000
let currentBet = 0
let lastWin = 0
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
	console.log(currentCredits)
	currentBet = maxBet
	console.log(currentBet)
	updateValues()
}

function onSpinClicked() {
	const symbolOne = getElement('symbol-one')
	const symbolTwo = getElement('symbol-two')
	const symbolThree = getElement('symbol-three')
	const noti = getElement('notification')
	const num1 = getRandomNumber()
	// if (num1 === 1) {
	// 	num1 = "Hello"
	// }else if (num1 === 2) {
	// 	num1 = "Goodbye"
	// }else {
	// 	num1 = "Jackpot!"
	// }
	const num2 = getRandomNumber()
	const num3 = getRandomNumber()
	setTimeout(function() {
		symbolOne.innerHTML = num1
	}, 750)
	setTimeout(function() {
		symbolTwo.innerHTML = num2
	}, 1500)
	setTimeout(function() {
		symbolThree.innerHTML = num3
	}, 2250)
	setTimeout(function() {
		if (num1 === 3 && num1 === num2 && num1 === num3) {
			currentCredits = currentBet * 3 + currentCredits
			lastWin = currentBet * 3
			currentBet = 0
			noti.innerHTML= 'Jackpot!!!'
			setTimeout(function() {
				noti.innerHTML = ''
			}, 1500)
		} else if (num1 === 2 && num1 === num2 && num1 === num3) {
			currentCredits = currentBet * 2 + currentCredits
			lastWin = currentBet * 2
			currentBet = 0
			noti.innerHTML= 'Winner!!'
			setTimeout(function() {
				noti.innerHTML = ''
			}, 1500)
		} else if (num1 === 1 && num1 === num2 && num1 === num3) {
			currentCredits = currentBet * 2 + currentCredits
			lastWin = currentBet * 2
			currentBet = 0
			noti.innerHTML= 'You Win!'
			setTimeout(function() {
				noti.innerHTML = ''
			}, 1500)
		} else {
			currentBet = 0
			noti.innerHTML= 'Try Again!'
			setTimeout(function() {
				noti.innerHTML = ''
			}, 1500)
		}
		updateValues()
		gameOver()
	}, 2500)
}

function getRandomNumber() {
	return Math.floor(Math.random() * 3) + 1
}

function getElement(id) {
	return document.getElementById(id)
}

function updateValues() {
	document.getElementById("current-bet").innerHTML = 'Current Bet: ' + currentBet
	document.getElementById("total-credits").innerHTML = 'Credits: ' + currentCredits
	document.getElementById("last-win").innerHTML = 'Last Win: ' + lastWin
}

function gameOver(){
if(currentBet === 0 && currentCredits === 0)
console.log('GameOver')
}

function resetGame(){
	currentCredits = 1000
	currentBet = 0
	lastWin = 0
}