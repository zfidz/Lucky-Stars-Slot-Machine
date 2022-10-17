let currentChips = 1000
let currentBet = 0
let wager = 10

const lowerBet = document.getElementById('lower-bet')
const raiseBet = document.getElementById('raise-bet')
const maxBet = document.getElementById('max-bet')
const spinWheel = document.getElementById('spin-slot')

lowerBet.addEventListener('click', onLowerClicked)
raiseBet.addEventListener('click', onRaiseClicked)
maxBet.addEventListener('click', onMaxClicked)
spinWheel.addEventListener('click', onSpinClicked)


function onLowerClicked() {
console.log('lower clicked')
}
function onRaiseClicked() {
    console.log('raise clicked')
}
function onMaxClicked() {
    console.log('max clicked')
}
function onSpinClicked() {
    const symbolOne= getElement('symbol-one')
    const symbolTwo= getElement('symbol-two')
    const symbolThree= getElement('symbol-three')

    const num1 = getRandomNumber()
    const num2 = setTimeout(getRandomNumber(), 1000)
    const num3 = setTimeout(getRandomNumber(), 2000)

    symbolOne.innerHTML = num1
    symbolTwo.innerHTML = num2
    symbolThree.innerHTML = num3

    if (num1 === 3 && num1 === num2 && num1 === num3) {
        console.log("JACKPOT!")
    } else if (num1 === 2 && num1 === num2 && num1 === num3) {
    console.log('you win!')
    } else if (num1 === 1 && num1 === num2 && num1 === num3) {
        console.log('you are a winner')
}else{
    console.log('try again')
}
}
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1
}
function getElement(id) {
    return document.getElementById(id)
}

// function gameOver{

// }

// function resetGame{

// }