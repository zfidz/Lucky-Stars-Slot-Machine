let currentCredits = 1000
let currentBet = 0
let lastWin = 0

const lowerBet = document.getElementById('lower-bet')
const raiseBet = document.getElementById('raise-bet')
const maxBet = document.getElementById('max-bet')
const spinWheel = document.getElementById('spin-slot')

lowerBet.addEventListener('click', onLowerClicked)
raiseBet.addEventListener('click', onRaiseClicked)
maxBet.addEventListener('click', onMaxClicked)
spinWheel.addEventListener('click', onSpinClicked)


function onLowerClicked() {
let minusBet = currentBet - 10
currentBet = minusBet
console.log(currentBet)
let addCredits = currentCredits + 10
currentCredits = addCredits
console.log(currentCredits)
}

function onRaiseClicked() {
    let addBet = currentBet + 10
currentBet = addBet
console.log(addBet)
let minusCredits = currentCredits - 10
currentCredits = minusCredits
console.log(currentCredits)
}
function onMaxClicked() {
    let maxBet = currentCredits + currentBet
    currentCredits = maxBet-maxBet
    console.log(currentCredits)
    currentBet = maxBet
    console.log(currentBet)
}
function onSpinClicked() {
    const symbolOne= getElement('symbol-one')
    const symbolTwo= getElement('symbol-two')
    const symbolThree= getElement('symbol-three')

    const num1 = getRandomNumber()
    const num2 = getRandomNumber()
    const num3 = getRandomNumber()

    symbolOne.innerHTML = num1
    symbolTwo.innerHTML = num2
    symbolThree.innerHTML = num3

    if (num1 === 3 && num1 === num2 && num1 === num3) {
        currentCredits = currentBet * 3 + currentCredits
        currentBet=0
        lastWin = currentBet * 3
        console.log('Jackpot!!!')
    } else if (num1 === 2 && num1 === num2 && num1 === num3) {
        currentCredits = currentBet * 2 + currentCredits
        currentBet=0
        lastWin = currentBet * 2
        console.log('Winner!!')
    } else if (num1 === 1 && num1 === num2 && num1 === num3) {
        currentCredits = currentBet * 2 + currentCredits
        currentBet=0
        lastWin = currentBet * 2
        console.log('You Win!')
}else{
    currentBet= 0
    console.log('Try Again.')
}
}
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1
}
function getElement(id) {
    return document.getElementById(id)
}
document.getElementsByClassName('current-bet').innerHTML = currentBet
document.getElementsByClassName('total-credits').innerHTML = currentCredits
document.getElementsByClassName('last-win').innerHTML = lastWin
// function gameOver{
// if(currentBet === 0 && currentCredits === 0)
// console.log('GameOver')
// }

// function resetGame{

// }