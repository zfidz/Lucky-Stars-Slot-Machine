const lowerBet = document.getElementById('lower-bet')
const raiseBet = document.getElementById('raise-bet')
const maxBet = document.getElementById('max-bet')
const spinWheel = document.getElementById('spin-slot')
console.log(raiseBet)
console.log(lowerBet)
console.log(maxBet)
console.log(spinWheel)
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
    console.log('spin to win')
}

